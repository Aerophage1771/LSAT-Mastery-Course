import { Lesson } from '../../types';

export const Lesson10_Advanced_ProofByContradiction: Lesson = {
  id: '3-10',
  title: 'Advanced Lesson 2: Proof by Contradiction',
  content: [
    { type: 'h2', text: 'Advanced Lesson 2: Proof by Contradiction (Method of Reasoning)' },
    { type: 'h3', text: 'Concept Focus: Proof by Contradiction' },
    { type: 'paragraph', text: "This lesson focuses on a highly formal and powerful argumentative structure known as **Proof by Contradiction** (or *reductio ad absurdum*). To prove a claim is false, you temporarily assume it's true. You then show that this assumption leads to a conclusion or consequence that is impossible, absurd, or factually incorrect. This contradiction proves that the initial assumption must have been false." },
    { type: 'paragraph', text: 'The core of this method is a hypothetical test: "If your claim were true, then X would be the case. But X is not the case. Therefore, your claim is false."' },

    { type: 'hr' },

    { type: 'h3', text: 'The Reductio Ad Absurdum Pattern' },
    { type: 'paragraph', text: "Proof by Contradiction follows a rigid four-step logical pattern. Recognizing this pattern is the single most important skill for identifying this method:" },
    { type: 'process', title: 'How Proof by Contradiction Works', steps: [
      "**Hypothetical Assumption:** The speaker temporarily assumes the opponent's claim is true. Signaled by \"Suppose,\" \"Assume,\" \"If it were true that,\" or \"Let's grant that.\"",
      "**Derive a Necessary Consequence:** From the assumption, the speaker logically derives what *must* be true if the assumption holds. \"If X were true, then Y would necessarily follow.\"",
      "**Show the Consequence Is False:** The speaker presents evidence — usually a factual observation — that the derived consequence does *not* hold in reality. \"But Y is not the case.\"",
      "**Reject the Original Assumption:** Since the assumption leads to a false consequence, the assumption itself must be false. \"Therefore, X is not true.\"",
    ]},

    { type: 'h3', text: 'A Simple Everyday Example' },
    { type: 'paragraph', text: "Before tackling an LSAT stimulus, let's see this pattern in plain language:" },
    { type: 'blockquote', text: "\"You say this restaurant is the most popular in town. But if it were the most popular restaurant, it would be hard to get a reservation. I called this morning and got a table for tonight with no wait. So it can't be the most popular restaurant.\"" },
    { type: 'breakdown', labels: { title: 'Step', text: 'Mapping' }, items: [
      { title: 'Hypothetical Assumption', text: '"If it were the most popular restaurant..." — temporarily grants the claim.', badge: 'Step 1', badgeColor: 'blue' },
      { title: 'Derived Consequence', text: '"...it would be hard to get a reservation" — what must follow if the claim is true.', badge: 'Step 2', badgeColor: 'indigo' },
      { title: 'Factual Contradiction', text: '"I called this morning and got a table with no wait" — real-world evidence that contradicts the derived consequence.', badge: 'Step 3', badgeColor: 'slate' },
      { title: 'Rejection', text: '"So it can\'t be the most popular restaurant" — the original claim is rejected.', badge: 'Step 4', badgeColor: 'green' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Proof by Contradiction vs. Direct Refutation' },
    { type: 'paragraph', text: "Students often confuse Proof by Contradiction with direct refutation. They are structurally different strategies:" },
    { type: 'table', headers: ['Feature', 'Proof by Contradiction', 'Direct Refutation'], rows: [
      ['Starting point', 'Temporarily *assumes* the opponent\'s claim is true', 'Directly attacks the opponent\'s claim or evidence'],
      ['Core logic', '"If your claim were true, then X would follow — but X is false"', '"Your evidence is wrong" or "Your evidence doesn\'t support your conclusion"'],
      ['Uses hypothetical reasoning?', 'Yes — the argument depends on a "what if" scenario', 'No — the argument stays in the real world'],
      ['Type of evidence', 'A factual observation that contradicts the *derived consequence*', 'Direct evidence against the claim or its premises'],
      ['Signal words', '"Suppose," "If it were true," "Assume," "Let\'s grant"', '"However," "But in fact," "The evidence shows"'],
      ['What is proven', 'The original claim must be false (because it leads to absurdity)', 'The original claim is unsupported or wrong'],
    ]},
    { type: 'callout', variant: 'tip', title: 'The Key Difference', text: "In Proof by Contradiction, the speaker *never directly attacks* the opponent's claim. Instead, they show that the claim *implies* something false. The falsity of the consequence does the work of disproving the claim indirectly. In direct refutation, the speaker attacks the claim head-on with counter-evidence or logical critique." },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'question-card', id: 'proof-by-contradiction-worked', questionType: 'Method of Reasoning', difficulty: 'hard',
      stimulus: "Some people have been promoting a new herbal mixture as a remedy for the common cold. The mixture contains, among other things, extracts of the plants purple coneflower and goldenseal. A cold sufferer, skeptical of the claim that the mixture is an effective cold remedy, argued, \"Suppose that the mixture were an effective cold remedy. Since most people with colds wish to recover quickly, it follows that almost everybody with a cold would be using it. Therefore, since there are many people who have colds but do not use the mixture, it is obviously not effective.\"",
      question: "Which one of the following most accurately describes the method of reasoning the cold sufferer uses to reach the conclusion of the argument?",
      options: [
        "(A) finding a claim to be false on the grounds that it would if true have consequences that are false (Correct)",
        "(B) accepting a claim on the basis of public opinion of the claim",
        "(C) showing that conditions necessary to establish the truth of a claim are met",
        "(D) basing a generalization on a representative group of instances",
        "(E) showing that a measure claimed to be effective in achieving a certain effect would actually make achieving the effect more difficult"
      ]
    },

    { type: 'hr' },

    { type: 'h3', text: 'Step 1: Deconstruct the Argument' },
    { type: 'paragraph', text: "Let's trace the four-step Proof by Contradiction pattern through the stimulus:" },
    { type: 'breakdown', labels: { title: 'Step', text: 'Mapping to the Stimulus' }, items: [
      { title: 'Step 1: Hypothetical Assumption', text: "\"**Suppose** that the mixture were an effective cold remedy.\" The speaker temporarily assumes the claim they want to disprove is true. The word \"Suppose\" is the classic signal.", badge: 'Assume True', badgeColor: 'blue' },
      { title: 'Step 2: Derived Consequence', text: "\"Since most people with colds wish to recover quickly, it follows that **almost everybody with a cold would be using it**.\" From the assumption, the speaker derives what must be true: if it works, people who want to get better would use it.", badge: 'If True, Then...', badgeColor: 'indigo' },
      { title: 'Step 3: Factual Contradiction', text: "\"There are **many people who have colds but do not use the mixture**.\" The speaker presents a real-world fact that directly contradicts the derived consequence.", badge: 'But That\'s False', badgeColor: 'red' },
      { title: 'Step 4: Rejection', text: "\"It is **obviously not effective**.\" The speaker concludes that since the consequence is false, the original assumption must be false.", badge: 'Therefore, Wrong', badgeColor: 'green' },
    ]},

    { type: 'h3', text: 'Step 2: Characterize the Method and Prephrase' },
    { type: 'paragraph', text: "The speaker disproves the claim by showing that if it were true, it would lead to a consequence that is demonstrably false in the real world. This is a textbook Proof by Contradiction." },
    { type: 'callout', title: 'Prephrase', text: 'The argument shows a claim is false by demonstrating that its logical consequences are not true — classic reductio ad absurdum.', variant: 'tip' },

    { type: 'h3', text: 'Step 3: Evaluate the Answer Choices' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Detailed Evaluation' }, items: [
      { title: '(A) finding a claim to be false on the grounds that it would if true have consequences that are false', text: "This is a perfect, if complex, description of Proof by Contradiction. \"Finding a claim to be false\" = concluding the remedy is not effective. \"On the grounds that it would if true\" = the hypothetical assumption. \"Have consequences that are false\" = the derived consequence (everyone would use it) is factually incorrect.", badge: 'Correct', badgeColor: 'green' },
      { title: '(B) accepting a claim on the basis of public opinion...', text: "The argument uses the public's *actions* (not using the mixture) as evidence that the claim is *false*, not as a basis for accepting it. This reverses the direction of the argument entirely.", badge: 'Reversed Direction', badgeColor: 'red' },
      { title: '(C) showing that conditions necessary to establish the truth of a claim are met', text: "The argument's goal is to show the claim is *false*, not to establish that it's true. This answer describes the exact opposite of what the speaker does.", badge: 'Opposite Goal', badgeColor: 'red' },
      { title: '(D) basing a generalization on a representative group of instances', text: "This describes inductive reasoning — drawing a general conclusion from specific examples. The argument is deductive and hypothetical, not inductive. No representative group is sampled.", badge: 'Wrong Method', badgeColor: 'red' },
      { title: '(E) showing that a measure claimed to be effective... would actually make achieving the effect more difficult', text: "The speaker argues the remedy is *ineffective* (does nothing), not that it is *counterproductive* (makes colds worse). \"Make achieving the effect more difficult\" would mean the remedy worsens colds — a claim the speaker never makes.", badge: 'Mischaracterization', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', title: 'Key Takeaways', variant: 'summary', text: "*   **Spot the \"Suppose\":** Arguments using Proof by Contradiction often begin with hypothetical language like \"Suppose,\" \"Assume,\" \"If it were true that,\" or \"Let's grant that.\" This is your strongest signal.\n*   **Trace the Four Steps:** Hypothetical Assumption → Derived Consequence → Factual Contradiction → Rejection. If you can map all four, you've identified the method.\n*   **Don't Confuse With Direct Refutation:** Proof by Contradiction works *indirectly* through a hypothetical. Direct refutation attacks the claim or its evidence head-on without the \"what if\" step.\n*   **Translate Abstract Answer Choices:** Difficult Method questions often use formal, abstract language. Break the answer choice down piece by piece and substitute in the actual content from the stimulus to see if it's an accurate description.\n*   **The Most Common Trap:** Answer choices that describe the argument as \"showing the measure is counterproductive\" (makes things worse) when the argument actually shows it is \"ineffective\" (doesn't work at all). Watch the distinction between \"doesn't work\" and \"backfires.\"" },
  ]
};
