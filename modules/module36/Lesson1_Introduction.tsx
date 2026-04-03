import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "36-1",
  title: "Introduction",
  content: [
    { type: 'h3', text: "Germaine's Guide to RC Paragraph Function Questions" },
    { type: 'h4', text: "What's this question asking?" },
    { type: 'paragraph', text: "Paragraph Function questions ask you to identify the specific role a paragraph plays within the passage's overall structure. Your goal is to determine how that paragraph advances the author's argument and how it relates to the sections that come before and after it." },
    { type: 'paragraph', text: "This involves identifying the paragraph's strategic purpose. A good answer choice will accurately describe how the paragraph functions, which often includes:" },
    { type: 'list', items: [
      "**Introducing a problem or phenomenon:** Setting the stage for the rest of the discussion.",
      "**Providing evidence or examples:** Offering specific details to support a previously stated claim.",
      "**Presenting an alternative view:** Introducing a theory or opinion that differs from the one already discussed.",
      "**Evaluating a proposal:** Discussing the merits or flaws of a specific solution or response to a problem.",
      "**Summarizing a debate:** Reviewing the different sides of an issue before the author offers a final judgment."
    ]},
    { type: 'callout', title: "Style-Specific Paragraph Jobs", variant: "summary", text: "Paragraph Function gets easier when you recognize the larger passage style. In a **debate** passage, a paragraph may state one side's reasons or the author's rebuttal. In a **single-position** passage, the paragraph may just deepen the same thesis. In a **phenomenon-hypothesis** passage, the paragraph may introduce the puzzle, a candidate explanation, or criticism of that explanation. In a **problem-analysis** passage, the paragraph may diagnose the problem, test a proposed solution, or explain why no solution is endorsed." },
    { type: 'hr' },
    { type: 'h3', text: "Stem Identification: How to Spot a Paragraph Function Question" },
    { type: 'paragraph', text: "Paragraph Function questions ask you to identify the specific role a paragraph plays within the passage's overall structure. The chart below breaks down the common phrasing patterns used to ask about a paragraph's rhetorical contribution." },
    { 
      type: 'breakdown', 
      labels: { title: 'Category', text: 'Examples & Keywords' }, 
      items: [
        { 
          title: "Direct Inquiry About Role", 
          text: "**Keywords:** function, purpose, serves primarily to, does, intended to, main purpose\n\n• \"Which one of the following most accurately states the **function of the third paragraph**?\" <br>• \"The primary **purpose of the last paragraph** of the passage is to...\" <br>• \"The second paragraph **serves primarily to**...\" <br>• \"Which one of the following best describes what the **last paragraph does** in the passage?\"", 
          badge: "Role", 
          badgeColor: "indigo" 
        }
      ] 
    },
    { type: 'callout', title: "Overarching Takeaway", variant: "summary", text: "Your goal is to determine how a specific paragraph advances the author's argument. Look beyond what the paragraph says and focus on why the author included it. The correct answer will use abstract, functional language to describe its role (e.g., \"to provide evidence for the main claim,\" \"to introduce a counterargument,\" \"to summarize the preceding discussion\")." },
    { type: 'h3', text: "The Importance of Paragraph Function Questions" },
    { type: 'paragraph', text: "Paragraph Function questions appear 66 times in the dataset, making them a regular feature of the RC section. This question type forces you to analyze how a passage is constructed piece by piece. Mastering this skill is the key to understanding passage organization, which will directly improve your ability to answer overall Structure questions and to navigate the text efficiently to find evidence for Inference questions." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h3",
          "text": "Germaine's Guide to RC Paragraph Function Questions"
        },
        {
          "type": "h4",
          "text": "What's this question asking?"
        },
        {
          "type": "paragraph",
          "text": "Paragraph Function questions ask you to identify the specific role a paragraph plays within the passage's overall structure. Your goal is to determine how that paragraph advances the author's argument and how it relates to the sections that come before and after it."
        },
        {
          "type": "paragraph",
          "text": "This involves identifying the paragraph's strategic purpose. A good answer choice will accurately describe how the paragraph functions, which often includes:"
        },
        {
          "type": "list",
          "items": [
            "**Introducing a problem or phenomenon:** Setting the stage for the rest of the discussion.",
            "**Providing evidence or examples:** Offering specific details to support a previously stated claim.",
            "**Presenting an alternative view:** Introducing a theory or opinion that differs from the one already discussed.",
            "**Evaluating a proposal:** Discussing the merits or flaws of a specific solution or response to a problem.",
            "**Summarizing a debate:** Reviewing the different sides of an issue before the author offers a final judgment."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Stem Identification: How to Spot a Paragraph Function Question"
        },
        {
          "type": "paragraph",
          "text": "Paragraph Function questions ask you to identify the specific role a paragraph plays within the passage's overall structure. The chart below breaks down the common phrasing patterns used to ask about a paragraph's rhetorical contribution."
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Category",
            "text": "Examples & Keywords"
          },
          "items": [
            {
              "title": "Direct Inquiry About Role",
              "text": "**Keywords:** function, purpose, serves primarily to, does, intended to, main purpose\n\n• \"Which one of the following most accurately states the **function of the third paragraph**?\" <br>• \"The primary **purpose of the last paragraph** of the passage is to...\" <br>• \"The second paragraph **serves primarily to**...\" <br>• \"Which one of the following best describes what the **last paragraph does** in the passage?\"",
              "badge": "Role",
              "badgeColor": "indigo"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Overarching Takeaway",
          "variant": "summary",
          "text": "Your goal is to determine how a specific paragraph advances the author's argument. Look beyond what the paragraph says and focus on why the author included it. The correct answer will use abstract, functional language to describe its role (e.g., \"to provide evidence for the main claim,\" \"to introduce a counterargument,\" \"to summarize the preceding discussion\")."
        },
        {
          "type": "h3",
          "text": "The Importance of Paragraph Function Questions"
        },
        {
          "type": "paragraph",
          "text": "Paragraph Function questions appear 66 times in the dataset, making them a regular feature of the RC section. This question type forces you to analyze how a passage is constructed piece by piece. Mastering this skill is the key to understanding passage organization, which will directly improve your ability to answer overall Structure questions and to navigate the text efficiently to find evidence for Inference questions."
        }
      ],
    },
    glance: {
      label: 'At a Glance',
      content: [
        { type: 'h2', text: 'Paragraph Function Questions — At a Glance' },
        { type: 'paragraph', text: 'These questions ask what role an entire paragraph plays in the passage\'s structure. With **66 appearances** in the released pool, Paragraph Function questions test whether you can see how each section advances the author\'s overall argument.' },
        {
          type: 'table',
          headers: ['Element', 'What to Look For', 'Core Skill', 'Common Trap'],
          rows: [
            ['Target paragraph', 'The specific paragraph the stem names (e.g., "the third paragraph")', 'Summarizing the paragraph\'s content in one sentence', 'Describing what the paragraph says instead of why it is there'],
            ['Neighboring paragraphs', 'The paragraphs immediately before and after the target', 'Analyzing how the target bridges Point A to Point C', 'Treating the paragraph in isolation without checking transitions'],
            ['Passage style', 'Debate, single-position, phenomenon-hypothesis, or problem-analysis', 'Matching the paragraph\'s job to the expected roles for that style', 'Using a generic functional label that ignores the passage\'s specific structure'],
            ['Functional language', '"To provide evidence," "to present a counterargument," "to summarize"', 'Selecting the abstract description that fits both local content and overall flow', 'Choosing an answer that is only accurate about one detail, not the paragraph as a whole']
          ]
        },
        { type: 'paragraph', text: 'Quick example: In a debate passage, if paragraph 2 presents the opposing camp\'s reasons after paragraph 1 introduced the author\'s thesis, the function of paragraph 2 is to present a counterargument — not merely to "discuss a topic" or "provide background."' },
        {
          type: 'list',
          items: [
            'Read the target paragraph and summarize its content in one sentence.',
            'Check the paragraphs before and after to see what the target connects.',
            'Identify the passage style (debate, single-position, phenomenon-hypothesis, problem-analysis).',
            'Match the paragraph\'s job to the expected roles for that style.',
            'Eliminate answers that only report content without naming the structural function.'
          ]
        },
        { type: 'callout', variant: 'tip', title: 'Key Principle', text: 'A paragraph\'s function is defined by the job it does between its neighbors, not by the facts it contains. Think of it as a step in a logical blueprint.' }
      ]
    }
  }
};
