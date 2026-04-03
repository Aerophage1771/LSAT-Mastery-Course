import { Lesson } from '../../types';

export const Lesson2_StepByStepApproach: Lesson = {
  id: "36-2",
  title: "Step-by-Step: Paragraph Function",
  content: [
    { type: 'h3', text: "Step-by-Step: Paragraph Function" },
    { type: 'h4', text: "Step 1: Read and Summarize the Target Paragraph's Content" },
    { type: 'paragraph', text: "First, read the paragraph in question and create a quick, content-based summary. In one sentence, answer the question: \"What is this paragraph about?\" This ensures you understand what the paragraph says before you analyze what it does." },
    
    { type: 'h4', text: "Step 2: Analyze the Paragraph's Relationship to its Neighbors" },
    { type: 'paragraph', text: "Now, focus on the paragraph's role in the passage's structure. Ask yourself two key questions:" },
    { type: 'list', items: [
      "**How does it relate to the paragraph before it?** Does it provide evidence for a claim made in the previous paragraph? Does it introduce a counterargument? Does it shift to a new topic?",
      "**How does it set up the paragraph after it?** Does it pose a question that the next paragraph answers? Does it present a problem that the next paragraph solves?"
    ]},
    { type: 'paragraph', text: "Your goal is to define its job as a \"bridge\" in the author's argument." },
    { type: 'paragraph', text: "Keep this distinction active: **what happens in the paragraph** is content; **why the author put the paragraph there** is function. Hard wrong answers usually get the first right and miss the second." },
    { type: 'callout', title: "Function Standard", variant: "summary", text: "A correct answer must capture the author's main motivation for that paragraph and accurately describe something the paragraph actually does. If an answer only reports local content, it is incomplete." },
    { type: 'table', headers: ["Passage style", "Common paragraph jobs"], rows: [
      ["Debate / critique", "states a side, gives reasons for that side, rebuts it, or marks the author's alignment"],
      ["Single position", "adds support, clarifies a distinction, or deepens the same thesis"],
      ["Phenomenon-hypothesis", "states the puzzle, presents an explanation, or tests that explanation"],
      ["Problem-analysis", "diagnoses the problem, proposes or criticizes a solution, or explains why the problem persists"]
    ]},

    { type: 'h4', text: "Step 3: Test Each Answer Choice Against Your Analysis" },
    { type: 'paragraph', text: "Evaluate each answer choice, which will be phrased in abstract, functional language. The correct answer will be the one that accurately describes the paragraph's role in the overall flow of the passage, as you determined in Step 2." },
    { type: 'list', items: [
      "**Too Narrow:** Eliminate choices that only describe one detail within the paragraph, not its overall function.",
      "**Content-Only Trap:** Eliminate choices that report what happens in the paragraph but not why the author placed that material there.",
      "**Inaccurate Function:** Eliminate choices that misidentify the paragraph's role (e.g., calling it \"providing evidence\" when it is actually \"presenting a counterargument\")."
    ]},
    
    { type: 'hr' },
    { type: 'h3', text: "If You Get Stuck Between Two Choices..." },
    { type: 'h4', text: "Tie-Breaker #1: The Blueprint Check" },
    { type: 'paragraph', text: "Imagine the passage is a short speech. The paragraph before the target paragraph is Point A, and the paragraph after is Point C. What is the most logical way to get from A to C? The target paragraph is Point B, the necessary logical step. Reread your final two choices. Which one describes the more essential step in the author's overall argument? The correct answer will be the one that best fits into the logical \"blueprint\" of the passage." },
    
    { type: 'h4', text: "Tie-Breaker #2: Focus on the Verbs" },
    { type: 'paragraph', text: "Isolate the primary action verbs in your final two choices (e.g., \"elaborating on a theory\" vs. \"providing an example of a theory\"). Go back to the target paragraph. Is it filled with abstract, conceptual language (elaboration), or does it describe a specific, concrete situation (example)? This focus on the paragraph's actual content can help you decide which functional description is more precise." }
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
          "text": "Step 1: Read and Summarize the Target Paragraph's Content"
        },
        {
          "type": "paragraph",
          "text": "First, read the paragraph in question and create a quick, content-based summary. In one sentence, answer the question: \"What is this paragraph about?\" This ensures you understand what the paragraph says before you analyze what it does."
        },
        {
          "type": "h4",
          "text": "Step 2: Analyze the Paragraph's Relationship to its Neighbors"
        },
        {
          "type": "paragraph",
          "text": "Now, focus on the paragraph's role in the passage's structure. Ask yourself two key questions:"
        },
        {
          "type": "list",
          "items": [
            "**How does it relate to the paragraph before it?** Does it provide evidence for a claim made in the previous paragraph? Does it introduce a counterargument? Does it shift to a new topic?",
            "**How does it set up the paragraph after it?** Does it pose a question that the next paragraph answers? Does it present a problem that the next paragraph solves?"
          ]
        },
        {
          "type": "paragraph",
          "text": "Your goal is to define its job as a \"bridge\" in the author's argument."
        },
        {
          "type": "h4",
          "text": "Step 3: Test Each Answer Choice Against Your Analysis"
        },
        {
          "type": "paragraph",
          "text": "Evaluate each answer choice, which will be phrased in abstract, functional language. The correct answer will be the one that accurately describes the paragraph's role in the overall flow of the passage, as you determined in Step 2."
        },
        {
          "type": "list",
          "items": [
            "**Too Narrow:** Eliminate choices that only describe one detail within the paragraph, not its overall function.",
            "**Inaccurate Function:** Eliminate choices that misidentify the paragraph's role (e.g., calling it \"providing evidence\" when it is actually \"presenting a counterargument\")."
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
          "text": "Tie-Breaker #1: The Blueprint Check"
        },
        {
          "type": "paragraph",
          "text": "Imagine the passage is a short speech. The paragraph before the target paragraph is Point A, and the paragraph after is Point C. What is the most logical way to get from A to C? The target paragraph is Point B, the necessary logical step. Reread your final two choices. Which one describes the more essential step in the author's overall argument? The correct answer will be the one that best fits into the logical \"blueprint\" of the passage."
        },
        {
          "type": "h4",
          "text": "Tie-Breaker #2: Focus on the Verbs"
        },
        {
          "type": "paragraph",
          "text": "Isolate the primary action verbs in your final two choices (e.g., \"elaborating on a theory\" vs. \"providing an example of a theory\"). Go back to the target paragraph. Is it filled with abstract, conceptual language (elaboration), or does it describe a specific, concrete situation (example)? This focus on the paragraph's actual content can help you decide which functional description is more precise."
        }
      ],
    },
    playbook: {
      label: 'Playbook',
      content: [
        { type: 'h2', text: 'Paragraph Function — Playbook' },
        { type: 'callout', variant: 'tip', title: 'Timing Target', text: 'Budget about 75-90 seconds per Paragraph Function question. Spend 20 seconds summarizing the target paragraph, 25 seconds analyzing its relationship to neighbors, 25 seconds testing answer choices, and 15 seconds on the tie-breaker if needed.' },
        {
          type: 'process',
          steps: [
            'Read the target paragraph and summarize its content in one sentence: "This paragraph is about..."',
            'Read the paragraphs immediately before and after the target. Ask: "How does this paragraph bridge the argument from Point A to Point C?"',
            'Identify the passage style (debate, single-position, phenomenon-hypothesis, or problem-analysis) and match the paragraph\'s job to the expected roles for that style.',
            'Test each answer choice against your structural analysis. The correct answer must capture why the author placed the material there, not just what the material says.'
          ]
        },
        {
          type: 'table',
          headers: ['If You See...', 'Do This'],
          rows: [
            ['An answer that accurately describes the paragraph\'s topic', 'Check whether it also names the structural function. "Discusses X" is content; "provides evidence for X" is function. Only the second can be correct.'],
            ['An answer that names a function the paragraph does not actually perform', 'Even if the verb sounds right ("to refute"), verify that the paragraph actually does that job. A paragraph that presents a view is not the same as one that refutes it.'],
            ['A debate passage with the target paragraph in the middle', 'The middle paragraph in a debate usually presents the opposing side\'s reasons, rebuts the first side, or marks the author\'s position. Test each answer against these common jobs.'],
            ['A phenomenon-hypothesis passage with the target paragraph at the end', 'The final paragraph usually evaluates the hypothesis, introduces a complication, or signals the author\'s stance. Match accordingly.'],
            ['Two finalists that both seem partially correct', 'Apply the Blueprint Check: imagine the passage as a speech with Point A (before) and Point C (after). Which answer describes the most essential logical step between them?']
          ]
        },
        { type: 'callout', variant: 'summary', title: 'Method Chain', text: 'Summarize target paragraph --> Analyze neighbors (A-to-C bridge) --> Identify passage style and expected paragraph jobs --> Eliminate content-only answers --> Blueprint Check on finalists. The bridge analysis is the decisive move: if you know what comes before and after, the paragraph\'s job usually names itself.' }
      ]
    }
  }
};
