import type { ModuleData } from '../types';

export interface ModuleMetadata {
  id: number;
  title: string;
  category: string;
  description: string;
  unit: string;
  lessonCount: number;
}

type ModuleLoader = () => Promise<{ default: ModuleData } | { [key: string]: ModuleData }>;

interface RegistryEntry {
  meta: ModuleMetadata;
  load: ModuleLoader;
}

function entry(meta: ModuleMetadata, load: ModuleLoader): RegistryEntry {
  return { meta, load };
}

async function resolveModule(loaded: Awaited<ReturnType<ModuleLoader>>): Promise<ModuleData> {
  if ('default' in loaded) return loaded.default;
  const key = Object.keys(loaded).find((k) => k.startsWith('Module'));
  if (key) return (loaded as Record<string, ModuleData>)[key];
  throw new Error('Could not resolve module export');
}

export async function loadModule(id: number): Promise<ModuleData> {
  const found = moduleRegistry.find((e) => e.meta.id === id);
  if (!found) throw new Error(`Module ${id} not found`);
  const loaded = await found.load();
  return resolveModule(loaded);
}

// ──────────────────────────────────────────────
// LOGICAL REASONING (Modules 1-22)
// ──────────────────────────────────────────────

// Unit 1: Identification (Modules 1-2)
// Unit 2: Analysis (Modules 3-6)
// Unit 3: Evaluation (Modules 7-11)
// Unit 4: Principle (Modules 12-14)
// Unit 5: Inference (Modules 15-18)
// Unit 6: Resolution (Module 19)
// Unit 7: Conflict (Module 20)
// Unit 8: Conditional Reasoning (Module 21)
// Unit 9: LSAT Math (Module 22)

// ──────────────────────────────────────────────
// READING COMPREHENSION (Modules 23-49)
// ──────────────────────────────────────────────

// Unit 10: Summarizing the Passage (Modules 23-25)
// Unit 11: Analyzing the Components (Modules 26-28)
// Unit 12: Identifying the Perspectives (Modules 29-31)
// Unit 13: Extending the Reasoning (Modules 32-34)
// Unit 14: Sample Passages (Modules 35-44)
// Unit 15: Reference (Modules 45-49)

// ──────────────────────────────────────────────
// ADVANCED PASSAGES (Modules 50-56)
// ──────────────────────────────────────────────

// Unit 16: Advanced Passages (Modules 50-56)

export const moduleRegistry: RegistryEntry[] = [
  // ── LOGICAL REASONING ──────────────────────

  // Unit 1: Identification
  entry({ id: 1, title: 'Argument Part', category: 'LR', description: 'Define the specific function a particular sentence serves within the argument (e.g., main conclusion, subsidiary conclusion, premise, counter-premise).', unit: 'Unit 1: Identification', lessonCount: 12 }, () => import('./Module1')),
  entry({ id: 2, title: 'Main Conclusion', category: 'LR', description: 'Identify the single, overarching claim that the entire argument is constructed to prove. In other words, what is the one ultimate point the author wants the reader to accept?', unit: 'Unit 1: Identification', lessonCount: 11 }, () => import('./Module2')),

  // Unit 2: Analysis
  entry({ id: 3, title: 'Method of Reasoning', category: 'LR', description: 'Describe the argumentative strategy the author uses to support the conclusion. In other words, what is the logical structure of the argument?', unit: 'Unit 2: Analysis', lessonCount: 12 }, () => import('./Module3')),
  entry({ id: 4, title: 'Parallel Reasoning', category: 'LR', description: "Identify an argument's pattern. Then find an answer choice that follows the exact same logical structure.", unit: 'Unit 2: Analysis', lessonCount: 12 }, () => import('./Module4')),
  entry({ id: 5, title: 'Flaw', category: 'LR', description: "Identify the specific reasoning error that makes the argument's conclusion unproven by its evidence.", unit: 'Unit 2: Analysis', lessonCount: 12 }, () => import('./Module5')),
  entry({ id: 6, title: 'Parallel Flaw', category: 'LR', description: "Identify the argument's specific reasoning error, then find an answer choice that commits the exact same type of error.", unit: 'Unit 2: Analysis', lessonCount: 12 }, () => import('./Module6')),

  // Unit 3: Evaluation
  entry({ id: 7, title: 'Evaluate the Argument', category: 'LR', description: 'Identify the piece of information that would be most useful in determining whether the argument is strong or weak.', unit: 'Unit 3: Evaluation', lessonCount: 12 }, () => import('./Module7')),
  entry({ id: 8, title: 'Weaken', category: 'LR', description: "Find the answer choice that, if true, most undermines the argument's conclusion by attacking the gap between its premises and conclusion.", unit: 'Unit 3: Evaluation', lessonCount: 12 }, () => import('./Module8')),
  entry({ id: 9, title: 'Strengthen', category: 'LR', description: "Find the answer choice that, if true, most supports the argument's conclusion by bridging the gap between its premises and conclusion.", unit: 'Unit 3: Evaluation', lessonCount: 12 }, () => import('./Module9')),
  entry({ id: 10, title: 'Sufficient Assumption', category: 'LR', description: "Find the answer choice that, if assumed to be true, would make the argument's conclusion follow logically and with certainty.", unit: 'Unit 3: Evaluation', lessonCount: 12 }, () => import('./Module10')),
  entry({ id: 11, title: 'Necessary Assumption', category: 'LR', description: 'Find the answer choice that the argument requires to be true. If this assumption is false, the argument falls apart.', unit: 'Unit 3: Evaluation', lessonCount: 12 }, () => import('./Module11')),

  // Unit 4: Principle
  entry({ id: 12, title: 'Principle-Strengthen', category: 'LR', description: 'Find a broad, abstract rule that, if true, would justify or support the specific argument presented in the stimulus.', unit: 'Unit 4: Principle', lessonCount: 12 }, () => import('./Module12')),
  entry({ id: 13, title: 'Principle - Apply', category: 'LR', description: 'Apply a given abstract rule or principle to a specific scenario to determine which answer choice conforms to the principle.', unit: 'Unit 4: Principle', lessonCount: 12 }, () => import('./Module13')),
  entry({ id: 14, title: 'Principle - Generalization', category: 'LR', description: 'Identify the general rule or principle that best explains or justifies the specific reasoning in the stimulus.', unit: 'Unit 4: Principle', lessonCount: 12 }, () => import('./Module14')),

  // Unit 5: Inference
  entry({ id: 15, title: 'Fill in the Blank', category: 'LR', description: "Complete the argument by selecting the answer choice that best fills in the blank, typically representing the argument's conclusion.", unit: 'Unit 5: Inference', lessonCount: 12 }, () => import('./Module15')),
  entry({ id: 16, title: 'Most Strongly Supported', category: 'LR', description: 'Find the answer choice that receives the strongest support from the information in the stimulus.', unit: 'Unit 5: Inference', lessonCount: 12 }, () => import('./Module16')),
  entry({ id: 17, title: 'Must Be True', category: 'LR', description: 'Find the answer choice that must be true based on the statements in the stimulus.', unit: 'Unit 5: Inference', lessonCount: 12 }, () => import('./Module17')),
  entry({ id: 18, title: 'Must Be False', category: 'LR', description: 'Find the answer choice that cannot be true given the information in the stimulus.', unit: 'Unit 5: Inference', lessonCount: 12 }, () => import('./Module18')),

  // Unit 6: Resolution
  entry({ id: 19, title: 'Explain / Resolve', category: 'LR', description: 'Find the answer choice that best explains a surprising result or resolves an apparent contradiction in the stimulus.', unit: 'Unit 6: Resolution', lessonCount: 12 }, () => import('./Module19')),

  // Unit 7: Conflict
  entry({ id: 20, title: 'Point at Issue', category: 'LR', description: 'Identify the specific claim about which two speakers in a dialogue disagree.', unit: 'Unit 7: Conflict', lessonCount: 12 }, () => import('./Module20')),

  // Unit 8: Conditional Reasoning
  entry({ id: 21, title: 'Conditional Reasoning', category: 'LR', description: 'Master the rigid, mechanical application of formal logic, including contrapositives, quantifiers, and complex conditional structures.', unit: 'Unit 8: Conditional Reasoning', lessonCount: 8 }, () => import('./Module55')),

  // Unit 9: LSAT Math
  entry({ id: 22, title: 'LSAT Math', category: 'LR', description: 'Master the logical flaws hidden in quantitative arguments involving percentages, averages, and probabilities.', unit: 'Unit 9: LSAT Math', lessonCount: 8 }, () => import('./Module59')),

  // ── READING COMPREHENSION ──────────────────

  // Unit 10: Summarizing the Passage
  entry({ id: 23, title: 'Main Point', category: 'RC', description: 'Identify the central claim or thesis of a reading comprehension passage.', unit: 'Unit 10: Summarizing the Passage', lessonCount: 12 }, () => import('./Module21')),
  entry({ id: 24, title: 'Primary Purpose', category: 'RC', description: 'Determine the overall goal or function of a reading comprehension passage.', unit: 'Unit 10: Summarizing the Passage', lessonCount: 12 }, () => import('./Module22')),
  entry({ id: 25, title: 'Organization', category: 'RC', description: 'Understand the structural layout and progression of ideas in a passage.', unit: 'Unit 10: Summarizing the Passage', lessonCount: 12 }, () => import('./Module23')),

  // Unit 11: Analyzing the Components
  entry({ id: 26, title: 'In Context', category: 'RC', description: 'Determine the meaning or function of a word, phrase, or sentence within the passage.', unit: 'Unit 11: Analyzing the Components', lessonCount: 12 }, () => import('./Module24')),
  entry({ id: 27, title: 'Specific Detail', category: 'RC', description: 'Locate and identify specific information stated directly in the passage.', unit: 'Unit 11: Analyzing the Components', lessonCount: 12 }, () => import('./Module25')),
  entry({ id: 28, title: 'Function', category: 'RC', description: 'Determine the role a specific portion of the passage plays in the overall argument.', unit: 'Unit 11: Analyzing the Components', lessonCount: 12 }, () => import('./Module26')),

  // Unit 12: Identifying the Perspectives
  entry({ id: 29, title: 'Author Agreement', category: 'RC', description: "Identify claims the author would most likely agree with based on the passage's content.", unit: 'Unit 12: Identifying the Perspectives', lessonCount: 12 }, () => import('./Module27')),
  entry({ id: 30, title: 'Attitude', category: 'RC', description: "Determine the author's tone or attitude toward a subject discussed in the passage.", unit: 'Unit 12: Identifying the Perspectives', lessonCount: 12 }, () => import('./Module28')),
  entry({ id: 31, title: 'Dual Passages', category: 'RC', description: 'Analyze two related passages, comparing and contrasting their arguments and perspectives.', unit: 'Unit 12: Identifying the Perspectives', lessonCount: 12 }, () => import('./Module29')),

  // Unit 13: Extending the Reasoning
  entry({ id: 32, title: 'Analogous Reasoning', category: 'RC', description: 'Identify a situation or argument that parallels the reasoning found in the passage.', unit: 'Unit 13: Extending the Reasoning', lessonCount: 12 }, () => import('./Module30')),
  entry({ id: 33, title: 'Inference', category: 'RC', description: 'Draw a conclusion that logically follows from the information presented in the passage.', unit: 'Unit 13: Extending the Reasoning', lessonCount: 12 }, () => import('./Module31')),
  entry({ id: 34, title: 'Strengthen / Weaken (RC)', category: 'RC', description: 'Find information that would strengthen or weaken an argument made in the passage.', unit: 'Unit 13: Extending the Reasoning', lessonCount: 12 }, () => import('./Module32')),

  // Unit 14: Sample Passages
  entry({ id: 35, title: 'Practice Passage 1: Law', category: 'RC', description: 'Full breakdown of a law-focused RC passage.', unit: 'Unit 14: Sample Passages', lessonCount: 8 }, () => import('./Module33')),
  entry({ id: 36, title: 'Practice Passage 2: Science', category: 'RC', description: 'Full breakdown of a science-focused RC passage.', unit: 'Unit 14: Sample Passages', lessonCount: 8 }, () => import('./Module34')),
  entry({ id: 37, title: 'Practice Passage 3: Humanities', category: 'RC', description: 'Full breakdown of a humanities-focused RC passage.', unit: 'Unit 14: Sample Passages', lessonCount: 8 }, () => import('./Module35')),
  entry({ id: 38, title: 'Practice Passage 4: Social Science', category: 'RC', description: 'Full breakdown of a social-science-focused RC passage.', unit: 'Unit 14: Sample Passages', lessonCount: 8 }, () => import('./Module36')),
  entry({ id: 39, title: 'Practice Passage 5: Dual', category: 'RC', description: 'Full breakdown of a dual-passage RC section.', unit: 'Unit 14: Sample Passages', lessonCount: 8 }, () => import('./Module37')),
  entry({ id: 40, title: 'Practice Passage 6: Law II', category: 'RC', description: 'Full breakdown of a second law-focused RC passage.', unit: 'Unit 14: Sample Passages', lessonCount: 8 }, () => import('./Module38')),
  entry({ id: 41, title: 'Practice Passage 7: Science II', category: 'RC', description: 'Full breakdown of a second science-focused RC passage.', unit: 'Unit 14: Sample Passages', lessonCount: 8 }, () => import('./Module39')),
  entry({ id: 42, title: 'Practice Passage 8: Humanities II', category: 'RC', description: 'Full breakdown of a second humanities-focused RC passage.', unit: 'Unit 14: Sample Passages', lessonCount: 8 }, () => import('./Module40')),
  entry({ id: 43, title: 'Practice Passage 9: Social Sci. II', category: 'RC', description: 'Full breakdown of a second social-science-focused RC passage.', unit: 'Unit 14: Sample Passages', lessonCount: 8 }, () => import('./Module41')),
  entry({ id: 44, title: 'Practice Passage 10: Dual II', category: 'RC', description: 'Full breakdown of a second dual-passage RC section.', unit: 'Unit 14: Sample Passages', lessonCount: 8 }, () => import('./Module42')),

  // Unit 15: Reference
  entry({ id: 45, title: 'RC Question Type Reference', category: 'RC', description: 'Quick reference guide for all RC question types and strategies.', unit: 'Unit 15: Reference', lessonCount: 3 }, () => import('./Module43')),
  entry({ id: 46, title: 'RC Passage Strategy Guide', category: 'RC', description: 'Comprehensive strategies for reading and annotating RC passages.', unit: 'Unit 15: Reference', lessonCount: 3 }, () => import('./Module44')),
  entry({ id: 47, title: 'RC Timing & Review Guide', category: 'RC', description: 'Strategies for managing time and reviewing RC sections.', unit: 'Unit 15: Reference', lessonCount: 3 }, () => import('./Module45')),
  entry({ id: 48, title: 'RC Common Traps Reference', category: 'RC', description: 'Catalog of common RC answer choice traps and how to avoid them.', unit: 'Unit 15: Reference', lessonCount: 3 }, () => import('./Module46')),
  entry({ id: 49, title: 'RC Cheat Sheet', category: 'RC', description: 'One-page cheat sheet with all key RC strategies.', unit: 'Unit 15: Reference', lessonCount: 1 }, () => import('./Module47')),

  // ── ADVANCED PASSAGES ──────────────────────

  // Unit 16: Advanced Passages
  entry({ id: 50, title: 'Advanced Passage: Philosophy', category: 'Advanced', description: 'In-depth analysis of a challenging philosophy passage.', unit: 'Unit 16: Advanced Passages', lessonCount: 8 }, () => import('./Module50')),
  entry({ id: 51, title: 'Advanced Passage: Natural Science', category: 'Advanced', description: 'In-depth analysis of a challenging natural science passage.', unit: 'Unit 16: Advanced Passages', lessonCount: 8 }, () => import('./Module51')),
  entry({ id: 52, title: 'Advanced Passage: Law & Policy', category: 'Advanced', description: 'In-depth analysis of a challenging law & policy passage.', unit: 'Unit 16: Advanced Passages', lessonCount: 8 }, () => import('./Module52')),
  entry({ id: 53, title: 'Advanced Passage: Art & Lit', category: 'Advanced', description: 'In-depth analysis of a challenging art & literature passage.', unit: 'Unit 16: Advanced Passages', lessonCount: 8 }, () => import('./Module54')),
  entry({ id: 54, title: 'Advanced Passage: Social Science', category: 'Advanced', description: 'In-depth analysis of a challenging social science passage.', unit: 'Unit 16: Advanced Passages', lessonCount: 8 }, () => import('./Module56')),
  entry({ id: 55, title: 'Advanced Passage: Economics', category: 'Advanced', description: 'In-depth analysis of a challenging economics passage.', unit: 'Unit 16: Advanced Passages', lessonCount: 8 }, () => import('./Module57')),
  entry({ id: 56, title: 'Advanced Passage: History', category: 'Advanced', description: 'In-depth analysis of a challenging history passage.', unit: 'Unit 16: Advanced Passages', lessonCount: 8 }, () => import('./Module58')),

];

export function getAllModuleMetadata(): ModuleMetadata[] {
  return moduleRegistry.map((e) => e.meta);
}

// Cross-reference map: PT identifier → { moduleId, lessonId }
// This maps repository question IDs to their drill lesson counterparts
export interface DrillReference {
  moduleId: number;
  lessonId: string;
  moduleTitle: string;
  lessonTitle: string;
}

// Build the cross-reference map from PT identifiers to drill lessons
// Keys are PT identifiers like "PT-112-S-4-Q-3"
export const drillCrossReferences: Record<string, DrillReference> = {
  // Module 1: Argument Part
  'PT-111-S-4-Q-2': { moduleId: 1, lessonId: '1-3', moduleTitle: 'Argument Part', lessonTitle: 'Drill: Premise' },
  'PT-112-S-4-Q-3': { moduleId: 1, lessonId: '1-4', moduleTitle: 'Argument Part', lessonTitle: 'Drill: Main Conclusion' },
  'PT-114-S-4-Q-18': { moduleId: 1, lessonId: '1-5', moduleTitle: 'Argument Part', lessonTitle: 'Drill: Sub-Conclusion' },
  'PT-117-S-2-Q-24': { moduleId: 1, lessonId: '1-6', moduleTitle: 'Argument Part', lessonTitle: 'Drill: Abstract Roles' },
  'PT-108-S-2-Q-22': { moduleId: 1, lessonId: '1-7', moduleTitle: 'Argument Part', lessonTitle: 'Drill: Independent Roles' },

  // Module 2: Main Conclusion
  'PT-107-S-4-Q-18': { moduleId: 2, lessonId: '2-4', moduleTitle: 'Main Conclusion', lessonTitle: 'Drill: The Rebuttal' },
  'PT-103-S-3-Q-8': { moduleId: 2, lessonId: '2-5', moduleTitle: 'Main Conclusion', lessonTitle: 'Drill: The Prescription' },
  'PT-109-S-2-Q-24': { moduleId: 2, lessonId: '2-6', moduleTitle: 'Main Conclusion', lessonTitle: 'Drill: The Explanation' },

  // Module 3: Method of Reasoning
  'PT-103-S-3-Q-6': { moduleId: 3, lessonId: '3-3', moduleTitle: 'Method of Reasoning', lessonTitle: 'Drill: Analogy' },
  'PT-113-S-1-Q-3': { moduleId: 3, lessonId: '3-4', moduleTitle: 'Method of Reasoning', lessonTitle: 'Drill: Counter-Example' },
  'PT-103-S-2-Q-9': { moduleId: 3, lessonId: '3-5', moduleTitle: 'Method of Reasoning', lessonTitle: 'Drill: Reductio ad Absurdum' },

  // Module 5: Flaw
  'PT-108-S-2-Q-12': { moduleId: 5, lessonId: '5-4', moduleTitle: 'Flaw', lessonTitle: 'Drill: Causal Flaw' },
  'PT-112-S-4-Q-14': { moduleId: 5, lessonId: '5-5', moduleTitle: 'Flaw', lessonTitle: 'Drill: Numbers vs. Percentages' },

  // Module 7: Evaluate the Argument
  'PT-101-S-2-Q-16': { moduleId: 7, lessonId: '7-4', moduleTitle: 'Evaluate the Argument', lessonTitle: 'Drill: Unrepresentative Samples' },

  // Module 8: Weaken
  'PT-101-S-2-Q-1': { moduleId: 8, lessonId: '8-3', moduleTitle: 'Weaken', lessonTitle: 'Drill: Scope Shift Flaw' },
  'PT-103-S-2-Q-5': { moduleId: 8, lessonId: '8-4', moduleTitle: 'Weaken', lessonTitle: 'Drill: Baseline Flaw' },
  'PT-113-S-2-Q-14': { moduleId: 8, lessonId: '8-5', moduleTitle: 'Weaken', lessonTitle: 'Drill: Attacking the Data' },

  // Module 9: Strengthen
  'PT-128-S-3-Q-1': { moduleId: 9, lessonId: '9-3', moduleTitle: 'Strengthen', lessonTitle: 'Drill: Causal Claims' },
  'PT-111-S-3-Q-4': { moduleId: 9, lessonId: '9-4', moduleTitle: 'Strengthen', lessonTitle: 'Drill: Numbers' },
  'PT-106-S-3-Q-9': { moduleId: 9, lessonId: '9-5', moduleTitle: 'Strengthen', lessonTitle: 'Drill: Comparative Claims' },
  'PT-112-S-4-Q-20': { moduleId: 9, lessonId: '9-10', moduleTitle: 'Strengthen', lessonTitle: 'Drill: Analogy' },
  'PT-120-S-1-Q-26': { moduleId: 9, lessonId: '9-11', moduleTitle: 'Strengthen', lessonTitle: 'Drill: Dose-Response' },

  // Module 17: Must Be True
  'PT-101-S-2-Q-11': { moduleId: 17, lessonId: '17-4', moduleTitle: 'Must Be True', lessonTitle: 'Drill: Quantifiers' },
};
