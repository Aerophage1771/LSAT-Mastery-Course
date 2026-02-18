import { Lesson } from '../../types';

export const Lesson6_RefutationByParallelReasoning: Lesson = {
  id: "3-6",
  title: "Refutation by Parallel Reasoning",
  content: [
    { type: 'h3', text: "Lesson 6: Refutation by Parallel Reasoning" },
    { type: 'paragraph', text: "Our goal here is to identify the **argumentative strategy** used to support the conclusion. This method is the aggressive cousin of the Argument by Analogy. While an analogy is used to *build* an argument, this method is used to *destroy* one. We call this **Refutation by Parallel Reasoning** (also known as the \"Absurd Parallel\")." },
    
    { 
      type: 'process', 
      title: "Plan of Attack",
      steps: [
        "Break down the argument into its parts",
        "Summarize the original argument",
        "Abstract that into a general method",
        "Look for that specific answer choice",
        "Confirm by selecting or removing answers based on our Fact Test"
      ] 
    },

    { type: 'h4', text: "Question ID: PT-107-S-3-Q-3" },
    { type: 'h4', text: "Stimulus" },
    { type: 'blockquote', text: "**Land developer:** By attempting to preserve endangered species that otherwise would become extinct during our lifetime, we are wasting money on species that will disappear over time regardless of our efforts. Paleontologists have established that extinction is the normal fate of species on the geological time scale of millions of years.\n\n**Environmentalist:** To claim that we should let species disappear because all species eventually die out makes about as much sense as arguing that we should not spend money to find a cure for cancer because all humans are inevitably mortal." },
    
    { type: 'h4', text: "Question" },
    { type: 'paragraph', text: "The method the environmentalist uses to object to the land developer’s argument is to" },
    
    { type: 'h4', text: "Answer Choices" },
    { 
      type: 'options', 
      items: [
        "(A) clarify a dilemma that is embedded in the land developer’s argument",
        "(B) attack the character of the land developer rather than the position the land developer is taking",
        "(C) show that more evidence is needed to substantiate the land developer’s conclusion",
        "(D) show that the land developer’s line of reasoning would lead to an unacceptable conclusion if applied to a different situation",
        "(E) argue that there are problems that money, however judiciously spent, cannot solve"
      ] 
    },

    { type: 'hr' },
    { type: 'h3', text: "Step 1: Break Down the Argument" },
    { type: 'paragraph', text: "Let's engage with this conversation sentence by sentence to see how the logic is being attacked." },
    
    { 
      type: 'breakdown', 
      labels: { title: 'Speaker & Statement', text: 'Analysis' },
      items: [
        {
          title: "Developer: \"...wasting money on species that will disappear... regardless of our efforts.\"",
          text: "Claims conservation is a waste because the outcome (extinction) is inevitable on a long enough timeline.",
          badge: "Opponent Argument",
          badgeColor: "red"
        },
        {
          title: "Developer: \"Paleontologists have established that extinction is the normal fate...\"",
          text: "Supporting evidence using a geological timescale to justify a current short-term decision.",
          badge: "Opponent Logic",
          badgeColor: "red"
        },
        {
          title: "Environmentalist: \"...makes about as much sense as arguing... [no cancer cure] because all humans are inevitably mortal.\"",
          text: "Applies the developer's exact logic (\"don't delay the inevitable\") to a different topic (cancer) to show how ridiculous the result is.",
          badge: "Absurd Parallel",
          badgeColor: "indigo"
        }
      ] 
    },

    { type: 'h3', text: "Step 2: Summarize the Logic (Concrete)" },
    { type: 'paragraph', text: "The developer says we shouldn't spend money to save species because they will all go extinct eventually anyway. The environmentalist responds by pointing out that if we used that same logic for people, we would stop trying to cure cancer because all people die eventually." },

    { type: 'h3', text: "Step 3: Abstract the Logic (The Method)" },
    { type: 'paragraph', text: "The author identifies the underlying **logic** of an opponent's argument. She then applies that same logic to a **different situation** to show that it leads to a **ridiculous or unacceptable conclusion**. This demonstrates that the original reasoning must be flawed." },
    { type: 'callout', title: "Method: Refutation by Parallel Reasoning", variant: "summary", text: "Undermining an opponent's position by showing that their logic, if applied to a different case, leads to an absurd or unacceptable result." },

    { type: 'h3', text: "Step 4: Apply the Fact Test" },
    { 
      type: 'breakdown', 
      labels: { title: 'Option Analysis', text: 'Validation' },
      items: [
        {
          title: "(A) clarify a dilemma that is embedded in the argument",
          text: "There is no dilemma (choice between two bad options) presented. She is **attacking logic**, not clarifying a hidden choice.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(B) attack the character of the land developer",
          text: "She never calls him greedy or evil. She focuses entirely on the **structural failure** of his reasoning.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(C) show that more evidence is needed",
          text: "She doesn't ask for more data. She points out that the **form** of the argument is fundamentally broken.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(D) show that the land developer’s line of reasoning would lead to an unacceptable conclusion if applied to a different situation",
          text: "Identifies the logic (\"don't spend on the inevitable\"), applies it to a \"different situation\" (cancer), and reaches an \"unacceptable conclusion\" (stop research). **Perfect match.**",
          badge: "Correct",
          badgeColor: "green"
        },
        {
          title: "(E) argue that there are problems that money... cannot solve",
          text: "She argues about whether we **should** spend money, not whether money would **actually work** if we did.",
          badge: "Incorrect",
          badgeColor: "red"
        }
      ] 
    },

    { type: 'hr' },
    { type: 'h3', text: "Summary" },
    { type: 'paragraph', text: "As we saw, our 4-step plan worked flawlessly! We identified the parts of the stimulus, saw through the specific details of species and cancer, and found the abstract \"Absurd Parallel\" that the environmentalist was using. We were then able to pick apart the wrong answers by identifying specific words that just didn't happen in the text." },
    { type: 'blockquote', text: "**Library of Methods:**\n\n**1. Process of Elimination:** Establishing a list of possibilities and ruling them out one by one until only the correct answer remains.\n\n**2. Alternative Explanation:** Accepting the evidence but proposing a different cause or reason for that evidence.\n\n**3. Argument by Analogy:** Supporting a claim about one situation by comparing it to a different but similar situation.\n\n**4. Refutation by Parallel Reasoning:** Showing that an opponent's logic leads to a ridiculous conclusion when used in a different context." },
    { type: 'paragraph', text: "The only thing you need to work on now is improving your ability to recognize these patterns and becoming familiar with the different ways the LSAT phrases them. To help with that, let’s walk through a few of the other major types of methods you'll be encountering!" }
  ]
};
