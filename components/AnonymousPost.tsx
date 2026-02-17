import React, { useState } from 'react';
import { Send, Mail, CheckCircle2 } from 'lucide-react';

// TODO: ここに発行されたGoogle Apps ScriptのウェブアプリURLを貼り付けてください
// 例: "https://script.google.com/macros/s/xxxxxxxxxxxxxxxxxxxxxxxxx/exec"
const GAS_API_URL = "https://script.google.com/macros/s/AKfycbxRwLdrePXbcTOPzjsdo5ItMVMwUQEuGfmjo4rIAOMdGwfT3atbuqKMn7oVcYUWf9S6/exec";

export const AnonymousPost: React.FC = () => {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    
    setIsSending(true);
    
    try {
      // Google Apps ScriptへのPOST送信
      // mode: 'no-cors' は使用せず、一般的なfetchを使用
      const response = await fetch(GAS_API_URL, {
        method: 'POST',
        headers: {
          // GASのCORS制限を回避しやすくするため text/plain を指定
          // GAS側では e.postData.contents で受け取る想定
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify({ message: text }),
      });

      if (response.ok) {
        setIsSent(true);
        setText('');
      } else {
        throw new Error('送信に失敗しました。ステータスコード: ' + response.status);
      }

    } catch (error) {
      console.error('送信エラー:', error);
      alert('手紙を届けることができませんでした。通信環境を確認するか、しばらく経ってからお試しください。');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="glass-card rounded-[32px] p-8 text-center relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-sageGreen/5">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sageGreen/20 to-transparent"></div>

      <div className="flex flex-col items-center mb-6 relative z-10">
        <div className="flex items-center gap-2 mb-3 text-deepSage/50 bg-white/40 px-3 py-1 rounded-full border border-white/60">
            <Mail size={12} />
            <span className="text-[10px] tracking-widest uppercase font-bold">Letter Room</span>
        </div>
        
        <h3 className="text-2xl font-serif italic text-deepSage mb-4">Letter</h3>
        
        <p className="text-[13px] text-darkGray/70 font-medium leading-7 tracking-wide">
          誰とも話したくないけれど、<br/>
          このモヤモヤだけは吐き出したい。<br/>
          そんな時はここに手紙を置いていって<br/>ください。<br/>
          手紙は管理者にのみ届きます。
        </p>
      </div>

      {isSent ? (
        <div className="py-10 animate-fade-in-up flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-sageGreen/10 rounded-full flex items-center justify-center text-deepSage border border-sageGreen/20">
                <CheckCircle2 size={28} />
            </div>
            <div className="space-y-2">
                <h4 className="text-lg font-bold text-deepSage">受け取りました。</h4>
                <p className="text-xs text-darkGray/60 leading-relaxed">
                    あなたの手紙は、<br/>
                    ここに大切に預かっておきます。<br/>
                    少しでも心が軽くなりますように。
                </p>
            </div>
            <button 
                onClick={() => setIsSent(false)}
                className="mt-6 text-[11px] text-deepSage/60 underline underline-offset-4 hover:text-deepSage transition-colors"
            >
                もう一度書く
            </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full relative z-10 animate-fade-in-up">
            <div className="relative mb-6 group">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="ここに手紙を書き出してみましょう..."
                    disabled={isSending}
                    className="w-full h-40 p-6 rounded-[24px] bg-white/40 border border-white/60 text-darkGray text-sm leading-relaxed placeholder:text-darkGray/30 focus:outline-none focus:bg-white/70 focus:border-sageGreen/40 focus:ring-4 focus:ring-sageGreen/5 transition-all resize-none shadow-inner disabled:opacity-50 disabled:cursor-not-allowed"
                />
                {/* 文字数カウンターのような装飾 */}
                <div className="absolute bottom-4 right-6 text-[10px] text-darkGray/30 select-none pointer-events-none">
                    {text.length} chars
                </div>
            </div>
            
            <button
                type="submit"
                disabled={!text.trim() || isSending}
                className={`
                    flex items-center justify-center gap-2 mx-auto px-8 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300
                    ${(!text.trim() || isSending)
                        ? 'bg-gray-200/50 text-gray-400 border border-gray-200 cursor-not-allowed' 
                        : 'bg-deepSage text-white shadow-lg shadow-deepSage/20 hover:shadow-xl hover:scale-105 hover:bg-[#4E6058]'
                    }
                `}
            >
                {isSending ? (
                    <span className="animate-pulse">Sending...</span>
                ) : (
                    <>
                        <span>Send Letter</span>
                        <Send size={14} />
                    </>
                )}
            </button>
        </form>
      )}
    </section>
  );
};