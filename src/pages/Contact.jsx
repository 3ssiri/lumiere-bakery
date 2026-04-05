import React, { useState } from 'react';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import { buildContactMessage, siteConfig } from '../content/site';
import './Contact.css';

const encodeFormData = (data) => new URLSearchParams(data).toString();

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
    const [submissionStatus, setSubmissionStatus] = useState('idle');
    const [submittedRequest, setSubmittedRequest] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = buildContactMessage(formData);
        const subject = `${brand.arabicName} | ${formData.name} | ${formData.type}`;
        const submissionPayload = {
            subject,
            message,
            emailHref: `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`,
            whatsappHref: `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
        };

        setSubmissionStatus('submitting');

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encodeFormData({
                    'form-name': 'contact',
                    name: formData.name,
                    phone: formData.phone,
                    type: formData.type,
                    message: formData.message,
                    'bot-field': ''
                })
            });

            if (!response.ok) {
                throw new Error('Submission failed');
            }

            setSubmittedRequest(submissionPayload);
            setSubmissionStatus('success');
            setFormData(initialFormData);
        } catch (error) {
            setSubmittedRequest(submissionPayload);
            setSubmissionStatus('error');
        }
    };

    return (
        <div className="contact-page section" aria-labelledby="contact-title">
            <Seo
                title="تواصل معنا"
                description="أرسل طلبك أو استفسارك إلى مخبز لوميير مباشرة عبر نموذج التواصل أو واتساب أو البريد الإلكتروني."
                path="/contact"
            />
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
                        {submissionStatus === 'success' && submittedRequest && (
                            <div className="submission-panel" aria-live="polite">
                                <h3>تم استلام طلبك بنجاح</h3>
                                <p>وصل النموذج إلى الموقع. ويمكنك أيضاً استخدام إحدى القنوات المباشرة إذا رغبت في متابعة أسرع.</p>
                                <div className="submission-actions">
                                    <a href={submittedRequest.emailHref} className="btn btn-primary">إرسال عبر البريد</a>
                                    <a href={submittedRequest.whatsappHref} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">إرسال عبر واتساب</a>
                                </div>
                            </div>
                        )}
                        {submissionStatus === 'error' && submittedRequest && (
                            <div className="submission-panel submission-panel-error" aria-live="polite">
                                <h3>تعذر إرسال النموذج حالياً</h3>
                                <p>يمكنك المتابعة فوراً عبر البريد أو واتساب إلى أن يتم تحديث بيانات التواصل أو معالجة المشكلة.</p>
                                <div className="submission-actions">
                                    <a href={submittedRequest.emailHref} className="btn btn-primary">إرسال عبر البريد</a>
                                    <a href={submittedRequest.whatsappHref} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">إرسال عبر واتساب</a>
                                </div>
                            </div>
                        )}
                        <form
                            className="contact-form"
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            onSubmit={handleSubmit}
                            aria-label="نموذج التواصل"
                        >
                            <input type="hidden" name="form-name" value="contact" />
                            <input type="hidden" name="bot-field" />
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

                            <button type="submit" className="btn btn-primary submit-btn" disabled={submissionStatus === 'submitting'}>
                                {submissionStatus === 'submitting' ? 'جارٍ الإرسال...' : 'إرسال الطلب'}
                            </button>
                        </form>
                    </Reveal>
                </div>
            </div>
        </div>
    );
};

export default Contact;
