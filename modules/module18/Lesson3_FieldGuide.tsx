import { Lesson } from '../../types';

export const Lesson3_FieldGuide: Lesson = {
  id: "18-3",
  title: "Must Be False — Common Patterns",
  content: [
    { type: 'h2', text: 'A Field Guide to Must Be False' },
    { type: 'paragraph', text: "Must Be False questions ask for the answer choice that cannot be true given the information in the stimulus. The correct answer will contradict the premises or follow from them in a way that is logically impossible. This field guide summarizes common contradiction patterns." },
    { type: 'hr' },
    { type: 'h4', text: '1. Conditional and Quantifier Clashes' },
    { type: 'paragraph', text: "When the stimulus contains conditionals or quantifiers, the right answer often violates a necessary truth (e.g., contradicts a conditional or confuses \"some\" with \"all\")." },
    { type: 'h4', text: '2. Exclusive Boundaries' },
    { type: 'paragraph', text: "When categories are mutually exclusive or exhaustive, the correct answer may be the one that wrongly places something in two exclusive groups or outside a required boundary." },
    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "The correct answer is the one that is logically impossible given the stimulus. Use the premises to derive what must be true, then find the choice that contradicts it." }
  ]
};
