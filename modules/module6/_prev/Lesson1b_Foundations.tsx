import { Lesson } from '../../types';

export const Lesson1b_Foundations: Lesson = {
  id: '6-1b',
  title: 'Foundations',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Parallel Flaw Foundations' },
    {
      type: 'paragraph',
      text: 'Before diving into practice questions, you need three things: a clear understanding of how Parallel Flaw differs from Parallel Reasoning, a repeatable two-step process, and fluency with the flaw types that appear most often. This lesson covers all three.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Parallel Flaw vs. Parallel Reasoning' },
    {
      type: 'paragraph',
      text: 'Students frequently confuse these two question types because they share the word "parallel." The difference is fundamental: in Parallel Reasoning, you match the *structure*. In Parallel Flaw, you match the *error*. This distinction changes your entire approach.',
    },
    {
      type: 'table',
      headers: ['Feature', 'Parallel Reasoning (Module 4)', 'Parallel Flaw (Module 6)'],
      rows: [
        ['**What you match**', 'The overall logical structure (valid or invalid)', 'The specific logical *error*'],
        [
          '**Is the stimulus flawed?**',
          'Not necessarily — it may be perfectly valid',
          'Always — the stem tells you it is flawed',
        ],
        [
          '**Must the correct answer be flawed?**',
          'Not necessarily — if the stimulus is valid, the answer must also be valid',
          'Always — a valid answer choice is automatically wrong',
        ],
        [
          '**Key skill from Module 4**',
          'Abstracting the argument pattern into variables',
          'Same abstraction skill, but applied to the *flaw* specifically',
        ],
        [
          '**Key skill from Module 5**',
          'Not required',
          'Diagnosing the specific flaw type (causal, conditional, scope shift, etc.)',
        ],
        ['**Stem language**', '"most similar in its reasoning"', '"most similar in its *flawed* reasoning"'],
        [
          '**Primary trap**',
          'Matching topic instead of structure',
          'Matching a *similar* but different flaw (e.g., Mistaken Reversal vs. Mistaken Negation)',
        ],
      ],
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'The Critical Difference',
      text: 'In Parallel Reasoning, any valid answer that matches a valid stimulus works. In Parallel Flaw, **every valid answer choice is automatically eliminated** — the correct answer *must* be broken, and broken in exactly the same way as the stimulus. This is why naming the flaw with precision is the single most important step.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'The Two-Step Process' },
    {
      type: 'paragraph',
      text: 'Every Parallel Flaw question reduces to two tasks performed in sequence. Master these two steps and the question type becomes manageable:',
    },
    {
      type: 'process',
      title: 'The Two-Step Process',
      steps: [
        '**Step 1 — Name the Flaw:** Read the stimulus, identify the conclusion and premises, and diagnose the specific logical error. Be as precise as possible. "The argument commits a Mistaken Negation" is far more useful than "the argument is bad logic." Use the flaw categories from Module 5.',
        '**Step 2 — Find the Match:** Scan the five answer choices for the argument that commits the *identical* error. Ignore topic. Ignore tone. Focus on the logical mechanism of the failure. Eliminate any answer choice that (a) contains valid reasoning, or (b) commits a *different* flaw.',
      ],
    },
    {
      type: 'paragraph',
      text: 'The two-step process is simple in theory but challenging in practice because the LSAT designs trap answer choices that commit *similar but distinct* errors. For example, if the stimulus commits a **Mistaken Reversal** (affirming the consequent), a trap answer might commit a **Mistaken Negation** (denying the antecedent). Both are conditional logic errors, but they are structurally different mistakes.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Common Flaw Types in Parallel Flaw Questions' },
    {
      type: 'paragraph',
      text: 'While Module 5 covered the full taxonomy of logical flaws, Parallel Flaw questions draw most heavily from a smaller set of recurring error types. Knowing which flaws appear most frequently helps you prephrase faster.',
    },
    {
      type: 'table',
      headers: ['Flaw Type', 'Core Error', 'Abstract Pattern', 'Frequency in Parallel Flaw'],
      rows: [
        [
          '**Mistaken Reversal**',
          'Affirming the consequent',
          'If A \u2192 B. B is true. Therefore A is true.',
          '\u2605\u2605\u2605 Very Common',
        ],
        [
          '**Mistaken Negation**',
          'Denying the antecedent',
          'If A \u2192 B. A is false. Therefore B is false.',
          '\u2605\u2605\u2605 Very Common',
        ],
        [
          '**Composition (Part \u2192 Whole)**',
          "Assuming parts' properties transfer to the whole",
          'Each X has property P. Therefore the group of Xs has P.',
          '\u2605\u2605\u2606 Common',
        ],
        [
          '**Division (Whole \u2192 Part)**',
          "Assuming the whole's properties transfer to each part",
          'The group has property P. Therefore each member has P.',
          '\u2605\u2605\u2606 Common',
        ],
        [
          '**Causal Confusion**',
          'Treating correlation as causation',
          'X and Y co-occur. Therefore X causes Y.',
          '\u2605\u2605\u2606 Common',
        ],
        [
          '**Missing Comparison**',
          'Drawing conclusions from one-group data',
          'Group A has high rate of Y. Therefore being in A causes Y.',
          '\u2605\u2605\u2606 Common',
        ],
        [
          '**Scope Shift**',
          'Conclusion goes beyond the evidence',
          'Some X are Y. Therefore all X are Y.',
          '\u2605\u2606\u2606 Occasional',
        ],
        [
          '**Equivocation**',
          'Using a key term in two different senses',
          'X is "free" (no cost). Therefore X is "free" (unrestricted).',
          '\u2605\u2606\u2606 Occasional',
        ],
        [
          '**Ad Hominem**',
          'Attacking the source instead of the argument',
          "Person X is biased. Therefore X's argument is wrong.",
          '\u2605\u2606\u2606 Occasional',
        ],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'The Big Four',
      text: 'Conditional logic errors (Mistaken Reversal and Mistaken Negation), Composition/Division flaws, and Causal Confusion account for the **vast majority** of Parallel Flaw questions. If you can reliably identify and distinguish these four flaw types, you are prepared for most Parallel Flaw questions on the test.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Your First Parallel Flaw Question' },
    {
      type: 'paragraph',
      text: "Let's put the two-step process into action with a worked example. Read the stimulus, name the flaw, and find the answer choice that commits the identical error.",
    },
    { type: 'paragraph', text: 'Consider this illustrative argument:' },
    {
      type: 'blockquote',
      text: '"All of the books on the bestseller list are well-written. This novel is clearly well-written, so it must be on the bestseller list."',
    },
    {
      type: 'paragraph',
      text: 'The content is simple on purpose. It lets you focus on the flaw itself: the argument treats a necessary condition as if it were sufficient.',
    },

    { type: 'h3', text: 'Walkthrough' },
    {
      type: 'process',
      title: 'Applying the Two-Step Process',
      steps: [
        '**Step 1 — Name the Flaw:**\n\u2022 **Conclusion:** This novel must be on the bestseller list.\n\u2022 **Premise 1:** All bestseller-list books are well-written. (All A \u2192 B)\n\u2022 **Premise 2:** This novel is well-written. (X is B)\n\u2022 **The Flaw:** The argument observes that the *necessary* condition (well-written) is met and concludes that the *sufficient* condition (being on the bestseller list) must also be met. This is a **Mistaken Reversal** (affirming the consequent). Being well-written is necessary for the list, but it does not guarantee placement on the list.',
        '**Step 2 — Find the Match:**\n\u2022 We need an argument that takes a rule "All A are B," observes that B is true, and concludes A must be true.\n\u2022 Scan for: If A \u2192 B. B. Therefore A.',
      ],
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'Why Precision Matters',
      text: 'Once you name the flaw as a Mistaken Reversal, the job is to find that same exact move again: a rule states that all members of one group have a trait, a specific case has the trait, and the argument wrongly concludes the case belongs to the group. Close traps often keep the conditional flavor but change the quantifier, switch to valid contraposition, or commit Mistaken Negation instead.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Why This Is One of the Hardest Question Types' },
    {
      type: 'callout',
      variant: 'default',
      title: 'Time Management Warning',
      text: 'Parallel Flaw questions are among the **most time-consuming** questions on the entire LSAT. Here is why:\n\n\u2022 **Volume of reading:** You must analyze the stimulus *and* five full answer-choice arguments — the equivalent of reading six arguments for a single question.\n\u2022 **Two-layer analysis:** For each answer choice, you must determine (a) whether it is flawed at all, and (b) whether the flaw matches the stimulus. This doubles the cognitive work compared to standard Parallel Reasoning.\n\u2022 **Close traps:** The LSAT frequently includes answer choices that commit *similar but distinct* errors (e.g., Mistaken Reversal vs. Mistaken Negation). Distinguishing these under time pressure is difficult.\n\n**Strategy:** Many experienced test-takers flag Parallel Flaw questions and return to them at the end of the section if time permits. If you do attempt them in order, commit to your flaw diagnosis before reading the answer choices — this dramatically reduces the time spent evaluating each option.',
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: '\u2022 The critical difference from Parallel Reasoning: you match the **error**, not just the structure. Every valid answer choice is automatically wrong.\n\u2022 The **Two-Step Process**: (1) Name the flaw with precision, (2) Find the answer choice that commits the identical error.\n\u2022 The most common flaws in Parallel Flaw questions are **Mistaken Reversal**, **Mistaken Negation**, **Composition/Division**, and **Causal Confusion**.\n\u2022 Budget **2:00\u20132:30** per question. Commit to your flaw diagnosis before scanning the answer choices.\n\u2022 **Beware of close traps** — answer choices that commit similar but distinct errors are the primary source of difficulty.',
    },
  ],
  alternates: {
    glance: {
      label: 'At a Glance',
      content: [
        { type: 'h3', text: 'Parallel Flaw Foundations — At a Glance' },
        {
          type: 'table',
          headers: ['Concept', 'Key Point', 'Watch Out For'],
          rows: [
            [
              '**Parallel Flaw vs. Parallel Reasoning**',
              'In Parallel Flaw you match the *error*, not just the structure. Every valid answer is automatically wrong.',
              'Confusing the two types -- if the stem says "flawed," you must match the flaw',
            ],
            [
              '**Identify the Flaw FIRST**',
              'Name the flaw with precision before scanning answer choices. "Mistaken Negation" beats "bad logic."',
              'Scanning choices without a diagnosis -- leads to guessing among similar-looking traps',
            ],
            [
              '**The Big Four Flaws**',
              'Mistaken Reversal, Mistaken Negation, Composition/Division, and Causal Confusion cover the vast majority',
              'Similar but distinct errors (Reversal vs. Negation, Composition vs. Division)',
            ],
          ],
        },
        {
          type: 'blockquote',
          text: '"All of the books on the bestseller list are well-written. This novel is clearly well-written, so it must be on the bestseller list."',
        },
        {
          type: 'paragraph',
          text: 'Flaw: Mistaken Reversal (affirming the consequent). Being well-written is necessary for the list but not sufficient. The correct match must commit the identical error -- a rule "All A are B," an observation that B is true, and a faulty conclusion that A must be true.',
        },
        {
          type: 'callout',
          variant: 'summary',
          text: 'Parallel Flaw combines **Flaw identification** (Module 5) with **Parallel Reasoning matching** (Module 4). Name the flaw with precision, then find the answer that commits the same mistake. The 40 seconds invested in diagnosis saves 60+ seconds on the choices.',
        },
      ],
    },
  },
};
