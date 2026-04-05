import { Lesson } from '../../types';

export const Lesson4_Drill_SufficientVsNecessary: Lesson = {
  id: "5-4",
  title: "Drill: Sufficient vs Necessary (PT-104-S-4-Q-10)",
  content: [
    { type: 'h3', text: "Practice Drill: Flaw (PT-104-S-4-Q-10)" },
    { type: 'paragraph', text: "This drill will walk you through a foundational flaw involving conditional logic: confusing a **sufficient condition** with a **necessary condition**. This error is extremely common on the LSAT and often appears in arguments that try to explain why a particular event occurred." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },
    { type: 'hr' },
    {
      type: 'question-card',
      id: 'PT-104-S-4-Q-10',
      stimulus: "Unplugging a peripheral component such as a “mouse” from a personal computer renders all of the software programs that require that component unusable on that computer. On Fred’s personal computer, a software program that requires a mouse has become unusable. So it must be that the mouse for Fred’s computer became unplugged.",
      question: "The argument is most vulnerable to which one of the following criticisms?",
      options: [
        "**(A)** It contains a shift in the meaning of “unusable” from “permanently unusable” to “temporarily unusable.”",
        "**(B)** It treats an event that can cause a certain result as though that event is necessary to bring about that result.",
        "**(C)** It introduces information unrelated to its conclusion as evidence in support of that conclusion.",
        "**(D)** It attempts to support its conclusion by citing a generalization that is too broad.",
        "**(E)** It overlooks the possibility that some programs do not require a peripheral component such as a mouse."
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
          title: "\"Unplugging a peripheral component... renders all... unusable\"",
          text: "**Premise 1 (The Rule):** Unplugging the mouse is a *sufficient* cause to make the program unusable. (If you unplug the mouse, the program becomes unusable).",
          badge: "Rule",
          badgeColor: "indigo"
        },
        {
          title: "\"On Fred’s personal computer, a software program that requires a mouse has become unusable.\"",
          text: "**Premise 2 (The Observation):** The program has become unusable.",
          badge: "Evidence",
          badgeColor: "indigo"
        },
        {
          title: "\"So it must be that the mouse for Fred’s computer became unplugged.\"",
          text: "**Conclusion (The Diagnosis):** The specific sufficient condition must have occurred.",
          badge: "Conclusion",
          badgeColor: "indigo"
        }
      ] 
    },
    { type: 'h3', text: "2. Find the Logical Gap" },
    { type: 'paragraph', text: "The author knows one way to make the program unusable: unplugging the mouse. When the author sees that the program is unusable, they immediately conclude that this *one specific cause* must be the reason." },
    { type: 'paragraph', text: "The logical leap is the failure to consider **alternative causes**. Could there be other reasons why a program that needs a mouse might become unusable? Of course. The mouse itself could be broken, the software could have crashed, the computer could be frozen, or a driver could be corrupted. The author treats one possible cause as the *only* possible cause." },
    { type: 'h3', text: "3. Consult Your Mental Flaw Checklist" },
    { 
      type: 'list', 
      items: [
        "**Causation?** **Yes.** The author identifies a correlation (unusable program) and wrongly infers a single, specific cause. This is a classic \"alternative cause\" flaw.",
        "**Conditional Logic?** **Yes.** This is the most formal way to describe the error. The argument follows this fallacious structure:\n* If A (unplug mouse), then B (program unusable).\n* B is true.\n* Therefore, A must be true.\nThis is a **Mistaken Reversal**. It confuses a *sufficient* condition (A is enough to cause B) with a *necessary* condition (A is required for B)."
      ] 
    },
    { type: 'h3', text: "4. Formulate an Abstract Prediction" },
    { type: 'paragraph', text: "The argument incorrectly assumes that because one event is *enough* to cause a result, it is the *only* event that can cause that result. It mistakes a sufficient condition for a necessary one." },
    { type: 'h3', text: "5. Evaluate the Answer Choices" },
    { 
      type: 'breakdown', 
      labels: { title: 'Option', text: 'Evaluation' }, 
      items: [
        {
          title: "(A) It contains a shift in the meaning of “unusable”...",
          text: "The term \"unusable\" is used consistently to mean \"not functioning.\" There's no shift in meaning.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(B) It treats an event that can cause a certain result as though that event is necessary...",
          text: "This is a perfect abstract description of the flaw.\n* \"an event that can cause a certain result\" = unplugging the mouse (a sufficient condition).\n* \"as though that event is necessary\" = as if it were the only possible cause.",
          badge: "Correct",
          badgeColor: "green"
        },
        {
          title: "(C) It introduces information unrelated to its conclusion...",
          text: "All the information is directly relevant. The argument is about mice and programs.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(D) It attempts to support its conclusion by citing a generalization that is too broad.",
          text: "The generalization in the first sentence is not too broad; it's a statement of fact that sets up the argument. The error is in the deduction from that fact, not the fact itself.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(E) It overlooks the possibility that some programs do not require a peripheral component...",
          text: "The argument explicitly states it is about \"a software program that *requires* a mouse.\" Therefore, programs that don't require a mouse are irrelevant.",
          badge: "Incorrect",
          badgeColor: "red"
        }
      ] 
    },
    { 
      type: 'callout', 
      title: "Summary & Key Takeaways", 
      variant: "summary", 
      text: "This question presents a classic and fundamental logical error: **confusing a sufficient condition with a necessary one.**\n\n* **Sufficient Condition:** An event that is *enough* to guarantee a result. (Rain is sufficient to make the ground wet).\n* **Necessary Condition:** An event that is *required* for a result. (Oxygen is necessary for human life).\n\nThe flaw occurs when an author sees the result (the wet ground) and concludes it *must* have been caused by one specific sufficient condition (rain), ignoring all other possibilities (sprinklers, a fire hydrant, etc.).\n\n**Key Takeaway:** When an argument presents one cause for an effect and then concludes that cause *must* have been the reason, always ask: **\"Are there any other ways this could have happened?\"** If the answer is yes, you've found the flaw." 
    }
  ]
};
