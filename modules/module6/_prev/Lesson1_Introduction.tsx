import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: '6-1',
  title: 'Introduction',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'MODULE 6: Parallel Flaw' },
    {
      type: 'paragraph',
      text: '**Question Goal**\n\n**Identify the specific logical error in the stimulus and find the answer choice that replicates that exact same mistake.** You are looking for the answer choice built on the same faulty logical foundation — not the same topic, not the same tone, but the same *broken reasoning*.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Why This Matters' },
    {
      type: 'paragraph',
      text: "Parallel Flaw is the **ultimate synthesis question** on the Logical Reasoning section. It combines two skills you have already studied:\n\n• **Flaw identification** (Module 5) — diagnosing the specific logical error in an argument.\n• **Parallel Reasoning matching** (Module 4) — abstracting an argument's structure and finding a structural twin among five answer choices.",
    },
    {
      type: 'paragraph',
      text: 'What makes Parallel Flaw unique is that you are not just matching structure — you are matching the *mistake*. Two arguments can share the same topic, the same conclusion type, even the same number of premises, and still commit different errors. Conversely, an argument about medicine and an argument about skateboarding can commit the exact same logical error. Your job is to see through the surface and match the underlying flaw.',
    },
    {
      type: 'paragraph',
      text: 'Parallel Flaw questions appear on **most scored LR sections**, typically **1 per section**. They rank among the most difficult and time-consuming questions on the test. The strategies in this module will help you solve them systematically rather than relying on instinct.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Frequency & Timing',
      text: 'Expect **1 Parallel Flaw question per LR section**, sometimes 2. Budget **2:00–2:30 per question.** These questions are long — both the stimulus and every answer choice are full arguments. The payoff for mastering the method is huge: once you can name the flaw, you can often find the match in 30–40 seconds.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Recognizing the Question' },
    {
      type: 'paragraph',
      text: 'Parallel Flaw stems always contain two signals: (1) they ask you to find a *similar* or *parallel* argument, and (2) they specify that the reasoning is *flawed*, *questionable*, or contains an *error*. If the stem mentions a flaw, you are in Parallel Flaw territory — not standard Parallel Reasoning.',
    },
    {
      type: 'table',
      headers: ['Question Stem Pattern', 'Key Signal'],
      rows: [
        [
          '"The flawed reasoning in the argument above is most similar to the flawed reasoning in which one of the following?"',
          'Asks for matching **flawed reasoning**',
        ],
        [
          '"Which one of the following exhibits a pattern of questionable reasoning most similar to that exhibited by the argument above?"',
          'Asks for matching **questionable reasoning**',
        ],
        [
          '"The argument\'s reasoning is flawed in a way that is most parallel to the way in which the reasoning in which one of the following is flawed?"',
          'Specifies **flawed** + **parallel**',
        ],
        [
          '"The flawed pattern of reasoning exhibited by which one of the following is most similar to that exhibited by the argument above?"',
          'Asks for matching **flawed pattern**',
        ],
        [
          '"Which one of the following arguments contains a flaw that is most similar to one in the argument above?"',
          'Asks for a matching **flaw**',
        ],
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Quick Example' },
    {
      type: 'blockquote',
      text: '"All of the books on the bestseller list are well-written. This novel is clearly well-written, so it must be on the bestseller list."',
    },
    {
      type: 'paragraph',
      text: 'This argument treats a necessary condition (well-written) as if it were sufficient — a **Mistaken Reversal**. In this module you will learn to spot this pattern instantly and find the answer choice that commits the identical error. The full walkthrough is in the next lesson.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'What You\'ll Learn in This Module' },
    {
      type: 'paragraph',
      text: 'This module builds your Parallel Flaw toolkit lesson by lesson:\n\n1. **Foundations** — how Parallel Flaw differs from Parallel Reasoning, the Two-Step Process, and the most common flaw types you will encounter.\n2. **Step-by-Step Guide** — a repeatable method for breaking down any Parallel Flaw question.\n3. **Drill Lessons** — focused practice on Mistaken Negation, Composition flaws, "Compared to What?" flaws, Double Flaws, Net-Effect Flaws, and Overlap Flaws.\n4. **Advanced Lesson** — deconstructing the highest-difficulty Parallel Flaw questions.\n5. **Reference Guide** — a quick-lookup resource for flaw types and stem language.',
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaway',
      text: 'Parallel Flaw combines **Flaw identification** (Module 5) with **Parallel Reasoning matching** (Module 4). Your single most important move is to **name the flaw with precision** before scanning the answer choices — that one step cuts through the length and complexity of these questions.',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "MODULE 6: Parallel Flaw"
        },
        {
          "type": "paragraph",
          "text": "**Question Goal**\n\n**Identify the specific logical error in the stimulus and find the answer choice that replicates that exact same mistake.** You are looking for the answer choice built on the same faulty logical foundation — not the same topic, not the same tone, but the same *broken reasoning*."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Why This Matters"
        },
        {
          "type": "paragraph",
          "text": "Parallel Flaw is the **ultimate synthesis question** on the Logical Reasoning section. It combines two skills you have already studied:\n\n• **Flaw identification** (Module 5) — diagnosing the specific logical error in an argument.\n• **Parallel Reasoning matching** (Module 4) — abstracting an argument's structure and finding a structural twin among five answer choices."
        },
        {
          "type": "paragraph",
          "text": "What makes Parallel Flaw unique is that you are not just matching structure — you are matching the *mistake*. Two arguments can share the same topic, the same conclusion type, even the same number of premises, and still commit different errors. Conversely, an argument about medicine and an argument about skateboarding can commit the exact same logical error. Your job is to see through the surface and match the underlying flaw."
        },
        {
          "type": "paragraph",
          "text": "Parallel Flaw questions appear on **most scored LR sections**, typically **1 per section**. They rank among the most difficult and time-consuming questions on the test. The strategies in this module will help you solve them systematically rather than relying on instinct."
        },
        {
          "type": "callout",
          "title": "Frequency & Timing",
          "variant": "tip",
          "text": "Expect **1 Parallel Flaw question per LR section**, sometimes 2. Budget **2:00–2:30 per question.** These questions are long — both the stimulus and every answer choice are full arguments. The payoff for mastering the method is huge: once you can name the flaw, you can often find the match in 30–40 seconds."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Recognizing the Question"
        },
        {
          "type": "paragraph",
          "text": "Parallel Flaw stems always contain two signals: (1) they ask you to find a *similar* or *parallel* argument, and (2) they specify that the reasoning is *flawed*, *questionable*, or contains an *error*. If the stem mentions a flaw, you are in Parallel Flaw territory — not standard Parallel Reasoning."
        },
        {
          "type": "table",
          "headers": [
            "Question Stem Pattern",
            "Key Signal"
          ],
          "rows": [
            [
              "\"The flawed reasoning in the argument above is most similar to the flawed reasoning in which one of the following?\"",
              "Asks for matching **flawed reasoning**"
            ],
            [
              "\"Which one of the following exhibits a pattern of questionable reasoning most similar to that exhibited by the argument above?\"",
              "Asks for matching **questionable reasoning**"
            ],
            [
              "\"The argument's reasoning is flawed in a way that is most parallel to the way in which the reasoning in which one of the following is flawed?\"",
              "Specifies **flawed** + **parallel**"
            ],
            [
              "\"The flawed pattern of reasoning exhibited by which one of the following is most similar to that exhibited by the argument above?\"",
              "Asks for matching **flawed pattern**"
            ],
            [
              "\"Which one of the following arguments contains a flaw that is most similar to one in the argument above?\"",
              "Asks for a matching **flaw**"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "diff-note",
          "text": "{{-remove-}} The full PF vs. PR comparison table below (7 rows) duplicates the Reference Guide (6-10). Replace with a 2-sentence summary and a forward reference: 'See the Reference Guide for the full comparison.'",
          "variant": "comment"
        },
        {
          "type": "h3",
          "text": "Parallel Flaw vs. Parallel Reasoning"
        },
        {
          "type": "paragraph",
          "text": "Students frequently confuse these two question types because they share the word \"parallel.\" The difference is fundamental: in Parallel Reasoning, you match the *structure*. In Parallel Flaw, you match the *error*. This distinction changes your entire approach."
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "Parallel Reasoning (Module 4)",
            "Parallel Flaw (Module 6)"
          ],
          "rows": [
            [
              "**What you match**",
              "The overall logical structure (valid or invalid)",
              "The specific logical *error*"
            ],
            [
              "**Is the stimulus flawed?**",
              "Not necessarily — it may be perfectly valid",
              "Always — the stem tells you it is flawed"
            ],
            [
              "**Must the correct answer be flawed?**",
              "Not necessarily — if the stimulus is valid, the answer must also be valid",
              "Always — a valid answer choice is automatically wrong"
            ],
            [
              "**Key skill from Module 4**",
              "Abstracting the argument pattern into variables",
              "Same abstraction skill, but applied to the *flaw* specifically"
            ],
            [
              "**Key skill from Module 5**",
              "Not required",
              "Diagnosing the specific flaw type (causal, conditional, scope shift, etc.)"
            ],
            [
              "**Stem language**",
              "\"most similar in its reasoning\"",
              "\"most similar in its *flawed* reasoning\""
            ],
            [
              "**Primary trap**",
              "Matching topic instead of structure",
              "Matching a *similar* but different flaw (e.g., Mistaken Reversal vs. Mistaken Negation)"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "The Critical Difference",
          "variant": "default",
          "text": "In Parallel Reasoning, any valid answer that matches a valid stimulus works. In Parallel Flaw, **every valid answer choice is automatically eliminated** — the correct answer *must* be broken, and broken in exactly the same way as the stimulus. This is why naming the flaw with precision is the single most important step."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "The Two-Step Process"
        },
        {
          "type": "paragraph",
          "text": "Every Parallel Flaw question reduces to two tasks performed in sequence. Master these two steps and the question type becomes manageable:"
        },
        {
          "type": "process",
          "title": "The Two-Step Process",
          "steps": [
            "**Step 1 — Name the Flaw:** Read the stimulus, identify the conclusion and premises, and diagnose the specific logical error. Be as precise as possible. \"The argument commits a Mistaken Negation\" is far more useful than \"the argument is bad logic.\" Use the flaw categories from Module 5.",
            "**Step 2 — Find the Match:** Scan the five answer choices for the argument that commits the *identical* error. Ignore topic. Ignore tone. Focus on the logical mechanism of the failure. Eliminate any answer choice that (a) contains valid reasoning, or (b) commits a *different* flaw."
          ]
        },
        {
          "type": "paragraph",
          "text": "The two-step process is simple in theory but challenging in practice because the LSAT designs trap answer choices that commit *similar but distinct* errors. For example, if the stimulus commits a **Mistaken Reversal** (affirming the consequent), a trap answer might commit a **Mistaken Negation** (denying the antecedent). Both are conditional logic errors, but they are structurally different mistakes."
        },
        {
          "type": "hr"
        },
        {
          "type": "diff-note",
          "text": "{{~change~}} The 9-row flaw types table below duplicates 6-10 (Reference Guide). Reduce to the Big Four only (Mistaken Reversal, Mistaken Negation, Composition/Division, Causal Confusion) and add a forward reference: 'The complete flaw types table is in the Reference Guide (Lesson 10).'",
          "variant": "comment"
        },
        {
          "type": "h2",
          "text": "Common Flaw Types in Parallel Flaw Questions"
        },
        {
          "type": "paragraph",
          "text": "While Module 5 covered the full taxonomy of logical flaws, Parallel Flaw questions draw most heavily from a smaller set of recurring error types. Knowing which flaws appear most frequently helps you prephrase faster."
        },
        {
          "type": "table",
          "headers": [
            "Flaw Type",
            "Core Error",
            "Abstract Pattern",
            "Frequency in Parallel Flaw"
          ],
          "rows": [
            [
              "**Mistaken Reversal**",
              "Affirming the consequent",
              "If A → B. B is true. Therefore A is true.",
              "★★★ Very Common"
            ],
            [
              "**Mistaken Negation**",
              "Denying the antecedent",
              "If A → B. A is false. Therefore B is false.",
              "★★★ Very Common"
            ],
            [
              "**Composition (Part → Whole)**",
              "Assuming parts' properties transfer to the whole",
              "Each X has property P. Therefore the group of Xs has P.",
              "★★☆ Common"
            ],
            [
              "**Division (Whole → Part)**",
              "Assuming the whole's properties transfer to each part",
              "The group has property P. Therefore each member has P.",
              "★★☆ Common"
            ],
            [
              "**Causal Confusion**",
              "Treating correlation as causation",
              "X and Y co-occur. Therefore X causes Y.",
              "★★☆ Common"
            ],
            [
              "**Missing Comparison**",
              "Drawing conclusions from one-group data",
              "Group A has high rate of Y. Therefore being in A causes Y.",
              "★★☆ Common"
            ],
            [
              "**Scope Shift**",
              "Conclusion goes beyond the evidence",
              "Some X are Y. Therefore all X are Y.",
              "★☆☆ Occasional"
            ],
            [
              "**Equivocation**",
              "Using a key term in two different senses",
              "X is \"free\" (no cost). Therefore X is \"free\" (unrestricted).",
              "★☆☆ Occasional"
            ],
            [
              "**Ad Hominem**",
              "Attacking the source instead of the argument",
              "Person X is biased. Therefore X's argument is wrong.",
              "★☆☆ Occasional"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "The Big Four",
          "variant": "tip",
          "text": "Conditional logic errors (Mistaken Reversal and Mistaken Negation), Composition/Division flaws, and Causal Confusion account for the **vast majority** of Parallel Flaw questions. If you can reliably identify and distinguish these four flaw types, you are prepared for most Parallel Flaw questions on the test."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Your First Parallel Flaw Question"
        },
        {
          "type": "paragraph",
          "text": "Let's put the two-step process into action with a worked example. Read the stimulus, name the flaw, and find the answer choice that commits the identical error."
        },
        {
          "type": "paragraph",
          "text": "Consider this illustrative argument:"
        },
        {
          "type": "blockquote",
          "text": "\"All of the books on the bestseller list are well-written. This novel is clearly well-written, so it must be on the bestseller list.\""
        },
        {
          "type": "paragraph",
          "text": "The content is simple on purpose. It lets you focus on the flaw itself: the argument treats a necessary condition as if it were sufficient."
        },
        {
          "type": "h3",
          "text": "Walkthrough"
        },
        {
          "type": "process",
          "title": "Applying the Two-Step Process",
          "steps": [
            "**Step 1 — Name the Flaw:**\n• **Conclusion:** This novel must be on the bestseller list.\n• **Premise 1:** All bestseller-list books are well-written. (All A → B)\n• **Premise 2:** This novel is well-written. (X is B)\n• **The Flaw:** The argument observes that the *necessary* condition (well-written) is met and concludes that the *sufficient* condition (being on the bestseller list) must also be met. This is a **Mistaken Reversal** (affirming the consequent). Being well-written is necessary for the list, but it does not guarantee placement on the list.",
            "**Step 2 — Find the Match:**\n• We need an argument that takes a rule \"All A are B,\" observes that B is true, and concludes A must be true.\n• Scan for: If A → B. B. Therefore A."
          ]
        },
        {
          "type": "callout",
          "title": "Why Precision Matters",
          "variant": "default",
          "text": "Once you name the flaw as a Mistaken Reversal, the job is to find that same exact move again: a rule states that all members of one group have a trait, a specific case has the trait, and the argument wrongly concludes the case belongs to the group. Close traps often keep the conditional flavor but change the quantifier, switch to valid contraposition, or commit Mistaken Negation instead."
        },
        {
          "type": "diff-note",
          "text": "{{+add+}} Insert a lightweight mini-exercise here: show a 2-3 sentence argument (different from the bestseller example) and ask the student to name the flaw before revealing the answer. This closes the 41-block theory-only gap -- the student has not yet attempted anything.",
          "variant": "comment"
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Why This Is One of the Hardest Question Types"
        },
        {
          "type": "diff-note",
          "text": "{{~change~}} This callout is very long (3 bullets + strategy paragraph). Consider splitting into a shorter callout (the 3 difficulty reasons) and a separate 'Strategy' callout or process block for the skip-and-return advice. Improves scannability.",
          "variant": "comment"
        },
        {
          "type": "callout",
          "title": "Time Management Warning",
          "variant": "default",
          "text": "Parallel Flaw questions are among the **most time-consuming** questions on the entire LSAT. Here is why:\n\n• **Volume of reading:** You must analyze the stimulus *and* five full answer-choice arguments — the equivalent of reading six arguments for a single question.\n• **Two-layer analysis:** For each answer choice, you must determine (a) whether it is flawed at all, and (b) whether the flaw matches the stimulus. This doubles the cognitive work compared to standard Parallel Reasoning.\n• **Close traps:** The LSAT frequently includes answer choices that commit *similar but distinct* errors (e.g., Mistaken Reversal vs. Mistaken Negation). Distinguishing these under time pressure is difficult.\n\n**Strategy:** Many experienced test-takers flag Parallel Flaw questions and return to them at the end of the section if time permits. If you do attempt them in order, commit to your flaw diagnosis before reading the answer choices — this dramatically reduces the time spent evaluating each option."
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "• Parallel Flaw combines **Flaw identification** (Module 5) with **Parallel Reasoning matching** (Module 4). You must name the error *and* find its twin.\n• The critical difference from Parallel Reasoning: you match the **error**, not just the structure. Every valid answer choice is automatically wrong.\n• The **Two-Step Process**: (1) Name the flaw with precision, (2) Find the answer choice that commits the identical error.\n• The most common flaws in Parallel Flaw questions are **Mistaken Reversal**, **Mistaken Negation**, **Composition/Division**, and **Causal Confusion**.\n• Recognize Parallel Flaw stems by their mention of \"flawed,\" \"questionable,\" or \"error\" combined with \"similar\" or \"parallel.\"\n• Budget **2:00–2:30** per question. Commit to your flaw diagnosis before scanning the answer choices.\n• **Beware of close traps** — answer choices that commit similar but distinct errors are the primary source of difficulty."
        }
      ],
    },
    glance: {
      label: 'At a Glance',
      content: [
        { type: 'h3', text: 'Parallel Flaw — At a Glance' },
        {
          type: 'paragraph',
          text: '**Goal:** Identify the specific logical error in the stimulus and find the answer choice that replicates that exact same mistake. **Frequency:** ~2% of LR questions (typically 1 per section).',
        },
        {
          type: 'table',
          headers: ['Stem Pattern', 'Core Skill', 'Common Trap'],
          rows: [
            ['"...flawed reasoning...most similar to the flawed reasoning in..."', 'Name the flaw precisely', 'Matching a similar but different flaw'],
            ['"...pattern of questionable reasoning most similar..."', 'Name the flaw precisely', 'Same flaw family, wrong direction'],
            ['"...flawed in a way that is most parallel..."', 'Name the flaw precisely', 'Valid argument disguised as flawed'],
            ['"...contains a flaw that is most similar to one in..."', 'Name the flaw precisely', 'Topic seduction -- same topic, different error'],
          ],
        },
        {
          type: 'blockquote',
          text: '"All of the books on the bestseller list are well-written. This novel is clearly well-written, so it must be on the bestseller list."',
        },
        {
          type: 'paragraph',
          text: 'The flaw: treats a necessary condition (well-written) as sufficient. This is a Mistaken Reversal. The correct match must commit the identical error in a different topic.',
        },
        { type: 'h4', text: "What's in This Module" },
        {
          type: 'list',
          items: [
            'Foundations: How Parallel Flaw differs from Parallel Reasoning, the Two-Step Process, common flaw types',
            'Step-by-step method for diagnosing and matching under timed conditions',
            'Drill lessons on specific flaw types (Mistaken Negation, Composition, Missing Comparison, and more)',
            'Advanced lesson deconstructing highest-difficulty questions',
            'Reference guide with quick-lookup flaw type tables',
          ],
        },
      ],
    },
  },
};
