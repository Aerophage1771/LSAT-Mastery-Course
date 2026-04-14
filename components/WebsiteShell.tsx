/**
 * WebsiteShell — Mirrors the GermaineTutoring.com student portal layout
 * exactly, replacing the mastery course's Layout when websiteViewerMode is on.
 *
 * Screens:
 * 1. Module overview (no lessonId) → lesson selector table
 * 2. Lesson view (lessonId present) → header block + content + right sidebar
 */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Target,
  FileText,
  ClipboardList,
  RotateCcw,
  Clock,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Menu,
} from 'lucide-react';
import type { ModuleData } from '../types';
import { useViewSettings } from '../contexts/ViewSettingsContext';
import { ViewSettingsPopover } from './ViewSettingsPopover';
import { websiteLessonCatalog } from '../data/websiteLessonCatalog';
import { PortalDashboard, PortalDashboardA, PortalDashboardB, PortalDashboardC, PortalDashboardD, PortalDashboardE, PortalQuestions, PortalHomeworkB, ReviewLandingD, ReviewWajD, ReviewBrB, PortalPastSessionsA } from './WebsitePortalPages';

const DASHBOARD_VARIANTS = [
  { key: 'default', label: 'Default', component: PortalDashboard },
  { key: 'A', label: 'A · Action Bar', component: PortalDashboardA },
  { key: 'B', label: 'B · Two-Panel', component: PortalDashboardB },
  { key: 'C', label: 'C · Timeline', component: PortalDashboardC },
  { key: 'D', label: 'D · Bento', component: PortalDashboardD },
  { key: 'E', label: 'E · Command', component: PortalDashboardE },
] as const;

interface WebsiteShellProps {
  modules: Array<{
    id: number;
    title: string;
    category: string;
    description: string;
    unit: string;
    lessons?: ModuleData['lessons'];
  }>;
  activeModuleId: number | null;
  activeLessonId: string | null;
  onSelectModule: (id: number) => void;
  onSelectLesson: (id: string) => void;
  onGoHome: () => void;
  activeModuleData?: ModuleData;
  isLessonComplete?: (lessonId: string) => boolean;
  children: React.ReactNode;
}

/* ─── Left Sidebar Nav ─────────────────────────────────────────── */

export type PortalPage = 'dashboard' | 'course' | 'questions' | 'homework' | 'review' | 'sessions';

const navItems: Array<{ icon: typeof LayoutDashboard; label: string; page: PortalPage; disabled?: boolean }> = [
  { icon: LayoutDashboard, label: 'Dashboard', page: 'dashboard' },
  { icon: Lightbulb, label: 'Course', page: 'course' },
  { icon: FileText, label: 'Questions', page: 'questions' },
  { icon: ClipboardList, label: 'Homework', page: 'homework' },
  { icon: RotateCcw, label: 'Review', page: 'review' },
  { icon: Clock, label: 'Past Sessions', page: 'sessions' },
];

/* ─── Sidebar Variant A: Current (Dark Minimal) ────────────────── */

const SidebarA: React.FC<{ activePage: PortalPage; onNav: (p: PortalPage) => void }> = ({ activePage, onNav }) => (
  <nav className="w-[192px] flex-shrink-0 bg-slate-900 text-slate-300 flex flex-col h-screen sticky top-0">
    <div className="px-5 pt-6 pb-4">
      <div className="text-[10px] font-bold uppercase tracking-[2px] text-slate-500 mb-1">Germaine Tutoring</div>
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-300">GT</div>
        <span className="text-sm font-semibold text-white">Student Portal</span>
      </div>
    </div>
    <div className="flex-1 px-3 space-y-1 mt-2">
      {navItems.map((item) => {
        const isActive = activePage === item.page;
        return (
          <button key={item.label} onClick={() => onNav(item.page)} disabled={false}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive ? 'bg-indigo-500/15 text-white border-l-2 border-indigo-400 -ml-px' : item.disabled ? 'text-slate-600 cursor-default' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}>
            <item.icon size={20} className={isActive ? 'text-indigo-400' : ''} />
            {item.label}
          </button>
        );
      })}
    </div>
    <div className="px-4 py-4 border-t border-slate-800 mt-auto">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-xs font-bold text-slate-300">A</div>
        <div><div className="text-sm font-medium text-white">Annabelle</div><div className="text-xs text-slate-500">Student</div></div>
      </div>
    </div>
  </nav>
);

/* ─── Sidebar Variant B: Refined (Grouped, Progress, Wider) ───── */

const SidebarB: React.FC<{ activePage: PortalPage; onNav: (p: PortalPage) => void }> = ({ activePage, onNav }) => (
  <nav className="w-[220px] flex-shrink-0 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 flex flex-col h-screen sticky top-0">
    <div className="px-5 pt-6 pb-5 border-b border-slate-800/60">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-indigo-600/20">GT</div>
        <div>
          <div className="text-sm font-bold text-white tracking-tight">Germaine Tutoring</div>
          <div className="text-[10px] text-slate-500 font-medium">Student Portal</div>
        </div>
      </div>
    </div>

    <div className="flex-1 px-3 mt-5 space-y-5 overflow-y-auto">
      {/* Primary */}
      <div>
        <div className="px-3 mb-2 text-[9px] font-bold uppercase tracking-[2px] text-slate-600">Study</div>
        {navItems.slice(0, 3).map((item) => {
          const isActive = activePage === item.page;
          return (
            <button key={item.label} onClick={() => onNav(item.page)} disabled={false}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all mb-0.5 ${isActive ? 'bg-indigo-500/15 text-white shadow-sm shadow-indigo-500/10' : item.disabled ? 'text-slate-600 cursor-default' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
              <item.icon size={18} className={isActive ? 'text-indigo-400' : ''} />
              {item.label}
              {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400" />}
            </button>
          );
        })}
      </div>

      {/* Practice */}
      <div>
        <div className="px-3 mb-2 text-[9px] font-bold uppercase tracking-[2px] text-slate-600">Practice</div>
        {navItems.slice(3).map((item) => {
          const isActive = activePage === item.page;
          return (
            <button key={item.label} onClick={() => onNav(item.page)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all ${isActive ? 'text-white bg-white/10' : 'text-slate-500 hover:text-white hover:bg-slate-800/50 cursor-pointer'}`}>
              <item.icon size={18} className={isActive ? 'text-white' : ''} />
              {item.label}
              {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />}
            </button>
          );
        })}
      </div>

      {/* Progress card */}
      <div className="mx-1 rounded-2xl bg-slate-800/60 border border-slate-700/40 p-4">
        <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-slate-500 mb-3">Progress</div>
        <div className="flex items-center gap-3">
          <svg className="w-10 h-10" viewBox="0 0 36 36">
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#334155" strokeWidth="3" />
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#6366f1" strokeWidth="3" strokeDasharray="0, 100" strokeLinecap="round" />
          </svg>
          <div>
            <div className="text-sm font-semibold text-white">0%</div>
            <div className="text-[10px] text-slate-500">0 / 56 lessons</div>
          </div>
        </div>
      </div>
    </div>

    <div className="px-4 py-4 border-t border-slate-800/60 mt-auto">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-xs font-bold text-white">A</div>
        <div><div className="text-sm font-medium text-white">Annabelle</div><div className="text-[10px] text-slate-500">Student</div></div>
      </div>
    </div>
  </nav>
);

/* ─── Sidebar Variant C: Compact (Icons-only, Expand on Hover) ── */

const SidebarC: React.FC<{ activePage: PortalPage; onNav: (p: PortalPage) => void }> = ({ activePage, onNav }) => (
  <nav className="group/sidebar w-[68px] hover:w-[220px] flex-shrink-0 bg-slate-900 text-slate-300 flex flex-col h-screen sticky top-0 transition-all duration-300 overflow-hidden">
    <div className="px-4 pt-5 pb-4 flex items-center justify-center group-hover/sidebar:justify-start group-hover/sidebar:px-5 transition-all">
      <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">GT</div>
      <div className="ml-3 opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        <div className="text-sm font-bold text-white">Germaine Tutoring</div>
        <div className="text-[10px] text-slate-500">Student Portal</div>
      </div>
    </div>

    <div className="flex-1 px-2 group-hover/sidebar:px-3 mt-2 space-y-1 transition-all">
      {navItems.map((item) => {
        const isActive = activePage === item.page;
        return (
          <button key={item.label} onClick={() => onNav(item.page)} disabled={false}
            title={item.label}
            className={`w-full flex items-center gap-3 justify-center group-hover/sidebar:justify-start px-0 group-hover/sidebar:px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${isActive ? 'bg-indigo-500/15 text-white' : item.disabled ? 'text-slate-600 cursor-default' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}>
            <item.icon size={20} className={`flex-shrink-0 ${isActive ? 'text-indigo-400' : ''}`} />
            <span className="opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-200 whitespace-nowrap">{item.label}</span>
          </button>
        );
      })}
    </div>

    <div className="px-2 group-hover/sidebar:px-4 py-4 border-t border-slate-800 mt-auto transition-all">
      <div className="flex items-center gap-2.5 justify-center group-hover/sidebar:justify-start">
        <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-xs font-bold text-slate-300 flex-shrink-0">A</div>
        <div className="opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          <div className="text-sm font-medium text-white">Annabelle</div>
          <div className="text-xs text-slate-500">Student</div>
        </div>
      </div>
    </div>
  </nav>
);

/* ─── Sidebar Variant D: Floating (Rounded inset card) ─────────── */

const SidebarD: React.FC<{ activePage: PortalPage; onNav: (p: PortalPage) => void }> = ({ activePage, onNav }) => (
  <div className="w-[216px] flex-shrink-0 p-3 pr-0 h-screen sticky top-0">
    <nav className="bg-slate-900 text-slate-300 flex flex-col h-full rounded-2xl overflow-hidden shadow-xl">
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">GT</div>
          <span className="text-sm font-semibold text-white">Student Portal</span>
        </div>
      </div>
      <div className="flex-1 px-3 space-y-0.5 mt-1">
        {navItems.map((item) => {
          const isActive = activePage === item.page;
          return (
            <button key={item.label} onClick={() => onNav(item.page)} disabled={false}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all ${isActive ? 'bg-indigo-500/15 text-white' : item.disabled ? 'text-slate-600 cursor-default' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}>
              <item.icon size={18} className={isActive ? 'text-indigo-400' : ''} />
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="px-4 py-4 border-t border-slate-800 mt-auto">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-300">A</div>
          <div><div className="text-sm font-medium text-white">Annabelle</div><div className="text-[10px] text-slate-500">Student</div></div>
        </div>
      </div>
    </nav>
  </div>
);

/* ─── Sidebar Variant E: Divider (Sectioned with labels) ───────── */

const SidebarE: React.FC<{ activePage: PortalPage; onNav: (p: PortalPage) => void }> = ({ activePage, onNav }) => (
  <nav className="w-[200px] flex-shrink-0 bg-slate-900 text-slate-300 flex flex-col h-screen sticky top-0">
    <div className="px-5 pt-6 pb-4 border-b border-slate-800">
      <div className="text-[10px] font-bold uppercase tracking-[2px] text-slate-500 mb-1">Germaine Tutoring</div>
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-300">GT</div>
        <span className="text-sm font-semibold text-white">Student Portal</span>
      </div>
    </div>
    <div className="flex-1 px-3 mt-4 space-y-4 overflow-y-auto">
      <div>
        <div className="px-3 mb-2 text-[9px] font-bold uppercase tracking-[2px] text-slate-600">Learn</div>
        {navItems.slice(0, 3).map((item) => {
          const isActive = activePage === item.page;
          return (
            <button key={item.label} onClick={() => onNav(item.page)} disabled={false}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium transition-all border-b border-slate-800/50 ${isActive ? 'text-white bg-indigo-500/10' : item.disabled ? 'text-slate-600 cursor-default' : 'text-slate-400 hover:text-white'}`}>
              <item.icon size={18} className={isActive ? 'text-indigo-400' : ''} />
              {item.label}
              {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400" />}
            </button>
          );
        })}
      </div>
      <div>
        <div className="px-3 mb-2 text-[9px] font-bold uppercase tracking-[2px] text-slate-600">Practice</div>
        {navItems.slice(3).map((item) => {
          const isActive = activePage === item.page;
          return (
            <button key={item.label} onClick={() => onNav(item.page)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all ${isActive ? 'text-white bg-white/10' : 'text-slate-500 hover:text-white hover:bg-slate-800/50 cursor-pointer'}`}>
              <item.icon size={18} className={isActive ? 'text-white' : ''} />
              {item.label}
              {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />}
            </button>
          );
        })}
      </div>
    </div>
    <div className="px-4 py-4 border-t border-slate-800 mt-auto">
      <div className="px-3 mb-2 text-[9px] font-bold uppercase tracking-[2px] text-slate-600">Account</div>
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-300">A</div>
        <div><div className="text-sm font-medium text-white">Annabelle</div><div className="text-[10px] text-slate-500">Student</div></div>
      </div>
    </div>
  </nav>
);

/* ─── Sidebar Variant F: Pill (Bold active pill) ───────────────── */

const SidebarF: React.FC<{ activePage: PortalPage; onNav: (p: PortalPage) => void }> = ({ activePage, onNav }) => (
  <nav className="w-[192px] flex-shrink-0 bg-slate-950 text-slate-300 flex flex-col h-screen sticky top-0">
    <div className="px-5 pt-6 pb-4">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">GT</div>
        <span className="text-sm font-bold text-white">Student Portal</span>
      </div>
    </div>
    <div className="flex-1 px-3 space-y-1 mt-2">
      {navItems.map((item) => {
        const isActive = activePage === item.page;
        return (
          <button key={item.label} onClick={() => onNav(item.page)} disabled={false}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-[13px] font-semibold transition-all ${isActive ? 'bg-indigo-600 text-white rounded-full shadow-md shadow-indigo-600/20' : item.disabled ? 'text-slate-700 cursor-default' : 'text-slate-500 hover:text-slate-200 rounded-full'}`}>
            <item.icon size={18} />
            {item.label}
          </button>
        );
      })}
    </div>
    <div className="px-4 py-4 border-t border-slate-800 mt-auto">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold text-white">A</div>
        <div><div className="text-sm font-medium text-white">Annabelle</div><div className="text-[10px] text-slate-600">Student</div></div>
      </div>
    </div>
  </nav>
);

/* ─── Sidebar Variant G: Glow (Soft indigo glow on active) ─────── */

const SidebarG: React.FC<{ activePage: PortalPage; onNav: (p: PortalPage) => void }> = ({ activePage, onNav }) => (
  <nav className="w-[200px] flex-shrink-0 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 flex flex-col h-screen sticky top-0">
    <div className="px-5 pt-6 pb-4">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-indigo-500/25">GT</div>
        <div>
          <div className="text-sm font-bold text-white">Germaine Tutoring</div>
          <div className="text-[10px] text-slate-500">Student Portal</div>
        </div>
      </div>
    </div>
    <div className="flex-1 px-3 space-y-0.5 mt-2">
      {navItems.map((item) => {
        const isActive = activePage === item.page;
        return (
          <button key={item.label} onClick={() => onNav(item.page)} disabled={false}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all ${isActive ? 'bg-indigo-500/15 text-white shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-500/20' : item.disabled ? 'text-slate-600 cursor-default' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
            <item.icon size={18} className={isActive ? 'text-indigo-300 drop-shadow-[0_0_6px_rgba(129,140,248,0.4)]' : ''} />
            {item.label}
          </button>
        );
      })}
    </div>
    <div className="px-4 py-4 border-t border-slate-800/60 mt-auto">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-xs font-bold text-white shadow-md shadow-indigo-500/20">A</div>
        <div><div className="text-sm font-medium text-white">Annabelle</div><div className="text-[10px] text-slate-500">Student</div></div>
      </div>
    </div>
  </nav>
);

/* ─── Sidebar Variant H: Top Logo (Centered, tighter nav) ──────── */

const SidebarH: React.FC<{ activePage: PortalPage; onNav: (p: PortalPage) => void }> = ({ activePage, onNav }) => (
  <nav className="w-[180px] flex-shrink-0 bg-slate-900 text-slate-300 flex flex-col h-screen sticky top-0">
    <div className="pt-6 pb-4 text-center border-b border-slate-800">
      <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-sm font-bold text-white mx-auto mb-2">GT</div>
      <div className="text-[10px] font-bold uppercase tracking-[2px] text-slate-500">Germaine</div>
      <div className="text-[10px] font-bold uppercase tracking-[2px] text-slate-500">Tutoring</div>
    </div>
    <div className="flex-1 px-2 space-y-0.5 mt-3">
      {navItems.map((item) => {
        const isActive = activePage === item.page;
        return (
          <button key={item.label} onClick={() => onNav(item.page)} disabled={false}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[12px] font-medium transition-all ${isActive ? 'bg-indigo-500/15 text-white' : item.disabled ? 'text-slate-600 cursor-default' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}>
            <item.icon size={16} className={isActive ? 'text-indigo-400' : ''} />
            {item.label}
          </button>
        );
      })}
    </div>
    <div className="py-4 border-t border-slate-800 mt-auto text-center">
      <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-300 mx-auto mb-1">A</div>
      <div className="text-[11px] font-medium text-white">Annabelle</div>
      <div className="text-[9px] text-slate-500">Student</div>
    </div>
  </nav>
);

/* ─── Sidebar Variant I: Divider + Top Logo ────────────────────── */

const SidebarI: React.FC<{ activePage: PortalPage; onNav: (p: PortalPage) => void }> = ({ activePage, onNav }) => (
  <nav className="w-[200px] flex-shrink-0 bg-slate-900 text-slate-300 flex flex-col h-screen sticky top-0">
    <div className="pt-6 pb-4 text-center border-b border-slate-800">
      <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-sm font-bold text-white mx-auto mb-2">GT</div>
      <div className="text-[10px] font-bold uppercase tracking-[2px] text-slate-500">Germaine</div>
      <div className="text-[10px] font-bold uppercase tracking-[2px] text-slate-500">Tutoring</div>
    </div>
    <div className="flex-1 px-3 mt-4 space-y-4 overflow-y-auto">
      <div>
        <div className="px-3 mb-2 text-[9px] font-bold uppercase tracking-[2px] text-slate-600">Learn</div>
        {navItems.slice(0, 3).map((item) => {
          const isActive = activePage === item.page;
          return (
            <button key={item.label} onClick={() => onNav(item.page)} disabled={false}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium transition-all border-b border-slate-800/50 ${isActive ? 'text-white bg-indigo-500/10' : item.disabled ? 'text-slate-600 cursor-default' : 'text-slate-400 hover:text-white'}`}>
              <item.icon size={18} className={isActive ? 'text-indigo-400' : ''} />
              {item.label}
              {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400" />}
            </button>
          );
        })}
      </div>
      <div>
        <div className="px-3 mb-2 text-[9px] font-bold uppercase tracking-[2px] text-slate-600">Practice</div>
        {navItems.slice(3).map((item) => {
          const isActive = activePage === item.page;
          return (
            <button key={item.label} onClick={() => onNav(item.page)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all ${isActive ? 'text-white bg-white/10' : 'text-slate-500 hover:text-white hover:bg-slate-800/50 cursor-pointer'}`}>
              <item.icon size={18} className={isActive ? 'text-white' : ''} />
              {item.label}
              {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />}
            </button>
          );
        })}
      </div>
    </div>
    <div className="py-4 border-t border-slate-800 mt-auto text-center">
      <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-300 mx-auto mb-1">A</div>
      <div className="text-[11px] font-medium text-white">Annabelle</div>
      <div className="text-[9px] text-slate-500">Student</div>
    </div>
  </nav>
);

/* ─── Sidebar Variant J: Divider + Glow ────────────────────────── */

const SidebarJ: React.FC<{ activePage: PortalPage; onNav: (p: PortalPage) => void }> = ({ activePage, onNav }) => (
  <nav className="w-[200px] flex-shrink-0 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 flex flex-col h-screen sticky top-0">
    <div className="px-5 pt-6 pb-4 border-b border-slate-800/60">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-indigo-500/25">GT</div>
        <div>
          <div className="text-sm font-bold text-white">Germaine Tutoring</div>
          <div className="text-[10px] text-slate-500">Student Portal</div>
        </div>
      </div>
    </div>
    <div className="flex-1 px-3 mt-4 space-y-4 overflow-y-auto">
      <div>
        <div className="px-3 mb-2 text-[9px] font-bold uppercase tracking-[2px] text-slate-600">Learn</div>
        {navItems.slice(0, 3).map((item) => {
          const isActive = activePage === item.page;
          return (
            <button key={item.label} onClick={() => onNav(item.page)} disabled={false}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium transition-all border-b border-slate-800/50 ${isActive ? 'text-white bg-indigo-500/15 shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-500/20 rounded-xl border-transparent' : item.disabled ? 'text-slate-600 cursor-default' : 'text-slate-400 hover:text-white'}`}>
              <item.icon size={18} className={isActive ? 'text-indigo-300 drop-shadow-[0_0_6px_rgba(129,140,248,0.4)]' : ''} />
              {item.label}
              {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-sm shadow-indigo-400/50" />}
            </button>
          );
        })}
      </div>
      <div>
        <div className="px-3 mb-2 text-[9px] font-bold uppercase tracking-[2px] text-slate-600">Practice</div>
        {navItems.slice(3).map((item) => {
          const isActive = activePage === item.page;
          return (
            <button key={item.label} onClick={() => onNav(item.page)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all ${isActive ? 'text-white bg-white/10' : 'text-slate-500 hover:text-white hover:bg-slate-800/50 cursor-pointer'}`}>
              <item.icon size={18} className={isActive ? 'text-white' : ''} />
              {item.label}
              {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />}
            </button>
          );
        })}
      </div>
    </div>
    <div className="px-4 py-4 border-t border-slate-800/60 mt-auto">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-xs font-bold text-white shadow-md shadow-indigo-500/20">A</div>
        <div><div className="text-sm font-medium text-white">Annabelle</div><div className="text-[10px] text-slate-500">Student</div></div>
      </div>
    </div>
  </nav>
);

/* ─── Sidebar Variant K: Divider + Glow + Top Logo ─────────────── */

const SidebarK: React.FC<{ activePage: PortalPage; onNav: (p: PortalPage) => void }> = ({ activePage, onNav }) => (
  <nav className="w-[200px] flex-shrink-0 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 flex flex-col h-screen sticky top-0">
    <div className="pt-6 pb-4 text-center border-b border-slate-800/60">
      <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-sm font-bold text-white mx-auto mb-2 shadow-lg shadow-indigo-500/25">GT</div>
      <div className="text-[10px] font-bold uppercase tracking-[2px] text-slate-500">Germaine</div>
      <div className="text-[10px] font-bold uppercase tracking-[2px] text-slate-500">Tutoring</div>
    </div>
    <div className="flex-1 px-3 mt-4 space-y-4 overflow-y-auto">
      <div>
        <div className="px-3 mb-2 text-[9px] font-bold uppercase tracking-[2px] text-slate-600">Learn</div>
        {navItems.slice(0, 3).map((item) => {
          const isActive = activePage === item.page;
          return (
            <button key={item.label} onClick={() => onNav(item.page)} disabled={false}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium transition-all border-b border-slate-800/50 ${isActive ? 'text-white bg-indigo-500/15 shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-500/20 rounded-xl border-transparent' : item.disabled ? 'text-slate-600 cursor-default' : 'text-slate-400 hover:text-white'}`}>
              <item.icon size={18} className={isActive ? 'text-indigo-300 drop-shadow-[0_0_6px_rgba(129,140,248,0.4)]' : ''} />
              {item.label}
              {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-sm shadow-indigo-400/50" />}
            </button>
          );
        })}
      </div>
      <div>
        <div className="px-3 mb-2 text-[9px] font-bold uppercase tracking-[2px] text-slate-600">Practice</div>
        {navItems.slice(3).map((item) => {
          const isActive = activePage === item.page;
          return (
            <button key={item.label} onClick={() => onNav(item.page)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all ${isActive ? 'text-white bg-white/10' : 'text-slate-500 hover:text-white hover:bg-slate-800/50 cursor-pointer'}`}>
              <item.icon size={18} className={isActive ? 'text-white' : ''} />
              {item.label}
              {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />}
            </button>
          );
        })}
      </div>
    </div>
    <div className="py-4 border-t border-slate-800/60 mt-auto text-center">
      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-xs font-bold text-white mx-auto mb-1 shadow-md shadow-indigo-500/20">A</div>
      <div className="text-[11px] font-medium text-white">Annabelle</div>
      <div className="text-[9px] text-slate-500">Student</div>
    </div>
  </nav>
);

/* ─── Sidebar Variant P: White (Light sidebar) ─────────────────── */

const SidebarP: React.FC<{ activePage: PortalPage; onNav: (p: PortalPage) => void }> = ({ activePage, onNav }) => (
  <nav className="w-[200px] flex-shrink-0 bg-white border-r border-slate-200 text-slate-600 flex flex-col h-screen sticky top-0">
    <div className="pt-6 pb-4 text-center border-b border-slate-100">
      <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-sm font-bold text-white mx-auto mb-2 shadow-md">GT</div>
      <div className="text-[10px] font-bold uppercase tracking-[2px] text-slate-400">Germaine</div>
      <div className="text-[10px] font-bold uppercase tracking-[2px] text-slate-400">Tutoring</div>
    </div>
    <div className="flex-1 px-3 mt-4 space-y-4 overflow-y-auto">
      <div>
        <div className="px-3 mb-2 text-[9px] font-bold uppercase tracking-[2px] text-slate-400">Learn</div>
        {navItems.slice(0, 3).map((item) => {
          const isActive = activePage === item.page;
          return (
            <button key={item.label} onClick={() => onNav(item.page)} disabled={false}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium transition-all border-b border-slate-100 ${isActive ? 'text-slate-900 bg-slate-100 rounded-xl border-transparent shadow-sm' : item.disabled ? 'text-slate-300 cursor-default' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}>
              <item.icon size={18} className={isActive ? 'text-slate-700' : ''} />
              {item.label}
              {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-500" />}
            </button>
          );
        })}
      </div>
      <div>
        <div className="px-3 mb-2 text-[9px] font-bold uppercase tracking-[2px] text-slate-400">Practice</div>
        {navItems.slice(3).map((item) => {
          const isActive = activePage === item.page;
          return (
            <button key={item.label} onClick={() => onNav(item.page)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all ${isActive ? 'text-white bg-white/10' : 'text-slate-500 hover:text-white hover:bg-slate-800/50 cursor-pointer'}`}>
              <item.icon size={18} className={isActive ? 'text-white' : ''} />
              {item.label}
              {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />}
            </button>
          );
        })}
      </div>
    </div>
    <div className="py-4 border-t border-slate-100 mt-auto text-center">
      <div className="w-8 h-8 rounded-xl bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 mx-auto mb-1">A</div>
      <div className="text-[11px] font-medium text-slate-800">Annabelle</div>
      <div className="text-[9px] text-slate-400">Student</div>
    </div>
  </nav>
);

/* ─── Sidebar Variant Q: Ivy (Dark green ivy league) ───────────── */

const SidebarQ: React.FC<{ activePage: PortalPage; onNav: (p: PortalPage) => void }> = ({ activePage, onNav }) => (
  <nav className="w-[200px] flex-shrink-0 bg-gradient-to-b from-[#1a2e25] to-[#152820] text-[#8aab98] flex flex-col h-screen sticky top-0">
    <div className="pt-6 pb-4 text-center border-b border-[#243d32]">
      <div className="w-10 h-10 rounded-xl bg-[#2d5a42] flex items-center justify-center text-sm font-bold text-emerald-200 mx-auto mb-2 shadow-lg shadow-emerald-900/30">GT</div>
      <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#4a7a60]">Germaine</div>
      <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#4a7a60]">Tutoring</div>
    </div>
    <div className="flex-1 px-3 mt-4 space-y-4 overflow-y-auto">
      <div>
        <div className="px-3 mb-2 text-[9px] font-bold uppercase tracking-[2px] text-[#3a6050]">Learn</div>
        {navItems.slice(0, 3).map((item) => {
          const isActive = activePage === item.page;
          return (
            <button key={item.label} onClick={() => onNav(item.page)} disabled={false}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium transition-all border-b border-[#243d32]/60 ${isActive ? 'text-emerald-100 bg-emerald-700/20 shadow-lg shadow-emerald-800/15 ring-1 ring-emerald-600/20 rounded-xl border-transparent' : item.disabled ? 'text-[#2e5040] cursor-default' : 'text-[#6a9a80] hover:text-emerald-200 hover:bg-[#1e3a2e]'}`}>
              <item.icon size={18} className={isActive ? 'text-emerald-300 drop-shadow-[0_0_6px_rgba(52,211,153,0.3)]' : ''} />
              {item.label}
              {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/40" />}
            </button>
          );
        })}
      </div>
      <div>
        <div className="px-3 mb-2 text-[9px] font-bold uppercase tracking-[2px] text-[#3a6050]">Practice</div>
        {navItems.slice(3).map((item) => {
          const isActive = activePage === item.page;
          return (
            <button key={item.label} onClick={() => onNav(item.page)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all ${isActive ? 'text-white bg-white/10' : 'text-slate-500 hover:text-white hover:bg-slate-800/50 cursor-pointer'}`}>
              <item.icon size={18} className={isActive ? 'text-white' : ''} />
              {item.label}
              {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />}
            </button>
          );
        })}
      </div>
    </div>
    <div className="py-4 border-t border-[#243d32] mt-auto text-center">
      <div className="w-8 h-8 rounded-xl bg-[#2d5a42] flex items-center justify-center text-xs font-bold text-emerald-200 mx-auto mb-1 shadow-md shadow-emerald-900/20">A</div>
      <div className="text-[11px] font-medium text-emerald-100">Annabelle</div>
      <div className="text-[9px] text-[#4a7a60]">Student</div>
    </div>
  </nav>
);

/* ─── Sidebar Variant R: Ivy Crest (Shield logo, deep green) ───── */

const SidebarR: React.FC<{ activePage: PortalPage; onNav: (p: PortalPage) => void }> = ({ activePage, onNav }) => (
  <nav className="w-[200px] flex-shrink-0 bg-gradient-to-b from-[#0d1f17] to-[#091510] text-[#7a9e8a] flex flex-col h-screen sticky top-0">
    <div className="pt-6 pb-4 text-center border-b border-[#1a3528]">
      {/* Shield/crest logo */}
      <div className="w-12 h-14 mx-auto mb-2 relative">
        <svg viewBox="0 0 48 56" className="w-full h-full">
          <path d="M24 2 L44 12 L44 32 C44 44 34 52 24 56 C14 52 4 44 4 32 L4 12 Z" fill="#1a3a28" stroke="#2d5a42" strokeWidth="1.5"/>
          <text x="24" y="36" textAnchor="middle" fill="#c4a862" fontSize="16" fontWeight="700" fontFamily="serif">GT</text>
        </svg>
      </div>
      <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#3a6050]">Germaine</div>
      <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#3a6050]">Tutoring</div>
    </div>
    <div className="flex-1 px-3 mt-4 space-y-4 overflow-y-auto">
      <div>
        <div className="px-3 mb-2 text-[9px] font-bold uppercase tracking-[2px] text-[#2a4a3a]">Learn</div>
        {navItems.slice(0, 3).map((item) => {
          const isActive = activePage === item.page;
          return (
            <button key={item.label} onClick={() => onNav(item.page)} disabled={false}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium transition-all border-b border-[#1a3528]/60 ${isActive ? 'text-emerald-100 bg-emerald-800/25 shadow-lg shadow-emerald-900/20 ring-1 ring-emerald-700/30 rounded-xl border-transparent' : item.disabled ? 'text-[#243d32] cursor-default' : 'text-[#5a8a70] hover:text-emerald-200 hover:bg-[#122a1e]'}`}>
              <item.icon size={18} className={isActive ? 'text-emerald-300 drop-shadow-[0_0_4px_rgba(52,211,153,0.2)]' : ''} />
              {item.label}
              {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/40" />}
            </button>
          );
        })}
      </div>
      <div>
        <div className="px-3 mb-2 text-[9px] font-bold uppercase tracking-[2px] text-[#2a4a3a]">Practice</div>
        {navItems.slice(3).map((item) => {
          const isActive = activePage === item.page;
          return (
            <button key={item.label} onClick={() => onNav(item.page)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all ${isActive ? 'text-white bg-white/10' : 'text-slate-500 hover:text-white hover:bg-slate-800/50 cursor-pointer'}`}>
              <item.icon size={18} className={isActive ? 'text-white' : ''} />
              {item.label}
              {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />}
            </button>
          );
        })}
      </div>
    </div>
    <div className="py-4 border-t border-[#1a3528] mt-auto text-center">
      <div className="w-8 h-8 rounded-xl bg-[#1a3a28] flex items-center justify-center text-xs font-bold text-emerald-300 mx-auto mb-1 border border-[#2d5a42]">A</div>
      <div className="text-[11px] font-medium text-emerald-100">Annabelle</div>
      <div className="text-[9px] text-[#3a6050]">Student</div>
    </div>
  </nav>
);

/* ─── Sidebar Variant S: Ivy Serif (Merriweather nav labels) ──── */

const SidebarS: React.FC<{ activePage: PortalPage; onNav: (p: PortalPage) => void }> = ({ activePage, onNav }) => (
  <nav className="w-[210px] flex-shrink-0 bg-gradient-to-b from-[#0f2219] to-[#0a1a12] text-[#7a9e8a] flex flex-col h-screen sticky top-0">
    <div className="pt-6 pb-4 text-center border-b border-[#1a3528]">
      <div className="w-10 h-10 rounded-xl bg-[#1a3a28] flex items-center justify-center text-white mx-auto mb-2 border border-[#2d5a42]" style={{ fontFamily: "'Merriweather', serif", fontSize: '14px', fontWeight: 700 }}>GT</div>
      <div className="text-[11px] font-semibold tracking-[1px] text-[#4a7a60]" style={{ fontFamily: "'Merriweather', serif" }}>Germaine Tutoring</div>
    </div>
    <div className="flex-1 px-3 mt-4 space-y-4 overflow-y-auto">
      <div>
        <div className="px-3 mb-2 text-[9px] font-bold uppercase tracking-[2px] text-[#2a4a3a]">Curriculum</div>
        {navItems.slice(0, 3).map((item) => {
          const isActive = activePage === item.page;
          return (
            <button key={item.label} onClick={() => onNav(item.page)} disabled={false}
              style={{ fontFamily: "'Merriweather', serif" }}
              className={`w-full flex items-center gap-3 px-3 py-3 text-[13px] transition-all border-b border-[#1a3528]/60 ${isActive ? 'text-emerald-100 bg-emerald-800/20 shadow-lg shadow-emerald-900/15 ring-1 ring-emerald-700/25 rounded-xl border-transparent font-semibold' : item.disabled ? 'text-[#2a4a3a] cursor-default font-normal' : 'text-[#5a8a70] hover:text-emerald-200 hover:bg-[#122a1e] font-normal'}`}>
              <item.icon size={17} className={isActive ? 'text-emerald-300' : ''} />
              {item.label}
              {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400" />}
            </button>
          );
        })}
      </div>
      <div>
        <div className="px-3 mb-2 text-[9px] font-bold uppercase tracking-[2px] text-[#2a4a3a]">Practice</div>
        {navItems.slice(3).map((item) => (
          <button key={item.label} disabled={false}
            style={{ fontFamily: "'Merriweather', serif" }}
            className="w-full flex items-center gap-3 px-3 py-3 text-[13px] font-normal text-[#2a4a3a] cursor-default border-b border-[#1a3528]/60">
            <item.icon size={17} />
            {item.label}
          </button>
        ))}
      </div>
    </div>
    <div className="py-4 border-t border-[#1a3528] mt-auto text-center">
      <div className="w-8 h-8 rounded-full bg-[#1a3a28] flex items-center justify-center text-xs font-bold text-emerald-200 mx-auto mb-1 border border-[#2d5a42]">A</div>
      <div className="text-[11px] font-medium text-emerald-100" style={{ fontFamily: "'Merriweather', serif" }}>Annabelle</div>
      <div className="text-[9px] text-[#3a6050]">Student</div>
    </div>
  </nav>
);

/* ─── Sidebar Variant T: Ivy Gold (Green + brass/gold accents) ── */

const SidebarT: React.FC<{ activePage: PortalPage; onNav: (p: PortalPage) => void }> = ({ activePage, onNav }) => (
  <nav className="w-[200px] flex-shrink-0 bg-gradient-to-b from-[#0d1f17] to-[#091510] text-[#7a9e8a] flex flex-col h-screen sticky top-0">
    <div className="pt-6 pb-4 text-center border-b border-[#1a3528]">
      <div className="w-10 h-10 rounded-xl bg-[#1a3a28] flex items-center justify-center mx-auto mb-2 border border-[#c4a862]/30 shadow-lg shadow-[#c4a862]/10">
        <span className="text-sm font-bold text-[#c4a862]" style={{ fontFamily: "'Merriweather', serif" }}>GT</span>
      </div>
      <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#c4a862]/60">Germaine</div>
      <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#c4a862]/60">Tutoring</div>
    </div>
    <div className="flex-1 px-3 mt-4 space-y-4 overflow-y-auto">
      <div>
        <div className="px-3 mb-2 text-[9px] font-bold uppercase tracking-[2px] text-[#c4a862]/40">Learn</div>
        {navItems.slice(0, 3).map((item) => {
          const isActive = activePage === item.page;
          return (
            <button key={item.label} onClick={() => onNav(item.page)} disabled={false}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium transition-all border-b border-[#1a3528]/60 ${isActive ? 'text-[#e8d9a0] bg-[#c4a862]/10 shadow-lg shadow-[#c4a862]/10 ring-1 ring-[#c4a862]/20 rounded-xl border-transparent' : item.disabled ? 'text-[#243d32] cursor-default' : 'text-[#5a8a70] hover:text-[#e8d9a0] hover:bg-[#122a1e]'}`}>
              <item.icon size={18} className={isActive ? 'text-[#c4a862] drop-shadow-[0_0_4px_rgba(196,168,98,0.3)]' : ''} />
              {item.label}
              {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#c4a862] shadow-sm shadow-[#c4a862]/40" />}
            </button>
          );
        })}
      </div>
      <div>
        <div className="px-3 mb-2 text-[9px] font-bold uppercase tracking-[2px] text-[#c4a862]/40">Practice</div>
        {navItems.slice(3).map((item) => {
          const isActive = activePage === item.page;
          return (
            <button key={item.label} onClick={() => onNav(item.page)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all ${isActive ? 'text-white bg-white/10' : 'text-slate-500 hover:text-white hover:bg-slate-800/50 cursor-pointer'}`}>
              <item.icon size={18} className={isActive ? 'text-white' : ''} />
              {item.label}
              {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />}
            </button>
          );
        })}
      </div>
    </div>
    <div className="py-4 border-t border-[#1a3528] mt-auto text-center">
      <div className="w-8 h-8 rounded-xl bg-[#1a3a28] flex items-center justify-center text-xs font-bold text-[#c4a862] mx-auto mb-1 border border-[#c4a862]/20">A</div>
      <div className="text-[11px] font-medium text-[#e8d9a0]">Annabelle</div>
      <div className="text-[9px] text-[#4a7a60]">Student</div>
    </div>
  </nav>
);

/* ─── Color-Themed K variants (same structure, different accent) ── */

interface ColorTheme {
  logoBg: string;
  logoShadow: string;
  activeBg: string;
  activeRing: string;
  activeShadow: string;
  activeText: string;
  activeIcon: string;
  activeIconGlow: string;
  dotBg: string;
  dotShadow: string;
  avatarBg: string;
  avatarShadow: string;
}

const themes: Record<string, ColorTheme> = {
  // Pure White — all white highlights, no color
  gold: {
    logoBg: 'bg-white/15', logoShadow: 'shadow-white/10',
    activeBg: 'bg-white/10', activeRing: 'ring-white/15', activeShadow: 'shadow-white/5',
    activeText: 'text-white', activeIcon: 'text-white', activeIconGlow: '',
    dotBg: 'bg-white', dotShadow: 'shadow-white/30',
    avatarBg: 'bg-white/15', avatarShadow: 'shadow-white/10',
  },
  // Pure Green — all emerald highlights
  teal: {
    logoBg: 'bg-emerald-700', logoShadow: 'shadow-emerald-500/25',
    activeBg: 'bg-emerald-500/15', activeRing: 'ring-emerald-500/20', activeShadow: 'shadow-emerald-500/15',
    activeText: 'text-emerald-200', activeIcon: 'text-emerald-300', activeIconGlow: 'drop-shadow-[0_0_6px_rgba(52,211,153,0.3)]',
    dotBg: 'bg-emerald-400', dotShadow: 'shadow-emerald-400/40',
    avatarBg: 'bg-emerald-700', avatarShadow: 'shadow-emerald-500/20',
  },
  // Green BG + White Text — emerald background glow, white text/dot
  violet: {
    logoBg: 'bg-emerald-700', logoShadow: 'shadow-emerald-500/20',
    activeBg: 'bg-emerald-500/12', activeRing: 'ring-emerald-500/15', activeShadow: 'shadow-emerald-500/10',
    activeText: 'text-white', activeIcon: 'text-emerald-300', activeIconGlow: 'drop-shadow-[0_0_5px_rgba(52,211,153,0.25)]',
    dotBg: 'bg-white', dotShadow: 'shadow-white/30',
    avatarBg: 'bg-emerald-700', avatarShadow: 'shadow-emerald-500/15',
  },
  // White BG + Green Text — white background glow, green text/dot
  mono: {
    logoBg: 'bg-white/15', logoShadow: 'shadow-white/10',
    activeBg: 'bg-white/10', activeRing: 'ring-white/12', activeShadow: 'shadow-white/5',
    activeText: 'text-emerald-200', activeIcon: 'text-white', activeIconGlow: '',
    dotBg: 'bg-emerald-400', dotShadow: 'shadow-emerald-400/30',
    avatarBg: 'bg-white/15', avatarShadow: 'shadow-white/10',
  },
};

const SidebarThemed: React.FC<{ activePage: PortalPage; onNav: (p: PortalPage) => void; theme: ColorTheme }> = ({ activePage, onNav, theme: t }) => (
  <nav className="w-[200px] flex-shrink-0 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 flex flex-col h-screen sticky top-0">
    <div className="pt-6 pb-4 text-center border-b border-slate-800/60">
      <div className={`w-10 h-10 rounded-xl ${t.logoBg} flex items-center justify-center text-sm font-bold text-white mx-auto mb-2 shadow-lg ${t.logoShadow}`}>GT</div>
      <div className="text-[10px] font-bold uppercase tracking-[2px] text-slate-500">Germaine</div>
      <div className="text-[10px] font-bold uppercase tracking-[2px] text-slate-500">Tutoring</div>
    </div>
    <div className="flex-1 px-3 mt-4 space-y-4 overflow-y-auto">
      <div>
        <div className="px-3 mb-2 text-[9px] font-bold uppercase tracking-[2px] text-slate-600">Learn</div>
        {navItems.slice(0, 3).map((item) => {
          const isActive = activePage === item.page;
          return (
            <button key={item.label} onClick={() => onNav(item.page)} disabled={false}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium transition-all border-b border-slate-800/50 ${isActive ? `${t.activeText} ${t.activeBg} shadow-lg ${t.activeShadow} ring-1 ${t.activeRing} rounded-xl border-transparent` : item.disabled ? 'text-slate-600 cursor-default' : 'text-slate-400 hover:text-white'}`}>
              <item.icon size={18} className={isActive ? `${t.activeIcon} ${t.activeIconGlow}` : ''} />
              {item.label}
              {isActive && <span className={`ml-auto w-1.5 h-1.5 rounded-full ${t.dotBg} shadow-sm ${t.dotShadow}`} />}
            </button>
          );
        })}
      </div>
      <div>
        <div className="px-3 mb-2 text-[9px] font-bold uppercase tracking-[2px] text-slate-600">Practice</div>
        {navItems.slice(3).map((item) => {
          const isActive = activePage === item.page;
          return (
            <button key={item.label} onClick={() => onNav(item.page)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all ${isActive ? 'text-white bg-white/10' : 'text-slate-500 hover:text-white hover:bg-slate-800/50 cursor-pointer'}`}>
              <item.icon size={18} className={isActive ? 'text-white' : ''} />
              {item.label}
              {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />}
            </button>
          );
        })}
      </div>
    </div>
    <div className="py-4 border-t border-slate-800/60 mt-auto text-center">
      <div className={`w-8 h-8 rounded-xl ${t.avatarBg} flex items-center justify-center text-xs font-bold text-white mx-auto mb-1 shadow-md ${t.avatarShadow}`}>A</div>
      <div className="text-[11px] font-medium text-white">Annabelle</div>
      <div className="text-[9px] text-slate-500">Student</div>
    </div>
  </nav>
);

/* ─── Sidebar Selector ─────────────────────────────────────────── */

export type SidebarVariant = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T';

const LeftSidebar: React.FC<{ activePage: PortalPage; onNav: (p: PortalPage) => void; variant?: SidebarVariant }> = ({ activePage, onNav, variant = 'L' }) => {
  const p = { activePage, onNav };
  switch (variant) {
    case 'A': return <SidebarA {...p} />;
    case 'B': return <SidebarB {...p} />;
    case 'C': return <SidebarC {...p} />;
    case 'D': return <SidebarD {...p} />;
    case 'E': return <SidebarE {...p} />;
    case 'F': return <SidebarF {...p} />;
    case 'G': return <SidebarG {...p} />;
    case 'H': return <SidebarH {...p} />;
    case 'I': return <SidebarI {...p} />;
    case 'J': return <SidebarJ {...p} />;
    case 'L': return <SidebarThemed {...p} theme={themes.gold} />;
    case 'M': return <SidebarThemed {...p} theme={themes.teal} />;
    case 'N': return <SidebarThemed {...p} theme={themes.violet} />;
    case 'O': return <SidebarThemed {...p} theme={themes.mono} />;
    case 'P': return <SidebarP {...p} />;
    case 'Q': return <SidebarQ {...p} />;
    case 'R': return <SidebarR {...p} />;
    case 'S': return <SidebarS {...p} />;
    case 'T': return <SidebarT {...p} />;
    default: return <SidebarK {...p} />;
  }
};

/* ─── Lesson Header Block ──────────────────────────────────────── */

const LessonHeader: React.FC<{
  moduleTitle: string;
  lessonTitle: string;
  moduleId: number;
  lessonIndex: number;
  totalLessons: number;
  onBack: () => void;
}> = ({ moduleTitle, lessonTitle, moduleId, lessonIndex, totalLessons, onBack }) => (
  <div>
    <div className="flex flex-wrap items-center gap-3 mb-5">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to {moduleTitle}
      </button>
    </div>

    <section className="rounded-[36px] border-[1.5px] border-slate-300 bg-white px-7 py-7 shadow-[0_4px_16px_rgba(15,23,42,0.06)] sm:px-8 mb-6">
      <div className="flex flex-col gap-5">
        <div className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">
            {moduleTitle}
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
            {lessonTitle}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <span className="rounded-full border border-slate-200 bg-[#fbfaf7] px-3 py-1">
              Module {moduleId}
            </span>
            <span className="rounded-full border border-slate-200 bg-[#fbfaf7] px-3 py-1">
              Lesson {lessonIndex + 1} of {totalLessons}
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
);

/* ─── Right Sidebar Lesson Tracker ─────────────────────────────── */

const LessonTracker: React.FC<{
  moduleTitle: string;
  lessons: Array<{ id: string; title: string }>;
  activeLessonId: string | null;
  onSelectLesson: (id: string) => void;
}> = ({ moduleTitle, lessons, activeLessonId, onSelectLesson }) => (
  <aside className="hidden space-y-4 lg:sticky lg:top-6 lg:self-start lg:block">
    <section className="rounded-[28px] border-[1.5px] border-slate-300 bg-white p-4 shadow-[0_4px_16px_rgba(15,23,42,0.06)]">
      <div className="rounded-[22px] border-[1.5px] border-slate-300 bg-[#fbfaf7] px-4 py-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">
          Module Lessons
        </p>
        <p className="mt-2 text-sm font-semibold text-slate-900">{moduleTitle}</p>
        <p className="mt-1 text-sm leading-6 text-slate-500">
          Move between lesson pages inside this module.
        </p>
      </div>

      <div className="mt-4 space-y-2">
        {lessons.map((lesson, idx) => {
          const isActive = activeLessonId === lesson.id;
          return (
            <button
              key={lesson.id}
              type="button"
              aria-current={isActive ? 'page' : undefined}
              onClick={() => onSelectLesson(lesson.id)}
              className={`w-full rounded-[18px] border px-3 py-3 text-left transition ${
                isActive
                  ? 'border-slate-950 bg-slate-950 text-white shadow-sm'
                  : 'border-slate-200 bg-[#fbfaf7] text-slate-700 hover:border-slate-300 hover:bg-white'
              }`}
            >
              <span
                className={`block text-[11px] font-bold uppercase tracking-[0.18em] ${
                  isActive ? 'text-white/70' : 'text-slate-400'
                }`}
              >
                Lesson {idx + 1}
              </span>
              <span className="mt-1 block text-sm font-semibold leading-5">
                {lesson.title}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  </aside>
);

/* ─── Module Overview (Lesson Selector) ────────────────────────── */

const WebsiteModuleOverview: React.FC<{
  moduleData: ModuleData;
  moduleId: number;
  onSelectLesson: (id: string) => void;
  onBack: () => void;
  lessons: Array<{ id: string; title: string }>;
}> = ({ moduleData, moduleId, onSelectLesson, onBack, lessons }) => (
  <div>
    <button
      onClick={onBack}
      className="flex items-center gap-1.5 text-sm text-indigo-600 hover:text-indigo-700 font-medium mb-4 transition-colors"
    >
      <ArrowLeft size={16} />
      Back to {moduleData.category === 'RC' ? 'Reading Comprehension' : 'Logical Reasoning'}
    </button>
    <div className="rounded-2xl border-[1.5px] border-slate-300 bg-[#f8fafc] px-8 py-6 mb-8">
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="text-[11px] font-bold uppercase tracking-[2.64px] text-slate-400 mb-2">
            Module {moduleId}
          </div>
          <h1
            className="text-[40px] font-semibold leading-tight tracking-[-0.04em] text-[#020617] mb-3"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            {moduleData.title}
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">{moduleData.description}</p>
        </div>
        <div className="flex items-stretch gap-0 flex-shrink-0">
          {moduleData.unit && (
            <div className="border-[1.5px] border-slate-300 rounded-l-xl bg-white px-5 py-3 text-center min-w-[100px]">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Unit</div>
              <div className="text-sm font-medium text-slate-700">{moduleData.unit}</div>
            </div>
          )}
          <div className="border-[1.5px] border-slate-300 bg-white px-5 py-3 text-center min-w-[80px] -ml-px">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Lessons</div>
            <div className="text-2xl font-bold text-slate-900">{lessons.length}</div>
          </div>
          <div className="border-[1.5px] border-slate-300 rounded-r-xl bg-slate-900 text-white px-5 py-3 text-center min-w-[100px] -ml-px">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-1">Completed</div>
            <div className="text-2xl font-bold">0</div>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-2">
      <div className="text-[11px] font-bold uppercase tracking-[2.64px] text-slate-400 mb-1">Module Pages</div>
      <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "'Merriweather', serif" }}>
        Published lesson pages
      </h2>
    </div>
    <div className="rounded-2xl border-[1.5px] border-slate-300 bg-white overflow-hidden">
      {lessons.map((lesson, idx) => (
        <div
          key={lesson.id}
          className="flex items-center justify-between px-6 py-4 border-b border-slate-100 last:border-b-0"
        >
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[1.98px] text-slate-400 w-14">
              Part {idx + 1}
            </span>
            <span className="text-base font-semibold text-slate-800" style={{ fontFamily: "'Merriweather', serif" }}>
              {lesson.title}
            </span>
          </div>
          <button
            onClick={() => onSelectLesson(lesson.id)}
            className="rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Open Lesson
          </button>
        </div>
      ))}
    </div>
  </div>
);

/* ─── Course Overview (Module List by Unit) ────────────────────── */

const CourseOverview: React.FC<{
  modules: WebsiteShellProps['modules'];
  category: 'LR' | 'RC';
  onSelectModule: (id: number) => void;
}> = ({ modules, category, onSelectModule }) => {
  // Website only publishes modules 1-20 for LR. Modules 21+ (Causal, Conditional, Math) are Coming Soon.
  const WEBSITE_LR_MAX = 20;
  const filtered = modules.filter((m) => {
    if (m.category !== category) return false;
    if (category === 'LR' && m.id > WEBSITE_LR_MAX) return false;
    return (websiteLessonCatalog[m.id] ?? []).length > 0;
  });
  const title = category === 'LR' ? 'Logical Reasoning' : 'Reading Comprehension';
  const description = category === 'LR'
    ? 'A complete LR curriculum organized by unit, with every module and practice set available from one place.'
    : 'A complete RC curriculum organized by unit, with every passage and reference guide available from one place.';

  // Use website catalog for lesson counts (module.lessons may be empty from lazy loading)
  const getLessonCount = (modId: number) => (websiteLessonCatalog[modId] ?? []).length;

  // Strip "MODULE N:" prefix from catalog titles for display
  const cleanTitle = (title: string) => title.replace(/^MODULE \d+:\s*/i, '').replace(/^Section \d+:\s*/i, '');

  // Group by unit
  const units: Array<{ unit: string; modules: typeof filtered }> = [];
  const unitMap = new Map<string, typeof filtered>();
  for (const mod of filtered) {
    const u = mod.unit || 'Other';
    if (!unitMap.has(u)) unitMap.set(u, []);
    unitMap.get(u)!.push(mod);
  }
  unitMap.forEach((mods, unit) => units.push({ unit, modules: mods }));

  const totalLessons = filtered.reduce((sum, m) => sum + getLessonCount(m.id), 0);

  return (
    <div>
      {/* Header */}
      <div className="rounded-2xl border-[1.5px] border-slate-300 bg-[#f8fafc] px-8 py-6 mb-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[2.64px] text-slate-400 mb-2">
              Course Overview
            </div>
            <h1
              className="text-[40px] font-semibold leading-tight tracking-[-0.04em] text-[#020617] mb-3"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              {title}
            </h1>
            <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">{description}</p>
          </div>
          <div className="flex items-stretch gap-0 flex-shrink-0 rounded-2xl border-[1.5px] border-slate-300 overflow-hidden shadow-[0_4px_16px_rgba(15,23,42,0.06)]">
            <div className="bg-white px-6 py-4 text-center min-w-[100px] border-r border-slate-200">
              <div className="flex items-center justify-center gap-1.5 mb-2">
                <LayoutDashboard size={12} className="text-slate-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Modules</span>
              </div>
              <div className="text-3xl font-bold text-slate-900">{filtered.length}</div>
            </div>
            <div className="bg-white px-6 py-4 text-center min-w-[100px] border-r border-slate-200">
              <div className="flex items-center justify-center gap-1.5 mb-2">
                <FileText size={12} className="text-slate-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Lessons</span>
              </div>
              <div className="text-3xl font-bold text-slate-900">{totalLessons}</div>
            </div>
            <div className="bg-slate-900 px-6 py-4 text-center min-w-[110px]">
              <div className="flex items-center justify-center gap-1.5 mb-2">
                <Clock size={12} className="text-slate-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Estimated</span>
              </div>
              <div className="text-3xl font-bold text-white">~{Math.round(totalLessons * 0.2)}h</div>
            </div>
          </div>
        </div>
      </div>

      {/* Units + Modules */}
      <div className="flex gap-8 items-start">
        {/* Jump to Unit sidebar */}
        <div className="hidden lg:block w-[240px] flex-shrink-0 sticky top-6">
          <div className="rounded-2xl border-[1.5px] border-slate-300 bg-white p-4 shadow-[0_4px_16px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-2 mb-3">
              <Target size={14} className="text-slate-400" />
              <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-slate-400">Jump to Unit</span>
            </div>
            <div className="space-y-1">
              {units.map(({ unit, modules: mods }) => (
                <button
                  key={unit}
                  onClick={() => {
                    document.getElementById(`unit-${unit}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors text-left"
                >
                  <div>
                    <div className="font-medium">{unit}</div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-400">
                      {mods.reduce((s, m) => s + getLessonCount(m.id), 0)} Lessons
                    </div>
                  </div>
                  <span className="text-xs text-slate-400">{mods.length}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Module cards */}
        <div className="flex-1 space-y-10">
          {units.map(({ unit, modules: mods }, unitIdx) => (
            <div key={unit} id={`unit-${unit}`}>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-500">
                  {String(unitIdx + 1).padStart(2, '0')}
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[2px] text-slate-400">Unit</div>
                  <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "'Merriweather', serif" }}>
                    {unit}
                  </h2>
                </div>
              </div>
              {(() => {
                const unitLessons = mods.reduce((s, m) => s + getLessonCount(m.id), 0);
                return (
                  <div className="flex items-baseline justify-between mb-4">
                    <div /> {/* spacer to push stats right */}
                    <div className="text-xs text-slate-400 flex gap-4">
                      <span>{mods.length} modules</span>
                      <span>{unitLessons} lessons</span>
                      <span>0 completed</span>
                      <span>~{Math.round(unitLessons * 0.2)}h</span>
                    </div>
                  </div>
                );
              })()}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-12">
                {mods.map((mod) => {
                  const catalogLessons = websiteLessonCatalog[mod.id] ?? [];
                  const firstLesson = catalogLessons[0];
                  return (
                    <div
                      key={mod.id}
                      className="rounded-2xl border-[1.5px] border-slate-300 bg-white p-6 shadow-[0_4px_16px_rgba(15,23,42,0.06)] hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-slate-400">
                          Module {mod.id}
                        </span>
                        <button
                          onClick={() => onSelectModule(mod.id)}
                          className="text-slate-400 hover:text-slate-600"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>
                      <h3
                        className="text-lg font-bold italic text-slate-900 mb-2"
                        style={{ fontFamily: "'Merriweather', serif" }}
                      >
                        {mod.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3">
                        {mod.description}
                      </p>
                      {firstLesson && (
                        <p className="text-xs text-slate-400 mb-3">
                          Next lesson: <span className="font-semibold text-slate-600">{cleanTitle(firstLesson.title)}</span>
                        </p>
                      )}
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2 text-[11px] text-slate-400">
                          <span className="border border-slate-200 bg-slate-50 px-2.5 py-1 rounded-lg">{getLessonCount(mod.id)} lessons</span>
                          <span className="border border-slate-200 bg-slate-50 px-2.5 py-1 rounded-lg">0 completed</span>
                          <span className="border border-slate-200 bg-slate-50 px-2.5 py-1 rounded-lg">~{Math.round(getLessonCount(mod.id) * 0.2)}h</span>
                        </div>
                        <button
                          onClick={() => onSelectModule(mod.id)}
                          className="text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors bg-slate-900 hover:bg-slate-800"
                        >
                          Open Module
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── Course Selector (LR / RC Chooser) ────────────────────────── */

const lrFocusPoints = [
  'Argument structure and conclusion recognition',
  'Question family execution and answer elimination',
  'Transferable reasoning habits across LR sets',
];
const rcFocusPoints = [
  'Passage structure and main idea control',
  'Viewpoint shifts and comparative reading',
  'Support verification inside dense passages',
];

const CourseSelector: React.FC<{
  modules: WebsiteShellProps['modules'];
  onSelect: (category: 'LR' | 'RC') => void;
}> = ({ modules, onSelect }) => {
  const lrCount = modules.filter((m) => m.category === 'LR' && (websiteLessonCatalog[m.id] ?? []).length > 0).length;
  const rcCount = modules.filter((m) => m.category === 'RC' && (websiteLessonCatalog[m.id] ?? []).length > 0).length;

  return (
    <div className="max-w-[1100px] mx-auto py-8">
      {/* Header */}
      <div className="mb-10">
        <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400 mb-3">Course</div>
        <h1
          className="text-[2.2rem] sm:text-[2.8rem] font-semibold leading-tight tracking-[-0.05em] text-slate-950 mb-3"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Choose Your Study Area
        </h1>
        <p className="text-[15px] leading-7 text-slate-600 sm:text-base">Choose the section you want to study.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-stretch">
        {/* ── LR Card ─────────────────────────────── */}
        <button
          onClick={() => onSelect('LR')}
          className="group relative w-full overflow-hidden rounded-[28px] border border-[#d7dee7] bg-white text-left shadow-sm hover:shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fb4d8] focus-visible:ring-offset-2 lg:rounded-[32px]"
        >
          <div className="px-5 py-5 pr-16 sm:px-6 sm:py-6 sm:pr-20 lg:px-7 lg:py-6 lg:pr-24 xl:px-8 xl:py-7 xl:pr-24">
            {/* Top row: badges */}
            <div className="flex items-center gap-3 mb-5 lg:mb-6">
              <span className="inline-flex items-center rounded-full border border-[#d6dfeb] bg-[#f4f8fd] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#23334b]">
                LR
              </span>
              <span className="inline-flex items-center rounded-full border border-[#d6dfeb] bg-[#f4f8fd] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#23334b]">
                {lrCount} modules
              </span>
            </div>

            {/* Icon + Chevron (right column) */}
            <div className="absolute right-5 top-5 flex flex-col items-center gap-4 sm:right-6 lg:right-7 xl:right-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-[16px] border border-[#d6dfeb] bg-[#f4f8fd] text-[#203149] transition duration-300 lg:h-14 lg:w-14 lg:rounded-[18px]">
                <Lightbulb className="h-5 w-5 lg:h-6 lg:w-6" />
              </span>
            </div>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 sm:right-6 lg:right-7 xl:right-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition duration-200 group-hover:border-slate-300 group-hover:text-slate-700 lg:h-12 lg:w-12">
                <ChevronRight className="h-5 w-5" />
              </span>
            </div>

            {/* Title */}
            <h2
              className="mt-1 text-[1.65rem] font-semibold tracking-[-0.04em] text-[#23334b] sm:text-[2rem] lg:mt-2 lg:text-[2.15rem] lg:leading-[1.04] xl:text-[2.4rem]"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Logical Reasoning
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-[34rem] text-[15px] leading-7 text-slate-600 lg:text-[16px]">
              Choose this when you want to work on the LSAT Logical Reasoning section. It opens the LR modules, drills, and linked question sets built around arguments, question families, and answer-choice evaluation.
            </p>

            {/* Focus points */}
            <ul className="mt-4 flex max-w-[40rem] flex-wrap gap-x-4 gap-y-1.5 text-[13px] leading-5 text-slate-700">
              {lrFocusPoints.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Support note */}
            <p className="mt-4 max-w-[34rem] text-[13px] leading-5 text-slate-500">
              LR lessons, module pages, drills, and question-linked study built specifically for Logical Reasoning work.
            </p>
          </div>
        </button>

        {/* ── RC Card ─────────────────────────────── */}
        <button
          onClick={() => onSelect('RC')}
          className="group relative w-full overflow-hidden rounded-[28px] border border-slate-700/40 bg-[#39435b] text-left text-white shadow-sm hover:shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 lg:rounded-[32px]"
        >
          <div className="px-5 py-5 pr-16 sm:px-6 sm:py-6 sm:pr-20 lg:px-7 lg:py-6 lg:pr-24 xl:px-8 xl:py-7 xl:pr-24">
            {/* Top row: badges */}
            <div className="flex items-center gap-3 mb-5 lg:mb-6">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                RC
              </span>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                {rcCount} modules
              </span>
            </div>

            {/* Icon + Chevron (right column) */}
            <div className="absolute right-5 top-5 flex flex-col items-center gap-4 sm:right-6 lg:right-7 xl:right-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-[16px] border border-white/10 bg-white/[0.08] text-white transition duration-300 lg:h-14 lg:w-14 lg:rounded-[18px]">
                <FileText className="h-5 w-5 lg:h-6 lg:w-6" />
              </span>
            </div>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 sm:right-6 lg:right-7 xl:right-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-white/80 transition duration-200 group-hover:bg-white/[0.12] lg:h-12 lg:w-12">
                <ChevronRight className="h-5 w-5" />
              </span>
            </div>

            {/* Title */}
            <h2
              className="mt-1 text-[1.65rem] font-semibold tracking-[-0.04em] text-white sm:text-[2rem] lg:mt-2 lg:text-[2.15rem] lg:leading-[1.04] xl:text-[2.4rem]"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Reading Comprehension
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-[34rem] text-[15px] leading-7 text-white/[0.78] lg:text-[16px]">
              Choose this when you want to work on the LSAT Reading Comprehension section. It opens the RC modules, passage lessons, and linked question work built around passage reading, viewpoint tracking, and support use.
            </p>

            {/* Focus points */}
            <ul className="mt-4 flex max-w-[40rem] flex-wrap gap-x-4 gap-y-1.5 text-[13px] leading-5 text-white/[0.82]">
              {rcFocusPoints.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/[0.55]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Support note */}
            <p className="mt-4 max-w-[34rem] text-[13px] leading-5 text-white/[0.68]">
              RC lessons, passage modules, comparative reading work, and question-linked study built specifically for Reading Comprehension.
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

/* ─── Variant arrays (must be after component definitions) ─────── */


/* ─── Custom Scroll Indicator ──────────────────────────────────── */

const ScrollIndicator: React.FC<{ scrollRef: React.RefObject<HTMLDivElement | null> }> = ({ scrollRef }) => {
  const thumbRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbTop, setThumbTop] = useState(0);
  const isDragging = useRef(false);
  const dragStartY = useRef(0);
  const dragStartScroll = useRef(0);

  const update = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    if (scrollHeight <= clientHeight) { setVisible(false); return; }
    setVisible(true);
    const trackH = clientHeight - 16; // 8px padding top+bottom
    const ratio = clientHeight / scrollHeight;
    const tH = Math.max(ratio * trackH, 36);
    const scrollFraction = scrollTop / (scrollHeight - clientHeight);
    const tTop = scrollFraction * (trackH - tH) + 8;
    setThumbHeight(tH);
    setThumbTop(tTop);
  }, [scrollRef]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    update();
    el.addEventListener('scroll', update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => { el.removeEventListener('scroll', update); ro.disconnect(); };
  }, [scrollRef, update]);

  // Drag handling
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isDragging.current || !scrollRef.current) return;
      const el = scrollRef.current;
      const trackH = el.clientHeight - 16;
      const ratio = el.clientHeight / el.scrollHeight;
      const tH = Math.max(ratio * trackH, 36);
      const delta = e.clientY - dragStartY.current;
      const scrollRange = el.scrollHeight - el.clientHeight;
      const trackRange = trackH - tH;
      el.scrollTop = dragStartScroll.current + (delta / trackRange) * scrollRange;
    };
    const onUp = () => { isDragging.current = false; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
  }, [scrollRef]);

  if (!visible) return null;

  return (
    <div
      ref={trackRef}
      className="absolute right-1 top-0 bottom-0 z-50 w-[7px]"
      onMouseDown={(e) => {
        // Click-to-jump on track
        const el = scrollRef.current;
        if (!el || e.target === thumbRef.current) return;
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const clickY = e.clientY - rect.top;
        const fraction = clickY / rect.height;
        el.scrollTop = fraction * (el.scrollHeight - el.clientHeight);
      }}
    >
      <div
        ref={thumbRef}
        className="absolute right-0 w-[7px] cursor-pointer rounded-full bg-slate-400/50 transition-colors hover:bg-slate-400/80 active:bg-slate-500/80"
        style={{ top: thumbTop, height: thumbHeight }}
        onMouseDown={(e) => {
          e.preventDefault();
          isDragging.current = true;
          dragStartY.current = e.clientY;
          dragStartScroll.current = scrollRef.current?.scrollTop ?? 0;
        }}
      />
    </div>
  );
};

/* ─── Main WebsiteShell ────────────────────────────────────────── */

export const WebsiteShell: React.FC<WebsiteShellProps> = ({
  modules,
  activeModuleId,
  activeLessonId,
  onSelectModule,
  onSelectLesson,
  onGoHome,
  activeModuleData,
  isLessonComplete: _isLessonComplete,
  children,
}) => {
  const navigate = useNavigate();
  const { sidebarVariant } = useViewSettings();
  const [selectedCategory, setSelectedCategory] = useState<'LR' | 'RC' | null>(
    activeModuleData ? activeModuleData.category as 'LR' | 'RC' : null
  );
  const [activePage, setActivePage] = useState<PortalPage>(
    activeModuleId ? 'course' : 'course'
  );

  // Get website lessons for current module
  const websiteLessons = activeModuleId ? websiteLessonCatalog[activeModuleId] ?? [] : [];
  const activeLessonIndex = activeLessonId ? websiteLessons.findIndex((l) => l.id === activeLessonId) : -1;
  const activeLesson = activeLessonIndex >= 0 ? websiteLessons[activeLessonIndex] : null;

  // Get the mastery course lesson title (more descriptive than catalog title)
  const masteryLesson = activeModuleData?.lessons.find((l) => l.id === activeLessonId);
  const displayLessonTitle = masteryLesson?.title
    ? `${masteryLesson.title}`
    : activeLesson?.title ?? '';

  const isOverview = !activeLessonId && !!activeModuleData;
  const isLesson = !!activeLessonId && !!activeModuleData;

  const handleNav = (page: PortalPage) => {
    setActivePage(page);
    if (page === 'course') setSelectedCategory(null);
    onGoHome();
  };

  // When a module/lesson is active, force page to 'course'
  const effectivePage = activeModuleId ? 'course' : activePage;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [dashboardVariant, setDashboardVariant] = useState('B');
  /* sessionsVariant removed — locked to Light Sidebar */
  const [reviewView, setReviewView] = useState<'landing' | 'waj' | 'br'>('landing');

  // Determine mobile title based on active page
  const mobileTitle = isLesson
    ? displayLessonTitle
    : isOverview && activeModuleData
      ? activeModuleData.title
      : effectivePage === 'dashboard'
        ? 'Dashboard'
        : effectivePage === 'course'
          ? 'Course'
          : effectivePage === 'questions'
            ? 'Questions'
            : effectivePage === 'homework'
              ? 'Homework'
              : effectivePage === 'review'
                ? 'Review'
                : effectivePage === 'sessions'
                  ? 'Past Sessions'
                  : 'Student Portal';

  // Previous lesson for nav
  const previousLesson = activeLessonIndex > 0 ? websiteLessons[activeLessonIndex - 1] : null;
  const nextLesson = activeLessonIndex < websiteLessons.length - 1 ? websiteLessons[activeLessonIndex + 1] : null;

  return (
    <div className="h-screen bg-[#edf3f8] website-shell" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <div className="flex h-screen">
        {/* Left Sidebar — hidden on mobile */}
        <div className="hidden lg:block">
          <LeftSidebar activePage={effectivePage} onNav={handleNav} variant={sidebarVariant} />
        </div>

        {/* Mobile sidebar overlay */}
        <div
          className={`fixed inset-0 z-40 bg-[#06070f]/70 backdrop-blur-sm transition lg:hidden ${mobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className={`fixed inset-y-0 left-0 z-50 transition-transform duration-200 lg:hidden ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <LeftSidebar activePage={effectivePage} onNav={(p) => { handleNav(p); setMobileMenuOpen(false); }} variant={sidebarVariant} />
        </div>

        {/* Main Content Area */}
        <div className="relative flex min-w-0 flex-1 flex-col">
          <ScrollIndicator scrollRef={scrollContainerRef} />
          <div ref={scrollContainerRef} className="website-scroll absolute inset-0 overflow-y-auto flex flex-col bg-[linear-gradient(180deg,#f4f8fd_0%,#edf3f8_100%)]">
          {/* Mobile Header */}
          <header className="sticky top-0 z-20 border-b border-slate-900/8 bg-[#f4f8fd]/92 backdrop-blur lg:hidden">
            <div className="flex items-center justify-between gap-4 px-4 py-4">
              <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-slate-400">
                  Germaine Tutoring
                </p>
                <p className="mt-1 truncate text-lg font-semibold tracking-[-0.03em] text-slate-950">
                  {mobileTitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:text-slate-950"
                aria-label="Open navigation"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </header>

          {/* Settings gear — floating */}
          <div className="sticky top-0 z-50 hidden justify-end p-3 pointer-events-none lg:flex">
            <div className="pointer-events-auto">
              <ViewSettingsPopover />
            </div>
          </div>

          <main className="flex-1 px-4 pt-5 pb-28 sm:px-5 md:px-8 md:py-8 lg:pb-10 xl:px-10">
            <div className="w-full max-w-[1440px] mx-auto">
              {isLesson && activeModuleData && activeLesson ? (
                /* ── Lesson View ──────────────────────────── */
                <>
                  <LessonHeader
                    moduleTitle={activeModuleData.title}
                    lessonTitle={displayLessonTitle}
                    moduleId={activeModuleData.id}
                    lessonIndex={activeLessonIndex}
                    totalLessons={websiteLessons.length}
                    onBack={() => navigate(`/module/${activeModuleData.id}`)}
                  />
                  <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_272px] xl:grid-cols-[minmax(0,1fr)_288px] 2xl:grid-cols-[minmax(0,1fr)_300px]">
                    <div className="space-y-6">
                      <section className="rounded-[30px] border-[1.5px] border-slate-300 bg-[#fcfbf8] shadow-[0_4px_16px_rgba(15,23,42,0.06)]">
                        <div className="mx-auto max-w-[840px] px-6 py-7 lg:px-7">{children}</div>
                      </section>

                      {/* Prev / Next lesson nav */}
                      <div className="flex items-center justify-between gap-4 rounded-[28px] border-[1.5px] border-slate-300 bg-white px-5 py-4 shadow-[0_4px_16px_rgba(15,23,42,0.06)]">
                        <div>
                          {previousLesson ? (
                            <button
                              type="button"
                              onClick={() => onSelectLesson(previousLesson.id)}
                              className="flex items-start gap-2 rounded-[18px] px-3 py-2 text-left text-slate-600 transition hover:bg-slate-50"
                            >
                              <ChevronLeft size={16} className="mt-0.5 shrink-0" />
                              <span className="min-w-0">
                                <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                                  Previous lesson
                                </span>
                                <span className="block max-w-[220px] truncate text-sm font-semibold text-slate-700">
                                  {previousLesson.title}
                                </span>
                              </span>
                            </button>
                          ) : null}
                        </div>
                        <div>
                          {nextLesson ? (
                            <button
                              type="button"
                              onClick={() => onSelectLesson(nextLesson.id)}
                              className="flex items-start gap-2 rounded-[18px] px-3 py-2 text-right text-slate-600 transition hover:bg-slate-50"
                            >
                              <span className="min-w-0">
                                <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                                  Next lesson
                                </span>
                                <span className="block max-w-[220px] truncate text-sm font-semibold text-slate-700">
                                  {nextLesson.title}
                                </span>
                              </span>
                              <ChevronRight size={16} className="mt-0.5 shrink-0" />
                            </button>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <LessonTracker
                      moduleTitle={activeModuleData.title}
                      lessons={websiteLessons}
                      activeLessonId={activeLessonId}
                      onSelectLesson={onSelectLesson}
                    />
                  </div>
                </>
              ) : isOverview && activeModuleData ? (
                /* ── Module Overview (lesson selector) ────── */
                <div className="relative">
                  <WebsiteModuleOverview
                    moduleData={activeModuleData}
                    moduleId={activeModuleData.id}
                    onSelectLesson={onSelectLesson}
                    onBack={onGoHome}
                    lessons={websiteLessons}
                  />
                </div>
              ) : effectivePage === 'dashboard' ? (
                <div className="relative">
                  {/* Dashboard variant selector */}
                  <div className="mb-5 flex flex-wrap items-center gap-1.5 rounded-[18px] border-[1.5px] border-slate-300 bg-white/80 px-3 py-2 shadow-[0_4px_16px_rgba(15,23,42,0.06)] backdrop-blur">
                    <span className="mr-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Layout</span>
                    {DASHBOARD_VARIANTS.map((v) => (
                      <button
                        key={v.key}
                        onClick={() => setDashboardVariant(v.key)}
                        className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition ${dashboardVariant === v.key ? 'bg-[#1b2437] text-white' : 'border border-slate-200 bg-slate-50 text-slate-600 hover:bg-white'}`}
                      >
                        {v.label}
                      </button>
                    ))}
                  </div>
                  {(() => {
                    const ActiveDashboard = DASHBOARD_VARIANTS.find((v) => v.key === dashboardVariant)?.component ?? PortalDashboard;
                    return <ActiveDashboard />;
                  })()}
                </div>
              ) : effectivePage === 'questions' ? (
                <PortalQuestions />
              ) : effectivePage === 'homework' ? (
                <PortalHomeworkB />
              ) : effectivePage === 'review' ? (
                <div>
                  {reviewView === 'landing' ? (
                    <ReviewLandingD onOpenWaj={() => setReviewView('waj')} onOpenBr={() => setReviewView('br')} />
                  ) : reviewView === 'waj' ? (
                    <ReviewWajD onBack={() => setReviewView('landing')} />
                  ) : (
                    <ReviewBrB onBack={() => setReviewView('landing')} />
                  )}
                </div>
              ) : effectivePage === 'sessions' ? (
                <PortalPastSessionsA />
              ) : selectedCategory ? (
                <CourseOverview
                  modules={modules}
                  category={selectedCategory}
                  onSelectModule={onSelectModule}
                />
              ) : (
                <CourseSelector
                  modules={modules}
                  onSelect={setSelectedCategory}
                />
              )}
            </div>
          </main>
          </div>{/* end scroll container */}
        </div>{/* end relative wrapper */}
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-900/10 bg-[#f7fbff]/95 px-2 pb-[calc(env(safe-area-inset-bottom)+0.6rem)] pt-2 backdrop-blur lg:hidden">
        <div
          className="grid gap-1.5"
          style={{ gridTemplateColumns: `repeat(${navItems.length}, minmax(0, 1fr))` }}
        >
          {navItems.map((item) => {
            const isActive = effectivePage === item.page;
            const Icon = item.icon;
            return (
              <button
                key={item.page}
                type="button"
                onClick={() => handleNav(item.page)}
                className="flex flex-col items-center gap-1 rounded-[16px] px-1 py-2"
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-[14px] border transition ${
                    isActive
                      ? 'border-slate-900 bg-slate-900 text-white'
                      : 'border-slate-200 bg-white text-slate-500'
                  }`}
                >
                  <Icon size={18} />
                </span>
                <span className={`text-[9px] font-medium leading-tight ${isActive ? 'text-slate-950' : 'text-slate-500'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
