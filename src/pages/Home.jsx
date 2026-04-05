import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const heroImageSrc = `${import.meta.env.BASE_URL}hero.png`;
    const highlights = [
        { title: 'مخبوزات خالية من القلوتين', text: 'مناسبة لروتين صحي يومي دون التنازل عن المذاق.' },
        { title: 'تحضير يومي طازج', text: 'دفعات محدودة تخرج يومياً للحفاظ على الجودة والقوام.' },
        { title: 'خيارات فطور وغداء وعشاء', text: 'قائمة خفيفة ومتوازنة تناسب الأفراد والعائلات.' }
    ];
    const signatureItems = [
        { name: 'بان كيك اللوز الخالي من القلوتين', note: 'خيار صباحي خفيف بطابع دافئ ومتوازن.' },
        { name: 'سلطة الكينوا الموسمية', note: 'طبق غداء عملي وغني ومناسب لأسلوب حياة سريع.' },
        { name: 'كيك لوميير منخفض السكر', note: 'حلوى يومية بنكهة واضحة وسكر أقل.' }
    ];
    const serviceNotes = [
        'بوكسات ضيافة وفطور للاجتماعات والمناسبات',
        'طلبات خاصة للكيتو والخالي من السكر',
        'تنسيق يومي لوجبات أخف وأكثر اتزاناً'
    ];

    return (
        <div className="home-page">
            <section className="hero-section" aria-labelledby="home-hero-title">
                <div className="hero-backdrop"></div>
                <div className="hero-container">
                    <div className="hero-content container">
                        <p className="hero-brand">Lumière Bakery</p>
                        <h1 id="home-hero-title">مخبوزات صحية بطابع هادئ ومكونات نظيفة.</h1>
                        <p className="hero-description">
                            نخبز يومياً تشكيلة خالية من القلوتين مع خيارات فطور ووجبات خفيفة صُممت لمن يبحث عن طعم واضح وتجربة أخف على اليوم.
                        </p>
                        <div className="hero-actions">
                            <Link to="/menu" className="btn btn-primary">
                                تصفح قائمة الطعام
                            </Link>
                            <Link to="/contact" className="btn btn-secondary">
                                اطلب بوكساً أو استفسر
                            </Link>
                        </div>
                        <ul className="hero-notes" aria-label="أبرز مزايا مخبز لوميير">
                            <li>طازج يومياً</li>
                            <li>خالي من القلوتين</li>
                            <li>خيارات للمناسبات</li>
                        </ul>
                    </div>
                    <div className="hero-image">
                        <img src={heroImageSrc} alt="تشكيلة من منتجات مخبز لوميير الصحية" />
                    </div>
                </div>
            </section>

            <section className="section trust-section" aria-labelledby="home-features-title">
                <div className="container">
                    <div className="section-heading">
                        <p className="section-kicker">لماذا لوميير</p>
                        <h2 id="home-features-title" className="section-title">تفاصيل صغيرة تصنع فرقاً واضحاً في التجربة.</h2>
                    </div>
                    <div className="highlights-grid">
                        {highlights.map((item) => (
                            <article key={item.title} className="highlight-item">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section signature-section" aria-labelledby="signature-title">
                <div className="container signature-layout">
                    <div className="signature-copy">
                        <p className="section-kicker">اختيارات مميزة</p>
                        <h2 id="signature-title" className="section-title">أطباق ومنتجات تبقى سهلة على اليوم وسريعة في القرار.</h2>
                        <p className="signature-text">
                            صممنا القائمة لتكون واضحة ومباشرة: منتجات صباحية محببة، وجبات خفيفة للمنتصف، وحلوى منخفضة السكر لا تبدو تنازلاً.
                        </p>
                        <Link to="/services" className="text-link">استكشف الخدمات والطلبات الخاصة</Link>
                    </div>
                    <div className="signature-list" aria-label="منتجات مميزة">
                        {signatureItems.map((item, index) => (
                            <article key={item.name} className="signature-item">
                                <span className="signature-index">{String(index + 1).padStart(2, '0')}</span>
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.note}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section catering-section" aria-labelledby="catering-title">
                <div className="container catering-layout">
                    <div className="catering-panel">
                        <p className="section-kicker">للمناسبات والطلبات الخاصة</p>
                        <h2 id="catering-title" className="section-title">تنسيق مرتب لبوكسات الضيافة والفطور دون مبالغة في التنفيذ.</h2>
                    </div>
                    <div className="catering-points">
                        {serviceNotes.map((note) => (
                            <p key={note}>{note}</p>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section final-cta-section" aria-labelledby="home-cta-title">
                <div className="container final-cta">
                    <p className="section-kicker">خطوتك التالية</p>
                    <h2 id="home-cta-title" className="section-title">إذا كنت تبحث عن مخبوزات صحية بطابع يومي عملي، فالبداية من هنا.</h2>
                    <div className="hero-actions">
                        <Link to="/menu" className="btn btn-primary">شاهد القائمة كاملة</Link>
                        <Link to="/contact" className="btn btn-secondary">تواصل معنا الآن</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
