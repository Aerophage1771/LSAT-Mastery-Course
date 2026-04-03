import { Lesson } from '../../types';

export const Lesson1b_Foundations: Lesson = {
  id: '8-1b',
  title: 'Foundations',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'The Gap Model' },
    {
      type: 'paragraph',
      text: 'Every Weaken question is built on the same structural foundation: the **Gap Model**. The author states premises and draws a conclusion, and there is a logical gap between them — an unstated assumption, an unexplored alternative, or a missing piece of evidence. The correct weakener always exploits this gap.',
    },
    {
      type: 'paragraph',
      text: 'This is the same Gap Model that drives Strengthen and Evaluate questions. The only difference is what the correct answer does to the gap:',
    },
    {
      type: 'breakdown',
      labels: { title: 'Question Type', text: 'What the Correct Answer Does to the Gap' },
      colWidth: 'equal',
      items: [
        {
          title: 'Strengthen',
          text: 'Finds the gap and **fills** it — provides information that makes the conclusion more likely to follow from the premises.',
          badge: 'Bridge the Gap',
          badgeColor: 'green',
        },
        {
          title: 'Weaken',
          text: 'Finds the gap and **widens** it — provides information that makes the conclusion less likely to follow from the premises.',
          badge: 'Widen the Gap',
          badgeColor: 'red',
        },
        {
          title: 'Evaluate',
          text: 'Finds the gap and **probes** it — asks a question whose answer could go either way.',
          badge: 'Probe the Gap',
          badgeColor: 'blue',
        },
      ],
    },
    {
      type: 'paragraph',
      text: 'Because all three question types target the same gap, your approach to the stimulus is identical: find the conclusion, identify the premises, and locate the logical leap between them. The only difference is what you look for in the answer choices.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Weaken vs. Flaw' },
    {
      type: 'paragraph',
      text: 'Students often confuse Weaken questions with Flaw questions because both involve identifying problems with an argument. The distinction is critical:',
    },
    {
      type: 'table',
      headers: ['Feature', 'Flaw', 'Weaken'],
      rows: [
        [
          'What the question asks',
          "Name the error in the argument's **existing** reasoning",
          'Provide a **new fact** that exploits the error',
        ],
        [
          'Answer format',
          'Abstract description of the logical mistake (e.g., "takes for granted that...")',
          'A concrete statement of fact (e.g., "Studies show that...")',
        ],
        [
          'New information?',
          'No — the answer describes what is already wrong',
          'Yes — the answer introduces information from outside the stimulus',
        ],
        ['Relationship to the gap', 'Labels the gap', 'Widens the gap with new evidence'],
      ],
    },
    {
      type: 'paragraph',
      text: 'Think of it this way: a Flaw answer is a **diagnosis** ("the argument commits the error of assuming correlation equals causation"), while a Weaken answer is the **evidence** that proves the diagnosis is fatal ("a third factor, C, actually caused both A and B"). The Weaken answer gives you the specific fact that makes the gap matter.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Weaken vs. Strengthen' },
    {
      type: 'paragraph',
      text: 'Weaken and Strengthen are mirror-image question types. They target the same gap in the same argument but ask you to push in opposite directions.',
    },
    {
      type: 'breakdown',
      labels: { title: 'Feature', text: 'Comparison' },
      items: [
        {
          title: 'Same core skill',
          text: 'Both require you to find the conclusion, identify the premises, and locate the logical gap. The analysis of the stimulus is identical.',
          badge: 'Shared',
          badgeColor: 'blue',
        },
        {
          title: 'Opposite directions',
          text: 'A Strengthen answer fills the gap (makes the conclusion more likely). A Weaken answer widens the gap (makes the conclusion less likely). They are two sides of the same coin.',
          badge: 'Key Difference',
          badgeColor: 'indigo',
        },
        {
          title: 'Common trap',
          text: 'A frequent wrong-answer trap on Weaken questions is a choice that actually **strengthens** the argument. If you feel pulled toward an answer that helps the conclusion, double-check the question stem — you may have misread it.',
          badge: 'Watch Out',
          badgeColor: 'red',
        },
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Flip Drill',
      text: 'When practicing, try this exercise: after solving a Weaken question, ask yourself what the correct Strengthen answer would be for the same argument. This "flip drill" deepens your understanding of the gap and reinforces the mirror-image relationship between the two question types.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Common Weakening Strategies' },
    {
      type: 'paragraph',
      text: 'While every argument has a unique gap, the ways to exploit that gap tend to fall into a small number of recurring patterns. Learning these strategies gives you a mental toolkit for prephrasing weakeners before you look at the answer choices.',
    },

    {
      type: 'table',
      headers: ['Strategy', 'How It Works', 'When to Use It'],
      rows: [
        [
          '**Alternative Cause**',
          'Introduce a different cause (C) that could explain the observed effect (B), undermining the claim that A caused B.',
          'The argument concludes that A caused B based on a correlation or a before/after observation.',
        ],
        [
          '**Counterexample**',
          "Provide a specific case where the argument's general rule fails — the premises hold but the conclusion does not.",
          'The argument generalizes from evidence to a broad claim.',
        ],
        [
          '**Attacking the Analogy**',
          'Identify a relevant difference between two things the argument treats as comparable, showing the comparison is invalid.',
          'The argument draws a conclusion about X based on what is true of Y, assuming X and Y are alike.',
        ],
        [
          '**Undermining the Data**',
          'Show that the evidence is flawed, biased, unrepresentative, or subject to a reporting error.',
          'The argument relies on a study, survey, statistic, or sample as its primary evidence.',
        ],
        [
          '**Cost-Benefit / Tradeoff**',
          'Show that a recommended plan carries a hidden cost, side effect, or downside that undercuts the claimed benefit.',
          'The argument recommends a course of action, compares two options, or assumes the upside is worth the burden.',
        ],
        [
          '**Scope Shift Attack**',
          'Show that the premises prove something narrower than what the conclusion claims — the evidence is about X but the conclusion is about the broader Y.',
          'The conclusion uses broader language than the premises (e.g., "safe" vs. "safe for the heart").',
        ],
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Strategy ≠ Formula',
      text: 'These strategies are not rigid templates. Real LSAT questions often blend multiple patterns or present the gap in unexpected ways. Use these categories as starting points for your prephrase, not as a checklist to mechanically apply. The goal is to train your instinct for where arguments are vulnerable.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Two Application Branches',
      text: 'Start by asking whether the conclusion is **causal**. If yes, stay in the causal Weaken branch: alternative cause, missing baseline, bad data, or reverse causation. If not, switch to the **non-causal fallback**: identify the exact claim and ask what new fact would make it less complete, less worthwhile, or less supported. In both branches, attack the **gap**, not just the topic.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'paragraph', text: "Let's apply everything from this lesson to a complete Weaken question." },
    { type: 'paragraph', text: 'Consider this illustrative argument:' },
    {
      type: 'blockquote',
      text: '"A city health department found that neighborhoods with more fast-food restaurants have higher rates of obesity. The department concluded that the prevalence of fast-food restaurants is a significant cause of obesity in those neighborhoods."',
    },
    {
      type: 'paragraph',
      text: 'This is a standard correlation-to-causation setup. The right weakener will not deny the statistics; it will supply a better explanation for why both facts appear together.',
    },

    { type: 'h3', text: 'Walkthrough' },

    { type: 'h4', text: 'Step 1: Find the Conclusion' },
    {
      type: 'paragraph',
      text: 'The conclusion is: *"The prevalence of fast-food restaurants is a significant cause of obesity."* The evidence is a correlation: neighborhoods with more fast-food restaurants have higher obesity rates.',
    },

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    {
      type: 'paragraph',
      text: 'The argument assumes that the correlation between fast-food restaurants and obesity reflects a causal relationship — that the restaurants are causing the obesity. But correlations can arise from many sources. The gap is the classic **correlation-to-causation** leap: the author has not ruled out the possibility that a third factor is responsible for both the presence of fast-food restaurants and the high obesity rates.',
    },

    { type: 'h4', text: 'Step 3: Prephrase the Weakener' },
    {
      type: 'paragraph',
      text: 'Prephrase: *"The argument would be undermined if something else — a third factor — could explain why both fast-food restaurants and obesity are concentrated in the same neighborhoods."*',
    },

    { type: 'h4', text: 'Step 4: Test the Prephrase' },
    {
      type: 'paragraph',
      text: 'A strong weakener would show that fast-food restaurants and obesity are both downstream results of a third factor, such as neighborhood income or limited access to fresh groceries. That kind of information reframes the restaurants as a symptom of the same underlying problem rather than the engine of the obesity rate.',
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Why Other Facts Do Less Damage',
      text: 'Facts about some healthy residents, menu changes, stable citywide obesity, or a few high-obesity neighborhoods without many fast-food restaurants all leave the main causal story mostly intact. The best weakener is the one that directly supplies the alternative cause the argument never ruled out.',
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Principles',
      text: "**1. The weakener does not have to destroy the argument.** It only needs to make the conclusion *less likely*. Even a modest reduction in the conclusion's probability is enough if it is the most damaging option among the five choices.\n\n**2. Every weakener exploits a gap.** Find the conclusion, find the premises, find the leap between them. The correct answer will target that leap.\n\n**3. Treat every answer as true.** Never reject an answer because it seems unlikely in the real world. Accept it as fact and test its impact on the argument.\n\n**4. Know your main lenses.** Alternative cause, attacking the data, cost-benefit / tradeoff, Option C, and scope shift attacks are recurring ways to widen the gap.\n\n**5. Weaken and Strengthen are mirrors.** If you understand one, you understand both. Practice flipping between them to deepen your gap-identification skills.",
    },
  ],
  alternates: {
    glance: {
      label: 'At a Glance',
      content: [
        { type: 'h3', text: 'Core Concepts' },
        {
          type: 'table',
          headers: ['Concept', 'Definition', 'Key Distinction'],
          rows: [
            [
              'The Gap Model',
              'Every argument has a gap between premises and conclusion',
              'Weaken attacks the gap, not the premises',
            ],
            [
              'Weaken vs. Flaw',
              'Weaken introduces new info; Flaw describes existing error',
              'Weaken adds a fact; Flaw labels a mistake',
            ],
            [
              'Weaken vs. Strengthen',
              'Opposite tasks with the same gap-finding step',
              'Flip the direction, not the method',
            ],
          ],
        },
        { type: 'h3', text: 'Common Strategies' },
        {
          type: 'table',
          headers: ['Strategy', 'When to Use'],
          rows: [
            ['**Alternative Cause**', 'The argument concludes A caused B based on a correlation or before/after observation'],
            ['**Counterexample**', 'The argument generalizes from evidence to a broad claim'],
            ['**Attacking the Analogy**', 'The argument draws a conclusion about X based on what is true of Y'],
            ['**Undermining the Data**', 'The argument relies on a study, survey, statistic, or sample as primary evidence'],
            ['**Cost-Benefit / Tradeoff**', 'The argument recommends a course of action or compares two options'],
            ['**Scope Shift Attack**', 'The conclusion uses broader language than the premises'],
          ],
        },
        { type: 'h3', text: 'Quick Example' },
        {
          type: 'blockquote',
          text: '"A city health department found that neighborhoods with more fast-food restaurants have higher rates of obesity. The department concluded that the prevalence of fast-food restaurants is a significant cause of obesity in those neighborhoods."',
        },
        {
          type: 'paragraph',
          text: 'The premise is a correlation; the conclusion claims causation. A strong weakener supplies an alternative cause — for example, that low-income neighborhoods attract both fast-food chains and have less access to fresh groceries.',
        },
        {
          type: 'callout',
          variant: 'summary',
          text: '**1.** The weakener only needs to make the conclusion *less likely*, not destroy it.\n**2.** Every weakener exploits the gap between premises and conclusion.\n**3.** Treat every answer choice as 100% true and test its impact on the gap.',
        },
      ],
    },
  },
};
