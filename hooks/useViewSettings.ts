import { useState, useCallback } from 'react';
import { ALL_VIEW_KEYS } from '../utils/variantLabels';

const STORAGE_KEY = 'lsat-view-settings';

interface ViewSettings {
  enabledViews: string[];
}

function loadSettings(): ViewSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as ViewSettings;
      if (Array.isArray(parsed.enabledViews)) return parsed;
    }
  } catch { /* ignore */ }
  // Default: all views enabled
  return { enabledViews: [...ALL_VIEW_KEYS] };
}

function saveSettings(settings: ViewSettings): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

export function useViewSettings() {
  const [settings, setSettings] = useState<ViewSettings>(loadSettings);

  const isViewEnabled = useCallback(
    (key: string) => settings.enabledViews.includes(key),
    [settings.enabledViews],
  );

  const toggleView = useCallback((key: string) => {
    setSettings((prev) => {
      const current = prev.enabledViews;
      let next: string[];

      if (current.includes(key)) {
        // Don't allow disabling all views — keep at least __original
        next = current.filter((k) => k !== key);
        if (next.length === 0) next = ['__original'];
      } else {
        next = [...current, key];
      }

      const updated = { enabledViews: next };
      saveSettings(updated);
      return updated;
    });
  }, []);

  return {
    enabledViews: settings.enabledViews,
    isViewEnabled,
    toggleView,
    allViewKeys: ALL_VIEW_KEYS as unknown as string[],
  };
}
