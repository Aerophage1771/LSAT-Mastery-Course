'use client';

import React, { useRef, useState } from 'react';
import { BookOpen, Target, CheckCircle2, XCircle, ListChecks } from 'lucide-react';

const CHOICES = [
  {
    letter: 'A',
    text: "It is used to support the argument's conclusion.",
    isCorrect: false,
    explanation:
      'This describes the target as support for the conclusion, which would make it a premise. Here, the example supports the target, not the other way around.',
  },
  {
    letter: 'B',
    text: 'It is an illustration of the claim that we are the measure of all things.',
    isCorrect: false,
    explanation:
      'The saying is the illustration. The target statement is the general claim being illustrated by the example.',
  },
  {
    letter: 'C',
    text: "It is compatible with either accepting or rejecting the argument's conclusion.",
    isCorrect: false,
    explanation:
      'This treats the target as neutral with respect to the conclusion. The target is the conclusion being supported.',
  },
  {
    letter: 'D',
    text: 'It is a view that other statements in the argument are intended to support.',
    isCorrect: true,
    explanation:
      'This is an abstract description of a main conclusion: a claim that the other statements are designed to support.',
  },
  {
    letter: 'E',
    text: 'It sets out a difficulty the argument is intended to solve.',
    isCorrect: false,
    explanation:
      'The argument does not present the target as a problem. It presents the target as a claim that is illustrated by the example that follows.',
  },
];

const CORRECT_LETTER = CHOICES.find((c) => c.isCorrect)?.letter ?? 'D';

export default function FormatShowcaseLesson() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [hasChecked, setHasChecked] = useState(false);
  const [revealCorrect, setRevealCorrect] = useState(false);

  const analysisRef = useRef<HTMLDivElement>(null);

  const isSelectionCorrect = selectedChoice === CORRECT_LETTER;

  const scrollToAnalysis = () => {
    analysisRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const onCheckAnswer = () => {
    if (!selectedChoice) return;
    setHasChecked(true);
    setRevealCorrect(false);
    scrollToAnalysis();
  };

  const onShowCorrectAnswer = () => {
    setHasChecked(true);
    setRevealCorrect(true);
    scrollToAnalysis();
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50 font-sans">
      <div className="mx-auto max-w-4xl p-5 lg:p-10">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-2 text-slate-500">
            <BookOpen className="w-4 h-4" />
            <p className="text-xs font-semibold tracking-wide uppercase">Lesson</p>
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">Premises vs. Conclusions</h1>
          <div className="mt-6 h-px w-full bg-slate-200" />
        </header>

        <main className="rounded-xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm">
          <section className="max-w-none">
            <div className="flex items-center gap-2 text-slate-900 mb-4">
              <Target className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg font-bold">Concept Focus: Core Components</h2>
            </div>

            <p className="text-base leading-relaxed text-slate-700">
              Every argument is built from two essential parts: a{' '}
              <strong className="font-semibold text-indigo-900 bg-indigo-50 px-1 rounded">conclusion</strong> (the claim the author is
              attempting to establish) and{' '}
              <strong className="font-semibold text-indigo-900 bg-indigo-50 px-1 rounded">premises</strong> (the evidence offered in
              support of that claim). Distinguishing between the point and the proof is foundational to Logical Reasoning.
              Approximately <strong className="font-semibold text-slate-900">two-thirds of Argument Part questions</strong> ask you to
              identify a statement functioning as a premise or a conclusion.
            </p>

            <dl className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <dt className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-500" />
                  Conclusion (The Point)
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-600">
                  The author&apos;s central claim. It is supported by other statements, but it does not primarily serve to support
                  anything else.
                </dd>
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <dt className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  Premise (The Proof)
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-600">
                  A reason, fact, or observation offered to justify the conclusion. It provides support to the conclusion.
                </dd>
              </div>
            </dl>
          </section>

          <div className="my-10 h-px bg-slate-100" />

          <section>
            <div className="flex items-center gap-2 text-slate-900 mb-4">
              <ListChecks className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg font-bold">Worked Example</h2>
            </div>

            <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
                <h3 className="text-sm font-bold text-slate-900">Question · PT-107-S-4-Q-15</h3>
                <button
                  type="button"
                  onClick={() => setIsCollapsed((v) => !v)}
                  aria-expanded={!isCollapsed}
                  aria-controls="worked-example"
                  className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200"
                >
                  {isCollapsed ? 'Expand' : 'Collapse'}
                </button>
              </div>

              {!isCollapsed && (
                <div id="worked-example" className="px-6 py-6">
                  <div>
                    <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-3">Stimulus</p>
                    <div className="rounded-xl border border-slate-200 bg-white p-5">
                      <p className="whitespace-pre-wrap text-[15px] leading-relaxed text-slate-800">
                        Ambiguity inspires interpretation. The saying &quot;We are the measure of all things,&quot; for instance, has been
                        interpreted by some people to imply that humans are centrally important in the universe, while others have
                        interpreted it to mean simply that, since all knowledge is human knowledge, humans must rely on themselves
                        to find the truth.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-3">Question Stem</p>
                    <div className="rounded-xl border border-slate-200 bg-white p-5">
                      <p className="whitespace-pre-wrap text-[15px] leading-relaxed text-slate-800">
                        <strong className="font-semibold text-slate-900">Question:</strong> The claim that ambiguity inspires
                        interpretation figures in the argument in which one of the following ways?
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase">Answer Choices</p>
                      <p className="text-[11px] text-slate-400">Select one</p>
                    </div>

                    <div className="space-y-3">
                      {CHOICES.map((choice) => {
                        const isSelected = selectedChoice === choice.letter;
                        const showUserResult = hasChecked;
                        const showCorrect = revealCorrect;

                        const isCorrectChoice = choice.isCorrect;
                        const isWrongSelected = showUserResult && isSelected && !isSelectionCorrect;
                        const isRightSelected = showUserResult && isSelected && isSelectionCorrect;
                        const isRevealedCorrect = showCorrect && isCorrectChoice;

                        const borderClass = isRevealedCorrect || isRightSelected
                          ? 'border-emerald-300'
                          : isWrongSelected
                            ? 'border-red-300'
                            : isSelected
                              ? 'border-indigo-500'
                              : 'border-slate-200';

                        const bgClass = isRevealedCorrect || isRightSelected
                          ? 'bg-emerald-50/60'
                          : isWrongSelected
                            ? 'bg-red-50/40'
                            : isSelected
                              ? 'bg-indigo-50/10'
                              : 'bg-white';

                        const ringClass = isRevealedCorrect || isRightSelected
                          ? 'ring-1 ring-emerald-200'
                          : isWrongSelected
                            ? 'ring-1 ring-red-200'
                            : isSelected
                              ? 'ring-1 ring-indigo-500'
                              : '';

                        const pillClass = isRevealedCorrect || isRightSelected
                          ? 'border-emerald-300 bg-emerald-600 text-white'
                          : isWrongSelected
                            ? 'border-red-300 bg-red-600 text-white'
                            : isSelected
                              ? 'border-indigo-500 bg-indigo-500 text-white'
                              : 'border-slate-200 bg-white text-slate-600';

                        const canSelect = !hasChecked && !revealCorrect;

                        return (
                          <button
                            key={choice.letter}
                            type="button"
                            onClick={() => {
                              if (!canSelect) return;
                              setSelectedChoice(choice.letter);
                            }}
                            disabled={!canSelect}
                            className={`w-full rounded-xl border px-5 py-4 text-left transition focus:outline-none ${borderClass} ${bgClass} ${ringClass} ${
                              canSelect ? 'hover:border-slate-300 hover:bg-slate-50' : 'cursor-default'
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <div
                                className={`shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold transition-colors ${pillClass}`}
                              >
                                {choice.letter}
                              </div>

                              <div className="min-w-0 flex-1">
                                <p className="whitespace-pre-wrap text-[15px] leading-6 text-slate-800">{choice.text}</p>

                                {revealCorrect && choice.isCorrect && (
                                  <p className="mt-1 text-xs font-semibold text-emerald-800">Correct answer</p>
                                )}

                                {hasChecked && isSelected && !isSelectionCorrect && (
                                  <p className="mt-1 text-xs font-semibold text-red-800">Your selection</p>
                                )}

                                {hasChecked && isSelected && isSelectionCorrect && (
                                  <p className="mt-1 text-xs font-semibold text-emerald-800">Your selection</p>
                                )}
                              </div>
                            </div>
                          </button>
                        );
                      })}

                      <div className="pt-2 space-y-3">
                        {!hasChecked && (
                          <button
                            type="button"
                            onClick={onCheckAnswer}
                            disabled={!selectedChoice}
                            className={`w-full rounded-xl py-3 text-sm font-semibold transition ${
                              selectedChoice
                                ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm'
                                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                            }`}
                          >
                            Check answer
                          </button>
                        )}

                        {hasChecked && (
                          <div
                            className={`rounded-xl border px-4 py-3 text-sm ${
                              isSelectionCorrect ? 'border-emerald-200 bg-emerald-50/60 text-emerald-900' : 'border-red-200 bg-red-50/50 text-red-900'
                            }`}
                          >
                            <div className="flex items-start gap-2">
                              {isSelectionCorrect ? (
                                <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                              ) : (
                                <XCircle className="w-4 h-4 mt-0.5 shrink-0" />
                              )}
                              <div>
                                <p className="font-semibold">
                                  {isSelectionCorrect ? 'Correct.' : 'Not quite.'} Your selection is ({selectedChoice}).
                                </p>
                                {!isSelectionCorrect && !revealCorrect && (
                                  <p className="mt-0.5 text-sm text-slate-700">Use &quot;Show correct answer&quot; to reveal the right choice.</p>
                                )}
                              </div>
                            </div>
                          </div>
                        )}

                        {hasChecked && !revealCorrect && (
                          <button
                            type="button"
                            onClick={onShowCorrectAnswer}
                            className="w-full rounded-xl border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200"
                          >
                            Show correct answer
                          </button>
                        )}

                        {revealCorrect && (
                          <div className="text-xs text-slate-500">
                            Correct answer: <span className="font-semibold text-slate-900">({CORRECT_LETTER})</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          <div className="my-10 h-px bg-slate-100" />

          <div ref={analysisRef} className="relative">
            <section>
              <div className="flex items-center gap-2 text-slate-900 mb-6">
                <Target className="w-5 h-5 text-indigo-600" />
                <h2 className="text-lg font-bold">Analysis</h2>
              </div>

              <div className="rounded-xl border border-indigo-100 bg-indigo-50/30 p-6 lg:p-8">
                <h3 className="text-sm font-bold tracking-wider text-indigo-900 uppercase mb-6">Stimulus Analysis</h3>

                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold">
                      1
                    </div>
                    <div>
                      <p className="text-sm leading-relaxed text-slate-800">
                        <strong className="font-semibold text-slate-900">Identify the target statement.</strong> The target is the first
                        sentence:{' '}
                        <span className="bg-yellow-100 px-1 rounded text-slate-900">&quot;Ambiguity inspires interpretation.&quot;</span>
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold">
                      2
                    </div>
                    <div>
                      <p className="text-sm leading-relaxed text-slate-800">
                        <strong className="font-semibold text-slate-900">Determine the direction of support.</strong> The phrase{' '}
                        <strong className="font-semibold text-indigo-700">&quot;for instance&quot;</strong> introduces an example, which functions
                        as support for the broader claim stated first.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold">
                      3
                    </div>
                    <div>
                      <p className="text-sm leading-relaxed text-slate-800">
                        <strong className="font-semibold text-slate-900">Assign the role.</strong> The target statement is the claim that
                        the subsequent example is intended to support, so it functions as the{' '}
                        <strong className="font-semibold text-emerald-700">main conclusion</strong>.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold">
                      4
                    </div>
                    <div>
                      <p className="text-sm leading-relaxed text-slate-800">
                        <strong className="font-semibold text-slate-900">Prephrase the task.</strong> We need the answer choice that
                        describes a statement supported by the other statements in the argument.
                      </p>
                    </div>
                  </li>
                </ol>

                <div className="mt-10 h-px bg-indigo-100" />

                <h3 className="mt-8 text-sm font-bold tracking-wider text-indigo-900 uppercase mb-4">Answer Choice Analysis</h3>
                <p className="text-sm leading-relaxed text-slate-700">
                  Each option is evaluated against the role identified above. Incorrect options are shaded slightly red; the
                  correct option is shaded green.
                </p>

                <div className="mt-6 space-y-4">
                  {CHOICES.map((choice) => (
                    <div
                      key={`analysis-${choice.letter}`}
                      className={`rounded-lg border p-5 ${
                        choice.isCorrect ? 'border-emerald-200 bg-emerald-50' : 'border-red-200 bg-red-50/30'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p
                            className={`text-xs font-bold tracking-wide uppercase ${
                              choice.isCorrect ? 'text-emerald-700' : 'text-slate-500'
                            }`}
                          >
                            Option {choice.letter}
                          </p>
                          <p className="mt-1 text-sm font-semibold text-slate-900">{choice.text}</p>
                        </div>

                        <span
                          className={`shrink-0 flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${
                            choice.isCorrect
                              ? 'bg-white text-emerald-700 border border-emerald-200'
                              : 'bg-white text-red-700 border border-red-200'
                          }`}
                        >
                          {choice.isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          {choice.isCorrect ? 'Correct' : 'Incorrect'}
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-slate-700">{choice.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div className="my-10 h-px bg-slate-100" />

          <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
            <h2 className="text-xl font-bold text-slate-900">Key Takeaways</h2>

            <ul className="mt-5 list-disc pl-6 space-y-4 text-[17px] leading-7 text-slate-700 marker:text-slate-400">
              <li>
                First ask: <em>What is the author trying to establish?</em> That is the conclusion.
              </li>
              <li>
                Then ask: <em>What is offered in support of that claim?</em> Those are the premises.
              </li>
              <li>
                Indicator phrases like <strong className="font-semibold text-slate-900">for instance</strong> and{' '}
                <strong className="font-semibold text-slate-900">for example</strong> often introduce premises.
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
