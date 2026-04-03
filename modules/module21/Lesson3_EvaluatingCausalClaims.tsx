import { Lesson } from '../../types';

export const Lesson3_EvaluatingCausalClaims: Lesson = {
  id: '21-3',
  title: 'Lesson 3: Evaluating Causal Claims and Questions to Ask',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Lesson 3: Evaluating Causal Claims and Questions to Ask' },
    {
      type: 'paragraph',
      text: 'Evaluate questions do not ask you to accept or reject the causal claim on instinct. They ask which missing fact would matter most in deciding whether the claim deserves confidence. That makes them a disciplined way to test causal reasoning.',
    },
    { type: 'hr' },
    { type: 'h3', text: 'The Pivotal Questions' },
    {
      type: 'process',
      title: 'Ask These Before Trusting a Causal Study',
      steps: [
        '**What was the baseline?** Did the studied group already have the highlighted trait or condition before the intervention?',
        '**Who was sampled?** If the sample is unrepresentative, the observed pattern may not generalize.',
        '**Was there random assignment or only random sampling?** Random assignment helps causal inference; random sampling helps representativeness.',
        '**Could self-selection, placebo effects, or poor blinding explain the result?** The design may be generating the pattern instead of the proposed cause.',
        '**Is there a plausible mechanism?** A bare correlation becomes more credible when the mechanism independently makes sense.',
      ],
    },
    {
      type: 'table',
      headers: ['Tool', 'What it helps with', 'What it does not prove by itself'],
      rows: [
        [
          'Random sampling',
          'Makes the sample more representative of the target population',
          'Does not establish that the tested factor caused the observed effect',
        ],
        [
          'Random assignment',
          'Helps isolate the tested variable by distributing confounds across groups',
          'Does not cure bad measurement or an irrelevant outcome measure',
        ],
      ],
    },
    { type: 'hr' },
    { type: 'h3', text: 'Real Questions To Use With This Lesson' },
    {
      type: 'breakdown',
      labels: { title: 'Pairing', text: 'Why it matters' },
      items: [
        {
          title: 'PT-119-S-3-Q-3 — Establishing the Relevant Baseline',
          text: 'The study reports the rats\' blood-pressure distribution only after the high-salt diet begins. The pivotal question is whether the colony already had abnormal blood pressure before the experiment started.',
          badge: 'Baseline',
          badgeColor: 'indigo',
        },
        {
          title: 'PT-101-S-2-Q-16 — Testing Sample Representativeness',
          text: 'The author uses extinction data from North American fish to draw a conclusion about animal species generally. The decisive issue is whether fish are representative of the larger class.',
          badge: 'Representativeness',
          badgeColor: 'blue',
        },
      ],
    },
    {
      type: 'callout',
      title: 'Evaluate Does Not Mean Guess',
      variant: 'summary',
      text: 'The best Evaluate answer is the one that would move your confidence the most because it directly tests the causal gap the argument relies on.',
    },
  ],
};
