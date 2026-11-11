import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MessageSquare, CheckCheck, FileText, ArrowUpRight, PhoneCall, ShieldAlert, Mic } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { getProjectById } from '../utils/portfolio';

interface FloatingShowcaseProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const FloatingShowcase: React.FC<FloatingShowcaseProps> = ({ onSelectProject }) => {
  const shouldReduceMotion = useReducedMotion();

  const mayaProject = getProjectById('maya');
  const resumeProject = getProjectById('ai-resume-analyser');
  const klytraProject = getProjectById('klytra');

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-14 lg:mt-18 px-4 select-none">
      {/* Cinematic Ambient Glow behind the showcase (Adapts to Light & Dark) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] lg:w-[820px] h-[280px] sm:h-[400px] pointer-events-none -z-10 transition-colors duration-300"
        aria-hidden="true"
      >
        <div
          className="w-full h-full rounded-full blur-[100px] sm:blur-[130px] opacity-75 transition-colors duration-300"
          style={{ backgroundColor: 'var(--glow-color)' }}
        />
      </div>

      {/* 3 Floating Panels Desktop Horizontal Overlap / Responsive Stack on Mobile */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 lg:-space-x-8 relative max-w-5xl mx-auto">
        {/* Panel 1 — Left: MAYA (AI Call Gatekeeper) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: shouldReduceMotion ? 0 : -2.5 }}
          whileHover={shouldReduceMotion ? {} : { y: -8, rotate: 0, scale: 1.02, zIndex: 30, transition: { duration: 0.25 } }}
          transition={{ duration: 0.7, delay: shouldReduceMotion ? 0 : 0.35, ease: 'easeOut' }}
          onClick={() => mayaProject && onSelectProject(mayaProject)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if ((e.key === 'Enter' || e.key === ' ') && mayaProject) {
              e.preventDefault();
              onSelectProject(mayaProject);
            }
          }}
          aria-label="Inspect MAYA AI Call Gatekeeper project interface"
          className="w-full lg:w-[340px] shrink-0 glass-panel rounded-xl p-4 sm:p-5 text-left text-[var(--text-primary)] shadow-2xl border border-[var(--border-subtle)] cursor-pointer lg:z-10 relative group hover:border-[var(--accent-interactive)]/60 transition-colors"
        >
          {/* Window Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-primary)] ml-1 flex items-center gap-1.5 font-bold">
                <PhoneCall className="w-3 h-3 text-[var(--accent-interactive)]" />
                MAYA / GATEKEEPER
              </span>
            </div>
            <span className="text-[10px] font-mono text-[var(--accent-interactive)] flex items-center gap-1 font-semibold">
              <Mic className="w-3 h-3" /> Whisper STT
            </span>
          </div>

          {/* Telephony Screening Query Simulation */}
          <div className="bg-[var(--card-preview-bg)] rounded-lg p-2.5 mb-3 border border-[var(--border-subtle)] flex items-center gap-2 text-xs">
            <ShieldAlert className="w-3.5 h-3.5 text-[var(--accent-interactive)] shrink-0" />
            <span className="text-[var(--text-primary)] font-mono text-[11px] truncate">
              screen_call(&quot;+1-800-UNVERIFIED&quot;)
            </span>
          </div>

          {/* Live Call Screening Snippet */}
          <div className="space-y-2 mb-3">
            <div className="p-2.5 rounded bg-[var(--card-preview-inner)] border border-[var(--border-subtle)] text-[11px] shadow-sm">
              <div className="flex items-center justify-between text-[9px] font-mono text-[var(--text-secondary)] mb-1">
                <span className="font-semibold text-rose-500 dark:text-rose-400">INTENT: SPAM / FRAUD</span>
                <span className="text-[var(--accent-interactive)] font-bold">98% CONFIDENCE</span>
              </div>
              <p className="text-[var(--text-secondary)] line-clamp-2 text-[11px] leading-relaxed">
                Autonomous voice synthesis conversational screening with real-time risk classification.
              </p>
            </div>
          </div>

          {/* Card Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-[var(--border-subtle)] text-[10px] text-[var(--text-secondary)]">
            <span>AI Voice Screening</span>
            <span className="flex items-center gap-0.5 text-[var(--text-primary)] group-hover:text-[var(--accent-interactive)] transition-colors font-medium">
              Details <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </motion.div>

        {/* Panel 2 — Center: AI RESUME ANALYSER (Prominent & Dominant) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.015, transition: { duration: 0.25 } }}
          transition={{ duration: 0.7, delay: shouldReduceMotion ? 0 : 0.25, ease: 'easeOut' }}
          onClick={() => resumeProject && onSelectProject(resumeProject)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if ((e.key === 'Enter' || e.key === ' ') && resumeProject) {
              e.preventDefault();
              onSelectProject(resumeProject);
            }
          }}
          aria-label="Inspect AI Resume Analyser interface"
          className="w-full lg:w-[440px] shrink-0 glass-panel rounded-2xl p-5 sm:p-6 text-left text-[var(--text-primary)] shadow-2xl border border-[var(--border-subtle)] cursor-pointer lg:z-20 relative group hover:border-[var(--accent-interactive)] transition-colors"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-interactive)]" />
              <span className="text-xs font-bold tracking-wider uppercase text-[var(--text-primary)] font-mono">
                AI RESUME ANALYSER
              </span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--card-preview-bg)] border border-[var(--border-subtle)] text-[var(--accent-interactive)] font-semibold">
              FASTAPI · NLP
            </span>
          </div>

          {/* Main Inspection Metric Bar */}
          <div className="bg-[var(--card-preview-bg)] rounded-xl p-4 border border-[var(--border-subtle)] mb-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                <FileText className="w-3.5 h-3.5 text-[var(--accent-interactive)]" />
                <span className="font-medium text-[var(--text-primary)]">Candidate Alignment</span>
              </div>
              <span className="text-sm font-mono font-bold text-[var(--accent-interactive)]">92% Match</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-1.5 bg-[var(--border-subtle)] rounded-full overflow-hidden mb-3">
              <div className="h-full bg-[var(--accent-interactive)] rounded-full w-[92%]" />
            </div>

            {/* Target Role Tag */}
            <div className="text-[10px] text-[var(--text-secondary)] flex items-center justify-between">
              <span>TARGET: AI / Full-Stack Engineer</span>
              <span className="text-[var(--text-primary)] font-medium">Semantic Scoring</span>
            </div>
          </div>

          {/* Skill Breakdown Chips */}
          <div className="mb-4">
            <div className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-secondary)] mb-2">
              Verified Concept Overlaps
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['FastAPI', 'Sentence Transformers', 'NLP Entity Parsing', 'Next.js'].map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 rounded bg-[var(--card-preview-bg)] border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--text-primary)]"
                >
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Summary Insight */}
          <div className="p-3 rounded-lg bg-[var(--card-preview-bg)] border border-[var(--border-subtle)] text-[11px] text-[var(--text-secondary)] flex items-center justify-between">
            <span className="truncate">Surfaces nuanced qualification insights beyond keywords</span>
            <span className="text-[var(--text-primary)] font-medium group-hover:text-[var(--accent-interactive)] transition-colors shrink-0 ml-2 flex items-center gap-0.5">
              Deep Dive <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </motion.div>

        {/* Panel 3 — Right: KLYTRA (Real-Time Messaging) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: shouldReduceMotion ? 0 : 2.5 }}
          whileHover={shouldReduceMotion ? {} : { y: -6, rotate: 0, scale: 1.02, transition: { duration: 0.25 } }}
          transition={{ duration: 0.7, delay: shouldReduceMotion ? 0 : 0.45, ease: 'easeOut' }}
          onClick={() => klytraProject && onSelectProject(klytraProject)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if ((e.key === 'Enter' || e.key === ' ') && klytraProject) {
              e.preventDefault();
              onSelectProject(klytraProject);
            }
          }}
          aria-label="Inspect Klytra messaging interface"
          className="w-full lg:w-[340px] shrink-0 glass-panel rounded-xl p-4 sm:p-5 text-left text-[var(--text-primary)] shadow-2xl border border-[var(--border-subtle)] cursor-pointer lg:z-10 relative group hover:border-[var(--accent-interactive)]/60 transition-colors"
        >
          {/* Window Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-interactive)] animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold">
                KLYTRA / LIVE
              </span>
            </div>
            <span className="text-[10px] font-mono text-[var(--text-secondary)] flex items-center gap-1">
              <MessageSquare className="w-3 h-3 text-[var(--accent-interactive)]" /> #engineering
            </span>
          </div>

          {/* Message Thread Simulation */}
          <div className="space-y-2.5 mb-3">
            <div className="p-2.5 rounded bg-[var(--card-preview-bg)] border border-[var(--border-subtle)] text-[11px]">
              <div className="flex items-center justify-between text-[9px] text-[var(--text-secondary)] mb-1">
                <span className="font-semibold text-[var(--text-primary)]">Team Lead</span>
                <span>Just now</span>
              </div>
              <p className="text-[var(--text-secondary)] text-[11px] leading-relaxed">
                Reviewed the optimistic UI dispatch — response latency feels instantaneous.
              </p>
            </div>

            <div className="p-2.5 rounded bg-[var(--card-preview-inner)] border border-[var(--border-subtle)] text-[11px] ml-3 shadow-sm">
              <div className="flex items-center justify-between text-[9px] text-[var(--accent-interactive)] mb-1">
                <span className="font-semibold">Ravi (Author)</span>
                <span className="flex items-center gap-0.5">
                  <CheckCheck className="w-3 h-3" /> Sent
                </span>
              </div>
              <p className="text-[var(--text-primary)] text-[11px] leading-relaxed">
                Clean state updates in Vite & Tailwind, ready for review.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-[var(--border-subtle)] text-[10px] text-[var(--text-secondary)]">
            <span>Real-time Messaging</span>
            <span className="flex items-center gap-0.5 text-[var(--text-primary)] group-hover:text-[var(--accent-interactive)] transition-colors font-medium">
              Details <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
