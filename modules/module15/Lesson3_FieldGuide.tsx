import { Lesson } from '../../types';

export const Lesson3_FieldGuide: Lesson = {
  id: "15-3",
  title: "Fill in the Blank — Common Answer Types",
  content: [
    { type: 'h2', text: 'A Field Guide to Fill in the Blank' },
    { type: 'paragraph', text: "Fill in the Blank questions ask you to identify the missing conclusion or premise that completes the argument's logical structure. The blank may appear at the end (missing conclusion) or in the middle (missing premise). This field guide summarizes common answer types." },
    { type: 'hr' },
    { type: 'h4', text: '1. Mechanistic and Causal Chains' },
    { type: 'paragraph', text: "When the argument describes a process or cause-effect chain, the blank often completes a step in that chain or states the implied conclusion." },
    { type: 'h4', text: '2. Analogies and Problem-Solution' },
    { type: 'paragraph', text: "The missing piece may complete an analogy, state the solution that follows from a problem, or complete a conditional or quantifier structure." },
    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "The correct answer will fit the argument's structure and tone. It must follow from the premises (if it's a conclusion) or support the conclusion (if it's a premise)." }
  ]
};
