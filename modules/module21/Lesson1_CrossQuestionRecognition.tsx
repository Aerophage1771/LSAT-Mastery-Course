import { Lesson } from '../../types';

export const Lesson1_CrossQuestionRecognition: Lesson = {
  id: '21-1',
  title: 'Lesson 1: Causal Reasoning in Main Conclusion, Argument Part, and Method',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Lesson 1: Causal Reasoning in Main Conclusion, Argument Part, and Method' },
    {
      type: 'paragraph',
      text: 'The same causal language can perform different jobs. In one stimulus it may be the main conclusion explaining an accepted event. In another it may be an intermediate step in a larger mechanism. In a Method question it may describe how a speaker predicts harmful downstream effects. Recognition is about role before it is about evaluation.',
    },
    { type: 'hr' },
    { type: 'h3', text: 'Recognition Workflow' },
    {
      type: 'process',
      title: 'Identify the Function of the Causal Claim',
      steps: [
        '**Locate the phenomenon.** If the stimulus starts from an accepted event and asks what caused it, the phenomenon is not the conclusion.',
        '**Find the proposed cause.** The sentence answering "why did this happen?" is often the explanatory conclusion.',
        '**Check whether the causal sentence supports something broader.** A later mechanistic sentence may still be an intermediate conclusion rather than the author\'s final point.',
        '**In Method questions, abstract the move.** Decide whether the author is offering an explanation, tracing consequences, or criticizing someone else\'s causal story.',
      ],
    },
    { type: 'hr' },
    { type: 'h3', text: 'Common Structural Roles' },
    {
      type: 'table',
      headers: ['Role', 'Typical signal', 'What not to confuse it with'],
      rows: [
        [
          'Explanatory main conclusion',
          'A known phenomenon is introduced first and then given a cause',
          'Do not mistake the phenomenon for the conclusion',
        ],
        [
          'Causal intermediate conclusion',
          'A "thus" sentence completes a mechanism that supports an earlier broader claim',
          'Do not assume the final sentence is always the main point',
        ],
        [
          'Method: negative consequences',
          'A response predicts a chain of downstream harms',
          'Do not describe it as a simple factual contradiction when it is a causal forecast',
        ],
      ],
    },
    { type: 'hr' },
    { type: 'h3', text: 'Real Questions To Use With This Lesson' },
    {
      type: 'breakdown',
      labels: { title: 'Pairing', text: 'Why it belongs here' },
      items: [
        {
          title: 'PT-128-S-2-Q-13 — Ice Ages and Vegetation',
          text: 'Use this with Main Conclusion work. The causal explanation is the author\'s point, and the remaining sentences supply the mechanism for how that cause would produce the phenomenon.',
          badge: 'Main Conclusion',
          badgeColor: 'green',
        },
        {
          title: 'PT-116-S-3-Q-23 — Hormones and Glucose',
          text: 'Use this to see how explanatory structure and intermediate conclusions interact. The final mechanistic consequence is important, but it still supports an earlier explanation rather than replacing it.',
          badge: 'Structure',
          badgeColor: 'indigo',
        },
        {
          title: 'PT-110-S-3-Q-8 — Telemedicine Debate',
          text: 'Use this with Method of Reasoning. The response argues against a proposal by tracing a policy forward to a harmful, eventually self-defeating outcome.',
          badge: 'Method',
          badgeColor: 'blue',
        },
        {
          title: 'PT-135-S-4-Q-21 — Explaining Cultural Phenomena Across Societies',
          text: 'Use this with Argument Part work. The broad claim about needing cross-society data is the methodological conclusion, and the ecological-or-climatic example is there to support that causal standard rather than to replace it.',
          badge: 'Argument Part',
          badgeColor: 'slate',
        },
      ],
    },
    {
      type: 'callout',
      title: 'Argument Part Caution',
      variant: 'tip',
      text: 'When a stimulus contains a phenomenon, a proposed cause, and a mechanism in quick succession, label the **function** of each sentence. A sentence can be true background, a mechanistic premise, or the author\'s explanatory point depending on what the rest of the argument needs from it.',
    },
  ],
};
