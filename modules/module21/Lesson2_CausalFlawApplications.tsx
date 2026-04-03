import { Lesson } from '../../types';

export const Lesson2_CausalFlawApplications: Lesson = {
  id: '21-2',
  title: 'Lesson 2: Causal Flaw Applications',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Lesson 2: Causal Flaw Applications' },
    {
      type: 'paragraph',
      text: 'Causal flaws are not all the same. The LSAT gets harder when it stops rewarding the vague diagnosis "correlation is not causation" and instead asks you to spot the exact way the author\'s story can go wrong.',
    },
    { type: 'hr' },
    { type: 'h3', text: 'Major Causal Flaw Families' },
    {
      type: 'table',
      headers: ['Flaw family', 'What goes wrong', 'Typical LSAT language'],
      rows: [
        [
          'Alternative cause',
          'Another factor could explain the effect without the proposed cause',
          'Fails to consider that some other circumstance produced the result',
        ],
        [
          'Reverse causation',
          'The author gets the arrow backward',
          'Treats Y as an effect of X when Y, or its physiology, may be producing X',
        ],
        [
          'Common cause',
          'A third factor could explain both sides of the correlation',
          'Overlooks the possibility that both conditions stem from the same source',
        ],
        [
          'Selection or measurement problem',
          'The data do not measure the real variable cleanly',
          'Relies on self-reports, biased samples, or distorted comparisons',
        ],
        [
          'Baseline or comparison failure',
          'The author never establishes the right before-state or control',
          'Treats an outcome as meaningful without showing what it should be compared against',
        ],
      ],
    },
    { type: 'hr' },
    { type: 'h3', text: 'Real Questions To Use With This Lesson' },
    {
      type: 'breakdown',
      labels: { title: 'Pairing', text: 'What to notice' },
      items: [
        {
          title: 'PT-126-S-1-Q-22 — Reversing the Direction of Causation',
          text: 'The winning attack does not deny the observed pattern. It shows that the underlying physiology may produce both high blood pressure and quick anger, which reverses the psychological story the author needs.',
          badge: 'Reverse cause',
          badgeColor: 'red',
        },
        {
          title: 'PT-103-S-2-Q-5 — Ignoring the Relevant Baseline',
          text: 'A placement statistic sounds impressive only until you ask where the students started. If many students were already in journalism, the quoted result stops showing that the program created the success.',
          badge: 'Baseline',
          badgeColor: 'indigo',
        },
        {
          title: 'PT-113-S-2-Q-14 — Questioning the Supporting Data',
          text: 'The argument trusts self-reported screen time and headache frequency. The strongest weakener shows that the respondents with headaches may be systematically overestimating their VDT use.',
          badge: 'Measurement',
          badgeColor: 'blue',
        },
      ],
    },
    {
      type: 'callout',
      title: 'Flaw Question Discipline',
      variant: 'summary',
      text: 'Good causal-flaw labels are functional. They identify the specific rival story, missing comparison, or bad data source the author failed to rule out.',
    },
  ],
};
