import { Lesson } from '../../types';

const passageText = `In many Western societies, modern bankruptcy laws have undergone a shift away from a focus on punishment and toward a focus on bankruptcy as a remedy for individuals and corporations in financial trouble—and, perhaps unexpectedly, for their creditors. This shift has coincided with an ever-increasing reliance on declarations of bankruptcy by individuals and corporations with excessive debt, a trend that has drawn widespread criticism. However, any measure seeking to make bankruptcy protection less available would run the risk of preventing continued economic activity of financially troubled individuals and institutions. It is for this reason that the temptation to return to a focus on punishment of individuals or corporations that become insolvent must be resisted. Modern bankruptcy laws, in serving the needs of an interdependent society, serve the varied interests of the greatest number of citizens.

The harsh punishment for insolvency in centuries past included imprisonment of individuals and dissolution of enterprises, and reflected societies’ beliefs that the accumulation of excessive debt resulted either from debtors’ unwillingness to meet obligations or from their negligence. Insolvent debtors were thought to be breaking sacrosanct social contracts; placing debtors in prison was considered necessary in order to remove from society those who would violate such contracts and thereby defraud creditors. But creditors derive little benefit from imprisoned debtors unable to repay even a portion of their debt. And if the entity to be punished is a large enterprise, for example, an auto manufacturer, its dissolution would cause significant unemployment and the disruption of much-needed services.

Modern bankruptcy law has attempted to address the shortcomings of the punitive approach. Two beliefs underlie this shift: that the public good ought to be paramount in considering the financial insolvency of individuals and corporations; and that the public good is better served by allowing debt-heavy corporations to continue to operate, and indebted individuals to continue to earn wages, than by disabling insolvent economic entities. The mechanism for executing these goals is usually a court-directed reorganization of debtors’ obligations to creditors. Such reorganizations typically comprise debt relief and plans for court-directed transfers of certain assets from debtor to creditor. Certain strictures connected to bankruptcy—such as the fact that bankruptcies become matters of public record and are reported to credit bureaus for a number of years—may still serve a punitive function, but not by denying absolution of debts or financial reorganization. Through these mechanisms, today’s bankruptcy laws are designed primarily to assure continued engagement in productive economic activity, with the ultimate goal of restoring businesses and individuals to a degree of economic health and providing creditors with the best hope of collecting.`;

export const Lesson8_Question12: Lesson = {
  id: "40-8",
  title: "Question 12: Inference",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-128-S-1-P-2)', content: passageText },
    { type: 'h3', text: "Question 12: Inference Breakdown (PT-128-S-1-P-2-Q-12)" },
    { type: 'blockquote', text: "**Question:** The information in the passage most strongly suggests which one of the following about changes in bankruptcy laws?" },
    { type: 'options', items: [
      "(A) Bankruptcy laws always result from gradual changes in philosophy followed by sudden shifts in policy.",
      "(B) Changes in bankruptcy law were initiated by the courts and only grudgingly adopted by legislators.",
      "(C) The adjustment of bankruptcy laws away from a punitive focus was at first bitterly opposed by creditors.",
      "(D) Bankruptcy laws underwent change because the traditional approach proved inadequate and contrary to the needs of society. (Correct)",
      "(E) The shift away from a punitive approach to insolvency was part of a more general trend in society toward rehabilitation and away from retribution."
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "The passage supports a clear problem-to-solution inference: bankruptcy law changed because the punitive model failed economically and socially. The old system punished debtors but reduced creditor recovery, disrupted services, and increased unemployment; the modern system is presented as a public-good correction through reorganization and continued productive activity. So the credited answer must capture inadequacy of the traditional approach and society-level need for reform." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "The passage identifies failures of punishment: \"creditors derive little benefit\" from imprisoned debtors, and dissolution can cause \"significant unemployment\" and service disruption. It then frames modern law as addressing \"the shortcomings of the punitive approach.\""},
    { 
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        { title: "(A) Bankruptcy laws always result from gradual changes in philosophy followed by sudden shifts in policy.", text: "The word \"always\" makes this a huge generalization that is unsupported by the passage. We only have information about one specific historical shift, which is not enough to establish a universal rule.", badge: "Incorrect", badgeColor: "red" },
        { title: "(B) Changes in bankruptcy law were initiated by the courts and only grudgingly adopted by legislators.", text: "The passage gives no details about the political process of the change. We do not know who initiated the laws or whether there was legislative resistance. This is speculation.", badge: "Incorrect", badgeColor: "red" },
        { title: "(C) The adjustment of bankruptcy laws away from a punitive focus was at first bitterly opposed by creditors.", text: "The passage provides no evidence for this. In fact, the author's argument suggests that rational creditors should have supported the change, as the old system was ineffective for them.", badge: "Incorrect", badgeColor: "red" },
        { title: "(D) Bankruptcy laws underwent change because the traditional approach proved inadequate and contrary to the needs of society.", text: "This aligns perfectly with the problem-solution structure of the passage. The author clearly lays out how the traditional approach was \"inadequate\" (for creditors) and \"contrary to the needs of society\" (causing unemployment and disruption), and presents the modern law as the solution to these shortcomings.", badge: "Correct", badgeColor: "green" },
        { title: "(E) The shift away from a punitive approach to insolvency was part of a more general trend in society toward rehabilitation and away from retribution.", text: "While this might be historically true, the passage does not mention it. The author's explanation for the change is entirely self-contained within the economic and legal context of bankruptcy. The argument is based on pragmatism, not on a broader societal trend.", badge: "Incorrect", badgeColor: "red" }
      ]
    }
  ]
};
