/*
 * Pattern: iOS Segmented Control
 *
 * A single pill-shaped segmented control sits sticky at the top of the lesson.
 * Five equal-width segments represent the five locked tabs; a white elevated
 * pill slides behind the active segment with a spring-feeling transform
 * transition. Abbreviated labels keep the control compact on mobile while a
 * subtitle strip underneath names the active step in full. Body content fades
 * and lifts between switches for a polished Apple-inspired feel. Palette is
 * neutral slate/zinc with indigo accent reserved for state cues.
 */

import React, { useMemo, useState } from 'react';
import { Clock, Shield, Target, Compass, AlertTriangle, CheckCircle2, XCircle, Lightbulb, BookOpen, Bike, Info, ArrowRight } from 'lucide-react';

type TabId = 'overview' | 'breakdown-gap' | 'prephrase-negate' | 'wrong-answers' | 'worked-example';

interface TabDef { id: TabId; short: string; full: string; subtitle: string; }

const TABS: TabDef[] = [
  { id: 'overview', short: 'Overview', full: 'Overview', subtitle: 'Why the method · timing · the airtight principle' },
  { id: 'breakdown-gap', short: 'Break Down', full: 'Break Down & Find Gap', subtitle: 'Steps 1–2 · argument anatomy & the logical leaps' },
  { id: 'prephrase-negate', short: 'Pre-phrase', full: 'Pre-phrase & Negate', subtitle: 'Steps 3–4 · the Negation Test mechanics' },
  { id: 'wrong-answers', short: 'Wrong Answers', full: 'Wrong Answer Patterns', subtitle: 'The 5 traps and how to spot each one' },
  { id: 'worked-example', short: 'Example', full: 'Worked Example & Takeaways', subtitle: 'Bike-path walkthrough · Key Takeaways' },
];

export const NegationLessonSegmented: React.FC = () => {
  const [active, setActive] = useState<TabId>('overview');
  const activeIndex = useMemo(() => TABS.findIndex((t) => t.id === active), [active]);
  const activeTab = TABS[activeIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <div className="mx-auto max-w-4xl px-4 pt-10 pb-24 sm:px-6">
        {/* Hero */}
        <header className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">Module 11 · Lesson 2</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            The 4-Step Method for Necessary Assumption
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
            Break Down → Find the Gap → Pre-phrase → Negate and Verify. A repeatable process for
            the most airtight question type on the LSAT.
          </p>
        </header>

        {/* Sticky Segmented Control */}
        <div className="sticky top-3 z-20 mb-6">
          <div className="rounded-full border border-slate-200/80 bg-white/80 p-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-md">
            <div className="relative flex">
              {/* Sliding indicator */}
              <div
                className="absolute inset-y-0 rounded-full bg-indigo-600 shadow-[0_4px_14px_rgb(79,70,229,0.35)] transition-transform duration-300 ease-out"
                style={{
                  width: `${100 / TABS.length}%`,
                  transform: `translateX(${activeIndex * 100}%)`,
                }}
                aria-hidden="true"
              />
              {TABS.map((tab) => {
                const isActive = tab.id === active;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActive(tab.id)}
                    className={[
                      'relative z-10 flex flex-1 items-center justify-center rounded-full px-2 text-center',
                      'min-h-[44px] text-xs font-semibold transition-colors duration-200 sm:text-sm',
                      isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900',
                    ].join(' ')}
                    aria-pressed={isActive}
                  >
                    <span className="truncate">{tab.short}</span>
                  </button>
                );
              })}
            </div>
          </div>
          {/* Subtitle strip */}
          <div className="mt-3 text-center">
            <p className="text-xs font-medium text-slate-500 sm:text-sm">
              <span className="font-semibold text-slate-700">{activeTab.full}</span>
              <span className="mx-2 text-slate-300">·</span>
              <span>{activeTab.subtitle}</span>
            </p>
          </div>
        </div>

        {/* Body (animated) */}
        <main
          key={active}
          className="animate-[fadeInUp_360ms_ease-out] rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_20px_60px_-20px_rgb(15,23,42,0.12)] sm:p-8"
        >
          {active === 'overview' && <OverviewTab />}
          {active === 'breakdown-gap' && <BreakdownGapTab />}
          {active === 'prephrase-negate' && <PrephraseNegateTab />}
          {active === 'wrong-answers' && <WrongAnswersTab />}
          {active === 'worked-example' && <WorkedExampleTab />}
        </main>

        {/* Segment nav hints at bottom */}
        <nav className="mt-6 flex items-center justify-between text-xs text-slate-500">
          <button
            type="button"
            disabled={activeIndex === 0}
            onClick={() => activeIndex > 0 && setActive(TABS[activeIndex - 1].id)}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 font-medium text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ← Previous
          </button>
          <span className="font-medium text-slate-500">
            {activeIndex + 1} / {TABS.length}
          </span>
          <button
            type="button"
            disabled={activeIndex === TABS.length - 1}
            onClick={() => activeIndex < TABS.length - 1 && setActive(TABS[activeIndex + 1].id)}
            className="rounded-full bg-slate-900 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next →
          </button>
        </nav>
      </div>

      {/* keyframes for fade-in (inlined as style tag so Tailwind arbitrary anim works) */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

/* -------------------- Shared primitives -------------------- */

const Pill: React.FC<{ children: React.ReactNode; tone?: 'indigo' | 'slate' | 'emerald' | 'amber' | 'rose' }> = ({
  children,
  tone = 'slate',
}) => {
  const tones: Record<string, string> = {
    indigo: 'bg-indigo-50 text-indigo-700 ring-indigo-200',
    slate: 'bg-slate-100 text-slate-700 ring-slate-200',
    emerald: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    amber: 'bg-amber-50 text-amber-800 ring-amber-200',
    rose: 'bg-rose-50 text-rose-700 ring-rose-200',
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1 ${tones[tone]}`}>
      {children}
    </span>
  );
};

const Callout: React.FC<{
  icon: React.ReactNode;
  title: string;
  tone: 'tip' | 'note' | 'warn' | 'summary';
  children: React.ReactNode;
}> = ({ icon, title, tone, children }) => {
  const toneMap: Record<string, string> = {
    tip: 'border-indigo-200 bg-indigo-50/60',
    note: 'border-slate-200 bg-slate-50',
    warn: 'border-amber-200 bg-amber-50/60',
    summary: 'border-emerald-200 bg-emerald-50/60',
  };
  const iconTone: Record<string, string> = {
    tip: 'text-indigo-600',
    note: 'text-slate-600',
    warn: 'text-amber-600',
    summary: 'text-emerald-600',
  };
  return (
    <div className={`rounded-2xl border p-4 ${toneMap[tone]}`}>
      <div className="flex items-start gap-3">
        <div className={`mt-0.5 ${iconTone[tone]}`}>{icon}</div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-slate-900">{title}</p>
          <div className="mt-1 space-y-2 text-sm text-slate-700">{children}</div>
        </div>
      </div>
    </div>
  );
};

const SectionTitle: React.FC<{ eyebrow?: string; children: React.ReactNode }> = ({ eyebrow, children }) => (
  <div className="mb-3">
    {eyebrow && (
      <p className="text-[11px] font-semibold uppercase tracking-widest text-indigo-600">{eyebrow}</p>
    )}
    <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">{children}</h2>
  </div>
);

const DataTable: React.FC<{ headers: string[]; rows: React.ReactNode[][] }> = ({ headers, rows }) => (
  <div className="overflow-hidden rounded-2xl border border-slate-200">
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 text-slate-600">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 text-xs font-semibold uppercase tracking-wide">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {rows.map((row, i) => (
            <tr key={i} className="align-top">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-slate-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

/* -------------------- Tab 1 · Overview -------------------- */

const OverviewTab: React.FC = () => (
  <div className="space-y-6">
    <SectionTitle eyebrow="Why this method">A repeatable way to crack any NA question</SectionTitle>
    <p className="text-sm leading-relaxed text-slate-700">
      Necessary Assumption questions reward discipline over intuition. This lesson gives you a
      complete, repeatable method: understand the author's argument, find the logical gap,
      pre-phrase a &quot;must-have&quot; belief, and verify your answer with the{' '}
      <strong>Negation Test</strong>. Every step below includes concrete guidance for tricky
      situations.
    </p>

    {/* Timing budget card */}
    <Callout icon={<Clock className="h-5 w-5" />} title="Timing budget · ~1:30 per question" tone="tip">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-indigo-100 bg-white p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">Steps 1–3</p>
          <p className="mt-1 text-lg font-semibold text-slate-900">~50 seconds</p>
          <p className="text-xs text-slate-600">Read, find the gap, pre-phrase.</p>
        </div>
        <div className="rounded-xl border border-indigo-100 bg-white p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">Step 4</p>
          <p className="mt-1 text-lg font-semibold text-slate-900">~40 seconds</p>
          <p className="text-xs text-slate-600">Negate 1–2 candidates. Resist skipping it.</p>
        </div>
      </div>
    </Callout>

    {/* Airtight principle */}
    <Callout icon={<Shield className="h-5 w-5" />} title="The airtight principle" tone="summary">
      <p>
        If a statement is <strong>truly necessary</strong>, negating it <strong>destroys</strong>{' '}
        the argument. That is the whole logical foundation of the Negation Test — the
        difference between a good guess and a guaranteed correct answer.
      </p>
    </Callout>

    {/* 4-step preview */}
    <div>
      <SectionTitle eyebrow="Preview">The 4-Step Method</SectionTitle>
      <ol className="space-y-3">
        {[
          ['Break Down the Argument', 'Read the stimulus, isolate the conclusion and premises, and summarize the reasoning in simple terms.'],
          ['Identify the Logical Gap', 'Find the disconnect between evidence and conclusion. Ask: what did the author take for granted?'],
          ['Pre-phrase the Necessary Connection', 'Predict the type of assumption the argument depends on before looking at answers.'],
          ['Evaluate with the Negation Test', 'Negate your top candidate. If the negation destroys the argument, you have the necessary assumption.'],
        ].map(([title, body], i) => (
          <li key={i} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-indigo-200 hover:shadow-md">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">{i + 1}</div>
            <div>
              <p className="text-sm font-semibold text-slate-900">{title}</p>
              <p className="mt-0.5 text-sm text-slate-600">{body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </div>
);

/* -------------------- Tab 2 · Break Down & Find Gap -------------------- */

const BreakdownGapTab: React.FC = () => (
  <div className="space-y-8">
    {/* Step 1 */}
    <section>
      <div className="mb-3 flex items-center gap-3">
        <Pill tone="indigo">Step 1</Pill>
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Break Down the Argument</h2>
      </div>
      <p className="text-sm leading-relaxed text-slate-700">
        Before evaluating answer choices, map the argument's structure. You cannot find a missing
        piece until you understand how the existing pieces fit together.
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">Conclusion indicators</p>
          <p className="mt-1 text-sm italic text-slate-700">therefore, thus, so, hence, consequently</p>
          <p className="mt-2 text-xs text-slate-500">The author's primary claim, judgment, or prediction.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">Premise indicators</p>
          <p className="mt-1 text-sm italic text-slate-700">because, since, for, after all, given that</p>
          <p className="mt-2 text-xs text-slate-500">The evidence or reasons supporting the conclusion.</p>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
        <p className="font-semibold text-slate-900">Summarize the core argument</p>
        <p className="mt-1 italic">
          &quot;The author concludes [Conclusion], because of [Premises].&quot;
        </p>
      </div>

      <Callout icon={<AlertTriangle className="h-5 w-5" />} title="Watch for term mismatches" tone="warn">
        <p>
          NA questions frequently hinge on a mismatch between the <em>specific terms</em> used in
          the premises versus the conclusion. The conclusion will use a word or concept that the
          premises do not fully establish. That mismatch is the key to finding the gap.
        </p>
      </Callout>

      <div className="mt-4">
        <Callout icon={<Info className="h-5 w-5" />} title="When the stimulus is complex" tone="note">
          <p>
            Some NA stimuli contain multiple layers of reasoning. Focus on isolating the{' '}
            <strong>single most important logical leap</strong> — the jump from the key piece of
            evidence to the final conclusion. The necessary assumption almost always addresses
            this primary leap, not a secondary detail.
          </p>
        </Callout>
      </div>
    </section>

    {/* Step 2 */}
    <section>
      <div className="mb-3 flex items-center gap-3">
        <Pill tone="indigo">Step 2</Pill>
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Identify the Logical Gap</h2>
      </div>
      <p className="text-sm leading-relaxed text-slate-700">
        With the core argument identified, pinpoint the gap. Ask: <em>How did the author get from
        evidence to conclusion? What did they take for granted?</em> NA assumptions fall into two
        functional categories.
      </p>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-indigo-200 bg-indigo-50/50 p-5">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-indigo-600" />
            <p className="text-sm font-semibold text-indigo-900">A. Bridge Assumptions</p>
          </div>
          <p className="mt-1 text-xs text-indigo-900/70">Missing links that connect two ideas.</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li><strong>Definitional gap:</strong> treating two distinct ideas as the same (or incompatible).</li>
            <li><strong>Generalization gap:</strong> a specific instance applies to the whole group.</li>
            <li><strong>Key Ingredient gap:</strong> the intermediate benefit actually leads to the ultimate goal.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-300 bg-slate-50 p-5">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-slate-700" />
            <p className="text-sm font-semibold text-slate-900">B. Defender Assumptions</p>
          </div>
          <p className="mt-1 text-xs text-slate-600">Eliminate threats to the conclusion.</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li><strong>Causal gap:</strong> a specific alternative factor wasn't the real cause.</li>
            <li><strong>Feasibility gap:</strong> no obstacles would make the plan fail.</li>
            <li><strong>Source gap:</strong> a source's bias doesn't automatically invalidate their arguments.</li>
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <SectionTitle eyebrow="Reference">Common Logical Leaps</SectionTitle>
        <DataTable
          headers={['Leap Type', 'What the Author Does', 'What the NA Must Do']}
          rows={[
            [
              <span className="font-semibold text-slate-900">Causal Leap</span>,
              'Assumes a correlation proves a specific cause, ignoring alternatives',
              'Rule out a specific alternative cause or confirm the stated cause is the only one',
            ],
            [
              <span className="font-semibold text-slate-900">Generalization Leap</span>,
              'Assumes a specific example represents a broader category',
              'Confirm the example is representative or that the broader category shares the relevant trait',
            ],
            [
              <span className="font-semibold text-slate-900">Definitional Leap</span>,
              'Assumes two different terms are equivalent or incompatible',
              'Provide the definitional bridge connecting or separating the two terms',
            ],
            [
              <span className="font-semibold text-slate-900">Feasibility Leap</span>,
              'Assumes a proposed plan will work without obstacles',
              'Confirm a specific obstacle does not exist',
            ],
            [
              <span className="font-semibold text-slate-900">Analogy Leap</span>,
              'Assumes two situations are similar in a relevant way',
              'Confirm the situations share the specific feature that matters for the conclusion',
            ],
          ]}
        />
      </div>
    </section>
  </div>
);

/* -------------------- Tab 3 · Pre-phrase & Negate -------------------- */

const PrephraseNegateTab: React.FC = () => (
  <div className="space-y-8">
    {/* Step 3 */}
    <section>
      <div className="mb-3 flex items-center gap-3">
        <Pill tone="indigo">Step 3</Pill>
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Pre-phrase the Necessary Connection</h2>
      </div>
      <p className="text-sm leading-relaxed text-slate-700">
        Before looking at the answer choices, articulate the assumption in your own words. Complete
        this sentence:
      </p>

      <blockquote className="mt-4 rounded-2xl border-l-4 border-indigo-500 bg-indigo-50/60 px-5 py-4 text-base italic text-slate-800">
        &quot;For this argument to work, the author must believe that...&quot;
      </blockquote>

      <p className="mt-4 text-sm leading-relaxed text-slate-700">
        Your pre-phrase does not need to be the exact wording of the correct answer — it just needs
        to capture the <strong>type and direction</strong> of the belief the argument depends on.
      </p>

      <div className="mt-4">
        <Callout icon={<Lightbulb className="h-5 w-5" />} title="NA pre-phrases are softer than SA pre-phrases" tone="tip">
          <p>
            On Sufficient Assumption questions, your pre-phrase should be a precise logical statement
            (<code className="rounded bg-white px-1 font-mono text-xs">B → C</code>). On Necessary
            Assumption questions, capture the direction and type without demanding exact wording. NA
            answers are often more modest and less predictable, so a rigid pre-phrase can cause you
            to overlook the correct choice.
          </p>
        </Callout>
      </div>

      <div className="mt-6">
        <SectionTitle eyebrow="Templates">Pre-phrase Examples</SectionTitle>
        <DataTable
          headers={['Gap Type', 'Pre-phrase Template']}
          rows={[
            [
              <span className="font-semibold text-slate-900">Key Ingredient</span>,
              <span className="italic">&quot;The intermediate benefit must actually be useful for the ultimate goal.&quot;</span>,
            ],
            [
              <span className="font-semibold text-slate-900">Definitional Gap</span>,
              <span className="italic">&quot;These two concepts must be incompatible (or connected) in the way the author assumes.&quot;</span>,
            ],
            [
              <span className="font-semibold text-slate-900">Only Way</span>,
              <span className="italic">&quot;The stated cause must be the only effective way to produce the effect.&quot;</span>,
            ],
            [
              <span className="font-semibold text-slate-900">Closed Universe</span>,
              <span className="italic">&quot;The defined group must be the only eligible candidates.&quot;</span>,
            ],
            [
              <span className="font-semibold text-slate-900">Source Fallacy</span>,
              <span className="italic">&quot;A biased source's arguments must be inherently invalid.&quot;</span>,
            ],
          ]}
        />
      </div>
    </section>

    {/* Step 4 */}
    <section>
      <div className="mb-3 flex items-center gap-3">
        <Pill tone="indigo">Step 4</Pill>
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Evaluate with the Negation Test</h2>
      </div>
      <p className="text-sm leading-relaxed text-slate-700">
        The Negation Test is the definitive proof for this question type. It works on a simple,
        airtight principle: <strong>if a statement is truly necessary, the argument cannot survive
        without it.</strong>
      </p>

      <ol className="mt-4 space-y-3">
        {[
          ['Select your top candidate', 'The answer choice that best matches your pre-phrase.'],
          ['Negate the answer choice', 'Turn the statement into its logical opposite. Negate the logic, not just the verb.'],
          ['Insert the negation', 'Treat the negated statement as a new fact. Does the conclusion still make sense?'],
          ['Evaluate the impact', 'Argument collapses = CORRECT. Argument survives = INCORRECT.'],
        ].map(([title, body], i) => (
          <li key={i} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">{i + 1}</div>
            <div>
              <p className="text-sm font-semibold text-slate-900">{title}</p>
              <p className="mt-0.5 text-sm text-slate-600">{body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
          <div>
            <p className="text-sm font-semibold text-emerald-900">Argument collapses</p>
            <p className="text-xs text-emerald-900/80">The negation destroys the conclusion or breaks the link. The original choice was necessary. <strong>CORRECT.</strong></p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50/50 p-4">
          <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-rose-600" />
          <div>
            <p className="text-sm font-semibold text-rose-900">Argument survives</p>
            <p className="text-xs text-rose-900/80">The conclusion remains valid (even if slightly weakened). The choice was not necessary. <strong>INCORRECT.</strong></p>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="mt-6">
        <SectionTitle eyebrow="Reference">Negation Quick Reference</SectionTitle>
        <div className="divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {[
            { a: '"All X are Y"', b: '"Not all X are Y" (Some X are not Y)' },
            { a: '"Some X are Y"', b: '"None of X are Y"' },
            { a: '"X causes Y"', b: '"X does not cause Y"' },
            { a: '"X is the only way"', b: '"X is not the only way"' },
            { a: '"X can lead to Y"', b: '"X cannot lead to Y"' },
          ].map((p, i) => (
            <div key={i} className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center">
              <div className="flex-1 text-sm text-slate-700">
                <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-slate-400">Original</span>
                <span className="font-medium">{p.a}</span>
              </div>
              <ArrowRight className="hidden h-4 w-4 flex-shrink-0 text-indigo-500 sm:block" />
              <div className="flex-1 text-sm text-slate-700">
                <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-indigo-500">Logical negation</span>
                <span className="font-medium">{p.b}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4 traps */}
      <div className="mt-6">
        <SectionTitle eyebrow="Watch for">Why common traps fail the Negation Test</SectionTitle>
        <div className="grid gap-3 md:grid-cols-2">
          {[
            ['The Helpful Strengthener', "Negation weakens but doesn't destroy. Necessary assumptions are essential, not just helpful. If the argument limps along after the negation, the answer is wrong."],
            ['The Neutral Choice', "Negation has no impact. If the argument doesn't care whether the statement is true or false, it is not a necessary assumption."],
            ['The Restatement', 'Already stated in premises. Assumptions are unstated. Negating a restatement contradicts a premise — a false signal of collapse.'],
            ['The Sufficient Trap', 'Answer guarantees the conclusion. May or may not be necessary. Test carefully — sometimes sufficient is also necessary, sometimes too specific.'],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{title}</p>
              <p className="mt-1 text-xs text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

/* -------------------- Tab 4 · Wrong Answer Patterns -------------------- */

const WrongAnswersTab: React.FC = () => (
  <div className="space-y-6">
    <SectionTitle eyebrow="Elimination">Common Wrong Answer Patterns</SectionTitle>
    <p className="text-sm leading-relaxed text-slate-700">
      Wrong answers on NA questions fail in predictable ways. Recognizing these traps lets you
      eliminate quickly and with confidence.
    </p>

    <DataTable
      headers={['Trap Type', 'What It Does', 'How to Spot It']}
      rows={[
        [
          <span className="font-semibold text-slate-900">Out of Scope</span>,
          'Introduces irrelevant concepts or comparisons that do not affect the core argument.',
          <span className="italic">Ask: &quot;Does this choice address the specific gap between the premises and conclusion?&quot; If it talks about something the argument never discussed, eliminate.</span>,
        ],
        [
          <span className="font-semibold text-slate-900">Restatement</span>,
          'Merely rehashes information already explicitly stated in the premises. Assumptions must be unstated.',
          <span className="italic">Ask: &quot;Is this already said in the stimulus?&quot; If yes, the argument does not need to assume it.</span>,
        ],
        [
          <span className="font-semibold text-slate-900">Weakener</span>,
          'Undermines the conclusion. An author never assumes a fact that actively harms their own case.',
          <span className="italic">Check the direction: does it hurt or help the argument? If it hurts, eliminate immediately — wrong direction.</span>,
        ],
        [
          <span className="font-semibold text-slate-900">Too Strong / Sufficient</span>,
          'Goes beyond what the argument requires. Would prove the conclusion rather than merely supporting it.',
          <span className="italic">Apply the Negation Test carefully. Sometimes strong IS necessary; sometimes it is not. Let the test decide.</span>,
        ],
        [
          <span className="font-semibold text-slate-900">Wrong Direction</span>,
          'Addresses the right topic but connects the concepts in the wrong direction (e.g., B→A when the argument needs A→B).',
          <span className="italic">Diagram the relationship. Make sure the answer bridges the gap in the same direction the argument requires.</span>,
        ],
      ]}
    />

    <Callout icon={<Compass className="h-5 w-5" />} title="Direction check before Negation Test" tone="tip">
      <p>
        Two of the five traps — Weakener and Wrong Direction — can be eliminated on direction
        alone, before you ever negate. Save the Negation Test for the 1–2 survivors that genuinely
        match your pre-phrase.
      </p>
    </Callout>
  </div>
);

/* -------------------- Tab 5 · Worked Example & Takeaways -------------------- */

const WorkedExampleTab: React.FC = () => (
  <div className="space-y-6">
    <div>
      <div className="mb-2 flex items-center gap-3">
        <Bike className="h-5 w-5 text-indigo-600" />
        <SectionTitle eyebrow="Walkthrough">Bike Path & Traffic Congestion</SectionTitle>
      </div>
      <p className="text-sm leading-relaxed text-slate-700">
        Let's apply all four steps to a complete Necessary Assumption question from start to
        finish.
      </p>
    </div>

    <blockquote className="rounded-2xl border-l-4 border-slate-400 bg-slate-50 px-5 py-4 text-sm italic text-slate-800">
      &quot;Editorial: Our city should convert the abandoned rail corridor into a bicycle commuting
      path. A recent survey found that 60% of residents who live within two miles of the corridor
      would use it for daily commuting if it were available. Converting the corridor would
      therefore significantly reduce automobile traffic congestion in the city.&quot;
    </blockquote>

    <p className="text-sm leading-relaxed text-slate-700">
      This example highlights the classic <strong>Key Ingredient gap</strong>: interest in biking
      only matters to the conclusion if at least some of those riders are currently contributing
      to car traffic.
    </p>

    {/* 4-step walkthrough */}
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2">
          <Pill tone="indigo">Step 1</Pill>
          <p className="text-sm font-semibold text-slate-900">Break Down the Argument</p>
        </div>
        <div className="mt-3 space-y-2 text-sm text-slate-700">
          <p><strong>Conclusion:</strong> Converting the corridor would significantly reduce automobile traffic congestion.</p>
          <p><strong>Premise:</strong> 60% of nearby residents would use the bicycle path for daily commuting.</p>
          <p><strong>Core Logic:</strong> People would bike → traffic congestion drops.</p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2">
          <Pill tone="indigo">Step 2</Pill>
          <p className="text-sm font-semibold text-slate-900">Identify the Logical Gap</p>
        </div>
        <p className="mt-3 text-sm text-slate-700">
          The premises tell us people would <em>bike</em>. The conclusion says{' '}
          <em>automobile traffic</em> would drop. But do these bikers currently drive cars? If the
          60% who say they would bike currently walk, take the bus, or work from home, then adding
          a bike path would not remove any cars from the road. The argument assumes at least some
          of these potential cyclists are currently <strong>automobile commuters</strong>. Classic
          Key Ingredient gap: the intermediate effect (biking) only reduces congestion if those
          people were previously contributing to it.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2">
          <Pill tone="indigo">Step 3</Pill>
          <p className="text-sm font-semibold text-slate-900">Pre-phrase</p>
        </div>
        <blockquote className="mt-3 rounded-xl border-l-4 border-indigo-400 bg-indigo-50/50 px-4 py-3 text-sm italic text-slate-800">
          &quot;For this argument to work, the author must believe that at least some of the people
          who would use the bike path currently commute by car. Otherwise, no cars are removed from
          the road, and congestion doesn't change.&quot;
        </blockquote>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2">
          <Pill tone="indigo">Step 4</Pill>
          <p className="text-sm font-semibold text-slate-900">Evaluate with the Negation Test</p>
        </div>
        <p className="mt-3 text-sm text-slate-700">
          Scan for the answer that matches our pre-phrase about current car commuters. Negate that
          bridge:
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Original</p>
            <p className="mt-1 text-slate-800">&quot;At least some would-be cyclists currently commute by car.&quot;</p>
          </div>
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-rose-600">Negated</p>
            <p className="mt-1 text-slate-800">&quot;None of them currently drive.&quot;</p>
          </div>
        </div>
        <div className="mt-3 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
          <p className="text-sm text-emerald-900">
            Zero cars removed → congestion doesn't change → conclusion collapses →{' '}
            <strong>the assumption is necessary.</strong>
          </p>
        </div>
      </div>
    </div>

    <Callout icon={<Info className="h-5 w-5" />} title="Final check — why the argument depends on this link" tone="note">
      <p>
        The conclusion needs only one indispensable fact: some would-be cyclists must currently
        be car commuters. Stronger claims about how many commuters live nearby, how long the
        corridor is, or whether biking is environmentally better may be useful in the real world,
        but the argument does not collapse without them. <strong>Necessary Assumption is about
        the smallest bridge whose negation destroys the conclusion.</strong>
      </p>
    </Callout>

    <Callout icon={<BookOpen className="h-5 w-5" />} title="Key Takeaways" tone="summary">
      <ul className="ml-4 list-disc space-y-2">
        <li>
          <strong>Flow:</strong> Break Down → Find the Gap → Pre-phrase → Negate and Verify.
        </li>
        <li>
          Between two close choices, negate both — one destroys (correct), the other merely
          weakens (strengthener).
        </li>
        <li>
          NA answers are often <strong>modest</strong>. Don't look for the answer that &quot;best
          supports&quot; — look for the answer whose <strong>denial is fatal</strong>.
        </li>
        <li>
          Watch for the <strong>Key Ingredient gap</strong> — one of the most common NA patterns.
          When evidence is about one thing and the conclusion is about another, the necessary
          assumption is always that the first thing is connected to the second.
        </li>
      </ul>
    </Callout>
  </div>
);

export default NegationLessonSegmented;
