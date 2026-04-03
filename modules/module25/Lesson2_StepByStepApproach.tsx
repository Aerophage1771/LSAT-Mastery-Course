import { Lesson } from '../../types';

export const Lesson2_StepByStepApproach: Lesson = {
  id: "25-2",
  title: "Step-by-Step: Inference",
  content: [
    { type: 'h3', text: "Step-by-Step: Inference" },
    { type: 'callout', title: "Run Two Stem Checks First", variant: "summary", text: "Before touching the answers, ask **whose perspective?** and **what exact issue?** If the stem points to one named speaker or one narrow topic, that often tells you where the support lives. If it does not, you may need to treat the whole passage as live territory." },
    { type: 'process', steps: [
      "Scan for stated Answer Choices First",
      "Look for Direct Matches",
      "Eliminate Obvious Falsities",
      "Locate & Clarify Uncertain Choices",
      "Validate Indirect Inferences"
    ]},
    { type: 'h4', text: "Step 1: Scan for stated Answer Choices First" },
    { type: 'paragraph', text: "Look for an answer that matches a detail you confidently recall. If you are absolutely sure it is supported and know why the others are likely wrong, select it and move on." },
    
    { type: 'h4', text: "Step 2: Look for Direct Matches" },
    { type: 'paragraph', text: "If no immediate answer stands out, scan the choices again for any that are close paraphrases of statements made in the text. This is often the quickest path to a correct answer." },
    
    { type: 'h4', text: "Step 3: Eliminate Obvious Falsities" },
    { type: 'paragraph', text: "If no direct match exists, review the remaining choices to identify and eliminate any that are obviously untrue or in direct conflict with the passage's main points or tone. This narrows the field of contenders." },
    
    { type: 'h4', text: "Step 4: Locate & Clarify Uncertain Choices" },
    { type: 'paragraph', text: "For the remaining choices that are in scope but you are unsure about, classify the information they contain (e.g., \"this is about the author's opinion,\" \"this is a scientific detail\"). Then, search the passage for where that specific topic is discussed. This targeted search is more efficient than reading." },
    { type: 'callout', title: "Only Go Back When You Know Where To Look", variant: "tip", text: "Do not reread randomly. If you cannot name the paragraph, sentence zone, speaker, or issue that would support an answer, the better move is usually to compare the remaining choices first and narrow the field before going back." },
    
    { type: 'h4', text: "Step 5: Validate Indirect Inferences" },
    { type: 'paragraph', text: "For your top contenders, look for how information from different parts of the passage connects indirectly to prove the answer choice. These longer inferences are often a point of difficulty but can net you crucial points if you can trace the logical steps." },
    { type: 'list', items: [
      "**Causality:** If an answer choice involves one thing causing another, look for signal words like *because, since, as a result, therefore, due to, consequently*.",
      "**Contrasts:** Look for words like *however, but, in contrast, unlike, while*. If the passage contrasts A and B, a stated fact about A often allows you to infer the opposite about B.",
      "**Definitions & Examples:** When a passage defines a category and then gives an example, you can infer that the example has the characteristics of that category."
    ]}
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h3",
          "text": "Step-by-Step Approach"
        },
        {
          "type": "process",
          "steps": [
            "Scan for stated Answer Choices First",
            "Look for Direct Matches",
            "Eliminate Obvious Falsities",
            "Locate & Clarify Uncertain Choices",
            "Validate Indirect Inferences"
          ]
        },
        {
          "type": "h4",
          "text": "Step 1: Scan for stated Answer Choices First"
        },
        {
          "type": "paragraph",
          "text": "Look for an answer that matches a detail you confidently recall. If you are absolutely sure it is supported and know why the others are likely wrong, select it and move on."
        },
        {
          "type": "h4",
          "text": "Step 2: Look for Direct Matches"
        },
        {
          "type": "paragraph",
          "text": "If no immediate answer stands out, scan the choices again for any that are close paraphrases of statements made in the text. This is often the quickest path to a correct answer."
        },
        {
          "type": "h4",
          "text": "Step 3: Eliminate Obvious Falsities"
        },
        {
          "type": "paragraph",
          "text": "If no direct match exists, review the remaining choices to identify and eliminate any that are obviously untrue or in direct conflict with the passage's main points or tone. This narrows the field of contenders."
        },
        {
          "type": "h4",
          "text": "Step 4: Locate & Clarify Uncertain Choices"
        },
        {
          "type": "paragraph",
          "text": "For the remaining choices that are in scope but you are unsure about, classify the information they contain (e.g., \"this is about the author's opinion,\" \"this is a scientific detail\"). Then, search the passage for where that specific topic is discussed. This targeted search is more efficient than reading."
        },
        {
          "type": "h4",
          "text": "Step 5: Validate Indirect Inferences"
        },
        {
          "type": "paragraph",
          "text": "For your top contenders, look for how information from different parts of the passage connects indirectly to prove the answer choice. These longer inferences are often a point of difficulty but can net you crucial points if you can trace the logical steps."
        },
        {
          "type": "list",
          "items": [
            "**Causality:** If an answer choice involves one thing causing another, look for signal words like *because, since, as a result, therefore, due to, consequently*.",
            "**Contrasts:** Look for words like *however, but, in contrast, unlike, while*. If the passage contrasts A and B, a stated fact about A often allows you to infer the opposite about B.",
            "**Definitions & Examples:** When a passage defines a category and then gives an example, you can infer that the example has the characteristics of that category."
          ]
        }
      ],
    },
    playbook: {
      label: "Playbook",
      content: [
        { type: 'process', title: "RC Inference — 5-Step Playbook", steps: [
          "Run two stem checks: whose perspective? what exact issue? These constrain where to look.",
          "Scan all choices for one that directly matches a detail you confidently recall from the passage.",
          "Eliminate choices that are obviously false or contradict the passage's main points or tone.",
          "For uncertain choices, classify the topic (author's view, a scientific detail, a named group), then locate the relevant passage zone — don't reread blindly.",
          "Validate survivors: trace the logical steps that link passage text to the answer. Accept cautious wording; reject absolute claims without absolute evidence."
        ]},
        { type: 'callout', variant: 'tip', title: "Only Go Back When You Know Where", text: "If you cannot name the paragraph, sentence zone, or speaker that would support an answer, compare the remaining choices first to narrow the field before returning to the text." },
        { type: 'list', items: [
          "**Causality signals:** because, since, as a result, therefore, due to, consequently",
          "**Contrast signals:** however, but, in contrast, unlike, while — if passage contrasts A and B, a fact about A lets you infer the opposite about B",
          "**Definition/example logic:** If the passage defines a category and gives an example, the example shares all traits of that category"
        ]},
        { type: 'callout', variant: 'summary', title: "Quick Reminder", text: "Inference ≠ speculation. Every correct answer has a specific passage location that forces it to be true. \"Could be true\" is not good enough — the answer must be unavoidable." }
      ],
    },
  },
};
