import { Lesson } from '../../types';

export const Lesson3_FieldGuide: Lesson = {
  id: "10-3",
  title: "Sufficient Assumption — Answer Types",
  content: [
    { type: 'h2', text: 'Sufficient Assumption — Common Answer Types' },
    { type: 'paragraph', text: "Sufficient Assumption questions ask for the answer choice that, when added to the premises, makes the argument logically valid. The correct answer will close the gap between the premises and the conclusion, often by supplying a conditional or a bridging principle. This field guide summarizes common answer patterns." },
    { type: 'hr' },
    { type: 'h4', text: '1. The Conditional Bridge' },
    { type: 'paragraph', text: "Many sufficient assumptions are conditional statements that link a concept in the premises to a concept in the conclusion (e.g., If [premise concept], then [conclusion concept])." },
    { type: 'h4', text: '2. The Quantifier or Scope Bridge' },
    { type: 'paragraph', text: "The argument may move from \"some\" or \"many\" to \"all,\" or from a part to a whole. The right answer often supplies the missing scope or quantifier link." },
    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "The correct answer is the one that makes the argument valid when added. Strip the argument to its logical form and find the missing link between premises and conclusion." }
  ]
};
