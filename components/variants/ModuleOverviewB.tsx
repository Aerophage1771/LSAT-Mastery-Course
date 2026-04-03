import React from 'react';
import {
  ArrowLeft,
  BookOpen,
  FileText,
  Lightbulb,
  GraduationCap,
  MessageSquareText,
  Scale,
  Layers,
  ArrowRight,
} from 'lucide-react';

/* -- Types --------------------------------------------------------- */

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

/* -- Icon picker --------------------------------------------------- */

const LESSON_ICONS = [
  BookOpen,
  FileText,
  Lightbulb,
  GraduationCap,
  MessageSquareText,
  Scale,
  Layers,
];

function iconForIndex(index: number) {
  return LESSON_ICONS[index % LESSON_ICONS.length]!;
}

/* -- Stat Badge ---------------------------------------------------- */

const StatBadge: React.FC<{ label: string; value: string | number }> = ({
  label,
  value,
}) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-white/80 backdrop-blur-sm">
    <span className="text-white/95">{value}</span>
    <span className="text-white/50">{label}</span>
  </span>
);

/* -- Lesson Card --------------------------------------------------- */

interface LessonCardProps {
  index: number;
  lesson: { id: string; title: string };
  onSelect: (id: string) => void;
}

const LessonCard: React.FC<LessonCardProps> = ({ index, lesson, onSelect }) => {
  const Icon = iconForIndex(index);
  const isOdd = index % 2 === 0; // zero-based: 0,2,4... get slate stripe
  const stripeColor = isOdd ? 'bg-slate-900' : 'bg-red-500';

  return (
    <button
      type="button"
      onClick={() => onSelect(lesson.id)}
      className={[
        'group relative flex flex-col text-left',
        'rounded-[24px] border-[1.5px] border-slate-300 bg-white p-5',
        'transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
        'hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(15,23,42,0.10)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2',
      ].join(' ')}
    >
      {/* Top accent stripe */}
      <div
        className={[
          'absolute inset-x-5 top-0 h-[3px] rounded-b-full',
          stripeColor,
        ].join(' ')}
      />

      {/* Eyebrow */}
      <span className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
        Part {index + 1}
      </span>

      {/* Icon + Title row */}
      <div className="flex items-start gap-3.5">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 transition-colors duration-300 group-hover:border-slate-300 group-hover:bg-slate-100">
          <Icon className="h-4 w-4 text-slate-500 transition-colors duration-300 group-hover:text-slate-700" />
        </span>
        <h3
          className="flex-1 text-[15px] font-semibold leading-snug text-slate-800 transition-colors duration-200 group-hover:text-slate-900"
          style={{ fontFamily: "'Merriweather', 'Georgia', serif" }}
        >
          {lesson.title}
        </h3>
      </div>

      {/* Open CTA */}
      <div className="mt-auto flex items-center justify-end pt-5">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-600 transition-all duration-300 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white">
          Open
          <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </div>
    </button>
  );
};

/* -- Module Overview B (Card Grid) --------------------------------- */

export const ModuleOverviewB: React.FC<ModuleOverviewProps> = ({
  moduleData,
  moduleId,
  onSelectLesson,
  onBack,
  lessons,
}) => {
  const displayLessons = lessons.length > 0 ? lessons : moduleData.lessons;
  const totalLessons = displayLessons.length;
  const categoryLabel = moduleData.category === 'RC' ? 'Reading Comprehension' : 'Logical Reasoning';
  const categoryShort = moduleData.category === 'RC' ? 'RC' : 'LR';

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Back button above hero */}
      <div className="mx-auto max-w-5xl px-6 pt-6">
        <button
          type="button"
          onClick={onBack}
          className="group inline-flex items-center gap-2 rounded-xl px-3 py-2 text-[13px] font-semibold text-slate-500 transition-colors duration-200 hover:bg-white hover:text-slate-800 hover:shadow-sm"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
          Back to modules
        </button>
      </div>

      {/* Dark hero block */}
      <div className="mx-auto mt-2 max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[28px] bg-slate-900 px-8 py-10 sm:px-12 sm:py-14">
          {/* Subtle dot pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, #94a3b8 0.8px, transparent 0)',
              backgroundSize: '22px 22px',
            }}
          />

          {/* Gradient accents */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-sky-500/8 blur-3xl" />

          <div className="relative z-10">
            {/* Category + Module number */}
            <div className="mb-4 flex flex-wrap items-center gap-2.5">
              <span className="rounded-full border border-white/15 bg-white/[0.07] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                {categoryShort}
              </span>
              <span className="text-[11px] font-semibold text-white/30">
                /
              </span>
              <span className="text-[11px] font-semibold tracking-wide text-white/50">
                Module {moduleId}
              </span>
            </div>

            {/* Title */}
            <h1
              className="max-w-2xl text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[2.2rem] lg:text-[2.5rem]"
              style={{ fontFamily: "'Merriweather', 'Georgia', serif" }}
            >
              {moduleData.title}
            </h1>

            {/* Description */}
            {moduleData.description && (
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/55">
                {moduleData.description}
              </p>
            )}

            {/* Stat badges */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <StatBadge value={totalLessons} label={totalLessons === 1 ? 'lesson' : 'lessons'} />
              <StatBadge value={categoryLabel} label="" />
              {moduleData.unit && (
                <StatBadge value={moduleData.unit} label="" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Card Grid */}
      <div className="mx-auto max-w-5xl px-6 pb-16 pt-8">
        {/* Section label */}
        <div className="mb-5 flex items-center gap-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">
            Lessons
          </span>
          <span className="h-px flex-1 bg-slate-200" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {displayLessons.map((lesson, i) => (
            <LessonCard
              key={lesson.id}
              index={i}
              lesson={lesson}
              onSelect={onSelectLesson}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
