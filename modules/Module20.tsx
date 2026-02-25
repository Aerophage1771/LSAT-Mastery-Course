import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module20/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module20/Lesson2_StepByStepGuide';
import { Lesson3_Drill_Disagreement_DefinitionalRule } from './module20/Lesson3_Drill_Disagreement_DefinitionalRule';
import { Lesson4_Drill_Disagreement_ExplanatoryCause } from './module20/Lesson4_Drill_Disagreement_ExplanatoryCause';
import { Lesson5_Drill_PointOfAgreement_SharedAssumption } from './module20/Lesson5_Drill_PointOfAgreement_SharedAssumption';
import { Lesson6_Advanced_StrategyGuide } from './module20/Lesson6_Advanced_StrategyGuide';
import { Lesson7_Drill_Disagreement_ClashOfCriteria } from './module20/Lesson7_Drill_Disagreement_ClashOfCriteria';
import { Lesson8_Drill_Disagreement_DefinitionalClash } from './module20/Lesson8_Drill_Disagreement_DefinitionalClash';
import { Lesson9_Drill_PointOfAgreement_SharedDiagnosis } from './module20/Lesson9_Drill_PointOfAgreement_SharedDiagnosis';
import { Lesson10_ReferenceGuide } from './module20/Lesson10_ReferenceGuide';

export const Module20: ModuleData = {
  id: 20,
  title: "Agree / Disagree (Point at Issue)",
  category: "LR",
  unit: "Unit 7: Conflict",
  description: "Identify the specific proposition on which two speakers hold opposing views (Point at Issue) or shared views (Point of Agreement).",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_Drill_Disagreement_DefinitionalRule,
    Lesson4_Drill_Disagreement_ExplanatoryCause,
    Lesson5_Drill_PointOfAgreement_SharedAssumption,
    Lesson6_Advanced_StrategyGuide,
    Lesson7_Drill_Disagreement_ClashOfCriteria,
    Lesson8_Drill_Disagreement_DefinitionalClash,
    Lesson9_Drill_PointOfAgreement_SharedDiagnosis,
    Lesson10_ReferenceGuide
  ]
};
