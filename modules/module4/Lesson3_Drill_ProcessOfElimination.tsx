import { Lesson } from '../../types';

export const Lesson3_Drill_ProcessOfElimination: Lesson = {
  id: "4-3",
  title: "Drill: Process of Elimination (PT-101-S-2-Q-13)",
  content: [
    { type: 'h3', text: "Practice Drill: Parallel Reasoning (PT-101-S-2-Q-13)" },
    { type: 'paragraph', text: "This drill focuses on a common logical pattern: **Process of Elimination** (also known as Disjunctive Syllogism), where one of two possibilities is ruled out, leaving the other as the necessary conclusion." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },
    { type: 'hr' },
    {
      type: 'question-card',
      id: 'PT-101-S-2-Q-13',
      stimulus: "Carl’s Coffee Emporium stocks only two decaffeinated coffees: French Roast and Mocha Java. Yusef only serves decaffeinated coffee, and the coffee he served after dinner last night was far too smooth and mellow to have been French Roast. So, if Yusef still gets all his coffee from Carl’s, what he served last night was Mocha Java.",
      question: "The argument above is most similar in its logical structure to which one of the following?",
      options: [
      "**(A)** Samuel wants to take three friends to the beach. His mother owns both a sedan and a convertible. The convertible holds four people so, although the sedan has a more powerful engine, if Samuel borrows a vehicle from his mother, he will borrow the convertible.",
      "**(B)** If Anna wants to walk from her house to the office where she works, she must either go through the park or take the overpass across the railroad tracks. The park paths are muddy, and Anna does not like using the overpass, so she never walks to work.",
      "**(C)** Rose can either take a two-week vacation in July or wait until October and take a three-week vacation. The trail she had planned to hike requires three weeks to complete but is closed by October, so if Rose takes a vacation, it will not be the one she had planned.",
      "**(D)** Werdix, Inc., has offered Arno a choice between a job in sales and a job in research. Arno would like to work at Werdix but he would never take a job in sales when another job is available, so if he accepts one of these jobs, it will be the one in research.",
      "**(E)** If Teresa does not fire her assistant, her staff will rebel and her department’s efficiency will decline. Losing her assistant would also reduce its efficiency, so, if no alternative solution can be found, Teresa’s department will become less efficient."
    ]
    },
    
    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },
    { type: 'h3', text: "Analysis & Explanation" },
    { type: 'paragraph', text: "*(Scroll down only after attempting the question)*" },
    { type: 'hr' },
    
    { type: 'h3', text: "1. Deconstruct the Stimulus Argument" },
    { type: 'paragraph', text: "First, let's break down each sentence of the stimulus to understand its meaning and its role in the argument." },
    
    { type: 'breakdown', labels: { title: 'Quote', text: 'Role Analysis' }, items: [
      {
        title: "\"Carl’s Coffee Emporium stocks only two decaffeinated coffees...\"",
        text: "**Premise**. It establishes the limited set of options (A or B) that are available from a specific source.",
        badge: "Premise",
        badgeColor: "indigo"
      },
      {
        title: "\"Yusef only serves... coffee... too smooth... to have been French Roast.\"",
        text: "**Premise**. It eliminates one of the two options (Not A).",
        badge: "Premise",
        badgeColor: "indigo"
      },
      {
        title: "\"So, if Yusef still gets all his coffee from Carl’s... Mocha Java.\"",
        text: "**Conclusion**. It's a conditional conclusion that follows from the two premises. If Source -> B.",
        badge: "Conclusion",
        badgeColor: "indigo"
      }
    ]},

    { type: 'h3', text: "2. Abstract the Logical Method" },
    { type: 'paragraph', text: "Now, we create a simple, abstract blueprint of the argument's structure." },
    { type: 'list', items: [
      "**Motto:** \"If a choice came from this specific set of two, and it wasn't the first option, then it had to be the second option.\"",
      "**Diagram:**\n1. If from Source, then (Option A or Option B).\n2. It was not Option A.\n3. Conclusion: Therefore, if from Source, then it was Option B."
    ]},
    
    { type: 'h3', text: "3. Evaluate the Answer Choices" },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      {
        title: "(A) Samuel wants to take three friends to the beach. His mother owns both a sedan and a convertible. The convertible holds four people so, although the sedan has a more powerful engine, if Samuel borrows a vehicle from his mother, he will borrow the convertible.",
        text: "This argument provides a positive reason to choose the convertible (it holds enough people). It does not explicitly state that the sedan is impossible or has been eliminated as an option. The structure is \"Choose B because B has a needed quality,\" not \"Choose B because A is ruled out.\"",
        badge: "Mismatch",
        badgeColor: "red"
      },
      {
        title: "(B) If Anna wants to walk... she never walks to work.",
        text: "This argument eliminates *both* options (park and overpass are both undesirable). The conclusion is that the entire action (walking to work) is avoided. The stimulus eliminates only one option to confirm the other.",
        badge: "Mismatch",
        badgeColor: "red"
      },
      {
        title: "(C) Rose can either take a two-week vacation... it will not be the one she had planned.",
        text: "This argument also eliminates *both* options for the specific plan (July is too short; the trail is closed in October). The conclusion is a negative outcome. This does not match the stimulus's structure.",
        badge: "Mismatch",
        badgeColor: "red"
      },
      {
        title: "(D) Werdix, Inc., has offered Arno a choice... so if he accepts... it will be the one in research.",
        text: "This pattern is a perfect match.\n1. If from Source (Werdix), then (Sales or Research).\n2. It will not be Sales.\n3. Conclusion: Therefore, if from Source, then it will be Research.",
        badge: "Correct",
        badgeColor: "green"
      },
      {
        title: "(E) If Teresa does not fire her assistant... department will become less efficient.",
        text: "This describes a dilemma where both paths lead to the same negative outcome (less efficiency). It is not a process of elimination where one option is chosen over another.",
        badge: "Mismatch",
        badgeColor: "red"
      }
    ]},

    { type: 'callout', title: "Summary & Key Takeaways", variant: "summary", text: "This question tests a core logical pattern: **Disjunctive Syllogism**.\n\n* **Look for Elimination:** The argument's strength comes from removing one possibility. Choices (A), (B), (C), and (E) do not do this in the same way.\n* **Watch the Conditional Conclusion:** The \"if...\" clause in the conclusion is a crucial structural element. The conclusion isn't that Yusef *did* serve Mocha Java; it's that *if* he got his coffee from Carl's, *then* he served Mocha Java. Choice (D) mirrors this conditional structure perfectly." }
  ]
};
