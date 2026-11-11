import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, FileText, Shield, MessageSquare, PhoneCall, BookOpen } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { formatTechList } from '../utils/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  const shouldReduceMotion = useReducedMotion();
  const isEven = index % 2 === 1;

  // Render project-specific visual preview interface mockup
  const renderVisualPreview = () => {
    switch (project.id) {
      case 'maya':
        return (
          <div className="bg-[var(--card-preview-bg)] border border-[var(--border-subtle)] rounded-xl p-4 sm:p-5 h-full flex flex-col justify-between font-mono text-xs shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-1.5 text-[10px] text-[var(--text-secondary)]">
                  <PhoneCall className="w-3.5 h-3.5 text-[var(--accent-interactive)]" />
                  <span className="text-[var(--text-primary)] font-medium">maya_screener.py</span>
                </div>
                <span className="text-[9px] text-[var(--accent-interactive)] font-semibold">WHISPER LIVE</span>
              </div>
              <div className="bg-[var(--card-preview-inner)] rounded-md p-3 mb-2 border border-[var(--border-subtle)] text-[11px] shadow-sm">
                <div className="text-[var(--text-secondary)] mb-1">$ screen.analyze_stream(audio_chunks=16)</div>
                <div className="text-[var(--accent-interactive)] font-medium">› Intent: Telemarketing / Fraud risk 98%</div>
                <div className="text-[var(--text-secondary)] mt-1">› Action: Divert to voicemail summary</div>
              </div>
            </div>
            <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] text-[var(--text-secondary)]">
              <span>FastAPI · Whisper STT · Gemini LLM</span>
              <span className="text-[var(--text-primary)] font-medium">Active Shield</span>
            </div>
          </div>
        );

      case 'ai-resume-analyser':
        return (
          <div className="bg-[var(--card-preview-bg)] border border-[var(--border-subtle)] rounded-xl p-4 sm:p-5 h-full flex flex-col justify-between text-xs shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[var(--text-secondary)]">
                  <FileText className="w-3.5 h-3.5 text-[var(--accent-interactive)]" />
                  <span className="text-[var(--text-primary)] font-medium">RESUME INTELLIGENCE</span>
                </div>
                <span className="text-[10px] font-mono text-[var(--accent-interactive)] font-bold">92% SIMILARITY</span>
              </div>
              <div className="bg-[var(--card-preview-inner)] rounded-md p-3 mb-2 border border-[var(--border-subtle)] shadow-sm">
                <div className="text-[10px] text-[var(--text-secondary)] uppercase font-bold mb-1">Target Role Fit</div>
                <div className="text-[var(--text-primary)] font-medium mb-2">Applied AI / Full-Stack Engineer</div>
                <div className="w-full bg-[var(--border-subtle)] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[var(--accent-interactive)] h-full rounded-full w-[92%]" />
                </div>
              </div>
            </div>
            <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] font-mono text-[var(--text-secondary)]">
              <span>FastAPI · Entity Tokenizer</span>
              <span className="text-[var(--accent-interactive)] font-medium">Scored</span>
            </div>
          </div>
        );

      case 'chainguard':
        return (
          <div className="bg-[var(--card-preview-bg)] border border-[var(--border-subtle)] rounded-xl p-4 sm:p-5 h-full flex flex-col justify-between font-mono text-xs shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-1.5 text-[10px] text-[var(--text-secondary)]">
                  <Shield className="w-3.5 h-3.5 text-[var(--accent-interactive)]" />
                  <span className="text-[var(--text-primary)] font-medium">TRANSACTION VERIFIER</span>
                </div>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">STATUS: SECURED</span>
              </div>
              <div className="space-y-1.5 mb-2">
                <div className="bg-[var(--card-preview-inner)] p-2 rounded border border-[var(--border-subtle)] flex items-center justify-between text-[10px]">
                  <span className="text-[var(--text-primary)]">Pattern Heuristic Check</span>
                  <span className="text-[var(--accent-interactive)] font-semibold">PASSED</span>
                </div>
                <div className="bg-[var(--card-preview-inner)] p-2 rounded border border-[var(--border-subtle)] flex items-center justify-between text-[10px]">
                  <span className="text-[var(--text-primary)]">Anomaly Detection Model</span>
                  <span className="text-[var(--accent-interactive)] font-semibold">0.02% DEV</span>
                </div>
              </div>
            </div>
            <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] text-[var(--text-secondary)]">
              <span>36-hr Hackathon Engineering</span>
              <span className="text-[var(--text-primary)] font-medium">Python ML</span>
            </div>
          </div>
        );

      case 'edumind-ai':
        return (
          <div className="bg-[var(--card-preview-bg)] border border-[var(--border-subtle)] rounded-xl p-4 sm:p-5 h-full flex flex-col justify-between font-mono text-xs shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-1.5 text-[10px] text-[var(--text-secondary)]">
                  <BookOpen className="w-3.5 h-3.5 text-[var(--accent-interactive)]" />
                  <span className="text-[var(--text-primary)] font-medium">edumind_adaptive.ts</span>
                </div>
                <span className="text-[9px] text-[var(--accent-interactive)] font-semibold">SYLLABUS GRAPH</span>
              </div>
              <div className="bg-[var(--card-preview-inner)] rounded-md p-3 mb-2 border border-[var(--border-subtle)] text-[11px] shadow-sm">
                <div className="text-[var(--text-secondary)] mb-1">$ study_graph.generate(&quot;Operating Systems&quot;)</div>
                <div className="text-[var(--text-primary)]">› Generated 18 conceptual nodes & 6 quizzes</div>
                <div className="text-[var(--accent-interactive)] mt-1 font-medium">› Mastery Score: 87% (Spaced repetition active)</div>
              </div>
            </div>
            <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] text-[var(--text-secondary)]">
              <span>Gemini LLM · LangChain · Vector Retrieval</span>
              <span className="text-[var(--text-primary)] font-medium">Active</span>
            </div>
          </div>
        );

      case 'klytra':
      default:
        return (
          <div className="bg-[var(--card-preview-bg)] border border-[var(--border-subtle)] rounded-xl p-4 sm:p-5 h-full flex flex-col justify-between text-xs shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[var(--text-secondary)]">
                  <MessageSquare className="w-3.5 h-3.5 text-[var(--accent-interactive)]" />
                  <span className="text-[var(--text-primary)] font-medium">KLYTRA MESSAGING</span>
                </div>
                <span className="text-[10px] font-mono text-[var(--accent-interactive)] font-semibold">● LIVE CHANNEL</span>
              </div>
              <div className="space-y-2 mb-2">
                <div className="bg-[var(--card-preview-inner)] p-2.5 rounded-lg border border-[var(--border-subtle)] text-[11px] shadow-sm">
                  <div className="text-[9px] text-[var(--text-secondary)] mb-0.5 font-medium">Collaborator</div>
                  <div className="text-[var(--text-primary)]">Optimistic dispatch eliminates message UI lag.</div>
                </div>
              </div>
            </div>
            <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] font-mono text-[var(--text-secondary)]">
              <span>React · Vite · Tailwind</span>
              <span className="text-[var(--text-primary)] font-medium">MongoDB Sync</span>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : index * 0.1, ease: 'easeOut' }}
      onClick={() => onSelect(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View technical details for project ${project.title}`}
      className="group relative rounded-2xl p-6 sm:p-8 lg:p-10 glass-panel border border-[var(--border-subtle)] hover:border-[var(--accent-interactive)]/60 transition-all duration-300 cursor-pointer shadow-xl"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
        {/* Editorial Text Column */}
        <div className={`lg:col-span-7 flex flex-col justify-between text-left ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <div>
            {/* Project Number & Category */}
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-4">
              <span className="font-editorial text-2xl sm:text-3xl font-normal text-[var(--text-primary)]">
                {project.number}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-interactive)]" />
              <span className="font-mono text-[11px] text-[var(--accent-interactive)] font-semibold">{project.category}</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight mb-4 group-hover:text-[var(--accent-interactive)] transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6 max-w-xl">
              {project.description}
            </p>
          </div>

          <div>
            {/* Tech Stack */}
            <div className="pt-4 border-t border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)] mb-5">
              {formatTechList(project.technologies)}
            </div>

            {/* Actions: Explore Architecture + Direct View Source Link */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)] group-hover:text-[var(--accent-interactive)] transition-colors">
                <span>EXPLORE ARCHITECTURE</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-main)] hover:border-[var(--accent-interactive)] text-xs font-mono font-medium text-[var(--accent-interactive)] transition-all shadow-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-interactive)]"
                  aria-label={`View source code for ${project.title} on GitHub (opens in new tab)`}
                >
                  <span>VIEW SOURCE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Visual Preview Column */}
        <div className={`lg:col-span-5 w-full h-[220px] sm:h-[240px] lg:h-[260px] ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          {renderVisualPreview()}
        </div>
      </div>
    </motion.article>
  );
};
