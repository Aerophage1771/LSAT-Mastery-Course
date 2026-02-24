import { Lesson } from '../../types';

const passageText = `As the twentieth century draws to a close, we are learning to see the extent to which accounts and definitions of cultures are influenced by human biases and purposes, benevolent in what they include, incorporate, and validate, less so in what they exclude and demote. A number of recent studies have argued that the anxieties and agendas of the present exert an extraordinary influence on the national identities we construct from the cultural past. For example, Greek civilization was known originally to have had roots in Egyptian and various other African and Eastern cultures, but some current scholars charge that its identity was revised during the course of the nineteenth century to support an image of European cultural dominance—its African and other cultural influences either actively purged or hidden from view by European scholars. Because ancient Greek writers themselves openly acknowledged their culture’s hybrid past, nineteenth-century European commentators habitually passed over these acknowledgments without comment.

Another example is the use of “tradition” to determine national identity. Images of European authority over other cultures were shaped and reinforced during the nineteenth century, through the manufacture and reinterpretation of rituals, ceremonies, and traditions. At a time when many of the institutions that had helped maintain imperial societies were beginning to recede in influence, and when the pressures of administering numerous overseas territories and large new domestic constituencies mounted, the ruling elites of Europe felt the clear need to project their power backward in time, giving it a legitimacy that only longevity could impart. Thus in 1876, Queen Victoria of England was declared empress of India and was celebrated in numerous “traditional” jamborees, as if her rule were not mainly a matter of recent edict but of age-old custom.

Similar constructions have also been made by native cultures about their precolonial past, as in the case of Algeria during its war of independence from France, when decolonization encouraged Algerians to create idealized images of what they believed their culture to have been prior to French occupation. This strategy is at work in what many revolutionary poets say and write during wars of independence elsewhere, giving their adherents something to revive and admire.

Though for the most part colonized societies have won their independence, in many cultures the imperial attitudes of uniqueness and superiority underlying colonial conquest remain. There is in all nationally defined cultures an aspiration to sovereignty and dominance that expresses itself in definitions of cultural identity. At the same time, paradoxically, we have never been as aware as we are now of the fact that historical and cultural experiences partake of many social and cultural domains and even cross national boundaries, despite the claims to the contrary made by purveyors of nationalist dogma. Far from being unitary, monolithic, or autonomous, cultures actually include more “foreign” elements than they consciously exclude.`;

export const Lesson9_Question21: Lesson = {
  id: "41-9",
  title: "Question 21: Passage Purpose",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-128-S-1-P-3)', content: passageText },
    { type: 'h3', text: "Question 21: Passage Purpose Breakdown (PT-128-S-1-P-3-Q-21)" },
    { type: 'blockquote', text: "**Question:** The primary purpose of the passage is to" },
    { type: 'options', items: [
      "(A) argue for the creation of a global culture made up of elements from many national cultures",
      "(B) explain how the desire for cultural uniformity supports imperialist attitudes",
      "(C) stress the importance of objectivity in studying the actual sources of cultural identity",
      "(D) advance the claim that present concerns motivate the shaping of cultural identities (Correct)",
      "(E) reveal the imperialist motivations of some nineteenth-century scholarship"
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "The passage's purpose is argumentative: it advances the claim that present interests and anxieties shape how cultures narrate their past. The multiple examples are evidence for that claim, not separate endpoints. The close then reinforces the thesis by contrasting nationalist monolith stories with actual cultural hybridity." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "The core claim appears early: present \"anxieties and agendas\" exert strong influence on national identities. The final paragraph confirms the broader implication that cultures are not autonomous units but include many cross-boundary and \"foreign\" elements." },
    { 
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        { title: "(A) argue for the creation of a global culture made up of elements from many national cultures", text: "The author's tone is analytical, not prescriptive. They describe the interconnectedness of cultures but do not advocate for the creation of a new \"global culture.\"", badge: "Incorrect", badgeColor: "red" },
        { title: "(B) explain how the desire for cultural uniformity supports imperialist attitudes", text: "This is too narrow. It only covers one aspect of the evidence (the imperial examples) and ignores the broader application of the thesis to non-imperial contexts, like the Algerian one.", badge: "Incorrect", badgeColor: "red" },
        { title: "(C) stress the importance of objectivity in studying the actual sources of cultural identity", text: "While the passage demonstrates a lack of objectivity in how cultures are defined, its main goal is not to lecture the reader on scholarly methods. Its purpose is more analytical: to explain the *mechanism* and *motivation* behind this biased construction of identity. The call for objectivity is an implication, not the primary purpose.", badge: "Incorrect", badgeColor: "red" },
        { title: "(D) advance the claim that present concerns motivate the shaping of cultural identities", text: "This is a precise and accurate summary of the author's central thesis. The passage's primary goal is to \"advance the claim\" (i.e., argue for the idea) that \"present concerns\" (biases, agendas, anxieties) are the driving force (\"motivate\") behind the \"shaping of cultural identities.\" This statement encompasses all the evidence and the main argument of the passage.", badge: "Correct", badgeColor: "green" },
        { title: "(E) reveal the imperialist motivations of some nineteenth-century scholarship", text: "This is far too narrow. It describes the content of the first paragraph's example but fails to capture the purpose of the passage as a whole, which uses that example as one piece of evidence for a much broader claim about identity construction in general.", badge: "Incorrect", badgeColor: "red" }
      ]
    }
  ]
};
