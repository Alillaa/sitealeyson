// src/components/Hero.js
import React from 'react';
import TypedText from './TypedText'; // TypedText bileşenini import ediyoruz

const Hero = () => {
    // Butonlara tıklandığında ilgili sayfa hash'ine yönlendirme yapar.
    // App.js'deki hash listener bu değişikliği yakalayıp sayfayı güncelleyecektir.
    const handleNavigate = (e, targetId) => {
        e.preventDefault(); // Varsayılan link davranışını engelle
        window.location.hash = targetId;
    };

    return (
        // Ana hero sarmalayıcısı.
        // '.hero' class'ı genel hero stillerini,
        // '.content-section-for-anim' class'ı ise App.js'deki Intersection Observer
        // tarafından animasyonun tetiklenmesini sağlar.
        <div className="hero content-section-for-anim">
            <div className="hero-content">
                {/* Başlık ve animasyonlu yazı */}
                <h1>
                    <TypedText
                        textToType="Merhaba, Ben Aleyna Geçit" // TypedText bileşenine yazılacak metni prop olarak geçiyoruz
                        typingSpeed={80} // Yazma hızını (milisaniye cinsinden) ayarlayabilirsiniz
                    />
                </h1>
                {/* Tanıtım paragrafı */}
                <p>
                    Web Tasarımcısı ve Geliştiricisi. Minimalist ve kullanıcı odaklı dijital deneyimler yaratıyorum.
                </p>
                {/* Eylem çağrısı butonları */}
                <a
                    href="#portfolio"
                    className="btn nav-link-button" // .nav-link-button class'ı orijinal HTML'de vardı, gerekirse App.css'de stil verilebilir
                    onClick={(e) => handleNavigate(e, 'portfolio')}
                >
                    Çalışmalarıma Göz Atın
                </a>
                <a
                    href="#contact"
                    className="btn btn-secondary nav-link-button" // .btn-secondary stili de App.css'de olmalı
                    onClick={(e) => handleNavigate(e, 'contact')}
                >
                    İletişime Geçin
                </a>
            </div>
        </div>
    );
};

export default Hero;
