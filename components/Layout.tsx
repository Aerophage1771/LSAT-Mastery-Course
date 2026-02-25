import React, { useState, useEffect, useRef } from 'react';
import { ModuleData, ContentBlock } from '../types';
import { BookOpen, CheckCircle, Circle, Menu, X, ChevronRight, LayoutGrid, Download, Info, Palette, ArrowLeft, ArrowRight, Search, Rocket } from 'lucide-react';
import { generateCourseText, generateCourseRTF, generateCourseJSON, generateCourseCSV, generateCoursePDF } from '../utils/export';
import { ExportControls } from './ExportControls';
import { LessonViewer } from './LessonViewer';
import {
  roadmapLearningContent,
  roadmapAnalyticsContent,
  roadmapContentContent,
  roadmapUXContent,
  roadmapTechnicalContent,
  roadmapSocialContent,
  roadmapAccessibilityContent,
} from './RoadmapContent';

interface LessonNav {
  onPrevious?: () => void;
  onNext?: () => void;
  previousLabel?: string;
  nextLabel?: string;
  hasNext: boolean;
}

interface LayoutProps {
  modules: Array<{ id: number; title: string; category: string; description: string; unit: string; lessons?: ModuleData['lessons'] }>;
  activeModuleId: number | null;
  activeLessonId: string | null;
  onSelectModule: (id: number) => void;
  onSelectLesson: (id: string) => void;
  onGoHome: () => void;
  lessonNav?: LessonNav | null;
  children: React.ReactNode;
  activeModuleData?: ModuleData;
  isLessonComplete?: (lessonId: string) => boolean;
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
];

const obasanPassageText = `Joy Kogawa's Obasan is an account of a Japanese-Canadian family's experiences during World War II. The events are seen from the viewpoint of a young girl who watches her family disintegrate as it undergoes the relocation that occurred in both Canada and the United States. Although the experience depicted in Obasan is mainly one of dislocation, Kogawa employs subtle techniques that serve to emphasize her major character's heroism and to critique the majority culture. The former end is achieved through the novel's form and the latter through the symbols it employs.

The form of the novel parallels the three-stage structure noted by anthropologists in their studies of rites of passage. According to these anthropologists, a rite of passage begins with separation from a position of security in a highly structured society; proceeds to alienation in a deathlike state where one is stripped of status, property, and rank; and concludes with reintegration into society accompanied by a heightened status gained as a result of the second stage. The process thus has the effect of transforming a society's victim into a hero. The first eleven chapters of Obasan situate the young protagonist Naomi Nakane in a close-knit, securely placed family within Vancouver society. Chapters 12–32 chronicle the fall into alienation, when Naomi's family is dislodged from its structured social niche and removed from the city into work camps or exile. Separated from her parents, Naomi follows her aunt Aya Obasan to the ghost town of Slocan, where Naomi joins the surrogate family of her uncle and aunt. In chapters 33–39 this surrogate family nurtures Naomi as she develops toward a final integration with the larger society and with herself: as an adult, when she receives a bundle of family documents and letters from her aunt, Naomi breaks through the personal and cultural screens of silence and secretiveness that have enshrouded her past, and reconciles herself with her history.

Kogawa's use of motifs drawn from Christian rituals and symbols forms a subtle critique of the professed ethics of the majority culture that has shunned Naomi. In one example of such symbolism, Naomi's reacquaintance with her past is compared with the biblical story of turning stone into bread. The bundle of documents—which Kogawa refers to as "stone-hard facts"—brings Naomi to the recognition of her country's abuse of her people. But implicit in these hard facts, Kogawa suggests, is also the "bread" of a spiritual sustenance that will allow Naomi to affirm the durability of her people and herself. Through the careful deployment of structure and symbol, Kogawa thus manages to turn Naomi's experience—and by extension the wartime experiences of many Japanese Canadians—into a journey of heroic transformation and a critique of the majority culture.`;

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
  { type: 'h3', text: "Passage Analysis: Obasan (PT-119-S-1-P-2)" },
  { type: 'accordion', title: 'Passage Text', content: obasanPassageText },
  { type: 'h3', text: "Analysis & Breakdown" },
  { type: 'paragraph', text: "This passage is a work of literary criticism. The author's goal is not just to summarize the novel *Obasan*, but to make a specific argument about *how* the novelist, Joy Kogawa, uses literary techniques to achieve a complex effect." },
  { type: 'callout', title: "Summary", variant: "summary", text: "The author argues that *Obasan* is a sophisticated work that uses its structure to craft a narrative of heroism and its symbolism to critique the oppressive society, transforming a story of dislocation into one of empowerment." },
];


export const Layout: React.FC<LayoutProps> = ({
  modules, 
  activeModuleId, 
  activeLessonId, 
  onSelectModule, 
  onSelectLesson,
  onGoHome,
  lessonNav,
  children,
  activeModuleData,
  isLessonComplete,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [styleGuideOpen, setStyleGuideOpen] = useState(false);
  const [styleGuideTab, setStyleGuideTab] = useState<'components' | 'structure' | 'drills' | 'passages'>('components');
  const [roadmapOpen, setRoadmapOpen] = useState(false);
  const [roadmapTab, setRoadmapTab] = useState<'learning' | 'analytics' | 'content' | 'ux' | 'technical' | 'social' | 'accessibility'>('learning');
  const activeLessonRef = useRef<HTMLButtonElement | null>(null);
  const mainRef = useRef<HTMLElement | null>(null);
  const exportModalRef = useRef<HTMLDivElement | null>(null);
  const styleGuideModalRef = useRef<HTMLDivElement | null>(null);
  const roadmapModalRef = useRef<HTMLDivElement | null>(null);

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
        setRoadmapOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (exportModalOpen || styleGuideOpen || roadmapOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [exportModalOpen, styleGuideOpen, roadmapOpen]);

  useEffect(() => {
    if (exportModalOpen && exportModalRef.current) {
      exportModalRef.current.focus();
    }
  }, [exportModalOpen]);

  useEffect(() => {
    if (styleGuideOpen && styleGuideModalRef.current) {
      styleGuideModalRef.current.focus();
    }
  }, [styleGuideOpen]);

  useEffect(() => {
    if (roadmapOpen && roadmapModalRef.current) {
      roadmapModalRef.current.focus();
    }
  }, [roadmapOpen]);

  const sidebarLessons = activeModuleData?.lessons ?? [];

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-slate-900 text-white z-50 px-3 py-2 flex items-center justify-between shadow-md" role="banner">
        <div className="flex items-center gap-2 min-w-0">
          {lessonNav && (
            <>
              {lessonNav.onPrevious ? (
                <button onClick={lessonNav.onPrevious} aria-label={lessonNav.previousLabel ? `Previous: ${lessonNav.previousLabel}` : 'Previous lesson'} className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex-shrink-0">
                  <ArrowLeft size={20} />
                </button>
              ) : (
                <span className="w-10 h-10 flex items-center justify-center text-slate-600 flex-shrink-0" aria-hidden="true"><ArrowLeft size={20} /></span>
              )}
            </>
          )}
          <div className="flex items-center space-x-2 min-w-0" onClick={onGoHome} role="button" tabIndex={0} aria-label="Go to dashboard" onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onGoHome(); }}>
            <BookOpen className="text-indigo-400 flex-shrink-0" size={20} />
            <span className="font-bold text-lg tracking-tight truncate">LSAT Mastery</span>
          </div>
          {lessonNav && (
            <>
              {lessonNav.onNext ? (
                <button onClick={lessonNav.onNext} aria-label={lessonNav.nextLabel ? `Next: ${lessonNav.nextLabel}` : 'Next lesson'} className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex-shrink-0">
                  <ArrowRight size={20} />
                </button>
              ) : (
                <span className="w-10 h-10 flex items-center justify-center text-slate-600 flex-shrink-0" aria-hidden="true"><ArrowRight size={20} /></span>
              )}
            </>
          )}
        </div>
        <div className="flex items-center space-x-1 flex-shrink-0">
          <button onClick={() => setExportModalOpen(true)} className="p-2 text-slate-300 hover:text-white transition-colors" aria-label="Export course">
            <Download size={20} />
          </button>
          <button onClick={() => setSidebarOpen(true)} className="p-2 text-slate-300 hover:text-white transition-colors" aria-label="Open navigation menu">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm" onClick={() => setSidebarOpen(false)} aria-hidden="true" />}

      {/* Sidebar */}
      <nav className={`fixed inset-y-0 left-0 z-50 w-80 bg-slate-900 text-slate-300 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static flex flex-col shadow-2xl ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`} aria-label="Course navigation">
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <button onClick={() => { onGoHome(); setSidebarOpen(false); }} className="flex items-center space-x-3 text-slate-100 hover:text-indigo-400 transition-colors group" aria-label="LSAT Mastery - Go to Dashboard">
            <div className="bg-indigo-600 p-1.5 rounded-lg group-hover:bg-indigo-500 transition-colors"><BookOpen size={20} className="text-white" /></div>
            <span className="font-bold text-xl tracking-tight">LSAT Mastery</span>
          </button>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-slate-400 hover:text-white" aria-label="Close navigation">
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="p-4 space-y-6">
            <div>
              <button onClick={() => { onGoHome(); setSidebarOpen(false); }} className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${activeModuleId === null ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50' : 'hover:bg-slate-800 text-slate-400 hover:text-slate-100'}`} aria-current={activeModuleId === null ? 'page' : undefined}>
                <LayoutGrid size={18} /><span className="font-medium">Course Dashboard</span>
              </button>
            </div>
            <div role="tree" aria-label="Modules">
              <div className="space-y-1">
                {modules.map((module) => {
                  const isActive = activeModuleId === module.id;
                  const isLRStart = module.id === 1;
                  const isRCStart = module.id === 23;
                  const isAdvancedStart = module.id === 50;
                  const isQuestionBankStart = module.id === 57;
                  return (
                    <React.Fragment key={module.id}>
                      {isLRStart && <h3 className="px-3 mt-2 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Logical Reasoning</h3>}
                      {isRCStart && <h3 className="px-3 mt-6 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Reading Comprehension</h3>}
                      {isAdvancedStart && <h3 className="px-3 mt-6 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Advanced Passages</h3>}
                      {isQuestionBankStart && <h3 className="px-3 mt-6 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Question Bank</h3>}
                      <div className="mb-1" role="treeitem" aria-expanded={isActive}>
                        <button onClick={() => { onSelectModule(module.id); }} className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group ${isActive ? 'bg-slate-800 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`} aria-current={isActive ? 'true' : undefined}>
                          <span className="flex-1 truncate pr-2"><span className="opacity-50 mr-2">{module.id}.</span>{module.title}</span>
                          {isActive && <ChevronRight size={14} className="text-indigo-400" />}
                        </button>
                        {isActive && sidebarLessons.length > 0 && (
                          <div className="mt-2 ml-3 pl-3 border-l-2 border-slate-800 space-y-1 my-2 animate-in slide-in-from-left-2 duration-200" role="group" aria-label={`Lessons in ${module.title}`}>
                            {sidebarLessons.map((lesson) => {
                              const completed = isLessonComplete?.(lesson.id) ?? false;
                              return (
                                <button
                                  key={lesson.id}
                                  ref={activeLessonId === lesson.id ? activeLessonRef : undefined}
                                  onClick={() => { onSelectLesson(lesson.id); setSidebarOpen(false); }}
                                  className={`w-full text-left px-3 py-2 rounded-md text-xs font-medium transition-colors flex items-start space-x-2.5 leading-relaxed ${activeLessonId === lesson.id ? 'bg-indigo-500/10 text-indigo-300' : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/30'}`}
                                  aria-current={activeLessonId === lesson.id ? 'page' : undefined}
                                >
                                  <div className="mt-0.5 flex-shrink-0">
                                    {completed ? (
                                      <CheckCircle size={12} className="text-emerald-400" />
                                    ) : activeLessonId === lesson.id ? (
                                      <CheckCircle size={12} />
                                    ) : (
                                      <Circle size={12} />
                                    )}
                                  </div>
                                  <span>{lesson.title}</span>
                                </button>
                              );
                            })}
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
      </nav>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-0 pt-14 lg:pt-0">
        <header className="hidden lg:flex flex-shrink-0 items-center justify-between px-8 py-4 bg-white border-b border-slate-200 shadow-sm z-10" role="banner">
          <div className="flex items-center gap-4">
            <nav className="flex items-center text-sm breadcrumbs text-slate-500" aria-label="Breadcrumb">
              <button onClick={onGoHome} className="hover:text-indigo-600 transition-colors font-medium">Dashboard</button>
              {activeModuleData && (
                <><ChevronRight size={14} className="mx-2 text-slate-300" aria-hidden="true" /><span className="font-semibold text-slate-800" aria-current="page">Module {activeModuleData.id}: {activeModuleData.title}</span></>
              )}
            </nav>
            {lessonNav && (
              <div className="flex items-center gap-1 border-l border-slate-200 pl-4" role="navigation" aria-label="Lesson navigation">
                {lessonNav.onPrevious ? (
                  <button
                    onClick={lessonNav.onPrevious}
                    aria-label={lessonNav.previousLabel ? `Previous: ${lessonNav.previousLabel}` : 'Previous lesson'}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-slate-100 transition-colors text-sm font-medium"
                  >
                    <ArrowLeft size={18} />
                    <span>Previous</span>
                  </button>
                ) : (
                  <span className="px-3 py-2 text-slate-300 text-sm font-medium cursor-default" aria-disabled="true">Previous</span>
                )}
                {lessonNav.onNext ? (
                  <button
                    onClick={lessonNav.onNext}
                    aria-label={lessonNav.nextLabel ? `Next: ${lessonNav.nextLabel}` : 'Next lesson'}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-slate-100 transition-colors text-sm font-medium"
                  >
                    <span>Next</span>
                    <ArrowRight size={18} />
                  </button>
                ) : (
                  <span className="px-3 py-2 text-slate-300 text-sm font-medium cursor-default" aria-disabled="true">Next</span>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))}
              className="flex items-center space-x-2 px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-500 transition-all shadow-sm"
              aria-label="Search lessons (Ctrl+K)"
            >
              <Search size={16} />
              <span>Search</span>
              <kbd className="ml-2 px-1.5 py-0.5 bg-slate-100 rounded text-[10px] font-mono text-slate-400">Ctrl+K</kbd>
            </button>
            <button onClick={() => setRoadmapOpen(true)} className="flex items-center space-x-2 px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 transition-all shadow-sm" aria-label="Open roadmap">
              <Rocket size={16} /><span>Roadmap</span>
            </button>
            <button onClick={() => setStyleGuideOpen(true)} className="flex items-center space-x-2 px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 transition-all shadow-sm" aria-label="Open style guide">
              <Palette size={16} /><span>Style Guide</span>
            </button>
            <button onClick={() => setExportModalOpen(true)} className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm font-bold text-white transition-all shadow-lg shadow-indigo-200" aria-label="Export full course">
              <Download size={16} /><span>Full Course Export</span>
            </button>
          </div>
        </header>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-indigo-600 focus:text-white">Skip to content</a>
        <main ref={mainRef} id="main-content" className="flex-1 min-h-0 overflow-y-auto p-4 lg:p-8 scroll-smooth bg-slate-50/50" role="main" tabIndex={-1}>{children}</main>
      </div>

      {/* Style Guide Modal */}
      {styleGuideOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Style Guide">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setStyleGuideOpen(false)} />
          <div ref={styleGuideModalRef} tabIndex={-1} className="relative w-full max-w-5xl max-h-[90vh] flex flex-col bg-slate-50 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
             <div className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center z-10">
                <div className="flex items-center gap-6">
                   <div className="flex items-center gap-2 text-slate-800"><Palette size={20} className="text-indigo-600" /><h2 className="font-bold text-lg">Style Guide</h2></div>
                   <div className="flex items-center bg-slate-100 p-1 rounded-lg" role="tablist">
                      <button role="tab" aria-selected={styleGuideTab === 'components'} onClick={() => setStyleGuideTab('components')} className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${styleGuideTab === 'components' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Components</button>
                      <button role="tab" aria-selected={styleGuideTab === 'structure'} onClick={() => setStyleGuideTab('structure')} className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${styleGuideTab === 'structure' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Structure</button>
                      <button role="tab" aria-selected={styleGuideTab === 'drills'} onClick={() => setStyleGuideTab('drills')} className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${styleGuideTab === 'drills' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Drill Format</button>
                      <button role="tab" aria-selected={styleGuideTab === 'passages'} onClick={() => setStyleGuideTab('passages')} className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${styleGuideTab === 'passages' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Passage Format</button>
                   </div>
                </div>
                <button onClick={() => setStyleGuideOpen(false)} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors" aria-label="Close style guide"><X size={20} /></button>
             </div>
             <div className="flex-1 overflow-y-auto p-6" role="tabpanel">
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

      {/* Roadmap Modal */}
      {roadmapOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Product Roadmap">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setRoadmapOpen(false)} />
          <div ref={roadmapModalRef} tabIndex={-1} className="relative w-full max-w-6xl max-h-[90vh] flex flex-col bg-slate-50 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
             <div className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center z-10">
                <div className="flex items-center gap-6">
                   <div className="flex items-center gap-2 text-slate-800"><Rocket size={20} className="text-indigo-600" /><h2 className="font-bold text-lg">Product Roadmap</h2><span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">70+ ideas</span></div>
                   <div className="flex items-center bg-slate-100 p-1 rounded-lg overflow-x-auto" role="tablist">
                      <button role="tab" aria-selected={roadmapTab === 'learning'} onClick={() => setRoadmapTab('learning')} className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${roadmapTab === 'learning' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Learning</button>
                      <button role="tab" aria-selected={roadmapTab === 'analytics'} onClick={() => setRoadmapTab('analytics')} className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${roadmapTab === 'analytics' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Analytics</button>
                      <button role="tab" aria-selected={roadmapTab === 'content'} onClick={() => setRoadmapTab('content')} className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${roadmapTab === 'content' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Content</button>
                      <button role="tab" aria-selected={roadmapTab === 'ux'} onClick={() => setRoadmapTab('ux')} className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${roadmapTab === 'ux' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>UI/UX</button>
                      <button role="tab" aria-selected={roadmapTab === 'technical'} onClick={() => setRoadmapTab('technical')} className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${roadmapTab === 'technical' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Technical</button>
                      <button role="tab" aria-selected={roadmapTab === 'social'} onClick={() => setRoadmapTab('social')} className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${roadmapTab === 'social' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Social</button>
                      <button role="tab" aria-selected={roadmapTab === 'accessibility'} onClick={() => setRoadmapTab('accessibility')} className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${roadmapTab === 'accessibility' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Accessibility</button>
                   </div>
                </div>
                <button onClick={() => setRoadmapOpen(false)} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors" aria-label="Close roadmap"><X size={20} /></button>
             </div>
             <div className="flex-1 overflow-y-auto p-6" role="tabpanel">
                <LessonViewer 
                   title={
                     roadmapTab === 'learning' ? "Learning Experience" : 
                     roadmapTab === 'analytics' ? "Analytics & Progress" : 
                     roadmapTab === 'content' ? "Content & Curriculum" : 
                     roadmapTab === 'ux' ? "UI / UX Improvements" : 
                     roadmapTab === 'technical' ? "Technical & Infrastructure" : 
                     roadmapTab === 'social' ? "Social & Gamification" : 
                     "Accessibility & Inclusion"
                   } 
                   content={
                     roadmapTab === 'learning' ? roadmapLearningContent : 
                     roadmapTab === 'analytics' ? roadmapAnalyticsContent : 
                     roadmapTab === 'content' ? roadmapContentContent : 
                     roadmapTab === 'ux' ? roadmapUXContent : 
                     roadmapTab === 'technical' ? roadmapTechnicalContent : 
                     roadmapTab === 'social' ? roadmapSocialContent : 
                     roadmapAccessibilityContent
                   } 
                   variant="modal" 
                />
             </div>
          </div>
        </div>
      )}

      {/* Export Modal */}
      {exportModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Export Course Content">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setExportModalOpen(false)} />
          <div ref={exportModalRef} tabIndex={-1} className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-indigo-600 px-6 py-6 text-white flex items-center justify-between">
              <div><h2 className="text-xl font-bold flex items-center gap-2"><Download size={24} />Export Course Content</h2><p className="text-indigo-100 text-xs mt-1 font-medium">LSAT Logical Reasoning Mastery Curriculum</p></div>
              <button onClick={() => setExportModalOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="Close export dialog"><X size={20} /></button>
            </div>
            <div className="p-8">
              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-8 flex gap-4 items-start">
                <div className="bg-white p-2 rounded-lg text-indigo-600 shadow-sm"><Info size={20} /></div>
                <div><h4 className="text-sm font-bold text-indigo-900 mb-1">Export Instructions</h4><p className="text-xs text-indigo-700 leading-relaxed">You can download the entire curriculum including all modules and every individual lesson content.</p></div>
              </div>
              <div className="space-y-6">
                <div><h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Select Export Format</h3>
                <ExportControls 
                    label="Course" 
                    filename="LSAT_Mastery_Course" 
                    onCopy={() => generateCourseText(modules as ModuleData[])} 
                    onExportText={() => generateCourseText(modules as ModuleData[])} 
                    onExportRTF={() => generateCourseRTF(modules as ModuleData[])} 
                    onExportJSON={() => generateCourseJSON(modules as ModuleData[])}
                    onExportCSV={() => generateCourseCSV(modules as ModuleData[])}
                    onExportPDF={() => generateCoursePDF(modules as ModuleData[])}
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
