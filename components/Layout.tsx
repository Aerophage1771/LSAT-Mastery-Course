import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { LessonLinkageMeta, ModuleData } from '../types';
import { BookOpen, CheckCircle, Circle, Menu, X, ChevronRight, LayoutGrid, Download, Info, Palette, ArrowLeft, ArrowRight, Search, Rocket, Copy, Check, Upload, Database } from 'lucide-react';
import { generateCourseText, generateCourseRTF, generateCourseJSON, generateCourseCSV, generateCoursePDF } from '../utils/export';
import { ExportControls } from './ExportControls';
import { LessonViewer } from './LessonViewer';
import { useProgressContext } from '../contexts/ProgressContext';
import {
  roadmapLearningContent,
  roadmapAnalyticsContent,
  roadmapContentContent,
  roadmapUXContent,
  roadmapTechnicalContent,
  roadmapSocialContent,
  roadmapAccessibilityContent,
} from './RoadmapContent';
import {
  styleGuideComponentsContent,
  styleGuideQuestionContent,
  styleGuidePassageContent,
  styleGuideQPContent,
  styleGuideStructureContent,
  styleGuidePromptsContent,
  styleGuideTechnicalContent,
  serializeAllStyleGuideContent,
} from './StyleGuideContent';

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
  lessonLinkageMeta?: Record<string, LessonLinkageMeta>;
  isLessonComplete?: (lessonId: string) => boolean;
}



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
  lessonLinkageMeta,
  isLessonComplete,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [styleGuideOpen, setStyleGuideOpen] = useState(false);
  const [styleGuideTab, setStyleGuideTab] = useState<'components' | 'questions' | 'passages' | 'qp' | 'structure' | 'prompts' | 'technical'>('components');
  const [roadmapOpen, setRoadmapOpen] = useState(false);
  const [styleGuideCopied, setStyleGuideCopied] = useState(false);
  const [roadmapTab, setRoadmapTab] = useState<'learning' | 'analytics' | 'content' | 'ux' | 'technical' | 'social' | 'accessibility'>('learning');
  const activeLessonRef = useRef<HTMLButtonElement | null>(null);
  const mainRef = useRef<HTMLElement | null>(null);
  const exportModalRef = useRef<HTMLDivElement | null>(null);
  const styleGuideModalRef = useRef<HTMLDivElement | null>(null);
  const roadmapModalRef = useRef<HTMLDivElement | null>(null);
  
  const { progress, importProgress } = useProgressContext();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleBackupProgress = () => {
    const dataStr = JSON.stringify(progress, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `lsat-progress-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleRestoreProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        const success = importProgress(json);
        setImportStatus(success ? 'success' : 'error');
        setTimeout(() => setImportStatus('idle'), 3000);
      } catch {
        setImportStatus('error');
        setTimeout(() => setImportStatus('idle'), 3000);
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

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
                  return (
                    <React.Fragment key={module.id}>
                      {isLRStart && <h3 className="px-3 mt-2 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Logical Reasoning</h3>}
                      {isRCStart && <h3 className="px-3 mt-6 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Reading Comprehension</h3>}
                      {isAdvancedStart && <h3 className="px-3 mt-6 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Advanced Passages</h3>}
                      <div className="mb-1" role="treeitem" aria-expanded={isActive}>
                        <button onClick={() => { onSelectModule(module.id); }} className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group ${isActive ? 'bg-slate-800 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`} aria-current={isActive ? 'true' : undefined}>
                          <span className="flex-1 truncate pr-2"><span className="opacity-50 mr-2">{module.id}.</span>{module.title}</span>
                          {isActive && <ChevronRight size={14} className="text-indigo-400" />}
                        </button>
                        {isActive && sidebarLessons.length > 0 && (
                          <div className="mt-2 ml-3 pl-3 border-l-2 border-slate-800 space-y-1 my-2 animate-in slide-in-from-left-2 duration-200" role="group" aria-label={`Lessons in ${module.title}`}>
                            {sidebarLessons.map((lesson) => {
                              const completed = isLessonComplete?.(lesson.id) ?? false;
                              const linkage = lessonLinkageMeta?.[lesson.id];
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
                                  {linkage?.status !== 'ok' && !linkage?.isExempt && linkage?.statusLabel && (
                                    <span
                                      className="ml-auto inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wide bg-red-500/20 text-red-300 border border-red-500/40"
                                      title={linkage.statusLabel}
                                    >
                                      {linkage.statusLabel}
                                    </span>
                                  )}
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
        <div className="px-4 py-3 border-t border-slate-800">
          <Link to="/question-bank" onClick={() => setSidebarOpen(false)} className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200">
            <BookOpen size={18} />
            <span className="font-medium">Question Bank</span>
            <span className="ml-auto text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full">150</span>
          </Link>
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
            <Link to="/question-bank" className="flex items-center space-x-2 px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 transition-all shadow-sm" aria-label="Question Bank">
              <BookOpen size={16} />
              <span>Question Bank</span>
              <span className="ml-1 text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-full font-mono">150</span>
            </Link>
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
                   <div className="flex items-center bg-slate-100 p-1 rounded-lg overflow-x-auto" role="tablist">
                      <button role="tab" aria-selected={styleGuideTab === 'components'} onClick={() => setStyleGuideTab('components')} className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${styleGuideTab === 'components' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Components</button>
                      <button role="tab" aria-selected={styleGuideTab === 'questions'} onClick={() => setStyleGuideTab('questions')} className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${styleGuideTab === 'questions' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Question Card</button>
                      <button role="tab" aria-selected={styleGuideTab === 'passages'} onClick={() => setStyleGuideTab('passages')} className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${styleGuideTab === 'passages' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Passage Card</button>
                      <button role="tab" aria-selected={styleGuideTab === 'qp'} onClick={() => setStyleGuideTab('qp')} className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${styleGuideTab === 'qp' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Q+P Card</button>
                      <button role="tab" aria-selected={styleGuideTab === 'structure'} onClick={() => setStyleGuideTab('structure')} className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${styleGuideTab === 'structure' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Structure</button>
                      <button role="tab" aria-selected={styleGuideTab === 'prompts'} onClick={() => setStyleGuideTab('prompts')} className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${styleGuideTab === 'prompts' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Prompts</button>
                      <button role="tab" aria-selected={styleGuideTab === 'technical'} onClick={() => setStyleGuideTab('technical')} className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${styleGuideTab === 'technical' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Technical</button>
                   </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(serializeAllStyleGuideContent());
                        setStyleGuideCopied(true);
                        setTimeout(() => setStyleGuideCopied(false), 2000);
                      } catch (err) { console.error('Copy failed', err); }
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                    aria-label="Copy entire style guide to clipboard"
                  >
                    {styleGuideCopied ? <><Check size={14} className="text-emerald-500" /><span className="text-emerald-600">Copied!</span></> : <><Copy size={14} /><span>Copy All</span></>}
                  </button>
                  <button onClick={() => setStyleGuideOpen(false)} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors" aria-label="Close style guide"><X size={20} /></button>
                </div>
             </div>
             <div className="flex-1 overflow-y-auto p-6" role="tabpanel">
                <LessonViewer 
                   title={
                     styleGuideTab === 'components' ? "Component Library" : 
                     styleGuideTab === 'questions' ? "Question Card" : 
                     styleGuideTab === 'passages' ? "Passage Card" : 
                     styleGuideTab === 'qp' ? "Question + Passage Card" : 
                     styleGuideTab === 'structure' ? "Structure & Voice" : 
                     styleGuideTab === 'technical' ? "Technical Reference" :
                     "Content Generation Prompts"
                   } 
                   content={
                     styleGuideTab === 'components' ? styleGuideComponentsContent : 
                     styleGuideTab === 'questions' ? styleGuideQuestionContent : 
                     styleGuideTab === 'passages' ? styleGuidePassageContent : 
                     styleGuideTab === 'qp' ? styleGuideQPContent : 
                     styleGuideTab === 'structure' ? styleGuideStructureContent : 
                     styleGuideTab === 'technical' ? styleGuideTechnicalContent :
                     styleGuidePromptsContent
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
              <div><h2 className="text-xl font-bold flex items-center gap-2"><Database size={24} />Data & Export</h2><p className="text-indigo-100 text-xs mt-1 font-medium">LSAT Logical Reasoning Mastery Curriculum</p></div>
              <button onClick={() => setExportModalOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="Close export dialog"><X size={20} /></button>
            </div>
            <div className="p-8 max-h-[70vh] overflow-y-auto">
              
              {/* Progress Backup Section */}
              <div className="mb-8 border-b border-slate-100 pb-8">
                 <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">User Progress</h3>
                 <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                       <div className="bg-white p-2 rounded-lg text-emerald-600 shadow-sm"><CheckCircle size={20} /></div>
                       <div>
                          <h4 className="text-sm font-bold text-slate-900 mb-1">Backup & Restore</h4>
                          <p className="text-xs text-slate-600 leading-relaxed">Save your progress to a file or restore from a previous backup. Useful if you switch devices or clear your cache.</p>
                       </div>
                    </div>
                    <div className="flex gap-3 mt-2">
                       <button onClick={handleBackupProgress} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-700 transition-all shadow-sm">
                          <Download size={16} /> Backup
                       </button>
                       <div className="relative flex-1">
                          <input 
                             type="file" 
                             accept=".json" 
                             ref={fileInputRef}
                             onChange={handleRestoreProgress}
                             className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                             title="Restore Progress"
                          />
                          <button className={`w-full flex items-center justify-center gap-2 px-4 py-2 border rounded-lg text-sm font-bold transition-all shadow-sm pointer-events-none ${
                             importStatus === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' :
                             importStatus === 'error' ? 'bg-rose-50 border-rose-200 text-rose-700' :
                             'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                          }`}>
                             {importStatus === 'success' ? <Check size={16} /> : importStatus === 'error' ? <X size={16} /> : <Upload size={16} />}
                             {importStatus === 'success' ? 'Restored!' : importStatus === 'error' ? 'Failed' : 'Restore'}
                          </button>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-8 flex gap-4 items-start">
                <div className="bg-white p-2 rounded-lg text-indigo-600 shadow-sm"><Info size={20} /></div>
                <div><h4 className="text-sm font-bold text-indigo-900 mb-1">Export Content</h4><p className="text-xs text-indigo-700 leading-relaxed">You can download the entire curriculum including all modules and every individual lesson content.</p></div>
              </div>
              <div className="space-y-6">
                <div><h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Select Format</h3>
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
