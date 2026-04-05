import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-page section" aria-labelledby="not-found-title">
            <div className="container">
                <Reveal className="not-found-shell">
                    <p className="section-kicker">404</p>
                    <h1 id="not-found-title" className="section-title">الصفحة التي تبحث عنها غير موجودة.</h1>
                    <p className="not-found-text">
                        ربما تم نقل الرابط أو كتابته بشكل غير صحيح. يمكنك العودة إلى الصفحة الرئيسية أو الانتقال مباشرة إلى قائمة الطعام.
                    </p>
                    <div className="not-found-actions">
                        <Link to="/" className="btn btn-primary">العودة للرئيسية</Link>
                        <Link to="/menu" className="btn btn-secondary">تصفح القائمة</Link>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default NotFound;
