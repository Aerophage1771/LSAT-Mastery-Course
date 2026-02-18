import { Lesson } from '../../types';

export const Lesson4_Drill_ProportionalReasoning: Lesson = {
  id: "4-4",
  title: "Drill: Proportional Reasoning (PT-101-S-3-Q-21)",
  content: [
    { type: 'h3', text: "Practice Drill: Parallel Reasoning (PT-101-S-3-Q-21)" },
    { type: 'paragraph', text: "This drill focuses on a **Mathematical** or **Proportional** pattern of reasoning. The logic relies on how two quantities change in relation to one another." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },
    { type: 'hr' },
    { type: 'h4', text: "The Stimulus" },
    { type: 'blockquote', text: "The amount of electricity consumed in Millville on any day in August is directly proportional to peak humidity on that day. Since the average peak humidity this August was three points higher than the average peak humidity last August, it follows that more energy was consumed in Millville this August than last August." },
    { type: 'h4', text: "The Question" },
    { type: 'paragraph', text: "Which one of the following arguments has a pattern of reasoning most similar to the one in the argument above?" },
    
    { type: 'options', items: [
      "**(A)** The amount of art supplies used in any of the Aesthetic Institute’s 25 classes is directly proportional to the number of students in that class. Since in these classes the institute enrolled 20 percent more students overall last year than in the previous year, more art supplies were used in the institute’s classes last year than in the previous year.",
      "**(B)** The number of courses in painting offered by the Aesthetic Institute in any term is directly proportional to the number of students enrolled in the institute in that term. But the institute offers the same number of courses in sculpture each term. Hence, the institute usually offers more courses in painting than in sculpture.",
      "**(C)** The number of new students enrolled at the Aesthetic Institute in any given year is directly proportional to the amount of advertising the institute has done in the previous year. Hence, if the institute seeks to increase its student body it must increase the amount it spends on advertising.",
      "**(D)** The fees paid by a student at the Aesthetic Institute are directly proportional to the number of classes in which that student enrolls. Since the number of students at the Aesthetic Institute is increasing, it follows that the institute is collecting a greater amount in fees paid by students than it used to.",
      "**(E)** The number of instructors employed by the Aesthetic Institute in any term is directly proportional to the number of classes offered in that term and also directly proportional to the number of students enrolled at the institute. Thus, the number of classes offered by the institute in any term is directly proportional to the number of students enrolled in that term."
    ]},
    
    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },
    { type: 'h3', text: "Analysis & Explanation" },
    { type: 'paragraph', text: "*(Scroll down only after attempting the question)*" },
    { type: 'hr' },
    
    { type: 'h3', text: "1. Deconstruct the Stimulus Argument" },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Role Analysis' }, items: [
      {
        title: "\"The amount of electricity consumed... is directly proportional to peak humidity...\"",
        text: "**Premise**. Establishes a rule connecting two variables: Electricity Use (Output) and Humidity (Input).",
        badge: "Rule",
        badgeColor: "indigo"
      },
      {
        title: "\"Since the average peak humidity this August was three points higher...\"",
        text: "**Premise**. Provides evidence that the condition for the rule was met (Input variable increased).",
        badge: "Evidence",
        badgeColor: "indigo"
      },
      {
        title: "\"...it follows that more energy was consumed...\"",
        text: "**Conclusion**. The outcome derived from applying the rule to the evidence (Output variable must also increase).",
        badge: "Conclusion",
        badgeColor: "indigo"
      }
    ]},

    { type: 'h3', text: "2. Abstract the Logical Method" },
    { type: 'list', items: [
      "**Motto:** \"Output A is tied to Input B. Since Input B went up, Output A also went up.\"",
      "**Diagram:**\n1. Rule: A is directly proportional to B.\n2. Evidence: B (Time 2) > B (Time 1).\n3. Conclusion: Therefore, A (Time 2) > A (Time 1)."
    ]},

    { type: 'h3', text: "3. Evaluate the Answer Choices" },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      {
        title: "(A) The amount of art supplies... proportional to number of students... 20 percent more students... more art supplies used...",
        text: "This argument is a perfect match.\n1. Rule: Art Supplies (A) are proportional to Students (B).\n2. Evidence: Students (B) increased last year compared to the previous year.\n3. Conclusion: Therefore, Art Supplies (A) increased last year compared to the previous year.",
        badge: "Correct",
        badgeColor: "green"
      },
      {
        title: "(B) ...proportional to students... usually offers more courses in painting than in sculpture.",
        text: "The conclusion here compares two different categories at the same time (painting vs. sculpture). The stimulus compares the same category at two different times (this August vs. last August). Structural mismatch.",
        badge: "Mismatch",
        badgeColor: "red"
      },
      {
        title: "(C) ...proportional to advertising... must increase the amount it spends on advertising.",
        text: "The conclusion is a recommendation or a statement of necessity (\"it must increase...\"). The stimulus concludes with a factual claim about what happened (\"more energy was consumed\"). The type of conclusion is different.",
        badge: "Mismatch",
        badgeColor: "red"
      },
      {
        title: "(D) Fees proportional to classes... number of students increasing... collecting greater fees...",
        text: "Variable mismatch. The rule connects **fees per student** to **classes per student**. However, the evidence given is about a different variable: the **total number of students**. The argument doesn't state that students are taking more classes.",
        badge: "Mismatch",
        badgeColor: "red"
      },
      {
        title: "(E) ...Thus, the number of classes offered... is directly proportional to the number of students...",
        text: "This argument's conclusion establishes a new rule of proportionality. The stimulus uses a rule to reach a conclusion about a specific outcome; it does not conclude with a new rule.",
        badge: "Mismatch",
        badgeColor: "red"
      }
    ]},

    { type: 'callout', title: "Summary & Key Takeaways", variant: "summary", text: "This question tests your ability to follow a simple mathematical relationship and ensure variable consistency.\n\n* **Variable Matching is Crucial:** The most common trap, seen in choice (D), is a \"variable mismatch.\" The rule connects one pair of variables, but the evidence discusses a different, unrelated variable.\n* **Conclusion Type as a Filter:** Checking whether the conclusion is a factual comparison, a recommendation, or a new rule is a fast way to eliminate incorrect answers." }
  ]
};
