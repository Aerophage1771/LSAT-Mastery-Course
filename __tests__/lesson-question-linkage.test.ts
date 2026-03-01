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
});
