import React, { useState } from 'react';
import { ChevronUp, Eye, EyeOff, CheckCircle2, XCircle } from 'lucide-react';
import type { QuestionCardQuestion, ChoiceLetter } from '../types';
import type { QuestionCardVariant } from '../constants/macroFormatConfig';

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ');
}

const parseInlineStyles = (text: string) => {
  if (!text) return '';
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>')
    .replace(/\*(.*?)\*\*/g, '<em class="italic text-slate-800">$1</em>')
    .replace(/`([^`]+)`/g, '<code class="bg-slate-100 text-slate-700 font-mono px-1 py-0.5 rounded text-sm">$1</code>');
};

const VARIANT_STYLES: Record<
  QuestionCardVariant,
  {
    section: string;
    header: string;
    headerTitle: string;
    collapseBtn: string;
    sectionLabel: string;
    sectionLabelWithRule?: string;
    stimulusBox: string;
    stemBox: string;
    choicesSpace: string;
    choiceButton: string;
    choiceBubble: string;
    revealButton: string;
    revealButtonDisabled: string;
  }
> = {
  minimal: {
    section: 'w-full max-w-3xl rounded-2xl border border-slate-200 bg-white shadow-sm',
    header: 'flex items-center justify-between border-b border-slate-200 px-6 py-4',
    headerTitle: 'text-lg font-semibold text-slate-900',
    collapseBtn: 'rounded-lg p-2 text-slate-400 transition hover:bg-slate-50 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-300',
    sectionLabel: 'text-xs font-semibold tracking-wide text-slate-500',
    stimulusBox: 'mt-2 rounded-xl bg-slate-50 p-5',
    stemBox: 'mt-2',
    choicesSpace: 'mt-3 space-y-3',
    choiceButton: 'w-full rounded-xl border px-4 py-4 text-left transition focus:outline-none focus:ring-2 focus:ring-slate-300',
    choiceBubble: 'mt-0.5 flex h-6 w-6 items-center justify-center rounded-full border text-sm font-semibold',
    revealButton: 'inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold transition border-slate-200 bg-white text-slate-700 hover:bg-slate-50',
    revealButtonDisabled: 'cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400',
  },
  graphic: {
    section: 'w-full max-w-3xl overflow-hidden rounded-3xl border border-slate-400 bg-white shadow-xl',
    header: 'bg-white',
    headerTitle: 'text-lg font-semibold text-slate-900',
    collapseBtn: 'rounded-2xl border border-slate-400 bg-white p-2 text-slate-700 transition hover:bg-slate-200 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500',
    sectionLabel: 'text-xs font-semibold tracking-wide text-slate-800',
    sectionLabelWithRule: 'mt-6',
    stimulusBox: 'mt-3 rounded-2xl border border-slate-400 bg-slate-50 p-5',
    stemBox: 'mt-3 rounded-2xl border border-slate-400 bg-slate-50 p-5',
    choicesSpace: 'mt-4 space-y-3',
    choiceButton: 'group w-full rounded-2xl border px-5 py-4 text-left transition focus:outline-none focus:ring-2 focus:ring-slate-400',
    choiceBubble: 'shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold transition',
    revealButton: 'inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-400 px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-slate-400 border-slate-400 bg-white text-slate-900 hover:bg-slate-200/60',
    revealButtonDisabled: 'cursor-not-allowed border-slate-400 bg-slate-200 text-slate-600',
  },
  editorial: {
    section: 'w-full max-w-3xl overflow-hidden rounded-3xl border border-slate-300 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.10)]',
    header: 'border-b border-slate-200 bg-slate-50',
    headerTitle: 'mt-1 truncate text-lg font-semibold text-slate-900',
    collapseBtn: 'rounded-2xl border border-slate-300 bg-white p-2 text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400',
    sectionLabel: 'inline-flex items-center rounded-lg border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs font-semibold tracking-wide text-slate-800',
    stimulusBox: 'mt-3 rounded-2xl border border-slate-300 bg-white p-5',
    stemBox: 'mt-3 rounded-2xl border border-slate-300 bg-white p-5',
    choicesSpace: 'mt-4 space-y-3',
    choiceButton: 'w-full rounded-2xl border px-5 py-4 text-left transition focus:outline-none focus:ring-2 focus:ring-slate-400',
    choiceBubble: 'shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold',
    revealButton: 'inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-300 px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-slate-400 border-slate-300 bg-white text-slate-900 hover:bg-slate-100',
    revealButtonDisabled: 'cursor-not-allowed border-slate-300 bg-slate-100 text-slate-400',
  },
};

export interface QuestionCardProps {
  question: QuestionCardQuestion;
  variant: QuestionCardVariant;
  defaultExpanded?: boolean;
  locked?: boolean;
  onSelect?: (letter: ChoiceLetter | null) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  variant,
  defaultExpanded = true,
  locked = false,
  onSelect,
}) => {
  const [selected, setSelected] = useState<ChoiceLetter | null>(null);
  const [collapsed, setCollapsed] = useState(!defaultExpanded);
  const [revealed, setRevealed] = useState(false);

  const headerText = `Question · ${question.id}`;
  const styles = VARIANT_STYLES[variant];
  const hasCorrectAnswer = question.correctAnswer != null;

  function handlePick(letter: ChoiceLetter) {
    if (locked) return;
    const next = selected === letter ? null : letter;
    setSelected(next);
    if (next === null) setRevealed(false);
    onSelect?.(next);
  }

  function toggleReveal() {
    if (locked || selected === null || !hasCorrectAnswer) return;
    setRevealed((v) => !v);
  }

  const isEditorial = variant === 'editorial';

  return (
    <section className={styles.section} aria-label={`Question ${question.id}`}>
      <header className={styles.header}>
        <div className="flex items-center justify-between px-6 py-5">
          {isEditorial ? (
            <div className="min-w-0">
              <p className="text-xs font-semibold tracking-wide text-slate-600">
                LSAT Logical Reasoning
              </p>
              <h2 className={styles.headerTitle}>{headerText}</h2>
            </div>
          ) : (
            <h2 className={styles.headerTitle}>{headerText}</h2>
          )}
          <button
            type="button"
            aria-label={collapsed ? 'Expand question' : 'Collapse question'}
            aria-expanded={!collapsed}
            className={styles.collapseBtn}
            onClick={() => setCollapsed((v) => !v)}
          >
            <ChevronUp className={cn('h-5 w-5 transition', collapsed && 'rotate-180')} />
          </button>
        </div>
        {variant === 'graphic' && <div className="border-b border-slate-300" aria-hidden />}
      </header>

      {!collapsed && (
        <div className="px-6 py-6">
          <div>
            <p className={styles.sectionLabel}>Stimulus</p>
            <div className={styles.stimulusBox}>
              <p className="whitespace-pre-wrap text-[15px] leading-6 text-slate-800" dangerouslySetInnerHTML={{ __html: parseInlineStyles(question.stimulus) }} />
            </div>
          </div>

          <div className={variant === 'minimal' ? 'mt-6' : 'mt-8'}>
            <p className={styles.sectionLabel}>Question Stem</p>
            <div className={variant === 'minimal' ? 'mt-2' : styles.stemBox}>
              <p className="whitespace-pre-wrap text-[15px] leading-6 text-slate-800" dangerouslySetInnerHTML={{ __html: parseInlineStyles(question.stem) }} />
            </div>
          </div>

          <div className={variant === 'minimal' ? 'mt-6' : 'mt-10'}>
            <p className={styles.sectionLabel}>Answer Choices</p>
            <div className={styles.choicesSpace}>
              {question.choices.map((c) => {
                const choiceIsSelected = selected === c.letter;
                const choiceIsCorrect = question.correctAnswer === c.letter;
                const showFeedback = revealed && hasCorrectAnswer;

                const frameClass =
                  showFeedback
                    ? choiceIsCorrect
                      ? 'border-emerald-500 bg-emerald-50'
                      : choiceIsSelected
                        ? 'border-rose-500 bg-rose-50'
                        : 'border-slate-200 bg-white'
                    : choiceIsSelected
                      ? 'border-slate-500 bg-slate-50'
                      : 'border-slate-200 bg-white';
                const bubbleClass =
                  showFeedback
                    ? choiceIsCorrect
                      ? 'border-emerald-600 text-emerald-800'
                      : choiceIsSelected
                        ? 'border-rose-600 text-rose-800'
                        : 'border-slate-300 text-slate-600'
                    : choiceIsSelected
                      ? 'border-slate-600 text-slate-900'
                      : 'border-slate-300 text-slate-600';

                if (variant === 'graphic') {
                  const graphicFrame =
                    showFeedback
                      ? choiceIsCorrect
                        ? 'border-emerald-500 bg-emerald-50'
                        : choiceIsSelected
                          ? 'border-rose-500 bg-rose-50'
                          : 'border-slate-400 bg-white'
                      : choiceIsSelected
                        ? 'border-slate-600 bg-slate-50'
                        : 'border-slate-300 bg-white';
                  const graphicBubble =
                    showFeedback
                      ? choiceIsCorrect
                        ? 'border-emerald-600 bg-white text-emerald-900'
                        : choiceIsSelected
                          ? 'border-rose-600 bg-white text-rose-900'
                          : 'border-slate-400 bg-white text-slate-700'
                      : choiceIsSelected
                        ? 'border-slate-600 bg-white text-slate-900'
                        : 'border-slate-300 bg-white text-slate-700';
                  return (
                    <button
                      key={c.letter}
                      type="button"
                      disabled={locked}
                      onClick={() => handlePick(c.letter)}
                      className={cn(
                        styles.choiceButton,
                        locked ? 'cursor-not-allowed opacity-90' : 'hover:bg-slate-200/60',
                        graphicFrame,
                        !showFeedback && choiceIsSelected && 'ring-2 ring-slate-400'
                      )}
                      aria-pressed={choiceIsSelected}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn(styles.choiceBubble, graphicBubble)} aria-hidden>
                          {c.letter}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="whitespace-pre-wrap text-[15px] leading-6 text-slate-900" dangerouslySetInnerHTML={{ __html: parseInlineStyles(c.text) }} />
                          {showFeedback && choiceIsSelected && (
                            <div className="mt-3">
                              {choiceIsCorrect ? (
                                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500 bg-white px-3 py-1 text-xs font-semibold text-emerald-900">
                                  <CheckCircle2 className="h-4 w-4" /> Correct
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-2 rounded-full border border-rose-500 bg-white px-3 py-1 text-xs font-semibold text-rose-900">
                                  <XCircle className="h-4 w-4" /> Incorrect
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                }

                const borderClass = variant === 'minimal' ? frameClass : frameClass.replace('border-slate-200', 'border-slate-300');
                const ringClass = variant === 'editorial' && !showFeedback && choiceIsSelected ? 'ring-2 ring-slate-200' : '';
                const bubbleVariantClass =
                  variant === 'minimal'
                    ? bubbleClass
                    : showFeedback
                      ? choiceIsCorrect
                        ? 'border-emerald-600 bg-white text-emerald-900'
                        : choiceIsSelected
                          ? 'border-rose-600 bg-white text-rose-900'
                          : 'border-slate-300 bg-white text-slate-700'
                    : choiceIsSelected
                      ? 'border-slate-600 bg-white text-slate-900'
                      : 'border-slate-300 bg-white text-slate-700';
                return (
                  <button
                    key={c.letter}
                    type="button"
                    disabled={locked}
                    onClick={() => handlePick(c.letter)}
                    className={cn(
                      styles.choiceButton,
                      locked ? 'cursor-not-allowed opacity-90' : 'hover:bg-slate-50',
                      borderClass,
                      ringClass
                    )}
                    aria-pressed={choiceIsSelected}
                  >
                    <div className={cn('flex gap-4', variant === 'minimal' ? 'items-start gap-3' : 'items-center')}>
                      <div className={cn(styles.choiceBubble, bubbleVariantClass)} aria-hidden>
                        {c.letter}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="whitespace-pre-wrap text-[15px] leading-6 text-slate-800" dangerouslySetInnerHTML={{ __html: parseInlineStyles(c.text) }} />
                        {showFeedback && choiceIsSelected && (
                          <div className={variant === 'minimal' ? 'mt-2 text-xs font-semibold' : 'mt-3'}>
                            {choiceIsCorrect ? (
                              <span className="inline-flex items-center gap-1 text-emerald-800">
                                <CheckCircle2 className="h-4 w-4" /> Correct
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-rose-800">
                                <XCircle className="h-4 w-4" /> Incorrect
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {hasCorrectAnswer && (
            <div className="mt-5">
              <button
                type="button"
                onClick={toggleReveal}
                disabled={locked || selected === null}
                className={cn(
                  styles.revealButton,
                  (selected === null || locked) && styles.revealButtonDisabled
                )}
              >
                {revealed ? (
                  <>
                    <EyeOff className="h-4 w-4" /> Hide answer
                  </>
                ) : (
                  <>
                    <Eye className="h-4 w-4" /> Show answer
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
