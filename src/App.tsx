import { useCallback, useState } from 'react';
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useTransform,
} from 'motion/react';
import { PersonaTheme } from './components/PersonaTheme/PersonaTheme';
import { PersonaPortrait } from './components/PersonaPortrait/PersonaPortrait';
import { EngineerPanel } from './components/EngineerPanel/EngineerPanel';
import { HumanPanel } from './components/HumanPanel/HumanPanel';
import { site } from './content/site';
import type { Persona } from './content/types';
import styles from './App.module.css';

function App() {
  /** 0 = engineer, 1 = human. Single source of truth for the whole page. */
  const progress = useMotionValue(0);
  const [active, setActive] = useState<Persona>('engineer');
  const reducedMotion = useReducedMotion();

  useMotionValueEvent(progress, 'change', (value) => {
    setActive(value > 0.5 ? 'human' : 'engineer');
  });

  const goTo = useCallback(
    (persona: Persona) => {
      const target = persona === 'human' ? 1 : 0;
      if (reducedMotion) {
        progress.set(target);
      } else {
        animate(progress, target, { type: 'spring', stiffness: 150, damping: 22 });
      }
    },
    [progress, reducedMotion],
  );

  const engineerRoleOpacity = useTransform(progress, [0, 1], [1, 0]);
  const humanRoleOpacity = useTransform(progress, [0, 1], [0, 1]);

  return (
    <PersonaTheme progress={progress}>
      <div className={styles.page}>
        <header className={styles.header}>
          <h1 className={styles.name}>{site.name}</h1>
          <p className={styles.role}>
            <motion.span className={styles.roleText} style={{ opacity: engineerRoleOpacity }}>
              {site.engineerRole}
            </motion.span>
            <motion.span
              className={styles.roleText}
              style={{ opacity: humanRoleOpacity }}
              aria-hidden={active !== 'human'}
            >
              {site.humanRole}
            </motion.span>
          </p>
        </header>

        <main>
          <section className={styles.hero} aria-label="Persona">
            <PersonaPortrait progress={progress} active={active} onSelect={goTo} />
            <div className={styles.panels}>
              <EngineerPanel progress={progress} hidden={active !== 'engineer'} />
              <HumanPanel progress={progress} hidden={active !== 'human'} />
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <p>Built with React, Framer Motion, and a refusal to pick just one personality.</p>
        </footer>
      </div>
    </PersonaTheme>
  );
}

export default App;
