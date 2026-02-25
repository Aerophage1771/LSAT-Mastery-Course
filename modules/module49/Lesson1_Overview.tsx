
import { Lesson } from '../../types';

export const Lesson1_Overview: Lesson = {
  id: "49-1",
  title: "RC Question Bank Overview",
  content: [
    { type: 'h2', text: 'Reading Comprehension Question Repository' },
    { type: 'paragraph', text: 'This repository contains Reading Comprehension questions from the course drills, organized by passage. Each lesson below focuses on a single passage and its associated questions. Use these lessons for targeted practice and review.' },
    { type: 'callout', title: 'How to Use the Question Bank', text: 'Navigate to any passage lesson to see the full passage text followed by each associated question. Questions preserve their original PT numbering and include answer-choice statistics. Where a question or passage is referenced in a drill but not listed here, it is marked **[Missing ID]** or **[Content in Module X]** in that module.', variant: 'tip' },
    { type: 'hr' },
    { type: 'h3', text: 'Passage Index' },
    {
      type: 'table',
      headers: ['Lesson', 'Passage', 'PT Source', 'Genre', 'Questions'],
      rows: [
        ['Lesson 2', 'Obasan', 'PT-119-S-1-P-2', 'Literary Criticism', '7'],
        ['Lesson 3', 'Bankruptcy Laws', 'PT-128-S-1-P-2', 'Law', '8'],
        ['Lesson 4', 'Cultural Identity', 'PT-128-S-1-P-3', 'Humanities', '8'],
        ['Lesson 5', 'Woody Allen Films', 'PT-128-S-4-P-2', 'Art/Film', '6'],
        ['Lesson 6', 'Cosmic Justice', 'PT-128-S-4-P-4', 'Philosophy (Dual Passage)', '8'],
        ['Lesson 7', 'Julia Margaret Cameron', 'PT-141-S-1-P-2', 'Art/Photography', '8'],
        ['Lesson 8', 'Advertising Critique', 'PT-141-S-1-P-3', 'Social Science', '6'],
        ['Lesson 9', 'Property Justice', 'PT-141-S-1-P-4', 'Law (Dual Passage)', '6'],
      ]
    },
    { type: 'paragraph', text: '**Total: 57 questions across 8 passages from 3 PrepTests.**' },
  ]
};
