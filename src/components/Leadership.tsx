import { motion } from 'motion/react';
import { LEADERSHIP_AND_INNOVATION } from '../data';
import { MessageSquareCode, HeartHandshake, BookOpen, UserCheck, Mic } from 'lucide-react';

export default function Leadership() {
  const getItemIcon = (title: string) => {
    switch (title) {
      case 'Air Talks':
        return <MessageSquareCode className="w-5 h-5 text-cyan-400" />;
      case 'Air Vibes':
        return <HeartHandshake className="w-5 h-5 text-purple-400" />;
      case 'Springer Publication':
        return <BookOpen className="w-5 h-5 text-teal-400" />;
      case 'Technical Mentorship':
        return <UserCheck className="w-5 h-5 text-cyan-400" />;
      case 'SME Speaking Sessions':
        return <Mic className="w-5 h-5 text-purple-400" />;
      default:
        return <MessageSquareCode className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="leadership" className="py-24 bg-black relative overflow-hidden border-b border-zinc-900">
      {/* Background ambient lighting */}
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-teal-950/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header content matching the updated leadership & innovation navigations */}
        <div className="max-w-2xl text-left mb-16">
          <span className="text-xs font-mono tracking-wider text-purple-400 uppercase font-bold">// COLLABORATIVE ACTION & INTELLECT</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white mt-1">
            Leadership & Innovation
          </h2>
          <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
            Cultivating technical excellence, mentoring next-generation quality practices, and driving positive enterprise impact.
          </p>
        </div>

        {/* 5-Item Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEADERSHIP_AND_INNOVATION.map((item, idx) => {
            const isFullOnLarge = idx === 3 || idx === 4;
            const borderAccent = idx % 3 === 0 
              ? 'hover:border-cyan-500/20' 
              : idx % 3 === 1 
                ? 'hover:border-purple-500/20'
                : 'hover:border-teal-500/20';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`bg-zinc-950/45 p-6 rounded-lg border border-zinc-900 text-left relative overflow-hidden group flex flex-col justify-between transition-all duration-300 ${borderAccent} ${
                  isFullOnLarge ? 'lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="p-2.5 bg-zinc-900 border border-zinc-850 rounded-lg">
                      {getItemIcon(item.title)}
                    </div>
                    
                    <span className="text-[9px] font-mono tracking-widest text-zinc-600 uppercase">
                      L&I_INIT_0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>

                  {item.subtitle && (
                    <p className="text-xs text-teal-400 font-mono mt-1">
                      {item.subtitle}
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Footer specs */}
                <div className="mt-8 pt-4 border-t border-zinc-900 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                  <span className="uppercase tracking-widest">{item.type}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-purple-400 transition-all animate-pulse" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
