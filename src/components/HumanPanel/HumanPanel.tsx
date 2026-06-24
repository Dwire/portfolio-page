import type { ReactElement } from 'react';
import type { MotionValue } from 'motion/react';
import { PersonaPanel } from '../PersonaPanel/PersonaPanel';
import { human } from '../../content/human';
import styles from './HumanPanel.module.css';

interface HumanPanelProps {
  progress: MotionValue<number>;
  hidden: boolean;
}

export function HumanPanel({ progress, hidden }: HumanPanelProps): ReactElement {
  return (
    <PersonaPanel progress={progress} persona="human" hidden={hidden}>
      <h2 className={styles.heading}>{human.heading}</h2>
      <p className={styles.intro}>{human.intro}</p>
      <ul className={styles.cards}>
        {human.cards.map((card) => (
          <li key={card.title} className={styles.card}>
            <span className={styles.emoji} aria-hidden="true">
              {card.emoji}
            </span>
            <p className={styles.cardText}>
              <strong className={styles.cardTitle}>{card.title}</strong> <span>{card.text}</span>
            </p>
          </li>
        ))}
      </ul>
    </PersonaPanel>
  );
}
