import { Lesson } from '../../types';

export const Lesson6_Advanced_DeconstructingHighDifficulty: Lesson = {
  id: "6-6",
  title: "Advanced: Deconstructing High-Difficulty Parallel Flaws",
  content: [
    { type: 'h2', text: "Advanced: Deconstructing High-Difficulty Parallel Flaws" },

    { type: 'h3', text: "Why Some Parallel Flaw Questions Are Brutally Hard" },
    { type: 'paragraph', text: "You have now practiced matching individual flaws: Mistaken Negation, Composition, Missing Comparison, and more. On a medium-difficulty Parallel Flaw question, the stimulus commits one recognizable error, and the correct answer replicates it cleanly. But the hardest questions — the ones that appear in the final third of a section and carry the highest difficulty ratings — operate differently. They are engineered to defeat the standard two-step process by making every step harder." },
    { type: 'paragraph', text: "Understanding *why* these questions are hard is the first step toward beating them. The LSAT does not create difficulty randomly. Hard Parallel Flaw questions deploy three specific, predictable tactics. Once you learn to recognize these tactics, you can adjust your strategy before the question overwhelms you." },

    { type: 'hr' },

    { type: 'h3', text: "The Three Difficulty Factors" },
    { type: 'paragraph', text: "Every hard Parallel Flaw question uses at least one — and often two or three — of the following difficulty factors:" },

    { type: 'h4', text: "Factor 1: Compound Flaws" },
    { type: 'paragraph', text: "Instead of committing a single error, the stimulus argument is broken in **two distinct ways simultaneously**. To find the correct answer, you must identify *both* flaws and find the answer choice that replicates *both*. Trap answers will match one flaw but not the other." },
    { type: 'paragraph', text: "Consider an argument that contains both a **Mistaken Reversal** and an **Epistemic Leap** (concluding what a person *knows* from what is objectively true). A trap answer might commit the Mistaken Reversal perfectly but drop the epistemic component, or vice versa. You saw this pattern in the Double Flaw drill — on the hardest questions, this layering is the primary source of difficulty." },
    { type: 'callout', variant: 'default', title: 'Example: Compound Flaw', text: "\"Bank deposits are credited on the transaction date only when made before 3 PM. Alicia knows the deposit was made before 3 PM. So, Alicia knows the deposit was credited on the transaction date.\"\n\n**Flaw 1 (Surface):** Mistaken Reversal — treats a necessary condition (before 3 PM) as sufficient.\n**Flaw 2 (Hidden):** Epistemic Leap — assumes Alicia knows the bank's internal rule, not just the fact.\n\nThe correct answer must replicate *both* errors." },

    { type: 'h4', text: "Factor 2: Abstract Structure" },
    { type: 'paragraph', text: "The LSAT hides the flaw inside dense, abstract, or unfamiliar subject matter. When the stimulus discusses epistemology, statistical methodology, or philosophy of science, your brain spends cognitive resources on comprehension rather than analysis. Meanwhile, the correct answer may involve an everyday topic — buying supplies for a club, planning a road trip — that *feels* too simple to be right." },
    { type: 'paragraph', text: "This is the **Topic Trap**. You naturally gravitate toward answer choices that match the *tone* and *subject matter* of the stimulus. The test-makers know this and deliberately mismatch topics between the stimulus and the correct answer. A flaw is a flaw whether it concerns constitutional law or sandwich ingredients." },
    { type: 'callout', variant: 'default', title: 'Example: Topic Mismatch', text: "**Stimulus topic:** The epistemological validity of inductive scientific reasoning\n**Correct answer topic:** Whether a camping club should buy new tents\n\nBoth arguments commit the same structural error (e.g., confusing a necessary condition with a sufficient one). The topic mismatch is intentional — it tests whether you can see past subject matter to pure logical form." },

    { type: 'h4', text: "Factor 3: Multiple Viable Candidates" },
    { type: 'paragraph', text: "In easier questions, only one or two answer choices are even plausibly similar to the stimulus. In the hardest questions, **three or four** answer choices commit logical errors that resemble the stimulus flaw. The differences between them are subtle: one might use \"some\" where the stimulus uses \"all,\" or one might reverse the direction of a causal claim. You must perform precise structural matching to distinguish the perfect match from the near-misses." },
    { type: 'paragraph', text: "This is where sloppy flaw identification fails. If your diagnosis is \"it's a conditional error,\" you will struggle to choose between answers that commit a Mistaken Reversal and ones that commit a Mistaken Negation. Only a precise diagnosis — specifying *which* conditional error, applied to *which* terms, with *which* additional complications — will reliably eliminate the near-misses." },

    { type: 'hr' },

    { type: 'h3', text: "The Structural Elimination Method" },
    { type: 'paragraph', text: "On the hardest Parallel Flaw questions, the standard two-step process (Name the Flaw → Find the Match) often needs reinforcement. The **Structural Elimination Method** adds systematic checkpoints that help you navigate compound flaws and multiple viable candidates." },

    { type: 'process', title: 'The Structural Elimination Method', steps: [
      '**Step 1 — Diagnose All Flaws:** Read the stimulus carefully. Identify the conclusion, premises, and every logical gap. Name each flaw with maximum precision. If there are two flaws, write both down. If the question stem says "both of the flaws," you know a compound structure is in play.',
      '**Step 2 — Build a Structural Blueprint:** Abstract the argument into a symbolic skeleton. Strip away all content. Specify the type of each component (universal vs. particular, causal vs. conditional, objective vs. epistemic). The blueprint should be specific enough that only one answer choice can match it.',
      '**Step 3 — Eliminate Valid Arguments:** Before matching flaws, scan the answer choices for any that are logically *valid*. Valid arguments are automatic eliminations in Parallel Flaw questions. This often removes 1–2 choices instantly.',
      '**Step 4 — Eliminate Wrong Flaw Type:** Among the remaining choices, identify any that commit a *different* type of error than the stimulus. If the stimulus has a conditional flaw, eliminate answers with causal flaws (and vice versa).',
      '**Step 5 — Match the Exact Mechanism:** For the remaining candidates (usually 2–3), compare each one against your blueprint component by component. Check: Does it reverse the same direction? Does it use the same quantifier? Does it include the same epistemic layer? The answer that matches on *every* structural dimension is correct.',
    ]},

    { type: 'callout', variant: 'tip', title: 'The "Both" Signal', text: "When a question stem asks you to find the answer that \"exhibits **both** of the logical flaws,\" this is a gift. It tells you explicitly that there are two distinct errors. Many test-takers miss this signal and look for a single-flaw match, which leads them to a trap answer. Read the stem carefully — it is giving you your diagnosis." },

    { type: 'hr' },

    { type: 'h3', text: "Advanced Flaw Matching Techniques" },
    { type: 'paragraph', text: "When multiple answer choices look similar, use these structural dimensions to distinguish them:" },
    { type: 'table', headers: ['Dimension', 'What to Check', 'Common Trap'], rows: [
      ['**Conditional Direction**', 'Does the answer reverse the conditional in the same direction as the stimulus? (MR vs. MN)', 'An answer commits a Mistaken Negation when the stimulus commits a Mistaken Reversal — close but not identical'],
      ['**Quantifier Match**', 'Does the answer use the same quantifier scope? (All vs. Some vs. Most)', 'An answer uses "some" where the stimulus uses "all," changing the logical structure entirely'],
      ['**Epistemic Layer**', 'Does the answer include a mental-state verb (knows, believes, intends) matching the stimulus?', 'An answer drops the "knows" component, committing only the surface flaw but not the epistemic one'],
      ['**Causal vs. Correlational**', 'Does the answer assert causation in the same way as the stimulus?', 'An answer treats a correlation as evidence when the stimulus treats it as proof — the strength of claim differs'],
      ['**Number of Entities**', 'Does the answer involve the same number of groups, rules, or agents?', 'An answer adds an extra group or condition not present in the stimulus, changing the structural geometry'],
      ['**Conclusion Scope**', 'Does the answer\'s conclusion match the scope (universal/particular) of the stimulus\'s conclusion?', 'An answer concludes about "all" members when the stimulus concludes about a specific individual'],
    ]},

    { type: 'hr' },

    { type: 'h3', text: "Common Advanced Traps" },
    { type: 'paragraph', text: "The LSAT deploys specific trap designs on hard Parallel Flaw questions. Recognizing them saves time and prevents second-guessing:" },
    { type: 'breakdown', labels: { title: 'Trap Type', text: 'How It Works' }, items: [
      { title: 'The Half-Match', text: 'The answer replicates one of two compound flaws perfectly but drops the other. This is the dominant trap when the stimulus has a Double Flaw. It exploits test-takers who stop checking after finding the first flaw match.', badge: 'Very Common', badgeColor: 'red' },
      { title: 'The Topic Twin', text: 'The answer discusses the same subject matter or uses similar vocabulary as the stimulus but commits a different structural error. It exploits the natural bias toward topical similarity over logical similarity.', badge: 'Very Common', badgeColor: 'red' },
      { title: 'The Adjacent Flaw', text: 'The answer commits a flaw in the same *family* as the stimulus (e.g., both are conditional errors) but the specific mechanism differs (Mistaken Reversal vs. Mistaken Negation). This is the hardest trap to avoid without precise flaw identification.', badge: 'Common', badgeColor: 'red' },
      { title: 'The Valid Decoy', text: 'The answer is actually logically valid but uses complex language that makes it *look* flawed. On hard questions, valid decoys are designed to survive a quick read. You must verify the logic carefully before eliminating.', badge: 'Common', badgeColor: 'red' },
      { title: 'The Overcomplicated Choice', text: 'The answer introduces additional logical layers not present in the stimulus (extra premises, additional conditions). Even if it commits the right flaw, the extra complexity means its overall structure does not parallel the stimulus.', badge: 'Occasional', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: "Practice Question" },

    { type: 'question-card',
      id: 'PF-6-6-001',
      questionType: 'Parallel Flaw',
      difficulty: 'hard',
      stimulus: "All of the candidates who win endorsements from major newspapers are candidates who have significant campaign funding. Riaz has significant campaign funding. So, since Riaz knows he has significant campaign funding, Riaz knows that he has won endorsements from major newspapers.",
      question: "The pattern of flawed reasoning in which one of the following is most similar to that in the argument above?",
      options: [
        "(A) All award-winning films are distributed by major studios. This film is distributed by a major studio. Therefore, this film has won an award.",
        "(B) Every certified inspector has passed the advanced safety course. Since Tomás has passed the advanced safety course, Tomás is a certified inspector.",
        "(C) Every tenured professor has published at least three peer-reviewed articles. Dr. Patel has published at least three peer-reviewed articles. So, because Dr. Patel knows she has published at least three peer-reviewed articles, Dr. Patel knows that she has tenure. (Correct)",
        "(D) All students who complete the internship receive a letter of recommendation. Kenji knows he will receive a letter of recommendation. Therefore, Kenji knows he has completed the internship.",
        "(E) If a building meets the new safety code, it will receive an occupancy permit. This building has received an occupancy permit. Therefore, this building meets the new safety code.",
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: "Full Step-by-Step Analysis" },

    { type: 'h3', text: "Step 1: Diagnose All Flaws" },
    { type: 'paragraph', text: "Let's map the stimulus:" },
    { type: 'list', items: [
      '**Premise 1 (the rule):** All candidates who win endorsements have significant campaign funding. (Win Endorsements → Significant Funding)',
      '**Premise 2:** Riaz has significant campaign funding. (Riaz has the *necessary* condition.)',
      '**Premise 3:** Riaz knows he has significant campaign funding. (Epistemic premise — Riaz is *aware* of the fact.)',
      '**Conclusion:** Riaz knows that he has won endorsements from major newspapers.',
    ]},
    { type: 'paragraph', text: "**Flaw 1 — Mistaken Reversal:** The rule states that winning endorsements *guarantees* significant funding (Endorsements → Funding). The argument observes that Riaz has significant funding and concludes he must have endorsements. This reverses the conditional: it treats the necessary condition (funding) as though it were sufficient for the conclusion (endorsements). Having funding does not guarantee endorsements; many well-funded candidates are never endorsed." },
    { type: 'paragraph', text: "**Flaw 2 — Epistemic Leap:** Even if the conditional logic were valid, the argument makes a second error. It concludes that Riaz *knows* he has endorsements. For Riaz to know this, he would need to know (a) the fact (his funding level) AND (b) the rule connecting funding to endorsements. The argument establishes only (a). Riaz might be completely unaware that endorsements correlate with funding. Knowing a premise does not mean knowing every conclusion that follows from it." },

    { type: 'h3', text: "Step 2: Build the Blueprint" },
    { type: 'callout', variant: 'tip', title: 'Blueprint (Compound Flaw)', text: "A rule exists: A → B.\nAn agent has B (the necessary condition).\nThe agent knows they have B.\n\nFlawed conclusion: The agent knows they have A.\n\n**Flaw 1:** Mistaken Reversal (B does not guarantee A).\n**Flaw 2:** Epistemic Leap (knowing B does not mean knowing A, even if B did guarantee A — the agent must also know the rule)." },

    { type: 'h3', text: "Step 3: Match the Error" },
    { type: 'paragraph', text: "We need an answer choice that commits **both** errors: (1) a Mistaken Reversal and (2) an Epistemic Leap from objective fact to subjective knowledge." },

    { type: 'hr' },

    { type: 'h3', text: "Answer Choice Breakdown" },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      {
        title: '(A) All award-winning films are distributed by major studios. This film is distributed by a major studio. Therefore, this film has won an award.',
        text: "This contains the **Mistaken Reversal**: Award → Major Studio; film has Major Studio; therefore Award. However, it is entirely missing the epistemic layer. No one \"knows\" or \"believes\" anything. It matches Flaw 1 but not Flaw 2.",
        badge: 'Incorrect — Missing Epistemic Flaw',
        badgeColor: 'red'
      },
      {
        title: '(B) Every certified inspector has passed the advanced safety course. Since Tomás has passed, Tomás is a certified inspector.',
        text: "Another **Mistaken Reversal** without any epistemic component. Structurally identical to (A): it matches one flaw but not the other.",
        badge: 'Incorrect — Missing Epistemic Flaw',
        badgeColor: 'red'
      },
      {
        title: '(C) Every tenured professor has published at least three peer-reviewed articles. Dr. Patel has published three articles. Since Dr. Patel knows she has published three articles, Dr. Patel knows she has tenure.',
        text: "Perfect match on every structural dimension:\n• **Rule:** Tenure → Published 3 Articles.\n• **Observation:** Dr. Patel has published 3 articles (the necessary condition is met).\n• **Epistemic premise:** Dr. Patel *knows* she has published 3 articles.\n• **Conclusion:** Dr. Patel *knows* she has tenure.\n• **Flaw 1 (Mistaken Reversal):** Having published articles does not guarantee tenure.\n• **Flaw 2 (Epistemic Leap):** Even if it did, knowing you published articles does not mean knowing you have tenure — she would also need to know the university's tenure rule.\n\nBoth flaws are replicated precisely.",
        badge: 'Correct',
        badgeColor: 'green'
      },
      {
        title: '(D) All students who complete the internship receive a letter of recommendation. Kenji knows he will receive a letter. Therefore, Kenji knows he has completed the internship.',
        text: "This has epistemic language (\"Kenji knows\"), and it reverses the conditional. But look carefully: the *structure* of the epistemic component is different. In the stimulus, the agent knows a *premise* (his funding) and the argument concludes the agent knows the *conclusion* (endorsements). In (D), the agent knows the *conclusion* (letter of recommendation) and the argument concludes the agent knows the *premise* (completed the internship). The direction of the epistemic inference is reversed from the stimulus.",
        badge: 'Incorrect — Epistemic Direction Mismatch',
        badgeColor: 'red'
      },
      {
        title: '(E) If a building meets the new safety code → occupancy permit. Permit obtained. Therefore, building meets the code.',
        text: "This is a straightforward **Mistaken Reversal** with no epistemic component at all. No agent \"knows\" or \"believes\" anything. It matches Flaw 1 only.",
        badge: 'Incorrect — Missing Epistemic Flaw',
        badgeColor: 'red'
      },
    ]},

    { type: 'hr' },

    { type: 'h3', text: "Trap Analysis" },
    { type: 'paragraph', text: "This question is a textbook example of **Factor 3: Multiple Viable Candidates**. Choices (A), (B), (C), and (E) all commit a Mistaken Reversal. If your diagnosis stopped at \"conditional error,\" you would face four seemingly valid options. Only by identifying the *second* flaw (the Epistemic Leap) can you narrow the field. And even then, Choice (D) tests whether you can distinguish the *direction* of an epistemic error — a level of precision that separates high scorers from everyone else." },

    { type: 'hr' },

    { type: 'callout', variant: 'default', title: 'Time Management: When to Skip and Return', text: "Hard Parallel Flaw questions are among the most time-consuming on the entire LSAT. Each one requires you to analyze the stimulus *and* five full arguments — six arguments total. On a timed section, spending 4+ minutes on one question can cost you 2–3 easier questions.\n\n**The Skip-and-Return Strategy:**\n1. If you read the stimulus and cannot name the flaw within 30 seconds, **flag it and move on**.\n2. If you name the flaw but find 3+ answer choices that seem to match, **flag it and move on**.\n3. Return to flagged questions only after you have completed all other questions in the section.\n4. When you return, you will often find that the pressure has dissipated and the flaw is easier to see with fresh eyes.\n\n**The 90-Second Rule:** If you commit to a hard PF question, give yourself a hard 90-second limit for the answer choices. If you have not found a confident match in 90 seconds, pick your best candidate and move on. The marginal return on additional time diminishes rapidly." },

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• The three difficulty factors are **Compound Flaws** (multiple errors layered together), **Abstract Structure** (dense topics hiding simple errors), and **Multiple Viable Candidates** (several answer choices committing similar errors).\n• The **Structural Elimination Method** extends the two-step process with explicit checkpoints: diagnose all flaws, build a detailed blueprint, eliminate valid arguments, eliminate wrong flaw types, and match the exact mechanism.\n• Use the **six structural dimensions** — conditional direction, quantifier scope, epistemic layer, causal type, entity count, and conclusion scope — to distinguish near-miss answer choices.\n• The five advanced traps are: **Half-Match** (one of two flaws), **Topic Twin** (same subject, different flaw), **Adjacent Flaw** (same family, different mechanism), **Valid Decoy** (looks flawed, isn't), and **Overcomplicated Choice** (extra structural layers).\n• **Time management** is critical. Use the Skip-and-Return strategy and the 90-Second Rule to prevent hard PF questions from consuming your section." },
  ]
};
