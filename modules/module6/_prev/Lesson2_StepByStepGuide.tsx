import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: '6-2',
  title: 'Step-by-Step: Parallel Flaw',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Step-by-Step: Parallel Flaw' },
    {
      type: 'paragraph',
      text: 'Parallel Flaw questions ask you to do three things at once: diagnose a logical error, abstract that error into a structural blueprint, and find a matching error in a completely different context. This lesson gives you a repeatable, systematic method for handling all three tasks efficiently.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing',
      text: 'Parallel Flaw questions are among the **most time-consuming** on the LR section. You are reading the equivalent of **six full arguments** (one stimulus + five answer choices). Budget **2:00–2:30 per question.** The 3-step method helps you spend that time wisely: roughly 40 seconds diagnosing the flaw, 10 seconds building your blueprint, and 60–90 seconds scanning and confirming the match.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Overview' },
    {
      type: 'process',
      title: 'The 3-Step Method',
      steps: [
        '**Step 1 — Identify the Flaw:** Read the stimulus. Find the conclusion and premises. Diagnose the specific logical error. Name it.',
        '**Step 2 — Abstract the Pattern:** Strip away the topic and translate the flawed reasoning into an abstract blueprint (e.g., "If A → B. Not A. Therefore Not B.").',
        '**Step 3 — Match the Error:** Scan the answer choices using your blueprint as a filter. Eliminate valid arguments and arguments with different flaws. Confirm the final match.',
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 1: Identify the Flaw' },
    {
      type: 'paragraph',
      text: 'Before you look at a single answer choice, you must understand exactly *how* the stimulus argument fails. This is the most critical step. A vague diagnosis — "the logic seems off" — will leave you vulnerable to every trap answer. A precise diagnosis — "this is a Mistaken Negation" — turns the rest of the question into a pattern-matching exercise.',
    },

    { type: 'h4', text: 'A. Find the Conclusion and Premises' },
    {
      type: 'paragraph',
      text: 'Start by identifying the structural components of the argument, just as you would for any Flaw question:',
    },
    {
      type: 'list',
      items: [
        '**Find the Conclusion:** What is the author trying to prove? Use conclusion indicator words (*therefore*, *thus*, *so*, *hence*, *it follows that*) or the Why Test from Module 2.',
        '**Find the Premises:** What evidence does the author provide? Identify every stated reason that supports the conclusion.',
        '**Determine the Method:** What is the author *attempting* to do? Are they applying a conditional rule? Drawing a causal inference? Generalizing from a sample?',
      ],
    },

    { type: 'h4', text: 'B. Diagnose the Specific Error' },
    {
      type: 'paragraph',
      text: 'Now find the gap. Provisionally accept the premises as true and ask: **"Even if all of this evidence is true, does the conclusion follow?"** If not, identify *why* not. Use the flaw categories from Module 5 to put a precise name on the error.',
    },
    {
      type: 'paragraph',
      text: 'The most reliable technique is to ask: **"What unwarranted assumption is the author making?"** The flaw is the reason that assumption is unwarranted.',
    },

    {
      type: 'breakdown',
      labels: { title: 'If the Stimulus Does This...', text: 'The Flaw Is Likely...' },
      items: [
        {
          title: 'States "If A → B" and then observes B to conclude A',
          text: '**Mistaken Reversal** (affirming the consequent). The argument confuses a necessary condition for a sufficient one.',
          badge: 'Conditional',
          badgeColor: 'indigo',
        },
        {
          title: 'States "If A → B" and then observes Not A to conclude Not B',
          text: '**Mistaken Negation** (denying the antecedent). The argument assumes the stated trigger is the only way to produce the result.',
          badge: 'Conditional',
          badgeColor: 'indigo',
        },
        {
          title: 'Observes that X and Y co-occur and concludes X causes Y',
          text: '**Causal Confusion** (correlation → causation). The argument ignores reverse causation, third-factor explanations, and coincidence.',
          badge: 'Causal',
          badgeColor: 'blue',
        },
        {
          title:
            'Reports a statistic for one group and concludes that group is better/worse — without a comparison group',
          text: '**Missing Comparison / Compared-to-What**. The argument draws a comparative conclusion from non-comparative data.',
          badge: 'Statistical',
          badgeColor: 'blue',
        },
        {
          title: 'Argues that because each part has property P, the whole must have P',
          text: '**Composition Flaw** (Part → Whole). The argument ignores emergent properties.',
          badge: 'Part/Whole',
          badgeColor: 'slate',
        },
        {
          title: 'Argues that because the whole has property P, each part must have P',
          text: '**Division Flaw** (Whole → Part). The argument ignores that groups may have properties individuals lack.',
          badge: 'Part/Whole',
          badgeColor: 'slate',
        },
        {
          title: 'Uses "some" or "most" in the premise but "all" or "none" in the conclusion',
          text: '**Scope Shift / Hasty Generalization**. The conclusion exceeds what the evidence supports.',
          badge: 'Scope',
          badgeColor: 'red',
        },
        {
          title: 'Attacks the person making the argument rather than addressing the argument itself',
          text: "**Ad Hominem / Source Attack**. The argument is irrelevant to the claim's truth.",
          badge: 'Relevance',
          badgeColor: 'red',
        },
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 2: Abstract the Pattern' },
    {
      type: 'paragraph',
      text: 'Once you have named the flaw, strip away the topic and write a concise **Reasoning Blueprint** — an abstract description of the flawed logical move. This blueprint is your matching tool.',
    },
    {
      type: 'paragraph',
      text: 'Think of the blueprint as a template with blanks: the specific nouns and topics are removed, but the logical connectors, quantifiers, and the nature of the error remain.',
    },

    { type: 'h4', text: 'Blueprint Examples' },
    {
      type: 'table',
      headers: ['Flaw Type', 'Abstract Blueprint'],
      rows: [
        ['**Mistaken Reversal**', 'If A → B. B is true. Therefore A is true.'],
        ['**Mistaken Negation**', 'If A → B. A is false. Therefore B is false.'],
        [
          '**Composition**',
          'Each part has property P. The whole is made of those parts. Therefore the whole has property P.',
        ],
        ['**Division**', 'The whole has property P. X is part of the whole. Therefore X has property P.'],
        ['**Causal Confusion**', 'X and Y co-occur. Therefore X causes Y. (Ignores alternative explanations.)'],
        [
          '**Missing Comparison**',
          'Group A has a high rate of outcome Y. Therefore being in Group A causes Y. (No baseline for non-A group.)',
        ],
        ['**Scope Shift**', 'Some/most X are Y. Therefore all X are Y.'],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'When To Diagram in Parallel Flaw',
      text: 'Diagram when the flaw depends on **arrow direction, quantifier force, or logical operators**. Stay verbal when the flaw is mostly causal, sampling-based, or source-based. In hybrids, diagram the formal core and keep the rest verbal.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'The Flaw-First Strategy',
      text: '**Why naming the flaw before scanning choices saves time:**\n\nWithout a blueprint, you must independently analyze all five answer choices — effectively solving five mini-Flaw questions. With a blueprint, you can rapidly scan for the one argument that matches your template and eliminate the rest.\n\nThis is the difference between:\n• **Without blueprint:** ~30 seconds per answer choice × 5 = 2.5 minutes on choices alone.\n• **With blueprint:** ~15 seconds per answer choice × 5 = 1.25 minutes on choices.\n\nThe 40 seconds you invest in diagnosis saves you 75+ seconds on the back end.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 3: Match the Error' },
    {
      type: 'paragraph',
      text: "With your blueprint in hand, scan the answer choices systematically. You are looking for the one argument that replicates the **exact logical mechanism** of the stimulus's failure.",
    },

    { type: 'h4', text: 'The Flaw Matching Checklist' },
    { type: 'paragraph', text: 'For each answer choice, run through this checklist:' },
    {
      type: 'table',
      headers: ['Check', 'Question to Ask', 'If "No" →'],
      rows: [
        [
          '**1. Is it flawed?**',
          'Does this argument contain a logical error?',
          'Eliminate — valid arguments can never be the correct answer.',
        ],
        [
          '**2. Same flaw type?**',
          'Does this argument commit the *same category* of error as the stimulus?',
          'Eliminate — a Mistaken Reversal cannot match a Causal Confusion.',
        ],
        [
          '**3. Same direction?**',
          'Does the flaw move in the same logical direction (e.g., Part → Whole, not Whole → Part)?',
          'Eliminate — Composition ≠ Division, even though both involve parts and wholes.',
        ],
        [
          '**4. Same conclusion force?**',
          'Does the conclusion match the stimulus in certainty (must/probably) and polarity (positive/negative)?',
          'Weak match — use as a tiebreaker if two choices survive.',
        ],
      ],
    },

    { type: 'h4', text: 'First Pass: Quick Elimination' },
    { type: 'paragraph', text: 'Start by eliminating the easiest mismatches:' },
    {
      type: 'list',
      ordered: true,
      items: [
        "**Eliminate valid arguments.** If an answer choice's conclusion follows logically from its premises, it cannot be correct. This single check often removes 1–2 choices instantly.",
        '**Eliminate wrong flaw categories.** If the stimulus commits a conditional logic error, eliminate any choice committing a causal or statistical error.',
        '**Eliminate wrong directions.** If the stimulus goes Part → Whole (Composition), eliminate any choice going Whole → Part (Division).',
      ],
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'Structural Quick-Scan',
      text: 'Before reading an answer deeply, ask four questions: **Is it flawed at all?** **Is it the same flaw family?** **Is the direction the same?** **Do the force and connectors survive the match?** This catches hybrid conditional / quantifier traps quickly.',
    },

    { type: 'h4', text: 'Second Pass: Confirm the Match' },
    {
      type: 'paragraph',
      text: 'For the remaining 1–2 contenders, perform a detailed structural comparison. Map your abstract blueprint onto each remaining choice:',
    },
    {
      type: 'list',
      items: [
        '**Side-by-Side Comparison:** Read the stimulus and your contender back-to-back. Ignore the topics. Focus on the movement from evidence to conclusion.',
        '**Blueprint Verification:** Confirm that the same abstract blueprint fits both arguments. The "logical jump" should be identical.',
        '**Conclusion Match:** Verify that the conclusions have the same type (factual, recommendation, prediction), same force (must, probably, might), and same polarity (positive, negative).',
      ],
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: '• The **3-Step Method** gives you a repeatable process: **Identify the Flaw → Abstract the Pattern → Match the Error.**\n• **Step 1 is the most important step.** A precise flaw diagnosis turns the entire question into pattern matching. A vague diagnosis leaves you guessing.\n• **The Flaw-First Strategy** saves time: invest 40 seconds diagnosing, save 75+ seconds scanning.\n• Use the **Flaw Matching Checklist**: Is it flawed? Same flaw type? Same direction? Same conclusion force?\n• Budget **2:00–2:30** per question. These are long and complex, but a systematic method makes them manageable.',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "The 3-Step Method for Parallel Flaw Questions"
        },
        {
          "type": "paragraph",
          "text": "Parallel Flaw questions ask you to do three things at once: diagnose a logical error, abstract that error into a structural blueprint, and find a matching error in a completely different context. This lesson gives you a repeatable, systematic method for handling all three tasks efficiently."
        },
        {
          "type": "callout",
          "title": "Timing",
          "variant": "tip",
          "text": "Parallel Flaw questions are among the **most time-consuming** on the LR section. You are reading the equivalent of **six full arguments** (one stimulus + five answer choices). Budget **2:00–2:30 per question.** The 3-step method helps you spend that time wisely: roughly 40 seconds diagnosing the flaw, 10 seconds building your blueprint, and 60–90 seconds scanning and confirming the match."
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
          "title": "The 3-Step Method",
          "steps": [
            "**Step 1 — Identify the Flaw:** Read the stimulus. Find the conclusion and premises. Diagnose the specific logical error. Name it.",
            "**Step 2 — Abstract the Pattern:** Strip away the topic and translate the flawed reasoning into an abstract blueprint (e.g., \"If A → B. Not A. Therefore Not B.\").",
            "**Step 3 — Match the Error:** Scan the answer choices using your blueprint as a filter. Eliminate valid arguments and arguments with different flaws. Confirm the final match."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 1: Identify the Flaw"
        },
        {
          "type": "paragraph",
          "text": "Before you look at a single answer choice, you must understand exactly *how* the stimulus argument fails. This is the most critical step. A vague diagnosis — \"the logic seems off\" — will leave you vulnerable to every trap answer. A precise diagnosis — \"this is a Mistaken Negation\" — turns the rest of the question into a pattern-matching exercise."
        },
        {
          "type": "h4",
          "text": "A. Find the Conclusion and Premises"
        },
        {
          "type": "paragraph",
          "text": "Start by identifying the structural components of the argument, just as you would for any Flaw question:"
        },
        {
          "type": "list",
          "items": [
            "**Find the Conclusion:** What is the author trying to prove? Use conclusion indicator words (*therefore*, *thus*, *so*, *hence*, *it follows that*) or the Why Test from Module 2.",
            "**Find the Premises:** What evidence does the author provide? Identify every stated reason that supports the conclusion.",
            "**Determine the Method:** What is the author *attempting* to do? Are they applying a conditional rule? Drawing a causal inference? Generalizing from a sample?"
          ]
        },
        {
          "type": "h4",
          "text": "B. Diagnose the Specific Error"
        },
        {
          "type": "paragraph",
          "text": "Now find the gap. Provisionally accept the premises as true and ask: **\"Even if all of this evidence is true, does the conclusion follow?\"** If not, identify *why* not. Use the flaw categories from Module 5 to put a precise name on the error."
        },
        {
          "type": "paragraph",
          "text": "The most reliable technique is to ask: **\"What unwarranted assumption is the author making?\"** The flaw is the reason that assumption is unwarranted."
        },
        {
          "type": "diff-note",
          "text": "{{!note!}} The 8-item diagnostic breakdown below largely repeats the flaw types table from 6-1. The breakdown format adds value (badges, colors, 'If you see...' framing), but consider whether 6-1 should be trimmed instead so this lesson owns the full diagnostic tool. Avoids students reading the same flaw list twice.",
          "variant": "comment"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "If the Stimulus Does This...",
            "text": "The Flaw Is Likely..."
          },
          "items": [
            {
              "title": "States \"If A → B\" and then observes B to conclude A",
              "text": "**Mistaken Reversal** (affirming the consequent). The argument confuses a necessary condition for a sufficient one.",
              "badge": "Conditional",
              "badgeColor": "indigo"
            },
            {
              "title": "States \"If A → B\" and then observes Not A to conclude Not B",
              "text": "**Mistaken Negation** (denying the antecedent). The argument assumes the stated trigger is the only way to produce the result.",
              "badge": "Conditional",
              "badgeColor": "indigo"
            },
            {
              "title": "Observes that X and Y co-occur and concludes X causes Y",
              "text": "**Causal Confusion** (correlation → causation). The argument ignores reverse causation, third-factor explanations, and coincidence.",
              "badge": "Causal",
              "badgeColor": "blue"
            },
            {
              "title": "Reports a statistic for one group and concludes that group is better/worse — without a comparison group",
              "text": "**Missing Comparison / Compared-to-What**. The argument draws a comparative conclusion from non-comparative data.",
              "badge": "Statistical",
              "badgeColor": "blue"
            },
            {
              "title": "Argues that because each part has property P, the whole must have P",
              "text": "**Composition Flaw** (Part → Whole). The argument ignores emergent properties.",
              "badge": "Part/Whole",
              "badgeColor": "slate"
            },
            {
              "title": "Argues that because the whole has property P, each part must have P",
              "text": "**Division Flaw** (Whole → Part). The argument ignores that groups may have properties individuals lack.",
              "badge": "Part/Whole",
              "badgeColor": "slate"
            },
            {
              "title": "Uses \"some\" or \"most\" in the premise but \"all\" or \"none\" in the conclusion",
              "text": "**Scope Shift / Hasty Generalization**. The conclusion exceeds what the evidence supports.",
              "badge": "Scope",
              "badgeColor": "red"
            },
            {
              "title": "Attacks the person making the argument rather than addressing the argument itself",
              "text": "**Ad Hominem / Source Attack**. The argument is irrelevant to the claim's truth.",
              "badge": "Relevance",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 2: Abstract the Pattern"
        },
        {
          "type": "paragraph",
          "text": "Once you have named the flaw, strip away the topic and write a concise **Reasoning Blueprint** — an abstract description of the flawed logical move. This blueprint is your matching tool."
        },
        {
          "type": "paragraph",
          "text": "Think of the blueprint as a template with blanks: the specific nouns and topics are removed, but the logical connectors, quantifiers, and the nature of the error remain."
        },
        {
          "type": "h4",
          "text": "Blueprint Examples"
        },
        {
          "type": "table",
          "headers": [
            "Flaw Type",
            "Abstract Blueprint"
          ],
          "rows": [
            [
              "**Mistaken Reversal**",
              "If A → B. B is true. Therefore A is true."
            ],
            [
              "**Mistaken Negation**",
              "If A → B. A is false. Therefore B is false."
            ],
            [
              "**Composition**",
              "Each part has property P. The whole is made of those parts. Therefore the whole has property P."
            ],
            [
              "**Division**",
              "The whole has property P. X is part of the whole. Therefore X has property P."
            ],
            [
              "**Causal Confusion**",
              "X and Y co-occur. Therefore X causes Y. (Ignores alternative explanations.)"
            ],
            [
              "**Missing Comparison**",
              "Group A has a high rate of outcome Y. Therefore being in Group A causes Y. (No baseline for non-A group.)"
            ],
            [
              "**Scope Shift**",
              "Some/most X are Y. Therefore all X are Y."
            ]
          ]
        },
        {
          "type": "callout",
          "title": "The Flaw-First Strategy",
          "variant": "tip",
          "text": "**Why naming the flaw before scanning choices saves time:**\n\nWithout a blueprint, you must independently analyze all five answer choices — effectively solving five mini-Flaw questions. With a blueprint, you can rapidly scan for the one argument that matches your template and eliminate the rest.\n\nThis is the difference between:\n• **Without blueprint:** ~30 seconds per answer choice × 5 = 2.5 minutes on choices alone.\n• **With blueprint:** ~15 seconds per answer choice × 5 = 1.25 minutes on choices.\n\nThe 40 seconds you invest in diagnosis saves you 75+ seconds on the back end."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 3: Match the Error"
        },
        {
          "type": "paragraph",
          "text": "With your blueprint in hand, scan the answer choices systematically. You are looking for the one argument that replicates the **exact logical mechanism** of the stimulus's failure."
        },
        {
          "type": "h4",
          "text": "The Flaw Matching Checklist"
        },
        {
          "type": "paragraph",
          "text": "For each answer choice, run through this checklist:"
        },
        {
          "type": "table",
          "headers": [
            "Check",
            "Question to Ask",
            "If \"No\" →"
          ],
          "rows": [
            [
              "**1. Is it flawed?**",
              "Does this argument contain a logical error?",
              "Eliminate — valid arguments can never be the correct answer."
            ],
            [
              "**2. Same flaw type?**",
              "Does this argument commit the *same category* of error as the stimulus?",
              "Eliminate — a Mistaken Reversal cannot match a Causal Confusion."
            ],
            [
              "**3. Same direction?**",
              "Does the flaw move in the same logical direction (e.g., Part → Whole, not Whole → Part)?",
              "Eliminate — Composition ≠ Division, even though both involve parts and wholes."
            ],
            [
              "**4. Same conclusion force?**",
              "Does the conclusion match the stimulus in certainty (must/probably) and polarity (positive/negative)?",
              "Weak match — use as a tiebreaker if two choices survive."
            ]
          ]
        },
        {
          "type": "h4",
          "text": "First Pass: Quick Elimination"
        },
        {
          "type": "paragraph",
          "text": "Start by eliminating the easiest mismatches:"
        },
        {
          "type": "list",
          "items": [
            "**Eliminate valid arguments.** If an answer choice's conclusion follows logically from its premises, it cannot be correct. This single check often removes 1–2 choices instantly.",
            "**Eliminate wrong flaw categories.** If the stimulus commits a conditional logic error, eliminate any choice committing a causal or statistical error.",
            "**Eliminate wrong directions.** If the stimulus goes Part → Whole (Composition), eliminate any choice going Whole → Part (Division)."
          ],
          "ordered": true
        },
        {
          "type": "h4",
          "text": "Second Pass: Confirm the Match"
        },
        {
          "type": "paragraph",
          "text": "For the remaining 1–2 contenders, perform a detailed structural comparison. Map your abstract blueprint onto each remaining choice:"
        },
        {
          "type": "list",
          "items": [
            "**Side-by-Side Comparison:** Read the stimulus and your contender back-to-back. Ignore the topics. Focus on the movement from evidence to conclusion.",
            "**Blueprint Verification:** Confirm that the same abstract blueprint fits both arguments. The \"logical jump\" should be identical.",
            "**Conclusion Match:** Verify that the conclusions have the same type (factual, recommendation, prediction), same force (must, probably, might), and same polarity (positive, negative)."
          ]
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
          "text": "The LSAT uses predictable trap answer designs in Parallel Flaw questions. Learning to recognize these patterns helps you eliminate quickly:"
        },
        {
          "type": "table",
          "headers": [
            "Wrong Answer Pattern",
            "Why It's Wrong",
            "How to Spot It"
          ],
          "rows": [
            [
              "**Valid Argument**",
              "Contains no flaw at all — the conclusion follows from the premises",
              "Test the logic: if the premises are true, must the conclusion be true? If yes, eliminate."
            ],
            [
              "**Adjacent Flaw**",
              "Commits a *similar* but distinct error (e.g., Mistaken Negation instead of Mistaken Reversal)",
              "Apply your blueprint precisely. Both are conditional errors, but the direction of the error differs."
            ],
            [
              "**Topic Match**",
              "Shares the same subject matter as the stimulus but uses different (or valid) logic",
              "Ignore the topic entirely. Two arguments about \"law\" can have completely different logical structures."
            ],
            [
              "**Reversed Direction**",
              "Commits the mirror image of the flaw (e.g., Division instead of Composition)",
              "Track the direction: Small → Big or Big → Small? The direction must match."
            ],
            [
              "**Partial Flaw Match**",
              "Contains one flaw that matches but also contains a second, different flaw",
              "If the stimulus has one flaw, the correct answer should have exactly one matching flaw."
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Worked Method Snapshot"
        },
        {
          "type": "diff-note",
          "text": "{{~change~}} The snapshot says 'without needing a full standalone practice question in this lesson' -- but it should have one. The parks/crime hypothetical is good pedagogy, but a real PT question card afterward would let the student verify the method works on an actual LSAT question before moving to the drills.",
          "variant": "comment"
        },
        {
          "type": "paragraph",
          "text": "Here is what the method looks like when you apply it to a typical correlation-to-causation Parallel Flaw stimulus, without needing a full standalone practice question in this lesson."
        },
        {
          "type": "h3",
          "text": "Applying the 3-Step Method"
        },
        {
          "type": "process",
          "title": "Step-by-Step Walkthrough",
          "steps": [
            "**Step 1 — Identify the Flaw:**\nSuppose an argument says that cities with more public parks tend to have lower crime rates, then concludes that adding parks will reduce crime. The flaw is a **causal confusion**: the author treats a correlation as proof of causation and ignores alternative explanations such as wealth, tax base, policing, or population density.",
            "**Step 2 — Abstract the Pattern:**\n**Blueprint:** X and Y tend to appear together. Therefore X causes Y. Therefore, we should do more X to get more Y. Once written this way, the content drops out and the flawed move becomes much easier to recognize.",
            "**Step 3 — Match the Error:**\nWhen you go to the answer choices, ignore topic overlap and ask only whether the choice repeats the same sequence: correlation first, causal leap second, recommendation last. Eliminate choices that merely discuss the issue, supply an alternative explanation, or treat the causal link as already established."
          ]
        },
        {
          "type": "h3",
          "text": "What the Right Match Must Do"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Requirement",
            "text": "What You Need to See"
          },
          "items": [
            {
              "title": "Same flaw category",
              "text": "The answer must commit the same **correlation → causation** error, not a nearby flaw like mistaken negation, composition, or a missing comparison argument.",
              "badge": "Required",
              "badgeColor": "green"
            },
            {
              "title": "Same logical direction",
              "text": "The choice must move from evidence about co-occurrence to a causal conclusion, not from a causal claim to criticism or from a recommendation to evidence.",
              "badge": "Required",
              "badgeColor": "green"
            },
            {
              "title": "Same argumentative role",
              "text": "The choice must **commit** the flaw. If it explains why the causal inference is weak, it is not parallel even if it mentions the same concepts.",
              "badge": "Required",
              "badgeColor": "green"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Trap Pattern to Watch",
          "variant": "default",
          "text": "A common wrong answer talks about the same type of evidence but then **critiques** the causal move instead of making it. Another common trap states the causal link as an accepted fact rather than inferring it from the correlation. Both miss the structure you are trying to match."
        },
        {
          "type": "diff-note",
          "text": "{{+add+}} Insert a real PT question card here (causal-confusion flaw to align with the parks/crime snapshot). This is the method lesson -- the student should practice the full 3-step method at least once before moving to the drill lessons. Currently the first question card does not appear until Lesson 6-3.",
          "variant": "comment"
        },
        {
          "type": "diff-note",
          "text": "{{-remove-}} The 'Quick Reference: The Steps' process block below restates the 3-Step Method overview from the top of the lesson. Cut it to reduce length (52 blocks is the longest lesson in the module) and remove the redundancy.",
          "variant": "comment"
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Quick Reference: The Steps"
        },
        {
          "type": "process",
          "title": "The 3-Step Method Summary",
          "steps": [
            "**Diagnose:** Find the conclusion and premises. Name the specific flaw. Be precise — \"Mistaken Negation\" beats \"bad logic.\"",
            "**Abstract:** Build a blueprint that captures the flawed move in variable form. Strip away the topic.",
            "**Match:** Scan choices using the Flaw Matching Checklist. Eliminate valid arguments first. Eliminate wrong flaw types second. Confirm the final match by blueprint verification."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "• The **3-Step Method** gives you a repeatable process: **Identify the Flaw → Abstract the Pattern → Match the Error.**\n• **Step 1 is the most important step.** A precise flaw diagnosis turns the entire question into pattern matching. A vague diagnosis leaves you guessing.\n• **The Flaw-First Strategy** saves time: invest 40 seconds diagnosing, save 75+ seconds scanning.\n• Use the **Flaw Matching Checklist**: Is it flawed? Same flaw type? Same direction? Same conclusion force?\n• **Common traps** include valid arguments, adjacent flaws (similar but distinct errors), topic matches, reversed directions, and arguments that critique the flaw rather than commit it.\n• Budget **2:00–2:30** per question. These are long and complex, but a systematic method makes them manageable."
        }
      ],
    },
    playbook: {
      label: 'Playbook',
      content: [
        {
          type: 'callout',
          variant: 'tip',
          text: '**Target:** 2:00 per Parallel Flaw question',
        },
        { type: 'h3', text: 'The Method' },
        {
          type: 'process',
          steps: [
            '**Identify the Flaw** -- Read the stimulus. Find the conclusion and premises. Diagnose the specific logical error. Name it precisely.',
            '**Abstract the Pattern** -- Strip away the topic. Write a blueprint capturing the flawed move (e.g., "If A -> B. Not A. Therefore Not B.").',
            '**Match the Error** -- Scan answer choices using the blueprint. Eliminate valid arguments and arguments with different flaws. Confirm the final match.',
          ],
        },
        { type: 'h3', text: 'Decision Table' },
        {
          type: 'table',
          headers: ['If You See...', 'Then Do...', 'Watch Out For...'],
          rows: [
            ['Causal flaw (correlation treated as causation)', 'Find a different causal error in a different topic', 'Third-factor explanation vs. direct correlation -- both causal, but different mechanisms'],
            ['Conditional reversal (affirming the consequent)', 'Match the direction: B observed, A concluded', 'Mistaken Negation (denying the antecedent) is the adjacent trap -- same family, wrong direction'],
            ['Scope overgeneralization (some -> all)', 'Find a part-to-whole or sample-to-population shift in a different domain', 'Composition flaw vs. hasty generalization -- both involve scope, but different structures'],
            ['Source attack (ad hominem)', 'Find an ad hominem in a different context', 'Argument attacks the claim (valid rebuttal) vs. attacks the person (flaw)'],
            ['False dichotomy (only two options presented)', 'Find a false binary in a different topic', 'Genuine either/or (eliminative argument) vs. artificially limited options'],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          text: '**Identify the Flaw -> Abstract the Pattern -> Match the Error**',
        },
      ],
    },
  },
};
