import { Lesson } from '../../types';

const passageText = `As the twentieth century draws to a close, we are learning to see the extent to which accounts and definitions of cultures are influenced by human biases and purposes, benevolent in what they include, incorporate, and validate, less so in what they exclude and demote. A number of recent studies have argued that the anxieties and agendas of the present exert an extraordinary influence on the national identities we construct from the cultural past. For example, Greek civilization was known originally to have had roots in Egyptian and various other African and Eastern cultures, but some current scholars charge that its identity was revised during the course of the nineteenth century to support an image of European cultural dominance—its African and other cultural influences either actively purged or hidden from view by European scholars. Because ancient Greek writers themselves openly acknowledged their culture’s hybrid past, nineteenth-century European commentators habitually passed over these acknowledgments without comment.

Another example is the use of “tradition” to determine national identity. Images of European authority over other cultures were shaped and reinforced during the nineteenth century, through the manufacture and reinterpretation of rituals, ceremonies, and traditions. At a time when many of the institutions that had helped maintain imperial societies were beginning to recede in influence, and when the pressures of administering numerous overseas territories and large new domestic constituencies mounted, the ruling elites of Europe felt the clear need to project their power backward in time, giving it a legitimacy that only longevity could impart. Thus in 1876, Queen Victoria of England was declared empress of India and was celebrated in numerous “traditional” jamborees, as if her rule were not mainly a matter of recent edict but of age-old custom.

Similar constructions have also been made by native cultures about their precolonial past, as in the case of Algeria during its war of independence from France, when decolonization encouraged Algerians to create idealized images of what they believed their culture to have been prior to French occupation. This strategy is at work in what many revolutionary poets say and write during wars of independence elsewhere, giving their adherents something to revive and admire.

Though for the most part colonized societies have won their independence, in many cultures the imperial attitudes of uniqueness and superiority underlying colonial conquest remain. There is in all nationally defined cultures an aspiration to sovereignty and dominance that expresses itself in definitions of cultural identity. At the same time, paradoxically, we have never been as aware as we are now of the fact that historical and cultural experiences partake of many social and cultural domains and even cross national boundaries, despite the claims to the contrary made by purveyors of nationalist dogma. Far from being unitary, monolithic, or autonomous, cultures actually include more “foreign” elements than they consciously exclude.`;

export const Lesson6_Question18: Lesson = {
  id: "41-6",
  title: "Question 18: 3rd-Party Viewpoint",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-128-S-1-P-3)', content: passageText },
    { type: 'h3', text: "Question 18: 3rd-Party Viewpoint Breakdown (PT-128-S-1-P-3-Q-18)" },
    { type: 'blockquote', text: "**Question:** The “purveyors of nationalist dogma” mentioned in the second-to-last sentence of the passage would be most likely to agree with which one of the following?" },
    { type: 'options', items: [
      "(A) Colonized nations should not attempt to regain their historical cultures.",
      "(B) Imperial cultures should incorporate the traditions of their colonies.",
      "(C) The cultural traditions of a nation should remain untainted by outside influences. (Correct)",
      "(D) A country’s cultural identity partakes of many social and cultural domains.",
      "(E) National histories are created to further aspirations to sovereignty and dominance."
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "This asks for the belief a nationalist dogmatist would affirm, not the author's critique of that belief. In the final paragraph, nationalist dogma is positioned against the idea of cross-cultural hybridity, so the correct viewpoint should insist on purity, uniqueness, and insulation from foreign influence." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "The author says cross-domain, cross-boundary cultural experience exists \"despite the claims to the contrary made by purveyors of nationalist dogma.\" The close further rejects their premise: cultures are not monolithic and contain significant \"foreign\" elements." },
    { 
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        { title: "(A) Colonized nations should not attempt to regain their historical cultures.", text: "This is unlikely. The passage uses Algerian nationalists, who were trying to create an idealized version of their precolonial past, as an example of this kind of identity construction. A nationalist would likely support, not oppose, such an attempt.", badge: "Incorrect", badgeColor: "red" },
        { title: "(B) Imperial cultures should incorporate the traditions of their colonies.", text: "This contradicts the nationalist ideal of purity. Incorporating foreign traditions would dilute the supposed uniqueness and superiority of the national culture.", badge: "Incorrect", badgeColor: "red" },
        { title: "(C) The cultural traditions of a nation should remain untainted by outside influences.", text: "This statement perfectly captures the essence of nationalist dogma as described by the author. The desire for a culture that is \"untainted by outside influences\" is the core belief that stands in direct opposition to the author's final point about the interconnectedness and hybridity of all cultures.", badge: "Correct", badgeColor: "green" },
        { title: "(D) A country’s cultural identity partakes of many social and cultural domains.", text: "This is a direct statement of the *author's* view, which the passage explicitly states is contrary to the claims of nationalist dogma. Nationalists would disagree with this.", badge: "Incorrect", badgeColor: "red" },
        { title: "(E) National histories are created to further aspirations to sovereignty and dominance.", text: "This is the author's *analysis* of the nationalists' motivation. A purveyor of nationalist dogma would likely not describe their own work in this way. They would probably claim to be uncovering the \"true\" history of their nation, not creating a tool for political ends. This choice describes their function from an outside, critical perspective, not their own belief.", badge: "Incorrect", badgeColor: "red" }
      ]
    }
  ]
};
