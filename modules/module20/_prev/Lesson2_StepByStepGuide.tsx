import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: '20-2',
  title: 'Step-by-Step: Agree/Disagree (Point at Issue)',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Step-by-Step: Agree/Disagree (Point at Issue)' },
    {
      type: 'paragraph',
      text: 'This guide provides a reliable five-step method for solving Point at Issue questions. The method works identically for both disagreement and agreement variants; only the target pattern in the overlap step changes.',
    },
    { type: 'h3', text: "Step 1: Map Each Speaker's Position" },
    {
      type: 'paragraph',
      text: "Read the dialogue carefully and separate each speaker's argument into its core components. For each speaker, identify:",
    },
    {
      type: 'list',
      ordered: true,
      items: [
        "**Conclusion** -- What is the speaker's main claim?",
        '**Premises** -- What evidence or reasoning supports it?',
        "**Concessions** -- Does the speaker grant any of the other speaker's points?",
      ],
    },
    { type: 'paragraph', text: "Write a one-sentence summary of each speaker's position before moving on." },
    { type: 'h3', text: 'Step 2: Build the Commitment Ladder' },
    {
      type: 'paragraph',
      text: 'Before you run the overlap test, sort possible claims by strength. This prevents you from over-crediting weak implications as full disagreement.',
    },
    {
      type: 'table',
      headers: ['Ladder Level', 'Counts as Commitment?', 'How to Use It'],
      rows: [
        ['**Explicit statement or rejection**', 'Yes', 'The speaker directly says the claim is true or false.'],
        [
          '**Necessary implication**',
          'Yes',
          'The speaker does not say it verbatim, but denying it would collapse the reasoning.',
        ],
        ['**Reasonable guess / likely view**', 'No', 'The claim fits the speaker, but the argument does not require it.'],
        ['**Topic overlap / silence / suggestion**', 'No', 'The speaker discusses something nearby, but not this proposition itself.'],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Hard-Question Adjustment',
      text: 'Before you move to the overlap test on a hard question, run two extra checks: (1) **Referent check** -- are both speakers using the same term, standard, or condition in the same way? (2) **Indirect-stance check** -- if a speaker never states the proposition directly, does their argument actually require a YES or NO? Those two checks prevent most high-level Agree/Disagree errors.',
    },
    { type: 'h3', text: 'Step 3: Identify Committed Claims' },
    {
      type: 'paragraph',
      text: 'List every proposition each speaker is actually committed to -- either explicitly stated or logically entailed by their argument. A speaker is committed to a claim if denying it would undermine their own reasoning. Be strict: if a speaker neither states nor necessarily implies a position, mark it as **Unknown**.',
    },
    {
      type: 'paragraph',
      text: 'On conditional or criteria-based disagreements, rewrite the position in a clean yes/no proposition before touching the answer choices. For example: "Is artistic merit central?" "Can something count as autonomous without its own domain?" Translating the dispute into a plain proposition keeps the overlap test disciplined.',
    },
    { type: 'h3', text: 'Step 4: Apply the Overlap Test' },
    {
      type: 'paragraph',
      text: "For each answer choice, determine each speaker's stance (YES, NO, or Unknown) on that proposition.",
    },
    {
      type: 'table',
      headers: ['Question Type', 'Target Pattern', 'Eliminate If'],
      rows: [
        ['Disagreement', 'One says YES, the other says NO', 'Either speaker is Unknown'],
        ['Agreement', 'Both say YES (or both say NO)', 'Either speaker is Unknown'],
      ],
    },
    { type: 'h3', text: 'Step 5: Verify Both Commit' },
    {
      type: 'paragraph',
      text: 'Before confirming your answer, double-check that **both** speakers have a clear, textually supported position on the proposition. If you cannot point to specific language or a short necessary implication that commits a speaker, the choice is wrong -- even if it feels intuitively right.',
    },
    { type: 'hr' },
    { type: 'h3', text: 'Worked Method Snapshot' },
    {
      type: 'paragraph',
      text: 'Start by mapping Chen and Dara separately. Chen is committed to the claim that mandatory recycling programs are the most effective way to reduce landfill waste. Dara rejects that and argues that the apparent success is really driven by composting and that voluntary incentives could do just as well.',
    },
    {
      type: 'paragraph',
      text: 'Once both positions are written out, the point at issue becomes clear: whether mandatory recycling programs are in fact the most effective tool. Other statements in the dialogue may be discussed or implied, but unless both speakers are committed on opposite sides, they are not the answer.',
    },
    { type: 'hr' },
    { type: 'h3', text: 'Wrong Answer Patterns' },
    {
      type: 'list',
      items: [
        "**One Speaker Uncommitted** -- The choice captures one speaker's view, but the other speaker says nothing about it. This is the most common trap.",
        '**Weak Implication Posing as Commitment** -- The answer sounds like something a speaker might believe, but the argument never requires it. If you need extra assumptions to get there, eliminate.',
        '**Both Actually Agree** -- The proposition is something both speakers accept (often a shared premise). Tempting because it is true, but irrelevant to a disagreement question.',
        '**Referential Ambiguity** -- The speakers use similar words, but not to refer to the same standard, object, or condition. If the answer choice quietly shifts the referent, it is a trap.',
        '**Neither Addresses It** -- The proposition goes beyond the scope of the dialogue entirely. Neither speaker can be pinned to a position.',
      ],
    },
    { type: 'h3', text: 'Timing Tip' },
    {
      type: 'callout',
      variant: 'tip',
      text: "Point at Issue questions reward a disciplined process more than speed. Spend an extra 15-20 seconds mapping each speaker's commitments and running the commitment ladder before touching the answer choices. The upfront investment eliminates second-guessing and prevents you from over-crediting weak implications.",
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "Step-by-Step: Agree/Disagree"
        },
        {
          "type": "paragraph",
          "text": "This guide provides a reliable four-step method for solving Point at Issue questions. The method works identically for both disagreement and agreement variants; only the target pattern in Step 3 changes."
        },
        {
          "type": "h3",
          "text": "Step 1: Map Each Speaker's Position"
        },
        {
          "type": "paragraph",
          "text": "Read the dialogue carefully and separate each speaker's argument into its core components. For each speaker, identify:"
        },
        {
          "type": "list",
          "items": [
            "**Conclusion** -- What is the speaker's main claim?",
            "**Premises** -- What evidence or reasoning supports it?",
            "**Concessions** -- Does the speaker grant any of the other speaker's points?"
          ],
          "ordered": true
        },
        {
          "type": "paragraph",
          "text": "Write a one-sentence summary of each speaker's position before moving on."
        },
        {
          "type": "h3",
          "text": "Step 2: Identify Committed Claims"
        },
        {
          "type": "paragraph",
          "text": "List every proposition each speaker is committed to -- either explicitly stated or logically entailed by their argument. A speaker is committed to a claim if denying it would undermine their own reasoning. Be strict: if a speaker neither states nor implies a position, mark it as **Unknown**."
        },
        {
          "type": "h3",
          "text": "Step 3: Apply the Overlap Test"
        },
        {
          "type": "paragraph",
          "text": "For each answer choice, determine each speaker's stance (YES, NO, or Unknown) on that proposition."
        },
        {
          "type": "table",
          "headers": [
            "Question Type",
            "Target Pattern",
            "Eliminate If"
          ],
          "rows": [
            [
              "Disagreement",
              "One says YES, the other says NO",
              "Either speaker is Unknown"
            ],
            [
              "Agreement",
              "Both say YES (or both say NO)",
              "Either speaker is Unknown"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 4: Verify Both Commit"
        },
        {
          "type": "paragraph",
          "text": "Before confirming your answer, double-check that **both** speakers have a clear, textually supported position on the proposition. If you cannot point to specific language in the stimulus that commits a speaker, the choice is wrong -- even if it feels intuitively right."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Worked Method Snapshot"
        },
        {
          "type": "paragraph",
          "text": "{{+**Try this:** Attempt to map Chen and Dara's positions and identify the point at issue before reading the analysis below.+}}"
        },
        {
          "type": "paragraph",
          "text": "Start by mapping Chen and Dara separately. Chen is committed to the claim that mandatory recycling programs are the most effective way to reduce landfill waste. Dara rejects that and argues that the apparent success is really driven by composting and that voluntary incentives could do just as well."
        },
        {
          "type": "paragraph",
          "text": "Once both positions are written out, the point at issue becomes clear: whether mandatory recycling programs are in fact the most effective tool. Other statements in the dialogue may be discussed or implied, but unless both speakers are committed on opposite sides, they are not the answer."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Wrong Answer Patterns"
        },
        {
          "type": "diff-note",
          "text": "The website version lists only 3 wrong-answer patterns. The Reference Guide (20-10) identifies 7. Adding 2 more high-frequency traps here gives students earlier exposure.",
          "variant": "comment"
        },
        {
          "type": "list",
          "items": [
            "**One Speaker Uncommitted** -- The choice captures one speaker's view, but the other speaker says nothing about it. This is the most common trap.",
            "**Both Actually Agree** -- The proposition is something both speakers accept (often a shared premise). Tempting because it is true, but irrelevant to a disagreement question.",
            "**Neither Addresses It** -- The proposition goes beyond the scope of the dialogue entirely. Neither speaker can be pinned to a position.",
            "{{+**Scope Mismatch** -- The answer choice uses broader or narrower language than what the speakers actually discussed. One speaker may discuss a specific case while the answer generalizes to all cases.+}}",
            "{{+**Mischaracterization** -- The answer distorts a speaker's position by introducing extreme language (\"always,\" \"never,\" \"only\") or by attributing a view the speaker never expressed.+}}"
          ]
        },
        {
          "type": "diff-note",
          "text": "The method lesson has no question-card. Adding one after the worked snapshot would let students immediately test the four-step method.",
          "variant": "comment"
        },
        {
          "type": "h3",
          "text": "Timing Tip"
        },
        {
          "type": "callout",
          "variant": "tip",
          "text": "Point at Issue questions reward a disciplined process more than speed. Spend an extra 15-20 seconds mapping each speaker's commitments before touching the answer choices. The upfront investment eliminates second-guessing and prevents you from falling for the one-speaker trap."
        }
      ],
    },
    playbook: {
      label: 'Playbook',
      content: [
        { type: 'h2', text: 'Paradox/Explain -- Playbook' },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Timing Target',
          text: '**Target:** 1:15 per Paradox question. Paradox questions are typically faster than average because the setup is facts, not an argument. Spend the time up front identifying the two facts precisely.',
        },
        {
          type: 'process',
          title: 'The 4-Step Method',
          steps: [
            '**Identify the Paradox** -- Read the stimulus and isolate the two facts that appear to conflict. Look for pivot words: "however," "yet," "surprisingly," "nevertheless." State both facts cleanly.',
            '**Hold Both Facts True** -- Accept both facts as given. Do NOT try to deny either one. Your job is reconciliation, not evaluation.',
            '**Prephrase Resolution** -- Before looking at choices, predict the KIND of information that would let both facts coexist: a hidden cause, a definitional difference, a rate-vs.-count trick, a behavioral change.',
            '**Match** -- Find the answer that clearly explains how both facts can be true at the same time. Apply the resolution test: "Does this new fact explain the phenomenon AND show why the naive assumption failed?"',
          ],
        },
        {
          type: 'table',
          headers: ['Paradox Pattern', 'What the Stimulus Sets Up', 'What to Look For in the Answer'],
          rows: [
            [
              '**Numbers vs. percentages**',
              'A rate goes one direction but the count goes the other',
              'An answer showing different group sizes or baselines that make both statistics true',
            ],
            [
              '**Selection bias**',
              'A group shows a trait it should not have (or vice versa)',
              'An answer showing people with the trait disproportionately self-select into the group',
            ],
            [
              '**Hidden distinction**',
              'Two facts seem to measure the same thing but conflict',
              'An answer exposing a subtle difference in what the two facts actually measure',
            ],
            [
              '**Counterintuitive cause**',
              'An intervention produces the opposite of its intended effect',
              'An answer identifying a hidden behavioral change or secondary mechanism that overpowers the primary effect',
            ],
            [
              '**Temporal shift**',
              'A trend reverses between two time periods',
              'An answer identifying what changed between the periods',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          title: 'Method Chain',
          text: '**Identify the Paradox** --> **Hold Both Facts True** --> **Prephrase Resolution** --> **Match**. The right answer makes BOTH facts simultaneously true and provides a clear resolution.',
        },
      ],
    },
  },
};
