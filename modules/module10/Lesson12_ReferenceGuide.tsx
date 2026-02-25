import { Lesson } from '../../types';

export const Lesson12_ReferenceGuide: Lesson = {
  id: "10-12",
  title: "Reference Guide",
  content: [
    { type: 'h2', text: 'Sufficient Assumption — Complete Reference Guide' },
    { type: 'paragraph', text: "This reference consolidates every key concept, pattern, and strategy from the Sufficient Assumption module into a single quick-reference resource. Use it for review before practice sets, during timed drills, and on test day as a mental checklist." },

    { type: 'hr' },

    { type: 'h2', text: 'The 4-Step Method' },
    { type: 'paragraph', text: "Every Sufficient Assumption question can be solved with the same repeatable process. Internalize these steps until they become automatic." },
    { type: 'process', title: 'The 4-Step Method', steps: [
      '**Step 1 — Break Down the Argument:** Read the stimulus carefully. Identify the conclusion (what the author is trying to prove) and the premises (the evidence provided). Pay close attention to any terms that appear in the conclusion but not in the premises — these mismatched terms signal the gap.',
      '**Step 2 — Diagram and Identify the Gap:** If the argument contains conditional logic (if/then, all, every, only, unless, requires), diagram the relationships using arrows. Compare the premise chain to the conclusion. The break in the chain is the gap. For non-conditional arguments, identify the conceptual disconnect between premises and conclusion.',
      '**Step 3 — Prephrase the Bridge:** Before looking at answer choices, articulate what the correct answer must do. Complete the sentence: "To make the conclusion guaranteed, I need a rule that says..." Your prephrase should be a specific logical statement, not a vague direction.',
      '**Step 4 — Evaluate and Eliminate:** Test each answer choice against the Sufficient Assumption Equation: Premises + Answer = Conclusion is 100% guaranteed? If you can imagine any scenario where the premises and the answer are true but the conclusion is still false, eliminate that choice.'
    ]},

    { type: 'callout', variant: 'default', title: 'The Sufficient Assumption Equation', text: "**Premise(s) + Correct Answer = Conclusion is 100% proven**\n\nThis is the definitive test. There should be zero room for doubt. If any counterexample exists, the answer is not sufficient." },

    { type: 'hr' },

    { type: 'h2', text: 'Complete SA Patterns Table' },
    { type: 'paragraph', text: "Sufficient Assumption questions use a small number of recurring structural patterns. Recognizing the pattern accelerates gap identification and prephrasing." },
    { type: 'table', headers: ['Pattern', 'Structure', 'What the Correct Answer Does', 'Lesson'], rows: [
      ['**Concept Link**', 'Premises discuss concept A; conclusion introduces concept B with no stated connection.', 'Provides a rule linking A to B (e.g., "All A are B").', 'Lesson 3'],
      ['**Exclusivity Rule**', 'Premises show certain conditions from a list do not apply; conclusion says the category does not apply.', 'Declares the listed conditions exhaustive — "These are the only reasons."', 'Lesson 4'],
      ['**Binary Assumption**', 'Premises prove "not X"; conclusion asserts "must be Y."', 'Establishes a strict binary: "If not X, then Y" — eliminates third options.', 'Lesson 5'],
      ['**Mutually Exclusive**', 'Premises show membership in Category A; conclusion excludes Category B.', 'Declares A and B mutually exclusive: "Nothing can be both A and B."', 'Lesson 6'],
      ['**General Principle**', 'Premises describe a specific scenario; conclusion makes a broad judgment about motive/classification.', 'Provides a universal rule: "Any X that does Y must be Z."', 'Lesson 7'],
      ['**Chain of Logic**', 'Premises give partial conditional chains (A→B, C→D); conclusion requires a full chain (A→D).', 'Supplies the missing link (B→C) to complete the chain.', 'Lessons 8–9'],
      ['**Either/Or Bridge**', 'Premises split into two branches with different appropriate responses; conclusion rejects a different response.', 'Provides a unifying principle covering both branches: "If C or D, then not E."', 'Lesson 10'],
      ['**Normative Bridge**', 'Premises state a descriptive fact (X is impossible); conclusion makes a normative judgment (X is a bad goal).', 'Bridges fact to judgment: "If X is impossible, then X is an inappropriate goal."', 'Lesson 11']
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'SA vs. NA Comparison' },
    { type: 'paragraph', text: "Sufficient Assumption and Necessary Assumption are the two most commonly confused question types. This table clarifies the key differences." },
    { type: 'table', headers: ['Feature', 'Sufficient Assumption (SA)', 'Necessary Assumption (NA)'], rows: [
      ['**Goal**', 'Find a premise that **guarantees** the conclusion (100% certain)', 'Find a premise that is **required** for the conclusion (without it, the argument collapses)'],
      ['**Answer Strength**', 'Often **broad, strong, extreme** — a powerful rule that forces the conclusion', 'Often **modest, narrow, cautious** — just enough to keep the argument alive'],
      ['**Test for Correct Answer**', '**Add it:** Premises + Answer = Conclusion guaranteed?', '**Deny it:** If you negate the answer, does the argument fall apart? (Negation Test)'],
      ['**Stem Language**', '"follows logically if assumed," "enables the conclusion to be properly drawn"', '"depends on," "requires," "the argument assumes"'],
      ['**Relationship**', 'Every sufficient assumption is also necessary', 'Not every necessary assumption is sufficient'],
      ['**Common Trap**', 'Picking a necessary-but-not-sufficient answer (too weak)', 'Picking a sufficient-but-not-necessary answer (too strong)']
    ]},

    { type: 'callout', variant: 'tip', title: 'Quick Decision Rule', text: "**SA stem language demands certainty:** \"follows logically,\" \"properly drawn,\" \"properly inferred.\" If the stem uses these phrases, you need the steel beam that fully bridges the canyon — not just one support cable. Don't settle for an answer that merely helps; demand one that proves." },

    { type: 'hr' },

    { type: 'h2', text: 'Conditional Diagramming Quick Reference' },
    { type: 'paragraph', text: "About 60–70% of SA questions involve conditional logic. Use this translation table to diagram statements accurately." },
    { type: 'table', headers: ['Natural Language', 'Diagram', 'Contrapositive'], rows: [
      ['"All A are B" / "If A then B" / "Every A is B"', 'A → B', '~B → ~A'],
      ['"A only if B" / "A requires B"', 'A → B', '~B → ~A'],
      ['"Only A are B"', 'B → A', '~A → ~B'],
      ['"The only A are B"', 'A → B', '~B → ~A'],
      ['"No A are B"', 'A → ~B', 'B → ~A'],
      ['"A unless B"', '~B → A', '~A → B'],
      ['"A if B"', 'B → A', '~A → ~B'],
      ['"A if and only if B"', 'A → B and B → A', '~A → ~B and ~B → ~A']
    ]},
    { type: 'callout', variant: 'default', title: 'The Contrapositive Rule', text: "A conditional and its contrapositive are logically equivalent. A → B means the same as ~B → ~A. On SA questions, the correct answer often appears as the contrapositive of the link you predicted. Always check both directions." },

    { type: 'hr' },

    { type: 'h2', text: 'Common Traps (Wrong Answer Patterns)' },
    { type: 'paragraph', text: "Wrong answers on SA questions fail in predictable, recognizable ways. Learn these traps to eliminate quickly and confidently." },
    { type: 'breakdown', labels: { title: "Trap", text: "Description" }, items: [
      { title: "1. Mistaken Reversal", text: "Uses the correct terms but connects them in the **wrong logical direction**. You need A → B, but the answer gives B → A. This is the #1 most common trap on SA questions. Always diagram the answer and check arrow direction.", badge: "Most Common", badgeColor: "red" },
      { title: "2. Mistaken Negation", text: "Negates both sides of the needed conditional. You need A → B, but the answer gives ~A → ~B. This is logically invalid — denying the antecedent does not prove anything about the consequent.", badge: "Frequent", badgeColor: "red" },
      { title: "3. Necessary but Not Sufficient", text: "Provides a statement that is probably *required* for the conclusion but is **too weak** to guarantee it. Uses hedging words like \"some,\" \"can,\" \"sometimes,\" or \"tends to.\" These answers belong on NA questions, not SA questions.", badge: "Frequent", badgeColor: "red" },
      { title: "4. Partial Bridge", text: "Covers only **one branch** of a multi-branch argument (common in Either/Or Bridge questions). The answer addresses part of the gap but leaves another part unsupported. Check that the answer closes the *entire* gap.", badge: "Pattern-Specific", badgeColor: "red" },
      { title: "5. The Restatement", text: "Simply paraphrases a premise or restates something already derivable from the existing premises. It adds no new information and cannot bridge a gap that requires new logical content.", badge: "Moderate", badgeColor: "red" },
      { title: "6. Out of Scope", text: "Introduces a concept that is **irrelevant** to the core logical structure. The answer may sound related to the topic but does not connect the specific terms in the premises to the specific terms in the conclusion.", badge: "Moderate", badgeColor: "red" },
      { title: "7. Wrong Direction Support", text: "Supports the **opposing** position rather than the author's conclusion. In arguments that attack a view, this trap defends the view instead of undermining it. Always check whose side the answer is on.", badge: "Situational", badgeColor: "red" }
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Test Day Checklist' },
    { type: 'paragraph', text: "Use this mental checklist when you encounter a Sufficient Assumption question on test day." },
    { type: 'process', title: 'SA Question Checklist', steps: [
      '**Recognize the stem.** Look for: "follows logically if assumed," "enables the conclusion to be properly drawn," "properly inferred if assumed." These signal SA, not Strengthen or NA.',
      '**Find the conclusion first.** Locate conclusion indicators (therefore, thus, so, hence). The conclusion is the claim that needs support.',
      '**Spot the gap.** Look for terms in the conclusion that do not appear in the premises, or breaks in a conditional chain. The gap is always structural.',
      '**Diagram if conditional.** If you see if/then, all, every, only, unless, requires — sketch the arrows. It takes 10 seconds and prevents logical-direction errors.',
      '**Prephrase before reading choices.** Articulate the missing link. "I need a rule that says [X → Y]."',
      '**Match your prephrase.** Scan choices for your predicted link. It may appear in contrapositive or disguised form (especially "only" statements).',
      '**Run the equation.** For your top candidate: Premises + This Answer = Conclusion 100% guaranteed? If yes, select it. If no, keep looking.',
      '**Check for reversals.** Before confirming, verify the arrow direction. The #1 mistake is selecting the mistaken reversal of the correct answer.',
      '**Trust strong answers.** SA answers are supposed to be strong and broad. Do not shy away from extreme-sounding choices — their job is to guarantee, not to be nuanced.',
      '**Move on confidently.** Once you confirm the equation holds, select the answer and move on. Do not second-guess a logically verified choice.'
    ]},

    { type: 'callout', variant: 'summary', title: 'Final Reminders', text: "**1. SA = Guarantee.** The correct answer, combined with the premises, makes the conclusion logically certain. No exceptions, no counterexamples.\n\n**2. Diagram aggressively.** Most SA errors come from logical-direction mistakes. Diagramming takes seconds and prevents the most common trap.\n\n**3. Strong answers win.** Unlike NA (where modest answers are correct), SA rewards powerful, sweeping rules. \"All,\" \"every,\" \"any,\" and \"only\" are your friends.\n\n**4. Know the patterns.** Eight recurring patterns cover the vast majority of SA questions. Recognizing the pattern cuts your solving time and boosts accuracy.\n\n**5. Prephrase, then match.** The gap in SA questions is structural and predictable. A good prephrase makes the correct answer obvious and the traps transparent." }
  ]
};
