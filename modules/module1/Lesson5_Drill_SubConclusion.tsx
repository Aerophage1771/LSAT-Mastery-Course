import { Lesson } from '../../types';

export const Lesson5_Drill_SubConclusion: Lesson = {
  id: "1-5",
  title: "Drill: Sub-Conclusion (PT-114-S-4-Q-18)",
  content: [
    { type: 'h3', text: "Practice Drill: Identifying an Argument Part (PT-114-S-4-Q-18)" },
    { type: 'paragraph', text: "This drill introduces a critical structural element: the **Sub-Conclusion** (also known as an Intermediate Conclusion). These statements function as a bridge, receiving support from one claim while providing support to another." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },
    { type: 'hr' },
    {
      type: 'question-card',
      id: 'PT-114-S-4-Q-18',
      stimulus: "**Anders:** The physical structure of the brain plays an important role in thinking. So researchers developing “thinking machines”—computers that can make decisions based on both common sense and factual knowledge—should closely model those machines on the structure of the brain.\n\n**Yang:** Important does not mean essential. After all, no flying machine closely modeled on birds has worked; workable aircraft are structurally very different from birds. **So thinking machines closely modeled on the brain are also likely to fail.** In developing a workable thinking machine, researchers would therefore increase their chances of success if they focus on the brain’s function and simply ignore its physical structure.",
      question: "The statement “thinking machines closely modeled on the brain are also likely to fail” serves which one of the following roles in Yang’s argument?",
      options: [
      "**(A)** the main conclusion of the argument",
      "**(B)** a subsidiary conclusion used in support of the main conclusion",
      "**(C)** a principle of research invoked in support of the conclusion",
      "**(D)** a particular example illustrating a general claim",
      "**(E)** background information providing a context for the argument"
    ]
    },
    
    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },
    { type: 'h3', text: "Analysis & Explanation" },
    { type: 'paragraph', text: "*(Scroll down only after attempting the question)*" },
    { type: 'hr' },
    
    { type: 'h3', text: "1. Find the Target" },
    { type: 'paragraph', text: "The target is the sentence in the middle of Yang's response: *\"So thinking machines closely modeled on the brain are also likely to fail.\"*" },
    
    { type: 'h3', text: "2. Break Down the Content Line-by-Line" },
    { type: 'paragraph', text: "We focus specifically on Yang's argument." },
    
    { type: 'breakdown', labels: { title: 'Quote', text: 'Meaning' }, items: [
      {
        title: "\"Important does not mean essential.\"",
        text: "Yang challenges Anders' assumption. Just because structure matters, it doesn't mean it is required."
      },
      {
        title: "\"After all, no flying machine closely modeled on birds has worked...\"",
        text: "Yang offers an analogy as evidence: planes that tried to copy birds failed."
      },
      {
        title: "\"So thinking machines closely modeled on the brain are also likely to fail.\" (Target)",
        text: "Yang applies the analogy to the current topic: computers that try to copy brains will likely fail too. The word **\"So\"** indicates this is a conclusion drawn from the previous sentence."
      },
      {
        title: "\"In developing... researchers would therefore increase their chances of success if they... ignore its physical structure.\"",
        text: "Yang gives a final recommendation: because those machines will likely fail, researchers should try a different approach (ignoring structure). The word **\"therefore\"** indicates this is the final deduction."
      }
    ]},

    { type: 'h3', text: "3. Map the Argument's Logical Structure" },
    { type: 'paragraph', text: "Now, we map the flow of support within Yang's argument." },
    
    { type: 'breakdown', labels: { title: 'Statement', text: 'Role Analysis' }, items: [
      { 
        title: "The Bird/Plane Analogy (Premise)",
        text: "The claim regarding flying machines is used to support the Target Statement.",
        badge: "Premise",
        badgeColor: "indigo"
      },
      { 
        title: "\"thinking machines... likely to fail\" (Target)",
        text: "Predicted outcome derived from the analogy. It is then used to support the final recommendation.",
        badge: "Sub-Conclusion",
        badgeColor: "indigo"
      },
      { 
        title: "Recommendation to ignore structure (Main Conclusion)",
        text: "The final claim. It is supported by the target statement (because they will fail, we should do X).",
        badge: "Main Conclusion",
        badgeColor: "indigo"
      }
    ]},

    { type: 'h3', text: "4. Pinpoint Role & Predict" },
    { type: 'paragraph', text: "The target statement is supported by the premise about airplanes, but it also supports the final recommendation about how researchers should proceed. A statement that is supported by a premise and supports another conclusion is a **Sub-Conclusion** (or Subsidiary Conclusion)." },
    
    { type: 'callout', title: "Prediction", variant: "tip", text: "Therefore, our prediction is: **The target statement is a sub-conclusion used to support the final recommendation.**" },
    
    { type: 'h3', text: "5. Evaluate Answer Choices" },
    
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      {
        title: "(A) the main conclusion of the argument",
        text: "The target statement supports the final sentence. If the target is true (machines will fail), that is the *reason* why researchers should adopt the strategy in the final sentence (ignore structure). Since the target supports something else, it cannot be the *main* conclusion.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(B) a subsidiary conclusion used in support of the main conclusion",
        text: "This perfectly matches our map. It receives support from the airplane analogy and provides support for the final recommendation.",
        badge: "Correct",
        badgeColor: "green"
      },
      {
        title: "(C) a principle of research invoked in support of the conclusion",
        text: "A principle is usually a broad, general rule (e.g., \"One should always model machines on nature\"). The target statement is a specific prediction about a specific type of machine (\"thinking machines... are likely to fail\").",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(D) a particular example illustrating a general claim",
        text: "The target is not an example; it is the prediction derived from an example. The *flying machines* were the example/analogy used to prove the point about thinking machines.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(E) background information providing a context for the argument",
        text: "The target statement is an argumentative claim derived from evidence (\"So...\"). It is not neutral background context.",
        badge: "Incorrect",
        badgeColor: "red"
      }
    ]},

    { type: 'callout', title: "Summary & Key Takeaways", variant: "summary", text: "This question illustrates the role of a **Sub-Conclusion**.\n\nKey takeaways:\n* **The \"Double Indicator\" Trick:** Note that the stimulus contains two conclusion indicators: \"**So** thinking machines...\" and \"**therefore** increase their chances...\" When you see two indicators, the earlier one usually introduces a sub-conclusion, and the later one introduces the main conclusion.\n* **The Bridge Function:** A sub-conclusion acts as a bridge. It connects the raw evidence (the premise about birds) to the final point (the recommendation for researchers).\n* **Logical Direction:** Always ask: \"Does this statement support the next one, or does the next one support this one?\" Because machines will likely fail (Target), researchers should ignore structure (Main Conclusion). This confirms the direction of support." }
  ]
};
