import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: '9-2',
  title: 'Step-by-Step: Strengthen',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Step-by-Step: Strengthen' },
    {
      type: 'paragraph',
      text: 'This lesson provides a complete, repeatable method for solving any Strengthen question. Each step includes concrete guidance, tips for when the step gets tricky, and a callout with a key insight. At the end, you will work through a full example applying all four steps to a single question.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing',
      text: 'You should spend roughly **1 minute and 30 seconds** per Strengthen question. Steps 1 and 2 (reading and gap-finding) should take about 50 seconds combined. Steps 3 and 4 (prephrasing and evaluating) should take about 40 seconds. The 4-step method may feel slow at first, but with practice it becomes automatic. Timed drilling is the fastest way to internalize the process.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Overview' },
    {
      type: 'process',
      title: 'The 4-Step Method',
      steps: [
        "**Step 1 — Break Down the Argument:** Read the stimulus, isolate the conclusion and premises, and understand the author's reasoning.",
        '**Step 2 — Identify the Gap:** Find the logical leap between the evidence and the conclusion. Ask: "Why isn\'t this proof 100% solid?"',
        '**Step 3 — Prephrase the Strengthener:** Predict the type of information that would fill the gap before looking at the answer choices.',
        '**Step 4 — Evaluate and Eliminate:** Match your prephrase to the answer choices, using elimination to discard traps.',
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 1: Break Down the Argument' },
    {
      type: 'paragraph',
      text: 'Your first move is to figure out how the argument is built. Read the stimulus to isolate two parts:',
    },
    {
      type: 'list',
      items: [
        '**Find the Main Conclusion:** What is the author trying to prove? Usually, this is a hypothesis about a cause, a prediction, a recommendation, or a specific judgment.',
        '**Find the Evidence:** What facts or observations does the author provide to back up that main point?',
      ],
    },
    {
      type: 'paragraph',
      text: 'Knowing exactly what is being argued and why is the foundation for everything else. Without a clear grasp of the conclusion and premises, you cannot find the gap, and without the gap you cannot prephrase.',
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'When This Step Gets Tricky',
      text: 'Some stimuli bury the conclusion in the middle of the paragraph or present it before the evidence. Do not assume the conclusion is always the last sentence. Use conclusion indicators (*therefore, thus, so, hence, consequently*) and the Why Test (*"Why does the author believe this?"*) to locate it regardless of its position.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 2: Identify the Logical Gap' },
    {
      type: 'paragraph',
      text: 'Every argument in a Strengthen question is, by design, incomplete. The evidence never fully proves the conclusion. Your job is to find that gap. Ask yourself: *"Why isn\'t this proof 100% solid?"*',
    },
    { type: 'paragraph', text: 'Look for these common gap patterns:' },

    {
      type: 'table',
      headers: ['Gap Pattern', 'What the Author Does', "What's Missing"],
      rows: [
        [
          '**Correlation → Causation**',
          'Sees A and B occurring together and concludes A caused B.',
          'Could B have caused A? Could a third factor C have caused both? Is it coincidence? Was there a real comparison, baseline, or experiment?',
        ],
        [
          '**Sample → Population**',
          'Makes a broad claim based on a small or unusual group.',
          'Is the sample representative? Does it have a selection bias?',
        ],
        [
          '**Analogy / Comparison**',
          'Concludes something about X because it\'s true of the "similar" Y.',
          'Are X and Y actually similar in the relevant respects? Is there a key difference?',
        ],
        [
          '**Plan / Recommendation**',
          'Claims a plan will work without addressing obstacles.',
          'Are there hidden costs, side effects, or implementation barriers?',
        ],
        [
          '**Cost-Benefit / Tradeoff**',
          'Claims an option, policy, or recommendation is preferable because its benefits justify its costs or because its rival is worse.',
          'Do the benefits really outweigh the costs? Is the downside smaller than it sounds? Is the alternative worse on the same metric?',
        ],
        [
          '**Percentage ↔ Number**',
          'Treats percentages and absolute numbers as interchangeable.',
          'Is the base amount known? Could the rate change while the total stays the same?',
        ],
        [
          '**Concept Shift**',
          'Uses one concept in the premises and a different concept in the conclusion.',
          'What connects concept X in the evidence to concept Y in the conclusion?',
        ],
      ],
    },
    { type: 'h4', text: 'Causal Strengthening Framework' },
    {
      type: 'paragraph',
      text: 'When a Strengthen question turns on causation, the strongest answers usually do one of two jobs. They either make the evidence look more like an **ideal experiment**, or they knock out a **competing hypothesis** that would otherwise explain the correlation just as well.',
    },
    {
      type: 'table',
      headers: ['Move', 'What It Strengthens', 'Typical LSAT Form'],
      rows: [
        [
          'Control / comparison group',
          'Shows the effect is tied to the proposed cause rather than a background trend',
          '"Those who lacked the treatment improved less" / "When the cause was absent, the effect was absent"',
        ],
        [
          'Chronology',
          'Shows the cause came first',
          '"The effect appeared only after the cause was introduced"',
        ],
        [
          'Mechanism',
          'Explains how the cause could produce the effect',
          '"The treatment changes the system in the exact way needed for the result"',
        ],
        [
          'Prediction / similar case',
          'Shows the explanation generates accurate downstream expectations',
          '"Other cases with the same cause show the same pattern"',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: 'A strong causal strengthener also keeps **random sample** and **random assignment** separate. Sampling affects whether you can generalize. Assignment affects whether the treatment and comparison groups were fairly matched. On hard Strengthen questions, the credited answer often fixes one of those two weaknesses directly.',
    },
    { type: 'h4', text: 'Non-Causal Support Lens' },
    {
      type: 'paragraph',
      text: 'Not every Strengthen question has a clean causal, statistical, or analogy label. On non-patterned questions, your job is still the same: find the point where the author\'s conclusion feels fragile, then ask what new fact would make that exact conclusion more reasonable.',
    },
    {
      type: 'table',
      headers: ['Move', 'What It Does', 'Typical LSAT Form'],
      rows: [
        [
          'Reduce the downside',
          'Shows that the cost, risk, or obstacle is smaller than the argument\'s critic would assume',
          '"The side effect is limited" / "The practical obstacle affects fewer cases than expected"',
        ],
        [
          'Increase the upside',
          'Shows that the benefit the author relies on is stronger, more frequent, or more important than it first appeared',
          '"The supposed advantage matters in exactly the cases the conclusion cares about"',
        ],
        [
          'Worsen the alternative',
          'Shows that the rejected option has a cost, inefficiency, or limitation that makes the author\'s preferred option look better by comparison',
          '"The alternative fails under the same conditions" / "The rival option carries the more serious risk"',
        ],
      ],
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'Support vs. Mere Relevance',
      text: 'A good non-causal strengthener does not just say something positive about the topic. It must improve the author\'s reasoning on the precise issue the conclusion depends on. Helpful background is not enough.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Tip: Name the Gap Out Loud',
      text: 'Before moving to Step 3, try to articulate the gap in one sentence: *"The author assumes that [X], but has not shown that [X] is true."* If you can finish this sentence, you have found the gap. If you cannot, re-read the stimulus.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 3: Prephrase the Strengthener' },
    {
      type: 'paragraph',
      text: "Once you understand the gap, predict the answer before looking at the choices. This is the single most important habit you can build for Strengthen questions. It protects you from trap answers and keeps you focused on the argument's core vulnerability.",
    },

    { type: 'h4', text: 'The Prephrasing Technique' },
    {
      type: 'paragraph',
      text: 'Complete this sentence in your head: *"The argument would be stronger if I found out that..."*',
    },
    {
      type: 'paragraph',
      text: 'Your prephrase does not need to be an exact match for the correct answer — it just needs to be in the right neighborhood. As long as your prephrase targets the same gap, you will recognize the correct answer when you see it.',
    },

    { type: 'h4', text: 'Prephrase Examples by Gap Type' },
    {
      type: 'table',
      headers: ['Gap Type', 'Prephrase Template'],
      rows: [
        [
          'Correlation → Causation',
          '"...no other factor explains the observed result" or "...removing the cause also removes the effect"',
        ],
        ['Sample → Population', '"...the sample is representative of the broader group"'],
        ['Analogy / Comparison', '"...the two things being compared are actually similar in the relevant way"'],
        [
          'Plan / Recommendation',
          '"...the plan does not have a hidden cost or obstacle that would outweigh its benefit"',
        ],
        [
          'Cost-Benefit / Tradeoff',
          '"...the downside is smaller than it seems" or "...the alternative is worse on the same metric"',
        ],
        [
          'Percentage ↔ Number',
          '"...the base amounts are comparable" or "...the base amount is large enough to support the claim"',
        ],
        [
          'Open-Ended Recommendation / Judgment',
          '"...the main objection is weaker than it looks" or "...the key benefit is more secure than the author has shown"',
        ],
        ['Concept Shift', '"...concept X in the evidence is connected to concept Y in the conclusion"'],
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'When This Step Gets Tricky',
      text: 'Sometimes the gap is not obvious, or the argument has multiple vulnerabilities. In these cases, form a broad prephrase that captures the general direction of support needed: *"Something that shows the cause-effect link is real."* A broad prephrase is better than no prephrase at all.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 4: Evaluate and Eliminate' },
    {
      type: 'paragraph',
      text: 'Scan the five choices, looking for one that matches your prephrase. If your prephrase was strong, the correct answer should jump out. If not, use elimination to remove trap answers.',
    },

    { type: 'h3', text: 'Common Wrong Answer Patterns' },
    {
      type: 'paragraph',
      text: 'Wrong answers on Strengthen questions fail for predictable reasons. Recognizing these patterns lets you eliminate quickly and confidently.',
    },

    {
      type: 'table',
      headers: ['Trap Type', 'What It Does', 'How to Spot It'],
      rows: [
        [
          '**Reversal (Weakener)**',
          'Actually damages the argument instead of helping it. Provides evidence that the conclusion is less likely.',
          'Ask: "Does this make the conclusion more or less likely?" If less, eliminate immediately.',
        ],
        [
          '**Irrelevant Scope**',
          'Discusses a topic related to the stimulus but misses the specific conclusion. May address a different population, time frame, or issue.',
          'Check: Does this choice connect to the *specific* gap between *these* premises and *this* conclusion?',
        ],
        [
          '**Too Weak / Vague**',
          'Presents a scenario that is theoretically helpful but practically insignificant. Uses hedging language like "some," "sometimes," or "in certain cases."',
          'Compare it to other candidates. If another choice provides stronger, more direct support, the weaker choice is likely wrong.',
        ],
        [
          '**No Impact**',
          'States a topical fact that is logically neutral — it neither helps nor hurts the argument.',
          "Test the choice: if you remove it, does the argument's strength change at all? If not, it has no impact.",
        ],
        [
          '**Premise Repeater**',
          'Restates or paraphrases information already in the stimulus without adding anything new.',
          "A strengthener must introduce *new* information. If the choice merely echoes the evidence, it cannot increase the conclusion's probability.",
        ],
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'The Direction Check',
      text: 'Before committing to any answer on a Strengthen question, perform the **Direction Check**: mentally insert the answer into the argument and ask, *"Is the conclusion now MORE likely or LESS likely to be true?"* This 5-second check catches reversals — the most common trap on Strengthen questions.',
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: 'The 4-Step Method gives you a repeatable process: **Break Down → Find the Gap → Prephrase → Evaluate.**\n\nPrephrasing is the single most important habit. If you can describe the type of information that would help the argument before reading the answers, your accuracy will increase dramatically.\n\nAlways perform the **Direction Check** before committing. The most common trap on Strengthen questions is a choice that actually weakens the argument.\n\nOn non-causal questions, use the **support lens**: ask whether the answer reduces the main objection, increases the core benefit, or makes the alternative worse on the same issue.\n\nWrong answers fall into five predictable categories: reversals, irrelevant scope, too weak, no impact, and premise repeaters. Memorize these patterns to eliminate efficiently.',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "The 4-Step Method for Strengthen Questions"
        },
        {
          "type": "paragraph",
          "text": "This lesson provides a complete, repeatable method for solving any Strengthen question. Each step includes concrete guidance, tips for when the step gets tricky, and a callout with a key insight. At the end, you will work through a full example applying all four steps to a single question."
        },
        {
          "type": "callout",
          "title": "Timing",
          "variant": "tip",
          "text": "You should spend roughly **1 minute and 30 seconds** per Strengthen question. Steps 1 and 2 (reading and gap-finding) should take about 50 seconds combined. Steps 3 and 4 (prephrasing and evaluating) should take about 40 seconds. The 4-step method may feel slow at first, but with practice it becomes automatic. Timed drilling is the fastest way to internalize the process."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Overview"
        },
        {
          "type": "process",
          "title": "The 4-Step Method",
          "steps": [
            "**Step 1 — Break Down the Argument:** Read the stimulus, isolate the conclusion and premises, and understand the author's reasoning.",
            "**Step 2 — Identify the Gap:** Find the logical leap between the evidence and the conclusion. Ask: \"Why isn't this proof 100% solid?\"",
            "**Step 3 — Prephrase the Strengthener:** Predict the type of information that would fill the gap before looking at the answer choices.",
            "**Step 4 — Evaluate and Eliminate:** Match your prephrase to the answer choices, using elimination to discard traps."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 1: Break Down the Argument"
        },
        {
          "type": "paragraph",
          "text": "Your first move is to figure out how the argument is built. Read the stimulus to isolate two parts:"
        },
        {
          "type": "list",
          "items": [
            "**Find the Main Conclusion:** What is the author trying to prove? Usually, this is a hypothesis about a cause, a prediction, a recommendation, or a specific judgment.",
            "**Find the Evidence:** What facts or observations does the author provide to back up that main point?"
          ]
        },
        {
          "type": "paragraph",
          "text": "Knowing exactly what is being argued and why is the foundation for everything else. Without a clear grasp of the conclusion and premises, you cannot find the gap, and without the gap you cannot prephrase."
        },
        {
          "type": "callout",
          "title": "When This Step Gets Tricky",
          "variant": "default",
          "text": "Some stimuli bury the conclusion in the middle of the paragraph or present it before the evidence. Do not assume the conclusion is always the last sentence. Use conclusion indicators (*therefore, thus, so, hence, consequently*) and the Why Test (*\"Why does the author believe this?\"*) to locate it regardless of its position."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 2: Identify the Logical Gap"
        },
        {
          "type": "paragraph",
          "text": "Every argument in a Strengthen question is, by design, incomplete. The evidence never fully proves the conclusion. Your job is to find that gap. Ask yourself: *\"Why isn't this proof 100% solid?\"*"
        },
        {
          "type": "paragraph",
          "text": "Look for these common gap patterns:"
        },
        { "type": "diff-note", "text": "{{+add+}} The Mastery Course version adds a 'Cost-Benefit / Tradeoff' row to this gap patterns table that the website version omits. This is a high-impact addition -- recommendation and tradeoff arguments are common on the LSAT and students need to see this pattern named early. The Mastery Course also adds a dedicated 'Causal Strengthening Framework' sub-section and a 'Non-Causal Support Lens' sub-section after this table.", "variant": "comment" },
        {
          "type": "table",
          "headers": [
            "Gap Pattern",
            "What the Author Does",
            "What's Missing"
          ],
          "rows": [
            [
              "**Correlation → Causation**",
              "Sees A and B occurring together and concludes A caused B.",
              "Could B have caused A? Could a third factor C have caused both? Is it coincidence?"
            ],
            [
              "**Sample → Population**",
              "Makes a broad claim based on a small or unusual group.",
              "Is the sample representative? Does it have a selection bias?"
            ],
            [
              "**Analogy / Comparison**",
              "Concludes something about X because it's true of the \"similar\" Y.",
              "Are X and Y actually similar in the relevant respects? Is there a key difference?"
            ],
            [
              "**Plan / Recommendation**",
              "Claims a plan will work without addressing obstacles.",
              "Are there hidden costs, side effects, or implementation barriers?"
            ],
            [
              "**Percentage ↔ Number**",
              "Treats percentages and absolute numbers as interchangeable.",
              "Is the base amount known? Could the rate change while the total stays the same?"
            ],
            [
              "**Concept Shift**",
              "Uses one concept in the premises and a different concept in the conclusion.",
              "What connects concept X in the evidence to concept Y in the conclusion?"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "Tip: Name the Gap Out Loud",
          "variant": "tip",
          "text": "Before moving to Step 3, try to articulate the gap in one sentence: *\"The author assumes that [X], but has not shown that [X] is true.\"* If you can finish this sentence, you have found the gap. If you cannot, re-read the stimulus."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 3: Prephrase the Strengthener"
        },
        {
          "type": "paragraph",
          "text": "Once you understand the gap, predict the answer before looking at the choices. This is the single most important habit you can build for Strengthen questions. It protects you from trap answers and keeps you focused on the argument's core vulnerability."
        },
        {
          "type": "h4",
          "text": "The Prephrasing Technique"
        },
        {
          "type": "paragraph",
          "text": "Complete this sentence in your head: *\"The argument would be stronger if I found out that...\"*"
        },
        {
          "type": "paragraph",
          "text": "Your prephrase does not need to be an exact match for the correct answer — it just needs to be in the right neighborhood. As long as your prephrase targets the same gap, you will recognize the correct answer when you see it."
        },
        {
          "type": "h4",
          "text": "Prephrase Examples by Gap Type"
        },
        { "type": "diff-note", "text": "{{+add+}} The Mastery Course version adds two extra prephrase rows: 'Cost-Benefit / Tradeoff' and 'Open-Ended Recommendation / Judgment'. These cover non-causal question types that the website version leaves unaddressed. Students facing a recommendation stimulus without a causal gap need this guidance.", "variant": "comment" },
        {
          "type": "table",
          "headers": [
            "Gap Type",
            "Prephrase Template"
          ],
          "rows": [
            [
              "Correlation → Causation",
              "\"...no other factor explains the observed result\" or \"...removing the cause also removes the effect\""
            ],
            [
              "Sample → Population",
              "\"...the sample is representative of the broader group\""
            ],
            [
              "Analogy / Comparison",
              "\"...the two things being compared are actually similar in the relevant way\""
            ],
            [
              "Plan / Recommendation",
              "\"...the plan does not have a hidden cost or obstacle that would outweigh its benefit\""
            ],
            [
              "Percentage ↔ Number",
              "\"...the base amounts are comparable\" or \"...the base amount is large enough to support the claim\""
            ],
            [
              "Concept Shift",
              "\"...concept X in the evidence is connected to concept Y in the conclusion\""
            ]
          ]
        },
        {
          "type": "callout",
          "title": "When This Step Gets Tricky",
          "variant": "default",
          "text": "Sometimes the gap is not obvious, or the argument has multiple vulnerabilities. In these cases, form a broad prephrase that captures the general direction of support needed: *\"Something that shows the cause-effect link is real.\"* A broad prephrase is better than no prephrase at all."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 4: Evaluate and Eliminate"
        },
        {
          "type": "paragraph",
          "text": "Scan the five choices, looking for one that matches your prephrase. If your prephrase was strong, the correct answer should jump out. If not, use elimination to remove trap answers."
        },
        {
          "type": "h3",
          "text": "Common Wrong Answer Patterns"
        },
        {
          "type": "paragraph",
          "text": "Wrong answers on Strengthen questions fail for predictable reasons. Recognizing these patterns lets you eliminate quickly and confidently."
        },
        {
          "type": "table",
          "headers": [
            "Trap Type",
            "What It Does",
            "How to Spot It"
          ],
          "rows": [
            [
              "**Reversal (Weakener)**",
              "Actually damages the argument instead of helping it. Provides evidence that the conclusion is less likely.",
              "Ask: \"Does this make the conclusion more or less likely?\" If less, eliminate immediately."
            ],
            [
              "**Irrelevant Scope**",
              "Discusses a topic related to the stimulus but misses the specific conclusion. May address a different population, time frame, or issue.",
              "Check: Does this choice connect to the *specific* gap between *these* premises and *this* conclusion?"
            ],
            [
              "**Too Weak / Vague**",
              "Presents a scenario that is theoretically helpful but practically insignificant. Uses hedging language like \"some,\" \"sometimes,\" or \"in certain cases.\"",
              "Compare it to other candidates. If another choice provides stronger, more direct support, the weaker choice is likely wrong."
            ],
            [
              "**No Impact**",
              "States a topical fact that is logically neutral — it neither helps nor hurts the argument.",
              "Test the choice: if you remove it, does the argument's strength change at all? If not, it has no impact."
            ],
            [
              "**Premise Repeater**",
              "Restates or paraphrases information already in the stimulus without adding anything new.",
              "A strengthener must introduce *new* information. If the choice merely echoes the evidence, it cannot increase the conclusion's probability."
            ]
          ]
        },
        {
          "type": "callout",
          "title": "The Direction Check",
          "variant": "tip",
          "text": "Before committing to any answer on a Strengthen question, perform the **Direction Check**: mentally insert the answer into the argument and ask, *\"Is the conclusion now MORE likely or LESS likely to be true?\"* This 5-second check catches reversals — the most common trap on Strengthen questions."
        },
        {
          "type": "hr"
        },
        { "type": "diff-note", "text": "{{!note!}} Both versions use the same illustrative migraine-medication worked example. Neither version includes a real PT question-card for interactive practice. Adding a question-card here would be the single highest-impact improvement to this lesson -- students should apply the 4-step method to a real question before moving to the drills.", "variant": "comment" },
        {
          "type": "h2",
          "text": "Full Worked Example"
        },
        {
          "type": "paragraph",
          "text": "Let's apply all four steps to a complete Strengthen question from start to finish."
        },
        {
          "type": "paragraph",
          "text": "Consider this illustrative argument:"
        },
        {
          "type": "blockquote",
          "text": "\"A pharmaceutical company tested a new migraine medication on 500 volunteers who suffer from chronic migraines. After three months of treatment, 70% of the volunteers reported a significant reduction in migraine frequency. The company concluded that the medication is effective at reducing migraines.\""
        },
        {
          "type": "paragraph",
          "text": "This is a good Strengthen example because the gap is clear: without a comparison group, the reported improvement could still be placebo effect, normal fluctuation, or regression to the mean."
        },
        {
          "type": "h3",
          "text": "Applying the 4-Step Method"
        },
        {
          "type": "process",
          "title": "Step-by-Step Walkthrough",
          "steps": [
            "**Step 1 — Break Down the Argument:**\n• **Conclusion:** The medication is effective at reducing migraines.\n• **Evidence:** 70% of 500 volunteers reported a significant reduction in migraine frequency after three months.\n• **Structure:** The company observes improvement in a test group and concludes the medication caused the improvement.",
            "**Step 2 — Identify the Gap:**\nThe argument makes a classic **correlation-to-causation** leap. The volunteers improved, but the company has not shown that the *medication* was responsible. The improvement could be due to the placebo effect, natural fluctuation in migraine frequency, regression to the mean (volunteers may have enrolled during a particularly bad period), or other factors. Without a control group or comparison, the 70% figure is meaningless as evidence of the medication's efficacy.",
            "**Step 3 — Prephrase:**\n*\"The argument would be stronger if I found out that people who did NOT take the medication did not experience the same improvement.\"* This would rule out the possibility that the improvement was caused by something other than the medication.",
            "**Step 4 — Evaluate:**\nScan the choices for one that provides a control or comparison group that shows the medication — not some other factor — drove the improvement."
          ]
        },
        {
          "type": "h3",
          "text": "Why the Comparison Matters"
        },
        {
          "type": "callout",
          "title": "Final Check",
          "variant": "default",
          "text": "The strongest strengthener supplies the missing control group. If people who did not receive the medication improved far less during the same period, the medication becomes the best explanation for the difference. Most other facts either weaken the argument, shift to a different condition, or say nothing about whether the drug itself caused the reported improvement."
        },
        {
          "type": "hr"
        },
        { "type": "diff-note", "text": "{{~change~}} The Mastery Course version adds a line to the Key Takeaways about the non-causal support lens: 'On non-causal questions, use the support lens: ask whether the answer reduces the main objection, increases the core benefit, or makes the alternative worse on the same issue.' This is a meaningful addition that the website version should adopt.", "variant": "comment" },
        {
          "type": "callout",
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "The 4-Step Method gives you a repeatable process: **Break Down → Find the Gap → Prephrase → Evaluate.**\n\nPrephrasing is the single most important habit. If you can describe the type of information that would help the argument before reading the answers, your accuracy will increase dramatically.\n\nAlways perform the **Direction Check** before committing. The most common trap on Strengthen questions is a choice that actually weakens the argument.\n\nWrong answers fall into five predictable categories: reversals, irrelevant scope, too weak, no impact, and premise repeaters. Memorize these patterns to eliminate efficiently."
        }
      ],
    },
    playbook: {
      label: 'Playbook',
      content: [
        {
          type: 'callout',
          variant: 'tip',
          text: '**Target:** 1:30 per Strengthen question. Steps 1--2 (read + gap) ~50 s; Steps 3--4 (prephrase + evaluate) ~40 s.',
        },
        { type: 'h3', text: 'The Method' },
        {
          type: 'process',
          steps: [
            '**Break down the argument.** Separate conclusion from premises. *Why:* You cannot find the gap without knowing what the author is trying to prove and what evidence supports it.',
            '**Identify the logical gap.** What assumption connects premises to conclusion? *Why:* The correct strengthener always targets this specific leap, not a different weakness.',
            '**Prephrase the strengthener.** What new fact would make the gap smaller? *Why:* Prephrasing protects you from attractive-sounding traps and keeps you focused on the core vulnerability.',
            '**Evaluate and eliminate.** Match your prephrase; reject answers that strengthen a different gap. *Why:* The most common wrong answers are reversals, irrelevant scope, and premise repeaters.',
          ],
        },
        { type: 'h3', text: 'Decision Table' },
        {
          type: 'table',
          headers: ['If You See', 'Then Do', 'Watch Out For'],
          rows: [
            [
              'Causal claim (A caused B)',
              'Rule out alternative causes or add a control/comparison group',
              'Answer that introduces a new alternative cause (weakener)',
            ],
            [
              'Statistical data / survey',
              'Validate the sample or show the data is representative',
              'Answer about a different population or time frame',
            ],
            [
              'Analogy (X is like Y)',
              'Show X and Y are genuinely similar in the relevant respect',
              'Answer that highlights a similarity in an irrelevant respect',
            ],
            [
              'Conditional / concept gap',
              'Bridge the two concepts with a connecting fact',
              'Answer that restates a premise without bridging',
            ],
            [
              'Scope gap (group A to group B)',
              'Show the groups are comparable or the example is representative',
              'Answer that discusses a third, unrelated group',
            ],
            [
              'EXCEPT format',
              'Tag each choice S or X; expect four S\'s and one X',
              'Picking the strongest strengthener instead of the non-strengthener',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          text: '**Find \u2192 Gap \u2192 Prephrase Strengthener \u2192 Evaluate & Eliminate**',
        },
      ],
    },
  },
};
