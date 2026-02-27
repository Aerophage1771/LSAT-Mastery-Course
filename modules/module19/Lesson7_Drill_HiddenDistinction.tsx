import { Lesson } from '../../types';

export const Lesson7_Drill_HiddenDistinction: Lesson = {
  id: "19-7",
  title: "Drill: The Hidden Distinction (PT-105-S-1-Q-25)",
  content: [
    { type: 'h3', text: 'Practice Drill: The Hidden Distinction' },
    { type: 'paragraph', text: 'A Hidden Distinction paradox is resolved by noticing that two things which appear identical are actually being measured, defined, or categorized differently. The conflict seems to violate basic math or logic, but the resolution reveals a subtle, unstated difference in units, scope, or definition. Your job is to scrutinize every noun and resist the assumption that two labels refer to the exact same thing.' },
    { type: 'hr' },


    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },
    { type: 'h3', text: 'Analysis & Explanation' },

    { type: 'h4', text: 'Step 1: Deconstruction' },
    { type: 'paragraph', text: 'Isolate the two facts that create the mathematical impossibility.' },
    { type: 'list', items: [
      '**Fact 1:** The group of "unsalable garments" makes up **7%** of total production.',
      '**Fact 2:** The group of "recycled scrap" makes up **9%** of total production.',
      '**The Bridge:** The stimulus states that *all* unsalable garments are recycled. The two groups should therefore be identical in size.',
      '**The Conflict:** How can the exact same group of items be both 7% and 9% of the same total? Something about the *measurement itself* must differ.'
    ]},

    { type: 'h4', text: 'Step 2: Abstraction' },
    { type: 'callout', title: 'Hidden Distinction Blueprint', variant: 'tip', text: 'When two numbers for the same group don\'t match, check the units. The stimulus equates Group A and Group B, but their percentages differ. The only explanation is that the method of measurement is different\u2014count vs. weight, volume vs. number, or some other hidden unit mismatch.' },

    { type: 'h4', text: 'Step 3: Evaluation' },
    { type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        { title: '(A) Minor-blemish garments sold at discount, not returned for recycling.', text: 'Deepens the Paradox. If some unsalable garments skip the recycling pile, the recycled percentage should be *smaller* than 7%, not larger. This makes the 9% figure even harder to explain.', badge: 'Incorrect', badgeColor: 'red' },
        { title: '(B) Returns include garments in unacceptable styles or colors, not just defects.', text: 'Irrelevant Detail. This clarifies what counts as "unsalable" but doesn\'t change the fact that the entire unsalable group is recycled. It cannot explain the 7% vs. 9% gap.', badge: 'Incorrect', badgeColor: 'red' },
        { title: '(C) Some inspectors overreport defects to appear efficient.', text: 'Wrong Direction. Overreporting inflates the unsalable count, which would push 7% *higher*\u2014but even then it doesn\'t explain why the recycled figure exceeds the unsalable figure.', badge: 'Incorrect', badgeColor: 'red' },
        { title: '(D) Total garment production increased slightly over the past year.', text: 'Out of Scope. The paradox concerns percentages at a given time. A slight change in the production total doesn\'t explain why two percentages of that same total disagree.', badge: 'Incorrect', badgeColor: 'red' },
        { title: '(E) Unsalable garments recorded by count; recycled garments recorded by weight.', text: 'This is the hidden distinction. The 7% is a percentage of total *items counted*; the 9% is a percentage of total *weight*. If unsalable garments are disproportionately heavy (e.g., coats and denim rather than socks and t-shirts), their share of total weight (9%) would naturally exceed their share of total count (7%). Different units, different percentages\u2014paradox resolved.', badge: 'Correct', badgeColor: 'green' }
      ]
    },

    { type: 'hr' },
    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'The hardest paradoxes often hinge on a single, subtle distinction. When a paradox seems to violate basic arithmetic\u2014the same group showing two different sizes\u2014do not question the math. Question the definitions. The LSAT is testing whether you can spot that the stimulus compares apples to oranges: a *count* of garments versus a *weight* of garments. Always ask: "Are we measuring the same thing in the same way?"' }
  ]
};
