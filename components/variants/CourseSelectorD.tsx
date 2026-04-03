/**
 * CourseSelectorD — "Bento Grid" variant
 *
 * A bento-box inspired layout for the "Choose Your Study Area" screen.
 * LR occupies a tall card spanning two rows on the left (60%),
 * RC splits into two stacked cards on the right (40%),
 * with scattered stat cells for module/lesson counts.
 */

import React from 'react';
import {
  Lightbulb,
  FileText,
  ArrowRight,
  BookOpen,
  Layers,
  GraduationCap,
  CheckCircle2,
} from 'lucide-react';

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

export const CourseSelectorD: React.FC<CourseSelectorProps> = ({
  modules,
  onSelect,
}) => {
  const lrModules = modules.filter((m) => m.category === 'LR');
  const rcModules = modules.filter((m) => m.category === 'RC');
  const lrCount = lrModules.length;
  const rcCount = rcModules.length;
  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);

  return (
    <div className="max-w-[1120px] mx-auto px-4 py-10 sm:px-6 lg:px-0">
      {/* ── Header Cell ──────────────────────────────────────────── */}
      <div className="rounded-[24px] border-[1.5px] border-slate-200 bg-gradient-to-br from-white to-slate-50 px-8 py-7 shadow-sm mb-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-slate-100 text-slate-500">
            <GraduationCap className="h-[18px] w-[18px]" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">
            LSAT Mastery Course
          </span>
        </div>
        <h1
          className="text-[2rem] sm:text-[2.6rem] font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Choose Your Study Area
        </h1>
        <p className="mt-2 text-[15px] leading-7 text-slate-500 max-w-[42rem]">
          Select a section to open its modules, lessons, and linked question
          work. Each path is built for focused, structured study.
        </p>
      </div>

      {/* ── Bento Grid ───────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-[18px] auto-rows-auto">
        {/* ─ LR Main Card (tall, spans left 3 cols and 2 rows) ──── */}
        <button
          onClick={() => onSelect('LR')}
          className="group relative text-left lg:col-span-3 lg:row-span-2 rounded-[24px] border-[1.5px] border-slate-200 bg-white shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 focus-visible:ring-offset-2 overflow-hidden"
        >
          {/* Warm cream accent strip */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/60 via-transparent to-orange-50/30 pointer-events-none" />

          <div className="relative px-7 py-7 sm:px-8 sm:py-8 lg:px-9 lg:py-9 flex flex-col h-full">
            {/* Top badges */}
            <div className="flex items-center gap-2.5 mb-6">
              <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-amber-800">
                LR
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-500">
                <Layers className="h-3 w-3" />
                {lrCount} modules
              </span>
            </div>

            {/* Icon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-amber-200/60 bg-gradient-to-br from-amber-50 to-amber-100/50 text-amber-700 mb-5 transition-transform duration-300 group-hover:scale-105">
              <Lightbulb className="h-6 w-6" />
            </div>

            {/* Title */}
            <h2
              className="text-[1.7rem] sm:text-[2rem] lg:text-[2.25rem] font-semibold tracking-[-0.04em] text-slate-900 leading-[1.08]"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Logical Reasoning
            </h2>

            {/* Description */}
            <p className="mt-4 text-[15px] leading-[1.7] text-slate-600 max-w-[32rem]">
              Work on the LSAT Logical Reasoning section. Opens LR modules,
              drills, and linked question sets built around arguments, question
              families, and answer-choice evaluation.
            </p>

            {/* Focus points */}
            <ul className="mt-5 space-y-2.5 flex-1">
              {lrFocusPoints.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 mt-[3px] shrink-0 text-amber-500/70" />
                  <span className="text-[13.5px] leading-[1.5] text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-7 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 group-hover:bg-slate-800 group-hover:shadow-md">
                Start LR
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
              <span className="text-[12px] text-slate-400 hidden sm:inline">
                {lrModules.reduce((s, m) => s + m.lessons.length, 0)} lessons
                available
              </span>
            </div>
          </div>
        </button>

        {/* ─ RC Top Card (dark, top-right) ──────────────────────── */}
        <button
          onClick={() => onSelect('RC')}
          className="group relative text-left lg:col-span-2 rounded-[24px] border-[1.5px] border-slate-700/30 bg-[#2c3549] shadow-sm hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50 focus-visible:ring-offset-2 overflow-hidden"
        >
          {/* Subtle cool gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/20 via-transparent to-indigo-900/10 pointer-events-none" />

          <div className="relative px-6 py-6 sm:px-7 sm:py-7">
            {/* Badges */}
            <div className="flex items-center gap-2.5 mb-5">
              <span className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-500/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-sky-300">
                RC
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold text-white/60">
                <Layers className="h-3 w-3" />
                {rcCount} modules
              </span>
            </div>

            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-[16px] border border-white/10 bg-white/[0.06] text-sky-300 mb-4 transition-transform duration-300 group-hover:scale-105">
              <FileText className="h-5 w-5" />
            </div>

            {/* Title */}
            <h2
              className="text-[1.5rem] sm:text-[1.7rem] font-semibold tracking-[-0.03em] text-white leading-[1.1]"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Reading Comprehension
            </h2>

            {/* Short description */}
            <p className="mt-3 text-[14px] leading-[1.65] text-white/[0.6] max-w-[26rem]">
              Passage modules, comparative reading, and question-linked study
              for the RC section.
            </p>

            {/* Arrow indicator */}
            <div className="absolute top-6 right-6 sm:top-7 sm:right-7">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/50 transition-all duration-200 group-hover:bg-white/[0.1] group-hover:text-white/80">
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </button>

        {/* ─ RC Bottom Card (lighter, focus points + CTA) ──────── */}
        <button
          onClick={() => onSelect('RC')}
          className="group relative text-left lg:col-span-2 rounded-[24px] border-[1.5px] border-slate-300 bg-gradient-to-br from-slate-50 to-sky-50/40 shadow-sm hover:shadow-lg hover:border-slate-400/60 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50 focus-visible:ring-offset-2 overflow-hidden"
        >
          <div className="relative px-6 py-6 sm:px-7 sm:py-7 flex flex-col h-full">
            {/* Focus heading */}
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-4 w-4 text-sky-600/60" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                RC Focus Areas
              </span>
            </div>

            {/* Focus points */}
            <ul className="space-y-2.5 flex-1">
              {rcFocusPoints.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 mt-[3px] shrink-0 text-sky-500/60" />
                  <span className="text-[13.5px] leading-[1.5] text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-5 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#2c3549] px-5 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 group-hover:bg-[#3a4561] group-hover:shadow-md">
                Start RC
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        </button>

        {/* ─ Stat Cells (bottom row) ─────────────────────────────── */}
        <div className="lg:col-span-2 rounded-[24px] border-[1.5px] border-amber-200/70 bg-gradient-to-br from-amber-50/80 to-orange-50/40 px-6 py-5 shadow-sm flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-amber-100 text-amber-600">
            <Lightbulb className="h-5 w-5" />
          </div>
          <div>
            <div
              className="text-[1.4rem] font-semibold tracking-[-0.03em] text-slate-900"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              {lrCount} Modules
            </div>
            <div className="text-[12px] text-slate-500 mt-0.5">
              Logical Reasoning
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 rounded-[24px] border-[1.5px] border-sky-200/70 bg-gradient-to-br from-sky-50/80 to-indigo-50/30 px-6 py-5 shadow-sm flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-sky-100 text-sky-600">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <div
              className="text-[1.4rem] font-semibold tracking-[-0.03em] text-slate-900"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              {rcCount} Modules
            </div>
            <div className="text-[12px] text-slate-500 mt-0.5">
              Reading Comprehension
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 rounded-[24px] border-[1.5px] border-slate-200 bg-white px-5 py-5 shadow-sm flex flex-col items-center justify-center text-center">
          <div
            className="text-[1.6rem] font-semibold tracking-[-0.03em] text-slate-900"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            {totalLessons}
          </div>
          <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400 mt-1">
            Total Lessons
          </div>
        </div>
      </div>
    </div>
  );
};
