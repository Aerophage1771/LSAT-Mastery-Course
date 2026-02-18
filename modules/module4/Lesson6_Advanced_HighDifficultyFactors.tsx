import { Lesson } from '../../types';

export const Lesson6_Advanced_HighDifficultyFactors: Lesson = {
  id: "4-6",
  title: "Advanced: High-Difficulty Factors",
  content: [
    { type: 'h3', text: "Core Traits of High-Difficulty Parallel Reasoning Questions" },
    { type: 'paragraph', text: "The hardest Parallel Reasoning questions move beyond simple, one-step logical inferences. They are designed to be time-consuming and cognitively demanding by layering complexity in specific ways. The primary difficulty factors fall into three main categories: the complexity of the logical structure itself, the abstract nature of the reasoning, and the deceptive design of the answer choices." },
    
    { type: 'h4', text: "1. Complex or Obscure Logical Structures" },
    { type: 'paragraph', text: "Easy questions use straightforward patterns (e.g., A→B, A, so B). Hard questions use structures that are less common or require multiple steps to deconstruct." },
    { type: 'list', items: [
      "**Multi-Step Formal Logic:** The argument isn't a single inference but a chain of them. It might combine different types of logic, such as a conditional rule with a quantifier (\"All,\" \"Some\"). Success requires flawlessly tracking each logical step.",
      "**Non-Standard Phrasing:** The logical connectors are disguised in conversational language. Instead of a clear \"If...then,\" the argument might use phrases like \"X is impossible without Y,\" \"The only way for X is Y,\" or \"X requires Y,\" all of which must be translated precisely into formal conditional statements.",
      "**Matching Flaws, Not Validity:** The stimulus contains a logical error, and the task is to find the answer choice that commits the *exact same* error. This is doubly difficult because you must first accurately diagnose a subtle flaw (e.g., distinguishing an error of composition from an error of division) and then find its perfect structural twin."
    ]},

    { type: 'h4', text: "2. Abstract or \"Meta\" Reasoning" },
    { type: 'paragraph', text: "These questions require you to parallel a line of reasoning that is not a direct proof but a more abstract concept about logic, knowledge, or evidence itself." },
    { type: 'list', items: [
      "**Reasoning about Principles:** The stimulus doesn't just state a fact; it illustrates a broader principle (e.g., the precautionary principle, the idea that a remedy can be worse than the disease, the principle of retributive justice). The parallel is not just in the formal structure but in the *type* of principle being applied.",
      "**Epistemological Arguments (Reasoning about Knowledge):** The argument is about *how we know things*. It might focus on concepts like survivor bias (where we only have data from failures), the limits of historical evidence, or the way language can bias perception.",
      "**Paradoxical or Self-Referential Logic:** The reasoning leads to a paradox or a seemingly contradictory outcome. For example, an argument might show how an action designed to achieve a goal makes that goal harder to achieve."
    ]},

    { type: 'h4', text: "3. Deceptive Answer Choice Design" },
    { type: 'paragraph', text: "Even with a clear understanding of the stimulus, the answer choices are crafted to be misleading and time-consuming." },
    { type: 'list', items: [
      "**\"Close-but-No-Cigar\" Distractors:** Wrong answer choices are designed to be structurally very similar to the correct answer, differing by only one subtle element. This could be a change in quantifier (\"all\" vs. \"most\") or a flipped conditional relationship.",
      "**Topical Traps (Semantic Similarity):** A wrong answer choice will use the same subject matter as the stimulus to attract test-takers who are matching topic instead of structure. Conversely, the correct answer may have a wildly different topic.",
      "**Scrambled Order:** The correct answer will present the premises and conclusion in a different order than the stimulus. For example, the stimulus might present \"Premise 1, Premise 2, therefore Conclusion,\" while the correct answer presents \"Conclusion, because Premise 1 and Premise 2.\" This forces you to reassemble the argument mentally."
    ]}
  ]
};
