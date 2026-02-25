import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "7-1",
  title: "Introduction to Evaluate the Argument",
  content: [
    { type: 'h2', text: 'MODULE 7: Evaluate the Argument' },
    { type: 'paragraph', text: '**Question Goal**\n\n**Identify the one piece of information — usually phrased as a question — whose answer would be most useful in determining whether an argument\'s conclusion is well-supported or fatally flawed.** You are not strengthening or weakening. You are finding the single pivot point that could do either.' },

    { type: 'hr' },

    { type: 'h3', text: 'Why This Matters' },
    { type: 'paragraph', text: "Evaluate the Argument is one of the rarest question types on the LSAT, appearing roughly once every two to three scored sections. But rarity does not mean unimportance. Because it appears infrequently, many test-takers never develop a confident method for it, and it becomes a reliable source of lost points under pressure." },
    { type: 'paragraph', text: "More importantly, Evaluate questions test the exact same core skill as Strengthen, Weaken, and Necessary Assumption questions: **gap identification**. Every one of these question types requires you to find the logical gap between the premises and the conclusion. The only difference is what you do once you find it:" },
    { type: 'breakdown', labels: { title: 'Question Type', text: 'What You Do with the Gap' }, colWidth: 'equal', items: [
      { title: 'Strengthen', text: 'Find the gap, then pick the answer choice that **fills** it — the piece of information that makes the conclusion more likely to follow from the premises.', badge: 'Bridge the Gap', badgeColor: 'green' },
      { title: 'Weaken', text: 'Find the gap, then pick the answer choice that **widens** it — the piece of information that makes the conclusion less likely to follow from the premises.', badge: 'Widen the Gap', badgeColor: 'red' },
      { title: 'Evaluate', text: 'Find the gap, then pick the answer choice whose **answer could do either** — one possible answer to the question would strengthen the argument, and another would weaken it.', badge: 'Probe the Gap', badgeColor: 'blue' },
    ]},
    { type: 'paragraph', text: "If you have already mastered Strengthen and Weaken, you have already done 90% of the work required for Evaluate. The remaining 10% is adopting a neutral mindset and learning to apply the Yes/No Test (covered below)." },
    { type: 'callout', variant: 'tip', title: 'Frequency', text: "Evaluate questions appear on roughly **1 in 3 scored Logical Reasoning sections**, making them less common than Strengthen or Weaken but still testable on any given exam. Because they share the same underlying skill, mastering Evaluate also reinforces your performance on the more frequent gap-based question types." },

    { type: 'hr' },

    { type: 'h3', text: 'Recognizing the Question' },
    { type: 'paragraph', text: "Evaluate stems have a distinctive pattern: they ask you to identify a piece of information that would be **useful**, **helpful**, or **relevant** for assessing the argument. The correct answer is always phrased as a question or as a piece of information whose value depends on what the answer turns out to be." },
    { type: 'table', headers: ['Question Stem Pattern', 'Key Signal'], rows: [
      ['"The answer to which one of the following questions would contribute most to an evaluation of the argument?"', 'Asks for a **question** whose answer evaluates'],
      ['"Knowing which one of the following would be most useful in evaluating the argument?"', 'Asks what would be **useful to know**'],
      ['"Which one of the following would be most important to determine in evaluating the argument?"', 'Asks what is **important to determine**'],
      ['"The answer to which one of the following questions would be most helpful in order to evaluate the argument?"', 'Asks for a **helpful question**'],
      ['"Which one of the following would it be most useful to know in order to evaluate the argument above?"', 'Asks what would be **useful to know**'],
    ]},
    { type: 'callout', variant: 'default', title: 'Distinguish from Strengthen/Weaken', text: "If the stem says \"strengthens\" or \"weakens\" the argument, it is not an Evaluate question. Evaluate stems are always **neutral** — they use words like \"evaluate,\" \"assess,\" \"determine,\" \"useful to know,\" or \"helpful in judging.\" The stem never tells you which direction the information should push." },

    { type: 'hr' },

    { type: 'h2', text: 'Evaluate vs. Strengthen vs. Weaken' },
    { type: 'paragraph', text: "All three question types are built on the same foundation: the **Gap Model**. The author states premises and draws a conclusion, and there is a logical gap between them — an unstated assumption, an unexplored alternative, or a missing piece of evidence. The three question types differ only in what the correct answer does to that gap." },

    { type: 'table', headers: ['Feature', 'Strengthen', 'Weaken', 'Evaluate'], rows: [
      ['Core Skill', 'Find the gap', 'Find the gap', 'Find the gap'],
      ['Correct Answer Does What?', 'Fills the gap (makes conclusion more likely)', 'Exploits the gap (makes conclusion less likely)', 'Targets the gap (could go either way)'],
      ['Answer Format', 'A statement of fact', 'A statement of fact', 'A question or piece of information'],
      ['Your Stance', 'You are the argument\'s ally', 'You are the argument\'s critic', 'You are a neutral investigator'],
      ['Number of "Right Directions"', 'One (strengthen only)', 'One (weaken only)', 'Two (one answer strengthens, one weakens)'],
    ]},

    { type: 'paragraph', text: "The key insight: **the correct Evaluate answer is the question whose two possible answers split into a Strengthen answer and a Weaken answer.** If you answer \"Yes\" and the argument gets stronger, then answer \"No\" and the argument gets weaker (or vice versa), you have found the right choice." },

    { type: 'hr' },

    { type: 'h2', text: 'The Neutral Evaluator Mindset' },
    { type: 'paragraph', text: "Strengthen and Weaken questions ask you to take sides. You are either helping the argument or attacking it. Evaluate questions demand the opposite: **you are a neutral investigator looking for the single most important piece of information that would resolve the argument, regardless of which direction it resolves.**" },

    { type: 'paragraph', text: "This neutral stance has practical implications for how you approach the answer choices:" },
    { type: 'breakdown', labels: { title: 'Mindset Trap', text: 'How to Avoid It' }, items: [
      { title: 'Picking an answer that only strengthens', text: 'If answering the question one way helps the argument, but answering it the other way has no effect, the choice is incomplete. The correct Evaluate answer must cut both ways.', badge: 'Common Trap', badgeColor: 'red' },
      { title: 'Picking an answer that only weakens', text: 'Same problem in reverse. An answer that exposes a flaw but whose opposite would not help the argument is a Weaken answer, not an Evaluate answer.', badge: 'Common Trap', badgeColor: 'red' },
      { title: 'Judging the argument before evaluating', text: 'Do not decide whether the argument is good or bad before selecting your answer. Your job is to find the pivot point, not to render a verdict.', badge: 'Mindset Error', badgeColor: 'red' },
    ]},

    { type: 'callout', variant: 'tip', title: 'Think Like a Researcher', text: "Imagine you are a researcher assigned to test whether this argument holds up. You have the budget to investigate exactly one question. Which question would give you the most decisive result — the one where the answer would either confirm or refute the conclusion? That is the Evaluate answer." },

    { type: 'hr' },

    { type: 'h2', text: 'The Yes/No Test' },
    { type: 'paragraph', text: "The Yes/No Test is the definitive tool for Evaluate questions. It is the Evaluate-specific version of what earlier lessons called the Variance Test. The logic is identical, but framing it as \"Yes/No\" makes it easier to apply quickly under timed conditions." },

    { type: 'h4', text: 'How It Works' },
    { type: 'process', title: 'The Yes/No Test', steps: [
      '**Take the answer choice** (which is phrased as a question or a piece of information to be determined).',
      '**Answer it "Yes"** (or supply a favorable value). Ask: does this strengthen the argument?',
      '**Answer it "No"** (or supply an unfavorable value). Ask: does this weaken the argument?',
      '**Check the split.** If "Yes" strengthens and "No" weakens (or vice versa), the choice **passes** the test and is likely correct. If both answers leave the argument unchanged, or if only one direction has an effect, the choice **fails** the test.',
    ]},

    { type: 'h4', text: 'Quick Demonstration' },
    { type: 'paragraph', text: 'Suppose an argument concludes: *"The city should build a new bridge because the current bridge is congested."* One answer choice asks: *"Are there alternative routes that could alleviate the congestion without a new bridge?"*' },
    { type: 'breakdown', labels: { title: 'Answer', text: 'Effect on Argument' }, items: [
      { title: '"Yes" — there are alternative routes', text: 'The argument is **weakened**: if alternatives exist, the new bridge may not be needed.', badge: 'Weakens', badgeColor: 'red' },
      { title: '"No" — there are no alternative routes', text: 'The argument is **strengthened**: the bridge is the only solution, so building it is more justified.', badge: 'Strengthens', badgeColor: 'green' },
    ]},
    { type: 'paragraph', text: "Because \"Yes\" weakens and \"No\" strengthens, this choice **passes** the Yes/No Test. It targets the gap (the assumption that no alternatives exist) and could swing the argument in either direction." },

    { type: 'callout', variant: 'default', title: 'Why Wrong Answers Fail the Yes/No Test', text: "Wrong answers typically fail in one of two ways:\n\n1. **No impact either way.** Whether you answer \"Yes\" or \"No,\" the argument stays the same. The question is irrelevant to the gap.\n2. **Impact in only one direction.** One answer affects the argument, but the opposite answer has no effect. This is a disguised Strengthen or Weaken answer, not a true Evaluate answer." },

    { type: 'hr' },

    { type: 'h2', text: 'Common Evaluation Targets' },
    { type: 'paragraph', text: "Certain argument patterns recur frequently in Evaluate questions. Recognizing these patterns will help you spot the gap faster and prephrase the pivotal question before reading the answer choices." },

    { type: 'table', headers: ['Argument Pattern', 'What the Argument Assumes', 'Typical Evaluation Question'], rows: [
      ['**Causal Claim** — "X caused Y"', 'No alternative cause produced Y; the correlation is not coincidental', '"Were there other factors that could have caused Y?"'],
      ['**Statistical / Study Claim** — "The data shows X"', 'The data is representative; no confounding variables; baseline is established', '"What was the baseline before the study began?"'],
      ['**Analogy** — "A is like B, so what works for A will work for B"', 'A and B are similar in the relevant respects', '"Are there significant differences between A and B that would affect the outcome?"'],
      ['**Feasibility / Recommendation** — "We should do X"', 'X is practical; benefits outweigh costs; no better alternative exists', '"Are the costs of implementing X prohibitively high?"'],
      ['**Prediction** — "X will happen"', 'Current trends will continue; no interfering factors', '"Are there factors that could prevent X from occurring?"'],
      ['**Generalization** — "This sample proves the whole group is like X"', 'The sample is representative of the whole group', '"Is the sample representative of the larger population?"'],
    ]},

    { type: 'callout', variant: 'tip', title: 'Pattern Recognition Saves Time', text: "When you recognize the argument pattern, you can often prephrase the gap before reading the answer choices. For a causal claim, your mental question is always some version of \"Was there an alternative cause?\" For a study-based claim, it is \"Was there a proper baseline or control group?\" This prephrasing dramatically speeds up answer choice evaluation." },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'paragraph', text: "Let\'s apply everything from this lesson to a complete Evaluate question." },

    { type: 'question-card',
      id: 'WE-7-1-001',
      questionType: 'Evaluate the Argument',
      difficulty: 'easy',
      stimulus: "A pharmaceutical company tested a new headache medication on 500 volunteers who reported frequent headaches. After four weeks of daily use, 80% of the volunteers reported a significant reduction in headache frequency. The company concluded that the medication is highly effective at reducing headaches.",
      question: "The answer to which one of the following questions would be most useful in evaluating the argument above?",
      options: [
        "(A) What percentage of the general population experiences frequent headaches?",
        "(B) Were the volunteers aware that they were taking the new medication rather than a placebo? (Correct)",
        "(C) Has the pharmaceutical company previously developed successful medications?",
        "(D) Did any of the volunteers experience side effects from the medication?",
        "(E) How does the cost of the new medication compare to existing headache treatments?",
      ],
    },

    { type: 'h3', text: 'Walkthrough' },

    { type: 'h4', text: 'Step 1: Find the Conclusion' },
    { type: 'paragraph', text: "The conclusion is: *\"The medication is highly effective at reducing headaches.\"* The evidence is that 80% of volunteers reported improvement after four weeks." },

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "The argument assumes the medication caused the improvement. But the study description reveals no mention of a control group or placebo. Without a placebo comparison, the improvement could be due to the **placebo effect** — volunteers felt better simply because they believed they were receiving treatment." },

    { type: 'h4', text: 'Step 3: Apply the Yes/No Test to Answer (B)' },
    { type: 'breakdown', labels: { title: 'Answer to (B)', text: 'Effect' }, items: [
      { title: '"Yes" — volunteers knew they were taking the real medication', text: 'The argument is **weakened**. If volunteers knew they had the real drug, the placebo effect could explain the improvement. The study does not isolate the medication\'s effect from the psychological expectation of improvement.', badge: 'Weakens', badgeColor: 'red' },
      { title: '"No" — volunteers did not know (blind study)', text: 'The argument is **strengthened**. If volunteers could not distinguish the medication from a placebo, the reported improvement is more likely to reflect the medication\'s genuine effect rather than expectations.', badge: 'Strengthens', badgeColor: 'green' },
    ]},
    { type: 'paragraph', text: "Choice (B) passes the Yes/No Test: one answer strengthens and the other weakens. It targets the gap (was the study properly controlled?)." },

    { type: 'h4', text: 'Why the Other Choices Fail' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Why It Fails the Yes/No Test' }, items: [
      { title: '(A) Headache frequency in the general population', text: 'Whether 5% or 50% of people get headaches, it does not change whether *this* medication worked for *these* volunteers. **No impact either way.**', badge: 'Irrelevant', badgeColor: 'red' },
      { title: '(C) Company\'s prior track record', text: 'Past successes do not validate this specific study. A company can have a good record and still produce a flawed study. **No impact on this argument.**', badge: 'Irrelevant', badgeColor: 'red' },
      { title: '(D) Side effects', text: 'Side effects are a separate concern from effectiveness. Even if the medication has side effects, it could still be effective at reducing headaches. **Does not address the gap.**', badge: 'Wrong Gap', badgeColor: 'red' },
      { title: '(E) Cost comparison', text: 'Cost is relevant to a recommendation to *use* the medication, but the conclusion is about *effectiveness*, not affordability. **Out of scope.**', badge: 'Wrong Scope', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. Evaluate = Strengthen + Weaken from a neutral perspective.** All three share the Gap Model.\n\n**2. The Yes/No Test is your primary tool.** The correct answer is the one whose two possible answers split into a strengthener and a weakener.\n\n**3. Wrong answers fail in predictable ways:** they are irrelevant (no impact either way), one-directional (only strengthen or only weaken), or target the wrong gap.\n\n**4. Adopt the Neutral Evaluator Mindset.** You are not taking sides. You are finding the single most decisive piece of information.\n\n**5. Recognize common patterns.** Causal claims, studies, analogies, recommendations, and generalizations all have predictable gaps that Evaluate questions target." },
  ]
};
