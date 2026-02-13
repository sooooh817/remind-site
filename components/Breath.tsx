import React, { useState, useEffect } from 'react';
import { Wind } from 'lucide-react';

export const Breath: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState('Ready');
  const [instruction, setInstruction] = useState('スタートボタンを押してください');
  const [phase, setPhase] = useState<'idle' | 'inhale' | 'hold' | 'exhale'>('idle');
  
  // アニメーションの管理
  useEffect(() => {
    if (!isActive) {
      setPhase('idle');
      setText('Ready');
      setInstruction('スタートボタンを押してください');
      return;
    }

    const runCycle = () => {
      // 1. 吸う (4秒)
      setPhase('inhale');
      setText('Inhale');
      setInstruction('鼻からゆっくり息を吸い込みます...');

      setTimeout(() => {
        if (!isActive) return;
        // 2. 止める (2秒)
        setPhase('hold');
        setText('Hold');
        setInstruction('息を止めて、酸素を巡らせます...');
        
        setTimeout(() => {
          if (!isActive) return;
          // 3. 吐く (6秒)
          setPhase('exhale');
          setText('Exhale');
          setInstruction('口から細く長く息を吐き切ります...');
        }, 2000); // 止め終わり

      }, 4000); // 吸い終わり
    };

    runCycle(); // 初回実行
    const interval = setInterval(runCycle, 12000); // 4+2+6=12秒サイクル

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <section className="glass-card rounded-[32px] p-8 opacity-0 animate-fade-in-up-delay-3 text-center relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-sageGreen/30 to-transparent"></div>
      
      <div className="flex flex-col items-center mb-6">
        <h3 className="text-2xl font-serif italic text-deepSage mb-2">Deep Breath</h3>
        <p className="text-[13px] text-darkGray/70 font-medium">
          画面の動きに合わせて、<br />深くゆっくり呼吸しましょう。
        </p>
      </div>

      {/* Breathing Circle Animation */}
      <div className="relative w-56 h-56 mx-auto mb-8 flex justify-center items-center">
        {/* Outer Glow Ring */}
        <div className={`absolute inset-0 rounded-full border border-sageGreen/10 transition-all duration-1000 ${
           phase === 'inhale' ? 'scale-110 opacity-100' : 'scale-100 opacity-50'
        }`}></div>

        {/* Animated Circle */}
        <div 
          className={`
            relative z-10 flex flex-col justify-center items-center rounded-full shadow-2xl shadow-sageGreen/20 backdrop-blur-md
            transition-all ease-in-out
            ${phase === 'inhale' ? 'w-48 h-48 bg-sageGreen text-white' : ''}
            ${phase === 'hold' ? 'w-48 h-48 bg-deepSage text-white' : ''}
            ${phase === 'exhale' ? 'w-32 h-32 bg-white text-sageGreen border border-sageGreen/30' : ''}
            ${phase === 'idle' ? 'w-32 h-32 bg-white text-darkGray border border-gray-200' : ''}
          `}
          style={{ 
            transitionDuration: phase === 'inhale' ? '4000ms' : (phase === 'exhale' ? '6000ms' : '500ms')
          }}
        >
          {phase !== 'idle' && <Wind size={20} className={`mb-1 opacity-80 ${phase === 'exhale' ? 'animate-pulse' : ''}`} />}
          <span className="font-serif italic text-xl tracking-wider">{text}</span>
        </div>
        
        {/* Particle/Ring effects for visual flair */}
        <div className={`absolute inset-4 border border-sageGreen/20 rounded-full transition-transform duration-[6000ms] ${phase === 'exhale' ? 'scale-150 opacity-0' : 'scale-90 opacity-100'}`}></div>
      </div>

      <div className="min-h-[3rem] mb-6 px-4">
        <p className="text-deepSage text-sm font-bold tracking-wide transition-all duration-500">
          {instruction}
        </p>
      </div>

      <button 
        onClick={() => setIsActive(!isActive)}
        className={`
          group relative px-8 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500 overflow-hidden
          ${isActive 
            ? 'bg-transparent text-deepSage border border-deepSage/30 hover:bg-deepSage/5' 
            : 'bg-deepSage text-white shadow-lg shadow-deepSage/30 hover:shadow-xl hover:scale-105'
          }
        `}
      >
        <span className="relative z-10">{isActive ? 'Stop' : 'Start Practice'}</span>
        {!isActive && <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>}
      </button>
    </section>
  );
};