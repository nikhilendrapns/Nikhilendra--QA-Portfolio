import { useState } from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data';
import { Search, Code2, PlayCircle, Network, Smartphone, Gauge, Layers, Bot, ClipboardCheck, ArrowRight } from 'lucide-react';

export default function TechnicalSkills() {
  const [filterQuery, setFilterQuery] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'PlayCircle':
        return <PlayCircle className="w-5 h-5 text-purple-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-teal-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5 text-teal-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-purple-400" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-cyan-400" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-5 h-5 text-teal-400" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-black border-b border-zinc-900 relative overflow-hidden">
      {/* Background ambient shine */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-950/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header content & searchable component */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left">
            <span className="text-xs font-mono tracking-wider text-teal-400 uppercase font-bold">// COMPREHENSIVE COMPETENCY MATRIX</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white mt-1">
              Technical Stack & Skill Grid
            </h2>
            <p className="text-zinc-400 text-sm mt-3 leading-relaxed max-w-xl">
              Spanning automated framework design, backend query optimization, enterprise infrastructures, and modern AI steering.
            </p>
          </div>

          {/* Search box */}
          <div className="w-full md:w-80 flex-shrink-0">
            <div className="relative">
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Search tech stack (e.g., Playwright)..."
                className="w-full bg-zinc-900 border border-zinc-800 rounded-md pl-10 pr-4 py-3 text-xs text-white placeholder-zinc-500 font-mono focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
            </div>
          </div>
        </div>

        {/* 4x2 Skill Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, catIdx) => {
            const indexMatchedSkills = cat.skills.filter(s => 
              s.toLowerCase().includes(filterQuery.toLowerCase())
            );
            const isCategoryMatched = cat.category.toLowerCase().includes(filterQuery.toLowerCase());
            const activeMatch = isCategoryMatched || indexMatchedSkills.length > 0;

            const boxHighlight = activeMatch
              ? 'border-zinc-800 bg-zinc-950/60'
              : 'border-zinc-950 bg-zinc-950/10 opacity-40 grayscale';

            return (
              <motion.div
                key={cat.category}
                layout="position"
                className={`p-6 rounded-lg text-left flex flex-col justify-between border transition-all duration-300 ${boxHighlight}`}
                whileHover={activeMatch ? { y: -2 } : {}}
              >
                <div>
                  {/* Category Title Head */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded bg-zinc-900 border border-zinc-850">
                      {getCategoryIcon(cat.icon)}
                    </div>
                    <h3 className="text-sm font-display font-extrabold text-white leading-tight">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skills lists */}
                  <div className="space-y-2 mt-2">
                    {cat.skills.map((skill) => {
                      const individualHighlighted = filterQuery !== '' && skill.toLowerCase().includes(filterQuery.toLowerCase());
                      return (
                        <div
                          key={skill}
                          className={`flex items-center justify-between text-xs font-mono px-2.5 py-1.5 rounded transition-all ${
                            individualHighlighted
                              ? 'bg-cyan-950 text-white font-semibold border-l-2 border-cyan-400'
                              : 'bg-zinc-900/40 text-zinc-300 border border-transparent'
                          }`}
                        >
                          <span className="truncate">{skill}</span>
                          {individualHighlighted && (
                            <ArrowRight className="w-3 h-3 text-cyan-400 ml-1 flex-shrink-0" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Index label */}
                <div className="mt-6 pt-4 border-t border-zinc-900/50 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                  <span>METRIC STANDARD</span>
                  <span>0{catIdx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reset query trigger */}
        {filterQuery !== '' && (
          <div className="mt-8 text-center animate-fade-in">
            <button
              onClick={() => setFilterQuery('')}
              className="text-xs font-mono text-cyan-400 hover:underline hover:text-white"
            >
              Clear filter criteria
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
