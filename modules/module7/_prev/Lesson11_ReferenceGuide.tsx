import { Lesson } from '../../types';

export const Lesson11_ReferenceGuide: Lesson = {
  id: '7-11',
  title: 'Reference Guide',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Evaluate the Argument: Complete Reference' },
    {
      type: 'paragraph',
      text: 'A condensed reference for every concept, method, target type, and trap in Evaluate the Argument questions. Print this or bookmark it for review before test day.',
    },
    { type: 'hr' },

    { type: 'h3', text: 'Evaluation Targets' },
    {
      type: 'table',
      headers: ['Target Type', 'Frequency', 'Core Gap', 'Default Prephrase'],
      rows: [
        [
          '**Causal Claims**',
          '~30%',
          'Rival explanation or missing experiment check',
          '"What missing question about baseline, comparison, or rival cause would decide whether this causal story holds up?"',
        ],
        [
          '**Statistical Generalizations**',
          '~25%',
          'Sample may not represent population, or the comparison may be misleading',
          '"Is the sample representative, and does this comparison actually justify the conclusion?"',
        ],
        [
          '**Analogies**',
          '~15%',
          'Source and target may differ relevantly',
          '"Are the two cases similar in the respects that matter?"',
        ],
        [
          '**Feasibility Claims**',
          '~12%',
          'Plan may not be practical',
          '"Can the plan actually be implemented as described?"',
        ],
        ['**Predictions**', '~10%', 'Conditions may change', '"Will the trend continue, or could conditions change?"'],
        [
          '**Definitions / Categories**',
          '~8%',
          'Criteria may not apply',
          '"Does the subject actually meet the definition?"',
        ],
      ],
    },
    { type: 'hr' },
    { type: 'h3', text: 'Validated Module 7 Anchors' },
    {
      type: 'table',
      headers: ['Drill', 'Question ID', 'What It Trains'],
      rows: [
        ['Missing baseline', 'PT-119-S-3-Q-3', 'Causal study-design evaluation: before/after and control logic'],
        ['Unrepresentative sample', 'PT-101-S-2-Q-16', 'Whether a subgroup can support a broad conclusion'],
        ['Rank vs. raw number', 'PT-112-S-1-Q-24', 'Whether a ranking actually supports a quantity claim'],
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'The 4-Step Method' },
    {
      type: 'process',
      steps: [
        "**Find the Conclusion:** Identify the author's final claim. Separate it from premises, background, and context.",
        '**Identify the Gap:** Determine the unstated assumption or unexplored alternative that connects premises to conclusion. Use the "Even If True" Test: accept all premises and ask whether the conclusion could still be wrong.',
        '**Prephrase the Pivotal Question:** Turn the gap into a question whose answer would most decisively resolve the argument. Your prephrase should be two-directional: one answer strengthens, the other weakens.',
        '**Apply the Yes/No Test:** For each candidate answer, supply "Yes" then "No." The correct answer produces a dramatic split — one response strengthens, the other weakens. Incorrect answers produce no split or a one-sided effect.',
      ],
    },
    { type: 'hr' },
    { type: 'h3', text: 'Causal Research Framework' },
    {
      type: 'table',
      headers: ['Checkpoint', 'Question to Ask', 'Why It Matters'],
      rows: [
        [
          'Baseline',
          '"What was true before the treatment or event began?"',
          'Without a starting point, an after-the-fact snapshot does not prove change.',
        ],
        [
          'Control / comparison group',
          '"What happened to otherwise similar subjects who did NOT receive the treatment?"',
          'A comparison group helps separate the proposed cause from background trends.',
        ],
        [
          'Random assignment',
          '"Were subjects assigned fairly, or could the groups have differed from the start?"',
          'Prevents a hidden initial difference from masquerading as a treatment effect.',
        ],
        [
          'Representative sample',
          '"Does this group reflect the population the conclusion is about?"',
          'Supports generalization; do not confuse this with random assignment.',
        ],
        [
          'Placebo / blinding',
          '"Could expectations have changed the result or the measurement?"',
          'Expectation effects can fake an improvement even when the treatment itself does little.',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: '**Random sample** and **random assignment** solve different problems. Sampling helps you generalize to a population. Assignment helps you compare groups fairly within the study. Evaluate questions often reward students who keep that distinction straight.',
    },
    {
      type: 'paragraph',
      text: 'When causal evidence comes from a study, the winning Evaluate answer is often whichever one best tests this checklist: baseline, comparison group, assignment, sampling, measurement, or rival explanation. That is how Module 7 keeps causal reasoning in an Evaluate frame instead of collapsing into generic weakening.',
    },
    { type: 'h4', text: 'Competing Hypotheses for Correlation' },
    {
      type: 'breakdown',
      labels: { title: 'Rival Check', text: 'How to Use It' },
      items: [
        {
          title: 'Chronology',
          text: 'Did the proposed cause actually happen before the effect, or could the arrow run backward?',
          badge: 'Rival Test',
          badgeColor: 'blue',
        },
        {
          title: 'Mechanism',
          text: 'Is there a believable pathway connecting the cause to the effect, or is the conclusion still just a guess?',
          badge: 'Rival Test',
          badgeColor: 'blue',
        },
        {
          title: 'Direct evidence',
          text: 'Do we have a measure that more directly captures the proposed cause instead of only the final outcome?',
          badge: 'Rival Test',
          badgeColor: 'blue',
        },
        {
          title: 'Prediction',
          text: 'If the explanation were true, what else should we observe? Does the evidence match that prediction?',
          badge: 'Rival Test',
          badgeColor: 'blue',
        },
        {
          title: 'Similar cases',
          text: 'Do we see the same cause-effect pattern in comparable settings, or is this case isolated?',
          badge: 'Rival Test',
          badgeColor: 'blue',
        },
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'The Yes/No Test' },
    {
      type: 'paragraph',
      text: 'The definitive confirmation tool for Evaluate questions. Every answer choice must pass this test to be correct.',
    },
    {
      type: 'breakdown',
      labels: { title: 'Step', text: 'Action' },
      items: [
        {
          title: '1. Read the answer choice',
          text: 'It will be phrased as a question or as a piece of information to be determined.',
          badge: 'Setup',
          badgeColor: 'slate',
        },
        {
          title: '2. Supply "Yes"',
          text: 'Imagine a favorable answer. Does this make the conclusion more likely?',
          badge: 'Test',
          badgeColor: 'blue',
        },
        {
          title: '3. Supply "No"',
          text: 'Imagine an unfavorable answer. Does this make the conclusion less likely?',
          badge: 'Test',
          badgeColor: 'blue',
        },
        {
          title: '4. Evaluate the split',
          text: 'Correct: dramatic swing (one strengthens, one weakens). Incorrect: no effect, one-sided effect, or both push the same direction.',
          badge: 'Verdict',
          badgeColor: 'green',
        },
      ],
    },

    {
      type: 'paragraph',
      text: '**When two answers both pass:** Choose the one with the more decisive split, the more central connection to the conclusion, and the greater specificity to the argument.',
    },
    { type: 'hr' },

    { type: 'h3', text: 'Recognizing the Question Stem' },
    {
      type: 'table',
      headers: ['Stem Pattern', 'Signal'],
      rows: [
        [
          '"The answer to which one of the following questions would contribute most to an evaluation of the argument?"',
          'Asks for a **question**',
        ],
        [
          '"Knowing which one of the following would be most useful in evaluating the argument?"',
          'Asks what is **useful to know**',
        ],
        [
          '"Which one of the following would be most important to determine in evaluating the argument?"',
          'Asks what is **important to determine**',
        ],
        [
          '"Which one of the following would it be most useful to know in order to evaluate the argument above?"',
          'Asks what is **useful to know**',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: 'All stems are **neutral** — they never say "strengthens" or "weakens." If the stem picks a direction, it is a Strengthen or Weaken question, not Evaluate.',
    },
    { type: 'hr' },

    { type: 'h3', text: 'Common Traps' },
    {
      type: 'breakdown',
      labels: { title: 'Trap', text: 'How to Spot and Avoid It' },
      items: [
        {
          title: 'Irrelevant to the Gap',
          text: 'The choice asks about something topically related but logically disconnected from the gap between premises and conclusion. **Defense:** Apply the Yes/No Test — both answers leave the argument unchanged.',
          badge: 'Very Common',
          badgeColor: 'red',
        },
        {
          title: 'Only Strengthens',
          text: 'One answer to the question helps the argument, but the other answer has no effect. This is a disguised Strengthen answer. **Defense:** The "No" side of the Yes/No Test produces no impact.',
          badge: 'Common',
          badgeColor: 'red',
        },
        {
          title: 'Only Weakens',
          text: 'One answer hurts the argument, but the other has no effect. This is a disguised Weaken answer. **Defense:** The "Yes" side of the Yes/No Test produces no impact.',
          badge: 'Common',
          badgeColor: 'red',
        },
        {
          title: 'Questions the Premise',
          text: 'The choice asks whether a stated fact is actually true. On the LSAT, premises are accepted as given. **Defense:** Check whether the choice challenges the truth of stated evidence rather than the reasoning from evidence to conclusion.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
        {
          title: 'Scope Shift',
          text: 'The choice asks about a different group, time period, location, or variable than the one the conclusion addresses. **Defense:** Verify that the nouns and timeframes in the choice match those in the conclusion.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
        {
          title: 'Too Broad',
          text: "The choice asks a sweeping question that could apply to any argument on any topic. **Defense:** The correct answer is specific to *this* argument's particular gap.",
          badge: 'Less Common',
          badgeColor: 'slate',
        },
        {
          title: 'Obvious Gap Bait',
          text: 'On hard questions, the most obvious gap gets a matching wrong answer. **Defense:** Search for secondary gaps before committing. Test your winner against the runner-up.',
          badge: 'Hard Questions',
          badgeColor: 'red',
        },
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Difficulty Factors' },
    {
      type: 'table',
      headers: ['Factor', 'What It Does', 'Strategy'],
      rows: [
        [
          '**Compound Gaps**',
          'Argument has 2+ vulnerabilities; trap matches your first prephrase',
          'Search for secondary gaps; hold two prephrases loosely',
        ],
        [
          '**Abstract Language**',
          'Correct answer uses general/technical terms',
          'Translate abstract terms to stimulus-specific language before testing',
        ],
        [
          '**Multiple Viable Candidates**',
          '2-3 answers pass initial gut check',
          'Apply Yes/No Test to all; choose the most decisive split',
        ],
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Quick Identification Process' },
    {
      type: 'process',
      title: 'Rapid Target ID (Under 15 Seconds)',
      steps: [
        '**Read the conclusion.** What type of claim is it? Causal, generalization, analogy, recommendation, prediction, or classification?',
        '**Match to target type.** Use signal words from the Evaluation Targets table.',
        '**Recall the default prephrase.** Each target type has a standard pivotal question.',
        '**Scan for a secondary gap.** On hard questions, ask: "Is there another way this could fail?"',
      ],
    },
    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Test Day Checklist',
      text: 'Before selecting your answer on any Evaluate question:\n\n**1.** Can you state the conclusion in your own words?\n**2.** Can you name the gap between premises and conclusion?\n**3.** Does your chosen answer pass the Yes/No Test with a clean split?\n**4.** Have you checked for a secondary gap (especially on hard questions)?\n**5.** Have you verified the answer is specific to *this* argument, not a generic question that could apply to any stimulus?\n**6.** Is the answer neutral (could go either way), not one-directional?',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "Evaluate the Argument: Complete Reference"
        },
        {
          "type": "paragraph",
          "text": "A condensed reference for every concept, method, target type, and trap in Evaluate the Argument questions. Print this or bookmark it for review before test day."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Evaluation Targets"
        },
        {
          "type": "table",
          "headers": [
            "Target Type",
            "Frequency",
            "Core Gap",
            "Default Prephrase"
          ],
          "rows": [
            [
              "**Causal Claims**",
              "~30%",
              "Alternative cause not ruled out {{~change~}} The Mastery Course primary content upgrades the Core Gap column to 'Rival explanation or missing experiment check' and the Default Prephrase to a broader study-design question. Adopt these to match the richer causal framework.",
              "\"Was there another factor that could explain the effect?\""
            ],
            [
              "**Statistical Generalizations**",
              "~25%",
              "Sample may not represent population",
              "\"Is the sample representative of the target group?\""
            ],
            [
              "**Analogies**",
              "~15%",
              "Source and target may differ relevantly",
              "\"Are the two cases similar in the respects that matter?\""
            ],
            [
              "**Feasibility Claims**",
              "~12%",
              "Plan may not be practical",
              "\"Can the plan actually be implemented as described?\""
            ],
            [
              "**Predictions**",
              "~10%",
              "Conditions may change",
              "\"Will the trend continue, or could conditions change?\""
            ],
            [
              "**Definitions / Categories**",
              "~8%",
              "Criteria may not apply",
              "\"Does the subject actually meet the definition?\""
            ]
          ]
        },
        {
          "type": "hr"
        },
        { "type": "diff-note", "text": "{{+add+}} Insert the Causal Research Framework table (baseline, control group, random assignment, representative sample, placebo/blinding) from the Mastery Course primary content between the Evaluation Targets table and the 4-Step Method. This is the single most impactful addition to the reference guide -- it gives students a concrete 5-item checklist for the most common evaluation target (~30%).", "variant": "comment" },
        {
          "type": "h3",
          "text": "The 4-Step Method"
        },
        {
          "type": "process",
          "steps": [
            "**Find the Conclusion:** Identify the author's final claim. Separate it from premises, background, and context.",
            "**Identify the Gap:** Determine the unstated assumption or unexplored alternative that connects premises to conclusion. Use the \"Even If True\" Test: accept all premises and ask whether the conclusion could still be wrong.",
            "**Prephrase the Pivotal Question:** Turn the gap into a question whose answer would most decisively resolve the argument. Your prephrase should be two-directional: one answer strengthens, the other weakens.",
            "**Apply the Yes/No Test:** For each candidate answer, supply \"Yes\" then \"No.\" The correct answer produces a dramatic split — one response strengthens, the other weakens. Incorrect answers produce no split or a one-sided effect."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "The Yes/No Test"
        },
        {
          "type": "paragraph",
          "text": "The definitive confirmation tool for Evaluate questions. Every answer choice must pass this test to be correct."
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Step",
            "text": "Action"
          },
          "items": [
            {
              "title": "1. Read the answer choice",
              "text": "It will be phrased as a question or as a piece of information to be determined.",
              "badge": "Setup",
              "badgeColor": "slate"
            },
            {
              "title": "2. Supply \"Yes\"",
              "text": "Imagine a favorable answer. Does this make the conclusion more likely?",
              "badge": "Test",
              "badgeColor": "blue"
            },
            {
              "title": "3. Supply \"No\"",
              "text": "Imagine an unfavorable answer. Does this make the conclusion less likely?",
              "badge": "Test",
              "badgeColor": "blue"
            },
            {
              "title": "4. Evaluate the split",
              "text": "Correct: dramatic swing (one strengthens, one weakens). Incorrect: no effect, one-sided effect, or both push the same direction.",
              "badge": "Verdict",
              "badgeColor": "green"
            }
          ]
        },
        {
          "type": "paragraph",
          "text": "**When two answers both pass:** Choose the one with the more decisive split, the more central connection to the conclusion, and the greater specificity to the argument."
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
              "\"The answer to which one of the following questions would contribute most to an evaluation of the argument?\"",
              "Asks for a **question**"
            ],
            [
              "\"Knowing which one of the following would be most useful in evaluating the argument?\"",
              "Asks what is **useful to know**"
            ],
            [
              "\"Which one of the following would be most important to determine in evaluating the argument?\"",
              "Asks what is **important to determine**"
            ],
            [
              "\"Which one of the following would it be most useful to know in order to evaluate the argument above?\"",
              "Asks what is **useful to know**"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "All stems are **neutral** — they never say \"strengthens\" or \"weakens.\" If the stem picks a direction, it is a Strengthen or Weaken question, not Evaluate."
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
              "title": "Irrelevant to the Gap",
              "text": "The choice asks about something topically related but logically disconnected from the gap between premises and conclusion. **Defense:** Apply the Yes/No Test — both answers leave the argument unchanged.",
              "badge": "Very Common",
              "badgeColor": "red"
            },
            {
              "title": "Only Strengthens",
              "text": "One answer to the question helps the argument, but the other answer has no effect. This is a disguised Strengthen answer. **Defense:** The \"No\" side of the Yes/No Test produces no impact.",
              "badge": "Common",
              "badgeColor": "red"
            },
            {
              "title": "Only Weakens",
              "text": "One answer hurts the argument, but the other has no effect. This is a disguised Weaken answer. **Defense:** The \"Yes\" side of the Yes/No Test produces no impact.",
              "badge": "Common",
              "badgeColor": "red"
            },
            {
              "title": "Questions the Premise",
              "text": "The choice asks whether a stated fact is actually true. On the LSAT, premises are accepted as given. **Defense:** Check whether the choice challenges the truth of stated evidence rather than the reasoning from evidence to conclusion.",
              "badge": "Moderate",
              "badgeColor": "slate"
            },
            {
              "title": "Scope Shift",
              "text": "The choice asks about a different group, time period, location, or variable than the one the conclusion addresses. **Defense:** Verify that the nouns and timeframes in the choice match those in the conclusion.",
              "badge": "Moderate",
              "badgeColor": "slate"
            },
            {
              "title": "Too Broad",
              "text": "The choice asks a sweeping question that could apply to any argument on any topic. **Defense:** The correct answer is specific to *this* argument's particular gap.",
              "badge": "Less Common",
              "badgeColor": "slate"
            },
            {
              "title": "Obvious Gap Bait",
              "text": "On hard questions, the most obvious gap gets a matching wrong answer. **Defense:** Search for secondary gaps before committing. Test your winner against the runner-up.",
              "badge": "Hard Questions",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "hr"
        },
        { "type": "diff-note", "text": "{{+add+}} Insert the Abstract Language Translation Table from Lesson 7-9 (4 rows mapping abstract answer phrasings to concrete equivalents). This is a high-value, low-space addition that helps students decode hard answer choices. Currently missing from both the diff and the primary reference guide content.", "variant": "comment" },
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
              "**Compound Gaps**",
              "Argument has 2+ vulnerabilities; trap matches your first prephrase",
              "Search for secondary gaps; hold two prephrases loosely"
            ],
            [
              "**Abstract Language**",
              "Correct answer uses general/technical terms",
              "Translate abstract terms to stimulus-specific language before testing"
            ],
            [
              "**Multiple Viable Candidates**",
              "2-3 answers pass initial gut check",
              "Apply Yes/No Test to all; choose the most decisive split"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Quick Identification Process"
        },
        {
          "type": "process",
          "title": "Rapid Target ID (Under 15 Seconds)",
          "steps": [
            "**Read the conclusion.** What type of claim is it? Causal, generalization, analogy, recommendation, prediction, or classification?",
            "**Match to target type.** Use signal words from the Evaluation Targets table.",
            "**Recall the default prephrase.** Each target type has a standard pivotal question.",
            "**Scan for a secondary gap.** On hard questions, ask: \"Is there another way this could fail?\""
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "title": "Test Day Checklist",
          "variant": "summary",
          "text": "Before selecting your answer on any Evaluate question:\n\n**1.** Can you state the conclusion in your own words?\n**2.** Can you name the gap between premises and conclusion?\n**3.** Does your chosen answer pass the Yes/No Test with a clean split?\n**4.** Have you checked for a secondary gap (especially on hard questions)?\n**5.** Have you verified the answer is specific to *this* argument, not a generic question that could apply to any stimulus?\n**6.** Is the answer neutral (could go either way), not one-directional?"
        },
        { "type": "diff-note", "text": "{{!note!}} The Mastery Course primary content adds a Validated Module 7 Anchors table (PT-119-S-3-Q-3, PT-101-S-2-Q-16, PT-112-S-1-Q-24) and a Competing Hypotheses for Correlation breakdown (chronology, mechanism, direct evidence, prediction, similar cases). Both are missing from the diff. The Anchors table is especially valuable as a quick-reference link to the module's real practice questions.", "variant": "comment" }
      ],
    },
    cheat: {
      label: 'Cheat Sheet',
      content: [
        {
          type: 'callout',
          variant: 'summary',
          title: 'The Method',
          text: '**Find \u2192 Gap \u2192 Prephrase Question \u2192 Yes/No Test**',
        },
        { type: 'h3', text: 'Decision Rules' },
        {
          type: 'table',
          headers: ['If You See...', 'Do This'],
          rows: [
            ['Causal language (caused, led to, responsible for)', 'Ask about rival causes, baseline, or comparison group'],
            ['Study or survey data', 'Ask whether the sample represents the target population'],
            ['Analogy (just as, similarly, like)', 'Ask whether A and B differ in a relevant way'],
            ['Recommendation (should, ought to, proposed)', 'Ask about hidden costs or unintended consequences'],
            ['Prediction (will, expected, projected)', 'Ask whether conditions could change'],
            ['Classification (qualifies as, counts as)', 'Ask whether the subject meets the definition'],
            ['Missing baseline in a before/after design', 'Ask what was true before the treatment began'],
            ['No control group mentioned', 'Ask what happened to untreated subjects'],
          ],
        },
        { type: 'h3', text: 'Traps' },
        {
          type: 'table',
          headers: ['Trap', 'How to Spot'],
          rows: [
            ['Irrelevant to the Gap', 'Yes/No Test: both answers leave the argument unchanged.'],
            ['Only Strengthens', 'The "No" answer has no impact on the conclusion.'],
            ['Only Weakens', 'The "Yes" answer has no impact on the conclusion.'],
            ['Questions the Premise', 'The choice challenges stated evidence instead of the reasoning.'],
            ['Scope Shift', 'Nouns or timeframes in the choice don\'t match the conclusion.'],
          ],
        },
        { type: 'h3', text: 'Quick Distinctions' },
        {
          type: 'table',
          headers: ['Evaluate vs.', 'Key Difference'],
          rows: [
            ['Strengthen', 'Strengthen fills the gap one-way; Evaluate probes it two-ways.'],
            ['Weaken', 'Weaken exploits the gap one-way; Evaluate could go either direction.'],
            ['Necessary Assumption', 'Assumption is something the argument requires; Evaluate is a question that tests the argument.'],
            ['Sufficient Assumption', 'Sufficient Assumption guarantees the conclusion; Evaluate only tests it.'],
          ],
        },
        { type: 'h3', text: 'Stems' },
        {
          type: 'list',
          items: [
            '"The answer to which one of the following questions would contribute most to an evaluation of the argument?"',
            '"Knowing which one of the following would be most useful in evaluating the argument?"',
            '"Which one of the following would be most important to determine in evaluating the argument?"',
            '"Which one of the following would it be most useful to know in order to evaluate the argument above?"',
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          title: 'The One Thing',
          text: '**The right answer is the question whose yes/no answers produce opposite verdicts on the conclusion.**',
        },
      ],
    },
  },
};
