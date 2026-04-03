import { Lesson } from '../../types';

export const Lesson2_StepByStepApproach: Lesson = {
  id: "27-2",
  title: "Step-by-Step: Application",
  content: [
    { type: 'h3', text: "Step-by-Step: Application" },
    { type: 'h4', text: "Step 1: Classify the Task Before You Read the Choices" },
    { type: 'paragraph', text: "Do not treat every Application question as identical. Ask which job the stem is assigning:" },
    { type: 'list', items: [
      "Am I choosing the scenario that **fits a rule or standard**?",
      "Am I choosing the example that **best embodies a conception or definition**?",
      "Am I projecting what **would follow** if the passage's theory were applied to a new case?",
      "Am I finding the choice that is **least compatible** with the passage's position?"
    ]},
    { type: 'paragraph', text: "That classification tells you what kind of proof you need. A best-fit example requires feature matching. A hypothetical-result question requires pushing the passage's logic forward. A least-compatible question requires finding the answer that breaks the standard." },

    { type: 'h4', text: "Step 2: Rebuild the Passage Rule as a Working Checklist" },
    { type: 'paragraph', text: "Go back to the passage and extract the actual operative language. Your job is to convert the passage into testable conditions: what must be present, what must be absent, and what the passage treats as optional." },
    { type: 'table', headers: ["What to capture", "What it sounds like in the passage", "What it becomes in your notes"], rows: [
      ["Necessary condition", "only if, requires, depends on, counts as", "This must be true."],
      ["Disqualifier", "not when, fails if, cannot, does not include", "If this appears, eliminate."],
      ["Value judgment", "preferable, justified, authentic, more persuasive", "Know what the passage rewards or condemns."],
      ["Mechanism", "therefore, leads to, results from, explains", "Know what causal or logical move you are extending."],
    ]},
    { type: 'paragraph', text: "A lot of wrong answers sound plausible because they satisfy the big picture but miss one small limiter. In this category, the small limiter is often the whole question." },

    { type: 'h4', text: "Step 3: Separate Core Conditions from Surface Resemblance" },
    { type: 'paragraph', text: "Now ask: which parts of the passage idea are essential, and which are just the passage's original setting? For example, if the passage's rule is really about how risk should be judged, the correct answer may involve a completely different subject matter while preserving the same decision principle." },
    { type: 'callout', title: "Diagnostic", variant: "tip", text: "If an answer choice seems attractive because it uses similar nouns to the passage, slow down. Similar topic is not similar logic." },

    { type: 'h4', text: "Step 4: Audit the Answers One Condition at a Time" },
    { type: 'paragraph', text: "Treat each answer choice like a case file. Run the passage checklist against it. Ask, in order: Does it satisfy the first required feature? The second? Does it trigger any disqualifier? If this is a hypothetical-result question, does it produce the effect the passage's logic predicts?" },
    { type: 'process', title: "Application Audit", steps: [
      "Name the governing rule in plain English.",
      "List the non-negotiable conditions.",
      "Mark any language that limits the rule's scope.",
      "Test each answer against the conditions in the same order.",
      "Eliminate any answer that misses even one required feature.",
    ]},

    { type: 'h4', text: "Step 5: For Hypothetical Questions, Push the Passage Logic Forward" },
    { type: 'paragraph', text: "In the harder science and policy versions, the answer is not a direct restatement of the passage. You have to extend the mechanism or standard into a new scenario. Do that extension strictly on the passage's terms. Do not replace the passage's model with your own real-world intuitions." },
    
    { type: 'hr' },
    { type: 'h3', text: "If You Get Stuck Between Two Choices..." },
    { type: 'h4', text: "Tie-Breaker #1: The Strict Re-Check" },
    { type: 'paragraph', text: "The error is usually in the rule, not the scenario. Go back to the exact sentence that defines the standard. Check whether you skipped a limiter such as \"only if,\" \"primarily,\" \"unless,\" or \"most likely.\" Rebuild the checklist using that exact wording and re-run your finalists." },
    
    { type: 'h4', text: "Tie-Breaker #2: Focus on the Difference" },
    { type: 'paragraph', text: "Stop asking how both answers are similar to the passage. Ask what single feature separates them. Then check whether that feature matters under the passage's actual standard. In hard Application questions, the correct answer often wins because it honors one narrow condition the other answer ignores." },
    { type: 'h3', text: "Advanced-Readiness Checklist" },
    { type: 'list', items: [
      "Can you tell the difference between the passage's **governing principle** and its original factual setting?",
      "Can you identify when the stem is asking for the **closest fit** rather than a perfect textbook restatement?",
      "Can you project a theory or mechanism into a new case without importing outside assumptions?",
      "Can you explain why a tempting wrong answer is on-theme but still fails one required condition?"
    ]},
    { type: 'callout', title: "What the hard questions add", variant: "summary", text: "The hardest Application questions usually combine three pressures at once: a dense rule, a new factual setting, and answer choices that each preserve part of the passage while violating a different limit. If you can turn the passage into a checklist and stay loyal to that checklist, you are ready for those advanced versions." }
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
          "text": "Step 1: Locate the Principle in the Passage"
        },
        {
          "type": "paragraph",
          "text": "The question stem will almost always direct you to a specific idea. Look for phrases that name a concept, theory, or standard. Your first task is to return to the passage and locate the exact sentences that define and explain this principle. Do not rely on your memory."
        },
        {
          "type": "h4",
          "text": "Step 2: Isolate the Principle and Its Conditions"
        },
        {
          "type": "paragraph",
          "text": "Don't just read the principle—dissect it. Your goal is to create a simple checklist of the necessary conditions or criteria that must be met for the principle to apply."
        },
        {
          "type": "paragraph",
          "text": "**Example:** If the passage defines a specific type of legal fraud as \"an intentional misrepresentation of a material fact,\" your checklist would be:"
        },
        {
          "type": "list",
          "ordered": true,
          "items": [
            "Was there a misrepresentation?",
            "Was it intentional?",
            "Was the fact material (i.e., important)?"
          ]
        },
        {
          "type": "h4",
          "text": "Step 3: Apply the Checklist to Each Answer Choice"
        },
        {
          "type": "paragraph",
          "text": "Treat each answer choice as a separate case study. Go through your checklist from Step 1 and apply it to the scenario described. Your goal is to find the one answer choice that satisfies every single condition on your list. If a scenario fails even one condition, eliminate it immediately."
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
          "text": "Tie-Breaker #1: The Strict Re-Check"
        },
        {
          "type": "paragraph",
          "text": "The error is almost always in a subtle misreading of the principle, not the scenarios. Go back to the passage and re-read the sentence(s) describing the rule, paying extremely close attention to every word. Is there a crucial qualifier you skimmed over (e.g., \"only if,\" \"primarily,\" \"unintended\")? Re-create your checklist with this stricter understanding and re-apply it to your final options. The deciding factor is often a single, precise word in the passage."
        },
        {
          "type": "h4",
          "text": "Tie-Breaker #2: Focus on the Difference"
        },
        {
          "type": "paragraph",
          "text": "Stop looking at how your final contenders are similar to the rule. Instead, ask, \"**What is the single key difference between these two answer choices?**\" Isolate that one point of divergence. Then, return to the passage one last time and check which choice's unique element is a better fit for the principle's specific language and logic. This narrows your final decision to a single, critical point of comparison."
        }
      ],
    },
    playbook: {
      label: "Playbook",
      content: [
        { type: 'h2', text: "RC Application — Playbook" },
        { type: 'callout', variant: 'tip', title: "Timing Target", text: "Spend ~30 seconds rebuilding the passage rule as a checklist before you touch the answer choices. This upfront investment pays off because Application questions punish vague impressions — a precise checklist lets you eliminate confidently and avoid re-reading the passage for every choice." },
        { type: 'process', title: "Application Method", steps: [
          "Classify the task: Are you finding the best fit for a rule, the closest example of a conception, the predicted outcome of a theory, or the least compatible case?",
          "Rebuild the rule: Go back to the passage and extract the operative language. Convert it into a checklist — what must be true, what must be absent, and what the passage treats as optional background.",
          "Separate core conditions from surface resemblance: Identify which parts of the rule are essential features and which are just the passage's original factual setting. The correct answer may involve a completely different subject while preserving the same decision principle.",
          "Audit answers one condition at a time: Treat each choice like a case file. Run your checklist against it in order. Does it satisfy condition one? Condition two? Does it trigger any disqualifier?",
          "For hypothetical questions, extend strictly on the passage's terms: Push the mechanism or standard forward into the new scenario without importing your own real-world intuitions.",
        ]},
        { type: 'table', headers: ["If you see this in the stem...", "Do this"], rows: [
          ["\"which scenario best fits the standard described\"", "Build a checklist from the passage rule and test each answer against every required feature"],
          ["\"most closely exemplifies the conception\"", "Identify the defining features of the conception and match features, not surface topic"],
          ["\"if this were true, what would follow\"", "Extend the passage's causal or evaluative logic forward one step — do not substitute outside reasoning"],
          ["\"least compatible with the position\"", "Flip the task: find the answer that breaks the rule or violates a required condition"],
          ["Two answers both seem to fit the rule", "Re-read the exact sentence that defines the standard — check for a small limiter like \"only if,\" \"primarily,\" or \"unless\" that one answer misses"],
        ]},
        { type: 'callout', variant: 'summary', title: "Method Chain", text: "Classify the task --> Rebuild the rule as a checklist --> Separate essential conditions from surface setting --> Audit each answer against the checklist --> For hypotheticals, extend logic strictly on the passage's terms. The small limiter is often the whole question." },
      ],
    },
  },
};
