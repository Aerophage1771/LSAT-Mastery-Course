import { Lesson } from '../../types';

const passageText = `“Cosmic justice,” as Sowell uses the term, refers to the perfect justice that only an omniscient being could render—rewards and punishments that are truly deserved when all relevant things are properly taken into consideration. Inherent human limitations, however, make it impossible to achieve this type of justice through human law, even though many times it seems that people are arguing for such justice and promote policies they think will render it through our human laws. But our human legal systems should not try to dispense cosmic justice since we do not know all the critical relevant facts or understand all the complex causal interrelationships involved or even know definitively what cosmic justice really is.
Whether somebody truly deserves something is a very difficult thing for us to determine. For one thing, we are not knowledgeable enough about the person and situation, or smart enough, even if we knew what all the critical factors were, to perform the complicated calculus necessary to understand how the complex interrelationships among the various variables should affect our ultimate conclusions. Deservedness necessarily focuses on a consideration of inputs. An omniscient being is capable of perfectly considering all these things, but we are not. With all the limitations that we face as mere humans, the best we can reasonably do is judge primarily based upon outputs, or consequences, rather than inputs.

Passage B
Cosmic justice is not simply a higher degree of traditional justice; it is a fundamentally different concept. Traditionally, justice or injustice is characteristic of a process. A defendant in a criminal case would be said to have received justice if the trial were conducted as it should be, under fair rules and with an impartial judge and jury. After such a trial, it could be said that “justice was done”—regardless of the outcome. Conversely, if the trial were conducted in violation of the rules and with a judge or jury showing prejudice against the defendant, this would be considered an unfair or unjust trial—even if the prosecutor failed to convince the jury to convict an innocent person. In short, traditional justice is about impartial processes rather than either results or prospects.
On the other hand, cosmic justice foolishly seeks to correct, not only biased or discriminatory acts by individuals or social institutions, but unmerited disadvantages in general, from whatever source they may arise. In criminal trials, for example, before a murderer is sentenced, the law permits his traumatic childhood to be taken into account. Seldom is there any claim that the person murdered had anything to do with that traumatic childhood. It is only from a cosmic perspective that it could have any bearing on the crime. If punishment is meant to deter crime, then mitigating that punishment in pursuit of cosmic justice presumably reduces that deterrence and allows more crime to take place at the expense of innocent people.`;

export const Lesson8_Question26: Lesson = {
  id: "43-8",
  title: "Question 26: Passage Principle",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-128-S-4-P-4)', content: passageText },
    { type: 'h3', text: "Question 26: Passage Principle Breakdown (PT-128-S-4-P-4-Q-26)" },
    { type: 'blockquote', text: "**Question:** The discussion in passage A, but not the discussion in passage B, relies on which one of the following principles?" },
    { type: 'options', items: [
      "(A) One should refrain from action when one lacks complete information.",
      "(B) Whether a punishment is fair matters less than whether it deters crime.",
      "(C) Although we should aim at perfect justice, we should recognize that we cannot attain it.",
      "(D) One should not pass judgment on an action unless one knows all of the factors that influenced it.",
      "(E) If a goal is known to be impossible, then it should not be attempted. (Correct)"
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "Concept focus: this is a comparative bridge-principle question. Passage A argues from impossibility to policy restraint: we cannot achieve cosmic justice, so legal systems should not attempt it. Passage B reaches similar practical skepticism for a different reason, emphasizing process integrity and harmful consequences. The right principle must power A's impossibility -> should-not-attempt move and not be required by B." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "A says cosmic justice is impossible for human law and then concludes law should not try to dispense it. B instead attacks cosmic justice as a fundamentally different model that can reduce deterrence and harm innocents. Distinguish impossibility logic (A) from consequence/process logic (B)." },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: "(A) One should refrain from action when one lacks complete information.", text: "This is close but too weak and too generic. A's argument is sharper: not merely incomplete information, but structural impossibility of the required cosmic calculation. The key bridge in A is about impossible goals, not ordinary uncertainty.", badge: "Incorrect", badgeColor: "red" },
      { title: "(B) Whether a punishment is fair matters less than whether it deters crime.", text: "This reflects a concern emphasized in B's final sentence, not A's central reasoning. A is built on epistemic impossibility and limits of human judgment, not a deterrence-first ranking principle.", badge: "Incorrect", badgeColor: "red" },
      { title: "(C) Although we should aim at perfect justice, we should recognize that we cannot attain it.", text: "A does not endorse aiming at cosmic justice while accepting failure. It explicitly argues legal systems should not try to dispense cosmic justice at all.", badge: "Incorrect", badgeColor: "red" },
      { title: "(D) One should not pass judgment on an action unless one knows all of the factors that influenced it.", text: "This states a maximal standard for judgment that would collapse ordinary legal judgment entirely. A instead accepts judging by outputs despite limited knowledge; it rejects attempting full cosmic calculus, not judgment itself.", badge: "Incorrect", badgeColor: "red" },
      { title: "(E) If a goal is known to be impossible, then it should not be attempted.", text: "This is the bridge A needs: cosmic justice is impossible for human law, therefore human law should not attempt to dispense it. B can oppose cosmic justice without this impossibility principle because B argues from conceptual mismatch and harmful effects.", badge: "Correct", badgeColor: "green" }
    ]}
  ]
};
