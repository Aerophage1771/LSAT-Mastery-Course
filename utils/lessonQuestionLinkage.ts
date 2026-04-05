import type {
  ContentBlock,
  DrillReference,
  Lesson,
  LessonLinkageMeta,
  LessonLinkageStatus,
  LessonQuestionPolicy,
  ModuleData,
} from '../types';
import { buildCanonicalDrillReference, getRouteModuleIdForContentModuleId } from './courseCatalog';

const PT_ID_REGEX = /PT-\d+-S-\d+-Q-\d+/g;

export function getRouteModuleId(moduleId: number): number {
  return getRouteModuleIdForContentModuleId(moduleId);
}

function extractQuestionCardIdsFromBlocks(blocks: ContentBlock[]): string[] {
  const ids: string[] = [];

  for (const block of blocks) {
    if ((block.type === 'question-card' || block.type === 'question-passage-card') && typeof block.id === 'string') {
      ids.push(block.id);
      continue;
    }

    if (block.type === 'accordion' && Array.isArray(block.content)) {
      ids.push(...extractQuestionCardIdsFromBlocks(block.content));
    }
  }

  return ids;
}

export function extractQuestionCardIds(content: Lesson['content']): string[] {
  if (typeof content === 'string') return [];
  return extractQuestionCardIdsFromBlocks(content);
}

export function extractPtIds(ids: string[]): string[] {
  const seen = new Set<string>();
  for (const id of ids) {
    const matches = id.match(PT_ID_REGEX) ?? [];
    for (const match of matches) {
      seen.add(match);
    }
  }
  return Array.from(seen);
}

export function getLessonNumber(lessonId: string): number | null {
  const match = lessonId.match(/-(\d+)$/);
  return match ? Number(match[1]) : null;
}

export interface LessonLinkageStatusDetails extends LessonLinkageMeta {
  hasQuestionCard: boolean;
  missingQuestionNumber: boolean;
  missingQuestionCard: boolean;
}

function resolveQuestionPolicy(routeModuleId: number, lesson: Lesson): LessonQuestionPolicy | undefined {
  const isLrRouteModule = routeModuleId >= 1 && routeModuleId <= 22;
  if (!isLrRouteModule) return undefined;
  return lesson.questionPolicy ?? 'none';
}

export function getLessonLinkageStatus({
  moduleId,
  lesson,
}: {
  moduleId: number;
  lesson: Lesson;
}): LessonLinkageStatusDetails {
  const routeModuleId = getRouteModuleId(moduleId);
  const hasQuestionCard = extractQuestionCardIds(lesson.content).length > 0;
  const ptIds = extractPtIds(extractQuestionCardIds(lesson.content));
  const questionPolicy = resolveQuestionPolicy(routeModuleId, lesson);
  const missingQuestionNumber = hasQuestionCard && ptIds.length === 0;
  const missingQuestionCard = questionPolicy === 'repository_required' && !hasQuestionCard;

  let status: LessonLinkageStatus = 'ok';
  let statusLabel: LessonLinkageMeta['statusLabel'];
  if (missingQuestionCard) {
    status = 'missing_card';
    statusLabel = 'Missing Card';
  } else if (missingQuestionNumber) {
    status = 'missing_q_number';
    statusLabel = 'Missing Q#';
  }

  const displayTitle = lesson.title;

  return {
    ptIds,
    status,
    displayTitle,
    questionPolicy,
    statusLabel,
    hasQuestionCard,
    missingQuestionNumber,
    missingQuestionCard,
  };
}

export function buildLessonLinkageByLessonId(
  moduleId: number,
  lessons: Lesson[],
): Record<string, LessonLinkageStatusDetails> {
  return Object.fromEntries(lessons.map((lesson) => [lesson.id, getLessonLinkageStatus({ moduleId, lesson })]));
}

export function normalizeLessonsWithLinkage(
  moduleId: number,
  lessons: Lesson[],
): {
  lessons: Lesson[];
  linkageByLessonId: Record<string, LessonLinkageStatusDetails>;
} {
  const linkageByLessonId = buildLessonLinkageByLessonId(moduleId, lessons);
  return {
    linkageByLessonId,
    lessons: lessons.map((lesson) => ({
      ...lesson,
      title: linkageByLessonId[lesson.id]?.displayTitle ?? lesson.title,
    })),
  };
}

export function buildDrillCrossReferences(modules: ModuleData[]): Record<string, DrillReference> {
  const references: Record<string, DrillReference> = {};

  for (const moduleData of modules) {
    const routeModuleId = getRouteModuleId(moduleData.id);
    if (routeModuleId < 1 || routeModuleId > 22) continue;

    const linkageByLessonId = buildLessonLinkageByLessonId(routeModuleId, moduleData.lessons);
    for (const [lessonIndex, lesson] of moduleData.lessons.entries()) {
      const linkage = linkageByLessonId[lesson.id];
      const canonicalReference = buildCanonicalDrillReference(routeModuleId, lesson, lessonIndex);
      for (const ptId of linkage.ptIds) {
        if (!references[ptId]) {
          references[ptId] = {
            moduleId: routeModuleId,
            lessonId: lesson.id,
            moduleTitle: canonicalReference.moduleTitle || moduleData.title,
            lessonTitle: canonicalReference.lessonTitle,
          };
        }
      }
    }
  }

  return references;
}
