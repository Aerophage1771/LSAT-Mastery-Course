/**
 * CourseOverviewB -- "Timeline" variant
 *
 * Vertical timeline layout with a 2px slate-300 line running down the left.
 * Each unit is a major node (large circle with unit number). Module cards
 * branch off to the right as full-width stacked cards.
 *
 * Dark hero header (slate-900) with course title, description, and stats.
 * Cards: rounded-[24px] border-[1.5px] border-slate-300 bg-white.
 *
 * Uses only Tailwind classes. No external CSS dependencies.
 */

import React from 'react';
import { ArrowRight, BookOpen, FileText, Clock, Layers } from 'lucide-react';
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

const getLessonCount = (modId: number) =>
  (websiteLessonCatalog[modId] ?? []).length;

const cleanTitle = (title: string) =>
  title.replace(/^MODULE \d+:\s*/i, '').replace(/^Section \d+:\s*/i, '');

/* ─── Component ──────────────────────────────────────────────────── */

export const CourseOverviewB: React.FC<CourseOverviewProps> = ({
  modules,
  category,
  onSelectModule,
}) => {
  /* ── Filter ────────────────────────────────────────────────────── */
  const WEBSITE_LR_MAX = 20;

  const filtered = modules.filter((m) => {
    if (m.category !== category) return false;
    if (category === 'LR' && m.id > WEBSITE_LR_MAX) return false;
    return (websiteLessonCatalog[m.id] ?? []).length > 0;
  });

  /* ── Group by unit ─────────────────────────────────────────────── */
  const units: Array<{ unit: string; modules: typeof filtered }> = [];
  const unitMap = new Map<string, typeof filtered>();

  for (const mod of filtered) {
    const u = mod.unit || 'Other';
    if (!unitMap.has(u)) unitMap.set(u, []);
    unitMap.get(u)!.push(mod);
  }
  unitMap.forEach((mods, unit) => units.push({ unit, modules: mods }));

  /* ── Aggregate stats ───────────────────────────────────────────── */
  const totalModules = filtered.length;
  const totalLessons = filtered.reduce((sum, m) => sum + getLessonCount(m.id), 0);
  const totalHours = Math.round(totalLessons * 0.2);
  const totalUnits = units.length;

  const courseTitle =
    category === 'LR' ? 'Logical Reasoning' : 'Reading Comprehension';
  const courseDescription =
    category === 'LR'
      ? 'Master every LR question type through a structured, unit-based curriculum. Work from foundational skills through advanced strategies.'
      : 'Build deep passage analysis skills with structured units covering every RC question pattern and passage type.';

  return (
    <div className="min-h-screen bg-stone-50">
      {/* ── Dark Hero Header ─────────────────────────────────────── */}
      <header className="relative bg-slate-900 overflow-hidden">
        {/* Subtle grid texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Gradient accent at top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700" />

        <div className="relative max-w-[960px] mx-auto px-6 sm:px-8 lg:px-12 pt-14 pb-12 sm:pt-16 sm:pb-14">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-slate-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400">
              Course Overview
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-[1.08] tracking-[-0.03em] text-white mb-4"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            {courseTitle}
          </h1>

          {/* Description */}
          <p className="text-[15px] sm:text-[16px] leading-[1.7] text-slate-400 max-w-[560px] mb-8">
            {courseDescription}
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: Layers, label: 'Units', value: totalUnits },
              { icon: BookOpen, label: 'Modules', value: totalModules },
              { icon: FileText, label: 'Lessons', value: totalLessons },
              { icon: Clock, label: 'Hours', value: `~${totalHours}` },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 bg-white/[0.06] border border-white/[0.08] rounded-xl px-4 py-2.5"
              >
                <Icon size={14} className="text-slate-400" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-slate-500">
                    {label}
                  </div>
                  <div className="text-lg font-bold text-white leading-none mt-0.5">
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── Timeline Content ─────────────────────────────────────── */}
      <main className="max-w-[960px] mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-14">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[19px] sm:left-[23px] top-0 bottom-0 w-[2px] bg-slate-300" />

          {/* Units */}
          <div className="space-y-12">
            {units.map(({ unit, modules: mods }, unitIdx) => {
              const unitLessons = mods.reduce(
                (s, m) => s + getLessonCount(m.id),
                0,
              );

              return (
                <div key={unit} id={`unit-${unit}`} className="relative">
                  {/* ── Unit Node ────────────────────────────────── */}
                  <div className="flex items-center gap-4 mb-6">
                    {/* Large circle node */}
                    <div className="relative z-10 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900 border-[3px] border-stone-50 shadow-[0_0_0_2px_theme(colors.slate.300)] flex items-center justify-center">
                      <span className="text-sm sm:text-base font-bold text-white">
                        {unitIdx + 1}
                      </span>
                    </div>

                    {/* Unit label */}
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-[2px] text-slate-400 mb-0.5">
                        Unit {unitIdx + 1}
                      </div>
                      <h2
                        className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight truncate"
                        style={{ fontFamily: "'Merriweather', serif" }}
                      >
                        {unit}
                      </h2>
                    </div>

                    {/* Unit stats */}
                    <div className="hidden sm:flex items-center gap-3 text-xs text-slate-400 flex-shrink-0">
                      <span className="bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-lg">
                        {mods.length} modules
                      </span>
                      <span className="bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-lg">
                        {unitLessons} lessons
                      </span>
                    </div>
                  </div>

                  {/* ── Module Cards ─────────────────────────────── */}
                  <div className="ml-[19px] sm:ml-[23px] pl-8 sm:pl-10 space-y-4">
                    {mods.map((mod) => {
                      const lessonCount = getLessonCount(mod.id);

                      return (
                        <div
                          key={mod.id}
                          className="group relative rounded-[24px] border-[1.5px] border-slate-300 bg-white p-6 sm:p-7 shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_32px_rgba(15,23,42,0.08)] hover:border-slate-400 transition-all duration-300"
                        >
                          {/* Connector dot on timeline */}
                          <div className="absolute -left-[calc(2rem+6px)] sm:-left-[calc(2.5rem+6px)] top-8 w-3 h-3 rounded-full bg-white border-[2px] border-slate-300 group-hover:border-slate-500 group-hover:bg-slate-100 transition-colors duration-300" />

                          {/* Connector line from timeline to card */}
                          <div className="absolute -left-[calc(2rem-0px)] sm:-left-[calc(2.5rem-0px)] top-[33px] w-[calc(2rem-0px)] sm:w-[calc(2.5rem-0px)] h-[2px] bg-slate-200 group-hover:bg-slate-300 transition-colors duration-300" />

                          {/* Card header row */}
                          <div className="flex items-start justify-between gap-4 mb-3">
                            {/* Module number badge */}
                            <div className="flex items-center gap-3">
                              <span className="flex-shrink-0 inline-flex items-center justify-center h-7 min-w-[28px] px-2 rounded-lg bg-slate-100 text-[11px] font-bold text-slate-500 border border-slate-200">
                                {mod.id}
                              </span>
                              <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-slate-400">
                                Module {mod.id}
                              </span>
                            </div>

                            {/* Lesson count pill */}
                            <span className="flex-shrink-0 text-[11px] text-slate-400 bg-slate-50 border border-slate-200 rounded-full px-3 py-1">
                              {lessonCount} {lessonCount === 1 ? 'lesson' : 'lessons'}
                            </span>
                          </div>

                          {/* Title (serif italic) */}
                          <h3
                            className="text-lg sm:text-xl font-bold italic text-slate-900 leading-snug mb-2"
                            style={{ fontFamily: "'Merriweather', serif" }}
                          >
                            {cleanTitle(mod.title)}
                          </h3>

                          {/* Description (2-line clamp) */}
                          <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-5">
                            {mod.description}
                          </p>

                          {/* Footer with Open button */}
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-slate-400">
                              ~{Math.round(lessonCount * 0.2)}h estimated
                            </div>
                            <button
                              onClick={() => onSelectModule(mod.id)}
                              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 hover:border-slate-300 rounded-xl px-4 py-2 transition-all duration-200 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900"
                            >
                              <span>Open</span>
                              <ArrowRight
                                size={14}
                                className="transition-transform duration-200 group-hover:translate-x-0.5"
                              />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Timeline end cap */}
          <div className="relative mt-10 flex items-center gap-4 ml-[3px] sm:ml-[7px]">
            <div className="relative z-10 w-8 h-8 rounded-full bg-slate-200 border-[3px] border-stone-50 shadow-[0_0_0_2px_theme(colors.slate.300)] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-slate-400" />
            </div>
            <span className="text-sm text-slate-400 italic">
              End of {courseTitle} curriculum
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};
