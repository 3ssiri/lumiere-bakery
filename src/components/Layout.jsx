import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import DesktopCursor from './DesktopCursor';
import { Outlet } from 'react-router-dom';
import Lenis from 'lenis';

const Layout = () => {
    React.useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            return undefined;
        }

        const lenis = new Lenis({
            duration: 1.05,
            smoothWheel: true,
            touchMultiplier: 1.1
        });

        let frameId;

        const raf = (time) => {
            lenis.raf(time);
            frameId = window.requestAnimationFrame(raf);
        };

        frameId = window.requestAnimationFrame(raf);

        return () => {
            window.cancelAnimationFrame(frameId);
            lenis.destroy();
        };
    }, []);

    return (
        <div className="app-layout">
            <a href="#main-content" className="skip-link">تجاوز إلى المحتوى الرئيسي</a>
            <DesktopCursor />
            <Navbar />
            <main id="main-content" className="main-content" tabIndex="-1">
                <Outlet />
            </main>
            <FloatingContact />
            <Footer />
        </div>
    );
};

export default Layout;
