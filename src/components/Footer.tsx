import React from 'react';
import { ArrowUp, Github, Linkedin, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onBackToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBackToTop }) => {
  return (
    <footer className="py-12 border-t border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] bg-[var(--bg-main)] transition-colors duration-250">
      <div className="w-[calc(100%-40px)] md:w-[min(1160px,calc(100%-48px))] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Wordmark and Copyright */}
        <div className="flex items-center gap-3">
          <span className="font-bold text-[var(--text-primary)] tracking-tight text-sm">{PERSONAL_INFO.wordmark}</span>
          <span aria-hidden="true">©</span>
          <span>2026 Raja Ravi Varma. Built with precision.</span>
        </div>

        {/* Links: GitHub, LinkedIn, Resume */}
        <div className="flex items-center gap-6 font-mono text-[11px]">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--accent-interactive)] transition-colors"
            aria-label="GitHub profile (opens in new tab)"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--accent-interactive)] transition-colors"
            aria-label="LinkedIn profile (opens in new tab)"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--accent-interactive)] transition-colors"
            aria-label="Resume PDF (opens in new tab)"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume ↗</span>
          </a>
        </div>

        {/* Back to top */}
        <button
          type="button"
          onClick={onBackToTop}
          className="group inline-flex items-center gap-1.5 text-xs text-[var(--text-secondary)] hover:text-[var(--accent-interactive)] hover:border-[var(--accent-interactive)] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-interactive)] py-1.5 px-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] cursor-pointer shadow-sm"
          aria-label="Scroll back to top"
        >
          <span>TOP</span>
          <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
};
