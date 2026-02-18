import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module2/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module2/Lesson2_StepByStepGuide';
import { Lesson3_CommonPatternsAndTypes } from './module2/Lesson3_CommonPatternsAndTypes';
import { Lesson4_TheRebuttal } from './module2/Lesson4_TheRebuttal';
import { Lesson5_ThePrescription } from './module2/Lesson5_ThePrescription';
import { Lesson6_TheExplanation } from './module2/Lesson6_TheExplanation';
import { Lesson7_AdvancedConcepts } from './module2/Lesson7_AdvancedConcepts';
import { Lesson8_Advanced_IntermediateConclusion } from './module2/Lesson8_Advanced_IntermediateConclusion';
import { Lesson9_Advanced_BackgroundPrinciple } from './module2/Lesson9_Advanced_BackgroundPrinciple';
import { Lesson10_Advanced_SpecificJudgment } from './module2/Lesson10_Advanced_SpecificJudgment';
import { Lesson11_ReferenceGuide } from './module2/Lesson11_ReferenceGuide';

export const Module2: ModuleData = {
  id: 2,
  title: "Main Conclusion",
  category: "LR",
  unit: "Unit 1: Identification",
  description: "Identify the single, overarching claim that the entire argument is constructed to prove. In other words, what is the one ultimate point the author wants the reader to accept?",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_CommonPatternsAndTypes,
    Lesson4_TheRebuttal,
    Lesson5_ThePrescription,
    Lesson6_TheExplanation,
    Lesson7_AdvancedConcepts,
    Lesson8_Advanced_IntermediateConclusion,
    Lesson9_Advanced_BackgroundPrinciple,
    Lesson10_Advanced_SpecificJudgment,
    Lesson11_ReferenceGuide,
  ]
};
