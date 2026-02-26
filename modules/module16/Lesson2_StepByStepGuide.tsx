import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: "16-2",
  title: "Step-by-Step Guide",
  content: [
    { type: 'h2', text: 'Step-by-Step Guide: Most Strongly Supported' },
    { type: 'paragraph', text: 'Follow this four-step method to solve any MSS question efficiently and accurately.' },
    { type: 'h3', text: 'The 4-Step Method' },
    { type: 'process', title: 'Solving MSS Questions', steps: [
      '**Read for Facts.** Treat every sentence as a premise you must accept. Identify the key terms, quantifiers, and any causal or conditional language.',
      '**Identify Key Relationships.** Look for links between premises: shared terms, cause-and-effect chains, comparisons, or conditional triggers.',
      '**Prephrase an Inference.** Before reading the answers, ask yourself: *What follows from combining these facts?* Form a rough prediction.',
      '**Test Each Answer.** Check every choice against the stimulus. The correct answer is the one the premises most directly support; eliminate anything that requires outside information or an unsupported leap.'
    ]},
    { type: 'h3', text: 'Wrong-Answer Patterns' },
    { type: 'list', items: [
      '**Too Extreme:** Uses absolutes like *all, never, impossible* when the stimulus uses moderate language.',
      '**Unsupported Leap:** Introduces a concept or prediction not grounded in the stimulus.',
      '**Reverses Direction:** Treats the answer as evidence for the stimulus instead of the other way around.',
      '**Outside Scope:** Brings in real-world knowledge that the passage doesn\'t mention or imply.'
    ]},
    { type: 'h3', text: 'Worked Example' },
    { type: 'question-card',
      id: '16-2-example',
      questionType: 'Most Strongly Supported',
      difficulty: 'medium',
      stimulus: 'Studies show that employees who take short breaks every 90 minutes report higher focus than those who work continuously. However, most workplaces discourage frequent breaks because managers equate visible desk time with productivity.',
      question: 'Which one of the following is most strongly supported by the information above?',
      options: [
        '(A) Managers who discourage breaks are intentionally reducing their employees\' focus.',
        '(B) In most workplaces, policies about breaks may conflict with practices that studies link to higher focus. (Correct)',
        '(C) Employees who take breaks every 90 minutes are always more productive than those who do not.',
        '(D) Short breaks are the single most important factor in workplace productivity.',
        '(E) Studies on workplace focus are not trusted by most managers.'
      ]
    },
    { type: 'callout', title: 'Timing Tip', variant: 'tip', text: 'Spend roughly 60 percent of your time on the stimulus and prephrasing, and 40 percent on the answer choices. A strong prephrase lets you spot the correct answer quickly and resist attractive wrong answers.' }
  ]
};
