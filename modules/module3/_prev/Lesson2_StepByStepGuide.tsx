import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: '3-2',
  title: 'Step-by-Step: Method of Reasoning',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Step-by-Step: Method of Reasoning' },
    {
      type: 'paragraph',
      text: 'This lesson provides a complete, repeatable method for solving any Method of Reasoning question. Each step includes a concrete example, tips for when the step gets tricky, and a callout with a key insight. At the end, you will work through a full example applying all four steps.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing',
      text: 'You should spend roughly **1 minute and 30 seconds** per Method of Reasoning question. The 4-step method may feel slow at first, but with practice it becomes automatic. The key time-saver is developing a strong prephrase in Step 2 — this dramatically speeds up answer evaluation in Steps 3–4.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Overview' },
    {
      type: 'process',
      title: 'The 4-Step Method',
      steps: [
        '**Step 1 — Break Down the Argument:** Identify the conclusion, premises, and (in dialogues) which speaker to focus on.',
        '**Step 2 — Characterize the Method & Prephrase:** Describe the argumentative strategy in your own abstract words before reading answers.',
        '**Step 3 — Evaluate Answer Choices Against Your Prephrase:** Scan for the choice that best matches your abstract description.',
        '**Step 4 — Systematically Eliminate Traps:** Apply targeted checks to remaining candidates.',
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 1: Break Down the Argument' },
    {
      type: 'paragraph',
      text: 'Before you can describe how an argument works, you must understand its parts. Examine the argument to identify the conclusion, the evidence, and any opposing viewpoints. In dialogues, focus on the speaker named in the question stem.',
    },

    { type: 'h4', text: 'What to Identify' },
    {
      type: 'breakdown',
      labels: { title: 'Component', text: 'What to Look For' },
      items: [
        {
          title: 'Format',
          text: "Is this a standalone argument or a dialogue between two speakers? In dialogues, the question stem will specify which speaker's method you need to describe.",
          badge: 'First',
          badgeColor: 'blue',
        },
        {
          title: 'Main Conclusion',
          text: 'What is the author (or specified speaker) trying to prove? Use the Why Test from Module 2 if needed.',
          badge: 'Second',
          badgeColor: 'blue',
        },
        {
          title: 'Premises / Evidence',
          text: 'What facts, examples, data, or principles does the author use as support? How do they connect to the conclusion?',
          badge: 'Third',
          badgeColor: 'blue',
        },
        {
          title: 'Opposing View (if any)',
          text: 'Does the argument respond to another position? In dialogues, the first speaker often provides the view being challenged.',
          badge: 'Fourth',
          badgeColor: 'blue',
        },
      ],
    },

    { type: 'h4', text: 'Example' },
    {
      type: 'blockquote',
      text: '"Historian: Some scholars argue that the Roman Empire fell primarily due to barbarian invasions. However, the empire had successfully repelled invasions for centuries. What changed was not the strength of external threats but the internal decay of Roman institutions — corruption, economic collapse, and political fragmentation made the empire unable to mount effective defenses. The fall of Rome was therefore primarily an internal collapse, not an external conquest."',
    },

    { type: 'paragraph', text: 'Breaking this down:' },
    {
      type: 'breakdown',
      labels: { title: 'Component', text: 'Identification' },
      items: [
        {
          title: 'Format',
          text: 'Standalone argument (single speaker: the historian).',
          badge: 'Format',
          badgeColor: 'slate',
        },
        {
          title: 'Opposing View',
          text: '"Some scholars argue that the Roman Empire fell primarily due to barbarian invasions." The historian is challenging this position.',
          badge: 'Opposing View',
          badgeColor: 'slate',
        },
        {
          title: 'Premises',
          text: '(1) The empire had successfully repelled invasions for centuries. (2) Internal decay — corruption, economic collapse, political fragmentation — made defenses ineffective.',
          badge: 'Premises',
          badgeColor: 'slate',
        },
        {
          title: 'Main Conclusion',
          text: '"The fall of Rome was therefore primarily an internal collapse, not an external conquest."',
          badge: 'Conclusion',
          badgeColor: 'indigo',
        },
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'When This Step Gets Tricky',
      text: "In complex dialogues, each speaker may have their own conclusion, premises, and method. Make sure you are analyzing the correct speaker's argument. The question stem will always tell you which speaker to focus on — read it first.",
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 2: Characterize the Method & Prephrase' },
    {
      type: 'paragraph',
      text: "This is the most important step. Based on your argument breakdown, describe the strategy in your own abstract terms. Don't worry about perfect phrasing — capture the essence of the logical move.",
    },

    { type: 'h4', text: 'The Key Question' },
    {
      type: 'paragraph',
      text: 'Ask yourself: **"How did the author get from the evidence to the conclusion?"** Then translate your answer into abstract terms by stripping out the specific nouns.',
    },

    { type: 'h4', text: 'The Abstract Translation Technique' },
    {
      type: 'paragraph',
      text: 'Here is the most powerful tool for Method of Reasoning questions. Take your concrete understanding and translate it into abstract language:',
    },

    {
      type: 'table',
      headers: ['Concrete Understanding', 'Abstract Translation'],
      rows: [
        [
          '"The historian says Rome fell because of internal decay, not barbarian invasions"',
          '"The argument offers an alternative cause for an observed event, challenging the proposed explanation"',
        ],
        [
          '"The environmentalist compares species extinction to cancer deaths to show the developer\'s logic is bad"',
          '"The argument applies the opponent\'s reasoning to a different case where it yields an absurd result"',
        ],
        [
          '"The author rules out Mercury and Venus to conclude the meteorites came from Mars"',
          '"The argument eliminates alternative possibilities to support the remaining option as the conclusion"',
        ],
        [
          '"Ruth gives the example of the Kelton Company to prove Joanna wrong"',
          '"The argument provides a specific instance that contradicts a general claim"',
        ],
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'The Prephrase Checklist',
      text: 'Your prephrase should answer these questions:\n\n1. **What action does the author take?** (e.g., compare, rule out, cite an example, challenge)\n2. **What is the logical relationship?** (e.g., analogy, counterexample, alternative explanation)\n3. **What is the goal?** (e.g., to disprove a claim, to support a conclusion, to show a flaw)\n\nA good prephrase: *"The author challenges the opponent\'s generalization by providing a specific case where the rule doesn\'t hold."*\nA weak prephrase: *"The author disagrees."*',
    },

    { type: 'h4', text: 'Tether the Abstraction Back to the Stimulus' },
    {
      type: 'paragraph',
      text: 'Abstract language is only useful if you can still point to the exact part of the stimulus that justifies each clause. After you form a prephrase, test it piece by piece against the text. If one clause cannot be tied to a concrete move in the argument, your description is too loose.',
    },
    {
      type: 'breakdown',
      labels: { title: 'Clause', text: 'What to verify in the stimulus' },
      items: [
        {
          title: 'Action clause',
          text: 'If your answer says the author *compares*, *rules out*, *challenges*, or *applies*, point to the exact sentence where that action happens.',
          badge: 'Match',
          badgeColor: 'indigo',
        },
        {
          title: 'Target clause',
          text: 'If your answer says the author challenges an assumption, an explanation, or a generalization, confirm that the target is really that specific thing and not a nearby idea.',
          badge: 'Precision',
          badgeColor: 'blue',
        },
        {
          title: 'Goal clause',
          text: 'If the answer says the move is used to support, undermine, narrow, or redirect the conclusion, make sure the stimulus actually uses the move for that purpose.',
          badge: 'Role',
          badgeColor: 'green',
        },
      ],
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'Piecemeal Analysis for Long Answer Choices',
      text: 'Hard Method answers often hide one wrong clause inside an otherwise accurate description. Split long answers at words like **by**, **while**, **and**, or **in order to**. Verify each clause independently. If any single clause misdescribes the stimulus, eliminate the answer.',
    },

    { type: 'h4', text: 'Common Method Quick-Reference' },
    {
      type: 'paragraph',
      text: 'When forming your prephrase, check whether the argument matches one of these common strategies:',
    },
    {
      type: 'list',
      items: [
        'Did they compare this situation to another one? → **Analogy**',
        'Did they rule out other options one by one? → **Process of Elimination**',
        'Did they give a specific case that disproves a general rule? → **Counterexample**',
        'Did they point out that a proposal would backfire? → **Negative Consequences**',
        'Did they offer a different cause for the same event? → **Alternative Explanation**',
        'Did they expose a hidden assumption and attack it? → **Challenging an Assumption**',
        'Did they apply a general rule to a specific case? → **Applying a Principle**',
        'Did they concede part of a view and then redirect the argument? → **Concession / Qualification**',
        'Did they rely on data, a survey, or an empirical finding to support or challenge a claim? → **Evidence / Study-Based Reasoning**',
        'Did they narrow a claim by carving out a limit or exception? → **Restricting Scope**',
        "Did they show the opponent's logic leads to an absurd result? → **Refutation by Analogy (Reductio)**",
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'When This Step Gets Tricky',
      text: 'Some arguments use a combination of strategies — for example, challenging an assumption *and* offering an alternative explanation. In these cases, prephrase the dominant strategy: the one that most directly connects the key evidence to the conclusion. The answer choices will help you distinguish between overlapping strategies.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 3: Evaluate Answer Choices Against Your Prephrase' },
    {
      type: 'paragraph',
      text: 'Scan the answer choices for the one that best matches your prephrase. The correct answer will be an abstract description of the logical pattern you identified. It should accurately describe the *action* the argument takes and the *relationship* between the evidence and the conclusion.',
    },

    {
      type: 'breakdown',
      labels: { title: 'Match Type', text: 'Description' },
      items: [
        {
          title: 'Direct Match',
          text: 'The correct choice uses standard logical vocabulary that matches your prephrase. If you prephrased "counterexample," the answer might say "presents a specific instance that contradicts a generalization."',
          badge: 'Most Common',
          badgeColor: 'green',
        },
        {
          title: 'Conceptual Match',
          text: 'The correct choice describes the same pattern using different but equivalent terms. An argument using a "counterexample" could be described as "challenging a general claim by presenting a case where it does not hold."',
          badge: 'Common',
          badgeColor: 'blue',
        },
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: "Tip: Don't Get Anchored on Vocabulary",
      text: 'The LSAT rarely uses the exact term you prephrased. "Counterexample" might appear as "a specific instance that contradicts," "analogy" might appear as "comparing two similar situations." Focus on whether the *logic* matches, not whether the *words* match.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 4: Systematically Eliminate Traps' },
    {
      type: 'paragraph',
      text: 'If you are unsure after Step 3, use targeted checks to eliminate wrong answers. Method of Reasoning wrong answers almost always fail one of these three checks:',
    },

    { type: 'h4', text: 'The Three Elimination Checks' },
    {
      type: 'breakdown',
      labels: { title: 'Check', text: 'How to Apply' },
      items: [
        {
          title: 'Check the Action',
          text: 'Does the answer choice accurately describe what the speaker *did*? If it says the speaker "questions a premise," make sure they actually questioned a premise. Many traps describe an action that never happened in the argument.',
          badge: 'Check 1',
          badgeColor: 'indigo',
        },
        {
          title: 'Check the Scope',
          text: 'Is the description accurate but too narrow or too broad? An argument might use an example as part of a larger strategy. The correct choice will capture the *main* strategy, not a subsidiary detail.',
          badge: 'Check 2',
          badgeColor: 'blue',
        },
        {
          title: 'Check the Speaker',
          text: "In dialogue questions, make sure the answer choice is describing the correct speaker's argument. A common trap describes what the *other* speaker did.",
          badge: 'Check 3',
          badgeColor: 'slate',
        },
      ],
    },

    { type: 'h4', text: 'Common Wrong Answer Patterns' },
    {
      type: 'table',
      headers: ['Trap Type', 'What It Does', 'How to Spot It'],
      rows: [
        [
          '**Wrong Action**',
          'Describes a method the argument did not use',
          'The answer says "questions a premise" but the argument accepted all premises and attacked the logical connection instead',
        ],
        [
          '**Wrong Direction**',
          'Describes the opposite of what happened',
          'The answer says "supports the claim" but the argument was designed to *undermine* the claim',
        ],
        [
          '**Wrong Speaker**',
          "Describes the other speaker's method (in dialogues)",
          "Check which speaker the question asks about and verify the answer describes *that* speaker's strategy",
        ],
        [
          '**Partial Match**',
          'Accurately describes one part but mischaracterizes the overall strategy',
          'The answer correctly notes the argument uses an "example" but calls it an "analogy" when it is actually a "counterexample"',
        ],
        [
          '**Content Trap**',
          'Restates *what* the argument concludes instead of *how* it reasons',
          "The answer describes the conclusion's content rather than the logical strategy used to reach it",
        ],
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'When to Use Process of Elimination',
      text: "If your prephrase matches one answer clearly, go with it — don't second-guess yourself. Use elimination only when:\n\n1. No answer is a clear match for your prephrase.\n2. Two or more answers seem plausible.\n\nIn these cases, apply the three checks systematically to each remaining candidate. The answer that passes all three checks is correct.",
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: "The 4-Step Method gives you a repeatable process: **Break Down → Prephrase → Evaluate → Eliminate.**\n\n• **Prephrasing is the single most important habit.** Translate the argument into abstract terms before reading answers.\n• The **Abstract Translation Technique** is your core tool: strip out the nouns and describe the logical pattern.\n• Wrong answers almost always fail one of three checks: **Wrong Action**, **Wrong Scope**, or **Wrong Speaker**.\n• When in doubt, apply the three elimination checks systematically. The answer that passes all three is correct.\n• Don't get anchored on vocabulary — focus on whether the *logic* matches your prephrase, not whether the *exact term* appears.",
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "The 4-Step Method for Method of Reasoning Questions"
        },
        {
          "type": "paragraph",
          "text": "This lesson provides a complete, repeatable method for solving any Method of Reasoning question. Each step includes a concrete example, tips for when the step gets tricky, and a callout with a key insight. At the end, you will work through a full example applying all four steps."
        },
        {
          "type": "callout",
          "title": "Timing",
          "variant": "tip",
          "text": "You should spend roughly **1 minute and 30 seconds** per Method of Reasoning question. The 4-step method may feel slow at first, but with practice it becomes automatic. The key time-saver is developing a strong prephrase in Step 2 — this dramatically speeds up answer evaluation in Steps 3–4."
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
            "**Step 1 — Break Down the Argument:** Identify the conclusion, premises, and (in dialogues) which speaker to focus on.",
            "**Step 2 — Characterize the Method & Prephrase:** Describe the argumentative strategy in your own abstract words before reading answers.",
            "**Step 3 — Evaluate Answer Choices Against Your Prephrase:** Scan for the choice that best matches your abstract description.",
            "**Step 4 — Systematically Eliminate Traps:** Apply targeted checks to remaining candidates."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "diff-note",
          "text": "{{~change~}} Steps 1-4 each use a different stimulus (historian, environmentalist, detective, nutritionist). Using one running example throughout all four steps would create a coherent thread the student follows end-to-end instead of context-switching four times.",
          "variant": "comment"
        },
        {
          "type": "h2",
          "text": "Step 1: Break Down the Argument"
        },
        {
          "type": "paragraph",
          "text": "Before you can describe how an argument works, you must understand its parts. Examine the argument to identify the conclusion, the evidence, and any opposing viewpoints. In dialogues, focus on the speaker named in the question stem."
        },
        {
          "type": "h4",
          "text": "What to Identify"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Component",
            "text": "What to Look For"
          },
          "items": [
            {
              "title": "Format",
              "text": "Is this a standalone argument or a dialogue between two speakers? In dialogues, the question stem will specify which speaker's method you need to describe.",
              "badge": "First",
              "badgeColor": "blue"
            },
            {
              "title": "Main Conclusion",
              "text": "What is the author (or specified speaker) trying to prove? Use the Why Test from Module 2 if needed.",
              "badge": "Second",
              "badgeColor": "blue"
            },
            {
              "title": "Premises / Evidence",
              "text": "What facts, examples, data, or principles does the author use as support? How do they connect to the conclusion?",
              "badge": "Third",
              "badgeColor": "blue"
            },
            {
              "title": "Opposing View (if any)",
              "text": "Does the argument respond to another position? In dialogues, the first speaker often provides the view being challenged.",
              "badge": "Fourth",
              "badgeColor": "blue"
            }
          ]
        },
        {
          "type": "h4",
          "text": "Example"
        },
        {
          "type": "blockquote",
          "text": "\"Historian: Some scholars argue that the Roman Empire fell primarily due to barbarian invasions. However, the empire had successfully repelled invasions for centuries. What changed was not the strength of external threats but the internal decay of Roman institutions — corruption, economic collapse, and political fragmentation made the empire unable to mount effective defenses. The fall of Rome was therefore primarily an internal collapse, not an external conquest.\""
        },
        {
          "type": "paragraph",
          "text": "Breaking this down:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Component",
            "text": "Identification"
          },
          "items": [
            {
              "title": "Format",
              "text": "Standalone argument (single speaker: the historian).",
              "badge": "Format",
              "badgeColor": "slate"
            },
            {
              "title": "Opposing View",
              "text": "\"Some scholars argue that the Roman Empire fell primarily due to barbarian invasions.\" The historian is challenging this position.",
              "badge": "Opposing View",
              "badgeColor": "slate"
            },
            {
              "title": "Premises",
              "text": "(1) The empire had successfully repelled invasions for centuries. (2) Internal decay — corruption, economic collapse, political fragmentation — made defenses ineffective.",
              "badge": "Premises",
              "badgeColor": "slate"
            },
            {
              "title": "Main Conclusion",
              "text": "\"The fall of Rome was therefore primarily an internal collapse, not an external conquest.\"",
              "badge": "Conclusion",
              "badgeColor": "indigo"
            }
          ]
        },
        {
          "type": "callout",
          "title": "When This Step Gets Tricky",
          "variant": "default",
          "text": "In complex dialogues, each speaker may have their own conclusion, premises, and method. Make sure you are analyzing the correct speaker's argument. The question stem will always tell you which speaker to focus on — read it first."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 2: Characterize the Method & Prephrase"
        },
        {
          "type": "paragraph",
          "text": "This is the most important step. Based on your argument breakdown, describe the strategy in your own abstract terms. Don't worry about perfect phrasing — capture the essence of the logical move."
        },
        {
          "type": "h4",
          "text": "The Key Question"
        },
        {
          "type": "paragraph",
          "text": "Ask yourself: **\"How did the author get from the evidence to the conclusion?\"** Then translate your answer into abstract terms by stripping out the specific nouns."
        },
        {
          "type": "h4",
          "text": "The Abstract Translation Technique"
        },
        {
          "type": "paragraph",
          "text": "Here is the most powerful tool for Method of Reasoning questions. Take your concrete understanding and translate it into abstract language:"
        },
        {
          "type": "table",
          "headers": [
            "Concrete Understanding",
            "Abstract Translation"
          ],
          "rows": [
            [
              "\"The historian says Rome fell because of internal decay, not barbarian invasions\"",
              "\"The argument offers an alternative cause for an observed event, challenging the proposed explanation\""
            ],
            [
              "\"The environmentalist compares species extinction to cancer deaths to show the developer's logic is bad\"",
              "\"The argument applies the opponent's reasoning to a different case where it yields an absurd result\""
            ],
            [
              "\"The author rules out Mercury and Venus to conclude the meteorites came from Mars\"",
              "\"The argument eliminates alternative possibilities to support the remaining option as the conclusion\""
            ],
            [
              "\"Ruth gives the example of the Kelton Company to prove Joanna wrong\"",
              "\"The argument provides a specific instance that contradicts a general claim\""
            ]
          ]
        },
        {
          "type": "callout",
          "title": "The Prephrase Checklist",
          "variant": "tip",
          "text": "Your prephrase should answer these questions:\n\n1. **What action does the author take?** (e.g., compare, rule out, cite an example, challenge)\n2. **What is the logical relationship?** (e.g., analogy, counterexample, alternative explanation)\n3. **What is the goal?** (e.g., to disprove a claim, to support a conclusion, to show a flaw)\n\nA good prephrase: *\"The author challenges the opponent's generalization by providing a specific case where the rule doesn't hold.\"*\nA weak prephrase: *\"The author disagrees.\"*"
        },
        {
          "type": "h4",
          "text": "Common Method Quick-Reference"
        },
        {
          "type": "paragraph",
          "text": "When forming your prephrase, check whether the argument matches one of these common strategies:"
        },
        {
          "type": "list",
          "items": [
            "Did they compare this situation to another one? → **Analogy**",
            "Did they rule out other options one by one? → **Process of Elimination**",
            "Did they give a specific case that disproves a general rule? → **Counterexample**",
            "Did they point out that a proposal would backfire? → **Negative Consequences**",
            "Did they offer a different cause for the same event? → **Alternative Explanation**",
            "Did they expose a hidden assumption and attack it? → **Challenging an Assumption**",
            "Did they apply a general rule to a specific case? → **Applying a Principle**",
            "Did they show the opponent's logic leads to an absurd result? → **Refutation by Analogy (Reductio)**"
          ]
        },
        {
          "type": "callout",
          "title": "When This Step Gets Tricky",
          "variant": "default",
          "text": "Some arguments use a combination of strategies — for example, challenging an assumption *and* offering an alternative explanation. In these cases, prephrase the dominant strategy: the one that most directly connects the key evidence to the conclusion. The answer choices will help you distinguish between overlapping strategies."
        },
        {
          "type": "diff-note",
          "text": "{{!note!}} The four 'When This Step Gets Tricky' callouts are individually strong but collectively add ~12 blocks of edge-case detail. Consider moving 2 of them to the Reference Guide to keep this lesson focused on the core method.",
          "variant": "comment"
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 3: Evaluate Answer Choices Against Your Prephrase"
        },
        {
          "type": "paragraph",
          "text": "Scan the answer choices for the one that best matches your prephrase. The correct answer will be an abstract description of the logical pattern you identified. It should accurately describe the *action* the argument takes and the *relationship* between the evidence and the conclusion."
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Match Type",
            "text": "Description"
          },
          "items": [
            {
              "title": "Direct Match",
              "text": "The correct choice uses standard logical vocabulary that matches your prephrase. If you prephrased \"counterexample,\" the answer might say \"presents a specific instance that contradicts a generalization.\"",
              "badge": "Most Common",
              "badgeColor": "green"
            },
            {
              "title": "Conceptual Match",
              "text": "The correct choice describes the same pattern using different but equivalent terms. An argument using a \"counterexample\" could be described as \"challenging a general claim by presenting a case where it does not hold.\"",
              "badge": "Common",
              "badgeColor": "blue"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Tip: Don't Get Anchored on Vocabulary",
          "variant": "tip",
          "text": "The LSAT rarely uses the exact term you prephrased. \"Counterexample\" might appear as \"a specific instance that contradicts,\" \"analogy\" might appear as \"comparing two similar situations.\" Focus on whether the *logic* matches, not whether the *words* match."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 4: Systematically Eliminate Traps"
        },
        {
          "type": "paragraph",
          "text": "If you are unsure after Step 3, use targeted checks to eliminate wrong answers. Method of Reasoning wrong answers almost always fail one of these three checks:"
        },
        {
          "type": "h4",
          "text": "The Three Elimination Checks"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Check",
            "text": "How to Apply"
          },
          "items": [
            {
              "title": "Check the Action",
              "text": "Does the answer choice accurately describe what the speaker *did*? If it says the speaker \"questions a premise,\" make sure they actually questioned a premise. Many traps describe an action that never happened in the argument.",
              "badge": "Check 1",
              "badgeColor": "indigo"
            },
            {
              "title": "Check the Scope",
              "text": "Is the description accurate but too narrow or too broad? An argument might use an example as part of a larger strategy. The correct choice will capture the *main* strategy, not a subsidiary detail.",
              "badge": "Check 2",
              "badgeColor": "blue"
            },
            {
              "title": "Check the Speaker",
              "text": "In dialogue questions, make sure the answer choice is describing the correct speaker's argument. A common trap describes what the *other* speaker did.",
              "badge": "Check 3",
              "badgeColor": "slate"
            }
          ]
        },
        {
          "type": "h4",
          "text": "Common Wrong Answer Patterns"
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
              "**Wrong Action**",
              "Describes a method the argument did not use",
              "The answer says \"questions a premise\" but the argument accepted all premises and attacked the logical connection instead"
            ],
            [
              "**Wrong Direction**",
              "Describes the opposite of what happened",
              "The answer says \"supports the claim\" but the argument was designed to *undermine* the claim"
            ],
            [
              "**Wrong Speaker**",
              "Describes the other speaker's method (in dialogues)",
              "Check which speaker the question asks about and verify the answer describes *that* speaker's strategy"
            ],
            [
              "**Partial Match**",
              "Accurately describes one part but mischaracterizes the overall strategy",
              "The answer correctly notes the argument uses an \"example\" but calls it an \"analogy\" when it is actually a \"counterexample\""
            ],
            [
              "**Content Trap**",
              "Restates *what* the argument concludes instead of *how* it reasons",
              "The answer describes the conclusion's content rather than the logical strategy used to reach it"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "When to Use Process of Elimination",
          "variant": "tip",
          "text": "If your prephrase matches one answer clearly, go with it — don't second-guess yourself. Use elimination only when:\n\n1. No answer is a clear match for your prephrase.\n2. Two or more answers seem plausible.\n\nIn these cases, apply the three checks systematically to each remaining candidate. The answer that passes all three checks is correct."
        },
        {
          "type": "hr"
        },
        {
          "type": "diff-note",
          "text": "{{+add+}} Insert an actual question-card (with answer choices) before the walkthrough so the student can attempt the method independently. The current worked example is a narrated process block with no interactive element.",
          "variant": "comment"
        },
        {
          "type": "h2",
          "text": "Full Worked Example"
        },
        {
          "type": "paragraph",
          "text": "Let's apply all four steps to a complete Method of Reasoning question from start to finish."
        },
        {
          "type": "paragraph",
          "text": "Use the four-step method on an argument like this one: a nutritionist attacks a diet book's causal story by denying the proposed mechanism and then offering a different explanation. The point of the walkthrough is not the food science itself, but the two-part reasoning move."
        },
        {
          "type": "h3",
          "text": "Applying the 4-Step Method"
        },
        {
          "type": "process",
          "title": "Step-by-Step Walkthrough",
          "steps": [
            "**Step 1 — Break Down the Argument:**\n• **Opposing View:** The diet book claims eating after 8 PM causes weight gain because metabolism slows at night.\n• **Premise 1:** Metabolism does not significantly decrease during sleep — it stays roughly constant.\n• **Premise 2:** Late-night eaters gain weight because they consume additional total calories, not because of timing.\n• **Main Conclusion:** The timing of eating is incidental; total caloric intake is what matters.",
            "**Step 2 — Characterize & Prephrase:** The nutritionist does two things: (1) undermines the proposed mechanism (metabolism slowdown) by showing it doesn't happen, and (2) offers a different explanation (extra total calories) for the same observation (weight gain). Prephrase: \"The argument attacks the proposed causal mechanism and provides an alternative explanation.\"",
            "**Step 3 — Evaluate Descriptions:** Look for the answer that captures both halves of the move: attacking the proposed mechanism and supplying an alternative explanation.",
            "**Step 4 — Eliminate Traps:** Discard descriptions that change the action entirely by talking about credentials, analogies, counterexamples, or consequences that never appear in the stimulus."
          ]
        },
        {
          "type": "callout",
          "title": "Final Check",
          "variant": "default",
          "text": "A good Method of Reasoning answer sounds like a clean abstract paraphrase of what the author did. Here, the right paraphrase must include both the attack on the original causal mechanism and the substitute explanation for the observed pattern."
        },
        {
          "type": "hr"
        },
        {
          "type": "diff-note",
          "text": "{{~change~}} The Abstract Translation Technique table is the single most useful tool in this lesson but does not appear in the Reference Guide (3-12). Copy a condensed version there.",
          "variant": "comment"
        },
        {
          "type": "callout",
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "The 4-Step Method gives you a repeatable process: **Break Down → Prephrase → Evaluate → Eliminate.**\n\n• **Prephrasing is the single most important habit.** Translate the argument into abstract terms before reading answers.\n• The **Abstract Translation Technique** is your core tool: strip out the nouns and describe the logical pattern.\n• Wrong answers almost always fail one of three checks: **Wrong Action**, **Wrong Scope**, or **Wrong Speaker**.\n• When in doubt, apply the three elimination checks systematically. The answer that passes all three is correct.\n• Don't get anchored on vocabulary — focus on whether the *logic* matches your prephrase, not whether the *exact term* appears."
        }
      ],
    },
    playbook: {
      label: 'Playbook',
      content: [
        {
          type: 'callout',
          variant: 'tip',
          text: '**Target:** 1:45 per Method of Reasoning question',
        },
        { type: 'h3', text: 'The Method' },
        {
          type: 'process',
          steps: [
            '**Break Down the Argument.** Identify format (standalone vs. dialogue), conclusion, premises, and any opposing view. In dialogues, focus on the speaker named in the stem.',
            '**Characterize the Method & Prephrase.** Ask: "How did the author get from the evidence to the conclusion?" Strip out the nouns and describe the abstract logical move before reading answers.',
            '**Evaluate Against Your Prephrase.** Scan for the choice that matches your abstract description \u2014 focus on whether the *logic* matches, not the exact vocabulary.',
            '**Systematically Eliminate Traps.** Apply three checks: (1) Does the answer describe the correct *action*? (2) Is the scope right? (3) Does it describe the correct *speaker*?',
          ],
        },
        { type: 'h3', text: 'Decision Table' },
        {
          type: 'table',
          headers: ['If You See...', 'Then Do...', 'Watch Out For...'],
          rows: [
            ['Analogy used ("just as," "similarly")', 'Prephrase: "compares two situations to transfer a conclusion"', 'Confusing supportive analogy with refutation by analogy'],
            ['Consequence highlighted ("would lead to," "would result in")', 'Prephrase: "argues against a proposal by predicting negative outcomes"', 'Mixing up negative-consequences with proof by contradiction'],
            ['Assumption challenged ("presupposes," "takes for granted")', 'Prephrase: "exposes and attacks a hidden premise"', 'Confusing attacking an assumption with attacking stated evidence'],
            ['Counterexample given ("but consider the case of")', 'Prephrase: "disproves a generalization with a specific instance"', 'Calling it an analogy when it is actually a counterexample of the same category'],
            ['Principle applied ("by definition," "under the rule")', 'Prephrase: "applies a general rule to a specific case"', 'Mistaking a principle application for a generalization from examples'],
            ['Process of elimination used ("cannot be X, cannot be Y")', 'Prephrase: "rules out alternatives to support the remaining option"', 'Overlooking that some options were not truly eliminated'],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          text: '**Break Down \u2192 Characterize Method & Prephrase \u2192 Evaluate Against Prephrase \u2192 Systematically Eliminate Traps**',
        },
      ],
    },
  },
};
