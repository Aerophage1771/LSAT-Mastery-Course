import { Lesson } from '../../types';

export const Lesson1b_Foundations: Lesson = {
  id: '5-1b',
  title: 'Foundations',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'The Flaw Mindset: From Description to Evaluation' },
    {
      type: 'paragraph',
      text: '**Flaw questions represent a critical turning point in your Logical Reasoning journey.** After learning to *describe* arguments (Method of Reasoning), your task now shifts to **evaluating** them. You must identify the specific logical error — the "flaw" — that makes the author\'s conclusion suspect.',
    },
    {
      type: 'paragraph',
      text: 'This shift changes how you read arguments. In Method of Reasoning, you asked: "What is the author doing?" In Flaw, you ask: **"Where did the author go wrong?"** You are no longer a neutral reporter of technique — you are a critical evaluator of logic.',
    },
    {
      type: 'breakdown',
      labels: { title: 'Question Type', text: 'Your Role' },
      items: [
        {
          title: 'Method of Reasoning',
          text: '**Describe** the technique the author uses. You are a neutral reporter. "The author uses an analogy to support the conclusion."',
          badge: 'Descriptive',
          badgeColor: 'blue',
        },
        {
          title: 'Flaw',
          text: '**Evaluate** the technique the author uses. You are a critical judge. "The author\'s analogy is flawed because the two cases differ in a relevant way."',
          badge: 'Evaluative',
          badgeColor: 'red',
        },
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Flaw vs. Method of Reasoning' },
    {
      type: 'paragraph',
      text: 'Because both question types ask you to analyze *how* an argument works, students sometimes confuse them. The table below makes the distinction clear:',
    },
    {
      type: 'table',
      headers: ['Feature', 'Method of Reasoning', 'Flaw'],
      rows: [
        ['**Goal**', 'Describe what the author does', 'Identify what the author does *wrong*'],
        ['**Assumption**', 'The argument may or may not be valid', 'The argument is definitely flawed'],
        [
          '**Correct answer describes...**',
          'A neutral technique (analogy, generalization, counterexample)',
          'A specific error (confuses correlation with causation, treats necessary as sufficient)',
        ],
        [
          '**Stem language**',
          '"proceeds by," "does which of the following"',
          '"vulnerable to criticism," "flawed in that," "questionable because"',
        ],
        ['**Evaluation required?**', 'No — just label the technique', 'Yes — explain *why* the technique fails'],
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'The Gap Model' },
    {
      type: 'paragraph',
      text: 'The most important concept for Flaw questions is the **Logical Gap.** Every flawed argument has a gap between what the premises prove and what the conclusion claims. The flaw is the *reason* that gap exists.',
    },
    {
      type: 'paragraph',
      text: 'Think of it this way: the premises are the foundation and the conclusion is the roof. In a valid argument, there is a sturdy pillar connecting them. In a flawed argument, the pillar is missing or cracked. Your job is to describe the missing or cracked pillar — the **unwarranted assumption** the author makes when leaping from evidence to claim.',
    },

    { type: 'h4', text: 'Accepting the Premises' },
    {
      type: 'paragraph',
      text: 'To find the gap, you must follow a critical rule: **provisionally accept the premises as true.** Do not waste time arguing with the stated facts. The flaw is *never* that a premise is factually untrue. Instead, focus entirely on the *relationship* between those facts and the conclusion.',
    },

    { type: 'h4', text: 'Fact vs. Interpretation' },
    { type: 'paragraph', text: 'While you accept the *facts*, you must question the *interpretation* of those facts:' },
    {
      type: 'breakdown',
      labels: { title: 'Stance', text: 'What It Means' },
      items: [
        {
          title: 'Accept the Fact',
          text: 'If the author says "a recent study showed X," you accept that the study exists and showed X. You do not challenge the study\'s existence.',
          badge: 'Accept',
          badgeColor: 'green',
        },
        {
          title: 'Question the Interpretation',
          text: 'You are free to ask: Does this study actually prove the conclusion? Could the data be explained another way? Is the sample representative? Does the conclusion go beyond what the evidence supports?',
          badge: 'Question',
          badgeColor: 'red',
        },
      ],
    },
    {
      type: 'paragraph',
      text: 'The key test is always: **"Even if I accept all these premises as 100% true, is the conclusion guaranteed to be true?"** If the answer is "No," the reason *why* is the flaw.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'The Gap Model in Action' },
    { type: 'paragraph', text: "Let's see how the Gap Model works on a concrete argument:" },
    {
      type: 'blockquote',
      text: '"People who eat breakfast every day are, on average, thinner than people who skip breakfast. Therefore, eating breakfast causes weight loss."',
    },
    {
      type: 'process',
      title: 'Applying the Gap Model',
      steps: [
        '**Identify the Conclusion:** Eating breakfast *causes* weight loss.',
        '**Identify the Premise:** People who eat breakfast daily are thinner on average.',
        '**Accept the Premise:** Yes, we accept that breakfast-eaters are thinner. This is a correlation.',
        '**Find the Gap:** The conclusion claims *causation*, but the premise only shows *correlation*. There is a gap between "these two things happen together" and "one causes the other." Perhaps thinner people have more time for breakfast, or a third factor (like health-consciousness) drives both behaviors.',
        '**Name the Flaw:** The argument confuses correlation with causation — it mistakes the fact that two things co-occur for evidence that one causes the other.',
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Common Flaw Categories — Preview' },
    {
      type: 'paragraph',
      text: 'While every argument is unique in its topic, the logical errors arguments commit fall into **predictable categories**. Recognizing these categories on sight is one of the most powerful skills you can develop. The next lesson (Field Guide) covers each in depth; here is a preview of the major families:',
    },
    {
      type: 'table',
      headers: ['Flaw Category', 'Core Error', 'Approx. Frequency', 'Priority'],
      rows: [
        ['**Causal Flaws**', 'Confusing correlation with causation', '~20%', '★★★ High'],
        ['**Conditional Logic Flaws**', 'Misapplying if/then rules (reversals, negations)', '~15%', '★★★ High'],
        ['**Overlooking Possibilities**', 'Failing to consider alternative explanations', '~15%', '★★★ High'],
        [
          '**Statistical / Sampling Flaws**',
          'Bad sample, numbers vs. percentages, part vs. whole',
          '~12%',
          '★★☆ Medium-High',
        ],
        [
          '**Scope Shift Flaws**',
          'Conclusions that go beyond the evidence (some→all, past→present)',
          '~10%',
          '★★☆ Medium-High',
        ],
        ['**Source Attack (Ad Hominem)**', 'Attacking the person instead of the argument', '~8%', '★★☆ Medium'],
        ['**Equivocation**', 'Using a key term in two different senses', '~7%', '★★☆ Medium'],
        ['**Circular Reasoning**', 'Restating the conclusion as a premise', '~5%', '★☆☆ Lower'],
        ['**False Dichotomy**', 'Treating two options as exhaustive when others exist', '~4%', '★☆☆ Lower'],
        ['**Appeal to Authority / Ignorance**', 'Misusing authority or absence of evidence', '~4%', '★☆☆ Lower'],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'The Big Three',
      text: 'Causal flaws, conditional logic flaws, and overlooking possibilities account for roughly **50%** of all Flaw questions. If you master only three categories, make it these three.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Indicator Words That Signal Flawed Reasoning' },
    {
      type: 'paragraph',
      text: "Certain words in an argument's conclusion or premises often signal a specific type of flaw. Train yourself to react to these trigger words:",
    },
    {
      type: 'table',
      headers: ['Trigger Words in the Stimulus', 'Likely Flaw Type'],
      rows: [
        ['"causes," "leads to," "results in," "stimulates"', 'Causal Flaw (correlation → causation)'],
        ['"if," "only if," "unless," "requires," "all...are"', 'Conditional Logic Flaw (reversal or negation)'],
        ['"survey," "study," "poll," "sample," "respondents"', 'Sampling / Generalization Flaw'],
        ['"most," "on average," "percentage," "rate," "number"', 'Statistical Flaw (numbers vs. percentages)'],
        [
          '"some," "a few," "certain" (premise) → "all," "no," "every" (conclusion)',
          'Scope Shift (hasty generalization)',
        ],
        ['"you can\'t trust X because..." (attacking the source)', 'Ad Hominem / Source Attack'],
        ['"either X or Y" (with no third option considered)', 'False Dichotomy'],
        ['A key term used differently in premise vs. conclusion', 'Equivocation'],
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Your First Flaw Question' },
    {
      type: 'paragraph',
      text: "Let's put everything together with a concrete practice question. Read the stimulus, find the gap, name the flaw, and match it to the correct answer.",
    },
    { type: 'paragraph', text: 'Consider this illustrative argument:' },
    {
      type: 'blockquote',
      text: '"Politician: My opponent claims we should invest more in public transportation. But my opponent has never even ridden a bus. How can someone who has never used public transit know what it needs? We should reject this proposal."',
    },
    {
      type: 'paragraph',
      text: "This example is useful because the flaw is easy to isolate: the speaker never tests the transportation proposal itself and instead attacks the proponent's personal qualifications.",
    },

    { type: 'h3', text: 'Walkthrough' },
    {
      type: 'process',
      title: 'Solving Step by Step',
      steps: [
        "**Identify the Conclusion:** We should reject the opponent's public transportation proposal.",
        '**Identify the Premises:** The opponent has never ridden a bus. Therefore, the opponent cannot know what public transit needs.',
        "**Find the Gap:** The argument does not engage with the *substance* of the proposal at all. Instead, it attacks the opponent's personal experience. Whether or not the opponent rides buses is irrelevant to whether the proposal itself has merit.",
        "**Name the Flaw:** This is an **ad hominem** (source attack) — the argument rejects a claim by attacking the person who made it, rather than addressing the claim's content.",
        '**Match to Answer:** Look for language describing a source attack or personal attack rather than a causal, statistical, or conditional error.',
      ],
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'Why This Is an Ad Hominem',
      text: "The conclusion is about whether the proposal should be rejected, but the support concerns only the opponent's personal background. That mismatch is the flaw. When the evidence attacks a speaker instead of the claim itself, you are looking at a source attack, not a dispute over the proposal's substance.",
    },
  ],
  alternates: {
    glance: {
      label: 'At a Glance',
      content: [
        { type: 'h3', text: 'Foundations \u2014 At a Glance' },
        {
          type: 'table',
          headers: ['Concept', 'Core Idea', 'Why It Matters'],
          rows: [
            [
              '**Flaw Mindset**',
              'Shift from describing technique (Method of Reasoning) to evaluating where the author went wrong.',
              'Flaw questions assume the argument is broken \u2014 your job is to name the break.',
            ],
            [
              '**Gap Model**',
              'Accept premises as true, then ask: "Why don\'t these premises *guarantee* this conclusion?"',
              'The gap between evidence and claim is where every flaw lives.',
            ],
            [
              '**Flaw Categories**',
              'Logical errors fall into predictable families: Causal, Conditional, Statistical, Scope Shift, and Other.',
              'Recognizing the category on sight lets you prephrase the answer before reading choices.',
            ],
          ],
        },
        {
          type: 'blockquote',
          text: '"People who eat breakfast daily are thinner on average. Therefore, eating breakfast causes weight loss."',
        },
        {
          type: 'paragraph',
          text: '**Gap Model applied:** The premise shows correlation (breakfast-eaters are thinner). The conclusion claims causation (breakfast *causes* weight loss). The gap: co-occurrence does not prove causation. A third factor like health-consciousness could drive both behaviors.',
        },
        {
          type: 'list',
          items: [
            'Accept the *facts* but question the *interpretation* \u2014 the flaw is never that a premise is false.',
            'The Big Three (Causal, Conditional, Overlooking Possibilities) account for ~50% of Flaw questions.',
            'Trigger words in the conclusion (causes, if/then, all) are your first diagnostic clue.',
          ],
        },
      ],
    },
  },
};
