/*
 * NegationLessonLeftRail — Docs-Site Vertical Left-Rail Navigation
 *
 * Pattern: Stripe/Linear/Tailwind-docs-style sticky left rail. On desktop (md+),
 * a 240px sticky column hosts the five lesson sections as a vertical list, each
 * entry showing a small muted step number circle, a label, and a one-line
 * subtitle summarizing what's inside. The active item is marked by a thick
 * indigo left-edge indicator plus a tinted background. On mobile (< md), the
 * rail collapses into a native-feeling select dropdown pinned above the panel.
 * Neutral slate palette with a single indigo accent. Content renders inline as
 * JSX primitives (paragraph, table, callout, process-list, breakdown) so the
 * file stays self-contained and parallel to the source lesson.
 */

import React, { useState } from 'react';
import {
  BookOpen,
  Scissors,
  Wand2,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Lightbulb,
  ShieldCheck,
  AlertCircle,
  ArrowRight,
  Target,
  Flag,
} from 'lucide-react';

// ---------- Types ----------
type SectionId =
  | 'overview'
  | 'breakdown-gap'
  | 'prephrase-negate'
  | 'wrong-answers'
  | 'worked-example';

interface RailSection {
  id: SectionId;
  step: number;
  label: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}

// ---------- Rail config ----------
const SECTIONS: RailSection[] = [
  {
    id: 'overview',
    step: 1,
    label: 'Overview',
    subtitle: 'Why the method, timing, airtight principle',
    icon: BookOpen,
  },
  {
    id: 'breakdown-gap',
    step: 2,
    label: 'Break Down & Find Gap',
    subtitle: 'Steps 1–2: argument anatomy, Bridge vs Defender',
    icon: Scissors,
  },
  {
    id: 'prephrase-negate',
    step: 3,
    label: 'Pre-phrase & Negate',
    subtitle: 'Steps 3–4: pre-phrase examples, negation mechanics',
    icon: Wand2,
  },
  {
    id: 'wrong-answers',
    step: 4,
    label: 'Wrong Answer Patterns',
    subtitle: 'Five common traps and how to spot them',
    icon: AlertTriangle,
  },
  {
    id: 'worked-example',
    step: 5,
    label: 'Worked Example & Takeaways',
    subtitle: 'Bike-path walkthrough and key summary',
    icon: CheckCircle2,
  },
];

// ---------- Inline primitives ----------
const SectionH2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mt-0 mb-3">
    {children}
  </h2>
);

const SectionH3: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-2">{children}</h3>
);

const SectionH4: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h4 className="text-base font-semibold text-slate-800 mt-6 mb-2 uppercase tracking-wide text-xs">
    {children}
  </h4>
);

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-[15px] leading-relaxed text-slate-700 mb-4">{children}</p>
);

const Bold: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-semibold text-slate-900">{children}</span>
);

const Em: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <em className="italic text-slate-700">{children}</em>
);

type CalloutVariant = 'tip' | 'default' | 'summary' | 'warning';

const Callout: React.FC<{
  variant?: CalloutVariant;
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}> = ({ variant = 'default', title, icon: Icon, children }) => {
  const styles: Record<CalloutVariant, { bg: string; border: string; text: string; iconBg: string }> = {
    tip: {
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      text: 'text-indigo-900',
      iconBg: 'bg-indigo-100 text-indigo-700',
    },
    default: {
      bg: 'bg-slate-50',
      border: 'border-slate-200',
      text: 'text-slate-800',
      iconBg: 'bg-slate-100 text-slate-600',
    },
    summary: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-900',
      iconBg: 'bg-emerald-100 text-emerald-700',
    },
    warning: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-900',
      iconBg: 'bg-amber-100 text-amber-700',
    },
  };
  const s = styles[variant];
  return (
    <div className={`my-6 rounded-lg border ${s.border} ${s.bg} p-5`}>
      <div className="flex items-start gap-3">
        {Icon && (
          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${s.iconBg}`}>
            <Icon className="h-4 w-4" />
          </div>
        )}
        <div className="flex-1">
          <div className={`text-sm font-semibold ${s.text} mb-1`}>{title}</div>
          <div className={`text-[14px] leading-relaxed ${s.text} space-y-2`}>{children}</div>
        </div>
      </div>
    </div>
  );
};

const BulletList: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ul className="my-4 space-y-2 pl-0">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-slate-700">
        <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const ProcessList: React.FC<{ title?: string; steps: React.ReactNode[] }> = ({ title, steps }) => (
  <div className="my-6 rounded-lg border border-slate-200 bg-white p-5">
    {title && (
      <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-900">
        <Flag className="h-4 w-4 text-indigo-600" />
        {title}
      </div>
    )}
    <ol className="space-y-3">
      {steps.map((s, i) => (
        <li key={i} className="flex gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
            {i + 1}
          </span>
          <div className="flex-1 text-[15px] leading-relaxed text-slate-700">{s}</div>
        </li>
      ))}
    </ol>
  </div>
);

const DataTable: React.FC<{ headers: string[]; rows: React.ReactNode[][] }> = ({ headers, rows }) => (
  <div className="my-6 overflow-hidden rounded-lg border border-slate-200">
    <table className="w-full border-collapse text-sm">
      <thead className="bg-slate-100">
        <tr>
          {headers.map((h, i) => (
            <th
              key={i}
              className="border-b border-slate-200 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white">
        {rows.map((row, rIdx) => (
          <tr key={rIdx} className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50/50">
            {row.map((cell, cIdx) => (
              <td key={cIdx} className="px-4 py-3 align-top text-[14px] leading-relaxed text-slate-700">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const BreakdownList: React.FC<{
  leftLabel: string;
  rightLabel: string;
  items: { left: string; right: string }[];
}> = ({ leftLabel, rightLabel, items }) => (
  <div className="my-6 overflow-hidden rounded-lg border border-slate-200 bg-white">
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600">
      <div>{leftLabel}</div>
      <div className="opacity-0">→</div>
      <div>{rightLabel}</div>
    </div>
    {items.map((it, i) => (
      <div
        key={i}
        className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 border-b border-slate-100 px-4 py-3 last:border-b-0"
      >
        <div className="font-mono text-[13px] text-slate-800">{it.left}</div>
        <ArrowRight className="h-4 w-4 text-indigo-500" />
        <div className="font-mono text-[13px] text-indigo-700">{it.right}</div>
      </div>
    ))}
  </div>
);

const Blockquote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <blockquote className="my-6 border-l-4 border-indigo-500 bg-indigo-50/40 px-5 py-4 text-[15px] italic leading-relaxed text-slate-800">
    {children}
  </blockquote>
);

// ---------- Section content components ----------
const OverviewContent: React.FC = () => (
  <>
    <SectionH2>The 4-Step Method for Necessary Assumption</SectionH2>
    <Paragraph>
      This lesson provides a complete, repeatable method for solving any Necessary Assumption (NA)
      question. The goal is the same every time: understand the author's argument, find the logical
      gap, pre-phrase a "must-have" belief, and verify your answer with the{' '}
      <Bold>Negation Test</Bold>.
    </Paragraph>

    <Callout variant="tip" title="Timing Budget" icon={Clock}>
      <p>
        Budget roughly <Bold>1 minute 30 seconds</Bold> per NA question. Steps 1–3 should take about{' '}
        <Bold>50 seconds</Bold> combined. Step 4 (the Negation Test itself) should take about{' '}
        <Bold>40 seconds</Bold>. With practice, you'll only need to apply the test to 1–2
        candidates. Resist the urge to skip it — it is the difference between a good guess and a
        guaranteed correct answer.
      </p>
    </Callout>

    <SectionH3>The Airtight Principle</SectionH3>
    <Paragraph>
      The Negation Test works on a single, airtight principle: <Em>if a statement is truly
      necessary, negating it destroys the argument.</Em> That is the foundation of everything that
      follows.
    </Paragraph>

    <SectionH3>The 4-Step Method at a Glance</SectionH3>
    <ProcessList
      title="What you'll do, every time"
      steps={[
        <span>
          <Bold>Break Down the Argument</Bold> — isolate conclusion and premises; summarize in
          simple terms.
        </span>,
        <span>
          <Bold>Identify the Logical Gap</Bold> — ask what the author took for granted.
        </span>,
        <span>
          <Bold>Pre-phrase the Necessary Connection</Bold> — predict the type of assumption before
          reading choices.
        </span>,
        <span>
          <Bold>Evaluate with the Negation Test</Bold> — flip your top candidate; if the argument
          collapses, it is necessary.
        </span>,
      ]}
    />
  </>
);

const BreakdownGapContent: React.FC = () => (
  <>
    <SectionH2>Steps 1–2: Break Down & Find the Gap</SectionH2>

    <SectionH3>Step 1 — Break Down the Argument</SectionH3>
    <Paragraph>
      Before evaluating answer choices, map the argument's structure. You cannot find a missing
      piece until you understand how the existing pieces fit together.
    </Paragraph>
    <BulletList
      items={[
        <span>
          <Bold>Find the Main Conclusion.</Bold> Indicators: <Em>therefore, thus, so, hence,
          consequently.</Em>
        </span>,
        <span>
          <Bold>Find the Premises.</Bold> Indicators: <Em>because, since, for, after all, given
          that.</Em>
        </span>,
        <span>
          <Bold>Summarize the Core Argument.</Bold> "The author concludes [C], because of [P]."
        </span>,
      ]}
    />
    <Paragraph>
      Pay close attention to <Bold>term mismatches</Bold> between premise and conclusion. NA
      questions frequently hinge on a word or concept that the premises do not fully establish.
    </Paragraph>
    <Callout variant="default" title="When this step gets tricky" icon={AlertCircle}>
      <p>
        Some NA stimuli contain multiple layers of reasoning. Focus on the{' '}
        <Bold>single most important logical leap</Bold> — the jump from the key evidence to the
        final conclusion. The necessary assumption almost always addresses this primary leap.
      </p>
    </Callout>

    <SectionH3>Step 2 — Identify the Logical Gap</SectionH3>
    <Paragraph>
      Ask yourself: <Em>"How did the author get from the evidence to the conclusion? What idea did
      they take for granted?"</Em> NA assumptions generally fall into two functional categories.
    </Paragraph>

    <SectionH4>A. Bridge Assumptions (Missing Links)</SectionH4>
    <Paragraph>
      These connect two different ideas in the argument — "missing links" between evidence and
      conclusion.
    </Paragraph>
    <BulletList
      items={[
        <span>
          <Bold>Definitional gap:</Bold> treating two distinct ideas as equivalent or incompatible.
        </span>,
        <span>
          <Bold>Generalization gap:</Bold> a specific instance is assumed to apply to a whole group.
        </span>,
        <span>
          <Bold>Key Ingredient gap:</Bold> an intermediate benefit is assumed to produce the
          ultimate goal.
        </span>,
      ]}
    />

    <SectionH4>B. Defender Assumptions (Threat Eliminators)</SectionH4>
    <Paragraph>
      These eliminate potential threats that could destroy the argument. They "protect" the
      conclusion.
    </Paragraph>
    <BulletList
      items={[
        <span>
          <Bold>Causal gap:</Bold> assumes a specific alternative factor wasn't the real cause.
        </span>,
        <span>
          <Bold>Feasibility gap:</Bold> assumes no obstacle will make the plan fail.
        </span>,
        <span>
          <Bold>Source gap:</Bold> assumes a source's bias doesn't automatically invalidate its
          arguments.
        </span>,
      ]}
    />

    <SectionH4>Common Logical Leaps</SectionH4>
    <DataTable
      headers={['Leap Type', 'What the Author Does', 'What the NA Must Do']}
      rows={[
        [
          <Bold>Causal Leap</Bold>,
          'Assumes correlation proves a specific cause, ignoring alternatives',
          'Rule out an alternative cause or confirm the stated cause is the only one',
        ],
        [
          <Bold>Generalization Leap</Bold>,
          'Assumes a specific example represents a broader category',
          'Confirm the example is representative, or the broader category shares the trait',
        ],
        [
          <Bold>Definitional Leap</Bold>,
          'Assumes two different terms are equivalent or incompatible',
          'Provide the definitional bridge connecting or separating the two terms',
        ],
        [
          <Bold>Feasibility Leap</Bold>,
          'Assumes a proposed plan will work without obstacles',
          'Confirm a specific obstacle does not exist',
        ],
        [
          <Bold>Analogy Leap</Bold>,
          'Assumes two situations are similar in a relevant way',
          'Confirm they share the specific feature that matters for the conclusion',
        ],
      ]}
    />
  </>
);

const PrephraseNegateContent: React.FC = () => (
  <>
    <SectionH2>Steps 3–4: Pre-phrase & Negate</SectionH2>

    <SectionH3>Step 3 — Pre-phrase the Necessary Connection</SectionH3>
    <Paragraph>
      Before looking at the answer choices, articulate the assumption in your own words. Complete
      this sentence:
    </Paragraph>
    <Blockquote>"For this argument to work, the author must believe that..."</Blockquote>
    <Paragraph>
      Your pre-phrase does not need to be the exact wording of the correct answer — it just needs
      to capture the <Bold>type and direction</Bold> of the belief the argument depends on.
    </Paragraph>

    <Callout variant="tip" title="NA pre-phrases are softer than SA pre-phrases" icon={Lightbulb}>
      <p>
        On <Bold>Sufficient Assumption</Bold> questions, your pre-phrase should be a precise
        logical statement (<code className="rounded bg-white/60 px-1 py-0.5 text-xs">B → C</code>).
        On <Bold>Necessary Assumption</Bold> questions, capture direction and type without
        demanding exact wording. NA answers are often more modest and less predictable, so a rigid
        pre-phrase can cause you to overlook the correct choice.
      </p>
    </Callout>

    <SectionH4>Five Pre-phrase Templates</SectionH4>
    <DataTable
      headers={['Gap Type', 'Pre-phrase Template']}
      rows={[
        [<Bold>Key Ingredient</Bold>, '"The intermediate benefit must actually be useful for the ultimate goal."'],
        [<Bold>Definitional Gap</Bold>, '"These two concepts must be incompatible (or connected) in the way the author assumes."'],
        [<Bold>Only Way</Bold>, '"The stated cause must be the only effective way to produce the effect."'],
        [<Bold>Closed Universe</Bold>, '"The defined group must be the only eligible candidates."'],
        [<Bold>Source Fallacy</Bold>, '"A biased source\'s arguments must be inherently invalid."'],
      ]}
    />

    <SectionH3>Step 4 — Evaluate with the Negation Test</SectionH3>
    <Paragraph>
      The Negation Test is the definitive proof for NA questions. It works on a simple principle:{' '}
      <Bold>if a statement is truly necessary, the argument cannot survive without it.</Bold>
    </Paragraph>

    <ProcessList
      title="Applying the Negation Test"
      steps={[
        <span>
          <Bold>Select your top candidate</Bold> — the answer that best matches your pre-phrase.
        </span>,
        <span>
          <Bold>Negate the answer choice.</Bold> Flip it to its logical opposite. Negate the{' '}
          <Em>logic</Em>, not just the verb.
        </span>,
        <span>
          <Bold>Insert the negation as a new fact.</Bold> Ask: "Does the conclusion still make
          sense?"
        </span>,
        <span>
          <Bold>Evaluate the impact.</Bold> Argument collapses ⇒ <Bold>CORRECT.</Bold> Argument
          survives (even if weakened) ⇒ <Bold>INCORRECT.</Bold>
        </span>,
      ]}
    />

    <SectionH4>Negation Quick Reference</SectionH4>
    <BreakdownList
      leftLabel="Original Statement"
      rightLabel="Logical Negation"
      items={[
        { left: '"All X are Y"', right: '"Not all X are Y" (Some X are not Y)' },
        { left: '"Some X are Y"', right: '"None of X are Y"' },
        { left: '"X causes Y"', right: '"X does not cause Y"' },
        { left: '"X is the only way"', right: '"X is not the only way"' },
        { left: '"X can lead to Y"', right: '"X cannot lead to Y"' },
      ]}
    />

    <Callout variant="warning" title="Four common traps at Step 4" icon={AlertTriangle}>
      <div className="space-y-3">
        <p>
          <Bold>The Helpful Strengthener</Bold> — negating it weakens the argument but doesn't
          destroy it. Necessary assumptions are essential, not just helpful.
        </p>
        <p>
          <Bold>The Neutral Choice</Bold> — negating an irrelevant statement has no impact. If the
          argument doesn't care, it isn't necessary.
        </p>
        <p>
          <Bold>The Restatement</Bold> — merely paraphrases an explicit premise. Assumptions must
          be <Em>unstated</Em>; a restatement can't be "assumed."
        </p>
        <p>
          <Bold>The Sufficient Trap</Bold> — an answer strong enough to <Em>guarantee</Em> the
          conclusion may or may not be necessary. Test it carefully.
        </p>
      </div>
    </Callout>
  </>
);

const WrongAnswersContent: React.FC = () => (
  <>
    <SectionH2>Common Wrong Answer Patterns</SectionH2>
    <Paragraph>
      Wrong answers on NA questions fail in predictable ways. Recognizing these traps lets you
      eliminate quickly and with confidence.
    </Paragraph>

    <DataTable
      headers={['Trap Type', 'What It Does', 'How to Spot It']}
      rows={[
        [
          <Bold>Out of Scope</Bold>,
          'Introduces irrelevant concepts or comparisons that do not affect the core argument.',
          'Ask: "Does this choice address the specific gap between premises and conclusion?" If it talks about something the argument never discussed, eliminate.',
        ],
        [
          <Bold>Restatement</Bold>,
          'Rehashes information already explicitly stated in the premises. Assumptions must be unstated.',
          'Ask: "Is this already said in the stimulus?" If yes, the argument doesn\'t need to assume it.',
        ],
        [
          <Bold>Weakener</Bold>,
          'Undermines the conclusion. An author never assumes a fact that actively harms their case.',
          'Check the direction — does this choice hurt or help the argument? If it hurts, eliminate immediately.',
        ],
        [
          <Bold>Too Strong / Sufficient</Bold>,
          'Goes beyond what the argument requires. The answer would prove the conclusion, not merely support it.',
          'Apply the Negation Test carefully. Sometimes a strong answer IS necessary; sometimes it is not. Let the test decide.',
        ],
        [
          <Bold>Wrong Direction</Bold>,
          'Right topic, but connects concepts in the wrong direction (e.g., says B→A when the argument needs A→B).',
          'Diagram the relationship if needed. Make sure the answer bridges the gap in the same direction the argument requires.',
        ],
      ]}
    />

    <Callout variant="default" title="Eliminate ruthlessly" icon={ShieldCheck}>
      <p>
        On NA questions, the five traps above account for the vast majority of wrong choices.
        Running a fast trap-check <Em>before</Em> the Negation Test can cut your candidate pool to
        one or two in seconds.
      </p>
    </Callout>
  </>
);

const WorkedExampleContent: React.FC = () => (
  <>
    <SectionH2>Worked Example: Bike Path & Traffic Congestion</SectionH2>
    <Paragraph>Let's apply all four steps to a complete NA question from start to finish.</Paragraph>

    <Blockquote>
      "Editorial: Our city should convert the abandoned rail corridor into a bicycle commuting
      path. A recent survey found that 60% of residents who live within two miles of the corridor
      would use it for daily commuting if it were available. Converting the corridor would
      therefore significantly reduce automobile traffic congestion in the city."
    </Blockquote>

    <Paragraph>
      This example highlights the classic <Bold>Key Ingredient gap</Bold>. Interest in biking only
      matters to the conclusion if at least some of those riders are currently contributing to car
      traffic.
    </Paragraph>

    <SectionH3>Applying the 4-Step Method</SectionH3>
    <ProcessList
      title="Step-by-step walkthrough"
      steps={[
        <div>
          <Bold>Step 1 — Break Down.</Bold>
          <ul className="mt-1 space-y-1 text-slate-700">
            <li>• <Bold>Conclusion:</Bold> converting the corridor reduces automobile traffic.</li>
            <li>• <Bold>Premise:</Bold> 60% of nearby residents would use the bike path to commute.</li>
            <li>• <Bold>Core logic:</Bold> people would bike → car traffic drops.</li>
          </ul>
        </div>,
        <div>
          <Bold>Step 2 — Find the Gap.</Bold> Premises are about <Em>bikers</Em>; conclusion is
          about <Em>cars</Em>. Do these bikers currently drive? If they currently walk, take the
          bus, or work from home, the bike path removes zero cars. Classic Key Ingredient gap: the
          intermediate effect (biking) only reduces congestion if those people were previously
          contributing to it.
        </div>,
        <div>
          <Bold>Step 3 — Pre-phrase.</Bold> "For this argument to work, at least some of the
          would-be cyclists must currently commute by car. Otherwise no cars leave the road and
          congestion doesn't change."
        </div>,
        <div>
          <Bold>Step 4 — Negate.</Bold> Scan for the choice matching the pre-phrase and flip it: "<Em>
          None</Em> of the would-be cyclists currently drive." Result: zero cars removed →
          congestion unchanged → conclusion collapses. The assumption is necessary.
        </div>,
      ]}
    />

    <Callout variant="default" title="Final Check" icon={Target}>
      <p>
        The conclusion needs only one indispensable fact: <Em>some would-be cyclists must
        currently be car commuters.</Em> Stronger claims about how many commuters live nearby or
        whether biking is environmentally better may be useful in the real world, but the argument
        doesn't collapse without them. NA is about the smallest bridge whose negation destroys the
        conclusion.
      </p>
    </Callout>

    <SectionH3>Key Takeaways</SectionH3>
    <Callout variant="summary" title="Remember this" icon={CheckCircle2}>
      <div className="space-y-3">
        <p>
          <Bold>The flow:</Bold> Break Down → Find the Gap → Pre-phrase → Negate and Verify.
        </p>
        <p>
          <Bold>Between two close choices, negate both.</Bold> One destroys the argument (correct);
          the other merely weakens it (strengthener, not necessary).
        </p>
        <p>
          <Bold>NA answers are often modest.</Bold> Don't look for the answer that "best supports"
          the conclusion — look for the one whose <Em>denial is fatal.</Em> "At least some" is
          cautious; its denial is catastrophic.
        </p>
        <p>
          <Bold>Watch for the Key Ingredient gap.</Bold> When evidence is about one thing and the
          conclusion is about another, the necessary assumption is almost always that the first
          thing is connected to the second.
        </p>
      </div>
    </Callout>
  </>
);

// ---------- Main component ----------
export const NegationLessonLeftRail: React.FC = () => {
  const [activeId, setActiveId] = useState<SectionId>('overview');

  const renderSection = () => {
    switch (activeId) {
      case 'overview':
        return <OverviewContent />;
      case 'breakdown-gap':
        return <BreakdownGapContent />;
      case 'prephrase-negate':
        return <PrephraseNegateContent />;
      case 'wrong-answers':
        return <WrongAnswersContent />;
      case 'worked-example':
        return <WorkedExampleContent />;
      default:
        return null;
    }
  };

  const activeSection = SECTIONS.find((s) => s.id === activeId)!;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
        {/* Lesson header */}
        <div className="mb-8 border-b border-slate-200 pb-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Module 11 · Lesson 2
          </div>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
            Necessary Assumption: The Step-by-Step Method
          </h1>
          <p className="mt-2 max-w-2xl text-[15px] text-slate-600">
            A complete, repeatable walkthrough — from breaking down the argument to using the
            Negation Test with confidence.
          </p>
        </div>

        <div className="md:flex md:gap-10">
          {/* Mobile dropdown (< md) */}
          <div className="mb-6 md:hidden">
            <label htmlFor="rail-select" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
              Jump to section
            </label>
            <div className="relative">
              <select
                id="rail-select"
                value={activeId}
                onChange={(e) => setActiveId(e.target.value as SectionId)}
                className="w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 py-3 pr-10 text-[15px] font-medium text-slate-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              >
                {SECTIONS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.step}. {s.label}
                  </option>
                ))}
              </select>
              <ArrowRight className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-slate-400" />
            </div>
          </div>

          {/* Desktop sticky rail (md+) */}
          <aside
            className="hidden md:block md:w-[240px] md:shrink-0"
            aria-label="Lesson sections"
          >
            <nav className="sticky top-8">
              <div className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                On this page
              </div>
              <ul className="space-y-0.5">
                {SECTIONS.map((s) => {
                  const isActive = s.id === activeId;
                  const Icon = s.icon;
                  return (
                    <li key={s.id}>
                      <button
                        type="button"
                        onClick={() => setActiveId(s.id)}
                        className={`group relative flex w-full items-start gap-3 rounded-r-md py-2.5 pl-4 pr-3 text-left transition-colors ${
                          isActive
                            ? 'bg-indigo-50 text-indigo-900'
                            : 'text-slate-700 hover:bg-slate-100'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {/* Active left indicator */}
                        <span
                          className={`absolute left-0 top-1 bottom-1 w-[3px] rounded-r ${
                            isActive ? 'bg-indigo-600' : 'bg-transparent group-hover:bg-slate-300'
                          }`}
                          aria-hidden="true"
                        />
                        {/* Step number circle */}
                        <span
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${
                            isActive
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-200 text-slate-600 group-hover:bg-slate-300'
                          }`}
                        >
                          {s.step}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-1.5">
                            <Icon
                              className={`h-3.5 w-3.5 ${
                                isActive ? 'text-indigo-600' : 'text-slate-400'
                              }`}
                            />
                            <span
                              className={`text-[13px] font-semibold leading-tight ${
                                isActive ? 'text-indigo-900' : 'text-slate-800'
                              }`}
                            >
                              {s.label}
                            </span>
                          </span>
                          <span
                            className={`mt-0.5 block text-[11.5px] leading-snug ${
                              isActive ? 'text-indigo-700/80' : 'text-slate-500'
                            }`}
                          >
                            {s.subtitle}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Rail footer hint */}
              <div className="mt-6 rounded-md border border-slate-200 bg-white p-3">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                  <Clock className="h-3 w-3" />
                  Estimated time
                </div>
                <div className="mt-1 text-[12px] text-slate-600">
                  ~12 min · full read-through
                </div>
              </div>
            </nav>
          </aside>

          {/* Content panel */}
          <main className="min-w-0 flex-1">
            {/* Breadcrumb-style active indicator */}
            <div className="mb-4 flex items-center gap-2 text-[12px] text-slate-500">
              <span className="font-semibold uppercase tracking-wide">
                Step {activeSection.step} of {SECTIONS.length}
              </span>
              <span className="text-slate-300">·</span>
              <span>{activeSection.label}</span>
            </div>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
              {renderSection()}

              {/* Footer nav: prev / next */}
              <div className="mt-12 flex items-center justify-between border-t border-slate-200 pt-6">
                {(() => {
                  const idx = SECTIONS.findIndex((s) => s.id === activeId);
                  const prev = idx > 0 ? SECTIONS[idx - 1] : null;
                  const next = idx < SECTIONS.length - 1 ? SECTIONS[idx + 1] : null;
                  return (
                    <>
                      <div className="flex-1">
                        {prev && (
                          <button
                            type="button"
                            onClick={() => setActiveId(prev.id)}
                            className="group flex flex-col items-start text-left"
                          >
                            <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                              Previous
                            </span>
                            <span className="mt-0.5 flex items-center gap-1 text-[14px] font-medium text-indigo-700 group-hover:text-indigo-900">
                              <ArrowRight className="h-3.5 w-3.5 rotate-180" />
                              {prev.label}
                            </span>
                          </button>
                        )}
                      </div>
                      <div className="flex-1 text-right">
                        {next && (
                          <button
                            type="button"
                            onClick={() => setActiveId(next.id)}
                            className="group inline-flex flex-col items-end text-right"
                          >
                            <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                              Next
                            </span>
                            <span className="mt-0.5 flex items-center gap-1 text-[14px] font-medium text-indigo-700 group-hover:text-indigo-900">
                              {next.label}
                              <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                          </button>
                        )}
                      </div>
                    </>
                  );
                })()}
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
};

export default NegationLessonLeftRail;
