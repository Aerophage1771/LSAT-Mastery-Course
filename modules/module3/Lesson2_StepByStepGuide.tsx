import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: '3-2',
  title: 'Step-by-Step Guide',
  content: [
    { type: 'h2', text: 'The 4-Step Method for Method of Reasoning Questions' },
    { type: 'paragraph', text: "This lesson provides a complete, repeatable method for solving any Method of Reasoning question. Each step includes a concrete example, tips for when the step gets tricky, and a callout with a key insight. At the end, you will work through a full example applying all four steps." },

    { type: 'callout', variant: 'tip', title: 'Timing', text: "You should spend roughly **1 minute and 30 seconds** per Method of Reasoning question. The 4-step method may feel slow at first, but with practice it becomes automatic. The key time-saver is developing a strong prephrase in Step 2 — this dramatically speeds up answer evaluation in Steps 3–4." },

    { type: 'hr' },

    { type: 'h3', text: 'Overview' },
    { type: 'process', title: 'The 4-Step Method', steps: [
      '**Step 1 — Break Down the Argument:** Identify the conclusion, premises, and (in dialogues) which speaker to focus on.',
      '**Step 2 — Characterize the Method & Prephrase:** Describe the argumentative strategy in your own abstract words before reading answers.',
      '**Step 3 — Evaluate Answer Choices Against Your Prephrase:** Scan for the choice that best matches your abstract description.',
      '**Step 4 — Systematically Eliminate Traps:** Apply targeted checks to remaining candidates.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "Before you can describe how an argument works, you must understand its parts. Examine the argument to identify the conclusion, the evidence, and any opposing viewpoints. In dialogues, focus on the speaker named in the question stem." },

    { type: 'h4', text: 'What to Identify' },
    { type: 'breakdown', labels: { title: 'Component', text: 'What to Look For' }, items: [
      { title: 'Format', text: 'Is this a standalone argument or a dialogue between two speakers? In dialogues, the question stem will specify which speaker\'s method you need to describe.', badge: 'First', badgeColor: 'blue' },
      { title: 'Main Conclusion', text: 'What is the author (or specified speaker) trying to prove? Use the Why Test from Module 2 if needed.', badge: 'Second', badgeColor: 'blue' },
      { title: 'Premises / Evidence', text: 'What facts, examples, data, or principles does the author use as support? How do they connect to the conclusion?', badge: 'Third', badgeColor: 'blue' },
      { title: 'Opposing View (if any)', text: 'Does the argument respond to another position? In dialogues, the first speaker often provides the view being challenged.', badge: 'Fourth', badgeColor: 'blue' },
    ]},

    { type: 'h4', text: 'Example' },
    { type: 'blockquote', text: '"Historian: Some scholars argue that the Roman Empire fell primarily due to barbarian invasions. However, the empire had successfully repelled invasions for centuries. What changed was not the strength of external threats but the internal decay of Roman institutions — corruption, economic collapse, and political fragmentation made the empire unable to mount effective defenses. The fall of Rome was therefore primarily an internal collapse, not an external conquest."' },

    { type: 'paragraph', text: "Breaking this down:" },
    { type: 'breakdown', labels: { title: 'Component', text: 'Identification' }, items: [
      { title: 'Format', text: 'Standalone argument (single speaker: the historian).', badge: 'Format', badgeColor: 'slate' },
      { title: 'Opposing View', text: '"Some scholars argue that the Roman Empire fell primarily due to barbarian invasions." The historian is challenging this position.', badge: 'Opposing View', badgeColor: 'slate' },
      { title: 'Premises', text: '(1) The empire had successfully repelled invasions for centuries. (2) Internal decay — corruption, economic collapse, political fragmentation — made defenses ineffective.', badge: 'Premises', badgeColor: 'slate' },
      { title: 'Main Conclusion', text: '"The fall of Rome was therefore primarily an internal collapse, not an external conquest."', badge: 'Conclusion', badgeColor: 'indigo' },
    ]},

    { type: 'callout', variant: 'default', title: 'When This Step Gets Tricky', text: "In complex dialogues, each speaker may have their own conclusion, premises, and method. Make sure you are analyzing the correct speaker's argument. The question stem will always tell you which speaker to focus on — read it first." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 2: Characterize the Method & Prephrase' },
    { type: 'paragraph', text: "This is the most important step. Based on your argument breakdown, describe the strategy in your own abstract terms. Don't worry about perfect phrasing — capture the essence of the logical move." },

    { type: 'h4', text: 'The Key Question' },
    { type: 'paragraph', text: 'Ask yourself: **"How did the author get from the evidence to the conclusion?"** Then translate your answer into abstract terms by stripping out the specific nouns.' },

    { type: 'h4', text: 'The Abstract Translation Technique' },
    { type: 'paragraph', text: "Here is the most powerful tool for Method of Reasoning questions. Take your concrete understanding and translate it into abstract language:" },

    { type: 'table', headers: ['Concrete Understanding', 'Abstract Translation'], rows: [
      ['"The historian says Rome fell because of internal decay, not barbarian invasions"', '"The argument offers an alternative cause for an observed event, challenging the proposed explanation"'],
      ['"The environmentalist compares species extinction to cancer deaths to show the developer\'s logic is bad"', '"The argument applies the opponent\'s reasoning to a different case where it yields an absurd result"'],
      ['"The author rules out Mercury and Venus to conclude the meteorites came from Mars"', '"The argument eliminates alternative possibilities to support the remaining option as the conclusion"'],
      ['"Ruth gives the example of the Kelton Company to prove Joanna wrong"', '"The argument provides a specific instance that contradicts a general claim"'],
    ]},

    { type: 'callout', variant: 'tip', title: 'The Prephrase Checklist', text: "Your prephrase should answer these questions:\n\n1. **What action does the author take?** (e.g., compare, rule out, cite an example, challenge)\n2. **What is the logical relationship?** (e.g., analogy, counterexample, alternative explanation)\n3. **What is the goal?** (e.g., to disprove a claim, to support a conclusion, to show a flaw)\n\nA good prephrase: *\"The author challenges the opponent's generalization by providing a specific case where the rule doesn't hold.\"*\nA weak prephrase: *\"The author disagrees.\"*" },

    { type: 'h4', text: 'Common Method Quick-Reference' },
    { type: 'paragraph', text: "When forming your prephrase, check whether the argument matches one of these common strategies:" },
    { type: 'list', items: [
      'Did they compare this situation to another one? → **Analogy**',
      'Did they rule out other options one by one? → **Process of Elimination**',
      'Did they give a specific case that disproves a general rule? → **Counterexample**',
      'Did they point out that a proposal would backfire? → **Negative Consequences**',
      'Did they offer a different cause for the same event? → **Alternative Explanation**',
      'Did they expose a hidden assumption and attack it? → **Challenging an Assumption**',
      'Did they apply a general rule to a specific case? → **Applying a Principle**',
      'Did they show the opponent\'s logic leads to an absurd result? → **Refutation by Analogy (Reductio)**',
    ]},

    { type: 'callout', variant: 'default', title: 'When This Step Gets Tricky', text: "Some arguments use a combination of strategies — for example, challenging an assumption *and* offering an alternative explanation. In these cases, prephrase the dominant strategy: the one that most directly connects the key evidence to the conclusion. The answer choices will help you distinguish between overlapping strategies." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 3: Evaluate Answer Choices Against Your Prephrase' },
    { type: 'paragraph', text: "Scan the answer choices for the one that best matches your prephrase. The correct answer will be an abstract description of the logical pattern you identified. It should accurately describe the *action* the argument takes and the *relationship* between the evidence and the conclusion." },

    { type: 'breakdown', labels: { title: 'Match Type', text: 'Description' }, items: [
      { title: 'Direct Match', text: 'The correct choice uses standard logical vocabulary that matches your prephrase. If you prephrased "counterexample," the answer might say "presents a specific instance that contradicts a generalization."', badge: 'Most Common', badgeColor: 'green' },
      { title: 'Conceptual Match', text: 'The correct choice describes the same pattern using different but equivalent terms. An argument using a "counterexample" could be described as "challenging a general claim by presenting a case where it does not hold."', badge: 'Common', badgeColor: 'blue' },
    ]},

    { type: 'callout', variant: 'tip', title: 'Tip: Don\'t Get Anchored on Vocabulary', text: "The LSAT rarely uses the exact term you prephrased. \"Counterexample\" might appear as \"a specific instance that contradicts,\" \"analogy\" might appear as \"comparing two similar situations.\" Focus on whether the *logic* matches, not whether the *words* match." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 4: Systematically Eliminate Traps' },
    { type: 'paragraph', text: "If you are unsure after Step 3, use targeted checks to eliminate wrong answers. Method of Reasoning wrong answers almost always fail one of these three checks:" },

    { type: 'h4', text: 'The Three Elimination Checks' },
    { type: 'breakdown', labels: { title: 'Check', text: 'How to Apply' }, items: [
      { title: 'Check the Action', text: 'Does the answer choice accurately describe what the speaker *did*? If it says the speaker "questions a premise," make sure they actually questioned a premise. Many traps describe an action that never happened in the argument.', badge: 'Check 1', badgeColor: 'indigo' },
      { title: 'Check the Scope', text: 'Is the description accurate but too narrow or too broad? An argument might use an example as part of a larger strategy. The correct choice will capture the *main* strategy, not a subsidiary detail.', badge: 'Check 2', badgeColor: 'blue' },
      { title: 'Check the Speaker', text: 'In dialogue questions, make sure the answer choice is describing the correct speaker\'s argument. A common trap describes what the *other* speaker did.', badge: 'Check 3', badgeColor: 'slate' },
    ]},

    { type: 'h4', text: 'Common Wrong Answer Patterns' },
    { type: 'table', headers: ['Trap Type', 'What It Does', 'How to Spot It'], rows: [
      ['**Wrong Action**', 'Describes a method the argument did not use', 'The answer says "questions a premise" but the argument accepted all premises and attacked the logical connection instead'],
      ['**Wrong Direction**', 'Describes the opposite of what happened', 'The answer says "supports the claim" but the argument was designed to *undermine* the claim'],
      ['**Wrong Speaker**', 'Describes the other speaker\'s method (in dialogues)', 'Check which speaker the question asks about and verify the answer describes *that* speaker\'s strategy'],
      ['**Partial Match**', 'Accurately describes one part but mischaracterizes the overall strategy', 'The answer correctly notes the argument uses an "example" but calls it an "analogy" when it is actually a "counterexample"'],
      ['**Content Trap**', 'Restates *what* the argument concludes instead of *how* it reasons', 'The answer describes the conclusion\'s content rather than the logical strategy used to reach it'],
    ]},

    { type: 'callout', variant: 'tip', title: 'When to Use Process of Elimination', text: "If your prephrase matches one answer clearly, go with it — don't second-guess yourself. Use elimination only when:\n\n1. No answer is a clear match for your prephrase.\n2. Two or more answers seem plausible.\n\nIn these cases, apply the three checks systematically to each remaining candidate. The answer that passes all three checks is correct." },

    { type: 'hr' },

    { type: 'h2', text: 'Full Worked Example' },
    { type: 'paragraph', text: "Let's apply all four steps to a complete Method of Reasoning question from start to finish." },

    { type: 'question-card',
      id: 'WE-3-2-001',
      questionType: 'Method of Reasoning',
      difficulty: 'medium',
      stimulus: "Nutritionist: A popular diet book claims that eating after 8 PM causes weight gain because the body's metabolism slows down at night. But metabolism does not significantly decrease during sleep — it remains roughly constant throughout a 24-hour cycle. People who eat late at night tend to gain weight not because of when they eat, but because late-night eating is associated with consuming additional calories beyond what the body needs. The timing is incidental; the total caloric intake is what matters.",
      question: "Which one of the following most accurately describes the method of reasoning used in the nutritionist's argument?",
      options: [
        "(A) It undermines a causal claim by showing that the proposed mechanism does not operate as described and by offering an alternative explanation for the observed correlation. (Correct)",
        "(B) It questions the credentials of the author of the diet book.",
        "(C) It provides a counterexample showing that some people who eat late at night do not gain weight.",
        "(D) It draws an analogy between late-night eating and another situation to show the diet book's reasoning is flawed.",
        "(E) It argues that the diet book's recommendation would have harmful consequences for people who follow it.",
      ],
    },

    { type: 'h3', text: 'Applying the 4-Step Method' },

    { type: 'process', title: 'Step-by-Step Walkthrough', steps: [
      '**Step 1 — Break Down the Argument:**\n• **Opposing View:** The diet book claims eating after 8 PM causes weight gain because metabolism slows at night.\n• **Premise 1:** Metabolism does not significantly decrease during sleep — it stays roughly constant.\n• **Premise 2:** Late-night eaters gain weight because they consume additional total calories, not because of timing.\n• **Main Conclusion:** The timing of eating is incidental; total caloric intake is what matters.',
      '**Step 2 — Characterize & Prephrase:** The nutritionist does two things: (1) undermines the proposed mechanism (metabolism slowdown) by showing it doesn\'t happen, and (2) offers a different explanation (extra total calories) for the same observation (weight gain). Prephrase: "The argument attacks the proposed causal mechanism and provides an alternative explanation."',
      '**Step 3 — Evaluate Choices:** Scan for the abstract description that matches. Choice (A) says "undermines a causal claim by showing that the proposed mechanism does not operate as described and by offering an alternative explanation." This matches our two-part prephrase perfectly.',
      '**Step 4 — Eliminate Traps:** (B) fails the Action check — no one\'s credentials are questioned. (C) fails — no specific counterexample is given. (D) fails — no analogy is drawn. (E) fails — no negative consequences are discussed.',
    ]},

    { type: 'h3', text: 'Answer Choice Analysis' },

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) Undermines a causal claim by showing the mechanism doesn\'t operate as described and offering an alternative explanation', text: 'Matches both parts of our prephrase: attacking the mechanism (metabolism doesn\'t slow) AND offering an alternative cause (extra calories). Both the action and the scope are correct.', badge: 'Correct', badgeColor: 'green' },
      { title: '(B) Questions the credentials of the author', text: '**Fails the Action check.** The nutritionist never discusses the diet book author\'s qualifications. The attack is on the *reasoning*, not the *person*.', badge: 'Wrong Action', badgeColor: 'red' },
      { title: '(C) Provides a counterexample showing some late-night eaters don\'t gain weight', text: '**Fails the Action check.** The nutritionist does not provide a specific example of a person who eats late and doesn\'t gain weight. The argument challenges the *mechanism*, not the *correlation*.', badge: 'Wrong Action', badgeColor: 'red' },
      { title: '(D) Draws an analogy to show the reasoning is flawed', text: '**Fails the Action check.** No comparison to a different situation is made. The nutritionist stays within the same domain (eating and weight gain).', badge: 'Wrong Action', badgeColor: 'red' },
      { title: '(E) Argues the recommendation would have harmful consequences', text: '**Fails the Action check.** The nutritionist does not discuss what would happen if people followed the diet book\'s advice. The attack is on the causal claim, not on the consequences of following it.', badge: 'Wrong Action', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "The 4-Step Method gives you a repeatable process: **Break Down → Prephrase → Evaluate → Eliminate.**\n\n• **Prephrasing is the single most important habit.** Translate the argument into abstract terms before reading answers.\n• The **Abstract Translation Technique** is your core tool: strip out the nouns and describe the logical pattern.\n• Wrong answers almost always fail one of three checks: **Wrong Action**, **Wrong Scope**, or **Wrong Speaker**.\n• When in doubt, apply the three elimination checks systematically. The answer that passes all three is correct.\n• Don't get anchored on vocabulary — focus on whether the *logic* matches your prephrase, not whether the *exact term* appears." },
  ],
};
