import { Lesson } from '../../types';

export const Lesson8_Drill_Feasibility: Lesson = {
  id: "7-8",
  title: "Drill: Evaluating Feasibility Claims",
  content: [
    { type: 'h2', text: 'Drill: Evaluating Feasibility Claims' },
    { type: 'paragraph', text: "Feasibility arguments propose a plan, policy, or course of action and conclude that it will achieve the desired result. Unlike causal arguments (which look backward at what happened), feasibility arguments look **forward** at what *will* happen. The gap is always practical: the plan may not work as described, the costs may outweigh the benefits, or there may be unintended consequences that undermine the goal." },

    { type: 'hr' },

    { type: 'h3', text: 'The Three Feasibility Gaps' },
    { type: 'paragraph', text: "Feasibility arguments are vulnerable to three categories of challenge. The correct Evaluate answer will target one of them." },

    { type: 'breakdown', labels: { title: 'Gap Type', text: 'Description' }, items: [
      { title: 'Implementation Obstacle', text: 'The plan cannot be carried out as described. There are practical barriers — cost, logistics, technology, legal restrictions — that prevent execution.', badge: 'Most Common', badgeColor: 'green' },
      { title: 'Unintended Consequence', text: 'The plan can be implemented, but it produces a side effect that offsets or exceeds the intended benefit. The cure is worse than the disease.', badge: 'Common', badgeColor: 'blue' },
      { title: 'Better Alternative', text: 'The plan may work, but a different approach would achieve the same goal more effectively, more cheaply, or with fewer drawbacks. The plan is suboptimal rather than infeasible.', badge: 'Less Common', badgeColor: 'slate' },
    ]},

    { type: 'callout', variant: 'tip', title: 'Distinguishing Feasibility from Causation', text: "Causal arguments say \"X caused Y\" (past tense, backward-looking). Feasibility arguments say \"We should do X to achieve Y\" (future tense, forward-looking). The gap for causal arguments is alternative causes. The gap for feasibility arguments is practical obstacles. Don't confuse the two — the pivotal questions are different." },

    { type: 'hr' },

    { type: 'h3', text: 'Spotting Feasibility Language' },
    { type: 'paragraph', text: "Feasibility conclusions announce themselves through recommendation and proposal vocabulary:" },

    { type: 'table', headers: ['Signal Phrase', 'Example'], rows: [
      ['*should / ought to*', '"The district **should** adopt a four-day school week."'],
      ['*proposed / plan*', '"The **proposed** regulation would reduce emissions."'],
      ['*recommendation*', '"The committee **recommends** expanding the program."'],
      ['*in order to / to achieve*', '"**To achieve** cost savings, the firm should outsource."'],
      ['*would result in / would lead to*', '"The policy **would result in** fewer traffic accidents."'],
      ['*the best way to*', '"**The best way to** improve retention is flexible scheduling."'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Practice Problem' },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },


    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },

    { type: 'h2', text: 'Step-by-Step Analysis' },
    { type: 'paragraph', text: "*(Scroll down only after committing to an answer.)*" },
    { type: 'hr' },

    { type: 'h3', text: 'Step 1: Find the Conclusion' },
    { type: 'breakdown', labels: { title: 'Sentence', text: 'Role' }, items: [
      { title: '"To reduce overcrowding in its emergency department, Riverside Hospital plans to open an urgent care clinic in a nearby shopping center."', text: 'This is the **plan** — the proposed action.', badge: 'Plan', badgeColor: 'slate' },
      { title: '"Hospital administrators argue that patients with minor ailments will choose the convenient clinic location over the hospital..."', text: 'This is an **intermediate claim** — the mechanism by which the plan is supposed to work.', badge: 'Mechanism', badgeColor: 'slate' },
      { title: '"...thereby reducing emergency department wait times by at least 30%."', text: 'This is the **conclusion** — the predicted outcome of the plan.', badge: 'Conclusion', badgeColor: 'indigo' },
    ]},

    { type: 'h3', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "The plan assumes that a significant portion of emergency department visits are for minor ailments treatable at an urgent care clinic. But what if most ED visits are for genuine emergencies — heart attacks, broken bones, severe allergic reactions — that *require* hospital-level care? If minor ailments account for only a small fraction of ED visits, diverting them to a clinic would barely dent the overcrowding problem, let alone produce a 30% reduction in wait times." },

    { type: 'paragraph', text: "This is a classic **implementation obstacle** gap: the plan's mechanism depends on an unstated assumption about the composition of ED visits." },

    { type: 'h3', text: 'Step 3: Apply the Yes/No Test to Choice (B)' },
    { type: 'paragraph', text: "Choice (B) asks: *\"Whether most emergency department visits at Riverside Hospital are for conditions that could be treated at an urgent care clinic.\"*" },

    { type: 'breakdown', labels: { title: 'Answer', text: 'Effect on the Argument' }, items: [
      { title: '"Yes" — most ED visits are for minor, clinic-treatable conditions', text: 'The argument is **strongly supported**. If the majority of current ED patients could be diverted to the clinic, the plan has a large pool to draw from, making a 30% wait-time reduction plausible.', badge: 'Strengthens', badgeColor: 'green' },
      { title: '"No" — most ED visits are for serious conditions requiring hospital care', text: 'The argument is **devastated**. If only a small fraction of ED patients have minor ailments, the clinic cannot divert enough patients to meaningfully reduce overcrowding. The 30% target becomes unreachable.', badge: 'Weakens', badgeColor: 'red' },
    ]},
    { type: 'paragraph', text: "Decisive split. Choice (B) passes the Yes/No Test." },

    { type: 'hr' },

    { type: 'h3', text: 'Why the Other Choices Fail' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) Parking at the shopping center', text: 'Parking is a minor logistical detail. Even if parking is limited, the conclusion is about whether the plan can achieve a 30% reduction — not about whether the clinic will be convenient. Parking might affect utilization slightly but is not the most decisive factor. **Too peripheral.**', badge: 'Minor Detail', badgeColor: 'red' },
      { title: '(C) Overcrowding at other hospitals', text: 'What happens at other hospitals is irrelevant to whether *this* plan will work at *Riverside*. Regional overcrowding does not validate or invalidate the specific mechanism proposed here. **Scope shift.**', badge: 'Scope Shift', badgeColor: 'red' },
      { title: '(D) Physician vs. nurse practitioner staffing', text: 'Staffing model might affect the quality of care at the clinic, but the argument is about whether enough patients will be diverted to reduce ED crowding. Staff type does not determine the volume of divertable patients. **Wrong aspect of the plan.**', badge: 'Wrong Gap', badgeColor: 'red' },
      { title: '(E) Previous strategies attempted', text: 'Past efforts are irrelevant to whether this specific new plan will succeed. A previous failure does not doom this plan, and a previous partial success does not validate it. **Historical detail, not a gap test.**', badge: 'Irrelevant', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. Feasibility arguments propose a plan and predict its outcome.** The gap is whether the plan will actually produce the claimed result.\n\n**2. The three feasibility gaps are: implementation obstacles, unintended consequences, and better alternatives.** Implementation obstacles are the most common.\n\n**3. The pivotal question tests the plan's mechanism.** In this case: does the pool of divertable patients actually exist? If yes, the plan is plausible. If no, it fails.\n\n**4. Minor logistical details are traps.** Parking, staffing models, and past strategies are secondary factors. The correct answer targets the core assumption that makes the plan viable or not." },
  ]
};
