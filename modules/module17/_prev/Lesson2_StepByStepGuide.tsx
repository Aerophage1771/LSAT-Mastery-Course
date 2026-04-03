import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: '17-2',
  title: 'Step-by-Step: Must Be True',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Step-by-Step: Must Be True' },
    {
      type: 'paragraph',
      text: 'This guide gives you a repeatable four-step method for every Must Be True question. Because MBT demands certainty, each step is designed to tighten your reasoning and prevent you from selecting an answer that merely *could* be true. The key update is strategic: when a strong prephrase is available, use it. When the stimulus is too dense for a clean prephrase, shift into answer-driven process of elimination without relaxing the proof standard.',
    },
    { type: 'h3', text: 'The 4-Step Method' },
    {
      type: 'process',
      title: 'Solving Must Be True Questions',
      steps: [
        '**Confirm the Task.** Read the stem first. Once you see language like "must be true," "follows logically," or "properly inferred," set your standard: the answer must be 100% guaranteed by the stimulus.',
        '**Deconstruct the Stimulus.** Break every sentence into its logical skeleton. Diagram conditional statements (If A \u2192 B). Note quantifiers (all, most, some, none). Flag numerical data. Identify causal links. Just as important, identify the **governed domain** of each rule and any exception, purpose, or effect language.',
        '**Synthesize When the Inference Is Visible.** Look for a shared term that connects two premises. Chain conditionals (A\u2192B + B\u2192C = A\u2192C). Combine quantifiers (Most X are Y + Most X are Z = Some Y are Z). If the deduction is clear, state your predicted answer before reading the choices.',
        '**Use Answer-Driven POE When the Inference Is Not Cleanly Visible.** If no strong prephrase emerges, evaluate the answer choices mechanically. Eliminate any choice that leaves the governed domain, ignores an exception, converts a purpose into a rule, broadens a quantifier, or fails the certainty test. The surviving choice must still be 100% proven.',
      ],
    },
    { type: 'h3', text: 'Conditional Diagramming' },
    {
      type: 'paragraph',
      text: 'Conditional logic drives the majority of MBT questions. Translate natural language into arrows and memorize these equivalences:',
    },
    {
      type: 'table',
      headers: ['Natural Language', 'Diagram'],
      rows: [
        ['If A, then B', 'A \u2192 B'],
        ['All A are B', 'A \u2192 B'],
        ['A only if B', 'A \u2192 B'],
        ['No A are B', 'A \u2192 ~B'],
        ['Unless B, not A', '~B \u2192 ~A (equiv. A \u2192 B)'],
      ],
    },
    {
      type: 'paragraph',
      text: 'Once diagrammed, chain links with shared terms and always consider the **contrapositive** \u2014 it is logically identical to the original and is a favorite source of correct answers.',
    },
    { type: 'h3', text: 'Quantifier Tracking' },
    {
      type: 'paragraph',
      text: 'When the stimulus uses "most" or "some," track the overlap carefully. Two "most" claims about the same group guarantee overlap: if most X are Y and most X are Z, then at least some X are both Y and Z. However, two "some" claims about the same group do NOT guarantee overlap \u2014 the two subsets could be entirely separate.',
    },
    { type: 'h3', text: 'Governed Domain First' },
    {
      type: 'paragraph',
      text: 'On hard MBT questions, the most important question is often not "What can I infer?" but "Who exactly is governed by this rule?" A rule about a narrow subset can feel like a rule about the whole topic. Resist that pull. If the stimulus governs only committee members who vote, employees who access files, or people under eighteen, the correct answer will stay inside that exact domain.',
    },
    {
      type: 'paragraph',
      text: 'Likewise, separate rule language from surrounding purpose/effect language. If the stimulus says a rule exists "to protect privacy," that purpose may explain the rule, but it does not authorize every action that would also protect privacy. MBT rewards layer separation, not intuitive policy reading.',
    },
    { type: 'h3', text: 'When to Prephrase vs. When to Use Answer-Driven POE' },
    {
      type: 'table',
      headers: ['Situation', 'Best Move', 'Why'],
      rows: [
        [
          'The stimulus yields a clean chain, overlap, or numerical deduction',
          'Prephrase before reading the choices',
          'A strong prediction lets you match the credited answer quickly and ignore tempting noise.',
        ],
        [
          'The stimulus is dense, layered, or domain-heavy, and no single deduction is obvious',
          'Shift to answer-driven POE',
          'The answer choices often package the inference more cleanly than the stimulus does, but each choice must still survive the MBT proof standard.',
        ],
        [
          'A choice seems broadly consistent but feels stronger or broader than the text',
          'Run the certainty test immediately',
          'Consistency is not enough on MBT. If the answer could be false while the stimulus is true, it is wrong.',
        ],
      ],
    },
    {
      type: 'callout',
      title: 'Fallback, Not Downgrade',
      variant: 'default',
      text: 'Answer-driven POE is a **fallback path**, not a weaker standard. You are not asking which answer is "most plausible." You are still asking which answer cannot be false if the stimulus is true. The difference is only whether you reach that proof by prephrasing first or by eliminating answers one by one.',
    },
    { type: 'h3', text: 'Wrong-Answer Patterns' },
    {
      type: 'breakdown',
      labels: { title: 'Trap Type', text: 'Description' },
      items: [
        {
          title: 'Could Be True',
          text: 'The choice is compatible with the stimulus but not proven by it. It might be true in some scenarios and false in others.',
          badge: 'Most Common',
          badgeColor: 'red',
        },
        {
          title: 'Mistaken Reversal',
          text: 'Reverses a conditional: concludes B\u2192A from A\u2192B. Always check the direction of the arrow.',
          badge: 'Logic Error',
          badgeColor: 'red',
        },
        {
          title: 'Mistaken Negation',
          text: 'Negates both sides without reversing: concludes ~A\u2192~B from A\u2192B. The valid inference is ~B\u2192~A.',
          badge: 'Logic Error',
          badgeColor: 'red',
        },
        {
          title: 'Too Strong',
          text: 'Uses absolutes (all, never, only) when the stimulus supports a weaker claim (some, most).',
          badge: 'Scope Shift',
          badgeColor: 'red',
        },
        {
          title: 'Out of Scope',
          text: 'Introduces concepts, comparisons, or value judgments not mentioned in the stimulus.',
          badge: 'Irrelevant',
          badgeColor: 'red',
        },
        {
          title: 'Domain Shift',
          text: 'Keeps the same topic but broadens or narrows the governed set. Watch especially for answers that erase exceptions or move from a subset to the whole class.',
          badge: 'Boundary Error',
          badgeColor: 'red',
        },
        {
          title: 'Purpose-to-Rule Jump',
          text: 'Treats the reason a rule exists as if it were itself an operative rule. A purpose can explain the rule without proving every action that serves that purpose.',
          badge: 'Layer Error',
          badgeColor: 'red',
        },
      ],
    },
    { type: 'h3', text: 'Worked Method Snapshot' },
    {
      type: 'paragraph',
      text: 'Suppose all of the books on the top shelf are hardcovers, most of those top-shelf books were published before 1990, and no book published before 1990 has a digital edition. The safe MBT move is to chain only what must follow: if most top-shelf books are pre-1990 and all top-shelf books are hardcovers, then at least some hardcovers lack digital editions.',
    },
    {
      type: 'paragraph',
      text: 'Notice what the method refuses to do. It does not conclude that all hardcovers lack digital editions, or that every pre-1990 book sits on the top shelf. MBT rewards the narrow conclusion that the premises force and punishes any answer that overstates the chain.',
    },
    {
      type: 'callout',
      title: 'Timing Tip',
      variant: 'tip',
      text: 'Spend 60\u201370% of your time deconstructing the stimulus and searching for a clean inference. If it appears, prephrase it. If it does not appear after a disciplined read, do not force it. Shift to answer-driven POE and eliminate answers mechanically. What must not change is the proof standard: every surviving answer still has to be certain.',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "Step-by-Step Guide: Must Be True"
        },
        {
          "type": "diff-note",
          "text": "CHANGE: The website intro paragraph describes only a prephrase-first workflow. The mastery course adds the strategic distinction between prephrase-first (when a clear inference is visible) and answer-driven POE (when the stimulus is too dense). This is the most practically important difference between the two versions.",
          "variant": "comment"
        },
        {
          "type": "paragraph",
          "text": "{{-This guide gives you a repeatable four-step method for every Must Be True question. Because MBT demands certainty, each step is designed to tighten your reasoning and prevent you from selecting an answer that merely *could* be true.-}}{{+This guide gives you a repeatable four-step method for every Must Be True question. Because MBT demands certainty, each step is designed to tighten your reasoning and prevent you from selecting an answer that merely *could* be true. The key update is strategic: when a strong prephrase is available, use it. When the stimulus is too dense for a clean prephrase, shift into answer-driven process of elimination without relaxing the proof standard.+}}"
        },
        {
          "type": "h3",
          "text": "The 4-Step Method"
        },
        {
          "type": "diff-note",
          "text": "CHANGE: Steps 2, 3, and 4 are updated. Step 2 adds governed-domain identification. Step 3 shifts from 'always prephrase' to 'prephrase when the inference is visible.' Step 4 adds the answer-driven POE fallback path.",
          "variant": "comment"
        },
        {
          "type": "process",
          "title": "Solving Must Be True Questions",
          "steps": [
            "**Confirm the Task.** Read the stem first. Once you see language like \"must be true,\" \"follows logically,\" or \"properly inferred,\" set your standard: the answer must be 100% guaranteed by the stimulus.",
            "{{~**Deconstruct the Stimulus.** Break every sentence into its logical skeleton. Diagram conditional statements (If A → B). Note quantifiers (all, most, some, none). Flag numerical data. Identify causal links.~}}{{+**Deconstruct the Stimulus.** Break every sentence into its logical skeleton. Diagram conditional statements (If A → B). Note quantifiers (all, most, some, none). Flag numerical data. Identify causal links. Just as important, identify the **governed domain** of each rule and any exception, purpose, or effect language.+}}",
            "{{~**Synthesize and Predict.** Look for a shared term that connects two premises. Chain conditionals (A→B + B→C = A→C). Combine quantifiers (Most X are Y + Most X are Z = Some Y are Z). State your predicted deduction before reading the choices.~}}{{+**Synthesize When the Inference Is Visible.** Look for a shared term that connects two premises. Chain conditionals (A→B + B→C = A→C). Combine quantifiers (Most X are Y + Most X are Z = Some Y are Z). If the deduction is clear, state your predicted answer before reading the choices.+}}",
            "{{~**Evaluate and Eliminate.** Test each choice against the stimulus. If you can imagine ANY scenario where the stimulus is true but the choice is false, cross it out. The surviving choice is your answer.~}}{{+**Use Answer-Driven POE When the Inference Is Not Cleanly Visible.** If no strong prephrase emerges, evaluate the answer choices mechanically. Eliminate any choice that leaves the governed domain, ignores an exception, converts a purpose into a rule, broadens a quantifier, or fails the certainty test. The surviving choice must still be 100% proven.+}}"
          ]
        },
        {
          "type": "h3",
          "text": "Conditional Diagramming"
        },
        {
          "type": "paragraph",
          "text": "Conditional logic drives the majority of MBT questions. Translate natural language into arrows and memorize these equivalences:"
        },
        {
          "type": "table",
          "headers": [
            "Natural Language",
            "Diagram"
          ],
          "rows": [
            [
              "If A, then B",
              "A → B"
            ],
            [
              "All A are B",
              "A → B"
            ],
            [
              "A only if B",
              "A → B"
            ],
            [
              "No A are B",
              "A → ~B"
            ],
            [
              "Unless B, not A",
              "~B → ~A (equiv. A → B)"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Once diagrammed, chain links with shared terms and always consider the **contrapositive** — it is logically identical to the original and is a favorite source of correct answers."
        },
        {
          "type": "h3",
          "text": "Quantifier Tracking"
        },
        {
          "type": "paragraph",
          "text": "When the stimulus uses \"most\" or \"some,\" track the overlap carefully. Two \"most\" claims about the same group guarantee overlap: if most X are Y and most X are Z, then at least some X are both Y and Z. However, two \"some\" claims about the same group do NOT guarantee overlap — the two subsets could be entirely separate."
        },
        {
          "type": "diff-note",
          "text": "ADDITION: The mastery course adds a 'Governed Domain First' section here. This is the most important concept missing from the website version — it addresses why hard MBT questions are hard and gives students a concrete technique for handling dense stimuli.",
          "variant": "comment"
        },
        {
          "type": "h3",
          "text": "{{+Governed Domain First+}}"
        },
        {
          "type": "paragraph",
          "text": "{{+On hard MBT questions, the most important question is often not \"What can I infer?\" but \"Who exactly is governed by this rule?\" A rule about a narrow subset can feel like a rule about the whole topic. Resist that pull. If the stimulus governs only committee members who vote, employees who access files, or people under eighteen, the correct answer will stay inside that exact domain.+}}"
        },
        {
          "type": "paragraph",
          "text": "{{+Likewise, separate rule language from surrounding purpose/effect language. If the stimulus says a rule exists \"to protect privacy,\" that purpose may explain the rule, but it does not authorize every action that would also protect privacy. MBT rewards layer separation, not intuitive policy reading.+}}"
        },
        {
          "type": "diff-note",
          "text": "ADDITION: The mastery course adds a 'When to Prephrase vs. When to Use Answer-Driven POE' table. This operationalizes the strategic distinction introduced at the top of the lesson.",
          "variant": "comment"
        },
        {
          "type": "h3",
          "text": "{{+When to Prephrase vs. When to Use Answer-Driven POE+}}"
        },
        {
          "type": "table",
          "headers": [
            "{{+Situation+}}",
            "{{+Best Move+}}",
            "{{+Why+}}"
          ],
          "rows": [
            [
              "{{+The stimulus yields a clean chain, overlap, or numerical deduction+}}",
              "{{+Prephrase before reading the choices+}}",
              "{{+A strong prediction lets you match the credited answer quickly and ignore tempting noise.+}}"
            ],
            [
              "{{+The stimulus is dense, layered, or domain-heavy, and no single deduction is obvious+}}",
              "{{+Shift to answer-driven POE+}}",
              "{{+The answer choices often package the inference more cleanly than the stimulus does, but each choice must still survive the MBT proof standard.+}}"
            ],
            [
              "{{+A choice seems broadly consistent but feels stronger or broader than the text+}}",
              "{{+Run the certainty test immediately+}}",
              "{{+Consistency is not enough on MBT. If the answer could be false while the stimulus is true, it is wrong.+}}"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "{{+Fallback, Not Downgrade+}}",
          "variant": "default",
          "text": "{{+Answer-driven POE is a **fallback path**, not a weaker standard. You are not asking which answer is \"most plausible.\" You are still asking which answer cannot be false if the stimulus is true. The difference is only whether you reach that proof by prephrasing first or by eliminating answers one by one.+}}"
        },
        {
          "type": "h3",
          "text": "Wrong-Answer Patterns"
        },
        {
          "type": "diff-note",
          "text": "ADDITION: The website version has 5 trap types. The mastery course adds 'Domain Shift' and 'Purpose-to-Rule Jump' — both essential for the advanced lessons (17-12, 17-13) that the website version doesn't cover.",
          "variant": "comment"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Trap Type",
            "text": "Description"
          },
          "items": [
            {
              "title": "Could Be True",
              "text": "The choice is compatible with the stimulus but not proven by it. It might be true in some scenarios and false in others.",
              "badge": "Most Common",
              "badgeColor": "red"
            },
            {
              "title": "Mistaken Reversal",
              "text": "Reverses a conditional: concludes B→A from A→B. Always check the direction of the arrow.",
              "badge": "Logic Error",
              "badgeColor": "red"
            },
            {
              "title": "Mistaken Negation",
              "text": "Negates both sides without reversing: concludes ~A→~B from A→B. The valid inference is ~B→~A.",
              "badge": "Logic Error",
              "badgeColor": "red"
            },
            {
              "title": "Too Strong",
              "text": "Uses absolutes (all, never, only) when the stimulus supports a weaker claim (some, most).",
              "badge": "Scope Shift",
              "badgeColor": "red"
            },
            {
              "title": "Out of Scope",
              "text": "Introduces concepts, comparisons, or value judgments not mentioned in the stimulus.",
              "badge": "Irrelevant",
              "badgeColor": "red"
            },
            {
              "title": "{{+Domain Shift+}}",
              "text": "{{+Keeps the same topic but broadens or narrows the governed set. Watch especially for answers that erase exceptions or move from a subset to the whole class.+}}",
              "badge": "{{+Boundary Error+}}",
              "badgeColor": "red"
            },
            {
              "title": "{{+Purpose-to-Rule Jump+}}",
              "text": "{{+Treats the reason a rule exists as if it were itself an operative rule. A purpose can explain the rule without proving every action that serves that purpose.+}}",
              "badge": "{{+Layer Error+}}",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "h3",
          "text": "Worked Method Snapshot"
        },
        {
          "type": "paragraph",
          "text": "Suppose all of the books on the top shelf are hardcovers, most of those top-shelf books were published before 1990, and no book published before 1990 has a digital edition. The safe MBT move is to chain only what must follow: if most top-shelf books are pre-1990 and all top-shelf books are hardcovers, then at least some hardcovers lack digital editions."
        },
        {
          "type": "paragraph",
          "text": "Notice what the method refuses to do. It does not conclude that all hardcovers lack digital editions, or that every pre-1990 book sits on the top shelf. MBT rewards the narrow conclusion that the premises force and punishes any answer that overstates the chain."
        },
        {
          "type": "diff-note",
          "text": "CHANGE: The timing callout is updated. The website version says 'spend 60-70% of time deconstructing and synthesizing.' The mastery course version adds nuance: prephrase if the deduction is visible, shift to answer-driven POE if not, but keep the proof standard fixed either way.",
          "variant": "comment"
        },
        {
          "type": "callout",
          "title": "Timing Tip",
          "variant": "tip",
          "text": "{{-Spend 60–70% of your time deconstructing and synthesizing the stimulus. A strong prephrase lets you identify the correct answer in seconds and resist attractive traps. If no choice matches your prediction, re-read the stimulus — you likely missed a linkage.-}}{{+Spend 60–70% of your time deconstructing the stimulus and searching for a clean inference. If it appears, prephrase it. If it does not appear after a disciplined read, do not force it. Shift to answer-driven POE and eliminate answers mechanically. What must not change is the proof standard: every surviving answer still has to be certain.+}}"
        }
      ],
    },
    playbook: {
      label: 'Playbook',
      content: [
        {
          type: 'callout',
          variant: 'tip',
          text: '**Target:** 1:30 per Must Be True question',
        },
        { type: 'h3', text: 'The Method' },
        {
          type: 'process',
          steps: [
            '**Catalog Premises.** Read the stem, confirm the certainty standard, then break every sentence into its logical skeleton. Diagram conditionals, note quantifiers, flag numerical data, and identify the governed domain of each rule.',
            '**Combine Claims.** Look for shared terms that connect two premises. Chain conditionals (A\u2192B + B\u2192C = A\u2192C). Combine quantifiers (Most X are Y + Most X are Z = Some Y are Z). Check for overlapping sets.',
            '**Prephrase Inference.** If a clean deduction is visible, state your predicted answer before reading the choices. If the stimulus is too dense, shift to answer-driven POE without relaxing the proof standard.',
            '**Match Weakest Link.** Test every choice against the certainty standard: can you construct ANY scenario where the stimulus is true but this answer is false? If yes, eliminate. The surviving answer must be logically guaranteed.',
          ],
        },
        { type: 'h3', text: 'Decision Table' },
        {
          type: 'table',
          headers: ['If You See', 'Then Do', 'Watch Out For'],
          rows: [
            [
              'Multiple premises combine via a shared term',
              'Synthesize the intersection -- derive the combined inference',
              'Answer that broadens beyond the shared intersection',
            ],
            [
              'Causal claim in the stimulus',
              'Infer the stated effect for the stated cause',
              'Answer that reverses the causal direction',
            ],
            [
              'Strict definition + case that satisfies it',
              'Apply the definition to the specific facts',
              'Answer that extends the definition beyond stated criteria',
            ],
            [
              'Constraint + condition met',
              'Derive the consequence forced by the constraint',
              'Answer that ignores an exception or boundary',
            ],
            [
              'LEAST supported (EXCEPT variant)',
              'Flip the task -- find the one answer that lacks support',
              'Accidentally picking the best-supported answer instead',
            ],
            [
              'No clear combination visible',
              'Choose the most conservative claim the premises actually support',
              'Dramatic-sounding answer that exceeds the evidence',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          text: '**Catalog Premises \u2192 Combine Claims \u2192 Prephrase Inference \u2192 Match Weakest Link**',
        },
      ],
    },
  },
};
