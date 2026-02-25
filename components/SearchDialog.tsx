import React, { useState, useEffect, useRef, useMemo } from 'react';
import Fuse from 'fuse.js';
import { Search, X, BookOpen, ChevronRight } from 'lucide-react';
import { ModuleData } from '../types';

interface SearchItem {
  moduleId: number;
  moduleTitle: string;
  lessonId: string;
  lessonTitle: string;
}

interface SearchDialogProps {
  modules: ModuleData[];
  open: boolean;
  onClose: () => void;
  onNavigate: (moduleId: number, lessonId: string) => void;
}

export const SearchDialog: React.FC<SearchDialogProps> = ({ modules, open, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const searchItems: SearchItem[] = useMemo(
    () =>
      modules.flatMap((m) =>
        m.lessons.map((l) => ({
          moduleId: m.id,
          moduleTitle: m.title,
          lessonId: l.id,
          lessonTitle: l.title,
        })),
      ),
    [modules],
  );

  const fuse = useMemo(
    () =>
      new Fuse(searchItems, {
        keys: ['lessonTitle', 'moduleTitle'],
        threshold: 0.4,
        includeScore: true,
      }),
    [searchItems],
  );

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query).slice(0, 12);
  }, [fuse, query]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (open) onClose();
      }
      if (e.key === 'Escape' && open) onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh]">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-label="Search lessons"
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200">
          <Search size={20} className="text-slate-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search lessons and modules..."
            className="flex-1 text-lg outline-none placeholder-slate-400 bg-transparent"
            aria-label="Search"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close search"
          >
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[50vh] overflow-y-auto">
          {query.trim() && results.length === 0 && (
            <div className="p-8 text-center text-slate-500">
              <Search size={32} className="mx-auto mb-3 opacity-40" />
              <p className="font-medium">No results found</p>
              <p className="text-sm mt-1">Try a different search term</p>
            </div>
          )}

          {results.length > 0 && (
            <ul className="py-2" role="listbox">
              {results.map(({ item }) => (
                <li key={`${item.moduleId}-${item.lessonId}`}>
                  <button
                    onClick={() => {
                      onNavigate(item.moduleId, item.lessonId);
                      onClose();
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-indigo-50 transition-colors flex items-center gap-3 group"
                    role="option"
                    aria-selected={false}
                  >
                    <BookOpen size={16} className="text-slate-400 group-hover:text-indigo-500 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-slate-900 truncate">{item.lessonTitle}</div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        Module {item.moduleId}: {item.moduleTitle}
                      </div>
                    </div>
                    <ChevronRight size={14} className="text-slate-300 group-hover:text-indigo-400 flex-shrink-0" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {!query.trim() && (
            <div className="p-6 text-center text-slate-400 text-sm">
              <kbd className="px-2 py-1 bg-slate-100 rounded text-xs font-mono">Ctrl+K</kbd> to toggle search
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
