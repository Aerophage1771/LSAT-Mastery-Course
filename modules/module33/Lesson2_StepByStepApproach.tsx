import { Lesson } from '../../types';

export const Lesson2_StepByStepApproach: Lesson = {
  id: "33-2",
  title: "Step-by-Step: Passage Principle",
  content: [
    { type: 'h3', text: "Step-by-Step: Passage Principle" },
    { type: 'h4', text: "Step 1: Isolate the Specific Argument or Action" },
    { type: 'paragraph', text: "Go to the part of the passage that the question directs you to. Identify the specific judgment, conclusion, or action being taken by the author or a subject in the text. Your goal is to understand the precise, concrete situation you need to generalize." },
    { type: 'list', items: [
      "**Example:** If the passage states, \"The court ruled against the company because its advertisement, while not technically false, was clearly designed to mislead consumers,\" you've isolated the specific situation."
    ]},
    
    { type: 'h4', text: "Step 2: Formulate the Underlying Rule" },
    { type: 'paragraph', text: "Ask yourself, \"What general rule or belief would justify this specific argument or action?\" You are moving from the specific to the general. Your goal is to create an abstract principle that the person or group in the passage is logically applying." },
    { type: 'list', items: [
      "**Example (cont.):** The underlying rule would be something like, \"An action's ethical value should be judged by its intended effect, not just its literal truthfulness.\""
    ]},

    { type: 'h4', text: "Step 3: Test Each Answer Choice Against Your Rule" },
    { type: 'paragraph', text: "Evaluate each answer choice, which will be phrased as a general principle. The correct answer will be the one that is a perfect abstract match for the rule you formulated in Step 2." },
    { type: 'list', items: [
      "**Too Specific:** Eliminate any choice that is just a restatement of the specific facts.",
      "**Too Broad:** Eliminate any choice that is so general it loses the core logic of the situation.",
      "**Mismatch:** Eliminate any choice that introduces an element not present in the original reasoning."
    ]},
    
    { type: 'hr' },
    { type: 'h3', text: "If You Get Stuck Between Two Choices..." },
    { type: 'h4', text: "Tie-Breaker #1: The Justification Test" },
    { type: 'paragraph', text: "Take each of your final two answer choices and use them as a premise. Ask for each one: \"If I assume this principle is true, does it force me to accept the specific conclusion or action from the passage?\" The correct principle will provide the strongest and most direct logical justification for the specific scenario in the text. The incorrect one might be related, but it won't be the necessary and sufficient reason for the outcome." },
    
    { type: 'h4', text: "Tie-Breaker #2: Focus on the Difference" },
    { type: 'paragraph', text: "Stop looking at how your final contenders are similar. Instead, isolate the single key difference between the two principles. Is one about intentions while the other is about outcomes? Is one about individual rights and the other about societal good? Once you've identified this core contrast, go back to the specific situation in the passage one last time and determine which of these abstract concepts is the true driving force behind the reasoning." }
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
          "text": "Step 1: Isolate the Specific Argument or Action"
        },
        {
          "type": "paragraph",
          "text": "Go to the part of the passage that the question directs you to. Identify the specific judgment, conclusion, or action being taken by the author or a subject in the text. Your goal is to understand the precise, concrete situation you need to generalize."
        },
        {
          "type": "list",
          "items": [
            "**Example:** If the passage states, \"The court ruled against the company because its advertisement, while not technically false, was clearly designed to mislead consumers,\" you've isolated the specific situation."
          ]
        },
        {
          "type": "h4",
          "text": "Step 2: Formulate the Underlying Rule"
        },
        {
          "type": "paragraph",
          "text": "Ask yourself, \"What general rule or belief would justify this specific argument or action?\" You are moving from the specific to the general. Your goal is to create an abstract principle that the person or group in the passage is logically applying."
        },
        {
          "type": "list",
          "items": [
            "**Example (cont.):** The underlying rule would be something like, \"An action's ethical value should be judged by its intended effect, not just its literal truthfulness.\""
          ]
        },
        {
          "type": "h4",
          "text": "Step 3: Test Each Answer Choice Against Your Rule"
        },
        {
          "type": "paragraph",
          "text": "Evaluate each answer choice, which will be phrased as a general principle. The correct answer will be the one that is a perfect abstract match for the rule you formulated in Step 2."
        },
        {
          "type": "list",
          "items": [
            "**Too Specific:** Eliminate any choice that is just a restatement of the specific facts.",
            "**Too Broad:** Eliminate any choice that is so general it loses the core logic of the situation.",
            "**Mismatch:** Eliminate any choice that introduces an element not present in the original reasoning."
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
          "text": "Tie-Breaker #1: The Justification Test"
        },
        {
          "type": "paragraph",
          "text": "Take each of your final two answer choices and use them as a premise. Ask for each one: \"If I assume this principle is true, does it force me to accept the specific conclusion or action from the passage?\" The correct principle will provide the strongest and most direct logical justification for the specific scenario in the text. The incorrect one might be related, but it won't be the necessary and sufficient reason for the outcome."
        },
        {
          "type": "h4",
          "text": "Tie-Breaker #2: Focus on the Difference"
        },
        {
          "type": "paragraph",
          "text": "Stop looking at how your final contenders are similar. Instead, isolate the single key difference between the two principles. Is one about intentions while the other is about outcomes? Is one about individual rights and the other about societal good? Once you've identified this core contrast, go back to the specific situation in the passage one last time and determine which of these abstract concepts is the true driving force behind the reasoning."
        }
      ],
    },
    playbook: {
      label: 'Playbook',
      content: [
        { type: 'h2', text: 'Passage Principle — Playbook' },
        { type: 'callout', variant: 'tip', title: 'Timing Target', text: 'Budget about 90 seconds per Passage Principle question. Spend 30 seconds isolating the specific argument and formulating the underlying rule, 40 seconds testing answer choices against your rule, and 20 seconds on the tie-breaker if needed.' },
        {
          type: 'process',
          steps: [
            'Go to the part of the passage the stem directs you to. Identify the specific judgment, conclusion, or action being taken.',
            'Ask: "What general rule would justify this specific scenario?" Formulate a one-sentence abstract principle before looking at the answers.',
            'Test each answer choice against your rule. The correct answer is the abstract statement that, if true, would force the passage\'s specific conclusion.'
          ]
        },
        {
          type: 'table',
          headers: ['If You See...', 'Do This'],
          rows: [
            ['An answer that restates the passage\'s specific facts', 'Reject it -- it is too specific. The correct answer must be a general rule, not a factual summary.'],
            ['An answer that sounds philosophically true but is extremely broad', 'Check whether it actually forces the passage\'s conclusion. If it could justify many unrelated conclusions, it is too broad.'],
            ['An answer that introduces an element not present in the passage\'s reasoning', 'Reject it -- it is a mismatch. The principle must connect to the actual logic being used.'],
            ['A comparative stem asking about "both passages" or "Passage A but not B"', 'Test the principle against each passage\'s argument independently. The correct answer must fit the stem\'s scope exactly.'],
            ['Two finalists that both seem plausible', 'Use the Justification Test: assume each principle is true and ask which one directly forces the passage\'s outcome. Pick the stronger logical fit.']
          ]
        },
        { type: 'callout', variant: 'summary', title: 'Method Chain', text: 'Isolate specific scenario --> Formulate underlying rule --> Eliminate too-specific, too-broad, and mismatched answers --> Justification Test on finalists. The key move is building your own principle before you look at the answer choices.' }
      ]
    }
  }
};
