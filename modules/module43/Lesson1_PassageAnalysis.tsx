import { Lesson } from '../../types';

const passageText = `“Cosmic justice,” as Sowell uses the term, refers to the perfect justice that only an omniscient being could render—rewards and punishments that are truly deserved when all relevant things are properly taken into consideration. Inherent human limitations, however, make it impossible to achieve this type of justice through human law, even though many times it seems that people are arguing for such justice and promote policies they think will render it through our human laws. But our human legal systems should not try to dispense cosmic justice since we do not know all the critical relevant facts or understand all the complex causal interrelationships involved or even know definitively what cosmic justice really is.
Whether somebody truly deserves something is a very difficult thing for us to determine. For one thing, we are not knowledgeable enough about the person and situation, or smart enough, even if we knew what all the critical factors were, to perform the complicated calculus necessary to understand how the complex interrelationships among the various variables should affect our ultimate conclusions. Deservedness necessarily focuses on a consideration of inputs. An omniscient being is capable of perfectly considering all these things, but we are not. With all the limitations that we face as mere humans, the best we can reasonably do is judge primarily based upon outputs, or consequences, rather than inputs.

Passage B
Cosmic justice is not simply a higher degree of traditional justice; it is a fundamentally different concept. Traditionally, justice or injustice is characteristic of a process. A defendant in a criminal case would be said to have received justice if the trial were conducted as it should be, under fair rules and with an impartial judge and jury. After such a trial, it could be said that “justice was done”—regardless of the outcome. Conversely, if the trial were conducted in violation of the rules and with a judge or jury showing prejudice against the defendant, this would be considered an unfair or unjust trial—even if the prosecutor failed to convince the jury to convict an innocent person. In short, traditional justice is about impartial processes rather than either results or prospects.
On the other hand, cosmic justice foolishly seeks to correct, not only biased or discriminatory acts by individuals or social institutions, but unmerited disadvantages in general, from whatever source they may arise. In criminal trials, for example, before a murderer is sentenced, the law permits his traumatic childhood to be taken into account. Seldom is there any claim that the person murdered had anything to do with that traumatic childhood. It is only from a cosmic perspective that it could have any bearing on the crime. If punishment is meant to deter crime, then mitigating that punishment in pursuit of cosmic justice presumably reduces that deterrence and allows more crime to take place at the expense of innocent people.`;

export const Lesson1_PassageAnalysis: Lesson = {
  id: "43-1",
  title: "Passage Analysis",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-128-S-4-P-4)', content: passageText },
    { type: 'h3', text: "Passage Analysis: Cosmic Justice vs. Traditional Justice (PT-128-S-4-P-4)" },
    { type: 'paragraph', text: "This comparative set asks why two authors reject \"cosmic justice\" in legal decision-making. Both reject the project, but they do so on different grounds and with different conceptual frameworks." },
    { type: 'paragraph', text: "Use a contrast-first reading strategy. Track each passage's definition of justice, then isolate each author's core objection before comparing their reasoning in the synthesis section." },
    { type: 'hr' },
    { type: 'h4', text: "Passage A: Rejection Based on Human Limits" },
    { type: 'paragraph', text: "Passage A defines cosmic justice as perfect deservedness and then argues humans cannot deliver it. The claim rests on epistemic and cognitive limits: we cannot know all relevant facts, model all causal interactions, or fully determine deservedness itself." },
    { type: 'paragraph', text: "Its practical conclusion is a shift from inputs to outputs. Because complete desert calculations are unavailable to human institutions, legal judgment should focus on observable consequences." },
    { type: 'h4', text: "Passage B: Rejection Based on Concept and Consequences" },
    { type: 'paragraph', text: "Passage B contrasts process-based traditional justice with cosmic justice. Traditional justice evaluates fairness of procedure, while cosmic justice is portrayed as an overreach that tries to redress all unmerited disadvantage." },
    { type: 'paragraph', text: "The passage then adds a policy objection: bringing broad life-history factors into sentencing can weaken deterrence and increase social harm. The critique is therefore both conceptual and consequential." },
    { type: 'h4', text: "Synthesis: Shared Conclusion, Distinct Logic" },
    { type: 'paragraph', text: "Both passages conclude that legal systems should avoid cosmic justice, but they justify that conclusion differently. Passage A says the target is unattainable for finite knowers; Passage B says the target is misguided and damaging when operationalized in law." },
    { type: 'list', items: [
      "Passage A's emphasis: feasibility and human limitation.",
      "Passage B's emphasis: proper legal framework and downstream social cost."
    ]},
    { type: 'callout', title: "Summary of the Argument", variant: "summary", text: "Both authors reject cosmic justice, but for different reasons. Passage A rejects it as impossible for human institutions to execute, while Passage B rejects it as a category mistake that displaces process justice and produces harmful policy outcomes." }
  ]
};
