import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "26-1",
  title: "Introduction",
  content: [
    { type: 'h3', text: "Germaine's Guide to RC Analogy Questions" },
    { type: 'h4', text: "What's this question asking?" },
    { type: 'paragraph', text: "Analogy questions ask you to identify the underlying structure of a relationship or situation described in the passage and then find a parallel situation in the answer choices. Your goal is to ignore the superficial subject matter and focus entirely on matching the logic or principle." },
    { type: 'paragraph', text: "This often involves breaking down the scenario in the passage into a general rule and then testing which answer choice follows that rule:" },
    { type: 'list', items: [
      "**Identify the original relationship:** What are the key components and how do they interact? (e.g., A tool is created for one purpose but is co-opted for a more popular, unintended one).",
      "**State the relationship abstractly:** Formulate a general principle. (e.g., \"X is designed for Y, but becomes famous for Z\").",
      "**Test the choices:** Find the one answer choice that perfectly fits the abstract principle you just formulated."
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Stem Identification: How to Spot an Analogy Question" },
    { type: 'paragraph', text: "Analogy questions require you to identify the fundamental structure, principle, or relationship within a scenario from the passage and then find a completely different scenario in the answer choices that operates on the exact same underlying logic. The goal is to ignore superficial topics and match the abstract blueprint." },
    { 
      type: 'breakdown', 
      labels: { title: 'Category', text: 'Examples & Keywords' }, 
      items: [
        { 
          title: "Direct Comparison Phrasing", 
          text: "**Keywords:** analogous to, similar to, likened to, parallel to\n\n• \"Which one of the following situations is **most analogous** to the one introduced in the second sentence of the passage?\"\n• \"Which one of the following creative processes is **most similar** to Miles Davis's typical studio procedure...?\"\n• \"...can best be **likened to**\"", 
          badge: "Comparison", 
          badgeColor: "indigo" 
        },
        { 
          title: "Relational Parallel Phrasing", 
          text: "**Keywords:** relationship between... is most analogous to\n\n• \"The **relationship between** which one of the following pairs... is **most analogous to the relationship between** passage A and passage B?\"\n• \"Based on the passage, the **relationship between** strengthening current copyright laws and relying on passwords... is **most analogous to the relationship between**...\"", 
          badge: "Relation", 
          badgeColor: "blue" 
        },
        { 
          title: "Exemplification Phrasing", 
          text: "**Keywords:** illustrates, exemplifies, example of, conforms to\n\n• \"Which one of the following situations most clearly **illustrates** the phenomenon of intertextualism...?\"\n• \"Titus's approach to vetting folktales would be most closely **exemplified by**...\"\n• \"Which one of the following scenarios most completely **conforms to** the views attributed to philosophical anarchists...?\"", 
          badge: "Example", 
          badgeColor: "green" 
        }
      ] 
    },
    { type: 'callout', title: "Overarching Takeaway", variant: "summary", text: "Don't get fooled by answer choices that share a topic with the passage. Your task is to abstract the core logic, structure, or relationship from the passage scenario and find the one answer choice that perfectly matches that abstract \"blueprint,\" regardless of the subject matter." },
    { type: 'h3', text: "The Importance of Analogy Questions" },
    { type: 'paragraph', text: "Analogy questions appear 83 times among the released LSATs, making up about 4% of all Reading Comprehension questions. While not the most common type, they test a crucial high-level skill: abstract reasoning. Mastering analogies forces you to move beyond the surface content and identify the underlying logical structure of an argument or relationship. This skill is highly transferable and will strengthen your ability to recognize parallel reasoning in the Logical Reasoning section." },
    { type: 'paragraph', text: "So, dedicate time to understanding the method, but do not let this question type become a major stumbling block at the expense of more frequent ones. Think of it as a skill that can reliably add points but is not the foundation of your RC strategy." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h3",
          "text": "Germaine's Guide to RC Analogy Questions"
        },
        {
          "type": "h4",
          "text": "What's this question asking?"
        },
        {
          "type": "paragraph",
          "text": "Analogy questions ask you to identify the underlying structure of a relationship or situation described in the passage and then find a parallel situation in the answer choices. Your goal is to ignore the superficial subject matter and focus entirely on matching the logic or principle."
        },
        {
          "type": "paragraph",
          "text": "This often involves breaking down the scenario in the passage into a general rule and then testing which answer choice follows that rule:"
        },
        {
          "type": "list",
          "items": [
            "**Identify the original relationship:** What are the key components and how do they interact? (e.g., A tool is created for one purpose but is co-opted for a more popular, unintended one).",
            "**State the relationship abstractly:** Formulate a general principle. (e.g., \"X is designed for Y, but becomes famous for Z\").",
            "**Test the choices:** Find the one answer choice that perfectly fits the abstract principle you just formulated."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Stem Identification: How to Spot an Analogy Question"
        },
        {
          "type": "paragraph",
          "text": "Analogy questions require you to identify the fundamental structure, principle, or relationship within a scenario from the passage and then find a completely different scenario in the answer choices that operates on the exact same underlying logic. The goal is to ignore superficial topics and match the abstract blueprint."
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Category",
            "text": "Examples & Keywords"
          },
          "items": [
            {
              "title": "Direct Comparison Phrasing",
              "text": "**Keywords:** analogous to, similar to, likened to, parallel to\n\n• \"Which one of the following situations is **most analogous** to the one introduced in the second sentence of the passage?\"\n• \"Which one of the following creative processes is **most similar** to Miles Davis's typical studio procedure...?\"\n• \"...can best be **likened to**\"",
              "badge": "Comparison",
              "badgeColor": "indigo"
            },
            {
              "title": "Relational Parallel Phrasing",
              "text": "**Keywords:** relationship between... is most analogous to\n\n• \"The **relationship between** which one of the following pairs... is **most analogous to the relationship between** passage A and passage B?\"\n• \"Based on the passage, the **relationship between** strengthening current copyright laws and relying on passwords... is **most analogous to the relationship between**...\"",
              "badge": "Relation",
              "badgeColor": "blue"
            },
            {
              "title": "Exemplification Phrasing",
              "text": "**Keywords:** illustrates, exemplifies, example of, conforms to\n\n• \"Which one of the following situations most clearly **illustrates** the phenomenon of intertextualism...?\"\n• \"Titus's approach to vetting folktales would be most closely **exemplified by**...\"\n• \"Which one of the following scenarios most completely **conforms to** the views attributed to philosophical anarchists...?\"",
              "badge": "Example",
              "badgeColor": "green"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Overarching Takeaway",
          "variant": "summary",
          "text": "Don't get fooled by answer choices that share a topic with the passage. Your task is to abstract the core logic, structure, or relationship from the passage scenario and find the one answer choice that perfectly matches that abstract \"blueprint,\" regardless of the subject matter."
        },
        {
          "type": "h3",
          "text": "The Importance of Analogy Questions"
        },
        {
          "type": "paragraph",
          "text": "Analogy questions appear 83 times among the released LSATs, making up about 4% of all Reading Comprehension questions. While not the most common type, they test a crucial high-level skill: abstract reasoning. Mastering analogies forces you to move beyond the surface content and identify the underlying logical structure of an argument or relationship. This skill is highly transferable and will strengthen your ability to recognize parallel reasoning in the Logical Reasoning section."
        },
        {
          "type": "paragraph",
          "text": "So, dedicate time to understanding the method, but do not let this question type become a major stumbling block at the expense of more frequent ones. Think of it as a skill that can reliably add points but is not the foundation of your RC strategy."
        }
      ],
    },
    glance: {
      label: "At a Glance",
      content: [
        { type: 'h2', text: "RC Analogy — At a Glance" },
        { type: 'paragraph', text: "Analogy questions appear roughly 83 times across released LSATs (~4% of RC questions). They ask you to identify the underlying structure of a relationship from the passage and find a completely different scenario in the answer choices that operates on the same abstract logic. The topic of the answer choice is irrelevant — only the structural match matters." },
        { type: 'table', headers: ["Stem Language", "What It Signals", "Example Phrasing"], rows: [
          ["Analogous / Similar / Parallel", "Find a structural match to a passage scenario", "\"Most analogous to the situation described in...\""],
          ["Relationship Between", "Match a two-part relational structure", "\"The relationship between X and Y is most analogous to...\""],
          ["Illustrates / Exemplifies / Conforms to", "Find a real-world instance of a principle", "\"Which situation most clearly illustrates the phenomenon of...\""]
        ]},
        { type: 'list', ordered: true, items: [
          "Locate the exact scenario in the passage the stem points to.",
          "Break it down: what are the key components and how do they relate? (cause/effect, intention/outcome, role/function)",
          "State the relationship in one abstract sentence — strip out all topic-specific language.",
          "Test each answer choice against your abstract rule; eliminate partial matches and same-topic-but-wrong-relationship choices.",
          "Confirm your pick with the Reverse Test: can the passage scenario also fit a rule derived from your chosen answer?"
        ]},
        { type: 'callout', variant: 'tip', title: "The Core Discipline", text: "Ignore the surface topic of every answer choice. You are not matching subject matter — you are matching logical blueprints. An answer about cooking can be a perfect analogy to a legal concept if the structure is identical." }
      ],
    },
  },
};
