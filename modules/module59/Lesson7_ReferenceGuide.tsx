import { Lesson } from '../../types';

export const Lesson7_ReferenceGuide: Lesson = {
  id: "59-7",
  title: "Reference Guide",
  content: [
    { type: 'h2', text: 'LSAT Math — Comprehensive Reference Guide' },
    { type: 'paragraph', text: 'This guide consolidates every key concept, flaw type, and strategy from the LSAT Math module into a single, searchable reference. Use it for rapid review before test day and as a lookup tool during practice.' },

    { type: 'hr' },

    { type: 'h3', text: 'Master Flaw Types Table' },
    { type: 'paragraph', text: 'The table below catalogs every major quantitative flaw the LSAT tests. For each flaw you will find its name, a plain-language description, the kind of LSAT language that signals it, and a quick diagnostic for spotting it in real time.' },

    { type: 'table', headers: ['Flaw Type', 'Description', 'Typical LSAT Language', 'How to Spot It'], rows: [
      [
        'Numbers vs. Percentages',
        'Treats a raw count and a proportion as interchangeable. A large number may represent a tiny percentage of a large base, or a high percentage may correspond to a small absolute count.',
        '"more cases," "higher rate," "increased by X%," "the number rose"',
        'Ask: does the argument shift between a count and a rate/percentage without accounting for the base?'
      ],
      [
        'Part vs. Whole',
        'Assumes what is true of a subgroup is true of the entire group, or vice versa. A property of the whole does not necessarily distribute to every part.',
        '"most members," "the majority of," "overall," "as a group," "on average"',
        'Check whether the conclusion is about a different scope (part or whole) than the evidence.'
      ],
      [
        'Averages / Simpson\'s Paradox',
        'Draws conclusions from an overall average while ignoring that subgroup averages can each move in the opposite direction when group sizes differ.',
        '"average," "mean," "per capita," "typical," "on the whole"',
        'Ask: could unequal subgroup sizes reverse the trend? Could outliers skew the mean?'
      ],
      [
        'Base Rate Neglect',
        'Ignores the underlying prevalence of a condition when interpreting a test result or statistic, leading to inflated probability estimates.',
        '"test shows," "diagnosed," "identified," "detected," "screened"',
        'Look for a rare condition combined with a seemingly accurate test — the false-positive rate may dominate.'
      ],
      [
        'Gambler\'s Fallacy',
        'Assumes that past independent events influence future outcomes — e.g., a coin that landed heads five times is "due" for tails.',
        '"due," "bound to," "overdue," "streak," "long run," "eventually must"',
        'Ask: are the events truly independent? If yes, past outcomes do not change future probabilities.'
      ],
      [
        'Double Counting',
        'Counts overlapping categories as if they were mutually exclusive, inflating the total.',
        '"combined total," "in addition," "also," "as well as," "altogether"',
        'Check for overlapping sets. If someone can belong to both Group A and Group B, adding the groups overstates the count.'
      ],
      [
        'Relative vs. Absolute Change',
        'Presents a large relative change (e.g., "doubled") that masks a trivial absolute change, or a small relative change that hides a large absolute shift.',
        '"doubled," "tripled," "50% increase," "grew by X%," "rose sharply"',
        'Convert the relative change to absolute terms. "Doubled" from 1 to 2 is negligible; "increased 1%" on a billion is huge.'
      ],
      [
        'Percentage of a Percentage',
        'Applies a percentage to an already-percentage figure, creating a compounding error or a misleading impression of the actual change.',
        '"a 10% increase in the 20% share," "percentage points," "of the proportion"',
        'Distinguish percentage-point changes from percentage changes. A move from 20% to 22% is 2 percentage points but a 10% relative increase.'
      ]
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Signal Words Table' },
    { type: 'paragraph', text: 'When you encounter any of the following words in a stimulus, you are likely dealing with a quantitative argument. Recognizing them instantly saves precious seconds.' },

    { type: 'table', headers: ['Category', 'Signal Words'], rows: [
      ['Proportional / Relative', 'percent, percentage, proportion, ratio, rate, share, fraction, per capita, relative to'],
      ['Aggregate / Absolute', 'number, total, count, amount, sum, quantity, volume'],
      ['Central Tendency', 'average, mean, median, typical, normal, per, on average'],
      ['Comparison', 'more, fewer, less, greater, higher, lower, exceed, surpass, majority, minority'],
      ['Change Over Time', 'increase, decrease, rise, fall, grow, shrink, doubled, tripled, halved, decline'],
      ['Probability / Likelihood', 'likely, unlikely, probable, chance, odds, risk, frequency, incidence, prevalence'],
      ['Scope / Population', 'all, none, every, most, some, many, few, sample, population, group, category']
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'How LSAT Math Flaws Interact with Question Types' },
    { type: 'paragraph', text: 'Quantitative reasoning errors appear across multiple Logical Reasoning question types. The table below shows how the same underlying flaw manifests differently depending on the question stem.' },

    { type: 'table', headers: ['Question Type', 'What the Question Asks', 'How Math Flaws Appear'], rows: [
      [
        'Flaw',
        'Identify the error in the argument\'s reasoning.',
        'The correct answer will describe the quantitative error in abstract terms (e.g., "confuses a proportion with an absolute number"). Name the flaw, match the description.'
      ],
      [
        'Weaken',
        'Find information that undermines the conclusion.',
        'The correct answer introduces data that breaks the quantitative link — e.g., showing the base changed, the sample is biased, or the groups overlap.'
      ],
      [
        'Strengthen',
        'Find information that supports the conclusion.',
        'The correct answer closes the quantitative gap — e.g., confirming the base stayed constant, the sample is representative, or the events are not independent.'
      ],
      [
        'Paradox / Resolve',
        'Explain an apparent contradiction.',
        'The stimulus presents two seemingly conflicting statistics. The correct answer explains the discrepancy using a math concept (e.g., Simpson\'s Paradox, shifting base rates).'
      ],
      [
        'Must Be True / MSS',
        'Identify what follows from the information given.',
        'The stimulus provides numerical data. Watch for answer choices that make unwarranted jumps between percentages and absolutes or that generalize from subgroups to the whole.'
      ]
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Common Traps' },
    { type: 'paragraph', text: 'Below are the traps that appear most frequently in LSAT Math questions. Internalizing these patterns will help you eliminate wrong answers faster and avoid second-guessing correct ones.' },

    { type: 'breakdown', labels: { title: 'Trap', text: 'How It Works & How to Beat It' }, items: [
      {
        title: '1. The Impressive Number',
        text: '**How it works:** The stimulus cites a large raw number to make something sound significant (e.g., "10,000 side effects reported"). The argument ignores that the denominator is enormous (millions of users), making the rate trivially small.\n**How to beat it:** Always ask: "Out of how many?" Convert to a rate before judging significance.',
        badge: 'Numbers vs. %',
        badgeColor: 'red'
      },
      {
        title: '2. The Shifting Baseline',
        text: '**How it works:** The argument compares two percentages or rates without noting that the underlying totals changed. A company\'s market share can fall from 30% to 25% while its actual revenue doubles — because the total market grew.\n**How to beat it:** Check whether the base (total, population, denominator) stayed constant between the two time periods or groups.',
        badge: 'Part vs. Whole',
        badgeColor: 'indigo'
      },
      {
        title: '3. The Reversed Conditional',
        text: '**How it works:** "90% of people with the disease test positive" is confused with "90% of people who test positive have the disease." These are not the same — especially when the disease is rare.\n**How to beat it:** Identify the direction of the conditional. P(positive | disease) is not P(disease | positive).',
        badge: 'Base Rate',
        badgeColor: 'red'
      },
      {
        title: '4. The Outlier-Driven Average',
        text: '**How it works:** An extreme value inflates or deflates the mean, making it unrepresentative of the typical case. One CEO earning $50 million raises the "average salary" of a 100-person company dramatically.\n**How to beat it:** Ask whether the average is being used as a proxy for "typical." If outliers are possible, the median is more informative.',
        badge: 'Averages',
        badgeColor: 'blue'
      },
      {
        title: '5. The Composition / Division Error',
        text: '**How it works:** What is true of a group is assumed true of every member (division), or what is true of each member is assumed true of the group (composition). Every player on a team can be above-average for the league, yet the team\'s aggregate stat can still lag.\n**How to beat it:** Check scope. Does the evidence describe parts but the conclusion describe the whole, or vice versa?',
        badge: 'Part vs. Whole',
        badgeColor: 'indigo'
      },
      {
        title: '6. The "Due" Outcome',
        text: '**How it works:** After a string of one outcome, the argument assumes the opposite is now more likely. "We\'ve had five rainy days in a row, so tomorrow will be sunny." Independent events don\'t self-correct.\n**How to beat it:** Ask: are these events independent? If the outcome of one does not influence the next, past results are irrelevant.',
        badge: 'Gambler\'s',
        badgeColor: 'slate'
      },
      {
        title: '7. The Relative-Change Illusion',
        text: '**How it works:** A dramatic-sounding relative change ("tripled!") masks a tiny absolute change (from 1 to 3), or a modest relative change ("up 2%") hides a massive absolute shift on a large base.\n**How to beat it:** Convert between relative and absolute. Ask: "What are the actual numbers?"',
        badge: 'Rel. vs. Abs.',
        badgeColor: 'blue'
      }
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Test Day Checklist' },
    { type: 'paragraph', text: 'Run through this checklist whenever you encounter a quantitative stimulus in Logical Reasoning.' },

    { type: 'process', title: 'Quantitative Reasoning Checklist', steps: [
      '**Identify the language.** Circle or mentally note every signal word: percentage, rate, average, proportion, number, increase, etc. Naming the concept primes your brain for the associated flaw.',
      '**Pin down the base.** For every percentage, rate, or proportion, ask: "Of what total?" If the argument doesn\'t specify the base, that omission is likely the flaw.',
      '**Compare like with like.** Are the evidence and conclusion about the same group, time period, and unit of measurement? If the evidence is about a subgroup but the conclusion is about the whole (or vice versa), flag a Part vs. Whole error.',
      '**Check for independence.** If the argument predicts a future outcome based on past events, ask whether the events are independent. If they are, the past is irrelevant (Gambler\'s Fallacy).',
      '**Convert relative to absolute (and back).** When you see "doubled" or "50% increase," compute the actual numbers if possible. When you see a large raw number, compute the rate.',
      '**Watch for overlap.** If the argument adds two categories together, ask whether a member could belong to both. If so, the total is inflated (Double Counting).',
      '**Evaluate the average.** If the argument uses an average, ask whether outliers could skew it, and whether subgroup composition could reverse the trend (Simpson\'s Paradox).'
    ]},

    { type: 'callout', variant: 'tip', title: 'Quick Recall Mnemonic', text: 'Remember **B-A-R-G-D-P-R-P** for the eight flaw types: **B**ase rate neglect, **A**verages / Simpson\'s Paradox, **R**elative vs. absolute change, **G**ambler\'s fallacy, **D**ouble counting, **P**art vs. whole, numbers vs. **R**ates (percentages), **P**ercentage of a percentage.' },

    { type: 'callout', variant: 'summary', title: 'Reference Guide Summary', text: 'This guide covers all eight LSAT Math flaw types, signal words for rapid identification, question-type interactions, seven common traps, and a seven-step test day checklist. Return to it whenever you need a quick refresher before practice or on test day.' }
  ]
};
