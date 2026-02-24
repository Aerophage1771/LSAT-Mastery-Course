import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { LessonViewer } from './components/LessonViewer';
import FormatShowcaseLesson from './components/FormatShowcaseLesson';
import Module1Lesson1Introduction from './components/customLessons/Module1Lesson1Introduction';
import Module1Lesson4PremisesVsConclusions from './components/customLessons/Module1Lesson4PremisesVsConclusions';
import Module2Lesson1Introduction from './components/customLessons/Module2Lesson1Introduction';
import { Dashboard } from './components/Dashboard';
import { QuestionBankView } from './components/QuestionBankView';
import { TemplatesView } from './components/TemplatesView';
import { ModuleData } from './types';

// Import all modules
import { Module1 } from './modules/Module1';
import { Module2 } from './modules/Module2';
import { Module3 } from './modules/Module3';
import { Module4 } from './modules/Module4';
import { Module5 } from './modules/Module5';
import { Module6 } from './modules/Module6';
import { Module7 } from './modules/Module7';
import { Module8 } from './modules/Module8';
import { Module9 } from './modules/Module9';
import { Module10 } from './modules/Module10';
import { Module11 } from './modules/Module11';
import { Module12 } from './modules/Module12';
import { Module13 } from './modules/Module13';
import { Module14 } from './modules/Module14';
import { Module15 } from './modules/Module15';
import { Module16 } from './modules/Module16';
import { Module17 } from './modules/Module17';
import { Module18 } from './modules/Module18';
import { Module19 } from './modules/Module19';
import { Module20 } from './modules/Module20';
import { Module21 } from './modules/Module21';
import { Module22 } from './modules/Module22';
import { Module23 } from './modules/Module23';
import { Module24 } from './modules/Module24';
import { Module25 } from './modules/Module25';
import { Module26 } from './modules/Module26';
import { Module27 } from './modules/Module27';
import { Module28 } from './modules/Module28';
import { Module29 } from './modules/Module29';
import { Module30 } from './modules/Module30';
import { Module31 } from './modules/Module31';
import { Module32 } from './modules/Module32';
import { Module33 } from './modules/Module33';
import { Module34 } from './modules/Module34';
import { Module35 } from './modules/Module35';
import { Module36 } from './modules/Module36';
import { Module37 } from './modules/Module37';
import { Module38 } from './modules/Module38';
import { Module39 } from './modules/Module39';
import { Module40 } from './modules/Module40';
import { Module41 } from './modules/Module41';
import { Module42 } from './modules/Module42';
import { Module43 } from './modules/Module43';
import { Module44 } from './modules/Module44';
import { Module45 } from './modules/Module45';
import { Module46 } from './modules/Module46';
import { Module47 } from './modules/Module47';
import { Module49 } from './modules/Module49';
import { Module50 } from './modules/Module50';
import { Module51 } from './modules/Module51';
import { Module52 } from './modules/Module52';
import { Module53 } from './modules/Module53';
import { Module54 } from './modules/Module54';
import { Module55 } from './modules/Module55';
import { Module56 } from './modules/Module56';
import { Module57 } from './modules/Module57';
import { Module58 } from './modules/Module58';
import { Module59 } from './modules/Module59';
import { Module100 } from './modules/Module100';
import questionBankLR from './data/questionBankLR.json';
import type { QuestionBankLRData } from './components/QuestionBankView';

// Registry of modules
const modules: ModuleData[] = [
  // Logical Reasoning
  Module1, Module2, Module3, Module4, Module5,
  Module6, Module7, Module8, Module9, Module10,
  Module11, Module12, Module13, Module14, Module15,
  Module16, Module17, Module18, Module19, Module20,
  Module55, Module59,

  // Reading Comprehension
  Module21, Module22, Module23, Module24, Module25,
  Module26, Module27, Module28, Module29, Module30,
  Module31, Module32, Module33, Module34, Module35,
  Module36, Module37, Module38, Module39, Module40,
  Module41, Module42, Module43, Module44, Module45,
  Module46, Module47,

  // Advanced Passages
  Module50, Module51, Module52, Module54, Module56,
  Module57, Module58,

  // Format showcase (same content, 10 typography/spacing themes)
  Module100,

  // Question Bank (48, 49, 53) is a separate top-level view, not in curriculum
];

// LR from data/questionBankLR.json (TSV). RC from repo modules 49, 52, 53.
const questionBankSourceModules: ModuleData[] = [Module49, Module52, Module53];
const allModulesForViewing: ModuleData[] = [...modules, ...questionBankSourceModules];

export type ActiveView = 'dashboard' | 'questionBank' | 'templates' | 'lesson';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ActiveView>('dashboard');
  const [activeModuleId, setActiveModuleId] = useState<number | null>(null);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);

  const activeModule = activeModuleId !== null
    ? allModulesForViewing.find(m => m.id === activeModuleId)
    : undefined;

  const activeLesson = activeModule
    ? (activeModule.lessons.find(l => l.id === activeLessonId) || activeModule.lessons[0])
    : undefined;

  const currentLessonIndex = activeModule && activeLesson
    ? activeModule.lessons.findIndex(l => l.id === activeLesson.id)
    : -1;

  const previousLesson = currentLessonIndex > 0 ? activeModule?.lessons[currentLessonIndex - 1] : undefined;
  const nextLesson = (activeModule && currentLessonIndex < activeModule.lessons.length - 1) ? activeModule.lessons[currentLessonIndex + 1] : undefined;

  const handleModuleSelect = (id: number) => {
    setActiveView('lesson');
    setActiveModuleId(id);
    const mod = allModulesForViewing.find(m => m.id === id);
    if (mod && mod.lessons.length > 0) {
      setActiveLessonId(mod.lessons[0].id);
    }
  };

  const handleGoHome = () => {
    setActiveView('dashboard');
    setActiveModuleId(null);
    setActiveLessonId(null);
  };

  const handleGoToQuestionBank = () => {
    setActiveView('questionBank');
    setActiveModuleId(null);
    setActiveLessonId(null);
  };

  const handleGoToTemplates = () => {
    setActiveView('templates');
    setActiveModuleId(null);
    setActiveLessonId(null);
  };

  const handleGoToLesson = (moduleId: number, lessonId: string) => {
    setActiveView('lesson');
    setActiveModuleId(moduleId);
    setActiveLessonId(lessonId);
  };

  return (
    <Layout
      modules={modules}
      activeModuleId={activeModuleId}
      activeLessonId={activeLessonId}
      activeView={activeView}
      onSelectModule={handleModuleSelect}
      onSelectLesson={setActiveLessonId}
      onGoHome={handleGoHome}
      onGoToQuestionBank={handleGoToQuestionBank}
      onGoToTemplates={handleGoToTemplates}
      lessonNav={
        activeView === 'lesson' && activeModuleId !== null && activeLesson
          ? {
              onPrevious: previousLesson ? () => setActiveLessonId(previousLesson.id) : undefined,
              onNext: nextLesson ? () => setActiveLessonId(nextLesson.id) : undefined,
              previousLabel: previousLesson?.title,
              nextLabel: nextLesson?.title,
              hasNext: !!nextLesson,
            }
          : undefined
      }
    >
      {activeView === 'dashboard' && (
        <Dashboard modules={modules} onSelectModule={handleModuleSelect} />
      )}
      {activeView === 'templates' && <TemplatesView />}
      {activeView === 'questionBank' && (
        <QuestionBankView
          onGoToLesson={handleGoToLesson}
          curriculumModules={modules}
          questionBankModules={questionBankSourceModules}
          lrData={questionBankLR as QuestionBankLRData}
        />
      )}
      {activeView === 'lesson' && (
        activeModuleId !== null && activeLesson ? (
          activeModuleId === 100 && activeLesson.id === '100-1' ? (
            <FormatShowcaseLesson key="format-showcase" />
          ) : activeModuleId === 1 && activeLesson.id === '1-1' ? (
            <Module1Lesson1Introduction key="module1-lesson1-custom" />
          ) : activeModuleId === 1 && activeLesson.id === '1-4' ? (
            <Module1Lesson4PremisesVsConclusions key="module1-lesson4-custom" />
          ) : activeModuleId === 2 && activeLesson.id === '2-1' ? (
            <Module2Lesson1Introduction key="module2-lesson1-custom" />
          ) : (
            <LessonViewer
              key={activeLesson.id}
              title={activeLesson.title}
              content={activeLesson.content}
              subtitle={activeLesson.subtitle}
              modulePill={activeModule ? `Module ${activeModule.id} · ${activeModule.title}` : undefined}
              formatId={activeLesson.formatId}
            />
          )
        ) : (
          <div className="flex items-center justify-center h-full text-slate-400">
            No lesson selected
          </div>
        )
      )}
    </Layout>
  );
};

export default App;
