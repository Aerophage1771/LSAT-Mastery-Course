/**
 * ModuleOverviewA -- "Editorial Magazine" variant
 *
 * Elegant typographic layout with serif headings, generous whitespace,
 * and a clean numbered lesson list. Stats are inline text, not badges.
 * Minimal decoration -- typography and spacing carry the design.
 *
 * Uses only Tailwind classes + inline serif font. No external CSS.
 */

import React from 'react';
import { ChevronLeft, ArrowRight } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const serifFont: React.CSSProperties = {
  fontFamily: "'Merriweather', serif",
};

const categoryLabel = (cat: string) =>
  cat === 'RC' ? 'Reading Comprehension' : 'Logical Reasoning';

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export const ModuleOverviewA: React.FC<ModuleOverviewProps> = ({
  moduleData,
  moduleId,
  onSelectLesson,
  onBack,
  lessons,
}) => {
  return (
    <div className="rounded-[28px] border-[1.5px] border-slate-300 bg-white overflow-hidden">

      {/* ── Back button ──────────────────────────────────────────── */}
      <div className="px-8 pt-8 sm:px-10 sm:pt-10">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-500 hover:text-slate-800 transition-colors duration-200"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to {categoryLabel(moduleData.category)}
        </button>
      </div>

      {/* ── Header ───────────────────────────────────────────────── */}
      <header className="px-8 pt-8 pb-10 sm:px-10 sm:pt-10 sm:pb-12 border-b border-slate-200">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8 bg-slate-300" />
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-slate-400">
            Module {moduleId}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-[2rem] sm:text-[2.5rem] leading-[1.1] tracking-[-0.03em] text-slate-900 mb-4"
          style={serifFont}
        >
          {moduleData.title}
        </h1>

        {/* Description */}
        {moduleData.description && (
          <p className="text-[15px] leading-[1.7] text-slate-500 max-w-2xl mb-6">
            {moduleData.description}
          </p>
        )}

        {/* Stats line -- clean inline typography */}
        <div className="flex flex-wrap items-center gap-x-2 text-[14px] text-slate-400">
          <span className="font-medium text-slate-600">
            {lessons.length} {lessons.length === 1 ? 'Lesson' : 'Lessons'}
          </span>
          {moduleData.unit && (
            <>
              <span className="select-none">&middot;</span>
              <span>
                Unit: <span className="text-slate-600 font-medium">{moduleData.unit}</span>
              </span>
            </>
          )}
          <span className="select-none">&middot;</span>
          <span>0 Completed</span>
        </div>
      </header>

      {/* ── Lesson List ──────────────────────────────────────────── */}
      <div className="px-8 py-6 sm:px-10 sm:py-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-6 bg-slate-300" />
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">
            Lessons
          </span>
        </div>

        <ul>
          {lessons.map((lesson, idx) => (
            <li
              key={lesson.id}
              className={`group flex items-center justify-between gap-4 py-5 transition-colors duration-150 hover:bg-slate-50 -mx-4 px-4 rounded-lg ${
                idx < lessons.length - 1 ? 'border-b border-slate-100' : ''
              }`}
            >
              {/* Left: Part label + title */}
              <div className="flex items-center gap-5 min-w-0">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 shrink-0 w-14">
                  Part {idx + 1}
                </span>
                <span
                  className="text-[15px] sm:text-base font-semibold text-slate-800 truncate"
                  style={serifFont}
                >
                  {lesson.title}
                </span>
              </div>

              {/* Right: open link */}
              <button
                onClick={() => onSelectLesson(lesson.id)}
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate-500 hover:text-slate-900 transition-colors duration-200 shrink-0 group-hover:text-slate-700"
              >
                <span className="hidden sm:inline">Open Lesson</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Footer accent ────────────────────────────────────────── */}
      <div className="px-8 pb-8 sm:px-10 sm:pb-10">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        </div>
      </div>
    </div>
  );
};
