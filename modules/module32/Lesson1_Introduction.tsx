import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "32-1",
  title: "Introduction",
  content: [
    { type: 'h3', text: "Germaine's Guide to Third-Party Viewpoint Questions" },
    { type: 'h4', text: "What's this question asking?" },
    { type: 'paragraph', text: "Third-Party Viewpoint questions ask you to identify what a named person, camp, school of thought, critic, research team, or passage speaker actually believes. Your job is not to summarize the whole passage. Your job is to assign the right claim to the right voice." },
    { type: 'paragraph', text: "That is why this category is harder than it looks. In the released pool, there are 108 Other Viewpoint questions, and 40 of them are difficulty 5. Many of the hardest ones come from debate-heavy and comparative passages where multiple voices overlap, respond to one another, or partially agree." },
    { type: 'list', items: [
      "**Identify the target voice exactly:** named scholar, research team, critics, passage A author, passage B author, or some described group.",
      "**Collect only attributable claims:** what does the passage explicitly assign to that voice?",
      "**Separate viewpoint from commentary:** the author may describe, criticize, refine, or contrast a view without endorsing it.",
      "**Track the exact force of the claim:** agree, would object, would be most likely to endorse, would reject, or would describe as incomplete."
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Stem Identification: The Main Families in the Real Pool" },
    { type: 'paragraph', text: "Other Viewpoint stems keep changing their surface phrasing, but they usually fall into a few recurring families. Learn the families and the task becomes much more stable." },
    {
      type: 'breakdown',
      labels: { title: 'Stem Family', text: 'What You Must Do' },
      items: [
        {
          title: "Direct View Ascription",
          text: "**Typical phrasing:** according to X, X would hold, X believed, the passage supports ascribing to X\n\nThese ask for the view that belongs to one named party. The trap is choosing a statement that is true in the passage but belongs to someone else.",
          badge: "Ascription",
          badgeColor: "indigo"
        },
        {
          title: "Agreement / Disagreement",
          text: "**Typical phrasing:** both would agree, X and Y differ over, would be least likely to endorse\n\nThese require a two-step check. You must know each speaker's position separately before you can test overlap or conflict.",
          badge: "Comparison",
          badgeColor: "blue"
        },
        {
          title: "Function Under Someone's View",
          text: "**Typical phrasing:** on X's view, this example would illustrate..., under Y's theory, this would count as...\n\nThese combine viewpoint tracking with application. You still start by locating the speaker's rule or stance before you test the answer choices.",
          badge: "Applied View",
          badgeColor: "green"
        }
      ]
    },
    { type: 'h3', text: "The Most Common Attribution Traps" },
    {
      type: 'table',
      headers: ['Trap', 'What It Looks Like', 'Why Students Miss It'],
      rows: [
        ['Author Commentary Trap', "The answer restates the author's evaluation of a view.", "Students mistake the passage's commentary on a position for the position itself."],
        ['Right Claim, Wrong Speaker', 'The statement appears in the passage, but it belongs to a different camp.', 'Students remember the claim but not who said it.'],
        ['Blended View Trap', 'The answer combines two speakers into one neat summary.', 'Hard questions often punish answers that merge partial agreement into full agreement.'],
        ['Example vs. Principle Trap', "The answer talks about a detail associated with the speaker, not the speaker's actual underlying claim.", 'Students latch onto the example without reconstructing the actual viewpoint.'],
        ['Comparative Mix-Up', "The answer uses one passage's language to describe the other passage's stance.", 'Comparative sets reward disciplined voice tracking and punish loose memory.']
      ]
    },
    { type: 'callout', title: "Overarching Takeaway", variant: "summary", text: "Build a voice ledger as you read. For every named party or school of thought, record what they claim, what evidence is tied to them, and how the author reacts. Other Viewpoint questions become much easier once every important statement has an owner." },
    { type: 'paragraph', text: "In debate passages, push the ledger one step further: do not just note *what* each camp believes. Note the **reasons each camp gives**, the objections it faces, and whether the author aligns with one side, qualifies both sides, or stays neutral. That extra tracking is what makes the hardest attribution questions manageable." },
    { type: 'h3', text: "The Importance of Third-Party Viewpoint Questions" },
    { type: 'paragraph', text: "Other Viewpoint questions are one of the most advanced RC categories because they test fine-grained attribution, not just comprehension. They show up heavily in debate passages and comparative sets, and they are exactly the kind of questions that expose loose passage tracking." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h3",
          "text": "Germaine's Guide to RC 3rd-Party Viewpoint Questions"
        },
        {
          "type": "h4",
          "text": "What's this question asking?"
        },
        {
          "type": "paragraph",
          "text": "3rd-Party Viewpoint questions ask you to identify the specific belief, argument, or perspective of a person or group mentioned in the passage. Your goal is to isolate the ideas that the text explicitly attributes to that specific party."
        },
        {
          "type": "paragraph",
          "text": "This involves distinguishing between different voices in the passage to ensure the answer choice accurately reflects only the claims made by the subject of the question. To do this effectively:"
        },
        {
          "type": "list",
          "items": [
            "**Locate the specific party:** Find the mentions of the individual (e.g., a specific researcher) or group (e.g., \"legal scholars\") named in the question.",
            "**Identify attributed claims:** Look for language that links an idea directly to that party, such as \"according to,\" \"claims,\" \"argues,\" or \"suggests.\"",
            "**Distinguish between viewpoints:** Separate the third party's perspective from the author's own opinions or the views of other groups mentioned in the text.",
            "**Check for evidential backing:** Ensure the answer choice is supported by the specific section of the text where that party's view is discussed."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Stem Identification: How to Spot a 3rd-Party Viewpoint Question"
        },
        {
          "type": "paragraph",
          "text": "3rd-Party Viewpoint questions ask you to identify the specific belief, argument, or perspective of a person or group mentioned in the passage who is not the author. The chart below breaks down the common phrasing patterns used to pinpoint these specific perspectives."
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Category",
            "text": "Examples & Keywords"
          },
          "items": [
            {
              "title": "Specific Individuals or Groups",
              "text": "**Keywords:** Direct reference to names or groups\n\n• \"The passage suggests that **Speaker 1** and **Speaker 2 agree** that...\" <br>• \"It can be inferred from the passage that **the scientist believed that**...\" <br>• \"The explanation...given by **the team** most strongly supports which one of the following?\" <br>• \"An **economist** would be LEAST likely to endorse which one of the following...\" <br>• \"It can be inferred from the passage that **proponents of the movement** would be most likely to hold...\"",
              "badge": "Attribution",
              "badgeColor": "indigo"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Overarching Takeaway",
          "variant": "summary",
          "text": "Your task is to act as a neutral reporter, isolating exactly what the passage attributes to the specific person or group in the question. Always find the direct textual evidence that links the viewpoint to the party in question (e.g., \"According to Smith,\" \"the critics claim\"). Be careful not to confuse the third party's opinion with the author's own view or with a different group's perspective."
        },
        {
          "type": "h3",
          "text": "The Importance of 3rd-Party Viewpoint Questions"
        },
        {
          "type": "paragraph",
          "text": "3rd-Party Viewpoint questions appear 108 times in the dataset, accounting for over 5% of all RC questions. These questions test your ability to track and differentiate between multiple perspectives within a single passage. This skill is critical for navigating complex texts, especially comparative passages, and for avoiding the common trap of confusing a third party's opinion with the author's own."
        }
      ],
    },
    glance: {
      label: 'At a Glance',
      content: [
        { type: 'h2', text: 'Third-Party Viewpoint Questions — At a Glance' },
        { type: 'paragraph', text: 'These questions ask whose view is whose. With **108 appearances** in the released pool, Third-Party Viewpoint questions test whether you can assign the right claim to the right speaker when multiple voices overlap in a passage.' },
        {
          type: 'table',
          headers: ['Element', 'What to Look For', 'Core Skill', 'Common Trap'],
          rows: [
            ['Target voice', 'Named scholar, critics, research team, or passage author', 'Precise speaker identification', 'Confusing the author\'s commentary for the target\'s own position'],
            ['Attributed claims', 'Statements introduced with "argues," "maintains," "according to"', 'Separating attribution from evaluation', 'Picking a claim that appears in the passage but belongs to a different speaker'],
            ['Force of commitment', 'Would agree, would reject, would endorse, would describe as incomplete', 'Matching strength of the answer to the stem\'s verb', 'Overstating or understating what the speaker actually commits to'],
            ['Comparative framing', 'Both passages, Passage A vs. Passage B, agreement/disagreement stems', 'Independent voice tracking before comparing', 'Blending two speakers\' partial agreement into full agreement']
          ]
        },
        { type: 'paragraph', text: 'Quick example: A stem asks what "the historians mentioned in paragraph 2" would most likely agree with. You must return to paragraph 2, collect only the claims the passage attributes to those historians, and test each answer choice against that specific ledger -- not against the passage as a whole.' },
        {
          type: 'list',
          items: [
            'Read the stem to identify the exact target voice and the exact issue being asked about.',
            'Build a mental speaker ledger: who claims what, and how does the author react?',
            'Separate attribution language ("argues," "maintains") from evaluation language ("however," "mistaken").',
            'Match answer choices to both the correct speaker and the correct degree of commitment.',
            'For agreement/disagreement stems, compare speakers independently before testing overlap.'
          ]
        },
        { type: 'callout', variant: 'tip', title: 'Key Principle', text: 'Every important statement in a debate passage has an owner. If you cannot name the owner, you are not ready to answer the question.' }
      ]
    }
  }
};
