
import React from 'react';
import { ModuleData } from '../types';
import { Book, ChevronRight, PlayCircle } from 'lucide-react';
import { ExportControls } from './ExportControls';
import { 
  generateUnitText, generateUnitRTF, generateUnitJSON, generateUnitCSV, generateUnitPDF,
  generateModuleText, generateModuleRTF, generateModuleJSON, generateModuleCSV, generateModulePDF,
  generateSectionText, generateSectionRTF, generateSectionJSON, generateSectionCSV, generateSectionPDF
} from '../utils/export';

interface DashboardProps {
  modules: Array<{ id: number; title: string; category: string; description: string; unit: string; lessons?: ModuleData['lessons']; lessonCount?: number }>;
  onSelectModule: (id: number) => void;
  getModuleProgress?: (lessons: { id: string }[]) => { completed: number; total: number; percent: number };
}

const asModules = (items: unknown[]): ModuleData[] =>
  (items as Array<Record<string, unknown>>).map((m) => ({
    ...m,
    lessons: (m.lessons as ModuleData['lessons']) ?? [],
  })) as unknown as ModuleData[];

const asModule = (m: Record<string, unknown>): ModuleData =>
  ({ ...m, lessons: (m.lessons as ModuleData['lessons']) ?? [] }) as unknown as ModuleData;

export const Dashboard: React.FC<DashboardProps> = ({ modules, onSelectModule, getModuleProgress }) => {
  // Group modules by unit
  type ModuleLike = typeof modules[number];
  const modulesByUnit = modules.reduce((acc, module) => {
    if (!acc[module.unit]) {
      acc[module.unit] = [];
    }
    acc[module.unit].push(module);
    return acc;
  }, {} as Record<string, ModuleLike[]>);

  // Define sections and unit order with descriptions
  const sections = [
    {
      title: "Logical Reasoning",
      description: "Master the art of argument analysis, evaluation, and manipulation.",
      units: [
        { name: "Unit 1: Identification", description: "Recognize the fundamental building blocks of logical arguments." },
        { name: "Unit 2: Analysis", description: "Deconstruct arguments to identify their structural patterns and flaws." },
        { name: "Unit 3: Evaluation", description: "Assess the strength of arguments by identifying gaps and assumptions." },
        { name: "Unit 4: Principle", description: "Apply abstract rules to specific scenarios and justify reasoning." },
        { name: "Unit 5: Inference", description: "Derive logical conclusions strictly from the information provided." },
        { name: "Unit 6: Resolution", description: "Explain paradoxes and reconcile conflicting information." },
        { name: "Unit 7: Conflict", description: "Analyze dialogues to pinpoint agreements and disagreements." },
        { name: "Unit 8: Conditional Reasoning", description: "Master the rigid, mechanical application of formal logic." },
        { name: "Unit 9: LSAT Math", description: "Master the logical flaws hidden in quantitative arguments involving percentages, averages, and probabilities." }
      ]
    },
    {
      title: "Reading Comprehension",
      description: "Develop strategies for deconstructing complex passages and identifying underlying structures.",
      units: [
        { name: "Unit 10: Summarizing the Passage", description: "Capture the main idea and primary purpose of complex texts." },
        { name: "Unit 11: Analyzing the Components", description: "Understand the function and meaning of specific text elements." },
        { name: "Unit 12: Identifying the Perspectives", description: "Track authorial attitude and distinguish multiple viewpoints." },
        { name: "Unit 13: Extending the Reasoning", description: "Apply passage logic to new contexts and draw valid inferences." },
        { name: "Unit 14: Sample Passages", description: "Full breakdowns of sample passages with detailed question analysis." },
        { name: "Unit 15: Reference", description: "Quick reference guides and cheat sheets for all question types." }
      ]
    },
    {
      title: "Advanced Passages",
      description: "In-depth analysis of the most challenging passages and question types.",
      units: [
        { name: "Unit 16: Advanced Passages", description: "Explore complex themes in philosophy, science, and law." }
      ]
    },
    {
      title: "Question Bank",
      description: "All practice questions from the course in one place, organized for review and timed practice.",
      units: [
        { name: "Unit 17: Question Bank", description: "Complete collection of LR and RC practice questions with cross-references to their full drill explanations." }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto animate-in fade-in duration-500 pb-20">
      <div className="mb-12 text-center lg:text-left">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">LSAT Mastery Course</h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
          A comprehensive curriculum progressing from foundational logic to advanced reading strategies.
        </p>
      </div>
      
      <div className="space-y-20">
        {sections.map((section) => {
          // Gather all modules for this section for the export
          const sectionModules = section.units.flatMap(u => modulesByUnit[u.name] || []);
          if (sectionModules.length === 0) return null;
          
          return (
            <div key={section.title}>
              <div className="mb-8 border-b border-slate-200 pb-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                   <div>
                      <h2 className="text-3xl font-extrabold text-slate-900">{section.title}</h2>
                      <p className="text-slate-500 mt-2">{section.description}</p>
                   </div>
                   <div className="flex-shrink-0">
                     <ExportControls 
                        variant="minimal"
                        filename={`LSAT_${section.title.replace(/\s+/g, '_')}`}
                        onCopy={() => generateSectionText(section.title, asModules(sectionModules))}
                        onExportText={() => generateSectionText(section.title, asModules(sectionModules))}
                        onExportRTF={() => generateSectionRTF(section.title, asModules(sectionModules))}
                        onExportJSON={() => generateSectionJSON(section.title, asModules(sectionModules))}
                        onExportCSV={() => generateSectionCSV(section.title, asModules(sectionModules))}
                        onExportPDF={() => generateSectionPDF(section.title, asModules(sectionModules))}
                     />
                   </div>
                </div>
              </div>

              <div className="space-y-16">
                {section.units.map((unitObj) => {
                  const unitString = unitObj.name;
                  const unitModules = modulesByUnit[unitString];
                  if (!unitModules) return null;
                  
                  const [unitNum, unitName] = unitString.split(': ');

                  return (
                    <div key={unitString}>
                      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 border-b border-slate-100 pb-4 gap-4">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <div className={`px-3 py-1 rounded-md text-sm font-bold uppercase tracking-wider mr-3 ${
                                section.title === 'Logical Reasoning' ? 'bg-indigo-100 text-indigo-700' : 
                                section.title === 'Reading Comprehension' ? 'bg-emerald-100 text-emerald-700' : 
                                section.title === 'Advanced Passages' ? 'bg-rose-100 text-rose-700' : 
                                section.title === 'Question Bank' ? 'bg-amber-100 text-amber-700' :
                                'bg-slate-100 text-slate-700'
                            }`}>
                              {unitNum}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800">{unitName}</h3>
                          </div>
                          <p className="text-slate-500 text-base ml-1">{unitObj.description}</p>
                        </div>
                        <div className="flex-shrink-0">
                           <ExportControls 
                              variant="minimal"
                              filename={`LSAT_${unitString.replace(/[: ]/g, '_')}`}
                              onCopy={() => generateUnitText(unitString, asModules(unitModules))}
                              onExportText={() => generateUnitText(unitString, asModules(unitModules))}
                              onExportRTF={() => generateUnitRTF(unitString, asModules(unitModules))}
                              onExportJSON={() => generateUnitJSON(unitString, asModules(unitModules))}
                              onExportCSV={() => generateUnitCSV(unitString, asModules(unitModules))}
                              onExportPDF={() => generateUnitPDF(unitString, asModules(unitModules))}
                           />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {unitModules.map((module) => (
                          <div 
                            key={module.id}
                            onClick={() => onSelectModule(module.id)}
                            className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg hover:border-indigo-200 transition-all duration-300 cursor-pointer group flex flex-col relative overflow-hidden"
                          >
                            {/* Hover Accent */}
                            <div className={`absolute top-0 left-0 w-1 h-full opacity-0 group-hover:opacity-100 transition-opacity ${
                                section.title === 'Logical Reasoning' ? 'bg-indigo-500' : 
                                section.title === 'Reading Comprehension' ? 'bg-emerald-500' : 
                                section.title === 'Advanced Passages' ? 'bg-rose-500' : 
                                section.title === 'Question Bank' ? 'bg-amber-500' :
                                'bg-slate-500'
                            }`} />

                            <div className="flex items-start justify-between mb-4">
                              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                                  section.title === 'Logical Reasoning' ? 'bg-slate-100 text-slate-600 group-hover:bg-indigo-100 group-hover:text-indigo-700' : 
                                  section.title === 'Reading Comprehension' ? 'bg-slate-100 text-slate-600 group-hover:bg-emerald-100 group-hover:text-emerald-700' : 
                                  section.title === 'Advanced Passages' ? 'bg-slate-100 text-slate-600 group-hover:bg-rose-100 group-hover:text-rose-700' : 
                                  section.title === 'Question Bank' ? 'bg-slate-100 text-slate-600 group-hover:bg-amber-100 group-hover:text-amber-700' :
                                  'bg-slate-100 text-slate-600'
                              }`}>
                                MODULE {module.id}
                              </span>
                              <div className="flex items-center gap-2">
                                 <ExportControls 
                                    variant="minimal"
                                    filename={`LSAT_Module_${module.id}_${module.title.replace(/\s+/g, '_')}`}
                                    onCopy={() => generateModuleText(asModule(module as unknown as Record<string, unknown>))}
                                    onExportText={() => generateModuleText(asModule(module as unknown as Record<string, unknown>))}
                                    onExportRTF={() => generateModuleRTF(asModule(module as unknown as Record<string, unknown>))}
                                    onExportJSON={() => generateModuleJSON(asModule(module as unknown as Record<string, unknown>))}
                                    onExportCSV={() => generateModuleCSV(asModule(module as unknown as Record<string, unknown>))}
                                    onExportPDF={() => generateModulePDF(asModule(module as unknown as Record<string, unknown>))}
                                 />
                                 <span className={`text-slate-300 transition-colors transform group-hover:translate-x-1 duration-300 ${
                                     section.title === 'Logical Reasoning' ? 'group-hover:text-indigo-600' : 
                                     section.title === 'Reading Comprehension' ? 'group-hover:text-emerald-600' : 
                                     section.title === 'Advanced Passages' ? 'group-hover:text-rose-600' : 
                                     section.title === 'Question Bank' ? 'group-hover:text-amber-600' :
                                     'group-hover:text-slate-600'
                                 }`}>
                                  <ChevronRight size={20} />
                                 </span>
                              </div>
                            </div>
                            
                            <h4 className={`text-xl font-bold text-slate-900 mb-3 transition-colors ${
                                section.title === 'Logical Reasoning' ? 'group-hover:text-indigo-600' : 
                                section.title === 'Reading Comprehension' ? 'group-hover:text-emerald-600' : 
                                section.title === 'Advanced Passages' ? 'group-hover:text-rose-600' : 
                                section.title === 'Question Bank' ? 'group-hover:text-amber-600' :
                                'group-hover:text-slate-600'
                            }`}>
                              {module.title}
                            </h4>
                            
                            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                              {module.description}
                            </p>
                            
                            <div className="flex items-center justify-between text-xs font-medium text-slate-500 mt-auto pt-4 border-t border-slate-100 group-hover:border-indigo-50 transition-colors">
                              <div className="flex items-center">
                                <Book size={14} className="mr-1.5" />
                                <span>{(module as { lessonCount?: number }).lessonCount ?? module.lessons?.length ?? 0} Lessons</span>
                              </div>
                              {getModuleProgress && module.lessons && module.lessons.length > 0 ? (() => {
                                const prog = getModuleProgress(module.lessons);
                                if (prog.completed === 0) return (
                                  <div className={`flex items-center opacity-0 group-hover:opacity-100 transition-opacity font-bold ${
                                    section.title === 'Logical Reasoning' ? 'text-indigo-600' : 
                                    section.title === 'Reading Comprehension' ? 'text-emerald-600' : 
                                    section.title === 'Advanced Passages' ? 'text-rose-600' : 
                                    section.title === 'Question Bank' ? 'text-amber-600' :
                                    'text-slate-600'
                                }`}>
                                  <PlayCircle size={14} className="mr-1.5" />
                                  <span>Start</span>
                                </div>
                                );
                                return (
                                  <div className="flex items-center gap-2">
                                    <div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                      <div className="h-full bg-emerald-500 rounded-full transition-all" style={{ width: `${prog.percent}%` }} />
                                    </div>
                                    <span className="text-emerald-600 font-bold">{prog.percent}%</span>
                                  </div>
                                );
                              })() : (
                                <div className={`flex items-center opacity-0 group-hover:opacity-100 transition-opacity font-bold ${
                                    section.title === 'Logical Reasoning' ? 'text-indigo-600' : 
                                    section.title === 'Reading Comprehension' ? 'text-emerald-600' : 
                                    section.title === 'Advanced Passages' ? 'text-rose-600' : 
                                    section.title === 'Question Bank' ? 'text-amber-600' :
                                    'text-slate-600'
                                }`}>
                                  <PlayCircle size={14} className="mr-1.5" />
                                  <span>Start</span>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};