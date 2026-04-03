import { Lesson } from '../../types';

export const Lesson12_ReferenceGuide: Lesson = {
  id: '4-12',
  title: 'Reference Guide',
  questionPolicy: 'none',
  content: [
    { type: 'h1', text: 'MODULE 4: Parallel Reasoning Reference Guide' },
    {
      type: 'paragraph',
      text: 'A condensed reference for every concept, pattern, method, and trap in Parallel Reasoning questions. Print this or bookmark it for review before test day.',
    },
    { type: 'hr' },

    { type: 'h3', text: 'The Goal' },
    {
      type: 'paragraph',
      text: 'Your one and only goal is to **identify the abstract logical structure of the stimulus argument and find the one answer choice built from the exact same blueprint.** The topic is irrelevant; only the reasoning pattern matters.',
    },
    { type: 'hr' },

    { type: 'h3', text: 'The 4-Step Method' },
    {
      type: 'process',
      steps: [
        '**Identify the Structure:** Break the stimulus into conclusion + premises. Label each component. Determine whether the argument is **valid** or **flawed** (and if flawed, name the flaw).',
        '**Abstract the Pattern:** Replace content with variables. Write out the logical skeleton (e.g., "If A → B, A, therefore B"). Note the conclusion type, certainty level, and any logical connectors (AND, OR, IF-THEN).',
        '**Match by Elimination:** Scan answer choices starting with the **conclusion type and certainty**. Eliminate mismatches quickly — this is the fastest filter. Then check validity.',
        '**Verify the Final Match:** Confirm the remaining choice replicates every structural element: conclusion type, premise structure, validity, certainty, and logical connectors. Run the 6-Point Checklist if stuck between contenders.',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Quick-Scan Before Deep Reading',
      text: 'Conclusion kind -> logical force -> connector pattern -> validity. That sequence eliminates more wrong answers faster than reading each answer top to bottom.',
    },
    { type: 'hr' },

    { type: 'h3', text: 'When To Diagram' },
    {
      type: 'table',
      headers: ['Trigger', 'Why it matters'],
      rows: [
        ['Conditional chains or either/or structures', 'Direction and connector order are non-negotiable.'],
        ['Quantifiers or hybrid formal language', 'Small force changes like *all* vs. *most* break the match.'],
        ['Purely causal or analogy arguments', 'You can often stay verbal as long as you still track force and conclusion type.'],
      ],
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'Safe Variation vs. Fatal Variation',
      text: 'Safe variation: reordered premises, different nouns, synonym-level wording. Fatal variation: *all* becomes *most*, *must* becomes *probably*, an AND becomes an OR, or a valid chain becomes a flawed reversal.',
    },
    { type: 'hr' },

    { type: 'h3', text: 'Complete Argument Structure Table' },
    {
      type: 'table',
      headers: ['Pattern Name', 'Abstract Form', 'Example', 'Indicator Words'],
      rows: [
        [
          '**Modus Ponens**',
          'If A → B. A is true. ∴ B.',
          '"All employees must attend. Sarah is an employee. So Sarah must attend."',
          'if…then, since, therefore, all, every',
        ],
        [
          '**Modus Tollens**',
          'If A → B. Not B. ∴ Not A.',
          '"If it rained, the ground is wet. The ground is dry. So it didn\'t rain."',
          'if…then, but…not, so…cannot',
        ],
        [
          '**Conditional Chain**',
          'A → B, B → C. ∴ A → C.',
          '"If you study, you pass. If you pass, you graduate. So if you study, you graduate."',
          'if…then, any, all, every, leads to',
        ],
        [
          '**Eliminative (Disjunctive Syllogism)**',
          'A or B. Not A. ∴ B.',
          '"Either the butler or the gardener did it. Not the butler. So the gardener."',
          'either…or, the only options, must be one of',
        ],
        [
          '**Principle Application**',
          'General Rule + Specific Case → Judgment',
          '"Lying is wrong even if well-intentioned. The doctor lied to spare feelings. So the doctor was wrong."',
          'should, ought, justified, unwise, wrong',
        ],
        [
          '**Quantifier (Universal)**',
          'All A are B. All B are C. ∴ All A are C.',
          '"All cats are mammals. All mammals are warm-blooded. So all cats are warm-blooded."',
          'all, every, any, none, no',
        ],
        [
          '**Quantifier (Collapse)**',
          'All A are (B or C). All C are B. ∴ All A are B.',
          '"All students take math or science. All science students take math. So all students take math."',
          'all, every, either…or',
        ],
        [
          '**Double-Most Overlap**',
          'Most A are B. Most A are C. ∴ Some B are C.',
          '"Most employees drive. Most employees have parking passes. So some drivers have passes."',
          'most, at least some, therefore some',
        ],
        [
          '**Correlational Rule**',
          'More A → More B. X has more A than Y. ∴ X has more B than Y.',
          '"Older trees have more rings. Lou\'s tree is older. So Lou\'s tree has more rings."',
          'the more…the more, the higher…the lower',
        ],
        [
          '**Statistical Rebuttal**',
          'Most X are NOT Y. Few X seem Y. ∴ Unreasonable to conclude X→Y.',
          '"Most dreams don\'t predict events. So a few accurate dreams don\'t prove ESP."',
          'most, vast majority, unreasonable, unwarranted',
        ],
        [
          '**Causal Explanation**',
          'Effect observed. Cause proposed or challenged.',
          '"Sales rose after the ad campaign, so the campaign caused the increase."',
          'causes, leads to, is explained by, results from',
        ],
        [
          '**Analogy**',
          'X is like Y in relevant ways. Y has P. ∴ X has P.',
          '"Mars is like Earth in composition. Earth supports life. So Mars might support life."',
          'just as, similarly, like, in the same way',
        ],
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Quantifier Reference Table' },
    {
      type: 'table',
      headers: ['Quantifier', 'Strength', 'Meaning', 'Can Conclude'],
      rows: [
        ['**All / Every / Any**', '★★★★★', 'Every member of the group', 'Universal conclusions (All, Every)'],
        ['**Most**', '★★★★', 'More than half', 'Probabilistic conclusions; \"Most\" or weaker'],
        ['**Many / Several**', '★★★', 'A significant number (possibly < half)', '\"Many\" or weaker; NOT \"most\"'],
        ['**Some / A few**', '★★', 'At least one', '\"Some\" only; NOT \"many\" or \"most\"'],
        [
          '**Few**',
          '★',
          'A small number (implies most do NOT)',
          '\"Few\" or \"some\"; implies the opposite for the rest',
        ],
        ['**None / No**', '—', 'Zero members', 'Universal negative (No A are B)'],
      ],
    },
    {
      type: 'paragraph',
      text: '**Key Rule:** Quantifiers only travel **downward** in strength. \"All\" implies \"Most\" implies \"Some.\" But \"Some\" never implies \"Most\" or \"All.\"',
    },
    { type: 'hr' },

    { type: 'h3', text: 'The 6-Point Structural Checklist' },
    {
      type: 'paragraph',
      text: 'Use this checklist when stuck between two or more contenders after your initial scan:',
    },
    {
      type: 'process',
      title: 'Structural Matching Checklist',
      steps: [
        '**Validity Match:** Is the stimulus valid or flawed? Does the answer match? If flawed, is it the *same* flaw?',
        '**Conclusion Type:** Factual claim, recommendation, prediction, conditional, or negation?',
        '**Conclusion Certainty:** Must, probably, might, could, is not clear? The certainty level must match exactly.',
        '**Premise Count & Type:** Same number of premises? Same types (conditional, quantifier, factual, comparative)?',
        '**Logical Connectors:** AND, OR, IF-THEN, UNLESS, NOT — each must be replicated in the matching position.',
        "**Direction of Support:** Which premises support which conclusions? If there's an intermediate conclusion, the answer must replicate that flow.",
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Common Traps' },
    {
      type: 'breakdown',
      labels: { title: 'Trap', text: 'How to Avoid It' },
      items: [
        {
          title: 'The Invalid Mirror (Reversal/Negation)',
          text: 'The answer looks identical but commits a formal logic flaw (Mistaken Reversal or Negation) while the stimulus is valid, or vice versa.\n**Fix:** Always confirm the *direction* of the arrows in your diagram. Check validity independently for both arguments.',
          badge: 'Very Common',
          badgeColor: 'red',
        },
        {
          title: 'The Quantifier Mismatch',
          text: 'The structure is perfect, but the certainty is wrong. The stimulus uses "most" and the trap uses "some." The stimulus concludes "will" and the trap concludes "might."\n**Fix:** Make certainty and quantifiers a non-negotiable part of your blueprint. Use them as your first filter.',
          badge: 'Very Common',
          badgeColor: 'red',
        },
        {
          title: 'The AND/OR Swap',
          text: 'One logical operator is silently changed: "must order an entree AND a salad" becomes "must order an entree OR a salad." Everything else matches perfectly.\n**Fix:** Circle every AND, OR, and IF-THEN in both the stimulus and the answer. Compare them one by one.',
          badge: 'Common',
          badgeColor: 'red',
        },
        {
          title: 'The Structure Swap',
          text: "The answer uses all the right logical pieces but rearranges them: a premise becomes the conclusion, or premises are reordered so the chain breaks.\n**Fix:** Identify the conclusion independently in each argument using the Therefore Test. Don't assume it's in the same sentence position.",
          badge: 'Common',
          badgeColor: 'red',
        },
        {
          title: 'The Scope Shift',
          text: 'The argument\'s subject changes subtly between premises and conclusion (e.g., from "individual trees" to "tree species," or from "the next song" to "any song").\n**Fix:** Ensure the conclusion is about the exact same entity or group as the premises dictate.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
        {
          title: 'The Conclusion-Subject Swap',
          text: 'Premises match perfectly, but the conclusion is about a different subject — e.g., concludes about Group C when the stimulus concludes about Group A.\n**Fix:** Circle the subject of each conclusion and verify it occupies the same structural role.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
        {
          title: 'The Missing Step',
          text: 'The answer omits one step of a multi-step chain, making it structurally simpler than the stimulus.\n**Fix:** Count the logical steps (arrows) in both chains. They must match.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Shortcuts for Speed' },
    {
      type: 'paragraph',
      text: 'Parallel Reasoning questions are the longest on the LR section. These shortcuts can save 30–60 seconds per question:',
    },
    {
      type: 'breakdown',
      labels: { title: 'Shortcut', text: 'How It Works' },
      items: [
        {
          title: 'Conclusion-First Matching',
          text: '**Start with the conclusion type and certainty.** Scan the last sentence of each answer choice before reading the full argument. Eliminate any answer whose conclusion doesn\'t match the stimulus\'s type (e.g., recommendation vs. factual claim) or certainty (\"must\" vs. \"probably\"). This typically eliminates 2–3 answers in under 20 seconds.',
          badge: 'Fastest',
          badgeColor: 'green',
        },
        {
          title: 'Quantity-Word Checking',
          text: '**Circle quantifier words.** Quickly scan the stimulus and each answer for quantifier words (all, most, some, none, few). If the stimulus uses \"all\" and an answer uses \"most,\" eliminate immediately. This is a zero-analysis elimination — no need to read the full argument.',
          badge: 'Fast',
          badgeColor: 'green',
        },
        {
          title: 'Validity Shortcut',
          text: '**Check validity after conclusion.** If the stimulus is clearly valid, any flawed answer is wrong. If the stimulus is clearly flawed, any valid answer is wrong. This is often your second-fastest filter after conclusion type.',
          badge: 'Fast',
          badgeColor: 'green',
        },
        {
          title: 'Chain Length Count',
          text: '**Count variables and arrows.** If the stimulus has 4 distinct conditions linked in a chain, any answer with 3 conditions is structurally simpler and cannot match. Count before you diagram.',
          badge: 'Moderate',
          badgeColor: 'blue',
        },
        {
          title: 'Connector Scan',
          text: '**Scan for AND, OR, UNLESS, IF-THEN.** If the stimulus uses AND in Premise 1 and OR in Premise 2, any answer that reverses these (OR in Premise 1, AND in Premise 2) is wrong. This catches the AND/OR Swap trap instantly.',
          badge: 'Moderate',
          badgeColor: 'blue',
        },
      ],
    },
    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Test Day Checklist',
      text: 'Before selecting your answer on any Parallel Reasoning question:\n\n1. **Can you state the abstract blueprint** in your own words (e.g., "All A are B; X is A; therefore X is B")?\n2. **Does the conclusion match** in type, certainty, and subject?\n3. **Does the validity match** — both valid, or both flawed in the same way?\n4. **Do the logical connectors match** (AND, OR, IF-THEN, UNLESS, NOT) in the same structural positions?\n5. **Do the quantifiers match** (all, most, some, none) in both premises and conclusion?\n6. **Have you checked for the top 3 traps** — Invalid Mirror, Quantifier Mismatch, and AND/OR Swap?\n\n**Time Budget:** 2–2.5 minutes per question. If you can\'t create a clear blueprint within 45 seconds, consider skipping and returning.',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h1",
          "text": "MODULE 4: Parallel Reasoning Reference Guide"
        },
        {
          "type": "paragraph",
          "text": "A condensed reference for every concept, pattern, method, and trap in Parallel Reasoning questions. Print this or bookmark it for review before test day."
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
          "text": "Your one and only goal is to **identify the abstract logical structure of the stimulus argument and find the one answer choice built from the exact same blueprint.** The topic is irrelevant; only the reasoning pattern matters."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "The 4-Step Method"
        },
        {
          "type": "process",
          "steps": [
            "**Identify the Structure:** Break the stimulus into conclusion + premises. Label each component. Determine whether the argument is **valid** or **flawed** (and if flawed, name the flaw).",
            "**Abstract the Pattern:** Replace content with variables. Write out the logical skeleton (e.g., \"If A → B, A, therefore B\"). Note the conclusion type, certainty level, and any logical connectors (AND, OR, IF-THEN).",
            "**Match by Elimination:** Scan answer choices starting with the **conclusion type and certainty**. Eliminate mismatches quickly — this is the fastest filter. Then check validity.",
            "**Verify the Final Match:** Confirm the remaining choice replicates every structural element: conclusion type, premise structure, validity, certainty, and logical connectors. Run the 6-Point Checklist if stuck between contenders."
          ]
        },
        {
          "type": "hr"
        },
        { "type": "diff-note", "text": "{{+add+}} Insert the pattern frequency table from Lesson 4-3 here, before the structure table. Students need to know which patterns to prioritize on test day. A condensed version: Conditional Chain ~25%, Modus Ponens/Tollens ~20%, Eliminative ~15%, Principle Application ~12%, Quantifier ~10%, Other ~18%.", "variant": "comment" },
        {
          "type": "h3",
          "text": "Complete Argument Structure Table"
        },
        {
          "type": "table",
          "headers": [
            "Pattern Name",
            "Abstract Form",
            "Example",
            "Indicator Words"
          ],
          "rows": [
            [
              "**Modus Ponens**",
              "If A → B. A is true. ∴ B.",
              "\"All employees must attend. Sarah is an employee. So Sarah must attend.\"",
              "if…then, since, therefore, all, every"
            ],
            [
              "**Modus Tollens**",
              "If A → B. Not B. ∴ Not A.",
              "\"If it rained, the ground is wet. The ground is dry. So it didn't rain.\"",
              "if…then, but…not, so…cannot"
            ],
            [
              "**Conditional Chain**",
              "A → B, B → C. ∴ A → C.",
              "\"If you study, you pass. If you pass, you graduate. So if you study, you graduate.\"",
              "if…then, any, all, every, leads to"
            ],
            [
              "**Eliminative (Disjunctive Syllogism)**",
              "A or B. Not A. ∴ B.",
              "\"Either the butler or the gardener did it. Not the butler. So the gardener.\"",
              "either…or, the only options, must be one of"
            ],
            [
              "**Principle Application**",
              "General Rule + Specific Case → Judgment",
              "\"Lying is wrong even if well-intentioned. The doctor lied to spare feelings. So the doctor was wrong.\"",
              "should, ought, justified, unwise, wrong"
            ],
            [
              "**Quantifier (Universal)**",
              "All A are B. All B are C. ∴ All A are C.",
              "\"All cats are mammals. All mammals are warm-blooded. So all cats are warm-blooded.\"",
              "all, every, any, none, no"
            ],
            [
              "**Quantifier (Collapse)**",
              "All A are (B or C). All C are B. ∴ All A are B.",
              "\"All students take math or science. All science students take math. So all students take math.\"",
              "all, every, either…or"
            ],
            [
              "**Double-Most Overlap**",
              "Most A are B. Most A are C. ∴ Some B are C.",
              "\"Most employees drive. Most employees have parking passes. So some drivers have passes.\"",
              "most, at least some, therefore some"
            ],
            [
              "**Correlational Rule**",
              "More A → More B. X has more A than Y. ∴ X has more B than Y.",
              "\"Older trees have more rings. Lou's tree is older. So Lou's tree has more rings.\"",
              "the more…the more, the higher…the lower"
            ],
            [
              "**Statistical Rebuttal**",
              "Most X are NOT Y. Few X seem Y. ∴ Unreasonable to conclude X→Y.",
              "\"Most dreams don't predict events. So a few accurate dreams don't prove ESP.\"",
              "most, vast majority, unreasonable, unwarranted"
            ],
            [
              "**Causal Explanation**",
              "Effect observed. Cause proposed or challenged.",
              "\"Sales rose after the ad campaign, so the campaign caused the increase.\"",
              "causes, leads to, is explained by, results from"
            ],
            [
              "**Analogy**",
              "X is like Y in relevant ways. Y has P. ∴ X has P.",
              "\"Mars is like Earth in composition. Earth supports life. So Mars might support life.\"",
              "just as, similarly, like, in the same way"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Quantifier Reference Table"
        },
        {
          "type": "table",
          "headers": [
            "Quantifier",
            "Strength",
            "Meaning",
            "Can Conclude"
          ],
          "rows": [
            [
              "**All / Every / Any**",
              "★★★★★",
              "Every member of the group",
              "Universal conclusions (All, Every)"
            ],
            [
              "**Most**",
              "★★★★",
              "More than half",
              "Probabilistic conclusions; \"Most\" or weaker"
            ],
            [
              "**Many / Several**",
              "★★★",
              "A significant number (possibly < half)",
              "\"Many\" or weaker; NOT \"most\""
            ],
            [
              "**Some / A few**",
              "★★",
              "At least one",
              "\"Some\" only; NOT \"many\" or \"most\""
            ],
            [
              "**Few**",
              "★",
              "A small number (implies most do NOT)",
              "\"Few\" or \"some\"; implies the opposite for the rest"
            ],
            [
              "**None / No**",
              "—",
              "Zero members",
              "Universal negative (No A are B)"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "**Key Rule:** Quantifiers only travel **downward** in strength. \"All\" implies \"Most\" implies \"Some.\" But \"Some\" never implies \"Most\" or \"All.\""
        },
        { "type": "diff-note", "text": "{{+add+}} Insert a 'Conditional Translation Quick Reference' section here covering the 'unless', 'until', 'only if', and biconditional translations from Lesson 4-9. These are critical test-day tools that students need in a reference guide: 'unless X = if not X', 'only if X = then X', 'A if and only if B = A <-> B (both directions)'.", "variant": "comment" },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "The 6-Point Structural Checklist"
        },
        {
          "type": "paragraph",
          "text": "Use this checklist when stuck between two or more contenders after your initial scan:"
        },
        {
          "type": "process",
          "title": "Structural Matching Checklist",
          "steps": [
            "**Validity Match:** Is the stimulus valid or flawed? Does the answer match? If flawed, is it the *same* flaw?",
            "**Conclusion Type:** Factual claim, recommendation, prediction, conditional, or negation?",
            "**Conclusion Certainty:** Must, probably, might, could, is not clear? The certainty level must match exactly.",
            "**Premise Count & Type:** Same number of premises? Same types (conditional, quantifier, factual, comparative)?",
            "**Logical Connectors:** AND, OR, IF-THEN, UNLESS, NOT — each must be replicated in the matching position.",
            "**Direction of Support:** Which premises support which conclusions? If there's an intermediate conclusion, the answer must replicate that flow."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Common Traps"
        },
        { "type": "diff-note", "text": "{{!note!}} The 7 traps listed below are comprehensive but consider adding 'The Positive Selection Trap' from Lesson 4-5 (choosing an option because it passes a test vs. eliminating it because others fail). This is specifically relevant to eliminative argument questions and is not covered by any of the 7 existing trap entries.", "variant": "comment" },
        {
          "type": "breakdown",
          "labels": {
            "title": "Trap",
            "text": "How to Avoid It"
          },
          "items": [
            {
              "title": "The Invalid Mirror (Reversal/Negation)",
              "text": "The answer looks identical but commits a formal logic flaw (Mistaken Reversal or Negation) while the stimulus is valid, or vice versa.\n**Fix:** Always confirm the *direction* of the arrows in your diagram. Check validity independently for both arguments.",
              "badge": "Very Common",
              "badgeColor": "red"
            },
            {
              "title": "The Quantifier Mismatch",
              "text": "The structure is perfect, but the certainty is wrong. The stimulus uses \"most\" and the trap uses \"some.\" The stimulus concludes \"will\" and the trap concludes \"might.\"\n**Fix:** Make certainty and quantifiers a non-negotiable part of your blueprint. Use them as your first filter.",
              "badge": "Very Common",
              "badgeColor": "red"
            },
            {
              "title": "The AND/OR Swap",
              "text": "One logical operator is silently changed: \"must order an entree AND a salad\" becomes \"must order an entree OR a salad.\" Everything else matches perfectly.\n**Fix:** Circle every AND, OR, and IF-THEN in both the stimulus and the answer. Compare them one by one.",
              "badge": "Common",
              "badgeColor": "red"
            },
            {
              "title": "The Structure Swap",
              "text": "The answer uses all the right logical pieces but rearranges them: a premise becomes the conclusion, or premises are reordered so the chain breaks.\n**Fix:** Identify the conclusion independently in each argument using the Therefore Test. Don't assume it's in the same sentence position.",
              "badge": "Common",
              "badgeColor": "red"
            },
            {
              "title": "The Scope Shift",
              "text": "The argument's subject changes subtly between premises and conclusion (e.g., from \"individual trees\" to \"tree species,\" or from \"the next song\" to \"any song\").\n**Fix:** Ensure the conclusion is about the exact same entity or group as the premises dictate.",
              "badge": "Moderate",
              "badgeColor": "slate"
            },
            {
              "title": "The Conclusion-Subject Swap",
              "text": "Premises match perfectly, but the conclusion is about a different subject — e.g., concludes about Group C when the stimulus concludes about Group A.\n**Fix:** Circle the subject of each conclusion and verify it occupies the same structural role.",
              "badge": "Moderate",
              "badgeColor": "slate"
            },
            {
              "title": "The Missing Step",
              "text": "The answer omits one step of a multi-step chain, making it structurally simpler than the stimulus.\n**Fix:** Count the logical steps (arrows) in both chains. They must match.",
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
          "text": "Shortcuts for Speed"
        },
        {
          "type": "paragraph",
          "text": "Parallel Reasoning questions are the longest on the LR section. These shortcuts can save 30–60 seconds per question:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Shortcut",
            "text": "How It Works"
          },
          "items": [
            {
              "title": "Conclusion-First Matching",
              "text": "**Start with the conclusion type and certainty.** Scan the last sentence of each answer choice before reading the full argument. Eliminate any answer whose conclusion doesn't match the stimulus's type (e.g., recommendation vs. factual claim) or certainty (\"must\" vs. \"probably\"). This typically eliminates 2–3 answers in under 20 seconds.",
              "badge": "Fastest",
              "badgeColor": "green"
            },
            {
              "title": "Quantity-Word Checking",
              "text": "**Circle quantifier words.** Quickly scan the stimulus and each answer for quantifier words (all, most, some, none, few). If the stimulus uses \"all\" and an answer uses \"most,\" eliminate immediately. This is a zero-analysis elimination — no need to read the full argument.",
              "badge": "Fast",
              "badgeColor": "green"
            },
            {
              "title": "Validity Shortcut",
              "text": "**Check validity after conclusion.** If the stimulus is clearly valid, any flawed answer is wrong. If the stimulus is clearly flawed, any valid answer is wrong. This is often your second-fastest filter after conclusion type.",
              "badge": "Fast",
              "badgeColor": "green"
            },
            {
              "title": "Chain Length Count",
              "text": "**Count variables and arrows.** If the stimulus has 4 distinct conditions linked in a chain, any answer with 3 conditions is structurally simpler and cannot match. Count before you diagram.",
              "badge": "Moderate",
              "badgeColor": "blue"
            },
            {
              "title": "Connector Scan",
              "text": "**Scan for AND, OR, UNLESS, IF-THEN.** If the stimulus uses AND in Premise 1 and OR in Premise 2, any answer that reverses these (OR in Premise 1, AND in Premise 2) is wrong. This catches the AND/OR Swap trap instantly.",
              "badge": "Moderate",
              "badgeColor": "blue"
            }
          ]
        },
        {
          "type": "hr"
        },
        { "type": "diff-note", "text": "{{+add+}} Insert a 'Pattern Identification Decision Tree' section before the Test Day Checklist. Reproduce the Quick Identification Steps process block from Lesson 4-3 (check conditionals -> check disjunctions -> check quantifiers -> check evaluative language -> check causal -> check comparison -> check prediction). This is test-day-relevant and currently missing from the reference guide.", "variant": "comment" },
        {
          "type": "callout",
          "title": "Test Day Checklist",
          "variant": "summary",
          "text": "{{~change~}} Before selecting your answer on any Parallel Reasoning question:\n\n1. **Can you state the abstract blueprint** in your own words (e.g., \"All A are B; X is A; therefore X is B\")?\n2. **Does the conclusion match** in type, certainty, and subject?\n3. **Does the validity match** — both valid, or both flawed in the same way?\n4. **Do the logical connectors match** (AND, OR, IF-THEN, UNLESS, NOT) in the same structural positions?\n5. **Do the quantifiers match** (all, most, some, none) in both premises and conclusion?\n6. **Have you checked for the top 3 traps** — Invalid Mirror, Quantifier Mismatch, and AND/OR Swap?\n\n**Time Budget:** 2–2.5 minutes per question. If you can't create a clear blueprint within 45 seconds, consider skipping and returning. {{~Add item 7: 'Does the number and type of premises match? Count the logical steps in both arguments.' This catches the Missing Step trap which is listed above but not represented in the checklist.~}}"
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
          text: '**Identify Structure -> Abstract Pattern -> Match by Elimination -> Verify Final Match**',
        },
        { type: 'h3', text: 'Decision Rules' },
        {
          type: 'table',
          headers: ['If You See...', 'Do This'],
          rows: [
            ['Conditional chain (if A then B, if B then C)', 'Match chain length, direction, and conclusion type (conditional)'],
            ['Modus Ponens (if A->B, A, therefore B)', 'Match valid rule application to specific case'],
            ['Modus Tollens (if A->B, not B, therefore not A)', 'Match denial of the consequent yielding denial of the antecedent'],
            ['Eliminative (either A or B, not A, therefore B)', 'Match either/or + elimination + surviving option'],
            ['Principle application (rule + case -> judgment)', 'Match evaluative conclusion type (should, justified, unwise)'],
            ['Quantifier overlap (all, most, some, none)', 'Match quantifier strength exactly -- "all" cannot equal "most"'],
          ],
        },
        { type: 'h3', text: 'Traps' },
        {
          type: 'table',
          headers: ['Trap', 'How to Spot'],
          rows: [
            ['Invalid Mirror', 'Stimulus is valid but answer commits Affirming Consequent or Denying Antecedent (or vice versa). Check arrow direction.'],
            ['Quantifier Mismatch', 'Structure matches perfectly but "all" becomes "most" or "must" becomes "probably." Check force words.'],
            ['AND/OR Swap', 'One logical operator is silently changed. Circle every AND, OR, IF-THEN and compare.'],
            ['Structure Swap', 'Premises and conclusion are rearranged. Use the Therefore Test on each answer independently.'],
            ['Scope Shift', 'Subject changes between premises and conclusion (individuals vs. groups). Match the conclusion subject.'],
          ],
        },
        { type: 'h3', text: 'Stems' },
        {
          type: 'list',
          items: [
            '"Which one of the following arguments is most similar in its reasoning to the argument above?"',
            '"The pattern of reasoning in the argument above is most similar to that in which one of the following?"',
            '"Which one of the following exhibits a pattern of reasoning most similar to that exhibited by the argument above?"',
            '"Which one of the following judgments best illustrates the principle illustrated by the argument above?"',
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          title: 'The One Thing',
          text: '**Match the logical structure, not the topic. Abstract the pattern before reading any answer choice.**',
        },
      ],
    },
  },
};
