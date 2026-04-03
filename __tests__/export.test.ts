
import { describe, it, expect } from 'vitest';
import {
  generateCanonicalCourseJSON,
  generateCurriculumOutlineCSV,
  generateCurriculumOutlineJSON,
  generateCurriculumOutlineText,
  generateFullCourseJSON,
  generateInterchangeCourseJSON,
  generateLessonText,
  generateLessonRTF,
  generateQuestionBankCSV,
  generateQuestionBankIDsText,
  generateQuestionBankJSON,
} from '../utils/export';
import { Lesson, ContentBlock, ModuleData } from '../types';
import { isCanonicalCoursePayload } from '../utils/courseExportSchemas';
import { moduleRegistry } from '../modules/registry';
import { applyCanonicalNamesToModule } from '../utils/courseCatalog';
import { normalizeLessonsWithLinkage } from '../utils/lessonQuestionLinkage';

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
          { id: '1-2', title: 'Step-by-Step: Argument Part', content: [] },
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

  it('builds canonical-course JSON with route/source mapping and explicit LR question policy defaults', () => {
    const modules: ModuleData[] = [
      {
        id: 21,
        title: 'Conditional Reasoning',
        category: 'LR',
        description: 'desc',
        unit: 'Unit 8: Conditional Reasoning',
        lessons: [
          { id: '55-intro', title: 'Introduction', content: 'Intro content' },
          {
            id: '55-2',
            title: 'Conditional Drill',
            questionPolicy: 'repository_required',
            content: [{ type: 'paragraph', text: 'Block lesson content.' }],
          },
        ],
      },
      {
        id: 23,
        title: 'Main Point',
        category: 'RC',
        description: 'rc desc',
        unit: 'Unit 10: Summarizing the Passage',
        lessons: [{ id: '21-1', title: 'RC Intro', content: [{ type: 'paragraph', text: 'RC content.' }] }],
      },
    ];

    const parsed = JSON.parse(generateCanonicalCourseJSON(modules));

    expect(isCanonicalCoursePayload(parsed)).toBe(true);
    if (!isCanonicalCoursePayload(parsed)) {
      throw new Error('canonical-course payload failed validation');
    }

    expect(parsed.exportType).toBe('canonical-course');
    expect(parsed.modules[0]).toMatchObject({
      routeModuleId: 22,
      sourceModuleId: 55,
      title: 'Conditional Reasoning',
    });
    expect(parsed.modules[0]?.lessons[0]).toMatchObject({
      lessonId: '55-intro',
      bodyKind: 'markdown',
      content: 'Intro content',
      questionPolicy: 'none',
    });
    expect(parsed.modules[0]?.lessons[1]).toMatchObject({
      lessonId: '55-2',
      bodyKind: 'blocks',
      questionPolicy: 'repository_required',
    });
    expect(parsed.modules[1]?.lessons[0]).not.toHaveProperty('questionPolicy');
  });

  it('keeps canonical-course lesson ids unique across the current curriculum', async () => {
    const modules = await Promise.all(
      moduleRegistry.map(async (entry) => {
        const loaded = await entry.load();
        const moduleData =
          'default' in loaded
            ? loaded.default
            : (loaded as Record<string, ModuleData>)[Object.keys(loaded).find((key) => key.startsWith('Module'))!];
        const canonicalModule = applyCanonicalNamesToModule(moduleData, entry.meta.id);
        const { lessons } = normalizeLessonsWithLinkage(entry.meta.id, canonicalModule.lessons);
        return {
          ...canonicalModule,
          id: entry.meta.id,
          lessons,
        };
      }),
    );

    const payload = JSON.parse(generateCanonicalCourseJSON(modules));

    expect(isCanonicalCoursePayload(payload)).toBe(true);
    if (!isCanonicalCoursePayload(payload)) {
      throw new Error('canonical-course payload failed validation');
    }

    const lessonIds = payload.modules.flatMap((module) => module.lessons.map((lesson) => lesson.lessonId));
    const duplicateLessonIds = Array.from(
      lessonIds.reduce((duplicates, lessonId, index) => {
        if (lessonIds.indexOf(lessonId) !== index) {
          duplicates.add(lessonId);
        }
        return duplicates;
      }, new Set<string>()),
    );

    expect(duplicateLessonIds).toEqual([]);
  }, 15000);

  it('builds interchange-course JSON from canonical lessons with deduped question refs and text materials', () => {
    const modules: ModuleData[] = [
      {
        id: 21,
        title: 'Conditional Reasoning',
        category: 'LR',
        description: 'desc',
        unit: 'Unit 8: Conditional Reasoning',
        lessons: [
          {
            id: '55-3',
            title: 'Mixed Lesson',
            content: [
              { type: 'h2', text: 'Core Idea' },
              { type: 'paragraph', text: 'Narrative paragraph.' },
              {
                type: 'question-card',
                id: 'PT-101-S-2-Q-21',
                questionType: 'Strengthen',
                stimulus: 'Real stimulus.',
                question: 'Real question?',
                options: ['A', 'B'],
              },
              {
                type: 'question-card',
                id: 'PT-101-S-2-Q-21',
                questionType: 'Strengthen',
                stimulus: 'Duplicate real stimulus.',
                question: 'Duplicate real question?',
                options: ['A', 'B'],
              },
              {
                type: 'question-card',
                questionType: 'Illustrative',
                stimulus: 'Illustrative stimulus.',
                question: 'Illustrative question?',
                options: ['A', 'B'],
              },
              {
                type: 'passage-card',
                title: 'Passage Card',
                genre: 'Science',
                passage: 'Passage body.',
              },
              {
                type: 'accordion',
                title: 'Recap',
                content: [
                  { type: 'paragraph', text: 'Accordion note.' },
                  {
                    type: 'question-passage-card',
                    id: 'PT-102-S-3-Q-22',
                    passageTitle: 'Nested Passage',
                    passage: 'Nested passage body.',
                    question: 'Nested question?',
                    options: ['A', 'B'],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];

    const parsed = JSON.parse(generateInterchangeCourseJSON(modules));

    expect(Array.isArray(parsed)).toBe(true);
    expect(parsed[0]?.id).toBe('21');
    expect(parsed[0]?.description).toBe('desc');

    const lesson = parsed[0]?.lessons[0];
    expect(lesson?.id).toBe('55-3');
    expect(lesson?.content).toContain('## Core Idea');
    expect(lesson?.content).toContain('Narrative paragraph.');
    expect(lesson?.content).toContain('#### Recap');
    expect(lesson?.content).toContain('Accordion note.');
    expect(lesson?.content).not.toContain('Real stimulus.');

    expect(lesson?.materials).toHaveLength(4);
    expect(lesson?.materials[0]).toMatchObject({
      id: '55-3--material-1',
      type: 'question_ref',
      content: 'PT-101-S-2-Q-21',
    });
    expect(lesson?.materials[1]).toMatchObject({
      id: '55-3--material-2',
      type: 'text',
      title: 'Question Card: Illustrative',
    });
    expect(lesson?.materials[1]?.content).toContain('### Stimulus');
    expect(lesson?.materials[2]).toMatchObject({
      id: '55-3--material-3',
      type: 'text',
      title: 'Passage Card',
    });
    expect(lesson?.materials[3]).toMatchObject({
      id: '55-3--material-4',
      type: 'question_ref',
      content: 'PT-102-S-3-Q-22',
    });
  });
});
