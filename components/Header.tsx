
import React from 'react';

interface HeaderProps {
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  return (
    <header className="w-full h-24 flex items-center justify-between px-8 md:px-16 border-b border-white/5 backdrop-blur-sm bg-black/10">
      <div 
        className="flex items-center gap-3 cursor-pointer group" 
        onClick={onLogoClick}
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-400 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
        <span className="font-serif text-xl tracking-tight text-white/90 group-hover:text-white transition-colors">
          CHRONOS <span className="text-indigo-400">CONVERT</span>
        </span>
      </div>
      
      <nav className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">
        <a href="#" className="hover:text-white transition-colors">Technology</a>
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
        <a href="#" className="px-5 py-2 rounded-full border border-white/10 hover:border-white/30 hover:text-white transition-all bg-white/5">
          Enterprise
        </a>
      </nav>
      
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] text-white/30 uppercase tracking-widest">Local Node Active</span>
      </div>
    </header>
  );
};

export default Header;
