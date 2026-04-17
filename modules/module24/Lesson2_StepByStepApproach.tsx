import { Lesson } from '../../types';

export const Lesson2_StepByStepApproach: Lesson = {
  id: "24-2",
  title: "Step-by-Step Approach",
  content: [
    { type: 'h3', text: "Step-by-Step Approach" },
    { type: 'h4', text: "Step 1: Read for the Overall Argument and Predict the Main Idea" },
    { type: 'paragraph', text: "Your primary goal while reading is to understand the passage as a total argument. Before looking at the answer choices, synthesize the author's core point into a single, comprehensive sentence. If your prediction matches only one choice, you are almost certainly right." },
    
    { type: 'h4', text: "Step 2: Evaluate Answer Choices Using a Two-Step Test" },
    { type: 'paragraph', text: "Don't just read the answer choice—dissect it using a strict Two-Step Test: Accuracy and Comprehensiveness." },
    { type: 'list', items: [
      "**1. The Accuracy Test:** Is every single word in this answer choice true according to the passage? If it includes a detail the passage never mentioned, or reverses the author's stance, eliminate it immediately.",
      "**2. The Comprehensiveness Test:** Does this answer choice cover the entire passage, or just a small part of it? If it accurately summarizes paragraph 2, but ignores paragraphs 1, 3, and 4 entirely, it is too narrow. Eliminate it."
    ]},
    { type: 'callout', variant: 'tip', title: 'Worked Example: The Two-Step Test', text: "Imagine a passage where Paragraph 1 introduces a new tax policy, Paragraph 2 explains its benefits, and Paragraph 3 argues it will ultimately fail due to loopholes.\n\n**Choice A:** \"The new tax policy will fail because of loopholes.\"\n*Analysis:* Passes the Accuracy Test (the author does argue this in Para 3). Fails the Comprehensiveness Test (it completely ignores the context and benefits discussed in Paras 1 and 2). This is a 'Too Narrow' trap.\n\n**Choice B:** \"A new tax policy has both benefits and flaws, but loopholes will prevent it from succeeding.\"\n*Analysis:* Passes the Accuracy Test AND passes the Comprehensiveness Test. This captures the full narrative arc." },

    { type: 'h4', text: "Step 3: Confirm Your Final Choice" },
    { type: 'paragraph', text: "The answer you are left with should be both accurate and the most comprehensive summary. Treat each remaining answer choice as a separate case study. Your goal is to find the one answer choice that satisfies every single condition on your list. If a scenario fails even one condition, eliminate it immediately." },
    
    { type: 'hr' },
    { type: 'h3', text: "If You Get Stuck Between Two Choices..." },
    { type: 'h4', text: "Tie-Breaker #1: The Strict Re-Check" },
    { type: 'paragraph', text: "The error is almost always in a subtle misreading of the principle, not the scenarios. Go back to the passage and re-read the sentence(s) describing the rule, paying extremely close attention to every word. Is there a crucial qualifier you skimmed over (e.g., \"only if,\" \"primarily,\" \"unintended\")? Re-create your checklist with this stricter understanding and re-apply it to your final options. The deciding factor is often a single, precise word in the passage." },
    
    { type: 'h4', text: "Tie-Breaker #2: Focus on the Difference" },
    { type: 'paragraph', text: "Stop looking at how your final contenders are similar to the rule. Instead, ask, \"**What is the single key difference between these two answer choices?**\" Isolate that one point of divergence. Then, return to the passage one last time and check which choice's unique element is a better fit for the principle's specific language and logic. This narrows your final decision to a single, critical point of comparison." }
  ]
};
