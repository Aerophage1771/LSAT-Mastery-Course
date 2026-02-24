import type { ContentBlock } from '../types';

/**
 * Templates content map:
 * - Introduction: existing rendered JSX template
 * - Step-by-step, Common roles, Reference guides: standardized to intro-like cadence
 * - LR Lesson, RC Passage Analysis, RC Question: split from former combined Lessons tab
 * - RC Question Type Intro: new template based on RC module intro pattern
 */

const obasanPassageText = `Joy Kogawa's Obasan is an account of a Japanese-Canadian family's experiences during World War II. The events are seen from the viewpoint of a young girl who watches her family disintegrate as it undergoes the relocation that occurred in both Canada and the United States. Although the experience depicted in Obasan is mainly one of dislocation, Kogawa employs subtle techniques that serve to emphasize her major character's heroism and to critique the majority culture. The former end is achieved through the novel's form and the latter through the symbols it employs.

The form of the novel parallels the three-stage structure noted by anthropologists in their studies of rites of passage. According to these anthropologists, a rite of passage begins with separation from a position of security in a highly structured society; proceeds to alienation in a deathlike state where one is stripped of status, property, and rank; and concludes with reintegration into society accompanied by a heightened status gained as a result of the second stage. The process thus has the effect of transforming a society's victim into a hero. The first eleven chapters of Obasan situate the young protagonist Naomi Nakane in a close-knit, securely placed family within Vancouver society. Chapters 12–32 chronicle the fall into alienation, when Naomi's family is dislodged from its structured social niche and removed from the city into work camps or exile. Separated from her parents, Naomi follows her aunt Aya Obasan to the ghost town of Slocan, where Naomi joins the surrogate family of her uncle and aunt. In chapters 33–39 this surrogate family nurtures Naomi as she develops toward a final integration with the larger society and with herself: as an adult, when she receives a bundle of family documents and letters from her aunt, Naomi breaks through the personal and cultural screens of silence and secretiveness that have enshrouded her past, and reconciles herself with her history.

Kogawa's use of motifs drawn from Christian rituals and symbols forms a subtle critique of the professed ethics of the majority culture that has shunned Naomi. In one example of such symbolism, Naomi's reacquaintance with her past is compared with the biblical story of turning stone into bread. The bundle of documents—which Kogawa refers to as "stone-hard facts"—brings Naomi to the recognition of her country's abuse of her people. But implicit in these hard facts, Kogawa suggests, is also the "bread" of a spiritual sustenance that will allow Naomi to affirm the durability of her people and herself. Through the careful deployment of structure and symbol, Kogawa thus manages to turn Naomi's experience—and by extension the wartime experiences of many Japanese Canadians—into a journey of heroic transformation and a critique of the majority culture.`;

export const templatesIntroductionContent: ContentBlock[] = [
  { type: 'h2', text: 'Question Goal' },
  {
    type: 'callout',
    text: '**Define the logical function** a particular sentence serves within the argument. Is the statement the main conclusion, a supporting premise, an intermediate step, or a concession to an opposing view?',
    variant: 'goal',
  },
  { type: 'hr' },
  { type: 'h2', text: 'Introduction' },
  {
    type: 'paragraph',
    text: 'One or two paragraphs: what this question type is, how it fits with what the student has seen before, and why it matters. Define key terms and set expectations.',
  },
  {
    type: 'paragraph',
    text: 'Optional second paragraph: contrast with related question types or clarify scope (e.g., "Unlike X questions, which ask for…, this type asks for…").',
  },
  { type: 'hr' },
  { type: 'h2', text: 'Common Question Stems' },
  {
    type: 'paragraph',
    text: 'You can recognize these questions because they [cite a specific phrase / ask for the main point / etc.]. Typical phrasing includes:',
  },
  {
    type: 'list',
    items: [
      '"The statement that [X] plays which one of the following roles in the argument?"',
      '"Which one of the following most accurately [states/expresses] the [main conclusion/main point] of the argument?"',
      'Add 1–3 more stem patterns for this question type.',
    ],
  },
  { type: 'hr' },
  { type: 'h2', text: 'Core Concepts' },
  {
    type: 'paragraph',
    text: 'To solve these questions, [brief principle or framework]. Your goal is to [what the student should do].',
  },
  {
    type: 'paragraph',
    text: 'Optional: short example argument in a blockquote, then a list labeling each part (Main Conclusion, Premise, etc.).',
  },
  {
    type: 'list',
    items: [
      '**Concept 1:** Definition and how it appears on the test.',
      '**Concept 2:** Definition and how it appears on the test.',
      'Add more as needed for this module.',
    ],
  },
  { type: 'hr' },
  { type: 'h2', text: 'Key Terms or Roles Explained' },
  {
    type: 'list',
    ordered: true,
    items: [
      '**Term/Role 1:** Clear definition. One sentence.',
      '**Term/Role 2:** Clear definition. One sentence.',
      'Use an ordered list when order matters; otherwise use an unordered list.',
    ],
  },
];

export const templatesStepByStepContent: ContentBlock[] = [
  { type: 'h2', text: 'Question Goal' },
  {
    type: 'callout',
    variant: 'goal',
    text: '**Teach a repeatable solving process** that students can apply under timed conditions. The outcome is procedural fluency, not just concept recognition.',
  },
  { type: 'hr' },
  { type: 'h2', text: 'Introduction' },
  {
    type: 'paragraph',
    text: 'Method lessons (typically Lesson 2 in a module) convert abstract concepts into a dependable algorithm. Keep language directive and action-oriented.',
  },
  {
    type: 'paragraph',
    text: 'Tell students what they should do first, second, and third when they face this question type in real exam conditions.',
  },
  { type: 'hr' },
  { type: 'h2', text: 'Standard Approach' },
  {
    type: 'process',
    title: 'Step-by-Step Method',
    steps: [
      'Step 1: Identify the task from the question stem.',
      'Step 2: Apply the method directly to the stimulus or passage.',
      'Step 3: Pre-phrase the expected answer and test choices against that prediction.',
    ],
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'Naming',
    text: 'Use titles like "Step-by-Step Guide" or "Method: [Concept]." Keep step verbs parallel (Identify, Test, Eliminate, Confirm).',
  },
  { type: 'hr' },
  { type: 'h2', text: 'Quality Checklist' },
  {
    type: 'list',
    items: [
      'Each step maps to a distinct action (no overlap).',
      'The method works on both easy and hard examples.',
      'A common failure mode is called out and corrected.',
      'The final step confirms correctness, not just plausibility.',
    ],
  },
];

export const templatesCommonRolesContent: ContentBlock[] = [
  { type: 'h2', text: 'Question Goal' },
  {
    type: 'callout',
    variant: 'goal',
    text: '**Train role recognition** so students can quickly classify what a statement is doing in an argument before evaluating answer choices.',
  },
  { type: 'hr' },
  { type: 'h2', text: 'Introduction' },
  {
    type: 'paragraph',
    text: 'Argument Part and related tasks depend on role clarity. Students should distinguish the author\'s point from the reasons, context, and concessions surrounding it.',
  },
  { type: 'hr' },
  { type: 'h2', text: 'Core Roles' },
  {
    type: 'table',
    headers: ['Role', 'Definition'],
    rows: [
      ['Premise', 'Evidence or reason offered in support of a conclusion.'],
      ['Main Conclusion', 'The central claim the argument is trying to establish.'],
      ['Sub-conclusion', 'A claim supported by premises that also supports the main conclusion.'],
      ['Counter-premise', 'A competing point acknowledged and then answered or reframed.'],
    ],
  },
  { type: 'hr' },
  { type: 'h2', text: 'Common Question Stems' },
  {
    type: 'list',
    items: [
      '"The claim that X plays which one of the following roles in the argument?"',
      '"Which one of the following most accurately describes the role of the statement that X?"',
      '"The statement above functions primarily as..."',
    ],
  },
  { type: 'hr' },
  { type: 'h2', text: 'Core Concepts' },
  {
    type: 'list',
    items: [
      'Track support direction: ask what this sentence supports and what supports it.',
      'Prioritize structural function over content topic.',
      'Use indicator words carefully, but do not rely on them blindly.',
    ],
  },
];

const lessonsComponents: ContentBlock[] = [
  { type: 'h2', text: 'Typography & Structure' },
  { type: 'paragraph', text: 'The course utilizes a semantic hierarchy to organize complex logical reasoning concepts. The text is rendered in **Slate-700** for optimal readability, supporting *italics* for emphasis and `code blocks` for technical terms.' },
  { type: 'blockquote', text: 'Blockquotes are used to present stimulus text, excerpts, or specific rules that are being analyzed.' },
  { type: 'hr' },
  { type: 'h2', text: 'Analysis Components' },
  { type: 'paragraph', text: 'We employ specialized structural components to break down LSAT arguments visually.' },
  { type: 'h3', text: '1. The Breakdown Component' },
  {
    type: 'breakdown',
    labels: { title: 'Element', text: 'Analysis' },
    items: [
      { title: 'Stimulus Text', text: 'The raw text from the question is presented here.', badge: 'Context', badgeColor: 'slate' },
      { title: 'Structural Role', text: 'We identify the function (e.g., Premise, Conclusion).', badge: 'Premise', badgeColor: 'indigo' },
      { title: 'Correct Answer', text: 'Validation of why an answer choice is correct.', badge: 'Correct', badgeColor: 'green' },
      { title: 'Trap Answer', text: 'Explanation of a specific logical flaw or trap.', badge: 'Mismatch', badgeColor: 'red' },
    ],
  },
  { type: 'h3', text: '2. The Process Component' },
  {
    type: 'process',
    title: 'Standard Approach',
    steps: [
      'Read the question stem to identify the task.',
      'Deconstruct the argument into premises and conclusion.',
      'Pre-phrase the answer based on the identified flaw or pattern.',
      'Eliminate answer choices that do not match the pre-phrase.',
    ],
  },
  { type: 'h3', text: '3. Callout Blocks' },
  { type: 'callout', variant: 'default', title: 'Concept Note', text: 'Used for general information or side notes relevant to the lesson.' },
  { type: 'callout', variant: 'tip', title: 'Strategy Tip', text: 'Used to highlight shortcuts, common traps, or strategic advice for test day.' },
  { type: 'callout', variant: 'summary', title: 'Lesson Summary', text: 'Used at the end of a module to reinforce the core takeaways.' },
  { type: 'h3', text: '4. Interactive Options' },
  {
    type: 'options',
    items: [
      '(A) The first plausible but incorrect answer choice.',
      '(B) The correct answer choice derived from the logic.',
      '(C) A distractor designed to catch common errors.',
    ],
  },
];

const lessonsStructure: ContentBlock[] = [
  { type: 'h2', text: 'Course Architecture & Standards' },
  { type: 'paragraph', text: 'The LSAT Mastery Course follows a strict pedagogical framework designed to build skills cumulatively. Consistency in naming, tone, and structure is essential for the user experience.' },
  { type: 'hr' },
  { type: 'h3', text: '1. Lesson Naming Conventions' },
  {
    type: 'list',
    items: [
      '**Introduction:** The first lesson of every module.',
      '**Step-by-Step / Method:** Typically the second lesson.',
      '**Drill: [Concept] ([ID]):** Practice lessons.',
      '**Advanced: [Topic]:** Lessons focused on high-level nuance.',
    ],
  },
  { type: 'h3', text: '2. Voice & Tone' },
  {
    type: 'breakdown',
    labels: { title: 'Attribute', text: 'Guideline' },
    items: [
      { title: 'Perspective', text: 'Use "You" to address the student directly.', badge: 'Direct', badgeColor: 'blue' },
      { title: 'Clarity', text: 'Avoid academic fluff. Use precise logic terms.', badge: 'Clear', badgeColor: 'indigo' },
      { title: 'Tone', text: 'Encouraging but rigorous.', badge: 'Professional', badgeColor: 'slate' },
    ],
  },
  { type: 'h3', text: '3. Lesson Typology' },
  {
    type: 'list',
    items: [
      '**Conceptual:** Text-heavy, explanatory.',
      '**Methodological:** Algorithm-focused.',
      '**Drills:** Interactive simulation.',
    ],
  },
];

const lessonsDrills: ContentBlock[] = [
  { type: 'h2', text: 'Drill Format' },
  { type: 'paragraph', text: "Drill lessons follow a strict **'Try, Then Learn'** pedagogy. Keep the structure predictable so students can focus on reasoning quality." },
  { type: 'hr' },
  { type: 'h3', text: 'Authoring Requirements' },
  {
    type: 'list',
    ordered: true,
    items: [
      'Title: use format `Drill: [Concept] ([PT ID])`.',
      'Introduction/Context: 2-3 sentences defining the tested skill.',
      'Problem: include full stimulus, question stem, and answer choices (A-E).',
      'Analysis: include deconstruction, abstraction, and option-by-option evaluation.',
      'Takeaway: end with one concise strategic rule students can reuse.',
    ],
  },
  { type: 'hr' },
  { type: 'h2', text: 'Completed Example (Model Reference)' },
  { type: 'paragraph', text: 'This is a completed drill based on **PT-112-S-4-Q-3**. Use this as the blueprint for formatting all drill content.' },
  { type: 'h3', text: 'Drill: Argument Part - Main Conclusion (PT-112-S-4-Q-3)' },
  { type: 'paragraph', text: 'This drill introduces the second most common role you will encounter: the **Main Conclusion**. It requires identifying the overarching claim that the entire passage is designed to defend.' },
  { type: 'h4', text: 'The Problem' },
  { type: 'blockquote', text: "**Legal theorist:** **It is unreasonable to incarcerate anyone for any other reason than that he or she is a serious threat to the property or lives of other people.** The breaking of a law does not justify incarceration, for lawbreaking proceeds either from ignorance of the law or of the effects of one's actions, or from the free choice of the lawbreaker. Obviously mere ignorance cannot justify incarcerating a lawbreaker, and even free choice on the part of the lawbreaker fails to justify incarceration, for free choice proceeds from the desires of an agent, and the desires of an agent are products of genetics and environmental conditioning, neither of which is controlled by the agent." },
  { type: 'paragraph', text: '**Question:** The claim in the first sentence of the passage plays which one of the following roles in the argument?' },
  {
    type: 'options',
    items: [
      '(A) It is offered as a premise that helps to show that no actions are under the control of the agent.',
      '(B) It is offered as background information necessary to understand the argument.',
      '(C) It is offered as the main conclusion that the argument is designed to establish.',
      '(D) It is offered as evidence for the stated claim that protection of life and property is more important than retribution for past illegal acts.',
      "(E) It is offered as evidence for the stated claim that lawbreaking proceeds from either ignorance of the law, or ignorance of the effects of one's actions, or free choice.",
    ],
  },
  { type: 'hr' },
  { type: 'h3', text: 'Analysis & Explanation' },
  { type: 'paragraph', text: 'The argument flows from the bottom up. The detailed discussion of free will provides the foundation for the intermediate claim about lawbreaking, which in turn proves the main point about incarceration.' },
  {
    type: 'breakdown',
    labels: { title: 'Element', text: 'Logical Role' },
    items: [
      { title: 'First Sentence (Target)', text: "The author's central thesis. The rest of the paragraph provides the 'why' for this belief.", badge: 'Main Conclusion', badgeColor: 'indigo' },
      { title: '"The breaking of a law does not justify incarceration..."', text: 'An intermediate claim. It supports the Main Conclusion directly. It is supported by the rejection of ignorance and choice.', badge: 'Sub-Conclusion', badgeColor: 'indigo' },
      { title: 'Choice (C)', text: 'This perfectly matches the structure. The entire argument is designed to establish this initial claim about the limits of incarceration.', badge: 'Correct', badgeColor: 'green' },
      { title: 'Choice (A)', text: 'Logical Reversal. The claim about control is a premise supporting the conclusion, not the other way around.', badge: 'Trap', badgeColor: 'red' },
    ],
  },
  { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "An initial strong assertion, especially if followed by premise indicators like 'for' or 'since' in subsequent sentences, often signals the main conclusion that the rest of the passage will defend." },
];

const rcPassageAnalysisTemplateCore: ContentBlock[] = [
  { type: 'accordion', title: 'Read Passage (PT-000-S-0-P-0)', content: obasanPassageText },
  { type: 'h3', text: 'Passage Analysis: [Passage Title] ([PT-ID])' },
  {
    type: 'paragraph',
    text: 'Open with 1-2 paragraphs that frame the passage: topic, genre, and the author\'s central objective. Explain what students should focus on before reading paragraph-by-paragraph.',
  },
  {
    type: 'paragraph',
    text: 'Use direct teaching voice and transition into structural analysis.',
  },
  { type: 'hr' },
  { type: 'h4', text: 'Paragraph 1: [Function Label]' },
  {
    type: 'paragraph',
    text: 'Explain what this paragraph does in the argument (for example: introduces thesis, frames debate, defines key term, or presents background context).',
  },
  { type: 'h4', text: 'Paragraph 2: [Function Label]' },
  {
    type: 'paragraph',
    text: 'Explain how this paragraph develops, supports, contrasts, or complicates the initial claim. Reference specific argumentative moves, not just topic summary.',
  },
  { type: 'h4', text: 'Paragraph 3: [Function Label]' },
  {
    type: 'paragraph',
    text: 'Explain the paragraph\'s strategic role (for example: resolution, counterpoint, synthesis, implications, or qualification of earlier claims).',
  },
  {
    type: 'callout',
    title: 'Summary of the Argument',
    variant: 'summary',
    text: 'Close by summarizing the full argumentative structure, viewpoint movement, and takeaway students should carry into question solving.',
  },
];

const rcQuestionTemplateCore: ContentBlock[] = [
  { type: 'accordion', title: 'Read Passage (PT-000-S-0-P-0)', content: obasanPassageText },
  { type: 'h3', text: 'Question [#]: [Question Type] Breakdown' },
  { type: 'blockquote', text: '**Question:** [Insert full question stem exactly as tested]' },
  {
    type: 'options',
    items: [
      '(A) [Answer choice text]',
      '(B) [Answer choice text] (Correct)',
      '(C) [Answer choice text]',
      '(D) [Answer choice text]',
      '(E) [Answer choice text]',
    ],
  },
  { type: 'h4', text: 'Analysis' },
  {
    type: 'paragraph',
    text: 'Provide 1-2 paragraphs of direct analysis: what the question asks, how the passage supports the correct answer, and why common traps fail.',
  },
  {
    type: 'callout',
    title: 'Text Evidence',
    variant: 'tip',
    text: 'Optional quotations to anchor the analysis. Include short quoted lines from the passage only when they clarify why an option is right or wrong.',
  },
  {
    type: 'breakdown',
    labels: { title: 'Option', text: 'Analysis' },
    items: [
      { title: '(A) [Choice text]', text: '[Explain whether this choice is correct or incorrect and why, citing evidence or structure.]', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) [Choice text]', text: '[Explain whether this choice is correct or incorrect and why, citing evidence or structure.]', badge: 'Correct', badgeColor: 'green' },
      { title: '(C) [Choice text]', text: '[Name trap type if incorrect (e.g., Too Narrow, Out of Scope, Distorted Emphasis).]', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) [Choice text]', text: '[Name trap type if incorrect (e.g., Reversal, Half-Right, Unsupported).]', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) [Choice text]', text: '[Name trap type if incorrect and tie back to passage text.]', badge: 'Incorrect', badgeColor: 'red' },
    ],
  },
];

export const templatesLRLessonContent: ContentBlock[] = [
  { type: 'h2', text: 'Question Goal' },
  {
    type: 'callout',
    variant: 'goal',
    text: '**Design a complete LR lesson** with consistent pedagogy, structure, and component usage so students can move from concept to execution without friction.',
  },
  { type: 'hr' },
  { type: 'h2', text: 'Introduction' },
  {
    type: 'paragraph',
    text: 'This template covers the canonical anatomy of an LR lesson: structural components, style standards, and drill implementation. Keep the order predictable across modules.',
  },
  { type: 'hr' },
  ...lessonsComponents,
  { type: 'hr' },
  ...lessonsStructure,
  { type: 'hr' },
  ...lessonsDrills,
];

export const templatesRCPassageAnalysisContent: ContentBlock[] = [
  ...rcPassageAnalysisTemplateCore,
];

export const templatesRCQuestionContent: ContentBlock[] = [
  ...rcQuestionTemplateCore,
];

export const templatesRCQuestionTypeIntroContent: ContentBlock[] = [
  { type: 'h3', text: "Germaine's Guide to RC [Question Type] Questions" },
  { type: 'h3', text: "What's this question asking?" },
  {
    type: 'paragraph',
    text: 'Define the task in one line: what this question type asks you to prove or identify, and what a fully correct answer must do.',
  },
  {
    type: 'paragraph',
    text: 'Then explain the solving lens. Clarify whether students should synthesize the whole passage, infer from text support, match abstract structure, apply a principle, or describe argumentative method.',
  },
  {
    type: 'list',
    items: [
      'State the task in plain language (for example, \"find the main point\" or \"infer what must be true\").',
      'Describe the evidence path (global synthesis vs. local line support).',
      'Preview the common trap style for this question type.',
    ],
  },
  { type: 'hr' },
  { type: 'h3', text: 'Stem Identification: How to Spot a [Question Type] Question' },
  {
    type: 'paragraph',
    text: 'Group stem patterns by keyword family (category + keywords + examples) so students can recognize the question type quickly under timed conditions.',
  },
  {
    type: 'breakdown',
    labels: { title: 'Category', text: 'Examples & Keywords' },
    items: [
      {
        title: 'Direct Task Phrasing',
        text: '**Keywords:** main point, main idea, according to, most accurately\n\n• "Which one of the following most accurately [states/expresses]...?"\n• "According to the passage..."',
        badge: 'Core',
        badgeColor: 'indigo',
      },
      {
        title: 'Inference / Support Phrasing',
        text: '**Keywords:** infer, suggests, implies, supports, most likely\n\n• "It can be inferred that..."\n• "The passage suggests which one of the following...?"\n• "Information in the passage most strongly supports..."',
        badge: 'Inference',
        badgeColor: 'blue',
      },
      {
        title: 'Application / Hypothetical Phrasing',
        text: '**Keywords:** if...then, suppose, would be, consistent with, exemplifies\n\n• "If X were true, which one of the following would most likely...?"\n• "Which scenario is most consistent with the principle in the passage?"\n• "Which one most closely exemplifies...?"',
        badge: 'Application',
        badgeColor: 'green',
      },
      {
        title: 'Comparative / Negative Phrasing',
        text: '**Keywords:** differ, both do, except, not, least likely\n\n• "The authors differ in which one of the following ways?"\n• "The author provides examples of all EXCEPT..."\n• "Which one is NOT supported by the passage?"',
        badge: 'Variation',
        badgeColor: 'red',
      },
    ],
  },
  { type: 'hr' },
  {
    type: 'callout',
    title: 'Overarching Takeaway',
    variant: 'summary',
    text: 'Don\'t get distracted by wording variation. Reduce every stem to its underlying task, then apply the matching method. You are always choosing the answer best supported by the passage\'s logic and evidence.',
  },
  { type: 'h3', text: 'The Importance of [Question Type] Questions' },
  {
    type: 'paragraph',
    text: 'Include frequency and strategic value: how often this type appears, what skill it builds, and which other RC/LR tasks benefit from mastering it.',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'Template Fill-In',
    text: 'Use this pattern: "This type appears about [X]% of RC questions. Mastering it improves [related skill], making it a [high/medium/supporting] priority in your prep plan."',
  },
];

export const templatesReferenceGuidesContent: ContentBlock[] = [
  { type: 'h2', text: 'Question Goal' },
  {
    type: 'callout',
    variant: 'goal',
    text: '**Create a fast-reference lesson** students can use under pressure to recall frameworks, distinctions, and recurring trap patterns.',
  },
  { type: 'hr' },
  { type: 'h2', text: 'Introduction' },
  {
    type: 'paragraph',
    text: 'Reference lessons are compact summaries and checklists (question type catalogs, rule sheets, decision trees). Prioritize scanability over narrative depth.',
  },
  { type: 'hr' },
  { type: 'h2', text: 'Required Structure' },
  {
    type: 'list',
    items: [
      'Title format: "Reference: [Topic]" or "[Topic] Reference".',
      'Brief usage note: when and why to consult this reference.',
      'Clearly segmented sections with consistent heading levels.',
      'Optional final Key Takeaway callout to reinforce the highest-value rule.',
    ],
  },
  { type: 'hr' },
  { type: 'h2', text: 'Formatting Standards' },
  {
    type: 'list',
    items: [
      'Prefer bullet lists and short tables over long paragraphs.',
      'Use consistent labels for trap types and strategy tags.',
      'Keep examples brief and directly tied to the rule being summarized.',
    ],
  },
];
