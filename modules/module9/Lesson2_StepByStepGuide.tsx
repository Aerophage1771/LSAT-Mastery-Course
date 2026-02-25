import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: "9-2",
  title: "Step-by-Step Guide",
  content: [
    { type: 'h2', text: 'The 4-Step Method for Strengthen Questions' },
    { type: 'paragraph', text: "This lesson provides a complete, repeatable method for solving any Strengthen question. Each step includes concrete guidance, tips for when the step gets tricky, and a callout with a key insight. At the end, you will work through a full example applying all four steps to a single question." },

    { type: 'callout', variant: 'tip', title: 'Timing', text: "You should spend roughly **1 minute and 30 seconds** per Strengthen question. Steps 1 and 2 (reading and gap-finding) should take about 50 seconds combined. Steps 3 and 4 (prephrasing and evaluating) should take about 40 seconds. The 4-step method may feel slow at first, but with practice it becomes automatic. Timed drilling is the fastest way to internalize the process." },

    { type: 'hr' },

    { type: 'h3', text: 'Overview' },
    { type: 'process', title: 'The 4-Step Method', steps: [
      '**Step 1 — Break Down the Argument:** Read the stimulus, isolate the conclusion and premises, and understand the author\'s reasoning.',
      '**Step 2 — Identify the Gap:** Find the logical leap between the evidence and the conclusion. Ask: "Why isn\'t this proof 100% solid?"',
      '**Step 3 — Prephrase the Strengthener:** Predict the type of information that would fill the gap before looking at the answer choices.',
      '**Step 4 — Evaluate and Eliminate:** Match your prephrase to the answer choices, using elimination to discard traps.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "Your first move is to figure out how the argument is built. Read the stimulus to isolate two parts:" },
    { type: 'list', items: [
      '**Find the Main Conclusion:** What is the author trying to prove? Usually, this is a hypothesis about a cause, a prediction, a recommendation, or a specific judgment.',
      '**Find the Evidence:** What facts or observations does the author provide to back up that main point?',
    ]},
    { type: 'paragraph', text: "Knowing exactly what is being argued and why is the foundation for everything else. Without a clear grasp of the conclusion and premises, you cannot find the gap, and without the gap you cannot prephrase." },

    { type: 'callout', variant: 'default', title: 'When This Step Gets Tricky', text: "Some stimuli bury the conclusion in the middle of the paragraph or present it before the evidence. Do not assume the conclusion is always the last sentence. Use conclusion indicators (*therefore, thus, so, hence, consequently*) and the Why Test (*\"Why does the author believe this?\"*) to locate it regardless of its position." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 2: Identify the Logical Gap' },
    { type: 'paragraph', text: "Every argument in a Strengthen question is, by design, incomplete. The evidence never fully proves the conclusion. Your job is to find that gap. Ask yourself: *\"Why isn't this proof 100% solid?\"*" },
    { type: 'paragraph', text: "Look for these common gap patterns:" },

    { type: 'table', headers: ['Gap Pattern', 'What the Author Does', 'What\'s Missing'], rows: [
      ['**Correlation → Causation**', 'Sees A and B occurring together and concludes A caused B.', 'Could B have caused A? Could a third factor C have caused both? Is it coincidence?'],
      ['**Sample → Population**', 'Makes a broad claim based on a small or unusual group.', 'Is the sample representative? Does it have a selection bias?'],
      ['**Analogy / Comparison**', 'Concludes something about X because it\'s true of the "similar" Y.', 'Are X and Y actually similar in the relevant respects? Is there a key difference?'],
      ['**Plan / Recommendation**', 'Claims a plan will work without addressing obstacles.', 'Are there hidden costs, side effects, or implementation barriers?'],
      ['**Percentage ↔ Number**', 'Treats percentages and absolute numbers as interchangeable.', 'Is the base amount known? Could the rate change while the total stays the same?'],
      ['**Concept Shift**', 'Uses one concept in the premises and a different concept in the conclusion.', 'What connects concept X in the evidence to concept Y in the conclusion?'],
    ]},

    { type: 'callout', variant: 'tip', title: 'Tip: Name the Gap Out Loud', text: "Before moving to Step 3, try to articulate the gap in one sentence: *\"The author assumes that [X], but has not shown that [X] is true.\"* If you can finish this sentence, you have found the gap. If you cannot, re-read the stimulus." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 3: Prephrase the Strengthener' },
    { type: 'paragraph', text: "Once you understand the gap, predict the answer before looking at the choices. This is the single most important habit you can build for Strengthen questions. It protects you from trap answers and keeps you focused on the argument's core vulnerability." },

    { type: 'h4', text: 'The Prephrasing Technique' },
    { type: 'paragraph', text: "Complete this sentence in your head: *\"The argument would be stronger if I found out that...\"*" },
    { type: 'paragraph', text: "Your prephrase does not need to be an exact match for the correct answer — it just needs to be in the right neighborhood. As long as your prephrase targets the same gap, you will recognize the correct answer when you see it." },

    { type: 'h4', text: 'Prephrase Examples by Gap Type' },
    { type: 'table', headers: ['Gap Type', 'Prephrase Template'], rows: [
      ['Correlation → Causation', '"...no other factor explains the observed result" or "...removing the cause also removes the effect"'],
      ['Sample → Population', '"...the sample is representative of the broader group"'],
      ['Analogy / Comparison', '"...the two things being compared are actually similar in the relevant way"'],
      ['Plan / Recommendation', '"...the plan does not have a hidden cost or obstacle that would outweigh its benefit"'],
      ['Percentage ↔ Number', '"...the base amounts are comparable" or "...the base amount is large enough to support the claim"'],
      ['Concept Shift', '"...concept X in the evidence is connected to concept Y in the conclusion"'],
    ]},

    { type: 'callout', variant: 'default', title: 'When This Step Gets Tricky', text: "Sometimes the gap is not obvious, or the argument has multiple vulnerabilities. In these cases, form a broad prephrase that captures the general direction of support needed: *\"Something that shows the cause-effect link is real.\"* A broad prephrase is better than no prephrase at all." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 4: Evaluate and Eliminate' },
    { type: 'paragraph', text: "Scan the five choices, looking for one that matches your prephrase. If your prephrase was strong, the correct answer should jump out. If not, use elimination to remove trap answers." },

    { type: 'h3', text: 'Common Wrong Answer Patterns' },
    { type: 'paragraph', text: "Wrong answers on Strengthen questions fail for predictable reasons. Recognizing these patterns lets you eliminate quickly and confidently." },

    { type: 'table', headers: ['Trap Type', 'What It Does', 'How to Spot It'], rows: [
      ['**Reversal (Weakener)**', 'Actually damages the argument instead of helping it. Provides evidence that the conclusion is less likely.', 'Ask: "Does this make the conclusion more or less likely?" If less, eliminate immediately.'],
      ['**Irrelevant Scope**', 'Discusses a topic related to the stimulus but misses the specific conclusion. May address a different population, time frame, or issue.', 'Check: Does this choice connect to the *specific* gap between *these* premises and *this* conclusion?'],
      ['**Too Weak / Vague**', 'Presents a scenario that is theoretically helpful but practically insignificant. Uses hedging language like "some," "sometimes," or "in certain cases."', 'Compare it to other candidates. If another choice provides stronger, more direct support, the weaker choice is likely wrong.'],
      ['**No Impact**', 'States a topical fact that is logically neutral — it neither helps nor hurts the argument.', 'Test the choice: if you remove it, does the argument\'s strength change at all? If not, it has no impact.'],
      ['**Premise Repeater**', 'Restates or paraphrases information already in the stimulus without adding anything new.', 'A strengthener must introduce *new* information. If the choice merely echoes the evidence, it cannot increase the conclusion\'s probability.'],
    ]},

    { type: 'callout', variant: 'tip', title: 'The Direction Check', text: "Before committing to any answer on a Strengthen question, perform the **Direction Check**: mentally insert the answer into the argument and ask, *\"Is the conclusion now MORE likely or LESS likely to be true?\"* This 5-second check catches reversals — the most common trap on Strengthen questions." },

    { type: 'hr' },

    { type: 'h2', text: 'Full Worked Example' },
    { type: 'paragraph', text: "Let's apply all four steps to a complete Strengthen question from start to finish." },

    { type: 'question-card',
      id: 'WE-9-2-001',
      questionType: 'Strengthen',
      difficulty: 'medium',
      stimulus: "A pharmaceutical company tested a new migraine medication on 500 volunteers who suffer from chronic migraines. After three months of treatment, 70% of the volunteers reported a significant reduction in migraine frequency. The company concluded that the medication is effective at reducing migraines.",
      question: "Which one of the following, if true, most strengthens the argument?",
      options: [
        "(A) The volunteers were recruited from a single hospital that specializes in treating severe migraines.",
        "(B) Migraine frequency tends to fluctuate naturally over time, with periods of improvement followed by periods of worsening.",
        "(C) A control group of 500 chronic migraine sufferers who received a placebo during the same period showed only a 20% rate of reported improvement. (Correct)",
        "(D) The medication has been shown to be effective in treating tension headaches as well as migraines.",
        "(E) Some of the volunteers experienced mild side effects, including drowsiness and nausea.",
      ],
    },

    { type: 'h3', text: 'Applying the 4-Step Method' },

    { type: 'process', title: 'Step-by-Step Walkthrough', steps: [
      '**Step 1 — Break Down the Argument:**\n• **Conclusion:** The medication is effective at reducing migraines.\n• **Evidence:** 70% of 500 volunteers reported a significant reduction in migraine frequency after three months.\n• **Structure:** The company observes improvement in a test group and concludes the medication caused the improvement.',
      '**Step 2 — Identify the Gap:**\nThe argument makes a classic **correlation-to-causation** leap. The volunteers improved, but the company has not shown that the *medication* was responsible. The improvement could be due to the placebo effect, natural fluctuation in migraine frequency, regression to the mean (volunteers may have enrolled during a particularly bad period), or other factors. Without a control group or comparison, the 70% figure is meaningless as evidence of the medication\'s efficacy.',
      '**Step 3 — Prephrase:**\n*"The argument would be stronger if I found out that people who did NOT take the medication did not experience the same improvement."* This would rule out the possibility that the improvement was caused by something other than the medication.',
      '**Step 4 — Evaluate:**\nScan the choices for one that provides a control or comparison group that shows the medication — not some other factor — drove the improvement.',
    ]},

    { type: 'h3', text: 'Answer Choice Breakdown' },

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) Volunteers were recruited from a single hospital specializing in severe migraines.', text: 'This actually *weakens* the argument by suggesting the sample is biased — patients at a specialty hospital may not be representative of chronic migraine sufferers generally. **Reversal trap — wrong direction.**', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) Migraine frequency tends to fluctuate naturally.', text: 'This provides an alternative explanation for the improvement: the volunteers may have gotten better on their own due to natural fluctuation, not because of the medication. **This is a weakener, not a strengthener.**', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) A control group receiving a placebo showed only 20% improvement.', text: 'This directly addresses the gap. If a comparable group that did NOT receive the medication improved at only 20% (versus 70% in the treatment group), the medication is the most likely explanation for the difference. This rules out the placebo effect and natural fluctuation as the primary causes of the improvement. **Matches the prephrase perfectly.**', badge: 'Correct', badgeColor: 'green' },
      { title: '(D) The medication also treats tension headaches.', text: 'The conclusion is about migraines, not tension headaches. The medication\'s effectiveness against a different condition is irrelevant to whether it works for migraines. **Irrelevant scope.**', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) Some volunteers experienced mild side effects.', text: 'Side effects do not tell us whether the medication is effective. A drug can cause side effects and still be ineffective, or cause no side effects and be highly effective. **No impact on the conclusion.**', badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "The 4-Step Method gives you a repeatable process: **Break Down → Find the Gap → Prephrase → Evaluate.**\n\nPrephrasing is the single most important habit. If you can describe the type of information that would help the argument before reading the answers, your accuracy will increase dramatically.\n\nAlways perform the **Direction Check** before committing. The most common trap on Strengthen questions is a choice that actually weakens the argument.\n\nWrong answers fall into five predictable categories: reversals, irrelevant scope, too weak, no impact, and premise repeaters. Memorize these patterns to eliminate efficiently." },
  ]
};
