import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { TOOLKIT_GROUPS, TOOLKIT_HEADER } from '../data/portfolioData';

export const ToolkitSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="toolkit"
      className="py-24 md:py-32 border-b border-[var(--border-subtle)] scroll-mt-16 relative transition-colors duration-250"
      aria-labelledby="toolkit-title"
    >
      <div className="w-[calc(100%-40px)] md:w-[min(1160px,calc(100%-48px))] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-16 md:mb-20 text-center max-w-2xl mx-auto"
        >
          <div className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-[var(--accent-interactive)] uppercase mb-3">
            {TOOLKIT_HEADER.sectionLabel}
          </div>
          <h2
            id="toolkit-title"
            className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[var(--text-primary)] tracking-tight mb-4"
          >
            {TOOLKIT_HEADER.heading}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {TOOLKIT_HEADER.supportingText}
          </p>
        </motion.div>

        {/* 4 Refined Minimal Interface Panels (Desktop: 4 columns, Tablet: 2, Mobile: 1) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOOLKIT_GROUPS.map((group, index) => (
            <motion.div
              key={group.id}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.08,
                ease: 'easeOut',
              }}
              whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
              className="glass-panel rounded-xl p-6 flex flex-col justify-between border border-[var(--border-subtle)] hover:border-[var(--accent-interactive)]/50 transition-colors shadow-lg"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--border-subtle)]">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--accent-interactive)]">
                    {group.category}
                  </span>
                  <span className="text-[10px] font-mono text-[var(--text-secondary)]">0{index + 1}</span>
                </div>

                {/* Technology Items as clean minimal pills/tags */}
                <ul className="space-y-2.5" role="list">
                  {group.items.map((tech) => (
                    <li
                      key={tech}
                      className="flex items-center justify-between text-sm text-[var(--text-primary)] font-medium py-1.5 px-3 rounded-lg bg-[var(--card-preview-bg)] border border-[var(--border-subtle)] shadow-sm"
                    >
                      <span>{tech}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-interactive)]" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Minimal Counter Footer */}
              <div className="mt-6 pt-3 border-t border-[var(--border-subtle)] text-[10px] font-mono text-[var(--text-secondary)]">
                {group.items.length} CORE TOOLS
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
