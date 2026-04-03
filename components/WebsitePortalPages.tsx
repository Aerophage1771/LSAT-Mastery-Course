/**
 * WebsitePortalPages — Pixel-perfect replica components of the
 * GermaineTutoring.com student portal pages for the mastery-course
 * Website Viewer mode.
 *
 * All data is hardcoded sample content. No API calls, no auth.
 * Tailwind classes match the live website exactly.
 */

import React, { useState } from 'react';
import {
  BookOpen,
  ClipboardList,
  Layers,
  Search,
  ChevronDown,
  Download,
  Target,
  ListChecks,
  Lightbulb,
  ArrowUpRight,
  Calendar,
  Clock,
  FileText,
  GraduationCap,
  BarChart3,
  MessageSquare,
  Zap,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Pencil,
  Plus,
  Save,
  X,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   1. PortalDashboard
   ═══════════════════════════════════════════════════════════════ */

export const PortalDashboard: React.FC = () => (
  <div className="space-y-6">
    {/* Page Header — compact variant matching website */}
    <header className="rounded-[28px] border-[1.5px] border-slate-300 bg-white px-5 py-5 shadow-[0_12px_32px_rgba(15,23,42,0.09)] sm:px-6 sm:py-5.5">
      <div className="max-w-4xl">
        <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-400">Welcome</p>
        <h1 className="mt-2 text-[1.8rem] font-semibold tracking-[-0.045em] text-slate-950 sm:text-[2.2rem]">Good Morning, Annabelle</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 sm:text-[15px]">Open the next session details, revisit recent work, or jump directly into Course, Questions, Homework, Review, and Past Sessions.</p>
      </div>
    </header>

    {/* Session Cards — exact copy of website Dashboard.tsx */}
    <div className="rounded-[30px] border-[1.5px] border-slate-300/50 bg-[#dfe7f1] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
      <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_430px] xl:items-stretch">
        {/* LEFT: Prior Session Focus */}
        <div className="flex min-h-[286px] flex-col rounded-[28px] border-[1.5px] border-slate-200 bg-white px-7 py-6 shadow-[0_12px_32px_rgba(15,23,42,0.09)]">
          <div className="inline-flex w-fit rounded-full border border-[#d3deef] bg-[#f7fbff] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2d4c86]">Prior Session Focus</div>
          <h2 className="mt-5 max-w-4xl text-[2.05rem] font-semibold leading-[0.96] tracking-[-0.07em] text-[#0e1735] sm:text-[2.65rem]">RC Rules for Timing and Synthesis</h2>
          <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#91a6ca]">APR 1, 2026</p>
          <p className="mt-4 max-w-5xl text-[15px] leading-7 text-[#536b92]">Refined your RC process around paragraph roles, prephrasing, answer-choice comparison, and a steadier Day A / Day B study rhythm.</p>
          <div className="mt-auto pt-6">
            <button className="rounded-full border border-slate-200 bg-white px-8 py-5 text-[16px] text-[#223252] transition hover:bg-slate-50">Review Prior Session</button>
          </div>
        </div>

        {/* RIGHT: Next Session */}
        <div className="overflow-hidden rounded-[28px] border-[1.5px] border-slate-200 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.09)]">
          <div className="grid h-full grid-cols-[96px_minmax(0,1fr)]">
            <div className="flex flex-col items-center justify-center bg-[#0f172a] px-3 py-6 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/78">NEXT</p>
              <p className="mt-2 text-[3.2rem] font-semibold tracking-[-0.08em] leading-none">&mdash;</p>
            </div>
            <div className="flex flex-1 flex-col px-4 py-4">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-slate-500">Next Session</p>
              <div className="mt-4 flex flex-1 flex-col">
                <p className="text-[1.2rem] font-semibold tracking-[-0.04em] text-[#0e1735]">No session booked</p>
                <div className="mt-4 grid gap-2.5">
                  <button className="h-13 rounded-full bg-[#040c28] px-5 text-[15px] text-white transition hover:bg-[#0b1536]">Book Session</button>
                  <button className="h-13 rounded-full border border-slate-200 bg-white px-5 text-[15px] text-[#223252] transition hover:bg-slate-50">Email Germaine</button>
                </div>
                <div className="mt-auto border-t border-slate-200 pt-6">
                  <p className="text-center text-[9px] font-semibold uppercase tracking-[0.3em] text-[#91a6ca]">Quick Links</p>
                  <div className="mt-3 grid gap-2.5">
                    <button className="h-11 rounded-full border border-slate-200 bg-white text-[14px] text-[#223252] transition hover:bg-slate-50">Open WAJ</button>
                    <button className="h-11 rounded-full border border-slate-200 bg-white text-[14px] text-[#223252] transition hover:bg-slate-50">Open Blind Review</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Homework Section */}
    <section className="rounded-[28px] border-[1.5px] border-slate-300 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">Homework</p>
          <h2 className="mt-2 text-[2rem] font-semibold tracking-[-0.04em] text-slate-950">Current Homework</h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-7 text-slate-600">Open the question sets and follow-up work that are active in your portal right now.</p>
        </div>
        <button className="rounded-full bg-[#151d2f] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#0f1625]">Open Homework</button>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[
          { eyebrow: 'LSAT Drill Set', title: 'Flaw Drill Set', desc: '12 targeted flaw questions from recent PrepTests.', meta: '12 questions' },
          { eyebrow: 'LSAT Drill Set', title: 'Strengthen & Weaken Review', desc: 'Mixed strengthen and weaken drill from PT-119 and PT-120.', meta: '8 questions' },
          { eyebrow: 'Follow-Up Resource', title: 'Read: Causal Reasoning Notes', desc: 'Review the causal reasoning patterns doc before next session.', meta: 'PDF Resource' },
        ].map((c) => (
          <div key={c.title} className="flex h-full flex-col rounded-[24px] border border-slate-200 bg-[#f7fafc] px-5 py-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">{c.eyebrow}</p>
            <h3 className="mt-3 text-[1.35rem] font-semibold tracking-[-0.03em] text-slate-950">{c.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{c.desc}</p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-500"><span>{c.meta}</span></div>
          </div>
        ))}
      </div>
    </section>

    {/* Quick Links - 3 column */}
    <div className="grid gap-5 xl:grid-cols-3">
      {[
        { title: 'Course: Logical Reasoning', desc: 'Jump into the Logical Reasoning course to study arguments, question types, and answer choices.', btn: 'Open Logical Reasoning' },
        { title: 'Course: Reading Comprehension', desc: 'Open the Reading Comprehension course to work on passages, viewpoints, and inference.', btn: 'Open Reading Comprehension' },
        { title: 'Browse Questions', desc: 'Search the full LSAT question bank, build targeted problem sets, and track your progress.', btn: 'Open Questions' },
      ].map((c) => (
        <section key={c.title} className="rounded-[28px] border-[1.5px] border-slate-300 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
          <div className="flex flex-1 items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <h2 className="text-[1.9rem] font-semibold tracking-[-0.04em] text-slate-950">{c.title}</h2>
              <p className="mt-3 min-h-[5.5rem] text-[15px] leading-7 text-slate-600">{c.desc}</p>
            </div>
          </div>
          <div className="mt-6">
            <button className="w-full rounded-full bg-[#151d2f] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#0f1625]">{c.btn}</button>
          </div>
        </section>
      ))}
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   2. PortalReview
   ═══════════════════════════════════════════════════════════════ */

export const PortalReview: React.FC = () => (
  <div className="space-y-8">
    <header className="rounded-[28px] border-[1.5px] border-slate-300 bg-white px-6 py-6 shadow-[0_12px_32px_rgba(15,23,42,0.09)] sm:px-7 sm:py-7">
      <div className="max-w-4xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">Review</p>
        <h1 className="mt-3 text-[2.2rem] font-semibold tracking-[-0.05em] text-slate-950 sm:text-[2.8rem]">Choose a Review Tool</h1>
        <p className="mt-3 max-w-3xl text-[15px] leading-7 text-slate-600 sm:text-base">Pick the kind of review you want to do next. Wrong Answer Journal and Blind Review stay separate, but live together in one review section.</p>
      </div>
    </header>

    <div className="grid gap-5 xl:grid-cols-2">
      {([
        { eyebrow: 'Review Tool', title: 'Wrong Answer Journal', desc: 'Turn misses into durable rules and track the reasoning problems most worth correcting.', btn: 'Open Wrong Answer Journal', icon: 'ClipboardList' as const },
        { eyebrow: 'Review Tool', title: 'Blind Review', desc: 'Capture untimed reasoning, answer changes, and justification in one place.', btn: 'Open Blind Review', icon: 'Layers' as const },
      ]).map((c) => (
        <section key={c.title} className="rounded-[28px] border-[1.5px] border-slate-300 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">{c.eyebrow}</p>
              <h2 className="mt-3 text-[2rem] font-semibold tracking-[-0.04em] text-slate-950">{c.title}</h2>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600">{c.desc}</p>
            </div>
            <span className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-slate-200 bg-slate-50 text-slate-600">
              {c.icon === 'ClipboardList' ? <ClipboardList className="h-[18px] w-[18px]" /> : <Layers className="h-[18px] w-[18px]" />}
            </span>
          </div>
          <div className="mt-5">
            <button className="rounded-full bg-[#1b2437] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#121a2b]">{c.btn}</button>
          </div>
        </section>
      ))}
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   3. PortalHomework
   ═══════════════════════════════════════════════════════════════ */

export const PortalHomework: React.FC = () => (
  <div className="space-y-8">
    <header className="rounded-[28px] border-[1.5px] border-slate-300 bg-white px-6 py-6 shadow-[0_12px_32px_rgba(15,23,42,0.09)] sm:px-7 sm:py-7">
      <div className="max-w-4xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">Homework</p>
        <h1 className="mt-3 text-[2.2rem] font-semibold tracking-[-0.05em] text-slate-950 sm:text-[2.8rem]">Homework</h1>
        <p className="mt-3 max-w-3xl text-[15px] leading-7 text-slate-600 sm:text-base">Review homework by session, then open the specific sets and supporting resources under each follow-up block.</p>
      </div>
    </header>
    <div className="rounded-[30px] border border-slate-200 bg-white px-6 py-10 text-center shadow-sm">
      <BookOpen className="mx-auto h-10 w-10 text-slate-300" />
      <p className="mt-4 text-base text-slate-500">No homework is live right now.</p>
    </div>
  </div>
);

/* ─── Homework sample data (shared by alternates) ──────────────── */

const hwSessions = [
  {
    id: 1,
    title: 'Argument Part & Method of Reasoning',
    date: 'March 27, 2026',
    daysAgo: '6 days ago',
    complete: false,
    sets: [
      { id: 'a', title: 'Argument Part – Easier Set', type: 'Argument Part', count: 10, reviewed: 10, status: 'completed' as const, diff: 'Easy' },
      { id: 'b', title: 'Argument Part – Medium Set', type: 'Argument Part', count: 10, reviewed: 4, status: 'in_progress' as const, diff: 'Medium' },
      { id: 'c', title: 'Argument Part – Harder Set', type: 'Argument Part', count: 10, reviewed: 0, status: 'assigned' as const, diff: 'Hard' },
    ],
    resources: [
      { label: 'Argument Part Primer (PDF)', type: 'pdf' as const },
      { label: 'LR Course – Module 5, Lesson 2', type: 'internal' as const },
    ],
    description: 'Finish the easier set first. If performance is strong (≤ 2 missed), move to medium. Email before starting hard set.',
  },
  {
    id: 2,
    title: 'Main Conclusion Reinforcement',
    date: 'March 20, 2026',
    daysAgo: '13 days ago',
    complete: true,
    sets: [
      { id: 'd', title: 'Main Conclusion – Full Set', type: 'Main Conclusion', count: 10, reviewed: 10, status: 'completed' as const, diff: 'Mixed' },
    ],
    resources: [
      { label: 'LR Course – Module 1, Lesson 4', type: 'internal' as const },
    ],
    description: 'Review only the one you missed (Q4 – trivial cause). Add to wrong answer journal.',
  },
];

const diffBadge = (d: string) =>
  d === 'Hard' ? 'border-rose-200 bg-rose-50 text-rose-700'
    : d === 'Medium' ? 'border-amber-200 bg-amber-50 text-amber-700'
    : d === 'Easy' ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
    : 'border-slate-200 bg-slate-100 text-slate-600';

const statusBadge = (s: string) =>
  s === 'completed' ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
    : s === 'in_progress' ? 'border-amber-200 bg-amber-50 text-amber-700'
    : 'border-slate-200 bg-slate-100 text-slate-600';

const statusLabel = (s: string) =>
  s === 'completed' ? 'Completed' : s === 'in_progress' ? 'In Progress' : 'Assigned';

const HwPageHeader: React.FC = () => (
  <header className="rounded-[28px] border-[1.5px] border-slate-300 bg-white px-6 py-6 shadow-[0_12px_32px_rgba(15,23,42,0.09)] sm:px-7 sm:py-7">
    <div className="max-w-4xl">
      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">Homework</p>
      <h1 className="mt-3 text-[2.2rem] font-semibold tracking-[-0.05em] text-slate-950 sm:text-[2.8rem]">Homework</h1>
      <p className="mt-3 max-w-3xl text-[15px] leading-7 text-slate-600 sm:text-base">Review homework by session, then open the specific sets and supporting resources under each follow-up block.</p>
    </div>
  </header>
);

/* ─── HOMEWORK ALTERNATE B: Timeline / Vertical Stepper ─── */
export const PortalHomeworkB: React.FC = () => (
  <div className="space-y-8">
    <HwPageHeader />
    <div className="relative">
      {/* Vertical timeline line */}
      <div className="absolute bottom-0 left-[23px] top-0 hidden w-px bg-slate-200 lg:block" />
      <div className="space-y-8">
        {hwSessions.map((session) => {
          const completedCount = session.sets.filter((s) => s.status === 'completed').length;
          const allDone = completedCount === session.sets.length;
          return (
            <div key={session.id} className="relative lg:pl-14">
              {/* Timeline dot */}
              <div className={`absolute left-0 top-6 hidden h-12 w-12 items-center justify-center rounded-full border-2 lg:flex ${allDone ? 'border-emerald-300 bg-emerald-50' : 'border-slate-300 bg-white'}`}>
                {allDone ? <CheckCircle2 className="h-5 w-5 text-emerald-600" /> : <Calendar className="h-5 w-5 text-slate-500" />}
              </div>
              <div className="rounded-[28px] border-[1.5px] border-slate-300 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
                <div className="px-6 py-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">{session.date}</span>
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700">{session.daysAgo}</span>
                    {allDone && <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-700">All Complete</span>}
                  </div>
                  <h2 className="mt-3 text-[1.55rem] font-semibold tracking-[-0.04em] text-slate-950">{session.title}</h2>
                  <p className="mt-2 max-w-3xl text-[15px] leading-7 text-slate-600">{session.description}</p>
                </div>
                {/* Materials strip (above assignments) */}
                {session.resources.length > 0 && (
                  <div className="border-t border-slate-100 px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {session.resources.map((r) => (
                        <button key={r.label} className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                          {r.type === 'pdf' ? <FileText className="h-3.5 w-3.5" /> : <ExternalLink className="h-3.5 w-3.5" />}
                          {r.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {/* Sets as cards */}
                <div className="border-t border-slate-100 px-6 py-5">
                  <div className="grid gap-4 lg:grid-cols-3">
                    {session.sets.map((set) => (
                      <div key={set.id} className={`rounded-[22px] border p-5 transition hover:shadow-md ${set.status === 'completed' ? 'border-emerald-200 bg-emerald-50/30' : 'border-slate-200 bg-[#fcfbf8]'}`}>
                        <div className="flex items-center justify-between">
                          <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${diffBadge(set.diff)}`}>{set.diff}</span>
                          <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${statusBadge(set.status)}`}>{statusLabel(set.status)}</span>
                        </div>
                        <h3 className="mt-3 text-base font-semibold text-slate-950">{set.title}</h3>
                        <div className="mt-3">
                          <div className="flex items-center justify-between text-xs text-slate-500">
                            <span>{set.reviewed}/{set.count} reviewed</span>
                            <span>{Math.round((set.reviewed / set.count) * 100)}%</span>
                          </div>
                          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                            <div className={`h-full rounded-full transition-all ${set.status === 'completed' ? 'bg-emerald-500' : 'bg-slate-900'}`} style={{ width: `${(set.reviewed / set.count) * 100}%` }} />
                          </div>
                        </div>
                        <button className={`mt-4 w-full rounded-full py-2.5 text-sm font-medium transition ${set.status === 'completed' ? 'border border-emerald-200 bg-white text-emerald-700 hover:bg-emerald-50' : 'bg-slate-950 text-white hover:bg-slate-800'}`}>
                          {set.status === 'completed' ? 'Review' : 'Open Set'}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);
/* ═══════════════════════════════════════════════════════════════
   4. PortalQuestions
   ═══════════════════════════════════════════════════════════════ */

const sampleLRQuestions = [
  { pt: '101', sec: '2', q: '1', type: 'Weaken', stimulus: 'A recent study of patients who switched from one brand of medication to another found that\u2026', diff: 'Hard', status: 'Taken' },
  { pt: '101', sec: '2', q: '2', type: 'MSS', stimulus: 'Scientists recently discovered that a particular species of deep-sea fish can survive in waters\u2026', diff: 'Easy', status: 'Taken' },
  { pt: '101', sec: '2', q: '3', type: 'Method of Reasoning', stimulus: 'Editorial: The town council claims that the new zoning laws will lead to increased\u2026', diff: 'Medium', status: '' },
  { pt: '119', sec: '1', q: '5', type: 'Sufficient Assumption', stimulus: 'If all of the laboratory samples are contaminated, then the results of the experiment cannot\u2026', diff: 'Hard', status: 'Saved' },
  { pt: '120', sec: '1', q: '7', type: 'Flaw', stimulus: 'Politician: My opponent claims that the proposed highway will damage local businesses. But\u2026', diff: 'Medium', status: 'Taken' },
];

const sampleRCPassages = [
  {
    pt: '101', sec: '3', passage: '1', title: 'African American Spirituals and Their Influence on American Music',
    questions: [
      { q: '1', type: 'Main Point', stimulus: 'Which one of the following most accurately expresses the main point of the passage?', diff: 'Medium', status: '' },
      { q: '2', type: 'Detail', stimulus: 'According to the passage, which of the following is true about the earliest\u2026', diff: 'Easy', status: 'Taken' },
      { q: '3', type: 'Inference', stimulus: 'It can be most reasonably inferred from the passage that the author would\u2026', diff: 'Hard', status: '' },
    ],
  },
  {
    pt: '101', sec: '3', passage: '2', title: 'Legal Realism and the Limits of Judicial Objectivity',
    questions: [
      { q: '8', type: 'Author Attitude', stimulus: 'The author\'s attitude toward the legal realists discussed in the passage can best be\u2026', diff: 'Medium', status: 'Taken' },
      { q: '9', type: 'Function', stimulus: 'The second paragraph of the passage primarily serves to\u2026', diff: 'Hard', status: '' },
    ],
  },
];

export const PortalQuestions: React.FC = () => {
  const [sourceType, setSourceType] = useState<'LR' | 'RC'>('LR');

  const diffColor = (d: string) =>
    d === 'Hard' ? 'border-slate-300 bg-slate-100 text-slate-700'
      : d === 'Medium' ? 'border-amber-200 bg-amber-50 text-amber-700'
      : 'border-emerald-200 bg-emerald-50 text-emerald-700';

  return (
    <div className="grid gap-5 xl:grid-cols-[260px_minmax(0,1fr)]">
      {/* LEFT: Filter sidebar */}
      <aside className="space-y-4 xl:sticky xl:top-6 xl:self-start">
        {/* Section toggle */}
        <div className="rounded-[22px] border-[1.5px] border-slate-300 bg-white p-4 shadow-sm">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Section</p>
          <div className="mt-3 grid grid-cols-2 rounded-[14px] bg-[#1b2437] p-0.5">
            <button onClick={() => setSourceType('LR')} className={`rounded-[12px] py-2.5 text-[11px] font-semibold transition ${sourceType === 'LR' ? 'bg-white text-slate-950 shadow-sm' : 'text-white/80'}`}>LR</button>
            <button onClick={() => setSourceType('RC')} className={`rounded-[12px] py-2.5 text-[11px] font-semibold transition ${sourceType === 'RC' ? 'bg-white text-slate-950 shadow-sm' : 'text-white/80'}`}>RC</button>
          </div>
        </div>

        {/* Filter controls */}
        <div className="rounded-[22px] border-[1.5px] border-slate-300 bg-white p-4 shadow-sm">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Filters</p>
          <div className="mt-3 space-y-2">
            {['Review Focus', 'PrepTest', sourceType === 'LR' ? 'Question Type' : 'Question Category', 'Difficulty', 'Seen Status'].map((f) => (
              <button key={f} className="flex h-10 w-full items-center justify-between rounded-[14px] border border-slate-200 bg-slate-50 px-3 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white">
                {f}
                <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
              </button>
            ))}
          </div>
          <button className="mt-3 w-full rounded-[14px] border border-slate-200 bg-white py-2.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50">Reset</button>
        </div>

        {/* Problem set tray */}
        <div className="rounded-[22px] border border-[#1b2437] bg-[#1b2437] p-4 text-white">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">Problem Set</p>
          <p className="mt-2 text-lg font-semibold">2 selected</p>
          <div className="mt-3 grid gap-2">
            <button className="h-9 rounded-full bg-white px-4 text-xs font-semibold text-[#1b2437] transition hover:bg-white/90">Start Timed</button>
            <button className="h-9 rounded-full border border-white/20 px-4 text-xs font-semibold text-white transition hover:bg-white/10">Start Untimed</button>
          </div>
        </div>
      </aside>

      {/* RIGHT: Questions */}
      <div className="space-y-4">
        {/* Header with search */}
        <div className="rounded-[28px] border-[1.5px] border-slate-300 bg-white px-6 py-5 shadow-[0_12px_32px_rgba(15,23,42,0.09)]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">Browse</p>
              <div className="mt-2 flex items-center gap-3">
                <h1 className="text-[2rem] font-semibold tracking-[-0.04em] text-slate-950">{sourceType === 'LR' ? 'Logical Reasoning' : 'Reading Comprehension'}</h1>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{sourceType === 'LR' ? '3,910' : '1,126'}</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{sourceType === 'LR' ? 'Showing 100 of 3,910 questions' : 'Showing 24 of 1,126 questions'}</p>
            </div>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Search…" className="h-11 w-[220px] rounded-[16px] border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none placeholder:text-slate-400 focus:border-slate-300" />
            </div>
          </div>
        </div>

        {/* Question list */}
        <div className="space-y-3">
          {sourceType === 'LR' ? (
            sampleLRQuestions.map((row) => (
              <div key={`${row.pt}-${row.sec}-${row.q}`} className="rounded-[20px] border-[1.5px] border-slate-300 bg-white px-5 py-4 shadow-[0_4px_16px_rgba(15,23,42,0.05)] transition cursor-pointer hover:border-slate-400 hover:shadow-md">
                <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-slate-100 text-xs font-bold text-slate-600">Q{row.q}</div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-950">{row.type}</p>
                      <p className="mt-0.5 truncate text-xs text-slate-500" title={row.stimulus}>PT {row.pt} · S{row.sec} · {row.stimulus}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-1.5">
                        <span className={`inline-flex rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${diffColor(row.diff)}`}>{row.diff}</span>
                        {row.status ? (
                          <span className={`inline-flex rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${row.status === 'Taken' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-amber-200 bg-amber-50 text-amber-700'}`}>{row.status}</span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1.5 shrink-0">
                    <button className="h-8 rounded-full border border-slate-200 bg-white px-3 text-[10px] font-medium text-slate-900 hover:bg-slate-100">Open</button>
                    <button className="h-8 rounded-full border border-slate-200 bg-white px-3 text-[10px] font-medium text-slate-900 hover:bg-slate-100">Explanation</button>
                    <button className="h-8 rounded-full bg-[#1b2437] px-3 text-[10px] font-medium text-white hover:bg-[#121a2b]">+ Set</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="grid gap-4 xl:grid-cols-2">
              {sampleRCPassages.map((p) => (
                <div key={`${p.pt}-${p.passage}`} className="rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-4">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    <span>PT {p.pt} · S{p.sec} · Passage {p.passage}</span>
                    <span className="rounded-full bg-slate-200/70 px-2 py-0.5 text-[10px] font-semibold text-slate-600">{p.questions.length} Qs</span>
                  </div>
                  <p className="mt-2 text-base font-semibold text-slate-950">{p.title}</p>
                  <div className="mt-3 space-y-2">
                    {p.questions.map((q) => (
                      <div key={`${p.pt}-${p.passage}-${q.q}`} className="flex items-center justify-between rounded-[14px] bg-white px-3 py-3 transition hover:bg-slate-50">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-slate-100 text-[11px] font-bold text-slate-600">Q{q.q}</div>
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-slate-950">{q.type}</p>
                            <p className="mt-0.5 truncate text-[11px] text-slate-500">{q.stimulus}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0 ml-3">
                          <span className={`inline-flex rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.08em] ${diffColor(q.diff)}`}>{q.diff}</span>
                          {q.status ? (
                            <span className={`inline-flex rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.08em] ${q.status === 'Taken' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-amber-200 bg-amber-50 text-amber-700'}`}>{q.status}</span>
                          ) : null}
                          <button className="h-7 rounded-full border border-slate-200 bg-white px-2.5 text-[10px] font-medium text-slate-900 hover:bg-slate-100">Open</button>
                          <button className="h-7 rounded-full bg-[#1b2437] px-2.5 text-[10px] font-medium text-white hover:bg-[#121a2b]">+ Set</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   5. PortalPastSessions
   ═══════════════════════════════════════════════════════════════ */

interface PastSessionDetail {
  id: string;
  title: string;
  date: string;
  tags: string[];
  readTime: string;
  subtitle: string;
  intro: string;
  breakdownSections: Array<{ title: string; body: string[] }>;
  keyTakeaways: string[];
  homework: { instructions: string[]; links?: Array<{ label: string }> };
  nextFocus: { priority: string; description: string };
  tone: string;
  attachments: Array<{ label: string; type: 'pdf' | 'miro' | 'link' }>;
}

const pastSessions: PastSessionDetail[] = [
  {
    id: '1',
    title: 'Main Conclusion Review and Method Transition',
    date: 'Mar 27, 2026',
    tags: ['Main Conclusion', 'Argument Part', 'Method/Flaw'],
    readTime: '4 min read',
    subtitle: 'A quick recap of the session and the clearest next steps.',
    intro: 'In this session, you showed that your underlying argument analysis is improving in a meaningful way, especially on main conclusion questions. From there, we started the next phase of the work: getting you more comfortable with the abstract wording used in argument part, method, and flaw questions so that your analysis transfers more cleanly into answer choice selection.',
    breakdownSections: [
      {
        title: 'Main Conclusion Work',
        body: [
          'Your main conclusion performance was strong overall. The main issue we identified on your miss was not really a failure to prephrase, but a failure to stay strict about wording. In particular, we discussed the difference between something being a trivial cause and not being a cause at all. The key takeaway was that when the author\'s wording is clear, you should not give answer choices extra interpretive leeway that changes the plain meaning of the statement.',
          'We also looked at an example where your prephrase was directionally useful but a little too broad. There, the lesson was that your initial wording can still help as long as you stay flexible and check whether the correct answer is a more specific version that the stimulus still supports directly.',
        ],
      },
      {
        title: 'Argument Part and Role Language',
        body: [
          'On argument part questions, your structural understanding was generally solid. You usually knew what was functioning as background, support, or conclusion. The harder part was translating that understanding into LSAT role language when the answer choices described what a statement does rather than simply labeling it.',
          'We worked on the idea that, on harder role questions, it is often more useful to identify the target of support first and then evaluate the wording of the answer choices. We also discussed that saying "this is not my prephrase" is sometimes too vague to be a reliable removal standard. On tougher questions, it helps to identify what a wrong answer is actually doing, even if it is only subtly off.',
        ],
      },
      {
        title: 'Method and Flaw Transition',
        body: [
          'In the second half of the session, we shifted into method and flaw. You did well whenever you first isolated the conclusion and major support, especially on cleaner method questions. The main skill we are now building is your ability to break down abstract answer choices into smaller parts and compare those parts against the actual reasoning in the stimulus.',
          'We also touched on several important reasoning patterns, including arbitrary selection, group versus individual description, sufficient-versus-necessary confusion, and proof by contradiction. The broad takeaway is that your accuracy improves when you stay close to the exact language of the stimulus and slow down enough to unpack what abstract answer choices are truly claiming.',
        ],
      },
    ],
    keyTakeaways: [
      'You showed strong overall main conclusion performance, with your main issue coming from a wording shift rather than a deeper structural problem.',
      'Your argument analysis is in a good place, and the next major area of growth is method and flaw description language on medium and harder questions.',
    ],
    homework: {
      instructions: [
        'Complete the easier method/flaw set first, then move to the medium set if your performance there is solid. Let me know how the medium set goes before moving into the hardest set.',
        'Add missed questions to the wrong answer journal when possible. If direct editing is not available yet, use blind review notes or email me the questions you want reviewed before the next session.',
      ],
    },
    nextFocus: {
      priority: 'Method and flaw wording precision',
      description: 'You are making real progress where it matters most. Your core argument reading is getting stronger, and that gives us a very good foundation. The next step is to make your analysis more portable across harder LR wording, so that when the test describes reasoning in a more abstract way, you can still stay calm, translate it clearly, and trust what the text is actually doing.',
    },
    tone: 'You are making real progress where it matters most.',
    attachments: [],
  },
  {
    id: '2',
    title: 'Diagnostic Review & LR Study Plan',
    date: 'Mar 20, 2026',
    tags: ['Diagnostic Review', 'Logical Reasoning', 'Study Plan'],
    readTime: '3 min read',
    subtitle: 'A quick recap of the session and the clearest next steps.',
    intro: 'Yesterday was a really productive session. Breaking down your most recent LSAT gave us a clearer picture of your current approach, and it surfaced several useful insights that can accelerate your improvement over the next few weeks.',
    breakdownSections: [
      {
        title: 'What We Learned From the Diagnostic',
        body: [
          'Your current focus on accuracy gives you a solid starting point for improvement, because it shows that you are willing to slow down and engage seriously with the argument in front of you.',
          'The biggest opportunity now is making the method for each question type feel clearer and more automatic so that your confidence and pace can improve together.',
        ],
      },
      {
        title: 'Building the Foundation',
        body: [
          'We are starting with Main Conclusion and Argument Part because they are the right foundation for the next phase of your Logical Reasoning work.',
          'As these structures become more automatic, you will be in a much stronger position to move into Method of Reasoning and Flaw with momentum and clearer pattern recognition.',
        ],
      },
      {
        title: 'Updating Your Journal',
        body: [
          'I\'ll handle the first round of Wrong Answer Journal updates from this session so the most important takeaways are captured clearly and efficiently.',
          'Your job is to review those notes, keep using your blind review log to revisit the questions we discussed, and use the journal as a way to reinforce the patterns that came out of this diagnostic.',
        ],
      },
    ],
    keyTakeaways: [
      'We used your diagnostic to identify the patterns that are most worth strengthening first.',
      'Your accuracy-first approach gives you a solid foundation to build on as your method becomes more automatic.',
      'Main Conclusion and Argument Part are the right first focus because they sharpen core argument-structure recognition.',
      'The work from this session gives you a clear path into Method of Reasoning and Flaw once this foundation is steadier.',
    ],
    homework: {
      instructions: [
        'Read Logical Reasoning \u2192 Main Conclusion, starting with Introduction & Core Concepts and Step-by-Step Guide.',
        'Complete the Main Conclusion problem set and use those Main Conclusion lessons as your reference point while you work.',
      ],
      links: [
        { label: 'Introduction to Main Conclusion' },
        { label: 'Step-by-Step Guide: Main Conclusion' },
      ],
    },
    nextFocus: {
      priority: 'Method of Reasoning and Flaw once the Main Conclusion and Argument Part foundation feels steadier.',
      description: 'You got a lot of value out of this session. Keep building clarity and consistency on these core LR structures, and you should feel the payoff both in confidence and in timing.',
    },
    tone: 'Keep building clarity and consistency on these core LR structures.',
    attachments: [
      { label: 'Open Miro board', type: 'miro' as const },
    ],
  },
];

export const PortalPastSessions: React.FC = () => {
  const [activeId, setActiveId] = useState('1');
  const active = pastSessions.find((s) => s.id === activeId) ?? pastSessions[0];

  return (
    <div className="space-y-5">
      {/* Outer glass container */}
      <div className="relative overflow-hidden rounded-[32px] border-[1.5px] border-slate-300 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 p-5 shadow-[0_12px_40px_rgba(15,23,42,0.10)]">
        {/* Decorative teal gradient orbs */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-teal-200/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-teal-100/25 blur-3xl" />
        <div className="pointer-events-none absolute right-1/3 top-1/2 h-40 w-40 rounded-full bg-emerald-100/15 blur-3xl" />

        <div className="relative z-10">
          {/* Glass header bar */}
          <div className="flex flex-wrap items-center gap-4 rounded-[28px] border-[1.5px] border-slate-300 bg-white/90 px-6 py-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-br from-teal-100 to-teal-50 shadow-[0_4px_12px_rgba(20,184,166,0.15)]">
              <MessageSquare className="h-5 w-5 text-teal-600" />
            </div>
            <div>
              <h1 className="text-[1.4rem] font-semibold tracking-[-0.03em] text-slate-950">Past Sessions</h1>
              <p className="text-[13px] text-slate-500">Session recaps, takeaways, and next steps</p>
            </div>
            <div className="ml-auto flex gap-3">
              <div className="rounded-[14px] bg-teal-50/60 px-3 py-3 text-center">
                <p className="text-[1.1rem] font-semibold text-teal-700">{pastSessions.length}</p>
                <p className="text-[10px] font-medium text-teal-600/70">Sessions</p>
              </div>
              <div className="rounded-[14px] bg-slate-50/80 px-3 py-3 text-center">
                <p className="text-[1.1rem] font-semibold text-slate-700">Mar 27</p>
                <p className="text-[10px] font-medium text-slate-500/70">Latest</p>
              </div>
              <div className="rounded-[14px] bg-amber-50/60 px-3 py-3 text-center">
                <p className="text-[1.1rem] font-semibold text-amber-700">3.5</p>
                <p className="text-[10px] font-medium text-amber-600/70">Avg Read</p>
              </div>
            </div>
          </div>

          {/* Session selector cards */}
          <div className="mt-5 grid gap-4 xl:grid-cols-2">
            {pastSessions.map((session) => (
              <button
                key={session.id}
                onClick={() => setActiveId(session.id)}
                className={`rounded-[24px] border-[1.5px] bg-gradient-to-br from-teal-50/30 to-white p-5 text-left shadow-[0_4px_16px_rgba(20,184,166,0.04)] transition hover:shadow-[0_18px_40px_rgba(20,184,166,0.10)] ${
                  session.id === activeId
                    ? 'border-teal-400 ring-2 ring-teal-300/50'
                    : 'border-teal-300'
                }`}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-600/60">{session.date}</p>
                <h2 className="mt-1.5 text-[1.15rem] font-semibold tracking-[-0.02em] text-slate-950">{session.title}</h2>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {session.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-full border border-teal-200/50 bg-teal-50/60 px-2.5 py-0.5 text-[10px] font-semibold text-teal-700">{tag}</span>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-[11px] text-slate-400">{session.readTime}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Selected session detail */}
          <div className="mt-5 rounded-[26px] border-[1.5px] border-slate-300 bg-white/90 shadow-[0_12px_32px_rgba(15,23,42,0.09)] backdrop-blur-sm">
            {/* Header band */}
            <div className="rounded-t-[26px] border-b border-slate-100 bg-white/90 px-6 py-5">
              <div className="flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">{active.date}</p>
                <span className="text-[11px] text-slate-300">&middot;</span>
                <Clock className="h-3.5 w-3.5 text-slate-400" />
                <span className="text-[11px] text-slate-400">{active.readTime}</span>
              </div>
              <h2 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.03em] text-slate-950">{active.title}</h2>
              <p className="mt-1.5 text-[14px] text-slate-500">{active.subtitle}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {active.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center rounded-full border border-teal-200/50 bg-teal-50/60 px-2.5 py-0.5 text-[10px] font-semibold text-teal-700">{tag}</span>
                ))}
                <button className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-medium text-slate-600 transition hover:bg-slate-50">
                  <FileText className="h-3 w-3" />
                  View PDF
                </button>
              </div>
            </div>

            {/* Body content */}
            <div className="space-y-6 px-6 py-6">
              {/* Session Breakdown */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-teal-600/70">Session Breakdown</p>
                <p className="mt-3 text-[15px] leading-8 text-slate-600">{active.intro}</p>
                {active.breakdownSections.map((section) => (
                  <div key={section.title} className="mt-5">
                    <h3 className="text-[15px] font-semibold text-slate-950">{section.title}</h3>
                    {section.body.map((paragraph, i) => (
                      <p key={i} className="mt-2 text-[14px] leading-7 text-slate-600">{paragraph}</p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Key Takeaways */}
              <div className="rounded-[18px] border border-teal-200/50 bg-gradient-to-br from-teal-50/60 to-emerald-50/30 p-5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-600" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-teal-600/70">Key Takeaways</p>
                </div>
                <ul className="mt-3 space-y-2">
                  {active.keyTakeaways.map((t, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-500" />
                      <span className="text-[14px] leading-7 text-slate-700">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Before the Next Session */}
              <div className="rounded-[18px] border border-amber-200/50 bg-gradient-to-br from-amber-50/60 to-orange-50/30 p-5">
                <div className="flex items-center gap-2">
                  <ListChecks className="h-4 w-4 text-amber-600" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-600/70">Before the Next Session</p>
                </div>
                <div className="mt-3 space-y-3">
                  {active.homework.instructions.map((instruction, i) => (
                    <p key={i} className="text-[14px] leading-7 text-slate-700">{instruction}</p>
                  ))}
                </div>
                {active.homework.links && active.homework.links.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-600/50">Linked Lessons</p>
                    <div className="flex flex-wrap gap-2">
                      {active.homework.links.map((link) => (
                        <button key={link.label} className="flex items-center gap-2 rounded-full border border-amber-200/60 bg-white px-4 py-2 text-sm text-amber-800 transition hover:bg-amber-50">
                          <ExternalLink className="h-3.5 w-3.5" />
                          {link.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <button className="mt-5 rounded-full bg-[#182236] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#121a2b]">View Homework</button>
              </div>

              {/* Next Focus */}
              <div className="rounded-[18px] border border-indigo-100/60 bg-indigo-50/30 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-indigo-500/70">Next Focus</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-400/60">Upcoming Priority</p>
                <p className="mt-2 text-[15px] font-semibold text-slate-800">{active.nextFocus.priority}</p>
                <p className="mt-3 text-[14px] leading-7 text-slate-600">{active.nextFocus.description}</p>
              </div>

              {/* Attachments */}
              {active.attachments.length > 0 ? (
                <div className="rounded-[18px] border border-slate-200/50 bg-white p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">Attachments</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {active.attachments.map((a) => (
                      <button key={a.label} className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                        {a.type === 'pdf' ? <Download className="h-3.5 w-3.5" /> : a.type === 'miro' ? <ExternalLink className="h-3.5 w-3.5" /> : <ArrowUpRight className="h-3.5 w-3.5" />}
                        {a.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="rounded-[18px] border border-slate-200/50 bg-white/50 px-5 py-4 text-center">
                  <p className="text-[12px] text-slate-400">No attachments were added for this recap.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   DASHBOARD ALTERNATES (A–E)
   Same content, 5 different layout philosophies.
   ═══════════════════════════════════════════════════════════════ */

/* ─── Alternate A: "Action Bar" ─────────────────────────────────
   Full-width hero with the session focus as the dominant element.
   Next session + homework compressed into a single row of
   action tiles beneath. Quick links become icon-only buttons
   in a bottom toolbar strip.
   ───────────────────────────────────────────────────────────── */

export const PortalDashboardA: React.FC = () => (
  <div className="space-y-5">
    {/* Hero: Prior Session Focus — full bleed dark card */}
    <div className="relative overflow-hidden rounded-[32px] bg-[#0e1735] px-7 py-8 text-white sm:px-10 sm:py-10">
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/[0.03]" />
      <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-white/[0.02]" />
      <div className="relative max-w-3xl">
        <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/50">Welcome back</p>
        <h1 className="mt-3 text-[2.4rem] font-semibold leading-[0.96] tracking-[-0.06em] sm:text-[3.2rem]">Good Morning, Annabelle</h1>
        <div className="mt-6 inline-flex rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">Prior Session Focus</div>
        <h2 className="mt-4 text-[1.6rem] font-semibold tracking-[-0.04em] text-white/90 sm:text-[2rem]">RC Rules for Timing and Synthesis</h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/60">Refined your RC process around paragraph roles, prephrasing, answer-choice comparison, and a steadier Day A / Day B study rhythm.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0e1735] transition hover:bg-white/90">Review Prior Session</button>
          <button className="rounded-full border border-white/20 bg-white/[0.08] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.14]">Book Next Session</button>
        </div>
      </div>
    </div>

    {/* Action tiles — single row */}
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {/* Next session tile */}
      <div className="flex flex-col rounded-[24px] border-[1.5px] border-slate-300 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#0f172a] text-white"><Calendar className="h-[18px] w-[18px]" /></span>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Next Session</p>
            <p className="mt-1 text-sm font-semibold text-slate-950">Not booked</p>
          </div>
        </div>
        <div className="mt-4 grid gap-2">
          <button className="h-10 rounded-full bg-[#040c28] text-[13px] font-medium text-white transition hover:bg-[#0b1536]">Book Session</button>
          <button className="h-10 rounded-full border border-slate-200 text-[13px] font-medium text-slate-700 transition hover:bg-slate-50">Email Germaine</button>
        </div>
      </div>

      {/* Homework tiles */}
      {[
        { title: 'Flaw Drill Set', meta: '12 questions', icon: Target },
        { title: 'Strengthen & Weaken', meta: '8 questions', icon: Zap },
        { title: 'Causal Reasoning Notes', meta: 'PDF Resource', icon: FileText },
      ].map((c) => (
        <div key={c.title} className="flex flex-col rounded-[24px] border-[1.5px] border-slate-300 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-slate-100 text-slate-700"><c.icon className="h-[18px] w-[18px]" /></span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Homework</p>
              <p className="mt-1 text-sm font-semibold text-slate-950">{c.title}</p>
            </div>
          </div>
          <p className="mt-3 flex-1 text-xs text-slate-500">{c.meta}</p>
          <button className="mt-4 h-10 rounded-full border border-slate-200 bg-white text-[13px] font-medium text-slate-700 transition hover:bg-slate-50">Open</button>
        </div>
      ))}
    </div>

    {/* Bottom toolbar: quick links as icon+label buttons */}
    <div className="flex flex-wrap items-center gap-3 rounded-[22px] border border-slate-200/80 bg-slate-50 px-5 py-4">
      <p className="mr-auto text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">Quick Links</p>
      {[
        { label: 'LR Course', icon: GraduationCap },
        { label: 'RC Course', icon: BookOpen },
        { label: 'Questions', icon: Search },
        { label: 'WAJ', icon: ClipboardList },
        { label: 'Blind Review', icon: Layers },
      ].map((l) => (
        <button key={l.label} className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100">
          <l.icon className="h-3.5 w-3.5 text-slate-500" />
          {l.label}
        </button>
      ))}
    </div>
  </div>
);

/* ─── Alternate B: "Two-Panel Split" ───────────────────────────
   Left 60%: stacked session cards (prior on top, next below).
   Right 40%: homework list + quick links in a single column.
   No separate page header — name appears inline on the left.
   ───────────────────────────────────────────────────────────── */

export const PortalDashboardB: React.FC = () => (
  <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_400px]">
    {/* LEFT: Session column */}
    <div className="space-y-5">
      {/* Inline welcome */}
      <div className="rounded-[28px] border-[1.5px] border-slate-300 bg-white px-6 py-5 shadow-[0_12px_32px_rgba(15,23,42,0.09)]">
        <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-400">Welcome</p>
        <h1 className="mt-2 text-[1.8rem] font-semibold tracking-[-0.045em] text-slate-950 sm:text-[2.2rem]">Good Morning, Annabelle</h1>
      </div>

      {/* Prior Session — large card */}
      <div className="rounded-[28px] border-[1.5px] border-slate-300 bg-white px-7 py-7 shadow-[0_12px_32px_rgba(15,23,42,0.09)]">
        <div className="inline-flex rounded-full border border-[#d3deef] bg-[#f7fbff] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2d4c86]">Prior Session Focus</div>
        <h2 className="mt-5 text-[2.2rem] font-semibold leading-[0.96] tracking-[-0.06em] text-[#0e1735] sm:text-[2.8rem]">RC Rules for Timing and Synthesis</h2>
        <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#91a6ca]">APR 1, 2026</p>
        <p className="mt-4 max-w-3xl text-[15px] leading-7 text-[#536b92]">Refined your RC process around paragraph roles, prephrasing, answer-choice comparison, and a steadier Day A / Day B study rhythm.</p>
        <div className="mt-6">
          <button className="rounded-full border border-slate-200 bg-white px-8 py-4 text-[15px] text-[#223252] transition hover:bg-slate-50">Review Prior Session</button>
        </div>
      </div>

      {/* Next Session — horizontal card */}
      <div className="overflow-hidden rounded-[28px] border-[1.5px] border-slate-300 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.09)]">
        <div className="grid grid-cols-[96px_minmax(0,1fr)]">
          <div className="flex flex-col items-center justify-center bg-[#0f172a] px-3 py-6 text-white">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/78">NEXT</p>
            <p className="mt-2 text-[3.2rem] font-semibold tracking-[-0.08em] leading-none">&mdash;</p>
          </div>
          <div className="flex items-center justify-between gap-4 px-5 py-5">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-slate-500">Next Session</p>
              <p className="mt-2 text-[1.2rem] font-semibold tracking-[-0.04em] text-[#0e1735]">No session booked</p>
            </div>
            <div className="flex gap-2">
              <button className="h-11 rounded-full bg-[#040c28] px-5 text-sm text-white transition hover:bg-[#0b1536]">Book Session</button>
              <button className="h-11 rounded-full border border-slate-200 bg-white px-5 text-sm text-[#223252] transition hover:bg-slate-50">Email Germaine</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* RIGHT: Homework + quick links column */}
    <div className="space-y-5">
      {/* Homework */}
      <div className="rounded-[28px] border-[1.5px] border-slate-300 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">Homework</p>
        <h2 className="mt-2 text-[1.4rem] font-semibold tracking-[-0.03em] text-slate-950">Current Homework</h2>
        <div className="mt-4 space-y-3">
          {[
            { title: 'Flaw Drill Set', desc: '12 targeted flaw questions', icon: Target },
            { title: 'Strengthen & Weaken Review', desc: '8 mixed questions', icon: Zap },
            { title: 'Causal Reasoning Notes', desc: 'PDF Resource', icon: FileText },
          ].map((c) => (
            <button key={c.title} className="flex w-full items-center gap-3 rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-4 text-left transition hover:border-slate-300 hover:bg-white">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-white text-slate-600 shadow-sm"><c.icon className="h-[18px] w-[18px]" /></span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-950">{c.title}</p>
                <p className="mt-0.5 text-xs text-slate-500">{c.desc}</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-slate-400" />
            </button>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="rounded-[28px] border-[1.5px] border-slate-300 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">Quick Links</p>
        <div className="mt-4 grid gap-2">
          {[
            { label: 'Logical Reasoning', icon: GraduationCap },
            { label: 'Reading Comprehension', icon: BookOpen },
            { label: 'Browse Questions', icon: Search },
            { label: 'WAJ', icon: ClipboardList },
            { label: 'Blind Review', icon: Layers },
          ].map((l) => (
            <button key={l.label} className="flex items-center gap-3 rounded-[16px] border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white">
              <l.icon className="h-4 w-4 text-slate-500" />
              {l.label}
              <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-slate-400" />
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ─── Alternate C: "Timeline Feed" ─────────────────────────────
   Vertical feed layout — each block is a chronological entry
   with a left-side date/icon gutter and right-side content.
   Feels like a focused activity log.
   ───────────────────────────────────────────────────────────── */

export const PortalDashboardC: React.FC = () => (
  <div className="mx-auto max-w-[860px] space-y-0">
    {/* Header — centered */}
    <div className="pb-8 text-center">
      <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-slate-400">Student Portal</p>
      <h1 className="mt-2 text-[2rem] font-semibold tracking-[-0.05em] text-slate-950 sm:text-[2.6rem]">Good Morning, Annabelle</h1>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">Your study timeline — past work, current tasks, and what's next.</p>
    </div>

    {/* Timeline entries */}
    <div className="relative border-l-2 border-slate-200 pl-8 space-y-6">
      {/* Prior session entry */}
      <div className="relative">
        <div className="absolute -left-[41px] flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-slate-600">
          <CheckCircle2 className="h-5 w-5" />
        </div>
        <div className="rounded-[28px] border-[1.5px] border-slate-300 bg-white px-6 py-6 shadow-[0_12px_32px_rgba(15,23,42,0.09)]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#d3deef] bg-[#f7fbff] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#2d4c86]">Prior Session</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">APR 1, 2026</span>
          </div>
          <h2 className="mt-4 text-[1.8rem] font-semibold leading-[0.96] tracking-[-0.05em] text-[#0e1735] sm:text-[2.2rem]">RC Rules for Timing and Synthesis</h2>
          <p className="mt-3 text-[15px] leading-7 text-[#536b92]">Refined your RC process around paragraph roles, prephrasing, answer-choice comparison, and a steadier Day A / Day B study rhythm.</p>
          <button className="mt-5 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-[#223252] transition hover:bg-slate-50">Review Prior Session</button>
        </div>
      </div>

      {/* Homework entry */}
      <div className="relative">
        <div className="absolute -left-[41px] flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-slate-600">
          <ListChecks className="h-5 w-5" />
        </div>
        <div className="rounded-[28px] border-[1.5px] border-slate-300 bg-white px-6 py-6 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">Current Homework</p>
          <div className="mt-4 space-y-3">
            {[
              { title: 'Flaw Drill Set', meta: '12 questions' },
              { title: 'Strengthen & Weaken Review', meta: '8 questions' },
              { title: 'Read: Causal Reasoning Notes', meta: 'PDF Resource' },
            ].map((c) => (
              <div key={c.title} className="flex items-center justify-between rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-slate-950">{c.title}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{c.meta}</p>
                </div>
                <button className="h-8 rounded-full border border-slate-200 bg-white px-3 text-[10px] font-medium text-slate-900 transition hover:bg-slate-100">Open</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next session entry */}
      <div className="relative">
        <div className="absolute -left-[41px] flex h-10 w-10 items-center justify-center rounded-full border-2 border-amber-300 bg-amber-50 text-amber-600">
          <Calendar className="h-5 w-5" />
        </div>
        <div className="rounded-[28px] border-[1.5px] border-slate-300 bg-white px-6 py-6 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-500">Up Next</p>
          <p className="mt-3 text-[1.3rem] font-semibold tracking-[-0.04em] text-[#0e1735]">No session booked</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button className="h-11 rounded-full bg-[#040c28] px-5 text-sm text-white transition hover:bg-[#0b1536]">Book Session</button>
            <button className="h-11 rounded-full border border-slate-200 bg-white px-5 text-sm text-[#223252] transition hover:bg-slate-50">Email Germaine</button>
          </div>
        </div>
      </div>

      {/* Quick links entry */}
      <div className="relative">
        <div className="absolute -left-[41px] flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-slate-600">
          <ArrowUpRight className="h-5 w-5" />
        </div>
        <div className="rounded-[28px] border-[1.5px] border-slate-300 bg-white px-6 py-5 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">Jump To</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {['LR Course', 'RC Course', 'Questions', 'WAJ', 'Blind Review'].map((l) => (
              <button key={l} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white">{l}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Alternate D: "Stats-Forward Bento" ───────────────────────
   Bento-grid layout with stat callouts. Prior session is one
   large tile, homework + next session + stats fill a 2×3 grid.
   Emphasizes progress metrics alongside content.
   ───────────────────────────────────────────────────────────── */

export const PortalDashboardD: React.FC = () => (
  <div className="space-y-5">
    {/* Compact header */}
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-400">Student Portal</p>
        <h1 className="mt-1 text-[1.8rem] font-semibold tracking-[-0.045em] text-slate-950 sm:text-[2.2rem]">Good Morning, Annabelle</h1>
      </div>
      <div className="flex gap-2">
        <button className="h-10 rounded-full bg-[#040c28] px-5 text-sm font-medium text-white transition hover:bg-[#0b1536]">Book Session</button>
        <button className="h-10 rounded-full border border-slate-200 bg-white px-5 text-sm font-medium text-[#223252] transition hover:bg-slate-50">Email Germaine</button>
      </div>
    </div>

    {/* Bento grid */}
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {/* Prior session — spans 2 cols */}
      <div className="flex flex-col rounded-[28px] border-[1.5px] border-slate-300 bg-white px-7 py-6 shadow-[0_12px_32px_rgba(15,23,42,0.09)] xl:col-span-2 xl:row-span-2">
        <div className="inline-flex w-fit rounded-full border border-[#d3deef] bg-[#f7fbff] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2d4c86]">Prior Session Focus</div>
        <h2 className="mt-5 text-[2.05rem] font-semibold leading-[0.96] tracking-[-0.06em] text-[#0e1735] sm:text-[2.6rem]">RC Rules for Timing and Synthesis</h2>
        <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#91a6ca]">APR 1, 2026</p>
        <p className="mt-4 max-w-3xl text-[15px] leading-7 text-[#536b92]">Refined your RC process around paragraph roles, prephrasing, answer-choice comparison, and a steadier Day A / Day B study rhythm.</p>
        <div className="mt-auto pt-6">
          <button className="rounded-full border border-slate-200 bg-white px-8 py-4 text-[15px] text-[#223252] transition hover:bg-slate-50">Review Prior Session</button>
        </div>
      </div>

      {/* Stat tiles */}
      <div className="rounded-[24px] border-[1.5px] border-slate-300 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-emerald-50 text-emerald-600"><BarChart3 className="h-[18px] w-[18px]" /></span>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Sessions</p>
        </div>
        <p className="mt-4 text-[2.8rem] font-semibold tracking-[-0.06em] text-slate-950">14</p>
        <p className="mt-1 text-xs text-slate-500">Total sessions completed</p>
      </div>

      <div className="rounded-[24px] border-[1.5px] border-slate-300 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-blue-50 text-blue-600"><Target className="h-[18px] w-[18px]" /></span>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Questions</p>
        </div>
        <p className="mt-4 text-[2.8rem] font-semibold tracking-[-0.06em] text-slate-950">247</p>
        <p className="mt-1 text-xs text-slate-500">Questions attempted</p>
      </div>

      {/* Homework cards in remaining cells */}
      {[
        { title: 'Flaw Drill Set', meta: '12 questions', icon: Target },
        { title: 'Strengthen & Weaken', meta: '8 questions', icon: Zap },
        { title: 'Causal Reasoning Notes', meta: 'PDF Resource', icon: FileText },
      ].map((c) => (
        <div key={c.title} className="flex flex-col rounded-[24px] border-[1.5px] border-slate-300 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-slate-100 text-slate-600"><c.icon className="h-[18px] w-[18px]" /></span>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Homework</p>
          </div>
          <p className="mt-3 text-[1.1rem] font-semibold tracking-[-0.02em] text-slate-950">{c.title}</p>
          <p className="mt-1 text-xs text-slate-500">{c.meta}</p>
          <button className="mt-auto pt-4 self-start rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50">Open</button>
        </div>
      ))}
    </div>

    {/* Quick links row */}
    <div className="grid gap-3 sm:grid-cols-3">
      {[
        { title: 'Logical Reasoning', desc: 'Study arguments and question types', btn: 'Open LR' },
        { title: 'Reading Comprehension', desc: 'Work on passages and inference', btn: 'Open RC' },
        { title: 'Browse Questions', desc: 'Search and build problem sets', btn: 'Open Questions' },
      ].map((c) => (
        <div key={c.title} className="rounded-[24px] border-[1.5px] border-slate-300 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
          <h3 className="text-base font-semibold text-slate-950">{c.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{c.desc}</p>
          <button className="mt-4 rounded-full bg-[#151d2f] px-5 py-2.5 text-xs font-medium text-white transition hover:bg-[#0f1625]">{c.btn}</button>
        </div>
      ))}
    </div>
  </div>
);

/* ─── Alternate E: "Minimal Command Center" ────────────────────
   Stripped-down, dense layout. No large hero. A single row of
   status indicators at top, then everything in a tight 2-column
   card layout. Maximum information density, minimum scroll.
   ───────────────────────────────────────────────────────────── */

export const PortalDashboardE: React.FC = () => (
  <div className="space-y-4">
    {/* Top status bar */}
    <div className="flex flex-wrap items-center gap-4 rounded-[22px] border-[1.5px] border-slate-300 bg-white px-5 py-4 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
      <div className="min-w-0">
        <h1 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">Annabelle</h1>
        <p className="text-xs text-slate-500">Student Portal</p>
      </div>
      <div className="ml-auto flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
          <Clock className="h-3 w-3" /> Last session: Apr 1
        </div>
        <div className="flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-700">
          <Calendar className="h-3 w-3" /> Next: Not booked
        </div>
        <button className="h-8 rounded-full bg-[#040c28] px-4 text-[11px] font-semibold text-white transition hover:bg-[#0b1536]">Book Session</button>
      </div>
    </div>

    {/* Two-column main area */}
    <div className="grid gap-4 xl:grid-cols-2">
      {/* Prior Session */}
      <div className="rounded-[28px] border-[1.5px] border-slate-300 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.09)]">
        <div className="flex items-start justify-between gap-3">
          <div className="inline-flex rounded-full border border-[#d3deef] bg-[#f7fbff] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#2d4c86]">Prior Session</div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">APR 1</span>
        </div>
        <h2 className="mt-4 text-[1.6rem] font-semibold leading-[0.96] tracking-[-0.05em] text-[#0e1735]">RC Rules for Timing and Synthesis</h2>
        <p className="mt-3 text-sm leading-7 text-[#536b92]">Refined your RC process around paragraph roles, prephrasing, answer-choice comparison, and a steadier Day A / Day B study rhythm.</p>
        <button className="mt-5 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-[#223252] transition hover:bg-slate-50">Review Session</button>
      </div>

      {/* Homework */}
      <div className="rounded-[28px] border-[1.5px] border-slate-300 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">Current Homework</p>
          <span className="rounded-full bg-[#0f172a] px-2.5 py-1 text-[10px] font-semibold text-white">3</span>
        </div>
        <div className="mt-4 space-y-2">
          {[
            { title: 'Flaw Drill Set', meta: '12 questions' },
            { title: 'Strengthen & Weaken Review', meta: '8 questions' },
            { title: 'Causal Reasoning Notes', meta: 'PDF Resource' },
          ].map((c) => (
            <button key={c.title} className="flex w-full items-center justify-between rounded-[16px] border border-slate-200 bg-slate-50 px-4 py-3 text-left transition hover:border-slate-300 hover:bg-white">
              <div>
                <p className="text-sm font-semibold text-slate-950">{c.title}</p>
                <p className="text-xs text-slate-500">{c.meta}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </button>
          ))}
        </div>
      </div>

      {/* Next Session */}
      <div className="rounded-[28px] border-[1.5px] border-slate-300 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">Next Session</p>
        <p className="mt-3 text-[1.3rem] font-semibold tracking-[-0.04em] text-[#0e1735]">No session booked</p>
        <p className="mt-2 text-sm text-slate-500">Schedule your next tutoring session to keep momentum.</p>
        <div className="mt-4 flex gap-2">
          <button className="h-11 rounded-full bg-[#040c28] px-5 text-sm text-white transition hover:bg-[#0b1536]">Book Session</button>
          <button className="h-11 rounded-full border border-slate-200 bg-white px-5 text-sm text-[#223252] transition hover:bg-slate-50">Email Germaine</button>
        </div>
      </div>

      {/* Quick Links */}
      <div className="rounded-[28px] border-[1.5px] border-slate-300 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">Quick Links</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {[
            { label: 'LR Course', icon: GraduationCap },
            { label: 'RC Course', icon: BookOpen },
            { label: 'Questions', icon: Search },
            { label: 'WAJ', icon: ClipboardList },
            { label: 'Blind Review', icon: Layers },
            { label: 'Past Sessions', icon: MessageSquare },
          ].map((l) => (
            <button key={l.label} className="flex items-center gap-2.5 rounded-[14px] border border-slate-200 bg-slate-50 px-3 py-3 text-left text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white">
              <l.icon className="h-4 w-4 shrink-0 text-slate-500" />
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ─── Review sample data (shared by alternates) ─────────────── */

interface WajEntry {
  id: string;
  question_identifier: string;
  question_family: 'LR' | 'RC';
  question_type_label: string;
  timed_answer: string | null;
  untimed_answer: string | null;
  credited_answer: string;
  initial_mistake: string;
  better_approach: string;
  reusable_rule: string;
  attempted_at: string;
}

interface BrEntry {
  id: string;
  question_identifier: string;
  question_family: 'LR' | 'RC';
  question_type: string;
  timed_initial_answer: string | null;
  blind_review_answer: string | null;
  credited_answer: string;
  goal: string;
  stimulus_breakdown: string;
  prephrase: string;
  right_answer_justification: string;
  wrong_answer_justification: string;
  confidence: '99%+' | 'unsure';
  created_at: string;
}

const wajEntries: WajEntry[] = [
  {
    id: 'w1',
    question_identifier: 'PT 141 \u00b7 S3 \u00b7 Q21',
    question_family: 'RC',
    question_type_label: 'Main Point',
    timed_answer: 'D',
    untimed_answer: 'B',
    credited_answer: 'B',
    initial_mistake: 'You treated part of the passage\'s supporting discussion as though it were the passage\'s full point. That led you toward an answer that captured a real idea from the middle of the passage, but not the author\'s final policy position.',
    better_approach: 'You should have identified the role of the last paragraph before comparing the final contenders. Once the passage\'s recommendation was clear, you could have asked which answer preserved that recommendation rather than merely summarizing the reasoning behind it.',
    reusable_rule: 'On main point questions, give special weight to the author\'s final recommendation or conclusion. Be cautious of answers that are accurate about supporting material but too narrow to capture the full point of the passage.',
    attempted_at: 'Mar 27, 2026',
  },
  {
    id: 'w2',
    question_identifier: 'PT 92 \u00b7 S2 \u00b7 Q14',
    question_family: 'LR',
    question_type_label: 'Flaw',
    timed_answer: 'B',
    untimed_answer: 'D',
    credited_answer: 'D',
    initial_mistake: 'You identified the conclusion correctly but misread the flaw. The argument treats popular support as evidence for correctness, but you were drawn to an answer describing a different structural error \u2014 treating a correlation as causation.',
    better_approach: 'After identifying the conclusion, name the specific gap between the evidence and the conclusion. \u201cPeople support it\u201d does not prove \u201cit is correct.\u201d That is an appeal to popularity, not a causal error.',
    reusable_rule: 'When the argument uses public opinion as evidence for a factual claim, the flaw is almost always appeal to popularity. Do not default to causal reasoning unless the stimulus explicitly links two events in sequence.',
    attempted_at: 'Mar 22, 2026',
  },
  {
    id: 'w3',
    question_identifier: 'PT 91 \u00b7 S4 \u00b7 Q8',
    question_family: 'LR',
    question_type_label: 'Strengthen',
    timed_answer: 'C',
    untimed_answer: 'E',
    credited_answer: 'E',
    initial_mistake: 'You chose an answer that repeated part of the premise rather than one that strengthened the link between cause and effect. The stimulus already established that coral near vents grew faster, but your answer just restated growth rather than ruling out an alternative cause.',
    better_approach: 'For strengthen questions with causal arguments, look for the answer that eliminates an alternative explanation or confirms the proposed mechanism. Restating the evidence does not add anything new.',
    reusable_rule: 'When the argument links cause to effect, the strengthener must rule out an alternative cause or confirm the mechanism. An answer that merely restates evidence already in the stimulus cannot strengthen.',
    attempted_at: 'Mar 15, 2026',
  },
  {
    id: 'w4',
    question_identifier: 'PT 90 \u00b7 S1 \u00b7 Q19',
    question_family: 'LR',
    question_type_label: 'Sufficient Assumption',
    timed_answer: 'A',
    untimed_answer: 'C',
    credited_answer: 'C',
    initial_mistake: 'You selected an answer that was necessary but not sufficient. It addressed part of the gap but left the conclusion unsupported because it did not connect the new term in the conclusion back to the premises.',
    better_approach: 'Check whether the answer, combined with the premises, guarantees the conclusion. If the conclusion introduces a term not in the premises, the sufficient assumption must bridge that specific gap completely.',
    reusable_rule: 'Sufficient assumption fills the gap completely. If the conclusion introduces a new term, the SA must connect it to the premises. A merely necessary assumption leaves the argument short of proven.',
    attempted_at: 'Mar 8, 2026',
  },
];

const brEntries: BrEntry[] = [
  {
    id: 'b1',
    question_identifier: 'PT 141 \u00b7 S3 \u00b7 Q21',
    question_family: 'RC',
    question_type: 'Main Point',
    timed_initial_answer: 'D',
    blind_review_answer: 'B',
    credited_answer: 'B',
    goal: 'Identify the passage\'s central thesis, including the author\'s final recommendation.',
    stimulus_breakdown: 'Paragraphs 1-2 establish the traditional distinction under criticism. Paragraph 3 presents evidence against the distinction. Paragraph 4 moves to a policy recommendation based on that evidence.',
    prephrase: 'The answer should capture both the critique and the resulting recommendation, not just the supporting argument.',
    right_answer_justification: 'Choice B captures the full arc: the distinction is unsound and policy should shift accordingly. It preserves the author\'s final recommendation from paragraph 4.',
    wrong_answer_justification: 'Choice D was tempting because it accurately described the middle paragraphs\' supporting evidence, but it stopped short of the policy recommendation that completes the author\'s main point.',
    confidence: '99%+',
    created_at: 'Mar 27, 2026',
  },
  {
    id: 'b2',
    question_identifier: 'PT 92 \u00b7 S2 \u00b7 Q14',
    question_family: 'LR',
    question_type: 'Flaw',
    timed_initial_answer: 'B',
    blind_review_answer: 'D',
    credited_answer: 'D',
    goal: 'Name the logical error in the argument\'s reasoning pattern.',
    stimulus_breakdown: 'The argument concludes the policy is correct because it has broad public support. The evidence is survey data showing majority approval. The gap: popularity does not establish correctness.',
    prephrase: 'The flaw should describe treating popular opinion as evidence for factual accuracy.',
    right_answer_justification: 'Choice D describes the appeal to popularity flaw \u2014 confusing widespread support with evidentiary merit. This matches the gap between survey approval and factual correctness.',
    wrong_answer_justification: 'Choice B described a causal error not present in the stimulus. Under time pressure the correlation language felt causal, but the argument\'s structure is purely appeal-to-popularity.',
    confidence: 'unsure',
    created_at: 'Mar 22, 2026',
  },
  {
    id: 'b3',
    question_identifier: 'PT 92 \u00b7 S2 \u00b7 Q18',
    question_family: 'LR',
    question_type: 'Parallel Reasoning',
    timed_initial_answer: 'A',
    blind_review_answer: 'A',
    credited_answer: 'A',
    goal: 'Find the answer with the same logical structure as the stimulus argument.',
    stimulus_breakdown: 'The stimulus uses a conditional chain: if A then B, if B then C, therefore if A then C. The answer must replicate this transitive chain with different content.',
    prephrase: 'Look for a two-step conditional chain leading to a valid conclusion linking first and last terms.',
    right_answer_justification: 'Choice A mirrors the transitive conditional structure perfectly with different subject matter, preserving the if-then chain from first term to last.',
    wrong_answer_justification: 'Choice C was initially tempting because it had similar vocabulary, but a closer structure check revealed it reversed one of the conditionals, producing an invalid inference.',
    confidence: '99%+',
    created_at: 'Mar 22, 2026',
  },
  {
    id: 'b4',
    question_identifier: 'PT 91 \u00b7 S4 \u00b7 Q22',
    question_family: 'LR',
    question_type: 'Weaken',
    timed_initial_answer: 'D',
    blind_review_answer: 'D',
    credited_answer: 'B',
    goal: 'Find the answer that most undermines the argument\'s conclusion.',
    stimulus_breakdown: 'The argument claims a new regulation will reduce industrial pollution based on compliance data from a pilot program. The gap: pilot conditions may not generalize.',
    prephrase: 'The weakener should show the pilot was unrepresentative or that compliance will differ at scale.',
    right_answer_justification: 'Choice B reveals that pilot participants were self-selected volunteers, undermining the assumption that mandatory compliance will produce similar results.',
    wrong_answer_justification: 'Choice D focused on cost rather than effectiveness. It felt relevant because cost could affect compliance, but the argument\'s conclusion is about pollution reduction, not economic feasibility.',
    confidence: 'unsure',
    created_at: 'Mar 15, 2026',
  },
  {
    id: 'b5',
    question_identifier: 'PT 90 \u00b7 S1 \u00b7 Q19',
    question_family: 'LR',
    question_type: 'Sufficient Assumption',
    timed_initial_answer: 'A',
    blind_review_answer: 'C',
    credited_answer: 'C',
    goal: 'Find the assumption that, if true, guarantees the conclusion.',
    stimulus_breakdown: 'Premises establish that all licensed physicians completed residency. The conclusion adds that board certification requires a new term not in the premises. The gap is the missing link between residency and that new requirement.',
    prephrase: 'The answer must bridge the new term in the conclusion back to the existing premises \u2014 making the argument airtight, not just more plausible.',
    right_answer_justification: 'Choice C provides the missing conditional link that, combined with the premises, makes the conclusion follow necessarily. It bridges the new term completely.',
    wrong_answer_justification: 'Choice A was tempting because it addressed part of the gap and felt necessary for the argument, but it only partially bridged the link \u2014 necessary but insufficient to guarantee the conclusion.',
    confidence: '99%+',
    created_at: 'Mar 8, 2026',
  },
];


/* ─── Review shared helpers ──────────────────────────────────── */

interface ReviewLandingProps { onOpenWaj: () => void; onOpenBr: () => void; }
interface ReviewToolProps { onBack: () => void; }

const ReviewBackButton: React.FC<{ onBack: () => void; label?: string }> = ({ onBack, label = 'Back to Review Tools' }) => (
  <button onClick={onBack} className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
    <ChevronDown className="h-3.5 w-3.5 rotate-90" />
    {label}
  </button>
);
/* ─── Review Landing D: Layered Glass Panels ─────────────────── */

export const ReviewLandingD: React.FC<ReviewLandingProps> = ({ onOpenWaj, onOpenBr }) => (
  <div className="space-y-8">
    <header className="rounded-[28px] border-[1.5px] border-slate-300 bg-white px-6 py-6 shadow-[0_12px_32px_rgba(15,23,42,0.09)] sm:px-7 sm:py-7">
      <div className="max-w-4xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">Review</p>
        <h1 className="mt-3 text-[2.2rem] font-semibold tracking-[-0.05em] text-slate-950 sm:text-[2.8rem]">Choose a Review Tool</h1>
        <p className="mt-3 max-w-3xl text-[15px] leading-7 text-slate-600 sm:text-base">Pick the kind of review you want to do next. Wrong Answer Journal and Blind Review stay separate, but live together in one review section.</p>
      </div>
    </header>
    {/* Outer container with subtle background gradient */}
    <div className="relative overflow-hidden rounded-[32px] border-[1.5px] border-slate-300 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 p-5 shadow-[0_12px_40px_rgba(15,23,42,0.10)]">
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-40" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15), transparent 65%)' }} />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-60 w-60 rounded-full opacity-40" style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.12), transparent 65%)' }} />

      {/* Inner cards */}
      <div className="relative grid gap-4 xl:grid-cols-2">
        {/* WAJ panel — amber tinted */}
        <div className="flex flex-col rounded-[26px] border-[1.5px] border-amber-300 bg-gradient-to-br from-amber-50/40 to-white p-7 shadow-[0_6px_24px_rgba(217,119,6,0.06)] transition hover:shadow-[0_18px_40px_rgba(217,119,6,0.12)]">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-gradient-to-br from-amber-100 to-amber-50 shadow-[0_4px_12px_rgba(217,119,6,0.15)]">
              <ClipboardList className="h-6 w-6 text-amber-600" />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-600/70">Diagnose &amp; Build Rules</p>
              <h2 className="mt-0.5 text-[1.6rem] font-semibold tracking-[-0.04em] text-slate-950">Wrong Answer Journal</h2>
            </div>
          </div>
          {/* Mini stat row — 2x2 grid */}
          <div className="mt-6 grid grid-cols-2 gap-2">
            {[
              { v: wajEntries.length, l: 'Total Entries' },
              { v: wajEntries.filter(e => e.question_family === 'LR').length, l: 'LR Entries' },
              { v: wajEntries.filter(e => e.question_family === 'RC').length, l: 'RC Entries' },
              { v: wajEntries.length, l: 'Future Rules' },
            ].map(s => (
              <div key={s.l} className="rounded-[14px] border border-amber-200 bg-amber-50/60 px-3 py-3 text-center">
                <p className="text-[1.3rem] font-semibold tracking-[-0.04em] text-amber-900">{s.v}</p>
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-amber-600/50">{s.l}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 flex-1 text-[14px] leading-7 text-slate-500">Each wrong answer becomes a three-part learning artifact: the mistake under time pressure, the approach that would have worked, and a portable rule for the future.</p>
          <button onClick={onOpenWaj} className="mt-6 self-start rounded-full bg-[#182236] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#121a2b]">Open Journal</button>
        </div>

        {/* BR panel — indigo tinted */}
        <div className="flex flex-col rounded-[26px] border-[1.5px] border-indigo-300 bg-gradient-to-br from-indigo-50/50 to-white p-7 shadow-[0_6px_24px_rgba(99,102,241,0.06)] transition hover:shadow-[0_18px_40px_rgba(99,102,241,0.12)]">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-gradient-to-br from-indigo-100 to-indigo-50 shadow-[0_4px_12px_rgba(99,102,241,0.15)]">
              <Layers className="h-6 w-6 text-indigo-600" />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-indigo-600/70">Reason Untimed</p>
              <h2 className="mt-0.5 text-[1.6rem] font-semibold tracking-[-0.04em] text-slate-950">Blind Review</h2>
            </div>
          </div>
          {/* Mini stat row — 2x2 grid */}
          <div className="mt-6 grid grid-cols-2 gap-2">
            {[
              { label: 'Total', value: String(brEntries.length) },
              { label: 'BR Accuracy', value: `${Math.round((brEntries.filter(e => e.blind_review_answer === e.credited_answer).length / brEntries.length) * 100)}%` },
              { label: '99%+ Accuracy', value: `${brEntries.filter(e => e.confidence === '99%+').length > 0 ? Math.round((brEntries.filter(e => e.confidence === '99%+' && e.blind_review_answer === e.credited_answer).length / brEntries.filter(e => e.confidence === '99%+').length) * 100) : 0}%` },
              { label: 'Change / Stay', value: `${brEntries.filter(e => e.timed_initial_answer !== e.blind_review_answer).length > 0 ? Math.round((brEntries.filter(e => e.timed_initial_answer !== e.blind_review_answer && e.blind_review_answer === e.credited_answer).length / brEntries.filter(e => e.timed_initial_answer !== e.blind_review_answer).length) * 100) : 0}% / ${brEntries.filter(e => e.timed_initial_answer === e.blind_review_answer).length > 0 ? Math.round((brEntries.filter(e => e.timed_initial_answer === e.blind_review_answer && e.blind_review_answer === e.credited_answer).length / brEntries.filter(e => e.timed_initial_answer === e.blind_review_answer).length) * 100) : 0}%` },
            ].map((s) => (
              <div key={s.label} className="rounded-[14px] border border-indigo-200 bg-indigo-50/60 px-3 py-3 text-center">
                <p className="text-[1.3rem] font-semibold tracking-[-0.04em] text-indigo-900">{s.value}</p>
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-indigo-600/50">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 flex-1 text-[14px] leading-7 text-slate-500">Revisit flagged questions without time pressure. Predict answers, break down stimuli, and see exactly where slowing down changes the result.</p>
          <button onClick={onOpenBr} className="mt-6 self-start rounded-full bg-[#182236] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#121a2b]">Open Blind Review</button>
        </div>
      </div>
    </div>
  </div>
);
/* ─── WAJ D: Layered Glass Panels (Kanban) ───────────────────── */

export const ReviewWajD: React.FC<ReviewToolProps> = ({ onBack }) => {
  const lrEntries = wajEntries.filter((e) => e.question_family === 'LR');
  const rcEntries = wajEntries.filter((e) => e.question_family === 'RC');
  return (
    <div className="space-y-7">
      <ReviewBackButton onBack={onBack} />

      {/* Outer glass wrapper with decorative orbs */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-50 via-white to-blue-50/40 p-6">
        {/* Decorative gradient orbs */}
        <div className="pointer-events-none absolute left-[-5%] top-[-10%] h-[300px] w-[300px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #fbbf24, transparent 70%)' }} />
        <div className="pointer-events-none absolute right-[-5%] bottom-[-10%] h-[250px] w-[250px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #818cf8, transparent 70%)' }} />
        <div className="pointer-events-none absolute right-[30%] top-[5%] h-[200px] w-[200px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #f472b6, transparent 70%)' }} />

        <div className="relative z-10">
          {/* Glass header bar */}
          <div className="flex flex-wrap items-center gap-4 rounded-[28px] border-[1.5px] border-slate-300 bg-white/90 px-6 py-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_8px_20px_rgba(245,158,11,0.25)]">
              <Lightbulb className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-[1.4rem] font-semibold tracking-[-0.03em] text-slate-950">Wrong Answer Journals</h1>
              <p className="text-[13px] text-slate-500">{wajEntries.length} entries across LR and RC</p>
            </div>
            <div className="ml-auto flex gap-3">
              {[
                { label: 'Total', value: wajEntries.length },
                { label: 'LR', value: lrEntries.length },
                { label: 'RC', value: rcEntries.length },
                { label: 'Rules', value: wajEntries.length },
              ].map((s) => (
                <div key={s.label} className="rounded-[16px] bg-white/90 px-4 py-2.5 shadow-[0_4px_12px_rgba(0,0,0,0.04)] backdrop-blur-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">{s.label}</p>
                  <p className="text-[1.3rem] font-semibold tracking-[-0.03em] text-slate-950">{s.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Two-column kanban */}
          <div className="mt-6 grid gap-5 xl:grid-cols-2">
            {/* LR Column */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-gradient-to-br from-blue-400 to-blue-600 shadow-[0_6px_16px_rgba(59,130,246,0.3)]">
                  <BookOpen className="h-4 w-4 text-white" />
                </div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-slate-500">Logical Reasoning</p>
                <span className="inline-flex h-6 min-w-[24px] items-center justify-center rounded-full bg-blue-50 px-2 text-[12px] font-semibold text-blue-700">{lrEntries.length}</span>
              </div>
              <div className="space-y-3">
                {lrEntries.map((e) => (
                  <div key={e.id} className="rounded-[24px] border-[1.5px] border-slate-300 bg-white/90 p-5 shadow-[0_6px_24px_rgba(0,0,0,0.06)] backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">{e.question_identifier}</p>
                      <span className="text-[11px] text-slate-400">{e.attempted_at}</span>
                    </div>
                    <p className="mt-2 text-[15px] font-semibold text-slate-950">{e.question_type_label}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className={`rounded-full border px-3 py-1 text-[11px] font-medium ${e.timed_answer === e.credited_answer ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-rose-200 bg-rose-50 text-rose-700'}`}>{e.timed_answer ?? '--'}</span>
                      <ArrowRight className="h-3 w-3 text-slate-300" />
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-700">{e.credited_answer}</span>
                    </div>
                    <div className="mt-4 rounded-[18px] border-[1.5px] border-amber-300 bg-gradient-to-br from-amber-50/80 to-orange-50/40 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-700/60">Rule for the Future</p>
                      <p className="mt-1.5 text-[14px] leading-7 text-slate-700 font-medium">{e.reusable_rule}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* RC Column */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-gradient-to-br from-violet-400 to-violet-600 shadow-[0_6px_16px_rgba(139,92,246,0.3)]">
                  <FileText className="h-4 w-4 text-white" />
                </div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-slate-500">Reading Comprehension</p>
                <span className="inline-flex h-6 min-w-[24px] items-center justify-center rounded-full bg-violet-50 px-2 text-[12px] font-semibold text-violet-700">{rcEntries.length}</span>
              </div>
              <div className="space-y-3">
                {rcEntries.map((e) => (
                  <div key={e.id} className="rounded-[24px] border-[1.5px] border-slate-300 bg-white/90 p-5 shadow-[0_6px_24px_rgba(0,0,0,0.06)] backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">{e.question_identifier}</p>
                      <span className="text-[11px] text-slate-400">{e.attempted_at}</span>
                    </div>
                    <p className="mt-2 text-[15px] font-semibold text-slate-950">{e.question_type_label}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className={`rounded-full border px-3 py-1 text-[11px] font-medium ${e.timed_answer === e.credited_answer ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-rose-200 bg-rose-50 text-rose-700'}`}>{e.timed_answer ?? '--'}</span>
                      <ArrowRight className="h-3 w-3 text-slate-300" />
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-700">{e.credited_answer}</span>
                    </div>
                    <div className="mt-4 rounded-[18px] border-[1.5px] border-amber-300 bg-gradient-to-br from-amber-50/80 to-orange-50/40 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-700/60">Rule for the Future</p>
                      <p className="mt-1.5 text-[14px] leading-7 text-slate-700 font-medium">{e.reusable_rule}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
/* ─── BR B: Production Blind Review Layout ─────────────────────── */

const ENTRIES_PER_PAGE = 3;

export const ReviewBrB: React.FC<ReviewToolProps> = ({ onBack }) => {
  const [entries, setEntries] = useState<BrEntry[]>(() => [...brEntries]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<BrEntry | null>(null);
  const [familyFilter, setFamilyFilter] = useState<'All' | 'LR' | 'RC'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);

  /* Filtering */
  const filtered = entries.filter((e) => {
    if (familyFilter !== 'All' && e.question_family !== familyFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        e.question_identifier.toLowerCase().includes(q) ||
        e.question_type.toLowerCase().includes(q) ||
        e.goal.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / ENTRIES_PER_PAGE));
  const safePage = Math.min(page, totalPages - 1);
  const pageEntries = filtered.slice(safePage * ENTRIES_PER_PAGE, (safePage + 1) * ENTRIES_PER_PAGE);

  /* Edit helpers */
  const startEdit = (entry: BrEntry) => {
    setDraft({ ...entry });
    setEditingId(entry.id);
  };
  const cancelEdit = () => {
    setDraft(null);
    setEditingId(null);
  };
  const saveEdit = () => {
    if (!draft) return;
    setEntries((prev) => prev.map((e) => (e.id === draft.id ? draft : e)));
    setEditingId(null);
    setDraft(null);
  };
  const updateDraft = (field: keyof BrEntry, value: string) => {
    if (!draft) return;
    setDraft({ ...draft, [field]: value } as BrEntry);
  };

  /* Stat computations */
  const totalCount = entries.length;
  const brAccuracy = totalCount > 0
    ? Math.round((entries.filter((e) => e.blind_review_answer === e.credited_answer).length / totalCount) * 100)
    : 0;
  const conf99 = entries.filter((e) => e.confidence === '99%+');
  const conf99Accuracy = conf99.length > 0
    ? Math.round((conf99.filter((e) => e.blind_review_answer === e.credited_answer).length / conf99.length) * 100)
    : 0;
  const changedEntries = entries.filter((e) => e.timed_initial_answer !== e.blind_review_answer);
  const stayedEntries = entries.filter((e) => e.timed_initial_answer === e.blind_review_answer);
  const changeAcc = changedEntries.length > 0
    ? Math.round((changedEntries.filter((e) => e.blind_review_answer === e.credited_answer).length / changedEntries.length) * 100)
    : 0;
  const stayAcc = stayedEntries.length > 0
    ? Math.round((stayedEntries.filter((e) => e.blind_review_answer === e.credited_answer).length / stayedEntries.length) * 100)
    : 0;

  return (
    <div className="space-y-5">
      <ReviewBackButton onBack={onBack} />

      {/* ───── Dark Hero Section ───── */}
      <div className="rounded-[36px] bg-[#182236] px-6 py-7 text-white">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">Review Tool</p>
            <h1 className="mt-2 text-[2rem] font-semibold tracking-[-0.05em]">Blind Review</h1>
            <p className="mt-2 text-[15px] leading-7 text-white/60">Revisit flagged questions without time pressure. Break down the stimulus, predict the answer, and justify every choice.</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-[13px] font-semibold text-white backdrop-blur-sm transition hover:bg-white/20">
            <Plus className="h-4 w-4" />
            Add Row
          </button>
        </div>
        {/* Stat cards — 2x2 grid */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: 'Total Entries', value: String(totalCount) },
            { label: 'BR Accuracy', value: `${brAccuracy}%` },
            { label: '99%+ Accuracy', value: `${conf99Accuracy}%` },
            { label: 'Change / Stay', value: `${changeAcc}% / ${stayAcc}%` },
          ].map((s) => (
            <div key={s.label} className="rounded-[26px] border border-white/10 bg-white/10 px-4 py-4 text-center backdrop-blur-sm">
              <p className="text-[1.4rem] font-semibold tracking-[-0.04em] text-white">{s.value}</p>
              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ───── White Workspace Section ───── */}
      <div className="rounded-[34px] border-[1.5px] border-slate-300 bg-white shadow-[0_8px_32px_rgba(15,23,42,0.07)]">
        {/* Workspace header */}
        <div className="px-7 pt-7 pb-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-[1.35rem] font-semibold tracking-[-0.04em] text-slate-950">Blind Review Workspace</h2>
              <p className="mt-1 text-[14px] leading-6 text-slate-500">Each entry captures your complete reasoning for a flagged question.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search entries..."
                  value={searchQuery}
                  onChange={(ev) => { setSearchQuery(ev.target.value); setPage(0); }}
                  className="h-10 w-56 rounded-full border border-slate-200 bg-slate-50 pl-10 pr-4 text-[13px] text-slate-700 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none"
                />
              </div>
              <button className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-slate-800">
                <Plus className="h-4 w-4" />
                Add Row
              </button>
            </div>
          </div>

          {/* Filter row */}
          <div className="mt-5 flex flex-wrap items-center gap-4">
            {/* Family pills */}
            <div className="flex rounded-full border border-slate-200 bg-slate-100 p-1">
              {(['All', 'LR', 'RC'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => { setFamilyFilter(f); setPage(0); }}
                  className={`rounded-full px-4 py-1.5 text-[12px] font-semibold transition ${familyFilter === f ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  {f}
                </button>
              ))}
            </div>
            <span className="text-[13px] text-slate-400">{filtered.length} {filtered.length === 1 ? 'entry' : 'entries'}</span>
          </div>
        </div>

        {/* ───── Stacked Entry Cards ───── */}
        <div className="space-y-4 px-5 pb-6">
          {pageEntries.map((entry) => {
            const isEditing = editingId === entry.id;
            const display = isEditing && draft ? draft : entry;

            if (isEditing && draft) {
              /* ── Edit Mode Card ── */
              return (
                <div key={entry.id} className="rounded-[32px] border-2 border-blue-400 bg-white p-6 shadow-[0_0_0_4px_rgba(59,130,246,0.12),0_12px_36px_rgba(15,23,42,0.08)] ring-1 ring-blue-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <p className="text-[1.1rem] font-semibold tracking-[-0.02em] text-slate-950">{draft.question_identifier}</p>
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-600">{draft.question_family}</span>
                      <span className="rounded-full bg-slate-100 px-3 py-0.5 text-[11px] font-semibold text-slate-600">{draft.question_type}</span>
                    </div>
                    <p className="text-[12px] text-slate-400">{draft.created_at}</p>
                  </div>

                  {/* Answer selectors */}
                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Timed</span>
                      <div className="flex gap-1">
                        {['A', 'B', 'C', 'D', 'E'].map((c) => (
                          <button
                            key={c}
                            onClick={() => updateDraft('timed_initial_answer', c)}
                            className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border text-[15px] font-bold transition ${draft.timed_initial_answer === c ? 'border-rose-300 bg-rose-50 text-rose-700' : 'border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-300'}`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-300" />
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Blind Review</span>
                      <div className="flex gap-1">
                        {['A', 'B', 'C', 'D', 'E'].map((c) => (
                          <button
                            key={c}
                            onClick={() => updateDraft('blind_review_answer', c)}
                            className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border text-[15px] font-bold transition ${draft.blind_review_answer === c ? 'border-emerald-300 bg-emerald-50 text-emerald-700' : 'border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-300'}`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Confidence</span>
                      <div className="flex gap-1">
                        {(['99%+', 'unsure'] as const).map((c) => (
                          <button
                            key={c}
                            onClick={() => updateDraft('confidence', c)}
                            className={`rounded-lg border px-3 py-1.5 text-[12px] font-semibold transition ${draft.confidence === c ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-300'}`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Editable fields — 2-column grids */}
                  <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    <div>
                      <label className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">Goal</label>
                      <textarea
                        value={draft.goal}
                        onChange={(ev) => updateDraft('goal', ev.target.value)}
                        className="mt-2 w-full resize-none rounded-[16px] border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] leading-7 text-slate-700 focus:border-slate-300 focus:outline-none"
                        rows={3}
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">Stimulus Breakdown</label>
                      <textarea
                        value={draft.stimulus_breakdown}
                        onChange={(ev) => updateDraft('stimulus_breakdown', ev.target.value)}
                        className="mt-2 w-full resize-none rounded-[16px] border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] leading-7 text-slate-700 focus:border-slate-300 focus:outline-none"
                        rows={3}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div>
                      <label className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">Answer Prediction</label>
                      <textarea
                        value={draft.prephrase}
                        onChange={(ev) => updateDraft('prephrase', ev.target.value)}
                        className="mt-2 w-full resize-none rounded-[16px] border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] leading-7 text-slate-700 focus:border-slate-300 focus:outline-none"
                        rows={3}
                      />
                    </div>
                  </div>
                  <div className="mt-4 grid gap-4 lg:grid-cols-2">
                    <div>
                      <label className="text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-600">Right Answer Justification</label>
                      <textarea
                        value={draft.right_answer_justification}
                        onChange={(ev) => updateDraft('right_answer_justification', ev.target.value)}
                        className="mt-2 w-full resize-none rounded-[16px] border border-emerald-200 bg-emerald-50/30 px-4 py-3 text-[14px] leading-7 text-slate-700 focus:border-emerald-300 focus:outline-none"
                        rows={4}
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold uppercase tracking-[0.26em] text-rose-600">Wrong Answer Justification</label>
                      <textarea
                        value={draft.wrong_answer_justification}
                        onChange={(ev) => updateDraft('wrong_answer_justification', ev.target.value)}
                        className="mt-2 w-full resize-none rounded-[16px] border border-rose-200 bg-rose-50/30 px-4 py-3 text-[14px] leading-7 text-slate-700 focus:border-rose-300 focus:outline-none"
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Save / Cancel */}
                  <div className="mt-6 flex items-center justify-end gap-3">
                    <button
                      onClick={cancelEdit}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-[13px] font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                      <X className="h-4 w-4" />
                      Cancel
                    </button>
                    <button
                      onClick={saveEdit}
                      className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-2.5 text-[13px] font-semibold text-white transition hover:bg-slate-800"
                    >
                      <Save className="h-4 w-4" />
                      Save Changes
                    </button>
                  </div>
                </div>
              );
            }

            /* ── Display Mode Card ── */
            return (
              <div
                key={entry.id}
                onClick={() => startEdit(entry)}
                className="group cursor-pointer rounded-[32px] border-[1.5px] border-slate-300 bg-white p-6 shadow-[0_6px_24px_rgba(15,23,42,0.06)] transition hover:border-slate-400 hover:shadow-[0_12px_36px_rgba(15,23,42,0.10)]"
              >
                {/* Header row — identity + answers inline */}
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-[1.15rem] font-semibold tracking-[-0.03em] text-slate-950">{display.question_identifier}</p>
                  <span className={`inline-flex rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${display.question_family === 'LR' ? 'border-blue-200 bg-blue-50 text-blue-700' : 'border-violet-200 bg-violet-50 text-violet-700'}`}>{display.question_family}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-0.5 text-[11px] font-semibold text-slate-600">{display.question_type}</span>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[10px] font-semibold text-slate-500">{display.confidence}</span>
                  <div className="ml-auto flex items-center gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Timed</span>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-rose-200 bg-rose-50 text-[12px] font-bold text-rose-700">{display.timed_initial_answer ?? '-'}</span>
                    <ArrowRight className="h-3 w-3 text-slate-300" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">BR</span>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 text-[12px] font-bold text-emerald-700">{display.blind_review_answer ?? '-'}</span>
                    <span className="ml-2 text-[11px] text-slate-400">{display.created_at}</span>
                    <Pencil className="ml-1 h-3.5 w-3.5 text-slate-300 opacity-0 transition group-hover:opacity-100" />
                  </div>
                </div>

                {/* Content grid — 2x2 reasoning blocks */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-[20px] border-[1.5px] border-slate-200 bg-slate-50 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-400">Goal</p>
                    <p className="mt-2 text-[14px] leading-7 text-slate-700">{display.goal}</p>
                  </div>
                  <div className="rounded-[20px] border-[1.5px] border-slate-200 bg-slate-50 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-400">Stimulus Breakdown</p>
                    <p className="mt-2 text-[14px] leading-7 text-slate-700">{display.stimulus_breakdown}</p>
                  </div>
                  <div className="rounded-[20px] border-[1.5px] border-slate-200 bg-slate-50 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-400">Answer Prediction</p>
                    <p className="mt-2 text-[14px] leading-7 text-slate-800 font-medium">{display.prephrase}</p>
                  </div>
                  <div className="rounded-[20px] border border-emerald-200 bg-emerald-50/30 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-emerald-600">Right Answer Justification</p>
                    <p className="mt-2 text-[14px] leading-7 text-slate-700">{display.right_answer_justification}</p>
                  </div>
                </div>

                {/* Wrong answer justification — full width */}
                <div className="mt-3 rounded-[20px] border border-rose-200 bg-rose-50/30 p-4">
                  <div className="flex items-center gap-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-rose-600">Wrong Answer Justification</p>
                    <div className="flex items-center gap-1">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400">Eliminated</span>
                      {['A', 'B', 'C', 'D', 'E'].filter((c) => c !== display.blind_review_answer).map((c) => (
                        <span key={c} className="inline-flex h-5 w-5 items-center justify-center rounded border border-rose-200 bg-white text-[9px] font-semibold text-rose-400">{c}</span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-[14px] leading-7 text-slate-700">{display.wrong_answer_justification}</p>
                </div>
              </div>
            );
          })}

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 py-16 text-center">
              <p className="text-[15px] text-slate-400">No entries match your filters.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={safePage === 0}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-[13px] font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronDown className="h-3.5 w-3.5 rotate-90" />
                Previous
              </button>
              <span className="text-[13px] text-slate-500">
                Page {safePage + 1} of {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={safePage >= totalPages - 1}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-[13px] font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next
                <ChevronDown className="h-3.5 w-3.5 -rotate-90" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   Shared Session Detail Content (used by variants A–E)
   ═══════════════════════════════════════════════════════════════ */

const SessionDetailContent: React.FC<{ session: PastSessionDetail }> = ({ session }) => (
  <div className="space-y-6">
    {/* Session Breakdown */}
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-teal-600/70">Session Breakdown</p>
      <p className="mt-3 text-[15px] leading-8 text-slate-600">{session.intro}</p>
      {session.breakdownSections.map((section) => (
        <div key={section.title} className="mt-5">
          <h3 className="text-[15px] font-semibold text-slate-950">{section.title}</h3>
          {section.body.map((paragraph, i) => (
            <p key={i} className="mt-2 text-[14px] leading-7 text-slate-600">{paragraph}</p>
          ))}
        </div>
      ))}
    </div>

    {/* Key Takeaways */}
    <div className="rounded-[18px] border border-teal-200/50 bg-gradient-to-br from-teal-50/60 to-emerald-50/30 p-5">
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-teal-600" />
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-teal-600/70">Key Takeaways</p>
      </div>
      <ul className="mt-3 space-y-2">
        {session.keyTakeaways.map((t, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-500" />
            <span className="text-[14px] leading-7 text-slate-700">{t}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Before the Next Session */}
    <div className="rounded-[18px] border border-amber-200/50 bg-gradient-to-br from-amber-50/60 to-orange-50/30 p-5">
      <div className="flex items-center gap-2">
        <ListChecks className="h-4 w-4 text-amber-600" />
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-600/70">Before the Next Session</p>
      </div>
      <div className="mt-3 space-y-3">
        {session.homework.instructions.map((instruction, i) => (
          <p key={i} className="text-[14px] leading-7 text-slate-700">{instruction}</p>
        ))}
      </div>
      {session.homework.links && session.homework.links.length > 0 && (
        <div className="mt-4 space-y-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-600/50">Linked Lessons</p>
          <div className="flex flex-wrap gap-2">
            {session.homework.links.map((link) => (
              <button key={link.label} className="flex items-center gap-2 rounded-full border border-amber-200/60 bg-white px-4 py-2 text-sm text-amber-800 transition hover:bg-amber-50">
                <ExternalLink className="h-3.5 w-3.5" />
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
      <button className="mt-5 rounded-full bg-[#182236] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#121a2b]">View Homework</button>
    </div>

    {/* Next Focus */}
    <div className="rounded-[18px] border border-indigo-100/60 bg-indigo-50/30 p-5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-indigo-500/70">Next Focus</p>
      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-400/60">Upcoming Priority</p>
      <p className="mt-2 text-[15px] font-semibold text-slate-800">{session.nextFocus.priority}</p>
      <p className="mt-3 text-[14px] leading-7 text-slate-600">{session.nextFocus.description}</p>
    </div>

    {/* Attachments */}
    {session.attachments.length > 0 ? (
      <div className="rounded-[18px] border border-slate-200/50 bg-white p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">Attachments</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {session.attachments.map((a) => (
            <button key={a.label} className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              {a.type === 'pdf' ? <Download className="h-3.5 w-3.5" /> : a.type === 'miro' ? <ExternalLink className="h-3.5 w-3.5" /> : <ArrowUpRight className="h-3.5 w-3.5" />}
              {a.label}
            </button>
          ))}
        </div>
      </div>
    ) : (
      <div className="rounded-[18px] border border-slate-200/50 bg-white/50 px-5 py-4 text-center">
        <p className="text-[12px] text-slate-400">No attachments were added for this recap.</p>
      </div>
    )}
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   Past Sessions — Variant A: Dark Sidebar + Scrollable Detail
   ═══════════════════════════════════════════════════════════════ */

export const PortalPastSessionsA: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const session = pastSessions[selectedIdx];

  return (
    <div className="space-y-5">
      {/* Outer glass container — matching review visual language */}
      <div className="relative overflow-hidden rounded-[32px] border-[1.5px] border-slate-300 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 p-5 shadow-[0_12px_40px_rgba(15,23,42,0.10)]">
        {/* Decorative gradient orbs — indigo + teal like review */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-40" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15), transparent 65%)' }} />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-60 w-60 rounded-full opacity-40" style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.12), transparent 65%)' }} />
        <div className="pointer-events-none absolute right-[30%] top-[40%] h-48 w-48 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.12), transparent 65%)' }} />

        <div className="relative z-10">
          {/* Glass header bar */}
          <div className="flex flex-wrap items-center gap-4 rounded-[28px] border-[1.5px] border-slate-300 bg-white/90 px-6 py-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-br from-indigo-100 to-indigo-50 shadow-[0_4px_12px_rgba(99,102,241,0.15)]">
              <MessageSquare className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-[1.4rem] font-semibold tracking-[-0.03em] text-slate-950">Past Sessions</h1>
              <p className="text-[13px] text-slate-500">Session recaps, takeaways, and next steps</p>
            </div>
            <div className="ml-auto flex gap-3">
              <div className="rounded-[14px] bg-indigo-50/60 px-3 py-3 text-center">
                <p className="text-[1.1rem] font-semibold text-indigo-700">{pastSessions.length}</p>
                <p className="text-[10px] font-medium text-indigo-600/70">Sessions</p>
              </div>
              <div className="rounded-[14px] bg-teal-50/60 px-3 py-3 text-center">
                <p className="text-[1.1rem] font-semibold text-teal-700">Mar 27</p>
                <p className="text-[10px] font-medium text-teal-600/70">Latest</p>
              </div>
              <div className="rounded-[14px] bg-amber-50/60 px-3 py-3 text-center">
                <p className="text-[1.1rem] font-semibold text-amber-700">3.5</p>
                <p className="text-[10px] font-medium text-amber-600/70">Avg Read</p>
              </div>
            </div>
          </div>

          {/* Master-detail grid */}
          <div className="mt-5 grid gap-4 xl:grid-cols-[300px_minmax(0,1fr)]">
            {/* Light glass sidebar — alternating indigo / amber cards */}
            <div className="space-y-2 rounded-[24px] border border-slate-300 bg-gradient-to-b from-slate-50/50 to-white/80 p-3 backdrop-blur-sm xl:max-h-[78vh] xl:overflow-y-auto">
              <p className="px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">Sessions</p>
              {pastSessions.map((s, i) => {
                const isIndigo = i % 2 === 0;
                const accent = isIndigo
                  ? { border: 'border-indigo-200/70', activeBg: 'shadow-[0_10px_28px_rgba(99,102,241,0.10)]', cal: 'text-indigo-500', tagBorder: 'border-indigo-200/50', tagBg: 'bg-indigo-50/60', tagText: 'text-indigo-700' }
                  : { border: 'border-amber-200/70', activeBg: 'shadow-[0_10px_28px_rgba(217,119,6,0.10)]', cal: 'text-amber-500', tagBorder: 'border-amber-200/50', tagBg: 'bg-amber-50/60', tagText: 'text-amber-700' };
                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedIdx(i)}
                    className={`w-full rounded-[18px] border p-4 text-left transition ${
                      selectedIdx === i
                        ? `${accent.border} bg-white ${accent.activeBg}`
                        : 'border-transparent bg-white/40 hover:bg-white/70 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Calendar className={`h-3 w-3 shrink-0 ${accent.cal}`} />
                      <span className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${accent.cal}`}>{s.date}</span>
                    </div>
                    <p className={`mt-1.5 text-[14px] font-semibold leading-5 ${selectedIdx === i ? 'text-slate-950' : 'text-slate-800'}`}>{s.title}</p>
                    <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                      {s.tags.map((tag) => (
                        <span key={tag} className={`rounded-full border ${accent.tagBorder} ${accent.tagBg} px-2 py-0.5 text-[10px] font-semibold ${accent.tagText}`}>{tag}</span>
                      ))}
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-[10px] text-slate-500">
                      <Clock className="h-3 w-3" /> {s.readTime}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Detail panel */}
            <div className="rounded-[26px] border-[1.5px] border-slate-300 bg-white/90 shadow-[0_12px_32px_rgba(15,23,42,0.09)] backdrop-blur-sm xl:max-h-[78vh] xl:overflow-y-auto">
              {/* Header band */}
              <div className="rounded-t-[26px] border-b border-slate-100 bg-white/90 px-6 py-5">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-slate-400" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">{session.date}</p>
                  <span className="text-[11px] text-slate-300">&middot;</span>
                  <Clock className="h-3.5 w-3.5 text-slate-400" />
                  <span className="text-[11px] text-slate-400">{session.readTime}</span>
                </div>
                <h2 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.03em] text-slate-950">{session.title}</h2>
                <p className="mt-1.5 text-[14px] text-slate-500">{session.subtitle}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {session.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-full border border-indigo-200/50 bg-indigo-50/60 px-2.5 py-0.5 text-[10px] font-semibold text-indigo-700">{tag}</span>
                  ))}
                  <button className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-medium text-slate-600 transition hover:bg-slate-50">
                    <FileText className="h-3 w-3" />
                    View PDF
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="px-6 py-6">
                <SessionDetailContent session={session} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

