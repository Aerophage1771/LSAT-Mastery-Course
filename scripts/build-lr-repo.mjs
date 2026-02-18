#!/usr/bin/env node
/**
 * Builds LR repository lesson files (Module 48) by extracting stimulus, question, and options
 * from each *Drill*.tsx file in modules 1-20, 55, 59. One lesson per LR module.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const MODULES_DIR = path.join(ROOT, 'modules');
const MODULE48_DIR = path.join(MODULES_DIR, 'module48');

const LR_MODULE_TITLES = {
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
  13: 'Principle - Apply',
  14: 'Principle - Generalization',
  15: 'Fill in the Blank',
  16: 'Most Strongly Supported',
  17: 'Must Be True',
  18: 'Must Be False',
  19: 'Paradox / Explain',
  20: 'Agree / Disagree (Point at Issue)',
  55: 'Conditional Reasoning',
  59: 'LSAT Math',
};

// Extract a single-quoted or double-quoted string from src starting at pos (after "text: " or similar).
// Returns { value, endIndex }.
function extractString(src, startIndex) {
  let i = startIndex;
  while (i < src.length && (src[i] === ' ' || src[i] === '\t' || src[i] === '\n')) i++;
  const quote = src[i];
  if (quote !== '"' && quote !== "'") return { value: null, endIndex: startIndex };
  i++;
  let value = '';
  while (i < src.length) {
    const ch = src[i];
    if (ch === '\\') {
      i++;
      if (i < src.length) value += src[i] === 'n' ? '\n' : src[i];
      i++;
      continue;
    }
    if (ch === quote) {
      i++;
      return { value, endIndex: i };
    }
    value += ch;
    i++;
  }
  return { value, endIndex: i };
}

// From "items: [" find the array and parse item strings. Returns array of strings.
function extractOptionsItems(src, itemsStartIndex) {
  let i = itemsStartIndex;
  while (i < src.length && src[i] !== '[') i++;
  if (i >= src.length) return [];
  i++; // skip [
  const items = [];
  while (i < src.length) {
    while (i < src.length && /[\s,]/.test(src[i])) i++;
    if (i >= src.length || src[i] === ']') break;
    const { value, endIndex } = extractString(src, i);
    if (value !== null) items.push(value);
    i = endIndex;
  }
  return items;
}

function extractDrill(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');

  // Title
  const titleMatch = src.match(/title:\s*["']([^"']*(?:\\.[^"']*)*)["']/);
  const title = titleMatch ? titleMatch[1].replace(/\\'/g, "'").replace(/\\"/g, '"') : '[Missing title]';
  const hasId = /PT-\d+-S-\d+-Q-\d+/.test(title);

  // First blockquote text
  const blockquoteIdx = src.indexOf("type: 'blockquote'");
  const blockquoteIdx2 = src.indexOf('type: "blockquote"');
  const bqIdx = blockquoteIdx >= 0 ? blockquoteIdx : blockquoteIdx2;
  let stimulus = '[Missing content]';
  if (bqIdx >= 0) {
    const textIdx = src.indexOf('text:', bqIdx);
    if (textIdx >= 0) {
      const { value } = extractString(src, textIdx + 5);
      if (value) stimulus = value;
    }
  }

  // Question paragraph: first paragraph after "The Question" or "The Problem", or last paragraph before options
  const questionH4 = src.indexOf("'The Question'");
  const problemH4 = src.indexOf("'The Problem'");
  const questionLabelIdx = questionH4 >= 0 ? questionH4 : problemH4;
  let question = '[Missing content]';
  const optionsIdx = src.indexOf("type: 'options'");
  const optionsIdx2 = src.indexOf('type: "options"');
  const optsIdx = (optionsIdx >= 0 ? optionsIdx : optionsIdx2);
  if (optsIdx >= 0) {
    // Find paragraph with text: that appears before options; prefer one after "The Question" / "The Problem"
    const beforeOptions = src.slice(0, optsIdx);
    const paragraphMatches = [...beforeOptions.matchAll(/type:\s*['"]paragraph['"]\s*,\s*text:\s*(['"])/g)];
    for (let k = paragraphMatches.length - 1; k >= 0; k--) {
      const m = paragraphMatches[k];
      const start = m.index + m[0].length - 1;
      const { value } = extractString(beforeOptions, start);
      if (value && value !== '<br/><br/><br/>' && !value.startsWith('**Instructions:**') && !value.startsWith('*(Scroll')) {
        question = value;
        break;
      }
    }
  }

  // Options
  let items = [];
  if (optsIdx >= 0) {
    const itemsLabelIdx = src.indexOf('items:', optsIdx);
    if (itemsLabelIdx >= 0) items = extractOptionsItems(src, itemsLabelIdx);
  }
  if (items.length === 0) items = ['[Missing content]'];

  return {
    title: hasId ? title : title + ' [Missing ID]',
    stimulus,
    question,
    items,
    missingContent: stimulus === '[Missing content]' || question === '[Missing content]' || (items.length === 1 && items[0] === '[Missing content]'),
  };
}

function escapeForTsx(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n').replace(/\r/g, '');
}

function formatOptionsItems(items) {
  return items.map((item) => "        '" + escapeForTsx(item) + "'").join(',\n');
}

function buildLessonFile(moduleNum, moduleTitle, drills) {
  const lessonNum = moduleNum <= 20 ? moduleNum : moduleNum === 55 ? 21 : 22;
  const componentName = `Lesson${lessonNum}_Module${moduleNum}_Questions`;
  const id = `48-${lessonNum}`;
  const safeTitle = moduleTitle.replace(/'/g, "\\'");

  if (drills.length === 0) {
    return `import { Lesson } from '../../types';

export const ${componentName}: Lesson = {
  id: "${id}",
  title: "Module ${moduleNum}: ${moduleTitle}",
  content: [
    { type: 'h2', text: 'Module ${moduleNum}: ${safeTitle}' },
    { type: 'paragraph', text: 'No drill questions in this module.' }
  ]
};
`;
  }

  const accordions = drills.map((d) => {
    const stimulusEsc = escapeForTsx(d.stimulus);
    const questionEsc = escapeForTsx(d.question);
    const optionsLines = formatOptionsItems(d.items);
    const titleEsc = escapeForTsx(d.title);
    return `    {
      type: 'accordion',
      title: '${titleEsc}',
      content: [
        { type: 'h4', text: 'Stimulus' },
        { type: 'blockquote', text: '${stimulusEsc}' },
        { type: 'h4', text: 'Question' },
        { type: 'paragraph', text: '${questionEsc}' },
        { type: 'options', items: [
${optionsLines}
        ]}
      ]
    }`;
  });

  const contentBlocks = [
    `    { type: 'h2', text: 'Module ${moduleNum}: ${safeTitle}' },`,
    ...accordions.map((a) => a + ','),
  ].join('\n');

  return `import { Lesson, ContentBlock } from '../../types';

export const ${componentName}: Lesson = {
  id: "${id}",
  title: "Module ${moduleNum}: ${moduleTitle}",
  content: [
${contentBlocks}
  ] as ContentBlock[]
};
`;
}

function main() {
  if (!fs.existsSync(MODULE48_DIR)) fs.mkdirSync(MODULE48_DIR, { recursive: true });

  const lrModules = [...Array.from({ length: 20 }, (_, i) => i + 1), 55, 59];
  const moduleTitles = { ...LR_MODULE_TITLES };

  for (const moduleNum of lrModules) {
    const moduleDir = path.join(MODULES_DIR, `module${moduleNum}`);
    if (!fs.existsSync(moduleDir)) {
      const content = buildLessonFile(moduleNum, moduleTitles[moduleNum] || `Module ${moduleNum}`, []);
      const fileName = `Lesson${moduleNum <= 20 ? moduleNum : moduleNum === 55 ? 21 : 22}_Module${moduleNum}_Questions.tsx`;
      fs.writeFileSync(path.join(MODULE48_DIR, fileName), content, 'utf8');
      console.log(`Wrote ${fileName} (no drills)`);
      continue;
    }

    const files = fs.readdirSync(moduleDir).filter((f) => f.includes('Drill') && f.endsWith('.tsx'));
    const drillFiles = files.sort((a, b) => a.localeCompare(b));
    const drills = drillFiles.map((f) => extractDrill(path.join(moduleDir, f)));

    const lessonNum = moduleNum <= 20 ? moduleNum : moduleNum === 55 ? 21 : 22;
    const fileName = `Lesson${lessonNum}_Module${moduleNum}_Questions.tsx`;
    const content = buildLessonFile(moduleNum, moduleTitles[moduleNum] || `Module ${moduleNum}`, drills);
    fs.writeFileSync(path.join(MODULE48_DIR, fileName), content, 'utf8');
    console.log(`Wrote ${fileName} (${drills.length} drills)`);
  }

  console.log('Done. Update Module48.tsx to import all new lessons.');
}

main();
