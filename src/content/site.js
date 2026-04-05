export const siteConfig = {
    brand: {
        name: 'Lumière Bakery',
        arabicName: 'مخبز لوميير الصحي',
        description: 'مخبوزات صحية وخالية من القلوتين مع خيارات يومية للفطور والغداء والعشاء.',
        slogan: 'مخبوزات صحية بطابع هادئ ومكونات نظيفة.'
    },
    contact: {
        city: 'الرياض، المملكة العربية السعودية',
        email: 'info@lumierebakery.com',
        phoneDisplay: '+966 50 000 0000',
        phoneHref: '+966500000000',
        whatsappNumber: '966500000000'
    },
    hours: [
        'السبت - الخميس: 7:00 صباحاً - 11:00 مساءً',
        'الجمعة: 2:00 ظهراً - 11:30 مساءً'
    ],
    social: [
        { label: 'Instagram', href: 'https://instagram.com/lumierebakery' },
        { label: 'WhatsApp', href: 'https://wa.me/966500000000' }
    ],
    seo: {
        url: 'https://lumierebakery.com',
        image: 'https://lumierebakery.com/logo.png'
    }
};

export const buildContactMessage = (formData) => {
    const typeLabels = {
        inquiry: 'استفسار عام',
        bakery: 'مخبوزات',
        meals: 'وجبات',
        boxes: 'بوكسات'
    };

    return [
        `الاسم: ${formData.name}`,
        `رقم الهاتف: ${formData.phone}`,
        `نوع الطلب: ${typeLabels[formData.type] ?? formData.type}`,
        '',
        'تفاصيل الطلب:',
        formData.message
    ].join('\n');
};
