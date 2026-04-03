import { Lesson } from '../../types';

export const Lesson13_ReferenceGuide: Lesson = {
  id: '9-13',
  title: 'Reference Guide',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Strengthen: Complete Reference' },
    {
      type: 'paragraph',
      text: 'A condensed reference for every concept, method, strategy, and trap in Strengthen questions. Print this or bookmark it for review before test day.',
    },
    { type: 'hr' },

    { type: 'h3', text: 'The 4-Step Method' },
    {
      type: 'process',
      title: 'Solving Any Strengthen Question',
      steps: [
        '**Find the Conclusion:** Identify the author\'s final claim. Separate it from premises, background, and context. Pay close attention to scope words ("most," "probably," "likely," "in some cases").',
        '**Identify the Gap:** Determine the unstated assumption connecting evidence to conclusion. Ask: "Even if the premises are true, what else must be true for the conclusion to follow?" The answer reveals the gap.',
        '**Prephrase the Support:** Before looking at answers, predict what type of new information would make the conclusion more likely. Your prephrase should target the specific gap you identified.',
        '**Test Each Answer for Direction:** For each candidate, ask: "Does this make the conclusion MORE likely?" If yes, it strengthens. If it makes the conclusion less likely, it\'s a weakener trap. If it has no effect, it\'s irrelevant.',
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Core Drill Map' },
    {
      type: 'paragraph',
      text: 'Use these real PT drills as anchors for the module\'s major support patterns. The first three are the core causal trio for this module; the rest cover the non-causal support branch.',
    },
    {
      type: 'table',
      headers: ['Drill', 'Pattern', 'Use It To Remember'],
      rows: [
        [
          '**PT-128-S-3-Q-1**',
          'Direct causal support',
          'A strong causal strengthener can show the effect follows people into the proposed cause rather than merely co-occurring with it.',
        ],
        [
          '**PT-127-S-2-Q-14**',
          'The Defender',
          'Support can come from ruling out the rival explanation instead of adding flashy new positive evidence.',
        ],
        [
          '**PT-120-S-1-Q-26**',
          'Dose-response',
          'A graded pattern is often stronger than a one-time snapshot because it ties more of the cause to more of the effect.',
        ],
        [
          '**PT-101-S-3-Q-23**',
          'Conceptual bridge',
          'When the conclusion moves from a physical fact to a social or motivational claim, remove the simplest alternative explanation.',
        ],
        [
          '**PT-125-S-4-Q-20**',
          'Qualifier / statistic support',
          'A narrow statistic strengthens only if the answer shows it was generated under conditions that actually support the comparison.',
        ],
        [
          '**PT-112-S-4-Q-20**',
          'Best-case analogy',
          'An analogy strengthens best when it shows the featured example is representative or even the strongest case available.',
        ],
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Complete Strengthening Strategies' },
    {
      type: 'paragraph',
      text: "Every correct answer to a Strengthen question employs one of the following strategies. Learn to recognize each one and match it to the argument type you're facing.",
    },
    {
      type: 'table',
      headers: ['Strategy', 'How It Works', 'Best Against'],
      rows: [
        [
          '**Rule Out Alternative Cause**',
          "Eliminates a rival explanation for the observed correlation, leaving the author's proposed cause as the best remaining explanation",
          'Causal arguments, correlation-to-causation claims',
        ],
        [
          '**Ideal Experiment Upgrade**',
          'Adds a baseline, control group, fair assignment, or placebo/blinding protection so the evidence behaves more like a real experiment',
          'Study-based causal arguments, treatment-effect arguments',
        ],
        [
          '**Defend Against Reverse Causation**',
          'Shows the causal arrow runs in the direction the author claims, not the opposite — often by finding the trait-behavior link in a different group (the Defender pattern)',
          'Psychology-physiology links, behavior-outcome correlations',
        ],
        [
          '**Cost-Benefit / Tradeoff Lens**',
          'Shows the preferred option\'s upside is bigger, its downside is smaller, or the alternative is worse on the exact metric the conclusion relies on',
          'Recommendations, policy arguments, and comparative judgments among imperfect options',
        ],
        [
          '**Bridge a Conceptual Gap**',
          'Provides the missing link between two different concepts in the premise and conclusion (e.g., connecting a physical observation to a social motive)',
          'Arguments where premise and conclusion use terms from different conceptual categories',
        ],
        [
          '**Validate a Statistic / Qualifier**',
          'Shows a narrow statistic was generated under fair conditions — the sample was large, predictions were frequent, or the measure was not cherry-picked',
          'Arguments relying on qualified claims ("most of the time," "on occasions when")',
        ],
        [
          '**Best-Case Analogy**',
          'Demonstrates that the specific example used is the strongest case, not an outlier — if even the best case fails the standard, the general conclusion follows forcefully',
          'Arguments generalizing from a single example to a category',
        ],
        [
          '**Dose-Response**',
          'Shows that more of the cause produces more of the effect in a continuous, step-by-step fashion — much harder to dismiss as coincidence than a single snapshot',
          'Causal arguments supported by a single end-of-study correlation',
        ],
        [
          '**Competing-Hypothesis Screen**',
          'Uses chronology, mechanism, direct evidence, prediction, or similar-case support to eliminate rival explanations for the observed pattern',
          'Causal arguments, explanatory hypotheses',
        ],
        [
          '**Parallel Case**',
          'Provides evidence that the same mechanism or pattern exists in another context, supporting its plausibility in the context at hand',
          'Hypotheses proposing a novel mechanism',
        ],
        [
          '**Show Necessity**',
          'Demonstrates that the proposed explanation is needed — e.g., existing alternatives are insufficient to account for the phenomenon',
          'Scientific hypotheses, explanatory arguments',
        ],
        [
          '**Fallback Support Lens**',
          'When no single named pattern dominates, targets the author\'s most fragile point by reducing the main objection, reinforcing the key benefit, or tightening the exact comparison that matters',
          'Mixed or open-ended non-causal strengthen questions',
        ],
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Common Gap Types' },
    {
      type: 'paragraph',
      text: 'Every Strengthen question has a gap between the evidence and the conclusion. Recognizing the gap type lets you predict the correct answer before reading the choices.',
    },
    {
      type: 'breakdown',
      labels: { title: 'Gap Type', text: 'Description & Signal' },
      items: [
        {
          title: 'Causal Gap',
          text: 'The evidence shows correlation; the conclusion claims causation. **Signal words:** "causes," "leads to," "results from," "indicates that." **Strengthen:** Rule out alternative causes, defend against reverse causation, establish dose-response, or make the evidence look more like an ideal experiment with a baseline / control / fair assignment.',
          badge: '~35%',
          badgeColor: 'green',
        },
        {
          title: 'Conceptual Gap',
          text: 'The premise uses one concept (physical, economic) and the conclusion uses another (social, motivational). **Signal:** Key nouns in premise and conclusion belong to different categories. **Strengthen:** Provide the bridge that connects the two concepts, typically by ruling out a simpler alternative.',
          badge: '~20%',
          badgeColor: 'green',
        },
        {
          title: 'Statistical / Qualifier Gap',
          text: 'A narrow, qualified statistic is used to support a broad conclusion. **Signal:** "most of the time," "on the occasions when," rates, percentages. **Strengthen:** Show the statistic is representative and not cherry-picked.',
          badge: '~15%',
          badgeColor: 'blue',
        },
        {
          title: 'Analogy Gap',
          text: 'One example is used to justify a broad generalization. **Signal:** A specific case followed by a universal recommendation. **Strengthen:** Show the example is representative or a best case.',
          badge: '~15%',
          badgeColor: 'blue',
        },
        {
          title: 'Mechanism Gap',
          text: 'A hypothesis proposes a mechanism (e.g., the spleen stores oxygen) without direct evidence. **Signal:** "hypothesize," "suggest," "propose." **Strengthen:** Show necessity, capability, parallel cases, or correlation.',
          badge: '~10%',
          badgeColor: 'slate',
        },
        {
          title: 'Cost-Benefit / Tradeoff Gap',
          text: 'The evidence identifies a benefit or problem, and the conclusion recommends an option without fully showing that the upside outweighs the downside or beats the alternative. **Signal:** "should," "better," "worth it," "preferable," "more useful." **Strengthen:** Reduce a cost, increase the key benefit, or show the competing option is worse on the same issue.',
          badge: '~10%',
          badgeColor: 'slate',
        },
        {
          title: 'Scope Gap',
          text: 'Evidence covers one group/time/place; conclusion extends to a different one. **Signal:** Different nouns or timeframes in premise vs. conclusion. **Strengthen:** Show the groups are comparable or the example is representative.',
          badge: '~5%',
          badgeColor: 'slate',
        },
      ],
    },
    {
      type: 'paragraph',
      text: 'For causal questions, keep three distinctions straight: **correlation** means the variables move together, **explanation** means you have a reason why they move together, and an **ideal experiment** gives you the cleanest proof because it separates the proposed cause from its rivals. Many top-difficulty Strengthen questions test whether you can tell those apart.',
    },
    {
      type: 'paragraph',
      text: 'For non-causal questions, use the support lens: ask whether the credited answer makes the author\'s exact recommendation, comparison, or judgment less fragile. Real support is targeted; mere relevance is not.',
    },
    { type: 'hr' },

    { type: 'h3', text: 'Strengthen vs. Weaken vs. Sufficient Assumption' },
    {
      type: 'paragraph',
      text: 'These three question types are closely related but require different levels of support. Understanding the distinctions prevents costly mistakes.',
    },
    {
      type: 'table',
      headers: ['Feature', 'Strengthen', 'Weaken', 'Sufficient Assumption'],
      rows: [
        [
          '**Task**',
          'Find the answer that makes the conclusion MORE likely',
          'Find the answer that makes the conclusion LESS likely',
          'Find the answer that GUARANTEES the conclusion',
        ],
        [
          '**Correct Answer Type**',
          'A new fact (not stated in the stimulus)',
          'A new fact (not stated in the stimulus)',
          'A new principle or fact that, combined with the premises, logically entails the conclusion',
        ],
        [
          '**"If true" clause?**',
          'Yes — accept the answer as true, then test its effect',
          'Yes — accept the answer as true, then test its effect',
          'Yes — the answer is a new premise',
        ],
        [
          '**Strength Required**',
          'Partial — the answer only needs to make the conclusion somewhat more likely',
          'Partial — the answer only needs to make the conclusion somewhat less likely',
          'Total — the answer must make the conclusion logically certain',
        ],
        [
          '**Direction**',
          'Evidence → Conclusion becomes stronger',
          'Evidence → Conclusion becomes weaker',
          'Evidence + Answer → Conclusion is guaranteed',
        ],
        [
          '**Common Overlap Trap**',
          'Selecting a weakener (reverses direction)',
          'Selecting a strengthener (reverses direction)',
          'Selecting a strengthener that helps but does not guarantee',
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
          title: '1. The Weakener',
          text: 'An answer that undermines the conclusion rather than supporting it. This is the #1 trap on hard Strengthen questions. **Defense:** Always perform the Direction Check — ask "Does this make the conclusion MORE or LESS likely?" before selecting.',
          badge: 'Very Common',
          badgeColor: 'red',
        },
        {
          title: '2. The Premise Booster',
          text: 'An answer that makes a stated premise more believable but does nothing to bridge the gap between the evidence and the conclusion. **Defense:** Ask "Does this help connect the evidence to the conclusion, or does it just make the evidence itself seem more solid?"',
          badge: 'Very Common',
          badgeColor: 'red',
        },
        {
          title: '3. The Scope Mismatch',
          text: 'An answer about a related but different topic — e.g., about "success" when the argument is about "attempting," or about a different group than the one in the conclusion. **Defense:** Verify the nouns, timeframe, and scope of the answer match those of the conclusion.',
          badge: 'Common',
          badgeColor: 'red',
        },
        {
          title: '4. The "Some" Trap',
          text: 'An answer that uses weak quantifiers ("some," "a few") when the conclusion requires broad support ("all," "most," "in general"). **Defense:** Check whether the answer\'s scope is strong enough to support the conclusion\'s scope.',
          badge: 'Common',
          badgeColor: 'red',
        },
        {
          title: '5. True But Irrelevant / Mere Relevance',
          text: 'An answer that is factually plausible and topically related but has no logical connection to the specific gap. On recommendation questions, this often looks like nice-sounding good news that never improves the actual tradeoff. **Defense:** Ask "Does this specifically address the link between the evidence and the conclusion?" If it only adds background or topical upside, eliminate it.',
          badge: 'Common',
          badgeColor: 'red',
        },
        {
          title: '6. The Wrong Comparison',
          text: 'An answer comparing the wrong groups or the wrong variables. **Defense:** Identify exactly which comparison the conclusion relies on and verify the answer addresses that specific comparison.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
        {
          title: '7. The Reversal Trap',
          text: "An answer that reverses the logical direction of the argument — e.g., using the conclusion to justify the premise instead of the other way around. **Defense:** Check whether the answer supports the author's reasoning direction or inverts it.",
          badge: 'Less Common',
          badgeColor: 'slate',
        },
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'EXCEPT Question Strategy' },
    {
      type: 'paragraph',
      text: '"Strengthen EXCEPT" questions ask you to find the one answer that does NOT strengthen. Four answers will support the argument from different angles; one will not.',
    },
    {
      type: 'process',
      title: 'Systematic EXCEPT Approach',
      steps: [
        '**Understand the hypothesis clearly.** What specific claim are you asked to support?',
        '**Sweep all five choices.** For each, ask: "Does this make the hypothesis more plausible?" Tag each as S (strengthens) or X (does not).',
        "**Expect four S's and one X.** If you have two X's, re-evaluate the borderline cases by asking whether they provide even indirect support.",
        '**Verify the lone X.** Confirm it either has no effect on the hypothesis or actively undermines it (e.g., by providing an alternative explanation).',
      ],
    },
    {
      type: 'paragraph',
      text: 'The most common correct answer on EXCEPT questions provides an **alternative explanation** — it gives a different mechanism or cause that reduces the need for the hypothesis, thereby failing to strengthen it.',
    },
    { type: 'hr' },

    { type: 'h3', text: 'Recognizing the Question Stem' },
    {
      type: 'table',
      headers: ['Stem Pattern', 'Signal'],
      rows: [
        ['"Which one of the following, if true, most strengthens the argument?"', 'Standard Strengthen'],
        ['"Which one of the following, if true, most supports the claim above?"', 'Standard Strengthen (synonym)'],
        [
          '"Which one of the following, if true, lends the most support to the argument?"',
          'Standard Strengthen (synonym)',
        ],
        [
          '"Which one of the following, if true, most helps to justify the reasoning above?"',
          'Standard Strengthen (synonym)',
        ],
        [
          '"Each of the following, if true, strengthens the argument EXCEPT:"',
          'Strengthen EXCEPT — find the one that does NOT strengthen',
        ],
        ['"Each of the following, if true, provides some support… EXCEPT:"', 'Strengthen EXCEPT (synonym)'],
      ],
    },
    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Test Day Checklist',
      text: "Before selecting your answer on any Strengthen question:\n\n**1.** Can you state the conclusion in your own words?\n**2.** Can you identify the specific gap between evidence and conclusion?\n**3.** Does your chosen answer make the conclusion MORE likely (not less)?\n**4.** If this is a recommendation or tradeoff question, does the answer improve the exact cost-benefit balance the author relies on?\n**5.** Does the answer bridge the MAIN gap, not a secondary detail?\n**6.** Does the answer strengthen ON ITS OWN, without requiring additional assumptions or merely adding interesting background?\n**7.** Have you checked that you haven't fallen for a weakener or premise-booster trap?\n**8.** For EXCEPT questions: have you verified that four answers strengthen and only one does not?",
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "Strengthen: Complete Reference"
        },
        {
          "type": "paragraph",
          "text": "A condensed reference for every concept, method, strategy, and trap in Strengthen questions. Print this or bookmark it for review before test day."
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
          "title": "Solving Any Strengthen Question",
          "steps": [
            "**Find the Conclusion:** Identify the author's final claim. Separate it from premises, background, and context. Pay close attention to scope words (\"most,\" \"probably,\" \"likely,\" \"in some cases\").",
            "**Identify the Gap:** Determine the unstated assumption connecting evidence to conclusion. Ask: \"Even if the premises are true, what else must be true for the conclusion to follow?\" The answer reveals the gap.",
            "**Prephrase the Support:** Before looking at answers, predict what type of new information would make the conclusion more likely. Your prephrase should target the specific gap you identified.",
            "**Test Each Answer for Direction:** For each candidate, ask: \"Does this make the conclusion MORE likely?\" If yes, it strengthens. If it makes the conclusion less likely, it's a weakener trap. If it has no effect, it's irrelevant."
          ]
        },
        {
          "type": "hr"
        },
        { "type": "diff-note", "text": "{{+add+}} The Mastery Course version inserts a 'Core Drill Map' table here that is absent from the website version. This table links each PT drill question to its named pattern and a memorable takeaway sentence (e.g., 'PT-128-S-3-Q-1 -> Direct causal support -> A strong causal strengthener can show the effect follows people into the proposed cause'). This anchor table is the single most valuable addition to the Reference Guide -- it connects abstract strategies to concrete examples.", "variant": "comment" },
        {
          "type": "h3",
          "text": "Complete Strengthening Strategies"
        },
        {
          "type": "paragraph",
          "text": "Every correct answer to a Strengthen question employs one of the following strategies. Learn to recognize each one and match it to the argument type you're facing."
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
              "**Rule Out Alternative Cause**",
              "Eliminates a rival explanation for the observed correlation, leaving the author's proposed cause as the best remaining explanation",
              "Causal arguments, correlation-to-causation claims"
            ],
            [
              "**Defend Against Reverse Causation**",
              "Shows the causal arrow runs in the direction the author claims, not the opposite — often by finding the trait-behavior link in a different group (the Defender pattern)",
              "Psychology-physiology links, behavior-outcome correlations"
            ],
            [
              "**Bridge a Conceptual Gap**",
              "Provides the missing link between two different concepts in the premise and conclusion (e.g., connecting a physical observation to a social motive)",
              "Arguments where premise and conclusion use terms from different conceptual categories"
            ],
            [
              "**Validate a Statistic / Qualifier**",
              "Shows a narrow statistic was generated under fair conditions — the sample was large, predictions were frequent, or the measure was not cherry-picked",
              "Arguments relying on qualified claims (\"most of the time,\" \"on occasions when\")"
            ],
            [
              "**Best-Case Analogy**",
              "Demonstrates that the specific example used is the strongest case, not an outlier — if even the best case fails the standard, the general conclusion follows forcefully",
              "Arguments generalizing from a single example to a category"
            ],
            [
              "**Dose-Response**",
              "Shows that more of the cause produces more of the effect in a continuous, step-by-step fashion — much harder to dismiss as coincidence than a single snapshot",
              "Causal arguments supported by a single end-of-study correlation"
            ],
            [
              "**Parallel Case**",
              "Provides evidence that the same mechanism or pattern exists in another context, supporting its plausibility in the context at hand",
              "Hypotheses proposing a novel mechanism"
            ],
            [
              "**Show Necessity**",
              "Demonstrates that the proposed explanation is needed — e.g., existing alternatives are insufficient to account for the phenomenon",
              "Scientific hypotheses, explanatory arguments"
            ]
          ]
        },
        { "type": "diff-note", "text": "{{+add+}} The Mastery Course version expands this 8-row strategies table to 12 rows, adding: 'Ideal Experiment Upgrade' (adds baseline/control/blinding to study-based arguments), 'Cost-Benefit / Tradeoff Lens' (shows upside is bigger or alternative is worse), 'Competing-Hypothesis Screen' (uses chronology/mechanism/prediction to eliminate rivals), and 'Fallback Support Lens' (targets the most fragile point when no single named pattern dominates). These four additions cover non-causal and mixed-pattern questions that the website version currently underserves.", "variant": "comment" },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Common Gap Types"
        },
        {
          "type": "paragraph",
          "text": "Every Strengthen question has a gap between the evidence and the conclusion. Recognizing the gap type lets you predict the correct answer before reading the choices."
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
              "text": "The evidence shows correlation; the conclusion claims causation. **Signal words:** \"causes,\" \"leads to,\" \"results from,\" \"indicates that.\" **Strengthen:** Rule out alternative causes, defend against reverse causation, or establish dose-response.",
              "badge": "~35%",
              "badgeColor": "green"
            },
            {
              "title": "Conceptual Gap",
              "text": "The premise uses one concept (physical, economic) and the conclusion uses another (social, motivational). **Signal:** Key nouns in premise and conclusion belong to different categories. **Strengthen:** Provide the bridge that connects the two concepts, typically by ruling out a simpler alternative.",
              "badge": "~20%",
              "badgeColor": "green"
            },
            {
              "title": "Statistical / Qualifier Gap",
              "text": "A narrow, qualified statistic is used to support a broad conclusion. **Signal:** \"most of the time,\" \"on the occasions when,\" rates, percentages. **Strengthen:** Show the statistic is representative and not cherry-picked.",
              "badge": "~15%",
              "badgeColor": "blue"
            },
            {
              "title": "Analogy Gap",
              "text": "One example is used to justify a broad generalization. **Signal:** A specific case followed by a universal recommendation. **Strengthen:** Show the example is representative or a best case.",
              "badge": "~15%",
              "badgeColor": "blue"
            },
            {
              "title": "Mechanism Gap",
              "text": "A hypothesis proposes a mechanism (e.g., the spleen stores oxygen) without direct evidence. **Signal:** \"hypothesize,\" \"suggest,\" \"propose.\" **Strengthen:** Show necessity, capability, parallel cases, or correlation.",
              "badge": "~10%",
              "badgeColor": "slate"
            },
            {
              "title": "Scope Gap",
              "text": "Evidence covers one group/time/place; conclusion extends to a different one. **Signal:** Different nouns or timeframes in premise vs. conclusion. **Strengthen:** Show the groups are comparable or the example is representative.",
              "badge": "~5%",
              "badgeColor": "slate"
            }
          ]
        },
        { "type": "diff-note", "text": "{{+add+}} The Mastery Course version adds a 'Cost-Benefit / Tradeoff Gap' item (~10%) to this breakdown, with signal words like 'should,' 'better,' 'worth it,' 'preferable.' It also adds two explanatory paragraphs distinguishing correlation vs. explanation vs. ideal experiment for causal questions, and a note about non-causal support lens. The website version should adopt the tradeoff gap type at minimum.", "variant": "comment" },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Strengthen vs. Weaken vs. Sufficient Assumption"
        },
        {
          "type": "paragraph",
          "text": "These three question types are closely related but require different levels of support. Understanding the distinctions prevents costly mistakes."
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "Strengthen",
            "Weaken",
            "Sufficient Assumption"
          ],
          "rows": [
            [
              "**Task**",
              "Find the answer that makes the conclusion MORE likely",
              "Find the answer that makes the conclusion LESS likely",
              "Find the answer that GUARANTEES the conclusion"
            ],
            [
              "**Correct Answer Type**",
              "A new fact (not stated in the stimulus)",
              "A new fact (not stated in the stimulus)",
              "A new principle or fact that, combined with the premises, logically entails the conclusion"
            ],
            [
              "**\"If true\" clause?**",
              "Yes — accept the answer as true, then test its effect",
              "Yes — accept the answer as true, then test its effect",
              "Yes — the answer is a new premise"
            ],
            [
              "**Strength Required**",
              "Partial — the answer only needs to make the conclusion somewhat more likely",
              "Partial — the answer only needs to make the conclusion somewhat less likely",
              "Total — the answer must make the conclusion logically certain"
            ],
            [
              "**Direction**",
              "Evidence → Conclusion becomes stronger",
              "Evidence → Conclusion becomes weaker",
              "Evidence + Answer → Conclusion is guaranteed"
            ],
            [
              "**Common Overlap Trap**",
              "Selecting a weakener (reverses direction)",
              "Selecting a strengthener (reverses direction)",
              "Selecting a strengthener that helps but does not guarantee"
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
              "title": "1. The Weakener",
              "text": "An answer that undermines the conclusion rather than supporting it. This is the #1 trap on hard Strengthen questions. **Defense:** Always perform the Direction Check — ask \"Does this make the conclusion MORE or LESS likely?\" before selecting.",
              "badge": "Very Common",
              "badgeColor": "red"
            },
            {
              "title": "2. The Premise Booster",
              "text": "An answer that makes a stated premise more believable but does nothing to bridge the gap between the evidence and the conclusion. **Defense:** Ask \"Does this help connect the evidence to the conclusion, or does it just make the evidence itself seem more solid?\"",
              "badge": "Very Common",
              "badgeColor": "red"
            },
            {
              "title": "3. The Scope Mismatch",
              "text": "An answer about a related but different topic — e.g., about \"success\" when the argument is about \"attempting,\" or about a different group than the one in the conclusion. **Defense:** Verify the nouns, timeframe, and scope of the answer match those of the conclusion.",
              "badge": "Common",
              "badgeColor": "red"
            },
            {
              "title": "4. The \"Some\" Trap",
              "text": "An answer that uses weak quantifiers (\"some,\" \"a few\") when the conclusion requires broad support (\"all,\" \"most,\" \"in general\"). **Defense:** Check whether the answer's scope is strong enough to support the conclusion's scope.",
              "badge": "Common",
              "badgeColor": "red"
            },
            {
              "title": "5. True But Irrelevant",
              "text": "An answer that is factually plausible and topically related but has no logical connection to the specific gap. **Defense:** Ask \"Does this specifically address the link between the evidence and the conclusion?\" If it only adds background, eliminate it.",
              "badge": "Common",
              "badgeColor": "red"
            },
            {
              "title": "6. The Wrong Comparison",
              "text": "An answer comparing the wrong groups or the wrong variables. **Defense:** Identify exactly which comparison the conclusion relies on and verify the answer addresses that specific comparison.",
              "badge": "Moderate",
              "badgeColor": "slate"
            },
            {
              "title": "7. The Reversal Trap",
              "text": "An answer that reverses the logical direction of the argument — e.g., using the conclusion to justify the premise instead of the other way around. **Defense:** Check whether the answer supports the author's reasoning direction or inverts it.",
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
          "text": "EXCEPT Question Strategy"
        },
        {
          "type": "paragraph",
          "text": "\"Strengthen EXCEPT\" questions ask you to find the one answer that does NOT strengthen. Four answers will support the argument from different angles; one will not."
        },
        {
          "type": "process",
          "title": "Systematic EXCEPT Approach",
          "steps": [
            "**Understand the hypothesis clearly.** What specific claim are you asked to support?",
            "**Sweep all five choices.** For each, ask: \"Does this make the hypothesis more plausible?\" Tag each as S (strengthens) or X (does not).",
            "**Expect four S's and one X.** If you have two X's, re-evaluate the borderline cases by asking whether they provide even indirect support.",
            "**Verify the lone X.** Confirm it either has no effect on the hypothesis or actively undermines it (e.g., by providing an alternative explanation)."
          ]
        },
        {
          "type": "paragraph",
          "text": "The most common correct answer on EXCEPT questions provides an **alternative explanation** — it gives a different mechanism or cause that reduces the need for the hypothesis, thereby failing to strengthen it."
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
              "\"Which one of the following, if true, most strengthens the argument?\"",
              "Standard Strengthen"
            ],
            [
              "\"Which one of the following, if true, most supports the claim above?\"",
              "Standard Strengthen (synonym)"
            ],
            [
              "\"Which one of the following, if true, lends the most support to the argument?\"",
              "Standard Strengthen (synonym)"
            ],
            [
              "\"Which one of the following, if true, most helps to justify the reasoning above?\"",
              "Standard Strengthen (synonym)"
            ],
            [
              "\"Each of the following, if true, strengthens the argument EXCEPT:\"",
              "Strengthen EXCEPT — find the one that does NOT strengthen"
            ],
            [
              "\"Each of the following, if true, provides some support… EXCEPT:\"",
              "Strengthen EXCEPT (synonym)"
            ]
          ]
        },
        {
          "type": "hr"
        },
        { "type": "diff-note", "text": "{{~change~}} The Mastery Course version expands this Test Day Checklist from 7 items to 8, inserting item 4: 'If this is a recommendation or tradeoff question, does the answer improve the exact cost-benefit balance the author relies on?' and updating item 6 to also warn against 'merely adding interesting background.' The Mastery Course also changes 'Trap 5: True But Irrelevant' in the traps section above to 'True But Irrelevant / Mere Relevance' with added guidance for recommendation questions. Both changes reflect the non-causal support lens that is the Mastery Course's most significant content addition.", "variant": "comment" },
        {
          "type": "callout",
          "title": "Test Day Checklist",
          "variant": "summary",
          "text": "Before selecting your answer on any Strengthen question:\n\n**1.** Can you state the conclusion in your own words?\n**2.** Can you identify the specific gap between evidence and conclusion?\n**3.** Does your chosen answer make the conclusion MORE likely (not less)?\n**4.** Does the answer bridge the MAIN gap, not a secondary detail?\n**5.** Does the answer strengthen ON ITS OWN, without requiring additional assumptions?\n**6.** Have you checked that you haven't fallen for a weakener or premise-booster trap?\n**7.** For EXCEPT questions: have you verified that four answers strengthen and only one does not?"
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
          text: '**Find \u2192 Gap \u2192 Prephrase Strengthener \u2192 Evaluate & Eliminate**',
        },
        { type: 'h3', text: 'Decision Rules' },
        {
          type: 'table',
          headers: ['If You See', 'Do This'],
          rows: [
            ['Correlation \u2192 causation claim', 'Rule out alternative causes or add a control group'],
            ['Study without a comparison group', 'Supply the missing baseline or control'],
            ['Reverse-causation risk', 'Show the causal arrow runs in the stated direction'],
            ['Recommendation / tradeoff', 'Reduce the downside, increase the upside, or worsen the alternative'],
            ['Concept shift (X in premise, Y in conclusion)', 'Bridge the two concepts with a connecting fact'],
            ['Narrow statistic supporting a broad claim', 'Validate the sample or show it is representative'],
            ['Analogy (X is like Y)', 'Show X and Y are genuinely similar in the relevant respect'],
            ['No clear pattern', 'Use the support lens: what makes the conclusion less fragile?'],
          ],
        },
        { type: 'h3', text: 'Traps' },
        {
          type: 'table',
          headers: ['Trap', 'How to Spot'],
          rows: [
            ['**Weakener in disguise**', 'Direction Check: does the answer make the conclusion less likely?'],
            ['**Premise repeater**', 'The answer echoes existing evidence without adding new information.'],
            ['**Irrelevant scope**', 'Different population, time frame, or issue than the conclusion targets.'],
            ['**Scope mismatch ("some" vs. "most")**', 'The answer\'s quantifier is too narrow to support the conclusion\'s scope.'],
            ['**True but no impact**', 'Remove the answer mentally; if argument strength is unchanged, eliminate.'],
          ],
        },
        { type: 'h3', text: 'Quick Distinctions' },
        {
          type: 'table',
          headers: ['Strengthen vs.', 'Key Difference'],
          rows: [
            ['**Weaken**', 'Mirror image: same gap, opposite direction. Strengthen fills it; Weaken widens it.'],
            ['**Sufficient Assumption**', 'Strengthen needs only a partial increase in probability; SA must guarantee the conclusion.'],
          ],
        },
        { type: 'h3', text: 'EXCEPT Strategy' },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Tag each choice S (strengthens) or X (does not). Expect four S\'s and one X. The correct answer usually provides an alternative explanation or has zero impact on the hypothesis. If you find two X\'s, re-evaluate borderline cases for even indirect support.',
        },
        { type: 'h3', text: 'Stems' },
        {
          type: 'list',
          items: [
            '"Which one of the following, if true, most strengthens the argument?"',
            '"Which one of the following, if true, most supports the conclusion drawn above?"',
            '"Which one of the following, if true, most helps to justify the reasoning above?"',
            '"Which one of the following, if true, provides the strongest support for the argument?"',
            '"Each of the following, if true, strengthens the argument EXCEPT:"',
            '"Which one of the following principles, if valid, provides the most support?"',
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          title: 'The One Thing',
          text: '**The right answer fills the exact gap between premises and conclusion \u2014 not a different gap, and not a new argument.**',
        },
      ],
    },
  },
};
