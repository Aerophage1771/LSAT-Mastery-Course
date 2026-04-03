import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module30/Lesson1_Introduction';
import { Lesson2_StepByStepApproach } from './module30/Lesson2_StepByStepApproach';

export const Module30: ModuleData = {
  id: 30,
  title: "Author Viewpoint",
  category: "RC",
  unit: "Unit 10: Identifying the Perspectives",
  description: "Determine which statement the author would most likely agree with or support.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepApproach
  ]
};
