import React, { useState } from 'react';
import { Lightbulb, FileText, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

/* ─── Types ─────────────────────────────────────────────────────── */

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

/* ─── Data ──────────────────────────────────────────────────────── */

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

/* ─── Bullet Marker ─────────────────────────────────────────────── */

const BulletMarker: React.FC<{ variant: 'lr' | 'rc'; index: number }> = ({ variant, index }) => {
  const num = index + 1;
  if (variant === 'lr') {
    return (
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-amber-300/60 bg-amber-50 text-[10px] font-bold text-amber-700">
        {num}
      </span>
    );
  }
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-indigo-400/20 bg-indigo-400/10 text-[10px] font-bold text-indigo-200/90">
      {num}
    </span>
  );
};

/* ─── Split Screen Course Selector (Variant B) ──────────────────── */

export const CourseSelectorB: React.FC<CourseSelectorProps> = ({ modules, onSelect }) => {
  const [hoveredSide, setHoveredSide] = useState<'lr' | 'rc' | null>(null);

  const lrCount = modules.filter((m) => m.category === 'LR').length;
  const rcCount = modules.filter((m) => m.category === 'RC').length;

  return (
    <div className="relative flex min-h-[100dvh] w-full flex-col lg:flex-row">
      {/* ── Eyebrow label spanning both halves ────────────────── */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-30 flex justify-center pt-5 lg:pt-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-300/60 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
          <BookOpen className="h-3.5 w-3.5 text-slate-500" />
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
            Course
          </span>
        </span>
      </div>

      {/* ── LR Half (Left) ─────────────────────────────────────── */}
      <button
        type="button"
        onClick={() => onSelect('LR')}
        onMouseEnter={() => setHoveredSide('lr')}
        onMouseLeave={() => setHoveredSide(null)}
        className={[
          'group relative flex flex-1 flex-col items-center justify-center text-left',
          'bg-[#faf8f3] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
          'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-amber-400/40',
          'min-h-[50dvh] lg:min-h-0',
          hoveredSide === 'lr' ? 'lg:flex-[1.15]' : hoveredSide === 'rc' ? 'lg:flex-[0.85]' : 'lg:flex-1',
        ].join(' ')}
      >
        {/* Subtle pattern overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #92702a 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }} />

        {/* Warm gradient accent at top */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-amber-100/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-md px-8 py-20 lg:px-12 lg:py-16">
          {/* Icon */}
          <div className="mb-8 flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border-[1.5px] border-amber-300/50 bg-gradient-to-br from-amber-50 to-orange-50 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:shadow-md">
              <Lightbulb className="h-6 w-6 text-amber-700" />
            </span>
            <div className="flex items-center gap-2.5">
              <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-amber-800">
                LR
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-600">
                {lrCount} modules
              </span>
            </div>
          </div>

          {/* Title */}
          <h2
            className="text-[2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-slate-900 sm:text-[2.4rem] lg:text-[2.6rem]"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Logical
            <br />
            Reasoning
          </h2>

          {/* Description */}
          <p className="mt-5 text-[15px] leading-7 text-slate-600 lg:text-base">
            Work through the LSAT Logical Reasoning section -- arguments, question families, and answer-choice evaluation built into every drill.
          </p>

          {/* Focus points */}
          <div className="mt-7">
            <div className="rounded-2xl border-[1.5px] border-slate-300 bg-white/70 p-5 shadow-[0_2px_12px_rgba(15,23,42,0.04)] backdrop-blur-sm">
              <p className="mb-3.5 text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">
                You will build
              </p>
              <ul className="space-y-3">
                {lrFocusPoints.map((item, i) => (
                  <li key={item} className="flex items-start gap-3">
                    <BulletMarker variant="lr" index={i} />
                    <span className="text-[13.5px] leading-5 text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <span className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border-[1.5px] border-slate-900 bg-slate-900 px-6 py-4 text-[14px] font-bold tracking-wide text-white shadow-sm transition-all duration-300 group-hover:gap-3.5 group-hover:bg-slate-800 group-hover:shadow-lg">
              <Sparkles className="h-4 w-4 opacity-60" />
              Enter Logical Reasoning
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </button>

      {/* ── Vertical Divider ────────────────────────────────────── */}
      <div className="relative z-20 hidden lg:block">
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
        {/* Center orb on divider */}
        <div className="absolute left-1/2 top-1/2 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">or</span>
        </div>
      </div>

      {/* Horizontal divider on mobile */}
      <div className="relative z-20 flex h-px items-center justify-center lg:hidden">
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">or</span>
        </div>
      </div>

      {/* ── RC Half (Right) — indigo palette matching Review page ── */}
      <button
        type="button"
        onClick={() => onSelect('RC')}
        onMouseEnter={() => setHoveredSide('rc')}
        onMouseLeave={() => setHoveredSide(null)}
        className={[
          'group relative flex flex-1 flex-col items-center justify-center text-left',
          'bg-[#0e1735] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
          'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-indigo-400/30',
          'min-h-[50dvh] lg:min-h-0',
          hoveredSide === 'rc' ? 'lg:flex-[1.15]' : hoveredSide === 'lr' ? 'lg:flex-[0.85]' : 'lg:flex-1',
        ].join(' ')}
      >
        {/* Subtle dot pattern overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #818cf8 0.8px, transparent 0)',
          backgroundSize: '24px 24px',
        }} />

        {/* Indigo gradient accent at top */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-indigo-900/30 to-transparent" />

        {/* Soft vignette at edges */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(14,23,53,0.4)_100%)]" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-md px-8 py-20 lg:px-12 lg:py-16">
          {/* Icon */}
          <div className="mb-8 flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/15 to-indigo-400/10 shadow-[0_4px_12px_rgba(99,102,241,0.15)] transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_8px_20px_rgba(99,102,241,0.25)]">
              <FileText className="h-6 w-6 text-indigo-300" />
            </span>
            <div className="flex items-center gap-2.5">
              <span className="rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-300">
                RC
              </span>
              <span className="rounded-full border border-indigo-300/15 bg-indigo-400/[0.06] px-3 py-1 text-[11px] font-semibold text-indigo-200/70">
                {rcCount} modules
              </span>
            </div>
          </div>

          {/* Title */}
          <h2
            className="text-[2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[2.4rem] lg:text-[2.6rem]"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Reading
            <br />
            Comprehension
          </h2>

          {/* Description */}
          <p className="mt-5 text-[15px] leading-7 text-indigo-100/60 lg:text-base">
            Work through the LSAT Reading Comprehension section -- passage reading, viewpoint tracking, and support-based question work in every module.
          </p>

          {/* Focus points */}
          <div className="mt-7">
            <div className="rounded-2xl border-[1.5px] border-indigo-400/15 bg-indigo-500/[0.06] p-5 shadow-[0_2px_12px_rgba(99,102,241,0.10)] backdrop-blur-sm">
              <p className="mb-3.5 text-[10px] font-bold uppercase tracking-[0.24em] text-indigo-300/40">
                You will build
              </p>
              <ul className="space-y-3">
                {rcFocusPoints.map((item, i) => (
                  <li key={item} className="flex items-start gap-3">
                    <BulletMarker variant="rc" index={i} />
                    <span className="text-[13.5px] leading-5 text-indigo-100/75">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <span className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border border-indigo-300/20 bg-indigo-500/15 px-6 py-4 text-[14px] font-bold tracking-wide text-white shadow-[0_4px_16px_rgba(99,102,241,0.12)] transition-all duration-300 group-hover:gap-3.5 group-hover:bg-indigo-500/25 group-hover:shadow-[0_8px_24px_rgba(99,102,241,0.20)]">
              <Sparkles className="h-4 w-4 text-indigo-300 opacity-60" />
              Enter Reading Comprehension
              <ArrowRight className="h-4 w-4 text-indigo-200 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </button>
    </div>
  );
};
