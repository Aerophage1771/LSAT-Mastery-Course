import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: "10-2",
  title: "Step-by-Step Guide",
  content: [
    { type: 'h2', text: 'The 4-Step Method for Sufficient Assumption Questions' },
    { type: 'paragraph', text: "This lesson provides a complete, repeatable method for solving any Sufficient Assumption question. The goal is the same every time: understand the author's argument, find the logical gap, and find the one answer choice that, when added as a new premise, makes the conclusion 100% certain. Each step below includes concrete guidance, tips for tricky situations, and key insights." },

    { type: 'callout', variant: 'tip', title: 'Timing', text: "Budget roughly **1 minute and 45 seconds** per Sufficient Assumption question. SA questions often appear in the harder half of the section and tend to involve more complex logical structures than Strengthen questions. Steps 1–3 (reading, diagramming, and gap-finding) should take about 60 seconds combined. Step 4 (evaluating choices) should take about 45 seconds. If conditional diagramming is needed, expect the total to be closer to 2 minutes. Resist the urge to rush — accuracy matters far more than speed on these high-value questions." },

    { type: 'hr' },

    { type: 'h3', text: 'Overview' },
    { type: 'process', title: 'The 4-Step Method', steps: [
      '**Step 1 — Break Down the Argument:** Read the stimulus, isolate the conclusion and premises, and understand the author\'s reasoning.',
      '**Step 2 — Diagram and Identify the Gap:** Convert conditional relationships into a diagram if applicable. Find the logical leap between the evidence and the conclusion.',
      '**Step 3 — Prephrase the Bridge:** Predict the type of statement that would close the gap and guarantee the conclusion.',
      '**Step 4 — Evaluate and Eliminate:** Test each answer choice against the Sufficient Assumption Equation (Premises + Answer = Conclusion guaranteed). Eliminate traps systematically.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "Your first move is always to identify the building blocks of the argument. Read the stimulus carefully and isolate two parts:" },
    { type: 'list', items: [
      '**Find the Conclusion:** What is the author trying to prove? In SA questions, the conclusion is the claim that currently lacks full support. Look for conclusion indicators: *therefore, thus, so, hence, consequently, it follows that.*',
      '**Find the Premises:** What evidence or rules does the author provide? These are the facts and conditions that are already established. Look for premise indicators: *because, since, given that, for, after all.*',
    ]},
    { type: 'paragraph', text: "Pay especially close attention to the **specific terms** used in the premises versus the conclusion. SA questions often hinge on one or two words that appear in the conclusion but not in the premises (or vice versa). These mismatched terms are the key to spotting the gap." },

    { type: 'callout', variant: 'default', title: 'When This Step Gets Tricky', text: "Some SA stimuli are dense with conditional language and definitions. Don't panic — the argument's core structure is usually simple. Strip away the detail and ask: \"What is the author's main point, and what are they using to support it?\" Complex SA arguments often have simple gaps hidden inside elaborate logical scaffolding." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 2: Diagram and Identify the Gap' },
    { type: 'paragraph', text: "Once the parts are identified, translate the argument into a clearer logical form. For SA questions, this step is more important than for any other question type because the correct answer must be *logically precise*." },

    { type: 'h3', text: 'The Conditional Diagramming Technique' },
    { type: 'paragraph', text: "Many SA questions involve conditional logic — statements using \"if,\" \"only if,\" \"all,\" \"every,\" \"no,\" \"unless,\" \"requires,\" or \"must.\" When you spot these keywords, diagram the relationships using arrows:" },
    { type: 'table', headers: ['Statement', 'Diagram', 'Translation'], rows: [
      ['"All A are B"', 'A → B', 'If A, then B'],
      ['"If A then B"', 'A → B', 'If A, then B'],
      ['"A only if B"', 'A → B', 'If A, then B (B is necessary for A)'],
      ['"Only A are B"', 'B → A', 'If B, then A (reverses the order)'],
      ['"No A are B"', 'A → ~B', 'If A, then not B'],
      ['"A unless B"', '~B → A', 'If not B, then A'],
      ['"A requires B"', 'A → B', 'If A, then B (B is necessary for A)'],
    ]},
    { type: 'paragraph', text: "Once you have diagrammed the premises and the conclusion, look for a **break in the chain**. If the premises give you A → B and C → D, but the conclusion requires A → D, then the missing link is B → C. The correct answer will supply this link." },
    { type: 'callout', variant: 'tip', title: 'When to Diagram', text: "Diagram whenever the argument contains two or more conditional statements. If the argument is non-conditional (e.g., it relies on a conceptual gap or a general principle), diagramming may not be necessary — use conceptual analysis instead. About **60–70%** of SA questions benefit from diagramming; the rest are better handled by identifying the conceptual gap directly." },

    { type: 'h3', text: 'Identifying the Gap' },
    { type: 'paragraph', text: "With the reasoning clearly laid out (diagrammed or paraphrased), pinpoint the disconnect. Ask yourself:" },
    { type: 'list', items: [
      '**"What new concept appears in the conclusion that wasn\'t fully established in the premises?"** — This is the most common gap. A new term, category, or idea shows up in the conclusion without a bridge from the premises.',
      '**"What link in the conditional chain is missing?"** — If you diagrammed the argument, look for a gap between two arrows. The missing link is your answer.',
      '**"What unstated rule would make this conclusion inevitable?"** — Imagine you are a judge deciding whether the argument is logically valid. What additional rule would you need to rule in the conclusion\'s favor with certainty?',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Step 3: Prephrase the Bridge' },
    { type: 'paragraph', text: "Before looking at the answer choices, articulate what the correct answer must do. SA questions are highly prephrasable — the gap is structural, not ambiguous. Complete this sentence:" },
    { type: 'paragraph', text: "***\"To make the conclusion guaranteed, I need a rule that says...\"***" },
    { type: 'paragraph', text: "Your prephrase should be a clear, specific statement. Unlike Strengthen questions (where the prephrase can be directional), an SA prephrase should be close to an exact logical statement." },

    { type: 'h4', text: 'Prephrase Examples by Gap Type' },
    { type: 'table', headers: ['Gap Type', 'Prephrase Template'], rows: [
      ['New concept in conclusion', '"If [premise concept], then [conclusion concept]" — a definitional bridge'],
      ['Broken conditional chain', '"[End of known chain] → [Start of next chain]" — the missing link'],
      ['Scope expansion', '"The stated rules are the ONLY rules that apply" — an exclusivity claim'],
      ['Unstated binary', '"If not X, then Y" — eliminates the third option'],
      ['Missing classification', '"Anything with [features in premises] counts as [category in conclusion]"'],
    ]},

    { type: 'callout', variant: 'default', title: 'Prephrase Precision Matters', text: "On SA questions, your prephrase should be **as specific as possible**. On Strengthen questions, a directional prephrase (\"something that rules out alternative causes\") is fine. On SA questions, aim for a concrete logical statement (\"B → C\"). The more precise your prephrase, the faster you will identify the correct answer — and the less likely you are to fall for a trap that addresses the right topic but gets the logical direction wrong." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 4: Evaluate and Eliminate' },
    { type: 'paragraph', text: "Scan the five choices looking for one that matches your prephrase. For each candidate, mentally insert it as a new premise and run the **Sufficient Assumption Equation**:" },
    { type: 'paragraph', text: "**Premises + This Answer = Is the conclusion 100% guaranteed?**" },
    { type: 'paragraph', text: "If yes, you have found the correct answer. If no — if you can imagine any scenario where the premises and the answer are true but the conclusion is still false — eliminate the choice and move on." },

    { type: 'h3', text: 'Common Wrong Answer Patterns' },
    { type: 'paragraph', text: "Wrong answers on SA questions fail in predictable ways. Recognizing these traps lets you eliminate quickly and with confidence." },
    { type: 'table', headers: ['Trap Type', 'What It Does', 'How to Spot It'], rows: [
      ['**Mistaken Reversal**', 'Uses the correct terms but connects them in the wrong logical direction. You need A → B, but the answer gives B → A.', 'Diagram both the answer and the needed bridge. If the arrows point the wrong way, eliminate. This is the **#1 most common trap** on SA questions.'],
      ['**Mistaken Negation**', 'Negates both sides of the needed conditional. You need A → B, but the answer gives ~A → ~B.', 'Check the polarity of each term. If the answer negates the terms you need, it is logically invalid.'],
      ['**The Restatement**', 'Simply paraphrases a premise or restates something already derivable from the premises. Adds nothing new.', 'Ask: "Does this tell me something I didn\'t already know from the stimulus?" If not, it cannot bridge the gap.'],
      ['**Necessary but Not Sufficient**', 'Provides a statement that is probably required for the conclusion but is too weak to guarantee it. Uses hedging words like "some," "can," or "sometimes."', 'Check the strength: does the answer close the gap *completely*, or does it just narrow it? If it merely helps, it belongs on a Strengthen question, not an SA question.'],
      ['**Out of Scope**', 'Introduces a concept that is irrelevant to the core logical structure of the argument.', 'Check: does this answer connect the *specific* terms in the premises to the *specific* terms in the conclusion? If it addresses a different topic entirely, eliminate.'],
    ]},

    { type: 'callout', variant: 'tip', title: 'The Reversal Trap', text: "The Mistaken Reversal is **the single most common trap on SA questions**. Because SA questions often involve conditional logic, test-makers know that many students will confuse the direction of the conditional. If the argument requires \"All B are C\" (B → C), expect to see a trap answer that says \"All C are B\" (C → B). Always diagram the answer choice and compare it to the gap you identified. The arrows must point the right way." },

    { type: 'hr' },

    { type: 'h2', text: 'Full Worked Example' },
    { type: 'paragraph', text: "Let's apply all four steps to a complete Sufficient Assumption question from start to finish." },

    { type: 'question-card',
      id: 'WE-10-2-001',
      questionType: 'Sufficient Assumption',
      difficulty: 'medium',
      stimulus: "A restaurant critic should not review any restaurant in which the critic has a financial interest. Girard, a prominent food writer, owns stock in the company that operates Café Lumière. Therefore, Girard should not review Café Lumière.",
      question: "The conclusion follows logically if which one of the following is assumed?",
      options: [
        "(A) Girard has reviewed other restaurants operated by the same company.",
        "(B) Girard is a restaurant critic. (Correct)",
        "(C) Owning stock in a company that operates a restaurant constitutes a financial interest in that restaurant.",
        "(D) No one who has a financial interest in a restaurant can write an unbiased review of it.",
        "(E) Girard has never disclosed his stock ownership to his readers.",
      ],
    },

    { type: 'h3', text: 'Applying the 4-Step Method' },

    { type: 'process', title: 'Step-by-Step Walkthrough', steps: [
      '**Step 1 — Break Down the Argument:**\n• **Conclusion:** Girard should not review Café Lumière.\n• **Premise 1:** A restaurant *critic* should not review any restaurant in which the *critic* has a *financial interest*.\n• **Premise 2:** Girard owns stock in the company that operates Café Lumière.\n• **Structure:** The argument applies a rule about critics to Girard, who is described as a "food writer" — not explicitly as a "critic."',
      '**Step 2 — Diagram and Identify the Gap:**\nThe rule says: **Critic + Financial Interest → Should Not Review.**\nFor the conclusion to follow, we need two things:\n(a) Girard is a "critic" (Premise 1 applies to critics, but Girard is only called a "food writer").\n(b) Girard has a "financial interest" (Premise 2 says he owns stock, but the rule says "financial interest").\nThere are actually two possible gaps here. A sufficient assumption that fills *either* gap could work, but only one will appear in the answers.',
      '**Step 3 — Prephrase:**\nPossible prephrases:\n• "Girard is a restaurant critic" — This would make Premise 1 apply to Girard.\n• "Owning stock constitutes a financial interest" — This would make the rule\'s condition satisfied.\nEither statement would close one of the two gaps. Let\'s look for both in the answers.',
      '**Step 4 — Evaluate:**\nScan the choices for a statement that closes either the "critic" gap or the "financial interest" gap.',
    ]},

    { type: 'h3', text: 'Answer Choice Breakdown' },

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) Girard has reviewed other restaurants operated by the same company.', text: 'What Girard has done in the past is irrelevant to whether he *should* review Café Lumière. The rule is about what he should do, not what he has done. **No impact on the logical structure.**', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) Girard is a restaurant critic.', text: 'This closes the "critic" gap. The rule says critics with financial interests should not review. If Girard is a critic, and we accept that owning stock in the operating company gives him a financial interest in the restaurant, the rule applies directly and the conclusion follows.\n\n**Logic Check:** Girard is a critic (Answer B) + Girard has a financial interest (from Premise 2 — stock ownership in the operating company is a financial interest) + Critics with financial interests should not review (Premise 1) → Girard should not review Café Lumière. ✓\n\n*Note:* This answer requires us to treat stock ownership as a "financial interest," which is a natural reading of the term. The test-makers intend this as the correct answer because the term "financial interest" is broad enough to obviously encompass stock ownership.', badge: 'Correct', badgeColor: 'green' },
      { title: '(C) Owning stock in a company that operates a restaurant constitutes a financial interest in that restaurant.', text: 'This closes the "financial interest" gap — but it does not close the "critic" gap. Even if we know Girard has a financial interest, Premise 1 only applies to *critics*, and Girard is described as a "food writer." Without also knowing Girard is a critic, the rule does not apply to him, and the conclusion does not follow with certainty. This answer is **necessary but not sufficient on its own** (given how the test-makers constructed this particular argument).', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) No one who has a financial interest in a restaurant can write an unbiased review of it.', text: 'The conclusion is about what Girard *should* do, not about bias. Even if bias is inevitable, the rule about what critics "should" do might not apply to Girard (who may not be a critic). **Wrong concept — shifts from obligation to ability.**', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) Girard has never disclosed his stock ownership to his readers.', text: 'Disclosure is irrelevant to whether the rule applies. The rule says critics with financial interests should not review — it doesn\'t make an exception for disclosed interests. **Outside the argument\'s scope.**', badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "The 4-Step Method gives you a reliable, repeatable process: **Break Down → Diagram/Find the Gap → Prephrase → Evaluate.**\n\nDiagram conditional relationships whenever they appear. Most SA questions involve at least one conditional statement, and the correct answer almost always supplies a missing piece of the conditional chain.\n\nPrphrase with precision. On SA questions, aim for a specific logical statement rather than a general direction.\n\nWatch for the **Mistaken Reversal** — the most common and most dangerous trap on SA questions. If you need A → B, expect to see B → A among the answer choices.\n\nAlways run the **Sufficient Assumption Equation**: Premises + Answer = Conclusion guaranteed? If you can construct any counterexample, the answer is not sufficient." },
  ]
};
