import { Lesson } from '../../types';

export const Lesson4: Lesson = {
  id: '8-4',
  title: 'Lesson 1: The Alternative Cause',
  content: [
    {
      "type": "h2",
      "text": "Lesson 1: The Alternative Cause"
    },
    {
      "type": "h3",
      "text": "Concept Focus: The Alternative Cause  The most common flaw in LSAT arguments is confusing correlation with causation. An author will observe that two things (A and B) occur together and conclude that A caused B. This reasoning is weak because it ignores other possibilities. The most effective way to attack this flaw is to provide an alternative cause—a third factor (C) that could plausibly explain the observed effect (B). If another cause is possible, we can no longer be certain that the author's proposed cause is the correct one, and the argument is weakened."
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Author's Argument:** We saw A and B together. Therefore, A caused B. *"
    },
    {
      "type": "paragraph",
      "text": "**Alternative Cause Weakener:** What if C, which is also associated with A, was the real cause of B?"
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
      "text": "**Stimulus** > > In an experiment testing whether hyperactivity is due to a brain abnormality, the brain activity of 25 hyperactive adults was compared to the brain activity of 25 adults who were not hyperactive. The tests revealed that the hyperactive adults had much less brain activity in the premotor cortex, a region of the brain believed to control action, than did the nonhyperactive adults. The experimenters concluded that diminished activity in the premotor cortex is one cause of hyperactivity. > > **Question** > > Which one of the following, if true, most undermines the conclusion drawn by the experimenters? > > *   (A) Some of the nonhyperactive adults in the study had children who suffer from hyperactivity. > *   (B) The hyperactive adults who participated in the experiment varied in the severity of their symptoms. > *   (C) The neuropsychologists who designed the experiment were not present when the tests were performed. > *   (D) All of the hyperactive adults in the study had been treated for hyperactivity with a medication that is known to depress activity in some regions of the brain, while none of the nonhyperactive adults had been so treated. > *   (E) The test was performed only on adults because even though the method by which the test measured brain activity is harmless to adults, it does require the use of radiation, which could be harmful to children."
    },
    {
      "type": "h4",
      "text": "Step 1: Deconstruct the Argument *"
    },
    {
      "type": "paragraph",
      "text": "**Premise:** A study compared two groups: hyperactive adults and non-hyperactive adults. *"
    },
    {
      "type": "paragraph",
      "text": "**Premise:** The hyperactive group had less brain activity in the premotor cortex than the non-hyperactive group. *"
    },
    {
      "type": "paragraph",
      "text": "**Conclusion:** Diminished activity in the premotor cortex is one cause of hyperactivity. *"
    },
    {
      "type": "paragraph",
      "text": "**Simple Translation:** The argument observes a correlation (hyperactivity is linked with low brain activity) and concludes causation (low brain activity causes hyperactivity)."
    },
    {
      "type": "h4",
      "text": "Step 2: Identify the Logical Gap and Prephrase the Attack The argument's flaw is a classic correlation-causation fallacy. The experimenters assume that the only relevant difference between the two groups was hyperactivity. They then conclude that this difference must be caused by the other observed difference (brain activity). We need to find an answer that provides a different explanation for the low brain activity."
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** \"I'm looking for an alternative cause. What is another reason, besides the hyperactivity itself, that could explain why the hyperactive group had lower brain activity?\""
    },
    {
      "type": "h4",
      "text": "Step 3 & 4: Evaluate Answer Choices & Eliminate Traps"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**(A) Some of the nonhyperactive adults in the study had children who suffer from hyperactivity.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This shifts the scope to the genetics of the subjects' children. The argument is about the brain activity of the adults in the study. This information is irrelevant.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Scope Shift)\n*"
    },
    {
      "type": "paragraph",
      "text": "**(B) The hyperactive adults who participated in the experiment varied in the severity of their symptoms.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The argument compares the *average* findings of the hyperactive group to the control group. Variation within one group is expected and doesn't explain the difference *between* the groups.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Irrelevant Distinction)\n*"
    },
    {
      "type": "paragraph",
      "text": "**(C) The neuropsychologists who designed the experiment were not present when the tests were performed.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a weak procedural objection. We have no reason to believe their presence was necessary. This doesn't provide an alternative cause for the results.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**\n*"
    },
    {
      "type": "paragraph",
      "text": "**(D) All of the hyperactive adults in the study had been treated for hyperactivity with a medication that is known to depress activity in some regions of the brain, while none of the nonhyperactive adults had been so treated.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a perfect match for our prephrase. It introduces a powerful **alternative cause**. The lower brain activity in the hyperactive group might not be a feature of their condition, but a side effect of their medication. Since the control group was not taking this medication, this difference could fully account for the study's findings, breaking the causal link the experimenters assumed.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**\n*"
    },
    {
      "type": "paragraph",
      "text": "**(E) The test was performed only on adults because...**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This explains a limitation in the study's design (why children weren't included). It's irrelevant to interpreting the results that *were* obtained from the adults.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Scope Shift)"
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
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Suspect Causation from Correlation:** When an argument concludes that one thing caused another based only on the observation that the two things are linked, it is almost always flawed. *"
    },
    {
      "type": "paragraph",
      "text": "**Hunt for the Alternative Cause:** The most effective way to weaken a correlation-causation argument is to find a plausible alternative explanation for the observed effect. *"
    },
    {
      "type": "paragraph",
      "text": "**Focus on the Difference:** The correct answer will often explain the key difference between the groups being compared. Here, the real difference wasn't just hyperactivity; it was also medication."
    }
  ],
};
