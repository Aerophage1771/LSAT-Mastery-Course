import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "40-1",
  title: "Introduction",
  content: [
    { type: 'h3', text: "Germaine's Guide to RC Title Questions" },
    { type: 'h4', text: "What's this question asking?" },
    { type: 'paragraph', text: "Title questions ask you to select the phrase that best summarizes a passage or, in some cases, the relationship between two passages. Your goal is to identify the option that best captures the central subject, scope, and purpose of the text(s)." },
    { type: 'paragraph', text: "This question type appears in two main forms:" },
    { type: 'list', ordered: true, items: [
      "**Standard Title (for a single passage):** This simpler version asks you to find the single best title for the entire passage. A strong title will capture the main subject, reflect the scope accurately, and reveal the author's primary purpose.",
      "**Analogous Titles (for comparative passages):** This more complex version asks you to match the logical relationship between Passage A and Passage B to a relationship between a pair of titles in the answer choices."
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Stem Identification: How to Spot a Title Question" },
    { type: 'paragraph', text: "Title questions ask you to select the phrase that best summarizes a passage or the relationship between two passages. The chart below breaks down the common phrasing patterns." },
    { 
      type: 'breakdown', 
      labels: { title: 'Category', text: 'Examples & Keywords' }, 
      items: [
        { 
          title: "Standard Title (Single Passage)", 
          text: "**Keywords:** title, summarizes, main point, contents\n\n• \"Which one of the following **titles** most accurately expresses the **main point** of the passage?\" <br>• \"Which one of the following most accurately **summarizes the content** of the passage?\"", 
          badge: "Summary", 
          badgeColor: "indigo" 
        },
        { 
          title: "Paired Titles (Comparative Passages)", 
          text: "**Keywords:** pairs of titles, for passage A and passage B, respectively\n\n• \"Which one of the following **pairs of titles** would be most appropriate for **passage A and passage B, respectively**?\"", 
          badge: "Pairs", 
          badgeColor: "blue" 
        },
        { 
          title: "Analogous Relationship", 
          text: "**Keywords:** relationship, analogous, titles\n\n• \"Based on what can be inferred from their **titles**, the **relationship** between which one of the following pairs... is most **analogous** to the **relationship between passage A and passage B**?\"", 
          badge: "Analogy", 
          badgeColor: "green" 
        }
      ] 
    },
    { type: 'callout', title: "Overarching Takeaway", variant: "summary", text: "For standard and paired titles, your goal is to find the option(s) that best capture the main subject and scope without being too broad or too narrow. For the more complex analogous relationship type, your task is to first define the logical connection between the passages and then find the pair of titles that mirrors that same abstract structure." },
    { type: 'h3', text: "The Importance of Title Questions" },
    { type: 'paragraph', text: "Title questions appear 17 times among the released LSATs, making them an uncommon but important question type. These questions are a direct test of your ability to synthesize the entire passage's scope and purpose into a single, concise idea. The skill required is nearly identical to answering Main Point questions, and practicing them will reinforce your ability to grasp the \"big picture\" of any text." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h3",
          "text": "Germaine's Guide to RC Title Questions"
        },
        {
          "type": "h4",
          "text": "What's this question asking?"
        },
        {
          "type": "paragraph",
          "text": "Title questions ask you to select the phrase that best summarizes a passage or, in some cases, the relationship between two passages. Your goal is to identify the option that best captures the central subject, scope, and purpose of the text(s)."
        },
        {
          "type": "paragraph",
          "text": "This question type appears in two main forms:"
        },
        {
          "type": "list",
          "items": [
            "**Standard Title (for a single passage):** This simpler version asks you to find the single best title for the entire passage. A strong title will capture the main subject, reflect the scope accurately, and reveal the author's primary purpose.",
            "**Analogous Titles (for comparative passages):** This more complex version asks you to match the logical relationship between Passage A and Passage B to a relationship between a pair of titles in the answer choices."
          ],
          "ordered": true
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Stem Identification: How to Spot a Title Question"
        },
        {
          "type": "paragraph",
          "text": "Title questions ask you to select the phrase that best summarizes a passage or the relationship between two passages. The chart below breaks down the common phrasing patterns."
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Category",
            "text": "Examples & Keywords"
          },
          "items": [
            {
              "title": "Standard Title (Single Passage)",
              "text": "**Keywords:** title, summarizes, main point, contents\n\n• \"Which one of the following **titles** most accurately expresses the **main point** of the passage?\" <br>• \"Which one of the following most accurately **summarizes the content** of the passage?\"",
              "badge": "Summary",
              "badgeColor": "indigo"
            },
            {
              "title": "Paired Titles (Comparative Passages)",
              "text": "**Keywords:** pairs of titles, for passage A and passage B, respectively\n\n• \"Which one of the following **pairs of titles** would be most appropriate for **passage A and passage B, respectively**?\"",
              "badge": "Pairs",
              "badgeColor": "blue"
            },
            {
              "title": "Analogous Relationship",
              "text": "**Keywords:** relationship, analogous, titles\n\n• \"Based on what can be inferred from their **titles**, the **relationship** between which one of the following pairs... is most **analogous** to the **relationship between passage A and passage B**?\"",
              "badge": "Analogy",
              "badgeColor": "green"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Overarching Takeaway",
          "variant": "summary",
          "text": "For standard and paired titles, your goal is to find the option(s) that best capture the main subject and scope without being too broad or too narrow. For the more complex analogous relationship type, your task is to first define the logical connection between the passages and then find the pair of titles that mirrors that same abstract structure."
        },
        {
          "type": "h3",
          "text": "The Importance of Title Questions"
        },
        {
          "type": "paragraph",
          "text": "Title questions appear 17 times among the released LSATs, making them an uncommon but important question type. These questions are a direct test of your ability to synthesize the entire passage's scope and purpose into a single, concise idea. The skill required is nearly identical to answering Main Point questions, and practicing them will reinforce your ability to grasp the \"big picture\" of any text."
        }
      ],
    },
    glance: {
      label: "At a Glance",
      content: [
        { type: 'h2', text: "Title Questions -- At a Glance" },
        { type: 'paragraph', text: "Your goal is to select the phrase that best summarizes a passage's subject, scope, and purpose -- or, in comparative sets, to match the logical relationship between two passages to a pair of titles. Title questions appear **17 times** across released LSATs." },
        {
          type: 'table',
          headers: ['Element', 'What to Look For', 'Core Skill', 'Common Trap'],
          rows: [
            ['Stem language', '"Title," "summarizes the content," "most appropriate for passage A and passage B respectively"', 'Distinguishing standard from paired/analogous title tasks', 'Treating a paired-title question like a single-passage question'],
            ['Scope match', 'The title must cover the whole passage, not just one example or paragraph', 'Synthesizing into a concise headline', 'Choosing a title that fits one section but misses the rest'],
            ['Purpose verb', '"A Critique of..." vs. "An Analysis of..." -- the verb reveals intent', 'Matching the verb to the author\'s goal', 'Picking the right topic noun with the wrong action verb'],
            ['Analogous structure', 'The pair of titles must mirror the passage-to-passage relationship', 'Mapping abstract relationship patterns', 'Selecting titles that individually sound right but lack the correct relationship']
          ]
        },
        { type: 'paragraph', text: "For example, if the passage argues that a traditional method has overlooked a key factor, a title like \"Reassessing the Conventional Approach to X\" captures both scope and purpose, while \"The History of X\" is too broad and \"A Single Flaw in X\" is too narrow." },
        {
          type: 'list',
          items: [
            "Synthesize the passage's main point and scope into a mental headline",
            "Test each title against your headline for subject, scope, and purpose accuracy",
            "Eliminate titles that are too narrow, too broad, or use the wrong focus verb",
            "For paired titles, verify both titles fit independently before checking the relationship",
            "For analogous titles, define the passage relationship first, then match the structural parallel"
          ]
        },
        { type: 'callout', variant: 'tip', title: 'Key Principle', text: "A correct title must capture the central subject and the author's primary purpose at the right level of specificity. Think of it as the best possible headline: specific enough to distinguish this passage from others on the same topic, broad enough to cover the whole text." }
      ]
    }
  }
};
