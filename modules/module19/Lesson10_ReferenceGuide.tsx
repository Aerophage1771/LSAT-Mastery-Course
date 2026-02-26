import { Lesson } from '../../types';

export const Lesson10_ReferenceGuide: Lesson = {
  id: "19-10",
  title: "Reference Guide",
  content: [
    { type: 'h2', text: 'Module 19: Paradox / Explain \u2014 Reference Guide' },
    { type: 'paragraph', text: 'This reference guide consolidates everything from Module 19 into a single, quick-access resource. Use it for pre-test review, timed practice sessions, and as a checklist before attempting Paradox / Explain questions.' },

    { type: 'hr' },

    { type: 'h2', text: '1. The 4-Step Method' },
    { type: 'paragraph', text: 'Every Paradox / Explain question follows the same repeatable process. Memorize this sequence and apply it consistently.' },
    { type: 'process', title: 'The 4-Step Method', steps: [
      '**Step 1 \u2014 Identify the Facts:** Read the stimulus and locate the two statements that are in tension. Look for pivot words like "however," "yet," "surprisingly," or "paradoxically" that signal the turn from the expected to the unexpected. Clearly state: "Fact 1 leads me to expect X, but Fact 2 says the opposite happened."',
      '**Step 2 \u2014 Articulate the Tension:** Before looking at the answer choices, put the paradox in your own words. Frame it as a question: "Why did Y happen even though X should have prevented it?" The more precisely you define the conflict, the faster you will recognize the correct answer.',
      '**Step 3 \u2014 Prephrase a Bridge:** Anticipate the *kind* of information that would resolve the conflict. You don\'t need a perfect prediction \u2014 you need a logical direction. Ask: "What new fact would allow both Fact 1 and Fact 2 to be true at the same time?" Think about hidden causes, overlooked distinctions, or behavioral changes.',
      '**Step 4 \u2014 Match the Answer:** Evaluate each answer choice against your prephrase. The correct answer introduces a new piece of information that shows how both conflicting facts coexist. It does not deny either fact; it provides the missing context that makes the entire situation logical.',
    ]},

    { type: 'callout', variant: 'tip', title: 'Timing Target', text: '~10 sec reading the stem and confirming question type \u2192 ~25 sec identifying the two conflicting facts \u2192 ~15 sec articulating the tension and prephrasing \u2192 ~35 sec evaluating answer choices \u2192 ~10 sec verifying the resolution. Total: **~95 seconds.** The prephrasing step is non-negotiable \u2014 skipping it leaves you scanning all five choices without a compass.' },

    { type: 'hr' },

    { type: 'h2', text: '2. Paradox Types' },
    { type: 'paragraph', text: 'Paradox stimuli create tension through recurring patterns. Recognizing the pattern accelerates your prephrasing and answer selection.' },

    { type: 'table', headers: ['Paradox Type', 'How It Works', 'What to Look For', 'Lesson'], rows: [
      ['**Numbers vs. Percentages**', 'A statistic is true for a subgroup but not for the whole population (or vice versa). The conflict arises because the groups being compared have different sizes, compositions, or baselines.', 'Two statistics that seem to measure the same thing but produce opposite results. Words like "rate," "percentage," "per capita," or "proportion" versus "total," "number," or "amount."', 'Lesson 3'],
      ['**Selection Bias**', 'A group undergoing a treatment or in a particular category shows a surprising trait. The resolution is that people with the trait disproportionately select themselves into that group, creating a biased sample.', 'A treatment group or self-selected population showing an unexpected characteristic. The paradox disappears when you realize correlation is driven by who joins the group, not what the group does to them.', 'Lesson 4'],
      ['**Causal Mechanism**', 'An action produces the opposite of its intended effect because it triggers an unintended behavioral response that overpowers the primary effect. Often called "risk compensation" or the "net effect."', 'An intervention that should improve an outcome but instead worsens it. Look for a hidden secondary behavior change that reverses the expected result.', 'Lesson 5'],
      ['**Hidden Distinction**', 'Two facts appear to measure the same thing but actually measure different things. The paradox hinges on a subtle difference in the nouns or metrics being compared.', 'Near-identical terms used in two conflicting statements. Scrutinize every noun: "profits" vs. "revenue," "defective garments" vs. "recycled scrap," "cost per unit" vs. "total cost."', 'Lesson 7'],
      ['**Counterintuitive Causal Web**', 'A system with multiple actors produces a surprising outcome because a secondary actor\'s changed behavior overpowers the primary actor\'s incentive. Simple cause-and-effect fails; you must consider the entire system.', 'Economic incentives, competing interests, or multi-party scenarios where one party\'s rational response to a policy reverses the expected outcome for the system as a whole.', 'Lesson 8'],
      ['**Temporal Shift**', 'A trend reverses or a relationship changes over time. The resolution introduces a change in conditions between the two time periods that accounts for the shift.', 'Before-and-after comparisons, trend reversals, or "used to be true but no longer is" framing. The key is identifying what changed between the time periods.', 'Lessons 3\u20138'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: '3. Paradox vs. Strengthen vs. Weaken' },
    { type: 'paragraph', text: 'Paradox questions are often confused with Strengthen and Weaken questions because all three involve evaluating how new information relates to existing facts. Use this comparison to stay on task.' },

    { type: 'table', headers: ['Feature', 'Paradox / Explain', 'Strengthen', 'Weaken'], rows: [
      ['**Stimulus structure**', 'A set of facts (not an argument). No conclusion is being drawn. Two facts are in tension.', 'An argument with a conclusion and premises. The reasoning has a gap.', 'An argument with a conclusion and premises. The reasoning has a gap.'],
      ['**Your task**', 'Find the answer that makes BOTH facts simultaneously true by introducing a missing piece of context.', 'Find the answer that makes the conclusion more likely to be true by filling the gap in reasoning.', 'Find the answer that makes the conclusion less likely to be true by exploiting the gap in reasoning.'],
      ['**Relationship to the stimulus**', 'The answer does NOT attack or support any claim. It reconciles two facts that seem to conflict.', 'The answer supports the argument\'s conclusion by bridging a logical gap.', 'The answer undermines the argument\'s conclusion by exposing or widening a logical gap.'],
      ['**Correct answer effect**', 'The apparent contradiction disappears. Both facts make sense together.', 'The argument becomes more convincing. The conclusion is better supported.', 'The argument becomes less convincing. The conclusion is called into question.'],
      ['**Key test**', '"Does this answer explain how BOTH facts can be true at the same time?"', '"Does this answer make the conclusion more likely?"', '"Does this answer make the conclusion less likely?"'],
    ]},

    { type: 'callout', variant: 'default', title: 'Key Distinction', text: 'Paradox questions have **no argument to attack or defend**. The stimulus is a set of facts, not a chain of reasoning. If you find yourself evaluating whether an answer "supports the conclusion," you have slipped into Strengthen mode. Recalibrate: your job is to reconcile, not to evaluate.' },

    { type: 'hr' },

    { type: 'h2', text: '4. The Resolution Test' },
    { type: 'paragraph', text: 'The Resolution Test is your single most powerful verification tool. Before committing to any answer on a Paradox question, apply this test.' },

    { type: 'callout', variant: 'summary', title: 'The Resolution Test', text: '**The correct answer must make BOTH facts simultaneously true.**\n\nFor every answer choice you are considering, ask:\n\n1. If I accept this answer as true, does Fact 1 still hold?\n2. If I accept this answer as true, does Fact 2 still hold?\n3. Does this answer explain *why* both facts coexist?\n\nAll three must be "yes." If the answer only addresses one fact, deepens the mystery, or requires you to reject either fact, it fails the Resolution Test.' },

    { type: 'paragraph', text: 'An answer that explains only Fact 1 is a half-explanation. An answer that explains only Fact 2 is also a half-explanation. An answer that makes the conflict worse is a trap. Only an answer that bridges both facts passes the test.' },

    { type: 'hr' },

    { type: 'h2', text: '5. Common Traps' },
    { type: 'paragraph', text: 'Wrong answers on Paradox questions fall into predictable categories. Memorize these patterns to eliminate traps quickly during timed practice.' },

    { type: 'breakdown', labels: { title: 'Trap', text: 'Description & How to Spot It' }, items: [
      { title: '1. Explains Only One Fact', text: 'The answer addresses only one side of the conflict. It validates Fact 1 or Fact 2 in isolation but never connects them. It might explain *why* the expected outcome was expected, without explaining why the unexpected outcome occurred. **Test:** Does this answer tell me something about both facts, or just one?', badge: 'Half-Explanation', badgeColor: 'red' },
      { title: '2. Deepens the Paradox', text: 'The answer introduces a new reason why the *expected* outcome should have happened, making the *unexpected* outcome even more mysterious. Instead of resolving the conflict, it adds fuel to the fire. **Test:** After reading this answer, is the paradox easier or harder to understand?', badge: 'Worsener', badgeColor: 'red' },
      { title: '3. Irrelevant Information', text: 'The answer provides a true-sounding fact about a different group, a different time period, or a different variable that has no bearing on the specific conflict presented. It may be topically related but logically disconnected. **Test:** Does this answer address the *specific* relationship between Fact 1 and Fact 2?', badge: 'Scope', badgeColor: 'slate' },
      { title: '4. Too Extreme', text: 'The answer provides an explanation that goes far beyond what is needed or introduces an absolute claim that is not supported. Paradox resolutions require a plausible bridge, not an extreme or universal assertion. **Test:** Is this answer proportional to the conflict, or does it overcorrect?', badge: 'Degree', badgeColor: 'indigo' },
      { title: '5. Restates the Paradox', text: 'The answer merely rephrases the conflict in different words without introducing any new information. It confirms that the surprising situation exists but offers no explanation for why it exists. **Test:** Does this answer give me information I did not already have from the stimulus?', badge: 'Circular', badgeColor: 'slate' },
      { title: '6. Explains the Wrong Direction', text: 'The answer provides a logical reason for the *expected* result to happen, rather than explaining the *unexpected* result that actually occurred. It explains why the paradox should not exist instead of explaining why it does. **Test:** Does this answer explain the outcome that actually happened, or the outcome that did not happen?', badge: 'Direction', badgeColor: 'blue' },
      { title: '7. Confuses Correlation and Causation', text: 'The answer implies that because two things occur together, one caused the other. But correlation alone does not resolve a paradox \u2014 the answer must provide the specific causal mechanism that connects the conflicting facts. **Test:** Does this answer explain *how* the connection works, or does it just assert that one exists?', badge: 'Logic', badgeColor: 'blue' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: '6. The EXCEPT Strategy' },
    { type: 'paragraph', text: '"Each of the following helps to explain the discrepancy EXCEPT" is a common phrasing for Paradox questions. This reversal can be disorienting because you must find the one answer that does NOT resolve the conflict. The EXCEPT Strategy gives you a systematic approach.' },

    { type: 'process', title: 'The EXCEPT Strategy', steps: [
      '**Recognize the inversion.** "Each of the following resolves the paradox EXCEPT" = "Which one does NOT resolve the paradox?" Mentally convert the question stem before you begin. Four answers will successfully explain the conflict; one will not.',
      '**Label each answer choice.** As you evaluate, mark each choice as either RESOLVES (explains the conflict) or FAILS (does not explain). Four choices will be RESOLVES; one will be FAILS.',
      '**Test for resolution, not plausibility.** An answer does not need to be the *best* explanation \u2014 it only needs to provide *some* logical bridge between the conflicting facts. If it offers any mechanism that connects Fact 1 and Fact 2, it resolves the paradox and should be eliminated.',
      '**Identify the outlier.** The correct answer is the only choice that, even if true, leaves the paradox intact. The conflict between Fact 1 and Fact 2 remains just as mysterious after reading this answer.',
      '**Verify your selection.** Re-read your chosen answer and confirm: "Even if this is true, I still cannot explain how both facts coexist." If you can articulate a resolution using this answer, reconsider.',
    ]},

    { type: 'callout', variant: 'tip', title: 'EXCEPT Shortcut', text: 'When you see "EXCEPT" in the stem, circle or underline it immediately. Then, next to each answer choice, write a quick "R" (resolves) or "X" (fails) as you evaluate. This prevents the common mistake of accidentally selecting an answer that *does* resolve the paradox because you lost track of the inverted logic.' },

    { type: 'hr' },

    { type: 'h2', text: '7. Test Day Checklist' },
    { type: 'paragraph', text: 'Run through this checklist on every Paradox / Explain question during timed practice and on test day.' },

    { type: 'process', title: 'Test Day Checklist', steps: [
      '**Confirm the question type.** The stem says "resolve the discrepancy," "explain the surprising finding," "contribute to an explanation," or "helps to explain... EXCEPT." If the stem asks what "strengthens" or "weakens," switch to the correct strategy.',
      '**Read the stimulus as a fact-finder.** Accept every statement as true. Your job is not to argue with the facts but to reconcile them. There is no conclusion to attack or support.',
      '**Locate the pivot.** Find the word or phrase that signals the turn from expected to unexpected: "however," "yet," "surprisingly," "paradoxically," "but," "nevertheless." The pivot separates Fact 1 from Fact 2.',
      '**State the paradox in your own words.** Before looking at the choices, complete this sentence: "It is surprising that [Fact 2] because [Fact 1] would lead me to expect the opposite." If you cannot state the paradox clearly, re-read the stimulus.',
      '**Identify the paradox type.** Is the stimulus setting up a numbers vs. percentages trap? A selection bias scenario? A causal mechanism? A hidden distinction? A counterintuitive causal web? Recognizing the pattern tells you what kind of answer to expect.',
      '**Prephrase a bridge.** Anticipate the kind of information that would connect the two facts. Think about hidden variables, overlooked distinctions, or behavioral changes.',
      '**Scan for EXCEPT.** If the question says "EXCEPT," label each choice as RESOLVES or FAILS. Four will resolve; the correct answer will be the only one that fails.',
      '**Apply the Resolution Test.** For each remaining option, ask: "If this answer is true, does it explain how BOTH Fact 1 and Fact 2 can be true at the same time?" Only the answer that bridges both facts is correct.',
      '**Check for common traps.** Is any remaining choice a half-explanation? Does it deepen the paradox? Is it irrelevant? Does it restate the conflict? Does it explain the wrong direction?',
      '**Select and move on.** Commit to your answer. Paradox questions reward precise conflict identification and the Resolution Test \u2014 if you followed the 4 steps, trust the process.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Quick-Reference Tables' },

    { type: 'h3', text: 'Paradox Type Quick-Check' },
    { type: 'table', headers: ['If You See...', 'The Paradox Type Is Likely...', 'What to Look For in Answers'], rows: [
      ['Two statistics that contradict each other ("rate" vs. "total," "per capita" vs. "number")', 'Numbers vs. Percentages', 'An answer that explains how different group sizes, compositions, or baselines make both statistics true.'],
      ['A treatment group or self-selected population with an unexpected trait', 'Selection Bias', 'An answer that shows people with the trait disproportionately join the group, rather than the group causing the trait.'],
      ['An intervention that produces the opposite of its intended effect', 'Causal Mechanism', 'An answer that identifies a hidden behavioral change or secondary effect that overpowers the primary effect.'],
      ['Near-identical terms in two conflicting facts ("profits" vs. "revenue," "defective" vs. "scrap")', 'Hidden Distinction', 'An answer that exploits a subtle difference in what the two facts are actually measuring.'],
      ['A multi-party system where one party\'s incentive produces a surprising system-wide outcome', 'Counterintuitive Causal Web', 'An answer that shows a secondary actor\'s behavior reverses the expected result.'],
      ['A before-and-after comparison or a trend that reverses over time', 'Temporal Shift', 'An answer that identifies what changed between the two time periods.'],
    ]},

    { type: 'h3', text: 'Resolution Spectrum' },
    { type: 'table', headers: ['Answer Type', 'Description', 'Correct?'], rows: [
      ['Bridges both facts', 'Introduces new information that explains how Fact 1 and Fact 2 coexist.', 'Yes \u2714 \u2014 This is the correct answer.'],
      ['Explains only Fact 1', 'Validates the expected outcome but ignores the unexpected outcome.', 'No \u2718 \u2014 Half-explanation trap.'],
      ['Explains only Fact 2', 'Addresses the unexpected outcome but ignores why the expected outcome was expected.', 'No \u2718 \u2014 Half-explanation trap.'],
      ['Deepens the paradox', 'Adds a new reason why the expected outcome should have occurred.', 'No \u2718 \u2014 Worsener trap.'],
      ['Restates the conflict', 'Rephrases the paradox without introducing new information.', 'No \u2718 \u2014 Circular trap.'],
      ['Irrelevant information', 'Discusses a different group, time period, or variable.', 'No \u2718 \u2014 Scope trap.'],
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Module 19 Summary', text: '**Paradox / Explain = Reconciliation.** You receive a set of facts that seem to contradict each other and find the answer that makes both facts simultaneously true.\n\n**The 4-Step Method:** Identify Facts \u2192 Articulate Tension \u2192 Prephrase Bridge \u2192 Match Answer.\n\n**Six paradox types:** Numbers vs. Percentages, Selection Bias, Causal Mechanism, Hidden Distinction, Counterintuitive Causal Web, Temporal Shift.\n\n**The Resolution Test:** The correct answer must make BOTH facts simultaneously true. If it addresses only one fact, deepens the mystery, or is irrelevant, it fails.\n\n**Seven common traps:** Explains only one fact, deepens the paradox, irrelevant information, too extreme, restates the paradox, explains the wrong direction, confuses correlation and causation.\n\n**EXCEPT Strategy:** Four answers resolve the paradox; one does not. Label each choice as RESOLVES or FAILS and find the outlier.\n\n**The Resolution Test is your safeguard.** Always ask: "If this answer is true, does it explain how BOTH facts can be true at the same time?" If the answer is yes, you have found the correct choice (or, in an EXCEPT question, an answer to eliminate).' },
  ]
};
