#!/usr/bin/env node

/**
 * Question Bank Validation Script
 *
 * Checks all question repository files for:
 * - PT ID in every accordion title
 * - Exactly 5 answer choices per question
 * - Exactly one (Correct) marker per question
 * - No duplicate PT IDs
 * - No typos in common patterns
 *
 * Run: node scripts/validate-questions.mjs
 */

import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import {
  getRegisteredContentModuleIds,
  parseLessonMeta,
  QUESTION_BANK_MODULE_DIRS,
  readRegisteredLessons,
} from './lib/registeredLessons.mjs';

const REPO_DIR = join(import.meta.dirname, '..', 'modules', 'module48');
const AUDITS_DIR = join(import.meta.dirname, '..', 'docs', 'operations', 'audits');
const QUESTION_USAGE_AUDIT_PATH = join(AUDITS_DIR, 'question-usage-audit.md');
const PT_REGEX = /PT-\d+-S-\d+-Q-\d+/g;
const CORRECT_REGEX = /\(Correct\)/;
const MISSING_ID_REGEX = /\[Missing ID\]/;
const QUESTION_ID_REGEX = /PT-\d+-S-\d+-(?:Q|P)-\d+/g;
const TYPO_PATTERNS = [
  { pattern: /one of ahe following/i, fix: 'one of the following' },
  { pattern: /one of a following/i, fix: 'one of the following' },
];

function findMatchingBracket(text, startIndex) {
  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let index = startIndex; index < text.length; index += 1) {
    const char = text[index];

    if (quote) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (char === '\\') {
        escaped = true;
        continue;
      }
      if (char === quote) {
        quote = null;
      }
      continue;
    }

    if (char === "'" || char === '"') {
      quote = char;
      continue;
    }

    if (char === '[') {
      depth += 1;
      continue;
    }

    if (char === ']') {
      depth -= 1;
      if (depth === 0) return index;
    }
  }

  return -1;
}

function parseStringArrayLiteral(arrayLiteral) {
  const items = [];
  let index = 0;

  while (index < arrayLiteral.length) {
    while (/\s|,/.test(arrayLiteral[index] ?? '')) index += 1;
    if (index >= arrayLiteral.length) break;

    const quote = arrayLiteral[index];
    if (quote !== "'" && quote !== '"') {
      throw new Error(`Unexpected token "${arrayLiteral[index]}" while parsing options array`);
    }
    index += 1;

    let value = '';
    let escaped = false;
    while (index < arrayLiteral.length) {
      const char = arrayLiteral[index];
      index += 1;

      if (escaped) {
        value += char;
        escaped = false;
        continue;
      }
      if (char === '\\') {
        escaped = true;
        continue;
      }
      if (char === quote) break;
      value += char;
    }

    items.push(value);
    while (/\s|,/.test(arrayLiteral[index] ?? '')) index += 1;
  }

  return items;
}

function extractOptionsArray(block) {
  const itemsIndex = block.indexOf('items:');
  if (itemsIndex === -1) return null;

  const bracketStart = block.indexOf('[', itemsIndex);
  if (bracketStart === -1) return null;

  const bracketEnd = findMatchingBracket(block, bracketStart);
  if (bracketEnd === -1) return null;

  return block.slice(bracketStart + 1, bracketEnd);
}

let totalQuestions = 0;
let totalIssues = 0;
const allPtIds = new Map();

const files = readdirSync(REPO_DIR)
  .filter((f) => f.endsWith('.tsx'))
  .sort();

console.log('Question Bank Validation Report');
console.log('='.repeat(60));
console.log('');

for (const file of files) {
  const filepath = join(REPO_DIR, file);
  const content = readFileSync(filepath, 'utf-8');
  const issues = [];

  // Count accordions
  const accordions = (content.match(/type:\s*'accordion'/g) || []).length;
  totalQuestions += accordions;

  // Check PT IDs
  const ptIds = [...new Set(content.match(PT_REGEX) || [])];

  // Check for Missing ID
  if (MISSING_ID_REGEX.test(content)) {
    issues.push('Has [Missing ID] in accordion title');
  }

  // Check PT ID count vs accordion count
  if (ptIds.length !== accordions) {
    issues.push(`PT ID count (${ptIds.length}) != accordion count (${accordions})`);
  }

  // Check for duplicates across files
  for (const id of ptIds) {
    if (allPtIds.has(id)) {
      issues.push(`Duplicate PT ID ${id} (also in ${allPtIds.get(id)})`);
    }
    allPtIds.set(id, file);
  }

  // Check (Correct) markers - count how many accordions have one
  const accordionBlocks = content.split(/type:\s*'accordion'/).slice(1);
  let correctMarkerIssues = 0;
  let optionCountIssues = 0;
  let parseIssues = 0;

  for (const block of accordionBlocks) {
    const optionsLiteral = extractOptionsArray(block);
    if (!optionsLiteral) {
      parseIssues += 1;
      continue;
    }

    let options;
    try {
      options = parseStringArrayLiteral(optionsLiteral);
    } catch {
      parseIssues += 1;
      continue;
    }

    if (options.length !== 5) {
      optionCountIssues++;
    }

    const correctMarkers = options.filter((option) => CORRECT_REGEX.test(option)).length;
    if (correctMarkers !== 1) {
      correctMarkerIssues++;
    }
  }

  if (parseIssues > 0) {
    issues.push(`${parseIssues} questions could not be parsed for options`);
  }

  if (correctMarkerIssues > 0) {
    issues.push(`${correctMarkerIssues} questions do not have exactly one (Correct) marker`);
  }

  if (optionCountIssues > 0) {
    issues.push(`${optionCountIssues} questions don't have exactly 5 options`);
  }

  // Check typos
  for (const { pattern, fix } of TYPO_PATTERNS) {
    if (pattern.test(content)) {
      issues.push(`Typo found: should be "${fix}"`);
    }
  }

  // Report
  const status = issues.length === 0 ? 'PASS' : 'FAIL';
  const icon = status === 'PASS' ? '✅' : '❌';
  console.log(`${icon} ${file} (${accordions} questions)`);
  if (issues.length > 0) {
    totalIssues += issues.length;
    for (const issue of issues) {
      console.log(`   ⚠️  ${issue}`);
    }
  }
}

console.log('');
console.log('='.repeat(60));
console.log(`Total: ${totalQuestions} questions across ${files.length} files`);
console.log(`Unique PT IDs: ${allPtIds.size}`);
console.log(`Issues found: ${totalIssues}`);
console.log(totalIssues === 0 ? '✅ All checks passed!' : `❌ ${totalIssues} issues need attention`);

function collectQuestionBankIds() {
  const dbModules = ['module48', 'module49', 'module53'];
  const ids = new Set();

  for (const moduleName of dbModules) {
    const dir = join(import.meta.dirname, '..', 'modules', moduleName);
    const files = readdirSync(dir).filter((f) => f.endsWith('.tsx'));
    for (const file of files) {
      const content = readFileSync(join(dir, file), 'utf-8');
      const matches = content.match(QUESTION_ID_REGEX) || [];
      for (const id of matches) ids.add(id);
    }
  }

  return ids;
}

function collectLessonQuestionUsage() {
  const usedIds = new Set();
  let illustrativeInLessons4Plus = 0;
  const contentModuleIds = getRegisteredContentModuleIds().filter(
    (contentModuleId) => !QUESTION_BANK_MODULE_DIRS.has(`module${contentModuleId}`),
  );

  for (const lessonRow of readRegisteredLessons({ contentModuleIds })) {
    const meta = parseLessonMeta(lessonRow.content, lessonRow.filePath);
    if (meta.errors.length > 0) continue;

    for (const cardId of meta.cardIds) {
      usedIds.add(cardId);
    }

    const cardBlocks = lessonRow.content.match(/type:\s*'question(?:-passage)?-card'[\s\S]{0,1200}?\}/g) || [];
    if (lessonRow.lessonOrder >= 4) {
      illustrativeInLessons4Plus += cardBlocks.filter((block) => /isIllustrative:\s*true/.test(block)).length;
    }
  }

  return { usedIds, illustrativeInLessons4Plus };
}

const databaseIds = collectQuestionBankIds();
const { usedIds, illustrativeInLessons4Plus } = collectLessonQuestionUsage();
const usedInDatabase = [...usedIds].filter((id) => databaseIds.has(id));
const unusedInDatabase = [...databaseIds].filter((id) => !usedIds.has(id));
const missingDatabaseEntries = [...usedIds].filter((id) => !databaseIds.has(id)).sort();

mkdirSync(AUDITS_DIR, { recursive: true });

const reviewedDate = new Date().toISOString().split('T')[0];
const auditReport = [
  '# Question Usage Audit Report',
  '',
  '**Purpose:** Summarize which question-bank IDs are used in lessons and which lesson-linked IDs are missing from the repositories.  ',
  '**Audience:** Maintainers validating lesson/question-bank alignment before or after content changes.  ',
  '**Status:** reference  ',
  '**Source of truth:** yes  ',
  `**Last reviewed:** ${reviewedDate}  `,
  '**Related docs:** [README.md](./README.md), [../../technical/content-and-validation.md](../../technical/content-and-validation.md), [question-linkage-audit.md](./question-linkage-audit.md)',
  '',
  `- **Total Questions in Database:** ${databaseIds.size}`,
  `- **Used Questions (In Use):** ${usedInDatabase.length}`,
  `- **Unused Questions:** ${unusedInDatabase.length}`,
  '',
  '## Missing Database Entries',
  missingDatabaseEntries.length ? missingDatabaseEntries.map((id) => `- \`${id}\``).join('\n') : '- None',
  '',
  `## Invented/Illustrative Count (Lessons 4+)`,
  `- **${illustrativeInLessons4Plus}**`,
  '',
].join('\n');

writeFileSync(QUESTION_USAGE_AUDIT_PATH, `${auditReport}\n`, 'utf-8');

console.log('\n');
console.log(auditReport);

if (totalIssues > 0) {
  process.exit(1);
}
