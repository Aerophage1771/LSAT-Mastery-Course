import { Lesson } from '../../types';

export const Lesson10_ReferenceGuide: Lesson = {
  id: "6-10",
  title: "Reference Guide",
  content: [
    { type: 'h2', text: 'MODULE 6: Parallel Flaw — Complete Reference' },
    { type: 'paragraph', text: 'A condensed reference for every concept, method, flaw type, trap, and strategy in Parallel Flaw questions. Print this or bookmark it for review before test day.' },
    { type: 'hr' },

    { type: 'h3', text: 'The Goal' },
    { type: 'paragraph', text: 'Your one and only goal is to **identify the specific logical error in the stimulus and find the answer choice that replicates that exact same mistake.** You are matching the *flaw*, not the topic, structure, or tone. The correct answer must be flawed — and flawed in precisely the same way.' },
    { type: 'hr' },

    { type: 'h3', text: 'The 3-Step Method' },
    { type: 'process', steps: [
      '**Step 1 — Identify the Flaw:** Read the stimulus. Find the conclusion and premises. Diagnose the specific logical error. Name it precisely (e.g., Mistaken Negation, Composition, Correlation→Causation).',
      '**Step 2 — Abstract the Pattern:** Strip away the topic and translate the flawed reasoning into an abstract blueprint (e.g., "If A → B. Not A. Therefore Not B."). This blueprint is your matching filter.',
      '**Step 3 — Match the Error:** Scan the answer choices using your blueprint. Eliminate valid arguments and arguments with different flaws. Confirm the final match replicates the exact logical mechanism.',
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'Complete Flaw Types Table' },
    { type: 'paragraph', text: 'All major flaw types tested in Parallel Flaw questions. The correct answer must commit the *same* flaw as the stimulus:' },
    { type: 'table', headers: ['Flaw Type', 'Core Error', 'Abstract Pattern', 'LSAT Language'], rows: [
      ['**Mistaken Reversal**', 'Affirms consequent: B → A from A → B', 'If A → B. B is true. ∴ A is true.', '"confuses a sufficient condition with a necessary condition"'],
      ['**Mistaken Negation**', 'Denies antecedent: ~A → ~B from A → B', 'If A → B. A is false. ∴ B is false.', '"assumes the absence of a sufficient condition guarantees the absence of the result"'],
      ['**Composition (Part → Whole)**', 'Assumes parts\' properties transfer to whole', 'Each X has P. ∴ The group of Xs has P.', '"assumes what is true of each part is true of the whole"'],
      ['**Division (Whole → Part)**', 'Assumes whole\'s properties transfer to each part', 'The whole has P. ∴ Each part has P.', '"assumes what is true of the whole is true of each part"'],
      ['**Correlation → Causation**', 'Treats co-occurrence as causation', 'X and Y co-occur. ∴ X causes Y.', '"infers a causal relationship from a mere correlation"'],
      ['**Numbers vs. Percentages**', 'Confuses raw numbers with rates/proportions', 'More X in absolute terms. ∴ Higher rate of X.', '"confuses absolute numbers with proportional rates"'],
      ['**Overlap (Double-Most)**', 'From "Most A are B" and "Most A are C" concludes "Some B are C"', 'Most A are B. Most A are C. ∴ Some B are C.', '"draws an unwarranted conclusion about overlap"'],
      ['**Net Effect**', 'Ignores offsetting factors; treats one factor as decisive', 'X increases Y. ∴ Y will increase. (Ignores Z decreasing Y.)', '"overlooks the possibility that other factors offset the effect"'],
      ['**Compared-to-What / Missing Comparison**', 'Draws comparative conclusion from non-comparative data', 'Group A has high Y. ∴ Being in A causes Y. (No baseline.)', '"draws a conclusion about causation without a comparison group"'],
      ['**Scope Shift**', 'Conclusion exceeds evidence\'s scope', 'Some X are Y. ∴ All X are Y.', '"generalizes on the basis of what could be exceptional cases"'],
      ['**Ad Hominem / Source Attack**', 'Attacks the person instead of the argument', 'Person X is biased. ∴ X\'s argument is wrong.', '"rejects a claim by attacking the person who made it"'],
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'Matching Checklist' },
    { type: 'paragraph', text: 'What must match between the stimulus and the correct answer. Use this checklist when evaluating contenders:' },
    { type: 'breakdown', labels: { title: 'Must Match', text: 'Why It Matters' }, items: [
      { title: 'Flaw Type', text: 'The *category* of error must be identical. A Mistaken Reversal cannot match a Mistaken Negation. Composition cannot match Division. If the stimulus commits a conditional logic error, the answer must too.', badge: 'Non-Negotiable', badgeColor: 'red' },
      { title: 'Logical Direction', text: 'The *direction* of the flawed inference must match. Part → Whole (Composition) ≠ Whole → Part (Division). B→A (Reversal) ≠ ~A→~B (Negation). Same flaw family, wrong direction = wrong answer.', badge: 'Non-Negotiable', badgeColor: 'red' },
      { title: 'Scope of Conclusion', text: 'The conclusion\'s scope and certainty should align. If the stimulus concludes "must" or "all," the answer should not conclude "might" or "some." If the stimulus concludes about a group, the answer should not conclude about an individual (or vice versa).', badge: 'Strong Signal', badgeColor: 'blue' },
      { title: 'Argument Must Be Flawed', text: 'The correct answer *must* contain a logical error. Any valid argument is automatically wrong. This is the defining feature of Parallel Flaw vs. Parallel Reasoning.', badge: 'Non-Negotiable', badgeColor: 'red' },
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'Common Traps: Complete Breakdown' },
    { type: 'breakdown', labels: { title: 'Trap', text: 'How It Works & How to Avoid It' }, items: [
      { title: 'Matches Structure, Not Flaw', text: 'The answer has the same *surface structure* (same number of premises, similar topic, same conclusion type) but commits a *different* logical error. It looks parallel but the flaw mechanism is wrong.\n\n**Avoid it:** Name the flaw first. Ignore structure until you\'ve confirmed the flaw type matches.', badge: 'Very Common', badgeColor: 'red' },
      { title: 'Matches Flaw, Wrong Direction', text: 'The answer commits a flaw in the same *family* but the *opposite direction*. Stimulus: Composition (Part→Whole). Trap: Division (Whole→Part). Stimulus: Mistaken Reversal. Trap: Mistaken Negation.\n\n**Avoid it:** Diagram the direction of the error. Part→Whole ≠ Whole→Part. B→A ≠ ~A→~B.', badge: 'Very Common', badgeColor: 'red' },
      { title: 'Only One of Two Flaws Matches', text: 'The stimulus commits *two* distinct flaws. The trap answer commits only one of them — and it\'s the more obvious one. You pick it because you see the match, but the second flaw is missing or different.\n\n**Avoid it:** If the stimulus has multiple logical errors, the answer must replicate *all* of them in the same way.', badge: 'Common', badgeColor: 'red' },
      { title: 'Valid Argument Trap', text: 'The answer is a perfectly valid argument that *resembles* the stimulus in topic or structure. It\'s tempting because it\'s coherent and well-constructed.\n\n**Avoid it:** In Parallel Flaw, **every valid answer is wrong.** The correct answer must be broken. If the conclusion follows from the premises, eliminate immediately.', badge: 'Common', badgeColor: 'red' },
      { title: 'Similar but Different Flaw', text: 'The trap describes a flaw that *sounds* like the stimulus\'s error but is structurally distinct. E.g., "Third Factor" vs. "Correlation→Causation" — both causal, but different mechanisms.\n\n**Avoid it:** Be precise. Correlation→Causation = "X and Y co-occur, therefore X causes Y." Third Factor = "X and Y both caused by Z." They are not interchangeable.', badge: 'Common', badgeColor: 'red' },
      { title: 'Topic Seduction', text: 'The answer discusses the same subject matter as the stimulus (medicine, politics, art). Your brain is drawn to the familiarity and you overlook that the logical error is different.\n\n**Avoid it:** Topic is irrelevant. Cover the content and compare only the abstract reasoning pattern.', badge: 'Moderate', badgeColor: 'slate' },
      { title: 'Conclusion Type Mismatch', text: 'The flaw matches but the conclusion type differs: stimulus concludes a recommendation ("should"); trap concludes a factual claim ("is"). Or stimulus concludes "all"; trap concludes "some."\n\n**Avoid it:** Use conclusion type and certainty as a tiebreaker when two choices survive. If one matches and one doesn\'t, the match is stronger.', badge: 'Moderate', badgeColor: 'slate' },
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'Parallel Flaw vs. Parallel Reasoning' },
    { type: 'paragraph', text: 'Quick-reference comparison. These question types are easy to confuse — the distinction changes your entire approach:' },
    { type: 'table', headers: ['Feature', 'Parallel Reasoning (Module 4)', 'Parallel Flaw (Module 6)'], rows: [
      ['**What you match**', 'The overall logical structure (valid or invalid)', 'The specific logical *error*'],
      ['**Is the stimulus flawed?**', 'Not necessarily — may be valid', 'Always — stem specifies flawed reasoning'],
      ['**Must the answer be flawed?**', 'No — if stimulus is valid, answer must be valid', 'Yes — valid answers are automatically wrong'],
      ['**Primary skill**', 'Abstract structure into variables', 'Diagnose flaw type + abstract the error'],
      ['**Key modules**', 'Module 4 (structure), Module 2 (conclusion)', 'Module 5 (flaw), Module 4 (abstraction)'],
      ['**Stem language**', '"most similar in its reasoning"', '"most similar in its *flawed* reasoning"'],
      ['**Primary trap**', 'Quantifier/connector mismatch', 'Same flaw family, wrong direction'],
    ]},
    { type: 'callout', variant: 'default', title: 'Critical Difference', text: 'In Parallel Reasoning, a valid answer that matches a valid stimulus works. In Parallel Flaw, **every valid answer is eliminated** — the correct answer must be broken, and broken in exactly the same way. Naming the flaw with precision is the single most important step.' },
    { type: 'hr' },

    { type: 'h3', text: 'Timing Strategy' },
    { type: 'paragraph', text: 'Parallel Flaw questions are among the longest on the LR section. You are reading six full arguments (stimulus + five choices). Use your time strategically:' },
    { type: 'breakdown', labels: { title: 'Phase', text: 'Time & Action' }, items: [
      { title: 'Diagnose (Step 1)', text: '**40–50 seconds.** Read the stimulus. Identify conclusion and premises. Name the flaw precisely. Do not move on until you can state the error in one sentence.', badge: 'Critical', badgeColor: 'red' },
      { title: 'Abstract (Step 2)', text: '**10–15 seconds.** Write your blueprint. "If A → B. Not A. Therefore Not B." This is your filter.', badge: 'Quick', badgeColor: 'blue' },
      { title: 'Match (Step 3)', text: '**60–90 seconds.** Scan choices. Eliminate valid arguments first. Eliminate wrong flaw types. Confirm the survivor matches your blueprint.', badge: 'Bulk of Time', badgeColor: 'blue' },
    ]},
    { type: 'callout', variant: 'tip', title: 'Time Budget', text: '**2:00–2:30 per question.** If you cannot name the flaw within 45 seconds, consider skipping and returning. A vague diagnosis leads to wrong answers; a precise one makes the match fast. The 40 seconds you invest in Step 1 saves 60+ seconds on the choices.' },
    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Test Day Checklist', text: "Before selecting your answer on any Parallel Flaw question:\n\n**1.** Can you **name the flaw** in one precise sentence?\n**2.** Can you state the **abstract blueprint** (e.g., \"If A → B. Not A. Therefore Not B.\")?\n**3.** Have you **eliminated all valid arguments**? (Valid = wrong in Parallel Flaw.)\n**4.** Does your chosen answer commit the **same flaw type** (not just a similar one)?\n**5.** Does your chosen answer match the **logical direction** (Part→Whole vs. Whole→Part, Reversal vs. Negation)?\n**6.** Does the **scope of the conclusion** align (certainty, quantifier, subject)?\n**7.** If the stimulus has **two flaws**, does the answer replicate both?\n**8.** Have you avoided **topic seduction** — comparing only the reasoning, not the subject matter?\n\n**Time Budget:** 2:00–2:30. If stuck, skip and return. A clear blueprint is worth more than extra reading time." },
  ]
};
