import { Lesson } from '../../types';

export const Lesson6_Drill_PhilosophicalRebuttal: Lesson = {
  id: "15-6",
  title: "Drill: Philosophical Rebuttal (PT-114-S-1-Q-19)",
  content: [
    { type: 'h2', text: 'Philosophical Rebuttal' },
    { type: 'paragraph', text: "A **Philosophical Rebuttal** Fill in the Blank question presents an argument in which the author defends a core principle against a counterargument. The stimulus typically follows a three-part structure: (1) the author states a philosophical thesis, (2) an opponent challenges it by pointing to an apparent exception or additional value, and (3) the author refutes the challenge by showing that the opponent's concept is actually reducible to the author's original framework." },

    { type: 'paragraph', text: "The blank asks you to complete the author's refutation \u2014 specifically, to state the logical consequence of the author's rebuttal premise. These questions reward deep engagement with the argument's conceptual structure: you must understand not just what each side claims, but how the author's final premise redefines the opponent's key term to neutralize the challenge." },

    { type: 'h3', text: 'What Makes Philosophical Rebuttal Distinctive' },
    { type: 'paragraph', text: "In a Philosophical Rebuttal completion, the correct answer must:" },
    { type: 'list', ordered: true, items: [
      '**State the consequence of the redefinition.** The author\'s rebuttal works by redefining the opponent\'s key concept. The correct answer articulates what follows from that redefinition \u2014 usually that the opponent\'s concept reduces to the author\'s original value.',
      '**Stay within the author\'s framework.** The answer must reflect the author\'s position, not the opponent\'s. It should affirm or extend the original thesis, not concede ground to the counterargument.',
      '**Match the argument\'s level of abstraction.** These are philosophical arguments, and the correct answer will be stated in philosophical terms \u2014 not as practical advice, not as an empirical claim, and not as an emotional appeal.',
    ]},

    { type: 'callout', variant: 'default', title: 'The Redefinition Rule', text: "The core move in a Philosophical Rebuttal is **redefinition**: the author takes the opponent's key term and redefines it in terms of the author's own core concept. Once this redefinition is accepted, the opponent's challenge collapses because it no longer points to something *outside* the author's framework. The correct completion always articulates this collapse: \"The opponent's concept X is actually just a form of my concept Y.\"" },

    { type: 'hr' },

    { type: 'h3', text: 'Key Strategy: Thesis \u2192 Challenge \u2192 Rebuttal \u2192 Consequence' },
    { type: 'paragraph', text: "The strategy for Philosophical Rebuttal completions follows a four-step decomposition:" },
    { type: 'process', title: 'Thesis \u2192 Challenge \u2192 Rebuttal \u2192 Consequence', steps: [
      '**Step 1 \u2014 Identify the Thesis:** What is the author\'s core philosophical claim? State it in one sentence.',
      '**Step 2 \u2014 Identify the Challenge:** What does the opponent argue? What apparent exception or additional value do they point to?',
      '**Step 3 \u2014 Identify the Rebuttal:** How does the author respond? What premise do they introduce to neutralize the challenge? Look for a redefinition of the opponent\'s key term.',
      '**Step 4 \u2014 State the Consequence:** What logically follows from the rebuttal? This is your pre-phrase for the blank. It will almost always state that the opponent\'s concept is reducible to the author\'s original value.',
    ]},

    { type: 'paragraph', text: "The critical control step is to verify that your pre-phrase captures the *logical consequence* of the rebuttal premise, not merely a restatement of the thesis. The author is not simply reasserting their position \u2014 they are showing *why* the challenge fails. The blank must reflect that \"why.\"" },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Philosophical Rebuttal (PT-114-S-1-Q-19)' },
    { type: 'paragraph', text: "This drill demonstrates the Philosophical Rebuttal pattern using a classic argument about intrinsic value. Your job is to map the thesis, the challenge, and the rebuttal, and then find the answer that states the logical consequence of the author's redefinition." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: '15-6-drill',
      questionType: 'Fill in the Blank',
      difficulty: 'hard',
      stimulus: "Essayist: Only happiness is intrinsically valuable; other things are valuable only insofar as they contribute to happiness. Some philosophers argue that the fact that we do not approve of a bad person's being happy shows that we value happiness only when it is deserved. This supposedly shows that we find something besides happiness to be intrinsically valuable. But the happiness people deserve is determined by the amount of happiness they bring to others. Therefore, _______.",
      question: "Which one of the following most logically completes the essayist's argument?",
      options: [
        "(A) the notion that people can be deserving of happiness is ultimately incoherent",
        "(B) people do not actually value happiness as much as they think they do",
        "(C) the judgment that a person deserves to be happy is itself to be understood in terms of happiness (Correct)",
        "(D) the only way to be assured of happiness is to bring happiness to those who have done something to deserve it",
        "(E) a truly bad person cannot actually be very happy",
      ],
    },

    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Decompose the Argument Using the Four-Part Framework' },
    { type: 'paragraph', text: "Let's apply our Thesis \u2192 Challenge \u2192 Rebuttal \u2192 Consequence framework to this stimulus:" },

    { type: 'breakdown', labels: { title: 'Component', text: 'Details' }, items: [
      { title: 'The Thesis', text: '"Only happiness is intrinsically valuable." This is a monist position \u2014 the essayist claims there is exactly **one** thing with intrinsic value. Everything else is instrumentally valuable (valuable because it leads to happiness).', badge: 'Thesis', badgeColor: 'blue' },
      { title: 'The Challenge', text: 'Some philosophers argue that our disapproval of a bad person\'s happiness shows we value **deservedness** as a separate intrinsic value. If happiness alone were intrinsically valuable, we would approve of *all* happiness regardless of who experiences it. Since we don\'t, there must be something else we value.', badge: 'Challenge', badgeColor: 'red' },
      { title: 'The Rebuttal Premise', text: '"The happiness people deserve is determined by the amount of happiness they bring to others." This is the key move: the essayist **redefines** deservedness in terms of happiness. Deservedness is not an independent standard \u2014 it is measured by how much happiness a person creates.', badge: 'The Key Move', badgeColor: 'indigo' },
      { title: 'The Blank (Consequence)', text: '"Therefore, _______." The blank must state the logical consequence of this redefinition: since deservedness is defined by happiness, the opponent\'s supposed second value is actually just another form of the essayist\'s original value.', badge: 'To Be Completed', badgeColor: 'indigo' },
    ]},

    { type: 'h4', text: 'Step 2: Identify the Key Dynamic' },
    { type: 'paragraph', text: "**What is the logical structure?**" },
    { type: 'paragraph', text: "This is a dialectical argument with a specific rhetorical structure:" },
    { type: 'list', items: [
      '**Essayist\'s claim:** Only happiness has intrinsic value.',
      '**Opponent\'s counter:** We also value deservedness \u2192 so there is a *second* intrinsic value.',
      '**Essayist\'s rebuttal:** Deservedness = amount of happiness caused in others.',
      '**Therefore:** Deservedness is not a *second* value; it is just happiness measured differently.',
    ]},
    { type: 'paragraph', text: "The essayist's strategy is **reductive**: they take the opponent's concept (deservedness) and show it can be fully explained in terms of the essayist's own concept (happiness). Once the reduction is complete, the opponent's challenge dissolves because the alleged \"second value\" turns out to be the same value the essayist already endorsed." },

    { type: 'h4', text: 'Step 3: Pre-Phrase the Answer' },
    { type: 'paragraph', text: "The logical consequence of the rebuttal premise is: the concept of deserving happiness is itself *defined by* happiness. Therefore, the opponent has not identified a second intrinsic value \u2014 they have merely identified a different *application* of the same value." },

    { type: 'callout', title: 'Pre-Phrase', variant: 'tip', text: "\"...therefore, the judgment that a person deserves happiness is itself a judgment about happiness, not about a separate value.\"" },

    { type: 'h4', text: 'Step 4: Evaluate Each Answer' },
    { type: 'paragraph', text: "Apply the Redefinition Test to each choice: does this answer correctly state the consequence of the essayist's redefinition of deservedness?" },

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) the notion that people can be deserving of happiness is ultimately incoherent', text: "The essayist does not claim that deservedness is *incoherent*. On the contrary, the essayist gives it a precise definition (happiness brought to others). The rebuttal works by redefining deservedness, not by dismissing it as meaningless. This answer mischaracterizes the essayist's strategy.", badge: 'Mischaracterization', badgeColor: 'red' },
      { title: '(B) people do not actually value happiness as much as they think they do', text: "This directly **contradicts** the essayist's thesis that happiness is the only intrinsic value. The essayist's entire argument is built on the premise that happiness is supremely important. An answer that undermines this premise destroys the argument it is supposed to complete.", badge: 'Contradiction', badgeColor: 'red' },
      { title: '(C) the judgment that a person deserves to be happy is itself to be understood in terms of happiness', text: "This perfectly captures the consequence of the redefinition. The rebuttal premise states that deservedness is measured by happiness caused. The logical consequence is that judgments about deservedness are really judgments about happiness. This means the opponent has not found a second intrinsic value \u2014 deservedness reduces to happiness. **Passes the Redefinition Test.**", badge: 'Correct', badgeColor: 'green' },
      { title: '(D) the only way to be assured of happiness is to bring happiness to those who have done something to deserve it', text: "This shifts from a **philosophical definition** to **practical advice** about how to achieve happiness. The argument is about the *nature* of value, not about strategies for becoming happy. This answer operates at the wrong level of abstraction.", badge: 'Wrong Level', badgeColor: 'red' },
      { title: '(E) a truly bad person cannot actually be very happy', text: "The argument is about whether we *approve* of a bad person's happiness, not about whether a bad person is *capable* of being happy. This answer addresses a factual question (\"Can bad people be happy?\") when the argument is about a value question (\"Is there more than one intrinsic value?\"). It also introduces an empirical claim the stimulus does not support.", badge: 'Wrong Question', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: Summary Table' },
    { type: 'table', headers: ['Answer', 'What It Claims', 'Matches Rebuttal Logic?', 'Verdict'], rows: [
      ['(A) Deservedness is incoherent', 'Dismisses the concept', '\u2717 \u2014 Essayist redefines it, not dismisses', 'Mischaracterization'],
      ['(B) People don\'t value happiness', 'Undermines the thesis', '\u2717 \u2014 Contradicts the essayist\'s core claim', 'Contradiction'],
      ['**(C) Deservedness = happiness**', '**Reduces opponent\'s concept**', '**\u2713 \u2014 Exactly the consequence of the rebuttal**', '**Correct \u2713**'],
      ['(D) Practical advice on happiness', 'How to become happy', '\u2717 \u2014 Wrong level of abstraction', 'Scope Shift'],
      ['(E) Bad people can\'t be happy', 'Empirical claim about happiness', '\u2717 \u2014 Not the argument\'s question', 'Wrong Question'],
    ]},

    { type: 'paragraph', text: "Notice the pattern: the correct answer restates the **logical consequence** of the rebuttal premise in general terms. Wrong answers either mischaracterize the strategy (A), contradict the thesis (B), shift to practical advice (D), or address a different question entirely (E). Only (C) stays within the philosophical framework and articulates what follows from the redefinition." },

    { type: 'hr' },

    { type: 'h3', text: 'Philosophical Rebuttal: Common Traps' },
    { type: 'paragraph', text: "Philosophical Rebuttal completions generate a specific set of traps. Be alert to these:" },
    { type: 'breakdown', labels: { title: 'Trap', text: 'How to Spot It' }, items: [
      { title: 'Dismissal vs. Redefinition', text: 'The answer claims the opponent\'s concept is **incoherent or meaningless**, when the author actually gives it a **specific definition**. To spot this: check whether the author provides a definition for the opponent\'s term. If so, the author is redefining, not dismissing.', badge: 'Most Common', badgeColor: 'blue' },
      { title: 'Thesis Contradiction', text: 'The answer **undermines the author\'s own position**. In the heat of a complex philosophical argument, it is easy to lose track of which side the author is on. To spot this: re-read the first sentence and verify the answer is consistent with it.', badge: 'Common', badgeColor: 'blue' },
      { title: 'Abstraction Mismatch', text: 'The answer shifts from philosophical analysis to **practical advice, empirical claims, or normative recommendations**. To spot this: check whether the answer operates at the same level of abstraction as the argument. If the argument is about the nature of value, the conclusion should be about the nature of value.', badge: 'Common', badgeColor: 'blue' },
      { title: 'Wrong Question', text: 'The answer addresses a different philosophical question than the one under debate. To spot this: identify the specific question the opponent raised and verify the answer responds to *that* question, not a related but distinct one.', badge: 'Moderate', badgeColor: 'slate' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Key Lessons from This Drill' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. Map the dialectical structure.** Every Philosophical Rebuttal has three voices: the author's thesis, the opponent's challenge, and the author's counter-response. Identify all three before attempting to complete the argument.\n\n**2. The rebuttal premise contains the key.** The sentence immediately before \"Therefore\" is almost always the author's decisive move. In this drill, \"the happiness people deserve is determined by the amount of happiness they bring to others\" is the premise that makes the conclusion possible. Understand this sentence completely before evaluating answer choices.\n\n**3. Reduction is the strategy.** When an author refutes a counterargument by redefining the opponent's key term in terms of the author's own concept, the conclusion must state that the opponent's concept *reduces to* the author's. The opponent has not found something new; they have found a disguised version of the same thing.\n\n**4. Stay at the right level of abstraction.** Philosophical arguments conclude with philosophical claims, not practical advice. If an answer tells you what to *do* rather than what is *true about the nature of value*, it is operating at the wrong level.\n\n**5. Verify consistency with the thesis.** The conclusion must support the author's original position. If it undermines, qualifies, or abandons the thesis, it cannot be the correct completion." },
  ]
};
