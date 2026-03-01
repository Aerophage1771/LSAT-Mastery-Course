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
});
