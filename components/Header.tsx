
import React from 'react';
import { AppState } from '../App';

interface HeaderProps {
  onLogoClick: () => void;
  onTechClick: () => void;
  onPrivacyClick: () => void;
  onEnterpriseClick: () => void;
  currentState: AppState;
}

const Header: React.FC<HeaderProps> = ({ 
  onLogoClick, 
  onTechClick, 
  onPrivacyClick, 
  onEnterpriseClick,
  currentState 
}) => {
  const getNavLinkClass = (state: AppState) => {
    const baseClass = "px-5 py-2 rounded-full transition-all duration-300 uppercase tracking-[0.2em] text-[11px] font-medium";
    const isActive = currentState === state;
    
    return isActive 
      ? `${baseClass} border border-white/20 bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]`
      : `${baseClass} border border-transparent text-white/50 hover:text-white hover:border-white/10 hover:bg-white/5`;
  };

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
      
      <nav className="hidden md:flex items-center gap-4">
        <button 
          onClick={onTechClick}
          className={getNavLinkClass(AppState.TECH)}
        >
          Technology
        </button>
        <button 
          onClick={onPrivacyClick}
          className={getNavLinkClass(AppState.PRIVACY)}
        >
          Privacy
        </button>
        <button 
          onClick={onEnterpriseClick}
          className={getNavLinkClass(AppState.ENTERPRISE)}
        >
          Enterprise
        </button>
      </nav>
      
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] text-white/30 uppercase tracking-widest">Local Node Active</span>
      </div>
    </header>
  );
};

export default Header;
