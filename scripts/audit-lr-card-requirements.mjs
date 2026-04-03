#!/usr/bin/env node

import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { LR_CONTENT_MODULE_IDS, parseLessonMeta, readRegisteredLessons } from './lib/registeredLessons.mjs';

const ROOT_DIR = join(import.meta.dirname, '..');
const AUDITS_DIR = join(ROOT_DIR, 'docs', 'operations', 'audits');
const REPORT_PATH = join(AUDITS_DIR, 'lr-card-requirements-audit.md');

const escapeMarkdownCell = (value) => value.replace(/\\/g, '\\\\').replace(/\|/g, '\\|');

function getAuditStatus(meta) {
  if (!meta.questionPolicy) return 'missing_policy';
  if (meta.questionPolicy === 'none' && meta.hasQuestionCard) return 'policy_mismatch_card_present';
  if (meta.questionPolicy === 'repository_required' && !meta.hasQuestionCard) return 'policy_mismatch_missing_card';
  if (meta.hasQuestionCard && meta.ptIds.length === 0) return 'card_missing_pt_id';
  return 'ok';
}

const rows = readRegisteredLessons({
  contentModuleIds: [...LR_CONTENT_MODULE_IDS].sort((a, b) => a - b),
})
  .map((lessonRow) => {
    const meta = parseLessonMeta(lessonRow.content, lessonRow.filePath);
    if (meta.errors.length > 0) {
      return {
        routeModuleId: lessonRow.routeModuleId,
        contentModuleId: lessonRow.contentModuleId,
        lessonOrder: lessonRow.lessonOrder,
        lessonId: 'parse-error',
        title: lessonRow.filePath,
        questionPolicy: '-',
        hasQuestionCard: false,
        cardIds: [],
        ptIds: [],
        auditStatus: 'parse_error',
      };
    }

    return {
      routeModuleId: lessonRow.routeModuleId,
      contentModuleId: lessonRow.contentModuleId,
      lessonOrder: lessonRow.lessonOrder,
      lessonId: meta.id,
      title: meta.title,
      questionPolicy: meta.questionPolicy ?? '-',
      hasQuestionCard: meta.hasQuestionCard,
      cardIds: meta.cardIds,
      ptIds: meta.ptIds,
      auditStatus: getAuditStatus(meta),
    };
  })
  .sort((a, b) => a.routeModuleId - b.routeModuleId || a.lessonOrder - b.lessonOrder);

const report = [
  '# LR Card Requirements Audit',
  '',
  '**Purpose:** Audit registered LR lessons against the explicit questionPolicy contract and actual PT-backed card linkage.  ',
  '**Audience:** Maintainers updating LR lesson structure, lesson policy, or question-bank linkage.  ',
  '**Status:** reference  ',
  '**Source of truth:** yes  ',
  `**Last reviewed:** ${new Date().toISOString().split('T')[0]}  `,
  '**Related docs:** [README.md](./README.md), [../../technical/architecture.md](../../technical/architecture.md), [../../technical/content-and-validation.md](../../technical/content-and-validation.md)',
  '',
  `Generated: ${new Date().toISOString()}`,
  '',
  '| route module id | content module id | lesson order | lesson id | title | question policy | has question card | question card IDs | PT IDs found | audit status |',
  '| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |',
  ...rows.map(
    (row) =>
      `| ${row.routeModuleId} | ${row.contentModuleId} | ${row.lessonOrder} | ${escapeMarkdownCell(row.lessonId)} | ${escapeMarkdownCell(row.title)} | ${escapeMarkdownCell(row.questionPolicy)} | ${
        row.hasQuestionCard ? 'yes' : 'no'
      } | ${escapeMarkdownCell(row.cardIds.join(', ') || '-')} | ${escapeMarkdownCell(row.ptIds.join(', ') || '-')} | ${row.auditStatus} |`,
  ),
  '',
].join('\n');

mkdirSync(AUDITS_DIR, { recursive: true });
writeFileSync(REPORT_PATH, `${report}\n`, 'utf-8');

console.log(`Wrote audit report: ${REPORT_PATH}`);
console.log(`Lessons audited: ${rows.length}`);
process.exit(0);
