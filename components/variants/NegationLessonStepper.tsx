/*
 * NegationLessonStepper — Numbered 1→5 wizard-style stepper
 *
 * This variant presents the Necessary Assumption lesson as a guided five-step
 * wizard. A horizontal progress rail at the top of the card shows five circular
 * nodes (numbered 1–5) connected by a thin line that fills proportionally as
 * the learner advances. The active node is filled with an accent color; nodes
 * the student has already "completed" (by clicking Next) show a checkmark;
 * upcoming nodes are outlined. Prominent "Previous" and "Next" buttons at the
 * bottom of every panel advance the wizard, giving the lesson a warm,
 * Typeform-like onboarding feel so the student feels walked through a
 * protocol rather than dumped into a scrolling document.
 */

import React, { useState } from 'react';
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Target,
  Layers,
  Search,
  MessageSquare,
  FlaskConical,
  AlertTriangle,
  BookOpen,
  Sparkles,
  Bike,
} from 'lucide-react';

type StepId = 'overview' | 'breakdown-gap' | 'prephrase-negate' | 'wrong-answers' | 'worked-example';

interface StepMeta {
  id: StepId;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}

const STEPS: StepMeta[] = [
  { id: 'overview', label: 'Overview', sublabel: 'Why & when', icon: <Target className="h-4 w-4" /> },
  { id: 'breakdown-gap', label: 'Break Down & Gap', sublabel: 'Steps 1–2', icon: <Layers className="h-4 w-4" /> },
  { id: 'prephrase-negate', label: 'Pre-phrase & Negate', sublabel: 'Steps 3–4', icon: <FlaskConical className="h-4 w-4" /> },
  { id: 'wrong-answers', label: 'Wrong Answers', sublabel: '5 traps', icon: <AlertTriangle className="h-4 w-4" /> },
  { id: 'worked-example', label: 'Worked Example', sublabel: 'Bike path & takeaways', icon: <BookOpen className="h-4 w-4" /> },
];

// ---------- Inline primitives ----------

const SectionHeading: React.FC<{ eyebrow?: string; title: string; sub?: string }> = ({ eyebrow, title, sub }) => (
  <div className="mb-5">
    {eyebrow && (
      <div className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-amber-600">{eyebrow}</div>
    )}
    <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
    {sub && <p className="mt-2 text-sm text-slate-600">{sub}</p>}
  </div>
);

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mb-4 text-[15px] leading-7 text-slate-700">{children}</p>
);

const Callout: React.FC<{
  variant?: 'tip' | 'note' | 'summary' | 'warning';
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}> = ({ variant = 'note', title, children, icon }) => {
  const styles = {
    tip: 'border-amber-300 bg-amber-50 text-amber-950',
    note: 'border-slate-300 bg-slate-50 text-slate-800',
    summary: 'border-emerald-300 bg-emerald-50 text-emerald-950',
    warning: 'border-rose-300 bg-rose-50 text-rose-950',
  }[variant];
  return (
    <div className={`mb-5 rounded-xl border-l-4 p-5 ${styles}`}>
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
        {icon}
        <span>{title}</span>
      </div>
      <div className="text-[14px] leading-6">{children}</div>
    </div>
  );
};

const Blockquote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <blockquote className="mb-5 rounded-lg border-l-4 border-amber-400 bg-amber-50/60 p-4 italic leading-7 text-slate-700">
    {children}
  </blockquote>
);

const ProcessList: React.FC<{ title?: string; steps: React.ReactNode[] }> = ({ title, steps }) => (
  <div className="mb-5 rounded-xl border border-slate-200 bg-white p-5">
    {title && <div className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">{title}</div>}
    <ol className="space-y-4">
      {steps.map((s, i) => (
        <li key={i} className="flex gap-4">
          <div className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
            {i + 1}
          </div>
          <div className="flex-1 text-[14px] leading-6 text-slate-700">{s}</div>
        </li>
      ))}
    </ol>
  </div>
);

const DataTable: React.FC<{ headers: string[]; rows: (React.ReactNode)[][] }> = ({ headers, rows }) => (
  <div className="mb-5 overflow-hidden rounded-xl border border-slate-200">
    <table className="w-full text-left text-sm">
      <thead className="bg-slate-100">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-600">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-200 bg-white">
        {rows.map((r, ri) => (
          <tr key={ri} className="align-top">
            {r.map((cell, ci) => (
              <td key={ci} className="px-4 py-3 leading-6 text-slate-700">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const BreakdownPairs: React.FC<{
  pairs: { from: string; to: string }[];
  fromLabel: string;
  toLabel: string;
}> = ({ pairs, fromLabel, toLabel }) => (
  <div className="mb-5 space-y-2">
    {pairs.map((p, i) => (
      <div key={i} className="grid grid-cols-1 gap-2 rounded-lg border border-slate-200 bg-white p-3 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{fromLabel}</div>
          <div className="mt-1 font-mono text-sm text-slate-800">{p.from}</div>
        </div>
        <div className="hidden h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600 md:flex">
          <ChevronRight className="h-4 w-4" />
        </div>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-amber-600">{toLabel}</div>
          <div className="mt-1 font-mono text-sm text-slate-800">{p.to}</div>
        </div>
      </div>
    ))}
  </div>
);

// ---------- Stepper rail ----------

const StepperRail: React.FC<{
  activeIdx: number;
  completed: Set<number>;
  onJump: (i: number) => void;
}> = ({ activeIdx, completed, onJump }) => {
  const progressPct = STEPS.length > 1 ? (activeIdx / (STEPS.length - 1)) * 100 : 0;
  return (
    <div className="relative px-4 pb-6 pt-8">
      {/* background track */}
      <div className="absolute left-[calc(10%+1rem)] right-[calc(10%+1rem)] top-[3.25rem] h-[2px] rounded bg-slate-200" />
      {/* filled track */}
      <div
        className="absolute left-[calc(10%+1rem)] top-[3.25rem] h-[2px] rounded bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-500"
        style={{ width: `calc((100% - 20% - 2rem) * ${progressPct / 100})` }}
      />
      <div className="relative grid grid-cols-5 gap-2">
        {STEPS.map((s, i) => {
          const isActive = i === activeIdx;
          const isDone = completed.has(i);
          const isUpcoming = !isActive && !isDone;
          return (
            <button
              key={s.id}
              onClick={() => onJump(i)}
              className="group flex flex-col items-center gap-2 focus:outline-none"
            >
              <div
                className={[
                  'flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300',
                  isActive ? 'border-amber-500 bg-amber-500 text-white shadow-lg shadow-amber-200 ring-4 ring-amber-100' : '',
                  isDone ? 'border-emerald-500 bg-emerald-500 text-white' : '',
                  isUpcoming ? 'border-slate-300 bg-white text-slate-400 group-hover:border-slate-400 group-hover:text-slate-600' : '',
                ].join(' ')}
              >
                {isDone ? <Check className="h-5 w-5" strokeWidth={3} /> : i + 1}
              </div>
              <div className="text-center">
                <div
                  className={[
                    'text-[11px] font-semibold leading-tight md:text-xs',
                    isActive ? 'text-amber-700' : isDone ? 'text-emerald-700' : 'text-slate-500',
                  ].join(' ')}
                >
                  {s.label}
                </div>
                <div className="mt-0.5 hidden text-[10px] text-slate-400 md:block">{s.sublabel}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// ---------- Panels ----------

const OverviewPanel: React.FC = () => (
  <div>
    <SectionHeading
      eyebrow="Step 0 · Ground yourself"
      title="The 4-Step Method for Necessary Assumption"
      sub="Before you touch the answer choices, you have a protocol: understand the argument, find the logical gap, pre-phrase the missing belief, and verify with the Negation Test."
    />

    <Callout variant="tip" title="Timing Budget · about 1 minute 30 seconds" icon={<Clock className="h-4 w-4" />}>
      Spend roughly <strong>50 seconds</strong> on Steps 1–3 (reading, gap-finding, pre-phrasing) and about{' '}
      <strong>40 seconds</strong> on Step 4 (evaluating with the Negation Test). The test feels slow at first, but with
      practice you will only apply it to 1–2 candidate choices. Resist skipping it — the test is the difference between
      a good guess and a guaranteed correct answer.
    </Callout>

    <Callout variant="summary" title="The airtight principle" icon={<Sparkles className="h-4 w-4" />}>
      If an assumption is truly <strong>necessary</strong>, negating it must <strong>destroy</strong> the argument. That
      is not a heuristic; it is the definition. Everything else this lesson teaches is there to help you apply that one
      test cleanly.
    </Callout>

    <ProcessList
      title="The 4 Steps at a Glance"
      steps={[
        <span>
          <strong>Break Down the Argument</strong> — isolate the conclusion and premises; summarize in plain terms.
        </span>,
        <span>
          <strong>Identify the Logical Gap</strong> — what did the author take for granted between evidence and
          conclusion?
        </span>,
        <span>
          <strong>Pre-phrase the Necessary Connection</strong> — predict the type of assumption before looking at
          choices.
        </span>,
        <span>
          <strong>Evaluate with the Negation Test</strong> — flip your top candidate; if the argument collapses, you
          found it.
        </span>,
      ]}
    />
  </div>
);

const BreakdownGapPanel: React.FC = () => (
  <div>
    <SectionHeading
      eyebrow="Steps 1 & 2"
      title="Break Down the Argument, Then Find the Gap"
      sub="You cannot find a missing piece until you understand how the existing pieces fit together."
    />

    <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50/50 p-5">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-amber-800">
        <Search className="h-4 w-4" /> Step 1 · Break Down the Argument
      </div>
      <ul className="space-y-3 text-[14px] leading-6 text-slate-700">
        <li>
          <strong>Find the Main Conclusion.</strong> Look for indicators: <em>therefore, thus, so, hence, consequently</em>.
        </li>
        <li>
          <strong>Find the Premises.</strong> Look for indicators: <em>because, since, for, after all, given that</em>.
        </li>
        <li>
          <strong>Summarize:</strong> "The author concludes <em>[C]</em>, because of <em>[P]</em>."
        </li>
        <li>
          Watch for <strong>term mismatches</strong> — NA questions often hinge on a concept that appears in the
          conclusion but was never fully established by the premises.
        </li>
      </ul>
    </div>

    <Callout variant="note" title="When Step 1 gets tricky">
      Some stimuli have multiple layers of reasoning. When it's complex, focus on isolating the{' '}
      <strong>single most important logical leap</strong> — the jump from the key evidence to the final conclusion. The
      necessary assumption almost always addresses this primary leap, not a secondary detail.
    </Callout>

    <div className="mb-6 rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
        <Layers className="h-4 w-4" /> Step 2 · Identify the Logical Gap
      </div>
      <Paragraph>
        Ask: "How did the author get from the evidence to the conclusion? What idea did they take for granted?" NA
        assumptions fall into two functional categories:
      </Paragraph>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-blue-200 bg-blue-50/60 p-4">
          <div className="mb-2 text-sm font-bold text-blue-900">A. Bridge Assumptions</div>
          <div className="mb-2 text-xs italic text-blue-800">Missing links that connect two different ideas.</div>
          <ul className="space-y-1.5 text-[13px] leading-5 text-slate-700">
            <li>
              <strong>Definitional gap:</strong> treats two distinct ideas as the same (or as incompatible).
            </li>
            <li>
              <strong>Generalization gap:</strong> specific instance assumed to apply to the whole group.
            </li>
            <li>
              <strong>Key Ingredient gap:</strong> intermediate benefit assumed to lead to the ultimate goal.
            </li>
          </ul>
        </div>
        <div className="rounded-lg border border-violet-200 bg-violet-50/60 p-4">
          <div className="mb-2 text-sm font-bold text-violet-900">B. Defender Assumptions</div>
          <div className="mb-2 text-xs italic text-violet-800">Eliminate threats that could destroy the argument.</div>
          <ul className="space-y-1.5 text-[13px] leading-5 text-slate-700">
            <li>
              <strong>Causal gap:</strong> an alternative factor wasn't the real cause.
            </li>
            <li>
              <strong>Feasibility gap:</strong> no obstacles will make the plan fail.
            </li>
            <li>
              <strong>Source gap:</strong> a source's bias doesn't automatically invalidate their argument.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">Common Logical Leaps</h4>
    <DataTable
      headers={['Leap Type', 'What the Author Does', 'What the NA Must Do']}
      rows={[
        [
          <strong>Causal Leap</strong>,
          'Assumes a correlation proves a specific cause, ignoring alternatives',
          'Rule out an alternative cause or confirm the stated cause is the only one',
        ],
        [
          <strong>Generalization Leap</strong>,
          'Assumes a specific example represents a broader category',
          'Confirm representativeness or that the broader category shares the trait',
        ],
        [
          <strong>Definitional Leap</strong>,
          'Assumes two different terms are equivalent or incompatible',
          'Provide the definitional bridge connecting or separating the two terms',
        ],
        [
          <strong>Feasibility Leap</strong>,
          'Assumes a proposed plan will work without obstacles',
          'Confirm a specific obstacle does not exist',
        ],
        [
          <strong>Analogy Leap</strong>,
          'Assumes two situations are similar in a relevant way',
          'Confirm they share the specific feature that matters for the conclusion',
        ],
      ]}
    />
  </div>
);

const PrephraseNegatePanel: React.FC = () => (
  <div>
    <SectionHeading
      eyebrow="Steps 3 & 4"
      title="Pre-phrase the Belief, Then Run the Negation Test"
      sub="You articulate the missing belief in your own words before looking at choices — then you verify by flipping the logic."
    />

    <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50/50 p-5">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-amber-800">
        <MessageSquare className="h-4 w-4" /> Step 3 · Pre-phrase the Necessary Connection
      </div>
      <Paragraph>Complete this sentence:</Paragraph>
      <div className="mb-4 rounded-lg bg-white p-4 text-center text-[15px] font-semibold italic text-amber-900 shadow-sm">
        "For this argument to work, the author must believe that…"
      </div>
      <Paragraph>
        Your pre-phrase doesn't need to match the exact wording of the correct answer. It needs to capture the{' '}
        <strong>type and direction</strong> of the belief the argument depends on, so you can scan choices efficiently.
      </Paragraph>
    </div>

    <Callout variant="tip" title="NA Pre-phrases Are Softer Than SA Pre-phrases">
      Sufficient Assumption demands a precise <code className="rounded bg-amber-100 px-1">B → C</code>. Necessary
      Assumption only demands the right <strong>direction and type</strong>. NA answers are often modest and
      unpredictable — a rigid pre-phrase can cause you to overlook the correct choice.
    </Callout>

    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">5 Pre-phrase Templates</h4>
    <DataTable
      headers={['Gap Type', 'Pre-phrase Template']}
      rows={[
        [<strong>Key Ingredient</strong>, '"The intermediate benefit must actually be useful for the ultimate goal."'],
        [<strong>Definitional Gap</strong>, '"These two concepts must be incompatible (or connected) in the way the author assumes."'],
        [<strong>Only Way</strong>, '"The stated cause must be the only effective way to produce the effect."'],
        [<strong>Closed Universe</strong>, '"The defined group must be the only eligible candidates."'],
        [<strong>Source Fallacy</strong>, '"A biased source\'s arguments must be inherently invalid."'],
      ]}
    />

    <div className="mb-6 mt-8 rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
        <FlaskConical className="h-4 w-4" /> Step 4 · Evaluate with the Negation Test
      </div>
      <Paragraph>
        The Negation Test is the definitive proof for this question type. If a statement is truly necessary, the
        argument cannot survive without it.
      </Paragraph>
      <ProcessList
        steps={[
          <span>
            <strong>Select your top candidate</strong> — the choice that best matches your pre-phrase.
          </span>,
          <span>
            <strong>Negate the answer choice.</strong> Turn it into its logical opposite. Flip the{' '}
            <em>logic</em>, not just the verb.
          </span>,
          <span>
            <strong>Insert the negation</strong> as a new fact. Does the conclusion still make sense?
          </span>,
          <span>
            <strong>Evaluate:</strong> Argument collapses = <strong className="text-emerald-700">CORRECT</strong>.
            Argument survives (even if weakened) = <strong className="text-rose-700">INCORRECT</strong>.
          </span>,
        ]}
      />
    </div>

    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">Negation Quick Reference</h4>
    <BreakdownPairs
      fromLabel="Original Statement"
      toLabel="Logical Negation"
      pairs={[
        { from: '"All X are Y"', to: '"Not all X are Y" (Some X are not Y)' },
        { from: '"Some X are Y"', to: '"None of X are Y"' },
        { from: '"X causes Y"', to: '"X does not cause Y"' },
        { from: '"X is the only way"', to: '"X is not the only way"' },
        { from: '"X can lead to Y"', to: '"X cannot lead to Y"' },
      ]}
    />

    <h4 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wide text-slate-600">
      4 Common Traps at Step 4
    </h4>
    <div className="grid gap-3 md:grid-cols-2">
      <div className="rounded-lg border border-rose-200 bg-rose-50/50 p-4">
        <div className="mb-1 text-sm font-semibold text-rose-900">The Helpful Strengthener</div>
        <div className="text-[13px] leading-5 text-slate-700">
          Negation weakens but doesn't destroy. Necessary assumptions are <em>essential</em>, not just helpful.
        </div>
      </div>
      <div className="rounded-lg border border-rose-200 bg-rose-50/50 p-4">
        <div className="mb-1 text-sm font-semibold text-rose-900">The Neutral Choice</div>
        <div className="text-[13px] leading-5 text-slate-700">
          Negation has no impact. If the argument doesn't care whether the statement is true, it isn't necessary.
        </div>
      </div>
      <div className="rounded-lg border border-rose-200 bg-rose-50/50 p-4">
        <div className="mb-1 text-sm font-semibold text-rose-900">The Restatement</div>
        <div className="text-[13px] leading-5 text-slate-700">
          Merely paraphrases an explicit premise. Assumptions are <em>unstated</em>; you can't "assume" something
          already said.
        </div>
      </div>
      <div className="rounded-lg border border-rose-200 bg-rose-50/50 p-4">
        <div className="mb-1 text-sm font-semibold text-rose-900">The Sufficient Trap</div>
        <div className="text-[13px] leading-5 text-slate-700">
          Answer would <em>guarantee</em> the conclusion; may or may not also be necessary. Test carefully — let the
          Negation Test decide.
        </div>
      </div>
    </div>
  </div>
);

const WrongAnswersPanel: React.FC = () => (
  <div>
    <SectionHeading
      eyebrow="Step 4.5 · Pattern recognition"
      title="Common Wrong Answer Patterns"
      sub="Wrong answers on NA questions fail in predictable ways. Spotting the trap lets you eliminate with confidence."
    />

    <DataTable
      headers={['Trap Type', 'What It Does', 'How to Spot It']}
      rows={[
        [
          <strong>Out of Scope</strong>,
          'Introduces irrelevant concepts or comparisons that do not affect the core argument.',
          <span>
            Ask: <em>"Does this address the specific gap between the premises and conclusion?"</em> If the choice talks
            about something the argument never discussed, eliminate it.
          </span>,
        ],
        [
          <strong>Restatement</strong>,
          'Rehashes information already explicitly stated in the premises. Assumptions must be unstated.',
          <span>
            Ask: <em>"Is this already said in the stimulus?"</em> If yes, the argument doesn't need to assume it — it
            already states it.
          </span>,
        ],
        [
          <strong>Weakener</strong>,
          'Undermines the conclusion. An author never assumes a fact that actively harms their own case.',
          <span>
            Check direction: does this hurt or help? If it hurts, <strong>eliminate immediately</strong>.
          </span>,
        ],
        [
          <strong>Too Strong / Sufficient</strong>,
          'Goes beyond what the argument requires — would prove the conclusion rather than merely supporting it.',
          <span>
            Apply the Negation Test carefully. Sometimes a strong answer IS necessary; sometimes it is not. Let the
            test decide.
          </span>,
        ],
        [
          <strong>Wrong Direction</strong>,
          'Addresses the right topic but connects the concepts in the wrong direction (B→A instead of A→B).',
          <span>
            Diagram the relationship if needed. Make sure the answer bridges the gap in the same direction the
            argument requires.
          </span>,
        ],
      ]}
    />

    <Callout variant="note" title="Quick elimination flow">
      Scope check → Restatement check → Direction check → Negation Test on the survivors. Three of the five trap types
      can be eliminated <em>before</em> you ever flip anything — save the Negation Test for the 1–2 candidates that
      actually match your pre-phrase.
    </Callout>
  </div>
);

const WorkedExamplePanel: React.FC = () => (
  <div>
    <SectionHeading
      eyebrow="Putting it together"
      title="Worked Example · Bike Path & Traffic Congestion"
      sub="A complete 4-step walkthrough, followed by the key takeaways you should leave with."
    />

    <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-amber-700">
      <Bike className="h-4 w-4" /> The stimulus
    </div>
    <Blockquote>
      "Editorial: Our city should convert the abandoned rail corridor into a bicycle commuting path. A recent survey
      found that 60% of residents who live within two miles of the corridor would use it for daily commuting if it were
      available. Converting the corridor would therefore significantly reduce automobile traffic congestion in the
      city."
    </Blockquote>
    <Paragraph>
      This is a classic <strong>Key Ingredient gap</strong>: interest in biking only matters to automobile congestion
      if at least some of those would-be cyclists currently drive cars.
    </Paragraph>

    <ProcessList
      title="Applying the 4-Step Method"
      steps={[
        <div>
          <div className="mb-1 font-semibold text-slate-900">Step 1 — Break Down the Argument</div>
          <ul className="ml-4 list-disc space-y-1 text-[13px]">
            <li>
              <strong>Conclusion:</strong> Converting the corridor would significantly reduce automobile traffic
              congestion.
            </li>
            <li>
              <strong>Premise:</strong> 60% of nearby residents would use the bike path for daily commuting.
            </li>
            <li>
              <strong>Core Logic:</strong> People would bike → traffic congestion drops.
            </li>
          </ul>
        </div>,
        <div>
          <div className="mb-1 font-semibold text-slate-900">Step 2 — Identify the Logical Gap</div>
          <div className="text-[13px] leading-6">
            Premises are about <em>bikers</em>; conclusion is about <em>cars</em>. If the 60% who would bike currently
            walk, take the bus, or work from home, adding a bike path removes zero cars from the road. The argument
            assumes at least some of the would-be cyclists <strong>currently drive</strong>.
          </div>
        </div>,
        <div>
          <div className="mb-1 font-semibold text-slate-900">Step 3 — Pre-phrase</div>
          <div className="rounded-md bg-amber-50 p-3 text-[13px] italic leading-6 text-amber-900">
            "At least some of the people who would use the bike path currently commute by car. Otherwise, no cars are
            removed, and congestion doesn't change."
          </div>
        </div>,
        <div>
          <div className="mb-1 font-semibold text-slate-900">Step 4 — Negate and Verify</div>
          <div className="text-[13px] leading-6">
            Negate the bridge: <em>"None of the potential cyclists currently commute by automobile."</em> → Zero cars
            removed → congestion unchanged →{' '}
            <strong className="text-rose-700">conclusion collapses</strong>. The original assumption is necessary.
          </div>
        </div>,
      ]}
    />

    <Callout variant="note" title="Final Check">
      The conclusion needs only one indispensable fact: some would-be cyclists must currently be car commuters. Other
      claims (how many residents live nearby, whether biking is greener) may be useful, but the argument does not
      collapse without them. NA is about the <strong>smallest bridge whose negation destroys the conclusion</strong>.
    </Callout>

    <h4 className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wide text-slate-600">Key Takeaways</h4>
    <Callout variant="summary" title="Leave with these four moves">
      <ul className="space-y-2">
        <li>
          <strong>The flow:</strong> Break Down → Find the Gap → Pre-phrase → Negate and Verify.
        </li>
        <li>
          <strong>Between two close choices, negate both.</strong> The one whose negation <em>destroys</em> the
          argument is the necessary assumption; the one whose negation merely <em>weakens</em> it is a strengthener.
        </li>
        <li>
          <strong>NA answers are often modest.</strong> Don't hunt for the answer that "best supports" — hunt for the
          answer whose <strong>denial is fatal</strong>. "At least some" is cautious, but its denial can be catastrophic.
        </li>
        <li>
          <strong>Watch for the Key Ingredient gap.</strong> When evidence is about one thing and the conclusion is
          about another, the NA is always that the first thing is connected to the second.
        </li>
      </ul>
    </Callout>
  </div>
);

// ---------- Root component ----------

export const NegationLessonStepper: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [completed, setCompleted] = useState<Set<number>>(new Set());

  const goTo = (i: number) => {
    if (i < 0 || i >= STEPS.length) return;
    setActiveIdx(i);
  };

  const handleNext = () => {
    if (activeIdx < STEPS.length - 1) {
      setCompleted((prev) => {
        const next = new Set(prev);
        next.add(activeIdx);
        return next;
      });
      setActiveIdx((i) => i + 1);
    } else {
      // final step — mark it complete on last Next (which now says "Finish")
      setCompleted((prev) => {
        const next = new Set(prev);
        next.add(activeIdx);
        return next;
      });
    }
  };

  const handlePrev = () => {
    if (activeIdx > 0) setActiveIdx((i) => i - 1);
  };

  const current = STEPS[activeIdx];
  const isLast = activeIdx === STEPS.length - 1;
  const allDone = completed.size === STEPS.length;

  return (
    <div className="mx-auto w-full max-w-5xl rounded-2xl border border-slate-200 bg-gradient-to-b from-amber-50/30 to-white shadow-sm">
      {/* Header */}
      <div className="border-b border-slate-200 px-6 pt-6">
        <div className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-amber-600">
          Necessary Assumption · Step-by-Step Guide
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
            The Negation Test: a walkable protocol
          </h2>
          <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-1">
              {current.icon}
              <span>
                Step {activeIdx + 1} of {STEPS.length}
              </span>
            </div>
            <span className="h-3 w-px bg-slate-300" />
            <span className="text-slate-500">{completed.size} completed</span>
          </div>
        </div>
        <StepperRail activeIdx={activeIdx} completed={completed} onJump={goTo} />
      </div>

      {/* Panel */}
      <div className="px-6 py-8 md:px-10">
        {current.id === 'overview' && <OverviewPanel />}
        {current.id === 'breakdown-gap' && <BreakdownGapPanel />}
        {current.id === 'prephrase-negate' && <PrephraseNegatePanel />}
        {current.id === 'wrong-answers' && <WrongAnswersPanel />}
        {current.id === 'worked-example' && <WorkedExamplePanel />}
      </div>

      {/* Footer nav */}
      <div className="flex flex-col items-stretch justify-between gap-3 border-t border-slate-200 bg-slate-50/70 px-6 py-4 md:flex-row md:items-center">
        <button
          onClick={handlePrev}
          disabled={activeIdx === 0}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </button>

        <div className="flex items-center gap-2 self-center text-xs text-slate-500">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={[
                'h-1.5 rounded-full transition-all',
                i === activeIdx ? 'w-8 bg-amber-500' : completed.has(i) ? 'w-4 bg-emerald-400' : 'w-4 bg-slate-300',
              ].join(' ')}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={isLast && allDone}
          className={[
            'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition',
            isLast && allDone
              ? 'cursor-not-allowed bg-emerald-500 opacity-80'
              : isLast
              ? 'bg-emerald-600 hover:bg-emerald-700'
              : 'bg-amber-600 hover:bg-amber-700',
          ].join(' ')}
        >
          {isLast && allDone ? (
            <>
              <Check className="h-4 w-4" strokeWidth={3} />
              Lesson complete
            </>
          ) : isLast ? (
            <>
              Finish lesson
              <Check className="h-4 w-4" strokeWidth={3} />
            </>
          ) : (
            <>
              Next
              <ChevronRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default NegationLessonStepper;
