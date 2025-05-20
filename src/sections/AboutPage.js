// src/sections/AboutPage.js
import React from 'react';

const AboutPage = React.forwardRef(({ id, className }, ref) => {
    const skills = [
        'Web Tasarımı (UI/UX) & Prototipleme (Figma, Adobe XD)',
        'Ön Yüz Geliştirme (HTML5, CSS3, JavaScript ES6+, React)',
        'Responsive (Duyarlı) Tasarım & Mobil Öncelikli Yaklaşım',
        'Grafik Tasarım & Temel İllüstrasyon (Adobe Illustrator, Photoshop)',
        'Marka Kimliği Oluşturma (Logo, Renk Paleti, Tipografi)',
        'SEO Temelleri ve Performans Optimizasyonu',
    ];

    const education = [
        { degree: 'Lisans Derecesi', field: 'Bilgisayar Mühendisliği (Devam Ediyor)', university: 'ABC Üniversitesi', year: '2021 - Halen' },
        { degree: 'Lise Diploması', field: 'Sayısal', university: 'XYZ Anadolu Lisesi', year: '2017 - 2021' },
    ];

    const languages = [
        { lang: 'Türkçe', level: 'Ana Dil' },
        { lang: 'İngilizce', level: 'İleri Seviye (C1)' },
        { lang: 'Almanca', level: 'Başlangıç Seviyesi (A2)' },
    ];

    const softwareAndTech = [
        '**Tasarım Araçları:** Figma, Adobe XD, Adobe Photoshop, Adobe Illustrator',
        '**Geliştirme Dilleri:** HTML5, CSS3, JavaScript (ES6+), Python (Temel)',
        '**Framework/Kütüphaneler:** React, Bootstrap, Tailwind CSS (Temel), jQuery (Temel)',
        '**Versiyon Kontrol:** Git, GitHub',
        '**Ofis Yazılımları:** MS Office Paketi (Word, Excel, PowerPoint)',
        '**İşletim Sistemleri:** Windows, Linux (Ubuntu)',
    ];


    const AboutSectionImageSvg = () => (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="12" fill="var(--flower-accent)" fillOpacity="0.6"/>
            <path
                d="M50 25C50 25 40 40 30 45C20 50 25 65 35 70C45 75 50 60 50 50C50 60 55 75 65 70C75 65 80 50 70 45C60 40 50 25 50 25Z"
                stroke="var(--accent-primary)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M50 50L50 15M50 50L25 30M50 50L30 70M50 50L70 70M50 50L75 30"
                stroke="var(--accent-primary)"
                strokeWidth="2"
                strokeOpacity="0.6"
                strokeLinecap="round"
            />
        </svg>
    );

    return (
        <section id={id} className={className} ref={ref}>
            <div className="content-wrapper">
                <div className="page-header">
                    <h1 className="section-title">Hakkımda</h1>
                </div>

                <div className="about-content-wrapper content-section-for-anim">
                    <div className="about-content">
                        <div className="about-text">
                            <h2>Ben Aleyna Geçit</h2>
                            <p>Merhaba! Ben Aleyna Geçit, İstanbul'da yaşayan bir web tasarımcısı ve geliştiricisiyim. Tutkum, estetik ve işlevselliği bir araya getirerek kullanıcı dostu ve etkileyici dijital deneyimler yaratmak.</p>
                            <p>Minimalizmi ve doğadan ilham alan tasarımları seviyorum. Projelerimde temiz çizgiler, dengeli kompozisyonlar ve ince detaylara önem veririm. Her bir çalışmamda, kelebeğin zarafetinden, bir çiçeğin sadeliğinden veya bir böceğin karmaşık güzelliğinden esinlenerek özgün bir dokunuş katmaya çalışırım.</p>

                            <h3>Eğitim Bilgileri</h3>
                            {education.map((edu, index) => (
                                <div key={index} className="education-item" style={{ marginBottom: '1em' }}>
                                    <strong>{edu.degree}</strong> - {edu.field}<br />
                                    <em>{edu.university} ({edu.year})</em>
                                </div>
                            ))}

                            <h3>Bilinen Yabancı Diller</h3>
                            <ul>
                                {languages.map((lang, index) => (
                                    <li key={index}><strong>{lang.lang}:</strong> {lang.level}</li>
                                ))}
                            </ul>

                            <h3>Yazılım ve Bilgisayar Bilgileri</h3>
                            <ul>
                                {softwareAndTech.map((tech, index) => (
                                    // Markdown benzeri **kalın** metinleri ayıklayıp strong yapabiliriz ya da doğrudan böyle bırakabiliriz.
                                    // Basitlik adına şimdilik doğrudan string olarak bırakıyorum.
                                    // Daha karmaşık formatlama için bir markdown parser veya özel bileşen gerekebilir.
                                    <li key={index} dangerouslySetInnerHTML={{ __html: tech.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>
                                ))}
                            </ul>

                            <h3>Temel Yeteneklerim</h3>
                            <ul>
                                {skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>

                            <h3>Felsefem</h3>
                            <p>"Az ama öz" felsefesiyle, karmaşadan uzak, net ve etkili çözümler sunmayı hedeflerim. Her projenin kendine özgü bir hikayesi olduğuna inanır ve bu hikayeyi en iyi şekilde anlatan tasarımlar ortaya koymak için titizlikle çalışırım.</p>
                        </div>

                        <div className="about-image">
                            <div className="image-placeholder">
                                <AboutSectionImageSvg />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default AboutPage;
