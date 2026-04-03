import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Settings } from 'lucide-react';
import { useViewSettings } from '../contexts/ViewSettingsContext';
import { getVariantLabel } from '../utils/variantLabels';

export const ViewSettingsPopover: React.FC = () => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const popRef = useRef<HTMLDivElement>(null);
  const {
    enabledViews, toggleView, allViewKeys,
    websiteViewerMode, trueStudentView,
    setWebsiteViewerMode, setTrueStudentView,
    sidebarVariant, setSidebarVariant,
  } = useViewSettings();

  const [style, setStyle] = useState<React.CSSProperties>({});

  const reposition = useCallback(() => {
    if (!btnRef.current) return;
    const r = btnRef.current.getBoundingClientRect();
    const popW = Math.min(268, window.innerWidth - 24);
    // Prefer right-aligned to button, clamp to viewport
    let left = r.right - popW;
    if (left < 12) left = 12;
    if (left + popW > window.innerWidth - 12) left = window.innerWidth - popW - 12;
    let top = r.bottom + 6;
    const maxH = window.innerHeight - top - 12;
    if (maxH < 200) {
      // Not enough room below — open above
      top = r.top - 6;
      setStyle({ position: 'fixed', bottom: window.innerHeight - top, left, width: popW, maxHeight: Math.min(top - 12, 500), overflowY: 'auto', zIndex: 99999 });
    } else {
      setStyle({ position: 'fixed', top, left, width: popW, maxHeight: Math.min(maxH, 500), overflowY: 'auto', zIndex: 99999 });
    }
  }, []);

  useEffect(() => { if (open) requestAnimationFrame(reposition); }, [open, reposition]);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (btnRef.current?.contains(e.target as Node) || popRef.current?.contains(e.target as Node)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener('scroll', close, true);
    window.addEventListener('resize', close);
    return () => { window.removeEventListener('scroll', close, true); window.removeEventListener('resize', close); };
  }, [open]);

  const sidebarOptions: Array<[string, string]> = [
    ['K', 'Indigo'],
    ['L', 'Pure White'],
    ['M', 'Pure Green'],
    ['N', 'Green+White'],
    ['O', 'White+Green'],
  ];

  const popover = (
    <div ref={popRef} className="bg-white rounded-xl shadow-2xl border-[1.5px] border-slate-300 p-3" style={style}>
      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Preview Mode</div>

      <label className="flex items-center justify-between py-2 px-1 rounded-md hover:bg-slate-50 cursor-pointer">
        <span className={`text-sm font-medium ${websiteViewerMode ? 'text-slate-800' : 'text-slate-500'}`}>Website Viewer</span>
        <button onClick={() => setWebsiteViewerMode(!websiteViewerMode)}
          className={`relative w-9 h-5 rounded-full transition-colors ${websiteViewerMode ? 'bg-indigo-500' : 'bg-slate-300'}`}
          role="switch" aria-checked={websiteViewerMode}>
          <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${websiteViewerMode ? 'translate-x-4' : ''}`} />
        </button>
      </label>

      <label className={`flex items-center justify-between py-2 px-1 pl-4 rounded-md ${websiteViewerMode ? 'hover:bg-slate-50 cursor-pointer' : 'opacity-40 cursor-not-allowed'}`}>
        <span className={`text-sm ${trueStudentView ? 'text-slate-800 font-medium' : 'text-slate-500'}`}>True Student View</span>
        <button onClick={() => websiteViewerMode && setTrueStudentView(!trueStudentView)}
          disabled={!websiteViewerMode}
          className={`relative w-9 h-5 rounded-full transition-colors ${trueStudentView ? 'bg-indigo-500' : 'bg-slate-300'} ${!websiteViewerMode ? 'opacity-50' : ''}`}
          role="switch" aria-checked={trueStudentView}>
          <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${trueStudentView ? 'translate-x-4' : ''}`} />
        </button>
      </label>

      {websiteViewerMode && (
        <div className="mt-3 pt-3 border-t border-slate-100">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Sidebar Style</div>
          <div className="grid grid-cols-4 gap-1.5">
            {sidebarOptions.map(([key, label]) => (
              <button key={key} onClick={() => setSidebarVariant(key as 'A')}
                className={`px-1.5 py-1.5 rounded-lg text-[10px] font-semibold transition-colors ${
                  sidebarVariant === key
                    ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                    : 'bg-slate-50 text-slate-500 border border-slate-200 hover:bg-slate-100'
                }`}>
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-3 pt-3 border-t border-slate-100">
        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Visible Views</div>
        {allViewKeys.map((key) => {
          const enabled = enabledViews.includes(key);
          return (
            <label key={key} className="flex items-center gap-2.5 py-1.5 px-1 rounded-md hover:bg-slate-50 cursor-pointer text-sm">
              <input type="checkbox" checked={enabled} onChange={() => toggleView(key)}
                className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
              <span className={enabled ? 'text-slate-800' : 'text-slate-400'}>{getVariantLabel(key)}</span>
            </label>
          );
        })}
      </div>

      <div className="mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-400">
        Website Viewer shows how content appears on the student site.
      </div>
    </div>
  );

  return (
    <>
      <button ref={btnRef} onClick={() => setOpen(v => !v)}
        className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        aria-label="View settings" title="View settings">
        <Settings size={18} />
      </button>
      {open && createPortal(popover, document.body)}
    </>
  );
};
