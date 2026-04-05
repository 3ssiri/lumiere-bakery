import React from 'react';
import Seo from '../components/Seo';
import './Services.css';

const Services = () => {
    const servicesList = [
        {
            id: 1,
            title: 'مخبوزات صحية وخالية من القلوتين',
            description: 'نوفر تشكيلة واسعة من الخبز، الكوكيز، الكيك الصحي، والبان كيك الخالي من القلوتين.',
            icon: '🍞'
        },
        {
            id: 2,
            title: 'وجبات فطور صحية يومية',
            description: 'فطور نباتي/بروتين عالي – شوفان – توست صحي – بان كيك.',
            icon: '🍳'
        },
        {
            id: 3,
            title: 'غداء صحي جاهز',
            description: 'سلطات – وجبات بروتين – مكرونة خالية من القلوتين.',
            icon: '🥗'
        },
        {
            id: 4,
            title: 'عشاء خفيف',
            description: 'ساندويتشات – شوربة – سلطات مسائية.',
            icon: '🥪'
        },
        {
            id: 5,
            title: 'طلبات خاصة للأنظمة الغذائية',
            description: 'نظام دايت، كيتو، خالي من السكر، أو حساسية الغلوتين.',
            icon: '📋'
        },
        {
            id: 6,
            title: 'خدمة تجهيز بوكسات المناسبات',
            description: 'بوكس فطور – بوكس ضيافة – بوكس مخبوزات.',
            icon: '🎁'
        }
    ];

    return (
        <div className="services-page section" aria-labelledby="services-title">
            <Seo
                title="خدماتنا"
                description="استكشف خدمات مخبز لوميير من المخبوزات الصحية والوجبات اليومية إلى البوكسات والطلبات الخاصة للأنظمة الغذائية."
                path="/services"
            />
            <div className="container">
                <h1 id="services-title" className="section-title">خدماتنا</h1>
                <div className="services-grid">
                    {servicesList.map(service => (
                        <div key={service.id} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
