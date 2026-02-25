import { Lesson } from '../../types';

export const Lesson12_Drill_StrengthenExcept: Lesson = {
  id: "9-12",
  title: "Drill: Strengthen EXCEPT (PT-113-S-2-Q-20)",
  content: [
    { type: 'h3', text: 'Strengthen EXCEPT' },
    { type: 'paragraph', text: 'A "Strengthen EXCEPT" question flips your task. Instead of finding the one answer that helps, you must identify **four valid strengtheners** and eliminate them to find the one that does **not** strengthen. The cognitive load is high because you must evaluate five separate impacts. The correct answer is typically either irrelevant to the hypothesis or — more deviously — it provides an **alternative explanation** that actually undermines the need for the hypothesis.' },
    { type: 'callout', variant: 'tip', title: 'Systematic EXCEPT Approach', text: '**Step 1:** Understand the hypothesis clearly.\n**Step 2:** For each answer, ask: "Does this make the hypothesis more plausible?" Mark it S (strengthens) or X (does not).\n**Step 3:** You should end with four S\'s and one X. If you have two X\'s, re-evaluate the borderline cases.\n**Step 4:** The lone X is your answer. Confirm by verifying it either has no effect or actively weakens.' },
    { type: 'hr' },

    { type: 'question-card', id: 'PT-113-S-2-Q-20', questionType: 'Strengthen', difficulty: 'hard', stimulus: 'Antarctic seals dive to great depths and stay submerged for hours. They do not rely solely on oxygen held in their lungs, but also store extra oxygen in their blood. Indeed, some researchers hypothesize that for long dives these seals also store oxygenated blood in their spleens.', question: 'Each of the following, if true, provides some support for the researchers\' hypothesis EXCEPT:', options: [
      '(A) Horses are known to store oxygenated blood in their spleens for use during exertion.',
      '(B) Many species of seal can store oxygen directly in their muscle tissue. (Correct)',
      '(C) The oxygen contained in the seals\' lungs and bloodstream alone would be inadequate to support the seals during their dives.',
      '(D) The spleen is much larger in the Antarctic seal than in aquatic mammals that do not make long dives.',
      '(E) The spleens of Antarctic seals contain greater concentrations of blood vessels than are contained in most of their other organs.'
    ]},

    { type: 'hr' },
    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: '"Antarctic seals dive to great depths and stay submerged for hours. They do not rely solely on oxygen held in their lungs, but also store extra oxygen in their blood."', text: 'Background facts: seals are extraordinary divers with known oxygen-storage mechanisms (lungs + blood).' },
      { title: '"Some researchers hypothesize that for long dives these seals also store oxygenated blood in their spleens."', text: 'The hypothesis: the spleen serves as an additional oxygen reservoir for extended dives.' }
    ]},

    { type: 'h4', text: 'Step 2: Map the Strengthening Angles' },
    { type: 'paragraph', text: 'Before evaluating choices, identify the different ways the spleen hypothesis could be supported:' },
    { type: 'list', items: [
      '**Necessity:** Show that known oxygen sources (lungs + blood) are insufficient, so an additional source must exist.',
      '**Capability:** Show the spleen is anatomically equipped to store oxygenated blood (e.g., rich blood-vessel network).',
      '**Parallel Case (Analogy):** Show another animal already uses its spleen this way — proving the mechanism is biologically feasible.',
      '**Correlation:** Show the spleen is disproportionately large in deep-diving species, linking its size to the relevant behavior.'
    ]},

    { type: 'h4', text: 'Step 3: Evaluate Every Choice — The Systematic Sweep' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) Horses store oxygenated blood in their spleens for use during exertion.', text: '**Parallel Case.** If another mammal already uses the spleen as an oxygen reservoir under exertion, the mechanism is biologically proven — making it plausible for seals too.', badge: 'STRENGTHENS', badgeColor: 'red' },
      { title: '(B) Many species of seal can store oxygen directly in their muscle tissue.', text: '**Alternative Explanation.** This provides a different mechanism — muscle-tissue storage — that could account for long dives without invoking the spleen. By offering a rival explanation, it undermines the necessity of the spleen hypothesis rather than supporting it.', badge: 'DOES NOT STRENGTHEN', badgeColor: 'green' },
      { title: '(C) Lungs and bloodstream alone would be inadequate to support the seals during dives.', text: '**Necessity.** If known sources are insufficient, some additional source must exist — creating a gap the spleen hypothesis neatly fills.', badge: 'STRENGTHENS', badgeColor: 'red' },
      { title: '(D) The spleen is much larger in Antarctic seals than in aquatic mammals that do not make long dives.', text: '**Correlation.** A disproportionately large spleen in deep divers suggests it serves a dive-related function, consistent with the hypothesis.', badge: 'STRENGTHENS', badgeColor: 'red' },
      { title: '(E) The spleens of Antarctic seals have greater concentrations of blood vessels than most other organs.', text: '**Capability.** A highly vascularized spleen is physically equipped to act as a blood reservoir — anatomical evidence supporting the hypothesis.', badge: 'STRENGTHENS', badgeColor: 'red' }
    ]},

    { type: 'h4', text: 'Verification' },
    { type: 'paragraph', text: 'Four answers strengthen (A, C, D, E) via analogy, necessity, correlation, and capability respectively. One answer (B) does not strengthen — it provides an alternative explanation (muscle tissue) that reduces the need for the spleen hypothesis. The systematic sweep confirms (B) as the correct answer.' },

    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'In "Strengthen EXCEPT" questions, four answers will support the hypothesis from different angles — analogy, necessity, capability, correlation, or mechanism. The odd one out typically provides an **alternative explanation** that makes the hypothesis less necessary. Use the systematic sweep: tag each answer as S or X, confirm you have exactly one X, and verify that single answer fails to support (or actively undermines) the hypothesis.' }
  ]
};
