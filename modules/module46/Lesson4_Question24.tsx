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

export const Lesson4_Question24: Lesson = {
  id: "46-4",
  title: "Question 24: Relationship",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-141-S-1-P-4)', content: passageText },
    { type: 'h3', text: "Question 24: Relationship Breakdown (PT-141-S-1-P-4-Q-24)" },
    { type: 'blockquote', text: "**Question:** Which one of the following is true of the relationship between passage A and the second paragraph of passage B?" },
    { type: 'options', items: [
      "(A) The second paragraph of passage B attempts to develop a broader version of the theory presented in passage A.",
      "(B) The second paragraph of passage B purports to state facts that bolster the argument made in passage A.",
      "(C) The argument in the second paragraph of passage B is structurally parallel to the argument in passage A, but the subject matter of the two is different.",
      "(D) Passage A presents a theory that tends to support the argument presented in the second paragraph of passage B. (Correct)",
      "(E) The second paragraph of passage B attempts to undermine the theory presented in passage A."
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "This relationship question should be resolved by matching each choice to what the passage actually establishes. Use the opening and closing claims as scope anchors, then select the option that satisfies the stem without unsupported assumptions." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "Anchor your reading in phrases such as 'There are two principles that are fundamental to a theory of...' and 'But the original wrong can most easily be righted by returning...' when checking whether a choice preserves the passage's emphasis." },
    { type: 'breakdown', labels: { title: "Option", text: "Analysis" }, items: [
      { title: "(A) The second paragraph of passage B attempts to develop a broader version of the theory presented in passage A.", text: "This is the reverse of the actual relationship. Passage A's theory is broad and general; Passage B's argument is a narrow, specific application. Additional check: trap type is too narrow, since it leaves out a required part of the passage's claim.", badge: "Incorrect", badgeColor: "red" },
      { title: "(B) The second paragraph of passage B purports to state facts that bolster the argument made in passage A.", text: "Passage A presents a theory, not an argument that requires factual bolstering. The direction of support is reversed; the theory in A gives a framework for interpreting the facts in B. Additional check: trap type is reversal/contradiction, because it flips the passage's direction or conclusion.", badge: "Incorrect", badgeColor: "red" },
      { title: "(C) The argument in the second paragraph of passage B is structurally parallel to the argument in passage A, but the subject matter of the two is different.", text: "This is incorrect on two counts. The structures are different (a three-part theoretical outline vs. a linear historical argument), and the subject matter (justice in property) is the same. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" },
      { title: "(D) Passage A presents a theory that tends to support the argument presented in the second paragraph of passage B.", text: "This accurately describes the relationship. The general \"theory\" of rectification in Passage A provides the philosophical justification for (\"tends to support\") the specific \"argument\" for land restoration in Passage B. Additional check: this is strongest because it directly satisfies the stem while preserving the passage's scope and emphasis.", badge: "Correct", badgeColor: "green" },
      { title: "(E) The second paragraph of passage B attempts to undermine the theory presented in passage A.", text: "This is the opposite of the true relationship. Passage B is a perfect illustration of Passage A's theory in action; it reinforces the theory, it does not undermine it. Additional check: trap type is reversal/contradiction, because it flips the passage's direction or conclusion.", badge: "Incorrect", badgeColor: "red" }
    ]}
  ]
};
