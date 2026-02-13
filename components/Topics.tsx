import React from 'react';

export const Topics: React.FC = () => {
  // 話題にしやすいトピック10選（ジャンル不問・ポジティブ寄り）
  const topics = [
    { id: 1, icon: '🍰', title: '話題のコンビニ新作スイーツ', desc: 'ローソン：　セブン：　ファミマ：　' },
    { id: 2, icon: '🤖', title: '注目のAI', desc: 'このサイトもAIで作りました。資料作成・資格勉強方法などもお伝えできますよ～' },
    { id: 3, icon: '🍸', title: '今月買った・作ったお酒', desc: '寒菊"凪"、xyz' },
    { id: 4, icon: '🐱', title: '癒しの動物動画チャンネル', desc: '最近AIで動物が喋るやつがあるよね' },
    { id: 5, icon: '👀', title: '経済状況', desc: '円安物価高真っ最中' },
    { id: 6, icon: '📱', title: 'スマホに入れている「逃げ場所」', desc: 'ポケモンスリープ' },
    { id: 7, icon: '🎵', title: '最近聴いてるプレイリスト', desc: '自作作業用Lo-fi' },
    { id: 8, icon: '🎁', title: '最近買ってよかったQOL向上グッズ', desc: 'イヤーウォーマー' },
    { id: 9, icon: '🌸', title: '気になるイベント', desc: 'ポケモン30周年' },
  ];

  return (
    <div className="pb-8">
      <div className="grid grid-cols-1 gap-4">
        {topics.map((item, index) => (
          <div 
            key={item.id} 
            className="glass-card rounded-[20px] p-5 flex items-center gap-5 group hover:bg-white/70 transition-all duration-300"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="text-2xl bg-white/60 w-12 h-12 flex items-center justify-center rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <div className="text-left">
              <h3 className="text-deepSage font-bold text-sm tracking-wide">{item.title}</h3>
              <p className="text-xs text-darkGray/60 mt-1 font-medium">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center opacity-50">
        <p className="text-[10px] font-serif italic text-darkGray">Take a deep breath...</p>
      </div>
    </div>
  );
};