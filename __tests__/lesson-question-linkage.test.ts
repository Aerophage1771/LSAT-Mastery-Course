import { describe, expect, it } from 'vitest';
import { getLessonLinkageStatus } from '../utils/lessonQuestionLinkage';
import type { Lesson } from '../types';

function lesson(overrides: Partial<Lesson> = {}): Lesson {
  return {
    id: '9-4',
    title: 'Drill Lesson',
    content: [],
    ...overrides,
  };
}

describe('lessonQuestionLinkage', () => {
  it('appends single PT ID once', () => {
    const linkage = getLessonLinkageStatus({
      moduleId: 9,
      lesson: lesson({
        content: [{ type: 'question-card', id: 'PT-112-S-4-Q-20', stimulus: 'S', question: 'Q', options: [] }],
      }),
    });

    expect(linkage.ptIds).toEqual(['PT-112-S-4-Q-20']);
    expect(linkage.displayTitle).toBe('Drill Lesson');
  });

  it('appends multiple PT IDs in order', () => {
    const linkage = getLessonLinkageStatus({
      moduleId: 9,
      lesson: lesson({
        content: [
          { type: 'question-card', id: 'PT-112-S-4-Q-20', stimulus: 'S', question: 'Q', options: [] },
          { type: 'question-passage-card', id: 'PT-111-S-3-Q-4', passageTitle: 'P', passage: 'T', question: 'Q', options: [] },
        ],
      }),
    });

    expect(linkage.ptIds).toEqual(['PT-112-S-4-Q-20', 'PT-111-S-3-Q-4']);
    expect(linkage.displayTitle).toBe('Drill Lesson');
  });

  it('marks missing question number when card exists without PT ID', () => {
    const linkage = getLessonLinkageStatus({
      moduleId: 9,
      lesson: lesson({
        content: [{ type: 'question-card', id: 'illustrative-9-4', stimulus: 'S', question: 'Q', options: [] }],
      }),
    });

    expect(linkage.status).toBe('missing_q_number');
    expect(linkage.displayTitle).toBe('Drill Lesson');
  });

  it('marks missing card for LR lesson 4+ with no question card', () => {
    const linkage = getLessonLinkageStatus({
      moduleId: 9,
      lesson: lesson({ id: '9-7', content: [{ type: 'paragraph', text: 'No card' }] }),
    });

    expect(linkage.status).toBe('missing_card');
    expect(linkage.displayTitle).toBe('Drill Lesson');
  });

  it('exempts LR lesson order 1 from missing warnings without rewriting title', () => {
    const linkage = getLessonLinkageStatus({
      moduleId: 9,
      lesson: lesson({
        id: '9-intro',
        title: 'Introduction to Strengthen',
        content: [{ type: 'question-card', id: 'illustrative-9-intro', stimulus: 'S', question: 'Q', options: [] }],
      }),
      lessonOrder: 1,
      moduleTitle: 'Strengthen',
    });

    expect(linkage.status).toBe('ok');
    expect(linkage.isExempt).toBe(true);
    expect(linkage.displayTitle).toBe('Introduction to Strengthen');
  });

  it('keeps canonical LR lesson order 2 title unchanged', () => {
    const linkage = getLessonLinkageStatus({
      moduleId: 9,
      lesson: lesson({ id: '9-2', title: 'Step-by-Step Guide: Strengthen' }),
      lessonOrder: 2,
      moduleTitle: 'Strengthen',
    });

    expect(linkage.status).toBe('ok');
    expect(linkage.isExempt).toBe(true);
    expect(linkage.displayTitle).toBe('Step-by-Step Guide: Strengthen');
  });

  it('exempts allowlisted advanced lessons without rewriting canonical titles', () => {
    const allowlistCases = [
      { id: '1-7', moduleId: 1, moduleTitle: 'Argument Part', lessonTitle: 'Traits of High-Difficulty: Argument Part' },
      { id: '2-7', moduleId: 2, moduleTitle: 'Main Conclusion', lessonTitle: 'Traits of High-Difficulty: Main Conclusion' },
      { id: '3-8', moduleId: 3, moduleTitle: 'Method of Reasoning', lessonTitle: 'Traits of High-Difficulty: Method of Reasoning' },
      { id: '4-8', moduleId: 4, moduleTitle: 'Parallel Reasoning', lessonTitle: 'Traits of High-Difficulty: Parallel Reasoning' },
      { id: '5-8', moduleId: 5, moduleTitle: 'Flaw', lessonTitle: 'Traits of High-Difficulty: Flaw' },
      { id: '6-6', moduleId: 6, moduleTitle: 'Parallel Flaw', lessonTitle: 'Traits of High-Difficulty: Parallel Flaw' },
      { id: '7-9', moduleId: 7, moduleTitle: 'Evaluate the Argument', lessonTitle: 'Traits of High-Difficulty: Evaluate the Argument' },
      { id: '8-6', moduleId: 8, moduleTitle: 'Weaken', lessonTitle: 'Traits of High-Difficulty: Weaken' },
      { id: '9-6', moduleId: 9, moduleTitle: 'Strengthen', lessonTitle: 'Traits of High-Difficulty: Strengthen' },
      { id: '16-6', moduleId: 16, moduleTitle: 'Most Strongly Supported', lessonTitle: 'Traits of High-Difficulty: Most Strongly Supported' },
      { id: '17-6', moduleId: 17, moduleTitle: 'Must Be True', lessonTitle: 'Traits of High-Difficulty: Must Be True' },
      { id: '18-7', moduleId: 18, moduleTitle: 'Must Be False', lessonTitle: 'Traits of High-Difficulty: Must Be False' },
      { id: '19-6', moduleId: 19, moduleTitle: 'Explain / Resolve', lessonTitle: 'Traits of High-Difficulty: Explain / Resolve' },
      { id: '20-6', moduleId: 20, moduleTitle: 'Point at Issue', lessonTitle: 'Traits of High-Difficulty: Point at Issue' },
    ];

    for (const allowlistCase of allowlistCases) {
      const linkage = getLessonLinkageStatus({
        moduleId: allowlistCase.moduleId,
        moduleTitle: allowlistCase.moduleTitle,
        lesson: lesson({
          id: allowlistCase.id,
          title: allowlistCase.lessonTitle,
          content: [{ type: 'paragraph', text: 'No card by design' }],
        }),
      });

      expect(linkage.status).toBe('ok');
      expect(linkage.isExempt).toBe(true);
      expect(linkage.displayTitle).toBe(allowlistCase.lessonTitle);
    }
  });

  it('does not exempt non-allowlisted advanced lessons', () => {
    const linkage = getLessonLinkageStatus({
      moduleId: 9,
      moduleTitle: 'Strengthen',
      lesson: lesson({
        id: '9-7',
        title: 'Advanced Concepts',
        content: [{ type: 'paragraph', text: 'No card' }],
      }),
    });

    expect(linkage.status).toBe('missing_card');
    expect(linkage.isExempt).toBe(false);
    expect(linkage.displayTitle).toBe('Advanced Concepts');
  });

  it('exempts reference lessons from missing-card only', () => {
    const linkage = getLessonLinkageStatus({
      moduleId: 9,
      moduleTitle: 'Strengthen',
      lesson: lesson({
        id: '9-13',
        title: 'Reference Guide',
        content: [{ type: 'paragraph', text: 'Reference content, no card' }],
      }),
    });

    expect(linkage.status).toBe('ok');
    expect(linkage.missingQuestionCard).toBe(false);
    expect(linkage.isExempt).toBe(false);
    expect(linkage.displayTitle).toBe('Reference Guide');
  });

  it('still flags missing question number for reference lesson cards with no PT id', () => {
    const linkage = getLessonLinkageStatus({
      moduleId: 9,
      moduleTitle: 'Strengthen',
      lesson: lesson({
        id: '9-13',
        title: 'Reference Guide',
        content: [{ type: 'question-card', id: 'illustrative-reference', stimulus: 'S', question: 'Q', options: [] }],
      }),
    });

    expect(linkage.status).toBe('missing_q_number');
    expect(linkage.missingQuestionNumber).toBe(true);
    expect(linkage.displayTitle).toBe('Reference Guide');
  });
});
