import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

export const ROOT_DIR = join(import.meta.dirname, '..', '..');
export const MODULES_DIR = join(ROOT_DIR, 'modules');
export const LEGACY_ROUTE_ALIASES = {
  10: 11,
  11: 12,
  12: 13,
  13: 14,
  14: 15,
  15: 16,
  16: 17,
  17: 18,
  18: 19,
  19: 20,
  20: 21,
  21: 24,
  22: 25,
  23: 26,
  24: 27,
  25: 28,
  26: 29,
  27: 30,
  28: 31,
  29: 32,
  30: 33,
  31: 34,
  32: 35,
  33: 36,
  34: 37,
  35: 38,
  36: 39,
  37: 40,
  38: 41,
  39: 42,
  40: 43,
  41: 44,
  42: 45,
  43: 46,
  44: 47,
  45: 48,
  46: 49,
  47: 50,
  50: 51,
  51: 52,
  52: 53,
  54: 54,
  55: 22,
  56: 55,
  57: 56,
  58: 57,
  59: 23,
  60: 10,
};
export const LR_CONTENT_MODULE_IDS = new Set([...Array.from({ length: 20 }, (_, index) => index + 1), 55, 59, 60]);
export const QUESTION_BANK_MODULE_DIRS = new Set(['module48', 'module49', 'module53']);

const LESSON_DECLARATION_REGEX =
  /export const\s+\w+\s*:\s*Lesson\s*=\s*\{[\s\S]*?id:\s*['"]([^'"]+)['"][\s\S]*?title:\s*['"]([^'"]+)['"]/;
const MODULE_TITLE_REGEX = /export const Module\d+\s*:\s*ModuleData\s*=\s*\{[\s\S]*?title:\s*['"]([^'"]+)['"]/;
const MODULE_CATEGORY_REGEX = /category:\s*['"]([^'"]+)['"]/;
const MODULE_UNIT_REGEX = /unit:\s*['"]([^'"]+)['"]/;
const MODULE_DESCRIPTION_REGEX = /description:\s*['"]([^'"]+)['"]/;
const CARD_ID_REGEX = /type:\s*'question(?:-passage)?-card'[\s\S]*?id:\s*['"]([^'"]+)['"]/g;
const PT_ID_REGEX = /PT-\d+-S-\d+-Q-\d+/g;

const BLOCK_TYPE_NAMES = [
  'paragraph', 'h1', 'h2', 'h3', 'h4', 'blockquote', 'hr', 'code',
  'list', 'options', 'process', 'accordion', 'table',
  'callout', 'breakdown',
  'question-card', 'passage-card', 'question-passage-card',
];

const TEXT_FIELD_REGEX = /(?:text|stimulus|question|passage|title|passageTitle):\s*[`'"]([\s\S]*?)(?:(?<!\\)[`'"])/g;
const ITEMS_ENTRY_REGEX = /['"`]((?:[^'"`\\]|\\.)*)['"`]/g;

export function getRouteModuleId(contentModuleId) {
  return LEGACY_ROUTE_ALIASES[contentModuleId] ?? contentModuleId;
}

export function getRegisteredContentModuleIds() {
  return readdirSync(MODULES_DIR)
    .map((fileName) => {
      const match = fileName.match(/^Module(\d+)\.tsx$/);
      return match ? Number(match[1]) : null;
    })
    .filter((value) => value !== null)
    .sort((a, b) => a - b);
}

function buildImportMap(moduleContent) {
  const importMap = new Map();

  for (const match of moduleContent.matchAll(/import\s*\{\s*([^}]+)\s*\}\s*from\s*['"]([^'"]+)['"]/g)) {
    const importPath = match[2];
    const importNames = match[1]
      .split(',')
      .map((name) => name.trim())
      .filter(Boolean);

    for (const importName of importNames) {
      importMap.set(importName, importPath);
    }
  }

  return importMap;
}

export function extractOrderedLessonFiles(contentModuleId) {
  const moduleFilePath = join(MODULES_DIR, `Module${contentModuleId}.tsx`);
  const moduleContent = readFileSync(moduleFilePath, 'utf-8');
  const importMap = buildImportMap(moduleContent);
  const lessonsMatch = moduleContent.match(/lessons:\s*\[([\s\S]*?)\]/);
  if (!lessonsMatch) return [];

  const lessonVars = lessonsMatch[1].match(/[A-Za-z_][A-Za-z0-9_]*/g) ?? [];

  return lessonVars
    .map((lessonVar) => {
      const importPath = importMap.get(lessonVar);
      if (!importPath) return null;
      return join(MODULES_DIR, importPath.replace('./', '') + '.tsx');
    })
    .filter(Boolean);
}

export function getModuleTitle(contentModuleId) {
  const moduleFilePath = join(MODULES_DIR, `Module${contentModuleId}.tsx`);
  const moduleContent = readFileSync(moduleFilePath, 'utf-8');
  const moduleTitleMatch = moduleContent.match(MODULE_TITLE_REGEX);
  return moduleTitleMatch?.[1] ?? `Module ${contentModuleId}`;
}

export function parseLessonMeta(content, filePath) {
  const lessonMatch = content.match(LESSON_DECLARATION_REGEX);
  if (!lessonMatch) {
    return { errors: [`Could not parse lesson id/title in ${filePath}`] };
  }

  const cardIds = Array.from(content.matchAll(CARD_ID_REGEX), (match) => match[1]);
  const ptIds = [...new Set(cardIds.flatMap((id) => id.match(PT_ID_REGEX) ?? []))];
  const questionPolicyMatch = content.match(/questionPolicy:\s*['"]([^'"]+)['"]/);

  return {
    id: lessonMatch[1],
    title: lessonMatch[2],
    questionPolicy: questionPolicyMatch?.[1],
    cardIds,
    hasQuestionCard: cardIds.length > 0,
    ptIds,
    errors: [],
  };
}

export function readRegisteredLessons({ contentModuleIds = getRegisteredContentModuleIds() } = {}) {
  const rows = [];

  for (const contentModuleId of contentModuleIds) {
    const moduleTitle = getModuleTitle(contentModuleId);
    const routeModuleId = getRouteModuleId(contentModuleId);
    const lessonFiles = extractOrderedLessonFiles(contentModuleId);

    lessonFiles.forEach((filePath, index) => {
      rows.push({
        contentModuleId,
        routeModuleId,
        moduleTitle,
        lessonOrder: index + 1,
        filePath,
        content: readFileSync(filePath, 'utf-8'),
      });
    });
  }

  return rows;
}

// --- CONTENT METRICS HELPERS ---

export function getModuleCategory(contentModuleId) {
  const moduleFilePath = join(MODULES_DIR, `Module${contentModuleId}.tsx`);
  const moduleContent = readFileSync(moduleFilePath, 'utf-8');
  const match = moduleContent.match(MODULE_CATEGORY_REGEX);
  return match?.[1] ?? 'Unknown';
}

export function getModuleUnit(contentModuleId) {
  const moduleFilePath = join(MODULES_DIR, `Module${contentModuleId}.tsx`);
  const moduleContent = readFileSync(moduleFilePath, 'utf-8');
  const match = moduleContent.match(MODULE_UNIT_REGEX);
  return match?.[1] ?? '';
}

export function getModuleDescription(contentModuleId) {
  const moduleFilePath = join(MODULES_DIR, `Module${contentModuleId}.tsx`);
  const moduleContent = readFileSync(moduleFilePath, 'utf-8');
  const match = moduleContent.match(MODULE_DESCRIPTION_REGEX);
  return match?.[1] ?? '';
}

function stripMarkdown(text) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/<[^>]+>/g, '');
}

function countWords(text) {
  if (!text) return 0;
  const cleaned = stripMarkdown(text).trim();
  if (!cleaned) return 0;
  return cleaned.split(/\s+/).filter(Boolean).length;
}

export function estimateWordCount(content) {
  let total = 0;

  // Extract string values from text-bearing fields
  const textFieldPattern = /(?:text|stimulus|question|passage|passageTitle):\s*['"`]/g;
  let match;
  while ((match = textFieldPattern.exec(content)) !== null) {
    const quoteChar = content[match.index + match[0].length - 1];
    const start = match.index + match[0].length;
    let end = start;
    let depth = quoteChar === '`' ? 1 : 0;

    // Walk forward to find the closing quote, handling escapes
    for (let i = start; i < content.length; i++) {
      if (content[i] === '\\') { i++; continue; }
      if (quoteChar === '`') {
        if (content[i] === '`') { end = i; break; }
      } else {
        if (content[i] === quoteChar) { end = i; break; }
      }
    }

    const value = content.slice(start, end);
    total += countWords(value);
  }

  // Extract items from list/options/process arrays
  const itemsPattern = /(?:items|steps|headers):\s*\[/g;
  while ((match = itemsPattern.exec(content)) !== null) {
    const start = match.index + match[0].length;
    let depth = 1;
    let end = start;
    for (let i = start; i < content.length && depth > 0; i++) {
      if (content[i] === '[') depth++;
      if (content[i] === ']') depth--;
      end = i;
    }
    const arrayContent = content.slice(start, end);
    // Count words in all string literals within the array
    const stringPattern = /['"`]((?:[^'"`\\]|\\.)*)['"`]/g;
    let strMatch;
    while ((strMatch = stringPattern.exec(arrayContent)) !== null) {
      total += countWords(strMatch[1]);
    }
  }

  // Extract table rows
  const rowsPattern = /rows:\s*\[/g;
  while ((match = rowsPattern.exec(content)) !== null) {
    const start = match.index + match[0].length;
    let depth = 1;
    let end = start;
    for (let i = start; i < content.length && depth > 0; i++) {
      if (content[i] === '[') depth++;
      if (content[i] === ']') depth--;
      end = i;
    }
    const arrayContent = content.slice(start, end);
    const stringPattern = /['"`]((?:[^'"`\\]|\\.)*)['"`]/g;
    let strMatch;
    while ((strMatch = stringPattern.exec(arrayContent)) !== null) {
      total += countWords(strMatch[1]);
    }
  }

  return total;
}

export function countBlockTypes(content) {
  const counts = {};
  for (const typeName of BLOCK_TYPE_NAMES) {
    const regex = new RegExp(`type:\\s*'${typeName}'`, 'g');
    const matches = content.match(regex);
    if (matches) counts[typeName] = matches.length;
  }
  return counts;
}

export function countCardTypes(content) {
  const questionCard = (content.match(/type:\s*'question-card'/g) || []).length;
  const passageCard = (content.match(/type:\s*'passage-card'/g) || []).length;
  const questionPassageCard = (content.match(/type:\s*'question-passage-card'/g) || []).length;
  return { questionCard, passageCard, questionPassageCard };
}

export function extractDifficultyDistribution(content) {
  const dist = { easy: 0, medium: 0, hard: 0, unspecified: 0 };

  // Find all question-card and question-passage-card blocks
  const cardPattern = /type:\s*'question(?:-passage)?-card'/g;
  let match;
  while ((match = cardPattern.exec(content)) !== null) {
    // Look within the next ~500 chars for a difficulty field
    const window = content.slice(match.index, match.index + 500);
    const diffMatch = window.match(/difficulty:\s*'(easy|medium|hard)'/);
    if (diffMatch) {
      dist[diffMatch[1]]++;
    } else {
      dist.unspecified++;
    }
  }

  return dist;
}
