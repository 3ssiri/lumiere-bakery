import React from 'react';
import './About.css';

const About = () => {
    const aboutImageSrc = `${import.meta.env.BASE_URL}about.png`;

    return (
        <div className="about-page section" aria-labelledby="about-title">
            <div className="container">
                <h1 id="about-title" className="section-title">من نحن</h1>

                <div className="about-content">
                    <div className="about-text">
                        <h2>مخبز لوميير الصحي</h2>
                        <p>
                            مخبز لوميير هو مشروع صحي يهدف إلى توفير مخبوزات خالية من القلوتين، مصنوعة من مكونات طبيعية عالية الجودة. نؤمن بأن الغذاء الصحي لا يعني التنازل عن الطعم، ولذلك نصنع كل منتجاتنا يدويًا وبأقل نسبة سكر ممكنة.
                        </p>

                        <div className="mission-vision">
                            <div className="mv-card">
                                <h3>رؤيتنا</h3>
                                <p>أن نكون الوجهة الأولى لمن يبحث عن مخبوزات صحية خالية من القلوتين.</p>
                            </div>
                            <div className="mv-card">
                                <h3>رسالتنا</h3>
                                <p>تقديم منتجات طازجة يوميًا، خفيفة على المعدة، ومناسبة لكل من يتبع نظامًا غذائيًا خاصًا.</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-image">
                        <img src={aboutImageSrc} alt="صورة تعبر عن مخبز لوميير ومنتجاته الصحية" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
