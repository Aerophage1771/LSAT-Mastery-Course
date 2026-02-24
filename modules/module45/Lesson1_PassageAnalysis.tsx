import { Lesson } from '../../types';

const passageText = `Some critics of advertising have assumed that the creation of false needs in consumers is the principal mechanism underlying what these critics regard as its manipulative and hegemonic power. Central to this type of critique are the writings of political theorist Herbert Marcuse, who maintained that modern people succumb to oppression by believing themselves satisfied in spite of their living in an objectively unsatisfying world. This process occurs because in mass market culture the powerful psychological techniques of advertising create “needs” that are false and whose satisfaction thus contributes, not to the genuine well-being of consumers, but rather to the profit—and thereby the disproportionate power—of corporations.

Marcuse supposed that we all have certain real needs, both physical and psychological. Advertising appropriates these needs for its own purposes, forging psychological associations between them and consumer items, e.g., between sex and perfume, thereby creating a false “need” for these items. Since the quest for fulfillment is thus displaced from its true objects to consumer items, the implicit promises of advertisements are never really fulfilled and the consumer remains at some level unsatisfied.

Unfortunately, the distinction between real and false needs upon which this critique depends is extremely problematic. If Marcusians are right, we cannot, with any assurance, separate our real needs from the alleged false needs we feel as a result of the manipulation of advertisers. For, in order to do so, it would be necessary to eliminate forces of persuasion that are so prevalent in society that they have come to inform our instinctive judgments about things.

But, in fact, Marcusians make a major mistake in assuming that the majority of consumers who respond to advertising do not do so autonomously. Advertising techniques are unable to induce unwilling behavior in rational, informed adults, and regulations prohibit misinformation in advertising claims. Moreover, evidence suggests that most adults understand and recognize the techniques used and are not merely passive instruments. If there is a real need for emotional fulfillment, and if we can freely and authentically choose our means of obtaining it, then free, informed individuals may choose to obtain it through the purchase of commodities or even through the enjoyment occasionally provided by advertisements themselves. It is no doubt true that in many—perhaps even most—cases the use of an advertised product does not yield the precise sort of emotional dividend that advertisements seem to promise. This does not mean, however, that consumers do not freely and intentionally use the product as a means to another sort of fulfillment, or even that its genuine fulfillment of needs must be less than the advertisement suggests.`;

export const Lesson1_PassageAnalysis: Lesson = {
  id: "45-1",
  title: "Passage Analysis",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-141-S-1-P-3)', content: passageText },
    { type: 'h3', text: "Passage Analysis: Advertising and False Needs (PT-141-S-1-P-3)" },
    { type: 'paragraph', text: "The passage stages a debate about whether advertising manipulates consumers by manufacturing \"false needs.\" It first presents the Marcusean critique, then develops a two-step rebuttal centered on conceptual clarity and consumer agency." },
    { type: 'paragraph', text: "Track the shift in voice. Paragraphs 1-2 summarize the opposing theory, Paragraph 3 attacks its core distinction, and Paragraph 4 presents the author's own positive account of informed, autonomous choice." },
    { type: 'hr' },
    { type: 'h4', text: "Paragraphs 1-2: The Marcusean Framework" },
    { type: 'paragraph', text: "The opening two paragraphs define the strong manipulation thesis: advertising links real human needs to commodities, creating derivative \"needs\" that cannot truly satisfy those underlying aims." },
    { type: 'paragraph', text: "On this account, recurring dissatisfaction is structural rather than accidental, and advertising functions as a mechanism that stabilizes corporate power." },
    { type: 'h4', text: "Paragraph 3: Conceptual Challenge to 'Real vs. False'" },
    { type: 'paragraph', text: "The third paragraph begins rebuttal by targeting the distinction that supports the critique. If social persuasion pervasively shapes judgment, the passage argues, then cleanly isolating unmanipulated \"real\" needs becomes methodologically unstable." },
    { type: 'paragraph', text: "This move is strategic: by undermining the diagnostic categories, it weakens the explanatory force of the manipulation argument." },
    { type: 'h4', text: "Paragraph 4: Defense of Consumer Autonomy" },
    { type: 'paragraph', text: "The final paragraph advances the author's main position: most consumers are not passive instruments. Advertising can influence preference but cannot compel unwilling action by rational, informed adults." },
    { type: 'paragraph', text: "The conclusion is compatibilist. Even when advertising overpromises emotional payoff, product use may still represent an intentional and authentic means chosen by consumers to pursue fulfillment." },
    { type: 'callout', title: "Summary of the Argument", variant: "summary", text: "The passage first presents the false-needs critique of advertising, then rejects it by questioning the stability of the \"real/false\" distinction and by defending consumer autonomy. Its final claim is that influence does not erase agency, and market choices can remain intentional even when advertisements exaggerate outcomes." }
  ]
};
