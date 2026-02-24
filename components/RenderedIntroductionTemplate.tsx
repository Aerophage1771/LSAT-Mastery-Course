import React from 'react';
import { BookOpen, CircleDot, ListChecks } from 'lucide-react';

function SectionHeading({
  title,
  icon = 'dot',
}: {
  title: string;
  icon?: 'dot' | 'list';
}) {
  return (
    <div className="flex items-center gap-2 mb-4">
      {icon === 'list' ? (
        <ListChecks className="w-5 h-5 text-indigo-600 shrink-0" />
      ) : (
        <CircleDot className="w-5 h-5 text-indigo-600 shrink-0" />
      )}
      <h2 className="text-lg font-bold text-slate-900">{title}</h2>
    </div>
  );
}

function SectionDivider() {
  return <div className="h-px w-full bg-slate-200" />;
}

export default function RenderedIntroductionTemplate() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <div className="mx-auto max-w-5xl px-6 py-8 lg:px-10 lg:py-12">
        <header className="mb-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span className="text-xs font-semibold tracking-wide uppercase">Lesson</span>
              </div>

              <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-slate-900">
                Introduction Template
              </h1>

              <p className="mt-2 text-sm text-slate-600">
                Use this structure for every module Lesson 1: question goal, introduction, common
                stems, and core concepts.
              </p>
            </div>

            <div className="self-start md:self-auto">
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                {'Module 1 · Topic Name'}
              </div>
            </div>
          </div>

          <div className="mt-6 h-px w-full bg-slate-200" />
        </header>

        <main className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
          <div className="space-y-10">
            <section>
              <SectionHeading title="Question Goal" icon="dot" />

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-base leading-relaxed text-slate-700">
                  <strong className="font-semibold text-slate-900">
                    Define the logical function
                  </strong>{' '}
                  a particular sentence serves within the argument. Is the statement the main
                  conclusion, a supporting premise, an intermediate step, or a concession to an
                  opposing view?
                </p>
              </div>
            </section>

            <SectionDivider />

            <section>
              <SectionHeading title="Introduction" icon="dot" />

              <div className="space-y-4 text-slate-700">
                <p className="text-base leading-relaxed">
                  The Introduction section orients the student to the question type. Start with what
                  the question type is and why it matters for Logical Reasoning. Define any key
                  terms the student will need. Place this module in context: how it builds on earlier
                  lessons and how it connects to later ones (e.g. Flaw, Weaken, Assumption).
                </p>

                <p className="text-base leading-relaxed">
                  Add a second paragraph when useful: contrast with a related question type so the
                  student knows exactly what this type asks for (e.g. &quot;Unlike Main Conclusion,
                  which asks for the final point, this type asks for…&quot;). Keep the tone clear and
                  direct.
                </p>
              </div>
            </section>

            <SectionDivider />

            <section>
              <SectionHeading title="Common Question Stems" icon="list" />

              <p className="mb-4 text-base leading-relaxed text-slate-700">
                You can recognize these questions because they [cite a specific phrase / ask for
                the main point / etc.]. Typical phrasing includes:
              </p>

              <ul className="ml-6 list-disc space-y-2 text-base leading-relaxed text-slate-700 marker:text-indigo-500">
                <li>
                  {'"The statement that [X] plays which one of the following roles in the argument?"'}
                </li>
                <li>
                  {
                    '"Which one of the following most accurately [states/expresses] the [main conclusion/main point] of the argument?"'
                  }
                </li>
                <li>{'Add 1-3 more stem patterns for this question type.'}</li>
              </ul>
            </section>

            <SectionDivider />

            <section>
              <SectionHeading title="Core Concepts" icon="dot" />

              <div className="space-y-4 text-slate-700">
                <p className="text-base leading-relaxed">
                  To solve these questions, [brief principle or framework]. Your goal is to [what
                  the student should do].
                </p>

                <p className="text-base leading-relaxed">
                  Optional: short example argument in a blockquote, then a list labeling each part
                  (Main Conclusion, Premise, etc.).
                </p>

                <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
                  <p className="text-base leading-relaxed text-slate-700">
                    {'"Optional example argument goes here for this module."'}
                  </p>
                </div>

                <ul className="ml-6 list-disc space-y-2 text-base leading-relaxed text-slate-700 marker:text-indigo-500">
                  <li>
                    <strong className="font-semibold text-slate-900">Concept 1:</strong>{' '}
                    Definition and how it appears on the test.
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900">Concept 2:</strong>{' '}
                    Definition and how it appears on the test.
                  </li>
                  <li>Add more as needed for this module.</li>
                </ul>
              </div>
            </section>

            <SectionDivider />

            <section>
              <SectionHeading title="Key Terms or Roles Explained" icon="dot" />

              <ol className="ml-6 list-decimal space-y-2 text-base leading-relaxed text-slate-700 marker:text-indigo-500">
                <li>
                  <strong className="font-semibold text-slate-900">Term/Role 1:</strong> Clear
                  definition. One sentence.
                </li>
                <li>
                  <strong className="font-semibold text-slate-900">Term/Role 2:</strong> Clear
                  definition. One sentence.
                </li>
                <li>
                  Use an ordered list when order matters; otherwise use an unordered list.
                </li>
              </ol>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
