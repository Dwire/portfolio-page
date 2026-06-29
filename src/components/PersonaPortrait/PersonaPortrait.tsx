import { useRef, type PointerEvent, type KeyboardEvent } from 'react';
import { motion, useTransform, type MotionValue } from 'motion/react';
import headshotPro from '../../assets/headshot-pro.jpg';
import headshotFun from '../../assets/headshot-fun.jpg';
import { site } from '../../content/site';
import type { Persona } from '../../content/types';
import styles from './PersonaPortrait.module.css';

interface PersonaPortraitProps {
  /** 0 = engineer, 1 = human */
  progress: MotionValue<number>;
  active: Persona;
  onSelect: (persona: Persona) => void;
}

const clamp01 = (value: number): number => Math.min(1, Math.max(0, value));

/**
 * Before/after portrait: the fun headshot sweeps in from the left as the
 * divider handle is dragged right. The handle is also a keyboard slider.
 */
export function PersonaPortrait({ progress, active, onSelect }: PersonaPortraitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const funClip = useTransform(progress, (p) => `inset(0 ${(1 - p) * 100}% 0 0)`);
  // Divider travels the full width; the grip straddles the frame edge at the extremes
  // (the photos clip inside an inner frame, so the grip itself is never cut off).
  const handleLeft = useTransform(progress, (p) => `${p * 100}%`);

  const setFromPointer = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    progress.set(clamp01((clientX - rect.left) / rect.width));
  };

  const handlePointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    draggingRef.current = true;
    progress.stop();
    event.currentTarget.setPointerCapture(event.pointerId);
    setFromPointer(event.clientX);
  };

  const handlePointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    if (draggingRef.current) setFromPointer(event.clientX);
  };

  const settle = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    onSelect(progress.get() > 0.5 ? 'human' : 'engineer');
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowUp':
      case 'End':
        event.preventDefault();
        onSelect('human');
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
      case 'Home':
        event.preventDefault();
        onSelect('engineer');
        break;
    }
  };

  return (
    <div className={styles.figure}>
      <div ref={containerRef} className={styles.portrait}>
        <div className={styles.frame}>
          <img className={styles.photoPro} src={headshotPro} alt={`${site.name}, the engineer`} />
          <motion.img
            className={styles.photoFun}
            src={headshotFun}
            alt={`${site.name}, the human`}
            style={{ clipPath: funClip }}
          />
        </div>
        <button
          type="button"
          className={`${styles.sideButton} ${styles.sideLeft}`}
          aria-hidden="true"
          tabIndex={-1}
          onClick={() => onSelect('engineer')}
        />
        <button
          type="button"
          className={`${styles.sideButton} ${styles.sideRight}`}
          aria-hidden="true"
          tabIndex={-1}
          onClick={() => onSelect('human')}
        />
        <motion.button
          type="button"
          className={styles.handle}
          style={{ left: handleLeft }}
          role="slider"
          aria-label="Persona"
          aria-valuemin={0}
          aria-valuemax={1}
          aria-valuenow={active === 'human' ? 1 : 0}
          aria-valuetext={active === 'human' ? 'Human' : 'Engineer'}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={settle}
          onPointerCancel={settle}
          onKeyDown={handleKeyDown}
        >
          <span className={styles.grip} aria-hidden="true">
            ⇿
          </span>
        </motion.button>
      </div>

      <div className={styles.labels}>
        <button
          type="button"
          className={styles.label}
          aria-pressed={active === 'engineer'}
          onClick={() => onSelect('engineer')}
        >
          Engineer
        </button>
        <span className={styles.labelHint} aria-hidden="true">
          ← drag →
        </span>
        <button
          type="button"
          className={styles.label}
          aria-pressed={active === 'human'}
          onClick={() => onSelect('human')}
        >
          Human
        </button>
      </div>
    </div>
  );
}
