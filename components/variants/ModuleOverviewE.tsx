/**
 * ModuleOverviewE -- "Compact Table" variant
 *
 * Dense, information-rich table layout for lesson selection.
 * Compact info bar header with module number, title (serif), unit tag,
 * and lesson count in a single row. Lessons presented in a structured
 * table with status badges and action buttons.
 *
 * Uses only Tailwind classes. No external CSS dependencies.
 */

import React from 'react';
import { ArrowLeft } from 'lucide-react';

/* --- Props ---------------------------------------------------------- */

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

/* --- Component ------------------------------------------------------ */

export const ModuleOverviewE: React.FC<ModuleOverviewProps> = ({
  moduleData,
  moduleId,
  onSelectLesson,
  onBack,
  lessons,
}) => {
  const totalLessons = lessons.length;
  const completedCount = 0; // Static for variant preview
  const progressPct = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  return (
    <div className="min-h-screen bg-slate-100/60">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-8 sm:py-12">
        {/* ---- Back Button ------------------------------------------ */}
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-500
                     hover:text-slate-800 transition-colors mb-5"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-0.5"
          />
          All Modules
        </button>

        {/* ---- Compact Info Bar ------------------------------------- */}
        <div
          className="flex flex-wrap items-center gap-x-4 gap-y-2 px-5 py-3.5
                      rounded-2xl border-[1.5px] border-slate-300 bg-white mb-6
                      shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
        >
          {/* Module number */}
          <span className="text-xs font-bold tracking-wider text-slate-400 uppercase shrink-0">
            Module {moduleId}
          </span>

          {/* Divider */}
          <span className="hidden sm:block w-px h-4 bg-slate-200" aria-hidden="true" />

          {/* Title (serif) */}
          <h1
            className="text-lg sm:text-xl font-semibold text-slate-900 flex-1 min-w-0 truncate"
            style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}
          >
            {moduleData.title}
          </h1>

          {/* Unit tag */}
          {moduleData.unit && (
            <span
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px]
                          font-semibold tracking-wide uppercase shrink-0
                          bg-indigo-50 text-indigo-600 border border-indigo-100"
            >
              {moduleData.unit}
            </span>
          )}

          {/* Category badge */}
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px]
                        font-semibold tracking-wide uppercase shrink-0 border
                        ${
                          moduleData.category === 'RC'
                            ? 'bg-amber-50 text-amber-700 border-amber-100'
                            : 'bg-sky-50 text-sky-700 border-sky-100'
                        }`}
          >
            {moduleData.category}
          </span>

          {/* Lesson count */}
          <span className="text-xs font-medium text-slate-400 shrink-0 tabular-nums">
            {totalLessons} lesson{totalLessons !== 1 ? 's' : ''}
          </span>
        </div>

        {/* ---- Table Container --------------------------------------- */}
        <div
          className="rounded-[28px] border-[1.5px] border-slate-300 bg-white overflow-hidden
                      shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
        >
          {/* Table */}
          <table className="w-full text-left border-collapse">
            {/* Table Header */}
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="w-14 px-5 py-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">
                  #
                </th>
                <th className="px-5 py-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Lesson Title
                </th>
                <th className="hidden sm:table-cell w-32 px-5 py-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">
                  Status
                </th>
                <th className="w-24 px-5 py-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-right">
                  Action
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {lessons.map((lesson, i) => (
                <tr
                  key={lesson.id}
                  className={`border-b border-slate-100 last:border-b-0 transition-colors
                              hover:bg-slate-50/80
                              ${i % 2 === 1 ? 'bg-slate-50/40' : 'bg-white'}`}
                >
                  {/* Row Number */}
                  <td className="px-5 py-3.5 text-center">
                    <span className="text-xs font-semibold text-slate-300 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </td>

                  {/* Lesson Title (serif) */}
                  <td className="px-5 py-3.5">
                    <span
                      className="text-sm font-medium text-slate-800 leading-snug"
                      style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}
                    >
                      {lesson.title}
                    </span>
                  </td>

                  {/* Status Badge */}
                  <td className="hidden sm:table-cell px-5 py-3.5 text-center">
                    <span
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px]
                                  font-medium bg-slate-100 text-slate-500 border border-slate-200"
                    >
                      Not started
                    </span>
                  </td>

                  {/* Action Button */}
                  <td className="px-5 py-3.5 text-right">
                    <button
                      onClick={() => onSelectLesson(lesson.id)}
                      className="inline-flex items-center justify-center px-4 py-1.5
                                  rounded-full text-[12px] font-semibold
                                  bg-slate-900 text-white
                                  hover:bg-slate-700 active:bg-slate-800
                                  transition-colors shadow-sm"
                    >
                      Open
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ---- Summary Row ------------------------------------------- */}
        <div
          className="mt-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5
                      px-5 py-4 rounded-2xl border-[1.5px] border-slate-200 bg-white
                      shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
        >
          {/* Total lessons */}
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider shrink-0">
            {totalLessons} Total Lesson{totalLessons !== 1 ? 's' : ''}
          </span>

          {/* Progress bar */}
          <div className="flex-1 w-full sm:w-auto flex items-center gap-3">
            <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
              <div
                className="h-full rounded-full bg-slate-900 transition-all duration-500 ease-out"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <span className="text-xs font-bold text-slate-400 tabular-nums shrink-0">
              {progressPct}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
