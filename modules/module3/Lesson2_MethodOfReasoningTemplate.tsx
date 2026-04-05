import { Lesson } from '../../types';

export const Lesson2_MethodOfReasoningTemplate: Lesson = {
  id: "3-2",
  title: "The Method of Reasoning Template",
  content: [
    { type: 'h3', text: "The Method of Reasoning Template" },
    { type: 'paragraph', text: "Our goal in this lesson is to identify the **argumentative strategy** an author uses to support their conclusion. This is a core skill for the LSAT, as many questions will ask you to describe the \"how\" of an argument rather than the \"what.\"" },
    { type: 'paragraph', text: "To master this, we use a specific process to move from the specific story in the text to the abstract logic required by the answer choices:" },
    
    { 
      type: 'process', 
      title: "The Abstraction Process",
      steps: [
        "Break down the argument into its parts",
        "Summarize the original argument",
        "Abstract that into a general method",
        "Look for that specific answer choice",
        "Select or remove it based on our Fact Test"
      ] 
    },

    { type: 'hr' },
    { type: 'h3', text: "Step 1: Deconstruct the Argument" },
    { type: 'paragraph', text: "Engage with the text sentence by sentence. Do not read the entire passage at once. Instead, react to each claim as a human would to see how the logic is being built." },
    { type: 'list', items: [
      "**Identify the Conclusion:** What is the author trying to prove?",
      "**Identify the Premises:** What evidence are they using to support that claim?",
      "**Identify Speaker Relationships:** If there are two speakers, determine exactly how they interact. Does the second person offer an alternative cause, point out a contradiction, or attack a hidden assumption?"
    ]},
    { type: 'h3', text: "Step 2: Summarize the Logic (Concrete)" },
    { type: 'paragraph', text: "Once you understand the parts, explain the argument to yourself using the specific topic of the stimulus. Keep it simple." },
    { type: 'list', items: [
      "*Example:* \"The author says we should buy this car because it is cheaper than the only other car available.\""
    ]},
    { type: 'h3', text: "Step 3: Abstract the Logic (The Method)" },
    { type: 'paragraph', text: "Now, strip away the specific details (like \"cars\" or \"prices\") and describe the **logical pattern**. This is your prephrase." },
    { type: 'list', items: [
      "*Example:* \"The author supports a choice by eliminating the only other alternative.\""
    ]},
    { type: 'h3', text: "Step 4: Apply the Fact Test" },
    { type: 'paragraph', text: "For an answer choice to be correct, every individual part of that choice must be true based on the stimulus. If even one word describes something that didn't happen, the answer is wrong." },
    { type: 'paragraph', text: "To apply the Fact Test effectively, subdivide the answer choice into its specific components:" },
    { type: 'list', items: [
      "**Component 1:** Does the author do the first thing mentioned?",
      "**Component 2:** Does the author do it in the specific way mentioned?"
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Summary" },
    { type: 'paragraph', text: "By following this 4-step process, we can move from the specific details of a story to the abstract logic of the answer choices. We identified the parts, summarized the concrete logic, abstracted the method, and used the Fact Test to validate the correct choice while eliminating the wrong ones. If you stick to this process, the only remaining challenge is building your familiarity with common patterns. I'll provide a full chart of these later, but for now, let's walk through the major methods of reasoning you'll encounter." }
  ]
};
