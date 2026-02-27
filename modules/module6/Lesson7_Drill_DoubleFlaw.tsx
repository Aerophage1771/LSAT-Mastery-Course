import { Lesson } from '../../types';

export const Lesson7_Drill_DoubleFlaw: Lesson = {
  id: "6-7",
  title: "Drill: The Double Flaw (PT-113-S-3-Q-21)",
  content: [
    { type: 'h2', text: 'Drill: The Double Flaw' },

    { type: 'h3', text: 'Concept Focus: The Double Flaw Pattern' },
    { type: 'paragraph', text: "The most difficult Parallel Flaw questions on the LSAT rarely test a single, simple error. Instead, they engineer a special kind of complexity by layering one flaw on top of another. An argument might be broken in **two distinct ways simultaneously**, and your job is to find an answer choice that is similarly broken in *both* ways." },
    { type: 'paragraph', text: "Think of it like a building with two structural problems: a cracked foundation *and* a leaking roof. If someone asks you to find a building with the same problems, you cannot pick one that only has a cracked foundation. You need both defects. On the LSAT, the most common trap is an answer choice that replicates one flaw perfectly but drops the other." },

    { type: 'hr' },

    { type: 'h3', text: 'How Double Flaws Are Constructed' },
    { type: 'paragraph', text: "Double Flaw arguments typically layer a **surface-level logical error** with a **deeper conceptual error**. The surface flaw is the one most test-takers will catch. The deeper flaw is the one that separates high scorers from everyone else." },
    { type: 'table', headers: ['Layer', 'Description', 'Example'], rows: [
      ['**Surface Flaw**', "A standard conditional, causal, or quantifier error visible in the argument's formal structure", 'Mistaken Reversal: treating a necessary condition as sufficient'],
      ['**Deep Flaw**', 'A conceptual error involving category shifts, epistemic assumptions, or hidden equivocation', 'Epistemic Leap: concluding what a person *knows* from what is objectively *true*'],
    ]},
    { type: 'paragraph', text: "The **Epistemic Flaw** is one of the most sophisticated deep flaws the LSAT uses. It exploits the gap between objective reality and a person's subjective knowledge. In the real world, a rule might be true (e.g., 'If you have a winning ticket, you can claim the prize'). But in the world of the mind, a person might have the ticket without *knowing* it is a winner. They might not even know the prize exists." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Identify Compound Flaws' },
    { type: 'paragraph', text: "Use these diagnostic signals to detect when a stimulus contains more than one flaw:" },
    { type: 'list', items: [
      '**The stem says "both":** When the question asks which answer "exhibits *both* of the logical flaws," you are explicitly told there are two. Do not ignore this signal.',
      '**Mental-state language:** Words like "knows," "believes," "is aware," or "intends" in the stimulus almost always indicate an epistemic layer on top of a standard logical error.',
      '**Two distinct gaps:** When you diagram the argument, you find two separate places where the reasoning breaks down — e.g., the conditional is reversed *and* the scope shifts from facts to beliefs.',
      "**The conclusion combines claims:** The conclusion asserts something about both objective reality *and* someone's awareness of that reality. Each assertion may be independently flawed.",
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'How to Match Compound Flaws in Answer Choices' },
    { type: 'paragraph', text: "Once you have identified both flaws, use this systematic matching process:" },
    { type: 'process', title: 'Compound Flaw Matching', steps: [
      '**Diagnose Flaw 1 (Surface):** Identify the formal logical error. Name it precisely (Mistaken Reversal, Mistaken Negation, Composition, etc.).',
      '**Diagnose Flaw 2 (Deep):** Identify the conceptual error. Is it epistemic? Is it a scope shift? An equivocation?',
      '**First Pass — Eliminate by Flaw 1:** Scan all five answer choices and eliminate any that do NOT commit Flaw 1. This typically removes 2–3 choices.',
      '**Second Pass — Filter by Flaw 2:** Among the remaining choices, check which ones also commit Flaw 2. The answer that commits both is correct.',
      '**Verify the match:** Confirm that the surviving answer replicates both flaws in the same structural relationship as the stimulus.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Practice Question' },


    { type: 'hr' },

    { type: 'h2', text: 'Full Step-by-Step Analysis' },

    { type: 'h3', text: 'Step 1: Diagnose the Surface Flaw' },
    { type: 'paragraph', text: "First, let's analyze the conditional rule, ignoring the \"knowing\" for a moment." },
    { type: 'paragraph', text: "\"Bank deposits are credited... **only when** they are made before 3 P.M.\" The phrase \"only when\" (like \"only if\") introduces a **necessary condition**. This means: if a deposit was credited today, it *must have been* made before 3 PM." },
    { type: 'callout', variant: 'tip', title: 'The Rule', text: "Credited on Transaction Date → Made Before 3 PM\n\nBeing made before 3 PM is *necessary* for same-day credit, but it is not *sufficient*. Other conditions might also be required (e.g., the bank's computers must be functioning, it cannot be a holiday)." },
    { type: 'paragraph', text: "The argument then tells us the deposit was made \"before 3 PM\" and concludes that it was \"credited on the transaction date.\" This is a classic **Mistaken Reversal**. It confuses a requirement for a guarantee. Just because a necessary condition is met does not mean the outcome is assured." },

    { type: 'h3', text: 'Step 2: Diagnose the Deep Flaw' },
    { type: 'paragraph', text: "Now, let's add the \"knowledge\" component back in." },
    { type: 'paragraph', text: "\"Alicia **knows** that the bank deposit was made before 3 P.M. So, Alicia **knows** that the bank deposit was credited...\"" },
    { type: 'paragraph', text: "Even if the conditional logic were valid, there is a second flaw here. The argument assumes that because Alicia knows a fact (the deposit was early), she must also know the logical conclusion of that fact. But for Alicia to \"know\" the outcome, she would have to know **two things**:" },
    { type: 'list', ordered: true, items: [
      'The fact (the time of the deposit) — **established by the argument**.',
      "The bank's internal rule connecting the time to the credit date — **NOT established by the argument**.",
    ]},
    { type: 'paragraph', text: "The argument only gives us #1. It illicitly assumes #2. We cannot conclude what someone *knows* without establishing that they know both the premise *and* the rule that governs it. This is the **Epistemic Leap**." },

    { type: 'h3', text: 'Step 3: Build the Blueprint' },
    { type: 'callout', variant: 'tip', title: 'Blueprint (Compound Flaw)', text: "A rule exists: A → B (\"only when\" B = necessary condition).\nAn agent **knows B** (the necessary condition).\nThe argument concludes that the agent **knows A** (the sufficient condition).\n\n**Flaw 1 (Mistaken Reversal):** B does not guarantee A.\n**Flaw 2 (Epistemic Leap):** Even if B *did* guarantee A, knowing B does not mean knowing A — the agent must also know the rule." },

    { type: 'h3', text: 'Step 4: First Pass — Eliminate by Surface Flaw' },
    { type: 'paragraph', text: "We first check which answer choices commit a **Mistaken Reversal** (or at least some conditional logic error):" },
    { type: 'list', items: [
      '**(A):** "Journalists are the only ones permitted" means Permitted → Journalist. But "the only ones" also implies the reverse: Journalist → Permitted. This argument may actually be *valid*. Likely eliminated.',
      '**(B):** "Patrice works only on Thursday" means Works → Thursday. The argument observes Thursday and concludes Works. This *is* a Mistaken Reversal. **Survives first pass.**',
      "**(C):** \"Promoted only if Helen resigns\" means Promoted → Helen Resigns. The argument observes Helen's resignation and concludes promotion. This *is* a Mistaken Reversal. **Survives first pass.**",
      "**(D):** This argument combines two of John's beliefs into a third belief. No conditional rule is being reversed. **Eliminated — different flaw type.**",
      '**(E):** This transfers intent ("wants to be a social worker" → "wants to be poorly paid"). No conditional reversal. **Eliminated — different flaw type.**',
    ]},

    { type: 'h3', text: 'Step 5: Second Pass — Filter by Deep Flaw' },
    { type: 'paragraph', text: "Among the surviving choices (B and C), we check for the **Epistemic Leap**:" },

    { type: 'hr' },

    { type: 'h3', text: 'Answer Choice Breakdown' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      {
        title: '(A) Journalists are the only ones permitted to ask questions. Marjorie is a journalist. Therefore she will be permitted.',
        text: "\"The only ones who will be permitted\" means both (Permitted → Journalist) AND arguably (Journalist → Permitted). If both directions hold, the argument is **logically valid**. More importantly, there is no \"knowledge\" or epistemic component at all. Neither flaw is present.",
        badge: 'Incorrect — Valid + No Epistemic Flaw',
        badgeColor: 'red'
      },
      {
        title: '(B) We know Patrice works only on Thursday. Today is Thursday. So Patrice is working.',
        text: "The rule is (Works → Thursday). The argument observes Thursday and concludes Works — a clear **Mistaken Reversal**. ✓ Flaw 1 matched.\n\nBut where is the epistemic flaw? The argument uses \"we know\" at the start, but this is about *our* knowledge of the rule, not about an agent concluding what they know from a premise. The conclusion is that Patrice *is working* — an objective claim, not a claim about what Patrice or anyone *knows*. ✗ Flaw 2 is absent.",
        badge: 'Incorrect — Missing Epistemic Flaw',
        badgeColor: 'red'
      },
      {
        title: '(C) George will be promoted only if Helen resigns. George knows Helen will resign. Therefore George knows he will be promoted.',
        text: "Let's check this against both flaws:\n\n• **Flaw 1 (Mistaken Reversal):** The rule is Promoted → Helen Resigns. The argument observes Helen's resignation and concludes promotion. This reverses the conditional. ✓\n\n• **Flaw 2 (Epistemic Leap):** George *knows* Helen will resign (he knows the necessary condition is met). The argument concludes George *knows* he will be promoted. But George would also need to know the company rule linking Helen's departure to his promotion — and this is never established. ✓\n\nBoth flaws are perfectly replicated.",
        badge: 'Correct',
        badgeColor: 'green'
      },
      {
        title: '(D) John believes 4 is prime and divisible by 2. Hence John believes there is a prime number divisible by 2.',
        text: "This is about combining beliefs — a compositional inference about mental states. There is no conditional rule being reversed, and the epistemic structure is fundamentally different (combining two beliefs into a conjunctive belief, not leaping from a known premise to an unknown conclusion).",
        badge: 'Incorrect — Different Flaw Type',
        badgeColor: 'red'
      },
      {
        title: '(E) Pat wants to become a social worker. Social workers are poorly paid. Pat apparently wants to be poorly paid.',
        text: "This transfers desire for an outcome to desire for all consequences of that outcome. The flaw is about transferring intent, not about conditional logic or knowledge. Neither the Mistaken Reversal nor the Epistemic Leap is present.",
        badge: 'Incorrect — Different Flaw Type',
        badgeColor: 'red'
      },
    ]},

    { type: 'hr' },

    { type: 'h3', text: '"Both Flaws Must Match" Verification Checklist' },
    { type: 'paragraph', text: "Use this checklist whenever a question asks you to find an answer that exhibits multiple flaws. Verify each dimension independently:" },
    { type: 'table', headers: ['Checkpoint', 'Stimulus', 'Correct Answer (C)', 'Near-Miss (B)'], rows: [
      ['**Has a conditional rule?**', '✓ Credited → Before 3 PM', '✓ Promoted → Helen Resigns', '✓ Works → Thursday'],
      ['**Reverses the conditional?**', '✓ Observes Before 3 PM, concludes Credited', '✓ Observes Helen Resigns, concludes Promoted', '✓ Observes Thursday, concludes Works'],
      ['**Uses mental-state language?**', '✓ "Alicia knows"', '✓ "George knows"', '✗ "We know" (about the rule, not agent knowledge)'],
      ['**Agent knows a premise, not the rule?**', '✓ Alicia knows the time, not the bank rule', '✓ George knows Helen will resign, not the promotion rule', '✗ No agent-knowledge claim about a premise'],
      ['**Concludes agent knows the outcome?**', '✓ Concludes Alicia knows about the credit', '✓ Concludes George knows about the promotion', '✗ Concludes an objective fact (Patrice is working)'],
    ]},
    { type: 'paragraph', text: "Choice (B) is the most dangerous trap in this question. It perfectly replicates the Mistaken Reversal, and the phrase \"We know\" gives it a superficial epistemic flavor. But the epistemic structure does not match: the conclusion is an objective claim about what Patrice is doing, not a claim about what anyone *knows*. This distinction is the entire game on Double Flaw questions." },

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• When a question stem says \"**both** of the logical flaws,\" treat it as a compound-flaw problem. You must identify and match *two* independent errors.\n• The most common Double Flaw pairing is a **standard conditional error** (Mistaken Reversal or Mistaken Negation) layered with an **Epistemic Leap** (concluding what someone knows from what is objectively true).\n• Use a **two-pass elimination**: first eliminate answers that do not commit the surface flaw, then filter by the deep flaw.\n• The primary trap is the **Half-Match** — an answer that replicates one flaw perfectly but drops the other. Choice (B) in this question is a classic example.\n• **Mental-state verbs** (\"knows,\" \"believes,\" \"intends\") are your diagnostic signal. If the stimulus uses them and an answer choice does not, that choice is almost certainly incomplete.\n• Always verify your answer against **every dimension** of the compound flaw. A single mismatch — even in the *direction* of the epistemic inference — disqualifies the answer." },
  ]
};
