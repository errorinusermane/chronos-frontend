
import React from 'react';

interface ProcessingOverlayProps {
  fileName: string;
}

const ProcessingOverlay: React.FC<ProcessingOverlayProps> = ({ fileName }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl animate-in fade-in duration-500">
      <div className="max-w-md w-full px-8 text-center space-y-12">
        <div className="relative flex justify-center">
          <div className="w-32 h-32 rounded-full border border-indigo-500/30 animate-[spin_4s_linear_infinite]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-indigo-500/20 blur-xl animate-pulse" />
            <svg className="w-10 h-10 text-indigo-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-serif text-white tracking-tight">Extracting essence...</h2>
          <div className="flex items-center justify-center gap-2 text-indigo-400/60 font-mono text-[10px] tracking-widest uppercase">
            <span>In-Browser Transformer v3.4.1</span>
            <span className="w-1 h-1 rounded-full bg-indigo-500" />
            <span>Local Cache Active</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-500 animate-[loading_3.5s_ease-in-out_forwards]" />
          </div>
          <div className="flex justify-between text-[9px] uppercase tracking-widest text-white/30 font-medium">
            <span>Analyzing: {fileName}</span>
            <span>84% Complete</span>
          </div>
        </div>
        
        <p className="text-xs text-white/20 italic font-light">
          "Your content stays on your device. We use WebAssembly to compute locally."
        </p>
      </div>

      <style>{`
        @keyframes loading {
          0% { width: 0%; }
          20% { width: 15%; }
          40% { width: 50%; }
          70% { width: 85%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default ProcessingOverlay;
