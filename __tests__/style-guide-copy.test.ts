import { describe, expect, it } from 'vitest';
import { serializeAllStyleGuideContent, serializeBlocks } from '../components/StyleGuideContent';
import type { ContentBlock } from '../types';

describe('style guide copy serialization', () => {
  it('includes RC sections in the full copied style guide', () => {
    const text = serializeAllStyleGuideContent();

    expect(text).toContain('QUESTION + PASSAGE CARD');
    expect(text).toContain('[QUESTION+PASSAGE: Main Idea | PT-119-S-1-P-2-Q-8 | medium]');
    expect(text).toContain('Passage Title: Obasan (PT-119)');
    expect(text).toContain('Joy Kogawa');
    expect(text).toContain('RC Passage Analysis Prompt');
  });

  it('serializes nested accordion content for copied RC references', () => {
    const blocks: ContentBlock[] = [
      {
        type: 'accordion',
        title: 'Passage Reference',
        content: [
          { type: 'h4', text: 'Step 1' },
          { type: 'paragraph', text: 'Break down the argument...' },
        ],
      },
    ];

    const text = serializeBlocks(blocks);

    expect(text).toContain('[Passage Reference]');
    expect(text).toContain('#### Step 1');
    expect(text).toContain('Break down the argument...');
  });
});
