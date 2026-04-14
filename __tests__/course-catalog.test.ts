import { describe, expect, it } from 'vitest';
import {
  applyCanonicalNamesToModule,
  getCanonicalModuleMetadata,
  getDisplayModuleId,
  getRouteModuleIdForContentModuleId,
  resolveIllustrativeInventoryItem,
} from '../utils/courseCatalog';
import type { ModuleData } from '../types';

describe('courseCatalog', () => {
  it('overrides module metadata and lesson count with canonical catalog values', () => {
    const meta = getCanonicalModuleMetadata({
      id: 49,
      title: 'Placeholder Title',
      category: 'RC',
      description: 'desc',
      unit: 'Unit 15: Reference',
      lessonCount: 99,
    });

    expect(meta.title).toBe('RC Quick Reference Guide');
    expect(meta.lessonCount).toBe(1);
  });

  it('applies canonical lesson titles to alias-backed route modules', () => {
    const moduleData: ModuleData = {
      id: 55,
      title: 'Conditional Reasoning',
      category: 'LR',
      description: 'desc',
      unit: 'Unit 8: Conditional Reasoning',
      lessons: [
        { id: '55-intro', title: 'Module Introduction: The Logic of Conditional Reasoning', content: [] },
        { id: '55-1', title: 'The Foundations of the Material Conditional', content: [] },
      ],
    };

    const resolved = applyCanonicalNamesToModule(moduleData, 21);

    expect(resolved.title).toBe('Conditional Reasoning');
    expect(resolved.lessons[0]?.title).toBe('Introduction to Conditional Reasoning');
    expect(resolved.lessons[1]?.title).toBe('Lesson 1: Foundations of the Material Conditional');
  });

  it('maps illustrative inventory alias modules to canonical route ids and titles', () => {
    const resolved = resolveIllustrativeInventoryItem({
      module: 55,
      moduleName: 'Conditional Reasoning',
      file: 'module55/Lesson_Intro.tsx',
      lessonTitle: 'Module Introduction: The Logic of Conditional Reasoning',
    });

    expect(resolved.routeModuleId).toBe(21);
    expect(resolved.lessonId).toBe('55-intro');
    expect(resolved.moduleTitle).toBe('Conditional Reasoning');
    expect(resolved.lessonTitle).toBe('Introduction to Conditional Reasoning');
  });

  it('uses numeric display ids for the current route map', () => {
    expect(getRouteModuleIdForContentModuleId(55)).toBe(21);
    expect(getDisplayModuleId(10)).toBe('10');
    expect(getDisplayModuleId(57)).toBe('57');
  });
});
