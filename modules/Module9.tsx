import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module9/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module9/Lesson2_StepByStepGuide';
import { Lesson3_Drill_CausalClaims } from './module9/Lesson3_Drill_CausalClaims';
import { Lesson4_Drill_Numbers } from './module9/Lesson4_Drill_Numbers';
import { Lesson5_Drill_ComparativeClaims } from './module9/Lesson5_Drill_ComparativeClaims';
import { Lesson6_Advanced_TraitsOfHighDifficulty } from './module9/Lesson6_Advanced_TraitsOfHighDifficulty';
import { Lesson7_Drill_TheDefender } from './module9/Lesson7_Drill_TheDefender';
import { Lesson8_Drill_ConceptualGaps } from './module9/Lesson8_Drill_ConceptualGaps';
import { Lesson9_Drill_Qualifiers } from './module9/Lesson9_Drill_Qualifiers';
import { Lesson10_Drill_Analogy } from './module9/Lesson10_Drill_Analogy';
import { Lesson11_Drill_DoseResponse } from './module9/Lesson11_Drill_DoseResponse';
import { Lesson12_Drill_StrengthenExcept } from './module9/Lesson12_Drill_StrengthenExcept';
import { Lesson13_ReferenceGuide } from './module9/Lesson13_ReferenceGuide';

export const Module9: ModuleData = {
  id: 9,
  title: "Strengthen",
  category: "LR",
  unit: "Unit 3: Evaluation",
  description: "Select a new fact that makes the conclusion more likely to follow from the premises.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_Drill_CausalClaims,
    Lesson4_Drill_Numbers,
    Lesson5_Drill_ComparativeClaims,
    Lesson6_Advanced_TraitsOfHighDifficulty,
    Lesson7_Drill_TheDefender,
    Lesson8_Drill_ConceptualGaps,
    Lesson9_Drill_Qualifiers,
    Lesson10_Drill_Analogy,
    Lesson11_Drill_DoseResponse,
    Lesson12_Drill_StrengthenExcept,
    Lesson13_ReferenceGuide
  ]
};
