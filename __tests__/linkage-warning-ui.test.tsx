import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { LessonViewer } from '../components/LessonViewer';
import type { ModuleData } from '../types';

vi.mock('../contexts/ProgressContext', () => ({
  useProgressContext: () => ({
    progress: {},
    importProgress: () => true,
  }),
}));

describe('linkage warning UI', () => {
  it('renders sidebar red badge for missing question number', () => {
    Element.prototype.scrollTo = vi.fn();
    Element.prototype.scrollIntoView = vi.fn();
    const moduleData: ModuleData = {
      id: 9,
      title: 'Strengthen',
      category: 'LR',
      description: 'desc',
      unit: 'unit',
      lessons: [{ id: '9-4', title: 'Drill: Analogy [Missing Q#]', content: [] }],
    };

    render(
      <MemoryRouter>
        <Layout
          modules={[{ id: 9, title: 'Strengthen', category: 'LR', description: 'desc', unit: 'unit' }]}
          activeModuleId={9}
          activeLessonId="9-4"
          onSelectModule={() => {}}
          onSelectLesson={() => {}}
          onGoHome={() => {}}
          activeModuleData={moduleData}
          lessonLinkageMeta={{
            '9-4': { ptIds: [], status: 'missing_q_number', displayTitle: 'Drill: Analogy [Missing Q#]', statusLabel: 'Missing Q#' },
          }}
        >
          <div>content</div>
        </Layout>
      </MemoryRouter>,
    );

    expect(screen.getByText('Missing Q#')).toBeInTheDocument();
  });

  it('renders lesson header warning and question-log link', () => {
    render(
      <MemoryRouter>
        <LessonViewer
          title="Drill: Analogy (PT-112-S-4-Q-20)"
          content={[]}
          linkageMeta={{
            ptIds: ['PT-112-S-4-Q-20'],
            status: 'missing_card',
            displayTitle: 'Drill: Analogy (PT-112-S-4-Q-20) [Missing Card]',
            statusLabel: 'Missing Card',
          }}
        />
      </MemoryRouter>,
    );

    expect(screen.getByText('No attached question card (Lesson 4+ requirement).')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View in Question Log: PT-112-S-4-Q-20/i })).toHaveAttribute(
      'href',
      '/question-bank?pt=PT-112-S-4-Q-20',
    );
  });
});
