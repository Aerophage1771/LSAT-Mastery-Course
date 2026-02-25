import { Lesson } from '../../types';

export const Lesson8_Drill_CompositionFlaw: Lesson = {
  id: "8-8",
  title: "Attacking Averages - The Composition Flaw (PT-103-S-3-Q-24)",
  content: [
    { type: 'h3', text: 'Concept: The Composition Flaw' },
    { type: 'paragraph', text: 'Arguments on the LSAT frequently use statistics like averages, percentages, and rates to support their conclusions. While these numbers seem objective and persuasive, they can be deeply misleading. High-difficulty questions often test your ability to look "under the hood" of a statistic and question what it truly represents.' },
    { type: 'paragraph', text: 'The **Composition Flaw** occurs when an argument discusses an "average" for a group but ignores the fact that the *composition* of that group has changed over time. If the mix of components changes, the average can change for reasons that have nothing to do with the author\'s conclusion.' },

    { type: 'callout', variant: 'tip', title: 'The Core Insight', text: 'Whenever you see the word "average" in a stimulus, immediately ask: **"Average of what group? Has that group changed?"** If the group\'s composition has shifted, the average is unreliable as evidence for a conclusion about any specific subgroup.' },

    { type: 'paragraph', text: 'Here is how the Composition Flaw relates to other statistical weakening strategies:' },
    { type: 'table', headers: ['Statistical Flaw', 'What Changes', 'Example'], rows: [
      ['**Composition Flaw**', 'The mix of items within the averaged group', 'Average car price rises because corporate fleet purchases (expensive) grew as a share of total sales'],
      ['**Denominator Neglect**', 'The base rate or total number being compared', '"More accidents in crosswalks" ignores that far more people cross in crosswalks'],
      ['**Part-to-Whole**', 'The scope — evidence about a part is applied to the whole', 'Bear population in one preserve grew, but the valley-wide population didn\'t'],
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'Practice: Spot the Composition Flaw' },
    {
      type: 'question-card',
      id: '8-8-practice',
      questionType: 'Weaken',
      difficulty: 'hard',
      stimulus: 'Over the last 25 years, the average price paid for a new car has steadily increased in relation to average individual income. This increase indicates that individuals who buy new cars today spend, on average, a larger amount relative to their incomes buying a car than their counterparts did 25 years ago.',
      question: 'Which one of the following, if true, most weakens the argument?',
      options: [
        '(A) There has been a significant increase over the last 25 years in the proportion of individuals in households with more than one wage earner.',
        '(B) The number of used cars sold annually is the same as it was 25 years ago.',
        '(C) Allowing for inflation, average individual income has significantly declined over the last 25 years.',
        '(D) During the last 25 years, annual new-car sales and the population have both increased, but new-car sales have increased by a greater percentage.',
        '(E) Sales to individuals make up a smaller proportion of all new-car sales than they did 25 years ago. (Correct)'
      ]
    },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },
    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: 'Let\'s engage with the text sentence by sentence to see how the author builds their statistical case.' },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis'}, items: [
        { title: '"Over the last 25 years, the **average price paid for a new car** has steadily increased in relation to average individual income."', text: 'This is the core evidence. The author presents a statistical ratio: (`Average Car Price` / `Average Individual Income`). This ratio has gone up. The key term is "average price paid for a new car." This average includes *all* new cars sold.'},
        { title: '"This increase indicates that **individuals who buy new cars today** spend, on average, a larger amount relative to their incomes buying a car than their counterparts did 25 years ago."', text: 'This is the conclusion. Notice the subtle but crucial shift in language. The conclusion is specifically about "**individuals who buy new cars**." The author is using data about *all* car sales to make a point about *individual* car buyers. This is a potential scope shift.'}
    ]},
    { type: 'h4', text: 'Step 2: Argument Analysis' },
    { type: 'paragraph', text: '**What Method of Reasoning is the argument using?**\nThe argument uses a statistical trend about a broad group (all new car sales) to draw a conclusion about a specific subgroup (sales to individuals).' },
    { type: 'paragraph', text: '**What\'s the Problem?**\nThe flaw is the assumption that the "average price paid for a new car" is a reliable indicator of what "individuals" are paying. The overall average includes all types of buyers: individuals, corporations buying fleets of luxury sedans, governments buying trucks, etc. If the proportion of these different buyers has changed, the overall average might be skewed. This is a **Composition Flaw**.' },
    { type: 'h4', text: 'Step 3: How Can We Weaken?' },
    { type: 'paragraph', text: 'To weaken this argument, you must show that the statistic in the premise is a misleading measure for the group in the conclusion.' },
    { type: 'list', items: ['**Attack the Composition of the Average:** Show that the composition of "all new car sales" has changed over 25 years. Specifically, introduce evidence that non-individual buyers (who might buy more expensive cars) now make up a larger part of the total sales. This would raise the overall average price, even if the price paid by individuals has stayed the same or even decreased.']},
    { type: 'h4', text: 'Step 4: Evaluation' },
    { type: 'paragraph', text: 'You are looking for the answer that shows the "average price paid" is a distorted figure that doesn\'t accurately reflect the spending habits of individual car buyers.' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis'}, items: [
        { title: '(A) There has been a significant increase over the last 25 years in the proportion of individuals in households with more than one wage earner.', text: '**[The Sidestep]**\nThis might explain *why* individuals could afford to spend more, but it doesn\'t challenge the conclusion that they *are* spending more. In fact, it might slightly strengthen it by providing a reason for the trend.', badge: 'Incorrect', badgeColor: 'red'},
        { title: '(B) The number of used cars sold annually is the same as it was 25 years ago.', text: '**[The Irrelevant Comparison]**\nThe argument is exclusively about the price of *new* cars. Information about used cars is outside the scope.', badge: 'Incorrect', badgeColor: 'red'},
        { title: '(C) Allowing for inflation, average individual income has significantly declined over the last 25 years.', text: '**[The Strengthener]**\nThe premise states the ratio (`Avg Car Price` / `Avg Individual Income`) has increased. If the denominator (`income`) has *declined*, as this choice says, it makes it even more likely that individuals are spending a larger proportion of their income on cars. This strengthens the conclusion.', badge: 'Incorrect', badgeColor: 'red'},
        { title: '(D) During the last 25 years, annual new-car sales and the population have both increased, but new-car sales have increased by a greater percentage.', text: '**[The Irrelevant Rate]**\nThis tells us that car buying has become more common, but it says nothing about the *price* paid relative to income, which is the core of the argument.', badge: 'Incorrect', badgeColor: 'red'},
        { title: '(E) Sales to individuals make up a smaller proportion of all new-car sales than they did 25 years ago.', text: '**[The Correct Choice - Composition Flaw]**\nThis is the perfect weakener. It shows that the composition of the group used to calculate the "average price" has changed. If individuals are now a smaller slice of the pie, it means that non-individual buyers (like corporations and governments) are a larger slice. If these non-individual buyers purchase more expensive vehicles on average, their increased presence in the market would drive up the *overall average price*, even if the prices paid by *individuals* have not changed at all. This breaks the link between the evidence and the conclusion.', badge: 'Correct', badgeColor: 'green'}
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'Visualizing the Composition Flaw' },
    { type: 'paragraph', text: 'If you\'re struggling with this concept, concrete numbers make it crystal clear:' },
    { type: 'table', headers: ['Time Period', 'Individual Sales', 'Corporate Sales', 'Overall Average Price'], rows: [
      ['**25 years ago**', '90 sales × $20k avg = $1.8M', '10 sales × $50k avg = $0.5M', '$23,000'],
      ['**Today**', '50 sales × $20k avg = $1.0M', '50 sales × $50k avg = $2.5M', '$35,000'],
    ]},
    { type: 'paragraph', text: 'The overall average skyrocketed from $23k to $35k, but the price for individual buyers remained exactly the same at $20k. The entire increase is explained by the changing composition of the buyer pool.' },
    { type: 'hr' },

    { type: 'h3', text: 'Key Takeaway' },
    { type: 'paragraph', text: 'When an LSAT argument uses an "average" to make a point, be a critical consumer of that statistic. Averages can hide more than they reveal.'},
    { type: 'list', ordered: true, items: [
        '**Always Ask: "Average of What?":** The moment you see the word "average," your first question should be, "What is the group being averaged?" In this case, the premise averages *all* new car sales, while the conclusion is only about *individual* sales. This mismatch is the flaw.',
        '**Look for a Changing Mix (The Composition Flaw):** The most effective way to attack a flawed average is to show that the composition of the group has changed over time. If a group is now composed of more of its "expensive" members, the average will go up, but this tells you nothing about the "cheaper" members.',
        '**Translate Statistics into Concrete Scenarios:** When in doubt, make up simple numbers as shown above. If you can construct a scenario where the evidence is true but the conclusion is false, you\'ve found the flaw — and the correct weakener will match that scenario.'
    ]}
  ]
};
