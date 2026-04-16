import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: '19-2',
  title: 'Step-by-Step: Paradox/Explain',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Step-by-Step: Paradox/Explain' },
    { type: 'paragraph', text: 'Follow this five-step method to solve any Paradox question quickly and accurately.' },
    {
      type: 'process',
      title: 'The 5-Step Method',
      steps: [
        'Identify Both Facts — Read the stimulus and isolate Fact 1 (the expected situation) and Fact 2 (the surprising outcome). Look for pivot words like "however," "yet," or "surprisingly."',
        'State the Naive Assumption — Ask: "Given Fact 1, what would I normally expect?" This reveals the background assumption the stimulus is disrupting.',
        'Define the Phenomenon-Hypothesis — Ask: "What actually happened anyway?" The right answer must explain this phenomenon, not just comment on one side of the setup.',
        "Prephrase a Bridge — Before looking at the choices, predict the KIND of information that would let both facts coexist. You don't need the exact answer, just the category (a hidden cause, a definitional difference, a numerical trick).",
        'Apply the Clear Resolution Test — Test each choice against one question: "Does this new fact clearly explain how BOTH Fact 1 and Fact 2 can be true at the same time?" If it only softens the tension or still leaves the main mystery intact, eliminate it.',
      ],
    },
    { type: 'h3', text: 'The Clear Resolution Standard' },
    {
      type: 'paragraph',
      text: 'A correct Paradox answer must do real explanatory work. The answer should either show why the naive assumption was too simple or identify the missing mechanism that produced the phenomenon anyway. If you still find yourself saying, "Okay, but why did the surprising result happen?" the answer is too weak.',
    },
    { type: 'h3', text: 'Wrong Answer Patterns' },
    {
      type: 'list',
      items: [
        '**Explains Only One Fact** — Validates one side of the conflict without connecting it to the other side. It might explain WHY Fact 1 is true but never addresses why Fact 2 also holds.',
        '**Helps a Little but Does Not Resolve** — Sounds relevant and may make the puzzle slightly less strange, but still fails to show clearly how both facts fit together.',
        '**Deepens the Paradox** — Adds another reason to expect the opposite of what happened, making the conflict harder to resolve rather than easier.',
        '**Irrelevant** — Introduces information about a different group, time period, or context that has no bearing on the specific two-fact tension.',
      ],
    },
    { type: 'h3', text: 'Worked Method Snapshot' },
    {
      type: 'paragraph',
      text: '**Fact 1:** Employees were highly motivated by the bonus program. **Naive assumption:** Higher motivation should increase productivity. **Phenomenon-hypothesis:** Productivity still declined.',
    },
    {
      type: 'paragraph',
      text: 'A strong resolution would show that the bonus program changed employee behavior in a way that consumed productive time, for example by forcing employees to spend hours tracking, documenting, or optimizing for quotas instead of doing the underlying work. That kind of answer does more than sound relevant — it clearly explains why motivation and lower output coexisted.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Tip',
      text: 'Spend most of your time on the setup: facts, naive assumption, and phenomenon. If you define the puzzle precisely before looking at the choices, the right answer usually jumps out. Rushing past the stimulus to the choices is the most common timing trap on Paradox questions.',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "Step-by-Step: Paradox/Explain"
        },
        {
          "type": "paragraph",
          "text": "Follow this {{~four~five~}}-step method to solve any Paradox question quickly and accurately."
        },
        {
          "type": "diff-note",
          "text": "{{!The mastery course expands the website's 4-step method to 5 steps by adding explicit Naive Assumption (Step 2) and Phenomenon-Hypothesis (Step 3) sub-steps, and reframing the final step as a Clear Resolution Test rather than a simple match.!}}",
          "variant": "comment"
        },
        {
          "type": "process",
          "title": "The {{~4~5~}}-Step Method",
          "steps": [
            "Identify Both Facts — Read the stimulus and isolate Fact 1 (the expected situation) and Fact 2 (the surprising outcome). Look for pivot words like \"however,\" \"yet,\" or \"surprisingly.\"",
            "{{~Articulate the Tension — State the paradox in your own words: \"Why did X happen even though Y is also true?\" If you can't phrase the conflict, re-read until you can.~State the Naive Assumption — Ask: \"Given Fact 1, what would I normally expect?\" This reveals the background assumption the stimulus is disrupting.~}}",
            "{{+Define the Phenomenon-Hypothesis — Ask: \"What actually happened anyway?\" The right answer must explain this phenomenon, not just comment on one side of the setup.+}}",
            "Prephrase a Bridge — Before looking at the choices, predict the KIND of information that would let both facts coexist. You don't need the exact answer, just the category (a hidden cause, a definitional difference, a numerical trick).",
            "{{~Match Answer — Test each choice against one question: \"Does this new fact explain how BOTH Fact 1 and Fact 2 can be true at the same time?\" Select the choice that does.~Apply the Clear Resolution Test — Test each choice against one question: \"Does this new fact clearly explain how BOTH Fact 1 and Fact 2 can be true at the same time?\" If it only softens the tension or still leaves the main mystery intact, eliminate it.~}}"
          ]
        },
        {
          "type": "h3",
          "text": "Wrong Answer Patterns"
        },
        {
          "type": "list",
          "items": [
            "**Explains Only One Fact** — Validates one side of the conflict without connecting it to the other side. It might explain WHY Fact 1 is true but never addresses why Fact 2 also holds.",
            "{{+**Helps a Little but Does Not Resolve** — Sounds relevant and may make the puzzle slightly less strange, but still fails to show clearly how both facts fit together.+}}",
            "**Deepens the Paradox** — Adds another reason to expect the opposite of what happened, making the conflict harder to resolve rather than easier.",
            "**Irrelevant** — Introduces information about a different group, time period, or context that has no bearing on the specific two-fact tension."
          ]
        },
        {
          "type": "h3",
          "text": "Worked Method Snapshot"
        },
        {
          "type": "paragraph",
          "text": "{{+**Try this:** Attempt the question before reading the analysis below.+}}"
        },
        {
          "type": "paragraph",
          "text": "**Fact 1:** Employees were highly motivated by the bonus program. {{~**Fact 2:** Productivity still declined. The paradox is not whether the incentives were appealing; it is how motivation and lower output managed to coexist.~**Naive assumption:** Higher motivation should increase productivity. **Phenomenon-hypothesis:** Productivity still declined.~}}"
        },
        {
          "type": "paragraph",
          "text": "A strong resolution would show that the bonus program changed employee behavior in a way that consumed productive time, for example by forcing employees to spend hours tracking, documenting, or optimizing for quotas instead of doing the underlying work. That kind of answer {{~bridges both facts at once~does more than sound relevant — it clearly explains why motivation and lower output coexisted~}}."
        },
        {
          "type": "callout",
          "title": "Timing Tip",
          "variant": "tip",
          "text": "Spend most of your time on {{~Steps 1-2. If you correctly identify both facts and articulate the tension~the setup: facts, naive assumption, and phenomenon. If you define the puzzle precisely before looking at the choices~}}, the right answer usually jumps out. Rushing past the stimulus to the choices is the most common timing trap on Paradox questions."
        }
      ],
    },
    playbook: {
      label: 'Playbook',
      content: [
        { type: 'h2', text: 'Must Be False -- Playbook' },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Timing Target',
          text: '**Target:** 1:30 per Must Be False question. Spend ~40 sec parsing constraints, ~30 sec hunting the contradiction, ~20 sec verifying impossibility.',
        },
        {
          type: 'process',
          title: 'The 3-Step Method',
          steps: [
            '**Parse Constraints** -- Read every premise and convert each one into a precise logical statement. Identify conditionals (if/then), quantifiers (all/some/none), category boundaries (only X can be Y), and numerical limits. Write them as tight rules.',
            '**Find Contradiction** -- Scan the answer choices for the one that directly violates at least one constraint. The correct answer is impossible given the premises, not merely unlikely or unsupported.',
            '**Verify Impossibility** -- Test your chosen answer against ALL premises simultaneously. Confirm there is no reading of the stimulus under which the answer could be true. If any interpretation allows it, the answer is not the right pick.',
          ],
        },
        {
          type: 'table',
          headers: ['Constraint Type', 'What the Stimulus Sets Up', 'Where to Find the Contradiction'],
          rows: [
            [
              '**Conditional breakers**',
              'An if/then rule that links two conditions',
              'Find the answer that affirms the antecedent but denies the consequent, or denies the consequent while affirming a necessary condition',
            ],
            [
              '**Quantifier clashes**',
              '"All X are Y" or "No X are Y" or "Some X are not Y"',
              'Find the answer that asserts "all" when the stimulus says "some...not," or asserts overlap when the stimulus says "none"',
            ],
            [
              '**Exclusive boundaries**',
              'Categories that cannot overlap (only members of Group A can do X)',
              'Find the answer that places an entity in the wrong category or claims overlap where the stimulus forbids it',
            ],
            [
              '**Numerical impossibility**',
              'A fixed total, maximum, minimum, or ratio',
              'Find the answer whose arithmetic contradicts the stated numbers -- e.g., claims a part exceeds the whole',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          title: 'Method Chain',
          text: '**Parse Constraints** --> **Find Contradiction** --> **Verify Impossibility**. The right answer is the one that CANNOT be true under any reading of the premises.',
        },
      ],
    },
  },
};
