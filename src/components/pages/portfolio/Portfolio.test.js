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

    test('renders Alta Stucco and Drift2Sail client project links', () => {
        render(<Portfolio />);
        expect(screen.getByRole('heading', { name: /alta stucco/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /drift2sail/i })).toBeInTheDocument();
        expect(screen.getAllByRole('link', { name: /visit site/i })).toHaveLength(2);
    });

    test('client project links point to the right URLs and open in a new tab', () => {
        render(<Portfolio />);
        const links = screen.getAllByRole('link', { name: /visit site/i });
        const hrefs = links.map((link) => link.getAttribute('href'));
        expect(hrefs).toEqual(expect.arrayContaining(['https://altastucco.com/', 'https://drift2sail.com/']));
        links.forEach((link) => {
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        });
    });
});
