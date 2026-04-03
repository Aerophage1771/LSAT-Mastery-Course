/**
 * CourseOverviewD -- "Kanban Board" variant
 *
 * Horizontal-scrolling columns grouped by unit, each containing stacked
 * module cards. Task-management inspired layout with strong borders,
 * snap-scrolling, and a serif heading hierarchy.
 *
 * Uses only Tailwind classes + inline styles for the serif font stack.
 */

import React, { useRef, useCallback, useMemo } from 'react';
import { BookOpen, ChevronRight, Layers, GraduationCap } from 'lucide-react';
import { websiteLessonCatalog } from '../../data/websiteLessonCatalog';

/* ─── Props ──────────────────────────────────────────────────────── */

interface CourseOverviewProps {
  modules: Array<{
    id: number;
    category: string;
    title: string;
    description: string;
    unit?: string;
    lessons: Array<{ id: string; title: string }>;
  }>;
  category: 'LR' | 'RC';
  onSelectModule: (id: number) => void;
}

/* ─── Helpers ────────────────────────────────────────────────────── */

const SERIF = "'Merriweather', 'Georgia', serif";

/** Strip leading "MODULE N:" and "Section N:" prefixes for cleaner card titles. */
function cleanTitle(title: string): string {
  return title
    .replace(/^MODULE\s+\d+:\s*/i, '')
    .replace(/^Section\s+\d+:\s*/i, '');
}

/** Accent stripe colors that alternate per card index within a column. */
const ACCENT_COLORS = [
  'bg-slate-400',   // muted slate
  'bg-blue-300',    // muted blue
];

/* ─── Component ──────────────────────────────────────────────────── */

export const CourseOverviewD: React.FC<CourseOverviewProps> = ({
  modules,
  category,
  onSelectModule,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  /* -- Filter & group ------------------------------------------------ */

  const filtered = useMemo(() => {
    return modules.filter((m) => {
      if (m.category !== category) return false;
      if (category === 'LR' && m.id > 20) return false;
      return (websiteLessonCatalog[m.id] ?? []).length > 0;
    });
  }, [modules, category]);

  const unitGroups = useMemo(() => {
    const map = new Map<string, typeof filtered>();
    for (const mod of filtered) {
      const unit = mod.unit || 'Other';
      const existing = map.get(unit);
      if (existing) {
        existing.push(mod);
      } else {
        map.set(unit, [mod]);
      }
    }
    return Array.from(map.entries());
  }, [filtered]);

  /* -- Aggregate stats ---------------------------------------------- */

  const totalModules = filtered.length;
  const totalLessons = filtered.reduce(
    (sum, m) => sum + (websiteLessonCatalog[m.id] ?? []).length,
    0,
  );
  const totalUnits = unitGroups.length;

  /* -- Scroll nudge helpers ----------------------------------------- */

  const scrollBy = useCallback((direction: 1 | -1) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction * 340,
      behavior: 'smooth',
    });
  }, []);

  /* -- Render -------------------------------------------------------- */

  const categoryLabel = category === 'LR' ? 'Logical Reasoning' : 'Reading Comprehension';

  return (
    <div className="min-h-screen bg-white">
      {/* ── Header ─────────────────────────────────────────────────── */}
      <header className="border-b-[1.5px] border-slate-300 bg-white">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10 pt-10 pb-8 sm:pt-14 sm:pb-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-slate-300" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
              LSAT Mastery Course
            </span>
          </div>

          {/* Title row */}
          <h1
            className="text-[1.8rem] sm:text-[2.4rem] lg:text-[2.8rem] leading-[1.1] tracking-[-0.02em] text-slate-900"
            style={{ fontFamily: SERIF }}
          >
            {categoryLabel}
          </h1>

          <p className="mt-3 text-[15px] leading-[1.6] text-slate-500 max-w-[560px]">
            {category === 'LR'
              ? 'Master every question family through structured lessons and real LSAT practice.'
              : 'Build passage control and question-type fluency across all RC formats.'}
          </p>

          {/* Stat bar */}
          <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6">
            <StatPill
              icon={<Layers className="w-3.5 h-3.5" />}
              label="Units"
              value={totalUnits}
            />
            <StatPill
              icon={<BookOpen className="w-3.5 h-3.5" />}
              label="Modules"
              value={totalModules}
            />
            <StatPill
              icon={<GraduationCap className="w-3.5 h-3.5" />}
              label="Lessons"
              value={totalLessons}
            />
          </div>

          {/* Scroll arrows (visible on larger screens) */}
          <div className="hidden sm:flex items-center gap-2 mt-6">
            <button
              onClick={() => scrollBy(-1)}
              className="flex items-center justify-center w-9 h-9 rounded-full border-[1.5px] border-slate-300 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              className="flex items-center justify-center w-9 h-9 rounded-full border-[1.5px] border-slate-300 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <span className="text-[12px] text-slate-400 ml-1 select-none">
              Scroll to explore all units
            </span>
          </div>
        </div>
      </header>

      {/* ── Kanban columns ─────────────────────────────────────────── */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scroll-smooth snap-x snap-mandatory"
        style={{
          /* thin custom scrollbar */
          scrollbarWidth: 'thin',
          scrollbarColor: '#cbd5e1 transparent',
        }}
      >
        <div className="flex gap-5 px-5 sm:px-8 lg:px-10 py-8 min-w-max">
          {unitGroups.map(([unitName, mods]) => {
            const unitLessons = mods.reduce(
              (s, m) => s + (websiteLessonCatalog[m.id] ?? []).length,
              0,
            );

            return (
              <div
                key={unitName}
                className="snap-start flex-shrink-0 w-[300px] sm:w-[320px] rounded-[28px] border-[1.5px] border-slate-300 bg-slate-50 flex flex-col"
              >
                {/* Column header (pinned) */}
                <div className="sticky top-0 z-10 px-5 pt-5 pb-4 bg-slate-50 rounded-t-[28px] border-b border-slate-200">
                  <h2
                    className="text-[15px] sm:text-[16px] leading-[1.25] text-slate-800 font-bold"
                    style={{ fontFamily: SERIF }}
                  >
                    {unitName}
                  </h2>
                  <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-slate-400">
                    {mods.length} module{mods.length !== 1 ? 's' : ''} &middot;{' '}
                    {unitLessons} lesson{unitLessons !== 1 ? 's' : ''}
                  </p>
                </div>

                {/* Cards stack */}
                <div className="flex-1 px-3 py-3 flex flex-col gap-2.5 overflow-y-auto max-h-[calc(100vh-340px)]">
                  {mods.map((mod, cardIndex) => {
                    const lessonCount = (websiteLessonCatalog[mod.id] ?? []).length;
                    const accentColor = ACCENT_COLORS[cardIndex % ACCENT_COLORS.length];

                    return (
                      <div
                        key={mod.id}
                        className="group relative rounded-[18px] border-[1.5px] border-slate-200 bg-white overflow-hidden hover:border-slate-300 hover:shadow-sm transition-all duration-200"
                      >
                        {/* Left accent stripe */}
                        <div
                          className={`absolute left-0 top-0 bottom-0 w-[4px] ${accentColor} rounded-l-[18px]`}
                        />

                        <div className="pl-5 pr-4 py-3.5">
                          {/* Module number */}
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                            Module {mod.id}
                          </span>

                          {/* Title */}
                          <h3
                            className="mt-1 text-[14px] leading-[1.35] font-semibold text-slate-800"
                            style={{ fontFamily: SERIF }}
                          >
                            {cleanTitle(mod.title)}
                          </h3>

                          {/* Meta row */}
                          <div className="mt-2 flex items-center justify-between">
                            <span className="text-[11px] text-slate-400 font-medium">
                              {lessonCount} lesson{lessonCount !== 1 ? 's' : ''}
                            </span>

                            <button
                              onClick={() => onSelectModule(mod.id)}
                              className="flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold text-slate-600 bg-slate-100 border border-slate-200 hover:bg-slate-200 hover:text-slate-800 transition-colors duration-150"
                            >
                              Open
                              <ChevronRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ─── Sub-components ─────────────────────────────────────────────── */

/** Small bordered pill used in the stat bar. */
function StatPill({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  return (
    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border-[1.5px] border-slate-200 bg-white">
      <span className="text-slate-400">{icon}</span>
      <span className="text-[12px] font-semibold text-slate-700">{value}</span>
      <span className="text-[11px] text-slate-400 font-medium">{label}</span>
    </div>
  );
}

export default CourseOverviewD;
