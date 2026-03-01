import { describe, expect, it } from 'vitest';

import { Module55 } from '../modules/Module55';
import { Module59 } from '../modules/Module59';
import { Lesson3_Fallacies } from '../modules/module55/Lesson3_Fallacies';
import { Lesson4_Quantifiers } from '../modules/module55/Lesson4_Quantifiers';
import { Lesson5_ComplexStructures } from '../modules/module55/Lesson5_ComplexStructures';
import { Lesson6_Nuance } from '../modules/module55/Lesson6_Nuance';

const getQuestionIds = (lesson: { content: unknown }) => {
  if (!Array.isArray(lesson.content)) return [];
  return lesson.content
    .filter((block): block is { type: 'question-card'; id?: string } => (
      typeof block === 'object' &&
      block !== null &&
      'type' in block &&
      (block as { type?: string }).type === 'question-card'
    ))
    .map((block) => block.id)
    .filter((id): id is string => Boolean(id));
};

describe('Conditional reasoning integration', () => {
  it('keeps module numbering consistent for conditional reasoning and LSAT math', () => {
    expect(Module55.id).toBe(21);
    expect(Module59.id).toBe(22);
  });

  it('includes requested official PT drills in module 21 conditional lessons', () => {
    expect(getQuestionIds(Lesson3_Fallacies)).toContain('PT-103-S-3-Q-13');

    expect(getQuestionIds(Lesson4_Quantifiers)).toEqual(
      expect.arrayContaining(['PT-124-S-2-Q-25', 'PT-122-S-4-Q-24']),
    );

    expect(getQuestionIds(Lesson5_ComplexStructures)).toEqual(
      expect.arrayContaining(['PT-111-S-3-Q-18', 'PT-124-S-1-Q-7', 'PT-106-S-2-Q-6']),
    );

    expect(getQuestionIds(Lesson6_Nuance)).toContain('PT-103-S-3-Q-17');
  });
});
