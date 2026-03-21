import type { ContentBlock, LessonQuestionPolicy } from '../types';

export interface ExportScopeSummary {
  selectedModuleIds: number[];
  selectedLessonCount: number;
}

export interface CanonicalCourseLesson {
  lessonId: string;
  order: number;
  title: string;
  routePath: string;
  bodyKind: 'markdown' | 'blocks';
  content: string | ContentBlock[];
  questionPolicy?: LessonQuestionPolicy;
}

export interface CanonicalCourseModule {
  routeModuleId: number;
  sourceModuleId: number;
  title: string;
  category: string;
  unit: string;
  description: string;
  lessons: CanonicalCourseLesson[];
}

export interface CanonicalCoursePayload {
  exportVersion: '1.0';
  exportType: 'canonical-course';
  generatedAt: string;
  scope: ExportScopeSummary;
  modules: CanonicalCourseModule[];
}

export interface InterchangeCourseMaterial {
  id: string;
  title: string;
  type: 'text' | 'question_ref' | 'link';
  content: string;
}

export interface InterchangeCourseLesson {
  id: string;
  title: string;
  content: string;
  materials: InterchangeCourseMaterial[];
}

export interface InterchangeCourseModule {
  id: string;
  title: string;
  description: string;
  lessons: InterchangeCourseLesson[];
}

export type InterchangeCourse = InterchangeCourseModule[];

const QUESTION_POLICY_VALUES = new Set<LessonQuestionPolicy>(['none', 'repository_required']);
const MATERIAL_TYPES = new Set<InterchangeCourseMaterial['type']>(['text', 'question_ref', 'link']);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function hasStringField(value: Record<string, unknown>, field: string): value is Record<string, string> {
  return typeof value[field] === 'string';
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

function isStringMatrix(value: unknown): value is string[][] {
  return Array.isArray(value) && value.every((row) => isStringArray(row));
}

function isBadgeColor(value: unknown): value is 'green' | 'red' | 'indigo' | 'slate' | 'blue' {
  return value === 'green' || value === 'red' || value === 'indigo' || value === 'slate' || value === 'blue';
}

function isCalloutVariant(value: unknown): value is 'default' | 'summary' | 'tip' {
  return value === 'default' || value === 'summary' || value === 'tip';
}

function isQuestionPolicy(value: unknown): value is LessonQuestionPolicy {
  return typeof value === 'string' && QUESTION_POLICY_VALUES.has(value as LessonQuestionPolicy);
}

function isContentBlockArray(value: unknown): value is ContentBlock[] {
  return Array.isArray(value) && value.every(isContentBlock);
}

export function isContentBlock(value: unknown): value is ContentBlock {
  if (!isRecord(value) || typeof value.type !== 'string') return false;

  switch (value.type) {
    case 'paragraph':
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'blockquote':
    case 'code':
      return hasStringField(value, 'text');
    case 'hr':
      return true;
    case 'list':
      return isStringArray(value.items) && (value.ordered === undefined || typeof value.ordered === 'boolean');
    case 'callout':
      return (
        hasStringField(value, 'text')
        && (value.title === undefined || typeof value.title === 'string')
        && (value.variant === undefined || isCalloutVariant(value.variant))
      );
    case 'options':
      return isStringArray(value.items);
    case 'process':
      return isStringArray(value.steps) && (value.title === undefined || typeof value.title === 'string');
    case 'accordion':
      return hasStringField(value, 'title')
        && (typeof value.content === 'string' || isContentBlockArray(value.content));
    case 'table':
      return isStringArray(value.headers) && isStringMatrix(value.rows);
    case 'breakdown':
      return (
        (value.labels === undefined
          || (
            isRecord(value.labels)
            && (value.labels.title === undefined || typeof value.labels.title === 'string')
            && (value.labels.text === undefined || typeof value.labels.text === 'string')
          ))
        && (value.colWidth === undefined || value.colWidth === 'equal' || value.colWidth === 'narrow')
        && Array.isArray(value.items)
        && value.items.every((item) =>
          isRecord(item)
          && hasStringField(item, 'title')
          && hasStringField(item, 'text')
          && (item.badge === undefined || typeof item.badge === 'string')
          && (item.badgeColor === undefined || isBadgeColor(item.badgeColor)),
        )
      );
    case 'question-card':
      return (
        hasStringField(value, 'stimulus')
        && hasStringField(value, 'question')
        && isStringArray(value.options)
        && (value.id === undefined || typeof value.id === 'string')
        && (value.questionType === undefined || typeof value.questionType === 'string')
        && (value.difficulty === undefined || value.difficulty === 'easy' || value.difficulty === 'medium' || value.difficulty === 'hard')
        && (value.isIllustrative === undefined || typeof value.isIllustrative === 'boolean')
      );
    case 'passage-card':
      return (
        hasStringField(value, 'title')
        && hasStringField(value, 'passage')
        && (value.id === undefined || typeof value.id === 'string')
        && (value.genre === undefined || typeof value.genre === 'string')
        && (value.paragraphCount === undefined || typeof value.paragraphCount === 'number')
        && (value.wordCount === undefined || typeof value.wordCount === 'number')
      );
    case 'question-passage-card':
      return (
        hasStringField(value, 'passageTitle')
        && hasStringField(value, 'passage')
        && hasStringField(value, 'question')
        && isStringArray(value.options)
        && (value.id === undefined || typeof value.id === 'string')
        && (value.questionType === undefined || typeof value.questionType === 'string')
        && (value.difficulty === undefined || value.difficulty === 'easy' || value.difficulty === 'medium' || value.difficulty === 'hard')
        && (value.isIllustrative === undefined || typeof value.isIllustrative === 'boolean')
      );
    default:
      return false;
  }
}

function isExportScopeSummary(value: unknown): value is ExportScopeSummary {
  return (
    isRecord(value)
    && Array.isArray(value.selectedModuleIds)
    && value.selectedModuleIds.every((item) => typeof item === 'number')
    && typeof value.selectedLessonCount === 'number'
  );
}

function isCanonicalCourseLesson(value: unknown): value is CanonicalCourseLesson {
  return (
    isRecord(value)
    && typeof value.lessonId === 'string'
    && typeof value.order === 'number'
    && typeof value.title === 'string'
    && typeof value.routePath === 'string'
    && (value.bodyKind === 'markdown' || value.bodyKind === 'blocks')
    && (typeof value.content === 'string' || isContentBlockArray(value.content))
    && (value.questionPolicy === undefined || isQuestionPolicy(value.questionPolicy))
  );
}

function isCanonicalCourseModule(value: unknown): value is CanonicalCourseModule {
  return (
    isRecord(value)
    && typeof value.routeModuleId === 'number'
    && typeof value.sourceModuleId === 'number'
    && typeof value.title === 'string'
    && typeof value.category === 'string'
    && typeof value.unit === 'string'
    && typeof value.description === 'string'
    && Array.isArray(value.lessons)
    && value.lessons.every(isCanonicalCourseLesson)
  );
}

export function isCanonicalCoursePayload(value: unknown): value is CanonicalCoursePayload {
  return (
    isRecord(value)
    && value.exportVersion === '1.0'
    && value.exportType === 'canonical-course'
    && typeof value.generatedAt === 'string'
    && isExportScopeSummary(value.scope)
    && Array.isArray(value.modules)
    && value.modules.every(isCanonicalCourseModule)
  );
}

function isInterchangeCourseMaterial(value: unknown): value is InterchangeCourseMaterial {
  return (
    isRecord(value)
    && typeof value.id === 'string'
    && typeof value.title === 'string'
    && typeof value.type === 'string'
    && MATERIAL_TYPES.has(value.type as InterchangeCourseMaterial['type'])
    && typeof value.content === 'string'
  );
}

function isInterchangeCourseLesson(value: unknown): value is InterchangeCourseLesson {
  return (
    isRecord(value)
    && typeof value.id === 'string'
    && typeof value.title === 'string'
    && typeof value.content === 'string'
    && Array.isArray(value.materials)
    && value.materials.every(isInterchangeCourseMaterial)
  );
}

function isInterchangeCourseModule(value: unknown): value is InterchangeCourseModule {
  return (
    isRecord(value)
    && typeof value.id === 'string'
    && typeof value.title === 'string'
    && typeof value.description === 'string'
    && Array.isArray(value.lessons)
    && value.lessons.every(isInterchangeCourseLesson)
  );
}

export function isInterchangeCourse(value: unknown): value is InterchangeCourse {
  return Array.isArray(value) && value.every(isInterchangeCourseModule);
}
