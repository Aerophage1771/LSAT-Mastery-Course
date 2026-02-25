import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: '19-2',
  title: 'Step-by-Step Guide',
  content: [
    { type: 'h2', text: 'Step-by-Step Guide: Paradox / Explain' },
    { type: 'paragraph', text: 'Follow this four-step method to solve any Paradox question quickly and accurately.' },
    { type: 'process', title: 'The 4-Step Method', steps: [
      'Identify Both Facts — Read the stimulus and isolate Fact 1 (the expected situation) and Fact 2 (the surprising outcome). Look for pivot words like "however," "yet," or "surprisingly."',
      'Articulate the Tension — State the paradox in your own words: "Why did X happen even though Y is also true?" If you can\'t phrase the conflict, re-read until you can.',
      'Prephrase a Bridge — Before looking at the choices, predict the KIND of information that would let both facts coexist. You don\'t need the exact answer, just the category (a hidden cause, a definitional difference, a numerical trick).',
      'Match Answer — Test each choice against one question: "Does this new fact explain how BOTH Fact 1 and Fact 2 can be true at the same time?" Select the choice that does.'
    ]},
    { type: 'h3', text: 'Wrong Answer Patterns' },
    { type: 'list', items: [
      '**Explains Only One Fact** — Validates one side of the conflict without connecting it to the other side. It might explain WHY Fact 1 is true but never addresses why Fact 2 also holds.',
      '**Deepens the Paradox** — Adds another reason to expect the opposite of what happened, making the conflict harder to resolve rather than easier.',
      '**Irrelevant** — Introduces information about a different group, time period, or context that has no bearing on the specific two-fact tension.'
    ]},
    { type: 'h3', text: 'Worked Example' },
    { type: 'question-card',
      id: '19-2-example',
      questionType: 'Paradox / Explain',
      difficulty: 'medium',
      stimulus: 'A company offered generous bonuses to employees who met their quarterly targets. In the first quarter after introducing the bonus program, overall productivity declined even though nearly every employee reported being highly motivated by the new incentives.',
      question: 'Which one of the following, if true, most helps to resolve the apparent discrepancy?',
      options: [
        '(A) The company had never offered performance bonuses before.',
        '(B) Employees spent so much time tracking and documenting their individual targets that less time was devoted to actual production work. (Correct)',
        '(C) Some employees had already been performing above their quarterly targets before the program began.',
        '(D) The bonus amounts were comparable to those offered by competing firms.',
        '(E) Employee turnover rates did not change during the quarter.'
      ]
    },
    { type: 'h3', text: 'Analysis' },
    { type: 'paragraph', text: '**Fact 1:** Employees were highly motivated by the bonuses. **Fact 2:** Productivity still declined. The tension: why would motivated employees produce less?' },
    { type: 'paragraph', text: 'Answer (B) bridges both facts — the bonus system created administrative overhead that consumed productive time, so employees were genuinely motivated yet still less productive overall.' },
    { type: 'list', items: [
      '**(A)** Irrelevant background — whether bonuses existed before doesn\'t explain why productivity fell now.',
      '**(C)** Explains only one fact — past performance doesn\'t address the current decline.',
      '**(D)** Outside comparison — what competitors offer is irrelevant to the internal paradox.',
      '**(E)** Wrong topic — retention is not the same as productivity.'
    ]},
    { type: 'callout', variant: 'tip', title: 'Timing Tip', text: 'Spend most of your time on Steps 1-2. If you correctly identify both facts and articulate the tension, the right answer usually jumps out. Rushing past the stimulus to the choices is the most common timing trap on Paradox questions.' }
  ]
};
