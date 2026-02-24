import { Lesson } from '../../types';

const passageText = `Joy Kogawa’s Obasan is an account of a Japanese-Canadian family’s experiences during World War II. The events are seen from the viewpoint of a young girl who watches her family disintegrate as it undergoes the relocation that occurred in both Canada and the United States. Although the experience depicted in Obasan is mainly one of dislocation, Kogawa employs subtle techniques that serve to emphasize her major character’s heroism and to critique the majority culture. The former end is achieved through the novel’s form and the latter through the symbols it employs.

The form of the novel parallels the three-stage structure noted by anthropologists in their studies of rites of passage. According to these anthropologists, a rite of passage begins with separation from a position of security in a highly structured society; proceeds to alienation in a deathlike state where one is stripped of status, property, and rank; and concludes with reintegration into society accompanied by a heightened status gained as a result of the second stage. The process thus has the effect of transforming a society’s victim into a hero. The first eleven chapters of Obasan situate the young protagonist Naomi Nakane in a close-knit, securely placed family within Vancouver society. Chapters 12–32 chronicle the fall into alienation, when Naomi’s family is dislodged from its structured social niche and removed from the city into work camps or exile. Separated from her parents, Naomi follows her aunt Aya Obasan to the ghost town of Slocan, where Naomi joins the surrogate family of her uncle and aunt. In chapters 33–39 this surrogate family nurtures Naomi as she develops toward a final integration with the larger society and with herself: as an adult, when she receives a bundle of family documents and letters from her aunt, Naomi breaks through the personal and cultural screens of silence and secretiveness that have enshrouded her past, and reconciles herself with her history.

Kogawa’s use of motifs drawn from Christian rituals and symbols forms a subtle critique of the professed ethics of the majority culture that has shunned Naomi. In one example of such symbolism, Naomi’s reacquaintance with her past is compared with the biblical story of turning stone into bread. The bundle of documents—which Kogawa refers to as “stone-hard facts”—brings Naomi to the recognition of her country’s abuse of her people. But implicit in these hard facts, Kogawa suggests, is also the “bread” of a spiritual sustenance that will allow Naomi to affirm the durability of her people and herself. Through the careful deployment of structure and symbol, Kogawa thus manages to turn Naomi’s experience—and by extension the wartime experiences of many Japanese Canadians—into a journey of heroic transformation and a critique of the majority culture.`;

export const Lesson5_Question12: Lesson = {
  id: "39-5",
  title: "Question 12: Detail Hunt",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-119-S-1-P-2)', content: passageText },
    { type: 'h3', text: "Question 12: Detail Hunt Breakdown (PT-119-S-1-P-2-Q-12)" },
    { type: 'blockquote', text: "**Question:** According to the anthropologists cited by the author, rites of passage are best described by which one of the following sequences of stages?" },
    { type: 'options', items: [
      "(A) alienation, dislocation, integration",
      "(B) separation, alienation, reintegration (Correct)",
      "(C) integration, alienation, disintegration",
      "(D) dislocation, reconciliation, reintegration",
      "(E) disintegration, transformation, reintegration"
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "This is a direct line-reference question. The answer comes from the sentence that explicitly presents the anthropologists' sequence. The credited option keeps both the exact terms and the exact order; wrong options either reorder stages, swap in story vocabulary, or convert an outcome into a stage name." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "The sequence is given verbatim: \"begins with separation... proceeds to alienation... concludes with reintegration.\" The passage separately says transformation is the effect of this process, not a stage label." },
    { 
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        { title: "(A) alienation, dislocation, integration", text: "This is incorrect. It starts with \"alienation,\" which the passage clearly states is the second stage. It also uses the word \"dislocation,\" which is not one of the specific anthropological terms used for the stages.", badge: "Incorrect", badgeColor: "red" },
        { title: "(B) separation, alienation, reintegration", text: "Let's check this against our list. 1. Separation? Yes. 2. Alienation? Yes. 3. Reintegration? Yes. The terms are correct, and the order is correct. This is a perfect match.", badge: "Correct", badgeColor: "green" },
        { title: "(C) integration, alienation, disintegration", text: "This is incorrect. It starts with \"integration,\" which the passage says is the final stage. It also uses \"disintegration,\" which is not one of the three anthropological terms.", badge: "Incorrect", badgeColor: "red" },
        { title: "(D) dislocation, reconciliation, reintegration", text: "This choice uses words that are relevant to the story (\"dislocation,\" \"reconciliation\"), but they are not the specific, technical terms that the passage attributes to the anthropologists. The question is asking for the anthropologists' terminology.", badge: "Incorrect", badgeColor: "red" },
        { title: "(E) disintegration, transformation, reintegration", text: "This is also incorrect. It uses \"disintegration,\" which is not one of the terms. It also lists \"transformation\" as a stage. The passage is very clear that transformation is the *effect* or *result* of the three-stage process, not a stage itself.", badge: "Incorrect", badgeColor: "red" }
      ]
    }
  ]
};
