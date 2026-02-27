import { Lesson } from '../../types';

export const Lesson10_Advanced_Counterfactual: Lesson = {
  id: "1-10",
  title: "Advanced Lesson: Counterfactual Rebuttal",
  content: [
    { type: 'h2', text: 'Advanced Lesson 3: The Counterfactual Rebuttal' },

    { type: 'h3', text: 'Concept Focus: The Counterfactual Rebuttal' },
    { type: 'paragraph', text: "This strategy temporarily accepts an opponent's claim to show that it leads to an absurd or false conclusion. The logic is a form of proof by contradiction: \"If your claim were true, the world would look a certain way. But it doesn't. Therefore, your claim must be false.\"" },
    { type: 'paragraph', text: "Counterfactual rebuttals are among the most sophisticated rhetorical moves tested on the LSAT. They require you to understand not just the argument's content, but the author's *strategy*: the author is not stating what they believe — they are constructing a hypothetical world to expose a flaw in someone else's reasoning." },

    { type: 'hr' },

    { type: 'h3', text: 'The Counterfactual Pattern' },
    { type: 'paragraph', text: "Every counterfactual rebuttal follows the same logical skeleton. Master this pattern and you'll recognize it in any argument:" },
    { type: 'process', title: 'Counterfactual Structure', steps: [
      '**Identify the Opposed Claim:** The author targets a specific claim they want to disprove.',
      '**Construct a Hypothetical World:** "If that claim were true..." — The author temporarily assumes the opponent\'s claim is correct.',
      '**State a Necessary Consequence:** "...then we would expect to see X" — The author derives what *must* be true if the claim holds.',
      '**Contradict the Consequence with Reality:** "But we do not see X" / "Instead, we see Y" — The author shows the hypothetical consequence doesn\'t match the real world.',
      '**Conclude the Claim Is False:** "Therefore, the claim must be wrong" — The contradiction proves the original claim cannot be true.',
    ]},
    { type: 'callout', variant: 'tip', title: 'The "If...Would" Signal', text: "Counterfactual rebuttals are almost always signaled by conditional language: *\"If X were true, then Y would follow.\"* The word \"would\" is your strongest indicator — it places you in a hypothetical world, not the real one. When you see \"would\" combined with \"If\" in an argument that also includes \"But\" or \"Instead,\" you're looking at a counterfactual rebuttal." },

    { type: 'h3', text: 'A Simple Counterfactual Example' },
    { type: 'paragraph', text: "Before tackling the full LSAT question, consider this everyday counterfactual rebuttal:" },
    { type: 'blockquote', text: "My neighbor claims that the noise last night was caused by raccoons. But if raccoons had been in the yard, we would find overturned trash cans this morning. The trash cans are undisturbed. So it wasn't raccoons." },
    { type: 'breakdown', labels: { title: 'Statement', text: 'Role in the Counterfactual' }, items: [
      { title: '"The noise was caused by raccoons"', text: 'The **Opposed Claim** — the neighbor\'s position that the author will disprove.', badge: 'Opposed Claim', badgeColor: 'red' },
      { title: '"If raccoons had been in the yard, we would find overturned trash cans"', text: 'The **Hypothetical Consequence** — what must be true if the claim is correct.', badge: 'Hypothetical', badgeColor: 'blue' },
      { title: '"The trash cans are undisturbed"', text: 'The **Real-World Contradiction** — the actual fact that conflicts with the hypothetical.', badge: 'Contradiction', badgeColor: 'slate' },
      { title: '"So it wasn\'t raccoons"', text: 'The **Conclusion** — the opposed claim is disproven.', badge: 'Conclusion', badgeColor: 'indigo' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Counterfactual vs. Simple Rebuttal' },
    { type: 'paragraph', text: "A counterfactual rebuttal is more sophisticated than a simple rebuttal. Understanding the difference helps you identify when you're dealing with the more complex pattern:" },
    { type: 'table', headers: ['Feature', 'Simple Rebuttal', 'Counterfactual Rebuttal'], rows: [
      ['How the author argues', 'Directly provides evidence against the claim', 'Constructs a hypothetical world to expose a contradiction'],
      ['Hypothetical reasoning?', 'No — stays in the real world', 'Yes — temporarily enters an "if...then" scenario'],
      ['Type of evidence', 'Direct facts that conflict with the claim', 'A mismatch between a predicted consequence and reality'],
      ['Logical form', '"The claim says X. But evidence shows not-X."', '"If the claim were true, X would follow. But not-X. So the claim is false."'],
      ['Complexity', 'Straightforward', 'Multi-step — requires tracking the hypothetical and the real'],
      ['Example', '"You say it rained, but the ground is dry."', '"If it had rained, the ground would be wet. The ground is dry. So it didn\'t rain."'],
    ]},
    { type: 'paragraph', text: "The essential difference: a simple rebuttal says *\"Here's direct evidence you're wrong.\"* A counterfactual rebuttal says *\"Let's assume you're right and see where that leads — it leads somewhere false, so you must be wrong.\"*" },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example (PT-125-S-4-Q-15)' },

    { type: 'hr' },

    { type: 'h3', text: 'Analysis' },
    { type: 'paragraph', text: "Singletary's argument follows the counterfactual pattern precisely. Let's trace each step:" },

    { type: 'breakdown', labels: { title: 'Statement', text: 'Role in the Counterfactual' }, items: [
      { title: '"If the city wanted to become a safer place for cyclists..."', text: 'The **Hypothetical Setup** — Singletary temporarily assumes the city\'s stated motivation (actual safety) is genuine.', badge: 'Hypothetical Premise', badgeColor: 'blue' },
      { title: '"...it would not require helmets. Instead, it would construct more bicycle lanes and educate drivers"', text: 'The **Hypothetical Consequence** — if actual safety were the real goal, these are the actions the city would take. The driver education statement is part of this consequence — it\'s one of the things a genuinely safety-motivated city *would* do.', badge: 'Hypothetical Consequence', badgeColor: 'blue' },
      { title: '(Implied: But the city required helmets instead of these measures)', text: 'The **Real-World Contradiction** — the city\'s actual behavior (helmets, not lanes or education) contradicts the hypothetical prediction.', badge: 'Contradiction', badgeColor: 'slate' },
      { title: '"The city is more concerned with the appearance of safety than with actual safety"', text: 'The **Main Conclusion** — because the city\'s actions don\'t match what a truly safety-motivated city would do, Singletary concludes the city\'s real motivation is different.', badge: 'Main Conclusion', badgeColor: 'indigo' },
    ]},

    { type: 'process', title: 'The Counterfactual Flow', steps: [
      '**Hypothetical:** IF the city wanted actual safety...',
      '**Predicted Actions:** THEN it would build bike lanes and educate drivers',
      '**Reality:** BUT the city required helmets instead',
      '**Conclusion:** THEREFORE the city cares about appearance, not actual safety',
    ]},

    { type: 'paragraph', text: "The target — the statement about driver education — is part of the hypothetical consequence. It describes what a safety-motivated city *would* do. Because the city *didn't* do this, the hypothetical world is contradicted, which supports the conclusion about the city's true motivation. That makes it \"partial support for a claim about the motivation of the city\" — answer choice (B)." },

    { type: 'h3', text: 'Why Each Wrong Answer Fails' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Detailed Evaluation' }, items: [
      { title: '(A) Evidence that the city misunderstands the steps necessary for safety', text: 'Singletary\'s argument is about **motivation**, not **understanding**. Singletary doesn\'t claim the city is ignorant of what to do — Singletary claims the city knowingly chose not to do it because actual safety isn\'t the goal. (A) substitutes "misunderstanding" for "motivation," changing the argument.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) Partial support for a claim about the motivation of the city', text: 'The main conclusion is a "claim about the motivation of the city" (appearance vs. actual safety). The target is "partial support" because it is one of two examples (lanes + education) that together form the hypothetical consequence. The contradiction between these predictions and reality supports the motivation claim.', badge: 'Correct', badgeColor: 'green' },
      { title: '(C) Evidence of the total ineffectiveness of the helmet ordinance', text: 'Singletary never argues helmets are *totally ineffective*. The argument is that helmets address the *wrong priority*, not that they don\'t work at all. (C) introduces a claim Singletary never makes and uses the word "total," which overstates the argument.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) An example of further measures the city will take', text: 'The exact opposite. Driver education is explicitly what the city did *not* do and (in Singletary\'s view) *won\'t* do. (D) treats the hypothetical as a prediction about actual future actions, which misreads the counterfactual structure entirely.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) An illustration of the city\'s overriding interest in its public image', text: '(E) confuses consequence with conclusion. The target illustrates what a city interested in **actual safety** would do. It is the *absence* of this action that illustrates the city\'s interest in public image. (E) gets the relationship backward — driver education illustrates genuine safety, not image-consciousness.', badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'default', title: 'The Hypothetical Trap', text: "In counterfactual arguments, statements inside the \"If...would\" clause are NOT things the author believes will happen. They are hypothetical predictions used as a measuring stick. When a question asks about a statement inside the hypothetical, remember: the statement describes an *imagined* scenario, not the author's expectation of reality. The author's point is that reality *doesn't* match the hypothetical." },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "A **Counterfactual Rebuttal** disproves a claim by showing its necessary consequences are not met in reality. The pattern is: **If Claim X were true → Y would happen → But Y did not happen → Therefore X is false.** Look for conditional language (\"If...\") setting up the hypothetical, predictions about what \"would\" happen, and pivot words (\"Instead,\" \"But\") introducing the real-world contradiction. Statements inside the hypothetical are part of the evidence, not the conclusion." },
  ]
};
