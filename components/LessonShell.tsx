import React from 'react';
import { BookOpen } from 'lucide-react';

interface LessonShellProps {
  title: string;
  /** Optional subtitle below the title (e.g. step-by-step one-liner). */
  subtitle?: string;
  /** Optional pill label (e.g. "Module 2 · Main Conclusion"). Shown when provided. */
  modulePill?: string;
  children: React.ReactNode;
  /** Optional export controls; rendered in header and excluded from export (data-export-skip). */
  exportControls?: React.ReactNode;
}

/**
 * Shared lesson layout matching Format Showcase: BookOpen + "Lesson" + title + divider,
 * rounded white main card. Root has data-export-content for Copy as JSX/HTML.
 */
export function LessonShell({ title, subtitle, modulePill, children, exportControls }: LessonShellProps) {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50 font-sans" data-export-content>
      <div className="mx-auto max-w-4xl p-5 lg:p-10">
        <header className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2 text-slate-500">
                <BookOpen className="w-4 h-4" />
                <p className="text-xs font-semibold tracking-wide uppercase">Lesson</p>
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">{title}</h1>
              {subtitle != null && subtitle !== '' && (
                <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
              )}
            </div>
            <div className="flex flex-shrink-0 items-center gap-3">
              {modulePill != null && modulePill !== '' && (
                <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                  {modulePill}
                </div>
              )}
                {exportControls != null && (
                <div data-export-skip>
                  {exportControls}
                </div>
              )}
            </div>
          </div>
          <div className="mt-6 h-px w-full bg-slate-200" />
        </header>

        <main className="rounded-xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm max-w-none">
          {children}
        </main>
      </div>
    </div>
  );
}
