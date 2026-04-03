import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "37-1",
  title: "Introduction",
  content: [
    { type: 'h3', text: "Germaine's Guide to RC Passage Function Questions" },
    { type: 'h4', text: "What's this question asking?" },
    { type: 'paragraph', text: "Passage Function questions ask you to identify the author's primary reason for writing the text. Your goal is to determine the author's overarching intent and the central task they are attempting to accomplish throughout the entire passage." },
    { type: 'paragraph', text: "The correct answer will accurately represent the passage's scope and the author's objective. This typically involves selecting a description that matches the passage's rhetorical goal, such as:" },
    { type: 'list', items: [
      "**Arguing for a specific change:** Advocating for a new policy, perspective, or course of action.",
      "**Explaining a phenomenon:** Detailing the causes, history, or mechanics of a particular subject.",
      "**Evaluating a theory:** Discussing the merits and flaws of a specific scholarly or scientific idea.",
      "**Reconciling viewpoints:** Showing how two seemingly different perspectives can coexist or be unified.",
      "**Correcting a misconception:** Pointing out errors in a common belief and providing a more accurate alternative.",
      "**Spotlighting a subject:** Showing why a person, work, event, or development is significant, distinctive, or interesting."
    ]},
    { type: 'paragraph', text: "The correct answer must do two things at once: capture the author's main motivation for writing the passage and accurately describe something the passage actually does. Wrong answers often do only one of those two jobs." },
    { type: 'paragraph', text: "Use the same shared RC method here that you use everywhere else: low-resolution paragraph summaries, perspective tracking, author-opinion tracking, next-paragraph prediction, a light style hypothesis, and a post-reading recap. Passage Function is usually just the cleanest verb phrase that captures that map." },
    { type: 'callout', title: "Spotlight Passage Purpose", variant: "summary", text: "If the passage is spotlighting a person, work, or development, the primary purpose is often to explain what makes that subject significant, distinctive, or revealing, not to argue for a policy or attack a rival theory." },
    { type: 'hr' },
    { type: 'h3', text: "Stem Identification: How to Spot a Passage Function Question" },
    { type: 'paragraph', text: "Passage Function questions ask you to identify the author's main reason for writing the passage—their overarching goal or the primary task they are trying to accomplish. The chart below breaks down the common phrasing patterns used to ask about this \"big picture\" purpose." },
    { 
      type: 'breakdown', 
      labels: { title: 'Category', text: 'Examples & Keywords' }, 
      items: [
        { 
          title: "Direct Inquiry", 
          text: "**Keywords:** purpose, concerned with, function, described as, aim\n\n• \"The primary **purpose** of the passage is to...\" <br>• \"In the passage, the author is primarily **concerned with doing** which one of the following?\" <br>• \"The passage as a whole can most accurately be **described as**...\"", 
          badge: "Purpose", 
          badgeColor: "indigo" 
        },
        { 
          title: "Comparative Inquiry", 
          text: "**Keywords:** both passages, each passage, share, common, respectively\n\n• \"**Both passages** are primarily concerned with examining which one of the following topics?\" <br>• \"A central **purpose common to both passages**?\" <br>• \"The **purposes** of the two passages are related in **which one** of the following ways?\"", 
          badge: "Comparison", 
          badgeColor: "blue" 
        },
        { 
          title: "Question-Based Inquiry", 
          text: "**Keywords:** answer which... question\n\n• \"The primary purpose of the passage is to provide an **answer to which one of the following questions**?\" <br>• \"Both passages seek an **answer to which one of the following questions**?\"", 
          badge: "Question", 
          badgeColor: "green" 
        }
      ] 
    },
    { type: 'callout', title: "Overarching Takeaway", variant: "summary", text: "Your goal is to find the answer choice that best summarizes the passage's overall function and scope. The correct answer must capture the \"big picture\" without being too broad or too narrow, and it must accurately reflect the author's primary intent, whether it is to argue, explain, describe, criticize, or propose a solution." },
    { type: 'h3', text: "The Importance of Passage Function Questions" },
    { type: 'paragraph', text: "Passage Function questions appear 100 times among the released LSATs, making up nearly 5% of the section. This question type is closely related to the Main Point, but it focuses on the author's primary goal or intent (e.g., to argue, to explain, to criticize). A strong grasp of the author's purpose is essential for understanding their tone and the overall structure of their argument, making this a key skill for holistic passage comprehension." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h3",
          "text": "Germaine's Guide to RC Passage Function Questions"
        },
        {
          "type": "h4",
          "text": "What's this question asking?"
        },
        {
          "type": "paragraph",
          "text": "Passage Function questions ask you to identify the author's primary reason for writing the text. Your goal is to determine the author's overarching intent and the central task they are attempting to accomplish throughout the entire passage."
        },
        {
          "type": "paragraph",
          "text": "The correct answer will accurately represent the passage's scope and the author's objective. This typically involves selecting a description that matches the passage's rhetorical goal, such as:"
        },
        {
          "type": "list",
          "items": [
            "**Arguing for a specific change:** Advocating for a new policy, perspective, or course of action.",
            "**Explaining a phenomenon:** Detailing the causes, history, or mechanics of a particular subject.",
            "**Evaluating a theory:** Discussing the merits and flaws of a specific scholarly or scientific idea.",
            "**Reconciling viewpoints:** Showing how two seemingly different perspectives can coexist or be unified.",
            "**Correcting a misconception:** Pointing out errors in a common belief and providing a more accurate alternative."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Stem Identification: How to Spot a Passage Function Question"
        },
        {
          "type": "paragraph",
          "text": "Passage Function questions ask you to identify the author's main reason for writing the passage—their overarching goal or the primary task they are trying to accomplish. The chart below breaks down the common phrasing patterns used to ask about this \"big picture\" purpose."
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
              "text": "**Keywords:** purpose, concerned with, function, described as, aim\n\n• \"The primary **purpose** of the passage is to...\" <br>• \"In the passage, the author is primarily **concerned with doing** which one of the following?\" <br>• \"The passage as a whole can most accurately be **described as**...\"",
              "badge": "Purpose",
              "badgeColor": "indigo"
            },
            {
              "title": "Comparative Inquiry",
              "text": "**Keywords:** both passages, each passage, share, common, respectively\n\n• \"**Both passages** are primarily concerned with examining which one of the following topics?\" <br>• \"A central **purpose common to both passages**?\" <br>• \"The **purposes** of the two passages are related in **which one** of the following ways?\"",
              "badge": "Comparison",
              "badgeColor": "blue"
            },
            {
              "title": "Question-Based Inquiry",
              "text": "**Keywords:** answer which... question\n\n• \"The primary purpose of the passage is to provide an **answer to which one of the following questions**?\" <br>• \"Both passages seek an **answer to which one of the following questions**?\"",
              "badge": "Question",
              "badgeColor": "green"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Overarching Takeaway",
          "variant": "summary",
          "text": "Your goal is to find the answer choice that best summarizes the passage's overall function and scope. The correct answer must capture the \"big picture\" without being too broad or too narrow, and it must accurately reflect the author's primary intent, whether it is to argue, explain, describe, criticize, or propose a solution."
        },
        {
          "type": "h3",
          "text": "The Importance of Passage Function Questions"
        },
        {
          "type": "paragraph",
          "text": "Passage Function questions appear 100 times among the released LSATs, making up nearly 5% of the section. This question type is closely related to the Main Point, but it focuses on the author's primary goal or intent (e.g., to argue, to explain, to criticize). A strong grasp of the author's purpose is essential for understanding their tone and the overall structure of their argument, making this a key skill for holistic passage comprehension."
        }
      ],
    },
    glance: {
      label: "At a Glance",
      content: [
        { type: 'h2', text: "Passage Function Questions -- At a Glance" },
        { type: 'paragraph', text: "Your goal is to name the author's primary reason for writing the passage. Passage Function questions appear **~100 times** across released LSATs, making up roughly 5% of the RC section." },
        {
          type: 'table',
          headers: ['Element', 'What to Look For', 'Core Skill', 'Common Trap'],
          rows: [
            ['Stem language', '"Primary purpose," "concerned with doing," "described as"', 'Recognizing the question type instantly', 'Confusing Function with Main Point (what vs. why)'],
            ['Author\'s verb', 'Argue, explain, evaluate, correct, spotlight', 'Matching tone to the right action verb', 'Picking a verb that is close but too strong or too mild'],
            ['Passage scope', 'Whole-passage goal, not a single paragraph\'s job', 'Synthesizing all paragraphs into one purpose', 'Choosing an answer that covers only one section'],
            ['Answer precision', 'Must capture both motivation and what the passage actually does', 'Two-job test: motive + accuracy', 'One-half-right answers that nail topic but miss intent']
          ]
        },
        { type: 'paragraph', text: "For example, if a passage introduces a common interpretation and then uses new evidence to challenge it, the primary purpose is not \"to discuss an interpretation\" but \"to argue against a widely held view by presenting contrary evidence.\" The verb and the scope together define the correct answer." },
        {
          type: 'list',
          items: [
            "Read with low-resolution paragraph summaries and perspective tracking",
            "After reading, draft a one-sentence purpose statement starting with a strong verb",
            "Test each answer choice against your purpose statement",
            "Eliminate answers that are too narrow, too broad, or use the wrong verb",
            "Break ties with the Main Point connection and the Tone Check"
          ]
        },
        { type: 'callout', variant: 'tip', title: 'Key Principle', text: "The correct answer must do two jobs at once: capture the author's main motivation for writing and accurately describe something the passage actually does. If an answer only accomplishes one of those jobs, it is wrong." }
      ]
    }
  }
};
