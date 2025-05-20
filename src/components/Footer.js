// src/components/Footer.js
import React, { useState, useEffect } from 'react';

const Footer = () => {
    // Yılı dinamik olarak almak için state ve effect kullanıyoruz.
    // Alternatif olarak, doğrudan new Date().getFullYear() JSX içinde de kullanılabilir,
    // ancak state ile yönetmek, gelecekte daha karmaşık bir mantık gerekirse esneklik sağlar.
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    // Bu effect, bileşen ilk render edildiğinde yılı ayarlar.
    // Yılın değişmesi pek olası olmasa da, bu bir React pratiğidir.
    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []); // Boş bağımlılık dizisi, effect'in sadece mount ve unmount sırasında çalışmasını sağlar.

    return (
        <footer>
            {/* Orijinal HTML'deki footer yapısı */}
            {/* CSS class'ları (footer, footer p) App.css dosyasında tanımlanmıştır. */}
            <p>
                &copy; <span id="currentYear">{currentYear}</span> Aleyna Geçit. Tüm hakları saklıdır.
            </p>
            <p style={{ fontSize: '0.8rem', opacity: 0.75 }}>
                Minimalizm ve doğadan ilhamla tasarlandı.
            </p>
        </footer>
    );
};

export default Footer;
