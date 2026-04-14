import React, { useState } from 'react';
import { Lightbulb, Info, ChevronRight, Sparkles, GraduationCap, Quote } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   Lesson Format Lab — 8 rival rendering approaches
   Same content, completely different visual treatment
   ═══════════════════════════════════════════════════════════════ */

/* ── Sample content ──────────────────────────────────────────── */

const SAMPLE = {
  title: 'Introduction: Main Idea',
  subtitle: 'LR to RC: Same Tools, Different Posture',
  paragraphs: [
    'Main Idea questions ask you to identify the central idea of a passage. You want to find the single answer choice that best combines the entire scope of the passage without introducing information that is absent from the passage.',
    'The correct answer must capture the overall perspective the author advances, or the overall perspective the passage mainly develops when the author stays relatively neutral. It must also be stated or strongly supported by the passage.',
    'A good main point will answer the question: "What is the one thing the author most wants me to understand after reading this?"',
  ],
  listItems: [
    'A **problem** and the author\'s proposed **solution**.',
    'A **common theory** and the author\'s **alteration** of it.',
    'An **explanation** for a puzzling phenomenon.',
    'A **comparison** of two or more things to arrive at a judgment.',
    'A **person, work, or development** and what makes it significant, distinctive, or interesting.',
  ],
  bridgeText: 'RC still rewards the same structural habits you use in LR: tracking conclusions, support, competing views, and logical pivots. But the posture changes. In RC, your first job is not to attack the passage sentence by sentence. Your first job is to understand the passage\'s architecture well enough that later questions have somewhere stable to land.',
  breakdownItems: [
    { title: 'Use the same tools', badge: 'Same toolkit', text: 'Track viewpoint ownership, support, contrast, causal claims, and qualifiers just as you would in LR.' },
    { title: 'Adopt a different posture', badge: 'Different posture', text: 'Read first for understanding, blueprint, and orientation. Do not start by hunting for flaws or trying to pre-answer every possible question.' },
    { title: 'Expect temporary blur', badge: 'Calibration', text: 'RC often feels hard because you are holding several paragraphs, voices, and functions at once. Temporary confusion is normal. The fix is a cleaner low-resolution map, not panicked rereading of every detail.' },
  ],
  calloutTitle: 'Why RC Feels Hard',
  calloutText: 'Most RC misses come from one of three things: losing track of who believes what, losing the function of a paragraph, or mistaking supporting detail load for main-point difficulty. The cure is a stable reading method: low-resolution paragraph summaries, perspective tracking, author-opinion tracking, next-paragraph prediction, and a post-reading recap.',
  stemTitle: 'Stem Identification: How to Spot a Main Idea Question',
  stemIntro: 'Main Idea questions can be phrased in a few similar ways. They will usually ask you for a main point/idea/conclusion. Occasionally they will substitute "central" for "main" or directly ask for a "summary."',
  stemItems: [
    { title: 'Direct Phrasing', badge: 'Common', examples: '"Which one of the following most accurately expresses the main point of the passage?" · "Which one of the following best states the main idea of the passage?" · "Which one of the following most accurately states the author\'s main conclusion?"' },
    { title: 'Summary & Conclusion Phrasing', badge: 'Variation', examples: '"Which one of the following most accurately summarizes the passage?" · "The central idea of the passage is..."' },
  ],
  importanceText: 'Main Idea questions appear about 225 times among the last 225 released LSATs, making up approximately 11% of all Reading Comprehension questions, so mastering this question type is critical.',
};

function md(text: string) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code class="px-1 py-0.5 bg-slate-100 text-slate-800 rounded text-[0.85em] font-mono">$1</code>');
}

function Md({ text, className = '' }: { text: string; className?: string }) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: md(text) }} />;
}

/* ═══════════════════════════════════════════════════════════════
   FORMAT 1 — "Medium Editorial"
   Large serif body, minimal chrome, generous whitespace
   ═══════════════════════════════════════════════════════════════ */

function Format1() {
  const S = SAMPLE;
  return (
    <div className="max-w-[680px] mx-auto">
      <h3 className="text-[2rem] font-serif font-bold tracking-[-0.03em] text-slate-950 mb-8">{S.title}</h3>

      {S.paragraphs.map((p, i) => (
        <p key={i} className="text-[20px] leading-[1.7] text-slate-700 mb-6 font-serif"><Md text={p} /></p>
      ))}

      <p className="text-[20px] leading-[1.7] text-slate-700 mb-4 font-serif">This often involves synthesizing:</p>
      <ul className="mb-8 space-y-3 pl-8">
        {S.listItems.map((item, i) => (
          <li key={i} className="text-[20px] leading-[1.7] text-slate-700 list-disc font-serif"><Md text={item} /></li>
        ))}
      </ul>

      <hr className="my-12 border-slate-200" />

      <h4 className="text-[14px] font-sans font-semibold uppercase tracking-[0.12em] text-slate-400 mb-4">{S.subtitle}</h4>
      <p className="text-[20px] leading-[1.7] text-slate-700 mb-8 font-serif">{S.bridgeText}</p>

      <div className="space-y-4 mb-10">
        {S.breakdownItems.map((item, i) => (
          <div key={i} className="border-l-[3px] border-slate-300 pl-6 py-2">
            <p className="font-sans font-semibold text-[15px] text-slate-900 mb-1">{item.title}</p>
            <p className="text-[18px] leading-[1.7] text-slate-600 font-serif">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="my-12 border-l-[4px] border-slate-900 pl-8 py-2">
        <p className="text-[13px] font-sans font-bold uppercase tracking-[0.12em] text-slate-500 mb-3">{S.calloutTitle}</p>
        <p className="text-[19px] leading-[1.7] text-slate-700 font-serif italic">{S.calloutText}</p>
      </div>

      <hr className="my-12 border-slate-200" />

      <h3 className="text-[1.8rem] font-serif font-bold tracking-[-0.03em] text-slate-950 mb-6">{S.stemTitle}</h3>
      <p className="text-[20px] leading-[1.7] text-slate-700 mb-8 font-serif">{S.stemIntro}</p>

      <div className="space-y-4 mb-10">
        {S.stemItems.map((item, i) => (
          <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3 mb-3">
              <p className="font-sans font-semibold text-[16px] text-slate-900">{item.title}</p>
              <span className="text-[11px] font-sans font-semibold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-600">{item.badge}</span>
            </div>
            <p className="text-[17px] leading-[1.7] text-slate-600 font-serif">{item.examples}</p>
          </div>
        ))}
      </div>

      <p className="text-[20px] leading-[1.7] text-slate-700 font-serif"><Md text={S.importanceText} /></p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FORMAT 2 — "Notion Clean"
   Sans-serif, toggle-friendly callouts, clean whitespace
   ═══════════════════════════════════════════════════════════════ */

function Format2() {
  const S = SAMPLE;
  return (
    <div className="max-w-[720px] mx-auto">
      <h3 className="text-[1.75rem] font-semibold tracking-[-0.03em] text-slate-950 mb-6">{S.title}</h3>

      {S.paragraphs.map((p, i) => (
        <p key={i} className="text-[16px] leading-[1.8] text-slate-600 mb-5"><Md text={p} /></p>
      ))}

      <p className="text-[16px] leading-[1.8] text-slate-600 mb-3">This often involves synthesizing:</p>
      <ul className="mb-8 space-y-2 pl-6">
        {S.listItems.map((item, i) => (
          <li key={i} className="text-[16px] leading-[1.8] text-slate-600 list-disc pl-1"><Md text={item} /></li>
        ))}
      </ul>

      <div className="my-8 h-px bg-slate-100" />

      <h4 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-slate-400 mb-5">{S.subtitle}</h4>
      <p className="text-[16px] leading-[1.8] text-slate-600 mb-8">{S.bridgeText}</p>

      <div className="grid gap-3 mb-10">
        {S.breakdownItems.map((item, i) => (
          <div key={i} className="rounded-lg bg-slate-50 px-5 py-4 flex items-start gap-4">
            <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-slate-200 text-[11px] font-bold text-slate-600">{i + 1}</div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <p className="font-semibold text-[15px] text-slate-900">{item.title}</p>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">{item.badge}</span>
              </div>
              <p className="text-[15px] leading-[1.7] text-slate-500">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="my-8 rounded-lg bg-amber-50 border border-amber-200/60 px-5 py-5">
        <div className="flex items-center gap-2 mb-2">
          <Lightbulb className="h-4 w-4 text-amber-500" />
          <p className="font-semibold text-[13px] text-amber-800">{S.calloutTitle}</p>
        </div>
        <p className="text-[15px] leading-[1.75] text-amber-900/70">{S.calloutText}</p>
      </div>

      <div className="my-8 h-px bg-slate-100" />

      <h3 className="text-[1.5rem] font-semibold tracking-[-0.03em] text-slate-950 mb-5">{S.stemTitle}</h3>
      <p className="text-[16px] leading-[1.8] text-slate-600 mb-6">{S.stemIntro}</p>

      <div className="space-y-3 mb-10">
        {S.stemItems.map((item, i) => (
          <div key={i} className="rounded-lg border border-slate-200 px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
              <p className="font-semibold text-[15px] text-slate-900">{item.title}</p>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-700">{item.badge}</span>
            </div>
            <p className="text-[15px] leading-[1.7] text-slate-500">{item.examples}</p>
          </div>
        ))}
      </div>

      <p className="text-[16px] leading-[1.8] text-slate-600"><Md text={S.importanceText} /></p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FORMAT 3 — "Stripe Docs"
   Tight, polished, developer-doc feel, pill badges
   ═══════════════════════════════════════════════════════════════ */

function Format3() {
  const S = SAMPLE;
  return (
    <div className="max-w-[740px] mx-auto">
      <div className="mb-8">
        <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md mb-3">Reading Comprehension</span>
        <h3 className="text-[1.65rem] font-semibold tracking-[-0.04em] text-slate-950">{S.title}</h3>
      </div>

      {S.paragraphs.map((p, i) => (
        <p key={i} className="text-[15px] leading-[1.8] text-slate-600 mb-4"><Md text={p} /></p>
      ))}

      <p className="text-[15px] leading-[1.8] text-slate-600 mb-3">This often involves synthesizing:</p>
      <ul className="mb-6 space-y-1.5 pl-5">
        {S.listItems.map((item, i) => (
          <li key={i} className="text-[15px] leading-[1.75] text-slate-600 list-disc"><Md text={item} /></li>
        ))}
      </ul>

      <div className="my-8 rounded-xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white overflow-hidden">
        <div className="px-5 py-3 border-b border-slate-200 bg-white">
          <p className="text-[13px] font-semibold text-slate-500">{S.subtitle}</p>
        </div>
        <div className="px-5 py-4">
          <p className="text-[15px] leading-[1.75] text-slate-600 mb-5">{S.bridgeText}</p>
          <div className="space-y-2">
            {S.breakdownItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg bg-white border border-slate-100 px-4 py-3">
                <ChevronRight className="h-4 w-4 mt-0.5 text-indigo-400 shrink-0" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[14px] text-slate-900">{item.title}</span>
                    <span className="text-[10px] font-semibold px-2 py-px rounded-full border border-slate-200 text-slate-500">{item.badge}</span>
                  </div>
                  <p className="text-[14px] leading-[1.7] text-slate-500 mt-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-8 rounded-xl bg-indigo-50 border border-indigo-100 px-5 py-4">
        <p className="font-semibold text-[13px] text-indigo-700 mb-2 flex items-center gap-2">
          <Info className="h-4 w-4" /> {S.calloutTitle}
        </p>
        <p className="text-[14px] leading-[1.75] text-indigo-900/70">{S.calloutText}</p>
      </div>

      <div className="my-8 border-t border-slate-200 pt-8">
        <h3 className="text-[1.4rem] font-semibold tracking-[-0.03em] text-slate-950 mb-4">{S.stemTitle}</h3>
        <p className="text-[15px] leading-[1.8] text-slate-600 mb-5">{S.stemIntro}</p>
      </div>

      <div className="rounded-xl border border-slate-200 overflow-hidden mb-8">
        {S.stemItems.map((item, i) => (
          <div key={i} className={`px-5 py-4 ${i > 0 ? 'border-t border-slate-100' : ''}`}>
            <div className="flex items-center gap-2 mb-2">
              <p className="font-semibold text-[14px] text-slate-900">{item.title}</p>
              <span className="text-[10px] font-semibold px-2 py-px rounded-full bg-indigo-100 text-indigo-600">{item.badge}</span>
            </div>
            <p className="text-[14px] leading-[1.7] text-slate-500">{item.examples}</p>
          </div>
        ))}
      </div>

      <p className="text-[15px] leading-[1.8] text-slate-600"><Md text={S.importanceText} /></p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FORMAT 4 — "Apple HIG"
   Generous whitespace, SF-style rounded cards, light bg
   ═══════════════════════════════════════════════════════════════ */

function Format4() {
  const S = SAMPLE;
  return (
    <div className="max-w-[700px] mx-auto">
      <h3 className="text-[2.2rem] font-bold tracking-[-0.04em] text-slate-950 mb-4">{S.title}</h3>
      <div className="h-1 w-16 bg-slate-900 rounded-full mb-10" />

      {S.paragraphs.map((p, i) => (
        <p key={i} className="text-[17px] leading-[1.8] text-slate-600 mb-6"><Md text={p} /></p>
      ))}

      <p className="text-[17px] leading-[1.8] text-slate-600 mb-4">This often involves synthesizing:</p>
      <ul className="mb-10 space-y-3 pl-0">
        {S.listItems.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-[17px] leading-[1.8] text-slate-600">
            <span className="mt-[10px] h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
            <Md text={item} />
          </li>
        ))}
      </ul>

      <div className="my-12">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-400 mb-3">{S.subtitle}</p>
        <p className="text-[17px] leading-[1.8] text-slate-600 mb-8">{S.bridgeText}</p>

        <div className="grid gap-4">
          {S.breakdownItems.map((item, i) => (
            <div key={i} className="rounded-[20px] bg-[#f5f5f7] px-6 py-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white text-slate-500 shadow-sm">{item.badge}</span>
              </div>
              <p className="font-semibold text-[17px] text-slate-900 mb-2">{item.title}</p>
              <p className="text-[16px] leading-[1.7] text-slate-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-12 rounded-[20px] bg-slate-900 px-7 py-6 text-white">
        <p className="font-semibold text-[13px] uppercase tracking-[0.12em] text-white/50 mb-3">{S.calloutTitle}</p>
        <p className="text-[17px] leading-[1.75] text-white/80">{S.calloutText}</p>
      </div>

      <h3 className="text-[1.8rem] font-bold tracking-[-0.04em] text-slate-950 mt-14 mb-4">{S.stemTitle}</h3>
      <div className="h-1 w-12 bg-slate-900 rounded-full mb-8" />
      <p className="text-[17px] leading-[1.8] text-slate-600 mb-8">{S.stemIntro}</p>

      <div className="space-y-4 mb-10">
        {S.stemItems.map((item, i) => (
          <div key={i} className="rounded-[20px] bg-[#f5f5f7] px-6 py-5">
            <div className="flex items-center gap-3 mb-3">
              <p className="font-semibold text-[17px] text-slate-900">{item.title}</p>
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white text-slate-500 shadow-sm">{item.badge}</span>
            </div>
            <p className="text-[16px] leading-[1.7] text-slate-500">{item.examples}</p>
          </div>
        ))}
      </div>

      <p className="text-[17px] leading-[1.8] text-slate-600"><Md text={S.importanceText} /></p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FORMAT 5 — "Textbook with Margin Notes"
   Serif body, left margin for annotations/badges
   ═══════════════════════════════════════════════════════════════ */

function Format5() {
  const S = SAMPLE;
  return (
    <div className="max-w-[800px] mx-auto">
      <h3 className="text-[1.9rem] font-serif font-bold tracking-[-0.02em] text-slate-950 mb-3">{S.title}</h3>
      <div className="h-px bg-slate-300 mb-10" />

      <div className="grid grid-cols-[100px_1fr] gap-8">
        <div />
        <div>
          {S.paragraphs.map((p, i) => (
            <p key={i} className="text-[18px] leading-[1.75] text-slate-700 mb-5 font-serif"><Md text={p} /></p>
          ))}
        </div>

        <div className="pt-1">
          <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.12em] text-slate-400">Patterns</span>
        </div>
        <div>
          <p className="text-[18px] leading-[1.75] text-slate-700 mb-4 font-serif">This often involves synthesizing:</p>
          <ul className="mb-8 space-y-2.5 pl-6">
            {S.listItems.map((item, i) => (
              <li key={i} className="text-[18px] leading-[1.75] text-slate-700 list-disc font-serif"><Md text={item} /></li>
            ))}
          </ul>
        </div>

        <div className="pt-1">
          <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.12em] text-slate-400">Posture shift</span>
        </div>
        <div>
          <h4 className="text-[14px] font-sans font-semibold uppercase tracking-[0.08em] text-slate-500 mb-4">{S.subtitle}</h4>
          <p className="text-[18px] leading-[1.75] text-slate-700 mb-6 font-serif">{S.bridgeText}</p>
          <div className="space-y-3 mb-8">
            {S.breakdownItems.map((item, i) => (
              <div key={i} className="border-l-2 border-slate-300 pl-5 py-1">
                <p className="font-sans font-semibold text-[14px] text-slate-900">{item.title} <span className="text-slate-400 font-normal">— {item.badge}</span></p>
                <p className="text-[17px] leading-[1.7] text-slate-600 mt-1 font-serif">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <GraduationCap className="h-5 w-5 text-slate-400" />
        </div>
        <div className="rounded-lg border border-slate-300 bg-slate-50/50 px-6 py-5 mb-8">
          <p className="font-sans font-bold text-[13px] uppercase tracking-[0.1em] text-slate-600 mb-2">{S.calloutTitle}</p>
          <p className="text-[17px] leading-[1.75] text-slate-700 font-serif">{S.calloutText}</p>
        </div>

        <div />
        <div className="h-px bg-slate-300 my-4" />

        <div />
        <div>
          <h3 className="text-[1.6rem] font-serif font-bold tracking-[-0.02em] text-slate-950 mb-5">{S.stemTitle}</h3>
          <p className="text-[18px] leading-[1.75] text-slate-700 mb-6 font-serif">{S.stemIntro}</p>
          <div className="space-y-3 mb-8">
            {S.stemItems.map((item, i) => (
              <div key={i} className="rounded-lg border border-slate-200 px-5 py-4 bg-white">
                <p className="font-sans font-semibold text-[15px] text-slate-900 mb-1">{item.title} <span className="text-[11px] text-slate-400 font-normal ml-1">({item.badge})</span></p>
                <p className="text-[16px] leading-[1.7] text-slate-600 font-serif">{item.examples}</p>
              </div>
            ))}
          </div>
          <p className="text-[18px] leading-[1.75] text-slate-700 font-serif"><Md text={S.importanceText} /></p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FORMAT 6 — "Dark Study Mode"
   Dark surface, warm accents, high contrast
   ═══════════════════════════════════════════════════════════════ */

function Format6() {
  const S = SAMPLE;
  return (
    <div className="max-w-[700px] mx-auto rounded-3xl bg-[#1a1a2e] px-8 py-10">
      <h3 className="text-[1.8rem] font-bold tracking-[-0.03em] text-white mb-8">{S.title}</h3>

      {S.paragraphs.map((p, i) => (
        <p key={i} className="text-[17px] leading-[1.8] text-slate-300 mb-5"><Md text={p} /></p>
      ))}

      <p className="text-[17px] leading-[1.8] text-slate-300 mb-4">This often involves synthesizing:</p>
      <ul className="mb-8 space-y-3 pl-0">
        {S.listItems.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-[17px] leading-[1.8] text-slate-300">
            <span className="mt-[11px] h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
            <Md text={item} />
          </li>
        ))}
      </ul>

      <div className="my-10 h-px bg-white/10" />

      <h4 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-amber-400 mb-4">{S.subtitle}</h4>
      <p className="text-[17px] leading-[1.8] text-slate-300 mb-8">{S.bridgeText}</p>

      <div className="space-y-3 mb-10">
        {S.breakdownItems.map((item, i) => (
          <div key={i} className="rounded-xl bg-white/5 border border-white/10 px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
              <p className="font-semibold text-[15px] text-white">{item.title}</p>
              <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300">{item.badge}</span>
            </div>
            <p className="text-[16px] leading-[1.7] text-slate-400">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="my-10 rounded-xl bg-amber-500/10 border border-amber-500/20 px-6 py-5">
        <p className="font-bold text-[12px] uppercase tracking-[0.12em] text-amber-400 mb-2">{S.calloutTitle}</p>
        <p className="text-[16px] leading-[1.75] text-amber-100/70">{S.calloutText}</p>
      </div>

      <div className="my-10 h-px bg-white/10" />

      <h3 className="text-[1.5rem] font-bold tracking-[-0.03em] text-white mb-5">{S.stemTitle}</h3>
      <p className="text-[17px] leading-[1.8] text-slate-300 mb-6">{S.stemIntro}</p>

      <div className="space-y-3 mb-10">
        {S.stemItems.map((item, i) => (
          <div key={i} className="rounded-xl bg-white/5 border border-white/10 px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
              <p className="font-semibold text-[15px] text-white">{item.title}</p>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-400/20 text-blue-300">{item.badge}</span>
            </div>
            <p className="text-[16px] leading-[1.7] text-slate-400">{item.examples}</p>
          </div>
        ))}
      </div>

      <p className="text-[17px] leading-[1.8] text-slate-300"><Md text={S.importanceText} /></p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FORMAT 7 — "Magazine Editorial"
   Pull quotes, drop-cap feel, bold section intros
   ═══════════════════════════════════════════════════════════════ */

function Format7() {
  const S = SAMPLE;
  return (
    <div className="max-w-[680px] mx-auto">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-500 mb-3">Module 24 · Lesson 1</p>
      <h3 className="text-[2.4rem] font-serif font-bold tracking-[-0.04em] text-slate-950 leading-[1.15] mb-4">{S.title}</h3>
      <p className="text-[19px] leading-[1.6] text-slate-500 font-serif mb-10">Identify the one central message the author wants you to take away from the entire text.</p>
      <div className="h-px bg-slate-900 mb-10" />

      {S.paragraphs.map((p, i) => (
        <p key={i} className="text-[18px] leading-[1.8] text-slate-700 mb-6 font-serif"><Md text={p} /></p>
      ))}

      <p className="text-[18px] leading-[1.8] text-slate-700 mb-4 font-serif">This often involves synthesizing:</p>
      <ul className="mb-10 space-y-3 pl-7">
        {S.listItems.map((item, i) => (
          <li key={i} className="text-[18px] leading-[1.8] text-slate-700 list-disc font-serif"><Md text={item} /></li>
        ))}
      </ul>

      {/* Pull quote */}
      <div className="my-14 text-center px-8">
        <Quote className="h-8 w-8 text-slate-300 mx-auto mb-4" />
        <p className="text-[22px] leading-[1.5] text-slate-800 font-serif italic">"What is the one thing the author most wants me to understand after reading this?"</p>
        <div className="h-px w-16 bg-slate-300 mx-auto mt-6" />
      </div>

      <h4 className="text-[13px] font-sans font-bold uppercase tracking-[0.14em] text-rose-500 mb-4">{S.subtitle}</h4>
      <p className="text-[18px] leading-[1.8] text-slate-700 mb-8 font-serif">{S.bridgeText}</p>

      <div className="space-y-5 mb-10">
        {S.breakdownItems.map((item, i) => (
          <div key={i}>
            <p className="font-sans font-bold text-[14px] text-slate-950 mb-1">{item.title}</p>
            <p className="text-[18px] leading-[1.8] text-slate-600 font-serif">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="my-12 border-y border-slate-200 py-8">
        <p className="font-sans font-bold text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-4">{S.calloutTitle}</p>
        <p className="text-[18px] leading-[1.8] text-slate-700 font-serif">{S.calloutText}</p>
      </div>

      <h3 className="text-[1.8rem] font-serif font-bold tracking-[-0.03em] text-slate-950 mt-14 mb-6">{S.stemTitle}</h3>
      <p className="text-[18px] leading-[1.8] text-slate-700 mb-8 font-serif">{S.stemIntro}</p>

      <div className="space-y-6 mb-10">
        {S.stemItems.map((item, i) => (
          <div key={i}>
            <div className="flex items-center gap-3 mb-2">
              <p className="font-sans font-bold text-[15px] text-slate-950">{item.title}</p>
              <span className="text-[10px] font-sans font-bold px-2.5 py-0.5 rounded bg-rose-100 text-rose-600">{item.badge}</span>
            </div>
            <p className="text-[17px] leading-[1.8] text-slate-600 font-serif pl-0 border-l-2 border-slate-200 ml-0 pl-4">{item.examples}</p>
          </div>
        ))}
      </div>

      <p className="text-[18px] leading-[1.8] text-slate-700 font-serif"><Md text={S.importanceText} /></p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FORMAT 8 — "Minimal Brutalist"
   Large type, stark black/white, no rounded corners, bold
   ═══════════════════════════════════════════════════════════════ */

function Format8() {
  const S = SAMPLE;
  return (
    <div className="max-w-[720px] mx-auto">
      <h3 className="text-[2.6rem] font-black tracking-[-0.05em] text-black leading-[1.1] mb-10">{S.title}</h3>

      {S.paragraphs.map((p, i) => (
        <p key={i} className="text-[18px] leading-[1.8] text-neutral-600 mb-6"><Md text={p} /></p>
      ))}

      <p className="text-[18px] leading-[1.8] text-neutral-600 mb-4">This often involves synthesizing:</p>
      <ul className="mb-10 space-y-2 pl-6">
        {S.listItems.map((item, i) => (
          <li key={i} className="text-[18px] leading-[1.8] text-neutral-600 list-['—'] pl-3"><Md text={item} /></li>
        ))}
      </ul>

      <div className="my-12 h-[3px] bg-black" />

      <h4 className="text-[16px] font-black uppercase tracking-[0.06em] text-black mb-5">{S.subtitle}</h4>
      <p className="text-[18px] leading-[1.8] text-neutral-600 mb-10">{S.bridgeText}</p>

      <div className="space-y-0 border-y-2 border-black mb-10">
        {S.breakdownItems.map((item, i) => (
          <div key={i} className={`px-5 py-5 ${i > 0 ? 'border-t border-neutral-200' : ''}`}>
            <div className="flex items-center justify-between mb-2">
              <p className="font-bold text-[16px] text-black">{item.title}</p>
              <span className="text-[11px] font-bold px-2.5 py-0.5 bg-black text-white">{item.badge}</span>
            </div>
            <p className="text-[17px] leading-[1.8] text-neutral-500">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="my-12 bg-black text-white px-7 py-6">
        <p className="font-black text-[14px] uppercase tracking-[0.08em] mb-3">{S.calloutTitle}</p>
        <p className="text-[17px] leading-[1.8] text-neutral-300">{S.calloutText}</p>
      </div>

      <h3 className="text-[2rem] font-black tracking-[-0.04em] text-black mt-14 mb-6">{S.stemTitle}</h3>
      <p className="text-[18px] leading-[1.8] text-neutral-600 mb-8">{S.stemIntro}</p>

      <div className="space-y-0 border-2 border-black mb-10">
        {S.stemItems.map((item, i) => (
          <div key={i} className={`px-5 py-5 ${i > 0 ? 'border-t border-neutral-200' : ''}`}>
            <div className="flex items-center gap-3 mb-2">
              <p className="font-bold text-[16px] text-black">{item.title}</p>
              <span className="text-[11px] font-bold px-2.5 py-0.5 bg-black text-white">{item.badge}</span>
            </div>
            <p className="text-[17px] leading-[1.8] text-neutral-500">{item.examples}</p>
          </div>
        ))}
      </div>

      <p className="text-[18px] leading-[1.8] text-neutral-600"><Md text={S.importanceText} /></p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Lab Shell — tabs to switch between formats
   ═══════════════════════════════════════════════════════════════ */

const FORMATS = [
  { id: 1, label: 'Medium Editorial', desc: 'Large serif, minimal chrome', component: Format1 },
  { id: 2, label: 'Notion Clean', desc: 'Sans-serif, flat callouts', component: Format2 },
  { id: 3, label: 'Stripe Docs', desc: 'Polished, dev-doc feel', component: Format3 },
  { id: 4, label: 'Apple HIG', desc: 'Rounded cards, generous space', component: Format4 },
  { id: 5, label: 'Textbook Margin', desc: 'Serif body, margin annotations', component: Format5 },
  { id: 6, label: 'Dark Study', desc: 'Dark surface, warm accents', component: Format6 },
  { id: 7, label: 'Magazine Editorial', desc: 'Pull quotes, editorial', component: Format7 },
  { id: 8, label: 'Minimal Brutalist', desc: 'Stark, bold, no radius', component: Format8 },
];

export const LessonFormatLab: React.FC = () => {
  const [activeFormat, setActiveFormat] = useState(1);
  const ActiveComponent = FORMATS.find(f => f.id === activeFormat)?.component ?? Format1;

  return (
    <div className="fixed inset-0 overflow-y-auto bg-white z-50">
      {/* Sticky format switcher */}
      <div className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="max-w-[1100px] mx-auto px-6 py-4">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="h-5 w-5 text-slate-400" />
            <h1 className="text-[15px] font-semibold text-slate-900">Lesson Format Lab</h1>
            <span className="text-[12px] text-slate-400">— 8 rival approaches, same content</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {FORMATS.map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFormat(f.id)}
                className={`rounded-full px-3.5 py-1.5 text-[12px] font-semibold transition ${
                  activeFormat === f.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {f.id}. {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active format description */}
      <div className="max-w-[1100px] mx-auto px-6 pt-6 pb-2">
        <p className="text-[13px] text-slate-400">
          Format {activeFormat}: <span className="font-semibold text-slate-600">{FORMATS[activeFormat - 1].label}</span> — {FORMATS[activeFormat - 1].desc}
        </p>
      </div>

      {/* Content area */}
      <div className="px-6 py-8 pb-20">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default LessonFormatLab;
