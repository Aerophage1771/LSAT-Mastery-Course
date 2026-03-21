import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

export const ROOT_DIR = join(import.meta.dirname, '..', '..');
export const MODULES_DIR = join(ROOT_DIR, 'modules');
export const LEGACY_ROUTE_ALIASES = { 55: 21, 59: 22 };
export const LR_CONTENT_MODULE_IDS = new Set([...Array.from({ length: 20 }, (_, index) => index + 1), 55, 59]);
export const QUESTION_BANK_MODULE_DIRS = new Set(['module48', 'module49', 'module53']);

const LESSON_DECLARATION_REGEX =
  /export const\s+\w+\s*:\s*Lesson\s*=\s*\{[\s\S]*?id:\s*['"]([^'"]+)['"][\s\S]*?title:\s*['"]([^'"]+)['"]/;
const MODULE_TITLE_REGEX = /export const Module\d+\s*:\s*ModuleData\s*=\s*\{[\s\S]*?title:\s*['"]([^'"]+)['"]/;
const CARD_ID_REGEX = /type:\s*'question(?:-passage)?-card'[\s\S]*?id:\s*['"]([^'"]+)['"]/g;
const PT_ID_REGEX = /PT-\d+-S-\d+-Q-\d+/g;

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
