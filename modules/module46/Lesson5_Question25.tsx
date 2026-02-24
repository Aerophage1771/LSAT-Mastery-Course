import { Lesson } from '../../types';

const passageText = `There are two principles that are fundamental to a theory of justice regarding property. The principle of justice in acquisition specifies the conditions under which someone can legitimately come to own something that was previously not owned by anyone. The principle of justice in transfer specifies the conditions under which the transfer of property from one person to another is justified.
Given such principles, if the world were wholly just, the following definition would exhaustively cover the subject of justice regarding property:
1. A person who acquires property in accordance with the principle of justice in acquisition is entitled to that property.
2. A person who acquires property in accordance with the principle of justice in transfer, from someone else who is entitled to the property, is entitled to the property.
3. No one is entitled to any property except by (repeated) applications of 1 and 2.
However, not all actual situations are generated in accordance with the principles of justice in acquisition and justice in transfer. Some people steal from others or defraud them, for example. The existence of past injustice raises the issue of the rectification of injustice. If past injustice has shaped present ownership in various ways, what, if anything, ought to be done to rectify that injustice? A principle of rectification would use historical information about previous situations and injustices done in them, and information about the actual course of events that flowed from these injustices, to produce a description of the property ownership that should have resulted. Actual ownership of property must then be brought into conformity with this description.

Passage B

In 1790, the United States Congress passed the Indian Nonintercourse Act, which requires that all transfers of lands from Native Americans to others be approved by the federal government. The law has not been changed in any relevant respect, and it remains in effect today. Its purpose is clear. It was meant to guarantee security to Native Americans against fraudulent acquisition by others of the Native Americans’ land holdings. Several suits have been initiated by Native American tribes for recovery of lands held by them when the Nonintercourse Act took effect.
One natural (one might almost say obvious) way of reasoning about Native American claims to land in North America is this: Native Americans were the first human occupants of this land. Before the European invasion of North America, the land belonged to them. In the course of that invasion and its aftermath, the land was illicitly taken from them. The current owners lack a well-founded right to the land, which now lies illicitly in their hands. Ideally, the land should be restored to its rightful owners. This may be impractical; compromises might have to be made. But the original wrong can most easily be righted by returning the land to them—or by returning it wherever that is feasible.`;

export const Lesson5_Question25: Lesson = {
  id: "46-5",
  title: "Question 25: Analogy",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-141-S-1-P-4)', content: passageText },
    { type: 'h3', text: "Question 25: Analogy Breakdown (PT-141-S-1-P-4-Q-25)" },
    { type: 'blockquote', text: "**Question:** Based on what can be inferred from their titles, the relationship between which one of the following pairs of documents is most analogous to the relationship between passage A and passage B?" },
    { type: 'options', items: [
      "(A) “Card Counting for Everyone: A Can’t-Lose System for Beating the Dealer”\n“The Evils of Gambling”",
      "(B) “Mayor McConnell Is Unfit to Serve”\n“Why Mayor McConnell Should be Reelected”",
      "(C) “Pruning Fruit Trees: A Guide for the Novice”\n“Easy Recipes for Beginning Cooks”",
      "(D) “Notable Failures of the STORM Weather Forecasting Model”\n“Meteorologists’ Best Tool Yet: The STORM Forecasting Model”",
      "(E) “Fundamentals of Building Construction and Repair”\n“Engineering Report: The Repairs Needed by the Thales Building” (Correct)"
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "This analogy question should be resolved by matching each choice to what the passage actually establishes. Use the opening and closing claims as scope anchors, then select the option that satisfies the stem without unsupported assumptions." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "Anchor your reading in phrases such as 'There are two principles that are fundamental to a theory of...' and 'But the original wrong can most easily be righted by returning...' when checking whether a choice preserves the passage's emphasis." },
    { type: 'breakdown', labels: { title: "Option", text: "Analysis" }, items: [
      { title: "(A) “Card Counting for Everyone: A Can’t-Lose System for Beating the Dealer” / “The Evils of Gambling”", text: "The relationship here is one of opposition or conflicting values (a how-to guide vs. a moral condemnation). This is not the required relationship. Additional check: trap type is unsupported inference, because the passage never supplies the missing support.", badge: "Incorrect", badgeColor: "red" },
      { title: "(B) “Mayor McConnell Is Unfit to Serve” / “Why Mayor McConnell Should be Reelected”", text: "This is a direct pro/con debate on a specific topic. This is a relationship of point/counterpoint, not theory/application. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" },
      { title: "(C) “Pruning Fruit Trees: A Guide for the Novice” / “Easy Recipes for Beginning Cooks”", text: "These are two separate, parallel guides for beginners on different subjects. One is not an application of the other. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" },
      { title: "(D) “Notable Failures of the STORM Weather Forecasting Model” / “Meteorologists’ Best Tool Yet: The STORM Forecasting Model”", text: "This is another point/counterpoint relationship, arguing for and against the value of a specific tool. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" },
      { title: "(E) “Fundamentals of Building Construction and Repair” / “Engineering Report: The Repairs Needed by the Thales Building”", text: "This pair fits the analogy perfectly.\n*   The first title, \"Fundamentals of Building Construction and Repair,\" represents a **general theory**, including principles for **fixing problems (\"Repair\")**. This is analogous to Passage A.\n*   The second title, \"Engineering Report: The Repairs Needed by the Thales Building,\" represents a **specific application** of those principles to a **concrete problem (\"The Thales Building\")** that needs **fixing (\"Repairs Needed\")**. This is analogous to Passage B. Additional check: this is strongest because it directly satisfies the stem while preserving the passage's scope and emphasis.", badge: "Correct", badgeColor: "green" }
    ]}
  ]
};
