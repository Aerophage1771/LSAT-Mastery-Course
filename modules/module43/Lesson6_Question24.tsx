import { Lesson } from '../../types';

const passageText = `“Cosmic justice,” as Sowell uses the term, refers to the perfect justice that only an omniscient being could render—rewards and punishments that are truly deserved when all relevant things are properly taken into consideration. Inherent human limitations, however, make it impossible to achieve this type of justice through human law, even though many times it seems that people are arguing for such justice and promote policies they think will render it through our human laws. But our human legal systems should not try to dispense cosmic justice since we do not know all the critical relevant facts or understand all the complex causal interrelationships involved or even know definitively what cosmic justice really is.
Whether somebody truly deserves something is a very difficult thing for us to determine. For one thing, we are not knowledgeable enough about the person and situation, or smart enough, even if we knew what all the critical factors were, to perform the complicated calculus necessary to understand how the complex interrelationships among the various variables should affect our ultimate conclusions. Deservedness necessarily focuses on a consideration of inputs. An omniscient being is capable of perfectly considering all these things, but we are not. With all the limitations that we face as mere humans, the best we can reasonably do is judge primarily based upon outputs, or consequences, rather than inputs.

Passage B
Cosmic justice is not simply a higher degree of traditional justice; it is a fundamentally different concept. Traditionally, justice or injustice is characteristic of a process. A defendant in a criminal case would be said to have received justice if the trial were conducted as it should be, under fair rules and with an impartial judge and jury. After such a trial, it could be said that “justice was done”—regardless of the outcome. Conversely, if the trial were conducted in violation of the rules and with a judge or jury showing prejudice against the defendant, this would be considered an unfair or unjust trial—even if the prosecutor failed to convince the jury to convict an innocent person. In short, traditional justice is about impartial processes rather than either results or prospects.
On the other hand, cosmic justice foolishly seeks to correct, not only biased or discriminatory acts by individuals or social institutions, but unmerited disadvantages in general, from whatever source they may arise. In criminal trials, for example, before a murderer is sentenced, the law permits his traumatic childhood to be taken into account. Seldom is there any claim that the person murdered had anything to do with that traumatic childhood. It is only from a cosmic perspective that it could have any bearing on the crime. If punishment is meant to deter crime, then mitigating that punishment in pursuit of cosmic justice presumably reduces that deterrence and allows more crime to take place at the expense of innocent people.`;

export const Lesson6_Question24: Lesson = {
  id: "43-6",
  title: "Question 24: Phrase Meaning",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-128-S-4-P-4)', content: passageText },
    { type: 'h3', text: "Question 24: Phrase Meaning Breakdown (PT-128-S-4-P-4-Q-24)" },
    { type: 'blockquote', text: "**Question:** In passage B, which one of the following is an example of “inputs” as that term is used in the second paragraph of passage A?" },
    { type: 'options', items: [
      "(A) fair rules (middle of the first paragraph of passage B)",
      "(B) unjust trial (near the end of the first paragraph of passage B)",
      "(C) impartial processes (end of the first paragraph of passage B)",
      "(D) traumatic childhood (middle of the final paragraph of passage B) (Correct)",
      "(E) innocent people (end of the final paragraph of passage B)"
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "Concept focus: this is a transfer-definition question. Passage A defines \"inputs\" as background variables that shape deservedness calculations, while \"outputs\" are observable consequences or outcomes. Your task is to import that definition into Passage B and find the option that names a background condition of the defendant rather than a process feature or downstream result." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "In A, the key contrast is \"judge based upon outputs ... rather than inputs.\" In B, the phrase \"traumatic childhood\" is introduced as a factor considered before sentencing. That is a classic personal-history input, unlike \"fair rules\" or \"impartial process,\" which describe how the system operates." },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: "(A) fair rules", text: "\"Fair rules\" describes the procedural setup of the trial. That is process design, not a personal background variable about the accused person.", badge: "Incorrect", badgeColor: "red" },
      { title: "(B) unjust trial", text: "This labels process quality (whether the trial was run properly). It is not an input factor from the defendant's history.", badge: "Incorrect", badgeColor: "red" },
      { title: "(C) impartial processes", text: "This is another process term from B's traditional-justice framework. It tells you how judgment is conducted, not what personal causal factors fed into the defendant's conduct.", badge: "Incorrect", badgeColor: "red" },
      { title: "(D) traumatic childhood", text: "This is the best match for \"inputs.\" It is a background condition tied to the defendant's life history and is exactly the kind of variable cosmic-justice reasoning tries to weigh before punishment.", badge: "Correct", badgeColor: "green" },
      { title: "(E) innocent people", text: "In B, innocent people are affected by the consequences of weakened deterrence. That is an outcome-side consequence, not an input variable in the defendant's deservedness calculus.", badge: "Incorrect", badgeColor: "red" }
    ]}
  ]
};
