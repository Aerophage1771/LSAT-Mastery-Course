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
    expect(linkage.displayTitle).toBe('Drill Lesson (PT-112-S-4-Q-20)');
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
    expect(linkage.displayTitle).toBe('Drill Lesson (PT-112-S-4-Q-20, PT-111-S-3-Q-4)');
  });

  it('marks missing question number when card exists without PT ID', () => {
    const linkage = getLessonLinkageStatus({
      moduleId: 9,
      lesson: lesson({
        content: [{ type: 'question-card', id: 'illustrative-9-4', stimulus: 'S', question: 'Q', options: [] }],
      }),
    });

    expect(linkage.status).toBe('missing_q_number');
    expect(linkage.displayTitle).toContain('[Missing Q#]');
  });

  it('marks missing card for LR lesson 4+ with no question card', () => {
    const linkage = getLessonLinkageStatus({
      moduleId: 9,
      lesson: lesson({ id: '9-7', content: [{ type: 'paragraph', text: 'No card' }] }),
    });

    expect(linkage.status).toBe('missing_card');
    expect(linkage.displayTitle).toContain('[Missing Card]');
  });

  it('exempts LR lesson order 1 from missing warnings and normalizes title', () => {
    const linkage = getLessonLinkageStatus({
      moduleId: 9,
      lesson: lesson({
        id: '9-intro',
        title: 'Old Intro',
        content: [{ type: 'question-card', id: 'illustrative-9-intro', stimulus: 'S', question: 'Q', options: [] }],
      }),
      lessonOrder: 1,
      moduleTitle: 'Strengthen',
    });

    expect(linkage.status).toBe('ok');
    expect(linkage.isExempt).toBe(true);
    expect(linkage.displayTitle).toBe('Introduction to Strengthen');
    expect(linkage.displayTitle).not.toContain('[Missing Q#]');
  });

  it('normalizes LR lesson order 2 title to step-by-step guide', () => {
    const linkage = getLessonLinkageStatus({
      moduleId: 9,
      lesson: lesson({ id: '9-2', title: 'Old Step 2' }),
      lessonOrder: 2,
      moduleTitle: 'Strengthen',
    });

    expect(linkage.status).toBe('ok');
    expect(linkage.isExempt).toBe(true);
    expect(linkage.displayTitle).toBe('Step-by-Step Guide: Strengthen');
  });

  it('exempts allowlisted advanced lessons and applies high-difficulty title format', () => {
    const allowlistCases = [
      { id: '1-7', moduleId: 1, moduleTitle: 'Argument Part' },
      { id: '2-7', moduleId: 2, moduleTitle: 'Main Conclusion' },
      { id: '3-8', moduleId: 3, moduleTitle: 'Method of Reasoning' },
      { id: '4-8', moduleId: 4, moduleTitle: 'Parallel Reasoning' },
      { id: '5-8', moduleId: 5, moduleTitle: 'Flaw' },
      { id: '6-6', moduleId: 6, moduleTitle: 'Parallel Flaw' },
      { id: '7-9', moduleId: 7, moduleTitle: 'Evaluate the Argument' },
      { id: '8-6', moduleId: 8, moduleTitle: 'Weaken' },
      { id: '9-6', moduleId: 9, moduleTitle: 'Strengthen' },
      { id: '16-6', moduleId: 16, moduleTitle: 'Most Strongly Supported' },
      { id: '17-6', moduleId: 17, moduleTitle: 'Must Be True' },
      { id: '18-7', moduleId: 18, moduleTitle: 'Must Be False' },
      { id: '19-6', moduleId: 19, moduleTitle: 'Explain / Resolve' },
      { id: '20-6', moduleId: 20, moduleTitle: 'Point at Issue' },
    ];

    for (const allowlistCase of allowlistCases) {
      const linkage = getLessonLinkageStatus({
        moduleId: allowlistCase.moduleId,
        moduleTitle: allowlistCase.moduleTitle,
        lesson: lesson({
          id: allowlistCase.id,
          title: 'Advanced Concepts',
          content: [{ type: 'paragraph', text: 'No card by design' }],
        }),
      });

      expect(linkage.status).toBe('ok');
      expect(linkage.isExempt).toBe(true);
      expect(linkage.displayTitle).toBe(`Traits of High-Difficulty: ${allowlistCase.moduleTitle}`);
      expect(linkage.displayTitle).not.toContain('[Missing Card]');
      expect(linkage.displayTitle).not.toContain('[Missing Q#]');
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
    expect(linkage.displayTitle).toContain('[Missing Card]');
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
    expect(linkage.displayTitle).not.toContain('[Missing Card]');
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
    expect(linkage.displayTitle).toContain('[Missing Q#]');
  });
});
