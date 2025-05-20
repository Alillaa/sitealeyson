// src/components/Preloader.js
import React from 'react';
// CSS stilleri App.css dosyasından global olarak gelecektir.

const Preloader = () => {
    return (
        // Orijinal HTML'deki preloader yapısı
        // CSS class'ları (preloader, spinner) App.css dosyasında tanımlanmıştır.
        // Preloader'ın görünürlüğü (hidden class'ı) App.js'deki 'loading' state'i
        // ile yönetildiği için bu bileşenin içinde ekstra bir class yönetimine gerek yoktur.
        // App.js, loading true iken bu bileşeni render edecek, false olunca etmeyecektir.
        <div className="preloader">
            <div className="spinner"></div>
        </div>
    );
};

export default Preloader;
