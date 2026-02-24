import { Lesson } from '../../types';

const passageText = `As the twentieth century draws to a close, we are learning to see the extent to which accounts and definitions of cultures are influenced by human biases and purposes, benevolent in what they include, incorporate, and validate, less so in what they exclude and demote. A number of recent studies have argued that the anxieties and agendas of the present exert an extraordinary influence on the national identities we construct from the cultural past. For example, Greek civilization was known originally to have had roots in Egyptian and various other African and Eastern cultures, but some current scholars charge that its identity was revised during the course of the nineteenth century to support an image of European cultural dominance—its African and other cultural influences either actively purged or hidden from view by European scholars. Because ancient Greek writers themselves openly acknowledged their culture’s hybrid past, nineteenth-century European commentators habitually passed over these acknowledgments without comment.

Another example is the use of “tradition” to determine national identity. Images of European authority over other cultures were shaped and reinforced during the nineteenth century, through the manufacture and reinterpretation of rituals, ceremonies, and traditions. At a time when many of the institutions that had helped maintain imperial societies were beginning to recede in influence, and when the pressures of administering numerous overseas territories and large new domestic constituencies mounted, the ruling elites of Europe felt the clear need to project their power backward in time, giving it a legitimacy that only longevity could impart. Thus in 1876, Queen Victoria of England was declared empress of India and was celebrated in numerous “traditional” jamborees, as if her rule were not mainly a matter of recent edict but of age-old custom.

Similar constructions have also been made by native cultures about their precolonial past, as in the case of Algeria during its war of independence from France, when decolonization encouraged Algerians to create idealized images of what they believed their culture to have been prior to French occupation. This strategy is at work in what many revolutionary poets say and write during wars of independence elsewhere, giving their adherents something to revive and admire.

Though for the most part colonized societies have won their independence, in many cultures the imperial attitudes of uniqueness and superiority underlying colonial conquest remain. There is in all nationally defined cultures an aspiration to sovereignty and dominance that expresses itself in definitions of cultural identity. At the same time, paradoxically, we have never been as aware as we are now of the fact that historical and cultural experiences partake of many social and cultural domains and even cross national boundaries, despite the claims to the contrary made by purveyors of nationalist dogma. Far from being unitary, monolithic, or autonomous, cultures actually include more “foreign” elements than they consciously exclude.`;

export const Lesson5_Question17: Lesson = {
  id: "41-5",
  title: "Question 17: Phrase Meaning",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-128-S-1-P-3)', content: passageText },
    { type: 'h3', text: "Question 17: Phrase Meaning Breakdown (PT-128-S-1-P-3-Q-17)" },
    { type: 'blockquote', text: "**Question:** The author’s use of the word “traditional” (last sentence of the second paragraph) is intended to indicate that the jamborees" },
    { type: 'options', items: [
      "(A) had been revived after centuries of neglect",
      "(B) were legitimized by their historic use in the native culture",
      "(C) exemplified the dominance of the imperial culture",
      "(D) conferred spurious historical legitimacy upon colonial authority (Correct)",
      "(E) combined historic elements of imperial and native cultures"
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "The quotation marks around \"traditional\" signal distance and irony, not endorsement. The author is indicating that these jamborees were presented as ancient custom but were politically staged to legitimize recent imperial authority. So the meaning is not genuine tradition; it is fabricated historical aura used for power." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "The paragraph explains that elites wanted to \"project their power backward in time,\" granting authority the legitimacy of longevity. Victoria's celebrations are described \"as if\" her rule were age-old rather than a recent edict." },
    { 
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        { title: "(A) had been revived after centuries of neglect", text: "This suggests the traditions were authentically old, which is the opposite of the author's point.", badge: "Incorrect", badgeColor: "red" },
        { title: "(B) were legitimized by their historic use in the native culture", text: "The passage does not state that these jamborees were drawn from native culture; the context suggests they were creations of the European imperial power.", badge: "Incorrect", badgeColor: "red" },
        { title: "(C) exemplified the dominance of the imperial culture", text: "While true, this misses the specific function of the quotation marks. The quotes are not just about dominance but about the *inauthenticity* of the tradition being used to express that dominance.", badge: "Incorrect", badgeColor: "red" },
        { title: "(D) conferred spurious historical legitimacy upon colonial authority", text: "This choice is a perfect fit. \"Spurious\" means fake or not genuine. The quotation marks around \"traditional\" are intended to show that the tradition was fake and that its purpose was to confer a false (\"spurious\") sense of historical legitimacy on the colonial government.", badge: "Correct", badgeColor: "green" },
        { title: "(E) combined historic elements of imperial and native cultures", text: "The passage provides no evidence to support the idea that these ceremonies were a combination of cultures. The focus is on the imperial power's act of invention.", badge: "Incorrect", badgeColor: "red" }
      ]
    }
  ]
};
