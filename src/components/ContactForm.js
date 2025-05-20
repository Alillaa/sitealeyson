// src/components/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
    // Form verilerini tutmak için state'ler
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    // Input alanlarındaki değişiklikleri işleyen fonksiyon
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Form gönderildiğinde çalışacak fonksiyon
    const handleSubmit = (e) => {
        e.preventDefault(); // Sayfanın yeniden yüklenmesini engelle
        // Burada normalde form verileri bir backend'e gönderilir veya bir e-posta servisi kullanılır.
        // Orijinal kodda sadece bir alert gösteriliyordu, biz de onu taklit edelim:
        alert(`Mesajınız Alınmıştır!\n\nAd: ${formData.name}\nE-posta: ${formData.email}\nKonu: ${formData.subject}\nMesaj: ${formData.message}\n\n(Bu sadece bir demo bildirimidir.)`);

        // Formu sıfırla
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        // Orijinal HTML'deki .contact-form class'ı ve yapısı
        // Bu form, ContactPage.js içindeki .contact-form-section-wrapper
        // ve section-title ile birlikte kullanılacak.
        <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Adınız Soyadınız:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Örn: Aleyna Geçit"
                    value={formData.name}
                    onChange={handleChange}
                    required // Zorunlu alan
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">E-posta Adresiniz:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Örn: email@adresiniz.com"
                    value={formData.email}
                    onChange={handleChange}
                    required // Zorunlu alan
                />
            </div>
            <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Örn: Proje Teklifi"
                    value={formData.subject}
                    onChange={handleChange}
                    // Konu zorunlu olmayabilir, isteğe bağlı
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5" // Orijinaldeki gibi
                    placeholder="Merhaba Aleyna..."
                    value={formData.message}
                    onChange={handleChange}
                    required // Zorunlu alan
                ></textarea>
            </div>
            <button type="submit" className="btn">
                Mesajı Gönder
            </button>
        </form>
    );
};

export default ContactForm;
