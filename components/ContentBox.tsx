import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { extractPtIdFromTitle } from '../utils/ptId';

export { extractPtIdFromTitle };

export interface ContentBoxProps {
  variant: 'question' | 'passage';
  id?: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export const ContentBox: React.FC<ContentBoxProps> = ({
  variant,
  id,
  children,
  defaultExpanded = true,
}) => {
  const [isOpen, setIsOpen] = useState(defaultExpanded);
  const label = variant === 'question' ? 'Question' : 'Passage';
  const headerText = id ? `${label} · ${id}` : label;

  return (
    <div className="my-6 rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left font-bold text-slate-800"
        aria-expanded={isOpen}
      >
        <span>{headerText}</span>
        {isOpen ? (
          <ChevronUp size={20} className="text-slate-500 flex-shrink-0" />
        ) : (
          <ChevronDown size={20} className="text-slate-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="p-6 bg-white border-t border-slate-200">
          <div className="prose prose-slate prose-lg max-w-none">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
