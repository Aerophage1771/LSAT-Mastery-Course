import { Lesson } from '../../types';

export const Lesson5: Lesson = {
  id: '5-5',
  title: 'Lesson 2: The Numbers vs. Percentages Flaw (Flaw)',
  content: [
    {
      "type": "h2",
      "text": "Lesson 2: The Numbers vs. Percentages Flaw (Flaw)"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Data & Sampling Errors"
    },
    {
      "type": "paragraph",
      "text": "This lesson focuses on a very common type of data interpretation error: confusing numbers, percentages, and context. Arguments that rely on statistics are often flawed because they draw conclusions without considering the full context of the numbers they present."
    },
    {
      "type": "paragraph",
      "text": "The most common version of this flaw occurs when an argument uses a **raw number** (e.g., \"1,000 accidents\") to draw a conclusion about a **rate or percentage** (e.g., \"more dangerous\" or \"more likely\"), or vice versa. To make a valid comparison between two groups, you almost always need to know the **total size** of those groups."
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
      "text": "**Stimulus** > > A commonly accepted myth is that left-handed people are more prone to cause accidents than are right-handed people. But this is, in fact, just a myth, as is indicated by the fact that more household accidents are caused by right-handed people than are caused by left-handed people. > > **Question** > > The reasoning is flawed because the argument > > *   (A) makes a distinction where there is no real difference between the things distinguished > *   (B) takes no account of the relative frequency of left-handed people in the population as a whole > *   (C) uses the word “accidents” in two different senses > *   (D) ignores the possibility that some household accidents are caused by more than one person > *   (E) gives wholly irrelevant evidence and simply disparages an opposing position by calling it a “myth”"
    },
    {
      "type": "h4",
      "text": "Step 1: Deconstruct the Argument"
    },
    {
      "type": "paragraph",
      "text": "**Conclusion:** The belief that left-handed people are more accident-prone is a myth."
    },
    {
      "type": "paragraph",
      "text": "**Premise:** More household accidents are caused by right-handed people than by left-handed people (in total numbers)."
    },
    {
      "type": "h4",
      "text": "Step 2: Find the Logical Gap"
    },
    {
      "type": "paragraph",
      "text": "The argument uses a premise about the total number of accidents to draw a conclusion about how accident-prone each group is. \"Accident-prone\" is a measure of risk or rate—it refers to the likelihood that any *individual* in that group will cause an accident."
    },
    {
      "type": "paragraph",
      "text": "**Ask \"What's missing?\":** To compare the accident *rate* of the two groups, we can't just look at the total number of accidents. We need to know the **total number of people in each group**."
    },
    {
      "type": "paragraph",
      "text": "**The Flaw:** The population of right-handed people is vastly larger than the population of left-handed people (roughly 9 to 1). So, even if left-handed people were individually much clumsier, the sheer number of right-handed people would likely lead to a higher total number of accidents caused by them. The argument's evidence is misleading because it lacks the necessary context."
    },
    {
      "type": "h4",
      "text": "Step 3: Articulate the Flaw and Prephrase"
    },
    {
      "type": "paragraph",
      "text": "The argument wrongly uses absolute numbers to draw a conclusion about a rate. It fails to consider that there are far more right-handed people than left-handed people, which is essential information for a fair comparison of accident proneness."
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** The argument ignores the fact that the two groups are different sizes."
    },
    {
      "type": "h4",
      "text": "Step 4: Evaluate the Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "**(A) makes a distinction where there is no real difference between the things distinguished**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The argument distinguishes between left-handed and right-handed people, which is a real and valid distinction."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(B) takes no account of the relative frequency of left-handed people in the population as a whole**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a perfect match for our prephrase. The \"relative frequency\" is the proportion of left-handed vs. right-handed people in the total population. This is the exact piece of information the argument is missing."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(C) uses the word “accidents” in two different senses**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This describes an equivocation flaw. The word \"accidents\" is used consistently to mean household mishaps."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Accurate Description of the Wrong Flaw)"
    },
    {
      "type": "paragraph",
      "text": "**(D) ignores the possibility that some household accidents are caused by more than one person**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a minor, irrelevant detail. The core of the argument is a comparison between two large groups, not an analysis of the specifics of individual accidents."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Out of Scope)"
    },
    {
      "type": "paragraph",
      "text": "**(E) gives wholly irrelevant evidence and simply disparages an opposing position by calling it a “myth”**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The evidence is not \"wholly irrelevant.\" The total number of accidents is relevant to a discussion of accident rates, even if it's used incorrectly. The argument provides this (flawed) evidence; it doesn't just dismiss the opposing view without support."
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
      "text": "**Be Wary of Numbers and Percentages:** When an argument uses statistics, always check to see if it's confusing absolute numbers with rates, percentages, or proportions."
    },
    {
      "type": "paragraph",
      "text": "**Context is King:** A statistic is often meaningless without context. When comparing two groups, always ask, \"Are these groups of a similar size?\""
    },
    {
      "type": "paragraph",
      "text": "**\"More\" vs. \"More Likely\":** Pay close attention to this distinction. A higher total number of events (\"more\") in a group does not automatically mean that an individual member of that group is \"more likely\" to experience that event."
    }
  ],
};
