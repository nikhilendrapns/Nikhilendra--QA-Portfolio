import { motion } from 'motion/react';
import { PERSONAL_DETAILS } from '../data';
import { Mail, Github, Linkedin, ArrowRight, Shield, Database, Cpu } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onOpenConsole: () => void;
}

export default function Hero({ onExploreClick, onOpenConsole }: HeroProps) {
  return (
    <section
      id="about"
      className="relative min-h-screen pt-36 pb-20 flex items-center bg-black overflow-hidden"
    >
      {/* Subtle background glow - very soft, highly professional */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-950/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.012)_1px,_transparent_1px)] bg-[size:40px_40px] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Text Content */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            
            {/* Status Indicator */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[11px] font-mono tracking-wider text-zinc-300 mb-6"
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span>{PERSONAL_DETAILS.location}</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-400">Open to select roles</span>
            </motion.div>

            {/* Headline Phrase */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-white leading-[1.05]"
            >
              I build quality so products scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-purple-400">with confidence</span><span className="text-cyan-400">.</span>
            </motion.h1>

            {/* Main Headline Revision */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 font-mono text-xs sm:text-sm tracking-wider uppercase text-zinc-400 select-none flex flex-wrap items-center gap-x-3 gap-y-1"
            >
              <span className="text-white font-bold">{PERSONAL_DETAILS.tagline}</span>
              <span className="text-zinc-700 font-normal">/</span>
              <span>{PERSONAL_DETAILS.name}</span>
              <span className="text-zinc-700 font-normal">/</span>
              <span className="text-cyan-400 font-semibold">Lead QA Engineer & SDET</span>
            </motion.div>

            {/* Supporting Bio Text from Revisions */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-zinc-400 font-sans leading-relaxed max-w-3xl"
            >
              Delivering scalable quality engineering solutions across enterprise applications, mobile ecosystems, AEM modernization programs, automation frameworks, APIs, databases, and AI-powered testing initiatives.
            </motion.p>

            {/* Minimal Sub-benchmarks line */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-zinc-500 border-l border-zinc-800 pl-4"
            >
              <div><strong className="text-zinc-300">8+ Years</strong> Industry Expertise</div>
              <div className="hidden sm:block text-zinc-700">•</div>
              <div><strong className="text-zinc-300">140+ Sites</strong> Cloud Migrations</div>
              <div className="hidden sm:block text-zinc-700">•</div>
              <div><strong className="text-zinc-300">90% AEM / 85% Mobile</strong> Automated Coverage</div>
            </motion.div>

            {/* Action CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onExploreClick}
                className="group px-6 py-3.5 text-xs font-mono tracking-widest font-bold uppercase text-black bg-cyan-400 hover:bg-cyan-300 transition-all rounded text-center flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:scale-95"
              >
                <span>Explore Experience</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={onOpenConsole}
                className="px-6 py-3.5 text-xs font-mono tracking-widest font-bold uppercase text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all rounded text-center cursor-pointer transform hover:-translate-y-0.5 active:scale-95"
              >
                Interact With AI Agent
              </button>
            </motion.div>

            {/* Social profiles & details */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex items-center gap-4 text-zinc-500"
            >
              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="p-1 hover:text-white transition-colors"
                title="Email Nikhilendra"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_DETAILS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1 hover:text-white transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_DETAILS.github}
                target="_blank"
                rel="noreferrer"
                className="p-1 hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <span className="font-mono text-xs text-zinc-600 border-l border-zinc-800 pl-4 py-1">
                nikhilendrapns19@gmail.com
              </span>
            </motion.div>

          </div>

          {/* Right Column: Visual Minimal Blueprint Canvas (Replacing generic colorful gradient boxes) */}
          <motion.div 
            className="lg:col-span-4 relative hidden lg:flex flex-col gap-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* The Blueprint Card (Very technical, extremely "Anirudh-like" developer vibe) */}
            <div className="border border-zinc-800/80 bg-zinc-950 p-6 rounded-lg font-mono relative overflow-hidden group hover:border-zinc-700/80 transition-colors">
              <div className="absolute top-2 right-2 text-[10px] text-zinc-600 font-mono">FRAMEWORK_CORE_V1.1</div>
              
              <div className="flex items-center gap-2 text-cyan-400 mb-6">
                <Shield className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Quality Operations</span>
              </div>

              <div className="space-y-4 text-xs text-zinc-400">
                <div className="space-y-1.5">
                  <div className="text-[10px] text-zinc-500">// AUTOMATION COVERAGE MODEL</div>
                  <div className="flex items-center justify-between text-zinc-300">
                    <span>AEM Cloud Modernization</span>
                    <span className="text-teal-400 font-bold">90%</span>
                  </div>
                  <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden">
                    <motion.div className="bg-gradient-to-r from-cyan-400 to-teal-400 h-full" initial={{ width: 0 }} animate={{ width: '90%' }} transition={{ duration: 1, delay: 0.5 }} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="text-[10px] text-zinc-500">// INTEGRATED DEVICE COVERAGE</div>
                  <div className="flex items-center justify-between text-zinc-300">
                    <span>Mobile Apps (iOS & Android)</span>
                    <span className="text-cyan-400 font-bold">85%</span>
                  </div>
                  <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden">
                    <motion.div className="bg-gradient-to-r from-cyan-400 to-purple-400 h-full" initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1, delay: 0.7 }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] text-zinc-500">// PIPELINE TELEMETRY STATE</div>
                  <div className="text-[11px] text-zinc-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
                    <span>Regression: PASSED (99.8% stability)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting Blueprint Card #2 (AI Acceleration) */}
            <div className="border border-zinc-800/80 bg-zinc-950 p-6 rounded-lg font-mono relative overflow-hidden group hover:border-zinc-700/80 transition-colors">
              <div className="absolute top-2 right-2 text-[10px] text-zinc-600">SYS_ACCEL</div>
              
              <div className="flex items-center gap-2 text-purple-400 mb-4">
                <Cpu className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">AI Innovation</span>
              </div>

              <div className="space-y-2 text-xs text-zinc-400">
                <p className="text-[11px] leading-relaxed">
                  Leveraging <strong className="text-zinc-200">GitHub Copilot</strong> and custom prompt structures to co-author page object models and slash boilerplate creation by <strong className="text-purple-400">35%</strong>.
                </p>
                
                <div className="pt-2 border-t border-zinc-900 flex items-center justify-between text-[11px]">
                  <span className="text-zinc-500">PROMPT CRITERIA:</span>
                  <span className="text-zinc-300 bg-zinc-900 px-2 py-0.5 rounded text-[10px]">HYD PROMPT WAR FINALIST</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 select-none">
        <span className="text-[9px] font-mono tracking-widest uppercase text-zinc-600">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={onExploreClick}
          className="p-1 h-7 w-4.5 rounded-full border border-zinc-800 flex justify-center cursor-pointer"
        >
          <div className="h-1.5 w-1 bg-cyan-400 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
