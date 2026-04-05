import { Lesson } from '../../types';

export const Lesson7_HardQuestion_ExplanatoryArgument: Lesson = {
  id: "2-7",
  title: "Hard Question Deconstruction - The Explanatory Argument",
  content: [
    { type: 'h3', text: "Lesson 7: Deconstructing a Hard Question" },
    { type: 'paragraph', text: "In the last lesson, you learned the four key characteristics of the hardest Main Conclusion questions. Now, we will apply that knowledge to a Level 5 difficulty question that masterfully combines several of those challenging features." },
    { type: 'paragraph', text: "This question tests your ability to navigate an **explanatory argument**—one where the author's primary goal is not just to state a fact, but to provide the *reason* for a known phenomenon." },
    { type: 'hr' },
    { type: 'h3', text: "Worked Example" },
    { type: 'paragraph', text: "Read the stimulus and answer choices carefully. Try to identify which of the \"hard question\" characteristics are present before reading the detailed breakdown." },
    { type: 'blockquote', text: "**Stimulus:**\n\nEach of many different human hormones can by itself raise the concentration of glucose in the blood. The reason for this is probably a metabolic quirk of the brain. To see this, consider that although most human cells can produce energy from fats and proteins, brain cells can use only glucose. Thus, if blood glucose levels fall too low, brain cells will rapidly starve, leading to unconsciousness and death." },
    { type: 'paragraph', text: "**Question:**\n\nWhich one of the following most accurately expresses the main conclusion of the argument above?" },
    { type: 'options', items: [
      "(A) Each of many different human hormones can by itself raise blood glucose levels.",
      "(B) The reason that many different hormones can each independently raise blood glucose levels is probably a metabolic quirk of the brain.",
      "(C) Although most human cells can produce energy from fats and proteins, brain cells can produce energy only from glucose.",
      "(D) If blood glucose levels fall too low, then brain cells starve, resulting in loss of consciousness and death.",
      "(E) The reason brain cells starve if deprived of glucose is that they can produce energy only from glucose."
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Analysis: What Makes This Question So Hard?" },
    { type: 'paragraph', text: "This question is difficult because it contains two of the advanced traps we discussed:" },
    { type: 'list', items: [
      "**The Intermediate Conclusion Trap:** The argument contains the powerful conclusion indicator \"**Thus**\" which points to a compelling but non-main conclusion.",
      "**Detailed Facts vs. Subtle Evaluation:** The premises are full of dramatic and interesting biological facts, while the main conclusion is a more abstract, explanatory claim."
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Step-by-Step Deconstruction" },
    { type: 'h4', text: "Step 1 & 2: Deconstruct the Argument's Flow" },
    { type: 'paragraph', text: "This argument has a specific structure: it presents a puzzling fact and then offers and defends an explanation for it." },
    { type: 'list', items: [
      "**Sentence 1:** \"Each of many different human hormones can by itself raise the concentration of glucose in the blood.\"\n    *   **Role:** This is **The Phenomenon**. It's the interesting but neutral fact that the rest of the argument is designed to explain. It's the *topic* of the argument, not its point.",
      "**Sentence 2:** \"The reason for this is probably a metabolic quirk of the brain.\"\n    *   **Role:** This is **The Proposed Explanation**. The phrase \"**The reason for this is...**\" is a massive signpost. The author is explicitly stating their main point. This is our prime candidate for the **Main Conclusion**.",
      "**Sentence 3:** \"To see this, consider that... brain cells can use only glucose.\"\n    *   **Role:** This is the **Core Premise**. The phrase \"**To see this, consider...**\" tells the reader, \"Here is the evidence for the explanation I just gave you.\"",
      "**Sentence 4:** \"**Thus**, if blood glucose levels fall too low, brain cells will rapidly starve, leading to unconsciousness and death.\"\n    *   **Role:** This is an **Intermediate Conclusion**. It logically follows from the premise in Sentence 3. Its purpose is to explain *why* the brain's quirk is so critical, which in turn supports the main explanatory conclusion in Sentence 2."
    ]},
    { type: 'h4', text: "Step 3: Apply the \"Why Test\" Between the Two Conclusions" },
    { type: 'paragraph', text: "We have two \"conclusions\" in this argument: the proposed explanation in Sentence 2 and the \"Thus\" statement in Sentence 4. Let's test them against each other." },
    { type: 'list', items: [
      "**Test 1:** Is the explanation (\"The reason is a brain quirk\") true **because** low glucose leads to death? **Yes.** The fact that low glucose is so dangerous for the brain is the reason the body would have evolved multiple redundant systems (hormones) to prevent it. Sentence 4 supports Sentence 2.",
      "**Test 2:** Does low glucose lead to death **because** the reason for multiple hormones is a brain quirk? **No.** This makes no sense. The biological reality of brain starvation doesn't depend on the explanation for hormone redundancy."
    ]},
    { type: 'paragraph', text: "Since Sentence 4 supports Sentence 2, Sentence 2 is the **Main Conclusion**." },
    { type: 'h4', text: "Step 4: Pre-phrase the Conclusion" },
    { type: 'paragraph', text: "Our pre-phrase: \"The explanation for why so many hormones raise blood sugar is a unique feature of the brain.\"" },
    { type: 'h4', text: "Step 5: Evaluate the Answer Choices" },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      {
        title: "(A) Each of many different human hormones can by itself raise blood glucose levels.",
        text: "Trap Type: Premise Trap (specifically, The Phenomenon). This is the factual observation that the argument sets out to explain.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(B) The reason that many different hormones can each independently raise blood glucose levels is probably a metabolic quirk of the brain.",
        text: "Analysis: This is a perfect match for our pre-phrase and our analysis. It correctly identifies the author's central explanatory claim.",
        badge: "Correct",
        badgeColor: "green"
      },
      {
        title: "(C) Although most human cells can produce energy from fats and proteins, brain cells can produce energy only from glucose.",
        text: "Trap Type: Premise Trap. This is the core piece of evidence used to support the explanation.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(D) If blood glucose levels fall too low, then brain cells starve, resulting in loss of consciousness and death.",
        text: "Trap Type: Intermediate Conclusion Trap. This is the most dangerous distractor. It has a conclusion indicator (\"Thus\") and is a dramatic, weighty statement. However, it is not the argument's final point.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(E) The reason brain cells starve if deprived of glucose is that they can produce energy only from glucose.",
        text: "Trap Type: Premise Trap (phrased as an explanation). This is too narrow. It simply restates the causal link between the premise in Sentence 3 and the intermediate conclusion in Sentence 4.",
        badge: "Incorrect",
        badgeColor: "red"
      }
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Major Takeaways from this Hard Question" },
    { type: 'list', ordered: true, items: [
      "**Distinguish the Phenomenon from its Explanation:** In explanatory arguments, the main conclusion is the *explanation*, not the thing being explained.",
      "**Navigate Multi-Layered Arguments:** High-difficulty questions often have sub-conclusions. You must be able to trace the chain of support to find the final, unsupported claim.",
      "**Resist the Pull of \"Weighty\" Premises:** Don't be distracted by dramatic or scientifically interesting facts. The main conclusion is often a more abstract, overarching claim.",
      "**The \"Why Test\" is Your Ultimate Tool:** When faced with two competing conclusion candidates, the \"Why Test\" is the most reliable way to determine which one is the true main conclusion."
    ]}
  ]
};
