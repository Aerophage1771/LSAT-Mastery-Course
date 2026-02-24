import { Lesson } from '../../types';

const passageText = `In many Western societies, modern bankruptcy laws have undergone a shift away from a focus on punishment and toward a focus on bankruptcy as a remedy for individuals and corporations in financial trouble—and, perhaps unexpectedly, for their creditors. This shift has coincided with an ever-increasing reliance on declarations of bankruptcy by individuals and corporations with excessive debt, a trend that has drawn widespread criticism. However, any measure seeking to make bankruptcy protection less available would run the risk of preventing continued economic activity of financially troubled individuals and institutions. It is for this reason that the temptation to return to a focus on punishment of individuals or corporations that become insolvent must be resisted. Modern bankruptcy laws, in serving the needs of an interdependent society, serve the varied interests of the greatest number of citizens.

The harsh punishment for insolvency in centuries past included imprisonment of individuals and dissolution of enterprises, and reflected societies’ beliefs that the accumulation of excessive debt resulted either from debtors’ unwillingness to meet obligations or from their negligence. Insolvent debtors were thought to be breaking sacrosanct social contracts; placing debtors in prison was considered necessary in order to remove from society those who would violate such contracts and thereby defraud creditors. But creditors derive little benefit from imprisoned debtors unable to repay even a portion of their debt. And if the entity to be punished is a large enterprise, for example, an auto manufacturer, its dissolution would cause significant unemployment and the disruption of much-needed services.

Modern bankruptcy law has attempted to address the shortcomings of the punitive approach. Two beliefs underlie this shift: that the public good ought to be paramount in considering the financial insolvency of individuals and corporations; and that the public good is better served by allowing debt-heavy corporations to continue to operate, and indebted individuals to continue to earn wages, than by disabling insolvent economic entities. The mechanism for executing these goals is usually a court-directed reorganization of debtors’ obligations to creditors. Such reorganizations typically comprise debt relief and plans for court-directed transfers of certain assets from debtor to creditor. Certain strictures connected to bankruptcy—such as the fact that bankruptcies become matters of public record and are reported to credit bureaus for a number of years—may still serve a punitive function, but not by denying absolution of debts or financial reorganization. Through these mechanisms, today’s bankruptcy laws are designed primarily to assure continued engagement in productive economic activity, with the ultimate goal of restoring businesses and individuals to a degree of economic health and providing creditors with the best hope of collecting.`;

export const Lesson1_PassageAnalysis: Lesson = {
  id: "40-1",
  title: "Passage Analysis",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-128-S-1-P-2)', content: passageText },
    { type: 'h3', text: "Passage Analysis: Bankruptcy Law Reform (PT-128-S-1-P-2)" },
    { type: 'paragraph', text: "The passage argues that modern bankruptcy law should remain remedial rather than punitive. The author acknowledges criticism of rising bankruptcy use but maintains that restricting relief would damage broader economic functioning." },
    { type: 'paragraph', text: "Track the argument as a contrast structure: Paragraph 1 states the thesis, Paragraph 2 diagnoses the failures of the older punitive model, and Paragraph 3 explains why the modern system better serves both private and public interests." },
    { type: 'hr' },
    { type: 'h4', text: "Paragraph 1: Thesis and Policy Stakes" },
    { type: 'paragraph', text: "The opening paragraph frames a policy dispute. It identifies the historical shift away from punishment, notes public criticism, and then takes a clear position against reverting to harsher access rules." },
    { type: 'paragraph', text: "Its key claim is consequential: in an interdependent economy, bankruptcy law should preserve productive capacity rather than enforce moral condemnation." },
    { type: 'h4', text: "Paragraph 2: Why the Punitive Model Failed" },
    { type: 'paragraph', text: "The second paragraph reconstructs the older framework and exposes its weaknesses. Insolvency was treated as moral breach, leading to imprisonment of debtors and dissolution of firms." },
    { type: 'paragraph', text: "The author counters this with practical outcomes: creditors recover less when debtors are incapacitated, and society absorbs collateral damage such as unemployment and service disruption." },
    { type: 'h4', text: "Paragraph 3: Why the Remedial Model Prevails" },
    { type: 'paragraph', text: "The final paragraph explains the modern logic. It prioritizes public welfare and treats continued participation in economic life as the best path for both debtors and creditors." },
    { type: 'paragraph', text: "Court-directed reorganization, debt relief, and structured asset transfer are presented as corrective tools. Limited punitive consequences remain, but they no longer define the system's purpose." },
    { type: 'callout', title: "Summary of the Argument", variant: "summary", text: "The passage defends the modern remedial approach to bankruptcy law. It argues that the punitive model failed both creditors and society, while reorganization-based law better protects economic continuity, improves repayment prospects, and serves the public good." }
  ]
};
