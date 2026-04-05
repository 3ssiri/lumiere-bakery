import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/react-dom';
import { siteConfig } from '../content/site';
import './FloatingContact.css';

const FloatingContact = () => {
    const { contact } = siteConfig;
    const [isOpen, setIsOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const { x, y, reference, floating, strategy, update } = useFloating({
        strategy: 'fixed',
        placement: 'top-end',
        middleware: [offset(14), flip(), shift({ padding: 12 })],
        whileElementsMounted: autoUpdate
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 769px)');

        const updateViewport = () => {
            setIsDesktop(mediaQuery.matches);
        };

        updateViewport();
        mediaQuery.addEventListener('change', updateViewport);

        return () => mediaQuery.removeEventListener('change', updateViewport);
    }, []);

    useEffect(() => {
        if (!isOpen || !update) {
            return undefined;
        }

        update();
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.floating-contact-shell')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, [isOpen, update]);

    return (
        <div className="floating-contact-shell">
            {isDesktop && isOpen && (
                <div
                    ref={floating}
                    className="floating-contact-panel"
                    style={{
                        position: strategy,
                        top: y ?? 0,
                        left: x ?? 0
                    }}
                >
                    <a href={`https://wa.me/${contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                        واتساب مباشر
                    </a>
                    <a href={`tel:${contact.phoneHref}`}>اتصال سريع</a>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>نموذج التواصل</Link>
                </div>
            )}

            <button
                ref={reference}
                type="button"
                className="floating-contact floating-contact-trigger"
                aria-expanded={isOpen}
                aria-label="فتح خيارات التواصل"
                onClick={() => {
                    if (isDesktop) {
                        setIsOpen((prev) => !prev);
                    } else {
                        window.open(`https://wa.me/${contact.whatsappNumber}`, '_blank', 'noopener,noreferrer');
                    }
                }}
            >
                <span className="floating-contact-ping"></span>
                <span className="floating-contact-label">{isDesktop ? 'تواصل' : 'واتساب'}</span>
            </button>
        </div>
    );
};

export default FloatingContact;
