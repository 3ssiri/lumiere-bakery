import React from 'react';
import { siteConfig } from '../content/site';
import './FloatingContact.css';

const FloatingContact = () => {
    const { contact } = siteConfig;

    return (
        <a
            href={`https://wa.me/${contact.whatsappNumber}`}
            className="floating-contact"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تواصل سريع عبر واتساب"
        >
            <span className="floating-contact-ping"></span>
            <span className="floating-contact-label">واتساب</span>
        </a>
    );
};

export default FloatingContact;
