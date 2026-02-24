import { Lesson } from '../../types';

const passageText = `Recent investigations into the psychology of decision making have sparked interest among scholars seeking to understand why governments sometimes take gambles that appear theoretically unjustifiable on the basis of expected costs and benefits. Researchers have demonstrated some significant discrepancies between objective measurements of possible decision outcomes and the ways in which people subjectively value such possible results. Many of these discrepancies relate to the observation that a possible outcome perceived as a loss typically motivates more strongly than the prospect of an equivalent gain. Risk-taking is thus a more common strategy for those who believe they will lose what they already possess than it is for those who wish to gain something they do not have.
Previously, the notion that rational decision makers prefer risk-avoiding choices was considered to apply generally, epitomized by the assumption of many economists that entrepreneurs and consumers will choose a risky venture over a sure thing only when the expected measurable value of the outcome is sufficiently high to compensate the decision maker for taking the risk. What is the minimum prize that would be required to make a gamble involving a 50 percent chance of losing $100 and a 50 percent chance of winning the prize acceptable? It is commonplace that the pleasure of winning a sum of money is much less intense than the pain of losing the same amount; accordingly, such a gamble would typically be accepted only when the possible gain greatly exceeds the possible loss. Research subjects do, in fact, commonly judge that a 50 percent chance to lose $100 is unacceptable unless it is combined with an equal chance to win more than $300. Nevertheless, the recent studies indicate that risk-accepting strategies are common when the alternative to a sure loss is a substantial chance of losing an even larger amount, coupled with some chance—even a small one—of losing nothing.
Such observations are quite salient to scholars of international conflict and crisis. For example, governments typically are cautious in foreign policy initiatives that entail risk, especially the risk of armed conflict. But nations also often take huge gambles to retrieve what they perceive to have been taken from them by other nations. This type of motivation, then, can lead states to take risks that far outweigh the objectively measurable value of the lost assets. For example, when Britain and Argentina entered into armed conflict in 1982 over possession of the Falkland Islands—or Malvinas, as they are called in Spanish—each viewed the islands as territory that had been taken from them by the other; thus each was willing to commit enormous resources—and risks—to recapturing them. In international affairs, it is vital that each actor in such a situation understand the other’s subjective view of what is at stake.`;

export const Lesson3_Question23: Lesson = {
  id: "56-3",
  title: "Question 23: Function",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-113-S-1-P-4)', content: passageText },
    { type: 'h3', text: "Question 23: Function Breakdown (PT-113-S-1-P-4-Q-23)" },
    { type: 'blockquote', text: "**Question:** The question in the second sentence of the second paragraph functions primarily as" },
    { type: 'options', items: [
      "(A) the introduction to a thought experiment whose results the author expects will vary widely among different people",
      "(B) a rhetorical question whose assumed answer is in conflict with the previously accepted view concerning risk-taking behavior",
      "(C) the basis for an illustration of how the previously accepted view concerning risk-taking behavior applies accurately to some types of situations (Correct)",
      "(D) a suggestion that the discrepancies between subjective and objective valuations of possible decision outcomes are more illusive than real",
      "(E) a transitional device to smooth an otherwise abrupt switch from discussion of previous theories to discussion of some previously unaccepted research findings"
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "This function question should be resolved by matching each choice to what the passage actually establishes. Use the opening and closing claims as scope anchors, then select the option that satisfies the stem without unsupported assumptions." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "Anchor your reading in phrases such as 'Recent investigations into the psychology of decision making have sparked interest...' and 'In international affairs, it is vital that each actor in such...' when checking whether a choice preserves the passage's emphasis." },
    { 
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        { title: "(A)", text: "The passage suggests the opposite. It states that subjects 'commonly judge' the gamble in a specific way, implying the results are consistent, not that they 'vary widely.' Additional check: trap type is reversal/contradiction, because it flips the passage's direction or conclusion.", badge: "Incorrect", badgeColor: "red" },
        { title: "(B)", text: "The answer to the question actually supports and clarifies the previously accepted view; it does not conflict with it. The example shows why people are risk-averse when seeking gains. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" },
        { title: "(C)", text: "This is correct. The question about the gamble and the subsequent explanation serve as an 'illustration' to show how the 'previously accepted view' works in practice for situations involving potential gains. Additional check: this is strongest because it directly satisfies the stem while preserving the passage's scope and emphasis.", badge: "Correct", badgeColor: "green" },
        { title: "(D)", text: "The entire passage is about how the differences between objective and subjective valuations are real and important. This question highlights one of those real discrepancies. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" },
        { title: "(E)", text: "The question is part of the discussion of the previous theory, not a transition away from it. The actual transition to the new research findings occurs later in the paragraph with the word 'Nevertheless.' Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" }
      ]
    }
  ]
};
