
import { Lesson, ContentBlock } from '../../types';

const humanitiesPassageText = `As the twentieth century draws to a close, we are learning to see the extent to which accounts and definitions of cultures are influenced by human biases and purposes, benevolent in what they include, incorporate, and validate, less so in what they exclude and demote. A number of recent studies have argued that the anxieties and agendas of the present exert an extraordinary influence on the national identities we construct from the cultural past. For example, Greek civilization was known originally to have had roots in Egyptian and various other African and Eastern cultures, but some current scholars charge that its identity was revised during the course of the nineteenth century to support an image of European cultural dominance—its African and other cultural influences either actively purged or hidden from view by European scholars. Because ancient Greek writers themselves openly acknowledged their culture's hybrid past, nineteenth-century European commentators habitually passed over these acknowledgments without comment.

Another example is the use of "tradition" to determine national identity. Images of European authority over other cultures were shaped and reinforced during the nineteenth century, through the manufacture and reinterpretation of rituals, ceremonies, and traditions. At a time when many of the institutions that had helped maintain imperial societies were beginning to recede in influence, and when the pressures of administering numerous overseas territories and large new domestic constituencies mounted, the ruling elites of Europe felt the clear need to project their power backward in time, giving it a legitimacy that only longevity could impart. Thus in 1876, Queen Victoria of England was declared empress of India and was celebrated in numerous "traditional" jamborees, as if her rule were not mainly a matter of recent edict but of age-old custom.

Similar constructions have also been made by native cultures about their precolonial past, as in the case of Algeria during its war of independence from France, when decolonization encouraged Algerians to create idealized images of what they believed their culture to have been prior to French occupation. This strategy is at work in what many revolutionary poets say and write during wars of independence elsewhere, giving their adherents something to revive and admire.

Though for the most part colonized societies have won their independence, in many cultures the imperial attitudes of uniqueness and superiority underlying colonial conquest remain. There is in all nationally defined cultures an aspiration to sovereignty and dominance that expresses itself in definitions of cultural identity. At the same time, paradoxically, we have never been as aware as we are now of the fact that historical and cultural experiences partake of many social and cultural domains and even cross national boundaries, despite the claims to the contrary made by purveyors of nationalist dogma. Far from being unitary, monolithic, or autonomous, cultures actually include more "foreign" elements than they consciously exclude.`;

export const Lesson4_CulturalIdentity: Lesson = {
  id: "49-4",
  title: "Cultural Identity (PT-128)",
  content: [
    { type: 'passage-card', title: 'Cultural Identity', id: 'PT-128-S-1-P-3', genre: 'Humanities', passage: humanitiesPassageText },
    { type: 'hr' },
    { type: 'h3', text: 'Question 14: Main Idea' },
    { type: 'blockquote', text: "**Question:** Which one of the following statements most accurately expresses the main point of the passage?" },
    { type: 'options', items: [
      "(A) Either by ignoring a native culture's own self-understanding or by substituting fabricated traditions and rituals, imperial societies often obscure the heterogeneous cultures of the peoples they colonize. [11.0%]",
      "(B) Attempts to reconstruct a native, precolonial culture by members of decolonized societies are essentially no different from European colonial creation of traditions and rituals to validate their authority. [8.0%]",
      "(C) In attempting to impose a monolithic culture on the peoples they colonize, imperial societies adopt artifices very similar to the tactics employed by revisionist historians of ancient Greek culture. [3.0%]",
      "(D) While most colonized societies have regained their independence, they retain trappings of imperial culture that will need to be discarded if they are to regain the traditions of their past. [3.0%]",
      "(E) Despite nationalistic creation of images of cultures as unified and monolithic, we now more clearly understand the extent to which cultures are in fact made up of heterogeneous elements. [76.0%] (Correct)"
    ]},
    { type: 'hr' },
    { type: 'h3', text: 'Question 15: Except, Inference' },
    { type: 'blockquote', text: "**Question:** The passage provides information to answer all of the following questions EXCEPT:" },
    { type: 'options', items: [
      "(A) What kinds of influences affect the national identities people construct from their past? [2.0%]",
      "(B) Why did nineteenth-century European commentators ignore some discussion of Greek culture by ancient Greek writers? [4.0%]",
      "(C) In what ways did African cultural influence affect the culture of ancient Greece? [85.0%] (Correct)",
      "(D) Why was Queen Victoria of England declared empress of India in 1876? [3.0%]",
      "(E) What is one reason why revolutionary poets speak and write as they do? [6.0%]"
    ]},
    { type: 'hr' },
    { type: 'h3', text: 'Question 16: Author Attitude' },
    { type: 'blockquote', text: "**Question:** The author's attitude toward the studies mentioned in the second sentence of the passage is most likely" },
    { type: 'options', items: [
      "(A) overall agreement with their conclusion about influences on cultural identity [92.0%] (Correct)",
      "(B) reservation over their preoccupation with colonialism [1.0%]",
      "(C) skepticism toward the relevance of the examples they cite [2.0%]",
      "(D) concern that they fail to explain ancient Greek culture [2.0%]",
      "(E) unqualified disagreement with their insistence that cultures are monolithic [3.0%]"
    ]},
    { type: 'hr' },
    { type: 'h3', text: 'Question 17: Phrase Meaning' },
    { type: 'blockquote', text: "**Question:** The author's use of the word \"traditional\" (last sentence of the second paragraph) is intended to indicate that the jamborees" },
    { type: 'options', items: [
      "(A) had been revived after centuries of neglect [3.0%]",
      "(B) were legitimized by their historic use in the native culture [9.0%]",
      "(C) exemplified the dominance of the imperial culture [8.0%]",
      "(D) conferred spurious historical legitimacy upon colonial authority [76.0%] (Correct)",
      "(E) combined historic elements of imperial and native cultures [4.0%]"
    ]},
    { type: 'hr' },
    { type: 'h3', text: 'Question 18: Other Viewpoint' },
    { type: 'blockquote', text: "**Question:** The \"purveyors of nationalist dogma\" mentioned in the second-to-last sentence of the passage would be most likely to agree with which one of the following?" },
    { type: 'options', items: [
      "(A) Colonized nations should not attempt to regain their historical cultures. [5.0%]",
      "(B) Imperial cultures should incorporate the traditions of their colonies. [2.0%]",
      "(C) The cultural traditions of a nation should remain untainted by outside influences. [83.0%] (Correct)",
      "(D) A country's cultural identity partakes of many social and cultural domains. [5.0%]",
      "(E) National histories are created to further aspirations to sovereignty and dominance. [6.0%]"
    ]},
    { type: 'hr' },
    { type: 'h3', text: 'Question 19: Application' },
    { type: 'blockquote', text: "**Question:** Which one of the following would most likely be an example of one of the \"rituals, ceremonies, and traditions\" mentioned in the second sentence of the second paragraph?" },
    { type: 'options', items: [
      "(A) an annual ceremony held by an institution of the colonizing culture to honor the literary and theatrical achievements of members of the native culture [4.0%]",
      "(B) a religious service of the colonizing culture that has been adapted to include elements of the native culture in order to gain converts [26.0%]",
      "(C) a traditional play that is part of a colonized nation's original culture, but is highly popular among the leaders of the imperial culture [7.0%]",
      "(D) a ritual dance, traditionally used to commemorate the union of two native deities, that is modified to depict the friendship between the colonial and native cultures [62.0%] (Correct)",
      "(E) a traditional village oratory competition in which members of the native culture endeavor to outdo one another in allegorical criticisms of the colonizing culture [1.0%]"
    ]},
    { type: 'hr' },
    { type: 'h3', text: 'Question 20: Passage Principle' },
    { type: 'blockquote', text: "**Question:** In the context of the passage, the examples in the second and third paragraphs best exemplify which one of the following generalizations?" },
    { type: 'options', items: [
      "(A) Apparent traditions may be products of artifice. [72.0%] (Correct)",
      "(B) National identity generally requires cultural uniformity. [5.0%]",
      "(C) Most colonial cultures are by nature artificial and contrived. [9.0%]",
      "(D) Historical and cultural experiences may cross national boundaries. [14.0%]",
      "(E) Revolutionary cultures are often more authentic than imperial cultures. [1.0%]"
    ]},
    { type: 'hr' },
    { type: 'h3', text: 'Question 21: Purpose of Passage' },
    { type: 'blockquote', text: "**Question:** The primary purpose of the passage is to" },
    { type: 'options', items: [
      "(A) argue for the creation of a global culture made up of elements from many national cultures [3.0%]",
      "(B) explain how the desire for cultural uniformity supports imperialist attitudes [9.0%]",
      "(C) stress the importance of objectivity in studying the actual sources of cultural identity [13.0%]",
      "(D) advance the claim that present concerns motivate the shaping of cultural identities [72.0%] (Correct)",
      "(E) reveal the imperialist motivations of some nineteenth-century scholarship [4.0%]"
    ]},
  ] as ContentBlock[]
};
