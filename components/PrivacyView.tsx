
import React from 'react';

interface PrivacyViewProps {
  onBack: () => void;
}

const PrivacyView: React.FC<PrivacyViewProps> = ({ onBack }) => {
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
        <h2 className="text-5xl font-serif text-white">Privacy by Architecture</h2>
        <p className="text-emerald-400 uppercase tracking-[0.2em] text-[10px] font-bold">Non-Custodial • Air-Gapped Potential • Sovereign</p>
      </div>

      <div className="relative p-12 rounded-[2.5rem] border border-white/5 bg-white/[0.01] overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
        </div>
        
        <div className="relative z-10 space-y-8">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-serif text-white mb-6 leading-tight">Your files never leave your sight.</h3>
            <p className="text-white/60 text-lg leading-relaxed">
              Most "free" tools online pay for their servers by analyzing your data. We don't have servers for your data. The code runs in your browser sandbox, meaning even we cannot see what you are converting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-white/5">
            <div className="space-y-3">
              <div className="text-white font-medium uppercase tracking-widest text-[10px]">No Logs</div>
              <p className="text-white/30 text-xs leading-relaxed">We don't track filenames, sizes, or metadata. Our analytics only track interface interactions.</p>
            </div>
            <div className="space-y-3">
              <div className="text-white font-medium uppercase tracking-widest text-[10px]">Ephemeral</div>
              <p className="text-white/30 text-xs leading-relaxed">Data lives in your computer's RAM. When you close the tab, every trace is wiped by the OS.</p>
            </div>
            <div className="space-y-3">
              <div className="text-white font-medium uppercase tracking-widest text-[10px]">GDPR Compliant</div>
              <p className="text-white/30 text-xs leading-relaxed">By design, we exceed all global privacy standards because we never possess the data.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 rounded-3xl bg-indigo-500/5 border border-indigo-500/10">
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-indigo-400 animate-pulse" />
            </div>
            <div className="space-y-1">
                <h4 className="text-white font-serif italic">Audit the Source</h4>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">Open-Source WASM modules coming soon</p>
            </div>
        </div>
        <button className="text-[11px] uppercase tracking-[0.2em] font-bold text-indigo-400 hover:text-white transition-colors">
            Read Security Whitepaper →
        </button>
      </div>
    </div>
  );
};

export default PrivacyView;
