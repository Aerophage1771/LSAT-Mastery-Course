import type { ContentBlock, DrillReference, Lesson, LessonLinkageMeta, LessonLinkageStatus, ModuleData } from '../types';

const PT_ID_REGEX = /PT-\d+-S-\d+-Q-\d+/g;
const LEGACY_ROUTE_ALIASES: Record<number, number> = {
  55: 21,
  59: 22,
};

export function getRouteModuleId(moduleId: number): number {
  return LEGACY_ROUTE_ALIASES[moduleId] ?? moduleId;
}

export function extractQuestionCardIds(content: Lesson['content']): string[] {
  if (typeof content === 'string') return [];
  return content
    .filter(
      (block): block is Extract<ContentBlock, { type: 'question-card' | 'question-passage-card' }> =>
        (block.type === 'question-card' || block.type === 'question-passage-card') && typeof block.id === 'string',
    )
    .map((block) => block.id as string);
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

export function getLessonLinkageStatus({
  moduleId,
  lesson,
}: {
  moduleId: number;
  lesson: Lesson;
}): LessonLinkageStatusDetails {
  const routeModuleId = getRouteModuleId(moduleId);
  const lessonNumber = getLessonNumber(lesson.id);
  const hasQuestionCard = extractQuestionCardIds(lesson.content).length > 0;
  const ptIds = extractPtIds(extractQuestionCardIds(lesson.content));
  const missingQuestionNumber = hasQuestionCard && ptIds.length === 0;
  const missingQuestionCard = routeModuleId >= 1 && routeModuleId <= 22 && lessonNumber !== null && lessonNumber >= 4 && !hasQuestionCard;

  let status: LessonLinkageStatus = 'ok';
  let statusLabel: LessonLinkageMeta['statusLabel'];
  if (missingQuestionCard) {
    status = 'missing_card';
    statusLabel = 'Missing Card';
  } else if (missingQuestionNumber) {
    status = 'missing_q_number';
    statusLabel = 'Missing Q#';
  }

  let displayTitle = lesson.title;
  if (ptIds.length > 0) {
    const ptSuffix = `(${ptIds.join(', ')})`;
    const hasAllPtIds = ptIds.every((ptId) => new RegExp(`\\b${ptId}\\b`).test(displayTitle));
    if (!hasAllPtIds) displayTitle = `${displayTitle} ${ptSuffix}`;
  }
  if (missingQuestionNumber && !displayTitle.includes('[Missing Q#]')) {
    displayTitle = `${displayTitle} [Missing Q#]`;
  }
  if (missingQuestionCard && !displayTitle.includes('[Missing Card]')) {
    displayTitle = `${displayTitle} [Missing Card]`;
  }

  return {
    ptIds,
    status,
    displayTitle,
    statusLabel,
    hasQuestionCard,
    missingQuestionNumber,
    missingQuestionCard,
  };
}

export function buildLessonLinkageByLessonId(moduleId: number, lessons: Lesson[]): Record<string, LessonLinkageStatusDetails> {
  return Object.fromEntries(lessons.map((lesson) => [lesson.id, getLessonLinkageStatus({ moduleId, lesson })]));
}

export function normalizeLessonsWithLinkage(moduleId: number, lessons: Lesson[]): {
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
    for (const lesson of moduleData.lessons) {
      const linkage = linkageByLessonId[lesson.id];
      for (const ptId of linkage.ptIds) {
        if (!references[ptId]) {
          references[ptId] = {
            moduleId: routeModuleId,
            lessonId: lesson.id,
            moduleTitle: moduleData.title,
            lessonTitle: linkage.displayTitle,
          };
        }
      }
    }
  }

  return references;
}
