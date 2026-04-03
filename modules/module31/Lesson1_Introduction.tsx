import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "31-1",
  title: "Introduction",
  content: [
    { type: 'h3', text: "Germaine's Guide to RC Complete the Passage Questions" },
    { type: 'h4', text: "What's this question asking?" },
    { type: 'paragraph', text: "Complete the Passage questions ask you to select the sentence that would most logically conclude the passage or a specific paragraph. Your goal is to identify the answer choice that best continues the author's line of reasoning, fits the established tone, and remains within the passage's scope." },
    { type: 'paragraph', text: "The correct answer will feel like the author's final, natural thought on the subject. A good concluding sentence will often:" },
    { type: 'list', items: [
      "Synthesize the main point of the final paragraph.",
      "Reinforce the overall argument of the entire passage.",
      "Provide a final, logical implication of the reasoning just presented.",
      "Avoid introducing new, unsupported topics or contradicting earlier points."
    ]},
    { type: 'callout', title: "High-Value Continuation Patterns", variant: "summary", text: "Hard Complete the Passage questions often come from **phenomenon-hypothesis** and **problem-analysis** passages. In those settings, the final sentence usually does one of three jobs: confirms which explanation the passage favors, clarifies whether a proposed solution is endorsed or criticized, or explains why the problem remains unresolved." },
    { type: 'hr' },
    { type: 'h3', text: "Stem Identification: How to Spot a Complete the Passage Question" },
    { type: 'paragraph', text: "These questions are easily recognizable because their stems explicitly ask you to add a sentence to the end of the text. They are almost always phrased as a variation of finding the \"most logical\" final thought." },
    { 
      type: 'breakdown', 
      labels: { title: 'Category', text: 'Examples & Keywords' }, 
      items: [
        { 
          title: "Logical Continuation Phrasing", 
          text: "**Keywords:** complete, conclude, continuation, appended to the end\n\n• \"Which one of the following sentences would most **logically complete the passage**?\"\n• \"Which one of the following sentences would most **logically conclude the final paragraph**...?\"\n• \"Which one of the following is the most logical **continuation of the last paragraph**...?\"\n• \"Which one of the following could most logically be **appended to the end of the final paragraph**?\"", 
          badge: "Continuation", 
          badgeColor: "indigo" 
        }
      ] 
    },
    { type: 'callout', title: "Overarching Takeaway", variant: "summary", text: "Your task is to identify the \"next logical thought.\" The correct answer will not introduce new topics but will instead summarize the paragraph's point, connect it back to the passage's main idea, or provide a final, logical implication of the argument just made. It must be perfectly consistent with everything that came before it." },
    { type: 'h3', text: "The Importance of Complete the Passage Questions" },
    { type: 'paragraph', text: "Complete the Passage questions are the rarest type, appearing only 5 times in the dataset. However, they are an excellent test of your ability to understand logical flow and the specific function of the final paragraph. Practicing these questions will sharpen your ability to see how an author's argument builds from one point to the next, a skill that is valuable for answering Structure and Paragraph Function questions." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h3",
          "text": "Germaine's Guide to RC Complete the Passage Questions"
        },
        {
          "type": "h4",
          "text": "What's this question asking?"
        },
        {
          "type": "paragraph",
          "text": "Complete the Passage questions ask you to select the sentence that would most logically conclude the passage or a specific paragraph. Your goal is to identify the answer choice that best continues the author's line of reasoning, fits the established tone, and remains within the passage's scope."
        },
        {
          "type": "paragraph",
          "text": "The correct answer will feel like the author's final, natural thought on the subject. A good concluding sentence will often:"
        },
        {
          "type": "list",
          "items": [
            "Synthesize the main point of the final paragraph.",
            "Reinforce the overall argument of the entire passage.",
            "Provide a final, logical implication of the reasoning just presented.",
            "Avoid introducing new, unsupported topics or contradicting earlier points."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Stem Identification: How to Spot a Complete the Passage Question"
        },
        {
          "type": "paragraph",
          "text": "These questions are easily recognizable because their stems explicitly ask you to add a sentence to the end of the text. They are almost always phrased as a variation of finding the \"most logical\" final thought."
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Category",
            "text": "Examples & Keywords"
          },
          "items": [
            {
              "title": "Logical Continuation Phrasing",
              "text": "**Keywords:** complete, conclude, continuation, appended to the end\n\n• \"Which one of the following sentences would most **logically complete the passage**?\"\n• \"Which one of the following sentences would most **logically conclude the final paragraph**...?\"\n• \"Which one of the following is the most logical **continuation of the last paragraph**...?\"\n• \"Which one of the following could most logically be **appended to the end of the final paragraph**?\"",
              "badge": "Continuation",
              "badgeColor": "indigo"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Overarching Takeaway",
          "variant": "summary",
          "text": "Your task is to identify the \"next logical thought.\" The correct answer will not introduce new topics but will instead summarize the paragraph's point, connect it back to the passage's main idea, or provide a final, logical implication of the argument just made. It must be perfectly consistent with everything that came before it."
        },
        {
          "type": "h3",
          "text": "The Importance of Complete the Passage Questions"
        },
        {
          "type": "paragraph",
          "text": "Complete the Passage questions are the rarest type, appearing only 5 times in the dataset. However, they are an excellent test of your ability to understand logical flow and the specific function of the final paragraph. Practicing these questions will sharpen your ability to see how an author's argument builds from one point to the next, a skill that is valuable for answering Structure and Paragraph Function questions."
        }
      ],
    },
    glance: {
      label: "At a Glance",
      content: [
        { type: 'h2', text: "RC Complete the Passage Questions — At a Glance" },
        { type: 'paragraph', text: "Complete the Passage questions ask you to select the sentence that would most logically conclude the passage or final paragraph. They appear only **5 times** in the released pool but test a core comprehension skill: understanding logical flow." },
        { type: 'table', headers: ["Element", "What to Look For", "Core Skill", "Common Trap"], rows: [
          ["Final paragraph function", "Is it providing evidence, proposing a solution, summarizing, or discussing implications?", "Identify the paragraph's job before predicting the ending", "Jumping to answers without understanding what the paragraph is trying to accomplish"],
          ["Logical continuation", "What thought would naturally come next given the paragraph's trajectory?", "Predict the next logical thought before reading choices", "Picking an answer that restates an earlier point instead of advancing the argument"],
          ["Scope boundaries", "Topics and claims already established in the passage", "Reject any choice that introduces a new, unsupported topic", "Selecting an interesting idea that falls outside the passage's established scope"],
          ["Tone consistency", "The author's established voice: critical, objective, optimistic, cautious", "Ensure the concluding sentence matches the author's tone", "Choosing a sentence whose emotional register clashes with the rest of the passage"],
        ]},
        { type: 'paragraph', text: "Quick example: A passage spends its final paragraph explaining why a proposed environmental policy has unintended costs. The best concluding sentence addresses those costs or their implications — not a new policy the passage never discussed." },
        { type: 'list', ordered: true, items: [
          "Re-read the final paragraph and name its specific function.",
          "Predict what the last sentence should accomplish before looking at choices.",
          "Test each choice for logical flow from the immediately preceding sentence.",
          "Eliminate anything that introduces a new topic or contradicts an earlier point.",
          "Confirm the winning choice is consistent with the passage's overall argument and tone.",
        ]},
        { type: 'callout', variant: 'tip', title: "Key Principle", text: "The correct answer is the author's natural final thought — it closes the paragraph's specific point while staying consistent with everything that came before." },
      ],
    },
  },
};
