import { Lesson } from '../../types';

export const Lesson4_Drill_Numbers: Lesson = {
  id: "9-4",
  title: "Drill: Strengthening Arguments with Numbers (PT-111-S-3-Q-4)",
  content: [
    { type: 'h2', text: 'Strengthening Numerical Arguments' },
    { type: 'paragraph', text: "The LSAT frequently uses arguments that involve numbers, percentages, rates, and totals. A common logical leap is to treat these concepts as interchangeable when they are not. Percentages describe proportions; absolute numbers describe counts. A rate can go up while a total goes down, and vice versa. To strengthen an argument that conflates these, you must provide the missing piece of information that makes the author's mathematical assumption valid." },

    { type: 'hr' },

    { type: 'h3', text: 'The Percentage ↔ Number Gap' },
    { type: 'paragraph', text: "The single most common numerical gap on the LSAT involves the relationship between **percentages** and **absolute amounts**. Here is the core insight:" },
    { type: 'callout', variant: 'default', title: 'The Rule', text: "A percentage is a proportion of a whole. To convert a percentage into an absolute number, you must know the size of the whole (the **base**). Without the base, a higher percentage does not necessarily mean a larger absolute amount.\n\n**Example:** 10% of $50,000 = $5,000. But 8% of $100,000 = $8,000. The smaller percentage yields the larger dollar amount because the base is bigger." },
    { type: 'paragraph', text: "When an argument jumps from a percentage to an absolute amount (or vice versa), the gap is almost always about the **size of the base**. To strengthen the argument, you need to confirm that the base is large enough (or small enough) to make the author's conclusion valid." },

    { type: 'h3', text: 'Common Numerical Gap Patterns' },
    { type: 'table', headers: ['Gap Pattern', 'What the Author Does', 'What\'s Missing'], rows: [
      ['**Percentage → Absolute Amount**', 'Concludes a higher percentage means a higher absolute number.', 'The size of the base. A higher percentage of a smaller base can yield a smaller absolute number.'],
      ['**Absolute Amount → Percentage**', 'Concludes a higher count means a higher rate or proportion.', 'The size of the group. A larger group naturally produces more cases even at a lower rate.'],
      ['**Rate Over Time**', 'Concludes a rising rate means a rising total (or vice versa).', 'Whether the base changed over time. If the base shrank, the rate could rise while the total fell.'],
      ['**Per Capita vs. Total**', 'Treats per-person metrics as equivalent to aggregate metrics.', 'Population size. A city with lower per-capita crime but a much larger population may have more total crimes.'],
    ]},

    { type: 'callout', variant: 'tip', title: 'Strengthening Strategy', text: "To strengthen a numerical argument, provide information about the **missing base**. If the argument goes from percentage to absolute amount, confirm that the base is large enough to support the conclusion. If it goes from count to rate, confirm that the group size doesn't undermine the comparison." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Strengthening Arguments with Numbers (PT-111-S-3-Q-4)' },

    { type: 'h4', text: 'The Problem' },
    { type: 'blockquote', text: 'For next year, the Chefs\' Union has requested a 10 percent salary increase for each of its members, whereas the Hotel Managers\' Union has requested only an 8 percent salary increase for each of its members. These facts demonstrate that the average dollar amount of the raises that the Chefs\' Union has requested for next year is greater than that of the raises requested by the Hotel Managers\' Union.' },
    { type: 'h4', text: 'The Question' },
    { type: 'paragraph', text: 'Which one of the following, if true, most strengthens the argument?' },

    { type: 'question-card',
      id: '9-4-drill',
      questionType: 'Strengthen',
      difficulty: 'medium',
      stimulus: 'For next year, the Chefs\' Union has requested a 10 percent salary increase for each of its members, whereas the Hotel Managers\' Union has requested only an 8 percent salary increase for each of its members. These facts demonstrate that the average dollar amount of the raises that the Chefs\' Union has requested for next year is greater than that of the raises requested by the Hotel Managers\' Union.',
      question: 'Which one of the following, if true, most strengthens the argument?',
      options: [
        '(A) The Chefs\' Union has many more members than does the Hotel Managers\' Union.',
        '(B) The Chefs\' Union is a more powerful union than is the Hotel Managers\' Union and is therefore more likely to obtain the salary increases it requests.',
        '(C) The current salaries of the members of the Chefs\' Union are, on average, higher than the current salaries of the members of the Hotel Managers\' Union. (Correct)',
        '(D) The average dollar amount of the raises that the members of the Chefs\' Union received last year was equal to the average dollar amount of the raises that the members of the Hotel Managers\' Union received.',
        '(E) The members of the Chefs\' Union received salary increases of 10 percent in each of the last two years, while the members of the Hotel Managers\' Union received salary increases of only 8 percent in each of the last two years.',
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "Let's engage with the text sentence by sentence to see how the author builds their mathematical case." },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: '"For next year, the Chefs\' Union has requested a 10 percent salary increase for each of its members, whereas the Hotel Managers\' Union has requested only an 8 percent salary increase for each of its members."', text: 'You are given the evidence. It is a comparison of two **percentages**. The Chefs\' Union requested a higher percentage (10%) than the Hotel Managers\' Union (8%). Both percentages describe raises *per member*.' },
      { title: '"These facts demonstrate that the average dollar amount of the raises that the Chefs\' Union has requested for next year is greater than that of the raises requested by the Hotel Managers\' Union."', text: 'This is the conclusion. The author shifts from comparing **percentages** to comparing **absolute dollar amounts**. They are claiming that the 10% raise for chefs translates to more actual money per person than the 8% raise for managers.' },
    ] },

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: '**What Method of Reasoning is the argument using?**\nThe argument makes a conclusion about absolute dollar amounts based on evidence about percentages. It assumes that a higher percentage automatically translates to a higher absolute amount.' },
    { type: 'paragraph', text: "**What's the Problem?**\nThis assumption is not always true. A percentage is a portion of a whole, and the size of that whole — the **base salary** — matters enormously. Consider:" },
    { type: 'list', items: [
      '10% of $50,000 = **$5,000**',
      '8% of $100,000 = **$8,000**',
    ]},
    { type: 'paragraph', text: "If the hotel managers' base salary is significantly higher than the chefs' base salary, then the managers' 8% raise could easily exceed the chefs' 10% raise in dollar terms. The argument is only valid if the chefs' base salary is at least comparable to the managers'." },

    { type: 'h4', text: 'Step 3: Prephrase the Strengthener' },
    { type: 'paragraph', text: "Since the core problem is the jump from percentages to absolute amounts, the missing piece is the **base salary**. Prephrase: *\"The argument would be stronger if I found out that the chefs' average salary is at least as high as the managers' average salary.\"* If the base is the same or higher, then a higher percentage necessarily produces a higher dollar amount." },

    { type: 'h4', text: 'Step 4: Evaluate the Choices' },
    { type: 'paragraph', text: "You are looking for the answer that provides information about the base salaries, confirming that the author's mathematical assumption holds true." },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) The Chefs\' Union has many more members than does the Hotel Managers\' Union.', text: '**[The Totals vs. Averages Trap]**\nThe conclusion is about the *average* dollar amount per member, not the total amount of money the company would spend on all raises combined. The number of members in each union is irrelevant to the per-person average. Even if there were a million chefs, the average dollar raise per chef depends on the percentage and the base salary, not the headcount.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) The Chefs\' Union is a more powerful union and more likely to obtain its requested increases.', text: '**[The Scope Mismatch]**\nThis choice is about the *likelihood of success* in negotiations. The argument is only about the size of the *request*, not whether that request will be granted. Whether the union gets its raise tells us nothing about the dollar value of the raise being requested.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) The current salaries of the members of the Chefs\' Union are, on average, higher than the current salaries of the members of the Hotel Managers\' Union.', text: '**[The Correct Choice — Provides the Missing Base]**\nThis directly fills the logical gap. If the chefs\' base salary (the "whole") is larger than the managers\' base salary, then a larger percentage (10%) of that larger whole will certainly be a greater dollar amount than a smaller percentage (8%) of a smaller whole. The math is now conclusive: higher percentage × higher base = definitely a higher dollar raise.', badge: 'Correct', badgeColor: 'green' },
      { title: '(D) The average dollar amount of the raises received last year was equal for both unions.', text: '**[The Irrelevant History Trap]**\nKnowing that last year\'s *dollar amounts* were the same does not tell you anything about this year\'s *base salaries*. Last year, chefs could have gotten a 10% raise on $50k ($5k) and managers a 5% raise on $100k ($5k). The dollar amounts match, but the base salaries are very different. This information is useless for calculating this year\'s request.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) Both unions received the same percentage increases in each of the last two years.', text: '**[The Irrelevant History Trap]**\nSimilar to (D), past percentages do not allow you to calculate the current base salaries. You cannot know which group\'s salary is currently higher just from knowing that chefs got 10% raises and managers got 8% raises previously — it depends on what the starting salaries were before those raises. Without a starting point, the historical percentages are uninformative.', badge: 'Incorrect', badgeColor: 'red' },
    ] },

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "Whenever an LSAT argument shifts between percentages and absolute numbers, the logical gap almost always involves the **size of the base**. To strengthen such an argument, find the answer choice that provides information about this base amount, confirming that the author's mathematical assumption holds true.\n\nRemember the formula: **Percentage × Base = Absolute Amount.** If the argument gives you only the percentage and concludes about the absolute amount, the base is the missing variable. If the argument gives you only the absolute amount and concludes about the percentage, the base is still the missing variable. In either case, the strengthener will supply the base." },
  ]
};
