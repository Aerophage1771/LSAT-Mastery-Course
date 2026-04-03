import { Lesson } from '../../types';

export const Lesson2_StepByStepApproach: Lesson = {
  id: "30-2",
  title: "Step-by-Step: Author Viewpoint",
  content: [
    { type: 'h3', text: "Step-by-Step: Author Viewpoint" },
    { type: 'callout', title: "Start With The Stem's Exact Issue", variant: "summary", text: "Even when the speaker is fixed as the author, the issue is not. Before you synthesize anything, ask: **what exact claim, topic, or dispute is the stem asking about?** Hard Author Viewpoint misses often come from giving the author's general outlook when the stem asks about a narrower issue." },
    { type: 'h4', text: "Step 1: Synthesize the Author's Core Argument and Tone" },
    { type: 'paragraph', text: "Before looking at the answers, consolidate your understanding of the author's perspective. Don't just find the main point; internalize their entire stance. Ask yourself:" },
    { type: 'list', items: [
      "What is their central claim or thesis?",
      "What is their attitude toward the main subject (e.g., critical, supportive, objective)?",
      "What are the main reasons they provide to support their claims?"
    ]},
    { type: 'table', headers: ["Party", "Claim", "Reasons offered", "Author's stance"], rows: [
      ["Author", "What do they ultimately want you to accept?", "What evidence or logic do they rely on?", "Support, qualify, or criticize?"],
      ["Competing view", "What position is being reported or challenged?", "What reasons are given for it?", "Does the author reject it fully or only in part?"],
      ["Any third party", "What narrower claim belongs to that voice?", "What evidence belongs to them?", "Keep ownership separate from approval."]
    ]},
    
    { type: 'h4', text: "Step 2: Treat Each Answer Choice as a Hypothesis to Be Proven" },
    { type: 'paragraph', text: "For each answer choice, your task is to find a specific sentence or set of sentences in the passage that directly supports it. Ask yourself, \"Can I point to a line in the text that makes this statement true?\"" },
    { type: 'list', items: [
      "**Issue check:** Is the answer about the exact topic the stem asks about, or does it drift to a nearby claim the author also discusses?",
      "**Find Direct Proof:** The correct answer will be a direct consequence of the text. Look for a \"verifying quotation\" that logically proves the answer choice.",
      "**Eliminate Unsupported Claims:** If you cannot find clear textual evidence to support an answer choice, eliminate it, even if it seems plausible.",
      "**Check Ownership:** Be careful not to select a statement that belongs to a third party whom the author is criticizing or merely describing. The proof must reflect the author's *own* perspective."
    ]},
    
    { type: 'hr' },
    { type: 'h3', text: "If You Get Stuck Between Two Choices..." },
    { type: 'h4', text: "Tie-Breaker #1: The Scope Test" },
    { type: 'paragraph', text: "Often, one of the final two choices will be a narrow, factually correct restatement of a single detail, while the other will be a broader conclusion that synthesizes the author's overall argument. Ask yourself, \"Is this question asking for a specific fact the author mentioned, or for a conclusion they would agree with?\" Author Viewpoint questions typically reward the answer that reflects a more holistic understanding of the author's reasoning." },
    
    { type: 'h4', text: "Tie-Breaker #2: The Intensity Check" },
    { type: 'paragraph', text: "Isolate the most important qualifying or modifying words in your final two answer choices (e.g., \"proves\" vs. \"suggests,\" \"always\" vs. \"likely\"). Go back to the passage and examine the author's own language. Is their tone absolute and certain, or is it more cautious and nuanced? Match the intensity of the answer choice to the intensity of the author's own claims. A mismatch in certainty is a common reason for a wrong answer." }
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
          "text": "Step 1: Synthesize the Author's Core Argument and Tone"
        },
        {
          "type": "paragraph",
          "text": "Before looking at the answers, consolidate your understanding of the author's perspective. Don't just find the main point; internalize their entire stance. Ask yourself:"
        },
        {
          "type": "list",
          "items": [
            "What is their central claim or thesis?",
            "What is their attitude toward the main subject (e.g., critical, supportive, objective)?",
            "What are the main reasons they provide to support their claims?"
          ]
        },
        {
          "type": "h4",
          "text": "Step 2: Treat Each Answer Choice as a Hypothesis to Be Proven"
        },
        {
          "type": "paragraph",
          "text": "For each answer choice, your task is to find a specific sentence or set of sentences in the passage that directly supports it. Ask yourself, \"Can I point to a line in the text that makes this statement true?\""
        },
        {
          "type": "list",
          "items": [
            "**Find Direct Proof:** The correct answer will be a direct consequence of the text. Look for a \"verifying quotation\" that logically proves the answer choice.",
            "**Eliminate Unsupported Claims:** If you cannot find clear textual evidence to support an answer choice, eliminate it, even if it seems plausible.",
            "**Check Ownership:** Be careful not to select a statement that belongs to a third party whom the author is criticizing or merely describing. The proof must reflect the author's *own* perspective."
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
          "text": "Tie-Breaker #1: The Scope Test"
        },
        {
          "type": "paragraph",
          "text": "Often, one of the final two choices will be a narrow, factually correct restatement of a single detail, while the other will be a broader conclusion that synthesizes the author's overall argument. Ask yourself, \"Is this question asking for a specific fact the author mentioned, or for a conclusion they would agree with?\" Author Viewpoint questions typically reward the answer that reflects a more holistic understanding of the author's reasoning."
        },
        {
          "type": "h4",
          "text": "Tie-Breaker #2: The Intensity Check"
        },
        {
          "type": "paragraph",
          "text": "Isolate the most important qualifying or modifying words in your final two answer choices (e.g., \"proves\" vs. \"suggests,\" \"always\" vs. \"likely\"). Go back to the passage and examine the author's own language. Is their tone absolute and certain, or is it more cautious and nuanced? Match the intensity of the answer choice to the intensity of the author's own claims. A mismatch in certainty is a common reason for a wrong answer."
        }
      ],
    },
    playbook: {
      label: "Playbook",
      content: [
        { type: 'h2', text: "RC Author Viewpoint — Playbook" },
        { type: 'callout', variant: 'tip', title: "Timing Target", text: "Author Viewpoint questions are high-frequency (12% of RC) and often answerable in under 60 seconds if your reading notes already separate the author's voice from reported views. Before you start answering, make sure you know what the stem's exact issue is — not just the passage's general topic." },
        { type: 'process', title: "Author Viewpoint Method", steps: [
          "Identify the stem's exact issue: The task is always \"what would the author agree/disagree with,\" but the issue varies. Pin down the specific claim, topic, or dispute the stem names before you synthesize.",
          "Synthesize the author's stance on that issue: What is their claim? What is their tone? What reasons do they give? Separate the author's own position from views they merely describe or report.",
          "Build a voice-ownership map: For debate and critique passages, track who owns each claim — the author, a competing view, or a third party. The correct answer must belong to the author's perspective, not a described position.",
          "Treat each answer as a hypothesis: For each choice, ask whether you can point to a specific sentence or set of sentences in the passage that proves it. If you cannot find a verifying line, eliminate the choice.",
          "Check scope and intensity: Is the answer about the exact topic in the stem or a nearby issue? Does its certainty level (\"proves\" vs. \"suggests\") match the author's language?",
        ]},
        { type: 'table', headers: ["If you see this in the stem...", "Do this"], rows: [
          ["\"the author would most likely agree with\"", "Find the answer that is a direct consequence of the author's stated position — anchor it to a specific passage line"],
          ["\"the author would most likely disagree with\"", "Find the answer that contradicts the author's stance — look for the choice that violates a claim the author explicitly makes"],
          ["\"LEAST likely to agree/believe\"", "Four answers are consistent with the author's view; one breaks it. Find the outlier"],
          ["\"both authors would agree/disagree\"", "Test each answer against both authors independently — the correct choice must pass (or fail) for both"],
          ["Stuck between a narrow detail and a broader conclusion", "Author Viewpoint typically rewards the holistic synthesis over the isolated factual detail — check which one the stem is really asking for"],
        ]},
        { type: 'callout', variant: 'summary', title: "Method Chain", text: "Pin down the stem's exact issue --> Synthesize the author's claim, tone, and reasons on that issue --> Separate the author's voice from reported views --> Test each answer as a hypothesis with a verifying passage line --> Check scope and intensity match." },
      ],
    },
  },
};
