import { Lesson } from '../../types';

export const Lesson2b_ReadAndDecode: Lesson = {
  id: '1-2b',
  title: 'Read & Decode',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Step 1: Find the Target Statement' },
    {
      type: 'paragraph',
      text: 'Before reading the stimulus, read the question stem. It will quote or paraphrase a specific sentence and ask you to identify its role. Your only job in this step is to know **exactly which sentence** you need to analyze.',
    },

    { type: 'h4', text: 'Example' },
    {
      type: 'blockquote',
      text: '"The claim that increased carbon emissions are unlikely to be the sole cause of recent temperature changes plays which one of the following roles in the argument?"',
    },
    {
      type: 'paragraph',
      text: 'The target is the sentence about carbon emissions. Before reading the stimulus, you already know what to look for. When you find it, mentally bracket it.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Tip: Read the Question First',
      text: 'Always read the question stem **before** the stimulus. This gives you a lens to read through. You will naturally focus on the target sentence and its relationship to the rest of the argument, instead of reading passively.',
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'When This Step Gets Tricky',
      text: 'Sometimes the question stem paraphrases the target rather than quoting it directly. In these cases, look for the sentence in the stimulus that conveys the same meaning, even if the wording differs. Focus on the **idea**, not the exact words.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 2: Analyze the Statements & Spot Potential Roles' },
    {
      type: 'paragraph',
      text: 'Now read the entire stimulus. As you read each sentence, translate academic language into simple terms and form a quick hypothesis about its role. You are not yet confirming anything — just tagging each sentence with a tentative label.',
    },
    {
      type: 'paragraph',
      text: 'But before you hand out role labels, ask a more basic question: **Is there an argument here?** If no statement is being offered as a reason to believe another statement, then you are looking at background, context, or a phenomenon rather than a premise/conclusion structure.',
    },
    {
      type: 'paragraph',
      text: 'This is also the step where you need to decode dense language before you try to map support. Many Argument Part misses happen because the student reads a long sentence as one blur instead of separating **core claim** from **modifiers**, **referential words**, or **comparative framing**.',
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'The Support Test',
      text: 'Ask: **If this sentence were true, would it make some other sentence more likely to be true?** If yes, you are probably looking at argumentative support. If no, the sentence may be background, context, or a neutral description.',
    },

    { type: 'h4', text: 'Front-End Parsing Toolkit' },
    {
      type: 'paragraph',
      text: 'Before you decide what role a sentence plays, first make sure you know what the sentence **actually says**. Use the toolkit below whenever the prose feels dense, abstract, or grammatically packed.',
    },
    {
      type: 'breakdown',
      labels: { title: 'Tool', text: 'What to do' },
      items: [
        {
          title: '1. Find the sentence kernel',
          text: 'Strip away modifiers and find the basic subject + verb + core claim. Then rebuild the sentence with the detail added back in. This prevents you from mistaking description for the main assertion.',
          badge: 'Core move',
          badgeColor: 'indigo',
        },
        {
          title: '2. Separate structure from detail',
          text: 'Ask which words are doing the logical work and which words are only narrowing, describing, or qualifying the claim. Adjectives, relative clauses, appositives, and examples often add detail without changing the role.',
          badge: 'Modifier check',
          badgeColor: 'blue',
        },
        {
          title: '3. Break linked clauses apart',
          text: 'Long sentences often contain multiple mini-claims joined by commas, semicolons, dashes, or contrast words. Split them into smaller units before deciding what supports what.',
          badge: 'Clause split',
          badgeColor: 'slate',
        },
        {
          title: '4. Resolve referentials',
          text: 'Replace words like **this, that, these, those, such, it, they, the former, the latter** with the actual noun or idea they refer to. If the reference is vague, role-labeling becomes guesswork.',
          badge: 'Reference',
          badgeColor: 'green',
        },
        {
          title: '5. Translate comparisons',
          text: 'Ask: compared to what, on what dimension, and in which direction? Many comparative claims sound clear until you notice the baseline is missing or only implied.',
          badge: 'Comparison',
          badgeColor: 'blue',
        },
        {
          title: '6. Convert rhetorical questions',
          text: 'Treat rhetorical questions as disguised assertions. Translate the question into the claim the author clearly expects you to accept.',
          badge: 'Voice check',
          badgeColor: 'red',
        },
        {
          title: '7. Make abstraction concrete',
          text: 'When the wording is abstract, create a simple example or plain-English paraphrase. You are not changing the meaning; you are making the structure visible.',
          badge: 'Translation',
          badgeColor: 'indigo',
        },
      ],
    },

    { type: 'h4', text: 'Worked Parsing Example' },
    {
      type: 'blockquote',
      text: '"The city\'s recent decision, though praised by some commentators as more fiscally responsible than the earlier proposal, will likely prove less effective at reducing congestion."',
    },
    {
      type: 'process',
      title: 'How to Decode It',
      steps: [
        '**Kernel:** "The city\'s recent decision will likely prove less effective at reducing congestion."',
        '**Modifier vs. structure:** "though praised by some commentators..." is not the main claim; it is backgrounded contrast.',
        '**Comparative translation:** Less effective than **the earlier proposal**. That earlier proposal is the comparison baseline.',
        '**Plain English paraphrase:** "Some people praise the new decision, but the author thinks it will reduce congestion less than the old plan would have."',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Kernel First, Detail Second',
      text: 'If a sentence feels hard, do not try to hold every word in your head at once. First identify the stripped-down claim. Then add the modifiers back one at a time and ask whether they change role, scope, or only detail.',
    },

    { type: 'h4', text: 'Comparatives and Referentials' },
    {
      type: 'table',
      headers: ['If you see...', 'Ask...', 'Why it matters'],
      rows: [
        [
          '**more / less / better / worse / higher / lower**',
          '"Compared to what?"',
          'An unstated baseline can hide a flaw, a concession, or a narrower claim than you first assumed.',
        ],
        [
          '**this / that / these / such / it / they**',
          '"What exact noun or idea does this point back to?"',
          'A vague referent can make you assign the sentence to the wrong claim or wrong speaker.',
        ],
        [
          'A sentence ending in a **question mark**',
          '"What assertion is the author clearly implying?"',
          'Rhetorical questions often function as premises or conclusions in disguise.',
        ],
      ],
    },

    { type: 'h4', text: 'Hypothesis Tags' },
    {
      type: 'table',
      headers: ['If a statement looks like...', 'Tag it as...', 'Signal Words'],
      rows: [
        [
          'A verifiable fact, study result, or observation',
          '**Likely Premise**',
          '*because, since, for, after all, given that*',
        ],
        ['A recommendation, judgment, or prediction', '**Likely Conclusion**', '*therefore, thus, so, hence, should*'],
        ['An undisputed fact setting the scene', '**Likely Background**', '*It is well known that, Historically*'],
        ['A view attributed to others', '**Likely Opposing View**', '*Some argue, Critics claim, Many believe*'],
        ['An acknowledgment of a counterpoint', '**Likely Concession**', '*Although, While it is true, Granted*'],
      ],
    },

    {
      type: 'table',
      headers: ['If the stimulus behaves like...', 'Treat it as...', 'Immediate implication'],
      rows: [
        [
          'One claim is presented as a reason for another claim',
          '**An argument**',
          'Move on to mapping premises, conclusions, and support direction.',
        ],
        [
          'Several facts are listed, but none is offered to prove another',
          '**A fact set / background**',
          'Do not force premise/conclusion labels where there is no support relation.',
        ],
        [
          'A surprising pattern is identified without yet being defended',
          '**A phenomenon**',
          'Expect later explanation or evaluation rather than immediate conclusion structure.',
        ],
      ],
    },

    { type: 'h4', text: 'Example' },
    {
      type: 'blockquote',
      text: '"Vitamin D deficiency is widespread in northern climates. Recent studies have shown that supplementation reduces fracture risk by 20%. Therefore, public health agencies should recommend routine supplementation for adults over 50."',
    },
    { type: 'paragraph', text: 'Quick hypothesis tags:' },
    {
      type: 'breakdown',
      labels: { title: 'Sentence', text: 'Hypothesis' },
      items: [
        {
          title: '"Vitamin D deficiency is widespread..."',
          text: 'Presents an undisputed fact. **Tag: Likely Background.**',
          badge: 'Background',
          badgeColor: 'slate',
        },
        {
          title: '"Recent studies have shown..."',
          text: 'Presents a study result as evidence. **Tag: Likely Premise.**',
          badge: 'Premise',
          badgeColor: 'slate',
        },
        {
          title: '"Therefore, public health agencies should..."',
          text: 'A recommendation introduced by "Therefore." **Tag: Likely Conclusion.**',
          badge: 'Conclusion',
          badgeColor: 'indigo',
        },
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: "Tip: Translate, Don't Memorize",
      text: 'Don\'t try to memorize the stimulus. Instead, translate each sentence into simple terms as you read. "Recent studies have shown that supplementation reduces fracture risk by 20%" becomes "supplements help prevent fractures." This makes the argument\'s logic transparent.',
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'Concrete Translation Rule',
      text: 'If the sentence is abstract, supply a simple concrete example in your own head. If the sentence is concrete but grammatically messy, reduce it to the kernel first. These are different problems, and they require different fixes.',
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'When This Step Gets Tricky',
      text: 'Some sentences contain no indicator words at all. When this happens, focus on the **content** rather than the language. Ask: "Is this a fact the author is presenting, or a claim the author is arguing for?" Facts are typically premises; claims requiring justification are typically conclusions.',
    },
  ],
  alternates: {
    playbook: {
      label: 'Playbook',
      content: [
        {
          type: 'callout',
          variant: 'tip',
          text: '**Steps 1-2:** Finding and analyzing the target statement',
        },
        { type: 'h3', text: 'Step 1: Find the Target' },
        {
          type: 'process',
          steps: [
            '**Read the question stem first.** Identify which sentence or phrase the question asks about.',
            '**Locate the target in the stimulus.** Find the exact sentence \u2014 it may be paraphrased in the question.',
            '**Mark it mentally.** Everything you do next is about THIS sentence\'s relationship to the rest.',
          ],
        },
        { type: 'h3', text: 'Step 2: Analyze Surrounding Statements' },
        {
          type: 'table',
          headers: ['Signal', 'What It Tells You'],
          rows: [
            ['*because, since, for, given that*', 'The next claim is a premise'],
            ['*therefore, thus, so, hence*', 'The next claim is a conclusion'],
            ['*Some argue, Critics claim*', 'The next claim is an opposing viewpoint'],
            ['*Although, While it is true, Granted*', 'The next claim is a concession'],
            ['*It is well known, Historically*', 'The next claim is background context'],
            ['*But, However, Yet, Nevertheless*', 'A pivot \u2014 the author\'s view follows'],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          text: '**Find the target \u2192 Read what\'s around it \u2192 Note the indicator words**',
        },
      ],
    },
  },
};
