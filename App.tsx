import React, { useState, useEffect, useCallback, Suspense, useMemo } from 'react';
import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LessonViewer } from './components/LessonViewer';
import { Dashboard } from './components/Dashboard';
import { ErrorBoundary } from './components/ErrorBoundary';
import { SearchDialog } from './components/SearchDialog';
import { QuestionBank } from './components/QuestionBank';
import { ProgressProvider, useProgressContext } from './contexts/ProgressContext';
import { moduleRegistry, loadModule, getAllModuleMetadata } from './modules/registry';
import { drillCrossReferences } from './modules/drillCrossReferences';
import inventoryData from './docs/invented-questions-inventory.json';
import type { ModuleData } from './types';

const allMeta = getAllModuleMetadata();

const modulesFromMeta = allMeta.map((m) => ({
  id: m.id,
  title: m.title,
  category: m.category,
  description: m.description,
  unit: m.unit,
  lessons: [] as ModuleData['lessons'],
  lessonCount: m.lessonCount,
}));

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-full min-h-[300px]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
        <span className="text-slate-500 text-sm font-medium">Loading lesson...</span>
      </div>
    </div>
  );
}

function ModulePage() {
  const { moduleId, lessonId } = useParams<{ moduleId: string; lessonId?: string }>();
  const navigate = useNavigate();
  const { updateLastPosition, markLessonComplete, isLessonComplete } = useProgressContext();

  const [moduleData, setModuleData] = useState<ModuleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const numericModuleId = Number(moduleId);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    loadModule(numericModuleId)
      .then((data) => {
        if (!cancelled) {
          setModuleData(data);
          setLoading(false);
        }
      })
      .catch((err: Error) => {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [numericModuleId]);

  const activeLesson = useMemo(() => {
    if (!moduleData) return undefined;
    if (lessonId) return moduleData.lessons.find((l) => l.id === lessonId) ?? moduleData.lessons[0];
    return moduleData.lessons[0];
  }, [moduleData, lessonId]);

  useEffect(() => {
    if (moduleData && activeLesson) {
      if (!lessonId || lessonId !== activeLesson.id) {
        navigate(`/module/${numericModuleId}/lesson/${activeLesson.id}`, { replace: true });
      }
      updateLastPosition(numericModuleId, activeLesson.id);
    }
  }, [moduleData, activeLesson, lessonId, numericModuleId, navigate, updateLastPosition]);

  const currentIndex = moduleData && activeLesson ? moduleData.lessons.findIndex((l) => l.id === activeLesson.id) : -1;
  const previousLesson = currentIndex > 0 ? moduleData?.lessons[currentIndex - 1] : undefined;
  const nextLesson = moduleData && currentIndex < moduleData.lessons.length - 1 ? moduleData.lessons[currentIndex + 1] : undefined;

  const handleSelectLesson = useCallback(
    (id: string) => navigate(`/module/${numericModuleId}/lesson/${id}`),
    [navigate, numericModuleId],
  );

  const handleGoHome = useCallback(() => navigate('/'), [navigate]);

  const handleMarkComplete = useCallback(() => {
    if (activeLesson) markLessonComplete(activeLesson.id);
  }, [activeLesson, markLessonComplete]);

  const questionStatus = useMemo(() => {
    if (!activeLesson) return null;
    const hasReal = Object.values(drillCrossReferences).some(ref => ref.lessonId === activeLesson.id);
    const hasInvented = (inventoryData as Array<{ module: number; file: string }>).some(item => {
      const lessonNum = activeLesson.id.split('-')[1];
      return String(item.module) === String(numericModuleId) && item.file.includes(`Lesson${lessonNum}`);
    });
    if (hasReal && hasInvented) return 'both' as const;
    if (hasReal) return 'real' as const;
    if (hasInvented) return 'illustrative' as const;
    return null;
  }, [activeLesson, numericModuleId]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="flex items-center justify-center h-full text-red-500 font-medium">{error}</div>;
  if (!moduleData || !activeLesson) return <div className="flex items-center justify-center h-full text-slate-400">Module not found</div>;

  return (
    <Layout
      modules={modulesFromMeta}
      activeModuleId={numericModuleId}
      activeLessonId={activeLesson.id}
      onSelectModule={(id) => navigate(`/module/${id}`)}
      onSelectLesson={handleSelectLesson}
      onGoHome={handleGoHome}
      activeModuleData={moduleData}
      isLessonComplete={isLessonComplete}
      lessonNav={{
        onPrevious: previousLesson ? () => navigate(`/module/${numericModuleId}/lesson/${previousLesson.id}`) : undefined,
        onNext: nextLesson
          ? () => {
              handleMarkComplete();
              navigate(`/module/${numericModuleId}/lesson/${nextLesson.id}`);
            }
          : undefined,
        previousLabel: previousLesson?.title,
        nextLabel: nextLesson?.title,
        hasNext: !!nextLesson,
      }}
    >
      <ErrorBoundary fallbackTitle="Error loading lesson" key={activeLesson.id}>
        <Suspense fallback={<LoadingSpinner />}>
          <LessonViewer key={activeLesson.id} title={activeLesson.title} content={activeLesson.content} questionStatus={questionStatus} />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}

function DashboardPage({ loadedModules }: { loadedModules: ModuleData[] }) {
  const navigate = useNavigate();
  const { getModuleProgress } = useProgressContext();

  const handleModuleSelect = useCallback((id: number) => navigate(`/module/${id}`), [navigate]);
  const handleGoHome = useCallback(() => navigate('/'), [navigate]);

  return (
    <Layout
      modules={modulesFromMeta}
      activeModuleId={null}
      activeLessonId={null}
      onSelectModule={handleModuleSelect}
      onSelectLesson={() => {}}
      onGoHome={handleGoHome}
    >
      <Dashboard modules={modulesFromMeta} fullModules={loadedModules} onSelectModule={handleModuleSelect} getModuleProgress={getModuleProgress} />
    </Layout>
  );
}

function AppRoutes() {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);

  const [loadedModules, setLoadedModules] = useState<ModuleData[]>([]);

  useEffect(() => {
    Promise.all(moduleRegistry.map((e) => e.load().then((m) => ('default' in m ? m.default : (m as Record<string, ModuleData>)[Object.keys(m).find((k) => k.startsWith('Module'))!])))).then(
      setLoadedModules,
    );
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleSearchNavigate = useCallback(
    (moduleId: number, lessonId: string) => {
      navigate(`/module/${moduleId}/lesson/${lessonId}`);
    },
    [navigate],
  );

  return (
    <>
      <SearchDialog
        modules={loadedModules}
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleSearchNavigate}
      />
      <Routes>
        <Route path="/" element={<DashboardPage loadedModules={loadedModules} />} />
        <Route path="/question-bank" element={<QuestionBank />} />
        <Route path="/module/:moduleId" element={<ModulePage />} />
        <Route path="/module/:moduleId/lesson/:lessonId" element={<ModulePage />} />
      </Routes>
    </>
  );
}

const App: React.FC = () => {
  return (
    <ErrorBoundary fallbackTitle="Application error">
      <BrowserRouter>
        <ProgressProvider>
          <AppRoutes />
        </ProgressProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
