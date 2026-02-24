import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp, XCircle } from 'lucide-react';
import { extractPtIdFromTitle } from './ContentBox';
import type { ChoiceLetter, ContentBlock } from '../types';

// Support multiline option text (common in RC analogy/title pair questions).
const CHOICE_PREFIX_REGEX = /^\(([A-E])\)\s*([\s\S]*)$/;
const CORRECT_SUFFIX = /\s*\(Correct\)\s*$/i;
const PERCENT_SUFFIX = /\s*\[\d+(?:\.\d+)?%\]\s*/g;

interface ParsedChoice {
  letter: ChoiceLetter;
  text: string;
  isCorrect: boolean;
}

interface RCAnalysisItem {
  title: string;
  text: string;
  badge?: string;
  badgeColor?: 'green' | 'red' | 'indigo' | 'slate' | 'blue';
}

export interface IntegratedRCQuestionCardProps {
  passageTitle: string;
  passageText: string;
  questionTitle: string;
  stem: string;
  options: string[];
  analysisLeadBlocks: ContentBlock[];
  analysisItems: RCAnalysisItem[];
}

function parseInlineStyles(text: string): string {
  if (!text) return '';
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic text-slate-800">$1</em>')
    .replace(/`([^`]+)`/g, '<code class="bg-slate-100 text-slate-700 font-mono px-1 py-0.5 rounded text-sm">$1</code>');
}

function parseChoices(options: string[]): ParsedChoice[] {
  const out: ParsedChoice[] = [];
  for (const raw of options) {
    const match = String(raw).match(CHOICE_PREFIX_REGEX);
    if (!match) continue;
    const letter = match[1] as ChoiceLetter;
    const fullText = match[2].trim();
    out.push({
      letter,
      text: fullText.replace(PERCENT_SUFFIX, '').replace(CORRECT_SUFFIX, '').trim(),
      isCorrect: CORRECT_SUFFIX.test(fullText) || /\(Correct\)\s*$/i.test(String(raw)),
    });
  }
  return out;
}

export function IntegratedRCQuestionCard({
  passageTitle,
  passageText,
  questionTitle,
  stem,
  options,
  analysisLeadBlocks,
  analysisItems,
}: IntegratedRCQuestionCardProps) {
  const [passageOpen, setPassageOpen] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<ChoiceLetter | null>(null);
  const [checked, setChecked] = useState(false);
  const [revealCorrect, setRevealCorrect] = useState(false);

  const choices = parseChoices(options);
  const correct = choices.find((c) => c.isCorrect)?.letter ?? null;
  const isSelectionCorrect = selectedChoice != null && correct != null && selectedChoice === correct;

  const renderLeadBlock = (block: ContentBlock, idx: number) => {
    if (block.type === 'h4') {
      return (
        <h4
          key={idx}
          className="text-[11px] font-bold tracking-widest uppercase text-indigo-900/80"
          dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }}
        />
      );
    }
    if (block.type === 'paragraph') {
      return (
        <p
          key={idx}
          className="text-sm leading-relaxed text-slate-700"
          dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }}
        />
      );
    }
    if (block.type === 'blockquote') {
      return (
        <p
          key={idx}
          className="text-sm italic leading-relaxed text-slate-700"
          dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }}
        />
      );
    }
    if (block.type === 'list') {
      const ListTag = block.ordered ? 'ol' : 'ul';
      return (
        <ListTag key={idx} className={`${block.ordered ? 'list-decimal' : 'list-disc'} ml-6 space-y-2 text-sm text-slate-700`}>
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: parseInlineStyles(item) }} />
          ))}
        </ListTag>
      );
    }
    if (block.type === 'callout') {
      const isSummary = block.variant === 'summary';
      const isTip = block.variant === 'tip';
      const classes = isSummary
        ? 'border-indigo-100 bg-indigo-50'
        : isTip
          ? 'border-amber-100 bg-amber-50'
          : 'border-slate-200 bg-slate-50';
      return (
        <div key={idx} className={`rounded-lg border p-4 ${classes}`}>
          {block.title && <h4 className="text-sm font-semibold text-slate-900 mb-1">{block.title}</h4>}
          <p className="text-sm leading-relaxed text-slate-700" dangerouslySetInnerHTML={{ __html: parseInlineStyles(block.text) }} />
        </div>
      );
    }
    if (block.type === 'hr') {
      return <hr key={idx} className="border-slate-200" />;
    }
    return null;
  };

  const passageId = extractPtIdFromTitle(passageTitle);
  const passageLabel = passageId ? `Passage · ${passageId}` : passageTitle;

  return (
    <div className="my-8 w-full max-w-4xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-4">
        <h3 className="text-sm font-bold text-slate-900">{questionTitle}</h3>
      </div>

      <div className="px-6 py-6 space-y-6">
        <section className="rounded-lg border border-slate-200">
          <button
            type="button"
            onClick={() => setPassageOpen((v) => !v)}
            className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 text-left"
            aria-expanded={passageOpen}
          >
            <span className="text-xs font-bold tracking-wide uppercase text-slate-600">{passageLabel}</span>
            {passageOpen ? <ChevronUp size={18} className="text-slate-500" /> : <ChevronDown size={18} className="text-slate-500" />}
          </button>
          {passageOpen && (
            <div className="border-t border-slate-200 bg-white px-5 py-4">
              <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-800">{passageText}</p>
            </div>
          )}
        </section>

        <section>
          <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-2">Question Stem</p>
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-sm leading-relaxed text-slate-800" dangerouslySetInnerHTML={{ __html: parseInlineStyles(stem) }} />
          </div>
        </section>

        <section>
          <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-3">Answer Choices</p>
          <div className="space-y-2.5">
            {choices.map((choice) => {
              const isSelected = selectedChoice === choice.letter;
              const isCorrectChoice = checked && choice.isCorrect;
              const isWrongChoice = checked && isSelected && !choice.isCorrect;
              const showCorrectChoice = revealCorrect && choice.isCorrect;
              return (
                <button
                  key={choice.letter}
                  type="button"
                  onClick={() => {
                    if (checked) return;
                    setSelectedChoice(choice.letter);
                  }}
                  className={`w-full rounded-lg border px-4 py-3 text-left transition ${
                    showCorrectChoice || isCorrectChoice
                      ? 'border-emerald-300 bg-emerald-50'
                      : isWrongChoice
                        ? 'border-red-300 bg-red-50'
                        : isSelected
                          ? 'border-indigo-500 bg-indigo-50/30'
                          : 'border-slate-200 bg-white hover:bg-slate-50'
                  } ${checked ? 'cursor-default' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-300 text-xs font-semibold text-slate-700">
                      {choice.letter}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm leading-relaxed text-slate-800">{choice.text}</p>
                      {showCorrectChoice && <p className="mt-1 text-xs font-semibold text-emerald-700">Correct answer</p>}
                    </div>
                  </div>
                </button>
              );
            })}

            <div className="pt-2 space-y-2">
              {!checked && (
                <button
                  type="button"
                  onClick={() => selectedChoice != null && setChecked(true)}
                  disabled={selectedChoice == null}
                  className={`w-full rounded-lg py-2.5 text-sm font-semibold ${
                    selectedChoice == null
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  Check answer
                </button>
              )}
              {checked && (
                <div className={`rounded-lg border px-3 py-2.5 text-sm ${isSelectionCorrect ? 'border-emerald-200 bg-emerald-50 text-emerald-900' : 'border-red-200 bg-red-50 text-red-900'}`}>
                  {isSelectionCorrect
                    ? 'Correct.'
                    : `Not quite. The right answer is ${correct ? `(${correct})` : '(?)'}.`}
                </div>
              )}
              {checked && !revealCorrect && (
                <button
                  type="button"
                  onClick={() => setRevealCorrect(true)}
                  className="w-full rounded-lg border border-slate-200 bg-white py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  Show correct answer
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-indigo-100 bg-indigo-50/30 p-5">
          <h4 className="text-xs font-bold tracking-widest uppercase text-indigo-900 mb-4">Analysis</h4>
          <div className="space-y-4">
            {analysisLeadBlocks.map((block, idx) => renderLeadBlock(block, idx))}
          </div>
          {analysisLeadBlocks.length > 0 && <div className="my-5 h-px bg-indigo-100" />}
          <div className="space-y-3">
            {analysisItems.map((item, idx) => {
              const isCorrect = item.badgeColor === 'green';
              return (
                <div
                  key={idx}
                  className={`rounded-lg border p-4 ${
                    isCorrect ? 'border-emerald-200 bg-emerald-50' : 'border-red-200 bg-red-50/30'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold text-slate-900" dangerouslySetInnerHTML={{ __html: parseInlineStyles(item.title) }} />
                    <span
                      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-semibold ${
                        isCorrect ? 'border-emerald-200 bg-white text-emerald-700' : 'border-red-200 bg-white text-red-700'
                      }`}
                    >
                      {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                      {item.badge ?? (isCorrect ? 'Correct' : 'Incorrect')}
                    </span>
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-700 space-y-2">
                    {item.text.split('\n').map((line, i) => (
                      <p key={i} dangerouslySetInnerHTML={{ __html: parseInlineStyles(line) }} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
