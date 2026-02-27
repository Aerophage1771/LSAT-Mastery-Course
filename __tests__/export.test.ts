
import { describe, it, expect } from 'vitest';
import { generateLessonText, generateLessonRTF } from '../utils/export';
import { Lesson, ContentBlock } from '../types';

describe('Export Utils', () => {
  const mockLesson: Lesson = {
    id: 'test-lesson',
    title: 'Test Lesson',
    content: [
      {
        type: 'question-card',
        id: 'q1',
        questionType: 'Strengthen',
        difficulty: 'hard',
        stimulus: 'This is the stimulus.',
        question: 'Which one strengthens?',
        options: ['Option A', 'Option B']
      },
      {
        type: 'passage-card',
        title: 'The Passage',
        genre: 'Science',
        passage: 'This is a long passage about science.'
      },
      {
        type: 'question-passage-card',
        passageTitle: 'RC Passage',
        passage: 'RC Passage content.',
        question: 'Main Point?',
        options: ['A', 'B']
      }
    ] as ContentBlock[]
  };

  it('should generate text for new card types', () => {
    const text = generateLessonText(mockLesson);
    
    expect(text).toContain('[QUESTION CARD: ID: q1 | Type: Strengthen | Difficulty: hard]');
    expect(text).toContain('STIMULUS:\nThis is the stimulus.');
    expect(text).toContain('QUESTION:\nWhich one strengthens?');
    expect(text).toContain('OPTIONS:\n(A) Option A\n(B) Option B');

    expect(text).toContain('[PASSAGE CARD: The Passage (Science)]');
    expect(text).toContain('This is a long passage about science.');

    expect(text).toContain('[RC QUESTION: RC Passage]');
    expect(text).toContain('PASSAGE:\nRC Passage content.');
  });

  it('should generate RTF for new card types', () => {
    const rtf = generateLessonRTF(mockLesson);
    
    // Check for RTF formatting markers and content
    expect(rtf).toContain('QUESTION CARD: ID: q1');
    expect(rtf).toContain('STIMULUS');
    expect(rtf).toContain('This is the stimulus');
    
    expect(rtf).toContain('PASSAGE CARD: The Passage');
    
    expect(rtf).toContain('RC QUESTION: RC Passage');
  });
});
