import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: '16-1',
  title: 'Introduction',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Introduction: Most Strongly Supported' },
    {
      type: 'paragraph',
      text: '**Question Goal**\n\nSynthesize the facts in the stimulus to determine which answer choice receives the strongest logical support. The evidence flows FROM the stimulus TO the correct answer.',
    },
    { type: 'h3', text: 'Why This Matters' },
    {
      type: 'paragraph',
      text: 'Most Strongly Supported (MSS) is an inference question: the stimulus hands you evidence and asks *What does this prove?* Unlike Strengthen questions, you never add information \u2014 you read what the premises already establish.',
    },
    { type: 'h3', text: 'Recognizing the Question Stem' },
    {
      type: 'table',
      headers: ['Stem Language', 'Meaning'],
      rows: [
        ['Which one is **most strongly supported**?', 'Find the best-supported inference.'],
        ['Which one can be **most reasonably inferred**?', 'Same task, different wording.'],
        ['The statements **best support** which one?', 'Stimulus supports the answer.'],
      ],
    },
    { type: 'h3', text: 'MSS vs. Must Be True' },
    {
      type: 'list',
      items: [
        '**Must Be True** requires **certainty** \u2014 the answer is logically guaranteed.',
        '**Most Strongly Supported** requires **strong support** \u2014 the most probable answer wins, even if not 100% certain.',
        '**Hard MSS** is often relative. The correct answer may be the **best-supported / least-bad** choice rather than a near-proof.',
      ],
    },
    { type: 'h3', text: 'MSS vs. Strengthen (Direction of Support)' },
    {
      type: 'list',
      items: [
        '**MSS:** Stimulus evidence supports the answer choice. Evidence \u2192 Answer.',
        "**Strengthen:** The answer choice supports the stimulus's conclusion. Answer \u2192 Conclusion.",
        'Confusing the direction is the most common error. Always ask: *Who is helping whom?*',
      ],
    },
    { type: 'h3', text: 'Common Inference Patterns' },
    {
      type: 'list',
      items: [
        '**Causal:** Stimulus describes a cause; the answer predicts the effect.',
        '**Definitional:** Stimulus defines a term; the answer applies that definition.',
        '**Comparative:** Stimulus compares two things; the answer draws a relative conclusion.',
        '**Conditional:** Stimulus states if-then rules; the answer chains or contraposes them.',
      ],
    },
    { type: 'h3', text: 'Concept Snapshot' },
    {
      type: 'paragraph',
      text: 'Suppose you are told that every item in the clearance section has been marked down at least 40 percent, and that the blue sweater Rina is considering is in that section. The strongest supported inference is immediate: the sweater has been marked down at least 40 percent. Nothing in the stimulus tells you it is the cheapest item, that Rina will buy it, or that the whole store is discounted. MSS rewards the disciplined move of carrying the stated rule only as far as the text allows.',
    },
    {
      type: 'callout',
      title: 'Key Principle',
      variant: 'summary',
      text: 'The correct answer must sit on the strongest-supported end of the spectrum. Many wrong answers are merely **consistent** with the stimulus, and some are actively **anti-supported**. MSS rewards the answer with the best textual backing, not the answer that sounds smartest in the abstract.',
    },
    { type: 'h3', text: 'The MSS Support Spectrum' },
    {
      type: 'table',
      headers: ['Bucket', 'Meaning', 'MSS Status'],
      rows: [
        ['**Strongly supported**', 'Directly backed by the stimulus or by a tight synthesis of the facts.', 'Live contender'],
        ['**Merely consistent**', 'Could be true, but the stimulus is not really pushing toward it.', 'Usually wrong'],
        ['**Anti-supported**', 'Conflicts with a stated fact, reverses the logic, or adds a forbidden leap.', 'Eliminate'],
      ],
    },
    {
      type: 'paragraph',
      text: 'This spectrum matters because hard MSS questions often give you five plausible-looking statements. Your job is not to find the answer that sounds broadly reasonable. Your job is to identify which one has the **best support relative to the other four**.',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "diff-note",
          "text": "Website title uses 'MODULE 16: Most Strongly Supported'. Mastery course title uses 'Introduction: Most Strongly Supported'. The module-number heading is clearer for orientation; keep it.",
          "variant": "comment"
        },
        {
          "type": "h2",
          "text": "MODULE 16: Most Strongly Supported"
        },
        {
          "type": "paragraph",
          "text": "**Question Goal**\n\nSynthesize the facts in the stimulus to determine which answer choice receives the strongest logical support. The evidence flows FROM the stimulus TO the correct answer."
        },
        {
          "type": "h3",
          "text": "Why This Matters"
        },
        {
          "type": "paragraph",
          "text": "Most Strongly Supported (MSS) is an inference question: the stimulus hands you evidence and asks *What does this prove?* Unlike Strengthen questions, you never add information — you read what the premises already establish."
        },
        {
          "type": "h3",
          "text": "Recognizing the Question Stem"
        },
        {
          "type": "table",
          "headers": [
            "Stem Language",
            "Meaning"
          ],
          "rows": [
            [
              "Which one is **most strongly supported**?",
              "Find the best-supported inference."
            ],
            [
              "Which one can be **most reasonably inferred**?",
              "Same task, different wording."
            ],
            [
              "The statements **best support** which one?",
              "Stimulus supports the answer."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "MSS vs. Must Be True"
        },
        {
          "type": "list",
          "items": [
            "**Must Be True** requires **certainty** — the answer is logically guaranteed.",
            "**Most Strongly Supported** requires **strong support** — the most probable answer wins, even if not 100% certain.",
            "{{+**Hard MSS is often relative.** The correct answer may be the **best-supported / least-bad** choice rather than a near-proof. On the hardest questions, four answers clearly overreach or lack support — the remaining modest answer wins even if it sounds cautious.+}}"
          ]
        },
        {
          "type": "h3",
          "text": "MSS vs. Strengthen (Direction of Support)"
        },
        {
          "type": "list",
          "items": [
            "**MSS:** Stimulus evidence supports the answer choice. Evidence → Answer.",
            "**Strengthen:** The answer choice supports the stimulus's conclusion. Answer → Conclusion.",
            "Confusing the direction is the most common error. Always ask: *Who is helping whom?*"
          ]
        },
        {
          "type": "h3",
          "text": "Common Inference Patterns"
        },
        {
          "type": "list",
          "items": [
            "**Causal:** Stimulus describes a cause; the answer predicts the effect.",
            "**Definitional:** Stimulus defines a term; the answer applies that definition.",
            "**Comparative:** Stimulus compares two things; the answer draws a relative conclusion.",
            "**Conditional:** Stimulus states if-then rules; the answer chains or contraposes them."
          ]
        },
        {
          "type": "h3",
          "text": "Concept Snapshot"
        },
        {
          "type": "paragraph",
          "text": "Suppose you are told that every item in the clearance section has been marked down at least 40 percent, and that the blue sweater Rina is considering is in that section. The strongest supported inference is immediate: the sweater has been marked down at least 40 percent. Nothing in the stimulus tells you it is the cheapest item, that Rina will buy it, or that the whole store is discounted. MSS rewards the disciplined move of carrying the stated rule only as far as the text allows."
        },
        {
          "type": "diff-note",
          "text": "ADD: The MSS Support Spectrum table below is present in the mastery course but missing from the website version. It makes the 'merely consistent' vs. 'strongly supported' distinction concrete and actionable — critical for hard questions. Add before the Key Principle callout.",
          "variant": "add"
        },
        {
          "type": "h3",
          "text": "{{+The MSS Support Spectrum+}}"
        },
        {
          "type": "table",
          "headers": [
            "{{+Bucket+}}",
            "{{+Meaning+}}",
            "{{+MSS Status+}}"
          ],
          "rows": [
            [
              "{{+**Strongly supported**+}}",
              "{{+Directly backed by the stimulus or by a tight synthesis of the facts.+}}",
              "{{+Live contender+}}"
            ],
            [
              "{{+**Merely consistent**+}}",
              "{{+Could be true, but the stimulus is not really pushing toward it.+}}",
              "{{+Usually wrong+}}"
            ],
            [
              "{{+**Anti-supported**+}}",
              "{{+Conflicts with a stated fact, reverses the logic, or adds a forbidden leap.+}}",
              "{{+Eliminate+}}"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "{{+This spectrum matters because hard MSS questions often give you five plausible-looking statements. Your job is not to find the answer that sounds broadly reasonable. Your job is to identify which one has the **best support relative to the other four**.+}}"
        },
        {
          "type": "callout",
          "title": "Key Principle",
          "variant": "summary",
          "text": "{{~The correct answer must sit on the strongest-supported end of the spectrum. Many wrong answers are merely **consistent** with the stimulus, and some are actively **anti-supported**. MSS rewards the answer with the best textual backing, not the answer that sounds smartest in the abstract.~}}"
        }
      ],
    },
    glance: {
      label: 'At a Glance',
      content: [
        { type: 'h3', text: 'Most Strongly Supported -- At a Glance' },
        {
          type: 'paragraph',
          text: '**Goal:** Synthesize the facts in the stimulus to determine which answer choice receives the strongest logical support. The evidence flows FROM the stimulus TO the correct answer. **Frequency:** ~3% of LR questions.',
        },
        {
          type: 'table',
          headers: ['Stem Pattern', 'Core Skill', 'Common Trap'],
          rows: [
            ['"Which one is most strongly supported?"', 'Evidence synthesis', 'Overreach beyond the premises'],
            ['"Which one can be most reasonably inferred?"', 'Inference ranking', 'Reversed direction of support'],
            ['"The statements best support which one?"', 'Relative ranking', 'Merely consistent answer'],
            ['"Most supported by the information above?"', 'Fact combination', 'Too-extreme language'],
          ],
        },
        {
          type: 'blockquote',
          text: '"Every item in the clearance section has been marked down at least 40 percent. The blue sweater Rina is considering is in the clearance section." The strongest supported inference: the sweater has been marked down at least 40 percent.',
        },
        {
          type: 'paragraph',
          text: 'Nothing in the stimulus tells you it is the cheapest item, that Rina will buy it, or that the whole store is discounted. MSS rewards carrying the stated rule only as far as the text allows.',
        },
        { type: 'h4', text: "What's in This Module" },
        {
          type: 'list',
          items: [
            'Step-by-Step: four-step method for timed MSS questions',
            'Inference type drills: causal synthesis, definitional, causal chain, constraint, density, semantic nuance',
            'LEAST Supported strategy for inverted stems',
            'Strength-of-support calibration and matching rules',
            'Reference Guide: compact cheat sheet for review',
          ],
        },
      ],
    },
  },
};
