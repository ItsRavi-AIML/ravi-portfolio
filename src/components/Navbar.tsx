import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, FileText, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-250 ${
        scrolled
          ? 'bg-[var(--bg-glass)] backdrop-blur-md border-b border-[var(--border-subtle)] py-3.5 shadow-sm'
          : 'bg-[var(--bg-main)]/70 backdrop-blur-sm py-4'
      }`}
    >
      <div className="w-[calc(100%-40px)] md:w-[min(1160px,calc(100%-48px))] mx-auto flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#top"
          onClick={(e) => handleLinkClick(e, '#top')}
          className="text-xl md:text-2xl font-bold tracking-tight text-[var(--text-primary)] hover:text-[var(--accent-interactive)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-interactive)] rounded"
          aria-label="Ravi portfolio home"
        >
          {PERSONAL_INFO.wordmark}
        </a>

        {/* Desktop Navigation + Social + Resume + Availability + Theme Toggle */}
        <div className="hidden md:flex items-center gap-5 lg:gap-6">
          <nav className="flex items-center gap-5 lg:gap-6" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-xs uppercase font-medium tracking-wider transition-colors duration-200 py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-interactive)] ${
                    isActive
                      ? 'text-[var(--accent-interactive)] font-semibold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Divider */}
          <span className="w-px h-4 bg-[var(--border-subtle)]" aria-hidden="true" />

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-interactive)]"
              aria-label="GitHub Profile (opens in a new tab)"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-interactive)]"
              aria-label="LinkedIn Profile (opens in a new tab)"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Resume Button */}
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--accent-interactive)] hover:text-[var(--accent-interactive)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-interactive)] shadow-sm"
            aria-label="View Resume PDF (opens in a new tab)"
          >
            <FileText className="w-3.5 h-3.5 text-[var(--accent-interactive)]" />
            <span>VIEW RESUME</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Availability Indicator */}
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[11px] font-medium tracking-wide shadow-sm"
            title="Available for internships in 2026"
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent-interactive)] animate-pulse"
              aria-hidden="true"
            />
            <span className="uppercase text-[10px] tracking-wider text-[var(--text-secondary)]">
              {PERSONAL_INFO.availabilityStatus}
            </span>
          </div>

          {/* Compact Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button + Quick Actions */}
        <div className="flex items-center gap-2.5 md:hidden">
          <ThemeToggle className="scale-90" />

          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[10px] font-semibold text-[var(--text-primary)] hover:text-[var(--accent-interactive)]"
            aria-label="View Resume PDF"
          >
            <span>RESUME</span>
            <ArrowUpRight className="w-3 h-3 text-[var(--accent-interactive)]" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-interactive)]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? 'CLOSE ✕' : 'MENU +'}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden w-[calc(100%-40px)] mx-auto mt-3 p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-2xl transition-all"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm uppercase tracking-wider py-1 border-b border-[var(--border-subtle)] flex items-center justify-between ${
                    isActive ? 'text-[var(--accent-interactive)] font-semibold' : 'text-[var(--text-secondary)]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="text-[var(--accent-interactive)] text-xs">●</span>}
                </a>
              );
            })}
          </nav>

          {/* Theme switcher in Mobile Navigation */}
          <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
            <span className="text-xs uppercase font-mono text-[var(--text-secondary)]">Theme Mode</span>
            <ThemeToggle showLabel={true} />
          </div>

          {/* Mobile Social and External Links */}
          <div className="mt-4 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-[var(--bg-main)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:text-[var(--accent-interactive)] transition-colors"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-[var(--bg-main)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:text-[var(--accent-interactive)] transition-colors"
                aria-label="LinkedIn Profile (opens in new tab)"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] bg-[var(--bg-main)] border border-[var(--border-subtle)] hover:border-[var(--accent-interactive)] hover:text-[var(--accent-interactive)]"
            >
              <span>RESUME PDF</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent-interactive)]" />
            </a>
          </div>

          <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
            <span>{PERSONAL_INFO.institution}</span>
            <span className="text-[var(--accent-interactive)]">{PERSONAL_INFO.availabilityStatus}</span>
          </div>
        </div>
      )}
    </motion.header>
  );
};
