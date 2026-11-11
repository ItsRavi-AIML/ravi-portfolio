import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FEATURED_PROJECTS, PROJECTS_HEADER } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

interface SelectedProjectsProps {
  onContactClick: () => void;
  selectedProject: ProjectItem | null;
  onSelectProject: (project: ProjectItem | null) => void;
}

export const SelectedProjects: React.FC<SelectedProjectsProps> = ({
  onContactClick,
  selectedProject,
  onSelectProject,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="work"
      className="py-24 md:py-32 border-b border-[var(--border-subtle)] scroll-mt-16 relative transition-colors duration-250"
      aria-labelledby="selected-work-title"
    >
      <div className="w-[calc(100%-40px)] md:w-[min(1160px,calc(100%-48px))] mx-auto">
        {/* Section Header with Editorial Serif Typography */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-16 md:mb-20 text-center max-w-2xl mx-auto"
        >
          <div className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-[var(--accent-interactive)] uppercase mb-3">
            {PROJECTS_HEADER.sectionLabel}
          </div>
          <h2
            id="selected-work-title"
            className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[var(--text-primary)] tracking-tight mb-4"
          >
            {PROJECTS_HEADER.heading}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {PROJECTS_HEADER.supportingText}
          </p>
        </motion.div>

        {/* Editorial Project List: Alternating Cards with Generous Spacing */}
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16">
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              project={project}
              onSelect={(p) => onSelectProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => onSelectProject(null)}
        onContactClick={onContactClick}
      />
    </section>
  );
};
