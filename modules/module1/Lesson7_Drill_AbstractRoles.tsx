import { Lesson } from '../../types';

export const Lesson7_Drill_AbstractRoles: Lesson = {
  id: "1-7",
  title: "Drill: Abstract Roles (PT-117-S-2-Q-24)",
  content: [
    { type: 'h3', text: "Practice Drill: Identifying an Argument Part (PT-117-S-2-Q-24)" },
    { type: 'paragraph', text: "This drill tackles a harder question. The complexity here lies in the multi-layered structure of the argument, which involves an author attacking a group of people who are attacking a third party." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },
    { type: 'hr' },
    {
      type: 'question-card',
      id: 'PT-117-S-2-Q-24',
      stimulus: "**Psychologist:** Some psychologists mistakenly argue that because dreams result from electrical discharges in the brain, they must be understood purely in terms of their physiological function. They conclude, against Freud, that dreams reveal nothing about the character of the dreamer. **But since dream content varies enormously,** then even if electrical discharges provide the terms of the physiological explanation of dreams, they cannot completely explain the phenomenon of dreaming.",
      question: "The claim that *dream content varies enormously* plays which one of the following roles in the argument?",
      options: [
      "**(A)** It is used to support the anti-Freudian conclusion that some psychologists draw concerning dreams.",
      "**(B)** It is used to support the explicitly stated conclusion that a fully satisfactory account of dreams must allow for the possibility of their revealing significant information about the dreamer.",
      "**(C)** It is used to suggest that neither Freud’s theory nor the theory of anti-Freudian psychologists can completely explain the phenomenon of dreaming.",
      "**(D)** It is used to illustrate the difficulty of providing a complete explanation of the phenomenon of dreaming.",
      "**(E)** It is used to undermine a claim that some psychologists use to argue against a view of Freud’s."
    ]
    },
    
    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },
    { type: 'h3', text: "Analysis & Explanation" },
    { type: 'paragraph', text: "*(Scroll down only after attempting the question)*" },
    { type: 'hr' },
    
    { type: 'h3', text: "1. Find the Target" },
    { type: 'paragraph', text: "The target is the phrase in the final sentence: *\"dream content varies enormously.\"*" },
    
    { type: 'h3', text: "2. Break Down the Content Line-by-Line" },
    { type: 'paragraph', text: "This argument has three distinct \"characters\": The Author (Psychologist), The \"Mistaken\" Psychologists (Anti-Freudians), and Freud." },
    
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      {
        title: "\"Some psychologists mistakenly argue...\"",
        text: "The Opposing Viewpoint. These psychologists believe dreams are *only* biology (electricity)."
      },
      {
        title: "\"They conclude, against Freud...\"",
        text: "The implication of the Opposing View. They use their view to attack Freud."
      },
      {
        title: "\"But since dream content varies enormously...\" (Target)",
        text: "The Author introduces a new fact. The word **\"since\"** indicates this is a premise."
      },
      {
        title: "\"...then even if electrical discharges... they cannot completely explain...\"",
        text: "The Author's Main Conclusion. Because content varies so much (Target), electricity (which is simple/constant) can't explain everything. This effectively rejects the Opposing View."
      }
    ]},

    { type: 'h3', text: "3. Map the Argument's Logical Structure" },
    { type: 'paragraph', text: "Let's trace the relationships:" },
    { type: 'list', ordered: true, items: [
      "**Opposing View:** \"dreams result from electrical discharges...\" → Therefore, \"dreams reveal nothing about the character of the dreamer.\" (This is their attack on Freud).",
      "**Target Statement (Premise):** \"dream content varies enormously.\"",
      "**Main Conclusion:** The Opposing View's premise is insufficient, as \"they cannot completely explain the phenomenon of dreaming.\""
    ]},
    { type: 'paragraph', text: "The Target Statement is evidence used by the Author to prove that the Opposing Psychologists are wrong." },
    
    { type: 'h3', text: "4. Pinpoint Role & Predict" },
    { type: 'paragraph', text: "The target statement is a premise. Its specific job is to support the Author's conclusion, which is a rejection of the \"Mistaken\" Psychologists' theory." },
    { type: 'callout', title: "Prediction", variant: "tip", text: "Therefore, our prediction is: **The target is a premise used to undermine the theory of the anti-Freudian psychologists.**" },
    
    { type: 'h3', text: "5. Evaluate Answer Choices" },
    { type: 'paragraph', text: "This is where the Abstract Referencing difficulty kicks in. We need to match our clear prediction to these complex descriptions." },
    
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      {
        title: "(A) It is used to support the anti-Freudian conclusion that some psychologists draw concerning dreams.",
        text: "The Author is *attacking* the anti-Freudians, not supporting them. The target statement is used to show their theory is insufficient.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(B) It is used to support the explicitly stated conclusion that a fully satisfactory account of dreams must allow for the possibility of their revealing significant information about the dreamer.",
        text: "The stimulus never explicitly states this positive conclusion. The conclusion is negative: \"they cannot completely explain the phenomenon of dreaming.\" We cannot infer a positive conclusion that isn't written.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(C) It is used to suggest that neither Freud’s theory nor the theory of anti-Freudian psychologists can completely explain the phenomenon of dreaming.",
        text: "The target is used to attack the *anti-Freudian* psychologists. It is not used to attack Freud. The author actually seems to be defending Freud (or at least defending the *possibility* that Freud is right) against the attack.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(D) It is used to illustrate the difficulty of providing a complete explanation of the phenomenon of dreaming.",
        text: "Too vague. The author isn't just saying \"dreaming is hard to explain.\" They are making a specific argument against a specific group. The target has a specific attack function, not a general illustrative function.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(E) It is used to undermine a claim that some psychologists use to argue against a view of Freud’s.",
        text: "This matches perfectly. \"A view of Freud's\" = dreams reveal character. \"Some psychologists use to argue against\" = Anti-Freudians. \"Undermine a claim\" = The Author attacking them. The target is the evidence for that attack.",
        badge: "Correct",
        badgeColor: "green"
      }
    ]},

    { type: 'callout', title: "Summary & Key Takeaways", variant: "summary", text: "This question is difficult because of the layers of attribution.\n\nKey takeaways:\n* **Track the Viewpoints:** You must distinguish between the Author, the \"Some Psychologists,\" and Freud.\n* **Map the Attacks:** The \"Some Psychologists\" are attacking Freud. The Author is attacking the \"Some Psychologists.\"\n* **Decode the Abstract Answers:** Choice (E) is accurate, but it requires you to substitute the specific groups from the text into the abstract placeholders." }
  ]
};
