import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module3/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module3/Lesson2_StepByStepGuide';
import { Lesson3_FieldGuide } from './module3/Lesson3_FieldGuide';
import { Lesson4_RefutationByAnalogy } from './module3/Lesson4_RefutationByAnalogy';
import { Lesson5_ProcessOfElimination } from './module3/Lesson5_ProcessOfElimination';
import { Lesson6_RefutationByCounterexample } from './module3/Lesson6_RefutationByCounterexample';
import { Lesson7_HighlightingNegativeConsequences } from './module3/Lesson7_HighlightingNegativeConsequences';
import { Lesson8_AdvancedConcepts } from './module3/Lesson8_AdvancedConcepts';
import { Lesson9_Advanced_ChallengingAssumption } from './module3/Lesson9_Advanced_ChallengingAssumption';
import { Lesson10_Advanced_ProofByContradiction } from './module3/Lesson10_Advanced_ProofByContradiction';
import { Lesson11_Advanced_ChallengingAssumption2 } from './module3/Lesson11_Advanced_ChallengingAssumption2';
import { Lesson12_ReferenceGuide } from './module3/Lesson12_ReferenceGuide';


export const Module3: ModuleData = {
  id: 3,
  title: "Method of Reasoning",
  category: "LR",
  unit: "Unit 2: Analysis",
  description: "Describe the argumentative strategy the author uses to support the conclusion. In other words, what is the logical structure of the argument?",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_FieldGuide,
    Lesson4_RefutationByAnalogy,
    Lesson5_ProcessOfElimination,
    Lesson6_RefutationByCounterexample,
    Lesson7_HighlightingNegativeConsequences,
    Lesson8_AdvancedConcepts,
    Lesson9_Advanced_ChallengingAssumption,
    Lesson10_Advanced_ProofByContradiction,
    Lesson11_Advanced_ChallengingAssumption2,
    Lesson12_ReferenceGuide,
  ]
};
