import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="app-layout">
            <a href="#main-content" className="skip-link">تجاوز إلى المحتوى الرئيسي</a>
            <Navbar />
            <main id="main-content" className="main-content" tabIndex="-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
