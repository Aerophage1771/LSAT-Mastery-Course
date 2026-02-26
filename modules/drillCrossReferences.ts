export interface DrillReference {
  moduleId: number;
  lessonId: string;
  moduleTitle: string;
  lessonTitle: string;
}

// Maps PT identifiers to their drill lesson locations
// Auto-generated from scanning modules 1-22 for PT IDs
export const drillCrossReferences: Record<string, DrillReference> = {
  // Module 1: Argument Part
  'PT-111-S-4-Q-2': { moduleId: 1, lessonId: '1-3', moduleTitle: 'Argument Part', lessonTitle: 'Drill: Premise' },
  'PT-107-S-4-Q-15': { moduleId: 1, lessonId: '1-4', moduleTitle: 'Argument Part', lessonTitle: 'Lesson 1: Premises vs. Conclusions' },
  'PT-112-S-4-Q-3': { moduleId: 1, lessonId: '1-4', moduleTitle: 'Argument Part', lessonTitle: 'Drill: Main Conclusion' },
  'PT-112-S-4-Q-13': { moduleId: 1, lessonId: '1-5', moduleTitle: 'Argument Part', lessonTitle: 'Lesson 2: The Intermediate Conclusion' },
  'PT-114-S-4-Q-18': { moduleId: 1, lessonId: '1-5', moduleTitle: 'Argument Part', lessonTitle: 'Drill: Sub-Conclusion' },
  'PT-129-S-2-Q-13': { moduleId: 1, lessonId: '1-6', moduleTitle: 'Argument Part', lessonTitle: 'Lesson 3: The Opposing Viewpoint' },
  'PT-117-S-2-Q-24': { moduleId: 1, lessonId: '1-7', moduleTitle: 'Argument Part', lessonTitle: 'Drill: Abstract Roles' },
  'PT-108-S-2-Q-22': { moduleId: 1, lessonId: '1-8', moduleTitle: 'Argument Part', lessonTitle: 'Drill: Independent Roles' },
  'PT-131-S-2-Q-18': { moduleId: 1, lessonId: '1-8', moduleTitle: 'Argument Part', lessonTitle: 'Advanced Lesson: Concessions' },
  'PT-131-S-2-Q-7': { moduleId: 1, lessonId: '1-9', moduleTitle: 'Argument Part', lessonTitle: 'Advanced Lesson: The Phenomenon' },
  'PT-125-S-4-Q-15': { moduleId: 1, lessonId: '1-10', moduleTitle: 'Argument Part', lessonTitle: 'Advanced Lesson: Counterfactual Rebuttal' },

  // Module 3: Method of Reasoning
  'PT-135-S-2-Q-5': { moduleId: 3, lessonId: '3-3', moduleTitle: 'Method of Reasoning', lessonTitle: 'The Process of Elimination' },
  'PT-119-S-4-Q-4': { moduleId: 3, lessonId: '3-4', moduleTitle: 'Method of Reasoning', lessonTitle: 'Alternative Explanations' },
  'PT-109-S-1-Q-2': { moduleId: 3, lessonId: '3-5', moduleTitle: 'Method of Reasoning', lessonTitle: 'Argument by Analogy' },
  'PT-107-S-3-Q-3': { moduleId: 3, lessonId: '3-6', moduleTitle: 'Method of Reasoning', lessonTitle: 'Refutation by Parallel Reasoning' },
  'PT-104-S-4-Q-21': { moduleId: 3, lessonId: '3-8', moduleTitle: 'Method of Reasoning', lessonTitle: 'Restricting the Scope' },
  'PT-112-S-1-Q-7': { moduleId: 3, lessonId: '3-9', moduleTitle: 'Method of Reasoning', lessonTitle: 'Alternative Explanation (The Third Factor)' },

  // Module 4: Parallel Reasoning
  'PT-101-S-2-Q-13': { moduleId: 4, lessonId: '4-3', moduleTitle: 'Parallel Reasoning', lessonTitle: 'Drill: Process of Elimination' },
  'PT-101-S-3-Q-21': { moduleId: 4, lessonId: '4-4', moduleTitle: 'Parallel Reasoning', lessonTitle: 'Drill: Proportional Reasoning' },
  'PT-103-S-1-Q-24': { moduleId: 4, lessonId: '4-5', moduleTitle: 'Parallel Reasoning', lessonTitle: 'Drill: Causal Reasoning' },
  'PT-104-S-1-Q-26': { moduleId: 4, lessonId: '4-7', moduleTitle: 'Parallel Reasoning', lessonTitle: 'Drill: Abstract Patterns' },
  'PT-111-S-4-Q-23': { moduleId: 4, lessonId: '4-8', moduleTitle: 'Parallel Reasoning', lessonTitle: 'Drill: Comparative Reasoning' },

  // Module 5: Flaw
  'PT-102-S-3-Q-14': { moduleId: 5, lessonId: '5-3', moduleTitle: 'Flaw', lessonTitle: 'Drill: Source Attack' },
  'PT-104-S-4-Q-10': { moduleId: 5, lessonId: '5-4', moduleTitle: 'Flaw', lessonTitle: 'Drill: Sufficient vs Necessary' },
  'PT-104-S-1-Q-23': { moduleId: 5, lessonId: '5-6', moduleTitle: 'Flaw', lessonTitle: 'Advanced: The Base Rate Fallacy' },
  'PT-103-S-2-Q-21': { moduleId: 5, lessonId: '5-7', moduleTitle: 'Flaw', lessonTitle: 'Advanced: Unreasonable Standard of Proof' },
  'PT-102-S-4-Q-23': { moduleId: 5, lessonId: '5-8', moduleTitle: 'Flaw', lessonTitle: 'Advanced: The \'Only\' Trap' },
  'PT-113-S-4-Q-12': { moduleId: 5, lessonId: '5-9', moduleTitle: 'Flaw', lessonTitle: 'Advanced: Single Explanation Fallacy' },
  'PT-105-S-2-Q-22': { moduleId: 5, lessonId: '5-10', moduleTitle: 'Flaw', lessonTitle: 'Advanced: Internal Contradiction' },

  // Module 6: Parallel Flaw
  'PT-113-S-3-Q-21': { moduleId: 6, lessonId: '6-7', moduleTitle: 'Parallel Flaw', lessonTitle: 'Drill: The Double Flaw' },
  'PT-113-S-2-Q-21': { moduleId: 6, lessonId: '6-8', moduleTitle: 'Parallel Flaw', lessonTitle: 'Drill: The Net Effect Flaw' },
  'PT-103-S-1-Q-21': { moduleId: 6, lessonId: '6-9', moduleTitle: 'Parallel Flaw', lessonTitle: 'Drill: The Overlap Flaw' },

  // Module 7: Evaluate the Argument
  'PT-101-S-2-Q-16': { moduleId: 7, lessonId: '7-4', moduleTitle: 'Evaluate the Argument', lessonTitle: 'Drill: Unrepresentative Samples' },
  'PT-112-S-1-Q-24': { moduleId: 7, lessonId: '7-5', moduleTitle: 'Evaluate the Argument', lessonTitle: 'Drill: Rank vs. Raw Number' },

  // Module 8: Weaken
  'PT-101-S-2-Q-1': { moduleId: 8, lessonId: '8-3', moduleTitle: 'Weaken', lessonTitle: 'Drill: The Scope Shift Flaw' },
  'PT-103-S-2-Q-5': { moduleId: 8, lessonId: '8-4', moduleTitle: 'Weaken', lessonTitle: 'Drill: The Baseline Flaw' },
  'PT-113-S-2-Q-14': { moduleId: 8, lessonId: '8-5', moduleTitle: 'Weaken', lessonTitle: 'Drill: Attacking the Data' },
  'PT-126-S-1-Q-22': { moduleId: 8, lessonId: '8-7', moduleTitle: 'Weaken', lessonTitle: 'Advanced Causation - The Reverse Causal Weakener' },
  'PT-103-S-3-Q-24': { moduleId: 8, lessonId: '8-8', moduleTitle: 'Weaken', lessonTitle: 'Attacking Averages - The Composition Flaw' },
  'PT-111-S-4-Q-20': { moduleId: 8, lessonId: '8-9', moduleTitle: 'Weaken', lessonTitle: 'Attacking by Process of Elimination' },
  'PT-101-S-2-Q-19': { moduleId: 8, lessonId: '8-10', moduleTitle: 'Weaken', lessonTitle: 'Mastering Weaken EXCEPT Questions' },

  // Module 9: Strengthen
  'PT-128-S-3-Q-1': { moduleId: 9, lessonId: '9-3', moduleTitle: 'Strengthen', lessonTitle: 'Drill: Strengthening Causal Claims' },
  'PT-111-S-3-Q-4': { moduleId: 9, lessonId: '9-4', moduleTitle: 'Strengthen', lessonTitle: 'Drill: Strengthening Arguments with Numbers' },
  'PT-106-S-3-Q-9': { moduleId: 9, lessonId: '9-5', moduleTitle: 'Strengthen', lessonTitle: 'Drill: Strengthening Comparative Claims' },
  'PT-127-S-2-Q-14': { moduleId: 9, lessonId: '9-7', moduleTitle: 'Strengthen', lessonTitle: 'Drill: The Defender' },
  'PT-101-S-3-Q-23': { moduleId: 9, lessonId: '9-8', moduleTitle: 'Strengthen', lessonTitle: 'Drill: Bridging Conceptual Gaps' },
  'PT-125-S-4-Q-20': { moduleId: 9, lessonId: '9-9', moduleTitle: 'Strengthen', lessonTitle: 'Drill: Strengthening Qualified Claims' },
  'PT-112-S-4-Q-20': { moduleId: 9, lessonId: '9-10', moduleTitle: 'Strengthen', lessonTitle: 'Drill: Strengthening by Analogy' },
  'PT-120-S-1-Q-26': { moduleId: 9, lessonId: '9-11', moduleTitle: 'Strengthen', lessonTitle: 'Drill: The Dose-Response Pattern' },
  'PT-113-S-2-Q-20': { moduleId: 9, lessonId: '9-12', moduleTitle: 'Strengthen', lessonTitle: 'Drill: Strengthen EXCEPT' },

  // Module 10: Sufficient Assumption
  'PT-120-S-1-Q-12': { moduleId: 10, lessonId: '10-3', moduleTitle: 'Sufficient Assumption', lessonTitle: 'Drill: The Concept Link' },
  'PT-122-S-2-Q-25': { moduleId: 10, lessonId: '10-4', moduleTitle: 'Sufficient Assumption', lessonTitle: 'Drill: The Exclusivity Rule' },
  'PT-123-S-2-Q-23': { moduleId: 10, lessonId: '10-5', moduleTitle: 'Sufficient Assumption', lessonTitle: 'Drill: The Binary Assumption' },
  'PT-128-S-2-Q-15': { moduleId: 10, lessonId: '10-6', moduleTitle: 'Sufficient Assumption', lessonTitle: 'Drill: Mutually Exclusive Categories' },
  'PT-134-S-3-Q-21': { moduleId: 10, lessonId: '10-7', moduleTitle: 'Sufficient Assumption', lessonTitle: 'Drill: The General Principle' },
  'PT-135-S-2-Q-15': { moduleId: 10, lessonId: '10-8', moduleTitle: 'Sufficient Assumption', lessonTitle: 'Drill: The Chain of Logic' },
  'PT-120-S-4-Q-15': { moduleId: 10, lessonId: '10-9', moduleTitle: 'Sufficient Assumption', lessonTitle: 'Drill: The Chain of Logic Part 2' },
  'PT-119-S-4-Q-19': { moduleId: 10, lessonId: '10-10', moduleTitle: 'Sufficient Assumption', lessonTitle: 'Drill: The Either/Or Bridge' },
  'PT-140-S-3-Q-14': { moduleId: 10, lessonId: '10-11', moduleTitle: 'Sufficient Assumption', lessonTitle: 'Drill: The Normative Bridge' },

  // Module 11: Necessary Assumption
  'PT-103-S-1-Q-4': { moduleId: 11, lessonId: '11-3', moduleTitle: 'Necessary Assumption', lessonTitle: 'Drill: The \'Key Ingredient\' Assumption' },
  'PT-105-S-1-Q-18': { moduleId: 11, lessonId: '11-4', moduleTitle: 'Necessary Assumption', lessonTitle: 'Drill: The \'Definitional Gap\' Assumption' },
  'PT-116-S-3-Q-1': { moduleId: 11, lessonId: '11-5', moduleTitle: 'Necessary Assumption', lessonTitle: 'Drill: The \'Only Way\' Assumption' },
  'PT-118-S-1-Q-3': { moduleId: 11, lessonId: '11-6', moduleTitle: 'Necessary Assumption', lessonTitle: 'Drill: The \'Closed Universe\' Assumption' },
  'PT-121-S-4-Q-10': { moduleId: 11, lessonId: '11-7', moduleTitle: 'Necessary Assumption', lessonTitle: 'Drill: The \'Source Fallacy\' Assumption' },
  'PT-126-S-3-Q-8': { moduleId: 11, lessonId: '11-8', moduleTitle: 'Necessary Assumption', lessonTitle: 'Drill: The \'False Dichotomy\' Assumption' },
  'PT-138-S-3-Q-23': { moduleId: 11, lessonId: '11-9', moduleTitle: 'Necessary Assumption', lessonTitle: 'Drill: The \'Complete Knowledge\' Assumption' },
  'PT-117-S-4-Q-16': { moduleId: 11, lessonId: '11-10', moduleTitle: 'Necessary Assumption', lessonTitle: 'Drill: Advanced \'Forced Choice\'' },
  'PT-127-S-1-Q-19': { moduleId: 11, lessonId: '11-11', moduleTitle: 'Necessary Assumption', lessonTitle: 'Drill: \'Blocking a Third Party\'' },
  'PT-112-S-3-Q-18': { moduleId: 11, lessonId: '11-12', moduleTitle: 'Necessary Assumption', lessonTitle: 'Drill: The \'Behavioral Link\' Assumption' },
  'PT-114-S-4-Q-20': { moduleId: 11, lessonId: '11-13', moduleTitle: 'Necessary Assumption', lessonTitle: 'Drill: \'Definitional Standard\'' },

  // Module 12: Principle-Strengthen
  'PT-117-S-4-Q-2': { moduleId: 12, lessonId: '12-3', moduleTitle: 'Principle-Strengthen', lessonTitle: 'Drill: Strengthening with a Normative Bridge' },
  'PT-112-S-1-Q-15': { moduleId: 12, lessonId: '12-4', moduleTitle: 'Principle-Strengthen', lessonTitle: 'Drill: Strengthening with an Efficiency Principle' },
  'PT-114-S-2-Q-4': { moduleId: 12, lessonId: '12-5', moduleTitle: 'Principle-Strengthen', lessonTitle: 'Drill: Strengthening with a Principle of Accountability' },
  'PT-113-S-2-Q-22': { moduleId: 12, lessonId: '12-6', moduleTitle: 'Principle-Strengthen', lessonTitle: 'Drill: Strengthening a \'Lesser of Two Evils\' Argument' },

  // Module 13: Principle - Apply
  'PT-104-S-4-Q-1': { moduleId: 13, lessonId: '13-3', moduleTitle: 'Principle - Apply', lessonTitle: 'Drill: Direct Application' },
  'PT-106-S-1-Q-10': { moduleId: 13, lessonId: '13-4', moduleTitle: 'Principle - Apply', lessonTitle: 'Drill: Contrapositive Application' },
  'PT-123-S-2-Q-7': { moduleId: 13, lessonId: '13-5', moduleTitle: 'Principle - Apply', lessonTitle: 'Drill: Definitional Checklist' },
  'PT-119-S-2-Q-21': { moduleId: 13, lessonId: '13-6', moduleTitle: 'Principle - Apply', lessonTitle: 'Drill: Advanced Application' },

  // Module 14: Principle - Generalization
  'PT-116-S-3-Q-3': { moduleId: 14, lessonId: '14-3', moduleTitle: 'Principle - Generalization', lessonTitle: 'Drill: Experiment Generalization' },
  'PT-119-S-3-Q-8': { moduleId: 14, lessonId: '14-4', moduleTitle: 'Principle - Generalization', lessonTitle: 'Drill: Contextual Value' },
  'PT-124-S-1-Q-5': { moduleId: 14, lessonId: '14-5', moduleTitle: 'Principle - Generalization', lessonTitle: 'Drill: Unintended Consequences' },
  'PT-109-S-1-Q-18': { moduleId: 14, lessonId: '14-6', moduleTitle: 'Principle - Generalization', lessonTitle: 'Drill: Motivated Blindness' },

  // Module 15: Fill in the Blank
  'PT-102-S-2-Q-3': { moduleId: 15, lessonId: '15-3', moduleTitle: 'Fill in the Blank', lessonTitle: 'Drill: Mechanistic Chain' },
  'PT-123-S-2-Q-3': { moduleId: 15, lessonId: '15-4', moduleTitle: 'Fill in the Blank', lessonTitle: 'Drill: Analogy' },
  'PT-125-S-2-Q-7': { moduleId: 15, lessonId: '15-5', moduleTitle: 'Fill in the Blank', lessonTitle: 'Drill: Problem and Solution' },
  'PT-114-S-1-Q-19': { moduleId: 15, lessonId: '15-6', moduleTitle: 'Fill in the Blank', lessonTitle: 'Drill: Philosophical Rebuttal' },
  'PT-123-S-3-Q-16': { moduleId: 15, lessonId: '15-7', moduleTitle: 'Fill in the Blank', lessonTitle: 'Drill: Conditional Logic and Paradox' },

  // Module 16: Most Strongly Supported
  'PT-101-S-3-Q-8': { moduleId: 16, lessonId: '16-4', moduleTitle: 'Most Strongly Supported', lessonTitle: 'Drill: Applying Strict Definitions' },
  'PT-107-S-3-Q-5': { moduleId: 16, lessonId: '16-5', moduleTitle: 'Most Strongly Supported', lessonTitle: 'Drill: Causal Chaining' },

  // Module 17: Must Be True
  'PT-125-S-4-Q-23': { moduleId: 17, lessonId: '17-3', moduleTitle: 'Must Be True', lessonTitle: 'Drill: Conditional Logic' },
  'PT-101-S-2-Q-11': { moduleId: 17, lessonId: '17-4', moduleTitle: 'Must Be True', lessonTitle: 'Drill: Quantifiers' },
  'PT-119-S-3-Q-11': { moduleId: 17, lessonId: '17-5', moduleTitle: 'Must Be True', lessonTitle: 'Drill: Numerical Reasoning' },
  'PT-103-S-3-Q-22': { moduleId: 17, lessonId: '17-7', moduleTitle: 'Must Be True', lessonTitle: 'Drill: High Cognitive Load' },
  'PT-102-S-2-Q-21': { moduleId: 17, lessonId: '17-8', moduleTitle: 'Must Be True', lessonTitle: 'Drill: Multi-Step Inference' },
  'PT-106-S-2-Q-19': { moduleId: 17, lessonId: '17-9', moduleTitle: 'Must Be True', lessonTitle: 'Drill: Inferences from Disparity' },
  'PT-104-S-1-Q-19': { moduleId: 17, lessonId: '17-10', moduleTitle: 'Must Be True', lessonTitle: 'Drill: Precision in Causality' },

  // Module 18: Must Be False
  'PT-103-S-1-Q-13': { moduleId: 18, lessonId: '18-3', moduleTitle: 'Must Be False', lessonTitle: 'Drill: Conditional Breakers' },
  'PT-113-S-3-Q-8': { moduleId: 18, lessonId: '18-4', moduleTitle: 'Must Be False', lessonTitle: 'Drill: Quantifier Clashes' },
  'PT-102-S-4-Q-15': { moduleId: 18, lessonId: '18-5', moduleTitle: 'Must Be False', lessonTitle: 'Drill: Exclusive Boundaries' },

  // Module 19: Explain / Resolve
  'PT-103-S-1-Q-20': { moduleId: 19, lessonId: '19-4', moduleTitle: 'Explain / Resolve', lessonTitle: 'Drill: Selection Bias' },
  'PT-122-S-4-Q-11': { moduleId: 19, lessonId: '19-5', moduleTitle: 'Explain / Resolve', lessonTitle: 'Drill: Causal Mechanisms' },
  'PT-105-S-1-Q-25': { moduleId: 19, lessonId: '19-7', moduleTitle: 'Explain / Resolve', lessonTitle: 'Drill: The Hidden Distinction' },
  'PT-103-S-1-Q-23': { moduleId: 19, lessonId: '19-8', moduleTitle: 'Explain / Resolve', lessonTitle: 'Drill: The Counterintuitive Causal Web' },
  'PT-124-S-3-Q-22': { moduleId: 19, lessonId: '19-9', moduleTitle: 'Explain / Resolve', lessonTitle: 'Drill: Flawed Logic in "EXCEPT" Questions' },

  // Module 20: Point at Issue
  'PT-122-S-2-Q-1': { moduleId: 20, lessonId: '20-3', moduleTitle: 'Point at Issue', lessonTitle: 'Practice Drill: Disagreement (Definitional Rule)' },
  'PT-104-S-1-Q-1': { moduleId: 20, lessonId: '20-4', moduleTitle: 'Point at Issue', lessonTitle: 'Practice Drill: Disagreement (Explanatory Cause)' },
  'PT-127-S-2-Q-2': { moduleId: 20, lessonId: '20-5', moduleTitle: 'Point at Issue', lessonTitle: 'Practice Drill: Point of Agreement (Shared Assumption)' },
  'PT-103-S-2-Q-24': { moduleId: 20, lessonId: '20-7', moduleTitle: 'Point at Issue', lessonTitle: 'Practice Drill: Disagreement (Clash of Criteria)' },
  'PT-108-S-2-Q-11': { moduleId: 20, lessonId: '20-8', moduleTitle: 'Point at Issue', lessonTitle: 'Practice Drill: Disagreement (Definitional Clash)' },
  'PT-116-S-2-Q-19': { moduleId: 20, lessonId: '20-9', moduleTitle: 'Point at Issue', lessonTitle: 'Practice Drill: Point of Agreement (Shared Diagnosis)' },

  // Module 21: Conditional Reasoning (file: Module55)
  'PT-109-S-4-Q-5': { moduleId: 21, lessonId: '55-1', moduleTitle: 'Conditional Reasoning', lessonTitle: 'The Foundations of the Material Conditional' },
  'PT-118-S-3-Q-4': { moduleId: 21, lessonId: '55-1', moduleTitle: 'Conditional Reasoning', lessonTitle: 'The Foundations of the Material Conditional' },
  'PT-101-S-2-Q-21': { moduleId: 21, lessonId: '55-2', moduleTitle: 'Conditional Reasoning', lessonTitle: 'Using the Contrapositive to Unlock New Inferences' },
  'PT-101-S-3-Q-10': { moduleId: 21, lessonId: '55-2', moduleTitle: 'Conditional Reasoning', lessonTitle: 'Using the Contrapositive to Unlock New Inferences' },
  'PT-106-S-3-Q-21': { moduleId: 21, lessonId: '55-3', moduleTitle: 'Conditional Reasoning', lessonTitle: 'Two Classic Conditional Reasoning Errors' },
  'PT-120-S-4-Q-17': { moduleId: 21, lessonId: '55-3', moduleTitle: 'Conditional Reasoning', lessonTitle: 'Two Classic Conditional Reasoning Errors' },
};
