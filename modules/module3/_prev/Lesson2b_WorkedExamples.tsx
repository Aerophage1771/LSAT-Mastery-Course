import { Lesson } from '../../types';

export const Lesson2b_WorkedExamples: Lesson = {
  id: '3-2b',
  title: 'Worked Examples',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Full Worked Example' },
    {
      type: 'paragraph',
      text: "Let's apply all four steps to a complete Method of Reasoning question from start to finish.",
    },

    {
      type: 'paragraph',
      text: "Use the four-step method on an argument like this one: a nutritionist attacks a diet book's causal story by denying the proposed mechanism and then offering a different explanation. The point of the walkthrough is not the food science itself, but the two-part reasoning move.",
    },

    { type: 'h3', text: 'Applying the 4-Step Method' },

    {
      type: 'process',
      title: 'Step-by-Step Walkthrough',
      steps: [
        '**Step 1 — Break Down the Argument:**\n• **Opposing View:** The diet book claims eating after 8 PM causes weight gain because metabolism slows at night.\n• **Premise 1:** Metabolism does not significantly decrease during sleep — it stays roughly constant.\n• **Premise 2:** Late-night eaters gain weight because they consume additional total calories, not because of timing.\n• **Main Conclusion:** The timing of eating is incidental; total caloric intake is what matters.',
        '**Step 2 — Characterize & Prephrase:** The nutritionist does two things: (1) undermines the proposed mechanism (metabolism slowdown) by showing it doesn\'t happen, and (2) offers a different explanation (extra total calories) for the same observation (weight gain). Prephrase: "The argument attacks the proposed causal mechanism and provides an alternative explanation."',
        '**Step 3 — Evaluate Descriptions:** Look for the answer that captures both halves of the move: attacking the proposed mechanism and supplying an alternative explanation.',
        '**Step 4 — Eliminate Traps:** Discard descriptions that change the action entirely by talking about credentials, analogies, counterexamples, or consequences that never appear in the stimulus.',
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Final Check',
      text: 'A good Method of Reasoning answer sounds like a clean abstract paraphrase of what the author did. Here, the right paraphrase must include both the attack on the original causal mechanism and the substitute explanation for the observed pattern.',
    },
  ],
  alternates: {
    annotated: {
      label: 'Annotated',
      content: [
        { type: 'h3', text: 'Annotated Stimulus' },
        {
          type: 'blockquote',
          text: '"Diet book author: Eating after 8 PM causes weight gain because metabolism slows significantly during sleep. Nutritionist: In fact, metabolic rate does not drop meaningfully during sleep \u2014 it remains roughly constant. People who eat late at night gain weight not because of the timing but because they tend to consume additional total calories beyond their daily needs. The timing is incidental; total caloric intake is what matters."',
        },
        { type: 'h4', text: 'Sentence-by-Sentence Annotation' },
        {
          type: 'breakdown',
          labels: { title: 'Sentence', text: 'Role' },
          items: [
            {
              title: '"Eating after 8 PM causes weight gain because metabolism slows significantly during sleep."',
              text: 'The diet book author\'s claim \u2014 a causal argument the nutritionist will challenge.',
              badge: 'Opposing View',
              badgeColor: 'slate',
            },
            {
              title: '"In fact, metabolic rate does not drop meaningfully during sleep \u2014 it remains roughly constant."',
              text: 'Premise 1 \u2014 directly attacks the proposed causal mechanism (metabolism slowdown).',
              badge: 'Premise 1',
              badgeColor: 'blue',
            },
            {
              title: '"People who eat late at night gain weight not because of the timing but because they tend to consume additional total calories beyond their daily needs."',
              text: 'Premise 2 \u2014 offers a different cause (extra total calories) for the same observation (weight gain).',
              badge: 'Premise 2',
              badgeColor: 'blue',
            },
            {
              title: '"The timing is incidental; total caloric intake is what matters."',
              text: 'The nutritionist\'s main conclusion \u2014 rejects timing as the cause and names total intake instead.',
              badge: 'Conclusion',
              badgeColor: 'green',
            },
          ],
        },
        { type: 'h3', text: 'Method Applied' },
        {
          type: 'process',
          steps: [
            '**Break Down (annotations above):** The nutritionist challenges the diet book author\'s causal story by targeting both the mechanism and the real explanation.',
            '**Characterize & Prephrase:** The argument does two things: (1) undermines the proposed mechanism by showing it doesn\'t happen, and (2) offers a different explanation for the same observation. Prephrase: "attacks the proposed causal mechanism and provides an alternative explanation."',
            '**Evaluate:** Look for an answer that captures *both* halves \u2014 attacking the original mechanism and supplying a substitute cause.',
            '**Eliminate Traps:** Discard answers describing actions never taken (analogies, counterexamples, credentials, consequences).',
          ],
        },
        { type: 'h3', text: 'Trap Table' },
        {
          type: 'table',
          headers: ['Wrong Answer Type', 'Why It Fails'],
          rows: [
            ['**Describes content not method**', 'Restates what the nutritionist concludes (total calories matter) instead of describing *how* the argument works (attacks mechanism + offers alternative).'],
            ['**Right method, wrong argument**', 'Describes a valid method (e.g., counterexample) that simply was not used in this stimulus. The nutritionist never provides a specific instance that disproves a generalization.'],
            ['**Too specific**', 'Names the exact topic (metabolism, calories) instead of using abstract logical language. Correct answers describe patterns, not nouns.'],
            ['**Too abstract**', 'Says something like "challenges a claim" without specifying *how* \u2014 omits the two-part structure (attack mechanism + substitute cause).'],
            ['**Confuses conclusion with method**', 'Says "argues that total caloric intake matters" \u2014 that is the *what*, not the *how*.'],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          title: 'Why the Answer Works',
          text: 'The correct answer must capture the two-part move: the nutritionist (1) undermines the proposed causal mechanism and (2) offers a different explanation for the same observed pattern. Any answer missing either half is incomplete.',
        },
      ],
    },
  },
};
