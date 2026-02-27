import { Lesson } from '../../types';

export const Lesson7_Drill_Analogy: Lesson = {
  id: "7-7",
  title: "Drill: Evaluating Analogies",
  content: [
    { type: 'h2', text: 'Drill: Evaluating Arguments by Analogy' },
    { type: 'paragraph', text: "An argument by analogy draws a conclusion about one case based on a parallel to another case. The reasoning runs: *\"Case A has property P. Case B is like Case A. Therefore, Case B probably has property P too.\"* The logical gap is always the same: **the two cases may differ in a way that matters.** Your job as an evaluator is to find the question that determines whether the analogy holds or breaks down." },

    { type: 'hr' },

    { type: 'h3', text: 'The Structure of an Analogy Argument' },
    { type: 'paragraph', text: "Every argument by analogy has three components. Recognizing them helps you locate the gap instantly." },

    { type: 'breakdown', labels: { title: 'Component', text: 'Description' }, items: [
      { title: 'The Source Case', text: 'The case the author already knows about — the one with established facts, data, or outcomes. This is the "evidence" side of the analogy.', badge: 'Known', badgeColor: 'blue' },
      { title: 'The Target Case', text: 'The case the author is drawing a conclusion about — the one whose outcome is unknown or unproven. This is the "conclusion" side.', badge: 'Unknown', badgeColor: 'slate' },
      { title: 'The Bridge', text: 'The assumed similarity between the source and target. The author asserts (or implies) that the two cases are alike in a way that justifies transferring the conclusion from one to the other.', badge: 'Assumed', badgeColor: 'indigo' },
    ]},

    { type: 'paragraph', text: "The gap is always in the bridge. The source case and target case may differ in a **relevant** respect — a difference that would prevent the source case's outcome from applying to the target." },

    { type: 'callout', variant: 'tip', title: 'Relevant vs. Irrelevant Differences', text: "Not all differences between two cases matter. City A may have 500,000 residents and City B may have 480,000 — this is unlikely to affect a traffic policy conclusion. But if City A has a grid street layout and City B has winding mountain roads, that difference is **relevant** to whether a roundabout policy will transfer. The pivotal question targets relevant differences, not trivial ones." },

    { type: 'hr' },

    { type: 'h3', text: 'Common Analogy Patterns on the LSAT' },
    { type: 'table', headers: ['Pattern', 'Source → Target', 'Typical Gap'], rows: [
      ['**Geographic Transfer**', 'What worked in Location A will work in Location B', 'Different local conditions (climate, culture, infrastructure)'],
      ['**Temporal Transfer**', 'What happened in the past will happen again', 'Changed circumstances since the past event'],
      ['**Species / Population Transfer**', 'What is true of Group A is true of Group B', 'Biological or demographic differences between groups'],
      ['**Scale Transfer**', 'What works at one scale will work at another', 'Emergent problems at larger or smaller scale'],
      ['**Industry Transfer**', 'What works in Sector A will work in Sector B', 'Different market dynamics, regulations, or incentives'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Practice Problem' },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },


    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },

    { type: 'h2', text: 'Step-by-Step Analysis' },
    { type: 'paragraph', text: "*(Scroll down only after committing to an answer.)*" },
    { type: 'hr' },

    { type: 'h3', text: 'Step 1: Identify the Analogy Structure' },
    { type: 'breakdown', labels: { title: 'Component', text: 'In This Argument' }, items: [
      { title: 'Source Case', text: '**Greenville** — converted to electric buses, ridership increased by 25%.', badge: 'Known Result', badgeColor: 'blue' },
      { title: 'Target Case', text: '**Lakewood** — plans to convert to electric buses, expects a similar ridership increase.', badge: 'Predicted Result', badgeColor: 'slate' },
      { title: 'Bridge', text: 'The two towns have "similar population size and public transit budget." The author assumes this similarity is sufficient to transfer the outcome.', badge: 'Assumed Link', badgeColor: 'indigo' },
    ]},

    { type: 'h3', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "The bridge is thin. Population size and budget are stated similarities, but the argument attributes Greenville's ridership increase specifically to the **electric bus conversion**. The gap: **Greenville may have made other changes at the same time** — expanded routes, lowered fares, improved scheduling — that actually drove the ridership increase. If those other changes are the real cause, then merely switching to electric buses in Lakewood would not produce the same result." },
    { type: 'paragraph', text: "This is a hybrid gap: it combines an **analogy weakness** (are the two cases really comparable?) with a **causal question** (did the electric conversion actually cause the ridership increase in the source case?)." },

    { type: 'h3', text: 'Step 3: Apply the Yes/No Test to Choice (C)' },
    { type: 'paragraph', text: "Choice (C) asks: *\"Whether Greenville's ridership increase was accompanied by other changes to its transit system, such as expanded routes or reduced fares.\"*" },

    { type: 'breakdown', labels: { title: 'Answer', text: 'Effect on the Argument' }, items: [
      { title: '"Yes" — Greenville also expanded routes and reduced fares', text: 'The argument is **weakened**. The ridership increase may have been caused by the route expansion or fare reduction, not the electric conversion. Lakewood cannot expect the same result from switching buses alone.', badge: 'Weakens', badgeColor: 'red' },
      { title: '"No" — the electric conversion was the only change', text: 'The argument is **strengthened**. With no confounding changes, the electric conversion is the most plausible explanation for Greenville\'s ridership increase, making it reasonable to expect a similar effect in Lakewood.', badge: 'Strengthens', badgeColor: 'green' },
    ]},
    { type: 'paragraph', text: "Decisive split. Choice (C) passes the Yes/No Test." },

    { type: 'hr' },

    { type: 'h3', text: 'Why the Other Choices Fail' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) Electricity costs in Lakewood vs. Greenville', text: 'Operating cost differences might affect the *financial* case for conversion, but the conclusion is about *ridership*, not cost-effectiveness. Riders generally do not choose buses based on the transit agency\'s electricity bill. **Wrong aspect of the conclusion.**', badge: 'Irrelevant', badgeColor: 'red' },
      { title: '(B) Geographic coverage of routes', text: 'This is a genuine difference between the towns, but the argument already acknowledges they have similar population size and budget. Route coverage is a secondary factor — the pivotal question is whether the electric conversion itself caused the ridership increase in the first place. **Not the most decisive question.**', badge: 'Too Weak', badgeColor: 'red' },
      { title: '(D) Environmental friendliness of electric buses', text: 'The conclusion is about ridership, not environmental impact. Whether electric buses reduce emissions does not tell us whether they attract more riders. **Scope shift — different outcome variable.**', badge: 'Scope Shift', badgeColor: 'red' },
      { title: '(E) Lakewood\'s previous ridership efforts', text: 'Past efforts in Lakewood are tangential. The argument is about whether Greenville\'s experience transfers to Lakewood. What Lakewood tried before does not address whether the analogy holds. **Historical detail, not a gap test.**', badge: 'Irrelevant', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. Analogy arguments have three parts: source case, target case, and bridge.** The gap is always in the bridge — the assumed similarity.\n\n**2. The pivotal question asks about relevant differences** between the source and target, or about whether the source case's outcome was genuinely caused by the factor being transferred.\n\n**3. Hybrid gaps are common.** Analogy questions often combine with causal reasoning — you must evaluate both whether the cases are similar AND whether the right factor caused the result in the source case.\n\n**4. Irrelevant differences are traps.** An answer that identifies a real difference between the two cases can still be wrong if that difference does not affect the specific outcome the conclusion addresses." },
  ]
};
