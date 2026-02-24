import { Lesson } from '../../types';

const passageText = `“Cosmic justice,” as Sowell uses the term, refers to the perfect justice that only an omniscient being could render—rewards and punishments that are truly deserved when all relevant things are properly taken into consideration. Inherent human limitations, however, make it impossible to achieve this type of justice through human law, even though many times it seems that people are arguing for such justice and promote policies they think will render it through our human laws. But our human legal systems should not try to dispense cosmic justice since we do not know all the critical relevant facts or understand all the complex causal interrelationships involved or even know definitively what cosmic justice really is.
Whether somebody truly deserves something is a very difficult thing for us to determine. For one thing, we are not knowledgeable enough about the person and situation, or smart enough, even if we knew what all the critical factors were, to perform the complicated calculus necessary to understand how the complex interrelationships among the various variables should affect our ultimate conclusions. Deservedness necessarily focuses on a consideration of inputs. An omniscient being is capable of perfectly considering all these things, but we are not. With all the limitations that we face as mere humans, the best we can reasonably do is judge primarily based upon outputs, or consequences, rather than inputs.

Passage B
Cosmic justice is not simply a higher degree of traditional justice; it is a fundamentally different concept. Traditionally, justice or injustice is characteristic of a process. A defendant in a criminal case would be said to have received justice if the trial were conducted as it should be, under fair rules and with an impartial judge and jury. After such a trial, it could be said that “justice was done”—regardless of the outcome. Conversely, if the trial were conducted in violation of the rules and with a judge or jury showing prejudice against the defendant, this would be considered an unfair or unjust trial—even if the prosecutor failed to convince the jury to convict an innocent person. In short, traditional justice is about impartial processes rather than either results or prospects.
On the other hand, cosmic justice foolishly seeks to correct, not only biased or discriminatory acts by individuals or social institutions, but unmerited disadvantages in general, from whatever source they may arise. In criminal trials, for example, before a murderer is sentenced, the law permits his traumatic childhood to be taken into account. Seldom is there any claim that the person murdered had anything to do with that traumatic childhood. It is only from a cosmic perspective that it could have any bearing on the crime. If punishment is meant to deter crime, then mitigating that punishment in pursuit of cosmic justice presumably reduces that deterrence and allows more crime to take place at the expense of innocent people.`;

export const Lesson4_Question22: Lesson = {
  id: "43-4",
  title: "Question 22: Relationship",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-128-S-4-P-4)', content: passageText },
    { type: 'h3', text: "Question 22: Relationship Breakdown (PT-128-S-4-P-4-Q-22)" },
    { type: 'blockquote', text: "**Question:** Passage A differs from passage B in that passage A is more" },
    { type: 'options', items: [
      "(A) abstract (Correct)",
      "(B) inflammatory",
      "(C) technical",
      "(D) narrative",
      "(E) adversarial"
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "Concept focus: relationship questions ask for a distinguishing property, not just any true description. Start by identifying each passage's rhetorical mode. Passage A stays at a high conceptual level (omniscience, deservedness, inputs vs outputs). Passage B grounds its argument in concrete legal scenarios (fair trial, unfair trial, sentencing example). That makes A more abstract than B." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "Compare evidence texture: A leans on conceptual vocabulary and general claims; B uses worked examples from criminal procedure and practical consequences. When the stem says \"differs,\" eliminate choices that describe both passages, even if those descriptions are true." },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: "(A) abstract", text: "This is the best fit for the difference the stem asks for. A argues mostly through conceptual framing, while B repeatedly drops into concrete courtroom examples and policy effects.", badge: "Correct", badgeColor: "green" },
      { title: "(B) inflammatory", text: "If anything, B has the sharper loaded wording (for example, \"foolishly\" and the warning about innocent people). A is comparatively detached, so this cannot describe how A differs from B.", badge: "Incorrect", badgeColor: "red" },
      { title: "(C) technical", text: "This does not cleanly separate the passages. Neither is highly technical in a jargon-heavy sense, and B is at least as procedural as A because of its trial-focused detail.", badge: "Incorrect", badgeColor: "red" },
      { title: "(D) narrative", text: "A narrative passage would tell events in story sequence. Both passages are argumentative and expository, so this is not a valid difference.", badge: "Incorrect", badgeColor: "red" },
      { title: "(E) adversarial", text: "Both passages challenge cosmic justice, so adversarial stance is shared rather than distinguishing. The stem requires a trait that is stronger in A than in B.", badge: "Incorrect", badgeColor: "red" }
    ]}
  ]
};
