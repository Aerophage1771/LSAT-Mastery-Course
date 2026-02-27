import { Lesson } from '../../types';

export const Lesson10_Advanced_MultipleGaps: Lesson = {
  id: "7-10",
  title: "Advanced: Arguments with Multiple Gaps",
  content: [
    { type: 'h2', text: 'Advanced: Arguments with Multiple Gaps' },
    { type: 'paragraph', text: "Most Evaluate questions feature an argument with one dominant gap. The hardest questions, however, present arguments with **two or more distinct vulnerabilities** — each of which could plausibly be the evaluation target. When multiple gaps compete for your attention, you need a systematic strategy to determine which one the question is actually testing. This lesson teaches that strategy." },

    { type: 'hr' },

    { type: 'h3', text: 'Why Multiple Gaps Are Dangerous' },
    { type: 'paragraph', text: "The danger is not that you fail to find *any* gap — it is that you find one gap, commit to it, and then select a trap answer that perfectly matches your prephrase while the correct answer targets a gap you never noticed." },

    { type: 'breakdown', labels: { title: 'The Pattern', text: 'What Happens' }, items: [
      { title: 'Step 1: You find Gap A', text: 'The most obvious vulnerability in the argument. Your prephrase targets it perfectly.', badge: 'Your Prephrase', badgeColor: 'blue' },
      { title: 'Step 2: You see Answer (B) matches your prephrase', text: 'It asks exactly what you were thinking. Relief floods in. You select it and move on.', badge: 'Trap Answer', badgeColor: 'red' },
      { title: 'Step 3: The correct answer targets Gap B', text: 'A gap you did not see — perhaps because it was subtler, or because Gap A was so prominent that it monopolized your attention.', badge: 'Correct Answer', badgeColor: 'green' },
    ]},

    { type: 'callout', variant: 'default', title: 'The Lesson', text: "On hard questions, your first prephrase may be a trap. The test-makers **know** which gap most students will see first and deliberately place a matching wrong answer. The defense is to search for multiple gaps before reading the answer choices." },

    { type: 'hr' },

    { type: 'h2', text: 'The Gap Prioritization Strategy' },
    { type: 'paragraph', text: "When you identify more than one gap, use this prioritization framework to determine which one is most likely to be the evaluation target:" },

    { type: 'process', title: '5-Step Prioritization', steps: [
      '**List all gaps.** After reading the stimulus, spend 15 seconds brainstorming every way the argument could fail. Write down (or mentally note) each distinct vulnerability.',
      '**Rank by centrality.** Which gap is most central to the conclusion? A gap between a premise and the conclusion is more central than a gap between two premises.',
      '**Rank by decisiveness.** Which gap, if resolved, would most dramatically change the argument\'s strength? A gap whose resolution could completely validate or completely destroy the argument outranks one whose resolution would produce only a marginal shift.',
      '**Enter the answer choices with your top two gaps.** Hold both prephrases loosely and scan for matches.',
      '**Use the Yes/No Test as the final arbiter.** Apply the test to any answer that matches either prephrase. The answer with the cleanest split wins.',
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Common Multi-Gap Argument Patterns' },
    { type: 'paragraph', text: "Certain argument structures reliably produce multiple gaps. Knowing these patterns lets you anticipate the complexity before it trips you up." },

    { type: 'table', headers: ['Pattern', 'Gap 1', 'Gap 2', 'Which Is Usually Correct?'], rows: [
      ['**Causal + Baseline**', 'Alternative cause for the observed effect', 'Missing baseline — no pre-treatment measurement', 'Either can be correct; apply the Yes/No Test to both'],
      ['**Analogy + Feasibility**', 'Source and target cases may differ relevantly', 'The plan may have practical obstacles even if the analogy holds', 'The feasibility gap is usually more central to the *conclusion*'],
      ['**Study + Generalization**', 'The study design may be flawed (no control group, confound)', 'The sample may not represent the conclusion\'s target population', 'Whichever is more specific to the argument\'s particular weakness'],
      ['**Prediction + Definition**', 'Conditions may change before the prediction materializes', 'A key term in the conclusion may be ambiguous or misapplied', 'The definition gap is usually the subtler, harder-to-see gap — and therefore more likely to be the target on hard questions'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Practice Problem' },
    { type: 'paragraph', text: "**Instructions:** This argument has at least two distinct gaps. Identify both before reading the answer choices. Commit to an answer, then scroll down." },


    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },

    { type: 'h2', text: 'Analysis' },
    { type: 'hr' },

    { type: 'h3', text: 'Identifying the Multiple Gaps' },
    { type: 'paragraph', text: "This argument has at least three distinct gaps:" },

    { type: 'breakdown', labels: { title: 'Gap', text: 'Description' }, items: [
      { title: 'Gap 1: Selection Bias', text: 'The four roads chosen for bike lanes may have been the most dangerous or the most amenable to improvement. Results from these roads may not generalize to the remaining roads, which may have different characteristics.', badge: 'Obvious', badgeColor: 'blue' },
      { title: 'Gap 2: Displacement Effect', text: 'The injury decrease on the four roads may simply reflect a *shift* of injuries to other roads. If cyclists diverted to bike-lane roads from other roads, the injuries moved rather than disappeared.', badge: 'Subtle', badgeColor: 'indigo' },
      { title: 'Gap 3: Extrapolation', text: 'Even if the four roads produced genuine safety gains, expanding to the remaining roads may produce diminishing returns — the easiest, most impactful roads were done first.', badge: 'Subtle', badgeColor: 'slate' },
    ]},

    { type: 'h3', text: 'Applying the Prioritization Strategy' },
    { type: 'paragraph', text: "Gap 1 (selection bias) is obvious and many students will prephrase it. But look at answer (A) — it targets this gap directly and is the likely trap. Gap 2 (displacement effect) is subtler and more central: if injuries merely shifted rather than decreased, the entire justification for expanding the program collapses. Gap 3 is valid but less decisive." },

    { type: 'h3', text: 'Yes/No Test: Choice (C)' },
    { type: 'paragraph', text: "Choice (C) asks: *\"Whether the decrease in injuries on the four roads was offset by an increase in injuries on other roads where cyclists were diverted.\"*" },

    { type: 'breakdown', labels: { title: 'Answer', text: 'Effect' }, items: [
      { title: '"Yes" — injuries increased on other roads', text: 'The argument is **devastated**. The bike lanes did not reduce injuries overall — they just moved them. Expanding the program would not solve the underlying problem.', badge: 'Weakens', badgeColor: 'red' },
      { title: '"No" — injuries did not increase elsewhere', text: 'The argument is **strongly supported**. The injury reduction on the four roads represents a genuine net improvement, making expansion a reasonable strategy.', badge: 'Strengthens', badgeColor: 'green' },
    ]},
    { type: 'paragraph', text: "Dramatic split targeting the most central gap." },

    { type: 'h3', text: 'Why Choice (A) Is the Trap' },
    { type: 'paragraph', text: "Choice (A) asks about selection bias — whether the four roads were unusually dangerous to begin with. This is relevant, but the split is less decisive:" },
    { type: 'list', items: [
      '"Yes" (higher injury rates before) → Mildly weakens: results may not generalize. But it does not prove the lanes failed.',
      '"No" (similar injury rates) → Mildly strengthens: the roads were not cherry-picked. But it does not prove the lanes will work elsewhere either.',
    ]},
    { type: 'paragraph', text: "The split is real but less dramatic than (C). Choice (A) is the classic \"obvious gap\" trap." },

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. Hard arguments have multiple gaps.** Your first prephrase may match a trap answer.\n\n**2. Search for secondary gaps before reading choices.** Spend 10-15 seconds brainstorming alternative vulnerabilities.\n\n**3. Prioritize by centrality and decisiveness.** The most central gap produces the most dramatic Yes/No split.\n\n**4. Use the Yes/No Test as the final arbiter.** When two answers both seem relevant, the one with the cleaner split is correct.\n\n**5. The \"obvious gap\" is often the trap on hard questions.** Test-makers know what you will see first and bait you with a matching answer." },
  ]
};
