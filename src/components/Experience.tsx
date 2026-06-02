import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EXPERIENCES } from '../data';
import { Briefcase, Calendar, MapPin, Layers, ChevronRight } from 'lucide-react';

export default function Experience() {
  const [selectedCorpId, setSelectedCorpId] = useState<string>(EXPERIENCES[0].id);

  const currentCorp = EXPERIENCES.find(e => e.id === selectedCorpId) || EXPERIENCES[0];

  return (
    <section id="experience" className="py-24 bg-black relative overflow-hidden border-b border-zinc-900">
      {/* Background decoration blur */}
      <div className="absolute right-1/4 top-10 w-[500px] h-[300px] bg-purple-950/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl text-left mb-16">
          <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase font-bold">// PROFESSIONAL CAREER PATH</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white mt-1">
            Professional Experience
          </h2>
          <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
            Delivering advanced automated frameworks, schema validation, and SDET infrastructure.
          </p>
        </div>

        {/* Corporate timeline grid switcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Corporate List Switchers (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {EXPERIENCES.map((exp) => {
              const isActive = selectedCorpId === exp.id;
              
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedCorpId(exp.id)}
                  className={`text-left p-5 rounded-lg border transition-all duration-300 relative focus:outline-none cursor-pointer group ${
                    isActive
                      ? 'border-cyan-500/30 bg-zinc-950/80 shadow-md'
                      : 'border-zinc-900 bg-zinc-950/10 hover:border-zinc-800'
                  }`}
                >
                  {/* Vertical highlight bar on active */}
                  {isActive && (
                    <div className="absolute left-0 top-0 w-[3px] h-full bg-cyan-400" />
                  )}

                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-display font-extrabold text-zinc-100 group-hover:text-white transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-xs text-cyan-450 font-mono mt-0.5">
                        {exp.role}
                      </p>
                      
                      {exp.project && (
                        <p className="text-[10px] text-zinc-500 font-mono uppercase mt-1 tracking-wider flex items-center gap-1.5">
                          <Layers className="w-3 h-3 text-purple-400" />
                          {exp.project}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col items-end text-right">
                      <span className="text-[10px] text-zinc-500 font-mono flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period.split('–')[0].trim()}
                      </span>
                      {exp.current && (
                        <span className="mt-1 px-1.5 py-0.5 bg-cyan-950 text-cyan-400 font-mono text-[9px] font-bold rounded border border-cyan-900/30">
                          ACTIVE
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Job details content panels (8 columns) */}
          <div className="lg:col-span-8 h-full">
            <div className="bg-zinc-950/60 p-8 rounded-lg border border-zinc-900 relative min-h-[400px] flex flex-col justify-between text-left">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCorpId}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {/* Corporate banner header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-zinc-900">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-display font-extrabold text-white">
                          {currentCorp.role}
                        </h3>
                        <span className="text-zinc-650 font-mono">//</span>
                        <span className="text-sm text-cyan-400 font-mono font-bold">
                          {currentCorp.company}
                        </span>
                      </div>
                      
                      {currentCorp.project && (
                        <p className="text-xs text-purple-400 font-mono mt-1 uppercase tracking-wider">
                          Project Context: {currentCorp.project}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 text-xs text-zinc-400 font-mono">
                      <span className="flex items-center gap-1 bg-zinc-900 border border-zinc-850 px-2.5 py-1 rounded">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {currentCorp.period}
                      </span>
                      <span className="flex items-center gap-1 bg-zinc-900 border border-zinc-850 px-2.5 py-1 rounded">
                        <MapPin className="w-3.5 h-3.5 text-purple-400" />
                        {currentCorp.location}
                      </span>
                    </div>
                  </div>

                  {/* Achievements and bullets list */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase block">CORE DELIVERED ACCOMPLISHMENTS</span>
                    <ul className="space-y-3.5">
                      {currentCorp.achievements.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed items-start">
                          <span className="p-0.5 rounded bg-zinc-900 text-cyan-400 mt-1 flex-shrink-0">
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Associated Stacks list */}
                  <div className="pt-6 border-t border-zinc-900 space-y-2 mt-6">
                    <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase block">ASSOCIATED TECH STACK</span>
                    <div className="flex flex-wrap gap-2">
                      {currentCorp.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-zinc-900 text-[11px] font-mono rounded text-zinc-300 border border-zinc-800 hover:border-cyan-500/35 hover:text-white transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
