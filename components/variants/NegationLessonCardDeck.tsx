/*
 * Tab-UI Pattern: Swipeable Card Deck (Stories / Apple-Wallet inspired)
 *
 * The five locked lesson tabs are rendered as a five-card deck. Only one card
 * is centered and fully opaque at a time; the next one or two cards peek from
 * behind with a translate+scale+opacity offset to imply a physical stack.
 * Navigation happens via a prominent Next CTA (bottom-right), a Previous CTA
 * (bottom-left, disabled on the first card), a five-dot indicator with a wide
 * pill for the active card, ArrowLeft/ArrowRight keyboard shortcuts, and an
 * optional horizontal touch swipe. Each card carries a colored accent bar at
 * top (indigo -> violet -> fuchsia -> rose -> amber) so progression through
 * the deck is also felt as a warming color sweep. Content that overflows the
 * card viewport is internally scrollable with soft top/bottom gradient fades.
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type AccentKey = 'indigo' | 'violet' | 'fuchsia' | 'rose' | 'amber';

type CardMeta = {
  id: string;
  label: string;
  sublabel: string;
  accent: AccentKey;
};

const CARDS: CardMeta[] = [
  { id: 'overview', label: 'Overview', sublabel: 'Why the method', accent: 'indigo' },
  { id: 'breakdown-gap', label: 'Break Down & Find Gap', sublabel: 'Steps 1 – 2', accent: 'violet' },
  { id: 'prephrase-negate', label: 'Pre-phrase & Negate', sublabel: 'Steps 3 – 4', accent: 'fuchsia' },
  { id: 'wrong-answers', label: 'Wrong Answer Patterns', sublabel: 'The 5 traps', accent: 'rose' },
  { id: 'worked-example', label: 'Worked Example & Takeaways', sublabel: 'Bike-path walkthrough', accent: 'amber' },
];

const ACCENT_BAR: Record<AccentKey, string> = {
  indigo: 'from-indigo-500 via-indigo-400 to-indigo-300',
  violet: 'from-violet-500 via-violet-400 to-violet-300',
  fuchsia: 'from-fuchsia-500 via-fuchsia-400 to-fuchsia-300',
  rose: 'from-rose-500 via-rose-400 to-rose-300',
  amber: 'from-amber-500 via-amber-400 to-amber-300',
};
const ACCENT_DOT: Record<AccentKey, string> = { indigo: 'bg-indigo-500', violet: 'bg-violet-500', fuchsia: 'bg-fuchsia-500', rose: 'bg-rose-500', amber: 'bg-amber-500' };
const ACCENT_TEXT: Record<AccentKey, string> = { indigo: 'text-indigo-700', violet: 'text-violet-700', fuchsia: 'text-fuchsia-700', rose: 'text-rose-700', amber: 'text-amber-700' };
const ACCENT_CHIP: Record<AccentKey, string> = {
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  violet: 'bg-violet-50 text-violet-700 border-violet-200',
  fuchsia: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200',
  rose: 'bg-rose-50 text-rose-700 border-rose-200',
  amber: 'bg-amber-50 text-amber-800 border-amber-200',
};

/* ------------------------------ shared primitives ------------------------------ */

const SectionTitle: React.FC<{ children: React.ReactNode; accent: AccentKey }> = ({ children, accent }) => (
  <h3 className={`text-lg font-semibold tracking-tight ${ACCENT_TEXT[accent]} mt-6 mb-3`}>{children}</h3>
);

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-[15px] leading-relaxed text-slate-700 mb-4">{children}</p>
);

const Callout: React.FC<{ title: string; tone?: 'tip' | 'note' | 'summary'; accent: AccentKey; children: React.ReactNode }> = ({ title, tone = 'note', accent, children }) => {
  const toneBg = tone === 'tip' ? 'bg-emerald-50/70' : tone === 'summary' ? 'bg-slate-50' : 'bg-white';
  return (
    <div className={`rounded-2xl p-4 my-4 border ${ACCENT_CHIP[accent]} ${toneBg}`}>
      <div className={`text-sm font-semibold uppercase tracking-wider mb-2 ${ACCENT_TEXT[accent]}`}>{title}</div>
      <div className="text-[14.5px] leading-relaxed text-slate-700 space-y-2">{children}</div>
    </div>
  );
};

const NumberedStep: React.FC<{ n: number; title: string; children: React.ReactNode; accent: AccentKey }> = ({ n, title, children, accent }) => (
  <div className="flex gap-3 mb-3">
    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-sm ${ACCENT_DOT[accent]}`}>{n}</div>
    <div className="min-w-0"><div className="font-semibold text-slate-900 text-[15px]">{title}</div><div className="text-[14.5px] leading-relaxed text-slate-700 mt-1">{children}</div></div>
  </div>
);

const InlineTable: React.FC<{ headers: string[]; rows: (string | React.ReactNode)[][]; accent: AccentKey }> = ({ headers, rows, accent }) => (
  <div className="overflow-x-auto rounded-xl border border-slate-200 my-4">
    <table className="w-full text-left text-[14px]">
      <thead><tr className={`${ACCENT_CHIP[accent]} border-b`}>{headers.map((h, i) => (<th key={i} className="px-4 py-2 font-semibold whitespace-nowrap">{h}</th>))}</tr></thead>
      <tbody>{rows.map((row, i) => (<tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>{row.map((cell, j) => (<td key={j} className="px-4 py-3 align-top text-slate-700">{cell}</td>))}</tr>))}</tbody>
    </table>
  </div>
);

/* ------------------------------ card bodies ------------------------------ */

const OverviewCard: React.FC = () => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <span className={`text-xs font-semibold uppercase tracking-widest ${ACCENT_TEXT.indigo}`}>Card 1 of 5</span>
      <span className={`px-2 py-0.5 text-[11px] font-medium rounded-full border ${ACCENT_CHIP.indigo}`}>Overview</span>
    </div>
    <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">The 4-Step Method for Necessary Assumption</h2>
    <Paragraph>
      A complete, repeatable method for solving any Necessary Assumption question. Understand the author&apos;s argument, find the
      logical gap, pre-phrase a &quot;must-have&quot; belief, and verify your answer with the Negation Test.
    </Paragraph>

    <Callout title="Timing Budget" tone="tip" accent="indigo">
      <p>Budget roughly <strong>1 minute and 30 seconds</strong> per Necessary Assumption question.</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Steps 1 – 3 (read, find gap, pre-phrase): about <strong>50 seconds</strong>.</li>
        <li>Step 4 (Negation Test on candidates): about <strong>40 seconds</strong>.</li>
        <li>With practice, only apply the Negation Test to <strong>1 – 2 choices</strong>.</li>
      </ul>
    </Callout>

    <SectionTitle accent="indigo">The airtight principle</SectionTitle>
    <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-5 my-3">
      <p className="text-slate-800 text-[15px] leading-relaxed">
        If a statement is <strong className="text-indigo-700">truly necessary</strong>, negating it <strong className="text-indigo-700">destroys</strong> the
        argument. That is the logical guarantee that makes the Negation Test work every time.
      </p>
    </div>

    <SectionTitle accent="indigo">The 4-step flow at a glance</SectionTitle>
    <NumberedStep n={1} title="Break Down the Argument" accent="indigo">Isolate the conclusion and premises, then summarize the author&apos;s reasoning in plain terms.</NumberedStep>
    <NumberedStep n={2} title="Identify the Logical Gap" accent="indigo">Find the disconnect between evidence and conclusion. Ask: &quot;What did the author take for granted?&quot;</NumberedStep>
    <NumberedStep n={3} title="Pre-phrase the Necessary Connection" accent="indigo">Predict the type of assumption the argument depends on before looking at the answer choices.</NumberedStep>
    <NumberedStep n={4} title="Evaluate with the Negation Test" accent="indigo">Negate your top candidate. If it destroys the argument, it is necessary. If the argument survives, it is not.</NumberedStep>
  </div>
);

const BreakdownGapCard: React.FC = () => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <span className={`text-xs font-semibold uppercase tracking-widest ${ACCENT_TEXT.violet}`}>Card 2 of 5</span>
      <span className={`px-2 py-0.5 text-[11px] font-medium rounded-full border ${ACCENT_CHIP.violet}`}>Steps 1 – 2</span>
    </div>
    <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">Break Down the Argument, then Find the Gap</h2>

    <SectionTitle accent="violet">Step 1 — Break Down the Argument</SectionTitle>
    <Paragraph>
      Before evaluating answer choices, map the argument&apos;s structure. You cannot find a missing piece until you understand
      how the existing pieces fit together.
    </Paragraph>
    <ul className="list-disc pl-6 space-y-2 text-[14.5px] text-slate-700 mb-3">
      <li>
        <strong>Find the Main Conclusion.</strong> The author&apos;s primary claim, judgment, or prediction. Indicators:
        <em> therefore, thus, so, hence, consequently.</em>
      </li>
      <li>
        <strong>Find the Premises.</strong> The evidence or reasons given to support the conclusion. Indicators:
        <em> because, since, for, after all, given that.</em>
      </li>
      <li>
        <strong>Summarize the Core Argument:</strong> &quot;The author concludes [C], because of [P].&quot;
      </li>
    </ul>

    <Callout title="Term mismatch watch" tone="note" accent="violet">
      Pay close attention to the <strong>specific terms</strong> used in the premises vs. the conclusion. NA questions frequently
      hinge on a mismatch — the conclusion uses a word or concept the premises do not fully establish. That mismatch <em>is</em>
      the gap.
    </Callout>

    <Callout title="When the stimulus is complex" tone="note" accent="violet">
      Some NA stimuli contain multiple layers of reasoning. Isolate the <strong>single most important logical leap</strong> — the
      jump from the key piece of evidence to the final conclusion. The necessary assumption almost always addresses this
      primary leap, not a secondary detail.
    </Callout>

    <SectionTitle accent="violet">Step 2 — Identify the Logical Gap</SectionTitle>
    <Paragraph>
      NA assumptions fall into two functional categories. Learning the shape of each makes pre-phrasing much faster.
    </Paragraph>

    <div className="grid md:grid-cols-2 gap-3 my-3">
      <div className="rounded-2xl border border-violet-200 bg-violet-50/40 p-4">
        <div className="font-semibold text-violet-800 mb-1">A. Bridge Assumptions</div>
        <p className="text-[14px] text-slate-700 mb-2">Missing links that connect two ideas:</p>
        <ul className="list-disc pl-5 text-[14px] text-slate-700 space-y-1">
          <li><strong>Definitional gap</strong> — two distinct ideas treated as the same (or as incompatible).</li>
          <li><strong>Generalization gap</strong> — a specific instance applies to a whole group.</li>
          <li><strong>Key Ingredient gap</strong> — the intermediate benefit actually leads to the ultimate goal.</li>
        </ul>
      </div>
      <div className="rounded-2xl border border-fuchsia-200 bg-fuchsia-50/40 p-4">
        <div className="font-semibold text-fuchsia-800 mb-1">B. Defender Assumptions</div>
        <p className="text-[14px] text-slate-700 mb-2">Eliminate threats that could destroy the argument:</p>
        <ul className="list-disc pl-5 text-[14px] text-slate-700 space-y-1">
          <li><strong>Causal gap</strong> — a specific alternative factor was not the real cause.</li>
          <li><strong>Feasibility gap</strong> — no obstacles will make the plan fail.</li>
          <li><strong>Source gap</strong> — a biased source&apos;s conclusion is not automatically invalid.</li>
        </ul>
      </div>
    </div>

    <SectionTitle accent="violet">Common Logical Leaps</SectionTitle>
    <InlineTable
      accent="violet"
      headers={['Leap Type', 'What the Author Does', 'What the NA Must Do']}
      rows={[
        ['Causal Leap', 'Assumes correlation proves a specific cause, ignoring alternatives', 'Rule out an alternative cause or confirm the stated cause is the only one'],
        ['Generalization Leap', 'Assumes a specific example represents a broader category', 'Confirm representativeness or that the broader category shares the trait'],
        ['Definitional Leap', 'Assumes two different terms are equivalent or incompatible', 'Provide the definitional bridge'],
        ['Feasibility Leap', 'Assumes a proposed plan will work without obstacles', 'Confirm a specific obstacle does not exist'],
        ['Analogy Leap', 'Assumes two situations are similar in a relevant way', 'Confirm they share the feature that matters for the conclusion'],
      ]}
    />
  </div>
);

const PrephraseNegateCard: React.FC = () => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <span className={`text-xs font-semibold uppercase tracking-widest ${ACCENT_TEXT.fuchsia}`}>Card 3 of 5</span>
      <span className={`px-2 py-0.5 text-[11px] font-medium rounded-full border ${ACCENT_CHIP.fuchsia}`}>Steps 3 – 4</span>
    </div>
    <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">Pre-phrase, then Negate and Verify</h2>

    <SectionTitle accent="fuchsia">Step 3 — Pre-phrase the Necessary Connection</SectionTitle>
    <Paragraph>Before looking at the answer choices, articulate the assumption in your own words. Complete this sentence:</Paragraph>

    <div className="rounded-2xl bg-gradient-to-br from-fuchsia-50 to-white border border-fuchsia-200 p-5 my-3 text-center">
      <div className="text-[11px] uppercase tracking-widest text-fuchsia-600 font-semibold mb-1">Template</div>
      <div className="italic text-slate-800 text-[16px]">
        &ldquo;For this argument to work, the author must believe that…&rdquo;
      </div>
    </div>

    <Paragraph>
      Your pre-phrase does not need to be the exact wording of the correct answer — it just needs to capture the
      <strong> type and direction</strong> of the belief the argument depends on. A good pre-phrase tells you what kind of answer
      to look for so you can scan the choices efficiently.
    </Paragraph>

    <Callout title="NA pre-phrases are softer than SA pre-phrases" tone="tip" accent="fuchsia">
      <p>
        On <strong>Sufficient Assumption</strong> questions, your pre-phrase should be a precise logical statement (&ldquo;B → C&rdquo;).
      </p>
      <p>
        On <strong>Necessary Assumption</strong> questions, your pre-phrase should capture the <strong>direction and type</strong> of
        the assumption without demanding exact wording. NA answers are often modest and less predictable, so a rigid
        pre-phrase can cause you to overlook the correct choice.
      </p>
    </Callout>

    <SectionTitle accent="fuchsia">Pre-phrase examples</SectionTitle>
    <InlineTable
      accent="fuchsia"
      headers={['Gap Type', 'Pre-phrase Template']}
      rows={[
        ['Key Ingredient', '"The intermediate benefit must actually be useful for the ultimate goal."'],
        ['Definitional Gap', '"These two concepts must be incompatible (or connected) in the way the author assumes."'],
        ['Only Way', '"The stated cause must be the only effective way to produce the effect."'],
        ['Closed Universe', '"The defined group must be the only eligible candidates."'],
        ['Source Fallacy', '"A biased source\'s arguments must be inherently invalid."'],
      ]}
    />

    <SectionTitle accent="fuchsia">Step 4 — The Negation Test</SectionTitle>
    <Paragraph>
      The <strong>Negation Test</strong> is the definitive proof for this question type. It works on the airtight principle that if
      a statement is truly necessary, the argument cannot survive without it.
    </Paragraph>

    <NumberedStep n={1} title="Select your top candidate" accent="fuchsia">The answer choice that best matches your pre-phrase.</NumberedStep>
    <NumberedStep n={2} title="Negate the logic, not just the verb" accent="fuchsia">Turn the statement into its logical opposite. Be careful to flip the <em>logical</em> meaning, not merely add &quot;not.&quot;</NumberedStep>
    <NumberedStep n={3} title="Insert the negation as a new fact" accent="fuchsia">Ask: &quot;If this new fact were true, does the conclusion still make sense?&quot;</NumberedStep>
    <NumberedStep n={4} title="Evaluate the impact" accent="fuchsia"><strong>Argument collapses = CORRECT.</strong> The original choice was necessary.<br /><strong>Argument survives = INCORRECT.</strong> Even if weakened, the choice was not necessary.</NumberedStep>

    <SectionTitle accent="fuchsia">Negation Quick Reference</SectionTitle>
    <div className="grid sm:grid-cols-2 gap-2 my-3">
      {[
        ['"All X are Y"', '"Not all X are Y" (Some X are not Y)'],
        ['"Some X are Y"', '"None of X are Y"'],
        ['"X causes Y"', '"X does not cause Y"'],
        ['"X is the only way"', '"X is not the only way"'],
        ['"X can lead to Y"', '"X cannot lead to Y"'],
      ].map(([orig, neg], i) => (
        <div key={i} className="flex items-stretch rounded-xl border border-fuchsia-200 overflow-hidden bg-white">
          <div className="w-1.5 bg-fuchsia-500" />
          <div className="p-3 flex-1">
            <div className="text-[11px] uppercase tracking-wider text-slate-500">Original</div>
            <div className="text-[14px] text-slate-800 mb-2">{orig}</div>
            <div className="text-[11px] uppercase tracking-wider text-fuchsia-600">Negation</div>
            <div className="text-[14px] text-fuchsia-900 font-medium">{neg}</div>
          </div>
        </div>
      ))}
    </div>

    <SectionTitle accent="fuchsia">4 traps to watch for at Step 4</SectionTitle>
    <div className="space-y-2 my-3">
      {[
        ['The Helpful Strengthener', 'Negation weakens the argument but does not destroy it. Necessary assumptions are essential, not just helpful.'],
        ['The Neutral Choice', 'Negation has no impact on the conclusion. If the argument does not care whether it is true or false, it is not necessary.'],
        ['The Restatement', 'Already explicitly stated in the premises. Assumptions must be unstated — a restatement cannot be assumed.'],
        ['The Sufficient Trap', 'Answer guarantees the conclusion. It may or may not be necessary. Test it carefully — sometimes a sufficient assumption is also necessary.'],
      ].map(([t, d]) => (
        <div key={t} className="rounded-xl border border-slate-200 bg-white p-3">
          <div className="font-semibold text-fuchsia-800 text-[14.5px]">{t}</div>
          <div className="text-[14px] text-slate-700 leading-relaxed">{d}</div>
        </div>
      ))}
    </div>
  </div>
);

const WrongAnswersCard: React.FC = () => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <span className={`text-xs font-semibold uppercase tracking-widest ${ACCENT_TEXT.rose}`}>Card 4 of 5</span>
      <span className={`px-2 py-0.5 text-[11px] font-medium rounded-full border ${ACCENT_CHIP.rose}`}>The 5 traps</span>
    </div>
    <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">Common Wrong Answer Patterns</h2>
    <Paragraph>
      Wrong answers on NA questions fail in predictable ways. Recognizing these traps lets you eliminate quickly and with
      confidence.
    </Paragraph>

    <InlineTable
      accent="rose"
      headers={['Trap Type', 'What It Does', 'How to Spot It']}
      rows={[
        [
          'Out of Scope',
          'Introduces irrelevant concepts or comparisons that do not affect the core argument.',
          '"Does this choice address the specific gap between the premises and conclusion?" If it talks about something the argument never discussed, eliminate.',
        ],
        [
          'Restatement',
          'Rehashes information already explicitly stated in the premises. Assumptions must be unstated.',
          '"Is this already said in the stimulus?" If yes, the argument does not need to assume it — it already states it.',
        ],
        [
          'Weakener',
          'Undermines the conclusion. An author never assumes a fact that harms their own case.',
          'Check direction: does the choice hurt or help the argument? If it hurts, eliminate immediately.',
        ],
        [
          'Too Strong / Sufficient',
          'Goes beyond what the argument requires. Would prove the conclusion rather than just support it.',
          'Apply the Negation Test carefully. Sometimes a strong answer IS necessary; sometimes it is not. Let the test decide.',
        ],
        [
          'Wrong Direction',
          'Right topic, wrong directional link — answer says B → A but the argument needs A → B.',
          'Diagram the relationship. Make sure the answer bridges the gap in the direction the argument requires.',
        ],
      ]}
    />

    <Callout title="How these traps map back to Step 4" accent="rose">
      <p>
        Each trap has a signature failure mode in the Negation Test: the Weakener&apos;s negation <em>helps</em> the argument; the
        Restatement&apos;s negation contradicts a stated premise (a false signal); the Out of Scope answer&apos;s negation has no
        effect at all. The pattern is always: if the argument survives the negation, the answer was never necessary.
      </p>
    </Callout>

    <Callout title="Between two close choices" tone="tip" accent="rose">
      Negate both. The one whose negation <strong>destroys</strong> the argument is the necessary assumption. The one whose
      negation only <em>weakens</em> the argument is a strengthener in disguise.
    </Callout>
  </div>
);

const WorkedExampleCard: React.FC = () => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <span className={`text-xs font-semibold uppercase tracking-widest ${ACCENT_TEXT.amber}`}>Card 5 of 5</span>
      <span className={`px-2 py-0.5 text-[11px] font-medium rounded-full border ${ACCENT_CHIP.amber}`}>Worked example</span>
    </div>
    <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">Bike Path &amp; Traffic Congestion</h2>

    <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-50/60 p-4 my-3">
      <div className="text-[11px] uppercase tracking-widest text-amber-700 font-semibold mb-1">Editorial</div>
      <p className="text-slate-800 text-[15px] leading-relaxed italic">
        &ldquo;Our city should convert the abandoned rail corridor into a bicycle commuting path. A recent survey found that 60% of
        residents who live within two miles of the corridor would use it for daily commuting if it were available. Converting
        the corridor would therefore significantly reduce automobile traffic congestion in the city.&rdquo;
      </p>
    </div>

    <Paragraph>
      This is a classic <strong>Key Ingredient gap</strong>. Interest in biking only matters to the conclusion if at least some
      of those riders are currently contributing to car traffic.
    </Paragraph>

    <SectionTitle accent="amber">Step-by-step walkthrough</SectionTitle>

    <NumberedStep n={1} title="Break Down" accent="amber"><ul className="list-disc pl-5 space-y-1"><li><strong>Conclusion:</strong> Converting the corridor would significantly reduce automobile traffic congestion.</li><li><strong>Premise:</strong> 60% of nearby residents would use the bicycle path for daily commuting.</li><li><strong>Core logic:</strong> People would bike → traffic congestion drops.</li></ul></NumberedStep>
    <NumberedStep n={2} title="Identify the Gap" accent="amber">The premises are about <em>bikers</em>; the conclusion is about <em>automobile traffic</em>. If the 60% who would bike currently walk, take the bus, or work from home, adding a bike path removes zero cars. The argument assumes some of these cyclists are currently <strong>car commuters</strong>.</NumberedStep>

    <NumberedStep n={3} title="Pre-phrase" accent="amber">&ldquo;At least some of the people who would use the bike path must currently commute by car. Otherwise, no cars are removed from the road and congestion cannot change.&rdquo;</NumberedStep>
    <NumberedStep n={4} title="Negate &amp; Verify" accent="amber">Negate the bridge: &quot;None of the potential cyclists currently commute by automobile.&quot; Then zero cars are removed → the conclusion about reducing congestion falls apart completely → the assumption is necessary.</NumberedStep>

    <Callout title="Final check — NA answers are modest" accent="amber">
      The conclusion needs only one indispensable fact: some would-be cyclists must currently be car commuters. Stronger claims
      about how many commuters live nearby, how long the corridor is, or whether biking is environmentally better may be useful
      in the real world, but the argument does not collapse without them. NA is about the smallest bridge whose negation
      destroys the conclusion. &ldquo;At least some&rdquo; is cautious — but its denial is catastrophic.
    </Callout>

    <SectionTitle accent="amber">Key takeaways</SectionTitle>
    <div className="rounded-2xl bg-gradient-to-br from-amber-50 via-rose-50 to-fuchsia-50 border border-amber-200 p-5 my-3 space-y-3">
      {[
        { c: 'bg-amber-500', body: <><strong>The flow:</strong> Break Down → Find the Gap → Pre-phrase → Negate and Verify.</> },
        { c: 'bg-rose-500', body: <>Between two close choices, <strong>negate both</strong>. One destroys (correct); the other merely weakens (strengthener).</> },
        { c: 'bg-fuchsia-500', body: <>NA answers are often <strong>modest</strong>. Look for the answer whose <em>denial is fatal</em>, not the one that &ldquo;best supports.&rdquo;</> },
        { c: 'bg-violet-500', body: <>Watch for the <strong>Key Ingredient gap</strong> — one of the most common NA patterns.</> },
      ].map((item, i) => (
        <div key={i} className="flex gap-2 items-start">
          <span className={`mt-1 w-2 h-2 rounded-full ${item.c} shrink-0`} />
          <p className="text-[14.5px] text-slate-800">{item.body}</p>
        </div>
      ))}
    </div>
  </div>
);

const CARD_BODIES: React.FC[] = [OverviewCard, BreakdownGapCard, PrephraseNegateCard, WrongAnswersCard, WorkedExampleCard];

/* ------------------------------ the deck ------------------------------ */

export const NegationLessonCardDeck: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const total = CARDS.length;

  const go = useCallback((delta: number) => {
    setIndex((cur) => {
      const next = Math.max(0, Math.min(total - 1, cur + delta));
      if (next === cur) return cur;
      setDirection(delta > 0 ? 1 : -1);
      setIsAnimating(true);
      window.setTimeout(() => setIsAnimating(false), 350);
      return next;
    });
  }, [total]);

  const jumpTo = useCallback((target: number) => {
    setIndex((cur) => {
      if (target === cur) return cur;
      setDirection(target > cur ? 1 : -1);
      setIsAnimating(true);
      window.setTimeout(() => setIsAnimating(false), 350);
      return target;
    });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; touchDeltaX.current = 0; };
  const onTouchMove = (e: React.TouchEvent) => { if (touchStartX.current == null) return; touchDeltaX.current = e.touches[0].clientX - touchStartX.current; };
  const onTouchEnd = () => {
    const threshold = 60;
    if (touchDeltaX.current <= -threshold) go(1);
    else if (touchDeltaX.current >= threshold) go(-1);
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  const current = CARDS[index];
  const CurrentBody = CARD_BODIES[index];
  const isFirst = index === 0;
  const isLast = index === total - 1;

  return (
    <div className="min-h-[720px] w-full bg-gradient-to-b from-slate-100 via-slate-50 to-white py-10 px-4">
      {/* Lesson header */}
      <div className="max-w-3xl mx-auto mb-6 text-center">
        <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-slate-500 mb-1">Module 11 · Lesson 2</div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Step-by-Step Guide: Necessary Assumption</h1>
        <p className="text-sm text-slate-500 mt-2">Swipe or use ← → arrows. {index + 1} of {total}.</p>
      </div>

      {/* Deck viewport */}
      <div className="relative max-w-3xl mx-auto" style={{ height: 'min(78vh, 720px)' }} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        {/* Peek cards (behind) */}
        {CARDS.map((c, i) => {
          const offset = i - index;
          if (offset <= 0 || offset > 2) return null;
          return (
            <div key={`peek-${c.id}`} aria-hidden className="absolute inset-0 rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden pointer-events-none transition-all duration-300"
              style={{ transform: `translateY(${offset * 14}px) scale(${1 - offset * 0.04})`, opacity: 1 - offset * 0.35, zIndex: 10 - offset }}>
              <div className={`h-2 w-full bg-gradient-to-r ${ACCENT_BAR[c.accent]}`} />
            </div>
          );
        })}

        {/* Active card */}
        <div key={`active-${current.id}`} className="absolute inset-0 rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200 overflow-hidden z-20"
          style={{ animation: isAnimating ? `cardEnter 350ms ease-out both` : undefined, ...({ '--enter-from': direction === 1 ? '32px' : '-32px' } as React.CSSProperties) }}>
          <div className={`h-2 w-full bg-gradient-to-r ${ACCENT_BAR[current.accent]}`} />
          <div className="relative h-[calc(100%-0.5rem)]">
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white to-transparent z-10" />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent z-10" />
            <div className="h-full overflow-y-auto px-6 md:px-10 py-8"><CurrentBody /><div className="h-6" /></div>
          </div>
        </div>

        <style>{`@keyframes cardEnter { 0% { opacity: 0; transform: translateX(var(--enter-from, 24px)) scale(0.98); } 100% { opacity: 1; transform: translateX(0) scale(1); } }`}</style>
      </div>

      {/* Controls */}
      <div className="max-w-3xl mx-auto mt-6 relative">
        <div className="flex items-center justify-center gap-2" role="tablist" aria-label="Lesson card navigation">
          {CARDS.map((c, i) => {
            const active = i === index;
            return (
              <button key={c.id} role="tab" aria-selected={active} aria-label={`Go to card ${i + 1}: ${c.label}`} onClick={() => jumpTo(i)}
                className={`transition-all duration-300 rounded-full ${active ? `h-2.5 w-10 ${ACCENT_DOT[c.accent]} shadow-sm` : 'h-2.5 w-2.5 bg-slate-300 hover:bg-slate-400'}`} />
            );
          })}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <button type="button" onClick={() => go(-1)} disabled={isFirst}
            className={`inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition ${isFirst ? 'text-slate-400 bg-slate-100 cursor-not-allowed' : 'text-slate-700 bg-white ring-1 ring-slate-300 hover:bg-slate-50'}`}>
            <ChevronLeft className="w-4 h-4" />Previous
          </button>
          <div className="text-[13px] text-slate-500 hidden sm:block">
            <span className="font-medium text-slate-700">{current.label}</span><span className="mx-1.5 text-slate-300">·</span><span>{current.sublabel}</span>
          </div>
          <button type="button" onClick={() => go(1)} disabled={isLast}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold shadow-md transition ${isLast ? 'text-slate-400 bg-slate-100 cursor-not-allowed shadow-none' : `text-white bg-gradient-to-r ${ACCENT_BAR[current.accent]} hover:brightness-110`}`}>
            {isLast ? 'End of lesson' : 'Next'}{!isLast && <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NegationLessonCardDeck;
