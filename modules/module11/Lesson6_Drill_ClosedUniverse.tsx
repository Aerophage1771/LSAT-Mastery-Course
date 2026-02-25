import { Lesson } from '../../types';

export const Lesson6_Drill_ClosedUniverse: Lesson = {
  id: "11-6",
  title: "Drill: The 'Closed Universe' Assumption (PT-118-S-1-Q-3)",
  content: [
    { type: 'h2', text: 'The Closed Universe' },
    { type: 'paragraph', text: "The \"Closed Universe\" pattern appears when an author presents a small, defined group of options, eliminates all but one, and concludes that the remaining option *must* be the correct choice. The argument's logic is only valid if we assume that no other options exist outside of the small group the author has defined. Without this assumption, the elimination proves nothing — the correct answer could be an option the author never even considered." },
    { type: 'paragraph', text: "This pattern is a variant of the \"Only Way\" assumption, but instead of blocking *alternative causes*, it blocks *alternative candidates*. The argument treats its defined list as exhaustive. The necessary assumption is that the universe of possibilities is, in fact, closed — there are no outside options." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Spot a Closed Universe Gap' },
    { type: 'paragraph', text: "Use this quick checklist:" },
    { type: 'list', items: [
      '**Look for a process of elimination:** The author lists 2–3 options, disqualifies all but one, and concludes the remaining option must be chosen.',
      '**Look for "must" language:** Conclusions that use "must," "has to be," or "the only remaining option" signal a Closed Universe argument.',
      '**Ask: "Could there be someone (or something) else?"** If the author defines a small group but the real world might contain other options, the argument depends on the group being exhaustive.',
      '**Predict the answer:** The correct answer will state that the defined group is the only set of eligible options — no one outside the group qualifies.',
    ]},
    { type: 'callout', variant: 'tip', title: 'The Structural Signature', text: "Closed Universe arguments have a distinctive logical structure:\n\n1. Define a group: {A, B, C}\n2. Eliminate A (for reason X)\n3. Eliminate B (for reason Y)\n4. Conclude: Therefore, C must be chosen.\n\nThe hidden assumption: {A, B, C} are the *only* options. If D or E also exist, the elimination of A and B doesn't prove C is the answer." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: The Closed Universe (PT-118-S-1-Q-3)' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: '11-6-drill',
      questionType: 'Necessary Assumption',
      difficulty: 'easy',
      stimulus: "A reason Larson cannot do the assignment is that she has an unavoidable scheduling conflict. On the other hand, a reason Franks cannot do the assignment is that he does not quite have the assertiveness the task requires. So, the task must be assigned to Parker, the only supervisor in the shipping department other than Larson and Franks.",
      question: "The argument depends on assuming which one of the following?",
      options: [
        "(A) Larson has the assertiveness the task requires.",
        "(B) The task cannot be assigned to anyone other than a supervisor in the shipping department. (Correct)",
        "(C) Franks would be assigned the task if Franks had the assertiveness the task requires.",
        "(D) The task cannot be assigned to anyone who has any kind of scheduling conflict.",
        "(E) No one who is not a supervisor in the shipping department has the assertiveness this task requires.",
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "Let's map the argument's process of elimination." },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: '"A reason Larson cannot do the assignment is that she has an unavoidable scheduling conflict."', text: "**Elimination 1:** Larson is removed from the candidate pool. Reason: scheduling conflict." },
      { title: '"On the other hand, a reason Franks cannot do the assignment is that he does not quite have the assertiveness the task requires."', text: "**Elimination 2:** Franks is removed from the candidate pool. Reason: insufficient assertiveness." },
      { title: '"So, the task must be assigned to Parker, the only supervisor in the shipping department other than Larson and Franks."', text: "**Conclusion:** Parker *must* be assigned the task. The word \"must\" signals an absolute, forced conclusion. The argument also tells us the defined group: there are exactly three supervisors in the shipping department — Larson, Franks, and Parker." },
    ]},

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "**The Logical Structure:**\n\n1. The defined group = {Larson, Franks, Parker} (supervisors in shipping)\n2. Larson is eliminated ✗\n3. Franks is eliminated ✗\n4. Conclusion: Parker must be chosen ✓" },
    { type: 'paragraph', text: "**The Gap:** This elimination only works if the candidate pool is limited to shipping department supervisors. But *why* does the task have to be assigned to a supervisor in the shipping department? Could a supervisor from another department do it? Could a non-supervisor do it? Could it be outsourced? The argument treats the three shipping supervisors as the *only possible* candidates, but never says why." },
    { type: 'callout', variant: 'default', title: 'The Question That Exposes the Gap', text: "Ask: **\"Why can't someone else — anyone outside this group of three — do the assignment?\"** The argument provides no answer. The author simply assumes the universe is closed to these three people. If there are other eligible candidates, then eliminating Larson and Franks doesn't prove Parker must be chosen — there could be a fourth option the author never considered." },

    { type: 'h4', text: 'Step 3: Pre-phrase' },
    { type: 'paragraph', text: "The necessary assumption must defend against the possibility that someone outside the defined group is eligible. It must state that the universe of candidates is, in fact, \"closed\" — the task can only go to a shipping department supervisor, and Larson, Franks, and Parker are the only such supervisors." },

    { type: 'h4', text: 'Step 4: Evaluate with the Negation Test' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) Larson has the assertiveness the task requires.', text: "Whether Larson has assertiveness is irrelevant — she's already disqualified for a *different* reason (scheduling conflict). Even if she's assertive, she can't do the task because she's unavailable. This information has no bearing on whether Parker must be chosen.\n\n**Negation:** Larson does NOT have assertiveness. So she's disqualified for two reasons instead of one. This doesn't change the conclusion at all. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) The task cannot be assigned to anyone other than a supervisor in the shipping department.', text: "This is the classic Closed Universe assumption. It restricts the candidate pool to shipping department supervisors only, making the elimination of Larson and Franks dispositive.\n\n**Negation Test:** The task **CAN** be assigned to someone other than a shipping department supervisor. If true, then even after eliminating Larson and Franks, the task could go to a supervisor from marketing, operations, or any other department — or even a non-supervisor. The conclusion that Parker *must* get the assignment is completely destroyed. There could be dozens of other eligible candidates.\n\n**The argument collapses.**", badge: 'Correct', badgeColor: 'green' },
      { title: '(C) Franks would be assigned the task if Franks had the assertiveness the task requires.', text: "This is a hypothetical about what *would* happen in a different scenario. It's not a required belief for the current argument. The argument needs to establish why Parker *must* be chosen, not what would happen if Franks were different.\n\n**Negation:** Franks would NOT be assigned the task even with assertiveness. This doesn't affect whether Parker must be chosen in the actual scenario. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) The task cannot be assigned to anyone who has any kind of scheduling conflict.', text: "This is **too strong**. The premise says Larson has an *unavoidable* scheduling conflict — a specific, severe type. The argument doesn't need to assume that *any* scheduling conflict disqualifies someone. A minor, resolvable conflict might not matter. The argument only depends on Larson's *specific* conflict being disqualifying.\n\n**Negation:** The task CAN be assigned to someone with some kind of scheduling conflict. This doesn't help Larson (hers is \"unavoidable\"), so it doesn't affect the argument. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) No one who is not a supervisor in the shipping department has the assertiveness this task requires.', text: "This is a possible reason *why* non-shipping supervisors can't do the task, but it's not the necessary assumption itself. Even if someone outside the department has assertiveness, they might still be ineligible for other reasons (e.g., they're in a different location, have their own conflicts, or lack other required skills). Choice (B) is the more fundamental, structural assumption: the task is restricted to shipping supervisors. (E) offers one possible *justification* for that restriction, but the argument doesn't depend on assertiveness being the reason for the restriction.\n\n**Negation:** Some non-supervisor DOES have assertiveness. This doesn't destroy the argument because assertiveness alone might not make someone eligible. **Argument survives (because B is the real assumption).**", badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: A Visual Summary' },
    { type: 'table', headers: ['Answer', 'What It Addresses', 'Does It Close the Universe?'], rows: [
      ['(A)', 'Larson\'s assertiveness (already disqualified)', 'No — irrelevant to her disqualification'],
      ['**(B)**', '**Whether the task is restricted to shipping supervisors**', '**Yes — closes the candidate pool ✓**'],
      ['(C)', 'Hypothetical about Franks', 'No — counterfactual, not structural'],
      ['(D)', 'Any scheduling conflict is disqualifying', 'No — too strong'],
      ['(E)', 'Whether outsiders have assertiveness', 'No — one possible reason, not the structural assumption'],
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "When you see a process of elimination on a small group, the necessary assumption will almost always be the statement that **restricts the pool of possibilities** to only that group. If the conclusion says an option \"must\" be chosen, the author has to assume the universe of options is closed.\n\nLook for the most **structural** version of this assumption. In this question, (B) directly closes the universe (\"cannot be assigned to anyone other than...\"), while (E) offers only one possible *reason* why the universe might be closed. The structural assumption is always more fundamental and more necessary.\n\nThe Negation Test makes this clear: negating (B) opens the floodgates to unlimited alternative candidates, destroying the conclusion. Negating (E) only opens a narrow possibility that may or may not matter. When comparing two candidates, the one whose negation causes more comprehensive destruction is the better answer." },
  ]
};
