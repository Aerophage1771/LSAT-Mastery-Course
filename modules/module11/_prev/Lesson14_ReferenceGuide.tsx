import { Lesson } from '../../types';

export const Lesson14_ReferenceGuide: Lesson = {
  id: '11-14',
  title: 'Reference Guide',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Necessary Assumption — Complete Reference Guide' },
    {
      type: 'paragraph',
      text: "This guide consolidates the current Module 12 doctrine into one place. Use it for quick review before drills, for pattern identification during timed sets, and for final test-day refreshers. The core workflow is now: set the force standard, diagnose the reasoning family, then use the Negation Test to confirm your finalist.",
    },

    { type: 'hr' },

    { type: 'h3', text: 'The 5-Step Method' },
    {
      type: 'process',
      title: 'Necessary Assumption — 5 Steps',
      steps: [
        '**Break Down the Argument.** Identify the conclusion, the premises, and any sub-conclusions. Pay attention to shifts in terms or scope between the evidence and the conclusion.',
        '**Set the Force Standard.** Ask whether the gap calls for something merely helpful, strictly required, or fully sufficient. Module 12 targets the middle category: required.',
        '**Diagnose the Reasoning Family.** Decide whether the gap is mainly a bridge problem, an exhaustiveness problem, or a hidden-rule problem.',
        '**Pre-phrase the Minimum Requirement.** State the smallest belief the argument must have in order to stay standing.',
        '**Verify with the Negation Test.** Negate your finalist. If the argument collapses, you have found the necessary assumption.',
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Force Standard Snapshot' },
    {
      type: 'table',
      headers: ['Question Type', 'What the Answer Does', 'How to Test It', 'Typical Failure Mode'],
      rows: [
        [
          '**Strengthen**',
          'Makes the conclusion more plausible',
          'Ask whether it materially supports the conclusion',
          'Helpful but optional fact',
        ],
        [
          '**Necessary Assumption**',
          'States something the argument must have',
          'Negate it and see whether the argument collapses',
          'Confused with a strengthener because it sounds modest',
        ],
        [
          '**Sufficient Assumption**',
          'Adds enough to prove the conclusion',
          'Ask whether premises + answer guarantee the conclusion',
          'Too strong for Module 12 unless the argument truly needs that exact bridge',
        ],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Anchor Example',
      text: '**PT-103-S-1-Q-4 (The Morale-Production Link)** is the best force-standard anchor in this module. The correct answer is not a big proof that flextime will increase production. It is the smaller required claim that higher morale **could** lead to higher production.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Reasoning Family Diagnostics' },
    {
      type: 'paragraph',
      text: 'Before you negate anything, classify the gap into a reasoning family. That tells you what kind of answer the argument needs and lets you eliminate whole categories of traps quickly.',
    },
    {
      type: 'table',
      headers: ['Family', 'Diagnostic Question', 'What the Correct Answer Does', 'Report-Backed Anchor'],
      rows: [
        [
          '**Link / Bridge**',
          'What connection between the evidence and the conclusion must exist?',
          'Supplies the minimum bridge from premise world to conclusion world',
          '`PT-103-S-1-Q-4` Morale-Production Link',
        ],
        [
          '**Scope / Exhaustiveness**',
          'What outsider, middle ground, or third party would break the argument if allowed in?',
          'Blocks the outsider or establishes that the stated set is exhaustive',
          '`PT-127-S-1-Q-19` Scope Limitation; `PT-126-S-3-Q-8` False Dichotomy',
        ],
        [
          '**Source / Hidden Rule**',
          'Is the author assuming a rule about credibility, rights, success, or classification?',
          'States the governing rule the conclusion quietly depends on',
          '`PT-121-S-4-Q-10` Vested Interest',
        ],
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'The Negation Test — Step-by-Step Reference' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Choose your finalist first.** Do not negate all five answer choices blindly.',
        '**Negate the answer logically.** Turn "all" into "not all," "some" into "none," "can" into "cannot," and "only way" into "not the only way."',
        '**Insert the negation into the argument** as if it were a new premise.',
        '**Ask whether the argument still has a live path to the conclusion.** If the answer is yes, the statement was not necessary. If the answer is no, it was required.',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Common Negation Mistakes',
      text: '**"All" negates to "not all," not to "none."**\n\n**"Some" negates to "none."**\n\n**Modest language is still powerful.** A quiet claim such as "could contribute" can be the entire bridge an argument needs.\n\n**Do not confuse weakening with collapse.** If the negated answer merely removes support, you are looking at a strengthener, not a necessary assumption.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Complete NA Patterns Table' },
    {
      type: 'paragraph',
      text: 'Module 12 now organizes its **eleven** recurring drill patterns under the broader reasoning families above. Use the family first, then narrow to the exact pattern.',
    },
    {
      type: 'table',
      headers: ['Family', 'Pattern', 'Recognition Signal', 'Correct Answer Template'],
      rows: [
        [
          '**Link / Bridge**',
          '**Key Ingredient**',
          'Evidence establishes an intermediate benefit, but the conclusion is about an ultimate goal',
          '"That intermediate benefit could matter for the ultimate goal"',
        ],
        [
          '**Link / Bridge**',
          '**Definitional Gap**',
          'The argument treats two concepts as equivalent or incompatible without saying why',
          '"These concepts connect in the way the author assumes"',
        ],
        [
          '**Link / Bridge**',
          '**Behavioral Link**',
          'A mindset is supposed to block a behavior, but the link is unstated',
          '"People with that mindset are less likely to perform the required behavior"',
        ],
        [
          '**Scope / Exhaustiveness**',
          '**Only Way**',
          'The argument assumes one route is the sole path to the goal',
          '"No relevant alternative route works"',
        ],
        [
          '**Scope / Exhaustiveness**',
          '**Closed Universe**',
          'The conclusion chooses from a named set without ruling out outsiders',
          '"The named set contains all eligible options"',
        ],
        [
          '**Scope / Exhaustiveness**',
          '**False Dichotomy**',
          'The author evaluates two extremes and ignores the middle',
          '"Those are the only relevant possibilities"',
        ],
        [
          '**Scope / Exhaustiveness**',
          '**Complete Knowledge**',
          'The evidence is limited to what is "known" or "documented," but the conclusion is absolute',
          '"The known sample is complete enough for this conclusion"',
        ],
        [
          '**Scope / Exhaustiveness**',
          '**Forced Choice (Advanced)**',
          'The author sorts something into one box by assuming two boxes cannot overlap',
          '"The relevant trait is incompatible with the rejected box"',
        ],
        [
          '**Scope / Exhaustiveness**',
          '**Blocking Third Party**',
          'The author rules out one source and then concludes the broader claim is false',
          '"No other source could support the broader claim"',
        ],
        [
          '**Source / Hidden Rule**',
          '**Source Fallacy**',
          'The argument dismisses a claim because of who said it',
          '"Arguments from sources with that kind of stake are not good arguments"',
        ],
        [
          '**Source / Hidden Rule**',
          '**Definitional Standard**',
          'The argument declares something unsuccessful or invalid based on a rigid unstated rule',
          '"Anything that counts as successful must avoid that flaw"',
        ],
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Necessary vs. Strengthener vs. Sufficient' },
    {
      type: 'table',
      headers: ['Feature', 'Strengthener', 'Necessary Assumption', 'Sufficient Assumption'],
      rows: [
        [
          'What it asks',
          'What would help the argument',
          'What the argument must have',
          'What would prove the conclusion',
        ],
        [
          'Typical answer force',
          'Supportive',
          'Required but often modest',
          'Powerful or sweeping',
        ],
        [
          'Best tool',
          'Support test',
          'Negation Test',
          'Sufficiency equation',
        ],
        [
          'Classic error',
          'Picking something irrelevant but positive-sounding',
          'Picking something helpful but not fatal if false',
          'Picking something required but too weak to prove the conclusion',
        ],
      ],
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'Strength Spectrum',
      text: 'Do not think only in terms of "weak answers" and "strong answers." Think in terms of **function**. A Necessary Assumption can be modest in wording but absolutely essential in logic. A Sufficient Assumption can sound elegant and impressive but still be wrong for Module 12 because the argument does not actually need that much.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Common Traps in NA Questions' },
    {
      type: 'breakdown',
      labels: { title: 'Trap', text: 'How It Works' },
      items: [
        {
          title: '1. Helpful Strengthener',
          text: 'The answer supports the conclusion but is not required. When negated, the argument weakens but still has a live path.\n\n**How to avoid:** Ask whether the answer is fatal if false, not just useful if true.',
          badge: 'Watch Out',
          badgeColor: 'red',
        },
        {
          title: '2. Mistaken Reversal / Wrong Direction',
          text: 'The answer uses the right concepts but connects them in the wrong direction.\n\n**How to avoid:** Match the answer to the direction the conclusion needs, not just to the topic.',
          badge: 'Watch Out',
          badgeColor: 'red',
        },
        {
          title: '3. Restatement',
          text: 'The answer repeats a stated premise. It feels important because negating it contradicts the stimulus, but that does not make it an unstated assumption.\n\n**How to avoid:** If the author already said it, the author is not merely assuming it.',
          badge: 'Watch Out',
          badgeColor: 'red',
        },
        {
          title: '4. Out-of-Scope Concept',
          text: 'The answer introduces a new idea the argument never relied on.\n\n**How to avoid:** Compare the answer directly to the exact gap you identified. New topic usually means wrong answer.',
          badge: 'Watch Out',
          badgeColor: 'red',
        },
        {
          title: '5. Too-Strong / Sufficient Trap',
          text: 'The answer would prove the conclusion, but the argument may not need that much.\n\n**How to avoid:** Let the force standard and Negation Test decide rather than assuming the stronger answer is better.',
          badge: 'Watch Out',
          badgeColor: 'red',
        },
        {
          title: '6. Wrong Family',
          text: 'The answer addresses the right general topic but the wrong structural need. For example, it gives a new fact when the argument needed an exhaustiveness claim.\n\n**How to avoid:** Diagnose the reasoning family before you compare answers.',
          badge: 'Watch Out',
          badgeColor: 'red',
        },
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Test Day Checklist' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Read the stem first.** Confirm it is a Necessary Assumption question.',
        '**Break down the argument.** Find the conclusion and the support.',
        '**Set the force standard.** Required, not merely helpful and not automatically sufficient.',
        '**Diagnose the reasoning family.** Link / Bridge, Scope / Exhaustiveness, or Source / Hidden Rule.',
        '**Pre-phrase the minimum requirement.** Keep it small and fatal if denied.',
        '**Narrow to one or two finalists.** Do this before negating anything.',
        '**Use the Negation Test on finalists.** Collapse means correct. Mere weakening means wrong.',
        '**Confirm the answer is truly unstated.** If it is already in the stimulus, it is not an assumption.',
      ],
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Final Review',
      text: "Necessary Assumption questions test one core skill: finding the unstated belief that an argument cannot live without.\n\n**Remember the current Module 12 doctrine:**\n• Set the force standard before you evaluate answers.\n• Use reasoning-family diagnostics to identify what kind of requirement you need.\n• Use the Negation Test as your final proof, not as your opening move.\n• Keep the distinction sharp: Strengthen helps, Necessary Assumption is required, Sufficient Assumption proves.\n\nThe current report-backed anchor pairings are `PT-103-S-1-Q-4`, `PT-127-S-1-Q-19`, `PT-121-S-4-Q-10`, and `PT-126-S-3-Q-8`. If your understanding of the doctrine explains why those four answers are required, you are reading Module 12 the right way.",
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "Necessary Assumption — Complete Reference Guide"
        },
        {
          "type": "paragraph",
          "text": "This reference guide consolidates everything you've learned about Necessary Assumption (NA) questions into a single resource. Use it for quick review before practice sets, for pattern identification during drilling, and as a final refresher before test day."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "The 4-Step Method"
        },
        {
          "type": "paragraph",
          "text": "Use this systematic approach for every NA question:"
        },
        {
          "type": "process",
          "title": "Necessary Assumption — 4 Steps",
          "steps": [
            "**Break Down the Argument.** Identify the conclusion, the premises, and any sub-conclusions. Pay careful attention to the specific terms used in each — shifts in terminology between the premise and conclusion often reveal the gap.",
            "**Identify the Gap.** Compare the scope, terms, and concepts in the evidence to those in the conclusion. Where does the author make a logical leap? What does the author take for granted? The gap is the unstated connection that holds the argument together.",
            "**Pre-phrase the Assumption.** Before looking at the answer choices, articulate what the author must believe. The assumption should bridge the specific gap you identified — it should be necessary for the conclusion to have any chance of being true.",
            "**Evaluate with the Negation Test.** Negate each answer choice. If the negation destroys the argument (makes the conclusion unsupportable), that choice is the necessary assumption. If the argument survives the negation, the choice is wrong."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "The Negation Test — Step-by-Step Reference"
        },
        {
          "type": "paragraph",
          "text": "The Negation Test is the single most reliable tool for confirming a Necessary Assumption answer. Here is how to apply it precisely:"
        },
        {
          "type": "list",
          "items": [
            "**Take the answer choice** and negate it logically. Turn \"all\" into \"not all\" (not \"none\"). Turn \"some\" into \"none.\" Turn \"cannot\" into \"can.\" Turn \"less likely\" into \"not less likely\" (i.e., equally or more likely).",
            "**Insert the negated statement** into the argument as if it were a new premise.",
            "**Ask: Does the argument still work?** If the negated statement makes the conclusion impossible or unsupportable, the original answer is a necessary assumption. If the argument can survive the negated statement, the original answer is not necessary."
          ],
          "ordered": true
        },
        {
          "type": "callout",
          "title": "Common Negation Mistakes",
          "variant": "tip",
          "text": "**\"All\" negates to \"not all\" — NOT to \"none.\"** This is the most common error. \"All dogs are friendly\" negates to \"Not all dogs are friendly\" (at least one isn't), NOT to \"No dogs are friendly.\"\n\n**\"Some\" negates to \"none.\"** \"Some students passed\" negates to \"No students passed.\"\n\n**\"Could\" negates to \"could not.\"** \"Morale could lead to production\" negates to \"Morale could NOT lead to production.\"\n\n**Modest language is still powerful.** Even a carefully worded assumption like \"X is less likely\" destroys the argument when negated to \"X is NOT less likely.\""
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Complete NA Patterns Table"
        },
        {
          "type": "paragraph",
          "text": "Below is a comprehensive table of all ten Necessary Assumption patterns covered in this module. For each pattern, the table shows the core gap structure, how to recognize it, and what the correct answer typically looks like."
        },
        {
          "type": "table",
          "headers": [
            "Pattern",
            "Core Gap",
            "Recognition Signal",
            "Correct Answer Template"
          ],
          "rows": [
            [
              "**Key Ingredient**",
              "Evidence shows Plan → Intermediate Effect; conclusion claims Plan → Ultimate Goal",
              "Two different concepts in evidence vs. conclusion (morale vs. production)",
              "\"The intermediate effect *could contribute to* the ultimate goal\""
            ],
            [
              "**Definitional Gap**",
              "Author treats Category B as incompatible with Standard A without explanation",
              "Two terms used as if equivalent or opposed without stating the connection",
              "\"Being [Category B] means not being [Standard A]\""
            ],
            [
              "**Only Way**",
              "Author assumes the recommended approach is the sole path to the goal",
              "\"Should do X to achieve Y\" without ruling out alternatives",
              "\"No alternative approach can achieve the same goal\""
            ],
            [
              "**Closed Universe**",
              "Author draws a conclusion about a group using evidence from only a subset",
              "Evidence about one population applied to a broader or different population",
              "\"The subset is representative of / applies to the broader group\""
            ],
            [
              "**Source Fallacy**",
              "Author dismisses arguments based on the source's identity or motive, not the content",
              "Attacks the arguer's bias, interest, or motive instead of the argument itself",
              "\"Arguments from biased sources are not good arguments\""
            ],
            [
              "**False Dichotomy**",
              "Author considers only two extreme outcomes, ignoring the middle ground",
              "\"If X... if Y...\" with no consideration of intermediate possibilities",
              "\"The only possible outcomes are X and Y\" (no middle ground)"
            ],
            [
              "**Complete Knowledge**",
              "Author treats a limited evidence set (\"known,\" \"documented\") as the complete picture",
              "Qualifiers like \"known to be,\" \"documented,\" \"on record\" in the evidence; absolute conclusion",
              "\"The known sample is complete / fully representative\""
            ],
            [
              "**Forced Choice (Advanced)**",
              "Author sorts something into one of two categories using an unstated incompatibility rule",
              "Dichotomy with a sorting criterion: \"Because X has trait C, it must be in Box A, not Box B\"",
              "\"Trait C is incompatible with Box B\""
            ],
            [
              "**Blocking Third Party**",
              "Author refutes a specific relationship but draws a general conclusion",
              "\"No obligation to X → no obligation at all\" (ignoring Y, Z)",
              "\"No other entity/source could support the general claim\""
            ],
            [
              "**Behavioral Link**",
              "Author claims a mindset prevents a necessary behavior without connecting the two",
              "Principle attacked as \"bad\" because it supposedly blocks a required action",
              "\"People with [mindset] are less likely to perform [behavior]\""
            ],
            [
              "**Definitional Standard**",
              "Author applies a rigid, unstated definition to declare something a failure based on one flaw",
              "Evaluative verdict (\"not successful\") based on a single risk or downside",
              "\"No [successful/effective] X ever has [the cited flaw]\""
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Necessary Assumption vs. Sufficient Assumption"
        },
        {
          "type": "paragraph",
          "text": "NA and SA questions both ask about assumptions, but they test fundamentally different things. Confusing them is one of the most common errors on the LSAT."
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "Necessary Assumption (NA)",
            "Sufficient Assumption (SA)"
          ],
          "rows": [
            [
              "**What it asks**",
              "What must the author believe for the argument to have *any* chance?",
              "What single statement, if true, would *guarantee* the conclusion?"
            ],
            [
              "**Strength**",
              "Modest — often uses \"could,\" \"can,\" \"is possible,\" \"less likely\"",
              "Strong — often uses \"all,\" \"every,\" \"must,\" \"always\""
            ],
            [
              "**Relationship to conclusion**",
              "Necessary but not sufficient; the argument might still fail even with it",
              "Sufficient; the argument is fully proven if this is true"
            ],
            [
              "**The Negation Test**",
              "✓ Use this. Negate the answer; if the argument is destroyed, it's correct.",
              "✗ Do NOT use the Negation Test for SA questions."
            ],
            [
              "**The Sufficiency Test**",
              "✗ Do NOT expect NA answers to prove the conclusion.",
              "✓ If the answer proves the conclusion, it's correct."
            ],
            [
              "**Common trap**",
              "Answer is too strong (would be sufficient, not just necessary)",
              "Answer is too weak (would be necessary, not sufficient)"
            ],
            [
              "**Analogy**",
              "Oxygen is *necessary* for fire (but not sufficient — you also need fuel and heat)",
              "A lit match on dry kindling is *sufficient* for fire (it guarantees fire)"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "The Strength Spectrum",
          "variant": "tip",
          "text": "Think of assumptions on a spectrum from weakest to strongest:\n\n**Too Weak** ← Necessary Assumption → **Just Right** ← Sufficient Assumption → **Too Strong**\n\nNA answers are often *surprisingly modest*. If an answer choice feels like it \"proves\" the conclusion, it's probably too strong for an NA question (it might be an SA answer instead). NA answers only need to be *necessary* — they need to be true for the argument to have any chance, but they don't need to guarantee the outcome."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Common Traps in NA Questions"
        },
        {
          "type": "paragraph",
          "text": "The LSAT uses several recurring trap patterns to lure test-takers away from the correct answer. Recognizing these traps is just as important as recognizing the correct pattern."
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Trap",
            "text": "How It Works"
          },
          "items": [
            {
              "title": "1. The Mistaken Reversal",
              "text": "The argument states \"If A, then B.\" The trap answer states \"If B, then A.\" This reverses the logical direction. Example: The argument says \"Happy → Pursuing Excellence.\" The trap says \"Pursuing Excellence → Happy.\" These are logically different statements, and the reversed version is not required.\n\n**How to avoid:** Always check the direction of the conditional. The correct answer will flow in the same direction as the argument's logic, not in reverse.",
              "badge": "Watch Out",
              "badgeColor": "red"
            },
            {
              "title": "2. The Too-Strong Answer",
              "text": "The answer choice would, if true, *guarantee* the conclusion rather than merely being required for it. NA answers are typically modest in their claims. If an answer uses words like \"always,\" \"must,\" \"will definitely,\" or \"guarantees,\" it's likely too strong.\n\n**How to avoid:** Apply the Negation Test. Even a modest-sounding answer will destroy the argument when negated. Strength doesn't determine correctness — necessity does.",
              "badge": "Watch Out",
              "badgeColor": "red"
            },
            {
              "title": "3. The Right Topic, Wrong Gap",
              "text": "The answer addresses the right subject matter but fills a *different* gap than the one in the argument. It may explain *why* something is true (a cause) when the argument needs to establish *that* something is true (the connection). Example: Explaining *why* competitors are biased (Trap A) vs. stating *that* biased arguments are bad (Correct E).\n\n**How to avoid:** Pre-phrase the specific gap before reading the choices. The correct answer must bridge the *exact* gap you identified.",
              "badge": "Watch Out",
              "badgeColor": "red"
            },
            {
              "title": "4. The Out-of-Scope Concept",
              "text": "The answer introduces a concept or term that never appears in the argument. Even if the concept seems related, it cannot be a necessary assumption because the argument doesn't rely on it. Example: An argument about satisfaction and excellence is not about \"confidence\" or \"pain.\"\n\n**How to avoid:** Check every key term in the answer against the argument. If the answer uses a concept the argument never mentioned, it's likely out of scope.",
              "badge": "Watch Out",
              "badgeColor": "red"
            },
            {
              "title": "5. The Explains-the-Cause Trap",
              "text": "The answer explains *why* a premise is true rather than providing the *unstated link* between the premise and the conclusion. The argument doesn't need to justify its premises — it needs to connect them to the conclusion.\n\n**How to avoid:** Remember that necessary assumptions bridge the gap between *existing* premises and the conclusion. They don't explain why premises are true — they connect premises to conclusions.",
              "badge": "Watch Out",
              "badgeColor": "red"
            },
            {
              "title": "6. The Comparative Trap",
              "text": "The argument makes an absolute judgment (\"not successful\"), but the trap answer introduces a comparison (\"less successful than X\"). Absolute conclusions don't require comparative premises. Something can be \"not successful\" even if nothing else is better.\n\n**How to avoid:** Match the type of claim. If the conclusion is absolute, the assumption should be absolute. If the conclusion is comparative, the assumption should be comparative.",
              "badge": "Watch Out",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Test Day Checklist"
        },
        {
          "type": "paragraph",
          "text": "Use this quick-reference checklist during practice and on test day:"
        },
        {
          "type": "list",
          "items": [
            "**Read the question stem first.** Confirm it's a Necessary Assumption question. Look for: \"depends on assuming,\" \"assumption required,\" \"argument relies on,\" \"presupposes.\"",
            "**Break down the argument.** Find the conclusion (look for \"therefore,\" \"thus,\" \"so,\" \"hence,\" \"consequently\") and the key premises. Note the specific terms used in each.",
            "**Identify the gap.** Compare the terms in the evidence to the terms in the conclusion. Where does the author make an unstated leap? What pattern does the gap match?",
            "**Pre-phrase.** Articulate the assumption in your own words before looking at the choices. This anchors your evaluation and prevents traps from pulling you off course.",
            "**Evaluate choices using the Negation Test.** For any answer you're considering, negate it. If the argument is destroyed, it's correct. If the argument survives, eliminate it.",
            "**Watch the strength of the answer.** NA answers are often surprisingly modest. Don't reject an answer just because it sounds weak — if its negation destroys the argument, it's correct.",
            "**Check for traps.** Before confirming your answer, ask: Is this a Mistaken Reversal? Is it too strong? Does it introduce an out-of-scope concept? Does it explain a cause rather than bridge a gap?",
            "**Confirm with the Negation Test one final time.** Negate your chosen answer and verify the argument collapses. This is your final safeguard against errors."
          ],
          "ordered": true
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "title": "Final Review",
          "variant": "summary",
          "text": "Necessary Assumption questions test one core skill: identifying the unstated belief that holds an argument together. The author's conclusion relies on a premise they never explicitly state. Your job is to find it.\n\n**Remember the fundamentals:**\n• A necessary assumption is required — without it, the argument falls apart.\n• It does NOT need to prove the conclusion — it only needs to be true for the conclusion to have a chance.\n• The Negation Test is your most reliable tool — if negating an answer destroys the argument, that answer is correct.\n• Match the gap precisely — the correct answer bridges the exact logical leap the author makes, nothing more and nothing less.\n\nMaster the ten patterns, internalize the 4-step method, and practice the Negation Test until it becomes automatic. Necessary Assumption is one of the most frequently tested question types on the LSAT, and these skills will serve you across every Logical Reasoning section."
        }
      ],
    },
    cheat: {
      label: 'Cheat Sheet',
      content: [
        {
          type: 'callout',
          variant: 'summary',
          title: 'The Method',
          text: '**Break Down \u2192 Force Standard \u2192 Diagnose Family \u2192 Prephrase Minimum \u2192 Negate & Verify**',
        },
        { type: 'h3', text: 'Decision Rules' },
        {
          type: 'table',
          headers: ['If You See', 'Do This'],
          rows: [
            ['Concept link (new term in conclusion)', 'Bridge with a conditional or equivalence that closes the gap'],
            ['Exclusivity (one factor assumed sole cause)', 'State the factor is the only effective path'],
            ['Binary assumption (two exhaustive categories)', 'Confirm the categories cover all possibilities'],
            ['Chain of logic (multi-step inference)', 'Supply the missing link in the chain'],
            ['General principle (broad rule applied to case)', 'Provide the rule that makes the specific conclusion follow'],
            ['Normative bridge (fact-to-value leap)', 'State the evaluative premise connecting facts to the value claim'],
          ],
        },
        { type: 'h3', text: 'The Negation Test' },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Negate your finalist and re-read the argument. If the conclusion no longer follows from the premises, the original answer was sufficient. If the conclusion still holds, keep looking.',
        },
        { type: 'h3', text: 'Traps' },
        {
          type: 'table',
          headers: ['Trap', 'How to Spot'],
          rows: [
            ['Necessary-only answer', 'Required but does not fully close the gap — conclusion still has wiggle room'],
            ['Helpful strengthener', 'Makes conclusion more plausible without guaranteeing it'],
            ['Premise repeater', 'Restates what the stimulus already said — no new logical work'],
            ['Out-of-scope concept', 'Introduces a topic the argument never relied on'],
            ['Wrong direction', 'Uses the right terms but links them backwards'],
          ],
        },
        { type: 'h3', text: 'Quick Distinctions' },
        {
          type: 'table',
          headers: ['SA vs.', 'Key Difference'],
          rows: [
            ['vs. Necessary Assumption', 'NA asks what the argument *needs*; SA asks what would *guarantee* the conclusion'],
            ['vs. Strengthener', 'Strengthen asks what *helps*; SA asks what *completes* the logic with no exceptions'],
          ],
        },
        { type: 'h3', text: 'Stems' },
        {
          type: 'list',
          items: [
            '"The conclusion follows logically if which of the following is assumed?"',
            '"The argument is properly drawn if which of the following is true?"',
            '"Which of the following, if assumed, enables the conclusion to be properly inferred?"',
            '"The conclusion above is properly drawn if which of the following is assumed?"',
            '"Which of the following, if true, would make the argument logically valid?"',
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          title: 'The One Thing',
          text: '**The right answer, combined with the premises, makes the conclusion logically inescapable \u2014 no exceptions, no wiggle room.**',
        },
      ],
    },
  },
};
