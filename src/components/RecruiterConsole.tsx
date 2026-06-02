import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_DETAILS, MOCK_RECRUITER_CHAT } from '../data';
import { Sparkles, Terminal, X, Minimize2, Send, CornerDownLeft, Bot, Phone, Mail, Award, CheckCircle } from 'lucide-react';

interface RecruiterConsoleProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  sender: 'recruiter' | 'sdet-agent';
  text: string;
  timestamp: string;
}

export default function RecruiterConsole({ isOpen, onClose }: RecruiterConsoleProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'sdet-agent',
      text: `Hello! I am ${PERSONAL_DETAILS.name}'s virtual portfolio assistant. Feel free to ask me questions regarding his 8+ years of Quality Engineering experience, Playwright automation suites, mobile application testing, or enterprise database migrations! You can also click the quick-preset prompts below.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const handlePresetClick = (qText: string) => {
    submitQuestion(qText);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    submitQuestion(inputValue);
    setInputValue('');
  };

  const submitQuestion = (text: string) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    setMessages(prev => [...prev, { sender: 'recruiter', text, timestamp: time }]);
    setIsTyping(true);

    setTimeout(() => {
      let matchedAnswer = "";
      const lowerQuery = text.toLowerCase();
      
      const match = MOCK_RECRUITER_CHAT.find(entry => 
        entry.keywords.some(kw => lowerQuery.includes(kw))
      );

      if (match) {
        matchedAnswer = match.answer;
      } else {
        matchedAnswer = `I found your query! P N S Nikhilendra is an experienced Lead QA Engineer with over 8 years of SDET expertise. He has successfully migrated 140+ high-traffic AEM cloud environments, designed advanced PyTest/Playwright models, automated Azure SQL test pipelines (cutting validation from 4 hours to 20 minutes), and handled verification for 4 mobile apps on iOS & Android. Feel free to ask about any specific project or skillset!`;
      }

      setMessages(prev => [...prev, { sender: 'sdet-agent', text: matchedAnswer, timestamp: time }]);
      setIsTyping(false);
    }, 850);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      
      {/* Console frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 10 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-4xl h-[620px] rounded-xl border border-zinc-800 flex flex-col overflow-hidden shadow-2xl bg-zinc-950 text-left"
      >
        {/* Header */}
        <div className="bg-zinc-900 px-6 py-4 flex items-center justify-between border-b border-zinc-850 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <Terminal className="w-4 h-4 text-zinc-400" />
            <h2 className="text-xs font-mono text-zinc-200 font-bold tracking-wider uppercase">
              Recruiter Dialogue Assistant
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 bg-zinc-800 text-[10px] text-zinc-400 font-mono rounded border border-zinc-700/55">
              ONLINE
            </span>
            <button
              onClick={onClose}
              className="p-1 text-zinc-500 hover:text-white hover:bg-zinc-800 rounded transition-colors cursor-pointer focus:outline-none"
              title="Close Dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content workspace */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* Main thread (left) */}
          <div className="flex-1 flex flex-col overflow-hidden border-r border-zinc-900">
            
            {/* Messages stream */}
            <div
              ref={scrollRef}
              className="flex-1 p-6 overflow-y-auto space-y-4 bg-black/90 font-mono text-xs text-zinc-300"
            >
              {messages.map((msg, idx) => {
                const isAgent = msg.sender === 'sdet-agent';
                return (
                  <div key={idx} className={`flex gap-3 ${isAgent ? 'justify-start' : 'justify-end'}`}>
                    
                    {isAgent && (
                      <div className="p-2 h-8 w-8 rounded-full bg-zinc-900 border border-zinc-800 text-cyan-400 flex-shrink-0 flex items-center justify-center">
                        <Bot className="w-4 h-4" />
                      </div>
                    )}

                    <div className="max-w-[80%] space-y-1">
                      <div className="text-[9px] text-zinc-500 font-mono flex items-center gap-1.5 justify-between">
                        <span>{isAgent ? 'PORTFOLIO ASSISTANT' : 'RECRUITER / RECRUITER'}</span>
                        <span>{msg.timestamp}</span>
                      </div>
                      <div className={`p-4 rounded-lg border leading-relaxed text-left ${
                        isAgent
                          ? 'bg-zinc-950 border-zinc-900 text-zinc-300'
                          : 'bg-cyan-950/20 border-cyan-900/40 text-cyan-200'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex gap-3 justify-start">
                  <div className="p-2 h-8 w-8 rounded-full bg-zinc-900 border border-zinc-800 text-cyan-400 flex-shrink-0 flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="max-w-[80%] space-y-1">
                    <div className="text-[9px] text-zinc-500 font-mono">ASSISTANT IS THINKING...</div>
                    <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-900 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0s' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0.15s' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0.3s' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Presets list */}
            <div className="px-6 py-2.5 border-t border-zinc-900 bg-zinc-950 flex-shrink-0">
              <span className="text-[9px] font-mono text-zinc-500 block uppercase mb-1.5 tracking-wider text-left">PRESET INTERVIEW QUESTIONS</span>
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                {MOCK_RECRUITER_CHAT.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handlePresetClick(item.question)}
                    className="flex-shrink-0 px-3 py-1.5 bg-zinc-90 w-full h-full border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 text-[10px] font-mono text-cyan-400 hover:text-white rounded transition-colors active:scale-95 cursor-pointer"
                  >
                    {item.question}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Input submit */}
            <form onSubmit={handleSubmit} className="p-4 bg-zinc-900 flex gap-2 border-t border-zinc-850 flex-shrink-0 items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask custom question (e.g., mobile apps, experience)..."
                className="flex-1 bg-black border border-zinc-800 focus:border-cyan-400 rounded-md px-4 py-3 text-xs text-white placeholder-zinc-500 font-mono focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-3 bg-cyan-500 text-black disabled:bg-zinc-800 disabled:text-zinc-500 rounded-md transition-colors flex items-center justify-center cursor-pointer font-bold"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Quick Info (right panel) */}
          <div className="hidden lg:flex w-72 bg-zinc-900/40 flex-col justify-between p-6">
            <div className="space-y-6">
              <div>
                <span className="text-[9px] font-mono text-zinc-500 block uppercase tracking-wider">CANDIDATE META</span>
                <h3 className="text-base font-display font-bold text-white mt-1">
                  {PERSONAL_DETAILS.name}
                </h3>
                <p className="text-[11px] text-purple-400 font-mono mt-0.5">
                  Lead QA / SDET Architect
                </p>
              </div>

              {/* Badges stack */}
              <div className="space-y-2 mt-4 pt-4 border-t border-zinc-900">
                <span className="text-[9px] font-mono text-zinc-500 block uppercase tracking-wider">Qualifications</span>
                <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>8+ Years SDET Work</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>ISTQB Foundation</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Azure AI Fundamentals</span>
                </div>
              </div>

              {/* Contacts */}
              <div className="space-y-3 pt-4 border-t border-zinc-900">
                <span className="text-[9px] font-mono text-zinc-500 block uppercase tracking-wider">Channels</span>
                
                <a
                  href={`mailto:${PERSONAL_DETAILS.email}`}
                  className="flex items-center gap-2.5 text-xs text-zinc-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="truncate font-mono">{PERSONAL_DETAILS.email}</span>
                </a>
                
                <a
                  href={`tel:${PERSONAL_DETAILS.phone.replace(/ /g, '')}`}
                  className="flex items-center gap-2.5 text-xs text-zinc-300 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono">{PERSONAL_DETAILS.phone}</span>
                </a>
              </div>
            </div>

            {/* PRINT resume (generates beautiful format) */}
            <div className="pt-4 border-t border-zinc-900 mt-6 md:block">
              <button
                onClick={() => window.print()}
                className="w-full text-center py-2 bg-cyan-400 hover:bg-cyan-350 text-black text-xs font-mono font-bold uppercase rounded transition-all active:scale-95 cursor-pointer"
              >
                PRINT ACCREDITATIONS
              </button>
              <span className="text-[9px] text-zinc-500 mt-1 block text-center font-mono">Generates clean resume printout</span>
            </div>
          </div>

        </div>

      </motion.div>
    </div>
  );
}
