import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: '16-1',
  title: 'Introduction',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'MODULE 16: Most Strongly Supported' },
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
      text: 'The correct answer is PROVEN by the stimulus, not just consistent with it. Many wrong answers could be true in the real world but lack direct textual support.',
    },
  ],
};
