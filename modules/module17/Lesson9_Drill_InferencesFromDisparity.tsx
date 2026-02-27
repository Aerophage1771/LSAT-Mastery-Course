import { Lesson } from '../../types';

export const Lesson9_Drill_InferencesFromDisparity: Lesson = {
  id: "17-9",
  title: "Drill: Inferences from Disparity (PT-106-S-2-Q-19)",
  content: [
    { type: 'h2', text: 'Inferences from Disparity' },
    { type: 'paragraph', text: 'Disparity-based inference questions present a conflict between two data points: a subgroup behaves one way, but the overall population behaves differently. Your task is to deduce what must be true about the remaining portion of the population\u2014the part not explicitly described\u2014in order for both statements to be simultaneously true.' },

    { type: 'paragraph', text: 'The underlying logic is mathematical. If Group A (a subset) has property X, but the Total (which includes Group A plus Group B) does not have property X overall, then Group B must lack property X to such a degree that it outweighs Group A\'s contribution. This often means Group B must be large, or its values must be extreme, or both.' },

    { type: 'h3', text: 'The Disparity Framework' },
    { type: 'process', title: 'Resolving Subgroup-Total Conflicts', steps: [
      '**Step 1 \u2014 Identify the Subgroup Claim:** What does the stimulus say about a specific subset of the population?',
      '**Step 2 \u2014 Identify the Total Claim:** What does the stimulus say about the entire population? How does it conflict with the subgroup claim?',
      '**Step 3 \u2014 Deduce the Complement:** What must be true about the remaining portion (Total minus Subgroup) to make both claims consistent? This deduction is the "Must Be True" inference.',
    ]},

    { type: 'callout', variant: 'tip', title: 'Think in Weighted Averages', text: 'If a subgroup pulls the average in one direction but the overall average goes the other way, the complement must be large enough and extreme enough to overpower the subgroup. The correct answer usually identifies either the size or the behavior of the complement.' },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Inferences from Disparity (PT-106-S-2-Q-19)' },
    { type: 'paragraph', text: 'This drill presents a classic subgroup-versus-total conflict involving mail delivery speed. The subgroup (correctly addressed mail) is fast, but the total population (all mail) is slow. Something must explain the gap.' },
    { type: 'paragraph', text: '**Instructions:** Identify the subgroup claim, the total claim, and what must be true about the complement before looking at the answers.' },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },


    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Map the Subgroup and Total Claims' },
    { type: 'paragraph', text: 'Separate the stimulus into its two data points and identify the conflict:' },

    { type: 'breakdown', labels: { title: 'Component', text: 'Details' }, items: [
      { title: 'Subgroup Claim', text: '"Nearly all" correctly addressed mail arrives within 2 business days. The only exception is mail damaged in transit. So the vast majority of correctly addressed mail is fast.', badge: 'Subgroup: Fast', badgeColor: 'blue' },
      { title: 'Total Claim', text: '"Most mail" (overall) arrives 3+ business days after being sent. The total population is predominantly slow.', badge: 'Total: Slow', badgeColor: 'indigo' },
      { title: 'The Conflict', text: 'The subgroup is fast, but the total is slow. These can only coexist if the complement (incorrectly addressed mail) is both large and slow enough to drag down the overall average.', badge: 'Disparity', badgeColor: 'red' },
    ]},

    { type: 'h4', text: 'Step 2: Deduce the Complement' },
    { type: 'paragraph', text: 'For "most mail" overall to be slow when "nearly all" correctly addressed mail is fast, the correctly addressed mail must be a minority of total mail. If correctly addressed mail were the majority, its speed would dominate the overall statistic, making most mail fast\u2014contradicting the total claim. Therefore, incorrectly addressed mail must constitute a large proportion of all mail.' },

    { type: 'h4', text: 'Step 3: Evaluate Each Answer' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) A large proportion of the mail that is correctly addressed is damaged in transit.', text: 'The stimulus says correctly addressed mail is slow "only when it is damaged in transit" and that "nearly all" arrives within 2 days. "Nearly all" being fast means very few are damaged. This answer contradicts the stimulus.', badge: 'Contradicts Stimulus', badgeColor: 'red' },
      { title: '(B) No incorrectly addressed mail arrives within two business days...', text: 'The stimulus tells us nothing about how fast incorrectly addressed mail travels. Some of it might arrive quickly. "No" is far too absolute to be supported.', badge: 'Extreme Language', badgeColor: 'red' },
      { title: '(C) Most mail that arrives within two business days... is correctly addressed.', text: 'This reverses the direction of the subgroup claim. We know most correct mail is fast, but we cannot conclude that most fast mail is correct. Some incorrectly addressed mail might also arrive quickly.', badge: 'Reversal Trap', badgeColor: 'red' },
      { title: '(D) A large proportion of mail is incorrectly addressed.', text: 'This is the mathematical necessity. If correctly addressed mail (nearly all fast) were the majority, the overall statistic would be "most mail is fast." Since the overall statistic is "most mail is slow," correctly addressed mail must be the minority\u2014meaning incorrectly addressed mail is a large proportion.', badge: 'Correct', badgeColor: 'green' },
      { title: '(E) More mail arrives within two business days... than arrives between two and three business days...', text: 'The stimulus provides no information about the distribution of arrival times within specific intervals. We know "most" is 3+ days, but we cannot compare the 0\u20132 day bucket to the 2\u20133 day bucket.', badge: 'Unsupported Detail', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Disparity Inference: Trap Taxonomy' },
    { type: 'table', headers: ['Trap', 'Mechanism', 'How to Spot It'], rows: [
      ['Contradiction', 'States something the stimulus explicitly denies', 'Check the answer against quantifiers like "nearly all" and "only when"'],
      ['Extreme Language', 'Uses "no," "all," or "never" without textual support', 'Flag absolute terms and verify they match the stimulus\'s hedged language'],
      ['Reversal', 'Swaps the direction of a subset relationship (most A are B \u2260 most B are A)', 'Verify which group is the subset and which is the property'],
      ['Unsupported Detail', 'Introduces a specific comparison not addressed by the stimulus', 'Check whether the stimulus provides data at the level of detail the answer requires'],
    ]},

    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'When a stimulus presents a subgroup that behaves one way but a total population that behaves the opposite way, the complement subgroup must be responsible for the difference. The "Must Be True" inference identifies either the size or the extreme behavior of that complement. Think in terms of weighted averages: the complement must be large enough and different enough to overpower the subgroup\'s contribution to the total.' },
  ]
};
