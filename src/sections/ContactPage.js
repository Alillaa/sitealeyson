// src/sections/ContactPage.js
import React from 'react';
import ContactForm from '../components/ContactForm'; // ContactForm bileşenini import et

// İkonlar için SVG bileşenleri (veya ayrı bir dosyadan import edilebilir)
const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
);

const InstagramIcon = () => ( // Orijinalde genel bir sosyal medya ikonu vardı, Instagram olarak örneklendirdim
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4A3.6,3.6 0 0,0 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6A3.6,3.6 0 0,0 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"></path>
    </svg>
);


// React.forwardRef kullanarak App.js'den gelen ref'i section elementine iletiyoruz
const ContactPage = React.forwardRef(({ id, className }, ref) => {
    // İletişim detayları için veri
    const contactDetails = [
        {
            id: 'email',
            icon: <EmailIcon />,
            title: 'E-POSTA',
            text: <a href="mailto:aleyna.gecit@example.com">aleyna.gecit@example.com</a>,
        },
        {
            id: 'phone',
            icon: <PhoneIcon />,
            title: 'TELEFON',
            text: <a href="tel:+90XXXXXXXXXX">+90 XXX XXX XX XX</a>, // Gerçek numara ile değiştirin
        },
        {
            id: 'location',
            icon: <LocationIcon />,
            title: 'KONUM',
            text: <p>İstanbul, Türkiye</p>, // Link olmayan metin için <p>
        },
        {
            id: 'social',
            icon: <InstagramIcon />,
            title: 'SOSYAL MEDYA',
            text: <a href="#" target="_blank" rel="noopener noreferrer">profil_adiniz</a>, // Gerçek sosyal medya linki
        },
    ];

    return (
        <section id={id} className={className} ref={ref}> {/* App.js'den gelen id, className ve ref */}
            <div className="content-wrapper">
                {/* Sayfa Başlığı */}
                <div className="page-header">
                    {/* App.css'de #contact .section-title::before için stil tanımlı olmalı */}
                    <h1 className="section-title">İletişime Geçin</h1>
                    <p>Benimle iletişime geçmek, projeleriniz hakkında konuşmak veya sadece bir merhaba demek için aşağıdaki bilgileri kullanabilirsiniz.</p>
                </div>

                {/* İletişim Detayları Kartları (Animasyon için) */}
                <div className="contact-details-grid content-section-for-anim">
                    {contactDetails.map(detail => (
                        <div key={detail.id} className="contact-detail-card">
                            <div className="contact-card-icon">{detail.icon}</div>
                            <h3>{detail.title}</h3>
                            {/* text prop'u doğrudan JSX elementi olabileceği için bu şekilde render ediyoruz */}
                            {detail.text}
                        </div>
                    ))}
                </div>

                {/* İletişim Formu Bölümü (Animasyon için) */}
                <div className="contact-form-section-wrapper content-section-for-anim">
                    {/* App.css'de #contact .contact-form-section-wrapper .section-title::before için stil tanımlı olmalı */}
                    <h2 className="section-title" style={{ fontSize: '1.7rem', marginTop: '50px' }}>
                        Ya da Formu Kullanın
                    </h2>
                    <ContactForm /> {/* ContactForm bileşeni burada kullanılıyor */}
                </div>
            </div>
        </section>
    );
});

export default ContactPage;
