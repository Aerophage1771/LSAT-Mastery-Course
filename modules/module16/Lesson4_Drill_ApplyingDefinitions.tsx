import { Lesson } from '../../types';

export const Lesson4_Drill_ApplyingDefinitions: Lesson = {
  id: "16-4",
  title: "Drill: Applying Strict Definitions (PT-101-S-3-Q-8)",
  content: [
    { type: 'h2', text: 'Applying Definitions' },
    { type: 'paragraph', text: 'A common pattern in Most Strongly Supported questions involves applying a set of strict rules or definitions to a specific scenario. The stimulus provides a framework\u2014a contractual clause, a scientific classification, a legal standard\u2014and then describes a concrete set of facts. Your job is to determine what necessarily follows when the definition is applied to those facts. The inference is purely mechanical: match the facts against the rule and read off the result.' },

    { type: 'paragraph', text: 'These questions reward legalistic precision. Every qualifying word matters: "only," "defined as," "except," and "provided that" each create sharp boundaries. The correct answer identifies something that falls clearly inside or outside those boundaries. Wrong answers blur the lines by introducing considerations the definition never mentions.' },

    { type: 'h3', text: 'The Two-Layer Structure' },
    { type: 'paragraph', text: 'Definition-application stimuli always contain two layers:' },
    { type: 'list', ordered: true, items: [
      '**The Rule Layer:** A set of definitions, conditions, or classifications. These establish what counts as X and what does not.',
      '**The Fact Layer:** A specific scenario, case, or example. These provide the raw material to which you apply the rules.'
    ]},
    { type: 'paragraph', text: 'The inference connects the two layers. You take a fact from the Fact Layer, check it against the Rule Layer, and determine whether it satisfies or fails to satisfy the stated conditions. The most common correct answer identifies something that is definitively excluded by the rules\u2014something that clearly does not meet the stated definition.' },

    { type: 'callout', variant: 'tip', title: 'Strategy: Work the Boundaries', text: 'When you encounter a definition-application stimulus, immediately identify the restrictive words ("only," "defined as," "must," "except"). These words create hard boundaries. Then check each fact against those boundaries. The correct inference is usually about what falls outside the boundary\u2014what the definition excludes\u2014rather than what it includes.' },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Applying Strict Definitions (PT-101-S-3-Q-8)' },
    { type: 'paragraph', text: 'This drill demonstrates the definition-application pattern in a contract-law context. The stimulus provides nested rules and an architectural fact that, when combined, produce a clear exclusion.' },
    { type: 'paragraph', text: '**Instructions:** Read the stimulus and commit to an answer before scrolling down to the analysis.' },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: '16-4-drill',
      questionType: 'Most Strongly Supported',
      difficulty: 'medium',
      stimulus: 'Jones is selling a house to Smith. The contract between the two specifies that for up to a year after ownership is transferred, Jones will be responsible for repairing any "major structural defects," defined as defects in the roof or roof-supporting components of the house, that might be found. Jones is not responsible for any other repairs. The house has a truss roof, which means that the only walls that support the roof are the exterior walls.',
      question: 'It can be properly concluded from the information above that',
      options: [
        '(A) Jones did not know of any defects in the roof or roof-supporting components of the house at the time the contract was written.',
        '(B) Although other components of the house may contain defects, the roof and roof-supporting components of the house are currently free from such defects.',
        '(C) The contract does not oblige Jones to repair any defects in the house\'s nonexterior walls after ownership of the house has been transferred. (Correct)',
        '(D) Smith will be obliged to repair all structural defects in the house within a year after ownership is transferred, except those for which Jones is responsible.',
        '(E) In the past Jones has had to make repairs to some of the house\'s exterior walls.',
      ],
    },

    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Identify the Two Layers' },
    { type: 'paragraph', text: 'Separate the stimulus into its Rule Layer and Fact Layer:' },

    { type: 'breakdown', labels: { title: 'Layer', text: 'Content' }, items: [
      { title: 'Rule 1: Liability Scope', text: 'Jones is responsible only for "major structural defects." He is not responsible for any other repairs.', badge: 'Rule Layer', badgeColor: 'blue' },
      { title: 'Rule 2: Definition', text: 'A "major structural defect" is defined as a defect in the roof or roof-supporting components.', badge: 'Rule Layer', badgeColor: 'blue' },
      { title: 'Fact 1: Roof Type', text: 'The house has a truss roof.', badge: 'Fact Layer', badgeColor: 'indigo' },
      { title: 'Fact 2: Architectural Implication', text: 'Because of the truss roof, the only walls that support the roof are the exterior walls.', badge: 'Fact Layer', badgeColor: 'indigo' },
    ]},

    { type: 'h4', text: 'Step 2: Apply the Definition' },
    { type: 'paragraph', text: 'Now connect the layers. The definition says Jones is liable for defects in "roof-supporting components." The architectural fact tells us that only exterior walls are roof-supporting. Therefore, nonexterior (interior) walls are not roof-supporting components and do not fall under the definition of "major structural defects." Since Jones is responsible only for major structural defects, he has no obligation to repair interior walls.' },

    { type: 'paragraph', text: 'Notice how the inference works by exclusion: we are not concluding something about what Jones must repair, but about what he does not have to repair. The restrictive word "only" in both the liability rule and the architectural fact creates a clean boundary.' },

    { type: 'h4', text: 'Step 3: Evaluate Each Answer' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) Jones did not know of any defects...', text: 'The contract describes future liability obligations. It tells us nothing about Jones\'s current or past knowledge of defects. Knowledge and legal obligation are separate concepts.', badge: 'State of Mind Trap', badgeColor: 'red' },
      { title: '(B) ...the roof and roof-supporting components are currently free from such defects.', text: 'A contract to repair future defects does not prove the item is currently defect-free. Jones might know about existing defects; the contract simply assigns responsibility for repair.', badge: 'Current Condition Trap', badgeColor: 'red' },
      { title: '(C) The contract does not oblige Jones to repair any defects in the house\'s nonexterior walls...', text: 'This follows directly from the definition chain. Nonexterior walls are not roof-supporting \u2192 defects in them are not "major structural defects" \u2192 Jones is not responsible. This is the mechanical output of applying the rules to the facts.', badge: 'Correct', badgeColor: 'green' },
      { title: '(D) Smith will be obliged to repair all structural defects...', text: 'The stimulus defines Jones\'s obligations. It says nothing about Smith\'s obligations. Just because Jones is not required to make a repair does not mean Smith is legally required to do so.', badge: 'False Obligation Trap', badgeColor: 'red' },
      { title: '(E) In the past Jones has had to make repairs...', text: 'The stimulus provides no historical information about the house. This answer introduces a temporal dimension the stimulus never addresses.', badge: 'Past Event Trap', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Common Traps in Definition-Application Questions' },
    { type: 'table', headers: ['Trap Type', 'What It Does', 'How to Spot It'], rows: [
      ['State of Mind', 'Infers knowledge or intent from a legal rule', 'Look for words like "knew," "intended," or "believed" when the stimulus only states rules'],
      ['Current Condition', 'Assumes current perfection from a future-repair clause', 'A repair obligation says nothing about present condition'],
      ['False Obligation', 'Assigns duties to a party the stimulus does not address', 'Check: does the stimulus actually describe this party\'s obligations?'],
      ['Past Event', 'Introduces historical claims unsupported by the stimulus', 'Look for past-tense claims when the stimulus is entirely forward-looking'],
    ]},

    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'When the LSAT provides a set of strict rules and definitions, the correct inference is often found by determining what is excluded by those rules. Pay close attention to restrictive words like "only," "defined as," and "except." These words create clear boundaries. Apply the facts to those boundaries, and look for the answer that identifies what falls on the outside.' },
  ]
};
