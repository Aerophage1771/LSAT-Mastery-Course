import { Lesson } from '../../types';

export const Lesson5_Drill_ProblemAndSolution: Lesson = {
  id: "15-5",
  title: "Drill: Problem and Solution (PT-125-S-2-Q-7)",
  content: [
    { type: 'h2', text: 'Problem and Solution' },
    { type: 'paragraph', text: "A **Problem and Solution** Fill in the Blank question presents an argument structured around a real-world dilemma. The stimulus identifies a serious problem, proposes the only viable solution, and then introduces a specific obstacle that prevents that solution from being implemented. The blank \u2014 typically following the word \"unless\" \u2014 asks you to identify the condition that would overcome the stated obstacle and make the solution possible." },

    { type: 'paragraph', text: "These questions test your ability to trace a chain of reasoning that moves from problem to solution to obstacle, and then to reverse-engineer the missing piece: what must be true for the obstacle to be removed? The correct answer is always the most direct, logically necessary mechanism for overcoming the barrier identified in the argument. It will not fix a different problem, propose a new solution, or address a concern the argument never raised." },

    { type: 'h3', text: 'What Makes Problem and Solution Distinctive' },
    { type: 'paragraph', text: "In a Problem and Solution completion, the correct answer must:" },
    { type: 'list', ordered: true, items: [
      '**Target the specific obstacle.** The argument names one barrier. The answer must neutralize *that exact barrier* \u2014 not a related concern, not a broader category of barriers, and not the underlying problem itself.',
      '**Preserve the argument\'s own framework.** The stimulus defines who the relevant actors are (nations, companies, individuals) and what kind of action is under discussion. The answer must operate within those parameters.',
      '**Match the logical force of \"unless.\"** The word \"unless\" introduces a necessary condition. The answer must state something that, if it occurred, would be *sufficient* to remove the obstacle. Answers that are too weak (\"might help\") or too strong (\"completely eliminates all problems\") fail this test.',
    ]},

    { type: 'callout', variant: 'default', title: 'The Obstacle Reversal Rule', text: "The single most important skill in Problem and Solution completions is precisely identifying the **obstacle** and then finding the answer that **reverses** it. If the obstacle is \"no single nation will act alone,\" the reversal is a mechanism for collective action. If the obstacle is \"the technology does not yet exist,\" the reversal is the development of that technology. The correct answer always mirrors the obstacle \u2014 it does not introduce new considerations." },

    { type: 'hr' },

    { type: 'h3', text: 'Key Strategy: Problem \u2192 Solution \u2192 Obstacle \u2192 Reversal' },
    { type: 'paragraph', text: "The strategy for Problem and Solution completions follows a strict four-step decomposition:" },
    { type: 'process', title: 'Problem \u2192 Solution \u2192 Obstacle \u2192 Reversal', steps: [
      '**Step 1 \u2014 Identify the Problem:** What bad outcome does the argument describe? State it in one sentence.',
      '**Step 2 \u2014 Identify the Solution:** What does the argument say is the only way to prevent that bad outcome?',
      '**Step 3 \u2014 Identify the Obstacle:** Why can\'t the solution be implemented? What specific barrier does the argument name?',
      '**Step 4 \u2014 Reverse the Obstacle:** What condition, if true, would neutralize the obstacle and allow the solution to proceed? This is your pre-phrase for the blank.',
    ]},

    { type: 'paragraph', text: "The critical control step is to verify that your pre-phrase targets the *obstacle*, not the *problem*. Many wrong answers attempt to fix the problem directly (e.g., \"carbon dioxide levels decrease on their own\") rather than removing the barrier to the proposed solution. The argument has already told you the solution \u2014 your job is only to enable it." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Problem and Solution (PT-125-S-2-Q-7)' },
    { type: 'paragraph', text: "This drill demonstrates the Problem and Solution pattern using a classic collective-action dilemma. Your job is to trace the argument\'s structure, identify the precise obstacle, and find the answer that reverses it." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: '15-5-drill',
      questionType: 'Fill in the Blank',
      difficulty: 'medium',
      stimulus: "Environmentalist: The excessive atmospheric buildup of carbon dioxide, which threatens the welfare of everyone in the world, can be stopped only by reducing the burning of fossil fuels. Any country imposing the strict emission standards on the industrial burning of such fuels that this reduction requires, however, would thereby reduce its gross national product. No nation will be willing to bear singlehandedly the costs of an action that will benefit everyone. It is obvious, then, that the catastrophic consequences of excessive atmospheric carbon dioxide are unavoidable unless _______.",
      question: "Which one of the following most logically completes the argument?",
      options: [
        "(A) all nations become less concerned with pollution than with the economic burdens of preventing it",
        "(B) multinational corporations agree to voluntary strict emission standards",
        "(C) international agreements produce industrial emission standards (Correct)",
        "(D) distrust among nations is eliminated",
        "(E) a world government is established",
      ],
    },

    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Decompose the Argument Using the Four-Part Framework' },
    { type: 'paragraph', text: "Let\'s apply our Problem \u2192 Solution \u2192 Obstacle \u2192 Reversal framework to this stimulus:" },

    { type: 'breakdown', labels: { title: 'Component', text: 'Details' }, items: [
      { title: 'The Problem', text: 'Excessive atmospheric buildup of carbon dioxide threatens global welfare. This is the bad outcome the argument wants to prevent.', badge: 'Problem', badgeColor: 'red' },
      { title: 'The Solution', text: 'Reduce the burning of fossil fuels. The stimulus explicitly states this is the **only** way to stop the buildup. This word is critical \u2014 it closes off alternative solutions.', badge: 'Solution', badgeColor: 'blue' },
      { title: 'The Cost', text: 'Any country imposing the required emission standards would reduce its GDP. This is the price of implementing the solution.', badge: 'Cost', badgeColor: 'slate' },
      { title: 'The Obstacle', text: '"No nation will be willing to bear **singlehandedly** the costs of an action that will benefit everyone." This is the specific barrier: the collective-action problem. Each nation bears the full cost but shares the benefit with all others.', badge: 'The Key Barrier', badgeColor: 'indigo' },
      { title: 'The Conclusion', text: '"Catastrophic consequences are unavoidable UNLESS _______." The blank must state the condition that removes the obstacle, enabling the solution.', badge: 'To Be Completed', badgeColor: 'indigo' },
    ]},

    { type: 'h4', text: 'Step 2: Identify the Key Dynamic' },
    { type: 'paragraph', text: "**What is the logical structure?**" },
    { type: 'paragraph', text: "This is a classic collective-action dilemma, also known as a free-rider problem. The structure is:" },
    { type: 'list', items: [
      '**If** avoid catastrophe \u2192 **Must** reduce fossil fuel burning.',
      '**But** reducing requires costly emission standards.',
      '**And** no single nation will pay alone for a shared benefit.',
      '**Therefore** catastrophe is unavoidable **unless** [the \"acting alone\" barrier is removed].',
    ]},
    { type: 'paragraph', text: "The word \"singlehandedly\" is the fulcrum of the entire argument. The obstacle is not that nations are unwilling to act *at all* \u2014 it is that no nation will act *alone*. This distinction is crucial: the reversal does not need to make nations altruistic or eliminate economic costs. It only needs to ensure that no nation bears the costs by itself." },

    { type: 'h4', text: 'Step 3: Pre-Phrase the Answer' },
    { type: 'paragraph', text: "To reverse the obstacle, we need a mechanism that ensures **multiple nations share the burden**. The most natural mechanism is some form of coordinated international agreement that imposes standards on all participating nations simultaneously, so no single nation is disadvantaged." },

    { type: 'callout', title: 'Pre-Phrase', variant: 'tip', text: "\"...unless nations collectively agree to impose emission standards together, so that no single nation bears the cost alone.\"" },

    { type: 'h4', text: 'Step 4: Evaluate Each Answer' },
    { type: 'paragraph', text: "Apply the Obstacle Reversal Test to each choice: does this answer directly neutralize the \"no nation will act singlehandedly\" barrier?" },

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) all nations become less concerned with pollution than with the economic burdens of preventing it', text: "This makes the situation **worse**, not better. If nations care more about economic burdens than pollution, they are even less likely to impose emission standards. This answer moves in the opposite direction from the needed reversal.", badge: 'Opposite Effect', badgeColor: 'red' },
      { title: '(B) multinational corporations agree to voluntary strict emission standards', text: "Two problems. First, it shifts the agent from **nations** to **corporations** \u2014 but the obstacle is about nations\' GDP calculations, not corporate behavior. Second, the standards are \"voluntary,\" which does not guarantee the binding commitment needed to solve the collective-action problem. A voluntary system still allows free-riding.", badge: 'Agent Shift + Too Weak', badgeColor: 'red' },
      { title: '(C) international agreements produce industrial emission standards', text: "This directly reverses the obstacle. International **agreements** ensure that multiple nations commit simultaneously, removing the \"singlehandedly\" barrier. The standards are produced through a binding mechanism (agreements), not voluntarily. The agent remains **nations** acting through international channels. The scope matches: the argument requires emission standards, and this answer provides exactly that. **Passes the Obstacle Reversal Test.**", badge: 'Correct', badgeColor: 'green' },
      { title: '(D) distrust among nations is eliminated', text: "The argument never mentions distrust as the obstacle. The barrier is a rational economic calculation: no nation wants to pay alone for a shared benefit. Even if nations trusted each other completely, the free-rider incentive would remain. Eliminating distrust might be a *precondition* for cooperation, but it is not itself the cooperation the argument requires.", badge: 'Wrong Obstacle', badgeColor: 'red' },
      { title: '(E) a world government is established', text: "This would solve the problem, but it goes far beyond what the argument requires. The obstacle is about coordination, not sovereignty. International agreements can produce emission standards without requiring a world government. This answer is like using a sledgehammer to hang a picture frame \u2014 functionally overkill and not what the argument\'s logic demands.", badge: 'Too Extreme', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: Summary Table' },
    { type: 'table', headers: ['Answer', 'What It Targets', 'Matches Obstacle?', 'Verdict'], rows: [
      ['(A) Less concerned with pollution', 'Reverses priorities', '\u2717 \u2014 Makes obstacle worse', 'Opposite Effect'],
      ['(B) Voluntary corporate standards', 'Different agent + voluntary', '\u2717 \u2014 Corporations, not nations', 'Agent Shift'],
      ['**(C) International agreements**', '**Coordinated national action**', '**\u2713 \u2014 Directly reverses \"singlehandedly\"**', '**Correct \u2713**'],
      ['(D) Eliminate distrust', 'A precondition, not the barrier', '\u2717 \u2014 Obstacle is economic, not trust', 'Wrong Obstacle'],
      ['(E) World government', 'Eliminates national sovereignty', '\u2717 \u2014 Overkill; agreements suffice', 'Too Extreme'],
    ]},

    { type: 'paragraph', text: "Notice the pattern: the correct answer targets the **exact word** that defines the obstacle. The stimulus says \"singlehandedly\" \u2014 the reversal is collective action through agreements. Wrong answers either target a different barrier (D), overshoot the required fix (E), shift to the wrong actor (B), or worsen the problem (A)." },

    { type: 'hr' },

    { type: 'h3', text: 'Problem and Solution: Common Traps' },
    { type: 'paragraph', text: "Problem and Solution completions generate a specific set of traps that recur across many questions. Be alert to these:" },
    { type: 'breakdown', labels: { title: 'Trap', text: 'How to Spot It' }, items: [
      { title: 'Opposite Effect', text: 'The answer describes a condition that would make the obstacle **harder** to overcome, not easier. To spot this: check whether the condition moves in the same direction as the needed reversal. If it makes cooperation less likely, action more costly, or the problem worse, it fails.', badge: 'Most Common', badgeColor: 'blue' },
      { title: 'Agent Shift', text: 'The answer shifts responsibility to a **different actor** than the one identified in the obstacle (e.g., corporations instead of nations, individuals instead of governments). To spot this: verify that the actor in the answer matches the actor in the obstacle clause.', badge: 'Common', badgeColor: 'blue' },
      { title: 'Overkill Solution', text: 'The answer proposes something that would work but goes **far beyond** what the argument requires. These answers are not wrong because they are false \u2014 they are wrong because the argument\'s logic does not demand something so extreme. To spot this: ask whether a simpler mechanism would suffice.', badge: 'Moderate', badgeColor: 'slate' },
      { title: 'Wrong Obstacle', text: 'The answer addresses a barrier that **was not stated** in the argument. The argument identifies one specific obstacle; the answer must target that one. If the answer solves a problem you had to infer rather than one that was explicitly stated, it is likely wrong.', badge: 'Moderate', badgeColor: 'slate' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Key Lessons from This Drill' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. Trace the full chain: Problem \u2192 Solution \u2192 Obstacle \u2192 Reversal.** Every Problem and Solution completion follows this structure. If you skip a step \u2014 especially if you jump from Problem directly to Reversal \u2014 you will be drawn to answers that bypass the argument\'s own logic.\n\n**2. The obstacle is the anchor.** The correct answer does not fix the problem directly; it removes the barrier to the solution the argument has already identified. Your job is not to propose a new solution but to enable the one the argument provides.\n\n**3. Target the precise language of the obstacle.** In this drill, the word \"singlehandedly\" defined the barrier. The correct answer provided a mechanism for collective action \u2014 a direct reversal of \"singlehandedly.\" When analyzing the stimulus, underline or mentally flag the specific word or phrase that defines the obstacle.\n\n**4. Verify the agent.** The argument specifies who must act (nations, in this case). The correct answer must involve the same actors. Shifting to corporations, individuals, or other entities changes the argument\'s framework.\n\n**5. Reject overkill.** If a simpler mechanism solves the obstacle, prefer it over an extreme one. The LSAT rewards precision, not ambition." },
  ]
};
