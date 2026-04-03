import { Lesson } from '../../types';

export const Lesson2_StepByStepApproach: Lesson = {
  id: "31-2",
  title: "Step-by-Step: Complete the Passage",
  content: [
    { type: 'h3', text: "Step-by-Step: Complete the Passage" },
    { type: 'h4', text: "Step 1: Identify the Role of the Final Paragraph" },
    { type: 'paragraph', text: "Before reading the answer choices, re-read the final paragraph and determine its specific function in the passage. Is it:" },
    { type: 'list', items: [
      "Providing a final piece of evidence?",
      "Proposing a solution to a problem raised earlier?",
      "Summarizing the main argument?",
      "Discussing the implications or future of the topic?"
    ]},
    
    { type: 'h4', text: "Step 2: Predict the Logical Next Thought" },
    { type: 'paragraph', text: "Based on the paragraph's function, anticipate what the final sentence should accomplish. The concluding sentence should bring the paragraph's specific point to a close in a way that feels natural and final. For example, if the paragraph introduced a solution, the last sentence might describe the expected outcome or a remaining challenge." },
    { type: 'table', headers: ["If the final paragraph is doing this...", "The next logical thought often does this..."], rows: [
      ["Phenomenon-hypothesis evaluation", "Clarifies which explanation the author favors or why a rival explanation falls short."],
      ["Problem -> endorsed solution", "States the benefit, implication, or rationale for the endorsed solution."],
      ["Problem -> criticized or competing solutions", "Explains why the visible solution set is inadequate or conflicted."],
      ["Problem -> no endorsed solution", "Returns to the significance, persistence, or difficulty of the problem instead of forcing a fake resolution."]
    ]},
    
    { type: 'h4', text: "Step 3: Test Each Answer Choice Against Your Prediction and the Passage's Scope" },
    { type: 'paragraph', text: "Evaluate each answer choice based on the following criteria:" },
    { type: 'list', items: [
      "**Logical Flow:** Does it follow naturally from the sentence immediately preceding it?",
      "**Paragraph Cohesion:** Does it provide a fitting conclusion to the specific point being made in the final paragraph?",
      "**Passage Scope:** Does it stay within the scope of the passage, or does it introduce new, unsupported topics or claims?",
      "**Tone Consistency:** Does it match the author's established tone (e.g., critical, objective, optimistic)?"
    ]},
    { type: 'paragraph', text: "Eliminate any choice that introduces an outside idea, contradicts an earlier point, or abruptly changes the subject." },
    
    { type: 'hr' },
    { type: 'h3', text: "If You Get Stuck Between Two Choices..." },
    { type: 'h4', text: "Tie-Breaker #1: The \"Why Is This Here?\" Test" },
    { type: 'paragraph', text: "Look at your final two choices. One often serves as a tight, logical conclusion to the immediate paragraph, while the other might make a broader, more general statement that could fit elsewhere. The best answer will almost always be the one that most directly and logically concludes the specific line of reasoning developed in that final paragraph." },
    
    { type: 'h4', text: "Tie-Breaker #2: Check for Consistency with the Main Point" },
    { type: 'paragraph', text: "Re-read your final two options and compare them to the passage's overall main point. The correct concluding sentence will not only wrap up the final paragraph but will also feel consistent with, and often subtly reinforce, the entire passage's central argument. If one choice feels slightly disconnected from the \"big picture,\" it's likely incorrect." }
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
          "text": "Step 1: Identify the Role of the Final Paragraph"
        },
        {
          "type": "paragraph",
          "text": "Before reading the answer choices, re-read the final paragraph and determine its specific function in the passage. Is it:"
        },
        {
          "type": "list",
          "items": [
            "Providing a final piece of evidence?",
            "Proposing a solution to a problem raised earlier?",
            "Summarizing the main argument?",
            "Discussing the implications or future of the topic?"
          ]
        },
        {
          "type": "h4",
          "text": "Step 2: Predict the Logical Next Thought"
        },
        {
          "type": "paragraph",
          "text": "Based on the paragraph's function, anticipate what the final sentence should accomplish. The concluding sentence should bring the paragraph's specific point to a close in a way that feels natural and final. For example, if the paragraph introduced a solution, the last sentence might describe the expected outcome or a remaining challenge."
        },
        {
          "type": "h4",
          "text": "Step 3: Test Each Answer Choice Against Your Prediction and the Passage's Scope"
        },
        {
          "type": "paragraph",
          "text": "Evaluate each answer choice based on the following criteria:"
        },
        {
          "type": "list",
          "items": [
            "**Logical Flow:** Does it follow naturally from the sentence immediately preceding it?",
            "**Paragraph Cohesion:** Does it provide a fitting conclusion to the specific point being made in the final paragraph?",
            "**Passage Scope:** Does it stay within the scope of the passage, or does it introduce new, unsupported topics or claims?",
            "**Tone Consistency:** Does it match the author's established tone (e.g., critical, objective, optimistic)?"
          ]
        },
        {
          "type": "paragraph",
          "text": "Eliminate any choice that introduces an outside idea, contradicts an earlier point, or abruptly changes the subject."
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
          "text": "Tie-Breaker #1: The \"Why Is This Here?\" Test"
        },
        {
          "type": "paragraph",
          "text": "Look at your final two choices. One often serves as a tight, logical conclusion to the immediate paragraph, while the other might make a broader, more general statement that could fit elsewhere. The best answer will almost always be the one that most directly and logically concludes the specific line of reasoning developed in that final paragraph."
        },
        {
          "type": "h4",
          "text": "Tie-Breaker #2: Check for Consistency with the Main Point"
        },
        {
          "type": "paragraph",
          "text": "Re-read your final two options and compare them to the passage's overall main point. The correct concluding sentence will not only wrap up the final paragraph but will also feel consistent with, and often subtly reinforce, the entire passage's central argument. If one choice feels slightly disconnected from the \"big picture,\" it's likely incorrect."
        }
      ],
    },
    playbook: {
      label: "Playbook",
      content: [
        { type: 'h2', text: "RC Complete the Passage — Playbook" },
        { type: 'callout', variant: 'tip', title: "Timing Target", text: "Complete the Passage questions are rare (only 5 in the pool) but methodical. Spend ~20 seconds re-reading the final paragraph and predicting what the last sentence should accomplish before looking at any choices. This prediction step prevents you from being pulled toward attractive but off-scope answers." },
        { type: 'process', title: "Complete the Passage Method", steps: [
          "Identify the final paragraph's role: Re-read the final paragraph and classify its function — is it providing evidence, proposing a solution, summarizing the argument, evaluating implications, or explaining why a problem persists?",
          "Predict the logical next thought: Based on the paragraph's function, anticipate what the concluding sentence should accomplish. If the paragraph introduced a solution, the last sentence might address the expected outcome or a remaining challenge.",
          "Test each answer against four criteria: (1) Does it follow naturally from the immediately preceding sentence? (2) Does it close the paragraph's specific point? (3) Does it stay within the passage's established scope? (4) Does it match the author's tone?",
        ]},
        { type: 'table', headers: ["If the final paragraph does this...", "The concluding sentence should do this"], rows: [
          ["Evaluates competing explanations for a phenomenon", "Clarify which explanation the author favors or why a rival falls short"],
          ["Proposes or endorses a solution to a problem", "State the benefit, implication, or rationale for the endorsed solution"],
          ["Criticizes existing solutions or shows they conflict", "Explain why the visible solution set is inadequate or conflicted"],
          ["Presents a problem without endorsing any solution", "Return to the significance, persistence, or difficulty of the problem — do not force a fake resolution"],
          ["Discusses future implications of a development", "Close with the most important consequence or the condition that determines the outcome"],
        ]},
        { type: 'callout', variant: 'summary', title: "Method Chain", text: "Classify the final paragraph's function --> Predict what the concluding sentence should accomplish --> Test each answer for logical flow, paragraph cohesion, scope, and tone --> Eliminate anything that introduces a new topic or contradicts an earlier point --> Confirm the winner reinforces the passage's central argument." },
      ],
    },
  },
};
