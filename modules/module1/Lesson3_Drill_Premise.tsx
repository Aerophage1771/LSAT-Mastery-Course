import { Lesson } from '../../types';

export const Lesson3_Drill_Premise: Lesson = {
  id: "1-3",
  title: "Drill: Premise (PT-111-S-4-Q-2)",
  content: [
    { type: 'h3', text: "Practice Drill: Identifying an Argument Part (PT-111-S-4-Q-2)" },
    { type: 'paragraph', text: "This drill focuses on identifying the specific structural role a highlighted sentence plays within an argument. We're starting with a question that targets the most fundamental building block of any logical argument." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },
    { type: 'hr' },
    {
      type: 'question-card',
      id: 'PT-111-S-4-Q-2',
      stimulus: "**Economist:** Many analysts predict that the new tariff policy will increase domestic manufacturing jobs. However, this outcome is unlikely. **Domestic manufacturers rely heavily on imported raw materials, which will become significantly more expensive under the new policy.** Consequently, production costs will rise, forcing manufacturers to cut labor costs to remain competitive.",
      question: "The statement that *domestic manufacturers rely heavily on imported raw materials* figures in the economist's argument in which one of the following ways?",
      options: [
      "**(A)** It is the main conclusion of the argument.",
      "**(B)** It is a claim that the argument seeks to refute.",
      "**(C)** It is a premise offered in support of the claim that production costs will rise.",
      "**(D)** It is a background fact used to set the context for the debate.",
      "**(E)** It is an intermediate conclusion supported by the claim that labor costs must be cut."
    ]
    },
    
    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },
    { type: 'h3', text: "Analysis & Explanation" },
    { type: 'paragraph', text: "*(Scroll down only after attempting the question)*" },
    { type: 'hr' },
    
    { type: 'h3', text: "1. Find the Target" },
    { type: 'paragraph', text: "The target is the bolded sentence: *\"Domestic manufacturers rely heavily on imported raw materials...\"*" },
    
    { type: 'h3', text: "2. Break Down the Content Line-by-Line" },
    { type: 'paragraph', text: "First, let's paraphrase each sentence to ensure we understand its meaning before analyzing its function." },
    
    { type: 'breakdown', labels: { title: 'Quote', text: 'Meaning' }, items: [
      { 
        title: "\"Many analysts predict that the new tariff policy will increase domestic manufacturing jobs.\"",
        text: "Someone else's opinion is that the policy will be good for jobs."
      },
      { 
        title: "\"However, this outcome is unlikely.\"",
        text: "The author disagrees and thinks jobs will *not* increase. This is the author's main stance."
      },
      { 
        title: "\"**Domestic manufacturers rely heavily on imported raw materials, which will become significantly more expensive under the new policy.**\" (Target)",
        text: "The author presents a fact: companies need foreign materials, and the policy will make those materials cost more."
      },
      { 
        title: "\"Consequently, production costs will rise, forcing manufacturers to cut labor costs to remain competitive.\"",
        text: "The author outlines a chain reaction: higher material costs lead to higher overall business costs, which will force companies to spend less on employees (i.e., fire people or lower wages)."
      }
    ]},

    { type: 'h3', text: "3. Map the Argument's Logical Structure" },
    { type: 'paragraph', text: "Now, using our understanding of the content, we can determine the logical role of each piece." },
    
    { type: 'breakdown', labels: { title: 'Text / Quote', text: 'Role Analysis' }, items: [
      { 
        title: "\"Many analysts predict that the new tariff policy will increase domestic manufacturing jobs.\"",
        text: "Presents a viewpoint the author intends to debunk.",
        badge: "Opposing View",
        badgeColor: "indigo"
      },
      { 
        title: "\"However, this outcome is unlikely.\"",
        text: "The author's central claim, which the rest of the argument is built to prove.",
        badge: "Main Conclusion",
        badgeColor: "indigo"
      },
      { 
        title: "\"**Domestic manufacturers rely heavily on imported raw materials...**\" (Target)",
        text: "A factual claim used as the foundational reason for the author's argument. It doesn't receive support from any other statement.",
        badge: "Premise",
        badgeColor: "indigo"
      },
      { 
        title: "\"Consequently, production costs will rise...\"",
        text: "Follows logically from the premise. The claim that \"production costs will rise\" is a direct result of the premise. It then supports the final proof.",
        badge: "Sub-conclusion",
        badgeColor: "indigo"
      }
    ]},

    { type: 'h3', text: "4. Pinpoint Role & Predict" },
    { type: 'paragraph', text: "The target statement is a foundational piece of evidence. It initiates the author's entire chain of reasoning and is not supported by any other statement." },
    { type: 'callout', title: "Prediction", variant: "tip", text: "Therefore, our prediction is: **The target statement is a premise that functions as the evidence for the subsequent claim that production costs will rise.**" },
    
    { type: 'h3', text: "5. Evaluate Answer Choices" },
    
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
       {
         title: "(A) It is the main conclusion of the argument.",
         text: "The main conclusion is the author's central opinion, which is that the predicted job increase is \"unlikely.\" The target statement is a factual claim presented as a *reason* for this conclusion, not the conclusion itself.",
         badge: "Incorrect",
         badgeColor: "red"
       },
       {
         title: "(B) It is a claim that the argument seeks to refute.",
         text: "The argument seeks to refute the analysts' prediction that jobs will increase. The author presents the target statement as a true and undisputed fact to *build* their own case.",
         badge: "Incorrect",
         badgeColor: "red"
       },
       {
         title: "(C) It is a premise offered in support of the claim that production costs will rise.",
         text: "This perfectly describes the target statement's function. It directly answers the question, \"Why will production costs rise?\" Because raw materials will become more expensive. This is a classic premise-conclusion relationship.",
         badge: "Correct",
         badgeColor: "green"
       },
       {
         title: "(D) It is a background fact used to set the context for the debate.",
         text: "This statement is not neutral context; it is an active and essential piece of the author's reasoning. The entire argument hinges on this fact. Without it, the claim that costs will rise is unsupported.",
         badge: "Incorrect",
         badgeColor: "red"
       },
       {
         title: "(E) It is an intermediate conclusion supported by the claim that labor costs must be cut.",
         text: "This choice reverses the direction of support. The argument's logic flows from the target statement *to* the labor cuts, not the other way around. The fact that materials will get more expensive is not proven *by* the need to cut labor costs; rather, it is the *cause* of it.",
         badge: "Incorrect",
         badgeColor: "red"
       }
    ]},

    { type: 'callout', title: "Summary & Key Takeaways", variant: "summary", text: "This question tests your ability to identify a core **premise**. A premise is the evidence or reason an author provides to support another claim.\n\nTo distinguish roles, ask yourself these key questions:\n* **Does it GIVE support or RECEIVE support?** A premise only *gives* support. A conclusion *receives* it. The target statement gives support to the idea that costs will rise.\n* **Is it an ACTIVE part of the reasoning or PASSIVE context?** A premise is an active link in the logical chain. Background info is not. The target statement is crucial to proving the conclusion.\n* **What is the DIRECTION of the logic?** Does A lead to B, or does B lead to A? Incorrect choices often reverse this flow. Here, expensive materials (target) lead to higher costs, not the other way around." }
  ]
};
