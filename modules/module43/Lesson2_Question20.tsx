import { Lesson } from '../../types';

const passageText = `“Cosmic justice,” as Sowell uses the term, refers to the perfect justice that only an omniscient being could render—rewards and punishments that are truly deserved when all relevant things are properly taken into consideration. Inherent human limitations, however, make it impossible to achieve this type of justice through human law, even though many times it seems that people are arguing for such justice and promote policies they think will render it through our human laws. But our human legal systems should not try to dispense cosmic justice since we do not know all the critical relevant facts or understand all the complex causal interrelationships involved or even know definitively what cosmic justice really is.
Whether somebody truly deserves something is a very difficult thing for us to determine. For one thing, we are not knowledgeable enough about the person and situation, or smart enough, even if we knew what all the critical factors were, to perform the complicated calculus necessary to understand how the complex interrelationships among the various variables should affect our ultimate conclusions. Deservedness necessarily focuses on a consideration of inputs. An omniscient being is capable of perfectly considering all these things, but we are not. With all the limitations that we face as mere humans, the best we can reasonably do is judge primarily based upon outputs, or consequences, rather than inputs.

Passage B
Cosmic justice is not simply a higher degree of traditional justice; it is a fundamentally different concept. Traditionally, justice or injustice is characteristic of a process. A defendant in a criminal case would be said to have received justice if the trial were conducted as it should be, under fair rules and with an impartial judge and jury. After such a trial, it could be said that “justice was done”—regardless of the outcome. Conversely, if the trial were conducted in violation of the rules and with a judge or jury showing prejudice against the defendant, this would be considered an unfair or unjust trial—even if the prosecutor failed to convince the jury to convict an innocent person. In short, traditional justice is about impartial processes rather than either results or prospects.
On the other hand, cosmic justice foolishly seeks to correct, not only biased or discriminatory acts by individuals or social institutions, but unmerited disadvantages in general, from whatever source they may arise. In criminal trials, for example, before a murderer is sentenced, the law permits his traumatic childhood to be taken into account. Seldom is there any claim that the person murdered had anything to do with that traumatic childhood. It is only from a cosmic perspective that it could have any bearing on the crime. If punishment is meant to deter crime, then mitigating that punishment in pursuit of cosmic justice presumably reduces that deterrence and allows more crime to take place at the expense of innocent people.`;

export const Lesson2_Question20: Lesson = {
  id: "43-2",
  title: "Question 20: Title",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-128-S-4-P-4)', content: passageText },
    { type: 'h3', text: "Question 20: Title Breakdown (PT-128-S-4-P-4-Q-20)" },
    { type: 'blockquote', text: "**Question:** Which one of the following pairs of titles would be most appropriate for passage A and passage B, respectively?" },
    { type: 'options', items: [
      "(A) “Cosmic Justice Meets Human Limitations”\n“Fairness as Process versus Cosmic Fairness” (Correct)",
      "(B) “Sowell’s Theory of Justice”\n“The Key to Deterrence”",
      "(C) “Just Deserts”\n“Fair and Unfair Disadvantages”",
      "(D) “A Critique of Sowell”\n“Traditional Justice Writ Large”",
      "(E) “The Impossibility of Achieving Cosmic Justice”\n“Fair Trials versus Justice as Impartial Process”"
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "Concept focus: title questions test whether you can compress each passage to its central job. In a paired-title question, each title has to fit its own passage and the two titles together should preserve the main contrast between the passages. Passage A argues that cosmic justice collides with human limits. Passage B contrasts process-based traditional justice with outcome-driven cosmic justice and then criticizes the cosmic model." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "Use three anchors: A says cosmic justice is impossible for human law because we cannot know enough; B says traditional justice is about fair process; B then says cosmic justice seeks to correct unmerited disadvantages and can undermine deterrence. The best title pair must capture both A's impossibility claim and B's process-vs-cosmic contrast." },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: "(A) “Cosmic Justice Meets Human Limitations” / “Fairness as Process versus Cosmic Fairness”", text: "Both titles match the passage-level roles. The first captures A's core claim that cosmic justice runs into human epistemic limits. The second captures B's central contrast: traditional justice is process-based, while cosmic justice asks for a different kind of fairness.", badge: "Correct", badgeColor: "green" },
      { title: "(B) “Sowell’s Theory of Justice” / “The Key to Deterrence”", text: "The first title is too broad and biographical in focus; Passage A is not a survey of Sowell's whole theory. The second overweights one late consequence in Passage B (deterrence) and misses B's main framework contrast between traditional and cosmic justice.", badge: "Incorrect", badgeColor: "red" },
      { title: "(C) “Just Deserts” / “Fair and Unfair Disadvantages”", text: "For A, this misleads because A argues humans cannot calculate true deservedness under cosmic standards. For B, the wording is too loose and drops the defining contrast between process-justice and cosmic justice.", badge: "Incorrect", badgeColor: "red" },
      { title: "(D) “A Critique of Sowell” / “Traditional Justice Writ Large”", text: "A is not a critique of Sowell; it adopts his term and extends the argument about feasibility. B is explicitly the opposite of \"writ large\": it says cosmic justice is fundamentally different from traditional justice, not merely a bigger version.", badge: "Incorrect", badgeColor: "red" },
      { title: "(E) “The Impossibility of Achieving Cosmic Justice” / “Fair Trials versus Justice as Impartial Process”", text: "The first title fits A well, which makes this tempting. The failure is in B: fair trials are presented as an example of impartial-process justice, not as a rival to it, and the title also loses B's central process-vs-cosmic framing.", badge: "Incorrect", badgeColor: "red" }
    ]}
  ]
};
