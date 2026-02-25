import { Lesson } from '../../types';

export const Lesson7_Drill_ConditionalLogicAndParadox: Lesson = {
  id: "15-7",
  title: "Drill: Conditional Logic and Paradox (PT-123-S-3-Q-16)",
  content: [
    { type: 'h2', text: 'Conditional Logic and Paradox' },
    { type: 'paragraph', text: "A **Conditional Logic and Paradox** Fill in the Blank question presents an argument that establishes a factual truth, deduces a consequence, and then introduces a condition for survival or success that *contradicts* that truth. The result is a paradox: the argument\'s own premises force a conclusion in which a necessary belief is simultaneously acknowledged to be false." },

    { type: 'paragraph', text: "These questions test your ability to hold two conflicting premises in mind and derive the inevitable logical consequence. The blank asks you to state the paradoxical outcome: that some group must hold a belief that the argument has already proven to be literally untrue. The challenge is resisting the temptation to resolve the paradox rather than simply stating it." },

    { type: 'h3', text: 'What Makes Conditional Logic and Paradox Distinctive' },
    { type: 'paragraph', text: "In a Conditional Logic and Paradox completion, the correct answer must:" },
    { type: 'list', ordered: true, items: [
      '**State the paradox, not resolve it.** The argument creates an irreconcilable tension between a factual truth and a survival condition. The correct answer articulates this tension rather than proposing a way out of it.',
      '**Combine both premises.** The answer must reflect *both* the factual truth (X is false) and the necessary condition (survival requires believing X). An answer that captures only one half is incomplete.',
      '**Use appropriately hedged language.** Because the argument concerns what people must *believe*, not what is *true*, the answer will typically involve epistemic terms like \"believe,\" \"hold beliefs,\" or \"attribute.\"',
    ]},

    { type: 'callout', variant: 'default', title: 'The Paradox Articulation Rule', text: "The single most important skill in Conditional Logic and Paradox completions is resisting the urge to **escape the paradox**. Many wrong answers attempt to find a way out of the contradiction \u2014 suggesting an alternative motivation, proposing that the belief is actually true, or recommending a different approach. The correct answer does none of these. It simply states: \"The entity cannot survive unless its members hold beliefs that are literally false.\" The paradox is the conclusion, not a problem to be solved." },

    { type: 'hr' },

    { type: 'h3', text: 'Key Strategy: Fact \u2192 Condition \u2192 Conflict \u2192 Paradox' },
    { type: 'paragraph', text: "The strategy for Conditional Logic and Paradox completions follows a four-step decomposition:" },
    { type: 'process', title: 'Fact \u2192 Condition \u2192 Conflict \u2192 Paradox', steps: [
      '**Step 1 \u2014 Identify the Fact:** What does the argument establish as literally true? This is usually stated in the opening sentences and is presented as an uncontroversial premise.',
      '**Step 2 \u2014 Identify the Condition:** What does the argument say is necessary for survival, success, or continuation? Look for \"unless,\" \"only if,\" or \"cannot survive without.\"',
      '**Step 3 \u2014 Identify the Conflict:** How do the Fact and the Condition contradict each other? The Fact says X is false; the Condition says people must believe X. This is the paradox.',
      '**Step 4 \u2014 State the Paradox:** Combine the Fact and the Condition into a single statement: survival requires holding beliefs that are literally false. This is your pre-phrase for the blank.',
    ]},

    { type: 'paragraph', text: "The critical control step is to verify that your pre-phrase **states** the paradox rather than **resolving** it. If your pre-phrase suggests a way to avoid the contradiction, eliminate the false belief, or find an alternative, you have fallen into the most common trap for this question type." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Conditional Logic and Paradox (PT-123-S-3-Q-16)' },
    { type: 'paragraph', text: "This drill demonstrates the Conditional Logic and Paradox pattern using an argument about nationhood and moral personhood. Your job is to identify both premises, locate the conflict between them, and find the answer that states the resulting paradox." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: '15-7-drill',
      questionType: 'Fill in the Blank',
      difficulty: 'hard',
      stimulus: "Philosopher: Nations are not literally persons; they have no thoughts or feelings, and, literally speaking, they perform no actions. Thus they have no moral rights or responsibilities. But no nation can survive unless many of its citizens attribute such rights and responsibilities to it, for nothing else could prompt people to make the sacrifices national citizenship demands. Obviously, then, a nation _______.",
      question: "Which one of the following most logically completes the philosopher\'s argument?",
      options: [
        "(A) cannot continue to exist unless something other than the false belief that the nation has moral rights motivates its citizens to make sacrifices",
        "(B) cannot survive unless many of its citizens have some beliefs that are literally false (Correct)",
        "(C) can never be a target of moral praise or blame",
        "(D) is not worth the sacrifices that its citizens make on its behalf",
        "(E) should always be thought of in metaphorical rather than literal terms",
      ],
    },

    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Decompose the Argument Using the Four-Part Framework' },
    { type: 'paragraph', text: "Let\'s apply our Fact \u2192 Condition \u2192 Conflict \u2192 Paradox framework to this stimulus:" },

    { type: 'breakdown', labels: { title: 'Component', text: 'Details' }, items: [
      { title: 'The Fact', text: '"Nations are not literally persons; they have no thoughts or feelings, and, literally speaking, they perform no actions. Thus they have no moral rights or responsibilities." The philosopher establishes as literally true that nations lack personhood and therefore lack moral standing. This is presented as an uncontroversial factual premise.', badge: 'Fact (Literal Truth)', badgeColor: 'blue' },
      { title: 'The Condition', text: '"No nation can survive unless many of its citizens attribute such rights and responsibilities to it." Survival **requires** citizens to believe the nation has moral rights and responsibilities \u2014 the very things the Fact says it literally does not have.', badge: 'Necessary Condition', badgeColor: 'indigo' },
      { title: 'The Reason', text: '"For nothing else could prompt people to make the sacrifices national citizenship demands." This closes the escape route: there is no alternative motivation. The false belief is the **only** thing that can produce the necessary sacrifices.', badge: 'Escape Route Closed', badgeColor: 'slate' },
      { title: 'The Blank (Paradox)', text: '"Obviously, then, a nation _______." The blank must state the paradoxical consequence: survival depends on citizens holding beliefs that the argument has already established are literally false.', badge: 'To Be Completed', badgeColor: 'indigo' },
    ]},

    { type: 'h4', text: 'Step 2: Identify the Key Dynamic' },
    { type: 'paragraph', text: "**What is the logical structure?**" },
    { type: 'paragraph', text: "This argument creates a deliberate collision between two premises:" },
    { type: 'list', items: [
      '**Premise 1 (Fact):** Nations literally have no moral rights or responsibilities. \u2192 Believing they do is a *false* belief.',
      '**Premise 2 (Condition):** Nations cannot survive unless citizens attribute moral rights to them. \u2192 Survival *requires* this belief.',
      '**Premise 3 (Exclusivity):** Nothing else can motivate the necessary sacrifices. \u2192 There is no alternative to the false belief.',
      '**Conclusion:** Survival requires citizens to hold a belief that is literally false.',
    ]},
    { type: 'paragraph', text: "The word \"obviously\" before \"then\" signals that the philosopher considers this conclusion to follow directly and inevitably from the premises. The paradox is not a flaw in the argument \u2014 it is the argument\'s intended point. The philosopher is making a philosophical observation about the necessary role of beneficial falsehoods in sustaining political communities." },

    { type: 'h4', text: 'Step 3: Pre-Phrase the Answer' },
    { type: 'paragraph', text: "Combining Premises 1 and 2: a nation\'s survival requires citizens to believe something (that the nation has moral rights) that is literally false (because nations are not persons and have no moral standing). The pre-phrase must state exactly this paradox." },

    { type: 'callout', title: 'Pre-Phrase', variant: 'tip', text: "\"...a nation cannot survive unless many of its citizens hold beliefs that are literally false.\"" },

    { type: 'h4', text: 'Step 4: Evaluate Each Answer' },
    { type: 'paragraph', text: "Apply the Paradox Articulation Test to each choice: does this answer state the paradox created by the collision of the Fact and the Condition?" },

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) cannot continue to exist unless something other than the false belief that the nation has moral rights motivates its citizens to make sacrifices', text: "This answer tries to **escape** the paradox by suggesting an alternative motivation exists. But Premise 3 explicitly closes this escape route: \"nothing else could prompt people to make the sacrifices.\" Answer (A) directly contradicts this premise. It also shifts the conclusion from stating a paradox to proposing a solution \u2014 the opposite of what the argument demands.", badge: 'Escape Attempt', badgeColor: 'red' },
      { title: '(B) cannot survive unless many of its citizens have some beliefs that are literally false', text: "This directly states the paradox. Premise 1 establishes that the belief in national moral rights is literally false. Premise 2 establishes that survival requires this belief. Combined: survival requires literally false beliefs. The language is precise: \"some beliefs\" (not all beliefs), \"literally false\" (matching the argument\'s use of \"literally speaking\"). **Passes the Paradox Articulation Test.**", badge: 'Correct', badgeColor: 'green' },
      { title: '(C) can never be a target of moral praise or blame', text: "This follows from Premise 1 alone: if nations have no moral rights or responsibilities, they cannot be morally praised or blamed. But this answer **ignores the entire second half of the argument** \u2014 the condition, the sacrifice, the paradox. It states a consequence of one premise rather than the synthesis of both premises. An incomplete conclusion.", badge: 'Partial \u2014 One Premise Only', badgeColor: 'red' },
      { title: '(D) is not worth the sacrifices that its citizens make on its behalf', text: "This introduces a **value judgment** that the argument never makes. The philosopher observes that nations require false beliefs to survive but does not say whether this makes the nation unworthy of sacrifice. The argument is descriptive (\"this is how nations work\"), not evaluative (\"nations are not worth it\"). This answer goes beyond the premises.", badge: 'Unsupported Value Judgment', badgeColor: 'red' },
      { title: '(E) should always be thought of in metaphorical rather than literal terms', text: "This introduces a **normative recommendation** (\"should\") when the argument is drawing a descriptive conclusion (\"this is the case\"). The philosopher is not advising people on how to think about nations; the philosopher is observing a logical consequence of the premises. Additionally, the argument\'s point is not about metaphor versus literalism but about the role of necessary false beliefs.", badge: 'Normative, Not Descriptive', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: Summary Table' },
    { type: 'table', headers: ['Answer', 'What It Does', 'States the Paradox?', 'Verdict'], rows: [
      ['(A) Alternative motivation needed', 'Tries to escape the paradox', '\u2717 \u2014 Contradicts Premise 3', 'Escape Attempt'],
      ['**(B) Must hold false beliefs**', '**States the paradox directly**', '**\u2713 \u2014 Combines both premises**', '**Correct \u2713**'],
      ['(C) Can\'t be morally praised/blamed', 'Follows from Premise 1 only', '\u2717 \u2014 Ignores Premises 2 and 3', 'Partial'],
      ['(D) Not worth the sacrifices', 'Value judgment', '\u2717 \u2014 Not supported by premises', 'Unsupported'],
      ['(E) Should be thought of metaphorically', 'Normative recommendation', '\u2717 \u2014 \"Should\" vs. \"is\"', 'Wrong Mode'],
    ]},

    { type: 'paragraph', text: "Notice the pattern: the correct answer is the **only** choice that synthesizes both halves of the argument. Wrong answers either engage with only one premise (C), try to escape the paradox (A), introduce unsupported evaluations (D), or shift from description to prescription (E). Only (B) holds both premises together and states the inevitable, uncomfortable conclusion." },

    { type: 'hr' },

    { type: 'h3', text: 'Conditional Logic and Paradox: Common Traps' },
    { type: 'paragraph', text: "Paradox-based completions generate a specific set of traps. Be alert to these:" },
    { type: 'breakdown', labels: { title: 'Trap', text: 'How to Spot It' }, items: [
      { title: 'Escape Attempt', text: 'The answer tries to **resolve** the paradox by suggesting an alternative that avoids the contradiction. To spot this: check whether the answer contradicts any premise (especially an exclusivity clause like \"nothing else could...\"). If the argument closes escape routes, the correct answer does not try to open new ones.', badge: 'Most Common', badgeColor: 'blue' },
      { title: 'Partial Conclusion', text: 'The answer follows from **one premise** but ignores the other(s). To spot this: verify that the answer reflects the *synthesis* of all premises, not just a deduction from the first or last one. A conclusion that could be drawn without the middle premises is probably incomplete.', badge: 'Common', badgeColor: 'blue' },
      { title: 'Descriptive-to-Normative Shift', text: 'The answer shifts from what **is** the case to what **should** be the case. To spot this: look for modal verbs like \"should,\" \"ought to,\" or \"must\" used in a prescriptive sense. If the argument\'s premises are all descriptive, the conclusion should be descriptive too.', badge: 'Common', badgeColor: 'blue' },
      { title: 'Unsupported Value Judgment', text: 'The answer introduces an evaluative claim (\"worth it,\" \"better,\" \"desirable\") that the premises do not support. To spot this: check whether any premise makes a value claim. If all premises are factual or conditional, a value-laden conclusion goes beyond the evidence.', badge: 'Moderate', badgeColor: 'slate' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Key Lessons from This Drill' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. State the paradox; don\'t resolve it.** When an argument\'s premises create an irreconcilable tension, the conclusion articulates that tension. The correct answer does not find a clever way out of the contradiction \u2014 it names the contradiction.\n\n**2. Both premises must appear in the conclusion.** If your answer follows from only one premise, it is incomplete. The correct completion synthesizes the factual claim (X is false) with the conditional claim (survival requires believing X) into a single paradoxical statement.\n\n**3. Watch for escape-route closers.** Phrases like \"nothing else could\" or \"the only way\" are not filler \u2014 they are structural devices that eliminate alternative conclusions. When the argument closes an escape route, any answer that uses that route contradicts the premises.\n\n**4. Match the mode of the premises.** If all premises are descriptive, the conclusion must be descriptive. If the premises are about what *is* the case, the conclusion should not be about what *should* be the case. Normative answers to descriptive arguments are a reliable wrong-answer pattern.\n\n**5. Paradoxes are conclusions, not errors.** A paradoxical conclusion does not mean the argument is flawed. In Fill in the Blank questions, the paradox is the philosopher\'s intended observation. Your job is to articulate it clearly, not to fix it." },
  ]
};
