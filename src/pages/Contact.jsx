import React, { useState } from 'react';
import Reveal from '../components/Reveal';
import { buildContactMessage, siteConfig } from '../content/site';
import './Contact.css';

const Contact = () => {
    const { brand, contact } = siteConfig;
    const responsePoints = [
        'رد أولي خلال ساعات العمل',
        'تنسيق مرن للطلبات الخاصة والبوكسات',
        'إمكانية تخصيص الطلب وفق النظام الغذائي'
    ];
    const initialFormData = {
        name: '',
        phone: '',
        type: 'inquiry',
        message: ''
    };
    const [formData, setFormData] = useState({
        ...initialFormData
    });
    const [submittedRequest, setSubmittedRequest] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = buildContactMessage(formData);
        const subject = `${brand.arabicName} | ${formData.name} | ${formData.type}`;
        setSubmittedRequest({
            subject,
            message,
            emailHref: `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`,
            whatsappHref: `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
        });
        setFormData(initialFormData);
    };

    return (
        <div className="contact-page section" aria-labelledby="contact-title">
            <div className="container">
                <h1 id="contact-title" className="section-title">تواصل معنا</h1>

                <div className="contact-content">
                    <Reveal className="contact-info" aria-labelledby="contact-info-title">
                        <h2 id="contact-info-title">معلومات التواصل</h2>
                        <p>للطلبات اليومية، البوكسات، أو الاستفسارات الخاصة بالأنظمة الغذائية، تواصل معنا بالطريقة الأنسب لك.</p>

                        <div className="info-item">
                            <h3>📍 العنوان</h3>
                            <p>الرياض، المملكة العربية السعودية</p>
                        </div>

                        <div className="info-item">
                            <h3>📧 البريد الإلكتروني</h3>
                            <p><a className="contact-link" href={`mailto:${contact.email}`}>{contact.email}</a></p>
                        </div>

                        <div className="info-item">
                            <h3>📱 الهاتف</h3>
                            <p><a className="contact-link" href={`tel:${contact.phoneHref}`}>{contact.phoneDisplay}</a></p>
                        </div>

                        <a href={`https://wa.me/${contact.whatsappNumber}`} className="whatsapp-btn" target="_blank" rel="noopener noreferrer" aria-label="فتح محادثة واتساب مع مخبز لوميير">
                            تواصل معنا عبر واتساب
                        </a>

                        <div className="response-box" aria-label="ما الذي يميز خدمة التواصل">
                            {responsePoints.map((point) => (
                                <p key={point}>{point}</p>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal className="contact-form-container" delay={120}>
                        <div className="contact-form-header">
                            <p className="section-kicker">أرسل طلبك</p>
                            <h2>أخبرنا بما تحتاجه وسنعود إليك بالتفاصيل المناسبة.</h2>
                        </div>
                        {submittedRequest && (
                            <div className="submission-panel" aria-live="polite">
                                <h3>تم تجهيز رسالتك</h3>
                                <p>اختر الآن طريقة الإرسال المناسبة. تم ملء الرسالة تلقائياً لتسريع التواصل.</p>
                                <div className="submission-actions">
                                    <a href={submittedRequest.emailHref} className="btn btn-primary">إرسال عبر البريد</a>
                                    <a href={submittedRequest.whatsappHref} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">إرسال عبر واتساب</a>
                                </div>
                            </div>
                        )}
                        <form className="contact-form" onSubmit={handleSubmit} aria-label="نموذج التواصل">
                            <div className="form-group">
                                <label htmlFor="name">الاسم</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    autoComplete="name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">رقم الهاتف</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    autoComplete="tel"
                                    inputMode="tel"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="type">نوع الطلب</label>
                                <select
                                    id="type"
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                >
                                    <option value="inquiry">استفسار عام</option>
                                    <option value="bakery">مخبوزات</option>
                                    <option value="meals">وجبات</option>
                                    <option value="boxes">بوكسات</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">رسالتك</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    aria-describedby="contact-message-help"
                                    required
                                ></textarea>
                                <small id="contact-message-help" className="form-help">اكتب تفاصيل الطلب أو الاستفسار بشكل مختصر وواضح.</small>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn">تجهيز الرسالة</button>
                        </form>
                    </Reveal>
                </div>
            </div>
        </div>
    );
};

export default Contact;
