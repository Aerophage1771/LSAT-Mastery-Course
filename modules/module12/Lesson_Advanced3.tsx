import { Lesson } from '../../types';

export const Lesson_Advanced3: Lesson = {
  id: '12-11',
  title: 'Advanced Lesson 3: Justifying a Chain of Reasoning',
  content: [
    {
      "type": "h2",
      "text": "Advanced Lesson 3: Justifying a Chain of Reasoning"
    },
    {
      "type": "h3",
      "text": "Concept Focus: The Multi-Step Justification"
    },
    {
      "type": "paragraph",
      "text": "Advanced arguments don't just go from A to B. They go from A to B, and then from B to C."
    },
    {
      "type": "paragraph",
      "text": "**Premise (A):** Fact about the world."
    },
    {
      "type": "paragraph",
      "text": "**Intermediate Conclusion (B):** A sub-conclusion drawn from A."
    },
    {
      "type": "paragraph",
      "text": "**Main Conclusion (C):** A final judgment drawn from B."
    },
    {
      "type": "paragraph",
      "text": "The difficulty here is identifying *which link* in the chain the question is asking you to strengthen. The question might ask for a principle that justifies the whole argument, or it might target a specific, weak link. You must track the flow of logic carefully."
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "Worked Example"
    },
    {
      "type": "blockquote",
      "text": "**Stimulus** > > One can never tell whether another person is acting from an ulterior motive; therefore, it is impossible to tell whether someone’s action is moral, and so one should evaluate the consequences of an action rather than its morality. > > **Question** > > Which one of the following principles, if valid, most helps to justify the reasoning above? > > *   (A) The intention of an action is indispensable for an evaluation of its morality. > *   (B) The assigning of praise and blame is what is most important in the assessment of the value of human actions. > *   (C) One can sometimes know one’s own motives for a particular action. > *   (D) There can be good actions that are not performed by a good person. > *   (E) One cannot know whether someone acted morally in a particular situation unless one knows what consequences that person’s actions had."
    },
    {
      "type": "h4",
      "text": "Step 1: Deconstruct the Chain"
    },
    {
      "type": "paragraph",
      "text": "**Premise (A):** We can never know another person's motive."
    },
    {
      "type": "paragraph",
      "text": "**Intermediate Conclusion (B):** Therefore, we can't tell if their action is moral."
    },
    {
      "type": "list",
      "items": [
        "*The Logical Leap here:* Moving from \"unknown motive\" to \"unknown morality\" assumes that *motive determines morality*."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Main Conclusion (C):** Therefore, we should evaluate consequences instead of morality."
    },
    {
      "type": "list",
      "items": [
        "*The Logic:* Since B is true (we can't evaluate morality), we must do C."
      ]
    },
    {
      "type": "h4",
      "text": "Step 2: Identify the Logical Leap"
    },
    {
      "type": "paragraph",
      "text": "The most vulnerable part of this chain is the first step: A $\\rightarrow$ B. Why does not knowing a motive mean we can't judge morality? Maybe we could judge morality based on something else (like laws, or outcomes)? The argument assumes we *cannot*. It assumes motive is essential to morality."
    },
    {
      "type": "h4",
      "text": "Step 3: Evaluate the Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "**(A) The intention of an action is indispensable for an evaluation of its morality.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This matches our analysis of the A $\\rightarrow$ B gap perfectly. \"Indispensable\" means \"essential\" or \"necessary.\""
    },
    {
      "type": "list",
      "items": [
        "If intention (motive) is necessary for evaluating morality...",
        "And we can’t know intention (Premise A)...",
        "Then we can’t evaluate morality (Intermediate Conclusion B)."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(B) The assigning of praise and blame is what is most important in the assessment of the value of human actions.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This introduces a new topic (\"praise and blame\") that isn’t in the chain. It’s irrelevant to the link between motive and morality."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(C) One can sometimes know one’s own motives for a particular action.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The argument is about evaluating *others* (\"another person\"). Knowing your own motives doesn’t help bridge the gap about judging others."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(D) There can be good actions that are not performed by a good person.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This distinguishes between the act and the actor. The argument is about evaluating the act’s morality. This doesn’t explain why motive is required to evaluate the act."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(E) One cannot know whether someone acted morally in a particular situation unless one knows what consequences that person’s actions had.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This makes morality dependent on **consequences**. If this were true, we *could* judge morality just by looking at consequences (which are observable). This would destroy the argument: the author wants to say we *can’t* judge morality, so we should switch to consequences—but this principle implies judging consequences *is* judging morality."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Contradiction Trap)"
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "Key Takeaways"
    },
    {
      "type": "paragraph",
      "text": "**Map the Chain:** When you see words like \"therefore\" followed later by \"and so\" or \"thus,\" you are dealing with a chain. Sketch it out: A $\\rightarrow$ B $\\rightarrow$ C."
    },
    {
      "type": "paragraph",
      "text": "**Locate the Weakest Link:** The principle usually justifies the most questionable step. In this case, it was the definition of morality itself."
    },
    {
      "type": "paragraph",
      "text": "**Watch for Reversals:** Trap E reversed the logic, making the \"alternative\" (consequences) a part of the \"primary\" concept (morality), which wrecked the author's distinction."
    }
  ],
};
