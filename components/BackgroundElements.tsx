import React from 'react';

export const BackgroundElements: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-[#F9F7F2]">
      <style>{`
        @keyframes float-center {
          0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
          50% { transform: translate(-50%, -50%) scale(1.1) rotate(5deg); }
          100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
        }
        @keyframes float-corner-1 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, 20px) scale(1.1); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes float-corner-2 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, -20px) scale(1.1); }
          100% { transform: translate(0, 0) scale(1); }
        }
        
        .animate-center-blob {
          animation: float-center 20s ease-in-out infinite;
        }
        .animate-corner-1 {
          animation: float-corner-1 15s ease-in-out infinite;
        }
        .animate-corner-2 {
          animation: float-corner-2 18s ease-in-out infinite;
        }
      `}</style>

      {/* 
         STRATEGY:
         Use a massive central blob to ensure text is backed by color.
         Use corner blobs to fill gaps.
      */}

      {/* 1. Main Central Gradient Blob (Ensures text has background) */}
      <div className="absolute top-1/2 left-1/2 w-[120vw] h-[120vw] md:w-[800px] md:h-[800px] bg-gradient-to-tr from-[#FFD1DC] via-[#FDFD96] to-[#AEC6CF] rounded-full mix-blend-multiply filter blur-[90px] opacity-50 animate-center-blob"></div>

      {/* 2. Top Left Accent (Sage/Mint) */}
      <div className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-[#B0F2C2] rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-corner-1"></div>
      
      {/* 3. Bottom Right Accent (Lavender) */}
      <div className="absolute bottom-0 right-0 w-[70vw] h-[70vw] bg-[#E6E6FA] rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-corner-2"></div>

      {/* 4. Top Right Floating (Pink) */}
      <div className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] bg-[#FFD1DC] rounded-full mix-blend-multiply filter blur-[60px] opacity-50 animate-corner-2"></div>
      
      {/* 5. Bottom Left Floating (Blue) */}
      <div className="absolute bottom-[10%] left-[10%] w-[40vw] h-[40vw] bg-[#AEC6CF] rounded-full mix-blend-multiply filter blur-[60px] opacity-50 animate-corner-1"></div>
    </div>
  );
};