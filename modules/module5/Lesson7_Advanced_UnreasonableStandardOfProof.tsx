import { Lesson } from '../../types';

export const Lesson7_Advanced_UnreasonableStandardOfProof: Lesson = {
  id: "5-7",
  title: "Advanced: Unreasonable Standard of Proof (PT-103-S-2-Q-21)",
  content: [
    { type: 'h3', text: "Practice Drill: Unreasonable Standard of Proof (PT-103-S-2-Q-21)" },
    { type: 'paragraph', text: "This drill explores a sophisticated variation of the \"Argument from Ignorance\" flaw. The author dismisses perfectly relevant circumstantial evidence by setting an impossibly high standard for what counts as \"proof.\"" },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },
    { type: 'hr' },
    { type: 'h4', text: "The Stimulus" },
    { type: 'blockquote', text: "**Attorney for Ziegler:** My client continued to do consulting work between the time of his arrest for attempted murder and the start of this trial. But I contend that Ziegler was insane at the time that he fired the shot. This is the only reasonable conclusion to draw from the fact that the accusers have submitted no evidence that he was sane at the time he pulled the trigger, only that he was sane some time after he did so." },
    { type: 'h4', text: "The Question" },
    { type: 'paragraph', text: "Which one of the following most accurately describes a flaw in the reasoning of Ziegler’s attorney?" },
    { type: 'options', items: [
      "**(A)** It presumes that being a well-educated professional is relevant to being guilty or innocent.",
      "**(B)** It concludes on the basis of evidence against Ziegler’s being sane that there is a lack of evidence for Ziegler’s being sane.",
      "**(C)** It fails to consider that Ziegler might have been insane when he worked as a consultant.",
      "**(D)** It presumes that whether one is sane is relevant to whether one is morally responsible for one’s actions.",
      "**(E)** It fails to consider the possibility that Ziegler’s being sane after the shooting is an indication that he was sane at the time of the shooting."
    ]},
    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },
    { type: 'h3', text: "Analysis & Explanation" },
    { type: 'paragraph', text: "*(Scroll down only after attempting the question)*" },
    { type: 'hr' },
    { type: 'h3', text: "1. Deconstruct the Argument" },
    { type: 'breakdown', labels: { title: 'Component', text: 'Analysis' }, items: [
      { title: "Conclusion", text: "Ziegler was insane *at the time that he fired the shot*.", badge: "Conclusion", badgeColor: "indigo" },
      { title: "Premise", text: "The accusers have submitted *no evidence* of his sanity *at the time of the shot*.", badge: "Premise", badgeColor: "indigo" },
      { title: "Dismissal", text: "The accusers' evidence only shows he was sane *after* the shot.", badge: "Reasoning", badgeColor: "red" }
    ]},
    { type: 'h3', text: "2. Find the Logical Gap" },
    { type: 'paragraph', text: "The attorney's entire case rests on the idea that evidence of Ziegler's sanity *after* the shooting has absolutely no bearing on his sanity *during* the shooting. By dismissing this evidence as irrelevant, the attorney manufactures a \"lack of evidence\" and then uses that manufactured void to jump to the conclusion that Ziegler must have been insane." },
    { type: 'h3', text: "3. Formulate an Abstract Prediction" },
    { type: 'paragraph', text: "The argument wrongly dismisses a piece of relevant evidence by claiming it isn't direct proof. It fails to consider that evidence of a person's state *after* an event can serve as evidence of their state *during* that event." },
    { type: 'h3', text: "4. Evaluate the Answer Choices" },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: "(A) It presumes that being a well-educated professional is relevant...", text: "Background context, not the core argument.", badge: "Incorrect", badgeColor: "red" },
      { title: "(B) It concludes on the basis of evidence against Ziegler’s being sane...", text: "This scrambles the argument's structure. The attorney argues FROM a lack of evidence TO a conclusion.", badge: "Incorrect", badgeColor: "red" },
      { title: "(C) It fails to consider that Ziegler might have been insane when he worked...", text: "This would strengthen the attorney's case.", badge: "Incorrect", badgeColor: "red" },
      { title: "(D) It presumes that whether one is sane is relevant to whether one is morally responsible...", text: "Out of scope (philosophical discussion).", badge: "Incorrect", badgeColor: "red" },
      { title: "(E) It fails to consider the possibility that Ziegler’s being sane after the shooting is an indication...", text: "This perfectly identifies the flaw. Post-event sanity is relevant evidence, and the attorney flawed reasoning relies on ignoring it.", badge: "Correct", badgeColor: "green" }
    ]},
    { type: 'callout', title: "Summary & Key Takeaways", variant: "summary", text: "This question showcases an advanced flaw: **Dismissing Relevant Evidence by Setting an Unreasonable Standard of Proof.**\n\n**Key Takeaway:** Be critical of arguments that define \"evidence\" in an overly restrictive way. Evidence about what happened *before* or *after* an event is almost always relevant to what happened *during* that event." }
  ]
};
