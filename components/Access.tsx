import React from 'react';
import { MapPin, Clock } from 'lucide-react';

export const Access: React.FC = () => {
  return (
    <section id="location" className="scroll-mt-24 flex flex-col items-center justify-center gap-6 text-center">
      
      <h2 className="text-xl font-serif italic text-deepSage mb-4">Access</h2>

      {/* 場所と時間を統合したカード */}
      <div className="bg-white/50 backdrop-blur-sm border-dashed border-2 border-deepSage/20 rounded-[2rem] p-8 w-full max-w-sm flex flex-col items-center shadow-sm">
        
        {/* --- 場所セクション --- */}
        <div className="flex flex-col items-center justify-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
            <MapPin className="text-deepSage w-8 h-8" strokeWidth={1.5} />
          </div>
          <p className="text-2xl font-bold text-darkGray tracking-wider font-['Zen_Maru_Gothic']">
            ST室①
          </p>
        </div>

        {/* 区切り線 */}
        <div className="w-full h-px bg-deepSage/10 my-2"></div>

        {/* --- 時間セクション --- */}
        <div className="flex flex-col items-center justify-center gap-2 mt-6">
          <div className="flex items-center gap-2 text-deepSage/60 uppercase tracking-widest text-[10px] font-bold mb-1">
            <Clock className="w-3 h-3" />
            <span>Open Hours</span>
          </div>
          
          {/* フォント修正箇所：Zen Maru Gothicを適用し、イタリックを削除 */}
          <div className="font-['Zen_Maru_Gothic'] text-darkGray">
            <div className="flex items-baseline justify-center gap-1 text-lg">
              <span className="text-darkGray/80">毎月第</span>
              {/* 数字を大きく、色をつけて強調 */}
              <span className="text-3xl font-bold text-deepSage mx-1">1・3</span>
              <span className="text-darkGray/80">日曜日</span>
            </div>
            {/* 時間の数字も読みやすく、少し文字間隔を広げてオシャレに */}
            <p className="text-2xl mt-1 font-bold tracking-widest text-deepSage">
              17:00 - 17:30
            </p>
          </div>

          <p className="text-xs text-darkGray/50 font-medium mt-3">
            ※予約不要。時間内ならいつでもどうぞ。
          </p>
        </div>

      </div>
    </section>
  );
};