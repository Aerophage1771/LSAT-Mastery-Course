import { Lesson } from '../../types';

const passageText = `In explaining the foundations of the discipline known as historical sociology—the examination of history using the methods of sociology—historical sociologist Philip Abrams argues that, while people are made by society as much as society is made by people, sociologists’ approach to the subject is usually to focus on only one of these forms of influence to the exclusion of the other. Abrams insists on the necessity for sociologists to move beyond these one-sided approaches to understand society as an entity constructed by individuals who are at the same time constructed by their society. Abrams refers to this continuous process as “structuring.”
Abrams also sees history as the result of structuring. People, both individually and as members of collectives, make history. But our making of history is itself formed and informed not only by the historical conditions we inherit from the past, but also by the prior formation of our own identities and capacities, which are shaped by what Abrams calls “contingencies”—social phenomena over which we have varying degrees of control. Contingencies include such things as the social conditions under which we come of age, the condition of our household’s economy, the ideologies available to help us make sense of our situation, and accidental circumstances. The ways in which contingencies affect our individual or group identities create a structure of forces within which we are able to act, and that partially determines the sorts of actions we are able to perform.
In Abrams’s analysis, historical structuring, like social structuring, is manifold and unremitting. To understand it, historical sociologists must extract from it certain significant episodes, or events, that their methodology can then analyze and interpret. According to Abrams, these events are points at which action and contingency meet, points that represent a cross section of the specific social and individual forces in play at a given time. At such moments, individuals stand forth as agents of history not simply because they possess a unique ability to act, but also because in them we see the force of the specific social conditions that allowed their actions to come forth. Individuals can “make their mark” on history, yet in individuals one also finds the convergence of wider social forces. In order to capture the various facets of this mutual interaction, Abrams recommends a fourfold structure to which he believes the investigations of historical sociologists should conform: first, description of the event itself; second, discussion of the social context that helped bring the event about and gave it significance; third, summary of the life history of the individual agent in the event; and fourth, analysis of the consequences of the event both for history and for the individual.`;

export const Lesson4_Question17: Lesson = {
  id: "57-4",
  title: "Question 17: Except, Inference",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-114-S-3-P-3)', content: passageText },
    { type: 'h3', text: "Question 17: Except, Inference Breakdown (PT-114-S-3-P-3-Q-17)" },
    { type: 'blockquote', text: "**Question:** The passage states that a contingency could be each of the following EXCEPT:" },
    { type: 'options', items: [
      "(A) a social phenomenon",
      "(B) a form of historical structuring (Correct)",
      "(C) an accidental circumstance",
      "(D) a condition controllable to some extent by an individual",
      "(E) a partial determinant of an individual’s actions"
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "This except, inference question should be resolved by matching each choice to what the passage actually establishes. Use the opening and closing claims as scope anchors, then select the option that satisfies the stem without unsupported assumptions." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "Anchor your reading in phrases such as 'In explaining the foundations of the discipline known as historical sociology—the...' and 'In order to capture the various facets of this mutual interaction,...' when checking whether a choice preserves the passage's emphasis." },
    { 
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        { title: "(A)", text: "This is explicitly stated. The passage defines contingencies as 'social phenomena over which we have varying degrees of control.' So, this is a correct description. Additional check: trap type is unsupported inference, because the passage never supplies the missing support.", badge: "Incorrect", badgeColor: "red" },
        { title: "(B)", text: "The passage describes 'historical structuring' as the broad, continuous process being studied. 'Contingencies' are specific factors or ingredients *within* that larger process, but they are not the process itself. Therefore, a contingency is not a 'form' of historical structuring. Additional check: this is strongest because it directly satisfies the stem while preserving the passage's scope and emphasis.", badge: "Correct", badgeColor: "green" },
        { title: "(C)", text: "This is explicitly stated. The passage gives 'accidental circumstances' as a direct example of a contingency. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" },
        { title: "(D)", text: "This is explicitly stated. The passage says contingencies are phenomena 'over which we have varying degrees of control,' which means they can be controlled to some extent. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" },
        { title: "(E)", text: "This is explicitly stated. The passage says that contingencies create a structure that 'partially determines the sorts of actions we are able to perform.' Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" }
      ]
    }
  ]
};
