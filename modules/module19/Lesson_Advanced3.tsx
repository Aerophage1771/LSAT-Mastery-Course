import { Lesson } from '../../types';

export const Lesson_Advanced3: Lesson = {
  id: '19-11',
  title: 'Advanced Lesson 3: The Sophisticated Distractor (The Control Trap)',
  content: [
    {
      "type": "h2",
      "text": "Advanced Lesson 3: The Sophisticated Distractor (The Control Trap)"
    },
    {
      "type": "h3",
      "text": "Concept Focus: The Control Trap"
    },
    {
      "type": "paragraph",
      "text": "One of the most dangerous traps on high-difficulty Paradox questions is the Plausible Real-World Assumption. The test-makers know that you have real-world knowledge (e.g., \"people without shopping lists tend to impulse buy\"). They will write an incorrect answer choice that aligns perfectly with this common sense."
    },
    {
      "type": "paragraph",
      "text": "To make this trap effective, they insert a specific **constraint** or **control** into the stimulus that invalidates the common-sense explanation. Advanced questions require you to read with extreme precision. If the stimulus explicitly states that two groups are equal in a certain way (the control), you cannot select an answer that relies on them being unequal in that way, no matter how realistic it sounds."
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
      "text": "**Stimulus** > > In a study, shoppers who shopped in a grocery store without a shopping list and bought only items that were on sale for half price or less spent far more money on a comparable number of items than did shoppers in the same store who used a list and bought no sale items. > > **Question** > > Which one of the following, if true, most helps to explain the apparent paradox in the study's results? > > *   (A) Only the shoppers who used a list used a shopping cart. > *   (B) The shoppers who did not use lists bought many unnecessary items. > *   (C) Usually, only the most expensive items go on sale in grocery stores. > *   (D) The grocery store in the study carries many expensive items that few other grocery stores carry. > *   (E) The grocery store in the study places relatively few items on sale."
    },
    {
      "type": "h4",
      "text": "Step 1: Identify the Conflict and the Constraint"
    },
    {
      "type": "paragraph",
      "text": "**Fact 1:** Group A (No List) bought only items that were 50% off or more. Group B (List) bought items at full price."
    },
    {
      "type": "paragraph",
      "text": "**Fact 2:** Group A spent *far more money* than Group B."
    },
    {
      "type": "paragraph",
      "text": "**The Constraint:** The study specifies that both groups bought a **\"comparable number of items.\"**"
    },
    {
      "type": "paragraph",
      "text": "**The Paradox:** How can a basket of half-price items cost *more* than a same-sized basket of full-price items?"
    },
    {
      "type": "h4",
      "text": "Step 2: Define the Goal and Prephrase the Resolution"
    },
    {
      "type": "paragraph",
      "text": "We need to explain the price difference without violating the volume constraint (Quantity A ≈ Quantity B)."
    },
    {
      "type": "paragraph",
      "text": "If quantity is the same, but total cost is higher for Group A, then the **average price per item** for Group A must be significantly higher — even *after* the 50% discount."
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** The items Group A bought must have had a vastly higher starting price than the items Group B bought. Group A bought luxury goods on sale; Group B bought staples at full price."
    },
    {
      "type": "h4",
      "text": "Step 3: Evaluate the Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "We must be vigilant against answers that try to explain the cost difference by suggesting Group A simply bought *more stuff*, as that contradicts the constraint."
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "Answer Analysis"
    },
    {
      "type": "paragraph",
      "text": "**(A) Only the shoppers who used a list used a shopping cart.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** Whether they carried the items or pushed them in a cart is irrelevant to the price of the items."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Irrelevant)"
    },
    {
      "type": "paragraph",
      "text": "**(B) The shoppers who did not use lists bought many unnecessary items.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is the **Sophisticated Distractor**. In the real world, shopping without a list leads to impulse buys (\"unnecessary items\"), which leads to spending more money. It sounds perfect."
    },
    {
      "type": "paragraph",
      "text": "**The Flaw:** The stimulus explicitly controls for volume: they bought a **\"comparable number of items.\"** Whether the items were \"necessary\" or \"unnecessary\" doesn't explain the price difference *if the total count is the same*, unless we assume unnecessary items are inherently more expensive — an assumption not supported by the text. This choice relies on you ignoring the \"comparable number\" constraint to embrace a common-sense narrative."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: The Control Trap / Plausible Real-World Assumption)"
    },
    {
      "type": "paragraph",
      "text": "**(C) Usually, only the most expensive items go on sale in grocery stores.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This matches our prephrase perfectly. It explains the price differential based on the *type* of goods."
    },
    {
      "type": "paragraph",
      "text": "**Group A:** Bought gourmet steaks (normally $30) at 50% off = **$15**."
    },
    {
      "type": "paragraph",
      "text": "**Group B:** Bought pasta (normally $3) at full price = **$3**."
    },
    {
      "type": "paragraph",
      "text": "**Result:** Group A spends far more money for the same number of items."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(D) The grocery store in the study carries many expensive items that few other grocery stores carry.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This explains that expensive items *exist* in the store, but it doesn't explain who bought them. It doesn't connect the high prices specifically to the \"No List / Sale Only\" group."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Too General)"
    },
    {
      "type": "paragraph",
      "text": "**(E) The grocery store in the study places relatively few items on sale.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** If few items are on sale, it would be *harder* for Group A to find things to buy. This makes it surprising that they bought anything at all, let alone that they spent a lot of money. It deepens the paradox."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: The Deepener)"
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
      "text": "**Respect the Constraints:** If the stimulus says \"comparable number,\" \"similar size,\" or \"equal age,\" you cannot select an answer that relies on those factors being different. The paradox exists *within* those boundaries."
    },
    {
      "type": "paragraph",
      "text": "**Beware of \"Impulse Buy\" Logic:** The LSAT loves to trap students with answers that appeal to common consumer experiences (like buying unnecessary things) but contradict the specific math of the prompt."
    },
    {
      "type": "paragraph",
      "text": "**Look for Compositional Differences:** When two groups have the same volume but different values (e.g., cost, weight, score), the answer usually involves the *composition* of that volume — what *kind* of things make up the total."
    }
  ],
};
