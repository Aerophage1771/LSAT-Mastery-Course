import { Lesson } from '../../types';

export const Lesson8_ReferenceGuide: Lesson = {
  id: "15-8",
  title: "Reference Guide",
  content: [
    { type: 'h2', text: 'Module 15: Fill in the Blank \u2014 Reference Guide' },
    { type: 'paragraph', text: 'This reference guide consolidates everything from Module 15 into a single, quick-access resource. Use it for pre-test review, timed practice sessions, and as a checklist before attempting Fill in the Blank questions.' },

    { type: 'hr' },

    { type: 'h2', text: '1. The 4-Step Method' },
    { type: 'paragraph', text: 'Every Fill in the Blank question follows the same repeatable process. Memorize this sequence and apply it consistently.' },
    { type: 'process', title: 'The 4-Step Method', steps: [
      '**Step 1 \u2014 Read the Premises and Locate the Blank:** Read the entire stimulus carefully. Identify the blank\'s position and determine its logical role by examining the words immediately before it. A conclusion indicator (therefore, thus, hence, so) means the blank IS the conclusion. A premise indicator (since, because, for) means the blank IS a supporting premise.',
      '**Step 2 \u2014 Identify the Gap:** Map the argument\'s trajectory. If the blank is a conclusion, ask: "What single point are these facts building toward?" If the blank is a premise, ask: "What unstated idea bridges the evidence to the stated conclusion?" Recognize the structural pattern (mechanistic chain, analogy, conditional, paradox resolution) to clarify the argument\'s direction.',
      '**Step 3 \u2014 Pre-phrase the Answer:** Form a clear, specific prediction of what should fill the blank before reading the answer choices. For conclusion blanks, synthesize the premises into a logical endpoint. For premise blanks, articulate the missing bridge that connects evidence to conclusion.',
      '**Step 4 \u2014 Match and Eliminate:** Scan the answer choices for the option that best matches your pre-phrase. The correct answer should read as the author\'s natural next sentence. Eliminate traps by checking scope, strength, and logical direction against the stimulus.',
    ]},

    { type: 'callout', variant: 'tip', title: 'Timing Target', text: '~15 sec locating the blank and identifying its role \u2192 ~20 sec mapping the argument \u2192 ~10 sec pre-phrasing \u2192 ~30 sec matching and eliminating \u2192 ~10 sec verifying. Total: **~85 seconds.** The pre-phrase is non-negotiable \u2014 it prevents you from being pulled toward attractive-sounding traps.' },

    { type: 'hr' },

    { type: 'h2', text: '2. Blank Types' },
    { type: 'paragraph', text: 'The logical role of the blank determines your entire approach. Misidentifying the blank type leads to solving the wrong problem.' },

    { type: 'table', headers: ['Blank Type', 'Description', 'Key Indicators', 'Frequency'], rows: [
      ['**Conclusion Blank**', 'The blank IS the argument\'s main conclusion. The premises are fully stated; you supply the logical endpoint.', '"Therefore, _______." "Thus, _______." "Hence, _______." "So, _______." "It follows that _______."', '~65\u201370%'],
      ['**Premise Blank**', 'The blank IS a missing premise. The conclusion is already stated; you supply the reason or evidence that supports it.', '"[Conclusion], since _______." "[Conclusion], because _______." "[Conclusion], for _______."', '~30\u201335%'],
    ]},

    { type: 'callout', variant: 'default', title: 'Quick Identification Rule', text: 'Look at the word directly before the blank. If it is a conclusion indicator, you are filling in the conclusion. If it is a premise indicator, you are filling in a premise. This single check takes two seconds and prevents the most common mistake on this question type.' },

    { type: 'hr' },

    { type: 'h2', text: '3. Common Blank Patterns' },
    { type: 'paragraph', text: 'Fill in the Blank stimuli cluster into recurring structural patterns. Recognizing the pattern early accelerates your pre-phrase.' },

    { type: 'table', headers: ['Pattern', 'Core Structure', 'What the Blank Supplies', 'Lesson'], rows: [
      ['**Mechanistic Chain**', 'A step-by-step process where each fact causes the next (A \u2192 B \u2192 C)', 'The immediate, necessary result of the final step in the chain \u2014 not the long-term or intended outcome', 'Lesson 3'],
      ['**Analogy Completion**', 'Two parallel situations are compared; the stimulus draws a lesson from one and applies it to the other', 'The conclusion that logically follows when the lesson from Situation A is applied to Situation B', 'Lesson 4'],
      ['**Problem-Solution**', 'A problem is identified, a solution is proposed, and the blank completes the evaluation of that solution', 'Either the reason the solution works, the reason it fails, or its unintended consequence', 'Lesson 5'],
      ['**Philosophical Rebuttal**', 'A viewpoint is presented and then challenged or qualified by the author\'s reasoning', 'The author\'s counter-conclusion or the principle that undermines the original viewpoint', 'Lesson 6'],
      ['**Conditional Chain**', 'The stimulus establishes conditional rules (if X then Y) and provides a triggering fact', 'The necessary consequence that follows from applying the conditional rules to the triggering fact', 'Lesson 7'],
      ['**Paradox Resolution**', 'Two seemingly contradictory facts are presented, and the argument reconciles them', 'The statement that explains how both facts can be true simultaneously, or the consequence of accepting both', 'Lesson 7'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: '4. Fill in the Blank vs. Main Conclusion' },
    { type: 'paragraph', text: 'Fill in the Blank (conclusion variant) and Main Conclusion questions look similar but differ in important ways. Confusing them leads to systematic errors.' },

    { type: 'table', headers: ['Feature', 'Fill in the Blank (Conclusion)', 'Main Conclusion'], rows: [
      ['**Stimulus**', 'Argument with a literal blank where the conclusion should be', 'Complete argument with the conclusion already stated somewhere in the stimulus'],
      ['**Your task**', 'Synthesize the premises and predict the conclusion that logically follows', 'Identify which sentence in the stimulus IS the conclusion'],
      ['**Answer choices**', 'Possible conclusions \u2014 only one logically follows from the premises', 'Paraphrases of sentences in the stimulus \u2014 only one is the main conclusion'],
      ['**Key skill**', 'Predictive reasoning \u2014 you must anticipate where the argument is headed', 'Structural analysis \u2014 you must distinguish conclusion from premises using indicator words'],
      ['**Common trap overlap**', '"Too strong" answers that overstate the evidence', '"Premise restated" answers that confuse a premise for the conclusion'],
      ['**Stem language**', '"Which most logically completes the argument?"', '"Which most accurately expresses the main conclusion?"'],
    ]},

    { type: 'callout', variant: 'default', title: 'Key Distinction', text: 'In Main Conclusion questions, the answer is already in the stimulus \u2014 you just need to find it. In Fill in the Blank questions, the answer is NOT in the stimulus \u2014 you must construct it from the evidence provided. This is why pre-phrasing is even more critical for FitB.' },

    { type: 'hr' },

    { type: 'h2', text: '5. Common Traps' },
    { type: 'paragraph', text: 'Wrong answers in Fill in the Blank questions fall into predictable categories. Memorize these patterns to eliminate traps quickly during timed practice.' },

    { type: 'breakdown', labels: { title: 'Trap', text: 'Description & How to Spot It' }, items: [
      { title: '1. Too Strong', text: 'The answer uses extreme language like "all," "never," "only," "must," or "impossible" when the stimulus provides limited evidence. A few premises cannot justify a universal claim. **Test:** Would adding "sometimes" or "can" make it more defensible? If yes, the original is too strong.', badge: 'Force', badgeColor: 'slate' },
      { title: '2. Too Weak', text: 'The answer is technically true but far weaker than what the evidence supports. It hedges so much ("might," "could possibly," "is not impossible") that it fails to capture the argument\'s actual conclusion. **Test:** Does this statement add anything the premises haven\'t already established? If no, it is too weak.', badge: 'Force', badgeColor: 'slate' },
      { title: '3. Restates a Premise', text: 'The answer merely rephrases information already stated in the stimulus instead of advancing the argument. It goes in a circle rather than reaching a new logical endpoint. **Test:** Is this just repeating a fact from the passage? If yes, it does not fill the gap.', badge: 'Logic', badgeColor: 'indigo' },
      { title: '4. Wrong Scope', text: 'The answer introduces a concept, topic, or comparison that is not discussed in the stimulus. It may sound relevant to the general subject matter but addresses a different question than the one the argument is building toward. **Test:** Does every term in this answer connect to something explicitly stated in the stimulus?', badge: 'Scope', badgeColor: 'blue' },
      { title: '5. Addresses Wrong Part of Argument', text: 'The answer provides a premise when the blank requires a conclusion, or vice versa. It fills the wrong logical role. **Test:** Re-read the sentence containing the blank with this answer inserted \u2014 does it make grammatical and logical sense in the correct role?', badge: 'Logic', badgeColor: 'indigo' },
      { title: '6. Backward Logic', text: 'The answer reverses the causal or logical direction of the argument. If the stimulus establishes that A leads to B, this trap states that B leads to A. **Test:** Does the answer\'s causal arrow point the same direction as the stimulus\'s?', badge: 'Logic', badgeColor: 'indigo' },
      { title: '7. Bad Comparison', text: 'The answer makes a comparison to an unrelated situation or focuses on superficial similarities rather than the core logical structure. It distracts by drawing a parallel that doesn\'t hold. **Test:** Is the comparison based on the mechanism that drives the argument, or on surface-level features?', badge: 'Scope', badgeColor: 'blue' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: '6. Reading Strategy' },
    { type: 'paragraph', text: 'How you read the stimulus matters as much as how you evaluate the answers. Fill in the Blank requires a different reading approach than standard LR questions because you must predict rather than react.' },

    { type: 'h3', text: 'When You See a Blank in the Stimulus' },
    { type: 'process', title: 'Reading Strategy', steps: [
      '**First pass \u2014 Locate the blank and classify it.** Before deep reading, scan for the blank\'s position. Check the word immediately before it (therefore/thus = conclusion; since/because = premise). This takes two seconds and frames your entire read.',
      '**Second pass \u2014 Read for structure, not content.** On your careful read, focus on how the pieces connect rather than memorizing details. Identify the core relationship: Is there a chain? A comparison? A contradiction? A conditional rule?',
      '**Third pass \u2014 Pause before the blank.** Stop reading just before you reach the blank. Ask yourself: "Based on everything I have read so far, what MUST come next?" Formulate your pre-phrase in this moment of pause.',
      '**Then read the answers.** Only after you have a clear pre-phrase should you look at the answer choices. This prevents attractive distractors from overriding your logical analysis.',
    ]},

    { type: 'callout', variant: 'tip', title: 'The Pause Technique', text: 'The most effective FitB solvers treat the blank as a stop sign. They literally pause their reading, close their eyes for one second, and mentally complete the sentence before looking at the choices. This small habit dramatically reduces the influence of trap answers.' },

    { type: 'hr' },

    { type: 'h2', text: '7. Test Day Checklist' },
    { type: 'paragraph', text: 'Run through this checklist on every Fill in the Blank question during timed practice and on test day.' },

    { type: 'process', title: 'Test Day Checklist', steps: [
      '**Confirm the question type.** The stem says "most logically completes" or "most reasonably completes" and the stimulus contains a literal blank. If the stimulus has no blank, switch to the correct question type.',
      '**Classify the blank.** Check the word before the blank. Conclusion indicator = you supply the conclusion. Premise indicator = you supply a supporting reason. This classification is non-negotiable \u2014 get it right before proceeding.',
      '**Map the argument\'s structure.** Identify the pattern: mechanistic chain, analogy, problem-solution, philosophical rebuttal, conditional chain, or paradox resolution. Knowing the pattern accelerates your pre-phrase.',
      '**Pre-phrase before reading answers.** Pause at the blank and mentally complete the sentence. Your pre-phrase should be specific enough to distinguish the correct answer from traps, but flexible enough to accommodate different wording.',
      '**Match your pre-phrase.** Scan all five choices for the structural match. Do not expect identical wording \u2014 expect the same logical content expressed differently.',
      '**Eliminate traps systematically.** For each remaining contender, check: Is it too strong? Too weak? Does it restate a premise? Is it out of scope? Does it reverse the logic? Does it fill the wrong role?',
      '**Insert and re-read.** Place your selected answer into the blank and re-read the entire argument. Does it flow naturally? Does the logic hold? If the argument reads like a coherent paragraph, you have the right answer.',
      '**Check for scope creep.** Verify that every concept in your selected answer traces back to something in the stimulus. If the answer introduces a new idea not mentioned or implied by the premises, it is likely wrong.',
      '**Verify strength calibration.** Confirm that the language strength matches the evidence. Limited evidence supports "can" and "sometimes" but not "always" and "must." One example does not prove a universal rule.',
      '**Select and move on.** Commit to your answer. Fill in the Blank questions reward structured thinking and disciplined pre-phrasing \u2014 if you followed the 4 steps, trust the process.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Quick-Reference Tables' },

    { type: 'h3', text: 'Blank Role Quick-Check' },
    { type: 'table', headers: ['Words Before the Blank', 'Blank Role', 'Your Approach'], rows: [
      ['Therefore / Thus / Hence / So / It follows that', 'Conclusion', 'Synthesize the premises into a logical endpoint'],
      ['Since / Because / For / Given that', 'Premise', 'Find the missing bridge between evidence and conclusion'],
      ['No clear indicator', 'Context-dependent', 'Read the full sentence structure to determine whether the blank completes or supports a claim'],
    ]},

    { type: 'h3', text: 'Pattern Recognition Cheat Sheet' },
    { type: 'table', headers: ['If You See...', 'The Pattern Is Likely...', 'Pre-phrase Template'], rows: [
      ['A step-by-step process (A causes B, B causes C)', 'Mechanistic Chain', '"Therefore, the immediate result is [C], even if the intended goal was [something else]."'],
      ['Two parallel situations being compared', 'Analogy Completion', '"Similarly, [Situation B] will experience [the same outcome] as [Situation A]."'],
      ['A proposed solution to a stated problem', 'Problem-Solution', '"This solution will [succeed/fail/cause side effect] because [reason]."'],
      ['A viewpoint followed by "however" or "but"', 'Philosophical Rebuttal', '"Therefore, the original claim is [undermined/qualified] because [counter-reasoning]."'],
      ['If-then statements with a triggering fact', 'Conditional Chain', '"Therefore, [the necessary consequence] follows from applying the rule."'],
      ['Two facts that seem to contradict each other', 'Paradox Resolution', '"This is possible because [explanation that reconciles both facts]."'],
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Module 15 Summary', text: '**Fill in the Blank = Predictive Reasoning.** You receive an incomplete argument and supply the missing piece \u2014 either the conclusion or a premise.\n\n**The 4-Step Method:** Read Premises & Locate Blank \u2192 Identify the Gap \u2192 Pre-phrase \u2192 Match & Eliminate.\n\n**Two blank types:** Conclusion blank (~65\u201370%) and Premise blank (~30\u201335%). The word before the blank tells you which.\n\n**Six recurring patterns:** Mechanistic Chain, Analogy Completion, Problem-Solution, Philosophical Rebuttal, Conditional Chain, Paradox Resolution.\n\n**Seven common traps:** Too strong, too weak, restates premise, wrong scope, addresses wrong part, backward logic, bad comparison.\n\n**The pre-phrase is your most powerful tool.** Pause at the blank, predict the answer, then match. Students who pre-phrase consistently outperform those who evaluate each choice from scratch.' },
  ]
};
