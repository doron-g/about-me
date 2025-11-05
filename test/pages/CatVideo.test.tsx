import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CatVideo from '../../src/pages/CatVideo';

describe('CatVideo', () => {
  it('renders the video title', () => {
    render(<CatVideo />);
    expect(screen.getByText('Cat Video')).toBeTruthy();
  });

  it('renders the YouTube video iframe', () => {
    render(<CatVideo />);
    const iframe = screen.getByTitle('YouTube video player');
    expect(iframe).toBeTruthy();
    expect(iframe.getAttribute('src')).toBe('https://www.youtube.com/embed/-hF2qhio5RU');
  });
});
