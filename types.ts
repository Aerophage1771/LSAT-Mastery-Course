
export type ContentBlock = 
  | { type: 'paragraph'; text: string }
  | { type: 'h1'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'h4'; text: string }
  | { type: 'blockquote'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'hr' }
  | { type: 'code'; text: string }
  | { type: 'callout'; title?: string; text: string; variant?: 'default' | 'summary' | 'tip' }
  | { type: 'options'; items: string[] }
  | { type: 'process'; steps: string[]; title?: string }
  | { type: 'accordion'; title: string; content: string | ContentBlock[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { 
      type: 'breakdown'; 
      labels?: { title?: string; text?: string }; // Custom headers for columns/sections
      colWidth?: 'equal' | 'narrow'; // 'narrow' sets the first column to roughly 25-30%
      items: { 
        title: string; 
        text: string; 
        badge?: string; 
        badgeColor?: 'green' | 'red' | 'indigo' | 'slate' | 'blue';
      }[] 
    };

export interface Lesson {
  id: string;
  title: string;
  content: string | ContentBlock[]; // Markdown content OR structured blocks
}

export interface ModuleData {
  id: number;
  title: string;
  category: string;
  description: string;
  unit: string;
  lessons: Lesson[];
}

export interface CourseState {
  activeModuleId: number;
  activeLessonId: string | null;
}
