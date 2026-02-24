import { Lesson } from '../../types';

export const Lesson3_FieldGuide: Lesson = {
  id: "11-3",
  title: "Necessary Assumption — Common Types",
  content: [
    { type: 'h2', text: 'A Field Guide to Necessary Assumption' },
    { type: 'paragraph', text: "Necessary Assumption questions ask for an assumption the argument requires: if it is false, the argument fails. The correct answer is something the author must believe for the reasoning to work. This field guide summarizes common necessary assumption types." },
    { type: 'hr' },
    { type: 'h4', text: '1. The Bridge Assumption' },
    { type: 'paragraph', text: "The argument may use a term in the premises and a different term in the conclusion. The necessary assumption often links or equates these concepts." },
    { type: 'h4', text: '2. The Defender Assumption' },
    { type: 'paragraph', text: "The right answer may rule out a possibility that would undermine the argument (e.g., \"no other cause explains the effect\") or state that a key condition holds." },
    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "Use the Negation Test: negate the answer choice. If the argument falls apart, the assumption is necessary. The correct answer will be something the argument relies on but does not state." }
  ]
};
