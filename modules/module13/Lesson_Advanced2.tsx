import { Lesson } from '../../types';

export const Lesson_Advanced2: Lesson = {
  id: '13-9',
  title: 'Advanced Lesson 2: Bridging the Nested Gap',
  content: [
    {
      "type": "h2",
      "text": "Advanced Lesson 2: Bridging the Nested Gap"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Interlocking Deductions"
    },
    {
      "type": "paragraph",
      "text": "In standard \"Justify the Application\" questions, the logical gap is usually a single missing puzzle piece. If the principle says, \"Action X is wrong if done with Intent Y,\" and the stimulus says \"He did Action X, so he was wrong,\" you simply look for an answer that says, \"He had Intent Y.\""
    },
    {
      "type": "paragraph",
      "text": "However, on Level 5 questions, the gap is nested. The stimulus provides a multi-part principle where the rules interlock. To justify the conclusion, you cannot simply state the missing condition. Instead, you must find a fact that, when combined with Part 1 of the principle, logically forces the condition required by Part 2 of the principle. You are not just filling a hole; you are setting up a domino effect."
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
      "text": "**Stimulus** > > **Principle:** Meetings should be kept short, addressing only those issues relevant to a majority of those attending. A person should not be required to attend a meeting if none of the issues to be addressed at the meeting are relevant to that person. > **Application:** Terry should not be required to attend today's two o'clock meeting. > > **Question** > > Which one of the following, if true, most justifies the stated application of the principle? > > *   (A) The only issues on which Terry could make a presentation at the meeting are issues irrelevant to at least a majority of those who could attend. > *   (B) If Terry makes a presentation at the meeting, the meeting will not be kept short. > *   (C) No issue relevant to Terry could be relevant to a majority of those attending the meeting. > *   (D) If Terry attends the meeting a different set of issues will be relevant to a majority of those attending than if Terry does not attend. > *   (E) The majority of the issues to be addressed at the meeting are not relevant to Terry."
    },
    {
      "type": "h4",
      "text": "Step 1: Map the Principle"
    },
    {
      "type": "paragraph",
      "text": "The principle here isn't just one rule; it is a system with two distinct parts."
    },
    {
      "type": "paragraph",
      "text": "**Rule 1 (The Agenda Rule):** A meeting should address *only* issues relevant to a **majority** of attendees."
    },
    {
      "type": "paragraph",
      "text": "**Rule 2 (The Attendance Rule):** A person is exempt from attending *if* **none** of the issues addressed are relevant to them."
    },
    {
      "type": "h4",
      "text": "Step 2: Identify the Logical Gap"
    },
    {
      "type": "paragraph",
      "text": "The conclusion is that Terry is exempt. To prove this using Rule 2, we must establish its trigger:"
    },
    {
      "type": "list",
      "items": [
        "*Required Condition:* None of the issues on the agenda are relevant to Terry."
      ]
    },
    {
      "type": "paragraph",
      "text": "The stimulus does *not* state this fact. We need to find an answer choice that proves it."
    },
    {
      "type": "h4",
      "text": "Step 3: Analyze the Complexity (The Nesting)"
    },
    {
      "type": "paragraph",
      "text": "Here is the trick: The correct answer likely won't just say, \"No issues on the agenda are relevant to Terry.\" That would be too easy for a Level 5 question. Instead, we must use Rule 1 to get there."
    },
    {
      "type": "list",
      "items": [
        "We know the agenda will *only* contain issues relevant to the majority (Rule 1).",
        "If we can prove that Terry's interests and the majority's interests have *zero overlap*, then we know nothing relevant to Terry will make it onto the agenda."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** Any issue relevant to Terry is NOT relevant to the majority (and therefore won't be discussed)."
    },
    {
      "type": "h4",
      "text": "Step 4: Evaluate the Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "**(A) The only issues on which Terry could make a presentation at the meeting are issues irrelevant to at least a majority of those who could attend.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This focuses on Terry *presenting*. Terry doesn't have to present to be required to attend; he just needs relevant issues to be discussed. Furthermore, just because his *presentation* topics aren't relevant doesn't mean *other* topics on the agenda aren't relevant to him."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(B) If Terry makes a presentation at the meeting, the meeting will not be kept short.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This relates to the \"keep short\" clause of Rule 1. It might be a reason for Terry not to present, but it is not a justification for him to skip the meeting entirely."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(C) No issue relevant to Terry could be relevant to a majority of those attending the meeting.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This creates the chain reaction we need."
    },
    {
      "type": "list",
      "items": [
        "If an issue is relevant to Terry, it is **not** relevant to the majority (premise from answer C).",
        "If an issue is not relevant to the majority, it will **not be addressed** (application of Rule 1).",
        "Therefore, no issue relevant to Terry will be addressed.",
        "Therefore, Terry is not required to attend (application of Rule 2)."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(D) If Terry attends the meeting a different set of issues will be relevant to a majority of those attending than if Terry does not attend.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This discusses how the majority's interests might shift. It does not prove that the final agenda will contain *zero* issues relevant to Terry. It is too vague to bridge the specific gap."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(E) The majority of the issues to be addressed at the meeting are not relevant to Terry.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is the **\"Almost Perfect\" Trap**. Rule 2 requires that **none** of the issues be relevant. This choice only establishes that a **majority** (e.g., 51%) are not relevant. This leaves open the possibility that 49% of the issues *are* relevant to Terry. If even one issue is relevant, he is not exempt. This fails to trigger Rule 2."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Quantifier Mismatch)"
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
      "text": "**Look for Interlocking Rules:** If the stimulus gives you a rule about *creating* a situation (Rule 1: Agenda) and a rule about *reacting* to that situation (Rule 2: Attendance), you will likely need to use both."
    },
    {
      "type": "paragraph",
      "text": "**Don't Just Match Words; Match Logic:** The correct answer didn't use the word \"exempt.\" It provided the raw data that, when processed through the principles, *resulted* in an exemption."
    },
    {
      "type": "paragraph",
      "text": "**Watch Quantifiers Like a Hawk:** In Principle questions, the difference between \"most,\" \"majority,\" and \"none\" is the difference between right and wrong. Choice (E) fails solely because \"majority\" does not equal \"all.\""
    }
  ],
};
