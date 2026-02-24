import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module11/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module11/Lesson2_StepByStepGuide';
import { Lesson3_FieldGuide } from './module11/Lesson3_FieldGuide';
import { Lesson4_Drill_KeyIngredient } from './module11/Lesson4_Drill_KeyIngredient';
import { Lesson5_Drill_DefinitionalGap } from './module11/Lesson5_Drill_DefinitionalGap';
import { Lesson6_Drill_OnlyWay } from './module11/Lesson6_Drill_OnlyWay';
import { Lesson7_Drill_ClosedUniverse } from './module11/Lesson7_Drill_ClosedUniverse';
import { Lesson8_Drill_SourceFallacy } from './module11/Lesson8_Drill_SourceFallacy';
import { Lesson9_Drill_FalseDichotomy } from './module11/Lesson9_Drill_FalseDichotomy';
import { Lesson10_Drill_CompleteKnowledge } from './module11/Lesson10_Drill_CompleteKnowledge';
import { Lesson11_Drill_ForcedChoiceAdvanced } from './module11/Lesson11_Drill_ForcedChoiceAdvanced';
import { Lesson12_Drill_BlockingThirdParty } from './module11/Lesson12_Drill_BlockingThirdParty';
import { Lesson13_Drill_BehavioralLink } from './module11/Lesson13_Drill_BehavioralLink';
import { Lesson14_Drill_DefinitionalStandard } from './module11/Lesson14_Drill_DefinitionalStandard';

export const Module11: ModuleData = {
  id: 11,
  title: "Necessary Assumption",
  category: "LR",
  unit: "Unit 3: Evaluation",
  description: "Identify a premise the author must believe for the argument to have a chance of being valid.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_FieldGuide,
    Lesson4_Drill_KeyIngredient,
    Lesson5_Drill_DefinitionalGap,
    Lesson6_Drill_OnlyWay,
    Lesson7_Drill_ClosedUniverse,
    Lesson8_Drill_SourceFallacy,
    Lesson9_Drill_FalseDichotomy,
    Lesson10_Drill_CompleteKnowledge,
    Lesson11_Drill_ForcedChoiceAdvanced,
    Lesson12_Drill_BlockingThirdParty,
    Lesson13_Drill_BehavioralLink,
    Lesson14_Drill_DefinitionalStandard
  ]
};
