import { Lesson } from '../../types';

export const Lesson1b_Foundations: Lesson = {
  id: '9-1b',
  title: 'Foundations',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'The Gap Model' },
    {
      type: 'paragraph',
      text: 'Every Strengthen question is built on the same structural foundation: the **Gap Model**. The author states premises and draws a conclusion, and there is a logical gap between them — an unstated assumption, an unexplored alternative, or a missing piece of evidence. The correct strengthener always targets this gap.',
    },
    {
      type: 'paragraph',
      text: 'This is the same Gap Model that drives Weaken and Evaluate questions. The only difference is what the correct answer does to the gap:',
    },
    {
      type: 'breakdown',
      labels: { title: 'Question Type', text: 'What the Correct Answer Does to the Gap' },
      colWidth: 'equal',
      items: [
        {
          title: 'Strengthen',
          text: 'Finds the gap and **fills** it — provides information that makes the conclusion more likely to follow from the premises.',
          badge: 'Bridge the Gap',
          badgeColor: 'green',
        },
        {
          title: 'Weaken',
          text: 'Finds the gap and **widens** it — provides information that makes the conclusion less likely to follow from the premises.',
          badge: 'Widen the Gap',
          badgeColor: 'red',
        },
        {
          title: 'Evaluate',
          text: 'Finds the gap and **probes** it — asks a question whose answer could go either way.',
          badge: 'Probe the Gap',
          badgeColor: 'blue',
        },
      ],
    },
    {
      type: 'paragraph',
      text: 'Because all three question types target the same gap, your approach to the stimulus is identical: find the conclusion, identify the premises, and locate the logical leap between them. The only difference is what you look for in the answer choices.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Strengthen vs. Weaken' },
    {
      type: 'paragraph',
      text: 'Strengthen and Weaken are mirror-image question types. They target the same gap in the same argument but ask you to push in opposite directions.',
    },
    {
      type: 'table',
      headers: ['Feature', 'Strengthen', 'Weaken'],
      rows: [
        ['Core skill', 'Find the conclusion, premises, and gap', 'Find the conclusion, premises, and gap'],
        [
          'Direction',
          'Fill the gap — make the conclusion **more** likely',
          'Widen the gap — make the conclusion **less** likely',
        ],
        [
          'Correct answer format',
          "A new fact that supports the author's leap",
          "A new fact that undermines the author's leap",
        ],
        [
          'Common trap',
          'Picking a choice that actually **weakens** the argument',
          'Picking a choice that actually **strengthens** the argument',
        ],
        [
          'Relationship to Necessary Assumption',
          'The strengthener often resembles a stated version of the assumption',
          'The weakener often resembles a denial of the assumption',
        ],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Flip Drill',
      text: 'When practicing, try this exercise: after solving a Strengthen question, ask yourself what the correct Weaken answer would be for the same argument. This "flip drill" deepens your understanding of the gap and reinforces the mirror-image relationship between the two question types.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Strengthen vs. Sufficient Assumption' },
    {
      type: 'paragraph',
      text: 'Students sometimes confuse Strengthen with Sufficient Assumption because both question types ask you to supply missing information that helps the conclusion. The distinction is about **degree of support**:',
    },
    {
      type: 'table',
      headers: ['Feature', 'Strengthen', 'Sufficient Assumption'],
      rows: [
        [
          'What the correct answer does',
          'Makes the conclusion **more likely**',
          'Makes the conclusion **certain** (100% guaranteed)',
        ],
        [
          'Degree of support required',
          'Any amount — even a modest increase in probability qualifies',
          'Complete — the answer must logically guarantee the conclusion',
        ],
        ['Answer strength', 'Can be partial or incremental', 'Must be airtight and conclusive'],
        ['"If true" language', 'Almost always present', 'Almost always present'],
        [
          'How to tell them apart',
          'Stem says "strengthens" / "supports"',
          'Stem says "the conclusion follows logically" / "enables the conclusion to be properly drawn"',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: 'Think of it this way: a Sufficient Assumption answer is a **steel beam** that fully bridges the gap and makes the conclusion logically airtight. A Strengthen answer is a **support cable** — it does not need to close the gap entirely; it only needs to make the conclusion more plausible than it was before you added the information.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Common Strengthening Strategies' },
    {
      type: 'paragraph',
      text: 'While every argument has a unique gap, the ways to fill that gap tend to fall into a small number of recurring patterns. Learning these strategies gives you a mental toolkit for prephrasing strengtheners before you look at the answer choices.',
    },

    {
      type: 'table',
      headers: ['Strategy', 'How It Works', 'When to Use It'],
      rows: [
        [
          '**Confirm Causation**',
          'Provide evidence that the alleged cause actually produced the alleged effect — e.g., showing a mechanism, a timeline, or a dose-response relationship.',
          'The argument concludes that A caused B based on a correlation or sequence.',
        ],
        [
          '**Rule Out Alternatives**',
          "Eliminate a competing explanation that could have produced the observed result, leaving the author's explanation as the most likely candidate.",
          'The argument makes a causal claim but has not ruled out other potential causes.',
        ],
        [
          '**Strengthen a Tradeoff**',
          "Show that the recommended option's upside is larger than it first appeared, that its downside is smaller than feared, or that the alternative is worse on the very dimension the conclusion cares about.",
          'The argument recommends a plan, policy, or choice after implicitly weighing costs, risks, or competing benefits.',
        ],
        [
          '**Bridge Concepts**',
          'Provide a fact that explicitly connects a concept in the premises to a different concept in the conclusion, filling a definitional or categorical gap.',
          'The premises discuss X but the conclusion is about Y, and the link between X and Y is unstated.',
        ],
        [
          '**Support the Analogy**',
          'Show that two things the argument compares are genuinely similar in the relevant respects, validating the comparison.',
          'The argument concludes something about X because it is true of the "similar" Y.',
        ],
        [
          '**Eliminate a Counterexample**',
          "Rule out a scenario that, if true, would be a direct exception to the argument's conclusion.",
          'The argument makes a broad or general claim that could be sunk by a single exception.',
        ],
        [
          '**Validate the Data**',
          'Confirm that the evidence the argument relies on is accurate, unbiased, and representative.',
          'The argument relies on a study, survey, or statistic as its primary evidence.',
        ],
        [
          '**Fallback Support Lens**',
          "When no single pattern dominates, ask what new fact would make the author's exact conclusion less vulnerable: remove an obstacle, reinforce the key benefit, or show the obvious objection is overstated.",
          'The argument is non-causal and somewhat open-ended, but still has a clear point where support would matter most.',
        ],
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Strategy \u2260 Formula',
      text: 'These strategies are not rigid templates. Real LSAT questions often blend multiple patterns or present the gap in unexpected ways. Use these categories as starting points for your prephrase, not as a checklist to mechanically apply. When no neat label fits, fall back to the support lens: ask what missing fact would make the exact conclusion more reasonable, not merely more interesting or topically related.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'paragraph', text: "Let's apply everything from this lesson to a complete Strengthen question." },
    { type: 'paragraph', text: 'Consider this illustrative argument:' },
    {
      type: 'blockquote',
      text: '"A city recently installed new LED streetlights in its downtown district. In the six months following the installation, reported crime in the downtown district fell by 20%. City officials concluded that the improved lighting was a significant factor in reducing crime downtown."',
    },
    {
      type: 'paragraph',
      text: 'The structure should feel familiar from Weaken, just in reverse. We want a new fact that makes the lighting explanation more convincing by squeezing out rival causes.',
    },

    { type: 'h3', text: 'Walkthrough' },

    { type: 'h4', text: 'Step 1: Find the Conclusion' },
    {
      type: 'paragraph',
      text: 'The conclusion is: *"The improved lighting was a significant factor in reducing crime downtown."* The evidence is a correlation: new LED streetlights were installed, and crime fell 20% in the following six months.',
    },

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    {
      type: 'paragraph',
      text: 'The argument makes a classic **correlation-to-causation** leap. The author observes two things happening together (new lights + crime drop) and concludes that one caused the other. The gap is the possibility that something else caused the crime drop — increased police presence, seasonal patterns, economic changes, or other factors. To strengthen, we need to rule out these alternatives or show a tighter connection between the lights and the crime reduction.',
    },

    { type: 'h4', text: 'Step 3: Prephrase the Strengthener' },
    {
      type: 'paragraph',
      text: 'Prephrase: *"The argument would be stronger if I found out that no other plausible explanation accounts for the crime drop in downtown, or that the areas without new lights didn\'t see the same improvement."*',
    },

    { type: 'h4', text: 'Step 4: Test the Best Strengthener' },
    {
      type: 'paragraph',
      text: 'The most helpful new fact would rule out a leading alternative explanation for the drop in downtown crime. For example, if extra police patrols were deployed somewhere else rather than downtown, that would make the lighting explanation more plausible because the obvious competing cause is no longer available.',
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'Why Other Facts Help Less',
      text: 'Energy savings and future plans are irrelevant, and evidence that other cities did not improve actually cuts the wrong way. Facts about nearby unlit neighborhoods are somewhat supportive, but they are still weaker than information that directly eliminates the best alternative cause. Strengthen rewards the answer that does the most work on the core gap.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Key Principles' },
    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: '**1. The strengthener adds NEW information not already in the argument.** The correct answer introduces a fact from outside the stimulus that makes the conclusion more plausible. It does not simply restate a premise.\n\n**2. The strengthener does not have to prove the conclusion.** It only needs to make the conclusion *more likely* — even a modest increase in probability is enough if it is the most helpful option among the five choices.\n\n**3. Every strengthener targets the gap.** Find the conclusion, find the premises, find the leap between them. The correct answer will fill that leap.\n\n**4. Treat every answer as true.** Never reject an answer because it seems unlikely in the real world. Accept it as fact and test its impact on the argument.\n\n**5. Know your strategies.** Confirm causation, rule out alternatives, bridge concepts, support an analogy, validate data, and strengthen a cost-benefit tradeoff are the most common tools. When the pattern is mixed, use the fallback support lens and ask what fact would make the conclusion less fragile.\n\n**6. Strengthen and Weaken are mirrors.** If you understand one, you understand both. Practice flipping between them to deepen your gap-identification skills.',
    },
  ],
  alternates: {
    glance: {
      label: 'At a Glance',
      content: [
        { type: 'h3', text: 'Core Concepts' },
        {
          type: 'table',
          headers: ['Concept', 'Definition', 'Key Distinction'],
          rows: [
            [
              '**Gap Model**',
              'Every argument has a logical leap between premises and conclusion; the correct answer targets that leap.',
              'Strengthen fills the gap; Weaken widens it; Evaluate probes it.',
            ],
            [
              '**Strengthen vs. Weaken**',
              'Mirror-image question types that target the same gap but push in opposite directions.',
              'Strengthen makes the conclusion more likely; Weaken makes it less likely.',
            ],
            [
              '**Strengthen vs. Sufficient Assumption**',
              'Both supply missing information, but to different degrees.',
              'Strengthen needs only a partial increase in probability; SA must guarantee the conclusion.',
            ],
          ],
        },
        { type: 'h3', text: 'Common Strategies' },
        {
          type: 'table',
          headers: ['Strategy', 'When to Use'],
          rows: [
            ['**Confirm Causation**', 'Argument concludes A caused B from a correlation or sequence.'],
            ['**Rule Out Alternatives**', 'Causal claim that has not eliminated other potential causes.'],
            ['**Strengthen a Tradeoff**', 'Argument recommends a plan by weighing costs vs. benefits.'],
            ['**Bridge Concepts**', 'Premises discuss X but conclusion is about Y; link is unstated.'],
            ['**Support the Analogy**', 'Conclusion about X because it is true of "similar" Y.'],
            ['**Validate the Data**', 'Argument relies on a study, survey, or statistic as key evidence.'],
            ['**Fallback Support Lens**', 'No single pattern dominates; target the most fragile point.'],
          ],
        },
        { type: 'h3', text: 'Quick Example' },
        {
          type: 'blockquote',
          text: '"A city installed new LED streetlights downtown. Crime fell 20% over the next six months. City officials concluded that the improved lighting was a significant factor in reducing crime."',
        },
        {
          type: 'paragraph',
          text: 'The gap is correlation-to-causation. The strongest strengthener rules out the leading alternative (e.g., extra police patrols were deployed elsewhere, not downtown), making the lighting explanation more plausible.',
        },
        {
          type: 'callout',
          variant: 'summary',
          text: '**1.** Every strengthener targets the gap between premises and conclusion.\n**2.** The correct answer adds new information -- it does not restate a premise.\n**3.** Even a modest increase in probability qualifies; you do not need to prove the conclusion.',
        },
      ],
    },
  },
};
