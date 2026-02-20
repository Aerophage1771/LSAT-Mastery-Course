import React, { useMemo, useState } from "react";
import {
  ChevronUp,
  Eye,
  EyeOff,
  CheckCircle2,
  XCircle,
} from "lucide-react";

type ChoiceLetter = "A" | "B" | "C" | "D" | "E";

type Choice = {
  letter: ChoiceLetter;
  text: string;
};

type LsatQuestion = {
  id: string;
  stimulus: string;
  stem: string;
  choices: Choice[];
  correctAnswer: ChoiceLetter;
};

type Props = {
  question: LsatQuestion;
  defaultSelected?: ChoiceLetter | null;
  locked?: boolean;
  onSelect?: (letter: ChoiceLetter | null) => void;
};

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function PillLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs font-semibold tracking-wide text-slate-800">
      {children}
    </div>
  );
}

function LsatQuestionCard({
  question,
  defaultSelected = null,
  locked = false,
  onSelect,
}: Props) {
  const [selected, setSelected] = useState<ChoiceLetter | null>(defaultSelected);
  const [collapsed, setCollapsed] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const header = useMemo(() => `Question · ${question.id}`, [question.id]);

  function handlePick(letter: ChoiceLetter) {
    if (locked) return;

    const next = selected === letter ? null : letter;
    setSelected(next);

    if (next === null) setRevealed(false);

    onSelect?.(next);
  }

  function toggleReveal() {
    if (locked) return;
    if (selected === null) return;
    setRevealed((v) => !v);
  }

  return (
    <section className="w-full max-w-3xl overflow-hidden rounded-3xl border border-slate-300 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.10)]">
      <header className="border-b border-slate-200 bg-slate-50">
        <div className="flex items-center justify-between px-6 py-5">
          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-wide text-slate-600">
              LSAT Logical Reasoning
            </p>
            <h2 className="mt-1 truncate text-lg font-semibold text-slate-900">
              {header}
            </h2>
          </div>

          <button
            type="button"
            aria-label={collapsed ? "Expand question" : "Collapse question"}
            className={cn(
              "rounded-2xl border border-slate-300 bg-white p-2 text-slate-700 transition",
              "hover:bg-slate-100 hover:text-slate-900",
              "focus:outline-none focus:ring-2 focus:ring-slate-400"
            )}
            onClick={() => setCollapsed((v) => !v)}
          >
            <ChevronUp
              className={cn("h-5 w-5 transition", collapsed && "rotate-180")}
            />
          </button>
        </div>
      </header>

      {!collapsed && (
        <div className="px-6 py-6">
          <div>
            <PillLabel>Stimulus</PillLabel>
            <div className="mt-3 rounded-2xl border border-slate-300 bg-white p-5">
              <p className="whitespace-pre-wrap text-[15px] leading-6 text-slate-900">
                {question.stimulus}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <PillLabel>Question Stem</PillLabel>
            <div className="mt-3 rounded-2xl border border-slate-300 bg-white p-5">
              <p className="whitespace-pre-wrap text-[15px] leading-6 text-slate-900">
                {question.stem}
              </p>
            </div>
          </div>

          <div className="mt-10">
            <PillLabel>Answer Choices</PillLabel>

            <div className="mt-4 space-y-3">
              {question.choices.map((c) => {
                const choiceIsSelected = selected === c.letter;
                const choiceIsCorrect = question.correctAnswer === c.letter;

                const frame = revealed
                  ? choiceIsCorrect
                    ? "border-emerald-600 bg-emerald-50"
                    : choiceIsSelected
                      ? "border-rose-600 bg-rose-50"
                      : "border-slate-300 bg-white"
                  : choiceIsSelected
                    ? "border-slate-600 bg-slate-50"
                    : "border-slate-300 bg-white";

                const ring =
                  !revealed && choiceIsSelected ? "ring-2 ring-slate-200" : "";

                const badge = revealed
                  ? choiceIsCorrect
                    ? "border-emerald-600 bg-white text-emerald-900"
                    : choiceIsSelected
                      ? "border-rose-600 bg-white text-rose-900"
                      : "border-slate-300 bg-white text-slate-700"
                  : choiceIsSelected
                    ? "border-slate-600 bg-white text-slate-900"
                    : "border-slate-300 bg-white text-slate-700";

                return (
                  <button
                    key={c.letter}
                    type="button"
                    disabled={locked}
                    onClick={() => handlePick(c.letter)}
                    className={cn(
                      "w-full rounded-2xl border px-5 py-4 text-left transition",
                      "focus:outline-none focus:ring-2 focus:ring-slate-400",
                      locked
                        ? "cursor-not-allowed opacity-90"
                        : "hover:bg-slate-50",
                      frame,
                      ring
                    )}
                    aria-pressed={choiceIsSelected}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold",
                          badge
                        )}
                        aria-hidden="true"
                      >
                        {c.letter}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="whitespace-pre-wrap text-[15px] leading-6 text-slate-900">
                          {c.text}
                        </p>

                        {revealed && choiceIsSelected && (
                          <div className="mt-3">
                            {choiceIsCorrect ? (
                              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-600 bg-white px-3 py-1 text-xs font-semibold text-emerald-900">
                                <CheckCircle2 className="h-4 w-4" />
                                Correct
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-2 rounded-full border border-rose-600 bg-white px-3 py-1 text-xs font-semibold text-rose-900">
                                <XCircle className="h-4 w-4" />
                                Incorrect
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={toggleReveal}
                disabled={locked || selected === null}
                className={cn(
                  "inline-flex w-full items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition",
                  "focus:outline-none focus:ring-2 focus:ring-slate-400",
                  selected === null
                    ? "cursor-not-allowed border-slate-300 bg-slate-100 text-slate-400"
                    : "border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
                )}
              >
                {revealed ? (
                  <>
                    <EyeOff className="h-4 w-4" /> Hide answer
                  </>
                ) : (
                  <>
                    <Eye className="h-4 w-4" /> Show answer
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

const sample: LsatQuestion = {
  id: "PT-129-S-2-Q-13",
  stimulus:
    "Administrators of educational institutions are enthusiastic about the educational use of computers because they believe that it will enable schools to teach far more courses with far fewer teachers than traditional methods allow. Many teachers fear computers for the same reason. But this reason is mistaken. Computerized instruction requires more, not less, time of instructors, which indicates that any reduction in the number of teachers would require an accompanying reduction in courses offered.",
  stem:
    "The statement that the educational use of computers enables schools to teach far more courses with far fewer teachers figures in the argument in which one of the following ways?",
  choices: [
    {
      letter: "A",
      text: "It is presented as a possible explanation for an observation that follows it.",
    },
    {
      letter: "B",
      text: "It is a statement of the problem the argument sets out to solve.",
    },
    {
      letter: "C",
      text: "It is a statement that the argument is designed to refute.",
    },
    {
      letter: "D",
      text: "It is a statement offered in support of the argument’s main conclusion.",
    },
    {
      letter: "E",
      text: "It is the argument’s main conclusion.",
    },
  ],
  correctAnswer: "C",
};

export default function Preview() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="mx-auto max-w-3xl">
        <LsatQuestionCard question={sample} />
      </div>
    </div>
  );
}
