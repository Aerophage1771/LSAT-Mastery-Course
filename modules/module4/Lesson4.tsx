import { Lesson } from '../../types';

export const Lesson4: Lesson = {
  id: '4-4',
  title: 'Lesson 1: The Conditional Chain (Parallel Reasoning)',
  content: [
    {
      "type": "h2",
      "text": "Lesson 1: The Conditional Chain (Parallel Reasoning)"
    },
    {
      "type": "h3",
      "text": "Concept Focus: The Transitive Argument"
    },
    {
      "type": "paragraph",
      "text": "This lesson focuses on the single most common logical pattern in Parallel Reasoning questions: the Conditional Chain. This pattern connects \"if-then\" statements like a series of falling dominoes. It establishes that one event triggers a second, and that second event triggers a third. From this, you can validly conclude that the first event will ultimately trigger the final one."
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Premise 1:** If A happens, then B will happen (`A → B`). *"
    },
    {
      "type": "paragraph",
      "text": "**Premise 2:** If B happens, then C will happen (`B → C`). *"
    },
    {
      "type": "paragraph",
      "text": "**Conclusion:** Therefore, if A happens, then C will happen (`A → C`)."
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
      "text": "**Stimulus** > > If Patricia eats a heavy, spicy meal tonight, she will get a bad case of heartburn later. If Patricia gets a bad case of heartburn later, she will be grouchy tomorrow morning. So if Patricia eats a heavy, spicy meal tonight, she will be grouchy tomorrow morning. > > **Question** > > Which one of the following arguments is most similar in its logical features to the argument above? > > *   (A) If Ruth plants only daffodils... Since no flowers are blooming in Ruth’s garden, she must have planted only daffodils. > *   (B) If Shawn starts gardening in early spring... But he does not have plenty of tomatoes for canning, so either he did not start gardening in early spring or he did not plant tomatoes early. > *   (C) Maria plants either petunias or geraniums in her garden... Since both petunias and geraniums are flowers, Maria will have either purple or red flowers in her garden. > *   (D) If Li plants old rose varieties, her garden will look beautiful. If Li’s garden looks beautiful, Li’s neighbors will be impressed. So if Li plants old rose varieties, her neighbors will be impressed. > *   (E) If Bryan’s fruit trees are to produce well, he must either prune them in the fall or fertilize them in the spring... Bryan is sure to fertilize his trees this spring."
    },
    {
      "type": "h4",
      "text": "Step 1: Create the Reasoning Skeleton"
    },
    {
      "type": "paragraph",
      "text": "Let's deconstruct the stimulus argument to build our blueprint. The argument is composed entirely of conditional statements. *   Let A = Patricia eats a heavy, spicy meal. *   Let B = She gets heartburn. *   Let C = She will be grouchy."
    },
    {
      "type": "paragraph",
      "text": "The argument maps to a simple, valid chain: `A → B`, `B → C`, therefore `A → C`."
    },
    {
      "type": "paragraph",
      "text": "**Blueprint:** A **valid** argument consisting of two conditional premises that form a **chain** to reach a **conditional conclusion**."
    },
    {
      "type": "h4",
      "text": "Step 2: Evaluate the Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "We are looking for a perfect `A → B → C`, therefore `A → C` structure."
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**(A) If Ruth plants only daffodils... Since no flowers are blooming in Ruth’s garden, she must have planted only daffodils.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This argument's structure is `A → B → C`. It then states that `C` is true and concludes `A` must be true. This is a **Mistaken Reversal**, a classic logical flaw. The stimulus is valid.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Validity Mismatch)\n*"
    },
    {
      "type": "paragraph",
      "text": "**(B) If Shawn starts gardening in early spring... But he does not have plenty of tomatoes for canning, so either he did not start gardening in early spring or he did not plant tomatoes early.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This argument is valid, but its conclusion is a disjunction (\"either/or\" statement), not a simple conditional statement like the stimulus.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Conclusion Type Mismatch)\n*"
    },
    {
      "type": "paragraph",
      "text": "**(C) Maria plants either petunias or geraniums in her garden...**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The argument's first premise is \"Maria plants *either* petunias *or* geraniums.\" This is not a conditional chain.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Structural Mismatch)\n*"
    },
    {
      "type": "paragraph",
      "text": "**(D) If Li plants old rose varieties, her garden will look beautiful. If Li’s garden looks beautiful, Li’s neighbors will be impressed. So if Li plants old rose varieties, her neighbors will be impressed.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** Let's map this argument.       \n*"
    },
    {
      "type": "paragraph",
      "text": "**A** = Li plants old rose varieties.       \n*"
    },
    {
      "type": "paragraph",
      "text": "**B** = Her garden will look beautiful.       \n*"
    },
    {
      "type": "paragraph",
      "text": "**C** = Her neighbors will be impressed."
    },
    {
      "type": "list",
      "items": [
        "The structure is: `A → B`, `B → C`, and the conclusion is `A → C`. This is a perfect replica of the stimulus."
      ]
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**\n*"
    },
    {
      "type": "paragraph",
      "text": "**(E) If Bryan’s fruit trees are to produce well... Bryan is sure to fertilize his trees this spring.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This argument's conclusion is a factual claim: \"Bryan is sure to fertilize.\" The conclusion in our blueprint is a conditional \"if...then\" statement.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Conclusion Type Mismatch)"
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
        "The **Conditional Chain** is one of the most fundamental and frequently tested patterns. Its structure is `If A, then B; If B, then C; Therefore, If A, then C`. *   Focus on the flow of logic. The *result* of one premise must be the *trigger* for the next to form a chain. *   Use the **conclusion type** as a quick filter. A stimulus with a conditional conclusion can only be matched by an answer with a conditional conclusion."
      ]
    }
  ],
};
