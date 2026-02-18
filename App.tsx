import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { LessonViewer } from './components/LessonViewer';
import { Dashboard } from './components/Dashboard';
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
import { Module48 } from './modules/Module48';
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

  // Resources
  Module48, Module49, Module53
];

const App: React.FC = () => {
  // activeModuleId is null when on the Dashboard
  const [activeModuleId, setActiveModuleId] = useState<number | null>(null);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);

  const activeModule = activeModuleId !== null 
    ? modules.find(m => m.id === activeModuleId) 
    : undefined;
  
  // Find the specific lesson content if a module is active
  const activeLesson = activeModule 
    ? (activeModule.lessons.find(l => l.id === activeLessonId) || activeModule.lessons[0]) 
    : undefined;
    
  // Calculate Previous and Next Lessons
  const currentLessonIndex = activeModule && activeLesson
    ? activeModule.lessons.findIndex(l => l.id === activeLesson.id)
    : -1;
    
  const previousLesson = currentLessonIndex > 0 ? activeModule?.lessons[currentLessonIndex - 1] : undefined;
  const nextLesson = (activeModule && currentLessonIndex < activeModule.lessons.length - 1) ? activeModule.lessons[currentLessonIndex + 1] : undefined;

  const handleModuleSelect = (id: number) => {
    setActiveModuleId(id);
    const mod = modules.find(m => m.id === id);
    if (mod && mod.lessons.length > 0) {
      // Automatically select first lesson when entering a module
      setActiveLessonId(mod.lessons[0].id);
    }
  };

  const handleGoHome = () => {
    setActiveModuleId(null);
    setActiveLessonId(null);
  };

  return (
    <Layout
      modules={modules}
      activeModuleId={activeModuleId}
      activeLessonId={activeLessonId}
      onSelectModule={handleModuleSelect}
      onSelectLesson={setActiveLessonId}
      onGoHome={handleGoHome}
      lessonNav={
        activeModuleId !== null && activeLesson
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
      {activeModuleId === null ? (
        <Dashboard modules={modules} onSelectModule={handleModuleSelect} />
      ) : (
        activeLesson ? (
          <LessonViewer
            key={activeLesson.id}
            title={activeLesson.title}
            content={activeLesson.content}
          />
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