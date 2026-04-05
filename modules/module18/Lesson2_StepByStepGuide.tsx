import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: '18-2',
  title: 'Step-by-Step Guide',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Step-by-Step Guide: Must Be False' },
    {
      type: 'paragraph',
      text: 'Follow this four-step method to solve any **Must Be False** question. Your goal is to find the one answer that creates a logical impossibility when combined with the stimulus.',
    },
    { type: 'h3', text: 'The 4-Step Method' },
    {
      type: 'process',
      title: 'Solving Must Be False Questions',
      steps: [
        '**Diagram the Rules.** Read the stimulus and extract every rule. Pay special attention to absolute terms (*all, every, none, never, no*) and conditional language (*if/then, only if, requires, must*). Sketch chains and contrapositives for complex conditionals.',
        '**Test Each Answer.** For each answer choice, ask: "Can I build a scenario where this statement AND the stimulus are both true?" If yes, the answer *could be true* and is wrong. Move on.',
        '**Find the Contradiction.** Identify the one answer where every attempt to make it true forces a violation of at least one stimulus rule. This answer is logically impossible \u2014 it is your pick.',
        '**Verify Impossibility.** Before confirming, double-check that the answer genuinely contradicts the stimulus rather than merely being unlikely or unsupported. The standard is impossibility, not improbability.',
      ],
    },
    { type: 'h3', text: 'The "Could Be True" Elimination Technique' },
    {
      type: 'paragraph',
      text: 'Must Be False questions reward elimination. For each answer, try to imagine a world where both the stimulus facts and the answer choice hold simultaneously. If you succeed \u2014 even with an implausible scenario \u2014 that answer is wrong. Only when no compatible scenario exists have you found the correct answer.',
    },
    {
      type: 'list',
      items: [
        '**Step A:** Accept all stimulus rules as absolute truths.',
        '**Step B:** Read the answer choice and attempt to construct a situation where it is true without breaking any stimulus rule.',
        '**Step C:** If you can construct such a situation, eliminate the answer. If every attempt produces a rule violation, keep it.',
      ],
    },
    { type: 'h3', text: 'Worked Method Snapshot' },
    {
      type: 'paragraph',
      text: 'Take a stimulus that says every certified instructor completed the advanced safety course, and no one who completed that course may lead beginner sessions. Once you chain those rules, one outcome becomes impossible: a certified instructor leading a beginner session.',
    },
    {
      type: 'paragraph',
      text: 'That is the Must Be False method in action. Build the anti-rule first, then compare each possibility against it. The correct answer is the one that violates the finished chain, not the one that merely sounds unusual or unsupported.',
    },
    { type: 'h3', text: 'Wrong-Answer Patterns' },
    {
      type: 'list',
      items: [
        '**The "Could Be True" Trap:** A statement the stimulus doesn\'t address at all. Because the stimulus doesn\'t forbid it, it *could* be true and is therefore wrong.',
        '**The "Must Be True" Trap:** A statement that actually follows from the stimulus. It is tempting because you recognize the logical connection, but it is a consequence of the rules, not a contradiction.',
        '**The Reversal Trap:** The stimulus says "If A, then B." The answer suggests "If B, then A." This reversal is not guaranteed, but it is not impossible either \u2014 so it *could* be true.',
        '**The Qualifier Exploit:** The stimulus uses *most* or *usually*, and the answer describes an exception. Since the stimulus allows exceptions, this statement is possible and wrong.',
      ],
    },
    {
      type: 'callout',
      title: 'Timing Tip',
      variant: 'tip',
      text: 'Spend about 60 percent of your time diagramming the rules and prephrasing what the stimulus forbids. A clear "anti-rule" lets you scan the answers quickly. If two choices look impossible, re-check each against the exact wording \u2014 only one will produce a genuine contradiction.',
    },
  ],
};
