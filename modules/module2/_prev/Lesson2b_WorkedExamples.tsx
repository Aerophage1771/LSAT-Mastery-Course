import { Lesson } from '../../types';

export const Lesson2b_WorkedExamples: Lesson = {
  id: '2-2b',
  title: 'Worked Examples',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Worked Examples: Main Conclusion' },
    {
      type: 'paragraph',
      text: 'This lesson walks through a full worked example applying the 6-Step Method from start to finish, reinforcing how each step connects in practice.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Full Worked Example' },
    { type: 'paragraph', text: "Let's apply all six steps to a single Main Conclusion question from start to finish." },

    {
      type: 'paragraph',
      text: 'Use the method on a representative argument like this: an educator challenges the popular belief that smaller class sizes automatically improve outcomes, cites studies showing negligible score differences once teacher quality is controlled, and ends by recommending investment in teacher training instead of smaller classes. That structure gives you opposing view, premises, sub-conclusion, and final recommendation all in one stimulus.',
    },

    { type: 'h3', text: 'Applying the 6-Step Method' },

    {
      type: 'process',
      title: 'Step-by-Step Walkthrough',
      steps: [
        '**Step 1 \u2014 Confirm the Task:** The stem asks for the "main conclusion." Confirmed: this is a Main Conclusion question.',
        '**Step 2 \u2014 Read for Structure:** Tag each sentence:\n\u2022 "It is commonly believed that smaller class sizes..." \u2192 Opposing View (attributed to common belief).\n\u2022 "But the evidence for this claim is far weaker..." \u2192 Author\'s pushback (pivot with "But").\n\u2022 "Studies comparing classes of 15 to classes of 25..." \u2192 Premise (study data).\n\u2022 "The real driver of student achievement is... the skill of the teacher." \u2192 Strong claim \u2014 Sub-Conclusion candidate.\n\u2022 "School districts would therefore be better served by investing in teacher training..." \u2192 Recommendation introduced by "therefore" \u2014 Conclusion candidate.',
        '**Step 3 \u2014 Spot Indicator Words:** "But" signals the pivot from opposing view to the author\'s position. "Therefore" introduces the final recommendation. "Since" / "Because" are absent, but the study data clearly serves as evidence.',
        '**Step 4 \u2014 Apply the Why Test:** Candidate: "School districts should invest in teacher training." Why? Because teacher quality is the real driver of achievement, and reducing class sizes shows negligible benefit. \u2713 The argument answers. Does this candidate support anything else? No \u2014 it is the final destination.',
        '**Step 5 \u2014 Prephrase:** "Districts should spend money on teacher training, not on smaller classes."',
        '**Step 6 \u2014 Evaluate:** Separate the opposing view, the research evidence, and the teacher-quality sub-conclusion from the final recommendation. Then compare the remaining answer choices by translation: does one explicitly name the spending choice, preserve the recommendation strength, and avoid turning the conclusion into a broader education principle? The main conclusion is the only statement that every other major claim is working to support.',
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Final Check',
      text: "In a stimulus like this one, the most tempting traps are the study data itself, the author's rebuttal of the popular belief, and the sub-conclusion about teacher quality. All of those matter, but they matter because they support the final policy recommendation. That recommendation is the real main conclusion.",
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: 'The 6-Step Method gives you a repeatable process: **Confirm \u2192 Read \u2192 Spot \u2192 Test \u2192 Prephrase \u2192 Evaluate.**\n\n\u2022 **Prephrasing** is the single most important habit. If you can state the conclusion before reading the answers, your accuracy will increase dramatically.\n\u2022 The **Why Test** (Step 4) is the most reliable tool. It catches sub-conclusions that indicator words cannot.\n\u2022 Wrong answers almost always fall into four traps: **Premise, Sub-Conclusion, Opposing View, or Distortion**. Knowing these categories lets you eliminate quickly.\n\u2022 When in doubt, ask: "Does my candidate support anything else in the argument?" If yes, it\'s not the main conclusion.',
    },
  ],
  alternates: {
    annotated: {
      label: 'Annotated',
      content: [
        { type: 'h3', text: 'Main Conclusion \u2014 Annotated Example' },
        {
          type: 'paragraph',
          text: 'Sentence-by-sentence breakdown of a representative Main Conclusion stimulus.',
        },
        { type: 'h4', text: 'Annotated Stimulus' },
        {
          type: 'breakdown',
          labels: { title: 'Sentence', text: 'Annotation' },
          items: [
            {
              title: '"It is commonly believed that smaller class sizes automatically improve student outcomes."',
              text: 'Opposing view. Attributed to common belief, not the author. The phrase "It is commonly believed" is a classic setup for a rebuttal.',
              badge: 'Opposing View',
              badgeColor: 'slate',
            },
            {
              title: '"But the evidence for this claim is far weaker than most people assume."',
              text: 'Pivot + author pushback. "But" signals the shift. This is the author beginning to reject the common belief. Could be the conclusion or a sub-conclusion.',
              badge: 'Pivot',
              badgeColor: 'blue',
            },
            {
              title: '"Studies comparing classes of 15 to classes of 25 found negligible differences in standardized test scores once teacher quality was controlled."',
              text: 'Premise. Study data offered as evidence. Answers the question "Why is the evidence weak?" \u2014 supporting the pushback above.',
              badge: 'Premise',
              badgeColor: 'slate',
            },
            {
              title: '"The real driver of student achievement is the skill of the teacher."',
              text: 'Sub-conclusion. Supported by the study data AND supports the final recommendation. It is a stepping-stone, not the destination.',
              badge: 'Sub-Conclusion',
              badgeColor: 'blue',
            },
            {
              title: '"School districts would therefore be better served by investing in teacher training rather than reducing class sizes."',
              text: '"Therefore" + "should"-style recommendation. Why Test: Why should districts invest in training? Because teacher quality matters more and smaller classes show negligible benefit. This supports nothing else \u2014 it is the **main conclusion**.',
              badge: 'Main Conclusion',
              badgeColor: 'indigo',
            },
          ],
        },
        { type: 'h4', text: 'Method Applied' },
        {
          type: 'process',
          steps: [
            '**Confirm:** The stem asks for the "main conclusion" \u2014 confirmed.',
            '**Spot the pivot:** "But" in sentence 2 marks the shift from opposing view to author\'s position.',
            '**Apply the Why Test:** "Why should districts invest in training?" \u2192 The argument answers with study data and the teacher-quality claim. Confirmed.',
            '**Sub-conclusion check:** "The real driver is teacher skill" receives support AND gives support \u2014 it is an intermediate conclusion, not the main one.',
          ],
        },
        { type: 'h4', text: 'Trap Table' },
        {
          type: 'table',
          headers: ['Trap', 'What It Looks Like', 'How to Catch It'],
          rows: [
            [
              '**Picks a premise**',
              'Restates the study data about negligible score differences',
              'Apply the Why Test \u2014 this statement answers "Why?" for another claim',
            ],
            [
              '**Picks intermediate conclusion**',
              '"Teacher quality is the real driver of achievement"',
              'Ask: does this support a further claim? Yes \u2014 the recommendation',
            ],
            [
              '**Picks background / opposing view**',
              '"Smaller class sizes improve outcomes"',
              'Check attribution \u2014 "It is commonly believed" marks someone else\'s view',
            ],
            [
              '**Too broad**',
              '"Education spending should prioritize quality over quantity"',
              'The argument is about teacher training vs. class size, not all spending',
            ],
            [
              '**Too narrow**',
              '"Studies found negligible test score differences"',
              'This is one piece of evidence, not the author\'s overall point',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          text: 'The main conclusion is the only statement that every other major claim is working to support. When in doubt, ask: "Does my candidate support anything else?" If yes, keep looking.',
        },
      ],
    },
  },
};
