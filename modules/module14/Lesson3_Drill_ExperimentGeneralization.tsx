import { Lesson } from '../../types';

export const Lesson3_Drill_ExperimentGeneralization: Lesson = {
  id: "14-3",
  title: "Drill: Experiment Generalization (PT-116-S-3-Q-3)",
  content: [
    { type: 'h2', text: 'Experiment Generalization' },
    { type: 'paragraph', text: "An **Experiment Generalization** is the most common Principle-Generalization pattern. The stimulus describes the setup and results of a controlled experiment — two groups, one key difference between them, and a measurable outcome — and asks you to identify the general psychological, causal, or behavioral principle that the experiment demonstrates. Your job is to look past the specific experimental details and extract the universal rule that explains *why* the results occurred." },

    { type: 'paragraph', text: "Experiment-based stimuli are ideal for Principle-Generalization questions because they provide a clean, controlled case study: the independent variable (the one factor that differs between groups) is explicitly stated, and the dependent variable (the outcome that changed) is clearly measured. This makes the abstraction process more straightforward than it is for anecdote-based stimuli — but the LSAT compensates by constructing answer choices that are extremely close to each other, often differing by a single word or concept." },

    { type: 'h3', text: 'What Makes Experiment Generalization Distinctive' },
    { type: 'paragraph', text: "In an experiment generalization, the correct principle must:" },
    { type: 'list', ordered: true, items: [
      '**Identify the correct independent variable.** The experiment manipulates one factor. The principle must describe a general version of *that specific factor* — not a related factor, not a broader category that includes other factors, and not a confound.',
      '**Capture the correct causal direction.** The principle must state that the independent variable influences the outcome, not the reverse. Answers that reverse the causal arrow are common traps.',
      '**Match the scope of the result.** If the experiment shows that Group A performed "better" than Group B, the principle should describe improved performance under certain conditions — not that performance is "maximized" or "guaranteed" or "always" better.',
    ]},

    { type: 'callout', variant: 'default', title: 'The Independent Variable Rule', text: "The single most important skill in experiment generalization is correctly identifying the **independent variable** — the one factor that differs between the experimental groups. The correct principle will always be a generalization about the relationship between that specific variable (abstracted) and the observed outcome (abstracted). If your principle is about a different variable, it is wrong — even if it is a true statement about the world." },

    { type: 'hr' },

    { type: 'h3', text: 'Key Strategy: Isolate, Then Generalize' },
    { type: 'paragraph', text: "The strategy for experiment generalizations is a two-phase process:" },
    { type: 'process', title: 'Isolate, Then Generalize', steps: [
      '**Phase 1 — Isolate:** Read the experiment and identify (a) the independent variable — what differs between groups, (b) the control — what is held constant, and (c) the outcome — what result was measured. Write these down mentally in "Variable → Outcome" form.',
      '**Phase 2 — Generalize:** Replace the specific experimental details with general categories. "Tennis players told their rackets were being tested" becomes "individuals who do not believe their abilities are being evaluated." "Performed much better" becomes "executed the task more proficiently." The logical relationship (not believing abilities judged → better performance) is preserved; the specifics are stripped.',
    ]},

    { type: 'paragraph', text: "The critical control step is to verify that the **control variables** (factors held constant across groups) do not appear in your generalized principle. If both groups were \"closely watched,\" then \"being closely watched\" is a constant, not a variable — and a principle about \"being closely watched\" misidentifies the cause of the difference." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Experiment Generalization (PT-116-S-3-Q-3)' },
    { type: 'paragraph', text: "This drill demonstrates the experiment generalization pattern using a classic psychological experiment. Your job is to isolate the independent variable, determine the causal mechanism, and find the principle that correctly generalizes the result." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: '14-3-drill',
      questionType: 'Principle - Generalization',
      difficulty: 'medium',
      stimulus: "In an experiment, tennis players who were told that their performance would be used to assess only the quality of their rackets performed much better than an equally skilled group of tennis players who were told that their tennis-playing talent would be measured.",
      question: "The situation described above most closely conforms to which one of the following propositions?",
      options: [
        "(A) People do less well on a task if they have been told that they will be closely watched while doing it.",
        "(B) People execute a task more proficiently when they do not believe their abilities are being judged. (Correct)",
        "(C) People perform a task more proficiently when they have confidence in their abilities.",
        "(D) People who assess their talents accurately generally perform near their actual level of proficiency.",
        "(E) People who think that a superior performance will please those who are testing them generally try harder.",
      ],
    },

    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Isolate the Experimental Components' },
    { type: 'paragraph', text: "Let's break the experiment into its structural components using our Isolate framework:" },

    { type: 'breakdown', labels: { title: 'Component', text: 'Details' }, items: [
      { title: 'Group 1 (Higher Performance)', text: 'Tennis players told their performance would assess **the quality of their rackets** — an external object. The focus of judgment was directed away from the players\' personal abilities.', badge: 'External Focus', badgeColor: 'blue' },
      { title: 'Group 2 (Lower Performance)', text: 'Tennis players told their **tennis-playing talent would be measured** — a personal attribute. The focus of judgment was directed at the players\' own abilities.', badge: 'Internal Focus', badgeColor: 'blue' },
      { title: 'Control Variable', text: 'Both groups were **equally skilled**. This is explicitly stated and is critical: it rules out innate ability as an explanation for the performance difference. Any difference in outcome must be attributed to the experimental manipulation, not talent.', badge: 'Held Constant', badgeColor: 'slate' },
      { title: 'Independent Variable', text: '**What players believed was being evaluated** — their rackets (external) vs. their talent (internal). This is the one and only factor that differed between the groups.', badge: 'The Key Factor', badgeColor: 'indigo' },
      { title: 'Dependent Variable (Outcome)', text: '**Performance level.** Group 1 (racket evaluation) performed "much better" than Group 2 (talent evaluation).', badge: 'Measured Result', badgeColor: 'indigo' },
    ]},

    { type: 'h4', text: 'Step 2: Identify the Key Dynamic' },
    { type: 'paragraph', text: "**What is the causal mechanism?**" },
    { type: 'paragraph', text: "The stimulus describes a controlled experiment where the only significant difference between two groups was their *belief* about what was being evaluated. The outcome (performance level) changed based on this belief. This is a classic psychological setup showing how the **perception of personal judgment** affects performance." },
    { type: 'paragraph', text: "**What's the key variable?**" },
    { type: 'paragraph', text: "The crucial difference is the *focus of the judgment*:" },
    { type: 'list', items: [
      '**Group 1:** Judgment is on an **external object** (the racket). Players do not feel their personal abilities are at stake. → High performance.',
      '**Group 2:** Judgment is on an **internal ability** (their talent). Players feel personally evaluated. → Lower performance.',
    ]},
    { type: 'paragraph', text: "The argument is that shifting the perceived focus of judgment from internal (personal ability) to external (an object) removes a psychological burden — performance anxiety — leading to better performance." },

    { type: 'h4', text: 'Step 3: Abstract to General Terms' },
    { type: 'paragraph', text: "Now generalize the key dynamic by replacing specifics with general categories:" },
    { type: 'table', headers: ['Specific Detail', 'Abstracted Version'], rows: [
      ['"Tennis players"', '"People" or "individuals"'],
      ['"Told their performance would assess rackets"', '"Do not believe their abilities are being judged"'],
      ['"Told their talent would be measured"', '"Believe their abilities are being judged"'],
      ['"Performed much better"', '"Execute a task more proficiently"'],
      ['"Equally skilled"', '(Control variable — not part of the principle itself)'],
    ]},
    { type: 'paragraph', text: "**Pre-phrase:** \"People perform better on a task when they do not believe their personal abilities are being evaluated.\"" },

    { type: 'h4', text: 'Step 4: Evaluate Each Answer' },
    { type: 'paragraph', text: "Now apply the Textbook Test (Is the stimulus a textbook example of this principle?) and the Strength Test (Is the language appropriately calibrated?) to each choice." },

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) People do less well on a task if they have been told that they will be closely watched while doing it.', text: "This principle is about **being watched**. But both groups were part of an experiment and were therefore being observed — being watched was a *constant*, not a variable. This factor was the same for both groups and therefore cannot explain the *difference* in performance. The principle misidentifies the independent variable: it picks up on a control variable (observation) instead of the actual manipulation (what was being judged).", badge: 'Misidentified Variable', badgeColor: 'red' },
      { title: '(B) People execute a task more proficiently when they do not believe their abilities are being judged.', text: "This perfectly matches our pre-phrase. The independent variable: \"do not believe their abilities are being judged\" (the racket group did not feel personally evaluated). The outcome: \"execute a task more proficiently\" (they performed much better). The strength is appropriate: \"more proficiently\" matches \"much better\" without overclaiming. The stimulus is a textbook example of this proposition. **Passes both the Textbook Test and the Strength Test.**", badge: 'Correct', badgeColor: 'green' },
      { title: '(C) People perform a task more proficiently when they have confidence in their abilities.', text: "The stimulus tells us nothing about the players' *confidence levels*. We know what they were *told* about the purpose of the evaluation, but we do not know how confident they felt. This principle introduces an entirely new psychological concept (confidence) that is not mentioned or implied in the experimental setup. While confidence *might* play a role in the real world, it is not the variable the experiment manipulated or measured.", badge: 'Out-of-Scope Concept', badgeColor: 'red' },
      { title: '(D) People who assess their talents accurately generally perform near their actual level of proficiency.', text: "The experiment is not about *self-assessment accuracy*. It is about how people perform when being *assessed by others*. No information is given about whether either group assessed their own talents accurately. This principle addresses a completely different psychological phenomenon (metacognitive accuracy) than the one demonstrated in the stimulus (performance anxiety under evaluation).", badge: 'Irrelevant Concept', badgeColor: 'red' },
      { title: '(E) People who think that a superior performance will please those who are testing them generally try harder.', text: "The stimulus measures *performance outcome*, not *effort level*. We cannot infer from the data that the lower-performing group was not trying as hard. It is entirely possible — and in fact more consistent with performance anxiety research — that Group 2 was trying *just as hard* (or harder) but performing worse due to the psychological pressure of being personally evaluated. This principle conflates outcome with effort, which the stimulus does not support.", badge: 'Unproven Assumption', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: Summary Table' },
    { type: 'table', headers: ['Answer', 'Variable Identified', 'Matches Stimulus?', 'Verdict'], rows: [
      ['(A) Closely watched', 'Being observed', '✗ — Both groups were observed (constant)', 'Misidentified Variable'],
      ['**(B) Abilities not judged**', '**Belief about personal evaluation**', '**✓ — Exactly the manipulated variable**', '**Correct ✓**'],
      ['(C) Confidence', 'Self-confidence', '✗ — Not mentioned in stimulus', 'Out of Scope'],
      ['(D) Accurate self-assessment', 'Metacognitive accuracy', '✗ — Not the topic of the experiment', 'Irrelevant Concept'],
      ['(E) Pleasing testers', 'Motivation / effort', '✗ — Outcome ≠ effort', 'Unproven Assumption'],
    ]},

    { type: 'paragraph', text: "Notice the pattern: **every wrong answer identifies a different variable** than the one the experiment actually manipulated. Answer (A) focuses on observation (a constant). Answer (C) introduces confidence (not measured). Answer (D) introduces self-assessment (not the topic). Answer (E) introduces effort (not distinguishable from the data). Only answer (B) correctly identifies the manipulated variable — belief about whether personal abilities are being judged — and generalizes it correctly." },

    { type: 'hr' },

    { type: 'h3', text: 'Experiment Generalization: Common Traps' },
    { type: 'paragraph', text: "Experiment-based stimuli generate a specific set of traps that recur across many questions. Be alert to these:" },
    { type: 'breakdown', labels: { title: 'Trap', text: 'How to Spot It' }, items: [
      { title: 'Control Variable Confusion', text: 'The answer identifies a factor that was **held constant** across groups (like "being watched") and treats it as the cause of the difference. To spot this: ask whether the factor was the **same** for both groups. If yes, it cannot explain the difference. This is the most common trap in experiment generalization questions.', badge: 'Most Common', badgeColor: 'blue' },
      { title: 'Imported Concept', text: 'The answer introduces a psychological or causal concept that **was not measured or mentioned** in the experiment (like "confidence" or "effort"). To spot this: check whether the concept appears anywhere in the stimulus. If it does not, the principle is building on an assumption, not on the experimental data.', badge: 'Common', badgeColor: 'blue' },
      { title: 'Outcome-Effort Conflation', text: 'The answer confuses **what happened** (performance outcome) with **why it happened** (motivation or effort). The experiment measures results, not internal states. Unless the stimulus explicitly discusses effort or motivation, a principle about effort is an inference beyond the data.', badge: 'Moderate', badgeColor: 'slate' },
      { title: 'Reversed Causation', text: 'The answer states that the **outcome causes** the variable, rather than the variable causing the outcome. Example: "People who perform well believe their abilities are not being judged" reverses the arrow from the stimulus, which shows that belief → performance, not performance → belief.', badge: 'Moderate', badgeColor: 'slate' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Key Lessons from This Drill' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. Isolate the independent variable.** In every experiment generalization, the correct principle is a generalization about the relationship between the *one manipulated factor* and the observed outcome. If your principle is about a different factor — even a plausible one — it is wrong.\n\n**2. Control variables are constants, not causes.** Factors that are the same for both groups (like being observed, being in an experiment, or having equal skill levels) cannot explain the *difference* in outcomes. Answers that elevate a constant to a cause are among the most common traps.\n\n**3. Abstraction preserves the mechanism, not the details.** The correct answer replaces \"tennis players,\" \"rackets,\" and \"talent\" with general categories — but it preserves the core mechanism: belief about personal evaluation affects performance. The specifics change; the logic stays the same.\n\n**4. Do not import concepts the experiment did not test.** Confidence, effort, self-assessment, motivation — these are all real psychological constructs, but if the experiment did not measure them, a principle about them is speculation, not generalization. Stick to what the data actually shows.\n\n**5. Measure the outcome, not the intent.** Performance data tells you *what happened*, not *why* internally. Unless the stimulus explicitly discusses effort levels, wanting to please testers, or confidence, do not build your principle around those unobserved internal states. Generalize from the observable evidence." },
  ]
};
