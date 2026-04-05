import { Lesson } from '../../types';

export const Lesson5_ArgumentByAnalogy: Lesson = {
  id: "3-5",
  title: "Argument by Analogy",
  content: [
    { type: 'h3', text: "Lesson 5: Argument by Analogy" },
    { type: 'paragraph', text: "Our goal here is to identify the **argumentative strategy** the author uses to support their conclusion. We are about to discuss one of the more common methods of reasoning found on the LSAT: **Explanation via a Similar Analogy**." },
    { type: 'paragraph', text: "Here is our plan of attack for this lesson:" },
    
    { 
      type: 'process', 
      title: "Plan of Attack",
      steps: [
        "Break down the argument into its parts",
        "Summarize the original argument",
        "Abstract that into a general method",
        "Look for that specific answer choice",
        "Confirm by selecting or removing answers based on our Fact Test"
      ] 
    },

    { type: 'paragraph', text: "Let’s apply this method to the following question." },
    { type: 'h4', text: "Question ID: PT-109-S-1-Q-2" },
    
    { type: 'h4', text: "Stimulus" },
    { type: 'blockquote', text: "**Sheila:** It has been argued that using computer technology to add color to a movie originally filmed in black and white damages the integrity of the original film. But no one argues that we should not base a movie on a novel or a short story because doing so would erode the value of the book or story. The film adaptation of the written work is a new work that stands on its own. Judgments of it do not reflect on the original. Similarly, the colorized film is a new work distinct from the original and should be judged on its own merit. It does not damage the integrity of the original black-and-white film." },
    
    { type: 'h4', text: "Question" },
    { type: 'paragraph', text: "Sheila’s argument uses which one of the following techniques of argumentation?" },
    
    { type: 'h4', text: "Answer Choices" },
    { 
      type: 'options', 
      items: [
        "(A) It appeals to an analogy between similar cases.",
        "(B) It offers a counterexample to a general principle.",
        "(C) It appeals to popular opinion on the matter at issue.",
        "(D) It distinguishes facts from value judgments.",
        "(E) It draws an inference from a general principle and a set of facts."
      ] 
    },

    { type: 'hr' },
    { type: 'h3', text: "Step 1: Break Down the Argument" },
    { type: 'paragraph', text: "Let's analyze the text sentence by sentence to see how Sheila builds her case." },
    
    { 
      type: 'breakdown', 
      labels: { title: 'Sentence', text: 'Analysis' },
      items: [
        {
          title: "\"It has been argued that colorizing... damages the integrity of the original film.\"",
          text: "States the **opposing viewpoint**. Some people think colorizing is bad for art. This is the target for Sheila's refutation.",
          badge: "Opposing View",
          badgeColor: "indigo"
        },
        {
          title: "\"But no one argues that we should not base a movie on a novel...\"",
          text: "Shifts to a **different topic**: book-to-movie adaptations. She notes a general lack of complaint here. This starts the comparison.",
          badge: "Parallel Case",
          badgeColor: "indigo"
        },
        {
          title: "\"The film adaptation... is a new work that stands on its own.\"",
          text: "Explains **why** people accept adaptations: they are separate things that don't harm the original. This is the logic she will apply to her main topic.",
          badge: "Case Logic",
          badgeColor: "indigo"
        },
        {
          title: "\"Similarly, the colorized film is a new work distinct from the original...\"",
          text: "The word \"Similarly\" confirms the link. She argues colorized films should be treated exactly like book adaptations.",
          badge: "Comparison",
          badgeColor: "indigo"
        },
        {
          title: "\"It does not damage the integrity of the original black-and-white film.\"",
          text: "The **conclusion**. Since they are separate works (based on the book example), the colorized version doesn't \"damage\" the original.",
          badge: "Conclusion",
          badgeColor: "indigo"
        }
      ] 
    },

    { type: 'h3', text: "Step 2: Summarize the Logic (Concrete)" },
    { type: 'paragraph', text: "Sheila defends colorizing movies by comparing it to turning a book into a movie. She points out that a movie based on a book is a separate piece of art that doesn't ruin the book. She then argues that a colorized film is also a separate piece of art, so it shouldn't be seen as ruining the original black-and-white film." },

    { type: 'h3', text: "Step 3: Abstract the Logic (The Method)" },
    { type: 'paragraph', text: "The author draws a parallel between two different situations (Case 1: book adaptations and Case 2: colorized films). She argues that because Case 1 is accepted for a specific reason, Case 2 should also be accepted for that same reason." },
    { type: 'callout', title: "Method: Argument by Analogy", variant: "summary", text: "Supporting a claim about one situation by comparing it to a different but similar situation where the logic is already accepted." },

    { type: 'h3', text: "Step 4: Apply the Fact Test" },
    { 
      type: 'breakdown', 
      labels: { title: 'Option Analysis', text: 'Validation' },
      items: [
        {
          title: "(A) It appeals to an analogy between similar cases.",
          text: "Sheila compares book adaptations to film colorization. Use of \"Similarly\" confirms it's a textbook **analogy between similar artistic processes**.",
          badge: "Correct",
          badgeColor: "green"
        },
        {
          title: "(B) It offers a counterexample to a general principle.",
          text: "She doesn't provide a single \"exception\" to a rule. She uses a **full parallel argument** to support a new conclusion, not a counterexample.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(C) It appeals to popular opinion on the matter at issue.",
          text: "The \"matter at issue\" is colorizing movies. She cites opinion on **books**, not movies. It's used for an analogy, not as direct proof by popularity.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(D) It distinguishes facts from value judgments.",
          text: "While both exist in the text, she **mixes them** to reach her conclusion. She never stops to point out a formal distinction between the two.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(E) It draws an inference from a general principle and a set of facts.",
          text: "She doesn't start with a general rule (like \"All adaptations are safe\"). She starts with a **specific case** and draws a parallel.",
          badge: "Incorrect",
          badgeColor: "red"
        }
      ] 
    },

    { type: 'hr' },
    { type: 'h3', text: "Summary" },
    { type: 'paragraph', text: "As we saw, our steps held up! We identified the parts of the stimulus, summarized the comparison she made, and abstracted that into an analogy. We then validated that \"Analogy\" was exactly what the correct answer described while using the Fact Test to see why the other choices didn't quite fit the logic of the text." },
    { type: 'blockquote', text: "**Library of Methods:**\n\n**1. Process of Elimination:** An argument that establishes a limited set of possibilities and systematically rules out alternatives to support the remaining option.\n\n**2. Alternative Explanation:** An argument that accepts the stated evidence but proposes a different cause or reason for that evidence.\n\n**3. Argument by Analogy:** Supporting a claim about one situation by comparing it to a different but similar situation where the logic is already accepted." },
    { type: 'paragraph', text: "Next, we are going to look at the aggressive cousin of the analogy: **Refutation by Parallel Reasoning**." }
  ]
};
