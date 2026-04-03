import { Lesson } from '../../types';

export const Lesson_ReferenceGuide: Lesson = {
  id: '21-ref',
  title: 'Reference Guide',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Causal Reasoning Reference Guide' },
    {
      type: 'table',
      headers: ['Signal', 'What it usually means'],
      rows: [
        ['because / due to / resulted from', 'The author is naming a cause'],
        ['therefore / thus / hence', 'A causal conclusion or mechanistic sub-conclusion may follow'],
        ['leads to / brings about / triggers', 'The author is tracing a causal chain forward'],
        ['explained by / the reason for this is', 'The author is offering an explanation for an accepted phenomenon'],
      ],
    },
    { type: 'hr' },
    { type: 'h3', text: 'Fast Diagnostic Table' },
    {
      type: 'table',
      headers: ['If the task is...', 'Ask yourself...'],
      rows: [
        ['Main Conclusion / Argument Part', 'Is this sentence the proposed cause, the accepted phenomenon, or a supporting mechanism?'],
        ['Method', 'Is the author explaining a phenomenon, predicting a bad outcome, or criticizing someone else\'s causal story?'],
        ['Flaw', 'Which rival explanation or comparison did the author fail to rule out?'],
        ['Evaluate', 'What missing fact would most change my confidence in the causal claim?'],
        ['Strengthen', 'What would make the cause travel with the effect in the right direction?'],
        ['Weaken', 'What would make the effect explicable without the author\'s cause?'],
        ['Sufficient / Necessary Assumption', 'Does the answer complete the chain or merely keep the evidence relevant?'],
      ],
    },
    { type: 'hr' },
    { type: 'h3', text: 'Master Pairing Map' },
    {
      type: 'table',
      headers: ['Use', 'PT pairing', 'Primary connection'],
      rows: [
        ['Recognition', 'PT-128-S-2-Q-13', 'Main Conclusion'],
        ['Recognition', 'PT-116-S-3-Q-23', 'Main Conclusion / intermediate conclusion'],
        ['Recognition', 'PT-110-S-3-Q-8', 'Method of Reasoning'],
        ['Recognition', 'PT-135-S-4-Q-21', 'Argument Part'],
        ['Flaw', 'PT-126-S-1-Q-22', 'Reverse causation'],
        ['Flaw', 'PT-103-S-2-Q-5', 'Baseline failure'],
        ['Flaw', 'PT-113-S-2-Q-14', 'Measurement / data attack'],
        ['Evaluate', 'PT-119-S-3-Q-3', 'Baseline question'],
        ['Evaluate', 'PT-101-S-2-Q-16', 'Sample representativeness'],
        ['Strengthen', 'PT-128-S-3-Q-1', 'Transfers with the condition'],
        ['Sufficient Assumption', 'PT-114-S-1-Q-1', 'Missing causal trigger'],
        ['Sufficient Assumption', 'PT-112-S-1-Q-18', 'Conditional causal chain'],
        ['Necessary Assumption', 'PT-103-S-1-Q-4', 'Intermediate cause remains relevant'],
      ],
    },
    {
      type: 'callout',
      title: 'Bottom Line',
      variant: 'summary',
      text: 'Treat causal reasoning as a reusable framework: identify the arrow, test the baseline and comparison, look for rival stories, and then match your move to the question type actually being asked.',
    },
  ],
  alternates: {
    cheat: {
      label: 'Cheat Sheet',
      content: [
        { type: 'h2', text: 'Causal Reasoning — Cheat Sheet' },
        {
          type: 'callout',
          variant: 'summary',
          title: 'Key Principle',
          text: '**Every causal argument on the LSAT assumes that correlation equals causation. Your job is to test that assumption: identify the proposed cause, check the baseline, and hunt for rival explanations.**',
        },
        {
          type: 'table',
          headers: ['Pattern', 'What It Means', 'How to Handle'],
          rows: [
            ['"because / due to / resulted from"', 'Author is naming a cause', 'Identify this as the causal claim; ask what rival cause could explain the same effect'],
            ['"leads to / brings about / triggers"', 'Author is tracing a causal chain forward', 'Check whether every link in the chain is supported, not just the endpoints'],
            ['Correlation-based evidence, causal conclusion', 'Core LSAT causal flaw', 'Test: reverse causation, common cause, coincidence, or confounding variable'],
            ['Before-and-after comparison with no control', 'Baseline failure', 'Ask: would the effect have happened anyway without the proposed cause?'],
            ['Single study or anecdote cited as proof', 'Sample / representativeness gap', 'Ask: is the sample large enough, random enough, and relevant to the conclusion?'],
            ['"The reason for this is..." (explanation questions)', 'Author offers a causal explanation for an accepted fact', 'Distinguish explaining a phenomenon from arguing that the phenomenon exists'],
            ['Two groups differ in outcome and one variable', 'Mill\'s Method of Difference', 'Check whether the groups also differ in a confounding variable the author ignores'],
          ],
        },
        {
          type: 'table',
          headers: ['Trap', 'Why It Fools You', 'How to Avoid'],
          rows: [
            ['Reverse Causation', 'The effect and cause co-occur, so direction feels obvious', 'Ask: could B be causing A instead of A causing B?'],
            ['Common Cause (Third Variable)', 'The correlation is real, so a causal link feels justified', 'Ask: could an unmentioned factor C be driving both A and B?'],
            ['Post Hoc (Temporal Sequence)', '"A happened before B" sounds like evidence of causation', 'Sequence alone is not causation; test whether A actually made B more likely'],
            ['Baseline Neglect', 'The effect sounds impressive without a comparison point', 'Ask: what was the baseline rate before the cause was introduced?'],
            ['Confusing Necessary and Sufficient Cause', '"X is needed for Y" is treated as "X is enough for Y"', 'A necessary condition is not a sufficient one; other factors may also be required'],
          ],
        },
        {
          type: 'list',
          items: [
            '**Strengthen:** Show the cause travels with the effect (present \u2192 present, absent \u2192 absent)',
            '**Weaken:** Introduce a rival explanation or show the effect occurs without the cause',
            '**Flaw:** Name which rival explanation or comparison the author failed to rule out',
            '**Evaluate:** Find the fact whose presence or absence would most change confidence in the causal claim',
            '**Necessary Assumption:** The cause must remain relevant — no answer that severs the causal link can be denied',
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          title: 'The One Thing',
          text: 'Treat every causal argument as a three-part test: identify the arrow (proposed cause \u2192 effect), check the baseline (would the effect happen anyway?), and hunt for rival stories (reverse causation, common cause, confounding variable). Then match your move to the question type.',
        },
      ],
    },
  },
};
