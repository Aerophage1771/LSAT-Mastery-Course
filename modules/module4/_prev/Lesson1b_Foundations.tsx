import { Lesson } from '../../types';

export const Lesson1b_Foundations: Lesson = {
  id: '4-1b',
  title: 'Foundations',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'The Core Skill: Abstraction' },
    {
      type: 'paragraph',
      text: "The single most important skill for Parallel Reasoning is **abstraction** — the ability to strip away an argument's content and see only its logical skeleton. You are essentially translating natural language into a formula.",
    },

    { type: 'h3', text: 'The Abstraction Process' },
    { type: 'paragraph', text: 'Consider the following argument:' },
    {
      type: 'blockquote',
      text: '"If a restaurant receives three consecutive health code violations, it will be shut down. Caf\u00e9 Deluxe has received three consecutive health code violations. Therefore, Caf\u00e9 Deluxe will be shut down."',
    },
    {
      type: 'paragraph',
      text: 'To abstract this argument, replace the specific nouns and facts with variables while preserving the logical connectors:',
    },
    {
      type: 'table',
      headers: ['Concrete Element', 'Abstract Variable'],
      rows: [
        ['"a restaurant"', 'X (any member of a category)'],
        ['"receives three consecutive health code violations"', 'A (the triggering condition)'],
        ['"will be shut down"', 'B (the result)'],
        ['"Caf\u00e9 Deluxe"', 'X (a specific member)'],
      ],
    },
    { type: 'paragraph', text: 'The abstract skeleton becomes: **If X does A, then B. X has done A. Therefore, B.**' },
    {
      type: 'paragraph',
      text: "This is a classic *Modus Ponens* (affirming the antecedent). Any answer choice with this same skeleton — regardless of whether it's about restaurants, animals, or politics — is the correct match.",
    },

    { type: 'h3', text: 'What to Preserve, What to Discard' },
    {
      type: 'paragraph',
      text: 'When abstracting, some features of the argument *must* be preserved because they define the logical structure, while others can be safely discarded because they are mere content.',
    },
    {
      type: 'table',
      headers: ['Must Preserve (Structural)', 'Can Discard (Content)'],
      rows: [
        [
          'Type of conclusion (recommendation, prediction, conditional, factual)',
          'Specific subject matter (law, science, cooking)',
        ],
        ['Logical connectors (if/then, either/or, all/some/none)', 'Proper nouns (Caf\u00e9 Deluxe, Sarah, Mars)'],
        [
          'Certainty/force of the conclusion (must, probably, might)',
          'Specific details (three violations, 30% increase)',
        ],
        ['Number and type of premises', 'Emotional tone or persuasive language'],
        ['Validity or invalidity of the reasoning', 'Domain-specific vocabulary'],
        ['Direction of support (which claims support which)', 'Whether the argument is interesting or dull'],
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Common Logical Structures \u2014 Preview' },
    {
      type: 'paragraph',
      text: 'Most Parallel Reasoning questions test a small set of recurring logical patterns. You will study each in depth in later lessons, but here is a quick preview so you know what to expect:',
    },

    {
      type: 'table',
      headers: ['Pattern', 'Abstract Form', 'Example Signal Words'],
      rows: [
        ['**Conditional Chain**', 'If A \u2192 B, and B \u2192 C, then A \u2192 C', 'if\u2026then, any, all, every'],
        ['**Modus Ponens**', 'If A \u2192 B. A is true. Therefore B.', 'if\u2026then, since, therefore'],
        ['**Modus Tollens (Contrapositive)**', 'If A \u2192 B. Not B. Therefore Not A.', 'if\u2026then, but\u2026not, so\u2026cannot'],
        [
          '**Eliminative (Disjunctive Syllogism)**',
          'Either A or B. Not A. Therefore B.',
          'either\u2026or, the only options, must be',
        ],
        ['**Principle Application**', 'General Rule + Specific Case \u2192 Judgment', 'should, ought, unjustified, unwise'],
        [
          '**Causal Explanation**',
          'Effect observed. Cause proposed or challenged.',
          'causes, leads to, is explained by',
        ],
        ['**Quantifier Overlap**', 'All A are B. Some B are C. Therefore some A are C.', 'all, most, some, none, few'],
        [
          '**Analogy**',
          'X is like Y in relevant ways. Y has property P. Therefore X has P.',
          'just as, similarly, like',
        ],
        [
          '**Ad Hominem / Tu Quoque**',
          'Person X did Y, so X cannot criticize Y.',
          'hypocritical, no right to, themselves guilty',
        ],
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'The Big Three',
      text: 'Conditional chains, eliminative arguments, and principle applications account for the majority of Parallel Reasoning questions. Master these three patterns first, and you will be prepared for most questions you encounter.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'The 4-Step Method \u2014 Preview' },
    {
      type: 'paragraph',
      text: 'In the next lesson, you will learn a complete, repeatable 4-step method for solving Parallel Reasoning questions. Here is a brief overview:',
    },
    {
      type: 'process',
      title: 'The 4-Step Method',
      steps: [
        '**Identify the Structure** \u2014 Break the stimulus into conclusion + premises. Label each component.',
        '**Abstract the Pattern** \u2014 Replace content with variables. Write out the logical skeleton (e.g., "If A \u2192 B, A, therefore B").',
        '**Match by Elimination** \u2014 Scan answer choices, starting with the conclusion type. Eliminate mismatches quickly.',
        '**Verify the Final Match** \u2014 Confirm the remaining choice replicates every structural element: conclusion type, premise structure, validity, certainty, and logical connectors.',
      ],
    },
    {
      type: 'paragraph',
      text: 'The key insight is that you should work from the **conclusion outward**. Matching the conclusion type first lets you eliminate 2\u20133 answer choices in seconds, saving valuable time on these lengthy questions.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Your First Parallel Reasoning Question' },
    {
      type: 'paragraph',
      text: "Let's put everything together with a concrete practice question. Read the stimulus, abstract its logical skeleton, and find the answer choice with the same structure.",
    },

    {
      type: 'paragraph',
      text: 'Take a simple stimulus like this: every student who completes an advanced seminar receives a certificate, Maria completed the seminar, so Maria received a certificate. Once you abstract it, the pattern is clean: All A are B. X is A. Therefore, X is B. That is what you are matching in Parallel Reasoning, not the surface topic.',
    },

    { type: 'h3', text: 'Walkthrough' },
    {
      type: 'process',
      title: 'Solving Step by Step',
      steps: [
        '**Abstract the stimulus:** All A are B. X is A. Therefore, X is B. This is a classic Modus Ponens with a universal premise.',
        "**Check conclusion type:** The conclusion is a definite factual statement about a specific individual. Eliminate any choice whose conclusion doesn't match this pattern.",
        '**Scan and eliminate:** Remove answers that change the quantifier, the polarity, the conclusion type, or the logical force of the premise.',
        '**Confirm the match:** The right answer should rebuild the same universal rule applied to a specific instance, producing the same definite conclusion.',
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Why This Snapshot Works',
      text: 'Parallel Reasoning becomes much faster once you stop asking whether the answer sounds similar and start asking whether the structure is the same down to the quantifier and conclusion form.',
    },
  ],
  alternates: {
    glance: {
      label: 'At a Glance',
      content: [
        { type: 'h3', text: 'Parallel Reasoning Foundations — At a Glance' },
        {
          type: 'table',
          headers: ['Concept', 'Key Point', 'Example'],
          rows: [
            [
              '**Abstraction**',
              'Replace content with variables; preserve logical connectors and quantifiers',
              '"If X does A, then B" -- keep the if-then, drop the nouns',
            ],
            [
              '**Preserve vs. Discard**',
              'Preserve conclusion type, logical connectors, certainty, premise count, validity. Discard subject matter, proper nouns, tone.',
              '"All A are B" must match "All"; "Most" is a mismatch',
            ],
            [
              '**The Big Three Patterns**',
              'Conditional chains, eliminative arguments, and principle applications cover the majority of Parallel Reasoning questions',
              'If A then B, B then C, therefore if A then C',
            ],
          ],
        },
        {
          type: 'blockquote',
          text: '"If a restaurant receives three consecutive health code violations, it will be shut down. Cafe Deluxe has received three consecutive violations. Therefore, Cafe Deluxe will be shut down."',
        },
        {
          type: 'paragraph',
          text: 'Abstract skeleton: If X does A, then B. X has done A. Therefore B. This is a classic Modus Ponens. Any answer choice with that same skeleton is the correct match, regardless of topic.',
        },
        {
          type: 'callout',
          variant: 'summary',
          text: 'The single most important skill is **abstraction** -- strip away content to reveal the logical skeleton. Work from the **conclusion outward**: matching conclusion type first lets you eliminate 2--3 answers in seconds.',
        },
      ],
    },
  },
};
