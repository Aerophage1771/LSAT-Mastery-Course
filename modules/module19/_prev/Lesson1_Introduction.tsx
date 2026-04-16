import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: '19-1',
  title: 'Introduction',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'MODULE 20: Paradox/Explain' },
    { type: 'h3', text: 'Why This Matters' },
    {
      type: 'paragraph',
      text: 'Paradox questions are unique in Logical Reasoning because they do NOT ask you to evaluate an argument. There is no conclusion to strengthen, weaken, or find a flaw in. Instead, the stimulus presents two facts that seem contradictory, and your job is to EXPLAIN how both can be true simultaneously.',
    },
    { type: 'h3', text: 'Recognizing the Question Stem' },
    {
      type: 'table',
      headers: ['Stem Language', 'What It Signals'],
      rows: [
        ['"most helps to explain"', 'Find a fact that accounts for the surprising result'],
        [
          '"most helps to resolve the apparent discrepancy"',
          'Find a fact that makes both sides of the conflict compatible',
        ],
        ['"most helps to reconcile"', 'Same task — reconcile two seemingly contradictory facts'],
      ],
    },
    { type: 'h3', text: 'Paradox vs. Strengthen' },
    {
      type: 'paragraph',
      text: "Both Paradox and Strengthen answers introduce a new fact. The difference: a Strengthen answer supports a conclusion, while a Paradox answer resolves a puzzle. In Strengthen there is an argument with premises and a conclusion. In Paradox there is no argument — just two facts that don't seem to fit together.",
    },
    { type: 'h3', text: 'The Two-Fact Structure' },
    {
      type: 'paragraph',
      text: 'Every Paradox stimulus contains two facts that appear to contradict each other. Look for pivot words — "however," "yet," "surprisingly," "nevertheless" — that signal the shift from Fact 1 to Fact 2. Your first task is always to isolate these two facts clearly.',
    },
    { type: 'h3', text: 'Naive Assumption vs. Phenomenon-Hypothesis' },
    {
      type: 'paragraph',
      text: 'A strong Paradox reader does more than label two facts. Fact 1 usually tempts you into a **naive assumption** about what should happen. Fact 2 is the **phenomenon-hypothesis**: the surprising thing that actually happened and still needs explaining. Naming both pieces keeps the puzzle sharp and stops you from accepting answers that are merely adjacent to the problem.',
    },
    {
      type: 'table',
      headers: ['Element', 'Question to Ask', 'Why It Matters'],
      rows: [
        [
          '**Naive Assumption**',
          '"Given Fact 1, what would I normally expect?"',
          'This identifies the background expectation the stimulus wants you to notice and then abandon.',
        ],
        [
          '**Phenomenon-Hypothesis**',
          '"What unexpected result or coexistence still needs explaining?"',
          'This keeps your attention on the actual puzzle instead of on a merely related detail.',
        ],
      ],
    },
    { type: 'h3', text: 'The Resolution Principle' },
    {
      type: 'paragraph',
      text: 'The correct answer makes BOTH facts true simultaneously. It does not deny either fact. Instead, it introduces a hidden variable, a crucial distinction, or an overlooked mechanism that bridges the gap between the two facts.',
    },
    {
      type: 'paragraph',
      text: 'Just as important, the answer must provide a **clear resolution**, not a weak nudge in the right direction. A good answer does more than "help a little." It shows why the naive assumption failed or why the phenomenon occurred anyway. If the mystery still largely remains after adding the answer, the answer is not good enough.',
    },
    { type: 'h3', text: 'Common Paradox Types' },
    {
      type: 'list',
      items: [
        '**Numerical:** A percentage goes up but the absolute number goes down, or vice versa',
        '**Causal:** An expected cause produces the opposite effect',
        '**Behavioral:** People or groups act contrary to their apparent interests',
        '**Temporal:** Something changed over time in an unexpected direction',
        '**Definitional:** Two categories overlap or are measured differently',
      ],
    },
    { type: 'h3', text: 'Concept Snapshot' },
    {
      type: 'paragraph',
      text: 'Imagine a city installing brighter streetlights to reduce nighttime accidents, only to see accidents rise instead. A good Paradox answer does not deny either fact. It explains how both can be true at the same time, for example by showing that the brighter lights encouraged faster driving and offset the intended safety benefit.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Key Principle',
      text: 'The correct answer must explain why BOTH facts can be true at the same time. It never denies either fact, and it does not merely make the setup slightly less strange. It must supply a clear resolution.',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "MODULE 19: Paradox/Explain"
        },
        {
          "type": "h3",
          "text": "Why This Matters"
        },
        {
          "type": "paragraph",
          "text": "Paradox questions are unique in Logical Reasoning because they do NOT ask you to evaluate an argument. There is no conclusion to strengthen, weaken, or find a flaw in. Instead, the stimulus presents two facts that seem contradictory, and your job is to EXPLAIN how both can be true simultaneously."
        },
        {
          "type": "h3",
          "text": "Recognizing the Question Stem"
        },
        {
          "type": "table",
          "headers": [
            "Stem Language",
            "What It Signals"
          ],
          "rows": [
            [
              "\"most helps to explain\"",
              "Find a fact that accounts for the surprising result"
            ],
            [
              "\"most helps to resolve the apparent discrepancy\"",
              "Find a fact that makes both sides of the conflict compatible"
            ],
            [
              "\"most helps to reconcile\"",
              "Same task — reconcile two seemingly contradictory facts"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Paradox vs. Strengthen"
        },
        {
          "type": "paragraph",
          "text": "Both Paradox and Strengthen answers introduce a new fact. The difference: a Strengthen answer supports a conclusion, while a Paradox answer resolves a puzzle. In Strengthen there is an argument with premises and a conclusion. In Paradox there is no argument — just two facts that don't seem to fit together."
        },
        {
          "type": "h3",
          "text": "The Two-Fact Structure"
        },
        {
          "type": "paragraph",
          "text": "Every Paradox stimulus contains two facts that appear to contradict each other. Look for pivot words — \"however,\" \"yet,\" \"surprisingly,\" \"nevertheless\" — that signal the shift from Fact 1 to Fact 2. Your first task is always to isolate these two facts clearly."
        },
        {
          "type": "diff-note",
          "text": "{{+The mastery course adds a Naive Assumption vs. Phenomenon-Hypothesis framework here, deepening the two-fact structure into a diagnostic tool. The website version stops at identifying facts; the course asks students to name the expectation Fact 1 creates and the phenomenon Fact 2 presents.+}}",
          "variant": "comment"
        },
        {
          "type": "h3",
          "text": "The Resolution Principle"
        },
        {
          "type": "paragraph",
          "text": "The correct answer makes BOTH facts true simultaneously. It does not deny either fact. Instead, it introduces a hidden variable, a crucial distinction, or an overlooked mechanism that bridges the gap between the two facts."
        },
        {
          "type": "diff-note",
          "text": "{{+The mastery course adds a Clear Resolution Standard: the answer must do more than slightly reduce the strangeness -- it must provide a clear explanation. This is absent from the website version.+}}",
          "variant": "comment"
        },
        {
          "type": "h3",
          "text": "Common Paradox Types"
        },
        {
          "type": "list",
          "items": [
            "**Numerical:** A percentage goes up but the absolute number goes down, or vice versa",
            "**Causal:** An expected cause produces the opposite effect",
            "**Behavioral:** People or groups act contrary to their apparent interests",
            "**Temporal:** Something changed over time in an unexpected direction",
            "**Definitional:** Two categories overlap or are measured differently"
          ]
        },
        {
          "type": "h3",
          "text": "Concept Snapshot"
        },
        {
          "type": "paragraph",
          "text": "{{+**Try this:** Before reading the explanation below, think about what kind of new fact would explain the streetlight paradox.+}}"
        },
        {
          "type": "paragraph",
          "text": "Imagine a city installing brighter streetlights to reduce nighttime accidents, only to see accidents rise instead. A good Paradox answer does not deny either fact. It explains how both can be true at the same time, for example by showing that the brighter lights encouraged faster driving and offset the intended safety benefit."
        },
        {
          "type": "callout",
          "title": "Key Principle",
          "variant": "tip",
          "text": "The correct answer must explain why BOTH facts can be true at the same time. It never denies either fact {{~— it bridges them~and it does not merely make the setup slightly less strange. It must supply a clear resolution~}}."
        }
      ],
    },
    glance: {
      label: 'At a Glance',
      content: [
        { type: 'h2', text: 'Must Be False -- At a Glance' },
        {
          type: 'callout',
          variant: 'summary',
          title: 'Goal',
          text: 'Find the answer choice that **cannot be true** given the information in the stimulus. The correct answer directly contradicts what the premises establish.',
        },
        {
          type: 'paragraph',
          text: 'Must Be False questions appear on roughly **2%** of modern Logical Reasoning sections. They are low-frequency but high-reward: the method is mechanical once you recognize the question type.',
        },
        {
          type: 'table',
          headers: ['Element', 'What to Look For', 'Skill Required', 'Common Trap'],
          rows: [
            [
              '**Stem recognition**',
              '"must be false," "CANNOT be true," "impossible"',
              'Stem classification',
              'Confusing with "could be false" or weaken stems',
            ],
            [
              '**Constraint parsing**',
              'Conditionals, quantifiers, numerical limits, category boundaries',
              'Precise reading of logical structure',
              'Paraphrasing loosely instead of preserving exact scope',
            ],
            [
              '**Contradiction hunting**',
              'The answer that clashes head-on with at least one premise',
              'Matching answer language to premise language',
              'Picking an answer that is merely unlikely rather than impossible',
            ],
            [
              '**Verification**',
              'Confirm no reading of the stimulus makes the answer true',
              'Re-checking the logical chain',
              'Forgetting to test the answer against ALL premises together',
            ],
          ],
        },
        { type: 'h3', text: 'Quick Example' },
        {
          type: 'paragraph',
          text: 'If the stimulus says "All members of the committee voted in favor" and "Reyes is a member of the committee," then any answer stating that Reyes did NOT vote in favor must be false. The premises leave no room for it.',
        },
        { type: 'h3', text: 'Roadmap' },
        {
          type: 'list',
          items: [
            '**Lesson 2 (Step-by-Step):** The three-step method -- Parse Constraints, Find Contradiction, Verify Impossibility.',
            '**Lessons 3-8 (Drills):** Practice identifying contradictions across conditional, quantifier, exclusive-boundary, and numerical setups.',
            '**Lesson 9 (Common Traps):** Learn the difference between "impossible" and "merely unlikely."',
            '**Lesson 10 (Reference Guide):** Consolidated cheat sheet with decision rules, traps, and stems.',
            '**Module Assessment:** Timed drill combining all Must Be False sub-types.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Key Principle',
          text: 'The right answer directly contradicts what the premises establish. Find the impossibility, not just the improbability.',
        },
      ],
    },
  },
};
