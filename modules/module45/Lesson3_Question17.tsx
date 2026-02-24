import { Lesson } from '../../types';

const passageText = `Some critics of advertising have assumed that the creation of false needs in consumers is the principal mechanism underlying what these critics regard as its manipulative and hegemonic power. Central to this type of critique are the writings of political theorist Herbert Marcuse, who maintained that modern people succumb to oppression by believing themselves satisfied in spite of their living in an objectively unsatisfying world. This process occurs because in mass market culture the powerful psychological techniques of advertising create “needs” that are false and whose satisfaction thus contributes, not to the genuine well-being of consumers, but rather to the profit—and thereby the disproportionate power—of corporations.

Marcuse supposed that we all have certain real needs, both physical and psychological. Advertising appropriates these needs for its own purposes, forging psychological associations between them and consumer items, e.g., between sex and perfume, thereby creating a false “need” for these items. Since the quest for fulfillment is thus displaced from its true objects to consumer items, the implicit promises of advertisements are never really fulfilled and the consumer remains at some level unsatisfied.

Unfortunately, the distinction between real and false needs upon which this critique depends is extremely problematic. If Marcusians are right, we cannot, with any assurance, separate our real needs from the alleged false needs we feel as a result of the manipulation of advertisers. For, in order to do so, it would be necessary to eliminate forces of persuasion that are so prevalent in society that they have come to inform our instinctive judgments about things.

But, in fact, Marcusians make a major mistake in assuming that the majority of consumers who respond to advertising do not do so autonomously. Advertising techniques are unable to induce unwilling behavior in rational, informed adults, and regulations prohibit misinformation in advertising claims. Moreover, evidence suggests that most adults understand and recognize the techniques used and are not merely passive instruments. If there is a real need for emotional fulfillment, and if we can freely and authentically choose our means of obtaining it, then free, informed individuals may choose to obtain it through the purchase of commodities or even through the enjoyment occasionally provided by advertisements themselves. It is no doubt true that in many—perhaps even most—cases the use of an advertised product does not yield the precise sort of emotional dividend that advertisements seem to promise. This does not mean, however, that consumers do not freely and intentionally use the product as a means to another sort of fulfillment, or even that its genuine fulfillment of needs must be less than the advertisement suggests.`;

export const Lesson3_Question17: Lesson = {
  id: "45-3",
  title: "Question 17: Inference",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-141-S-1-P-3)', content: passageText },
    { type: 'h3', text: "Question 17: Inference Breakdown (PT-141-S-1-P-3-Q-17)" },
    { type: 'blockquote', text: "The author states that Marcuse believed that advertisers" },
    { type: 'options', items: [
      "(A) base many of their manipulative strategies on psychological research findings",
      "(B) appeal to people’s real needs in order to create false needs (Correct)",
      "(C) are restricted to a degree by regulations prohibiting misinformation",
      "(D) exaggerate the consumer’s need for independent decision-making",
      "(E) deny that the needs they create in people are less real than other needs"
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "This inference question should be resolved by matching each choice to what the passage actually establishes. Use the opening and closing claims as scope anchors, then select the option that satisfies the stem without unsupported assumptions." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "Anchor your reading in phrases such as 'Some critics of advertising have assumed that the creation of false...' and 'This does not mean, however, that consumers do not freely and...' when checking whether a choice preserves the passage's emphasis." },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: "(A) base many of their manipulative strategies on psychological research findings", text: "The passage mentions \"powerful psychological techniques\" but does not state that Marcuse believed these were based on \"research findings.\" This detail is not in the text. Additional check: trap type is unsupported inference, because the passage never supplies the missing support.", badge: "Incorrect", badgeColor: "red" },
      { title: "(B) appeal to people’s real needs in order to create false needs", text: "This is a direct and accurate summary of the process described in the second paragraph. It correctly identifies the two key components of Marcuse's theory: the appropriation of \"real needs\" and the \"creation of false needs.\" Additional check: this is strongest because it directly satisfies the stem while preserving the passage's scope and emphasis.", badge: "Correct", badgeColor: "green" },
      { title: "(C) are restricted to a degree by regulations prohibiting misinformation", text: "Information about regulations appears in the fourth paragraph as part of the *author's* rebuttal to Marcuse. This is a classic misattribution trap; this is not a belief Marcuse held. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" },
      { title: "(D) exaggerate the consumer’s need for independent decision-making", text: "This is the opposite of Marcuse's view. Marcuse believed advertising *undermines* and manipulates decision-making, rather than exaggerating the need for it. Additional check: trap type is reversal/contradiction, because it flips the passage's direction or conclusion.", badge: "Incorrect", badgeColor: "red" },
      { title: "(E) deny that the needs they create in people are less real than other needs", text: "The passage discusses Marcuse's theory about what advertisers *do*, not what advertisers themselves might claim or believe about their own actions. This is outside the scope of the explanation of Marcuse's views. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" }
    ]}
  ]
};
