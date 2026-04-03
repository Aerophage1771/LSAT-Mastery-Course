import { Lesson } from '../../types';

export const Lesson_Intro: Lesson = {
  id: '21-intro',
  title: 'Introduction: Causal Reasoning',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Introduction: Causal Reasoning' },
    {
      type: 'paragraph',
      text: 'Causal reasoning is a recurring LSAT pattern, not a single question type. Whenever an author claims that one event, condition, trait, or policy produces another, you are in causal territory. This module teaches the shared doctrine once so later question-type modules can keep their own solve paths without having to reteach the whole framework.',
    },
    {
      type: 'callout',
      title: 'Core Principle',
      variant: 'default',
      text: 'A causal argument always commits to a directional story: **cause -> effect**. Your first job is to identify that arrow before deciding whether the question wants you to recognize it, test it, attack it, support it, or assume it.',
    },
    { type: 'hr' },
    { type: 'h3', text: 'Where Causal Reasoning Appears' },
    {
      type: 'table',
      headers: ['Task', 'What the causal work looks like', 'What you need to do'],
      rows: [
        [
          'Main Conclusion / Argument Part',
          'A sentence explains a known phenomenon or supplies a mechanistic link in a broader argument',
          'Label the function of the causal sentence, not just the content',
        ],
        [
          'Method of Reasoning',
          'A speaker predicts consequences, offers an explanation, or criticizes someone else\'s explanation',
          'Abstract the causal move without losing the direction of the arrow',
        ],
        [
          'Flaw / Evaluate',
          'The author relies on a causal story that may have missing controls, comparisons, or rival explanations',
          'Ask which exact objection or missing question matters most',
        ],
        [
          'Strengthen / Weaken / Assumption',
          'The argument needs confirmation, attack, or a missing link inside a causal chain',
          'Match the answer to the specific gap the causal story depends on',
        ],
      ],
    },
    { type: 'hr' },
    { type: 'h3', text: 'The Five Causal Checks' },
    {
      type: 'process',
      title: 'Use These In Order',
      steps: [
        '**Name the claimed cause and effect.** If you cannot state the arrow clearly, you are not ready to solve the problem.',
        '**Separate correlation from explanation.** The evidence often only shows co-occurrence; the argument adds the causal story.',
        '**Look for rival stories.** Alternative cause, reverse cause, common cause, selection effects, measurement error, and baseline failures are the default threats.',
        '**Check the comparison and the baseline.** A number means little if you do not know the before-state, control group, or denominator.',
        '**Match the question type.** Evaluate asks what would matter, Strengthen confirms the story, Weaken opens a rival story, and assumption questions make the missing link explicit.',
      ],
    },
  ],
};
