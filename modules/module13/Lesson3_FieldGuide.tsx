import { Lesson } from '../../types';

export const Lesson3_FieldGuide: Lesson = {
  id: "13-3",
  title: "Principle-Apply — Common Patterns",
  content: [
    { type: 'h2', text: 'A Field Guide to Principle-Apply' },
    { type: 'paragraph', text: "Principle-Apply questions give you a general rule or principle and ask you to find the answer choice that describes a situation that follows that rule. The correct answer will match the logical structure of the principle, not just its topic. This field guide summarizes common application patterns." },
    { type: 'hr' },
    { type: 'h4', text: '1. Direct Application' },
    { type: 'paragraph', text: "The stimulus states a conditional or universal rule; the right answer will be a specific case that satisfies the rule's conditions and therefore its conclusion." },
    { type: 'h4', text: '2. Contrapositive and Definitional Match' },
    { type: 'paragraph', text: "When the principle involves \"only if\" or necessary conditions, the correct answer may apply the contrapositive or match a definitional checklist given in the principle." },
    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "Match structure, not subject matter. The correct answer will be the one that instantiates the principle's logic in a new scenario." }
  ]
};
