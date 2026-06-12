import type { ReactNode } from 'react';
import { motion, useTransform, type MotionStyle, type MotionValue } from 'motion/react';
import { engineerPalette, humanPalette, type Palette } from './palettes';
import styles from './PersonaTheme.module.css';

interface PersonaThemeProps {
  /** 0 = engineer, 1 = human */
  progress: MotionValue<number>;
  children: ReactNode;
}

const range = (key: keyof Palette): [string, string] => [engineerPalette[key], humanPalette[key]];

/**
 * Maps the persona progress value onto the CSS custom properties every
 * component styles itself with, so the whole page recolors as the slider moves.
 */
export function PersonaTheme({ progress, children }: PersonaThemeProps) {
  const bg = useTransform(progress, [0, 1], range('bg'));
  const surface = useTransform(progress, [0, 1], range('surface'));
  const text = useTransform(progress, [0, 1], range('text'));
  const textMuted = useTransform(progress, [0, 1], range('textMuted'));
  const accent = useTransform(progress, [0, 1], range('accent'));
  const accentContrast = useTransform(progress, [0, 1], range('accentContrast'));
  const border = useTransform(progress, [0, 1], range('border'));
  const shadow = useTransform(progress, [0, 1], range('shadow'));

  // MotionStyle's type doesn't admit CSS custom properties, but motion
  // animates them fine at runtime — hence the cast.
  const themeVars: Record<`--${string}`, MotionValue<string>> = {
    '--color-bg': bg,
    '--color-surface': surface,
    '--color-text': text,
    '--color-text-muted': textMuted,
    '--color-accent': accent,
    '--color-accent-contrast': accentContrast,
    '--color-border': border,
    '--color-shadow': shadow,
  };

  return (
    <motion.div className={styles.theme} style={themeVars as MotionStyle}>
      {children}
    </motion.div>
  );
}
