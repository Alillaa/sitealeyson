// src/sections/HomePage.js
import React from 'react';
import Hero from '../components/Hero'; // Hero bileşenini import et
import PortfolioItem from '../components/PortfolioItem'; // PortfolioItem bileşenini import et

// React.forwardRef kullanarak App.js'den gelen ref'i section elementine iletiyoruz
const HomePage = React.forwardRef(({ id, className }, ref) => {
    // Öne çıkan projeler için veri (normalde bir API'den veya state'ten gelebilir)
    const featuredProjects = [
        {
            id: 'featured-flora', // Benzersiz bir key için
            title: 'Flora Web Tasarımı',
            description: 'Çiçek temalı bir e-ticaret sitesi için zarif ve kullanıcı dostu arayüz tasarımı.',
            // imageSrc: '/images/flora-web.jpg', // Eğer gerçek bir resim varsa
            imageStyle: { background: 'linear-gradient(45deg, var(--accent-secondary), var(--accent-primary))', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize:'1.3rem', fontFamily:'var(--heading-font)', fontWeight:500 },
            imageText: 'Flora Web',
            link: '#', // Gerçek proje linki ile değiştirilecek
        },
        {
            id: 'featured-minimal-blog', // Benzersiz bir key için
            title: 'Minimalist Blog Kimliği',
            description: 'Sade ve içerik odaklı bir blog için logo ve marka kimliği çalışması.',
            // imageSrc: '/images/minimal-blog.jpg', // Eğer gerçek bir resim varsa
            imageStyle: { background: 'linear-gradient(45deg, var(--accent-primary), var(--accent-secondary))', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize:'1.3rem', fontFamily:'var(--heading-font)', fontWeight:500 },
            imageText: 'Minimal Blog',
            link: '#', // Gerçek proje linki ile değiştirilecek
        }
    ];

    // Portfolyo sayfasına gitmek için navigasyon fonksiyonu
    const handleNavigateToPortfolio = (e) => {
        e.preventDefault(); // Varsayılan link davranışını engelle
        // App.js'deki onNavigate fonksiyonu hash değişikliğini dinleyerek
        // sayfayı güncelleyeceği için doğrudan hash'i değiştiriyoruz.
        window.location.hash = 'portfolio';
    };

    return (
        <section id={id} className={className} ref={ref}> {/* App.js'den gelen id, className ve ref */}
            <div className="content-wrapper">
                {/* Hero bileşeni, kendi animasyon class'ını (.content-section-for-anim) içinde barındırır */}
                <Hero />

                {/* Öne Çıkan Projeler Bölümü */}
                {/* Bu bölümün kendisi de App.js'deki Intersection Observer tarafından animasyon için izlenecek */}
                <div className="featured-work content-section-for-anim">
                    <h2 className="section-title">Öne Çıkan Projeler</h2>
                    <div className="portfolio-grid">
                        {featuredProjects.map(project => (
                            <PortfolioItem
                                key={project.id} // Her eleman için benzersiz key
                                title={project.title}
                                description={project.description}
                                imageSrc={project.imageSrc}
                                imageStyle={project.imageStyle}
                                imageText={project.imageText}
                                link={project.link}
                                isSmallButton={true} // Öne çıkan projelerde küçük buton kullanılıyor
                            />
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '35px' }}>
                        <a
                            href="#portfolio"
                            className="btn nav-link-button" // App.css'de .nav-link-button stili olabilir veya sadece .btn
                            onClick={handleNavigateToPortfolio}
                        >
                            Tüm Portfolyom
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default HomePage;
