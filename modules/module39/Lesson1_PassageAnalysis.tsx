import { Lesson } from '../../types';

const passageText = `Joy Kogawa’s Obasan is an account of a Japanese-Canadian family’s experiences during World War II. The events are seen from the viewpoint of a young girl who watches her family disintegrate as it undergoes the relocation that occurred in both Canada and the United States. Although the experience depicted in Obasan is mainly one of dislocation, Kogawa employs subtle techniques that serve to emphasize her major character’s heroism and to critique the majority culture. The former end is achieved through the novel’s form and the latter through the symbols it employs.

The form of the novel parallels the three-stage structure noted by anthropologists in their studies of rites of passage. According to these anthropologists, a rite of passage begins with separation from a position of security in a highly structured society; proceeds to alienation in a deathlike state where one is stripped of status, property, and rank; and concludes with reintegration into society accompanied by a heightened status gained as a result of the second stage. The process thus has the effect of transforming a society’s victim into a hero. The first eleven chapters of Obasan situate the young protagonist Naomi Nakane in a close-knit, securely placed family within Vancouver society. Chapters 12–32 chronicle the fall into alienation, when Naomi’s family is dislodged from its structured social niche and removed from the city into work camps or exile. Separated from her parents, Naomi follows her aunt Aya Obasan to the ghost town of Slocan, where Naomi joins the surrogate family of her uncle and aunt. In chapters 33–39 this surrogate family nurtures Naomi as she develops toward a final integration with the larger society and with herself: as an adult, when she receives a bundle of family documents and letters from her aunt, Naomi breaks through the personal and cultural screens of silence and secretiveness that have enshrouded her past, and reconciles herself with her history.

Kogawa’s use of motifs drawn from Christian rituals and symbols forms a subtle critique of the professed ethics of the majority culture that has shunned Naomi. In one example of such symbolism, Naomi’s reacquaintance with her past is compared with the biblical story of turning stone into bread. The bundle of documents—which Kogawa refers to as “stone-hard facts”—brings Naomi to the recognition of her country’s abuse of her people. But implicit in these hard facts, Kogawa suggests, is also the “bread” of a spiritual sustenance that will allow Naomi to affirm the durability of her people and herself. Through the careful deployment of structure and symbol, Kogawa thus manages to turn Naomi’s experience—and by extension the wartime experiences of many Japanese Canadians—into a journey of heroic transformation and a critique of the majority culture.`;

export const Lesson1_PassageAnalysis: Lesson = {
  id: "39-1",
  title: "Passage Analysis: Obasan",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-119-S-1-P-2)', content: passageText },
    { type: 'h3', text: "Passage Analysis: Obasan (PT-119-S-1-P-2)" },
    { type: 'paragraph', text: "This passage presents a literary-critical argument about *Obasan*. Its thesis is that Kogawa's novel does more than depict wartime suffering: it uses form to construct heroism and symbolism to critique dominant social power." },
    { type: 'paragraph', text: "Read for function, not just plot summary. Paragraph 1 states the two-part thesis, Paragraph 2 develops the structural argument through the rite-of-passage framework, and Paragraph 3 shows how symbolic language extends the political critique." },
    { type: 'hr' },
    { type: 'h4', text: "Paragraph 1: Thesis and Analytical Roadmap" },
    { type: 'paragraph', text: "The opening paragraph defines the novel's context and quickly moves to an interpretive claim. Instead of treating dislocation as the endpoint, the critic argues that Kogawa uses distinct techniques to produce distinct rhetorical effects." },
    { type: 'paragraph', text: "This paragraph functions as a roadmap for the rest of the passage by pairing each technique with a specific argumentative purpose." },
    { 
      type: 'breakdown',
      labels: { title: 'Technique', text: 'Goal' },
      items: [
        { title: "The Novel's Form (Structure)", text: "To emphasize the main character's **heroism**.", badge: "Technique 1", badgeColor: "indigo" },
        { title: "The Use of Symbols", text: "To **critique** the majority culture that oppressed her family.", badge: "Technique 2", badgeColor: "blue" }
      ]
    },
    { type: 'h4', text: "Paragraph 2: Heroism Through Narrative Form" },
    { type: 'paragraph', text: "The second paragraph supports the first branch of the thesis by importing the anthropological rite-of-passage model. The critic argues that *Obasan* deliberately mirrors this sequence to reframe victimhood as transformation." },
    { type: 'paragraph', text: "The staged movement through separation, alienation, and reintegration is not background detail; it is the structural mechanism that turns Naomi into a heroic figure." },
    { 
      type: 'list', 
      ordered: true,
      items: [
        "**Separation:** You start in a safe, structured society and are removed from it.",
        "**Alienation:** You enter a \"deathlike state\" where you lose everything—status, property, identity. This is the trial or the ordeal.",
        "**Reintegration:** You return to society, but you're not the same. You've been transformed by the ordeal and now have a \"heightened status.\""
      ] 
    },
    { type: 'paragraph', text: "The critic then maps Naomi's arc to this model to demonstrate that form itself carries argument. The chapter progression is used as evidence that the text is engineered to depict recovery and moral enlargement, not merely historical injury." },

    { type: 'h4', text: "Paragraph 3: Symbolic Critique and Cultural Reversal" },
    { type: 'paragraph', text: "The final paragraph develops the second branch of the thesis: symbolism as critique. Christian motifs are repurposed to expose the ethical failure of the dominant culture that excluded Naomi's community." },
    { type: 'paragraph', text: "The stone-to-bread motif carries both historical and interpretive force. \"Stone-hard facts\" represent the weight of abuse, while \"bread\" represents meaning recovered from that history. The critic's point is that Kogawa turns imposed suffering into interpretive agency." },
    { type: 'paragraph', text: "The passage closes by showing that structure and symbolism are mutually reinforcing: one narrates transformation, the other interprets its political stakes." },
    
    { type: 'callout', title: "Summary of the Argument", variant: "summary", text: "The critic argues that *Obasan* advances a two-part strategy: its rite-of-passage form transforms Naomi from victim to agent, and its religious symbolism critiques the society responsible for her community's dispossession. The passage is organized to prove that literary technique itself carries historical and political argument." }
  ]
};
