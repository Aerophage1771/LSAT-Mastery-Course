import { Lesson } from '../../types';

export const Lesson2b_WorkedExamples: Lesson = {
  id: '4-2b',
  title: 'Worked Examples',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Full Worked Example' },
    { type: 'paragraph', text: "Let's apply all four steps to a complete Parallel Reasoning question." },
    { type: 'paragraph', text: 'Consider this illustrative argument:' },
    {
      type: 'blockquote',
      text: '"If a building is designated as a historic landmark, it cannot be demolished. City Hall has been designated as a historic landmark. Therefore, City Hall cannot be demolished."',
    },
    {
      type: 'paragraph',
      text: 'This is enough to run the full method: identify the valid conditional rule, abstract it to `If A → B / X is A / therefore X is B`, and then look for a second argument that preserves that exact logic.',
    },

    { type: 'h3', text: 'Applying the 4-Step Method' },

    {
      type: 'process',
      title: 'Step-by-Step Walkthrough',
      steps: [
        '**Step 1 — Identify Structure:**\n• **Conclusion:** "City Hall cannot be demolished" — a definite negative factual claim about a specific subject.\n• **Premise 1:** "If a building is designated as a historic landmark, it cannot be demolished" — a universal conditional (If A → B).\n• **Premise 2:** "City Hall has been designated as a historic landmark" — affirms the antecedent for a specific case (X is A).\n• **Validity:** Valid. This is Modus Ponens.',
        '**Step 2 — Abstract the Pattern:**\nIf A → B. X is A. Therefore, X is B.\nSpecifically: valid Modus Ponens with a universal conditional premise, applied to a specific case, yielding a definite factual conclusion.',
        '**Step 3 — Match by Elimination (Quick Scan):**\nReject any candidate that changes the conclusion\'s force, flips the polarity, swaps in a weaker quantifier like "most" or "some," or turns the argument invalid by denying the antecedent or affirming the consequent. The surviving match must keep a universal conditional premise, affirm the antecedent for a specific case, and deliver a definite factual conclusion.',
        '**Step 4 — Verify the Final Match:**\nMap the remaining candidate point by point: universal rule, specific case satisfies the trigger, conclusion follows directly. If every line fits `If A → B / X is A / therefore X is B`, you have a true Modus Ponens parallel rather than a merely similar topic or vocabulary match.',
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Why the Final Match Works',
      text: "The winning parallel keeps all three essential features: a universal rule, a specific case that satisfies the rule's trigger, and a definite conclusion that follows validly. Most wrong answers miss on validity, quantifier strength, or conclusion force. Parallel Reasoning rewards exact structural sameness, not broad resemblance.",
    },
  ],
  alternates: {
    annotated: {
      label: 'Annotated',
      content: [
        { type: 'h3', text: 'Annotated Stimulus' },
        {
          type: 'blockquote',
          text: '"If a building is designated as a historic landmark, it cannot be demolished. City Hall has been designated as a historic landmark. Therefore, City Hall cannot be demolished."',
        },
        { type: 'h4', text: 'Structural Annotation' },
        {
          type: 'breakdown',
          labels: { title: 'Sentence', text: 'Role' },
          items: [
            {
              title: '"If a building is designated as a historic landmark, it cannot be demolished."',
              text: 'Universal conditional rule: If A, then B.',
              badge: 'Premise 1',
              badgeColor: 'blue',
            },
            {
              title: '"City Hall has been designated as a historic landmark."',
              text: 'Affirms the antecedent for a specific case: X is A.',
              badge: 'Premise 2',
              badgeColor: 'blue',
            },
            {
              title: '"Therefore, City Hall cannot be demolished."',
              text: 'Definite factual conclusion about a specific subject: X is B.',
              badge: 'Conclusion',
              badgeColor: 'green',
            },
          ],
        },
        { type: 'h3', text: 'Annotated Correct Match' },
        {
          type: 'breakdown',
          labels: { title: 'Sentence', text: 'Role' },
          items: [
            {
              title: '"If a student completes the advanced seminar, the student receives a certificate."',
              text: 'Universal conditional rule: If A, then B. (Same skeleton as Premise 1 above.)',
              badge: 'Premise 1',
              badgeColor: 'blue',
            },
            {
              title: '"Maria completed the advanced seminar."',
              text: 'Affirms the antecedent for a specific case: X is A.',
              badge: 'Premise 2',
              badgeColor: 'blue',
            },
            {
              title: '"Therefore, Maria received a certificate."',
              text: 'Definite factual conclusion about a specific subject: X is B.',
              badge: 'Conclusion',
              badgeColor: 'green',
            },
          ],
        },
        { type: 'h3', text: 'Method Applied' },
        {
          type: 'process',
          steps: [
            '**Identify Structure:** Universal conditional + specific case affirming antecedent + definite factual conclusion. Valid Modus Ponens.',
            '**Abstract Pattern:** If A -> B. X is A. Therefore X is B.',
            '**Eliminate mismatches:** Reject any choice whose conclusion is a recommendation, prediction, or conditional. Reject any choice that denies the antecedent or affirms the consequent.',
            '**Verify:** Both arguments share the same skeleton -- universal rule, specific case satisfies the trigger, definite factual conclusion follows validly.',
          ],
        },
        { type: 'h3', text: 'Trap Table' },
        {
          type: 'table',
          headers: ['Wrong Answer Type', 'Why It Fails'],
          rows: [
            ['**Affirming the Consequent**', 'Observes B, concludes A -- invalid, but stimulus is valid Modus Ponens.'],
            ['**Denying the Antecedent**', 'Observes not-A, concludes not-B -- different invalid form.'],
            ['**Topic Match**', 'Same topic (landmarks, buildings) but uses a different structure.'],
            ['**Quantifier Shift**', 'Uses "most" instead of "all" -- changes the logical force.'],
            ['**Extra Premise**', 'Adds a third premise -- structurally simpler stimulus has only two.'],
          ],
        },
      ],
    },
  },
};
