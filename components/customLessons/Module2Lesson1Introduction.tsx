import React from 'react';
import { BookOpen, ListChecks, Target } from 'lucide-react';

const QUESTION_STEMS = [
  '"Which one of the following most accurately expresses the main conclusion of the argument?"',
  '"Which one of the following most accurately states the main point of the argument?"',
  '"The overall conclusion of the historian\'s argument is that..."',
];

export default function Module2Lesson1Introduction() {
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
                Introduction &amp; Core Concepts
              </h1>
              <p className="mt-2 text-sm text-slate-600">
                Learn to identify the single claim the argument is designed to prove.
              </p>
            </div>

            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
              Module 2 · Main Conclusion
            </div>
          </div>

          <div className="mt-6 h-px w-full bg-slate-200" />
        </header>

        <main className="rounded-xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm">
          <section>
            <div className="flex items-center gap-2 text-slate-900 mb-4">
              <Target className="w-5 h-5 text-indigo-600 shrink-0" />
              <h2 className="text-lg font-bold">Question Goal</h2>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-base leading-relaxed text-slate-700">
                <strong className="font-semibold text-slate-900">Identify the single, overarching claim</strong> that the entire
                argument is constructed to prove. In other words, what is the one ultimate point the author wants the reader to
                accept?
              </p>
            </div>
          </section>

          <div className="my-10 h-px bg-slate-100" />

          <section>
            <div className="flex items-center gap-2 text-slate-900 mb-4">
              <Target className="w-5 h-5 text-indigo-600 shrink-0" />
              <h2 className="text-lg font-bold">Introduction</h2>
            </div>

            <p className="text-base leading-relaxed text-slate-700">
              Main Conclusion questions test the most fundamental skill in Logical Reasoning: identifying the structure of an
              argument. An argument consists of a <strong className="font-semibold text-slate-900">conclusion</strong> (a claim the
              author wants you to accept) and <strong className="font-semibold text-slate-900">premises</strong> (the reasons or
              evidence offered to support that claim). Your goal is to isolate the conclusion.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              If an argument is a journey, the Main Conclusion is the destination. Everything else in the passage, including facts,
              background, opposing views, and intermediate steps, exists solely to get you to that final point. Mastering this
              skill is essential because identifying the conclusion is the required first step for analyzing nearly every other
              argumentative question on the LSAT, from Flaw to Assumption.
            </p>
          </section>

          <div className="my-10 h-px bg-slate-100" />

          <section>
            <div className="flex items-center gap-2 text-slate-900 mb-4">
              <ListChecks className="w-5 h-5 text-indigo-600 shrink-0" />
              <h2 className="text-lg font-bold">Common Question Stems</h2>
            </div>

            <p className="text-base leading-relaxed text-slate-700">
              You can recognize these questions because they ask for the &quot;main point,&quot; &quot;main conclusion,&quot; or
              &quot;conclusion&quot; of the passage. Typical phrasing includes:
            </p>

            <ul className="mt-4 ml-6 list-disc space-y-2 text-base leading-relaxed text-slate-700 marker:text-indigo-500">
              {QUESTION_STEMS.map((stem) => (
                <li key={stem}>{stem}</li>
              ))}
            </ul>
          </section>

          <div className="my-10 h-px bg-slate-100" />

          <section>
            <div className="flex items-center gap-2 text-slate-900 mb-4">
              <Target className="w-5 h-5 text-indigo-600 shrink-0" />
              <h2 className="text-lg font-bold">Core Concepts</h2>
            </div>

            <h3 className="text-base font-bold text-slate-900">The &quot;Why?&quot; Test</h3>
            <p className="mt-3 text-base leading-relaxed text-slate-700">
              The most reliable way to identify the Main Conclusion is to use the <strong className="font-semibold text-slate-900">
                &quot;Why?&quot; Test
              </strong>. Because the conclusion is the specific statement being supported by the rest of the passage, you can find
              it by checking the logical flow.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Identify the statement you suspect is the conclusion and ask, <strong className="font-semibold text-slate-900">
                &quot;Why is this statement true?&quot;
              </strong>
            </p>
            <ul className="mt-4 ml-6 list-disc space-y-2 text-base leading-relaxed text-slate-700 marker:text-indigo-500">
              <li>
                If the other sentences in the passage provide the answer (the evidence), you have found the{' '}
                <strong className="font-semibold text-slate-900">Conclusion</strong>.
              </li>
              <li>
                If the statement you picked answers the &quot;Why?&quot; question for a different sentence, it is likely a{' '}
                <strong className="font-semibold text-slate-900">Premise</strong>.
              </li>
            </ul>

            <h3 className="mt-8 text-base font-bold text-slate-900">The Final Destination</h3>
            <p className="mt-3 text-base leading-relaxed text-slate-700">
              Arguments often contain complex layers, including background information, opposing viewpoints, and sub-conclusions. A
              common trap is mistaking a sub-conclusion (a statement that is supported by evidence but also supports something else)
              for the main conclusion.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              To find the Main Conclusion, look for the statement that supports nothing else. It is the end of the line: the final
              judgment or prediction that the author is trying to leave you with. It is not the &quot;heaviest&quot; or most complex
              sentence; it is simply the one sentence that all other sentences work to prove.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
