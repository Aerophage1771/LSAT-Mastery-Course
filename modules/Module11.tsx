import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module11/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module11/Lesson2_StepByStepGuide';
import { Lesson3_Drill_KeyIngredient } from './module11/Lesson3_Drill_KeyIngredient';
import { Lesson4_Drill_DefinitionalGap } from './module11/Lesson4_Drill_DefinitionalGap';
import { Lesson5_Drill_OnlyWay } from './module11/Lesson5_Drill_OnlyWay';
import { Lesson6_Drill_ClosedUniverse } from './module11/Lesson6_Drill_ClosedUniverse';
import { Lesson7_Drill_SourceFallacy } from './module11/Lesson7_Drill_SourceFallacy';
import { Lesson8_Drill_FalseDichotomy } from './module11/Lesson8_Drill_FalseDichotomy';
import { Lesson9_Drill_CompleteKnowledge } from './module11/Lesson9_Drill_CompleteKnowledge';
import { Lesson10_Drill_ForcedChoiceAdvanced } from './module11/Lesson10_Drill_ForcedChoiceAdvanced';
import { Lesson11_Drill_BlockingThirdParty } from './module11/Lesson11_Drill_BlockingThirdParty';
import { Lesson12_Drill_BehavioralLink } from './module11/Lesson12_Drill_BehavioralLink';
import { Lesson13_Drill_DefinitionalStandard } from './module11/Lesson13_Drill_DefinitionalStandard';
import { Lesson14_ReferenceGuide } from './module11/Lesson14_ReferenceGuide';

export const Module11: ModuleData = {
  id: 11,
  title: "Necessary Assumption",
  category: "LR",
  unit: "Unit 3: Evaluation",
  description: "Identify a premise the author must believe for the argument to have a chance of being valid.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_Drill_KeyIngredient,
    Lesson4_Drill_DefinitionalGap,
    Lesson5_Drill_OnlyWay,
    Lesson6_Drill_ClosedUniverse,
    Lesson7_Drill_SourceFallacy,
    Lesson8_Drill_FalseDichotomy,
    Lesson9_Drill_CompleteKnowledge,
    Lesson10_Drill_ForcedChoiceAdvanced,
    Lesson11_Drill_BlockingThirdParty,
    Lesson12_Drill_BehavioralLink,
    Lesson13_Drill_DefinitionalStandard,
    Lesson14_ReferenceGuide
  ]
};
