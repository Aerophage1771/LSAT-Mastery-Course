import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "33-1",
  title: "Introduction",
  content: [
    { type: 'h3', text: "Germaine's Guide to RC Passage Principle Questions" },
    { type: 'h4', text: "What's this question asking?" },
    { type: 'paragraph', text: "Passage Principle questions ask you to identify the underlying rule or generalization that supports an argument, action, or viewpoint within the text. Your goal is to move from a specific example provided in the passage to the broader logic that justifies it." },
    { type: 'paragraph', text: "This involves identifying the specific reasoning used in the text and selecting the answer choice that represents the general rule behind it. To do this effectively:" },
    { type: 'list', items: [
      "**Identify the specific scenario:** Pinpoint the specific action, judgment, or conclusion mentioned in the question.",
      "**Isolate the underlying logic:** Determine the broader rule that would be necessary to make that specific conclusion or action valid.",
      "**Generalize the finding:** Choose the answer choice that expresses that rule in general terms, ensuring it is applicable beyond the specific context of the passage."
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Stem Identification: How to Spot a Passage Principle Question" },
    { type: 'paragraph', text: "Passage Principle questions ask you to identify the underlying rule, assumption, or generalization that guides an argument presented in the passage. The chart below breaks down the common phrasing patterns used to ask for these principles." },
    { 
      type: 'breakdown', 
      labels: { title: 'Category', text: 'Examples & Keywords' }, 
      items: [
        { 
          title: "Direct Principle Phrasing", 
          text: "**Keywords:** principle(s), governs, underlies, operative in, on the basis of\n\n• \"Which one of the following principles is most in keeping with the passage's argument?\"\n• \"Which one of the following principles most likely **governs** the author's evaluation of Jacobs's narrative?\"\n• \"Which one of the following principles **underlies** the author's argument...?\"", 
          badge: "Core Logic", 
          badgeColor: "indigo" 
        },
        { 
          title: "Generalization & Criterion Phrasing", 
          text: "**Keywords:** generalization(s), criterion, conception, reasoning\n\n• \"Which one of the following **generalizations** best captures the reasoning behind the rejection of the theory...?\"\n• \"...most accurately states a **criterion** that the scholars referred to...use to judge credibility...?\"\n• \"The **conception of morality** that underlies the author's argument...is best expressed by...\"", 
          badge: "Generalization", 
          badgeColor: "blue" 
        },
        { 
          title: "Comparative Principle Phrasing", 
          text: "**Keywords:** both passages, passage A but not B, implicit in...but rejected by\n\n• \"Which one of the following principles underlies the arguments in **both passages**?\"\n• \"Which one of the following principles underlies the argument in **passage A, but not that in passage B**?\"\n• \"...a principle that is **implicit in the argument made by the author of passage B but that would most likely be rejected by the author of passage A**?\"", 
          badge: "Comparison", 
          badgeColor: "green" 
        }
      ] 
    },
    { type: 'callout', title: "Overarching Takeaway", variant: "summary", text: "Your task is to move from the specific example or argument in the text to the general rule that justifies it. Look for the abstract statement that best captures the logic being used, whether the question uses the word \"principle,\" \"generalization,\" or \"criterion.\"" },
    { type: 'h3', text: "The Importance of Passage Principle Questions" },
    { type: 'paragraph', text: "Passage Principle questions appear 35 times among the released LSATs. This question type tests your ability to distill a specific argument into its underlying general rule. Mastering this skill will not only help on these questions but will also significantly improve your performance on Principle questions in the Logical Reasoning section, as the core task of moving between specific examples and abstract rules is identical." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h3",
          "text": "Germaine's Guide to RC Passage Principle Questions"
        },
        {
          "type": "h4",
          "text": "What's this question asking?"
        },
        {
          "type": "paragraph",
          "text": "Passage Principle questions ask you to identify the underlying rule or generalization that supports an argument, action, or viewpoint within the text. Your goal is to move from a specific example provided in the passage to the broader logic that justifies it."
        },
        {
          "type": "paragraph",
          "text": "This involves identifying the specific reasoning used in the text and selecting the answer choice that represents the general rule behind it. To do this effectively:"
        },
        {
          "type": "list",
          "items": [
            "**Identify the specific scenario:** Pinpoint the specific action, judgment, or conclusion mentioned in the question.",
            "**Isolate the underlying logic:** Determine the broader rule that would be necessary to make that specific conclusion or action valid.",
            "**Generalize the finding:** Choose the answer choice that expresses that rule in general terms, ensuring it is applicable beyond the specific context of the passage."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Stem Identification: How to Spot a Passage Principle Question"
        },
        {
          "type": "paragraph",
          "text": "Passage Principle questions ask you to identify the underlying rule, assumption, or generalization that guides an argument presented in the passage. The chart below breaks down the common phrasing patterns used to ask for these principles."
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Category",
            "text": "Examples & Keywords"
          },
          "items": [
            {
              "title": "Direct Principle Phrasing",
              "text": "**Keywords:** principle(s), governs, underlies, operative in, on the basis of\n\n• \"Which one of the following principles is most in keeping with the passage's argument?\"\n• \"Which one of the following principles most likely **governs** the author's evaluation of Jacobs's narrative?\"\n• \"Which one of the following principles **underlies** the author's argument...?\"",
              "badge": "Core Logic",
              "badgeColor": "indigo"
            },
            {
              "title": "Generalization & Criterion Phrasing",
              "text": "**Keywords:** generalization(s), criterion, conception, reasoning\n\n• \"Which one of the following **generalizations** best captures the reasoning behind the rejection of the theory...?\"\n• \"...most accurately states a **criterion** that the scholars referred to...use to judge credibility...?\"\n• \"The **conception of morality** that underlies the author's argument...is best expressed by...\"",
              "badge": "Generalization",
              "badgeColor": "blue"
            },
            {
              "title": "Comparative Principle Phrasing",
              "text": "**Keywords:** both passages, passage A but not B, implicit in...but rejected by\n\n• \"Which one of the following principles underlies the arguments in **both passages**?\"\n• \"Which one of the following principles underlies the argument in **passage A, but not that in passage B**?\"\n• \"...a principle that is **implicit in the argument made by the author of passage B but that would most likely be rejected by the author of passage A**?\"",
              "badge": "Comparison",
              "badgeColor": "green"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Overarching Takeaway",
          "variant": "summary",
          "text": "Your task is to move from the specific example or argument in the text to the general rule that justifies it. Look for the abstract statement that best captures the logic being used, whether the question uses the word \"principle,\" \"generalization,\" or \"criterion.\""
        },
        {
          "type": "h3",
          "text": "The Importance of Passage Principle Questions"
        },
        {
          "type": "paragraph",
          "text": "Passage Principle questions appear 35 times among the released LSATs. This question type tests your ability to distill a specific argument into its underlying general rule. Mastering this skill will not only help on these questions but will also significantly improve your performance on Principle questions in the Logical Reasoning section, as the core task of moving between specific examples and abstract rules is identical."
        }
      ],
    },
    glance: {
      label: 'At a Glance',
      content: [
        { type: 'h2', text: 'Passage Principle Questions — At a Glance' },
        { type: 'paragraph', text: 'These questions ask you to find the general rule behind a specific argument. With **35 appearances** in the released pool, Passage Principle questions test your ability to move from a concrete scenario in the passage to the abstract logic that justifies it.' },
        {
          type: 'table',
          headers: ['Element', 'What to Look For', 'Core Skill', 'Common Trap'],
          rows: [
            ['Specific scenario', 'A judgment, conclusion, or action the passage describes', 'Isolating the exact reasoning being used', 'Restating the facts instead of extracting the rule'],
            ['Underlying rule', 'The general belief or standard that would justify the scenario', 'Abstracting from particular to universal', 'Choosing a principle that is too broad and loses the core logic'],
            ['Stem phrasing', '"Principle," "generalization," "criterion," "conception"', 'Recognizing all variants of the same question type', 'Treating "generalization" stems differently from "principle" stems'],
            ['Comparative dimension', '"Both passages," "Passage A but not B," "implicit in... rejected by"', 'Testing the principle against each passage independently', 'Assuming one principle fits both passages without checking']
          ]
        },
        { type: 'paragraph', text: 'Quick example: If a court ruled against a company because its ads were designed to mislead despite being literally true, the underlying principle is something like "actions should be judged by intended effect, not literal truthfulness." The correct answer captures that abstract rule, not the courtroom facts.' },
        {
          type: 'list',
          items: [
            'Locate the specific argument, judgment, or action the stem points to.',
            'Formulate the general rule that would make that specific conclusion valid.',
            'Eliminate answers that merely restate facts (too specific) or lose the core logic (too broad).',
            'Test your finalist by asking: "If this principle is true, does it force the passage\'s conclusion?"',
            'For comparative stems, verify the principle fits each passage\'s argument independently.'
          ]
        },
        { type: 'callout', variant: 'tip', title: 'Key Principle', text: 'The correct answer is never a summary of the passage. It is the unstated general rule that makes the passage\'s specific reasoning work.' }
      ]
    }
  }
};
