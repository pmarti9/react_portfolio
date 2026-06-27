import React from 'react';
import { render, screen } from '@testing-library/react';
import Portfolio from './Portfolio';

describe('Portfolio', () => {
    test('renders GitHub, LinkedIn, and Resume links', () => {
        render(<Portfolio />);
        expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /resume/i })).toBeInTheDocument();
    });

    test('GitHub and LinkedIn links open in a new tab', () => {
        render(<Portfolio />);
        expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('target', '_blank');
        expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('target', '_blank');
    });

    test('external links have noopener noreferrer rel', () => {
        render(<Portfolio />);
        expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('rel', 'noopener noreferrer');
        expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('rel', 'noopener noreferrer');
    });
});
