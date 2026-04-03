/**
 * ModuleOverviewD — "Numbered Steps" variant
 *
 * A vertical step-by-step layout inspired by course progression.
 * Each lesson is presented as a numbered step with a large circle on the left,
 * a connecting vertical line between steps, and content cards on the right.
 * Clean serif headings, strong borders, and generous spacing.
 */

import React from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Layers } from 'lucide-react';

interface ModuleOverviewProps {
  moduleData: {
    title: string;
    description: string;
    category: string;
    unit?: string;
    lessons: Array<{ id: string; title: string }>;
  };
  moduleId: number;
  onSelectLesson: (id: string) => void;
  onBack: () => void;
  lessons: Array<{ id: string; title: string }>;
}

export const ModuleOverviewD: React.FC<ModuleOverviewProps> = ({
  moduleData,
  moduleId,
  onSelectLesson,
  onBack,
  lessons,
}) => {
  const totalLessons = lessons.length;
  const categoryLabel = moduleData.category === 'RC' ? 'Reading Comprehension' : 'Logical Reasoning';

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 sm:px-6">
      {/* ── Back Button ──────────────────────────────────────────── */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition-colors mb-8 group"
      >
        <ArrowLeft
          size={15}
          className="transition-transform group-hover:-translate-x-0.5"
        />
        <span>Back to modules</span>
      </button>

      {/* ── Header ───────────────────────────────────────────────── */}
      <div className="mb-12">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-slate-50 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            <Layers size={11} />
            {categoryLabel}
          </span>
          {moduleData.unit && (
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
              {moduleData.unit}
            </span>
          )}
        </div>

        <h1
          className="text-3xl font-bold text-slate-900 mb-3 leading-tight"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Module {moduleId}: {moduleData.title}
        </h1>

        {moduleData.description && (
          <p className="text-slate-500 text-[15px] leading-relaxed max-w-2xl">
            {moduleData.description}
          </p>
        )}

        {/* Stats row */}
        <div className="mt-5 flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <BookOpen size={14} />
            <span>
              <span className="font-semibold text-slate-700">{totalLessons}</span>{' '}
              {totalLessons === 1 ? 'lesson' : 'lessons'}
            </span>
          </div>
          <div className="h-3.5 w-px bg-slate-200" />
          <div className="text-sm text-slate-400">
            Module{' '}
            <span className="font-semibold text-slate-700">{moduleId}</span>
          </div>
        </div>
      </div>

      {/* ── Steps ────────────────────────────────────────────────── */}
      <div className="relative">
        {lessons.map((lesson, i) => {
          const isLast = i === lessons.length - 1;
          const stepNumber = i + 1;

          return (
            <div key={lesson.id} className="relative flex gap-5 mb-0">
              {/* ── Left column: number circle + connecting line ── */}
              <div className="flex flex-col items-center flex-shrink-0 z-10">
                {/* Number circle */}
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white text-lg font-bold shadow-sm flex-shrink-0"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  {stepNumber}
                </div>
                {/* Connecting line */}
                {!isLast && (
                  <div className="w-[2px] flex-1 bg-slate-200 min-h-[24px]" />
                )}
              </div>

              {/* ── Right column: content card ─────────────────── */}
              <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-6'}`}>
                <div className="rounded-[20px] border-[1.5px] border-slate-300 bg-white p-5 shadow-sm hover:shadow-md hover:border-slate-400 transition-all duration-200 group -ml-2">
                  <h3
                    className="text-[17px] font-semibold text-slate-900 mb-1.5 leading-snug"
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  >
                    {lesson.title}
                  </h3>

                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                    Step {stepNumber} of {totalLessons} &mdash; Tap below to
                    begin this lesson.
                  </p>

                  <button
                    onClick={() => onSelectLesson(lesson.id)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors group/link"
                  >
                    <span>Start Lesson</span>
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover/link:translate-x-0.5"
                    />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
