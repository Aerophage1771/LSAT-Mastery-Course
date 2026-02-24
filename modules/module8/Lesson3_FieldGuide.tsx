import { Lesson } from '../../types';

export const Lesson3_FieldGuide: Lesson = {
  id: "8-3",
  title: "Weaken — Common Answer Types",
  content: [
    { type: 'h2', text: 'A Field Guide to Weaken Questions' },
    { type: 'paragraph', text: "Weaken questions ask for the answer choice that, if true, would most undermine the argument's conclusion or the support the premises give it. The correct answer will attack the argument's assumption, evidence, or reasoning. This field guide summarizes the most common ways the test weakens an argument." },
    { type: 'hr' },
    { type: 'h4', text: '1. Attack the Causal Link' },
    { type: 'paragraph', text: "When the argument concludes that X causes Y, the right answer often suggests an alternative cause, a reversed direction (Y causes X), or a common cause of both. It can also show that the evidence is consistent with no causal link." },
    { type: 'h4', text: '2. Attack the Evidence or Sample' },
    { type: 'paragraph', text: "If the argument relies on a study, survey, or example, the correct answer may show that the sample is unrepresentative, the comparison is flawed, or the data do not support the conclusion." },
    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "The correct answer does not have to disprove the conclusion; it only has to make the conclusion less likely given the premises. Look for the choice that undermines the argument's assumption or its use of evidence." }
  ]
};
