import { Lesson } from '../../types';

export const Lesson11_ReferenceGuide: Lesson = {
  id: "7-11",
  title: "Reference Guide",
  content: [
    { type: 'h2', text: 'Evaluate the Argument: Complete Reference' },
    { type: 'paragraph', text: 'A condensed reference for every concept, method, target type, and trap in Evaluate the Argument questions. Print this or bookmark it for review before test day.' },
    { type: 'hr' },

    { type: 'h3', text: 'Evaluation Targets' },
    { type: 'table', headers: ['Target Type', 'Frequency', 'Core Gap', 'Default Prephrase'], rows: [
      ['**Causal Claims**', '~30%', 'Alternative cause not ruled out', '"Was there another factor that could explain the effect?"'],
      ['**Statistical Generalizations**', '~25%', 'Sample may not represent population', '"Is the sample representative of the target group?"'],
      ['**Analogies**', '~15%', 'Source and target may differ relevantly', '"Are the two cases similar in the respects that matter?"'],
      ['**Feasibility Claims**', '~12%', 'Plan may not be practical', '"Can the plan actually be implemented as described?"'],
      ['**Predictions**', '~10%', 'Conditions may change', '"Will the trend continue, or could conditions change?"'],
      ['**Definitions / Categories**', '~8%', 'Criteria may not apply', '"Does the subject actually meet the definition?"'],
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'The 4-Step Method' },
    { type: 'process', steps: [
      '**Find the Conclusion:** Identify the author\'s final claim. Separate it from premises, background, and context.',
      '**Identify the Gap:** Determine the unstated assumption or unexplored alternative that connects premises to conclusion. Use the "Even If True" Test: accept all premises and ask whether the conclusion could still be wrong.',
      '**Prephrase the Pivotal Question:** Turn the gap into a question whose answer would most decisively resolve the argument. Your prephrase should be two-directional: one answer strengthens, the other weakens.',
      '**Apply the Yes/No Test:** For each candidate answer, supply "Yes" then "No." The correct answer produces a dramatic split — one response strengthens, the other weakens. Incorrect answers produce no split or a one-sided effect.',
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'The Yes/No Test' },
    { type: 'paragraph', text: "The definitive confirmation tool for Evaluate questions. Every answer choice must pass this test to be correct." },
    { type: 'breakdown', labels: { title: 'Step', text: 'Action' }, items: [
      { title: '1. Read the answer choice', text: 'It will be phrased as a question or as a piece of information to be determined.', badge: 'Setup', badgeColor: 'slate' },
      { title: '2. Supply "Yes"', text: 'Imagine a favorable answer. Does this make the conclusion more likely?', badge: 'Test', badgeColor: 'blue' },
      { title: '3. Supply "No"', text: 'Imagine an unfavorable answer. Does this make the conclusion less likely?', badge: 'Test', badgeColor: 'blue' },
      { title: '4. Evaluate the split', text: 'Correct: dramatic swing (one strengthens, one weakens). Incorrect: no effect, one-sided effect, or both push the same direction.', badge: 'Verdict', badgeColor: 'green' },
    ]},

    { type: 'paragraph', text: "**When two answers both pass:** Choose the one with the more decisive split, the more central connection to the conclusion, and the greater specificity to the argument." },
    { type: 'hr' },

    { type: 'h3', text: 'Recognizing the Question Stem' },
    { type: 'table', headers: ['Stem Pattern', 'Signal'], rows: [
      ['"The answer to which one of the following questions would contribute most to an evaluation of the argument?"', 'Asks for a **question**'],
      ['"Knowing which one of the following would be most useful in evaluating the argument?"', 'Asks what is **useful to know**'],
      ['"Which one of the following would be most important to determine in evaluating the argument?"', 'Asks what is **important to determine**'],
      ['"Which one of the following would it be most useful to know in order to evaluate the argument above?"', 'Asks what is **useful to know**'],
    ]},
    { type: 'paragraph', text: "All stems are **neutral** — they never say \"strengthens\" or \"weakens.\" If the stem picks a direction, it is a Strengthen or Weaken question, not Evaluate." },
    { type: 'hr' },

    { type: 'h3', text: 'Common Traps' },
    { type: 'breakdown', labels: { title: 'Trap', text: 'How to Spot and Avoid It' }, items: [
      { title: 'Irrelevant to the Gap', text: 'The choice asks about something topically related but logically disconnected from the gap between premises and conclusion. **Defense:** Apply the Yes/No Test — both answers leave the argument unchanged.', badge: 'Very Common', badgeColor: 'red' },
      { title: 'Only Strengthens', text: 'One answer to the question helps the argument, but the other answer has no effect. This is a disguised Strengthen answer. **Defense:** The "No" side of the Yes/No Test produces no impact.', badge: 'Common', badgeColor: 'red' },
      { title: 'Only Weakens', text: 'One answer hurts the argument, but the other has no effect. This is a disguised Weaken answer. **Defense:** The "Yes" side of the Yes/No Test produces no impact.', badge: 'Common', badgeColor: 'red' },
      { title: 'Questions the Premise', text: 'The choice asks whether a stated fact is actually true. On the LSAT, premises are accepted as given. **Defense:** Check whether the choice challenges the truth of stated evidence rather than the reasoning from evidence to conclusion.', badge: 'Moderate', badgeColor: 'slate' },
      { title: 'Scope Shift', text: 'The choice asks about a different group, time period, location, or variable than the one the conclusion addresses. **Defense:** Verify that the nouns and timeframes in the choice match those in the conclusion.', badge: 'Moderate', badgeColor: 'slate' },
      { title: 'Too Broad', text: 'The choice asks a sweeping question that could apply to any argument on any topic. **Defense:** The correct answer is specific to *this* argument\'s particular gap.', badge: 'Less Common', badgeColor: 'slate' },
      { title: 'Obvious Gap Bait', text: 'On hard questions, the most obvious gap gets a matching wrong answer. **Defense:** Search for secondary gaps before committing. Test your winner against the runner-up.', badge: 'Hard Questions', badgeColor: 'red' },
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'Difficulty Factors' },
    { type: 'table', headers: ['Factor', 'What It Does', 'Strategy'], rows: [
      ['**Compound Gaps**', 'Argument has 2+ vulnerabilities; trap matches your first prephrase', 'Search for secondary gaps; hold two prephrases loosely'],
      ['**Abstract Language**', 'Correct answer uses general/technical terms', 'Translate abstract terms to stimulus-specific language before testing'],
      ['**Multiple Viable Candidates**', '2-3 answers pass initial gut check', 'Apply Yes/No Test to all; choose the most decisive split'],
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'Quick Identification Process' },
    { type: 'process', title: 'Rapid Target ID (Under 15 Seconds)', steps: [
      '**Read the conclusion.** What type of claim is it? Causal, generalization, analogy, recommendation, prediction, or classification?',
      '**Match to target type.** Use signal words from the Evaluation Targets table.',
      '**Recall the default prephrase.** Each target type has a standard pivotal question.',
      '**Scan for a secondary gap.** On hard questions, ask: "Is there another way this could fail?"',
    ]},
    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Test Day Checklist', text: "Before selecting your answer on any Evaluate question:\n\n**1.** Can you state the conclusion in your own words?\n**2.** Can you name the gap between premises and conclusion?\n**3.** Does your chosen answer pass the Yes/No Test with a clean split?\n**4.** Have you checked for a secondary gap (especially on hard questions)?\n**5.** Have you verified the answer is specific to *this* argument, not a generic question that could apply to any stimulus?\n**6.** Is the answer neutral (could go either way), not one-directional?" },
  ]
};
