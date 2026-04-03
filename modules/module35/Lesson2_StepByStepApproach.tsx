import { Lesson } from '../../types';

export const Lesson2_StepByStepApproach: Lesson = {
  id: "35-2",
  title: "Step-by-Step: Phrase Function",
  content: [
    { type: 'h3', text: "Step-by-Step: Phrase Function" },
    { type: 'h4', text: "Step 1: Locate the Phrase and Identify Its Local Context" },
    { type: 'paragraph', text: "Find the specific word, phrase, or example in the passage. Read the sentence it's in and the sentences immediately before and after. Your primary goal is to understand the \"local\" point the author is making in that immediate part of the text." },
    
    { type: 'h4', text: "Step 2: Determine the Phrase's Relationship to the Local Point" },
    { type: 'paragraph', text: "Ask yourself, \"How does this specific detail relate to the sentence or idea right before it?\" You are looking for its logical role. Is it:" },
    { type: 'list', items: [
      "**Providing Evidence for a claim just made?**",
      "**Giving an Example to illustrate a concept?**",
      "**Acknowledging a Counterargument or concession?**",
      "**Offering a Definition or clarification?**",
      "**Stating the Cause or Effect of something just mentioned?**"
    ]},
    { type: 'paragraph', text: "Formulate a prediction based on this relationship (e.g., \"The author includes this to prove the previous sentence's point.\")." },
    { type: 'callout', title: "Function Test", variant: "summary", text: "Keep the distinction explicit: **what happens here** is the local content; **why the author put it here** is the function. Phrase Function questions are won by the second job." },

    { type: 'h4', text: "Step 3: Test Each Answer Choice Against Your Prediction" },
    { type: 'paragraph', text: "Evaluate each answer choice, which will be phrased in abstract, functional terms. The correct answer will be the one that accurately describes the rhetorical job the phrase is doing, as you predicted in Step 2. Look for verbs like \"illustrate,\" \"support,\" \"contrast,\" \"refute,\" or \"clarify.\"" },
    { type: 'paragraph', text: "**Important:** Eliminate answer choices that accurately describe what the phrase says but fail to describe why it's there." },
    
    { type: 'hr' },
    { type: 'h3', text: "If You Get Stuck Between Two Choices..." },
    { type: 'h4', text: "Tie-Breaker #1: The \"In Order to\" Test" },
    { type: 'paragraph', text: "Rephrase your final two choices using the structure: \"The author included [the specific phrase] in order to [the function described in the answer choice].\" Then, reread the surrounding paragraph. Which of the two resulting sentences makes the most logical sense in the context of the author's argument? This test forces you to focus on the author's intent." },
    
    { type: 'h4', text: "Tie-Breaker #2: Zoom Out and Connect to the Paragraph's Purpose" },
    { type: 'paragraph', text: "If the local context isn't enough to decide, zoom out and ask: \"What is the main purpose of this entire paragraph?\" The correct function of the specific phrase will ultimately serve the larger purpose of its paragraph. One of your final choices might describe a plausible local function that is disconnected from the paragraph's main goal, while the correct choice will fit both the local context and the paragraph's overall objective." }
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
          "text": "Step 1: Locate the Phrase and Identify Its Local Context"
        },
        {
          "type": "paragraph",
          "text": "Find the specific word, phrase, or example in the passage. Read the sentence it's in and the sentences immediately before and after. Your primary goal is to understand the \"local\" point the author is making in that immediate part of the text."
        },
        {
          "type": "h4",
          "text": "Step 2: Determine the Phrase's Relationship to the Local Point"
        },
        {
          "type": "paragraph",
          "text": "Ask yourself, \"How does this specific detail relate to the sentence or idea right before it?\" You are looking for its logical role. Is it:"
        },
        {
          "type": "list",
          "items": [
            "**Providing Evidence for a claim just made?**",
            "**Giving an Example to illustrate a concept?**",
            "**Acknowledging a Counterargument or concession?**",
            "**Offering a Definition or clarification?**",
            "**Stating the Cause or Effect of something just mentioned?**"
          ]
        },
        {
          "type": "paragraph",
          "text": "Formulate a prediction based on this relationship (e.g., \"The author includes this to prove the previous sentence's point.\")."
        },
        {
          "type": "h4",
          "text": "Step 3: Test Each Answer Choice Against Your Prediction"
        },
        {
          "type": "paragraph",
          "text": "Evaluate each answer choice, which will be phrased in abstract, functional terms. The correct answer will be the one that accurately describes the rhetorical job the phrase is doing, as you predicted in Step 2. Look for verbs like \"illustrate,\" \"support,\" \"contrast,\" \"refute,\" or \"clarify.\""
        },
        {
          "type": "paragraph",
          "text": "**Important:** Eliminate answer choices that accurately describe what the phrase says but fail to describe why it's there."
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
          "text": "Tie-Breaker #1: The \"In Order to\" Test"
        },
        {
          "type": "paragraph",
          "text": "Rephrase your final two choices using the structure: \"The author included [the specific phrase] in order to [the function described in the answer choice].\" Then, reread the surrounding paragraph. Which of the two resulting sentences makes the most logical sense in the context of the author's argument? This test forces you to focus on the author's intent."
        },
        {
          "type": "h4",
          "text": "Tie-Breaker #2: Zoom Out and Connect to the Paragraph's Purpose"
        },
        {
          "type": "paragraph",
          "text": "If the local context isn't enough to decide, zoom out and ask: \"What is the main purpose of this entire paragraph?\" The correct function of the specific phrase will ultimately serve the larger purpose of its paragraph. One of your final choices might describe a plausible local function that is disconnected from the paragraph's main goal, while the correct choice will fit both the local context and the paragraph's overall objective."
        }
      ],
    },
    playbook: {
      label: 'Playbook',
      content: [
        { type: 'h2', text: 'Phrase Function — Playbook' },
        { type: 'callout', variant: 'tip', title: 'Timing Target', text: 'Budget about 75-90 seconds per Phrase Function question. Spend 25 seconds locating the detail and reading its local context, 25 seconds classifying the rhetorical role, and 30 seconds testing answer choices against your prediction. If stuck, allow 15 seconds for the paragraph-purpose zoom-out.' },
        {
          type: 'process',
          steps: [
            'Find the phrase, reference, or example in the passage. Read the sentence it appears in plus one sentence before and one sentence after.',
            'Determine the local point the author is making in that immediate context. Ask: "What claim or idea is being developed right here?"',
            'Classify the detail\'s rhetorical role: Is it providing evidence? Giving an example? Acknowledging a counterargument? Offering a definition? Stating a cause or effect?',
            'Formulate a prediction using "in order to" language: "The author included [this detail] in order to [role]."',
            'Test each answer choice against your prediction. Eliminate any answer that describes what the detail says rather than why it is there.'
          ]
        },
        {
          type: 'table',
          headers: ['If You See...', 'Do This'],
          rows: [
            ['An answer that accurately paraphrases the detail\'s content', 'Check whether it also names the rhetorical purpose. If it only says what the detail is about, reject it.'],
            ['An answer using verbs like "illustrate," "support," "contrast," or "refute"', 'These are function verbs. Verify that the specific verb matches the relationship you identified between the detail and the surrounding argument.'],
            ['A stem that asks about an example (e.g., "the author presents the example of X in order to...")', 'The function of an example is almost always to illustrate or support a claim made in the sentence before. Find that claim first.'],
            ['Two finalists that name different functions for the same detail', 'Apply the "In Order To" test: rephrase each finalist as "The author included [detail] in order to [answer choice]" and reread the paragraph. The more logical sentence wins.'],
            ['A detail that seems to serve the passage\'s thesis but the paragraph is about something narrower', 'Prefer the paragraph-level function over the passage-level function. The correct answer ties the detail to its immediate structural context.']
          ]
        },
        { type: 'callout', variant: 'summary', title: 'Method Chain', text: 'Locate detail + local context --> Identify the local point being developed --> Classify the rhetorical role --> Predict with "in order to" framing --> Eliminate content-only answers. The "in order to" test is the decisive filter: if the answer cannot finish that sentence naturally, it is wrong.' }
      ]
    }
  }
};
