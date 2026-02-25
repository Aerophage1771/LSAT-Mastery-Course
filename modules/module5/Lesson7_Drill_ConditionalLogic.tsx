import { Lesson } from '../../types';

export const Lesson7_Drill_ConditionalLogic: Lesson = {
  id: "5-7",
  title: "Drill: The Conditional Logic Flaw",
  content: [
    { type: 'h2', text: 'Drill: The Conditional Logic Flaw' },

    { type: 'h3', text: 'Concept Focus: Errors of Conditional Logic' },
    { type: 'paragraph', text: "Conditional logic flaws are among the most **precisely testable** errors on the LSAT. Unlike causal or sampling flaws — which can be subtle and context-dependent — conditional flaws are *structural*. The reasoning is invalid regardless of the topic. If you can diagram the argument accurately, you can identify the flaw every time." },
    { type: 'paragraph', text: "This lesson covers two fundamental conditional errors: **Affirming the Consequent** (Mistaken Reversal) and **Denying the Antecedent** (Mistaken Negation). Together, they account for roughly 10% of all Flaw questions, and they underpin harder flaws you'll encounter in later lessons." },

    { type: 'hr' },

    { type: 'h3', text: 'How Conditional Statements Work' },
    { type: 'paragraph', text: "Every conditional statement has two parts: the **antecedent** (the \"if\" part) and the **consequent** (the \"then\" part). The antecedent is the *sufficient* condition — it guarantees the consequent. The consequent is the *necessary* condition — it must be true whenever the antecedent is true." },
    { type: 'code', text: 'If A, then B.\n\nA = Antecedent (Sufficient Condition)\nB = Consequent (Necessary Condition)\n\nA → B' },
    { type: 'paragraph', text: "From the statement \"If A, then B,\" there are exactly **two valid inferences** and **two invalid inferences**. Mastering this distinction is the key to every conditional logic flaw question." },

    { type: 'h3', text: 'Valid vs. Invalid Conditional Inferences' },
    { type: 'table', headers: ['Inference', 'Form', 'Example', 'Valid?'], rows: [
      ['**Modus Ponens** (Direct)', 'A is true. ∴ B is true.', '"It is raining. Therefore the ground is wet."', '✅ Valid'],
      ['**Modus Tollens** (Contrapositive)', 'B is false. ∴ A is false.', '"The ground is NOT wet. Therefore it is NOT raining."', '✅ Valid'],
      ['**Affirming the Consequent** (Mistaken Reversal)', 'B is true. ∴ A is true.', '"The ground IS wet. Therefore it IS raining."', '❌ Invalid'],
      ['**Denying the Antecedent** (Mistaken Negation)', 'A is false. ∴ B is false.', '"It is NOT raining. Therefore the ground is NOT wet."', '❌ Invalid'],
    ]},

    { type: 'callout', variant: 'tip', title: 'The Reversal vs. Negation Distinction', text: "These two flaws are easy to confuse. Here's the difference:\n\n**Mistaken Reversal (Affirming the Consequent):** Observes the *consequent* (B) and concludes the *antecedent* (A). Flips the arrow direction: B → A.\n\n**Mistaken Negation (Denying the Antecedent):** Observes the *negation of the antecedent* (~A) and concludes the *negation of the consequent* (~B). Negates both sides: ~A → ~B.\n\nBoth are invalid for the same underlying reason: they confuse what is *sufficient* with what is *necessary*." },

    { type: 'hr' },

    { type: 'h3', text: 'Error 1: Affirming the Consequent (Mistaken Reversal)' },
    { type: 'paragraph', text: "This is the more common of the two errors. The argument observes that the consequent (B) is true and leaps to the conclusion that the antecedent (A) must be true — essentially reversing the conditional arrow." },
    { type: 'code', text: 'Rule:    If A → B\nObserve: B is true\nConclude: A must be true   ← INVALID\n\nWhy? B could be true for other reasons.' },
    { type: 'paragraph', text: "**Concrete Example:** \"If a student earns an A on the final, they pass the course. Maria passed the course. Therefore, Maria must have earned an A on the final.\"" },
    { type: 'paragraph', text: "**Why it fails:** Earning an A is one *sufficient* way to pass, but Maria could have passed by earning a B, or through extra credit, or by averaging her grades across multiple exams. The argument mistakes one sufficient path for the only path." },

    { type: 'h3', text: 'Error 2: Denying the Antecedent (Mistaken Negation)' },
    { type: 'paragraph', text: "This error negates the antecedent (A is false) and concludes the consequent must also be false. It assumes the antecedent was the *only* way to achieve the consequent." },
    { type: 'code', text: 'Rule:    If A → B\nObserve: A is false\nConclude: B must be false   ← INVALID\n\nWhy? Other conditions might also produce B.' },
    { type: 'paragraph', text: "**Concrete Example:** \"If it rains, the soccer game will be canceled. It is not raining. Therefore, the soccer game will not be canceled.\"" },
    { type: 'paragraph', text: "**Why it fails:** Rain is one *sufficient* cause for cancellation, but the game could also be canceled due to lightning, a flooded field, or a scheduling conflict. The absence of rain doesn't guarantee the game proceeds." },

    { type: 'callout', variant: 'default', title: 'How the LSAT Describes These Flaws', text: "The LSAT uses characteristic language for each error:\n\n**Mistaken Reversal:** \"treats a condition that is *sufficient* for a result as a condition that is *necessary* for that result\" or \"confuses a sufficient condition with a necessary condition.\"\n\n**Mistaken Negation:** \"assumes that because a sufficient condition is *absent*, the result must also be absent\" or \"treats the absence of one cause as proof that the effect will not occur.\"" },

    { type: 'hr' },

    { type: 'h3', text: 'Recognizing Conditional Flaws in Disguise' },
    { type: 'paragraph', text: "On the actual LSAT, conditional logic is rarely stated in clean \"If A, then B\" form. Instead, it is buried in everyday language. You must recognize the conditional structure beneath the surface." },
    { type: 'table', headers: ['Natural Language', 'Conditional Translation', 'Notes'], rows: [
      ['"All dogs are mammals"', 'Dog → Mammal', '"All A are B" = If A, then B'],
      ['"You must have a ticket to enter"', 'Enter → Ticket', '"Must" signals a necessary condition'],
      ['"Only members can vote"', 'Vote → Member', '"Only" introduces the necessary condition'],
      ['"Unless you study, you will fail"', '~Study → Fail', '"Unless" = "If not"'],
      ['"Passing the bar is required for practicing law"', 'Practice Law → Pass Bar', '"Required" = necessary condition'],
      ['"A college degree guarantees an interview"', 'Degree → Interview', '"Guarantees" = sufficient condition'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'question-card', id: 'FL-5-7-001', questionType: 'Flaw', difficulty: 'medium',
      stimulus: "Unplugging a peripheral component such as a \"mouse\" from a personal computer renders all of the software programs that require that component unusable on that computer. On Fred's personal computer, a software program that requires a mouse has become unusable. So it must be that the mouse for Fred's computer became unplugged.",
      question: "The argument is most vulnerable to which one of the following criticisms?",
      options: [
        "(A) It contains a shift in the meaning of \"unusable\" from \"permanently unusable\" to \"temporarily unusable.\"",
        "(B) It treats an event that can cause a certain result as though that event is necessary to bring about that result. (Correct)",
        "(C) It introduces information unrelated to its conclusion as evidence in support of that conclusion.",
        "(D) It attempts to support its conclusion by citing a generalization that is too broad.",
        "(E) It overlooks the possibility that some programs do not require a peripheral component such as a mouse."
      ]
    },

    { type: 'hr' },

    { type: 'h3', text: 'Step-by-Step Analysis' },
    { type: 'process', title: 'Applying the 4-Step Method', steps: [
      "**Step 1 — Deconstruct the Argument:**\n*   **The Rule (Premise 1):** Unplugging a mouse → Software becomes unusable. (If A, then B)\n*   **The Observation (Premise 2):** The software on Fred's computer is unusable. (B is true)\n*   **The Conclusion:** The mouse must be unplugged. (Therefore A is true)",
      "**Step 2 — Find the Logical Gap:** The argument has the structure: If A → B. B is true. Therefore A must be true. This is a **Mistaken Reversal** (Affirming the Consequent). The argument observes the consequent (software is unusable) and concludes the antecedent must be true (mouse was unplugged). But the software could be unusable for many other reasons: the mouse could be broken, the software could have crashed, a driver could be corrupted, or the USB port could be faulty.",
      "**Step 3 — Prephrase:** The argument treats one sufficient cause of the problem (unplugging the mouse) as though it were the *only possible* cause — i.e., as though it were necessary. It mistakes a sufficient condition for a necessary one.",
      "**Step 4 — Evaluate the Answer Choices:**"
    ]},

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation'}, items: [
      { title: '(A) It contains a shift in the meaning of "unusable"...', text: 'This describes an equivocation flaw — using a term in two different senses. But "unusable" is used consistently throughout the argument. The issue is the logical structure, not the definition of any term.', badge: 'Incorrect', badgeColor: 'red'},
      { title: '(B) It treats an event that can cause a certain result as though that event is necessary to bring about that result.', text: 'This is a precise match. The "event that can cause a certain result" is unplugging the mouse (a sufficient condition). The argument treats this event as "necessary" — meaning it must have happened for the result to occur. This perfectly describes a Mistaken Reversal.', badge: 'Correct', badgeColor: 'green'},
      { title: '(C) It introduces information unrelated to its conclusion...', text: 'All the information in the argument is directly related to the conclusion. The rule about unplugging mice and the fact that Fred\'s software is unusable are both relevant. The flaw is in how the information is *used*, not that it is irrelevant.', badge: 'Incorrect', badgeColor: 'red'},
      { title: '(D) It attempts to support its conclusion by citing a generalization that is too broad.', text: 'The generalization ("Unplugging a peripheral renders software unusable") is a reasonable technical fact, not an overly broad one. The flaw is in how this rule is *applied* — specifically, in reversing the conditional — not in the rule itself being too broad.', badge: 'Incorrect', badgeColor: 'red'},
      { title: '(E) It overlooks the possibility that some programs do not require a peripheral component...', text: 'This is out of scope. The argument specifically discusses a program that *does* require a mouse. Whether other programs exist that don\'t require a mouse is irrelevant to the logical error in this argument.', badge: 'Incorrect', badgeColor: 'red'}
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Practice Question' },
    { type: 'question-card', id: 'FL-5-7-002', questionType: 'Flaw', difficulty: 'medium',
      stimulus: "All of the paintings in the Montclair Museum\'s permanent collection are works of genuine artistic merit. The museum\'s committee on acquisitions ensures this, for they only select paintings for the permanent collection that they unanimously consider to be works of genuine artistic merit. Thus, since the committee members are all experts in their respective fields, every painting that has genuine artistic merit will eventually be in the museum\'s permanent collection.",
      question: "The reasoning in the argument is flawed in that it",
      options: [
        "(A) takes for granted that the museum\'s committee members have the same criteria for what constitutes genuine artistic merit",
        "(B) ignores the possibility that there are more works of genuine artistic merit than the museum can hold",
        "(C) treats the fact that a condition is sufficient to ensure a result as proof that the condition is necessary for that result (Correct)",
        "(D) presumes, without providing justification, that the committee\'s selections are not biased toward works in certain artistic styles",
        "(E) confuses a claim about works currently in the collection with a claim about all works that will ever be in the collection"
      ]
    },

    { type: 'h3', text: 'Analysis' },
    { type: 'paragraph', text: "Let's diagram the logic:" },
    { type: 'code', text: 'Premise:  Selected by committee → In permanent collection → Genuine merit\nDerived:  Selection → Genuine merit (valid chain)\n\nConclusion: Genuine merit → Will be in permanent collection\n\nThis REVERSES the chain: Genuine merit → Collection\nbut the chain only supports: Collection → Genuine merit' },

    { type: 'paragraph', text: "The argument establishes that being selected by the committee is sufficient to guarantee genuine artistic merit in the collection. Then it flips the direction: it concludes that having genuine merit is sufficient to guarantee inclusion in the collection. This is a classic **Mistaken Reversal**. The committee's selection process ensures everything *in* the collection has merit, but it does NOT ensure everything *with* merit gets into the collection. There could be thousands of meritorious paintings the committee never reviews, can't afford, or doesn't have space for." },

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation'}, items: [
      { title: '(A) takes for granted that the committee members have the same criteria...', text: 'The argument says they must "unanimously" agree, which actually addresses this concern. The flaw is structural, not about the committee\'s internal agreement.', badge: 'Incorrect', badgeColor: 'red'},
      { title: '(B) ignores the possibility that there are more works of genuine artistic merit than the museum can hold', text: 'This is tempting because it describes a *consequence* of the flaw — but it doesn\'t name the flaw itself. The core error is confusing the direction of a conditional, not ignoring capacity limits.', badge: 'Tempting but Incorrect', badgeColor: 'red'},
      { title: '(C) treats the fact that a condition is sufficient to ensure a result as proof that the condition is necessary for that result', text: 'The "condition sufficient to ensure a result" is committee selection → merit. The argument treats having merit as if it will necessarily lead to inclusion — i.e., treats the sufficient condition as necessary. Perfect match.', badge: 'Correct', badgeColor: 'green'},
      { title: '(D) presumes... that the committee\'s selections are not biased toward works in certain artistic styles', text: 'Bias is a concern about the committee\'s judgment, but the argument\'s flaw is logical, not evaluative. Even an unbiased committee wouldn\'t guarantee every meritorious work gets selected.', badge: 'Incorrect', badgeColor: 'red'},
      { title: '(E) confuses a claim about works currently in the collection with a claim about all works that will ever be in the collection', text: 'This describes a temporal scope shift, but the argument\'s error is about conditional direction, not time frame. The word "eventually" in the conclusion doesn\'t create a temporal confusion — the flaw exists regardless of timing.', badge: 'Incorrect', badgeColor: 'red'}
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Conditional Flaw Identification Flowchart' },
    { type: 'paragraph', text: "Use this quick decision process when you suspect a conditional logic flaw:" },
    { type: 'process', title: 'Identifying the Specific Error', steps: [
      '**Spot the conditional rule.** Look for "if…then," "all…are," "only if," "must," "requires," "guarantees." Write it as A → B.',
      '**Diagram the conclusion.** What does the argument actually conclude? Write it in symbolic form.',
      '**Compare directions.** Does the conclusion match A → B (valid direct application)? Does it match ~B → ~A (valid contrapositive)? Or does it go B → A (Mistaken Reversal) or ~A → ~B (Mistaken Negation)?',
      '**Name the flaw.** If the conclusion reverses the arrow: **Affirming the Consequent / Mistaken Reversal**. If the conclusion negates both sides: **Denying the Antecedent / Mistaken Negation**.',
      '**Match to answer choice language.** "Sufficient → necessary" typically describes a Mistaken Reversal. "Absence of sufficient condition → absence of result" typically describes a Mistaken Negation.',
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. Necessary vs. Sufficient is the Core Distinction.** Every conditional logic flaw boils down to confusing what is *enough* (sufficient) with what is *required* (necessary). If A is sufficient for B, that does NOT mean A is required for B — and it does NOT mean B is sufficient for A.\n\n**2. There Are Exactly Two Invalid Inferences.** From \"If A, then B\": (a) B is true → A is true (Mistaken Reversal / Affirming the Consequent) and (b) A is false → B is false (Mistaken Negation / Denying the Antecedent). Both are invalid; both are heavily tested.\n\n**3. Recognize Conditional Language in Disguise.** The LSAT rarely uses \"If A, then B\" directly. Watch for \"all,\" \"every,\" \"must,\" \"only if,\" \"requires,\" \"unless,\" and \"guarantees\" — each signals a conditional relationship you need to diagram.\n\n**4. Look for Alternative Causes.** The fastest way to confirm a Mistaken Reversal: brainstorm other ways B could be true without A. If alternatives exist, the argument is flawed.\n\n**5. Match the Direction Precisely.** On harder questions, trap answers will describe the *opposite* conditional error. If the stimulus commits a Mistaken Reversal, the trap will describe a Mistaken Negation (and vice versa). Diagram carefully before selecting." },
  ]
};
