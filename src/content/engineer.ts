import type { PersonaLink } from './types';

export interface EngineerContent {
  heading: string;
  intro: string[];
  focusAreasLabel: string;
  focusAreas: string[];
  links: PersonaLink[];
}

export const engineer: EngineerContent = {
  heading: 'The engineer',
  intro: [
    "I'm a full-stack software engineer driven by the human side of technology: the belief that software only creates value when it improves the experience of its end users.",
    'I enjoy working at the intersection of technical problem-solving and human-centered product thinking — shaping requirements, designing APIs, modeling data, building interfaces, improving reliability, and shipping software that feels useful rather than intrusive.',
    'My experience spans full-stack product engineering across web, mobile, and backend systems: shared backend platforms, privacy-sensitive location features, notification and engagement pipelines, AI-assisted content workflows, React growth surfaces, reusable Flutter architecture, and production data ingestion systems.',
  ],
  focusAreasLabel: 'Focus areas',
  focusAreas: [
    'Full-stack product engineering',
    'Backend platforms & APIs',
    'Mobile & web applications',
    'Data pipelines & automation',
    'Human-centered user experiences',
    'Reliable systems that fit user workflows',
  ],
  // Replace with your real profiles.
  links: [
    { label: 'GitHub', url: 'https://github.com/your-handle' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/your-handle' },
  ],
};
