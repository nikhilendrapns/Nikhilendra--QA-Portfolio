/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsGrid from './components/StatsGrid';
import FeaturedPrograms from './components/FeaturedPrograms';
import TechnicalSkills from './components/TechnicalSkills';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Footer from './components/Footer';
import RecruiterConsole from './components/RecruiterConsole';
import InteractiveDotsBg from './components/InteractiveDotsBg';
import { SECTIONS } from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);

  // Scrollspy implementation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // Offset for better snap action
      
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const sectionId = SECTIONS[i].id;
        const element = document.getElementById(sectionId);
        
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const hOffset = document.getElementById('header-nav')?.offsetHeight || 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - hOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-cyber-bg text-gray-100 flex flex-col font-sans select-none antialiased selection:bg-cyber-cyan selection:text-black">
      
      {/* Decorative Outer Grids */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#000000]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.004)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.004)_1px,_transparent_1px)] bg-[size:64px_64px]" />
        <InteractiveDotsBg />
      </div>

      {/* Persistent Components */}
      <Header
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
        onOpenConsole={() => setIsConsoleOpen(true)}
      />

      {/* Main Sections Body */}
      <main className="flex-1 relative z-10 w-full">
        <Hero
          onExploreClick={() => handleSectionClick('experience')}
          onOpenConsole={() => setIsConsoleOpen(true)}
        />
        
        <StatsGrid />
        
        <FeaturedPrograms />
        
        <TechnicalSkills />
        
        <Experience />
        
        <Leadership />
      </main>

      {/* Consolidated Footer */}
      <Footer />

      {/* Dynamic interactive recruiter prompt console */}
      <RecruiterConsole
        isOpen={isConsoleOpen}
        onClose={() => setIsConsoleOpen(false)}
      />
    </div>
  );
}
