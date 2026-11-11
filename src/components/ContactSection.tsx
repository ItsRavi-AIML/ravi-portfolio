import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Copy, Check, Mail, FileText, Download, Github, Linkedin, ExternalLink } from 'lucide-react';
import { CONTACT_CONTENT, PERSONAL_INFO } from '../data/portfolioData';
import { generateMailtoUrl } from '../utils/portfolio';

export const ContactSection: React.FC = () => {
  const [copiedPrimary, setCopiedPrimary] = useState(false);
  const [copiedSecondary, setCopiedSecondary] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleCopyEmail = async (email: string, isPrimary: boolean) => {
    let succeeded = false;
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(email);
        succeeded = true;
      } catch {
        succeeded = false;
      }
    }
    if (!succeeded) {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.style.position = 'fixed';
        textarea.style.top = '-9999px';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        succeeded = document.execCommand('copy');
        document.body.removeChild(textarea);
      } catch {
        succeeded = false;
      }
    }
    if (succeeded) {
      if (isPrimary) {
        setCopiedPrimary(true);
        setTimeout(() => setCopiedPrimary(false), 2000);
      } else {
        setCopiedSecondary(true);
        setTimeout(() => setCopiedSecondary(false), 2000);
      }
    }
  };

  const primaryMailto = generateMailtoUrl(
    PERSONAL_INFO.primaryEmail,
    'Portfolio Inquiry — Raja Ravi Varma'
  );

  const secondaryMailto = generateMailtoUrl(
    PERSONAL_INFO.secondaryEmail,
    'Portfolio Inquiry — Raja Ravi Varma'
  );

  return (
    <section
      id="contact"
      className="py-24 md:py-32 scroll-mt-16 relative overflow-hidden transition-colors duration-250"
      aria-labelledby="contact-title"
    >
      {/* Ambient Atmospheric Illumination behind contact card */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] lg:w-[650px] h-[300px] pointer-events-none -z-10 transition-colors duration-300"
        aria-hidden="true"
      >
        <div
          className="w-full h-full rounded-full blur-[130px] opacity-70 transition-colors duration-300"
          style={{ backgroundColor: 'var(--glow-color)' }}
        />
      </div>

      <div className="w-[calc(100%-40px)] md:w-[min(1160px,calc(100%-48px))] mx-auto">
        {/* Section Label */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center text-[10px] sm:text-[11px] font-semibold tracking-widest text-[var(--accent-interactive)] uppercase mb-4"
        >
          {CONTACT_CONTENT.sectionLabel}
        </motion.div>

        {/* Contact Container: Translucent surface with ambient border */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="glass-panel border border-[var(--border-subtle)] rounded-2xl p-8 sm:p-12 md:p-16 max-w-4xl mx-auto shadow-2xl relative mb-16"
        >
          <div className="flex flex-col items-center text-center">
            {/* Personal Portrait: Circular, centered above heading, subtle theme-aware border */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mb-5 sm:mb-6"
            >
              <div className="relative group">
                <img
                  src={PERSONAL_INFO.portraitUrl}
                  alt="Raja Ravi Varma portrait"
                  className="w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] rounded-full object-cover border-2 border-[var(--portrait-border)] shadow-md transition-all duration-300 group-hover:border-[var(--accent-interactive)]"
                  style={{ objectPosition: 'center 30%' }}
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Dramatic Contact Heading with Italic Lime Highlight */}
            <h2
              id="contact-title"
              className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[var(--text-primary)] tracking-tight leading-[1.08] mb-6 text-balance"
            >
              Have an idea?
              <br />
              Let's <span className="italic text-[var(--accent-interactive)]">make it real.</span>
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-lg leading-relaxed mb-10">
              {CONTACT_CONTENT.supportingText}
            </p>

            {/* Direct Email Channels with Clear Visual Hierarchy */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-3xl mx-auto mb-8">
              {/* Primary Email Card */}
              <div className="flex items-center justify-between gap-3 p-3 px-4 rounded-xl bg-[var(--card-preview-bg)] border border-[var(--accent-interactive)]/40 hover:border-[var(--accent-interactive)] transition-all min-w-0 flex-1 shadow-sm">
                <a
                  href={primaryMailto}
                  className="flex items-center gap-2.5 min-w-0 flex-1 text-left group/mail"
                  aria-label={`Send email to primary address ${PERSONAL_INFO.primaryEmail}`}
                  title={`Send email to ${PERSONAL_INFO.primaryEmail}`}
                >
                  <Mail className="w-4 h-4 text-[var(--accent-interactive)] shrink-0" aria-hidden="true" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-[9px] font-mono font-semibold tracking-wider uppercase text-[var(--accent-interactive)] leading-tight">
                      Primary
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-[var(--text-primary)] group-hover/mail:text-[var(--accent-interactive)] transition-colors truncate">
                      {PERSONAL_INFO.primaryEmail}
                    </span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={() => handleCopyEmail(PERSONAL_INFO.primaryEmail, true)}
                  className="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-interactive)] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-interactive)] shrink-0 cursor-pointer min-h-[32px]"
                  aria-label="Copy primary email address to clipboard"
                >
                  {copiedPrimary ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[var(--accent-interactive)] shrink-0" aria-hidden="true" />
                      <span className="text-[var(--text-primary)] text-[11px] font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Secondary Email Card (Alternate Option) */}
              <div className="flex items-center justify-between gap-3 p-3 px-4 rounded-xl bg-[var(--card-preview-bg)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-all min-w-0 flex-1 shadow-sm opacity-90 hover:opacity-100">
                <a
                  href={secondaryMailto}
                  className="flex items-center gap-2.5 min-w-0 flex-1 text-left group/mail"
                  aria-label={`Send email to secondary alternate address ${PERSONAL_INFO.secondaryEmail}`}
                  title={`Send email to alternate address ${PERSONAL_INFO.secondaryEmail}`}
                >
                  <Mail className="w-4 h-4 text-[var(--text-secondary)] shrink-0" aria-hidden="true" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-[9px] font-mono font-medium tracking-wider uppercase text-[var(--text-secondary)] leading-tight">
                      Alternate
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-[var(--text-primary)] group-hover/mail:text-[var(--accent-interactive)] transition-colors truncate">
                      {PERSONAL_INFO.secondaryEmail}
                    </span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={() => handleCopyEmail(PERSONAL_INFO.secondaryEmail, false)}
                  className="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-interactive)] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-interactive)] shrink-0 cursor-pointer min-h-[32px]"
                  aria-label="Copy secondary email address to clipboard"
                >
                  {copiedSecondary ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[var(--accent-interactive)] shrink-0" aria-hidden="true" />
                      <span className="text-[var(--text-primary)] text-[11px] font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Primary Action Button — Exactly One Arrow, Direct Mailto */}
            <div className="mb-10">
              <a
                href={primaryMailto}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[var(--accent-cta-bg)] text-[var(--accent-cta-text)] text-sm sm:text-base font-bold uppercase tracking-wider hover:opacity-90 active:translate-y-0.5 transition-all shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent-interactive)]"
                aria-label="Send email to Raja Ravi Varma via default email application"
              >
                <span>{CONTACT_CONTENT.ctaText}</span>
                <ArrowUpRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </div>

            {/* Direct Social Links (GitHub and LinkedIn) */}
            <div className="flex items-center gap-4 pt-4 border-t border-[var(--border-subtle)]">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] hover:text-[var(--accent-interactive)] hover:border-[var(--accent-interactive)] transition-colors shadow-sm"
                aria-label="Visit Ravi's GitHub profile (opens in new tab)"
              >
                <Github className="w-4 h-4 text-[var(--accent-interactive)]" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-[var(--text-secondary)]" />
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] hover:text-[var(--accent-interactive)] hover:border-[var(--accent-interactive)] transition-colors shadow-sm"
                aria-label="Visit Ravi's LinkedIn profile (opens in new tab)"
              >
                <Linkedin className="w-4 h-4 text-[var(--accent-interactive)]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[var(--text-secondary)]" />
              </a>
            </div>

            {/* Context Footer */}
            <div className="mt-10 pt-6 border-t border-[var(--border-subtle)] w-full flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--text-secondary)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-interactive)]" aria-hidden="true" />
                <span>Available for summer & fall 2026 roles</span>
              </div>
              <span>{PERSONAL_INFO.institution} · {PERSONAL_INFO.location}</span>
            </div>
          </div>
        </motion.div>

        {/* Resume Preview Section (Dedicated Editorial Card) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="glass-panel border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Thumbnail Preview of Resume */}
            <div className="md:col-span-5 relative group">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View full PDF resume of Raja Ravi Varma in a new tab"
                className="block relative rounded-xl overflow-hidden border border-[var(--border-subtle)] shadow-xl bg-white group-hover:border-[var(--accent-interactive)] transition-colors p-1.5"
              >
                <img
                  src={PERSONAL_INFO.resumePreviewUrl}
                  alt="Raja Ravi Varma Resume Document Preview"
                  className="w-full h-auto object-cover max-h-[380px] rounded shadow-sm"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-[var(--accent-interactive)] bg-[var(--bg-main)]/90 px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] backdrop-blur-sm">
                  <span>PAGE 1 PREVIEW</span>
                  <span className="flex items-center gap-1 text-[var(--text-primary)]">
                    CLICK TO EXPAND <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent-interactive)]" />
                  </span>
                </div>
              </a>
            </div>

            {/* Right: Resume Meta & Action Links */}
            <div className="md:col-span-7 flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono font-semibold text-[var(--accent-interactive)] uppercase tracking-widest mb-2">
                  <FileText className="w-3.5 h-3.5" />
                  <span>CURRICULUM VITAE</span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[var(--text-primary)] tracking-tight mb-3">
                  Raja Ravi Varma
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  Integrated M.Tech in Artificial Intelligence student at {PERSONAL_INFO.institution}. Specializing in Applied Machine Learning, LLM agents, and high-performance full-stack web engineering.
                </p>

                <div className="space-y-2 mb-6 text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--accent-interactive)]">›</span>
                    <span>Education: Integrated M.Tech (AI), {PERSONAL_INFO.institution}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--accent-interactive)]">›</span>
                    <span>Key projects: MAYA Call Gatekeeper, AI Resume Analyser, ChainGuard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--accent-interactive)]">›</span>
                    <span>Core stack: Python, FastAPI, TypeScript, React, Vite, Tailwind CSS</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: View Full PDF and Download */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[var(--border-subtle)]">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent-cta-bg)] text-[var(--accent-cta-text)] text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-interactive)]"
                  aria-label="Open Raja Ravi Varma's Resume PDF in new tab"
                >
                  <span>VIEW FULL RESUME</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download="Raja_Ravi_Varma_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:text-[var(--accent-interactive)] hover:border-[var(--accent-interactive)] text-xs font-semibold uppercase tracking-wider transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-interactive)] shadow-sm"
                  aria-label="Download Raja Ravi Varma's Resume PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>DOWNLOAD PDF</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
