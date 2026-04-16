import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: '16-2',
  title: 'Step-by-Step Guide',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Step-by-Step: Most Strongly Supported' },
    { type: 'paragraph', text: 'Follow this four-step method to solve any MSS question efficiently and accurately.' },
    { type: 'h3', text: 'The 4-Step Method' },
    {
      type: 'process',
      title: 'Solving MSS Questions',
      steps: [
        '**Read for Facts.** Treat every sentence as a premise you must accept. Identify the key terms, quantifiers, and any causal or conditional language.',
        '**Identify Key Relationships.** Look for links between premises: shared terms, cause-and-effect chains, comparisons, or conditional triggers.',
        '**Prephrase an Inference.** Before reading the answers, ask yourself: *What follows from combining these facts?* Form a rough prediction.',
        '**Test Each Answer.** Check every choice against the stimulus. The correct answer is the one the premises most directly support; eliminate anything that requires outside information or an unsupported leap.',
      ],
    },
    { type: 'h3', text: 'Wrong-Answer Patterns' },
    {
      type: 'list',
      items: [
        '**Too Extreme:** Uses absolutes like *all, never, impossible* when the stimulus uses moderate language.',
        '**Unsupported Leap:** Introduces a concept or prediction not grounded in the stimulus.',
        '**Reverses Direction:** Treats the answer as evidence for the stimulus instead of the other way around.',
        "**Outside Scope:** Brings in real-world knowledge that the passage doesn't mention or imply.",
      ],
    },
    { type: 'h3', text: 'Worked Method Snapshot' },
    {
      type: 'paragraph',
      text: 'Take a stimulus saying that employees who take short breaks report higher focus, while most workplaces still discourage frequent breaks because managers equate visible desk time with productivity. The best supported inference is not that managers are malicious or that breaks always maximize productivity. It is the narrower point that many workplace policies may conflict with practices the studies associate with stronger focus.',
    },
    {
      type: 'paragraph',
      text: 'That is the MSS process in miniature. Read the facts as fixed, combine them carefully, and choose the conclusion that stays closest to what those facts jointly support. The wrong answers almost always overstate the evidence or import a new claim the stimulus never established.',
    },
    {
      type: 'callout',
      title: 'Timing Tip',
      variant: 'tip',
      text: 'Spend roughly 60 percent of your time on the stimulus and prephrasing, and 40 percent on the answer choices. A strong prephrase lets you spot the correct answer quickly and resist attractive wrong answers.',
    },
  ],
};
