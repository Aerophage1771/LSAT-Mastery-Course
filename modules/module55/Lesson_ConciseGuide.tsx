
import { Lesson } from '../../types';

export const Lesson_Summary: Lesson = {
  id: "55-summary",
  title: "Concise Guide: Conditional Logic",
  content: [
    { type: 'h2', text: 'Concise Guide: Conditional Logic' },
    { type: 'paragraph', text: 'This guide highlights the essential concepts, translation rules, and common traps in LSAT conditional reasoning.' },
    
    { type: 'hr' },
    
    { type: 'h3', text: 'Part 1: Foundations' },
    { 
      type: 'table',
      headers: ['Concept', 'Structure', 'Meaning'],
      rows: [
        ['**Conditional**', '`A \u2192 B`', 'If A (Sufficient), then B (Necessary). Guaranteed.'],
        ['**Contrapositive**', '`~B \u2192 ~A`', 'Reverse & Negate. Logically equivalent to original.'],
        ['**Bi-Conditional**', '`A \u2194 B`', 'A is sufficient AND necessary for B.']
      ]
    },

    { type: 'h4', text: 'Translation: Sufficient Indicators (The Trigger)' },
    { type: 'paragraph', text: 'The arrow points **away** from these words. `[Indicator] A \u2192 B`' },
    { 
      type: 'table', 
      headers: ['Indicator Words', 'Example', 'Diagram'],
      rows: [
        ['All / Every / Each', 'Every prime number > 2 is odd.', 'Prime > 2 \u2192 Odd'],
        ['If', 'If you\'re a dog, you\'re a mammal.', 'Dog \u2192 Mammal'],
        ['When / Whenever', 'Whenever rates rise, inflation slows.', 'Rates Rise \u2192 Inflation Slows'],
        ['Any / Whatever', 'Any valid contract is binding.', 'Valid Contract \u2192 Binding'],
        ['Provided that', 'Passes provided the president signs.', 'Signs \u2192 Passes'],
        ['As long as', 'Safe as long as you stay inside.', 'Stay Inside \u2192 Safe'],
        ['Those who [Verb]', 'Those who hesitate are lost.', 'Hesitate \u2192 Lost'],
        ['In order to', 'In order to make an omelet, break eggs.', 'Omelet \u2192 Break Eggs'],
        ['To [Verb]', 'To win, you must score points.', 'Win \u2192 Score Points']
      ]
    },

    { type: 'h4', text: 'Translation: Necessary Indicators (The Requirement)' },
    { type: 'paragraph', text: 'The arrow points **toward** these words. `A \u2192 [Indicator] B`' },
    { 
      type: 'table', 
      headers: ['Indicator Words', 'Example', 'Diagram'],
      rows: [
        ['Only / Only if', 'Car starts only if gas.', 'Starts \u2192 Gas'],
        ['Requires / Must / Essential', 'Evolution requires time.', 'Evolution \u2192 Time'],
        ['Depends on / Contingent', 'Survival depends on adaptation.', 'Survive \u2192 Adapt'],
        ['Precondition for', 'Peace is a precondition for prosperity.', 'Prosperity \u2192 Peace'],
        ['Impossible without', 'Victory is impossible without sacrifice.', 'Victory \u2192 Sacrifice'],
        ['In the absence of', 'Engine fails in the absence of oil.', 'Running \u2192 Oil'],
        ['Ensures / Guarantees', 'A valid ticket ensures entry.', 'Ticket \u2192 Entry'],
        ['Invariably', 'High demand invariably leads to high prices.', 'High Demand \u2192 High Prices'],
        ['Inevitably', 'Carelessness inevitably causes accidents.', 'Carelessness \u2192 Accident']
      ]
    },

    { type: 'hr' },

    { type: 'h3', text: 'Part 2: Valid vs. Invalid Inferences' },
    {
      type: 'table',
      headers: ['Inference Form', 'Given', 'Conclusion', 'Valid?'],
      rows: [
        ['**Affirm Sufficient (Modus Ponens)**', 'A \u2192 B, and A is true', 'Therefore B', '\u2705 Valid'],
        ['**Deny Necessary (Modus Tollens)**', 'A \u2192 B, and ~B is true', 'Therefore ~A', '\u2705 Valid'],
        ['**Affirm Necessary (Mistaken Reversal)**', 'A \u2192 B, and B is true', 'Therefore A', '\u274c INVALID'],
        ['**Deny Sufficient (Mistaken Negation)**', 'A \u2192 B, and ~A is true', 'Therefore ~B', '\u274c INVALID']
      ]
    },
    { type: 'callout', variant: 'tip', title: 'Memory Aid', text: 'Only the **Sufficient** condition triggers the rule; only the **Necessary** condition can deny it via contrapositive. Affirming the necessary or denying the sufficient proves nothing.' },

    { type: 'hr' },

    { type: 'h3', text: 'Part 3: Quantifiers' },
    { 
      type: 'table', 
      headers: ['Quantifier', 'Symbol', 'Meaning', 'Property'],
      rows: [
        ['**All**', '`A \u2192 B`', '100%', 'Contraposable'],
        ['**Most**', '`A \u2014m\u2192 B`', '> 50% (Majority)', 'NOT Reversible'],
        ['**Some**', '`A \u2190s\u2192 B`', 'At least one', 'Reversible'],
        ['**Few**', 'N/A', 'Minority (<50%)', 'Implies: Some are, Most are not']
      ]
    },
    { type: 'callout', title: 'Quantifier Hierarchy', text: '**All > Most > Some**\nIf `All A are B`, then `Most A are B` and `Some A are B`.\nInference: If `All A are B`, then `Some B are A` (Reversible).' },

    { type: 'h4', text: 'Quantifier Combination Rules' },
    {
      type: 'table',
      headers: ['Combination', 'Result', 'Example'],
      rows: [
        ['All + All chain', 'All (chain)', 'A \u2192 B, B \u2192 C \u21d2 A \u2192 C'],
        ['All + Most', 'Most', 'A \u2192 B, B \u2014m\u2192 C \u21d2 A \u2014m\u2192 C'],
        ['Most + All', 'Most', 'A \u2014m\u2192 B, B \u2192 C \u21d2 A \u2014m\u2192 C'],
        ['Most + Most (same set)', 'Some overlap', 'A \u2014m\u2192 B, A \u2014m\u2192 C \u21d2 Some B are C'],
        ['Most + Most (diff sets)', 'No valid deduction', 'Cannot chain across different groups']
      ]
    },

    { type: 'hr' },

    { type: 'h3', text: 'Part 4: Making Deductions' },
    { type: 'list', items: [
      '**Modus Ponens:** `A \u2192 B` and `A` is true. Therefore `B`.',
      '**Modus Tollens (Contrapositive):** `A \u2192 B` and `~B` is true. Therefore `~A`.',
      '**Chain Linking:** `A \u2192 B` and `B \u2192 C` yields `A \u2192 C`.',
      '**Most-to-All Bridge:** `A \u2014m\u2192 B` and `B \u2192 C` yields `A \u2014m\u2192 C`.',
      '**Overlap Rule:** `A \u2014m\u2192 B` and `A \u2014m\u2192 C` yields `B \u2190s\u2192 C` (Some B are C).'
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Part 5: Advanced Structures' },
    { type: 'h4', text: 'Compound Statements' },
    { type: 'table', headers: ['Structure', 'Diagram', 'Contrapositive'], rows: [
      ['AND in Sufficient', '(A and B) \u2192 C', '~C \u2192 (~A or ~B)'],
      ['AND in Necessary', 'A \u2192 (B and C)', '~B or ~C \u2192 ~A'],
      ['OR in Sufficient', '(A or B) \u2192 C', '~C \u2192 (~A and ~B)'],
      ['OR in Necessary', 'A \u2192 (B or C)', '~B and ~C \u2192 ~A']
    ]},
    { type: 'h4', text: 'Special Translation Rules' },
    { 
      type: 'table',
      headers: ['Type', 'Indicators', 'Rule', 'Example'],
      rows: [
        ['**Unless**', 'unless, except, without', 'Negate sufficient. Term following is necessary.', '"Go *unless* rain" \u2192 `~Rain \u2192 Go`'],
        ['**No / None**', 'no, none, never', 'Mutually exclusive. Sufficient \u2192 Negated Necessary.', '"No A is B" \u2192 `A \u2192 ~B`']
      ]
    },

    { type: 'hr' },

    { type: 'h3', text: 'Part 6: Negating Quantifiers' },
    { type: 'table', headers: ['Original', 'Meaning', 'Logical Negation'], rows: [
      ['All A are B', '100%', 'Some A are NOT B (0-99%)'],
      ['Most A are B', '51-100%', 'Not Most A are B (50% or fewer)'],
      ['Some A are B', '1-100%', 'None (No A are B)'],
      ['None (No A are B)', '0%', 'Some A are B (1-100%)']
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Part 7: Common Traps' },
    {
      type: 'breakdown',
      labels: { title: 'Trap', text: 'How to Spot & Avoid It' },
      items: [
        { title: 'Mistaken Reversal', text: '`A \u2192 B` does NOT mean `B \u2192 A`. Just because the sufficient condition guarantees the necessary one does not mean the reverse. **Spot it:** The answer concludes the sufficient from the necessary.', badge: 'Very Common', badgeColor: 'red' },
        { title: 'Mistaken Negation', text: '`A \u2192 B` does NOT mean `~A \u2192 ~B`. Negating the sufficient tells you nothing about the necessary. **Spot it:** The answer negates both sides without reversing.', badge: 'Very Common', badgeColor: 'red' },
        { title: 'Most Reversal', text: '`Most A are B` does NOT mean `Most B are A`. Majority relationships are one-directional. **Spot it:** The answer flips the quantifier direction.', badge: 'Common', badgeColor: 'red' },
        { title: 'Invalid Chain', text: '`All A are B` and `Most B are C` yields NO valid deduction. You cannot chain from the necessary side. **Spot it:** The answer chains through a necessary condition.', badge: 'Moderate', badgeColor: 'slate' }
      ]
    },

    { type: 'hr' },

    { type: 'h3', text: 'Part 8: Beyond Pure Conditionals' },
    {
      type: 'table',
      headers: ['Reasoning Type', 'Key Indicators', 'How It Differs from Conditional'],
      rows: [
        ['**Causal**', 'promotes, leads to, causes, as a result', 'Implies an active mechanism, not just logical guarantee'],
        ['**Obligation**', 'should, ought to, justified, unethical', 'Links facts to normative (moral/ethical) judgments'],
        ['**Probabilistic**', 'likely, probably, tends to', 'Indicates likelihood, not certainty \u2014 distinct from "Most"']
      ]
    },

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Test Day Checklist', text: 'Before selecting your answer on any Conditional Reasoning question:\n1. Have you identified ALL conditional statements and diagrammed them?\n2. Did you take the contrapositive of each conditional?\n3. Have you checked for chain links between conditionals?\n4. Is the argument committing a Mistaken Reversal or Mistaken Negation?\n5. For quantifier questions: did you verify the direction and overlap rules?\n6. Did you translate "unless" correctly (negate sufficient, keep necessary)?\n7. Have you distinguished conditional logic from causal, obligatory, or probabilistic reasoning?' }
  ]
};
