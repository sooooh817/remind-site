import React, { useEffect, useState } from 'react';

interface TabItem {
  id: string;
  label: string;
}

interface NavigationProps {
  tabs: TabItem[];
}

export const Navigation: React.FC<NavigationProps> = ({ tabs }) => {
  const [activeId, setActiveId] = useState('');

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // ヘッダーやナビゲーションの分のオフセットを考慮
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  // Highlight tab on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for sticky header check

      let currentSectionId = '';
      for (const tab of tabs) {
        const element = document.getElementById(tab.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSectionId = tab.id;
          }
        }
      }
      if (currentSectionId) {
        setActiveId(currentSectionId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tabs]);

  return (
    <nav className="sticky top-4 z-40 px-4 py-3 mx-4 mt-2 rounded-2xl glass-card border-white/50 shadow-sm transition-all duration-300">
      <ul className="flex justify-evenly items-center text-sm font-serif italic tracking-wide">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <a
              href={`#${tab.id}`}
              onClick={(e) => scrollToSection(e, tab.id)}
              className={`relative px-4 py-1 transition-colors duration-300 block ${
                activeId === tab.id 
                  ? 'text-deepSage font-semibold' 
                  : 'text-darkGray/60 hover:text-sageGreen'
              }`}
            >
              {tab.label}
              {activeId === tab.id && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-sageGreen rounded-full"></span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};