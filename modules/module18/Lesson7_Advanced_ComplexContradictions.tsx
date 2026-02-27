import { Lesson } from '../../types';

export const Lesson7_Advanced_ComplexContradictions: Lesson = {
  id: "18-7",
  title: "Advanced: Complex Contradictions",
  content: [
    { type: 'h2', text: 'Advanced: Complex Contradictions' },
    { type: 'paragraph', text: 'Easy Must Be False questions feature a single rule and a single contradiction. The hardest questions layer multiple interlocking rules so that the impossibility emerges only when you combine them. No single rule is violated in isolation; the contradiction arises from the interaction of the full system. This lesson analyzes what makes these questions difficult, identifies the three factors that drive complexity, and provides advanced strategies for dismantling multi-rule contradiction puzzles.' },

    { type: 'hr' },

    { type: 'h3', text: 'The Three Difficulty Factors' },
    { type: 'paragraph', text: 'High-difficulty Must Be False questions earn their difficulty through one or more of three mechanisms. Recognizing which factor is in play tells you exactly where to focus your analysis and prevents you from wasting time on red herrings.' },

    { type: 'h4', text: 'Factor 1: Multi-Step Deductions' },
    { type: 'paragraph', text: 'On easy questions, the stimulus states a rule and the correct answer violates it directly. On hard questions, you must chain two or more rules together to derive a hidden constraint that the stimulus never states explicitly. The contradiction exists only against this derived constraint, not against any individual rule.' },
    { type: 'callout', variant: 'default', title: 'Concrete Example: Multi-Step Deduction', text: 'Stimulus: "All licensed electricians passed the safety exam. Everyone who passed the safety exam completed the apprenticeship program. No one who completed the apprenticeship program is under 21."\n\nThe hidden constraint (requiring all three rules): All licensed electricians are at least 21. This is never stated directly, but an answer claiming a 19-year-old licensed electrician must be false because it violates the chain: Licensed \u2192 Passed Exam \u2192 Completed Apprenticeship \u2192 At Least 21.' },

    { type: 'h4', text: 'Factor 2: Embedded Distractors' },
    { type: 'paragraph', text: 'Hard stimuli include information that is true but irrelevant to the core contradiction. These extra facts tempt you into building the wrong logical chain or cause you to overlook the critical constraint. The test-writers know that under time pressure, you are likely to treat every sentence as equally important. The skill is knowing which rules are load-bearing and which are scaffolding.' },
    { type: 'callout', variant: 'default', title: 'Concrete Example: Embedded Distractor', text: 'Stimulus: "The museum is open every day except Monday. Guided tours are offered only on weekdays. The gift shop closes one hour before the museum. Photography is prohibited in the east wing."\n\nThe photography rule is irrelevant to most Must Be False questions about scheduling. A test-taker who tries to incorporate every fact into a single logical chain will waste time and potentially miss the real constraint: guided tours cannot occur on Monday (closed) or on weekends (weekdays only), so they are available only Tuesday through Friday.' },

    { type: 'h4', text: 'Factor 3: Conditional Reversals and Contrapositives' },
    { type: 'paragraph', text: 'The hardest Must Be False questions require you to use the contrapositive of a conditional rule\u2014not just the rule itself\u2014to spot the contradiction. The stimulus states "If A, then B," but the contradiction arises because the correct answer asserts "not B and A," which violates the contrapositive ("If not B, then not A"). Test-takers who do not instinctively form contrapositives will miss these contradictions entirely.' },
    { type: 'callout', variant: 'default', title: 'Concrete Example: Contrapositive Contradiction', text: 'Stimulus: "Any researcher who publishes in a peer-reviewed journal has at least one co-author."\n\nRule: Published in peer-reviewed journal \u2192 Has at least one co-author.\nContrapositive: No co-author \u2192 Did not publish in a peer-reviewed journal.\n\nAn answer stating "Dr. Hale published a solo-authored paper in the Journal of Applied Physics, a peer-reviewed journal" must be false. It asserts the sufficient condition (peer-reviewed publication) while denying the necessary condition (co-author).' },

    { type: 'hr' },

    { type: 'h3', text: 'Complex Contradiction Drill' },
    { type: 'paragraph', text: 'This problem demonstrates all three difficulty factors. The stimulus contains multiple rules, at least one embedded distractor, and the contradiction requires chaining a conditional with its contrapositive. Commit to an answer before reading the analysis.' },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },


    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Map the Rule System' },
    { type: 'paragraph', text: 'Extract every conditional rule and identify the logical chain.' },
    { type: 'breakdown', labels: { title: 'Rule', text: 'Logical Form' }, items: [
      { title: 'Rule 1: Merit Scholarship \u2192 GPA > 3.5', text: 'Every merit scholar maintains a GPA above 3.5. This is a universal conditional with no exceptions.', badge: 'Chain Link 1', badgeColor: 'indigo' },
      { title: 'Rule 2: GPA > 3.5 \u2192 Honors Eligible', text: 'Students with a GPA above 3.5 are eligible for the honors seminar. This extends the chain.', badge: 'Chain Link 2', badgeColor: 'indigo' },
      { title: 'Rule 3: First-Year \u2192 NOT Honors Eligible', text: 'No first-year student is eligible for the honors seminar. This blocks the end of the chain for first-year students.', badge: 'Blocker', badgeColor: 'red' },
      { title: 'Distractor: Need-Based Aid', text: 'Some first-year students receive need-based aid, which is independent of academic performance. This is true but irrelevant to the conditional chain.', badge: 'Noise', badgeColor: 'slate' },
      { title: 'Context: Numbers', text: 'Fifteen scholarships out of four hundred students. Provides scale but does not alter the logical rules.', badge: 'Context', badgeColor: 'slate' }
    ]},

    { type: 'h4', text: 'Step 2: Derive the Hidden Constraint' },
    { type: 'paragraph', text: 'Chain the three rules together:' },
    { type: 'process', title: 'The Deductive Chain', steps: [
      'Merit Scholarship \u2192 GPA > 3.5 (Rule 1)',
      'GPA > 3.5 \u2192 Honors Eligible (Rule 2)',
      'Therefore: Merit Scholarship \u2192 Honors Eligible (combining Rules 1 and 2)',
      'First-Year \u2192 NOT Honors Eligible (Rule 3)',
      'Contrapositive of the combined rule: NOT Honors Eligible \u2192 NOT Merit Scholarship',
      'Substituting Rule 3 into the contrapositive: First-Year \u2192 NOT Merit Scholarship'
    ]},
    { type: 'paragraph', text: 'The hidden constraint: **No first-year student can have a merit scholarship.** This is never stated in the stimulus, but it follows necessarily from chaining all three rules and taking the contrapositive.' },

    { type: 'callout', variant: 'default', title: 'Why This Is Hard', text: 'The stimulus never says "first-year students cannot receive merit scholarships." You must build the chain yourself (Factor 1), ignore the need-based aid distractor (Factor 2), and use the contrapositive to connect the first-year restriction back to scholarships (Factor 3). All three difficulty factors are in play.' },

    { type: 'h4', text: 'Step 3: Evaluate Each Answer' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) Some students who are eligible for the honors seminar do not have merit scholarships.', text: 'Rule 2 says GPA > 3.5 makes a student honors eligible. But a student could have a high GPA without a scholarship. The scholarship guarantees a high GPA, not the reverse. This is entirely possible.', badge: 'Possible', badgeColor: 'blue' },
      { title: '(B) A second-year student with a 3.6 GPA does not have a merit scholarship.', text: 'Having a high GPA does not require having a scholarship. The conditional runs from scholarship to GPA, not the other way around. A second-year student could earn a 3.6 through their own effort. This is possible.', badge: 'Possible', badgeColor: 'blue' },
      { title: '(C) A first-year student who receives need-based financial aid has a GPA above 3.5.', text: 'Rule 3 says first-year students are not honors eligible. Rule 2 says GPA > 3.5 makes a student honors eligible. Does this mean a first-year student cannot have a GPA above 3.5? No\u2014Rule 2 states eligibility, but Rule 3 overrides it for first-year students by status. The rules could mean that first-year students are categorically excluded from the honors seminar regardless of GPA. A first-year student could have a 3.8 GPA and still be ineligible simply because of their year. The stimulus does not say "only students with GPA > 3.5 are honors eligible"; other conditions could apply. However, the most natural reading creates a tension. On the LSAT, this answer is designed to be a tempting distractor but remains technically possible if the first-year exclusion is an independent, overriding rule.', badge: 'Possible', badgeColor: 'blue' },
      { title: '(D) A first-year student at Thornfield Academy received a merit scholarship this year.', text: 'This directly violates the hidden constraint derived in Step 2. If a first-year student received a merit scholarship, then by Rule 1 they have a GPA > 3.5, by Rule 2 they are honors eligible, but by Rule 3 no first-year student is honors eligible. This creates an inescapable contradiction. The student cannot simultaneously satisfy Rule 1 and Rule 3.', badge: 'Correct', badgeColor: 'green' },
      { title: '(E) Fewer than ten percent of Thornfield Academy students are eligible for the honors seminar.', text: 'Ten percent of 400 is 40 students. Only 15 merit scholars are guaranteed honors eligibility, and other students might also qualify. But the stimulus does not require more than 15 to be eligible. Fewer than 40 being eligible is entirely consistent with the facts.', badge: 'Possible', badgeColor: 'blue' }
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Advanced Strategies for Complex Contradictions' },

    { type: 'h4', text: 'Strategy 1: Build the Full Chain Before Reading Answers' },
    { type: 'paragraph', text: 'On hard Must Be False questions, the contradiction is almost never visible from any single rule. Before looking at the answer choices, connect every conditional rule into a single chain and derive all hidden constraints. Write out the chain and its contrapositive. This takes 30\u201345 seconds but saves you from testing each answer against five separate rules.' },

    { type: 'h4', text: 'Strategy 2: Flag and Ignore Distractors' },
    { type: 'paragraph', text: 'Mentally tag each sentence in the stimulus as either a "rule" (creates a conditional, universal, or numerical constraint) or "context" (provides background, examples, or irrelevant detail). Rules are load-bearing; context is not. On hard questions, at least one sentence will be pure context designed to waste your time or lure you into building the wrong chain. If a fact is not part of any conditional relationship, set it aside.' },

    { type: 'h4', text: 'Strategy 3: Test from the Contrapositive' },
    { type: 'paragraph', text: 'When an answer choice seems possible on its face, check whether it violates the contrapositive of your derived chain. Many test-takers check the forward direction of a rule ("If A, then B\u2014does this answer have A without B?") but forget to check the reverse ("If not B, then not A\u2014does this answer have not-B with A?"). The hardest correct answers are impossible only because they violate the contrapositive, not the original rule.' },

    { type: 'h4', text: 'Strategy 4: The Two-World Test' },
    { type: 'paragraph', text: 'For a stubborn answer choice you cannot resolve, try to construct two scenarios: one in which the answer is true and the stimulus is also true (the "compatible world"), and one in which the answer is true and the stimulus is violated (the "contradiction world"). If you cannot construct the compatible world\u2014if every attempt to make the answer true forces a rule violation\u2014the answer must be false. If you can construct even one compatible world, the answer could be true and is therefore wrong.' },

    { type: 'callout', variant: 'tip', title: 'The Chain-and-Block Pattern', text: 'The most common structure on hard Must Be False questions is what we call the "Chain-and-Block" pattern. The stimulus builds a chain of conditionals (A \u2192 B \u2192 C \u2192 D) and then blocks one end for a specific group (Group X \u2192 NOT D). The hidden constraint is that Group X cannot satisfy the beginning of the chain (Group X \u2192 NOT A). Whenever you see a stimulus with multiple conditionals and a categorical exclusion, immediately check whether chaining them blocks a group from the first link.' },

    { type: 'hr' },

    { type: 'h3', text: 'Common Wrong-Answer Patterns on Hard Must Be False' },
    { type: 'paragraph', text: 'Hard Must Be False questions recycle a small set of wrong-answer strategies. Learning these patterns turns difficult elimination decisions into recognition exercises.' },

    { type: 'table', headers: ['Pattern', 'How It Works', 'How to Spot It'], rows: [
      ['The Irrelevant Reversal', 'Reverses a conditional (asserts "If B, then A" from "If A, then B"). This is not proven true, but it is not proven false either\u2014it could go either way.', 'Check direction: does the answer swap the sufficient and necessary conditions?'],
      ['The Distractor Exploit', 'References the irrelevant contextual detail planted in the stimulus. Because the detail is true, any statement consistent with it feels safe\u2014but it does not create a contradiction.', 'Ask: does this answer connect to the main conditional chain, or only to background information?'],
      ['The Scope Outsider', 'Introduces a category or scenario the stimulus never mentions. Because the stimulus says nothing about it, the statement cannot be proven false.', 'Check whether the subject of the answer appears anywhere in the stimulus.'],
      ['The Near-Miss Contradiction', 'Comes close to violating the derived constraint but falls just short. For example, it might describe a scenario involving the group that is blocked but stops one link before the contradiction.', 'Trace the full chain: does the answer actually reach the blocked endpoint, or does it stop short?'],
      ['The Must-Be-True Trap', 'Describes something that is logically required by the rules. Test-takers who confuse "must be true" with "must be false" select this under time pressure.', 'Double-check the question stem: are you looking for what CANNOT be true or what MUST be true?']
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Putting It All Together' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaways for Complex Contradictions', text: '**1. Chain before you choose.** On hard Must Be False questions, the contradiction is hidden in the interaction of multiple rules. Build the full conditional chain and derive all contrapositives before evaluating any answer choice.\n\n**2. Identify the blocker.** Look for the rule that categorically excludes a group from one end of the chain. This "blocker" is the key to the hidden constraint.\n\n**3. Ignore the noise.** At least one sentence in a hard stimulus exists solely to distract you. If a fact does not participate in any conditional relationship, set it aside.\n\n**4. Check contrapositives.** The hardest contradictions are visible only through the contrapositive of the derived chain, not the original rules. Always form the contrapositive explicitly.\n\n**5. Use the Two-World Test.** When stuck between two answers, try to build a scenario where each answer is true without violating any rule. The answer for which no such scenario exists is correct.' }
  ]
};
