import { Lesson } from '../../types';

export const Lesson4_StrengthenAndWeaken: Lesson = {
  id: '21-4',
  title: 'Lesson 4: Causal Reasoning in Strengthen and Weaken',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Lesson 4: Causal Reasoning in Strengthen and Weaken' },
    {
      type: 'paragraph',
      text: 'Strengthen and Weaken questions make the causal job explicit. A strong answer either confirms the author\'s story about what produces what or supplies a rival story the author cannot survive.',
    },
    { type: 'hr' },
    { type: 'h3', text: 'Two-Sided Causal Toolkit' },
    {
      type: 'table',
      headers: ['Task', 'What the best answer often does', 'Classic patterns'],
      rows: [
        [
          'Strengthen',
          'Shows that the proposed cause travels with the effect in the right direction or blocks an obvious rival story',
          'Transfers with the condition, dose-response support, mechanism confirmation, defender against an alternative cause',
        ],
        [
          'Weaken',
          'Shows that the effect can be explained without the author\'s cause or that the arrow may point the other way',
          'Alternative cause, reverse cause, common cause, sample distortion, missing comparison',
        ],
      ],
    },
    { type: 'hr' },
    { type: 'h3', text: 'Real Questions To Use With This Lesson' },
    {
      type: 'breakdown',
      labels: { title: 'Pairing', text: 'Instructional use' },
      items: [
        {
          title: 'PT-128-S-3-Q-1 — Supporting a Claimed Causal Relationship',
          text: 'The strongest support comes from workers who transfer into Department F and then begin to develop the syndrome. That makes the syndrome travel with the department rather than with preexisting worker traits.',
          badge: 'Strengthen',
          badgeColor: 'green',
        },
        {
          title: 'PT-126-S-1-Q-22 — Undermining a Claimed Causal Relationship',
          text: 'The best weakener does not merely cast doubt. It supplies a concrete physiological explanation that makes the observed pattern look backward.',
          badge: 'Weaken',
          badgeColor: 'red',
        },
      ],
    },
    {
      type: 'callout',
      title: 'Fallback Rule',
      variant: 'tip',
      text: 'Not every Strengthen or Weaken question is causal. First confirm that the argument actually relies on a cause-effect story. If it does not, do not force a causal answer onto a noncausal gap.',
    },
  ],
};
