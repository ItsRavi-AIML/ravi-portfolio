import React, { useEffect, useRef } from 'react';
import { X, Check, Copy, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { formatTechList } from '../utils/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onContactClick }) => {
  const [copied, setCopied] = React.useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopySummary = async () => {
    const text = `${project.title} (${project.category})\n${project.description}\nTechnologies: ${formatTechList(project.technologies)}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-panel border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-8 text-[var(--text-primary)] shadow-2xl relative"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-interactive)] transition-colors cursor-pointer"
          aria-label="Close project details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Number */}
        <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider text-[var(--accent-interactive)] mb-3">
          <span className="font-editorial text-xl text-[var(--text-primary)]">{project.number}</span>
          <span aria-hidden="true" className="text-[var(--text-secondary)]">/</span>
          <span>{project.category}</span>
        </div>

        {/* Title */}
        <h2 id="modal-project-title" className="font-editorial text-3xl sm:text-4xl font-normal tracking-tight mb-4 text-[var(--text-primary)]">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Problem Statement */}
        {project.problemStatement && (
          <div className="mb-6 p-4 rounded-xl bg-[var(--card-preview-bg)] border border-[var(--border-subtle)]">
            <div className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-secondary)] mb-2">
              Context & Problem
            </div>
            <p className="text-sm text-[var(--text-primary)] leading-relaxed">
              {project.problemStatement}
            </p>
          </div>
        )}

        {/* Architecture Details */}
        {project.architectureDetails && project.architectureDetails.length > 0 && (
          <div className="mb-6">
            <div className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-secondary)] mb-3">
              Technical Architecture
            </div>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]" role="list">
              {project.architectureDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[var(--accent-interactive)] mt-1 select-none font-bold">›</span>
                  <span className="text-[var(--text-primary)] leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Engineering Takeaways */}
        {project.engineeringTakeaways && project.engineeringTakeaways.length > 0 && (
          <div className="mb-6">
            <div className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-secondary)] mb-3">
              Engineering Takeaways
            </div>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]" role="list">
              {project.engineeringTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[var(--text-secondary)] mt-1 select-none font-bold">·</span>
                  <span className="text-[var(--text-secondary)] leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="pt-5 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-secondary)] mb-1">
              Technologies
            </div>
            <div className="text-xs font-mono text-[var(--text-primary)]">
              {formatTechList(project.technologies)}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--accent-interactive)] hover:border-[var(--accent-interactive)] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-interactive)] shadow-sm"
                aria-label={`View ${project.title} source repository on GitHub (opens in new tab)`}
              >
                <span>View Repo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              type="button"
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-secondary)] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-interactive)] cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[var(--accent-interactive)]" />
                  <span className="text-[var(--text-primary)]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Specs</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="px-4 py-1.5 rounded-lg bg-[var(--accent-cta-bg)] text-[var(--accent-cta-text)] text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-interactive)] cursor-pointer shadow-sm"
            >
              Inquire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
