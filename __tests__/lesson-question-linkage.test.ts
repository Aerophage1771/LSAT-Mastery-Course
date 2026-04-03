import { describe, expect, it } from 'vitest';
import { getLessonLinkageStatus } from '../utils/lessonQuestionLinkage';
import type { Lesson } from '../types';

function lesson(overrides: Partial<Lesson> = {}): Lesson {
  return {
    id: '9-4',
    title: 'Drill Lesson',
    questionPolicy: 'repository_required',
    content: [],
    ...overrides,
  };
}

describe('lessonQuestionLinkage', () => {
  it('extracts a single PT ID once', () => {
    const linkage = getLessonLinkageStatus({
      moduleId: 9,
      lesson: lesson({
        content: [{ type: 'question-card', id: 'PT-112-S-4-Q-20', stimulus: 'S', question: 'Q', options: [] }],
      }),
    });

    expect(linkage.ptIds).toEqual(['PT-112-S-4-Q-20']);
    expect(linkage.displayTitle).toBe('Drill Lesson');
  });

  it('extracts multiple PT IDs in order', () => {
    const linkage = getLessonLinkageStatus({
      moduleId: 9,
      lesson: lesson({
        content: [
          { type: 'question-card', id: 'PT-112-S-4-Q-20', stimulus: 'S', question: 'Q', options: [] },
          {
            type: 'question-passage-card',
            id: 'PT-111-S-3-Q-4',
            passageTitle: 'P',
            passage: 'T',
            question: 'Q',
            options: [],
          },
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

  it('treats policy none lessons as not requiring question cards', () => {
    const linkage = getLessonLinkageStatus({
      moduleId: 9,
      lesson: lesson({
        id: '9-intro',
        title: 'Introduction to Strengthen',
        questionPolicy: 'none',
        content: [{ type: 'paragraph', text: 'Intro content only' }],
      }),
    });

    expect(linkage.status).toBe('ok');
    expect(linkage.displayTitle).toBe('Introduction to Strengthen');
  });

  it('still flags missing question number when a policy none lesson includes a non-PT card', () => {
    const linkage = getLessonLinkageStatus({
      moduleId: 9,
      lesson: lesson({
        id: '9-2',
        title: 'Step-by-Step: Strengthen',
        questionPolicy: 'none',
        content: [{ type: 'question-card', id: 'illustrative-step-guide', stimulus: 'S', question: 'Q', options: [] }],
      }),
    });

    expect(linkage.status).toBe('missing_q_number');
    expect(linkage.displayTitle).toBe('Step-by-Step: Strengthen');
  });

  it('flags a repository_required lesson with no question card', () => {
    const linkage = getLessonLinkageStatus({
      moduleId: 9,
      lesson: lesson({
        id: '9-7',
        title: 'Advanced Concepts',
        questionPolicy: 'repository_required',
        content: [{ type: 'paragraph', text: 'No card' }],
      }),
    });

    expect(linkage.status).toBe('missing_card');
    expect(linkage.displayTitle).toBe('Advanced Concepts');
  });

  it('treats reference-style policy none lessons as satisfied without cards', () => {
    const linkage = getLessonLinkageStatus({
      moduleId: 9,
      lesson: lesson({
        id: '9-13',
        title: 'Reference Guide',
        questionPolicy: 'none',
        content: [{ type: 'paragraph', text: 'Reference content, no card' }],
      }),
    });

    expect(linkage.status).toBe('ok');
    expect(linkage.missingQuestionCard).toBe(false);
    expect(linkage.displayTitle).toBe('Reference Guide');
  });

  it('still flags missing question number for policy none lesson cards with no PT id', () => {
    const linkage = getLessonLinkageStatus({
      moduleId: 9,
      lesson: lesson({
        id: '9-13',
        title: 'Reference Guide',
        questionPolicy: 'none',
        content: [{ type: 'question-card', id: 'illustrative-reference', stimulus: 'S', question: 'Q', options: [] }],
      }),
    });

    expect(linkage.status).toBe('missing_q_number');
    expect(linkage.missingQuestionNumber).toBe(true);
    expect(linkage.displayTitle).toBe('Reference Guide');
  });
});
