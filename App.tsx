import React, { useState, useEffect, useCallback, Suspense, useMemo } from 'react';
import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { WebsiteShell } from './components/WebsiteShell';
import { LessonViewer } from './components/LessonViewer';
import { ModuleOverview } from './components/ModuleOverview';
import { Dashboard } from './components/Dashboard';
import { ErrorBoundary } from './components/ErrorBoundary';
import { SearchDialog } from './components/SearchDialog';
import { QuestionBank } from './components/QuestionBank';
import { Analytics } from './components/Analytics';
import { LessonFormatLab } from './components/LessonFormatLab';

import { ProgressProvider, useProgressContext } from './contexts/ProgressContext';
import { ViewSettingsProvider, useViewSettings } from './contexts/ViewSettingsContext';
import { moduleRegistry, loadModule, getAllModuleMetadata } from './modules/registry';
import inventoryData from './docs/operations/audits/invented-questions-inventory.json';
import type { ModuleData } from './types';
import {
  buildDrillCrossReferences,
  buildLessonLinkageByLessonId,
  normalizeLessonsWithLinkage,
} from './utils/lessonQuestionLinkage';
import {
  applyCanonicalNamesToModule,
  getCanonicalModuleMetadata,
  resolveIllustrativeInventoryItem,
} from './utils/courseCatalog';

const allMeta = getAllModuleMetadata().map(getCanonicalModuleMetadata);

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

function ModulePage({ loadedModules }: { loadedModules: ModuleData[] }) {
  const { moduleId, lessonId } = useParams<{ moduleId: string; lessonId?: string }>();
  const navigate = useNavigate();
  const { updateLastPosition, markLessonComplete, isLessonComplete } = useProgressContext();
  const { websiteViewerMode } = useViewSettings();

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

  const normalizedModuleData = useMemo(() => {
    if (!moduleData) return null;
    const canonicalModule = applyCanonicalNamesToModule(moduleData, numericModuleId);
    const { lessons } = normalizeLessonsWithLinkage(numericModuleId, canonicalModule.lessons);
    return { ...canonicalModule, lessons };
  }, [moduleData, numericModuleId]);

  const lessonLinkageByLessonId = useMemo(() => {
    if (!moduleData) return {};
    const canonicalModule = applyCanonicalNamesToModule(moduleData, numericModuleId);
    return buildLessonLinkageByLessonId(numericModuleId, canonicalModule.lessons);
  }, [moduleData, numericModuleId]);

  // When a lessonId is present, resolve the active lesson; otherwise show module overview
  const isOverviewMode = !lessonId;

  const activeLesson = useMemo(() => {
    if (!normalizedModuleData || isOverviewMode) return undefined;
    return normalizedModuleData.lessons.find((l) => l.id === lessonId) ?? normalizedModuleData.lessons[0];
  }, [normalizedModuleData, lessonId, isOverviewMode]);

  useEffect(() => {
    if (normalizedModuleData && activeLesson && lessonId) {
      if (lessonId !== activeLesson.id) {
        navigate(`/module/${numericModuleId}/lesson/${activeLesson.id}`, { replace: true });
      }
      updateLastPosition(numericModuleId, activeLesson.id);
    }
  }, [normalizedModuleData, activeLesson, lessonId, numericModuleId, navigate, updateLastPosition]);

  const currentIndex =
    normalizedModuleData && activeLesson ? normalizedModuleData.lessons.findIndex((l) => l.id === activeLesson.id) : -1;
  const previousLesson = currentIndex > 0 ? normalizedModuleData?.lessons[currentIndex - 1] : undefined;
  const nextLesson =
    normalizedModuleData && currentIndex < normalizedModuleData.lessons.length - 1
      ? normalizedModuleData.lessons[currentIndex + 1]
      : undefined;

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
    const hasReal = (lessonLinkageByLessonId[activeLesson.id]?.ptIds.length ?? 0) > 0;
    const hasInvented = (inventoryData as Array<{ module: number; file: string }>).some((item) => {
      const resolvedItem = resolveIllustrativeInventoryItem({
        module: item.module,
        file: item.file,
        moduleName: '',
        lessonTitle: '',
      });
      return resolvedItem.routeModuleId === numericModuleId && resolvedItem.lessonId === activeLesson.id;
    });
    if (hasReal && hasInvented) return 'both' as const;
    if (hasReal) return 'real' as const;
    if (hasInvented) return 'illustrative' as const;
    return null;
  }, [activeLesson, lessonLinkageByLessonId, numericModuleId]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="flex items-center justify-center h-full text-red-500 font-medium">{error}</div>;
  if (!normalizedModuleData)
    return <div className="flex items-center justify-center h-full text-slate-400">Module not found</div>;

  // ── Website Viewer mode: use WebsiteShell ──
  if (websiteViewerMode) {
    const shellContent = isOverviewMode ? null : activeLesson ? (
      <ErrorBoundary fallbackTitle="Error loading lesson" key={activeLesson.id}>
        <Suspense fallback={<LoadingSpinner />}>
          <LessonViewer
            key={activeLesson.id}
            title={activeLesson.title}
            content={activeLesson.content}
            questionStatus={questionStatus}
            linkageMeta={lessonLinkageByLessonId[activeLesson.id]}
            lessonId={activeLesson.id}
            alternates={activeLesson.alternates}
          />
        </Suspense>
      </ErrorBoundary>
    ) : <div className="text-slate-400 text-center py-12">Lesson not found</div>;

    return (
      <WebsiteShell
        modules={modulesFromMeta}
        activeModuleId={numericModuleId}
        activeLessonId={activeLesson?.id ?? null}
        onSelectModule={(id) => navigate(`/module/${id}`)}
        onSelectLesson={handleSelectLesson}
        onGoHome={handleGoHome}
        activeModuleData={normalizedModuleData}
        isLessonComplete={isLessonComplete}
      >
        {shellContent}
      </WebsiteShell>
    );
  }

  // ── Normal mode: use Layout ──
  if (isOverviewMode) {
    return (
      <Layout
        modules={modulesFromMeta}
        exportModules={loadedModules}
        activeModuleId={numericModuleId}
        activeLessonId={null}
        onSelectModule={(id) => navigate(`/module/${id}`)}
        onSelectLesson={handleSelectLesson}
        onGoHome={handleGoHome}
        activeModuleData={normalizedModuleData}
        lessonLinkageMeta={lessonLinkageByLessonId}
        isLessonComplete={isLessonComplete}
      >
        <ModuleOverview moduleData={normalizedModuleData} />
      </Layout>
    );
  }

  if (!activeLesson)
    return <div className="flex items-center justify-center h-full text-slate-400">Lesson not found</div>;

  return (
    <Layout
      modules={modulesFromMeta}
      exportModules={loadedModules}
      activeModuleId={numericModuleId}
      activeLessonId={activeLesson.id}
      onSelectModule={(id) => navigate(`/module/${id}`)}
      onSelectLesson={handleSelectLesson}
      onGoHome={handleGoHome}
      activeModuleData={normalizedModuleData}
      lessonLinkageMeta={lessonLinkageByLessonId}
      isLessonComplete={isLessonComplete}
      lessonNav={{
        onPrevious: previousLesson
          ? () => navigate(`/module/${numericModuleId}/lesson/${previousLesson.id}`)
          : undefined,
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
          <LessonViewer
            key={activeLesson.id}
            title={activeLesson.title}
            content={activeLesson.content}
            questionStatus={questionStatus}
            linkageMeta={lessonLinkageByLessonId[activeLesson.id]}
            lessonId={activeLesson.id}
            alternates={activeLesson.alternates}
          />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}

function DashboardPage({ loadedModules }: { loadedModules: ModuleData[] }) {
  const navigate = useNavigate();
  const { getModuleProgress } = useProgressContext();
  const { websiteViewerMode } = useViewSettings();

  const handleModuleSelect = useCallback((id: number) => navigate(`/module/${id}`), [navigate]);
  const handleGoHome = useCallback(() => navigate('/'), [navigate]);

  if (websiteViewerMode) {
    return (
      <WebsiteShell
        modules={modulesFromMeta}
        activeModuleId={null}
        activeLessonId={null}
        onSelectModule={handleModuleSelect}
        onSelectLesson={() => {}}
        onGoHome={handleGoHome}
      >
        {null}
      </WebsiteShell>
    );
  }

  return (
    <Layout
      modules={modulesFromMeta}
      exportModules={loadedModules}
      activeModuleId={null}
      activeLessonId={null}
      onSelectModule={handleModuleSelect}
      onSelectLesson={() => {}}
      onGoHome={handleGoHome}
    >
      <Dashboard
        modules={modulesFromMeta}
        fullModules={loadedModules}
        onSelectModule={handleModuleSelect}
        getModuleProgress={getModuleProgress}
      />
    </Layout>
  );
}

function AppRoutes() {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);

  const [loadedModules, setLoadedModules] = useState<ModuleData[]>([]);

  useEffect(() => {
    Promise.all(
      moduleRegistry.map(async (entry) => {
        const loaded = await entry.load();
        const moduleData =
          'default' in loaded
            ? loaded.default
            : (loaded as Record<string, ModuleData>)[Object.keys(loaded).find((k) => k.startsWith('Module'))!];
        const canonicalModule = applyCanonicalNamesToModule(moduleData, entry.meta.id);
        const { lessons } = normalizeLessonsWithLinkage(entry.meta.id, canonicalModule.lessons);
        return {
          ...canonicalModule,
          id: entry.meta.id,
          lessons,
        };
      }),
    ).then(setLoadedModules);
  }, []);

  const drillCrossReferences = useMemo(() => buildDrillCrossReferences(loadedModules), [loadedModules]);

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
        <Route path="/question-bank" element={<QuestionBank drillCrossReferences={drillCrossReferences} />} />
        <Route path="/analytics" element={<Analytics loadedModules={loadedModules} />} />
        <Route path="/format-lab" element={<LessonFormatLab />} />

        <Route path="/module/:moduleId" element={<ModulePage loadedModules={loadedModules} />} />
        <Route path="/module/:moduleId/lesson/:lessonId" element={<ModulePage loadedModules={loadedModules} />} />
      </Routes>
    </>
  );
}

const App: React.FC = () => {
  return (
    <ErrorBoundary fallbackTitle="Application error">
      <BrowserRouter>
        <ProgressProvider>
          <ViewSettingsProvider>
            <AppRoutes />
          </ViewSettingsProvider>
        </ProgressProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
