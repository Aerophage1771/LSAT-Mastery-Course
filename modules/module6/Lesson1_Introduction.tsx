import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "6-1",
  title: "Introduction",
  content: [
    { type: 'h2', text: 'MODULE 6: Parallel Flaw' },
    { type: 'paragraph', text: '**Question Goal**\n\n**Identify the specific logical error in the stimulus and find the answer choice that replicates that exact same mistake.** You are looking for the answer choice built on the same faulty logical foundation — not the same topic, not the same tone, but the same *broken reasoning*.' },

    { type: 'hr' },

    { type: 'h3', text: 'Why This Matters' },
    { type: 'paragraph', text: 'Parallel Flaw is the **ultimate synthesis question** on the Logical Reasoning section. It combines two skills you have already studied:\n\n• **Flaw identification** (Module 5) — diagnosing the specific logical error in an argument.\n• **Parallel Reasoning matching** (Module 4) — abstracting an argument\'s structure and finding a structural twin among five answer choices.' },
    { type: 'paragraph', text: 'What makes Parallel Flaw unique is that you are not just matching structure — you are matching the *mistake*. Two arguments can share the same topic, the same conclusion type, even the same number of premises, and still commit different errors. Conversely, an argument about medicine and an argument about skateboarding can commit the exact same logical error. Your job is to see through the surface and match the underlying flaw.' },
    { type: 'paragraph', text: 'Parallel Flaw questions appear on **most scored LR sections**, typically **1 per section**. They rank among the most difficult and time-consuming questions on the test. The strategies in this module will help you solve them systematically rather than relying on instinct.' },
    { type: 'callout', variant: 'tip', title: 'Frequency & Timing', text: 'Expect **1 Parallel Flaw question per LR section**, sometimes 2. Budget **2:00–2:30 per question.** These questions are long — both the stimulus and every answer choice are full arguments. The payoff for mastering the method is huge: once you can name the flaw, you can often find the match in 30–40 seconds.' },

    { type: 'hr' },

    { type: 'h3', text: 'Recognizing the Question' },
    { type: 'paragraph', text: 'Parallel Flaw stems always contain two signals: (1) they ask you to find a *similar* or *parallel* argument, and (2) they specify that the reasoning is *flawed*, *questionable*, or contains an *error*. If the stem mentions a flaw, you are in Parallel Flaw territory — not standard Parallel Reasoning.' },
    { type: 'table', headers: ['Question Stem Pattern', 'Key Signal'], rows: [
      ['"The flawed reasoning in the argument above is most similar to the flawed reasoning in which one of the following?"', 'Asks for matching **flawed reasoning**'],
      ['"Which one of the following exhibits a pattern of questionable reasoning most similar to that exhibited by the argument above?"', 'Asks for matching **questionable reasoning**'],
      ['"The argument\'s reasoning is flawed in a way that is most parallel to the way in which the reasoning in which one of the following is flawed?"', 'Specifies **flawed** + **parallel**'],
      ['"The flawed pattern of reasoning exhibited by which one of the following is most similar to that exhibited by the argument above?"', 'Asks for matching **flawed pattern**'],
      ['"Which one of the following arguments contains a flaw that is most similar to one in the argument above?"', 'Asks for a matching **flaw**'],
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Parallel Flaw vs. Parallel Reasoning' },
    { type: 'paragraph', text: 'Students frequently confuse these two question types because they share the word "parallel." The difference is fundamental: in Parallel Reasoning, you match the *structure*. In Parallel Flaw, you match the *error*. This distinction changes your entire approach.' },
    { type: 'table', headers: ['Feature', 'Parallel Reasoning (Module 4)', 'Parallel Flaw (Module 6)'], rows: [
      ['**What you match**', 'The overall logical structure (valid or invalid)', 'The specific logical *error*'],
      ['**Is the stimulus flawed?**', 'Not necessarily — it may be perfectly valid', 'Always — the stem tells you it is flawed'],
      ['**Must the correct answer be flawed?**', 'Not necessarily — if the stimulus is valid, the answer must also be valid', 'Always — a valid answer choice is automatically wrong'],
      ['**Key skill from Module 4**', 'Abstracting the argument pattern into variables', 'Same abstraction skill, but applied to the *flaw* specifically'],
      ['**Key skill from Module 5**', 'Not required', 'Diagnosing the specific flaw type (causal, conditional, scope shift, etc.)'],
      ['**Stem language**', '"most similar in its reasoning"', '"most similar in its *flawed* reasoning"'],
      ['**Primary trap**', 'Matching topic instead of structure', 'Matching a *similar* but different flaw (e.g., Mistaken Reversal vs. Mistaken Negation)'],
    ]},
    { type: 'callout', variant: 'default', title: 'The Critical Difference', text: 'In Parallel Reasoning, any valid answer that matches a valid stimulus works. In Parallel Flaw, **every valid answer choice is automatically eliminated** — the correct answer *must* be broken, and broken in exactly the same way as the stimulus. This is why naming the flaw with precision is the single most important step.' },

    { type: 'hr' },

    { type: 'h2', text: 'The Two-Step Process' },
    { type: 'paragraph', text: 'Every Parallel Flaw question reduces to two tasks performed in sequence. Master these two steps and the question type becomes manageable:' },
    { type: 'process', title: 'The Two-Step Process', steps: [
      '**Step 1 — Name the Flaw:** Read the stimulus, identify the conclusion and premises, and diagnose the specific logical error. Be as precise as possible. "The argument commits a Mistaken Negation" is far more useful than "the argument is bad logic." Use the flaw categories from Module 5.',
      '**Step 2 — Find the Match:** Scan the five answer choices for the argument that commits the *identical* error. Ignore topic. Ignore tone. Focus on the logical mechanism of the failure. Eliminate any answer choice that (a) contains valid reasoning, or (b) commits a *different* flaw.',
    ]},
    { type: 'paragraph', text: 'The two-step process is simple in theory but challenging in practice because the LSAT designs trap answer choices that commit *similar but distinct* errors. For example, if the stimulus commits a **Mistaken Reversal** (affirming the consequent), a trap answer might commit a **Mistaken Negation** (denying the antecedent). Both are conditional logic errors, but they are structurally different mistakes.' },

    { type: 'hr' },

    { type: 'h2', text: 'Common Flaw Types in Parallel Flaw Questions' },
    { type: 'paragraph', text: 'While Module 5 covered the full taxonomy of logical flaws, Parallel Flaw questions draw most heavily from a smaller set of recurring error types. Knowing which flaws appear most frequently helps you prephrase faster.' },
    { type: 'table', headers: ['Flaw Type', 'Core Error', 'Abstract Pattern', 'Frequency in Parallel Flaw'], rows: [
      ['**Mistaken Reversal**', 'Affirming the consequent', 'If A → B. B is true. Therefore A is true.', '★★★ Very Common'],
      ['**Mistaken Negation**', 'Denying the antecedent', 'If A → B. A is false. Therefore B is false.', '★★★ Very Common'],
      ['**Composition (Part → Whole)**', 'Assuming parts\' properties transfer to the whole', 'Each X has property P. Therefore the group of Xs has P.', '★★☆ Common'],
      ['**Division (Whole → Part)**', 'Assuming the whole\'s properties transfer to each part', 'The group has property P. Therefore each member has P.', '★★☆ Common'],
      ['**Causal Confusion**', 'Treating correlation as causation', 'X and Y co-occur. Therefore X causes Y.', '★★☆ Common'],
      ['**Missing Comparison**', 'Drawing conclusions from one-group data', 'Group A has high rate of Y. Therefore being in A causes Y.', '★★☆ Common'],
      ['**Scope Shift**', 'Conclusion goes beyond the evidence', 'Some X are Y. Therefore all X are Y.', '★☆☆ Occasional'],
      ['**Equivocation**', 'Using a key term in two different senses', 'X is "free" (no cost). Therefore X is "free" (unrestricted).', '★☆☆ Occasional'],
      ['**Ad Hominem**', 'Attacking the source instead of the argument', 'Person X is biased. Therefore X\'s argument is wrong.', '★☆☆ Occasional'],
    ]},
    { type: 'callout', variant: 'tip', title: 'The Big Four', text: 'Conditional logic errors (Mistaken Reversal and Mistaken Negation), Composition/Division flaws, and Causal Confusion account for the **vast majority** of Parallel Flaw questions. If you can reliably identify and distinguish these four flaw types, you are prepared for most Parallel Flaw questions on the test.' },

    { type: 'hr' },

    { type: 'h2', text: 'Your First Parallel Flaw Question' },
    { type: 'paragraph', text: 'Let\'s put the two-step process into action with a worked example. Read the stimulus, name the flaw, and find the answer choice that commits the identical error.' },

    { type: 'question-card',
      id: 'PF-6-1-001',
      questionType: 'Parallel Flaw',
      difficulty: 'easy',
      stimulus: "All of the books on the bestseller list are well-written. This novel is clearly well-written, so it must be on the bestseller list.",
      question: "The flawed reasoning in the argument above is most similar to the flawed reasoning in which one of the following?",
      options: [
        "(A) All certified mechanics have passed the safety exam. Kenji has not passed the safety exam. Therefore, Kenji is not a certified mechanic.",
        "(B) All professional athletes train daily. Mariana trains daily. Therefore, Mariana is a professional athlete. (Correct)",
        "(C) Some members of the honor society volunteer at the food bank. Luis volunteers at the food bank. Therefore, Luis is a member of the honor society.",
        "(D) If a restaurant receives a health violation, it will be inspected again. Café Roma was inspected again. Therefore, Café Roma must have received a health violation.",
        "(E) Every student who completed the project received extra credit. Diana did not complete the project. Therefore, Diana did not receive extra credit.",
      ],
    },

    { type: 'h3', text: 'Walkthrough' },
    { type: 'process', title: 'Applying the Two-Step Process', steps: [
      '**Step 1 — Name the Flaw:**\n• **Conclusion:** This novel must be on the bestseller list.\n• **Premise 1:** All bestseller-list books are well-written. (All A → B)\n• **Premise 2:** This novel is well-written. (X is B)\n• **The Flaw:** The argument observes that the *necessary* condition (well-written) is met and concludes that the *sufficient* condition (being on the bestseller list) must also be met. This is a **Mistaken Reversal** (affirming the consequent). Being well-written is necessary for the list, but it does not guarantee placement on the list.',
      '**Step 2 — Find the Match:**\n• We need an argument that takes a rule "All A are B," observes that B is true, and concludes A must be true.\n• Scan for: If A → B. B. Therefore A.',
    ]},
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) All certified mechanics passed the exam. Kenji has not passed. Therefore Kenji is not certified.', text: 'This is a valid **Contrapositive**: All A → B. Not B. Therefore Not A. Valid logic — automatically eliminated.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) All professional athletes train daily. Mariana trains daily. Therefore Mariana is a professional athlete.', text: 'All A → B. X is B. Therefore X is A. This is exactly the **Mistaken Reversal** — affirming the consequent. Perfect structural match.', badge: 'Correct', badgeColor: 'green' },
      { title: '(C) Some honor society members volunteer. Luis volunteers. Therefore Luis is a member.', text: 'This uses "some" instead of "all," which creates a different quantifier structure. The stimulus uses a universal rule; this uses a partial one.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) If health violation → inspected again. Inspected again. Therefore health violation.', text: 'This is also a Mistaken Reversal in structure (If A → B. B. Therefore A), but note: the stimulus uses a categorical "All A are B" while (D) uses a conditional "If A then B." Both are formally equivalent, so this is tempting. However, (B) more perfectly mirrors the "All X are Y" categorical structure of the stimulus, making (B) the tighter match.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) Every student who completed the project received extra credit. Diana did not complete it. Therefore Diana did not receive extra credit.', text: 'This is a **Mistaken Negation** (denying the antecedent): If A → B. Not A. Therefore Not B. Different flaw type from the stimulus.', badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why This Is One of the Hardest Question Types' },
    { type: 'callout', variant: 'default', title: 'Time Management Warning', text: 'Parallel Flaw questions are among the **most time-consuming** questions on the entire LSAT. Here is why:\n\n• **Volume of reading:** You must analyze the stimulus *and* five full answer-choice arguments — the equivalent of reading six arguments for a single question.\n• **Two-layer analysis:** For each answer choice, you must determine (a) whether it is flawed at all, and (b) whether the flaw matches the stimulus. This doubles the cognitive work compared to standard Parallel Reasoning.\n• **Close traps:** The LSAT frequently includes answer choices that commit *similar but distinct* errors (e.g., Mistaken Reversal vs. Mistaken Negation). Distinguishing these under time pressure is difficult.\n\n**Strategy:** Many experienced test-takers flag Parallel Flaw questions and return to them at the end of the section if time permits. If you do attempt them in order, commit to your flaw diagnosis before reading the answer choices — this dramatically reduces the time spent evaluating each option.' },

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• Parallel Flaw combines **Flaw identification** (Module 5) with **Parallel Reasoning matching** (Module 4). You must name the error *and* find its twin.\n• The critical difference from Parallel Reasoning: you match the **error**, not just the structure. Every valid answer choice is automatically wrong.\n• The **Two-Step Process**: (1) Name the flaw with precision, (2) Find the answer choice that commits the identical error.\n• The most common flaws in Parallel Flaw questions are **Mistaken Reversal**, **Mistaken Negation**, **Composition/Division**, and **Causal Confusion**.\n• Recognize Parallel Flaw stems by their mention of \"flawed,\" \"questionable,\" or \"error\" combined with \"similar\" or \"parallel.\"\n• Budget **2:00–2:30** per question. Commit to your flaw diagnosis before scanning the answer choices.\n• **Beware of close traps** — answer choices that commit similar but distinct errors are the primary source of difficulty." },
  ]
};
