import { Lesson } from '../../types';

export const Lesson4_Drill_Analogy: Lesson = {
  id: "15-4",
  title: "Drill: Analogy (PT-123-S-2-Q-3)",
  content: [
    { type: 'h2', text: 'The Analogy Completion' },
    { type: 'paragraph', text: "An **Analogy Completion** is the most structurally precise pattern in Fill in the Blank questions. The stimulus establishes an explicit comparison between two subjects \u2014 a **source** (the familiar case) and a **target** (the case under discussion) \u2014 and uses a known fact about the source to draw a conclusion about the target. The blank asks you to complete that conclusion by applying the source's logic to the target's context." },

    { type: 'paragraph', text: "Analogy Completion stimuli are distinctive because they give you a rigid template to follow. The source subject's behavior is fully described; your only job is to transfer that behavior to the target subject with perfect fidelity. The LSAT creates difficulty not by making the analogy obscure, but by offering answer choices that subtly break the parallel \u2014 changing the action, the subject, or the direction of the comparison." },

    { type: 'h3', text: 'What Makes the Analogy Completion Distinctive' },
    { type: 'paragraph', text: "In an Analogy Completion, the correct answer must:" },
    { type: 'list', ordered: true, items: [
      '**Preserve the action.** If the source describes "looking back," the target must describe an equivalent retrospective action \u2014 not a forward-looking one, not a fearful one, and not a passive one.',
      '**Transfer the subject correctly.** If the source\'s action is directed at "events of their life," the target\'s action must be directed at the analogous element: "events of the century." Answers that keep the original subject (life) instead of mapping to the target subject (century) break the parallel.',
      '**Maintain the scope and tone.** If the source describes a general reflection, the target must describe a general reflection \u2014 not a specific evaluation of mistakes, not an emotional reaction, and not a prescriptive judgment.',
    ]},

    { type: 'callout', variant: 'default', title: 'The Parallel Transfer Rule', text: "The single most important skill in Analogy Completion questions is building a precise **mapping** between the source and target. Every element of the source (the actor, the action, the object of the action, the timing, the direction) must have a corresponding element in the target. The correct answer is the one that preserves every mapping. Wrong answers break exactly one mapping while keeping the others intact \u2014 which is what makes them tempting." },

    { type: 'hr' },

    { type: 'h3', text: 'Key Strategy: Build the Map' },
    { type: 'paragraph', text: "The strategy for Analogy Completions is a structured mapping process:" },
    { type: 'process', title: 'Build the Map', steps: [
      '**Phase 1 \u2014 Identify the Analogy:** Find the explicit comparison statement. It will typically use "like," "just as," "in the same way," or "much as." Identify the source subject and the target subject.',
      '**Phase 2 \u2014 Map the Source:** Break the source into components: Who is the actor? What action do they take? What is the object of the action? What is the direction (backward-looking vs. forward-looking)? What is the scope (general vs. specific)?',
      '**Phase 3 \u2014 Transfer to Target:** Replace each source component with its target equivalent. The actor becomes the target\'s actor; the object becomes the target\'s analogous element; the action and direction stay the same. The answer must reflect this transferred version exactly.',
    ]},

    { type: 'paragraph', text: "The critical verification step is to check each answer choice against every element of your map. Wrong answers typically preserve most of the mapping but break one element. Train yourself to test each component independently: Is the actor correct? Is the action correct? Is the object correct? Is the direction correct?" },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Analogy Completion (PT-123-S-2-Q-3)' },
    { type: 'paragraph', text: "This drill demonstrates the Analogy Completion pattern using a comparison between a human life and a century. Your job is to build the mapping from the source (end of life) to the target (end of century) and find the answer that preserves every element of the parallel." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: '15-4-drill',
      questionType: 'Fill in the Blank',
      difficulty: 'medium',
      stimulus: "A century in certain ways is like a life, and as the end of a century approaches, people behave toward that century much as someone who is nearing the end of life does toward that life. So just as people in their last years spend much time looking back on the events of their life, people at a century's end _______.",
      question: "Which one of the following most logically completes the argument?",
      options: [
        "(A) reminisce about their own lives",
        "(B) fear that their own lives are about to end",
        "(C) focus on what the next century will bring",
        "(D) become very interested in the history of the century just ending (Correct)",
        "(E) reflect on how certain unfortunate events of the century could have been avoided",
      ],
    },

    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Build the Source-Target Map' },
    { type: 'paragraph', text: "Let's break the analogy into its structural components using our Build the Map framework:" },

    { type: 'breakdown', labels: { title: 'Component', text: 'Details' }, items: [
      { title: 'The Analogy Statement', text: '"A century in certain ways is like a life." This establishes the explicit comparison. Everything said about the source (life) must be transferable to the target (century).', badge: 'Foundation', badgeColor: 'blue' },
      { title: 'Source Actor', text: '"People in their last years" \u2014 individuals nearing the end of their life.', badge: 'Source', badgeColor: 'blue' },
      { title: 'Source Action', text: '"Spend much time looking back" \u2014 a retrospective, reflective activity. The direction is **backward-looking**.', badge: 'Source', badgeColor: 'blue' },
      { title: 'Source Object', text: '"The events of their life" \u2014 the action is directed at the thing that is ending (their life).', badge: 'Source', badgeColor: 'blue' },
      { title: 'Target Actor', text: '"People at a century\'s end" \u2014 individuals living at the close of a century.', badge: 'Target', badgeColor: 'indigo' },
      { title: 'Target Action (The Blank)', text: 'Must be a **backward-looking** activity (parallel to "looking back"). Must be directed at the **century** (parallel to "their life").', badge: 'Target', badgeColor: 'indigo' },
    ]},

    { type: 'h4', text: 'Step 2: Identify the Mapping Requirements' },
    { type: 'paragraph', text: "**What is the structure of the analogy?**" },
    { type: 'paragraph', text: "The stimulus builds a clean, three-element parallel:" },
    { type: 'table', headers: ['Element', 'Source (Life)', 'Target (Century)'], rows: [
      ['Actor', 'Person nearing end of life', 'People at century\'s end'],
      ['Action', 'Looking back (retrospective)', '[Must be retrospective]'],
      ['Object', 'Events of their life', '[Must be the century itself]'],
      ['Direction', 'Backward-looking', '[Must be backward-looking]'],
    ]},
    { type: 'paragraph', text: "The correct answer must fill in every bracketed cell. It must describe a **retrospective action** directed at the **century** \u2014 not at personal lives, not at the future, and not at a specific subset of events." },

    { type: 'h4', text: 'Step 3: Pre-Phrase the Answer' },
    { type: 'paragraph', text: "Transfer the map: \"Looking back on the events of their life\" becomes \"looking back on the events of the century.\" In more natural language:" },
    { type: 'callout', title: 'Pre-Phrase', variant: 'tip', text: "People at a century's end become interested in, or spend time reflecting on, the history of that century." },

    { type: 'h4', text: 'Step 4: Evaluate Each Answer' },
    { type: 'paragraph', text: "Now test each answer against all four mapping elements (actor, action, object, direction). A correct answer preserves all four. A wrong answer breaks at least one." },

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) reminisce about their own lives', text: "**Action:** \"Reminisce\" is backward-looking \u2014 correct direction. **Object:** \"Their own lives\" \u2014 this is the **source object**, not the target object. The analogy requires the action to be directed at the *century*, not at personal lives. This answer keeps the right action but applies it to the wrong subject. It fails the object transfer.", badge: 'Wrong Object', badgeColor: 'red' },
      { title: '(B) fear that their own lives are about to end', text: "**Action:** \"Fear\" is not equivalent to \"looking back.\" It introduces an emotional reaction not present in the source. **Object:** \"Their own lives\" is again the source object, not the target. **Direction:** Fear is present-oriented or forward-oriented, not retrospective. This answer breaks three of the four mapping elements.", badge: 'Triple Mismatch', badgeColor: 'red' },
      { title: '(C) focus on what the next century will bring', text: "**Action:** \"Focus on what will bring\" is **forward-looking** \u2014 the exact opposite of the source's backward-looking action. **Object:** \"The next century\" is not the century that is ending; it is the one that follows. The direction and the object are both reversed. This is a directional trap.", badge: 'Wrong Direction', badgeColor: 'red' },
      { title: '(D) become very interested in the history of the century just ending', text: "**Action:** \"Become very interested in the history\" is a backward-looking, reflective activity \u2014 a precise equivalent of \"looking back on the events.\" **Object:** \"The century just ending\" is the correct target object, exactly paralleling \"their life\" in the source. **Direction:** Retrospective. **Scope:** General history, not a specific subset. All four mapping elements are preserved. **Passes all mapping tests.**", badge: 'Correct', badgeColor: 'green' },
      { title: '(E) reflect on how certain unfortunate events of the century could have been avoided', text: "**Action:** \"Reflect\" is backward-looking \u2014 correct direction. **Object:** \"The century\" \u2014 correct target. **However**, the scope is narrowed: \"certain unfortunate events\" and \"could have been avoided\" add a judgmental, evaluative dimension not present in the source. The source says \"events of their life\" (general), not \"unfortunate events that could have been avoided\" (specific and prescriptive). This answer breaks the scope element.", badge: 'Scope Narrowed', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: Mapping Breakdown' },
    { type: 'table', headers: ['Answer', 'Action \u2713/\u2717', 'Object \u2713/\u2717', 'Direction \u2713/\u2717', 'Scope \u2713/\u2717', 'Verdict'], rows: [
      ['(A) Reminisce about lives', '\u2713', '\u2717 Source obj', '\u2713', '\u2713', 'Wrong Object'],
      ['(B) Fear lives ending', '\u2717 New action', '\u2717 Source obj', '\u2717 Present', '\u2717 Emotional', 'Triple Mismatch'],
      ['(C) Focus on next century', '\u2717 Looking fwd', '\u2717 Wrong century', '\u2717 Forward', '\u2713', 'Wrong Direction'],
      ['**(D) History of century**', '**\u2713**', '**\u2713**', '**\u2713**', '**\u2713**', '**Correct \u2713**'],
      ['(E) Avoiding unfortunate events', '\u2713', '\u2713', '\u2713', '\u2717 Narrowed', 'Scope Narrowed'],
    ]},

    { type: 'paragraph', text: "Notice the trap gradient: answers (A) and (E) are the most tempting because they each preserve most of the mapping. Answer (A) has the right action and direction but the wrong object. Answer (E) has the right action, object, and direction but narrows the scope. Only (D) preserves every element. The LSAT calibrates analogy traps by breaking exactly one mapping element per wrong answer, making systematic checking essential." },

    { type: 'hr' },

    { type: 'h3', text: 'Analogy Completion: Common Traps' },
    { type: 'paragraph', text: "Analogy-based Fill in the Blank questions generate a specific set of traps that recur across many questions. Be alert to these:" },
    { type: 'breakdown', labels: { title: 'Trap', text: 'How to Spot It' }, items: [
      { title: 'Subject Retention', text: 'The answer keeps the **source subject** instead of transferring to the target. Example: "reminisce about their own lives" retains "life" when the target should be "century." Ask: "Is the action directed at the *target* subject or the *source* subject?" If the source subject appears in the answer, it probably fails the transfer.', badge: 'Most Common', badgeColor: 'blue' },
      { title: 'Direction Reversal', text: 'The answer **reverses the direction** of the action. If the source is backward-looking, the answer is forward-looking (or vice versa). Ask: "Is this retrospective or prospective?" and compare to the source.', badge: 'Common', badgeColor: 'blue' },
      { title: 'Scope Distortion', text: 'The answer **narrows or broadens** the scope of the action. The source describes a general reflection; the answer describes reflection on a specific subset or adds an evaluative judgment. Ask: "Is this answer more specific or more general than the source?" If so, it breaks the parallel.', badge: 'Moderate', badgeColor: 'slate' },
      { title: 'Action Substitution', text: 'The answer replaces the source\'s action with a **different but plausible-sounding action**. "Looking back" becomes "fearing" or "preparing" or "celebrating." Ask: "Is this the same type of action as the source, or a new one?" If the verb category changes, the mapping is broken.', badge: 'Moderate', badgeColor: 'slate' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Key Lessons from This Drill' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. Build a complete map before evaluating answers.** Identify all four elements \u2014 actor, action, object, direction \u2014 in the source, then determine what each must become in the target. This map is your scoring rubric.\n\n**2. Test each element independently.** Wrong answers are designed to preserve most of the mapping while breaking one element. If you evaluate answers holistically (\"does this feel right?\"), you will miss the broken element. Check each component separately.\n\n**3. Watch for source-subject retention.** The most common trap in analogy completions is an answer that applies the right action to the wrong subject. If the answer mentions the source subject (\"their life\") instead of the target subject (\"the century\"), it fails the transfer \u2014 even if everything else is perfect.\n\n**4. Scope must be preserved, not just direction.** Answer (E) shows that getting the direction right is not enough. If the source describes a general action and the answer describes a specific version of that action, the scope mapping is broken. General must map to general; specific must map to specific.\n\n**5. The best answer will feel almost mechanical.** Analogy completions reward rigid, systematic mapping over creative interpretation. The correct answer often sounds dry or obvious \u2014 because it is simply the source statement with every noun swapped. If your answer requires creative reasoning or new ideas, you have probably left the analogy." },
  ]
};
