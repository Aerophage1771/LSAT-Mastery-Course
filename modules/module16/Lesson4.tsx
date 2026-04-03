import { Lesson } from '../../types';

export const Lesson4: Lesson = {
  id: '16-4',
  title: 'Lesson 1: The Direct Consequence',
  content: [
    {
      "type": "h2",
      "text": "Lesson 1: The Direct Consequence"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Causal Synthesis"
    },
    {
      "type": "paragraph",
      "text": "This lesson focuses on the most common pattern in \"Most Strongly Supported\" questions: Causal Synthesis. The stimulus will present a series of cause-and-effect relationships, like a chain of falling dominoes. Your task is to connect these individual links to infer the relationship between the beginning of the chain and the end."
    },
    {
      "type": "list",
      "items": [
        "**Premise 1:** Event A causes Event B.",
        "**Premise 2:** Event B causes Event C.",
        "**Strongly Supported Inference:** Therefore, Event A is linked to (or contributes to) Event C."
      ]
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
      "text": "**Stimulus** > > The chances that tropical storms will develop in a given area increase whenever the temperature of a large body of water in that area exceeds 26 degrees Celsius to a depth of about 60 meters. If the amount of carbon dioxide in the Earth's atmosphere continues to increase, the temperatures of all of the Earth's waters will rise, with the result that the number of large bodies of water whose temperatures exceed 26 degrees Celsius to a depth of about 60 meters will eventually be greater than it is today. > > **Question** > > The statements above, if true, most strongly support which one of the following conclusions? > > *   (A) There are likely to be more tropical storms if the amount of carbon dioxide in the Earth's atmosphere continues to increase. > *   (B) Tropical storms can occur only when the air temperature exceeds 26 degrees Celsius. > *   (C) The number of large bodies of water whose temperatures exceed 26 degrees Celsius to a depth of about 60 meters is greater today than it ever was. > *   (D) The ferocity of tropical storms does not depend on the amount of carbon dioxide in the Earth's atmosphere. > *   (E) Any increase in the temperatures of the Earth's oceans would cause the amount of carbon dioxide in the atmosphere to increase as well."
    },
    {
      "type": "h4",
      "text": "Step 1: Deconstruct the Stimulus"
    },
    {
      "type": "paragraph",
      "text": "Let's break the stimulus down into a clear causal chain:"
    },
    {
      "type": "list",
      "items": [
        "**Fact 1 (Cause):** More CO2 in the atmosphere $\\rightarrow$ Warmer water temperatures.",
        "**Fact 2 (Intermediate Effect):** Warmer water temperatures $\\rightarrow$ More bodies of water meeting the 26-degree threshold.",
        "**Fact 3 (Final Effect):** More bodies of water meeting the threshold $\\rightarrow$ Higher chance of tropical storms."
      ]
    },
    {
      "type": "h4",
      "text": "Step 2: Synthesize and Prephrase"
    },
    {
      "type": "paragraph",
      "text": "The logic flows in a straight line. The initial cause is an increase in CO2. The final effect is an increased likelihood of tropical storms. We can synthesize these facts to connect the start of the chain to the end."
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** More CO2 will likely lead to more tropical storms."
    },
    {
      "type": "h4",
      "text": "Step 3 & 4: Evaluate Answer Choices and Eliminate Traps"
    },
    {
      "type": "paragraph",
      "text": "**(A) There are likely to be more tropical storms if the amount of carbon dioxide in the Earth's atmosphere continues to increase.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a perfect match for our prephrase. It connects the initial cause (increased CO2) to the final effect (more tropical storms). The cautious word \"likely\" is appropriate, as the stimulus says the chances \"increase,\" which is not a guarantee."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(B) Tropical storms can occur only when the air temperature exceeds 26 degrees Celsius.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is flawed for two reasons. First, it mentions **air** temperature, while the stimulus discusses **water** temperature. Second, it uses the extreme word \"only,\" making a claim that is not supported."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Distortion & Too Strong)"
    },
    {
      "type": "paragraph",
      "text": "**(C) The number of large bodies of water whose temperatures exceed 26 degrees Celsius to a depth of about 60 meters is greater today than it ever was.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This choice introduces a comparison to the past (\"than it ever was\"). The stimulus only compares the present to a potential future. Information about the past is not provided."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Out of Scope)"
    },
    {
      "type": "paragraph",
      "text": "**(D) The ferocity of tropical storms does not depend on the amount of carbon dioxide in the Earth's atmosphere.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This choice discusses the **ferocity** (strength) of storms. The stimulus only talks about the **chances** or number of storms. This is a new concept."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Out of Scope)"
    },
    {
      "type": "paragraph",
      "text": "**(E) Any increase in the temperatures of the Earth's oceans would cause the amount of carbon dioxide in the atmosphere to increase as well.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The stimulus states that more CO2 causes warmer oceans. This choice reverses that causal relationship."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Flawed Causal Reasoning - Reversal)"
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "Key Takeaways"
    },
    {
      "type": "list",
      "items": [
        "**Map the Causal Chain:** When the stimulus describes a process, break it down into a simple \"A $\\rightarrow$ B $\\rightarrow$ C\" flow.",
        "**Connect the Start to the End:** The most strongly supported inference is often the one that links the initial cause to the final effect.",
        "**Watch for Scope Shifts:** Incorrect answers will often distort the information by introducing new concepts (like \"air temperature\" or \"ferocity\") or new comparisons (like to the distant past) that the stimulus does not support."
      ]
    }
  ],
};
