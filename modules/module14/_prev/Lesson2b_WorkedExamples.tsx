import { Lesson } from '../../types';

export const Lesson2b_WorkedExamples: Lesson = {
  id: '14-2b',
  title: 'Worked Examples',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Full Worked Example' },
    {
      type: 'paragraph',
      text: "Let's apply all four steps to a complete Principle-Generalization question from start to finish.",
    },
    { type: 'paragraph', text: 'Consider this illustrative case study:' },
    {
      type: 'blockquote',
      text: '"A pharmaceutical company developed a new pain reliever and tested it against a placebo in two trials. In the first trial, patients were told they might receive either the drug or a sugar pill. In the second trial, patients were told they would definitely receive a powerful new pain medication, though half actually received the placebo. In the second trial, both groups reported dramatically higher pain relief."',
    },
    {
      type: 'paragraph',
      text: 'The key move here is to abstract away from pain medication and see the deeper pattern: expectations change outcomes even when the underlying substance does not.',
    },

    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },

    { type: 'h3', text: 'Applying the 4-Step Method' },

    {
      type: 'process',
      title: 'Step-by-Step Walkthrough',
      steps: [
        "**Step 1 — Understand the Situation:**\n• **Players:** Patients in two clinical trials for a new pain reliever.\n• **Key Variable:** What patients were *told* about their treatment. Trial 1: might get drug or sugar pill. Trial 2: told they would definitely get a powerful new medication.\n• **Outcome:** Trial 2 produced dramatically higher pain relief in *both* groups (even the placebo group) compared to Trial 1. The patients' beliefs, not the actual substance, drove the difference.",
        "**Step 2 — Identify the Key Dynamic:**\nThe same substances (drug and placebo) produced different results depending on what patients *believed* they were receiving. When patients expected a powerful treatment, even the placebo worked much better. The key dynamic is: **expectations about a treatment affect the treatment's observed effectiveness.**",
        '**Step 3 — Abstract to General Terms:**\n• "Pain reliever" → "a medical treatment"\n• "Patients were told" → "expectations were set"\n• "Higher pain relief" → "greater effectiveness"\n• "Sugar pill / placebo" → "an inert substance"\n• Pre-phrase: "The perceived effectiveness of a treatment is influenced by the patient\'s expectations about that treatment, independent of the treatment\'s actual properties."',
        '**Step 4 — Match the Answer:**\nScan for the choice that captures the expectations → effectiveness dynamic. The correct answer should talk about treatment effectiveness being influenced by patient expectations, and it should do so with moderate language such as "can" rather than an absolute claim.',
      ],
    },

    { type: 'h3', text: 'Why the Generalization Works' },
    {
      type: 'callout',
      variant: 'default',
      title: 'Final Check',
      text: 'The winning principle must capture the whole story, not just the placebo result or a downstream methodological lesson. This case study shows that expectations can change perceived effectiveness for medical treatments in general. Prescriptive answers, absolute language, and trial-design recommendations all move one layer away from the actual relationship the stimulus demonstrates.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Wrong-Answer Patterns' },
    {
      type: 'paragraph',
      text: 'Principle-Generalization wrong answers fall into predictable categories. Recognizing these patterns helps you eliminate traps quickly during timed practice.',
    },

    {
      type: 'breakdown',
      labels: { title: 'Trap Type', text: 'How It Works' },
      items: [
        {
          title: 'The Normative Leap (Is → Ought)',
          text: 'The stimulus is *descriptive* (explaining what happened), but the answer is *prescriptive* (arguing what should happen). A factual story cannot support a moral recommendation. Watch for words like "should," "ought to," "must" in the answer when the stimulus contains none.',
          badge: 'Common',
          badgeColor: 'blue',
        },
        {
          title: 'The Partial Match',
          text: 'Captures one element of the story correctly (e.g., the cause) but ignores the critical interaction (e.g., the effect), failing to cover the whole dynamic. These answers feel right because they touch on something real from the stimulus — but they miss the complete picture.',
          badge: 'Common',
          badgeColor: 'blue',
        },
        {
          title: 'The Explanation Answer',
          text: 'Retells why this particular case happened without abstracting to a reusable principle. These answers often feel smart because they sound close to the stimulus, but they stay at the case-study level rather than rising to a general rule.',
          badge: 'Common',
          badgeColor: 'blue',
        },
        {
          title: 'The Reverse Logic',
          text: 'Reverses the direction of causation or conditionality found in the story. The stimulus says "A leads to B," but the answer says "B leads to A" or "B indicates A." Always check: does the principle\'s causal arrow point in the same direction as the stimulus\'s?',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
        {
          title: 'The Too-Strong Claim',
          text: 'Uses absolute language ("always," "never," "necessarily," "all") when the stimulus provides only one example. A single case study supports "can" and "sometimes," not "always" and "every."',
          badge: 'Common',
          badgeColor: 'blue',
        },
        {
          title: 'The Out-of-Scope Concept',
          text: 'Introduces a concept not mentioned or implied in the stimulus — confidence, effort, self-assessment, morality — and builds the principle around that imported concept. The principle may be true in the real world, but the stimulus provides no evidence for it.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
        {
          title: 'The Prediction Mismatch',
          text: 'If you actually applied this principle to the facts of the stimulus, it would predict a *different* outcome than what actually occurred. This is the ultimate dealbreaker: the stimulus must be a *positive* example of the principle, not a counterexample.',
          badge: 'Rare but Decisive',
          badgeColor: 'indigo',
        },
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Timing Strategy' },
    { type: 'paragraph', text: 'Here is how to allocate your ~90 seconds on a Principle-Generalization question:' },
    {
      type: 'table',
      headers: ['Phase', 'Time', 'Action'],
      rows: [
        ['Read stimulus', '~25 sec', 'Read carefully. Identify players, key variable, outcome.'],
        [
          'Identify dynamic + pre-phrase',
          '~15 sec',
          'State the "moral of the story" in abstract terms. This is non-negotiable.',
        ],
        [
          'Scan answers',
          '~35 sec',
          'Check each answer against your pre-phrase. Apply the Textbook Test and Strength Test.',
        ],
        ['Verify', '~10 sec', 'Confirm your choice captures the whole story. Eliminate any remaining competitors.'],
        ['**Total**', '**~85 sec**', '**Leave 5 seconds as buffer for hard questions.**'],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'The Pre-Phrase Saves Time',
      text: 'Students who skip the pre-phrase and go straight to the answer choices typically spend 15–20 seconds *per choice* evaluating from scratch. That is 75–100 seconds on choices alone, leaving almost no time for understanding the stimulus. Students who invest 15 seconds in a strong pre-phrase typically spend only 5–8 seconds per choice, finishing the entire question in under 90 seconds with higher accuracy.',
    },
  ],
  alternates: {
    annotated: {
      label: 'Annotated',
      content: [
        { type: 'h3', text: 'Principle-Apply — Annotated Example' },
        {
          type: 'paragraph',
          text: 'Sentence-by-sentence breakdown of a representative Principle-Apply stimulus, showing how to decompose the principle and match it to the scenario.',
        },
        { type: 'h4', text: 'Annotated Stimulus' },
        {
          type: 'breakdown',
          labels: { title: 'Sentence', text: 'Annotation' },
          items: [
            {
              title: '"A pharmaceutical company developed a new pain reliever and tested it against a placebo in two trials."',
              text: 'Setup: introduces the players (company, drug, placebo) and the experimental context (two trials). No principle content yet.',
              badge: 'Setup',
              badgeColor: 'slate',
            },
            {
              title: '"In the first trial, patients were told they might receive either the drug or a sugar pill."',
              text: 'Trial 1 condition: uncertain expectations. Patients did not know what they were receiving.',
              badge: 'Condition A',
              badgeColor: 'blue',
            },
            {
              title: '"In the second trial, patients were told they would definitely receive a powerful new pain medication, though half actually received the placebo."',
              text: 'Trial 2 condition: strong positive expectations set for all patients, regardless of actual treatment. This is the key variable -- only the framing changed.',
              badge: 'Condition B',
              badgeColor: 'blue',
            },
            {
              title: '"In the second trial, both groups reported dramatically higher pain relief."',
              text: 'Outcome: expectations (not substance) drove the result. Even placebo patients reported higher relief when told they were getting a powerful drug.',
              badge: 'Outcome',
              badgeColor: 'green',
            },
          ],
        },
        { type: 'h4', text: 'Process Application' },
        {
          type: 'process',
          steps: [
            '**Understand the Principle:** Expectations about a treatment can influence its perceived effectiveness, independent of actual properties.',
            '**Identify the Trigger:** The trigger is the change in what patients were told -- uncertain vs. confident framing.',
            '**Check Conditions:** Same substances in both trials (drug and placebo). Only the framing differed. Outcome changed dramatically.',
            '**Match Application:** The correct generalization captures the expectations-to-effectiveness dynamic with moderate language ("can influence"), not an absolute claim.',
          ],
        },
        { type: 'h4', text: 'Wrong-Answer Traps' },
        {
          type: 'table',
          headers: ['Trap Type', 'How It Appears Here', 'Why It Fails', 'Detection Cue', 'Quick Test'],
          rows: [
            ['Normative Leap', '"Doctors should always tell patients they are receiving effective treatment"', 'The stimulus describes what happened, not what should happen', '"Should" in answer when stimulus has none', 'Is -> Ought check'],
            ['Partial Match', '"Placebos can relieve pain"', 'Only captures the placebo result, misses the expectations mechanism', 'Missing the key variable', 'Whole-story test'],
            ['Too Strong', '"Expectations always determine treatment outcomes"', '"Always" is not supported by one two-trial study', 'Absolute quantifier', 'Strength test'],
            ['Out of Scope', '"Drug companies should disclose trial methodologies"', 'Introduces regulatory ethics not present in the stimulus', 'New concept imported', 'Scope check'],
            ['Reverse Logic', '"Effective treatments create positive expectations"', 'Reverses the direction: expectations drove effectiveness, not the other way around', 'Causal arrow flipped', 'Direction check'],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          text: '**The One Thing:** Read the principle as a rule: IF [trigger], THEN [result]. Find the answer choice where the trigger fires and the result follows.',
        },
      ],
    },
  },
};
