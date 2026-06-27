import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
    test('renders the email contact link', () => {
        render(<Footer />);
        expect(screen.getByRole('link', { name: /parkerjmartin883@gmail\.com/i })).toBeInTheDocument();
    });

    test('renders GitHub and LinkedIn social links', () => {
        render(<Footer />);
        const links = screen.getAllByRole('link');
        const hrefs = links.map(l => l.getAttribute('href'));
        expect(hrefs).toContain('https://www.github.com/pmarti9');
        expect(hrefs).toContain('https://www.linkedin.com/in/parker-martin-a5361147/');
    });

    test("displays the current year in the date", () => {
        render(<Footer />);
        const year = new Date().getFullYear().toString();
        expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
    });
});
