
import React, { useState, useEffect, useRef } from 'react';
import { ModuleData, ContentBlock } from '../types';
import { BookOpen, CheckCircle, Circle, Menu, X, ChevronRight, LayoutGrid, Download, Info, Palette, ArrowLeft, ArrowRight } from 'lucide-react';
import { generateCourseText, generateCourseRTF, generateCourseJSON, generateCourseCSV, generateCoursePDF } from '../utils/export';
import { ExportControls } from './ExportControls';
import { LessonViewer } from './LessonViewer';

interface LessonNav {
  onPrevious?: () => void;
  onNext?: () => void;
  previousLabel?: string;
  nextLabel?: string;
  hasNext: boolean;
}

interface LayoutProps {
  modules: ModuleData[];
  activeModuleId: number | null;
  activeLessonId: string | null;
  onSelectModule: (id: number) => void;
  onSelectLesson: (id: string) => void;
  onGoHome: () => void;
  lessonNav?: LessonNav | null;
  children: React.ReactNode;
}

const styleGuideComponentsContent: ContentBlock[] = [
  { type: 'h2', text: "Typography & Structure" },
  { type: 'paragraph', text: "The course utilizes a semantic hierarchy to organize complex logical reasoning concepts. The text is rendered in **Slate-700** for optimal readability, supporting *italics* for emphasis and `code blocks` for technical terms." },
  { type: 'blockquote', text: "Blockquotes are used to present stimulus text, excerpts, or specific rules that are being analyzed." },
  { type: 'hr' },
  { type: 'h2', text: "Analysis Components" },
  { type: 'paragraph', text: "We employ specialized structural components to break down LSAT arguments visually." },
  { type: 'h3', text: "1. The Breakdown Component" },
  { type: 'breakdown', labels: { title: 'Element', text: 'Analysis' }, items: [
    { title: 'Stimulus Text', text: 'The raw text from the question is presented here.', badge: 'Context', badgeColor: 'slate' },
    { title: 'Structural Role', text: 'We identify the function (e.g., Premise, Conclusion).', badge: 'Premise', badgeColor: 'indigo' },
    { title: 'Correct Answer', text: 'Validation of why an answer choice is correct.', badge: 'Correct', badgeColor: 'green' },
    { title: 'Trap Answer', text: 'Explanation of a specific logical flaw or trap.', badge: 'Mismatch', badgeColor: 'red' }
  ]},
  { type: 'h3', text: "2. The Process Component" },
  { type: 'process', title: 'Standard Approach', steps: [
    'Read the question stem to identify the task.',
    'Deconstruct the argument into premises and conclusion.',
    'Pre-phrase the answer based on the identified flaw or pattern.',
    'Eliminate answer choices that do not match the pre-phrase.'
  ]},
  { type: 'h3', text: "3. Callout Blocks" },
  { type: 'callout', variant: 'default', title: 'Concept Note', text: 'Used for general information or side notes relevant to the lesson.' },
  { type: 'callout', variant: 'tip', title: 'Strategy Tip', text: 'Used to highlight shortcuts, common traps, or strategic advice for test day.' },
  { type: 'callout', variant: 'summary', title: 'Lesson Summary', text: 'Used at the end of a module to reinforce the core takeaways.' },
  { type: 'h3', text: "4. Interactive Options" },
  { type: 'options', items: [
    '(A) The first plausible but incorrect answer choice.',
    '(B) The correct answer choice derived from the logic.',
    '(C) A distractor designed to catch common errors.'
  ]}
];

const styleGuideStructureContent: ContentBlock[] = [
  { type: 'h2', text: "Course Architecture & Standards" },
  { type: 'paragraph', text: "The LSAT Mastery Course follows a strict pedagogical framework designed to build skills cumulatively. Consistency in naming, tone, and structure is essential for the user experience." },
  { type: 'hr' },
  { type: 'h3', text: "1. Lesson Naming Conventions" },
  { type: 'list', items: [
    "**Introduction:** The first lesson of every module.",
    "**Step-by-Step / Method:** Typically the second lesson.",
    "**Drill: [Concept] ([ID]):** Practice lessons.",
    "**Advanced: [Topic]:** Lessons focused on high-level nuance."
  ]},
  { type: 'h3', text: "2. Voice & Tone" },
  { type: 'breakdown', labels: { title: 'Attribute', text: 'Guideline' }, items: [
    { title: "Perspective", text: "Use \"You\" to address the student directly.", badge: "Direct", badgeColor: "blue" },
    { title: "Clarity", text: "Avoid academic fluff. Use precise logic terms.", badge: "Clear", badgeColor: "indigo" },
    { title: "Tone", text: "Encouraging but rigorous.", badge: "Professional", badgeColor: "slate" }
  ]},
  { type: 'h3', text: "3. Lesson Typology" },
  { type: 'list', items: [
    "**Conceptual:** Text-heavy, explanatory.",
    "**Methodological:** Algorithm-focused.",
    "**Drills:** Interactive simulation."
  ]}
];

const styleGuideDrillsContent: ContentBlock[] = [
  { type: 'h2', text: "Drill Lesson Architecture" },
  { type: 'paragraph', text: "Drill lessons follow a strict **'Try, Then Learn'** pedagogy. Use the system prompt below to generate content that follows this structure exactly." },
  { type: 'hr' },
  { type: 'h3', text: "System Instructions (The Prompt)" },
  { type: 'paragraph', text: "Copy and use this prompt in your LLM of choice to generate high-quality, structured drill content for the course. Click the 'Copy Prompt' button below to copy it to your clipboard." },
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
   - **Step 1: Deconstruction**: Break the stimulus down into its logical components (Premise, Conclusion, Counter-premise, Sub-conclusion).
   - **Step 2: Abstraction**: Provide a "Motto" or "Blueprint" that describes the logic in abstract terms.
   - **Step 3: Evaluation**: A detailed evaluation of every answer choice, explaining why it is correct or why it is a specific type of distractor (e.g., "The Reversal Trap").
5. **Takeaway**: A final summary of the core lesson or a strategic tip for next time using a "Key Takeaway" format.

Ensure the tone is professional, authoritative, and direct. Use the second person ("You").` },
  { type: 'hr' },
  { type: 'h2', text: "Completed Example (Model Reference)" },
  { type: 'paragraph', text: "This is a completed drill based on **PT-112-S-4-Q-3**. Use this as the blueprint for formatting all drill content." },
  { type: 'h3', text: "Drill: Argument Part - Main Conclusion (PT-112-S-4-Q-3)" },
  { type: 'paragraph', text: "This drill introduces the second most common role you will encounter: the **Main Conclusion**. It requires identifying the overarching claim that the entire passage is designed to defend." },
  { type: 'h4', text: "The Problem" },
  { type: 'blockquote', text: "**Legal theorist:** **It is unreasonable to incarcerate anyone for any other reason than that he or she is a serious threat to the property or lives of other people.** The breaking of a law does not justify incarceration, for lawbreaking proceeds either from ignorance of the law or of the effects of one’s actions, or from the free choice of the lawbreaker. Obviously mere ignorance cannot justify incarcerating a lawbreaker, and even free choice on the part of the lawbreaker fails to justify incarceration, for free choice proceeds from the desires of an agent, and the desires of an agent are products of genetics and environmental conditioning, neither of which is controlled by the agent." },
  { type: 'paragraph', text: "**Question:** The claim in the first sentence of the passage plays which one of the following roles in the argument?" },
  { type: 'options', items: [
    "(A) It is offered as a premise that helps to show that no actions are under the control of the agent.",
    "(B) It is offered as background information necessary to understand the argument.",
    "(C) It is offered as the main conclusion that the argument is designed to establish.",
    "(D) It is offered as evidence for the stated claim that protection of life and property is more important than retribution for past illegal acts.",
    "(E) It is offered as evidence for the stated claim that lawbreaking proceeds from either ignorance of the law, or ignorance of the effects of one’s actions, or free choice."
  ]},
  { type: 'hr' },
  { type: 'h3', text: "Analysis & Explanation" },
  { type: 'paragraph', text: "The argument flows from the bottom up. The detailed discussion of free will provides the foundation for the intermediate claim about lawbreaking, which in turn proves the main point about incarceration." },
  { type: 'breakdown', labels: { title: 'Element', text: 'Logical Role' }, items: [
    { title: "First Sentence (Target)", text: "The author's central thesis. The rest of the paragraph provides the 'why' for this belief.", badge: "Main Conclusion", badgeColor: "indigo" },
    { title: "\"The breaking of a law does not justify incarceration...\"", text: "An intermediate claim. It supports the Main Conclusion directly. It is supported by the rejection of ignorance and choice.", badge: "Sub-Conclusion", badgeColor: "indigo" },
    { title: "Choice (C)", text: "This perfectly matches the structure. The entire argument is designed to establish this initial claim about the limits of incarceration.", badge: "Correct", badgeColor: "green" },
    { title: "Choice (A)", text: "Logical Reversal. The claim about control is a premise supporting the conclusion, not the other way around.", badge: "Trap", badgeColor: "red" }
  ]},
  { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "An initial strong assertion, especially if followed by premise indicators like 'for' or 'since' in subsequent sentences, often signals the main conclusion that the rest of the passage will defend." }
];

const obasanPassageText = `Joy Kogawa’s Obasan is an account of a Japanese-Canadian family’s experiences during World War II. The events are seen from the viewpoint of a young girl who watches her family disintegrate as it undergoes the relocation that occurred in both Canada and the United States. Although the experience depicted in Obasan is mainly one of dislocation, Kogawa employs subtle techniques that serve to emphasize her major character’s heroism and to critique the majority culture. The former end is achieved through the novel’s form and the latter through the symbols it employs.

The form of the novel parallels the three-stage structure noted by anthropologists in their studies of rites of passage. According to these anthropologists, a rite of passage begins with separation from a position of security in a highly structured society; proceeds to alienation in a deathlike state where one is stripped of status, property, and rank; and concludes with reintegration into society accompanied by a heightened status gained as a result of the second stage. The process thus has the effect of transforming a society’s victim into a hero. The first eleven chapters of Obasan situate the young protagonist Naomi Nakane in a close-knit, securely placed family within Vancouver society. Chapters 12–32 chronicle the fall into alienation, when Naomi’s family is dislodged from its structured social niche and removed from the city into work camps or exile. Separated from her parents, Naomi follows her aunt Aya Obasan to the ghost town of Slocan, where Naomi joins the surrogate family of her uncle and aunt. In chapters 33–39 this surrogate family nurtures Naomi as she develops toward a final integration with the larger society and with herself: as an adult, when she receives a bundle of family documents and letters from her aunt, Naomi breaks through the personal and cultural screens of silence and secretiveness that have enshrouded her past, and reconciles herself with her history.

Kogawa’s use of motifs drawn from Christian rituals and symbols forms a subtle critique of the professed ethics of the majority culture that has shunned Naomi. In one example of such symbolism, Naomi’s reacquaintance with her past is compared with the biblical story of turning stone into bread. The bundle of documents—which Kogawa refers to as “stone-hard facts”—brings Naomi to the recognition of her country’s abuse of her people. But implicit in these hard facts, Kogawa suggests, is also the “bread” of a spiritual sustenance that will allow Naomi to affirm the durability of her people and herself. Through the careful deployment of structure and symbol, Kogawa thus manages to turn Naomi’s experience—and by extension the wartime experiences of many Japanese Canadians—into a journey of heroic transformation and a critique of the majority culture.`;

const styleGuidePassagesContent: ContentBlock[] = [
  { type: 'h2', text: "Practice Passage Lesson Architecture" },
  { type: 'paragraph', text: "Reading Comprehension practice passages follow a strict **'Analyze, then Drill'** pedagogy. The first lesson analyzes the passage as a whole, and subsequent lessons break down each individual question. Use the two-part system prompt below to generate content that follows this structure exactly." },
  { type: 'hr' },
  { type: 'h3', text: "System Instructions (The Prompts)" },
  { type: 'paragraph', text: "Copy and use these prompts in your LLM of choice to generate high-quality, structured RC content for the course. Always generate the Passage Analysis first." },
  
  { type: 'h4', text: "Part 1: Passage Analysis Lesson Prompt" },
  { type: 'code', text: `You are an expert LSAT tutor and educational content designer. Your goal is to write a comprehensive analysis of an LSAT Reading Comprehension passage.

Please provide the content in clear, structured text as follows:

1.  **Title**: "Passage Analysis: [Passage Topic/ID]"
2.  **Passage Text**: The full text of the RC passage.
3.  **Analysis & Breakdown**:
    *   A brief introduction framing the passage's topic and genre (e.g., literary criticism, scientific debate).
    *   A paragraph-by-paragraph breakdown. For each paragraph, provide a clear header (e.g., "Paragraph 1: The Thesis") and explain its specific function and main points.
    *   A final, concise summary of the passage's overall argument, structure, and tone.` },

  { type: 'h4', text: "Part 2: Individual Question Lesson Prompt" },
  { type: 'code', text: `You are an expert LSAT tutor and educational content designer. Your goal is to write a comprehensive breakdown of a single LSAT Reading Comprehension question related to a passage.

Please provide the content in clear, structured text as follows:

1.  **Title**: "Question X: [Question Type]" (e.g., "Question 8: Main Idea")
2.  **Passage Text**: The full text of the RC passage (placed in an accordion).
3.  **Question Breakdown**:
    *   The full question stem.
    *   The five answer choices (A) through (E), with the correct answer's percentage from analytics if available.
4.  **Analysis & Explanation**:
    *   A brief paragraph explaining what the question is asking and what skill it is testing.
    *   A paragraph detailing the textual evidence from the passage that is needed to answer the question correctly.
    *   A detailed, option-by-option evaluation, explaining precisely why the correct answer is correct and why each incorrect answer is wrong. For incorrect answers, identify the specific trap type (e.g., "Too Narrow," "Out of Scope," "Misattribution").` },
  { type: 'hr' },
  
  { type: 'h2', text: "Completed Example (Passage Analysis)" },
  { type: 'paragraph', text: "This is a completed passage analysis based on **PT-119-S-1-P-2**. Use this as the blueprint for formatting all passage analysis lessons." },
  { type: 'h3', text: "Passage Analysis: Obasan (PT-119-S-1-P-2)" },
  { type: 'accordion', title: 'Passage Text', content: obasanPassageText },
  { type: 'h3', text: "Analysis & Breakdown" },
  { type: 'paragraph', text: "This passage is a work of literary criticism. The author's goal is not just to summarize the novel *Obasan*, but to make a specific argument about *how* the novelist, Joy Kogawa, uses literary techniques to achieve a complex effect." },
  { type: 'h4', text: "Paragraph 1: The Thesis Statement" },
  { type: 'paragraph', text: "The first paragraph introduces the novel's subject matter (a Japanese-Canadian family's trauma during WWII) and immediately states the author's central thesis: Kogawa uses two techniques (form and symbol) to achieve two goals (emphasizing heroism and critiquing the culture)." },
  { type: 'h4', text: "Paragraph 2: Heroism Through Form" },
  { type: 'paragraph', text: "This paragraph supports the first half of the thesis. It explains how the novel's three-part structure mirrors the anthropological concept of a \"rite of passage\" (separation, alienation, reintegration), thereby transforming the protagonist from a victim into a hero." },
  { type: 'h4', text: "Paragraph 3: Critique Through Symbolism" },
  { type: 'paragraph', text: "This paragraph supports the second half of the thesis. It explains how Kogawa uses Christian symbols, like turning stone into bread, to subtly critique the hypocrisy of the majority culture. The paragraph shows how a single symbol can serve both to critique the oppressors and to affirm the protagonist's resilience." },
  { type: 'callout', title: "Summary", variant: "summary", text: "The author argues that *Obasan* is a sophisticated work that uses its structure to craft a narrative of heroism and its symbolism to critique the oppressive society, transforming a story of dislocation into one of empowerment." },
  { type: 'hr' },

  { type: 'h2', text: "Completed Example (Individual Question)" },
  { type: 'paragraph', text: "This is a completed question breakdown based on **PT-119-S-1-P-2-Q-8**. Use this as the blueprint for formatting all individual question lessons." },
  { type: 'h3', text: "Question 8: Main Idea" },
  { type: 'accordion', title: 'Read Passage', content: obasanPassageText },
  { type: 'blockquote', text: "**Question:** Which one of the following most accurately states the main idea of the passage?" },
  { type: 'options', items: [
      "(A) While telling a story of familial disruption, Obasan uses structure and symbolism to valorize its protagonist and critique the majority culture. [93.0%] (Correct)",
      "(B) By means of its structure and symbolism, Obasan mounts a harsh critique of a society that disrupts its citizens’ lives. [1.0%]",
      "(C) Although intended primarily as social criticism, given its structure Obasan can also be read as a tale of heroic transformation. [2.0%]",
      "(D) With its three-part structure that parallels rites of passage, Obasan manages to valorize its protagonist in spite of her traumatic experiences. [3.0%]",
      "(E) Although intended primarily as a story of heroic transformation, Obasan can also be read as a work of social criticism. [2.0%]"
  ]},
  { type: 'paragraph', text: "This is the classic \"main idea\" or \"main point\" question. It's asking us to identify the single sentence that best captures the author's entire argument..." },
  { type: 'callout', title: "Prediction", variant: "tip", text: "The author's thesis is that *Obasan* uses **two techniques (structure and symbolism)** to achieve **two goals (heroism and critique)**. A good main idea answer *must* include all four of these elements." },
  { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
    { title: "(A)", text: "This answer choice includes all the key components of the author's thesis...", badge: "Correct", badgeColor: "green" },
    { title: "(B)", text: "This choice is a classic trap. It's incomplete... it completely leaves out the other major goal: the protagonist's heroic transformation.", badge: "Incorrect (Too Narrow)", badgeColor: "red" },
  ]},
];


export const Layout: React.FC<LayoutProps> = ({
  modules, 
  activeModuleId, 
  activeLessonId, 
  onSelectModule, 
  onSelectLesson,
  onGoHome,
  lessonNav,
  children 
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [styleGuideOpen, setStyleGuideOpen] = useState(false);
  const [styleGuideTab, setStyleGuideTab] = useState<'components' | 'structure' | 'drills' | 'passages'>('components');
  const activeLessonRef = useRef<HTMLButtonElement | null>(null);
  const mainRef = useRef<HTMLElement | null>(null);

  const activeModuleData = modules.find(m => m.id === activeModuleId);

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeLessonId]);

  useEffect(() => {
    if (activeLessonId && activeLessonRef.current) {
      activeLessonRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }, [activeLessonId, sidebarOpen]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExportModalOpen(false);
        setStyleGuideOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (exportModalOpen || styleGuideOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [exportModalOpen, styleGuideOpen]);

  return (
    <div className="flex h-screen bg-slate-50">
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-slate-900 text-white z-50 px-3 py-2 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2 min-w-0">
          {lessonNav && (
            <>
              {lessonNav.onPrevious ? (
                <button onClick={lessonNav.onPrevious} title={lessonNav.previousLabel || 'Previous'} className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex-shrink-0">
                  <ArrowLeft size={20} />
                </button>
              ) : (
                <span className="w-10 h-10 flex items-center justify-center text-slate-600 flex-shrink-0" aria-hidden><ArrowLeft size={20} /></span>
              )}
            </>
          )}
          <div className="flex items-center space-x-2 min-w-0" onClick={onGoHome}>
            <BookOpen className="text-indigo-400 flex-shrink-0" size={20} />
            <span className="font-bold text-lg tracking-tight truncate">LSAT Mastery</span>
          </div>
          {lessonNav && (
            <>
              {lessonNav.onNext ? (
                <button onClick={lessonNav.onNext} title={lessonNav.nextLabel || 'Next'} className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex-shrink-0">
                  <ArrowRight size={20} />
                </button>
              ) : (
                <span className="w-10 h-10 flex items-center justify-center text-slate-600 flex-shrink-0" aria-hidden><ArrowRight size={20} /></span>
              )}
            </>
          )}
        </div>
        <div className="flex items-center space-x-1 flex-shrink-0">
          <button onClick={() => setExportModalOpen(true)} className="p-2 text-slate-300 hover:text-white transition-colors" title="Export">
            <Download size={20} />
          </button>
          <button onClick={() => setSidebarOpen(true)} className="p-2 text-slate-300 hover:text-white transition-colors" title="Menu">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />}

      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-slate-900 text-slate-300 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static flex flex-col shadow-2xl ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <button onClick={() => { onGoHome(); setSidebarOpen(false); }} className="flex items-center space-x-3 text-slate-100 hover:text-indigo-400 transition-colors group">
            <div className="bg-indigo-600 p-1.5 rounded-lg group-hover:bg-indigo-500 transition-colors"><BookOpen size={20} className="text-white" /></div>
            <span className="font-bold text-xl tracking-tight">LSAT Mastery</span>
          </button>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-slate-400 hover:text-white"><X size={24} /></button>
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="p-4 space-y-6">
            <div>
              <button onClick={() => { onGoHome(); setSidebarOpen(false); }} className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${activeModuleId === null ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50' : 'hover:bg-slate-800 text-slate-400 hover:text-slate-100'}`}>
                <LayoutGrid size={18} /><span className="font-medium">Course Dashboard</span>
              </button>
            </div>
            <div>
              <div className="space-y-1">
                {modules.map((module) => {
                  const isActive = activeModuleId === module.id;
                  const isLRStart = module.id === 1;
                  const isRCStart = module.id === 21;
                  const isAdvancedStart = module.id === 50;
                  const isResourceStart = module.id === 48;
                  return (
                    <React.Fragment key={module.id}>
                      {isLRStart && <h3 className="px-3 mt-2 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Logical Reasoning</h3>}
                      {isRCStart && <h3 className="px-3 mt-6 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Reading Comprehension</h3>}
                      {isAdvancedStart && <h3 className="px-3 mt-6 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Advanced Passages</h3>}
                      {isResourceStart && <h3 className="px-3 mt-6 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Resources</h3>}
                      <div className="mb-1">
                        <button onClick={() => { onSelectModule(module.id); }} className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group ${isActive ? 'bg-slate-800 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}>
                          <span className="flex-1 truncate pr-2"><span className="opacity-50 mr-2">{module.id}.</span>{module.title}</span>
                          {isActive && <ChevronRight size={14} className="text-indigo-400" />}
                        </button>
                        {isActive && (
                          <div className="mt-2 ml-3 pl-3 border-l-2 border-slate-800 space-y-1 my-2 animate-in slide-in-from-left-2 duration-200">
                            {module.lessons.map((lesson) => (
                              <button
                                key={lesson.id}
                                ref={activeLessonId === lesson.id ? activeLessonRef : undefined}
                                onClick={() => { onSelectLesson(lesson.id); setSidebarOpen(false); }}
                                className={`w-full text-left px-3 py-2 rounded-md text-xs font-medium transition-colors flex items-start space-x-2.5 leading-relaxed ${activeLessonId === lesson.id ? 'bg-indigo-500/10 text-indigo-300' : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/30'}`}
                              >
                                <div className="mt-0.5 flex-shrink-0">{activeLessonId === lesson.id ? <CheckCircle size={12} /> : <Circle size={12} />}</div>
                                <span>{lesson.title}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-slate-800 bg-slate-900/50"><div className="text-xs text-slate-500 text-center">&copy; 2025 LSAT Mastery Course</div></div>
      </div>

      <div className="flex-1 flex flex-col min-h-0 pt-14 lg:pt-0">
        <header className="hidden lg:flex flex-shrink-0 items-center justify-between px-8 py-4 bg-white border-b border-slate-200 shadow-sm z-10">
          <div className="flex items-center gap-4">
            <div className="flex items-center text-sm breadcrumbs text-slate-500">
              <button onClick={onGoHome} className="hover:text-indigo-600 transition-colors font-medium">Dashboard</button>
              {activeModuleData && (
                <><ChevronRight size={14} className="mx-2 text-slate-300" /><span className="font-semibold text-slate-800">Module {activeModuleData.id}: {activeModuleData.title}</span></>
              )}
            </div>
            {lessonNav && (
              <div className="flex items-center gap-1 border-l border-slate-200 pl-4">
                {lessonNav.onPrevious ? (
                  <button
                    onClick={lessonNav.onPrevious}
                    title={lessonNav.previousLabel || 'Previous lesson'}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-slate-100 transition-colors text-sm font-medium"
                  >
                    <ArrowLeft size={18} />
                    <span>Previous</span>
                  </button>
                ) : (
                  <span className="px-3 py-2 text-slate-300 text-sm font-medium cursor-default">Previous</span>
                )}
                {lessonNav.onNext ? (
                  <button
                    onClick={lessonNav.onNext}
                    title={lessonNav.nextLabel || 'Next lesson'}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-slate-100 transition-colors text-sm font-medium"
                  >
                    <span>Next</span>
                    <ArrowRight size={18} />
                  </button>
                ) : (
                  <span className="px-3 py-2 text-slate-300 text-sm font-medium cursor-default">Next</span>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setStyleGuideOpen(true)} className="flex items-center space-x-2 px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 transition-all shadow-sm">
              <Palette size={16} /><span>Style Guide</span>
            </button>
            <button onClick={() => setExportModalOpen(true)} className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm font-bold text-white transition-all shadow-lg shadow-indigo-200">
              <Download size={16} /><span>Full Course Export</span>
            </button>
          </div>
        </header>
        <main ref={mainRef} className="flex-1 min-h-0 overflow-y-auto p-4 lg:p-8 scroll-smooth bg-slate-50/50">{children}</main>
      </div>

      {styleGuideOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setStyleGuideOpen(false)} />
          <div className="relative w-full max-w-5xl max-h-[90vh] flex flex-col bg-slate-50 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
             <div className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center z-10">
                <div className="flex items-center gap-6">
                   <div className="flex items-center gap-2 text-slate-800"><Palette size={20} className="text-indigo-600" /><h2 className="font-bold text-lg">Style Guide</h2></div>
                   <div className="flex items-center bg-slate-100 p-1 rounded-lg">
                      <button onClick={() => setStyleGuideTab('components')} className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${styleGuideTab === 'components' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Components</button>
                      <button onClick={() => setStyleGuideTab('structure')} className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${styleGuideTab === 'structure' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Structure</button>
                      <button onClick={() => setStyleGuideTab('drills')} className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${styleGuideTab === 'drills' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Drill Format</button>
                      <button onClick={() => setStyleGuideTab('passages')} className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${styleGuideTab === 'passages' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Passage Format</button>
                   </div>
                </div>
                <button onClick={() => setStyleGuideOpen(false)} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"><X size={20} /></button>
             </div>
             <div className="flex-1 overflow-y-auto p-6">
                <LessonViewer 
                   title={
                     styleGuideTab === 'components' ? "Component Library" : 
                     styleGuideTab === 'structure' ? "Course Structure" : 
                     styleGuideTab === 'drills' ? "Drill Format Guide" : 
                     "Passage Format Guide"
                   } 
                   content={
                     styleGuideTab === 'components' ? styleGuideComponentsContent : 
                     styleGuideTab === 'structure' ? styleGuideStructureContent : 
                     styleGuideTab === 'drills' ? styleGuideDrillsContent : 
                     styleGuidePassagesContent
                   } 
                   variant="modal" 
                />
             </div>
          </div>
        </div>
      )}

      {exportModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setExportModalOpen(false)} />
          <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-indigo-600 px-6 py-6 text-white flex items-center justify-between">
              <div><h2 className="text-xl font-bold flex items-center gap-2"><Download size={24} />Export Course Content</h2><p className="text-indigo-100 text-xs mt-1 font-medium">LSAT Logical Reasoning Mastery Curriculum</p></div>
              <button onClick={() => setExportModalOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors"><X size={20} /></button>
            </div>
            <div className="p-8">
              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-8 flex gap-4 items-start">
                <div className="bg-white p-2 rounded-lg text-indigo-600 shadow-sm"><Info size={20} /></div>
                <div><h4 className="text-sm font-bold text-indigo-900 mb-1">Export Instructions</h4><p className="text-xs text-indigo-700 leading-relaxed">You can download the entire curriculum including all 20 modules and every individual lesson content.</p></div>
              </div>
              <div className="space-y-6">
                <div><h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Select Export Format</h3>
                <ExportControls 
                    label="Course" 
                    filename="LSAT_Mastery_Course" 
                    onCopy={() => generateCourseText(modules)} 
                    onExportText={() => generateCourseText(modules)} 
                    onExportRTF={() => generateCourseRTF(modules)} 
                    onExportJSON={() => generateCourseJSON(modules)}
                    onExportCSV={() => generateCourseCSV(modules)}
                    onExportPDF={() => generateCoursePDF(modules)}
                 />
                </div>
                <div className="pt-6 border-t border-slate-100"><p className="text-[10px] text-slate-400 text-center uppercase font-bold tracking-widest italic">All lessons are generated in real-time</p></div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-4 flex justify-end border-t border-slate-100"><button onClick={() => setExportModalOpen(false)} className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-sm font-bold rounded-xl transition-colors">Close</button></div>
          </div>
        </div>
      )}
    </div>
  );
};