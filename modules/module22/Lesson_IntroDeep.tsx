import { Lesson } from '../../types';

export const Lesson_IntroDeep: Lesson = {
  id: '22-intro-deep',
  title: 'Conditional Logic Essentials',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Conditional Logic Essentials' },
    {
      type: 'paragraph',
      text: 'This lesson covers the three building blocks you need before diving into formal diagramming: **which question types rely on conditional logic**, **the arrow notation system** used throughout this module, and **the trigger words** the LSAT uses to disguise conditional relationships.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Question Types That Rely on Conditional Logic' },
    {
      type: 'paragraph',
      text: 'Conditional reasoning is not confined to a single question type. It is the structural foundation for many of the most frequently tested question families on the LSAT.',
    },
    {
      type: 'table',
      headers: ['Question Type', 'How Conditional Logic Appears', 'What You Must Do'],
      rows: [
        [
          '**Sufficient Assumption (SA)**',
          'The argument is missing a conditional link that would make the conclusion airtight.',
          'Supply the missing conditional premise that completes the logical chain.',
        ],
        [
          '**Necessary Assumption (NA)**',
          'The argument depends on an unstated conditional relationship.',
          'Identify the conditional relationship the argument cannot survive without.',
        ],
        [
          '**Flaw**',
          'The argument confuses sufficient and necessary conditions, or treats a conditional as a biconditional.',
          'Name the specific conditional error (Mistaken Reversal or Mistaken Negation).',
        ],
        [
          '**Parallel Reasoning**',
          'The argument uses a conditional structure, and you must match it exactly.',
          'Map the conditional pattern and find the answer with an identical logical form.',
        ],
        [
          '**Must Be True (MBT)**',
          'The stimulus provides conditional rules, and you must derive what necessarily follows.',
          'Chain conditionals and contrapositives to determine what must be true.',
        ],
        [
          '**Parallel Flaw**',
          'The argument commits a conditional error, and you must find another argument with the same error.',
          'Identify the flaw pattern and match it structurally.',
        ],
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'The Arrow Notation' },
    {
      type: 'paragraph',
      text: 'Throughout this module, we use **arrow notation** to diagram conditional relationships. This notation strips away the English and reveals the pure logical structure beneath.',
    },
    {
      type: 'paragraph',
      text: '**A \u2192 B** means "If A, then B."\n\n- **A** is the sufficient condition (the trigger). It appears on the **left** side of the arrow.\n- **B** is the necessary condition (the requirement). It appears on the **right** side of the arrow.\n- The **arrow** represents the one-way logical flow: "A guarantees B," but it does **not** mean "B guarantees A."',
    },
    {
      type: 'paragraph',
      text: 'Think of the arrow as a one-way street sign. Traffic flows from left to right — from the trigger to the requirement. You can always travel forward (if A is true, B must be true). You can never travel backward (if B is true, A might or might not be true).',
    },
    {
      type: 'table',
      headers: ['Notation', 'Meaning', 'Example'],
      rows: [
        ['**A \u2192 B**', 'If A is true, then B must be true.', '"If it rains, the ground is wet." `Rain \u2192 Wet Ground`'],
        ['**~A**', 'A is not true (negation).', '"It is not raining." `~Rain`'],
        [
          '**~B \u2192 ~A**',
          'If B is not true, then A cannot be true (the contrapositive).',
          '"If the ground is not wet, it is not raining." `~Wet Ground \u2192 ~Rain`',
        ],
        [
          '**A \u2194 B**',
          'A is true if and only if B is true (biconditional).',
          '"You graduate if and only if you pass all courses." `Graduate \u2194 Pass All`',
        ],
      ],
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'The Golden Rule of Arrows',
      text: 'You can only draw conclusions by moving **forward** through the arrow (A is true \u2192 therefore B is true) or by using the **contrapositive** (B is false \u2192 therefore A is false). You can **never** conclude anything by affirming the right side or denying the left side. This rule is absolute and has no exceptions on the LSAT.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Common Conditional Triggers' },
    {
      type: 'paragraph',
      text: 'The LSAT rarely presents conditionals in a simple "if...then" format. Instead, the test uses a variety of trigger words to disguise the logical structure. Learning to recognize these words is essential for accurate diagramming.',
    },
    {
      type: 'table',
      headers: ['Condition Type', 'Trigger Words', 'What They Signal', 'Diagram Position'],
      rows: [
        [
          '**Sufficient** (Trigger)',
          'If, When, Whenever, Every, All, Any, Each, The only, People who',
          'These words introduce the condition that **starts** the chain. Whatever follows is guaranteed.',
          'Left side of arrow (A \u2192)',
        ],
        [
          '**Necessary** (Requirement)',
          'Only if, Only when, Requires, Must, Needs, Then, Is necessary for',
          'These words introduce the condition that **must exist**. It is a requirement, not a trigger.',
          'Right side of arrow (\u2192 B)',
        ],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'The Crucial "All" vs. "Only" Distinction',
      text: '**"All A are B"** and **"Only A are B"** have completely different diagrams.\n\n- "All A are B" \u2192 `A \u2192 B` (A is sufficient for B)\n- "Only A are B" \u2192 `B \u2192 A` (A is necessary for B)\n\nMixing up "all" and "only" is one of the most common LSAT errors. Memorize this distinction before proceeding.',
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'Indicator Words Are Clues, Not Proof',
      text: 'Indicator lists are essential, but they are not enough by themselves. The LSAT also disguises conditionals through definitions, category membership, restrictions, and ordinary English paraphrases. A strong translator asks two questions: **What condition is doing the triggering?** and **What condition is being required?**',
    },
    {
      type: 'paragraph',
      text: 'You will see the same logical rule dressed up in many different English forms: "All poets are dreamers," "Anyone who is a poet is a dreamer," "Being a poet requires being a dreamer," and "Only dreamers are poets" all reduce to the same core relationship: `Poet \u2192 Dreamer`. This module will train you to hear the logic beneath the wording, not just memorize a trigger list.',
    },
  ],
};
