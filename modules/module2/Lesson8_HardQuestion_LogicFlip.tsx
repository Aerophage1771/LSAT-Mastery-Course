import { Lesson } from '../../types';

export const Lesson8_HardQuestion_LogicFlip: Lesson = {
  id: "2-8",
  title: "Hard Question Deconstruction - The Logic-Flip",
  content: [
    { type: 'h3', text: "Lesson 8: Deconstructing a Hard Question" },
    { type: 'paragraph', text: "This lesson tackles a high-difficulty question that hinges on your ability to precisely map conditional logic. The argument itself is a short, logical chain, but the answer choices are designed to trap anyone who is not paying close attention to the **direction of the logical arrow**." },
    { type: 'paragraph', text: "This is a classic example of the **Logic-Flip** trap, where the wrong answer uses the same terms as the conclusion but reverses the sufficient and necessary conditions." },
    { type: 'hr' },
    { type: 'h3', text: "Worked Example" },
    { type: 'paragraph', text: "Read the stimulus and answer choices carefully. Try to map the conditional statements and identify the specific relationship the author is trying to prove." },
    { type: 'blockquote', text: "**Stimulus:**\n\nIt is a given that to be an intriguing person, one must be able to inspire the perpetual curiosity of others. Constantly broadening one’s abilities and extending one’s intellectual reach will enable one to inspire that curiosity. For such a perpetual expansion of one’s mind makes it impossible to be fully comprehended, making one a constant mystery to others." },
    { type: 'paragraph', text: "**Question:**\n\nWhich one of the following most accurately expresses the conclusion drawn in the argument above?" },
    { type: 'options', items: [
      "(A) To be an intriguing person, one must be able to inspire the perpetual curiosity of others.",
      "(B) If one constantly broadens one’s abilities and extends one’s intellectual reach, one will be able to inspire the perpetual curiosity of others.",
      "(C) If one’s mind becomes impossible to be fully comprehended, one will always be a mystery to others.",
      "(D) To inspire the perpetual curiosity of others, one must constantly broaden one’s abilities and extend one’s intellectual reach.",
      "(E) If one constantly broadens one’s abilities and extends one’s intellectual reach, one will always have curiosity."
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Analysis: What Makes This Question So Hard?" },
    { type: 'list', ordered: true, items: [
      "**Subtle Conditional Language:** The conclusion uses the word \"enable,\" a softer synonym for \"ensure\" or \"is sufficient for,\" which can be harder to spot than a classic \"if... then...\" structure.",
      "**The Logic-Flip Distractor:** The most tempting wrong answer (D) takes the correct components and reverses the logic, turning a sufficient condition into a necessary one. A full 11% of test-takers fall for this.",
      "**The \"Given\" Premise Trap:** The argument starts with a premise that looks and sounds like a strong conclusion, trapping 34% of test-takers into picking it."
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Step-by-Step Deconstruction" },
    { type: 'h4', text: "Step 1 & 2: Deconstruct the Argument's Flow" },
    { type: 'list', items: [
      "**Sentence 1:** \"It is a given that to be an intriguing person, one must be able to inspire the perpetual curiosity of others.\"\n    *   **Role:** The phrase \"**It is a given that...**\" signals that this is not the point the author is trying to prove, but a starting point or **Premise** that the author assumes is true. It establishes a necessary condition: Intriguing Person $\\rightarrow$ Inspire Curiosity.",
      "**Sentence 2:** \"Constantly broadening one’s abilities and extending one’s intellectual reach will **enable** one to inspire that curiosity.\"\n    *   **Role:** This is the central claim the author is building. The word \"enable\" means that broadening your reach is *sufficient* to inspire curiosity. This is our candidate for the **Main Conclusion**. It establishes a sufficient condition: Broaden Reach $\\rightarrow$ Inspire Curiosity.",
      "**Sentence 3:** \"**For** such a perpetual expansion of one’s mind makes it impossible to be fully comprehended, making one a constant mystery to others.\"\n    *   **Role:** The premise indicator \"**For**\" tells us this sentence is the **Premise** that supports the previous claim. It explains the mechanism: Broadening your reach makes you a mystery, which is how you inspire curiosity."
    ]},
    { type: 'h4', text: "Step 3: Apply the \"Why Test\"" },
    { type: 'paragraph', text: "Our candidate conclusion is the claim from Sentence 2: \"Constantly broadening... will enable one to inspire that curiosity.\"" },
    { type: 'list', items: [
      "**Ask \"Why?\":** *Why* will broadening your reach enable you to inspire curiosity?",
      "**Answer from Stimulus:** **Because** (\"For\") doing so makes you impossible to fully comprehend and a constant mystery to others."
    ]},
    { type: 'paragraph', text: "The final sentence provides the \"Why\" for the second sentence. This confirms Sentence 2 is the **Main Conclusion**." },
    { type: 'h4', text: "Step 4: Pre-phrase the Conclusion" },
    { type: 'paragraph', text: "Our pre-phrase should capture the conditional relationship: \"If you keep expanding your mind, then you'll be able to make people curious about you.\"" },
    { type: 'h4', text: "Step 5: Evaluate the Answer Choices" },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      {
        title: "(A) To be an intriguing person, one must be able to inspire the perpetual curiosity of others.",
        text: "Trap Type: Premise Trap. This is the most popular wrong answer. It's a direct restatement of the first sentence, but the phrase \"It is a given\" marks it as an accepted starting point, not the point being argued for.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(B) If one constantly broadens one’s abilities and extends one’s intellectual reach, one will be able to inspire the perpetual curiosity of others.",
        text: "Analysis: This is a perfect match for our pre-phrase. It correctly translates \"will enable\" into an \"If... then...\" structure, identifying broadening your reach as a *sufficient* condition for inspiring curiosity. **This is the correct answer.**",
        badge: "Correct",
        badgeColor: "green"
      },
      {
        title: "(C) If one’s mind becomes impossible to be fully comprehended, one will always be a mystery to others.",
        text: "Trap Type: Premise Trap. This is a restatement of the reasoning presented in the final sentence, which is the evidence for the main conclusion.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(D) To inspire the perpetual curiosity of others, one must constantly broaden one’s abilities and extend one’s intellectual reach.",
        text: "Trap Type: Logic-Flip Trap. This is the most dangerous distractor for those who identify the right components. It takes the relationship from our conclusion (Broaden Reach $\\rightarrow$ Inspire Curiosity) and reverses it, claiming that broadening your reach is *necessary* (\"must\") to inspire curiosity (Inspire Curiosity $\\rightarrow$ Broaden Reach). The author never makes this claim.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(E) If one constantly broadens one’s abilities and extends one’s intellectual reach, one will always have curiosity.",
        text: "Trap Type: Distortion Trap. This twists the conclusion. The point is about *inspiring* curiosity in *others*, not about *having* curiosity yourself.",
        badge: "Incorrect",
        badgeColor: "red"
      }
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Major Takeaways from this Hard Question" },
    { type: 'list', ordered: true, items: [
      "**\"It is a given that...\" is a Premise Indicator.** When an author says a claim is \"given,\" \"clear,\" or \"obvious,\" they are treating it as an undisputed starting point, not the conclusion they are trying to prove.",
      "**Translate Vague Terms into Strict Logic.** Words like \"enables,\" \"allows,\" or \"leads to\" often signal a *sufficient* condition (the \"if\" part of an \"if... then...\" statement).",
      "**Beware the Logic-Flip.** High-difficulty distractors will use the same vocabulary as the correct answer but will reverse the logical relationship. Always confirm the direction of the arrow."
    ]}
  ]
};
