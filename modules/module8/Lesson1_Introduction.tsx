import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "8-1",
  title: "Introduction",
  content: [
    { type: 'h2', text: 'MODULE 8: Weaken' },
    { type: 'paragraph', text: '**Question Goal**\n\n**Identify a new piece of information that, if true, would damage the argument\'s reasoning.** Which statement makes the conclusion less likely to follow from the evidence provided?' },

    { type: 'hr' },

    { type: 'h3', text: 'Why This Matters' },
    { type: 'paragraph', text: "Weaken is one of the **most frequently tested** question types on the LSAT Logical Reasoning section. On a typical scored section, you will see two to four Weaken questions — sometimes more. Because of this high frequency, your ability to quickly and accurately identify weakeners has a direct and measurable impact on your overall score." },
    { type: 'paragraph', text: "Weaken questions also test a skill that underpins several other question types. The same gap-identification ability required here is essential for Strengthen, Evaluate, Necessary Assumption, and Sufficient Assumption questions. Mastering Weaken, therefore, does not just help you on Weaken questions — it accelerates your progress across the entire Logical Reasoning section." },
    { type: 'callout', variant: 'tip', title: 'Frequency', text: "Expect **2–4 Weaken questions per scored section**. Combined with Strengthen (which uses the same core skill in reverse), gap-based questions account for roughly one-third of all Logical Reasoning questions. Time invested here pays dividends across the board." },

    { type: 'hr' },

    { type: 'h3', text: 'Recognizing the Question' },
    { type: 'paragraph', text: 'You can recognize Weaken questions by the phrase "if true" combined with language pointing toward damage, doubt, or undermining. The stem always asks you to find the answer choice that hurts the argument.' },
    { type: 'table', headers: ['Question Stem Pattern', 'Key Signal'], rows: [
      ['"Which one of the following, if true, most seriously weakens the argument?"', 'Asks what **most weakens**'],
      ['"Which one of the following, if true, most undermines the reasoning above?"', 'Asks what **most undermines**'],
      ['"Which one of the following, if true, casts the most doubt on the conclusion drawn above?"', 'Asks what **casts doubt**'],
      ['"Which one of the following, if true, most seriously calls into question the claim made above?"', 'Asks what **calls into question**'],
      ['"Which one of the following, if true, most weakens the argument above?"', 'Standard **weakens** phrasing'],
      ['"Which one of the following, if true, is the most serious criticism of the plan outlined above?"', 'Asks for a **criticism** of a plan'],
    ]},
    { type: 'callout', variant: 'default', title: 'The "If True" Instruction', text: "The phrase \"if true\" is a powerful directive. You must treat every answer choice as a **factual statement**, no matter how unlikely it sounds in the real world. Your only job is to determine which of these five new facts does the most damage to the argument's conclusion. Never reject an answer choice because it seems implausible — on the LSAT, every answer choice is 100% true." },

    { type: 'hr' },

    { type: 'h2', text: 'The Gap Model' },
    { type: 'paragraph', text: "Every Weaken question is built on the same structural foundation: the **Gap Model**. The author states premises and draws a conclusion, and there is a logical gap between them — an unstated assumption, an unexplored alternative, or a missing piece of evidence. The correct weakener always exploits this gap." },
    { type: 'paragraph', text: "This is the same Gap Model that drives Strengthen and Evaluate questions. The only difference is what the correct answer does to the gap:" },
    { type: 'breakdown', labels: { title: 'Question Type', text: 'What the Correct Answer Does to the Gap' }, colWidth: 'equal', items: [
      { title: 'Strengthen', text: 'Finds the gap and **fills** it — provides information that makes the conclusion more likely to follow from the premises.', badge: 'Bridge the Gap', badgeColor: 'green' },
      { title: 'Weaken', text: 'Finds the gap and **widens** it — provides information that makes the conclusion less likely to follow from the premises.', badge: 'Widen the Gap', badgeColor: 'red' },
      { title: 'Evaluate', text: 'Finds the gap and **probes** it — asks a question whose answer could go either way.', badge: 'Probe the Gap', badgeColor: 'blue' },
    ]},
    { type: 'paragraph', text: "Because all three question types target the same gap, your approach to the stimulus is identical: find the conclusion, identify the premises, and locate the logical leap between them. The only difference is what you look for in the answer choices." },

    { type: 'hr' },

    { type: 'h2', text: 'Weaken vs. Flaw' },
    { type: 'paragraph', text: "Students often confuse Weaken questions with Flaw questions because both involve identifying problems with an argument. The distinction is critical:" },
    { type: 'table', headers: ['Feature', 'Flaw', 'Weaken'], rows: [
      ['What the question asks', 'Name the error in the argument\'s **existing** reasoning', 'Provide a **new fact** that exploits the error'],
      ['Answer format', 'Abstract description of the logical mistake (e.g., "takes for granted that…")', 'A concrete statement of fact (e.g., "Studies show that…")'],
      ['New information?', 'No — the answer describes what is already wrong', 'Yes — the answer introduces information from outside the stimulus'],
      ['Relationship to the gap', 'Labels the gap', 'Widens the gap with new evidence'],
    ]},
    { type: 'paragraph', text: "Think of it this way: a Flaw answer is a **diagnosis** (\"the argument commits the error of assuming correlation equals causation\"), while a Weaken answer is the **evidence** that proves the diagnosis is fatal (\"a third factor, C, actually caused both A and B\"). The Weaken answer gives you the specific fact that makes the gap matter." },

    { type: 'hr' },

    { type: 'h2', text: 'Weaken vs. Strengthen' },
    { type: 'paragraph', text: "Weaken and Strengthen are mirror-image question types. They target the same gap in the same argument but ask you to push in opposite directions." },
    { type: 'breakdown', labels: { title: 'Feature', text: 'Comparison' }, items: [
      { title: 'Same core skill', text: 'Both require you to find the conclusion, identify the premises, and locate the logical gap. The analysis of the stimulus is identical.', badge: 'Shared', badgeColor: 'blue' },
      { title: 'Opposite directions', text: 'A Strengthen answer fills the gap (makes the conclusion more likely). A Weaken answer widens the gap (makes the conclusion less likely). They are two sides of the same coin.', badge: 'Key Difference', badgeColor: 'indigo' },
      { title: 'Common trap', text: 'A frequent wrong-answer trap on Weaken questions is a choice that actually **strengthens** the argument. If you feel pulled toward an answer that helps the conclusion, double-check the question stem — you may have misread it.', badge: 'Watch Out', badgeColor: 'red' },
    ]},
    { type: 'callout', variant: 'tip', title: 'Flip Drill', text: "When practicing, try this exercise: after solving a Weaken question, ask yourself what the correct Strengthen answer would be for the same argument. This \"flip drill\" deepens your understanding of the gap and reinforces the mirror-image relationship between the two question types." },

    { type: 'hr' },

    { type: 'h2', text: 'Common Weakening Strategies' },
    { type: 'paragraph', text: "While every argument has a unique gap, the ways to exploit that gap tend to fall into a small number of recurring patterns. Learning these strategies gives you a mental toolkit for prephrasing weakeners before you look at the answer choices." },

    { type: 'table', headers: ['Strategy', 'How It Works', 'When to Use It'], rows: [
      ['**Alternative Cause**', 'Introduce a different cause (C) that could explain the observed effect (B), undermining the claim that A caused B.', 'The argument concludes that A caused B based on a correlation or a before/after observation.'],
      ['**Counterexample**', 'Provide a specific case where the argument\'s general rule fails — the premises hold but the conclusion does not.', 'The argument generalizes from evidence to a broad claim.'],
      ['**Attacking the Analogy**', 'Identify a relevant difference between two things the argument treats as comparable, showing the comparison is invalid.', 'The argument draws a conclusion about X based on what is true of Y, assuming X and Y are alike.'],
      ['**Undermining the Data**', 'Show that the evidence is flawed, biased, unrepresentative, or subject to a reporting error.', 'The argument relies on a study, survey, statistic, or sample as its primary evidence.'],
      ['**Negative Side Effect**', 'Show that a recommended plan has a cost, consequence, or obstacle that outweighs its benefit.', 'The argument recommends a course of action and assumes it will achieve its goal without problems.'],
      ['**Scope Shift Attack**', 'Show that the premises prove something narrower than what the conclusion claims — the evidence is about X but the conclusion is about the broader Y.', 'The conclusion uses broader language than the premises (e.g., "safe" vs. "safe for the heart").'],
    ]},

    { type: 'callout', variant: 'default', title: 'Strategy ≠ Formula', text: "These strategies are not rigid templates. Real LSAT questions often blend multiple patterns or present the gap in unexpected ways. Use these categories as starting points for your prephrase, not as a checklist to mechanically apply. The goal is to train your instinct for where arguments are vulnerable." },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'paragraph', text: "Let's apply everything from this lesson to a complete Weaken question." },

    { type: 'question-card',
      id: 'WE-8-1-001',
      questionType: 'Weaken',
      difficulty: 'easy',
      stimulus: "A city health department found that neighborhoods with more fast-food restaurants have higher rates of obesity. The department concluded that the prevalence of fast-food restaurants is a significant cause of obesity in those neighborhoods.",
      question: "Which one of the following, if true, most weakens the argument?",
      options: [
        "(A) Some residents of neighborhoods with many fast-food restaurants maintain a healthy weight.",
        "(B) Fast-food restaurants in the city have recently begun offering some lower-calorie menu options.",
        "(C) Fast-food restaurants tend to open in lower-income neighborhoods where residents already have limited access to grocery stores and fresh produce. (Correct)",
        "(D) The city's overall obesity rate has remained stable for the past five years.",
        "(E) Several neighborhoods with few fast-food restaurants also have relatively high obesity rates.",
      ],
    },

    { type: 'h3', text: 'Walkthrough' },

    { type: 'h4', text: 'Step 1: Find the Conclusion' },
    { type: 'paragraph', text: "The conclusion is: *\"The prevalence of fast-food restaurants is a significant cause of obesity.\"* The evidence is a correlation: neighborhoods with more fast-food restaurants have higher obesity rates." },

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "The argument assumes that the correlation between fast-food restaurants and obesity reflects a causal relationship — that the restaurants are causing the obesity. But correlations can arise from many sources. The gap is the classic **correlation-to-causation** leap: the author has not ruled out the possibility that a third factor is responsible for both the presence of fast-food restaurants and the high obesity rates." },

    { type: 'h4', text: 'Step 3: Prephrase the Weakener' },
    { type: 'paragraph', text: "Prephrase: *\"The argument would be undermined if something else — a third factor — could explain why both fast-food restaurants and obesity are concentrated in the same neighborhoods.\"*" },

    { type: 'h4', text: 'Step 4: Evaluate Choice (C)' },
    { type: 'paragraph', text: "Choice (C) states that fast-food restaurants open in neighborhoods where residents already have limited access to grocery stores and fresh produce. This provides a classic **alternative cause**: the limited access to healthy food (not the presence of fast-food restaurants per se) could be driving the obesity. The fast-food restaurants are a symptom of the same underlying condition (food deserts in lower-income areas), not the cause of the obesity. This directly widens the gap between the evidence and the conclusion." },

    { type: 'h4', text: 'Why the Other Choices Fail' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Why It Fails' }, items: [
      { title: '(A) Some residents maintain a healthy weight', text: 'The conclusion says fast food is a "significant cause," not the sole or universal cause. The existence of some healthy residents does not undermine the claim that fast food contributes to the overall rate. **Too weak — does not challenge the main causal claim.**', badge: 'Too Weak', badgeColor: 'red' },
      { title: '(B) Lower-calorie menu options', text: 'Recent menu changes do not address the existing correlation the study found. Even if menus are improving now, the data reflects the historical relationship. **Irrelevant to the current evidence.**', badge: 'Irrelevant', badgeColor: 'red' },
      { title: '(D) Stable overall obesity rate', text: 'The argument is about differences *between* neighborhoods, not about the city\'s overall trend over time. A stable citywide rate is consistent with some neighborhoods having higher rates and others having lower rates. **Wrong scope.**', badge: 'Wrong Scope', badgeColor: 'red' },
      { title: '(E) High obesity in some low-fast-food neighborhoods', text: 'This is tempting but insufficient. It shows that fast food is not the *only* cause of obesity — but the conclusion does not claim it is the only cause, just a "significant" one. **Does not directly challenge the causal claim about fast-food neighborhoods.**', badge: 'Tempting Trap', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Principles', text: "**1. The weakener does not have to destroy the argument.** It only needs to make the conclusion *less likely*. Even a modest reduction in the conclusion's probability is enough if it is the most damaging option among the five choices.\n\n**2. Every weakener exploits a gap.** Find the conclusion, find the premises, find the leap between them. The correct answer will target that leap.\n\n**3. Treat every answer as true.** Never reject an answer because it seems unlikely in the real world. Accept it as fact and test its impact on the argument.\n\n**4. Know your strategies.** Alternative cause, counterexample, attacking the analogy, undermining data, negative side effect, and scope shift attacks are the most common weapons. Use them to prephrase before reading the answer choices.\n\n**5. Weaken and Strengthen are mirrors.** If you understand one, you understand both. Practice flipping between them to deepen your gap-identification skills." },
  ]
};
