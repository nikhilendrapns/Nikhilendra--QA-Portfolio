import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SECTIONS, PERSONAL_DETAILS } from '../data';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onSectionClick: (id: string) => void;
  onOpenConsole: () => void;
}

export default function Header({ activeSection, onSectionClick, onOpenConsole }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    onSectionClick(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-black/85 backdrop-blur-md border-b border-zinc-900 shadow-lg'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo and Status */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('about')}
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-md bg-zinc-90 w-full h-full border border-zinc-800 bg-zinc-950">
              <span className="text-xs font-bold font-display text-white">
                PN
              </span>
              {/* Online indicator */}
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-black" />
            </div>
            
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold tracking-wide font-display text-white group-hover:text-cyan-400 transition-colors">
                {PERSONAL_DETAILS.name}
              </span>
              <span className="text-[9px] text-zinc-500 font-mono tracking-wider uppercase">
                Lead QA Engineer & SDET
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav aria-label="Desktop navigation" className="hidden lg:flex items-center gap-1">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className={`px-4 py-2 text-xs font-medium font-display tracking-wider transition-all rounded-md cursor-pointer relative ${
                activeSection === section.id
                  ? 'text-white font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {activeSection === section.id && (
                <motion.span
                  layoutId="activeNavBg"
                  className="absolute inset-0 bg-zinc-900 border-l border-cyan-400 rounded-md"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {section.label}
            </button>
          ))}
        </nav>

        {/* Interactive Recruiter CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenConsole}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono tracking-wider font-semibold text-cyan-400 bg-cyan-950/45 hover:bg-cyan-900/40 rounded border border-cyan-900/40 transition-all cursor-pointer group active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>RECRUITER HUB</span>
            <ArrowUpRight className="w-3 h-3 text-cyan-400/75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Actuator */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={onOpenConsole}
            className="flex sm:hidden items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono text-cyan-400 bg-cyan-950/45 rounded border border-cyan-900/30"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>HUB</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Tray */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          className="absolute top-full left-0 w-full bg-black border-y border-zinc-900 flex flex-col p-6 gap-2.5 lg:hidden"
        >
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className={`w-full py-2.5 px-4 text-left font-display text-sm font-medium tracking-wide rounded border transition-colors ${
                activeSection === section.id
                  ? 'bg-zinc-900 text-cyan-400 border-l-2 border-cyan-400'
                  : 'text-zinc-300 hover:bg-zinc-900 hover:text-white border-transparent'
              }`}
            >
              {section.label}
            </button>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsole();
            }}
            className="w-full flex items-center justify-center gap-2 mt-2 py-3 text-xs font-mono font-semibold tracking-wider text-cyan-400 bg-cyan-950/40 rounded border border-cyan-900/30"
          >
            <Sparkles className="w-4 h-4" />
            <span>LAUNCH RECRUITER ASSISTANT</span>
          </button>
        </motion.div>
      )}
    </header>
  );
}
