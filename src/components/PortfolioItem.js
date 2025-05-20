// src/components/PortfolioItem.js
import React from 'react';

const PortfolioItem = ({
                           title,
                           description,
                           imageSrc, // Gerçek bir resim URL'i için
                           imageStyle, // Orijinaldeki gibi inline stil ile placeholder için
                           imageText, // Placeholder içindeki metin için
                           link, // "İncele" butonunun yönlendireceği URL
                           isSmallButton = false, // Butonun .btn-small class'ını alıp almayacağı
                           // targetBlank = true, // Linkin yeni sekmede açılıp açılmayacağı (opsiyonel)
                       }) => {
    return (
        <div className="portfolio-item">
            {/* Görsel Alanı */}
            {imageSrc ? (
                // Eğer gerçek bir resim URL'i varsa, img etiketi kullanılır
                <img src={imageSrc} alt={title || 'Portfolyo Projesi'} className="placeholder-image" />
            ) : (
                // Eğer resim URL'i yoksa, orijinaldeki gibi stil ve metin ile placeholder oluşturulur
                <div
                    className="placeholder-image" // App.css'de .placeholder-image için temel stiller olmalı
                    style={imageStyle} // Prop olarak gelen inline stiller (örneğin, background, height)
                >
                    {imageText || title} {/* Placeholder içinde gösterilecek metin */}
                </div>
            )}

            {/* İçerik Alanı */}
            <div className="portfolio-item-content">
                <h3>{title || 'Proje Başlığı'}</h3>
                <p>{description || 'Proje açıklaması buraya gelecek.'}</p>
                <a
                    href={link || '#'}
                    className={`btn ${isSmallButton ? 'btn-small' : ''}`}
                    target="_blank" // Proje linkleri genellikle yeni sekmede açılır
                    rel="noopener noreferrer" // Güvenlik için target="_blank" ile birlikte kullanılır
                >
                    İncele
                </a>
            </div>
        </div>
    );
};

export default PortfolioItem;
