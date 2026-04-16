import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: '19-2',
  title: 'Step-by-Step Guide',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Step-by-Step: Paradox/Explain' },
    { type: 'paragraph', text: 'Follow this four-step method to solve any Paradox question quickly and accurately.' },
    {
      type: 'process',
      title: 'The 4-Step Method',
      steps: [
        'Identify Both Facts — Read the stimulus and isolate Fact 1 (the expected situation) and Fact 2 (the surprising outcome). Look for pivot words like "however," "yet," or "surprisingly."',
        'Articulate the Tension — State the paradox in your own words: "Why did X happen even though Y is also true?" If you can\'t phrase the conflict, re-read until you can.',
        "Prephrase a Bridge — Before looking at the choices, predict the KIND of information that would let both facts coexist. You don't need the exact answer, just the category (a hidden cause, a definitional difference, a numerical trick).",
        'Match Answer — Test each choice against one question: "Does this new fact explain how BOTH Fact 1 and Fact 2 can be true at the same time?" Select the choice that does.',
      ],
    },
    { type: 'h3', text: 'Wrong Answer Patterns' },
    {
      type: 'list',
      items: [
        '**Explains Only One Fact** — Validates one side of the conflict without connecting it to the other side. It might explain WHY Fact 1 is true but never addresses why Fact 2 also holds.',
        '**Deepens the Paradox** — Adds another reason to expect the opposite of what happened, making the conflict harder to resolve rather than easier.',
        '**Irrelevant** — Introduces information about a different group, time period, or context that has no bearing on the specific two-fact tension.',
      ],
    },
    { type: 'h3', text: 'Worked Method Snapshot' },
    {
      type: 'paragraph',
      text: '**Fact 1:** Employees were highly motivated by the bonus program. **Fact 2:** Productivity still declined. The paradox is not whether the incentives were appealing; it is how motivation and lower output managed to coexist.',
    },
    {
      type: 'paragraph',
      text: 'A strong resolution would show that the bonus program changed employee behavior in a way that consumed productive time, for example by forcing employees to spend hours tracking, documenting, or optimizing for quotas instead of doing the underlying work. That kind of answer bridges both facts at once.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Tip',
      text: 'Spend most of your time on Steps 1-2. If you correctly identify both facts and articulate the tension, the right answer usually jumps out. Rushing past the stimulus to the choices is the most common timing trap on Paradox questions.',
    },
  ],
};
