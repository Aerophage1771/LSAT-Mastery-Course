import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "38-1",
  title: "Introduction",
  content: [
    { type: 'h3', text: "Germaine's Guide to RC Relationship Questions" },
    { type: 'h4', text: "What's this question asking?" },
    { type: 'paragraph', text: "Relationship questions ask you to define the logical connection between two passages, paragraphs, or specific claims. Your goal is to move beyond the individual content of each section and articulate exactly how they interact with one another." },
    { type: 'paragraph', text: "This often involves identifying the specific nature of the interaction, such as:" },
    { type: 'list', items: [
      "**Points of agreement or disagreement:** Determining where two different perspectives overlap or diverge.",
      "**General theory vs. specific example:** Recognizing when one text provides a case study that illustrates a principle discussed in another.",
      "**Critique and counterpoint:** Identifying when one section offers a direct challenge or refinement to an argument made elsewhere.",
      "**Expansion of scope:** Evaluating how a second passage adds new information or implications to the findings of the first."
    ]},
    { type: 'paragraph', text: "In debate-heavy comparative sets, add one more layer: track which **reasons** belong to which side. The relationship between two passages is often not just that they disagree, but that one passage attacks the *reasoning* used by the other or narrows the conditions under which the other passage is persuasive." },
    { type: 'hr' },
    { type: 'h3', text: "Stem Identification: How to Spot a Relationship Question" },
    { type: 'paragraph', text: "Relationship questions, common in comparative passage sets, ask you to define the logical connection between two passages, paragraphs, or specific claims. The chart below breaks down the common phrasing patterns used to ask about this interaction." },
    { 
      type: 'breakdown', 
      labels: { title: 'Category', text: 'Examples & Keywords' }, 
      items: [
        { 
          title: "Direct Inquiry", 
          text: "**Keywords:** relationship, relates to, how... are related, is true about the relationship\n\n• \"Which one of the following most accurately characterizes a **relationship between the two passages**?\" <br>• \"**Passage B relates to passage A** in which one of the following ways?\" <br>• \"Which one of the following is **true about the relationship** between the two passages?\"", 
          badge: "Connection", 
          badgeColor: "indigo" 
        },
        { 
          title: "Comparative Inquiry (Difference)", 
          text: "**Keywords:** differs from, difference between\n\n• \"**Passage A differs from passage B** in that passage A is more...\" <br>• \"Which one of the following statements most accurately characterizes a **difference between** the two passages?\"", 
          badge: "Contrast", 
          badgeColor: "blue" 
        },
        { 
          title: "Specific Connection", 
          text: "**Keywords:** evidence... relates to generalization, purpose... relates to content, B... relates to A\n\n• \"**The evidence from Ban Chiang discussed in passage B relates to the generalization... in passage A** in which one of the following ways?\" <br>• \"How does the **purpose of passage B relate to the content of passage A**?\"", 
          badge: "Specific", 
          badgeColor: "green" 
        }
      ] 
    },
    { type: 'callout', title: "Overarching Takeaway", variant: "summary", text: "Your goal is to move beyond the content of each passage and define the structure of the relationship between them. Are they in agreement or disagreement? Does one provide an example of the other's theory? The correct answer will accurately describe this logical interaction." },
    { type: 'h3', text: "The Importance of Relationship Questions" },
    { type: 'paragraph', text: "Relationship questions are uncommon, appearing only 18 times, but they are a staple of comparative passage sets. This question type explicitly tests your ability to synthesize and compare the core arguments, assumptions, or tones of two different texts. This skill is crucial for succeeding on the most complex passages the LSAT presents." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h3",
          "text": "Germaine's Guide to RC Relationship Questions"
        },
        {
          "type": "h4",
          "text": "What's this question asking?"
        },
        {
          "type": "paragraph",
          "text": "Relationship questions ask you to define the logical connection between two passages, paragraphs, or specific claims. Your goal is to move beyond the individual content of each section and articulate exactly how they interact with one another."
        },
        {
          "type": "paragraph",
          "text": "This often involves identifying the specific nature of the interaction, such as:"
        },
        {
          "type": "list",
          "items": [
            "**Points of agreement or disagreement:** Determining where two different perspectives overlap or diverge.",
            "**General theory vs. specific example:** Recognizing when one text provides a case study that illustrates a principle discussed in another.",
            "**Critique and counterpoint:** Identifying when one section offers a direct challenge or refinement to an argument made elsewhere.",
            "**Expansion of scope:** Evaluating how a second passage adds new information or implications to the findings of the first."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Stem Identification: How to Spot a Relationship Question"
        },
        {
          "type": "paragraph",
          "text": "Relationship questions, common in comparative passage sets, ask you to define the logical connection between two passages, paragraphs, or specific claims. The chart below breaks down the common phrasing patterns used to ask about this interaction."
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Category",
            "text": "Examples & Keywords"
          },
          "items": [
            {
              "title": "Direct Inquiry",
              "text": "**Keywords:** relationship, relates to, how... are related, is true about the relationship\n\n• \"Which one of the following most accurately characterizes a **relationship between the two passages**?\" <br>• \"**Passage B relates to passage A** in which one of the following ways?\" <br>• \"Which one of the following is **true about the relationship** between the two passages?\"",
              "badge": "Connection",
              "badgeColor": "indigo"
            },
            {
              "title": "Comparative Inquiry (Difference)",
              "text": "**Keywords:** differs from, difference between\n\n• \"**Passage A differs from passage B** in that passage A is more...\" <br>• \"Which one of the following statements most accurately characterizes a **difference between** the two passages?\"",
              "badge": "Contrast",
              "badgeColor": "blue"
            },
            {
              "title": "Specific Connection",
              "text": "**Keywords:** evidence... relates to generalization, purpose... relates to content, B... relates to A\n\n• \"**The evidence from Ban Chiang discussed in passage B relates to the generalization... in passage A** in which one of the following ways?\" <br>• \"How does the **purpose of passage B relate to the content of passage A**?\"",
              "badge": "Specific",
              "badgeColor": "green"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Overarching Takeaway",
          "variant": "summary",
          "text": "Your goal is to move beyond the content of each passage and define the structure of the relationship between them. Are they in agreement or disagreement? Does one provide an example of the other's theory? The correct answer will accurately describe this logical interaction."
        },
        {
          "type": "h3",
          "text": "The Importance of Relationship Questions"
        },
        {
          "type": "paragraph",
          "text": "Relationship questions are uncommon, appearing only 18 times, but they are a staple of comparative passage sets. This question type explicitly tests your ability to synthesize and compare the core arguments, assumptions, or tones of two different texts. This skill is crucial for succeeding on the most complex passages the LSAT presents."
        }
      ],
    },
    glance: {
      label: "At a Glance",
      content: [
        { type: 'h2', text: "Relationship Questions -- At a Glance" },
        { type: 'paragraph', text: "Your goal is to define the logical connection between two passages, paragraphs, or claims. Relationship questions appear **18 times** in the released pool and are a staple of comparative passage sets." },
        {
          type: 'table',
          headers: ['Element', 'What to Look For', 'Core Skill', 'Common Trap'],
          rows: [
            ['Stem language', '"Relationship between," "relates to," "differs from"', 'Spotting the comparative framing', 'Treating it as a simple Main Point question for one passage'],
            ['Component summaries', 'One-sentence distillation of each passage or section', 'Isolating each side before comparing', 'Blending the two summaries into a single muddled view'],
            ['Interaction type', 'Agreement, critique, expansion, example-of-theory, alternative explanation', 'Naming the abstract connection', 'Settling for "different perspectives" when the link is more specific'],
            ['Directionality', 'Which component is general vs. specific, or which attacks the other', 'Getting the direction right', 'Reversing who critiques whom or who provides the example']
          ]
        },
        { type: 'paragraph', text: "For example, if Passage A argues a law was effective and Passage B argues economic factors caused the change instead, the relationship is not merely \"different views on a law\" but \"Passage B offers an alternative explanation that challenges Passage A's causal claim.\"" },
        {
          type: 'list',
          items: [
            "Summarize each component in one sentence before comparing",
            "Define the interaction in a single abstract sentence",
            "Identify whether the relationship involves agreement, disagreement, expansion, or example",
            "Check directionality: which side is general and which is specific",
            "For debate passages, track which reasons belong to which side"
          ]
        },
        { type: 'callout', variant: 'tip', title: 'Key Principle', text: "Do not start serious answer sorting until you can say in one sentence how one component relates to the other. If you cannot name the interaction yet, you are still too early in your analysis." }
      ]
    }
  }
};
