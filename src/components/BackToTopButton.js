// src/components/BackToTopButton.js
import React, { useState, useEffect } from 'react';

// Yukarı ok ikonu için bir React bileşeni
// Orijinal HTML'deki SVG yapısı temel alınmıştır.
const ArrowUpIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20" // Orijinal boyutu koruyoruz
        height="20" // Orijinal boyutu koruyoruz
        viewBox="0 0 24 24"
        fill="none" // İkonun iç dolgusu olmayacak
        stroke="currentColor" // Rengi CSS'den (button text color) alacak
        strokeWidth="3" // Orijinal kalınlığı koruyoruz (JSX'te camelCase değil)
        strokeLinecap="round" // Orijinal değeri koruyoruz (JSX'te camelCase değil)
        strokeLinejoin="round" // Orijinal değeri koruyoruz (JSX'te camelCase değil)
    >
        <path d="M12 19V5M5 12l7-7 7 7"/>
    </svg>
);

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Scroll olayını dinleyerek butonun görünürlüğünü ayarlar
    useEffect(() => {
        const toggleVisibility = () => {
            // Kullanıcı belirli bir miktarda aşağı kaydırdığında butonu göster
            if (window.pageYOffset > 250) { // Orijinal JavaScript'teki eşik değeri (250px)
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Scroll event listener'ını ekle
        window.addEventListener('scroll', toggleVisibility);

        // Bileşen DOM'dan kaldırıldığında (unmount) event listener'ı temizle
        // Bu, memory leak'leri önlemek için önemlidir.
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []); // Boş bağımlılık dizisi [], effect'in sadece bileşen mount edildiğinde ve unmount edildiğinde çalışmasını sağlar.

    // Sayfayı en üste yumuşak bir şekilde kaydıran fonksiyon
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Yumuşak kaydırma efekti
        });
    };

    return (
        // Butonun görünürlüğü 'visible' class'ı ile CSS tarafından yönetilecek.
        // 'isVisible' state'i true olduğunda 'visible' class'ı eklenecek.
        // App.css dosyasında .back-to-top ve .back-to-top.visible için stiller olmalı.
        <button
            className={`back-to-top ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Yukarı Çık" // Erişilebilirlik için etiket
            title="Yukarı Çık" // Fare ile üzerine gelindiğinde görünecek başlık
        >
            <ArrowUpIcon />
        </button>
    );
};

export default BackToTopButton;
