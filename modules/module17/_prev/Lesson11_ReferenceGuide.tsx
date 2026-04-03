import { Lesson } from '../../types';

export const Lesson11_ReferenceGuide: Lesson = {
  id: '17-11',
  title: 'Reference Guide',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Reference Guide: Must Be True' },
    {
      type: 'paragraph',
      text: 'This reference guide consolidates everything from Module 18 into a single, quick-access resource. Use it for pre-test review, timed practice sessions, and as a checklist before attempting Must Be True questions.',
    },

    { type: 'hr' },

    { type: 'h2', text: '1. The 4-Step Method' },
    {
      type: 'paragraph',
      text: 'Every Must Be True question follows the same repeatable process. Memorize this sequence and apply it consistently. The crucial refinement is that MBT has two valid workflows: a prephrase-first path when the deduction is visible, and an answer-driven POE path when the stimulus is too dense for a clean prediction.',
    },
    {
      type: 'process',
      title: 'The 4-Step Method',
      steps: [
        '**Step 1 \u2014 Identify the Task and Set the Standard of Proof:** Read the question stem first. Words like "must also be true," "follows logically," or "can be properly inferred" confirm that your task is to find the answer choice that is 100% proven by the stimulus. Accept all stimulus information as fact and adopt the standard of absolute certainty.',
        '**Step 2 \u2014 Deconstruct the Stimulus into Governed Components:** Break the stimulus into discrete logical components. Identify conditional statements (if-then), quantifier statements (all, most, some, none), causal or explanatory links, and numerical or statistical data. Just as importantly, identify the exact **governed domain** of each rule plus any exception, purpose, or effect language.',
        '**Step 3 \u2014 Synthesize and Prephrase When the Inference Is Visible:** Find the common term or concept that connects two or more components. Ask: "Can I form a conditional chain? Apply a universal rule to a particular group? Resolve a numerical relationship? Trace a causal mechanism precisely?" If the deduction is clear, form a prephrase of what the correct answer will state.',
        '**Step 4 \u2014 Use Answer-Driven POE When the Inference Is Not Cleanly Visible:** If no strong prephrase emerges, scan the answer choices and eliminate mechanically. Remove any choice that leaves the governed domain, erases an exception, converts a purpose into a rule, overstates a quantifier, or fails the certainty test. The credited answer is still the one that cannot be false if the stimulus is true.',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Target',
      text: '~15 sec reading the stem and confirming question type \u2192 ~35 sec deconstructing the stimulus and fixing the governed domain \u2192 ~10-15 sec attempting a synthesis/prephrase \u2192 ~25-30 sec evaluating choices \u2192 ~10 sec final verification. Total: **~100 seconds.** Try to prephrase first, but if a clear deduction does not emerge, do not force one. Shift to answer-driven POE while keeping the MBT proof standard fully intact.',
    },

    { type: 'hr' },

    { type: 'h2', text: '2. MBT Reasoning Types' },
    {
      type: 'paragraph',
      text: 'Must Be True stimuli generate provable conclusions through recurring logical patterns. Recognizing the pattern accelerates your synthesis.',
    },

    {
      type: 'table',
      headers: ['Reasoning Type', 'How It Works', 'What to Look For', 'Lesson'],
      rows: [
        [
          '**Conditional Chain**',
          'Multiple if-then statements share a common term, forming a chain (A\u2192B, B\u2192C, therefore A\u2192C). The contrapositive of the full chain is equally valid.',
          'Keywords like "if," "all," "only if," "unless," "no," "none." Two or more conditional statements with a shared element.',
          'Lesson 3',
        ],
        [
          '**Quantifier Overlap**',
          'A universal rule ("all" or "none") combines with a "some" or "most" statement. The universal rule applies to every member of the quantified group, producing a guaranteed inference.',
          'A broad rule (All X are Y) paired with a specific-group statement (Some Z are X). The specific group inherits the universal property.',
          'Lesson 4',
        ],
        [
          '**Numerical Deduction**',
          'Numerical or proportional facts force a mathematical conclusion. Ratios, percentages, or totals constrain what must be true about another variable.',
          'Percentages, counts, ratios, or statements like "increased by 30%." A constant ratio with a changing denominator forces the numerator to change.',
          'Lesson 5',
        ],
        [
          '**Set Relationship**',
          'Groups are defined with overlapping or exclusive membership. Combining group definitions with universal or existential claims produces a conclusion about group membership.',
          'Statements defining groups (professors, voters, etc.) paired with inclusion/exclusion rules and existential claims ("some brilliant people are...").',
          'Lesson 4',
        ],
        [
          '**Governed Sets & Domains**',
          'A rule governs only a narrow subset, and the correct answer preserves that exact domain rather than broadening it to the entire topic.',
          'Dense category language, conjunctions that define a subgroup, boundary terms, or answer choices that sound close but shift who is actually governed.',
          'Lessons 4 and 12',
        ],
        [
          '**Multi-Step Inference**',
          'An "either/or" (disjunctive) premise combines with conditional rules. Denying one disjunct triggers the other, which in turn triggers its conditional consequence.',
          '"Either X or Y" combined with "If X then A" and "If Y then B." Applying the contrapositive to one branch forces the other.',
          'Lesson 8',
        ],
        [
          '**Disparity-Based**',
          'A property of a subgroup conflicts with a property of the total population. The inference concerns the "other" subgroup that must exist to account for the disparity.',
          'A subgroup fact that seems to contradict an overall fact (e.g., subgroup is fast but the total is slow). The other subgroup must be large or extreme enough to produce the overall result.',
          'Lesson 9',
        ],
        [
          '**Policy / Rule / Exception / Purpose / Effect**',
          'The stimulus mixes an operative rule with a carve-out, a policy purpose, or a consequence, and the correct answer keeps those layers distinct.',
          'Normative or institutional language, explicit exceptions, "to protect..." purpose clauses, and answers that try to turn purpose into obligation.',
          'Lessons 7, 10, and 13',
        ],
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Prephrase First, POE If Needed',
      text: 'A clear deduction is still the gold standard on MBT. But some hard questions are designed so that the answer choices present the inference more clearly than the stimulus does. On those questions, the right move is not to guess. It is to use answer-driven POE with full doctrinal discipline: stay inside the governed domain, preserve exceptions, separate purpose from rule, and reject any answer that is merely plausible rather than proven.',
    },

    { type: 'hr' },

    { type: 'h2', text: '3. MBT vs. MSS vs. Fill in the Blank' },
    {
      type: 'paragraph',
      text: 'These three question types all reason from stimulus to answer, which makes them easy to confuse. Use this comparison to distinguish them quickly and apply the correct strategy.',
    },

    {
      type: 'table',
      headers: ['Feature', 'Must Be True (MBT)', 'Most Strongly Supported (MSS)', 'Fill in the Blank'],
      rows: [
        [
          '**Standard of proof**',
          'Absolute certainty (100%). The answer must be logically guaranteed by the stimulus.',
          'High probability (~99%). The answer is the most supported option, but a tiny inferential leap is acceptable.',
          "Certainty within context. The answer must complete the argument's logic as the author intended.",
        ],
        [
          '**Direction of reasoning**',
          'Stimulus \u2192 Answer. The stimulus provides facts; you find what must logically follow.',
          'Stimulus \u2192 Answer. The stimulus provides facts; you find the conclusion they best support.',
          'Stimulus \u2192 Answer. The stimulus provides an incomplete argument; you supply the missing piece.',
        ],
        [
          '**Stimulus structure**',
          'A set of facts or rules with no stated conclusion. Often uses conditionals or quantifiers.',
          'A collection of facts without a stated conclusion. Often uses causal or comparative language.',
          'An argument with a blank (often at the end) where the conclusion or key premise belongs.',
        ],
        [
          '**Role of the answer**',
          'The answer IS a guaranteed consequence of the facts \u2014 it cannot be false if the stimulus is true.',
          'The answer IS the conclusion best supported by the evidence, though not necessarily proven beyond doubt.',
          "The answer completes the argument by filling a logical gap \u2014 it must fit the argument's structure and purpose.",
        ],
        [
          '**Key test**',
          '"Can I find ANY scenario where the stimulus is true but this answer is false? If yes, eliminate it."',
          '"Is this the answer that the evidence supports MOST? Does any answer have stronger backing?"',
          '"Does this choice complete the argument\'s logic naturally? Does it match the author\'s direction?"',
        ],
        [
          '**Typical stems**',
          '"must be true," "follows logically," "can be properly concluded," "logically follows"',
          '"most strongly supported," "can be properly inferred," "most supported by the information"',
          '"which one of the following most logically completes the argument?" (blank in stimulus)',
        ],
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Key Distinction',
      text: "MBT demands 100% certainty \u2014 if you can construct even one counter-scenario, the answer fails. MSS allows a small inferential leap (~99% confidence). Fill in the Blank asks you to complete an argument rather than derive a new conclusion, so the answer must fit the argument's existing structure and logical flow.",
    },

    { type: 'hr' },

    { type: 'h2', text: '4. The Certainty Test' },
    {
      type: 'paragraph',
      text: 'The Certainty Test is the defining skill for Must Be True questions. Use it to verify that your selected answer truly MUST be true.',
    },

    {
      type: 'process',
      title: 'How to Verify an Answer Must Be True',
      steps: [
        '**Accept the stimulus as fact.** Every statement in the stimulus is a given, unchangeable truth for the purpose of the question. Do not question or evaluate the premises.',
        '**Attempt to construct a counter-scenario.** Ask: "Is there ANY possible world in which every statement in the stimulus is true, but this answer choice is false?" Actively try to make the answer fail while keeping the stimulus intact.',
        '**If you CAN construct a counter-scenario:** The answer choice is not guaranteed \u2014 eliminate it. It may be something that "could be true" or "is likely true," but it does not pass the certainty standard.',
        "**If you CANNOT construct a counter-scenario:** The answer is locked in by the stimulus's constraints. It must be true whenever the stimulus is true. Select it with confidence.",
        '**Final check \u2014 trace the logical path.** Point to the specific facts, rules, or combinations of facts that prove the answer. If you cannot articulate the proof, revisit your synthesis.',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'The Litmus Question',
      text: 'Ask yourself: "If I showed the stimulus to 1,000 logicians, would every single one agree this answer is proven?" If the answer is yes, it passes the Certainty Test. If even one logician could reasonably disagree, the answer is not certain enough for MBT.',
    },

    { type: 'hr' },

    { type: 'h2', text: '5. Quantifier Reference' },
    {
      type: 'paragraph',
      text: 'Quantifiers define the size and scope of groups. Understanding exactly what each quantifier guarantees \u2014 and what it does not \u2014 is essential for avoiding invalid inferences.',
    },

    {
      type: 'table',
      headers: ['Quantifier', 'Meaning', 'Minimum Guaranteed', 'What Overlaps It Creates', 'Common Trap'],
      rows: [
        [
          '**All / Every**',
          'The entire group without exception.',
          '100% of the group.',
          'If All A are B, then any member of A is guaranteed to also be a member of B. Combine with "Some C are A" to conclude "Some C are B."',
          'Reversing: "All A are B" does NOT mean "All B are A."',
        ],
        [
          '**Most**',
          'More than half of the group.',
          'At least 51% (more than half).',
          'If Most A are B and Most A are C, the B and C groups must overlap within A (the two "most" groups cannot fit without sharing members). This guarantees "Some B-A members are also C."',
          'Treating "most" as "all" \u2014 "most" still allows exceptions.',
        ],
        [
          '**Some**',
          'At least one member of the group.',
          'At least 1 (could be all).',
          '"Some A are B" means at least one member belongs to both groups. But two separate "some" claims (Some A are B; Some A are C) do NOT guarantee overlap between B and C within A.',
          'Assuming two "some" groups must overlap \u2014 they may be entirely disjoint.',
        ],
        [
          '**None / No**',
          'Zero members of the group.',
          '0% \u2014 complete exclusion.',
          '"No A are B" means the two groups are entirely separate. Any member of A is guaranteed NOT to be a member of B, and vice versa. Equivalent to "All A are not-B."',
          'Assuming "none" applies only in one direction \u2014 "No A are B" also means "No B are A."',
        ],
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Valid vs. Invalid Quantifier Combinations',
      text: '**Valid:** All A are B + Some C are A \u2192 Some C are B.\n**Valid:** Most A are B + Most A are C \u2192 Some B-members-of-A are C.\n**Valid:** No A are B + Some C are A \u2192 Some C are not B.\n**Invalid:** Some A are B + Some A are C \u2192 Some B are C. (Two "some" groups within A may be completely separate.)\n**Invalid:** All A are B \u2192 All B are A. (Reversal \u2014 B may include non-A members.)',
    },

    { type: 'hr' },

    { type: 'h2', text: '6. Common Traps' },
    {
      type: 'paragraph',
      text: 'Wrong answers on Must Be True questions fall into predictable categories. Memorize these patterns to eliminate traps quickly during timed practice.',
    },

    {
      type: 'breakdown',
      labels: { title: 'Trap', text: 'Description & How to Spot It' },
      items: [
        {
          title: '1. Could Be True (Not Must Be True)',
          text: 'The answer is consistent with the stimulus but is not proven by it. It represents one possible scenario among many. **Test:** Can you construct a scenario where the stimulus is true and this answer is false? If yes, it only "could be true."',
          badge: 'Certainty',
          badgeColor: 'red',
        },
        {
          title: '2. Probably True (Not Certainly True)',
          text: 'The answer seems likely given the stimulus but requires an assumption or inferential leap to reach certainty. It would be a strong MSS answer but fails the MBT standard. **Test:** Does reaching this conclusion require any assumption not stated in the stimulus?',
          badge: 'Certainty',
          badgeColor: 'red',
        },
        {
          title: '3. Too Extreme',
          text: "The answer uses absolute language (all, never, only, impossible) when the stimulus uses hedged language (some, can, usually). The direction may be correct, but the degree is wrong. **Test:** Would softening the answer's language make it more defensible given the stimulus?",
          badge: 'Strength',
          badgeColor: 'indigo',
        },
        {
          title: '4. Reverses a Conditional',
          text: "The answer flips the direction of a conditional statement. If the stimulus says A\u2192B, this trap claims B\u2192A (the mistaken reversal) or ~A\u2192~B (the mistaken negation). **Test:** Does the answer's logical arrow point the same direction as the stimulus's? Is it applying a valid contrapositive (~B\u2192~A) or an invalid reversal (B\u2192A)?",
          badge: 'Logic',
          badgeColor: 'blue',
        },
        {
          title: '5. Outside Scope',
          text: 'The answer introduces a concept, comparison, or topic that the stimulus never mentions or implies. It may sound plausible based on real-world knowledge, but the stimulus provides no basis for it. **Test:** Can you point to a specific sentence in the stimulus that supports every term in this answer?',
          badge: 'Scope',
          badgeColor: 'slate',
        },
        {
          title: '6. Invalid Quantifier Inference',
          text: 'The answer makes a flawed deduction by combining two "some" statements to claim an overlap, or by reversing an "all" statement. **Test:** Does the quantifier logic actually guarantee this result, or does it only permit it?',
          badge: 'Logic',
          badgeColor: 'blue',
        },
        {
          title: '7. Confuses Correlation with Causation',
          text: 'The answer assumes a causal relationship when the stimulus only describes a correlation or co-occurrence. **Test:** Does the stimulus explicitly state a causal mechanism, or merely describe a pattern?',
          badge: 'Logic',
          badgeColor: 'blue',
        },
        {
          title: '8. Applies a Rule Outside Its Domain',
          text: 'The answer stays on the same general topic but shifts the governed set. It may broaden a rule from a subset to the whole class, erase a limiting condition, or cross a boundary term like "under eighteen." **Test:** Is the answer talking about the exact same governed group as the stimulus?',
          badge: 'Domain',
          badgeColor: 'red',
        },
        {
          title: '9. Converts Purpose into Rule (or Effect into Rule)',
          text: 'The answer takes a purpose clause ("to protect privacy") or an observed effect and treats it as if it were itself the operative rule. **Test:** Did the stimulus actually command, prohibit, or require this claim, or did it merely explain why the rule exists or what happened in one case?',
          badge: 'Layering',
          badgeColor: 'red',
        },
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: '7. Test Day Checklist' },
    {
      type: 'paragraph',
      text: 'Run through this checklist on every Must Be True question during timed practice and on test day.',
    },

    {
      type: 'process',
      title: 'Test Day Checklist',
      steps: [
        '**Confirm the question type.** The stem says "must be true," "follows logically," "can be properly concluded," or "can be properly inferred." If the stem asks what is "most strongly supported" or what "strengthens," switch to the correct strategy.',
        '**Read the stimulus as a fact collector.** Accept every statement as true. Do not evaluate whether the premises are reasonable \u2014 your only job is to determine what is logically guaranteed.',
        '**Identify the reasoning type.** Is the stimulus building a conditional chain? Combining quantifiers? Presenting numerical data? Creating a subgroup disparity? Governing only a narrow domain? Mixing rule, exception, purpose, and effect? Recognizing the pattern accelerates your synthesis.',
        '**Deconstruct before reading choices.** Break the stimulus into its logical components. Note conditionals, quantifiers, causal links, numerical data, governed domains, and any exceptions or purpose clauses separately.',
        '**Synthesize and pre-phrase if you can.** Pause after deconstructing and ask: "What is logically locked in by combining these facts?" Form a clear prediction when the deduction is visible.',
        '**If no clear prephrase appears, shift to answer-driven POE.** Evaluate each answer mechanically and eliminate anything that leaves the domain, erases an exception, converts purpose into rule, or fails certainty. This is a fallback workflow, not a lower standard.',
        '**Apply the Certainty Test to contenders.** For each remaining option, ask: "Can I construct ANY scenario where the stimulus is true but this answer is false?" If yes, eliminate it.',
        '**Check for common traps.** Does any remaining choice reverse a conditional? Use language that is too extreme? Introduce outside concepts? Confuse "could" with "must"? Make an invalid quantifier inference? Drift outside the governed domain? Turn purpose into rule?',
        '**Trace the proof.** Before committing, articulate the specific facts or combination of facts that prove your answer. If you cannot point to the proof, revisit your synthesis.',
        '**Select and move on.** Commit to your answer. MBT questions reward precise deconstruction and strict logical standards \u2014 if you followed the 4 steps and the Certainty Test, trust the process.',
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Quick-Reference Tables' },

    { type: 'h3', text: 'Reasoning Type Quick-Check' },
    {
      type: 'table',
      headers: ['If You See...', 'The Reasoning Type Is Likely...', 'Synthesis Strategy'],
      rows: [
        [
          'Multiple if-then statements sharing a common term',
          'Conditional Chain',
          'Link the chain (A\u2192B\u2192C) and derive the full connection or its contrapositive (~C\u2192~A).',
        ],
        [
          'A universal rule ("All" or "No") with a "Some" statement',
          'Quantifier Overlap',
          'Apply the universal rule to every member of the quantified group to derive a new guaranteed fact.',
        ],
        [
          'Percentages, ratios, or counts with a constant relationship',
          'Numerical Deduction',
          'Set up the mathematical relationship and solve for the unknown variable.',
        ],
        [
          'Group definitions with inclusion/exclusion rules',
          'Set Relationship',
          'Map group memberships and identify what must be true about overlapping or excluded members.',
        ],
        [
          'A narrow subgroup hidden inside a broader topic',
          'Governed Sets & Domains',
          'Name the exact governed set first, then reject any answer that broadens or shifts that domain.',
        ],
        [
          '"Either X or Y" combined with conditional rules',
          'Multi-Step Inference',
          'Deny one disjunct to trigger the other, then follow the conditional chain from there.',
        ],
        [
          'A subgroup fact that contradicts the overall population fact',
          'Disparity-Based',
          'Infer that the "other" subgroup must be large or extreme enough to produce the overall result.',
        ],
        [
          'An operative rule plus an exception, purpose clause, or stated consequence',
          'Policy / Rule / Exception / Purpose / Effect',
          'Separate the layers before inferring: rule does the logical work, exception narrows the domain, purpose explains, effect follows.',
        ],
      ],
    },

    { type: 'h3', text: 'Domain and Rule-Layer Check' },
    {
      type: 'table',
      headers: ['Ask This Question', 'If the Answer Is "No"...', 'Action'],
      rows: [
        [
          'Is this answer about the exact same governed set as the stimulus?',
          'The answer has changed the domain.',
          'Eliminate immediately.',
        ],
        [
          'Does this answer preserve the stimulus\'s exception language?',
          'The answer erased or broadened the carve-out.',
          'Eliminate immediately.',
        ],
        [
          'Is this claim stated as an actual rule, not merely as a purpose or effect?',
          'The answer converted explanation into obligation.',
          'Eliminate immediately.',
        ],
      ],
    },

    { type: 'h3', text: 'When to Shift to Answer-Driven POE' },
    {
      type: 'table',
      headers: ['Signal', 'Meaning', 'Best Response'],
      rows: [
        [
          'You can map the components but not see one clean deduction',
          'The logic may be packaged more clearly in the answer choices',
          'Shift to answer-driven POE while preserving the certainty standard.',
        ],
        [
          'Several answers feel plausible on topic alone',
          'You are in a domain/layer trap zone',
          'Test each answer against domain, exception, and proof rather than intuition.',
        ],
        [
          'A candidate answer sounds reasonable but a little broader than the text',
          'It is likely a "could be true" trap',
          'Run the certainty test and eliminate unless it is fully forced.',
        ],
      ],
    },

    { type: 'h3', text: 'Certainty Spectrum' },
    {
      type: 'table',
      headers: ['Level', 'Description', 'Sufficient for MBT?', 'Sufficient for MSS?'],
      rows: [
        ['Certain (100%)', 'Logically guaranteed \u2014 no counter-scenario exists.', 'Yes \u2714', 'Yes \u2714'],
        ['Very Likely (~99%)', 'Requires only a tiny inferential leap beyond the text.', 'No \u2718', 'Yes \u2714'],
        ['Probable (~75%)', 'Reasonable given the evidence but not locked in.', 'No \u2718', 'Sometimes'],
        [
          'Possible (~50%)',
          'Consistent with the stimulus but equally consistent with alternatives.',
          'No \u2718',
          'No \u2718',
        ],
        ['Speculative (<25%)', 'Requires substantial assumptions beyond the stimulus.', 'No \u2718', 'No \u2718'],
      ],
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Module 18 Summary',
      text: '**Must Be True = Deductive Certainty.** You receive a set of facts and determine which answer choice is logically guaranteed to be true.\n\n**The 4-Step Method:** Identify the Task \u2192 Deconstruct the Stimulus and Its Governed Domain \u2192 Synthesize and Prephrase if Possible \u2192 Use the Certainty Test, with answer-driven POE as the fallback path when no strong prephrase emerges.\n\n**Eight core reasoning patterns:** Conditional Chain, Quantifier Overlap, Numerical Deduction, Set Relationship, Governed Sets & Domains, Multi-Step Inference, Disparity-Based, and Policy / Rule / Exception / Purpose / Effect.\n\n**Standard of proof:** Absolute certainty (100%). If you can construct even one counter-scenario where the stimulus is true but the answer is false, eliminate that answer.\n\n**Nine common traps:** Could be true, probably true, too extreme, reverses conditional, outside scope, invalid quantifier inference, confuses correlation with causation, applies a rule outside its domain, and converts purpose or effect into rule.\n\n**The Certainty Test is your safeguard.** Always ask: "Is there ANY possible world where the stimulus is true and this answer is false?" If the answer is yes, move on.',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "Module 17: Must Be True — Reference Guide"
        },
        {
          "type": "paragraph",
          "text": "This reference guide consolidates everything from Module 17 into a single, quick-access resource. Use it for pre-test review, timed practice sessions, and as a checklist before attempting Must Be True questions."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "1. The 4-Step Method"
        },
        {
          "type": "diff-note",
          "text": "CHANGE: The mastery course adds a sentence noting the two valid workflows (prephrase-first and answer-driven POE). This is new in the mastery version and absent from the website reference guide.",
          "variant": "comment"
        },
        {
          "type": "paragraph",
          "text": "{{~Every Must Be True question follows the same repeatable process. Memorize this sequence and apply it consistently.~}}{{+Every Must Be True question follows the same repeatable process. Memorize this sequence and apply it consistently. The crucial refinement is that MBT has two valid workflows: a prephrase-first path when the deduction is visible, and an answer-driven POE path when the stimulus is too dense for a clean prediction.+}}"
        },
        {
          "type": "diff-note",
          "text": "CHANGE in Step 2: 'Deconstruct into Factual Components' → 'Deconstruct into Governed Components.' The mastery course adds identification of the exact governed domain, exceptions, purpose language, and effect language. This is the most important structural upgrade in the reference guide.",
          "variant": "comment"
        },
        {
          "type": "process",
          "title": "The 4-Step Method",
          "steps": [
            "**Step 1 — Identify the Task and Set the Standard of Proof:** Read the question stem first. Words like \"must also be true,\" \"follows logically,\" or \"can be properly inferred\" confirm that your task is to find the answer choice that is 100% proven by the stimulus. Accept all stimulus information as fact and adopt the standard of absolute certainty.",
            "{{~**Step 2 — Deconstruct the Stimulus into Factual Components:** Break the stimulus into discrete logical components. Identify conditional statements (if-then), quantifier statements (all, most, some, none), causal or explanatory links, and numerical or statistical data. Create a mental inventory of every rule and fact.~}}{{+**Step 2 — Deconstruct the Stimulus into Governed Components:** Break the stimulus into discrete logical components. Identify conditional statements (if-then), quantifier statements (all, most, some, none), causal or explanatory links, and numerical or statistical data. Just as importantly, identify the exact **governed domain** of each rule plus any exception, purpose, or effect language.+}}",
            "{{~**Step 3 — Synthesize and Predict the Deduction:** Find the common term or concept that connects two or more components. Ask: \"Can I form a conditional chain? Apply a universal rule to a particular group? Resolve a numerical paradox? Trace a causal mechanism to its inevitable consequence?\" Form a pre-phrase — a prediction of what the correct answer will state.~}}{{+**Step 3 — Synthesize and Prephrase When the Inference Is Visible:** Find the common term or concept that connects two or more components. Ask: \"Can I form a conditional chain? Apply a universal rule to a particular group? Resolve a numerical relationship? Trace a causal mechanism precisely?\" If the deduction is clear, form a prephrase of what the correct answer will state.+}}",
            "{{~**Step 4 — Systematically Evaluate the Answer Choices:** Scan all five options for a match to your pre-phrase. For each remaining contender, apply the strict certainty test: \"Can I find any scenario where the stimulus is true but this answer is false?\" If yes, eliminate it. The correct answer cannot be false when the stimulus is true.~}}{{+**Step 4 — Use Answer-Driven POE When the Inference Is Not Cleanly Visible:** If no strong prephrase emerges, scan the answer choices and eliminate mechanically. Remove any choice that leaves the governed domain, erases an exception, converts a purpose into a rule, overstates a quantifier, or fails the certainty test. The credited answer is still the one that cannot be false if the stimulus is true.+}}"
          ]
        },
        {
          "type": "diff-note",
          "text": "CHANGE: The timing callout is updated to add a note about the two-workflow approach and to mention that answer-driven POE is the fallback when no prephrase emerges.",
          "variant": "comment"
        },
        {
          "type": "callout",
          "title": "Timing Target",
          "variant": "tip",
          "text": "{{-~15 sec reading the stem and confirming question type → ~30 sec deconstructing the stimulus → ~15 sec synthesizing and pre-phrasing → ~30 sec evaluating choices → ~10 sec final verification. Total: **~100 seconds.** The synthesis step is non-negotiable — skipping it makes you vulnerable to attractive distractors.-}}{{+~15 sec reading the stem and confirming question type → ~35 sec deconstructing the stimulus and fixing the governed domain → ~10-15 sec attempting a synthesis/prephrase → ~25-30 sec evaluating choices → ~10 sec final verification. Total: **~100 seconds.** Try to prephrase first, but if a clear deduction does not emerge, do not force one. Shift to answer-driven POE while keeping the MBT proof standard fully intact.+}}"
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "2. MBT Reasoning Types"
        },
        {
          "type": "paragraph",
          "text": "Must Be True stimuli generate provable conclusions through recurring logical patterns. Recognizing the pattern accelerates your synthesis."
        },
        {
          "type": "diff-note",
          "text": "ADDITION: The website version lists 6 reasoning types. The mastery course adds two more: 'Governed Sets & Domains' (Lessons 4 and 12) and 'Policy / Rule / Exception / Purpose / Effect' (Lessons 7, 10, and 13). These are essential for the advanced drills and must appear in the reference guide.",
          "variant": "comment"
        },
        {
          "type": "table",
          "headers": [
            "Reasoning Type",
            "How It Works",
            "What to Look For",
            "Lesson"
          ],
          "rows": [
            [
              "**Conditional Chain**",
              "Multiple if-then statements share a common term, forming a chain (A→B, B→C, therefore A→C). The contrapositive of the full chain is equally valid.",
              "Keywords like \"if,\" \"all,\" \"only if,\" \"unless,\" \"no,\" \"none.\" Two or more conditional statements with a shared element.",
              "Lesson 3"
            ],
            [
              "**Quantifier Overlap**",
              "A universal rule (\"all\" or \"none\") combines with a \"some\" or \"most\" statement. The universal rule applies to every member of the quantified group, producing a guaranteed inference.",
              "A broad rule (All X are Y) paired with a specific-group statement (Some Z are X). The specific group inherits the universal property.",
              "Lesson 4"
            ],
            [
              "**Numerical Deduction**",
              "Numerical or proportional facts force a mathematical conclusion. Ratios, percentages, or totals constrain what must be true about another variable.",
              "Percentages, counts, ratios, or statements like \"increased by 30%.\" A constant ratio with a changing denominator forces the numerator to change.",
              "Lesson 5"
            ],
            [
              "**Set Relationship**",
              "Groups are defined with overlapping or exclusive membership. Combining group definitions with universal or existential claims produces a conclusion about group membership.",
              "Statements defining groups (professors, voters, etc.) paired with inclusion/exclusion rules and existential claims (\"some brilliant people are...\").",
              "Lesson 4"
            ],
            [
              "{{+**Governed Sets & Domains**+}}",
              "{{+A rule governs only a narrow subset, and the correct answer preserves that exact domain rather than broadening it to the entire topic.+}}",
              "{{+Dense category language, conjunctions that define a subgroup, boundary terms, or answer choices that sound close but shift who is actually governed.+}}",
              "{{+Lessons 4 and 12+}}"
            ],
            [
              "**Multi-Step Inference**",
              "An \"either/or\" (disjunctive) premise combines with conditional rules. Denying one disjunct triggers the other, which in turn triggers its conditional consequence.",
              "\"Either X or Y\" combined with \"If X then A\" and \"If Y then B.\" Applying the contrapositive to one branch forces the other.",
              "Lesson 8"
            ],
            [
              "**Disparity-Based**",
              "A property of a subgroup conflicts with a property of the total population. The inference concerns the \"other\" subgroup that must exist to account for the disparity.",
              "A subgroup fact that seems to contradict an overall fact (e.g., subgroup is fast but the total is slow). The other subgroup must be large or extreme enough to produce the overall result.",
              "Lesson 9"
            ],
            [
              "{{+**Policy / Rule / Exception / Purpose / Effect**+}}",
              "{{+The stimulus mixes an operative rule with a carve-out, a policy purpose, or a consequence, and the correct answer keeps those layers distinct.+}}",
              "{{+Normative or institutional language, explicit exceptions, \"to protect...\" purpose clauses, and answers that try to turn purpose into obligation.+}}",
              "{{+Lessons 7, 10, and 13+}}"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "3. MBT vs. MSS vs. Fill in the Blank"
        },
        {
          "type": "paragraph",
          "text": "These three question types all reason from stimulus to answer, which makes them easy to confuse. Use this comparison to distinguish them quickly and apply the correct strategy."
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "Must Be True (MBT)",
            "Most Strongly Supported (MSS)",
            "Fill in the Blank"
          ],
          "rows": [
            [
              "**Standard of proof**",
              "Absolute certainty (100%). The answer must be logically guaranteed by the stimulus.",
              "High probability (~99%). The answer is the most supported option, but a tiny inferential leap is acceptable.",
              "Certainty within context. The answer must complete the argument's logic as the author intended."
            ],
            [
              "**Direction of reasoning**",
              "Stimulus → Answer. The stimulus provides facts; you find what must logically follow.",
              "Stimulus → Answer. The stimulus provides facts; you find the conclusion they best support.",
              "Stimulus → Answer. The stimulus provides an incomplete argument; you supply the missing piece."
            ],
            [
              "**Stimulus structure**",
              "A set of facts or rules with no stated conclusion. Often uses conditionals or quantifiers.",
              "A collection of facts without a stated conclusion. Often uses causal or comparative language.",
              "An argument with a blank (often at the end) where the conclusion or key premise belongs."
            ],
            [
              "**Role of the answer**",
              "The answer IS a guaranteed consequence of the facts — it cannot be false if the stimulus is true.",
              "The answer IS the conclusion best supported by the evidence, though not necessarily proven beyond doubt.",
              "The answer completes the argument by filling a logical gap — it must fit the argument's structure and purpose."
            ],
            [
              "**Key test**",
              "\"Can I find ANY scenario where the stimulus is true but this answer is false? If yes, eliminate it.\"",
              "\"Is this the answer that the evidence supports MOST? Does any answer have stronger backing?\"",
              "\"Does this choice complete the argument's logic naturally? Does it match the author's direction?\""
            ],
            [
              "**Typical stems**",
              "\"must be true,\" \"follows logically,\" \"can be properly concluded,\" \"logically follows\"",
              "\"most strongly supported,\" \"can be properly inferred,\" \"most supported by the information\"",
              "\"which one of the following most logically completes the argument?\" (blank in stimulus)"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "Key Distinction",
          "variant": "default",
          "text": "MBT demands 100% certainty — if you can construct even one counter-scenario, the answer fails. MSS allows a small inferential leap (~99% confidence). Fill in the Blank asks you to complete an argument rather than derive a new conclusion, so the answer must fit the argument's existing structure and logical flow."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "4. The Certainty Test"
        },
        {
          "type": "paragraph",
          "text": "The Certainty Test is the defining skill for Must Be True questions. Use it to verify that your selected answer truly MUST be true."
        },
        {
          "type": "process",
          "title": "How to Verify an Answer Must Be True",
          "steps": [
            "**Accept the stimulus as fact.** Every statement in the stimulus is a given, unchangeable truth for the purpose of the question. Do not question or evaluate the premises.",
            "**Attempt to construct a counter-scenario.** Ask: \"Is there ANY possible world in which every statement in the stimulus is true, but this answer choice is false?\" Actively try to make the answer fail while keeping the stimulus intact.",
            "**If you CAN construct a counter-scenario:** The answer choice is not guaranteed — eliminate it. It may be something that \"could be true\" or \"is likely true,\" but it does not pass the certainty standard.",
            "**If you CANNOT construct a counter-scenario:** The answer is locked in by the stimulus's constraints. It must be true whenever the stimulus is true. Select it with confidence.",
            "**Final check — trace the logical path.** Point to the specific facts, rules, or combinations of facts that prove the answer. If you cannot articulate the proof, revisit your synthesis."
          ]
        },
        {
          "type": "callout",
          "title": "The Litmus Question",
          "variant": "tip",
          "text": "Ask yourself: \"If I showed the stimulus to 1,000 logicians, would every single one agree this answer is proven?\" If the answer is yes, it passes the Certainty Test. If even one logician could reasonably disagree, the answer is not certain enough for MBT."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "5. Quantifier Reference"
        },
        {
          "type": "paragraph",
          "text": "Quantifiers define the size and scope of groups. Understanding exactly what each quantifier guarantees — and what it does not — is essential for avoiding invalid inferences."
        },
        {
          "type": "table",
          "headers": [
            "Quantifier",
            "Meaning",
            "Minimum Guaranteed",
            "What Overlaps It Creates",
            "Common Trap"
          ],
          "rows": [
            [
              "**All / Every**",
              "The entire group without exception.",
              "100% of the group.",
              "If All A are B, then any member of A is guaranteed to also be a member of B. Combine with \"Some C are A\" to conclude \"Some C are B.\"",
              "Reversing: \"All A are B\" does NOT mean \"All B are A.\""
            ],
            [
              "**Most**",
              "More than half of the group.",
              "At least 51% (more than half).",
              "If Most A are B and Most A are C, the B and C groups must overlap within A (the two \"most\" groups cannot fit without sharing members). This guarantees \"Some B-A members are also C.\"",
              "Treating \"most\" as \"all\" — \"most\" still allows exceptions."
            ],
            [
              "**Some**",
              "At least one member of the group.",
              "At least 1 (could be all).",
              "\"Some A are B\" means at least one member belongs to both groups. But two separate \"some\" claims (Some A are B; Some A are C) do NOT guarantee overlap between B and C within A.",
              "Assuming two \"some\" groups must overlap — they may be entirely disjoint."
            ],
            [
              "**None / No**",
              "Zero members of the group.",
              "0% — complete exclusion.",
              "\"No A are B\" means the two groups are entirely separate. Any member of A is guaranteed NOT to be a member of B, and vice versa. Equivalent to \"All A are not-B.\"",
              "Assuming \"none\" applies only in one direction — \"No A are B\" also means \"No B are A.\""
            ]
          ]
        },
        {
          "type": "callout",
          "title": "Valid vs. Invalid Quantifier Combinations",
          "variant": "default",
          "text": "**Valid:** All A are B + Some C are A → Some C are B.\n**Valid:** Most A are B + Most A are C → Some B-members-of-A are C.\n**Valid:** No A are B + Some C are A → Some C are not B.\n**Invalid:** Some A are B + Some A are C → Some B are C. (Two \"some\" groups within A may be completely separate.)\n**Invalid:** All A are B → All B are A. (Reversal — B may include non-A members.)"
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "6. Common Traps"
        },
        {
          "type": "paragraph",
          "text": "Wrong answers on Must Be True questions fall into predictable categories. Memorize these patterns to eliminate traps quickly during timed practice."
        },
        {
          "type": "diff-note",
          "text": "ADDITION: The website version lists 7 traps. The mastery course adds two more: '8. Applies a Rule Outside Its Domain' and '9. Converts Purpose into Rule (or Effect into Rule).' These are required for the governed-domain and policy/rule lessons.",
          "variant": "comment"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Trap",
            "text": "Description & How to Spot It"
          },
          "items": [
            {
              "title": "1. Could Be True (Not Must Be True)",
              "text": "The answer is consistent with the stimulus but is not proven by it. It represents one possible scenario among many. **Test:** Can you construct a scenario where the stimulus is true and this answer is false? If yes, it only \"could be true.\"",
              "badge": "Certainty",
              "badgeColor": "red"
            },
            {
              "title": "2. Probably True (Not Certainly True)",
              "text": "The answer seems likely given the stimulus but requires an assumption or inferential leap to reach certainty. It would be a strong MSS answer but fails the MBT standard. **Test:** Does reaching this conclusion require any assumption not stated in the stimulus?",
              "badge": "Certainty",
              "badgeColor": "red"
            },
            {
              "title": "3. Too Extreme",
              "text": "The answer uses absolute language (all, never, only, impossible) when the stimulus uses hedged language (some, can, usually). The direction may be correct, but the degree is wrong. **Test:** Would softening the answer's language make it more defensible given the stimulus?",
              "badge": "Strength",
              "badgeColor": "indigo"
            },
            {
              "title": "4. Reverses a Conditional",
              "text": "The answer flips the direction of a conditional statement. If the stimulus says A→B, this trap claims B→A (the mistaken reversal) or ~A→~B (the mistaken negation). **Test:** Does the answer's logical arrow point the same direction as the stimulus's? Is it applying a valid contrapositive (~B→~A) or an invalid reversal (B→A)?",
              "badge": "Logic",
              "badgeColor": "blue"
            },
            {
              "title": "5. Outside Scope",
              "text": "The answer introduces a concept, comparison, or topic that the stimulus never mentions or implies. It may sound plausible based on real-world knowledge, but the stimulus provides no basis for it. **Test:** Can you point to a specific sentence in the stimulus that supports every term in this answer?",
              "badge": "Scope",
              "badgeColor": "slate"
            },
            {
              "title": "6. Invalid Quantifier Inference",
              "text": "The answer makes a flawed deduction by combining two \"some\" statements to claim an overlap, or by reversing an \"all\" statement. **Test:** Does the quantifier logic actually guarantee this result, or does it only permit it?",
              "badge": "Logic",
              "badgeColor": "blue"
            },
            {
              "title": "7. Confuses Correlation with Causation",
              "text": "The answer assumes a causal relationship when the stimulus only describes a correlation or co-occurrence. **Test:** Does the stimulus explicitly state a causal mechanism, or merely describe a pattern?",
              "badge": "Logic",
              "badgeColor": "blue"
            },
            {
              "title": "{{+8. Applies a Rule Outside Its Domain+}}",
              "text": "{{+The answer stays on the same general topic but shifts the governed set. It may broaden a rule from a subset to the whole class, erase a limiting condition, or cross a boundary term like \"under eighteen.\" **Test:** Is the answer talking about the exact same governed group as the stimulus?+}}",
              "badge": "{{+Domain+}}",
              "badgeColor": "red"
            },
            {
              "title": "{{+9. Converts Purpose into Rule (or Effect into Rule)+}}",
              "text": "{{+The answer takes a purpose clause (\"to protect privacy\") or an observed effect and treats it as if it were itself the operative rule. **Test:** Did the stimulus actually command, prohibit, or require this claim, or did it merely explain why the rule exists or what happened in one case?+}}",
              "badge": "{{+Layering+}}",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "7. Test Day Checklist"
        },
        {
          "type": "paragraph",
          "text": "Run through this checklist on every Must Be True question during timed practice and on test day."
        },
        {
          "type": "diff-note",
          "text": "CHANGE: The mastery course upgrades the checklist to add governed-domain identification (step 4), the two-workflow distinction (step 5/6), and domain/layer trap checks (step 8). The website version has 10 steps; the mastery version has 10 upgraded steps.",
          "variant": "comment"
        },
        {
          "type": "process",
          "title": "Test Day Checklist",
          "steps": [
            "**Confirm the question type.** The stem says \"must be true,\" \"follows logically,\" \"can be properly concluded,\" or \"can be properly inferred.\" If the stem asks what is \"most strongly supported\" or what \"strengthens,\" switch to the correct strategy.",
            "**Read the stimulus as a fact collector.** Accept every statement as true. Do not evaluate whether the premises are reasonable — your only job is to determine what is logically guaranteed.",
            "{{~**Identify the reasoning type.** Is the stimulus building a conditional chain? Combining quantifiers? Presenting numerical data? Creating a subgroup disparity? Recognizing the pattern accelerates your synthesis.~}}{{+**Identify the reasoning type.** Is the stimulus building a conditional chain? Combining quantifiers? Presenting numerical data? Creating a subgroup disparity? Governing only a narrow domain? Mixing rule, exception, purpose, and effect? Recognizing the pattern accelerates your synthesis.+}}",
            "{{~**Deconstruct before reading choices.** Break the stimulus into its logical components. Note conditionals, quantifiers, causal links, and numerical data separately.~}}{{+**Deconstruct before reading choices.** Break the stimulus into its logical components. Note conditionals, quantifiers, causal links, numerical data, governed domains, and any exceptions or purpose clauses separately.+}}",
            "{{~**Synthesize and pre-phrase.** Pause after deconstructing and ask: \"What is logically locked in by combining these facts?\" Form a clear prediction of what the correct answer will say.~}}{{+**Synthesize and pre-phrase if you can.** Pause after deconstructing and ask: \"What is logically locked in by combining these facts?\" Form a clear prediction when the deduction is visible.+}}",
            "{{~**Match your pre-phrase to the choices.** Scan all five options for the one that aligns with your prediction. Do not expect identical wording — expect the same logical content expressed differently.~}}{{+**If no clear prephrase appears, shift to answer-driven POE.** Evaluate each answer mechanically and eliminate anything that leaves the domain, erases an exception, converts purpose into rule, or fails certainty. This is a fallback workflow, not a lower standard.+}}",
            "**Apply the Certainty Test to contenders.** For each remaining option, ask: \"Can I construct ANY scenario where the stimulus is true but this answer is false?\" If yes, eliminate it.",
            "{{~**Check for common traps.** Does any remaining choice reverse a conditional? Use language that is too extreme? Introduce outside concepts? Confuse \"could\" with \"must\"? Make an invalid quantifier inference?~}}{{+**Check for common traps.** Does any remaining choice reverse a conditional? Use language that is too extreme? Introduce outside concepts? Confuse \"could\" with \"must\"? Make an invalid quantifier inference? Drift outside the governed domain? Turn purpose into rule?+}}",
            "**Trace the proof.** Before committing, articulate the specific facts or combination of facts that prove your answer. If you cannot point to the proof, revisit your synthesis.",
            "**Select and move on.** Commit to your answer. MBT questions reward precise deconstruction and strict logical standards — if you followed the 4 steps and the Certainty Test, trust the process."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Quick-Reference Tables"
        },
        {
          "type": "h3",
          "text": "Reasoning Type Quick-Check"
        },
        {
          "type": "diff-note",
          "text": "ADDITION: Two rows added to match the full 8-type taxonomy: 'Governed Sets & Domains' and 'Policy / Rule / Exception / Purpose / Effect'.",
          "variant": "comment"
        },
        {
          "type": "table",
          "headers": [
            "If You See...",
            "The Reasoning Type Is Likely...",
            "Synthesis Strategy"
          ],
          "rows": [
            [
              "Multiple if-then statements sharing a common term",
              "Conditional Chain",
              "Link the chain (A→B→C) and derive the full connection or its contrapositive (~C→~A)."
            ],
            [
              "A universal rule (\"All\" or \"No\") with a \"Some\" statement",
              "Quantifier Overlap",
              "Apply the universal rule to every member of the quantified group to derive a new guaranteed fact."
            ],
            [
              "Percentages, ratios, or counts with a constant relationship",
              "Numerical Deduction",
              "Set up the mathematical relationship and solve for the unknown variable."
            ],
            [
              "Group definitions with inclusion/exclusion rules",
              "Set Relationship",
              "Map group memberships and identify what must be true about overlapping or excluded members."
            ],
            [
              "{{+A narrow subgroup hidden inside a broader topic+}}",
              "{{+Governed Sets & Domains+}}",
              "{{+Name the exact governed set first, then reject any answer that broadens or shifts that domain.+}}"
            ],
            [
              "\"Either X or Y\" combined with conditional rules",
              "Multi-Step Inference",
              "Deny one disjunct to trigger the other, then follow the conditional chain from there."
            ],
            [
              "A subgroup fact that contradicts the overall population fact",
              "Disparity-Based",
              "Infer that the \"other\" subgroup must be large or extreme enough to produce the overall result."
            ],
            [
              "{{+An operative rule plus an exception, purpose clause, or stated consequence+}}",
              "{{+Policy / Rule / Exception / Purpose / Effect+}}",
              "{{+Separate the layers before inferring: rule does the logical work, exception narrows the domain, purpose explains, effect follows.+}}"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Certainty Spectrum"
        },
        {
          "type": "table",
          "headers": [
            "Level",
            "Description",
            "Sufficient for MBT?",
            "Sufficient for MSS?"
          ],
          "rows": [
            [
              "Certain (100%)",
              "Logically guaranteed — no counter-scenario exists.",
              "Yes ✔",
              "Yes ✔"
            ],
            [
              "Very Likely (~99%)",
              "Requires only a tiny inferential leap beyond the text.",
              "No ✘",
              "Yes ✔"
            ],
            [
              "Probable (~75%)",
              "Reasonable given the evidence but not locked in.",
              "No ✘",
              "Sometimes"
            ],
            [
              "Possible (~50%)",
              "Consistent with the stimulus but equally consistent with alternatives.",
              "No ✘",
              "No ✘"
            ],
            [
              "Speculative (<25%)",
              "Requires substantial assumptions beyond the stimulus.",
              "No ✘",
              "No ✘"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "title": "Module 17 Summary",
          "variant": "summary",
          "text": "{{-**Must Be True = Deductive Certainty.** You receive a set of facts and determine which answer choice is logically guaranteed to be true.\n\n**The 4-Step Method:** Identify the Task → Deconstruct the Stimulus → Synthesize and Predict → Evaluate with the Certainty Test.\n\n**Six reasoning types:** Conditional Chain, Quantifier Overlap, Numerical Deduction, Set Relationship, Multi-Step Inference, Disparity-Based.\n\n**Standard of proof:** Absolute certainty (100%). If you can construct even one counter-scenario where the stimulus is true but the answer is false, eliminate that answer.\n\n**Seven common traps:** Could be true, probably true, too extreme, reverses conditional, outside scope, invalid quantifier inference, confuses correlation with causation.\n\n**The Certainty Test is your safeguard.** Always ask: \"Is there ANY possible world where the stimulus is true and this answer is false?\" If the answer is yes, move on.-}}{{+**Must Be True = Deductive Certainty.** You receive a set of facts and determine which answer choice is logically guaranteed to be true.\n\n**The 4-Step Method:** Identify the Task → Deconstruct the Stimulus and Its Governed Domain → Synthesize and Prephrase if Possible → Use the Certainty Test, with answer-driven POE as the fallback path when no strong prephrase emerges.\n\n**Eight core reasoning patterns:** Conditional Chain, Quantifier Overlap, Numerical Deduction, Set Relationship, Governed Sets & Domains, Multi-Step Inference, Disparity-Based, and Policy / Rule / Exception / Purpose / Effect.\n\n**Standard of proof:** Absolute certainty (100%). If you can construct even one counter-scenario where the stimulus is true but the answer is false, eliminate that answer.\n\n**Nine common traps:** Could be true, probably true, too extreme, reverses conditional, outside scope, invalid quantifier inference, confuses correlation with causation, applies a rule outside its domain, and converts purpose or effect into rule.\n\n**The Certainty Test is your safeguard.** Always ask: \"Is there ANY possible world where the stimulus is true and this answer is false?\" If the answer is yes, move on.+}}"
        }
      ],
    },
    cheat: {
      label: 'Cheat Sheet',
      content: [
        {
          type: 'callout',
          variant: 'summary',
          text: '**Catalog Premises \u2192 Combine Claims \u2192 Prephrase Inference \u2192 Match Weakest Link**',
        },
        { type: 'h3', text: 'Decision Rules' },
        {
          type: 'table',
          headers: ['Signal', 'Action'],
          rows: [
            ['Multiple if-then statements share a common term', 'Chain the conditionals (A\u2192B\u2192C) and derive the full connection or contrapositive'],
            ['Universal rule (All/No) + a Some statement', 'Apply the universal rule to every member of the quantified group'],
            ['Percentages, ratios, or counts with a fixed relationship', 'Set up the math and solve for the unknown variable'],
            ['Group definitions with inclusion/exclusion rules', 'Map memberships and identify guaranteed overlaps or exclusions'],
            ['Narrow subgroup hidden inside a broader topic', 'Name the exact governed set -- reject any answer that broadens the domain'],
            ['Operative rule + exception, purpose clause, or consequence', 'Separate rule from purpose; rule does the logical work, purpose only explains'],
          ],
        },
        { type: 'h3', text: 'MSS vs. MBT' },
        {
          type: 'callout',
          variant: 'tip',
          text: 'MBT demands **100% certainty** -- if you can construct even one counter-scenario, the answer fails. MSS allows a small inferential leap (~99% confidence). When in doubt, the more conservative answer is almost always correct for MBT.',
        },
        { type: 'h3', text: 'Traps' },
        {
          type: 'table',
          headers: ['Trap', 'Test'],
          rows: [
            ['**Could Be True** -- consistent but not proven', 'Can you construct a scenario where stimulus is true but answer is false?'],
            ['**Mistaken Reversal** -- concludes B\u2192A from A\u2192B', 'Check the direction of the arrow matches the stimulus'],
            ['**Mistaken Negation** -- concludes ~A\u2192~B instead of ~B\u2192~A', 'Apply the valid contrapositive, not the invalid negation'],
            ['**Too Strong** -- uses absolutes when stimulus hedges', 'Would softening the quantifier make it defensible?'],
            ['**Domain Shift** -- broadens or narrows the governed set', 'Is the answer about the exact same governed group as the stimulus?'],
          ],
        },
        { type: 'h3', text: 'Stems' },
        {
          type: 'list',
          items: [
            '"Which one of the following must also be true?"',
            '"Which one of the following can be properly inferred?"',
            '"Which one of the following follows logically?"',
            '"Which one of the following can be properly concluded?"',
            '"If the statements above are true, which one must also be true?"',
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          title: 'The One Thing',
          text: '**The right answer is the safest, most conservative claim the premises actually support. Reject anything that goes beyond the evidence.**',
        },
      ],
    },
  },
};
