import { Lesson } from '../../types';

export const Lesson11_ReferenceGuide: Lesson = {
  id: '8-11',
  title: 'Reference Guide',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Weaken: Complete Reference' },
    {
      type: 'paragraph',
      text: 'A condensed reference for every concept, method, strategy, and trap in Weaken questions. Print this or bookmark it for review before test day.',
    },
    { type: 'hr' },

    { type: 'h3', text: 'The 4-Step Method' },
    {
      type: 'process',
      title: 'Solving Any Weaken Question',
      steps: [
        '**Find the Conclusion:** Identify the author\'s final claim. Separate it from premises, background, and context. Pay close attention to scope-limiting words ("most," "probably," "in urban areas").',
        '**Identify the Gap:** Determine the unstated assumption connecting evidence to conclusion. Ask: "Even if the premises are true, could the conclusion still be wrong?" The answer reveals the gap.',
        '**Prephrase the Attack:** Before looking at answers, predict what type of information would make the conclusion less likely. Your prephrase should target the specific gap you identified.',
        '**Test Each Answer for Direction:** For each candidate, ask: "Does this make the conclusion LESS likely?" If yes, it weakens. If it makes the conclusion more likely, it\'s a strengthener trap. If it has no effect, it\'s irrelevant.',
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Two-Lens Solve Order' },
    {
      type: 'process',
      title: 'Choose the Right Branch First',
      steps: [
        '**Ask whether the conclusion is causal.** If yes, stay in the causal Weaken branch: missing baseline, bad data, reverse causation, or rival explanation.',
        '**If the conclusion is not causal, use the non-causal fallback.** Strip the conclusion down to its exact claim and identify the bridge the author needs.',
        '**Pick the lens that attacks that bridge.** Common non-causal lenses include scope shift, Option C, misleading averages, and cost-benefit / tradeoff.',
        '**Run the Direction Check.** The right answer must make the conclusion less warranted, not merely sound topical or skeptical.',
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Complete Weakening Strategies' },
    {
      type: 'paragraph',
      text: "Every correct answer to a Weaken question employs one of the following strategies. Learn to recognize each one and match it to the argument type you're facing.",
    },
    {
      type: 'table',
      headers: ['Strategy', 'How It Works', 'Best Against'],
      rows: [
        [
          '**Alternative Cause**',
          "Introduces a different factor (C) that could explain the observed effect, making the author's proposed cause unnecessary",
          'Causal arguments, correlation-to-causation claims',
        ],
        [
          '**Reverse Causation**',
          'Shows the causal arrow points in the opposite direction — the supposed effect actually causes the supposed cause',
          'Psychology-physiology links, behavior-outcome correlations',
        ],
        [
          '**Counterexample**',
          "Provides a specific case where the author's general rule fails, showing the conclusion doesn't hold universally",
          'Generalizations, broad claims about "all" or "most"',
        ],
        [
          '**Scope Shift Attack**',
          'Demonstrates that the evidence applies to a different group, time, or context than the conclusion claims',
          'Arguments where premise and conclusion use slightly different terms',
        ],
        [
          '**Data Attack**',
          "Shows the evidence is flawed, misleading, or collected in a way that doesn't support the conclusion (e.g., biased sample, changing composition, denominator neglect)",
          'Statistical arguments, survey-based claims, average-based reasoning',
        ],
        [
          '**Breaking the Causal Chain**',
          'Severs one link in a multi-step causal argument (A → B → C), collapsing the chain even if other links hold',
          'Complex arguments with multiple causal steps',
        ],
        [
          '**Introducing Option C**',
          "Shows the author's set of possibilities is incomplete — a third option exists that wasn't considered",
          'Process of Elimination arguments, false dichotomies',
        ],
        [
          '**Cost-Benefit / Tradeoff**',
          'Shows that a recommended plan, purchase, or comparison ignores a hidden burden that undercuts the claimed payoff',
          'Arguments about whether a choice is worthwhile, efficient, or better overall',
        ],
        [
          '**Fallback Gap-First Attack**',
          'Targets the exact bridge in a hard non-causal argument when no tidy pattern appears at first glance',
          'High-difficulty weakeners where the core problem is scope, accounting, or completeness rather than causation',
        ],
        [
          '**Undermining an Analogy**',
          'Identifies a relevant difference between two things the author treats as comparable',
          'Arguments that reason from one case to another',
        ],
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Core Module 8 Pairings' },
    {
      type: 'table',
      headers: ['Function', 'Question', 'Use'],
      rows: [
        [
          '**Missing Baseline**',
          '`PT-103-S-2-Q-5`',
          'Core causal application: show the program did not create the claimed result',
        ],
        [
          '**Bad Data / Reporting Error**',
          '`PT-113-S-2-Q-14`',
          'Core causal application: show the evidence itself is unreliable',
        ],
        [
          '**Reverse Causation**',
          '`PT-126-S-1-Q-22`',
          'Core causal application: show the author has the arrow backward',
        ],
        [
          '**Cost-Benefit / Tradeoff**',
          '`PT-111-S-3-Q-23`',
          'Non-causal fallback: show the claimed savings disappear once the missing burden is counted',
        ],
        [
          '**Fallback Support Drills**',
          '`PT-101-S-2-Q-1`, `PT-103-S-3-Q-24`, `PT-111-S-4-Q-20`, `PT-101-S-2-Q-19`',
          'Scope, averages, limited options, and EXCEPT direction control',
        ],
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Common Gap Types' },
    {
      type: 'paragraph',
      text: 'Every Weaken question has a gap between the evidence and the conclusion. Recognizing the gap type lets you predict the correct answer before reading the choices.',
    },
    {
      type: 'breakdown',
      labels: { title: 'Gap Type', text: 'Description & Signal' },
      items: [
        {
          title: 'Causal Gap',
          text: 'The evidence shows correlation; the conclusion claims causation. **Signal words:** "causes," "leads to," "results from," "is responsible for." **Attack:** Alternative cause, reverse causation, or common cause.',
          badge: '~35%',
          badgeColor: 'green',
        },
        {
          title: 'Scope Gap',
          text: 'The evidence is about one group/time/place; the conclusion is about a different one. **Signal:** Different nouns or timeframes in the premise vs. conclusion. **Attack:** Show the shift makes the evidence irrelevant to the conclusion.',
          badge: '~20%',
          badgeColor: 'green',
        },
        {
          title: 'Statistical Gap',
          text: 'The evidence uses numbers that seem persuasive but can be interpreted differently. **Signal:** Averages, percentages, rates, "more than," "increased by." **Attack:** Composition flaw, denominator neglect, part-to-whole confusion.',
          badge: '~15%',
          badgeColor: 'blue',
        },
        {
          title: 'Tradeoff Gap',
          text: 'The conclusion says a choice is worth it, efficient, or superior overall, but the reasoning counts benefits without fully counting burdens. **Signal:** recommendation language, "worth it," "best option," long-term savings claims. **Attack:** Show hidden costs, continuing burdens, or omitted downsides that erase the supposed advantage.',
          badge: '~10%',
          badgeColor: 'blue',
        },
        {
          title: 'Sufficiency Gap',
          text: 'The evidence shows something is *necessary* but the conclusion treats it as *sufficient*, or vice versa. **Signal:** "All X are Y" used to conclude "All Y are X." **Attack:** Show other conditions are required.',
          badge: '~10%',
          badgeColor: 'blue',
        },
        {
          title: 'Elimination Gap',
          text: 'The author eliminates some options and concludes the remaining one must be correct. **Signal:** "Must be," "the only explanation," "either...or." **Attack:** Introduce an unconsidered option.',
          badge: '~10%',
          badgeColor: 'slate',
        },
        {
          title: 'Analogy Gap',
          text: 'The author reasons from one case to another, assuming they\'re comparable. **Signal:** "Similarly," "just as," comparisons between groups or situations. **Attack:** Show a relevant difference.',
          badge: '~10%',
          badgeColor: 'slate',
        },
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Weaken vs. Strengthen vs. Flaw' },
    {
      type: 'paragraph',
      text: 'These three question types are closely related but require different approaches. Understanding the distinctions prevents costly mistakes.',
    },
    {
      type: 'table',
      headers: ['Feature', 'Weaken', 'Strengthen', 'Flaw'],
      rows: [
        [
          '**Task**',
          'Find the answer that makes the conclusion LESS likely',
          'Find the answer that makes the conclusion MORE likely',
          'Identify the reasoning error in the argument itself',
        ],
        [
          '**Correct Answer Type**',
          'A new fact (not stated in the stimulus)',
          'A new fact (not stated in the stimulus)',
          "A description of the argument's logical error",
        ],
        [
          '**"If true" clause?**',
          'Yes — accept the answer as true, then test its effect',
          'Yes — accept the answer as true, then test its effect',
          "No — you're describing a flaw, not adding information",
        ],
        [
          '**Direction**',
          'Evidence → Conclusion becomes weaker',
          'Evidence → Conclusion becomes stronger',
          "N/A — you're naming the error, not changing its force",
        ],
        [
          '**Common Overlap Trap**',
          'Selecting a strengthener (the most common wrong answer)',
          'Selecting a weakener',
          'Selecting an answer that weakens instead of naming the flaw',
        ],
        [
          '**Key Skill**',
          'Predicting what NEW information would hurt the conclusion',
          'Predicting what NEW information would help the conclusion',
          'Recognizing the type of logical error without new information',
        ],
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Common Traps' },
    {
      type: 'breakdown',
      labels: { title: 'Trap', text: 'How to Spot and Avoid It' },
      items: [
        {
          title: '1. The Strengthener',
          text: 'An answer that supports the conclusion rather than weakening it. This is the #1 trap on hard Weaken questions. **Defense:** Always perform the Direction Check — ask "Does this make the conclusion MORE or LESS likely?" before selecting.',
          badge: 'Very Common',
          badgeColor: 'red',
        },
        {
          title: '2. True But Irrelevant',
          text: 'An answer that is factually plausible and topically related but has no logical connection to the gap between evidence and conclusion. **Defense:** Ask "Does this specifically attack the link between the evidence and the conclusion?" If it only adds background information, eliminate it.',
          badge: 'Very Common',
          badgeColor: 'red',
        },
        {
          title: '3. Wrong Link Attack',
          text: "An answer that attacks a real weakness in the argument, but not the *main* weakness — or attacks a link that isn't the one the conclusion depends on. **Defense:** Trace the answer back to the specific link it targets. Does it hit the conclusion's primary support, or a secondary detail?",
          badge: 'Common',
          badgeColor: 'red',
        },
        {
          title: '4. The Conditional Weakener',
          text: 'An answer that only weakens if you add an unstated assumption. It seems devastating at first glance but requires you to fill in a gap. **Defense:** Ask "Does this weaken ON ITS OWN, or am I adding something extra?" The correct answer weakens without additional assumptions.',
          badge: 'Common',
          badgeColor: 'red',
        },
        {
          title: '5. The Extreme Answer',
          text: 'An answer that completely destroys the argument rather than merely weakening it. Test-takers sometimes avoid these, thinking "that\'s too strong." **Defense:** Remember — there is no such thing as "too strong" on a Weaken question. If it devastates the conclusion, that makes it a better answer, not a worse one.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
        {
          title: '6. The Scope Mismatch',
          text: 'An answer about a different group, time period, or context than the one in the conclusion. **Defense:** Verify that the nouns, timeframe, and scope of the answer match those of the conclusion.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
        {
          title: '7. The Premise Challenger',
          text: 'An answer that questions whether a stated premise is true. On the LSAT, premises are accepted as given. **Defense:** Check whether the answer attacks the *truth* of the evidence (wrong) or the *reasoning* from evidence to conclusion (correct).',
          badge: 'Less Common',
          badgeColor: 'slate',
        },
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'The Negation Test' },
    {
      type: 'paragraph',
      text: 'The Negation Test is primarily a tool for Necessary Assumption questions, but it can serve as a useful confirmation tool for Weaken questions as well. Here is how it applies:',
    },
    {
      type: 'breakdown',
      labels: { title: 'Step', text: 'Action' },
      items: [
        {
          title: '1. Identify the answer you believe weakens',
          text: 'Select your candidate answer choice.',
          badge: 'Setup',
          badgeColor: 'slate',
        },
        {
          title: '2. Negate the answer',
          text: 'Imagine the opposite of what the answer states is true.',
          badge: 'Test',
          badgeColor: 'blue',
        },
        {
          title: '3. Check the effect of the negation',
          text: 'If the negated version *strengthens* the argument (or at least removes the damage), your original answer was a genuine weakener.',
          badge: 'Test',
          badgeColor: 'blue',
        },
        {
          title: '4. Confirm',
          text: 'If the negated version has no effect on the argument, the original answer was likely irrelevant — not a true weakener.',
          badge: 'Verdict',
          badgeColor: 'green',
        },
      ],
    },
    {
      type: 'paragraph',
      text: '**Example:** Answer: "The study participants were not representative of the general population." Negation: "The study participants *were* representative of the general population." The negated version removes the attack and lets the conclusion stand — confirming the original answer is a genuine weakener.',
    },
    { type: 'hr' },

    { type: 'h3', text: 'Recognizing the Question Stem' },
    {
      type: 'table',
      headers: ['Stem Pattern', 'Signal'],
      rows: [
        ['"Which one of the following, if true, most weakens the argument?"', 'Standard Weaken'],
        ['"Which one of the following, if true, most seriously undermines the argument?"', 'Standard Weaken (synonym)'],
        [
          '"Which one of the following, if true, most calls into question the claim above?"',
          'Standard Weaken (synonym)',
        ],
        ['"Which one of the following, if true, casts the most doubt on the argument?"', 'Standard Weaken (synonym)'],
        [
          '"Each of the following, if true, weakens the argument EXCEPT:"',
          'Weaken EXCEPT — find the one that does NOT weaken',
        ],
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Difficulty Factors' },
    {
      type: 'table',
      headers: ['Factor', 'What It Does', 'Strategy'],
      rows: [
        [
          '**Subtle Gaps**',
          'The vulnerability is buried in complex sentence structure or near-synonymous language',
          'Paraphrase the conclusion in your own words; compare word-by-word against the evidence',
        ],
        [
          '**Strengthener Traps**',
          'Wrong answers support the argument, exploiting your focus on relevance over direction',
          'Perform the Direction Check on every answer before committing',
        ],
        [
          '**Conditional Weakeners**',
          'An answer only weakens if you add an unstated assumption',
          'Ask: "Does this weaken ON ITS OWN?" — reject answers that need extra assumptions',
        ],
        [
          '**Abstract Language**',
          'Correct answer uses general/technical terms that obscure its connection to the stimulus',
          'Use the Translation Method: read literally → substitute stimulus terms → test the concrete version',
        ],
        [
          '**Multiple Viable Candidates**',
          '2-3 answers seem to weaken; the strongest weakener must be distinguished from secondary attacks',
          'Prefer answers that attack the main link over peripheral ones; check scope match',
        ],
      ],
    },
    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Test Day Checklist',
      text: "Before selecting your answer on any Weaken question:\n\n**1.** Can you state the conclusion in your own words?\n**2.** Do you know which branch you are in: causal application or non-causal fallback?\n**3.** Can you identify the specific gap between evidence and conclusion?\n**4.** Does your chosen answer make the conclusion LESS likely (not more)?\n**5.** Does the answer attack the MAIN link, not a secondary detail?\n**6.** Does the answer weaken ON ITS OWN, without requiring additional assumptions?\n**7.** Have you checked that you haven't fallen for a strengthener trap?\n**8.** For EXCEPT questions: have you verified that four answers weaken and only one does not?",
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "Weaken: Complete Reference"
        },
        {
          "type": "paragraph",
          "text": "A condensed reference for every concept, method, strategy, and trap in Weaken questions. Print this or bookmark it for review before test day."
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
          "title": "Solving Any Weaken Question",
          "steps": [
            "**Find the Conclusion:** Identify the author's final claim. Separate it from premises, background, and context. Pay close attention to scope-limiting words (\"most,\" \"probably,\" \"in urban areas\").",
            "**Identify the Gap:** Determine the unstated assumption connecting evidence to conclusion. Ask: \"Even if the premises are true, could the conclusion still be wrong?\" The answer reveals the gap.",
            "**Prephrase the Attack:** Before looking at answers, predict what type of information would make the conclusion less likely. Your prephrase should target the specific gap you identified.",
            "**Test Each Answer for Direction:** For each candidate, ask: \"Does this make the conclusion LESS likely?\" If yes, it weakens. If it makes the conclusion more likely, it's a strengthener trap. If it has no effect, it's irrelevant."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Complete Weakening Strategies"
        },
        {
          "type": "paragraph",
          "text": "Every correct answer to a Weaken question employs one of the following strategies. Learn to recognize each one and match it to the argument type you're facing."
        },
        {
          "type": "table",
          "headers": [
            "Strategy",
            "How It Works",
            "Best Against"
          ],
          "rows": [
            [
              "**Alternative Cause**",
              "Introduces a different factor (C) that could explain the observed effect, making the author's proposed cause unnecessary",
              "Causal arguments, correlation-to-causation claims"
            ],
            [
              "**Reverse Causation**",
              "Shows the causal arrow points in the opposite direction — the supposed effect actually causes the supposed cause",
              "Psychology-physiology links, behavior-outcome correlations"
            ],
            [
              "**Counterexample**",
              "Provides a specific case where the author's general rule fails, showing the conclusion doesn't hold universally",
              "Generalizations, broad claims about \"all\" or \"most\""
            ],
            [
              "**Scope Shift Attack**",
              "Demonstrates that the evidence applies to a different group, time, or context than the conclusion claims",
              "Arguments where premise and conclusion use slightly different terms"
            ],
            [
              "**Data Attack**",
              "Shows the evidence is flawed, misleading, or collected in a way that doesn't support the conclusion (e.g., biased sample, changing composition, denominator neglect)",
              "Statistical arguments, survey-based claims, average-based reasoning"
            ],
            [
              "**Breaking the Causal Chain**",
              "Severs one link in a multi-step causal argument (A → B → C), collapsing the chain even if other links hold",
              "Complex arguments with multiple causal steps"
            ],
            [
              "**Introducing Option C**",
              "Shows the author's set of possibilities is incomplete — a third option exists that wasn't considered",
              "Process of Elimination arguments, false dichotomies"
            ],
            [
              "**Undermining an Analogy**",
              "Identifies a relevant difference between two things the author treats as comparable",
              "Arguments that reason from one case to another"
            ]
          ]
        },
        {
          "type": "diff-note",
          "text": "{{+add+}} The website diff is missing the Mastery content's Two-Lens Solve Order (causal branch vs. non-causal fallback) and the Core Module 8 Pairings table mapping each strategy to its PT question. Both are high-value reference additions that help students navigate the module.",
          "variant": "comment"
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Common Gap Types"
        },
        {
          "type": "paragraph",
          "text": "Every Weaken question has a gap between the evidence and the conclusion. Recognizing the gap type lets you predict the correct answer before reading the choices."
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Gap Type",
            "text": "Description & Signal"
          },
          "items": [
            {
              "title": "Causal Gap",
              "text": "The evidence shows correlation; the conclusion claims causation. **Signal words:** \"causes,\" \"leads to,\" \"results from,\" \"is responsible for.\" **Attack:** Alternative cause, reverse causation, or common cause.",
              "badge": "~35%",
              "badgeColor": "green"
            },
            {
              "title": "Scope Gap",
              "text": "The evidence is about one group/time/place; the conclusion is about a different one. **Signal:** Different nouns or timeframes in the premise vs. conclusion. **Attack:** Show the shift makes the evidence irrelevant to the conclusion.",
              "badge": "~20%",
              "badgeColor": "green"
            },
            {
              "title": "Statistical Gap",
              "text": "The evidence uses numbers that seem persuasive but can be interpreted differently. **Signal:** Averages, percentages, rates, \"more than,\" \"increased by.\" **Attack:** Composition flaw, denominator neglect, part-to-whole confusion.",
              "badge": "~15%",
              "badgeColor": "blue"
            },
            {
              "title": "Sufficiency Gap",
              "text": "The evidence shows something is *necessary* but the conclusion treats it as *sufficient*, or vice versa. **Signal:** \"All X are Y\" used to conclude \"All Y are X.\" **Attack:** Show other conditions are required.",
              "badge": "~10%",
              "badgeColor": "blue"
            },
            {
              "title": "Elimination Gap",
              "text": "The author eliminates some options and concludes the remaining one must be correct. **Signal:** \"Must be,\" \"the only explanation,\" \"either...or.\" **Attack:** Introduce an unconsidered option.",
              "badge": "~10%",
              "badgeColor": "slate"
            },
            {
              "title": "Analogy Gap",
              "text": "The author reasons from one case to another, assuming they're comparable. **Signal:** \"Similarly,\" \"just as,\" comparisons between groups or situations. **Attack:** Show a relevant difference.",
              "badge": "~10%",
              "badgeColor": "slate"
            }
          ]
        },
        {
          "type": "diff-note",
          "text": "{{+add+}} The diff is missing a Tradeoff Gap entry (present in the Mastery content at ~10%) for arguments where the conclusion says a choice is 'worth it' but ignores burdens. Also missing: a sub-section for Data Attack Types (Reporting Bias, Selection Bias, Survivorship Bias, Measurement Error, Confounding Variable) from Lesson 8-5, and the Scope Shift Types table (Part-to-Whole, Narrow-to-Broad, Metric Shift, Time Period) from Lesson 8-3. Both are too valuable to omit from the reference.",
          "variant": "comment"
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Weaken vs. Strengthen vs. Flaw"
        },
        {
          "type": "paragraph",
          "text": "These three question types are closely related but require different approaches. Understanding the distinctions prevents costly mistakes."
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "Weaken",
            "Strengthen",
            "Flaw"
          ],
          "rows": [
            [
              "**Task**",
              "Find the answer that makes the conclusion LESS likely",
              "Find the answer that makes the conclusion MORE likely",
              "Identify the reasoning error in the argument itself"
            ],
            [
              "**Correct Answer Type**",
              "A new fact (not stated in the stimulus)",
              "A new fact (not stated in the stimulus)",
              "A description of the argument's logical error"
            ],
            [
              "**\"If true\" clause?**",
              "Yes — accept the answer as true, then test its effect",
              "Yes — accept the answer as true, then test its effect",
              "No — you're describing a flaw, not adding information"
            ],
            [
              "**Direction**",
              "Evidence → Conclusion becomes weaker",
              "Evidence → Conclusion becomes stronger",
              "N/A — you're naming the error, not changing its force"
            ],
            [
              "**Common Overlap Trap**",
              "Selecting a strengthener (the most common wrong answer)",
              "Selecting a weakener",
              "Selecting an answer that weakens instead of naming the flaw"
            ],
            [
              "**Key Skill**",
              "Predicting what NEW information would hurt the conclusion",
              "Predicting what NEW information would help the conclusion",
              "Recognizing the type of logical error without new information"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Common Traps"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Trap",
            "text": "How to Spot and Avoid It"
          },
          "items": [
            {
              "title": "1. The Strengthener",
              "text": "An answer that supports the conclusion rather than weakening it. This is the #1 trap on hard Weaken questions. **Defense:** Always perform the Direction Check — ask \"Does this make the conclusion MORE or LESS likely?\" before selecting.",
              "badge": "Very Common",
              "badgeColor": "red"
            },
            {
              "title": "2. True But Irrelevant",
              "text": "An answer that is factually plausible and topically related but has no logical connection to the gap between evidence and conclusion. **Defense:** Ask \"Does this specifically attack the link between the evidence and the conclusion?\" If it only adds background information, eliminate it.",
              "badge": "Very Common",
              "badgeColor": "red"
            },
            {
              "title": "3. Wrong Link Attack",
              "text": "An answer that attacks a real weakness in the argument, but not the *main* weakness — or attacks a link that isn't the one the conclusion depends on. **Defense:** Trace the answer back to the specific link it targets. Does it hit the conclusion's primary support, or a secondary detail?",
              "badge": "Common",
              "badgeColor": "red"
            },
            {
              "title": "4. The Conditional Weakener",
              "text": "An answer that only weakens if you add an unstated assumption. It seems devastating at first glance but requires you to fill in a gap. **Defense:** Ask \"Does this weaken ON ITS OWN, or am I adding something extra?\" The correct answer weakens without additional assumptions.",
              "badge": "Common",
              "badgeColor": "red"
            },
            {
              "title": "5. The Extreme Answer",
              "text": "An answer that completely destroys the argument rather than merely weakening it. Test-takers sometimes avoid these, thinking \"that's too strong.\" **Defense:** Remember — there is no such thing as \"too strong\" on a Weaken question. If it devastates the conclusion, that makes it a better answer, not a worse one.",
              "badge": "Moderate",
              "badgeColor": "slate"
            },
            {
              "title": "6. The Scope Mismatch",
              "text": "An answer about a different group, time period, or context than the one in the conclusion. **Defense:** Verify that the nouns, timeframe, and scope of the answer match those of the conclusion.",
              "badge": "Moderate",
              "badgeColor": "slate"
            },
            {
              "title": "7. The Premise Challenger",
              "text": "An answer that questions whether a stated premise is true. On the LSAT, premises are accepted as given. **Defense:** Check whether the answer attacks the *truth* of the evidence (wrong) or the *reasoning* from evidence to conclusion (correct).",
              "badge": "Less Common",
              "badgeColor": "slate"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "The Negation Test"
        },
        {
          "type": "paragraph",
          "text": "The Negation Test is primarily a tool for Necessary Assumption questions, but it can serve as a useful confirmation tool for Weaken questions as well. Here is how it applies:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Step",
            "text": "Action"
          },
          "items": [
            {
              "title": "1. Identify the answer you believe weakens",
              "text": "Select your candidate answer choice.",
              "badge": "Setup",
              "badgeColor": "slate"
            },
            {
              "title": "2. Negate the answer",
              "text": "Imagine the opposite of what the answer states is true.",
              "badge": "Test",
              "badgeColor": "blue"
            },
            {
              "title": "3. Check the effect of the negation",
              "text": "If the negated version *strengthens* the argument (or at least removes the damage), your original answer was a genuine weakener.",
              "badge": "Test",
              "badgeColor": "blue"
            },
            {
              "title": "4. Confirm",
              "text": "If the negated version has no effect on the argument, the original answer was likely irrelevant — not a true weakener.",
              "badge": "Verdict",
              "badgeColor": "green"
            }
          ]
        },
        {
          "type": "paragraph",
          "text": "**Example:** Answer: \"The study participants were not representative of the general population.\" Negation: \"The study participants *were* representative of the general population.\" The negated version removes the attack and lets the conclusion stand — confirming the original answer is a genuine weakener."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Recognizing the Question Stem"
        },
        {
          "type": "table",
          "headers": [
            "Stem Pattern",
            "Signal"
          ],
          "rows": [
            [
              "\"Which one of the following, if true, most weakens the argument?\"",
              "Standard Weaken"
            ],
            [
              "\"Which one of the following, if true, most seriously undermines the argument?\"",
              "Standard Weaken (synonym)"
            ],
            [
              "\"Which one of the following, if true, most calls into question the claim above?\"",
              "Standard Weaken (synonym)"
            ],
            [
              "\"Which one of the following, if true, casts the most doubt on the argument?\"",
              "Standard Weaken (synonym)"
            ],
            [
              "\"Each of the following, if true, weakens the argument EXCEPT:\"",
              "Weaken EXCEPT — find the one that does NOT weaken"
            ]
          ]
        },
        {
          "type": "diff-note",
          "text": "{{+add+}} Missing the plan-criticism stem variant: '\"Which one of the following, if true, is the most serious criticism of the plan outlined above?\"' -- this appears in the website 8-1 stem table but is omitted from the diff reference guide. {{!note!}} The Mastery content version includes this stem in the cheat-sheet alternate but not here.",
          "variant": "comment"
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Difficulty Factors"
        },
        {
          "type": "table",
          "headers": [
            "Factor",
            "What It Does",
            "Strategy"
          ],
          "rows": [
            [
              "**Subtle Gaps**",
              "The vulnerability is buried in complex sentence structure or near-synonymous language",
              "Paraphrase the conclusion in your own words; compare word-by-word against the evidence"
            ],
            [
              "**Strengthener Traps**",
              "Wrong answers support the argument, exploiting your focus on relevance over direction",
              "Perform the Direction Check on every answer before committing"
            ],
            [
              "**Conditional Weakeners**",
              "An answer only weakens if you add an unstated assumption",
              "Ask: \"Does this weaken ON ITS OWN?\" — reject answers that need extra assumptions"
            ],
            [
              "**Abstract Language**",
              "Correct answer uses general/technical terms that obscure its connection to the stimulus",
              "Use the Translation Method: read literally → substitute stimulus terms → test the concrete version"
            ],
            [
              "**Multiple Viable Candidates**",
              "2-3 answers seem to weaken; the strongest weakener must be distinguished from secondary attacks",
              "Prefer answers that attack the main link over peripheral ones; check scope match"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "title": "Test Day Checklist",
          "variant": "summary",
          "text": "Before selecting your answer on any Weaken question:\n\n**1.** Can you state the conclusion in your own words?\n**2.** Can you identify the specific gap between evidence and conclusion?\n**3.** Does your chosen answer make the conclusion LESS likely (not more)?\n**4.** Does the answer attack the MAIN link, not a secondary detail?\n**5.** Does the answer weaken ON ITS OWN, without requiring additional assumptions?\n**6.** Have you checked that you haven't fallen for a strengthener trap?\n**7.** For EXCEPT questions: have you verified that four answers weaken and only one does not?\n\n{{~change~}} The Mastery content version adds item 2: 'Do you know which branch you are in: causal application or non-causal fallback?' This diff is missing the causal vs. non-causal branching concept entirely, which is the Mastery content's main pedagogical addition over the website version."
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
          text: '**Find → Gap → Prephrase Weakener → Match & Eliminate**',
        },
        { type: 'h3', text: 'Decision Rules' },
        {
          type: 'table',
          headers: ['If You See...', 'Do This'],
          rows: [
            ['Correlation cited as causation', 'Introduce alternative cause, reverse causation, or common third factor'],
            ['Study or survey as evidence', 'Attack the sample: biased, unrepresentative, or self-selected'],
            ['Scope shift (narrow evidence → broad conclusion)', 'Show the broader category includes cases the evidence misses'],
            ['Plan or recommendation', 'Show hidden cost, side effect, or tradeoff that undercuts the benefit'],
            ['Analogy between two cases', 'Identify a relevant difference that makes the comparison fail'],
            ['Process-of-elimination reasoning', 'Introduce an unconsidered option the author left out'],
            ['Multi-step causal chain', 'Sever one link in the chain to collapse the whole argument'],
            ['No obvious pattern', 'Strip the conclusion to its exact claim and attack the bridge the author needs'],
          ],
        },
        { type: 'h3', text: 'Traps' },
        {
          type: 'table',
          headers: ['Trap', 'How to Spot'],
          rows: [
            ['Strengthener', 'Ask: does this help the argument? If yes, eliminate immediately'],
            ['True but irrelevant', 'The answer is topically related but has no logical connection to the gap'],
            ['Wrong link attack', 'Targets a real but peripheral weakness instead of the main leap'],
            ['Conditional weakener', 'Only weakens if you add an unstated assumption — reject answers that need extra steps'],
            ['Premise challenger', 'Questions whether a stated premise is true (premises are given on the LSAT)'],
          ],
        },
        { type: 'h3', text: 'Quick Distinctions' },
        {
          type: 'table',
          headers: ['Weaken vs.', 'Key Difference'],
          rows: [
            ['Strengthen', 'Same gap-finding step, opposite direction — Weaken widens the gap, Strengthen fills it'],
            ['Flaw', 'Weaken adds a new fact that exploits the gap; Flaw labels the existing error without new information'],
          ],
        },
        { type: 'h3', text: 'Stems' },
        {
          type: 'list',
          items: [
            '"Which one of the following, if true, most weakens the argument?"',
            '"Which one of the following, if true, most seriously undermines the reasoning above?"',
            '"Which one of the following, if true, casts the most doubt on the conclusion?"',
            '"Which one of the following, if true, most calls into question the claim above?"',
            '"Each of the following, if true, weakens the argument EXCEPT:"',
            '"Which one of the following, if true, is the most serious criticism of the plan?"',
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          title: 'The One Thing',
          text: '**Name the gap, prephrase the attack, and never confuse weakening the conclusion with weakening a premise.**',
        },
      ],
    },
  },
};
