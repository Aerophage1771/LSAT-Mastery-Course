import { Lesson } from '../../types';

export const Lesson12_ReferenceGuide: Lesson = {
  id: '1-12',
  title: 'Reference Guide',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Argument Part: Complete Reference' },
    {
      type: 'paragraph',
      text: 'A condensed reference for every concept, role, method, and trap in Argument Part questions. Print this or bookmark it for review before test day.',
    },
    { type: 'hr' },

    { type: 'h3', text: 'The 5-Step Method' },
    {
      type: 'process',
      steps: [
        '**Find the Target:** Read the question stem. Bracket the specific sentence or phrase being asked about in the stimulus.',
        '**Analyze & Hypothesize:** Read the full stimulus. For each sentence, form a quick hypothesis: Is it a fact? An opinion? A counterpoint?',
        '**Map the Structure:** Use indicator words and the Why Test to identify the Main Conclusion. Trace the flow of support: which sentences support which other sentences?',
        '**Pinpoint & Prephrase:** State the target sentence\'s role in your own words before looking at the answer choices. Be specific: "This is a premise supporting the intermediate conclusion."',
        '**Evaluate Choices:** Find the abstract match for your prephrase. Verify both the role label AND the specific relationship described.',
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Core Foundations Before You Label Roles' },
    {
      type: 'list',
      ordered: false,
      items: [
        '**Support means "makes more likely," not always "proves with certainty."**',
        '**An argument exists only when one claim is offered as a reason to believe another claim.**',
        '**Assumptions are the missing links that explain why the premise is supposed to help the conclusion.**',
        '**If no statement supports another, you are looking at background, context, or a phenomenon rather than a standard argument.**',
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Parsing Toolkit Quick Reference' },
    {
      type: 'table',
      headers: ['Tool', 'Ask yourself...', 'Result'],
      rows: [
        [
          '**Sentence kernel**',
          '"What is the core subject + verb + claim once I strip away modifiers?"',
          'You isolate the main assertion before judging its role.',
        ],
        [
          '**Structure vs. detail**',
          '"Which words are doing logical work, and which are only narrowing or describing?"',
          'You avoid mistaking descriptive detail for argumentative function.',
        ],
        [
          '**Clause splitting**',
          '"Can I break this long sentence into smaller units?"',
          'You see whether one sentence contains multiple claims with different functions.',
        ],
        [
          '**Referential tracking**',
          '"What exactly do *this, that, these, such, it,* or *they* refer to?"',
          'You avoid assigning a sentence to the wrong idea or wrong speaker.',
        ],
        [
          '**Comparative parsing**',
          '"Compared to what? Better or worse in what respect?"',
          'You surface hidden baselines and avoid reading a comparison as an absolute claim.',
        ],
        [
          '**Rhetorical-question conversion**',
          '"If this were rewritten as a statement, what would it say?"',
          'You treat rhetorical questions as assertions rather than as neutral inquiries.',
        ],
        [
          '**Concrete translation**',
          '"What is a simple real-world version of this claim?"',
          'You make abstract language easier to map structurally.',
        ],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Paragraph-Level Referentials',
      text: 'When a later sentence says **this result**, **that claim**, **such a policy**, or **these critics**, force yourself to point back to the exact earlier idea it names. On harder stimuli, that single move often determines whether you identify context, rebuttal, or support correctly.',
    },
    { type: 'hr' },

    { type: 'h3', text: 'All Argument Roles' },
    {
      type: 'table',
      headers: ['Role', 'Frequency', 'Definition', 'Indicator Words'],
      rows: [
        [
          '**Premise**',
          '53%',
          'Fact, evidence, or reason that supports a conclusion',
          '*because, since, for, after all, given that*',
        ],
        [
          '**Main Conclusion**',
          '13%',
          'Ultimate point; receives support, gives none',
          '*therefore, thus, so, hence, consequently*',
        ],
        [
          '**Intermediate Conclusion**',
          '11%',
          'Bridge: receives support AND gives support',
          '*so [mid-argument], this shows that*',
        ],
        [
          '**Context / Background**',
          '9%',
          'Sets the stage; no argumentative force',
          '*It has been noted that, Historically*',
        ],
        [
          '**Opposing Viewpoint**',
          '8%',
          'A claim the author argues against',
          '*Some argue, Critics claim, It is believed*',
        ],
        [
          '**Concession**',
          '5%',
          'A point the author grants to the other side',
          '*Although, While it is true, Granted*',
        ],
        [
          '**Phenomenon**',
          '<1%',
          'An observation the argument explains',
          '*Surprisingly, Paradoxically, It is puzzling*',
        ],
      ],
    },

    { type: 'h3', text: 'Indicator Word Quick Reference' },
    {
      type: 'table',
      headers: ['Category', 'Words & Phrases'],
      rows: [
        ['Conclusion', '*therefore, thus, so, hence, consequently, it follows that, this shows that, we can conclude*'],
        ['Premise', '*because, since, for, after all, given that, as evidenced by, due to, on the grounds that*'],
        [
          'Contrast/Pivot',
          '*but, however, yet, although, while, nevertheless, despite, on the other hand, nonetheless*',
        ],
        ['Example', '*for instance, for example, such as, to illustrate, consider*'],
        ['Concession', '*although, while it is true that, granted, admittedly, despite, even though*'],
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Support Spectrum Quick Reference' },
    {
      type: 'table',
      headers: ['Level', 'Meaning', 'Key diagnostic question'],
      rows: [
        ['**No support**', 'The statement does not help the target claim at all.', '"If this were true, would the other claim be any more likely?"'],
        ['**Weak support**', 'The statement helps a little but depends on a large missing link.', '"What major assumption is doing the real work here?"'],
        ['**Strong support**', 'The statement gives the target claim substantial backing.', '"Does this make the claim noticeably more credible?"'],
        ['**Deductive support**', 'If the premise is true, the conclusion must be true.', '"Is there any gap left at all?"'],
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'The Why Test' },
    { type: 'paragraph', text: 'The single most reliable technique for identifying the main conclusion:' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Pick a candidate conclusion.',
        'Ask "**Why?**" or "**Why should I believe this?**"',
        'If the other sentences in the argument answer the "Why?", you have found the conclusion.',
        'If asking "Why?" gets no answer from the argument, the statement is a premise.',
      ],
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'Pair It with the Support Test',
      text: 'Also ask: **If this statement were true, would it make some other statement more likely?** If yes, it is doing support work. If no, it may be context or description rather than a premise.',
    },
    { type: 'hr' },

    { type: 'h3', text: 'Argument or Non-Argument?' },
    {
      type: 'table',
      headers: ['If the stimulus...', 'Then it is likely...', 'Role implication'],
      rows: [
        [
          'Uses one claim to justify another claim',
          '**An argument**',
          'Premise/conclusion labels are in play.',
        ],
        [
          'Only reports facts or sets the stage',
          '**Background / context**',
          'Do not force support labels onto neutral setup.',
        ],
        [
          'States a puzzling result without defending it',
          '**A phenomenon**',
          'Expect explanation-oriented structure rather than ordinary proof.',
        ],
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Common Argument Structures' },
    {
      type: 'breakdown',
      labels: { title: 'Pattern', text: 'Structure' },
      colWidth: 'narrow',
      items: [
        {
          title: 'Simple Argument',
          text: 'Premise(s) → Main Conclusion. The most basic form. One or more facts directly supporting a single claim.',
          badge: 'Most Common',
          badgeColor: 'indigo',
        },
        {
          title: 'Chain Argument',
          text: 'Premise → Intermediate Conclusion → Main Conclusion. A multi-step argument where the intermediate conclusion acts as a bridge.',
          badge: 'Common',
          badgeColor: 'blue',
        },
        {
          title: 'Rebuttal',
          text: 'Opposing View + "But/However" + Author\'s Conclusion. The author presents someone else\'s position, then argues against it.',
          badge: 'Common',
          badgeColor: 'blue',
        },
        {
          title: 'Concession + Conclusion',
          text: '"Although [granted point]... [pivot]... Main Conclusion." The author acknowledges a counterpoint then overrides it.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
        {
          title: 'Phenomenon + Explanation',
          text: 'Surprising observation → Proposed explanation. The "conclusion" is the explanation for why the phenomenon occurs.',
          badge: 'Rare',
          badgeColor: 'slate',
        },
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Common Traps' },
    {
      type: 'breakdown',
      labels: { title: 'Trap', text: 'How to Avoid It' },
      items: [
        {
          title: 'The Reversal',
          text: "The answer swaps premise and conclusion roles, describing the target as supporting something when it's actually being supported (or vice versa). **Fix:** Always confirm the direction of support before evaluating choices.",
          badge: 'Very Common',
          badgeColor: 'red',
        },
        {
          title: 'The Wrong Voice',
          text: "The answer describes the target as the author's view when it's actually the opposing viewpoint, or vice versa. **Fix:** Track who is saying what. On rebuttal questions, also ask whether the target is the opponent's conclusion or only a premise inside the opponent's reasoning.",
          badge: 'Common',
          badgeColor: 'red',
        },
        {
          title: 'Nested Opponent Mapping',
          text: 'On hard rebuttal stimuli, "the other side" may contain its own premise-conclusion structure. **Fix:** Prephrase in two layers: role + owner. For example, "a premise in the argument the author rejects" or "the conclusion the author rebuts."',
          badge: 'Common',
          badgeColor: 'red',
        },
        {
          title: 'The Mischaracterization',
          text: 'The role label is correct (e.g., "premise") but the specific relationship described is wrong (e.g., "supports X" when it actually supports Y). **Fix:** Read the full answer choice. Verify every noun and relationship described.',
          badge: 'Common',
          badgeColor: 'red',
        },
        {
          title: 'The Merely-True Description',
          text: 'The answer says something accurate about the sentence\'s topic or content but never tells you what the sentence **does** in the argument. **Fix:** Demand a functional description: support, concession, rebuttal target, hypothetical consequence, context, and so on.',
          badge: 'Common',
          badgeColor: 'red',
        },
        {
          title: 'Abstract Disguise',
          text: 'The correct answer uses highly abstract language that obscures a simple role. "A view that other statements are intended to support" just means "conclusion." **Fix:** Translate abstract answers into plain English before evaluating.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
        {
          title: 'The Quoted-Text Assumption Trap',
          text: 'A quoted sentence in the stimulus is rarely the missing-link assumption students are hunting for. **Fix:** Default away from "assumption" unless the argument simply takes that stated claim for granted without support. If the target is supported or is itself doing support work, it is not the missing link.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'LR Family Transfer Map' },
    {
      type: 'breakdown',
      labels: { title: 'Family', text: 'Shared logic' },
      items: [
        {
          title: 'Argument-family stems',
          text: 'Flaw, Weaken, Evaluate, Strengthen, Necessary Assumption, and Sufficient Assumption all care about the same support link. The stem changes whether you diagnose, attack, test, or repair that link.',
        },
        {
          title: 'Inference-family stems',
          text: 'Must Be True, Most Strongly Supported, Must Be False, and Point at Issue all reward careful standards of proof. They are related tasks, not isolated boxes.',
        },
        {
          title: 'Pattern-family stems',
          text: 'Method, Parallel Reasoning, and Parallel Flaw all depend on preserving structure while ignoring topic. If your map is clean, abstraction becomes easier.',
        },
        {
          title: 'Fact-set stems',
          text: 'Paradox / Resolve and many explanation tasks begin with facts rather than an argument. Your first job is recognizing that you should explain or infer, not attack a missing premise that may not exist.',
        },
      ],
    },

    { type: 'h3', text: 'Indicator Word Cautions' },
    {
      type: 'table',
      headers: ['Word / pattern', 'Common mistake', 'Correct habit'],
      rows: [
        ['**since**', 'Treating every instance as a premise indicator', 'Check whether it means **because** or instead means **from that time onward**.'],
        ['**for**', 'Assuming it always introduces a separate premise sentence', 'See whether it compresses a reason into the same sentence or is just part of the phrasing.'],
        ['**because**', 'Assuming the sentence must be simple and one-directional', 'Watch for compressed structures where premise and conclusion appear in the same sentence.'],
        ['**more / less / better / worse**', 'Reading the claim as absolute instead of comparative', 'Ask for the comparison baseline and the dimension of comparison before assigning role.'],
        ['A **question-mark sentence**', 'Treating it as neutral or informational by default', 'Ask whether it is really a rhetorical assertion functioning as support or as a conclusion.'],
      ],
    },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Test Day Checklist',
      text: 'Before selecting your answer on any Argument Part question:\n1. Have you read the stem first and identified the exact task?\n2. Have you confirmed there is an argument rather than just background or description?\n3. Can you state the Main Conclusion in your own words?\n4. Can you name the role of the target sentence in your own words?\n5. Does your chosen answer match both the role AND the specific relationship?\n6. Have you verified the direction of support (who supports whom)?\n7. On rebuttal questions, have you mapped whose claim the target is and whether it is that speaker\'s conclusion or support?\n8. If the support feels shaky, what missing assumption is making the link work?\n9. If you are not certain, are you in hunt mode or elimination mode — and have you acted accordingly?',
    },
    { type: 'h3', text: 'Blind Review Workflow' },
    {
      type: 'process',
      title: 'How to Review LR Work',
      steps: [
        '**Step 1 — Mark your certainty honestly:** Separate 100% certainty from leaning and from guessing.',
        '**Step 2 — Rework before checking:** Solve the question again untimed before looking at the credited answer or explanation.',
        '**Step 3 — Justify one right answer:** State exactly why the credited choice satisfies the stem.',
        '**Step 4 — Eliminate four wrong answers:** Explain why each wrong choice fails. Do not stop after recognizing the right answer.',
        '**Step 5 — Diagnose the miss type:** Was the problem reading, proof standard, task confusion, weak prephrasing, or premature attraction to an answer choice?',
        '**Step 6 — Track confidence errors:** Notice overconfidence (wrong but certain) and underconfidence (right but shaky). Both patterns matter.',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'What Blind Review Actually Measures',
      text: 'Blind Review separates timing problems from understanding problems. If you can solve the question on review, the fix is speed or discipline. If you still cannot justify one right and four wrong, the fix is conceptual.',
    },
    {
      type: 'breakdown',
      labels: { title: 'Confidence pattern', text: 'What to do with it' },
      items: [
        {
          title: 'Wrong and confident',
          text: 'This is an overconfidence error. Find the shortcut or story that fooled you.',
        },
        {
          title: 'Right but shaky',
          text: 'This is an underconfidence error. Your reasoning works, but it is not yet stable under time pressure.',
        },
        {
          title: 'Wrong and unsure',
          text: 'This is usually a true method or comprehension gap. Rebuild the question from the stem and stimulus up.',
        },
      ],
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "Argument Part: Complete Reference"
        },
        {
          "type": "paragraph",
          "text": "A condensed reference for every concept, role, method, and trap in Argument Part questions. Print this or bookmark it for review before test day."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "The 5-Step Method"
        },
        {
          "type": "process",
          "steps": [
            "**Find the Target:** Read the question stem. Bracket the specific sentence or phrase being asked about in the stimulus.",
            "**Analyze & Hypothesize:** Read the full stimulus. For each sentence, form a quick hypothesis: Is it a fact? An opinion? A counterpoint?",
            "**Map the Structure:** Use indicator words and the Why Test to identify the Main Conclusion. Trace the flow of support: which sentences support which other sentences?",
            "**Pinpoint & Prephrase:** State the target sentence's role in your own words before looking at the answer choices. Be specific: \"This is a premise supporting the intermediate conclusion.\"",
            "**Evaluate Choices:** Find the abstract match for your prephrase. Verify both the role label AND the specific relationship described."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "All Argument Roles"
        },
        {
          "type": "table",
          "headers": [
            "Role",
            "Frequency",
            "Definition",
            "Indicator Words"
          ],
          "rows": [
            [
              "**Premise**",
              "53%",
              "Fact, evidence, or reason that supports a conclusion",
              "*because, since, for, after all, given that*"
            ],
            [
              "**Main Conclusion**",
              "13%",
              "Ultimate point; receives support, gives none",
              "*therefore, thus, so, hence, consequently*"
            ],
            [
              "**Intermediate Conclusion**",
              "11%",
              "Bridge: receives support AND gives support",
              "*so [mid-argument], this shows that*"
            ],
            [
              "**Context / Background**",
              "9%",
              "Sets the stage; no argumentative force",
              "*It has been noted that, Historically*"
            ],
            [
              "**Opposing Viewpoint**",
              "8%",
              "A claim the author argues against",
              "*Some argue, Critics claim, It is believed*"
            ],
            [
              "**Concession**",
              "5%",
              "A point the author grants to the other side",
              "*Although, While it is true, Granted*"
            ],
            [
              "**Phenomenon**",
              "<1%",
              "An observation the argument explains",
              "*Surprisingly, Paradoxically, It is puzzling*"
            ]
          ]
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
              "Conclusion",
              "*therefore, thus, so, hence, consequently, it follows that, this shows that, we can conclude*"
            ],
            [
              "Premise",
              "*because, since, for, after all, given that, as evidenced by, due to, on the grounds that*"
            ],
            [
              "Contrast/Pivot",
              "*but, however, yet, although, while, nevertheless, despite, on the other hand, nonetheless*"
            ],
            [
              "Example",
              "*for instance, for example, such as, to illustrate, consider*"
            ],
            [
              "Concession",
              "*although, while it is true that, granted, admittedly, despite, even though*"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "{{+The 80/20 Rule+}}"
        },
        {
          "type": "callout",
          "title": "{{+Role Frequency Shortcut+}}",
          "variant": "tip",
          "text": "{{+Approximately **78% of all Argument Part questions** target just three roles: **Premise (53.5%)**, **Main Conclusion (13.2%)**, and **Intermediate Conclusion (11.1%)**. Master these three first, and you will have a strong hypothesis for the vast majority of questions you encounter.+}}"
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "{{+Weak vs. Strong Prephrase+}}"
        },
        {
          "type": "paragraph",
          "text": "{{+A specific prephrase is your best defense against trap answers. Compare these examples:+}}"
        },
        {
          "type": "table",
          "headers": ["{{+Situation+}}", "{{+Weak Prephrase+}}", "{{+Strong Prephrase+}}"],
          "rows": [
            ["{{+Target supports the conclusion+}}", "{{+\"It's a premise.\"+}}", "{{+\"It's a premise that provides evidence for the claim that cities should invest in transit.\"+}}"],
            ["{{+Target is supported AND supports+}}", "{{+\"It's in the middle.\"+}}", "{{+\"It's an intermediate conclusion supported by the study data, and it supports the main recommendation.\"+}}"],
            ["{{+Target is a view the author argues against+}}", "{{+\"It's not the author's view.\"+}}", "{{+\"It's an opposing viewpoint that the author's argument is designed to challenge.\"+}}"]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "{{+Abstract Language Translation Table+}}"
        },
        {
          "type": "paragraph",
          "text": "{{+LSAT answer choices often use dense, formal language. Use this table to decode abstract phrasing into plain English before evaluating:+}}"
        },
        {
          "type": "table",
          "headers": ["{{+Abstract Phrase in Answer Choice+}}", "{{+Plain English Translation+}}"],
          "rows": [
            ["{{+\"a claim that the argument takes as evidence\"+}}", "{{+A premise+}}"],
            ["{{+\"the overall conclusion drawn in the argument\"+}}", "{{+The main conclusion+}}"],
            ["{{+\"a subsidiary conclusion used to support the main conclusion\"+}}", "{{+An intermediate conclusion+}}"],
            ["{{+\"a claim that the argument is designed to refute\"+}}", "{{+The opposing viewpoint+}}"],
            ["{{+\"it acknowledges a fact that counts against the conclusion\"+}}", "{{+A concession+}}"],
            ["{{+\"the reasoning that it rejects\"+}}", "{{+The opposing argument / the other side's logic+}}"],
            ["{{+\"it denies a claim assumed in the reasoning it opposes\"+}}", "{{+It attacks an unstated assumption of the other side+}}"],
            ["{{+\"a phenomenon the argument seeks to explain\"+}}", "{{+The observation or fact being discussed+}}"],
            ["{{+\"a consequence drawn in order to cast doubt on a position\"+}}", "{{+Part of a reductio / counterfactual argument+}}"]
          ]
        },
        {
          "type": "callout",
          "title": "{{+The Substitution Technique+}}",
          "variant": "tip",
          "text": "{{+When you encounter a dense answer choice, replace every abstract phrase with the actual content from the stimulus. For example, if the choice says \"It denies a claim that the argument takes to be assumed in the reasoning that it rejects,\" translate each piece: \"the reasoning that it rejects\" = the opponent's argument; \"assumed in the reasoning\" = an unstated assumption of the opponent; \"It denies a claim\" = the author says this assumption is false. Now read the translated version and check if it fits.+}}"
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "{{+Attribution Phrases & Pivot Words+}}"
        },
        {
          "type": "paragraph",
          "text": "{{+Attribution phrases signal the opposing viewpoint; pivot words signal the author's response. These two tools together let you map any rebuttal structure instantly.+}}"
        },
        {
          "type": "table",
          "headers": ["{{+Attribution Phrase+}}", "{{+What It Signals+}}"],
          "rows": [
            ["{{+Some people argue that...+}}", "{{+An unnamed group holds a position the author will challenge+}}"],
            ["{{+It has been claimed that...+}}", "{{+A passive attribution — the author distances themselves from the claim+}}"],
            ["{{+Many believe that...+}}", "{{+A widely held view the author considers mistaken+}}"],
            ["{{+Critics contend that...+}}", "{{+An opposing camp has raised an objection+}}"],
            ["{{+Proponents of X say...+}}", "{{+A specific school of thought is being introduced for rebuttal+}}"],
            ["{{+According to conventional wisdom...+}}", "{{+The established view is about to be challenged+}}"],
            ["{{+The common assumption is that...+}}", "{{+A default belief the author will argue against+}}"]
          ]
        },
        {
          "type": "table",
          "headers": ["{{+Pivot Word/Phrase+}}", "{{+Strength of Contrast+}}"],
          "rows": [
            ["{{+But+}}", "{{+Direct, forceful rejection+}}"],
            ["{{+However+}}", "{{+Formal, measured disagreement+}}"],
            ["{{+Yet+}}", "{{+Concessive tone — acknowledges the view before rejecting it+}}"],
            ["{{+Nevertheless / Nonetheless+}}", "{{+The view has some merit, but the author still disagrees+}}"],
            ["{{+On the contrary+}}", "{{+Signals the author will assert the opposite+}}"],
            ["{{+This is mistaken / This is wrong+}}", "{{+Explicit rejection — doubles as the main conclusion+}}"],
            ["{{+In fact+}}", "{{+The author is about to correct the record+}}"]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "The Why Test"
        },
        {
          "type": "paragraph",
          "text": "The single most reliable technique for identifying the main conclusion:"
        },
        {
          "type": "list",
          "items": [
            "Pick a candidate conclusion.",
            "Ask \"**Why?**\" or \"**Why should I believe this?**\"",
            "If the other sentences in the argument answer the \"Why?\", you have found the conclusion.",
            "If asking \"Why?\" gets no answer from the argument, the statement is a premise."
          ],
          "ordered": true
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
            "text": "Structure"
          },
          "colWidth": "narrow",
          "items": [
            {
              "title": "Simple Argument",
              "text": "Premise(s) → Main Conclusion. The most basic form. One or more facts directly supporting a single claim.",
              "badge": "Most Common",
              "badgeColor": "indigo"
            },
            {
              "title": "Chain Argument",
              "text": "Premise → Intermediate Conclusion → Main Conclusion. A multi-step argument where the intermediate conclusion acts as a bridge.",
              "badge": "Common",
              "badgeColor": "blue"
            },
            {
              "title": "Rebuttal",
              "text": "Opposing View + \"But/However\" + Author's Conclusion. The author presents someone else's position, then argues against it.",
              "badge": "Common",
              "badgeColor": "blue"
            },
            {
              "title": "Concession + Conclusion",
              "text": "\"Although [granted point]... [pivot]... Main Conclusion.\" The author acknowledges a counterpoint then overrides it.",
              "badge": "Moderate",
              "badgeColor": "slate"
            },
            {
              "title": "Phenomenon + Explanation",
              "text": "Surprising observation → Proposed explanation. The \"conclusion\" is the explanation for why the phenomenon occurs.",
              "badge": "Rare",
              "badgeColor": "slate"
            }
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
            "text": "How to Avoid It"
          },
          "items": [
            {
              "title": "The Reversal",
              "text": "The answer swaps premise and conclusion roles, describing the target as supporting something when it's actually being supported (or vice versa). **Fix:** Always confirm the direction of support before evaluating choices.",
              "badge": "Very Common",
              "badgeColor": "red"
            },
            {
              "title": "The Wrong Voice",
              "text": "The answer describes the target as the author's view when it's actually the opposing viewpoint, or vice versa. **Fix:** Track who is saying what. Attribution phrases signal the opponent.",
              "badge": "Common",
              "badgeColor": "red"
            },
            {
              "title": "The Mischaracterization",
              "text": "The role label is correct (e.g., \"premise\") but the specific relationship described is wrong (e.g., \"supports X\" when it actually supports Y). **Fix:** Read the full answer choice. Verify every noun and relationship described.",
              "badge": "Common",
              "badgeColor": "red"
            },
            {
              "title": "Abstract Disguise",
              "text": "The correct answer uses highly abstract language that obscures a simple role. \"A view that other statements are intended to support\" just means \"conclusion.\" **Fix:** Translate abstract answers into plain English before evaluating.",
              "badge": "Moderate",
              "badgeColor": "slate"
            },
            {
              "title": "{{+The Hypothetical Trap+}}",
              "text": "{{+The answer confuses counterfactual reasoning (\"if X were true, then Y would follow\") with the author's actual claims. A hypothetical consequence used to cast doubt on a position is not the same as a premise the author believes. **Fix:** Ask whether the author asserts the statement as fact or uses it to explore a what-if scenario. If the language is conditional (\"would,\" \"could,\" \"if\"), treat it as a hypothetical, not a premise.+}}",
              "badge": "{{+Moderate+}}",
              "badgeColor": "slate"
            },
            {
              "title": "{{+The Abstract Language Trap+}}",
              "text": "{{+Overly general answer choices use phrases so broad they could apply to almost any role, tempting you to pick them by default. **Fix:** Demand specificity. Translate every abstract phrase into concrete terms from the stimulus. If the translated version does not precisely match the target's function, eliminate it.+}}",
              "badge": "{{+Moderate+}}",
              "badgeColor": "slate"
            },
            {
              "title": "{{+The Context-as-Premise Trap+}}",
              "text": "{{+Background information that sets the stage is mislabeled as a premise supporting the conclusion. Context has no argumentative force — it frames the discussion without doing support work. **Fix:** Apply the Support Test: \"If this statement were true, would it make the conclusion more likely?\" If it merely describes the situation without strengthening any claim, it is context, not a premise.+}}",
              "badge": "{{+Moderate+}}",
              "badgeColor": "slate"
            },
            {
              "title": "{{+The Phenomenon Trap+}}",
              "text": "{{+An observation the argument seeks to explain is mistaken for the conclusion. In phenomenon-plus-explanation structures, the conclusion is the explanation, not the surprising observation itself. **Fix:** Ask whether the stimulus is trying to prove the statement or trying to explain why it is true. If the argument explains it, it is the phenomenon; if the argument defends it, it is the conclusion.+}}",
              "badge": "{{+Moderate+}}",
              "badgeColor": "slate"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "{{+Pre-Answer Diagnostic Checklist+}}"
        },
        {
          "type": "process",
          "title": "{{+5-Point Check Before You Select+}}",
          "steps": [
            "{{+**Confirm the argument exists:** Is this a standard argument (one claim supports another), or is it background, a phenomenon, or a fact set? Do not force support labels onto non-arguments.+}}",
            "{{+**State the Main Conclusion:** Say it in your own words. If you cannot, re-read and apply the Why Test before proceeding.+}}",
            "{{+**Name the target's role:** Before looking at answer choices, state the target sentence's job and its specific relationship (e.g., \"a premise supporting the intermediate conclusion about X\").+}}",
            "{{+**Check the direction of support:** Confirm who supports whom. Verify that your prephrase has the arrow pointing the right way (premise → conclusion, not the reverse).+}}",
            "{{+**Verify both parts of the answer:** The chosen answer must get the role label right AND describe the specific relationship accurately. If either part fails, eliminate the choice.+}}"
          ]
        },
        {
          "type": "callout",
          "title": "Test Day Checklist",
          "variant": "summary",
          "text": "Before selecting your answer on any Argument Part question:\n1. Can you state the Main Conclusion in your own words?\n2. Can you name the role of the target sentence in your own words?\n3. Does your chosen answer match both the role AND the specific relationship?\n4. Have you verified the direction of support (who supports whom)?"
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
          text: '**Find Target \u2192 Analyze \u2192 Map \u2192 Prephrase \u2192 Evaluate**',
        },
        { type: 'h3', text: 'The Six Roles' },
        {
          type: 'table',
          headers: ['Role', 'Frequency', 'Key Signal'],
          rows: [
            ['Premise', '53%', '*because, since, for, after all, given that*'],
            ['Main Conclusion', '13%', '*therefore, thus, so, hence, consequently*'],
            ['Intermediate Conclusion', '11%', '*so [mid-argument], this shows that*'],
            ['Context / Background', '9%', '*It is well known, Historically*'],
            ['Opposing Viewpoint', '8%', '*Some argue, Critics claim, It is believed*'],
            ['Concession', '5%', '*Although, While it is true, Granted*'],
          ],
        },
        { type: 'h3', text: 'Decision Rules' },
        {
          type: 'table',
          headers: ['If You See...', 'Do This'],
          rows: [
            ['*because, since, for*', 'Tag the next claim as a premise'],
            ['*therefore, thus, so*', 'Tag the next claim as a conclusion'],
            ['*Although, While it is true*', 'Tag as a concession \u2014 expect a pivot'],
            ['*Some argue, Critics claim*', 'Tag as an opposing viewpoint \u2014 find the rebuttal'],
            ['No indicator words at all', 'Apply the Why Test \u2014 the statement whose "Why?" is answered is the conclusion'],
            ['A sentence that is both supported AND supporting', 'Label it an intermediate conclusion'],
          ],
        },
        { type: 'h3', text: 'Traps' },
        {
          type: 'table',
          headers: ['Trap', 'How to Spot'],
          rows: [
            ['The Reversal', 'Answer swaps premise/conclusion direction \u2014 always confirm support direction'],
            ['The Wrong Voice', 'Answer attributes the target to the wrong speaker \u2014 track who says what'],
            ['The Mischaracterization', 'Correct role label but wrong relationship description \u2014 verify every noun'],
            ['The Merely-True Description', 'Answer describes the topic, not the function \u2014 demand a role + relationship'],
            ['Abstract Disguise', 'Correct answer hidden in formal language \u2014 translate abstract phrasing to plain English'],
          ],
        },
        { type: 'h3', text: 'Stems' },
        {
          type: 'list',
          items: [
            '"The statement that [X] plays which one of the following roles..."',
            '"The claim that [X] figures in the argument in which one of the following ways?"',
            '"Which one of the following most accurately describes the role of..."',
            '"The statement [X] is offered in the argument as..."',
            '"The claim that [X] serves which of the following functions in the argument?"',
            '"Which one of the following most accurately describes the function of [X]?"',
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          title: 'The One Thing',
          text: '**Every sentence in an LSAT argument has exactly one job. Name the job before you read the answers.**',
        },
      ],
    },
  },
};
