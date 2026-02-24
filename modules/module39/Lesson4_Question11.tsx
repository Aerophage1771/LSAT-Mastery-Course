import { Lesson } from '../../types';

const passageText = `Joy Kogawa’s Obasan is an account of a Japanese-Canadian family’s experiences during World War II. The events are seen from the viewpoint of a young girl who watches her family disintegrate as it undergoes the relocation that occurred in both Canada and the United States. Although the experience depicted in Obasan is mainly one of dislocation, Kogawa employs subtle techniques that serve to emphasize her major character’s heroism and to critique the majority culture. The former end is achieved through the novel’s form and the latter through the symbols it employs.

The form of the novel parallels the three-stage structure noted by anthropologists in their studies of rites of passage. According to these anthropologists, a rite of passage begins with separation from a position of security in a highly structured society; proceeds to alienation in a deathlike state where one is stripped of status, property, and rank; and concludes with reintegration into society accompanied by a heightened status gained as a result of the second stage. The process thus has the effect of transforming a society’s victim into a hero. The first eleven chapters of Obasan situate the young protagonist Naomi Nakane in a close-knit, securely placed family within Vancouver society. Chapters 12–32 chronicle the fall into alienation, when Naomi’s family is dislodged from its structured social niche and removed from the city into work camps or exile. Separated from her parents, Naomi follows her aunt Aya Obasan to the ghost town of Slocan, where Naomi joins the surrogate family of her uncle and aunt. In chapters 33–39 this surrogate family nurtures Naomi as she develops toward a final integration with the larger society and with herself: as an adult, when she receives a bundle of family documents and letters from her aunt, Naomi breaks through the personal and cultural screens of silence and secretiveness that have enshrouded her past, and reconciles herself with her history.

Kogawa’s use of motifs drawn from Christian rituals and symbols forms a subtle critique of the professed ethics of the majority culture that has shunned Naomi. In one example of such symbolism, Naomi’s reacquaintance with her past is compared with the biblical story of turning stone into bread. The bundle of documents—which Kogawa refers to as “stone-hard facts”—brings Naomi to the recognition of her country’s abuse of her people. But implicit in these hard facts, Kogawa suggests, is also the “bread” of a spiritual sustenance that will allow Naomi to affirm the durability of her people and herself. Through the careful deployment of structure and symbol, Kogawa thus manages to turn Naomi’s experience—and by extension the wartime experiences of many Japanese Canadians—into a journey of heroic transformation and a critique of the majority culture.`;

export const Lesson4_Question11: Lesson = {
  id: "39-4",
  title: "Question 11: Inference (Heroism)",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-119-S-1-P-2)', content: passageText },
    { type: 'h3', text: "Question 11: Inference (Heroism) Breakdown (PT-119-S-1-P-2-Q-11)" },
    { type: 'blockquote', text: "**Question:** It can be inferred that the heroism Naomi gains in the course of Obasan is manifested in her" },
    { type: 'options', items: [
      "(A) reconciliation with her past (Correct)",
      "(B) careful deployment of structure and symbol",
      "(C) relationship with her surrogate family",
      "(D) renewal of her religious beliefs",
      "(E) denunciation of the majority culture"
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "This inference hinges on where the passage says heroism is manifested. The rites-of-passage framework defines heroism as the endpoint of reintegration, and Naomi's endpoint is described as personal reconciliation with her past. So the credited choice must name that final-state outcome, not Kogawa's technique or a side theme." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "The process \"has the effect of transforming a society's victim into a hero,\" and Naomi reaches that culmination when she \"reconciles herself with her history.\"" },
    { 
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        { title: "(A) reconciliation with her past", text: "Does the text support this? Yes, absolutely and directly. The passage says the heroic transformation culminates when Naomi \"reconciles herself with her history.\" This is a perfect match for the evidence we found.", badge: "Correct", badgeColor: "green" },
        { title: "(B) careful deployment of structure and symbol", text: "This is a classic trap that confuses the author with the character. Who is carefully deploying structure and symbol? The author of the passage tells us it's the novelist, **Joy Kogawa**. Naomi is the character *experiencing* the story; she isn't the one writing it.", badge: "Incorrect", badgeColor: "red" },
        { title: "(C) relationship with her surrogate family", text: "Where does her relationship with her surrogate family fit into the three-stage process? The passage places it squarely in Stage 2, the \"alienation\" phase. It says she joins the surrogate family in Slocan, and that this family \"nurtures Naomi as she develops **toward** a final integration.\" So, the surrogate family is a crucial part of her journey, but her heroism is the *result* of that journey, which manifests in the final stage of reconciliation. This choice points to the process, not the final heroic act.", badge: "Incorrect", badgeColor: "red" },
        { title: "(D) renewal of her religious beliefs", text: "The passage mentions \"Christian rituals and symbols,\" but in what context? It's a tool the *author*, Kogawa, uses to critique the majority culture. The passage never says anything about Naomi's personal religious beliefs or any kind of renewal. This is unsupported by the text.", badge: "Incorrect", badgeColor: "red" },
        { title: "(E) denunciation of the majority culture", text: "This is another subtle but important distinction. The passage says the *novel* critiques the majority culture. But is Naomi's heroic act a \"denunciation\"? The passage describes her heroism as something internal and personal: she \"breaks through... silence,\" \"reconciles herself with her history,\" and achieves \"integration... with herself.\" It's an act of healing and understanding, not an act of outward political denunciation.", badge: "Incorrect", badgeColor: "red" }
      ]
    }
  ]
};
