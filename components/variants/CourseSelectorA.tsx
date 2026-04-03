/**
 * CourseSelectorA -- "Editorial Magazine" variant
 *
 * Full-width hero with serif headings, two side-by-side magazine-style cards:
 *   LR: clean white with a navy left accent stripe
 *   RC: dark navy/charcoal background with white text
 *
 * Uses only Tailwind classes. No external CSS dependencies.
 */

import React from 'react';
import { ArrowRight, Lightbulb, BookOpen, Sparkles } from 'lucide-react';

/* ─── Props ──────────────────────────────────────────────────────── */

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

/* ─── Static Data ────────────────────────────────────────────────── */

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

/* ─── Component ──────────────────────────────────────────────────── */

export const CourseSelectorA: React.FC<CourseSelectorProps> = ({ modules, onSelect }) => {
  const lrCount = modules.filter((m) => m.category === 'LR').length;
  const rcCount = modules.filter((m) => m.category === 'RC').length;

  return (
    <div className="min-h-screen bg-stone-50">
      {/* ── Hero Section ─────────────────────────────────────────── */}
      <header className="relative overflow-hidden bg-white border-b border-stone-200">
        {/* Subtle decorative lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
          <div className="absolute top-0 left-1/4 w-px h-full bg-stone-900" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-stone-900" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-stone-900" />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-14 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-slate-400" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              LSAT Mastery Course
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="text-[2.4rem] sm:text-[3.2rem] lg:text-[3.8rem] leading-[1.08] tracking-[-0.03em] text-slate-900 max-w-[680px]"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Choose Your
            <br />
            Study Area
          </h1>

          {/* Subtext */}
          <p className="mt-5 text-[16px] sm:text-[17px] leading-[1.7] text-slate-500 max-w-[520px]">
            Two focused sections, each built around the skills that move your score.
            Pick the one you want to work on today.
          </p>

          {/* Decorative dot accent */}
          <div className="mt-8 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-slate-900" />
            <span className="h-2 w-2 rounded-full bg-slate-400" />
            <span className="h-2 w-2 rounded-full bg-slate-300" />
          </div>
        </div>
      </header>

      {/* ── Cards Section ────────────────────────────────────────── */}
      <main className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

          {/* ── LR Card ──────────────────────────────────────────── */}
          <button
            onClick={() => onSelect('LR')}
            className="group relative flex text-left bg-white border-[1.5px] border-slate-300 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-4"
          >
            {/* Left accent stripe */}
            <div className="w-[6px] shrink-0 bg-slate-800 group-hover:bg-slate-900 transition-colors duration-300" />

            {/* Card content */}
            <div className="flex-1 px-7 py-8 sm:px-9 sm:py-10 lg:px-8 lg:py-9 xl:px-10 xl:py-10">
              {/* Section label + module count */}
              <div className="flex items-center justify-between mb-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors duration-300 group-hover:bg-slate-800 group-hover:text-white">
                    <Lightbulb className="h-[18px] w-[18px]" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">
                    Section One
                  </span>
                </div>
                <span className="text-[12px] font-semibold text-slate-400 bg-slate-50 border border-slate-200 rounded-full px-3 py-1">
                  {lrCount} modules
                </span>
              </div>

              {/* Title */}
              <h2
                className="text-[1.65rem] sm:text-[1.9rem] lg:text-[2.05rem] leading-[1.12] tracking-[-0.03em] text-slate-900"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Logical
                <br className="hidden sm:block" />
                {' '}Reasoning
              </h2>

              {/* Divider */}
              <div className="mt-6 mb-6 h-px w-12 bg-slate-300" />

              {/* Focus points */}
              <ul className="space-y-3">
                {lrFocusPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[14px] leading-[1.6] text-slate-600">
                    <Sparkles className="h-4 w-4 mt-0.5 shrink-0 text-slate-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-slate-900 transition-all duration-300 group-hover:gap-3">
                <span>Begin</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </div>
          </button>

          {/* ── RC Card ──────────────────────────────────────────── */}
          <button
            onClick={() => onSelect('RC')}
            className="group relative text-left bg-[#1e2536] border-[1.5px] border-slate-300 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-4"
          >
            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />

            {/* Card content */}
            <div className="relative px-7 py-8 sm:px-9 sm:py-10 lg:px-8 lg:py-9 xl:px-10 xl:py-10">
              {/* Section label + module count */}
              <div className="flex items-center justify-between mb-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.08] text-white/80 transition-colors duration-300 group-hover:bg-white/[0.14]">
                    <BookOpen className="h-[18px] w-[18px]" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/40">
                    Section Two
                  </span>
                </div>
                <span className="text-[12px] font-semibold text-white/50 bg-white/[0.06] border border-white/10 rounded-full px-3 py-1">
                  {rcCount} modules
                </span>
              </div>

              {/* Title */}
              <h2
                className="text-[1.65rem] sm:text-[1.9rem] lg:text-[2.05rem] leading-[1.12] tracking-[-0.03em] text-white"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Reading
                <br className="hidden sm:block" />
                {' '}Comprehension
              </h2>

              {/* Divider */}
              <div className="mt-6 mb-6 h-px w-12 bg-white/20" />

              {/* Focus points */}
              <ul className="space-y-3">
                {rcFocusPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[14px] leading-[1.6] text-white/70">
                    <Sparkles className="h-4 w-4 mt-0.5 shrink-0 text-white/30" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-white transition-all duration-300 group-hover:gap-3">
                <span>Begin</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </div>
          </button>

        </div>

        {/* ── Footer Note ────────────────────────────────────────── */}
        <div className="mt-14 sm:mt-16 text-center">
          <p className="text-[13px] text-slate-400 leading-relaxed max-w-[400px] mx-auto">
            You can switch between sections at any time.
            <br />
            Your progress is saved automatically.
          </p>
        </div>
      </main>
    </div>
  );
};
