import { Lesson } from '../../types';

export const Lesson5_Drill_CausalReasoning: Lesson = {
  id: "4-5",
  title: "Drill: Causal Reasoning (PT-103-S-1-Q-24)",
  content: [
    { type: 'h3', text: "Practice Drill: Parallel Reasoning (PT-103-S-1-Q-24)" },
    { type: 'paragraph', text: "This drill focuses on a pattern of **Causal Reasoning**, specifically identifying a unique cause for an observed effect." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },
    { type: 'hr' },
    {
      type: 'question-card',
      id: 'PT-103-S-1-Q-24',
      stimulus: "That wall is supported by several joists. The only thing that can have caused the bulge that the wall now has is a broken joist. Therefore, at least one of the joists is broken.",
      question: "Which one of the following arguments is most similar in its logical features to the argument above?",
      options: [
      "**(A)** At least one of the players in the orchestra must have made a mistake, since nothing else would have made the conductor grimace in the way she just did.",
      "**(B)** The first piece must have been the easiest, since it was the only piece in the entire concert in which the orchestra did not make many mistakes.",
      "**(C)** The players play well only when they like the music, since they tend to make mistakes when they play something they do not like.",
      "**(D)** One of the orchestra’s players must be able to play the harp, since in one of the pieces they are playing at next week’s concert the composer specified that a harp should be played.",
      "**(E)** The emotion of the music is the only thing that can have caused the conductor to look so angry just then, since the orchestra was playing perfectly."
    ]
    },
    
    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },
    { type: 'h3', text: "Analysis & Explanation" },
    { type: 'paragraph', text: "*(Scroll down only after attempting the question)*" },
    { type: 'hr' },
    
    { type: 'h3', text: "1. Deconstruct the Stimulus Argument" },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Role Analysis' }, items: [
      {
        title: "\"That wall is supported by several joists.\"",
        text: "**Background Information**. Provides context.",
        badge: "Context",
        badgeColor: "slate"
      },
      {
        title: "\"The only thing that can have caused the bulge... is a broken joist.\"",
        text: "**Premise**. Asserting a unique causal link (Effect -> Only one specific Cause).",
        badge: "Premise",
        badgeColor: "indigo"
      },
      {
        title: "\"Therefore, at least one of the joists is broken.\"",
        text: "**Conclusion**. Since the effect occurred, that unique cause must have occurred.",
        badge: "Conclusion",
        badgeColor: "indigo"
      }
    ]},

    { type: 'h3', text: "2. Abstract the Logical Method" },
    { type: 'list', items: [
      "**Motto:** \"We observed an effect. The only possible cause for that effect is X. Therefore, X must have happened.\"",
      "**Diagram:**\n1. Effect E has occurred.\n2. Rule: The only cause of E is C. (In conditional terms: E → C).\n3. Conclusion: Therefore, C occurred."
    ]},

    { type: 'h3', text: "3. Evaluate the Answer Choices" },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      {
        title: "(A) At least one... must have made a mistake, since nothing else would have made the conductor grimace...",
        text: "Perfect structural match.\n1. Effect E has occurred (the conductor grimaced).\n2. Rule: The only cause of E is C (\"nothing else would have made...\" her grimace except a mistake).\n3. Conclusion: Therefore, C occurred (a mistake was made).",
        badge: "Correct",
        badgeColor: "green"
      },
      {
        title: "(B) The first piece must have been the easiest, since it was the only piece... did not make many mistakes.",
        text: "This argument identifies something with a unique property (\"only piece with no mistakes\") and concludes something about it. Not reasoning from effect to unique cause.",
        badge: "Mismatch",
        badgeColor: "red"
      },
      {
        title: "(C) The players play well only when they like the music...",
        text: "This argument states a rule (Play Well → Like Music) and provides a reason. It does not apply this rule to a specific observed event to draw a conclusion about its cause.",
        badge: "Mismatch",
        badgeColor: "red"
      },
      {
        title: "(D) One of the players must be able to play the harp... composer specified that a harp should be played.",
        text: "Reasons from a future requirement to a present capability. \"To do X in the future, Y is required. Therefore, Y must exist now.\" Different from reasoning about the cause of a currently observed effect.",
        badge: "Mismatch",
        badgeColor: "red"
      },
      {
        title: "(E) The emotion of the music is the only thing... since the orchestra was playing perfectly.",
        text: "This argument presents an effect and considers two potential causes. It then uses a premise to *eliminate one cause*, leaving the other. The stimulus starts with a single cause; it does not involve eliminating alternatives.",
        badge: "Mismatch",
        badgeColor: "red"
      }
    ]},

    { type: 'callout', title: "Summary & Key Takeaways", variant: "summary", text: "This question tests a specific form of causal reasoning: inferring a cause from an effect when that cause is presented as the only possibility.\n\n* **\"The Only Cause\" is Key:** The phrases \"The only thing that can have caused...\" and \"nothing else would have...\" are structurally identical.\n* **Structure vs. Topic:** Notice how all the answer choices are about an orchestra. This is a common trap to make you focus on the topic instead of the logic. The correct answer (A) matches the logic, while the others use different logical structures despite the similar topic." }
  ]
};
