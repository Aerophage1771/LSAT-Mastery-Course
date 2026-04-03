import React, { createContext, useContext, useState, useCallback } from 'react';
import { ALL_VIEW_KEYS } from '../utils/variantLabels';

const STORAGE_KEY = 'lsat-view-settings';

type SidebarVariant = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T';

interface ViewSettings {
  enabledViews: string[];
  websiteViewerMode: boolean;
  trueStudentView: boolean;
  sidebarVariant: SidebarVariant;
}

interface ViewSettingsContextValue {
  enabledViews: string[];
  isViewEnabled: (key: string) => boolean;
  toggleView: (key: string) => void;
  sidebarVariant: SidebarVariant;
  setSidebarVariant: (v: SidebarVariant) => void;
  allViewKeys: string[];
  websiteViewerMode: boolean;
  trueStudentView: boolean;
  setWebsiteViewerMode: (on: boolean) => void;
  setTrueStudentView: (on: boolean) => void;
}

function loadSettings(): ViewSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<ViewSettings>;
      return {
        enabledViews: Array.isArray(parsed.enabledViews) ? parsed.enabledViews : [...ALL_VIEW_KEYS],
        websiteViewerMode: parsed.websiteViewerMode ?? false,
        trueStudentView: parsed.trueStudentView ?? false,
        sidebarVariant: (['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T'] as const).includes(parsed.sidebarVariant as SidebarVariant) ? parsed.sidebarVariant as SidebarVariant : 'K',
      };
    }
  } catch { /* ignore */ }
  return { enabledViews: [...ALL_VIEW_KEYS], websiteViewerMode: false, trueStudentView: false, sidebarVariant: 'L' as SidebarVariant };
}

function saveSettings(settings: ViewSettings): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

const ViewSettingsContext = createContext<ViewSettingsContextValue | null>(null);

export const ViewSettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
        next = current.filter((k) => k !== key);
        if (next.length === 0) next = ['__original'];
      } else {
        next = [...current, key];
      }
      const updated = { ...prev, enabledViews: next };
      saveSettings(updated);
      return updated;
    });
  }, []);

  const setWebsiteViewerMode = useCallback((on: boolean) => {
    setSettings((prev) => {
      const updated = {
        ...prev,
        websiteViewerMode: on,
        // Turning off website viewer forces off true student view
        trueStudentView: on ? prev.trueStudentView : false,
      };
      saveSettings(updated);
      return updated;
    });
  }, []);

  const setTrueStudentView = useCallback((on: boolean) => {
    setSettings((prev) => {
      const updated = {
        ...prev,
        trueStudentView: on,
        websiteViewerMode: on ? true : prev.websiteViewerMode,
      };
      saveSettings(updated);
      return updated;
    });
  }, []);

  const setSidebarVariant = useCallback((v: SidebarVariant) => {
    setSettings((prev) => {
      const updated = { ...prev, sidebarVariant: v };
      saveSettings(updated);
      return updated;
    });
  }, []);

  return (
    <ViewSettingsContext.Provider
      value={{
        enabledViews: settings.enabledViews,
        isViewEnabled,
        toggleView,
        allViewKeys: ALL_VIEW_KEYS as unknown as string[],
        websiteViewerMode: settings.websiteViewerMode,
        trueStudentView: settings.trueStudentView,
        setWebsiteViewerMode,
        setTrueStudentView,
        sidebarVariant: settings.sidebarVariant,
        setSidebarVariant,
      }}
    >
      {children}
    </ViewSettingsContext.Provider>
  );
};

export function useViewSettings(): ViewSettingsContextValue {
  const ctx = useContext(ViewSettingsContext);
  if (!ctx) throw new Error('useViewSettings must be used within ViewSettingsProvider');
  return ctx;
}
