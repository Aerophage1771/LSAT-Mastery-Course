#!/usr/bin/env node
/**
 * refresh-from-tsv.mjs
 *
 * Parses "LSAT Course Content - Current LR.tsv" and generates fresh lesson
 * files for modules 1-20.  Each TSV column becomes one lesson file whose
 * `content` array holds ContentBlock objects converted from the column's
 * markdown.
 *
 * Existing `alternates.diff` (the "Website Update" view) is preserved and
 * re-attached to the new lesson file.
 *
 * Usage: node scripts/refresh-from-tsv.mjs [--dry-run]
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync, renameSync } from 'fs';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');
const TSV_PATH = join(ROOT, 'LSAT Course Content - Current LR.tsv');
const MODULES_DIR = join(ROOT, 'modules');

const dryRun = process.argv.includes('--dry-run');

// ─── TSV Parsing ───────────────────────────────────────────────────

function parseTSV() {
  const raw = readFileSync(TSV_PATH, 'utf-8');
  const rows = raw.split('\n').map(r => r.replace(/\r$/, '').split('\t'));

  // Row 3 (index 2) is headers, rows 4+ (index 3+) are module data
  const modules = [];
  for (let i = 3; i < rows.length; i++) {
    const row = rows[i];
    const modNum = parseInt(row[23]); // Column 24 (0-indexed: 23)
    const modName = (row[24] || '').trim(); // Column 25
    if (!modNum || !modName) continue;

    const sections = [];
    // Map columns to lesson types
    const colMap = [
      { col: 3, type: 'Introduction', prefix: 'Lesson1_Introduction' },
      { col: 4, type: 'StepByStep', prefix: 'Lesson2_StepByStepGuide' },
      { col: 5, type: 'FieldGuide', prefix: 'Lesson3_FieldGuide' },
      { col: 6, type: 'Lesson1', prefix: 'Lesson4' },
      { col: 7, type: 'Lesson2', prefix: 'Lesson5' },
      { col: 8, type: 'Lesson3', prefix: 'Lesson6' },
      { col: 9, type: 'Lesson4', prefix: 'Lesson7' },
      { col: 10, type: 'Lesson5', prefix: 'Lesson8' },
      { col: 11, type: 'Difficulty', prefix: 'Lesson_AdvancedConcepts' },
      { col: 12, type: 'Hard1', prefix: 'Lesson_Advanced1' },
      { col: 13, type: 'Hard2', prefix: 'Lesson_Advanced2' },
      { col: 14, type: 'Hard3', prefix: 'Lesson_Advanced3' },
      { col: 15, type: 'Hard4', prefix: 'Lesson_Advanced4' },
      { col: 16, type: 'Hard5', prefix: 'Lesson_Advanced5' },
      { col: 17, type: 'Reference', prefix: 'Lesson_ReferenceGuide' },
    ];

    for (const { col, type, prefix } of colMap) {
      const content = (row[col] || '').trim();
      if (content.length > 50) {
        // Extract a topic name from the first heading
        const headingMatch = content.match(/#{1,4}\s*(?:\*+)?(?:Lesson\s*\d+:\s*)?(.+?)(?:\*+)?\s*$/m);
        const topic = headingMatch
          ? headingMatch[1].replace(/[^a-zA-Z0-9 ]/g, '').trim().replace(/\s+/g, '')
          : type;
        sections.push({ type, content, prefix, topic });
      }
    }

    // Also grab question examples (col 19, 0-indexed)
    const examples = (row[19] || '').trim();

    modules.push({ modNum, modName, sections, examples });
  }
  return modules;
}

// ─── Markdown → ContentBlock[] ─────────────────────────────────────

function markdownToBlocks(rawMd) {
  // TSV cells use double-space for line breaks. Normalize to real newlines.
  // Split on "  " that precedes a markdown structural element (heading, hr, list, blockquote, table)
  // or that appears between sentences as paragraph breaks.
  let md = rawMd
    .replace(/  (#{1,4} )/g, '\n\n$1')      // heading after double-space
    .replace(/  (---)/g, '\n\n$1')            // hr after double-space
    .replace(/  ([-*] )/g, '\n$1')            // list item after double-space
    .replace(/  (\d+\. )/g, '\n$1')           // ordered list after double-space
    .replace(/  (>)/g, '\n$1')                // blockquote after double-space
    .replace(/  (\|)/g, '\n$1')               // table row after double-space
    .replace(/  \*\*/g, '\n\n**')             // bold start after double-space (new paragraph)
    .replace(/\*\*  /g, '**\n\n')             // bold end before double-space
    .replace(/([.!?:])  ([A-Z#*>|\-])/g, '$1\n\n$2'); // sentence end + double-space + capital = paragraph break

  const blocks = [];
  const lines = md.split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines
    if (!line.trim()) { i++; continue; }

    // Horizontal rule
    if (/^---+\s*$/.test(line.trim())) {
      blocks.push({ type: 'hr' });
      i++;
      continue;
    }

    // Headings
    const headingMatch = line.match(/^(#{1,4})\s+(.+)/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2].replace(/\*\*/g, '').trim();
      const type = level <= 2 ? 'h2' : level === 3 ? 'h3' : 'h4';
      blocks.push({ type, text });
      i++;
      continue;
    }

    // Table — handle both multi-line and single-line (TSV compressed) formats
    if (line.includes('|') && (line.includes(':---') || lines[i + 1]?.includes('---'))) {
      const tableBlock = line.includes(':---')
        ? parseSingleLineTable(line)
        : parseTable(lines, i);
      if (tableBlock) {
        blocks.push(tableBlock);
        i = tableBlock._endLine ?? (i + 1);
        continue;
      }
    }

    // Blockquote
    if (line.startsWith('>')) {
      const quoteLines = [];
      while (i < lines.length && lines[i].startsWith('>')) {
        quoteLines.push(lines[i].replace(/^>\s?/, ''));
        i++;
      }
      blocks.push({ type: 'blockquote', text: quoteLines.join('\n').trim() });
      continue;
    }

    // Unordered list
    if (/^[-*]\s/.test(line.trim())) {
      const items = [];
      while (i < lines.length && /^[-*]\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*]\s+/, ''));
        i++;
      }
      blocks.push({ type: 'list', items });
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line.trim())) {
      const items = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i++;
      }
      blocks.push({ type: 'list', ordered: true, items });
      continue;
    }

    // Paragraph (collect consecutive non-empty, non-special lines)
    const paraLines = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].match(/^#{1,4}\s/) &&
      !lines[i].match(/^---+\s*$/) &&
      !lines[i].startsWith('>') &&
      !lines[i].startsWith('|') &&
      !/^[-*]\s/.test(lines[i].trim()) &&
      !/^\d+\.\s/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      blocks.push({ type: 'paragraph', text: paraLines.join('\n').trim() });
    }
  }

  return blocks;
}

function parseTable(lines, startIdx) {
  // Header row
  const headerLine = lines[startIdx].trim();
  const headers = headerLine.split('|').map(s => s.trim()).filter(Boolean);

  // Separator row
  const sepIdx = startIdx + 1;
  if (!lines[sepIdx] || !lines[sepIdx].includes('---')) return null;

  // Data rows
  const rows = [];
  let i = sepIdx + 1;
  while (i < lines.length && lines[i].includes('|') && lines[i].trim()) {
    const cells = lines[i].split('|').map(s => s.trim()).filter(Boolean);
    if (cells.length > 0) rows.push(cells);
    i++;
  }

  return { type: 'table', headers, rows, _endLine: i };
}

function parseSingleLineTable(line) {
  // TSV compresses entire markdown tables onto one line:
  // | H1 | H2 | | :--- | :--- | | R1C1 | R1C2 | | R2C1 | R2C2 |
  // Split on " | | " which marks row boundaries (end-pipe space start-pipe)
  // First, normalize: split by the separator row pattern
  const sepMatch = line.match(/\|\s*:?-{3,}.*?\|/);
  if (!sepMatch) return null;

  const sepStart = sepMatch.index;
  const sepEnd = sepStart + sepMatch[0].length;

  // Find where the separator row ends (look for next | that starts a data row)
  // The separator might have multiple :--- columns
  let afterSep = sepEnd;
  while (afterSep < line.length && (line[afterSep] === ' ' || line[afterSep] === '-' || line[afterSep] === ':' || line[afterSep] === '|')) {
    afterSep++;
  }
  // Back up to the last |
  while (afterSep > sepEnd && line[afterSep - 1] !== '|') afterSep--;

  const headerPart = line.substring(0, sepStart).trim();
  const dataPart = line.substring(afterSep).trim();

  // Parse headers
  const headers = headerPart.split('|').map(s => s.trim()).filter(Boolean);

  // Parse data rows — split on "| |" pattern (end of one row, start of next)
  // Actually, rows are separated by | followed by | where the column count resets
  const rows = [];
  if (dataPart) {
    // Simple heuristic: split all cells, then chunk by header count
    const allCells = dataPart.split('|').map(s => s.trim()).filter(Boolean);
    const colCount = headers.length;
    for (let i = 0; i < allCells.length; i += colCount) {
      const row = allCells.slice(i, i + colCount);
      if (row.length === colCount) rows.push(row);
    }
  }

  return { type: 'table', headers, rows };
}

// ─── Lesson File Generation ────────────────────────────────────────

function generateLessonId(modNum, sectionIdx, type) {
  if (type === 'Introduction') return `${modNum}-1`;
  if (type === 'StepByStep') return `${modNum}-2`;
  if (type === 'FieldGuide') return `${modNum}-3`;
  if (type === 'Reference') return `${modNum}-ref`;
  if (type === 'Difficulty') return `${modNum}-adv`;
  // Lessons and hard lessons get sequential numbers
  return `${modNum}-${sectionIdx + 1}`;
}

function generateTitle(content, type, modName) {
  // Extract title from first heading. TSV content has no real newlines,
  // so split on double-space to find the heading boundary.
  const firstChunk = content.split('  ')[0];
  const match = firstChunk.match(/#{1,4}\s+(?:\*+)?(.+?)(?:\*+)?$/);
  if (match) return match[1].replace(/\*\*/g, '').trim();
  // Fallback
  const typeLabels = {
    Introduction: `Introduction`,
    StepByStep: `Step-by-Step Guide`,
    FieldGuide: `Field Guide`,
    Difficulty: `Advanced Concepts`,
    Reference: `Reference Guide`,
  };
  return typeLabels[type] || type;
}

function generateExportName(prefix, topic) {
  // Clean the prefix for use as TypeScript export name
  const name = prefix.replace(/[^a-zA-Z0-9_]/g, '');
  return name;
}

function readExistingDiffAlternate(modNum, lessonId) {
  // Try to find the diff alternate from existing lesson files in the module dir
  const dir = join(MODULES_DIR, `module${modNum}`);
  if (!existsSync(dir)) return null;

  const files = readdirSync(dir).filter(f => f.endsWith('.tsx'));
  for (const file of files) {
    const src = readFileSync(join(dir, file), 'utf-8');
    const idMatch = src.match(/id:\s*['"]([^'"]+)['"]/);
    if (idMatch && idMatch[1] === lessonId) {
      // Extract alternates.diff content
      const altMatch = src.match(/alternates:\s*\{[\s\S]*?diff:\s*\{[\s\S]*?content:\s*(\[[\s\S]*?\]),?\s*\},/);
      if (altMatch) {
        try {
          return { raw: altMatch[0] };
        } catch { /* ignore */ }
      }
      // Try to get the full alternates block
      const fullAlt = src.match(/(alternates:\s*\{[\s\S]*?\},)\s*\};?\s*$/);
      if (fullAlt) return { raw: fullAlt[1] };
    }
  }
  return null;
}

function buildLessonFile(exportName, lessonId, title, blocks, diffAlternate) {
  const cleanBlocks = blocks
    .filter(b => !b._endLine) // Remove internal metadata
    .map(b => {
      const clean = { ...b };
      delete clean._endLine;
      return clean;
    });

  const contentJson = JSON.stringify(cleanBlocks, null, 2)
    .split('\n')
    .map((line, i) => i === 0 ? line : '  ' + line)
    .join('\n');

  let alternatesBlock = '';
  if (diffAlternate) {
    alternatesBlock = `\n  ${diffAlternate.raw}\n`;
  }

  return `import { Lesson } from '../../types';

export const ${exportName}: Lesson = {
  id: '${lessonId}',
  title: '${title.replace(/'/g, "\\'")}',
  content: ${contentJson},${alternatesBlock}
};
`;
}

// ─── Main ──────────────────────────────────────────────────────────

const modules = parseTSV();
console.log(`Parsed ${modules.length} modules from TSV.${dryRun ? ' [DRY RUN]' : ''}\n`);

let totalFiles = 0;
const moduleManifests = {}; // modNum → [{ exportName, fileName, lessonId, title }]

for (const mod of modules) {
  if (mod.modNum > 20) continue; // Only process M1-M20

  const dir = join(MODULES_DIR, `module${mod.modNum}`);

  console.log(`\n=== Module ${mod.modNum}: ${mod.modName} (${mod.sections.length} sections) ===`);

  // Back up existing files to _prev subdirectory
  if (existsSync(dir) && !dryRun) {
    const prevDir = join(dir, '_prev');
    if (!existsSync(prevDir)) mkdirSync(prevDir, { recursive: true });
    const existing = readdirSync(dir).filter(f => f.endsWith('.tsx'));
    for (const f of existing) {
      renameSync(join(dir, f), join(prevDir, f));
    }
  }

  if (!existsSync(dir) && !dryRun) mkdirSync(dir, { recursive: true });

  const manifest = [];

  for (let si = 0; si < mod.sections.length; si++) {
    const section = mod.sections[si];
    const lessonId = generateLessonId(mod.modNum, si, section.type);
    const title = generateTitle(section.content, section.type, mod.modName);
    const exportName = generateExportName(section.prefix, section.topic);
    const fileName = section.prefix + '.tsx';

    // Convert markdown to ContentBlocks
    const blocks = markdownToBlocks(section.content);

    // Skip diff alternate lookup for now — the _prev backup preserves all originals
    const diffAlt = null;

    const fileContent = buildLessonFile(exportName, lessonId, title, blocks, diffAlt);

    if (!dryRun) {
      writeFileSync(join(dir, fileName), fileContent, 'utf-8');
    }

    console.log(`  ${fileName} (${lessonId}): ${blocks.length} blocks${diffAlt ? ' + diff alt' : ''}`);
    manifest.push({ exportName, fileName: fileName.replace('.tsx', ''), lessonId, title });
    totalFiles++;
  }

  moduleManifests[mod.modNum] = manifest;
}

// ─── Generate Module*.tsx aggregators ───────────────────────────────

console.log('\n=== Generating Module aggregators ===');

for (const [modNumStr, manifest] of Object.entries(moduleManifests)) {
  const modNum = parseInt(modNumStr);
  const mod = modules.find(m => m.modNum === modNum);

  const imports = manifest.map(m =>
    `import { ${m.exportName} } from './module${modNum}/${m.fileName}';`
  ).join('\n');

  const lessons = manifest.map(m => `    ${m.exportName},`).join('\n');

  const fileContent = `import { ModuleData } from '../types';
${imports}

export const Module${modNum}: ModuleData = {
  id: ${modNum},
  title: '${mod.modName.replace(/'/g, "\\'")}',
  category: 'LR',
  description: '',
  unit: '',
  lessons: [
${lessons}
  ],
};
`;

  const filePath = join(MODULES_DIR, `Module${modNum}.tsx`);
  if (!dryRun) writeFileSync(filePath, fileContent, 'utf-8');
  console.log(`  Module${modNum}.tsx (${manifest.length} lessons)`);
}

console.log(`\n=== Done ===`);
console.log(`Total lesson files: ${totalFiles}`);
if (dryRun) console.log('(Dry run — no files written)');
