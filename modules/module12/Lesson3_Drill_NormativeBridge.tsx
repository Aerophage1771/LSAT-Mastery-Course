import { Lesson } from '../../types';

export const Lesson3_Drill_NormativeBridge: Lesson = {
  id: "12-3",
  title: "Drill: Strengthening with a Normative Bridge (PT-117-S-4-Q-2)",
  content: [
    { type: 'h2', text: 'The Normative Bridge' },
    { type: 'paragraph', text: "The Normative Bridge is the most fundamental and frequently tested principle pattern on the LSAT. It addresses a classic problem in logic and philosophy: the **\"is-ought\" gap**. Arguments that use this pattern present factual evidence — what *is* the case — and then leap to a normative conclusion — what *should be* the case. Without a principle that explicitly connects the descriptive to the prescriptive, the leap is logically unjustified." },
    { type: 'paragraph', text: "The philosopher David Hume first identified this gap in the 18th century, arguing that you can never derive an \"ought\" purely from an \"is.\" The LSAT operationalizes this insight: whenever an argument moves from facts to values, from descriptions to prescriptions, from observations to judgments, there is a logical gap that requires a normative bridge — a general rule stating that this type of fact warrants this type of judgment." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Spot a Normative Bridge Gap' },
    { type: 'paragraph', text: "Use this quick diagnostic:" },
    { type: 'list', items: [
      '**Check the premises:** Are they *descriptive*? Do they state facts, observations, or characteristics? ("The policy causes X," "The action has Y effect," "The person did Z.")',
      '**Check the conclusion:** Is it *prescriptive* or *evaluative*? Does it make a value judgment? ("The policy is wrong," "The action should not be taken," "The person is blameworthy.")',
      '**If YES to both:** The argument has an is-ought gap. The correct principle will bridge from the type of fact described to the type of value judgment reached.',
    ]},
    { type: 'callout', variant: 'default', title: 'The Is-Ought Template', text: "**Evidence (IS):** \"X has property P\" (a factual claim)\n\n**Conclusion (OUGHT):** \"X should be Q\" (a value judgment)\n\n**Missing Principle:** \"Anything that has property P should be Q\" (the normative bridge)\n\nThe principle converts a factual property into a normative verdict. Without it, the jump from description to prescription has no logical foundation." },

    { type: 'h4', text: 'Common Normative Bridge Variations' },
    { type: 'table', headers: ['Evidence Type', 'Conclusion Type', 'Principle Bridges From → To'], rows: [
      ['An action causes harm', 'The action is immoral', 'Harm → Moral wrongness'],
      ['A policy has a certain effect', 'The policy should be rejected', 'Negative effect → Policy rejection'],
      ['A person has a certain motive', 'The person is blameworthy', 'Bad motive → Moral culpability'],
      ['A rule produces unfairness', 'The rule should be changed', 'Unfairness → Obligation to reform'],
      ['An entity has a certain characteristic', 'The entity deserves a certain treatment', 'Characteristic → Deserved treatment'],
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Drill: The Normative Bridge (PT-117-S-4-Q-2)' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: 'PT-117-S-4-Q-2',
      questionType: 'Principle-Strengthen',
      difficulty: 'medium',
      stimulus: "Pacifist: It is immoral to do anything that causes harm to another person. But, since using force causes harm to another person, it is also immoral to threaten to use force, even when such a threat is made in self-defense.",
      question: "Which one of the following principles, if valid, would most help to justify the pacifist's reasoning?",
      options: [
        "(A) Given the potential harm caused by the use of force, the line between use of force in self-defense and the aggressive use of force is always vague.",
        "(B) It is immoral to threaten to do what it is immoral to do. (Correct)",
        "(C) It is immoral to do anything that causes more harm than good.",
        "(D) Whether a threat made in self-defense is immoral depends on the circumstances.",
        "(E) It is immoral to carry out a threat if making the threat is itself immoral.",
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "Let's dissect the argument layer by layer, identifying each logical move the pacifist makes." },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: '"It is immoral to do anything that causes harm to another person."', text: "This is the foundational moral premise — a broad ethical rule. The pacifist starts by asserting a universal normative standard: harm-causing actions are immoral. This will serve as the argument's starting point." },
      { title: '"But, since using force causes harm to another person..."', text: "This is a factual bridge premise. It connects the act of \"using force\" to the category of \"causing harm.\" This allows the pacifist to apply the moral rule from premise 1 to the specific action of using force. At this point, the implied intermediate conclusion is: *using force is immoral* (because it causes harm, and causing harm is immoral)." },
      { title: '"...it is also immoral to threaten to use force, even when such a threat is made in self-defense."', text: "This is the main conclusion. The pacifist extends the moral judgment about *using force* to *threatening to use force*. Notice the word \"also\" — it signals that the same moral quality (immorality) that applies to using force is now being applied to the threat of force. This is the argument's critical logical leap." },
    ]},

    { type: 'h4', text: 'Step 2: Identify the Logical Leap' },
    { type: 'paragraph', text: "The argument establishes a clear chain up to a certain point:" },
    { type: 'list', ordered: true, items: [
      'Causing harm → Immoral (Premise 1)',
      'Using force → Causes harm (Premise 2)',
      'Therefore: Using force → Immoral (Valid intermediate conclusion from 1 + 2)',
      '**Therefore: Threatening to use force → Immoral (MAIN CONCLUSION — this is the leap)**',
    ]},
    { type: 'paragraph', text: "Steps 1–3 are logically sound. But Step 4 introduces a new concept — *threatening* to do something — and declares it immoral on the basis that the *act itself* is immoral. The argument never provides a rule that connects the morality of an action to the morality of a threat to perform that action. This is the gap." },
    { type: 'callout', variant: 'default', title: 'Classifying the Gap', text: "This is a **Normative Bridge** gap, but of a specific subtype: the argument moves from one moral judgment (\"using force is immoral\") to a *related* moral judgment (\"threatening to use force is immoral\"). The bridge needed is not fact-to-value, but value-to-value: a principle stating that the moral status of an action transfers to the moral status of threatening that action." },

    { type: 'h4', text: 'Step 3: Pre-phrase the Principle' },
    { type: 'paragraph', text: "The argument needs a general rule that connects the morality of an act to the morality of threatening to perform that act. In abstract terms:" },
    { type: 'paragraph', text: "***\"If doing X is immoral, then threatening to do X is also immoral.\"***" },
    { type: 'paragraph', text: "This principle, if valid, would close the gap perfectly: the pacifist has established that using force is immoral, and this bridge principle would automatically extend that moral judgment to the *threat* of using force." },

    { type: 'h4', text: 'Step 4: Evaluate the Choices' },
    { type: 'paragraph', text: "Armed with our pre-phrase, let's evaluate each answer choice systematically." },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) Given the potential harm caused by the use of force, the line between use of force in self-defense and the aggressive use of force is always vague.', text: "This principle addresses the *distinction between types of force* — defensive vs. aggressive. But the pacifist's argument does not rely on blurring this distinction. The pacifist's logic is absolute: *all* threats of force are immoral, regardless of whether the force is defensive or aggressive. The argument doesn't need the line between these types to be vague; it declares the entire category immoral.\n\n**Why it fails:** It addresses an irrelevant distinction. The gap is between the morality of *acting* and the morality of *threatening*, not between types of force.", badge: 'Irrelevant Distinction', badgeColor: 'red' },
      { title: '(B) It is immoral to threaten to do what it is immoral to do.', text: "This matches our pre-phrase almost exactly. The pacifist has established that using force is immoral (an action). This principle states that *threatening* to perform an immoral action is itself immoral. Applied to the argument:\n\n1. Using force is immoral (established by the argument).\n2. Threatening to do what is immoral is itself immoral (this principle).\n3. Therefore, threatening to use force is immoral (the conclusion).\n\nThe principle provides the exact bridge between the morality of the act and the morality of the threat.", badge: 'Correct', badgeColor: 'green' },
      { title: '(C) It is immoral to do anything that causes more harm than good.', text: "The pacifist uses a strict, absolute standard: causing *any* harm is immoral. This answer introduces a different, more flexible standard based on a cost-benefit analysis (\"more harm than good\"). Under this principle, causing harm could be moral if it also produces sufficient good — which directly contradicts the pacifist's absolute premise.\n\n**Why it fails:** It replaces the pacifist's strict standard with a utilitarian one. The principle is about a different moral framework, not the gap in this argument.", badge: 'Mismatched Standard', badgeColor: 'red' },
      { title: '(D) Whether a threat made in self-defense is immoral depends on the circumstances.', text: "This principle directly *undermines* the pacifist's conclusion. The pacifist argues that threatening to use force is immoral *even when* the threat is made in self-defense — an absolute claim that ignores circumstances. This answer says the opposite: circumstances matter. If valid, it would weaken, not strengthen, the argument.\n\n**Why it fails:** It is a Contradiction trap. It justifies the opposing position.", badge: 'Contradiction', badgeColor: 'red' },
      { title: '(E) It is immoral to carry out a threat if making the threat is itself immoral.', text: "This principle gets the logical direction *backward*. The pacifist's argument flows from the morality of the *act* to the morality of the *threat*:\n\n**Argument's direction:** Act is immoral → Threat is immoral\n\n**This answer's direction:** Threat is immoral → Carrying out the threat is immoral\n\nChoice (E) goes from threat to act; the argument goes from act to threat. Even if (E) is true, it does not help the pacifist get from \"using force is immoral\" to \"threatening to use force is immoral.\"\n\n**Why it fails:** It is a Reversal trap — correct topic, wrong logical direction.", badge: 'Reversal Trap', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: A Visual Summary' },
    { type: 'table', headers: ['Answer', 'What It Addresses', 'Does It Bridge Act → Threat?'], rows: [
      ['(A)', 'Distinction between types of force', 'No — irrelevant distinction'],
      ['**(B)**', '**Moral transfer from act to threat**', '**Yes — bridges the gap directly ✓**'],
      ['(C)', 'Cost-benefit moral standard', 'No — different moral framework'],
      ['(D)', 'Circumstance-dependent morality', 'No — contradicts the conclusion'],
      ['(E)', 'Moral transfer from threat to act', 'No — reverses the direction'],
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Key Lessons from This Drill' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. The Normative Bridge pattern bridges from one normative claim to a related normative claim.** In this case, the bridge connects the moral status of an *action* to the moral status of a *threat* to perform that action. Not all normative bridges are simple fact-to-value gaps — some bridge between related evaluative domains.\n\n**2. Pay close attention to the direction of the logic.** The correct principle must flow in the same direction as the argument. The pacifist argues: *Act is immoral → Threat is immoral.* Answer (E) reverses this: *Threat is immoral → Act is immoral.* Reversal traps are among the most tempting and common distractors on Principle-Strengthen questions.\n\n**3. Watch for mismatched moral standards.** The pacifist uses an absolute standard (any harm = immoral). Answer (C) introduces a utilitarian standard (more harm than good = immoral). These are fundamentally different ethical frameworks. A principle that applies a different standard than the one the argument uses cannot justify the argument's reasoning.\n\n**4. Contradiction traps are disguised as relevant principles.** Answer (D) uses the right vocabulary (\"threat,\" \"self-defense,\" \"immoral\") but arrives at the *opposite* conclusion. Always check: does this principle support the author's conclusion, or does it undermine it?\n\n**5. Pre-phrasing is powerful.** Our pre-phrase — \"If doing X is immoral, then threatening to do X is also immoral\" — immediately identified (B) as the correct answer and exposed the logical flaws in every wrong choice. A strong pre-phrase turns a 5-choice evaluation into a 1-choice verification." },
  ]
};
