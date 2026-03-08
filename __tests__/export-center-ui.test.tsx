import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';
import type { ModuleData } from '../types';

vi.mock('../contexts/ProgressContext', () => ({
  useProgressContext: () => ({
    progress: {},
    importProgress: () => true,
  }),
}));

describe('export center UI', () => {
  it('shows separate export actions and keeps scope state per action', () => {
    Element.prototype.scrollTo = vi.fn();
    Element.prototype.scrollIntoView = vi.fn();

    const exportModules: ModuleData[] = [
      {
        id: 1,
        title: 'Argument Part',
        category: 'LR',
        description: 'desc',
        unit: 'Unit 1: Identification',
        lessons: [
          { id: '1-1', title: 'Introduction to Argument Part', content: [] },
        ],
      },
    ];

    render(
      <MemoryRouter>
        <Layout
          modules={[{ id: 1, title: 'Argument Part', category: 'LR', description: 'desc', unit: 'Unit 1: Identification' }]}
          exportModules={exportModules}
          activeModuleId={null}
          activeLessonId={null}
          onSelectModule={() => {}}
          onSelectLesson={() => {}}
          onGoHome={() => {}}
        >
          <div>content</div>
        </Layout>
      </MemoryRouter>,
    );

    fireEvent.click(screen.getAllByLabelText('Open export center')[0]!);

    expect(screen.getByText('Export Curriculum Outline')).toBeInTheDocument();
    expect(screen.getByText('Export Full Course')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Clear filters'));
    expect(screen.getByText('No lessons are currently in scope. Reset to the whole course or choose at least one lesson.')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Export Full Course'));
    expect(screen.getByText('Exports all lesson content with canonical module and lesson names.')).toBeInTheDocument();
    expect(screen.getByText((_content, node) => node?.textContent === '1 lessons selected')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Export Curriculum Outline'));
    expect(screen.getByText('No lessons are currently in scope. Reset to the whole course or choose at least one lesson.')).toBeInTheDocument();
  });
});
