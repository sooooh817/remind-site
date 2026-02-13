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

export default function App() {
  // タブの状態管理 ('home' か 'relax' か)
  const [activeTab, setActiveTab] = useState<'home' | 'relax'>('home');

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
        
        {/* Scroll Navigation (Only visible on Home) */}
        {activeTab === 'home' && <Navigation />}
        
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
            <div className="animate-fade-in-up flex flex-col gap-12">
              <div className="text-center">
                <h2 className="text-3xl font-serif italic text-deepSage mb-3">Relax Room</h2>
                <p className="text-xs text-darkGray/60 font-medium tracking-wide leading-relaxed">
                  心と体を解きほぐす、<br/>オフの時間。
                </p>
              </div>

              {/* Breathing Tool */}
              <Breath />

              {/* Chat Topics */}
              <div className="flex flex-col gap-6">
                 <div className="flex items-center gap-4 px-2">
                    <h3 className="text-lg font-serif italic text-deepSage/40">Chat Topics</h3>
                    <div className="h-[1px] flex-grow bg-deepSage/10"></div>
                 </div>
                 <Topics />
              </div>
            </div>
          )}
        </div>

        <Footer />
      </main>
    </div>
  );
}