import { Lesson } from '../../types';

export const Lesson2b_WorkedExamples: Lesson = {
  id: '9-2b',
  title: 'Worked Examples',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Full Worked Example' },
    { type: 'paragraph', text: "Let's apply all four steps to a complete Strengthen question from start to finish." },
    { type: 'paragraph', text: 'Consider this illustrative argument:' },
    {
      type: 'blockquote',
      text: '"A pharmaceutical company tested a new migraine medication on 500 volunteers who suffer from chronic migraines. After three months of treatment, 70% of the volunteers reported a significant reduction in migraine frequency. The company concluded that the medication is effective at reducing migraines."',
    },
    {
      type: 'paragraph',
      text: 'This is a good Strengthen example because the gap is clear: without a comparison group, the reported improvement could still be placebo effect, normal fluctuation, or regression to the mean.',
    },
    {
      type: 'paragraph',
      text: 'That is why the ideal-experiment lens matters. The argument has a treatment group and an after-the-fact result, but it does not yet have the protection that a real comparison group, fair assignment, or blinding would provide. The credited strengthener should make the study act more like a proper experiment.',
    },

    { type: 'h3', text: 'Applying the 4-Step Method' },

    {
      type: 'process',
      title: 'Step-by-Step Walkthrough',
      steps: [
        '**Step 1 — Break Down the Argument:**\n• **Conclusion:** The medication is effective at reducing migraines.\n• **Evidence:** 70% of 500 volunteers reported a significant reduction in migraine frequency after three months.\n• **Structure:** The company observes improvement in a test group and concludes the medication caused the improvement.',
        "**Step 2 — Identify the Gap:**\nThe argument makes a classic **correlation-to-causation** leap. The volunteers improved, but the company has not shown that the *medication* was responsible. The improvement could be due to the placebo effect, natural fluctuation in migraine frequency, regression to the mean (volunteers may have enrolled during a particularly bad period), or other factors. Without a control group or comparison, the 70% figure is meaningless as evidence of the medication's efficacy.",
        '**Step 3 — Prephrase:**\n*"The argument would be stronger if I found out that people who did NOT take the medication did not experience the same improvement."* This would rule out the possibility that the improvement was caused by something other than the medication.',
        '**Step 4 — Evaluate:**\nScan the choices for one that provides a control or comparison group that shows the medication — not some other factor — drove the improvement.',
      ],
    },

    { type: 'h3', text: 'Why the Comparison Matters' },
    {
      type: 'callout',
      variant: 'default',
      title: 'Final Check',
      text: 'The strongest strengthener supplies the missing control group. If people who did not receive the medication improved far less during the same period, the medication becomes the best explanation for the difference. Most other facts either weaken the argument, shift to a different condition, or say nothing about whether the drug itself caused the reported improvement.',
    },
  ],
  alternates: {
    annotated: {
      label: 'Annotated',
      content: [
        { type: 'h3', text: 'Annotated Stimulus' },
        {
          type: 'blockquote',
          text: '"A pharmaceutical company tested a new migraine medication on 500 volunteers who suffer from chronic migraines. After three months of treatment, 70% of the volunteers reported a significant reduction in migraine frequency. The company concluded that the medication is effective at reducing migraines."',
        },
        { type: 'h4', text: 'Structural Annotation' },
        {
          type: 'breakdown',
          labels: { title: 'Sentence', text: 'Role' },
          items: [
            {
              title: 'A pharmaceutical company tested a new migraine medication on 500 volunteers who suffer from chronic migraines.',
              text: 'Sets up the study: identifies the treatment, sample size, and population.',
              badge: 'Background',
              badgeColor: 'slate',
            },
            {
              title: 'After three months of treatment, 70% of the volunteers reported a significant reduction in migraine frequency.',
              text: 'The key evidence: a before/after result in the treatment group.',
              badge: 'Premise',
              badgeColor: 'blue',
            },
            {
              title: 'The company concluded that the medication is effective at reducing migraines.',
              text: 'The conclusion: a causal claim that the drug produced the improvement.',
              badge: 'Conclusion',
              badgeColor: 'green',
            },
          ],
        },
        { type: 'h3', text: 'Method Applied' },
        {
          type: 'process',
          steps: [
            '**Break down the argument.** The conclusion (sentence 3) claims the medication is effective. The evidence (sentence 2) is the 70% improvement rate. Sentence 1 is background.',
            '**Identify the gap.** The study has no control group. The 70% improvement could be placebo effect, natural fluctuation, or regression to the mean -- not the medication itself.',
            '**Prephrase the strengthener.** "The argument would be stronger if people who did NOT take the medication did not improve at the same rate."',
            '**Evaluate and eliminate.** Look for the answer that supplies the missing comparison group or otherwise isolates the medication as the cause.',
          ],
        },
        { type: 'h3', text: 'Trap Table' },
        {
          type: 'table',
          headers: ['Wrong Answer Type', 'Why It Fails'],
          rows: [
            [
              '**Strengthens a different gap**',
              'Addresses a weakness the argument does not actually have (e.g., whether volunteers took the medication correctly).',
            ],
            [
              '**Restates a premise**',
              'Repeats that volunteers improved without adding new information about causation.',
            ],
            [
              '**Weakens instead**',
              'Introduces an alternative cause (e.g., volunteers also changed their diet), making the medication explanation less likely.',
            ],
            [
              '**Too strong (proves conclusion)**',
              'Goes beyond what Strengthen requires; would be a Sufficient Assumption answer rather than a Strengthen answer.',
            ],
            [
              '**Irrelevant scope**',
              'Discusses a different condition, population, or time frame that does not bear on whether this medication reduced migraines.',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          text: 'The correct answer supplies the missing control group: people who did not receive the medication improved far less during the same period. This isolates the medication as the best explanation for the observed improvement.',
        },
      ],
    },
  },
};
