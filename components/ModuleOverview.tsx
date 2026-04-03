import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ChevronRight, FileText, CheckCircle2 } from 'lucide-react';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import type { ModuleData } from '../types';
import { loadModuleReport } from '../utils/moduleReports';
import { useProgressContext } from '../contexts/ProgressContext';
import { getDisplayModuleLabel } from '../utils/courseCatalog';

interface ModuleOverviewProps {
  moduleData: ModuleData;
}

export const ModuleOverview: React.FC<ModuleOverviewProps> = ({ moduleData }) => {
  const navigate = useNavigate();
  const { isLessonComplete } = useProgressContext();
  const [report, setReport] = useState<string | null>(null);
  const [reportOpen, setReportOpen] = useState(false);
  const [reportLoading, setReportLoading] = useState(true);

  useEffect(() => {
    setReportLoading(true);
    setReportOpen(false);
    loadModuleReport(moduleData.id).then((md) => {
      setReport(md);
      setReportLoading(false);
    });
  }, [moduleData.id]);

  const completedCount = moduleData.lessons.filter((l) => isLessonComplete(l.id)).length;
  const totalLessons = moduleData.lessons.length;

  const renderedReport = React.useMemo(() => {
    if (!report) return '';
    const raw = marked.parse(report, { async: false }) as string;
    return DOMPurify.sanitize(raw);
  }, [report]);

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="text-[11px] font-semibold text-indigo-500 uppercase tracking-wider mb-1">
          Module Overview
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          {getDisplayModuleLabel(moduleData.id)}: {moduleData.title}
        </h1>
        {moduleData.description && (
          <p className="text-slate-500 text-sm leading-relaxed">{moduleData.description}</p>
        )}
        <div className="mt-3 flex items-center gap-4 text-xs text-slate-400">
          <span>{totalLessons} lessons</span>
          {completedCount > 0 && (
            <span className="text-emerald-600 font-medium">
              {completedCount}/{totalLessons} completed
            </span>
          )}
        </div>
      </div>

      {/* Lesson List */}
      <div className="mb-10">
        <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-3">Lessons</h2>
        <div className="space-y-1">
          {moduleData.lessons.map((lesson, i) => {
            const complete = isLessonComplete(lesson.id);
            return (
              <button
                key={lesson.id}
                onClick={() => navigate(`/module/${moduleData.id}/lesson/${lesson.id}`)}
                className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg border transition-all hover:shadow-sm ${
                  complete
                    ? 'border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50'
                    : 'border-slate-200 bg-white hover:bg-slate-50'
                }`}
              >
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  {complete ? (
                    <CheckCircle2 size={16} className="text-emerald-500" />
                  ) : (
                    <span className="text-xs font-medium text-slate-400">{i + 1}</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-medium text-slate-800 truncate block">
                    {lesson.title}
                  </span>
                </div>
                <ChevronRight size={14} className="text-slate-300 flex-shrink-0" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Start Button */}
      <div className="mb-10 flex gap-3">
        <button
          onClick={() => navigate(`/module/${moduleData.id}/lesson/${moduleData.lessons[0]?.id}`)}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
        >
          <BookOpen size={16} />
          {completedCount > 0 ? 'Continue Module' : 'Start Module'}
        </button>
      </div>

      {/* Improvement Report */}
      {!reportLoading && report && (
        <div className="border-[1.5px] border-slate-300 rounded-xl overflow-hidden">
          <button
            onClick={() => setReportOpen((v) => !v)}
            className="w-full flex items-center gap-3 px-5 py-3.5 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
          >
            <FileText size={16} className="text-amber-500 flex-shrink-0" />
            <span className="text-sm font-semibold text-slate-700 flex-1">
              Improvement Report
            </span>
            <ChevronRight
              size={14}
              className={`text-slate-400 transition-transform ${reportOpen ? 'rotate-90' : ''}`}
            />
          </button>
          {reportOpen && (
            <div className="px-6 py-5 border-t border-slate-200 bg-white">
              <div
                className="prose prose-sm prose-slate max-w-none
                  prose-headings:text-slate-800 prose-h1:text-lg prose-h2:text-base prose-h3:text-sm
                  prose-p:text-slate-600 prose-li:text-slate-600
                  prose-table:text-xs prose-th:bg-slate-50 prose-th:px-3 prose-th:py-2
                  prose-td:px-3 prose-td:py-2 prose-td:border-slate-200
                  prose-strong:text-slate-700 prose-code:text-xs prose-code:bg-slate-100 prose-code:px-1 prose-code:rounded"
                dangerouslySetInnerHTML={{ __html: renderedReport }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
