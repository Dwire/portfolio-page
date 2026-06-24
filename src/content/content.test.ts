import { describe, expect, it } from 'vitest';
import { engineer } from './engineer';
import { human } from './human';
import { projects } from './projects';

describe('content modules', () => {
  it('engineer content has intro paragraphs, focus areas, and links', () => {
    expect(engineer.intro.length).toBeGreaterThan(0);
    expect(engineer.focusAreas.length).toBeGreaterThan(0);
    expect(engineer.links.length).toBeGreaterThan(0);
    for (const link of engineer.links) {
      expect(link.url).toMatch(/^https?:\/\//);
    }
  });

  it('human content has an intro and cards', () => {
    expect(human.intro).not.toBe('');
    expect(human.cards.length).toBeGreaterThan(0);
    for (const card of human.cards) {
      expect(card.emoji).not.toBe('');
      expect(card.title).not.toBe('');
      expect(card.text).not.toBe('');
    }
  });

  it('projects cover both personas with unique ids and at least one image each', () => {
    const ids = projects.map((project) => project.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(projects.some((project) => project.persona === 'engineer')).toBe(true);
    expect(projects.some((project) => project.persona === 'human')).toBe(true);
    for (const project of projects) {
      expect(project.images.length).toBeGreaterThan(0);
      for (const image of project.images) {
        expect(image.alt).not.toBe('');
        expect(image.src ?? image.gradient).toBeDefined();
      }
    }
  });
});
