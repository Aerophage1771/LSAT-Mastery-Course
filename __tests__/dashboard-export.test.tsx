import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { Dashboard } from '../components/Dashboard';
import type { ModuleData } from '../types';

vi.mock('../components/ExportControls', () => ({
  ExportControls: ({ onExportText, filename }: { onExportText: () => string; filename: string }) => {
    return <div data-testid={`export-${filename}`}>{onExportText()}</div>;
  },
}));

describe('Dashboard exports', () => {
  it('exports modules with lesson content when full modules are provided', () => {
    const modulesMeta = [
      {
        id: 1,
        title: 'Argument Part',
        category: 'LR',
        description: 'Meta description only',
        unit: 'Unit 1: Identification',
        lessons: [],
        lessonCount: 1,
      },
    ];

    const fullModules: ModuleData[] = [
      {
        id: 1,
        title: 'Argument Part',
        category: 'LR',
        description: 'Full module description',
        unit: 'Unit 1: Identification',
        lessons: [
          {
            id: '1-1',
            title: 'Lesson One',
            content: [{ type: 'paragraph', text: 'Lesson content for export' }],
          },
        ],
      },
    ];

    render(<Dashboard modules={modulesMeta} fullModules={fullModules} onSelectModule={() => {}} />);

    const moduleExport = screen.getByTestId('export-LSAT_Module_1_Argument_Part');
    expect(moduleExport.textContent).toContain('Lesson One');
    expect(moduleExport.textContent).toContain('Lesson content for export');
  });
});
