import { Lesson } from '../../types';

export const Lesson3_FieldGuide: Lesson = {
  id: "20-3",
  title: "Agree/Disagree — Common Patterns",
  content: [
    { type: 'h2', text: 'A Field Guide to Agree/Disagree (Point at Issue)' },
    { type: 'paragraph', text: "Agree/Disagree questions present two speakers and ask either what they disagree about (Point at Issue) or what they agree about (Point of Agreement). The correct answer will capture the precise proposition at stake. This field guide summarizes common patterns." },
    { type: 'hr' },
    { type: 'h4', text: 'Part A: Disagreement' },
    { type: 'paragraph', text: "The two speakers may disagree about a definitional rule, an explanatory cause, or a clash of criteria. The right answer will be a claim that one speaker accepts and the other rejects." },
    { type: 'h4', text: 'Part B: Agreement' },
    { type: 'paragraph', text: "When the question asks for point of agreement, the correct answer will be something both speakers assume or accept—often a shared assumption, shared diagnosis, or common premise." },
    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "For disagreement: find the proposition that one says yes to and the other says no to. For agreement: find what both assume or accept. Avoid answers that only one speaker discusses." }
  ]
};
