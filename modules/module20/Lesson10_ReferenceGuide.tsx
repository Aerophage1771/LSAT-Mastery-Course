import { Lesson } from '../../types';

export const Lesson10_ReferenceGuide: Lesson = {
  id: "20-10",
  title: "Reference Guide",
  content: [
    { type: 'h2', text: 'Module 20: Agree / Disagree (Point at Issue) \u2014 Reference Guide' },
    { type: 'paragraph', text: 'This reference guide consolidates everything from Module 20 into a single, quick-access resource. Use it for pre-test review, timed practice sessions, and as a checklist before attempting Agree / Disagree questions.' },

    { type: 'hr' },

    { type: 'h2', text: '1. The 4-Step Method' },
    { type: 'paragraph', text: 'Every Agree / Disagree question follows the same repeatable process. Memorize this sequence and apply it consistently.' },
    { type: 'process', title: 'The 4-Step Method', steps: [
      '**Step 1 \u2014 Map Positions:** Read the dialogue and isolate each speaker\'s core claim. For each speaker, identify their conclusion and the key premise or reasoning that supports it. Reduce each position to a single sentence: "Speaker 1 believes X because Y" and "Speaker 2 believes A because B."',
      '**Step 2 \u2014 Identify Claims:** Determine which specific propositions each speaker has committed to. A speaker is committed to a claim if they explicitly state it, if it is the logical consequence of their stated premises, or if their argument would collapse without it. Pay careful attention to whether a speaker has actually taken a position or merely raised a possibility.',
      '**Step 3 \u2014 Apply the Overlap Test:** Compare the two speakers\' commitments side by side. For disagreement questions, find a proposition where one speaker is committed to YES and the other to NO. For agreement questions, find a proposition where both speakers are committed to YES. If either speaker\'s stance is unknown or unstated, the proposition cannot be the answer.',
      '**Step 4 \u2014 Verify Commitment:** Before selecting your answer, confirm that both speakers are genuinely committed to their respective positions on the statement. Ask: "Is this speaker forced to hold this view by the logic of their argument, or am I inferring something they never actually claimed?" If you are making an unsupported inference for either speaker, eliminate that choice.',
    ]},

    { type: 'callout', variant: 'tip', title: 'Timing Target', text: '~10 sec reading the stem and confirming question type \u2192 ~25 sec mapping both speakers\' positions \u2192 ~15 sec identifying claims and prephrasing \u2192 ~35 sec applying the Overlap Test to answer choices \u2192 ~10 sec verifying commitment. Total: **~95 seconds.** Steps 1\u20132 are the foundation \u2014 rushing them leads to errors on every subsequent step.' },

    { type: 'hr' },

    { type: 'h2', text: '2. Disagreement Types' },
    { type: 'paragraph', text: 'Disagreements between speakers fall into recurring structural patterns. Recognizing the pattern accelerates your prephrasing and answer selection.' },

    { type: 'table', headers: ['Disagreement Type', 'How It Works', 'What to Look For', 'Lesson'], rows: [
      ['**Definitional Rule**', 'The speakers propose competing rules about what qualifies as X. One sets a necessary condition; the other rejects it or proposes a different sufficient condition. The dispute is whether something can count as X under one rule but not the other.', 'Conditional language ("must," "only if," "is enough to"), competing definitions of a central term, and examples designed to test the boundary of a category.', 'Lesson 3'],
      ['**Explanatory Cause**', 'The speakers agree on an observed outcome but disagree about what caused it. One attributes the effect to Factor A; the other attributes it to Factor B. Their conclusions conflict because their causal explanations are mutually exclusive or competing.', 'Shared acknowledgment of a phenomenon followed by divergent "because" clauses. Words like "due to," "the reason is," "caused by," or "a result of" signal causal claims.', 'Lesson 4'],
      ['**Clash of Criteria**', 'The speakers agree on the underlying facts but apply different evaluative standards, leading to opposite judgments. The dispute is not about what happened but about which standard of judgment is the correct one to apply.', 'Shared factual premises followed by opposite evaluative conclusions. One speaker prioritizes Standard A (e.g., safety, artistic merit); the other prioritizes Standard B (e.g., cost, public preference).', 'Lesson 7'],
      ['**Definitional Clash**', 'Each speaker operates with a fundamentally different conception of a key term. Unlike a definitional rule dispute, neither speaker explicitly states a rule \u2014 the clash emerges from how they *use* the term in context, applying it to different referents or scopes.', 'A key term used by both speakers but applied to different phenomena. The speakers may appear to discuss the same topic while actually talking past each other because their implicit definitions diverge.', 'Lesson 8'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: '3. Agreement Types' },
    { type: 'paragraph', text: 'Agreement questions are challenging because the speakers\' final conclusions are often opposed. The common ground is typically a deeper structural element \u2014 a shared premise or assumption that both arguments depend on.' },

    { type: 'table', headers: ['Agreement Type', 'How It Works', 'What to Look For', 'Lesson'], rows: [
      ['**Shared Assumption**', 'Both speakers\' arguments rest on the same unstated foundational belief. This shared assumption is what *enables* their disagreement \u2014 without it, their arguments would not even be about the same topic. The assumption is often a shared causal link: both agree that Factor X affects Outcome Y, but they disagree on whether the effect is positive or negative.', 'Opposing conclusions that nonetheless require the same underlying premise to be coherent. Look for neutral language ("affects," "influences," "is a factor in") that captures the shared belief without specifying the conflicting direction.', 'Lesson 5'],
      ['**Shared Diagnosis**', 'Both speakers agree on the existence of a problem, condition, or phenomenon. They accept the same diagnosis of the current situation but diverge on its cause, its severity, or the appropriate response. The point of agreement is the diagnosis itself.', 'Explicit or implicit acknowledgment of the same factual state of affairs. Both speakers treat a particular observation as established fact before building their divergent arguments on top of it.', 'Lesson 9'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: '4. The Overlap Test' },
    { type: 'paragraph', text: 'The Overlap Test is your single most powerful verification tool. Before committing to any answer, apply this systematic check to confirm that both speakers\' commitments align with the question type.' },

    { type: 'callout', variant: 'summary', title: 'The Overlap Test', text: '**For every answer choice, determine each speaker\'s commitment:**\n\n1. Would Speaker 1 say YES, NO, or is their position UNKNOWN?\n2. Would Speaker 2 say YES, NO, or is their position UNKNOWN?\n\n**Then apply the matrix:**' },

    { type: 'table', headers: ['Speaker 1', 'Speaker 2', 'Result'], rows: [
      ['YES', 'NO', '**Disagreement** \u2014 This is a valid point at issue.'],
      ['NO', 'YES', '**Disagreement** \u2014 This is a valid point at issue.'],
      ['YES', 'YES', '**Agreement** \u2014 This is a valid point of agreement.'],
      ['NO', 'NO', '**Agreement** \u2014 Both reject the claim (valid for agreement questions only if the question asks what they agree on).'],
      ['YES', 'UNKNOWN', '**Neither** \u2014 Eliminate. You cannot infer disagreement or agreement from silence.'],
      ['NO', 'UNKNOWN', '**Neither** \u2014 Eliminate. You cannot infer disagreement or agreement from silence.'],
      ['UNKNOWN', 'YES', '**Neither** \u2014 Eliminate. One speaker has not committed to a position.'],
      ['UNKNOWN', 'NO', '**Neither** \u2014 Eliminate. One speaker has not committed to a position.'],
      ['UNKNOWN', 'UNKNOWN', '**Neither** \u2014 Eliminate. Neither speaker has addressed this proposition.'],
    ]},

    { type: 'paragraph', text: 'Any answer choice that produces an UNKNOWN for either speaker must be eliminated, regardless of how tempting it appears. Both speakers must be committed for the choice to be correct.' },

    { type: 'hr' },

    { type: 'h2', text: '5. Committed vs. Uncommitted' },
    { type: 'paragraph', text: 'The most common error on Agree / Disagree questions is attributing a position to a speaker who has not actually taken one. Understanding the difference between a committed and an uncommitted speaker is essential.' },

    { type: 'breakdown', labels: { title: 'Status', text: 'Description & How to Identify' }, items: [
      { title: 'Committed (Explicit)', text: 'The speaker directly states their position in clear, unambiguous language. They assert a claim as their own view. **Example:** "I believe that standardized testing is harmful to students." There is no doubt about where this speaker stands.', badge: 'Explicit', badgeColor: 'green' },
      { title: 'Committed (Implicit)', text: 'The speaker does not directly state the claim, but their argument logically requires it. If denying the claim would make their argument incoherent, they are implicitly committed to it. **Example:** A speaker who argues "We should fund arts programs because creativity drives innovation" is implicitly committed to the claim that innovation is valuable, even though they never say so directly.', badge: 'Implicit', badgeColor: 'blue' },
      { title: 'Uncommitted', text: 'The speaker has not addressed the proposition at all, or has discussed a related but distinct topic. Silence is not a position. A speaker who discusses the cost of a policy has not committed to a view about its effectiveness, even if both topics concern the same policy. **Test:** Could this speaker hold *either* view on this statement without contradicting anything they actually said? If yes, they are uncommitted.', badge: 'Uncommitted', badgeColor: 'red' },
      { title: 'Seemingly Committed', text: 'The speaker discusses a topic that is *adjacent* to the proposition but has not actually taken a stance on the specific claim in the answer choice. This is the most dangerous category because it feels like commitment but is not. **Test:** Does the speaker\'s argument *require* this specific claim to be true, or could their argument work just as well without it?', badge: 'Trap Zone', badgeColor: 'indigo' },
    ]},

    { type: 'callout', variant: 'default', title: 'The Commitment Rule', text: 'A speaker is committed to a claim only if (a) they explicitly state it, or (b) their argument would be logically incoherent without it. Topical proximity is not commitment. Discussing a related subject is not commitment. If you cannot point to a specific statement or logical entailment that forces the speaker into a position, they are uncommitted.' },

    { type: 'hr' },

    { type: 'h2', text: '6. Common Traps' },
    { type: 'paragraph', text: 'Wrong answers on Agree / Disagree questions exploit predictable reasoning errors. Memorize these patterns to eliminate traps quickly during timed practice.' },

    { type: 'breakdown', labels: { title: 'Trap', text: 'Description & How to Spot It' }, items: [
      { title: '1. One Speaker Uncommitted', text: 'The answer correctly identifies one speaker\'s position, but the other speaker has expressed no opinion on the matter. You are tempted to infer their position from context, but silence is not a stance. **The Overlap Test catches this:** if either column reads UNKNOWN, eliminate immediately. This is the single most common trap on these questions.', badge: 'Most Common', badgeColor: 'red' },
      { title: '2. Both Actually Agree', text: 'On a disagreement question, the answer states something that both speakers would actually accept. It is tempting because the proposition is clearly supported by the text, but it identifies common ground, not a conflict. **Test:** If both speakers would say YES, this is a point of agreement, not disagreement.', badge: 'Wrong Direction', badgeColor: 'red' },
      { title: '3. Surface Disagreement Masks Deeper Agreement', text: 'The speakers appear to disagree because they reach opposite conclusions, but beneath the surface they share a crucial premise. The answer choice captures the superficial conflict rather than the actual point at issue. **Test:** Ask whether the speakers\' opposing conclusions actually stem from the same foundational belief applied differently.', badge: 'Depth Error', badgeColor: 'indigo' },
      { title: '4. Implicit vs. Explicit Commitment', text: 'The answer requires you to treat an implicit commitment as if it were explicit, or vice versa. A speaker may be implicitly committed to a claim their argument depends on, but the answer choice phrases it in a way that goes beyond what the argument logically requires. **Test:** Does the speaker\'s argument *collapse* without this exact claim, or only without a weaker version of it?', badge: 'Overreach', badgeColor: 'blue' },
      { title: '5. Scope Mismatch', text: 'The answer choice uses broader or narrower language than what the speakers actually discussed. One speaker may discuss "some cases" while the answer choice says "all cases," or one speaker discusses a specific instance while the answer generalizes. **Test:** Does the answer choice match the *scope* of each speaker\'s actual claim?', badge: 'Scope', badgeColor: 'slate' },
      { title: '6. Mischaracterization', text: 'The answer distorts a speaker\'s position by introducing extreme language ("always," "never," "only," "all") or by attributing a view the speaker never actually expressed. It captures the general topic but misrepresents the specific claim. **Test:** Re-read the speaker\'s exact words. Does the answer choice faithfully represent their position, or does it exaggerate or distort it?', badge: 'Distortion', badgeColor: 'red' },
      { title: '7. Related but Distinct Topic', text: 'The answer discusses a topic that is thematically connected to the dialogue but is not actually addressed by either speaker. It exploits your background knowledge or assumptions about what the speakers "probably" think. **Test:** Can you point to a specific sentence in the stimulus that commits each speaker to a position on this exact claim?', badge: 'Out of Scope', badgeColor: 'slate' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: '7. Test Day Checklist' },
    { type: 'paragraph', text: 'Run through this checklist on every Agree / Disagree question during timed practice and on test day.' },

    { type: 'process', title: 'Test Day Checklist', steps: [
      '**Confirm the question type.** The stem says "point at issue," "disagree about," "committed to disagreeing," or "agree that." Determine whether you need a point of disagreement (YES/NO) or a point of agreement (YES/YES) before reading the stimulus.',
      '**Map Speaker 1\'s position.** Identify their conclusion and key premises. Reduce their argument to one sentence: "Speaker 1 believes [conclusion] because [premise]."',
      '**Map Speaker 2\'s position in relation to Speaker 1.** Determine how Speaker 2 engages with Speaker 1\'s argument. Do they reject the conclusion? Challenge a premise? Offer an alternative explanation? Dispute a definition? Accept the facts but apply a different standard?',
      '**Classify the pattern.** Is this a definitional rule dispute, an explanatory cause dispute, a clash of criteria, a definitional clash, a shared assumption, or a shared diagnosis? Recognizing the pattern tells you what kind of answer to expect.',
      '**Prephrase the core issue.** Before looking at the choices, articulate the central point of contention or agreement in your own words. For disagreement: "They disagree about whether [X]." For agreement: "They both accept that [Y]."',
      '**Apply the Overlap Test to each answer choice.** For each choice, determine Speaker 1\'s commitment (YES / NO / UNKNOWN) and Speaker 2\'s commitment (YES / NO / UNKNOWN). Eliminate any choice where either speaker is UNKNOWN.',
      '**Check for commitment, not assumption.** Before selecting your answer, verify that both speakers are genuinely committed to their positions. Can you point to a specific statement or logical entailment for each speaker? If you are relying on inference or assumption for either speaker, reconsider.',
      '**Scan for common traps.** Is one speaker uncommitted? Do both speakers actually agree on this? Does the answer mischaracterize a position or shift the scope? Does it discuss a related but distinct topic?',
      '**Select and move on.** Commit to the answer that passes the Overlap Test with clear commitments from both speakers. Trust the method.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Quick-Reference Tables' },

    { type: 'h3', text: 'Disagreement Pattern Quick-Check' },
    { type: 'table', headers: ['If You See...', 'The Pattern Is Likely...', 'What to Look For in Answers'], rows: [
      ['Competing rules about what counts as X ("must have," "is sufficient")', 'Definitional Rule', 'An answer that presents a scenario where one speaker\'s rule accepts X and the other\'s rejects it.'],
      ['Same outcome acknowledged but different causes cited ("due to A" vs. "because of B")', 'Explanatory Cause', 'An answer that frames the dispute as which factor is the true cause of the agreed-upon effect.'],
      ['Same facts but opposite evaluative judgments using different standards', 'Clash of Criteria', 'An answer that questions the relevance or priority of one speaker\'s chosen standard of evaluation.'],
      ['A key term used by both speakers but applied to different referents or scopes', 'Definitional Clash', 'An answer that exposes the implicit definitional divergence by testing what each speaker means by the term.'],
    ]},

    { type: 'h3', text: 'Agreement Pattern Quick-Check' },
    { type: 'table', headers: ['If You See...', 'The Pattern Is Likely...', 'What to Look For in Answers'], rows: [
      ['Opposing conclusions that both require the same underlying causal link or foundational belief', 'Shared Assumption', 'An answer phrased in neutral language ("affects," "influences") that captures the shared belief without specifying the conflicting direction.'],
      ['Both speakers treating the same observation or condition as established fact before diverging', 'Shared Diagnosis', 'An answer that states the commonly accepted factual condition, distinct from either speaker\'s proposed cause or solution.'],
    ]},

    { type: 'h3', text: 'Overlap Test Quick-Reference' },
    { type: 'table', headers: ['Combination', 'Disagreement Question?', 'Agreement Question?'], rows: [
      ['YES / NO', '\u2714 Valid point at issue', '\u2718 Eliminate'],
      ['NO / YES', '\u2714 Valid point at issue', '\u2718 Eliminate'],
      ['YES / YES', '\u2718 Eliminate (they agree)', '\u2714 Valid point of agreement'],
      ['NO / NO', '\u2718 Eliminate (they agree on rejection)', '\u2714 Possible (both reject the claim)'],
      ['YES / UNKNOWN', '\u2718 Eliminate', '\u2718 Eliminate'],
      ['UNKNOWN / YES', '\u2718 Eliminate', '\u2718 Eliminate'],
      ['NO / UNKNOWN', '\u2718 Eliminate', '\u2718 Eliminate'],
      ['UNKNOWN / NO', '\u2718 Eliminate', '\u2718 Eliminate'],
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Module 20 Summary', text: '**Agree / Disagree = Comparative Commitment Analysis.** You receive a dialogue between two speakers and identify the specific proposition on which they hold opposing views (disagreement) or shared views (agreement).\n\n**The 4-Step Method:** Map Positions \u2192 Identify Claims \u2192 Apply Overlap Test \u2192 Verify Commitment.\n\n**Four disagreement types:** Definitional Rule, Explanatory Cause, Clash of Criteria, Definitional Clash.\n\n**Two agreement types:** Shared Assumption, Shared Diagnosis.\n\n**The Overlap Test:** For disagreement, one speaker says YES and the other says NO. For agreement, both speakers say YES. If either speaker\'s position is UNKNOWN, eliminate the choice immediately.\n\n**Committed vs. Uncommitted:** A speaker is committed only if they explicitly state a claim or their argument logically requires it. Silence, topical proximity, and thematic relevance are not commitment.\n\n**Seven common traps:** One speaker uncommitted, both actually agree, surface disagreement masks deeper agreement, implicit vs. explicit commitment overreach, scope mismatch, mischaracterization, related but distinct topic.\n\n**The Overlap Test is your safeguard.** Always determine each speaker\'s commitment (YES / NO / UNKNOWN) before selecting an answer. If you cannot assign a clear commitment to both speakers, the choice is wrong.' },
  ]
};
