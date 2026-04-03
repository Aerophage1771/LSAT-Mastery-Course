import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "39-1",
  title: "Introduction",
  content: [
    { type: 'h3', text: "Germaine's Guide to RC Structure Questions" },
    { type: 'h4', text: "What are Structure questions actually asking you to see?" },
    { type: 'paragraph', text: "Structure questions ask for the *job* the passage is doing, not the topic it is discussing. In the real pool, the dominant stem is some version of \"Which one of the following best describes the organization...\" But that surface wording hides several different tasks: sometimes you need the blueprint of the whole passage, sometimes the function of one paragraph, and sometimes the relationship between two distant parts of the passage." },
    { type: 'paragraph', text: "This category is not huge, but it is extremely diagnostic. There are **48** Structure questions in the live RC pool, and **22** of them are difficulty 4 or 5. That means LSAC uses structure to separate students who merely followed the subject matter from students who tracked the passage's architecture." },
    { type: 'list', items: [
      "Track **what each paragraph is doing**, not just what it says.",
      "Notice **shifts in function**: presenting a view, challenging it, qualifying it, extending it, or applying it.",
      "Translate the passage into **abstract verbs** before you ever look at the answer choices."
    ]},
    { type: 'callout', title: "Early Style Hypothesis", variant: "summary", text: "One of the fastest ways to stabilize a Structure question is to ask early whether the passage looks like a **debate**, **single-position**, **phenomenon-hypothesis**, **problem-analysis**, **spotlight**, or **hybrid** passage. That is not a rigid taxonomy game. It is a reading aid that helps you predict the kinds of paragraph jobs and pivots you are likely to see." },
    { type: 'paragraph', text: "Spotlight passages often feel more narrative or descriptive than argumentative. Structurally, they often move by introducing the subject in focus and then explaining what origin, influence, impact, or distinctive feature makes that subject worth studying." },
    { type: 'hr' },
    { type: 'h3', text: "The Main Structure Tasks in the Pool" },
    {
      type: 'breakdown',
      labels: { title: 'Task', text: 'How it appears in the real questions' },
      items: [
        {
          title: "Whole-Passage Blueprint",
          text: "The stem asks for the organization of the passage or the material presented. These questions test whether you can compress the entire passage into a sequence of functions such as **introduces a prevailing view -> identifies a problem -> proposes an alternative -> explains why the alternative matters**.",
          badge: "Most common",
          badgeColor: "indigo"
        },
        {
          title: "Paragraph-Level Structure",
          text: "The stem asks about the organization or structure of a specific paragraph. These are harder than they look because one paragraph often does more than one thing: it may summarize an old view and then begin to criticize it, or give evidence and then draw a modest inference.",
          badge: "Precision",
          badgeColor: "blue"
        },
        {
          title: "Relationship Questions",
          text: "The stem asks for the relationship between two paragraphs or parts of the passage. These are often the most advanced because they force you to compare functions across distance: setup vs. resolution, objection vs. reply, earlier hypothesis vs. later qualification.",
          badge: "High difficulty",
          badgeColor: "green"
        }
      ]
    },
    { type: 'callout', title: "The Core Mistake to Avoid", variant: "summary", text: "A Structure answer must describe the passage's **movement**. If the answer mostly summarizes content, names a subject, or tells you what the passage is about instead of how it unfolds, it is probably wrong." },
    { type: 'h3', text: "What the Stems Usually Look Like" },
    { type: 'paragraph', text: "The pool is heavily concentrated around organization language. But the hard questions often hide behind more specific versions of the same task." },
    {
      type: 'breakdown',
      labels: { title: 'Stem Family', text: 'Common wording from the pool' },
      items: [
        {
          title: "Organization of the Passage",
          text: "**Keywords:** organization, material presented, passage can be described as\n\nThis is the classic whole-passage blueprint question.",
          badge: "Blueprint",
          badgeColor: "indigo"
        },
        {
          title: "Structure of a Paragraph",
          text: "**Keywords:** structure of the second paragraph, organization of the final paragraph, proceeds\n\nThis asks you to isolate what a local section is doing inside the larger argument.",
          badge: "Local role",
          badgeColor: "blue"
        },
        {
          title: "Relationship Between Two Parts",
          text: "**Keywords:** relationship between the second paragraph and the final paragraph, relation between\n\nThis asks how one part sets up, supports, qualifies, extends, or contrasts with another.",
          badge: "Cross-paragraph",
          badgeColor: "green"
        }
      ]
    },
    { type: 'h3', text: "Why Structure Questions Get Missed" },
    { type: 'table', headers: ["Trap", "What it looks like"], rows: [
      ["Topic Trap", "The answer accurately names what the passage discusses but says little about how the discussion develops."],
      ["Verb Trap", "The answer uses the wrong action verb: \"refutes\" instead of \"qualifies,\" or \"endorses\" instead of \"presents for consideration.\""],
      ["Sequence Trap", "The answer includes the right moves but in the wrong order."],
      ["Scope Trap", "The answer describes the passage globally when the question asks only about one paragraph, or vice versa."]
    ]},
    { type: 'h3', text: "What High-Difficulty Structure Questions Usually Demand" },
    { type: 'paragraph', text: "The difficult Structure questions in this pool often appear in science hypothesis passages, debate passages in law or humanities, and passages with a late-stage qualification or turn. The hard part is usually not locating the main idea. It is tracking whether the author **merely presents** a view, **leans toward** it, **criticizes** it, or **revises** it." },
    { type: 'list', items: [
      "A paragraph can begin by **summarizing** an older view and end by **signaling its weakness**.",
      "The final paragraph often does not simply conclude. It may **reframe**, **limit**, or **show implications** of the earlier discussion.",
      "A relationship question often turns on whether the later paragraph **answers a problem**, **extends an example**, or **revises the stakes** introduced earlier."
    ]},
    { type: 'callout', title: "Overarching Takeaway", variant: "summary", text: "For Structure questions, think in verbs and transitions. Build a map of functions, then ask which answer reproduces that map most faithfully." },
    { type: 'h3', text: "Why This Module Matters" },
    { type: 'paragraph', text: "Strong RC performance depends on structure long before a Structure question appears. If you can track the blueprint of the passage, Main Idea, Function, Viewpoint, and even many Inference questions become easier. This module is really teaching the reading habit that the rest of RC lives on." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h3",
          "text": "Germaine's Guide to RC Structure Questions"
        },
        {
          "type": "h4",
          "text": "What's this question asking?"
        },
        {
          "type": "paragraph",
          "text": "Structure questions ask you to identify the overall logical organization of the passage. Your goal is to create a \"blueprint\" that maps out how the author builds their argument from beginning to end, recognizing the function of each paragraph and how they connect to form a cohesive whole."
        },
        {
          "type": "paragraph",
          "text": "A correct answer will accurately describe the passage's flow using abstract language. Common organizational patterns often include:"
        },
        {
          "type": "list",
          "items": [
            "Presenting a widely held view, then challenging it with new evidence.",
            "Introducing a problem, evaluating several proposed solutions, and then endorsing one.",
            "Explaining a complex phenomenon by tracing its historical development.",
            "Stating a central claim, providing supporting examples, and then addressing a potential counterargument."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Stem Identification: How to Spot a Structure Question"
        },
        {
          "type": "paragraph",
          "text": "Structure questions ask you to identify the logical organization of the passage or a specific part of it. The chart below breaks down the common phrasing patterns used to ask about the passage's blueprint."
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Category",
            "text": "Examples & Keywords"
          },
          "items": [
            {
              "title": "Direct Inquiry",
              "text": "**Keywords:** organization, structure, proceeds, presentation of material\n\n• \"Which one of the following best describes the **organization of the passage**?\" <br>• \"Which one of the following most accurately represents the **structure of the second paragraph**?\" <br>• \"The author's discussion in the first paragraph **proceeds in which one of the following ways**?\"",
              "badge": "Organization",
              "badgeColor": "indigo"
            },
            {
              "title": "Sequential Flow",
              "text": "**Keywords:** sequence, described as\n\n• \"Which one of the following **sequences** most accurately expresses the organization of the passage?\" <br>• \"The passage can be most accurately **described as**...\"",
              "badge": "Sequence",
              "badgeColor": "blue"
            },
            {
              "title": "Relational Structure",
              "text": "**Keywords:** relationship between, relation between\n\n• \"Which one of the following most accurately describes the **relationship between the second paragraph and the final paragraph**?\" <br>• \"Which one of the following describes the **relation between the argumentation** in the second paragraph and that in the third paragraph?\"",
              "badge": "Relations",
              "badgeColor": "green"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Overarching Takeaway",
          "variant": "summary",
          "text": "Your goal is to map the passage's logical progression using abstract, functional language. Look for answer choices that describe the flow, such as \"a hypothesis is presented, then evidence is offered,\" rather than summarizing the topic."
        },
        {
          "type": "h3",
          "text": "The Importance of Structure Questions"
        },
        {
          "type": "paragraph",
          "text": "Structure questions appear 48 times among the released LSATs. These questions require you to create a logical \"blueprint\" of the entire passage. Mastering this skill is a powerful indicator of your overall comprehension, as it requires you to understand not just what the author says, but how all the pieces of their argument fit together to support the main conclusion."
        }
      ],
    },
    glance: {
      label: "At a Glance",
      content: [
        { type: 'h2', text: "Structure Questions -- At a Glance" },
        { type: 'paragraph', text: "Your goal is to describe the passage's organizational blueprint -- the sequence of jobs each paragraph performs. Structure questions appear **48 times** in the released pool, and nearly half are difficulty 4 or 5." },
        {
          type: 'table',
          headers: ['Element', 'What to Look For', 'Core Skill', 'Common Trap'],
          rows: [
            ['Stem language', '"Organization of the passage," "structure of the paragraph," "relationship between paragraphs"', 'Recognizing whole-passage vs. local-scope requests', 'Answering a paragraph question with a whole-passage blueprint'],
            ['Paragraph jobs', 'Introduces a view, raises a problem, gives evidence, qualifies, extends', 'Labeling function, not topic', 'Summarizing what a paragraph says instead of what it does'],
            ['Transition pivots', '"However," "Therefore," "For example," "Nevertheless"', 'Using signposts as structural evidence', 'Ignoring the turning points and remembering only the ideas'],
            ['Verb precision', '"Presents" vs. "endorses," "qualifies" vs. "refutes," "explains" vs. "evaluates"', 'Matching the correct degree of commitment', 'Overstating the author\'s stance with too-strong verbs']
          ]
        },
        { type: 'paragraph', text: "For example, if a passage introduces a dominant account, presents evidence that account cannot explain, develops an alternative, and explains why the alternative matters, the correct answer must mirror that four-step sequence with precise verbs -- not just name the topic." },
        {
          type: 'list',
          items: [
            "Assign each paragraph a functional label (not a topic summary)",
            "Track transition words as structural evidence",
            "Form an early style hypothesis: debate, single-position, phenomenon-hypothesis, spotlight, or hybrid",
            "Translate your paragraph map into abstract verbs before reading answers",
            "On local questions, narrow your map to exactly the scope the stem requests"
          ]
        },
        { type: 'callout', variant: 'tip', title: 'Key Principle', text: "A Structure answer must describe the passage's movement. If the answer mostly summarizes content, names a subject, or tells you what the passage is about instead of how it unfolds, it is probably wrong." }
      ]
    }
  }
};
