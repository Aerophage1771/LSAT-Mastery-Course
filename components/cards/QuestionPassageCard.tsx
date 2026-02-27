import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import { BookOpen, HelpCircle, CheckCircle2, XCircle, RotateCcw, ChevronDown, ChevronUp, Zap, Signal, AlertTriangle, PanelLeftClose, PanelLeft } from 'lucide-react';

const sanitize = (html: string) => DOMPurify.sanitize(html);

const parseInline = (text: string) => {
  if (!text) return '';
  let f = text;
  f = f.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>');
  f = f.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
  return sanitize(f);
};

interface QuestionPassageCardProps {
  id?: string;
  questionType?: string;
  passageTitle: string;
  passage: string;
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

export const QuestionPassageCard: React.FC<QuestionPassageCardProps> = ({ id, questionType, passageTitle, passage, question, options, difficulty, isIllustrative }) => {
  const [revealed, setRevealed] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [passageVisible, setPassageVisible] = useState(true);

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
  const paragraphs = passage.split('\n\n').filter(Boolean);

  return (
    <div className="my-8 rounded-2xl border border-slate-200 shadow-lg overflow-hidden bg-white">
      {/* Header */}
      <div className={`${isIllustrative ? 'bg-gradient-to-r from-teal-700 to-teal-800' : 'bg-gradient-to-r from-violet-600 to-purple-700'} px-6 py-4 flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-lg">
            <div className="flex items-center gap-1">
              <BookOpen size={16} className="text-white" />
              <span className="text-white/60 text-xs">+</span>
              <HelpCircle size={16} className="text-white" />
            </div>
          </div>
          <div>
            <div className="text-white font-bold text-base">
              {isIllustrative ? `Illustrative Example: ${questionType ?? 'Reading Comprehension'}` : (questionType ?? 'Reading Comprehension')}
            </div>
            <div className="text-violet-200 text-xs">{passageTitle}{id && !isIllustrative ? ` · ${id}` : ''}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {diff && (
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${diff.color}`}>
              <diff.icon size={12} />
              {diff.label}
            </span>
          )}
          <button onClick={() => setPassageVisible(!passageVisible)} className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label={passageVisible ? 'Hide passage' : 'Show passage'}>
            {passageVisible ? <PanelLeftClose size={16} /> : <PanelLeft size={16} />}
          </button>
          {revealed && (
            <button onClick={handleReset} className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label="Reset question">
              <RotateCcw size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Split layout */}
      <div className={`flex flex-col ${passageVisible ? 'lg:flex-row' : ''}`}>
        {/* Passage pane */}
        {passageVisible && (
          <div className="lg:w-1/2 border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50/30">
            <div className="px-5 py-3 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen size={14} className="text-slate-400" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Passage</span>
              </div>
              <button onClick={() => setPassageVisible(false)} className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1 lg:hidden">
                <ChevronUp size={12} /> Hide
              </button>
            </div>
            <div className="p-5 max-h-[400px] lg:max-h-[500px] overflow-y-auto scrollbar-hide">
              <div className="space-y-3">
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-slate-700 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: parseInline(p) }} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Question pane */}
        <div className={passageVisible ? 'lg:w-1/2' : 'w-full'}>
          {!passageVisible && (
            <button onClick={() => setPassageVisible(true)} className="w-full px-5 py-2.5 bg-slate-50 border-b border-slate-100 text-xs font-bold text-indigo-600 hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2">
              <ChevronDown size={12} /> Show Passage
            </button>
          )}

          {/* Question stem */}
          <div className="px-5 py-4 border-b border-slate-100">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Question</div>
            <div className="text-slate-900 font-medium text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: parseInline(question) }} />
          </div>

          {/* Options */}
          <div className="px-5 py-4 space-y-2">
            {options.map((item, i) => {
              const isCorrect = item.includes('(Correct)');
              const cleanText = item.replace(/\[\d+(\.\d+)?%\]/g, '').replace('(Correct)', '').trim();
              const isSelected = selectedIndex === i;

              let cls = 'flex items-start gap-2.5 p-3 rounded-xl border transition-all text-sm ';
              if (revealed) {
                if (isCorrect) cls += 'border-emerald-400 bg-emerald-50 ring-1 ring-emerald-400';
                else if (isSelected) cls += 'border-red-300 bg-red-50';
                else cls += 'border-slate-100 bg-slate-50/50 opacity-50';
              } else {
                cls += 'border-slate-200 bg-white hover:border-violet-300 hover:bg-violet-50/30 cursor-pointer active:scale-[0.995]';
              }

              return (
                <div key={i} className={cls} onClick={() => handleSelect(i)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSelect(i); }}>
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border ${revealed && isCorrect ? 'bg-emerald-500 border-emerald-500 text-white' :
                      revealed && isSelected && !isCorrect ? 'bg-red-500 border-red-500 text-white' :
                        'bg-slate-100 border-slate-300 text-slate-600'
                    }`}>
                    {revealed && isCorrect ? <CheckCircle2 size={12} /> : revealed && isSelected ? <XCircle size={12} /> : String.fromCharCode(65 + i)}
                  </div>
                  <span className={`flex-1 leading-relaxed ${revealed && isCorrect ? 'text-emerald-900 font-medium' : revealed && isSelected ? 'text-red-900' : 'text-slate-700'}`} dangerouslySetInnerHTML={{ __html: parseInline(cleanText) }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
