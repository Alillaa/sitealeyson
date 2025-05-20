// src/sections/PortfolioPage.js
import React from 'react';
import PortfolioItem from '../components/PortfolioItem'; // PortfolioItem bileşenini import et

// React.forwardRef kullanarak App.js'den gelen ref'i section elementine iletiyoruz
const PortfolioPage = React.forwardRef(({ id, className }, ref) => {
    // Portfolyo projeleri için veri (normalde bir API'den veya state'ten gelebilir)
    const portfolioProjects = [
        {
            id: 'project-kurumsal', // Benzersiz key
            title: 'Kurumsal Web Sitesi Yenileme',
            description: 'Teknoloji firması için modern ve kullanıcı odaklı web sitesi tasarımı.',
            // imageSrc: '/images/kurumsal-site.jpg', // Gerçek resim URL'i
            imageStyle: { background: 'var(--accent-primary)', opacity:0.9, height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize:'1.3rem', fontFamily:'var(--heading-font)', fontWeight:500 },
            imageText: 'Kurumsal Site',
            link: '#', // Gerçek proje linki
        },
        {
            id: 'project-mobil-app',
            title: 'Mobil Uygulama Arayüzü',
            description: 'Sağlıklı yaşam ve fitness odaklı bir mobil uygulama için UI/UX tasarımı.',
            // imageSrc: '/images/mobil-app.jpg',
            imageStyle: { background: 'var(--accent-secondary)', opacity:0.9, height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize:'1.3rem', fontFamily:'var(--heading-font)', fontWeight:500 },
            imageText: 'Mobil App UI',
            link: '#',
        },
        {
            id: 'project-sanatci',
            title: 'El Sanatları Markalaşması',
            description: 'Yerel bir sanatçının el yapımı ürünleri için logo ve online mağaza tasarımı.',
            // imageSrc: '/images/sanatci-markasi.jpg',
            imageStyle: { background: 'var(--accent-primary)', opacity:0.8, height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize:'1.3rem', fontFamily:'var(--heading-font)', fontWeight:500 },
            imageText: 'Sanatçı Markası',
            link: '#',
        },
        {
            id: 'project-illustrasyon',
            title: 'İllüstrasyon Serisi',
            description: 'Çocuk kitapları ve dijital medya için hazırlanan botanik ve hayvan illüstrasyonları.',
            // imageSrc: '/images/illustrasyonlar.jpg',
            imageStyle: { background: 'var(--accent-secondary)', opacity:0.8, height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize:'1.3rem', fontFamily:'var(--heading-font)', fontWeight:500 },
            imageText: 'Doğa İllüstrasyonları',
            link: '#',
        },
        // Ana sayfadaki öne çıkan projeler de burada listelenebilir veya farklı projeler eklenebilir
        {
            id: 'project-flora-full',
            title: 'Flora Web Tasarımı (Detaylı)',
            description: 'Çiçek temalı bir e-ticaret sitesi için geliştirilen zarif ve kullanıcı dostu arayüzün tüm detayları.',
            imageStyle: { background: 'linear-gradient(45deg, #E57373, #FFB6C1)', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize:'1.3rem', fontFamily:'var(--heading-font)', fontWeight:500 },
            imageText: 'Flora Detay',
            link: '#',
        },
        {
            id: 'project-blog-full',
            title: 'Minimalist Blog Kimliği (Genişletilmiş)',
            description: 'Sade ve içerik odaklı bir blog için oluşturulan logo, renk paleti ve tipografi dahil olmak üzere tam marka kimliği çalışması.',
            imageStyle: { background: 'linear-gradient(45deg, #4A90E2, #A2D2FF)', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize:'1.3rem', fontFamily:'var(--heading-font)', fontWeight:500 },
            imageText: 'Blog Kimlik Detay',
            link: '#',
        }
    ];

    return (
        <section id={id} className={className} ref={ref}> {/* App.js'den gelen id, className ve ref */}
            <div className="content-wrapper">
                {/* Sayfa Başlığı */}
                <div className="page-header">
                    {/* App.css'de #portfolio .section-title::before için stil tanımlı olmalı */}
                    <h1 className="section-title">Portfolyo</h1>
                    <p>Yaptığım çalışmalardan bazı seçkiler.</p>
                </div>

                {/* Portfolyo Galerisi (Animasyon için) */}
                {/* Bu bölüm App.js'deki Intersection Observer tarafından animasyon için izlenecek */}
                <div className="portfolio-gallery content-section-for-anim">
                    {/* Orijinal HTML'de .full-grid class'ı vardı, gerekliyse eklenebilir veya portfolio-grid'e stil verilebilir */}
                    <div className="portfolio-grid">
                        {portfolioProjects.map(project => (
                            <PortfolioItem
                                key={project.id} // Her eleman için benzersiz key
                                title={project.title}
                                description={project.description}
                                imageSrc={project.imageSrc} // Eğer varsa gerçek resim URL'i
                                imageStyle={project.imageStyle} // Placeholder için stil
                                imageText={project.imageText} // Placeholder metni
                                link={project.link}
                                isSmallButton={true} // Portfolyo sayfasındaki butonlar da küçük olabilir
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});

export default PortfolioPage;
