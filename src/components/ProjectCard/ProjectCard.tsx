import { useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import type { Project } from '../../content/projects';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  /** Alternate image side on desktop. */
  flip: boolean;
}

export function ProjectCard({ project, flip }: ProjectCardProps) {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const [imageIndex, setImageIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], reducedMotion ? ['0%', '0%'] : ['-7%', '7%']);

  const image = project.images[Math.min(imageIndex, project.images.length - 1)];

  return (
    <motion.article
      ref={ref}
      className={`${styles.card} ${flip ? styles.flip : ''}`}
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reducedMotion ? 0.2 : 0.55, ease: 'easeOut' }}
    >
      <div className={styles.media}>
        <motion.div className={styles.mediaInner} style={{ y: parallaxY }}>
          {image.src ? (
            <img className={styles.image} src={image.src} alt={image.alt} />
          ) : (
            <div
              className={styles.placeholder}
              role="img"
              aria-label={image.alt}
              style={{
                background: `linear-gradient(135deg, ${image.gradient?.[0] ?? '#334155'}, ${image.gradient?.[1] ?? '#64748b'})`,
              }}
            >
              <span aria-hidden="true">{image.emoji}</span>
            </div>
          )}
        </motion.div>
        {project.images.length > 1 && (
          <div className={styles.dots} role="group" aria-label={`${project.title} images`}>
            {project.images.map((candidate, index) => (
              <button
                key={candidate.alt}
                type="button"
                className={styles.dot}
                aria-label={`Show image ${index + 1} of ${project.images.length}`}
                aria-pressed={index === imageIndex}
                onClick={() => setImageIndex(index)}
              />
            ))}
          </div>
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        {project.tags && (
          <ul className={styles.tags}>
            {project.tags.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}
        {project.link && (
          <a className={styles.link} href={project.link.url} target="_blank" rel="noreferrer">
            {project.link.label} ↗
          </a>
        )}
      </div>
    </motion.article>
  );
}
