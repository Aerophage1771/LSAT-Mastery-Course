import { Lesson } from '../../types';

export const Lesson2b_WorkedExamples: Lesson = {
  id: '8-2b',
  title: 'Worked Examples',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Common Wrong Answer Patterns' },
    {
      type: 'paragraph',
      text: 'Incorrect Weaken answers fall into predictable categories. Learning to recognize these traps allows you to eliminate wrong answers quickly and confidently.',
    },

    {
      type: 'table',
      headers: ['Trap Type', 'Description', 'How to Spot It'],
      rows: [
        [
          '**Strengthener**',
          'Does the opposite of what is asked — makes the conclusion more likely.',
          'Ask: does this help the argument? If yes, it is a trap.',
        ],
        [
          '**Irrelevant Scope**',
          'Discusses a topic related to the stimulus but does not affect the specific logical connection between premises and conclusion.',
          "The nouns, timeframes, or populations in the choice do not match the conclusion's scope.",
        ],
        [
          '**Too Extreme / Too Weak**',
          'Either requires an unreasonable interpretation to damage the argument, or only affects the argument in a negligible way.',
          'The choice uses hedging language ("some," "might," "occasionally") that limits its impact, or requires you to stack multiple assumptions.',
        ],
        [
          '**Wrong Gap**',
          'Targets a real vulnerability in the argument, but not the *central* one. The damage is real but peripheral.',
          'The choice addresses a secondary detail rather than the main logical leap.',
        ],
        [
          '**No Impact**',
          'States a fact that is topically related but logically neutral — it neither helps nor hurts.',
          "Adding this fact to the argument changes nothing about the conclusion's likelihood.",
        ],
        [
          '**Reverses the Burden**',
          'Argues that the conclusion has not been proven rather than providing evidence against it.',
          'The choice says the argument "fails to establish" something rather than introducing a damaging new fact.',
        ],
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'The Most Dangerous Trap',
      text: 'The most dangerous trap is the **Strengthener**. Under time pressure, it is easy to misread the question stem or confuse the direction. Always double-check: are you looking for information that *hurts* the argument? If a choice makes you think "that supports the conclusion," eliminate it immediately.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Full Worked Example' },
    { type: 'paragraph', text: "Let's apply all four steps to a complete Weaken question from start to finish." },
    { type: 'paragraph', text: 'Consider this illustrative argument:' },
    {
      type: 'blockquote',
      text: '"A regional water authority noted that households that received a pamphlet about water conservation in January reduced their water usage by an average of 20% over the following six months compared to their usage during the same period the previous year. The authority concluded that the pamphlet program is an effective tool for reducing residential water consumption."',
    },
    {
      type: 'paragraph',
      text: 'This example is useful because several candidate weakener ideas are plausible, but one explanation is much stronger than the rest: a region-wide event that would have reduced water usage whether or not anyone saw the pamphlet.',
    },

    { type: 'h3', text: 'Applying the 4-Step Method' },

    { type: 'h4', text: 'Step 1: Find the Conclusion' },
    {
      type: 'paragraph',
      text: '**Conclusion:** The pamphlet program is an effective tool for reducing residential water consumption.',
    },
    {
      type: 'paragraph',
      text: '**Premise:** Households that received the pamphlet reduced usage by 20% compared to the same period the previous year.',
    },

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    {
      type: 'paragraph',
      text: 'The argument observes a correlation (pamphlet → reduced usage) and concludes causation (the pamphlet *caused* the reduction). The gap is the classic causal assumption: **the author has not ruled out alternative causes for the decline.** Something else could have changed during those six months that actually drove the reduction — drought conditions, new regulations, seasonal variation, or the type of households that received the pamphlet.',
    },

    { type: 'h4', text: 'Step 3: Prephrase the Weakener' },
    {
      type: 'paragraph',
      text: 'Prephrase: *"The argument would be undermined if there was another factor during that period that could explain the 20% reduction — something that would have reduced water usage regardless of the pamphlet."*',
    },

    { type: 'h4', text: 'Step 4: Match and Eliminate' },
    {
      type: 'paragraph',
      text: 'The strongest weakener would show that every household had an independent reason to cut water use during that six-month window. A drought with mandatory restrictions does exactly that: it provides a complete alternative cause that can explain the full 20% drop without giving the pamphlet any credit.',
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Why the Other Possibilities Are Weaker',
      text: 'Selection bias, unread pamphlets, and long-term conservation trends all raise fair questions, but none explains the specific six-month drop as fully as a mandatory regional restriction would. The best weakener usually does more than nibble at the edges of the evidence; it offers a rival explanation that can absorb the whole result.',
    },
  ],
  alternates: {
    annotated: {
      label: 'Annotated Walkthrough',
      content: [
        { type: 'h3', text: 'Annotated Stimulus' },
        {
          type: 'blockquote',
          text: '"A regional water authority noted that households that received a pamphlet about water conservation in January reduced their water usage by an average of 20% over the following six months compared to their usage during the same period the previous year. The authority concluded that the pamphlet program is an effective tool for reducing residential water consumption."',
        },
        { type: 'h4', text: 'Structural Annotation' },
        {
          type: 'breakdown',
          labels: { title: 'Sentence', text: 'Role' },
          items: [
            {
              title: 'A regional water authority noted that households that received a pamphlet about water conservation in January reduced their water usage by an average of 20% over the following six months compared to their usage during the same period the previous year.',
              text: 'This is the **premise** — an observation about what the authority measured.',
              badge: 'Premise',
              badgeColor: 'blue',
            },
            {
              title: 'The authority concluded that the pamphlet program is an effective tool for reducing residential water consumption.',
              text: 'This is the **conclusion** — the causal claim that the pamphlet drove the reduction.',
              badge: 'Conclusion',
              badgeColor: 'green',
            },
          ],
        },
        { type: 'h3', text: 'Method Applied' },
        {
          type: 'process',
          steps: [
            '**Find the conclusion.** The authority claims the pamphlet program is an effective tool for reducing water consumption.',
            '**Identify the gap.** The premise shows a correlation (pamphlet recipients used less water), but the conclusion asserts causation. The gap: other factors could explain the 20% drop.',
            '**Prephrase the weakener.** Something else during those six months — drought, new regulations, seasonal variation — could account for the entire reduction.',
            '**Match and eliminate.** The strongest weakener supplies a complete alternative cause (e.g., mandatory drought restrictions) that explains the drop without crediting the pamphlet.',
          ],
        },
        { type: 'h3', text: 'Trap Table' },
        {
          type: 'table',
          headers: ['Wrong Answer Type', 'Why It Fails'],
          rows: [
            ['**Strengthener**', 'Makes the conclusion more likely — opposite of what the question asks'],
            ['**Irrelevant Scope**', 'Discusses a different population, timeframe, or topic than the conclusion covers'],
            ['**Too Extreme / Too Weak**', 'Uses heavy hedging ("some," "might") that limits its impact, or requires stacking extra assumptions'],
            ['**Wrong Gap**', 'Targets a real but peripheral vulnerability instead of the central causal leap'],
            ['**Reverses the Burden**', 'Says the argument "fails to establish" something instead of introducing a damaging new fact'],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          text: 'The correct answer works because it provides a complete alternative cause — a region-wide event that would have reduced water usage whether or not anyone saw the pamphlet. It directly attacks the causal gap without merely nibbling at peripheral details.',
        },
      ],
    },
  },
};
