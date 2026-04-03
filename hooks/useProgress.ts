import { useState, useCallback } from 'react';

interface ProgressRecord {
  [lessonId: string]: boolean;
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressRecord>(() => {
    try {
      const stored = localStorage.getItem('lsat-mastery-progress');
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  const persist = useCallback((next: ProgressRecord) => {
    setProgress(next);
    try { localStorage.setItem('lsat-mastery-progress', JSON.stringify(next)); } catch {}
  }, []);

  const markLessonComplete = useCallback((lessonId: string) => {
    setProgress((prev) => {
      const next = { ...prev, [lessonId]: true };
      try { localStorage.setItem('lsat-mastery-progress', JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const isLessonComplete = useCallback((lessonId: string) => {
    return !!progress[lessonId];
  }, [progress]);

  const updateLastPosition = useCallback((moduleId: number, lessonId: string) => {
    try {
      localStorage.setItem('lsat-mastery-last-position', JSON.stringify({ moduleId, lessonId }));
    } catch {}
  }, []);

  const getModuleProgress = useCallback((lessons: { id: string }[]) => {
    const total = lessons.length;
    if (!total) return { completed: 0, total: 0, percent: 0 };
    const completed = lessons.filter((l) => progress[l.id]).length;
    return { completed, total, percent: Math.round((completed / total) * 100) };
  }, [progress]);

  const importProgress = useCallback((data: ProgressRecord): boolean => {
    try {
      persist(data);
      return true;
    } catch {
      return false;
    }
  }, [persist]);

  return {
    progress,
    markLessonComplete,
    isLessonComplete,
    updateLastPosition,
    getModuleProgress,
    importProgress,
  };
}
