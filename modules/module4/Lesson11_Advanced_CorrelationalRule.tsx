import { Lesson } from '../../types';

export const Lesson11_Advanced_CorrelationalRule: Lesson = {
  id: "4-11",
  title: "Advanced: Correlational Rule",
  content: [
    { type: 'h2', text: 'Advanced Lesson 3: The Correlational Rule (Parallel Reasoning)' },
    { type: 'paragraph', text: "This lesson focuses on a deceptively simple but frequently tested pattern: applying a **general rule of correlation** to a specific case. These arguments begin by establishing a direct relationship between two properties — as one increases, the other also increases (or decreases). The argument then presents a specific comparison between two items and uses the general rule to draw a **certain, comparative conclusion**." },

    { type: 'callout', variant: 'tip', title: 'Why This Pattern Matters', text: "Correlational rule questions are among the most efficiently solvable Parallel Reasoning questions — once you recognize the pattern. The correct answer nearly always mirrors three elements: (1) a universal correlational rule, (2) a specific comparison, and (3) a valid application. The traps almost always involve **flawed applications** of the rule, making validity your strongest filter." },

    { type: 'hr' },

    { type: 'h2', text: 'The Correlational Rule Pattern' },
    { type: 'paragraph', text: "A correlational rule argument moves in three clean steps:" },

    { type: 'table', headers: ['Component', 'Abstract Form', 'Role'], rows: [
      ['Premise 1 (The Rule)', 'The more of A, the more of B', 'Establishes a universal direct correlation between two properties'],
      ['Premise 2 (The Case)', 'Item X has more of A than Item Y', 'Provides a specific comparison along the input dimension'],
      ['Conclusion', 'Therefore, X has more of B than Y', 'Applies the rule to deduce a comparison along the output dimension'],
    ]},

    { type: 'paragraph', text: "The rule acts as a **bridge** between the two properties. Because the rule is universal (it applies to everything in its domain), the comparison on one property guarantees a comparison on the other." },

    { type: 'h3', text: 'Correlation Directions' },
    { type: 'paragraph', text: "Correlational rules can run in two directions:" },
    { type: 'table', headers: ['Direction', 'Abstract Form', 'Example'], rows: [
      ['**Direct (Positive)**', 'More A → More B', '"The higher the altitude, the thinner the air."'],
      ['**Inverse (Negative)**', 'More A → Less B', '"The heavier the vehicle, the lower the fuel efficiency."'],
    ]},
    { type: 'paragraph', text: "When matching, the **direction** of correlation must match. A direct correlation in the stimulus cannot parallel an inverse correlation in the answer, even if every other feature aligns." },

    { type: 'hr' },

    { type: 'h2', text: 'Correlation vs. Causation in Parallel Structure' },
    { type: 'paragraph', text: "In everyday reasoning, correlation and causation are easy to confuse. For Parallel Reasoning purposes, the distinction matters because **correlational and causal arguments have different structures**:" },

    { type: 'table', headers: ['Feature', 'Correlational Rule', 'Causal Argument'], rows: [
      ['**What the rule states**', 'Two properties **co-vary**: as one changes, the other changes proportionally', 'One event **produces** another event'],
      ['**Conclusion type**', 'Comparative: \"X has more B than Y\"', 'Explanatory: \"A caused B\" or \"A led to B\"'],
      ['**Validity requirement**', 'The rule must be **universal** and the comparison must be along the **input dimension**', 'The causal mechanism must be established (or the argument is flawed)'],
      ['**Typical signal words**', '\"the more…the more,\" \"the higher…the lower,\" \"proportional to\"', '\"causes,\" \"leads to,\" \"results in,\" \"produces\"'],
      ['**Flaw pattern**', 'Applying a within-group rule to a between-group comparison, or reversing the direction', 'Confusing correlation with causation, post hoc reasoning'],
    ]},

    { type: 'callout', variant: 'default', title: 'Why This Matters for Matching', text: "A correlational rule argument concludes with a **comparison** (\"X has more B than Y\"). A causal argument concludes with an **explanation** (\"X caused Y\"). These are structurally different conclusion types. If the stimulus uses a correlational rule, any answer choice with a causal conclusion is an automatic mismatch — regardless of how similar the premises look." },

    { type: 'hr' },

    { type: 'h2', text: 'The Validity Filter' },
    { type: 'paragraph', text: "On correlational rule questions, **validity is your strongest filter.** The most common traps present arguments that look similar but commit subtle logical errors. Here are the validity issues to watch for:" },

    { type: 'breakdown', labels: { title: 'Validity Issue', text: 'Explanation' }, items: [
      { title: 'Within-Person vs. Between-Person Scope', text: 'A rule like \"As you get older, you get wiser\" describes change **within a single person over time**. It does NOT validly support a comparison between two **different** people (\"Henrietta is older than her daughter, so Henrietta is wiser\"). The rule\'s scope is limited to one individual\'s trajectory. Applying it across individuals is a scope error.', badge: 'Common Trap', badgeColor: 'red' },
      { title: 'Multi-Variable Rules', text: 'If the correlational rule has **two input conditions** (\"the more egg whites AND the longer beaten → fluffier meringue\"), providing information about only **one** input is insufficient. The conclusion doesn\'t follow because the second variable is unknown.', badge: 'Common Trap', badgeColor: 'red' },
      { title: 'Group-to-Individual Fallacy', text: 'A rule about a group trend (\"the fastest marathoners today are faster than those 10 years ago\") cannot validly be applied to a specific individual (\"Charles runs faster now than 10 years ago\"). Group trends don\'t guarantee individual outcomes.', badge: 'Common Trap', badgeColor: 'red' },
      { title: 'Mistaken Reversal', text: 'The rule says \"More A → More B.\" The argument provides information about B and concludes about A. This reverses the direction of the correlation. Just because X has more B doesn\'t mean X has more A.', badge: 'Common Trap', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'paragraph', text: "Let's apply the full method to a correlational rule question." },


    { type: 'h3', text: 'Step-by-Step Solution' },

    { type: 'process', title: 'Applying the Correlational Rule Method', steps: [
      '**Step 1 — Identify the structure:**\n• Rule: \"The higher the altitude, the thinner the air.\" Direct correlation: More A → More B.\n• Case: Mexico City\'s altitude > Panama City\'s altitude. Comparison on the input dimension (A).\n• Conclusion: Mexico City\'s air is thinner. Comparison on the output dimension (B).\n• Validity: **Valid.** The rule is universal (a physical law), the comparison is between two items in the same domain (cities), and the input dimension is compared.',
      '**Step 2 — Abstract the blueprint:**\nUniversal rule: More A → More B.\nSpecific case: X has more A than Y.\nConclusion: X has more B than Y.\n**Valid** application of a direct correlation to a **between-item** comparison.',
      '**Step 3 — Quick validity scan:**\n• (A): Rule is about change within one person over time. Applied to compare two different people. **Scope error — flawed.**\n• (B): Rule has TWO input conditions (egg whites AND beating time). Only one input is compared. **Incomplete information — flawed.**\n• (C): Rule about a group trend (fastest marathoners). Applied to one individual (Charles). **Group-to-individual fallacy — flawed.**\n• (D): Rule: More A (older tree) → More B (more rings). Case: Lou\'s tree is older than Theresa\'s. Conclusion: Lou\'s tree has more rings. **Valid.**\n• (E): Rule: More A (vocabulary) → More B (harder to learn). But the premise gives us information about B (harder to learn) and concludes about A (vocabulary). **Mistaken Reversal — flawed.**',
      '**Step 4 — Verify (D):**\n• Universal rule: \"The older a tree, the more rings it has.\" More A → More B. ✓\n• Comparison on input: Lou\'s tree is older (more A) than Theresa\'s. ✓\n• Conclusion on output: Lou\'s tree has more rings (more B). ✓\n• Validity: Valid — the rule applies universally to all trees. ✓\nPerfect structural match.',
    ]},

    { type: 'h3', text: 'Wrong-Answer Analysis' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Why It Fails' }, items: [
      { title: '(A) Older → wiser; Henrietta is older than daughter; Henrietta is wiser', text: 'The rule \"as one gets older one gets wiser\" describes change **within a single person** over their lifetime. It does not validly support comparing wisdom between two **different** people. Henrietta\'s wisdom trajectory and her daughter\'s are independent. The stimulus\'s rule (altitude/air) is a universal physical law that applies to any comparison.', badge: 'Scope Error', badgeColor: 'red' },
      { title: '(B) More egg whites + longer beaten → fluffier; Lydia used more whites; Lydia\'s is fluffier', text: 'The rule requires **two** input conditions to be met. The premise only provides information about one (egg whites). The second condition (beating time) is unknown. The conclusion doesn\'t follow because Joseph might have beaten his longer, compensating for fewer egg whites.', badge: 'Incomplete Input', badgeColor: 'red' },
      { title: '(C) Fastest marathoners today > those 10 years ago; Charles runs faster now', text: 'The rule describes a **group trend** (the fastest runners at the top of the field). It does not apply to a specific individual. Charles may not be among \"the fastest\" — or he may have gotten slower individually even as the top of the field improved.', badge: 'Group-to-Individual', badgeColor: 'red' },
      { title: '(D) Older tree → more rings; Lou\'s tree is older; Lou\'s tree has more rings', text: 'Universal rule, single-variable, between-item comparison on input, conclusion on output. Valid and structurally identical to the stimulus.', badge: 'Correct', badgeColor: 'green' },
      { title: '(E) Bigger vocabulary → harder to learn; English is harder; English has bigger vocabulary', text: 'The rule goes More A → More B (More Vocabulary → Harder). The premise provides information about B (English is harder — more B). The conclusion is about A (English has bigger vocabulary — more A). This **reverses** the direction: it goes from output to input. This is a Mistaken Reversal.', badge: 'Direction Reversal', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Matching Correlational Patterns: The Checklist' },
    { type: 'paragraph', text: "Use this systematic checklist when matching correlational rule arguments:" },

    { type: 'process', title: 'Correlational Pattern Matching', steps: [
      '**Is the rule universal?** The stimulus\'s rule must apply to all items in the domain (like a physical law). The answer\'s rule must be equally universal. A rule with exceptions or limited scope is a mismatch.',
      '**Is the correlation direction the same?** Direct (more A → more B) must match direct. Inverse (more A → less B) must match inverse.',
      '**How many input variables?** If the stimulus\'s rule has one input, the answer must have one input. If it has two inputs (A AND B → C), both must be compared.',
      '**Is the comparison on the input or output?** The premise must compare items on the INPUT dimension (A). If the premise compares on the output dimension (B), the argument is flawed (Mistaken Reversal).',
      '**Is the comparison between-item or within-item?** The stimulus compares two distinct items (Mexico City vs. Panama City). The answer must also compare two distinct items — not one item at two different times.',
      '**Is the argument valid?** If the stimulus is valid (and most correlational rule stimuli are), the answer must be valid too. Use the validity issues catalog above to check.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'A Second Practice Question' },


    { type: 'h3', text: 'Solution Walkthrough' },
    { type: 'paragraph', text: "The stimulus applies a direct correlation (More A → More B) to a between-item comparison on the input dimension. The conclusion follows validly on the output dimension." },

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) More practice → better performance; Yuki practices more than Ren; Yuki performs better', text: 'Direct correlation. Between-person comparison on the input (practice). Conclusion on the output (performance). Valid. Structurally identical.', badge: 'Correct', badgeColor: 'green' },
      { title: '(B) Wider river → slower flow; Amazon is the widest; Amazon is the slowest', text: 'Close, but the comparison is superlative (\"the widest\") rather than comparative (\"wider than Y\"). The stimulus compares two specific items; this compares one item against all others. The scope differs.', badge: 'Scope Mismatch', badgeColor: 'red' },
      { title: '(C) More expensive → more reliable; Dasha\'s is more reliable; Dasha\'s was more expensive', text: 'The premise provides information about the OUTPUT dimension (reliability), and the conclusion is about the INPUT dimension (expense). This reverses the direction of the correlation — a Mistaken Reversal.', badge: 'Direction Reversal', badgeColor: 'red' },
      { title: '(D) Taller building → more floors; Empire State is one of the tallest; it has many floors', text: 'The conclusion is about a single item (\"it must have many floors\") rather than a comparison between two items. The stimulus compares X and Y; this describes X alone. Also, \"one of the tallest\" is vague, not a direct two-item comparison.', badge: 'No Comparison', badgeColor: 'red' },
      { title: '(E) More sunlight → faster growth; X and Y get same sunlight; they grow at the same rate', text: 'The premise establishes EQUALITY on the input dimension, not a greater-than relationship. The conclusion is about sameness, not about one being more than the other. The stimulus\'s structure is \"X > Y on A → X > Y on B,\" not \"X = Y on A → X = Y on B.\"', badge: 'Equality vs. Comparison', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• The **Correlational Rule** pattern establishes a universal relationship (More A → More B), applies it to a specific comparison (X has more A than Y), and concludes on the output dimension (X has more B than Y).\n• **Validity is your strongest filter.** Most wrong answers on correlational rule questions are **flawed** arguments — scope errors, incomplete inputs, group-to-individual fallacies, and Mistaken Reversals.\n• **Correlation direction** (direct vs. inverse) must match between stimulus and answer.\n• **Scope of the rule** matters: a rule about change within one person over time is NOT the same as a rule about comparing two different items.\n• **Single-variable rules** cannot parallel **multi-variable rules**: if the answer's rule requires two inputs, both must be compared in the premise.\n• The Mistaken Reversal (concluding about the input from information about the output) is the single most common trap on these questions.\n• When four out of five answers are flawed and the stimulus is valid, you can often solve the question in under a minute by checking validity alone." },
  ]
};
