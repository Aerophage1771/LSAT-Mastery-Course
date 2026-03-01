import { Lesson } from '../../types';

export const Lesson6_TheExplanation: Lesson = {
  id: "2-6",
  title: "Lesson 3: The Explanation (PT-128-S-2-Q-13)",
  content: [
    { type: 'h2', text: 'The Explanatory Argument' },
    { type: 'paragraph', text: "Most arguments try to prove *that* something is true. Explanatory arguments are different: they take a phenomenon — an event or observation that everyone already accepts — and try to explain *why* it happened. The main conclusion is the proposed cause, and the premises describe the mechanism that connects the cause to the effect. Recognizing this structure is essential because it reverses the usual relationship between facts and conclusions." },

    { type: 'hr' },

    { type: 'h3', text: 'The Explanation Structure' },
    { type: 'paragraph', text: "Every explanatory argument follows a three-part pattern. The author presents a known fact, proposes a cause, and then walks you through the evidence showing how that cause produces the effect:" },
    { type: 'process', title: 'Phenomenon → Explanation → Supporting Evidence', steps: [
      '**Phenomenon:** A known event or observation is presented — something everyone agrees is true. ("The ice ages occurred.")',
      '**Explanation (Main Conclusion):** The author proposes a cause for the phenomenon. ("Vegetation growth caused the ice ages.")',
      '**Supporting Evidence (Premises):** The author describes the step-by-step mechanism connecting the cause to the effect. ("Vegetation depletes CO₂ → less CO₂ means less heat retention → cooling occurs.")',
    ]},
    { type: 'callout', variant: 'tip', title: 'Phenomenon vs. Conclusion', text: "Don't confuse the phenomenon with the conclusion. The **phenomenon** is the undisputed fact that everyone accepts — it's the *what*. The **conclusion** is the author's proposed cause — it's the *why*. No one disputes that the ice ages occurred (phenomenon). What the author argues is *what caused them* (conclusion). If a statement is taken as a given and the rest of the argument tries to explain it, that statement is the phenomenon, not the conclusion." },

    { type: 'hr' },

    { type: 'h3', text: 'Explanation vs. Simple Argument' },
    { type: 'paragraph', text: "Understanding how explanatory arguments differ from standard arguments will help you avoid misidentifying the conclusion:" },
    { type: 'table', headers: ['Feature', 'Simple Argument', 'Explanatory Argument'], rows: [
      ['Goal', 'Prove *that* something is true', 'Explain *why* something is true'],
      ['Main Conclusion', 'A claim the author wants you to accept', 'A proposed cause for a known event'],
      ['Premises', 'Evidence that the conclusion is true', 'Mechanism showing *how* the cause leads to the effect'],
      ['Phenomenon', 'Usually absent', 'Always present — the known event being explained'],
      ['Direction', 'Evidence → Claim', 'Known Fact → Proposed Cause → Mechanism'],
      ['Key question', '"Should I believe this?"', '"What made this happen?"'],
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Causal Language Indicators' },
    { type: 'paragraph', text: "Explanatory arguments are loaded with causal language. Recognizing these phrases helps you quickly identify that you're dealing with an explanation and locate the proposed cause:" },
    { type: 'table', headers: ['Indicator Phrase', 'What It Signals', 'Example'], rows: [
      ['*The reason for this is...*', 'Directly introduces the proposed cause (conclusion)', '"The reason for this is a metabolic quirk of the brain."'],
      ['*This is because...*', 'Introduces cause or supporting mechanism', '"This is because vegetation depletes CO₂."'],
      ['*X is caused by Y*', 'States the causal claim directly', '"The ice ages were caused by vegetation growth."'],
      ['*This is explained by...*', 'Points to the explanatory conclusion', '"This is explained by the brain\'s reliance on glucose."'],
      ['*Due to / Because of*', 'Links an effect back to its cause', '"Due to excessive vegetation, CO₂ levels dropped."'],
      ['*There is little doubt that...*', 'Signals high confidence in the causal claim', '"There is little doubt that vegetation caused the ice ages."'],
      ['*X is probably a result of Y*', 'Proposes a probable cause', '"The decline is probably a result of habitat loss."'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    {
      type: 'question-card',
      id: 'PT-128-S-2-Q-13',
      stimulus: 'Scientist: There is little doubt that the ice ages were caused by the unusually rich growth of vegetation worldwide. Since vegetation converts carbon dioxide into oxygen, excessive vegetation would have depleted the carbon dioxide in the atmosphere. Carbon dioxide helps the atmosphere retain the sun\'s heat. Thus, if this carbon dioxide is depleted, the earth cools significantly, thereby causing an ice age.',
      question: 'Which one of the following most accurately expresses the main conclusion of the scientist\'s argument?',
      options: [
        '**(A)** Excessive growth of vegetation worldwide could have caused one or more ice ages by depleting the carbon dioxide in the atmosphere.',
        '**(B)** If the carbon dioxide in the atmosphere is depleted, the earth cools significantly, thereby causing an ice age.',
        '**(C)** An excessive growth of vegetation causes the carbon dioxide in the atmosphere to be depleted.',
        '**(D)** If unusually rich growth of vegetation caused the ice ages, it undoubtedly did so by depleting the carbon dioxide in the atmosphere.',
        '**(E)** Unusually rich growth of vegetation worldwide was almost certainly the cause of the ice ages. (Correct) [85%]',
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Structural Map' },
    { type: 'paragraph', text: "Let's trace the argument's structure using the Explanation Pattern:" },
    { type: 'process', title: 'The Argument Chain', steps: [
      '**Phenomenon (Sentence 1):** The ice ages occurred. (Undisputed fact — the \"what.\")',
      '**Main Conclusion (Sentence 1):** \"There is little doubt that the ice ages were caused by the unusually rich growth of vegetation worldwide.\" (The proposed cause — the \"why.\")',
      '**Premise (Sentence 2):** Vegetation converts CO₂ into oxygen → excessive vegetation depletes CO₂. (First link in the mechanism.)',
      '**Premise (Sentence 3):** CO₂ helps the atmosphere retain heat. (Second link.)',
      '**Intermediate Conclusion (Sentence 4):** \"Thus, if CO₂ is depleted, the earth cools significantly.\" (Final link — draws from the premises but supports the main conclusion.)',
    ]},
    { type: 'paragraph', text: "The word \"Thus\" in Sentence 4 is a classic trap trigger. It introduces an intermediate conclusion, not the main conclusion. The main conclusion appears in Sentence 1 — the overarching causal claim about what caused the ice ages." },

    { type: 'h3', text: 'Why Test Confirmation' },
    { type: 'paragraph', text: "*Why* is there little doubt that vegetation caused the ice ages? **Because** vegetation depletes CO₂, CO₂ retains heat, and without CO₂ the earth cools. The entire mechanism (Sentences 2–4) answers the \"why\" for Sentence 1. Confirmed: Sentence 1 is the main conclusion." },

    { type: 'hr' },

    { type: 'h3', text: 'Answer Choice Analysis' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) Excessive growth... could have caused one or more ice ages...', text: 'The author states there is "little doubt" (near certainty), but this choice says "could have" (mere possibility). This dramatically weakens the author\'s claim. When an answer downgrades the certainty level, it distorts the conclusion.', badge: 'Trap: Certainty Downgrade', badgeColor: 'red' },
      { title: '(B) If the carbon dioxide... is depleted, the earth cools significantly...', text: 'This restates the final sentence, which is the **intermediate conclusion**. It explains one link in the mechanism but is not the overarching causal claim. The word "Thus" before this sentence is a trap — it signals a sub-conclusion, not the main point.', badge: 'Trap: Intermediate Conclusion', badgeColor: 'red' },
      { title: '(C) An excessive growth of vegetation causes the carbon dioxide... to be depleted.', text: 'This restates Sentence 2, which is a **premise** — one step in the mechanism. It\'s true according to the argument, but it\'s evidence for the conclusion, not the conclusion itself.', badge: 'Trap: The Premise', badgeColor: 'red' },
      { title: '(D) If unusually rich growth of vegetation caused the ice ages, it undoubtedly did so by depleting CO₂...', text: 'This converts the author\'s categorical claim ("vegetation caused the ice ages") into a **conditional** ("If vegetation caused the ice ages..."). The author doesn\'t hedge with "if" — the author asserts this as near-certain fact.', badge: 'Trap: Conditional Conversion', badgeColor: 'red' },
      { title: '(E) Unusually rich growth of vegetation worldwide was almost certainly the cause of the ice ages.', text: 'Perfect match. "Almost certainly" faithfully paraphrases "There is little doubt." This captures the main causal claim — the proposed cause of the phenomenon — at the correct scope and certainty level.', badge: 'Correct', badgeColor: 'green' }
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. Identify the phenomenon first.** Ask: \"What known fact is the author trying to explain?\" The explanation of that fact is the main conclusion.\n**2. The mechanism is not the conclusion.** Premises describe *how* the cause works. The conclusion is the proposed cause itself.\n**3. Match the author's certainty.** \"There is little doubt\" ≠ \"could have.\" Answers that shift certainty up or down are distortions.\n**4. Beware the final \"Thus.\"** In explanatory arguments, the final sentence often completes the mechanism chain, not the main point. Always check whether it supports an earlier, broader claim." }
  ]
};
