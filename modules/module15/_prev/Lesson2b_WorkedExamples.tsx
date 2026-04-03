import { Lesson } from '../../types';

export const Lesson2b_WorkedExamples: Lesson = {
  id: '15-2b',
  title: 'Worked Examples',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Full Worked Example' },
    { type: 'paragraph', text: "Let's apply all four steps to a complete question." },
    { type: 'paragraph', text: 'Consider this illustrative argument:' },
    {
      type: 'blockquote',
      text: '"Psychologist: Studies show that children who are praised for their effort rather than their innate ability tend to embrace challenging tasks and persist longer when they encounter difficulty. In contrast, children praised for being \\"smart\\" tend to avoid challenges and give up quickly when they struggle. Since schools want students who are resilient and willing to tackle difficult material, teachers should _______."',
    },
    {
      type: 'paragraph',
      text: 'This is a useful Fill in the Blank example because the premises already contain both the problem and the recommended fix. Your job is to synthesize, not to invent.',
    },

    { type: 'h3', text: 'Applying the 4-Step Method' },

    {
      type: 'process',
      title: 'Step-by-Step Walkthrough',
      steps: [
        '**Step 1 — Read the Premises:** (1) Children praised for effort embrace challenges and persist. (2) Children praised for being smart avoid challenges and quit. (3) Schools want resilient students willing to tackle hard material.',
        '**Step 2 — Identify the Gap:** The blank follows "teachers should," which is a normative conclusion. The reasoning pattern is Problem-Solution: the problem is that "smart" praise undermines resilience, and the premises point to effort praise as the solution. The word "Since" before the school\'s goal confirms the blank is the conclusion.',
        '**Step 3 — Prephrase the Conclusion:** The premises directly support: "teachers should praise students for effort rather than for being smart." This is the only recommendation the evidence warrants.',
        "**Step 4 — Match the Answer:** The correct completion should recommend praising effort rather than innate ability. That conclusion uses the same contrast the premises establish and stays tightly within the scope of the school's stated goal.",
      ],
    },

    { type: 'h3', text: 'Why the Synthesis Is Straightforward' },
    {
      type: 'callout',
      variant: 'default',
      title: 'Final Check',
      text: 'The premises never argue against praise in general, and they say nothing about parents, testing, or easier assignments. They draw one focused contrast: effort praise builds the resilience schools want, while intelligence praise undermines it. On Fill in the Blank questions, that kind of contrast usually turns directly into the missing conclusion.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Common Mistakes and How to Avoid Them' },
    {
      type: 'paragraph',
      text: 'Even with a strong method, certain habits can undermine your accuracy on Fill in the Blank questions. Watch for these pitfalls:',
    },

    {
      type: 'breakdown',
      labels: { title: 'Mistake', text: 'Fix' },
      items: [
        {
          title: 'Reading the answers before prephrasing',
          text: 'This is the single most common mistake. Attractive wrong answers will contaminate your thinking. Force yourself to predict before you look. Cover the answers with your hand if necessary.',
          badge: 'Process',
          badgeColor: 'indigo',
        },
        {
          title: 'Choosing an answer that sounds true in the real world',
          text: 'The correct answer must be supported by the specific premises in the stimulus, not by your outside knowledge. A statement can be objectively true and still be a wrong answer if the premises do not support it.',
          badge: 'Scope',
          badgeColor: 'blue',
        },
        {
          title: 'Ignoring hedging language',
          text: 'If the premises say "some studies suggest" or "in many cases," the conclusion cannot say "all" or "always." Match the strength of your conclusion to the strength of the evidence.',
          badge: 'Strength',
          badgeColor: 'blue',
        },
        {
          title: 'Failing to re-read with the answer inserted',
          text: 'After selecting an answer, mentally insert it into the blank and read the full argument. If it reads awkwardly or introduces a logical jump, reconsider. The correct answer should flow seamlessly.',
          badge: 'Verification',
          badgeColor: 'slate',
        },
      ],
    },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: 'Fill in the Blank rewards the same skills you use on Main Conclusion, Must Be True, and Sufficient Assumption questions. If you are strong on those types, treat Fill in the Blank as a confidence booster.\n\nThe worked example above shows the ideal flow: read carefully, classify the blank, prephrase with precision, and match confidently. When a stimulus gives you both the problem and the fix, synthesizing the conclusion is mechanical — the premises do the heavy lifting.',
    },
  ],
  alternates: {
    annotated: {
      label: 'Annotated',
      content: [
        { type: 'h3', text: 'Principle-Generalization — Annotated Example' },
        {
          type: 'paragraph',
          text: 'Sentence-by-sentence breakdown of a representative Principle-Generalization stimulus, showing how to identify the dynamic and abstract to a general rule.',
        },
        { type: 'h4', text: 'Annotated Stimulus' },
        {
          type: 'breakdown',
          labels: { title: 'Sentence', text: 'Annotation' },
          items: [
            {
              title: '"Psychologist: Studies show that children who are praised for their effort rather than their innate ability tend to embrace challenging tasks and persist longer when they encounter difficulty."',
              text: 'Setup: establishes the first condition of the contrast. Effort-praised children show resilience. This is the positive side of the dynamic.',
              badge: 'Setup / Finding',
              badgeColor: 'blue',
            },
            {
              title: '"In contrast, children praised for being \\"smart\\" tend to avoid challenges and give up quickly when they struggle."',
              text: 'Contrast: intelligence-praised children show the opposite pattern. The key variable is the type of praise, not the children themselves. This completes the central dynamic.',
              badge: 'Contrasting Finding',
              badgeColor: 'blue',
            },
            {
              title: '"Since schools want students who are resilient and willing to tackle difficult material, teachers should _______."',
              text: 'Implication: the blank is a normative conclusion. The stimulus has established that effort praise produces the resilience schools want. The completion follows directly.',
              badge: 'Implication / Conclusion',
              badgeColor: 'green',
            },
          ],
        },
        { type: 'h4', text: 'Process Application' },
        {
          type: 'process',
          steps: [
            '**Understand the Case:** Two groups of children, one variable (type of praise), opposite outcomes (resilience vs. avoidance).',
            '**Identify the Dynamic:** How praise is framed determines whether children develop resilience or avoidance. The substance (praise) is the same; the framing (effort vs. ability) drives the outcome.',
            '**Abstract to Principle:** "How feedback is framed can affect the behavioral tendencies it produces, independent of the feedback\'s intent."',
            '**Match the General Rule:** The correct answer should recommend effort-focused praise as the completion that follows from the evidence.',
          ],
        },
        { type: 'h4', text: 'Wrong-Answer Traps' },
        {
          type: 'table',
          headers: ['Trap Type', 'How It Appears Here', 'Why It Fails', 'Detection Cue', 'Quick Test'],
          rows: [
            ['Too Specific (Summary)', '"Children praised for effort do better than children praised for intelligence"', 'Restates the finding rather than abstracting to a principle', 'Uses specific nouns from the stimulus', 'Replacement Test: does this only work for children?'],
            ['Too Broad (Platitude)', '"How people are treated affects their behavior"', 'So vague it could apply to anything -- loses the framing mechanism', 'Could describe thousands of unrelated scenarios', 'Textbook Test: is this stimulus a textbook example?'],
            ['Normative Leap', '"All schools should eliminate ability-based praise programs"', 'The stimulus describes a pattern, not a universal policy mandate', '"All schools should" is prescriptive', 'Is-Ought check'],
            ['Partial Match', '"Effort praise builds resilience"', 'Captures only the positive side; misses the contrast with ability praise', 'Missing half the dynamic', 'Whole-Story Test'],
            ['Reverse Logic', '"Resilient children tend to seek out effort-focused praise"', 'Reverses the causal direction: praise shapes resilience, not the other way', 'Causal arrow flipped', 'Direction check'],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          text: '**The One Thing:** State the "moral of the story" in abstract terms before reading the answers. The right answer generalizes -- it does not retell the story.',
        },
      ],
    },
  },
};
