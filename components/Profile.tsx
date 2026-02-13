import React from 'react';

export const Profile: React.FC = () => {
  return (
    <section className="opacity-0 animate-fade-in-up-delay-3">
      {/* Header matching Location style */}
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-2xl font-serif italic text-deepSage">Counselor</h3>
        <div className="h-[1px] flex-grow bg-deepSage/10"></div>
      </div>

      {/* Dashed Box Container */}
      <div className="w-full rounded-[32px] border-2 border-dashed border-sageGreen/30 bg-white/30 backdrop-blur-sm p-8 flex flex-col items-center text-center relative group transition-all duration-300 hover:bg-white/40 hover:border-sageGreen/50 hover:shadow-lg hover:shadow-sageGreen/5">
        
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-[0.05] rounded-[32px] overflow-hidden pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#5F736A 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        <div className="relative z-10 flex flex-col items-center w-full">
            {/* Name Display */}
            <h3 className="text-2xl font-bold text-darkGray tracking-wide mb-6">髙橋　宗</h3>

            {/* Qualifications */}
            <div className="flex flex-col gap-3 mb-8 w-full items-center">
              <span className="px-5 py-1.5 bg-sageGreen/10 rounded-full text-xs text-deepSage font-bold border border-sageGreen/20 shadow-sm">
                メンタルヘルス・マネジメント検定Ⅰ種
              </span>
              <span className="px-5 py-1.5 bg-sageGreen/10 rounded-full text-xs text-deepSage font-bold border border-sageGreen/20 shadow-sm">
                メンタルヘルス・マネジメント検定Ⅱ種
              </span>
            </div>

            {/* Message Section */}
            <div className="relative px-2 max-w-sm">
              <p className="text-[14px] leading-8 text-darkGray/90 font-medium relative z-10">
                解決しなくてもいい、<br/>整理がつかなくてもいい。<br/>
                ティータイム感覚で、<br/>ふらっと立ち寄ってください。
              </p>
            </div>
        </div>
      </div>
    </section>
  );
};