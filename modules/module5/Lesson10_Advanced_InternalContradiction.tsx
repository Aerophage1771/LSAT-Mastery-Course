import { Lesson } from '../../types';

export const Lesson10_Advanced_InternalContradiction: Lesson = {
  id: "5-10",
  title: "Advanced: Internal Contradiction (PT-105-S-2-Q-22)",
  content: [
    { type: 'h3', text: "Practice Drill: The Internal Contradiction (PT-105-S-2-Q-22)" },
    { type: 'paragraph', text: "This drill focuses on one of the most difficult and infrequent flaw types on the LSAT: the **Internal Contradiction**. The argument essentially eats its own tail." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },
    { type: 'hr' },
    { type: 'h4', text: "The Stimulus" },
    { type: 'blockquote', text: "To hold criminals responsible for their crimes involves a failure to recognize that criminal actions, like all actions, are ultimately products of the environment that forged the agent’s character. It is not criminals but people in the law-abiding majority who by their actions do most to create and maintain this environment. Therefore, it is law-abiding people whose actions, and nothing else, make them alone truly responsible for crime." },
    { type: 'h4', text: "The Question" },
    { type: 'paragraph', text: "The reasoning in the argument is most vulnerable to criticism on the grounds that" },
    { type: 'options', items: [
      "**(A)** it exploits an ambiguity in the term “environment” by treating two different meanings of the word as though they were equivalent",
      "**(B)** it fails to distinguish between actions that are socially acceptable and actions that are socially unacceptable",
      "**(C)** the way it distinguishes criminals from crimes implicitly denies that someone becomes a criminal solely in virtue of having committed a crime",
      "**(D)** its conclusion is a generalization of statistical evidence drawn from only a small minority of the population",
      "**(E)** its conclusion contradicts an implicit principle on which an earlier part of the argument is based"
    ]},
    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },
    { type: 'h3', text: "Analysis & Explanation" },
    { type: 'paragraph', text: "*(Scroll down only after attempting the question)*" },
    { type: 'hr' },
    { type: 'h3', text: "1. Deconstruct the Argument" },
    { type: 'breakdown', labels: { title: 'Component', text: 'Analysis' }, items: [
      { title: "Premise 1", text: "All actions are products of the environment, so no one is responsible.", badge: "Universal Rule", badgeColor: "indigo" },
      { title: "Premise 2", text: "The law-abiding majority creates the environment.", badge: "Fact", badgeColor: "indigo" },
      { title: "Conclusion", text: "The law-abiding majority is *truly responsible*.", badge: "Conclusion", badgeColor: "indigo" }
    ]},
    { type: 'h3', text: "2. Find the Logical Gap" },
    { type: 'paragraph', text: "The argument establishes a rule: **no one is responsible because environment dictates action**. It uses this to excuse criminals. But then, it holds the law-abiding responsible for *their* actions (creating the environment). If the rule is true, the law-abiding people's actions are ALSO products of their environment, so they shouldn't be responsible either. The conclusion contradicts the premise." },
    { type: 'h3', text: "3. Evaluate the Answer Choices" },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: "(A) it exploits an ambiguity in the term “environment”...", text: "Not the fundamental flaw.", badge: "Incorrect", badgeColor: "red" },
      { title: "(B) it fails to distinguish between actions that are socially acceptable...", text: "Irrelevant.", badge: "Incorrect", badgeColor: "red" },
      { title: "(C) the way it distinguishes criminals from crimes...", text: "Minor semantic point.", badge: "Incorrect", badgeColor: "red" },
      { title: "(D) its conclusion is a generalization of statistical evidence...", text: "No statistics were used.", badge: "Incorrect", badgeColor: "red" },
      { title: "(E) its conclusion contradicts an implicit principle on which an earlier part of the argument is based", text: "Correct. The principle that 'environment dictates action' contradicts the conclusion that 'law-abiding people are responsible'.", badge: "Correct", badgeColor: "green" }
    ]},
    { type: 'callout', title: "Summary & Key Takeaways", variant: "summary", text: "This question showcases the **Internal Contradiction** flaw.\n\n**Key Takeaway:** When an argument starts with a broad, sweeping principle, check to see if the author applies that principle consistently to every group mentioned. If the conclusion relies on selectively ignoring the initial principle, you have found an internal contradiction." }
  ]
};
