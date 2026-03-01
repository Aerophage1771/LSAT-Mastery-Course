import type { ContentBlock, DrillReference, Lesson, LessonLinkageMeta, LessonLinkageStatus, ModuleData } from '../types';

const PT_ID_REGEX = /PT-\d+-S-\d+-Q-\d+/g;
const LEGACY_ROUTE_ALIASES: Record<number, number> = {
  55: 21,
  59: 22,
};
const ADVANCED_EXEMPT_LESSON_IDS = new Set<string>([
  '1-7',
  '2-7',
  '3-8',
  '4-8',
  '5-8',
  '6-6',
  '7-9',
  '8-6',
  '9-6',
  '16-6',
  '17-6',
  '18-7',
  '19-6',
  '20-6',
]);
const REFERENCE_MISSING_CARD_EXEMPT_LESSON_IDS = new Set<string>([
  '1-12',
  '2-11',
  '3-12',
  '4-12',
  '5-12',
  '6-10',
  '7-11',
  '8-11',
  '9-13',
  '10-12',
  '11-14',
  '12-7',
  '13-7',
  '14-7',
  '15-8',
  '16-11',
  '17-11',
  '18-8',
  '19-10',
  '20-10',
  '59-7',
  '55-ref',
]);

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
  lessonOrder,
  moduleTitle,
}: {
  moduleId: number;
  lesson: Lesson;
  lessonOrder?: number;
  moduleTitle?: string;
}): LessonLinkageStatusDetails {
  const routeModuleId = getRouteModuleId(moduleId);
  const lessonNumber = getLessonNumber(lesson.id);
  const resolvedLessonOrder = lessonOrder ?? lessonNumber ?? 1;
  const hasQuestionCard = extractQuestionCardIds(lesson.content).length > 0;
  const ptIds = extractPtIds(extractQuestionCardIds(lesson.content));
  const isLrRouteModule = routeModuleId >= 1 && routeModuleId <= 22;
  const isIntroOrStepByStepExempt = isLrRouteModule && (resolvedLessonOrder === 1 || resolvedLessonOrder === 2);
  const isAdvancedAllowlistedExempt = ADVANCED_EXEMPT_LESSON_IDS.has(lesson.id);
  const isFullExempt = isIntroOrStepByStepExempt || isAdvancedAllowlistedExempt;
  const isMissingCardExempt = isFullExempt || REFERENCE_MISSING_CARD_EXEMPT_LESSON_IDS.has(lesson.id);
  let exemptionReason: string | undefined;
  if (isIntroOrStepByStepExempt) {
    exemptionReason = resolvedLessonOrder === 1 ? 'LR intro exemption' : 'LR step-by-step exemption';
  } else if (isAdvancedAllowlistedExempt) {
    exemptionReason = 'Advanced lesson allowlist exemption';
  }
  const missingQuestionNumber = hasQuestionCard && ptIds.length === 0 && !isFullExempt;
  const missingQuestionCard = isLrRouteModule && lessonNumber !== null && lessonNumber >= 4 && !hasQuestionCard && !isMissingCardExempt;

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
  if (isLrRouteModule && moduleTitle) {
    if (resolvedLessonOrder === 1) displayTitle = `Introduction to ${moduleTitle}`;
    if (resolvedLessonOrder === 2) displayTitle = `Step-by-Step Guide: ${moduleTitle}`;
  }
  if (isAdvancedAllowlistedExempt && moduleTitle) {
    displayTitle = `Traits of High-Difficulty: ${moduleTitle}`;
  }
  if (!isFullExempt && ptIds.length > 0) {
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
    isExempt: isFullExempt,
    exemptionReason,
  };
}

export function buildLessonLinkageByLessonId(
  moduleId: number,
  lessons: Lesson[],
  moduleTitle?: string,
): Record<string, LessonLinkageStatusDetails> {
  return Object.fromEntries(
    lessons.map((lesson, index) => [lesson.id, getLessonLinkageStatus({ moduleId, lesson, lessonOrder: index + 1, moduleTitle })]),
  );
}

export function normalizeLessonsWithLinkage(moduleId: number, lessons: Lesson[], moduleTitle?: string): {
  lessons: Lesson[];
  linkageByLessonId: Record<string, LessonLinkageStatusDetails>;
} {
  const linkageByLessonId = buildLessonLinkageByLessonId(moduleId, lessons, moduleTitle);
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

    const linkageByLessonId = buildLessonLinkageByLessonId(routeModuleId, moduleData.lessons, moduleData.title);
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
