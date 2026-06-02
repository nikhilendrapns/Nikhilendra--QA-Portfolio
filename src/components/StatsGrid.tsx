import { useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import React from 'react';
import { IMPACT_METRICS } from '../data';
import { Activity, Layers, Percent, CheckCircle, Database, Sparkles } from 'lucide-react';

interface CountUpProps {
  value: string;
  inView: boolean;
}

function CountUp({ value, inView }: CountUpProps) {
  const [count, setCount] = useState(0);
  const numericStr = value.replace(/[^0-9]/g, '');
  const suffix = value.replace(/[0-9]/g, '');
  const target = parseFloat(numericStr);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200; // ms
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, inView]);

  return (
    <span className="font-display font-black text-white text-4xl sm:text-5xl tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsGrid() {
  const containerRef = React.useRef(null);
  const inView = useInView(containerRef, { once: true, margin: '-100px' });

  const getMetricIcon = (id: string) => {
    switch (id) {
      case 'years-exp':
        return <Activity className="w-4 h-4 text-purple-400" />;
      case 'web-mig':
        return <Layers className="w-4 h-4 text-cyan-400" />;
      case 'aem-cov':
        return <Percent className="w-4 h-4 text-teal-400" />;
      case 'mob-cov':
        return <CheckCircle className="w-4 h-4 text-cyan-400" />;
      case 'test-cases':
        return <Database className="w-4 h-4 text-purple-400" />;
      case 'ai-reduc':
        return <Sparkles className="w-4 h-4 text-teal-400" />;
      default:
        return <Activity className="w-4 h-4 text-cyan-400" />;
    }
  };

  const getColorClass = (id: string) => {
    switch (id) {
      case 'years-exp': return 'text-purple-400';
      case 'web-mig': return 'text-cyan-400';
      case 'aem-cov': return 'text-teal-400';
      case 'mob-cov': return 'text-cyan-400';
      case 'test-cases': return 'text-purple-400';
      case 'ai-reduc': return 'text-teal-400';
      default: return 'text-white';
    }
  };

  return (
    <section id="impact" className="py-24 border-y border-zinc-900 bg-black relative overflow-hidden">
      {/* Background ambient shade */}
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-cyan-950/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10" ref={containerRef}>
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono tracking-wider text-cyan-400 font-bold uppercase">// MEASURED INDUSTRIAL WINS</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white mt-2">
              Impact at a Glance
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-sm font-sans leading-relaxed">
            Auditable metrics and execution history demonstrating technical quality leadership at enterprise scale.
          </p>
        </div>

        {/* Minimal High-Contrast Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMPACT_METRICS.map((metric, idx) => {
            const isPurple = idx % 3 === 0;
            const isTeal = idx % 3 === 2;
            const accentBorder = isPurple 
              ? 'hover:border-purple-500/20' 
              : isTeal 
                ? 'hover:border-teal-500/20'
                : 'hover:border-cyan-500/20';

            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-zinc-950/50 p-6 rounded-lg text-left relative overflow-hidden transition-all duration-300 border border-zinc-900/80 hover:bg-zinc-950 ${accentBorder} cursor-default`}
              >
                {/* Minimal top light accent line */}
                <div className="absolute top-0 left-0 w-12 h-[1px] bg-cyan-400 opacity-60" />

                {/* Card Top: Icon & Value */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center">
                    {getMetricIcon(metric.id)}
                  </div>
                  
                  {/* Metric Counter */}
                  <div className={`flex items-baseline gap-1 ${getColorClass(metric.id)}`}>
                    <CountUp value={metric.value} inView={inView} />
                  </div>
                </div>

                {/* Label & Description */}
                <h3 className="text-sm font-display font-bold text-zinc-200">
                  {metric.label}
                </h3>
                
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
