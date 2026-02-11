
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="text-center space-y-6">
      <div className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-[10px] uppercase tracking-[0.3em] mb-4 backdrop-blur-md">
        Next Generation File Interaction
      </div>
      <div className="relative inline-block">
        <h1 className="relative z-10 text-5xl md:text-7xl font-serif leading-[1.1] text-white">
          Transform anything.<br />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-violet-300">
            Seamlessly local.
          </span>
        </h1>
        {/* Decorative Highlight Block from Screenshot */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-full h-[40%] bg-indigo-500/20 backdrop-blur-sm -z-0 rounded-sm scale-110" />
      </div>
      <p className="max-w-2xl mx-auto text-lg text-white/40 font-light leading-relaxed">
        We've removed the decision. No choosing formats, no cloud uploads, no waiting. 
        Just drop your file and receive every dimension of your content.
      </p>
    </div>
  );
};

export default Hero;
