import { Lesson } from '../../types';

export const Lesson3_FieldGuide: Lesson = {
  id: "7-3",
  title: "Evaluate — Common Patterns",
  content: [
    { type: 'h2', text: 'A Field Guide to Evaluate Questions' },
    { type: 'paragraph', text: "Evaluate questions ask for the one piece of information that would help you determine whether the argument's conclusion is more or less likely. The correct answer will be a question or a fact that, depending on the answer, would either strengthen or weaken the argument. This field guide summarizes common patterns so you can spot what the argument needs." },
    { type: 'hr' },
    { type: 'h4', text: '1. The Missing Baseline' },
    { type: 'paragraph', text: "Many arguments compare a group or outcome to an implied standard without stating that standard. The evaluation question will ask for the comparison group or baseline (e.g., \"How did the control group do?\")." },
    { type: 'h4', text: '2. Causal vs. Correlation' },
    { type: 'paragraph', text: "When the argument concludes that X causes Y, the correct answer often asks whether something else could explain the association or whether the direction of causation might be reversed." },
    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "The right answer will be the one that cuts to the heart of the argument's gap. If the answer is \"yes,\" the argument is stronger; if \"no,\" it is weaker." }
  ]
};
