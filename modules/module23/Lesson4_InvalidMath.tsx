import { Lesson } from '../../types';

export const Lesson4_InvalidMath: Lesson = {
  id: '23-4',
  title: 'Invalid Mathematical Reasoning',
  questionPolicy: 'none',
  content: [
    { type: 'h3', text: 'Lesson 4: Invalid Mathematical Reasoning' },
    {
      type: 'paragraph',
      text: '**Lesson Objective:** Identify the four most common math errors the LSAT embeds in arguments\u2014confusing absolute and relative change, double-counting, base-rate neglect, and percentage-of-a-percentage errors\u2014so you can spot the flaw instantly.',
    },

    { type: 'h4', text: '1. Absolute vs. Relative Change' },
    {
      type: 'paragraph',
      text: '"Sales rose 200%!" sounds dramatic, but 200% of 1 unit is only 2 extra units. Conversely, a "mere 2% drop" in a billion-dollar budget is $20 million. The LSAT exploits the gap between a large percentage on a small base and a small percentage on a large base. Always ask: **what is the base number?**',
    },

    { type: 'h4', text: '2. Double-Counting (Overlapping Sets)' },
    {
      type: 'paragraph',
      text: '"30% of accidents involve speeding; 25% involve alcohol. Therefore 55% involve at least one." This assumes the two groups never overlap. In reality, some accidents involve both, so the true figure could be as low as 30%. Adding percentages of potentially overlapping categories is a classic LSAT trap.',
    },

    { type: 'h4', text: '3. Base-Rate Neglect' },
    {
      type: 'paragraph',
      text: '"99% of infected people test positive. You tested positive, so you\'re almost certainly infected." If only 1 in 10,000 people carry the disease, false positives from the healthy majority vastly outnumber true positives. Ignoring how rare the condition is\u2014the base rate\u2014leads to wildly inflated probability estimates.',
    },

    { type: 'h4', text: '4. Percentage of a Percentage' },
    {
      type: 'paragraph',
      text: '"Crime dropped 50%, then rose 50%, so we\'re back to the original level." Not so: 100 \u2192 50 (\u221250%) \u2192 75 (+50%). The second percentage operates on the new, smaller base. Stacking percentages without tracking the shifting base produces nonsense conclusions.',
    },

    { type: 'hr' },
    { type: 'h4', text: 'Practice Question' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Full Analysis',
      text: "**(C) is correct.** This is base-rate neglect. A rate three times higher sounds significant, but if factory workers are only 2% of the population, their share of total cases is still small. The journalist leaps from a higher *rate* to a claim about *most cases*\u2014ignoring that the general population's larger base produces far more absolute cases.\n\n(A) and (E) introduce causation issues the argument doesn't raise; (B) is plausible but not the core flaw; (D) is irrelevant to the current comparison.",
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h3",
          "text": "Lesson 4: Invalid Mathematical Reasoning"
        },
        {
          "type": "paragraph",
          "text": "**Lesson Objective:** Identify the four most common math errors the LSAT embeds in arguments—confusing absolute and relative change, double-counting, base-rate neglect, and percentage-of-a-percentage errors—so you can spot the flaw instantly."
        },
        {
          "type": "h4",
          "text": "1. Absolute vs. Relative Change"
        },
        {
          "type": "paragraph",
          "text": "\"Sales rose 200%!\" sounds dramatic, but 200% of 1 unit is only 2 extra units. Conversely, a \"mere 2% drop\" in a billion-dollar budget is $20 million. The LSAT exploits the gap between a large percentage on a small base and a small percentage on a large base. Always ask: **what is the base number?**"
        },
        {
          "type": "h4",
          "text": "2. Double-Counting (Overlapping Sets)"
        },
        {
          "type": "paragraph",
          "text": "\"30% of accidents involve speeding; 25% involve alcohol. Therefore 55% involve at least one.\" This assumes the two groups never overlap. In reality, some accidents involve both, so the true figure could be as low as 30%. Adding percentages of potentially overlapping categories is a classic LSAT trap."
        },
        {
          "type": "h4",
          "text": "3. Base-Rate Neglect"
        },
        {
          "type": "paragraph",
          "text": "\"99% of infected people test positive. You tested positive, so you're almost certainly infected.\" If only 1 in 10,000 people carry the disease, false positives from the healthy majority vastly outnumber true positives. Ignoring how rare the condition is—the base rate—leads to wildly inflated probability estimates."
        },
        {
          "type": "h4",
          "text": "4. Percentage of a Percentage"
        },
        {
          "type": "paragraph",
          "text": "\"Crime dropped 50%, then rose 50%, so we're back to the original level.\" Not so: 100 → 50 (−50%) → 75 (+50%). The second percentage operates on the new, smaller base. Stacking percentages without tracking the shifting base produces nonsense conclusions."
        },
        {
          "type": "hr"
        },
        {
          "type": "diff-note",
          "text": "CRITICAL: The Practice Question stimulus and answer choices are completely missing. Only the analysis callout remains. The student cannot attempt this question. Restore the stimulus and answer choices, or replace with a constructed example.",
          "variant": "comment"
        },
        {
          "type": "h4",
          "text": "Practice Question"
        },
        {
          "type": "paragraph",
          "text": "{{+**Try this:** Attempt the question before reading the analysis below.+}}"
        },
        {
          "type": "paragraph",
          "text": "{{!The stimulus and answer choices for this practice question are missing from the website content. Only the analysis is present. A question about a journalist's argument regarding factory workers and disease rates needs to be added here.!}}"
        },
        {
          "type": "callout",
          "title": "Full Analysis",
          "variant": "summary",
          "text": "**(C) is correct.** This is base-rate neglect. A rate three times higher sounds significant, but if factory workers are only 2% of the population, their share of total cases is still small. The journalist leaps from a higher *rate* to a claim about *most cases*—ignoring that the general population's larger base produces far more absolute cases.\n\n(A) and (E) introduce causation issues the argument doesn't raise; (B) is plausible but not the core flaw; (D) is irrelevant to the current comparison."
        },
        {
          "type": "diff-note",
          "text": "Base-rate neglect deserves a worked numerical example (e.g., 1/10,000 prevalence + 99% accurate test → compute actual probability). The current single-paragraph treatment is insufficient for this important concept.",
          "variant": "comment"
        }
      ],
    },
  },
};
