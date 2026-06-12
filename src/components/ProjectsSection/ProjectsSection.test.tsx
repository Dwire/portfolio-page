import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { projects } from '../../content/projects';
import { ProjectsSection } from './ProjectsSection';

describe('ProjectsSection', () => {
  it('shows only engineer projects for the engineer persona', () => {
    render(<ProjectsSection active="engineer" />);
    expect(screen.getByRole('heading', { name: 'Recent work' })).toBeInTheDocument();
    for (const project of projects) {
      const heading = screen.queryByRole('heading', { name: project.title });
      if (project.persona === 'engineer') {
        expect(heading).toBeInTheDocument();
      } else {
        expect(heading).not.toBeInTheDocument();
      }
    }
  });

  it('shows only human projects for the human persona', () => {
    render(<ProjectsSection active="human" />);
    expect(screen.getByRole('heading', { name: 'Recent builds' })).toBeInTheDocument();
    for (const project of projects) {
      const heading = screen.queryByRole('heading', { name: project.title });
      if (project.persona === 'human') {
        expect(heading).toBeInTheDocument();
      } else {
        expect(heading).not.toBeInTheDocument();
      }
    }
  });
});
