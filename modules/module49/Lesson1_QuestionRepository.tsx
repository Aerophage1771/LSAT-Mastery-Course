
import { Lesson, ContentBlock } from '../../types';

const passageText = `Joy Kogawa’s Obasan is an account of a Japanese-Canadian family’s experiences during World War II. The events are seen from the viewpoint of a young girl who watches her family disintegrate as it undergoes the relocation that occurred in both Canada and the United States. Although the experience depicted in Obasan is mainly one of dislocation, Kogawa employs subtle techniques that serve to emphasize her major character’s heroism and to critique the majority culture. The former end is achieved through the novel’s form and the latter through the symbols it employs.

The form of the novel parallels the three-stage structure noted by anthropologists in their studies of rites of passage. According to these anthropologists, a rite of passage begins with separation from a position of security in a highly structured society; proceeds to alienation in a deathlike state where one is stripped of status, property, and rank; and concludes with reintegration into society accompanied by a heightened status gained as a result of the second stage. The process thus has the effect of transforming a society’s victim into a hero. The first eleven chapters of Obasan situate the young protagonist Naomi Nakane in a close-knit, securely placed family within Vancouver society. Chapters 12–32 chronicle the fall into alienation, when Naomi’s family is dislodged from its structured social niche and removed from the city into work camps or exile. Separated from her parents, Naomi follows her aunt Aya Obasan to the ghost town of Slocan, where Naomi joins the surrogate family of her uncle and aunt. In chapters 33–39 this surrogate family nurtures Naomi as she develops toward a final integration with the larger society and with herself: as an adult, when she receives a bundle of family documents and letters from her aunt, Naomi breaks through the personal and cultural screens of silence and secretiveness that have enshrouded her past, and reconciles herself with her history.

Kogawa’s use of motifs drawn from Christian rituals and symbols forms a subtle critique of the professed ethics of the majority culture that has shunned Naomi. In one example of such symbolism, Naomi’s reacquaintance with her past is compared with the biblical story of turning stone into bread. The bundle of documents—which Kogawa refers to as “stone-hard facts”—brings Naomi to the recognition of her country’s abuse of her people. But implicit in these hard facts, Kogawa suggests, is also the “bread” of a spiritual sustenance that will allow Naomi to affirm the durability of her people and herself. Through the careful deployment of structure and symbol, Kogawa thus manages to turn Naomi’s experience—and by extension the wartime experiences of many Japanese Canadians—into a journey of heroic transformation and a critique of the majority culture.`;

const bankruptcyPassageText = `In many Western societies, modern bankruptcy laws have undergone a shift away from a focus on punishment and toward a focus on bankruptcy as a remedy for individuals and corporations in financial trouble—and, perhaps unexpectedly, for their creditors. This shift has coincided with an ever-increasing reliance on declarations of bankruptcy by individuals and corporations with excessive debt, a trend that has drawn widespread criticism. However, any measure seeking to make bankruptcy protection less available would run the risk of preventing continued economic activity of financially troubled individuals and institutions. It is for this reason that the temptation to return to a focus on punishment of individuals or corporations that become insolvent must be resisted. Modern bankruptcy laws, in serving the needs of an interdependent society, serve the varied interests of the greatest number of citizens.
The harsh punishment for insolvency in centuries past included imprisonment of individuals and dissolution of enterprises, and reflected societies’ beliefs that the accumulation of excessive debt resulted either from debtors’ unwillingness to meet obligations or from their negligence. Insolvent debtors were thought to be breaking sacrosanct social contracts; placing debtors in prison was considered necessary in order to remove from society those who would violate such contracts and thereby defraud creditors. But creditors derive little benefit from imprisoned debtors unable to repay even a portion of their debt. And if the entity to be punished is a large enterprise, for example, an auto manufacturer, its dissolution would cause significant unemployment and the disruption of much-needed services.
Modern bankruptcy law has attempted to address the shortcomings of the punitive approach. Two beliefs underlie this shift: that the public good ought to be paramount in considering the financial insolvency of individuals and corporations; and that the public good is better served by allowing debt-heavy corporations to continue to operate, and indebted individuals to continue to earn wages, than by disabling insolvent economic entities. The mechanism for executing these goals is usually a court-directed reorganization of debtors’ obligations to creditors. Such reorganizations typically comprise debt relief and plans for court-directed transfers of certain assets from debtor to creditor. Certain strictures connected to bankruptcy—such as the fact that bankruptcies become matters of public record and are reported to credit bureaus for a number of years—may still serve a punitive function, but not by denying absolution of debts or financial reorganization. Through these mechanisms, today’s bankruptcy laws are designed primarily to assure continued engagement in productive economic activity, with the ultimate goal of restoring businesses and individuals to a degree of economic health and providing creditors with the best hope of collecting.`;

const humanitiesPassageText = `As the twentieth century draws to a close, we are learning to see the extent to which accounts and definitions of cultures are influenced by human biases and purposes, benevolent in what they include, incorporate, and validate, less so in what they exclude and demote. A number of recent studies have argued that the anxieties and agendas of the present exert an extraordinary influence on the national identities we construct from the cultural past. For example, Greek civilization was known originally to have had roots in Egyptian and various other African and Eastern cultures, but some current scholars charge that its identity was revised during the course of the nineteenth century to support an image of European cultural dominance—its African and other cultural influences either actively purged or hidden from view by European scholars. Because ancient Greek writers themselves openly acknowledged their culture’s hybrid past, nineteenth-century European commentators habitually passed over these acknowledgments without comment.

Another example is the use of “tradition” to determine national identity. Images of European authority over other cultures were shaped and reinforced during the nineteenth century, through the manufacture and reinterpretation of rituals, ceremonies, and traditions. At a time when many of the institutions that had helped maintain imperial societies were beginning to recede in influence, and when the pressures of administering numerous overseas territories and large new domestic constituencies mounted, the ruling elites of Europe felt the clear need to project their power backward in time, giving it a legitimacy that only longevity could impart. Thus in 1876, Queen Victoria of England was declared empress of India and was celebrated in numerous “traditional” jamborees, as if her rule were not mainly a matter of recent edict but of age-old custom.

Similar constructions have also been made by native cultures about their precolonial past, as in the case of Algeria during its war of independence from France, when decolonization encouraged Algerians to create idealized images of what they believed their culture to have been prior to French occupation. This strategy is at work in what many revolutionary poets say and write during wars of independence elsewhere, giving their adherents something to revive and admire.

Though for the most part colonized societies have won their independence, in many cultures the imperial attitudes of uniqueness and superiority underlying colonial conquest remain. There is in all nationally defined cultures an aspiration to sovereignty and dominance that expresses itself in definitions of cultural identity. At the same time, paradoxically, we have never been as aware as we are now of the fact that historical and cultural experiences partake of many social and cultural domains and even cross national boundaries, despite the claims to the contrary made by purveyors of nationalist dogma. Far from being unitary, monolithic, or autonomous, cultures actually include more “foreign” elements than they consciously exclude.`;

const woodyAllenPassageText = `In filmmaker Woody Allen’s Deconstructing Harry, the writer Harry Block is presented as extremely neurotic and narcissistic. Block uses his experiences as fodder for his work, no matter how embarrassing the result may be for the other people in his life. And while Allen exaggerates Block’s narcissism for comic effect, the effect is not simply comic: the film is emblematic of Allen’s career precisely because of its extravagantly exaggerated censure of a life dedicated to and obsessed with art. Deconstructing Harry may be the most unequivocally peevish of Allen’s depictions of artists, but it is less a new direction for Allen than a concentrated reprise of a theme present throughout his career.
For instance, a film producer in Stardust Memories, Allen’s sourest portrait of artists before Harry, articulates a particularly cynical view of cinematic art after a screening of a film-in-progress by Stardust Memories’ main character, Sandy Bates. The producer says of Bates, “His insights are shallow and morbid. I’ve seen it all before. They try to document their private suffering and fob it off as art.” The producer, like all the figures in this film, often seems less a distinct individual than a projection of Bates’s personal self-recriminations. This effectively reinforces the charge of solipsism with which Bates, the unstable and demoralized artist, indicts himself. Indeed, the possibility that artists are merely “documenting their private suffering and fobbing it off as art” appears sufficiently often in Allen’s films to seem an unresolved personal issue.
In Manhattan, the ex-wife of a television writer and aspiring novelist offers a denigratory take on the artistic enterprise that is similar to the producer’s in Stardust Memories. Her book documenting the collapse of her marriage punctures her ex-husband’s artistic pretensions by revealing that he “longed to be an artist but balked at the necessary sacrifices. In his most private moments, he spoke of the fear of death, which he elevated to tragic heights when, in fact, it was mere narcissism.”
It is also significant that in Allen’s films, the less artistic the characters, the more likely their narrative is to result in a happy ending. Thus, the filmmaker in Crimes and Misdemeanors, the novelist in Husbands and Wives, and the screenwriter in Celebrity all wind up desolate and solitary, largely because of the egocentric and exploitative attitudes embodied in their art and the effects of those attitudes on those around them. On the other hand, the unpretentious, thoroughly inartistic title character in Zelig dies an untroubled, even happy, death, only slightly compromised by his failure to finish reading Moby-Dick. And the title character and talent agent in Broadway Danny Rose is the beneficiary of the most gratifying resolution Allen has scripted, primarily due to altruistic devotion to his utterly talentless nightclub performers.`;

const cosmicJusticePassageText = `“Cosmic justice,” as Sowell uses the term, refers to the perfect justice that only an omniscient being could render—rewards and punishments that are truly deserved when all relevant things are properly taken into consideration. Inherent human limitations, however, make it impossible to achieve this type of justice through human law, even though many times it seems that people are arguing for such justice and promote policies they think will render it through our human laws. But our human legal systems should not try to dispense cosmic justice since we do not know all the critical relevant facts or understand all the complex causal interrelationships involved or even know definitively what cosmic justice really is.
Whether somebody truly deserves something is a very difficult thing for us to determine. For one thing, we are not knowledgeable enough about the person and situation, or smart enough, even if we knew what all the critical factors were, to perform the complicated calculus necessary to understand how the complex interrelationships among the various variables should affect our ultimate conclusions. Deservedness necessarily focuses on a consideration of inputs. An omniscient being is capable of perfectly considering all these things, but we are not. With all the limitations that we face as mere humans, the best we can reasonably do is judge primarily based upon outputs, or consequences, rather than inputs.

Passage B

Cosmic justice is not simply a higher degree of traditional justice; it is a fundamentally different concept. Traditionally, justice or injustice is characteristic of a process. A defendant in a criminal case would be said to have received justice if the trial were conducted as it should be, under fair rules and with an impartial judge and jury. After such a trial, it could be said that “justice was done”—regardless of the outcome. Conversely, if the trial were conducted in violation of the rules and with a judge or jury showing prejudice against the defendant, this would be considered an unfair or unjust trial—even if the prosecutor failed to convince the jury to convict an innocent person. In short, traditional justice is about impartial processes rather than either results or prospects.
On the other hand, cosmic justice foolishly seeks to correct, not only biased or discriminatory acts by individuals or social institutions, but unmerited disadvantages in general, from whatever source they may arise. In criminal trials, for example, before a murderer is sentenced, the law permits his traumatic childhood to be taken into account. Seldom is there any claim that the person murdered had anything to do with that traumatic childhood. It is only from a cosmic perspective that it could have any bearing on the crime. If punishment is meant to deter crime, then mitigating that punishment in pursuit of cosmic justice presumably reduces that deterrence and allows more crime to take place at the expense of innocent people.`;

const cameronPassageText = `From a critical discussion of the work of Victorian photographer Julia Margaret Cameron.
What Cameron called her “fancy-subject” pictures—photographs in which two or more costumed sitters enacted, under Cameron’s direction, scenes from the Bible, mythology, Shakespeare, or Tennyson—bear unmistakable traces of the often comical conditions under which they were taken. In many respects they have more connection to the family album pictures of recalcitrant relatives who have been herded together for the obligatory group picture than they do to the masterpieces of Western painting. In Raphael and Giotto there are no infant Christs whose faces are blurred because they moved, or who are looking at the viewer with frank hatred. These traces, of course, are what give the photographs their life and charm. If Cameron had succeeded in her project of making seamless works of illustrative art, her work would be among the curiosities of Victorian photography—like Oscar Gustave Rejlander’s extravagantly awful The Two Ways of Life—rather than among its most vital images.
It is precisely the camera’s realism—its stubborn obsession with the surface of things—that has given Cameron’s theatricality and artificiality its atmosphere of truth. It is the truth of the sitting, rather than the fiction which all the dressing up was in aid of, that wafts out of these wonderful and strange, not-quite-in-focus photographs. They are what they are: pictures of housemaids and nieces and husbands and village children who are dressed up as Mary Madonnas and infant Jesuses and John the Baptists and Lancelots and Guineveres and trying desperately hard to sit still. The way each sitter endures his or her ordeal is the collective action of the photograph, its “plot” so to speak. When we look at a narrative painting we can suspend our disbelief; when we look at a narrative photograph we cannot. We are always aware of the photograph’s doubleness—of each figure’s imaginary and real personas. Theater can transcend its doubleness, can make us believe (for at least some of the time) that we are seeing only Lear or Medea. Still photographs of theatrical scenes can never escape being pictures of actors.
What gives Cameron’s pictures of actors their special quality—their status as treasures of photography of an unfathomably peculiar sort—is their singular combination of amateurism and artistry. In The Passing of Arthur, for example, the mast and oar of the makeshift boat representing a royal barge are obviously broomsticks and the water is white muslin drapery. But these details are insignificant. For once, the homely truth of the sitting gives right of place to the romantic fantasy of its director. The picture, a night scene, is magical and mysterious. While Cameron’s fancy-subject pictures have been compared to poor amateur theatricals, The Passing of Arthur puts one in mind of good amateur theatricals one has seen, and recalls with shameless delight.`;

const advertisingPassageText = `Some critics of advertising have assumed that the creation of false needs in consumers is the principal mechanism underlying what these critics regard as its manipulative and hegemonic power. Central to this type of critique are the writings of political theorist Herbert Marcuse, who maintained that modern people succumb to oppression by believing themselves satisfied in spite of their living in an objectively unsatisfying world. This process occurs because in mass market culture the powerful psychological techniques of advertising create “needs” that are false and whose satisfaction thus contributes, not to the genuine well-being of consumers, but rather to the profit—and thereby the disproportionate power—of corporations.
Marcuse supposed that we all have certain real needs, both physical and psychological. Advertising appropriates these needs for its own purposes, forging psychological associations between them and consumer items, e.g., between sex and perfume, thereby creating a false “need” for these items. Since the quest for fulfillment is thus displaced from its true objects to consumer items, the implicit promises of advertisements are never really fulfilled and the consumer remains at some level unsatisfied.
Unfortunately, the distinction between real and false needs upon which this critique depends is extremely problematic. If Marcusians are right, we cannot, with any assurance, separate our real needs from the alleged false needs we feel as a result of the manipulation of advertisers. For, in order to do so, it would be necessary to eliminate forces of persuasion that are so prevalent in society that they have come to inform our instinctive judgments about things.
But, in fact, Marcusians make a major mistake in assuming that the majority of consumers who respond to advertising do not do so autonomously. Advertising techniques are unable to induce unwilling behavior in rational, informed adults, and regulations prohibit misinformation in advertising claims. Moreover, evidence suggests that most adults understand and recognize the techniques used and are not merely passive instruments. If there is a real need for emotional fulfillment, and if we can freely and authentically choose our means of obtaining it, then free, informed individuals may choose to obtain it through the purchase of commodities or even through the enjoyment occasionally provided by advertisements themselves. It is no doubt true that in many—perhaps even most—cases the use of an advertised product does not yield the precise sort of emotional dividend that advertisements seem to promise. This does not mean, however, that consumers do not freely and intentionally use the product as a means to another sort of fulfillment, or even that its genuine fulfillment of needs must be less than the advertisement suggests.`;

const propertyJusticePassageText = `There are two principles that are fundamental to a theory of justice regarding property. The principle of justice in acquisition specifies the conditions under which someone can legitimately come to own something that was previously not owned by anyone. The principle of justice in transfer specifies the conditions under which the transfer of property from one person to another is justified.
Given such principles, if the world were wholly just, the following definition would exhaustively cover the subject of justice regarding property:
1. A person who acquires property in accordance with the principle of justice in acquisition is entitled to that property.
2. A person who acquires property in accordance with the principle of justice in transfer, from someone else who is entitled to the property, is entitled to the property.
3. No one is entitled to any property except by (repeated) applications of 1 and 2.
However, not all actual situations are generated in accordance with the principles of justice in acquisition and justice in transfer. Some people steal from others or defraud them, for example. The existence of past injustice raises the issue of the rectification of injustice. If past injustice has shaped present ownership in various ways, what, if anything, ought to be done to rectify that injustice? A principle of rectification would use historical information about previous situations and injustices done in them, and information about the actual course of events that flowed from these injustices, to produce a description of the property ownership that should have resulted. Actual ownership of property must then be brought into conformity with this description.

Passage B

In 1790, the United States Congress passed the Indian Nonintercourse Act, which requires that all transfers of lands from Native Americans to others be approved by the federal government. The law has not been changed in any relevant respect, and it remains in effect today. Its purpose is clear. It was meant to guarantee security to Native Americans against fraudulent acquisition by others of the Native Americans’ land holdings. Several suits have been initiated by Native American tribes for recovery of lands held by them when the Nonintercourse Act took effect.
One natural (one might almost say obvious) way of reasoning about Native American claims to land in North America is this: Native Americans were the first human occupants of this land. Before the European invasion of North America, the land belonged to them. In the course of that invasion and its aftermath, the land was illicitly taken from them. The current owners lack a well-founded right to the land, which now lies illicitly in their hands. Ideally, the land should be restored to its rightful owners. This may be impractical; compromises might have to be made. But the original wrong can most easily be righted by returning the land to them—or by returning it wherever that is feasible.`;

export const Lesson1_QuestionRepository: Lesson = {
  id: "49-1",
  title: "RC Question Bank",
  content: [
    { type: 'h2', text: 'Reading Comprehension Question Repository' },
    { type: 'paragraph', text: 'This repository contains Reading Comprehension questions from the course drills. Use this section for targeted practice and review. Where a question or passage is referenced in a drill but not listed here, it is marked **[Missing ID]** or **[Content in Module X]** in that module.' },
    { type: 'hr' },
    { 
      type: 'accordion', 
      title: 'Passage: Obasan (PT-119-S-1-P-2)',
      content: passageText,
    },
    { 
      type: 'accordion', 
      title: 'Question 8: Main Idea',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following most accurately states the main idea of the passage?" },
        { type: 'options', items: [
          "(A) While telling a story of familial disruption, Obasan uses structure and symbolism to valorize its protagonist and critique the majority culture. [93.0%] (Correct)",
          "(B) By means of its structure and symbolism, Obasan mounts a harsh critique of a society that disrupts its citizens’ lives. [1.0%]",
          "(C) Although intended primarily as social criticism, given its structure Obasan can also be read as a tale of heroic transformation. [2.0%]",
          "(D) With its three-part structure that parallels rites of passage, Obasan manages to valorize its protagonist in spite of her traumatic experiences. [3.0%]",
          "(E) Although intended primarily as a story of heroic transformation, Obasan can also be read as a work of social criticism. [2.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 10: Organization',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following most accurately describes the organization of the passage?" },
        { type: 'options', items: [
          "(A) Two points are made about a novel, the first supported with a brief example, the second reasserted without support. [1.0%]",
          "(B) Two points are made about a novel, the first supported with an extended analogy, the second reasserted without support. [1.0%]",
          "(C) Two points are made about a novel, the first reasserted without support, the second supported with an extended analogy. [3.0%]",
          "(D) Two points are made about a novel, the first supported with a brief example, the second supported with an extended analogy. [22.0%]",
          "(E) Two points are made about a novel, the first supported with an extended analogy, the second supported with a brief example. [74.0%] (Correct)"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 11: Inference (Heroism)',
      content: [
        { type: 'blockquote', text: "**Question:** It can be inferred that the heroism Naomi gains in the course of Obasan is manifested in her" },
        { type: 'options', items: [
          "(A) reconciliation with her past [89.0%] (Correct)",
          "(B) careful deployment of structure and symbol [5.0%]",
          "(C) relationship with her surrogate family [3.0%]",
          "(D) renewal of her religious beliefs [0.0%]",
          "(E) denunciation of the majority culture [2.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 12: Detail Hunt',
      content: [
        { type: 'blockquote', text: "**Question:** According to the anthropologists cited by the author, rites of passage are best described by which one of the following sequences of stages?" },
        { type: 'options', items: [
          "(A) alienation, dislocation, integration [1.0%]",
          "(B) separation, alienation, reintegration [97.0%] (Correct)",
          "(C) integration, alienation, disintegration [1.0%]",
          "(D) dislocation, reconciliation, reintegration [1.0%]",
          "(E) disintegration, transformation, reintegration [1.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 13: Detail (Agent)',
      content: [
        { type: 'blockquote', text: "**Question:** According to the passage, the agent of Naomi’s reconciliation with her past is" },
        { type: 'options', items: [
          "(A) her reunion with her parents [0.0%]",
          "(B) the exile of her parents [0.0%]",
          "(C) her critique of the majority society [1.0%]",
          "(D) her separation from her aunt and uncle [0.0%]",
          "(E) her receipt of documents and letters [98.0%] (Correct)"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 14: Inference (Society)',
      content: [
        { type: 'blockquote', text: "**Question:** The passage suggests that Joy Kogawa believes which one of the following about the society that shuns Naomi?" },
        { type: 'options', items: [
          "(A) It discouraged its citizens from seeking out their heritage. [31.0%]",
          "(B) It endeavored to thwart its citizens’ attempts at heroic transformation. [7.0%]",
          "(C) It violated its own supposed religious ethics by doing so. [54.0%] (Correct)",
          "(D) It prohibited its citizens from participating in rites of passage. [2.0%]",
          "(E) It demanded that loyalty to the government replace loyalty to the family. [6.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: "Question 15: Author's Values",
      content: [
        { type: 'blockquote', text: "**Question:** Based on the passage, which one of the following aspects of Kogawa’s work does the author of the passage appear to value most highly?" },
        { type: 'options', items: [
          "(A) her willingness to make political statements [3.0%]",
          "(B) her imaginative development of characters [3.0%]",
          "(C) her subtle use of literary techniques [90.0%] (Correct)",
          "(D) her knowledge of Christian rituals and symbols [3.0%]",
          "(E) her objectivity in describing Naomi’s tragic life [1.0%]"
        ]}
      ] as ContentBlock[]
    },
    { type: 'hr' },
    { 
      type: 'accordion', 
      title: 'Passage: Bankruptcy Laws (PT-128-S-1-P-2)',
      content: bankruptcyPassageText,
    },
    { 
      type: 'accordion', 
      title: 'Question 6: Main Point',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following most accurately expresses the main point of the passage?" },
        { type: 'options', items: [
          "(A) The modern trend in bankruptcy law away from punishment and toward the maintenance of economic activity serves the best interests of society and should not be abandoned. [91.0%] (Correct)",
          "(B) Bankruptcy laws have evolved in order to meet the needs of creditors, who depend on the continued productive activity of private citizens and profit-making enterprises. [2.0%]",
          "(C) Modern bankruptcy laws are justified on humanitarian grounds, even though the earlier punitive approach was more economically efficient. [0.0%]",
          "(D) Punishment for debt no longer holds deterrent value for debtors and is therefore a concept that has been largely abandoned as ineffective. [0.0%]",
          "(E) Greater economic interdependence has triggered the formation of bankruptcy laws that reflect a convergence of the interests of debtors and creditors. [6.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 7: Inference',
      content: [
        { type: 'blockquote', text: "**Question:** In stating that bankruptcy laws have evolved “perhaps unexpectedly” (first sentence of the passage) as a remedy for creditors, the author implies that creditors" },
        { type: 'options', items: [
          "(A) are often surprised to receive compensation in bankruptcy courts [3.0%]",
          "(B) have unintentionally become the chief beneficiaries of bankruptcy laws [7.0%]",
          "(C) were a consideration, though not a primary one, in the formulation of bankruptcy laws [8.0%]",
          "(D) are better served than is immediately apparent by laws designed in the first instance to provide a remedy for debtors [82.0%] (Correct)",
          "(E) were themselves active in the formulation of modern bankruptcy laws [0.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 8: Author Attitude',
      content: [
        { type: 'blockquote', text: "**Question:** The author’s attitude toward the evolution of bankruptcy law can most accurately be described as" },
        { type: 'options', items: [
          "(A) approval of changes that have been made to inefficient laws [93.0%] (Correct)",
          "(B) confidence that further changes to today’s laws will be unnecessary [6.0%]",
          "(C) neutrality toward laws that, while helpful to many, remain open to abuse [1.0%]",
          "(D) skepticism regarding the possibility of solutions to the problem of insolvency [0.0%]",
          "(E) concern that inefficient laws may have been replaced by legislation too lenient to debtors [0.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 9: Purpose of Passage',
      content: [
        { type: 'blockquote', text: "**Question:** The primary purpose of the passage is to" },
        { type: 'options', items: [
          "(A) offer a critique of both past and present approaches to insolvency [3.0%]",
          "(B) compare the practices of bankruptcy courts of the past with those of bankruptcy courts of the present [9.0%]",
          "(C) criticize those who would change the bankruptcy laws of today [1.0%]",
          "(D) reexamine today’s bankruptcy laws in an effort to point to further improvements [1.0%]",
          "(E) explain and defend contemporary bankruptcy laws [85.0%] (Correct)"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 10: Other Viewpoint',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following claims would a defender of the punitive theory of bankruptcy legislation be most likely to have made?" },
        { type: 'options', items: [
          "(A) Debt that has become so great that repayment is impossible is ultimately a moral failing and thus a matter for which the law should provide punitive sanctions. [76.0%] (Correct)",
          "(B) Because insolvency ultimately harms the entire economy, the law should provide a punitive deterrent to insolvency. [19.0%]",
          "(C) The insolvency of companies or individuals is tolerable if the debt is the result of risk-taking, profit-seeking ventures that might create considerable economic growth in the long run. [1.0%]",
          "(D) The dissolution of a large enterprise is costly to the economy as a whole and should not be allowed, even when that enterprise’s insolvency is the result of its own fiscal irresponsibility. [2.0%]",
          "(E) The employees of a large bankrupt enterprise should be considered just as negligent as the owner of a bankrupt sole proprietorship. [2.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 11: Application',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following sentences could most logically be appended to the end of the last paragraph of the passage?" },
        { type: 'options', items: [
          "(A) Only when today’s bankruptcy laws are ultimately seen as inadequate on a large scale will bankruptcy legislation return to its original intent. [2.0%]",
          "(B) Punishment is no longer the primary goal of bankruptcy law, even if some of its side effects still function punitively. [86.0%] (Correct)",
          "(C) Since leniency serves the public interest in bankruptcy law, it is likely to do so in criminal law as well. [1.0%]",
          "(D) Future bankruptcy legislation could include punitive measures, but only if such measures ultimately benefit creditors. [8.0%]",
          "(E) Today’s bankruptcy laws place the burden of insolvency squarely on the shoulders of creditors, in marked contrast to the antiquated laws that weighed heavily on debtors. [3.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 12: Inference',
      content: [
        { type: 'blockquote', text: "**Question:** The information in the passage most strongly suggests which one of the following about changes in bankruptcy laws?" },
        { type: 'options', items: [
          "(A) Bankruptcy laws always result from gradual changes in philosophy followed by sudden shifts in policy. [0.0%]",
          "(B) Changes in bankruptcy law were initiated by the courts and only grudgingly adopted by legislators. [0.0%]",
          "(C) The adjustment of bankruptcy laws away from a punitive focus was at first bitterly opposed by creditors. [3.0%]",
          "(D) Bankruptcy laws underwent change because the traditional approach proved inadequate and contrary to the needs of society. [93.0%] (Correct)",
          "(E) The shift away from a punitive approach to insolvency was part of a more general trend in society toward rehabilitation and away from retribution. [4.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 13: Weaken-Strengthen',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following, if true, would most weaken the author’s argument against harsh punishment for debtors?" },
        { type: 'options', items: [
          "(A) Extensive study of the economic and legal history of many countries has shown that most individuals who served prison time for bankruptcy subsequently exhibited greater economic responsibility. [17.0%]",
          "(B) The bankruptcy of a certain large company has had a significant negative impact on the local economy even though virtually all of the affected employees were able to obtain similar jobs within the community. [5.0%]",
          "(C) Once imprisonment was no longer a consequence of insolvency, bankruptcy filings increased dramatically, then leveled off before increasing again during the 1930s. [3.0%]",
          "(D) The court-ordered liquidation of a large and insolvent company’s assets threw hundreds of people out of work, but the local economy nevertheless demonstrated robust growth in the immediate aftermath. [14.0%]",
          "(E) Countries that continue to imprison debtors enjoy greater economic health than do comparable countries that have ceased to do so. [61.0%] (Correct)"
        ]}
      ] as ContentBlock[]
    },
    { type: 'hr' },
    { 
      type: 'accordion', 
      title: 'Passage: Cultural Identity (PT-128-S-1-P-3)',
      content: humanitiesPassageText,
    },
    { 
      type: 'accordion', 
      title: 'Question 14: Main Idea',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following statements most accurately expresses the main point of the passage?" },
        { type: 'options', items: [
          "(A) Either by ignoring a native culture’s own self-understanding or by substituting fabricated traditions and rituals, imperial societies often obscure the heterogeneous cultures of the peoples they colonize. [11.0%]",
          "(B) Attempts to reconstruct a native, precolonial culture by members of decolonized societies are essentially no different from European colonial creation of traditions and rituals to validate their authority. [8.0%]",
          "(C) In attempting to impose a monolithic culture on the peoples they colonize, imperial societies adopt artifices very similar to the tactics employed by revisionist historians of ancient Greek culture. [3.0%]",
          "(D) While most colonized societies have regained their independence, they retain trappings of imperial culture that will need to be discarded if they are to regain the traditions of their past. [3.0%]",
          "(E) Despite nationalistic creation of images of cultures as unified and monolithic, we now more clearly understand the extent to which cultures are in fact made up of heterogeneous elements. [76.0%] (Correct)"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 15: Except, Inference',
      content: [
        { type: 'blockquote', text: "**Question:** The passage provides information to answer all of the following questions EXCEPT:" },
        { type: 'options', items: [
          "(A) What kinds of influences affect the national identities people construct from their past? [2.0%]",
          "(B) Why did nineteenth-century European commentators ignore some discussion of Greek culture by ancient Greek writers? [4.0%]",
          "(C) In what ways did African cultural influence affect the culture of ancient Greece? [85.0%] (Correct)",
          "(D) Why was Queen Victoria of England declared empress of India in 1876? [3.0%]",
          "(E) What is one reason why revolutionary poets speak and write as they do? [6.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 16: Author Attitude',
      content: [
        { type: 'blockquote', text: "**Question:** The author’s attitude toward the studies mentioned in the second sentence of the passage is most likely" },
        { type: 'options', items: [
          "(A) overall agreement with their conclusion about influences on cultural identity [92.0%] (Correct)",
          "(B) reservation over their preoccupation with colonialism [1.0%]",
          "(C) skepticism toward the relevance of the examples they cite [2.0%]",
          "(D) concern that they fail to explain ancient Greek culture [2.0%]",
          "(E) unqualified disagreement with their insistence that cultures are monolithic [3.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 17: Phrase Meaning',
      content: [
        { type: 'blockquote', text: "**Question:** The author’s use of the word “traditional” (last sentence of the second paragraph) is intended to indicate that the jamborees" },
        { type: 'options', items: [
          "(A) had been revived after centuries of neglect [3.0%]",
          "(B) were legitimized by their historic use in the native culture [9.0%]",
          "(C) exemplified the dominance of the imperial culture [8.0%]",
          "(D) conferred spurious historical legitimacy upon colonial authority [76.0%] (Correct)",
          "(E) combined historic elements of imperial and native cultures [4.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 18: Other Viewpoint',
      content: [
        { type: 'blockquote', text: "**Question:** The “purveyors of nationalist dogma” mentioned in the second-to-last sentence of the passage would be most likely to agree with which one of the following?" },
        { type: 'options', items: [
          "(A) Colonized nations should not attempt to regain their historical cultures. [5.0%]",
          "(B) Imperial cultures should incorporate the traditions of their colonies. [2.0%]",
          "(C) The cultural traditions of a nation should remain untainted by outside influences. [83.0%] (Correct)",
          "(D) A country’s cultural identity partakes of many social and cultural domains. [5.0%]",
          "(E) National histories are created to further aspirations to sovereignty and dominance. [6.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 19: Application',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following would most likely be an example of one of the “rituals, ceremonies, and traditions” mentioned in the second sentence of the second paragraph?" },
        { type: 'options', items: [
          "(A) an annual ceremony held by an institution of the colonizing culture to honor the literary and theatrical achievements of members of the native culture [4.0%]",
          "(B) a religious service of the colonizing culture that has been adapted to include elements of the native culture in order to gain converts [26.0%]",
          "(C) a traditional play that is part of a colonized nation’s original culture, but is highly popular among the leaders of the imperial culture [7.0%]",
          "(D) a ritual dance, traditionally used to commemorate the union of two native deities, that is modified to depict the friendship between the colonial and native cultures [62.0%] (Correct)",
          "(E) a traditional village oratory competition in which members of the native culture endeavor to outdo one another in allegorical criticisms of the colonizing culture [1.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 20: Passage Principle',
      content: [
        { type: 'blockquote', text: "**Question:** In the context of the passage, the examples in the second and third paragraphs best exemplify which one of the following generalizations?" },
        { type: 'options', items: [
          "(A) Apparent traditions may be products of artifice. [72.0%] (Correct)",
          "(B) National identity generally requires cultural uniformity. [5.0%]",
          "(C) Most colonial cultures are by nature artificial and contrived. [9.0%]",
          "(D) Historical and cultural experiences may cross national boundaries. [14.0%]",
          "(E) Revolutionary cultures are often more authentic than imperial cultures. [1.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 21: Purpose of Passage',
      content: [
        { type: 'blockquote', text: "**Question:** The primary purpose of the passage is to" },
        { type: 'options', items: [
          "(A) argue for the creation of a global culture made up of elements from many national cultures [3.0%]",
          "(B) explain how the desire for cultural uniformity supports imperialist attitudes [9.0%]",
          "(C) stress the importance of objectivity in studying the actual sources of cultural identity [13.0%]",
          "(D) advance the claim that present concerns motivate the shaping of cultural identities [72.0%] (Correct)",
          "(E) reveal the imperialist motivations of some nineteenth-century scholarship [4.0%]"
        ]}
      ] as ContentBlock[]
    },
    { type: 'hr' },
    { 
      type: 'accordion', 
      title: 'Passage: Woody Allen Films (PT-128-S-4-P-2)',
      content: woodyAllenPassageText,
    },
    { 
      type: 'accordion', 
      title: 'Question 7: Main Idea',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following most accurately expresses the main point of the passage?" },
        { type: 'options', items: [
          "(A) The theme of the neurotic and narcissistic nature of artists is, though most intensely presented in Deconstructing Harry, one that Woody Allen has explored throughout his career. [76.0%] (Correct)",
          "(B) Woody Allen’s films suggest, by means of their depictions of artists, that the pursuit of an artistic life leads to unhappiness and that happiness is most often achieved by the inartistic. [16.0%]",
          "(C) Deconstructing Harry, like many of Woody Allen’s films, shows that the creation of art requires sacrifice, though many would-be artists are unable or unwilling to give up their comforts to create enduring works. [1.0%]",
          "(D) Woody Allen’s career indicates that, like most artists, he uses his own experiences and neuroses to create the works for which he has received the greatest acclaim. [6.0%]",
          "(E) Woody Allen’s films show that artists are unavoidably narcissistic and neurotic and that they are, because of this, able to produce works of great beauty and power. [1.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 8: Passage Principle',
      content: [
        { type: 'blockquote', text: "**Question:** It can most reasonably be inferred that which one of the following principles underlies the author’s argument regarding Allen’s films?" },
        { type: 'options', items: [
          "(A) Critics should consider not only an individual film in isolation, but also its relation to the filmmaker’s entire body of work, when attempting to gauge that film’s artistic merit. [33.0%]",
          "(B) People who are not themselves artists should not presume to interpret films that take as their subject the artistic temperament. [1.0%]",
          "(C) The fate that a character in a movie meets can give an indication of the filmmaker’s views concerning his approval or disapproval of that character. [62.0%] (Correct)",
          "(D) The writer of a film’s screenplay should be considered only one of many contributors to the ultimate meaning of that film. [3.0%]",
          "(E) Prior work of a film’s cast members should be taken into account when assessing the artistic merits of a film. [1.0%]"
        ]}
      ] as ContentBlock[]
    },
     { 
      type: 'accordion', 
      title: 'Question 9: Paragraph Function',
      content: [
        { type: 'blockquote', text: "**Question:** The main function of the third paragraph of the passage is to" },
        { type: 'options', items: [
          "(A) present an exception to the general thesis stated in the first paragraph [0.0%]",
          "(B) qualify an assertion made in the first paragraph [11.0%]",
          "(C) provide an illustration that is contrasted to the illustration given in the second paragraph [4.0%]",
          "(D) provide additional support for a contention made in the second paragraph [84.0%] (Correct)",
          "(E) present a contention that will be argued for in the final paragraph [2.0%]"
        ]}
      ] as ContentBlock[]
    },
     { 
      type: 'accordion', 
      title: 'Question 10: Phrase Meaning',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following most accurately captures the meaning of the word “peevish” as it is used in the last sentence of the first paragraph?" },
        { type: 'options', items: [
          "(A) offensive [18.0%]",
          "(B) neurotic [18.0%]",
          "(C) stubborn [2.0%]",
          "(D) egocentric [12.0%]",
          "(E) sour [50.0%] (Correct)"
        ]}
      ] as ContentBlock[]
    },
     { 
      type: 'accordion', 
      title: 'Question 11: Phrase Function',
      content: [
        { type: 'blockquote', text: "**Question:** The author mentions the title character in Zelig primarily to" },
        { type: 'options', items: [
          "(A) counter the prevailing critical view of Allen’s films [1.0%]",
          "(B) exemplify a primary preoccupation of Allen’s works [4.0%]",
          "(C) serve as a contrast to the fate of artistic characters in Allen’s films [91.0%] (Correct)",
          "(D) demonstrate that artistic characters have always been important in Allen’s films [1.0%]",
          "(E) illustrate Allen’s obvious affection for the nonartist characters he creates [4.0%]"
        ]}
      ] as ContentBlock[]
    },
     { 
      type: 'accordion', 
      title: 'Question 12: Author Viewpoint',
      content: [
        { type: 'blockquote', text: "**Question:** The author most likely holds which one of the following views?" },
        { type: 'options', items: [
          "(A) Most people who consider themselves to be artists are merely documenting their personal suffering and fobbing it off as art. [4.0%]",
          "(B) The continuing presence of a topic in an artist’s work suggests that the topic is likely an issue in the artist’s personal life. [87.0%] (Correct)",
          "(C) Allen’s film career is unique in that he regularly features unhappy, narcissistic artists as protagonists. [7.0%]",
          "(D) An artist must use his or her own experiences as the source of inspiration for a work in order for that work to be considered truly artistic. [1.0%]",
          "(E) Allen’s films accurately reflect real life in depicting inartistic individuals as happier than artists. [1.0%]"
        ]}
      ] as ContentBlock[]
    },
    { type: 'hr' },
    { 
      type: 'accordion', 
      title: 'Passage: Cosmic Justice (PT-128-S-4-P-4)',
      content: cosmicJusticePassageText,
    },
    { 
      type: 'accordion', 
      title: 'Question 20: Title',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following pairs of titles would be most appropriate for passage A and passage B, respectively?" },
        { type: 'options', items: [
          "(A) “Cosmic Justice Meets Human Limitations”\n“Fairness as Process versus Cosmic Fairness” [87.0%] (Correct)",
          "(B) “Sowell’s Theory of Justice”\n“The Key to Deterrence” [2.0%]",
          "(C) “Just Deserts”\n“Fair and Unfair Disadvantages” [0.0%]",
          "(D) “A Critique of Sowell”\n“Traditional Justice Writ Large” [1.0%]",
          "(E) “The Impossibility of Achieving Cosmic Justice”\n“Fair Trials versus Justice as Impartial Process” [10.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 21: Inference',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following is mentioned in passage B, but not in passage A?" },
        { type: 'options', items: [
          "(A) punishment [7.0%]",
          "(B) trials [88.0%] (Correct)",
          "(C) rewards [2.0%]",
          "(D) legal systems [1.0%]",
          "(E) human limitations [3.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 22: Relationship',
      content: [
        { type: 'blockquote', text: "**Question:** Passage A differs from passage B in that passage A is more" },
        { type: 'options', items: [
          "(A) abstract [79.0%] (Correct)",
          "(B) inflammatory [1.0%]",
          "(C) technical [5.0%]",
          "(D) narrative [10.0%]",
          "(E) adversarial [5.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 23: Analogy',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following is most analogous to the kind of approach both authors criticize?" },
        { type: 'options', items: [
          "(A) A local library charges children lower fines for overdue materials and lost books than it charges adults. [4.0%]",
          "(B) In assigning grades, a teacher takes into account not only written assignments and class performance, but also background factors unique to individual students. [88.0%] (Correct)",
          "(C) In assigning employee parking spaces, management takes into account an employee’s rank within, and years of service to, the company. [3.0%]",
          "(D) An employer with a proven history of age discrimination is forced by a court to hire qualified older employees. [4.0%]",
          "(E) A university admits students based not just on academic achievement, but also on documented extracurricular activities and community service. [2.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 24: Phrase Meaning',
      content: [
        { type: 'blockquote', text: "**Question:** In passage B, which one of the following is an example of “inputs” as that term is used in the second paragraph of passage A?" },
        { type: 'options', items: [
          "(A) fair rules (middle of the first paragraph of passage B) [1.0%]",
          "(B) unjust trial (near the end of the first paragraph of passage B) [1.0%]",
          "(C) impartial processes (end of the first paragraph of passage B) [2.0%]",
          "(D) traumatic childhood (middle of the final paragraph of passage B) [95.0%] (Correct)",
          "(E) innocent people (end of the final paragraph of passage B) [0.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 25: Application',
      content: [
        { type: 'blockquote', text: "**Question:** Passage A most strongly supports which one of the following inferences regarding the example of the murderer in passage B?" },
        { type: 'options', items: [
          "(A) From the perspective of cosmic justice, the murderer cannot be considered responsible for his crime. [1.0%]",
          "(B) Once the jury has convicted the murderer, the judge should be permitted substantial discretion in determining his punishment. [2.0%]",
          "(C) Recognition of our common human fallibility should lead us to err in the direction of leniency toward the murderer. [4.0%]",
          "(D) The extent, if any, to which the murderer’s culpability is mitigated by his childhood is beyond the ability of any judge or jury to determine. [88.0%] (Correct)",
          "(E) The murderer’s childhood must be presumed to have been without influence upon his criminal behavior. [5.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 26: Passage Principle',
      content: [
        { type: 'blockquote', text: "**Question:** The discussion in passage A, but not the discussion in passage B, relies on which one of the following principles?" },
        { type: 'options', items: [
          "(A) One should refrain from action when one lacks complete information. [16.0%]",
          "(B) Whether a punishment is fair matters less than whether it deters crime. [2.0%]",
          "(C) Although we should aim at perfect justice, we should recognize that we cannot attain it. [30.0%]",
          "(D) One should not pass judgment on an action unless one knows all of the factors that influenced it. [7.0%]",
          "(E) If a goal is known to be impossible, then it should not be attempted. [44.0%] (Correct)"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 27: Author Viewpoint',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following is a view advanced by the author of passage A with which the author of passage B would be most likely to agree?" },
        { type: 'options', items: [
          "(A) It is sometimes possible for the legal system to take unmerited disadvantages into account in rendering judgment on people and their actions. [6.0%]",
          "(B) Whether or not cosmic justice is an attainable ideal, human law should strive for it because doing so produces more just legal outcomes. [3.0%]",
          "(C) Impartial legal processes are a better means of achieving cosmic justice than are efforts to address unmerited disadvantages directly. [7.0%]",
          "(D) Human law should be concerned with the consequences of human actions, not with the myriad of factors that influence human actions. [83.0%] (Correct)",
          "(E) Human legal systems can in theory achieve cosmic justice by focusing upon factors that tend to mitigate punishment. [2.0%]"
        ]}
      ] as ContentBlock[]
    },
    { type: 'hr' },
    { 
      type: 'accordion', 
      title: 'Passage: Julia Margaret Cameron (PT-141-S-1-P-2)',
      content: cameronPassageText,
    },
    { 
      type: 'accordion', 
      title: 'Question 8: Main Idea',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following most accurately expresses the main point of the passage?" },
        { type: 'options', items: [
          "(A) The circumstances under which Cameron’s fancy-subject pictures were taken render them unintentionally comical. [3.0%]",
          "(B) The peculiar charm of Cameron’s fancy-subject pictures derives from the viewer’s simultaneous awareness of the fictional scene portrayed and the circumstances of its portrayal. [84.0%] (Correct)",
          "(C) The implicit claim of Cameron’s fancy-subject pictures to comparison with the masterpieces of Western painting is undermined by the obtrusiveness of the sitters. [1.0%]",
          "(D) The most successful of Cameron’s fancy-subject pictures from an aesthetic point of view are those in which the viewer is completely unaware that the sitters are engaged in role playing. [1.0%]",
          "(E) The interest of Cameron’s fancy-subject pictures consists in what they tell us about the sitters and not in the imaginary scenes they portray. [11.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 9: Phrase Function',
      content: [
        { type: 'blockquote', text: "**Question:** The author mentions the props employed in The Passing of Arthur as" },
        { type: 'options', items: [
          "(A) examples of amateurish aspects of the work [85.0%] (Correct)",
          "(B) evidence of the transformative power of theater [4.0%]",
          "(C) testimonies to Cameron’s ingenuity [7.0%]",
          "(D) indications that the work is intended ironically [3.0%]",
          "(E) support for a negative appraisal of the work [1.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 10: Strengthen/Explain',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following, if true, would most help to explain the claim about suspension of disbelief (near the middle of the second paragraph)?" },
        { type: 'options', items: [
          "(A) Sitting for a painting typically takes much longer than sitting for a photograph. [1.0%]",
          "(B) Paintings, unlike photographs, can depict obviously impossible situations. [23.0%]",
          "(C) All of the sitters for a painting do not have to be present at the same time. [2.0%]",
          "(D) A painter can suppress details about a sitter that are at odds with an imaginary persona. [74.0%] (Correct)",
          "(E) Paintings typically bear the stylistic imprint of an artist, school, or period. [0.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 11: Analogy',
      content: [
        { type: 'blockquote', text: "**Question:** Based on the passage, Cameron is most like which one of the following in relation to her fancy-subject pictures?" },
        { type: 'options', items: [
          "(A) a playwright who introduces incongruous elements to preserve an aesthetic distance between characters and audience [6.0%]",
          "(B) a rap artist whose lyrics are designed to subvert the meaning of a song sampled in his recording [2.0%]",
          "(C) a sculptor whose works possess a certain grandeur even though they are clearly constructed out of ordinary objects [70.0%] (Correct)",
          "(D) an architect whose buildings are designed to be as functional as possible [1.0%]",
          "(E) a film director who employs ordinary people as actors in order to give the appearance of a documentary [21.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 12: Author Viewpoint',
      content: [
        { type: 'blockquote', text: "**Question:** Based on the passage, the author would agree with each of the following statements except:" },
        { type: 'options', items: [
          "(A) A less realistic medium can be more conducive to suspension of disbelief than a more realistic medium. [7.0%]",
          "(B) Amateurishness is a positive quality in some works of art. [2.0%]",
          "(C) What might appear to be an incongruity in a narrative photograph can actually enhance its aesthetic value. [3.0%]",
          "(D) We are sometimes aware of both the real and the imaginary persona of an actor in a drama. [5.0%]",
          "(E) A work of art succeeds only to the extent that it realizes the artist’s intentions. [83.0%] (Correct)"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 13: Inference',
      content: [
        { type: 'blockquote', text: "**Question:** The passage provides the most support for inferring that in Cameron’s era" },
        { type: 'options', items: [
          "(A) there was little interest in photographs documenting contemporary life [14.0%]",
          "(B) photography was practiced mainly by wealthy amateurs [3.0%]",
          "(C) publicity stills of actors were coming into vogue [5.0%]",
          "(D) there were no professional artist’s models [8.0%]",
          "(E) the time required to take a picture was substantial [70.0%] (Correct)"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 14: Paragraph Function',
      content: [
        { type: 'blockquote', text: "**Question:** The discussion of suspension of disbelief in the second paragraph serves which one of the following purposes?" },
        { type: 'options', items: [
          "(A) It is the main conclusion of the passage, for which the discussion of Cameron’s fancy-subject pictures serves as a case study. [5.0%]",
          "(B) It introduces a contrast the author uses in characterizing the peculiar nature of our response to Cameron’s fancy-subject pictures. [77.0%] (Correct)",
          "(C) It is the key step in an argument supporting the author’s negative appraisal of the project of narrative photography. [3.0%]",
          "(D) It is used to explain a criticism of Cameron’s fancy-subject pictures that the author shows to be conceptually confused. [5.0%]",
          "(E) It draws a contrast between narrative painting and drama to support the author’s conclusion that Cameron’s fancy-subject pictures are more like the former. [10.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 15: Purpose of Passage',
      content: [
        { type: 'blockquote', text: "**Question:** The main purpose of the passage is" },
        { type: 'options', items: [
          "(A) to chronicle Cameron’s artistic development as a photographer, which culminated in her masterpiece The Passing of Arthur [4.0%]",
          "(B) to argue that the tension between Cameron’s aims and the results she achieved in some of her works enhances the works’ aesthetic value [74.0%] (Correct)",
          "(C) to show that Cameron’s essentially theatrical vision accounts for both the strengths and the weaknesses of her photographic oeuvre [17.0%]",
          "(D) to explain why Cameron’s project of acquiring for photography the prestige accorded to painting was doomed to failure [1.0%]",
          "(E) to defend Cameron’s masterpiece The Passing of Arthur against its detractors by showing that it transcends the homely details of its setting [4.0%]"
        ]}
      ] as ContentBlock[]
    },
    { type: 'hr' },
    { 
      type: 'accordion', 
      title: 'Passage: Advertising Critique (PT-141-S-1-P-3)',
      content: advertisingPassageText,
    },
    { 
      type: 'accordion', 
      title: 'Question 16: Main Idea',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following most accurately expresses the main point of the passage?" },
        { type: 'options', items: [
          "(A) Advertising has greater social value than Marcusians have supposed, because it is both an effective means of informing consumers and often an intrinsically entertaining medium of mass communication. [1.0%]",
          "(B) Even if, as Marcusians have argued, there is a theoretical difference between real and false needs, that difference is obscured in practice by the relationship of consumers to the forces of persuasion in profit-motivated, consumer-oriented societies. [4.0%]",
          "(C) Marcusian arguments regarding advertisers’ creation of false needs are mistaken, because individuals are able to make autonomous decisions regarding their needs and are even able to use the elements of mass market culture to achieve genuine fulfillment. [78.0%] (Correct)",
          "(D) Critics of advertising typically focus on the development of false needs in the consumer and do not fully consider the ability of people to make independent choices by distinguishing their own real needs from the apparent needs that advertising induces. [15.0%]",
          "(E) The problematic distinction that Marcusians have drawn between real and false needs provides an inadequate basis for their attacks on advertising, because the distinction overlooks consumers’ physical and psychological needs. [2.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 17: Inference',
      content: [
        { type: 'blockquote', text: "**Question:** The author states that Marcuse believed that advertisers" },
        { type: 'options', items: [
          "(A) base many of their manipulative strategies on psychological research findings [3.0%]",
          "(B) appeal to people’s real needs in order to create false needs [93.0%] (Correct)",
          "(C) are restricted to a degree by regulations prohibiting misinformation [2.0%]",
          "(D) exaggerate the consumer’s need for independent decision-making [1.0%]",
          "(E) deny that the needs they create in people are less real than other needs [2.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 18: Paragraph Function',
      content: [
        { type: 'blockquote', text: "**Question:** The main function of the first paragraph is to" },
        { type: 'options', items: [
          "(A) summarize the political and economic context from which Marcusian critiques of advertising arise [5.0%]",
          "(B) outline the mechanisms by which false needs originate in mass market culture [4.0%]",
          "(C) evaluate the psychological processes by which the manipulative techniques of mass market advertising influence individuals [2.0%]",
          "(D) describe the prevailing views among contemporary critics of advertising and categorize Marcuse’s theories in relation to those views [28.0%]",
          "(E) describe Marcusian views regarding mass market manipulation and indicate their role in certain criticisms of advertising [60.0%] (Correct)"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 19: Inference',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following is a claim that the author attributes to Marcuse?" },
        { type: 'options', items: [
          "(A) In modern society, advertising helps lead people to think that they are satisfied. [45.0%] (Correct)",
          "(B) Modern societies differ from earlier societies in that they fail to satisfy basic physical needs. [1.0%]",
          "(C) It is impossible to draw any meaningful distinction between real and false psychological needs in modern society. [29.0%]",
          "(D) Advertising in modern society has sometimes become a tool of oppression working to the benefit of totalitarian political systems. [4.0%]",
          "(E) Advertising exploits basic human needs by deriving from them certain secondary needs which, though they become real needs, subtly work to the detriment of consumers. [22.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 20: Phrase Meaning',
      content: [
        { type: 'blockquote', text: "**Question:** By the term “forces of persuasion\" (last sentence of the third paragraph), the author most probably refers to" },
        { type: 'options', items: [
          "(A) intentionally dishonest claims that some theorists argue are common in advertising [10.0%]",
          "(B) innate, instinctual drives that some theorists say are fundamental to human behavior [7.0%]",
          "(C) emotional pressures that some theorists claim are exerted over individuals by society as a whole [16.0%]",
          "(D) subtle practices of social indoctrination that some theorists say are sponsored by the state [1.0%]",
          "(E) manipulative influences that some theorists say go unrecognized by those affected by them [65.0%] (Correct)"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 21: Complete the Passage',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following sentences would most logically complete the passage?" },
        { type: 'options', items: [
          "(A) Therefore, while in principle there might be grounds for holding that advertising is detrimental to society, the Marcusian critique does not provide such grounds. [57.0%] (Correct)",
          "(B) Therefore, although Marcusian claims about advertising are rationally justified, the mistake of many recent critics of advertising is in their use of these claims for political gain. [1.0%]",
          "(C) Therefore, any shift in basic assumptions required to correct the abuses of advertising will require a change in the perception of human nature held by corporate leaders. [3.0%]",
          "(D) Therefore, while emphasizing only detrimental social aspects of advertising, Marcusians have failed to consider that such aspects are clearly outweighed by numerous social benefits. [13.0%]",
          "(E) Therefore, the Marcusian critique of advertising is mistaken except in its claim that advertisers exert economic power over those few people who are unable or unwilling to distinguish real from false needs. [27.0%]"
        ]}
      ] as ContentBlock[]
    },
    { type: 'hr' },
    { 
      type: 'accordion', 
      title: 'Passage: Property Justice (PT-141-S-1-P-4)',
      content: propertyJusticePassageText,
    },
    { 
      type: 'accordion', 
      title: 'Question 22: Passage Purpose',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following most accurately describes the main purpose for which passage A was written and the main purpose for which passage B was written?" },
        { type: 'options', items: [
          "(A) Passage A: to propose a solution to a moral problem\nPassage B: to criticize a proposed solution to a moral problem [3.0%]",
          "(B) Passage A: to sketch a general outline of a branch of moral theory\nPassage B: to give a particular moral analysis of a real case [64.0%] (Correct)",
          "(C) Passage A: to spell out the details of two fundamental principles\nPassage B: to examine a case that exemplifies a moral ideal [28.0%]",
          "(D) Passage A: to argue for a particular moral ideal\nPassage B: to question the assumptions of a moral theory [3.0%]",
          "(E) Passage A: to advocate the use of certain moral principles\nPassage B: to provide a counterexample to some widely held moral principles [2.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 23: Inference',
      content: [
        { type: 'blockquote', text: "**Question:** Both passages explicitly mention which one of the following?" },
        { type: 'options', items: [
          "(A) transfer of property from one owner to another [62.0%] (Correct)",
          "(B) a legal basis for recovery of property [13.0%]",
          "(C) entitlement to property in a wholly just world [8.0%]",
          "(D) practicability of rectification of past injustice [16.0%]",
          "(E) injustice committed as part of an invasion [2.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 24: Relationship',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following is true of the relationship between passage A and the second paragraph of passage B?" },
        { type: 'options', items: [
          "(A) The second paragraph of passage B attempts to develop a broader version of the theory presented in passage A. [3.0%]",
          "(B) The second paragraph of passage B purports to state facts that bolster the argument made in passage A. [7.0%]",
          "(C) The argument in the second paragraph of passage B is structurally parallel to the argument in passage A, but the subject matter of the two is different. [3.0%]",
          "(D) Passage A presents a theory that tends to support the argument presented in the second paragraph of passage B. [83.0%] (Correct)",
          "(E) The second paragraph of passage B attempts to undermine the theory presented in passage A. [3.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 25: Analogy',
      content: [
        { type: 'blockquote', text: "**Question:** Based on what can be inferred from their titles, the relationship between which one of the following pairs of documents is most analogous to the relationship between passage A and passage B?" },
        { type: 'options', items: [
          "(A) “Card Counting for Everyone: A Can’t-Lose System for Beating the Dealer”\n“The Evils of Gambling” [2.0%]",
          "(B) “Mayor McConnell Is Unfit to Serve”\n“Why Mayor McConnell Should be Reelected” [2.0%]",
          "(C) “Pruning Fruit Trees: A Guide for the Novice”\n“Easy Recipes for Beginning Cooks” [3.0%]",
          "(D) “Notable Failures of the STORM Weather Forecasting Model”\n“Meteorologists’ Best Tool Yet: The STORM Forecasting Model” [5.0%]",
          "(E) “Fundamentals of Building Construction and Repair”\n“Engineering Report: The Repairs Needed by the Thales Building” [88.0%] (Correct)"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 26: Author Viewpoint',
      content: [
        { type: 'blockquote', text: "**Question:** The author of passage A would be most likely to characterize the purpose of the Indian Nonintercourse Act as which one of the following?" },
        { type: 'options', items: [
          "(A) legitimization of actual property holdings during the eighteenth century [3.0%]",
          "(B) clarification of existing laws regarding transfer of property [4.0%]",
          "(C) assurance of conformity to the principle of justice in acquisition [11.0%]",
          "(D) prevention of violations of the principle of justice in transfer [61.0%] (Correct)",
          "(E) implementation of a principle of rectification [21.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 27: Approach',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following most accurately describes the difference in approach taken by passage A as compared to passage B?" },
        { type: 'options', items: [
          "(A) Passage A espouses a general view without providing details, while passage B sketches an argument that it does not necessarily endorse. [31.0%] (Correct)",
          "(B) Passage A argues for the superiority of one view over competing views, while passage B considers only a single view. [12.0%]",
          "(C) Passage A invokes commonly held principles to support a policy recommendation, while passage B relies on the views of established authorities to support its claims. [34.0%]",
          "(D) Passage A briefly states a view and then provides an argument for it, while passage B provides a detailed statement of a view but no argument. [19.0%]",
          "(E) Passage A provides an argument in support of a view, while passage B attempts to undermine a view. [4.0%]"
        ]}
      ] as ContentBlock[]
    },
  ]
};