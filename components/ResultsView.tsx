
import React from 'react';

interface ResultsViewProps {
  fileName: string;
  onReset: () => void;
}

const formatConfig = [
  { id: 'pdf', name: 'Premium PDF', ext: '.pdf', icon: '📄', color: 'from-red-500/20 to-orange-500/20', label: 'Archival Grade' },
  { id: 'img', name: 'High-Res Image', ext: '.png', icon: '🖼️', color: 'from-blue-500/20 to-cyan-500/20', label: 'Web Optimized' },
  { id: 'docx', name: 'Word Document', ext: '.docx', icon: '📝', color: 'from-blue-600/20 to-indigo-600/20', label: 'Fully Editable' },
  { id: 'ppt', name: 'Presentation', ext: '.pptx', icon: '📊', color: 'from-orange-500/20 to-yellow-500/20', label: 'Slide Deck' },
  { id: 'short', name: 'Short-form AI', ext: '.mp4', icon: '📱', color: 'from-violet-500/20 to-fuchsia-500/20', label: 'Social Ready', highlight: true },
];

const ResultsView: React.FC<ResultsViewProps> = ({ fileName, onReset }) => {
  const baseName = fileName.split('.').slice(0, -1).join('.');

  return (
    <div className="w-full max-w-6xl space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
        <div className="space-y-4">
          <button 
            onClick={onReset}
            className="group flex items-center gap-2 text-white/40 hover:text-white text-[10px] uppercase tracking-widest transition-colors"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Home
          </button>
          <div className="space-y-1">
            <h2 className="text-4xl font-serif text-white">Conversion Suite Ready</h2>
            <p className="text-white/40 font-light">Processed {fileName} via Local Engine v3.4.1</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-all text-sm shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
            Download All (ZIP)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {formatConfig.map((format, idx) => (
          <div 
            key={format.id}
            className={`group relative p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 overflow-hidden
              ${format.highlight ? 'ring-1 ring-indigo-500/40 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.2)]' : ''}`}
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${format.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            
            <div className="relative z-10 flex flex-col h-full gap-8">
              <div className="flex justify-between items-start">
                <div className="text-4xl">{format.icon}</div>
                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] uppercase tracking-[0.2em] font-semibold text-white/50 group-hover:text-white transition-colors">
                  {format.label}
                </div>
              </div>
              
              <div className="space-y-2 mt-auto">
                <h3 className="text-xl font-serif text-white group-hover:text-indigo-200 transition-colors">
                  {format.name}
                </h3>
                <p className="text-white/30 text-xs font-mono">
                  {baseName}{format.ext}
                </p>
              </div>

              <button className="mt-4 w-full py-4 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-white group-hover:text-black transition-all duration-500 text-[10px] uppercase tracking-widest font-bold">
                Download Now
              </button>
            </div>
          </div>
        ))}

        {/* AI Action Card */}
        <div className="p-8 rounded-[2rem] border border-dashed border-white/10 bg-black/40 flex flex-col items-center justify-center text-center gap-4 group cursor-help transition-all">
          <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-indigo-400 group-hover:border-indigo-400/30 transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
          </div>
          <div className="space-y-1">
            <h4 className="text-white/60 font-medium">Request Custom Logic</h4>
            <p className="text-[10px] text-white/20 uppercase tracking-widest leading-relaxed">Need a specific WASM hook?<br/>Contact Engineering</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsView;
