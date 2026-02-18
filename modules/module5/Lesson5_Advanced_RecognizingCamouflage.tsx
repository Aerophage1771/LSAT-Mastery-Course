import { Lesson } from '../../types';

export const Lesson5_Advanced_RecognizingCamouflage: Lesson = {
  id: "5-5",
  title: "Advanced: Recognizing Camouflage",
  content: [
    { type: 'h3', text: "Introduction" },
    { type: 'paragraph', text: "Welcome to Lesson 5. In previous lessons, we covered the basics of identifying flaws. The arguments were often direct, and the errors were relatively clear. Harder Flaw questions, however, are a different beast. The core logical errors are the same, but they are hidden under layers of sophisticated language, complex structures, and tempting misdirection." },
    { type: 'paragraph', text: "The difficulty in these questions rarely comes from an exotic new flaw type. Instead, it comes from the **camouflage** the LSAT uses to disguise a familiar error. This lesson will teach you to see through that camouflage by recognizing the most common patterns of high-difficulty flaw arguments." },
    { type: 'hr' },
    { type: 'h3', text: "1. Mathematical & Statistical Illusions" },
    { type: 'paragraph', text: "These arguments use numbers and percentages to sound authoritative, but the logic behind the numbers is broken. The most common illusion is the **Base Rate Fallacy**." },
    { type: 'breakdown', labels: { title: 'Element', text: 'Analysis' }, items: [
      { title: "The Flaw", text: "An argument states that a high percentage of a specific, small group (Group A) has a certain trait (Trait B). It then observes someone with Trait B and concludes they are likely a member of Group A.", badge: "Concept", badgeColor: "slate" },
      { title: "The Camouflage", text: "The high percentage (e.g., \"90%\") is a powerful distractor. It makes the conclusion seem probable.", badge: "Trap", badgeColor: "red" },
      { title: "Why It's Flawed", text: "This logic is backwards. It tells us about the traits of Group A but gives us no information about the traits of the much larger population of everyone with Trait B.", badge: "Logic", badgeColor: "indigo" }
    ]},
    { type: 'h3', text: "2. The Belief/Knowledge Gap (Epistemic Flaws)" },
    { type: 'paragraph', text: "These flaws prey on the subtle difference between what is *actually true* in the world and what a person *knows*, *believes*, or *has evidence for*." },
    { type: 'breakdown', labels: { title: 'Element', text: 'Analysis' }, items: [
      { title: "The Flaw", text: "The argument treats a lack of evidence *for* a claim as if it were positive evidence *against* that claim. Or, it might confuse a past correlation with a future certainty.", badge: "Concept", badgeColor: "slate" },
      { title: "The Camouflage", text: "The reasoning often sounds practical or legally sound, focusing on what has been \"proven\" or \"demonstrated.\"", badge: "Trap", badgeColor: "red" },
      { title: "Why It's Flawed", text: "Just because there is no proof that something is true doesn't mean it's false. The author makes an unjustified leap from the state of our knowledge to the state of reality.", badge: "Logic", badgeColor: "indigo" }
    ]},
    { type: 'h3', text: "3. Complex Conditional Chains" },
    { type: 'paragraph', text: "While simple conditional flaws are straightforward, harder questions embed the error within a longer chain of \"if-then\" or \"only\" statements." },
    { type: 'breakdown', labels: { title: 'Element', text: 'Analysis' }, items: [
      { title: "The Flaw", text: "The argument correctly establishes a chain of reasoning (e.g., A requires B, and B requires C), but then draws a conclusion based on an invalid reversal or negation of that entire chain.", badge: "Concept", badgeColor: "slate" },
      { title: "The Camouflage", text: "The multiple steps in the chain require careful mental mapping. The complexity of the setup is designed to obscure the simple error in the final deduction.", badge: "Trap", badgeColor: "red" },
      { title: "Why It's Flawed", text: "The logical error is still just a basic Mistaken Reversal or Mistaken Negation, but it's harder to spot because you first have to assemble the chain correctly.", badge: "Logic", badgeColor: "indigo" }
    ]},
    { type: 'h3', text: "4. Logical Independence & Subtle Misdirection" },
    { type: 'paragraph', text: "In these arguments, the premises and the conclusion are like two ships passing in the night. The evidence seems relevant but, upon closer inspection, doesn't actually support the specific conclusion being drawn." },
    { type: 'breakdown', labels: { title: 'Element', text: 'Analysis' }, items: [
      { title: "The Flaw", text: "The author provides a valid reason for a certain claim, but then the conclusion makes a slightly different, unsupported claim.", badge: "Concept", badgeColor: "slate" },
      { title: "The Camouflage", text: "The premise is often compelling and creates a strong \"halo effect,\" making the conclusion seem more plausible than it is.", badge: "Trap", badgeColor: "red" },
      { title: "Why It's Flawed", text: "The author takes for granted that their chosen explanation or focus is the only one that matters, ignoring other relevant possibilities without justification.", badge: "Logic", badgeColor: "indigo" }
    ]},
    { type: 'h3', text: "5. Internal Contradiction (Self-Undermining Arguments)" },
    { type: 'paragraph', text: "This is a rare but very difficult flaw type. The argument's own logic, when applied consistently, makes its conclusion impossible." },
    { type: 'breakdown', labels: { title: 'Element', text: 'Analysis' }, items: [
      { title: "The Flaw", text: "The author establishes a universal rule or principle to critique one group but implicitly exempts another group from that same rule in order to draw the conclusion.", badge: "Concept", badgeColor: "slate" },
      { title: "The Camouflage", text: "The argument is often philosophical or abstract, and the contradiction is not explicit but conceptual.", badge: "Trap", badgeColor: "red" },
      { title: "Why It's Flawed", text: "The argument's reasoning is self-defeating. If the core principle is true, it must apply to everyone in the argument, which in turn invalidates the conclusion.", badge: "Logic", badgeColor: "indigo" }
    ]}
  ]
};
