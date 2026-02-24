import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module20/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module20/Lesson2_StepByStepGuide';
import { Lesson3_FieldGuide } from './module20/Lesson3_FieldGuide';
import { Lesson4_Drill_Disagreement_DefinitionalRule } from './module20/Lesson4_Drill_Disagreement_DefinitionalRule';
import { Lesson5_Drill_Disagreement_ExplanatoryCause } from './module20/Lesson5_Drill_Disagreement_ExplanatoryCause';
import { Lesson6_Drill_PointOfAgreement_SharedAssumption } from './module20/Lesson6_Drill_PointOfAgreement_SharedAssumption';
import { Lesson7_Advanced_StrategyGuide } from './module20/Lesson7_Advanced_StrategyGuide';
import { Lesson8_Drill_Disagreement_ClashOfCriteria } from './module20/Lesson8_Drill_Disagreement_ClashOfCriteria';
import { Lesson9_Drill_Disagreement_DefinitionalClash } from './module20/Lesson9_Drill_Disagreement_DefinitionalClash';
import { Lesson10_Drill_PointOfAgreement_SharedDiagnosis } from './module20/Lesson10_Drill_PointOfAgreement_SharedDiagnosis';

export const Module20: ModuleData = {
  id: 20,
  title: "Agree / Disagree (Point at Issue)",
  category: "LR",
  unit: "Unit 7: Conflict",
  description: "Identify the specific proposition on which two speakers hold opposing views (Point at Issue) or shared views (Point of Agreement).",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_FieldGuide,
    Lesson4_Drill_Disagreement_DefinitionalRule,
    Lesson5_Drill_Disagreement_ExplanatoryCause,
    Lesson6_Drill_PointOfAgreement_SharedAssumption,
    Lesson7_Advanced_StrategyGuide,
    Lesson8_Drill_Disagreement_ClashOfCriteria,
    Lesson9_Drill_Disagreement_DefinitionalClash,
    Lesson10_Drill_PointOfAgreement_SharedDiagnosis
  ]
};
