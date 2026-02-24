import { Lesson } from '../../types';

const passageText = `In many Western societies, modern bankruptcy laws have undergone a shift away from a focus on punishment and toward a focus on bankruptcy as a remedy for individuals and corporations in financial trouble—and, perhaps unexpectedly, for their creditors. This shift has coincided with an ever-increasing reliance on declarations of bankruptcy by individuals and corporations with excessive debt, a trend that has drawn widespread criticism. However, any measure seeking to make bankruptcy protection less available would run the risk of preventing continued economic activity of financially troubled individuals and institutions. It is for this reason that the temptation to return to a focus on punishment of individuals or corporations that become insolvent must be resisted. Modern bankruptcy laws, in serving the needs of an interdependent society, serve the varied interests of the greatest number of citizens.

The harsh punishment for insolvency in centuries past included imprisonment of individuals and dissolution of enterprises, and reflected societies’ beliefs that the accumulation of excessive debt resulted either from debtors’ unwillingness to meet obligations or from their negligence. Insolvent debtors were thought to be breaking sacrosanct social contracts; placing debtors in prison was considered necessary in order to remove from society those who would violate such contracts and thereby defraud creditors. But creditors derive little benefit from imprisoned debtors unable to repay even a portion of their debt. And if the entity to be punished is a large enterprise, for example, an auto manufacturer, its dissolution would cause significant unemployment and the disruption of much-needed services.

Modern bankruptcy law has attempted to address the shortcomings of the punitive approach. Two beliefs underlie this shift: that the public good ought to be paramount in considering the financial insolvency of individuals and corporations; and that the public good is better served by allowing debt-heavy corporations to continue to operate, and indebted individuals to continue to earn wages, than by disabling insolvent economic entities. The mechanism for executing these goals is usually a court-directed reorganization of debtors’ obligations to creditors. Such reorganizations typically comprise debt relief and plans for court-directed transfers of certain assets from debtor to creditor. Certain strictures connected to bankruptcy—such as the fact that bankruptcies become matters of public record and are reported to credit bureaus for a number of years—may still serve a punitive function, but not by denying absolution of debts or financial reorganization. Through these mechanisms, today’s bankruptcy laws are designed primarily to assure continued engagement in productive economic activity, with the ultimate goal of restoring businesses and individuals to a degree of economic health and providing creditors with the best hope of collecting.`;

export const Lesson4_Question8: Lesson = {
  id: "40-4",
  title: "Question 8: Author Attitude",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-128-S-1-P-2)', content: passageText },
    { type: 'h3', text: "Question 8: Author Attitude Breakdown (PT-128-S-1-P-2-Q-8)" },
    { type: 'blockquote', text: "**Question:** The author’s attitude toward the evolution of bankruptcy law can most accurately be described as" },
    { type: 'options', items: [
      "(A) approval of changes that have been made to inefficient laws (Correct)",
      "(B) confidence that further changes to today’s laws will be unnecessary",
      "(C) neutrality toward laws that, while helpful to many, remain open to abuse",
      "(D) skepticism regarding the possibility of solutions to the problem of insolvency",
      "(E) concern that inefficient laws may have been replaced by legislation too lenient to debtors"
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "The author takes a clearly favorable stance toward the modern shift away from punishment. The passage frames punitive bankruptcy regimes as socially and economically counterproductive, then defends modern reorganization as better for debtors, creditors, and the public good. So the credited answer should express approval of reforms that replaced an inferior system, not neutrality, skepticism, or fear of over-leniency." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "Tone is explicit: the \"temptation to return to a focus on punishment... must be resisted.\" The close is also affirmative: modern laws are \"designed primarily to assure continued engagement in productive economic activity.\""},
    { 
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        { title: "(A) approval of changes that have been made to inefficient laws", text: "This aligns perfectly with the analysis. The author clearly shows \"approval\" of the modern system. The passage dedicates significant space to explaining why the old laws were \"inefficient\"—they failed to benefit creditors and harmed society. This choice accurately describes both the author's positive stance and their justification for it.", badge: "Correct", badgeColor: "green" },
        { title: "(B) confidence that further changes to today’s laws will be unnecessary", text: "The passage does not support this. The author defends the current system in comparison to the past but makes no claims about its perfection or the impossibility of future improvements. This is an overstatement.", badge: "Incorrect", badgeColor: "red" },
        { title: "(C) neutrality toward laws that, while helpful to many, remain open to abuse", text: "The author's tone is the opposite of \"neutrality.\" Strong statements like \"must be resisted\" indicate a clear and decided viewpoint.", badge: "Incorrect", badgeColor: "red" },
        { title: "(D) skepticism regarding the possibility of solutions to the problem of insolvency", text: "This is contrary to the author's tone. The author presents the modern system as a successful solution and defends it with confidence, not skepticism.", badge: "Incorrect", badgeColor: "red" },
        { title: "(E) concern that inefficient laws may have been replaced by legislation too lenient to debtors", text: "This describes the viewpoint of the critics mentioned in the first paragraph, not the author. The author's entire argument is a rebuttal to this specific concern.", badge: "Incorrect", badgeColor: "red" }
      ]
    }
  ]
};
