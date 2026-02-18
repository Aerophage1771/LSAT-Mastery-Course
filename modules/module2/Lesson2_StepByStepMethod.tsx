import { Lesson } from '../../types';

export const Lesson2_StepByStepMethod: Lesson = {
  id: "2-2",
  title: "Step-by-Step Method",
  content: [
    { type: 'h3', text: "Lesson 2: A Step-by-Step Method for Main Conclusion Questions" },
    { type: 'paragraph', text: "In Module 1, you learned how to identify the parts of an argument. Now, we will assemble those skills into a clear, repeatable method for finding the main conclusion. The goal is to move beyond just understanding the argument to systematically proving which sentence is the central claim." },
    { type: 'hr' },
    { type: 'h3', text: "Step 1: Read the Question Stem" },
    { type: 'paragraph', text: "Always read the question stem first. When it asks, \"**Which one of the following most accurately expresses the main conclusion?**\" it sets your one and only job: find the author’s primary claim. This focus prevents you from getting distracted by interesting but secondary details." },
    { type: 'hr' },
    { type: 'h3', text: "Step 2: Deconstruct the Argument & Look for Signposts" },
    { type: 'paragraph', text: "Read the stimulus with the goal of separating claims from the evidence that supports them. A key part of this step is to scan for **indicator words** that signal the function of a sentence." },
    { type: 'list', items: [
      "**Conclusion Indicators:** Words like *therefore, thus, hence, so, consequently,* and *it follows that* explicitly mark the sentence they introduce as a conclusion.",
      "**Premise Indicators:** Words like *because, since, for,* and *after all* explicitly mark the sentence they introduce as evidence."
    ]},
    { type: 'paragraph', text: "As you read, also look for common structural patterns:" },
    { type: 'list', items: [
      "**Rebuttal Structure:** Does the author introduce someone else’s view only to disagree with it? Look for pivot words like **but**, **however**, or **this is mistaken**. The main conclusion is almost always the author’s refutation.",
      "**Thesis-First Structure:** Does the author make a strong, debatable claim in the first sentence? Check if the following sentences provide reasons or evidence for it, often using premise indicators.",
      "**Building-to-a-Conclusion Structure:** Does the argument present a series of facts that lead to a final point? Look for conclusion indicators in the last sentence."
    ]},
    { type: 'paragraph', text: "Mentally label the function of each sentence: *Opposing View, Author's Claim, Evidence, etc.*" },
    { type: 'hr' },
    { type: 'h3', text: "Step 3: Isolate a Candidate and Apply the \"Why Test\"" },
    { type: 'paragraph', text: "Based on your deconstruction, identify the single sentence that you believe is the main conclusion. This is your \"candidate\" conclusion." },
    { type: 'paragraph', text: "Now, rigorously test your candidate using the **Why Test**. The goal is to confirm that it is the argument's destination, not just a stop along the way." },
    { type: 'list', ordered: true, items: [
      "State your candidate conclusion.",
      "Ask \"Why?\"",
      "Read the other statements in the stimulus."
    ]},
    { type: 'paragraph', text: "If the other statements provide a logical answer to the \"Why?\" question, your candidate is the conclusion. If they don't, your candidate is likely a premise, and you should test another sentence." },
    { type: 'hr' },
    { type: 'h3', text: "Step 4: Pre-phrase the Conclusion" },
    { type: 'paragraph', text: "Before looking at the answer choices, take a moment to summarize the main conclusion in your own words. This is your **pre-phrase**. It doesn't need to be elegant; it just needs to capture the core idea of the author's ultimate point." },
    { type: 'paragraph', text: "This step is your defense against tempting distractors. You will now be searching for the answer choice that matches *your* understanding of the conclusion, rather than letting the answer choices define it for you." },
    { type: 'hr' },
    { type: 'h3', text: "Step 5: Evaluate the Answer Choices by Eliminating Traps" },
    { type: 'paragraph', text: "Now, compare your pre-phrase to each answer choice. Your goal is to find the one perfect match and eliminate the four distractors." },
    { type: 'paragraph', text: "Be on high alert for the most common traps:" },
    { type: 'list', ordered: true, items: [
      "**The Premise Trap:** Accurately states a piece of evidence from the stimulus. It's true, but it's not the main point.",
      "**The Sub-Conclusion Trap:** States an intermediate conclusion that is used to support the main conclusion. It’s a conclusion, but not the *main* one.",
      "**The Opposing Viewpoint Trap:** Accurately states the view the author is arguing *against*.",
      "**The Out of Scope / Distortion Trap:** Introduces a new idea, makes the conclusion too extreme, or twists the author's meaning."
    ]},
    { type: 'paragraph', text: "By systematically identifying and eliminating these traps, the correct answer will be the only one left standing." },
    { type: 'hr' },
    { type: 'h3', text: "Summary of the Method:" },
    { type: 'list', ordered: true, items: [
      "Read the Stem: Know your goal.",
      "Deconstruct: Identify argument structure and look for indicator words.",
      "Test: Use the \"Why Test\" to confirm the main conclusion.",
      "Pre-phrase: Summarize the main conclusion in your own words.",
      "Eliminate: Compare your pre-phrase to the answer choices and actively look for common traps."
    ]},
    { type: 'paragraph', text: "**Next Up:** In Lesson 3, we'll apply this five-step method to a common structural pattern: the Concise Rebuttal." }
  ]
};
