import type { MotionValue } from 'motion/react';
import { PersonaPanel } from '../PersonaPanel/PersonaPanel';
import { engineer } from '../../content/engineer';
import styles from './EngineerPanel.module.css';

interface EngineerPanelProps {
  progress: MotionValue<number>;
  hidden: boolean;
}

export function EngineerPanel({ progress, hidden }: EngineerPanelProps) {
  return (
    <PersonaPanel progress={progress} persona="engineer" hidden={hidden}>
      <h2 className={styles.heading}>{engineer.heading}</h2>
      {engineer.intro.map((paragraph) => (
        <p key={paragraph.slice(0, 24)} className={styles.paragraph}>
          {paragraph}
        </p>
      ))}
      <h3 className={styles.subheading}>{engineer.focusAreasLabel}</h3>
      <ul className={styles.chips}>
        {engineer.focusAreas.map((area) => (
          <li key={area} className={styles.chip}>
            {area}
          </li>
        ))}
      </ul>
      <ul className={styles.links}>
        {engineer.links.map((link) => (
          <li key={link.label}>
            <a className={styles.link} href={link.url} target="_blank" rel="noreferrer">
              {link.label} ↗
            </a>
          </li>
        ))}
      </ul>
    </PersonaPanel>
  );
}
