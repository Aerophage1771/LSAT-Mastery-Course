import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "28-1",
  title: "Introduction",
  content: [
    { type: 'h3', text: "Germaine's Guide to RC Approach Questions" },
    { type: 'h4', text: "What's this question asking?" },
    { type: 'paragraph', text: "Approach questions ask you to identify the author's argumentative strategy or the overall structure of the passage. Your goal is to zoom out from the specific topic and describe the way the information is organized and presented." },
    { type: 'paragraph', text: "You're looking for the answer choice that best provides a \"blueprint\" of the passage's flow, which might involve things like:" },
    { type: 'list', items: [
      "Presenting a theory and then providing evidence to support it.",
      "Introducing a problem and then evaluating several potential solutions.",
      "Contrasting two different perspectives on a single topic.",
      "Refuting a commonly held belief by pointing out a flaw in its reasoning."
    ]},
    { type: 'callout', title: "Shared RC Method Reminder", variant: "summary", text: "Approach questions get much easier when your reading notes use the same shared vocabulary every time: **low-resolution paragraph summary, perspective tracking, author-opinion tracking, next-paragraph prediction, early style hypothesis, post-reading recap.** The right answer will usually be a cleaned-up version of that map." },
    { type: 'hr' },
    { type: 'h3', text: "Stem Identification: How to Spot an Approach Question" },
    { type: 'paragraph', text: "Approach questions ask you to describe how an author makes an argument or how two authors' methods compare. The chart below breaks down the common phrasing patterns used to ask about these rhetorical and structural strategies." },
    { 
      type: 'breakdown', 
      labels: { title: 'Category', text: 'Examples & Keywords' }, 
      items: [
        { 
          title: "Comparative Approach (Similarity)", 
          text: "**Keywords:** both do, alike, parallel, both seek to\n\n• \"In arguing for their respective positions, the author of passage A and the author of passage B **both do** which one of the following?\"\n• \"The passages are **alike** in that each seeks to advance its main argument by...\"", 
          badge: "Similarity", 
          badgeColor: "indigo" 
        },
        { 
          title: "Comparative Approach (Difference)", 
          text: "**Keywords:** differ, difference in, unlike, but not, NOT parallel\n\n• \"The approaches... **differ** in which one of the following ways?\"\n• \"Passage B, **but not** passage A, seeks to achieve its purpose by...\"\n• \"Which one of the following most accurately describes the **difference in approach**...?\"", 
          badge: "Difference", 
          badgeColor: "blue" 
        },
        { 
          title: "General Description", 
          text: "**Keywords:** described as, argumentative structure(s)\n\n• \"The passage can most accurately be **described as** which one of the following?\"\n• \"Which one of the following is true about the **argumentative structures** of the two passages?\"", 
          badge: "Structure", 
          badgeColor: "green" 
        }
      ] 
    },
    { type: 'callout', title: "Overarching Takeaway", variant: "summary", text: "Your task is to ignore the specific topic and focus on the author's technique. Look for answer choices that use abstract, functional language like \"citing evidence to support a claim,\" \"refuting a counterargument,\" \"presenting a historical overview,\" or \"making an analogy.\" You are describing the blueprint of the argument, not its content." },
    { type: 'h3', text: "The Importance of Approach Questions" },
    { type: 'paragraph', text: "Approach questions are rare, appearing only 11 times among the released LSATs (about 0.5%), but the skill they test is fundamental. These questions, common in comparative passages, ask you to describe how an author builds their argument. Developing this skill will directly improve your ability to answer Structure and Function questions within RC and will sharpen your performance on Method of Reasoning questions in the Logical Reasoning section." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h3",
          "text": "Germaine's Guide to RC Approach Questions"
        },
        {
          "type": "h4",
          "text": "What's this question asking?"
        },
        {
          "type": "paragraph",
          "text": "Approach questions ask you to identify the author's argumentative strategy or the overall structure of the passage. Your goal is to zoom out from the specific topic and describe the way the information is organized and presented."
        },
        {
          "type": "paragraph",
          "text": "You're looking for the answer choice that best provides a \"blueprint\" of the passage's flow, which might involve things like:"
        },
        {
          "type": "list",
          "items": [
            "Presenting a theory and then providing evidence to support it.",
            "Introducing a problem and then evaluating several potential solutions.",
            "Contrasting two different perspectives on a single topic.",
            "Refuting a commonly held belief by pointing out a flaw in its reasoning."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Stem Identification: How to Spot an Approach Question"
        },
        {
          "type": "paragraph",
          "text": "Approach questions ask you to describe how an author makes an argument or how two authors' methods compare. The chart below breaks down the common phrasing patterns used to ask about these rhetorical and structural strategies."
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Category",
            "text": "Examples & Keywords"
          },
          "items": [
            {
              "title": "Comparative Approach (Similarity)",
              "text": "**Keywords:** both do, alike, parallel, both seek to\n\n• \"In arguing for their respective positions, the author of passage A and the author of passage B **both do** which one of the following?\"\n• \"The passages are **alike** in that each seeks to advance its main argument by...\"",
              "badge": "Similarity",
              "badgeColor": "indigo"
            },
            {
              "title": "Comparative Approach (Difference)",
              "text": "**Keywords:** differ, difference in, unlike, but not, NOT parallel\n\n• \"The approaches... **differ** in which one of the following ways?\"\n• \"Passage B, **but not** passage A, seeks to achieve its purpose by...\"\n• \"Which one of the following most accurately describes the **difference in approach**...?\"",
              "badge": "Difference",
              "badgeColor": "blue"
            },
            {
              "title": "General Description",
              "text": "**Keywords:** described as, argumentative structure(s)\n\n• \"The passage can most accurately be **described as** which one of the following?\"\n• \"Which one of the following is true about the **argumentative structures** of the two passages?\"",
              "badge": "Structure",
              "badgeColor": "green"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Overarching Takeaway",
          "variant": "summary",
          "text": "Your task is to ignore the specific topic and focus on the author's technique. Look for answer choices that use abstract, functional language like \"citing evidence to support a claim,\" \"refuting a counterargument,\" \"presenting a historical overview,\" or \"making an analogy.\" You are describing the blueprint of the argument, not its content."
        },
        {
          "type": "h3",
          "text": "The Importance of Approach Questions"
        },
        {
          "type": "paragraph",
          "text": "Approach questions are rare, appearing only 11 times among the released LSATs (about 0.5%), but the skill they test is fundamental. These questions, common in comparative passages, ask you to describe how an author builds their argument. Developing this skill will directly improve your ability to answer Structure and Function questions within RC and will sharpen your performance on Method of Reasoning questions in the Logical Reasoning section."
        }
      ],
    },
    glance: {
      label: "At a Glance",
      content: [
        { type: 'h2', text: "RC Approach Questions — At a Glance" },
        { type: 'paragraph', text: "Approach questions ask you to describe the author's argumentative strategy or passage structure at a high level. They appear **11 times** in the released pool and show up most often in comparative passage sets." },
        { type: 'table', headers: ["Element", "What to Look For", "Core Skill", "Common Trap"], rows: [
          ["Passage blueprint", "Paragraph-level jobs: introduce, challenge, propose, evaluate", "Summarize each paragraph's function, not its content", "Describing what the passage says instead of what it does"],
          ["Abstract verbs in answers", "\"refuting,\" \"contrasting,\" \"qualifying,\" \"presenting evidence\"", "Match the verb to the author's actual move", "Confusing a full refutation with a partial qualification"],
          ["Comparative structure", "How passage A and passage B relate to each other", "Track similarity, difference, and relationship before answering", "Treating each passage in isolation instead of mapping the pair"],
          ["Scope and emphasis", "Which structural elements dominate vs. which are minor", "Weight the blueprint by how much space each move gets", "Elevating a minor aside into a main structural component"],
        ]},
        { type: 'paragraph', text: "Quick example: A passage spends three paragraphs critiquing a theory and one sentence mentioning an alternative. The best answer says \"critiquing a prevailing view,\" not \"contrasting two theories\" — because the contrast is lopsided." },
        { type: 'list', ordered: true, items: [
          "After reading, write a one-line functional summary for each paragraph.",
          "Form a light style hypothesis: debate, single-position, phenomenon-hypothesis, etc.",
          "For comparative sets, state the relationship between passages before touching answers.",
          "Match your blueprint to answer choices by checking verbs and sequence.",
          "Eliminate any choice that misrepresents the function or order of even one part.",
        ]},
        { type: 'callout', variant: 'tip', title: "Key Principle", text: "Approach questions reward you for ignoring the topic and focusing on the technique. Describe the blueprint of the argument, not its content." },
      ],
    },
  },
};
