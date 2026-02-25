import { Lesson } from '../../types';

export const Lesson12_ReferenceGuide: Lesson = {
  id: '3-12',
  title: 'Reference Guide',
  content: [
    { type: 'h2', text: 'MODULE 3: Method of Reasoning — Complete Reference' },
    { type: 'paragraph', text: "A condensed reference for every concept, method, trap, and pattern in Method of Reasoning questions. Bookmark this for review before test day." },
    { type: 'hr' },

    { type: 'h3', text: "The Goal: What's the Blueprint?" },
    { type: 'paragraph', text: "Your one and only goal is to provide an abstract description of the argument's logical structure. You are describing *how* the author argues, not *what* they argue about. The correct answer will be a generalized characterization of the logical move — like a blueprint that could describe many different arguments with different topics but the same structure." },
    { type: 'hr' },

    { type: 'h3', text: 'The 4-Step Method' },
    { type: 'process', steps: [
      "**Deconstruct the Argument:** Identify the Main Conclusion and the Premises. If it's a dialogue, focus *only* on the reasoning of the person named in the question. Map the logical flow: which sentences support which other sentences?",
      "**Characterize the Method:** In your own words, describe the logical move. How does the evidence lead to the conclusion? *e.g., \"The author uses a comparison,\" \"They rule out other options,\" \"They show the plan will backfire.\"* Be specific about the *type* of move.",
      "**Evaluate Answer Choices:** Find the choice that best matches your prephrase. The correct answer will be a generalized description of the pattern you identified. Use the Substitution Technique: replace abstract phrases with actual stimulus content.",
      "**Eliminate Traps:** Systematically check for common errors. Does the choice misdescribe the action? Is it out of scope? Is it too strong or too weak? Does every clause in a compound answer check out?",
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'All Method Types: Complete Reference' },
    { type: 'table', headers: ['Method Type', 'Frequency', 'Definition', 'Indicator Language'], rows: [
      ['**Argument by Analogy**', '~20%', 'Uses a comparison to another situation to support a conclusion or expose a flaw', '*That\'s like saying, just as, similarly, consider the case of, is analogous to*'],
      ['**Highlighting Negative Consequences**', '~15%', 'Argues against a proposal by tracing a causal chain to a harmful or self-defeating outcome', '*will lead to, results in, causes harm, backfires, defeats its own purpose, eventually*'],
      ['**Challenging an Assumption**', '~15%', 'Attacks the unstated belief (implicit premise) necessary for an argument\'s logic to work', '*presupposes, assumes without justification, overlooks the possibility, takes for granted*'],
      ['**Refutation by Counterexample**', '~12%', 'Disproves a general claim by providing a single specific case where the claim fails', '*but consider, for instance, there is a case where, not all, an exception*'],
      ['**Process of Elimination**', '~10%', 'Reaches a conclusion by ruling out all alternatives except one', '*cannot be X because, is not Y since, the only remaining possibility, by ruling out*'],
      ['**Alternative Explanation**', '~8%', 'Offers a different cause for an observed phenomenon than the one proposed', '*could also be explained by, another possibility is, an alternative cause, a third factor*'],
      ['**Proof by Contradiction**', '~8%', 'Assumes a claim is true, derives an absurd or false consequence, then rejects the claim', '*suppose, if it were true, assume for the sake of argument, but that would mean*'],
      ['**Applying a Principle**', '~7%', 'Uses a general rule or definition to evaluate a specific case', '*by definition, according to the principle, the rule states, applying this standard*'],
      ['**Restricting Scope**', '~5%', 'Narrows a broad claim by showing it only applies in certain conditions', '*only in cases where, does not apply when, is limited to, the exception is*'],
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'Method Categories at a Glance' },
    { type: 'paragraph', text: "All method types fall into three broad categories based on their strategic purpose:" },
    { type: 'breakdown', labels: { title: 'Category', text: 'Methods & Common Context' }, colWidth: 'narrow', items: [
      { title: 'Supporting Methods', text: "Methods used to *build* or *establish* a conclusion.\n\n• **Argument by Analogy** — parallel case supports the point\n• **Process of Elimination** — rules out alternatives\n• **Applying a Principle** — general rule proves specific case\n• **Proof by Contradiction** — shows the opposite leads to absurdity", badge: 'Building', badgeColor: 'green' },
      { title: 'Attacking Methods', text: "Methods used to *undermine* or *refute* an opponent's claim.\n\n• **Refutation by Counterexample** — specific case disproves rule\n• **Challenging an Assumption** — exposes hidden premise\n• **Alternative Explanation** — offers competing cause\n• **Highlighting Negative Consequences** — shows plan backfires", badge: 'Undermining', badgeColor: 'red' },
      { title: 'Qualifying Methods', text: "Methods used to *narrow* or *refine* a claim without fully supporting or attacking it.\n\n• **Restricting Scope** — limits where a rule applies\n• **Distinguishing Interpretations** — separates two meanings of a term", badge: 'Refining', badgeColor: 'slate' },
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'Common Answer Choice Patterns' },
    { type: 'paragraph', text: "Method of Reasoning answer choices use abstract, formulaic language. Here's what the most common phrases actually mean:" },
    { type: 'table', headers: ['Abstract Description in Answer Choice', 'What It Actually Means'], rows: [
      ['"presents a counterexample to a general claim"', 'Gives a specific case that disproves a rule'],
      ['"calls into question an assumption on which the argument depends"', 'Attacks a hidden/unstated premise'],
      ['"derives a consequence that undermines the position"', 'Shows the opponent\'s view leads to a bad or absurd result'],
      ['"provides an alternative explanation for the phenomenon"', 'Offers a different cause for the observed effect'],
      ['"argues by analogy"', 'Uses a comparison to a different situation'],
      ['"questions the applicability of a general principle to a particular case"', 'Argues that a rule doesn\'t apply here'],
      ['"concedes a point but denies it supports the conclusion drawn"', 'Grants the evidence but disputes what it proves'],
      ['"rejects a causal claim by showing correlation without causation"', 'Two things happening together doesn\'t mean one causes the other'],
      ['"distinguishes between two interpretations of a key term"', 'Shows a word is being used ambiguously'],
      ['"describes a process that leads to an undesirable end"', 'Traces a causal chain to a negative consequence'],
      ['"finding a claim to be false on the grounds that it would if true have consequences that are false"', 'Proof by Contradiction / reductio ad absurdum'],
      ['"questions the truth of a presumption underlying the argument"', 'Challenges an unstated assumption'],
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'Indicator Word Quick Reference' },
    { type: 'table', headers: ['Category', 'Words & Phrases'], rows: [
      ['**Conclusion**', '*therefore, thus, so, hence, consequently, it follows that, this shows that, we can conclude, clearly*'],
      ['**Premise**', '*because, since, for, after all, given that, as evidenced by, due to, on the grounds that*'],
      ['**Contrast / Pivot**', '*but, however, yet, although, while, nevertheless, despite, on the other hand, nonetheless*'],
      ['**Hypothetical**', '*suppose, assume, if it were true, let\'s grant, for the sake of argument, were it the case*'],
      ['**Concession**', '*although, while it is true, granted, admittedly, despite, even though, of course*'],
      ['**Negative Consequences**', '*will lead to, results in, causes harm, backfires, eventually, in the long run, over time*'],
      ['**Counterexample**', '*but consider, for instance, there is a case where, not all, except, an exception to this*'],
      ['**Analogy**', '*just as, similarly, is like saying, consider the parallel, in the same way, is analogous to*'],
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'Common Traps: Complete Breakdown' },
    { type: 'breakdown', labels: { title: 'Trap', text: 'How It Works & How to Avoid It' }, items: [
      { title: 'Mischaracterization', text: "The answer choice correctly identifies a component of the argument but misrepresents what the speaker *does* with it. Says \"questions a premise\" when the speaker actually \"challenges an unstated assumption.\"\n\n**Avoid it:** Focus on the *action verb* in the answer choice. Does the speaker question, reject, concede, assume, or derive? Each is a fundamentally different move.", badge: 'Very Common', badgeColor: 'red' },
      { title: 'Valid Method, but Not the One Used', text: "The answer describes a legitimate logical strategy that simply wasn't used in the stimulus. It's a real method — just not *this* method.\n\n**Avoid it:** Stick to your prephrase and confirm the stimulus *actually matches* every element described in the answer choice.", badge: 'Very Common', badgeColor: 'red' },
      { title: 'Mismatch in Logical Force', text: "The answer choice is too strong (\"proves false\") or too weak (\"merely questions\") for the argument's actual strength.\n\n**Avoid it:** Pay attention to the certainty of the author's language. Match the force precisely: \"proves,\" \"suggests,\" \"casts doubt on,\" and \"demonstrates\" are all different.", badge: 'Common', badgeColor: 'red' },
      { title: 'The Double Description', text: "The answer contains two descriptions connected by \"and\" or \"by.\" One half is accurate but the other half is wrong. Students pick it because the accurate half matches their prephrase.\n\n**Avoid it:** Verify *every clause* in the answer independently. Both halves must be true.", badge: 'Common', badgeColor: 'red' },
      { title: 'Evidence vs. Assumption Swap', text: "The answer says the speaker \"attacks the evidence\" when they actually \"attack an unstated assumption,\" or vice versa.\n\n**Avoid it:** Ask: does the speaker say the stated facts are *wrong*? Or does the speaker accept the facts but dispute the *interpretation*? The first is attacking evidence; the second is attacking an assumption.", badge: 'Common', badgeColor: 'red' },
      { title: 'Out of Scope', text: "The answer introduces an element or method that never appears in the stimulus — such as claiming the speaker uses statistics when no numbers are mentioned, or claiming a personal attack when no qualifications are discussed.\n\n**Avoid it:** If you can't point to it in the text, it's not the right answer.", badge: 'Moderate', badgeColor: 'slate' },
      { title: 'Reversed Direction', text: "The answer describes the method accurately but attributes it to the wrong speaker, or says the speaker *supports* a claim when they actually *attack* it.\n\n**Avoid it:** In dialogues, always confirm which speaker's method is being asked about. Check whether the answer describes support or attack — and match it to the speaker's actual stance.", badge: 'Moderate', badgeColor: 'slate' },
    ]},
    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Test Day Checklist', text: "Before selecting your answer on any Method of Reasoning question:\n\n**1.** Can you name the method the speaker uses in your own words?\n**2.** Have you identified the conclusion AND the premises of the relevant speaker?\n**3.** Does your chosen answer match the *type* of logical move (analogy, counterexample, assumption attack, etc.)?\n**4.** Does your chosen answer match the *logical force* (proves, suggests, casts doubt, demonstrates)?\n**5.** Have you verified *every clause* in compound answer choices?\n**6.** Have you confirmed the answer describes the correct speaker's method (not the other speaker's)?\n**7.** Can you point to specific text in the stimulus that matches every element of your chosen answer?" },
  ]
};
