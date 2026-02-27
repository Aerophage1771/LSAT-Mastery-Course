import { Lesson } from '../../types';

export const Lesson8_AdvancedConcepts: Lesson = {
  id: '3-8',
  title: 'Advanced Concepts: Difficult Method Questions',
  content: [
    { type: 'h2', text: 'Advanced Concepts: Difficult Method Questions' },
    { type: 'paragraph', text: "As you progress, you will encounter Method of Reasoning questions that feel significantly more challenging. The difficulty on these advanced questions doesn't come from a new type of reasoning, but from an increase in complexity and abstraction. Understanding *why* a question is hard is the first step to solving it." },

    { type: 'hr' },

    { type: 'h3', text: 'The Three Difficulty Factors' },
    { type: 'paragraph', text: "Every hard Method question exploits one or more of these three factors. Knowing them in advance lets you diagnose why a question feels hard and apply the right counter-strategy:" },
    { type: 'breakdown', labels: { title: 'Difficulty Factor', text: 'What Makes It Hard' }, items: [
      { title: '1. Complex or Layered Reasoning', text: "Harder questions layer multiple techniques or rely on more formal, less intuitive logical structures. The author might not just present an analogy — they might critique an opponent's analogy by offering a *counter-analogy*, or defend a principle against a counterexample by *refining the principle*. Some arguments hinge on sophisticated logic: **Proof by Contradiction**, complex **Conditional Reasoning**, or subtle flaws in **Statistical Reasoning**.", badge: 'Structural', badgeColor: 'indigo' },
      { title: '2. Highly Abstract Answer Choices', text: "The most common feature of difficult Method questions. You might understand the stimulus perfectly, but the answer choices feel dense and impenetrable. Instead of concrete descriptions that reference the stimulus, they use generalized logical vocabulary: \"presents a counterexample to a general claim\" rather than \"uses the story of the Kelton Company to prove Joanna's rule is wrong.\"", badge: 'Language', badgeColor: 'blue' },
      { title: '3. Sophisticated Trap Answers', text: "On hard questions, trap answers are designed to be extremely tempting by mirroring the structure of valid, but different, logical moves. They exploit your partial understanding of the argument's method. Two or three choices may seem plausible, and only precise analysis separates the correct answer from the near-misses.", badge: 'Trap Design', badgeColor: 'slate' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Factor 1: Complex Reasoning in Action' },
    { type: 'paragraph', text: "Simple Method questions involve one speaker making a single logical move. Hard questions layer moves or embed arguments within arguments:" },
    { type: 'table', headers: ['Simple Question', 'Hard Question'], rows: [
      ['The author provides an analogy', 'The author critiques an opponent\'s analogy by offering a counter-analogy'],
      ['The author provides a counterexample', 'The author concedes a counterexample, then shows it\'s irrelevant by refining the rule'],
      ['The author challenges a claim', 'The author challenges a hidden assumption underlying the claim, not the claim itself'],
      ['The author predicts a negative outcome', 'The author uses proof by contradiction to derive an absurd consequence from the opponent\'s position'],
    ]},
    { type: 'paragraph', text: "The key insight: on hard questions, the method is a *combination* of moves or a move aimed at a less obvious target. Ask yourself: \"What is the author's move *really* aimed at — the stated claim, a hidden assumption, or the logical structure itself?\"" },

    { type: 'hr' },

    { type: 'h3', text: 'Factor 2: Decoding Abstract Language' },
    { type: 'paragraph', text: "The hardest part of many Method questions isn't understanding the argument — it's translating the answer choices. Here is a decoder table for the most common abstract phrases:" },
    { type: 'table', headers: ['Abstract Phrase in Answer Choice', 'Plain English Translation'], rows: [
      ['"presents a counterexample to a general claim"', 'Gives a specific case that disproves a rule'],
      ['"calls into question an assumption on which the argument depends"', 'Attacks a hidden premise'],
      ['"provides an alternative explanation for the phenomenon"', 'Offers a different cause for the observed effect'],
      ['"argues by analogy"', 'Uses a comparison to a different situation'],
      ['"derives a consequence that undermines the position"', 'Shows that the opponent\'s view leads to a bad or absurd result'],
      ['"questions the applicability of a general principle to a particular case"', 'Argues that a rule doesn\'t apply to this specific situation'],
      ['"cites a case that is inconsistent with a proposed generalization"', 'Gives a counterexample'],
      ['"rejects a causal claim by showing correlation without causation"', 'Argues that two things happening together doesn\'t prove one causes the other'],
      ['"distinguishes between two interpretations of a key term"', 'Shows that a word is being used ambiguously'],
      ['"concedes a point made by the other speaker but denies it supports the conclusion drawn"', 'Grants the evidence but disputes what it proves'],
    ]},
    { type: 'callout', variant: 'tip', title: 'The Substitution Technique', text: "When you encounter a dense answer choice, replace every abstract phrase with the actual content from the stimulus. For example, if the choice says *\"It derives a consequence that undermines the position,\"* translate: *\"the position\"* = the opponent's claim. *\"derives a consequence\"* = traces what would happen if that claim were true. *\"undermines\"* = shows it leads to something bad. Now read the translated version and check if it fits." },

    { type: 'hr' },

    { type: 'h3', text: 'Factor 3: Sophisticated Trap Types' },
    { type: 'paragraph', text: "On hard questions, trap answers are engineered to exploit specific cognitive errors. Here are the four most dangerous trap types:" },
    { type: 'breakdown', labels: { title: 'Trap Type', text: 'How It Works & How to Avoid It' }, items: [
      { title: 'The "Plausible, but Not Precise" Trap', text: "Describes a legitimate logical strategy that is *similar* to the one used in the stimulus but misses a key nuance. For example, the argument might weaken a causal claim by showing the effect occurs *without* the cause, while the trap describes weakening a causal claim by showing a *third factor* caused both.\n\n**Avoid it:** Match every element — the type of claim attacked, the evidence used, and the logical relationship — to the stimulus.", badge: 'Very Common', badgeColor: 'red' },
      { title: 'The "Mischaracterization" Trap', text: "Correctly identifies the topic or component but misdescribes what the author *does* with it. For instance, claiming the author is \"questioning a premise\" when they are actually \"challenging an unstated assumption.\"\n\n**Avoid it:** Focus on the *action verb* in the answer choice. Does the author question, reject, concede, assume, or derive? Each describes a fundamentally different move.", badge: 'Common', badgeColor: 'red' },
      { title: 'The "Too Strong / Too Weak" Trap', text: "Describes the method with an inappropriate level of certainty. Says the author \"proves the claim is false\" when they only \"cast doubt on the claim,\" or says the author \"suggests\" when they \"conclusively demonstrate.\"\n\n**Avoid it:** Match the logical force. Pay attention to the certainty of the author's language — \"proves,\" \"suggests,\" \"calls into question,\" and \"demonstrates\" are all different.", badge: 'Common', badgeColor: 'red' },
      { title: 'The "Double Description" Trap', text: "The answer choice contains two descriptions connected by \"and\" or \"by.\" One half accurately describes the argument, but the other half is wrong. Students pick it because the accurate half matches their prephrase, overlooking the inaccurate half.\n\n**Avoid it:** Verify *every clause* in the answer choice independently. Both halves must be true. If even one element contradicts the stimulus, eliminate the choice.", badge: 'Moderate', badgeColor: 'slate' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example: A Hard Method Question' },

    { type: 'hr' },

    { type: 'h3', text: 'Analysis' },
    { type: 'paragraph', text: "This question is hard because the reasoning involves a subtle *conditional test* — if X were achievable, then Y would already have happened — and the answer choices are highly abstract." },
    { type: 'breakdown', labels: { title: 'Statement', text: 'Role in the Argument' }, items: [
      { title: '"Economists predict... 15% reduction"', text: "This is the **Opposing Claim** — the position Professor Wexler is arguing against.", badge: 'Target Claim', badgeColor: 'blue' },
      { title: '"If a 15% reduction were achievable through taxation alone..."', text: "This is the **Conditional Test** — Wexler temporarily assumes the claim is true to derive a testable prediction.", badge: 'Hypothetical', badgeColor: 'slate' },
      { title: '"No country... has reduced emissions by more than 8%"', text: "This is the **Factual Evidence** — a real-world observation that contradicts the derived prediction, serving as an empirical counterexample to the economists' optimism.", badge: 'Evidence', badgeColor: 'indigo' },
      { title: '"The economists\' prediction is overly optimistic"', text: "This is the **Main Conclusion** — the prediction is rejected based on the evidence.", badge: 'Conclusion', badgeColor: 'green' },
    ]},

    { type: 'h3', text: 'Why Each Wrong Answer Fails' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Detailed Evaluation' }, items: [
      { title: '(A) providing evidence that taxation is generally ineffective...', text: "Wexler doesn't argue that carbon taxes are *ineffective* — only that the *predicted magnitude* of reduction is too optimistic. The argument is about degree, not about whether the tool works at all. This is a scope distortion.", badge: 'Too Broad', badgeColor: 'red' },
      { title: "(B) challenging the qualifications of those who made the prediction", text: "Wexler never mentions the economists' credentials or expertise. The attack is on the *claim*, not the *claimant*. This describes an ad hominem that doesn't occur.", badge: 'Out of Scope', badgeColor: 'red' },
      { title: "(C) showing that a predicted outcome has not occurred in relevantly similar circumstances...", text: "This precisely describes Wexler's method: the \"predicted outcome\" (15% reduction) \"has not occurred\" (no country exceeded 8%) \"in relevantly similar circumstances\" (countries with existing carbon taxes). Every element maps perfectly.", badge: 'Correct', badgeColor: 'green' },
      { title: "(D) offering an alternative policy that would be more effective...", text: "Wexler offers no alternative policy. The argument is purely critical — it attacks the prediction without proposing a replacement.", badge: 'Out of Scope', badgeColor: 'red' },
      { title: "(E) demonstrating that the reasoning... contains a logical contradiction", text: "This is a tempting trap because Wexler does show a kind of inconsistency. But it's not a *logical* contradiction within the economists' reasoning — it's an *empirical* mismatch between prediction and observed reality. The distinction between logical error and empirical disconfirmation is key.", badge: 'Mischaracterization', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Strategy for Hard Method Questions' },
    { type: 'paragraph', text: "When you encounter a genuinely difficult Method question, follow this disciplined process:" },
    { type: 'process', title: 'Hard Question Protocol', steps: [
      "**Map the Argument First:** Before looking at answer choices, identify the conclusion, premises, and the logical move connecting them. In your own words, name the method.",
      "**Prephrase in Plain Language:** State the method simply: \"The author uses real-world evidence to show the prediction is too optimistic.\" This is your anchor.",
      "**Translate Each Answer Choice:** For abstract choices, substitute actual stimulus content for every abstract phrase. Read the translated version and check for a precise fit.",
      "**Verify Both Halves of Compound Choices:** If an answer says \"X by Y\" or \"X and Y,\" check each part independently. Both must be true.",
      "**Eliminate by Specifics, Not Vibes:** Don't settle for \"close enough.\" On hard questions, two or three choices will seem plausible. The correct answer is flawlessly accurate; wrong answers contain at least one word that contradicts the stimulus.",
    ]},

    { type: 'callout', variant: 'default', title: 'A Mindset for Hard Questions', text: "Hard Method questions have tempting wrong answers that are \"close enough.\" The test-makers know that students with a rough understanding will gravitate toward these near-misses. Your job is to find the choice that is **flawlessly accurate** in every detail. If even one word in a choice contradicts the stimulus — the wrong action verb, the wrong target, the wrong logical force — eliminate it, no matter how good the rest of the choice sounds." },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "Hard Method of Reasoning questions exploit three factors: **(1) Complex or layered reasoning** that combines multiple logical moves, **(2) Highly abstract answer choices** that require translation into concrete terms, and **(3) Sophisticated trap answers** that mimic the structure of the correct answer but differ in one key element. Master the Substitution Technique for decoding abstract choices, verify *every clause* in compound answers, and always match the logical force (proves vs. suggests vs. casts doubt) to the author's actual language." },
  ]
};
