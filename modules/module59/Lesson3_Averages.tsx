import { Lesson } from '../../types';

export const Lesson3_Averages: Lesson = {
  id: '59-3',
  title: 'The Averages Fallacy',
  content: [
    { type: 'h3', text: 'Lesson 3: The Averages Fallacy' },
    { type: 'paragraph', text: '**Lesson Objective:** Understand how averages mislead\u2014through Simpson\'s Paradox, weighted-average errors, and mean-vs-median confusion\u2014and learn to dismantle LSAT arguments that exploit these traps.' },

    { type: 'h4', text: 'Simpson\'s Paradox' },
    { type: 'paragraph', text: 'A trend that appears in every subgroup can **reverse** when the subgroups are combined, because group sizes shift the overall weight.' },
    { type: 'table', headers: ['', 'Drug (Recovered / Total)', 'Placebo (Recovered / Total)'], rows: [
      ['Mild cases', '80 / 100 (80%)', '60 / 80 (75%)'],
      ['Severe cases', '30 / 50 (60%)', '40 / 70 (57%)'],
      ['Combined', '110 / 150 (73%)', '100 / 150 (67%)']
    ]},
    { type: 'paragraph', text: 'The drug wins in both subgroups. But if we flip the group sizes\u2014assigning more drug patients to the severe category\u2014the combined rate for the drug can drop below placebo. The lesson: **aggregated data hides subgroup composition.**' },

    { type: 'h4', text: 'Weighted Averages' },
    { type: 'paragraph', text: 'When subgroups differ in size, you cannot simply average their averages. A city where average salary rose in every district can still see its overall average fall if workers migrated from the high-salary district to the low-salary one, shifting weight toward the lower figure.' },

    { type: 'h4', text: 'Mean vs. Median' },
    { type: 'paragraph', text: 'The mean is pulled by outliers; the median resists them. "Average income is $150k" might reflect one CEO at $5M while everyone else earns $40k. The median ($40k) tells the typical story. LSAT arguments that cite "the average" often exploit this ambiguity\u2014always ask which measure is being used.' },

    { type: 'hr' },
    { type: 'h4', text: 'Practice Question' },
    { type: 'question-card', id: 'illustrative-59-3', questionType: 'LSAT Math', difficulty: 'medium',
      stimulus: 'A school board reports that average test scores rose in both the elementary and the middle-school divisions this year. A parent concludes that the district\'s overall average test score must therefore have risen as well.',
      question: 'The reasoning in the parent\'s argument is flawed because it fails to consider that',
      options: [
        '(A) the average for each division could have risen by different amounts',
        '(B) individual students may have scored lower even though the division average rose',
        '(C) a shift in enrollment between the two divisions could cause the combined average to fall despite gains in each division (Correct)',
        '(D) test difficulty may have changed from one year to the next',
        '(E) some students may attend both divisions during the same academic year'
      ]
    },

    { type: 'callout', variant: 'summary', title: 'Full Analysis', text: '**(C) is correct.** This is Simpson\'s Paradox. If many students moved from the higher-scoring division to the lower-scoring one, the combined average can decline even though each division improved. The parent\'s error is ignoring the shifting weight of the subgroups.\n\nThe other options miss the mathematical mechanism: (A) is irrelevant to whether the combined average rises; (B) confuses individual and group trends; (D) introduces an outside variable; (E) is factually implausible in this scenario.' }
  ]
};
