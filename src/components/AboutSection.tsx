import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ABOUT_CONTENT, PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="py-24 md:py-32 border-b border-[var(--border-subtle)] scroll-mt-16 relative transition-colors duration-250"
      aria-labelledby="about-title"
    >
      <div className="w-[calc(100%-40px)] md:w-[min(1160px,calc(100%-48px))] mx-auto">
        {/* Section Label */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-[var(--accent-interactive)] uppercase mb-4"
        >
          {ABOUT_CONTENT.sectionLabel}
        </motion.div>

        {/* Two-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Editorial Heading and Narrative */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-8 flex flex-col items-start text-left"
          >
            <h2
              id="about-title"
              className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[var(--text-primary)] tracking-tight leading-[1.08] mb-8 max-w-2xl text-balance"
            >
              {ABOUT_CONTENT.heading}
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-6">
              {ABOUT_CONTENT.description}
            </p>

            <div className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl space-y-4">
              <p>
                My approach to software is grounded in clarity over complexity. Whether implementing
                vector embeddings for semantic context, crafting an API contract in Python, or refining
                touch boundaries in React, I prefer thoughtful constraints and solid fundamentals over
                bloated frameworks.
              </p>
              <p>
                Outside of coursework, I spend my time exploring NLP pipelines, understanding how systems
                scale reliably, and creating clean tools that feel natural to use.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Refined Focus Card */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.15, ease: 'easeOut' }}
            className="lg:col-span-4 w-full"
          >
            <aside
              className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[var(--border-subtle)] shadow-xl"
              aria-label="Academic and Learning Status"
            >
              <div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-secondary)] mb-4">
                  {ABOUT_CONTENT.card.label}
                </div>

                <div className="font-editorial text-2xl font-normal text-[var(--text-primary)] tracking-wide leading-relaxed mb-6">
                  {ABOUT_CONTENT.card.content}
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-6">
                  Focused on core computational thinking, machine learning theory, and clean full-stack
                  application craft.
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--accent-interactive)]">
                <span className="font-semibold">{PERSONAL_INFO.institution}</span>
                <span className="text-[var(--text-secondary)]">INTEGRATED M.TECH AI</span>
              </div>
            </aside>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
