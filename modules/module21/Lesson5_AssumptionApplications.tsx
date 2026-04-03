import { Lesson } from '../../types';

export const Lesson5_AssumptionApplications: Lesson = {
  id: '21-5',
  title: 'Lesson 5: Causal Reasoning in Sufficient and Necessary Assumption',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Lesson 5: Causal Reasoning in Sufficient and Necessary Assumption' },
    {
      type: 'paragraph',
      text: 'Causal assumptions come in two different flavors. A sufficient assumption can complete the missing chain so the conclusion follows. A necessary assumption usually keeps the cited evidence relevant by requiring that the intermediate effect really could contribute to the final result, or that a conditional trigger the argument needs actually holds.',
    },
    { type: 'hr' },
    { type: 'h3', text: 'SA vs. NA in Causal Arguments' },
    {
      type: 'table',
      headers: ['Question type', 'What the answer must do', 'Typical causal form'],
      rows: [
        [
          'Sufficient Assumption',
          'Make the causal chain complete enough that the conclusion follows',
          'State that the intervention really triggers the cited risk or activate a condition the argument leaves hypothetical',
        ],
        [
          'Necessary Assumption',
          'State something the argument must rely on for its evidence to matter',
          'Require that the intermediate effect can contribute to the final goal or that the comparison is not irrelevant',
        ],
      ],
    },
    {
      type: 'callout',
      title: 'Do Not Overstate Necessary Assumptions',
      variant: 'tip',
      text: 'A necessary assumption rarely has to prove that the cause guarantees the effect. It usually says the link **could**, **can**, or **must not be impossible**.',
    },
    { type: 'hr' },
    { type: 'h3', text: 'Real Questions To Use With This Lesson' },
    {
      type: 'breakdown',
      labels: { title: 'Pairing', text: 'Why it fits' },
      items: [
        {
          title: 'PT-114-S-1-Q-1 — Assuming a Claimed Causal Relationship',
          text: 'The premises say sudden increases in exercise can raise heart-attack risk. The missing sufficient assumption is that the new health program will in fact cause employees to increase their exercise suddenly.',
          badge: 'SA',
          badgeColor: 'green',
        },
        {
          title: 'PT-112-S-1-Q-18 — Assuming a Claimed Causal Chain',
          text: 'The cholesterol -> arteries -> clot-risk chain is present, but the exercise-to-cholesterol link is still conditional. The sufficient assumption activates that condition.',
          badge: 'SA',
          badgeColor: 'indigo',
        },
        {
          title: 'PT-103-S-1-Q-4 — Assuming the Relevance of an Intermediate Cause',
          text: 'The argument jumps from higher morale to higher production. The necessary assumption is not that morale guarantees production, only that morale could contribute to it.',
          badge: 'NA',
          badgeColor: 'blue',
        },
      ],
    },
    {
      type: 'callout',
      title: 'Takeaway',
      variant: 'summary',
      text: 'When a causal argument shows you one link and concludes from a farther-downstream result, ask whether the missing answer must **complete** the chain (SA) or merely **keep the chain relevant** (NA).',
    },
  ],
};
