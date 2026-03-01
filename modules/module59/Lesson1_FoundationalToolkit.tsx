import { Lesson } from '../../types';

export const Lesson1_FoundationalToolkit: Lesson = {
  id: "59-1",
  title: "The Foundational Toolkit - Your 10 Core Concepts",
  content: [
    { type: 'h2', text: 'MODULE 22: LSAT Math' },
    { type: 'paragraph', text: 'This module provides a comprehensive framework for mastering quantitative arguments within the LSAT Logical Reasoning section. While these questions feature numerical concepts like percentages, averages, and rates, they are fundamentally tests of logic, not mathematics. The LSAT never asks you to compute; it asks you to reason about numbers.' },
    { type: 'paragraph', text: 'Our approach is twofold:\n1. **Build the Foundation:** Define the ten core quantitative concepts you must know.\n2. **Identify the Traps:** Analyze the most common logical fallacies the LSAT constructs using these concepts.' },

    { type: 'hr' },

    { type: 'h3', text: 'Why This Matters' },
    { type: 'paragraph', text: 'Quantitative flaws are not confined to one question type. They appear across the entire Logical Reasoning section, surfacing in Flaw, Weaken, Strengthen, Sufficient Assumption, and Paradox questions alike. A single LSAT section can contain three or four questions whose central error involves mishandling numbers, percentages, or statistical reasoning.' },
    { type: 'callout', variant: 'tip', title: 'Cross-Question Reach', text: '**Flaw:** "Which of the following is a flaw in the argument?" \u2192 The argument confuses a percentage change with an absolute change.\n**Weaken:** "Which most weakens the argument?" \u2192 An answer that provides the missing denominator.\n**Strengthen:** "Which most strengthens the argument?" \u2192 An answer showing the base rates are comparable.\n**Paradox:** "Which resolves the apparent discrepancy?" \u2192 An answer explaining why a rate rose while absolute numbers fell.' },
    { type: 'paragraph', text: 'Mastering LSAT Math is not about learning one trick for one question type. It is about developing a reflex\u2014an automatic alarm that fires whenever an argument conflates raw numbers with proportions, ignores base rates, or leaps from group averages to individual conclusions.' },

    { type: 'hr' },

    { type: 'h3', text: 'Lesson 1: The Foundational Toolkit' },
    { type: 'paragraph', text: '**Lesson Objective:** Introduce the ten fundamental quantitative terms that form the bedrock of LSAT Math questions. Your goal is not just to memorize these definitions, but to understand them with enough precision to spot when the LSAT misuses or conflates them.' },
    { type: 'paragraph', text: 'About ten concepts make up 90% of what you\'ll encounter. Let\'s master them.' },
    {
      type: 'breakdown',
      labels: { title: 'Concept', text: 'Definition & LSAT Trap' },
      items: [
        {
          title: '1. Absolute Number',
          text: '**Definition:** A raw count or a specific, fixed amount (e.g., 1,000 widgets).\n**LSAT Trap:** Arguments present a large absolute number to imply high risk or significance without context (e.g., "10,000 injuries" sounds alarming until you learn millions use the product).',
          badge: 'Raw Count',
          badgeColor: 'slate'
        },
        {
          title: '2. Rate / Likelihood',
          text: '**Definition:** A comparison showing frequency over opportunities (e.g., 3 crashes per 1,000 drivers).\n**LSAT Trap:** Assuming a rising rate means the absolute number also rose, or vice versa. Rate and count can move in opposite directions.',
          badge: 'Frequency',
          badgeColor: 'indigo'
        },
        {
          title: '3. Total / Aggregate',
          text: '**Definition:** The complete sum of all parts within a group.\n**LSAT Trap:** Confusing a change in the total with a change in components. Total sales can rise even if some stores\' sales declined.',
          badge: 'Sum',
          badgeColor: 'blue'
        },
        {
          title: '4. Percentage / Proportion',
          text: '**Definition:** A part of a whole expressed as a fraction of 100. Always relative to a base.\n**LSAT Trap:** A percentage is meaningless without its denominator. "A 50% increase" from 2 to 3 is trivial. This is the LSAT\'s single favorite numerical trick.',
          badge: 'Relative',
          badgeColor: 'indigo'
        },
        {
          title: '5. Average (Mean)',
          text: '**Definition:** Sum of values divided by the number of values.\n**LSAT Trap:** Averages are skewed by outliers. One billionaire can raise the average income of a poor neighborhood. Don\'t confuse "average" with "typical."',
          badge: 'Skewable',
          badgeColor: 'red'
        },
        {
          title: '6. Median',
          text: '**Definition:** The middle value in a sorted list.\n**LSAT Trap:** It resists outliers but hides the extremes. A stable median can mask dramatic shifts at the top or bottom of a distribution.',
          badge: 'Middle',
          badgeColor: 'slate'
        },
        {
          title: '7. Weighted Average',
          text: '**Definition:** An average where subgroups contribute unequally based on size.\n**LSAT Trap:** Averaging the averages of subgroups without weighting by size produces Simpson\'s Paradox: every subgroup can improve while the overall figure worsens.',
          badge: 'Complex',
          badgeColor: 'indigo'
        },
        {
          title: '8. Rate of Change',
          text: '**Definition:** How quickly a value increases or decreases over time.\n**LSAT Trap:** The Gambler\'s Fallacy\u2014assuming past trends guarantee future corrections or continuations.',
          badge: 'Trend',
          badgeColor: 'blue'
        },
        {
          title: '9. Market Share',
          text: '**Definition:** A company\'s sales as a percentage of total market sales.\n**LSAT Trap:** Market share can drop even if absolute sales rise, when the total market grows faster. Treat it as a percentage with a moving denominator.',
          badge: 'Slice',
          badgeColor: 'slate'
        },
        {
          title: '10. Threshold',
          text: '**Definition:** A minimum value required for an outcome (e.g., 60 votes to pass a bill).\n**LSAT Trap:** Arguments conclude a threshold cannot be met by overlooking plausible scenarios or double-counting obstacles.',
          badge: 'Limit',
          badgeColor: 'slate'
        }
      ]
    },

    { type: 'hr' },

    { type: 'h3', text: 'Raw Numbers vs. Percentages vs. Rates' },
    { type: 'paragraph', text: 'The LSAT\'s most reliable trick is swapping between these three ways of expressing quantity. The table below clarifies how each works and where the traps lie.' },
    { type: 'table', headers: ['Measure', 'What It Tells You', 'What It Hides', 'Classic LSAT Swap'], rows: [
      ['Raw Number (e.g., 500 accidents)', 'The actual count of events', 'The size of the population at risk', 'Uses a large count to imply a high rate'],
      ['Percentage (e.g., 20% of students)', 'The proportion relative to a base', 'The size of the base itself', 'Uses a high percentage of a tiny group to imply a large count'],
      ['Rate (e.g., 5 per 1,000 drivers)', 'Frequency normalized to a standard denominator', 'Whether the denominator changed over time', 'Shows a falling rate to imply fewer total events, ignoring population growth']
    ]},
    { type: 'callout', variant: 'default', title: 'The Golden Rule', text: 'Whenever an argument\'s premise uses one type of measure and the conclusion uses a different type, you are almost certainly looking at a flaw. **Premise in percentages \u2192 Conclusion in raw numbers = red flag.** Premise in raw numbers \u2192 Conclusion about rates = red flag.' },

    { type: 'hr' },

    { type: 'h3', text: 'Master Table of LSAT Math Flaw Types' },
    { type: 'paragraph', text: 'This module covers six major flaw families. Each lesson targets one. Use this table as a roadmap and a quick-reference throughout your study.' },
    { type: 'table', headers: ['Flaw Family', 'Core Error', 'Lesson', 'Example Trigger'], rows: [
      ['Numbers vs. Percentages', 'Confusing absolute count with proportion or rate', 'Lesson 2', '"More accidents occur on highways" \u2192 highways are more dangerous'],
      ['Part vs. Whole', 'Generalizing from a subgroup to the entire group (or vice versa)', 'Lesson 2', '"75% of sales in one city" \u2192 must be top seller nationwide'],
      ['Averages & Simpson\'s Paradox', 'Treating averages as representative; ignoring subgroup weights', 'Lesson 3', '"Average salary rose" \u2192 every employee earns more'],
      ['Base Rate Neglect', 'Drawing conclusions without accounting for underlying prevalence', 'Lesson 4', '"Test is 95% accurate" \u2192 a positive result means you\'re 95% likely to have the condition'],
      ['Gambler\'s Fallacy', 'Assuming past independent events influence future probabilities', 'Lesson 5', '"Coin landed heads 5 times" \u2192 tails is overdue'],
      ['Correlation \u2192 Causation (with numbers)', 'Treating a statistical correlation as proof of a causal link', 'Lesson 4', '"Cities with more hospitals have more crime" \u2192 hospitals cause crime']
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Lesson Takeaway', text: 'You now have the complete vocabulary for LSAT Math and a roadmap of the six flaw families this module covers. Notice how many of these terms are related\u2014especially absolute numbers, percentages, rates, and totals. The LSAT exploits the subtle differences between them. Your job is to never let a quantitative argument pass without asking: **what type of number is this, and what is the argument hiding?**' }
  ]
};
