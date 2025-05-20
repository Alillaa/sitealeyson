// src/components/AnimatedButterfly.js
import React from 'react';

// Bu bileşen, App.js'den aldığı proplar ile tek bir animasyonlu kelebek oluşturur.
// CSS stilleri (animasyonlar, pozisyonlar) App.css dosyasından gelecektir.
const AnimatedButterfly = ({ type, imgSrc }) => {
    // type: 'butterfly-1', 'butterfly-2' vb. gibi özel CSS class'ını belirler.
    // Bu class, App.css içinde kelebeğin başlangıç pozisyonunu, animasyonunu ve gecikmesini tanımlar.
    // imgSrc: Kelebek görselinin data URI'si veya public klasöründeki bir dosyanın yolu.

    return (
        <div className={`animated-butterfly ${type}`}>
            {/* img etiketi kelebek görselini gösterir.
        'alt' etiketi erişilebilirlik için önemlidir.
        Görselin boyutları ve diğer stilleri App.css üzerinden yönetilebilir.
        Örneğin: .animated-butterfly img { width: 50px; height: auto; }
      */}
            <img src={imgSrc} alt="Uçuşan dekoratif kelebek" />
        </div>
    );
};

export default AnimatedButterfly;
