import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './Contact';

describe('Contact form', () => {
    test('renders all form fields and submit button', () => {
        render(<Contact />);
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
    });

    test('shows validation errors when submitted empty', () => {
        render(<Contact />);
        fireEvent.click(screen.getByRole('button', { name: /send message/i }));
        expect(screen.getByText(/name is required/i)).toBeInTheDocument();
        expect(screen.getByText(/email is required/i)).toBeInTheDocument();
        expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });

    test('shows email format error for invalid email', () => {
        render(<Contact />);
        fireEvent.change(screen.getByLabelText(/name/i), { target: { name: 'name', value: 'Parker' } });
        fireEvent.change(screen.getByLabelText(/email/i), { target: { name: 'email', value: 'notanemail' } });
        fireEvent.change(screen.getByLabelText(/message/i), { target: { name: 'message', value: 'Hello' } });
        fireEvent.click(screen.getByRole('button', { name: /send message/i }));
        expect(screen.getByText(/valid email/i)).toBeInTheDocument();
    });

    test('clears a field error when the user types in that field', () => {
        render(<Contact />);
        fireEvent.click(screen.getByRole('button', { name: /send message/i }));
        expect(screen.getByText(/name is required/i)).toBeInTheDocument();
        fireEvent.change(screen.getByLabelText(/name/i), { target: { name: 'name', value: 'Parker' } });
        expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument();
    });

    test('has proper aria accessibility attributes on validation errors', () => {
        render(<Contact />);
        const nameInput = screen.getByLabelText(/name/i);
        
        // Initially, fields should not be marked invalid
        expect(nameInput).toHaveAttribute('aria-invalid', 'false');
        expect(nameInput).not.toHaveAttribute('aria-describedby');

        // Submit form to trigger errors
        fireEvent.click(screen.getByRole('button', { name: /send message/i }));

        // Now, name input should be marked as invalid and have aria-describedby pointing to the error message
        expect(nameInput).toHaveAttribute('aria-invalid', 'true');
        expect(nameInput).toHaveAttribute('aria-describedby', 'name-error');
        
        const errorMessage = screen.getByText(/name is required/i);
        expect(errorMessage).toHaveAttribute('id', 'name-error');
    });
});
