import { Lesson } from '../../types';

export const Lesson11_ReferenceGuide: Lesson = {
  id: "17-11",
  title: "Reference Guide",
  content: [
    { type: 'h2', text: 'Module 17: Must Be True \u2014 Reference Guide' },
    { type: 'paragraph', text: 'This reference guide consolidates everything from Module 17 into a single, quick-access resource. Use it for pre-test review, timed practice sessions, and as a checklist before attempting Must Be True questions.' },

    { type: 'hr' },

    { type: 'h2', text: '1. The 4-Step Method' },
    { type: 'paragraph', text: 'Every Must Be True question follows the same repeatable process. Memorize this sequence and apply it consistently.' },
    { type: 'process', title: 'The 4-Step Method', steps: [
      '**Step 1 \u2014 Identify the Task and Set the Standard of Proof:** Read the question stem first. Words like "must also be true," "follows logically," or "can be properly inferred" confirm that your task is to find the answer choice that is 100% proven by the stimulus. Accept all stimulus information as fact and adopt the standard of absolute certainty.',
      '**Step 2 \u2014 Deconstruct the Stimulus into Factual Components:** Break the stimulus into discrete logical components. Identify conditional statements (if-then), quantifier statements (all, most, some, none), causal or explanatory links, and numerical or statistical data. Create a mental inventory of every rule and fact.',
      '**Step 3 \u2014 Synthesize and Predict the Deduction:** Find the common term or concept that connects two or more components. Ask: "Can I form a conditional chain? Apply a universal rule to a particular group? Resolve a numerical paradox? Trace a causal mechanism to its inevitable consequence?" Form a pre-phrase \u2014 a prediction of what the correct answer will state.',
      '**Step 4 \u2014 Systematically Evaluate the Answer Choices:** Scan all five options for a match to your pre-phrase. For each remaining contender, apply the strict certainty test: "Can I find any scenario where the stimulus is true but this answer is false?" If yes, eliminate it. The correct answer cannot be false when the stimulus is true.',
    ]},

    { type: 'callout', variant: 'tip', title: 'Timing Target', text: '~15 sec reading the stem and confirming question type \u2192 ~30 sec deconstructing the stimulus \u2192 ~15 sec synthesizing and pre-phrasing \u2192 ~30 sec evaluating choices \u2192 ~10 sec final verification. Total: **~100 seconds.** The synthesis step is non-negotiable \u2014 skipping it makes you vulnerable to attractive distractors.' },

    { type: 'hr' },

    { type: 'h2', text: '2. MBT Reasoning Types' },
    { type: 'paragraph', text: 'Must Be True stimuli generate provable conclusions through recurring logical patterns. Recognizing the pattern accelerates your synthesis.' },

    { type: 'table', headers: ['Reasoning Type', 'How It Works', 'What to Look For', 'Lesson'], rows: [
      ['**Conditional Chain**', 'Multiple if-then statements share a common term, forming a chain (A\u2192B, B\u2192C, therefore A\u2192C). The contrapositive of the full chain is equally valid.', 'Keywords like "if," "all," "only if," "unless," "no," "none." Two or more conditional statements with a shared element.', 'Lesson 3'],
      ['**Quantifier Overlap**', 'A universal rule ("all" or "none") combines with a "some" or "most" statement. The universal rule applies to every member of the quantified group, producing a guaranteed inference.', 'A broad rule (All X are Y) paired with a specific-group statement (Some Z are X). The specific group inherits the universal property.', 'Lesson 4'],
      ['**Numerical Deduction**', 'Numerical or proportional facts force a mathematical conclusion. Ratios, percentages, or totals constrain what must be true about another variable.', 'Percentages, counts, ratios, or statements like "increased by 30%." A constant ratio with a changing denominator forces the numerator to change.', 'Lesson 5'],
      ['**Set Relationship**', 'Groups are defined with overlapping or exclusive membership. Combining group definitions with universal or existential claims produces a conclusion about group membership.', 'Statements defining groups (professors, voters, etc.) paired with inclusion/exclusion rules and existential claims ("some brilliant people are...").', 'Lesson 4'],
      ['**Multi-Step Inference**', 'An "either/or" (disjunctive) premise combines with conditional rules. Denying one disjunct triggers the other, which in turn triggers its conditional consequence.', '"Either X or Y" combined with "If X then A" and "If Y then B." Applying the contrapositive to one branch forces the other.', 'Lesson 8'],
      ['**Disparity-Based**', 'A property of a subgroup conflicts with a property of the total population. The inference concerns the "other" subgroup that must exist to account for the disparity.', 'A subgroup fact that seems to contradict an overall fact (e.g., subgroup is fast but the total is slow). The other subgroup must be large or extreme enough to produce the overall result.', 'Lesson 9'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: '3. MBT vs. MSS vs. Fill in the Blank' },
    { type: 'paragraph', text: 'These three question types all reason from stimulus to answer, which makes them easy to confuse. Use this comparison to distinguish them quickly and apply the correct strategy.' },

    { type: 'table', headers: ['Feature', 'Must Be True (MBT)', 'Most Strongly Supported (MSS)', 'Fill in the Blank'], rows: [
      ['**Standard of proof**', 'Absolute certainty (100%). The answer must be logically guaranteed by the stimulus.', 'High probability (~99%). The answer is the most supported option, but a tiny inferential leap is acceptable.', 'Certainty within context. The answer must complete the argument\'s logic as the author intended.'],
      ['**Direction of reasoning**', 'Stimulus \u2192 Answer. The stimulus provides facts; you find what must logically follow.', 'Stimulus \u2192 Answer. The stimulus provides facts; you find the conclusion they best support.', 'Stimulus \u2192 Answer. The stimulus provides an incomplete argument; you supply the missing piece.'],
      ['**Stimulus structure**', 'A set of facts or rules with no stated conclusion. Often uses conditionals or quantifiers.', 'A collection of facts without a stated conclusion. Often uses causal or comparative language.', 'An argument with a blank (often at the end) where the conclusion or key premise belongs.'],
      ['**Role of the answer**', 'The answer IS a guaranteed consequence of the facts \u2014 it cannot be false if the stimulus is true.', 'The answer IS the conclusion best supported by the evidence, though not necessarily proven beyond doubt.', 'The answer completes the argument by filling a logical gap \u2014 it must fit the argument\'s structure and purpose.'],
      ['**Key test**', '"Can I find ANY scenario where the stimulus is true but this answer is false? If yes, eliminate it."', '"Is this the answer that the evidence supports MOST? Does any answer have stronger backing?"', '"Does this choice complete the argument\'s logic naturally? Does it match the author\'s direction?"'],
      ['**Typical stems**', '"must be true," "follows logically," "can be properly concluded," "logically follows"', '"most strongly supported," "can be properly inferred," "most supported by the information"', '"which one of the following most logically completes the argument?" (blank in stimulus)'],
    ]},

    { type: 'callout', variant: 'default', title: 'Key Distinction', text: 'MBT demands 100% certainty \u2014 if you can construct even one counter-scenario, the answer fails. MSS allows a small inferential leap (~99% confidence). Fill in the Blank asks you to complete an argument rather than derive a new conclusion, so the answer must fit the argument\'s existing structure and logical flow.' },

    { type: 'hr' },

    { type: 'h2', text: '4. The Certainty Test' },
    { type: 'paragraph', text: 'The Certainty Test is the defining skill for Must Be True questions. Use it to verify that your selected answer truly MUST be true.' },

    { type: 'process', title: 'How to Verify an Answer Must Be True', steps: [
      '**Accept the stimulus as fact.** Every statement in the stimulus is a given, unchangeable truth for the purpose of the question. Do not question or evaluate the premises.',
      '**Attempt to construct a counter-scenario.** Ask: "Is there ANY possible world in which every statement in the stimulus is true, but this answer choice is false?" Actively try to make the answer fail while keeping the stimulus intact.',
      '**If you CAN construct a counter-scenario:** The answer choice is not guaranteed \u2014 eliminate it. It may be something that "could be true" or "is likely true," but it does not pass the certainty standard.',
      '**If you CANNOT construct a counter-scenario:** The answer is locked in by the stimulus\'s constraints. It must be true whenever the stimulus is true. Select it with confidence.',
      '**Final check \u2014 trace the logical path.** Point to the specific facts, rules, or combinations of facts that prove the answer. If you cannot articulate the proof, revisit your synthesis.',
    ]},

    { type: 'callout', variant: 'tip', title: 'The Litmus Question', text: 'Ask yourself: "If I showed the stimulus to 1,000 logicians, would every single one agree this answer is proven?" If the answer is yes, it passes the Certainty Test. If even one logician could reasonably disagree, the answer is not certain enough for MBT.' },

    { type: 'hr' },

    { type: 'h2', text: '5. Quantifier Reference' },
    { type: 'paragraph', text: 'Quantifiers define the size and scope of groups. Understanding exactly what each quantifier guarantees \u2014 and what it does not \u2014 is essential for avoiding invalid inferences.' },

    { type: 'table', headers: ['Quantifier', 'Meaning', 'Minimum Guaranteed', 'What Overlaps It Creates', 'Common Trap'], rows: [
      ['**All / Every**', 'The entire group without exception.', '100% of the group.', 'If All A are B, then any member of A is guaranteed to also be a member of B. Combine with "Some C are A" to conclude "Some C are B."', 'Reversing: "All A are B" does NOT mean "All B are A."'],
      ['**Most**', 'More than half of the group.', 'At least 51% (more than half).', 'If Most A are B and Most A are C, the B and C groups must overlap within A (the two "most" groups cannot fit without sharing members). This guarantees "Some B-A members are also C."', 'Treating "most" as "all" \u2014 "most" still allows exceptions.'],
      ['**Some**', 'At least one member of the group.', 'At least 1 (could be all).', '"Some A are B" means at least one member belongs to both groups. But two separate "some" claims (Some A are B; Some A are C) do NOT guarantee overlap between B and C within A.', 'Assuming two "some" groups must overlap \u2014 they may be entirely disjoint.'],
      ['**None / No**', 'Zero members of the group.', '0% \u2014 complete exclusion.', '"No A are B" means the two groups are entirely separate. Any member of A is guaranteed NOT to be a member of B, and vice versa. Equivalent to "All A are not-B."', 'Assuming "none" applies only in one direction \u2014 "No A are B" also means "No B are A."'],
    ]},

    { type: 'callout', variant: 'default', title: 'Valid vs. Invalid Quantifier Combinations', text: '**Valid:** All A are B + Some C are A \u2192 Some C are B.\n**Valid:** Most A are B + Most A are C \u2192 Some B-members-of-A are C.\n**Valid:** No A are B + Some C are A \u2192 Some C are not B.\n**Invalid:** Some A are B + Some A are C \u2192 Some B are C. (Two "some" groups within A may be completely separate.)\n**Invalid:** All A are B \u2192 All B are A. (Reversal \u2014 B may include non-A members.)' },

    { type: 'hr' },

    { type: 'h2', text: '6. Common Traps' },
    { type: 'paragraph', text: 'Wrong answers on Must Be True questions fall into predictable categories. Memorize these patterns to eliminate traps quickly during timed practice.' },

    { type: 'breakdown', labels: { title: 'Trap', text: 'Description & How to Spot It' }, items: [
      { title: '1. Could Be True (Not Must Be True)', text: 'The answer is consistent with the stimulus but is not proven by it. It represents one possible scenario among many. **Test:** Can you construct a scenario where the stimulus is true and this answer is false? If yes, it only "could be true."', badge: 'Certainty', badgeColor: 'red' },
      { title: '2. Probably True (Not Certainly True)', text: 'The answer seems likely given the stimulus but requires an assumption or inferential leap to reach certainty. It would be a strong MSS answer but fails the MBT standard. **Test:** Does reaching this conclusion require any assumption not stated in the stimulus?', badge: 'Certainty', badgeColor: 'red' },
      { title: '3. Too Extreme', text: 'The answer uses absolute language (all, never, only, impossible) when the stimulus uses hedged language (some, can, usually). The direction may be correct, but the degree is wrong. **Test:** Would softening the answer\'s language make it more defensible given the stimulus?', badge: 'Strength', badgeColor: 'indigo' },
      { title: '4. Reverses a Conditional', text: 'The answer flips the direction of a conditional statement. If the stimulus says A\u2192B, this trap claims B\u2192A (the mistaken reversal) or ~A\u2192~B (the mistaken negation). **Test:** Does the answer\'s logical arrow point the same direction as the stimulus\'s? Is it applying a valid contrapositive (~B\u2192~A) or an invalid reversal (B\u2192A)?', badge: 'Logic', badgeColor: 'blue' },
      { title: '5. Outside Scope', text: 'The answer introduces a concept, comparison, or topic that the stimulus never mentions or implies. It may sound plausible based on real-world knowledge, but the stimulus provides no basis for it. **Test:** Can you point to a specific sentence in the stimulus that supports every term in this answer?', badge: 'Scope', badgeColor: 'slate' },
      { title: '6. Invalid Quantifier Inference', text: 'The answer makes a flawed deduction by combining two "some" statements to claim an overlap, or by reversing an "all" statement. **Test:** Does the quantifier logic actually guarantee this result, or does it only permit it?', badge: 'Logic', badgeColor: 'blue' },
      { title: '7. Confuses Correlation with Causation', text: 'The answer assumes a causal relationship when the stimulus only describes a correlation or co-occurrence. **Test:** Does the stimulus explicitly state a causal mechanism, or merely describe a pattern?', badge: 'Logic', badgeColor: 'blue' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: '7. Test Day Checklist' },
    { type: 'paragraph', text: 'Run through this checklist on every Must Be True question during timed practice and on test day.' },

    { type: 'process', title: 'Test Day Checklist', steps: [
      '**Confirm the question type.** The stem says "must be true," "follows logically," "can be properly concluded," or "can be properly inferred." If the stem asks what is "most strongly supported" or what "strengthens," switch to the correct strategy.',
      '**Read the stimulus as a fact collector.** Accept every statement as true. Do not evaluate whether the premises are reasonable \u2014 your only job is to determine what is logically guaranteed.',
      '**Identify the reasoning type.** Is the stimulus building a conditional chain? Combining quantifiers? Presenting numerical data? Creating a subgroup disparity? Recognizing the pattern accelerates your synthesis.',
      '**Deconstruct before reading choices.** Break the stimulus into its logical components. Note conditionals, quantifiers, causal links, and numerical data separately.',
      '**Synthesize and pre-phrase.** Pause after deconstructing and ask: "What is logically locked in by combining these facts?" Form a clear prediction of what the correct answer will say.',
      '**Match your pre-phrase to the choices.** Scan all five options for the one that aligns with your prediction. Do not expect identical wording \u2014 expect the same logical content expressed differently.',
      '**Apply the Certainty Test to contenders.** For each remaining option, ask: "Can I construct ANY scenario where the stimulus is true but this answer is false?" If yes, eliminate it.',
      '**Check for common traps.** Does any remaining choice reverse a conditional? Use language that is too extreme? Introduce outside concepts? Confuse "could" with "must"? Make an invalid quantifier inference?',
      '**Trace the proof.** Before committing, articulate the specific facts or combination of facts that prove your answer. If you cannot point to the proof, revisit your synthesis.',
      '**Select and move on.** Commit to your answer. MBT questions reward precise deconstruction and strict logical standards \u2014 if you followed the 4 steps and the Certainty Test, trust the process.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Quick-Reference Tables' },

    { type: 'h3', text: 'Reasoning Type Quick-Check' },
    { type: 'table', headers: ['If You See...', 'The Reasoning Type Is Likely...', 'Synthesis Strategy'], rows: [
      ['Multiple if-then statements sharing a common term', 'Conditional Chain', 'Link the chain (A\u2192B\u2192C) and derive the full connection or its contrapositive (~C\u2192~A).'],
      ['A universal rule ("All" or "No") with a "Some" statement', 'Quantifier Overlap', 'Apply the universal rule to every member of the quantified group to derive a new guaranteed fact.'],
      ['Percentages, ratios, or counts with a constant relationship', 'Numerical Deduction', 'Set up the mathematical relationship and solve for the unknown variable.'],
      ['Group definitions with inclusion/exclusion rules', 'Set Relationship', 'Map group memberships and identify what must be true about overlapping or excluded members.'],
      ['"Either X or Y" combined with conditional rules', 'Multi-Step Inference', 'Deny one disjunct to trigger the other, then follow the conditional chain from there.'],
      ['A subgroup fact that contradicts the overall population fact', 'Disparity-Based', 'Infer that the "other" subgroup must be large or extreme enough to produce the overall result.'],
    ]},

    { type: 'h3', text: 'Certainty Spectrum' },
    { type: 'table', headers: ['Level', 'Description', 'Sufficient for MBT?', 'Sufficient for MSS?'], rows: [
      ['Certain (100%)', 'Logically guaranteed \u2014 no counter-scenario exists.', 'Yes \u2714', 'Yes \u2714'],
      ['Very Likely (~99%)', 'Requires only a tiny inferential leap beyond the text.', 'No \u2718', 'Yes \u2714'],
      ['Probable (~75%)', 'Reasonable given the evidence but not locked in.', 'No \u2718', 'Sometimes'],
      ['Possible (~50%)', 'Consistent with the stimulus but equally consistent with alternatives.', 'No \u2718', 'No \u2718'],
      ['Speculative (<25%)', 'Requires substantial assumptions beyond the stimulus.', 'No \u2718', 'No \u2718'],
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Module 17 Summary', text: '**Must Be True = Deductive Certainty.** You receive a set of facts and determine which answer choice is logically guaranteed to be true.\n\n**The 4-Step Method:** Identify the Task \u2192 Deconstruct the Stimulus \u2192 Synthesize and Predict \u2192 Evaluate with the Certainty Test.\n\n**Six reasoning types:** Conditional Chain, Quantifier Overlap, Numerical Deduction, Set Relationship, Multi-Step Inference, Disparity-Based.\n\n**Standard of proof:** Absolute certainty (100%). If you can construct even one counter-scenario where the stimulus is true but the answer is false, eliminate that answer.\n\n**Seven common traps:** Could be true, probably true, too extreme, reverses conditional, outside scope, invalid quantifier inference, confuses correlation with causation.\n\n**The Certainty Test is your safeguard.** Always ask: "Is there ANY possible world where the stimulus is true and this answer is false?" If the answer is yes, move on.' },
  ]
};
