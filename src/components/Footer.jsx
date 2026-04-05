import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../content/site';
import './Footer.css';

const Footer = () => {
    const { brand, contact, hours, social } = siteConfig;

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section" aria-labelledby="footer-brand-title">
                    <h3 id="footer-brand-title">{brand.name}</h3>
                    <p>{brand.description}</p>
                </div>
                <div className="footer-section" aria-labelledby="footer-links-title">
                    <h3 id="footer-links-title">روابط سريعة</h3>
                    <ul>
                        <li><Link to="/">الرئيسية</Link></li>
                        <li><Link to="/menu">قائمة الطعام</Link></li>
                        <li><Link to="/services">خدماتنا</Link></li>
                        <li><Link to="/contact">تواصل معنا</Link></li>
                    </ul>
                </div>
                <div className="footer-section" aria-labelledby="footer-contact-title">
                    <h3 id="footer-contact-title">تواصل معنا</h3>
                    <p>{contact.city}</p>
                    <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
                    <p><a href={`tel:${contact.phoneHref}`}>{contact.phoneDisplay}</a></p>
                </div>
                <div className="footer-section" aria-labelledby="footer-hours-title">
                    <h3 id="footer-hours-title">ساعات العمل</h3>
                    <ul>
                        {hours.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <div className="footer-socials" aria-label="روابط التواصل الاجتماعي">
                        {social.map((item) => (
                            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">{item.label}</a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} {brand.name}. جميع الحقوق محفوظة.</p>
            </div>
        </footer>
    );
};

export default Footer;
