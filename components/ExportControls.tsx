import React, { useState, useRef, useEffect } from 'react';
import { Copy, FileText, FileType, Check, Braces, ChevronDown, Download, FileDigit, Table, Code, FileCode } from 'lucide-react';

interface ExportControlsProps {
  onCopy: () => string;
  onExportText: () => string;
  onExportRTF: () => string;
  onExportJSON: () => string;
  onExportCSV: () => string;
  onExportPDF: () => void;
  filename: string;
  label?: string;
  variant?: 'minimal' | 'full';
  /** When provided, "Copy as JSX" is shown in the Export As dropdown. */
  onCopyAsJSX?: () => string | Promise<string>;
  /** When provided, "Copy as HTML" is shown in the Export As dropdown. */
  onCopyAsHTML?: () => string | Promise<string>;
}

export const ExportControls: React.FC<ExportControlsProps> = ({ 
  onCopy, 
  onExportText, 
  onExportRTF,
  onExportJSON,
  onExportCSV,
  onExportPDF,
  filename,
  label = "Export",
  variant = 'full',
  onCopyAsJSX,
  onCopyAsHTML,
}) => {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);
  const [copyError, setCopyError] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleCopyAction = async (text: string, formatId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCopyError(null);
    try {
      await navigator.clipboard.writeText(text);
      setCopiedFormat(formatId);
      setTimeout(() => setCopiedFormat(null), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
      setCopyError('Copy failed. Check permissions or try again.');
      setTimeout(() => setCopyError(null), 3000);
    }
  };

  const handleCopyRendering = async (getData: () => string | Promise<string>, formatId: 'jsx' | 'html', e: React.MouseEvent) => {
    e.stopPropagation();
    setCopyError(null);
    let text: string;
    try {
      text = await Promise.resolve(getData());
    } catch (err) {
      console.error('Export failed', err);
      setCopyError('Export failed.');
      setTimeout(() => setCopyError(null), 3000);
      return;
    }
    if (!text || !text.trim()) {
      setCopyError('Content not available to export.');
      setTimeout(() => setCopyError(null), 3000);
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopiedFormat(formatId);
      setTimeout(() => setCopiedFormat(null), 2000);
      setMenuOpen(false);
    } catch (err) {
      console.error('Failed to copy', err);
      setCopyError('Copy failed. Check permissions or try again.');
      setTimeout(() => setCopyError(null), 3000);
    }
  };

  const downloadFile = (content: string, ext: string) => {
    const mime = ext === 'json' ? 'application/json' : ext === 'csv' ? 'text/csv;charset=utf-8' : 'text/plain';
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formats = [
    { id: 'pdf', label: 'PDF Document (.pdf)', icon: FileDigit, action: onExportPDF, isDownloadFunc: true },
    { id: 'txt', label: 'Plain Text (.txt)', icon: FileText, getData: onExportText, ext: 'txt' },
    { id: 'rtf', label: 'Rich Text (.rtf)', icon: FileType, getData: onExportRTF, ext: 'rtf' },
    { id: 'json', label: 'Data Model (.json)', icon: Braces, getData: onExportJSON, ext: 'json' },
    { id: 'csv', label: 'CSV Table (.csv)', icon: Table, getData: onExportCSV, ext: 'csv' },
  ];

  const handleDownload = (format, e: React.MouseEvent) => {
    e.stopPropagation();
    if (format.isDownloadFunc) {
      format.action();
    } else {
      downloadFile(format.getData(), format.ext);
    }
    setMenuOpen(false);
  };

  if (variant === 'minimal') {
    return (
      <div className="flex items-center gap-1 relative" ref={menuRef} onClick={e => e.stopPropagation()}>
        <button 
          onClick={(e) => handleCopyAction(onCopy(), 'main', e)} 
          className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors flex items-center gap-1.5"
          title="Copy Plain Text"
        >
          {copiedFormat === 'main' ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
        </button>
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className={`p-1.5 rounded-lg transition-colors flex items-center gap-1 ${menuOpen ? 'bg-indigo-100 text-indigo-700' : 'text-slate-400 hover:text-indigo-600 hover:bg-indigo-50'}`}
          title="Export Options"
        >
          <Download size={16} />
          <ChevronDown size={12} className={`transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`} />
        </button>

        {menuOpen && (
          <div className="absolute right-0 top-full mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-200 z-[70] py-1.5 overflow-hidden animate-in fade-in slide-in-from-top-1">
            {formats.map((format) => (
              <div key={format.id} className="flex items-center px-2 hover:bg-slate-50 transition-colors">
                <button
                  onClick={(e) => handleDownload(format, e)}
                  className="flex-1 text-left py-2 text-xs font-medium text-slate-600 flex items-center gap-2.5"
                >
                  <format.icon size={14} className="text-slate-400" />
                  {format.label}
                </button>
                {!format.isDownloadFunc && (
                  <button
                    onClick={(e) => handleCopyAction(format.getData(), format.id, e)}
                    className="p-1.5 text-slate-400 hover:text-indigo-600 rounded-md"
                    title="Copy content"
                  >
                    {copiedFormat === format.id ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  const renderingItems: { id: 'jsx' | 'html'; label: string; icon: React.ComponentType<{ size?: number; className?: string }>; getData: () => string | Promise<string> }[] = [];
  if (onCopyAsJSX) renderingItems.push({ id: 'jsx', label: 'Copy as JSX', icon: Code, getData: onCopyAsJSX });
  if (onCopyAsHTML) renderingItems.push({ id: 'html', label: 'Copy as HTML', icon: FileCode, getData: onCopyAsHTML });

  return (
    <div className="flex items-center gap-2 bg-white rounded-xl border border-slate-200 p-1 shadow-sm relative" ref={menuRef} onClick={e => e.stopPropagation()}>
      <span className="text-[10px] font-bold text-slate-400 uppercase px-3 tracking-widest">{label}</span>
      <div className="h-4 w-px bg-slate-200 mr-1"></div>
      
      <button 
        onClick={(e) => handleCopyAction(onCopy(), 'main', e)} 
        className="flex items-center space-x-2 px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
      >
        {copiedFormat === 'main' ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
        <span>{copiedFormat === 'main' ? 'Copied!' : 'Copy Text'}</span>
      </button>

      <div className="relative">
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all border border-transparent ${menuOpen ? 'bg-indigo-50 text-indigo-700 border-indigo-100' : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'}`}
          aria-expanded={menuOpen}
          aria-haspopup="true"
        >
          <Download size={14} />
          <span>Export As</span>
          <ChevronDown size={12} className={`opacity-50 transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`} />
        </button>

        {menuOpen && (
          <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-2xl border border-slate-200 z-[70] py-2 overflow-hidden animate-in fade-in slide-in-from-top-2">
            <div className="px-4 py-2 mb-1 border-b border-slate-50">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Select Format</span>
            </div>
            {renderingItems.length > 0 && (
              <>
                {renderingItems.map((item) => (
                  <div key={item.id} className="flex items-center px-2 hover:bg-indigo-50/50 group transition-colors">
                    <button
                      type="button"
                      onClick={(e) => handleCopyRendering(item.getData, item.id, e)}
                      className="flex-1 text-left px-3 py-2.5 text-xs font-semibold text-slate-600 group-hover:text-indigo-700 flex items-center gap-3"
                      aria-label={item.label}
                    >
                      <item.icon size={16} className="text-slate-400 group-hover:text-indigo-500" />
                      {item.label}
                    </button>
                    {copiedFormat === item.id && (
                      <span className="p-2 text-emerald-500" aria-hidden><Check size={14} /></span>
                    )}
                  </div>
                ))}
                <div className="border-t border-slate-100 my-1" />
              </>
            )}
            {formats.map((format) => (
              <div key={format.id} className="flex items-center px-2 hover:bg-indigo-50/50 group transition-colors">
                <button
                  onClick={(e) => handleDownload(format, e)}
                  className="flex-1 text-left px-3 py-2.5 text-xs font-semibold text-slate-600 group-hover:text-indigo-700 flex items-center gap-3"
                >
                  <format.icon size={16} className="text-slate-400 group-hover:text-indigo-500" />
                  {format.label}
                </button>
                {!format.isDownloadFunc && (
                  <button
                    onClick={(e) => handleCopyAction(format.getData(), format.id, e)}
                    className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-100 rounded-lg mr-1 transition-all"
                    title="Copy to clipboard"
                  >
                    {copiedFormat === format.id ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      {copyError && (
        <div className="absolute left-0 right-0 top-full mt-1 px-3 py-2 text-xs font-medium text-rose-700 bg-rose-50 border border-rose-200 rounded-lg z-[80]" role="alert" aria-live="polite">
          {copyError}
        </div>
      )}
    </div>
  );
};