// src/components/Header.js
import React from 'react';
import DarkModeToggle from './DarkModeToggle'; // DarkModeToggle bileşenini import ediyoruz

const Header = ({
                    activePage,
                    onNavigate, // App.js'den gelen sayfa değiştirme fonksiyonu
                    isDarkMode,
                    toggleDarkMode,
                    isMobileMenuOpen,
                    toggleMobileMenu, // App.js'den gelen mobil menü açma/kapama fonksiyonu
                }) => {
    // Navigasyon menü elemanları
    const navItems = [
        { id: 'home', label: 'Ana Sayfa' },
        { id: 'about', label: 'Hakkımda' },
        { id: 'portfolio', label: 'Portfolyo' },
        { id: 'contact', label: 'İletişim' },
    ];

    // Navigasyon linkine tıklandığında App.js'deki onNavigate fonksiyonunu çağırır
    const handleNavLinkClick = (e, pageId) => {
        e.preventDefault(); // Sayfanın yeniden yüklenmesini engelle
        onNavigate(pageId); // App.js'deki fonksiyonu çağır
        // Mobil menü açıksa ve bir linke tıklandıysa menüyü kapatma logiği App.js'deki onNavigate içinde
    };

    return (
        <header> {/* Bu <header> etiketi App.css'deki header stillerini alacak */}
            <nav> {/* Bu <nav> etiketi App.css'deki nav stillerini alacak */}
                <a
                    href="#home"
                    className={`logo nav-link ${activePage === 'home' ? 'active' : ''}`}
                    onClick={(e) => handleNavLinkClick(e, 'home')}
                >
                    Aleyna Geçit
                </a>

                {/* Mobil menü açma/kapama butonu */}
                {/* Bu butonun stilleri App.css'de .menu-toggle ve .menu-toggle.active olarak tanımlı */}
                <button
                    className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                    aria-label="Menüyü Aç/Kapat"
                    onClick={toggleMobileMenu} // App.js'deki toggleMobileMenu fonksiyonunu çağırır
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Navigasyon linkleri */}
                {/* Mobil menü için .active class'ı App.css'de display: flex gibi bir özellikle yönetilecek */}
                <ul className={isMobileMenuOpen ? 'active' : ''}>
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                                onClick={(e) => handleNavLinkClick(e, item.id)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        {/* DarkModeToggle bileşeni, ilgili propları alarak burada kullanılıyor */}
                        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
