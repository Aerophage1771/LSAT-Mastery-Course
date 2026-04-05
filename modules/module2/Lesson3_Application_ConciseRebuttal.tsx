import { Lesson } from '../../types';

export const Lesson3_Application_ConciseRebuttal: Lesson = {
  id: "2-3",
  title: "Application - The Concise Rebuttal",
  content: [
    { type: 'h3', text: "Lesson 3: Application - The Concise Rebuttal" },
    { type: 'paragraph', text: "In the previous lesson, you learned the five-step method for finding the main conclusion. Now, we will apply that method to a common and efficient argument structure: the **Concise Rebuttal**." },
    { type: 'paragraph', text: "These arguments are short and direct. They typically start by stating that a certain belief is wrong and then provide evidence to prove it. In these cases, the conclusion is often placed at the very beginning of the stimulus." },
    { type: 'hr' },
    { type: 'h3', text: "Worked Example" },
    { type: 'paragraph', text: "Before reading the analysis, attempt the following question on your own. Identify the conclusion and try to categorize the roles of the other sentences." },
    { type: 'blockquote', text: "**Stimulus:**\n\nContrary to recent speculations, no hardware store will be opening in the shopping plaza. If somebody were going to open a store there, they would already have started publicizing it. But there has been no such publicity." },
    { type: 'paragraph', text: "**Question:**\n\nWhich one of the following most accurately expresses the conclusion drawn in the argument?" },
    { type: 'options', items: [
      "(A) Some people have surmised that a hardware store will be opening in the shopping plaza.",
      "(B) A hardware store will not be opening in the shopping plaza.",
      "(C) If somebody were going to open a hardware store in the shopping plaza, that person would already have started publicizing it.",
      "(D) It would be unwise to open a hardware store in the shopping plaza.",
      "(E) There has been no publicity concerning the opening of a hardware store in the shopping plaza."
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Step-by-Step Deconstruction" },
    { type: 'h4', text: "Step 1: Read the Question Stem" },
    { type: 'paragraph', text: "The stem asks for the \"conclusion drawn in the argument.\" This tells us to look for the author's primary claim." },
    { type: 'h4', text: "Step 2: Deconstruct the Argument & Look for Signposts" },
    { type: 'paragraph', text: "Let's break down the stimulus sentence by sentence:" },
    { type: 'list', items: [
      "**Sentence 1:** \"Contrary to recent speculations, no hardware store will be opening in the shopping plaza.\" The phrase \"**Contrary to...**\" signals that the author is about to disagree with a stated view. The \"recent speculations\" are the **Opposing Viewpoint**. The author’s own claim is that \"**no hardware store will be opening...**\" This is our candidate for the main conclusion.",
      "**Sentence 2:** \"If somebody were going to open a store there, they would already have started publicizing it.\" This is a conditional rule (`If... then...`). In these arguments, such rules almost always function as a **Premise**.",
      "**Sentence 3:** \"But there has been no such publicity.\" This is a factual statement that points out that the condition mentioned in the previous sentence has not been met. This is another **Premise**."
    ]},
    { type: 'h4', text: "Step 3: Isolate a Candidate and Apply the \"Why Test\"" },
    { type: 'paragraph', text: "Our candidate conclusion is: \"No hardware store will be opening in the shopping plaza.\"" },
    { type: 'list', items: [
      "**Ask \"Why?\":** *Why* will no hardware store be opening?",
      "**Answer from Stimulus:** **Because** (Premise 2) there has been no publicity, and (Premise 1) if a store were opening, there would have to be publicity."
    ]},
    { type: 'paragraph', text: "The rest of the stimulus provides the \"Why\" for the first sentence. This confirms Sentence 1 is the **Main Conclusion**." },
    { type: 'h4', text: "Step 4: Pre-phrase the Conclusion" },
    { type: 'paragraph', text: "Our summary of the author’s point: \"A hardware store is not going to open in that plaza.\"" },
    { type: 'h4', text: "Step 5: Evaluate the Answer Choices by Eliminating Traps" },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      {
        title: "(A) Some people have surmised that a hardware store will be opening in the shopping plaza.",
        text: "Trap Type: Opposing Viewpoint. This describes the \"speculations\" the author mentioned at the start. The author's goal is to prove this wrong, not to argue that people have these thoughts.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(B) A hardware store will not be opening in the shopping plaza.",
        text: "Analysis: This matches our pre-phrase and the first sentence of the stimulus. It is the destination of the argument. **This is the correct answer.**",
        badge: "Correct",
        badgeColor: "green"
      },
      {
        title: "(C) If somebody were going to open a hardware store in the shopping plaza, that person would already have started publicizing it.",
        text: "Trap Type: Premise Trap. This is a direct restatement of the conditional rule in Sentence 2. It is evidence, not the conclusion.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(D) It would be unwise to open a hardware store in the shopping plaza.",
        text: "Trap Type: Out of Scope. The argument is about whether a store *will* open (a factual prediction). This choice introduces a value judgment about whether it is \"unwise\" (an evaluative claim), which the author never discusses.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(E) There has been no publicity concerning the opening of a hardware store in the shopping plaza.",
        text: "Trap Type: Premise Trap. This restates the factual evidence from Sentence 3. Like choice (C), it is a reason used to support the conclusion.",
        badge: "Incorrect",
        badgeColor: "red"
      }
    ]},
    { type: 'hr' },
    { type: 'callout', title: "Summary of the Concise Rebuttal", variant: "summary", text: "In this structural pattern, the author uses the very first sentence to state their disagreement. The remaining sentences provide the logical \"gears\"—often a rule and a fact—that drive the reader toward that initial claim. When you see \"**Contrary to...**\" or \"**This is mistaken**\" at the start of a short stimulus, look to the statement immediately following it as your primary conclusion candidate." },
    { type: 'paragraph', text: "**Next Up:** In Lesson 4, we will look at arguments where the conclusion is not explicitly stated in the first sentence but appears as a \"pivot\" in the middle of the stimulus." }
  ]
};
