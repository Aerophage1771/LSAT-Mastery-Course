import { Lesson } from '../../types';

export const Lesson_Advanced2: Lesson = {
  id: '19-10',
  title: 'Advanced Lesson 2: The Indirect Resolution (Second-Order Effects)',
  content: [
    {
      type: 'h2',
      text: 'Advanced Lesson 2: The Indirect Resolution (Second-Order Effects)'
    },
    {
      type: 'h3',
      text: 'Concept Focus: The Indirect Resolution'
    },
    {
      type: 'paragraph',
      text: 'In foundational questions, the paradox is often resolved by a direct cause (e.g., \"The weather caused the result\"). In advanced questions, the resolution is often indirect. Instead of pointing to the primary actor or the most obvious incentive, the correct answer identifies a second-order effect — a reaction or side effect — that is powerful enough to override the primary effect.'
    },
    {
      type: 'paragraph',
      text: 'The key to solving these is to look beyond the immediate incentives of the main characters and consider how *others* in the system might react to those incentives.'
    },
    {
      type: 'hr'
    },
    {
      type: 'h3',
      text: 'Worked Example'
    },
    {
      type: 'blockquote',
      text: '**Stimulus** > > Construction contractors working on the cutting edge of technology nearly always work on a "cost-plus" basis only. One kind of cost-plus contract stipulates the contractor\'s profit as a fixed percentage of the contractor\'s costs; the other kind stipulates a fixed amount of profit over and above costs. Under the first kind of contract, higher costs yield higher profits for the contractor, so this is where one might expect final costs in excess of original cost estimates to be more common. Paradoxically, such cost overruns are actually more common if the contract is of the fixed-profit kind. > > **Question** > > Which one of the following, if true, most helps to resolve the apparent paradox in the situation described above?'
    },
    {
      type: 'h4',
      text: 'Step 1: Identify the Conflict'
    },
    {
      type: 'paragraph',
      text: '**Fact 1 (The Incentive):** In \"percentage-profit\" contracts, the contractor makes more money if costs go up. In \"fixed-profit\" contracts, they don\'t.'
    },
    {
      type: 'paragraph',
      text: '**Fact 2 (The Outcome):** Cost overruns are *more* common in fixed-profit contracts, where the contractor has *no* incentive to increase costs.'
    },
    {
      type: 'paragraph',
      text: '**The Paradox:** Why do costs spiral out of control more often when the contractor has no financial reason to let them, compared to when they have a direct financial reason to make them rise?'
    },
    {
      type: 'h4',
      text: 'Step 2: Define the Goal and Prephrase the Resolution'
    },
    {
      type: 'paragraph',
      text: 'We need to find a factor that overrides the contractor\'s financial incentive. Since the contractor\'s incentive points toward overruns in the percentage-profit model, there must be a powerful *external* force preventing them. Conversely, there must be a lack of that force in the fixed-profit model.'
    },
    {
      type: 'paragraph',
      text: '**Prephrase:** Who else is involved? The client. Maybe the client knows about the bad incentives in the percentage-profit contract and watches the contractor closely, preventing overruns. In the fixed-profit contract, maybe the client relaxes, assuming the contractor has no reason to overspend, which inadvertently allows waste to creep in.'
    },
    {
      type: 'h4',
      text: 'Step 3: Evaluate the Answer Choices'
    },
    {
      type: 'paragraph',
      text: 'We\'ll look for an answer that introduces this second-order effect: the client\'s reaction.'
    },
    {
      type: 'h4',
      text: 'Step 4: Systematically Eliminate Traps (See Answer Analysis)'
    },
    {
      type: 'hr'
    },
    {
      type: 'h3',
      text: 'Answer Analysis'
    },
    {
      type: 'paragraph',
      text: '**(A) Clients are much less likely to agree to a fixed-profit type of cost-plus contract when it is understood that under certain conditions the project will be scuttled...**'
    },
    {
      type: 'paragraph',
      text: '**Analysis:** This discusses *when* a client chooses a contract. The paradox is about what happens *during* the contract (cost overruns). The selection process is irrelevant to the execution outcome.'
    },
    {
      type: 'paragraph',
      text: '**Verdict: Incorrect.** (Trap: Out of Scope)'
    },
    {
      type: 'paragraph',
      text: '**(B) On long-term contracts, cost projections take future inflation into account, but since the figures used are provided by the government, they are usually underestimates.**'
    },
    {
      type: 'paragraph',
      text: '**Analysis:** This explains why *all* contracts might have overruns (bad inflation data). It fails to explain the *difference* between the two contract types. Why are overruns *more common* in fixed-profit ones?'
    },
    {
      type: 'paragraph',
      text: '**Verdict: Incorrect.** (Trap: The One-Sider)'
    },
    {
      type: 'paragraph',
      text: '**(C) On any sizable construction project, the contractor bills the client monthly or quarterly, so any tendency for original cost estimates to be exceeded can be detected early.**'
    },
    {
      type: 'paragraph',
      text: '**Analysis:** This mechanism (early detection) applies to *any* project. Like choice (B), it fails to distinguish between the two contract types and explain the disparity.'
    },
    {
      type: 'paragraph',
      text: '**Verdict: Incorrect.** (Trap: The One-Sider)'
    },
    {
      type: 'paragraph',
      text: '**(D) Clients billed under a cost-plus contract are free to review individual billings in order to uncover wasteful expenditures, but they do so only when the contractor\'s profit varies with cost.**'
    },
    {
      type: 'paragraph',
      text: '**Analysis:** This is the correct answer. It identifies the second-order effect: **client oversight**.'
    },
    {
      type: 'paragraph',
      text: '**Percentage-Profit:** The contractor *wants* to raise costs, but the client knows this and vigilantly reviews billings, stopping the waste. Result: Fewer overruns.'
    },
    {
      type: 'paragraph',
      text: '**Fixed-Profit:** The client assumes the contractor has no incentive to waste money, so they don\'t review the billings. Without oversight, inefficiency creeps in unchecked. Result: More overruns.'
    },
    {
      type: 'paragraph',
      text: '**Verdict: Correct.**'
    },
    {
      type: 'paragraph',
      text: '**(E) The practice of submitting deliberately exaggerated cost estimates is most common in the case of fixed-profit contracts...**'
    },
    {
      type: 'paragraph',
      text: '**Analysis:** This is a very sophisticated trap. If estimates are exaggerated (i.e., set very high), it would be *harder* to have a cost overrun, not easier. An overrun happens when final costs exceed the estimate. High estimates provide a buffer against overruns. So this choice actually makes the paradox harder to explain.'
    },
    {
      type: 'paragraph',
      text: '**Verdict: Incorrect.** (Trap: The Subtle Deepener)'
    },
    {
      type: 'hr'
    },
    {
      type: 'h3',
      text: 'Key Takeaways'
    },
    {
      type: 'paragraph',
      text: '**Look for Second-Order Effects:** In complex systems (like economics or contracts), the direct incentive isn\'t the only force at play. Often, the *reaction* to that incentive (e.g., increased scrutiny) is the dominant factor.'
    },
    {
      type: 'paragraph',
      text: '**Identify the \"Check and Balance\":** If an agent has a strong incentive to do something bad (like inflate costs) but doesn\'t do it, look for the external force (the \"check\") that is stopping them.'
    },
    {
      type: 'paragraph',
      text: '**Analyze the \"Deepener\" Carefully:** Choice (E) sounded relevant because it talked about \"exaggerated estimates,\" but you have to trace the logic: High Estimate → Harder to Exceed → Fewer Overruns. This contradicted the facts. Always play the logic out to the end.'
    }
  ],
};
