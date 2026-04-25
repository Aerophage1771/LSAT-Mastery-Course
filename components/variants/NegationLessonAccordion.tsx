/*
 * Pattern: Accordion-as-Tabs
 *
 * Five expandable section headers stacked vertically replace traditional tabs.
 * The defining advantage over horizontal or segmented tab patterns is that
 * multiple sections can remain open simultaneously, allowing a student to
 * keep Step 3 (Pre-phrase) and Step 4 (Negate) expanded side-by-side while
 * cross-referencing the 4 Step-4 traps against the 5 Wrong Answer Patterns.
 * Each header shows a compact summary chip when collapsed (e.g. "5 traps, 2
 * examples") so the student always knows what is inside without expanding.
 * Clean white cards with a slate-900 text palette, a single emerald accent,
 * and a 4px left-border bar on any open section provide quiet visual focus
 * without competing with the dense lesson content.
 */

import React, { useState } from 'react';
import { ChevronDown, BookOpen, Layers, Target, AlertTriangle, Lightbulb, Clock, CheckCircle2, XCircle, Minus, Plus } from 'lucide-react';

type SectionId = 'overview' | 'breakdown-gap' | 'prephrase-negate' | 'wrong-answers' | 'worked-example';
type Section = { id: SectionId; label: string; subtitle: string; chip: string; icon: React.ComponentType<{ className?: string }> };

const SECTIONS: Section[] = [
  { id: 'overview', label: 'Overview', subtitle: 'Why the method, the 1:30 timing budget, and the airtight principle.', chip: '4 steps · 1:30 budget', icon: BookOpen },
  { id: 'breakdown-gap', label: 'Break Down & Find Gap · Steps 1–2', subtitle: 'Argument anatomy, Bridge vs Defender, and the 5 Common Logical Leaps.', chip: '2 categories · 5 leaps', icon: Layers },
  { id: 'prephrase-negate', label: 'Pre-phrase & Negate · Steps 3–4', subtitle: 'Template, 5 pre-phrase examples, negation mechanics, and the 4 traps.', chip: '5 examples · 5 pairs · 4 traps', icon: Target },
  { id: 'wrong-answers', label: 'Wrong Answer Patterns', subtitle: 'The five recurring trap shapes with a "how to spot it" column.', chip: '5 traps with detection cues', icon: AlertTriangle },
  { id: 'worked-example', label: 'Worked Example & Takeaways', subtitle: 'Bike-path walkthrough end-to-end plus Key Takeaways.', chip: 'Full walkthrough · 4 takeaways', icon: Lightbulb },
];

export const NegationLessonAccordion: React.FC = () => {
  const [openIds, setOpenIds] = useState<Set<SectionId>>(new Set<SectionId>(['overview']));

  const toggle = (id: SectionId) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandAll = () => setOpenIds(new Set(SECTIONS.map((s) => s.id)));
  const collapseAll = () => setOpenIds(new Set());

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 text-slate-900">
      {/* Lesson header */}
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
          Module 11 · Lesson 2
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          The 4-Step Method for Necessary Assumption Questions
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
          A complete, repeatable method: understand the author's argument, find the logical gap,
          pre-phrase a "must-have" belief, and verify your answer with the Negation Test. Sections
          below can be opened independently — keep several expanded at once to cross-reference.
        </p>
      </header>

      {/* Expand / collapse controls */}
      <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
        <p className="text-sm text-slate-500">
          <span className="font-medium text-slate-700">{openIds.size}</span> of {SECTIONS.length} sections open
        </p>
        <div className="flex gap-2">
          <button
            onClick={expandAll}
            className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700"
          >
            <Plus className="h-3.5 w-3.5" /> Expand all
          </button>
          <button
            onClick={collapseAll}
            className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700"
          >
            <Minus className="h-3.5 w-3.5" /> Collapse all
          </button>
        </div>
      </div>

      {/* Accordion sections */}
      <div className="space-y-3">
        {SECTIONS.map((section) => {
          const isOpen = openIds.has(section.id);
          const Icon = section.icon;
          return (
            <article
              key={section.id}
              className={`overflow-hidden rounded-lg border bg-white transition ${
                isOpen ? 'border-l-4 border-l-emerald-500 border-slate-200 shadow-sm' : 'border-slate-200'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(section.id)}
                className="flex w-full items-start gap-4 px-5 py-4 text-left transition hover:bg-slate-50"
                aria-expanded={isOpen}
              >
                <span
                  className={`mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-md ${
                    isOpen ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="flex-1">
                  <span className="flex items-center gap-3">
                    <span className="text-lg font-semibold text-slate-900">{section.label}</span>
                    {!isOpen && (
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                        {section.chip}
                      </span>
                    )}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-slate-600">
                    {section.subtitle}
                  </span>
                </span>
                <ChevronDown
                  className={`mt-2 h-5 w-5 flex-none text-slate-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-emerald-600' : ''
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-slate-100 px-5 py-6 text-[15px] leading-7 text-slate-700 sm:px-8">
                    {section.id === 'overview' && <OverviewPanel />}
                    {section.id === 'breakdown-gap' && <BreakdownGapPanel />}
                    {section.id === 'prephrase-negate' && <PrephraseNegatePanel />}
                    {section.id === 'wrong-answers' && <WrongAnswersPanel />}
                    {section.id === 'worked-example' && <WorkedExamplePanel />}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-10 text-center text-xs text-slate-400">
        Tip — keep Steps 3–4 and Wrong Answer Patterns open together to cross-reference traps while you negate.
      </p>
    </div>
  );
};

/* --------------------------------- OVERVIEW --------------------------------- */

const OverviewPanel: React.FC = () => (
  <div className="space-y-5">
    <p>
      This lesson provides a complete, repeatable method for solving any Necessary Assumption
      question. The goal is the same every time: understand the author's argument, find the
      logical gap, pre-phrase a "must-have" belief, and verify your answer with the{' '}
      <strong>Negation Test</strong>.
    </p>

    <Callout variant="tip" icon={Clock} title="Timing — ~1:30 per question">
      Budget roughly <strong>1 minute and 30 seconds</strong> per Necessary Assumption question.
      Steps 1–3 (reading, gap-finding, and pre-phrasing) should take about{' '}
      <strong>50 seconds</strong> combined. Step 4 (evaluating choices with the Negation Test)
      should take about <strong>40 seconds</strong>. With practice you will only need to apply
      the Negation Test to 1–2 choices. Resist the urge to skip it — it is the difference
      between a good guess and a guaranteed correct answer.
    </Callout>

    <Callout variant="accent" icon={CheckCircle2} title="The airtight principle">
      If a statement is <strong>truly necessary</strong>, negating it <strong>destroys</strong>{' '}
      the argument. That is the entire logical foundation of the Negation Test — no appeal to
      "how strongly it supports," no judgment call. If the argument cannot survive without the
      statement, the statement is a necessary assumption.
    </Callout>

    <div>
      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
        The 4-Step Method — preview
      </h4>
      <ol className="space-y-3">
        <StepRow n={1} title="Break Down the Argument">
          Read the stimulus, isolate the conclusion and premises, and summarize the author's
          reasoning in simple terms.
        </StepRow>
        <StepRow n={2} title="Identify the Logical Gap">
          Find the disconnect between evidence and conclusion. Ask: "What did the author take
          for granted?"
        </StepRow>
        <StepRow n={3} title="Pre-phrase the Necessary Connection">
          Predict the <em>type</em> of assumption the argument depends on before looking at the
          answer choices.
        </StepRow>
        <StepRow n={4} title="Evaluate with the Negation Test">
          Test your top candidate(s) by negating them. If the negation destroys the argument,
          you have found the necessary assumption.
        </StepRow>
      </ol>
    </div>
  </div>
);

/* ----------------------------- BREAKDOWN + GAP ----------------------------- */

const BreakdownGapPanel: React.FC = () => (
  <div className="space-y-6">
    <section>
      <h3 className="mb-2 text-xl font-semibold text-slate-900">Step 1 — Break Down the Argument</h3>
      <p>
        Before evaluating answer choices, you must map the argument's structure. You cannot find
        a missing piece until you understand how the existing pieces fit together.
      </p>
      <ul className="mt-3 space-y-2">
        <Bullet>
          <strong>Find the Main Conclusion.</strong> The author's primary claim, judgment, or
          prediction — the statement being argued for. Conclusion indicators:{' '}
          <em>therefore, thus, so, hence, consequently.</em>
        </Bullet>
        <Bullet>
          <strong>Find the Premises.</strong> The evidence or reasons offered in support. Premise
          indicators: <em>because, since, for, after all, given that.</em>
        </Bullet>
        <Bullet>
          <strong>Summarize the Core Argument:</strong> "The author concludes{' '}
          <em>[Conclusion]</em>, because of <em>[Premises]</em>."
        </Bullet>
      </ul>

      <Callout variant="warn" icon={AlertTriangle} title="Watch for term mismatches">
        NA questions frequently hinge on a mismatch between the <em>specific terms</em> used in
        the premises versus the conclusion. The conclusion uses a word or concept that the
        premises do not fully establish. That mismatch is the gap.
      </Callout>

      <Callout variant="default" icon={Layers} title="Complex stimuli — isolate the main leap">
        Some NA stimuli contain multiple layers of reasoning. When the argument is complex, focus
        on the <strong>single most important logical leap</strong> — the jump from the key piece
        of evidence to the final conclusion. The necessary assumption will almost always address
        this primary leap, not a secondary detail.
      </Callout>
    </section>

    <div className="border-t border-slate-100 pt-6">
      <h3 className="mb-2 text-xl font-semibold text-slate-900">Step 2 — Identify the Logical Gap</h3>
      <p>
        With the core argument identified, pinpoint the logical gap. Ask:{' '}
        <em>"How did the author get from the evidence to the conclusion? What idea did they take
        for granted?"</em>
      </p>
      <p className="mt-3">
        NA assumptions fall into two functional categories:
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <CategoryCard title="Bridge Assumptions" subtitle="Missing links that connect two ideas">
          <ul className="space-y-2 text-sm">
            <Bullet>
              <strong>Definitional gap</strong> — two distinct ideas are treated as the same
              thing (or as incompatible).
            </Bullet>
            <Bullet>
              <strong>Generalization gap</strong> — a specific instance is assumed to apply to
              the whole group.
            </Bullet>
            <Bullet>
              <strong>Key Ingredient gap</strong> — an intermediate benefit is assumed to
              actually lead to the ultimate goal.
            </Bullet>
          </ul>
        </CategoryCard>
        <CategoryCard title="Defender Assumptions" subtitle="Eliminate threats to the conclusion">
          <ul className="space-y-2 text-sm">
            <Bullet>
              <strong>Causal gap</strong> — a specific alternative factor wasn't the real cause.
            </Bullet>
            <Bullet>
              <strong>Feasibility gap</strong> — there are no obstacles that would make the plan
              fail.
            </Bullet>
            <Bullet>
              <strong>Source gap</strong> — the source's bias doesn't automatically invalidate
              their argument.
            </Bullet>
          </ul>
        </CategoryCard>
      </div>

      <h4 className="mt-6 mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
        Common Logical Leaps
      </h4>
      <DataTable
        headers={['Leap Type', 'What the Author Does', 'What the NA Must Do']}
        rows={[
          [
            'Causal Leap',
            'Assumes a correlation proves a specific cause, ignoring alternatives',
            'Rule out a specific alternative cause or confirm the stated cause is the only one',
          ],
          [
            'Generalization Leap',
            'Assumes a specific example represents a broader category',
            'Confirm the example is representative or that the broader category shares the relevant trait',
          ],
          [
            'Definitional Leap',
            'Assumes two different terms are equivalent or incompatible',
            'Provide the definitional bridge connecting or separating the two terms',
          ],
          [
            'Feasibility Leap',
            'Assumes a proposed plan will work without obstacles',
            'Confirm a specific obstacle does not exist',
          ],
          [
            'Analogy Leap',
            'Assumes two situations are similar in a relevant way',
            'Confirm the situations share the specific feature that matters for the conclusion',
          ],
        ]}
      />
    </div>
  </div>
);

/* --------------------------- PRE-PHRASE + NEGATE --------------------------- */

const PrephraseNegatePanel: React.FC = () => (
  <div className="space-y-6">
    <section>
      <h3 className="mb-2 text-xl font-semibold text-slate-900">
        Step 3 — Pre-phrase the Necessary Connection
      </h3>
      <p>
        Before looking at the answer choices, articulate the assumption in your own words.
        Complete this sentence:
      </p>
      <blockquote className="my-4 rounded-md border-l-4 border-emerald-500 bg-emerald-50 px-4 py-3 text-base italic text-slate-800">
        "For this argument to work, the author must believe that…"
      </blockquote>
      <p>
        Your pre-phrase does <em>not</em> need to be the exact wording of the correct answer. It
        just needs to capture the <strong>type and direction</strong> of belief the argument
        depends on, so you can scan the choices efficiently instead of evaluating each one from
        scratch.
      </p>

      <Callout variant="tip" icon={Lightbulb} title="NA pre-phrases are softer than SA pre-phrases">
        On Sufficient Assumption questions, your pre-phrase should be a precise logical statement
        ("B → C"). On Necessary Assumption questions, your pre-phrase should capture the
        direction and type of the assumption without demanding exact wording. NA answers are
        often more modest and less predictable than SA answers, so a rigid pre-phrase can cause
        you to overlook the correct choice.
      </Callout>

      <h4 className="mt-5 mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
        Pre-phrase Examples
      </h4>
      <DataTable
        headers={['Gap Type', 'Pre-phrase Template']}
        rows={[
          [
            'Key Ingredient',
            '"The intermediate benefit must actually be useful for the ultimate goal."',
          ],
          [
            'Definitional Gap',
            '"These two concepts must be incompatible (or connected) in the way the author assumes."',
          ],
          [
            'Only Way',
            '"The stated cause must be the only effective way to produce the effect."',
          ],
          ['Closed Universe', '"The defined group must be the only eligible candidates."'],
          ['Source Fallacy', '"A biased source\'s arguments must be inherently invalid."'],
        ]}
      />
    </section>

    <div className="border-t border-slate-100 pt-6">
      <h3 className="mb-2 text-xl font-semibold text-slate-900">
        Step 4 — Evaluate with the Negation Test
      </h3>
      <p>
        The <strong>Negation Test</strong> is the definitive proof for this question type. It
        works on a simple, airtight principle:{' '}
        <strong>if a statement is truly necessary, the argument cannot survive without it.</strong>
      </p>

      <ol className="mt-4 space-y-3">
        <StepRow n={1} title="Select your top candidate">
          The answer choice that best matches your pre-phrase.
        </StepRow>
        <StepRow n={2} title="Negate the logic, not just the verb">
          Flip the statement to its <em>logical</em> opposite. "All are" becomes "not all are,"
          not "none are." Be careful.
        </StepRow>
        <StepRow n={3} title="Insert the negation as a new fact">
          Treat the flipped statement as true and ask: "Does the conclusion still make sense?"
        </StepRow>
        <StepRow n={4} title="Evaluate the impact">
          <span className="block">
            <span className="font-semibold text-emerald-700">Argument Collapses = CORRECT.</span>{' '}
            The answer was necessary.
          </span>
          <span className="mt-1 block">
            <span className="font-semibold text-rose-700">Argument Survives = INCORRECT.</span>{' '}
            Even if it's weakened, the answer was not necessary.
          </span>
        </StepRow>
      </ol>

      <h4 className="mt-6 mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
        Negation Quick Reference
      </h4>
      <div className="divide-y divide-slate-100 overflow-hidden rounded-md border border-slate-200">
        {NEGATION_PAIRS.map((pair) => (
          <div key={pair.original} className="grid grid-cols-1 gap-2 px-4 py-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            <div className="text-sm">
              <div className="text-xs uppercase tracking-wide text-slate-400">Original</div>
              <div className="font-medium text-slate-800">{pair.original}</div>
            </div>
            <div className="hidden text-emerald-600 sm:block">→</div>
            <div className="text-sm">
              <div className="text-xs uppercase tracking-wide text-slate-400">Logical negation</div>
              <div className="font-medium text-slate-800">{pair.negation}</div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="mt-6 mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
        Four common Step-4 traps
      </h4>
      <div className="grid gap-3 sm:grid-cols-2">
        <TrapCard
          title="The Helpful Strengthener"
          body="Negation weakens the argument but doesn't destroy it. Necessary assumptions are essential, not merely helpful. If the argument limps along after the flip, the answer is wrong."
        />
        <TrapCard
          title="The Neutral Choice"
          body="Negating an irrelevant statement has no impact on the conclusion. If the argument doesn't care whether the statement is true or false, it is not a necessary assumption."
        />
        <TrapCard
          title="The Restatement"
          body="A choice that paraphrases an explicit premise can't be an assumption — assumptions are unstated. Negating a restatement contradicts a stated premise and gives a false collapse signal."
        />
        <TrapCard
          title="The Sufficient Trap"
          body="An answer that is too strong — one that would guarantee the conclusion — may or may not be necessary. Test it carefully. Sometimes a sufficient assumption is also necessary; sometimes it is too specific."
        />
      </div>
    </div>
  </div>
);

const NEGATION_PAIRS: { original: string; negation: string }[] = [
  { original: '"All X are Y"', negation: '"Not all X are Y" (Some X are not Y)' },
  { original: '"Some X are Y"', negation: '"None of X are Y"' },
  { original: '"X causes Y"', negation: '"X does not cause Y"' },
  { original: '"X is the only way"', negation: '"X is not the only way"' },
  { original: '"X can lead to Y"', negation: '"X cannot lead to Y"' }];

/* ------------------------------ WRONG ANSWERS ------------------------------ */

const WrongAnswersPanel: React.FC = () => (
  <div className="space-y-4">
    <p>
      Wrong answers on NA questions fail in predictable ways. Recognizing these traps lets you
      eliminate quickly and with confidence. Keep this section open alongside Step 4 so you can
      match traps to the Negation Test signals as you work.
    </p>
    <DataTable
      headers={['Trap Type', 'What It Does', 'How to Spot It']}
      rows={[
        [
          'Out of Scope',
          'Introduces irrelevant concepts or comparisons that do not affect the core argument.',
          'Ask: "Does this choice address the specific gap between premises and conclusion?" If the choice talks about something the argument never discussed, eliminate it.',
        ],
        [
          'Restatement',
          'Merely rehashes information already explicitly stated in the premises. Assumptions must be unstated.',
          'Ask: "Is this already said in the stimulus?" If yes, the argument does not need to assume it — it already states it.',
        ],
        [
          'Weakener',
          'Undermines the conclusion. An author never assumes a fact that actively harms their own case.',
          'Check the direction: does this choice hurt or help the argument? If it hurts, eliminate immediately.',
        ],
        [
          'Too Strong / Sufficient',
          'Goes beyond what the argument requires. The answer would prove the conclusion rather than merely supporting it.',
          'Apply the Negation Test carefully. Sometimes a strong answer IS necessary; sometimes it is not. Let the test decide.',
        ],
        [
          'Wrong Direction',
          'Addresses the right topic but connects the concepts in the wrong direction (the answer says B leads to A, but the argument needs A leads to B).',
          'Diagram the relationship if needed. Make sure the answer bridges the gap in the same direction the argument requires.',
        ],
      ]}
    />
  </div>
);

/* ------------------------------ WORKED EXAMPLE ----------------------------- */

const WorkedExamplePanel: React.FC = () => (
  <div className="space-y-6">
    <section>
      <h3 className="mb-2 text-xl font-semibold text-slate-900">Full Worked Example</h3>
      <p>Let's apply all four steps to a complete Necessary Assumption question from start to finish.</p>

      <blockquote className="my-4 rounded-md border-l-4 border-slate-300 bg-slate-50 px-4 py-3 italic text-slate-700">
        "Editorial: Our city should convert the abandoned rail corridor into a bicycle commuting
        path. A recent survey found that 60% of residents who live within two miles of the
        corridor would use it for daily commuting if it were available. Converting the corridor
        would therefore significantly reduce automobile traffic congestion in the city."
      </blockquote>

      <p>
        This example highlights the classic <strong>Key Ingredient gap</strong>. Interest in
        biking only matters to the conclusion if at least some of those riders are currently
        contributing to car traffic.
      </p>
    </section>

    <section className="border-t border-slate-100 pt-6">
      <h3 className="mb-3 text-xl font-semibold text-slate-900">Applying the 4-Step Method</h3>
      <ol className="space-y-4">
        <StepRow n={1} title="Break Down the Argument">
          <ul className="mt-1 space-y-1 text-sm">
            <Bullet>
              <strong>Conclusion:</strong> Converting the corridor would significantly reduce
              automobile traffic congestion.
            </Bullet>
            <Bullet>
              <strong>Premise:</strong> 60% of nearby residents would use the bicycle path for
              daily commuting.
            </Bullet>
            <Bullet>
              <strong>Core Logic:</strong> People would bike → traffic congestion drops.
            </Bullet>
          </ul>
        </StepRow>
        <StepRow n={2} title="Identify the Logical Gap">
          The premises tell us people would <em>bike</em>. The conclusion says{' '}
          <em>automobile traffic</em> would drop. But do these bikers currently drive cars? If
          the 60% who say they would bike currently walk, take the bus, or work from home, then
          adding a bike path removes zero cars from the road. The argument assumes at least some
          of these potential cyclists are currently automobile commuters — a classic Key
          Ingredient gap.
        </StepRow>
        <StepRow n={3} title="Pre-phrase">
          "For this argument to work, the author must believe that at least some of the people
          who would use the bike path currently commute by car. Otherwise, no cars are removed
          from the road and congestion doesn't change."
        </StepRow>
        <StepRow n={4} title="Evaluate with the Negation Test">
          Scan for the answer that matches the pre-phrase about current car commuters. Negate
          that bridge: "None of the potential cyclists currently commute by automobile." Zero
          cars removed → congestion doesn't change → the conclusion collapses. That confirms the
          assumption is necessary.
        </StepRow>
      </ol>
    </section>

    <Callout variant="accent" icon={CheckCircle2} title="Final check — NA answers are modest">
      The conclusion needs only one indispensable fact: some would-be cyclists must currently be
      car commuters. Stronger claims about how many commuters live nearby, how long the corridor
      is, or whether biking is environmentally better may be useful in the real world, but the
      argument does not collapse without them. Necessary Assumption is about the{' '}
      <em>smallest bridge whose negation destroys the conclusion</em>.
    </Callout>

    <section className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-5">
      <h3 className="mb-3 text-base font-semibold text-emerald-900">Key Takeaways</h3>
      <ul className="space-y-3 text-sm leading-6 text-slate-800">
        <Bullet>
          <strong>Flow:</strong> Break Down → Find the Gap → Pre-phrase → Negate and Verify.
        </Bullet>
        <Bullet>
          <strong>Between two close choices, negate both.</strong> The one whose negation
          destroys the argument is the necessary assumption. The one whose negation merely
          weakens is a strengthener, not a necessary assumption.
        </Bullet>
        <Bullet>
          <strong>NA answers are often modest.</strong> Don't look for the answer that "best
          supports" the conclusion — look for the answer whose <em>denial is fatal</em>. "At
          least some" is cautious, but its denial is catastrophic.
        </Bullet>
        <Bullet>
          <strong>Watch for the Key Ingredient gap</strong> — one of the most common NA
          patterns. When the evidence is about one thing and the conclusion is about another,
          the necessary assumption is always that the first thing is connected to the second.
        </Bullet>
      </ul>
    </section>
  </div>
);

/* -------------------------------- PRIMITIVES ------------------------------- */

type CalloutVariant = 'tip' | 'accent' | 'warn' | 'default';

const Callout: React.FC<{
  variant?: CalloutVariant;
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}> = ({ variant = 'default', icon: Icon, title, children }) => {
  const styles: Record<CalloutVariant, string> = {
    tip: 'border-emerald-200 bg-emerald-50/70 text-slate-800',
    accent: 'border-emerald-300 bg-emerald-50 text-slate-800',
    warn: 'border-amber-200 bg-amber-50 text-slate-800',
    default: 'border-slate-200 bg-slate-50 text-slate-800',
  };
  const iconStyles: Record<CalloutVariant, string> = {
    tip: 'text-emerald-700',
    accent: 'text-emerald-700',
    warn: 'text-amber-700',
    default: 'text-slate-600',
  };
  return (
    <div className={`my-4 rounded-md border px-4 py-3 text-sm leading-6 ${styles[variant]}`}>
      <div className="mb-1 flex items-center gap-2">
        {Icon && <Icon className={`h-4 w-4 ${iconStyles[variant]}`} />}
        <span className="font-semibold text-slate-900">{title}</span>
      </div>
      <div className="text-slate-700">{children}</div>
    </div>
  );
};

const StepRow: React.FC<{ n: number; title: string; children: React.ReactNode }> = ({
  n,
  title,
  children,
}) => (
  <li className="flex gap-3">
    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-emerald-600 text-xs font-semibold text-white">
      {n}
    </span>
    <div>
      <div className="font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-[15px] leading-6 text-slate-700">{children}</div>
    </div>
  </li>
);

const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex gap-2">
    <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-emerald-500" />
    <span>{children}</span>
  </li>
);

const CategoryCard: React.FC<{
  title: string;
  subtitle: string;
  children: React.ReactNode;
}> = ({ title, subtitle, children }) => (
  <div className="rounded-md border border-slate-200 bg-slate-50/60 p-4">
    <h4 className="text-base font-semibold text-slate-900">{title}</h4>
    <p className="mb-3 text-xs text-slate-500">{subtitle}</p>
    {children}
  </div>
);

const TrapCard: React.FC<{ title: string; body: string }> = ({ title, body }) => (
  <div className="rounded-md border border-rose-100 bg-rose-50/60 p-4">
    <div className="mb-1 flex items-center gap-2">
      <XCircle className="h-4 w-4 text-rose-500" />
      <h5 className="text-sm font-semibold text-slate-900">{title}</h5>
    </div>
    <p className="text-sm leading-6 text-slate-700">{body}</p>
  </div>
);

const DataTable: React.FC<{ headers: string[]; rows: string[][] }> = ({ headers, rows }) => (
  <div className="overflow-x-auto rounded-md border border-slate-200">
    <table className="w-full text-left text-sm">
      <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
        <tr>
          {headers.map((h) => (
            <th key={h} className="px-3 py-2 font-semibold">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 bg-white">
        {rows.map((row, i) => (
          <tr key={i} className="align-top">
            {row.map((cell, j) => (
              <td
                key={j}
                className={`px-3 py-3 leading-6 ${
                  j === 0 ? 'font-semibold text-slate-900' : 'text-slate-700'
                }`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default NegationLessonAccordion;
