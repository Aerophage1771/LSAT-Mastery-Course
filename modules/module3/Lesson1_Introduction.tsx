import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "3-1",
  title: "Introduction to Method of Reasoning",
  content: [
    { type: 'h2', text: 'MODULE 3: Method of Reasoning' },
    { type: 'paragraph', text: '**Question Goal:** Identify the specific rhetorical or logical strategy the author uses to reach the conclusion. Are they drawing an analogy, ruling out alternatives, providing a counterexample, or appealing to a principle? Your task is to describe *how* the argument is constructed, not *what* it concludes.' },

    { type: 'hr' },

    { type: 'h3', text: 'Why This Matters' },
    { type: 'paragraph', text: "Method of Reasoning is the bridge between identification skills and evaluation skills. In Module 1, you learned to label an argument's parts. In Module 2, you learned to find the main conclusion. Now you must describe the *strategy* connecting those parts — the logical design of the argument. This skill is a prerequisite for every advanced question type you will encounter." },
    { type: 'callout', variant: 'tip', title: 'Dependency Chain', text: "Method of Reasoning feeds directly into these downstream question types:\n\n• **Flaw** — A flaw question asks you to identify a *bad* method of reasoning. You cannot spot a flawed analogy unless you first recognize the method *is* an analogy.\n• **Parallel Reasoning** — You must match the *method* of one argument to another. The content changes; the strategy must stay the same.\n• **Parallel Flaw** — Combines method identification with flaw detection.\n• **Weaken / Strengthen** — Understanding *how* an argument works tells you where it is vulnerable or where it can be reinforced.\n\nMastering Method of Reasoning pays compound interest across the entire LR section." },

    { type: 'h3', text: 'Frequency & Difficulty' },
    { type: 'paragraph', text: "Method of Reasoning questions appear on most scored LR sections, typically 1–2 per section. They range from straightforward (identify a clear analogy) to challenging (describe a multi-step argumentative strategy in abstract terms). The difficulty comes not from the reasoning itself, but from translating a concrete argument into an abstract description." },

    { type: 'hr' },

    { type: 'h3', text: 'Recognizing the Question' },
    { type: 'paragraph', text: "You can identify a Method of Reasoning question because the stem asks about the argument's strategy, technique, or method — not about a specific sentence's role (Argument Part) or the conclusion's content (Main Conclusion). Look for these patterns:" },
    { type: 'table', headers: ['Question Stem Pattern', 'Key Signal'], rows: [
      ['"The argument proceeds by..."', 'Asks *how* the argument moves from evidence to conclusion'],
      ['"Which one of the following most accurately describes the method of reasoning used in the argument?"', 'Directly asks for the **method**'],
      ['"The argument derives its conclusion by..."', 'Asks how the conclusion is **derived**'],
      ['"Which one of the following is an argumentative strategy employed by the author?"', 'Asks for the **strategy**'],
      ['"The environmentalist uses which one of the following argumentative techniques?"', 'Asks for the **technique** (often in dialogue format)'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Core Concept: Strategy vs. Content' },
    { type: 'paragraph', text: "The fundamental skill for Method of Reasoning questions is separating the argument's **strategy** (the abstract logical pattern) from its **content** (the specific subject matter). The correct answer will always describe the logical pattern, not restate the conclusion." },

    { type: 'paragraph', text: "Consider this everyday argument:" },
    { type: 'blockquote', text: '"My car won\'t start. Since the battery and the starter are both new, the problem must be a faulty alternator."' },

    { type: 'breakdown', labels: { title: 'Layer', text: 'Analysis' }, items: [
      { title: 'Content (What)', text: 'The argument is about a car, a battery, a starter, and an alternator. These are the specific nouns and facts.', badge: 'Surface', badgeColor: 'slate' },
      { title: 'Strategy (How)', text: 'The argument reaches its conclusion by **ruling out alternative causes**. Two possible explanations are eliminated, leaving only one option. This is the abstract pattern.', badge: 'Deep', badgeColor: 'indigo' },
    ]},

    { type: 'paragraph', text: 'The correct answer for a Method question about this stimulus would look like *"The argument supports a conclusion by ruling out other possible causes,"* not *"The argument concludes that the alternator is broken."* You must describe the **pattern** of reasoning, not restate the conclusion.' },

    { type: 'callout', variant: 'default', title: 'The Abstract Description Technique', text: "Train yourself to translate every argument into an abstract description before looking at answer choices. Strip out the nouns and replace them with placeholders:\n\n• *\"The car won't start → The battery and starter are new → Must be the alternator\"*\n• Becomes: *\"Identifies a set of possible causes, eliminates all but one, and concludes that the remaining option must be correct.\"*\n\nThis mental translation is the single most important skill for Method of Reasoning questions." },

    { type: 'hr' },

    { type: 'h2', text: 'Method vs. Argument Part' },
    { type: 'paragraph', text: "Method of Reasoning and Argument Part (Module 1) are closely related but ask fundamentally different things. Understanding this distinction prevents confusion on test day:" },
    { type: 'table', headers: ['Feature', 'Method of Reasoning (Module 3)', 'Argument Part (Module 1)'], rows: [
      ['**What it asks**', 'Describe the overall logical strategy', 'Identify the role of a *specific quoted sentence*'],
      ['**Target**', 'The argument as a whole (describe the design)', 'One particular sentence (label its function)'],
      ['**Answer choices**', 'Abstract strategy descriptions', 'Abstract role descriptions'],
      ['**Example answer**', '"Draws an analogy to show the reasoning is flawed"', '"It is a premise offered in support of the main conclusion"'],
      ['**Core skill**', 'Translating concrete reasoning into abstract patterns', 'Mapping the flow of support and labeling each part'],
    ]},
    { type: 'callout', variant: 'default', title: 'The Connection', text: "Think of it this way: Argument Part asks *\"What does this sentence do?\"* Method of Reasoning asks *\"How does the whole argument work?\"* Argument Part labels the bricks; Method of Reasoning describes the architecture." },

    { type: 'hr' },

    { type: 'h2', text: 'Common Method Categories — Preview' },
    { type: 'paragraph', text: "Most arguments on the LSAT use one of a small number of recurring strategies. You will study each in depth in later lessons. Here is a quick preview of the major categories with their approximate frequencies:" },

    { type: 'table', headers: ['Method Category', 'Frequency', 'What It Does', 'Example Indicator Language'], rows: [
      ['**Argument by Analogy**', '~23%', 'Compares two situations to transfer a conclusion from one to the other', '"just as," "similarly," "it would be like," "by that logic"'],
      ['**Highlighting Consequences**', '~17%', 'Argues for/against a proposal by predicting outcomes', '"would result in," "would lead to," "suppose X were true"'],
      ['**Causal Reasoning**', '~14%', 'Offers or challenges a cause for an observed effect', '"is caused by," "is the result of," "an alternative explanation"'],
      ['**Challenging an Assumption**', '~11%', 'Exposes and attacks a hidden premise', '"assumes without justification," "presupposes," "takes for granted"'],
      ['**Applying a Principle**', '~8%', 'Moves from a general rule to a specific case (or vice versa)', '"according to the principle," "by definition," "it follows from the rule"'],
      ['**Process of Elimination**', '~6%', 'Rules out all but one option', '"the only remaining possibility," "rules out," "cannot be X because"'],
      ['**Counterexample**', '~5%', 'Disproves a universal claim with a single contrary instance', '"but consider the case of," "there is at least one instance where"'],
      ['**Appeal to Authority**', '~4%', 'Cites an expert or authoritative source', '"experts have shown," "according to researchers," "studies demonstrate"'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Indicator Words & Phrases for Methods' },
    { type: 'paragraph', text: "Just as premise and conclusion indicators help you map argument structure (Modules 1–2), certain phrases signal which *method* an argument is using. Train yourself to spot these:" },

    { type: 'table', headers: ['Indicator Language', 'Likely Method'], rows: [
      ['"Just as X, so too Y" / "Similarly" / "By that logic"', '**Analogy**'],
      ['"But consider the case of..." / "For example, [specific instance]"', '**Counterexample**'],
      ['"This would lead to..." / "The result would be..."', '**Highlighting Consequences**'],
      ['"The only remaining option is..." / "Since it cannot be X..."', '**Process of Elimination**'],
      ['"An alternative explanation is..." / "Could instead be caused by..."', '**Alternative Explanation** (Causal)'],
      ['"This assumes that..." / "Takes for granted that..."', '**Challenging an Assumption**'],
      ['"According to the principle..." / "By definition..."', '**Applying a Principle**'],
      ['"Experts have determined..." / "Research shows..."', '**Appeal to Authority**'],
    ]},

    { type: 'callout', variant: 'tip', title: 'Indicators Are Clues, Not Guarantees', text: "Indicator phrases narrow your search, but always verify by examining the argument's actual logical structure. A phrase like \"for example\" could introduce a counterexample *or* a supporting illustration — context determines which method is being used." },

    { type: 'hr' },

    { type: 'h2', text: 'Your First Method of Reasoning Question' },
    { type: 'paragraph', text: "Let's put everything together with a concrete practice question. Read the stimulus, identify the strategy, and translate it into abstract terms before looking at the answer choices." },

    { type: 'question-card',
      id: 'MR-3-1-001',
      questionType: 'Method of Reasoning',
      difficulty: 'easy',
      stimulus: "Meteorologist: The town council claims that last summer's water shortage was caused by unusually low rainfall. But rainfall records show that precipitation last summer was only 5% below the ten-year average. The water shortage is better explained by the fact that the town's population grew by 25% over the same period, dramatically increasing demand.",
      question: "The meteorologist uses which one of the following argumentative strategies?",
      options: [
        "(A) Showing that the town council's conclusion is based on inaccurate data",
        "(B) Presenting an alternative explanation for the phenomenon in question (Correct)",
        "(C) Drawing an analogy between the water shortage and a similar event in another town",
        "(D) Providing a counterexample to the town council's general claim about rainfall",
        "(E) Arguing that the town council's recommendation would have negative consequences",
      ],
    },

    { type: 'h3', text: 'Walkthrough' },
    { type: 'process', title: 'Solving Step by Step', steps: [
      '**Identify the structure:** The town council says low rainfall caused the shortage. The meteorologist disagrees and offers a different cause: population growth.',
      '**Translate to abstract terms:** The argument rejects one proposed cause (rainfall) by weakening the evidence for it, then offers a different cause (population growth) for the same observed effect (water shortage).',
      '**Prephrase:** "The meteorologist provides an alternative explanation for the same phenomenon."',
      '**Match to answers:** Choice (B) — "Presenting an alternative explanation for the phenomenon in question" — matches our prephrase perfectly.',
    ]},

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) Showing that the conclusion is based on inaccurate data', text: 'The meteorologist does not say the rainfall data is inaccurate. In fact, the meteorologist *uses* the rainfall records — the data is accepted as accurate. The meteorologist disputes the *interpretation*, not the data.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) Presenting an alternative explanation for the phenomenon in question', text: 'The meteorologist agrees the shortage happened but offers a different cause (population growth vs. low rainfall). This is a textbook alternative explanation.', badge: 'Correct', badgeColor: 'green' },
      { title: '(C) Drawing an analogy between the water shortage and a similar event in another town', text: 'No comparison to another town is made. The meteorologist stays within the same situation and offers a different cause.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) Providing a counterexample to the town council\'s general claim about rainfall', text: 'The town council makes a specific claim about this town, not a universal generalization. Counterexamples disprove general rules; that is not what happens here.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) Arguing that the recommendation would have negative consequences', text: 'The town council does not make a recommendation in this argument — they offer a causal explanation. The meteorologist does not discuss consequences.', badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• Method of Reasoning is a **descriptive** question type. You are not evaluating whether the argument is good or bad — you are describing *how* it works.\n• The core skill is **separating strategy from content**: translate the argument's specific nouns and facts into an abstract logical pattern.\n• Method of Reasoning is the bridge between identification skills (Modules 1–2) and evaluation skills (Flaw, Weaken, Strengthen).\n• Most arguments use one of ~8 recurring strategies: Analogy, Consequences, Causal Reasoning, Challenging Assumptions, Applying Principles, Elimination, Counterexample, and Appeal to Authority.\n• Indicator phrases help you spot the method, but always verify by examining the logical structure of the argument." },
  ]
};
