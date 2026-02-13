import React, { useEffect, useState } from 'react';

export const Navigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('');

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'profile', label: 'Profile' },
    { id: 'location', label: 'Location' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(id);
    }
  };

  // Optional: Highlight tab on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for sticky header

      for (const tab of tabs) {
        const element = document.getElementById(tab.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(tab.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 px-4 py-3 mx-4 mt-2 rounded-2xl glass-card border-white/50 shadow-sm transition-all duration-300">
      <ul className="flex justify-evenly items-center text-sm font-serif italic tracking-wide">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <a
              href={`#${tab.id}`}
              onClick={(e) => scrollToSection(e, tab.id)}
              className={`relative px-4 py-1 transition-colors duration-300 ${
                activeTab === tab.id 
                  ? 'text-deepSage font-semibold' 
                  : 'text-darkGray/60 hover:text-sageGreen'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-sageGreen rounded-full"></span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};