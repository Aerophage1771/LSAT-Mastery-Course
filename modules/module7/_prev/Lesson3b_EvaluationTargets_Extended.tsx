import { Lesson } from '../../types';

export const Lesson3b_EvaluationTargets_Extended: Lesson = {
  id: '7-3b',
  title: 'Evaluation Targets: Extended Guide',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Evaluation Targets: Extended Guide' },
    {
      type: 'paragraph',
      text: 'This lesson continues the Field Guide with three additional evaluation targets — Feasibility Claims, Predictions, and Definitions / Categories — followed by the Quick Identification Process for rapidly matching any stimulus to its target type.',
    },

    { type: 'hr' },

    { type: 'h2', text: '4. Feasibility Claims (~12%)' },
    {
      type: 'paragraph',
      text: 'The argument proposes a plan, policy, or action and concludes it will achieve the desired result. The gap is whether the plan is **practical** — whether it can actually be implemented and whether it will produce the expected benefits without unacceptable costs or side effects.',
    },

    { type: 'h4', text: 'What It Looks Like' },
    {
      type: 'blockquote',
      text: '"To reduce energy costs, the school district should replace all lighting in its 40 buildings with LED fixtures. LED lighting uses 75% less electricity than traditional bulbs."',
    },

    {
      type: 'paragraph',
      text: 'The argument assumes the replacement is practical. But the upfront cost of replacing lighting in 40 buildings could be enormous. If the district cannot afford the conversion, or if the buildings require expensive electrical retrofits, the plan may not be feasible despite the per-unit energy savings.',
    },

    { type: 'h4', text: 'The Pivotal Question Pattern' },
    {
      type: 'list',
      items: [
        '"Are the costs of implementing the plan prohibitive?"',
        '"Are there unintended consequences that could offset the benefits?"',
        '"Is there a better alternative that achieves the same goal?"',
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Quick ID Process',
      text: '**Signal:** The conclusion recommends an action or proposes a plan (should, ought to, proposed).\n**Gap:** The plan may not be practical, affordable, or free of side effects.\n**Prephrase:** "Can the plan actually be implemented as described?"',
    },

    { type: 'hr' },

    { type: 'h2', text: '5. Predictions (~10%)' },
    {
      type: 'paragraph',
      text: 'The argument predicts a future outcome based on current or past conditions. The gap is whether the conditions that produced the current trend will **continue** — or whether some change could derail the prediction.',
    },

    { type: 'h4', text: 'What It Looks Like' },
    {
      type: 'blockquote',
      text: '"Online retail sales have grown by 12% annually for the past five years. At this rate, online sales will surpass brick-and-mortar sales within the next decade."',
    },

    {
      type: 'paragraph',
      text: 'The prediction assumes the 12% growth rate will continue. But market saturation, regulatory changes, economic downturns, or technological shifts could slow or reverse the trend.',
    },

    { type: 'h4', text: 'The Pivotal Question Pattern' },
    {
      type: 'list',
      items: [
        '"Will the conditions that produced the current trend continue?"',
        '"Are there factors that could disrupt the predicted trajectory?"',
        '"Has the trend already begun to slow or plateau?"',
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Quick ID Process',
      text: '**Signal:** The conclusion uses future-tense language (will, is expected to, projected).\n**Gap:** Conditions may change before the prediction materializes.\n**Prephrase:** "Will the trend continue, or could conditions change?"',
    },

    { type: 'hr' },

    { type: 'h2', text: '6. Definitions / Categories (~8%)' },
    {
      type: 'paragraph',
      text: 'The least common target, but one that trips up many test-takers. The argument concludes that something **qualifies as** a member of a category or meets a definition. The gap is whether the definition has been applied correctly — whether the thing actually meets all the criteria.',
    },

    { type: 'h4', text: 'What It Looks Like' },
    {
      type: 'blockquote',
      text: '"The compound was found in a laboratory through deliberate chemical synthesis, not extracted from any natural source. Therefore, it should be classified as an artificial substance."',
    },

    {
      type: 'paragraph',
      text: 'The argument assumes that the method of production (synthesis vs. extraction) is what determines whether something is "artificial." But if the compound is chemically identical to a naturally occurring substance, the classification may be incorrect regardless of how it was produced.',
    },

    { type: 'h4', text: 'The Pivotal Question Pattern' },
    {
      type: 'list',
      items: [
        '"Does the subject meet all the criteria in the relevant definition?"',
        '"Is the definition the author is using the correct or standard one?"',
        '"Are there borderline cases that the definition does not clearly resolve?"',
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Quick ID Process',
      text: '**Signal:** The conclusion classifies, categorizes, or defines something.\n**Gap:** The classification criteria may not apply as the author assumes.\n**Prephrase:** "Does the subject actually meet the definition?"',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Quick Identification Process' },
    {
      type: 'paragraph',
      text: 'Use this three-step process to identify the evaluation target within seconds of reading the stimulus:',
    },

    {
      type: 'process',
      title: 'Rapid Target Identification',
      steps: [
        '**Read the conclusion first.** What is the author claiming? A cause, a generalization, a recommendation, a prediction, a comparison, or a classification?',
        '**Match to a target type.** Use the signal words from the master table. Causal language → causal claim. Study data → statistical generalization. Comparison → analogy. Plan language → feasibility. Future tense → prediction. Category language → definition.',
        '**Prephrase the pivotal question.** Each target type has a standard family of pivotal questions. Select the one that fits and hold it as your hypothesis while scanning the answer choices.',
      ],
    },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: '**1. Six target types cover virtually all Evaluate questions.** Causal claims and statistical generalizations alone account for over half.\n\n**2. Each target type has a predictable gap.** Causal → rival explanation or missing experiment check. Statistical → unrepresentative sample, weak comparison, or misread numbers. Analogy → relevant differences. Feasibility → practical obstacles. Prediction → changing conditions. Definition → misapplied criteria.\n\n**3. Pattern recognition enables prephrasing.** Once you identify the target type, you can formulate the pivotal question before reading the answer choices.\n\n**4. The Yes/No Test confirms your match.** After selecting a candidate answer, verify that one response strengthens and the other weakens. If the split is clean, you have the right target.',
    },
  ],
  alternates: {
    field: {
      label: 'Field Guide',
      content: [
        { type: 'h3', text: 'Pattern Cards' },
        {
          type: 'breakdown',
          labels: { title: 'Pattern', text: 'Details' },
          colWidth: 'narrow',
          items: [
            {
              title: 'Feasibility Claims',
              badge: '~12%',
              badgeColor: 'blue',
              text: '**Signal:** Conclusion recommends an action or proposes a plan (should, ought to, proposed).\n**Question:** "Can the plan actually be implemented as described?"\n**Trap:** Answers about whether the goal is desirable rather than whether the plan is practical.',
            },
            {
              title: 'Predictions',
              badge: '~10%',
              badgeColor: 'slate',
              text: '**Signal:** Conclusion uses future-tense language (will, is expected to, projected).\n**Question:** "Will the trend continue, or could conditions change?"\n**Trap:** Answers that question the past data instead of the future projection.',
            },
            {
              title: 'Definitions / Categories',
              badge: '~8%',
              badgeColor: 'slate',
              text: '**Signal:** Conclusion classifies, categorizes, or defines something (qualifies as, counts as).\n**Question:** "Does the subject actually meet the definition?"\n**Trap:** Answers about whether the definition itself is good rather than whether it applies.',
            },
          ],
        },
        { type: 'h3', text: 'Quick Identification' },
        {
          type: 'process',
          title: 'Rapid Target Identification',
          steps: [
            '**Read the conclusion first.** What is the author claiming? A cause, a generalization, a recommendation, a prediction, a comparison, or a classification?',
            '**Match to a target type.** Use the signal words from the master table. Causal language \u2192 causal claim. Study data \u2192 statistical generalization. Comparison \u2192 analogy. Plan language \u2192 feasibility. Future tense \u2192 prediction. Category language \u2192 definition.',
            '**Prephrase the pivotal question.** Each target type has a standard family of pivotal questions. Select the one that fits and hold it as your hypothesis while scanning the answer choices.',
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          text: '\u2022 Six target types cover virtually all Evaluate questions.\n\u2022 Each has a predictable gap: causal \u2192 rival explanation; statistical \u2192 unrepresentative sample; analogy \u2192 relevant differences; feasibility \u2192 practical obstacles; prediction \u2192 changing conditions; definition \u2192 misapplied criteria.\n\u2022 Pattern recognition enables prephrasing before reading the answer choices.',
        },
      ],
    },
  },
};
