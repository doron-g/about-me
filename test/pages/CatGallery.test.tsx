import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CatGallery from '../../src/pages/CatGallery';

describe('CatGallery', () => {
  it('renders the gallery title', () => {
    render(<CatGallery />);
    expect(screen.getByText('Cat Gallery')).toBeTruthy();
  });

  it('renders the correct number of cat images', () => {
    render(<CatGallery />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(5);
  });
});
