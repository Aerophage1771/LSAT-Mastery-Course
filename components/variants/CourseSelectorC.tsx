import React from 'react';
import { Lightbulb, BookOpen, ArrowRight, Clock, Layers, GraduationCap } from 'lucide-react';

/* ─── Stacked Hero Cards · Variant C ──────────────────────────────────────
 *
 * Full-width vertical layout with two tall, impactful hero blocks.
 * LR: white bg, decorative watermark, left-aligned content.
 * RC: dark gradient, white text, matching watermark.
 * "— or —" divider between cards. Premium serif typography throughout.
 * ────────────────────────────────────────────────────────────────────── */

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

export const CourseSelectorC: React.FC<CourseSelectorProps> = ({ modules, onSelect }) => {
  const lrModules = modules.filter((m) => m.category === 'LR');
  const rcModules = modules.filter((m) => m.category === 'RC');

  const lrModuleCount = lrModules.length;
  const rcModuleCount = rcModules.length;

  const lrLessonCount = lrModules.reduce((sum, m) => sum + m.lessons.length, 0);
  const rcLessonCount = rcModules.reduce((sum, m) => sum + m.lessons.length, 0);

  return (
    <div className="max-w-[900px] mx-auto py-10 px-4 sm:px-6">
      {/* ── Page Header ─────────────────────────────────────────── */}
      <div className="mb-12 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-4">
          LSAT Mastery Course
        </div>
        <h1
          className="text-[2.4rem] sm:text-[3rem] font-bold leading-[1.08] tracking-[-0.04em] text-slate-950 mb-4"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Choose Your Study Area
        </h1>
        <p className="text-[15px] sm:text-base leading-7 text-slate-500 max-w-[480px] mx-auto">
          Select a section below to begin your focused study. Each track is purpose-built with lessons, drills, and linked question work.
        </p>
      </div>

      {/* ── LR Hero Card ────────────────────────────────────────── */}
      <button
        onClick={() => onSelect('LR')}
        className="group relative w-full text-left overflow-hidden rounded-[32px] border-[1.5px] border-slate-300 bg-white shadow-[0_4px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_60px_rgba(0,0,0,0.10)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
      >
        {/* Watermark */}
        <div
          className="pointer-events-none absolute -right-6 -top-6 select-none text-[14rem] sm:text-[18rem] font-black leading-none tracking-[-0.06em] text-slate-950 opacity-[0.03]"
          style={{ fontFamily: "'Merriweather', serif" }}
          aria-hidden="true"
        >
          LR
        </div>

        <div className="relative px-8 py-10 sm:px-10 sm:py-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
              <Lightbulb className="h-[18px] w-[18px]" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">
              Section I
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-[2.2rem] sm:text-[3rem] font-bold leading-[1.05] tracking-[-0.04em] text-slate-900 mb-5"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Logical Reasoning
          </h2>

          {/* Description */}
          <p className="text-[15px] sm:text-base leading-7 text-slate-600 max-w-[560px] mb-6">
            Master the art of argument analysis. Work through stimulus breakdowns, question-type recognition, and systematic answer elimination built around the full LR question family.
          </p>

          {/* Focus Points */}
          <ul className="space-y-2.5 mb-8">
            {lrFocusPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[14px] leading-6 text-slate-700">
                <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-slate-400" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Stat Bar */}
          <div className="flex items-center gap-0 mb-8 text-[13px] font-medium text-slate-500">
            <div className="flex items-center gap-2 pr-5">
              <Layers className="h-[14px] w-[14px] text-slate-400" />
              <span>{lrModuleCount} modules</span>
            </div>
            <div className="h-3.5 w-px bg-slate-200" />
            <div className="flex items-center gap-2 px-5">
              <GraduationCap className="h-[14px] w-[14px] text-slate-400" />
              <span>{lrLessonCount} lessons</span>
            </div>
            <div className="h-3.5 w-px bg-slate-200" />
            <div className="flex items-center gap-2 pl-5">
              <Clock className="h-[14px] w-[14px] text-slate-400" />
              <span>~{Math.round(lrLessonCount * 0.4)} hrs</span>
            </div>
          </div>

          {/* CTA Button */}
          <span className="inline-flex items-center gap-2.5 rounded-full bg-slate-900 px-7 py-3.5 text-[14px] font-semibold text-white shadow-sm transition-all duration-200 group-hover:bg-slate-800 group-hover:shadow-md group-hover:gap-3.5">
            Start Logical Reasoning
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </button>

      {/* ── Divider ─────────────────────────────────────────────── */}
      <div className="flex items-center justify-center gap-4 py-6">
        <div className="h-px w-16 bg-slate-200" />
        <span className="text-[13px] font-medium tracking-wide text-slate-300">or</span>
        <div className="h-px w-16 bg-slate-200" />
      </div>

      {/* ── RC Hero Card ────────────────────────────────────────── */}
      <button
        onClick={() => onSelect('RC')}
        className="group relative w-full text-left overflow-hidden rounded-[32px] border-[1.5px] border-slate-700/30 bg-gradient-to-br from-slate-900 to-slate-800 shadow-[0_4px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_60px_rgba(0,0,0,0.25)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
      >
        {/* Watermark */}
        <div
          className="pointer-events-none absolute -right-4 -top-4 select-none text-[14rem] sm:text-[18rem] font-black leading-none tracking-[-0.06em] text-white opacity-[0.03]"
          style={{ fontFamily: "'Merriweather', serif" }}
          aria-hidden="true"
        >
          RC
        </div>

        <div className="relative px-8 py-10 sm:px-10 sm:py-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.08] text-white/80">
              <BookOpen className="h-[18px] w-[18px]" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/40">
              Section II
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-[2.2rem] sm:text-[3rem] font-bold leading-[1.05] tracking-[-0.04em] text-white mb-5"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Reading Comprehension
          </h2>

          {/* Description */}
          <p className="text-[15px] sm:text-base leading-7 text-white/[0.68] max-w-[560px] mb-6">
            Develop precision reading under time pressure. Move through passage analysis, viewpoint tracking, and question-linked study designed to build structural command over dense academic passages.
          </p>

          {/* Focus Points */}
          <ul className="space-y-2.5 mb-8">
            {rcFocusPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[14px] leading-6 text-white/[0.78]">
                <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-white/[0.35]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Stat Bar */}
          <div className="flex items-center gap-0 mb-8 text-[13px] font-medium text-white/50">
            <div className="flex items-center gap-2 pr-5">
              <Layers className="h-[14px] w-[14px] text-white/40" />
              <span>{rcModuleCount} modules</span>
            </div>
            <div className="h-3.5 w-px bg-white/[0.12]" />
            <div className="flex items-center gap-2 px-5">
              <GraduationCap className="h-[14px] w-[14px] text-white/40" />
              <span>{rcLessonCount} lessons</span>
            </div>
            <div className="h-3.5 w-px bg-white/[0.12]" />
            <div className="flex items-center gap-2 pl-5">
              <Clock className="h-[14px] w-[14px] text-white/40" />
              <span>~{Math.round(rcLessonCount * 0.5)} hrs</span>
            </div>
          </div>

          {/* CTA Button */}
          <span className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold text-slate-900 shadow-sm transition-all duration-200 group-hover:bg-white/95 group-hover:shadow-md group-hover:gap-3.5">
            Start Reading Comprehension
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </button>
    </div>
  );
};
