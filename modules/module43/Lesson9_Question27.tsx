import { Lesson } from '../../types';

const passageText = `“Cosmic justice,” as Sowell uses the term, refers to the perfect justice that only an omniscient being could render—rewards and punishments that are truly deserved when all relevant things are properly taken into consideration. Inherent human limitations, however, make it impossible to achieve this type of justice through human law, even though many times it seems that people are arguing for such justice and promote policies they think will render it through our human laws. But our human legal systems should not try to dispense cosmic justice since we do not know all the critical relevant facts or understand all the complex causal interrelationships involved or even know definitively what cosmic justice really is.
Whether somebody truly deserves something is a very difficult thing for us to determine. For one thing, we are not knowledgeable enough about the person and situation, or smart enough, even if we knew what all the critical factors were, to perform the complicated calculus necessary to understand how the complex interrelationships among the various variables should affect our ultimate conclusions. Deservedness necessarily focuses on a consideration of inputs. An omniscient being is capable of perfectly considering all these things, but we are not. With all the limitations that we face as mere humans, the best we can reasonably do is judge primarily based upon outputs, or consequences, rather than inputs.

Passage B
Cosmic justice is not simply a higher degree of traditional justice; it is a fundamentally different concept. Traditionally, justice or injustice is characteristic of a process. A defendant in a criminal case would be said to have received justice if the trial were conducted as it should be, under fair rules and with an impartial judge and jury. After such a trial, it could be said that “justice was done”—regardless of the outcome. Conversely, if the trial were conducted in violation of the rules and with a judge or jury showing prejudice against the defendant, this would be considered an unfair or unjust trial—even if the prosecutor failed to convince the jury to convict an innocent person. In short, traditional justice is about impartial processes rather than either results or prospects.
On the other hand, cosmic justice foolishly seeks to correct, not only biased or discriminatory acts by individuals or social institutions, but unmerited disadvantages in general, from whatever source they may arise. In criminal trials, for example, before a murderer is sentenced, the law permits his traumatic childhood to be taken into account. Seldom is there any claim that the person murdered had anything to do with that traumatic childhood. It is only from a cosmic perspective that it could have any bearing on the crime. If punishment is meant to deter crime, then mitigating that punishment in pursuit of cosmic justice presumably reduces that deterrence and allows more crime to take place at the expense of innocent people.`;

export const Lesson9_Question27: Lesson = {
  id: "43-9",
  title: "Question 27: Author Viewpoint",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-128-S-4-P-4)', content: passageText },
    { type: 'h3', text: "Question 27: Author Viewpoint Breakdown (PT-128-S-4-P-4-Q-27)" },
    { type: 'blockquote', text: "**Question:** Which one of the following is a view advanced by the author of passage A with which the author of passage B would be most likely to agree?" },
    { type: 'options', items: [
      "(A) It is sometimes possible for the legal system to take unmerited disadvantages into account in rendering judgment on people and their actions.",
      "(B) Whether or not cosmic justice is an attainable ideal, human law should strive for it because doing so produces more just legal outcomes.",
      "(C) Impartial legal processes are a better means of achieving cosmic justice than are efforts to address unmerited disadvantages directly.",
      "(D) Human law should be concerned with the consequences of human actions, not with the myriad of factors that influence human actions. (Correct)",
      "(E) Human legal systems can in theory achieve cosmic justice by focusing upon factors that tend to mitigate punishment."
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "Concept focus: shared-viewpoint questions in paired passages require intersection logic. First identify what A says, then what B says, then keep only the overlap. A emphasizes judging outputs/consequences instead of hidden causal inputs. B emphasizes process justice and warns against mitigating punishment based on unmerited disadvantages. The overlap is skepticism toward input-heavy cosmic recalibration, not agreement on every reason." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "A: \"judge primarily based upon outputs, or consequences, rather than inputs.\" B: traditional justice centers on impartial process and criticizes using traumatic childhood as mitigation because of downstream harms. The best answer must capture this common direction without importing claims either passage rejects." },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: "(A) It is sometimes possible for the legal system to take unmerited disadvantages into account...", text: "This conflicts with both passages. A says humans cannot perform the required cosmic calculation, and B treats this kind of adjustment as misguided and harmful in legal practice.", badge: "Incorrect", badgeColor: "red" },
      { title: "(B) ...human law should strive for it...", text: "Both authors reject this direction. A says legal systems should not try to dispense cosmic justice, and B argues that cosmic justice is a fundamentally different and problematic legal objective.", badge: "Incorrect", badgeColor: "red" },
      { title: "(C) Impartial legal processes are a better means of achieving cosmic justice...", text: "B does not treat impartial process as a route to cosmic justice; B treats traditional process justice as a different concept altogether. So this choice misstates B and cannot be shared.", badge: "Incorrect", badgeColor: "red" },
      { title: "(D) Human law should be concerned with the consequences of human actions, not with the myriad of factors that influence human actions.", text: "This best captures the overlap. A explicitly prefers output/consequence-based judgment over input-based deservedness, and B rejects broad mitigation based on unmerited background factors while stressing practical legal consequences.", badge: "Correct", badgeColor: "green" },
      { title: "(E) Human legal systems can in theory achieve cosmic justice...", text: "A directly denies this feasibility, and B attacks the project as misguided. So this option reverses both authors' direction.", badge: "Incorrect", badgeColor: "red" }
    ]}
  ]
};
