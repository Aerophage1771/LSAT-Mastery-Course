import type { ModuleMetadata } from '../modules/registry';
import type { Lesson, ModuleData } from '../types';
import catalogData from '../data/courseCatalog.json';

interface CourseCatalogModule {
  title: string;
  lessons: string[];
}

type CourseCatalog = Record<string, CourseCatalogModule>;

const courseCatalog = catalogData as CourseCatalog;

const ROUTE_TO_CONTENT_MODULE_ID: Record<number, number> = {
  21: 55,
  22: 59,
  23: 21,
  24: 22,
  25: 23,
  26: 24,
  27: 25,
  28: 26,
  29: 27,
  30: 28,
  31: 29,
  32: 30,
  33: 31,
  34: 32,
  35: 33,
  36: 34,
  37: 35,
  38: 36,
  39: 37,
  40: 38,
  41: 39,
  42: 40,
  43: 41,
  44: 42,
  45: 43,
  46: 44,
  47: 45,
  48: 46,
  49: 47,
  50: 50,
  51: 51,
  52: 52,
  53: 54,
  54: 56,
  55: 57,
  56: 58,
};

const CONTENT_TO_ROUTE_MODULE_ID = Object.fromEntries(
  Object.entries(ROUTE_TO_CONTENT_MODULE_ID).map(([routeId, contentId]) => [contentId, Number(routeId)]),
) as Record<number, number>;

const FILE_NAME_TO_SPECIAL_LESSON_ID: Record<string, string> = {
  'Lesson_Intro.tsx': 'intro',
  'Lesson_ConciseGuide.tsx': 'summary',
  'Lesson_ReferenceGuide.tsx': 'ref',
};

function getCatalogModule(routeModuleId: number): CourseCatalogModule | undefined {
  return courseCatalog[String(routeModuleId)];
}

function getFileName(filePath: string): string {
  const parts = filePath.split('/');
  return parts[parts.length - 1] ?? filePath;
}

export function getRouteModuleIdForContentModuleId(moduleId: number): number {
  return CONTENT_TO_ROUTE_MODULE_ID[moduleId] ?? moduleId;
}

export function getSourceModuleIdForRouteModuleId(routeModuleId: number): number {
  return ROUTE_TO_CONTENT_MODULE_ID[routeModuleId] ?? routeModuleId;
}

export function getCanonicalModuleTitle(routeModuleId: number, fallbackTitle: string): string {
  return getCatalogModule(routeModuleId)?.title ?? fallbackTitle;
}

export function getCanonicalLessonTitle(routeModuleId: number, lessonIndex: number, fallbackTitle: string): string {
  return getCatalogModule(routeModuleId)?.lessons[lessonIndex] ?? fallbackTitle;
}

export function getCanonicalLessonTitles(routeModuleId: number): string[] {
  return getCatalogModule(routeModuleId)?.lessons ?? [];
}

export function getCanonicalLessonCount(routeModuleId: number, fallbackCount: number): number {
  return getCatalogModule(routeModuleId)?.lessons.length ?? fallbackCount;
}

export function getCanonicalModuleMetadata(meta: ModuleMetadata): ModuleMetadata {
  return {
    ...meta,
    title: getCanonicalModuleTitle(meta.id, meta.title),
    lessonCount: getCanonicalLessonCount(meta.id, meta.lessonCount),
  };
}

export function applyCanonicalNamesToModule(moduleData: ModuleData, routeModuleId: number): ModuleData {
  const canonicalModuleTitle = getCanonicalModuleTitle(routeModuleId, moduleData.title);
  const lessons = moduleData.lessons.map((lesson, index) => ({
    ...lesson,
    title: getCanonicalLessonTitle(routeModuleId, index, lesson.title),
  }));

  return {
    ...moduleData,
    id: routeModuleId,
    title: canonicalModuleTitle,
    lessons,
  };
}

export interface CanonicalIllustrativeInventoryItem {
  routeModuleId: number;
  lessonId: string;
  moduleTitle: string;
  lessonTitle: string;
}

export function resolveIllustrativeLessonId(contentModuleId: number, filePath: string): string {
  const routeModuleId = getRouteModuleIdForContentModuleId(contentModuleId);
  const fileName = getFileName(filePath);

  const specialSuffix = FILE_NAME_TO_SPECIAL_LESSON_ID[fileName];
  if (specialSuffix) {
    return `${getSourceModuleIdForRouteModuleId(routeModuleId)}-${specialSuffix}`;
  }

  const lessonMatch = fileName.match(/Lesson(\d+)/);
  if (lessonMatch) {
    return `${getSourceModuleIdForRouteModuleId(routeModuleId)}-${lessonMatch[1]}`;
  }

  return `${getSourceModuleIdForRouteModuleId(routeModuleId)}-1`;
}

export function resolveIllustrativeInventoryItem(item: {
  module: number;
  file: string;
  moduleName: string;
  lessonTitle: string;
}): CanonicalIllustrativeInventoryItem {
  const routeModuleId = getRouteModuleIdForContentModuleId(item.module);
  const lessonId = resolveIllustrativeLessonId(item.module, item.file);
  const sourceModuleId = getSourceModuleIdForRouteModuleId(routeModuleId);
  const resolvedLessons = getCanonicalLessonTitles(routeModuleId);
  const lesson = resolvedLessons.find((_candidate, index) => {
    const expectedTitle = getCanonicalLessonTitle(routeModuleId, index, '');
    const expectedId = applyCanonicalLessonId(sourceModuleId, index);
    return expectedId === lessonId && expectedTitle.length > 0;
  });

  return {
    routeModuleId,
    lessonId,
    moduleTitle: getCanonicalModuleTitle(routeModuleId, item.moduleName),
    lessonTitle: lesson ?? item.lessonTitle,
  };
}

function applyCanonicalLessonId(sourceModuleId: number, lessonIndex: number): string {
  if (sourceModuleId === 55) {
    if (lessonIndex === 0) return '55-intro';
    if (lessonIndex === 7) return '55-summary';
    if (lessonIndex === 8) return '55-ref';
    return `55-${lessonIndex}`;
  }

  return `${sourceModuleId}-${lessonIndex + 1}`;
}

export function buildCanonicalDrillReference(
  routeModuleId: number,
  lesson: Lesson,
  lessonIndex: number,
): Pick<CanonicalIllustrativeInventoryItem, 'moduleTitle' | 'lessonTitle'> {
  return {
    moduleTitle: getCanonicalModuleTitle(routeModuleId, ''),
    lessonTitle: getCanonicalLessonTitle(routeModuleId, lessonIndex, lesson.title),
  };
}
