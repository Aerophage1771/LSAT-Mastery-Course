import { Lesson } from '../../types';

export const Lesson3b_FieldGuide_Extended: Lesson = {
  id: '3-3b',
  title: 'Common Strategies: Extended Guide',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Common Strategies: Extended Guide' },
    {
      type: 'paragraph',
      text: 'This lesson continues the Field Guide with three additional strategy categories — Applying Principles, Process of Elimination, and Refutation by Counterexample — followed by the Quick Pattern Matching decision process and a comprehensive Indicator Language reference table.',
    },

    { type: 'hr' },

    { type: 'h2', text: '5. Applying Principles & Rules (~8%)' },
    {
      type: 'paragraph',
      text: 'The argument is structured around the application of a general rule, definition, or principle to a specific case. The argument moves from the general to the specific — or occasionally, from specific instances to a general principle.',
    },

    { type: 'h4', text: 'Concrete Example' },
    {
      type: 'blockquote',
      text: '"Legal scholar: Under contract law, an agreement is void if one party was coerced into signing. The evidence clearly shows that the defendant signed the contract under threat of termination. Therefore, the contract is void."',
    },
    {
      type: 'paragraph',
      text: 'The legal scholar **applies a general legal principle** (coerced agreements are void) to a specific case (the defendant was coerced) to reach a conclusion (the contract is void).',
    },

    { type: 'h4', text: 'Indicator Language' },
    {
      type: 'list',
      items: [
        '"according to the principle," "by definition," "under the rule"',
        '"since X satisfies the criteria for Y," "fits the definition of"',
        '"generalizes from specific cases to establish a principle"',
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: '6. Process of Elimination (~6%)' },
    {
      type: 'paragraph',
      text: 'This strategy reaches a conclusion by showing it is the only viable option remaining. The author identifies a limited set of possible explanations and then provides reasons to reject all but one.',
    },

    { type: 'h4', text: 'Concrete Example' },
    {
      type: 'blockquote',
      text: '"Detective: The stolen painting must have been taken by one of three people who had access to the gallery that night: the security guard, the curator, or the janitor. The security guard was on camera the entire evening, and the curator was at a documented conference in another city. Therefore, the janitor must be the thief."',
    },
    {
      type: 'paragraph',
      text: 'The detective **eliminates alternatives** systematically: the security guard has an alibi (camera footage), the curator has an alibi (conference), leaving only the janitor.',
    },

    { type: 'h4', text: 'Indicator Language' },
    {
      type: 'list',
      items: [
        '"the only remaining option," "since it cannot be X," "must therefore be Y"',
        '"rules out," "eliminates," "having excluded"',
        '"one of three possible explanations... but not A... and not B... therefore C"',
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: '7. Refutation by Counterexample (~5%)' },
    {
      type: 'paragraph',
      text: 'A direct and powerful way to disprove a general claim. The author refutes a universal claim ("All X are Y" or "No X is Y") by providing a single specific instance where the claim is false. One valid counterexample is logically sufficient to disprove any universal claim.',
    },

    { type: 'h4', text: 'Concrete Example' },
    {
      type: 'blockquote',
      text: '"Professor: It is not true that every successful entrepreneur dropped out of college. Warren Buffett graduated from the University of Nebraska, earned a master\'s from Columbia, and built one of the largest companies in the world."',
    },
    {
      type: 'paragraph',
      text: 'The professor **provides a counterexample** (Warren Buffett) to disprove the universal claim that every successful entrepreneur dropped out.',
    },

    { type: 'h4', text: 'Indicator Language' },
    {
      type: 'list',
      items: [
        '"but consider the case of," "for example, [specific instance]"',
        '"there is at least one instance where," "not all X are Y — for instance"',
        '"this is contradicted by the case of"',
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Counterexample vs. Analogy',
      text: 'A **counterexample** is a specific instance of the *exact same category* being discussed. An **analogy** is a comparison to a *different category*. If someone says "All birds can fly" and you mention penguins, that is a counterexample (penguins are birds). If you compare birds to airplanes, that is an analogy.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Quick Pattern Matching — Decision Process' },
    {
      type: 'paragraph',
      text: 'Use this decision process when you encounter a Method of Reasoning question and need to quickly identify the strategy:',
    },

    {
      type: 'process',
      title: 'Pattern Matching Flowchart',
      steps: [
        '**Does the argument compare two different situations?** → If yes, it is likely an **Analogy** (supportive, refutation, or attacking).',
        '**Does the argument predict what would happen if a plan is followed?** → If yes, it is likely **Highlighting Consequences** (negative or reductio).',
        '**Does the argument offer a different cause for the same observed event?** → If yes, it is likely an **Alternative Explanation** (Causal Reasoning).',
        '**Does the argument expose a hidden assumption and show it is false?** → If yes, it is likely **Challenging an Assumption**.',
        '**Does the argument apply a general rule/principle to a specific case?** → If yes, it is likely **Applying a Principle**.',
        '**Does the argument list possibilities and rule them out one by one?** → If yes, it is likely **Process of Elimination**.',
        '**Does the argument respond to a universal claim with a single specific case that violates it?** → If yes, it is likely a **Counterexample**.',
        '**Does the argument cite expert opinion or research data?** → If yes, it is likely **Appeal to Authority/Evidence**.',
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Method Indicator Language — Quick Reference' },
    {
      type: 'paragraph',
      text: 'This table maps common phrases you will see in *answer choices* to the method they describe. Use this when evaluating answers in Step 3 of the 4-Step Method:',
    },

    {
      type: 'table',
      headers: ['Answer Choice Language', 'Method It Describes'],
      rows: [
        ['"draws a comparison between two cases"', 'Analogy (Supportive)'],
        [
          '"applies the opponent\'s reasoning to a different case to show it leads to an absurd result"',
          'Refutation by Analogy',
        ],
        ['"points out a relevant difference between two things being compared"', 'Attacking an Analogy'],
        ['"argues that a proposal would have undesirable consequences"', 'Negative Consequences'],
        ['"assumes the claim is true and derives a contradiction"', 'Proof by Contradiction (Reductio)'],
        ['"offers an alternative explanation for the observed phenomenon"', 'Alternative Explanation'],
        ['"questions the causal connection between X and Y"', 'Weakening a Causal Claim'],
        ['"challenges an assumption on which the argument depends"', 'Challenging an Assumption'],
        ['"applies a general principle to a specific case"', 'Applying a Principle'],
        ['"eliminates competing alternative explanations"', 'Process of Elimination'],
        ['"presents a counterexample to a generalization"', 'Counterexample'],
        ['"cites expert testimony in support of a claim"', 'Appeal to Authority'],
      ],
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: '• Most Method of Reasoning arguments fall into **7–8 recurring categories**. Recognizing the category instantly narrows your answer choices.\n• **Analogy** is the most common method (~23%), followed by **Consequences** (~17%) and **Causal Reasoning** (~14%).\n• Each method has distinctive **indicator language** in both the stimulus and the answer choices. Learn to spot these signals.\n• Use the **Quick Pattern Matching** decision process when you need to quickly identify a method during timed practice.\n• The **Master Summary Table** in the previous lesson is your go-to quick reference. Return to it often during practice sessions.',
    },
  ],
  alternates: {
    field: {
      label: 'Field Guide',
      content: [
        { type: 'h3', text: 'Strategy Cards' },
        {
          type: 'breakdown',
          labels: { title: 'Strategy', text: 'Details' },
          items: [
            {
              title: 'Applying Principles',
              text: '**Signal:** "according to the principle," "by definition," "under the rule"\n\n**How It Works:** Moves from a general rule to a specific case (or occasionally from specific instances to a general principle). The argument establishes that the case satisfies the criteria, then draws the conclusion the rule dictates.\n\n**Trap:** Mistaking a principle application for a generalization from examples.',
              badge: '~8%',
              badgeColor: 'slate',
            },
            {
              title: 'Process of Elimination',
              text: '**Signal:** "the only remaining possibility," "since it cannot be X," "rules out"\n\n**How It Works:** Identifies a limited set of possible explanations, then provides reasons to reject all but one. The conclusion is that the remaining option must be correct.\n\n**Trap:** Overlooking that some options were not truly eliminated \u2014 the argument may assume the original set was exhaustive.',
              badge: '~6%',
              badgeColor: 'slate',
            },
            {
              title: 'Refutation by Counterexample',
              text: '**Signal:** "but consider the case of," "there is at least one instance where," "not all X are Y"\n\n**How It Works:** Disproves a universal claim ("All X are Y" or "No X is Y") by providing a single specific instance where the claim is false. One valid counterexample is logically sufficient.\n\n**Trap:** Calling it an analogy when the example is from the *same* category being discussed (counterexample), not a different one (analogy).',
              badge: '~5%',
              badgeColor: 'slate',
            },
          ],
        },
        { type: 'h3', text: 'Quick Pattern Matching' },
        {
          type: 'process',
          title: 'Pattern Matching Flowchart',
          steps: [
            '**Compares two different situations?** \u2192 Analogy',
            '**Predicts what would happen?** \u2192 Consequences',
            '**Offers a different cause for the same event?** \u2192 Alternative Explanation (Causal)',
            '**Exposes a hidden assumption?** \u2192 Challenging an Assumption',
            '**Applies a general rule to a specific case?** \u2192 Applying a Principle',
            '**Lists possibilities and rules them out?** \u2192 Process of Elimination',
            '**Responds with a single contrary instance?** \u2192 Counterexample',
            '**Cites expert opinion or data?** \u2192 Appeal to Authority/Evidence',
          ],
        },
        { type: 'h3', text: 'Method Indicator Language' },
        {
          type: 'table',
          headers: ['Answer Choice Language', 'Method'],
          rows: [
            ['"draws a comparison between two cases"', 'Analogy (Supportive)'],
            ['"applies the opponent\'s reasoning to a different case to show it leads to an absurd result"', 'Refutation by Analogy'],
            ['"argues that a proposal would have undesirable consequences"', 'Negative Consequences'],
            ['"assumes the claim is true and derives a contradiction"', 'Proof by Contradiction'],
            ['"offers an alternative explanation for the observed phenomenon"', 'Alternative Explanation'],
            ['"challenges an assumption on which the argument depends"', 'Challenging an Assumption'],
            ['"applies a general principle to a specific case"', 'Applying a Principle'],
            ['"eliminates competing alternative explanations"', 'Process of Elimination'],
            ['"presents a counterexample to a generalization"', 'Counterexample'],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          text: 'Most Method of Reasoning arguments fall into **7\u20138 recurring categories**. Sort the stimulus into a family first, then use indicator language to confirm your prephrase against the answer choices.',
        },
      ],
    },
  },
};
