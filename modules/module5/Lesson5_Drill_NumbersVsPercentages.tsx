import { Lesson } from '../../types';

export const Lesson5_Drill_NumbersVsPercentages: Lesson = {
  id: "5-5",
  title: "Drill: Numbers vs. Percentages Flaw",
  content: [
    { type: 'h2', text: 'Drill: The Numbers vs. Percentages Flaw' },

    { type: 'h3', text: 'Concept Focus: Data & Sampling Errors' },
    { type: 'paragraph', text: "This lesson focuses on a very common type of data interpretation error: **confusing numbers, percentages, and context**. Arguments that rely on statistics are often flawed because they draw conclusions without considering the full context of the numbers they present." },

    { type: 'hr' },

    { type: 'h3', text: 'The Core Error Explained' },
    { type: 'paragraph', text: 'The Numbers vs. Percentages flaw occurs when an argument uses a **raw number** (e.g., "1,000 accidents") to draw a conclusion about a **rate or likelihood** (e.g., "more dangerous"), or vice versa. To make a valid comparison between two groups, you almost always need to know the **total size** of those groups.' },

    { type: 'h4', text: 'Why Numbers and Percentages Can Diverge' },
    { type: 'paragraph', text: 'Consider this scenario:' },
    { type: 'table', headers: ['Group', 'Total People', 'People Affected', 'Raw Number', 'Percentage'], rows: [
      ['**Group A**', '10,000', '500', '500', '5%'],
      ['**Group B**', '1,000', '100', '100', '10%'],
    ]},
    { type: 'paragraph', text: 'Group A has a higher **raw number** of affected people (500 vs. 100). But Group B has a higher **rate** (10% vs. 5%). Depending on whether you use the number or the percentage, you reach opposite conclusions about which group is "more affected."' },

    { type: 'callout', variant: 'default', title: 'The Key Insight', text: 'A larger group can have MORE total cases but a LOWER rate. A smaller group can have FEWER total cases but a HIGHER rate. If an argument uses one type of statistic (numbers) to reach a conclusion about the other (rates), it commits the Numbers vs. Percentages flaw.' },

    { type: 'h4', text: 'Common Patterns of This Flaw' },
    { type: 'breakdown', labels: { title: 'Pattern', text: 'Example' }, items: [
      { title: 'More total events → "more likely"', text: '"More car accidents happen on highways than on back roads. Therefore, highways are more dangerous." — Ignores that far more driving occurs on highways, so the *rate* of accidents per mile may be lower.', badge: 'Number→Rate', badgeColor: 'red' },
      { title: 'Higher percentage → "more total"', text: '"A higher percentage of small businesses fail than large businesses. Therefore, more small businesses fail each year." — This could be false if there are far fewer small businesses than large ones.', badge: 'Rate→Number', badgeColor: 'red' },
      { title: 'Comparing unlike groups', text: '"City A has twice as many robberies as City B. Therefore, City A is more dangerous." — If City A has ten times the population, its per-capita robbery rate is actually much lower.', badge: 'Missing Base', badgeColor: 'red' },
    ]},

    { type: 'h4', text: 'The Critical Question' },
    { type: 'paragraph', text: 'Whenever you see an argument using statistics to compare groups, ask yourself: **"Are these groups of a similar size?"** If the groups are different sizes and the argument doesn\'t account for this, it likely commits the Numbers vs. Percentages flaw.' },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },

    { type: 'h3', text: 'Full Step-by-Step Analysis' },
    { type: 'process', title: 'Applying the 4-Step Method', steps: [
      '**Step 1 — Deconstruct the Argument:**\n• **Conclusion:** The belief that left-handed people are more accident-prone is a myth (i.e., left-handed people are NOT more accident-prone).\n• **Premise:** More household accidents are caused by right-handed people than by left-handed people (in total numbers).',
      '**Step 2 — Find the Logical Gap:** The argument uses a premise about the **total number** of accidents to draw a conclusion about how **accident-prone** each group is. "Accident-prone" is a measure of risk or rate — how likely an individual member of each group is to cause an accident. To compare the accident *rate* of the two groups, we can\'t just look at total numbers. We need to know the **total number of people in each group**. The population of right-handed people is vastly larger than the population of left-handed people (roughly 9 to 1). So, even if left-handed people were individually much clumsier, the sheer number of right-handed people would lead to a higher total number of accidents.',
      '**Step 3 — Prephrase:** "The argument uses absolute numbers to draw a conclusion about a rate. It fails to consider that there are far more right-handed people than left-handed people." In other words: it ignores the base rate.',
      '**Step 4 — Match to Answer:** Look for an answer that describes ignoring group size or relative frequency.',
    ]},

    { type: 'h3', text: 'Answer Choice Breakdown' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) makes a distinction where there is no real difference...', text: 'The distinction between left-handed and right-handed people is real and relevant to the argument. This doesn\'t describe the flaw.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) takes no account of the relative frequency of left-handed people in the population as a whole', text: 'This is a perfect match. The "relative frequency" is the proportion of left-handed vs. right-handed people in the total population. This is the exact piece of context the argument ignores.', badge: 'Correct', badgeColor: 'green' },
      { title: '(C) uses the word "accidents" in two different senses', text: 'This describes an equivocation flaw. The word "accidents" is used consistently to mean household mishaps throughout.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) ignores the possibility that some household accidents are caused by more than one person', text: 'This is a minor, irrelevant detail. The core problem is the comparison between two groups of vastly different sizes, not the mechanics of individual accidents.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) gives wholly irrelevant evidence and simply disparages an opposing position by calling it a "myth"', text: 'The evidence is not "wholly irrelevant" — the total number of accidents IS relevant to a discussion of accident rates, even if it\'s used incorrectly. The argument provides (flawed) evidence; it doesn\'t just dismiss the view.', badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Practice Question' },

    { type: 'h3', text: 'Analysis' },
    { type: 'process', title: 'Step-by-Step', steps: [
      '**Conclusion:** Large factories are "far more dangerous" (a claim about rate/risk) than small workshops.',
      '**Premise:** Large factories have three times the total number of injuries (a raw number).',
      '**Gap:** "More dangerous" is about the *rate* of injury per worker. A factory with 500 workers and 30 injuries (6% rate) is actually safer than a workshop with 50 workers and 10 injuries (20% rate), even though the factory has more total injuries.',
      '**Prephrase:** "Uses raw numbers to draw a conclusion about rates without accounting for the different number of workers in each type of workplace."',
      '**Match:** Answer (C) describes exactly this — the higher total could be explained by the larger workforce.',
    ]},
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) fails to define "workplace injury"', text: 'Definitional precision is a secondary concern. The core flaw is the number-to-rate confusion.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) assumes all large factories are identical', text: 'The argument compares categories (large vs. small), not individual factories. This isn\'t the core problem.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) overlooks that large factories have more workers, which could account for the higher total', text: 'This precisely identifies the Numbers vs. Percentages flaw: the higher total number may simply reflect the larger workforce, not a higher rate.', badge: 'Correct', badgeColor: 'green' },
      { title: '(D) ignores unreported injuries at small workshops', text: 'While underreporting is possible, this is speculative. The structural flaw (ignoring group size) is more fundamental.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) relies on potentially biased data', text: 'Nothing in the argument suggests the data is biased. This is an unsupported speculation.', badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Recognizing the Flaw in LSAT Answer Choice Language' },
    { type: 'paragraph', text: 'The LSAT uses several different phrasings to describe the Numbers vs. Percentages flaw. Familiarize yourself with these:' },
    { type: 'table', headers: ['LSAT Phrasing', 'What It Means'], rows: [
      ['"takes no account of the relative frequency of X in the population"', 'Ignores the base rate / group size'],
      ['"fails to consider the proportion of X relative to Y"', 'Uses numbers when rates are needed'],
      ['"confuses absolute numbers with proportional rates"', 'Direct description of the flaw'],
      ['"ignores the possibility that the total number is a function of the total opportunity"', 'More events happen because there are more chances for them to happen'],
      ['"fails to consider the overall size of the groups being compared"', 'Different group sizes make raw numbers misleading'],
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• **Numbers ≠ Rates:** A higher total number of events does NOT mean a higher likelihood or rate. You must know the size of the groups being compared.\n• **\"More\" vs. \"More Likely\":** Pay close attention to this distinction. A higher total number of events (\"more\") in a group does not mean individual members are \"more likely\" to experience that event.\n• **The Critical Question:** When an argument compares two groups using statistics, always ask: \"Are these groups of a similar size?\" If not, raw numbers are misleading.\n• **LSAT Language:** Watch for \"relative frequency,\" \"proportion,\" \"rate,\" and \"percentage\" in answer choices — these signal the Numbers vs. Percentages flaw.\n• **Base rate matters:** Even outside explicit number/percentage confusion, ignoring the overall frequency of a phenomenon (the base rate) leads to flawed statistical reasoning." },
  ]
};
