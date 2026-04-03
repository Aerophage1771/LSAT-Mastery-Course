#!/usr/bin/env node
/**
 * fill-missing-diff-baselines.mjs
 *
 * For every Mastery Course lesson file that does NOT yet have a diff alternate,
 * find the matching website lesson by lesson ID and inject alternates.diff.
 *
 * Works on files both WITH and WITHOUT an existing `alternates` block.
 *
 * Usage: node scripts/fill-missing-diff-baselines.mjs [--dry-run]
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');
const WEBSITE_LESSONS = join(ROOT, '..', 'GermaineTutoringcom - Website', 'client', 'src', 'data', 'studentLibrary', 'lessons');
const MODULES_DIR = join(ROOT, 'modules');

const dryRun = process.argv.includes('--dry-run');

const RC_MODULE_IDS = new Set([
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
]);

function getCategory(lessonId) {
  const moduleNum = parseInt(lessonId.split('-')[0], 10);
  return RC_MODULE_IDS.has(moduleNum) ? 'rc' : 'lr';
}

function findWebsiteFile(lessonId) {
  const cat = getCategory(lessonId);
  const filePath = join(WEBSITE_LESSONS, cat, `${lessonId}.tsx`);
  if (existsSync(filePath)) return filePath;
  const altCat = cat === 'lr' ? 'rc' : 'lr';
  const altPath = join(WEBSITE_LESSONS, altCat, `${lessonId}.tsx`);
  if (existsSync(altPath)) return altPath;
  return null;
}

function extractWebsiteContent(filePath) {
  const src = readFileSync(filePath, 'utf-8');
  const match = src.match(/const content:\s*ContentBlock\[\]\s*=\s*(\[[\s\S]*?\]);/);
  if (!match) return null;
  try {
    return JSON.parse(match[1]);
  } catch {
    return null;
  }
}

function extractLessonId(fileSrc) {
  const match = fileSrc.match(/id:\s*['"]([^'"]+)['"]/);
  return match ? match[1] : null;
}

function indentContent(contentArray, spaces = 6) {
  const json = JSON.stringify(contentArray, null, 2);
  const pad = ' '.repeat(spaces);
  return json.split('\n').map((line, i) => i === 0 ? line : pad + line).join('\n');
}

function hasDiffAlternate(src) {
  return src.includes("diff:") && src.includes("Diff-Highlighted");
}

function hasAlternatesBlock(src) {
  return /alternates\s*:\s*\{/.test(src);
}

/**
 * Insert diff into existing alternates block (same logic as original script).
 */
function insertDiffIntoExisting(src, contentArray) {
  const formatted = indentContent(contentArray);
  const altStart = src.indexOf('{', src.indexOf('alternates:'));
  if (altStart === -1) return null;
  const diffEntry = `\n    diff: {\n      label: 'Diff-Highlighted',\n      content: ${formatted},\n    },`;
  return src.slice(0, altStart + 1) + diffEntry + src.slice(altStart + 1);
}

/**
 * Add a full alternates block before the closing }; of the Lesson export.
 */
function addAlternatesBlock(src, contentArray) {
  const formatted = indentContent(contentArray);
  const alternatesBlock = `  alternates: {\n    diff: {\n      label: 'Diff-Highlighted',\n      content: ${formatted},\n    },\n  },\n`;

  // Find the last ]; which closes the content array, then add after it
  // Actually, find the last }; in the file (closing the Lesson export)
  const lastClosingIdx = src.lastIndexOf('};');
  if (lastClosingIdx === -1) return null;

  // Insert before the closing };
  return src.slice(0, lastClosingIdx) + alternatesBlock + src.slice(lastClosingIdx);
}

// --- Main ---
console.log(`${dryRun ? '[DRY RUN] ' : ''}Filling missing diff baselines...\n`);

// Only process modules 1-23 (LR modules + some RC)
const targetModules = Array.from({ length: 23 }, (_, i) => i + 1);

let seeded = 0;
let skipped = 0;
let alreadyDone = 0;
let errors = 0;
let noMatch = 0;

for (const modNum of targetModules) {
  const modDir = `module${modNum}`;
  const modPath = join(MODULES_DIR, modDir);
  if (!existsSync(modPath)) continue;

  const files = readdirSync(modPath)
    .filter(f => f.startsWith('Lesson') && f.endsWith('.tsx'));

  for (const file of files) {
    const filePath = join(modPath, file);
    const src = readFileSync(filePath, 'utf-8');
    const relPath = `modules/${modDir}/${file}`;

    // Skip if already has diff
    if (hasDiffAlternate(src)) {
      alreadyDone++;
      continue;
    }

    // Extract lesson ID
    const lessonId = extractLessonId(src);
    if (!lessonId) {
      console.log(`  SKIP  ${relPath} — no lesson ID found`);
      skipped++;
      continue;
    }

    // Find website file
    const websiteFile = findWebsiteFile(lessonId);
    if (!websiteFile) {
      console.log(`  SKIP  ${relPath} (id: ${lessonId}) — no website file`);
      noMatch++;
      continue;
    }

    // Extract content
    const contentArray = extractWebsiteContent(websiteFile);
    if (!contentArray) {
      console.log(`  SKIP  ${relPath} (id: ${lessonId}) — couldn't parse website content`);
      skipped++;
      continue;
    }

    // Insert diff alternate
    let newSrc;
    if (hasAlternatesBlock(src)) {
      newSrc = insertDiffIntoExisting(src, contentArray);
    } else {
      newSrc = addAlternatesBlock(src, contentArray);
    }

    if (!newSrc) {
      console.log(`  ERR   ${relPath} (id: ${lessonId}) — could not determine insert point`);
      errors++;
      continue;
    }

    if (!dryRun) {
      writeFileSync(filePath, newSrc, 'utf-8');
    }
    console.log(`  DONE  ${relPath} (id: ${lessonId}) — ${contentArray.length} blocks`);
    seeded++;
  }
}

console.log(`\n--- Summary ---`);
console.log(`Seeded:     ${seeded}`);
console.log(`Already OK: ${alreadyDone}`);
console.log(`No match:   ${noMatch}`);
console.log(`Skipped:    ${skipped}`);
console.log(`Errors:     ${errors}`);
console.log(`Total processed: ${seeded + alreadyDone + noMatch + skipped + errors}`);
