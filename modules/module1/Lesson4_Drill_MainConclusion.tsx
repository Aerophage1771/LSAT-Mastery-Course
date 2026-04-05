import { Lesson } from '../../types';

export const Lesson4_Drill_MainConclusion: Lesson = {
  id: "1-4",
  title: "Drill: Main Conclusion (PT-112-S-4-Q-3)",
  content: [
    { type: 'h3', text: "Practice Drill: Identifying an Argument Part (PT-112-S-4-Q-3)" },
    { type: 'paragraph', text: "This drill introduces the second most common role you will encounter: the **Main Conclusion**." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },
    { type: 'hr' },
    {
      type: 'question-card',
      id: 'PT-112-S-4-Q-3',
      stimulus: "**Legal theorist:** **It is unreasonable to incarcerate anyone for any other reason than that he or she is a serious threat to the property or lives of other people.** The breaking of a law does not justify incarceration, for lawbreaking proceeds either from ignorance of the law or of the effects of one’s actions, or from the free choice of the lawbreaker. Obviously mere ignorance cannot justify incarcerating a lawbreaker, and even free choice on the part of the lawbreaker fails to justify incarceration, for free choice proceeds from the desires of an agent, and the desires of an agent are products of genetics and environmental conditioning, neither of which is controlled by the agent.",
      question: "The claim in the first sentence of the passage plays which one of the following roles in the argument?",
      options: [
      "**(A)** It is offered as a premise that helps to show that no actions are under the control of the agent.",
      "**(B)** It is offered as background information necessary to understand the argument.",
      "**(C)** It is offered as the main conclusion that the argument is designed to establish.",
      "**(D)** It is offered as evidence for the stated claim that protection of life and property is more important than retribution for past illegal acts.",
      "**(E)** It is offered as evidence for the stated claim that lawbreaking proceeds from either ignorance of the law, or ignorance of the effects of one’s actions, or free choice."
    ]
    },
    
    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },
    { type: 'h3', text: "Analysis & Explanation" },
    { type: 'paragraph', text: "*(Scroll down only after attempting the question)*" },
    { type: 'hr' },
    
    { type: 'h3', text: "1. Find the Target" },
    { type: 'paragraph', text: "The target is the first sentence: *\"It is unreasonable to incarcerate anyone for any other reason than that he or she is a serious threat to the property or lives of other people.\"*" },
    
    { type: 'h3', text: "2. Break Down the Content Line-by-Line" },
    { type: 'paragraph', text: "First, let's paraphrase each distinct idea to ensure we understand its meaning." },
    
    { type: 'breakdown', labels: { title: 'Quote', text: 'Meaning' }, items: [
      {
        title: "*\"It is unreasonable to incarcerate anyone for any other reason than that he or she is a serious threat...\"* (Target)",
        text: "Imprisonment is only justified if someone is dangerous."
      },
      {
        title: "\"The breaking of a law does not justify incarceration\"",
        text: "Simply breaking a law is not a good enough reason to put someone in jail."
      },
      {
        title: "\"for lawbreaking proceeds either from ignorance... or from the free choice...\"",
        text: "The author states the two causes of lawbreaking. The word **\"for\"** signals this is a reason for the previous claim."
      },
      {
        title: "\"Obviously mere ignorance cannot justify incarcerating a lawbreaker\"",
        text: "The author dismisses the first cause (ignorance) as a valid reason for jail."
      },
      {
        title: "\"and even free choice on the part of the lawbreaker fails to justify incarceration\"",
        text: "The author dismisses the second cause (free choice) as a valid reason for jail."
      },
      {
        title: "\"for free choice proceeds from the desires of an agent... products of genetics and environmental conditioning...\"",
        text: "The author gives the ultimate reason: since our choices are shaped by things we don't control, we can't be held fully responsible for them."
      }
    ]},

    { type: 'h3', text: "3. Map the Argument's Logical Structure" },
    { type: 'paragraph', text: "Now, using our understanding of the content, we can determine the logical role of each piece." },
    
    { type: 'breakdown', labels: { title: 'Text / Quote', text: 'Role Analysis' }, items: [
      { 
        title: "\"**It is unreasonable to incarcerate anyone for any other reason than that he or she is a serious threat...**\" (Target)",
        text: "The author's central thesis. The rest of the paragraph provides the \"why\" for this belief. It receives support from the sub-conclusion about lawbreaking.",
        badge: "Main Conclusion",
        badgeColor: "indigo"
      },
      { 
        title: "\"The breaking of a law does not justify incarceration...\"",
        text: "An intermediate claim. It supports the Main Conclusion directly. It is supported by the specific rejection of ignorance and free choice as valid justifications.",
        badge: "Sub-Conclusion",
        badgeColor: "indigo"
      },
      { 
        title: "\"...mere ignorance cannot justify... and even free choice ... fails to justify incarceration...\"",
        text: "These claims support the idea that lawbreaking doesn't justify incarceration. The point about free choice is the conclusion of a smaller sub-argument involving genetics.",
        badge: "Sub-Conclusion",
        badgeColor: "indigo"
      },
      { 
        title: "\"...desires... are products of genetics and environmental conditioning...\"",
        text: "The foundational premise (evidence). It supports the claim that free choice fails to justify incarceration by arguing that we don't control our desires.",
        badge: "Premise",
        badgeColor: "indigo"
      }
    ]},
    
    { type: 'h3', text: "4. Pinpoint Role & Predict" },
    { type: 'paragraph', text: "The target statement is the overarching claim that the entire chain of reasoning is designed to support. It receives support from other statements but does not provide support to any other statement." },
    
    { type: 'callout', title: "Prediction", variant: "tip", text: "Therefore, our prediction is: **The target statement is the main conclusion of the argument.**" },
    
    { type: 'h3', text: "5. Evaluate Answer Choices" },
    
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      {
        title: "(A) It is offered as a premise that helps to show that no actions are under the control of the agent.",
        text: "Logical Reversal. The claim about actions not being under an agent's control is a *premise* used to support the target statement, not the other way around. The target is a conclusion.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(B) It is offered as background information necessary to understand the argument.",
        text: "The target statement is the author's primary, debatable opinion that they actively argue for. It is the central point of the argument, not neutral background context.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(C) It is offered as the main conclusion that the argument is designed to establish.",
        text: "This perfectly matches our prediction. The entire argument is structured to provide reasons why we should believe this initial claim about the limits of justified incarceration.",
        badge: "Correct",
        badgeColor: "green"
      },
      {
        title: "(D) It is offered as evidence for the stated claim that protection of life and property is more important than retribution for past illegal acts.",
        text: "The target is a conclusion, not evidence. Furthermore, the argument does not make a claim about the *relative importance* of protection vs. retribution; it argues that certain justifications for incarceration are invalid.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(E) It is offered as evidence for the stated claim that lawbreaking proceeds from either ignorance of the law, or ignorance of the effects of one’s actions, or free choice.",
        text: "Logical Reversal. The statement about the causes of lawbreaking is a *premise* used to support the target statement, not a conclusion that the target statement supports.",
        badge: "Incorrect",
        badgeColor: "red"
      }
    ]},

    { type: 'callout', title: "Summary & Key Takeaways", variant: "summary", text: "This question demonstrates that the **Main Conclusion** frequently appears at the very beginning of the stimulus.\n\nKey takeaways:\n* **Initial Statement as Conclusion:** An initial strong assertion, especially if followed by premise indicators like \"for\" or \"since\" in the subsequent sentences, often signals the main conclusion that the rest of the passage will defend.\n* **Direction of Support:** The entire argument flows toward the first sentence. The detailed discussion of free will provides the foundation for the intermediate claim about lawbreaking, which in turn proves the main point about incarceration.\n* **The Ultimate Point:** Ask yourself: what is the single claim the author wants me to walk away believing? In this case, it's the very first sentence." }
  ]
};
