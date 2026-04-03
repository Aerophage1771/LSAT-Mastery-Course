#!/usr/bin/env node
/**
 * renumber-modules.mjs
 *
 * Renames all 47 misaligned module directories, Module*.tsx files,
 * lesson IDs, registry imports, drill cross-references, website lesson
 * files, audit reports, and the websiteLessonCatalog so that
 * directory number === display ID everywhere.
 *
 * Usage: node scripts/renumber-modules.mjs [--dry-run]
 */

import { readFileSync, writeFileSync, renameSync, existsSync, readdirSync, mkdirSync } from 'fs';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');
const MODULES_DIR = join(ROOT, 'modules');
const WEBSITE_LR = join(ROOT, '..', 'GermaineTutoringcom - Website', 'client', 'src', 'data', 'studentLibrary', 'lessons', 'lr');
const WEBSITE_RC = join(ROOT, '..', 'GermaineTutoringcom - Website', 'client', 'src', 'data', 'studentLibrary', 'lessons', 'rc');
const AUDITS_DIR = join(ROOT, 'docs', 'operations', 'audits');

const dryRun = process.argv.includes('--dry-run');

// ─── Build the mapping from registry ───────────────────────────────
function buildMapping() {
  const src = readFileSync(join(MODULES_DIR, 'registry.ts'), 'utf-8');
  const entries = [...src.matchAll(/id:\s*(\d+).*?import\(['"]\.\/(Module\d+)['"]\)/gs)];

  // displayId → { oldModuleFile, oldDirNum }
  const mapping = [];
  for (const [, displayId, moduleFile] of entries) {
    const dirNum = parseInt(moduleFile.replace('Module', ''));
    const did = parseInt(displayId);
    if (did !== dirNum) {
      mapping.push({ displayId: did, oldDirNum: dirNum, oldModuleFile: moduleFile });
    }
  }
  return mapping;
}

const mapping = buildMapping();
console.log(`Found ${mapping.length} modules to renumber.${dryRun ? ' [DRY RUN]' : ''}\n`);

// Build lookup: oldDirNum → newDirNum (displayId)
const oldToNew = {};
for (const m of mapping) {
  oldToNew[m.oldDirNum] = m.displayId;
}

// Also track which RC category each module uses
const RC_MODULE_IDS = new Set();
{
  const regSrc = readFileSync(join(MODULES_DIR, 'registry.ts'), 'utf-8');
  const rcEntries = [...regSrc.matchAll(/category:\s*'RC'.*?import\(['"]\.\/(Module\d+)['"]\)/gs)];
  for (const [, moduleFile] of rcEntries) {
    const dirNum = parseInt(moduleFile.replace('Module', ''));
    RC_MODULE_IDS.add(dirNum);
  }
}

function getWebsiteDir(oldDirNum) {
  return RC_MODULE_IDS.has(oldDirNum) ? WEBSITE_RC : WEBSITE_LR;
}

// ─── Phase 1: Rename module directories ────────────────────────────
console.log('=== Phase 1: Rename module directories ===');
// Step 1a: all → tmp
for (const { oldDirNum, displayId } of mapping) {
  const src = join(MODULES_DIR, `module${oldDirNum}`);
  const tmp = join(MODULES_DIR, `module${oldDirNum}_tmp`);
  if (existsSync(src)) {
    console.log(`  ${basename(src)} → ${basename(tmp)}`);
    if (!dryRun) renameSync(src, tmp);
  }
}
// Step 1b: tmp → final
for (const { oldDirNum, displayId } of mapping) {
  const tmp = join(MODULES_DIR, `module${oldDirNum}_tmp`);
  const dst = join(MODULES_DIR, `module${displayId}`);
  if (dryRun ? existsSync(join(MODULES_DIR, `module${oldDirNum}`)) : existsSync(tmp)) {
    console.log(`  ${basename(tmp)} → module${displayId}`);
    if (!dryRun) renameSync(tmp, dst);
  }
}

// ─── Phase 2: Rename Module*.tsx files + update internals ──────────
console.log('\n=== Phase 2: Rename Module*.tsx files ===');
// Step 2a: all → tmp
for (const { oldDirNum, displayId } of mapping) {
  const src = join(MODULES_DIR, `Module${oldDirNum}.tsx`);
  const tmp = join(MODULES_DIR, `Module${oldDirNum}_tmp.tsx`);
  if (existsSync(src)) {
    console.log(`  Module${oldDirNum}.tsx → Module${oldDirNum}_tmp.tsx`);
    if (!dryRun) renameSync(src, tmp);
  }
}
// Step 2b: update internals + rename to final
for (const { oldDirNum, displayId } of mapping) {
  const tmp = join(MODULES_DIR, `Module${oldDirNum}_tmp.tsx`);
  const dst = join(MODULES_DIR, `Module${displayId}.tsx`);
  if (existsSync(tmp)) {
    let src = readFileSync(tmp, 'utf-8');
    // Update import paths: ./module{old}/ → ./module{new}/
    src = src.replaceAll(`./module${oldDirNum}/`, `./module${displayId}/`);
    // Update export const name: Module{old} → Module{new}
    src = src.replaceAll(`Module${oldDirNum}`, `Module${displayId}`);
    // Update id field: id: {old} → id: {new}
    src = src.replace(/id:\s*(\d+)/, `id: ${displayId}`);

    console.log(`  Module${oldDirNum}_tmp.tsx → Module${displayId}.tsx (updated internals)`);
    if (!dryRun) {
      writeFileSync(tmp, src, 'utf-8');
      renameSync(tmp, dst);
    }
  }
}

// ─── Phase 3: Update registry.ts ──────────────────────────────────
console.log('\n=== Phase 3: Update registry.ts ===');
{
  const regPath = join(MODULES_DIR, 'registry.ts');
  let src = readFileSync(regPath, 'utf-8');
  let changes = 0;
  for (const { oldDirNum, displayId } of mapping) {
    const oldImport = `import('./Module${oldDirNum}')`;
    const newImport = `import('./Module${displayId}')`;
    if (src.includes(oldImport)) {
      src = src.replaceAll(oldImport, newImport);
      changes++;
    }
  }
  console.log(`  Updated ${changes} import paths`);
  if (!dryRun) writeFileSync(regPath, src, 'utf-8');
}

// ─── Phase 4: Update lesson IDs in all lesson files ────────────────
console.log('\n=== Phase 4: Update lesson IDs ===');
{
  let totalFiles = 0;
  for (const { oldDirNum, displayId } of mapping) {
    const dir = join(MODULES_DIR, `module${displayId}`);
    if (!existsSync(dir)) continue;

    const files = readdirSync(dir).filter(f => f.endsWith('.tsx'));
    for (const file of files) {
      const filePath = join(dir, file);
      let src = readFileSync(filePath, 'utf-8');

      // Update id: 'OLD-N' → 'NEW-N' (only the lesson id field)
      const oldPrefix = `${oldDirNum}-`;
      const newPrefix = `${displayId}-`;

      // Match id: '{oldDirNum}-...' patterns
      const idRegex = new RegExp(`(id:\\s*['"])${oldDirNum}-`, 'g');
      const newSrc = src.replace(idRegex, `$1${displayId}-`);

      if (newSrc !== src) {
        if (!dryRun) writeFileSync(filePath, newSrc, 'utf-8');
        totalFiles++;
      }
    }
  }
  console.log(`  Updated lesson IDs in ${totalFiles} files`);
}

// ─── Phase 5: Update drillCrossReferences.ts ───────────────────────
console.log('\n=== Phase 5: Update drillCrossReferences.ts ===');
{
  const xrefPath = join(MODULES_DIR, 'drillCrossReferences.ts');
  if (existsSync(xrefPath)) {
    let src = readFileSync(xrefPath, 'utf-8');
    let changes = 0;
    for (const { oldDirNum, displayId } of mapping) {
      // Update lessonId: '{old}-N' → '{new}-N'
      const regex = new RegExp(`(lessonId:\\s*['"])${oldDirNum}-`, 'g');
      const before = src;
      src = src.replace(regex, `$1${displayId}-`);
      if (src !== before) changes++;
    }
    console.log(`  Updated ${changes} cross-reference entries`);
    if (!dryRun) writeFileSync(xrefPath, src, 'utf-8');
  } else {
    console.log('  drillCrossReferences.ts not found, skipping');
  }
}

// ─── Phase 6: Rename website lesson files ──────────────────────────
console.log('\n=== Phase 6: Rename website lesson files ===');
{
  let totalRenamed = 0;

  // Collect all renames needed
  const renames = []; // { from, to, dir }
  for (const { oldDirNum, displayId } of mapping) {
    const websiteDir = getWebsiteDir(oldDirNum);
    if (!existsSync(websiteDir)) continue;

    const files = readdirSync(websiteDir).filter(f => f.startsWith(`${oldDirNum}-`) && f.endsWith('.tsx'));
    for (const file of files) {
      const newFile = file.replace(`${oldDirNum}-`, `${displayId}-`);
      renames.push({ dir: websiteDir, from: file, to: newFile });
    }
  }

  // Step 6a: all → tmp
  for (const { dir, from } of renames) {
    const src = join(dir, from);
    const tmp = join(dir, from + '.tmp');
    if (existsSync(src)) {
      if (!dryRun) renameSync(src, tmp);
    }
  }
  // Step 6b: tmp → final
  for (const { dir, from, to } of renames) {
    const tmp = join(dir, from + '.tmp');
    const dst = join(dir, to);
    if (existsSync(tmp)) {
      if (!dryRun) renameSync(tmp, dst);
      totalRenamed++;
    }
  }
  console.log(`  Renamed ${totalRenamed} website lesson files`);
}

// ─── Phase 7: Rename audit report files ────────────────────────────
console.log('\n=== Phase 7: Rename audit report files ===');
{
  let totalRenamed = 0;

  if (existsSync(AUDITS_DIR)) {
    const renames = [];
    for (const { oldDirNum, displayId } of mapping) {
      const from = `module${oldDirNum}-diff-improvement-report.md`;
      const to = `module${displayId}-diff-improvement-report.md`;
      if (existsSync(join(AUDITS_DIR, from))) {
        renames.push({ from, to });
      }
    }

    // tmp first
    for (const { from } of renames) {
      const src = join(AUDITS_DIR, from);
      const tmp = join(AUDITS_DIR, from + '.tmp');
      if (existsSync(src)) {
        if (!dryRun) renameSync(src, tmp);
      }
    }
    // tmp → final
    for (const { from, to } of renames) {
      const tmp = join(AUDITS_DIR, from + '.tmp');
      const dst = join(AUDITS_DIR, to);
      if (existsSync(tmp)) {
        if (!dryRun) renameSync(tmp, dst);
        totalRenamed++;
      }
    }
  }
  console.log(`  Renamed ${totalRenamed} audit reports`);
}

// ─── Phase 8: Regenerate websiteLessonCatalog ──────────────────────
console.log('\n=== Phase 8: Regenerate websiteLessonCatalog ===');
{
  // Re-read registry (now updated) to build display→dir mapping
  const regSrc = readFileSync(join(MODULES_DIR, 'registry.ts'), 'utf-8');
  const entries = [...regSrc.matchAll(/id:\s*(\d+),\s*title:\s*'([^']+)'.*?import\(['"]\.\/(Module\d+)['"]\)/gs)];

  const catalog = {};
  for (const [, displayId, title, moduleFile] of entries) {
    const dirNum = parseInt(moduleFile.replace('Module', ''));
    const did = parseInt(displayId);
    const dir = join(MODULES_DIR, `module${dirNum}`);
    if (!existsSync(dir)) continue;

    const files = readdirSync(dir).filter(f => f.endsWith('.tsx')).sort();
    const lessons = [];
    for (const file of files) {
      const src = readFileSync(join(dir, file), 'utf-8');
      const idMatch = src.match(/id:\s*['"]([^'"]+)['"]/);
      const titleMatch = src.match(/title:\s*['"]([^'"]+)['"]/);
      if (idMatch && titleMatch) {
        lessons.push({ id: idMatch[1], title: titleMatch[1] });
      }
    }
    if (lessons.length > 0) {
      catalog[did] = lessons;
    }
  }

  // Write catalog
  const sortedKeys = Object.keys(catalog).map(Number).sort((a, b) => a - b);
  let output = '/** Auto-generated website lesson catalog. Do not edit manually. */\n\n';
  output += "export interface WebsiteLesson {\n  id: string;\n  title: string;\n}\n\n";
  output += 'export const websiteLessonCatalog: Record<number, WebsiteLesson[]> = {\n';
  for (const key of sortedKeys) {
    output += `  ${key}: [\n`;
    for (const lesson of catalog[key]) {
      const safeTitle = lesson.title.replace(/'/g, "\\'");
      output += `    { id: '${lesson.id}', title: '${safeTitle}' },\n`;
    }
    output += '  ],\n';
  }
  output += '};\n';

  const catPath = join(ROOT, 'data', 'websiteLessonCatalog.ts');
  if (!dryRun) writeFileSync(catPath, output, 'utf-8');
  console.log(`  Wrote catalog with ${sortedKeys.length} modules`);
}

console.log('\n=== Done! ===');
if (dryRun) {
  console.log('This was a dry run. No files were changed.');
} else {
  console.log('All renames complete. Run `npx tsc --noEmit` to verify.');
}
