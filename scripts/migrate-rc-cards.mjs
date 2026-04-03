#!/usr/bin/env node

/**
 * Migrate RC passage and question content to proper card types.
 *
 * For each practice/advanced passage module:
 * - Passage Analysis lessons: add a `passage-card` block after the accordion
 * - Question lessons: replace `blockquote` + `options` with `question-passage-card`
 *
 * Run:  node scripts/migrate-rc-cards.mjs --dry-run
 *   or: node scripts/migrate-rc-cards.mjs
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const ROOT = join(import.meta.dirname, '..');
const MODULES_DIR = join(ROOT, 'modules');
const isDryRun = process.argv.includes('--dry-run');

// Content module directories for practice passages + advanced passages
const PASSAGE_MODULE_DIRS = [
  'module39', 'module40', 'module41', 'module42',  // Practice 1-4
  'module43', 'module44', 'module45', 'module46',  // Practice 5-8
  'module50', 'module51', 'module52',               // Advanced 1-3
  'module54',                                       // Advanced 4
  'module56', 'module57', 'module58',               // Advanced 5-7
];

// Map content module dirs to their passage titles (from catalog)
const MODULE_TITLES = {
  module39: 'Obasan',
  module40: 'Bankruptcy Laws',
  module41: 'Cultural Identity',
  module42: 'Woody Allen Films',
  module43: 'Cosmic Justice',
  module44: 'Julia Margaret Cameron',
  module45: 'Advertising Critique',
  module46: 'Property Justice',
  module50: 'Mathematics as Language',
  module51: 'Bentham',
  module52: 'Critical Legal Studies',
  module54: 'Dworkin',
  module56: 'Psychology of Risk',
  module57: 'Historical Sociology',
  module58: 'Digitalization and Copyright Law',
};

let totalFiles = 0;
let passageCards = 0;
let questionCards = 0;
let skipped = 0;

for (const moduleDir of PASSAGE_MODULE_DIRS) {
  const dirPath = join(MODULES_DIR, moduleDir);
  const files = readdirSync(dirPath).filter((f) => f.endsWith('.tsx')).sort();
  const passageTitle = MODULE_TITLES[moduleDir] || moduleDir;

  for (const file of files) {
    const filePath = join(dirPath, file);
    let content = readFileSync(filePath, 'utf-8');
    const isPassageAnalysis = file.includes('PassageAnalysis');
    let modified = false;

    // --- PASSAGE ANALYSIS LESSONS: add passage-card after accordion ---
    if (isPassageAnalysis) {
      // Check if already migrated
      if (content.includes("type: 'passage-card'")) {
        skipped++;
        continue;
      }

      // Count paragraphs and words in passageText
      const passageMatch = content.match(/const passageText = `([\s\S]*?)`;/);
      if (!passageMatch) {
        console.log(`  SKIP (no passageText): ${moduleDir}/${file}`);
        skipped++;
        continue;
      }

      const passage = passageMatch[1];
      const paragraphs = passage.split('\n\n').filter((p) => p.trim()).length;
      const words = passage.split(/\s+/).filter(Boolean).length;

      // Insert passage-card block right after the accordion line
      const accordionLine = "{ type: 'accordion', title: 'Read Passage', content: passageText },";
      const passageCardBlock = `{ type: 'accordion', title: 'Read Passage', content: passageText },
    { type: 'passage-card', title: '${passageTitle.replace(/'/g, "\\'")}', passage: passageText, paragraphCount: ${paragraphs}, wordCount: ${words} },`;

      if (content.includes(accordionLine)) {
        content = content.replace(accordionLine, passageCardBlock);
        modified = true;
        passageCards++;
      }
    }

    // --- QUESTION LESSONS: add question-passage-card ---
    if (!isPassageAnalysis) {
      // Check if already migrated
      if (content.includes("type: 'question-passage-card'")) {
        skipped++;
        continue;
      }

      // Extract question type from lesson title
      const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
      const lessonTitle = titleMatch?.[1] || '';
      // Title format: "Question 8: Main Idea" or "Question 22: Main Point"
      const questionTypeMatch = lessonTitle.match(/Question\s+\d+:\s*(.+)/);
      const questionType = questionTypeMatch?.[1]?.trim() || '';

      // Extract the question text from blockquote
      const questionBlockMatch = content.match(
        /\{\s*type:\s*'blockquote',\s*text:\s*["'](?:\*\*Question:\*\*\s*)?(.+?)["']\s*\}/
      );

      // Extract options
      const optionsMatch = content.match(
        /\{\s*type:\s*'options',\s*items:\s*\[([\s\S]*?)\]\s*\}/
      );

      if (!questionBlockMatch || !optionsMatch) {
        // Some question lessons might have different structure
        skipped++;
        continue;
      }

      // Extract the lesson id
      const idMatch = content.match(/id:\s*["']([^"']+)["']/);
      const lessonId = idMatch?.[1] || '';

      // Get question number from filename (e.g., Lesson2_Question8 -> Q-8)
      const qNumMatch = file.match(/Question(\d+)/);
      const qNum = qNumMatch?.[1] || '';

      // Build the question-passage-card block
      const questionText = questionBlockMatch[1].trim();
      const qpcBlock = `{ type: 'question-passage-card', id: '${lessonId}', questionType: '${questionType.replace(/'/g, "\\'")}', passageTitle: '${passageTitle.replace(/'/g, "\\'")}', passage: passageText, question: \`${questionText.replace(/`/g, '\\`')}\`, options: [${optionsMatch[1]}] },`;

      // Insert the question-passage-card right after the accordion
      const accordionLine = "{ type: 'accordion', title: 'Read Passage', content: passageText },";
      if (content.includes(accordionLine)) {
        content = content.replace(
          accordionLine,
          `${accordionLine}\n    ${qpcBlock}`
        );
        modified = true;
        questionCards++;
      }
    }

    if (modified) {
      totalFiles++;
      if (!isDryRun) {
        writeFileSync(filePath, content);
      }
      console.log(`  ${isDryRun ? 'WOULD UPDATE' : 'UPDATED'}: ${moduleDir}/${file}`);
    }
  }
}

console.log(`\nRC Card Migration ${isDryRun ? '(DRY RUN)' : 'Complete'}`);
console.log(`──────────────────────────`);
console.log(`  Files updated:       ${totalFiles}`);
console.log(`  Passage cards added: ${passageCards}`);
console.log(`  Question cards added: ${questionCards}`);
console.log(`  Skipped:             ${skipped}`);
