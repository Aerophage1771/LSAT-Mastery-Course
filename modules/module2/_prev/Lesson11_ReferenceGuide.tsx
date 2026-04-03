import { Lesson } from '../../types';

export const Lesson11_ReferenceGuide: Lesson = {
  id: '2-11',
  title: 'Reference Guide',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'MODULE 2: Main Conclusion — Complete Reference' },
    {
      type: 'paragraph',
      text: 'A condensed reference for every concept, method, trap, and pattern in Main Conclusion questions. Bookmark this for review before test day.',
    },
    { type: 'hr' },

    { type: 'h3', text: 'The Goal' },
    {
      type: 'paragraph',
      text: "Your one and only goal is to identify the single claim the author's entire argument is designed to prove. It's the statement that **receives support** from the other statements and **does not support** any other statement in the argument. Everything else — premises, intermediate conclusions, background info — exists to prove this one point.",
    },
    { type: 'hr' },

    { type: 'h3', text: 'The 5-Step Method' },
    {
      type: 'process',
      steps: [
        '**Identify Task & Read for Structure:** Confirm the question asks for the main conclusion. Read the stimulus to understand the logical relationships between sentences. Ask: "What is the author ultimately trying to prove?"',
        '**Spot Indicator Words:** Hunt for conclusion indicators (*therefore, thus, so, hence, consequently*), premise indicators (*because, since, for, after all*), and pivot words (*but, however, yet, although*). These are the structural signposts.',
        '**Pinpoint & Confirm with the "Why Test":** Isolate your candidate conclusion. Ask: "Why should I believe this?" If the other sentences in the stimulus answer that question, you\'ve found the conclusion. If asking "Why?" gets no answer, it\'s a premise.',
        '**Prephrase:** State the main point in your own simple terms *before* looking at the answer choices. This prevents you from being seduced by tempting wrong answers.',
        '**Evaluate & Eliminate:** Find the option that matches your prephrase. Be ruthless: check scope, certainty, subject, and logical direction against the stimulus. Eliminate choices that fall into known traps.',
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Conclusion Types: Complete Reference' },
    {
      type: 'table',
      headers: ['Type', 'Frequency', 'Definition', 'Indicator Words / Clues'],
      rows: [
        [
          '**The Rebuttal**',
          '~35%',
          'Rejects or critiques a claim held by others',
          '*However, But, Yet, Although* + *mistaken, unfounded, dubious, unconvincing, is not the case*',
        ],
        [
          '**The Prescription**',
          '~25%',
          'Makes a value judgment or recommends a course of action',
          '*should, must, needs to, ought to, is unfair, is unwise, it is better that, pointless*',
        ],
        [
          '**The Explanation**',
          '~20%',
          'Proposes a cause or reason for a known phenomenon',
          '*The reason for this is, X is caused by, This is explained by, is probably due to*',
        ],
        [
          '**The Prediction / Factual Claim**',
          '~15%',
          'States a descriptive fact or predicts a future outcome',
          '*will, is likely to, can be expected to, evidence suggests*',
        ],
        [
          '**The Conditional Claim**',
          '~5%',
          'States a relationship between conditions',
          '*only if, unless, whenever, if... then, is possible only when*',
        ],
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Answer Translation Quick Reference' },
    {
      type: 'table',
      headers: ['Translation Move', 'Usually Fine', 'Usually Wrong'],
      rows: [
        [
          '**Referential expansion**',
          'The answer spells out what "this claim," "that view," or "such a policy" refers to.',
          'The answer names the wrong claim, speaker, or object.',
        ],
        [
          '**Implicit → explicit**',
          'The answer states clearly what the conclusion only implied.',
          'The answer adds a new premise or stronger commitment.',
        ],
        [
          '**Comparative rewrite**',
          '"More likely A than B" becomes "Less likely B than A."',
          'The baseline, direction, or certainty changes.',
        ],
        [
          '**Rule → application**',
          'A specific case-level judgment is stated more directly than in the stimulus.',
          'The answer quotes the general rule instead of the application the author was proving.',
        ],
        [
          '**Best-supported paraphrase**',
          'The answer is the closest faithful restatement once traps are eliminated.',
          'You pick the most familiar wording instead of the most accurate logic.',
        ],
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Indicator Word Quick Reference' },
    {
      type: 'table',
      headers: ['Category', 'Words & Phrases'],
      rows: [
        [
          '**Conclusion**',
          '*therefore, thus, so, hence, consequently, it follows that, this shows that, we can conclude, this means that*',
        ],
        [
          '**Premise**',
          '*because, since, for, after all, given that, as evidenced by, due to, on the grounds that, the evidence is that*',
        ],
        [
          '**Pivot / Contrast**',
          '*but, however, yet, although, while, nevertheless, despite, on the other hand, nonetheless, even so*',
        ],
        ['**Concession**', '*although, while it is true that, granted, admittedly, despite, even though, of course*'],
        [
          '**Background Principle**',
          '*it is a given that, it is well known, it is obvious, by definition, everyone agrees, it goes without saying*',
        ],
        [
          '**Causal / Explanation**',
          '*the reason is, this is because, is caused by, is explained by, due to, as a result of, probably a result of*',
        ],
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Common Argument Structures' },
    {
      type: 'breakdown',
      labels: { title: 'Pattern', text: 'Structure & How to Identify It' },
      colWidth: 'narrow',
      items: [
        {
          title: 'Simple Argument',
          text: 'Premise(s) → Main Conclusion. The most basic form — one or more facts directly supporting a single claim. Conclusion often follows \"therefore\" or \"thus.\"',
          badge: 'Most Common',
          badgeColor: 'indigo',
        },
        {
          title: 'Rebuttal',
          text: 'Opposing View → \"But/However\" → Author\'s Conclusion → Premise(s). The author presents someone else\'s position, pivots, and argues against it. The conclusion follows the pivot word.',
          badge: 'Very Common',
          badgeColor: 'indigo',
        },
        {
          title: 'Explanation',
          text: 'Phenomenon → Proposed Cause (Conclusion) → Mechanism (Premises). The author takes a known event and proposes why it occurred. The conclusion is the proposed cause; the premises describe the mechanism.',
          badge: 'Common',
          badgeColor: 'blue',
        },
        {
          title: 'Prescription',
          text: 'Problem / Context → Value Judgment or Recommendation (Conclusion) → Reasons. The author identifies an issue and recommends a course of action or makes a judgment. Look for \"should,\" \"must,\" \"is unfair.\"',
          badge: 'Common',
          badgeColor: 'blue',
        },
        {
          title: 'Chain Argument',
          text: 'Premise → IC → Main Conclusion. A multi-step argument where the intermediate conclusion acts as a bridge. The IC receives support AND gives support; the main conclusion only receives.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
        {
          title: 'Concession + Conclusion',
          text: '\"Although [granted point]... [pivot]... Main Conclusion.\" The author acknowledges a counterpoint then overrides it. The conclusion comes after the pivot.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
        {
          title: 'Rule → Application',
          text: 'A general principle or accepted rule is introduced first, then applied to a specific case. The conclusion is usually the case-specific result, not the broad rule.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Prediction / Factual Claim Notes' },
    {
      type: 'breakdown',
      labels: { title: 'Subtype', text: 'How It Usually Behaves' },
      items: [
        {
          title: 'Trend → Prediction',
          text: 'The premises describe a pattern, and the conclusion projects that pattern forward. Expect answers to make the future comparison more explicit than the stimulus did.',
          badge: 'Common',
          badgeColor: 'blue',
        },
        {
          title: 'Evidence → Factual Judgment',
          text: 'The conclusion is a descriptive claim about what is true now. Correct answers often translate vague references into named claims or entities.',
          badge: 'Common',
          badgeColor: 'blue',
        },
        {
          title: 'Comparative Judgment',
          text: 'The conclusion weighs one option, explanation, or outcome against another. Correct answers may reverse the comparison while preserving the exact logic.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
        {
          title: 'Rule → Application',
          text: 'The author uses a general rule as support but argues for a specific case-level result. Trap answers quote the rule or generalize the application into a broader principle.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Common Traps: Complete Breakdown' },
    {
      type: 'breakdown',
      labels: { title: 'Trap', text: 'How It Works & How to Avoid It' },
      items: [
        {
          title: 'The Premise / Background Info',
          text: "The answer is a factually correct statement from the stimulus that serves as **evidence or context**, not the main point. It's tempting because it's true.\n\n**Avoid it:** Apply the Why Test. If the statement provides a *reason* for another claim, it's a premise. If other statements give *reasons for it*, it's the conclusion.",
          badge: 'Most Common',
          badgeColor: 'red',
        },
        {
          title: 'The Intermediate Conclusion',
          text: 'The answer is a sub-conclusion supported by evidence but then used to support the main conclusion. It\'s a stepping-stone, not the destination. Often placed last with \"Thus\" or \"Therefore.\"\n\n**Avoid it:** Ask: \"Does this sentence then support an even broader claim?\" If yes, it\'s an IC.',
          badge: 'Very Common',
          badgeColor: 'red',
        },
        {
          title: 'The Opposing Viewpoint',
          text: 'The answer states the opinion the author is arguing **against**. In a rebuttal structure, the opposing view appears before the pivot word.\n\n**Avoid it:** Track who is speaking. Phrases like \"Some argue,\" \"Critics claim,\" or \"It is believed\" introduce the opposing side.',
          badge: 'Common',
          badgeColor: 'red',
        },
        {
          title: 'The Certainty Distortion',
          text: 'The answer is very close to the conclusion but subtly alters the certainty level. \"Is likely\" becomes \"is certain.\" \"There is little doubt\" becomes \"could have.\"\n\n**Avoid it:** Match the author\'s modal verbs exactly. Compare \"will\" vs. \"might,\" \"likely\" vs. \"certainly,\" \"little doubt\" vs. \"could.\"',
          badge: 'Common',
          badgeColor: 'red',
        },
        {
          title: 'The Conditional Paraphrase',
          text: 'The answer converts a specific judgment (\"This case is coincidental\") into a general conditional rule (\"If X, then coincidence is likely\"). It accurately describes the *reasoning* but overstates the *scope* of the conclusion.\n\n**Avoid it:** Check if the answer uses \"If... then...\" when the author made a categorical claim. Specific language (\"Novel X\") vs. general language (\"any novel\") is your clue.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
        {
          title: 'The Logical Reversal',
          text: 'The answer incorrectly swaps sufficient and necessary conditions. \"This will enable\" becomes \"One must\" — reversing the direction of the logical claim.\n\n**Avoid it:** Check: Does \"X enables Y\" become \"Y requires X\"? If so, the direction is reversed.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
        {
          title: 'The Background Principle',
          text: 'The answer quotes a general rule or definition stated at the beginning of the stimulus. Phrases like \"It is a given\" or \"It is well known\" mark it as a foundational premise, not the conclusion.\n\n**Avoid it:** If the statement is introduced as common knowledge or a given, the author is *using* it, not *proving* it.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
        {
          title: 'The Near-Paraphrase That Overcommits',
          text: 'The answer captures the gist of the conclusion but sharpens it too much. It turns an implicit point into a stronger one, or turns a likely prediction into a certainty.\n\n**Avoid it:** Ask whether the answer merely clarifies the conclusion or actually strengthens it. Clarification is fine. Extra commitment is not.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'The Why Test: Quick Reference' },
    { type: 'paragraph', text: 'The single most reliable technique for identifying the main conclusion:' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Pick a candidate conclusion.',
        'Ask: **"Why should I believe this?"**',
        'If the other sentences answer the \"Why?\", you have found the conclusion.',
        'If asking \"Why?\" gets no answer from the argument, the statement is a premise.',
        'If two candidates both pass the Why Test, the one that *also* supports the other is the IC. The one that only *receives* support is the main conclusion.',
      ],
    },
    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Test Day Checklist',
      text: "Before selecting your answer on any Main Conclusion question:\n\n**1.** Can you state the main conclusion in your own words?\n**2.** Did you apply the Why Test to confirm your candidate?\n**3.** Does your chosen answer match the conclusion's **scope** (specific vs. general)?\n**4.** Does your chosen answer match the conclusion's **certainty** (likely vs. certain vs. possible)?\n**5.** Does your chosen answer preserve the **logical direction** (sufficient vs. necessary)?\n**6.** Have you eliminated choices that are premises, ICs, opposing views, or background principles?\n**7.** If two choices seem close, have you identified the specific feature that distinguishes them?",
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "MODULE 2: Main Conclusion — Complete Reference"
        },
        {
          "type": "paragraph",
          "text": "A condensed reference for every concept, method, trap, and pattern in Main Conclusion questions. Bookmark this for review before test day."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "The Goal"
        },
        {
          "type": "paragraph",
          "text": "Your one and only goal is to identify the single claim the author's entire argument is designed to prove. It's the statement that **receives support** from the other statements and **does not support** any other statement in the argument. Everything else — premises, intermediate conclusions, background info — exists to prove this one point."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "The {{~5~}}-Step Method {{!Lesson 2-2 teaches a 6-step method (Confirm and Read are separate steps). Either note the merge explicitly or align the numbering across lessons.!}}"
        },
        {
          "type": "process",
          "steps": [
            "**Identify Task & Read for Structure:** Confirm the question asks for the main conclusion. Read the stimulus to understand the logical relationships between sentences. Ask: \"What is the author ultimately trying to prove?\"",
            "**Spot Indicator Words:** Hunt for conclusion indicators (*therefore, thus, so, hence, consequently*), premise indicators (*because, since, for, after all*), and pivot words (*but, however, yet, although*). These are the structural signposts.",
            "**Pinpoint & Confirm with the \"Why Test\":** Isolate your candidate conclusion. Ask: \"Why should I believe this?\" If the other sentences in the stimulus answer that question, you've found the conclusion. If asking \"Why?\" gets no answer, it's a premise.",
            "**Prephrase:** State the main point in your own simple terms *before* looking at the answer choices. This prevents you from being seduced by tempting wrong answers.",
            "**Evaluate & Eliminate:** Find the option that matches your prephrase. Be ruthless: check scope, certainty, subject, and logical direction against the stimulus. Eliminate choices that fall into known traps."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Conclusion Types: Complete Reference"
        },
        {
          "type": "table",
          "headers": [
            "Type",
            "Frequency",
            "Definition",
            "Indicator Words / Clues"
          ],
          "rows": [
            [
              "**The Rebuttal**",
              "{{~~35%~}} {{!Lessons 2-1 and 2-3 both say ~45%. Reconcile to one authoritative frequency across all lessons.!}}",
              "Rejects or critiques a claim held by others",
              "*However, But, Yet, Although* + *mistaken, unfounded, dubious, unconvincing, is not the case*"
            ],
            [
              "**The Prescription**",
              "~25%",
              "Makes a value judgment or recommends a course of action",
              "*should, must, needs to, ought to, is unfair, is unwise, it is better that, pointless*"
            ],
            [
              "**The Explanation**",
              "~20%",
              "Proposes a cause or reason for a known phenomenon",
              "*The reason for this is, X is caused by, This is explained by, is probably due to*"
            ],
            [
              "**The Prediction / Factual Claim**",
              "~15%",
              "States a descriptive fact or predicts a future outcome",
              "*will, is likely to, can be expected to, evidence suggests*"
            ],
            [
              "**The Conditional Claim**",
              "~5%",
              "States a relationship between conditions",
              "*only if, unless, whenever, if... then, is possible only when*"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Indicator Word Quick Reference"
        },
        {
          "type": "table",
          "headers": [
            "Category",
            "Words & Phrases"
          ],
          "rows": [
            [
              "**Conclusion**",
              "*therefore, thus, so, hence, consequently, it follows that, this shows that, we can conclude, this means that*"
            ],
            [
              "**Premise**",
              "*because, since, for, after all, given that, as evidenced by, due to, on the grounds that, the evidence is that*"
            ],
            [
              "**Pivot / Contrast**",
              "*but, however, yet, although, while, nevertheless, despite, on the other hand, nonetheless, even so*"
            ],
            [
              "**Concession**",
              "*although, while it is true that, granted, admittedly, despite, even though, of course*"
            ],
            [
              "**Background Principle**",
              "*it is a given that, it is well known, it is obvious, by definition, everyone agrees, it goes without saying*"
            ],
            [
              "**Causal / Explanation**",
              "*the reason is, this is because, is caused by, is explained by, due to, as a result of, probably a result of*"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Common Argument Structures"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Pattern",
            "text": "Structure & How to Identify It"
          },
          "colWidth": "narrow",
          "items": [
            {
              "title": "Simple Argument",
              "text": "Premise(s) → Main Conclusion. The most basic form — one or more facts directly supporting a single claim. Conclusion often follows \"therefore\" or \"thus.\"",
              "badge": "Most Common",
              "badgeColor": "indigo"
            },
            {
              "title": "Rebuttal",
              "text": "Opposing View → \"But/However\" → Author's Conclusion → Premise(s). The author presents someone else's position, pivots, and argues against it. The conclusion follows the pivot word.",
              "badge": "Very Common",
              "badgeColor": "indigo"
            },
            {
              "title": "Explanation",
              "text": "Phenomenon → Proposed Cause (Conclusion) → Mechanism (Premises). The author takes a known event and proposes why it occurred. The conclusion is the proposed cause; the premises describe the mechanism.",
              "badge": "Common",
              "badgeColor": "blue"
            },
            {
              "title": "Prescription",
              "text": "Problem / Context → Value Judgment or Recommendation (Conclusion) → Reasons. The author identifies an issue and recommends a course of action or makes a judgment. Look for \"should,\" \"must,\" \"is unfair.\"",
              "badge": "Common",
              "badgeColor": "blue"
            },
            {
              "title": "Chain Argument",
              "text": "Premise → IC → Main Conclusion. A multi-step argument where the intermediate conclusion acts as a bridge. The IC receives support AND gives support; the main conclusion only receives.",
              "badge": "Moderate",
              "badgeColor": "slate"
            },
            {
              "title": "Concession + Conclusion",
              "text": "\"Although [granted point]... [pivot]... Main Conclusion.\" The author acknowledges a counterpoint then overrides it. The conclusion comes after the pivot.",
              "badge": "Moderate",
              "badgeColor": "slate"
            }
          ]
        },
        {
          "type": "diff-note",
          "text": "The content version of this reference includes a 'Rule to Application' pattern and 'Answer Translation Quick Reference' and 'Prediction/Factual Claim Notes' sections that are missing from this diff. Add these to bring the diff in line with the content array.",
          "variant": "add"
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Common Traps: Complete Breakdown"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Trap",
            "text": "How It Works & How to Avoid It"
          },
          "items": [
            {
              "title": "The Premise / Background Info",
              "text": "The answer is a factually correct statement from the stimulus that serves as **evidence or context**, not the main point. It's tempting because it's true.\n\n**Avoid it:** Apply the Why Test. If the statement provides a *reason* for another claim, it's a premise. If other statements give *reasons for it*, it's the conclusion.",
              "badge": "Most Common",
              "badgeColor": "red"
            },
            {
              "title": "The Intermediate Conclusion",
              "text": "The answer is a sub-conclusion supported by evidence but then used to support the main conclusion. It's a stepping-stone, not the destination. Often placed last with \"Thus\" or \"Therefore.\"\n\n**Avoid it:** Ask: \"Does this sentence then support an even broader claim?\" If yes, it's an IC.",
              "badge": "Very Common",
              "badgeColor": "red"
            },
            {
              "title": "The Opposing Viewpoint",
              "text": "The answer states the opinion the author is arguing **against**. In a rebuttal structure, the opposing view appears before the pivot word.\n\n**Avoid it:** Track who is speaking. Phrases like \"Some argue,\" \"Critics claim,\" or \"It is believed\" introduce the opposing side.",
              "badge": "Common",
              "badgeColor": "red"
            },
            {
              "title": "The Certainty Distortion",
              "text": "The answer is very close to the conclusion but subtly alters the certainty level. \"Is likely\" becomes \"is certain.\" \"There is little doubt\" becomes \"could have.\"\n\n**Avoid it:** Match the author's modal verbs exactly. Compare \"will\" vs. \"might,\" \"likely\" vs. \"certainly,\" \"little doubt\" vs. \"could.\"",
              "badge": "Common",
              "badgeColor": "red"
            },
            {
              "title": "The Conditional Paraphrase",
              "text": "The answer converts a specific judgment (\"This case is coincidental\") into a general conditional rule (\"If X, then coincidence is likely\"). It accurately describes the *reasoning* but overstates the *scope* of the conclusion.\n\n**Avoid it:** Check if the answer uses \"If... then...\" when the author made a categorical claim. Specific language (\"Novel X\") vs. general language (\"any novel\") is your clue.",
              "badge": "Moderate",
              "badgeColor": "slate"
            },
            {
              "title": "The Logical Reversal",
              "text": "The answer incorrectly swaps sufficient and necessary conditions. \"This will enable\" becomes \"One must\" — reversing the direction of the logical claim.\n\n**Avoid it:** Check: Does \"X enables Y\" become \"Y requires X\"? If so, the direction is reversed.",
              "badge": "Moderate",
              "badgeColor": "slate"
            },
            {
              "title": "The Background Principle",
              "text": "The answer quotes a general rule or definition stated at the beginning of the stimulus. Phrases like \"It is a given\" or \"It is well known\" mark it as a foundational premise, not the conclusion.\n\n**Avoid it:** If the statement is introduced as common knowledge or a given, the author is *using* it, not *proving* it.",
              "badge": "Moderate",
              "badgeColor": "slate"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "The Why Test: Quick Reference"
        },
        {
          "type": "paragraph",
          "text": "The single most reliable technique for identifying the main conclusion:"
        },
        {
          "type": "list",
          "items": [
            "Pick a candidate conclusion.",
            "Ask: **\"Why should I believe this?\"**",
            "If the other sentences answer the \"Why?\", you have found the conclusion.",
            "If asking \"Why?\" gets no answer from the argument, the statement is a premise.",
            "If two candidates both pass the Why Test, the one that *also* supports the other is the IC. The one that only *receives* support is the main conclusion."
          ],
          "ordered": true
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "title": "Test Day Checklist",
          "variant": "summary",
          "text": "Before selecting your answer on any Main Conclusion question:\n\n**1.** Can you state the main conclusion in your own words?\n**2.** Did you apply the Why Test to confirm your candidate?\n**3.** Does your chosen answer match the conclusion's **scope** (specific vs. general)?\n**4.** Does your chosen answer match the conclusion's **certainty** (likely vs. certain vs. possible)?\n**5.** Does your chosen answer preserve the **logical direction** (sufficient vs. necessary)?\n**6.** Have you eliminated choices that are premises, ICs, opposing views, or background principles?\n**7.** If two choices seem close, have you identified the specific feature that distinguishes them?"
        }
      ],
    },
    cheat: {
      label: 'Cheat Sheet',
      content: [
        { type: 'h3', text: 'Main Conclusion \u2014 Cheat Sheet' },
        {
          type: 'callout',
          variant: 'summary',
          title: 'The Method',
          text: '**Confirm \u2192 Structure \u2192 Indicators \u2192 Why Test \u2192 Prephrase \u2192 Eliminate**',
        },
        { type: 'h3', text: 'Decision Rules' },
        {
          type: 'table',
          headers: ['If You See', 'Do This'],
          rows: [
            ['Question asks for "main conclusion" or "main point"', 'Confirmed \u2014 find the final destination of the argument'],
            ['"But" / "However" + opposing view before it', 'Conclusion is almost always the sentence after the pivot'],
            ['"Should" / "must" / "ought to"', 'The prescriptive recommendation is likely the conclusion'],
            ['"Is best explained by" / "is caused by"', 'The proposed cause is the conclusion, not the phenomenon'],
            ['"Therefore" / "thus" + prediction', 'The forward-looking claim is the conclusion; data is the premise'],
            ['Two candidates both pass the Why Test', 'The one that also supports the other is the sub-conclusion \u2014 keep the other'],
          ],
        },
        { type: 'h3', text: 'Conclusion Types' },
        {
          type: 'table',
          headers: ['Type', 'Signal', 'Frequency'],
          rows: [
            ['**Rebuttal**', '*But, However, Yet* + rejection words', '~35%'],
            ['**Prescription**', '*should, must, ought to, unfair, unwise*', '~25%'],
            ['**Explanation**', '*is caused by, is explained by, the reason is*', '~20%'],
            ['**Prediction / Fact**', '*will, is likely to, evidence suggests*', '~15%'],
          ],
        },
        { type: 'h3', text: 'Traps' },
        {
          type: 'table',
          headers: ['Trap', 'How to Spot'],
          rows: [
            ['**Premise**', 'Answers "Why?" for another claim \u2014 it gives support, it does not receive it'],
            ['**Sub-conclusion**', 'Receives support AND gives support to a further claim \u2014 it is a stepping-stone'],
            ['**Opposing view**', 'Attributed to others ("Some argue," "Critics claim") \u2014 not the author\'s position'],
            ['**Too broad / distortion**', 'Changes scope, certainty, or subject beyond what the author committed to'],
            ['**Background principle**', 'Introduced as common knowledge ("It is well known") \u2014 the author uses it, not proves it'],
          ],
        },
        { type: 'h3', text: 'Stems' },
        {
          type: 'list',
          items: [
            '"Which one of the following most accurately expresses the main conclusion of the argument?"',
            '"Which one of the following most accurately states the main point of the argument?"',
            '"The overall conclusion of the argument is that..."',
            '"The argument is structured to lead to which one of the following conclusions?"',
            '"The main point of the argument is that..."',
            '"The argument\'s conclusion can most accurately be expressed as..."',
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          title: 'The One Thing',
          text: '**The main conclusion is the claim that everything else in the argument exists to support. Apply the Why Test: X because Y \u2014 X is the conclusion.**',
        },
      ],
    },
  },
};
