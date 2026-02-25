import { Lesson } from '../../types';

export const Lesson6_Drill_MutuallyExclusive: Lesson = {
  id: "10-6",
  title: "Drill: Mutually Exclusive Categories (PT-128-S-2-Q-15)",
  content: [
    { type: 'h2', text: 'Mutually Exclusive Categories' },
    { type: 'paragraph', text: "The Mutually Exclusive Categories pattern appears when an argument proves that something belongs to Category A and then concludes it cannot belong to Category B. The logical leap is the assumption that being in one category automatically excludes membership in the other — that the two categories cannot overlap. This is only valid if the categories are genuinely mutually exclusive." },
    { type: 'paragraph', text: "This pattern is closely related to the Binary Assumption (Lesson 5), but the direction is reversed. The Binary Assumption says: \"If it's not A, it must be B\" (exhaustiveness — no gaps between categories). Mutually Exclusive Categories says: \"If it IS A, it cannot be B\" (exclusivity — no overlap between categories). Both patterns close a logical gap by constraining the relationship between two categories, but they target different vulnerabilities." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Spot a Mutual Exclusivity Gap' },
    { type: 'paragraph', text: "Use this checklist:" },
    { type: 'list', items: [
      '**Look for category placement in the premises.** The argument will establish that the item belongs to Category A — often using descriptions, characteristics, or expert classifications.',
      '**Look for category exclusion in the conclusion.** The conclusion will assert that the item does NOT belong to Category B, or that classifying it as B is inappropriate.',
      '**Ask: could it be both?** If you can imagine something belonging to both Category A and Category B simultaneously, the argument has a mutual exclusivity gap. The correct answer will close this gap by declaring that the categories cannot overlap.',
    ]},
    { type: 'table', headers: ['Premise Structure', 'Conclusion', 'Gap (Overlap Possible?)'], rows: [
      ['Item belongs to "great dramatic novels"', '"Science fiction" label is inappropriate', 'Could a novel be both a great dramatic novel and science fiction?'],
      ['Item qualifies as "educational"', 'Item is not "entertainment"', 'Could something be both educational and entertaining?'],
      ['Action is "legally permitted"', 'Action is not "morally wrong"', 'Could something be both legal and morally wrong?'],
    ]},
    { type: 'callout', variant: 'default', title: 'Binary vs. Mutually Exclusive', text: "These two patterns are complementary:\n\n**Binary Assumption** (no gap): Not A → Must be B. *\"There is no middle ground.\"*\n**Mutually Exclusive** (no overlap): Is A → Cannot be B. *\"You can't be in both.\"*\n\nA true dichotomy requires *both*: no gap AND no overlap. SA questions typically test only one of these at a time. Read the conclusion carefully to determine which direction the argument is leaping — from \"not A\" to \"B\" (binary) or from \"is A\" to \"not B\" (mutual exclusivity)." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Mutually Exclusive Categories (PT-128-S-2-Q-15)' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: '10-6-drill',
      questionType: 'Sufficient Assumption',
      difficulty: 'hard',
      stimulus: "H. G. Wells's great dramatic novel The Time Machine is classified as science fiction simply because it takes place in the future. But this classification is inappropriate because Wells's book possesses something that great dramatic novels have and science fiction generally lacks — compelling characters that enable the reader to become absorbed in their plight and not just in the author's representation of the future of technology.",
      question: "The argument's conclusion follows logically if which one of the following is assumed?",
      options: [
        "(A) All novels that contain compelling characters are great dramatic novels.",
        "(B) Novels can always be clearly classified into distinct genres.",
        "(C) A work of science fiction cannot achieve greatness unless it contains compelling characters.",
        "(D) The most important determinant of a novel's quality is the strength of its characters.",
        "(E) A dramatic novel cannot both be great and belong to the genre of science fiction. (Correct)",
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "This argument is rich with rhetorical language. Let's strip it down to its logical bones, identifying each piece of the reasoning." },
    { type: 'breakdown', labels: { title: 'Statement', text: 'Analysis' }, items: [
      { title: '"H. G. Wells\'s great dramatic novel The Time Machine is classified as science fiction simply because it takes place in the future."', text: "This gives us the setup. Two important facts:\n1. The book is a **\"great dramatic novel\"** — the author accepts this classification.\n2. Others have classified it as **\"science fiction\"** — this is the classification the author plans to attack.\n\nThe phrase \"simply because it takes place in the future\" is dismissive — the author thinks this is an insufficient reason for the science fiction label." },
      { title: '"But this classification is inappropriate..."', text: "This is the **main conclusion**. The word \"But\" signals opposition. The author asserts that calling *The Time Machine* \"science fiction\" is **wrong** — the classification doesn't fit." },
      { title: '"...because Wells\'s book possesses something that great dramatic novels have and science fiction generally lacks —"', text: "This begins the evidence. The author is drawing a contrast between two categories:\n• Great dramatic novels → **have** this quality.\n• Science fiction → **generally lacks** this quality.\n\nThe word **\"generally\"** is a critical weakness. It means science fiction *usually* lacks this quality but *not always*. There could be exceptions." },
      { title: '"— compelling characters that enable the reader to become absorbed in their plight and not just in the author\'s representation of the future of technology."', text: "The specific quality is **compelling characters**. The author's evidence is:\n• *The Time Machine* has compelling characters.\n• Great dramatic novels have compelling characters.\n• Science fiction generally lacks compelling characters.\n\nTherefore (the author concludes), since *The Time Machine* has the quality of great dramatic novels and lacks the typical quality of science fiction... it isn't science fiction." },
    ]},

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "**What is the method of reasoning?**\nThe author places the book firmly in Category A (\"great dramatic novel\") and then uses this placement to argue it cannot be in Category B (\"science fiction\"). The reasoning relies on the contrast between the two categories' typical qualities." },
    { type: 'paragraph', text: "**Where does the logic break down?**\nThe argument has two significant vulnerabilities:" },
    { type: 'list', items: [
      '**The "generally" qualifier:** The author says science fiction "generally lacks" compelling characters — not that it *always* lacks them. If some science fiction does have compelling characters, then having compelling characters does not disqualify a book from being science fiction. *The Time Machine* could simply be an exception within the genre.',
      '**The overlap assumption:** Even setting aside the "generally" problem, the argument assumes that being a "great dramatic novel" and being "science fiction" are mutually exclusive categories. Why can\'t a book be both? Many works belong to multiple genres simultaneously. A novel can be a romance *and* a thriller; a film can be a comedy *and* a drama. The author needs a rule that says you cannot be in both categories.',
    ]},
    { type: 'paragraph', text: "The second vulnerability is the **key gap** that can be closed by a single premise. Even if some science fiction has compelling characters, the argument works if we simply declare that the two categories cannot overlap." },

    { type: 'h4', text: 'Step 3: Prephrase the Bridge' },
    { type: 'paragraph', text: "To make the conclusion airtight, we need a rule that makes the two categories mutually exclusive. We need:" },
    { type: 'paragraph', text: "***\"To make the conclusion guaranteed, I need: A great dramatic novel cannot also be science fiction (or equivalently: nothing can be both a great dramatic novel and science fiction).\"***" },
    { type: 'paragraph', text: "With this rule in place, the moment we establish that *The Time Machine* is a \"great dramatic novel,\" it automatically cannot be \"science fiction.\" The conclusion follows immediately." },

    { type: 'h4', text: 'Step 4: Evaluate the Choices' },
    { type: 'paragraph', text: "We are looking for the answer that declares the two genre categories cannot overlap — that membership in one excludes membership in the other." },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) All novels that contain compelling characters are great dramatic novels.', text: "This links the presence of characters to the \"great dramatic novel\" label — but it does not separate great dramatic novels from science fiction. Under this rule, a science fiction novel with compelling characters would *also* qualify as a great dramatic novel. But it could still be *both*. The overlap between the two categories remains open. **Connects characters to dramatic novels but doesn't exclude science fiction.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) Novels can always be clearly classified into distinct genres.', text: "This is far too broad and vague. Even if novels *can* be classified into distinct genres, it doesn't tell us *which* genres are distinct from which. It provides no specific rule about the relationship between \"great dramatic novels\" and \"science fiction.\" **Too general — provides no specific bridge.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) A work of science fiction cannot achieve greatness unless it contains compelling characters.', text: "This tells us what a science fiction book needs to be \"great\" — but the conclusion is about whether *The Time Machine* should be classified as science fiction at all. Whether science fiction books need good characters to be great is a separate question from whether a great dramatic novel can be science fiction. **Addresses quality within a genre, not genre classification.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) The most important determinant of a novel\'s quality is the strength of its characters.', text: "The argument is about **classification** (which genre does the book belong to?), not about **quality** (how good is the book?). A rule about what determines quality is irrelevant to a question about genre boundaries. **Wrong concept entirely — quality ≠ classification.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) A dramatic novel cannot both be great and belong to the genre of science fiction.', text: "This is the mutual exclusivity rule we predicted. It declares that the two categories cannot overlap: if a dramatic novel is great, it cannot be science fiction.\n\n**Logic Check:**\n1. *The Time Machine* is a great dramatic novel. (Stated in premises)\n2. A dramatic novel cannot both be great and belong to science fiction. (Answer E)\n3. Therefore, *The Time Machine* cannot belong to science fiction — the classification is inappropriate. ✓\n\nNotice that this answer is precisely targeted. It doesn't say *no* novel can be both dramatic and science fiction — it says a dramatic novel that is also *great* cannot be. This matches the specific claim in the premise that the book is a *\"great* dramatic novel.\"", badge: 'Correct', badgeColor: 'green' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why the "Generally" Qualifier Doesn\'t Matter' },
    { type: 'paragraph', text: "A common concern with this argument is the word \"generally\" — if science fiction only *generally* lacks compelling characters, doesn't that leave room for exceptions? The answer is: **yes, but it doesn't matter once we have Answer (E).** Here's why:" },
    { type: 'paragraph', text: "Answer (E) does not rely on the \"generally lacks compelling characters\" evidence at all. It works through a completely different logical path:" },
    { type: 'process', title: 'How Answer (E) Bypasses the "Generally" Problem', steps: [
      '**Premise:** The Time Machine is a great dramatic novel. (Given)',
      '**Answer (E):** A dramatic novel cannot both be great and belong to science fiction.',
      '**Conclusion:** The Time Machine\'s science fiction classification is inappropriate. ✓',
    ]},
    { type: 'paragraph', text: "The \"compelling characters\" evidence and the \"generally lacks\" qualifier are both irrelevant once Answer (E) is in place. The conclusion follows from the book's status as a great dramatic novel alone, without needing any argument about character quality." },

    { type: 'hr' },

    { type: 'h3', text: 'Binary vs. Mutually Exclusive: Side-by-Side Comparison' },
    { type: 'paragraph', text: "Compare the structure of this lesson's pattern (Mutually Exclusive) with the previous lesson's pattern (Binary Assumption):" },
    { type: 'table', headers: ['Feature', 'Binary Assumption (Lesson 5)', 'Mutually Exclusive (Lesson 6)'], rows: [
      ['Direction of the leap', 'From "not A" to "must be B"', 'From "is A" to "cannot be B"'],
      ['What the argument assumes', 'A and B are **exhaustive** (no third option)', 'A and B are **exclusive** (no overlap)'],
      ['What the correct answer provides', '"If not A, then B" (closes the gap)', '"If A, then not B" (prevents overlap)'],
      ['Visual metaphor', 'No gap between two territories', 'No overlap between two territories'],
      ['Example', '"Not wrong" → "Must be right"', '"Is a great dramatic novel" → "Cannot be science fiction"'],
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "When an argument concludes that something **cannot be in Category B** because it **is in Category A**, the hidden assumption is that the two categories are **mutually exclusive** — nothing can belong to both simultaneously.\n\nThe correct sufficient assumption will be a rule stating: **\"Nothing can be both A and B\"** or equivalently **\"If A, then not B.\"** This eliminates the possibility of overlap and makes the conclusion logically valid.\n\nDon't be distracted by answers that strengthen the argument's evidence about category characteristics (like \"generally lacks compelling characters\"). The structural gap is about **whether the categories can overlap**, not about *why* they are different. The correct answer addresses the structural relationship directly." },
  ]
};
