import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "29-1",
  title: "Introduction",
  content: [
    { type: 'h3', text: "Germaine's Guide to RC Author Attitude Questions" },
    { type: 'h4', text: "What's this question asking?" },
    { type: 'paragraph', text: "Author Attitude questions ask you to identify the author's opinion or feeling about a specific topic from the passage. Your goal is to determine the author's tone—whether it is positive, negative, or neutral, and to what degree—by analyzing the specific language they use." },
    { type: 'paragraph', text: "Since an author's opinion is often implied rather than stated directly, you must find it by looking for specific clues in the text, such as:" },
    { type: 'list', items: [
      "**Specific word choice:** Look for revealing adjectives and adverbs (e.g., \"surprisingly,\" \"unfortunately,\" \"remarkably\").",
      "**Degree of qualification:** Notice the difference between \"the theory is wrong\" and \"the theory may be incomplete.\"",
      "**Presentation of evidence:** Does the author present counterarguments fairly or dismiss them quickly?",
      "**Rhetorical structure:** How does the author frame the topic? Is it a problem to be solved or an achievement to be celebrated?"
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Stem Identification: How to Spot an Author Attitude Question" },
    { type: 'paragraph', text: "Author Attitude questions ask you to identify the author's opinion, tone, or perspective regarding a specific subject. The chart below breaks down the common phrasing patterns used to ask about the author's evaluative stance." },
    { 
      type: 'breakdown', 
      labels: { title: 'Category', text: 'Examples & Keywords' }, 
      items: [
        { 
          title: "Direct Inquiry", 
          text: "**Keywords:** attitude, stance, position, opinion, view, favorable toward\n\n• \"Which one of the following most accurately describes the **author's attitude toward**...?\"\n• \"The author's **stance toward**...can most accurately be described as one of...\"\n• \"Which one of the following most accurately characterizes the **author's view regarding**...?\"", 
          badge: "Opinion", 
          badgeColor: "indigo" 
        },
        { 
          title: "Comparative Inquiry", 
          text: "**Keywords:** differs from, more...less, respectively, regards...as\n\n• \"**Passage B differs from passage A** in that passage B displays an attitude...that is **more**...\"\n• \"The **stances of the authors, respectively,** may be most accurately described as...\"\n• \"It can be inferred that the **author of passage B regards** the historical approach of the author of passage A as...\"", 
          badge: "Comparison", 
          badgeColor: "blue" 
        },
        { 
          title: "Evidence of Attitude", 
          text: "**Keywords:** revealed by, conveys, indicative of, values most highly\n\n• \"The author's attitude...is most clearly **revealed by** the author's use of which one of the following phrases?\"\n• \"Which one of the following...most clearly **conveys the author's attitude**...?\"\n• \"Which one of the following aspects of Njabulo's work does the author appear to **value most highly**?\"", 
          badge: "Evidence", 
          badgeColor: "green" 
        }
      ] 
    },
    { type: 'callout', title: "Overarching Takeaway", variant: "summary", text: "Whether the question uses \"attitude,\" \"stance,\" or \"opinion,\" your goal is to determine the author's tone (e.g., positive, negative, neutral) and degree (e.g., strong endorsement, cautious approval, outright dismissal). Pay close attention to adjectives, adverbs, and any words that signal judgment or evaluation." },
    { type: 'h3', text: "The Importance of Author Attitude Questions" },
    { type: 'paragraph', text: "Author Attitude questions appear around 100 times among the released LSATs, making up nearly 5% of all RC questions. Mastering the ability to identify an author's tone is crucial for understanding their overall perspective. This skill is essential for correctly answering Author Viewpoint and Main Conclusion questions, as the author's opinion often shapes their central argument and purpose for writing the passage." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h3",
          "text": "Germaine's Guide to RC Author Attitude Questions"
        },
        {
          "type": "h4",
          "text": "What's this question asking?"
        },
        {
          "type": "paragraph",
          "text": "Author Attitude questions ask you to identify the author's opinion or feeling about a specific topic from the passage. Your goal is to determine the author's tone—whether it is positive, negative, or neutral, and to what degree—by analyzing the specific language they use."
        },
        {
          "type": "paragraph",
          "text": "Since an author's opinion is often implied rather than stated directly, you must find it by looking for specific clues in the text, such as:"
        },
        {
          "type": "list",
          "items": [
            "**Specific word choice:** Look for revealing adjectives and adverbs (e.g., \"surprisingly,\" \"unfortunately,\" \"remarkably\").",
            "**Degree of qualification:** Notice the difference between \"the theory is wrong\" and \"the theory may be incomplete.\"",
            "**Presentation of evidence:** Does the author present counterarguments fairly or dismiss them quickly?",
            "**Rhetorical structure:** How does the author frame the topic? Is it a problem to be solved or an achievement to be celebrated?"
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Stem Identification: How to Spot an Author Attitude Question"
        },
        {
          "type": "paragraph",
          "text": "Author Attitude questions ask you to identify the author's opinion, tone, or perspective regarding a specific subject. The chart below breaks down the common phrasing patterns used to ask about the author's evaluative stance."
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
              "text": "**Keywords:** attitude, stance, position, opinion, view, favorable toward\n\n• \"Which one of the following most accurately describes the **author's attitude toward**...?\"\n• \"The author's **stance toward**...can most accurately be described as one of...\"\n• \"Which one of the following most accurately characterizes the **author's view regarding**...?\"",
              "badge": "Opinion",
              "badgeColor": "indigo"
            },
            {
              "title": "Comparative Inquiry",
              "text": "**Keywords:** differs from, more...less, respectively, regards...as\n\n• \"**Passage B differs from passage A** in that passage B displays an attitude...that is **more**...\"\n• \"The **stances of the authors, respectively,** may be most accurately described as...\"\n• \"It can be inferred that the **author of passage B regards** the historical approach of the author of passage A as...\"",
              "badge": "Comparison",
              "badgeColor": "blue"
            },
            {
              "title": "Evidence of Attitude",
              "text": "**Keywords:** revealed by, conveys, indicative of, values most highly\n\n• \"The author's attitude...is most clearly **revealed by** the author's use of which one of the following phrases?\"\n• \"Which one of the following...most clearly **conveys the author's attitude**...?\"\n• \"Which one of the following aspects of Njabulo's work does the author appear to **value most highly**?\"",
              "badge": "Evidence",
              "badgeColor": "green"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Overarching Takeaway",
          "variant": "summary",
          "text": "Whether the question uses \"attitude,\" \"stance,\" or \"opinion,\" your goal is to determine the author's tone (e.g., positive, negative, neutral) and degree (e.g., strong endorsement, cautious approval, outright dismissal). Pay close attention to adjectives, adverbs, and any words that signal judgment or evaluation."
        },
        {
          "type": "h3",
          "text": "The Importance of Author Attitude Questions"
        },
        {
          "type": "paragraph",
          "text": "Author Attitude questions appear around 100 times among the released LSATs, making up nearly 5% of all RC questions. Mastering the ability to identify an author's tone is crucial for understanding their overall perspective. This skill is essential for correctly answering Author Viewpoint and Main Conclusion questions, as the author's opinion often shapes their central argument and purpose for writing the passage."
        }
      ],
    },
    glance: {
      label: "At a Glance",
      content: [
        { type: 'h2', text: "RC Author Attitude Questions — At a Glance" },
        { type: 'paragraph', text: "Author Attitude questions ask you to identify the author's tone or feeling toward a specific topic in the passage. They appear **~100 times** in the released pool, making up nearly 5% of all RC questions." },
        { type: 'table', headers: ["Element", "What to Look For", "Core Skill", "Common Trap"], rows: [
          ["Charged language", "Adjectives (\"promising,\" \"flawed\"), adverbs (\"unfortunately,\" \"surprisingly\")", "Spot words that reveal judgment or evaluation", "Reading right past evaluative language and treating the passage as neutral"],
          ["Direction of tone", "Positive (approval, admiration), negative (criticism, skepticism), or neutral", "Classify the direction before looking at choices", "Confusing skepticism (doubt) with disapproval (negative judgment)"],
          ["Intensity of tone", "Strong (\"unreserved endorsement\") vs. moderate (\"cautious approval\")", "Match the degree of the author's language to the answer", "Picking an extreme answer when the author's language is hedged"],
          ["Stem target", "The exact person, theory, or event the stem names", "Narrow to the specific issue before judging tone", "Giving the author's general outlook when the stem asks about a narrower issue"],
        ]},
        { type: 'paragraph', text: "Quick example: The author calls a theory \"intriguing but ultimately unsupported.\" That is moderate skepticism — not outright dismissal and not endorsement. An answer saying \"qualified skepticism\" fits; \"enthusiastic approval\" and \"unmitigated criticism\" both fail." },
        { type: 'list', ordered: true, items: [
          "Locate the exact topic the stem asks about in the passage.",
          "Hunt for charged adjectives, adverbs, and evaluative verbs in that section.",
          "Determine direction (positive, negative, neutral) and intensity (strong vs. moderate).",
          "Match your assessment to the answer choices, eliminating mismatches in either dimension.",
          "When stuck, use the synonym test: does the answer word mean exactly what the passage conveys?",
        ]},
        { type: 'callout', variant: 'tip', title: "Key Principle", text: "Author Attitude is always a two-part judgment: direction plus intensity. Get both right and the correct answer almost picks itself." },
      ],
    },
  },
};
