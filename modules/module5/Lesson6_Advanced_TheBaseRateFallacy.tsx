import { Lesson } from '../../types';

export const Lesson6_Advanced_TheBaseRateFallacy: Lesson = {
  id: "5-6",
  title: "Advanced: The Base Rate Fallacy (PT-104-S-1-Q-23)",
  content: [
    { type: 'h3', text: "Practice Drill: The Base Rate Fallacy (PT-104-S-1-Q-23)" },
    { type: 'paragraph', text: "This drill introduces one of the most common and difficult flaws on the LSAT: the **Base Rate Fallacy**. This is a sophisticated error of statistical reasoning where an argument uses a compelling-sounding percentage about one group to draw a conclusion about a completely different group, ignoring the relative sizes (or \"base rates\") of the groups involved." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },
    { type: 'hr' },
    { type: 'h4', text: "The Stimulus" },
    { type: 'blockquote', text: "Research indicates that 90 percent of extreme insomniacs consume large amounts of coffee. Since Tom drinks a lot of coffee, it is quite likely that he is an extreme insomniac." },
    { type: 'h4', text: "The Question" },
    { type: 'paragraph', text: "Which one of the following most accurately describes a flaw in the argument’s reasoning?" },
    { type: 'options', items: [
      "**(A)** It fails to acknowledge the possibility that Tom is among the 10 percent of people who drink large amounts of coffee who are not extreme insomniacs.",
      "**(B)** It fails to consider the possible contribution to extreme insomnia of other causes of insomnia besides coffee.",
      "**(C)** It relies on evidence that does not indicate the frequency of extreme insomnia among people who drink large amounts of coffee.",
      "**(D)** It draws an inference about one specific individual from evidence that describes only the characteristics of a class of individuals.",
      "**(E)** It presumes without warrant that drinking coffee always causes insomnia."
    ]},
    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },
    { type: 'h3', text: "Analysis & Explanation" },
    { type: 'paragraph', text: "*(Scroll down only after attempting the question)*" },
    { type: 'hr' },
    { type: 'h3', text: "1. Deconstruct the Argument" },
    { type: 'breakdown', labels: { title: 'Component', text: 'Analysis' }, items: [
      { title: "Premise", text: "90% of the group \"Extreme Insomniacs\" have the trait \"consume large amounts of coffee.\"", badge: "Fact", badgeColor: "indigo" },
      { title: "Evidence", text: "Tom has the trait \"consumes large amounts of coffee.\"", badge: "Evidence", badgeColor: "indigo" },
      { title: "Conclusion", text: "Tom is \"quite likely\" to be in the group \"Extreme Insomniacs.\"", badge: "Conclusion", badgeColor: "indigo" }
    ]},
    { type: 'h3', text: "2. Find the Logical Gap" },
    { type: 'paragraph', text: "The author makes a classic statistical reversal. The evidence is about the coffee-drinking habits *of insomniacs*. The conclusion is about the likelihood that a *coffee drinker* is an insomniac. These are two entirely different probabilities." },
    { type: 'h3', text: "3. Consult Your Mental Flaw Checklist" },
    { type: 'list', items: [
      "**Causation?** The argument is about correlation, not causation. So (E) is likely incorrect.",
      "**Conditional Logic?** This is a statistical version of a **Mistaken Reversal**.",
      "**Sampling/Generalization?** Yes, this is the core of the issue. The evidence is from the \"insomniac\" population, but the conclusion is about the \"coffee drinker\" population."
    ]},
    { type: 'h3', text: "4. Formulate an Abstract Prediction" },
    { type: 'paragraph', text: "The argument uses a statistic about one group (insomniacs) to draw a conclusion about a member of a different group (coffee drinkers) without providing the necessary statistic for that second group." },
    { type: 'h3', text: "5. Evaluate the Answer Choices" },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: "(A) It fails to acknowledge the possibility that Tom is among the 10 percent...", text: "This misreads the statistic. The premise says 10% of *insomniacs* don't drink coffee, not that 10% of *coffee drinkers* aren't insomniacs.", badge: "Incorrect", badgeColor: "red" },
      { title: "(B) It fails to consider the possible contribution... of other causes...", text: "The argument is not trying to determine the cause of insomnia; it is trying to diagnose it.", badge: "Incorrect", badgeColor: "red" },
      { title: "(C) It relies on evidence that does not indicate the frequency...", text: "This describes the missing information. We need the base rate of insomnia among coffee drinkers to make this conclusion.", badge: "Correct", badgeColor: "green" },
      { title: "(D) It draws an inference about one specific individual from evidence that describes only the characteristics of a class...", text: "Moving from group to individual is not inherently flawed if the statistics support it. The flaw here is using the *wrong* group's statistics.", badge: "Incorrect", badgeColor: "red" },
      { title: "(E) It presumes without warrant that drinking coffee always causes insomnia.", text: "The conclusion is about probability (\"quite likely\"), not certainty, and about correlation, not causation.", badge: "Incorrect", badgeColor: "red" }
    ]},
    { type: 'callout', title: "Summary & Key Takeaways", variant: "summary", text: "This question showcases the **Base Rate Fallacy**.\n\n**Key Takeaway:** Whenever you see a percentage or statistic in a Flaw question, immediately ask yourself: **\"A percentage *of which group*?\"** The LSAT loves to provide a statistic about one population and then draw a conclusion about a different one." }
  ]
};
