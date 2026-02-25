import { Lesson } from '../../types';

export const Lesson3_Drill_TheMissingBaseline: Lesson = {
  id: "7-3",
  title: "Drill: The Missing Baseline",
  content: [
    { type: 'h2', text: 'Drill: The Missing Baseline' },
    { type: 'paragraph', text: "One of the most common and powerful patterns in Evaluate the Argument questions is the **Missing Baseline**. Arguments that commit this error draw a conclusion about change, improvement, or causation without establishing what things looked like *before* the supposed cause took effect. They show you the \"after\" picture and ask you to accept it as proof of change — without ever showing you the \"before.\"" },

    { type: 'hr' },

    { type: 'h3', text: 'The Missing Baseline Concept' },
    { type: 'paragraph', text: "A baseline is the starting point against which results are measured. In a medical study, the baseline is the patients' condition before treatment. In a policy evaluation, it is the metric before the policy was implemented. Without a baseline, any \"result\" is meaningless because you have no way to know whether anything actually changed." },

    { type: 'paragraph', text: "Consider this everyday example:" },
    { type: 'blockquote', text: '"After we started using the new fertilizer, 80% of our tomato plants produced fruit."' },
    { type: 'paragraph', text: "This sounds impressive — until you ask: *\"What percentage produced fruit before the new fertilizer?\"* If 80% produced fruit last year too, the fertilizer had no effect. If only 30% produced fruit last year, the fertilizer is likely responsible for a dramatic improvement. Without the baseline, the number \"80%\" is uninterpretable." },

    { type: 'h3', text: 'Types of Missing Baselines' },
    { type: 'paragraph', text: "Missing baselines come in several varieties. Recognizing the specific type helps you prephrase the pivotal question more accurately." },

    { type: 'table', headers: ['Baseline Type', 'What Is Missing', 'Example'], rows: [
      ['**Before/After**', 'The condition or metric before the treatment, policy, or event occurred', '"After the training program, 90% of employees passed the safety test." → What was the pass rate before the program?'],
      ['**Control Group**', 'A comparison group that did not receive the treatment', '"Patients who took the supplement reported less fatigue." → What about patients who did not take it?'],
      ['**Historical Norm**', 'The typical rate, level, or frequency under normal conditions', '"This year, 15% of bridges failed inspection." → Is 15% higher or lower than the historical average?'],
      ['**Alternative Scenario**', 'What would have happened in the absence of the cause or intervention', '"Since the ad campaign launched, sales are up 20%." → Would sales have risen anyway due to seasonal trends?'],
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'How to Spot Missing Baseline Arguments' },
    { type: 'paragraph', text: "Missing baseline arguments have telltale features. When you see these signals in a stimulus, immediately ask yourself: *\"What was the baseline?\"*" },

    { type: 'breakdown', labels: { title: 'Signal', text: 'What to Watch For' }, items: [
      { title: 'Post-treatment data only', text: 'The argument presents results measured *after* some event, treatment, or policy — but never mentions what things were like before. Words like "after," "following," "since," or "as a result of" introduce the post-treatment snapshot.', badge: 'Very Common', badgeColor: 'blue' },
      { title: 'Causal conclusion from a snapshot', text: 'The argument concludes that something *caused* an outcome, but the only evidence is a single data point measured at one time. A single snapshot cannot demonstrate change.', badge: 'Very Common', badgeColor: 'blue' },
      { title: 'No comparison group mentioned', text: 'A study or experiment is described, but there is no mention of a control group, a placebo group, or any other point of comparison. The results are presented in isolation.', badge: 'Common', badgeColor: 'slate' },
      { title: 'Percentage or rate without context', text: 'A number like "75% had high blood pressure" or "60% reported improvement" is presented as if it is meaningful on its own — but without context (the previous rate, the normal rate, the rate for a comparable group), the number is uninterpretable.', badge: 'Common', badgeColor: 'slate' },
    ]},

    { type: 'callout', variant: 'tip', title: 'The Baseline Prephrase', text: "When you spot a missing baseline, your prephrase almost writes itself: *\"What was [the relevant metric] before [the intervention]?\"* or *\"How does [the result] compare to [the baseline group]?\"* This prephrase targets the gap directly and makes the Yes/No Test easy to apply." },

    { type: 'hr' },

    { type: 'h2', text: 'Practice Problem' },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },

    { type: 'question-card',
      id: 'DR-7-3-001',
      questionType: 'Evaluate the Argument',
      difficulty: 'medium',
      stimulus: "A recent study involved feeding a high-salt diet to a rat colony. A few months after the experiment began, standard tests of the rats' blood pressure revealed that about 25 percent of the colony had normal, healthy blood pressure, about 70 percent of the colony had high blood pressure, and 5 percent of the colony had extremely high blood pressure. The conclusion from these results is that high-salt diets are linked to high blood pressure in rats.",
      question: "The answer to which one of the following questions is most relevant to evaluating the conclusion drawn above?",
      options: [
        "(A) How much more salt than is contained in a rat's normal diet was there in the high-salt diet?",
        "(B) Did the high blood pressure have any adverse health effects on those rats that developed it?",
        "(C) What percentage of naturally occurring rat colonies feed on high-salt diets?",
        "(D) How many rats in the colony studied had abnormally high blood pressure before the study began? (Correct)",
        "(E) Have other species of rodents been used in experiments of the same kind?",
      ],
    },

    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },

    { type: 'h2', text: 'Step-by-Step Analysis' },
    { type: 'paragraph', text: "*(Scroll down only after committing to an answer.)*" },
    { type: 'hr' },

    { type: 'h3', text: 'Step 1: Find the Conclusion' },
    { type: 'paragraph', text: "Let's break down the argument sentence by sentence to identify its structure." },

    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: "\"A recent study involved feeding a high-salt diet to a rat colony.\"", text: "This is **background** — it describes the experimental setup. A group of rats received a specific treatment (a high-salt diet).", badge: 'Background', badgeColor: 'slate' },
      { title: "\"A few months after the experiment began, standard tests of the rats' blood pressure revealed that about 25 percent of the colony had normal, healthy blood pressure, about 70 percent of the colony had high blood pressure, and 5 percent of the colony had extremely high blood pressure.\"", text: "This is the **premise** — the evidence gathered from the experiment. It is a snapshot of the rats' blood pressure *after* the high-salt diet.", badge: 'Premise', badgeColor: 'slate' },
      { title: "\"The conclusion from these results is that high-salt diets are linked to high blood pressure in rats.\"", text: "This is the **conclusion** — the author's causal claim. The author asserts that the salt diet *caused* (or is linked to) the high blood pressure.", badge: 'Conclusion', badgeColor: 'indigo' },
    ]},

    { type: 'h3', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "The argument concludes that the high-salt diet is linked to high blood pressure. The only evidence is a measurement taken *after* the rats ate the diet for several months. But the argument never tells us what the rats' blood pressure was *before* the study began." },

    { type: 'paragraph', text: "This is a textbook **Missing Baseline** gap. The author gives us the \"after\" picture (75% with high or extremely high blood pressure after eating salt) and concludes the salt caused it. But what if this particular colony of rats was genetically predisposed to hypertension? What if 75% of them *already* had high blood pressure before the study? If that were true, the salt diet had no effect at all — the \"after\" picture is identical to the \"before\" picture." },

    { type: 'callout', variant: 'default', title: 'The Gap in One Sentence', text: "The argument assumes that the high blood pressure observed after the diet represents a *change* from a normal baseline — but no baseline is provided." },

    { type: 'h3', text: 'Step 3: Prephrase the Pivotal Question' },
    { type: 'paragraph', text: "Since the core problem is the missing baseline, the pivotal question is:" },
    { type: 'blockquote', text: '*"What was the rats\' blood pressure before they started the high-salt diet?"*' },
    { type: 'paragraph', text: "If we knew the answer to this question, we could determine whether the salt diet actually changed anything. This is the single most decisive piece of information for evaluating this argument." },

    { type: 'h3', text: 'Step 4: Apply the Yes/No Test to Choice (D)' },
    { type: 'paragraph', text: "Choice (D) asks: *\"How many rats in the colony studied had abnormally high blood pressure before the study began?\"*" },
    { type: 'paragraph', text: "This directly matches our prephrase. Let's apply the Yes/No Test:" },

    { type: 'breakdown', labels: { title: 'Possible Answer', text: 'Effect on the Argument' }, items: [
      { title: '"A high number" — e.g., 75% already had high blood pressure before the study', text: 'The argument is **devastated**. If three-quarters of the rats already had high blood pressure before eating salt, then the salt diet changed nothing. The \"after\" data simply mirrors the \"before\" data, and the causal link between salt and blood pressure is completely unsupported.', badge: 'Weakens', badgeColor: 'red' },
      { title: '"A low number" — e.g., 0% had high blood pressure before the study', text: 'The argument is **powerfully strengthened**. If the colony started with normal blood pressure and then 75% developed high blood pressure after eating the high-salt diet, the diet is the most plausible explanation for the change. The baseline establishes that a genuine change occurred.', badge: 'Strengthens', badgeColor: 'green' },
    ]},

    { type: 'paragraph', text: "Choice (D) produces a clear, dramatic split. One answer destroys the argument; the other validates it. It passes the Yes/No Test decisively." },

    { type: 'hr' },

    { type: 'h3', text: 'Answer Choice Breakdown' },
    { type: 'paragraph', text: "Let's examine why each incorrect choice fails the Yes/No Test." },

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: "(A) How much more salt than is contained in a rat's normal diet was there in the high-salt diet?", text: "This asks about the *degree* of the treatment, not whether the treatment had any effect. Whether the salt content was slightly elevated or extremely elevated, the core question remains: did it actually cause a change in blood pressure? Knowing the salt concentration does not help resolve this. **Fails the Yes/No Test: neither a high nor low concentration decisively swings the causal claim.** A high concentration does not prove causation, and a low concentration does not disprove the observed data.", badge: 'Irrelevant Detail', badgeColor: 'red' },
      { title: "(B) Did the high blood pressure have any adverse health effects on those rats that developed it?", text: "This asks about the *consequences* of high blood pressure, not about what *caused* it. The argument's conclusion is about the cause of the blood pressure (the salt diet). Whether high blood pressure leads to health problems is an entirely different question — it concerns the downstream effects, not the upstream cause. **Fails the Yes/No Test: the consequences of the effect do not address whether the supposed cause produced the effect.**", badge: 'Consequence Trap', badgeColor: 'red' },
      { title: "(C) What percentage of naturally occurring rat colonies feed on high-salt diets?", text: "This asks about rats in the wild. The argument is about a controlled laboratory study. Whether wild rats eat high-salt diets has no bearing on whether *this* laboratory diet caused *this* colony's blood pressure to change. **Fails the Yes/No Test: the dietary habits of wild rats do not affect the validity of a controlled study.**", badge: 'Scope Shift', badgeColor: 'red' },
      { title: "(D) How many rats in the colony studied had abnormally high blood pressure before the study began?", text: "This is the **correct answer**. It directly targets the missing baseline. The Yes/No Test produces a clear split: a high pre-study rate of hypertension devastates the argument; a low pre-study rate of hypertension dramatically strengthens it. This is the single most decisive piece of information for evaluating the causal claim.", badge: 'Correct', badgeColor: 'green' },
      { title: "(E) Have other species of rodents been used in experiments of the same kind?", text: "The conclusion is specifically about *rats*. Whether mice, hamsters, or guinea pigs have been tested is irrelevant to evaluating whether *this* salt diet affected *this* rat colony. **Fails the Yes/No Test: no answer about other species resolves the causal claim about these rats.**", badge: 'Scope Shift', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Key Takeaway' },
    { type: 'paragraph', text: "The Missing Baseline is one of the most testable gaps in Evaluate the Argument questions. The pattern is always the same: the argument presents post-treatment data and concludes that the treatment caused the observed result, without ever establishing what the pre-treatment condition was." },

    { type: 'callout', variant: 'summary', title: 'The Missing Baseline Checklist', text: "**1. Spot the pattern:** The argument shows you results *after* an event, treatment, or policy — but never mentions the *before*.\n\n**2. Identify the gap type:** Is it a missing before/after comparison? A missing control group? A missing historical norm? An ignored alternative scenario?\n\n**3. Prephrase the baseline question:** *\"What was [the metric] before [the intervention]?\"* This almost always matches the correct answer.\n\n**4. Apply the Yes/No Test:** If the baseline was similar to the post-treatment data, the argument collapses. If the baseline was dramatically different, the argument is strongly supported. That split confirms your answer." },

    { type: 'h3', text: 'Avenues for Evaluation in Study-Based Arguments' },
    { type: 'paragraph', text: "When an argument relies on an experiment or study, the Missing Baseline is the most common gap — but it is not the only one. Keep these additional evaluation targets in mind:" },
    { type: 'breakdown', labels: { title: 'Evaluation Target', text: 'When It Applies' }, items: [
      { title: 'The Missing Baseline', text: 'The argument gives you \"after\" data without \"before\" data. Ask about the starting condition. **This is the most common and most powerful evaluation target for study-based arguments.**', badge: 'Most Common', badgeColor: 'green' },
      { title: 'The Missing Control Group', text: 'The argument describes a treatment group but no control group. Ask whether a comparable untreated group showed the same results. If you cannot ask about the \"before,\" the next best thing is a \"compared to what?\"', badge: 'Common', badgeColor: 'blue' },
      { title: 'The Alternative Cause', text: 'Something else changed at the same time as the treatment. Ask whether the other change — not the treatment — could explain the result.', badge: 'Common', badgeColor: 'blue' },
      { title: 'The Unrepresentative Sample', text: 'The study sample may not reflect the population the conclusion is about. Ask whether the sample is representative.', badge: 'Less Common', badgeColor: 'slate' },
    ]},

    { type: 'callout', variant: 'tip', title: 'Connecting to the Big Picture', text: "The Missing Baseline is a specific instance of the Gap Model that underlies all Evaluate, Strengthen, Weaken, and Assumption questions. When you see an argument that presents post-treatment data as evidence of causation, the gap is always the same: *the argument assumes the \"after\" picture is different from the \"before\" picture.* Whether you are asked to evaluate, strengthen, or weaken, identifying this gap is the first and most important step." },
  ]
};
