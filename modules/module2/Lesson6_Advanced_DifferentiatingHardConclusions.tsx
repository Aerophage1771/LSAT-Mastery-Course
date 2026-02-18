import { Lesson } from '../../types';

export const Lesson6_Advanced_DifferentiatingHardConclusions: Lesson = {
  id: "2-6",
  title: "Advanced Skills - Differentiating Hard Conclusions",
  content: [
    { type: 'h3', text: "Lesson 6: Differentiating Hard Conclusions" },
    { type: 'paragraph', text: "In the previous lessons, you learned the common locations for the main conclusion: the beginning (Concise Rebuttal), the middle (Middle Pivot), and the end (Final Conclusion). In most cases, identifying the structure and applying the \"Why Test\" will lead you directly to the answer." },
    { type: 'paragraph', text: "However, the hardest Main Conclusion questions are designed to punish superficial reading and reward precise logical analysis. They use your familiarity with indicators and locations against you. This lesson covers the four key characteristics that distinguish these high-difficulty questions." },
    { type: 'hr' },
    { type: 'h4', text: "1. The Intermediate Conclusion Trap" },
    { type: 'list', items: [
      "**The Trap:** An argument ends with a sentence starting with \"Thus.\" You assume this must be the main point. However, this \"Thus\" statement is actually a sub-conclusion that serves as evidence for a different claim buried in the middle or stated at the start.",
      "**The Skill:** Never assume a conclusion is the \"main\" one just because it has an indicator. You must apply the \"Why Test\" between the two most likely candidates. The main conclusion is the one that is supported by other statements but supports nothing else in return."
    ]},
    { type: 'h4', text: "2. Matching Logical Force (The Conditional Paraphrase)" },
    { type: 'list', items: [
      "**The Trap:** The author's conclusion is a claim of probability or fact (e.g., \"It is *likely* that the project will fail\"). The tempting distractor turns this into a rigid conditional rule (e.g., \"**If** the project continues, **then** it will fail\").",
      "**The Skill:** Be extremely precise. \"Likely\" is not the same as \"will.\" \"Usually\" is not the same as \"always.\" The correct answer must match the author's level of certainty and the scope of the claim exactly. An answer choice that is logically \"stronger\" than the author's actual claim is a common distortion trap."
    ]},
    { type: 'h4', text: "3. The Logic-Flip (Direction of the Arrow)" },
    { type: 'list', items: [
      "**The Trap:** The author concludes that X is a *required* condition for Y (Y $\\rightarrow$ X). The wrong answer choice states that X is *sufficient* for Y (X $\\rightarrow$ Y). Because the answer choice uses the same words as the stimulus, it looks like a perfect match to the untrained eye.",
      "**The Skill:** When you see \"if,\" \"only if,\" \"requires,\" or \"depends on,\" you must map the direction of the logical relationship. The correct answer must preserve the same sufficient and necessary conditions as the author’s original conclusion."
    ]},
    { type: 'h4', text: "4. Detailed Facts vs. Subtle Evaluation" },
    { type: 'list', items: [
      "**The Trap:** You choose an answer that provides a \"summary\" of the most interesting data in the stimulus. You feel like this choice \"covers more ground.\" However, a summary of evidence is just a summary of premises.",
      "**The Skill:** Remember that the main conclusion is the argument's *goal*, not its *content*. Often, the **detailed facts** of the stimulus—the data, the numbers, the study results—are entirely there to support a very simple, single-sentence judgment. Don't pick the choice that contains the most information; pick the one that is the destination of the logic."
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Summary of Difficulty Factors" },
    { type: 'breakdown', labels: { title: 'Factor', text: 'Expectation vs. Reality' }, items: [
      {
        title: "Indicators",
        text: "Expectation: \"Thus\" marks the Main Conclusion.\nReality: \"Thus\" marks an Intermediate Conclusion.",
        badge: "Trap",
        badgeColor: "red"
      },
      {
        title: "Logical Force",
        text: "Expectation: Choice matches the author's certainty.\nReality: Choice turns a \"likely\" into an \"If/Then\" rule.",
        badge: "Mismatch",
        badgeColor: "red"
      },
      {
        title: "Directionality",
        text: "Expectation: Choice uses the same terms as the stimulus.\nReality: Choice flips the sufficient and necessary conditions.",
        badge: "Reversal",
        badgeColor: "red"
      },
      {
        title: "Factual Detail",
        text: "Expectation: The conclusion is the most detailed part.\nReality: The premises are detailed; the conclusion is a dry judgment.",
        badge: "Distraction",
        badgeColor: "slate"
      }
    ]},
    { type: 'paragraph', text: "By mastering these four distinctions, you will be prepared to navigate the most sophisticated traps on the LSAT." }
  ]
};
