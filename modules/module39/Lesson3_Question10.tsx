import { Lesson } from '../../types';

const passageText = `Joy Kogawa’s Obasan is an account of a Japanese-Canadian family’s experiences during World War II. The events are seen from the viewpoint of a young girl who watches her family disintegrate as it undergoes the relocation that occurred in both Canada and the United States. Although the experience depicted in Obasan is mainly one of dislocation, Kogawa employs subtle techniques that serve to emphasize her major character’s heroism and to critique the majority culture. The former end is achieved through the novel’s form and the latter through the symbols it employs.

The form of the novel parallels the three-stage structure noted by anthropologists in their studies of rites of passage. According to these anthropologists, a rite of passage begins with separation from a position of security in a highly structured society; proceeds to alienation in a deathlike state where one is stripped of status, property, and rank; and concludes with reintegration into society accompanied by a heightened status gained as a result of the second stage. The process thus has the effect of transforming a society’s victim into a hero. The first eleven chapters of Obasan situate the young protagonist Naomi Nakane in a close-knit, securely placed family within Vancouver society. Chapters 12–32 chronicle the fall into alienation, when Naomi’s family is dislodged from its structured social niche and removed from the city into work camps or exile. Separated from her parents, Naomi follows her aunt Aya Obasan to the ghost town of Slocan, where Naomi joins the surrogate family of her uncle and aunt. In chapters 33–39 this surrogate family nurtures Naomi as she develops toward a final integration with the larger society and with herself: as an adult, when she receives a bundle of family documents and letters from her aunt, Naomi breaks through the personal and cultural screens of silence and secretiveness that have enshrouded her past, and reconciles herself with her history.

Kogawa’s use of motifs drawn from Christian rituals and symbols forms a subtle critique of the professed ethics of the majority culture that has shunned Naomi. In one example of such symbolism, Naomi’s reacquaintance with her past is compared with the biblical story of turning stone into bread. The bundle of documents—which Kogawa refers to as “stone-hard facts”—brings Naomi to the recognition of her country’s abuse of her people. But implicit in these hard facts, Kogawa suggests, is also the “bread” of a spiritual sustenance that will allow Naomi to affirm the durability of her people and herself. Through the careful deployment of structure and symbol, Kogawa thus manages to turn Naomi’s experience—and by extension the wartime experiences of many Japanese Canadians—into a journey of heroic transformation and a critique of the majority culture.`;

export const Lesson3_Question10: Lesson = {
  id: "39-3",
  title: "Question 10: Organization",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-119-S-1-P-2)', content: passageText },
    { type: 'h3', text: "Question 10: Organization Breakdown (PT-119-S-1-P-2-Q-10)" },
    { type: 'blockquote', text: "**Question:** Which one of the following most accurately describes the organization of the passage?" },
    { type: 'options', items: [
      "(A) Two points are made about a novel, the first supported with a brief example, the second reasserted without support.",
      "(B) Two points are made about a novel, the first supported with an extended analogy, the second reasserted without support.",
      "(C) Two points are made about a novel, the first reasserted without support, the second supported with an extended analogy.",
      "(D) Two points are made about a novel, the first supported with a brief example, the second supported with an extended analogy.",
      "(E) Two points are made about a novel, the first supported with an extended analogy, the second supported with a brief example. (Correct)"
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "The passage is organized as thesis plus ordered support. Paragraph 1 introduces two claims about Obasan. Paragraph 2 develops the first claim through an extended rites-of-passage analogy. Paragraph 3 develops the second claim with a brief symbolic example (stone into bread). The credited answer is the one that preserves both support type and order." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "Paragraph 2 lays out the extended parallel: a rite of passage \"begins... proceeds... concludes.\" Paragraph 3 shifts to a compact illustration: Naomi's experience is compared to \"turning stone into bread.\"" },
    { 
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        { title: "(A) Two points are made about a novel, the first supported with a brief example, the second reasserted without support.", text: "This is wrong on two counts. The support for the first point is extended, not brief. And the second point *is* supported with an example; it's not just \"reasserted.\"", badge: "Incorrect", badgeColor: "red" },
        { title: "(B) Two points are made about a novel, the first supported with an extended analogy, the second reasserted without support.", text: "This gets the first half right—the support *is* an extended analogy. But it gets the second half wrong. The second point is supported with the \"stone into bread\" example.", badge: "Incorrect", badgeColor: "red" },
        { title: "(C) Two points are made about a novel, the first reasserted without support, the second supported with an extended analogy.", text: "This gets both parts wrong. The first point is heavily supported, and the support for the second point is a brief example, not an extended analogy.", badge: "Incorrect", badgeColor: "red" },
        { title: "(D) Two points are made about a novel, the first supported with a brief example, the second supported with an extended analogy.", text: "This choice correctly identifies that both points are supported, but it reverses the *types* of support. It claims the first point gets a \"brief example\" and the second gets an \"extended analogy.\" The passage does the exact opposite.", badge: "Incorrect", badgeColor: "red" },
        { title: "(E) Two points are made about a novel, the first supported with an extended analogy, the second supported with a brief example.", text: "Let's check this against our blueprint. \"Two points are made...\" (Yes). \"...the first supported with an extended analogy...\" (Yes, the rites of passage). \"...the second supported with a brief example.\" (Yes, the stone into bread). This choice perfectly and accurately describes the structure of the author's argument.", badge: "Correct", badgeColor: "green" }
      ]
    }
  ]
};
