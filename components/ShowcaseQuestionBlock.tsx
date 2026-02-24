import React, { useRef, useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import type { ChoiceLetter } from '../types';
import type { ChoiceWithExplanation } from '../utils/getBreakdownForQuestion';

function parseInlineStyles(text: string): string {
  if (!text) return '';
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic text-slate-800">$1</em>')
    .replace(/`([^`]+)`/g, '<code class="bg-slate-100 text-slate-700 font-mono px-1 py-0.5 rounded text-sm">$1</code>');
}

export interface ShowcaseQuestionBlockProps {
  title: string;
  stimulus: string;
  stem: string;
  choices: ChoiceWithExplanation[];
  analysisSteps?: string[];
}

const CORRECT_LETTER_DEFAULT: ChoiceLetter = 'D';

export function ShowcaseQuestionBlock({
  title,
  stimulus,
  stem,
  choices,
  analysisSteps = [],
}: ShowcaseQuestionBlockProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<ChoiceLetter | null>(null);
  const [hasChecked, setHasChecked] = useState(false);
  const [revealCorrect, setRevealCorrect] = useState(false);
  const analysisRef = useRef<HTMLDivElement>(null);

  const correctLetter = choices.find((c) => c.isCorrect)?.letter ?? CORRECT_LETTER_DEFAULT;
  const isSelectionCorrect = selectedChoice === correctLetter;

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
    <div className="my-8">
      <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
          <h3 className="text-sm font-bold text-slate-900">{title}</h3>
          <button
            type="button"
            onClick={() => setIsCollapsed((v) => !v)}
            aria-expanded={!isCollapsed}
            aria-controls="showcase-question-body"
            className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200"
          >
            {isCollapsed ? 'Expand' : 'Collapse'}
          </button>
        </div>

        {!isCollapsed && (
          <div id="showcase-question-body" className="px-6 py-6">
            <div>
              <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-3">Stimulus</p>
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="whitespace-pre-wrap text-[15px] leading-relaxed text-slate-800">{stimulus}</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-3">Question Stem</p>
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <p
                  className="whitespace-pre-wrap text-[15px] leading-relaxed text-slate-800"
                  dangerouslySetInnerHTML={{ __html: parseInlineStyles(stem) }}
                />
              </div>
            </div>

            <div className="mt-8">
              <div className="flex justify-between items-center mb-3">
                <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase">Answer Choices</p>
                <p className="text-[11px] text-slate-400">Select one</p>
              </div>

              <div className="space-y-3">
                {choices.map((choice) => {
                  const isSelected = selectedChoice === choice.letter;
                  const isWrongSelected = hasChecked && isSelected && !isSelectionCorrect;
                  const isRightSelected = hasChecked && isSelected && isSelectionCorrect;
                  const isRevealedCorrect = revealCorrect && choice.isCorrect;

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
                        isSelectionCorrect
                          ? 'border-emerald-200 bg-emerald-50/60 text-emerald-900'
                          : 'border-red-200 bg-red-50/50 text-red-900'
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
                            {isSelectionCorrect
                              ? 'Correct.'
                              : `Not quite. The right answer is (${correctLetter}).`}
                          </p>
                          {!isSelectionCorrect && !revealCorrect && (
                            <p className="mt-0.5 text-sm text-slate-700">
                              Use &quot;Show correct answer&quot; to reveal the right choice.
                            </p>
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
                      Correct answer: <span className="font-semibold text-slate-900">({correctLetter})</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div ref={analysisRef} className="relative mt-10">
        <div className="flex items-center gap-2 text-slate-900 mb-6">
          <h2 className="text-lg font-bold">Analysis</h2>
        </div>

        <div className="rounded-xl border border-indigo-100 bg-indigo-50/30 p-6 lg:p-8">
          {analysisSteps.length > 0 && (
            <>
              <h3 className="text-sm font-bold tracking-wider text-indigo-900 uppercase mb-6">Stimulus Analysis</h3>
              <ol className="space-y-6">
                {analysisSteps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold">
                      {i + 1}
                    </div>
                    <div
                      className="text-sm leading-relaxed text-slate-800"
                      dangerouslySetInnerHTML={{ __html: parseInlineStyles(step) }}
                    />
                  </li>
                ))}
              </ol>
              <div className="mt-10 h-px bg-indigo-100" />
            </>
          )}

          <h3 className="text-sm font-bold tracking-wider text-indigo-900 uppercase mb-4">
            {analysisSteps.length > 0 ? 'Answer Choice Analysis' : 'Analysis'}
          </h3>
          {analysisSteps.length > 0 && (
            <p className="text-sm leading-relaxed text-slate-700 mb-6">
              Each option is evaluated against the role identified above. Incorrect options are shaded slightly red;
              the correct option is shaded green.
            </p>
          )}

          <div className="mt-6 space-y-4">
            {choices.map((choice) => (
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
                    {choice.isCorrect ? (
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    ) : (
                      <XCircle className="w-3.5 h-3.5" />
                    )}
                    {choice.isCorrect ? 'Correct' : 'Incorrect'}
                  </span>
                </div>
                {choice.explanation != null && choice.explanation !== '' && (
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">{choice.explanation}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
