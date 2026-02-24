import { Lesson } from '../../types';

const passageText = `Recent investigations into the psychology of decision making have sparked interest among scholars seeking to understand why governments sometimes take gambles that appear theoretically unjustifiable on the basis of expected costs and benefits. Researchers have demonstrated some significant discrepancies between objective measurements of possible decision outcomes and the ways in which people subjectively value such possible results. Many of these discrepancies relate to the observation that a possible outcome perceived as a loss typically motivates more strongly than the prospect of an equivalent gain. Risk-taking is thus a more common strategy for those who believe they will lose what they already possess than it is for those who wish to gain something they do not have.
Previously, the notion that rational decision makers prefer risk-avoiding choices was considered to apply generally, epitomized by the assumption of many economists that entrepreneurs and consumers will choose a risky venture over a sure thing only when the expected measurable value of the outcome is sufficiently high to compensate the decision maker for taking the risk. What is the minimum prize that would be required to make a gamble involving a 50 percent chance of losing $100 and a 50 percent chance of winning the prize acceptable? It is commonplace that the pleasure of winning a sum of money is much less intense than the pain of losing the same amount; accordingly, such a gamble would typically be accepted only when the possible gain greatly exceeds the possible loss. Research subjects do, in fact., commonly judge that a 50 percent chance to lose $100 is unacceptable unless it is combined with an equal chance to win more than $300. Nevertheless, the recent studies indicate that risk-accepting strategies are common when the alternative to a sure loss is a substantial chance of losing an even larger amount, coupled with some chance—even a small one—of losing nothing.
Such observations are quite salient to scholars of international conflict and crisis. For example, governments typically are cautious in foreign policy initiatives that entail risk, especially the risk of armed conflict. But nations also often take huge gambles to retrieve what they perceive to have been taken from them by other nations. This type of motivation, then, can lead states to take risks that far outweigh the objectively measurable value of the lost assets. For example, when Britain and Argentina entered into armed conflict in 1982 over possession of the Falkland Islands—or Malvinas, as they are called in Spanish—each viewed the islands as territory that had been taken from them by the other; thus each was willing to commit enormous resources—and risks—to recapturing them. In international affairs, it is vital that each actor in such a situation understand the other’s subjective view of what is at stake.`;

export const Lesson5_Question25: Lesson = {
  id: "56-5",
  title: "Question 25: Structure",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-113-S-1-P-4)', content: passageText },
    { type: 'h3', text: "Question 25: Structure Breakdown (PT-113-S-1-P-4-Q-25)" },
    { type: 'blockquote', text: "**Question:** The passage can be most accurately described as" },
    { type: 'options', items: [
      "(A) a psychological analysis of the motives involved in certain types of collective decision making in the presence of conflict",
      "(B) a presentation of a psychological hypothesis which is then subjected to a political test case",
      "(C) a suggestion that psychologists should incorporate the findings of political scientists into their research",
      "(D) an examination of some new psychological considerations regarding risk and their application to another field of inquiry (Correct)",
      "(E) a summary of two possible avenues for understanding international crises and conflicts"
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "This structure question should be resolved by matching each choice to what the passage actually establishes. Use the opening and closing claims as scope anchors, then select the option that satisfies the stem without unsupported assumptions." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "Anchor your reading in phrases such as 'Recent investigations into the psychology of decision making have sparked interest...' and 'In international affairs, it is vital that each actor in such...' when checking whether a choice preserves the passage's emphasis." },
    { 
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        { title: "(A)", text: "This is too narrow. While the passage does analyze motives in collective decision-making, its main point is the broader act of connecting a psychological principle to international relations. Additional check: trap type is too narrow, since it leaves out a required part of the passage's claim.", badge: "Incorrect", badgeColor: "red" },
        { title: "(B)", text: "This is close but inaccurate. The Falklands War is used as an *example* to illustrate the theory, not as a formal 'test case' to prove it. A test case implies a more rigorous, scientific validation. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" },
        { title: "(C)", text: "This gets the relationship backward. The passage shows political scholars using findings from psychology, not the other way around. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" },
        { title: "(D)", text: "This accurately describes the two-part structure of the passage. It first examines new psychological ideas about risk and loss aversion and then applies these ideas to another area of study, international conflict. Additional check: this is strongest because it directly satisfies the stem while preserving the passage's scope and emphasis.", badge: "Correct", badgeColor: "green" },
        { title: "(E)", text: "The passage focuses on applying one primary psychological theory to international crises. It does not present two separate or competing ways of understanding them. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" }
      ]
    }
  ]
};
