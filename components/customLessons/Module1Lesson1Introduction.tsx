import React from 'react';
import { BookOpen, ListChecks, Target } from 'lucide-react';

const QUESTION_STEMS = [
  '"The statement that [X] plays which one of the following roles in the argument?"',
  '"The claim that [X] figures in the argument in which one of the following ways?"',
  '"Which one of the following most accurately describes the role played in the argument by the claim that [X]?"',
];

const ROLE_EXPLANATIONS = [
  {
    title: 'Main Conclusion',
    body: 'The ultimate point the entire argument is trying to prove. Every other sentence exists primarily to support this claim.',
  },
  {
    title: 'Premise',
    body: 'A reason or piece of evidence offered in support of a conclusion.',
  },
  {
    title: 'Intermediate (Subsidiary) Conclusion',
    body: 'A bridge statement. It is supported by premises, and it also supports the main conclusion, so it functions as both a conclusion and a premise.',
  },
  {
    title: 'Opposing Viewpoint',
    body: 'A claim attributed to someone other than the author (for example, "Some critics argue..."). The author\'s purpose is typically to reject, qualify, or undermine it.',
  },
  {
    title: 'Concession',
    body: "A point the author grants as true, even though it appears to cut against the author's position. It is often used to sound fair before pivoting back to the main point.",
  },
];

export default function Module1Lesson1Introduction() {
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
                Introduction to Argument Parts
              </h1>
              <p className="mt-2 text-sm text-slate-600">
                Learn to identify the role a specific sentence plays within an argument.
              </p>
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
              <h2 className="text-lg font-bold">Question Goal</h2>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-base leading-relaxed text-slate-700">
                <strong className="font-semibold text-slate-900">Define the logical function</strong> a particular sentence serves
                within the argument. Is the statement the main conclusion, a supporting premise, an intermediate step, or a
                concession to an opposing view?
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
              Argument Part questions are well named: they ask you to determine what <em>part</em> a specific sentence plays within
              the author&apos;s overall <em>argument</em>. This question type, together with Main Conclusion, tests the most fundamental
              skill in Logical Reasoning: identifying argument structure. Nearly every other argumentative question type, from
              Flaw to Strengthen, Weaken to Assumption, requires you to understand how the parts of an argument fit together.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Unlike Main Conclusion questions, which always ask for the final point, Argument Part questions can ask about any
              sentence in the stimulus. The task is to look past content (what the sentence says) and identify function (what the
              sentence does).
            </p>
          </section>

          <div className="my-10 h-px bg-slate-100" />

          <section>
            <div className="flex items-center gap-2 text-slate-900 mb-4">
              <ListChecks className="w-5 h-5 text-indigo-600 shrink-0" />
              <h2 className="text-lg font-bold">Common Question Stems</h2>
            </div>

            <p className="text-base leading-relaxed text-slate-700">
              You can recognize these questions because they cite a specific phrase or sentence from the stimulus and ask you to
              describe its role. Typical phrasing includes:
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
              <h2 className="text-lg font-bold">Core Concepts: The Anatomy of an Argument</h2>
            </div>

            <p className="text-base leading-relaxed text-slate-700">
              To solve these questions, treat the argument as a structure made of distinct parts. Your goal is to identify the
              role played by the specific sentence the question targets.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">Consider this simple argument:</p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5 text-slate-700">
              <p className="text-base leading-relaxed">
                "We should go to the movies tonight. It&apos;s raining outside, and we can&apos;t do much else when it rains."
              </p>
            </div>

            <ul className="mt-6 ml-6 list-disc space-y-3 text-base leading-relaxed text-slate-700 marker:text-indigo-500">
              <li>
                <strong className="font-semibold text-slate-900">Main Conclusion:</strong> "We should go to the movies tonight." (the
                final decision or opinion)
              </li>
              <li>
                <strong className="font-semibold text-slate-900">Premise:</strong> "It&apos;s raining outside." (a fact used to support
                the decision)
              </li>
              <li>
                <strong className="font-semibold text-slate-900">Intermediate Conclusion:</strong> "We can&apos;t do much else."
                (supported by the rain, and used to support the final decision)
              </li>
            </ul>
          </section>

          <div className="my-10 h-px bg-slate-100" />

          <section>
            <div className="flex items-center gap-2 text-slate-900 mb-4">
              <Target className="w-5 h-5 text-indigo-600 shrink-0" />
              <h2 className="text-lg font-bold">Common Roles Explained</h2>
            </div>

            <ol className="mt-4 ml-6 list-decimal space-y-3 text-base leading-relaxed text-slate-700 marker:text-indigo-500">
              {ROLE_EXPLANATIONS.map((role) => (
                <li key={role.title}>
                  <strong className="font-semibold text-slate-900">{role.title}:</strong> {role.body}
                </li>
              ))}
            </ol>
          </section>
        </main>
      </div>
    </div>
  );
}
