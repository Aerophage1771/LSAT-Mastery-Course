import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: '15-2',
  title: 'Step-by-Step: Fill in the Blank',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Step-by-Step: Fill in the Blank' },
    {
      type: 'paragraph',
      text: 'This lesson provides a complete, repeatable method for solving any Fill in the Blank question. Each step includes concrete guidance so you can internalize the process and apply it under timed conditions.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing',
      text: 'You should spend roughly **1 minute and 20 seconds** per Fill in the Blank question. These questions reward strong prephrasing, so invest the majority of your time reading the premises carefully and forming a prediction. If your prediction is sharp, evaluating the answer choices takes only seconds.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Overview' },
    {
      type: 'process',
      title: 'The 4-Step Method',
      steps: [
        '**Step 1 — Read and Parse the Premises:** Identify every statement before the blank, simplify dense clauses, and understand how the pieces connect.',
        '**Step 2 — Identify the Gap:** Determine what logical role the blank plays (conclusion or premise) and what type of reasoning the argument uses.',
        '**Step 3 — Prephrase the Missing Thought:** Synthesize the premises into a clear prediction of what should fill the blank.',
        '**Step 4 — Sort the Answers by Support:** Find the choice that best matches your prediction, then rank the survivors as supported, merely consistent, or anti-supported.',
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 1: Read the Premises' },
    {
      type: 'paragraph',
      text: 'Begin by reading the entire stimulus with one goal: understand every statement that precedes the blank. These are your premises. Translate complex language into simple terms and note how each premise relates to the others.',
    },
    {
      type: 'list',
      items: [
        '**Simplify as you read.** Turn academic or technical language into plain English. "The municipality\'s fiscal constraints preclude additional capital expenditures" becomes "the city can\'t spend more money."',
        '**Parse by clause when the sentence gets crowded.** If an indicator word is separated from the blank by extra description, mentally strip the sentence down to its core clause before deciding what role the blank plays.',
        '**Track the key terms.** Identify the core nouns and concepts that the argument revolves around. The conclusion will almost certainly reference these same terms.',
        '**Note the direction.** Is the argument building toward a positive claim, a negative claim, a comparison, or a recommendation? The direction of the premises predicts the direction of the conclusion.',
      ],
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'Critical Habit',
      text: 'Do NOT look at the answer choices yet. Reading the choices before forming a prediction biases your thinking and makes you vulnerable to attractive-sounding wrong answers. The premises contain all the information you need.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 2: Identify the Gap' },
    {
      type: 'paragraph',
      text: 'Before you can fill the blank, you must understand what kind of statement belongs there. This step takes only a few seconds but determines your entire approach.',
    },

    { type: 'h4', text: 'Classify the Blank' },
    { type: 'paragraph', text: 'Look at the word immediately before the blank:' },
    {
      type: 'table',
      headers: ['If you see...', 'The blank is a...', 'Your task'],
      rows: [
        [
          'Therefore, _______ / Thus, _______ / Hence, _______ / So, _______',
          '**Conclusion**',
          "Synthesize the premises into the argument's endpoint",
        ],
        [
          '...since _______ / ...because _______ / ...for _______',
          '**Premise**',
          'Find the evidence that supports the already-stated conclusion',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: 'That quick check is the starting point, not the whole method. If the signal word seems buried inside a longer clause, zoom out and read the full sentence. Hard blanks often punish students who classify the role from one local word instead of from the structure of the complete clause.',
    },

    { type: 'h4', text: 'Identify the Reasoning Pattern' },
    {
      type: 'paragraph',
      text: "Once you know the blank's role, identify the argument's reasoning pattern. This sharpens your prediction dramatically.",
    },
    {
      type: 'breakdown',
      labels: { title: 'Pattern', text: 'What to Expect in the Blank' },
      items: [
        {
          title: 'Causal Chain',
          text: 'The premises describe a sequence of causes and effects. The blank states the final effect in the chain. Follow the dominoes forward.',
          badge: 'A causes B, B causes C → blank = A causes C',
          badgeColor: 'green',
        },
        {
          title: 'Analogy',
          text: 'The premises establish a parallel between two subjects. The blank applies a known fact, rule, or evaluative relationship from the first subject to the second. Map the relationship precisely, and be ready to extract the hidden principle if the analogy is not purely mechanical.',
          badge: 'X is like Y; X has property P → blank = Y has property P',
          badgeColor: 'blue',
        },
        {
          title: 'Rule Application',
          text: "The premises state a general rule and a specific case that meets the rule's conditions. The blank applies the rule to that case.",
          badge: 'If A then B; this is A → blank = this is B',
          badgeColor: 'blue',
        },
        {
          title: 'Problem-Solution',
          text: 'The premises describe a problem and constraints. The blank recommends an action or states a consequence. The conclusion is normative (uses "should" or "ought").',
          badge: 'Problem exists + constraint → blank = action needed',
          badgeColor: 'slate',
        },
        {
          title: 'Paradox Resolution',
          text: 'The premises present two facts that seem contradictory. The blank resolves the tension by explaining how both can be true simultaneously.',
          badge: 'Fact A seems to conflict with Fact B → blank = explanation',
          badgeColor: 'slate',
        },
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 3: Prephrase the Conclusion' },
    {
      type: 'paragraph',
      text: 'This is the most important step. Based on your reading of the premises and your identification of the gap, form a clear, specific prediction of what should fill the blank. Say it to yourself in plain language before looking at the answer choices.',
    },
    {
      type: 'list',
      items: [
        '**Be specific.** A vague prediction like "something about the policy" is useless. A strong prediction captures the direction, scope, and key terms: "the policy will not achieve its goal of reducing emissions because the exemptions are too broad."',
        '**Match the scope.** Your prediction should be exactly as strong as the premises warrant. If the premises show one example, your conclusion should be modest. If the premises establish a universal rule and a clear case, your conclusion can be stronger.',
        '**Use the premises\' language.** The correct answer will typically reference the same core terms that appear in the premises. If the premises discuss "revenue" and "enrollment," your prediction should involve those same concepts, not new ones.',
        '**For analogy blanks, prephrase the governing rule.** If the stimulus is really saying "the same kind of relationship should hold over here," state that relationship before you read answers. This prevents you from matching only surface nouns while missing the underlying principle.',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'The Litmus Test',
      text: "After forming your prediction, mentally insert it into the blank and re-read the full argument. Does it flow naturally? Does it feel like the author's own words? If something feels off, revisit the premises and adjust your prediction before looking at answers.",
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 4: Match the Answer and Spot Traps' },
    {
      type: 'paragraph',
      text: "Scan the five answer choices for the one that most closely matches your prediction. The correct answer should feel like the author's natural next sentence, using information and concepts already present in the stimulus.",
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'Support Sorting',
      text: 'Do not treat every plausible answer as equally live. Sort them. **Supported** answers are actually backed by the text or by the exact bridge the argument needs. **Merely consistent** answers could be true but are not what the premises are pushing toward. **Anti-supported** answers contradict the text, reverse the logic, or fill the wrong role. On hard Fill in the Blank questions, the winner is often the only answer in the truly supported bucket.',
    },

    {
      type: 'paragraph',
      text: 'If no answer clearly matches, switch to elimination. Wrong answers on Fill in the Blank questions follow predictable patterns:',
    },

    {
      type: 'breakdown',
      labels: { title: 'Trap Type', text: 'How to Spot It' },
      items: [
        {
          title: 'Too Strong',
          text: 'Uses extreme language (all, never, only, must, impossible) when the premises support only a moderate claim. One study does not prove something is "always" true. Look for hedging in the premises — if the evidence is qualified, the conclusion should be too.',
          badge: 'Scope Error',
          badgeColor: 'red',
        },
        {
          title: 'Out of Scope',
          text: 'Introduces a concept, comparison, or topic that never appeared in the stimulus. If the premises discuss employee productivity and the answer choice mentions customer satisfaction, it is out of scope — even if it sounds reasonable in the real world.',
          badge: 'New Information',
          badgeColor: 'red',
        },
        {
          title: 'Reversed Logic',
          text: 'Gets the direction of the reasoning backward. If the premises show that A leads to B, this trap says B leads to A. Causal chains and conditional arguments are particularly vulnerable to this reversal.',
          badge: 'Direction Error',
          badgeColor: 'red',
        },
        {
          title: 'Mere Restatement',
          text: 'Simply paraphrases a premise already stated in the stimulus. A conclusion must add something beyond the raw evidence. If an answer choice just rephrases what you already read, it is not completing the argument — it is circling back to the start.',
          badge: 'No Progress',
          badgeColor: 'red',
        },
        {
          title: 'Wrong Relationship',
          text: 'Focuses on a superficial or irrelevant connection between the premises rather than the core logical relationship. Common in analogy-based arguments where the answer mirrors the wrong aspect of the comparison.',
          badge: 'Misapplied Logic',
          badgeColor: 'red',
        },
        {
          title: 'Merely Consistent',
          text: 'The answer could be true given the stimulus, but the premises do not actually build toward it. It sounds reasonable, yet it is not the missing thought this argument needs. These are especially common on conclusion blanks and MSS-adjacent Fill in the Blank questions.',
          badge: 'Support Error',
          badgeColor: 'red',
        },
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'When Two Answers Look Good',
      text: 'If you are stuck between two choices, re-read the premises and ask which answer is more directly supported by the specific evidence given. The correct answer will reference the same terms and relationships that appear in the stimulus. The trap answer will subtly shift the topic, broaden the scope, or require an assumption not warranted by the premises.',
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: 'The 4-Step Method gives you a repeatable process: **Read Premises → Identify the Gap → Prephrase → Match.**\n\nPrephrasing is everything. If you can predict the conclusion before seeing the answers, you will almost always get the question right.\n\nWrong answers follow predictable patterns: Too Strong, Out of Scope, Reversed Logic, Mere Restatement, and Wrong Relationship. Learn to recognize them and elimination becomes a powerful backup strategy.\n\nThe next lesson walks through a full worked example applying all four steps from start to finish.',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "diff-note",
          "text": "Website version (15-2). Key annotations: (1) Step 2 Reasoning Patterns breakdown duplicates 15-1 Common Conclusion Patterns — recommend cross-reference only. (2) 'Full Worked Example' is a blockquote-only format — no question-card for student practice. (3) 'Try it first' prompt needed before the walkthrough. (4) 'Common Mistakes' breakdown at the end should be in the mastery course's main content, not only the diff alternate. (5) Mastery course adds 'Support Sorting' callout and 'Merely Consistent' trap type — both missing from the website version.",
          "variant": "comment"
        },
        {
          "type": "h2",
          "text": "The 4-Step Method for Fill in the Blank Questions"
        },
        {
          "type": "paragraph",
          "text": "This lesson provides a complete, repeatable method for solving any Fill in the Blank question. Each step includes concrete guidance, and the lesson concludes with a full worked example applying all four steps from start to finish."
        },
        {
          "type": "callout",
          "title": "Timing",
          "variant": "tip",
          "text": "You should spend roughly **1 minute and 20 seconds** per Fill in the Blank question. These questions reward strong prephrasing, so invest the majority of your time reading the premises carefully and forming a prediction. If your prediction is sharp, evaluating the answer choices takes only seconds."
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
            "**Step 1 — Read the Premises:** Identify every statement before the blank and understand how they connect.",
            "**Step 2 — Identify the Gap:** Determine what logical role the blank plays (conclusion or premise) and what type of reasoning the argument uses.",
            "**Step 3 — Prephrase the Conclusion:** Synthesize the premises into a clear prediction of what should fill the blank.",
            "**Step 4 — Match the Answer:** Find the choice that aligns with your prediction and eliminate traps."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 1: Read the Premises"
        },
        {
          "type": "paragraph",
          "text": "Begin by reading the entire stimulus with one goal: understand every statement that precedes the blank. These are your premises. Translate complex language into simple terms and note how each premise relates to the others."
        },
        {
          "type": "list",
          "items": [
            "**Simplify as you read.** Turn academic or technical language into plain English. \"The municipality's fiscal constraints preclude additional capital expenditures\" becomes \"the city can't spend more money.\"",
            "**Track the key terms.** Identify the core nouns and concepts that the argument revolves around. The conclusion will almost certainly reference these same terms.",
            "**Note the direction.** Is the argument building toward a positive claim, a negative claim, a comparison, or a recommendation? The direction of the premises predicts the direction of the conclusion."
          ]
        },
        {
          "type": "callout",
          "title": "Critical Habit",
          "variant": "default",
          "text": "Do NOT look at the answer choices yet. Reading the choices before forming a prediction biases your thinking and makes you vulnerable to attractive-sounding wrong answers. The premises contain all the information you need."
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
          "text": "Before you can fill the blank, you must understand what kind of statement belongs there. This step takes only a few seconds but determines your entire approach."
        },
        {
          "type": "h4",
          "text": "Classify the Blank"
        },
        {
          "type": "paragraph",
          "text": "Look at the word immediately before the blank:"
        },
        {
          "type": "table",
          "headers": [
            "If you see...",
            "The blank is a...",
            "Your task"
          ],
          "rows": [
            [
              "Therefore, _______ / Thus, _______ / Hence, _______ / So, _______",
              "**Conclusion**",
              "Synthesize the premises into the argument's endpoint"
            ],
            [
              "...since _______ / ...because _______ / ...for _______",
              "**Premise**",
              "Find the evidence that supports the already-stated conclusion"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Identify the Reasoning Pattern"
        },
        {
          "type": "paragraph",
          "text": "Once you know the blank's role, identify the argument's reasoning pattern. This sharpens your prediction dramatically."
        },
        {
          "type": "diff-note",
          "text": "{{!The Reasoning Patterns breakdown below (Causal Chain, Analogy, Rule Application, Problem-Solution, Paradox Resolution) is nearly identical to the 'Common Conclusion Patterns' breakdown in Lesson 15-1. Students who read both lessons encounter the same content twice. Recommend replacing this section with a cross-reference: 'The five recurring patterns are introduced in Lesson 1 and explored in depth in Lessons 3–7. For this step, simply identify which pattern you are facing before forming your pre-phrase.' The mastery course's Step 2 adds a useful nuance: 'Parse by clause when the sentence gets crowded' and 'For analogy blanks, prephrase the governing rule' — these additions distinguish the mastery method from the website version.!}}",
          "variant": "comment"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Pattern",
            "text": "What to Expect in the Blank"
          },
          "items": [
            {
              "title": "Causal Chain",
              "text": "The premises describe a sequence of causes and effects. The blank states the final effect in the chain. Follow the dominoes forward.",
              "badge": "A causes B, B causes C → blank = A causes C",
              "badgeColor": "green"
            },
            {
              "title": "Analogy",
              "text": "The premises establish a parallel between two subjects. The blank applies a known fact about the first subject to the second. Map the relationship precisely.",
              "badge": "X is like Y; X has property P → blank = Y has property P",
              "badgeColor": "blue"
            },
            {
              "title": "Rule Application",
              "text": "The premises state a general rule and a specific case that meets the rule's conditions. The blank applies the rule to that case.",
              "badge": "If A then B; this is A → blank = this is B",
              "badgeColor": "blue"
            },
            {
              "title": "Problem-Solution",
              "text": "The premises describe a problem and constraints. The blank recommends an action or states a consequence. The conclusion is normative (uses \"should\" or \"ought\").",
              "badge": "Problem exists + constraint → blank = action needed",
              "badgeColor": "slate"
            },
            {
              "title": "Paradox Resolution",
              "text": "The premises present two facts that seem contradictory. The blank resolves the tension by explaining how both can be true simultaneously.",
              "badge": "Fact A seems to conflict with Fact B → blank = explanation",
              "badgeColor": "slate"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 3: Prephrase the Conclusion"
        },
        {
          "type": "paragraph",
          "text": "This is the most important step. Based on your reading of the premises and your identification of the gap, form a clear, specific prediction of what should fill the blank. Say it to yourself in plain language before looking at the answer choices."
        },
        {
          "type": "list",
          "items": [
            "**Be specific.** A vague prediction like \"something about the policy\" is useless. A strong prediction captures the direction, scope, and key terms: \"the policy will not achieve its goal of reducing emissions because the exemptions are too broad.\"",
            "**Match the scope.** Your prediction should be exactly as strong as the premises warrant. If the premises show one example, your conclusion should be modest. If the premises establish a universal rule and a clear case, your conclusion can be stronger.",
            "**Use the premises' language.** The correct answer will typically reference the same core terms that appear in the premises. If the premises discuss \"revenue\" and \"enrollment,\" your prediction should involve those same concepts, not new ones."
          ]
        },
        {
          "type": "callout",
          "title": "The Litmus Test",
          "variant": "tip",
          "text": "After forming your prediction, mentally insert it into the blank and re-read the full argument. Does it flow naturally? Does it feel like the author's own words? If something feels off, revisit the premises and adjust your prediction before looking at answers."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 4: Match the Answer and Spot Traps"
        },
        {
          "type": "paragraph",
          "text": "Scan the five answer choices for the one that most closely matches your prediction. The correct answer should feel like the author's natural next sentence, using information and concepts already present in the stimulus."
        },
        {
          "type": "paragraph",
          "text": "If no answer clearly matches, switch to elimination. Wrong answers on Fill in the Blank questions follow predictable patterns:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Trap Type",
            "text": "How to Spot It"
          },
          "items": [
            {
              "title": "Too Strong",
              "text": "Uses extreme language (all, never, only, must, impossible) when the premises support only a moderate claim. One study does not prove something is \"always\" true. Look for hedging in the premises — if the evidence is qualified, the conclusion should be too.",
              "badge": "Scope Error",
              "badgeColor": "red"
            },
            {
              "title": "Out of Scope",
              "text": "Introduces a concept, comparison, or topic that never appeared in the stimulus. If the premises discuss employee productivity and the answer choice mentions customer satisfaction, it is out of scope — even if it sounds reasonable in the real world.",
              "badge": "New Information",
              "badgeColor": "red"
            },
            {
              "title": "Reversed Logic",
              "text": "Gets the direction of the reasoning backward. If the premises show that A leads to B, this trap says B leads to A. Causal chains and conditional arguments are particularly vulnerable to this reversal.",
              "badge": "Direction Error",
              "badgeColor": "red"
            },
            {
              "title": "Mere Restatement",
              "text": "Simply paraphrases a premise already stated in the stimulus. A conclusion must add something beyond the raw evidence. If an answer choice just rephrases what you already read, it is not completing the argument — it is circling back to the start.",
              "badge": "No Progress",
              "badgeColor": "red"
            },
            {
              "title": "Wrong Relationship",
              "text": "Focuses on a superficial or irrelevant connection between the premises rather than the core logical relationship. Common in analogy-based arguments where the answer mirrors the wrong aspect of the comparison.",
              "badge": "Misapplied Logic",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "callout",
          "title": "When Two Answers Look Good",
          "variant": "default",
          "text": "If you are stuck between two choices, re-read the premises and ask which answer is more directly supported by the specific evidence given. The correct answer will reference the same terms and relationships that appear in the stimulus. The trap answer will subtly shift the topic, broaden the scope, or require an assumption not warranted by the premises."
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
          "text": "Let's apply all four steps to a complete question."
        },
        {
          "type": "paragraph",
          "text": "Consider this illustrative argument:"
        },
        {
          "type": "blockquote",
          "text": "\"Psychologist: Studies show that children who are praised for their effort rather than their innate ability tend to embrace challenging tasks and persist longer when they encounter difficulty. In contrast, children praised for being \\\"smart\\\" tend to avoid challenges and give up quickly when they struggle. Since schools want students who are resilient and willing to tackle difficult material, teachers should _______.\""
        },
        {
          "type": "paragraph",
          "text": "This is a useful Fill in the Blank example because the premises already contain both the problem and the recommended fix. Your job is to synthesize, not to invent."
        },
        {
          "type": "diff-note",
          "text": "{{!This worked example uses a blockquote-only format — there are no answer choices for the student to evaluate. Converting to a question-card format would let students apply the method before seeing the analysis. The website's 'Instructions' line says 'Commit to an answer before scrolling,' but that only works in long-scroll layouts.!}}",
          "variant": "comment"
        },
        {
          "type": "paragraph",
          "text": "{{+**Try this:** Before reading the step-by-step walkthrough below, apply the 4-Step Method on your own. Classify the blank, identify the reasoning pattern, and form your pre-phrase. Then compare your reasoning to the analysis below.+}}"
        },
        {
          "type": "h3",
          "text": "Applying the 4-Step Method"
        },
        {
          "type": "process",
          "title": "Step-by-Step Walkthrough",
          "steps": [
            "**Step 1 — Read the Premises:** (1) Children praised for effort embrace challenges and persist. (2) Children praised for being smart avoid challenges and quit. (3) Schools want resilient students willing to tackle hard material.",
            "**Step 2 — Identify the Gap:** The blank follows \"teachers should,\" which is a normative conclusion. The reasoning pattern is Problem-Solution: the problem is that \"smart\" praise undermines resilience, and the premises point to effort praise as the solution. The word \"Since\" before the school's goal confirms the blank is the conclusion.",
            "**Step 3 — Prephrase the Conclusion:** The premises directly support: \"teachers should praise students for effort rather than for being smart.\" This is the only recommendation the evidence warrants.",
            "**Step 4 — Match the Answer:** The correct completion should recommend praising effort rather than innate ability. That conclusion uses the same contrast the premises establish and stays tightly within the scope of the school's stated goal."
          ]
        },
        {
          "type": "h3",
          "text": "Why the Synthesis Is Straightforward"
        },
        {
          "type": "callout",
          "title": "Final Check",
          "variant": "default",
          "text": "The premises never argue against praise in general, and they say nothing about parents, testing, or easier assignments. They draw one focused contrast: effort praise builds the resilience schools want, while intelligence praise undermines it. On Fill in the Blank questions, that kind of contrast usually turns directly into the missing conclusion."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Common Mistakes and How to Avoid Them"
        },
        {
          "type": "paragraph",
          "text": "Even with a strong method, certain habits can undermine your accuracy on Fill in the Blank questions. Watch for these pitfalls:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Mistake",
            "text": "Fix"
          },
          "items": [
            {
              "title": "Reading the answers before prephrasing",
              "text": "This is the single most common mistake. Attractive wrong answers will contaminate your thinking. Force yourself to predict before you look. Cover the answers with your hand if necessary.",
              "badge": "Process",
              "badgeColor": "indigo"
            },
            {
              "title": "Choosing an answer that sounds true in the real world",
              "text": "The correct answer must be supported by the specific premises in the stimulus, not by your outside knowledge. A statement can be objectively true and still be a wrong answer if the premises do not support it.",
              "badge": "Scope",
              "badgeColor": "blue"
            },
            {
              "title": "Ignoring hedging language",
              "text": "If the premises say \"some studies suggest\" or \"in many cases,\" the conclusion cannot say \"all\" or \"always.\" Match the strength of your conclusion to the strength of the evidence.",
              "badge": "Strength",
              "badgeColor": "blue"
            },
            {
              "title": "Failing to re-read with the answer inserted",
              "text": "After selecting an answer, mentally insert it into the blank and read the full argument. If it reads awkwardly or introduces a logical jump, reconsider. The correct answer should flow seamlessly.",
              "badge": "Verification",
              "badgeColor": "slate"
            }
          ]
        },
        {
          "type": "diff-note",
          "text": "{{+MASTERY COURSE ADDITION: The website version ends here. The mastery course adds a 'Common Mistakes and How to Avoid Them' section covering four pitfalls: Reading answers before prephrasing, Choosing real-world-true answers, Ignoring hedging language, and Failing to re-read with the answer inserted. This section belongs in the main content, not only the diff alternate.+}}",
          "variant": "add"
        },
        {
          "type": "h2",
          "text": "{{+Common Mistakes and How to Avoid Them+}}"
        },
        {
          "type": "paragraph",
          "text": "{{+Even with a strong method, certain habits can undermine your accuracy on Fill in the Blank questions. Watch for these pitfalls:+}}"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Mistake",
            "text": "Fix"
          },
          "items": [
            {
              "title": "{{+Reading the answers before prephrasing+}}",
              "text": "{{+This is the single most common mistake. Attractive wrong answers will contaminate your thinking. Force yourself to predict before you look. Cover the answers with your hand if necessary.+}}",
              "badge": "Process",
              "badgeColor": "indigo"
            },
            {
              "title": "{{+Choosing an answer that sounds true in the real world+}}",
              "text": "{{+The correct answer must be supported by the specific premises in the stimulus, not by your outside knowledge. A statement can be objectively true and still be a wrong answer if the premises do not support it.+}}",
              "badge": "Scope",
              "badgeColor": "blue"
            },
            {
              "title": "{{+Ignoring hedging language+}}",
              "text": "{{+If the premises say 'some studies suggest' or 'in many cases,' the conclusion cannot say 'all' or 'always.' Match the strength of your conclusion to the strength of the evidence.+}}",
              "badge": "Strength",
              "badgeColor": "blue"
            },
            {
              "title": "{{+Failing to re-read with the answer inserted+}}",
              "text": "{{+After selecting an answer, mentally insert it into the blank and read the full argument. If it reads awkwardly or introduces a logical jump, reconsider. The correct answer should flow seamlessly.+}}",
              "badge": "Verification",
              "badgeColor": "slate"
            }
          ]
        },
        {
          "type": "diff-note",
          "text": "{{+MASTERY COURSE ADDITION: The mastery course also adds a 'Merely Consistent' trap type to the Step 4 breakdown. The website version lists five trap types (Too Strong, Out of Scope, Reversed Logic, Mere Restatement, Wrong Relationship). The mastery course adds a sixth: 'Merely Consistent — the answer could be true given the stimulus, but the premises do not actually build toward it.' This is the hardest trap to identify and the most important addition to Step 4.+}}",
          "variant": "add"
        },
        {
          "type": "callout",
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "The 4-Step Method gives you a repeatable process: **Read Premises → Identify the Gap → Prephrase → Match.**\n\nPrephrasing is everything. If you can predict the conclusion before seeing the answers, you will almost always get the question right.\n\nWrong answers follow predictable patterns: Too Strong, Out of Scope, Reversed Logic, Mere Restatement, and Wrong Relationship. Learn to recognize them and elimination becomes a powerful backup strategy.\n\nFill in the Blank rewards the same skills you use on Main Conclusion, Must Be True, and Sufficient Assumption questions. If you are strong on those types, treat Fill in the Blank as a confidence booster."
        }
      ],
    },
    playbook: {
      label: 'Playbook',
      content: [
        {
          type: 'callout',
          variant: 'tip',
          text: '**Target:** 1:30 per Principle-Generalization question',
        },
        { type: 'h3', text: 'The Method' },
        {
          type: 'process',
          steps: [
            '**Understand the Case.** Read the stimulus as a case study. Identify the players (who/what), the key variable (what changed or differs), and the outcome (what resulted).',
            '**Identify the Dynamic.** Ask: "What is the one relationship or pattern that makes this situation noteworthy?" State the central mechanism in one sentence -- the "moral of the story."',
            '**Abstract to Principle.** Replace specific nouns with general categories, specific verbs with abstract verbs, specific contexts with universal settings. Preserve logical connectors (because, when, leads to). This is your pre-phrase.',
            '**Match the General Rule.** Apply the Textbook Test ("Is the stimulus a textbook example of this principle?") and the Strength Test ("Is the language calibrated to one example?"). Confirm the answer captures the whole story.',
          ],
        },
        { type: 'h3', text: 'Decision Table' },
        {
          type: 'table',
          headers: ['If the Stimulus Shows...', 'The Dynamic Is Likely...', 'Pre-Phrase Template', 'Primary Trap', 'Quick Check'],
          rows: [
            [
              'An experiment with a manipulated variable and a measurable result',
              '**Experiment Generalization**',
              '"[Abstract variable] can affect [abstract outcome]."',
              'Prescriptive answer (researchers should...)',
              'Does the answer state a finding, not a recommendation?',
            ],
            [
              'A value judgment that reverses depending on context',
              '**Contextual Value**',
              '"A trait can be beneficial in some contexts and detrimental in others."',
              'Answer capturing only one side of the reversal',
              'Does the answer mention BOTH contexts?',
            ],
            [
              'A solution that produced an unexpected new problem',
              '**Unintended Consequences**',
              '"Addressing one problem can create a different, unforeseen problem."',
              'Answer that only mentions the solution OR only the side effect',
              'Does the answer capture the full cause-and-side-effect chain?',
            ],
            [
              'A group ignoring downsides of something that benefits them',
              '**Motivated Blindness**',
              '"People tend to overlook harms of practices that serve their interests."',
              'Answer blaming ignorance instead of self-interest',
              'Is the self-interest mechanism present in the answer?',
            ],
            [
              'An early choice or default becoming self-reinforcing',
              '**Path Dependency / Lock-In**',
              '"An established arrangement can be hard to replace even when a better alternative exists."',
              'Answer that just says people prefer the familiar',
              'Does the answer capture the self-reinforcing structure?',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          text: '**Understand Case -> Identify Dynamic -> Abstract to Principle -> Match General Rule.** State the "moral of the story" in abstract terms before reading the answers. The right answer generalizes -- it does not retell the story.',
        },
      ],
    },
  },
};
