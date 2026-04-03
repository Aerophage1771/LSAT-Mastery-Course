import { Lesson } from '../../types';

export const Lesson_Summary: Lesson = {
  id: '22-summary',
  title: 'Concise Guide: Conditional Logic',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Concise Guide: Conditional Logic' },
    {
      type: 'paragraph',
      text: 'This guide highlights the essential concepts, translation rules, and common traps in LSAT conditional reasoning.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Part 1: Foundations' },
    {
      type: 'table',
      headers: ['Concept', 'Structure', 'Meaning'],
      rows: [
        ['**Conditional**', '`A \u2192 B`', 'If A (Sufficient), then B (Necessary). Guaranteed.'],
        ['**Contrapositive**', '`~B \u2192 ~A`', 'Reverse & Negate. Logically equivalent to original.'],
        ['**Bi-Conditional**', '`A \u2194 B`', 'A is sufficient AND necessary for B.'],
      ],
    },

    { type: 'h4', text: 'Translation: Sufficient Indicators (The Trigger)' },
    { type: 'paragraph', text: 'The arrow points **away** from these words. `[Indicator] A \u2192 B`' },
    {
      type: 'table',
      headers: ['Indicator Words', 'Example', 'Diagram'],
      rows: [
        ['All / Every / Each', 'Every prime number > 2 is odd.', 'Prime > 2 \u2192 Odd'],
        ['If', "If you're a dog, you're a mammal.", 'Dog \u2192 Mammal'],
        ['When / Whenever', 'Whenever rates rise, inflation slows.', 'Rates Rise \u2192 Inflation Slows'],
        ['Any / Whatever', 'Any valid contract is binding.', 'Valid Contract \u2192 Binding'],
        ['Provided that', 'Passes provided the president signs.', 'Signs \u2192 Passes'],
        ['As long as', 'Safe as long as you stay inside.', 'Stay Inside \u2192 Safe'],
        ['Those who [Verb]', 'Those who hesitate are lost.', 'Hesitate \u2192 Lost'],
        ['In order to', 'In order to make an omelet, break eggs.', 'Omelet \u2192 Break Eggs'],
        ['To [Verb]', 'To win, you must score points.', 'Win \u2192 Score Points'],
      ],
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
        ['Inevitably', 'Carelessness inevitably causes accidents.', 'Carelessness \u2192 Accident'],
      ],
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
        ['**Deny Sufficient (Mistaken Negation)**', 'A \u2192 B, and ~A is true', 'Therefore ~B', '\u274c INVALID'],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Memory Aid',
      text: 'Only the **Sufficient** condition triggers the rule; only the **Necessary** condition can deny it via contrapositive. Affirming the necessary or denying the sufficient proves nothing.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Part 3: Quantifiers' },
    {
      type: 'table',
      headers: ['Quantifier', 'Symbol', 'Meaning', 'Property'],
      rows: [
        ['**All**', '`A \u2192 B`', '100%', 'Contraposable'],
        ['**Most**', '`A \u2014m\u2192 B`', '> 50% (Majority)', 'NOT Reversible'],
        ['**Some**', '`A \u2190s\u2192 B`', 'At least one', 'Reversible'],
        ['**Usually**', '`A \u2014m\u2192 B`', 'Safest reading: majority-style', 'Treat as Most unless context narrows it'],
        ['**Many**', '`A \u2190s\u2192 B`', 'Safest reading: overlap exists', 'Keep the guaranteed lower bound'],
        ['**Few**', 'N/A', 'Minority (<50%)', 'Implies: Some are, Most are not'],
        ['**Fewer than Half**', '`A \u2014m\u2192 ~B`', 'Minority fit the predicate', 'Equivalent to Most A are not B'],
      ],
    },
    {
      type: 'callout',
      title: 'Quantifier Hierarchy',
      text: '**All > Most > Some**\nIf `All A are B`, then `Most A are B` and `Some A are B`.\nInference: If `All A are B`, then `Some B are A` (Reversible).',
    },
    {
      type: 'callout',
      title: 'Boundary Reminder',
      text: '`Some` gives you only a lower bound. It can still include `all` unless the context closes that option. `Most` gives you a majority floor, not a universal ceiling.',
    },

    { type: 'h4', text: 'Quantifier Combination Rules' },
    {
      type: 'table',
      headers: ['Combination', 'Result', 'Example'],
      rows: [
        ['All + All chain', 'All (chain)', 'A \u2192 B, B \u2192 C \u21d2 A \u2192 C'],
        ['All + Most (wrong direction)', 'No valid deduction', 'A \u2192 B, B \u2014m\u2192 C does NOT force A \u2014m\u2192 C'],
        ['Most + All', 'Most', 'A \u2014m\u2192 B, B \u2192 C \u21d2 A \u2014m\u2192 C'],
        ['Most + Most (same set)', 'Some overlap', 'A \u2014m\u2192 B, A \u2014m\u2192 C \u21d2 Some B are C'],
        ['Most + Most (diff sets)', 'No valid deduction', 'Cannot chain across different groups'],
      ],
    },
    {
      type: 'callout',
      title: 'Invalid Order Family',
      text: 'The shared term has to be in the right place. `All A are B` does **not** mean A controls most of B. So if `Most B are C`, the A-group could still sit entirely inside the minority of B that is **not** C. Treat this as the classic **all-before-most** trap.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Part 4: Making Deductions' },
    {
      type: 'list',
      items: [
        '**Modus Ponens:** `A \u2192 B` and `A` is true. Therefore `B`.',
        '**Modus Tollens (Contrapositive):** `A \u2192 B` and `~B` is true. Therefore `~A`.',
        '**Chain Linking:** `A \u2192 B` and `B \u2192 C` yields `A \u2192 C`.',
        '**Most-to-All Bridge:** `A \u2014m\u2192 B` and `B \u2192 C` yields `A \u2014m\u2192 C`.',
        '**Overlap Rule:** `A \u2014m\u2192 B` and `A \u2014m\u2192 C` yields `B \u2190s\u2192 C` (Some B are C).',
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Part 5: Advanced Structures' },
    { type: 'h4', text: 'Compound Statements' },
    {
      type: 'table',
      headers: ['Structure', 'Diagram', 'Contrapositive'],
      rows: [
        ['AND in Sufficient', '(A and B) \u2192 C', '~C \u2192 (~A or ~B)'],
        ['AND in Necessary', 'A \u2192 (B and C)', '~B or ~C \u2192 ~A'],
        ['OR in Sufficient', '(A or B) \u2192 C', '~C \u2192 (~A and ~B)'],
        ['OR in Necessary', 'A \u2192 (B or C)', '~B and ~C \u2192 ~A'],
      ],
    },
    { type: 'h4', text: 'Special Translation Rules' },
    {
      type: 'table',
      headers: ['Type', 'Indicators', 'Rule', 'Example'],
      rows: [
        [
          '**Unless**',
          'unless, except, without',
          'Negate sufficient. Term following is necessary.',
          '"Go *unless* rain" \u2192 `~Rain \u2192 Go`',
        ],
        [
          '**No / None**',
          'no, none, never',
          'Mutually exclusive. Sufficient \u2192 Negated Necessary.',
          '"No A is B" \u2192 `A \u2192 ~B`',
        ],
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Part 6: Negating Quantifiers' },
    {
      type: 'table',
      headers: ['Original', 'Meaning', 'Logical Negation'],
      rows: [
        ['All A are B', '100%', 'Some A are NOT B (0-99%)'],
        ['Most A are B', '51-100%', 'Not Most A are B (50% or fewer)'],
        ['Some A are B', '1-100%', 'None (No A are B)'],
        ['Some A are NOT B', 'At least one exception exists', 'All A are B'],
        ['None (No A are B)', '0%', 'Some A are B (1-100%)'],
      ],
    },
    {
      type: 'callout',
      title: 'Negation Means Contradiction',
      text: 'Logical negation gives the statement that would make the original false. It is not the same thing as a dramatic opposite. `Not all` means `some ... not`, not `none`.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Part 7: Common Traps' },
    {
      type: 'breakdown',
      labels: { title: 'Trap', text: 'How to Spot & Avoid It' },
      items: [
        {
          title: 'Mistaken Reversal',
          text: '`A \u2192 B` does NOT mean `B \u2192 A`. Just because the sufficient condition guarantees the necessary one does not mean the reverse. **Spot it:** The answer concludes the sufficient from the necessary.',
          badge: 'Very Common',
          badgeColor: 'red',
        },
        {
          title: 'Mistaken Negation',
          text: '`A \u2192 B` does NOT mean `~A \u2192 ~B`. Negating the sufficient tells you nothing about the necessary. **Spot it:** The answer negates both sides without reversing.',
          badge: 'Very Common',
          badgeColor: 'red',
        },
        {
          title: 'Most Reversal',
          text: '`Most A are B` does NOT mean `Most B are A`. Majority relationships are one-directional. **Spot it:** The answer flips the quantifier direction.',
          badge: 'Common',
          badgeColor: 'red',
        },
        {
          title: 'Invalid Chain',
          text: '`All A are B` and `Most B are C` yields NO valid deduction. The A-group could still be trapped inside the minority of B that is not C. **Spot it:** The answer chains through a necessary condition or quietly treats a subgroup like it controls the whole majority.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Part 8: Beyond Pure Conditionals' },
    {
      type: 'table',
      headers: ['Reasoning Type', 'Key Indicators', 'How It Differs from Conditional'],
      rows: [
        [
          '**Causal**',
          'promotes, leads to, causes, as a result',
          'Implies an active mechanism, not just logical guarantee',
        ],
        [
          '**Obligation**',
          'should, ought to, justified, unethical',
          'Links facts to normative (moral/ethical) judgments',
        ],
        [
          '**Probabilistic**',
          'likely, probably, tends to',
          'Indicates likelihood, not certainty \u2014 distinct from "Most"',
        ],
      ],
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Test Day Checklist',
      text: 'Before selecting your answer on any Conditional Reasoning question:\n1. Have you identified ALL conditional statements and diagrammed them?\n2. Did you take the contrapositive of each conditional?\n3. Have you checked for chain links between conditionals?\n4. Is the argument committing a Mistaken Reversal or Mistaken Negation?\n5. For quantifier questions: did you verify the direction and overlap rules?\n6. Did you translate "unless" correctly (negate sufficient, keep necessary)?\n7. Have you distinguished conditional logic from causal, obligatory, or probabilistic reasoning?',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "Concise Guide: Conditional Logic"
        },
        {
          "type": "paragraph",
          "text": "This guide highlights the essential concepts, translation rules, and common traps in LSAT conditional reasoning."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Part 1: Foundations"
        },
        {
          "type": "table",
          "headers": [
            "Concept",
            "Structure",
            "Meaning"
          ],
          "rows": [
            [
              "**Conditional**",
              "`A → B`",
              "If A (Sufficient), then B (Necessary). Guaranteed."
            ],
            [
              "**Contrapositive**",
              "`~B → ~A`",
              "Reverse & Negate. Logically equivalent to original."
            ],
            [
              "**Bi-Conditional**",
              "`A ↔ B`",
              "A is sufficient AND necessary for B."
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Translation: Sufficient Indicators (The Trigger)"
        },
        {
          "type": "paragraph",
          "text": "The arrow points **away** from these words. `[Indicator] A → B`"
        },
        {
          "type": "table",
          "headers": [
            "Indicator Words",
            "Example",
            "Diagram"
          ],
          "rows": [
            [
              "All / Every / Each",
              "Every prime number > 2 is odd.",
              "Prime > 2 → Odd"
            ],
            [
              "If",
              "If you're a dog, you're a mammal.",
              "Dog → Mammal"
            ],
            [
              "When / Whenever",
              "Whenever rates rise, inflation slows.",
              "Rates Rise → Inflation Slows"
            ],
            [
              "Any / Whatever",
              "Any valid contract is binding.",
              "Valid Contract → Binding"
            ],
            [
              "Provided that",
              "Passes provided the president signs.",
              "Signs → Passes"
            ],
            [
              "As long as",
              "Safe as long as you stay inside.",
              "Stay Inside → Safe"
            ],
            [
              "Those who [Verb]",
              "Those who hesitate are lost.",
              "Hesitate → Lost"
            ],
            [
              "In order to",
              "In order to make an omelet, break eggs.",
              "Omelet → Break Eggs"
            ],
            [
              "To [Verb]",
              "To win, you must score points.",
              "Win → Score Points"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Translation: Necessary Indicators (The Requirement)"
        },
        {
          "type": "paragraph",
          "text": "The arrow points **toward** these words. `A → [Indicator] B`"
        },
        {
          "type": "table",
          "headers": [
            "Indicator Words",
            "Example",
            "Diagram"
          ],
          "rows": [
            [
              "Only / Only if",
              "Car starts only if gas.",
              "Starts → Gas"
            ],
            [
              "Requires / Must / Essential",
              "Evolution requires time.",
              "Evolution → Time"
            ],
            [
              "Depends on / Contingent",
              "Survival depends on adaptation.",
              "Survive → Adapt"
            ],
            [
              "Precondition for",
              "Peace is a precondition for prosperity.",
              "Prosperity → Peace"
            ],
            [
              "Impossible without",
              "Victory is impossible without sacrifice.",
              "Victory → Sacrifice"
            ],
            [
              "In the absence of",
              "Engine fails in the absence of oil.",
              "Running → Oil"
            ],
            [
              "{{~Ensures / Guarantees~}}",
              "A valid ticket ensures entry.",
              "Ticket → Entry"
            ],
            [
              "{{~Invariably~}}",
              "High demand invariably leads to high prices.",
              "High Demand → High Prices"
            ],
            [
              "{{~Inevitably~}}",
              "Carelessness inevitably causes accidents.",
              "Carelessness → Accident"
            ]
          ]
        },
        {
          "type": "diff-note",
          "text": "{{!The three indicators above (Ensures, Invariably, Inevitably) are categorized as necessary-condition triggers but their example diagrams show the indicator term on the sufficient side (Ticket -> Entry, High Demand -> High Prices). These behave more like sufficient-condition indicators. Consider adding a footnote or recategorizing.!}}",
          "variant": "comment"
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Part 2: Valid vs. Invalid Inferences"
        },
        {
          "type": "table",
          "headers": [
            "Inference Form",
            "Given",
            "Conclusion",
            "Valid?"
          ],
          "rows": [
            [
              "**Affirm Sufficient (Modus Ponens)**",
              "A → B, and A is true",
              "Therefore B",
              "✅ Valid"
            ],
            [
              "**Deny Necessary (Modus Tollens)**",
              "A → B, and ~B is true",
              "Therefore ~A",
              "✅ Valid"
            ],
            [
              "**Affirm Necessary (Mistaken Reversal)**",
              "A → B, and B is true",
              "Therefore A",
              "❌ INVALID"
            ],
            [
              "**Deny Sufficient (Mistaken Negation)**",
              "A → B, and ~A is true",
              "Therefore ~B",
              "❌ INVALID"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "Memory Aid",
          "variant": "tip",
          "text": "Only the **Sufficient** condition triggers the rule; only the **Necessary** condition can deny it via contrapositive. Affirming the necessary or denying the sufficient proves nothing."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Part 3: Quantifiers"
        },
        {
          "type": "table",
          "headers": [
            "Quantifier",
            "Symbol",
            "Meaning",
            "Property"
          ],
          "rows": [
            [
              "**All**",
              "`A → B`",
              "100%",
              "Contraposable"
            ],
            [
              "**Most**",
              "`A —m→ B`",
              "> 50% (Majority)",
              "NOT Reversible"
            ],
            [
              "**Some**",
              "`A ←s→ B`",
              "At least one",
              "Reversible"
            ],
            [
              "**Few**",
              "N/A",
              "Minority (<50%)",
              "Implies: Some are, Most are not"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "Quantifier Hierarchy",
          "text": "**All > Most > Some**\nIf `All A are B`, then `Most A are B` and `Some A are B`.\nInference: If `All A are B`, then `Some B are A` (Reversible)."
        },
        {
          "type": "h4",
          "text": "Quantifier Combination Rules"
        },
        {
          "type": "table",
          "headers": [
            "Combination",
            "Result",
            "Example"
          ],
          "rows": [
            [
              "All + All chain",
              "All (chain)",
              "A → B, B → C ⇒ A → C"
            ],
            [
              "All + Most",
              "Most",
              "A → B, B —m→ C ⇒ A —m→ C"
            ],
            [
              "Most + All",
              "Most",
              "A —m→ B, B → C ⇒ A —m→ C"
            ],
            [
              "Most + Most (same set)",
              "Some overlap",
              "A —m→ B, A —m→ C ⇒ Some B are C"
            ],
            [
              "Most + Most (diff sets)",
              "No valid deduction",
              "Cannot chain across different groups"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Part 4: Making Deductions"
        },
        {
          "type": "list",
          "items": [
            "**Modus Ponens:** `A → B` and `A` is true. Therefore `B`.",
            "**Modus Tollens (Contrapositive):** `A → B` and `~B` is true. Therefore `~A`.",
            "**Chain Linking:** `A → B` and `B → C` yields `A → C`.",
            "**Most-to-All Bridge:** `A —m→ B` and `B → C` yields `A —m→ C`.",
            "**Overlap Rule:** `A —m→ B` and `A —m→ C` yields `B ←s→ C` (Some B are C)."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Part 5: Advanced Structures"
        },
        {
          "type": "h4",
          "text": "Compound Statements"
        },
        {
          "type": "table",
          "headers": [
            "Structure",
            "Diagram",
            "Contrapositive"
          ],
          "rows": [
            [
              "AND in Sufficient",
              "(A and B) → C",
              "~C → (~A or ~B)"
            ],
            [
              "AND in Necessary",
              "A → (B and C)",
              "~B or ~C → ~A"
            ],
            [
              "OR in Sufficient",
              "(A or B) → C",
              "~C → (~A and ~B)"
            ],
            [
              "OR in Necessary",
              "A → (B or C)",
              "~B and ~C → ~A"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Special Translation Rules"
        },
        {
          "type": "table",
          "headers": [
            "Type",
            "Indicators",
            "Rule",
            "Example"
          ],
          "rows": [
            [
              "**Unless**",
              "unless, except, without",
              "Negate sufficient. Term following is necessary.",
              "\"Go *unless* rain\" → `~Rain → Go`"
            ],
            [
              "**No / None**",
              "no, none, never",
              "Mutually exclusive. Sufficient → Negated Necessary.",
              "\"No A is B\" → `A → ~B`"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Part 6: Negating Quantifiers"
        },
        {
          "type": "table",
          "headers": [
            "Original",
            "Meaning",
            "Logical Negation"
          ],
          "rows": [
            [
              "All A are B",
              "100%",
              "Some A are NOT B (0-99%)"
            ],
            [
              "Most A are B",
              "51-100%",
              "Not Most A are B (50% or fewer)"
            ],
            [
              "Some A are B",
              "1-100%",
              "None (No A are B)"
            ],
            [
              "None (No A are B)",
              "0%",
              "Some A are B (1-100%)"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Part 7: Common Traps"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Trap",
            "text": "How to Spot & Avoid It"
          },
          "items": [
            {
              "title": "Mistaken Reversal",
              "text": "`A → B` does NOT mean `B → A`. Just because the sufficient condition guarantees the necessary one does not mean the reverse. **Spot it:** The answer concludes the sufficient from the necessary.",
              "badge": "Very Common",
              "badgeColor": "red"
            },
            {
              "title": "Mistaken Negation",
              "text": "`A → B` does NOT mean `~A → ~B`. Negating the sufficient tells you nothing about the necessary. **Spot it:** The answer negates both sides without reversing.",
              "badge": "Very Common",
              "badgeColor": "red"
            },
            {
              "title": "Most Reversal",
              "text": "`Most A are B` does NOT mean `Most B are A`. Majority relationships are one-directional. **Spot it:** The answer flips the quantifier direction.",
              "badge": "Common",
              "badgeColor": "red"
            },
            {
              "title": "Invalid Chain",
              "text": "`All A are B` and `Most B are C` yields NO valid deduction. You cannot chain from the necessary side. **Spot it:** The answer chains through a necessary condition.",
              "badge": "Moderate",
              "badgeColor": "slate"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Part 8: Beyond Pure Conditionals"
        },
        {
          "type": "table",
          "headers": [
            "Reasoning Type",
            "Key Indicators",
            "How It Differs from Conditional"
          ],
          "rows": [
            [
              "**Causal**",
              "promotes, leads to, causes, as a result",
              "Implies an active mechanism, not just logical guarantee"
            ],
            [
              "**Obligation**",
              "should, ought to, justified, unethical",
              "Links facts to normative (moral/ethical) judgments"
            ],
            [
              "**Probabilistic**",
              "likely, probably, tends to",
              "Indicates likelihood, not certainty — distinct from \"Most\""
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "title": "Test Day Checklist",
          "variant": "summary",
          "text": "Before selecting your answer on any Conditional Reasoning question:\n1. Have you identified ALL conditional statements and diagrammed them?\n2. Did you take the contrapositive of each conditional?\n3. Have you checked for chain links between conditionals?\n4. Is the argument committing a Mistaken Reversal or Mistaken Negation?\n5. For quantifier questions: did you verify the direction and overlap rules?\n6. Did you translate \"unless\" correctly (negate sufficient, keep necessary)?\n7. Have you distinguished conditional logic from causal, obligatory, or probabilistic reasoning?"
        }
      ],
    },
  },
};
