import { Lesson } from '../../types';

export const Lesson7_ReferenceGuide: Lesson = {
  id: "13-7",
  title: "Reference Guide",
  content: [
    { type: 'h2', text: 'Principle-Apply \u2014 Complete Reference Guide' },
    { type: 'paragraph', text: "This reference guide consolidates everything you've learned about Principle-Apply questions into a single resource. Use it for quick review before practice sets, for pattern identification during drilling, and as a final refresher before test day." },

    { type: 'hr' },

    { type: 'h3', text: 'The 4-Step Method' },
    { type: 'paragraph', text: "Use this systematic approach for every Principle-Apply question:" },
    { type: 'process', title: 'Principle-Apply \u2014 4 Steps', steps: [
      '**Step 1 \u2014 Read and Diagram the Principle:** Read the stimulus and translate the principle into explicit conditional logic. Identify the conditions (triggers) and the consequence (outcome). Pay special attention to logical indicators: "only when" and "only if" signal necessary conditions; "if...then" signals sufficient conditions; "any," "all," "never" signal universal scope. Write the contrapositive immediately if the principle uses necessary-condition language.',
      '**Step 2 \u2014 Build a Condition Checklist:** Extract every condition the principle requires into a numbered checklist. Include both positive criteria (what must be present) and exclusion criteria (what must be absent). Also decompose the consequence \u2014 it often contains embedded requirements (e.g., the purpose or degree of an action, not just the action itself). Each checklist item becomes a pass/fail test for the answer choices.',
      '**Step 3 \u2014 Test Each Answer Against the Checklist:** Systematically run each answer choice through your checklist. For each answer, verify: (a) Does it satisfy every condition? (b) Does it reach the correct consequence? (c) Does it flow in the correct logical direction (forward application or contrapositive)? Eliminate any answer that fails even one checklist item.',
      '**Step 4 \u2014 Verify the Survivor:** Re-read the principle one more time and confirm the remaining answer satisfies every element. Plug the answer\u2019s facts into the principle\u2019s structure and verify the conclusion follows. If it does, select it with confidence.',
    ]},
    { type: 'callout', variant: 'tip', title: 'Timing', text: "Budget roughly **1 minute and 20 seconds** per Principle-Apply question. Steps 1\u20132 (reading the principle and building the checklist) should take about 40 seconds. Step 3 (testing answer choices) should take about 35 seconds. Step 4 (verification) should take about 5 seconds. The checklist is the key accelerator \u2014 students who scan answers without one waste time re-reading the principle for each option." },

    { type: 'hr' },

    { type: 'h3', text: 'Application Types Table' },
    { type: 'paragraph', text: "Below is a comprehensive table of all five application types you will encounter on Principle-Apply questions. Each type represents a different way the correct answer relates to the principle." },
    { type: 'table', headers: ['Application Type', 'How It Works', 'Recognition Signal', 'What the Correct Answer Looks Like'], rows: [
      [
        '**Direct Application**',
        'The correct answer mirrors the principle\u2019s forward logic exactly: every condition is satisfied, and the consequence follows.',
        "Straightforward \"if...then\" principles with clear conditions and consequences. No negation or reversal required.",
        'A scenario where all conditions are met and the stated consequence matches the principle\u2019s outcome. One-to-one structural match.',
      ],
      [
        '**Contrapositive Application**',
        'The correct answer applies the principle\u2019s logically equivalent contrapositive: the consequence did NOT occur (or the condition is absent), and the opposite conclusion is drawn.',
        "Principles using \"only when,\" \"only if,\" \"requires,\" or \"cannot...unless\" \u2014 necessary-condition language that naturally invites contrapositive reasoning.",
        'A scenario where the necessary condition is ABSENT and the answer correctly concludes the outcome CANNOT occur. Direction is reversed from the original.',
      ],
      [
        '**Definitional Application**',
        'The principle defines a category by listing required features and excluded features. The correct answer is the scenario that fits the definition.',
        "Principles that say \"X is defined as...\" or \"X is in contrast with Y and Z.\" The principle reads like a dictionary entry, not a conditional rule.",
        'A scenario that satisfies every inclusion criterion AND avoids every exclusion criterion. Other answers fall into excluded categories.',
      ],
      [
        '**Ethical / Abstract Application**',
        "The principle states an abstract moral or philosophical rule (e.g., \"one ought to...\"). The correct answer applies this rule to a concrete scenario.",
        "Principles from ethicists, philosophers, or moral frameworks. Language like \"one ought to,\" \"it is a principle of morality that,\" \"one has a duty to.\"",
        'A scenario where the abstract rule\u2019s conditions are concretely satisfied and the answer reaches the morally prescribed conclusion.',
      ],
      [
        '**Multi-Condition / High-Threshold**',
        "The principle has two or more independent high-threshold conditions (e.g., \"overwhelming evidence\" AND \"disastrous consequences\"). The correct answer navigates all thresholds correctly.",
        "Multiple extreme modifiers in a single principle: \"overwhelming,\" \"disastrous,\" \"solely,\" \"never.\" Trap answers meet one threshold but fail another.",
        "A scenario where the relationship between evidence strength and consequence severity matches the principle\u2019s requirements. Often the LEAST dramatic-sounding answer.",
      ],
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Principle-Apply vs. Principle-Strengthen vs. Principle-Generalization' },
    { type: 'paragraph', text: "These three Principle question types share vocabulary but require fundamentally different cognitive tasks. Confusing them is one of the most common errors on the LSAT." },
    { type: 'table', headers: ['Feature', 'Principle-Apply', 'Principle-Strengthen', 'Principle-Generalization'], rows: [
      ['**What you\u2019re given**', 'An abstract principle (the rule)', 'An argument with a gap', 'A specific scenario with a conclusion'],
      ['**What you\u2019re finding**', 'A specific case that follows the rule', 'A general rule that bridges the gap', 'A general rule that the scenario illustrates'],
      ['**Direction of reasoning**', 'General \u2192 Specific (deductive)', 'Specific \u2192 General (need a bridge)', 'Specific \u2192 General (inductive)'],
      ['**Core skill**', 'Pattern matching \u2014 does the scenario fit the rule?', 'Abstraction \u2014 what general rule would make this argument work?', 'Abstraction \u2014 what general rule does this scenario exemplify?'],
      ['**Stimulus contains**', 'A stated principle or rule', 'An argument with evidence and conclusion', 'A specific situation with a judgment or outcome'],
      ['**Answer format**', 'A concrete scenario or case', 'An abstract, universal rule', 'An abstract, universal rule'],
      ['**Key question**', '"Which scenario follows this rule?"', '"Which rule makes this argument valid?"', '"Which rule does this scenario illustrate?"'],
      ['**Common trap**', 'Answer that almost matches the principle but fails one condition', 'Answer that is too narrow (restates the argument) or too broad', 'Answer that is too narrow (only covers this case) or too broad (covers everything)'],
      ['**Language clues**', '"conforms to," "application of," "consistent with," "in accordance with"', '"justify," "principle that helps justify," "most helps to justify the reasoning"', '"illustrates," "exemplifies," "is best illustrated by," "proposition that the argument illustrates"'],
    ]},

    { type: 'callout', variant: 'default', title: 'The Direction Test', text: "The fastest way to distinguish these three question types:\n\n\u2022 **Principle-Apply:** You START with the rule and FIND the case. (Rule \u2192 Case)\n\u2022 **Principle-Strengthen:** You START with the argument and FIND the rule that fixes it. (Argument \u2192 Rule)\n\u2022 **Principle-Generalization:** You START with the case and FIND the rule it exemplifies. (Case \u2192 Rule)\n\nIf the stimulus is a principle, you\u2019re applying. If the stimulus is an argument, you\u2019re strengthening. If the stimulus is a scenario and the question asks for a generalization, you\u2019re generalizing." },

    { type: 'hr' },

    { type: 'h3', text: 'Condition-Checking Checklist' },
    { type: 'paragraph', text: "Use this universal checklist for any Principle-Apply question, regardless of application type:" },
    { type: 'process', title: 'Condition-Checking Protocol', steps: [
      '**Identify every condition in the principle.** Count them. Multi-condition principles are common, and missing even one condition leads to wrong answers. Include conditions embedded in the consequence (e.g., the purpose of an action, not just the action itself).',
      "**Identify every exclusion or exception.** Does the principle say \"in contrast with\" or \"except when\"? These exclusion criteria are just as important as the positive criteria. A scenario that satisfies the positive criteria but falls into an excluded category is wrong.",
      "**Note all threshold language.** Circle words like \"overwhelming,\" \"disastrous,\" \"solely,\" \"always,\" \"never,\" \"exclusively.\" These words set the bar for what counts as satisfying a condition. Treat them as precise legal terms.",
      '**Check the logical direction.** Is the principle stated as a sufficient condition (if A then B), a necessary condition (A only if B), or a biconditional (A if and only if B)? The direction determines whether direct application, contrapositive application, or both are valid.',
      '**For each answer, score every checklist item.** Use a mental pass/fail grid. An answer must pass EVERY item to be correct. If it fails even one, eliminate it immediately \u2014 do not rationalize partial matches.',
      "**Verify the conclusion direction.** Even if all conditions are satisfied, the answer must reach the RIGHT conclusion. A scenario that meets the conditions but reaches the opposite conclusion (e.g., \"should not fulfill the duty\" when the principle says \"should fulfill\") is wrong.",
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Common Traps' },
    { type: 'paragraph', text: "Wrong answers on Principle-Apply questions fail in predictable ways. Memorize these traps to eliminate quickly and with confidence." },
    { type: 'breakdown', labels: { title: 'Trap', text: 'How It Works' }, items: [
      { title: '1. The Sufficient-Necessary Reversal', text: "The answer treats a necessary condition as sufficient. If the principle says \"X only when Y\" (Y is necessary), the trap answer concludes \"Y exists, therefore X will occur\" (treating Y as sufficient). This is the most common trap on Principle-Apply questions and accounts for the majority of errors on conditional-reasoning questions.\n\n**How to spot:** The answer says \"the condition exists, therefore the outcome is guaranteed.\" But the principle only says the condition is *required*, not that it *guarantees* the outcome.\n\n**Example:** Principle: \"Growth only when balance exists.\" Trap: \"Balance exists \u2192 growth will occur.\"", badge: 'Most Common', badgeColor: 'red' },
      { title: '2. The Condition Distortion', text: "The answer modifies the specific content of a condition — changing the ratio, swapping components, altering the scope, or substituting a similar-sounding but different requirement. The answer looks structurally correct but uses the wrong inputs.\n\n**How to spot:** Compare the answer's stated condition word-for-word against the principle's stated condition. If any element is altered, substituted, or reversed, it's a distortion.\n\n**Example:** Principle requires \"confidence balanced with a small amount of skepticism.\" Trap says \"skepticism balanced with a small amount of confidence\" — same words, reversed ratio.", badge: 'Sneaky', badgeColor: 'red' },
      { title: '3. The Wrong Conclusion', text: "The answer satisfies the principle's conditions but reaches the opposite conclusion. The facts match, but the answer says \"should not\" when the principle says \"should,\" or \"will occur\" when the principle says \"cannot occur.\" This trap tests whether you track the conclusion as carefully as the conditions.\n\n**How to spot:** After verifying the conditions, check the conclusion independently. Does the answer reach the same verdict as the principle? If the conditions are met and the principle says \"fulfill the duty,\" does the answer say \"fulfill the duty\"?", badge: 'Common', badgeColor: 'red' },
      { title: '4. The High-Threshold Trap', text: "The answer meets one extreme threshold but fails another. When a principle requires BOTH \"overwhelming evidence\" AND \"disastrous consequences,\" the trap presents a scenario with dramatic consequences but weak evidence (or vice versa). Students latch onto the met threshold and overlook the failed one.\n\n**How to spot:** Check each high-threshold word independently. Score them separately. If either fails, the answer fails \u2014 regardless of how strongly the other is satisfied.\n\n**Example:** Principle requires overwhelming evidence of disaster. Trap: \"slight chance\" of endangering lives. Consequence is disastrous (lives) but evidence is weak (slight chance).", badge: 'Hardest', badgeColor: 'red' },
      { title: '5. The Scope Mismatch', text: "The answer introduces a scenario that falls outside the principle's framework entirely. The most common version presents a conflict between two duties when the principle only addresses whether ONE duty should be fulfilled. The answer feels related but asks a question the principle was never designed to answer.\n\n**How to spot:** Ask: \"Does the principle provide a framework for resolving this specific scenario?\" If the scenario involves elements the principle doesn't address (competing duties, external factors, additional conditions), it's a scope mismatch.\n\n**Example:** Principle addresses when to fulfill a single duty. Trap presents a scenario with two competing duties.", badge: 'Tricky', badgeColor: 'red' },
      { title: '6. The Excluded-Category Trap', text: "On definitional questions, the answer satisfies the positive criteria of the definition but falls into an explicitly excluded category. The scenario looks like a match because it resembles the defined concept, but the person's motivation or the scenario's key feature triggers one of the exclusion clauses.\n\n**How to spot:** After checking the positive criteria, immediately check the exclusion criteria. Does the scenario's motivation fall into any of the \"in contrast with\" or \"as opposed to\" categories the principle explicitly excludes?\n\n**Example:** Principle defines advanced motivation as \"based on abstract principles, in contrast with self-interest.\" Trap presents someone acting for career advancement \u2014 which is self-interest, an excluded category.", badge: 'Definitional', badgeColor: 'red' },
      { title: '7. The Overly Broad Interpretation', text: "The answer uses a vague or imprecise version of a condition that technically could include the principle's requirement but also includes many things the principle doesn't cover. Instead of precisely matching the condition, it approximates it with a broader category.\n\n**How to spot:** Ask: \"Is this answer choice saying exactly what the principle says, or is it saying something looser that might or might not include what the principle says?\" If the answer is compatible with the principle but also compatible with violating it, it's too broad.\n\n**Example:** Principle requires \"confidence balanced with skepticism.\" Trap says \"not skepticism\" \u2014 which could mean 100% confidence (violating the balance requirement).", badge: 'Subtle', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Test Day Checklist' },
    { type: 'paragraph', text: "Use this quick-reference checklist during practice and on test day:" },
    { type: 'list', ordered: true, items: [
      '**Read the question stem first.** Confirm it\u2019s a Principle-Apply question. Look for: "conforms to," "application of," "consistent with," "in accordance with," "is an application of the principle above."',
      '**Identify the principle type.** Is it a conditional rule (if/then), a necessary-condition rule (only when/only if), a definitional statement (defines a category), or a multi-condition rule with high-threshold language? The type determines your approach.',
      '**Diagram the principle.** Translate it into explicit logical form. Write the conditions and consequence. If necessary-condition language is present, write the contrapositive immediately.',
      '**Build your condition checklist.** List every positive criterion, every exclusion criterion, and every high-threshold word. Count the items. You will use this checklist to score each answer.',
      '**Score each answer against the checklist.** Go through the answers systematically. For each answer, check every item on your list. Eliminate any answer that fails even one item. Do not rationalize partial matches.',
      '**Verify the conclusion direction.** For the surviving answer, confirm it reaches the same conclusion the principle prescribes. Conditions met + wrong conclusion = wrong answer.',
      '**Check for the top traps.** Before confirming, ask: Is this a Sufficient-Necessary Reversal? A Condition Distortion? A Wrong Conclusion? A High-Threshold Trap? A Scope Mismatch? If none of these apply, select with confidence.',
      '**Confirm and move on.** If the answer passes every checklist item, reaches the correct conclusion, and avoids all trap patterns, select it. Do not second-guess a systematic process.',
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Final Review', text: "Principle-Apply questions test one core skill: matching a concrete scenario to an abstract rule. The principle provides the rule; your job is to find the case that perfectly follows it.\n\n**Remember the fundamentals:**\n\u2022 The correct answer satisfies EVERY condition in the principle \u2014 not most, not the important ones, but all of them.\n\u2022 Know the five application types: Direct, Contrapositive, Definitional, Ethical/Abstract, and Multi-Condition/High-Threshold. Each requires a slightly different approach.\n\u2022 Distinguish Principle-Apply from Principle-Strengthen (find the rule that fixes an argument) and Principle-Generalization (find the rule a scenario illustrates). The stem language always tells you which type.\n\u2022 Build the condition checklist BEFORE reading the answers. This transforms a subjective judgment into a mechanical process.\n\u2022 The Sufficient-Necessary Reversal is the #1 trap. When you see necessary-condition language, form the contrapositive immediately and watch for answers that treat \"required\" as \"guaranteed.\"\n\u2022 High-threshold words are load-bearing. \"Overwhelming,\" \"disastrous,\" \"solely,\" \"always\" \u2014 these words set precise bars that must be fully cleared. Be hyper-literal.\n\u2022 Wrong answers fail in predictable patterns: Reversal, Distortion, Wrong Conclusion, Threshold Failure, Scope Mismatch, Excluded Category, and Overly Broad Interpretation. Knowing these traps accelerates elimination.\n\nMaster the 4-step method, internalize the application types, and build the checklist habit until it becomes automatic. Principle-Apply appears 1\u20132 times per scored section, and the systematic matching skill it develops strengthens performance across all conditional-reasoning questions." },
  ]
};
