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

export const Lesson1_PassageAnalysis: Lesson = {
  id: "46-1",
  title: "Passage Analysis",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-141-S-1-P-4)', content: passageText },
    { type: 'h3', text: "Passage Analysis: Property Justice and Rectification (PT-141-S-1-P-4)" },
    { type: 'paragraph', text: "This comparative pair links abstract political philosophy to a concrete historical dispute. Passage A builds a normative framework for just ownership, and Passage B applies that framework to Native American land claims." },
    { type: 'paragraph', text: "Approach this set by mapping principles to facts. First isolate the rule structure in Passage A, then test how Passage B's historical narrative satisfies each condition in sequence." },
    { type: 'hr' },
    { type: 'h4', text: "Passage A: Rule Structure for Property Justice" },
    { type: 'paragraph', text: "Passage A defines two baseline principles for a just world: just acquisition and just transfer. It then adds a third principle, rectification, to address historical chains that include theft or fraud." },
    { type: 'paragraph', text: "Its argumentative form is conditional. If current holdings descend from injustice, legitimacy requires historical reconstruction plus corrective action to align present ownership with what should have occurred." },
    { type: 'h4', text: "Passage B: Historical Application to Land Claims" },
    { type: 'paragraph', text: "Passage B presents a legal and historical case involving the Nonintercourse Act and Native American land transfers. The narrative is organized to establish original entitlement, subsequent illicit transfer, and resulting defect in current title." },
    { type: 'paragraph', text: "The proposed remedy is restoration where feasible, with practical compromise acknowledged as implementation detail rather than rejection of the principle." },
    { type: 'h4', text: "Synthesis: Abstract Principle Meets Concrete Injustice" },
    { type: 'paragraph', text: "The passages form a theory-to-case structure. Passage A provides the normative grammar, and Passage B supplies empirical facts that activate the rectification requirement." },
    { type: 'list', items: [
      "Original occupancy claim maps to justice in acquisition.",
      "Illicit seizure maps to violation of justice in transfer.",
      "Restoration demand maps to rectification of historical injustice."
    ]},
    { type: 'callout', title: "Summary of the Argument", variant: "summary", text: "Passage A argues that just property systems require rectification when historical transfers were unjust. Passage B applies that framework to Native American land claims, concluding that current ownership is morally defective where original entitlement was displaced through illicit transfer." }
  ]
};
