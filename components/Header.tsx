import React from 'react';

interface HeaderProps {
  activeTab?: 'home' | 'relax' | 'letter';
  setActiveTab?: (tab: 'home' | 'relax' | 'letter') => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="w-full flex justify-between items-end pt-8 pb-4 px-6 relative opacity-0 animate-fade-in-up z-50">
      
      {/* Logo Container - Left Aligned */}
      <div className="relative group cursor-default text-left z-10">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-16 bg-white/60 blur-[25px] rounded-full pointer-events-none"></div>
        
        {/* Main Logo Text - Slightly smaller to avoid crowding */}
        <h1 className="relative z-10 text-4xl md:text-5xl font-serif font-medium tracking-[0.05em] italic drop-shadow-sm select-none leading-none">
          <span className="bg-gradient-to-br from-[#5F736A] via-[#7A9589] to-[#5F736A] bg-clip-text text-transparent">
            Re
          </span>
          <span className="text-[#8DA399] inline-block animate-pulse mx-0.5" style={{ animationDuration: '4s' }}>
            :
          </span>
          <span className="bg-gradient-to-br from-[#5F736A] via-[#7A9589] to-[#5F736A] bg-clip-text text-transparent">
            mind
          </span>
        </h1>

        {/* Sub Tagline */}
        <p className="relative z-10 mt-2 text-[8px] text-[#5F736A]/60 font-sans tracking-[0.3em] uppercase font-medium ml-1">
          Mental Health Support
        </p>
      </div>

      {/* Top Right Switcher - Flex item instead of absolute to prevent overlap */}
      {setActiveTab && (
        <div className="flex items-center gap-2 bg-white/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/50 shadow-sm transition-all duration-300 hover:bg-white/60 z-50 cursor-pointer ml-4 mb-1">
          <button
            onClick={() => setActiveTab('home')}
            className={`text-[11px] font-serif italic transition-all duration-300 ${
              activeTab === 'home' 
                ? 'text-deepSage font-bold' 
                : 'text-darkGray/40 hover:text-sageGreen'
            }`}
          >
            Home
          </button>
          
          <span className="text-darkGray/20 text-[10px] font-light">/</span>
          
          <button
            onClick={() => setActiveTab('relax')}
            className={`text-[11px] font-serif italic transition-all duration-300 ${
              activeTab === 'relax' 
                ? 'text-deepSage font-bold' 
                : 'text-darkGray/40 hover:text-sageGreen'
            }`}
          >
            Relax
          </button>

          <span className="text-darkGray/20 text-[10px] font-light">/</span>

          <button
            onClick={() => setActiveTab('letter')}
            className={`text-[11px] font-serif italic transition-all duration-300 ${
              activeTab === 'letter' 
                ? 'text-deepSage font-bold' 
                : 'text-darkGray/40 hover:text-sageGreen'
            }`}
          >
            Letter
          </button>
        </div>
      )}
    </header>
  );
};