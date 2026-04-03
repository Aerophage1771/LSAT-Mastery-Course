import { Lesson } from '../../types';

export const Lesson2b_WorkedExamples: Lesson = {
  id: '7-2b',
  title: 'Worked Examples',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Worked Examples: Evaluate the Argument' },
    {
      type: 'paragraph',
      text: 'This lesson covers the most common wrong-answer patterns for Evaluate questions and walks through a full worked example applying the 4-Step Method from start to finish.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Common Wrong Answer Patterns' },
    {
      type: 'paragraph',
      text: 'Incorrect Evaluate answers fall into predictable categories. Learning to recognize these patterns allows you to eliminate wrong answers quickly and confidently.',
    },

    {
      type: 'table',
      headers: ['Trap Type', 'Description', 'How to Spot It'],
      rows: [
        [
          '**Irrelevant to the Gap**',
          'The choice asks about something related to the topic but not to the logical connection between premises and conclusion.',
          'Apply the Yes/No Test: both answers leave the argument unchanged.',
        ],
        [
          '**Only Strengthens**',
          'The choice, if answered favorably, helps the argument, but the unfavorable answer has no effect. It is a disguised Strengthen answer.',
          'The "No" answer has no impact on the conclusion.',
        ],
        [
          '**Only Weakens**',
          'The choice, if answered unfavorably, hurts the argument, but the favorable answer has no effect. It is a disguised Weaken answer.',
          'The "Yes" answer has no impact on the conclusion.',
        ],
        [
          '**Too Broad**',
          'The choice asks about a general principle or a large-scale question that goes far beyond the scope of this specific argument.',
          'The question could apply to hundreds of different arguments \u2014 it does not target *this* specific gap.',
        ],
        [
          '**Questions the Premise**',
          'The choice asks whether the stated evidence is actually true. On the LSAT, premises are accepted as fact.',
          'The choice challenges the truth of a stated fact rather than the reasoning from fact to conclusion.',
        ],
        [
          '**Scope Shift**',
          'The choice asks about a different group, time period, or context than the one the conclusion addresses.',
          'The nouns or timeframes in the choice do not match those in the conclusion.',
        ],
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'The Most Dangerous Trap',
      text: 'The most dangerous trap is the **"Only Strengthens"** or **"Only Weakens"** choice. These answers feel relevant because they do address the gap \u2014 but they only address it from one direction. The Yes/No Test catches them every time: if only one direction has an impact, the choice is wrong.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Full Worked Example' },
    { type: 'paragraph', text: "Let's apply all four steps to a complete Evaluate question from start to finish." },
    { type: 'paragraph', text: 'Consider this illustrative argument:' },
    {
      type: 'blockquote',
      text: '"A regional hospital recently switched from paper medical records to an electronic records system. In the six months after the switch, the hospital reported a 30% decrease in medication errors. The hospital administrator concluded that the electronic records system is responsible for the reduction in medication errors."',
    },
    {
      type: 'paragraph',
      text: 'This is a strong teaching example because it looks like a clean before-and-after success story, but the reasoning still hinges on whether some other change explains the drop in errors.',
    },

    { type: 'h3', text: 'Applying the 4-Step Method' },

    { type: 'h4', text: 'Step 1: Find the Conclusion' },
    {
      type: 'paragraph',
      text: '**Conclusion:** The electronic records system is responsible for the reduction in medication errors.',
    },
    {
      type: 'paragraph',
      text: '**Premise:** After switching to electronic records, medication errors dropped by 30%.',
    },

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    {
      type: 'paragraph',
      text: 'The argument observes a correlation (new system \u2192 fewer errors) and concludes causation (the system *caused* fewer errors). The gap is the classic causal assumption: **the author has not ruled out alternative causes for the decline.** Something else could have changed during those six months that actually caused the reduction \u2014 new staff, different patient mix, updated protocols, or even a seasonal effect.',
    },
    {
      type: 'paragraph',
      text: 'This is also where the **ideal experiment** frame sharpens your thinking. The hospital argument has a before/after comparison, but it lacks random assignment, a true control group, and protection against other operational changes. That means the data still supports several competing hypotheses. The right Evaluate question should isolate the one missing comparison that best distinguishes the administrator\'s explanation from its rivals.',
    },

    { type: 'h4', text: 'Step 3: Prephrase the Pivotal Question' },
    {
      type: 'paragraph',
      text: 'Prephrase: *"Was there another change during that period that could have caused the reduction in errors?"* If yes, the electronic system may not deserve the credit. If no, the electronic system is the most plausible explanation.',
    },

    { type: 'h4', text: 'Step 4: Apply the Yes/No Test' },
    {
      type: 'paragraph',
      text: '**Testing the pivotal question:** Was there another operational change during that same six-month period that could also explain the reduction in medication errors?',
    },
    {
      type: 'breakdown',
      labels: { title: 'Response', text: 'Effect' },
      items: [
        {
          title: '"Yes" \u2014 additional pharmacists were hired',
          text: "The argument is **weakened**: the new pharmacists could be the real reason errors dropped, not the electronic system. The administrator's conclusion is undercut by an alternative explanation.",
          badge: 'Weakens',
          badgeColor: 'red',
        },
        {
          title: '"No" \u2014 no additional pharmacists were hired',
          text: 'The argument is **strengthened**: with no change in pharmacy staffing, the electronic records system is a more plausible explanation for the drop in errors.',
          badge: 'Strengthens',
          badgeColor: 'green',
        },
      ],
    },
    {
      type: 'paragraph',
      text: "That is the split you are hunting for. If the same question can either undercut the administrator's explanation or make it more plausible, it is doing real Evaluate work.",
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Why the Other Angles Are Weaker',
      text: 'Cost, what other hospitals are doing, and the seriousness of medication errors all miss the causal gap. Patient volume is closer, but it still does not directly test the best alternative explanation. The strongest Evaluate questions focus on the missing causal comparison, not on background facts around the event.',
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: '**The 4-Step Method: Find Conclusion \u2192 Identify Gap \u2192 Prephrase the Pivotal Question \u2192 Apply Yes/No Test.**\n\nPrephrasing the gap as a question before reading the answer choices is the single most powerful habit for Evaluate questions. It turns a difficult, open-ended question into a matching exercise.\n\nOn causal arguments, the winning prephrase is often a study-design question about baseline, comparison, assignment, sampling, or measurement. That keeps you in Evaluate mode instead of drifting into generic weakening.\n\nThe Yes/No Test confirms the correct answer and eliminates traps. If a choice does not produce a clear split (one direction strengthens, the other weakens), it is wrong.\n\nWrong answers fail in predictable ways: irrelevant to the gap, one-directional impact, too broad, questions the premise, or shifts scope. Learn these patterns and you will eliminate traps quickly and confidently.',
    },
  ],
  alternates: {
    annotated: {
      label: 'Annotated Walkthrough',
      content: [
        { type: 'h3', text: 'Annotated Stimulus' },
        {
          type: 'blockquote',
          text: '"A regional hospital recently switched from paper medical records to an electronic records system. In the six months after the switch, the hospital reported a 30% decrease in medication errors. The hospital administrator concluded that the electronic records system is responsible for the reduction in medication errors."',
        },
        { type: 'h4', text: 'Structural Annotation' },
        {
          type: 'breakdown',
          labels: { title: 'Sentence', text: 'Role' },
          items: [
            {
              title: '"A regional hospital recently switched from paper medical records to an electronic records system."',
              text: 'Sets the scene \u2014 describes the change that occurred.',
              badge: 'Background',
              badgeColor: 'slate',
            },
            {
              title: '"In the six months after the switch, the hospital reported a 30% decrease in medication errors."',
              text: 'The evidence supporting the conclusion \u2014 a before-and-after data point.',
              badge: 'Premise',
              badgeColor: 'blue',
            },
            {
              title: '"The hospital administrator concluded that the electronic records system is responsible for the reduction..."',
              text: 'The causal claim \u2014 attributes the improvement to the new system.',
              badge: 'Conclusion',
              badgeColor: 'green',
            },
          ],
        },
        { type: 'h3', text: 'Method Applied' },
        {
          type: 'process',
          steps: [
            '**Find the conclusion:** The electronic records system caused the drop in medication errors (green annotation above).',
            '**Identify the gap:** The before-and-after data does not rule out alternative causes \u2014 new staff, updated protocols, or seasonal effects could explain the 30% decrease.',
            '**Prephrase the pivotal question:** "Was there another operational change during the same period that could explain the reduction?"',
            '**Yes/No Test:** "Yes, additional pharmacists were hired" \u2192 weakens (alternative cause). "No other changes" \u2192 strengthens (electronic system is the best explanation).',
          ],
        },
        { type: 'h3', text: 'Trap Table' },
        {
          type: 'table',
          headers: ['Wrong Answer Type', 'Why It Fails'],
          rows: [
            ['**Irrelevant to the Gap**', 'Both yes/no answers leave the argument unchanged \u2014 the question is off-topic.'],
            ['**Only Strengthens**', 'One answer helps, but the other has no effect \u2014 disguised Strengthen answer.'],
            ['**Only Weakens**', 'One answer hurts, but the other has no effect \u2014 disguised Weaken answer.'],
            ['**Too Broad**', 'Could apply to any argument; does not target this specific causal gap.'],
            ['**Questions the Premise**', 'Challenges whether stated evidence is true \u2014 premises are accepted as fact on the LSAT.'],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          title: 'Why the Answer Works',
          text: 'The correct answer isolates the causal gap: it asks about a rival explanation that, if present, would undercut the administrator\'s conclusion, and if absent, would support it. That clean two-directional split is the hallmark of a correct Evaluate answer.',
        },
      ],
    },
  },
};
