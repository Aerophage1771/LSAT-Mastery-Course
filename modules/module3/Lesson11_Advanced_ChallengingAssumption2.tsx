import { Lesson } from '../../types';

export const Lesson11_Advanced_ChallengingAssumption2: Lesson = {
  id: '3-11',
  title: 'Advanced Lesson 3: Challenging an Assumption (Part 2)',
  content: [
    { type: 'h2', text: 'Advanced Lesson 3: Challenging an Unstated Assumption (Part 2) (Method of Reasoning)' },
    { type: 'h3', text: 'Concept Focus: Complex Hidden Assumptions' },
    { type: 'paragraph', text: "In Part 1, we saw how a rebuttal can attack a simple unstated premise — like the assumption that \"we aren't lost.\" This lesson explores a more subtle and common variation. Sometimes, an argument's flaw isn't a single missing fact, but an unjustified *logical leap* — a gap between the evidence category and the conclusion category. The author assumes that evidence about one thing automatically applies to another, without proving the connection." },
    { type: 'paragraph', text: "These are harder to spot because the argument *sounds* reasonable on the surface. The evidence and conclusion are *related* — they just aren't as tightly connected as the author assumes." },

    { type: 'hr' },

    { type: 'h3', text: 'Types of Hidden Assumptions' },
    { type: 'paragraph', text: "Hidden assumptions come in several recurring varieties. Recognizing these patterns makes it much easier to spot the gap in an argument:" },
    { type: 'breakdown', labels: { title: 'Assumption Type', text: 'How It Works & Example' }, items: [
      { title: 'Part-to-Whole (or Whole-to-Part)', text: "Evidence is about a *category* but the conclusion is about a specific *member* of that category (or vice versa). The assumption is that the specific member is representative.\n\n**Example:** \"Leavens were used in 1200 B.C. Yeast is a leaven. Therefore, yeast was used in 1200 B.C.\" — Assumes the leaven mentioned *was* yeast, ignoring other possibilities.", badge: 'Very Common', badgeColor: 'red' },
      { title: 'Correlation-to-Causation', text: "Evidence shows two things occur together, but the conclusion claims one *causes* the other. The assumption is that no alternative explanation exists.\n\n**Example:** \"Countries with more libraries have higher literacy rates. Therefore, libraries cause literacy.\" — Assumes wealth or education policy isn't the actual cause.", badge: 'Common', badgeColor: 'red' },
      { title: 'Necessity-to-Sufficiency', text: "Evidence shows something is *necessary* for an outcome, but the conclusion treats it as *sufficient*. The assumption is that no other conditions are required.\n\n**Example:** \"Sunlight is necessary for plant growth. This plant gets sunlight. Therefore, it will grow.\" — Assumes water, soil, and nutrients aren't also needed.", badge: 'Common', badgeColor: 'red' },
      { title: 'Past-to-Future', text: "Evidence is about what *has happened*, but the conclusion is about what *will happen*. The assumption is that conditions remain the same.\n\n**Example:** \"This company has grown every year for a decade. Therefore, it will grow next year.\" — Assumes the market conditions, leadership, and competition haven't changed.", badge: 'Moderate', badgeColor: 'slate' },
      { title: 'Representative Sample', text: "Evidence is about a *sample*, but the conclusion is about a larger *population*. The assumption is that the sample is representative.\n\n**Example:** \"Every swan I've seen is white. Therefore, all swans are white.\" — Assumes the observed swans represent all swans everywhere.", badge: 'Moderate', badgeColor: 'slate' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'The Multi-Layer Assumption Analysis' },
    { type: 'paragraph', text: "On harder questions, the hidden assumption isn't immediately obvious. Use this systematic technique to uncover it:" },
    { type: 'process', title: 'Multi-Layer Analysis Technique', steps: [
      "**Isolate the Evidence Category:** What is the evidence actually *about*? Be precise — note the exact subject, scope, and timeframe.",
      "**Isolate the Conclusion Category:** What is the conclusion actually *about*? Again, note the exact subject, scope, and timeframe.",
      "**Compare the Two:** Are they the same? If the evidence is about \"leavens\" but the conclusion is about \"yeast,\" you've found the gap.",
      "**Articulate the Bridge:** State what must be true for the evidence to support the conclusion. This is the hidden assumption.",
      "**Check the Rebuttal:** Does the opposing speaker target this exact bridge? If so, you've confirmed the method is \"challenging an unstated assumption.\"",
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example: Part-to-Whole Assumption' },
    { type: 'question-card', id: 'challenging-assumption2-worked', questionType: 'Method of Reasoning', difficulty: 'medium',
      stimulus: "Yang: Yeast has long been known to be a leaven, that is, a substance used in baking to make breads rise. Since biblical evidence ties the use of leavens to events dating back to 1200 B.C., we can infer that yeast was already known to be a leaven at that time.\nCampisi: I find your inference unconvincing; several leavens other than yeast could have been known in 1200 B.C.",
      question: "Campisi counters Yang's argument by",
      options: [
        "(A) suggesting that an alternative set of evidence better supports Yang's conclusion",
        "(B) questioning the truth of a presumption underlying Yang's argument (Correct)",
        "(C) denying the truth of Yang's conclusion without considering the reason given for that conclusion",
        "(D) pointing out that the premises of Yang's argument more strongly support a contrary conclusion",
        "(E) calling into question the truth of the evidence presented in Yang's argument"
      ]
    },

    { type: 'hr' },

    { type: 'h3', text: 'Step 1: Deconstruct Using Multi-Layer Analysis' },
    { type: 'paragraph', text: "Let's apply the Multi-Layer Analysis to expose Yang's hidden assumption:" },
    { type: 'breakdown', labels: { title: 'Analysis Step', text: 'Application' }, items: [
      { title: 'Evidence Category', text: "Yang's evidence is about **\"leavens\"** (the general category). The Bible mentions that leavens were used in 1200 B.C.", badge: 'General', badgeColor: 'blue' },
      { title: 'Conclusion Category', text: "Yang's conclusion is about **\"yeast\"** (a specific member of the leaven category). He claims yeast was known in 1200 B.C.", badge: 'Specific', badgeColor: 'indigo' },
      { title: 'The Gap', text: "The evidence is about the *category* (leavens); the conclusion is about a specific *member* (yeast). This is a classic **Part-to-Whole** assumption.", badge: 'Mismatch', badgeColor: 'red' },
      { title: 'The Hidden Assumption', text: "Yang must assume that the leaven mentioned in the Bible *was* yeast — or that yeast was the only (or most likely) leaven available in 1200 B.C.", badge: 'Bridge', badgeColor: 'slate' },
      { title: "Campisi's Attack", text: "Campisi directly targets this bridge: \"several leavens other than yeast could have been known.\" By showing other leavens existed, he breaks the connection between the evidence (leavens were used) and the conclusion (yeast was known).", badge: 'Denies Bridge', badgeColor: 'green' },
    ]},

    { type: 'h3', text: 'Step 2: Characterize the Method and Prephrase' },
    { type: 'paragraph', text: "Yang assumes that when the Bible says \"leaven,\" it must be referring to yeast. Campisi points out that this isn't necessarily true because other kinds of leaven exist, which means Yang's conclusion isn't proven." },
    { type: 'callout', title: 'Prephrase', text: 'Campisi attacks the hidden assumption that "leaven" in this context must mean "yeast" — a classic challenge to an unstated presupposition.', variant: 'tip' },

    { type: 'h3', text: 'Step 3: Evaluate the Answer Choices' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Detailed Evaluation' }, items: [
      { title: "(A) suggesting that an alternative set of evidence better supports Yang's conclusion", text: "Campisi is arguing *against* Yang's conclusion, not supporting it with different evidence. This answer reverses the direction of Campisi's response entirely.", badge: 'Reversed Direction', badgeColor: 'red' },
      { title: "(B) questioning the truth of a presumption underlying Yang's argument", text: "This is a precise abstract match. The \"presumption underlying Yang's argument\" = the unstated assumption that the leaven mentioned must have been yeast. Campisi \"questions the truth\" of this by pointing out that other leavens could have been used instead.", badge: 'Correct', badgeColor: 'green' },
      { title: "(C) denying the truth of Yang's conclusion without considering the reason given...", text: "Campisi *does* consider Yang's reasoning — his entire response is a critique of *why* the evidence about \"leavens\" is insufficient to prove a conclusion about \"yeast.\" He doesn't just flatly deny the conclusion.", badge: 'Mischaracterization', badgeColor: 'red' },
      { title: "(D) pointing out that the premises... more strongly support a contrary conclusion", text: "Campisi does not argue that the evidence proves the opposite (that yeast was *not* known). He only argues that the evidence is too weak to prove Yang's specific conclusion. There's a critical difference between \"your evidence doesn't prove X\" and \"your evidence proves not-X.\"", badge: 'Too Strong', badgeColor: 'red' },
      { title: "(E) calling into question the truth of the evidence presented in Yang's argument", text: "This is the most common trap for this question type. Campisi does NOT question whether leavens were mentioned in the Bible (Yang's stated evidence). He accepts the evidence but disputes the unstated *interpretation* of that evidence. Attacking evidence ≠ attacking an assumption.", badge: 'Evidence vs. Assumption', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'default', title: 'The Critical Distinction: Evidence vs. Assumption', text: "The difference between choices (B) and (E) is the single most important distinction for this question type:\n\n**Attacking evidence** = \"Your facts are wrong.\" (Campisi would say: \"The Bible doesn't actually mention leavens.\")\n\n**Attacking an assumption** = \"Your facts are true, but your interpretation is flawed.\" (Campisi actually says: \"Yes, the Bible mentions leavens, but that doesn't mean yeast specifically.\")\n\nWhenever you see both options available, check whether the responder disputes the *truth* of the stated facts or the *logical leap* from those facts to the conclusion." },

    { type: 'callout', title: 'Key Takeaways', variant: 'summary', text: "*   **Watch for Category Shifts:** Be alert for arguments that present evidence about a broad category (leavens) and then draw a conclusion about a specific member of that category (yeast). This Part-to-Whole gap is one of the most common hidden assumptions.\n*   **Use the Multi-Layer Analysis:** Isolate the evidence category, isolate the conclusion category, compare them, and articulate the bridge. Then check if the respondent attacks that bridge.\n*   **\"Presumption\" = \"Assumption\":** The LSAT uses \"presumption,\" \"presupposition,\" and \"assumption\" interchangeably to describe a hidden premise the argument depends on.\n*   **Distinguish Attacking Evidence vs. Attacking Assumptions:** Attacking evidence = \"Your facts are wrong.\" Attacking an assumption = \"Your facts are true, but your interpretation of them is flawed.\" This distinction appears in wrong-answer traps constantly.\n*   **Multiple Assumption Types Exist:** Part-to-Whole, Correlation-to-Causation, Necessity-to-Sufficiency, Past-to-Future, and Representative Sample assumptions each create different logical gaps." },
  ]
};
