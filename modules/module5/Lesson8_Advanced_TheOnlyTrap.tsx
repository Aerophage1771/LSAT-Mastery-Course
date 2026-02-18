import { Lesson } from '../../types';

export const Lesson8_Advanced_TheOnlyTrap: Lesson = {
  id: "5-8",
  title: "Advanced: The 'Only' Trap (PT-102-S-4-Q-23)",
  content: [
    { type: 'h3', text: "Practice Drill: The 'Only' Trap and Chained Mistaken Reversals (PT-102-S-4-Q-23)" },
    { type: 'paragraph', text: "This drill focuses on a high-difficulty conditional logic flaw. The challenge comes from the use of the word \"only,\" which requires careful translation, and the need to link multiple conditional statements into a chain." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },
    { type: 'hr' },
    { type: 'h4', text: "The Stimulus" },
    { type: 'blockquote', text: "Only computer scientists understand the architecture of personal computers, and only those who understand the architecture of personal computers appreciate the advances in technology made in the last decade. It follows that only those who appreciate these advances are computer scientists." },
    { type: 'h4', text: "The Question" },
    { type: 'paragraph', text: "Which one of the following most accurately describes a flaw in the reasoning in the argument?" },
    { type: 'options', items: [
      "**(A)** The argument contains no stated or implied relationship between computer scientists and those who appreciate the advances in technology made in the last decade.",
      "**(B)** The argument ignores the fact that some computer scientists may not appreciate the advances in technology made in the last decade.",
      "**(C)** The argument ignores the fact that computer scientists may appreciate other things besides the advances in technology made in the last decade.",
      "**(D)** The premises of the argument are stated in such a way that they exclude the possibility of drawing any logical conclusion.",
      "**(E)** The premises of the argument presuppose that everyone understands the architecture of personal computers."
    ]},
    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },
    { type: 'h3', text: "Analysis & Explanation" },
    { type: 'paragraph', text: "*(Scroll down only after attempting the question)*" },
    { type: 'hr' },
    { type: 'h3', text: "1. Deconstruct and Translate" },
    { type: 'paragraph', text: "The rule for \"Only\" is: \"Only A's are B's\" translates to \"If you are a B, then you are an A.\"" },
    { type: 'breakdown', labels: { title: 'Statement', text: 'Translation' }, items: [
      { title: "Premise 1", text: "Only computer scientists (CS) understand architecture (UA). -> `UA -> CS`", badge: "Rule", badgeColor: "indigo" },
      { title: "Premise 2", text: "Only those who understand architecture (UA) appreciate advances (AA). -> `AA -> UA`", badge: "Rule", badgeColor: "indigo" },
      { title: "Conclusion", text: "Only those who appreciate advances (AA) are computer scientists (CS). -> `CS -> AA`", badge: "Conclusion", badgeColor: "indigo" }
    ]},
    { type: 'h3', text: "2. Find the Logical Gap" },
    { type: 'paragraph', text: "Valid Chain: `AA -> UA -> CS` (If Appreciate Advances, then Computer Scientist)." },
    { type: 'paragraph', text: "Stated Conclusion: `CS -> AA` (If Computer Scientist, then Appreciate Advances)." },
    { type: 'paragraph', text: "The author has taken the valid chain and reversed it. This is a **Mistaken Reversal**." },
    { type: 'h3', text: "3. Evaluate the Answer Choices" },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: "(A) The argument contains no stated or implied relationship...", text: "False. The premises create a clear implied relationship (`AA -> CS`).", badge: "Incorrect", badgeColor: "red" },
      { title: "(B) The argument ignores the fact that some computer scientists may not appreciate the advances...", text: "This is the consequence of the Mistaken Reversal. The conclusion implies ALL CS appreciate advances. The valid chain allows for a CS who does *not*. Ignoring this possibility is the error.", badge: "Correct", badgeColor: "green" },
      { title: "(C) The argument ignores the fact that computer scientists may appreciate other things...", text: "Irrelevant to the logic.", badge: "Incorrect", badgeColor: "red" },
      { title: "(D) The premises... exclude the possibility of drawing any logical conclusion.", text: "Incorrect. A valid conclusion (`AA -> CS`) was possible.", badge: "Incorrect", badgeColor: "red" },
      { title: "(E) The premises... presuppose that everyone understands...", text: "Incorrect.", badge: "Incorrect", badgeColor: "red" }
    ]},
    { type: 'callout', title: "Summary & Key Takeaways", variant: "summary", text: "This question is a masterclass in camouflaging a simple flaw within a complex structure.\n\n**Key Takeaway:** The correct answer to a formal logic flaw question often won't use formal terms like \"mistaken reversal.\" Instead, it will describe the logical consequence of that error." }
  ]
};
