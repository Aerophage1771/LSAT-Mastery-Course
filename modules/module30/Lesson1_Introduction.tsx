import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "30-1",
  title: "Introduction",
  content: [
    { type: 'h3', text: "Germaine's Guide to RC Author Viewpoint Questions" },
    { type: 'h4', text: "What's this question asking?" },
    { type: 'paragraph', text: "Author Viewpoint questions ask you to determine which statement the author would most likely agree with or support. Your goal is to synthesize the author's arguments, opinions, and tone to identify a statement that aligns with their perspective." },
    { type: 'paragraph', text: "The correct answer represents an extension of the author's stated positions or a logical implication of their claims. To identify the author's viewpoint, look for:" },
    { type: 'list', items: [
      "**The central argument:** Choose the answer that best reflects the primary claim the author is making.",
      "**Tone and degree:** Pay attention to how strongly the author supports or opposes an idea (e.g., total endorsement vs. cautious approval).",
      "**Logical implications:** Identify statements that must be true if the author's stated claims are true.",
      "**Evaluative language:** Note adjectives or phrases that reveal the author's judgment of specific people, theories, or events."
    ]},
    { type: 'h4', text: "Debate Passages: Separate the Voices Before You Infer" },
    { type: 'paragraph', text: "In critique and debate passages, Author Viewpoint questions are really testing whether you can separate **the author's stance** from the views being reported. Track not just each view, but also the **reasons for** and **reasons against** it. That is what lets you tell the author's own position from a merely described position." },
    { type: 'hr' },
    { type: 'h3', text: "Stem Identification: How to Spot an Author Viewpoint Question" },
    { type: 'paragraph', text: "Author Viewpoint questions ask you to identify a statement that the author would logically endorse, based on the arguments, evidence, and tone presented in the passage. The chart below breaks down the common phrasing patterns used to ask about the author's holistic perspective." },
    { 
      type: 'breakdown', 
      labels: { title: 'Category', text: 'Examples & Keywords' }, 
      items: [
        { 
          title: "Direct Agreement Phrasing", 
          text: "**Keywords:** agree with, believes, holds [a] view, in the author's view\n\n• \"With which one of the following statements would the **author...be most likely to agree**?\"\n• \"It can be inferred from the passage that the **author believes** which one of the following to be true...?\"\n• \"It can be inferred from the passage that the **author holds which one of the following views**...?\"", 
          badge: "Agreement", 
          badgeColor: "indigo" 
        },
        { 
          title: "Disagreement / Negative Phrasing", 
          text: "**Keywords:** disagree with, LEAST likely to believe/agree\n\n• \"The author would most likely **disagree with** which one of the following statements?\"\n• \"Given the information in the passage, the author is **LEAST likely to believe** which one of the following?\"\n• \"It can be inferred from the passage that the author would be **LEAST likely to agree with**...\"", 
          badge: "Disagreement", 
          badgeColor: "red" 
        },
        { 
          title: "Comparative Viewpoint Phrasing", 
          text: "**Keywords:** both authors, authors would disagree, author of passage A... passage B...\n\n• \"It can be inferred that the **authors of the two passages would be most likely to disagree over** whether...\"\n• \"With which one of the following statements would **both Keita and the author...be most likely to agree**?\"", 
          badge: "Comparison", 
          badgeColor: "blue" 
        },
        { 
          title: "Judgment and Valuation Phrasing", 
          text: "**Keywords:** values most highly, views...as, attitude toward\n\n• \"Which one of the following aspects...does the author appear to **value most highly**?\"\n• \"It can be inferred from the passage that the author **views** the test case strategy developed by Marshall **as**...\"", 
          badge: "Valuation", 
          badgeColor: "green" 
        }
      ] 
    },
    { type: 'callout', title: "Overarching Takeaway", variant: "summary", text: "Your goal is to choose the statement that best fits the author's overall perspective. This means synthesizing their main argument, tone, and specific claims to find the answer they would logically endorse. The correct choice is often a direct consequence or a summary of the author's point of view." },
    { type: 'h3', text: "The Importance of Author Viewpoint Questions" },
    { type: 'paragraph', text: "Author Viewpoint questions are one of the most common types you will encounter, appearing 252 times in the dataset and making up about 12% of all RC questions. Your ability to correctly identify the author's perspective is a direct measure of your overall passage comprehension. Mastering this skill will not only secure points on these frequent questions but will also help you infer the Main Conclusion and understand the author's purpose for writing." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h3",
          "text": "Germaine's Guide to RC Author Viewpoint Questions"
        },
        {
          "type": "h4",
          "text": "What's this question asking?"
        },
        {
          "type": "paragraph",
          "text": "Author Viewpoint questions ask you to determine which statement the author would most likely agree with or support. Your goal is to synthesize the author's arguments, opinions, and tone to identify a statement that aligns with their perspective."
        },
        {
          "type": "paragraph",
          "text": "The correct answer represents an extension of the author's stated positions or a logical implication of their claims. To identify the author's viewpoint, look for:"
        },
        {
          "type": "list",
          "items": [
            "**The central argument:** Choose the answer that best reflects the primary claim the author is making.",
            "**Tone and degree:** Pay attention to how strongly the author supports or opposes an idea (e.g., total endorsement vs. cautious approval).",
            "**Logical implications:** Identify statements that must be true if the author's stated claims are true.",
            "**Evaluative language:** Note adjectives or phrases that reveal the author's judgment of specific people, theories, or events."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Stem Identification: How to Spot an Author Viewpoint Question"
        },
        {
          "type": "paragraph",
          "text": "Author Viewpoint questions ask you to identify a statement that the author would logically endorse, based on the arguments, evidence, and tone presented in the passage. The chart below breaks down the common phrasing patterns used to ask about the author's holistic perspective."
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Category",
            "text": "Examples & Keywords"
          },
          "items": [
            {
              "title": "Direct Agreement Phrasing",
              "text": "**Keywords:** agree with, believes, holds [a] view, in the author's view\n\n• \"With which one of the following statements would the **author...be most likely to agree**?\"\n• \"It can be inferred from the passage that the **author believes** which one of the following to be true...?\"\n• \"It can be inferred from the passage that the **author holds which one of the following views**...?\"",
              "badge": "Agreement",
              "badgeColor": "indigo"
            },
            {
              "title": "Disagreement / Negative Phrasing",
              "text": "**Keywords:** disagree with, LEAST likely to believe/agree\n\n• \"The author would most likely **disagree with** which one of the following statements?\"\n• \"Given the information in the passage, the author is **LEAST likely to believe** which one of the following?\"\n• \"It can be inferred from the passage that the author would be **LEAST likely to agree with**...\"",
              "badge": "Disagreement",
              "badgeColor": "red"
            },
            {
              "title": "Comparative Viewpoint Phrasing",
              "text": "**Keywords:** both authors, authors would disagree, author of passage A... passage B...\n\n• \"It can be inferred that the **authors of the two passages would be most likely to disagree over** whether...\"\n• \"With which one of the following statements would **both Keita and the author...be most likely to agree**?\"",
              "badge": "Comparison",
              "badgeColor": "blue"
            },
            {
              "title": "Judgment and Valuation Phrasing",
              "text": "**Keywords:** values most highly, views...as, attitude toward\n\n• \"Which one of the following aspects...does the author appear to **value most highly**?\"\n• \"It can be inferred from the passage that the author **views** the test case strategy developed by Marshall **as**...\"",
              "badge": "Valuation",
              "badgeColor": "green"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Overarching Takeaway",
          "variant": "summary",
          "text": "Your goal is to choose the statement that best fits the author's overall perspective. This means synthesizing their main argument, tone, and specific claims to find the answer they would logically endorse. The correct choice is often a direct consequence or a summary of the author's point of view."
        },
        {
          "type": "h3",
          "text": "The Importance of Author Viewpoint Questions"
        },
        {
          "type": "paragraph",
          "text": "Author Viewpoint questions are one of the most common types you will encounter, appearing 252 times in the dataset and making up about 12% of all RC questions. Your ability to correctly identify the author's perspective is a direct measure of your overall passage comprehension. Mastering this skill will not only secure points on these frequent questions but will also help you infer the Main Conclusion and understand the author's purpose for writing."
        }
      ],
    },
    glance: {
      label: "At a Glance",
      content: [
        { type: 'h2', text: "RC Author Viewpoint Questions — At a Glance" },
        { type: 'paragraph', text: "Author Viewpoint questions ask you to identify a statement the author would agree or disagree with based on the passage. They appear **252 times** in the released pool — roughly 12% of all RC questions." },
        { type: 'table', headers: ["Element", "What to Look For", "Core Skill", "Common Trap"], rows: [
          ["Central claim", "The author's thesis, main argument, or primary position", "Synthesize the author's stance before reading choices", "Confusing a reported third-party view with the author's own position"],
          ["Evaluative language", "Words that signal judgment: endorses, criticizes, values, doubts", "Track who owns each claim and whether the author agrees", "Attributing a described position to the author when they are merely reporting it"],
          ["Stem specificity", "The exact claim or topic the stem names, not the passage's general theme", "Answer about the narrow issue in the stem, not the big picture", "Giving the author's overall outlook when the stem asks about a narrower dispute"],
          ["Intensity match", "\"proves\" vs. \"suggests,\" \"always\" vs. \"likely\"", "Match the certainty level in the answer to the author's own language", "Picking an absolute answer when the author used hedging language"],
        ]},
        { type: 'paragraph', text: "Quick example: The author argues that early jazz musicians deserve recognition for technical innovation, but acknowledges their commercial output was uneven. An answer saying the author would agree that \"early jazz musicians were technically innovative\" passes; one saying \"all early jazz recordings are artistically successful\" is too broad." },
        { type: 'list', ordered: true, items: [
          "Identify the exact issue the stem asks about.",
          "Synthesize the author's claim, tone, and reasons on that issue.",
          "Separate the author's own voice from reported or described views.",
          "Treat each answer choice as a hypothesis — find a verifying line in the passage.",
          "Eliminate any choice you cannot anchor to specific textual evidence.",
        ]},
        { type: 'callout', variant: 'tip', title: "Key Principle", text: "Author Viewpoint questions are really ownership questions. The correct answer belongs to the author — not to a critic, a theory, or a third party the passage merely describes." },
      ],
    },
  },
};
