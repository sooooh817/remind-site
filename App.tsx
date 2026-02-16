import React, { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Concept } from './components/Concept';
import { Profile } from './components/Profile';
import { Access } from './components/Access';
import { Footer } from './components/Footer';
import { BackgroundElements } from './components/BackgroundElements';
import { Breath } from './components/Breath';
import { Topics } from './components/Topics';
import { Gamepad2 } from 'lucide-react';

export default function App() {
  // タブの状態管理 ('home' か 'relax' か)
  const [activeTab, setActiveTab] = useState<'home' | 'relax'>('home');

  // ナビゲーション設定
  const homeTabs = [
    { id: 'about', label: 'About' },
    { id: 'profile', label: 'Profile' },
    { id: 'location', label: 'Access' },
  ];

  const relaxTabs = [
    { id: 'breath', label: 'Breath' },
    { id: 'topics', label: 'Topics' },
    { id: 'game', label: 'Game' },
  ];

  return (
    // min-h-screen ensures full height. 
    // bg-transparent allows fixed background to show through.
    <div className="relative min-h-screen font-sans text-darkGray selection:bg-sageGreen selection:text-white pb-20">
      
      {/* Decorative Background (Fixed at lowest z-index) */}
      <BackgroundElements />

      {/* Noise Texture Overlay (Fixed over background, under content) */}
      <div className="fixed inset-0 pointer-events-none z-[-40] bg-noise opacity-[0.03]"></div>

      {/* Main Content Container (Relative z-10 to sit above background) */}
      <main className="relative z-10 max-w-lg mx-auto min-h-screen flex flex-col">
        {/* Header with Top-Right Switcher */}
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Scroll Navigation (Context aware) */}
        {activeTab === 'home' && <Navigation tabs={homeTabs} />}
        {activeTab === 'relax' && <Navigation tabs={relaxTabs} />}
        
        <div className="flex flex-col gap-20 px-8 py-8 min-h-[80vh]">
          
          {/* === HOME TAB CONTENT === */}
          {activeTab === 'home' && (
            <div className="flex flex-col gap-20 animate-fade-in-up">
              <Hero />
              
              <div id="about" className="scroll-mt-32">
                <Concept />
              </div>
              
              <div id="profile" className="scroll-mt-32">
                <Profile />
              </div>
              
              <div id="location" className="scroll-mt-32">
                <Access />
              </div>
            </div>
          )}

          {/* === RELAX ROOM CONTENT === */}
          {activeTab === 'relax' && (
            <div className="animate-fade-in-up flex flex-col gap-16">
              <div className="text-center mt-4">
                <h2 className="text-3xl font-serif italic text-deepSage mb-3">Relax Room</h2>
                <p className="text-xs text-darkGray/60 font-medium tracking-wide leading-relaxed">
                  心と体を解きほぐす、<br/>オフの時間。
                </p>
              </div>

              {/* Breathing Tool */}
              <div id="breath" className="scroll-mt-32">
                <Breath />
              </div>

              {/* Chat Topics */}
              <div id="topics" className="scroll-mt-32 flex flex-col gap-6">
                 <div className="flex items-center gap-4 px-2">
                    <h3 className="text-lg font-serif italic text-deepSage/40">Chat Topics</h3>
                    <div className="h-[1px] flex-grow bg-deepSage/10"></div>
                 </div>
                 <Topics />
              </div>

              {/* Game Section (Placeholder) */}
              <div id="game" className="scroll-mt-32 flex flex-col gap-6">
                 <div className="flex items-center gap-4 px-2">
                    <h3 className="text-lg font-serif italic text-deepSage/40">Mini Game</h3>
                    <div className="h-[1px] flex-grow bg-deepSage/10"></div>
                 </div>
                 
                 <div className="glass-card rounded-[32px] p-8 flex flex-col items-center text-center gap-4 py-12">
                    <div className="w-16 h-16 bg-sageGreen/10 rounded-full flex items-center justify-center mb-2">
                      <Gamepad2 className="text-deepSage opacity-50 w-8 h-8" />
                    </div>
                    <h4 className="text-deepSage font-bold text-lg">Coming Soon...</h4>
                    <p className="text-xs text-darkGray/60 leading-relaxed">
                      所要時間5～10分程度の<br/>
                      ミニゲームを準備中です。<br/>
                      ランキングにも対応。
                    </p>
                 </div>
              </div>

            </div>
          )}
        </div>

        <Footer />
      </main>
    </div>
  );
}