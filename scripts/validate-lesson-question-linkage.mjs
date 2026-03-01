#!/usr/bin/env node

import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const ROOT_DIR = join(import.meta.dirname, '..');
const MODULES_DIR = join(ROOT_DIR, 'modules');
const MODULE48_DIR = join(MODULES_DIR, 'module48');
const REPORT_PATH = join(ROOT_DIR, 'docs', 'question-linkage-audit.md');
const PT_REGEX = /PT-\d+-S-\d+-Q-\d+/g;
const LR_MODULE_ALIASES = { 55: 21, 59: 22 };
const LR_MODULE_IDS = new Set([...Array.from({ length: 20 }, (_, index) => index + 1), 55, 59]);

const getRouteModuleId = (moduleId) => LR_MODULE_ALIASES[moduleId] ?? moduleId;

function getLessonNumber(lessonId) {
  const match = lessonId.match(/-(\d+)$/);
  return match ? Number(match[1]) : null;
}

function extractLessonMeta(content, filePath) {
  const lessonMatch = content.match(
    /export const\s+\w+\s*:\s*Lesson\s*=\s*\{[\s\S]*?id:\s*['"]([^'"]+)['"][\s\S]*?title:\s*['"]([^'"]+)['"]/,
  );
  if (!lessonMatch) {
    return { errors: [`Could not parse lesson id/title in ${filePath}`] };
  }

  const hasQuestionCard = /type:\s*'question(?:-passage)?-card'/.test(content);
  const cardIds = Array.from(content.matchAll(/type:\s*'question(?:-passage)?-card'[\s\S]*?id:\s*['"]([^'"]+)['"]/g), (match) => match[1]);
  const ptIds = [...new Set(cardIds.flatMap((id) => id.match(PT_REGEX) ?? []))];

  return {
    id: lessonMatch[1],
    title: lessonMatch[2],
    hasQuestionCard,
    ptIds,
    errors: [],
  };
}

function collectModule48PtIds() {
  const ids = new Set();
  const files = readdirSync(MODULE48_DIR).filter((file) => file.endsWith('.tsx'));
  for (const file of files) {
    const content = readFileSync(join(MODULE48_DIR, file), 'utf-8');
    const matches = content.match(PT_REGEX) ?? [];
    for (const match of matches) ids.add(match);
  }
  return ids;
}

const module48PtIds = collectModule48PtIds();
const errors = [];
const lessons = [];
const ptIdToLesson = new Map();

for (const moduleDir of readdirSync(MODULES_DIR)) {
  const moduleDirMatch = moduleDir.match(/^module(\d+)$/);
  if (!moduleDirMatch) continue;
  const contentModuleId = Number(moduleDirMatch[1]);
  if (!LR_MODULE_IDS.has(contentModuleId)) continue;

  const routeModuleId = getRouteModuleId(contentModuleId);
  const directory = join(MODULES_DIR, moduleDir);
  const lessonFiles = readdirSync(directory).filter((file) => /^Lesson.*\.tsx$/.test(file));

  for (const lessonFile of lessonFiles) {
    const fullPath = join(directory, lessonFile);
    const content = readFileSync(fullPath, 'utf-8');
    const meta = extractLessonMeta(content, fullPath);
    if (meta.errors.length) {
      errors.push(...meta.errors);
      continue;
    }

    const lessonNumber = getLessonNumber(meta.id);

    if (meta.hasQuestionCard && meta.ptIds.length === 0) {
      errors.push(`Module ${routeModuleId} lesson ${meta.id}: has question card but no PT id`);
    }
    if (lessonNumber !== null && lessonNumber >= 4 && !meta.hasQuestionCard) {
      errors.push(`Module ${routeModuleId} lesson ${meta.id}: lesson 4+ missing question card`);
    }
    if (meta.ptIds.length > 0) {
      const titlePtIds = new Set(meta.title.match(PT_REGEX) ?? []);
      const missingInTitle = meta.ptIds.filter((ptId) => !titlePtIds.has(ptId));
      if (missingInTitle.length > 0) {
        errors.push(`Module ${routeModuleId} lesson ${meta.id}: title missing PT IDs ${missingInTitle.join(', ')}`);
      }
    }

    for (const ptId of meta.ptIds) {
      if (ptIdToLesson.has(ptId)) {
        errors.push(
          `Duplicate PT ID ${ptId}: ${ptIdToLesson.get(ptId)} and module ${routeModuleId} lesson ${meta.id}`,
        );
      } else {
        ptIdToLesson.set(ptId, `module ${routeModuleId} lesson ${meta.id}`);
      }
      if (!module48PtIds.has(ptId)) {
        errors.push(`Module ${routeModuleId} lesson ${meta.id}: PT ID ${ptId} not found in module48 repository`);
      }
    }

    lessons.push({
      moduleId: routeModuleId,
      lessonId: meta.id,
      title: meta.title,
      hasQuestionCard: meta.hasQuestionCard,
      ptIds: meta.ptIds,
    });
  }
}

const dedupedErrors = [...new Set(errors)];

const summary = {
  totalLessons: lessons.length,
  lessonsWithQuestionCards: lessons.filter((lesson) => lesson.hasQuestionCard).length,
  totalLinkedPtIds: ptIdToLesson.size,
  errors: dedupedErrors.length,
};

const report = [
  '# Lesson Question Linkage Audit',
  '',
  '## Summary',
  `- totalLessons: ${summary.totalLessons}`,
  `- lessonsWithQuestionCards: ${summary.lessonsWithQuestionCards}`,
  `- totalLinkedPtIds: ${summary.totalLinkedPtIds}`,
  `- errors: ${summary.errors}`,
  '',
  '## Errors',
  ...(dedupedErrors.length > 0 ? dedupedErrors.map((error) => `- ${error}`) : ['- None']),
  '',
].join('\n');

writeFileSync(REPORT_PATH, `${report}\n`, 'utf-8');

console.log('Lesson Question Linkage Validation');
console.log('='.repeat(50));
console.log(`Lessons scanned: ${summary.totalLessons}`);
console.log(`Lessons with question cards: ${summary.lessonsWithQuestionCards}`);
console.log(`Linked PT IDs: ${summary.totalLinkedPtIds}`);
console.log(`Errors: ${summary.errors}`);
console.log(`Report: ${REPORT_PATH}`);

if (dedupedErrors.length > 0) {
  console.error('\nValidation failed:');
  for (const error of dedupedErrors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log('\nValidation passed.');
