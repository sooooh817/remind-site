import React from 'react';

export const Concept: React.FC = () => {
  return (
    <section className="opacity-0 animate-fade-in-up-delay-3">
      {/* Header matching Location style */}
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-2xl font-serif italic text-deepSage">About</h3>
        <div className="h-[1px] flex-grow bg-deepSage/10"></div>
      </div>

      {/* Dashed Box Container */}
      <div className="w-full rounded-[32px] border-2 border-dashed border-sageGreen/30 bg-white/30 backdrop-blur-sm p-8 relative group transition-all duration-300 hover:bg-white/40 hover:border-sageGreen/50 hover:shadow-lg hover:shadow-sageGreen/5">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-[0.05] rounded-[32px] overflow-hidden pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#5F736A 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        <div className="flex flex-col gap-6 relative z-10">
          <p className="text-[15px] leading-8 text-darkGray font-medium">
            <span className="font-bold text-deepSage">Re:mind</span> は、スタッフ専用の相談窓口です。<br/>愚痴から世間話まで"誰か"を求めるときにご利用ください。
          </p>
          <p className="text-[14px] leading-7 text-darkGray/80">
            わたしもあなたも<br/>上司への報告義務はありません。<br/>
            完全に守秘義務が守られた、<br/>
            あなただけのセーフティゾーンです。
          </p>
        </div>
      </div>
    </section>
  );
};