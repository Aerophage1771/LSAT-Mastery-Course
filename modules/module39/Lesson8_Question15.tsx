import { Lesson } from '../../types';

const passageText = `Joy Kogawa’s Obasan is an account of a Japanese-Canadian family’s experiences during World War II. The events are seen from the viewpoint of a young girl who watches her family disintegrate as it undergoes the relocation that occurred in both Canada and the United States. Although the experience depicted in Obasan is mainly one of dislocation, Kogawa employs subtle techniques that serve to emphasize her major character’s heroism and to critique the majority culture. The former end is achieved through the novel’s form and the latter through the symbols it employs.

The form of the novel parallels the three-stage structure noted by anthropologists in their studies of rites of passage. According to these anthropologists, a rite of passage begins with separation from a position of security in a highly structured society; proceeds to alienation in a deathlike state where one is stripped of status, property, and rank; and concludes with reintegration into society accompanied by a heightened status gained as a result of the second stage. The process thus has the effect of transforming a society’s victim into a hero. The first eleven chapters of Obasan situate the young protagonist Naomi Nakane in a close-knit, securely placed family within Vancouver society. Chapters 12–32 chronicle the fall into alienation, when Naomi’s family is dislodged from its structured social niche and removed from the city into work camps or exile. Separated from her parents, Naomi follows her aunt Aya Obasan to the ghost town of Slocan, where Naomi joins the surrogate family of her uncle and aunt. In chapters 33–39 this surrogate family nurtures Naomi as she develops toward a final integration with the larger society and with herself: as an adult, when she receives a bundle of family documents and letters from her aunt, Naomi breaks through the personal and cultural screens of silence and secretiveness that have enshrouded her past, and reconciles herself with her history.

Kogawa’s use of motifs drawn from Christian rituals and symbols forms a subtle critique of the professed ethics of the majority culture that has shunned Naomi. In one example of such symbolism, Naomi’s reacquaintance with her past is compared with the biblical story of turning stone into bread. The bundle of documents—which Kogawa refers to as “stone-hard facts”—brings Naomi to the recognition of her country’s abuse of her people. But implicit in these hard facts, Kogawa suggests, is also the “bread” of a spiritual sustenance that will allow Naomi to affirm the durability of her people and herself. Through the careful deployment of structure and symbol, Kogawa thus manages to turn Naomi’s experience—and by extension the wartime experiences of many Japanese Canadians—into a journey of heroic transformation and a critique of the majority culture.`;

export const Lesson8_Question15: Lesson = {
  id: "39-8",
  title: "Question 15: Author's Values",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-119-S-1-P-2)', content: passageText },
    { type: 'h3', text: "Question 15: Author's Values Breakdown (PT-119-S-1-P-2-Q-15)" },
    { type: 'blockquote', text: "**Question:** Based on the passage, which one of the following aspects of Kogawa’s work does the author of the passage appear to value most highly?" },
    { type: 'options', items: [
      "(A) her willingness to make political statements",
      "(B) her imaginative development of characters",
      "(C) her subtle use of literary techniques (Correct)",
      "(D) her knowledge of Christian rituals and symbols",
      "(E) her objectivity in describing Naomi’s tragic life"
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "This author's-values question asks what the critic most admires. Across the passage, the praise is directed at craft: how Kogawa engineers effects through structure and symbolism. The credited choice therefore names subtle literary technique, while wrong choices are too broad, too narrow, or focused on content rather than method." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "The setup says Kogawa \"employs subtle techniques,\" and the close confirms value focus: \"through the careful deployment of structure and symbol.\" Those lines point to technique as the primary object of praise." },
    { 
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        { title: "(A) her willingness to make political statements", text: "The passage certainly acknowledges the novel's political critique. But is the author's praise for the mere *willingness* to be political? No. The praise is for the *subtle* and *skillful* way the critique is delivered through symbolism. The value is placed on the craft, not just the courage.", badge: "Incorrect", badgeColor: "red" },
        { title: "(B) her imaginative development of characters", text: "The passage discusses Naomi's transformation into a hero. But does it praise Kogawa for her general \"imaginative development of characters\"? The author is much more specific. They attribute Naomi's heroic arc to a very particular literary device: the novel's three-part structure that mimics a rite of passage. Again, the praise is for the specific technique, not a general quality like character development.", badge: "Incorrect", badgeColor: "red" },
        { title: "(C) her subtle use of literary techniques", text: "Let's check this against our prediction. This seems to hit the nail on the head. The author's entire analysis is a deep dive into Kogawa's \"subtle techniques\"—specifically form and symbolism. The passage begins and ends by praising this aspect of her work. This seems to be the exact focus of the author's admiration.", badge: "Correct", badgeColor: "green" },
        { title: "(D) her knowledge of Christian rituals and symbols", text: "This is a classic \"too narrow\" trap. The author *does* discuss her use of Christian symbols, but that's only *one* of the two major techniques they analyze. Answering this would be to ignore the entire second paragraph, which is dedicated to the novel's structure.", badge: "Incorrect", badgeColor: "red" },
        { title: "(E) her objectivity in describing Naomi’s tragic life", text: "Does the author praise Kogawa for being \"objective\"? No. In fact, the argument is the opposite. The author praises Kogawa for shaping the narrative to \"emphasize her major character's heroism\" and transform a \"victim into a hero.\" This is a very specific, subjective shaping of the story, not an objective, neutral reporting of events.", badge: "Incorrect", badgeColor: "red" }
      ]
    }
  ]
};
