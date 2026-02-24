import { Lesson } from '../../types';

const passageText = `Some critics of advertising have assumed that the creation of false needs in consumers is the principal mechanism underlying what these critics regard as its manipulative and hegemonic power. Central to this type of critique are the writings of political theorist Herbert Marcuse, who maintained that modern people succumb to oppression by believing themselves satisfied in spite of their living in an objectively unsatisfying world. This process occurs because in mass market culture the powerful psychological techniques of advertising create “needs” that are false and whose satisfaction thus contributes, not to the genuine well-being of consumers, but rather to the profit—and thereby the disproportionate power—of corporations.

Marcuse supposed that we all have certain real needs, both physical and psychological. Advertising appropriates these needs for its own purposes, forging psychological associations between them and consumer items, e.g., between sex and perfume, thereby creating a false “need” for these items. Since the quest for fulfillment is thus displaced from its true objects to consumer items, the implicit promises of advertisements are never really fulfilled and the consumer remains at some level unsatisfied.

Unfortunately, the distinction between real and false needs upon which this critique depends is extremely problematic. If Marcusians are right, we cannot, with any assurance, separate our real needs from the alleged false needs we feel as a result of the manipulation of advertisers. For, in order to do so, it would be necessary to eliminate forces of persuasion that are so prevalent in society that they have come to inform our instinctive judgments about things.

But, in fact, Marcusians make a major mistake in assuming that the majority of consumers who respond to advertising do not do so autonomously. Advertising techniques are unable to induce unwilling behavior in rational, informed adults, and regulations prohibit misinformation in advertising claims. Moreover, evidence suggests that most adults understand and recognize the techniques used and are not merely passive instruments. If there is a real need for emotional fulfillment, and if we can freely and authentically choose our means of obtaining it, then free, informed individuals may choose to obtain it through the purchase of commodities or even through the enjoyment occasionally provided by advertisements themselves. It is no doubt true that in many—perhaps even most—cases the use of an advertised product does not yield the precise sort of emotional dividend that advertisements seem to promise. This does not mean, however, that consumers do not freely and intentionally use the product as a means to another sort of fulfillment, or even that its genuine fulfillment of needs must be less than the advertisement suggests.`;

export const Lesson6_Question20: Lesson = {
  id: "45-6",
  title: "Question 20: Phrase Meaning",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-141-S-1-P-3)', content: passageText },
    { type: 'h3', text: "Question 20: Phrase Meaning Breakdown (PT-141-S-1-P-3-Q-20)" },
    { type: 'blockquote', text: "By the term “forces of persuasion\" (last sentence of the third paragraph), the author most probably refers to" },
    { type: 'options', items: [
      "(A) intentionally dishonest claims that some theorists argue are common in advertising",
      "(B) innate, instinctual drives that some theorists say are fundamental to human behavior",
      "(C) emotional pressures that some theorists claim are exerted over individuals by society as a whole",
      "(D) subtle practices of social indoctrination that some theorists say are sponsored by the state",
      "(E) manipulative influences that some theorists say go unrecognized by those affected by them (Correct)"
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "This phrase meaning question should be resolved by matching each choice to what the passage actually establishes. Use the opening and closing claims as scope anchors, then select the option that satisfies the stem without unsupported assumptions." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "Anchor your reading in phrases such as 'Some critics of advertising have assumed that the creation of false...' and 'This does not mean, however, that consumers do not freely and...' when checking whether a choice preserves the passage's emphasis." },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: "(A) intentionally dishonest claims that some theorists argue are common in advertising", text: "This is too narrow. The manipulation described by Marcuse is more subtle and psychological than simple dishonest claims. The author even notes later that regulations prohibit outright misinformation. Additional check: trap type is too narrow, since it leaves out a required part of the passage's claim.", badge: "Incorrect", badgeColor: "red" },
      { title: "(B) innate, instinctual drives that some theorists say are fundamental to human behavior", text: "This confuses the cause with the effect. The \"forces of persuasion\" are what *act upon* our instincts; they are not the instincts themselves. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" },
      { title: "(C) emotional pressures that some theorists claim are exerted over individuals by society as a whole", text: "This is too vague. The passage is specific that these forces come from corporate advertising, not \"society as a whole.\" Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" },
      { title: "(D) subtle practices of social indoctrination that some theorists say are sponsored by the state", text: "The passage makes no mention of the \"state\" or government. The focus is on corporate power. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" },
      { title: "(E) manipulative influences that some theorists say go unrecognized by those affected by them", text: "This choice is a perfect fit. It correctly identifies the influences as \"manipulative\" and captures the crucial idea that they operate at a level that \"goes unrecognized,\" which aligns with the text's reference to \"instinctive judgments.\" Additional check: this is strongest because it directly satisfies the stem while preserving the passage's scope and emphasis.", badge: "Correct", badgeColor: "green" }
    ]}
  ]
};
