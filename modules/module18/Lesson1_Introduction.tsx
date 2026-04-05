import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: '18-1',
  title: 'Introduction',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'MODULE 18: Must Be False' },
    {
      type: 'paragraph',
      text: '**Question Goal**\n\nIdentify the one answer choice that is **logically impossible** given the facts in the stimulus. Every other answer *could* be true; the correct answer absolutely *cannot* be true.',
    },
    { type: 'h3', text: 'Why This Matters' },
    {
      type: 'paragraph',
      text: 'Must Be False is the rarest inference question type on the LSAT, but it tests the deepest level of logical precision. While most questions ask you to find what is supported or required, Must Be False asks you to find what is **forbidden**. Mastering this skill sharpens your ability to detect contradictions instantly \u2014 a talent that pays dividends across every section of the exam.',
    },
    { type: 'h3', text: 'Recognizing the Question Stem' },
    {
      type: 'table',
      headers: ['Stem Language', 'What It Asks'],
      rows: [
        ['Which one **CANNOT be true**?', 'Find the impossible statement.'],
        ['Which one **must be false**?', 'Same task, direct phrasing.'],
        ['Each of the following **could be true EXCEPT**:', 'Four answers are possible; one is impossible.'],
        ['The claims above are **incompatible** with which one?', 'Find what clashes with the stimulus.'],
        ['Which one **violates** the principle described?', 'Find the rule-breaker.'],
      ],
    },
    { type: 'h3', text: 'Must Be False vs. Must Be True' },
    {
      type: 'list',
      items: [
        '**Must Be True** finds what is NECESSARY \u2014 the answer that the stimulus guarantees.',
        '**Must Be False** finds what is IMPOSSIBLE \u2014 the answer that the stimulus forbids.',
        'They are mirror images: MBT asks "What must happen?" while MBF asks "What can never happen?"',
      ],
    },
    { type: 'h3', text: 'The Impossibility Standard' },
    {
      type: 'paragraph',
      text: 'The bar for "must be false" is absolute. If you can construct **any** scenario \u2014 however unlikely \u2014 where the stimulus facts and the answer choice are **both** true at the same time, that answer is wrong. A correct Must Be False answer leaves zero room for coexistence with the stimulus.',
    },
    { type: 'h3', text: 'The EXCEPT Format' },
    {
      type: 'paragraph',
      text: 'Most Must Be False questions appear in the EXCEPT format: *"Each of the following could be true EXCEPT."* This means the four wrong answers are all logically possible, and only the correct answer is impossible. Read carefully \u2014 the EXCEPT flips your usual instinct. You are eliminating statements that *work* and keeping the one that *breaks*.',
    },
    { type: 'h3', text: 'Common Reasoning Patterns' },
    {
      type: 'list',
      items: [
        '**Conditional Violations:** The stimulus says "If A, then B." The correct answer describes A happening without B \u2014 the one combination a conditional forbids.',
        '**Quantifier Contradictions:** The stimulus says "All X are Y." The correct answer presents an X that is not Y, directly breaking the universal rule.',
        '**Mutually Exclusive Categories:** The stimulus establishes that two groups cannot overlap. The correct answer places something in both groups at once.',
        '**Numerical Impossibilities:** The stimulus sets a cap, floor, or total. The correct answer violates that numerical constraint.',
      ],
    },
    { type: 'h3', text: 'Concept Snapshot' },
    {
      type: 'paragraph',
      text: 'Suppose every dog in a shelter has been vaccinated, no vaccinated animal is allowed in the quarantine wing, and Rex is a dog in that shelter. The impossible statement is that Rex is currently in the quarantine wing. Once you chain the rules, that possibility is closed off. That is the Must Be False task: identify the answer that collides with the stimulus rather than merely sounding unlikely.',
    },
    {
      type: 'callout',
      title: 'Key Principle',
      variant: 'summary',
      text: 'The correct answer CONTRADICTS the stimulus \u2014 it cannot coexist with the stated facts. If combining the stimulus and the answer produces a logical impossibility, you have found your answer.',
    },
  ],
};
