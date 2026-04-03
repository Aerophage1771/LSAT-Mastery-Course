#!/usr/bin/env node
/**
 * seed-diff-baselines.mjs
 *
 * For every Mastery Course lesson file that already has `alternates`,
 * copies the corresponding website lesson's content array into
 * alternates.diff as a "Diff-Highlighted" baseline.
 *
 * Usage: node scripts/seed-diff-baselines.mjs [--dry-run]
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');
const WEBSITE_LESSONS = join(ROOT, '..', 'GermaineTutoringcom - Website', 'client', 'src', 'data', 'studentLibrary', 'lessons');
const MODULES_DIR = join(ROOT, 'modules');

const dryRun = process.argv.includes('--dry-run');

// RC module directory numbers (their internal IDs start with these numbers)
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
  // Try the other category as fallback
  const altCat = cat === 'lr' ? 'rc' : 'lr';
  const altPath = join(WEBSITE_LESSONS, altCat, `${lessonId}.tsx`);
  if (existsSync(altPath)) return altPath;
  return null;
}

function extractWebsiteContent(filePath) {
  const src = readFileSync(filePath, 'utf-8');
  // Content is on a single line: const content: ContentBlock[] = [...];
  const match = src.match(/const content:\s*ContentBlock\[\]\s*=\s*(\[[\s\S]*?\]);/);
  if (!match) return null;
  try {
    return JSON.parse(match[1]);
  } catch {
    // If not valid JSON (unlikely), return raw text
    return null;
  }
}

function extractLessonId(fileSrc) {
  // Match id: '...' or id: "..."
  const match = fileSrc.match(/id:\s*['"]([^'"]+)['"]/);
  return match ? match[1] : null;
}

// Find all Mastery Course lesson files that already have alternates
function findFilesWithAlternates() {
  const results = [];
  const moduleDirs = readdirSync(MODULES_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory() && d.name.startsWith('module'))
    .map(d => d.name);

  for (const modDir of moduleDirs) {
    const modPath = join(MODULES_DIR, modDir);
    const files = readdirSync(modPath)
      .filter(f => f.startsWith('Lesson') && f.endsWith('.tsx'));

    for (const file of files) {
      const filePath = join(modPath, file);
      const src = readFileSync(filePath, 'utf-8');
      if (src.includes('alternates:') || src.includes('alternates :')) {
        results.push(filePath);
      }
    }
  }
  return results;
}

function indentContent(contentArray, spaces = 6) {
  const json = JSON.stringify(contentArray, null, 2);
  // Indent each line by the specified amount (except the first line)
  const pad = ' '.repeat(spaces);
  return json.split('\n').map((line, i) => i === 0 ? line : pad + line).join('\n');
}

function insertDiffAlternate(filePath, contentArray) {
  let src = readFileSync(filePath, 'utf-8');

  // Already has diff alternate? Skip.
  if (src.includes("diff:") && src.includes("Diff-Highlighted")) {
    return 'already_has_diff';
  }

  const formatted = indentContent(contentArray);

  // Insert diff alternate at the beginning of the alternates object
  // Pattern: alternates: {\n
  const insertPoint = src.indexOf('alternates: {');
  if (insertPoint === -1) {
    // Try alternates:{
    const alt2 = src.indexOf('alternates:{');
    if (alt2 === -1) return 'no_alternates_found';
  }

  // Find the opening brace after "alternates:"
  const altStart = src.indexOf('{', src.indexOf('alternates:'));
  if (altStart === -1) return 'no_alternates_brace';

  // Insert after the opening brace
  const diffEntry = `\n    diff: {\n      label: 'Diff-Highlighted',\n      content: ${formatted},\n    },`;

  const newSrc = src.slice(0, altStart + 1) + diffEntry + src.slice(altStart + 1);

  if (!dryRun) {
    writeFileSync(filePath, newSrc, 'utf-8');
  }
  return 'ok';
}

// Main
console.log(`${dryRun ? '[DRY RUN] ' : ''}Seeding diff baselines from website content...\n`);

const files = findFilesWithAlternates();
console.log(`Found ${files.length} lesson files with existing alternates.\n`);

let seeded = 0;
let skipped = 0;
let alreadyDone = 0;
let errors = 0;

for (const filePath of files) {
  const src = readFileSync(filePath, 'utf-8');
  const lessonId = extractLessonId(src);
  const relPath = filePath.replace(ROOT + '/', '');

  if (!lessonId) {
    console.log(`  SKIP  ${relPath} — could not extract lesson ID`);
    skipped++;
    continue;
  }

  const websiteFile = findWebsiteFile(lessonId);
  if (!websiteFile) {
    console.log(`  SKIP  ${relPath} (id: ${lessonId}) — no website file found`);
    skipped++;
    continue;
  }

  const contentArray = extractWebsiteContent(websiteFile);
  if (!contentArray) {
    console.log(`  SKIP  ${relPath} (id: ${lessonId}) — could not extract website content`);
    skipped++;
    continue;
  }

  const result = insertDiffAlternate(filePath, contentArray);
  if (result === 'ok') {
    console.log(`  DONE  ${relPath} (id: ${lessonId}) — ${contentArray.length} blocks from website`);
    seeded++;
  } else if (result === 'already_has_diff') {
    console.log(`  SKIP  ${relPath} (id: ${lessonId}) — already has diff alternate`);
    alreadyDone++;
  } else {
    console.log(`  ERR   ${relPath} (id: ${lessonId}) — ${result}`);
    errors++;
  }
}

console.log(`\n--- Summary ---`);
console.log(`Seeded:  ${seeded}`);
console.log(`Skipped: ${skipped} (no website match)`);
console.log(`Already: ${alreadyDone}`);
console.log(`Errors:  ${errors}`);
console.log(`Total:   ${files.length}`);
