import { Lesson } from '../../types';

export const Lesson9_Drill_SemanticNuance: Lesson = {
  id: "16-9",
  title: "Drill: Exploiting Semantic Nuance",
  content: [
    { type: 'h2', text: 'Semantic Nuance' },
    { type: 'paragraph', text: "A **Semantic Nuance** question hinges on the precise, literal meaning of a modifier or quantifier \u2014 words and phrases like \"not necessarily,\" \"some,\" \"most,\" \"all,\" \"only,\" or \"not exclusively.\" The entire inference pivots on understanding the exact logical force of one subtle phrase. These questions test whether you can resist the temptation to read casually and instead extract the powerful deduction that hides inside a careful distinction." },

    { type: 'paragraph', text: "The critical skill is parsing modifier language with legalistic precision. \"Not necessarily social\" does not mean \"never social\" \u2014 it means \"possibly non-social.\" \"Some\" does not mean \"most\" \u2014 it means \"at least one.\" The gap between what a phrase seems to say on a quick read and what it actually says is where the correct answer lives." },

    { type: 'h3', text: 'What Makes Semantic Nuance Distinctive' },
    { type: 'list', ordered: true, items: [
      '**The pivot word controls the inference.** One modifier \u2014 often "not necessarily," "not always," or "not exclusively" \u2014 determines the entire logical structure. Misreading it guarantees a wrong answer.',
      '**"Not necessarily X" means "possibly not X."** This is the most commonly tested nuance. It creates a possibility, not a prohibition. If morals are "not necessarily social," then morals *can* exist in non-social contexts \u2014 but they can also be social.',
      '**Wrong answers exploit the misreading.** The test writers know that many students will read "not necessarily social" as "never social." At least one wrong answer is designed specifically for that misreading.',
    ]},

    { type: 'callout', variant: 'default', title: 'The Possibility Rule', text: "When you see \"not necessarily X,\" translate it to: \"It is possible for this to be non-X.\" This creates a *possibility*, not an absolute. The correct answer will describe that possibility. Wrong answers will treat it as a prohibition." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Exploiting Semantic Nuance' },
    { type: 'paragraph', text: "This drill demonstrates how a single modifying phrase \u2014 \"not necessarily\" \u2014 controls the entire inference. Read the stimulus, commit to an answer, then review the full analysis below." },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },


    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Parse the Key Definitions' },
    { type: 'paragraph', text: "The stimulus defines two concepts by contrasting them on a single dimension: whether they require a social context." },
    { type: 'breakdown', labels: { title: 'Concept', text: 'Definition' }, items: [
      { title: 'Manners (Etiquette)', text: '"Necessarily social" \u2014 manners **require** other people. They cannot exist in isolation. This is confirmed by the conclusion: "the rules of etiquette do not apply when one is alone."', badge: 'NECESSARILY Social', badgeColor: 'indigo' },
      { title: 'Morals', text: '"Not necessarily social" \u2014 morals do **not require** other people. This does NOT mean morals are never social. It means morality *can* apply in non-social situations. Morals may also apply in social situations \u2014 the phrase leaves that open.', badge: 'NOT NECESSARILY Social', badgeColor: 'blue' },
    ]},

    { type: 'h4', text: 'Step 2: Extract the Logical Force' },
    { type: 'paragraph', text: "The entire inference depends on correctly parsing \"not necessarily social\":" },
    { type: 'list', items: [
      '"Not necessarily social" = "possibly non-social" = morals *can* apply when one is alone.',
      'If morals can apply when one is alone, then it is possible to violate a moral rule without any other person being involved.',
      'If you can violate a moral rule without anyone else being involved, then you can be immoral without having caused harm to another person.',
    ]},
    { type: 'paragraph', text: "This chain moves from a possibility (morals can be non-social) to a concrete implication (one could be immoral without harming others). Each step follows necessarily from the one before it." },

    { type: 'h4', text: 'Step 3: Evaluate Each Answer' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) One could be immoral without ever having caused any other person any harm.', text: 'This is the direct consequence of the definition. If morals are "not necessarily social," then a moral rule can apply when you are alone. If you can break a moral rule when alone, you can be immoral without harming another person. The word "could" correctly reflects the possibility created by "not necessarily."', badge: 'Correct', badgeColor: 'green' },
      { title: '(B) No immoral act could be a violation of the rules of etiquette.', text: 'The stimulus does not say that manners and morals are mutually exclusive categories. An act could violate both a moral rule and an etiquette rule simultaneously. Nothing in the definitions prevents overlap.', badge: 'False Dichotomy Trap', badgeColor: 'red' },
      { title: '(C) The rules of morality apply only when one is alone.', text: 'The word "only" is a fatal exaggeration. "Not necessarily social" means morality *can* apply in non-social contexts, not that it *exclusively* applies in such contexts. Morality can also apply in social situations.', badge: 'Extreme Language Trap', badgeColor: 'red' },
      { title: '(D) It is more important to be moral than to have good manners.', text: 'The stimulus defines the two concepts but never compares their importance or value. This introduces a value judgment that has no basis in the text.', badge: 'Value Judgment Trap', badgeColor: 'red' },
      { title: '(E) What is social in nature could not be a matter of morality.', text: 'This is the most common misreading. It treats "not necessarily social" as meaning "never social." In fact, morality can apply to social situations \u2014 it just is not *limited* to them. This answer confuses "not required to be X" with "cannot be X."', badge: 'Misinterpretation Trap', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Key Lessons from This Drill' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. Modifiers are the engines of logic.** On the LSAT, phrases like \"not necessarily,\" \"not always,\" and \"not exclusively\" carry enormous inferential weight. When you encounter one, stop and translate it into its precise logical meaning before proceeding.\n\n**2. \"Not necessarily X\" creates a possibility, not a rule.** It means \"it is possible for this to be non-X.\" The correct answer will describe that possibility. Wrong answers will either treat it as \"always non-X\" (too strong) or \"never X\" (a misreading).\n\n**3. Watch for the misinterpretation trap.** The test writers know that \"not necessarily social\" is easily misread as \"not social.\" At least one wrong answer (here, E) is built for students who make that error. Parsing the modifier correctly eliminates the most tempting distractor." },
  ]
};
