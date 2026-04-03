import { Lesson } from '../../types';

export const Lesson3b_ReadingAndPatterns: Lesson = {
  id: '1-3b',
  title: 'Reading & Patterns',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Reading Mechanics & Argument Patterns' },
    {
      type: 'paragraph',
      text: 'Role recognition gets easier when you decode the sentence correctly on the first pass and can spot the argument pattern at a glance. This lesson covers both: the reading fixes that prevent misidentification, and the three structural templates that tell you what roles to expect.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Reading Mechanics' },
    {
      type: 'paragraph',
      text: 'Many Argument Part mistakes do not come from not knowing the role names. They come from misreading a dense sentence, losing the referent, or missing the baseline of a comparison.',
    },
    {
      type: 'table',
      headers: ['Reading issue', 'What it looks like', 'Best fix'],
      rows: [
        [
          '**Modifiers hiding the core claim**',
          'A sentence feels long and descriptive, but one short claim is doing the real logical work.',
          'Strip to the subject + verb + core assertion, then add the details back.',
        ],
        [
          '**Linked clauses**',
          'A single sentence actually contains two or three connected mini-claims.',
          'Split the sentence at commas, semicolons, pivots, or contrast words before mapping support.',
        ],
        [
          '**Referential language**',
          'Words like *this, such, they,* or *that policy* blur what the sentence is talking about.',
          'Replace the referential with the full noun or idea it points to.',
        ],
        [
          '**Comparative language**',
          'The claim sounds evaluative: *more effective, less risky, better supported*.',
          'Ask what is being compared, to what baseline, and on what dimension.',
        ],
        [
          '**Rhetorical questions**',
          'A question mark appears, but the author is plainly making a point.',
          'Convert the question into the assertion the author expects you to accept.',
        ],
        [
          '**Abstract wording**',
          'The sentence sounds elegant but hard to visualize.',
          'Translate it into a concrete everyday example or simpler paraphrase.',
        ],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Structure vs. Detail',
      text: 'A good default question is: **Which words change the logical role, and which words only add detail?** Relative clauses, examples, and descriptive modifiers often add texture without changing whether the sentence is a premise, conclusion, or background statement.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Quick Recognition Guide' },
    {
      type: 'paragraph',
      text: 'Use this table as a quick-reference cheat sheet. When you encounter a sentence in a stimulus, look for these indicator words to rapidly identify the most likely role.',
    },

    {
      type: 'table',
      headers: ['Indicator Words / Phrases', 'Most Likely Role'],
      rows: [
        ['*because, since, for, after all, given that, as evidenced by*', '**Premise**'],
        ['*therefore, thus, so, hence, consequently, it follows that*', '**Conclusion** (Main or Intermediate)'],
        ['*for instance, for example, such as, to illustrate, consider*', '**Premise** (example type)'],
        ['*Some argue, Critics claim, It is believed, Many hold that*', '**Opposing Viewpoint**'],
        ['*Although, While it is true, Granted, Admittedly, Despite*', '**Concession**'],
        [
          '*But, However, Yet, Nevertheless, On the contrary*',
          "**Pivot** (next sentence is usually the author's conclusion)",
        ],
        ['*It is well known, Historically, Generally, In recent years*', '**Context / Background**'],
        ['*Surprisingly, Paradoxically, It is puzzling that*', '**Phenomenon** (context sub-type)'],
        ['*should, ought to, must, is likely, will probably*', '**Conclusion** (recommendation/prediction)'],
        ['*This shows that, This demonstrates, This suggests*', '**Conclusion** (inference drawn from evidence)'],
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'The 3 Most Common Argument Structures' },
    {
      type: 'paragraph',
      text: 'Most LSAT arguments follow one of three structural patterns. Recognizing the pattern instantly tells you what roles to expect and where to find them.',
    },

    { type: 'h3', text: 'Pattern 1: Simple Argument' },
    {
      type: 'paragraph',
      text: 'One or more premises directly support a single main conclusion. No intermediate steps, no opposing views.',
    },
    {
      type: 'process',
      title: 'Structure',
      steps: [
        '**Premise(s):** One or more facts, observations, or reasons.',
        '**→ Main Conclusion:** The claim these facts support.',
      ],
    },
    {
      type: 'blockquote',
      text: '"The city\'s air quality index has improved by 30% since the ban on coal-fired power plants. The ban has been effective at reducing air pollution."',
    },
    {
      type: 'paragraph',
      text: 'Premise (air quality improved 30%) → Conclusion (ban was effective). This is the most basic and most common structure.',
    },

    { type: 'h3', text: 'Pattern 2: Chain Argument' },
    {
      type: 'paragraph',
      text: 'A premise supports an intermediate conclusion, which in turn supports the main conclusion. The intermediate conclusion acts as a bridge in a multi-step reasoning chain.',
    },
    {
      type: 'process',
      title: 'Structure',
      steps: [
        '**Premise:** A fact or finding.',
        '**→ Intermediate Conclusion:** A claim supported by the premise.',
        '**→ Main Conclusion:** The ultimate claim supported by the intermediate conclusion.',
      ],
    },
    {
      type: 'blockquote',
      text: '"Since the new filtration system removes 99% of contaminants, the facility\'s water output now meets federal safety standards. The board should therefore approve continued operation of the plant."',
    },
    {
      type: 'paragraph',
      text: 'Premise (removes 99%) → Intermediate Conclusion (meets standards) → Main Conclusion (approve operation).',
    },

    { type: 'h3', text: 'Pattern 3: Rebuttal' },
    {
      type: 'paragraph',
      text: 'The author presents someone else\'s position, then argues against it using their own evidence. The opposing viewpoint is the "target" and the author\'s conclusion is the rebuttal.',
    },
    {
      type: 'process',
      title: 'Structure',
      steps: [
        '**Opposing Viewpoint:** A claim attributed to others ("Some argue...").',
        '**Pivot:** A contrast word ("But", "However").',
        "**Premise(s):** Evidence supporting the author's position.",
        "**→ Main Conclusion:** The author's counter-claim.",
      ],
    },
    {
      type: 'blockquote',
      text: '"Some nutritionists recommend eliminating all dietary fats. However, research consistently shows that unsaturated fats are essential for brain function and hormone regulation. A balanced diet should include moderate amounts of healthy fats."',
    },
    {
      type: 'paragraph',
      text: 'Opposing View (eliminate all fats) → Pivot ("However") → Premise (unsaturated fats are essential) → Main Conclusion (diet should include healthy fats).',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Pattern Matching Saves Time',
      text: 'When you recognize a pattern, you immediately know what roles to expect. In a Rebuttal, the first sentence often belongs to the opposing side, but you still need to ask whether it is the opponent\'s conclusion or just support inside the opponent\'s reasoning. In a Chain Argument, look for the bridge sentence — that is the Intermediate Conclusion. Pattern recognition turns a 90-second analysis into a 30-second one.',
    },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaway',
      text: 'Decode sentences before labeling them, learn the indicator words, and recognize the three common argument structures. This combination makes you fast and accurate on the overwhelming majority of Argument Part questions.',
    },
  ],
  alternates: {
    field: {
      label: 'Field Guide',
      content: [
        { type: 'h3', text: 'Reading Mechanics' },
        {
          type: 'table',
          headers: ['Technique', 'How to Apply'],
          rows: [
            ['**Strip to the kernel**', 'Find the core subject + verb + claim, then add modifiers back one at a time'],
            ['**Split linked clauses**', 'Break long sentences at commas, semicolons, and contrast words before mapping support'],
            ['**Resolve referentials**', 'Replace *this, that, such, they* with the exact noun or idea they point to'],
            ['**Parse comparatives**', 'Ask: compared to what, on what dimension, and in which direction?'],
            ['**Convert rhetorical questions**', 'Rewrite the question as the assertion the author expects you to accept'],
          ],
        },
        { type: 'h3', text: 'Pattern Cards' },
        {
          type: 'breakdown',
          items: [
            {
              title: 'Simple Argument',
              badge: 'Most Common',
              badgeColor: 'green',
              text: '**Structure:** Premises \u2192 Conclusion\n**Signal:** Single layer of support \u2014 no intermediate steps\n**Key:** Every premise directly supports one conclusion',
            },
            {
              title: 'Chain Argument',
              badge: 'Common',
              badgeColor: 'blue',
              text: '**Structure:** Premise \u2192 Intermediate Conclusion \u2192 Main Conclusion\n**Signal:** A bridge sentence that is both supported and supporting\n**Key:** Look for the sentence doing double duty',
            },
            {
              title: 'Rebuttal',
              badge: 'Common',
              badgeColor: 'blue',
              text: '**Structure:** Opposing View + Pivot + Author\'s Premises \u2192 Author\'s Conclusion\n**Signal:** Attribution phrase ("Some argue...") followed by "But" or "However"\n**Key:** Track whose claim the target belongs to',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          text: 'Decode the sentence before labeling it, recognize the argument pattern at a glance, and the role almost names itself.',
        },
      ],
    },
  },
};
