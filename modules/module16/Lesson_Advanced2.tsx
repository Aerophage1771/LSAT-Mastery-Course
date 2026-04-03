import { Lesson } from '../../types';

export const Lesson_Advanced2: Lesson = {
  id: '16-9',
  title: 'Advanced Lesson 2: The Benchmark Inference',
  content: [
    {
      "type": "h2",
      "text": "Advanced Lesson 2: The Benchmark Inference"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Mathematical Synthesis"
    },
    {
      "type": "paragraph",
      "text": "This lesson tackles a high-level logical pattern: The Benchmark Inference. In these questions, the stimulus provides numerical data, percentages, or strict benchmarks. The key to solving them is not to perform complex calculations, but to synthesize multiple quantitative facts to establish a logical limit or boundary."
    },
    {
      "type": "paragraph",
      "text": "Think of it as finding a \"ceiling\" and a \"floor.\" If Fact A sets a maximum value and Fact B sets a minimum value, the inference often lies in the space between or outside those limits."
    },
    {
      "type": "paragraph",
      "text": "**Example Structure:**"
    },
    {
      "type": "list",
      "items": [
        "Fact 1: Object X has a value of 90. It is the highest value in Category A.",
        "Fact 2: Object Y has a value *higher* than 90."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Inference:** Therefore, Object Y cannot be in Category A."
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
      "text": "**Stimulus** > > Numismatist: In medieval Spain, most gold coins were minted from gold mined in West Africa, in the area that is now Senegal. The gold mined in this region was the purest known. Its gold content of 92 percent allowed coins to be minted without refining the gold, and indeed coins minted from this source of gold can be recognized because they have that gold content. The mints could refine gold and produced other kinds of coins that had much purer gold content, but the Senegalese gold was never refined. > > **Question** > > Which one of the following inferences about gold coins minted in medieval Spain is most strongly supported by the information the numismatist gives? > > *   (A) Coins minted from Senegalese gold all contained the same weight, as well as the same proportion, of gold. > *   (B) The source of some refined gold from which coins were minted was unrefined gold with a gold content of less than 92 percent. > *   (C) Two coins could have the same monetary value even though they differed from each other in the percentage of gold they contained. > *   (D) No gold coins were minted that had a gold content of less than 92 percent. > *   (E) The only unrefined gold from which coins could be minted was Senegalese gold."
    },
    {
      "type": "h4",
      "text": "Step 1: Deconstruct the Stimulus"
    },
    {
      "type": "paragraph",
      "text": "Let's break down the numerical facts and rules:"
    },
    {
      "type": "list",
      "items": [
        "**Fact 1 (The Benchmark):** Senegalese gold was the purest known *unrefined* gold at **92%**.",
        "**Fact 2 (The Process):** Senegalese gold was **never refined**.",
        "**Fact 3 (The Outcome):** Mints produced other coins with *much purer* content (meaning >92%) by **refining** gold."
      ]
    },
    {
      "type": "h4",
      "text": "Step 2: Synthesize and Prephrase"
    },
    {
      "type": "paragraph",
      "text": "We have a puzzle about the source of the refined gold."
    },
    {
      "type": "list",
      "items": [
        "To get gold purer than 92%, the mints had to refine something.",
        "Could they refine the Senegalese gold? No — Fact 2 says it was *never* refined.",
        "Could they refine other unrefined gold that was *already* 92% pure or higher? No — Fact 1 says Senegalese gold (at 92%) was the *purest known*. Any other unrefined gold must have been less pure than 92%."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** The gold they refined to make the super-pure coins must have started out as unrefined gold with *less than* 92% purity."
    },
    {
      "type": "h4",
      "text": "Step 3 & 4: Evaluate Answer Choices and Eliminate Traps"
    },
    {
      "type": "paragraph",
      "text": "**(A) Coins minted from Senegalese gold all contained the same weight, as well as the same proportion, of gold.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The stimulus discusses percentages (proportion), but says nothing about the physical *weight* of the coins."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Out of Scope)"
    },
    {
      "type": "paragraph",
      "text": "**(B) The source of some refined gold from which coins were minted was unrefined gold with a gold content of less than 92 percent.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This matches our prephrase perfectly. Since they couldn't refine the Senegalese gold (92%), and no other unrefined gold was higher than 92%, the source for their refined gold must have been something lower than 92%."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(C) Two coins could have the same monetary value even though they differed from each other in the percentage of gold they contained.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The stimulus never mentions \"monetary value.\" We don't know how value was determined."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Out of Scope)"
    },
    {
      "type": "paragraph",
      "text": "**(D) No gold coins were minted that had a gold content of less than 92 percent.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is too strong. The mints made coins from Senegalese gold (92%) and refined gold (>92%). But the text doesn't prove they *didn't* also make coins from lower-quality gold."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Too Strong)"
    },
    {
      "type": "paragraph",
      "text": "**(E) The only unrefined gold from which coins could be minted was Senegalese gold.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The text says Senegalese gold *allowed* coins to be minted without refining. It doesn't say it was the *only* gold that allowed this."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Too Strong)"
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
        "**Follow the Math:** When you see percentages or numbers, track them carefully. They establish \"hard\" logical boundaries.",
        "**Respect the Negatives:** Pay close attention to negative constraints like \"never refined\" or \"no other source.\" These are often the key to the deduction.",
        "**Synthesize Constraints:** The correct answer often lies in the \"blind spot\" created by combining two different rules (e.g., the purity limit + the refining restriction)."
      ]
    }
  ],
};
