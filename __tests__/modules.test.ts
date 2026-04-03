import { describe, it, expect } from 'vitest';

describe('Module registry', () => {
  it('should export all expected modules', async () => {
    const { Module1 } = await import('../modules/Module1');
    expect(Module1).toBeDefined();
    expect(Module1.id).toBe(1);
    expect(Module1.title).toBe('Argument Part');
    expect(Module1.lessons.length).toBeGreaterThan(0);
  });

  it('should have valid lesson structure', async () => {
    const { Module1 } = await import('../modules/Module1');
    for (const lesson of Module1.lessons) {
      expect(lesson.id).toBeTruthy();
      expect(lesson.title).toBeTruthy();
      expect(lesson.content).toBeDefined();
    }
  });
});
