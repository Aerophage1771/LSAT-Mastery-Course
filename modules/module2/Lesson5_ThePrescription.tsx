import { Lesson } from '../../types';

export const Lesson5_ThePrescription: Lesson = {
  id: "2-5",
  title: "Lesson 2: The Prescription",
  content: [
    { type: 'h2', text: 'The Prescription — Deep Dive' },
    { type: 'paragraph', text: "A prescriptive argument moves beyond describing facts to make a **judgment** or recommend a **course of action**. The author's main conclusion isn't just about what *is* true, but what *should be* true, what is *wise* or *unwise*, or what *must be* done. This conclusion type accounts for approximately 25% of Main Conclusion questions." },

    { type: 'hr' },

    { type: 'h3', text: 'The Prescription Structure' },
    { type: 'paragraph', text: "Prescriptive arguments follow a consistent pattern. The author establishes a factual situation, then leaps to a normative judgment about what should or should not be done. Recognizing this structure lets you zero in on the conclusion instantly." },

    { type: 'process', title: 'The Prescription Framework', steps: [
      '**The Situation (Premises):** The author presents facts, a problem, or a set of circumstances. These are descriptive — they tell you what *is* the case.',
      '**The Bridge (Optional):** Sometimes the author includes an intermediate conclusion explaining *why* the situation is significant. This is a stepping-stone, not the main conclusion.',
      '**The Judgment (The Conclusion):** Based on the situation, the author issues a recommendation, value judgment, or call to action. This is the main conclusion. It tells you what *should be* the case.',
      '**The Rationale (Optional Premises):** The author may provide additional reasons supporting the judgment.',
    ]},

    { type: 'callout', variant: 'default', title: 'The Descriptive-to-Prescriptive Leap', text: "The defining feature of a Prescription is the **leap from \"is\" to \"ought.\"** The premises describe the world as it is; the conclusion says what should be done about it. This leap is also the argument's biggest vulnerability — which is why Prescription arguments are common targets for Flaw and Assumption questions in other modules." },

    { type: 'hr' },

    { type: 'h3', text: 'Prescriptive Language Indicators' },
    { type: 'paragraph', text: "The fastest way to identify a Prescription is to scan for prescriptive language. These words and phrases signal that the author is making a normative claim:" },

    { type: 'table', headers: ['Category', 'Indicator Words / Phrases', 'Example'], rows: [
      ['**Recommendation**', '*should, should not, ought to, must, needs to*', '"The city **should** invest in public transit."'],
      ['**Advisory**', '*it is advisable, it would be wise, it is prudent*', '"It **would be wise** to delay the merger."'],
      ['**Obligation**', '*is required, is necessary, is incumbent upon*', '"It **is necessary** to reform the curriculum."'],
      ['**Value Judgment**', '*unfair, unjust, unwise, imprudent, irresponsible*', '"This policy is **unfair** to low-income families."'],
      ['**Comparative Judgment**', '*it is better / worse that, preferable, superior*', '"Prevention is **preferable** to treatment."'],
      ['**Futility / Dismissal**', '*pointless, futile, unnecessary, a waste of*', '"Further debate on this issue is **pointless**."'],
    ]},

    { type: 'callout', variant: 'tip', title: 'The "Should" Spotlight', text: "The word **\"should\"** is the single strongest signal of a prescriptive conclusion. When you see \"should\" (or \"should not\") in a Main Conclusion stimulus, there is a very high probability that the sentence containing it is the main conclusion — or at minimum a sub-conclusion. Always verify with the Why Test, but \"should\" is your fastest clue." },

    { type: 'hr' },

    { type: 'h3', text: 'Prescription vs. Prediction' },
    { type: 'paragraph', text: "Students sometimes confuse Prescriptions with Predictions because both can appear after \"Therefore.\" The distinction is crucial:" },

    { type: 'table', headers: ['Feature', 'Prescription', 'Prediction'], rows: [
      ['**What it claims**', 'What *should* happen or what is *right/wrong*', 'What *will* happen or what *is* likely'],
      ['**Key words**', '*should, must, ought to, unfair, unwise*', '*will, is likely to, can be expected to*'],
      ['**Nature of claim**', '**Normative** — a value judgment or recommendation', '**Descriptive** — a forecast about the future'],
      ['**Can be proven wrong by facts alone?**', 'No — it\'s a matter of values and reasoning', 'Yes — future events can confirm or refute it'],
      ['**Example**', '"The government **should** ban single-use plastics."', '"Single-use plastics **will** be banned within a decade."'],
    ]},

    { type: 'callout', variant: 'default', title: 'Why This Matters', text: "If the conclusion says what *should* happen, it's a Prescription. If it says what *will* happen, it's a Prediction. This distinction affects how you evaluate answer choices: a Prescription answer should contain normative language, while a Prediction answer should contain predictive language. Mixing them up leads to trap answers." },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example: The Editorialist\'s Argument' },


    { type: 'h3', text: 'Step-by-Step Analysis' },

    { type: 'h4', text: 'Step 1: Map the Structure' },
    { type: 'breakdown', labels: { title: 'Sentence', text: 'Structural Role' }, items: [
      { title: '"There would seem to be little hazard for consumers... because the lumber is used outside where fumes cannot accumulate."', text: 'The author introduces a common viewpoint — that treated lumber seems safe outdoors. The hedging phrase "would seem to be" hints the author will challenge this. This is the **opposing view**.', badge: 'Opposing View', badgeColor: 'slate' },
      { title: '"However, immediate steps should be taken to determine the safety of these chemicals..."', text: 'The **pivot** ("However") followed by a prescriptive recommendation ("should be taken"). This is the **main conclusion**.', badge: 'Main Conclusion', badgeColor: 'indigo' },
      { title: '"...since consumers could ingest them."', text: 'A reason introduced by the premise indicator "since." This is **Premise 1** — why we should study the chemicals.', badge: 'Premise 1', badgeColor: 'slate' },
      { title: '"If the lumber is used for children\'s playground equipment, youngsters could put their mouths on the wood..."', text: 'A specific example illustrating how ingestion could occur. This is **Premise 2** (supporting detail).', badge: 'Premise 2', badgeColor: 'slate' },
      { title: '"...and if it is used to contain soil in a vegetable garden, the chemicals could leach into the soil."', text: 'Another specific example of the ingestion pathway. This is **Premise 3** (supporting detail).', badge: 'Premise 3', badgeColor: 'slate' },
    ]},

    { type: 'h4', text: 'Step 2: Apply the Why Test' },
    { type: 'paragraph', text: '**Candidate:** "Immediate steps should be taken to determine the safety of these chemicals."\n\n**Ask:** Why should we take these steps?\n**Answer:** Because consumers could ingest the chemicals — for example, through playground equipment or vegetable gardens.\n\n✓ The argument answers the "Why?" — confirmed as the main conclusion.\n\n**Does this candidate support anything else?** No — it is the final recommendation. Everything else flows toward it.' },

    { type: 'h4', text: 'Step 3: Prephrase' },
    { type: 'paragraph', text: '**Prephrase:** "We need to study whether the chemicals in treated lumber are safe for consumers."' },

    { type: 'h4', text: 'Step 4: Evaluate Answer Choices' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) The chemicals used in treated lumber are apparently not dangerous to the consumer.', text: 'This is the **opposing viewpoint** from the first sentence — the position the author is challenging, not supporting. The word "apparently" even echoes the hedging tone of "would seem to be."', badge: 'Trap: Opposing View', badgeColor: 'red' },
      { title: '(B) Treated lumber is as dangerous when used outdoors as it is when used indoors.', text: 'The argument never makes this **indoor vs. outdoor comparison**. The author only discusses outdoor use and the specific hazard of ingestion. This is completely out of scope.', badge: 'Trap: Out of Scope', badgeColor: 'red' },
      { title: '(C) The effects on humans from the chemicals in treated lumber should be studied.', text: 'This is a perfect **paraphrase** of the main conclusion. "The effects should be studied" is equivalent to "steps should be taken to determine the safety." Both are prescriptive recommendations using "should."', badge: 'Correct', badgeColor: 'green' },
      { title: '(D) Parents should not allow children to put their mouths on playground equipment.', text: 'This is a reasonable inference one might draw from the evidence, but it\'s **not the author\'s main point**. The playground example is a *premise* used to illustrate the ingestion risk. The conclusion is broader: study the chemicals.', badge: 'Trap: Premise / Too Narrow', badgeColor: 'red' },
      { title: '(E) Treated lumber is more dangerous than was once believed.', text: 'The argument calls for an **investigation**, not a final verdict. The author hasn\'t concluded that the lumber *is* dangerous — only that its safety *should be studied*. This answer is **too strong**.', badge: 'Trap: Distortion', badgeColor: 'red' },
    ]},

    { type: 'callout', variant: 'default', title: 'Notice the Prescription Signal', text: "The correct answer **(C)** contains the prescriptive word **\"should,\"** matching the prescriptive language in the stimulus (\"should be taken\"). When the stimulus contains a \"should\" conclusion, the correct answer will almost always echo that prescriptive framing. If no answer choice uses normative language, re-examine whether the argument is truly a Prescription." },

    { type: 'hr' },

    { type: 'h2', text: 'Wrong Answer Deep Dive' },
    { type: 'paragraph', text: "Prescription questions have their own characteristic traps. Here are the patterns to watch for:" },

    { type: 'table', headers: ['Trap Type', 'How It Works', 'This Question\'s Example'], rows: [
      ['**The Opposing View**', 'Restates the position the author argues against.', '(A) — restates the "seems safe" view the author challenges.'],
      ['**The Narrow Premise**', 'Picks one specific example used as evidence and states it as if it were the main point.', '(D) — focuses on the playground example, which is just one supporting detail.'],
      ['**The Distortion (Too Strong)**', 'Goes further than the author\'s conclusion. The author recommends study; the trap declares a verdict.', '(E) — says lumber "is more dangerous," but the author only says we should *investigate*.'],
      ['**Out of Scope**', 'Introduces a comparison or concept the argument never discusses.', '(B) — compares outdoor vs. indoor danger, which the argument doesn\'t address.'],
    ]},

    { type: 'callout', variant: 'tip', title: 'The Strength Calibration Rule', text: "Pay close attention to the **strength** of the conclusion. A common trap in Prescription questions is an answer that is **stronger** than the author's actual claim. \"We should study the chemicals\" (the real conclusion) is much weaker than \"the chemicals are dangerous\" (the distortion). Match the strength of your answer to the strength of the stimulus." },

    { type: 'hr' },

    { type: 'h2', text: 'The Prescription Combined with Rebuttal' },
    { type: 'paragraph', text: "Many Prescription arguments also contain a Rebuttal element — the author first challenges an existing view, then recommends an action. The editorialist example above is a perfect case: the author rebuts the \"seems safe\" view and then prescribes studying the chemicals." },
    { type: 'paragraph', text: "When you see this combination, the prescriptive recommendation is almost always the main conclusion, and the rebuttal is a sub-conclusion or premise supporting it. Use the Why Test to confirm:" },

    { type: 'breakdown', labels: { title: 'Question', text: 'Answer' }, colWidth: 'equal', items: [
      { title: 'Why should we study the chemicals?', text: "Because the \"seems safe\" view is wrong — consumers could ingest them. ✓ The rebuttal supports the prescription.", badge: 'Prescription = MC', badgeColor: 'indigo' },
      { title: "Why is the \"seems safe\" view wrong?", text: 'Because consumers could ingest the chemicals (playgrounds, gardens). ✓ The premises support the rebuttal.', badge: 'Rebuttal = Sub-C', badgeColor: 'blue' },
    ]},

    { type: 'callout', variant: 'default', title: 'Rule of Thumb', text: "When an argument contains both a Rebuttal and a Prescription, the **Prescription is usually the main conclusion** and the Rebuttal is a stepping-stone that supports it. The Prescription is the \"final destination\" — it's the actionable takeaway the author wants you to accept." },

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• **Look for Prescriptive Language:** Words like \"should,\" \"must,\" \"ought to,\" and value judgments like \"unwise\" or \"unfair\" are the strongest clues for a prescriptive conclusion.\n• **Identify the Pivot:** In arguments that combine Rebuttal with Prescription, the main conclusion often follows a contrast word like \"But\" or \"However.\"\n• **Distinguish Conclusion from Premise:** The *reasons* for a recommendation are the premises. The *recommendation itself* is the conclusion.\n• **Prescription vs. Prediction:** \"Should\" = Prescription (normative). \"Will\" = Prediction (descriptive). Don't confuse them.\n• **Calibrate Strength:** The correct answer must match the strength of the stimulus. A recommendation to \"study\" something is weaker than a claim that something \"is dangerous.\"" },
  ]
};
