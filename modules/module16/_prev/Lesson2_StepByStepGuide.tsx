import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: '16-2',
  title: 'Step-by-Step: Most Strongly Supported',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Step-by-Step: Most Strongly Supported' },
    { type: 'paragraph', text: 'Follow this four-step method to solve any MSS question efficiently and accurately.' },
    { type: 'h3', text: 'The 4-Step Method' },
    {
      type: 'process',
      title: 'Solving MSS Questions',
      steps: [
        '**Read for Facts.** Treat every sentence as a premise you must accept. Identify the key terms, quantifiers, and any causal or conditional language.',
        '**Identify Key Relationships.** Look for links between premises: shared terms, cause-and-effect chains, comparisons, or conditional triggers.',
        '**Prephrase an Inference.** Before reading the answers, ask yourself: *What follows from combining these facts?* Form a rough prediction.',
        '**Test and Rank Each Answer.** Check every choice against the stimulus. Rank it as strongly supported, merely consistent, or anti-supported. The correct answer is the one the premises support best relative to the others.',
      ],
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'Relative-Best Reasoning',
      text: 'On hard MSS questions, stop demanding a perfect paraphrase. Sometimes none of the five answers is ideal. Your job is to choose the one with the **strongest backing**, not the one that feels like airtight MBT proof. If four answers clearly overreach or lack support, the remaining modest answer wins even if it sounds cautious.',
    },
    { type: 'h3', text: 'Wrong-Answer Patterns' },
    {
      type: 'list',
      items: [
        '**Too Extreme:** Uses absolutes like *all, never, impossible* when the stimulus uses moderate language.',
        '**Unsupported Leap:** Introduces a concept or prediction not grounded in the stimulus.',
        '**Reverses Direction:** Treats the answer as evidence for the stimulus instead of the other way around.',
        "**Outside Scope:** Brings in real-world knowledge that the passage doesn't mention or imply.",
        '**Merely Consistent:** Could be true, but the stimulus never actually supports it more than the alternatives.',
      ],
    },
    { type: 'h3', text: 'Special MSS Hazard Checks' },
    {
      type: 'list',
      items: [
        '**State-of-mind trap:** The stimulus describes what happened, but the answer tells you what someone knew, intended, believed, or wanted.',
        '**Comparative baseline trap:** The answer says something is higher, lower, better, or worse without a stated comparison point in the text.',
        '**Relative-best trap:** A tempting wrong answer sounds more dramatic, while the correct answer is narrower and better supported.',
      ],
    },
    { type: 'h3', text: 'Worked Method Snapshot' },
    {
      type: 'paragraph',
      text: 'Take a stimulus saying that employees who take short breaks report higher focus, while most workplaces still discourage frequent breaks because managers equate visible desk time with productivity. The best supported inference is not that managers are malicious or that breaks always maximize productivity. It is the narrower point that many workplace policies may conflict with practices the studies associate with stronger focus.',
    },
    {
      type: 'paragraph',
      text: 'That is the MSS process in miniature. Read the facts as fixed, combine them carefully, and choose the conclusion that stays closest to what those facts jointly support. The wrong answers almost always overstate the evidence or import a new claim the stimulus never established.',
    },
    {
      type: 'callout',
      title: 'Timing Tip',
      variant: 'tip',
      text: 'Spend roughly 60 percent of your time on the stimulus and prephrasing, and 40 percent on the answer choices. A strong prephrase lets you spot the correct answer quickly and resist attractive wrong answers.',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "Step-by-Step: Most Strongly Supported"
        },
        {
          "type": "paragraph",
          "text": "Follow this four-step method to solve any MSS question efficiently and accurately."
        },
        {
          "type": "h3",
          "text": "The 4-Step Method"
        },
        {
          "type": "process",
          "title": "Solving MSS Questions",
          "steps": [
            "**Read for Facts.** Treat every sentence as a premise you must accept. Identify the key terms, quantifiers, and any causal or conditional language.",
            "**Identify Key Relationships.** Look for links between premises: shared terms, cause-and-effect chains, comparisons, or conditional triggers.",
            "**Prephrase an Inference.** Before reading the answers, ask yourself: *What follows from combining these facts?* Form a rough prediction.",
            "{{~**Test and Rank Each Answer.** Check every choice against the stimulus. Rank it as strongly supported, merely consistent, or anti-supported. The correct answer is the one the premises support best relative to the others.~}}"
          ]
        },
        {
          "type": "diff-note",
          "text": "ADD: The Relative-Best Reasoning callout below is in the mastery course but absent from the website. It addresses a critical nuance — on the hardest MSS questions no answer is perfect and the student must choose the least-bad option. Add after the 4-Step Method process block.",
          "variant": "add"
        },
        {
          "type": "callout",
          "variant": "default",
          "title": "{{+Relative-Best Reasoning+}}",
          "text": "{{+On hard MSS questions, stop demanding a perfect paraphrase. Sometimes none of the five answers is ideal. Your job is to choose the one with the **strongest backing**, not the one that feels like airtight MBT proof. If four answers clearly overreach or lack support, the remaining modest answer wins even if it sounds cautious.+}}"
        },
        {
          "type": "h3",
          "text": "Wrong-Answer Patterns"
        },
        {
          "type": "list",
          "items": [
            "**Too Extreme:** Uses absolutes like *all, never, impossible* when the stimulus uses moderate language.",
            "**Unsupported Leap:** Introduces a concept or prediction not grounded in the stimulus.",
            "**Reverses Direction:** Treats the answer as evidence for the stimulus instead of the other way around.",
            "**Outside Scope:** Brings in real-world knowledge that the passage doesn't mention or imply.",
            "{{+**Merely Consistent:** Could be true, but the stimulus never actually supports it more than the alternatives. 'Could be true' is not enough — you need the stimulus to be *pushing toward* the answer.+}}"
          ]
        },
        {
          "type": "diff-note",
          "text": "ADD: The Special MSS Hazard Checks section is in the mastery course but absent from the website. These three checks address specific trap mechanics that are not covered by the generic wrong-answer patterns. Add after Wrong-Answer Patterns.",
          "variant": "add"
        },
        {
          "type": "h3",
          "text": "{{+Special MSS Hazard Checks+}}"
        },
        {
          "type": "list",
          "items": [
            "{{+**State-of-mind trap:** The stimulus describes what happened, but the answer tells you what someone knew, intended, believed, or wanted.+}}",
            "{{+**Comparative baseline trap:** The answer says something is higher, lower, better, or worse without a stated comparison point in the text.+}}",
            "{{+**Relative-best trap:** A tempting wrong answer sounds more dramatic, while the correct answer is narrower and better supported.+}}"
          ]
        },
        {
          "type": "h3",
          "text": "Worked Method Snapshot"
        },
        {
          "type": "paragraph",
          "text": "Take a stimulus saying that employees who take short breaks report higher focus, while most workplaces still discourage frequent breaks because managers equate visible desk time with productivity. The best supported inference is not that managers are malicious or that breaks always maximize productivity. It is the narrower point that many workplace policies may conflict with practices the studies associate with stronger focus."
        },
        {
          "type": "paragraph",
          "text": "That is the MSS process in miniature. Read the facts as fixed, combine them carefully, and choose the conclusion that stays closest to what those facts jointly support. The wrong answers almost always overstate the evidence or import a new claim the stimulus never established."
        },
        {
          "type": "callout",
          "title": "Timing Tip",
          "variant": "tip",
          "text": "Spend roughly 60 percent of your time on the stimulus and prephrasing, and 40 percent on the answer choices. A strong prephrase lets you spot the correct answer quickly and resist attractive wrong answers."
        }
      ],
    },
    playbook: {
      label: 'Playbook',
      content: [
        {
          type: 'callout',
          variant: 'tip',
          text: '**Target:** 1:30 per Most Strongly Supported question',
        },
        { type: 'h3', text: 'The Method' },
        {
          type: 'process',
          steps: [
            '**Read Context.** Treat every sentence as a premise you must accept. Identify key terms, quantifiers, and any causal or conditional language.',
            '**Identify Gap.** Look for links between premises: shared terms, cause-and-effect chains, comparisons, or conditional triggers.',
            '**Prephrase Completion.** Before reading the answers, ask: *What follows from combining these facts?* Form a rough prediction of the best-supported inference.',
            '**Match & Verify.** Check every choice against the stimulus. Rank as strongly supported, merely consistent, or anti-supported. The correct answer is the one with the best textual backing.',
          ],
        },
        { type: 'h3', text: 'Decision Table' },
        {
          type: 'table',
          headers: ['If You See', 'Then Do', 'Watch Out For'],
          rows: [
            [
              'Mechanistic chain (A causes B causes C)',
              'Complete the causal link -- infer A connects to C',
              'Answer that reverses the causal direction',
            ],
            [
              'Analogy or comparison between two things',
              'Complete the comparison -- draw the relative conclusion',
              'Answer that extends comparison beyond the stated scope',
            ],
            [
              'Problem described with no stated solution',
              'Supply the solution the premises point toward',
              'Answer that introduces a solution from outside the stimulus',
            ],
            [
              'Conditional rule (If X then Y)',
              'Supply the consequent or chain the contrapositive',
              'Answer that reverses the conditional (Y therefore X)',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          text: '**Read Context \u2192 Identify Gap \u2192 Prephrase Completion \u2192 Match & Verify**',
        },
      ],
    },
  },
};
