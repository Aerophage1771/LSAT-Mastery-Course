import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: '8-2',
  title: 'Step-by-Step: Weaken',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Step-by-Step: Weaken' },
    {
      type: 'paragraph',
      text: 'This lesson provides a complete, repeatable method for solving any Weaken question. Each step includes concrete examples, tips for when the step gets tricky, and a callout highlighting a key insight. At the end, you will work through a full question applying all four steps from start to finish.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing',
      text: 'Aim for roughly **1 minute and 20 seconds** per Weaken question. The 4-step method may feel slow at first, but it becomes automatic with practice. Investing time in Steps 1–3 (understanding the argument and prephrasing) dramatically speeds up Step 4 (evaluating answer choices).',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Overview' },
    {
      type: 'process',
      title: 'The 4-Step Method',
      steps: [
        "**Step 1 — Find the Conclusion:** Identify the author's final claim and separate it from the supporting premises.",
        '**Step 2 — Identify the Gap:** Determine what the author assumes but does not prove — the logical vulnerability between the premises and the conclusion.',
        '**Step 3 — Prephrase the Weakener:** Before reading the answer choices, predict the type of information that would damage the argument.',
        '**Step 4 — Match and Eliminate:** Compare your prediction to the answer choices, eliminating common traps along the way.',
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 1: Find the Conclusion' },
    {
      type: 'paragraph',
      text: "Before you can weaken an argument, you need to know exactly what it claims. Read the stimulus and identify the **conclusion** — the author's final judgment, recommendation, prediction, or causal claim — and separate it from the **premises** — the facts, data, or observations offered in support.",
    },

    { type: 'h4', text: 'Example' },
    {
      type: 'blockquote',
      text: '"Researchers found that students who listened to classical music while studying scored 15% higher on a subsequent memory test than students who studied in silence. Therefore, listening to classical music enhances memory retention."',
    },

    {
      type: 'breakdown',
      labels: { title: 'Sentence', text: 'Role' },
      items: [
        {
          title:
            '"Researchers found that students who listened to classical music while studying scored 15% higher on a subsequent memory test than students who studied in silence."',
          text: 'This is the **premise** — an observation about what the study found.',
          badge: 'Premise',
          badgeColor: 'slate',
        },
        {
          title: '"Therefore, listening to classical music enhances memory retention."',
          text: 'This is the **conclusion** — the author\'s causal claim that classical music improves memory. Flagged by the word "Therefore."',
          badge: 'Conclusion',
          badgeColor: 'indigo',
        },
      ],
    },

    {
      type: 'paragraph',
      text: '**Translate into simple terms:** *"Since students who listened to classical music scored higher on a test, the author concludes classical music caused the improvement."* This stripped-down version makes the logical leap obvious.',
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'When This Step Gets Tricky',
      text: 'Some stimuli contain sub-conclusions or opposing viewpoints. Focus on the **main conclusion** — the final claim that the premises are marshaled to support. Use the "Why?" test: the main conclusion is the claim whose "Why?" is answered by the other statements in the stimulus.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 2: Identify the Gap' },
    {
      type: 'paragraph',
      text: 'The gap is the logical space between what the premises prove and what the conclusion claims. It is the unstated assumption, the unexplored alternative, or the missing piece of evidence that the author takes for granted. In Weaken questions, the correct answer will **always** exploit this gap.',
    },

    { type: 'h4', text: 'Finding the Gap: The "Even If True" Test' },
    {
      type: 'paragraph',
      text: 'Accept the premises as completely true, then ask: *"Even if this evidence is true, could the conclusion still be wrong?"* The reasons it could be wrong reveal the gap.',
    },

    { type: 'h4', text: 'Example (continued)' },
    {
      type: 'paragraph',
      text: 'The premise tells us students who listened to classical music scored higher. The conclusion says classical music *enhances* memory. But what if the students who chose classical music were already better at memorization? Or what if the classical music group also happened to study longer? The gap is: **a higher score does not necessarily mean the music caused the improvement.**',
    },

    { type: 'h4', text: 'Common Gap Patterns' },
    {
      type: 'paragraph',
      text: 'Recognizing common argument patterns helps you spot gaps faster. Each pattern has a predictable vulnerability:',
    },
    {
      type: 'table',
      headers: ['Argument Pattern', 'Where to Look for the Gap', 'Typical Weakener'],
      rows: [
        [
          '**Correlation → Causation**\n"A and B occur together, so A causes B"',
          'Alternative causes; reversed causation; coincidence',
          'Introduce factor C that causes both A and B',
        ],
        [
          '**Study / Data Claim**\n"The data shows X, so X is true"',
          'Missing baseline; no control group; biased sample; reporting error',
          'Show the data is flawed or unrepresentative',
        ],
        [
          '**Analogy**\n"A is like B, so what works for A works for B"',
          'Relevant differences between A and B',
          'Point out a critical difference that makes the comparison fail',
        ],
        [
          '**Recommendation / Plan**\n"We should do X to achieve Y"',
          'Hidden costs; unintended consequences; tradeoffs; feasibility problems',
          'Use the cost-benefit / tradeoff lens: show the plan\'s downside undercuts the claimed benefit',
        ],
        [
          '**Generalization**\n"This sample proves the whole group is X"',
          'Unrepresentative sample; selection bias',
          'Show the sample is unusual or self-selected',
        ],
        [
          '**Scope Shift**\n"Evidence about narrow X proves broad Y"',
          'The premises cover a narrower domain than the conclusion',
          'Show that the broader domain includes important cases the evidence misses',
        ],
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Tip: Name the Pattern',
      text: 'As you read the stimulus, actively label the argument pattern in your head: "This is a correlation-to-causation argument" or "This is an analogy argument." Naming the pattern instantly narrows the set of possible weakeners and makes prephrasing much easier.',
    },

    { type: 'h4', text: 'When the Pattern Is Not Obvious' },
    {
      type: 'paragraph',
      text: 'Some hard Weaken questions are not cleanly causal, statistical, or analogical. When that happens, do not force a familiar pattern onto the argument. Use a **non-causal fallback** that stays tightly focused on the gap.',
    },
    {
      type: 'process',
      title: 'The Non-Causal Fallback',
      steps: [
        '**Strip the conclusion down to its exact claim.** What, precisely, is the author trying to establish: that something is safe, worthwhile, sufficient, the only option, or broadly true?',
        '**Name the bridge the author needs.** Ask what would have to be true for the premises to justify that exact conclusion.',
        '**Pick the right weakening lens.** Is the bridge vulnerable to a scope gap, an omitted option, a misleading metric, or a cost-benefit / tradeoff problem?',
        '**Choose the answer that damages that bridge directly.** The right weakener attacks the logic of this argument, not merely the topic under discussion.',
      ],
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'Gap-Based, Not Topic-Based',
      text: 'A good fallback weakener does not merely say something negative about the subject matter. It gives a new fact that makes **this author\'s conclusion** less warranted. If the conclusion is about whether a choice is worth it, attack the author\'s comparison of benefits and burdens. If the conclusion is about what must be true, attack the completeness of the option set.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 3: Prephrase the Weakener' },
    {
      type: 'paragraph',
      text: 'Prephrasing is the bridge between finding the gap and selecting the correct answer. Once you have identified the gap, predict the kind of information that would exploit it — **before** looking at the answer choices. This protects you from attractive-sounding traps.',
    },

    { type: 'h4', text: 'The Prephrasing Technique' },
    {
      type: 'paragraph',
      text: 'Take the gap and complete this sentence: *"The argument would be undermined if I found out that..."* Your answer is your prephrase.',
    },

    { type: 'h4', text: 'Common Prephrase Patterns' },
    {
      type: 'paragraph',
      text: 'Certain gaps produce predictable prephrases. Memorizing these patterns speeds up your work:',
    },
    {
      type: 'breakdown',
      labels: { title: 'Gap Type', text: 'Prephrase Template' },
      items: [
        {
          title: 'Correlation → Causation',
          text: '*"...a third factor caused both the observed correlation."* Or: *"...the causal direction is actually reversed."*',
          badge: 'Alt. Cause',
          badgeColor: 'red',
        },
        {
          title: 'Biased or Flawed Data',
          text: '*"...the sample was unrepresentative"* or *"...the survey participants had a reason to misreport."*',
          badge: 'Bad Data',
          badgeColor: 'red',
        },
        {
          title: 'Cost-Benefit / Tradeoff',
          text: '*"...the plan carries a hidden cost, continuing burden, or downside that wipes out the claimed benefit."*',
          badge: 'Tradeoff',
          badgeColor: 'red',
        },
        {
          title: 'Non-Causal Fallback',
          text: '*"...the conclusion ignores a missing comparison, a narrower scope, an omitted option, or a downside that makes the author\'s claim too quick."*',
          badge: 'Fallback',
          badgeColor: 'red',
        },
        {
          title: 'Analogy',
          text: '*"...there is a critical difference between the two cases that makes the comparison invalid."*',
          badge: 'Disanalogy',
          badgeColor: 'red',
        },
        {
          title: 'Scope Shift',
          text: '*"...the broader category includes important cases the narrow evidence does not cover."*',
          badge: 'Scope Gap',
          badgeColor: 'red',
        },
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Your Prephrase Does Not Need to Be Perfect',
      text: 'A rough prephrase is far better than no prephrase. Even a general direction ("I need something that provides an alternative cause") dramatically improves your accuracy by giving you a filter through which to evaluate the answer choices. You are not trying to predict the exact wording — just the *type* of information.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 4: Match and Eliminate' },
    {
      type: 'paragraph',
      text: 'Scan the answer choices looking for the one that matches your prephrase. If no choice matches perfectly, use elimination to narrow down to the best option.',
    },

    { type: 'h4', text: 'Correct Answer Characteristics' },
    { type: 'paragraph', text: 'The correct weakener will have these properties:' },
    {
      type: 'list',
      items: [
        '**Targets the specific gap** between premises and conclusion — not a tangential issue.',
        '**Introduces new information** from outside the stimulus — it provides a fact the author did not consider.',
        '**Makes the conclusion less likely** — when you add this new fact to the premises, the conclusion becomes harder to sustain.',
        '**Does not need to be devastating** — the correct answer only needs to do *more* damage than the other four choices.',
      ],
    },

    { type: 'h4', text: 'The Negation Test Shortcut' },
    {
      type: 'paragraph',
      text: 'When stuck between two answer choices, try the **Negation Test**: negate each remaining choice and ask whether the argument falls apart. The choice whose negation most damages the argument is likely correct.',
    },
    {
      type: 'paragraph',
      text: 'How it works: if negating the answer choice makes it function as a strengthener (or makes the argument seem more solid), that tells you the un-negated version was genuinely weakening. This test is particularly useful when two choices both seem to hurt the argument and you need to determine which does more damage.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'The Negation Test in Practice',
      text: 'Suppose you are torn between choices (B) and (D).\n\n**Negate (B):** Does the argument improve? If yes, (B) was weakening.\n**Negate (D):** Does the argument improve? If yes, (D) was weakening.\n\nThe choice whose negation causes a bigger improvement to the argument is the stronger weakener.',
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: '**The 4-Step Method: Find Conclusion → Identify Gap → Prephrase Weakener → Match and Eliminate.**\n\nPrephrasing the weakener before reading the answer choices is the single most powerful habit for Weaken questions. It turns a difficult, open-ended question into a matching exercise.\n\nCommon traps include strengtheners (opposite direction), irrelevant scope (wrong topic), and too-weak answers (hedged language, marginal impact). Learn these patterns and you will eliminate traps quickly.\n\nThe Negation Test is a useful tiebreaker: negate each remaining candidate and see which negation helps the argument more. The stronger the help, the stronger the original weakener.\n\nWrong answers fail in predictable ways — memorize the trap types in the table above and you will spot them before they can trick you.',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "Step-by-Step Guide: Weaken"
        },
        {
          "type": "paragraph",
          "text": "This lesson provides a complete, repeatable method for solving any Weaken question. Each step includes concrete examples, tips for when the step gets tricky, and a callout highlighting a key insight. At the end, you will work through a full question applying all four steps from start to finish."
        },
        {
          "type": "callout",
          "title": "Timing",
          "variant": "tip",
          "text": "Aim for roughly **1 minute and 20 seconds** per Weaken question. The 4-step method may feel slow at first, but it becomes automatic with practice. Investing time in Steps 1–3 (understanding the argument and prephrasing) dramatically speeds up Step 4 (evaluating answer choices)."
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
            "**Step 1 — Find the Conclusion:** Identify the author's final claim and separate it from the supporting premises.",
            "**Step 2 — Identify the Gap:** Determine what the author assumes but does not prove — the logical vulnerability between the premises and the conclusion.",
            "**Step 3 — Prephrase the Weakener:** Before reading the answer choices, predict the type of information that would damage the argument.",
            "**Step 4 — Match and Eliminate:** Compare your prediction to the answer choices, eliminating common traps along the way."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 1: Find the Conclusion"
        },
        {
          "type": "paragraph",
          "text": "Before you can weaken an argument, you need to know exactly what it claims. Read the stimulus and identify the **conclusion** — the author's final judgment, recommendation, prediction, or causal claim — and separate it from the **premises** — the facts, data, or observations offered in support."
        },
        {
          "type": "diff-note",
          "text": "{{~change~}} The website version uses the classical music example here (Step 1) and a completely different water authority example for the full worked example at the end. Using a single running example across all four steps would create a stronger through-line and reduce cognitive load. Consider threading the water authority stimulus through Steps 1-4.",
          "variant": "comment"
        },
        {
          "type": "h4",
          "text": "Example"
        },
        {
          "type": "blockquote",
          "text": "\"Researchers found that students who listened to classical music while studying scored 15% higher on a subsequent memory test than students who studied in silence. Therefore, listening to classical music enhances memory retention.\""
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Sentence",
            "text": "Role"
          },
          "items": [
            {
              "title": "\"Researchers found that students who listened to classical music while studying scored 15% higher on a subsequent memory test than students who studied in silence.\"",
              "text": "This is the **premise** — an observation about what the study found.",
              "badge": "Premise",
              "badgeColor": "slate"
            },
            {
              "title": "\"Therefore, listening to classical music enhances memory retention.\"",
              "text": "This is the **conclusion** — the author's causal claim that classical music improves memory. Flagged by the word \"Therefore.\"",
              "badge": "Conclusion",
              "badgeColor": "indigo"
            }
          ]
        },
        {
          "type": "paragraph",
          "text": "**Translate into simple terms:** *\"Since students who listened to classical music scored higher on a test, the author concludes classical music caused the improvement.\"* This stripped-down version makes the logical leap obvious."
        },
        {
          "type": "callout",
          "title": "When This Step Gets Tricky",
          "variant": "default",
          "text": "Some stimuli contain sub-conclusions or opposing viewpoints. Focus on the **main conclusion** — the final claim that the premises are marshaled to support. Use the \"Why?\" test: the main conclusion is the claim whose \"Why?\" is answered by the other statements in the stimulus."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 2: Identify the Gap"
        },
        {
          "type": "paragraph",
          "text": "The gap is the logical space between what the premises prove and what the conclusion claims. It is the unstated assumption, the unexplored alternative, or the missing piece of evidence that the author takes for granted. In Weaken questions, the correct answer will **always** exploit this gap."
        },
        {
          "type": "h4",
          "text": "Finding the Gap: The \"Even If True\" Test"
        },
        {
          "type": "paragraph",
          "text": "Accept the premises as completely true, then ask: *\"Even if this evidence is true, could the conclusion still be wrong?\"* The reasons it could be wrong reveal the gap."
        },
        {
          "type": "h4",
          "text": "Example (continued)"
        },
        {
          "type": "paragraph",
          "text": "The premise tells us students who listened to classical music scored higher. The conclusion says classical music *enhances* memory. But what if the students who chose classical music were already better at memorization? Or what if the classical music group also happened to study longer? The gap is: **a higher score does not necessarily mean the music caused the improvement.**"
        },
        {
          "type": "h4",
          "text": "Common Gap Patterns"
        },
        {
          "type": "paragraph",
          "text": "Recognizing common argument patterns helps you spot gaps faster. Each pattern has a predictable vulnerability:"
        },
        {
          "type": "table",
          "headers": [
            "Argument Pattern",
            "Where to Look for the Gap",
            "Typical Weakener"
          ],
          "rows": [
            [
              "**Correlation → Causation**\n\"A and B occur together, so A causes B\"",
              "Alternative causes; reversed causation; coincidence",
              "Introduce factor C that causes both A and B"
            ],
            [
              "**Study / Data Claim**\n\"The data shows X, so X is true\"",
              "Missing baseline; no control group; biased sample; reporting error",
              "Show the data is flawed or unrepresentative"
            ],
            [
              "**Analogy**\n\"A is like B, so what works for A works for B\"",
              "Relevant differences between A and B",
              "Point out a critical difference that makes the comparison fail"
            ],
            [
              "**Recommendation / Plan**\n\"We should do X to achieve Y\"",
              "Hidden costs; unintended consequences; feasibility problems",
              "Show the plan has a side effect that undermines Y {{~change~}} The Mastery content version uses 'cost-benefit / tradeoff lens' language here which is more precise. The website diff still says 'side effect that undermines Y' -- consider aligning with the broader tradeoff framing."
            ],
            [
              "**Generalization**\n\"This sample proves the whole group is X\"",
              "Unrepresentative sample; selection bias",
              "Show the sample is unusual or self-selected"
            ],
            [
              "**Scope Shift**\n\"Evidence about narrow X proves broad Y\"",
              "The premises cover a narrower domain than the conclusion",
              "Show that the broader domain includes important cases the evidence misses"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "Tip: Name the Pattern",
          "variant": "tip",
          "text": "As you read the stimulus, actively label the argument pattern in your head: \"This is a correlation-to-causation argument\" or \"This is an analogy argument.\" Naming the pattern instantly narrows the set of possible weakeners and makes prephrasing much easier."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 3: Prephrase the Weakener"
        },
        {
          "type": "paragraph",
          "text": "Prephrasing is the bridge between finding the gap and selecting the correct answer. Once you have identified the gap, predict the kind of information that would exploit it — **before** looking at the answer choices. This protects you from attractive-sounding traps."
        },
        {
          "type": "h4",
          "text": "The Prephrasing Technique"
        },
        {
          "type": "paragraph",
          "text": "Take the gap and complete this sentence: *\"The argument would be undermined if I found out that...\"* Your answer is your prephrase."
        },
        {
          "type": "h4",
          "text": "Common Prephrase Patterns"
        },
        {
          "type": "paragraph",
          "text": "Certain gaps produce predictable prephrases. Memorizing these patterns speeds up your work:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Gap Type",
            "text": "Prephrase Template"
          },
          "items": [
            {
              "title": "Correlation → Causation",
              "text": "*\"...a third factor caused both the observed correlation.\"* Or: *\"...the causal direction is actually reversed.\"*",
              "badge": "Alt. Cause",
              "badgeColor": "red"
            },
            {
              "title": "Biased or Flawed Data",
              "text": "*\"...the sample was unrepresentative\"* or *\"...the survey participants had a reason to misreport.\"*",
              "badge": "Bad Data",
              "badgeColor": "red"
            },
            {
              "title": "Plan / Recommendation",
              "text": "*\"...the plan has a side effect that makes things worse\"* or *\"...there is an obstacle the author did not consider.\"* {{-remove-}} This prephrase template is narrower than the Mastery content's 'cost-benefit / tradeoff' and 'non-causal fallback' templates. The diff is missing both the Tradeoff and Non-Causal Fallback prephrase entries that exist in the main content.",
              "badge": "Side Effect",
              "badgeColor": "red"
            },
            {
              "title": "Analogy",
              "text": "*\"...there is a critical difference between the two cases that makes the comparison invalid.\"*",
              "badge": "Disanalogy",
              "badgeColor": "red"
            },
            {
              "title": "Scope Shift",
              "text": "*\"...the broader category includes important cases the narrow evidence does not cover.\"*",
              "badge": "Scope Gap",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Your Prephrase Does Not Need to Be Perfect",
          "variant": "default",
          "text": "A rough prephrase is far better than no prephrase. Even a general direction (\"I need something that provides an alternative cause\") dramatically improves your accuracy by giving you a filter through which to evaluate the answer choices. You are not trying to predict the exact wording — just the *type* of information."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 4: Match and Eliminate"
        },
        {
          "type": "paragraph",
          "text": "Scan the answer choices looking for the one that matches your prephrase. If no choice matches perfectly, use elimination to narrow down to the best option."
        },
        {
          "type": "h4",
          "text": "Correct Answer Characteristics"
        },
        {
          "type": "paragraph",
          "text": "The correct weakener will have these properties:"
        },
        {
          "type": "list",
          "items": [
            "**Targets the specific gap** between premises and conclusion — not a tangential issue.",
            "**Introduces new information** from outside the stimulus — it provides a fact the author did not consider.",
            "**Makes the conclusion less likely** — when you add this new fact to the premises, the conclusion becomes harder to sustain.",
            "**Does not need to be devastating** — the correct answer only needs to do *more* damage than the other four choices."
          ]
        },
        {
          "type": "h4",
          "text": "The Negation Test Shortcut"
        },
        {
          "type": "paragraph",
          "text": "When stuck between two answer choices, try the **Negation Test**: negate each remaining choice and ask whether the argument falls apart. The choice whose negation most damages the argument is likely correct."
        },
        {
          "type": "paragraph",
          "text": "How it works: if negating the answer choice makes it function as a strengthener (or makes the argument seem more solid), that tells you the un-negated version was genuinely weakening. This test is particularly useful when two choices both seem to hurt the argument and you need to determine which does more damage."
        },
        {
          "type": "callout",
          "title": "The Negation Test in Practice",
          "variant": "tip",
          "text": "Suppose you are torn between choices (B) and (D).\n\n**Negate (B):** Does the argument improve? If yes, (B) was weakening.\n**Negate (D):** Does the argument improve? If yes, (D) was weakening.\n\nThe choice whose negation causes a bigger improvement to the argument is the stronger weakener."
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
          "text": "Incorrect Weaken answers fall into predictable categories. Learning to recognize these traps allows you to eliminate wrong answers quickly and confidently."
        },
        {
          "type": "table",
          "headers": [
            "Trap Type",
            "Description",
            "How to Spot It"
          ],
          "rows": [
            [
              "**Strengthener**",
              "Does the opposite of what is asked — makes the conclusion more likely.",
              "Ask: does this help the argument? If yes, it is a trap."
            ],
            [
              "**Irrelevant Scope**",
              "Discusses a topic related to the stimulus but does not affect the specific logical connection between premises and conclusion.",
              "The nouns, timeframes, or populations in the choice do not match the conclusion's scope."
            ],
            [
              "**Too Extreme / Too Weak**",
              "Either requires an unreasonable interpretation to damage the argument, or only affects the argument in a negligible way.",
              "The choice uses hedging language (\"some,\" \"might,\" \"occasionally\") that limits its impact, or requires you to stack multiple assumptions."
            ],
            [
              "**Wrong Gap**",
              "Targets a real vulnerability in the argument, but not the *central* one. The damage is real but peripheral.",
              "The choice addresses a secondary detail rather than the main logical leap."
            ],
            [
              "**No Impact**",
              "States a fact that is topically related but logically neutral — it neither helps nor hurts.",
              "Adding this fact to the argument changes nothing about the conclusion's likelihood."
            ],
            [
              "**Reverses the Burden**",
              "Argues that the conclusion has not been proven rather than providing evidence against it.",
              "The choice says the argument \"fails to establish\" something rather than introducing a damaging new fact."
            ]
          ]
        },
        {
          "type": "diff-note",
          "text": "{{-remove-}} The 'Most Dangerous Trap' callout below repeats the strengthener warning that already appears two rows up in the Wrong Answer Patterns table (row 1: Strengthener). One mention is sufficient. Consider removing this callout or merging its advice into the table row.",
          "variant": "comment"
        },
        {
          "type": "callout",
          "title": "The Most Dangerous Trap",
          "variant": "default",
          "text": "The most dangerous trap is the **Strengthener**. Under time pressure, it is easy to misread the question stem or confuse the direction. Always double-check: are you looking for information that *hurts* the argument? If a choice makes you think \"that supports the conclusion,\" eliminate it immediately."
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
          "text": "Let's apply all four steps to a complete Weaken question from start to finish."
        },
        {
          "type": "paragraph",
          "text": "Consider this illustrative argument:"
        },
        {
          "type": "blockquote",
          "text": "\"A regional water authority noted that households that received a pamphlet about water conservation in January reduced their water usage by an average of 20% over the following six months compared to their usage during the same period the previous year. The authority concluded that the pamphlet program is an effective tool for reducing residential water consumption.\""
        },
        {
          "type": "paragraph",
          "text": "This example is useful because several candidate weakener ideas are plausible, but one explanation is much stronger than the rest: a region-wide event that would have reduced water usage whether or not anyone saw the pamphlet."
        },
        {
          "type": "h3",
          "text": "Applying the 4-Step Method"
        },
        {
          "type": "h4",
          "text": "Step 1: Find the Conclusion"
        },
        {
          "type": "paragraph",
          "text": "**Conclusion:** The pamphlet program is an effective tool for reducing residential water consumption."
        },
        {
          "type": "paragraph",
          "text": "**Premise:** Households that received the pamphlet reduced usage by 20% compared to the same period the previous year."
        },
        {
          "type": "h4",
          "text": "Step 2: Identify the Gap"
        },
        {
          "type": "paragraph",
          "text": "The argument observes a correlation (pamphlet → reduced usage) and concludes causation (the pamphlet *caused* the reduction). The gap is the classic causal assumption: **the author has not ruled out alternative causes for the decline.** Something else could have changed during those six months that actually drove the reduction — drought conditions, new regulations, seasonal variation, or the type of households that received the pamphlet."
        },
        {
          "type": "h4",
          "text": "Step 3: Prephrase the Weakener"
        },
        {
          "type": "paragraph",
          "text": "Prephrase: *\"The argument would be undermined if there was another factor during that period that could explain the 20% reduction — something that would have reduced water usage regardless of the pamphlet.\"*"
        },
        {
          "type": "h4",
          "text": "Step 4: Match and Eliminate"
        },
        {
          "type": "paragraph",
          "text": "The strongest weakener would show that every household had an independent reason to cut water use during that six-month window. A drought with mandatory restrictions does exactly that: it provides a complete alternative cause that can explain the full 20% drop without giving the pamphlet any credit."
        },
        {
          "type": "callout",
          "title": "Why the Other Possibilities Are Weaker",
          "variant": "default",
          "text": "Selection bias, unread pamphlets, and long-term conservation trends all raise fair questions, but none explains the specific six-month drop as fully as a mandatory regional restriction would. The best weakener usually does more than nibble at the edges of the evidence; it offers a rival explanation that can absorb the whole result."
        },
        {
          "type": "diff-note",
          "text": "{{+add+}} A question-card should follow this worked example. The website 8-2 is 68 blocks of pure theory with no interactive practice. Even one question-card here would close the engagement gap and let students test the 4-step method before moving to drills.",
          "variant": "comment"
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "**The 4-Step Method: Find Conclusion → Identify Gap → Prephrase Weakener → Match and Eliminate.**\n\nPrephrasing the weakener before reading the answer choices is the single most powerful habit for Weaken questions. It turns a difficult, open-ended question into a matching exercise.\n\nCommon traps include strengtheners (opposite direction), irrelevant scope (wrong topic), and too-weak answers (hedged language, marginal impact). Learn these patterns and you will eliminate traps quickly.\n\nThe Negation Test is a useful tiebreaker: negate each remaining candidate and see which negation helps the argument more. The stronger the help, the stronger the original weakener.\n\nWrong answers fail in predictable ways — memorize the trap types in the table above and you will spot them before they can trick you."
        }
      ],
    },
    playbook: {
      label: 'Playbook',
      content: [
        {
          type: 'callout',
          variant: 'tip',
          text: '**Target:** 1:30 per Weaken question',
        },
        { type: 'h3', text: 'The Method' },
        {
          type: 'process',
          steps: [
            '**Find the conclusion.** Locate the author\'s main claim — the statement everything else supports.',
            '**Identify the gap.** Ask: even if every premise is true, what could still prevent the conclusion from following?',
            '**Prephrase the weakener.** State what kind of new information would damage the connection between premises and conclusion.',
            '**Match and eliminate.** Find the choice that introduces the fact you prephrased. Use the negation test shortcut if stuck.',
          ],
        },
        { type: 'h3', text: 'Decision Table' },
        {
          type: 'table',
          headers: ['If You See...', 'Then Do...', 'Watch Out For...'],
          rows: [
            [
              'Causal claim',
              'Look for alternative cause, reverse causation, or third factor',
              'Answer that only weakens a premise',
            ],
            [
              'Statistical data',
              'Attack the sample\'s representativeness',
              'Answer about a different population',
            ],
            [
              'Scope shift',
              'Find the category mismatch between evidence and conclusion',
              'Answer that\'s relevant but too weak',
            ],
            [
              'Conditional reasoning',
              'Deny the consequent or find an exception',
              'Answer that affirms instead of denies',
            ],
            [
              'Numbers cited',
              'Check if percentages and raw numbers are conflated',
              'Answer about the wrong metric',
            ],
            [
              'No obvious pattern',
              'State the conclusion in stripped-down form and attack the bridge',
              'Answer that\'s interesting but off-target',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          text: '**Find → Gap → Prephrase Weakener → Match & Eliminate**',
        },
      ],
    },
  },
};
