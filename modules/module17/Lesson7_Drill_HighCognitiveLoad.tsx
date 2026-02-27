import { Lesson } from '../../types';

export const Lesson7_Drill_HighCognitiveLoad: Lesson = {
  id: "17-7",
  title: "Drill: High Cognitive Load (PT-103-S-3-Q-22)",
  content: [
    { type: 'h2', text: 'High Cognitive Load' },
    { type: 'paragraph', text: 'High cognitive load stimuli pack many interrelated facts, rules, or conditions into a single paragraph. The difficulty does not come from any single logical step being hard\u2014it comes from the sheer number of moving parts you must track simultaneously. Names, quantities, conditions, and exceptions pile up, and the test rewards examinees who can hold the entire fact pattern in working memory without dropping or conflating details.' },

    { type: 'paragraph', text: 'The key to managing high cognitive load is structured deconstruction. Instead of trying to absorb the stimulus as prose, break it into discrete rule statements and label each one. Once you have a clean inventory of the rules, the "Must Be True" inference usually emerges from methodically applying one rule to the output of another.' },

    { type: 'callout', variant: 'tip', title: 'Strategy: Translate Before You Evaluate', text: 'Before looking at the answer choices, rewrite the stimulus as a set of numbered rules. Strip away narrative language and reduce each condition to its logical core. This converts a comprehension problem into an application problem\u2014much easier under time pressure.' },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: High Cognitive Load (PT-103-S-3-Q-22)' },
    { type: 'paragraph', text: 'This drill features a dense, multi-part rule system governing a voter\'s decision process. You must parse the rule precisely and then apply it to a specific scenario to determine what must be true more broadly.' },
    { type: 'paragraph', text: '**Instructions:** Read the stimulus carefully, translate the rule into logical terms, and commit to an answer before scrolling down to the analysis.' },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },


    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Translate the Rule' },
    { type: 'paragraph', text: 'Strip the rule down to its logical skeleton:' },

    { type: 'breakdown', labels: { title: 'Component', text: 'Translation' }, items: [
      { title: 'Scope Condition', text: 'The rule applies only when Kay is voting in a single-winner election AND there is at least one issue important to her.', badge: 'Scope', badgeColor: 'blue' },
      { title: 'Acceptable Condition', text: 'It is acceptable to vote for Candidate X (who has N disagreements) ONLY IF every other candidate has more than N disagreements with Kay.', badge: 'Core Rule', badgeColor: 'blue' },
      { title: 'Otherwise Clause', text: 'If the acceptable condition is not met\u2014meaning any other candidate has N or fewer disagreements\u2014then voting for X is unacceptable.', badge: 'Default', badgeColor: 'indigo' },
    ]},

    { type: 'paragraph', text: 'The critical insight is that the rule requires a unique minimum. A candidate must be strictly better (fewer disagreements) than every other candidate. Ties are not enough.' },

    { type: 'h4', text: 'Step 2: Apply to the Scenario' },
    { type: 'paragraph', text: 'The mayoral election confirms the rule works: Kay disagrees with Legrand and Norton on 1 issue each but agrees with Medina on that issue (0 disagreements). Medina is strictly better, so voting for Medina is acceptable. This scenario is provided to help you understand the rule\u2014the question asks about any election, not just this one.' },

    { type: 'h4', text: 'Step 3: Evaluate Each Answer' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) If there are no issues important to her...', text: 'The rule explicitly requires "at least one issue important to her" to activate. When there are zero important issues, the rule does not apply at all. We cannot conclude it is unacceptable\u2014the rule is simply silent.', badge: 'Scope Trap', badgeColor: 'red' },
      { title: '(B) If she agrees with each... on most issues...', text: 'Agreement on "most" issues tells us nothing about the comparative number of disagreements between candidates. The rule is purely comparative\u2014it cares only about relative disagreement counts, not absolute agreement ratios.', badge: 'Ratio Trap', badgeColor: 'red' },
      { title: '(C) If she agrees with a particular candidate on only one issue...', text: 'Knowing how many issues she agrees on with one candidate is insufficient. The rule requires comparing disagreement counts across all candidates. She might disagree with this candidate on 5 issues but with every other candidate on 10.', badge: 'Incomplete Data', badgeColor: 'red' },
      { title: '(D) If she disagrees with each of the candidates on exactly three issues...', text: 'If every candidate has exactly 3 disagreements, no candidate is strictly better than any other. The acceptable condition requires that all other candidates have more disagreements. With a perfect tie, this condition fails for every candidate. Therefore, it is unacceptable to vote for any of them.', badge: 'Correct', badgeColor: 'green' },
      { title: '(E) If there are more issues... disagrees... than agrees...', text: 'This compares disagreements to agreements within a single candidate. The rule never makes this comparison\u2014it compares disagreement counts between candidates. This is an internal-ratio trap.', badge: 'Internal Ratio Trap', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Managing Cognitive Load: Key Techniques' },
    { type: 'table', headers: ['Technique', 'What It Does', 'When to Use It'], rows: [
      ['Rule Translation', 'Converts prose into numbered logical rules', 'Whenever a stimulus contains embedded conditions or definitions'],
      ['Scope Checking', 'Identifies when a rule does and does not apply', 'When an answer choice tests a scenario outside the rule\'s stated scope'],
      ['Tie Analysis', 'Tests what happens when values are equal', 'When a rule requires strict inequality (more than, fewer than)'],
      ['Comparative Focus', 'Keeps attention on between-item comparisons', 'When wrong answers try to shift focus to within-item ratios'],
    ]},

    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'High cognitive load questions are solved by reducing complexity. Translate the rule into logical components, check the scope conditions, and then test the answer choices against the rule mechanically. Pay special attention to tie scenarios\u2014rules that require strict superiority break down when all candidates are equal.' },
  ]
};
