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

  it('human content has an intro and facts', () => {
    expect(human.intro).not.toBe('');
    expect(human.facts.length).toBeGreaterThan(0);
    for (const fact of human.facts) {
      expect(fact.text).not.toBe('');
      expect(fact.emoji).not.toBe('');
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
