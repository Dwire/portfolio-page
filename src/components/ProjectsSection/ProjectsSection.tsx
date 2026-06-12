import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { projects } from '../../content/projects';
import type { Persona } from '../../content/types';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import styles from './ProjectsSection.module.css';

interface ProjectsSectionProps {
  active: Persona;
}

const headings: Record<Persona, string> = {
  engineer: 'Recent work',
  human: 'Recent builds',
};

/**
 * Persona-aware showcase: swaps project sets when the slider settles on the
 * other persona, with scroll-reveal handled per card.
 */
export function ProjectsSection({ active }: ProjectsSectionProps) {
  const reducedMotion = useReducedMotion();
  const visibleProjects = projects.filter((project) => project.persona === active);

  return (
    <section className={styles.section} aria-label="Projects">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active}
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
          transition={{ duration: reducedMotion ? 0.1 : 0.3, ease: 'easeOut' }}
        >
          <h2 className={styles.heading}>{headings[active]}</h2>
          <div className={styles.list}>
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} flip={index % 2 === 1} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
