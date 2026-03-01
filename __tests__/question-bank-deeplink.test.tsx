import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { QuestionBank } from '../components/QuestionBank';
import type { DrillReference } from '../types';

describe('QuestionBank deep links', () => {
  it('prefilters and auto-expands by PT query parameter', async () => {
    const references: Record<string, DrillReference> = {
      'PT-112-S-4-Q-20': {
        moduleId: 9,
        lessonId: '9-10',
        moduleTitle: 'Strengthen',
        lessonTitle: 'Drill: Strengthening by Analogy (PT-112-S-4-Q-20)',
      },
    };

    render(
      <MemoryRouter initialEntries={['/question-bank?pt=PT-112-S-4-Q-20']}>
        <Routes>
          <Route path="/question-bank" element={<QuestionBank drillCrossReferences={references} />} />
        </Routes>
      </MemoryRouter>,
    );

    const searchInput = await screen.findByPlaceholderText('Search stimuli, questions, PT IDs…');
    expect(searchInput).toHaveValue('PT-112-S-4-Q-20');
    expect(await screen.findByText(/Module 9:/)).toBeInTheDocument();
  });

  it('shows explicit LR and RC category badges on real question rows', async () => {
    render(
      <MemoryRouter initialEntries={['/question-bank']}>
        <Routes>
          <Route path="/question-bank" element={<QuestionBank drillCrossReferences={{}} />} />
        </Routes>
      </MemoryRouter>,
    );

    expect((await screen.findAllByLabelText('Category: LR')).length).toBeGreaterThan(0);
    expect((await screen.findAllByLabelText('Category: RC')).length).toBeGreaterThan(0);
  });
});
