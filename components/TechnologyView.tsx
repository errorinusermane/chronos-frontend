
import React from 'react';

interface TechnologyViewProps {
  onBack: () => void;
}

const TechnologyView: React.FC<TechnologyViewProps> = ({ onBack }) => {
  return (
    <div className="w-full max-w-4xl space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="space-y-4">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-white/40 hover:text-white text-[10px] uppercase tracking-widest transition-colors"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back
        </button>
        <h2 className="text-5xl font-serif text-white">The Engine</h2>
        <p className="text-indigo-400 uppercase tracking-[0.2em] text-[10px] font-bold">WebAssembly • SIMD Acceleration • Edge Compute</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md space-y-4">
          <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h3 className="text-xl font-serif text-white">Virtual Instruction Set</h3>
          <p className="text-white/40 text-sm leading-relaxed">
            Our core transformation logic is compiled to binary WASM, executing at near-native speeds directly on your CPU. We bypass the browser's JavaScript overhead for heavy lifting.
          </p>
        </div>

        <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md space-y-4">
          <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
          </div>
          <h3 className="text-xl font-serif text-white">Thread Parallelism</h3>
          <p className="text-white/40 text-sm leading-relaxed">
            Using Web Workers and SharedArrayBuffer, we shard file data across all available processor cores. This allows for concurrent multi-format extraction in seconds.
          </p>
        </div>
      </div>

      <div className="p-12 rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-indigo-500/5 to-transparent backdrop-blur-md">
        <div className="max-w-2xl space-y-6">
          <h3 className="text-2xl font-serif text-white italic">Zero Server Latency</h3>
          <p className="text-white/60 leading-relaxed">
            Traditional converters upload to a cloud bucket, queue a job, and wait for a callback. Chronos eliminates the network hop entirely. Your file size is limited only by your local RAM, not our server capacity.
          </p>
          <div className="pt-4 border-t border-white/10 flex gap-12">
            <div>
              <div className="text-2xl text-white font-serif">~2ms</div>
              <div className="text-[10px] uppercase tracking-widest text-white/30">Execution overhead</div>
            </div>
            <div>
              <div className="text-2xl text-white font-serif">100%</div>
              <div className="text-[10px] uppercase tracking-widest text-white/30">Client-Side</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyView;
