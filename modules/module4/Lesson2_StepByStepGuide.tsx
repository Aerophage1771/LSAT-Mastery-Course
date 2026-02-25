import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: "4-2",
  title: "Step-by-Step Guide",
  content: [
    { type: 'h2', text: 'The 4-Step Method for Parallel Reasoning Questions' },
    { type: 'paragraph', text: "This lesson provides a complete, repeatable method for solving any Parallel Reasoning question. Each step includes concrete examples, shortcuts for saving time, and callouts with key insights. At the end, you will work through a full question applying all four steps." },

    { type: 'callout', variant: 'tip', title: 'Timing', text: "Parallel Reasoning questions are the **longest** questions on the LR section. Both the stimulus and the five answer choices are full arguments, meaning you are reading the equivalent of **six arguments** per question. Budget **2–2.5 minutes**. The 4-step method helps you spend that time efficiently: roughly 30 seconds on the stimulus, 15 seconds per answer choice on the first pass, and 30 seconds confirming your final answer." },

    { type: 'hr' },

    { type: 'h3', text: 'Overview' },
    { type: 'process', title: 'The 4-Step Method', steps: [
      '**Step 1 — Identify the Structure:** Break the stimulus into conclusion + premises. Label each component and note the argument\'s validity.',
      '**Step 2 — Abstract the Pattern:** Replace content with variables. Write a concise logical skeleton (e.g., "If A → B, A, ∴ B").',
      '**Step 3 — Match by Elimination:** Scan answer choices conclusion-first. Eliminate structural mismatches quickly.',
      '**Step 4 — Verify the Final Match:** Confirm the last standing choice replicates every structural element.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Step 1: Identify the Structure' },
    { type: 'paragraph', text: "Before you can match a structure, you must understand it. Read the stimulus and identify three things: the conclusion, the premises, and whether the argument is valid or invalid." },

    { type: 'h4', text: 'What to Identify' },
    { type: 'breakdown', labels: { title: 'Component', text: 'What to Look For' }, items: [
      { title: 'Main Conclusion', text: 'What is the argument trying to prove? Use the Why Test from Module 2 if needed. Pay special attention to the **type** of conclusion: Is it a recommendation, prediction, conditional statement, or factual claim?', badge: 'First', badgeColor: 'blue' },
      { title: 'Premises', text: 'What evidence supports the conclusion? How many premises are there? Are they conditional (if/then), causal (X causes Y), categorical (all/some/none), or factual?', badge: 'Second', badgeColor: 'blue' },
      { title: 'Logical Connectors', text: 'What words link the premises to the conclusion? Watch for quantifiers (all, most, some, none), conditional markers (if, only if, unless), and force words (must, probably, might).', badge: 'Third', badgeColor: 'blue' },
      { title: 'Validity', text: 'Does the conclusion follow logically from the premises? A valid argument\'s parallel must also be valid; an invalid one\'s parallel must be invalid in the same way.', badge: 'Fourth', badgeColor: 'blue' },
    ]},

    { type: 'h4', text: 'Example: Identifying Structure' },
    { type: 'blockquote', text: '"All championship teams have strong coaching. The Falcons have strong coaching. Therefore, the Falcons are a championship team."' },
    { type: 'breakdown', labels: { title: 'Component', text: 'Identification' }, items: [
      { title: 'Conclusion', text: '"The Falcons are a championship team." — A definite factual claim about a specific team.', badge: 'Conclusion', badgeColor: 'indigo' },
      { title: 'Premise 1', text: '"All championship teams have strong coaching." — A universal conditional: All A are B.', badge: 'Premise', badgeColor: 'slate' },
      { title: 'Premise 2', text: '"The Falcons have strong coaching." — Affirms the consequent (B) for a specific case.', badge: 'Premise', badgeColor: 'slate' },
      { title: 'Validity', text: '**Invalid.** Knowing that all A are B and that X is B does not mean X is A. Strong coaching is necessary for championships but not sufficient. This is the fallacy of **affirming the consequent**.', badge: 'Invalid', badgeColor: 'red' },
    ]},

    { type: 'callout', variant: 'default', title: 'Why Validity Matters', text: "If the stimulus is **invalid**, the correct answer must also be **invalid** — and invalid in the same way. If the stimulus uses a Mistaken Reversal, the correct answer must also use a Mistaken Reversal. A valid answer choice cannot parallel an invalid stimulus, no matter how similar the surface structure looks." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 2: Abstract the Pattern' },
    { type: 'paragraph', text: "This is the most important step. Replace the specific content with variables to reveal the argument's logical skeleton. Think of this as translating English into algebra." },

    { type: 'h4', text: 'The Abstraction Table' },
    { type: 'paragraph', text: "Use this reference to translate concrete arguments into abstract patterns:" },
    { type: 'table', headers: ['Concrete Language', 'Abstract Translation', 'Symbol'], rows: [
      ['"All championship teams have strong coaching"', 'All A are B', 'A → B'],
      ['"If it rains, the game is cancelled"', 'If A, then B', 'A → B'],
      ['"Either we take the bus or we walk"', 'Either A or B', 'A ∨ B'],
      ['"Most students passed the exam"', 'Most A are B', 'Most A → B'],
      ['"Some doctors are researchers"', 'Some A are B', '∃(A ∧ B)'],
      ['"No reptiles are warm-blooded"', 'No A are B', 'A → ¬B'],
      ['"X causes Y"', 'A causes B', 'A ⇒ B (causal)'],
      ['"We should adopt policy X"', 'Recommendation: do A', 'Should A'],
      ['"X will probably happen"', 'Prediction: probably A', 'Prob(A)'],
    ]},

    { type: 'h4', text: 'Worked Abstraction' },
    { type: 'paragraph', text: "Let's abstract the Falcons argument from Step 1:" },
    { type: 'process', title: 'Building the Skeleton', steps: [
      '**Identify variables:** Championship team = A, Strong coaching = B, Falcons = X',
      '**Premise 1:** All A are B (all championship teams have strong coaching)',
      '**Premise 2:** X is B (the Falcons have strong coaching)',
      '**Conclusion:** Therefore, X is A (the Falcons are a championship team)',
      '**Skeleton:** All A → B. X is B. ∴ X is A. **(Invalid — Affirming the Consequent)**',
    ]},

    { type: 'callout', variant: 'tip', title: 'Shortcut: The Conclusion-First Strategy', text: "You don't always need to abstract the entire argument in detail. The fastest way to eliminate wrong answers is to **match the conclusion type first**. If the stimulus concludes with a conditional statement (\"If A, then C\"), immediately eliminate any answer whose conclusion is a factual claim, a recommendation, or a prediction. This single check often eliminates 2–3 choices in seconds." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 3: Match by Elimination' },
    { type: 'paragraph', text: "Now scan the answer choices systematically, using your abstract skeleton as a filter. Work from the most visible structural features (conclusion type) to the most detailed (premise relationships)." },

    { type: 'h4', text: 'First Pass: The Quick Scan' },
    { type: 'paragraph', text: "Start with the three fastest checks. Each one can eliminate answers in seconds:" },
    { type: 'breakdown', labels: { title: 'Quick Check', text: 'How to Apply' }, items: [
      { title: 'Conclusion Type', text: 'Does the answer\'s conclusion match the stimulus\'s conclusion in **kind**? A recommendation ("should") cannot parallel a prediction ("will"). A conditional ("if A then B") cannot parallel a factual claim ("X is true").', badge: 'Check 1', badgeColor: 'indigo' },
      { title: 'Certainty / Force', text: 'Does the answer\'s conclusion match the stimulus\'s conclusion in **strength**? "Must" cannot parallel "probably." "Will" cannot parallel "might." Watch for these force words in the final sentence.', badge: 'Check 2', badgeColor: 'blue' },
      { title: 'Polarity', text: 'Does the answer\'s conclusion match the stimulus\'s conclusion in **direction**? A positive conclusion ("X is true") cannot parallel a negative conclusion ("X is not true").', badge: 'Check 3', badgeColor: 'slate' },
    ]},

    { type: 'h4', text: 'Second Pass: The Structural Check' },
    { type: 'paragraph', text: "For the remaining contenders (usually 2–3), perform a deeper structural comparison:" },
    { type: 'table', headers: ['Structural Feature', 'What to Compare', 'Example Mismatch'], rows: [
      ['**Quantifiers**', 'Do the premises use the same scope words?', 'Stimulus: "all" vs. Answer: "most"'],
      ['**Number of Premises**', 'Does the answer have the same number of evidence steps?', 'Stimulus: 2 premises vs. Answer: 3 premises'],
      ['**Conditional Direction**', 'Do the if/then statements flow the same way?', 'Stimulus: A → B vs. Answer: B → A'],
      ['**Premise Relationship**', 'Do the premises connect in the same way (chain, independent, dilemma)?', 'Stimulus: chain (A→B→C) vs. Answer: independent premises'],
      ['**Validity Match**', 'Is the answer valid/invalid in the same way as the stimulus?', 'Stimulus: invalid (affirming consequent) vs. Answer: valid'],
    ]},

    { type: 'callout', variant: 'default', title: 'Common Shortcuts That Save Time', text: "Experienced test-takers use these shortcuts to move quickly through answer choices:\n\n• **Match quantifiers early.** If the stimulus says \"all,\" scan for \"all\" or \"every\" in answer conclusions. \"Most\" and \"some\" are automatic mismatches.\n• **Count the moving parts.** If the stimulus has exactly two premises forming a chain, eliminate any answer with three premises or two independent reasons.\n• **Check the last sentence first.** The conclusion is usually the last sentence of each answer choice. Read it before reading the premises — if the conclusion type doesn't match, move on." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 4: Verify the Final Match' },
    { type: 'paragraph', text: "You should now have one answer choice remaining. Before committing, perform a final confirmation by mapping the answer's argument onto your abstract skeleton point by point." },

    { type: 'process', title: 'Verification Checklist', steps: [
      '**Conclusion:** Same type, same force, same polarity? ✓/✗',
      '**Premise 1:** Same logical form (conditional, categorical, causal)? ✓/✗',
      '**Premise 2:** Same logical form and same relationship to Premise 1? ✓/✗',
      '**Validity:** Both valid, or both invalid in the same way? ✓/✗',
      '**All checks pass → Select this answer.**',
    ]},

    { type: 'callout', variant: 'tip', title: 'What If Two Answers Survive?', text: "If two choices survive to Step 4, look for the subtler structural differences:\n\n1. **Quantifier precision:** \"All\" vs. \"every\" is fine (synonyms), but \"most\" vs. \"all\" is a mismatch.\n2. **Active vs. passive elimination:** Does one choice eliminate an option because it *fails a test* while the other chooses an option because it *passes a test*? These are structurally different.\n3. **Scope of the conclusion:** Does one conclusion apply to a broader or narrower group than the stimulus?" },

    { type: 'hr' },

    { type: 'h2', text: 'Full Worked Example' },
    { type: 'paragraph', text: "Let's apply all four steps to a complete Parallel Reasoning question." },

    { type: 'question-card',
      id: 'PR-4-2-001',
      questionType: 'Parallel Reasoning',
      difficulty: 'medium',
      stimulus: "If a building is designated as a historic landmark, it cannot be demolished. City Hall has been designated as a historic landmark. Therefore, City Hall cannot be demolished.",
      question: "Which one of the following arguments is most similar in its reasoning to the argument above?",
      options: [
        "(A) If a species is listed as endangered, it cannot be hunted. The bald eagle is no longer listed as endangered. Therefore, the bald eagle can be hunted.",
        "(B) If a road is classified as a highway, it must have a speed limit of at least 55 mph. Route 9 is classified as a highway. Therefore, Route 9 must have a speed limit of at least 55 mph. (Correct)",
        "(C) Most medications that are approved by the FDA are safe for consumption. Aspirin is approved by the FDA. Therefore, aspirin is probably safe for consumption.",
        "(D) If a student earns a scholarship, the student will not need to take out loans. Jordan did not earn a scholarship. Therefore, Jordan will need to take out loans.",
        "(E) Some contracts that are signed under duress are not enforceable. This contract was signed under duress. Therefore, this contract is not enforceable.",
      ],
    },

    { type: 'h3', text: 'Applying the 4-Step Method' },

    { type: 'process', title: 'Step-by-Step Walkthrough', steps: [
      '**Step 1 — Identify Structure:**\n• **Conclusion:** "City Hall cannot be demolished" — a definite negative factual claim about a specific subject.\n• **Premise 1:** "If a building is designated as a historic landmark, it cannot be demolished" — a universal conditional (If A → B).\n• **Premise 2:** "City Hall has been designated as a historic landmark" — affirms the antecedent for a specific case (X is A).\n• **Validity:** Valid. This is Modus Ponens.',
      '**Step 2 — Abstract the Pattern:**\nIf A → B. X is A. Therefore, X is B.\nSpecifically: valid Modus Ponens with a universal conditional premise, applied to a specific case, yielding a definite factual conclusion.',
      '**Step 3 — Match by Elimination (Quick Scan):**\n• (A) — Conclusion: "can be hunted" (positive). Stimulus conclusion is negative ("cannot"). Polarity mismatch? Actually the premise negates the trigger ("no longer listed"), so this is denying the antecedent. **Eliminate.**\n• (C) — Uses "most" and "probably." Force mismatch with the definite "cannot." **Eliminate.**\n• (D) — Negates the trigger ("did not earn"). This is denying the antecedent, not affirming it. **Eliminate.**\n• (E) — Uses "some," not "all/every/if." Quantifier mismatch. **Eliminate.**\n• (B) — Conditional premise, affirms antecedent, definite conclusion. **Keep.**',
      '**Step 4 — Verify (B):**\n• Premise 1: "If a road is classified as a highway, it must have a speed limit of at least 55 mph" → If A → B. ✓\n• Premise 2: "Route 9 is classified as a highway" → X is A. ✓\n• Conclusion: "Route 9 must have a speed limit of at least 55 mph" → X is B. ✓\n• Validity: Valid Modus Ponens. ✓\nPerfect match.',
    ]},

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) Bald eagle is no longer listed → can be hunted', text: 'The second premise **negates** the antecedent ("no longer listed"). This commits the fallacy of **denying the antecedent**. The stimulus affirms the antecedent. Validity mismatch.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) Route 9 is classified as highway → must have 55 mph limit', text: 'If A → B. X is A. ∴ X is B. Valid Modus Ponens applied to a specific case with a definite conclusion. Structural twin of the stimulus.', badge: 'Correct', badgeColor: 'green' },
      { title: '(C) Most FDA-approved → probably safe. Aspirin approved → probably safe.', text: 'Uses "most" (not universal) and "probably" (not definite). Both the quantifier and the force of the conclusion differ from the stimulus.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) Jordan did not earn scholarship → will need loans', text: 'The second premise **negates** the antecedent. This is **denying the antecedent**, an invalid move. The stimulus is valid.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) Some contracts under duress → not enforceable', text: '"Some" is not the same as a universal conditional. The conclusion does not validly follow from "some." The stimulus uses a universal rule, not a partial one.', badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• The 4-Step Method gives you a repeatable process: **Identify → Abstract → Eliminate → Verify.**\n• **Step 2 (Abstraction) is the most important step.** Translate the argument into variables before looking at answers.\n• The **Conclusion-First Strategy** is the biggest time-saver: matching the conclusion type eliminates 2–3 wrong answers immediately.\n• Watch for **validity mismatches** — a valid stimulus cannot be paralleled by an invalid answer, and vice versa.\n• **Quantifier precision matters.** \"All\" ≠ \"most\" ≠ \"some.\" These words define different logical structures.\n• When two answers survive, check for subtler differences: quantifier precision, active vs. passive elimination, and conclusion scope." },
  ]
};
