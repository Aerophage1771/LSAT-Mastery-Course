import { Lesson } from '../../types';

export const Lesson2_StepByStepApproach: Lesson = {
  id: "28-2",
  title: "Step-by-Step: Approach",
  content: [
    { type: 'h3', text: "Step-by-Step: Approach" },
    { type: 'h4', text: "Step 1: Create a Passage Blueprint" },
    { type: 'paragraph', text: "After reading, create a quick, high-level map of the passage's structure. For each paragraph, write a short, functional summary. Don't summarize the content; summarize the paragraph's job. Use abstract verbs to describe what the author is doing." },
    { type: 'list', items: [
      "**Example Blueprint:**",
      "Para 1: Introduces a common theory.",
      "Para 2: Presents evidence that challenges this theory.",
      "Para 3: Proposes an alternative theory.",
      "Para 4: Discusses the implications of the alternative theory."
    ]},
    { type: 'h4', text: "Step 1A: Form a Light Style Hypothesis" },
    { type: 'table', headers: ["If the passage mainly does this...", "Your approach hypothesis should sound like this..."], rows: [
      ["Tracks competing views and author alignment", "Debate / critique style"],
      ["Develops one position with dense support", "Single-position style"],
      ["Explains a puzzle through one or more hypotheses", "Phenomenon-hypothesis style"],
      ["Diagnoses a problem and evaluates solution space", "Problem-analysis style"],
      ["Highlights a person, work, event, or development and why it matters", "Spotlight style"],
      ["Blends two of the above", "Hybrid style — keep both layers active"]
    ]},
    { type: 'h4', text: "Step 1B: Use the Default Comparative Workflow" },
    { type: 'process', title: "House Method For Comparative Passages", steps: [
      "Read Passage A and summarize its main point and tone.",
      "Read Passage B while actively tracking similarities and differences from Passage A.",
      "State the relationship between the passages before you start serious answer sorting.",
      "Treat the split approach as an optional later experiment, not the default course method."
    ]},
    { type: 'callout', title: "Why This Is The Default", variant: "summary", text: "Comparative sets usually reward clean passage-to-passage tracking more than intricate paragraph labeling inside each short passage. The sequential method keeps Passage A and Passage B distinct while preserving the head-to-head comparison." },
    
    { type: 'h4', text: "Step 2: Match Your Blueprint to the Answer Choices" },
    { type: 'paragraph', text: "Systematically compare the structural description in each answer choice to the blueprint you created. The correct answer will be the one that most accurately maps the entire logical flow. Eliminate any choice that misrepresents the function or sequence of even one part of the passage. For comparative passages, your blueprint should map the relationship between the two passages (e.g., Passage A presents a theory; Passage B applies it to a specific case)." },
    
    { type: 'hr' },
    { type: 'h3', text: "If You Get Stuck Between Two Choices..." },
    { type: 'h4', text: "Tie-Breaker #1: Focus on the Verbs" },
    { type: 'paragraph', text: "Isolate the primary action verbs in your final two choices (e.g., \"refuting\" vs. \"qualifying,\" \"contrasting\" vs. \"evaluating\"). Go back to the passage and ask which verb more precisely describes what the author is actually doing. Does the author completely tear down the old theory (refute), or just point out its limitations while acknowledging some value (qualify)? This precision is often the deciding factor." },
    
    { type: 'h4', text: "Tie-Breaker #2: Check the Scope and Emphasis" },
    { type: 'paragraph', text: "Re-read your two final choices. Does one of them describe a minor, supporting part of the passage as if it were a main structural component? The best answer will accurately reflect the weight and emphasis the author gives to each part of the argument. For example, if the author spends three paragraphs critiquing a theory and one sentence mentioning an alternative, an answer describing the passage as \"contrasting two theories\" is likely less accurate than one describing it as \"critiquing a prevailing view.\"" }
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
          "text": "Step 1: Create a Passage Blueprint"
        },
        {
          "type": "paragraph",
          "text": "After reading, create a quick, high-level map of the passage's structure. For each paragraph, write a short, functional summary. Don't summarize the content; summarize the paragraph's job. Use abstract verbs to describe what the author is doing."
        },
        {
          "type": "list",
          "items": [
            "**Example Blueprint:**",
            "Para 1: Introduces a common theory.",
            "Para 2: Presents evidence that challenges this theory.",
            "Para 3: Proposes an alternative theory.",
            "Para 4: Discusses the implications of the alternative theory."
          ]
        },
        {
          "type": "h4",
          "text": "Step 2: Match Your Blueprint to the Answer Choices"
        },
        {
          "type": "paragraph",
          "text": "Systematically compare the structural description in each answer choice to the blueprint you created. The correct answer will be the one that most accurately maps the entire logical flow. Eliminate any choice that misrepresents the function or sequence of even one part of the passage. For comparative passages, your blueprint should map the relationship between the two passages (e.g., Passage A presents a theory; Passage B applies it to a specific case)."
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
          "text": "Tie-Breaker #1: Focus on the Verbs"
        },
        {
          "type": "paragraph",
          "text": "Isolate the primary action verbs in your final two choices (e.g., \"refuting\" vs. \"qualifying,\" \"contrasting\" vs. \"evaluating\"). Go back to the passage and ask which verb more precisely describes what the author is actually doing. Does the author completely tear down the old theory (refute), or just point out its limitations while acknowledging some value (qualify)? This precision is often the deciding factor."
        },
        {
          "type": "h4",
          "text": "Tie-Breaker #2: Check the Scope and Emphasis"
        },
        {
          "type": "paragraph",
          "text": "Re-read your two final choices. Does one of them describe a minor, supporting part of the passage as if it were a main structural component? The best answer will accurately reflect the weight and emphasis the author gives to each part of the argument. For example, if the author spends three paragraphs critiquing a theory and one sentence mentioning an alternative, an answer describing the passage as \"contrasting two theories\" is likely less accurate than one describing it as \"critiquing a prevailing view.\""
        }
      ],
    },
    playbook: {
      label: "Playbook",
      content: [
        { type: 'h2', text: "RC Approach — Playbook" },
        { type: 'callout', variant: 'tip', title: "Timing Target", text: "Approach questions reward strong reading notes. If you built a paragraph-level blueprint while reading (one sentence per paragraph describing its job), you can answer most Approach questions in under 60 seconds by matching your blueprint to the choices." },
        { type: 'process', title: "Approach Method", steps: [
          "Build a passage blueprint: Write a one-line functional summary for each paragraph using abstract verbs (introduces, challenges, proposes, evaluates). Summarize the paragraph's job, not its content.",
          "Form a style hypothesis: Classify the passage as debate/critique, single-position, phenomenon-hypothesis, problem-analysis, spotlight, or hybrid.",
          "For comparative sets, state the relationship between passages before touching answers: How do passage A and passage B relate? Agreement, disagreement, different methods for the same question, or complementary angles?",
          "Match your blueprint to the answer choices: Check that the verbs and sequence in the answer match your blueprint. If an answer says \"refuting\" but the author only \"qualified,\" eliminate it.",
        ]},
        { type: 'table', headers: ["If you see this in the stem...", "Do this"], rows: [
          ["\"both do which of the following\"", "Find the shared structural move — the technique both authors use, not a content overlap"],
          ["\"differ in which of the following ways\"", "Isolate the structural contrast: one author does X while the other does Y"],
          ["\"passage can most accurately be described as\"", "Pick the answer whose verbs and sequence match the full blueprint, not just one paragraph"],
          ["\"argumentative structures of the two passages\"", "Compare your blueprints side by side and find the answer that captures the structural relationship"],
          ["Stuck between two choices", "Focus on the primary action verb in each choice — does the author \"refute\" (completely tear down) or \"qualify\" (limit while partly accepting)?"],
        ]},
        { type: 'callout', variant: 'summary', title: "Method Chain", text: "Blueprint each paragraph's job --> Classify the passage style --> For comparative sets, state the relationship first --> Match blueprint to answer choices by verbs and sequence --> When stuck, isolate the verb that separates your finalists." },
      ],
    },
  },
};
