import { Lesson } from '../../types';

export const Lesson5: Lesson = {
  id: '18-5',
  title: 'Lesson 2: The Mathematical Contradiction',
  content: [
    {
      "type": "h2",
      "text": "Lesson 2: The Mathematical Contradiction"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Contradicting the Numbers"
    },
    {
      "type": "paragraph",
      "text": "Not all Must Be False questions are based on violating a simple conditional rule like \"All X are Y.\" Some stimuli create a logical system based on numbers, percentages, or proportions. In these cases, the contradiction isn't found in the words, but in the math."
    },
    {
      "type": "paragraph",
      "text": "The stimulus will provide a set of facts about totals, parts, and shares. Your task is to identify the underlying mathematical relationship (e.g., `Market Share = Company Sales ÷ Total Sales`) and find the answer choice that describes a scenario that is arithmetically impossible."
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
      "text": "**Stimulus** > > For a ten-month period, the total monthly sales of new cars within the country of Calistan remained constant. During this period the monthly sales of new cars manufactured by Marvel Automobile Company doubled, and its share of the new car market within Calistan increased correspondingly. At the end of this period, emission standards were imposed on new cars sold within Calistan. During the three months following this imposition, Marvel Automobile Company's share of the Calistan market declined substantially even though its monthly sales within Calistan remained constant at the level reached in the last month of the ten-month period. > > **Question** > > If the statements above are true, which one of the following CANNOT be true? > > *   (A) The total monthly sales within Calistan of new cars by companies other than Marvel Automobile Company decreased over the three months following the imposition of the emission standards. > *   (B) Over the three months before the imposition of the emission standards, the combined market share of companies other than Marvel Automobile Company selling new cars in Calistan decreased. > *   (C) If the emission standards had not been imposed, Marvel Automobile Company would have lost an even larger share of the number of new cars sold in Calistan than, in fact, it did. > *   (D) A decrease in the total monthly sales of new cars within Calistan will occur if the emission standards remain in effect. > *   (E) Since the imposition of the emission standards, Marvel Automobile Company's average profit on each new car sold within Calistan has increased."
    },
    {
      "type": "h4",
      "text": "Step 1: Analyze the Stimulus and Identify the Rules"
    },
    {
      "type": "paragraph",
      "text": "Let's break down the facts, focusing on the second period (after the standards were imposed), as this is where the core puzzle lies."
    },
    {
      "type": "paragraph",
      "text": "**Fact 1:** Marvel's monthly sales remained **constant**."
    },
    {
      "type": "paragraph",
      "text": "**Fact 2:** Marvel's market share **declined substantially**."
    },
    {
      "type": "paragraph",
      "text": "**Implicit Rule:** Market share is a percentage calculated by the formula: `Market Share = Company's Sales / Total Market Sales`."
    },
    {
      "type": "h4",
      "text": "Step 2: Synthesize the Rules and Prephrase a Contradiction"
    },
    {
      "type": "paragraph",
      "text": "This is the crucial step. We need to use the implicit formula to see what must have happened. Let's plug in our facts: `Marvel's Market Share (↓ DECREASED) = Marvel's Sales (CONSTANT) / Total Market Sales (?)`. For a fraction to get smaller while the top number (the numerator) stays the same, the bottom number (the denominator) must get bigger. Therefore, we can deduce a necessary fact: Total Market Sales must have increased."
    },
    {
      "type": "paragraph",
      "text": "Now let's take it one step further. The total market is made up of Marvel's sales and the sales of all other companies. `Total Sales (↑ INCREASED) = Marvel's Sales (CONSTANT) + Other Companies' Sales (?)`. If the total went up while Marvel's piece of it stayed the same, then the \"Other Companies' Sales\" piece **must have increased** to account for the growth."
    },
    {
      "type": "paragraph",
      "text": "**Prephrase (The \"Anti-Rule\"):** It is mathematically impossible for the sales of other companies to have decreased or stayed the same. They must have increased."
    },
    {
      "type": "h4",
      "text": "Step 3: Methodically Scan the Answer Choices for a Direct Conflict"
    },
    {
      "type": "paragraph",
      "text": "We are looking for the answer choice that contradicts our prephrase."
    },
    {
      "type": "h4",
      "text": "Answer Analysis"
    },
    {
      "type": "paragraph",
      "text": "**(A) The total monthly sales within Calistan of new cars by companies other than Marvel Automobile Company decreased over the three months following the imposition of the emission standards.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This directly contradicts our necessary inference. We proved that other companies' sales *must have increased*. This statement claims they decreased. This is a perfect contradiction."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.** (This *must be false*)."
    },
    {
      "type": "paragraph",
      "text": "**(B) Over the three months before the imposition of the emission standards, the combined market share of companies other than Marvel Automobile Company selling new cars in Calistan decreased.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This refers to the *first* period. In that period, total sales were constant and Marvel's share *increased*. Since the total market share is always 100%, if one part goes up, the other part must go down. This statement must be true."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (This is a \"Must Be True\" trap)."
    },
    {
      "type": "paragraph",
      "text": "**(C) If the emission standards had not been imposed, Marvel Automobile Company would have lost an even larger share of the number of new cars sold in Calistan than, in fact, it did.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a hypothetical statement about what *would have* happened. The stimulus provides no information to confirm or deny this."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (This *could be true*; it's out of scope)."
    },
    {
      "type": "paragraph",
      "text": "**(D) A decrease in the total monthly sales of new cars within Calistan will occur if the emission standards remain in effect.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a prediction about the future, beyond the three-month period discussed. The stimulus gives us no basis to make such a prediction."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (This *could be true*; it's out of scope)."
    },
    {
      "type": "paragraph",
      "text": "**(E) Since the imposition of the emission standards, Marvel Automobile Company's average profit on each new car sold within Calistan has increased.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The stimulus is entirely about the *number of cars sold* (sales and market share). It provides zero information about *profit*. This statement introduces a new concept."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (This *could be true*; it's out of scope)."
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
      "text": "**Look Beyond the Words:** Some contradictions are based on mathematical or proportional logic, not just verbal rules."
    },
    {
      "type": "paragraph",
      "text": "**Identify the Implicit Formula:** When you see terms like \"total,\" \"share,\" or \"average,\" identify the underlying mathematical relationship that governs them."
    },
    {
      "type": "paragraph",
      "text": "**Trace the Logical Chain:** Don't stop at the first inference. Trace the consequences through the entire system. Here, the key was moving from (1) Marvel's share decreased, to (2) Total sales increased, to (3) Other companies' sales increased."
    },
    {
      "type": "paragraph",
      "text": "**Eliminate \"Out of Scope\" Traps:** Be wary of choices that introduce new timeframes (hypotheticals, future predictions) or new concepts (profit vs. sales) that the stimulus doesn't cover."
    }
  ],
};
