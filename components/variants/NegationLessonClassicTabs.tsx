/*
 * NegationLessonClassicTabs
 * ---------------------------------------------------------------
 * UI Pattern: Classic horizontal tabs (Radix/Notion lineage).
 *
 * Five tabs sit across the top on an underline rail. The active tab is marked
 * by a 2px slate-900 underline; inactive tabs are slate-500 and lift to
 * slate-900 on hover. Panel transitions are a quiet 150ms opacity fade — no
 * slide, no bounce — so the content stays the hero. Typography is Tailwind
 * default sans, slate-900 on white, with a single restrained accent (slate-900
 * for headers, amber-50 / sky-50 / emerald-50 / rose-50 tints for callouts).
 * The aesthetic is desktop-first but the tab bar becomes horizontally
 * scrollable under 768px so no content is ever hidden.
 */

import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Scissors,
  MessageSquare,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Target,
  GitBranch,
  Shield,
  Lightbulb,
  ArrowRight,
  Quote,
} from 'lucide-react';

type TabId =
  | 'overview'
  | 'breakdown-gap'
  | 'prephrase-negate'
  | 'wrong-answers'
  | 'worked-example';

interface TabDef {
  id: TabId;
  label: string;
  sublabel?: string;
  icon: React.ComponentType<{ className?: string }>;
}

const TABS: TabDef[] = [
  { id: 'overview', label: 'Overview', icon: BookOpen },
  { id: 'breakdown-gap', label: 'Break Down & Find Gap', sublabel: 'Steps 1–2', icon: Scissors },
  { id: 'prephrase-negate', label: 'Pre-phrase & Negate', sublabel: 'Steps 3–4', icon: MessageSquare },
  { id: 'wrong-answers', label: 'Wrong Answer Patterns', icon: AlertTriangle },
  { id: 'worked-example', label: 'Worked Example & Takeaways', icon: CheckCircle2 },
];

// ---------------------------------------------------------------------------
// Small inline primitives — kept minimal and flat to preserve the neutral feel
// ---------------------------------------------------------------------------

const SectionTitle: React.FC<{ children: React.ReactNode; kicker?: string }> = ({
  children,
  kicker,
}) => (
  <div className="mb-4">
    {kicker && (
      <div className="text-xs uppercase tracking-[0.14em] text-slate-500 font-medium mb-1">
        {kicker}
      </div>
    )}
    <h2 className="text-2xl font-semibold text-slate-900 leading-tight">{children}</h2>
  </div>
);

const SubTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">{children}</h3>
);

const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-[15px] leading-relaxed text-slate-700 mb-3">{children}</p>
);

const Em: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <em className="text-slate-900 font-medium not-italic">{children}</em>
);

const Callout: React.FC<{
  variant?: 'tip' | 'warn' | 'default' | 'summary';
  title: string;
  children: React.ReactNode;
}> = ({ variant = 'default', title, children }) => {
  const tone = {
    tip: 'bg-sky-50 border-sky-200 text-sky-900',
    warn: 'bg-amber-50 border-amber-200 text-amber-900',
    default: 'bg-slate-50 border-slate-200 text-slate-800',
    summary: 'bg-emerald-50 border-emerald-200 text-emerald-900',
  }[variant];
  return (
    <div className={`border-l-4 ${tone} rounded-r-md px-4 py-3 my-5`}>
      <div className="text-xs uppercase tracking-wider font-semibold mb-1 opacity-80">{title}</div>
      <div className="text-[15px] leading-relaxed space-y-2">{children}</div>
    </div>
  );
};

const ProcessList: React.FC<{ title?: string; steps: React.ReactNode[] }> = ({ title, steps }) => (
  <div className="my-5">
    {title && (
      <div className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
        <ArrowRight className="w-4 h-4 text-slate-500" />
        {title}
      </div>
    )}
    <ol className="space-y-3">
      {steps.map((s, i) => (
        <li key={i} className="flex gap-3">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-semibold flex items-center justify-center mt-0.5">
            {i + 1}
          </span>
          <div className="text-[15px] leading-relaxed text-slate-700 flex-1">{s}</div>
        </li>
      ))}
    </ol>
  </div>
);

const DataTable: React.FC<{ headers: string[]; rows: React.ReactNode[][] }> = ({
  headers,
  rows,
}) => (
  <div className="my-5 overflow-x-auto border border-slate-200 rounded-md">
    <table className="w-full text-left text-[14px]">
      <thead className="bg-slate-50 border-b border-slate-200">
        <tr>
          {headers.map((h) => (
            <th key={h} className="px-4 py-2.5 font-semibold text-slate-900 whitespace-nowrap">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="border-b border-slate-100 last:border-b-0 align-top">
            {r.map((cell, j) => (
              <td key={j} className="px-4 py-3 text-slate-700 leading-relaxed">
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
  leftLabel: string;
  rightLabel: string;
  items: { left: string; right: string }[];
}> = ({ leftLabel, rightLabel, items }) => (
  <div className="my-5 border border-slate-200 rounded-md overflow-hidden">
    <div className="grid grid-cols-2 bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider font-semibold text-slate-600">
      <div className="px-4 py-2">{leftLabel}</div>
      <div className="px-4 py-2 border-l border-slate-200">{rightLabel}</div>
    </div>
    {items.map((it, i) => (
      <div
        key={i}
        className="grid grid-cols-2 border-b border-slate-100 last:border-b-0 text-[14px]"
      >
        <div className="px-4 py-3 text-slate-800 font-mono">{it.left}</div>
        <div className="px-4 py-3 text-slate-800 font-mono border-l border-slate-100">
          {it.right}
        </div>
      </div>
    ))}
  </div>
);

const Blockquote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <blockquote className="my-5 border-l-4 border-slate-300 bg-slate-50 px-5 py-4 rounded-r-md">
    <Quote className="w-4 h-4 text-slate-400 mb-2" />
    <div className="text-[15px] text-slate-700 italic leading-relaxed">{children}</div>
  </blockquote>
);

const StatChip: React.FC<{ icon: React.ComponentType<{ className?: string }>; label: string; value: string }> = ({
  icon: Icon,
  label,
  value,
}) => (
  <div className="flex items-center gap-3 border border-slate-200 rounded-md px-4 py-3 bg-white">
    <Icon className="w-5 h-5 text-slate-500 flex-shrink-0" />
    <div className="min-w-0">
      <div className="text-xs uppercase tracking-wider text-slate-500 font-medium">{label}</div>
      <div className="text-sm font-semibold text-slate-900">{value}</div>
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Panels
// ---------------------------------------------------------------------------

const OverviewPanel: React.FC = () => (
  <div>
    <SectionTitle kicker="Module 11 · Lesson 2">
      The 4-Step Method for Necessary Assumption Questions
    </SectionTitle>
    <P>
      This lesson provides a complete, repeatable method for solving any Necessary Assumption
      question. The goal is the same every time: understand the author's argument, find the
      logical gap, pre-phrase a <Em>must-have</Em> belief, and verify your answer with the{' '}
      <Em>Negation Test</Em>.
    </P>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
      <StatChip icon={Clock} label="Per question" value="~1:30 budget" />
      <StatChip icon={Target} label="Steps 1–3" value="~50 seconds" />
      <StatChip icon={CheckCircle2} label="Step 4 (negate)" value="~40 seconds" />
    </div>

    <Callout variant="tip" title="Timing discipline">
      Budget roughly <Em>1 minute 30 seconds</Em> per NA question. Steps 1–3 should take about 50
      seconds combined; Step 4 (the Negation Test itself) should take about 40 seconds. With
      practice you only apply the test to 1–2 candidates — but never skip it. The test is the
      difference between a good guess and a guaranteed correct answer.
    </Callout>

    <SubTitle>The airtight principle</SubTitle>
    <P>
      The Negation Test works on a simple rule: <Em>if a statement is truly necessary, negating
      it destroys the argument.</Em> Anything less — "weakens a little," "makes me feel worse
      about it" — is a strengthener, not a necessary assumption.
    </P>

    <SubTitle>The 4-step method at a glance</SubTitle>
    <ProcessList
      title="The method"
      steps={[
        <span>
          <Em>Break Down the Argument.</Em> Read the stimulus, isolate conclusion and premises,
          and summarize the author's reasoning in simple terms.
        </span>,
        <span>
          <Em>Identify the Logical Gap.</Em> Find the disconnect between evidence and conclusion.
          Ask: "What did the author take for granted?"
        </span>,
        <span>
          <Em>Pre-phrase the Necessary Connection.</Em> Predict the <Em>type</Em> of assumption
          the argument depends on before you look at the answer choices.
        </span>,
        <span>
          <Em>Evaluate with the Negation Test.</Em> Test your top candidate. If the negation
          destroys the argument, you've found the necessary assumption.
        </span>,
      ]}
    />
  </div>
);

const BreakdownGapPanel: React.FC = () => (
  <div>
    <SectionTitle kicker="Steps 1 & 2">Break Down the Argument & Find the Gap</SectionTitle>

    <SubTitle>Step 1 — Break Down the Argument</SubTitle>
    <P>
      Before evaluating answer choices, map the argument's structure. You cannot find a missing
      piece until you understand how the existing pieces fit together.
    </P>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5">
      <div className="border border-slate-200 rounded-md p-4">
        <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
          Conclusion indicators
        </div>
        <div className="text-[15px] text-slate-800 italic">
          therefore · thus · so · hence · consequently
        </div>
      </div>
      <div className="border border-slate-200 rounded-md p-4">
        <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
          Premise indicators
        </div>
        <div className="text-[15px] text-slate-800 italic">
          because · since · for · after all · given that
        </div>
      </div>
    </div>

    <P>
      Summarize the logic in plain terms: <Em>"The author concludes [C], because of [P]."</Em>{' '}
      Then pay close attention to the <Em>specific terms</Em> used in premises versus conclusion.
      NA questions frequently hinge on a mismatch — the conclusion uses a word or concept the
      premises do not fully establish.
    </P>

    <Callout variant="default" title="When this step gets tricky">
      Some stimuli contain multiple layers of reasoning. When the argument is complex, focus on
      isolating the <Em>single most important logical leap</Em> — the jump from the key piece of
      evidence to the final conclusion. The necessary assumption almost always addresses that
      primary leap, not a secondary detail.
    </Callout>

    <SubTitle>Step 2 — Identify the Logical Gap</SubTitle>
    <P>
      With the core argument identified, ask: <Em>How did the author get from evidence to
      conclusion? What idea did they take for granted?</Em> NA assumptions fall into two
      functional categories.
    </P>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
      <div className="border border-slate-200 rounded-md p-4">
        <div className="flex items-center gap-2 mb-2">
          <GitBranch className="w-4 h-4 text-slate-600" />
          <div className="font-semibold text-slate-900">Bridge Assumptions</div>
        </div>
        <div className="text-sm text-slate-600 mb-3">Missing links between two ideas</div>
        <ul className="text-[14px] text-slate-700 space-y-1.5 list-disc pl-5">
          <li><Em>Definitional</Em> gap — two distinct ideas treated as the same</li>
          <li><Em>Generalization</Em> gap — specific instance applied to the whole</li>
          <li><Em>Key ingredient</Em> gap — intermediate benefit leads to the goal</li>
        </ul>
      </div>
      <div className="border border-slate-200 rounded-md p-4">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="w-4 h-4 text-slate-600" />
          <div className="font-semibold text-slate-900">Defender Assumptions</div>
        </div>
        <div className="text-sm text-slate-600 mb-3">Eliminate threats to the conclusion</div>
        <ul className="text-[14px] text-slate-700 space-y-1.5 list-disc pl-5">
          <li><Em>Causal</Em> gap — alternative cause wasn't the real one</li>
          <li><Em>Feasibility</Em> gap — no obstacles would make the plan fail</li>
          <li><Em>Source</Em> gap — bias doesn't automatically invalidate</li>
        </ul>
      </div>
    </div>

    <SubTitle>Common Logical Leaps</SubTitle>
    <DataTable
      headers={['Leap Type', 'What the Author Does', 'What the NA Must Do']}
      rows={[
        [
          <Em>Causal Leap</Em>,
          'Assumes correlation proves a specific cause, ignoring alternatives',
          'Rule out an alternative cause, or confirm the stated cause is the only one',
        ],
        [
          <Em>Generalization Leap</Em>,
          'Assumes a specific example represents a broader category',
          'Confirm representativeness, or that the broader category shares the trait',
        ],
        [
          <Em>Definitional Leap</Em>,
          'Assumes two different terms are equivalent or incompatible',
          'Provide the definitional bridge',
        ],
        [
          <Em>Feasibility Leap</Em>,
          'Assumes a proposed plan will work without obstacles',
          'Confirm a specific obstacle does not exist',
        ],
        [
          <Em>Analogy Leap</Em>,
          'Assumes two situations are similar in a relevant way',
          'Confirm they share the feature that matters for the conclusion',
        ],
      ]}
    />
  </div>
);

const PrePhraseNegatePanel: React.FC = () => (
  <div>
    <SectionTitle kicker="Steps 3 & 4">Pre-phrase & the Negation Test</SectionTitle>

    <SubTitle>Step 3 — Pre-phrase the Necessary Connection</SubTitle>
    <P>Before looking at answer choices, articulate the assumption in your own words:</P>
    <Blockquote>
      "For this argument to work, the author must believe that…"
    </Blockquote>
    <P>
      Your pre-phrase doesn't need the exact wording of the correct answer. It just needs to
      capture the <Em>type and direction</Em> of the belief the argument depends on. A good
      pre-phrase lets you scan efficiently instead of re-evaluating every choice from scratch.
    </P>

    <SubTitle>Pre-phrase examples</SubTitle>
    <DataTable
      headers={['Gap Type', 'Pre-phrase Template']}
      rows={[
        [<Em>Key Ingredient</Em>, '"The intermediate benefit must actually be useful for the ultimate goal."'],
        [<Em>Definitional Gap</Em>, '"These two concepts must be incompatible (or connected) in the way the author assumes."'],
        [<Em>Only Way</Em>, '"The stated cause must be the only effective way to produce the effect."'],
        [<Em>Closed Universe</Em>, '"The defined group must be the only eligible candidates."'],
        [<Em>Source Fallacy</Em>, '"A biased source\'s arguments must be inherently invalid."'],
      ]}
    />

    <Callout variant="tip" title="NA pre-phrases are softer than SA pre-phrases">
      On Sufficient Assumption questions your pre-phrase should be a precise logical statement
      (<Em>B → C</Em>). On Necessary Assumption questions it should capture the{' '}
      <Em>direction and type</Em> without demanding exact wording. NA answers are often more
      modest and less predictable than SA answers, so a rigid pre-phrase can cause you to
      overlook the correct choice.
    </Callout>

    <SubTitle>Step 4 — The Negation Test</SubTitle>
    <P>
      The Negation Test is the definitive proof for this question type. It rests on an airtight
      principle: <Em>if a statement is truly necessary, the argument cannot survive without it.</Em>
    </P>

    <ProcessList
      title="Applying the Negation Test"
      steps={[
        <span>
          <Em>Select your top candidate</Em> — the answer choice that best matches your
          pre-phrase.
        </span>,
        <span>
          <Em>Negate the answer choice.</Em> Turn the statement into its logical opposite. Be
          careful to negate the <Em>logic</Em>, not just the verb.
        </span>,
        <span>
          <Em>Insert the negation as a new fact.</Em> Ask: "If this were true, does the
          conclusion still make sense?"
        </span>,
        <span>
          <Em>Evaluate the impact.</Em> Argument collapses → <Em>correct</Em>. Argument survives
          (even if weakened) → <Em>incorrect</Em>.
        </span>,
      ]}
    />

    <SubTitle>Negation Quick Reference</SubTitle>
    <BreakdownPairs
      leftLabel="Original Statement"
      rightLabel="Logical Negation"
      items={[
        { left: '"All X are Y"', right: '"Not all X are Y" (some X are not Y)' },
        { left: '"Some X are Y"', right: '"None of X are Y"' },
        { left: '"X causes Y"', right: '"X does not cause Y"' },
        { left: '"X is the only way"', right: '"X is not the only way"' },
        { left: '"X can lead to Y"', right: '"X cannot lead to Y"' },
      ]}
    />

    <SubTitle>Why common traps fail the Negation Test</SubTitle>
    <div className="space-y-3 my-5">
      <div className="border border-slate-200 rounded-md p-4">
        <div className="font-semibold text-slate-900 mb-1">The Helpful Strengthener</div>
        <div className="text-[14px] text-slate-700 leading-relaxed">
          Negating a "helpful" fact may weaken the argument, but won't destroy it. Necessary
          assumptions are essential, not just helpful. If the argument limps along after the
          negation, the answer is wrong.
        </div>
      </div>
      <div className="border border-slate-200 rounded-md p-4">
        <div className="font-semibold text-slate-900 mb-1">The Neutral Choice</div>
        <div className="text-[14px] text-slate-700 leading-relaxed">
          Negating an irrelevant statement has no impact. If the argument doesn't care whether
          the statement is true or false, it is not a necessary assumption.
        </div>
      </div>
      <div className="border border-slate-200 rounded-md p-4">
        <div className="font-semibold text-slate-900 mb-1">The Restatement</div>
        <div className="text-[14px] text-slate-700 leading-relaxed">
          An answer that merely paraphrases an explicit premise cannot be an assumption —
          assumptions are <Em>unstated</Em>. Negating a restatement contradicts a stated premise,
          which feels catastrophic, but it's a false signal.
        </div>
      </div>
      <div className="border border-slate-200 rounded-md p-4">
        <div className="font-semibold text-slate-900 mb-1">The Sufficient Trap</div>
        <div className="text-[14px] text-slate-700 leading-relaxed">
          An answer that would <Em>guarantee</Em> the conclusion may or may not be necessary.
          Test it carefully. Sometimes a sufficient assumption is also necessary; sometimes it
          goes beyond what the argument actually requires.
        </div>
      </div>
    </div>
  </div>
);

const WrongAnswersPanel: React.FC = () => (
  <div>
    <SectionTitle kicker="Trap catalog">Common Wrong Answer Patterns</SectionTitle>
    <P>
      Wrong answers on NA questions fail in predictable ways. Recognizing these traps lets you
      eliminate quickly and with confidence.
    </P>
    <DataTable
      headers={['Trap Type', 'What It Does', 'How to Spot It']}
      rows={[
        [
          <Em>Out of Scope</Em>,
          'Introduces irrelevant concepts or comparisons that do not affect the core argument.',
          'Ask: "Does this choice address the specific gap between premises and conclusion?" If it talks about something the argument never discussed, eliminate it.',
        ],
        [
          <Em>Restatement</Em>,
          'Merely rehashes information already explicitly stated in the premises. Assumptions must be unstated.',
          'Ask: "Is this already said in the stimulus?" If yes, the argument does not need to assume it.',
        ],
        [
          <Em>Weakener</Em>,
          'Undermines the conclusion. An author never assumes a fact that actively harms their own case.',
          'Check direction — does this hurt or help the argument? If it hurts, eliminate immediately.',
        ],
        [
          <Em>Too Strong / Sufficient</Em>,
          'Goes beyond what the argument requires. The answer would prove the conclusion rather than merely supporting it.',
          'Apply the Negation Test carefully. Sometimes strong answers are necessary; sometimes not. Let the test decide.',
        ],
        [
          <Em>Wrong Direction</Em>,
          'Addresses the right topic but connects concepts the wrong way (e.g., B→A instead of A→B).',
          'Diagram the relationship. Make sure the answer bridges the gap in the direction the argument requires.',
        ],
      ]}
    />

    <Callout variant="warn" title="Priority order">
      When eliminating under time pressure, check in this order: (1) Out of Scope — fastest to
      spot, (2) Weakener — wrong direction, (3) Restatement — already in stimulus. Save the
      Negation Test for the two remaining candidates where the call is close.
    </Callout>
  </div>
);

const WorkedExamplePanel: React.FC = () => (
  <div>
    <SectionTitle kicker="Full walkthrough">Bike Path & Traffic Congestion</SectionTitle>
    <P>Let's apply all four steps to a complete NA question from start to finish.</P>

    <Blockquote>
      Editorial: Our city should convert the abandoned rail corridor into a bicycle commuting
      path. A recent survey found that 60% of residents who live within two miles of the
      corridor would use it for daily commuting if it were available. Converting the corridor
      would therefore significantly reduce automobile traffic congestion in the city.
    </Blockquote>

    <P>
      This example highlights the classic <Em>Key Ingredient</Em> gap. Interest in biking only
      matters to the conclusion if at least some of those would-be riders are currently
      contributing to car traffic.
    </P>

    <SubTitle>Applying the 4-Step Method</SubTitle>
    <ProcessList
      title="Step-by-step"
      steps={[
        <span>
          <Em>Break Down.</Em> Conclusion: converting the corridor would significantly reduce
          automobile traffic. Premise: 60% of nearby residents would use the bike path for
          daily commuting. Core logic: people would bike → traffic drops.
        </span>,
        <span>
          <Em>Find the Gap.</Em> Premises talk about <Em>bikers</Em>. Conclusion talks about{' '}
          <Em>automobile</Em> traffic. Do these would-be bikers currently drive? If they
          currently walk, bus, or work from home, the bike path removes zero cars. Classic Key
          Ingredient gap.
        </span>,
        <span>
          <Em>Pre-phrase.</Em> "For this argument to work, the author must believe that at
          least some of the people who would use the bike path currently commute by car.
          Otherwise, no cars are removed and congestion doesn't change."
        </span>,
        <span>
          <Em>Negate & Verify.</Em> Negation: <Em>none</Em> of the potential cyclists currently
          drive. Insert that as fact → the path removes zero cars from the road → the
          conclusion about reducing congestion collapses entirely. The bridge is necessary.
        </span>,
      ]}
    />

    <Callout variant="default" title="Final check — why this specific link">
      The conclusion needs only one indispensable fact: some would-be cyclists must currently be
      car commuters. Stronger claims about how many commuters live nearby, how long the
      corridor is, or whether biking is environmentally better may all be useful in the real
      world, but the argument does not collapse without them. Necessary Assumption is about the{' '}
      <Em>smallest bridge whose negation destroys the conclusion.</Em>
    </Callout>

    <SubTitle>Key Takeaways</SubTitle>
    <Callout variant="summary" title="Remember this">
      <p>
        <Em>Flow:</Em> Break Down → Find the Gap → Pre-phrase → Negate & Verify.
      </p>
      <p>
        <Em>When two choices are close, negate both.</Em> The one whose negation destroys the
        argument is the necessary assumption. The one whose negation merely weakens it is a
        strengthener.
      </p>
      <p>
        <Em>NA answers are often modest.</Em> Don't look for the answer that "best supports"
        the conclusion — look for the answer whose <Em>denial is fatal.</Em> "At least some" is
        cautious, but its denial is catastrophic.
      </p>
      <p>
        <Em>Watch for the Key Ingredient gap</Em> — one of the most common NA patterns. When
        the evidence is about one thing and the conclusion is about another, the necessary
        assumption is always that the first thing is connected to the second.
      </p>
    </Callout>
  </div>
);

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export const NegationLessonClassicTabs: React.FC = () => {
  const [active, setActive] = useState<TabId>('overview');
  const [fadeKey, setFadeKey] = useState(0);

  // Bump the fade key on tab change so the mount animation retriggers.
  useEffect(() => {
    setFadeKey((k) => k + 1);
  }, [active]);

  const renderPanel = () => {
    switch (active) {
      case 'overview':
        return <OverviewPanel />;
      case 'breakdown-gap':
        return <BreakdownGapPanel />;
      case 'prephrase-negate':
        return <PrePhraseNegatePanel />;
      case 'wrong-answers':
        return <WrongAnswersPanel />;
      case 'worked-example':
        return <WorkedExamplePanel />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Lesson header */}
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-6">
        <div className="text-xs uppercase tracking-[0.14em] text-slate-500 font-medium mb-2">
          Module 11 · Lesson 2 · Necessary Assumption
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
          The Negation Test — Step-by-Step Guide
        </h1>
        <p className="mt-3 text-[15px] text-slate-600 max-w-2xl leading-relaxed">
          A repeatable 4-step method for Necessary Assumption questions, built around the
          airtight principle that a truly necessary statement cannot be negated without
          destroying the argument.
        </p>
      </div>

      {/* Tab bar — horizontal underline indicator */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div
            className="flex gap-1 overflow-x-auto scrollbar-none"
            role="tablist"
            aria-label="Lesson sections"
          >
            {TABS.map((t) => {
              const isActive = t.id === active;
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${t.id}`}
                  id={`tab-${t.id}`}
                  onClick={() => setActive(t.id)}
                  className={[
                    'group relative flex items-center gap-2 px-4 py-3.5 whitespace-nowrap',
                    'text-[14px] font-medium transition-colors duration-150',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 rounded-sm',
                    isActive
                      ? 'text-slate-900'
                      : 'text-slate-500 hover:text-slate-900',
                  ].join(' ')}
                >
                  <Icon
                    className={[
                      'w-4 h-4 transition-colors duration-150',
                      isActive ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-700',
                    ].join(' ')}
                  />
                  <span className="flex flex-col items-start leading-tight">
                    <span>{t.label}</span>
                    {t.sublabel && (
                      <span className="text-[11px] font-normal text-slate-400">{t.sublabel}</span>
                    )}
                  </span>
                  {/* Underline indicator */}
                  <span
                    aria-hidden
                    className={[
                      'absolute left-2 right-2 bottom-0 h-[2px] rounded-full transition-all duration-200',
                      isActive ? 'bg-slate-900 opacity-100' : 'bg-slate-900 opacity-0',
                    ].join(' ')}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Panel */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div
          key={fadeKey}
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
          className="animate-[fadeIn_150ms_ease-out]"
          style={{ animation: 'fadeIn 150ms ease-out' }}
        >
          {renderPanel()}
        </div>
      </div>

      {/* Footer breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="border-t border-slate-200 pt-4 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Germaine Tutoring · LSAT Mastery Course</span>
          </div>
          <div>Lesson 11.2 of 14</div>
        </div>
      </div>

      {/* Keyframes for the fade transition — inlined so the component is self-contained */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(2px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
