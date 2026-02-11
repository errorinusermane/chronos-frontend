
import React from 'react';

interface EnterpriseViewProps {
  onBack: () => void;
}

const EnterpriseView: React.FC<EnterpriseViewProps> = ({ onBack }) => {
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
        <h2 className="text-5xl font-serif text-white">Scale for Teams</h2>
        <p className="text-violet-400 uppercase tracking-[0.2em] text-[10px] font-bold">Custom Hooks • SSO Integration • Dedicated WASM Instances</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md space-y-4">
          <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
          </div>
          <h3 className="text-xl font-serif text-white">Custom Pipelines</h3>
          <p className="text-white/40 text-sm leading-relaxed">
            Build specialized conversion logic tailored to your company's proprietary formats. Our engineering team helps you compile these into your own private WASM modules.
          </p>
        </div>

        <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md space-y-4">
          <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m22-2v2m-4-2a4 4 0 01-4-4h-1m1.5-6.5a3 3 0 11-6 0 3 3 0 016 0zM9 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </div>
          <h3 className="text-xl font-serif text-white">Unlimited Compute</h3>
          <p className="text-white/40 text-sm leading-relaxed">
            Grant your team access to high-performance local processing without per-user cloud costs. Efficient utilization of your existing hardware investments.
          </p>
        </div>
      </div>

      <div className="p-12 rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-violet-500/5 to-transparent backdrop-blur-md text-center flex flex-col items-center">
        <h3 className="text-3xl font-serif text-white mb-6">Secure Your Data Flow</h3>
        <p className="text-white/50 max-w-xl mb-8 leading-relaxed">
          Chronos Enterprise is currently in invite-only beta. Join the waitlist to receive a demo of our sovereign file transformation platform.
        </p>
        <button className="px-10 py-4 rounded-full bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-indigo-50 transition-colors shadow-lg shadow-indigo-500/10">
          Request Early Access
        </button>
      </div>
    </div>
  );
};

export default EnterpriseView;
