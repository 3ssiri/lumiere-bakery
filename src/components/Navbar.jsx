import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const logoSrc = `${import.meta.env.BASE_URL}logo.png`;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 12);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const getNavLinkClass = ({ isActive }) => (
        isActive ? 'nav-link active' : 'nav-link'
    );

    return (
        <nav className={`navbar${isScrolled ? ' navbar-scrolled' : ''}`} aria-label="التنقل الرئيسي">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    <img src={logoSrc} alt="شعار مخبز لوميير" className="logo-img" />
                </Link>

                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <NavLink to="/" end className={getNavLinkClass} onClick={closeMenu}>الرئيسية</NavLink>
                    <NavLink to="/about" className={getNavLinkClass} onClick={closeMenu}>من نحن</NavLink>
                    <NavLink to="/services" className={getNavLinkClass} onClick={closeMenu}>خدماتنا</NavLink>
                    <NavLink to="/menu" className={getNavLinkClass} onClick={closeMenu}>قائمة الطعام</NavLink>
                    <NavLink to="/contact" className={getNavLinkClass} onClick={closeMenu}>تواصل معنا</NavLink>
                </div>

                <button
                    type="button"
                    className="navbar-toggle"
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-label="فتح وإغلاق قائمة التنقل"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
