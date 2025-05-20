// src/components/DarkModeToggle.js
import React from 'react';

// İkonların App.css'deki .sun-icon ve .moon-icon class'ları ile
// ve .dark-mode-toggle-button'ın color özelliği (var(--icon-fill)) ile
// stil alacağını varsayıyoruz.

const SunIcon = () => (
    <svg
        className="sun-icon" // CSS ile boyut ve diğer ince ayarlar yapılabilir
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        // style={{ width: '18px', height: '18px' }} // CSS'ten yönetmek daha iyi olabilir
    >
        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
              fill="currentColor"
        />
        <path d="M12 2V4"/>
        <path d="M12 20V22"/>
        <path d="M4 12H2"/>
        <path d="M22 12H20"/>
        <path d="M19.0711 4.92896L17.6569 6.34317"/>
        <path d="M6.34315 17.6569L4.92893 19.0711"/>
        <path d="M19.0711 19.0711L17.6569 17.6569"/>
        <path d="M6.34315 6.34317L4.92893 4.92896"/>
    </svg>
);

const MoonIcon = () => (
    <svg
        className="moon-icon"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        // style={{ width: '18px', height: '18px' }}
    >
        <path d="M21.64,13.5A9,9,0,1,1,10.5,2.36,7.5,7.5,0,0,0,21.64,13.5Z"/>
    </svg>
);


const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <button
            id="darkModeToggle" // Eğer CSS'te bu ID kullanılıyorsa
            className="dark-mode-toggle-button" // App.css'de stil tanımlamaları olmalı
            aria-label={isDarkMode ? "Açık Modu Etkinleştir" : "Koyu Modu Etkinleştir"}
            onClick={toggleDarkMode}
        >
            {/* CSS'in body.dark-mode class'ına göre ikonları yönetmesine izin verelim */}
            <SunIcon />
            <MoonIcon />
        </button>
    );
};

export default DarkModeToggle;
