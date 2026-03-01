#!/usr/bin/env node

import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const ROOT_DIR = join(import.meta.dirname, '..');
const MODULES_DIR = join(ROOT_DIR, 'modules');
const DOCS_DIR = join(ROOT_DIR, 'docs');
const REPORT_PATH = join(DOCS_DIR, 'lr-card-requirements-audit.md');
const REGISTRY_PATH = join(MODULES_DIR, 'registry.ts');
const PT_ID_REGEX = /PT-\d+-S-\d+-Q-\d+/g;
const LEGACY_ROUTE_ALIASES = { 55: 21, 59: 22 };
const LR_CONTENT_MODULE_IDS = new Set([...Array.from({ length: 20 }, (_, index) => index + 1), 55, 59]);

const getRouteModuleId = (contentModuleId) => LEGACY_ROUTE_ALIASES[contentModuleId] ?? contentModuleId;
const getLessonNumber = (lessonId) => {
  const match = lessonId.match(/-(\d+)$/);
  return match ? Number(match[1]) : null;
};

const registryContent = readFileSync(REGISTRY_PATH, 'utf-8');
const moduleTitleByRouteId = Object.fromEntries(
  Array.from(registryContent.matchAll(/id:\s*(\d+),\s*title:\s*'([^']+)'/g), (match) => [Number(match[1]), match[2]]),
);

const parseLessonMeta = (content, filePath) => {
  const lessonMatch = content.match(
    /export const\s+\w+\s*:\s*Lesson\s*=\s*\{[\s\S]*?id:\s*['"]([^'"]+)['"][\s\S]*?title:\s*['"]([^'"]+)['"]/,
  );
  if (!lessonMatch) {
    return null;
  }

  const cardIds = Array.from(content.matchAll(/type:\s*'question(?:-passage)?-card'[\s\S]*?id:\s*['"]([^'"]+)['"]/g), (match) => match[1]);
  return {
    filePath,
    lessonId: lessonMatch[1],
    title: lessonMatch[2],
    cardIds,
    ptIds: [...new Set(cardIds.flatMap((id) => id.match(PT_ID_REGEX) ?? []))],
  };
};

const normalizeTitle = ({ routeModuleId, lessonOrder, title, ptIds }) => {
  const moduleTitle = moduleTitleByRouteId[routeModuleId] ?? `Module ${routeModuleId}`;
  if (lessonOrder === 1) return `Introduction to ${moduleTitle}`;
  if (lessonOrder === 2) return `Step-by-Step Guide: ${moduleTitle}`;
  if (ptIds.length === 0) return title;
  const ptSuffix = `(${ptIds.join(', ')})`;
  const hasAllPtIds = ptIds.every((ptId) => new RegExp(`\\b${ptId}\\b`).test(title));
  return hasAllPtIds ? title : `${title} ${ptSuffix}`;
};
const escapeMarkdownCell = (value) => value.replace(/\\/g, '\\\\').replace(/\|/g, '\\|');

const rows = [];

const extractOrderedLessonFiles = (contentModuleId) => {
  const moduleFilePath = join(MODULES_DIR, `Module${contentModuleId}.tsx`);
  const moduleContent = readFileSync(moduleFilePath, 'utf-8');
  const importMap = new Map(
    Array.from(moduleContent.matchAll(/import\s*\{\s*([^}]+)\s*\}\s*from\s*['"]([^'"]+)['"]/g), (match) => [
      match[1].trim(),
      match[2],
    ]),
  );
  const lessonsMatch = moduleContent.match(/lessons:\s*\[([\s\S]*?)\]/);
  if (!lessonsMatch) return [];

  const lessonVars = lessonsMatch[1].match(/[A-Za-z_][A-Za-z0-9_]*/g) ?? [];

  return lessonVars
    .map((lessonVar) => {
      const importPath = importMap.get(lessonVar);
      if (!importPath) {
        console.warn(`Skipping unresolved lesson import "${lessonVar}" in Module${contentModuleId}.tsx`);
        return null;
      }
      return join(MODULES_DIR, importPath.replace('./', '') + '.tsx');
    })
    .filter(Boolean);
};

for (const moduleDir of readdirSync(MODULES_DIR)) {
  const moduleMatch = moduleDir.match(/^module(\d+)$/);
  if (!moduleMatch) continue;
  const contentModuleId = Number(moduleMatch[1]);
  if (!LR_CONTENT_MODULE_IDS.has(contentModuleId)) continue;
  const routeModuleId = getRouteModuleId(contentModuleId);

  const lessonFiles = extractOrderedLessonFiles(contentModuleId)
    .map((fullPath) => parseLessonMeta(readFileSync(fullPath, 'utf-8'), fullPath))
    .filter(Boolean);

  lessonFiles.forEach((lesson, index) => {
    const lessonOrder = index + 1;
    const hasQuestionCard = lesson.cardIds.length > 0;
    const classification =
      lessonOrder === 1
        ? 'intro_exempt'
        : lessonOrder === 2
          ? 'step_by_step_exempt'
          : hasQuestionCard
            ? 'card_present'
            : 'no_card_unclassified';

    rows.push({
      routeModuleId,
      contentModuleId,
      lessonOrder,
      lessonId: lesson.lessonId,
      normalizedTitle: normalizeTitle({
        routeModuleId,
        lessonOrder,
        title: lesson.title,
        ptIds: lesson.ptIds,
      }),
      hasQuestionCard,
      cardIds: lesson.cardIds,
      ptIds: lesson.ptIds,
      classification,
    });
  });
}

rows.sort((a, b) => a.routeModuleId - b.routeModuleId || a.lessonOrder - b.lessonOrder);

const report = [
  '# LR Card Requirements Audit (Audit-Only)',
  '',
  `Generated: ${new Date().toISOString()}`,
  '',
  '| route module id | content module id | lesson order | lesson id | normalized title | has question card | question card IDs | PT IDs found | classification |',
  '| --- | --- | --- | --- | --- | --- | --- | --- | --- |',
  ...rows.map((row) =>
    `| ${row.routeModuleId} | ${row.contentModuleId} | ${row.lessonOrder} | ${escapeMarkdownCell(row.lessonId)} | ${escapeMarkdownCell(row.normalizedTitle)} | ${
      row.hasQuestionCard ? 'yes' : 'no'
    } | ${escapeMarkdownCell(row.cardIds.join(', ') || '-')} | ${escapeMarkdownCell(row.ptIds.join(', ') || '-')} | ${row.classification} |`,
  ),
  '',
].join('\n');

mkdirSync(DOCS_DIR, { recursive: true });
writeFileSync(REPORT_PATH, `${report}\n`, 'utf-8');

console.log(`Wrote audit report: ${REPORT_PATH}`);
console.log(`Lessons audited: ${rows.length}`);
process.exit(0);
