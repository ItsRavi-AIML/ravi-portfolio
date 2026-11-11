import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FloatingShowcase } from './FloatingShowcase';
import { ProjectItem } from '../types/portfolio';

interface HeroSectionProps {
  onViewWork: () => void;
  onContactClick: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onViewWork,
  onContactClick,
  onSelectProject,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="top"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 border-b border-[var(--border-subtle)] overflow-hidden transition-colors duration-250"
      aria-label="Introduction"
    >
      {/* Top subtle ambient glow that adapts to theme */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-[140px] pointer-events-none -z-10 transition-colors duration-300"
        style={{ backgroundColor: 'var(--glow-hero)' }}
        aria-hidden="true"
      />

      <div className="w-[calc(100%-40px)] md:w-[min(1160px,calc(100%-48px))] mx-auto">
        {/* Main Composition: Side Stats + Central Editorial Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Flank: Supporting Portfolio Info (Desktop) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
            className="hidden lg:flex lg:col-span-2 flex-col gap-10 text-left"
          >
            {PERSONAL_INFO.sideStats.left.map((stat) => (
              <div key={stat.label} className="border-l border-[var(--border-subtle)] pl-4 transition-colors">
                <div className="font-editorial text-3xl font-normal text-[var(--text-primary)] tracking-wide mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-secondary)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Central Hero Column: Dramatic Typography + Centered Narrative */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 flex flex-col items-center text-center mx-auto max-w-3xl"
          >
            {/* Eyebrow Label */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[10px] sm:text-[11px] font-semibold tracking-widest text-[var(--accent-interactive)] uppercase mb-6 shadow-sm transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-interactive)] animate-pulse" />
              <span>{PERSONAL_INFO.roleEyebrow}</span>
            </motion.div>

            {/* Central Dramatic Heading (Northline Editorial Serif + Italic Lime Highlight) */}
            <motion.h1
              variants={itemVariants}
              className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[var(--text-primary)] tracking-tight leading-[1.04] text-balance mb-6"
            >
              Building ideas
              <br />
              into <span className="italic text-[var(--accent-interactive)] font-normal">something real.</span>
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed max-w-[500px] mb-8"
            >
              {PERSONAL_INFO.heroDescription}
            </motion.p>

            {/* Balanced Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <button
                type="button"
                onClick={onViewWork}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent-cta-bg)] text-[var(--accent-cta-text)] text-xs sm:text-sm font-bold uppercase tracking-wider hover:opacity-90 active:translate-y-0.5 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent-interactive)]"
              >
                <span>{PERSONAL_INFO.heroButtons.primary}</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.primaryEmail}`}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] text-xs sm:text-sm font-semibold uppercase tracking-wider hover:border-[var(--accent-interactive)] hover:text-[var(--accent-interactive)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-interactive)] shadow-sm"
                aria-label={`Send email to ${PERSONAL_INFO.primaryEmail}`}
              >
                <span>{PERSONAL_INFO.heroButtons.secondary}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Flank: Supporting Portfolio Info (Desktop) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
            className="hidden lg:flex lg:col-span-2 flex-col gap-10 text-right"
          >
            {PERSONAL_INFO.sideStats.right.map((stat) => (
              <div key={stat.label} className="border-r border-[var(--border-subtle)] pr-4 transition-colors">
                <div className="font-editorial text-3xl font-normal text-[var(--text-primary)] tracking-wide mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-secondary)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Supporting Stats on Mobile / Tablet (Compact Horizontal Grid) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-6 border-t border-[var(--border-subtle)] lg:hidden">
          {[...PERSONAL_INFO.sideStats.left, ...PERSONAL_INFO.sideStats.right].map((stat) => (
            <div key={stat.label} className="text-center p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm">
              <div className="font-editorial text-2xl font-normal text-[var(--text-primary)] mb-0.5">
                {stat.value}
              </div>
              <div className="text-[9px] uppercase font-bold tracking-wider text-[var(--text-secondary)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Project Interface Showcase (Northline Style 3-Panel Preview) */}
        <FloatingShowcase onSelectProject={onSelectProject} />
      </div>
    </section>
  );
};
