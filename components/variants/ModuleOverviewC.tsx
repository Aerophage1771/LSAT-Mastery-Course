import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Layers } from 'lucide-react';

/* ─── Sidebar + Preview · Module Overview Variant C ─────────────────────
 *
 * Two-panel layout: narrow scrollable lesson list on the left (300px),
 * large preview/detail panel on the right. Selecting a lesson in the
 * sidebar updates the preview panel instantly. Premium serif headings,
 * strong 1.5px borders, and rounded-[28px] container corners.
 * ──────────────────────────────────────────────────────────────────── */

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

export const ModuleOverviewC: React.FC<ModuleOverviewProps> = ({
  moduleData,
  moduleId,
  onSelectLesson,
  onBack,
  lessons,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedLesson = lessons[selectedIndex] ?? lessons[0];

  return (
    <div>
      {/* ── Back Button ──────────────────────────────────────────── */}
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm text-indigo-600 hover:text-indigo-700 font-medium mb-6 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to {moduleData.category === 'RC' ? 'Reading Comprehension' : 'Logical Reasoning'}
      </button>

      {/* ── Two-Panel Container ──────────────────────────────────── */}
      <div className="flex min-h-[520px]">
        {/* ── Left Panel: Lesson List ────────────────────────────── */}
        <div className="w-[300px] flex-shrink-0 rounded-l-[28px] border-[1.5px] border-slate-300 bg-white overflow-hidden flex flex-col">
          {/* Panel Header */}
          <div className="px-5 pt-5 pb-3 border-b border-slate-200">
            <div className="text-[10px] font-bold uppercase tracking-[2.4px] text-slate-400 mb-1">
              Module {moduleId}
            </div>
            <h2
              className="text-[15px] font-semibold text-slate-800 leading-snug"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              {moduleData.title}
            </h2>
            <div className="mt-2 text-[11px] text-slate-400 font-medium">
              {lessons.length} lesson{lessons.length !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Scrollable Lesson Rows */}
          <div className="flex-1 overflow-y-auto">
            {lessons.map((lesson, idx) => {
              const isActive = idx === selectedIndex;
              return (
                <button
                  key={lesson.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`w-full text-left flex items-center gap-3 px-5 py-3.5 border-l-[3px] transition-all duration-150 ${
                    isActive
                      ? 'border-l-blue-500 bg-blue-50/70'
                      : 'border-l-transparent hover:bg-slate-50'
                  }`}
                >
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider flex-shrink-0 w-10 ${
                      isActive ? 'text-blue-600' : 'text-slate-400'
                    }`}
                  >
                    Pt {idx + 1}
                  </span>
                  <span
                    className={`text-[13px] font-medium leading-snug line-clamp-2 ${
                      isActive ? 'text-slate-900' : 'text-slate-600'
                    }`}
                  >
                    {lesson.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Right Panel: Preview ───────────────────────────────── */}
        <div className="flex-1 rounded-r-[28px] border-[1.5px] border-l-0 border-slate-300 bg-slate-50 overflow-hidden flex flex-col">
          {/* Module Info Header */}
          <div className="px-8 pt-8 pb-6 border-b border-slate-200 bg-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-[10px] font-bold uppercase tracking-[2.4px] text-slate-400">
                Module {moduleId}
              </div>
              {moduleData.unit && (
                <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  <Layers size={10} className="text-slate-400" />
                  {moduleData.unit}
                </span>
              )}
            </div>
            <h1
              className="text-[32px] font-semibold leading-tight tracking-[-0.03em] text-slate-950 mb-2"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              {moduleData.title}
            </h1>
            {moduleData.description && (
              <p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                {moduleData.description}
              </p>
            )}
          </div>

          {/* Selected Lesson Detail */}
          {selectedLesson && (
            <div className="flex-1 flex flex-col px-8 py-8">
              {/* Lesson Number Eyebrow */}
              <div className="text-[10px] font-bold uppercase tracking-[2.4px] text-indigo-500 mb-2">
                Part {selectedIndex + 1} of {lessons.length}
              </div>

              {/* Lesson Title */}
              <h2
                className="text-[24px] font-semibold leading-snug tracking-[-0.02em] text-slate-900 mb-6"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                {selectedLesson.title}
              </h2>

              {/* Preview Metadata Placeholder */}
              <div className="rounded-2xl border-[1.5px] border-slate-200 bg-white px-6 py-5 mb-8">
                <div className="text-[10px] font-bold uppercase tracking-[2.4px] text-slate-400 mb-3">
                  Lesson Preview
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                      Module
                    </div>
                    <div className="text-sm font-medium text-slate-700">
                      {moduleId} &mdash; {moduleData.title}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                      Section
                    </div>
                    <div className="text-sm font-medium text-slate-700">
                      {moduleData.category === 'RC' ? 'Reading Comprehension' : 'Logical Reasoning'}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                      Position
                    </div>
                    <div className="text-sm font-medium text-slate-700">
                      Lesson {selectedIndex + 1} of {lessons.length}
                    </div>
                  </div>
                  {moduleData.unit && (
                    <div>
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                        Unit
                      </div>
                      <div className="text-sm font-medium text-slate-700">{moduleData.unit}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-auto">
                <button
                  onClick={() => onSelectLesson(selectedLesson.id)}
                  className="inline-flex items-center gap-2.5 rounded-xl bg-indigo-600 px-6 py-3 text-[15px] font-semibold text-white shadow-sm hover:bg-indigo-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
                >
                  <BookOpen size={18} />
                  Open Lesson
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
