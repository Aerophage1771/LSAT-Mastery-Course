
import React, { useState, useEffect, useRef } from 'react';
import { ModuleData } from '../types';
import { BookOpen, CheckCircle, Circle, Menu, X, ChevronRight, LayoutGrid, Download, Info, ArrowLeft, ArrowRight, FileText } from 'lucide-react';
import {
  generateCourseText,
  generateCourseRTF,
  generateCourseJSON,
  generateCourseCSV,
  generateCoursePDF,
  generateLessonText,
  generateLessonRTF,
  generateLessonJSON,
  generateLessonCSV,
  generateLessonPDF,
  generateModuleText,
  generateModuleRTF,
  generateModuleJSON,
  generateModuleCSV,
  generateModulePDF,
  generateUnitText,
  generateUnitRTF,
  generateUnitJSON,
  generateUnitCSV,
  generateUnitPDF,
} from '../utils/export';
import { generateCourseJSX, generateLessonJSX } from '../utils/exportRendering';
import { ExportControls } from './ExportControls';
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
  activeView?: 'dashboard' | 'questionBank' | 'templates' | 'lesson';
  onSelectModule: (id: number) => void;
  onSelectLesson: (id: string) => void;
  onGoHome: () => void;
  onGoToQuestionBank?: () => void;
  onGoToTemplates?: () => void;
  lessonNav?: LessonNav | null;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  modules,
  activeModuleId,
  activeLessonId,
  activeView = 'dashboard',
  onSelectModule,
  onSelectLesson,
  onGoHome,
  onGoToQuestionBank,
  onGoToTemplates,
  lessonNav,
  children
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [exportScope, setExportScope] = useState<'lesson' | 'module' | 'unit' | 'course'>('course');
  const activeLessonRef = useRef<HTMLButtonElement | null>(null);
  const mainRef = useRef<HTMLElement | null>(null);

  const activeModuleData = modules.find(m => m.id === activeModuleId);
  const activeLessonData = activeModuleData?.lessons.find(l => l.id === activeLessonId);
  const unitModules = activeModuleData ? modules.filter(m => m.unit === activeModuleData.unit) : [];

  useEffect(() => {
    if (!exportModalOpen) return;
    const hasLesson = activeModuleId != null && activeLessonId != null && activeLessonData;
    const hasModule = activeModuleId != null && activeModuleData;
    let next: 'lesson' | 'module' | 'unit' | 'course' = 'course';
    if (hasLesson) next = 'lesson';
    else if (hasModule) next = 'module';
    setExportScope(next);
  }, [exportModalOpen, activeModuleId, activeLessonId, activeModuleData, activeLessonData]);

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
      if (event.key === 'Escape') setExportModalOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (exportModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [exportModalOpen]);

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
            <div className="space-y-1">
              <button onClick={() => { onGoHome(); setSidebarOpen(false); }} className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${activeView === 'dashboard' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50' : 'hover:bg-slate-800 text-slate-400 hover:text-slate-100'}`}>
                <LayoutGrid size={18} /><span className="font-medium">Course Dashboard</span>
              </button>
              {onGoToQuestionBank && (
                <button onClick={() => { onGoToQuestionBank(); setSidebarOpen(false); }} className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${activeView === 'questionBank' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50' : 'hover:bg-slate-800 text-slate-400 hover:text-slate-100'}`}>
                  <BookOpen size={18} /><span className="font-medium">Question Bank</span>
                </button>
              )}
              {onGoToTemplates && (
                <button onClick={() => { onGoToTemplates(); setSidebarOpen(false); }} className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${activeView === 'templates' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50' : 'hover:bg-slate-800 text-slate-400 hover:text-slate-100'}`}>
                  <FileText size={18} /><span className="font-medium">Templates</span>
                </button>
              )}
            </div>
            <div>
              <div className="space-y-1">
                {modules.map((module) => {
                  const isActive = activeModuleId === module.id;
                  const isLRStart = module.id === 1;
                  const isRCStart = module.id === 21;
                  const isAdvancedStart = module.id === 50;
                  return (
                    <React.Fragment key={module.id}>
                      {isLRStart && <h3 className="px-3 mt-2 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Logical Reasoning</h3>}
                      {isRCStart && <h3 className="px-3 mt-6 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Reading Comprehension</h3>}
                      {isAdvancedStart && <h3 className="px-3 mt-6 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Advanced Passages</h3>}
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
              {activeView === 'questionBank' && (
                <><ChevronRight size={14} className="mx-2 text-slate-300" /><span className="font-semibold text-slate-800">Question Bank</span></>
              )}
              {activeView === 'templates' && (
                <><ChevronRight size={14} className="mx-2 text-slate-300" /><span className="font-semibold text-slate-800">Templates</span></>
              )}
              {activeModuleData && activeView === 'lesson' && (
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
            <button onClick={() => setExportModalOpen(true)} className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm font-bold text-white transition-all shadow-lg shadow-indigo-200">
              <Download size={16} /><span>Full Course Export</span>
            </button>
          </div>
        </header>
        <main ref={mainRef} className="flex-1 min-h-0 overflow-y-auto p-4 lg:p-8 scroll-smooth bg-slate-50/50">{children}</main>
      </div>

      {exportModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setExportModalOpen(false)} />
          <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200 my-auto">
            <div className="bg-indigo-600 px-6 py-6 text-white flex items-center justify-between shrink-0 rounded-t-2xl">
              <div><h2 className="text-xl font-bold flex items-center gap-2"><Download size={24} />Export Course Content</h2><p className="text-indigo-100 text-xs mt-1 font-medium">LSAT Logical Reasoning Mastery Curriculum</p></div>
              <button onClick={() => setExportModalOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors"><X size={20} /></button>
            </div>
            <div className="p-8 overflow-visible min-h-0">
              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-6 flex gap-4 items-start">
                <div className="bg-white p-2 rounded-lg text-indigo-600 shadow-sm shrink-0"><Info size={20} /></div>
                <div><h4 className="text-sm font-bold text-indigo-900 mb-1">Export Instructions</h4><p className="text-xs text-indigo-700 leading-relaxed">Choose what to export (current lesson, module, unit, or full course), then pick a format below.</p></div>
              </div>

              <div className="mb-6">
                <h3 id="export-scope-label" className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">What to export</h3>
                <div role="radiogroup" aria-labelledby="export-scope-label" className="space-y-0.5 rounded-xl border border-slate-200 bg-slate-50/50 overflow-hidden">
                  {[
                    {
                      scope: 'lesson' as const,
                      label: 'Current lesson',
                      subtitle: activeLessonData ? `Module ${activeModuleData?.id}: ${activeLessonData.title}` : null,
                      disabled: !activeLessonData,
                    },
                    {
                      scope: 'module' as const,
                      label: 'Current module',
                      subtitle: activeModuleData ? `Module ${activeModuleData.id}: ${activeModuleData.title}` : null,
                      disabled: !activeModuleData,
                    },
                    {
                      scope: 'unit' as const,
                      label: 'Current unit',
                      subtitle: activeModuleData ? activeModuleData.unit : null,
                      disabled: !activeModuleData,
                    },
                    {
                      scope: 'course' as const,
                      label: 'Entire course',
                      subtitle: 'all modules',
                      disabled: false,
                    },
                  ].map(({ scope, label, subtitle, disabled }) => (
                    <button
                      key={scope}
                      type="button"
                      role="radio"
                      aria-checked={exportScope === scope}
                      aria-disabled={disabled}
                      onClick={() => !disabled && setExportScope(scope)}
                      className={`w-full flex items-center gap-3 py-2.5 px-3 text-left rounded-lg transition-colors ${disabled ? 'cursor-not-allowed text-slate-400' : 'hover:bg-slate-100'} ${exportScope === scope ? 'bg-indigo-50 text-indigo-900' : 'text-slate-700'}`}
                    >
                      {exportScope === scope ? (
                        <CheckCircle className="w-5 h-5 text-indigo-600 shrink-0" aria-hidden />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-400 shrink-0" aria-hidden />
                      )}
                      <span className="font-medium">{label}</span>
                      {subtitle && <span className="text-slate-500 truncate">({subtitle})</span>}
                    </button>
                  ))}
                </div>
                {!activeModuleData && (
                  <p className="mt-2 text-xs text-slate-500">Open a lesson to export lesson, module, or unit.</p>
                )}
              </div>

              <div className="space-y-6">
                <div><h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Select Export Format</h3>
                <ExportControls
                    label="Export"
                    filename={
                      exportScope === 'lesson' && activeLessonData
                        ? `LSAT_Lesson_${activeLessonData.title.replace(/[^a-z0-9]/gi, '_').substring(0, 40)}`
                        : exportScope === 'module' && activeModuleData
                          ? `LSAT_Module_${activeModuleData.id}`
                          : exportScope === 'unit' && activeModuleData
                            ? `LSAT_Unit_${activeModuleData.unit.replace(/[^a-z0-9]/gi, '_')}`
                            : 'LSAT_Mastery_Course'
                    }
                    onCopy={() =>
                      exportScope === 'lesson' && activeLessonData
                        ? generateLessonText(activeLessonData)
                        : exportScope === 'module' && activeModuleData
                          ? generateModuleText(activeModuleData)
                          : exportScope === 'unit' && activeModuleData
                            ? generateUnitText(activeModuleData.unit, unitModules)
                            : generateCourseText(modules)
                    }
                    onExportText={() =>
                      exportScope === 'lesson' && activeLessonData
                        ? generateLessonText(activeLessonData)
                        : exportScope === 'module' && activeModuleData
                          ? generateModuleText(activeModuleData)
                          : exportScope === 'unit' && activeModuleData
                            ? generateUnitText(activeModuleData.unit, unitModules)
                            : generateCourseText(modules)
                    }
                    onExportRTF={() =>
                      exportScope === 'lesson' && activeLessonData
                        ? generateLessonRTF(activeLessonData)
                        : exportScope === 'module' && activeModuleData
                          ? generateModuleRTF(activeModuleData)
                          : exportScope === 'unit' && activeModuleData
                            ? generateUnitRTF(activeModuleData.unit, unitModules)
                            : generateCourseRTF(modules)
                    }
                    onExportJSON={() =>
                      exportScope === 'lesson' && activeLessonData
                        ? generateLessonJSON(activeLessonData)
                        : exportScope === 'module' && activeModuleData
                          ? generateModuleJSON(activeModuleData)
                          : exportScope === 'unit' && activeModuleData
                            ? generateUnitJSON(activeModuleData.unit, unitModules)
                            : generateCourseJSON(modules)
                    }
                    onExportCSV={() =>
                      exportScope === 'lesson' && activeLessonData
                        ? generateLessonCSV(activeLessonData)
                        : exportScope === 'module' && activeModuleData
                          ? generateModuleCSV(activeModuleData)
                          : exportScope === 'unit' && activeModuleData
                            ? generateUnitCSV(activeModuleData.unit, unitModules)
                            : generateCourseCSV(modules)
                    }
                    onExportPDF={() => {
                      if (exportScope === 'lesson' && activeLessonData) generateLessonPDF(activeLessonData);
                      else if (exportScope === 'module' && activeModuleData) generateModulePDF(activeModuleData);
                      else if (exportScope === 'unit' && activeModuleData) generateUnitPDF(activeModuleData.unit, unitModules);
                      else generateCoursePDF(modules);
                    }}
                    onCopyAsJSX={
                      exportScope === 'course'
                        ? () => generateCourseJSX(modules)
                        : exportScope === 'lesson' && activeLessonData
                          ? () => generateLessonJSX(activeLessonData)
                          : undefined
                    }
                 />
                </div>
                <div className="pt-6 border-t border-slate-100"><p className="text-[10px] text-slate-400 text-center uppercase font-bold tracking-widest italic">All lessons are generated in real-time</p></div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-4 flex justify-end border-t border-slate-100 shrink-0 rounded-b-2xl"><button onClick={() => setExportModalOpen(false)} className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-sm font-bold rounded-xl transition-colors">Close</button></div>
          </div>
        </div>
      )}
    </div>
  );
};