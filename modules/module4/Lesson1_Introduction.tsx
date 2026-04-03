import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: '4-1',
  title: 'MODULE 4: Parallel Reasoning',
  content: [
    {
      "type": "h2",
      "text": "MODULE 4: Parallel Reasoning"
    },
    {
      "type": "paragraph",
      "text": "**Question Goal**"
    },
    {
      "type": "paragraph",
      "text": "**Identify the abstract logical pattern of the stimulus and then find an answer choice that uses the exact same structure of reasoning.** Your job is to match the logical form, even if the topic is completely different."
    },
    {
      "type": "paragraph",
      "text": "**Introduction**"
    },
    {
      "type": "paragraph",
      "text": "**Distill and Replicate**"
    },
    {
      "type": "paragraph",
      "text": "Parallel Reasoning questions build directly upon the skills used in Method of Reasoning. While Method questions ask you to simply *describe* the argument’s structure, Parallel questions ask you to go one step further: you must first **distill** that structure and then **replicate** it in a completely new context."
    },
    {
      "type": "paragraph",
      "text": "The stimulus will present a line of reasoning on a specific topic (e.g., banking regulations). Your task is to look past *what* the argument is about to see *how* the premises support the conclusion. You are creating a logical blueprint of the argument and looking for the answer choice that was built using that exact same blueprint."
    },
    {
      "type": "paragraph",
      "text": "**Common Question Stems**"
    },
    {
      "type": "paragraph",
      "text": "You can recognize these questions because they ask you to find an argument with a \"similar\" pattern or structure. Typical phrasing includes:"
    },
    {
      "type": "list",
      "items": [
        "\"Which one of the following arguments is most similar in its reasoning to the argument above?\" *   \"The pattern of reasoning in the argument above is most similar to that in which one of the following?\" *   \"Which one of the following exhibits a pattern of reasoning most similar to that exhibited by the argument above?\""
      ]
    },
    {
      "type": "paragraph",
      "text": "**Core Concepts**"
    },
    {
      "type": "paragraph",
      "text": "**Abstraction: The Skeleton of the Argument**"
    },
    {
      "type": "paragraph",
      "text": "To solve these questions, you must strip away the specific details to reveal the argument's skeleton. You are essentially translating the argument into algebraic terms.\n*"
    },
    {
      "type": "paragraph",
      "text": "**Content:** \"If it rains, the grass gets wet. It is raining. Therefore, the grass is wet.\" *"
    },
    {
      "type": "paragraph",
      "text": "**Skeleton:** \"If A, then B. A is true. Therefore, B is true.\""
    },
    {
      "type": "paragraph",
      "text": "**Matching the Elements: Refining the Blueprint**"
    },
    {
      "type": "paragraph",
      "text": "A truly parallel argument must align with the stimulus across several specific logical features. Once you have identified the underlying skeleton, use the following elements as criteria to verify that the answer choice replicates the original reasoning."
    },
    {
      "type": "table",
      "headers": [
        "Element",
        "What to Check",
        "Example Mismatch (Eliminate)"
      ],
      "rows": [
        [
          "**Logical Force (Certainty)**",
          "Does the conclusion use absolute language (*must, will, always*) or probabilistic language (*might, could, likely*)?",
          "Stimulus says \"**must** be true\" vs. Answer says \"**might** be true.\""
        ],
        [
          "**Logical Force (Quantifiers)**",
          "Does the argument rely on specific scope indicators like *all, most, some,* or *none*?",
          "Stimulus says \"**most** people\" vs. Answer says \"**some** people.\""
        ],
        [
          "**Conclusion Type**",
          "What is the nature of the final claim? Is it a recommendation, a prediction, a conditional statement, or a value judgment?",
          "Stimulus says \"we **should** do X\" (Recommendation) vs. Answer says \"X **will** happen\" (Prediction)."
        ],
        [
          "**Premise Structure**",
          "How do the premises relate to each other? Do they form a chain? Do they present a dilemma or rule out alternatives?",
          "Stimulus uses a **conditional chain** (A $\\rightarrow$ B $\\rightarrow$ C) vs. Answer uses two **independent reasons** for a conclusion."
        ]
      ]
    }
  ],
};
