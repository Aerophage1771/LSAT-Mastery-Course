import { Lesson } from '../../types';

export const Lesson8_Drill_ComparativeReasoning: Lesson = {
  id: "4-8",
  title: "Drill: Comparative Reasoning (PT-111-S-4-Q-23)",
  content: [
    { type: 'h3', text: "Practice Drill: Parallel Reasoning (PT-111-S-4-Q-23)" },
    { type: 'paragraph', text: "This drill focuses on a **Comparative Function** pattern. The logic applies a general rule about a relationship between two variables to a specific comparison between two items." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },
    { type: 'hr' },
    { type: 'h4', text: "The Stimulus" },
    { type: 'blockquote', text: "The higher the altitude, the thinner the air. Since Mexico City’s altitude is higher than that of Panama City, the air must be thinner in Mexico City than in Panama City." },
    { type: 'h4', text: "The Question" },
    { type: 'paragraph', text: "Which one of the following arguments is most similar in its reasoning to the argument above?" },
    
    { type: 'options', items: [
      "**(A)** As one gets older one gets wiser. Since Henrietta is older than her daughter, Henrietta must be wiser than her daughter.",
      "**(B)** The more egg whites used and the longer they are beaten, the fluffier the meringue. Since Lydia used more egg whites in her meringue than Joseph used in his, Lydia’s meringue must be fluffier than Joseph’s.",
      "**(C)** The people who run the fastest marathons these days are faster than the people who ran the fastest marathons ten years ago. Charles is a marathon runner. So Charles must run faster marathons these days than he did ten years ago.",
      "**(D)** The older a tree, the more rings it has. The tree in Lou’s yard is older than the tree in Theresa’s yard. Therefore, the tree in Lou’s yard must have more rings than does the tree in Theresa’s yard.",
      "**(E)** The bigger the vocabulary a language has, the harder it is to learn. English is harder to learn than Italian. Therefore, English must have a bigger vocabulary than Italian."
    ]},
    
    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },
    { type: 'h3', text: "Analysis & Explanation" },
    { type: 'paragraph', text: "*(Scroll down only after attempting the question)*" },
    { type: 'hr' },
    
    { type: 'h3', text: "1. Deconstruct the Stimulus Argument" },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Role Analysis' }, items: [
      {
        title: "\"The higher the altitude, the thinner the air.\"",
        text: "**Premise**. The general rule. Direct positive correlation between Altitude and Air Thinnerness.",
        badge: "Rule",
        badgeColor: "indigo"
      },
      {
        title: "\"Since Mexico City’s altitude is higher than that of Panama City...\"",
        text: "**Premise**. Item 1 has more of the first variable than Item 2.",
        badge: "Fact",
        badgeColor: "indigo"
      },
      {
        title: "\"...the air must be thinner in Mexico City than in Panama City.\"",
        text: "**Conclusion**. Therefore, Item 1 must have more of the second variable than Item 2.",
        badge: "Conclusion",
        badgeColor: "indigo"
      }
    ]},

    { type: 'h3', text: "2. Abstract the Logical Method" },
    { type: 'list', items: [
      "**Motto:** \"The more of X you have, the more of Y you have. Since A has more X than B does, A must have more Y than B does.\"",
      "**Diagram:**\n1. Rule: Y increases as X increases.\n2. Fact: X(A) > X(B).\n3. Conclusion: Therefore, Y(A) > Y(B)."
    ]},
    
    { type: 'h3', text: "3. Evaluate the Answer Choices" },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      {
        title: "(A) As one gets older one gets wiser... Henrietta must be wiser...",
        text: "This is a very close match in structure. However, the rule \"As one gets older one gets wiser\" is a much softer, more proverbial generalization than the scientific law in the stimulus. While structurally similar, the nature of the rule is different. Let's keep it as a strong contender.",
        badge: "Contender",
        badgeColor: "blue"
      },
      {
        title: "(B) ...more egg whites and longer beaten... Lydia used more egg whites...",
        text: "The rule has *two* input variables. The evidence only mentions one of these variables. We don't know if she beat them longer. Therefore, the conclusion is not properly supported by the rule.",
        badge: "Mismatch",
        badgeColor: "red"
      },
      {
        title: "(C) ...Charles must run faster marathons...",
        text: "Error of composition/division. Applies a trend about a group to a specific individual. The stimulus compares two distinct individuals.",
        badge: "Mismatch",
        badgeColor: "red"
      },
      {
        title: "(D) The older a tree, the more rings it has... Therefore, the tree in Lou’s yard must have more rings...",
        text: "Perfect match.\n1. Rule: Rings (Y) increase as Age (X) increases. (Hard, factual rule).\n2. Fact: Lou's Tree Age > Theresa's Tree Age.\n3. Conclusion: Lou's Tree Rings > Theresa's Tree Rings.",
        badge: "Correct",
        badgeColor: "green"
      },
      {
        title: "(E) ...English is harder to learn... Therefore, English must have a bigger vocabulary...",
        text: "Reverses the logic. Mistaken Reversal / Affirming the Consequent.\n1. Rule: More Vocab -> Harder.\n2. Fact: Harder.\n3. Conclusion: More Vocab.\nThe stimulus reasons from X to Y; this reasons from Y to X.",
        badge: "Mismatch",
        badgeColor: "red"
      }
    ]},

    { type: 'callout', title: "Summary & Key Takeaways", variant: "summary", text: "This question is difficult because several answer choices look similar on the surface.\n\n* **Nature of the Rule:** The stimulus uses a hard, physical law. Choice (D) uses a similar biological fact. Choice (A)'s rule is a soft generalization, making (D) a stronger parallel.\n* **Matching the Number of Variables:** The flaw in choice (B) is a classic trap where the rule requires two conditions, but the evidence only fulfills one.\n* **Direction of Reasoning:** The flaw in choice (E) is a Mistaken Reversal." }
  ]
};
