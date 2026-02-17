import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="text-center mt-12 mb-12 relative px-4">
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Main Headline */}
        <div className="opacity-0 animate-fade-in-up-delay-1">
          <p className="text-xs font-serif italic text-sageGreen mb-4 tracking-[0.2em] uppercase">
            For Staff
          </p>
          <h2 className="text-3xl font-bold leading-relaxed text-deepSage font-sans tracking-wider">
            スタッフのための、<br />
            心の休息所
          </h2>
        </div>

        {/* Sub-text */}
        <div className="opacity-0 animate-fade-in-up-delay-2 max-w-xs mx-auto">
            <p className="text-[15px] text-darkGray/80 leading-8 font-medium">
              日々のノイズを遠ざけて<br/>
              ほっとひと息<br/>心に余白を取り戻す
            </p>
        </div>
      </div>
      
      {/* Abstract Center Glow / Visual */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-sageGreen/20 to-transparent blur-[60px] rounded-full -z-10 pointer-events-none animate-float-slow"></div>
    </section>
  );
};