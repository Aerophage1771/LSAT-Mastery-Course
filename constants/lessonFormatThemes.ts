/**
 * Lesson format themes: 10 distinct typography/spacing personalities.
 * Format 1 "Current" matches LessonViewer baseline exactly; 2–10 are bold, intentional aesthetics.
 * Use only Tailwind utilities; list classes are combined with list-disc or list-decimal in LessonViewer.
 */

export interface LessonFormatTheme {
  id: number;
  name: string;
  container: string;
  title: string;
  h2: string;
  h3: string;
  h4: string;
  paragraph: string;
  list: string;
  blockquote: string;
  hr: string;
  contentBoxWrapper?: string;
}

export const LESSON_FORMAT_THEMES: LessonFormatTheme[] = [
  // 1 – Current (baseline; must match LessonViewer defaults exactly)
  {
    id: 1,
    name: "Current",
    container:
      "max-w-4xl mx-auto bg-white p-8 lg:p-12 rounded-2xl shadow-sm border border-slate-100 min-h-[calc(100vh-4rem)]",
    title:
      "text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 pb-6 border-b border-slate-100",
    h2: "text-2xl font-bold mt-12 mb-6 text-slate-900 border-l-4 border-indigo-500 pl-4 py-1 bg-slate-50 rounded-r-lg",
    h3: "text-xl font-bold mt-8 mb-4 text-slate-800 tracking-tight",
    h4: "text-lg font-bold mt-8 mb-3 text-slate-800 uppercase tracking-wide",
    paragraph: "mb-4 leading-relaxed text-slate-700 text-lg",
    list: "mb-6 ml-6 pl-2 marker:text-indigo-500 text-slate-700 space-y-2",
    blockquote:
      "border-l-4 border-indigo-300 pl-6 py-3 my-6 bg-indigo-50/50 text-slate-700 italic rounded-r-lg shadow-sm",
    hr: "my-10 border-slate-200",
  },

  // 2 – Tight: compact, utilitarian, less whitespace, slightly smaller type
  {
    id: 2,
    name: "Tight",
    container:
      "max-w-4xl mx-auto bg-white p-5 lg:p-8 rounded-lg shadow-sm border border-slate-200 min-h-[calc(100vh-4rem)]",
    title:
      "text-2xl lg:text-3xl font-bold text-slate-900 mb-4 pb-4 border-b border-slate-200",
    h2: "text-xl font-bold mt-8 mb-4 text-slate-900 border-l-4 border-slate-400 pl-3 py-0.5 bg-slate-50 rounded-r",
    h3: "text-lg font-bold mt-6 mb-3 text-slate-800 tracking-tight",
    h4: "text-base font-bold mt-6 mb-2 text-slate-800 uppercase tracking-wide",
    paragraph: "mb-3 leading-snug text-slate-700 text-base",
    list: "mb-4 ml-5 pl-2 marker:text-slate-500 text-slate-700 space-y-1 text-base",
    blockquote:
      "border-l-4 border-slate-300 pl-4 py-2 my-4 bg-slate-50 text-slate-700 italic rounded-r text-base",
    hr: "my-6 border-slate-200",
  },

  // 3 – Generous: lots of breathing room, larger margins
  {
    id: 3,
    name: "Generous",
    container:
      "max-w-4xl mx-auto bg-white p-10 lg:p-16 rounded-3xl shadow-md border border-slate-100 min-h-[calc(100vh-4rem)]",
    title:
      "text-3xl lg:text-4xl font-extrabold text-slate-900 mb-8 pb-8 border-b-2 border-slate-100",
    h2: "text-2xl font-bold mt-16 mb-8 text-slate-900 border-l-4 border-indigo-500 pl-5 py-2 bg-slate-50 rounded-r-xl",
    h3: "text-xl font-bold mt-12 mb-6 text-slate-800 tracking-tight",
    h4: "text-lg font-bold mt-10 mb-4 text-slate-800 uppercase tracking-wide",
    paragraph: "mb-6 leading-relaxed text-slate-700 text-lg",
    list: "mb-8 ml-8 pl-3 marker:text-indigo-500 text-slate-700 space-y-4 text-lg",
    blockquote:
      "border-l-4 border-indigo-300 pl-8 py-5 my-8 bg-indigo-50/50 text-slate-700 italic rounded-r-xl shadow-sm",
    hr: "my-14 border-slate-200",
  },

  // 4 – Editorial: magazine-like, strong headline hierarchy, larger blockquote
  {
    id: 4,
    name: "Editorial",
    container:
      "max-w-4xl mx-auto bg-white p-8 lg:p-12 rounded-2xl shadow-sm border border-slate-100 min-h-[calc(100vh-4rem)]",
    title:
      "text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 pb-6 border-b-2 border-slate-900 uppercase tracking-tight",
    h2: "text-3xl font-black mt-14 mb-6 text-slate-900 tracking-tight border-b-2 border-slate-900 pb-2",
    h3: "text-2xl font-bold mt-10 mb-4 text-slate-800 tracking-tight",
    h4: "text-xl font-bold mt-8 mb-3 text-slate-700 uppercase tracking-widest",
    paragraph: "mb-5 leading-relaxed text-slate-700 text-lg max-w-3xl",
    list: "mb-8 ml-6 pl-2 marker:text-slate-900 marker:font-bold text-slate-700 space-y-3 text-lg",
    blockquote:
      "border-l-4 border-slate-900 pl-8 py-6 my-8 bg-slate-100 text-slate-800 text-xl font-medium not-italic rounded-r-lg",
    hr: "my-12 border-t-2 border-slate-300",
  },

  // 5 – Minimal: very clean, thin weights, lots of negative space
  {
    id: 5,
    name: "Minimal",
    container:
      "max-w-3xl mx-auto bg-white p-12 lg:p-20 rounded-2xl border border-slate-100 min-h-[calc(100vh-4rem)]",
    title:
      "text-3xl lg:text-4xl font-light text-slate-800 mb-10 pb-6 border-b border-slate-100",
    h2: "text-2xl font-medium mt-14 mb-6 text-slate-800 border-l border-slate-300 pl-5 py-1",
    h3: "text-xl font-medium mt-10 mb-4 text-slate-700",
    h4: "text-lg font-medium mt-8 mb-3 text-slate-700 tracking-wide",
    paragraph: "mb-6 leading-relaxed text-slate-600 text-lg font-light",
    list: "mb-8 ml-6 pl-2 marker:text-slate-400 text-slate-600 space-y-3 font-light",
    blockquote:
      "border-l border-slate-300 pl-6 py-4 my-8 bg-slate-50/80 text-slate-600 font-light rounded-r",
    hr: "my-12 border-slate-100",
  },

  // 6 – Dense: high information density, smaller text, tight leading
  {
    id: 6,
    name: "Dense",
    container:
      "max-w-5xl mx-auto bg-white p-6 lg:p-10 rounded-lg shadow-sm border border-slate-200 min-h-[calc(100vh-4rem)]",
    title:
      "text-2xl font-bold text-slate-900 mb-4 pb-4 border-b border-slate-200",
    h2: "text-lg font-bold mt-6 mb-3 text-slate-900 border-l-2 border-indigo-600 pl-3 py-0.5 bg-slate-50 rounded-r text-sm",
    h3: "text-base font-bold mt-5 mb-2 text-slate-800 tracking-tight",
    h4: "text-sm font-bold mt-4 mb-2 text-slate-800 uppercase tracking-wide",
    paragraph: "mb-2 leading-snug text-slate-700 text-sm",
    list: "mb-4 ml-5 pl-2 marker:text-indigo-600 text-slate-700 space-y-1 text-sm",
    blockquote:
      "border-l-2 border-indigo-400 pl-4 py-2 my-4 bg-indigo-50/60 text-slate-700 italic rounded-r text-sm",
    hr: "my-6 border-slate-200",
  },

  // 7 – Display: headings dominate, big bold titles
  {
    id: 7,
    name: "Display",
    container:
      "max-w-4xl mx-auto bg-white p-8 lg:p-12 rounded-2xl shadow-sm border border-slate-100 min-h-[calc(100vh-4rem)]",
    title:
      "text-4xl lg:text-5xl font-black text-slate-900 mb-8 pb-6 border-b-4 border-slate-900 tracking-tight",
    h2: "text-3xl font-black mt-12 mb-5 text-slate-900 border-l-4 border-slate-900 pl-4 py-1 bg-slate-100 rounded-r-lg",
    h3: "text-2xl font-bold mt-10 mb-4 text-slate-800 tracking-tight",
    h4: "text-xl font-bold mt-8 mb-3 text-slate-800 uppercase tracking-wide",
    paragraph: "mb-4 leading-relaxed text-slate-600 text-base",
    list: "mb-6 ml-6 pl-2 marker:text-slate-900 marker:font-bold text-slate-700 space-y-2 text-base",
    blockquote:
      "border-l-4 border-slate-700 pl-6 py-4 my-6 bg-slate-100 text-slate-700 italic font-medium rounded-r-lg",
    hr: "my-10 border-2 border-slate-300",
  },

  // 8 – Warm: softer, slightly rounded, approachable
  {
    id: 8,
    name: "Warm",
    container:
      "max-w-4xl mx-auto bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-stone-200 min-h-[calc(100vh-4rem)]",
    title:
      "text-3xl lg:text-4xl font-extrabold text-stone-900 mb-6 pb-6 border-b border-stone-200 rounded-b",
    h2: "text-2xl font-bold mt-12 mb-6 text-stone-900 border-l-4 border-amber-400 pl-4 py-2 bg-amber-50/50 rounded-r-2xl",
    h3: "text-xl font-bold mt-8 mb-4 text-stone-800 tracking-tight",
    h4: "text-lg font-bold mt-8 mb-3 text-stone-800 uppercase tracking-wide",
    paragraph: "mb-4 leading-relaxed text-stone-700 text-lg",
    list: "mb-6 ml-6 pl-2 marker:text-amber-600 text-stone-700 space-y-2",
    blockquote:
      "border-l-4 border-amber-300 pl-6 py-3 my-6 bg-amber-50/50 text-stone-700 italic rounded-r-2xl shadow-sm",
    hr: "my-10 border-stone-200",
  },

  // 9 – Sharp: geometric, tight letter-spacing on headings, crisp
  {
    id: 9,
    name: "Sharp",
    container:
      "max-w-4xl mx-auto bg-white p-8 lg:p-12 rounded-sm shadow-sm border border-slate-300 min-h-[calc(100vh-4rem)]",
    title:
      "text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 pb-6 border-b-2 border-slate-300 tracking-tighter",
    h2: "text-2xl font-bold mt-12 mb-6 text-slate-900 border-l-4 border-slate-700 pl-4 py-1 bg-slate-100 rounded-none tracking-tight",
    h3: "text-xl font-bold mt-8 mb-4 text-slate-800 tracking-tighter",
    h4: "text-lg font-bold mt-8 mb-3 text-slate-800 uppercase tracking-tight",
    paragraph: "mb-4 leading-snug text-slate-700 text-lg tracking-tight",
    list: "mb-6 ml-6 pl-2 marker:text-slate-700 text-slate-700 space-y-2 tracking-tight",
    blockquote:
      "border-l-4 border-slate-500 pl-6 py-3 my-6 bg-slate-100 text-slate-700 italic rounded-none",
    hr: "my-10 border-slate-300 border-t",
  },

  // 10 – Breathing room: airy, extra padding, relaxed line-height
  {
    id: 10,
    name: "Breathing room",
    container:
      "max-w-3xl mx-auto bg-white p-12 lg:p-20 rounded-2xl shadow-sm border border-slate-100 min-h-[calc(100vh-4rem)]",
    title:
      "text-3xl lg:text-4xl font-extrabold text-slate-900 mb-8 pb-8 border-b border-slate-100 leading-relaxed",
    h2: "text-2xl font-bold mt-14 mb-8 text-slate-900 border-l-4 border-indigo-500 pl-4 py-2 bg-slate-50 rounded-r-lg",
    h3: "text-xl font-bold mt-10 mb-6 text-slate-800 tracking-tight",
    h4: "text-lg font-bold mt-10 mb-4 text-slate-800 uppercase tracking-wide",
    paragraph: "mb-6 leading-loose text-slate-700 text-lg",
    list: "mb-8 ml-6 pl-2 marker:text-indigo-500 text-slate-700 space-y-3 leading-relaxed",
    blockquote:
      "border-l-4 border-indigo-300 pl-6 py-4 my-8 bg-indigo-50/50 text-slate-700 italic rounded-r-lg shadow-sm",
    hr: "my-12 border-slate-200",
  },
];

/**
 * Look up theme by format id (1–10). Returns undefined if not found.
 */
export function getLessonFormatTheme(
  themes: LessonFormatTheme[],
  formatId: number
): LessonFormatTheme | undefined {
  return themes.find((t) => t.id === formatId);
}
