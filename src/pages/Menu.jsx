import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('breakfast');

    const menuItems = {
        breakfast: [
            { id: 1, name: 'بان كيك خالي من القلوتين', price: '35 ر.س', desc: 'بان كيك هش مصنوع من دقيق اللوز والشوفان' },
            { id: 2, name: 'شوفان لوميير', price: '25 ر.س', desc: 'شوفان مطبوخ مع حليب اللوز والفواكه الطازجة' },
            { id: 3, name: 'توست بروتين', price: '30 ر.س', desc: 'شريحتين توست بروتين مع زبدة الفول السوداني والموز' },
            { id: 4, name: 'بيض بالخضار', price: '28 ر.س', desc: 'بيض مخفوق مع السبانخ والفطر والطماطم' },
            { id: 5, name: 'ساندويتش دجاج صحي', price: '32 ر.س', desc: 'صدر دجاج مشوي مع خس وطماطم في خبز صحي' },
        ],
        lunch: [
            { id: 6, name: 'سلطة كينوا', price: '40 ر.س', desc: 'كينوا، خضروات مشكلة، رمان، صوص الليمون' },
            { id: 7, name: 'سلطة سيزر صحية', price: '38 ر.س', desc: 'خس، دجاج مشوي، خبز محمص خالي من القلوتين، صوص سيزر لايت' },
            { id: 8, name: 'مكرونة خالية من القلوتين', price: '45 ر.س', desc: 'مكرونة مع صلصة الطماطم والريحان وجبنة البارميزان' },
            { id: 9, name: 'دجاج مشوي مع خضار', price: '50 ر.س', desc: 'صدر دجاج متبل بالأعشاب مع خضار سوتيه' },
            { id: 10, name: 'شوربة عدس صحية', price: '20 ر.س', desc: 'شوربة عدس تقليدية بطريقة صحية' },
        ],
        dinner: [
            { id: 11, name: 'ساندويتش خفيف', price: '25 ر.س', desc: 'جبنة حلوم مشوية مع جرجير وطماطم' },
            { id: 12, name: 'توست أفوكادو', price: '35 ر.س', desc: 'توست محمص مع هريس الأفوكادو والبيض المسلوق' },
            { id: 13, name: 'شوربة موسمية', price: '22 ر.س', desc: 'شوربة خضار طازجة' },
            { id: 14, name: 'وجبة بروتين خفيفة', price: '40 ر.س', desc: 'سلطة تونة مع خضروات ورقية' },
        ],
        bakery: [
            { id: 15, name: 'خبز خالي من القلوتين', price: '15 ر.س', desc: 'رغيف خبز طازج يومياً' },
            { id: 16, name: 'كوكيز شوفان', price: '12 ر.س', desc: '3 قطع كوكيز بالشوفان والزبيب' },
            { id: 17, name: 'مافن صحي', price: '14 ر.س', desc: 'مافن التوت الأزرق بدقيق اللوز' },
            { id: 18, name: 'كيك لوميير', price: '28 ر.س', desc: 'شريحة كيك شوكولاتة داكنة منخفضة السكر' },
        ]
    };

    const categories = [
        { id: 'breakfast', label: 'الفطور' },
        { id: 'lunch', label: 'الغداء' },
        { id: 'dinner', label: 'العشاء' },
        { id: 'bakery', label: 'المخبوزات' },
    ];

    return (
        <div className="menu-page section" aria-labelledby="menu-title">
            <div className="container">
                <h1 id="menu-title" className="section-title">قائمة الطعام</h1>

                <div className="menu-tabs" role="tablist" aria-label="فئات قائمة الطعام">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            type="button"
                            className={`menu-tab ${activeCategory === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat.id)}
                            role="tab"
                            aria-selected={activeCategory === cat.id}
                            aria-controls={`panel-${cat.id}`}
                            id={`tab-${cat.id}`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div
                    className="menu-items"
                    role="tabpanel"
                    id={`panel-${activeCategory}`}
                    aria-labelledby={`tab-${activeCategory}`}
                >
                    {menuItems[activeCategory].map(item => (
                        <div key={item.id} className="menu-item">
                            <div className="menu-item-header">
                                <h3>{item.name}</h3>
                                <span className="price">{item.price}</span>
                            </div>
                            <p className="menu-item-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
