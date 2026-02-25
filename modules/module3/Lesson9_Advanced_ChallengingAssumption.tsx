import { Lesson } from '../../types';

export const Lesson9_Advanced_ChallengingAssumption: Lesson = {
  id: '3-9',
  title: 'Advanced Lesson 1: Challenging an Assumption',
  content: [
    { type: 'h2', text: 'Advanced Lesson 1: Challenging an Unstated Assumption (Method of Reasoning)' },
    { type: 'h3', text: 'Concept Focus: Challenging an Unstated Assumption' },
    { type: 'paragraph', text: "This lesson covers one of the most sophisticated methods of rebuttal. On the surface, an argument might seem sound. But often, its logic only works because the author is secretly relying on an unstated belief — a necessary premise that they never say out loud. A powerful way to attack such an argument is to identify this hidden premise and show that it's false. This collapses the entire logical structure." },
    { type: 'paragraph', text: "The hidden assumption is the invisible bridge between the stated evidence and the conclusion. Remove the bridge, and the argument falls apart — even if all the stated premises remain true." },

    { type: 'hr' },

    { type: 'h3', text: 'The Assumption Challenge Pattern' },
    { type: 'paragraph', text: "When a speaker challenges an unstated assumption, the argument follows a specific structural pattern. Recognizing this pattern is key to identifying the method:" },
    { type: 'process', title: 'How the Method Works', steps: [
      "**Speaker A States an Argument:** Speaker A presents stated premises and draws a conclusion. The argument appears complete on the surface.",
      "**Identify the Logical Gap:** Between the stated evidence and the conclusion, there is a gap — a belief that must be true for the conclusion to follow, but which is never explicitly stated.",
      "**Speaker B Introduces New Information:** Speaker B brings in a fact that seems to come out of nowhere. This new information is the denial of the hidden assumption.",
      "**The Assumption Is Exposed as False:** By showing the hidden assumption is wrong, Speaker B breaks the logical link between evidence and conclusion.",
      "**The Opposite Conclusion Follows:** With the assumption removed, the same evidence now supports a different (often opposite) conclusion.",
    ]},

    { type: 'h3', text: 'Stated vs. Implicit Premises' },
    { type: 'paragraph', text: "The LSAT makes a sharp distinction between what is written on the page and what is logically required but never written. Understanding this distinction is essential:" },
    { type: 'table', headers: ['Feature', 'Stated Premise', 'Implicit (Unstated) Premise'], rows: [
      ['Where is it?', 'Explicitly written in the stimulus', 'Not written — must be inferred'],
      ['Is it attacked?', 'Can be attacked ("Your facts are wrong")', 'Can be attacked ("Your interpretation is flawed")'],
      ['How to identify it', 'Look for it in the text', 'Ask: "What must be true for this conclusion to follow?"'],
      ['LSAT terminology', '"stated premise," "evidence," "grounds"', '"assumption," "presumption," "presupposition"'],
      ['Example', '"Yeast is a leaven"', '"The leaven mentioned in the text must be yeast"'],
      ['When attacked, the attacker...', 'Says the evidence itself is false or unreliable', 'Accepts the evidence but shows the logical leap is unjustified'],
    ]},

    { type: 'callout', variant: 'tip', title: 'How to Spot Hidden Assumptions', text: "Use these three techniques to uncover hidden assumptions:\n\n**1. The Gap Test:** Read the stated premises and the conclusion. Is there a logical leap? What belief would fill that gap?\n\n**2. The Negation Test:** Negate your candidate assumption. If the argument falls apart when the assumption is denied, you've found it.\n\n**3. The \"Out of Nowhere\" Signal:** In dialogues, when Speaker B introduces a fact that seems unrelated to Speaker A's stated evidence, that new fact is almost always the denial of a hidden assumption." },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'question-card', id: 'challenging-assumption-worked', questionType: 'Method of Reasoning', difficulty: 'medium',
      stimulus: "Rifka: We do not need to stop and ask for directions. We would not need to do that unless, of course, we were lost.\nCraig: The fact that we are lost is precisely why we need to stop.",
      question: "In the exchange above, the function of Craig's comment is to",
      options: [
        "(A) contradict the conclusion of Rifka's argument without offering any reason to reject any of Rifka's implicit premises",
        "(B) deny one of Rifka's implicit premises and thereby arrive at a different conclusion (Correct)",
        "(C) imply that Rifka's argument is invalid by accepting the truth of its premises while rejecting its conclusion",
        "(D) provide a counterexample to Rifka's generalization",
        "(E) affirm the truth of the stated premise of Rifka's argument while remaining noncommittal about its conclusion"
      ]
    },

    { type: 'hr' },

    { type: 'h3', text: 'Step 1: Deconstruct the Argument' },
    { type: 'paragraph', text: "To understand Craig's method, we must first expose the hidden structure of Rifka's argument:" },
    { type: 'breakdown', labels: { title: 'Component', text: 'Analysis' }, items: [
      { title: "Rifka's Stated Premise", text: "\"We would not need to ask for directions unless we were lost.\" Translation: The *only* reason to ask for directions is if we are lost.", badge: 'Stated', badgeColor: 'blue' },
      { title: "Rifka's Conclusion", text: "\"We do not need to stop and ask for directions.\"", badge: 'Conclusion', badgeColor: 'indigo' },
      { title: "Rifka's Hidden Assumption", text: "*We are not lost.* This is never stated, but Rifka's argument only works if it's true. If they *are* lost, then by her own rule, they *would* need to ask.", badge: 'Implicit', badgeColor: 'slate' },
      { title: "Craig's Response", text: "\"The fact that we are lost...\" — Craig directly attacks the hidden assumption by stating its opposite. He declares \"we are lost,\" which, combined with Rifka's own stated rule, yields the opposite conclusion: they *do* need to stop.", badge: 'Denies Assumption', badgeColor: 'green' },
    ]},

    { type: 'h3', text: 'Step 2: Characterize the Method and Prephrase' },
    { type: 'paragraph', text: "Craig finds the hidden assumption in Rifka's argument (that they aren't lost), states that it's false, and uses Rifka's own rule to reach the opposite conclusion." },
    { type: 'callout', title: 'Prephrase', text: "Craig denies Rifka's unstated assumption that they aren't lost, which — combined with her own rule — supports the opposite conclusion.", variant: 'tip' },

    { type: 'h3', text: 'Step 3: Evaluate the Answer Choices' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Detailed Evaluation' }, items: [
      { title: "(A) contradict the conclusion... without offering any reason to reject any of Rifka's implicit premises", text: "This gets it exactly backward. Craig *does* offer a reason to reject her implicit premise — he states directly that \"we are lost.\" The key word \"without\" makes this choice factually incorrect.", badge: 'Factual Error', badgeColor: 'red' },
      { title: "(B) deny one of Rifka's implicit premises and thereby arrive at a different conclusion", text: "This is a precise match. Craig \"denies one of Rifka's implicit premises\" (says they *are* lost) and \"arrives at a different conclusion\" (they need to stop). Every element maps perfectly to the argument.", badge: 'Correct', badgeColor: 'green' },
      { title: "(C) imply that Rifka's argument is invalid by accepting the truth of its premises while rejecting its conclusion", text: "This is a tempting trap describing a *reductio ad absurdum*. But Craig does *not* accept all of Rifka's premises — he specifically denies the unstated one. The word \"accepting\" makes this choice wrong.", badge: 'Mischaracterization', badgeColor: 'red' },
      { title: "(D) provide a counterexample to Rifka's generalization", text: "Rifka doesn't make a generalization that Craig disproves with a specific case. Craig's move is to deny a hidden assumption, not to show that a rule has an exception.", badge: 'Wrong Method', badgeColor: 'red' },
      { title: "(E) affirm the truth of the stated premise... while remaining noncommittal about its conclusion", text: "Craig is the *opposite* of noncommittal — he explicitly states the contrary conclusion (\"precisely why we need to stop\"). The word \"noncommittal\" disqualifies this choice.", badge: 'Factual Error', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', title: 'Key Takeaways', variant: 'summary', text: "*   **Look for Logical Gaps:** Advanced Method questions often test your ability to spot what's *missing*. If an argument jumps from evidence to a conclusion, ask: \"What must the author believe for this to make sense?\" That's the unstated assumption.\n*   **Distinguish Stated vs. Implicit Premises:** The LSAT makes a sharp distinction between what is written on the page (stated) and what is logically required but not written (implicit/unstated). An answer choice that says \"attacks a stated premise\" is fundamentally different from one that says \"attacks an unstated assumption.\"\n*   **The \"Out of Nowhere\" Signal:** In dialogues, when Speaker B introduces a fact that seems unrelated to Speaker A's stated evidence, that new fact is almost always the denial of a hidden assumption.\n*   **LSAT Vocabulary:** \"Presumption,\" \"presupposition,\" and \"assumption\" all mean the same thing — a hidden premise that the argument depends on but never states." },
  ]
};
