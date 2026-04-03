import { Lesson } from '../../types';

export const Lesson7_Advanced_UnreasonableStandardOfProof: Lesson = {
  id: '5-7-advanced-unreasonable-standard',
  title: 'Advanced: Unreasonable Standard of Proof',
  content: [
    { type: 'h3', text: 'Advanced Drill: Spotting an Unreasonable Standard of Proof' },
    {
      type: 'paragraph',
      text: 'This flaw appears when an argument quietly demands far more proof than the claim actually requires. The author treats anything short of certainty, perfection, or exhaustive evidence as if it were worthless.',
    },
    {
      type: 'paragraph',
      text: 'The right move is to compare the conclusion with the evidence standard the author imposed. If the conclusion only needs support, but the author rejects it because the support is not absolute, the flaw is an unreasonable standard of proof.',
    },
    { type: 'hr' },
    {
      type: 'question-card',
      questionType: 'Flaw',
      difficulty: 'hard',
      isIllustrative: true,
      stimulus:
        'A city official argues that the transportation department should not expand the protected bike-lane network. After all, no study has yet proved with complete certainty that every proposed lane will reduce collisions in all weather conditions and at every traffic volume.',
      question:
        'Which one of the following most accurately describes a flaw in the official’s reasoning?',
      options: [
        '**(A)** It treats the absence of conclusive proof as if it were proof that the proposal is unsound.',
        '**(B)** It bases a general conclusion on a survey that is too small to be reliable.',
        '**(C)** It fails to consider that some traffic reforms may have multiple causes.',
        '**(D)** It assumes without justification that the safest roads are always the most efficient.',
        '**(E)** It uses a key term in two different senses.',
      ],
    },
    { type: 'hr' },
    { type: 'h3', text: 'Why Choice (A) Wins' },
    {
      type: 'breakdown',
      labels: { title: 'Move', text: 'What the author did' },
      items: [
        {
          title: 'Evidence standard',
          text: 'The author requires complete certainty across every condition before supporting the plan.',
          badge: 'Too strict',
          badgeColor: 'red',
        },
        {
          title: 'Hidden assumption',
          text: 'Anything less than certainty is treated as no support at all.',
          badge: 'Flaw',
          badgeColor: 'indigo',
        },
        {
          title: 'Correct description',
          text: 'Choice (A) matches that move exactly: no conclusive proof does not equal proof against the proposal.',
          badge: 'Correct',
          badgeColor: 'green',
        },
      ],
    },
    { type: 'h3', text: 'What To Watch For On Real LSAT Flaw Questions' },
    {
      type: 'list',
      items: [
        'Language like "prove," "certainly," "guarantee," "rule out every alternative," or "must show beyond doubt."',
        'An argument that rejects a reasonable claim because the evidence is not perfect.',
        'Answer choices that describe the author as demanding an unrealistically high evidentiary bar.',
      ],
    },
    {
      type: 'callout',
      variant: 'summary',
      title: 'Takeaway',
      text: 'When the author treats strong but incomplete support as useless, test the argument for an unreasonable standard of proof. The flaw is not weak evidence alone; it is the author pretending that only certainty counts.',
    },
  ],
};
