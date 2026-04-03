#!/usr/bin/env node

/**
 * Extract all invented (non-real-PT) question-card blocks from lesson files.
 * Outputs a JSON inventory and a readable markdown report.
 *
 * Run: node scripts/extract-invented-questions.mjs
 */

import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'fs';
import { join, basename } from 'path';

const MODULES_DIR = join(import.meta.dirname, '..', 'modules');
const AUDITS_DIR = join(import.meta.dirname, '..', 'docs', 'operations', 'audits');
const INVENTORY_JSON_PATH = join(AUDITS_DIR, 'invented-questions-inventory.json');
const INVENTORY_MD_PATH = join(AUDITS_DIR, 'invented-questions-inventory.md');
const PT_REGEX = /PT-\d+-S-\d+-Q-\d+/;

const moduleMap = {
  1: 'Argument Part',
  2: 'Main Conclusion',
  3: 'Method of Reasoning',
  4: 'Parallel Reasoning',
  5: 'Flaw',
  6: 'Parallel Flaw',
  7: 'Evaluate the Argument',
  8: 'Weaken',
  9: 'Strengthen',
  10: 'Sufficient Assumption',
  11: 'Necessary Assumption',
  12: 'Principle-Strengthen',
  13: 'Principle-Apply',
  14: 'Principle-Generalization',
  15: 'Fill in the Blank',
  16: 'Most Strongly Supported',
  17: 'Must Be True',
  18: 'Must Be False',
  19: 'Paradox/Explain',
  20: 'Point at Issue',
  55: 'Conditional Reasoning',
  59: 'LSAT Math',
  60: 'Causal Reasoning',
};

const results = [];

for (const modNum of Object.keys(moduleMap)) {
  const dir = join(MODULES_DIR, `module${modNum}`);
  let files;
  try {
    files = readdirSync(dir).filter((f) => f.endsWith('.tsx'));
  } catch {
    continue;
  }

  for (const file of files) {
    const content = readFileSync(join(dir, file), 'utf-8');
    const lines = content.split('\n');

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes("type: 'question-card'")) {
        // Grab the next ~20 lines to extract the card data
        const block = lines.slice(i, Math.min(i + 25, lines.length)).join('\n');

        // Check if it has a real PT ID
        const idMatch = block.match(/id:\s*['"]([^'"]+)['"]/);
        const id = idMatch ? idMatch[1] : 'unknown';
        const hasRealPT = PT_REGEX.test(id) && !id.includes('illustrative') && !id.includes('drill');

        if (!hasRealPT) {
          // Extract fields
          const qtMatch = block.match(/questionType:\s*['"]([^'"]+)['"]/);
          const diffMatch = block.match(/difficulty:\s*['"]([^'"]+)['"]/);
          const stimMatch = block.match(/stimulus:\s*['"]([\s\S]*?)(?:['"],\s*$)/m);
          const qMatch = block.match(/question:\s*['"]([\s\S]*?)(?:['"],\s*$)/m);

          const lessonTitle = content.match(/title:\s*['"]([^'"]+)['"]/);

          results.push({
            module: Number(modNum),
            moduleName: moduleMap[modNum],
            file: `module${modNum}/${file}`,
            line: i + 1,
            lessonTitle: lessonTitle ? lessonTitle[1] : basename(file, '.tsx'),
            cardId: id,
            questionType: qtMatch ? qtMatch[1] : 'unknown',
            difficulty: diffMatch ? diffMatch[1] : 'unset',
            isIllustrative: id.includes('illustrative'),
          });
        }
      }
    }
  }
}

// Write JSON
mkdirSync(AUDITS_DIR, { recursive: true });
writeFileSync(INVENTORY_JSON_PATH, JSON.stringify(results, null, 2));

// Write Markdown report
const byModule = {};
for (const r of results) {
  if (!byModule[r.module]) byModule[r.module] = [];
  byModule[r.module].push(r);
}

const reviewedDate = new Date().toISOString().split('T')[0];

let md = `# Invented Questions Inventory\n\n`;
md += `**Purpose:** Track invented lesson \`question-card\` blocks that are not tied to real PT-backed content.  \n`;
md += `**Audience:** Maintainers auditing illustrative content and lesson policy compliance.  \n`;
md += `**Status:** reference  \n`;
md += `**Source of truth:** yes  \n`;
md += `**Last reviewed:** ${reviewedDate}  \n`;
md += `**Related docs:** [README.md](./README.md), [../../technical/content-and-validation.md](../../technical/content-and-validation.md), [../../operations/content-operations.md](../../operations/content-operations.md)\n\n`;
md += `**Generated:** ${reviewedDate}  \n`;
md += `**Total invented question-cards:** ${results.length}  \n`;
md += `**Modules covered:** ${Object.keys(byModule).length}\n\n`;
md += `These questions were created by AI agents during content upgrades. They are NOT from real LSAT PrepTests.\n`;
md += `Per content policy (AGENTS.md), Lessons 1-3 may use illustrative examples; Lessons 4+ should use real questions.\n\n`;

const moduleEntries = Object.entries(byModule).sort((a, b) => Number(a[0]) - Number(b[0]));
if (moduleEntries.length > 0) {
  md += `---\n\n`;
}

for (const [mod, items] of moduleEntries) {
  md += `## Module ${mod}: ${moduleMap[mod]}\n\n`;
  md += `| Lesson | Card ID | Type | Difficulty | Illustrative? |\n`;
  md += `|--------|---------|------|------------|---------------|\n`;
  for (const item of items) {
    md += `| ${item.lessonTitle} | \`${item.cardId}\` | ${item.questionType} | ${item.difficulty} | ${item.isIllustrative ? 'Yes' : '**No**'} |\n`;
  }
  md += `\n`;
  md += `\n`;
}

md += `---\n\n`;
md += `## Summary by Location\n\n`;
md += `| Category | Count | Policy |\n`;
md += `|----------|-------|--------|\n`;

const inLessons123 = results.filter((r) => {
  const lessonNum = r.file.match(/Lesson(\d+)/);
  return lessonNum && Number(lessonNum[1]) <= 3;
});
const inLessons4plus = results.filter((r) => {
  const lessonNum = r.file.match(/Lesson(\d+)/);
  return !lessonNum || Number(lessonNum[1]) > 3;
});

md += `| Lessons 1-3 (Intro/Guide/Field Guide) | ${inLessons123.length} | Allowed (should be marked illustrative) |\n`;
md += `| Lessons 4+ (Drills/Advanced/etc.) | ${inLessons4plus.length} | **Should use real questions** |\n`;
md += `| **Total** | **${results.length}** | |\n`;

writeFileSync(INVENTORY_MD_PATH, md);

console.log(`Extracted ${results.length} invented question-cards`);
console.log(`  In Lessons 1-3: ${inLessons123.length} (allowed)`);
console.log(`  In Lessons 4+: ${inLessons4plus.length} (should be real)`);
console.log(`\nReports written to:`);
console.log(`  docs/operations/audits/invented-questions-inventory.json`);
console.log(`  docs/operations/audits/invented-questions-inventory.md`);
