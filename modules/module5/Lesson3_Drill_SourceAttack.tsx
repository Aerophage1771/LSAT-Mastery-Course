import { Lesson } from '../../types';

export const Lesson3_Drill_SourceAttack: Lesson = {
  id: "5-3",
  title: "Drill: Source Attack (PT-102-S-3-Q-14)",
  content: [
    { type: 'h3', text: "Practice Drill: Flaw (PT-102-S-3-Q-14)" },
    { type: 'paragraph', text: "This drill will walk you through a classic and common flaw type: the **Source Attack**, also known as an **Ad Hominem** fallacy. In this type of flawed argument, the author attacks the person or group making a claim, rather than the claim itself." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },
    { type: 'hr' },
    {
      type: 'question-card',
      id: 'PT-102-S-3-Q-14',
      stimulus: "**Herbalist:** Many of my customers find that their physical coordination improves after drinking juice containing certain herbs. A few doctors assert that the herbs are potentially harmful, but doctors are always trying to maintain a monopoly over medical therapies. So there is no reason not to try my herb juice.",
      question: "The reasoning in the herbalist’s argument is flawed because the argument",
      options: [
        "**(A)** attempts to force acceptance of a claim by inducing fear of the consequences of rejecting that claim",
        "**(B)** bases a conclusion on claims that are inconsistent with each other",
        "**(C)** rejects a claim by attacking the proponents of the claim rather than addressing the claim itself",
        "**(D)** relies on evidence presented in terms that presuppose the truth of the claim for which the evidence is offered",
        "**(E)** mistakes the observation that one thing happens after another for proof that the second thing is the result of the first"
      ]
    },
    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },
    { type: 'h3', text: "Analysis & Explanation" },
    { type: 'paragraph', text: "*(Scroll down only after attempting the question)*" },
    { type: 'hr' },
    { type: 'h3', text: "1. Identify the Conclusion and Premises" },
    { 
      type: 'breakdown', 
      labels: { title: 'Quote', text: 'Role Analysis' }, 
      items: [
        {
          title: "\"Many of my customers find that their physical coordination improves...\"",
          text: "**Premise 1:** Anecdotal evidence for a benefit.",
          badge: "Evidence",
          badgeColor: "indigo"
        },
        {
          title: "\"A few doctors assert that the herbs are potentially harmful...\"",
          text: "**Counterpoint:** The opposing argument/potential risk.",
          badge: "Opposing View",
          badgeColor: "slate"
        },
        {
          title: "\"...but doctors are always trying to maintain a monopoly over medical therapies.\"",
          text: "**Premise 2:** An attack on the doctors' motives.",
          badge: "Attack",
          badgeColor: "indigo"
        },
        {
          title: "\"So there is no reason not to try my herb juice.\"",
          text: "**Conclusion:** The main recommendation.",
          badge: "Conclusion",
          badgeColor: "indigo"
        }
      ] 
    },
    { type: 'h3', text: "2. Find the Logical Gap" },
    { type: 'paragraph', text: "The herbalist’s argument structure is: \"My product might be beneficial. A group of experts warns it might be harmful. But those experts have bad motives, so you can ignore their warning. Therefore, you should try my product.\"" },
    { type: 'paragraph', text: "The critical leap occurs when the herbalist dismisses the doctors' warning. Instead of providing evidence that the herbs are actually safe, the herbalist attacks the *doctors' motives* (\"they want a monopoly\"). The argument jumps from \"the source of the warning is biased\" to \"the warning itself is invalid.\" This is a classic reasoning error. A biased source can still tell the truth. The potential harm of the herbs remains unaddressed." },
    { type: 'h3', text: "3. Consult Your Mental Flaw Checklist" },
    { 
      type: 'list', 
      items: [
        "**Causation?** Yes, there's a weak causal claim in the first sentence, but it's not the main flaw. The argument's conclusion rests on dismissing the *doctors' claim*, not on proving the juice works.",
        "**Conditional Logic?** No \"if...then\" structure here.",
        "**Sampling?** The evidence from \"many customers\" is weak, but not the central flaw.",
        "**Source Attack?** **Yes.** This is the primary flaw. The argument explicitly attacks the doctors' motives as the sole reason for rejecting their warning."
      ] 
    },
    { type: 'h3', text: "4. Formulate an Abstract Prediction" },
    { type: 'paragraph', text: "The argument dismisses a claim (that the herbs are harmful) by attacking the motives of the people making the claim (the doctors), instead of addressing the substance of the claim itself (the actual safety of the herbs)." },
    { type: 'h3', text: "5. Evaluate the Answer Choices" },
    { 
      type: 'breakdown', 
      labels: { title: 'Option', text: 'Evaluation' }, 
      items: [
        {
          title: "(A) attempts to force acceptance... by inducing fear...",
          text: "The argument does the opposite; it tries to *reduce* fear by dismissing a warning about potential harm.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(B) bases a conclusion on claims that are inconsistent...",
          text: "The claims are not inconsistent. The herbalist acknowledges the doctors' position (\"A few doctors assert...\") and then attempts to refute it. This is a standard argumentative structure, even if the refutation is flawed.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(C) rejects a claim by attacking the proponents...",
          text: "This is a perfect, abstract description of the flaw we identified. \"Rejects a claim\" = dismisses the assertion of harm. \"Attacking the proponents\" = claims doctors want a monopoly. \"Rather than addressing the claim\" = provides no safety evidence.",
          badge: "Correct",
          badgeColor: "green"
        },
        {
          title: "(D) relies on evidence presented in terms that presuppose the truth...",
          text: "This describes circular reasoning. The argument is not circular; it provides (flawed) evidence to reach its conclusion.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(E) mistakes the observation that one thing happens after another...",
          text: "This describes the potential causal flaw in the first sentence. While this is a minor flaw in the evidence, it is not the *main* structural flaw on which the conclusion rests. The conclusion hinges entirely on dismissing the warning via the source attack.",
          badge: "Incorrect",
          badgeColor: "red"
        }
      ] 
    },
    { 
      type: 'callout', 
      title: "Summary & Key Takeaways", 
      variant: "summary", 
      text: "This question is a textbook example of a **Source Attack (Ad Hominem)** flaw. The structure is simple and direct:\n1. Acknowledge an opposing claim.\n2. Attack the motives/character of the people who make that claim.\n3. Conclude that the opposing claim can be ignored.\n\n**Key Takeaway:** An argument's validity depends on the logical connection between its premises and conclusion, not on the character or motives of the people involved in the debate. You cannot prove a claim is false by showing that the person who made it is biased or has something to gain." 
    }
  ]
};
