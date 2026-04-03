#!/usr/bin/env node

/**
 * Content Metrics Report
 *
 * Scans all registered modules and lessons to produce word counts,
 * content-block distributions, question/passage card counts,
 * and difficulty breakdowns — per-lesson, per-module, and per-section.
 *
 * Outputs:
 *   docs/operations/audits/content-metrics.json   (machine-readable)
 *   docs/operations/audits/content-metrics.md     (human-readable)
 *
 * Run:  node scripts/content-metrics.mjs
 *   or: npm run metrics:content
 */

import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import {
  ROOT_DIR,
  QUESTION_BANK_MODULE_DIRS,
  getRegisteredContentModuleIds,
  getRouteModuleId,
  getModuleTitle,
  getModuleCategory,
  getModuleUnit,
  getModuleDescription,
  readRegisteredLessons,
  parseLessonMeta,
  estimateWordCount,
  countBlockTypes,
  countCardTypes,
  extractDifficultyDistribution,
} from './lib/registeredLessons.mjs';

const AUDIT_DIR = join(ROOT_DIR, 'docs', 'operations', 'audits');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function sumDistributions(distributions) {
  const totals = {};
  for (const dist of distributions) {
    for (const [key, value] of Object.entries(dist)) {
      totals[key] = (totals[key] || 0) + value;
    }
  }
  return totals;
}

function totalBlocks(blockTypeDist) {
  return Object.values(blockTypeDist).reduce((sum, n) => sum + n, 0);
}

function normalizeSection(category) {
  const upper = (category || '').trim().toUpperCase();
  if (upper.includes('LR') || upper.includes('LOGICAL')) return 'Logical Reasoning';
  if (upper.includes('RC') || upper.includes('READING')) return 'Reading Comprehension';
  if (upper.includes('ADVANCED')) return 'Advanced Passages';
  return 'Other';
}

// ---------------------------------------------------------------------------
// 1. Scan all lessons
// ---------------------------------------------------------------------------

console.log('Scanning modules…');

const contentModuleIds = getRegisteredContentModuleIds();
const lessonRows = readRegisteredLessons({ contentModuleIds });

// Build per-lesson metrics
const lessonMetrics = lessonRows.map((row) => {
  const meta = parseLessonMeta(row.content, row.filePath);
  const wordCount = estimateWordCount(row.content);
  const blockTypes = countBlockTypes(row.content);
  const cards = countCardTypes(row.content);
  const difficulty = extractDifficultyDistribution(row.content);

  return {
    contentModuleId: row.contentModuleId,
    routeModuleId: row.routeModuleId,
    moduleTitle: row.moduleTitle,
    lessonOrder: row.lessonOrder,
    lessonId: meta.id || `${row.contentModuleId}-${row.lessonOrder}`,
    title: meta.title || '(untitled)',
    wordCount,
    blockCount: totalBlocks(blockTypes),
    blockTypeDistribution: blockTypes,
    ...cards,
    difficultyDistribution: difficulty,
  };
});

// ---------------------------------------------------------------------------
// 2. Aggregate per-module
// ---------------------------------------------------------------------------

const moduleMap = new Map();

for (const lm of lessonMetrics) {
  if (!moduleMap.has(lm.contentModuleId)) {
    const category = getModuleCategory(lm.contentModuleId);
    moduleMap.set(lm.contentModuleId, {
      contentModuleId: lm.contentModuleId,
      routeModuleId: lm.routeModuleId,
      title: lm.moduleTitle,
      category,
      section: normalizeSection(category),
      unit: getModuleUnit(lm.contentModuleId),
      description: getModuleDescription(lm.contentModuleId),
      isQuestionBank: QUESTION_BANK_MODULE_DIRS.has(`module${lm.contentModuleId}`),
      lessonCount: 0,
      totalWordCount: 0,
      questionCardCount: 0,
      passageCardCount: 0,
      questionPassageCardCount: 0,
      blockTypeDistribution: {},
      difficultyDistribution: {},
      lessons: [],
    });
  }

  const mod = moduleMap.get(lm.contentModuleId);
  mod.lessonCount++;
  mod.totalWordCount += lm.wordCount;
  mod.questionCardCount += lm.questionCard;
  mod.passageCardCount += lm.passageCard;
  mod.questionPassageCardCount += lm.questionPassageCard;
  mod.blockTypeDistribution = sumDistributions([mod.blockTypeDistribution, lm.blockTypeDistribution]);
  mod.difficultyDistribution = sumDistributions([mod.difficultyDistribution, lm.difficultyDistribution]);
  mod.lessons.push({
    lessonId: lm.lessonId,
    order: lm.lessonOrder,
    title: lm.title,
    wordCount: lm.wordCount,
    blockCount: lm.blockCount,
    blockTypeDistribution: lm.blockTypeDistribution,
    questionCard: lm.questionCard,
    passageCard: lm.passageCard,
    questionPassageCard: lm.questionPassageCard,
    difficultyDistribution: lm.difficultyDistribution,
  });
}

const modules = [...moduleMap.values()].sort((a, b) => a.routeModuleId - b.routeModuleId);

// ---------------------------------------------------------------------------
// 3. Section + course totals
// ---------------------------------------------------------------------------

function buildSectionTotals(mods) {
  return {
    moduleCount: mods.length,
    lessonCount: mods.reduce((s, m) => s + m.lessonCount, 0),
    totalWordCount: mods.reduce((s, m) => s + m.totalWordCount, 0),
    questionCardCount: mods.reduce((s, m) => s + m.questionCardCount, 0),
    passageCardCount: mods.reduce((s, m) => s + m.passageCardCount, 0),
    questionPassageCardCount: mods.reduce((s, m) => s + m.questionPassageCardCount, 0),
    blockTypeDistribution: sumDistributions(mods.map((m) => m.blockTypeDistribution)),
    difficultyDistribution: sumDistributions(mods.map((m) => m.difficultyDistribution)),
  };
}

const sections = {};
for (const mod of modules) {
  if (!sections[mod.section]) sections[mod.section] = [];
  sections[mod.section].push(mod);
}

const sectionTotals = {};
for (const [sectionName, mods] of Object.entries(sections)) {
  sectionTotals[sectionName] = buildSectionTotals(mods);
}

const courseTotals = buildSectionTotals(modules);

// ---------------------------------------------------------------------------
// 4. Build JSON output
// ---------------------------------------------------------------------------

const report = {
  generatedAt: new Date().toISOString(),
  courseTotals,
  sectionTotals,
  modules: modules.map((m) => ({
    contentModuleId: m.contentModuleId,
    routeModuleId: m.routeModuleId,
    title: m.title,
    category: m.category,
    section: m.section,
    unit: m.unit,
    isQuestionBank: m.isQuestionBank,
    lessonCount: m.lessonCount,
    totalWordCount: m.totalWordCount,
    questionCardCount: m.questionCardCount,
    passageCardCount: m.passageCardCount,
    questionPassageCardCount: m.questionPassageCardCount,
    blockTypeDistribution: m.blockTypeDistribution,
    difficultyDistribution: m.difficultyDistribution,
    lessons: m.lessons,
  })),
};

// ---------------------------------------------------------------------------
// 5. Build Markdown output
// ---------------------------------------------------------------------------

function fmtNum(n) {
  return n.toLocaleString('en-US');
}

function difficultyLabel(dist) {
  const parts = [];
  if (dist.easy) parts.push(`${dist.easy}E`);
  if (dist.medium) parts.push(`${dist.medium}M`);
  if (dist.hard) parts.push(`${dist.hard}H`);
  if (dist.unspecified) parts.push(`${dist.unspecified}?`);
  return parts.join('/') || '-';
}

let md = '';

md += '# Content Metrics Report\n\n';
md += `> Auto-generated by \`npm run metrics:content\` — do not hand-edit.\n\n`;
md += `**Generated:** ${report.generatedAt}\n\n`;

md += '## Course Summary\n\n';
md += `| Metric | Value |\n| --- | ---: |\n`;
md += `| Modules | ${fmtNum(courseTotals.moduleCount)} |\n`;
md += `| Lessons | ${fmtNum(courseTotals.lessonCount)} |\n`;
md += `| Estimated Word Count | ${fmtNum(courseTotals.totalWordCount)} |\n`;
md += `| Question Cards | ${fmtNum(courseTotals.questionCardCount)} |\n`;
md += `| Passage Cards | ${fmtNum(courseTotals.passageCardCount)} |\n`;
md += `| Question-Passage Cards | ${fmtNum(courseTotals.questionPassageCardCount)} |\n`;
md += `| Difficulty | ${difficultyLabel(courseTotals.difficultyDistribution)} |\n\n`;

// Section summaries
md += '## Section Summaries\n\n';
for (const [sectionName, totals] of Object.entries(sectionTotals)) {
  md += `### ${sectionName}\n\n`;
  md += `| Metric | Value |\n| --- | ---: |\n`;
  md += `| Modules | ${fmtNum(totals.moduleCount)} |\n`;
  md += `| Lessons | ${fmtNum(totals.lessonCount)} |\n`;
  md += `| Word Count | ${fmtNum(totals.totalWordCount)} |\n`;
  md += `| Question Cards | ${fmtNum(totals.questionCardCount)} |\n`;
  md += `| Passage Cards | ${fmtNum(totals.passageCardCount)} |\n`;
  md += `| Q-P Cards | ${fmtNum(totals.questionPassageCardCount)} |\n\n`;
}

// Per-module detail
md += '## Per-Module Details\n\n';
for (const mod of modules) {
  const bankLabel = mod.isQuestionBank ? ' *(question bank)*' : '';
  md += `### Route ${mod.routeModuleId}: ${mod.title}${bankLabel}\n\n`;
  md += `**Section:** ${mod.section} | **Unit:** ${mod.unit} | **Words:** ${fmtNum(mod.totalWordCount)} | **Questions:** ${mod.questionCardCount}\n\n`;
  md += `| # | Lesson | Words | Blocks | Q | P | QP | Difficulty |\n`;
  md += `| ---: | --- | ---: | ---: | ---: | ---: | ---: | --- |\n`;
  for (const lesson of mod.lessons) {
    md += `| ${lesson.order} | ${lesson.title} | ${fmtNum(lesson.wordCount)} | ${lesson.blockCount} | ${lesson.questionCard} | ${lesson.passageCard} | ${lesson.questionPassageCard} | ${difficultyLabel(lesson.difficultyDistribution)} |\n`;
  }
  md += '\n';
}

// ---------------------------------------------------------------------------
// 6. Write output files
// ---------------------------------------------------------------------------

mkdirSync(AUDIT_DIR, { recursive: true });

const jsonPath = join(AUDIT_DIR, 'content-metrics.json');
const mdPath = join(AUDIT_DIR, 'content-metrics.md');

writeFileSync(jsonPath, JSON.stringify(report, null, 2));
writeFileSync(mdPath, md);

console.log(`\nContent Metrics Report`);
console.log(`─────────────────────`);
console.log(`  Modules:       ${fmtNum(courseTotals.moduleCount)}`);
console.log(`  Lessons:       ${fmtNum(courseTotals.lessonCount)}`);
console.log(`  Words:         ~${fmtNum(courseTotals.totalWordCount)}`);
console.log(`  Question Cards: ${fmtNum(courseTotals.questionCardCount)}`);
console.log(`  Passage Cards:  ${fmtNum(courseTotals.passageCardCount)}`);
console.log(`  Q-P Cards:      ${fmtNum(courseTotals.questionPassageCardCount)}`);
console.log(`\n  JSON → ${jsonPath}`);
console.log(`  MD   → ${mdPath}`);
