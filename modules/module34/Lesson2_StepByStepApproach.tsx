import { Lesson } from '../../types';

export const Lesson2_StepByStepApproach: Lesson = {
  id: "34-2",
  title: "Step-by-Step: Phrase Meaning",
  content: [
    { type: 'h3', text: "Step-by-Step: Phrase Meaning" },
    { type: 'h4', text: "Step 1: Locate the Phrase and Read the Surrounding Context" },
    { type: 'paragraph', text: "Find the specific word or phrase in the passage. Read the sentence it's in, as well as the sentences immediately before and after it. This context is the primary clue to the phrase's specific, intended meaning. Do not rely on your outside knowledge or a dictionary definition." },
    
    { type: 'h4', text: "Step 2: Predict the Meaning Based on Its Role" },
    { type: 'paragraph', text: "Before looking at the answer choices, try to define the phrase's function in the sentence. Ask yourself, \"What job is this word or phrase doing here?\" Is it supporting a point? Describing an attitude? Introducing a contrast? Formulate a rough prediction of the meaning based on this role." },
    { type: 'list', items: [
      "**Contrast clues:** Does the surrounding text tell you what the phrase is being contrasted with or set against?",
      "**Restatement clues:** Does the next sentence paraphrase the phrase in more ordinary language?",
      "**Example clues:** Does the passage immediately illustrate the phrase with concrete cases?",
      "**Example:** If the sentence is, \"The theory was met with qualified approval,\" you can predict that \"qualified\" means something like \"limited\" or \"not total,\" because it's modifying the word \"approval.\""
    ]},

    { type: 'h4', text: "Step 3: Test the Answer Choices by Substitution" },
    { type: 'paragraph', text: "Go through each answer choice and mentally substitute it into the original sentence where the phrase appeared. The correct answer will be the one that fits seamlessly into the sentence, preserving its original logic and meaning without creating an awkward or nonsensical statement." },
    { type: 'list', items: [
      "**Eliminate Mismatches:** If a substitution changes the sentence's meaning or makes it illogical, eliminate that choice."
    ]},
    
    { type: 'hr' },
    { type: 'h3', text: "If You Get Stuck Between Two Choices..." },
    { type: 'h4', text: "Tie-Breaker #1: The Tone and Scope Check" },
    { type: 'paragraph', text: "Reread the paragraph where the phrase appears and consider the author's overall tone and the specific topic being discussed. One of your final choices might be a plausible synonym in a general sense, but it might not fit the specific, sometimes technical or metaphorical, way the author is using the language. The correct answer will align perfectly with the tone (e.g., critical, neutral) and scope of the immediate discussion." },
    
    { type: 'h4', text: "Tie-Breaker #2: The \"Why This Word?\" Test" },
    { type: 'paragraph', text: "Ask yourself why the author chose this specific word instead of a more common synonym. Often, the author uses a particular word to convey a very precise shade of meaning. Look at your final two choices. One is often a generic, dictionary-like meaning, while the other is a more specific, context-shaped meaning. The correct answer is usually the one that best captures the specific nuance the author intended." }
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
          "type": "h4",
          "text": "Step 1: Locate the Phrase and Read the Surrounding Context"
        },
        {
          "type": "paragraph",
          "text": "Find the specific word or phrase in the passage. Read the sentence it's in, as well as the sentences immediately before and after it. This context is the primary clue to the phrase's specific, intended meaning. Do not rely on your outside knowledge or a dictionary definition."
        },
        {
          "type": "h4",
          "text": "Step 2: Predict the Meaning Based on Its Role"
        },
        {
          "type": "paragraph",
          "text": "Before looking at the answer choices, try to define the phrase's function in the sentence. Ask yourself, \"What job is this word or phrase doing here?\" Is it supporting a point? Describing an attitude? Introducing a contrast? Formulate a rough prediction of the meaning based on this role."
        },
        {
          "type": "list",
          "items": [
            "**Example:** If the sentence is, \"The theory was met with qualified approval,\" you can predict that \"qualified\" means something like \"limited\" or \"not total,\" because it's modifying the word \"approval.\""
          ]
        },
        {
          "type": "h4",
          "text": "Step 3: Test the Answer Choices by Substitution"
        },
        {
          "type": "paragraph",
          "text": "Go through each answer choice and mentally substitute it into the original sentence where the phrase appeared. The correct answer will be the one that fits seamlessly into the sentence, preserving its original logic and meaning without creating an awkward or nonsensical statement."
        },
        {
          "type": "list",
          "items": [
            "**Eliminate Mismatches:** If a substitution changes the sentence's meaning or makes it illogical, eliminate that choice."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "If You Get Stuck Between Two Choices..."
        },
        {
          "type": "h4",
          "text": "Tie-Breaker #1: The Tone and Scope Check"
        },
        {
          "type": "paragraph",
          "text": "Reread the paragraph where the phrase appears and consider the author's overall tone and the specific topic being discussed. One of your final choices might be a plausible synonym in a general sense, but it might not fit the specific, sometimes technical or metaphorical, way the author is using the language. The correct answer will align perfectly with the tone (e.g., critical, neutral) and scope of the immediate discussion."
        },
        {
          "type": "h4",
          "text": "Tie-Breaker #2: The \"Why This Word?\" Test"
        },
        {
          "type": "paragraph",
          "text": "Ask yourself why the author chose this specific word instead of a more common synonym. Often, the author uses a particular word to convey a very precise shade of meaning. Look at your final two choices. One is often a generic, common meaning, while the other is a more specific, nuanced meaning. The correct answer is usually the one that best captures the specific nuance the author intended."
        }
      ],
    },
    playbook: {
      label: 'Playbook',
      content: [
        { type: 'h2', text: 'Phrase Meaning — Playbook' },
        { type: 'callout', variant: 'tip', title: 'Timing Target', text: 'Budget about 60-75 seconds per Phrase Meaning question. Spend 20 seconds locating the phrase and reading context, 15 seconds predicting the meaning, and 30 seconds testing answers by substitution. These are among the fastest RC questions when you have a systematic approach.' },
        {
          type: 'process',
          steps: [
            'Locate the phrase in the passage. Read the sentence it appears in plus one sentence before and one sentence after.',
            'Scan for the three high-value context clues: contrast language (what it does not mean), restatement language (a paraphrase nearby), and examples (concrete cases that illustrate it).',
            'Predict the meaning in your own words before looking at answer choices.',
            'Test each answer by mentally substituting it into the original sentence. The correct answer preserves the sentence\'s logic without creating an awkward or nonsensical statement.',
            'If two answers survive substitution, apply the Tone and Scope Check: which one matches the author\'s register (technical, metaphorical, neutral) and the specific topic being discussed?'
          ]
        },
        {
          type: 'table',
          headers: ['If You See...', 'Do This'],
          rows: [
            ['A common word being used in an unusual way', 'Ignore your instinct to pick the familiar definition. Read the surrounding sentences to find what the author actually means.'],
            ['A contrast signal ("not X, but Y" or "unlike X")', 'The contrast tells you what the phrase does not mean. Use that to eliminate answers that match the rejected side.'],
            ['A restatement in the next sentence', 'The restatement is usually the closest match to the correct answer. Compare it directly to each choice.'],
            ['Two answers that both sound like reasonable synonyms', 'Substitute each into the original sentence. One will subtly change the sentence\'s meaning; the other will preserve it perfectly.'],
            ['A "Rationale" stem asking why the author used a specific word', 'Shift from meaning to motive: the answer must explain the author\'s reason for choosing that word, not just define it.']
          ]
        },
        { type: 'callout', variant: 'summary', title: 'Method Chain', text: 'Locate phrase + context --> Scan for contrast, restatement, and examples --> Predict meaning --> Substitute answers into original sentence --> Tone and Scope Check on finalists. The substitution test is the single most reliable filter for this question type.' }
      ]
    }
  }
};
