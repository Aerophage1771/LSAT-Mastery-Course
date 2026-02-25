import { ContentBlock } from '../types';

// ─────────────────────────────────────────────
// Tab 1: Components (visual showcase)
// ─────────────────────────────────────────────

export const styleGuideComponentsContent: ContentBlock[] = [
  { type: 'h2', text: 'Component Library' },
  { type: 'paragraph', text: 'Every visual element used throughout the LSAT Mastery Course. Each component is interactive and renders identically to what students see in lessons.' },
  { type: 'hr' },

  { type: 'h3', text: 'Typography' },
  { type: 'paragraph', text: 'Content uses a **semantic hierarchy** with consistent sizing: `h2` for major sections, `h3` for sub-sections, `h4` for labels. Inline formatting supports **bold**, *italic*, and `code` styles.' },
  { type: 'blockquote', text: 'Excerpt panels present stimulus text, passages, or rules being analyzed. They use a clean rounded card with subtle borders to separate quoted content from the lesson narrative.' },

  { type: 'h3', text: 'Callout Variants' },
  { type: 'paragraph', text: 'Three callout styles provide contextual emphasis throughout lessons.' },
  { type: 'callout', variant: 'default', title: 'Concept Note', text: 'General information, definitions, or side notes relevant to the lesson at hand.' },
  { type: 'callout', variant: 'tip', title: 'Strategy Tip', text: 'Shortcuts, common traps, or strategic advice for test day. These appear in amber to draw attention.' },
  { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: 'Core lesson summaries placed at the end of each module. Students should internalize these before moving on.' },

  { type: 'h3', text: 'Breakdown Component' },
  { type: 'paragraph', text: 'Used for side-by-side analysis of argument structure, answer choice evaluation, and comparative elements.' },
  { type: 'breakdown', labels: { title: 'Element', text: 'Analysis' }, items: [
    { title: 'Stimulus Text', text: 'The raw text from the question is presented here.', badge: 'Context', badgeColor: 'slate' },
    { title: 'Structural Role', text: 'We identify the function (e.g., Premise, Conclusion).', badge: 'Premise', badgeColor: 'indigo' },
    { title: 'Correct Answer', text: 'Validation of why an answer choice is correct.', badge: 'Correct', badgeColor: 'green' },
    { title: 'Trap Answer', text: 'Explanation of a specific logical flaw or trap.', badge: 'Trap', badgeColor: 'red' },
  ]},

  { type: 'h3', text: 'Process Steps' },
  { type: 'paragraph', text: 'Step-by-step workflows for solving specific question types.' },
  { type: 'process', title: 'Standard Approach', steps: [
    'Read the question stem to identify the task.',
    'Deconstruct the argument into premises and conclusion.',
    'Pre-phrase the answer based on the identified flaw or pattern.',
    'Eliminate answer choices that do not match the pre-phrase.',
  ]},

  { type: 'h3', text: 'Tables' },
  { type: 'table', headers: ['Question Type', 'Frequency', 'Difficulty', 'Key Skill'], rows: [
    ['Flaw', 'Very High', 'Medium', 'Pattern recognition'],
    ['Strengthen', 'High', 'Medium', 'Gap analysis'],
    ['Necessary Assumption', 'High', 'Hard', 'Negation test'],
    ['Parallel Reasoning', 'Low', 'Hard', 'Structural abstraction'],
  ]},
];

// ─────────────────────────────────────────────
// Tab 2: Question Card
// ─────────────────────────────────────────────

export const styleGuideQuestionContent: ContentBlock[] = [
  { type: 'h2', text: 'Question Card' },
  { type: 'paragraph', text: 'The **Question Card** is the primary interactive component for Logical Reasoning drills. It presents a stimulus, question stem, and five answer choices in a polished, self-contained card with click-to-reveal feedback.' },
  { type: 'hr' },

  { type: 'h3', text: 'Anatomy' },
  { type: 'list', items: [
    '**Header**: Gradient bar with question type label, PT identifier, and difficulty badge',
    '**Stimulus**: The argument or passage text the student must analyze',
    '**Question**: The specific question stem',
    '**Options**: Five clickable answer choices with letter indicators (A-E)',
    '**Feedback**: Correct answer highlights green with checkmark; incorrect shows red with X',
  ]},

  { type: 'h3', text: 'Live Example: Foundation' },
  {
    type: 'question-card',
    id: 'PT-112-S-4-Q-3',
    questionType: 'Argument Part',
    difficulty: 'easy',
    stimulus: '**Legal theorist:** **It is unreasonable to incarcerate anyone for any other reason than that he or she is a serious threat to the property or lives of other people.** The breaking of a law does not justify incarceration, for lawbreaking proceeds either from ignorance of the law or of the effects of one\'s actions, or from the free choice of the lawbreaker.',
    question: 'The claim in the first sentence of the passage plays which one of the following roles in the argument?',
    options: [
      '(A) It is offered as a premise that helps to show that no actions are under the control of the agent.',
      '(B) It is offered as background information necessary to understand the argument.',
      '(C) It is offered as the main conclusion that the argument is designed to establish. (Correct)',
      '(D) It is offered as evidence for the stated claim that protection of life and property is more important than retribution.',
      '(E) It is offered as evidence for the stated claim that lawbreaking proceeds from either ignorance or free choice.',
    ],
  },

  { type: 'h3', text: 'Live Example: Advanced' },
  {
    type: 'question-card',
    id: 'PT-108-S-2-Q-12',
    questionType: 'Flaw',
    difficulty: 'hard',
    stimulus: 'Studies show that drivers who talk on cell phones while driving are more likely to be involved in accidents. A legislator argues that banning cell phone use while driving would therefore reduce accidents. However, **the legislator fails to consider that the correlation between cell phone use and accidents could be explained by the type of person who tends to use phones while driving, rather than the phone use itself.**',
    question: 'The reasoning in the argument is most vulnerable to criticism on the grounds that it:',
    options: [
      '(A) fails to consider that the proposed ban might be difficult to enforce.',
      '(B) overlooks the possibility that other distractions are equally dangerous.',
      '(C) confuses a correlation between two phenomena with a causal relationship between them. (Correct)',
      '(D) takes for granted that legislation is the most effective way to modify behavior.',
      '(E) ignores the potential economic impact of the proposed ban on telecommunications.',
    ],
  },

  { type: 'callout', variant: 'tip', title: 'Usage Notes', text: 'Question Cards reset independently. Students click an answer to reveal feedback, then click the rotate icon to try again. Each card tracks its own state.' },
];

// ─────────────────────────────────────────────
// Tab 3: Passage Card
// ─────────────────────────────────────────────

export const styleGuidePassageContent: ContentBlock[] = [
  { type: 'h2', text: 'Passage Card' },
  { type: 'paragraph', text: 'The **Passage Card** presents Reading Comprehension passages in a rich, structured format with genre tags, word/paragraph counts, numbered paragraphs, and expand/collapse controls.' },
  { type: 'hr' },

  { type: 'h3', text: 'Anatomy' },
  { type: 'list', items: [
    '**Header**: Gradient bar with passage title, PT identifier, and genre badge (Law, Science, Humanities, etc.)',
    '**Stats Bar**: Paragraph count and word count at a glance',
    '**Passage Body**: Numbered paragraphs with collapsible view (first ~4 lines visible by default)',
    '**Expand Button**: Reveals the full passage text',
  ]},

  { type: 'h3', text: 'Live Example: Literary Criticism' },
  {
    type: 'passage-card',
    id: 'PT-119-S-1-P-2',
    title: 'Obasan: Structure & Symbolism',
    genre: 'Literary Criticism',
    passage: `Joy Kogawa's Obasan is an account of a Japanese-Canadian family's experiences during World War II. The events are seen from the viewpoint of a young girl who watches her family disintegrate as it undergoes the relocation that occurred in both Canada and the United States. Although the experience depicted in Obasan is mainly one of dislocation, Kogawa employs subtle techniques that serve to emphasize her major character's heroism and to critique the majority culture.

The form of the novel parallels the three-stage structure noted by anthropologists in their studies of rites of passage. According to these anthropologists, a rite of passage begins with separation from a position of security in a highly structured society; proceeds to alienation in a deathlike state where one is stripped of status, property, and rank; and concludes with reintegration into society accompanied by a heightened status.

Kogawa's use of motifs drawn from Christian rituals and symbols forms a subtle critique of the professed ethics of the majority culture that has shunned Naomi. Through the careful deployment of structure and symbol, Kogawa manages to turn Naomi's experience into a journey of heroic transformation and a critique of the majority culture.`,
  },

  { type: 'h3', text: 'Live Example: Science' },
  {
    type: 'passage-card',
    id: 'PT-128-S-1-P-2',
    title: 'Bankruptcy Law Reform',
    genre: 'Law',
    passage: `The debate over bankruptcy law reform centers on a fundamental tension between two competing goals: providing a fresh start for honest debtors who have become overwhelmed by financial obligations, and ensuring that creditors receive fair repayment of debts owed to them.

Proponents of reform argue that the current system is too lenient, allowing debtors who could repay a significant portion of their debts to instead discharge them entirely through Chapter 7 liquidation. They point to studies suggesting that a substantial percentage of Chapter 7 filers could afford to repay at least some of their obligations under a Chapter 13 repayment plan.

Opponents counter that the proposed reforms would disproportionately affect the most vulnerable debtors, including those facing medical emergencies or job losses, who genuinely cannot repay their debts. They argue that means-testing and other restrictions would create barriers that discourage legitimate filings while doing little to deter abuse.`,
  },

  { type: 'callout', variant: 'default', title: 'Genre Tags', text: 'Each passage receives a genre badge: **Law** (blue), **Science** (green), **Humanities** (purple), **Social Science** (amber), **Literary Criticism** (rose), **Philosophy** (indigo). These help students quickly identify the passage type.' },
];

// ─────────────────────────────────────────────
// Tab 4: Question + Passage Card
// ─────────────────────────────────────────────

export const styleGuideQPContent: ContentBlock[] = [
  { type: 'h2', text: 'Question + Passage Card' },
  { type: 'paragraph', text: 'The **Question + Passage Card** combines both formats into a single split-pane component that mirrors the actual LSAT testing interface. The passage appears on the left, the question and options on the right.' },
  { type: 'hr' },

  { type: 'h3', text: 'Anatomy' },
  { type: 'list', items: [
    '**Header**: Gradient bar with both passage and question icons, question type, passage title, and difficulty',
    '**Split Layout**: On desktop, passage and question appear side-by-side; on mobile, stacked vertically',
    '**Passage Pane**: Scrollable passage text with a toggle to hide/show',
    '**Question Pane**: Question stem and five clickable options with the same feedback system as the Question Card',
    '**Toggle Control**: Hide the passage to focus on the question, or reveal it to check evidence',
  ]},

  { type: 'h3', text: 'Live Example: Main Idea' },
  {
    type: 'question-passage-card',
    id: 'PT-119-S-1-P-2-Q-8',
    questionType: 'Main Idea',
    difficulty: 'medium',
    passageTitle: 'Obasan (PT-119)',
    passage: `Joy Kogawa's Obasan is an account of a Japanese-Canadian family's experiences during World War II. The events are seen from the viewpoint of a young girl who watches her family disintegrate as it undergoes the relocation that occurred in both Canada and the United States. Although the experience depicted in Obasan is mainly one of dislocation, Kogawa employs subtle techniques that serve to emphasize her major character's heroism and to critique the majority culture. The former end is achieved through the novel's form and the latter through the symbols it employs.

The form of the novel parallels the three-stage structure noted by anthropologists in their studies of rites of passage. The process has the effect of transforming a society's victim into a hero.

Kogawa's use of motifs drawn from Christian rituals and symbols forms a subtle critique of the professed ethics of the majority culture. Through the careful deployment of structure and symbol, Kogawa thus manages to turn Naomi's experience into a journey of heroic transformation and a critique of the majority culture.`,
    question: 'Which one of the following most accurately states the main idea of the passage?',
    options: [
      '(A) While telling a story of familial disruption, Obasan uses structure and symbolism to valorize its protagonist and critique the majority culture. (Correct)',
      '(B) By means of its structure and symbolism, Obasan mounts a harsh critique of a society that disrupts its citizens\' lives.',
      '(C) Although intended primarily as social criticism, given its structure Obasan can also be read as a tale of heroic transformation.',
      '(D) With its three-part structure that parallels rites of passage, Obasan manages to valorize its protagonist in spite of her traumatic experiences.',
      '(E) Although intended primarily as a story of heroic transformation, Obasan can also be read as a work of social criticism.',
    ],
  },

  { type: 'h3', text: 'Live Example: Inference' },
  {
    type: 'question-passage-card',
    id: 'PT-128-S-1-Q-15',
    questionType: 'Inference',
    difficulty: 'hard',
    passageTitle: 'Bankruptcy Reform (PT-128)',
    passage: `The debate over bankruptcy law reform centers on a fundamental tension between two competing goals: providing a fresh start for honest debtors who have become overwhelmed by financial obligations, and ensuring that creditors receive fair repayment of debts owed to them.

Proponents of reform argue that the current system is too lenient, allowing debtors who could repay a significant portion of their debts to instead discharge them entirely. They point to studies suggesting that a substantial percentage of Chapter 7 filers could afford to repay at least some of their obligations.

Opponents counter that the proposed reforms would disproportionately affect the most vulnerable debtors, including those facing medical emergencies or job losses, who genuinely cannot repay their debts.`,
    question: 'Based on the passage, it can be most reasonably inferred that opponents of bankruptcy reform would be most likely to agree with which of the following?',
    options: [
      '(A) Creditors\' rights should never be prioritized over debtors\' need for financial relief.',
      '(B) The current bankruptcy system functions perfectly and requires no modification whatsoever.',
      '(C) Means-testing provisions could prevent some legitimate debtors from accessing needed relief. (Correct)',
      '(D) All Chapter 7 filers are unable to repay any portion of their outstanding debts.',
      '(E) Bankruptcy reform is motivated solely by the lobbying efforts of credit card companies.',
    ],
  },

  { type: 'callout', variant: 'summary', title: 'Design Rationale', text: 'The split-pane layout mirrors the actual digital LSAT interface, so students develop the habit of referencing passage evidence while evaluating answer choices. The toggle button lets students test themselves without passage support, then check their reasoning.' },
];

// ─────────────────────────────────────────────
// Tab 5: Structure & Voice
// ─────────────────────────────────────────────

export const styleGuideStructureContent: ContentBlock[] = [
  { type: 'h2', text: 'Course Architecture' },
  { type: 'paragraph', text: 'The LSAT Mastery Course follows a strict pedagogical framework designed to build skills cumulatively. This page defines the naming conventions, voice guidelines, and structural standards for all content.' },
  { type: 'hr' },

  { type: 'h3', text: 'Module Structure' },
  { type: 'table', headers: ['Lesson Type', 'Position', 'Purpose', 'Content Format'], rows: [
    ['Introduction', '1st lesson', 'Define the question type and core concepts', 'Text + blockquotes + callouts'],
    ['Step-by-Step Guide', '2nd lesson', 'Teach the solving algorithm', 'Process steps + worked example'],
    ['Common Patterns', '3rd lesson', 'Catalog recurring argument structures', 'Breakdown tables + examples'],
    ['Drill Lessons', '4th-10th', 'Practice with real questions', '**Question Card** + analysis'],
    ['Advanced Concepts', 'After drills', 'High-level nuance and edge cases', 'Text + breakdown + callouts'],
    ['Reference Guide', 'Last lesson', 'One-page summary of the module', 'Tables + process steps'],
  ]},

  { type: 'h3', text: 'Naming Conventions' },
  { type: 'list', items: [
    '**Introduction:** Always the first lesson of every module.',
    '**Step-by-Step Guide:** Typically the second lesson.',
    '**Drill: [Concept] ([PT-ID]):** Practice lessons with a specific PT question ID.',
    '**Advanced: [Topic]:** Lessons focused on high-level nuance.',
    '**Reference Guide:** The final summary lesson.',
  ]},

  { type: 'h3', text: 'Voice & Tone' },
  { type: 'breakdown', labels: { title: 'Attribute', text: 'Guideline' }, items: [
    { title: 'Perspective', text: 'Always use **"You"** to address the student directly. Never use "we" or passive voice.', badge: 'Direct', badgeColor: 'blue' },
    { title: 'Clarity', text: 'Avoid academic jargon. Define every technical term on first use. Prefer short, active sentences.', badge: 'Clear', badgeColor: 'indigo' },
    { title: 'Tone', text: 'Encouraging but rigorous. Acknowledge difficulty without being condescending. Celebrate correct reasoning.', badge: 'Professional', badgeColor: 'slate' },
    { title: 'Examples', text: 'Every abstract concept must be immediately followed by a concrete example. Never explain without demonstrating.', badge: 'Practical', badgeColor: 'green' },
  ]},

  { type: 'h3', text: 'Content Types' },
  { type: 'breakdown', labels: { title: 'Type', text: 'Description' }, colWidth: 'narrow', items: [
    { title: 'Conceptual', text: 'Text-heavy, explanatory lessons that build theoretical understanding. Use callouts for key definitions.', badge: 'Theory', badgeColor: 'indigo' },
    { title: 'Methodological', text: 'Algorithm-focused lessons that teach a repeatable solving process. Use process steps and worked examples.', badge: 'Method', badgeColor: 'blue' },
    { title: 'Drill', text: 'Interactive practice using **Question Cards**. Students attempt the question before reading the analysis.', badge: 'Practice', badgeColor: 'green' },
    { title: 'Reference', text: 'Concise summaries using tables, lists, and breakdowns. Designed for quick review before test day.', badge: 'Review', badgeColor: 'slate' },
  ]},
];

// ─────────────────────────────────────────────
// Tab 6: Prompts (LLM generation instructions)
// ─────────────────────────────────────────────

export const styleGuidePromptsContent: ContentBlock[] = [
  { type: 'h2', text: 'Content Generation Prompts' },
  { type: 'paragraph', text: 'Copy these prompts into your LLM of choice to generate new course content that matches the style guide exactly.' },
  { type: 'hr' },

  { type: 'h3', text: 'LR Drill Lesson Prompt' },
  { type: 'paragraph', text: 'Generates a complete drill lesson for a Logical Reasoning question, including stimulus, question, options, step-by-step analysis, and key takeaway.' },
  { type: 'code', text: `You are an expert LSAT tutor and educational content designer. Your goal is to write a comprehensive drill lesson for a specific LSAT Logical Reasoning question.

Please provide the content in clear, structured text as follows:

1. **Title**: A descriptive title (e.g., "Practice Drill: [Concept] ([PT ID])").
2. **Introduction/Context**: A brief paragraph (2-3 sentences) explaining the logical skill or common pitfall being tested.
3. **The Problem**: 
   - **The Stimulus**: The full text of the LSAT argument or scenario.
   - **The Question**: The exact question stem.
   - **Options**: The five answer choices (A) through (E).
4. **The Breakdown (The "Learn" section)**: 
   - A clear "Analysis & Explanation" header.
   - **Step 1: Deconstruction**: Break the stimulus down into its logical components.
   - **Step 2: Abstraction**: Provide a "Motto" or "Blueprint" in abstract terms.
   - **Step 3: Evaluation**: A detailed evaluation of every answer choice.
5. **Takeaway**: A final summary using a "Key Takeaway" format.

Tone: Professional, authoritative, direct. Use second person ("You").` },

  { type: 'h3', text: 'RC Passage Analysis Prompt' },
  { type: 'paragraph', text: 'Generates a full passage analysis including paragraph-by-paragraph breakdown and structural summary.' },
  { type: 'code', text: `You are an expert LSAT tutor. Write a comprehensive analysis of an LSAT Reading Comprehension passage.

Structure:
1. **Title**: "Passage Analysis: [Passage Topic/ID]"
2. **Passage Text**: The full text of the RC passage.
3. **Analysis & Breakdown**:
   - Brief introduction framing the passage's topic and genre.
   - Paragraph-by-paragraph breakdown with clear headers.
   - Final concise summary of the passage's overall argument, structure, and tone.` },

  { type: 'h3', text: 'RC Individual Question Prompt' },
  { type: 'paragraph', text: 'Generates a detailed breakdown of a single RC question with evidence-based analysis.' },
  { type: 'code', text: `You are an expert LSAT tutor. Write a comprehensive breakdown of a single LSAT Reading Comprehension question.

Structure:
1. **Title**: "Question X: [Question Type]"
2. **Passage Text**: Full text in an accordion.
3. **Question Breakdown**: Question stem + five answer choices with percentages.
4. **Analysis & Explanation**:
   - What the question is asking and which skill it tests.
   - Textual evidence needed to answer correctly.
   - Option-by-option evaluation with trap type identification.` },
];
