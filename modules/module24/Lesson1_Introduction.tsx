import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "24-1",
  title: "Introduction",
  content: [
    { type: 'h3', text: 'Introduction: Main Idea' },
    { type: 'paragraph', text: "Main Idea questions ask you to identify the central idea of a passage. You want to find the single answer choice that best combines the entire scope of the passage without introducing information that is absent from the passage." },
    { type: 'paragraph', text: "The correct answer must capture the overall perspective the author advances, or the overall perspective the passage mainly develops when the author stays relatively neutral. It must also be stated or strongly supported by the passage." },
    { type: 'paragraph', text: "A good main point will answer the question: \"What is the one thing the author most wants me to understand after reading this?\" This often involves synthesizing:" },
    { 
      type: 'list', 
      items: [
        "A **problem** and the author's proposed **solution**.",
        "A **common theory** and the author's **alteration** of it.",
        "An **explanation** for a puzzling phenomenon.",
        "A **comparison** of two or more things to arrive at a judgment.",
        "A **person, work, or development** and what makes it significant, distinctive, or interesting."
      ] 
    },
    { type: 'h4', text: "LR to RC: Same Tools, Different Posture" },
    { type: 'paragraph', text: "RC still rewards the same structural habits you use in LR: tracking conclusions, support, competing views, and logical pivots. But the posture changes. In RC, your first job is not to attack the passage sentence by sentence. Your first job is to understand the passage's architecture well enough that later questions have somewhere stable to land." },
    {
      type: 'breakdown',
      labels: { title: 'Front-door shift', text: 'What to do differently in RC' },
      items: [
        {
          title: "Use the same tools",
          text: "Track viewpoint ownership, support, contrast, causal claims, and qualifiers just as you would in LR.",
          badge: "Same toolkit",
          badgeColor: "indigo"
        },
        {
          title: "Adopt a different posture",
          text: "Read first for understanding, blueprint, and orientation. Do not start by hunting for flaws or trying to pre-answer every possible question.",
          badge: "Different posture",
          badgeColor: "blue"
        },
        {
          title: "Expect temporary blur",
          text: "RC often feels hard because you are holding several paragraphs, voices, and functions at once. Temporary confusion is normal. The fix is a cleaner low-resolution map, not panicked rereading of every detail.",
          badge: "Calibration",
          badgeColor: "green"
        }
      ]
    },
    { type: 'callout', title: "Why RC Feels Hard", variant: "summary", text: "Most RC misses come from one of three things: losing track of **who** believes what, losing the **function** of a paragraph, or mistaking supporting detail load for main-point difficulty. The cure is a stable reading method: low-resolution paragraph summaries, perspective tracking, author-opinion tracking, next-paragraph prediction, and a post-reading recap." },
    { type: 'hr' },
    { type: 'h3', text: "Stem Identification: How to Spot a Main Idea Question" },
    { type: 'paragraph', text: "Main Idea questions can be phrased in a few similar ways. They will usually ask you for a main point/idea/conclusion. Occasionally they will substitute \"central\" for \"main\" or directly ask for a \"summary.\"" },
    { 
      type: 'breakdown', 
      labels: { title: 'Category', text: 'Examples' }, 
      items: [
        { 
          title: "Direct Phrasing", 
          text: "• \"Which one of the following most accurately expresses the **main point** of the passage?\" \n• \"Which one of the following best states the **main idea** of the passage?\" \n• \"Which one of the following most accurately states the **author's main conclusion**?\"",
          badge: "Common",
          badgeColor: "indigo"
        },
        {
          title: "Summary & Conclusion Phrasing",
          text: "• \"Which one of the following most accurately **summarizes** the passage?\" \n• \"The **central idea** of the passage is...\"", 
          badge: "Variation", 
          badgeColor: "blue" 
        }
      ] 
    },
    { type: 'callout', title: "Summary-Stem Reminder", variant: "summary", text: "If the stem asks for the best **summary**, treat it as a Main Idea task. If it asks for the best **title**, the same big-picture synthesis still matters, but the dedicated title workflow lives in `Module 40: Title`." },
    { type: 'callout', title: "Overarching Takeaway", variant: "summary", text: "Don't get thrown off by the minor variations in wording. Whether the stem asks for the \"main point,\" \"main idea,\" a \"summary,\" or the \"main conclusion,\" your task is exactly the same. You are looking for the one \"umbrella\" statement that accurately and most completely captures the author's central claims." },
    { type: 'h3', text: 'The Importance of Main Idea Questions' },
    { type: 'paragraph', text: "Main Idea questions appear about 225 times among the last 225 released LSATs, making up **approximately 11%** of all Reading Comprehension questions, so mastering this question type is **critical**. Further, if you understand the author's main point, you will find it much easier to answer other questions about the passage's structure, tone, and the function of specific details. Devoting effort to this skill will pay dividends across the entire RC section." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h3",
          "text": "Germaine's Guide to RC Main Conclusion Questions"
        },
        {
          "type": "paragraph",
          "text": "Main Idea questions ask you to identify the central idea of a passage. You want to find the single answer choice that best combines the entire scope of the passage without introducing information that is absent from the passage."
        },
        {
          "type": "paragraph",
          "text": "A good main point will answer the question: \"What is the one thing the author most wants me to understand after reading this?\" This often involves synthesizing:"
        },
        {
          "type": "list",
          "items": [
            "A **problem** and the author's proposed **solution**.",
            "A **common theory** and the author's **alteration** of it.",
            "An **explanation** for a puzzling phenomenon.",
            "A **comparison** of two or more things to arrive at a judgment."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Stem Identification: How to Spot a Main Idea Question"
        },
        {
          "type": "paragraph",
          "text": "Main Idea questions can be phrased in a few similar ways. They will usually ask you for a main point/idea/conclusion. Occasionally they will substitute \"central\" for \"main\" or directly ask for a \"summary.\""
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Category",
            "text": "Examples"
          },
          "items": [
            {
              "title": "Direct Phrasing",
              "text": "• \"Which one of the following most accurately expresses the **main point** of the passage?\" \n• \"Which one of the following best states the **main idea** of the passage?\" \n• \"Which one of the following most accurately states the **author's main conclusion**?\"",
              "badge": "Common",
              "badgeColor": "indigo"
            },
            {
              "title": "Summary & Conclusion Phrasing",
              "text": "• \"Which one of the following most accurately **summarizes** the passage?\" \n• \"The **central idea** of the passage is...\"",
              "badge": "Variation",
              "badgeColor": "blue"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Overarching Takeaway",
          "variant": "summary",
          "text": "Don't get thrown off by the minor variations in wording. Whether the stem asks for the \"main point,\" \"main idea,\" a \"summary,\" or the \"main conclusion,\" your task is exactly the same. You are looking for the one \"umbrella\" statement that accurately and most completely captures the author's central claims."
        },
        {
          "type": "h3",
          "text": "The Importance of Main Conclusion Questions"
        },
        {
          "type": "paragraph",
          "text": "Main Idea questions appear about 225 times among the last 225 released LSATs, making up **approximately 11%** of all Reading Comprehension questions, so mastering this question type is **critical**. Further, if you understand the author's main point, you will find it much easier to answer other questions about the passage's structure, tone, and the function of specific details. Devoting effort to this skill will pay dividends across the entire RC section."
        }
      ],
    },
    glance: {
      label: 'At a Glance',
      content: [
        { type: 'h2', text: 'Main Idea — At a Glance' },
        {
          type: 'callout',
          title: 'Question Goal',
          variant: 'default',
          text: 'Identify the **central message** or overall perspective the author wants the reader to take away from the entire passage.',
        },
        { type: 'h3', text: 'Key Signals' },
        {
          type: 'list',
          items: [
            '"Which one of the following most accurately expresses the main point of the passage?"',
            '"The primary purpose of the passage is to..."',
            '"Which one of the following best summarizes the passage?"',
          ],
        },
        { type: 'h3', text: 'Quick Method' },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Read for structure** — identify the author\'s thesis and how each paragraph supports it.',
            '**Prephrase** — before looking at answers, state the main idea in your own words.',
            '**Eliminate** — cut answers that are too narrow (just one paragraph) or too broad (beyond the passage).',
            '**Confirm** — the correct answer captures the WHOLE passage, not just part of it.',
          ],
        },
        {
          type: 'callout',
          title: 'Common Trap',
          variant: 'tip',
          text: 'Wrong answers often describe a **supporting detail** that is true but too narrow to be the main point. The correct answer must account for the entire passage.',
        },
      ],
    },
  },
};
