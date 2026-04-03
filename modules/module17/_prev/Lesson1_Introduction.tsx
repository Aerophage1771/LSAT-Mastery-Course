import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: '17-1',
  title: 'Introduction',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Introduction: Must Be True' },
    {
      type: 'paragraph',
      text: '**Question Goal**\n\n**Identify the one statement that is logically proven by the facts in the stimulus.** What conclusion is guaranteed to be true if everything in the passage is accepted as fact?',
    },
    { type: 'h3', text: 'Why This Matters' },
    {
      type: 'paragraph',
      text: 'Must Be True (MBT) is the strictest inference type on the LSAT. Unlike Most Strongly Supported questions, which ask for the *best-supported* answer, MBT demands absolute certainty. The correct answer MUST follow from the stimulus with no exceptions, no qualifications, and no room for doubt. If there is even one possible scenario where the stimulus is true but the answer choice is false, that choice is wrong.',
    },
    { type: 'h3', text: 'Recognizing the Question Stem' },
    {
      type: 'table',
      headers: ['Stem Language', 'Signal'],
      rows: [
        ['Which one of the following **must also be true**?', 'Classic MBT phrasing'],
        ['Which one of the following **can be properly inferred**?', 'LSAT "inferred" = proven, not merely suggested'],
        ['Which one of the following **follows logically** from the statements?', 'Asks for a valid deduction'],
        ['Which one of the following is **strictly implied**?', 'Rare variant; same task'],
      ],
    },
    { type: 'h3', text: 'Must Be True vs. Most Strongly Supported' },
    {
      type: 'breakdown',
      labels: { title: 'Feature', text: 'Comparison' },
      colWidth: 'equal',
      items: [
        {
          title: 'Standard of Proof',
          text: 'MBT requires **certainty** \u2014 the answer is logically guaranteed. MSS requires only **strong support** \u2014 the best-supported answer wins even if not 100% certain.',
          badge: 'Key Difference',
          badgeColor: 'indigo',
        },
        {
          title: 'Wrong-Answer Test',
          text: 'For MBT, if you can construct ANY scenario where the stimulus is true but the answer is false, eliminate it. For MSS, ask whether a different choice is *better* supported.',
          badge: 'Elimination',
          badgeColor: 'slate',
        },
        {
          title: 'Practical Effect',
          text: 'MBT correct answers tend to be narrower and more cautious because they must be airtight. MSS correct answers can be slightly broader.',
          badge: 'Scope',
          badgeColor: 'blue',
        },
      ],
    },
    { type: 'h3', text: 'The Certainty Standard' },
    {
      type: 'paragraph',
      text: 'Apply this mental test to every answer choice: *Can I construct ANY scenario in which the stimulus is true but this answer choice is false?* If yes, eliminate it immediately. The correct answer passes this test because no counter-scenario is possible.',
    },
    {
      type: 'paragraph',
      text: 'That proof standard stays fixed even when your solving path changes. On easier MBT questions, you will often form a strong prephrase before reading the answers. On denser questions, you may need to rely more heavily on answer-driven process of elimination. But that is only a change in workflow, not a lower standard of proof. Whether you prephrase or eliminate, the correct answer still has to be logically locked in.',
    },
    { type: 'h3', text: 'Common MBT Reasoning Patterns' },
    {
      type: 'list',
      items: [
        '**Conditional Chains:** The stimulus provides A\u2192B and B\u2192C, so A\u2192C must be true (and its contrapositive ~C\u2192~A).',
        '**Quantifier Overlaps:** "Most X are Y" and "Most X are Z" guarantees some overlap \u2014 at least some X are both Y and Z.',
        '**Numerical Deductions:** A group of 100 has "more than 60 teachers" and "more than 50 lawyers" \u2014 at least 11 must be both.',
        '**Set Relationships:** "All A are B" and "No B are C" yields "No A are C."',
        '**Definitional Applications:** The stimulus defines a term and describes a case that fits; the answer applies the definition.',
        '**Governed Sets & Domains:** The rule applies only to a narrower governed subgroup, so the correct answer stays inside that exact domain instead of broadening it.',
        '**Policy / Rule / Exception / Purpose / Effect:** The stimulus mixes an operative rule with a carve-out, a purpose, or a consequence, and the correct answer preserves those layers instead of collapsing them together.',
      ],
    },
    { type: 'h3', text: 'Concept Snapshot' },
    {
      type: 'paragraph',
      text: 'Imagine a stimulus saying that every member of the robotics club is enrolled in computer science, and that no student enrolled in computer science is exempt from the lab fee. Once those rules are accepted as absolute, one conclusion is locked in: no robotics club member is exempt from the lab fee. That is what Must Be True feels like. The answer is not merely plausible; it is forced by the premises.',
    },
    {
      type: 'callout',
      title: 'Key Principle',
      variant: 'summary',
      text: 'Treat the stimulus as absolute truth and find what NECESSARILY follows. The correct answer is locked in by the premises \u2014 no additional assumptions, no outside knowledge, no wiggle room.',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "diff-note",
          "text": "Website title uses 'MODULE 17: Must Be True'; mastery course uses 'Introduction: Must Be True'. Both are acceptable — the website version anchors the module number more explicitly.",
          "variant": "comment"
        },
        {
          "type": "h2",
          "text": "{{~MODULE 17: Must Be True~}}{{+Introduction: Must Be True+}}"
        },
        {
          "type": "paragraph",
          "text": "**Question Goal**\n\n**Identify the one statement that is logically proven by the facts in the stimulus.** What conclusion is guaranteed to be true if everything in the passage is accepted as fact?"
        },
        {
          "type": "h3",
          "text": "Why This Matters"
        },
        {
          "type": "paragraph",
          "text": "Must Be True (MBT) is the strictest inference type on the LSAT. Unlike Most Strongly Supported questions, which ask for the *best-supported* answer, MBT demands absolute certainty. The correct answer MUST follow from the stimulus with no exceptions, no qualifications, and no room for doubt. If there is even one possible scenario where the stimulus is true but the answer choice is false, that choice is wrong."
        },
        {
          "type": "h3",
          "text": "Recognizing the Question Stem"
        },
        {
          "type": "table",
          "headers": [
            "Stem Language",
            "Signal"
          ],
          "rows": [
            [
              "Which one of the following **must also be true**?",
              "Classic MBT phrasing"
            ],
            [
              "Which one of the following **can be properly inferred**?",
              "LSAT \"inferred\" = proven, not merely suggested"
            ],
            [
              "Which one of the following **follows logically** from the statements?",
              "Asks for a valid deduction"
            ],
            [
              "Which one of the following is **strictly implied**?",
              "Rare variant; same task"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Must Be True vs. Most Strongly Supported"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Feature",
            "text": "Comparison"
          },
          "colWidth": "equal",
          "items": [
            {
              "title": "Standard of Proof",
              "text": "MBT requires **certainty** — the answer is logically guaranteed. MSS requires only **strong support** — the best-supported answer wins even if not 100% certain.",
              "badge": "Key Difference",
              "badgeColor": "indigo"
            },
            {
              "title": "Wrong-Answer Test",
              "text": "For MBT, if you can construct ANY scenario where the stimulus is true but the answer is false, eliminate it. For MSS, ask whether a different choice is *better* supported.",
              "badge": "Elimination",
              "badgeColor": "slate"
            },
            {
              "title": "Practical Effect",
              "text": "MBT correct answers tend to be narrower and more cautious because they must be airtight. MSS correct answers can be slightly broader.",
              "badge": "Scope",
              "badgeColor": "blue"
            }
          ]
        },
        {
          "type": "h3",
          "text": "The Certainty Standard"
        },
        {
          "type": "paragraph",
          "text": "Apply this mental test to every answer choice: *Can I construct ANY scenario in which the stimulus is true but this answer choice is false?* If yes, eliminate it immediately. The correct answer passes this test because no counter-scenario is possible."
        },
        {
          "type": "diff-note",
          "text": "ADDITION: The mastery course adds a second paragraph clarifying that the proof standard stays fixed regardless of whether you prephrase first or use answer-driven POE. This is important framing for the method lesson that follows.",
          "variant": "comment"
        },
        {
          "type": "paragraph",
          "text": "{{+That proof standard stays fixed even when your solving path changes. On easier MBT questions, you will often form a strong prephrase before reading the answers. On denser questions, you may need to rely more heavily on answer-driven process of elimination. But that is only a change in workflow, not a lower standard of proof. Whether you prephrase or eliminate, the correct answer still has to be logically locked in.+}}"
        },
        {
          "type": "h3",
          "text": "Common MBT Reasoning Patterns"
        },
        {
          "type": "diff-note",
          "text": "ADDITION: The website version lists 5 patterns. The mastery course adds two more: 'Governed Sets & Domains' and 'Policy / Rule / Exception / Purpose / Effect.' Both are the subjects of full lessons (17-12 and 17-13) and should appear in the introduction.",
          "variant": "comment"
        },
        {
          "type": "list",
          "items": [
            "**Conditional Chains:** The stimulus provides A→B and B→C, so A→C must be true (and its contrapositive ~C→~A).",
            "**Quantifier Overlaps:** \"Most X are Y\" and \"Most X are Z\" guarantees some overlap — at least some X are both Y and Z.",
            "**Numerical Deductions:** A group of 100 has \"more than 60 teachers\" and \"more than 50 lawyers\" — at least 11 must be both.",
            "**Set Relationships:** \"All A are B\" and \"No B are C\" yields \"No A are C.\"",
            "**Definitional Applications:** The stimulus defines a term and describes a case that fits; the answer applies the definition.",
            "{{+**Governed Sets & Domains:** The rule applies only to a narrower governed subgroup, so the correct answer stays inside that exact domain instead of broadening it.+}}",
            "{{+**Policy / Rule / Exception / Purpose / Effect:** The stimulus mixes an operative rule with a carve-out, a purpose, or a consequence, and the correct answer preserves those layers instead of collapsing them together.+}}"
          ]
        },
        {
          "type": "h3",
          "text": "Concept Snapshot"
        },
        {
          "type": "paragraph",
          "text": "Imagine a stimulus saying that every member of the robotics club is enrolled in computer science, and that no student enrolled in computer science is exempt from the lab fee. Once those rules are accepted as absolute, one conclusion is locked in: no robotics club member is exempt from the lab fee. That is what Must Be True feels like. The answer is not merely plausible; it is forced by the premises."
        },
        {
          "type": "diff-note",
          "text": "ADDITION: The website version has no practice element in the introduction. Adding a mini-exercise after the Concept Snapshot converts the passive read into an active moment. The exercise below is lightweight — identify the inference from two given facts.",
          "variant": "comment"
        },
        {
          "type": "callout",
          "title": "{{+Quick Check+}}",
          "variant": "default",
          "text": "{{+**Try this:** Every employee who holds a security clearance is required to complete annual training. Maya holds a security clearance. What must be true? (Answer: Maya is required to complete annual training.) Notice that no additional information is needed — the conclusion is forced by the two premises alone.+}}"
        },
        {
          "type": "callout",
          "title": "Key Principle",
          "variant": "summary",
          "text": "Treat the stimulus as absolute truth and find what NECESSARILY follows. The correct answer is locked in by the premises — no additional assumptions, no outside knowledge, no wiggle room."
        }
      ],
    },
    glance: {
      label: 'At a Glance',
      content: [
        { type: 'h3', text: 'Must Be True -- At a Glance' },
        {
          type: 'paragraph',
          text: '**Goal:** Identify the one statement that is logically proven by the facts in the stimulus -- the conclusion that is guaranteed to be true if everything in the passage is accepted as fact. **Frequency:** ~5% of LR questions.',
        },
        {
          type: 'table',
          headers: ['Stem Pattern', 'Core Skill', 'Common Trap'],
          rows: [
            ['"Which one must also be true?"', 'Deductive certainty', 'Could-be-true answer (not proven)'],
            ['"Which one can be properly inferred?"', 'Logical chaining', 'Mistaken reversal of conditional'],
            ['"Which one follows logically?"', 'Formal deduction', 'Too-strong quantifier'],
            ['"Which one is strictly implied?"', 'Rule application', 'Domain shift (broadens governed set)'],
          ],
        },
        {
          type: 'blockquote',
          text: '"Every member of the robotics club is enrolled in computer science. No student enrolled in computer science is exempt from the lab fee." The MBT inference: no robotics club member is exempt from the lab fee.',
        },
        {
          type: 'paragraph',
          text: 'The answer is not merely plausible; it is forced by the premises. Any answer that could be false in even one scenario where the stimulus holds is wrong.',
        },
        { type: 'h4', text: "What's in This Module" },
        {
          type: 'list',
          items: [
            'Foundations: certainty standard, MBT vs. MSS distinction',
            'Step-by-Step: four-step method with prephrase-first and answer-driven POE paths',
            'Pattern Drills: conditional chain, quantifier overlap, numerical, set relationship, governed sets, disparity',
            'Advanced Drills: multi-step inference, policy/rule/exception/purpose/effect',
            'Reference Guide: compact cheat sheet for review',
          ],
        },
      ],
    },
  },
};
