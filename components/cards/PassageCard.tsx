import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import { BookOpen, ChevronDown, ChevronUp, FileText, Hash } from 'lucide-react';

const sanitize = (html: string) => DOMPurify.sanitize(html);

const parseInline = (text: string) => {
  if (!text) return '';
  let f = text;
  f = f.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>');
  f = f.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
  return sanitize(f);
};

interface PassageCardProps {
  id?: string;
  title: string;
  genre?: string;
  passage: string;
  paragraphCount?: number;
  wordCount?: number;
}

const genreColors: Record<string, string> = {
  'Law': 'text-blue-700 bg-blue-50 border-blue-200',
  'Science': 'text-emerald-700 bg-emerald-50 border-emerald-200',
  'Humanities': 'text-purple-700 bg-purple-50 border-purple-200',
  'Social Science': 'text-amber-700 bg-amber-50 border-amber-200',
  'Literary Criticism': 'text-rose-700 bg-rose-50 border-rose-200',
  'Philosophy': 'text-indigo-700 bg-indigo-50 border-indigo-200',
};

export const PassageCard: React.FC<PassageCardProps> = ({ id, title, genre, passage, paragraphCount, wordCount }) => {
  const [expanded, setExpanded] = useState(false);
  const genreStyle = genre && genreColors[genre] ? genreColors[genre] : 'text-slate-600 bg-slate-50 border-slate-200';
  const paragraphs = passage.split('\n\n').filter(Boolean);
  const computedWordCount = wordCount ?? passage.split(/\s+/).length;
  const computedParagraphCount = paragraphCount ?? paragraphs.length;

  return (
    <div className="my-8 rounded-2xl border border-slate-200 shadow-lg overflow-hidden bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-lg">
            <BookOpen size={20} className="text-white" />
          </div>
          <div>
            <div className="text-white font-bold text-base">{title}</div>
            {id && <div className="text-emerald-200 text-xs font-mono">{id}</div>}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {genre && (
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border ${genreStyle}`}>
              {genre}
            </span>
          )}
        </div>
      </div>

      {/* Stats bar */}
      <div className="px-6 py-3 bg-slate-50 border-b border-slate-100 flex items-center gap-6 text-xs font-medium text-slate-500">
        <span className="flex items-center gap-1.5"><Hash size={12} />{computedParagraphCount} paragraphs</span>
        <span className="flex items-center gap-1.5"><FileText size={12} />{computedWordCount} words</span>
      </div>

      {/* Passage text */}
      <div className="px-6 py-5">
        <div className={`relative ${!expanded ? 'max-h-48 overflow-hidden' : ''}`}>
          <div className="space-y-4">
            {paragraphs.map((p, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-6 pt-1 text-right text-xs font-mono text-slate-300">{i + 1}</div>
                <p className="text-slate-700 leading-relaxed text-[15px]" dangerouslySetInnerHTML={{ __html: parseInline(p) }} />
              </div>
            ))}
          </div>
          {!expanded && (
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
          )}
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 w-full flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-xl transition-colors"
        >
          {expanded ? <><ChevronUp size={16} /> Collapse Passage</> : <><ChevronDown size={16} /> Read Full Passage</>}
        </button>
      </div>
    </div>
  );
};
