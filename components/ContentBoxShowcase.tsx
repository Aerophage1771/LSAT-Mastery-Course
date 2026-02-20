import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SAMPLE_HEADER = 'Question · PT-107-S-4-Q-15';
const SAMPLE_BODY = (
  <>
    <p className="mb-2">
      Ambiguity inspires interpretation. The saying "We are the measure of all things," for instance,
      has been interpreted by some people to imply that humans are centrally important in the universe.
    </p>
    <p>
      <strong>Question:</strong> The claim that ambiguity inspires interpretation figures in the argument
      in which one of the following ways?
    </p>
  </>
);

const VARIANTS: { label: string; outer: string; header: string; body: string }[] = [
  {
    label: 'Variant 1 – Current',
    outer: 'rounded-xl border border-slate-200 shadow-sm overflow-hidden',
    header: 'bg-slate-50 hover:bg-slate-100 text-slate-800',
    body: 'bg-white border-t border-slate-200',
  },
  {
    label: 'Variant 2 – Minimal',
    outer: 'border-l-4 border-l-indigo-500 border border-slate-200 overflow-hidden',
    header: 'bg-white hover:bg-slate-50 text-slate-800',
    body: 'bg-white border-t border-slate-100',
  },
  {
    label: 'Variant 3 – Indigo header',
    outer: 'rounded-xl border border-slate-200 overflow-hidden',
    header: 'bg-indigo-50 hover:bg-indigo-100 text-indigo-900',
    body: 'bg-white border-t border-indigo-100',
  },
  {
    label: 'Variant 4 – Card shadow',
    outer: 'rounded-xl border border-slate-200 shadow-md overflow-hidden',
    header: 'bg-slate-50 hover:bg-slate-100 text-slate-800',
    body: 'bg-white border-t border-slate-200',
  },
  {
    label: 'Variant 5 – Flat',
    outer: 'border border-slate-200 overflow-hidden',
    header: 'bg-slate-50 hover:bg-slate-100 text-slate-800',
    body: 'bg-white border-t border-slate-200',
  },
  {
    label: 'Variant 6 – Dark header',
    outer: 'rounded-lg overflow-hidden border border-slate-200',
    header: 'bg-slate-800 hover:bg-slate-700 text-white',
    body: 'bg-white border-t border-slate-200',
  },
  {
    label: 'Variant 7 – Rounded soft',
    outer: 'rounded-lg border border-slate-200 shadow-sm overflow-hidden',
    header: 'bg-slate-50 hover:bg-slate-100 text-slate-800',
    body: 'bg-slate-50/50 border-t border-slate-200',
  },
  {
    label: 'Variant 8 – Outline only',
    outer: 'rounded-xl border-2 border-slate-300 overflow-hidden',
    header: 'bg-transparent hover:bg-slate-50 border-b border-slate-200 text-slate-800',
    body: 'bg-white',
  },
  {
    label: 'Variant 9 – Tinted body',
    outer: 'rounded-xl border border-slate-200 overflow-hidden',
    header: 'bg-slate-50 hover:bg-slate-100 text-slate-800',
    body: 'bg-slate-50/30 border-t border-slate-200',
  },
  {
    label: 'Variant 10 – Bold pill',
    outer: 'rounded-2xl border-2 border-slate-300 shadow-sm overflow-hidden',
    header: 'bg-slate-100 hover:bg-slate-200 font-extrabold uppercase tracking-wide text-slate-800',
    body: 'bg-white border-t-2 border-slate-200',
  },
];

export const ContentBoxShowcase: React.FC = () => {
  const [open, setOpen] = useState<Record<number, boolean>>({});

  const toggle = (index: number) => {
    setOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="space-y-10">
      <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
        ContentBox variants
      </h2>
      <p className="text-slate-600">
        Compare the 10 styles below. Each uses the same sample content. Expand or collapse any to compare.
      </p>
      {VARIANTS.map((v, index) => (
        <section key={index} className="space-y-2">
          <p className="text-sm font-semibold text-slate-700">{v.label}</p>
          <div className={`my-2 ${v.outer}`}>
            <button
              type="button"
              onClick={() => toggle(index)}
              className={`w-full flex items-center justify-between p-4 transition-colors text-left font-bold ${v.header}`}
              aria-expanded={!!open[index]}
              aria-label={`${v.label}, ${open[index] ? 'collapse' : 'expand'} content`}
            >
              <span>{SAMPLE_HEADER}</span>
              {open[index] ? (
                <ChevronUp size={20} className="flex-shrink-0 opacity-70" />
              ) : (
                <ChevronDown size={20} className="flex-shrink-0 opacity-70" />
              )}
            </button>
            {open[index] && (
              <div className={`p-6 ${v.body}`}>
                <div className="prose prose-slate prose-lg max-w-none">
                  {SAMPLE_BODY}
                </div>
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};
