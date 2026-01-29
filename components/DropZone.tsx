
import React, { useState, useCallback } from 'react';

interface DropZoneProps {
  onFileAccepted: (file: File) => void;
}

const DropZone: React.FC<DropZoneProps> = ({ onFileAccepted }) => {
  const [isDragging, setIsDragging] = useState(false);

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFileAccepted(e.dataTransfer.files[0]);
    }
  }, [onFileAccepted]);

  const onFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onFileAccepted(e.target.files[0]);
    }
  }, [onFileAccepted]);

  return (
    <div 
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={`relative group cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
        ${isDragging ? 'scale-[1.02]' : 'scale-100'}`}
    >
      <input 
        type="file" 
        className="hidden" 
        id="file-input"
        onChange={onFileInputChange}
      />
      
      <label 
        htmlFor="file-input"
        className={`flex flex-col items-center justify-center w-full min-h-[300px] rounded-3xl border border-dashed transition-all duration-700
          ${isDragging 
            ? 'border-indigo-400 bg-indigo-500/10 shadow-[0_0_80px_-20px_rgba(99,102,241,0.4)]' 
            : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]'}`}
      >
        {/* Animated Glow Elements */}
        <div className={`absolute inset-0 rounded-3xl overflow-hidden pointer-events-none`}>
           <div className={`absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent transition-opacity duration-700 ${isDragging ? 'opacity-100' : 'opacity-0'}`} />
           <div className={`absolute bottom-0 right-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent transition-opacity duration-700 ${isDragging ? 'opacity-100' : 'opacity-0'}`} />
        </div>

        <div className="relative z-10 space-y-8 text-center px-12">
          <div className="flex justify-center">
            <div className={`p-6 rounded-2xl bg-white/5 border border-white/10 transition-all duration-700 ${isDragging ? 'rotate-180 scale-125 bg-indigo-500/20' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
              </svg>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-2xl font-serif text-white/90">Click to import or drag here</h3>
            <p className="text-white/30 text-sm font-light uppercase tracking-[0.15em]">PDF &bull; DOCX &bull; PPT &bull; JPG &bull; PNG</p>
          </div>
          
          <div className="pt-4 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] uppercase tracking-widest text-white/40">
              <svg className="w-3 h-3 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              Encrypted locally
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] uppercase tracking-widest text-white/40">
              <svg className="w-3 h-3 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Instant WASM
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default DropZone;
