import { Lesson } from '../../types';

export const Lesson2_PartVsWhole: Lesson = {
  id: "59-2",
  title: "The Part vs. The Whole - Why Context is King",
  content: [
    { type: 'h3', text: 'Lesson 2: The Part vs. The Whole' },
    { type: 'paragraph', text: '**Lesson Objective:** Identify and deconstruct the LSAT\'s most common quantitative traps: presenting a number stripped of its context, and confusing what is true of a part with what is true of the whole. By the end of this lesson, you will recognize both the Numbers vs. Percentages Fallacy and the Part vs. Whole Fallacy\u2014and know how to dismantle them in every question type.' },

    { type: 'hr' },

    { type: 'h3', text: 'The Absolute Number vs. Rate Fallacy' },
    { type: 'paragraph', text: 'The most reliable way the LSAT creates a flawed numerical argument is by presenting a piece of data without its denominator. An absolute number, a percentage, or a local trend is almost meaningless on its own. The logic hinges on you failing to ask: **"...of what?"**' },

    { type: 'h4', text: 'How It Works' },
    { type: 'paragraph', text: 'The argument presents an absolute number and draws a conclusion about risk, safety, or likelihood\u2014without ever telling you the size of the population at risk.' },
    { type: 'list', items: [
      '**The Core Trap:** A large raw number is used to imply a high rate, or a small raw number to imply a low rate.',
      '**Classic Example:** "More car accidents happen on sunny days than snowy days. Therefore, driving in snow is safer."',
      '**What\'s Missing:** More people drive on sunny days. The absolute number of accidents is higher, but the rate per driver may be far lower on sunny days.'
    ]},

    { type: 'callout', variant: 'default', title: 'The Ski Injury Case', text: 'An argument claims that the proportion of knee injuries among all ski injuries has risen from 18% to 26% over the past decade. It concludes that the number of knee injuries has increased.\n\n**The Flaw:** If total ski injuries dropped by half (say from 10,000 to 5,000), then 26% of 5,000 = 1,300 knee injuries\u2014down from 18% of 10,000 = 1,800. The percentage rose while the absolute count fell. The argument confuses a percentage with a raw number.' },

    { type: 'h4', text: 'Spotting the Swap' },
    { type: 'paragraph', text: 'The key diagnostic is simple: check whether the premise and conclusion use the same type of measure.' },
    { type: 'table', headers: ['Premise States...', 'Conclusion Claims...', 'Flaw?'], rows: [
      ['A raw count increased', 'The rate increased', 'Yes \u2014 denominator may have changed'],
      ['A percentage dropped', 'Fewer total events occurred', 'Yes \u2014 base may have grown'],
      ['The rate is low', 'Very few events happen', 'Yes \u2014 the population may be enormous'],
      ['A raw count and the base are both given', 'The rate changed proportionally', 'No \u2014 both measures are supplied']
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'The Part vs. Whole Fallacy' },
    { type: 'paragraph', text: 'This fallacy occurs when an argument assumes that what is true of a part must be true of the whole, or that what is true of the whole must be true of each part. It is one of the oldest errors in logic and appears on the LSAT with striking frequency.' },

    { type: 'h4', text: 'Composition vs. Division' },
    { type: 'paragraph', text: 'The Part vs. Whole fallacy has two mirror-image forms. Recognizing both is essential.' },
    {
      type: 'breakdown',
      labels: { title: 'Direction', text: 'Explanation' },
      items: [
        {
          title: 'Composition (Part \u2192 Whole)',
          text: '**Error:** What is true of individual parts must be true of the whole.\n**Example:** "Every player on this team is outstanding. Therefore, this must be an outstanding team."\n**Why It Fails:** Outstanding individuals can produce a terrible team if they don\'t work together. The property of the parts does not automatically transfer to the whole.',
          badge: 'Parts \u2192 Whole',
          badgeColor: 'red'
        },
        {
          title: 'Division (Whole \u2192 Part)',
          text: '**Error:** What is true of the whole must be true of each individual part.\n**Example:** "This university has the highest average SAT score in the state. Therefore, every student here scored exceptionally well."\n**Why It Fails:** A few perfect scores could drag the average up while most students scored at the median. The property of the group does not automatically apply to each member.',
          badge: 'Whole \u2192 Parts',
          badgeColor: 'blue'
        }
      ]
    },

    { type: 'h4', text: 'LSAT-Style Composition Example' },
    { type: 'blockquote', text: '"Each ingredient in this dish is nutritious. Therefore, the dish itself must be nutritious."' },
    { type: 'paragraph', text: 'This is a textbook composition fallacy. Individually healthy ingredients can produce an unhealthy dish if combined in extreme quantities or with unhealthy preparation methods. The LSAT tests this by presenting data about subgroups and then leaping to a conclusion about the entire population.' },

    { type: 'h4', text: 'LSAT-Style Division Example' },
    { type: 'blockquote', text: '"The committee approved the budget unanimously. Therefore, every member of the committee believed the budget was ideal."' },
    { type: 'paragraph', text: 'The committee (whole) may have voted unanimously for strategic or political reasons. Individual members (parts) may have had serious reservations. Unanimous group behavior does not guarantee uniform individual belief.' },

    { type: 'hr' },

    { type: 'h3', text: 'Concrete LSAT Applications' },
    { type: 'paragraph', text: 'Let\'s see how both fallacy types manifest in realistic LSAT stimuli.' },

    { type: 'h4', text: 'Application 1: The Restaurant Case (Part \u2192 Whole)' },
    { type: 'callout', variant: 'default', title: 'Stimulus Pattern', text: 'A restaurant chain argues that consumer preferences are shifting toward healthier options, citing sales data from its oldest locations, which show increased orders of salads over the past five years.' },
    { type: 'paragraph', text: '**The Flaw:** The oldest restaurants are one subgroup (part). The chain as a whole includes newer locations in different markets that may show no such trend. Generalizing from the oldest locations to the entire chain is a composition error. The "part" (oldest stores) is not necessarily representative of the "whole" (all stores).' },

    { type: 'h4', text: 'Application 2: The Electric Car Case (Part \u2192 Whole)' },
    { type: 'callout', variant: 'default', title: 'Stimulus Pattern', text: 'An electric car accounts for 75% of new vehicle sales in a single city. The manufacturer concludes it must be the best-selling car nationwide.' },
    { type: 'paragraph', text: '**The Flaw:** The city (part) might not be representative of the nation (whole). Perhaps that city offers unique subsidies, has unusually high environmental awareness, or lacks competing dealerships. A 75% market share in one part says nothing definitive about the whole.' },

    { type: 'h4', text: 'Application 3: The University Budget Case (Whole \u2192 Part)' },
    { type: 'callout', variant: 'default', title: 'Stimulus Pattern', text: 'A university\'s total research funding increased by 15% last year. A professor in the philosophy department concludes that her department\'s funding must have increased as well.' },
    { type: 'paragraph', text: '**The Flaw:** The university\'s total (whole) grew, but that growth could be entirely concentrated in STEM departments. The philosophy department (part) might have seen flat or even reduced funding. A property of the aggregate does not distribute evenly to every component.' },

    { type: 'hr' },

    { type: 'h3', text: 'How This Flaw Appears Across Question Types' },
    { type: 'paragraph', text: 'The Part vs. Whole fallacy and the Numbers vs. Percentages fallacy are not limited to Flaw questions. Understanding how they surface in different question types is critical for recognizing them under time pressure.' },
    {
      type: 'breakdown',
      labels: { title: 'Question Type', text: 'How the Fallacy Appears' },
      items: [
        {
          title: 'Flaw Questions',
          text: '**Task:** Name the error.\n**What to look for:** The argument generalizes from a subgroup to the population, or assumes a property of the whole applies to each member. The correct answer will describe this leap in abstract terms: "takes for granted that what is true of a part is true of the whole."',
          badge: 'Identify',
          badgeColor: 'indigo'
        },
        {
          title: 'Weaken Questions',
          text: '**Task:** Undermine the argument.\n**What to look for:** The correct answer provides evidence that the part is not representative of the whole. For example, it might show that the subgroup studied has unusual characteristics, or that the overall population behaves differently from the cited subset.',
          badge: 'Attack',
          badgeColor: 'red'
        },
        {
          title: 'Strengthen Questions',
          text: '**Task:** Support the argument.\n**What to look for:** The correct answer closes the gap between part and whole. It might establish that the subgroup is representative, that the sample was randomly selected, or that no relevant differences exist between the part and the whole.',
          badge: 'Support',
          badgeColor: 'green'
        },
        {
          title: 'Paradox / Discrepancy Questions',
          text: '**Task:** Explain an apparent contradiction.\n**What to look for:** The paradox often arises because a statistic about a part seems to conflict with a statistic about the whole. The correct answer explains the mechanism\u2014often a shifting base, a weighted average, or a confounding variable\u2014that makes both facts simultaneously true.',
          badge: 'Resolve',
          badgeColor: 'blue'
        }
      ]
    },

    { type: 'hr' },

    { type: 'h3', text: 'Practice: Spot the Flaw' },
    {
      type: 'question-card',
      id: 'illustrative',
      questionType: 'LSAT Math',
      stimulus: 'A survey of graduates from Hillcrest Academy\'s honors program found that 92% secured employment within three months of graduation. The school\'s recruitment office cited this figure in advertisements claiming that Hillcrest graduates enjoy exceptional job placement rates.',
      question: 'The reasoning in the recruitment office\'s claim is most vulnerable to criticism on the grounds that it',
      options: [
        '(A) fails to define what counts as "employment" for the purposes of the survey',
        '(B) does not compare Hillcrest\'s placement rate to that of other institutions',
        '(C) generalizes from the honors program to the entire graduating class without justification (Correct)',
        '(D) ignores the possibility that some graduates found employment unrelated to their field of study',
        '(E) assumes that high placement rates will continue in the future'
      ],
      difficulty: 'medium'
    },
    { type: 'paragraph', text: '**Why (C) is correct:** The survey measured only honors graduates (a part), but the advertisement claims "Hillcrest graduates" (the whole) enjoy exceptional placement. Honors students are a self-selected, high-achieving subset. Their outcomes cannot be assumed to represent the entire student body. This is a classic composition fallacy\u2014reasoning from part to whole without establishing that the part is representative.' },

    { type: 'callout', variant: 'summary', title: 'Lesson Takeaway', text: 'Both the Numbers vs. Percentages fallacy and the Part vs. Whole fallacy stem from the same root error: **ignoring context.** Whenever you encounter quantitative reasoning on the LSAT, train yourself to ask three questions:\n\n1. "A high number... **compared to what base?**"\n2. "A percentage... **of what total?**"\n3. "Data from one subgroup... **does it represent the whole?**"\n\nIf the argument cannot answer these questions, you have found the flaw.' }
  ]
};
