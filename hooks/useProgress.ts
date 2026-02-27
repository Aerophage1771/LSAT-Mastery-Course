import { useState, useCallback, useEffect } from 'react';

const STORAGE_KEY = 'lsat-mastery-progress';

export interface ProgressData {
  completedLessons: string[];
  lastModuleId: number | null;
  lastLessonId: string | null;
}

const defaultProgress: ProgressData = {
  completedLessons: [],
  lastModuleId: null,
  lastLessonId: null,
};

function loadProgress(): ProgressData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress;
    const parsed = JSON.parse(raw) as Partial<ProgressData>;
    return {
      completedLessons: Array.isArray(parsed.completedLessons) ? parsed.completedLessons : [],
      lastModuleId: typeof parsed.lastModuleId === 'number' ? parsed.lastModuleId : null,
      lastLessonId: typeof parsed.lastLessonId === 'string' ? parsed.lastLessonId : null,
    };
  } catch {
    return defaultProgress;
  }
}

function saveProgress(data: ProgressData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // localStorage might be full or unavailable
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>(loadProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const markLessonComplete = useCallback((lessonId: string) => {
    setProgress((prev) => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      return { ...prev, completedLessons: [...prev.completedLessons, lessonId] };
    });
  }, []);

  const updateLastPosition = useCallback((moduleId: number | null, lessonId: string | null) => {
    setProgress((prev) => ({
      ...prev,
      lastModuleId: moduleId,
      lastLessonId: lessonId,
    }));
  }, []);

  const isLessonComplete = useCallback(
    (lessonId: string) => progress.completedLessons.includes(lessonId),
    [progress.completedLessons],
  );

  const getModuleProgress = useCallback(
    (lessons: { id: string }[]) => {
      const completed = lessons.filter((l) => progress.completedLessons.includes(l.id)).length;
      return { completed, total: lessons.length, percent: lessons.length > 0 ? Math.round((completed / lessons.length) * 100) : 0 };
    },
    [progress.completedLessons],
  );

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress);
  }, []);

  const importProgress = useCallback((data: ProgressData) => {
    // Basic validation
    if (data && Array.isArray(data.completedLessons)) {
      setProgress({
        completedLessons: data.completedLessons,
        lastModuleId: typeof data.lastModuleId === 'number' ? data.lastModuleId : null,
        lastLessonId: typeof data.lastLessonId === 'string' ? data.lastLessonId : null,
      });
      return true;
    }
    return false;
  }, []);

  return {
    progress,
    markLessonComplete,
    updateLastPosition,
    isLessonComplete,
    getModuleProgress,
    resetProgress,
    importProgress,
  };
}
