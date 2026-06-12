import type { MotionValue } from 'motion/react';
import { PersonaPanel } from '../PersonaPanel/PersonaPanel';
import { human } from '../../content/human';
import styles from './HumanPanel.module.css';

interface HumanPanelProps {
  progress: MotionValue<number>;
  hidden: boolean;
}

export function HumanPanel({ progress, hidden }: HumanPanelProps) {
  return (
    <PersonaPanel progress={progress} persona="human" hidden={hidden}>
      <h2 className={styles.heading}>{human.heading}</h2>
      <p className={styles.intro}>{human.intro}</p>
      <ul className={styles.facts}>
        {human.facts.map((fact) => (
          <li key={fact.text} className={styles.fact}>
            <span className={styles.emoji} aria-hidden="true">
              {fact.emoji}
            </span>
            <span>{fact.text}</span>
          </li>
        ))}
      </ul>
    </PersonaPanel>
  );
}
