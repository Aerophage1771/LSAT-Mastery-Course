import { Lesson } from '../../types';

export const Lesson9_Advanced_SingleExplanationFallacy: Lesson = {
  id: "5-9",
  title: "Advanced: Single Explanation Fallacy (PT-113-S-4-Q-12)",
  content: [
    { type: 'h3', text: "Practice Drill: The Single Explanation Fallacy (PT-113-S-4-Q-12)" },
    { type: 'paragraph', text: "This drill focuses on a subtle but common high-difficulty flaw. The author provides a plausible explanation for a specific phenomenon and then illegitimately extends that single explanation to cover a much broader category of events." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },
    { type: 'hr' },
    {
      type: 'question-card',
      id: 'PT-113-S-4-Q-12',
      stimulus: "**Pundit:** People complain about how ineffectual their legislative representatives are, but this apparent ineffectuality is simply the manifestation of compromises these representatives must make when they do what they were elected to do: compete for the government’s scarce funds. So, when people express dissatisfaction with their legislative representatives, we can be assured that these representatives are simply doing what they were elected to do.",
      question: "The pundit’s argument is flawed because it takes for granted that",
      options: [
      "**(A)** the apparent ineffectuality of legislative representatives is the only source of popular dissatisfaction with those representatives",
      "**(B)** governmental resources that are currently scarce cannot become more abundant except by the actions of politicians",
      "**(C)** constituents would continue to be dissatisfied with the effectuality of their legislative representatives if constituents were aware of the cause of this apparent ineffectuality",
      "**(D)** legislative compromise inevitably results in popular dissatisfaction with politicians",
      "**(E)** only elected public servants tend to elicit dissatisfaction among the public"
    ]
    },
    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },
    { type: 'h3', text: "Analysis & Explanation" },
    { type: 'paragraph', text: "*(Scroll down only after attempting the question)*" },
    { type: 'hr' },
    { type: 'h3', text: "1. Deconstruct the Argument" },
    { type: 'breakdown', labels: { title: 'Component', text: 'Analysis' }, items: [
      { title: "Premise", text: "Explains *ineffectuality*: it comes from necessary compromises.", badge: "Explanation", badgeColor: "indigo" },
      { title: "Conclusion", text: "When people express *dissatisfaction*, it proves reps are doing their job.", badge: "Conclusion", badgeColor: "indigo" }
    ]},
    { type: 'h3', text: "2. Find the Logical Gap" },
    { type: 'paragraph', text: "The evidence explains **one specific source of dissatisfaction**—the \"apparent ineffectuality.\" The conclusion, however, treats this single explanation as if it covers **all possible sources of dissatisfaction**. It overlooks corruption, laziness, or other reasons for unhappiness." },
    { type: 'h3', text: "3. Evaluate the Answer Choices" },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: "(A) the apparent ineffectuality... is the only source of popular dissatisfaction...", text: "Correct. For the conclusion to hold, the pundit must assume that dissatisfaction *only* comes from this one cause.", badge: "Correct", badgeColor: "green" },
      { title: "(B) governmental resources... cannot become more abundant...", text: "Irrelevant background.", badge: "Incorrect", badgeColor: "red" },
      { title: "(C) constituents would continue to be dissatisfied... if constituents were aware...", text: "Speculation about feelings if informed; out of scope.", badge: "Incorrect", badgeColor: "red" },
      { title: "(D) legislative compromise inevitably results in popular dissatisfaction...", text: "This is a premise, not the flaw.", badge: "Incorrect", badgeColor: "red" },
      { title: "(E) only elected public servants tend to elicit dissatisfaction...", text: "Irrelevant comparison.", badge: "Incorrect", badgeColor: "red" }
    ]},
    { type: 'callout', title: "Summary & Key Takeaways", variant: "summary", text: "This question showcases **The Single Explanation Fallacy**.\n\n**Key Takeaway:** When an argument offers one specific explanation for a broad outcome, be skeptical. The primary flaw is often the failure to consider that other explanations could also lead to the same outcome." }
  ]
};
