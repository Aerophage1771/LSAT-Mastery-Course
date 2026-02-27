import { Lesson } from '../../types';

export const Lesson8_AdvancedConcepts: Lesson = {
  id: "5-8",
  title: "Advanced Concepts: Difficult Flaw Questions",
  content: [
    { type: 'h2', text: 'Advanced Concepts: Difficult Flaw Questions' },
    { type: 'paragraph', text: "You have now mastered the foundational flaw types. On easy-to-medium questions, recognizing the flaw category and prephrasing will carry you to the correct answer. But the hardest Flaw questions — the ones that separate 160-scorers from 170-scorers — use three specific **difficulty levers** to make correct answers hard to identify and wrong answers dangerously tempting." },
    { type: 'paragraph', text: "This lesson breaks down each difficulty lever, gives you concrete strategies for handling it, and then introduces advanced flaw types that appear primarily on the hardest questions." },

    { type: 'hr' },

    { type: 'h2', text: 'The Three Difficulty Factors' },
    { type: 'paragraph', text: "Every hard Flaw question uses at least one of these three levers. Understanding them transforms mysterious difficulty into predictable challenge." },

    { type: 'h3', text: 'Factor 1: Subtle Flaws (The Stimulus Is Hard to Crack)' },
    { type: 'paragraph', text: "On easy questions, the flaw is obvious — you can often name the category before finishing the stimulus. On hard questions, the flaw is **camouflaged** by one of the following techniques:" },
    { type: 'breakdown', labels: { title: 'Camouflage Technique', text: 'How It Works' }, items: [
      { title: 'Hybrid Argumentation', text: "The stimulus blends two flaw types together. A causal argument is wrapped in conditional language, or a statistical claim is combined with a scope shift. You must strip the argument to its skeleton to see the *primary* error the LSAT is testing.", badge: 'Very Common', badgeColor: 'red' },
      { title: 'Everyday Language Disguise', text: "The conditional or causal structure is hidden behind conversational phrasing. Instead of \"If A, then B,\" you get \"Anyone who wants to succeed must work hard\" or \"The only way to earn respect is through integrity.\" You must translate to formal logic before analyzing.", badge: 'Common', badgeColor: 'red' },
      { title: 'Multi-Step Reasoning', text: "The argument has 3–4 premises and 1–2 intermediate conclusions. The flaw is buried at one specific link in the chain, and you must identify *which* inferential step is broken rather than attacking the argument as a whole.", badge: 'Common', badgeColor: 'red' },
    ]},

    { type: 'h4', text: 'Example: The Causal-Conditional Blur' },
    { type: 'paragraph', text: "Hard stimuli often blur the lines between causal and conditional reasoning to disorient you:" },
    { type: 'blockquote', text: "\"Regular exercise promotes cardiovascular health. Cardiovascular health is required to live past 80. Since Thompson does not exercise regularly, he will not live past 80.\"" },
    { type: 'paragraph', text: "At first glance, this looks causal (\"promotes\" is causal language). But the logical structure is conditional: Exercise → Cardio Health → Live Past 80. The conclusion commits a **Mistaken Negation**: ~Exercise → ~Live Past 80. You must see past the causal surface to identify the conditional flaw beneath." },

    { type: 'hr' },

    { type: 'h3', text: 'Factor 2: Compound Flaws (Multiple Errors in One Argument)' },
    { type: 'paragraph', text: "Some hard arguments commit **more than one logical error**. The LSAT typically tests only one of them — but the other flaw(s) create tempting wrong answers that describe *real but untested* errors." },
    { type: 'paragraph', text: "**Strategy:** Identify all the flaws you can see, then match each to the answer choices. The correct answer will describe the flaw that is most central to the argument's failure — typically the error at the *main inferential step* (the jump from the final premises to the main conclusion), not a peripheral error in a subsidiary claim." },

    { type: 'h3', text: 'Factor 3: Abstract Answer Choices (The Translation Challenge)' },
    { type: 'paragraph', text: "This is the most common difficulty lever. The stimulus may be straightforward, but the correct answer is expressed in dense, academic abstraction that is almost impossible to parse without practice." },
    { type: 'paragraph', text: "**The goal:** You must translate between the LSAT's formal language and plain English — in both directions. You need to translate your concrete prephrase *into* abstract terms (to recognize the correct answer), and translate abstract answer choices *into* concrete terms (to verify they match the stimulus)." },

    { type: 'hr' },

    { type: 'h2', text: 'Decoding Abstract Flaw Descriptions' },
    { type: 'paragraph', text: "The table below maps the LSAT's most common abstract phrases to plain English. Study this table until these translations become automatic:" },
    { type: 'table', headers: ['LSAT Language (Abstract)', 'Plain English Translation'], rows: [
      ['"treats a condition that is sufficient for a result as a condition that is necessary for that result"', 'Mistaken Reversal: just because A guarantees B doesn\'t mean B requires A'],
      ['"takes for granted that a condition necessary for a result is sufficient for that result"', 'Nec. → Suff. confusion: just because A is required for B doesn\'t mean A guarantees B'],
      ['"presumes, without justification, that because something is true of each member it is true of the group"', 'Composition fallacy: parts → whole'],
      ['"infers a causal relationship from a mere correlation"', 'Correlation ≠ Causation'],
      ['"fails to consider the possibility that the relationship between A and B is the reverse of what is claimed"', 'Reverse causation: maybe B causes A'],
      ['"treats a probability as though it were a certainty"', 'Scope shift: likelihood ≠ guarantee'],
      ['"draws a conclusion about a population based on a sample that is unlikely to be representative"', 'Unrepresentative sample / biased sampling'],
      ['"confuses a claim about the proportion with a claim about the absolute number"', 'Numbers vs. Percentages confusion'],
      ['"takes the absence of evidence for a claim as evidence against that claim"', 'Appeal to Ignorance: no proof ≠ disproof'],
      ['"rejects a claim by attacking the person who made it rather than addressing the claim itself"', 'Ad Hominem / Source Attack'],
      ['"presumes that because two things have been found to occur together, one must be the cause of the other"', 'Causal flaw (slightly different wording for correlation → causation)'],
      ['"relies on an ambiguity in a key term"', 'Equivocation: same word, different meanings'],
      ['"treats two options as though they are the only possibilities"', 'False Dichotomy'],
      ['"assumes what it sets out to prove"', 'Circular Reasoning / Begging the Question'],
    ]},

    { type: 'callout', variant: 'tip', title: 'The Substitution Technique', text: "When you encounter a dense answer choice, break it into segments and substitute the stimulus's specific content for each abstract phrase.\n\nExample: \"presumes, without providing justification, that trying to bring about a condition that will ensure the achievement of an end must always be the way most likely to achieve that end.\"\n\nTranslate: \"a condition that will ensure the achievement of an end\" = a pure free market (guarantees max utility). \"trying to bring about\" = pursuing that goal. \"the way most likely to achieve that end\" = the best strategy. Now read: \"presumes that pursuing a pure free market must always be the most likely way to achieve max utility.\" Much clearer." },

    { type: 'hr' },

    { type: 'h2', text: 'The Trap Answers on Hard Questions' },
    { type: 'paragraph', text: "On easier questions, wrong answers are often obviously irrelevant. On hard questions, wrong answers use the **correct logical vocabulary** but apply it incorrectly. Here are the three most dangerous traps:" },

    { type: 'h3', text: 'Trap A: The "Reverse Logic" Trap' },
    { type: 'paragraph', text: "The answer choice describes a flaw that is structurally identical to the actual flaw but **reversed** in direction." },
    { type: 'table', headers: ['If the Stimulus Commits...', 'The Trap Answer Describes...'], rows: [
      ['Mistaken Reversal (Necessary treated as Sufficient)', 'Mistaken Negation'],
      ['Mistaken Negation (Absence of sufficient → absence of result)', 'Mistaken Reversal'],
      ['Composition (Part → Whole)', 'Division (Whole → Part)'],
      ['Correlation → Causation', 'Reverse Causation (which is a real flaw, but not *this* flaw)'],
    ]},
    { type: 'paragraph', text: "**Why it works:** You recognize the *family* of the error (\"It's a conditional logic thing!\") but fail to map the direction precisely. You pick the mirror image of the correct answer." },
    { type: 'paragraph', text: "**How to avoid it:** Diagram the argument in symbolic form. Confirm which direction the arrow is being improperly drawn before scanning the answer choices." },

    { type: 'h3', text: 'Trap B: The "Category Mismatch" Trap (Causal vs. Conditional)' },
    { type: 'paragraph', text: "The LSAT offers a **causal** answer choice for a **conditional** flaw, or vice versa." },
    { type: 'blockquote', text: "\"To be successful, one must work hard.\" (Necessary Condition)\nConclusion: \"Ted worked hard, so he will be successful.\" (Mistakes Necessary for Sufficient)" },
    { type: 'paragraph', text: "**The trap answer:** \"The argument infers that one event causes another simply because they are correlated.\"" },
    { type: 'paragraph', text: "**Why it works:** Both the correct flaw and the trap describe \"bad reasoning based on a link.\" But the relationship in the stimulus is *logical* (requirements/conditions), not *physical* (cause/effect). You must demand that the answer choice matches the *type* of reasoning used." },
    { type: 'paragraph', text: "**How to avoid it:** Ask yourself: Is the argument about *requirements and guarantees* (conditional) or about *cause and effect* (causal)? Key words: \"requires,\" \"must,\" \"only if\" = conditional. \"Causes,\" \"leads to,\" \"results in\" = causal." },

    { type: 'h3', text: 'Trap C: The "Unproven Premise" Distraction' },
    { type: 'paragraph', text: "This trap lures you into questioning the *truth* of a premise rather than the *inference* drawn from it." },
    { type: 'paragraph', text: "**The trap language:** \"The argument fails to establish that [Premise X] is true\" or \"The argument relies on a claim for which no support is provided.\"" },
    { type: 'paragraph', text: "**Why it works:** Often the premises *are* shaky opinions or weak survey results. You naturally want to attack them. But remember the fundamental Flaw rule: accept the premises as true and attack the *reasoning from* those premises." },
    { type: 'paragraph', text: "**How to avoid it:** If an answer choice attacks the *starting point* rather than the *logical move*, it almost always misses the reasoning error. The flaw is located **after** the premises, in the inferential leap to the conclusion." },

    { type: 'hr' },

    { type: 'h2', text: 'Advanced Flaw Types Not Covered in Drills' },
    { type: 'paragraph', text: "The following flaw types appear less frequently but show up on the hardest questions. Knowing them prevents surprise." },

    { type: 'h3', text: 'Equivocation (Shift in Meaning)' },
    { type: 'paragraph', text: "The argument's apparent validity depends on a key word or phrase being used in **two different senses**. The word means one thing in the premise and something subtly different in the conclusion." },
    { type: 'blockquote', text: "\"All banks are alongside rivers. Therefore, the institution where I deposit my money is alongside a river.\"" },
    { type: 'paragraph', text: "Here, \"bank\" shifts from riverbank to financial institution. In real LSAT questions, the equivocation is far more subtle — the word might be \"fair,\" \"right,\" \"free,\" \"natural,\" or \"average,\" where the shift between senses is easy to miss." },
    { type: 'paragraph', text: "**LSAT language:** \"relies on an ambiguity in a key term\" or \"uses a key term in two different senses.\"" },
    { type: 'paragraph', text: "**How to spot it:** If the argument's logic seems superficially valid but something feels \"off,\" check whether any key term means something slightly different in the premise vs. the conclusion." },

    { type: 'h3', text: 'Circular Reasoning (Begging the Question)' },
    { type: 'paragraph', text: "The argument's conclusion is essentially a **restatement of one of its premises** in different words. The argument assumes the very thing it sets out to prove." },
    { type: 'blockquote', text: "\"Freedom of speech is important because people should be able to say what they want without restriction.\"" },
    { type: 'paragraph', text: "The premise (\"people should be able to say what they want\") is just another way of saying \"freedom of speech is important.\" No actual *evidence* has been provided — the conclusion has been smuggled into the premise." },
    { type: 'paragraph', text: "**LSAT language:** \"assumes what it sets out to prove\" or \"its conclusion is merely a restatement of a claim made in its premises.\"" },
    { type: 'paragraph', text: "**How to spot it:** If you cannot identify any independent evidence supporting the conclusion — if every premise seems to just *be* the conclusion in different words — you may be looking at circular reasoning." },

    { type: 'h3', text: 'False Dichotomy (False Dilemma)' },
    { type: 'paragraph', text: "The argument presents **only two options** when more exist, then eliminates one to force the other as the conclusion." },
    { type: 'blockquote', text: "\"Either we eliminate all regulations on small businesses, or small businesses will continue to fail at record rates. Since we cannot accept continued failures, we must eliminate all regulations.\"" },
    { type: 'paragraph', text: "The argument ignores middle-ground options: reducing some regulations, providing financial support, improving business education, or simplifying the regulatory process." },
    { type: 'paragraph', text: "**LSAT language:** \"treats two options as though they are the only possibilities\" or \"fails to consider alternatives to the two positions presented.\"" },
    { type: 'paragraph', text: "**How to spot it:** Look for \"either…or\" constructions where the two options presented don't genuinely exhaust all possibilities." },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example: Hard Flaw Question' },

    { type: 'hr' },

    { type: 'h3', text: 'Analysis' },
    { type: 'paragraph', text: "This is a hard question because it combines multiple reasoning moves, and several wrong answers describe *real* flaw types that could plausibly apply." },

    { type: 'process', title: 'Solving with the Double-Check Method', steps: [
      "**Deconstruct:** The researcher makes three claims:\n1. Attempts to show climate → high suicide rate have failed.\n2. High suicide rate correlates with low sunlight.\n3. Low sunlight is a consequence of the climate.\nConclusion: The cause of the high suicide rate is NOT a consequence of the climate.",
      "**Find the Gap:** The researcher concludes that the cause is not a consequence of the climate. But wait — low sunlight IS a consequence of the climate (Premise 3). What if the causal chain is: Climate → Low Sunlight → [some intermediate factor] → High Suicide Rate? In that case, the cause WOULD be a consequence of the climate — just indirectly. The researcher dismisses a *direct* climate-to-suicide link but ignores an *indirect* path through sunlight.",
      "**Prephrase:** The argument overlooks the possibility that the cause of the high suicide rate is connected to the climate through an intermediary — specifically, through the low sunlight that the climate itself produces.",
      "**Double-Check:** Before selecting, verify that each component of the answer choice matches: Does the answer describe the specific path the researcher missed? Does it accurately characterize the relationship between sunlight, climate, and suicide rate?"
    ]},

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation'}, items: [
      { title: '(A) appeals to the lack of evidence for a claim as grounds for concluding that the claim is false', text: 'This describes an Appeal to Ignorance, and the first sentence of the argument does commit this error (\"attempts have failed, so the cause must lie elsewhere\"). However, this is not the *primary* flaw the LSAT is testing — it\'s a stepping stone. The main error is in the final conclusion, not in this initial inference.', badge: 'Tempting but Not Primary', badgeColor: 'red'},
      { title: '(B) infers... that a certain effect has no causes', text: 'The argument does not claim the suicide rate has no cause. It claims the cause lies \"elsewhere\" — i.e., outside the climate. This mischaracterizes the conclusion.', badge: 'Incorrect', badgeColor: 'red'},
      { title: '(C) fails to consider the possibility that the cause of the high suicide rate might be a consequence of the low level of sunlight', text: 'The argument says the cause is not a consequence of the climate. But it also says low sunlight IS a consequence of the climate. If the cause of the suicide rate is a consequence of the low sunlight, then it IS (indirectly) a consequence of the climate. The argument fails to consider this indirect causal chain.', badge: 'Correct', badgeColor: 'green'},
      { title: '(D) takes for granted that the high suicide rate in Elkmount is abnormal', text: 'The argument calls it a \"high\" suicide rate, which implies it is abnormal relative to some baseline. Even if this is taken for granted, it\'s not the reasoning error that makes the conclusion fail.', badge: 'Incorrect', badgeColor: 'red'},
      { title: '(E) illicitly draws a conclusion about the cause from evidence about a correlation', text: 'This describes a correlation→causation flaw. The researcher actually does NOT conclude that the correlation proves causation — the researcher\'s conclusion is about what the cause is *not*. This answer mischaracterizes the direction of the argument.', badge: 'Incorrect', badgeColor: 'red'}
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'The Double-Check Method for Hard Questions' },
    { type: 'paragraph', text: "When you've narrowed your choices to two contenders on a hard question, use this systematic verification process:" },

    { type: 'process', title: 'The Double-Check Method', steps: [
      '**Translate each contender.** Break each remaining answer choice into segments. Replace every abstract phrase with the specific content from the stimulus.',
      '**Verify every clause.** Check each clause of the translated answer against the stimulus. Does the answer accurately describe the argument\'s conclusion? Its premises? The specific error? If even one clause is wrong, the answer is wrong.',
      '**Check the direction.** For conditional flaws: does the answer get the direction right (sufficient→necessary vs. necessary→sufficient)? For causal flaws: does it get the causal direction right? For scope shifts: does it correctly identify which direction the shift goes?',
      '**Ask: "Is this the CORE error or a PERIPHERAL concern?"** Both answers may describe genuine problems. The correct answer identifies the error that most fundamentally breaks the argument\'s logic — usually the error at the main inferential step.',
      '**Final test: If this flaw were fixed, would the argument work?** The correct answer describes an error that, if corrected, would substantially improve the argument. The wrong answer, even if it describes a real problem, often describes an issue that wouldn\'t fix the core logical failure.',
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**Three Difficulty Factors:** Hard Flaw questions use (1) subtle/camouflaged flaws, (2) compound flaws that generate multiple tempting answers, and (3) abstract answer choice language that obscures simple errors.\n\n**Master the Translation Table.** The LSAT uses roughly 15 standard abstract phrases to describe flaws. Learn these translations cold so you can decode any answer choice on sight.\n\n**Know the Three Traps.** The Reverse Logic trap (right family, wrong direction), the Category Mismatch trap (causal answer for conditional flaw), and the Unproven Premise distraction (attacks the premise instead of the inference) are the three most common ways hard questions trick strong students.\n\n**Advanced Flaw Types.** Equivocation (meaning shift), circular reasoning (conclusion restated as premise), and false dichotomy (only two options presented) appear primarily on harder questions. Knowing they exist prevents surprise.\n\n**Use the Double-Check Method.** When stuck between two answers, translate both into plain English, verify every clause against the stimulus, check the direction of the error, and identify which flaw is the core vs. peripheral error." },
  ]
};
