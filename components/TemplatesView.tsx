import React, { useState, useCallback } from 'react';
import { LessonViewer } from './LessonViewer';
import RenderedIntroductionTemplate from './RenderedIntroductionTemplate';
import {
  templatesStepByStepContent,
  templatesCommonRolesContent,
  templatesLRLessonContent,
  templatesRCPassageAnalysisContent,
  templatesRCQuestionContent,
  templatesRCQuestionTypeIntroContent,
  templatesReferenceGuidesContent,
} from '../content/templatesContent';
import type { ContentBlock } from '../types';

type TemplatesTabId =
  | 'introduction'
  | 'stepByStep'
  | 'commonRoles'
  | 'lrLesson'
  | 'rcPassageAnalysis'
  | 'rcQuestion'
  | 'rcQuestionTypeIntro'
  | 'referenceGuides';

const TABS: { id: TemplatesTabId; label: string }[] = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'stepByStep', label: 'Step-by-step' },
  { id: 'commonRoles', label: 'Common roles' },
  { id: 'lrLesson', label: 'LR Lesson' },
  { id: 'rcPassageAnalysis', label: 'RC Passage Analysis' },
  { id: 'rcQuestion', label: 'RC Question' },
  { id: 'rcQuestionTypeIntro', label: 'RC Question Type Intro' },
  { id: 'referenceGuides', label: 'Reference guides' },
];

const TAB_CONTENT: Record<TemplatesTabId, { title: string; content: ContentBlock[] }> = {
  introduction: { title: 'Introduction Template', content: [] },
  stepByStep: { title: 'Step-by-Step Template', content: templatesStepByStepContent },
  commonRoles: { title: 'Common Roles', content: templatesCommonRolesContent },
  lrLesson: { title: 'LR Lesson Template', content: templatesLRLessonContent },
  rcPassageAnalysis: { title: 'RC Passage Analysis Template', content: templatesRCPassageAnalysisContent },
  rcQuestion: { title: 'RC Question Template', content: templatesRCQuestionContent },
  rcQuestionTypeIntro: { title: 'RC Question Type Intro Template', content: templatesRCQuestionTypeIntroContent },
  referenceGuides: { title: 'Reference Guide Template', content: templatesReferenceGuidesContent },
};

export const TemplatesView: React.FC = () => {
  const [templatesTab, setTemplatesTab] = useState<TemplatesTabId>('introduction');

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, currentIndex: number) => {
      let next: number | null = null;
      if (e.key === 'ArrowLeft') next = Math.max(0, currentIndex - 1);
      if (e.key === 'ArrowRight') next = Math.min(TABS.length - 1, currentIndex + 1);
      if (e.key === 'Home') next = 0;
      if (e.key === 'End') next = TABS.length - 1;
      if (next !== null) {
        e.preventDefault();
        const nextId = TABS[next].id;
        setTemplatesTab(nextId);
        (document.getElementById(`tab-${nextId}`) as HTMLButtonElement)?.focus();
      }
    },
    []
  );

  const { title, content } = TAB_CONTENT[templatesTab];

  return (
    <div className="max-w-4xl mx-auto p-8 pb-20">
      <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-6">Templates</h1>

      <div
        className="flex overflow-x-auto overflow-y-hidden scrollbar-hide -mx-1 px-1 py-0.5"
        role="tablist"
        aria-label="Template sections"
      >
        <div className="flex gap-0.5 p-1 rounded-lg bg-slate-100 border border-slate-200/80 min-w-max">
          {TABS.map((tab, index) => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              role="tab"
              aria-selected={templatesTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              tabIndex={templatesTab === tab.id ? 0 : -1}
              className={`
                px-4 py-1.5 text-xs font-bold rounded-md whitespace-nowrap
                transition-all duration-200 ease-out
                focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
                ${templatesTab === tab.id
                  ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-indigo-200'
                  : 'text-slate-600 hover:text-slate-800 hover:bg-slate-200/60'
                }
              `}
              onClick={() => setTemplatesTab(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div
        id={`panel-${templatesTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${templatesTab}`}
        tabIndex={0}
        className="mt-6"
      >
        {templatesTab === 'introduction' ? (
          <RenderedIntroductionTemplate />
        ) : (
          <LessonViewer title={title} content={content} variant="default" showExportControls={false} />
        )}
      </div>
    </div>
  );
};
