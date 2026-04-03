import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "34-1",
  title: "Introduction",
  content: [
    { type: 'h3', text: "Germaine's Guide to RC Phrase Meaning Questions" },
    { type: 'h4', text: "What's this question asking?" },
    { type: 'paragraph', text: "Phrase Meaning questions ask you to identify the specific definition of a word or phrase based on its immediate context. Your goal is to determine the author's intended meaning by analyzing the surrounding sentences and the role the phrase plays in the larger argument." },
    { type: 'paragraph', text: "Determining the correct meaning requires evaluating the phrase in its specific environment. This often involves:" },
    { type: 'list', items: [
      "**Examining the sentences immediately before and after** the phrase for context clues.",
      "**Substituting the answer choices** into the original sentence to see which one maintains the author's intended logic.",
      "**Considering the author's tone** and the specific subject matter to ensure the definition fits the passage's scope.",
      "**Identifying instances** where the author uses a common word in a technical, metaphorical, or specialized way."
    ]},
    { type: 'callout', title: "High-Value Context Clues", variant: "summary", text: "When the meaning feels unclear, look for three things first: **contrast** language that tells you what the phrase does not mean, **restatement** language that paraphrases it, and **examples** that show the phrase in action." },
    { type: 'hr' },
    { type: 'h3', text: "Stem Identification: How to Spot a Phrase Meaning Question" },
    { type: 'paragraph', text: "Phrase Meaning questions test your ability to determine the precise meaning of a specific word or phrase as it is used within the context of the passage. The chart below breaks down the common phrasing patterns used to ask about the author's intended, context-specific meaning." },
    { 
      type: 'breakdown', 
      labels: { title: 'Category', text: 'Examples & Keywords' }, 
      items: [
        { 
          title: "Direct Definition & Reference", 
          text: "**Keywords:** means, by refers to, characterizes, defines, meaning of\n\n• \"Which one of the following most accurately characterizes what the author **means by** the term...?\"\n• \"The phrase 'cultural cross-fertilization' **refers to** which one of the following?\"\n• \"Which one of the following best **defines** the word...?\"", 
          badge: "Direct", 
          badgeColor: "indigo" 
        },
        { 
          title: "Contextual Substitution", 
          text: "**Keywords:** substituted for, replace, convey the same meaning, closest in meaning\n\n• \"**If substituted for** the word 'bedrock'...which one of the following words would **convey the same meaning**...?\"\n• \"Which one of the following could **replace** the term 'recalcitrant' without a substantial change in the meaning...?\"", 
          badge: "Substitution", 
          badgeColor: "blue" 
        },
        { 
          title: "Rationale for Word Choice", 
          text: "**Keywords:** because, in order to suggest, for the reason that\n\n• \"...described as 'modest'...most likely **because** it...\"\n• \"...characterizes the correlation as 'remarkable' **in order to suggest that**...\"\n• \"The author describes Jacob's narrative as an 'antidomestic novel' **for which one of the following reasons**?\"", 
          badge: "Rationale", 
          badgeColor: "green" 
        },
        { 
          title: "Exemplification", 
          text: "**Keywords:** exemplifies, example of\n\n• \"Which one of the following quotations...best **exemplifies** the 'familiar' attitude mentioned...?\"\n• \"Of the following, which one is the best **example of** the use of 'designed offer'...?\"", 
          badge: "Example", 
          badgeColor: "slate" 
        }
      ] 
    },
    { type: 'callout', title: "Dictionary-Definition Trap", variant: "tip", text: "The correct answer is not automatically the one that sounds most like a dictionary definition. Wrong answers often bait you with familiar wording that ignores the passage's actual context." },
    { type: 'callout', title: "Overarching Takeaway", variant: "summary", text: "Your goal is to function as a textual detective, using clues from the sentences immediately surrounding the target phrase to deduce its specific role and meaning in that exact location. The correct answer is not the dictionary definition, but the one that fits perfectly into the logic of the passage." },
    { type: 'h3', text: "The Importance of Phrase Meaning Questions" },
    { type: 'paragraph', text: "Phrase Meaning questions appear 106 times in the dataset, making up about 5% of all RC questions. This question type is a direct test of your ability to use context to determine an author's intent. While it seems simple, mastering this skill will improve your reading precision and help you avoid misinterpreting key claims, which is a valuable asset for answering every other question type in the section." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h3",
          "text": "Germaine's Guide to RC Phrase Meaning Questions"
        },
        {
          "type": "h4",
          "text": "What's this question asking?"
        },
        {
          "type": "paragraph",
          "text": "Phrase Meaning questions ask you to identify the specific definition of a word or phrase based on its immediate context. Your goal is to determine the author's intended meaning by analyzing the surrounding sentences and the role the phrase plays in the larger argument."
        },
        {
          "type": "paragraph",
          "text": "Determining the correct meaning requires evaluating the phrase in its specific environment. This often involves:"
        },
        {
          "type": "list",
          "items": [
            "**Examining the sentences immediately before and after** the phrase for context clues.",
            "**Substituting the answer choices** into the original sentence to see which one maintains the author's intended logic.",
            "**Considering the author's tone** and the specific subject matter to ensure the definition fits the passage's scope.",
            "**Identifying instances** where the author uses a common word in a technical, metaphorical, or specialized way."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Stem Identification: How to Spot a Phrase Meaning Question"
        },
        {
          "type": "paragraph",
          "text": "Phrase Meaning questions test your ability to determine the precise meaning of a specific word or phrase as it is used within the context of the passage. The chart below breaks down the common phrasing patterns used to ask about the author's intended, context-specific meaning."
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Category",
            "text": "Examples & Keywords"
          },
          "items": [
            {
              "title": "Direct Definition & Reference",
              "text": "**Keywords:** means, by refers to, characterizes, defines, meaning of\n\n• \"Which one of the following most accurately characterizes what the author **means by** the term...?\"\n• \"The phrase 'cultural cross-fertilization' **refers to** which one of the following?\"\n• \"Which one of the following best **defines** the word...?\"",
              "badge": "Direct",
              "badgeColor": "indigo"
            },
            {
              "title": "Contextual Substitution",
              "text": "**Keywords:** substituted for, replace, convey the same meaning, closest in meaning\n\n• \"**If substituted for** the word 'bedrock'...which one of the following words would **convey the same meaning**...?\"\n• \"Which one of the following could **replace** the term 'recalcitrant' without a substantial change in the meaning...?\"",
              "badge": "Substitution",
              "badgeColor": "blue"
            },
            {
              "title": "Rationale for Word Choice",
              "text": "**Keywords:** because, in order to suggest, for the reason that\n\n• \"...described as 'modest'...most likely **because** it...\"\n• \"...characterizes the correlation as 'remarkable' **in order to suggest that**...\"\n• \"The author describes Jacob's narrative as an 'antidomestic novel' **for which one of the following reasons**?\"",
              "badge": "Rationale",
              "badgeColor": "green"
            },
            {
              "title": "Exemplification",
              "text": "**Keywords:** exemplifies, example of\n\n• \"Which one of the following quotations...best **exemplifies** the 'familiar' attitude mentioned...?\"\n• \"Of the following, which one is the best **example of** the use of 'designed offer'...?\"",
              "badge": "Example",
              "badgeColor": "slate"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Overarching Takeaway",
          "variant": "summary",
          "text": "Your goal is to function as a textual detective, using clues from the sentences immediately surrounding the target phrase to deduce its specific role and meaning in that exact location. The correct answer is not the dictionary definition, but the one that fits perfectly into the logic of the passage."
        },
        {
          "type": "h3",
          "text": "The Importance of Phrase Meaning Questions"
        },
        {
          "type": "paragraph",
          "text": "Phrase Meaning questions appear 106 times in the dataset, making up about 5% of all RC questions. This question type is a direct test of your ability to use context to determine an author's intent. While it seems simple, mastering this skill will improve your reading precision and help you avoid misinterpreting key claims, which is a valuable asset for answering every other question type in the section."
        }
      ],
    },
    glance: {
      label: 'At a Glance',
      content: [
        { type: 'h2', text: 'Phrase Meaning Questions — At a Glance' },
        { type: 'paragraph', text: 'These questions ask what a specific word or phrase means in context. With **106 appearances** (~5% of all RC questions), Phrase Meaning questions test whether you can determine the author\'s intended definition by reading the surrounding sentences rather than relying on a dictionary.' },
        {
          type: 'table',
          headers: ['Element', 'What to Look For', 'Core Skill', 'Common Trap'],
          rows: [
            ['Target phrase', 'A word or phrase the stem quotes or highlights', 'Locating the exact sentence and reading one sentence before and after', 'Relying on the most familiar dictionary definition instead of context'],
            ['Context clues', 'Contrast language, restatements, or concrete examples near the phrase', 'Using surrounding sentences to predict meaning before checking answers', 'Ignoring a nearby restatement that paraphrases the phrase in plain language'],
            ['Substitution fit', 'Whether the answer can replace the phrase without breaking the sentence', 'Mentally swapping each answer into the original sentence', 'Choosing a synonym that sounds right in isolation but distorts the sentence\'s logic'],
            ['Author\'s tone', 'Technical, metaphorical, ironic, or specialized usage', 'Matching the answer to the specific register the author is using', 'Picking a literal reading when the author is using the phrase figuratively']
          ]
        },
        { type: 'paragraph', text: 'Quick example: If the passage says a theory received "qualified approval," the word "qualified" does not mean "certified" — it means "limited" or "conditional." The sentence before likely explains the reservations, and that context is the real clue.' },
        {
          type: 'list',
          items: [
            'Locate the phrase and read the sentence it appears in plus one sentence on each side.',
            'Look for three high-value clues: contrast, restatement, and examples.',
            'Predict the meaning before looking at the answer choices.',
            'Test each answer by substituting it into the original sentence.',
            'If two answers survive substitution, pick the one that matches the author\'s tone and scope.'
          ]
        },
        { type: 'callout', variant: 'tip', title: 'Key Principle', text: 'The correct answer is the definition that fits this passage, not the definition that fits a dictionary. Context always overrides familiarity.' }
      ]
    }
  }
};
