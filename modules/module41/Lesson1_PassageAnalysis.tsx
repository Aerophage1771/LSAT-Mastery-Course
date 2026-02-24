import { Lesson } from '../../types';

const passageText = `As the twentieth century draws to a close, we are learning to see the extent to which accounts and definitions of cultures are influenced by human biases and purposes, benevolent in what they include, incorporate, and validate, less so in what they exclude and demote. A number of recent studies have argued that the anxieties and agendas of the present exert an extraordinary influence on the national identities we construct from the cultural past. For example, Greek civilization was known originally to have had roots in Egyptian and various other African and Eastern cultures, but some current scholars charge that its identity was revised during the course of the nineteenth century to support an image of European cultural dominance—its African and other cultural influences either actively purged or hidden from view by European scholars. Because ancient Greek writers themselves openly acknowledged their culture’s hybrid past, nineteenth-century European commentators habitually passed over these acknowledgments without comment.

Another example is the use of “tradition” to determine national identity. Images of European authority over other cultures were shaped and reinforced during the nineteenth century, through the manufacture and reinterpretation of rituals, ceremonies, and traditions. At a time when many of the institutions that had helped maintain imperial societies were beginning to recede in influence, and when the pressures of administering numerous overseas territories and large new domestic constituencies mounted, the ruling elites of Europe felt the clear need to project their power backward in time, giving it a legitimacy that only longevity could impart. Thus in 1876, Queen Victoria of England was declared empress of India and was celebrated in numerous “traditional” jamborees, as if her rule were not mainly a matter of recent edict but of age-old custom.

Similar constructions have also been made by native cultures about their precolonial past, as in the case of Algeria during its war of independence from France, when decolonization encouraged Algerians to create idealized images of what they believed their culture to have been prior to French occupation. This strategy is at work in what many revolutionary poets say and write during wars of independence elsewhere, giving their adherents something to revive and admire.

Though for the most part colonized societies have won their independence, in many cultures the imperial attitudes of uniqueness and superiority underlying colonial conquest remain. There is in all nationally defined cultures an aspiration to sovereignty and dominance that expresses itself in definitions of cultural identity. At the same time, paradoxically, we have never been as aware as we are now of the fact that historical and cultural experiences partake of many social and cultural domains and even cross national boundaries, despite the claims to the contrary made by purveyors of nationalist dogma. Far from being unitary, monolithic, or autonomous, cultures actually include more “foreign” elements than they consciously exclude.`;

export const Lesson1_PassageAnalysis: Lesson = {
  id: "41-1",
  title: "Passage Analysis",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-128-S-1-P-3)', content: passageText },
    { type: 'h3', text: "Passage Analysis: Culture, Tradition, and Identity (PT-128-S-1-P-3)" },
    { type: 'paragraph', text: "This passage argues that national and cultural identities are constructed, not neutrally recovered from the past. Present political interests shape what is remembered, emphasized, or erased." },
    { type: 'paragraph', text: "Follow the progression of examples. The first three paragraphs show different contexts in which tradition is manufactured, and the final paragraph synthesizes these examples into a broader claim about cultural hybridity." },
    { type: 'hr' },
    { type: 'h4', text: "Paragraph 1: Present Agendas Rewriting the Past" },
    { type: 'paragraph', text: "The opening paragraph introduces the core thesis: cultural definitions are filtered through contemporary priorities. The example of ancient Greece shows how scholarship can suppress acknowledged cross-cultural roots to support a narrative of European primacy." },
    { type: 'paragraph', text: "Its argumentative function is diagnostic. It identifies historical reinterpretation as a power-laden process rather than a neutral academic correction." },
    { type: 'h4', text: 'Paragraph 2: "Tradition" as Political Technology' },
    { type: 'paragraph', text: "The second paragraph shifts from scholarly framing to state practice. Imperial authorities are described as manufacturing rituals to project continuity and legitimacy." },
    { type: 'paragraph', text: "The Queen Victoria example illustrates the mechanism: newly created ceremonies are presented as ancient custom, making recent authority look historically inevitable." },
    { type: 'h4', text: "Paragraph 3: Parallel Construction in Anticolonial Contexts" },
    { type: 'paragraph', text: "The third paragraph extends the claim by showing that invented or idealized pasts are not unique to colonial power. Decolonizing movements also build selective historical narratives to mobilize identity and resistance." },
    { type: 'paragraph', text: "This move broadens the argument from accusation to general pattern: identity construction is a recurring political practice across opposing regimes." },
    { type: 'h4', text: "Paragraph 4: Synthesis and Cultural Paradox" },
    { type: 'paragraph', text: "The final paragraph resolves the passage by presenting a tension. National cultures continue to seek sovereignty and singularity, yet historical awareness increasingly reveals cross-border entanglement." },
    { type: 'paragraph', text: "The conclusion rejects monolithic identity claims and asserts that cultures include more borrowed and shared elements than nationalist narratives admit." },
    { type: 'callout', title: "Summary of the Argument", variant: "summary", text: "The passage argues that cultural identity is strategically constructed in response to present needs. Through examples from imperial Europe and anticolonial movements, it shows how tradition is curated to legitimize power, then concludes that real cultures are historically mixed and interconnected rather than pure and autonomous." }
  ]
};
