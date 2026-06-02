import { PERSONAL_DETAILS } from '../data';
import { Mail, Phone, MapPin, Award, BookOpen, GraduationCap, ChevronUp, ExternalLink, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#020202] border-t border-zinc-900 pt-24 pb-12 relative overflow-hidden text-left">
      {/* Background soft ambient highlight */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-[150px] bg-cyan-950/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Top Segment: Visual split into 4 premium grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">
          
          {/* Column 1: Expert Identity & Bio (4 Columns) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-wider text-cyan-400 font-bold uppercase block">// PROFESSIONAL IDENTIFIER</span>
              <h3 className="text-lg font-display font-extrabold text-white tracking-wide">
                {PERSONAL_DETAILS.name}
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                Lead QA Engineer & SDET Architect
              </p>
            </div>
            
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Architecting resilient quality infrastructures and end-to-end automation pipelines across Web, Mobile, and API systems. Specializing in high-security SaaS, cloud-native validation, and GenAI-assisted workflows.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs text-zinc-400 font-mono">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>

          {/* Column 2: Academic Foundation (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] font-mono tracking-wider text-purple-400 font-bold uppercase block">// ACADEMIC GROUNDING</span>
            
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="p-2 bg-zinc-950 border border-zinc-900 rounded text-purple-400 flex-shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-display font-semibold text-white leading-snug">
                    B.Tech in Computer Science
                  </h4>
                  <p className="text-[11px] text-zinc-500 leading-tight">
                    Geethanjali College of Engineering & Technology, JNTUH
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-900/50 flex gap-3 items-start">
                <div className="p-2 bg-zinc-950 border border-zinc-900 rounded text-cyan-400 flex-shrink-0 mt-0.5">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-display font-semibold text-white leading-snug">
                    Springer Publication (2018)
                  </h4>
                  <p className="text-[11px] text-cyan-400/85 font-mono italic leading-relaxed">
                    "An Overview on Blockchain Technology and its Applications"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Key Certifications (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] font-mono tracking-wider text-teal-400 font-bold uppercase block">// RECOGNIZED CREDENTIALS</span>
            
            <div className="grid grid-cols-1 gap-2">
              {PERSONAL_DETAILS.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-2 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 hover:border-teal-500/15 rounded text-[11px] font-mono text-zinc-300 transition-colors cursor-default"
                >
                  <Award className="w-3 h-3 text-teal-400 flex-shrink-0" />
                  <span className="truncate">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Immediate Interactive Actions (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] font-mono tracking-wider text-cyan-400 font-bold uppercase block">// DIRECT CHANNELS</span>
            
            <div className="flex flex-col gap-2.5">
              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="flex items-center justify-between gap-2 px-3 py-2 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 hover:border-cyan-500/20 text-xs text-zinc-300 hover:text-white rounded transition-colors group"
              >
                <div className="flex items-center gap-2 truncate">
                  <Mail className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span className="truncate font-mono">{PERSONAL_DETAILS.email}</span>
                </div>
                <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-cyan-400 flex-shrink-0" />
              </a>

              <a
                href={`tel:${PERSONAL_DETAILS.phone.replace(/ /g, '')}`}
                className="flex items-center justify-between gap-2 px-3 py-2 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 hover:border-cyan-500/20 text-xs text-zinc-300 hover:text-white rounded transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span className="font-mono text-[11px]">{PERSONAL_DETAILS.phone}</span>
                </div>
                <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-cyan-400 flex-shrink-0" />
              </a>

              <div className="grid grid-cols-2 gap-2 mt-1">
                <a
                  href={PERSONAL_DETAILS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 bg-zinc-950 hover:bg-zinc-900 text-[11px] font-mono text-zinc-400 hover:text-white border border-zinc-900 hover:border-cyan-500/20 rounded transition-colors"
                >
                  <Linkedin className="w-3 h-3" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_DETAILS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 bg-zinc-950 hover:bg-zinc-900 text-[11px] font-mono text-zinc-400 hover:text-white border border-zinc-900 hover:border-cyan-400/20 rounded transition-colors"
                >
                  <Github className="w-3 h-3" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="h-[1px] bg-zinc-900 w-full" />

        {/* Bottom Segment: Copyright & Quick back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 font-mono text-[11px] text-zinc-500 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {PERSONAL_DETAILS.name}. All rights reserved.</span>
            <span className="hidden sm:inline text-zinc-800">|</span>
            <span>Lead QA Engineer & SDET Portfolio</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-950 hover:bg-zinc-900 border border-zinc-850 hover:border-zinc-700 text-[10px] font-mono text-zinc-400 hover:text-white rounded transition-colors active:scale-95 cursor-pointer group"
            title="Back to Top"
          >
            <span>BACK TO TOP</span>
            <ChevronUp className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
