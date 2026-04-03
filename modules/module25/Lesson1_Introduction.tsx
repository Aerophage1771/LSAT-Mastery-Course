import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "25-1",
  title: "Introduction",
  content: [
    { type: 'h3', text: 'Introduction: Inference' },
    { type: 'paragraph', text: "Inference questions ask you to identify a statement that is **very likely to be true** based on the information provided in the passage. The most important mental model is to check for evidential backing: **\"Because this text in the passage is true, I know this answer is true.\"** Your goal is to find the one answer choice that is a direct consequence of quotes from the text and eliminate the answer choices that are not." },
    { type: 'hr' },
    { type: 'h3', text: "Stem Identification: How to Spot an Inference Question" },
    { type: 'paragraph', text: "Inference questions ask you to identify a statement that is provably true based on the information given in the passage. While some stems ask for what is directly stated and others for what is logically implied, the underlying skill is the same: you must find a statement that is a direct consequence of the text, without making outside assumptions." },
    { 
      type: 'breakdown', 
      labels: { title: 'Category', text: 'Examples & Keywords' }, 
      items: [
        { 
          title: "Direct Question Phrasing", 
          text: "**Keywords:** according to, passage states, indicates, is true of, believes\n\n• \"Which one of the following is most strongly supported by the **information in the passage**?\"\n• \"**According to the passage**, which one of the following is true of cases involving ancient graves?\"", 
          badge: "Literal", 
          badgeColor: "indigo" 
        },
        { 
          title: "Classic Inference Phrasing", 
          text: "**Keywords:** infer, suggests, implies, most likely to agree\n\n• \"It can be **inferred** that the authors...\"\n• \"The passage **suggests** which one of the following...?\"\n• \"The author **implies** which one of the following...?\"", 
          badge: "Implication", 
          badgeColor: "blue" 
        },
        { 
          title: "Evidence & Support Phrasing", 
          text: "**Keywords:** supports, provides information to answer, evidence for\n\n• \"The passage **supports which one of the following statements**...?\"\n• \"Information in the passage most strongly **supports** which one of the following?\"", 
          badge: "Support", 
          badgeColor: "green" 
        },
        { 
          title: "Negative Inference Phrasing", 
          text: "**Keywords:** EXCEPT, NOT mentioned, LEAST compatible\n\n• \"The author provides examples of all EXCEPT:\"\n• \"Which one is **NOT mentioned** in the passage...?\"", 
          badge: "Negative", 
          badgeColor: "red" 
        }
      ] 
    },
    { type: 'callout', title: "Overarching Takeaway", variant: "summary", text: "Don't get distracted by the wide variety of phrasings. Whether the stem uses \"infer,\" \"suggests,\" \"according to,\" or \"supports,\" your task remains the same. You are looking for the one answer choice that is a direct and provable consequence of the statements made in the passage. Your mental model should always be: \"Because this specific text is true, I know this answer choice must also be true.\"" },
    { type: 'h3', text: "The Importance of Inference Questions" },
    { type: 'paragraph', text: "Out of 2,098 documented RC questions, around 600 are Inference-based. This makes them a **huge portion of the section (nearly 30%)** and they should be one of your primary focuses. Mastery of this question type is critical for a high score. Further, locating information in the passages and forming inferences from it is largely the basis of reading comprehension." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h3",
          "text": "Germaine's Guide to RC Inference Questions"
        },
        {
          "type": "paragraph",
          "text": "Inference questions ask you to identify a statement that is **very likely to be true** based on the information provided in the passage. The most important mental model is to check for evidential backing: **\"Because this text in the passage is true, I know this answer is true.\"** Your goal is to find the one answer choice that is a direct consequence of quotes from the text and eliminate the answer choices that are not."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Stem Identification: How to Spot an Inference Question"
        },
        {
          "type": "paragraph",
          "text": "Inference questions ask you to identify a statement that is provably true based on the information given in the passage. While some stems ask for what is directly stated and others for what is logically implied, the underlying skill is the same: you must find a statement that is a direct consequence of the text, without making outside assumptions."
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Category",
            "text": "Examples & Keywords"
          },
          "items": [
            {
              "title": "Direct Question Phrasing",
              "text": "**Keywords:** according to, passage states, indicates, is true of, believes\n\n• \"Which one of the following is most strongly supported by the **information in the passage**?\"\n• \"**According to the passage**, which one of the following is true of cases involving ancient graves?\"",
              "badge": "Literal",
              "badgeColor": "indigo"
            },
            {
              "title": "Classic Inference Phrasing",
              "text": "**Keywords:** infer, suggests, implies, most likely to agree\n\n• \"It can be **inferred** that the authors...\"\n• \"The passage **suggests** which one of the following...?\"\n• \"The author **implies** which one of the following...?\"",
              "badge": "Implication",
              "badgeColor": "blue"
            },
            {
              "title": "Evidence & Support Phrasing",
              "text": "**Keywords:** supports, provides information to answer, evidence for\n\n• \"The passage **supports which one of the following statements**...?\"\n• \"Information in the passage most strongly **supports** which one of the following?\"",
              "badge": "Support",
              "badgeColor": "green"
            },
            {
              "title": "Negative Inference Phrasing",
              "text": "**Keywords:** EXCEPT, NOT mentioned, LEAST compatible\n\n• \"The author provides examples of all EXCEPT:\"\n• \"Which one is **NOT mentioned** in the passage...?\"",
              "badge": "Negative",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Overarching Takeaway",
          "variant": "summary",
          "text": "Don't get distracted by the wide variety of phrasings. Whether the stem uses \"infer,\" \"suggests,\" \"according to,\" or \"supports,\" your task remains the same. You are looking for the one answer choice that is a direct and provable consequence of the statements made in the passage. Your mental model should always be: \"Because this specific text is true, I know this answer choice must also be true.\""
        },
        {
          "type": "h3",
          "text": "The Importance of Inference Questions"
        },
        {
          "type": "paragraph",
          "text": "Out of 2,098 documented RC questions, around 600 are Inference-based. This makes them a **huge portion of the section (nearly 30%)** and they should be one of your primary focuses. Mastery of this question type is critical for a high score. Further, locating information in the passages and forming inferences from it is largely the basis of reading comprehension."
        }
      ],
    },
    glance: {
      label: "At a Glance",
      content: [
        { type: 'h2', text: "RC Inference — At a Glance" },
        { type: 'paragraph', text: "Inference questions are the most common RC question type, accounting for roughly 30% of all RC questions (~600 of 2,098). They ask you to identify a statement that is provably true — a direct, logical consequence of what the passage actually says. The underlying task is identical whether the stem uses \"infer,\" \"suggests,\" \"according to,\" or \"supports\": find the one answer choice that the passage text forces to be true." },
        { type: 'table', headers: ["Stem Language", "What It Signals", "Example Phrasing"], rows: [
          ["Direct / Literal", "Look for stated facts", "\"According to the passage...\""],
          ["Implication", "Look for logical consequences", "\"It can be inferred that...\""],
          ["Support", "Passage proves the choice", "\"Information in the passage supports...\""],
          ["Negative / EXCEPT", "Find what is NOT supported", "\"The author provides examples of all EXCEPT...\""  ]
        ]},
        { type: 'list', ordered: true, items: [
          "Read the stem carefully — identify the scope (whole passage, one paragraph, one speaker).",
          "Form a prediction: what kind of information would a correct answer contain?",
          "Scan answer choices for any that directly match or paraphrase passage text.",
          "Eliminate choices that go beyond the text, use extreme language, or misattribute views.",
          "Verify your pick with a specific passage location: \"Because line X says Y, this answer must be true.\""
        ]},
        { type: 'callout', variant: 'tip', title: "One-Sentence Mental Model", text: "Always ask: \"Because this specific text in the passage is true, I know this answer choice must also be true.\" If you cannot complete that sentence, the choice is wrong." }
      ],
    },
  },
};
