import type { ReactNode } from 'react';
import { motion, useTransform, type MotionValue } from 'motion/react';
import type { Persona } from '../../content/types';
import styles from './PersonaPanel.module.css';

interface PersonaPanelProps {
  /** 0 = engineer, 1 = human */
  progress: MotionValue<number>;
  persona: Persona;
  /** True when the other persona is active; removes this panel from the a11y tree. */
  hidden: boolean;
  children: ReactNode;
}

/**
 * Shared crossfade wrapper for the two persona content sections. Both panels
 * occupy the same grid cell; opacity and drift are functions of progress.
 */
export function PersonaPanel({ progress, persona, hidden, children }: PersonaPanelProps) {
  const isEngineer = persona === 'engineer';
  const opacity = useTransform(progress, [0.15, 0.85], isEngineer ? [1, 0] : [0, 1]);
  const x = useTransform(progress, [0, 1], isEngineer ? [0, -28] : [28, 0]);

  return (
    <motion.section
      className={styles.panel}
      style={{ opacity, x }}
      aria-hidden={hidden}
      inert={hidden}
    >
      {children}
    </motion.section>
  );
}
