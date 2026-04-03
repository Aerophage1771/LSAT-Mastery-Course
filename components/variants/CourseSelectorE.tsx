import React from 'react';
import { ArrowRight, BookOpen, Clock, Layers, Target, CircleDot } from 'lucide-react';

/* ── Focus-point data ─────────────────────────────────────────────── */
const lrFocusPoints = [
  'Argument structure and conclusion recognition',
  'Question family execution and answer elimination',
  'Transferable reasoning habits across LR sets',
];
const rcFocusPoints = [
  'Passage structure and main idea control',
  'Viewpoint shifts and comparative reading',
  'Support verification inside dense passages',
];

/* ── Types ────────────────────────────────────────────────────────── */
interface CourseSelectorProps {
  modules: Array<{
    id: number;
    category: string;
    title: string;
    description: string;
    unit?: string;
    lessons: Array<{ id: string; title: string }>;
  }>;
  onSelect: (category: 'LR' | 'RC') => void;
}

/* ── Helpers ──────────────────────────────────────────────────────── */
function countLessons(
  modules: CourseSelectorProps['modules'],
  category: string,
): number {
  return modules
    .filter((m) => m.category === category)
    .reduce((sum, m) => sum + m.lessons.length, 0);
}

function estimateHours(lessonCount: number): string {
  const hours = Math.round(lessonCount * 0.35);
  return hours > 0 ? `${hours}h` : '<1h';
}

/* ── Section Card ─────────────────────────────────────────────────── */
const SectionCard: React.FC<{
  sectionNumber: string;
  title: string;
  moduleCount: number;
  lessonCount: number;
  focusPoints: string[];
  accentClass: string;
  accentBorder: string;
  accentText: string;
  accentBg: string;
  accentGlow: string;
  onSelect: () => void;
}> = ({
  sectionNumber,
  title,
  moduleCount,
  lessonCount,
  focusPoints,
  accentClass,
  accentBorder,
  accentText,
  accentBg,
  accentGlow,
  onSelect,
}) => {
  const hours = estimateHours(lessonCount);

  return (
    <button
      onClick={onSelect}
      className={`group relative w-full text-left rounded-[20px] border-[1.5px] border-slate-700 bg-slate-900 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-slate-500 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${accentGlow}`}
    >
      {/* Left accent line */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-[3px] ${accentClass}`}
      />

      <div className="pl-7 pr-6 py-6 sm:pl-8 sm:pr-7 sm:py-7">
        {/* Eyebrow */}
        <div
          className={`font-mono text-[11px] font-semibold uppercase tracking-[0.22em] ${accentText} mb-3`}
        >
          {sectionNumber}
        </div>

        {/* Title */}
        <h2
          className="text-[1.55rem] sm:text-[1.75rem] lg:text-[1.9rem] font-semibold text-white tracking-[-0.03em] leading-tight mb-5"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          {title}
        </h2>

        {/* Stats row */}
        <div className="flex items-center gap-5 mb-6">
          <div className="flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-slate-400" />
            <span className="font-mono text-[12px] text-slate-300 tracking-wide">
              {moduleCount} modules
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5 text-slate-400" />
            <span className="font-mono text-[12px] text-slate-300 tracking-wide">
              {lessonCount} lessons
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-slate-400" />
            <span className="font-mono text-[12px] text-slate-300 tracking-wide">
              {hours} est.
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-700/60 mb-5" />

        {/* Objectives */}
        <div className="mb-6">
          <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
            Objectives
          </div>
          <ul className="space-y-2.5">
            {focusPoints.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <Target
                  className={`h-3.5 w-3.5 mt-[3px] shrink-0 ${accentText} opacity-70`}
                />
                <span className="text-[13.5px] leading-[1.55] text-slate-300">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div
          className={`inline-flex items-center gap-2 rounded-lg ${accentBg} px-5 py-2.5 text-[13px] font-semibold tracking-wide transition-all duration-200 group-hover:gap-3 ${accentBorder}`}
        >
          <span className="text-slate-950">Launch Section</span>
          <ArrowRight className="h-4 w-4 text-slate-950 transition-transform duration-200 group-hover:translate-x-0.5" />
        </div>
      </div>
    </button>
  );
};

/* ── Main Component ───────────────────────────────────────────────── */
export const CourseSelectorE: React.FC<CourseSelectorProps> = ({
  modules,
  onSelect,
}) => {
  const lrModules = modules.filter((m) => m.category === 'LR');
  const rcModules = modules.filter((m) => m.category === 'RC');
  const lrLessonCount = countLessons(modules, 'LR');
  const rcLessonCount = countLessons(modules, 'RC');

  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="bg-slate-950 rounded-[24px] overflow-hidden border border-slate-800/60">
        {/* ── Mission Control Header ──────────────────────── */}
        <div className="flex items-center justify-between px-6 py-4 sm:px-8 sm:py-5 border-b border-slate-800/60">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 border border-slate-700">
              <CircleDot className="h-4 w-4 text-emerald-400" />
            </div>
            <div>
              <h1
                className="text-[1.05rem] sm:text-[1.15rem] font-semibold text-white tracking-[-0.02em]"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Choose Your Study Area
              </h1>
            </div>
          </div>

          {/* Status indicator */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[11px] text-emerald-400 tracking-wide hidden sm:inline">
                2 Sections Available
              </span>
            </div>
          </div>
        </div>

        {/* ── Card Grid ───────────────────────────────────── */}
        <div className="p-5 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
            {/* LR Card */}
            <SectionCard
              sectionNumber="Section 01"
              title="Logical Reasoning"
              moduleCount={lrModules.length}
              lessonCount={lrLessonCount}
              focusPoints={lrFocusPoints}
              accentClass="bg-cyan-400"
              accentBorder="border border-cyan-400/20"
              accentText="text-cyan-400"
              accentBg="bg-cyan-400"
              accentGlow="focus-visible:ring-cyan-400/50"
              onSelect={() => onSelect('LR')}
            />

            {/* RC Card */}
            <SectionCard
              sectionNumber="Section 02"
              title="Reading Comprehension"
              moduleCount={rcModules.length}
              lessonCount={rcLessonCount}
              focusPoints={rcFocusPoints}
              accentClass="bg-amber-400"
              accentBorder="border border-amber-400/20"
              accentText="text-amber-400"
              accentBg="bg-amber-400"
              accentGlow="focus-visible:ring-amber-400/50"
              onSelect={() => onSelect('RC')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
