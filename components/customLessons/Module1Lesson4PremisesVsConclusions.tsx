import React from 'react';
import { BookOpen, CheckCircle2, ListChecks, Target, XCircle } from 'lucide-react';

const CONCEPT_PARAGRAPHS = [
  'Every argument is built on a foundation of two key components: a conclusion (the point the author is trying to prove) and premises (the evidence used to prove it). These two roles are the fundamental building blocks of logical reasoning.',
  'In fact, a staggering two-thirds of all Argument Part questions target a statement that is functioning as either a premise or a main conclusion. Mastering the ability to distinguish between "the point" and "the proof" is the single most important skill for this question type.',
];

const CORE_COMPONENTS = [
  {
    title: 'Conclusion (The Point)',
    text: "The author's main claim. It is the one statement that everything else is designed to convince you of. It receives support but does not give support.",
  },
  {
    title: 'Premise (The Proof)',
    text: 'The evidence, fact, or reason the author provides. It gives support to the conclusion but does not receive support.',
  },
];

const INDICATOR_ROWS = [
  { premise: 'Because / Since', conclusion: 'Therefore / Thus' },
  { premise: 'For / For example / For instance', conclusion: 'Hence / So' },
  { premise: 'Given that / Assuming that', conclusion: 'Consequently' },
  { premise: 'As indicated by / As shown by', conclusion: 'It follows that / As a result' },
  { premise: 'Furthermore / Moreover', conclusion: 'Clearly / Must be that' },
];

const STIMULUS =
  'Ambiguity inspires interpretation. The saying "We are the measure of all things," for instance, has been interpreted by some people to imply that humans are centrally important in the universe, while others have interpreted it to mean simply that, since all knowledge is human knowledge, humans must rely on themselves to find the truth.';

const QUESTION =
  'The claim that ambiguity inspires interpretation figures in the argument in which one of the following ways?';

const ANSWER_CHOICES = [
  "(A) It is used to support the argument's conclusion.",
  '(B) It is an illustration of the claim that we are the measure of all things.',
  "(C) It is compatible with either accepting or rejecting the argument's conclusion.",
  '(D) It is a view that other statements in the argument are intended to support.',
  '(E) It sets out a difficulty the argument is intended to solve.',
];

const STEP_ANALYSIS = [
  {
    title: 'Find the Target',
    paragraphs: [
      'Before analyzing the entire paragraph, zero in on the exact phrase the question stem asks about. Our target here is the very first sentence: "Ambiguity inspires interpretation." Mentally isolating this sentence early keeps you focused on its specific function rather than getting lost in passage details.',
    ],
  },
  {
    title: "Map the Argument's Structure",
    paragraphs: ["Let's break down the argument's flow using a mental map to see how the pieces fit together logically:"],
    bullets: [
      'Statement A: "Ambiguity inspires interpretation." (A broad, general claim).',
      'Statement B: "The saying... for instance... has been interpreted in multiple ways."',
      'Notice the key indicator phrase "for instance" in Statement B. This is a structural signpost. It signals that what follows is a specific example designed to prove or illustrate the sentence right before it. When you see a broad claim followed by a concrete example, the broad claim is almost always the conclusion.',
      'Statement B (Premise) -> supports -> Statement A (Conclusion).',
    ],
  },
  {
    title: 'Pinpoint the Role and Prephrase',
    paragraphs: [
      "A prephrase is your shield against deceptive, confusingly worded answer choices. Before reading options, define the target's role in your own words. Because Statement A is the main point the example is intended to support, its role is the Main Conclusion.",
      "Prephrase: The target statement is the argument's main conclusion, which is supported directly by the example provided in the second sentence.",
    ],
  },
  {
    title: 'Evaluate the Answer Choices',
    paragraphs: [],
  },
];

const CHOICE_ANALYSIS = [
  {
    option: "(A) It is used to support the argument's conclusion.",
    analysis:
      'This choice says the target statement is a premise. This directly contradicts our map, which shows the target statement is being supported, not giving support.',
    verdict: 'Incorrect. (Trap: Role Reversal)',
    correct: false,
  },
  {
    option: '(B) It is an illustration of the claim that we are the measure of all things.',
    analysis:
      'This also gets the relationship backward. The stimulus uses "for instance" to mark the saying as the illustration, not the other way around.',
    verdict: 'Incorrect. (Trap: Role Reversal)',
    correct: false,
  },
  {
    option: "(C) It is compatible with either accepting or rejecting the argument's conclusion.",
    analysis:
      'This describes a neutral background fact. But the target statement is the conclusion; it cannot be neutral about itself.',
    verdict: 'Incorrect.',
    correct: false,
  },
  {
    option: '(D) It is a view that other statements in the argument are intended to support. (Correct)',
    analysis:
      'This is a perfect, abstract description of a main conclusion. The target statement is a "view," and the "other statements" (the example) are intended to support it. This matches our prephrase exactly.',
    verdict: 'Correct.',
    correct: true,
  },
  {
    option: '(E) It sets out a difficulty the argument is intended to solve.',
    analysis:
      'The argument does not frame the target statement as a problem or puzzle. The author is trying to prove that it is true, not solve a difficulty.',
    verdict: 'Incorrect.',
    correct: false,
  },
];

const KEY_TAKEAWAYS = [
  {
    title: 'Find the Point vs. The Proof',
    text: 'The most fundamental skill is distinguishing between the Conclusion (the point) and the Premise (the proof).',
  },
  {
    title: 'Hunt for Indicators',
    text: 'Words like "for instance" and "for example" almost always introduce premises. Use them to anchor your map.',
  },
  {
    title: 'The Two Golden Questions',
    text: 'If you get stuck, ask: What is the author trying to get me to believe? (Conclusion). Then ask: Why should I believe that? (Premises).',
  },
];

export default function Module1Lesson4PremisesVsConclusions() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50 font-sans">
      <div className="mx-auto max-w-4xl p-5 lg:p-10">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-2 text-slate-500">
            <BookOpen className="w-4 h-4" />
            <p className="text-xs font-semibold tracking-wide uppercase">Lesson</p>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
                Lesson 1: Premises vs. Conclusions
              </h1>
            </div>

            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
              Module 1 · Argument Part
            </div>
          </div>

          <div className="mt-6 h-px w-full bg-slate-200" />
        </header>

        <main className="rounded-xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm">
          <section>
            <div className="flex items-center gap-2 text-slate-900 mb-4">
              <Target className="w-5 h-5 text-indigo-600 shrink-0" />
              <h2 className="text-lg font-bold">Concept Focus: The Core Components</h2>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-slate-700">
              {CONCEPT_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {CORE_COMPONENTS.map((item) => (
                <div key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="my-10 h-px bg-slate-100" />

          <section>
            <div className="flex items-center gap-2 text-slate-900 mb-4">
              <ListChecks className="w-5 h-5 text-indigo-600 shrink-0" />
              <h2 className="text-lg font-bold">The "Cheat Sheet": Indicator Words</h2>
            </div>

            <p className="text-base leading-relaxed text-slate-700">
              While you should always rely on the logical relationship between sentences, authors often leave clues. Memorize these
              common indicator words to quickly spot premises and conclusions:
            </p>

            <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white">
              <table className="w-full text-left">
                <thead className="bg-slate-50">
                  <tr>
                    <th scope="col" className="px-5 py-3 text-[11px] font-bold tracking-widest text-slate-500 uppercase">
                      Premise Indicators (The "Why")
                    </th>
                    <th scope="col" className="px-5 py-3 text-[11px] font-bold tracking-widest text-slate-500 uppercase">
                      Conclusion Indicators (The "What")
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {INDICATOR_ROWS.map((row) => (
                    <tr key={row.premise}>
                      <td className="px-5 py-3 text-sm text-slate-700">{row.premise}</td>
                      <td className="px-5 py-3 text-sm text-slate-700">{row.conclusion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="my-10 h-px bg-slate-100" />

          <section>
            <div className="flex items-center gap-2 text-slate-900 mb-4">
              <ListChecks className="w-5 h-5 text-indigo-600 shrink-0" />
              <h2 className="text-lg font-bold">Worked Example</h2>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Question ID: PT-107-S-4-Q-15</p>

              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Stimulus</p>
                <div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-700">
                  {STIMULUS}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Question</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{QUESTION}</p>
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Answer Choices</p>
                <ul className="mt-2 space-y-2 text-sm leading-relaxed text-slate-700">
                  {ANSWER_CHOICES.map((choice) => (
                    <li key={choice} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
                      {choice}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <div className="my-10 h-px bg-slate-100" />

          <section>
            <div className="flex items-center gap-2 text-slate-900 mb-4">
              <Target className="w-5 h-5 text-indigo-600 shrink-0" />
              <h2 className="text-lg font-bold">Step-by-Step Analysis</h2>
            </div>

            <div className="space-y-4">
              {STEP_ANALYSIS.map((step, index) => (
                <div key={step.title} className="rounded-lg border border-slate-200 bg-white p-5">
                  <p className="text-sm font-semibold text-slate-900">
                    {index + 1}. {step.title}
                  </p>
                  <div className="mt-2 space-y-2 text-sm leading-relaxed text-slate-700">
                    {step.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {step.bullets != null && (
                      <ul className="list-disc pl-5 space-y-1 marker:text-indigo-500">
                        {step.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              {CHOICE_ANALYSIS.map((item) => (
                <div
                  key={item.option}
                  className={`rounded-lg border p-4 ${
                    item.correct ? 'border-emerald-200 bg-emerald-50' : 'border-red-200 bg-red-50/40'
                  }`}
                >
                  <p className="text-sm font-semibold text-slate-900">{item.option}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    <strong className="text-slate-900">Analysis:</strong> {item.analysis}
                  </p>
                  <p className="mt-2 flex items-center gap-1.5 text-sm font-semibold">
                    {item.correct ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-700" />
                    )}
                    <span className={item.correct ? 'text-emerald-700' : 'text-red-700'}>Verdict: {item.verdict}</span>
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="my-8 h-px bg-slate-100" />

          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">Key Takeaways</h2>
            <ul className="mt-5 list-disc pl-6 space-y-3 text-base leading-relaxed text-slate-700 marker:text-slate-400">
              {KEY_TAKEAWAYS.map((item) => (
                <li key={item.title}>
                  <strong className="text-slate-900">{item.title}:</strong> {item.text}
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
