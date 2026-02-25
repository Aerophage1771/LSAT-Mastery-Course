import { Lesson } from '../../types';

export const Lesson5_Drill_NumericalReasoning: Lesson = {
  id: "17-5",
  title: "Drill: Numerical Reasoning (PT-119-S-3-Q-11)",
  content: [
    { type: 'h2', text: 'Numerical Reasoning' },
    { type: 'paragraph', text: 'Numerical reasoning questions embed simple mathematical relationships inside a narrative. The stimulus describes totals, proportions, percentages, or ratios, and the correct answer is the conclusion that follows when you translate the prose into arithmetic. You do not need to perform complex calculations\u2014you need to recognize which mathematical relationship the stimulus establishes and identify the answer that necessarily follows from it.' },

    { type: 'paragraph', text: 'The most common numerical pattern on the LSAT is the constant-ratio inference: if a ratio stays the same while one component changes, the other component must change proportionally. Other patterns include majority overlaps ("more than half" appearing twice forces a shared group) and subgroup-to-total reasoning (a known property of a subgroup constraining claims about the total).' },

    { type: 'h3', text: 'Common Numerical Patterns' },
    { type: 'table', headers: ['Pattern', 'Setup', 'What Must Be True'], rows: [
      ['Constant Ratio', 'Ratio stays constant, denominator increases', 'Numerator must also increase by the same proportion'],
      ['Majority Overlap', '"Most A are B" and "Most A are C"', 'Some A are both B and C (the two majorities overlap)'],
      ['Subgroup Constraint', 'A subgroup has a higher rate than the total', 'The remaining group must have a lower rate to produce the overall average'],
      ['Percentage vs. Count', 'Percentage decreases but total grows', 'The raw count could still increase despite the lower percentage'],
    ]},

    { type: 'callout', variant: 'tip', title: 'Translate Before You Evaluate', text: 'Before looking at answer choices, restate the stimulus as a simple equation or inequality. For example: "Average = Total Students / Total Teachers. Teachers up 30%, Average unchanged, therefore Students up 30%." This pre-phrase eliminates most wrong answers immediately and prevents you from being distracted by narrative details.' },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Numerical Reasoning (PT-119-S-3-Q-11)' },
    { type: 'paragraph', text: 'This drill tests the constant-ratio pattern. The stimulus provides three numerical facts\u2014a budget increase, a teacher increase, and a constant average\u2014and asks what must follow.' },
    { type: 'paragraph', text: '**Instructions:** Translate the stimulus into a mathematical relationship and commit to an answer before scrolling down to the analysis.' },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: '17-5-drill',
      questionType: 'Must Be True',
      difficulty: 'medium',
      stimulus: 'In early 1990, Queenston instituted a tax increase that gave its school system a larger operating budget. The school system used the larger budget to increase the total number of teachers in the system by 30 percent between 1990 and 1993. Nevertheless, there was no change in the average number of students per teacher between 1990 and 1993.',
      question: 'If the statements above are true, then on the basis of them which one of the following must also be true?',
      options: [
        '(A) No classes in Queenston\'s school system experienced an increase in enrollment between 1990 and 1993.',
        '(B) The total number of students enrolled in Queenston\'s school system increased between 1990 and 1993. (Correct)',
        '(C) The operating budget of Queenston\'s school system increased by exactly 30 percent between 1990 and 1993.',
        '(D) Most teachers who worked for Queenston\'s school system in 1990 were still working for the system in 1993.',
        '(E) The quality of education in Queenston\'s school system improved between 1990 and 1993.',
      ],
    },

    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Translate to Math' },
    { type: 'paragraph', text: 'The stimulus establishes a simple equation:' },
    { type: 'blockquote', text: 'Average Students per Teacher = Total Students / Total Teachers' },
    { type: 'paragraph', text: 'We are told that Total Teachers increased by 30% and the Average remained constant. For a fraction to maintain the same value when the denominator increases, the numerator must increase by the same proportion. Therefore, Total Students must have also increased.' },

    { type: 'callout', variant: 'default', title: 'Pre-Phrase', text: 'The total number of students must have increased (by approximately 30%) to keep the student-to-teacher ratio constant while teachers increased by 30%.' },

    { type: 'h4', text: 'Step 2: Evaluate Each Answer' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) No classes experienced an increase in enrollment...', text: 'The stimulus discusses system-wide averages and totals. It says nothing about individual class sizes. The total enrollment could rise while some classes stay the same size or shrink. This confuses aggregate data with individual data points.', badge: 'Aggregation Trap', badgeColor: 'red' },
      { title: '(B) The total number of students enrolled increased...', text: 'This is a mathematical necessity. If Teachers increased by 30% and Average = Students/Teachers remained constant, then Students must have increased by the same proportion. The arithmetic demands it.', badge: 'Correct', badgeColor: 'green' },
      { title: '(C) The operating budget increased by exactly 30 percent...', text: 'The stimulus says the budget was used to increase the number of teachers by 30%. But budget and teacher count are not the same thing\u2014the budget could have increased by more than 30% (with extra funds going to salaries, equipment, etc.) or by less if per-teacher costs fell.', badge: 'Assumption Trap', badgeColor: 'red' },
      { title: '(D) Most teachers who worked in 1990 were still working in 1993...', text: 'The stimulus tracks total numbers, not individual people. The system could have experienced 100% turnover and still have 30% more teachers overall. Headcount and retention are different metrics.', badge: 'Individuals vs. Totals', badgeColor: 'red' },
      { title: '(E) The quality of education improved...', text: '"Quality" is a subjective value judgment. The stimulus provides only numerical facts about ratios and counts. Nothing in the arithmetic tells us whether education got better or worse.', badge: 'Value Judgment Trap', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Numerical Reasoning Trap Taxonomy' },
    { type: 'table', headers: ['Trap', 'Mechanism', 'Signal Words'], rows: [
      ['Aggregation', 'Applies a system-wide conclusion to individual cases', '"every," "no single," "each class" when the stimulus uses only totals'],
      ['Assumption', 'Equates two different metrics that happen to be related', '"exactly," "by the same amount" when only one metric is specified'],
      ['Individuals vs. Totals', 'Confuses headcount with identity of specific people', '"still working," "the same teachers" when the stimulus only tracks totals'],
      ['Value Judgment', 'Injects a qualitative assessment from purely quantitative data', '"improved," "better," "worse" when the stimulus states only numbers'],
    ]},

    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'When a Must Be True stimulus contains numerical relationships, translate the prose into a simple equation or inequality before evaluating answers. The correct answer is the one that follows mathematically from the stated relationships. Wrong answers typically confuse aggregates with individuals, assume unstated equalities between different metrics, or inject qualitative judgments into purely quantitative scenarios.' },
  ]
};
