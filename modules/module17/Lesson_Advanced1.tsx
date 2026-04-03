import { Lesson } from '../../types';

export const Lesson_Advanced1: Lesson = {
  id: '17-9',
  title: 'Advanced Lesson 1: Internal Contradiction & Abstract Conclusions',
  content: [
    {
      "type": "h2",
      "text": "Advanced Lesson 1: Internal Contradiction & Abstract Conclusions"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Identifying Logical Inconsistency"
    },
    {
      "type": "paragraph",
      "text": "While most Must Be True questions ask you to synthesize facts to produce a new, concrete conclusion, advanced questions sometimes require a more abstract deduction. Instead of concluding *what* is true, you must conclude something about the *nature* of the statements themselves."
    },
    {
      "type": "paragraph",
      "text": "A common pattern is **Logical Inconsistency**. The stimulus will present a series of statements (often attributed to a single person or group) that cannot all be true at the same time. The valid deduction is not that one specific statement is false, but that the overall position is self-contradictory or inconsistent."
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "Worked Example"
    },
    {
      "type": "blockquote",
      "text": "**Stimulus** > > Editorial: The government claims that the country's nuclear power plants are entirely safe... The government also contends that its recent action to limit the nuclear industry's financial liability... is justified by the need to protect the nuclear industry from the threat of bankruptcy. But even the government says that unlimited liability poses such a threat only if injury claims can be sustained... and the government admits that for such claims to be sustained, injury must result from a nuclear accident. > > **Question** > > If all of the statements... correctly describe the government's position, which one of the following must also be true on the basis of those statements? > > *   (A) The government's claim about the safety of the country's nuclear power plants is false. > *   (B) The government's position on nuclear power plants is inconsistent. > *   (C) The government misrepresented its reasons for acting to limit the nuclear industry's liability. > *   (D) Unlimited financial liability in the case of nuclear accidents poses no threat to the financial security of the country's nuclear industry. > *   (E) The only serious threat posed by a nuclear accident would be to the financial security of the nuclear industry."
    },
    {
      "type": "h4",
      "text": "Step 1: Identify the Task and Set the Standard of Proof"
    },
    {
      "type": "paragraph",
      "text": "The stem asks what \"must be true\" based on the description of the \"government's position.\" Our task is to take all the government's claims and admissions as given facts and deduce a necessary consequence."
    },
    {
      "type": "h4",
      "text": "Step 2: Deconstruct the Stimulus into Factual Components"
    },
    {
      "type": "paragraph",
      "text": "Let's isolate the two core pillars of the government's position."
    },
    {
      "type": "paragraph",
      "text": "**Position 1: Absolute Safety.** The government claims plants are \"entirely safe.\" The logical consequence of being \"entirely safe\" is that nuclear accidents are impossible."
    },
    {
      "type": "list",
      "items": [
        "`Fact A: No accidents are possible.`"
      ]
    },
    {
      "type": "paragraph",
      "text": "**Position 2: Justification for Limiting Liability.** The government justifies limiting liability because of a \"threat of bankruptcy.\" Let's trace the logic of this threat, based on the government's own admissions:"
    },
    {
      "type": "list",
      "items": [
        "The threat of bankruptcy exists *only if* injury claims can be sustained. (`Threat → Injury Claims`)",
        "Injury claims can be sustained *only if* there is a nuclear accident. (`Injury Claims → Accident`)",
        "By chaining these together, the government's own logic is: `Threat → Injury Claims → Accident`.",
        "This means for the threat to be real, a nuclear accident must be possible.",
        "`Fact B: Accidents must be possible (for the threat to exist).`"
      ]
    },
    {
      "type": "h4",
      "text": "Step 3: Synthesize and Predict the Deduction"
    },
    {
      "type": "paragraph",
      "text": "Here, the synthesis isn't about creating a new fact, but about comparing the two existing positions."
    },
    {
      "type": "list",
      "items": [
        "Fact A states: **No accidents are possible.**",
        "Fact B states: **Accidents must be possible.**"
      ]
    },
    {
      "type": "paragraph",
      "text": "A position that simultaneously holds that accidents are both impossible and possible is, by definition, logically self-contradictory or inconsistent. The government is saying \"X is impossible\" while also taking action based on the premise that \"X is possible.\""
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** The government's overall position doesn't make sense; it's contradictory."
    },
    {
      "type": "h4",
      "text": "Step 4: Evaluate the Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "**(A) The government's claim about the safety of the country's nuclear power plants is false.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a very tempting trap. We've proven the government's *position* is inconsistent, but we haven't proven *which part* is false. It's logically possible that the plants are indeed safe, and it's the government's justification for limiting liability that is based on a false premise. We only know the two claims can't both be true; we don't know for sure which one is false."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Too strong; makes a factual claim instead of a logical one.)"
    },
    {
      "type": "paragraph",
      "text": "**(B) The government's position on nuclear power plants is inconsistent.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a perfect abstract description of our prephrase. It doesn't take a side on whether plants are safe or not; it simply points out that the government's collection of statements cannot logically coexist. This is the one thing we have proven with 100% certainty."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(C) The government misrepresented its reasons for acting to limit the nuclear industry's liability.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This infers motive or intent (\"misrepresented\"). The inconsistency could be due to an error, incompetence, or different branches of government holding different views. We cannot prove deliberate misrepresentation."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Out of scope inference about motive.)"
    },
    {
      "type": "paragraph",
      "text": "**(D) Unlimited financial liability in the case of nuclear accidents poses no threat to the financial security of the country's nuclear industry.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This contradicts the premise. The argument's entire structure relies on accepting the government's admission that the threat *is* real in order to expose the contradiction. We cannot conclude that one of the premises is false."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(E) The only serious threat posed by a nuclear accident would be to the financial security of the nuclear industry.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a classic \"too strong\" answer. The stimulus discusses the financial threat, but never claims it's the \"only\" one. Common sense suggests other threats (e.g., to public health) exist, and the stimulus does nothing to rule them out."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "Key Takeaways"
    },
    {
      "type": "list",
      "items": [
        "**Look for Contradictions:** When a stimulus presents multiple claims from a single source, be alert for potential contradictions. If one statement implies X is true and another implies X is false, you have found an inconsistency.",
        "**Abstract vs. Concrete Conclusions:** Difficult questions often have correct answers that describe the *logical state* of the argument (e.g., \"it is inconsistent,\" \"it contains a flaw\") rather than stating a concrete fact about the topic.",
        "**Distinguish \"Inconsistent\" from \"False\":** Proving a set of beliefs is inconsistent is not the same as proving a specific belief within that set is false. The correct answer will be the more cautious, abstract claim about the inconsistency itself."
      ]
    }
  ],
};
