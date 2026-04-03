import { Lesson } from '../../types';

export const Lesson_Advanced1: Lesson = {
  id: '13-8',
  title: 'Advanced Lesson 1: Navigating a Multi-Rule Labyrinth',
  content: [
    {
      "type": "h2",
      "text": "Advanced Lesson 1: Navigating a Multi-Rule Labyrinth"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Multiple Interlocking Rules & Sophisticated Fallacies"
    },
    {
      "type": "paragraph",
      "text": "This lesson tackles a common feature of high-difficulty Principle-Apply questions: the stimulus provides multiple, distinct principles. Your task is to navigate this logical labyrinth, understanding which rule applies to which situation and, more importantly, which situations are *not* covered."
    },
    {
      "type": "paragraph",
      "text": "These questions are difficult because they create a complex decision tree. One rule might provide a sufficient condition to prove an action is *justified*, while another provides a sufficient condition to prove it is *unjustified*. The trap answers are designed to exploit the gaps between these rules, often by presenting sophisticated logical fallacies like **Denying the Antecedent** (arguing that because the trigger for a rule wasn't pulled, the opposite of the outcome must be true)."
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
      "text": "**Stimulus** > > If an act of civil disobedience—willfully breaking a specific law in order to bring about legal reform—is done out of self-interest alone and not out of a concern for others, it cannot be justified. But one is justified in performing an act of civil disobedience if one's conscience requires one to do so. > > **Question** > > Which one of the following judgments most closely conforms to the principles stated above? > > *   (A) Keisha's protest against what she perceived to be a brutal and repressive dictatorship in another country was an act of justified civil disobedience, because in organizing an illegal but peaceful demonstration calling for a return to democratic leadership in that country, she acted purely out of concern for the people of that country. > *   (B) Janice's protest against a law that forbade labor strikes was motivated solely by a desire to help local mine workers obtain fair wages. But her conscience did not require her to protest this law, so Janice did not perform an act of justified civil disobedience. > *   (C) In organizing an illegal protest against the practice in her country of having prison inmates work eighteen hours per day, Georgette performed an act of justified civil disobedience: she acted out of concern for her fellow inmates rather than out of concern for herself. > *   (D) Maria's deliberate violation of a law requiring prepublication government approval of all printed materials was an act of justified civil disobedience: though her interest as an owner of a publishing company would be served by repeal of the law, she violated the law because her conscience required doing so on behalf of all publishers. > *   (E) In organizing a parade of motorcyclists riding without helmets through the capital city, Louise's act was not one of justified civil disobedience: she was willfully challenging a specific law requiring motorcyclists to wear helmets, but her conscience did not require her to organize the parade."
    },
    {
      "type": "h4",
      "text": "Step 1: Map the Principles"
    },
    {
      "type": "paragraph",
      "text": "We have two distinct rules. Let's map each one separately."
    },
    {
      "type": "paragraph",
      "text": "**Principle 1 (The Unjustified Path):** This rule gives us a way to prove an act is *not* justified."
    },
    {
      "type": "paragraph",
      "text": "**Trigger:** If an act is done from (Self-Interest Alone **AND** Not Out of Concern for Others)."
    },
    {
      "type": "paragraph",
      "text": "**Consequence:** Then the act is **Not Justified**."
    },
    {
      "type": "paragraph",
      "text": "**Principle 2 (The Justified Path):** This rule gives us a way to prove an act *is* justified."
    },
    {
      "type": "paragraph",
      "text": "**Trigger:** If one's **Conscience Requires** the act."
    },
    {
      "type": "paragraph",
      "text": "**Consequence:** Then the act **Is Justified**."
    },
    {
      "type": "paragraph",
      "text": "It is crucial to note that these are separate, one-way streets. The absence of the trigger for one rule doesn't allow you to conclude anything about the other."
    },
    {
      "type": "h4",
      "text": "Step 2: Identify the Specific Task"
    },
    {
      "type": "paragraph",
      "text": "The stem asks which judgment \"most closely conforms to the principles.\" This is a \"Find the Correct Application\" task. We need to find the one scenario and conclusion that represents a valid, logical deduction using one of our two mapped principles."
    },
    {
      "type": "h4",
      "text": "Step 3: Prephrase the Solution"
    },
    {
      "type": "paragraph",
      "text": "A correct answer will either perfectly match Principle 1 or Principle 2. An incorrect answer will likely misinterpret a condition (e.g., treating \"concern for others\" as sufficient for justification) or commit a formal logic error. We should be on high alert for the \"Denying the Antecedent\" fallacy related to Principle 2: arguing that because conscience *doesn't* require an act, it *isn't* justified."
    },
    {
      "type": "h4",
      "text": "Step 4: Test Answer Choices Against Your Map"
    },
    {
      "type": "paragraph",
      "text": "**(A) Keisha's protest against what she perceived to be a brutal and repressive dictatorship in another country was an act of justified civil disobedience, because in organizing an illegal but peaceful demonstration calling for a return to democratic leadership in that country, she acted purely out of concern for the people of that country.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This argument uses \"concern for others\" to prove the act is \"justified.\" Does this fit our rules? No. Our principles never state that \"concern for others\" is a *sufficient* condition for justification. It's merely a necessary condition to avoid being automatically unjustified under Principle 1. This is a subtle but critical misapplication."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Condition Mismatch)"
    },
    {
      "type": "paragraph",
      "text": "**(B) Janice's protest against a law that forbade labor strikes was motivated solely by a desire to help local mine workers obtain fair wages. But her conscience did not require her to protest this law, so Janice did not perform an act of justified civil disobedience.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This argument has the structure: \"Conscience did not require it, therefore the act is not justified.\" This is a perfect example of the **Denying the Antecedent** fallacy. Principle 2 is `If A, then B`. This argument reasons `Not A, therefore Not B`. This is logically invalid. The act could still be justified for other reasons not mentioned."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Logical Fallacy Trap)"
    },
    {
      "type": "paragraph",
      "text": "**(C) In organizing an illegal protest against the practice in her country of having prison inmates work eighteen hours per day, Georgette performed an act of justified civil disobedience: she acted out of concern for her fellow inmates rather than out of concern for herself.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is the same error as choice (A). It incorrectly treats \"concern for others\" as a sufficient condition to prove justification."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(D) Maria's deliberate violation of a law requiring prepublication government approval of all printed materials was an act of justified civil disobedience: though her interest as an owner of a publishing company would be served by repeal of the law, she violated the law because her conscience required doing so on behalf of all publishers.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** Let's test this against our map."
    },
    {
      "type": "paragraph",
      "text": "**Trigger:** \"her conscience required doing so.\" This perfectly matches the trigger for Principle 2."
    },
    {
      "type": "paragraph",
      "text": "**Consequence:** The act \"was an act of justified civil disobedience.\" This perfectly matches the consequence of Principle 2."
    },
    {
      "type": "list",
      "items": [
        "The fact that her self-interest was also served is irrelevant, because the motive was not \"self-interest *alone*.\" The stated reason was conscience, which is all that is needed to trigger the rule. This is a perfect application."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(E) In organizing a parade of motorcyclists riding without helmets through the capital city, Louise's act was not one of justified civil disobedience: she was willfully challenging a specific law requiring motorcyclists to wear helmets, but her conscience did not require her to organize the parade.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is the same **Denying the Antecedent** fallacy seen in choice (B). The argument is `Not A, therefore Not B`, which is invalid. The principle does not support this reasoning."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Logical Fallacy Trap)"
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
      "text": "**Map Multiple Rules Separately:** When the stimulus gives you more than one principle, map each one out as its own distinct rule. Don't blend them."
    },
    {
      "type": "paragraph",
      "text": "**Identify Sophisticated Fallacies:** Advanced questions love to test classic fallacies. Be on the lookout for arguments that reason backward (Mistaken Reversal) or from the absence of a trigger (Denying the Antecedent)."
    },
    {
      "type": "paragraph",
      "text": "**Mind the Gaps:** An action can be \"not justified\" without being \"unjustified,\" or \"not necessarily right\" without being \"wrong.\" The principles only cover the specific conditions they state; don't assume they cover every possibility."
    }
  ],
};
