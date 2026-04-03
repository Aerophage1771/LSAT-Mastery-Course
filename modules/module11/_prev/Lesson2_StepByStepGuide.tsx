import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: '11-2',
  title: 'Step-by-Step: Necessary Assumption',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Step-by-Step: Necessary Assumption' },
    {
      type: 'paragraph',
      text: 'This lesson gives you a repeatable method for solving any Necessary Assumption question. The goal is the same every time: understand the author\'s argument, set the right force standard, diagnose the kind of gap you are dealing with, pre-phrase the minimum required belief, and then verify your finalist with the **Negation Test**.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing',
      text: 'Budget roughly **1 minute and 30 seconds** per Necessary Assumption question. Steps 1-4 should usually get you down to one or two live contenders in about 55 seconds. Step 5, the Negation Test, should then take about 30-35 seconds. Do not spend 90 seconds blindly negating all five choices. The point is to negate finalists, not to use negation as your opening read.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Overview' },
    {
      type: 'process',
      title: 'The 5-Step Method',
      steps: [
        "**Step 1 — Break Down the Argument:** Read the stimulus, isolate the conclusion and premises, and summarize the author's reasoning in simple terms.",
        '**Step 2 — Set the Force Standard:** Decide whether the gap calls for something merely helpful, strictly required, or fully sufficient.',
        '**Step 3 — Diagnose the Reasoning Family:** Classify the gap so you know whether you need a link, a blocker, or a hidden rule.',
        '**Step 4 — Pre-phrase the Minimum Requirement:** Predict the smallest belief the argument must have before looking at the answer choices.',
        '**Step 5 — Verify with the Negation Test:** Negate your finalist. If the argument collapses, you have the necessary assumption.',
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 1: Break Down the Argument' },
    {
      type: 'paragraph',
      text: "Before evaluating answer choices, map the argument's structure. You cannot find a missing piece until you understand how the existing pieces fit together.",
    },
    {
      type: 'list',
      items: [
        "**Find the Main Conclusion:** Identify the author's primary claim, judgment, or prediction. This is the statement the author is trying to prove. Look for conclusion indicators: *therefore, thus, so, hence, consequently.*",
        '**Find the Premises:** Identify the evidence or reasons offered in support. Look for premise indicators: *because, since, for, after all, given that.*',
        '**Summarize the Core Logic:** State the argument in simple form: *"The author concludes [Conclusion], because of [Premises]."*',
      ],
    },
    {
      type: 'paragraph',
      text: 'Pay close attention to the **specific terms** used in the premises versus the conclusion. Necessary Assumption questions often hinge on a mismatch between those terms. That mismatch is usually where the unstated requirement lives.',
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'When This Step Gets Tricky',
      text: 'Some Necessary Assumption stimuli contain multiple layers of reasoning. When that happens, focus on the **single most important leap** between the key evidence and the final conclusion. The correct answer almost always addresses that main structural gap, not a side issue.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 2: Set the Force Standard' },
    {
      type: 'paragraph',
      text: 'Before you hunt for an answer, decide what level of support the argument actually needs. This is the doctrinal shift that keeps Module 12 clean. Many wrong answers mention the right topic but operate at the wrong force level.',
    },
    {
      type: 'table',
      headers: ['If the answer would...', 'Then it is...', 'What Module 12 wants instead'],
      rows: [
        [
          'Make the conclusion more plausible',
          '**A Strengthener**',
          'Ask what would be fatal if false, not merely useful if true',
        ],
        [
          'State something the argument cannot survive without',
          '**A Necessary Assumption**',
          'This is the target',
        ],
        [
          'Guarantee the conclusion all by itself',
          '**A Sufficient Assumption**',
          'Usually too strong for this module unless the stimulus truly needs that exact bridge',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: 'Use **PT-103-S-1-Q-4 (The Morale-Production Link)** as your anchor. A strengthener might say flextime often improves output. A sufficient answer might say any morale increase guarantees higher production. But the Necessary Assumption is narrower: an increase in morale **could** lead to increased production. That is the minimum support the argument needs.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'The Force Question',
      text: 'Ask this before you read the choices: "**If this statement were false, would the argument still have a live path?**" If yes, you are looking at a mere strengthener. If no, you may have found the necessary assumption.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 3: Diagnose the Reasoning Family' },
    {
      type: 'paragraph',
      text: 'Once the force standard is set, classify the gap into a **reasoning family**. This tells you what kind of requirement to pre-phrase. In Module 12, most gaps fall into one of three operational buckets.',
    },
    {
      type: 'table',
      headers: ['Family', 'Diagnostic Question', 'What the Required Answer Must Do', 'Report-Backed Anchor'],
      rows: [
        [
          '**Link / Bridge**',
          'What connection between the evidence and the conclusion must exist?',
          'Supply the minimum bridge from what the premises establish to what the conclusion claims',
          '`PT-103-S-1-Q-4` Morale-Production Link',
        ],
        [
          '**Scope / Exhaustiveness**',
          'What outsider, middle ground, or third party would wreck the argument if allowed in?',
          'Block that outsider or establish that the stated options are exhaustive',
          '`PT-127-S-1-Q-19` Scope Limitation; `PT-126-S-3-Q-8` False Dichotomy',
        ],
        [
          '**Source / Hidden Rule**',
          'Is the author assuming a rule about credibility, rights, success, or some other standard?',
          'State the hidden rule the conclusion depends on',
          '`PT-121-S-4-Q-10` Vested Interest',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: 'These are not meant to replace the drill names. They are a faster first-pass diagnostic. The drill labels tell you the exact pattern. The family tells you what kind of gap you are trying to close.',
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'Why This Step Matters',
      text: 'If the gap is **Scope / Exhaustiveness**, do not waste time on answers that merely add support. If the gap is **Source / Hidden Rule**, do not pick a new fact when the author clearly needs a governing standard. Family diagnosis lets you eliminate whole categories of wrong answers before you ever negate anything.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 4: Pre-phrase the Minimum Requirement' },
    {
      type: 'paragraph',
      text: 'Now articulate the assumption in your own words. Complete this sentence:',
    },
    { type: 'paragraph', text: '***"For this argument to work, the author must believe that..."***' },
    {
      type: 'paragraph',
      text: 'Your pre-phrase does not need to match the answer choice word for word. It needs to capture the **minimum requirement**. The best Module 12 pre-phrases are modest, directional, and gap-specific.',
    },
    {
      type: 'table',
      headers: ['Reasoning Family', 'Pre-phrase Template'],
      rows: [
        ['Link / Bridge', '"The evidence must connect to the conclusion in at least this limited way."'],
        ['Scope / Exhaustiveness', '"There must not be another option, source, or middle case that breaks the argument."'],
        ['Source / Hidden Rule', '"The author must accept this unstated rule about credibility, standards, or definitions."'],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'NA Pre-phrases Are Softer Than SA Pre-phrases',
      text: 'On Sufficient Assumption questions, your pre-phrase should often be a precise logical statement such as `"B -> C"`. On Necessary Assumption questions, your pre-phrase should be softer and smaller. You are trying to capture the belief the argument **needs**, not the one that would completely finish the proof.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 5: Verify with the Negation Test' },
    {
      type: 'paragraph',
      text: 'The **Negation Test** is the final proof for this question type. It works on a simple principle: if a statement is truly necessary, the argument cannot survive without it.',
    },
    {
      type: 'process',
      title: 'Applying the Negation Test',
      steps: [
        '**Select your finalist** — the answer choice that best matches your force standard, family diagnosis, and pre-phrase.',
        '**Negate the answer choice.** Turn the statement into its logical opposite. Be careful to negate the *logic*, not just the verb.',
        '**Insert the negation.** Treat the negated statement as a new fact. Ask: *"If this were true, would the argument still have a live path to the conclusion?"*',
        '**Evaluate the impact:**\n• **Argument Collapses = CORRECT.** If the negation destroys the bridge, reopens the outside option, or removes the hidden rule, the original answer was necessary.\n• **Argument Survives = INCORRECT.** If the conclusion still has a coherent path, even if weaker, the answer was not necessary.',
      ],
    },

    { type: 'h4', text: 'Negation Quick Reference' },
    {
      type: 'breakdown',
      labels: { title: 'Original Statement', text: 'Logical Negation' },
      items: [
        { title: '"All X are Y"', text: '"Not all X are Y" (Some X are not Y)' },
        { title: '"Some X are Y"', text: '"None of X are Y"' },
        { title: '"X causes Y"', text: '"X does not cause Y"' },
        { title: '"X is the only way"', text: '"X is not the only way"' },
        { title: '"X can lead to Y"', text: '"X cannot lead to Y"' },
      ],
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'Why Common Traps Fail the Test',
      text: '**Helpful Strengthener:** Negating a merely helpful fact may weaken the argument, but it will not destroy it.\n\n**Neutral Choice:** Negating an irrelevant statement changes nothing important.\n\n**Restatement:** A restated premise is not an assumption at all; the author already gave it to you.\n\n**Too-Strong / Sufficient Trap:** Some very strong answers would prove the conclusion, but the argument may not actually need that much. Let the collapse test decide.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Common Wrong Answer Patterns' },
    {
      type: 'paragraph',
      text: 'Wrong answers on Necessary Assumption questions fail in predictable ways. Recognizing these traps lets you eliminate quickly and with confidence.',
    },
    {
      type: 'table',
      headers: ['Trap Type', 'What It Does', 'How to Spot It'],
      rows: [
        [
          '**Helpful Strengthener**',
          'Adds support but is not required for the argument to stay alive.',
          'Negate it. If the argument merely weakens, it is not the answer.',
        ],
        [
          '**Restatement**',
          'Repeats information already explicit in the premises. Assumptions must be unstated.',
          'Ask: "Did the author already say this?" If yes, eliminate it.',
        ],
        [
          '**Out of Scope**',
          'Introduces a new concept or comparison that the argument never relied on.',
          'Compare the choice to the exact gap you identified. New topic usually means wrong answer.',
        ],
        [
          '**Too Strong / Sufficient**',
          'Goes beyond what the argument requires. It may prove the conclusion, but that does not make it necessary.',
          'Check the force standard. If the answer feels like a full proof, verify very carefully.',
        ],
        [
          '**Wrong Direction**',
          'Uses the right concepts but links them in the wrong order.',
          'Make sure the answer supports the argument in the direction the conclusion needs.',
        ],
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Full Worked Example' },
    {
      type: 'paragraph',
      text: "Let's apply all five steps to a complete Necessary Assumption question from start to finish.",
    },
    { type: 'paragraph', text: 'Consider this illustrative argument:' },
    {
      type: 'blockquote',
      text: '"Editorial: Our city should convert the abandoned rail corridor into a bicycle commuting path. A recent survey found that 60% of residents who live within two miles of the corridor would use it for daily commuting if it were available. Converting the corridor would therefore significantly reduce automobile traffic congestion in the city."',
    },
    {
      type: 'paragraph',
      text: 'This example highlights the classic Link / Bridge family. Interest in biking matters to the conclusion only if at least some of those riders are currently contributing to car traffic.',
    },

    { type: 'h3', text: 'Applying the 5-Step Method' },
    {
      type: 'process',
      title: 'Step-by-Step Walkthrough',
      steps: [
        '**Step 1 — Break Down the Argument:**\n• **Conclusion:** Converting the corridor would significantly reduce automobile traffic congestion.\n• **Premise:** 60% of nearby residents would use the bicycle path for daily commuting.\n• **Core Logic:** More biking -> less car traffic.',
        '**Step 2 — Set the Force Standard:**\nThe argument does not need a sweeping rule that all new bike users are current drivers. It needs the smaller required claim that enough of these would-be cyclists are currently adding cars to the road for the conclusion to have a chance.',
        '**Step 3 — Diagnose the Reasoning Family:**\nThis is a **Link / Bridge** gap. The evidence is about people biking. The conclusion is about fewer cars. The argument needs a bridge between those two ideas.',
        '**Step 4 — Pre-phrase the Minimum Requirement:**\n"For this argument to work, the author must believe that at least some of the people who would use the bike path currently commute by car."',
        '**Step 5 — Verify with the Negation Test:**\nNegate that bridge: none of the potential cyclists currently commute by automobile. If that were true, the path removes zero cars from the road and the conclusion about reducing traffic congestion collapses.',
      ],
    },

    { type: 'h3', text: 'Why the Argument Depends on This Link' },
    {
      type: 'callout',
      variant: 'default',
      title: 'Final Check',
      text: 'The conclusion needs one indispensable fact: some would-be cyclists must currently be car commuters. Stronger claims about how many commuters live nearby, how much emissions would fall, or whether biking is healthier may be useful in the real world, but the argument does not collapse without them. Necessary Assumption is about the **smallest bridge whose denial is fatal**.',
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: 'The 5-Step Method gives you a reliable process: **Break Down -> Set Force Standard -> Diagnose Family -> Pre-phrase -> Negate and Verify.**\n\nThe Negation Test is your final proof, not your opening move. When in doubt between two answer choices, negate both. The one whose negation *destroys* the argument is the necessary assumption. The one whose negation merely *weakens* the argument is a strengthener, not a necessary assumption.\n\nThe current Module 12 report-backed anchors are worth memorizing: `PT-103-S-1-Q-4` for Link / Bridge, `PT-127-S-1-Q-19` and `PT-126-S-3-Q-8` for Scope / Exhaustiveness, and `PT-121-S-4-Q-10` for Source / Hidden Rule.\n\nNecessary Assumption answers are often **modest**. Do not look for the answer that "best supports" the conclusion. Look for the answer whose denial is fatal.',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "The 4-Step Method for Necessary Assumption Questions"
        },
        {
          "type": "paragraph",
          "text": "This lesson provides a complete, repeatable method for solving any Necessary Assumption question. The goal is the same every time: understand the author's argument, find the logical gap, pre-phrase a \"must-have\" belief, and verify your answer with the **Negation Test**. Each step below includes concrete guidance, tips for tricky situations, and key insights."
        },
        {
          "type": "callout",
          "title": "Timing",
          "variant": "tip",
          "text": "Budget roughly **1 minute and 30 seconds** per Necessary Assumption question. Steps 1–3 (reading, gap-finding, and pre-phrasing) should take about 50 seconds combined. Step 4 (evaluating choices with the Negation Test) should take about 40 seconds. The Negation Test may feel slow at first, but with practice you will only need to apply it to 1–2 choices. Resist the urge to skip the test — it is the difference between a good guess and a guaranteed correct answer."
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
            "**Step 1 — Break Down the Argument:** Read the stimulus, isolate the conclusion and premises, and summarize the author's reasoning in simple terms.",
            "**Step 2 — Identify the Logical Gap:** Find the disconnect between the evidence and the conclusion. Ask: \"What did the author take for granted?\"",
            "**Step 3 — Pre-phrase the Necessary Connection:** Predict the type of assumption the argument depends on before looking at the answer choices.",
            "**Step 4 — Evaluate with the Negation Test:** Test your top candidate(s) by negating them. If the negation destroys the argument, you have found the necessary assumption."
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
          "text": "Before evaluating answer choices, you must map the argument's structure. You cannot find a missing piece until you understand how the existing pieces fit together."
        },
        {
          "type": "list",
          "items": [
            "**Find the Main Conclusion:** Identify the author's primary claim, judgment, or prediction. This is the statement the author is trying to prove. Look for conclusion indicators: *therefore, thus, so, hence, consequently.*",
            "**Find the Premises:** Identify the evidence or reasons provided to support that conclusion. Look for premise indicators: *because, since, for, after all, given that.*",
            "**Summarize the Core Argument:** State the logic in simple terms: *\"The author concludes [Conclusion], because of [Premises].\"*"
          ]
        },
        {
          "type": "paragraph",
          "text": "Pay close attention to the **specific terms** used in the premises versus the conclusion. NA questions frequently hinge on a mismatch between these terms — the conclusion uses a word or concept that the premises do not fully establish. This mismatch is the key to finding the gap."
        },
        {
          "type": "callout",
          "title": "When This Step Gets Tricky",
          "variant": "default",
          "text": "Some NA stimuli contain multiple layers of reasoning. When the argument is complex, focus on isolating the **single most important logical leap** — the jump from the key piece of evidence to the final conclusion. The necessary assumption will almost always address this primary leap, not a secondary detail."
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
          "text": "With the core argument identified, pinpoint the logical gap. Ask yourself: *\"How did the author get from the evidence to the conclusion? What idea did they take for granted?\"*"
        },
        {
          "type": "paragraph",
          "text": "NA assumptions generally fall into two functional categories:"
        },
        {
          "type": "h3",
          "text": "A. Bridge Assumptions (Necessary Components)"
        },
        {
          "type": "paragraph",
          "text": "These connect two different ideas in the argument. They are \"missing links\" that build a bridge between the evidence and the conclusion."
        },
        {
          "type": "list",
          "items": [
            "**Definitional gap:** \"The author is treating these two distinct ideas as the same thing (or as incompatible).\"",
            "**Generalization gap:** \"The author believes this specific instance applies to the whole group.\"",
            "**Key ingredient gap:** \"The author assumes the intermediate benefit actually leads to the ultimate goal.\""
          ]
        },
        {
          "type": "h3",
          "text": "B. Defender Assumptions (Defenders Against Negatives)"
        },
        {
          "type": "paragraph",
          "text": "These eliminate potential threats that could destroy the argument. They \"protect\" the conclusion by assuming that a specific problem does not exist."
        },
        {
          "type": "list",
          "items": [
            "**Causal gap:** \"The author assumes this specific alternative factor wasn't the real cause.\"",
            "**Feasibility gap:** \"The author assumes that there aren't any obstacles that would make this plan fail.\"",
            "**Source gap:** \"The author assumes the source's bias doesn't automatically invalidate their arguments.\""
          ]
        },
        {
          "type": "h4",
          "text": "Common Logical Leaps"
        },
        {
          "type": "table",
          "headers": [
            "Leap Type",
            "What the Author Does",
            "What the NA Must Do"
          ],
          "rows": [
            [
              "**Causal Leap**",
              "Assumes a correlation proves a specific cause, ignoring alternatives",
              "Rule out a specific alternative cause or confirm the stated cause is the only one"
            ],
            [
              "**Generalization Leap**",
              "Assumes a specific example represents a broader category",
              "Confirm the example is representative or that the broader category shares the relevant trait"
            ],
            [
              "**Definitional Leap**",
              "Assumes two different terms are equivalent or incompatible",
              "Provide the definitional bridge connecting or separating the two terms"
            ],
            [
              "**Feasibility Leap**",
              "Assumes a proposed plan will work without obstacles",
              "Confirm a specific obstacle does not exist"
            ],
            [
              "**Analogy Leap**",
              "Assumes two situations are similar in a relevant way",
              "Confirm the situations share the specific feature that matters for the conclusion"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 3: Pre-phrase the Necessary Connection"
        },
        {
          "type": "paragraph",
          "text": "Before looking at the answer choices, articulate the assumption in your own words. Complete this sentence:"
        },
        {
          "type": "paragraph",
          "text": "***\"For this argument to work, the author must believe that...\"***"
        },
        {
          "type": "paragraph",
          "text": "Your pre-phrase does not need to be the exact wording of the correct answer — it just needs to capture the **type** of belief the argument depends on. A good pre-phrase tells you what kind of answer to look for, so you can scan the choices efficiently instead of evaluating each one from scratch."
        },
        {
          "type": "h4",
          "text": "Pre-phrase Examples"
        },
        {
          "type": "table",
          "headers": [
            "Gap Type",
            "Pre-phrase Template"
          ],
          "rows": [
            [
              "Key Ingredient",
              "\"The intermediate benefit must actually be useful for the ultimate goal.\""
            ],
            [
              "Definitional Gap",
              "\"These two concepts must be incompatible (or connected) in the way the author assumes.\""
            ],
            [
              "Only Way",
              "\"The stated cause must be the only effective way to produce the effect.\""
            ],
            [
              "Closed Universe",
              "\"The defined group must be the only eligible candidates.\""
            ],
            [
              "Source Fallacy",
              "\"A biased source's arguments must be inherently invalid.\""
            ]
          ]
        },
        {
          "type": "callout",
          "title": "NA Pre-phrases Are Softer Than SA Pre-phrases",
          "variant": "tip",
          "text": "On Sufficient Assumption questions, your pre-phrase should be a precise logical statement (\"B → C\"). On Necessary Assumption questions, your pre-phrase should capture the **direction and type** of the assumption without demanding exact wording. NA answers are often more modest and less predictable than SA answers, so a rigid pre-phrase can cause you to overlook the correct choice."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 4: Evaluate with the Negation Test"
        },
        {
          "type": "paragraph",
          "text": "The **Negation Test** is the definitive proof for this question type. It works on a simple, airtight principle: **if a statement is truly necessary, the argument cannot survive without it.**"
        },
        {
          "type": "process",
          "title": "Applying the Negation Test",
          "steps": [
            "**Select your top candidate** — the answer choice that best matches your pre-phrase.",
            "**Negate the answer choice (flip it).** Turn the statement into its logical opposite. Be careful to negate the *logic*, not just the verb.",
            "**Insert the negation.** Treat the negated statement as a new fact. Ask: *\"If this new fact is true, does the conclusion still make sense?\"*",
            "**Evaluate the impact:**\n• **Argument Collapses = CORRECT.** If the negation destroys the conclusion or breaks the link between premises and conclusion, the original answer choice was **necessary**.\n• **Argument Survives = INCORRECT.** If the conclusion remains logically valid (even if slightly weakened), the answer choice was **not necessary**."
          ]
        },
        {
          "type": "h4",
          "text": "Negation Quick Reference"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Original Statement",
            "text": "Logical Negation"
          },
          "items": [
            {
              "title": "\"All X are Y\"",
              "text": "\"Not all X are Y\" (Some X are not Y)"
            },
            {
              "title": "\"Some X are Y\"",
              "text": "\"None of X are Y\""
            },
            {
              "title": "\"X causes Y\"",
              "text": "\"X does not cause Y\""
            },
            {
              "title": "\"X is the only way\"",
              "text": "\"X is not the only way\""
            },
            {
              "title": "\"X can lead to Y\"",
              "text": "\"X cannot lead to Y\""
            }
          ]
        },
        {
          "type": "callout",
          "title": "Why Common Traps Fail the Negation Test",
          "variant": "default",
          "text": "**The Helpful Strengthener:** Negating a \"helpful\" fact might weaken the argument, but it won't destroy it. Necessary assumptions are essential, not just helpful. If the argument limps along after the negation, the answer is wrong.\n\n**The Neutral Choice:** Negating an irrelevant statement has no impact on the conclusion. If the argument doesn't care whether the statement is true or false, it is not a necessary assumption.\n\n**The Restatement:** An answer that merely paraphrases an explicit premise cannot be an assumption — assumptions are *unstated*. Negating a restatement contradicts a stated premise, which makes it seem like the argument collapses, but this is a false signal. The argument already states this information, so it doesn't \"assume\" it.\n\n**The Sufficient Trap:** An answer that is *too strong* — one that would guarantee the conclusion rather than just support it — may or may not be necessary. Test it carefully. Sometimes a sufficient assumption is also necessary; sometimes it is too specific and goes beyond what the argument actually requires."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Common Wrong Answer Patterns"
        },
        {
          "type": "paragraph",
          "text": "Wrong answers on NA questions fail in predictable ways. Recognizing these traps lets you eliminate quickly and with confidence."
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
              "**Out of Scope**",
              "Introduces irrelevant concepts or comparisons that do not affect the core argument.",
              "Ask: \"Does this choice address the specific gap between the premises and conclusion?\" If the choice talks about something the argument never discussed, eliminate it."
            ],
            [
              "**Restatement**",
              "Merely rehashes information already explicitly stated in the premises. Assumptions must be unstated.",
              "Ask: \"Is this already said in the stimulus?\" If yes, the argument does not need to *assume* it — it already states it."
            ],
            [
              "**Weakener**",
              "Undermines the conclusion. An author never assumes a fact that actively harms their own case.",
              "Check the direction: does this choice hurt or help the argument? If it hurts, eliminate immediately."
            ],
            [
              "**Too Strong / Sufficient**",
              "Goes beyond what the argument requires. The answer would *prove* the conclusion rather than merely supporting it.",
              "Apply the Negation Test carefully. Sometimes a strong answer IS necessary; sometimes it is not. Let the test decide."
            ],
            [
              "**Wrong Direction**",
              "Addresses the right topic but connects the concepts in the wrong direction (e.g., the answer says B leads to A, but the argument needs A leads to B).",
              "Diagram the relationship if needed. Make sure the answer bridges the gap in the same direction the argument requires."
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Full Worked Example"
        },
        {
          "type": "paragraph",
          "text": "Let's apply all four steps to a complete Necessary Assumption question from start to finish."
        },
        {
          "type": "paragraph",
          "text": "Consider this illustrative argument:"
        },
        {
          "type": "blockquote",
          "text": "\"Editorial: Our city should convert the abandoned rail corridor into a bicycle commuting path. A recent survey found that 60% of residents who live within two miles of the corridor would use it for daily commuting if it were available. Converting the corridor would therefore significantly reduce automobile traffic congestion in the city.\""
        },
        {
          "type": "paragraph",
          "text": "This example highlights the classic Key Ingredient gap. Interest in biking only matters to the conclusion if at least some of those riders are currently contributing to car traffic."
        },
        {
          "type": "h3",
          "text": "Applying the 4-Step Method"
        },
        {
          "type": "process",
          "title": "Step-by-Step Walkthrough",
          "steps": [
            "**Step 1 — Break Down the Argument:**\n• **Conclusion:** Converting the corridor would significantly reduce automobile traffic congestion.\n• **Premise 1:** 60% of nearby residents would use the bicycle path for daily commuting.\n• **Core Logic:** People would bike → traffic congestion drops.",
            "**Step 2 — Identify the Logical Gap:**\nThe premises tell us people would *bike*. The conclusion says *automobile traffic* would drop. But do these bikers currently drive cars? If the 60% who say they would bike currently walk, take the bus, or work from home, then adding a bike path would not remove any cars from the road. The argument assumes that at least some of these potential cyclists are currently *automobile* commuters. This is a classic Key Ingredient gap: the intermediate effect (people biking) only reduces congestion if those people were previously contributing to the congestion.",
            "**Step 3 — Pre-phrase:**\n\"For this argument to work, the author must believe that at least some of the people who would use the bike path currently commute by car. Otherwise, no cars are removed from the road, and congestion doesn't change.\"",
            "**Step 4 — Evaluate with the Negation Test:**\nScan for the answer that matches our pre-phrase about current car commuters. Negate that bridge: if none of the potential cyclists currently commute by automobile, then the path removes zero cars from the road and the conclusion about reducing congestion falls apart completely."
          ]
        },
        {
          "type": "h3",
          "text": "Why the Argument Depends on This Link"
        },
        {
          "type": "callout",
          "title": "Final Check",
          "variant": "default",
          "text": "The conclusion needs only one indispensable fact: some would-be cyclists must currently be car commuters. Stronger claims about how many commuters live nearby, how long the corridor is, or whether biking is environmentally better may be useful in the real world, but the argument does not collapse without them. Necessary Assumption is about the smallest bridge whose negation destroys the conclusion."
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "The 4-Step Method gives you a reliable, repeatable process: **Break Down → Find the Gap → Pre-phrase → Negate and Verify.**\n\nThe Negation Test is your definitive tool. When in doubt between two answer choices, negate both. The one whose negation *destroys* the argument is the necessary assumption. The one whose negation merely *weakens* the argument is a strengthener, not a necessary assumption.\n\nNA answers are often **modest**. Don't look for the answer that \"best supports\" the conclusion — look for the answer whose denial is fatal. Choice (C) above is a perfect example: \"at least some\" is a very cautious claim, but its denial is catastrophic.\n\nWatch for the **Key Ingredient gap** — it is one of the most common NA patterns. When the evidence is about one thing and the conclusion is about another, the necessary assumption is always that the first thing is connected to the second."
        }
      ],
    },
    playbook: {
      label: 'Playbook',
      content: [
        {
          type: 'callout',
          variant: 'tip',
          text: '**Target:** 1:45 per Sufficient Assumption question',
        },
        { type: 'h3', text: 'The Method' },
        {
          type: 'process',
          steps: [
            '**Break down the argument.** Separate conclusion from premises and identify the logical gap.',
            '**Set the force standard.** The right answer must make the conclusion *certain*, not just more likely.',
            '**Diagnose the reasoning family.** Concept link? Exclusivity? Binary? Chain? General principle? Normative bridge?',
            '**Prephrase the minimum requirement.** State the simplest assumption that closes the gap completely.',
            '**Verify with the negation test.** Negate your answer — if the argument survives, it is not sufficient.',
          ],
        },
        { type: 'h3', text: 'Decision Table' },
        {
          type: 'table',
          headers: ['If You See', 'Then Do', 'Watch Out For'],
          rows: [
            [
              'Concept link (new term in conclusion)',
              'Bridge the two concepts with a conditional or equivalence',
              'Answer that bridges the wrong direction',
            ],
            [
              'Exclusivity rule (one option assumed sole path)',
              'State that the identified factor is the only way',
              'Answer that merely strengthens without closing the gap',
            ],
            [
              'Binary assumption (two exhaustive categories)',
              'Establish that the two categories cover all possibilities',
              'Answer that introduces a third category instead of closing',
            ],
            [
              'General principle (broad rule applied to specific case)',
              'Supply the rule that makes the specific conclusion follow',
              'Answer that is too narrow to cover the conclusion',
            ],
            [
              'Chain of logic (multi-step inference)',
              'Provide the missing link in the chain',
              'Answer that skips a step or adds an unnecessary link',
            ],
            [
              'Normative bridge (fact-to-value leap)',
              'State the evaluative premise connecting facts to the value claim',
              'Answer that stays purely factual without bridging to the norm',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          text: '**Break Down \u2192 Force Standard \u2192 Diagnose Family \u2192 Prephrase Minimum \u2192 Negate & Verify**',
        },
      ],
    },
  },
};
