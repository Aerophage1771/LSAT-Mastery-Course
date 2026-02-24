import { Lesson } from '../../types';

const passageText = `Joy Kogawa’s Obasan is an account of a Japanese-Canadian family’s experiences during World War II. The events are seen from the viewpoint of a young girl who watches her family disintegrate as it undergoes the relocation that occurred in both Canada and the United States. Although the experience depicted in Obasan is mainly one of dislocation, Kogawa employs subtle techniques that serve to emphasize her major character’s heroism and to critique the majority culture. The former end is achieved through the novel’s form and the latter through the symbols it employs.

The form of the novel parallels the three-stage structure noted by anthropologists in their studies of rites of passage. According to these anthropologists, a rite of passage begins with separation from a position of security in a highly structured society; proceeds to alienation in a deathlike state where one is stripped of status, property, and rank; and concludes with reintegration into society accompanied by a heightened status gained as a result of the second stage. The process thus has the effect of transforming a society’s victim into a hero. The first eleven chapters of Obasan situate the young protagonist Naomi Nakane in a close-knit, securely placed family within Vancouver society. Chapters 12–32 chronicle the fall into alienation, when Naomi’s family is dislodged from its structured social niche and removed from the city into work camps or exile. Separated from her parents, Naomi follows her aunt Aya Obasan to the ghost town of Slocan, where Naomi joins the surrogate family of her uncle and aunt. In chapters 33–39 this surrogate family nurtures Naomi as she develops toward a final integration with the larger society and with herself: as an adult, when she receives a bundle of family documents and letters from her aunt, Naomi breaks through the personal and cultural screens of silence and secretiveness that have enshrouded her past, and reconciles herself with her history.

Kogawa’s use of motifs drawn from Christian rituals and symbols forms a subtle critique of the professed ethics of the majority culture that has shunned Naomi. In one example of such symbolism, Naomi’s reacquaintance with her past is compared with the biblical story of turning stone into bread. The bundle of documents—which Kogawa refers to as “stone-hard facts”—brings Naomi to the recognition of her country’s abuse of her people. But implicit in these hard facts, Kogawa suggests, is also the “bread” of a spiritual sustenance that will allow Naomi to affirm the durability of her people and herself. Through the careful deployment of structure and symbol, Kogawa thus manages to turn Naomi’s experience—and by extension the wartime experiences of many Japanese Canadians—into a journey of heroic transformation and a critique of the majority culture.`;

export const Lesson7_Question14: Lesson = {
  id: "39-7",
  title: "Question 14: Inference (Society)",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-119-S-1-P-2)', content: passageText },
    { type: 'h3', text: "Question 14: Inference (Society) Breakdown (PT-119-S-1-P-2-Q-14)" },
    { type: 'blockquote', text: "**Question:** The passage suggests that Joy Kogawa believes which one of the following about the society that shuns Naomi?" },
    { type: 'options', items: [
      "(A) It discouraged its citizens from seeking out their heritage.",
      "(B) It endeavored to thwart its citizens’ attempts at heroic transformation.",
      "(C) It violated its own supposed religious ethics by doing so. (Correct)",
      "(D) It prohibited its citizens from participating in rites of passage.",
      "(E) It demanded that loyalty to the government replace loyalty to the family."
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "The inference turns on the contrast between what the majority culture professes and what it does. The passage says Kogawa's Christian motifs function as a critique of professed ethics in a society that shuns Naomi, so the credited answer must express ethical inconsistency rather than a new policy claim." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "The anchor phrase is \"a subtle critique of the professed ethics of the majority culture that has shunned Naomi,\" which supports a hypocrisy inference." },
    { 
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        { title: "(A) It discouraged its citizens from seeking out their heritage.", text: "Does the passage say that the majority society discouraged people from seeking their heritage? No. It says that *Naomi* had to break through \"screens of silence and secretiveness\" to reconcile with her past, but it doesn't say the majority society actively discouraged this for its *own* citizens. This is not directly supported.", badge: "Incorrect", badgeColor: "red" },
        { title: "(B) It endeavored to thwart its citizens’ attempts at heroic transformation.", text: "The passage states that the novel's structure *transforms* Naomi into a hero. It doesn't say that the society's goal was to *prevent* heroic transformation. The society's actions caused trauma, but the society wasn't actively trying to stop her from becoming a hero; it was just causing suffering.", badge: "Incorrect", badgeColor: "red" },
        { title: "(C) It violated its own supposed religious ethics by doing so.", text: "Let's check this against our analysis. Kogawa uses Christian symbols to critique the \"professed ethics of the majority culture.\" This means Kogawa is implying that the society claimed to follow certain religious ethics (Christian ones) but then acted in a way that contradicted those ethics (by shunning Naomi). This perfectly matches our inference.", badge: "Correct", badgeColor: "green" },
        { title: "(D) It prohibited its citizens from participating in rites of passage.", text: "The passage uses the idea of \"rites of passage\" as an analytical tool to describe the *novel's structure*. It doesn't suggest that the majority society actually outlawed or prevented people from participating in real-world rituals. This is a misinterpretation of how the term is used.", badge: "Incorrect", badgeColor: "red" },
        { title: "(E) It demanded that loyalty to the government replace loyalty to the family.", text: "While Naomi's family was relocated and experienced government actions, the passage doesn't state that the society *demanded* a replacement of family loyalty with government loyalty. The focus is on shunning and hypocrisy.", badge: "Incorrect", badgeColor: "red" }
      ]
    }
  ]
};
