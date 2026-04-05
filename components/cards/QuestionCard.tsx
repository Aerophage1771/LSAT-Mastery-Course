import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Zap, Signal, AlertTriangle } from 'lucide-react';

const sanitize = (html: string) => DOMPurify.sanitize(html);

const parseInline = (text: string) => {
  if (!text) return '';
  let f = text;
  f = f.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>');
  f = f.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
  return sanitize(f);
};

interface QuestionCardProps {
  id?: string;
  questionType?: string;
  stimulus: string;
  question: string;
  options: string[];
  difficulty?: 'easy' | 'medium' | 'hard';
  isIllustrative?: boolean;
}

const difficultyConfig = {
  easy: { label: 'Foundation', color: 'text-emerald-600 bg-emerald-50 border-emerald-200', icon: Zap },
  medium: { label: 'Intermediate', color: 'text-amber-600 bg-amber-50 border-amber-200', icon: Signal },
  hard: { label: 'Advanced', color: 'text-rose-600 bg-rose-50 border-rose-200', icon: AlertTriangle },
};

export const QuestionCard: React.FC<QuestionCardProps> = ({ id, questionType, stimulus, question, options, difficulty, isIllustrative }) => {
  const [revealed, setRevealed] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    if (!revealed) {
      setSelectedIndex(index);
      setRevealed(true);
    }
  };

  const handleReset = () => {
    setRevealed(false);
    setSelectedIndex(null);
  };

  const diff = difficulty ? difficultyConfig[difficulty] : null;

  return (
    <div className="my-8 rounded-2xl border border-slate-200 shadow-lg overflow-hidden bg-white">
      {/* Header */}
      <div className={`${isIllustrative ? 'bg-gradient-to-r from-slate-700 to-slate-800' : 'bg-gradient-to-r from-indigo-600 to-indigo-700'} px-6 py-4 flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-lg">
            <HelpCircle size={20} className="text-white" />
          </div>
          <div>
            <div className="text-white font-bold text-base">
              {isIllustrative ? `Illustrative Example: ${questionType ?? 'Concept'}` : (questionType ?? 'Practice Question')}
            </div>
            {id && !isIllustrative && <div className="text-indigo-200 text-xs font-mono">{id}</div>}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {diff && (
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${diff.color}`}>
              <diff.icon size={12} />
              {diff.label}
            </span>
          )}
          {revealed && (
            <button onClick={handleReset} className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label="Reset question">
              <RotateCcw size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Stimulus */}
      <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Stimulus</div>
        <div className="text-slate-700 leading-relaxed text-[15px]" dangerouslySetInnerHTML={{ __html: parseInline(stimulus) }} />
      </div>

      {/* Question */}
      <div className="px-6 py-4 border-b border-slate-100">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Question</div>
        <div className="text-slate-900 font-medium text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: parseInline(question) }} />
      </div>

      {/* Options */}
      <div className="px-6 py-5 space-y-2.5">
        {options.map((item, i) => {
          const isCorrect = item.includes('(Correct)');
          const cleanText = item.replace(/\[\d+(\.\d+)?%\]/g, '').replace('(Correct)', '').trim();
          const isSelected = selectedIndex === i;

          let cls = 'flex items-start gap-3 p-3.5 rounded-xl border transition-all ';
          if (revealed) {
            if (isCorrect) cls += 'border-emerald-400 bg-emerald-50 ring-1 ring-emerald-400';
            else if (isSelected) cls += 'border-red-300 bg-red-50';
            else cls += 'border-slate-100 bg-slate-50/50 opacity-50';
          } else {
            cls += 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer active:scale-[0.995]';
          }

          return (
            <div key={i} className={cls} onClick={() => handleSelect(i)} role="button" tabIndex={0} aria-label={`Option ${String.fromCharCode(65 + i)}`} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSelect(i); }}>
              <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border ${revealed && isCorrect ? 'bg-emerald-500 border-emerald-500 text-white' :
                  revealed && isSelected && !isCorrect ? 'bg-red-500 border-red-500 text-white' :
                    'bg-slate-100 border-slate-300 text-slate-600'
                }`}>
                {revealed && isCorrect ? <CheckCircle2 size={14} /> : revealed && isSelected ? <XCircle size={14} /> : String.fromCharCode(65 + i)}
              </div>
              <span className={`flex-1 text-sm leading-relaxed ${revealed && isCorrect ? 'text-emerald-900 font-medium' : revealed && isSelected ? 'text-red-900' : 'text-slate-700'}`} dangerouslySetInnerHTML={{ __html: parseInline(cleanText) }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
