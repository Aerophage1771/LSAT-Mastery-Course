import { Lesson } from '../../types';

export const Lesson3_FieldGuide: Lesson = {
  id: "6-3",
  title: "Parallel Flaw — Common Patterns",
  content: [
    { type: 'h2', text: 'A Field Guide to Parallel Flaw' },
    { type: 'paragraph', text: "Parallel Flaw questions ask you to find the answer choice that repeats the same logical error as the stimulus in a new context. The stimulus will contain a flawed argument; your job is to identify that flaw and then match its structure in the correct answer. This field guide summarizes the most common flaw types that appear in Parallel Flaw questions so you can spot them quickly." },
    { type: 'hr' },
    { type: 'h4', text: '1. Conditional Logic Flaws' },
    { type: 'paragraph', text: "Many Parallel Flaw stimuli involve a misuse of conditional (if-then) reasoning. The same errors that appear in Flaw questions show up here: mistaken reversal, mistaken negation, and confusing necessary with sufficient conditions. The correct answer will mirror that invalid move with different subject matter." },
    { type: 'paragraph', text: "How to Spot It: Look for language like *if*, *then*, *only if*, *unless*, or *requires* in the stimulus. The conclusion will draw an invalid inference from a conditional premise." },
    { type: 'hr' },
    { type: 'h4', text: '2. Causal and Correlation Flaws' },
    { type: 'paragraph', text: "Another common pattern is treating correlation as causation, reversing cause and effect, or ignoring a common cause. The parallel answer will make the same causal mistake with different content." },
    { type: 'paragraph', text: "How to Spot It: The stimulus will observe that two things go together or that one follows the other, then conclude that one causes the other without ruling out alternatives." },
    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "In Parallel Flaw, strip away the topic and focus on the *structure* of the error. The right answer will have the same flawed move as the stimulus, expressed in different words." }
  ]
};
