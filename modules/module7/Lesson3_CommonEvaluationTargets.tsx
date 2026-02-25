import { Lesson } from '../../types';

export const Lesson3_CommonEvaluationTargets: Lesson = {
  id: "7-3",
  title: "Common Evaluation Targets",
  content: [
    { type: 'h2', text: 'A Field Guide to Evaluation Targets' },
    { type: 'paragraph', text: "Every Evaluate the Argument question targets a specific type of logical gap. While the stimuli vary, the **types of gaps** that appear are remarkably predictable. This lesson catalogs the six most common evaluation targets, shows you what each one looks like in a real argument, and teaches you to identify the target type within seconds of reading the stimulus." },

    { type: 'callout', variant: 'tip', title: 'Why This Matters', text: "Recognizing the evaluation target type lets you **prephrase the pivotal question before reading the answer choices**. A causal claim always invites the same family of questions. A statistical generalization always invites a different family. Pattern recognition converts a hard, open-ended question into a fast matching exercise." },

    { type: 'hr' },

    { type: 'h3', text: 'Master Table of Evaluation Targets' },
    { type: 'paragraph', text: "The table below lists every major evaluation target, ranked by how frequently it appears in Evaluate the Argument questions. Use this as your probability-based starting point when reading a new stimulus." },

    { type: 'table', headers: ['Target Type', 'Frequency', 'Core Question', 'Signal Words'], rows: [
      ['**Causal Claims**', '~30%', 'Was there an alternative cause?', '*caused, led to, resulted in, responsible for, due to, because of*'],
      ['**Statistical Generalizations**', '~25%', 'Is the sample representative?', '*survey, study, sample, percentage, data, respondents*'],
      ['**Analogies**', '~15%', 'Are the two cases relevantly similar?', '*just as, similarly, like, the same way, comparable*'],
      ['**Feasibility Claims**', '~12%', 'Will the plan actually work?', '*should, ought to, proposed, plan, recommendation, policy*'],
      ['**Predictions**', '~10%', 'Will conditions remain stable?', '*will, is likely to, expected, projected, in the future*'],
      ['**Definitions / Categories**', '~8%', 'Does the term apply correctly?', '*qualifies as, counts as, defined as, classified as, considered*'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: '1. Causal Claims (~30%)' },
    { type: 'paragraph', text: "The most common evaluation target. The argument asserts that one event or condition **caused** another. The gap is always the same: the author has not ruled out alternative explanations for the observed effect." },

    { type: 'h4', text: 'What It Looks Like' },
    { type: 'blockquote', text: '"After the company implemented flexible work hours, employee productivity increased by 15%. The flexible schedule is clearly responsible for the productivity gains."' },

    { type: 'paragraph', text: "The author observes a correlation (flexible hours → higher productivity) and concludes causation. But the productivity gains could be explained by other changes — new management, seasonal workload variation, a hiring wave of high-performers — that coincided with the schedule change." },

    { type: 'h4', text: 'The Pivotal Question Pattern' },
    { type: 'paragraph', text: "For causal claims, the pivotal question always takes one of these forms:" },
    { type: 'list', items: [
      '"Were there other factors that changed at the same time as the supposed cause?"',
      '"Did the effect occur in cases where the supposed cause was absent?"',
      '"Could the causal relationship be reversed — did Y cause X rather than X cause Y?"',
    ]},

    { type: 'callout', variant: 'default', title: 'Quick ID Process', text: "**Signal:** The conclusion uses causal language (caused, led to, responsible for, due to).\n**Gap:** Alternative causes not ruled out.\n**Prephrase:** \"Was there another factor that could explain the effect?\"" },

    { type: 'hr' },

    { type: 'h2', text: '2. Statistical Generalizations (~25%)' },
    { type: 'paragraph', text: "The second most common target. The argument uses data from a **sample** to draw a conclusion about a **larger population**. The gap is whether the sample fairly represents the population it claims to describe." },

    { type: 'h4', text: 'What It Looks Like' },
    { type: 'blockquote', text: '"A survey of 200 customers who called the support line found that 85% were dissatisfied with the product. This shows that the vast majority of the company\'s customers are unhappy."' },

    { type: 'paragraph', text: "The sample (customers who called support) is inherently biased — people contact support precisely because they have problems. The broader customer base likely includes many satisfied users who never called. The generalization is unsafe." },

    { type: 'h4', text: 'The Pivotal Question Pattern' },
    { type: 'list', items: [
      '"Is the sample representative of the population the conclusion is about?"',
      '"Was there a baseline or control group for comparison?"',
      '"Are there confounding variables that could explain the observed pattern?"',
    ]},

    { type: 'callout', variant: 'default', title: 'Quick ID Process', text: "**Signal:** The evidence cites a study, survey, sample, or data set.\n**Gap:** The sample may not represent the target population.\n**Prephrase:** \"Is the sample representative?\" or \"What was the baseline?\"" },

    { type: 'hr' },

    { type: 'h2', text: '3. Analogies (~15%)' },
    { type: 'paragraph', text: "The argument draws a parallel between two cases and concludes that what is true of one must be true of the other. The gap is whether the two cases are **relevantly similar** — similar in the specific respects that matter for the conclusion." },

    { type: 'h4', text: 'What It Looks Like' },
    { type: 'blockquote', text: '"City A reduced traffic accidents by 40% after installing roundabouts at major intersections. City B, which has similar traffic volume, should install roundabouts to achieve the same reduction."' },

    { type: 'paragraph', text: "The analogy assumes City A and City B are similar in all relevant respects. But City B might have different road layouts, weather conditions, or driver behavior patterns that make roundabouts less effective there." },

    { type: 'h4', text: 'The Pivotal Question Pattern' },
    { type: 'list', items: [
      '"Are there relevant differences between the two cases that would affect the outcome?"',
      '"Is the feature that produced the result in Case A also present in Case B?"',
      '"Do the two cases share the specific conditions necessary for the conclusion to hold?"',
    ]},

    { type: 'callout', variant: 'default', title: 'Quick ID Process', text: "**Signal:** The argument compares two entities, situations, or time periods.\n**Gap:** The two cases may differ in a way that matters.\n**Prephrase:** \"Are A and B similar in the relevant respects?\"" },

    { type: 'hr' },

    { type: 'h2', text: '4. Feasibility Claims (~12%)' },
    { type: 'paragraph', text: "The argument proposes a plan, policy, or action and concludes it will achieve the desired result. The gap is whether the plan is **practical** — whether it can actually be implemented and whether it will produce the expected benefits without unacceptable costs or side effects." },

    { type: 'h4', text: 'What It Looks Like' },
    { type: 'blockquote', text: '"To reduce energy costs, the school district should replace all lighting in its 40 buildings with LED fixtures. LED lighting uses 75% less electricity than traditional bulbs."' },

    { type: 'paragraph', text: "The argument assumes the replacement is practical. But the upfront cost of replacing lighting in 40 buildings could be enormous. If the district cannot afford the conversion, or if the buildings require expensive electrical retrofits, the plan may not be feasible despite the per-unit energy savings." },

    { type: 'h4', text: 'The Pivotal Question Pattern' },
    { type: 'list', items: [
      '"Are the costs of implementing the plan prohibitive?"',
      '"Are there unintended consequences that could offset the benefits?"',
      '"Is there a better alternative that achieves the same goal?"',
    ]},

    { type: 'callout', variant: 'default', title: 'Quick ID Process', text: "**Signal:** The conclusion recommends an action or proposes a plan (should, ought to, proposed).\n**Gap:** The plan may not be practical, affordable, or free of side effects.\n**Prephrase:** \"Can the plan actually be implemented as described?\"" },

    { type: 'hr' },

    { type: 'h2', text: '5. Predictions (~10%)' },
    { type: 'paragraph', text: "The argument predicts a future outcome based on current or past conditions. The gap is whether the conditions that produced the current trend will **continue** — or whether some change could derail the prediction." },

    { type: 'h4', text: 'What It Looks Like' },
    { type: 'blockquote', text: '"Online retail sales have grown by 12% annually for the past five years. At this rate, online sales will surpass brick-and-mortar sales within the next decade."' },

    { type: 'paragraph', text: "The prediction assumes the 12% growth rate will continue. But market saturation, regulatory changes, economic downturns, or technological shifts could slow or reverse the trend." },

    { type: 'h4', text: 'The Pivotal Question Pattern' },
    { type: 'list', items: [
      '"Will the conditions that produced the current trend continue?"',
      '"Are there factors that could disrupt the predicted trajectory?"',
      '"Has the trend already begun to slow or plateau?"',
    ]},

    { type: 'callout', variant: 'default', title: 'Quick ID Process', text: "**Signal:** The conclusion uses future-tense language (will, is expected to, projected).\n**Gap:** Conditions may change before the prediction materializes.\n**Prephrase:** \"Will the trend continue, or could conditions change?\"" },

    { type: 'hr' },

    { type: 'h2', text: '6. Definitions / Categories (~8%)' },
    { type: 'paragraph', text: "The least common target, but one that trips up many test-takers. The argument concludes that something **qualifies as** a member of a category or meets a definition. The gap is whether the definition has been applied correctly — whether the thing actually meets all the criteria." },

    { type: 'h4', text: 'What It Looks Like' },
    { type: 'blockquote', text: '"The compound was found in a laboratory through deliberate chemical synthesis, not extracted from any natural source. Therefore, it should be classified as an artificial substance."' },

    { type: 'paragraph', text: "The argument assumes that the method of production (synthesis vs. extraction) is what determines whether something is \"artificial.\" But if the compound is chemically identical to a naturally occurring substance, the classification may be incorrect regardless of how it was produced." },

    { type: 'h4', text: 'The Pivotal Question Pattern' },
    { type: 'list', items: [
      '"Does the subject meet all the criteria in the relevant definition?"',
      '"Is the definition the author is using the correct or standard one?"',
      '"Are there borderline cases that the definition does not clearly resolve?"',
    ]},

    { type: 'callout', variant: 'default', title: 'Quick ID Process', text: "**Signal:** The conclusion classifies, categorizes, or defines something.\n**Gap:** The classification criteria may not apply as the author assumes.\n**Prephrase:** \"Does the subject actually meet the definition?\"" },

    { type: 'hr' },

    { type: 'h2', text: 'Quick Identification Process' },
    { type: 'paragraph', text: "Use this three-step process to identify the evaluation target within seconds of reading the stimulus:" },

    { type: 'process', title: 'Rapid Target Identification', steps: [
      '**Read the conclusion first.** What is the author claiming? A cause, a generalization, a recommendation, a prediction, a comparison, or a classification?',
      '**Match to a target type.** Use the signal words from the master table. Causal language → causal claim. Study data → statistical generalization. Comparison → analogy. Plan language → feasibility. Future tense → prediction. Category language → definition.',
      '**Prephrase the pivotal question.** Each target type has a standard family of pivotal questions. Select the one that fits and hold it as your hypothesis while scanning the answer choices.',
    ]},

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. Six target types cover virtually all Evaluate questions.** Causal claims and statistical generalizations alone account for over half.\n\n**2. Each target type has a predictable gap.** Causal → alternative cause. Statistical → unrepresentative sample. Analogy → relevant differences. Feasibility → practical obstacles. Prediction → changing conditions. Definition → misapplied criteria.\n\n**3. Pattern recognition enables prephrasing.** Once you identify the target type, you can formulate the pivotal question before reading the answer choices.\n\n**4. The Yes/No Test confirms your match.** After selecting a candidate answer, verify that one response strengthens and the other weakens. If the split is clean, you have the right target." },
  ]
};
