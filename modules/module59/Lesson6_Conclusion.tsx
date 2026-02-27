import { Lesson } from '../../types';

export const Lesson6_Conclusion: Lesson = {
  id: "59-6",
  title: "Conclusion: Your Test Day Strategy",
  content: [
    { type: 'h3', text: 'Module Conclusion: Mastering LSAT Math' },
    { type: 'paragraph', text: 'You have learned that LSAT Math is not a math test—it is a logic test in disguise. Numbers, percentages, and statistics are the camouflage; the underlying flaws are always logical. This final lesson consolidates everything you\'ve learned, introduces advanced multi-flaw scenarios, and equips you with a rapid-fire diagnostic routine for test day.' },

    { type: 'hr' },

    { type: 'h4', text: 'Combining Quantitative Flaws' },
    { type: 'paragraph', text: 'The most challenging LSAT Math questions don\'t rely on a single fallacy—they layer multiple quantitative errors into a single argument. Recognizing these compound flaws requires fluency with every flaw type from this module.' },

    { type: 'paragraph', text: '**Why the LSAT combines flaws:** A single-flaw argument is relatively easy to spot once you know the pattern. By stacking two or three errors, the test makers create arguments where identifying one flaw can blind you to another—and the "most attractive wrong answer" often describes the secondary flaw rather than the primary one.' },

    { type: 'list', items: [
      '**Common Combination 1: Percentage + Part vs. Whole.** An argument cites a percentage from a subgroup and applies it to the whole population. Example: "40% of surveyed users in San Francisco prefer Product X. Since this is the highest preference rate in any city, Product X will dominate the national market." Flaws: (1) Treating a percentage without its total—40% of how many people? (2) Generalizing from one city to the entire nation.',
      '**Common Combination 2: Average + Gambler\'s Fallacy.** An argument uses an average frequency to predict a specific future event. Example: "This company\'s stock has returned an average of 12% annually for the past decade, but it returned only 5% last year. Therefore it will likely return well above 12% this year to get back to its average." Flaws: (1) Treating the average as a target each year must hit. (2) Gambler\'s Fallacy—assuming below-average performance makes above-average performance "due."',
      '**Common Combination 3: Overlapping Sets + Net Effect.** An argument adds percentages from overlapping categories and ignores offsetting effects. Example: "30% of employees reported stress from workload, and 25% reported stress from commuting. Since 55% of employees are stressed, our new remote work policy—which eliminates commuting—will reduce stress by nearly half." Flaws: (1) Overlapping sets—some employees are stressed by both, so the total isn\'t 55%. (2) Net effect—remote work might introduce new stressors like isolation.',
      '**Common Combination 4: Rate vs. Absolute Number + Inverse Probability.** An argument uses raw numbers to imply a high rate, then reverses a conditional. Example: "Most industrial accidents occur in factories that have safety training programs. Factory X has a training program. Therefore, working at Factory X is particularly dangerous." Flaws: (1) Most factories have training programs, so most accidents naturally occur there—the *rate* per factory may be lower. (2) The argument reverses the conditional: P(training | accident) is not P(accident | training).'
    ]},

    { type: 'callout', variant: 'tip', title: 'Multi-Flaw Strategy', text: 'When you spot one flaw, don\'t stop. Ask: "Is there a second error here?" On the LSAT, the correct answer targets the *primary* flaw—the one the conclusion depends on most. Secondary flaws often appear as tempting wrong answers.' },

    { type: 'hr' },

    { type: 'h4', text: 'Spotting Quantitative Arguments' },
    { type: 'paragraph', text: 'Before you can analyze a quantitative flaw, you need to recognize that the argument *is* quantitative. LSAT Math arguments don\'t always use explicit numbers—they often rely on comparative or statistical language that implies numerical reasoning.' },

    { type: 'h4', text: 'Signal Words and Patterns' },
    { type: 'paragraph', text: 'Train yourself to flag these terms the moment you read them. Each one signals a specific type of quantitative reasoning—and a specific category of potential error.' },

    { type: 'table',
      headers: ['Signal Words', 'What They Imply', 'Flaw to Check'],
      rows: [
        ['percent, proportion, fraction, share, ratio', 'Relative comparison to a total', 'Is the total provided? Could it have changed?'],
        ['more, fewer, greater, less, increase, decrease', 'Absolute number comparison', 'Is this about the rate or the raw count?'],
        ['average, mean, median, typical, normal', 'Central tendency claim', 'Outliers? Weighted groups? Mean vs. median?'],
        ['most, majority, many, few, rarely', 'Frequency or proportion claim', 'Of what population? Is the sample representative?'],
        ['rate, likelihood, probability, risk, chance', 'Frequency relative to opportunities', 'Rate vs. absolute number confusion?'],
        ['due, overdue, bound to, streak, trend', 'Prediction based on past frequency', 'Gambler\'s Fallacy? Independent events?'],
        ['total, overall, combined, aggregate, net', 'Whole-group claim', 'Part vs. whole? Net effect? Overlapping sets?'],
        ['doubled, tripled, X times as many', 'Multiplicative comparison', 'From what base? Doubling from 1 to 2 vs. 1M to 2M?'],
        ['survey, study, sample, respondents', 'Evidence from a subset', 'Is the sample representative? Self-selection bias?'],
        ['cost, revenue, profit, savings, spending', 'Financial calculation', 'Net effect? Are both sides of the ledger shown?']
      ]
    },

    { type: 'paragraph', text: '**Pro Tip:** When you see two or more signal words from different rows in the same argument, the argument is almost certainly combining flaws. Slow down and analyze each quantitative claim independently before evaluating the conclusion.' },

    { type: 'hr' },

    { type: 'h4', text: 'Advanced Practice: The Multi-Flaw Argument' },
    { type: 'paragraph', text: 'Consider this illustrative example that layers multiple quantitative errors—exactly the kind of complex argument you might encounter on the most difficult LSAT questions:' },


    { type: 'accordion', title: 'Full Analysis of Advanced Practice Question', content: [
      { type: 'paragraph', text: '**Why (B) is correct:** The argument attributes the decreased wait times entirely to the new triage policy, but it provides a glaring alternative explanation in its own premises: three new urgent care clinics opened, and ER visits dropped by 35%. If a third of patients shifted to urgent care clinics, wait times would naturally fall—regardless of any triage changes. The argument fails to disentangle the effect of the policy from the effect of reduced patient volume.' },
      { type: 'paragraph', text: '**Bonus Analysis — Multiple Flaws Present:**' },
      { type: 'list', items: [
        '**Flaw 1 (Primary — Alternative Cause / Net Effect):** The new clinics reduced ER volume. The wait time decrease could be entirely due to fewer patients, not better triage. This is the primary flaw that answer (B) captures.',
        '**Flaw 2 (Average Masking):** The average dropped from 4.2 to 3.1 hours, but averages can be misleading. If the urgent care clinics absorbed mostly minor cases (short wait times), the remaining ER patients might actually wait *longer*. The average could drop even if the typical serious patient\'s experience worsened. Answer (A) gestures at this flaw but doesn\'t capture the primary error.',
        '**Flaw 3 (Generalization):** The recommendation that "other cities" adopt the policy assumes comparable conditions. Answer (D) identifies this flaw, but it\'s secondary to the causal reasoning error.'
      ]},
      { type: 'paragraph', text: '**Why (A) is tempting:** It identifies a real flaw (mean vs. median), but this is a secondary concern. The argument\'s central error is its causal attribution, not its choice of statistical measure.' },
      { type: 'paragraph', text: '**Why (C) is wrong:** The argument doesn\'t generalize from a sample of hospitals—it discusses all hospitals in the city.' },
      { type: 'paragraph', text: '**Why (D) is wrong:** While the recommendation to "other cities" is questionable, the primary flaw is in the causal reasoning within the original city\'s data, not in the generalization step.' },
      { type: 'paragraph', text: '**Why (E) is wrong:** This answer choice introduces an irrelevant counterfactual. The argument\'s flaw is that it ignores a present alternative cause, not a hypothetical scenario without the policy.' },
      { type: 'paragraph', text: '**Key Takeaway:** When an argument has multiple flaws, the LSAT asks you to identify the *most* significant one. Here, the causal reasoning error (ignoring the urgent care clinics as an alternative explanation) is more fundamental than the statistical concerns. The correct answer targets the flaw the conclusion depends on most heavily.' }
    ]},

    { type: 'hr' },

    { type: 'h4', text: 'Complete LSAT Math Flaw Reference' },
    { type: 'paragraph', text: 'Below is a comprehensive summary of every quantitative flaw type covered in this module, with the recognition cues you need to spot them instantly on test day.' },

    { type: 'breakdown',
      labels: { title: 'Flaw Type', text: 'Recognition Cues & Response' },
      colWidth: 'equal',
      items: [
        {
          title: 'Absolute Number vs. Rate',
          text: '**Cue:** Argument cites a large number to imply high risk or significance.\n**Ask:** "What is the denominator? Is this about the count or the rate?"\n**Lesson:** 2 — Part vs. Whole',
          badge: 'Lesson 2',
          badgeColor: 'blue'
        },
        {
          title: 'Part vs. Whole',
          text: '**Cue:** Data from a subgroup is used to draw a conclusion about the entire population.\n**Ask:** "Is this sample representative? Could the rest be different?"\n**Lesson:** 2 — Part vs. Whole',
          badge: 'Lesson 2',
          badgeColor: 'blue'
        },
        {
          title: 'Average Masking (Mean vs. Median)',
          text: '**Cue:** An "average" is used to describe a "typical" case.\n**Ask:** "Are there outliers? Would the median tell a different story?"\n**Lesson:** 3 — Averages',
          badge: 'Lesson 3',
          badgeColor: 'indigo'
        },
        {
          title: 'Weighted Average Error',
          text: '**Cue:** Averages from subgroups are combined without accounting for group size.\n**Ask:** "How many are in each group? Does the weight shift the result?"\n**Lesson:** 3 — Averages',
          badge: 'Lesson 3',
          badgeColor: 'indigo'
        },
        {
          title: 'Total vs. Individual',
          text: '**Cue:** A change in the group total is attributed to individual members.\n**Ask:** "Could the group size have changed instead of individual behavior?"\n**Lesson:** 3 — Averages',
          badge: 'Lesson 3',
          badgeColor: 'indigo'
        },
        {
          title: 'Overlapping Sets',
          text: '**Cue:** Percentages from two groups are added together.\n**Ask:** "Could someone be in both groups? What is the actual total?"\n**Lesson:** 4 — Invalid Math',
          badge: 'Lesson 4',
          badgeColor: 'green'
        },
        {
          title: 'Inverse Probability',
          text: '**Cue:** P(A given B) is treated as P(B given A).\n**Ask:** "Is the argument reversing the conditional? How large is each group?"\n**Lesson:** 4 — Invalid Math',
          badge: 'Lesson 4',
          badgeColor: 'green'
        },
        {
          title: 'Net Effect (One-Sided Ledger)',
          text: '**Cue:** Only revenue (or only cost) is discussed when concluding about profit (or net outcome).\n**Ask:** "What is the other side of the equation?"\n**Lesson:** 4 — Invalid Math',
          badge: 'Lesson 4',
          badgeColor: 'green'
        },
        {
          title: 'Gambler\'s Fallacy',
          text: '**Cue:** "Due," "overdue," "bound to happen" after a streak.\n**Ask:** "Are these events independent? Does the past truly affect the future here?"\n**Lesson:** 5 — Gambler\'s Fallacy',
          badge: 'Lesson 5',
          badgeColor: 'red'
        },
        {
          title: 'Hot Hand Fallacy',
          text: '**Cue:** A streak is cited as evidence that a trend will continue.\n**Ask:** "Is there a causal mechanism, or is this just a random streak?"\n**Lesson:** 5 — Gambler\'s Fallacy',
          badge: 'Lesson 5',
          badgeColor: 'red'
        }
      ]
    },

    { type: 'hr' },

    { type: 'h4', text: 'Your Quantitative Reasoning Checklist' },
    { type: 'paragraph', text: 'Use this four-step diagnostic routine on every LSAT argument that contains numerical or statistical language. It should become second nature through practice.' },

    { type: 'process', steps: [
      '**Step 1: Identify the Language.** What quantitative terms appear? Percentages? Averages? Rates? Raw numbers? Predictions? Name them explicitly—this primes your brain to check for the associated fallacy.',
      '**Step 2: Challenge the Context.** Interrogate every number. "A percentage—of what total?" "An average—is it skewed by outliers?" "A rate—compared to what base?" "Data from a survey—of whom?" Numbers without context are meaningless.',
      '**Step 3: Validate the Math.** Check the logical structure of the calculation. "Do these groups overlap?" "Is the conditional probability reversed?" "Are both sides of the ledger accounted for?" "Is the argument adding percentages that shouldn\'t be added?"',
      '**Step 4: Evaluate the Prediction.** If the argument makes a forward-looking claim, ask: "Are these events independent?" "Is a streak being treated as a trend?" "Is an average being treated as a schedule?" If the prediction relies on past frequency alone, suspect the Gambler\'s Fallacy.'
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Module Summary', text: 'LSAT Math is a logic test disguised as a numbers test. The test makers rely on your instinct to accept numerical data at face value. Your job is to resist that instinct and interrogate every number, every percentage, every average, and every prediction. When you see a number, don\'t freeze—attack it. Ask "of what?", "compared to what?", "is that the rate or the count?", and "does the past really predict the future here?" You now have the complete toolkit to strip away the numerical smokescreen and expose the logical flaw beneath.' }
  ]
};
