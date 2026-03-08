
import { describe, it, expect } from 'vitest';
import {
  generateCurriculumOutlineCSV,
  generateCurriculumOutlineJSON,
  generateCurriculumOutlineText,
  generateFullCourseJSON,
  generateLessonText,
  generateLessonRTF,
  generateQuestionBankCSV,
  generateQuestionBankIDsText,
  generateQuestionBankJSON,
} from '../utils/export';
import { Lesson, ContentBlock, ModuleData } from '../types';

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

  it('should export question bank rows with escaping and ids', () => {
    const rows = [
      {
        id: 'PT-123-S-2-Q-05',
        questionType: 'Strengthen',
        isIllustrative: false,
        inUse: true,
        stimulus: 'Line 1,\n"Quoted" text',
        question: 'Which option is best?',
        options: ['A. Alpha', 'B. Beta (Correct)'],
      },
    ];

    const json = generateQuestionBankJSON(rows);
    const csv = generateQuestionBankCSV(rows);
    const ids = generateQuestionBankIDsText(rows);

    expect(json).toContain('"id": "PT-123-S-2-Q-05"');
    expect(csv).toContain('id,questionType,isIllustrative,inUse,stimulus,question,options');
    expect(csv).toContain('"Line 1,\n""Quoted"" text"');
    expect(csv).toContain('A. Alpha | B. Beta (Correct)');
    expect(ids).toBe('PT-123-S-2-Q-05');
  });

  it('serializes nested accordion content and table rows in lesson text exports', () => {
    const text = generateLessonText({
      id: 'nested-lesson',
      title: 'Nested Lesson',
      content: [
        {
          type: 'accordion',
          title: 'Expanded Notes',
          content: [
            { type: 'paragraph', text: 'Nested paragraph.' },
            { type: 'table', headers: ['A', 'B'], rows: [['1', '2']] },
          ],
        },
      ],
    });

    expect(text).toContain('[EXPAND: Expanded Notes]');
    expect(text).toContain('Nested paragraph.');
    expect(text).toContain('A | B');
    expect(text).toContain('1 | 2');
  });

  it('builds curriculum outline exports with structure-only metadata', () => {
    const modules: ModuleData[] = [
      {
        id: 1,
        title: 'Argument Part',
        category: 'LR',
        description: 'desc',
        unit: 'Unit 1: Identification',
        lessons: [
          { id: '1-1', title: 'Introduction to Argument Part', content: [] },
          { id: '1-2', title: 'Step-by-Step Guide: Argument Part', content: [] },
        ],
      },
    ];

    const text = generateCurriculumOutlineText(modules);
    const json = generateCurriculumOutlineJSON(modules);
    const csv = generateCurriculumOutlineCSV(modules);

    expect(text).toContain('MODULE 1: Argument Part');
    expect(text).toContain('1. Introduction to Argument Part');
    expect(json).toContain('"exportType": "curriculum-outline"');
    expect(json).toContain('"sourceModuleId": 1');
    expect(json).not.toContain('"content"');
    expect(csv).toContain('Section,Unit,Route Module ID,Source Module ID,Module Title,Lesson Order,Lesson ID,Lesson Title,Route Path');
  });

  it('builds full-course JSON with explicit body metadata', () => {
    const modules: ModuleData[] = [
      {
        id: 21,
        title: 'Conditional Reasoning',
        category: 'LR',
        description: 'desc',
        unit: 'Unit 8: Conditional Reasoning',
        lessons: [
          { id: '55-intro', title: 'Introduction to Conditional Reasoning', content: 'Intro content' },
        ],
      },
    ];

    const json = generateFullCourseJSON(modules);

    expect(json).toContain('"exportType": "full-course"');
    expect(json).toContain('"sourceModuleId": 55');
    expect(json).toContain('"bodyKind": "markdown"');
    expect(json).toContain('"plainText": "Intro content"');
  });
});
