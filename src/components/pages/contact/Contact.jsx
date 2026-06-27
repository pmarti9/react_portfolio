import React, { useState } from 'react';
import "./Contact.css";

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = 'Name is required';
        if (!form.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = 'Enter a valid email address';
        }
        if (!form.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
        const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
        window.location.href = `mailto:parkerjmartin883@gmail.com?subject=${subject}&body=${body}`;
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="jumbotron">
                            <div className="contact-success">
                                <h2>Message Sent!</h2>
                                <p>Your email client should have opened. I'll get back to you soon.</p>
                                <button
                                    className="contact-reset"
                                    onClick={() => {
                                        setSubmitted(false);
                                        setForm({ name: '', email: '', message: '' });
                                    }}
                                >
                                    Send Another
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="jumbotron">
                        <h1 className="contact-heading">Get In Touch</h1>
                        <hr className="my-2" />
                        <form className="contact-form" onSubmit={handleSubmit} noValidate>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className={`form-input${errors.name ? ' input-error' : ''}`}
                                    placeholder="Your name"
                                    autoComplete="name"
                                />
                                {errors.name && <span className="error-msg" role="alert">{errors.name}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className={`form-input${errors.email ? ' input-error' : ''}`}
                                    placeholder="your@email.com"
                                    autoComplete="email"
                                />
                                {errors.email && <span className="error-msg" role="alert">{errors.email}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    className={`form-input form-textarea${errors.message ? ' input-error' : ''}`}
                                    placeholder="What would you like to say?"
                                    rows={6}
                                />
                                {errors.message && <span className="error-msg" role="alert">{errors.message}</span>}
                            </div>
                            <button type="submit" className="contact-submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
