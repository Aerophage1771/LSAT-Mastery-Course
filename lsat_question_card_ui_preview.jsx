import React, { useMemo, useState } from "react";
import {
  ChevronUp,
  CheckCircle2,
  XCircle,
  Eye,
  EyeOff,
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

    // If the user unselects, hide feedback.
    if (next === null) setRevealed(false);

    onSelect?.(next);
  }

  function toggleReveal() {
    if (locked) return;
    if (selected === null) return;
    setRevealed((v) => !v);
  }

  return (
    <section className="w-full max-w-3xl rounded-2xl border border-slate-200 bg-white shadow-sm">
      <header className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
        <h2 className="text-lg font-semibold text-slate-900">{header}</h2>

        <button
          type="button"
          aria-label={collapsed ? "Expand question" : "Collapse question"}
          className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-50 hover:text-slate-600"
          onClick={() => setCollapsed((v) => !v)}
        >
          <ChevronUp className={collapsed ? "h-5 w-5 rotate-180" : "h-5 w-5"} />
        </button>
      </header>

      {!collapsed && (
        <div className="px-6 py-5">
          <p className="text-xs font-semibold tracking-wide text-slate-500">Stimulus</p>
          <div className="mt-2 rounded-xl bg-slate-50 p-5">
            <p className="whitespace-pre-wrap text-[15px] leading-6 text-slate-800">
              {question.stimulus}
            </p>
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold tracking-wide text-slate-500">Question Stem</p>
            <p className="mt-2 whitespace-pre-wrap text-[15px] leading-6 text-slate-800">
              {question.stem}
            </p>
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold tracking-wide text-slate-500">Answer Choices</p>
            <div className="mt-3 space-y-3">
            {question.choices.map((c) => {
              const choiceIsSelected = selected === c.letter;
              const choiceIsCorrect = question.correctAnswer === c.letter;
              const showFeedback = revealed;

              const choiceFrame = showFeedback
                ? choiceIsCorrect
                  ? "border-emerald-500 bg-emerald-50"
                  : choiceIsSelected
                    ? "border-rose-500 bg-rose-50"
                    : "border-slate-200 bg-white"
                : choiceIsSelected
                  ? "border-slate-500 bg-slate-50"
                  : "border-slate-200 bg-white";

              const bubbleStyle = showFeedback
                ? choiceIsCorrect
                  ? "border-emerald-600 text-emerald-800"
                  : choiceIsSelected
                    ? "border-rose-600 text-rose-800"
                    : "border-slate-300 text-slate-600"
                : choiceIsSelected
                  ? "border-slate-600 text-slate-900"
                  : "border-slate-300 text-slate-600";

              return (
                <button
                  key={c.letter}
                  type="button"
                  disabled={locked}
                  onClick={() => handlePick(c.letter)}
                  className={[
                    "w-full rounded-xl border px-4 py-4 text-left transition",
                    "focus:outline-none focus:ring-2 focus:ring-slate-300",
                    locked
                      ? "cursor-not-allowed opacity-90"
                      : "hover:bg-slate-50",
                    choiceFrame,
                  ].join(" ")}
                  aria-pressed={choiceIsSelected}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={[
                        "mt-0.5 flex h-6 w-6 items-center justify-center rounded-full border text-sm font-semibold",
                        bubbleStyle,
                      ].join(" ")}
                      aria-hidden="true"
                    >
                      {c.letter}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="whitespace-pre-wrap text-[15px] leading-6 text-slate-800">
                        {c.text}
                      </p>

                      {revealed && choiceIsSelected && (
                        <div className="mt-2 text-xs font-semibold">
                          {choiceIsCorrect ? (
                            <span className="inline-flex items-center gap-1 text-emerald-800">
                              <CheckCircle2 className="h-4 w-4" /> Correct
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-rose-800">
                              <XCircle className="h-4 w-4" /> Incorrect
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
          </div>

          <div className="mt-5">
            <button
              type="button"
              onClick={toggleReveal}
              disabled={locked || selected === null}
              className={[
                "inline-flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition",
                selected === null
                  ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
              ].join(" ")}
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
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-3xl">
        <LsatQuestionCard question={sample} />
      </div>
    </div>
  );
}
