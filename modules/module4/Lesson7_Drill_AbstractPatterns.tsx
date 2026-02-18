import { Lesson } from '../../types';

export const Lesson7_Drill_AbstractPatterns: Lesson = {
  id: "4-7",
  title: "Drill: Abstract Patterns (PT-104-S-1-Q-26)",
  content: [
    { type: 'h3', text: "Practice Drill: Parallel Reasoning (PT-104-S-1-Q-26)" },
    { type: 'paragraph', text: "This drill focuses on a difficult abstract pattern: **Dismissing Apparent Causation Due to a Low Base Rate**. The argument claims that a few confirming instances are not good evidence when the vast majority of instances are disconfirming." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },
    { type: 'hr' },
    { type: 'h4', text: "The Stimulus" },
    { type: 'blockquote', text: "Researcher: The vast majority of a person’s dreams bear no resemblance whatsoever to real events that follow the dreams. Thus, it is unreasonable to believe that one has extrasensory perception solely on the basis of having had several vivid dreams about events that happen after the dreams." },
    { type: 'h4', text: "The Question" },
    { type: 'paragraph', text: "Which one of the following arguments is most similar in its reasoning to the argument above?" },
    
    { type: 'options', items: [
      "**(A)** It is unreasonable to believe that a new drug cures heart disease when it is tested, albeit successfully, on only a few patients. Most new drugs require testing on large numbers of patients before they are considered effective.",
      "**(B)** Many people who undergo surgery for ulcers show no long-term improvement. So it is unreasonable to believe that surgery for ulcers is effective, even though ulcer surgery benefits many people as well.",
      "**(C)** Even though many cancer patients experience remissions without drinking herbal tea, it is unreasonable to believe that not drinking herbal tea causes such remissions. Several factors are known to be relevant to cancer remission.",
      "**(D)** A number of people who die prematurely take aspirin. But it is unreasonable to conclude that aspirin is dangerous. Most people who take aspirin do not die prematurely.",
      "**(E)** A significant number of children raised near power lines develop cancer. So it is unreasonable to deny a connection between living near power lines and developing cancer, even though many people living near power lines never develop cancer."
    ]},
    
    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },
    { type: 'h3', text: "Analysis & Explanation" },
    { type: 'paragraph', text: "*(Scroll down only after attempting the question)*" },
    { type: 'hr' },
    
    { type: 'h3', text: "1. Deconstruct the Stimulus Argument" },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Role Analysis' }, items: [
      {
        title: "\"The vast majority of a person’s dreams bear no resemblance...\"",
        text: "**Premise**. Establishes a low \"hit rate\" or low base rate of correlation. Most of the time, Phenomenon A (dreams) is NOT followed by Outcome B (real events).",
        badge: "Premise",
        badgeColor: "indigo"
      },
      {
        title: "\"Thus, it is unreasonable to believe... based on several vivid dreams...\"",
        text: "**Conclusion**. Dismisses the confirming instances as likely coincidence because of the overwhelming number of disconfirming instances.",
        badge: "Conclusion",
        badgeColor: "indigo"
      }
    ]},

    { type: 'h3', text: "2. Abstract the Logical Method" },
    { type: 'list', items: [
      "**Motto:** \"Just because A and B sometimes happen together doesn't prove A causes B, because most of the time A happens *without* B.\"",
      "**Diagram:**\n1. Evidence: A few instances of [Event X leading to Outcome Y] exist.\n2. Counter-Evidence: The vast majority of [Event X] do NOT lead to [Outcome Y].\n3. Conclusion: Therefore, it is unreasonable to believe that X causes Y based on those few instances."
    ]},
    
    { type: 'h3', text: "3. Evaluate the Answer Choices" },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      {
        title: "(A) ...unreasonable to believe... when tested... on only a few patients...",
        text: "This argument is about insufficient sample size (\"only a few patients\"). The stimulus is not about sample size, but about the ratio of confirming to disconfirming instances within a large sample.",
        badge: "Mismatch",
        badgeColor: "red"
      },
      {
        title: "(B) ...unreasonable to believe that surgery for ulcers is effective...",
        text: "Weighs negative outcomes against positive ones. Doesn't use the logic of \"most instances fail, so the few successes are meaningless.\"",
        badge: "Mismatch",
        badgeColor: "red"
      },
      {
        title: "(C) ...unreasonable to believe that not drinking herbal tea causes such remissions...",
        text: "Dismisses a cause by pointing to the existence of other potential causes. The stimulus's logic is based on the low frequency of the outcome, not on the existence of alternative explanations.",
        badge: "Mismatch",
        badgeColor: "red"
      },
      {
        title: "(D) A number of people who die prematurely take aspirin. But it is unreasonable to conclude that aspirin is dangerous. Most people who take aspirin do not die prematurely.",
        text: "Perfect match.\n1. Evidence: A few instances of [Taking Aspirin (X) followed by Premature Death (Y)] exist.\n2. Counter-Evidence: The vast majority of people who [Take Aspirin (X)] do NOT [Die Prematurely (Y)].\n3. Conclusion: Therefore, it is unreasonable to conclude that X causes Y.",
        badge: "Correct",
        badgeColor: "green"
      },
      {
        title: "(E) ...So it is unreasonable to deny a connection...",
        text: "The conclusion is the opposite of the stimulus's. It argues that we should *not deny* a connection, whereas the stimulus argues we should *not believe* a connection exists.",
        badge: "Mismatch",
        badgeColor: "red"
      }
    ]},

    { type: 'callout', title: "Summary & Key Takeaways", variant: "summary", text: "This question is difficult because it relies on a specific type of statistical reasoning.\n\n* **The Base Rate Argument:** The core logic is that a few \"hits\" are insignificant when compared to a huge number of \"misses.\"\n* **Structure over Topic:** The topics are different (dreams vs. aspirin), but the underlying reasoning is identical.\n* **Polarity of the Conclusion:** A quick way to eliminate (E) is by checking the direction of the conclusion (\"unreasonable to believe\" vs \"unreasonable to deny\")." }
  ]
};
