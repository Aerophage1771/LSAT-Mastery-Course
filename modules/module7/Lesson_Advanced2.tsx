import { Lesson } from '../../types';

export const Lesson_Advanced2: Lesson = {
  id: '7-9',
  title: 'Advanced Lesson 2: Evaluating Numbers (The Rank vs. The Number)',
  content: [
    {
      "type": "h2",
      "text": "Advanced Lesson 2: Evaluating Numbers (The Rank vs. The Number)"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Stimulus Complexity & Sophisticated Traps  Advanced \"Evaluate\" questions often hinge on a subtle mathematical or statistical flaw. Instead of a straightforward causal gap, the argument might make an invalid leap from one type of numerical data to another. The most common version of this is confusing relative information (like percentages, proportions, or rankings) with absolute information (a concrete number)."
    },
    {
      "type": "paragraph",
      "text": "This question is a perfect example. It moves from a *relative rank* (\"second place\") to an *absolute quantity* (\"a great number\"). Furthermore, it is a masterclass in distractor design, with three incorrect choices that are highly tempting to test-takers who haven't precisely identified the logical flaw."
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
      "text": "**Stimulus** > > Columnist: George Orwell's book 1984 has exercised much influence on a great number of this newspaper's readers. One thousand readers were surveyed and asked to name the one book that had the most influence on their lives. The book chosen most often was the Bible; 1984 was second. > > **Question** > > The answer to which one of the following questions would most help in evaluating the columnist's argument? > > *   (A) How many books had each person surveyed read? > *   (B) How many people chose books other than 1984? > *   (C) How many people read the columnist's newspaper? > *   (D) How many books by George Orwell other than 1984 were chosen? > *   (E) How many of those surveyed had actually read the books they chose?"
    },
    {
      "type": "h4",
      "text": "Step 1: Deconstruct the Argument"
    },
    {
      "type": "paragraph",
      "text": "**Premise:** In a survey of 1,000 readers, *1984* was the second most frequently chosen book."
    },
    {
      "type": "paragraph",
      "text": "**Conclusion:** *1984* has influenced \"a great number\" of the newspaper's readers."
    },
    {
      "type": "paragraph",
      "text": "The argument type is a generalization from a survey sample, with a conclusion about a quantity."
    },
    {
      "type": "h4",
      "text": "Step 2: Pinpoint the Logical Gap The argument's validity depends entirely on what \"second\" place means in a survey of 1,000 people. A rank tells you nothing about the actual number. Consider two possible scenarios:"
    },
    {
      "type": "paragraph",
      "text": "**Scenario 1:** The Bible gets 990 votes, *1984* gets 5 votes, and a few other books get 1 vote each. Here, *1984* is second, but 5 is not \"a great number.\""
    },
    {
      "type": "paragraph",
      "text": "**Scenario 2:** The Bible gets 400 votes, *1984* gets 399 votes, and the remaining 201 votes are split among other books. Here, *1984* is second, and 399 almost certainly qualifies as \"a great number.\"  The gap is the missing link between the **rank** and the **number**."
    },
    {
      "type": "h4",
      "text": "Step 3: Prephrase the \"Key Question\" To evaluate the columnist's conclusion, I need to know the actual number of votes *1984* received. Prephrase: \"How many of the 1,000 people actually chose *1984*?\""
    },
    {
      "type": "h4",
      "text": "Step 4: Apply the Variance Test Let's test our prephrase."
    },
    {
      "type": "paragraph",
      "text": "**Answer 1 (\"5 people\"):** If only 5 people chose *1984*, the conclusion that it influenced a \"great number\" is **very weak**."
    },
    {
      "type": "paragraph",
      "text": "**Answer 2 (\"399 people\"):** If 399 people chose *1984*, the conclusion is **very strong**."
    },
    {
      "type": "paragraph",
      "text": "The question has a powerful \"double impact\" and is the key to evaluating the argument."
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
      "text": "**(A) How many books had each person surveyed read?**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** A person's total reading history is irrelevant. The survey was only about the single *most influential* book. This fails the Variance Test."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Out of Scope)"
    },
    {
      "type": "paragraph",
      "text": "**(B) How many people chose books other than 1984?**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a slightly indirect, but logically perfect, way to ask our prephrased question. There are 1,000 people in the survey. The number of people who chose *1984* is simply **1,000 minus the number who chose other books.** If we know the answer to this question, we can calculate the exact number of votes for *1984* and evaluate the conclusion. It passes the Variance Test perfectly."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(C) How many people read the columnist's newspaper?**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a powerful **Scope Shift** trap. The conclusion is about the influence on \"this newspaper's readers,\" but the evidence is strictly limited to the **1,000 people surveyed**. The argument is about interpreting that sample, not generalizing to the entire readership. The total number of readers is irrelevant to evaluating the logic based on the survey data."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(D) How many books by George Orwell other than 1984 were chosen?**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The conclusion is specifically about the influence of *1984*. Votes for other Orwell books are votes that *didn't* go to *1984*, but this information doesn't help us find the total for *1984* itself."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(E) How many of those surveyed had actually read the books they chose?**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a sophisticated **Questioning the Premise** trap. It invites you to doubt the validity of the survey data itself. However, the LSAT wants you to evaluate the columnist's *reasoning* from the data as given. The columnist's flaw is in their interpretation (confusing rank with number), not in trusting a potentially flawed survey."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
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
      "text": "**Distinguish Relative from Absolute:** Be highly skeptical of arguments that use relative terms (ranks, percentages, proportions) to draw conclusions about absolute numbers."
    },
    {
      "type": "paragraph",
      "text": "**The Correct Answer Can Be Indirect:** The right question might not ask for the missing number directly. It might ask for information that allows you to *calculate* that number."
    },
    {
      "type": "paragraph",
      "text": "**Don't Attack the Data, Attack the Logic:** On advanced questions, traps will invite you to question the validity of the evidence (e.g., the survey). Resist this. The flaw is almost always in the logical leap *from* the evidence *to* the conclusion."
    }
  ],
};
