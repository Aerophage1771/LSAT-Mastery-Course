import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { LessonLinkageMeta, ModuleData } from '../types';
import {
  BookOpen,
  CheckCircle,
  Circle,
  Menu,
  X,
  ChevronRight,
  LayoutGrid,
  Download,
  Info,
  Palette,
  ArrowLeft,
  ArrowRight,
  Search,
  Rocket,
  Copy,
  Check,
  Upload,
  Database,
} from 'lucide-react';
import {
  generateCanonicalCourseJSON,
  generateCurriculumOutlineCSV,
  generateCurriculumOutlineJSON,
  generateCurriculumOutlinePDF,
  generateCurriculumOutlineRTF,
  generateCurriculumOutlineText,
  generateFullCourseCSV,
  generateFullCourseJSON,
  generateFullCoursePDF,
  generateFullCourseRTF,
  generateFullCourseText,
  generateInterchangeCourseJSON,
} from '../utils/export';
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
  modules: Array<{
    id: number;
    title: string;
    category: string;
    description: string;
    unit: string;
    lessons?: ModuleData['lessons'];
  }>;
  exportModules?: ModuleData[];
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

type ExportTrackKey = 'LR' | 'RC' | 'AP';
type ExportActionKey = 'outline' | 'fullCourse' | 'canonicalCourse' | 'interchangeCourse';
type ExportSelectionStateKey = 'outline' | 'courseContent';

const trackLabels: Record<ExportTrackKey, string> = {
  LR: 'Logical Reasoning',
  RC: 'Reading Comprehension',
  AP: 'Advanced Passages',
};

const getTrackKey = (module: ModuleData): ExportTrackKey => {
  if (module.category === 'LR') return 'LR';
  if (module.category === 'RC') return 'RC';
  return 'AP';
};

const getSelectionStateKey = (action: ExportActionKey): ExportSelectionStateKey =>
  action === 'outline' ? 'outline' : 'courseContent';

const buildFullLessonSelection = (courseModules: ModuleData[]): Record<number, string[]> =>
  Object.fromEntries(courseModules.map((module) => [module.id, module.lessons.map((lesson) => lesson.id)]));

const syncLessonSelection = (
  previous: Record<number, string[]>,
  courseModules: ModuleData[],
): Record<number, string[]> => {
  if (courseModules.length === 0) return previous;

  const availableLessonIdsByModule = new Map(
    courseModules.map((module) => [module.id, new Set(module.lessons.map((lesson) => lesson.id))]),
  );

  const next: Record<number, string[]> = {};

  for (const module of courseModules) {
    const availableLessonIds = availableLessonIdsByModule.get(module.id) ?? new Set<string>();
    const existing = previous[module.id];

    if (!existing) {
      next[module.id] = module.lessons.map((lesson) => lesson.id);
      continue;
    }

    const filteredExisting = existing.filter((lessonId) => availableLessonIds.has(lessonId));
    next[module.id] = filteredExisting;
  }

  return next;
};

const getExportFileBaseName = ({
  action,
  selectedModules,
  selectedLessons,
  totalModules,
  totalLessons,
}: {
  action: ExportActionKey;
  selectedModules: number;
  selectedLessons: number;
  totalModules: number;
  totalLessons: number;
}) => {
  const isAllSelected = selectedModules === totalModules && selectedLessons === totalLessons;
  const actionLabel = (() => {
    switch (action) {
      case 'outline':
        return 'curriculum_outline';
      case 'fullCourse':
        return 'full_course';
      case 'canonicalCourse':
        return 'canonical_course';
      case 'interchangeCourse':
        return 'interchange_course';
      default:
        return 'export';
    }
  })();
  const scopeLabel = isAllSelected
    ? `all_${totalModules}_modules_${totalLessons}_lessons`
    : `custom_${selectedModules}_modules_${selectedLessons}_lessons`;
  return `LSAT_Mastery_${actionLabel}_${scopeLabel}`;
};

export const Layout: React.FC<LayoutProps> = ({
  modules,
  exportModules,
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
  const [styleGuideTab, setStyleGuideTab] = useState<
    'components' | 'questions' | 'passages' | 'qp' | 'structure' | 'prompts' | 'technical'
  >('components');
  const [roadmapOpen, setRoadmapOpen] = useState(false);
  const [styleGuideCopied, setStyleGuideCopied] = useState(false);
  const [roadmapTab, setRoadmapTab] = useState<
    'learning' | 'analytics' | 'content' | 'ux' | 'technical' | 'social' | 'accessibility'
  >('learning');
  const [activeExportAction, setActiveExportAction] = useState<ExportActionKey>('outline');
  const [outlineLessonIdsByModule, setOutlineLessonIdsByModule] = useState<Record<number, string[]>>({});
  const [courseContentLessonIdsByModule, setCourseContentLessonIdsByModule] = useState<Record<number, string[]>>({});
  const activeLessonRef = useRef<HTMLButtonElement | null>(null);
  const mainRef = useRef<HTMLElement | null>(null);
  const exportModalRef = useRef<HTMLDivElement | null>(null);
  const styleGuideModalRef = useRef<HTMLDivElement | null>(null);
  const roadmapModalRef = useRef<HTMLDivElement | null>(null);

  const { progress, importProgress } = useProgressContext();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const exportableModules = exportModules ?? [];

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
    setOutlineLessonIdsByModule((previous) => syncLessonSelection(previous, exportableModules));
    setCourseContentLessonIdsByModule((previous) => syncLessonSelection(previous, exportableModules));
  }, [exportableModules]);

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
  const groupedExportModules = React.useMemo(
    () =>
      exportableModules.reduce(
        (acc, module) => {
          acc[getTrackKey(module)].push(module);
          return acc;
        },
        { LR: [], RC: [], AP: [] } as Record<ExportTrackKey, ModuleData[]>,
      ),
    [exportableModules],
  );

  const selectedLessonIdsByModule =
    getSelectionStateKey(activeExportAction) === 'outline' ? outlineLessonIdsByModule : courseContentLessonIdsByModule;

  const updateSelectionForAction = (
    action: ExportActionKey,
    updater: (previous: Record<number, string[]>) => Record<number, string[]>,
  ) => {
    if (getSelectionStateKey(action) === 'outline') {
      setOutlineLessonIdsByModule((previous) => updater(previous));
      return;
    }

    setCourseContentLessonIdsByModule((previous) => updater(previous));
  };

  const selectedModulesForExport = React.useMemo(() => {
    return exportableModules
      .map((module) => {
        const selectedLessonIds = new Set(selectedLessonIdsByModule[module.id] ?? []);
        return {
          ...module,
          lessons: module.lessons.filter((lesson) => selectedLessonIds.has(lesson.id)),
        };
      })
      .filter((module) => module.lessons.length > 0);
  }, [exportableModules, selectedLessonIdsByModule]);

  const totalLessons = React.useMemo(
    () => exportableModules.reduce((count, module) => count + module.lessons.length, 0),
    [exportableModules],
  );

  const selectedLessons = React.useMemo(
    () => selectedModulesForExport.reduce((count, module) => count + module.lessons.length, 0),
    [selectedModulesForExport],
  );

  const selectedModulesCount = selectedModulesForExport.length;
  const isFullSelection = selectedModulesCount === exportableModules.length && selectedLessons === totalLessons;
  const exportFileBaseName = getExportFileBaseName({
    action: activeExportAction,
    selectedModules: selectedModulesCount,
    selectedLessons,
    totalModules: exportableModules.length,
    totalLessons,
  });
  const exportSummaryTitle = (() => {
    switch (activeExportAction) {
      case 'outline':
        return 'Curriculum Outline';
      case 'fullCourse':
        return 'Full Course';
      case 'canonicalCourse':
        return 'Canonical Course';
      case 'interchangeCourse':
        return 'Interchange Course';
      default:
        return 'Export';
    }
  })();
  const exportSummaryDescription = (() => {
    switch (activeExportAction) {
      case 'outline':
        return isFullSelection
          ? 'Exports the full curriculum map: sections, units, modules, and lesson titles.'
          : `Exports ${selectedModulesCount} modules and ${selectedLessons} lesson titles from your current scope.`;
      case 'fullCourse':
        return isFullSelection
          ? 'Exports all lesson content with canonical module and lesson names.'
          : `Exports ${selectedModulesCount} modules and ${selectedLessons} lesson bodies from your current scope.`;
      case 'canonicalCourse':
        return isFullSelection
          ? 'Exports the lossless canonical-course JSON contract while keeping runtime lesson modules unchanged.'
          : `Exports ${selectedModulesCount} modules and ${selectedLessons} lessons as canonical-course JSON.`;
      case 'interchangeCourse':
        return isFullSelection
          ? 'Exports the simplified interchange-course JSON derived from canonical-course data for DataToolkit.'
          : `Exports ${selectedModulesCount} modules and ${selectedLessons} lessons as interchange-course JSON.`;
      default:
        return '';
    }
  })();

  const isLessonSelected = (moduleId: number, lessonId: string): boolean =>
    (selectedLessonIdsByModule[moduleId] ?? []).includes(lessonId);

  const toggleLessonSelection = (moduleId: number, lessonId: string, checked: boolean) => {
    updateSelectionForAction(activeExportAction, (previous) => {
      const current = new Set(previous[moduleId] ?? []);
      if (checked) current.add(lessonId);
      else current.delete(lessonId);
      return { ...previous, [moduleId]: Array.from(current) };
    });
  };

  const toggleModuleSelection = (module: ModuleData, checked: boolean) => {
    updateSelectionForAction(activeExportAction, (previous) => ({
      ...previous,
      [module.id]: checked ? module.lessons.map((lesson) => lesson.id) : [],
    }));
  };

  const toggleTrackSelection = (track: ExportTrackKey, checked: boolean) => {
    updateSelectionForAction(activeExportAction, (previous) => {
      const next = { ...previous };
      for (const module of groupedExportModules[track]) {
        next[module.id] = checked ? module.lessons.map((lesson) => lesson.id) : [];
      }
      return next;
    });
  };

  const selectAllLessons = () =>
    updateSelectionForAction(activeExportAction, () => buildFullLessonSelection(exportableModules));
  const clearAllLessons = () =>
    updateSelectionForAction(activeExportAction, () =>
      Object.fromEntries(exportableModules.map((module) => [module.id, []])),
    );

  const trackStats = React.useMemo(() => {
    return (Object.keys(groupedExportModules) as ExportTrackKey[]).reduce(
      (acc, track) => {
        const modulesForTrack = groupedExportModules[track];
        const lessonTotal = modulesForTrack.reduce((count, module) => count + module.lessons.length, 0);
        const selectedLessonTotal = modulesForTrack.reduce(
          (count, module) => count + (selectedLessonIdsByModule[module.id] ?? []).length,
          0,
        );
        acc[track] = {
          moduleTotal: modulesForTrack.length,
          lessonTotal,
          selectedLessonTotal,
          allSelected: lessonTotal > 0 && selectedLessonTotal === lessonTotal,
        };
        return acc;
      },
      {} as Record<
        ExportTrackKey,
        { moduleTotal: number; lessonTotal: number; selectedLessonTotal: number; allSelected: boolean }
      >,
    );
  }, [groupedExportModules, selectedLessonIdsByModule]);

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Mobile header */}
      <div
        className="lg:hidden fixed top-0 left-0 right-0 bg-slate-900 text-white z-50 px-3 py-2 flex items-center justify-between shadow-md"
        role="banner"
      >
        <div className="flex items-center gap-2 min-w-0">
          {lessonNav && (
            <>
              {lessonNav.onPrevious ? (
                <button
                  onClick={lessonNav.onPrevious}
                  aria-label={lessonNav.previousLabel ? `Previous: ${lessonNav.previousLabel}` : 'Previous lesson'}
                  className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex-shrink-0"
                >
                  <ArrowLeft size={20} />
                </button>
              ) : (
                <span
                  className="w-10 h-10 flex items-center justify-center text-slate-600 flex-shrink-0"
                  aria-hidden="true"
                >
                  <ArrowLeft size={20} />
                </span>
              )}
            </>
          )}
          <div
            className="flex items-center space-x-2 min-w-0"
            onClick={onGoHome}
            role="button"
            tabIndex={0}
            aria-label="Go to dashboard"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') onGoHome();
            }}
          >
            <BookOpen className="text-indigo-400 flex-shrink-0" size={20} />
            <span className="font-bold text-lg tracking-tight truncate">LSAT Mastery</span>
          </div>
          {lessonNav && (
            <>
              {lessonNav.onNext ? (
                <button
                  onClick={lessonNav.onNext}
                  aria-label={lessonNav.nextLabel ? `Next: ${lessonNav.nextLabel}` : 'Next lesson'}
                  className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex-shrink-0"
                >
                  <ArrowRight size={20} />
                </button>
              ) : (
                <span
                  className="w-10 h-10 flex items-center justify-center text-slate-600 flex-shrink-0"
                  aria-hidden="true"
                >
                  <ArrowRight size={20} />
                </span>
              )}
            </>
          )}
        </div>
        <div className="flex items-center space-x-1 flex-shrink-0">
          <button
            onClick={() => setExportModalOpen(true)}
            className="p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Open export center"
          >
            <Download size={20} />
          </button>
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <nav
        className={`fixed inset-y-0 left-0 z-50 w-80 bg-slate-900 text-slate-300 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static flex flex-col shadow-2xl ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        aria-label="Course navigation"
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <button
            onClick={() => {
              onGoHome();
              setSidebarOpen(false);
            }}
            className="flex items-center space-x-3 text-slate-100 hover:text-indigo-400 transition-colors group"
            aria-label="LSAT Mastery - Go to Dashboard"
          >
            <div className="bg-indigo-600 p-1.5 rounded-lg group-hover:bg-indigo-500 transition-colors">
              <BookOpen size={20} className="text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">LSAT Mastery</span>
          </button>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-slate-400 hover:text-white"
            aria-label="Close navigation"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="p-4 space-y-6">
            <div>
              <button
                onClick={() => {
                  onGoHome();
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${activeModuleId === null ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50' : 'hover:bg-slate-800 text-slate-400 hover:text-slate-100'}`}
                aria-current={activeModuleId === null ? 'page' : undefined}
              >
                <LayoutGrid size={18} />
                <span className="font-medium">Course Dashboard</span>
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
                      {isLRStart && (
                        <h3 className="px-3 mt-2 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                          Logical Reasoning
                        </h3>
                      )}
                      {isRCStart && (
                        <h3 className="px-3 mt-6 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                          Reading Comprehension
                        </h3>
                      )}
                      {isAdvancedStart && (
                        <h3 className="px-3 mt-6 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                          Advanced Passages
                        </h3>
                      )}
                      <div className="mb-1" role="treeitem" aria-expanded={isActive}>
                        <button
                          onClick={() => {
                            onSelectModule(module.id);
                          }}
                          className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group ${isActive ? 'bg-slate-800 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}
                          aria-current={isActive ? 'true' : undefined}
                        >
                          <span className="flex-1 truncate pr-2">
                            <span className="opacity-50 mr-2">{module.id}.</span>
                            {module.title}
                          </span>
                          {isActive && <ChevronRight size={14} className="text-indigo-400" />}
                        </button>
                        {isActive && sidebarLessons.length > 0 && (
                          <div
                            className="mt-2 ml-3 pl-3 border-l-2 border-slate-800 space-y-1 my-2 animate-in slide-in-from-left-2 duration-200"
                            role="group"
                            aria-label={`Lessons in ${module.title}`}
                          >
                            {sidebarLessons.map((lesson) => {
                              const completed = isLessonComplete?.(lesson.id) ?? false;
                              const linkage = lessonLinkageMeta?.[lesson.id];
                              return (
                                <button
                                  key={lesson.id}
                                  ref={activeLessonId === lesson.id ? activeLessonRef : undefined}
                                  onClick={() => {
                                    onSelectLesson(lesson.id);
                                    setSidebarOpen(false);
                                  }}
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
                                  {linkage?.status !== 'ok' && linkage?.statusLabel && (
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
          <Link
            to="/question-bank"
            onClick={() => setSidebarOpen(false)}
            className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-slate-100 transition-all duration-200"
          >
            <BookOpen size={18} />
            <span className="font-medium">Question Bank</span>
            <span className="ml-auto text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full">150</span>
          </Link>
        </div>
        <div className="p-4 border-t border-slate-800 bg-slate-900/50">
          <div className="text-xs text-slate-500 text-center">&copy; 2025 LSAT Mastery Course</div>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-0 pt-14 lg:pt-0">
        <header
          className="hidden lg:flex flex-shrink-0 items-center justify-between px-8 py-4 bg-white border-b border-slate-200 shadow-sm z-10"
          role="banner"
        >
          <div className="flex items-center gap-4">
            <nav className="flex items-center text-sm breadcrumbs text-slate-500" aria-label="Breadcrumb">
              <button onClick={onGoHome} className="hover:text-indigo-600 transition-colors font-medium">
                Dashboard
              </button>
              {activeModuleData && (
                <>
                  <ChevronRight size={14} className="mx-2 text-slate-300" aria-hidden="true" />
                  <span className="font-semibold text-slate-800" aria-current="page">
                    Module {activeModuleData.id}: {activeModuleData.title}
                  </span>
                </>
              )}
            </nav>
            {lessonNav && (
              <div
                className="flex items-center gap-1 border-l border-slate-200 pl-4"
                role="navigation"
                aria-label="Lesson navigation"
              >
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
                  <span className="px-3 py-2 text-slate-300 text-sm font-medium cursor-default" aria-disabled="true">
                    Previous
                  </span>
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
                  <span className="px-3 py-2 text-slate-300 text-sm font-medium cursor-default" aria-disabled="true">
                    Next
                  </span>
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
            <Link
              to="/question-bank"
              className="flex items-center space-x-2 px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 transition-all shadow-sm"
              aria-label="Question Bank"
            >
              <BookOpen size={16} />
              <span>Question Bank</span>
              <span className="ml-1 text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-full font-mono">
                150
              </span>
            </Link>
            <button
              onClick={() => setRoadmapOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 transition-all shadow-sm"
              aria-label="Open roadmap"
            >
              <Rocket size={16} />
              <span>Roadmap</span>
            </button>
            <button
              onClick={() => setStyleGuideOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 transition-all shadow-sm"
              aria-label="Open style guide"
            >
              <Palette size={16} />
              <span>Style Guide</span>
            </button>
            <button
              onClick={() => setExportModalOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm font-bold text-white transition-all shadow-lg shadow-indigo-200"
              aria-label="Open export center"
            >
              <Download size={16} />
              <span>Export</span>
            </button>
          </div>
        </header>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-indigo-600 focus:text-white"
        >
          Skip to content
        </a>
        <main
          ref={mainRef}
          id="main-content"
          className="flex-1 min-h-0 overflow-y-auto p-4 lg:p-8 scroll-smooth bg-slate-50/50"
          role="main"
          tabIndex={-1}
        >
          {children}
        </main>
      </div>

      {/* Style Guide Modal */}
      {styleGuideOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Style Guide"
        >
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setStyleGuideOpen(false)}
          />
          <div
            ref={styleGuideModalRef}
            tabIndex={-1}
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col bg-slate-50 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
          >
            <div className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center z-10">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-slate-800">
                  <Palette size={20} className="text-indigo-600" />
                  <h2 className="font-bold text-lg">Style Guide</h2>
                </div>
                <div className="flex items-center bg-slate-100 p-1 rounded-lg overflow-x-auto" role="tablist">
                  <button
                    role="tab"
                    aria-selected={styleGuideTab === 'components'}
                    onClick={() => setStyleGuideTab('components')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${styleGuideTab === 'components' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    Components
                  </button>
                  <button
                    role="tab"
                    aria-selected={styleGuideTab === 'questions'}
                    onClick={() => setStyleGuideTab('questions')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${styleGuideTab === 'questions' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    Question Card
                  </button>
                  <button
                    role="tab"
                    aria-selected={styleGuideTab === 'passages'}
                    onClick={() => setStyleGuideTab('passages')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${styleGuideTab === 'passages' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    Passage Card
                  </button>
                  <button
                    role="tab"
                    aria-selected={styleGuideTab === 'qp'}
                    onClick={() => setStyleGuideTab('qp')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${styleGuideTab === 'qp' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    Q+P Card
                  </button>
                  <button
                    role="tab"
                    aria-selected={styleGuideTab === 'structure'}
                    onClick={() => setStyleGuideTab('structure')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${styleGuideTab === 'structure' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    Structure
                  </button>
                  <button
                    role="tab"
                    aria-selected={styleGuideTab === 'prompts'}
                    onClick={() => setStyleGuideTab('prompts')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${styleGuideTab === 'prompts' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    Prompts
                  </button>
                  <button
                    role="tab"
                    aria-selected={styleGuideTab === 'technical'}
                    onClick={() => setStyleGuideTab('technical')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${styleGuideTab === 'technical' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    Technical
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(serializeAllStyleGuideContent());
                      setStyleGuideCopied(true);
                      setTimeout(() => setStyleGuideCopied(false), 2000);
                    } catch (err) {
                      console.error('Copy failed', err);
                    }
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                  aria-label="Copy entire style guide to clipboard"
                >
                  {styleGuideCopied ? (
                    <>
                      <Check size={14} className="text-emerald-500" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy All</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => setStyleGuideOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                  aria-label="Close style guide"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6" role="tabpanel">
              <LessonViewer
                title={
                  styleGuideTab === 'components'
                    ? 'Component Library'
                    : styleGuideTab === 'questions'
                      ? 'Question Card'
                      : styleGuideTab === 'passages'
                        ? 'Passage Card'
                        : styleGuideTab === 'qp'
                          ? 'Question + Passage Card'
                          : styleGuideTab === 'structure'
                            ? 'Structure & Voice'
                            : styleGuideTab === 'technical'
                              ? 'Technical Reference'
                              : 'Content Generation Prompts'
                }
                content={
                  styleGuideTab === 'components'
                    ? styleGuideComponentsContent
                    : styleGuideTab === 'questions'
                      ? styleGuideQuestionContent
                      : styleGuideTab === 'passages'
                        ? styleGuidePassageContent
                        : styleGuideTab === 'qp'
                          ? styleGuideQPContent
                          : styleGuideTab === 'structure'
                            ? styleGuideStructureContent
                            : styleGuideTab === 'technical'
                              ? styleGuideTechnicalContent
                              : styleGuidePromptsContent
                }
                variant="modal"
              />
            </div>
          </div>
        </div>
      )}

      {/* Roadmap Modal */}
      {roadmapOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Product Roadmap"
        >
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setRoadmapOpen(false)}
          />
          <div
            ref={roadmapModalRef}
            tabIndex={-1}
            className="relative w-full max-w-6xl max-h-[90vh] flex flex-col bg-slate-50 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
          >
            <div className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center z-10">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-slate-800">
                  <Rocket size={20} className="text-indigo-600" />
                  <h2 className="font-bold text-lg">Product Roadmap</h2>
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                    70+ ideas
                  </span>
                </div>
                <div className="flex items-center bg-slate-100 p-1 rounded-lg overflow-x-auto" role="tablist">
                  <button
                    role="tab"
                    aria-selected={roadmapTab === 'learning'}
                    onClick={() => setRoadmapTab('learning')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${roadmapTab === 'learning' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    Learning
                  </button>
                  <button
                    role="tab"
                    aria-selected={roadmapTab === 'analytics'}
                    onClick={() => setRoadmapTab('analytics')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${roadmapTab === 'analytics' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    Analytics
                  </button>
                  <button
                    role="tab"
                    aria-selected={roadmapTab === 'content'}
                    onClick={() => setRoadmapTab('content')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${roadmapTab === 'content' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    Content
                  </button>
                  <button
                    role="tab"
                    aria-selected={roadmapTab === 'ux'}
                    onClick={() => setRoadmapTab('ux')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${roadmapTab === 'ux' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    UI/UX
                  </button>
                  <button
                    role="tab"
                    aria-selected={roadmapTab === 'technical'}
                    onClick={() => setRoadmapTab('technical')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${roadmapTab === 'technical' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    Technical
                  </button>
                  <button
                    role="tab"
                    aria-selected={roadmapTab === 'social'}
                    onClick={() => setRoadmapTab('social')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${roadmapTab === 'social' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    Social
                  </button>
                  <button
                    role="tab"
                    aria-selected={roadmapTab === 'accessibility'}
                    onClick={() => setRoadmapTab('accessibility')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${roadmapTab === 'accessibility' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    Accessibility
                  </button>
                </div>
              </div>
              <button
                onClick={() => setRoadmapOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Close roadmap"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6" role="tabpanel">
              <LessonViewer
                title={
                  roadmapTab === 'learning'
                    ? 'Learning Experience'
                    : roadmapTab === 'analytics'
                      ? 'Analytics & Progress'
                      : roadmapTab === 'content'
                        ? 'Content & Curriculum'
                        : roadmapTab === 'ux'
                          ? 'UI / UX Improvements'
                          : roadmapTab === 'technical'
                            ? 'Technical & Infrastructure'
                            : roadmapTab === 'social'
                              ? 'Social & Gamification'
                              : 'Accessibility & Inclusion'
                }
                content={
                  roadmapTab === 'learning'
                    ? roadmapLearningContent
                    : roadmapTab === 'analytics'
                      ? roadmapAnalyticsContent
                      : roadmapTab === 'content'
                        ? roadmapContentContent
                        : roadmapTab === 'ux'
                          ? roadmapUXContent
                          : roadmapTab === 'technical'
                            ? roadmapTechnicalContent
                            : roadmapTab === 'social'
                              ? roadmapSocialContent
                              : roadmapAccessibilityContent
                }
                variant="modal"
              />
            </div>
          </div>
        </div>
      )}

      {/* Export Modal */}
      {exportModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Export Course Content"
        >
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setExportModalOpen(false)}
          />
          <div
            ref={exportModalRef}
            tabIndex={-1}
            className="relative bg-white w-full max-w-5xl max-h-[92vh] rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
          >
            <div className="bg-indigo-600 px-6 py-6 text-white flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Database size={24} />
                  Export Center
                </h2>
                <p className="text-indigo-100 text-xs mt-1 font-medium">
                  Whole course selected by default. Choose an export type, then customize scope if needed.
                </p>
              </div>
              <button
                onClick={() => setExportModalOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close export dialog"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-8 max-h-[78vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <button
                  onClick={() => setActiveExportAction('outline')}
                  className={`text-left rounded-2xl border p-5 transition-all ${activeExportAction === 'outline' ? 'border-indigo-300 bg-indigo-50 shadow-sm' : 'border-slate-200 hover:border-indigo-200 hover:bg-slate-50'}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-slate-900">Export Curriculum Outline</h3>
                    {activeExportAction === 'outline' && <Check size={18} className="text-indigo-600" />}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Structure only: sections, units, modules, and lesson titles using canonical naming.
                  </p>
                </button>
                <button
                  onClick={() => setActiveExportAction('fullCourse')}
                  className={`text-left rounded-2xl border p-5 transition-all ${activeExportAction === 'fullCourse' ? 'border-indigo-300 bg-indigo-50 shadow-sm' : 'border-slate-200 hover:border-indigo-200 hover:bg-slate-50'}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-slate-900">Export Full Course</h3>
                    {activeExportAction === 'fullCourse' && <Check size={18} className="text-indigo-600" />}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Lesson content export with canonical module and lesson titles across every selected lesson.
                  </p>
                </button>
                <button
                  onClick={() => setActiveExportAction('canonicalCourse')}
                  className={`text-left rounded-2xl border p-5 transition-all ${activeExportAction === 'canonicalCourse' ? 'border-indigo-300 bg-indigo-50 shadow-sm' : 'border-slate-200 hover:border-indigo-200 hover:bg-slate-50'}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-slate-900">Export Canonical Course</h3>
                    {activeExportAction === 'canonicalCourse' && <Check size={18} className="text-indigo-600" />}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Lossless JSON export with route/source module IDs, question policy, and full block fidelity.
                  </p>
                </button>
                <button
                  onClick={() => setActiveExportAction('interchangeCourse')}
                  className={`text-left rounded-2xl border p-5 transition-all ${activeExportAction === 'interchangeCourse' ? 'border-indigo-300 bg-indigo-50 shadow-sm' : 'border-slate-200 hover:border-indigo-200 hover:bg-slate-50'}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-slate-900">Export Interchange Course</h3>
                    {activeExportAction === 'interchangeCourse' && <Check size={18} className="text-indigo-600" />}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Simplified JSON for DataToolkit with markdown lesson content and supplemental materials.
                  </p>
                </button>
              </div>

              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-8 flex gap-4 items-start">
                <div className="bg-white p-2 rounded-lg text-indigo-600 shadow-sm">
                  <Info size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-indigo-900 mb-1">{exportSummaryTitle}</h4>
                  <p className="text-xs text-indigo-700 leading-relaxed">{exportSummaryDescription}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)] gap-6">
                <div className="bg-white border border-slate-200 rounded-xl">
                  <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Optional Filters</h3>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={selectAllLessons}
                        className="text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                      >
                        Reset to whole course
                      </button>
                      <button
                        onClick={clearAllLessons}
                        className="text-xs font-semibold text-slate-500 hover:text-slate-700"
                      >
                        Clear filters
                      </button>
                    </div>
                  </div>
                  <details className="group" open={!isFullSelection || selectedLessons === 0}>
                    <summary className="list-none cursor-pointer px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                      Filter by track, module, or lesson
                    </summary>
                    <div className="max-h-[52vh] overflow-y-auto p-4 space-y-4 border-t border-slate-100">
                      {(Object.keys(groupedExportModules) as ExportTrackKey[]).map((track) => {
                        const modulesForTrack = groupedExportModules[track];
                        if (modulesForTrack.length === 0) return null;
                        const stats = trackStats[track];

                        return (
                          <div key={track} className="border border-slate-200 rounded-lg">
                            <div className="px-3 py-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                              <label className="flex items-center gap-2 text-sm font-bold text-slate-800">
                                <input
                                  type="checkbox"
                                  checked={stats.allSelected}
                                  onChange={(event) => toggleTrackSelection(track, event.target.checked)}
                                  className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                {trackLabels[track]}
                              </label>
                              <span className="text-xs font-semibold text-slate-500">
                                {stats.selectedLessonTotal}/{stats.lessonTotal} lessons
                              </span>
                            </div>
                            <div className="divide-y divide-slate-100">
                              {modulesForTrack.map((module) => {
                                const selectedIds = selectedLessonIdsByModule[module.id] ?? [];
                                const moduleAllSelected =
                                  module.lessons.length > 0 && selectedIds.length === module.lessons.length;
                                return (
                                  <details key={module.id} className="group" open>
                                    <summary className="list-none cursor-pointer px-3 py-2 flex items-center justify-between hover:bg-slate-50">
                                      <label
                                        className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                                        onClick={(event) => event.stopPropagation()}
                                      >
                                        <input
                                          type="checkbox"
                                          checked={moduleAllSelected}
                                          onChange={(event) => toggleModuleSelection(module, event.target.checked)}
                                          className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        Module {module.id}: {module.title}
                                      </label>
                                      <span className="text-xs font-medium text-slate-500">
                                        {selectedIds.length}/{module.lessons.length}
                                      </span>
                                    </summary>
                                    <div className="px-5 pb-3 space-y-1">
                                      {module.lessons.map((lesson) => (
                                        <label
                                          key={lesson.id}
                                          className="flex items-start gap-2 py-1 text-sm text-slate-600"
                                        >
                                          <input
                                            type="checkbox"
                                            checked={isLessonSelected(module.id, lesson.id)}
                                            onChange={(event) =>
                                              toggleLessonSelection(module.id, lesson.id, event.target.checked)
                                            }
                                            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                                          />
                                          <span className="leading-snug">{lesson.title}</span>
                                        </label>
                                      ))}
                                    </div>
                                  </details>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </details>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Scope Summary</h3>
                    <div className="space-y-1 text-sm text-slate-700">
                      <p>
                        <span className="font-bold">{selectedModulesCount}</span> modules selected
                      </p>
                      <p>
                        <span className="font-bold">{selectedLessons}</span> lessons selected
                      </p>
                      <p className="text-xs text-slate-500">Total lessons available: {totalLessons}</p>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Export Format</h3>
                    {selectedLessons > 0 ? (
                      <ExportControls
                        label={
                          activeExportAction === 'outline'
                            ? 'Curriculum Outline'
                            : activeExportAction === 'fullCourse'
                              ? 'Full Course'
                              : activeExportAction === 'canonicalCourse'
                                ? 'Canonical Course'
                                : 'Interchange Course'
                        }
                        filename={exportFileBaseName}
                        onCopy={() =>
                          activeExportAction === 'outline'
                            ? generateCurriculumOutlineText(selectedModulesForExport)
                            : activeExportAction === 'fullCourse'
                              ? generateFullCourseText(selectedModulesForExport)
                              : activeExportAction === 'canonicalCourse'
                                ? generateCanonicalCourseJSON(selectedModulesForExport)
                                : generateInterchangeCourseJSON(selectedModulesForExport)
                        }
                        onExportText={() =>
                          activeExportAction === 'outline'
                            ? generateCurriculumOutlineText(selectedModulesForExport)
                            : generateFullCourseText(selectedModulesForExport)
                        }
                        onExportRTF={() =>
                          activeExportAction === 'outline'
                            ? generateCurriculumOutlineRTF(selectedModulesForExport)
                            : generateFullCourseRTF(selectedModulesForExport)
                        }
                        onExportJSON={() =>
                          activeExportAction === 'outline'
                            ? generateCurriculumOutlineJSON(selectedModulesForExport)
                            : activeExportAction === 'fullCourse'
                              ? generateFullCourseJSON(selectedModulesForExport)
                              : activeExportAction === 'canonicalCourse'
                                ? generateCanonicalCourseJSON(selectedModulesForExport)
                                : generateInterchangeCourseJSON(selectedModulesForExport)
                        }
                        onExportCSV={() =>
                          activeExportAction === 'outline'
                            ? generateCurriculumOutlineCSV(selectedModulesForExport)
                            : generateFullCourseCSV(selectedModulesForExport)
                        }
                        onExportPDF={() =>
                          activeExportAction === 'outline'
                            ? generateCurriculumOutlinePDF(selectedModulesForExport, `${exportFileBaseName}.pdf`)
                            : generateFullCoursePDF(selectedModulesForExport, `${exportFileBaseName}.pdf`)
                        }
                        allowedFormats={
                          activeExportAction === 'canonicalCourse' || activeExportAction === 'interchangeCourse'
                            ? ['json']
                            : undefined
                        }
                        copyLabel={
                          activeExportAction === 'canonicalCourse' || activeExportAction === 'interchangeCourse'
                            ? 'Copy JSON'
                            : undefined
                        }
                      />
                    ) : (
                      <div className="space-y-3">
                        <p className="text-sm text-slate-500">
                          No lessons are currently in scope. Reset to the whole course or choose at least one lesson.
                        </p>
                        <button
                          onClick={selectAllLessons}
                          className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition-colors"
                        >
                          Reset to whole course
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">User Progress</h3>
                    <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-slate-50 p-2 rounded-lg text-emerald-600 shadow-sm">
                          <CheckCircle size={20} />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 mb-1">Backup & Restore</h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            Save your progress to a file or restore from a previous backup. Useful if you switch devices
                            or clear your cache.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-2">
                        <button
                          onClick={handleBackupProgress}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-sm font-bold text-slate-700 transition-all shadow-sm"
                        >
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
                          <button
                            className={`w-full flex items-center justify-center gap-2 px-4 py-2 border rounded-lg text-sm font-bold transition-all shadow-sm pointer-events-none ${
                              importStatus === 'success'
                                ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                                : importStatus === 'error'
                                  ? 'bg-rose-50 border-rose-200 text-rose-700'
                                  : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                            }`}
                          >
                            {importStatus === 'success' ? (
                              <Check size={16} />
                            ) : importStatus === 'error' ? (
                              <X size={16} />
                            ) : (
                              <Upload size={16} />
                            )}
                            {importStatus === 'success' ? 'Restored!' : importStatus === 'error' ? 'Failed' : 'Restore'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-4 flex justify-end border-t border-slate-100">
              <button
                onClick={() => setExportModalOpen(false)}
                className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-sm font-bold rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
