import { Lesson } from '../../types';

export const Lesson6_HardestQuestionFactors: Lesson = {
  id: "1-6",
  title: "Hardest Question Factors",
  content: [
    { type: 'h3', text: "The Two Factors That Create the Hardest Questions" },
    { type: 'paragraph', text: "In the hardest Argument Part questions, the difficulty rarely lies in understanding the sentence itself. Instead, the challenge comes from how the answer choices describe the sentence's function. They deviate from the standard \"Premise/Conclusion\" labels in two specific ways." },
    { type: 'h4', text: "1. Arguments Referencing" },
    { type: 'paragraph', text: "In easier questions, the correct answer usually describes the role directly (e.g., *\"It is a premise offered in support of the conclusion\"*)." },
    { type: 'paragraph', text: "In the hardest questions, the answer choices often describe the target statement only by its relationship to **other specific parts** of the argument. These will not tell you what the statement *is* in isolation; it will also tell you what the statement is next to, supports, or contradicts." },
    { type: 'list', items: [
      "**Example:** Instead of saying \"It is a counter-premise,\" the answer might read: **\"It is evidence for point of view X that the argument is designed to undermine.\"**",
      "**The Challenge:** To select this answer, you cannot simply analyze the target statement. You must map the entire argument structure—the Opposing View, the Author's Conclusion, and the Evidence—and verify that the complex chain of relationships described in the answer choice matches the text exactly."
    ]},
    { type: 'h4', text: "2. Unconventional Logical Roles" },
    { type: 'paragraph', text: "Most argument parts function as **Premises** (giving support) or **Conclusions** (receiving support). The hardest questions often target statements that exist **outside** this direct chain of support." },
    { type: 'paragraph', text: "Test takers often struggle here because they rigidly try to force every statement into a \"Premise\" or \"Conclusion\" box. To succeed, you must maintain **flexibility** and recognize when a statement serves a different structural purpose, such as:" },
    { type: 'list', items: [
      "**The Phenomenon:** The statement is simply a neutral fact or observation that the rest of the argument argues about or attempts to explain. It is neither the evidence nor the conclusion; it is the *subject* of the debate.",
      "**Logical Independence:** The statement clarifies a concept or distinction but is not strictly necessary for the conclusion to be true. Its role is defined by its *compatibility* with the conclusion rather than its support for it.",
      "**Instance of a General Claim:** The statement serves as a specific illustration of a broader principle mentioned elsewhere."
    ]},
    { type: 'paragraph', text: "The key to these questions is realizing that not every sentence is a load-bearing wall. Some are windows, some are decorations, and some describe the ground the building sits on. You must be flexible enough to describe these roles on their own terms, rather than forcing them into a standard support role." }
  ]
};
