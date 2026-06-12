import type { Persona, PersonaLink } from './types';

export interface ProjectImage {
  alt: string;
  /** Imported asset URL. Drop files in src/assets/projects/ and import them here. */
  src?: string;
  /** Placeholder gradient shown until a real image is provided. */
  gradient?: [string, string];
  /** Placeholder glyph rendered over the gradient. */
  emoji?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  persona: Persona;
  images: ProjectImage[];
  tags?: string[];
  link?: PersonaLink;
}

// Placeholder projects — replace with real ones. Adding a project here is all
// it takes; the showcase renders whatever is in this list.
export const projects: Project[] = [
  {
    id: 'notification-pipeline',
    title: 'Notification & engagement pipeline',
    description:
      'A shared backend pipeline powering notifications across products — built to be reliable at scale and respectful of the person on the other end.',
    persona: 'engineer',
    images: [{ alt: 'Notification pipeline architecture', gradient: ['#1d4ed8', '#38bdf8'], emoji: '📬' }],
    tags: ['Backend', 'Pipelines', 'Reliability'],
  },
  {
    id: 'location-features',
    title: 'Privacy-sensitive location features',
    description:
      'Location sharing that treats user trust as the primary requirement — careful data modeling, clear consent, and APIs designed around what users actually expect.',
    persona: 'engineer',
    images: [{ alt: 'Location feature design', gradient: ['#0f766e', '#34d399'], emoji: '📍' }],
    tags: ['Mobile', 'Privacy', 'APIs'],
  },
  {
    id: 'ai-content-workflows',
    title: 'AI-assisted content workflows',
    description:
      'Production workflows that put AI where it helps — drafting and structuring content — while keeping humans firmly in the loop for judgment calls.',
    persona: 'engineer',
    images: [{ alt: 'AI content workflow', gradient: ['#6d28d9', '#a78bfa'], emoji: '🤖' }],
    tags: ['AI', 'Product', 'Full-stack'],
  },
  {
    id: 'surfboards',
    title: 'Spray-painted surfboards',
    description:
      'Custom fades, stencils, and color experiments on boards that still get ridden. The garage smells like aerosol and ambition.',
    persona: 'human',
    images: [
      { alt: 'Spray-painted surfboard, front', gradient: ['#e85d75', '#fbbf24'], emoji: '🏄' },
      { alt: 'Spray-painted surfboard, detail', gradient: ['#f97316', '#f9a8d4'], emoji: '🎨' },
    ],
    tags: ['Aerosol', 'Salt water'],
  },
  {
    id: 'shelves',
    title: 'Custom-built shelving',
    description:
      'Measured twice, cut several times anyway. Designing and building shelves that fit the space — and the strong opinions of everyone living in it.',
    persona: 'human',
    images: [{ alt: 'Custom-built wooden shelves', gradient: ['#92400e', '#fbbf24'], emoji: '🪚' }],
    tags: ['Woodworking', 'Measured twice'],
  },
  {
    id: 'outside',
    title: 'The outside project',
    description:
      'An ongoing effort to get two small boys (and their dad) outdoors as much as humanly possible. Status: permanently in progress.',
    persona: 'human',
    images: [{ alt: 'Outdoors with the family', gradient: ['#15803d', '#86efac'], emoji: '🌲' }],
    tags: ['Family', 'Fresh air'],
  },
];
