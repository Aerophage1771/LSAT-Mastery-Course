import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: "18-2",
  title: "Step-by-Step Guide",
  content: [
    { type: 'h2', text: 'Step-by-Step Guide: Must Be False' },
    { type: 'paragraph', text: 'Follow this four-step method to solve any **Must Be False** question. Your goal is to find the one answer that creates a logical impossibility when combined with the stimulus.' },
    { type: 'h3', text: 'The 4-Step Method' },
    { type: 'process', title: 'Solving Must Be False Questions', steps: [
      '**Diagram the Rules.** Read the stimulus and extract every rule. Pay special attention to absolute terms (*all, every, none, never, no*) and conditional language (*if/then, only if, requires, must*). Sketch chains and contrapositives for complex conditionals.',
      '**Test Each Answer.** For each answer choice, ask: "Can I build a scenario where this statement AND the stimulus are both true?" If yes, the answer *could be true* and is wrong. Move on.',
      '**Find the Contradiction.** Identify the one answer where every attempt to make it true forces a violation of at least one stimulus rule. This answer is logically impossible \u2014 it is your pick.',
      '**Verify Impossibility.** Before confirming, double-check that the answer genuinely contradicts the stimulus rather than merely being unlikely or unsupported. The standard is impossibility, not improbability.'
    ]},
    { type: 'h3', text: 'The "Could Be True" Elimination Technique' },
    { type: 'paragraph', text: 'Must Be False questions reward elimination. For each answer, try to imagine a world where both the stimulus facts and the answer choice hold simultaneously. If you succeed \u2014 even with an implausible scenario \u2014 that answer is wrong. Only when no compatible scenario exists have you found the correct answer.' },
    { type: 'list', items: [
      '**Step A:** Accept all stimulus rules as absolute truths.',
      '**Step B:** Read the answer choice and attempt to construct a situation where it is true without breaking any stimulus rule.',
      '**Step C:** If you can construct such a situation, eliminate the answer. If every attempt produces a rule violation, keep it.'
    ]},
    { type: 'h3', text: 'Worked Example' },
    { type: 'question-card',
      id: '18-2-example',
      questionType: 'Must Be False',
      difficulty: 'medium',
      stimulus: 'All certified instructors at the academy have completed the advanced safety course. No one who has completed the advanced safety course is permitted to lead beginner sessions, because the academy assigns beginner sessions exclusively to uncertified volunteers.',
      question: 'If the statements above are true, each of the following could be true EXCEPT:',
      options: [
        '(A) Some uncertified volunteers have also completed the advanced safety course.',
        '(B) A certified instructor leads an intermediate session at the academy.',
        '(C) A certified instructor leads a beginner session at the academy. (Correct)',
        '(D) The academy has more uncertified volunteers than certified instructors.',
        '(E) Some certified instructors have never led any session at the academy.'
      ]
    },
    { type: 'paragraph', text: '**Why (C) is correct:** Certified instructors have completed the advanced safety course (Rule 1). No one who has completed that course may lead beginner sessions (Rule 2). Chaining these rules makes it impossible for a certified instructor to lead a beginner session. The other four answers describe situations that are compatible with both rules.' },
    { type: 'h3', text: 'Wrong-Answer Patterns' },
    { type: 'list', items: [
      '**The "Could Be True" Trap:** A statement the stimulus doesn\'t address at all. Because the stimulus doesn\'t forbid it, it *could* be true and is therefore wrong.',
      '**The "Must Be True" Trap:** A statement that actually follows from the stimulus. It is tempting because you recognize the logical connection, but it is a consequence of the rules, not a contradiction.',
      '**The Reversal Trap:** The stimulus says "If A, then B." The answer suggests "If B, then A." This reversal is not guaranteed, but it is not impossible either \u2014 so it *could* be true.',
      '**The Qualifier Exploit:** The stimulus uses *most* or *usually*, and the answer describes an exception. Since the stimulus allows exceptions, this statement is possible and wrong.'
    ]},
    { type: 'callout', title: 'Timing Tip', variant: 'tip', text: 'Spend about 60 percent of your time diagramming the rules and prephrasing what the stimulus forbids. A clear "anti-rule" lets you scan the answers quickly. If two choices look impossible, re-check each against the exact wording \u2014 only one will produce a genuine contradiction.' }
  ]
};
