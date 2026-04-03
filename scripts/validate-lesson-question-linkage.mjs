#!/usr/bin/env node

import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import {
  LR_CONTENT_MODULE_IDS,
  MODULES_DIR,
  parseLessonMeta,
  readRegisteredLessons,
} from './lib/registeredLessons.mjs';

const ROOT_DIR = join(import.meta.dirname, '..');
const MODULE48_DIR = join(MODULES_DIR, 'module48');
const AUDITS_DIR = join(ROOT_DIR, 'docs', 'operations', 'audits');
const REPORT_PATH = join(AUDITS_DIR, 'question-linkage-audit.md');
const VALID_POLICIES = new Set(['none', 'repository_required']);
const module48PtIds = collectModule48PtIds();
const errors = [];
const lessons = [];
const ptIdToLesson = new Map();

function collectModule48PtIds() {
  const ids = new Set();
  const files = readdirSync(MODULE48_DIR).filter((file) => file.endsWith('.tsx'));
  for (const file of files) {
    const content = readFileSync(join(MODULE48_DIR, file), 'utf-8');
    const matches = content.match(/PT-\d+-S-\d+-Q-\d+/g) ?? [];
    for (const match of matches) ids.add(match);
  }
  return ids;
}

const registeredLessons = readRegisteredLessons({
  contentModuleIds: [...LR_CONTENT_MODULE_IDS].sort((a, b) => a - b),
});

for (const lessonRow of registeredLessons) {
  const meta = parseLessonMeta(lessonRow.content, lessonRow.filePath);
  if (meta.errors.length > 0) {
    errors.push(...meta.errors);
    continue;
  }

  if (!meta.questionPolicy) {
    errors.push(`Module ${lessonRow.routeModuleId} lesson ${meta.id}: missing questionPolicy`);
  } else if (!VALID_POLICIES.has(meta.questionPolicy)) {
    errors.push(`Module ${lessonRow.routeModuleId} lesson ${meta.id}: invalid questionPolicy "${meta.questionPolicy}"`);
  }

  if (meta.questionPolicy === 'none' && meta.hasQuestionCard) {
    errors.push(
      `Module ${lessonRow.routeModuleId} lesson ${meta.id}: questionPolicy none cannot include question cards`,
    );
  }

  if (meta.questionPolicy === 'repository_required' && !meta.hasQuestionCard) {
    errors.push(
      `Module ${lessonRow.routeModuleId} lesson ${meta.id}: repository_required but no question card present`,
    );
  }

  if (meta.hasQuestionCard && meta.ptIds.length === 0) {
    errors.push(`Module ${lessonRow.routeModuleId} lesson ${meta.id}: has question card but no PT id`);
  }

  for (const ptId of meta.ptIds) {
    if (ptIdToLesson.has(ptId)) {
      errors.push(
        `Duplicate PT ID ${ptId}: ${ptIdToLesson.get(ptId)} and module ${lessonRow.routeModuleId} lesson ${meta.id}`,
      );
    } else {
      ptIdToLesson.set(ptId, `module ${lessonRow.routeModuleId} lesson ${meta.id}`);
    }

    if (!module48PtIds.has(ptId)) {
      errors.push(
        `Module ${lessonRow.routeModuleId} lesson ${meta.id}: PT ID ${ptId} not found in module48 repository`,
      );
    }
  }

  lessons.push({
    moduleId: lessonRow.routeModuleId,
    lessonOrder: lessonRow.lessonOrder,
    lessonId: meta.id,
    title: meta.title,
    questionPolicy: meta.questionPolicy ?? '-',
    hasQuestionCard: meta.hasQuestionCard,
    ptIds: meta.ptIds,
  });
}

const dedupedErrors = [...new Set(errors)];
const summary = {
  totalLessons: lessons.length,
  lessonsWithQuestionCards: lessons.filter((lesson) => lesson.hasQuestionCard).length,
  repositoryRequiredLessons: lessons.filter((lesson) => lesson.questionPolicy === 'repository_required').length,
  totalLinkedPtIds: ptIdToLesson.size,
  errors: dedupedErrors.length,
};

mkdirSync(AUDITS_DIR, { recursive: true });

const reviewedDate = new Date().toISOString().split('T')[0];
const report = [
  '# Lesson Question Linkage Audit',
  '',
  '**Purpose:** Verify that registered LR lessons declare an explicit question policy and that any linked cards resolve to module48 PT-backed IDs.  ',
  '**Audience:** Maintainers editing LR lessons, linkage helpers, or question-bank sources.  ',
  '**Status:** reference  ',
  '**Source of truth:** yes  ',
  `**Last reviewed:** ${reviewedDate}  `,
  '**Related docs:** [README.md](./README.md), [../../technical/content-and-validation.md](../../technical/content-and-validation.md), [question-usage-audit.md](./question-usage-audit.md)',
  '',
  '## Summary',
  `- totalLessons: ${summary.totalLessons}`,
  `- lessonsWithQuestionCards: ${summary.lessonsWithQuestionCards}`,
  `- repositoryRequiredLessons: ${summary.repositoryRequiredLessons}`,
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
console.log(`Repository-required lessons: ${summary.repositoryRequiredLessons}`);
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
