const PT_QUESTION_REGEX = /PT-\d+-S-\d+-Q-\d+/;
const PT_PASSAGE_REGEX = /PT-\d+-S-\d+-P-\d+/;

/** Extract first PT-ID (question or passage) from a string for display in box header. */
export function extractPtIdFromTitle(title: string): string | undefined {
  const q = title.match(PT_QUESTION_REGEX);
  if (q) return q[0];
  const p = title.match(PT_PASSAGE_REGEX);
  if (p) return p[0];
  return undefined;
}
