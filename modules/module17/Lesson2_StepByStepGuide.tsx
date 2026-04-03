import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: '17-2',
  title: 'Step-by-Step Guide: Must Be True',
  content: [
    {
      "type": "h2",
      "text": "Step-by-Step Guide: Must Be True"
    },
    {
      "type": "paragraph",
      "text": "This guide gives you a clear process for solving any \"Must Be True\" question. The goal is to move from the text to the right answer by breaking down the facts, linking them together, and crossing out choices that aren't 100% certain."
    },
    {
      "type": "paragraph",
      "text": "**Step 1: Know Your Goal and the Rule of Proof**"
    },
    {
      "type": "paragraph",
      "text": "First, read the question. If it asks what \"must be true\" or what \"follows logically,\" get into the right mindset:"
    },
    {
      "type": "list",
      "items": [
        "**The Text is Pure Fact:** Treat every sentence in the passage as the absolute truth. Do not argue with it or wonder if it's realistic. Your only job is to work with the information given.",
        "**The Rule is 100% Certainty:** The right answer must be proven 100% by the passage. It cannot just be \"likely\" or \"possible.\" If you can imagine a way for an answer choice to be false while the passage is still true, it is the wrong answer."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Step 2: Identify Each Piece of Information**"
    },
    {
      "type": "paragraph",
      "text": "Read the passage actively to inventory everything the author tells you. While your main goal is to capture information of any kind, pay special attention to these specific building blocks:"
    },
    {
      "type": "list",
      "items": [
        "**If-Then Rules:** Look for rules where one thing leads to another. Watch for words like *if, all, no, only if,* and *unless*. (For example: \"If A happens, then B must happen.\")",
        "**Amount Words:** Pay attention to words that describe how many or how often, like *some, most, many,* or *few*. These tell you how groups overlap.",
        "**Reasoning:** Look for statements that explain *why* something happens or how a specific process works.",
        "**Numbers and Percentages:** Note any hard data, like \"more than half\" or \"three out of five,\" as these usually lead to a mathematical conclusion."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Step 3: Connect the Dots and Predict the Answer**"
    },
    {
      "type": "paragraph",
      "text": "This is the most important step. Try to combine the building blocks you found in Step 2. The right answer is usually a combination of two or more facts."
    },
    {
      "type": "list",
      "items": [
        "**Look for the Link:** Find a common thread that connects different sentences.",
        "**Fact Chains:** If A leads to B, and B leads to C, then you know A leads to C.",
        "**Applying General Rules:** If a rule applies to \"everyone,\" and you know \"Sarah\" is in that group, the rule must apply to her.",
        "**Comparing Numbers:** If a total goes up but one specific part goes down, another part must have gone up to make up the difference."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Summarize the Connection:** Before looking at the choices, say the conclusion in your own words. For example: *\"If all X are Y, and all Y are Z, then all X have to be Z. I'll look for that.\"*"
    },
    {
      "type": "paragraph",
      "text": "**Key Tip: Look for What is \"Locked In\":** The passage creates a set of boundaries. The right answer is something that is forced to happen because of those boundaries. If the text says \"Most of the 10 people in the room are tall,\" you don't know who is tall, but you are \"locked in\" to the fact that *at least six people* are tall."
    },
    {
      "type": "paragraph",
      "text": "**Step 4: Check the Answer Choices**"
    },
    {
      "type": "paragraph",
      "text": "Look for an answer that matches your summary. If you don't see one, test each choice against the passage. Your goal is to eliminate four choices that *could* be false."
    },
    {
      "type": "paragraph",
      "text": "**Deep-Dive Chart for Common Traps**"
    },
    {
      "type": "table",
      "headers": [
        "Trap Type",
        "What to Look For",
        "Why it's Wrong"
      ],
      "rows": [
        [
          "**Logic Flip**",
          "Reversing an \"If-Then\" rule (e.g., A leads to B becomes B leads to A) or negating a rule (No A leads to No B).",
          "Conditional rules are one-way streets. Just because every fire produces smoke (A leads to B) does not mean all smoke comes from fire (B leads to A)."
        ],
        [
          "**New Info**",
          "Bringing up topics, specific people, or value judgments not explicitly found in the text.",
          "Even if a choice seems \"common sense,\" if the text doesn't mention it, you have zero evidence to prove it's 100% certain in this context."
        ],
        [
          "**Unsupported Strength**",
          "Absolute words like *all*, *none*, or *only* when the text is more moderate.",
          "Choices often make a claim that is more definite than the proof allows. For instance, if a text says something is \"likely,\" a choice saying it \"will\" happen is too strong."
        ],
        [
          "**Guesswork**",
          "Assuming two \"some\" or \"most\" groups must overlap, or assuming a cause-and-effect relationship.",
          "\"Some\" only guarantees at least one person or thing. You cannot assume two separate \"some\" groups share members unless the math forces them to overlap."
        ]
      ]
    }
  ],
};
