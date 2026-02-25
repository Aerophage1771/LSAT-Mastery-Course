import { Lesson } from '../../types';

export const Lesson6_ReferenceGuide: Lesson = {
  id: "18-6",
  title: "Reference Guide",
  content: [
    { type: 'h2', text: 'Module 18: Must Be False \u2014 Reference Guide' },
    { type: 'paragraph', text: 'This reference guide consolidates everything from Module 18 into a single, quick-access resource. Use it for pre-test review, timed practice sessions, and as a checklist before attempting Must Be False questions.' },

    { type: 'hr' },

    { type: 'h2', text: '1. The 4-Step Method' },
    { type: 'paragraph', text: 'Every Must Be False question follows the same repeatable process. Memorize this sequence and apply it consistently.' },
    { type: 'process', title: 'The 4-Step Method', steps: [
      '**Step 1 \u2014 Check the Facts and Find the Rules:** Read the stimulus with one goal: identify every absolute rule. Accept everything as 100% true. Prioritize words that establish strict constraints \u2014 quantity words like "all," "every," "none," "never," and relational words like "if/then," "only if," "requires," "must." Note probabilistic terms ("most," "some," "usually") separately, as they are harder to contradict.',
      '**Step 2 \u2014 Combine Rules and Prephrase a Contradiction:** Chain your conditional statements to find hidden requirements. Check whether any rules prove that two things cannot coexist. Before looking at the answers, finish this sentence: "The one thing that absolutely cannot happen is\u2026" This becomes your Anti-Rule.',
      '**Step 3 \u2014 Scan Answers for a Conflict:** Evaluate each answer choice against the rules and your prephrase. Ask: "Does this answer force a violation of the rules?" If it creates a direct, unavoidable contradiction with the stimulus, it is the correct answer.',
      '**Step 4 \u2014 Eliminate Incorrect Answers and Traps:** For every remaining choice, ask: "Is there any way this could happen without breaking the rules?" If you can construct even one scenario where the statement fits, it is a wrong answer. The four incorrect answers will always be logically possible.',
    ]},

    { type: 'callout', variant: 'tip', title: 'Timing Target', text: '~15 sec reading the stem and confirming question type \u2192 ~30 sec deconstructing the stimulus and identifying rules \u2192 ~15 sec combining rules and prephrasing the Anti-Rule \u2192 ~30 sec scanning and evaluating choices \u2192 ~10 sec final verification. Total: **~100 seconds.** The prephrasing step is non-negotiable \u2014 skipping it leaves you vulnerable to "Must Be True" traps.' },

    { type: 'hr' },

    { type: 'h2', text: '2. MBF Contradiction Types' },
    { type: 'paragraph', text: 'Must Be False stimuli create contradictions through recurring logical patterns. Recognizing the pattern accelerates your synthesis and prephrasing.' },

    { type: 'table', headers: ['Contradiction Type', 'How It Works', 'What to Look For', 'Lesson'], rows: [
      ['**Conditional Violation**', 'The stimulus establishes an if-then rule using absolute language. The correct answer describes a scenario where the sufficient condition is met but the necessary condition is violated.', 'Keywords like "never," "always," "must," "requires," "no." An absolute conditional statement that admits zero exceptions.', 'Lesson 3'],
      ['**Quantifier Clash**', 'A universal rule ("all," "every," "for all") is paired with an answer choice that introduces an exception. The "All vs. Some Not" clash creates a direct contradiction.', 'Universal quantifiers in the stimulus ("all species," "every member") paired with an answer claiming at least one exception exists.', 'Lesson 4'],
      ['**Exclusive Boundary**', 'Multiple facts about time, geography, or category definitions combine to create a logical "forbidden zone." The correct answer places an entity in that zone.', 'Interlocking facts about places, time periods, and group definitions. Timeline words like "during," "before," "throughout," and "exclusively."', 'Lesson 5'],
      ['**Numerical Impossibility**', 'The stimulus establishes numerical constraints (percentages, totals, ratios) that make a particular outcome mathematically impossible.', 'Specific numbers, percentages, or proportional relationships. A total that is fixed or bounded in a way that forbids a particular distribution.', 'Lessons 3\u20135'],
      ['**Temporal Impossibility**', 'The stimulus defines a strict sequence or duration constraint. The correct answer describes an event occurring at a time that is logically excluded by the sequence.', 'Words like "before," "after," "only during," "exclusively," and "throughout." Strict ordering or duration constraints.', 'Lesson 5'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: '3. MBF vs. MBT Comparison' },
    { type: 'paragraph', text: 'Must Be False and Must Be True questions both require deductive certainty, but they point in opposite directions. Use this comparison to avoid confusing the two.' },

    { type: 'table', headers: ['Feature', 'Must Be False (MBF)', 'Must Be True (MBT)'], rows: [
      ['**Goal**', 'Find the one answer that is logically **impossible** given the stimulus.', 'Find the one answer that is logically **guaranteed** given the stimulus.'],
      ['**Standard of proof**', 'Absolute certainty (100%). The answer must be completely contradicted by the stimulus \u2014 it cannot possibly be true.', 'Absolute certainty (100%). The answer must be completely proven by the stimulus \u2014 it cannot possibly be false.'],
      ['**Direction of reasoning**', 'Stimulus \u2192 Anti-Rule. You derive what is forbidden and match it to an answer.', 'Stimulus \u2192 Deduction. You derive what is guaranteed and match it to an answer.'],
      ['**Stimulus structure**', 'A set of facts or rules. Often uses absolute language ("all," "never," "no") to create rigid constraints.', 'A set of facts or rules. Often uses conditionals, quantifiers, or numerical data that combine to force a conclusion.'],
      ['**Role of the correct answer**', 'The answer directly contradicts the stimulus. It describes a scenario that is logically impossible if the stimulus is true.', 'The answer is a logical consequence of the stimulus. It describes something that must be true if the stimulus is true.'],
      ['**Key test**', '"Can I find ANY scenario where the stimulus is true AND this answer is also true? If no, it must be false."', '"Can I find ANY scenario where the stimulus is true BUT this answer is false? If no, it must be true."'],
      ['**Incorrect answers**', 'Statements that could be true \u2014 they are consistent with the stimulus and do not violate any rule.', 'Statements that could be false \u2014 they are not guaranteed by the stimulus.'],
      ['**Typical stems**', '"CANNOT be true," "could be true EXCEPT," "incompatible with," "violates the principle"', '"must be true," "follows logically," "can be properly concluded," "can be properly inferred"'],
    ]},

    { type: 'callout', variant: 'default', title: 'Key Distinction', text: 'MBF asks: "Which answer is **forbidden** by the rules?" MBT asks: "Which answer is **required** by the rules?" Both demand 100% certainty, but in opposite directions. The most dangerous trap on MBF questions is selecting an answer that *must be true* \u2014 a strong logical consequence of the stimulus that you mistake for a contradiction.' },

    { type: 'hr' },

    { type: 'h2', text: '4. The EXCEPT Strategy' },
    { type: 'paragraph', text: '"Could be true EXCEPT" is the most common phrasing for Must Be False questions. This wording can be confusing because it frames the task in terms of possibility rather than impossibility. The EXCEPT Strategy gives you a systematic approach.' },

    { type: 'process', title: 'The EXCEPT Strategy', steps: [
      '**Recognize the translation.** "Each of the following could be true EXCEPT" = "Which one of the following must be false?" Mentally convert the question stem before you begin.',
      '**Label each answer choice.** As you evaluate, mark each choice as either POSSIBLE (could be true) or IMPOSSIBLE (must be false). Four choices will be POSSIBLE; one will be IMPOSSIBLE.',
      '**Test for possibility, not truth.** You do not need to prove that an answer IS true \u2014 only that it COULD be true. If you can construct even one scenario, no matter how unlikely, where the stimulus is true and the answer choice is also true, it is a wrong answer.',
      '**Identify the outlier.** The correct answer is the only choice where no such scenario exists. Every attempt to make it true creates a contradiction with the stimulus.',
      '**Verify the contradiction.** Point to the specific rule(s) in the stimulus that the correct answer violates. If you cannot articulate the exact conflict, reconsider your selection.',
    ]},

    { type: 'callout', variant: 'tip', title: 'EXCEPT Shortcut', text: 'When you see "EXCEPT" in the stem, circle or underline it immediately. Then, next to each answer choice, write a quick "P" (possible) or "X" (impossible) as you evaluate. This prevents the common mistake of accidentally selecting a "could be true" answer because you lost track of the inverted logic.' },

    { type: 'hr' },

    { type: 'h2', text: '5. Quantifier Contradiction Reference' },
    { type: 'paragraph', text: 'Understanding which quantifier combinations create contradictions is essential for Must Be False questions. If the stimulus establishes one column, any answer that asserts the opposite column creates a direct clash.' },

    { type: 'table', headers: ['Stimulus Establishes', 'Answer That Contradicts It', 'Why It\'s a Contradiction'], rows: [
      ['**All A are B**', 'Some A are not B', 'A universal rule allows zero exceptions. Claiming even one exception destroys it.'],
      ['**No A are B**', 'Some A are B', 'Complete exclusion means zero overlap. Claiming even one shared member is impossible.'],
      ['**Some A are B**', 'No A are B', 'At least one overlap is guaranteed. Claiming zero overlap contradicts the established fact.'],
      ['**Some A are not B**', 'All A are B', 'At least one exception exists. Claiming universal inclusion contradicts the established exception.'],
    ]},

    { type: 'callout', variant: 'default', title: 'The Quantifier Square', text: '**Contradictory pairs** (cannot both be true AND cannot both be false):\n\u2022 "All A are B" \u2194 "Some A are not B"\n\u2022 "No A are B" \u2194 "Some A are B"\n\n**Contrary pairs** (cannot both be true, but CAN both be false):\n\u2022 "All A are B" \u2194 "No A are B"\n\n**Subcontrary pairs** (can both be true, but CANNOT both be false):\n\u2022 "Some A are B" \u2194 "Some A are not B"\n\nFor MBF questions, focus on **contradictory pairs** \u2014 these are the combinations that guarantee impossibility.' },

    { type: 'hr' },

    { type: 'h2', text: '6. Common Traps' },
    { type: 'paragraph', text: 'Wrong answers on Must Be False questions fall into predictable categories. Memorize these patterns to eliminate traps quickly during timed practice.' },

    { type: 'breakdown', labels: { title: 'Trap', text: 'Description & How to Spot It' }, items: [
      { title: '1. Could Be False (Not Must Be False)', text: 'The answer describes something that might not happen, but the stimulus does not strictly forbid it. Being unlikely is not the same as being impossible. **Test:** Can you construct even one scenario where the stimulus and this answer are both true? If yes, it only "could be false" but is not proven false.', badge: 'Certainty', badgeColor: 'red' },
      { title: '2. Unlikely vs. Impossible', text: 'The answer describes an improbable scenario, but probability is irrelevant to logical impossibility. The stimulus must logically forbid it, not merely make it rare or surprising. **Test:** Does the stimulus use absolute language that rules this out, or hedged language that merely makes it uncommon?', badge: 'Certainty', badgeColor: 'red' },
      { title: '3. Partially Contradicted', text: 'Part of the answer conflicts with the stimulus, but the answer as a whole describes a scenario that is still logically possible. Partial contradiction is not full contradiction. **Test:** Read the entire answer choice as one complete statement. Is the full statement impossible, or only a fragment of it?', badge: 'Scope', badgeColor: 'slate' },
      { title: '4. The "Must Be True" Trap', text: 'This is the most tempting trap on MBF questions. You correctly identify a strong logical consequence of the stimulus and select it, forgetting that a statement that must be true is the opposite of the correct answer. **Test:** Does this answer follow FROM the stimulus, or does it conflict WITH the stimulus?', badge: 'Direction', badgeColor: 'indigo' },
      { title: '5. The Flawed Inference Trap', text: 'The answer reverses a conditional (B\u2192A instead of A\u2192B). While this inference is logically invalid and not guaranteed, it is not necessarily false \u2014 it could still be true. Invalid does not mean impossible. **Test:** Is this reversal explicitly forbidden by the stimulus, or is it merely unproven?', badge: 'Logic', badgeColor: 'blue' },
      { title: '6. The Qualifier Exploitation Trap', text: 'The answer describes an exception to a "most" or "usually" rule. Since the stimulus already allows for exceptions through hedged language, the answer is possible and therefore incorrect. **Test:** Does the stimulus use absolute language ("all," "never") or probabilistic language ("most," "usually")? If probabilistic, exceptions are permitted.', badge: 'Logic', badgeColor: 'blue' },
      { title: '7. The Out-of-Scope Trap', text: 'The answer introduces a concept or topic the stimulus never addresses. Since the stimulus provides no rule about this topic, it cannot forbid it. Absence of information does not create a contradiction. **Test:** Can you point to a specific sentence in the stimulus that addresses every term in this answer?', badge: 'Scope', badgeColor: 'slate' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: '7. Test Day Checklist' },
    { type: 'paragraph', text: 'Run through this checklist on every Must Be False question during timed practice and on test day.' },

    { type: 'process', title: 'Test Day Checklist', steps: [
      '**Confirm the question type.** The stem says "CANNOT be true," "could be true EXCEPT," "incompatible with," or "violates the principle." If the stem asks what "must be true" or "most strongly supported," switch to the correct strategy.',
      '**Read the stimulus as a rule enforcer.** Accept every statement as true. Your job is not to evaluate the premises but to enforce the constraints they create. Focus on finding absolute, unbreakable rules.',
      '**Identify the contradiction type.** Is the stimulus setting up a conditional violation? A quantifier clash? An exclusive boundary? A numerical or temporal impossibility? Recognizing the pattern tells you exactly what kind of answer to look for.',
      '**Deconstruct before reading choices.** Break the stimulus into its logical components. Note conditionals, quantifiers, boundaries, and absolute terms separately. Sketch connections if the rules are complex.',
      '**Combine rules and prephrase the Anti-Rule.** Pause and ask: "What is the one thing that is absolutely forbidden by combining these facts?" Form a clear prediction of the impossible scenario.',
      '**Scan for the EXCEPT answer.** If the question says "could be true EXCEPT," label each choice as POSSIBLE or IMPOSSIBLE. Four will be possible; the correct answer will be the only impossible one.',
      '**Apply the Contradiction Test.** For each remaining option, ask: "Can I construct ANY scenario where the stimulus is true AND this answer is also true?" If you cannot, it must be false.',
      '**Check for common traps.** Is any remaining choice a "Must Be True" statement you are mistaking for a contradiction? Does it reverse a conditional without creating impossibility? Does it exploit a probabilistic qualifier? Is it out of scope?',
      '**Trace the contradiction.** Before committing, articulate the specific rule(s) that the correct answer violates. If you cannot point to the proof, revisit your synthesis.',
      '**Select and move on.** Commit to your answer. MBF questions reward precise rule identification and strict contradiction standards \u2014 if you followed the 4 steps and the Contradiction Test, trust the process.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Quick-Reference Tables' },

    { type: 'h3', text: 'Contradiction Type Quick-Check' },
    { type: 'table', headers: ['If You See...', 'The Contradiction Type Is Likely...', 'What to Look For in Answers'], rows: [
      ['An absolute if-then rule ("never," "must," "requires")', 'Conditional Violation', 'An answer where the sufficient condition is met but the necessary condition is violated.'],
      ['A universal quantifier ("all," "every," "for all")', 'Quantifier Clash', 'An answer that introduces an exception to the universal rule (e.g., "Some X are not Y").'],
      ['Interlocking facts about time, place, or category', 'Exclusive Boundary', 'An answer that places an entity in the logical "forbidden zone" created by combining constraints.'],
      ['Fixed totals, percentages, or ratios', 'Numerical Impossibility', 'An answer that claims a distribution or outcome that is mathematically excluded by the given numbers.'],
      ['Strict time sequences or "exclusively during" language', 'Temporal Impossibility', 'An answer that places an event outside the allowed time window or violates a sequence constraint.'],
    ]},

    { type: 'h3', text: 'Impossibility Spectrum' },
    { type: 'table', headers: ['Level', 'Description', 'Is It MBF?'], rows: [
      ['Impossible (0%)', 'Logically contradicted by the stimulus \u2014 no scenario exists where both are true.', 'Yes \u2714 \u2014 This is the correct answer.'],
      ['Very Unlikely (~5%)', 'Seems improbable given the stimulus but is not strictly forbidden.', 'No \u2718 \u2014 Unlikely is not impossible.'],
      ['Possible (~50%)', 'Consistent with the stimulus; does not violate any rule.', 'No \u2718 \u2014 This is an incorrect answer.'],
      ['Likely (~75%)', 'Supported by the stimulus but not proven.', 'No \u2718 \u2014 This is an incorrect answer.'],
      ['Must Be True (100%)', 'Logically guaranteed by the stimulus.', 'No \u2718 \u2014 This is the opposite of the correct answer.'],
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Module 18 Summary', text: '**Must Be False = Deductive Impossibility.** You receive a set of facts and determine which answer choice is logically impossible if those facts are true.\n\n**The 4-Step Method:** Check the Facts \u2192 Combine Rules and Prephrase the Anti-Rule \u2192 Scan for the Conflict \u2192 Eliminate Traps.\n\n**Five contradiction types:** Conditional Violation, Quantifier Clash, Exclusive Boundary, Numerical Impossibility, Temporal Impossibility.\n\n**Standard of proof:** Absolute certainty (100%). The correct answer cannot possibly be true when the stimulus is true. If you can construct even one scenario where both are true, eliminate that answer.\n\n**Seven common traps:** Could be false, unlikely vs. impossible, partially contradicted, "Must Be True" trap, flawed inference, qualifier exploitation, out of scope.\n\n**The Contradiction Test is your safeguard.** Always ask: "Is there ANY possible scenario where the stimulus is true AND this answer is also true?" If the answer is no, you have found the correct choice.' },
  ]
};
