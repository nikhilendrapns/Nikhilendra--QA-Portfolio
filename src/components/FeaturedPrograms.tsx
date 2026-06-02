import { motion } from 'motion/react';
import React from 'react';
import { FEATURED_PROGRAMS } from '../data';
import { Globe, Smartphone, Cpu, Zap, ChevronRight, Check } from 'lucide-react';

export default function FeaturedPrograms() {
  const [selectedProg, setSelectedProg] = React.useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-purple-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-teal-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-purple-400" />;
      default:
        return <Globe className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="programs" className="py-24 bg-black relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-950/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header content matching the verified spec */}
        <div className="max-w-xl text-left mb-16">
          <span className="text-xs font-mono tracking-wider text-purple-400 uppercase font-bold">// CORE ENTERPRISE PROGRAM PORTFOLIO</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white mt-1">
            Featured Engineering Programs
          </h2>
          <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
            Leading and architecting high-reliability testing operations across critical pipelines. 
          </p>
        </div>

        {/* 2x2 Clean Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FEATURED_PROGRAMS.map((prog, idx) => {
            const isSelected = selectedProg === prog.id;
            const borderAccent = idx === 0 
              ? 'hover:border-cyan-500/20' 
              : idx === 1 
                ? 'hover:border-purple-500/20'
                : idx === 2 
                  ? 'hover:border-teal-500/20'
                  : 'hover:border-purple-500/20';

            return (
              <motion.div
                key={prog.id}
                layout="position"
                onClick={() => setSelectedProg(isSelected ? null : prog.id)}
                className={`bg-zinc-950/40 p-8 rounded-xl border border-zinc-900 relative overflow-hidden transition-all duration-300 group cursor-pointer flex flex-col justify-between ${borderAccent} ${
                  isSelected ? 'ring-1 ring-cyan-500/30 bg-zinc-950' : ''
                }`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  {/* Top Line Banner */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400">
                      {getIcon(prog.icon)}
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase">
                      PROG_CODE_0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {prog.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs sm:text-sm mt-3 leading-relaxed">
                    {prog.description}
                  </p>

                  <div className="h-[1px] bg-zinc-900 my-6" />

                  {/* Highlights Bullet Array - Always visible and clean */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase block">CORE BENCHMARKS</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {prog.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-left">
                          <div className="p-0.5 rounded bg-cyan-950 text-cyan-400 mt-1 flex-shrink-0">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="text-xs text-zinc-300 leading-tight">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Interactive Hint */}
                <div className="mt-8 pt-4 border-t border-zinc-900/50 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:animate-ping" />
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Enterprise-grade</span>
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400">
                    <span>{isSelected ? 'Close' : 'Specs'}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transform transition-transform ${isSelected ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
