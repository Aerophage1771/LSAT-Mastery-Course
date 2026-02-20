import React, { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const parseInlineStyles = (text: string) => {
  if (!text) return '';
  let formatted = text;
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>');
  formatted = formatted.replace(/\*(.*?)\*\*/g, '<em class="italic text-slate-800">$1</em>');
  formatted = formatted.replace(/`([^`]+)`/g, '<code class="bg-slate-100 text-pink-600 font-mono px-1 py-0.5 rounded text-sm border border-slate-200">$1</code>');
  return formatted;
};

export const OptionsBlock: React.FC<{ items: string[] }> = ({ items }) => {
  const [revealed, setRevealed] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    if (!revealed) {
      setSelectedIndex(index);
      setRevealed(true);
    }
  };

  return (
    <div className="my-6 space-y-3">
      {items.map((item, i) => {
        const isCorrect = item.includes('(Correct)');
        const statsMatch = item.match(/\[(\d+(\.\d+)?%)\]/);
        const stats = statsMatch ? statsMatch[1] : null;
        const cleanText = item
          .replace(/\[\d+(\.\d+)?%\]/g, '')
          .replace('(Correct)', '')
          .trim();
        const isSelected = selectedIndex === i;

        let containerClasses = 'flex-1 p-4 border rounded-lg shadow-sm transition-all relative overflow-hidden ';
        let textClasses = 'block ';
        if (revealed) {
          if (isCorrect) {
            containerClasses += 'border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500';
            textClasses += 'text-emerald-900 font-medium';
          } else if (isSelected) {
            containerClasses += 'border-red-300 bg-red-50';
            textClasses += 'text-red-900';
          } else {
            containerClasses += 'border-slate-200 bg-slate-50 opacity-60';
            textClasses += 'text-slate-500';
          }
        } else {
          containerClasses += 'bg-white border-slate-200 hover:border-indigo-400 hover:shadow-md cursor-pointer active:scale-[0.99]';
          textClasses += 'text-slate-700';
        }

        return (
          <div key={i} className="flex group" onClick={() => handleSelect(i)}>
            <div className={containerClasses}>
              <div className="flex justify-between items-start gap-4">
                <span className={textClasses} dangerouslySetInnerHTML={{ __html: parseInlineStyles(cleanText) }} />
                {revealed && (
                  <div className="flex flex-col items-end flex-shrink-0 min-w-[3rem] animate-in fade-in zoom-in duration-200">
                    {isCorrect && <CheckCircle2 size={20} className="text-emerald-600 mb-1" />}
                    {isSelected && !isCorrect && <XCircle size={20} className="text-red-500 mb-1" />}
                    {stats && <span className="text-xs font-bold text-slate-500 bg-white/50 px-1.5 py-0.5 rounded">{stats}</span>}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
