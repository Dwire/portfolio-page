import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { Project } from '../../content/projects';
import { ProjectCard } from './ProjectCard';

const galleryProject: Project = {
  id: 'gallery-test',
  title: 'Gallery project',
  description: 'A project with multiple images.',
  persona: 'human',
  images: [
    { type: 'placeholder', alt: 'First view', gradient: ['#111111', '#222222'], emoji: '🖼️' },
    { type: 'placeholder', alt: 'Second view', gradient: ['#333333', '#444444'], emoji: '🎞️' },
  ],
  tags: ['Test'],
};

const videoProject: Project = {
  id: 'video-test',
  title: 'Video project',
  description: 'A project with a single looping video.',
  persona: 'human',
  images: [{ type: 'video', src: '/test-video.mp4', alt: 'Looping process video' }],
};

describe('ProjectCard', () => {
  it('renders title, description, and tags', () => {
    render(<ProjectCard project={galleryProject} flip={false} />);
    expect(screen.getByRole('heading', { name: 'Gallery project' })).toBeInTheDocument();
    expect(screen.getByText('A project with multiple images.')).toBeInTheDocument();
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('renders a single looping video without gallery dots', () => {
    render(<ProjectCard project={videoProject} flip={false} />);

    const video = screen.getByLabelText('Looping process video');
    expect(video.tagName).toBe('VIDEO');
    expect(video).toHaveAttribute('src', '/test-video.mp4');
    expect(video).toHaveAttribute('autoplay');
    expect(video).toHaveAttribute('loop');
    expect(video).toHaveAttribute('playsinline');
    expect((video as HTMLVideoElement).muted).toBe(true);
    expect(screen.queryByRole('button', { name: /Show image/i })).not.toBeInTheDocument();
  });

  it('switches gallery images via the dot buttons', async () => {
    const user = userEvent.setup();
    render(<ProjectCard project={galleryProject} flip={false} />);

    expect(screen.getByRole('img', { name: 'First view' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Second view' })).not.toBeInTheDocument();

    const secondDot = screen.getByRole('button', { name: 'Show image 2 of 2' });
    expect(secondDot).toHaveAttribute('aria-pressed', 'false');
    await user.click(secondDot);

    expect(secondDot).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('img', { name: 'Second view' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'First view' })).not.toBeInTheDocument();
  });
});
