import { Lesson } from '../../types';

export const Lesson7: Lesson = {
  id: '19-7',
  title: 'Lesson 4: The Missing Baseline (Numerical Paradoxes)',
  content: [
    {
      "type": "h2",
      "text": "Lesson 4: The Missing Baseline (Numerical Paradoxes)"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Percentages vs. Absolute Amounts"
    },
    {
      "type": "paragraph",
      "text": "A common way to create a paradox is to provide a percentage increase that sounds massive, while the absolute total remains tiny. This is known as the \"Missing Baseline\" problem. On the LSAT, numerical discrepancies often hinge on the fact that a 500% increase on a penny is still only five cents. If you need a dollar to survive, that huge percentage increase is still \"inadequate.\" To resolve these, you must find the missing context: what was the starting point?"
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
      "text": "**Stimulus** > > Environmental scientist: It is true that over the past ten years, there has been a sixfold increase in government funding for the preservation of wetlands, while the total area of wetlands needing such preservation has increased only twofold (although this area was already large ten years ago). Even when inflation is taken into account, the amount of funding now is at least three times what it was ten years ago. Nevertheless, the current amount of government funding for the preservation of wetlands is inadequate and should be augmented. > > **Question** > > Which one of the following, if true, most helps to reconcile the environmental scientist's conclusion with the evidence cited above? > > *   (A) The governmental agency responsible for administering wetland-preservation funds has been consistently mismanaged and run inefficiently over the past ten years. > *   (B) Over the past ten years, the salaries of scientists employed by the government to work on the preservation of wetlands have increased at a rate higher than the inflation rate. > *   (C) Research over the past ten years has enabled scientists today to identify wetlands in need of preservation well before the areas are at serious risk of destruction. > *   (D) More people today, scientists and nonscientists alike, are working to preserve all natural resources, including wetlands. > *   (E) Unlike today, funding for the preservation of wetlands was almost nonexistent ten years ago."
    },
    {
      "type": "h4",
      "text": "Step 1: Identify the Conflict"
    },
    {
      "type": "paragraph",
      "text": "**Fact 1 (The Expected):** Funding increased **sixfold** (600%), while the need (area of wetlands) only increased **twofold** (200%). Even after inflation, money tripled. This suggests we should have more than enough money now."
    },
    {
      "type": "paragraph",
      "text": "**Fact 2 (The Unexpected):** Nevertheless, the scientist concludes the current funding is **inadequate** (not enough)."
    },
    {
      "type": "paragraph",
      "text": "**The Paradox:** Why is a massive increase in funding still not enough to cover a much smaller increase in need?"
    },
    {
      "type": "h4",
      "text": "Step 2: Define the Goal and Prephrase the Resolution"
    },
    {
      "type": "paragraph",
      "text": "Our goal is to explain how a triple or sixfold increase in money could still result in a total that is too small to get the job done."
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** If I have $1 and I need $1,000, and you give me six times as much money, I now have $6. I've had a \"sixfold increase,\" but I am still $994 short. The only way this paradox makes sense is if the starting amount of money was almost zero."
    },
    {
      "type": "h4",
      "text": "Step 3 & 4: Evaluate the Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "**(A) The governmental agency responsible for administering wetland-preservation funds has been consistently mismanaged and run inefficiently over the past ten years.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This choice tries to explain why the money isn't *working*, but the scientist's conclusion is about the **amount** of funding being inadequate. This choice attacks the efficiency of the use, not the sufficiency of the total."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Mischaracterization)"
    },
    {
      "type": "paragraph",
      "text": "**(B) Over the past ten years, the salaries of scientists employed by the government to work on the preservation of wetlands have increased at a rate higher than the inflation rate.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** While salaries rising faster than inflation accounts for *some* extra cost, it doesn't explain why a 300% real increase in total funding (after inflation) can't cover a 200% increase in land. The math still doesn't quite bridge that massive gap."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Too Weak)"
    },
    {
      "type": "paragraph",
      "text": "**(C) Research over the past ten years has enabled scientists today to identify wetlands in need of preservation well before the areas are at serious risk of destruction.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** If we can identify them earlier, preservation might actually be *cheaper* or more efficient. This makes the \"inadequacy\" of the current funding even more of a mystery."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: The Deepener)"
    },
    {
      "type": "paragraph",
      "text": "**(D) More people today, scientists and nonscientists alike, are working to preserve all natural resources, including wetlands.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is general background information. More people working doesn't explain why the *government's* specific dollar amount is insufficient."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Out of Scope)"
    },
    {
      "type": "paragraph",
      "text": "**(E) Unlike today, funding for the preservation of wetlands was almost nonexistent ten years ago.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This matches our prephrase perfectly. It provides the \"Missing Baseline.\" If the original funding was near zero (say, $10,000 for a massive area), a sixfold increase to $60,000 is still nowhere near enough if the actual cost of preservation is in the millions."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
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
      "text": "**Percentages are Relative:** A large percentage increase only matters if the starting number was significant. Always ask: \"Sixfold increase of *what*?\""
    },
    {
      "type": "paragraph",
      "text": "**Look for the Baseline:** In numerical paradoxes, the answer often points out that the starting point was extremely low (or extremely high), rendering the subsequent change less meaningful than it appears."
    },
    {
      "type": "paragraph",
      "text": "**Don't Blame Inefficiency:** If the stimulus says the *amount* of something is inadequate, look for an answer about the *quantity*, not about how poorly that quantity is being used."
    }
  ],
};
