import type { Persona, PersonaLink } from './types';
import surfboardsLoopVideo from '../assets/projects/surfboards-loop.mp4';
import shelvesStartImage from '../assets/projects/shelves-01.jpg';
import shelvesFrameImage from '../assets/projects/shelves-02.jpg';
import shelvesInstallImage from '../assets/projects/shelves-03.jpg';
import shelvesProgressImage from '../assets/projects/shelves-04.jpg';
import shelvesFinishedImage from '../assets/projects/shelves-05.jpg';

interface ProjectMediaBase {
  alt: string;
}

export interface ProjectImage extends ProjectMediaBase {
  type: 'image';
  /** Imported asset URL. Drop files in src/assets/projects/ and import them here. */
  src: string;
}

export interface ProjectVideo extends ProjectMediaBase {
  type: 'video';
  /** Imported MP4 asset URL. Drop files in src/assets/projects/ and import them here. */
  src: string;
}

export interface ProjectPlaceholder extends ProjectMediaBase {
  type: 'placeholder';
  /** Placeholder gradient shown until a real image is provided. */
  gradient?: [string, string];
  /** Placeholder glyph rendered over the gradient. */
  emoji?: string;
}

export type ProjectMedia = ProjectImage | ProjectVideo | ProjectPlaceholder;

export interface Project {
  id: string;
  title: string;
  description: string;
  persona: Persona;
  images: ProjectMedia[];
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
    images: [
      {
        type: 'placeholder',
        alt: 'Notification pipeline architecture',
        gradient: ['#1d4ed8', '#38bdf8'],
        emoji: '📬',
      },
    ],
    tags: ['Backend', 'Pipelines', 'Reliability'],
  },
  {
    id: 'location-features',
    title: 'Privacy-sensitive location features',
    description:
      'Location sharing that treats user trust as the primary requirement — careful data modeling, clear consent, and APIs designed around what users actually expect.',
    persona: 'engineer',
    images: [
      {
        type: 'placeholder',
        alt: 'Location feature design',
        gradient: ['#0f766e', '#34d399'],
        emoji: '📍',
      },
    ],
    tags: ['Mobile', 'Privacy', 'APIs'],
  },
  {
    id: 'ai-content-workflows',
    title: 'AI-assisted content workflows',
    description:
      'Production workflows that put AI where it helps — drafting and structuring content — while keeping humans firmly in the loop for judgment calls.',
    persona: 'engineer',
    images: [
      {
        type: 'placeholder',
        alt: 'AI content workflow',
        gradient: ['#6d28d9', '#a78bfa'],
        emoji: '🤖',
      },
    ],
    tags: ['AI', 'Product', 'Full-stack'],
  },
  {
    id: 'surfboards',
    title: 'Spray-painted surfboards',
    description:
      'Custom fades, stencils, and color experiments on boards that still get ridden. The garage smells like aerosol and ambition.',
    persona: 'human',
    images: [
      { type: 'video', src: surfboardsLoopVideo, alt: 'Spray-painted surfboard process video' },
    ],
    tags: ['Aerosol', 'Salt water'],
  },
  {
    id: 'shelves',
    title: 'Custom-built shelving',
    description:
      'Measured twice, cut several times anyway. Designing and building shelves that fit the space — and the strong opinions of everyone living in it.',
    persona: 'human',
    images: [
      { type: 'image', src: shelvesStartImage, alt: 'Shelving project before the build started' },
      { type: 'image', src: shelvesFrameImage, alt: 'Wood shelf frame during construction' },
      { type: 'image', src: shelvesInstallImage, alt: 'Built-in shelves being installed' },
      {
        type: 'image',
        src: shelvesProgressImage,
        alt: 'Shelf build progression with boards in place',
      },
      { type: 'image', src: shelvesFinishedImage, alt: 'Finished custom-built wooden shelves' },
    ],
    tags: ['Woodworking', 'Measured twice'],
  },
  {
    id: 'outside',
    title: 'The outside project',
    description:
      'An ongoing effort to get two small boys (and their dad) outdoors as much as humanly possible. Status: permanently in progress.',
    persona: 'human',
    images: [
      {
        type: 'placeholder',
        alt: 'Outdoors with the family',
        gradient: ['#15803d', '#86efac'],
        emoji: '🌲',
      },
    ],
    tags: ['Family', 'Fresh air'],
  },
];
