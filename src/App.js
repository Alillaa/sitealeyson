// src/App.js
import React, { useState, useEffect, useCallback, useRef } from 'react';
import './App.css'; // app_css_complete_v2 içeriğini kullandığınızdan emin olun

import Preloader from './components/Preloader';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import AnimatedButterfly from './components/AnimatedButterfly';

import HomePage from './sections/HomePage';
import AboutPage from './sections/AboutPage';
import PortfolioPage from './sections/PortfolioPage';
import ContactPage from './sections/ContactPage';

const SECTION_TRANSITION_SPEED = 400; // CSS'deki --section-transition-speed (ms)

function App() {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === null ? true : savedMode === 'true'; // Varsayılan koyu tema
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pageRefs = {
    home: useRef(null),
    about: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null),
  };

  // Preloader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.add('loaded');
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Dark Mode
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prevMode => !prevMode);
  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  // Sayfaya Scroll Etme Fonksiyonu
  const scrollToSection = useCallback((pageId, behavior = 'smooth') => {
    const targetRef = pageRefs[pageId];
    if (targetRef && targetRef.current) {
      // Elementin görünür olup olmadığını kontrol et (display:none değilse)
      if (targetRef.current.offsetParent === null && behavior === 'smooth') {
        // Eğer element henüz DOM'da tam olarak yerleşmemişse (display:none olabilir),
        // kısa bir gecikmeyle tekrar dene. 'auto' scroll için bu kontrol atlanabilir.
        setTimeout(() => scrollToSection(pageId, behavior), 50);
        return;
      }
      const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'), 10) || 70;
      const elementAbsoluteTop = targetRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementAbsoluteTop - headerHeight - 20;

      window.scrollTo({
        top: offsetPosition < 0 ? 0 : offsetPosition,
        behavior: behavior
      });
    }
  }, [pageRefs]);

  // Navigasyon ve Sayfa Değiştirme Mantığı
  const handleNavigate = useCallback((pageId) => {
    if (!pageId || !pageRefs[pageId]) {
      pageId = 'home'; // Geçersizse ana sayfaya
    }

    // Eğer zaten o sayfadaysak ve mobil menü açıksa sadece menüyü kapat, tekrar scroll etme/animasyon yapma
    if (pageId === activePage && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      return;
    }
    // Eğer zaten o sayfadaysak ve mobil menü kapalıysa, sadece sayfanın başına scroll et
    if (pageId === activePage && !isMobileMenuOpen) {
      scrollToSection(pageId, 'smooth');
      return;
    }


    const currentActivePageElement = document.querySelector('.page-section.active');
    const targetPageElement = pageRefs[pageId].current;

    if (targetPageElement) {
      // Önceki sayfayı gizle (eğer varsa)
      if (currentActivePageElement && currentActivePageElement.id !== pageId) {
        currentActivePageElement.classList.remove('active');
        currentActivePageElement.classList.add('fade-out');
        setTimeout(() => {
          // Sadece hala aktif olmayan ve fade-out olanı gizle
          if (currentActivePageElement && currentActivePageElement.classList.contains('fade-out')) {
            currentActivePageElement.style.display = 'none';
            currentActivePageElement.classList.remove('fade-out');
          }
        }, SECTION_TRANSITION_SPEED);
      }

      // Yeni sayfayı göster
      targetPageElement.style.display = 'block';
      // DOM'un display:block değişikliğini işlemesi için bir sonraki frame'i bekle
      requestAnimationFrame(() => {
        targetPageElement.classList.remove('fade-out'); // Olası bir önceki fade-out'u temizle
        targetPageElement.classList.add('active'); // Giriş animasyonunu tetikle
        setActivePage(pageId); // React state'ini güncelle
        if (window.location.hash !== `#${pageId}`) {
          // Tarayıcı geçmişinde çok fazla girdi oluşmasını engellemek için replaceState daha iyi olabilir
          window.history.pushState({page: pageId}, '', `#${pageId}`);
          // window.location.hash = pageId; // Basit yöntem
        }
        // Scroll işlemini, sayfa 'active' class'ını aldıktan ve animasyon başladıktan
        // hemen sonra yap. 'auto' ile anında zıplama.
        scrollToSection(pageId, 'auto');
      });
    }

    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [activePage, isMobileMenuOpen, pageRefs, scrollToSection]);

  // Hash Değişikliklerini Dinleme ve İlk Yükleme
  useEffect(() => {
    const processHashAndInitialLoad = () => {
      if (loading) return; // Preloader bitene kadar bekle

      const pageIdFromHash = window.location.hash.substring(1) || 'home';
      handleNavigate(pageIdFromHash);
    };

    // İlk yükleme için (loading bittikten sonra)
    if (!loading) {
      processHashAndInitialLoad();
    }

    // Sonraki hash değişiklikleri için listener
    window.addEventListener('hashchange', processHashAndInitialLoad);
    return () => {
      window.removeEventListener('hashchange', processHashAndInitialLoad);
    };
  }, [loading, handleNavigate]); // Sadece loading ve handleNavigate bağımlılıkları

  // İçerik Animasyonları (Intersection Observer)
  useEffect(() => {
    if (loading) return;
    const currentRef = pageRefs[activePage]?.current;
    if (!currentRef) return;

    const animatedContents = currentRef.querySelectorAll('.content-section-for-anim');
    if (animatedContents.length === 0) return;

    // Sayfa değiştiğinde önceki animasyonları sıfırla
    animatedContents.forEach(content => {
      content.classList.remove('animate');
      content.style.opacity = '0';
      content.style.transform = 'translateY(20px)';
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.15 });

    animatedContents.forEach(content => observer.observe(content));
    return () => animatedContents.forEach(content => observer.unobserve(content));
  }, [activePage, loading, pageRefs]);

  const butterflyData = [
    { type: 'butterfly-1', imgSrc: "data:image/svg+xml;charset=UTF-8,%3Csvg viewBox='0 0 60 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 25 C0 0, 30 0, 30 25 C30 50, 0 50, 10 25 Z' fill='%23FFC300'/%3E%3Cpath d='M30 25 C40 0, 70 0, 60 25 C70 50, 40 50, 30 25 Z' fill='%23FFC300'/%3E%3Cellipse cx='25' cy='25' rx='3' ry='10' fill='%23581845' transform='rotate(-10 25 25)'/%3E%3Cellipse cx='35' cy='25' rx='3' ry='10' fill='%23581845' transform='rotate(10 35 25)'/%3E%3C/svg%3E" },
    { type: 'butterfly-2', imgSrc: "data:image/svg+xml;charset=UTF-8,%3Csvg viewBox='0 0 60 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 25 C0 0, 30 0, 30 25 C30 50, 0 50, 10 25 Z' fill='%23DAF7A6'/%3E%3Cpath d='M30 25 C40 0, 70 0, 60 25 C70 50, 40 50, 30 25 Z' fill='%23DAF7A6'/%3E%3Cellipse cx='25' cy='25' rx='3' ry='10' fill='%2333691E' transform='rotate(-10 25 25)'/%3E%3Cellipse cx='35' cy='25' rx='3' ry='10' fill='%2333691E' transform='rotate(10 35 25)'/%3E%3C/svg%3E" },
    { type: 'butterfly-3', imgSrc: "data:image/svg+xml;charset=UTF-8,%3Csvg viewBox='0 0 60 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 25 C0 0, 30 0, 30 25 C30 50, 0 50, 10 25 Z' fill='%23FF8FAB'/%3E%3Cpath d='M30 25 C40 0, 70 0, 60 25 C70 50, 40 50, 30 25 Z' fill='%23FF8FAB'/%3E%3Cellipse cx='25' cy='25' rx='3' ry='10' fill='%23C70039' transform='rotate(-10 25 25)'/%3E%3Cellipse cx='35' cy='25' rx='3' ry='10' fill='%23C70039' transform='rotate(10 35 25)'/%3E%3C/svg%3E" },
    { type: 'butterfly-4', imgSrc: "data:image/svg+xml;charset=UTF-8,%3Csvg viewBox='0 0 60 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 25 C0 0, 30 0, 30 25 C30 50, 0 50, 10 25 Z' fill='%23A2D2FF'/%3E%3Cpath d='M30 25 C40 0, 70 0, 60 25 C70 50, 40 50, 30 25 Z' fill='%23A2D2FF'/%3E%3Cellipse cx='25' cy='25' rx='3' ry='10' fill='%23003049' transform='rotate(-10 25 25)'/%3E%3Cellipse cx='35' cy='25' rx='3' ry='10' fill='%23003049' transform='rotate(10 35 25)'/%3E%3C/svg%3E" },
  ];

  if (loading) {
    return <Preloader />;
  }

  return (
      <>
        {butterflyData.map(bf => <AnimatedButterfly key={bf.type} type={bf.type} imgSrc={bf.imgSrc} />)}
        <Header
            activePage={activePage}
            onNavigate={handleNavigate}
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
        />
        <main>
          <HomePage id="home" ref={pageRefs.home} className={`page-section ${activePage === 'home' ? 'active' : ''}`} />
          <AboutPage id="about" ref={pageRefs.about} className={`page-section ${activePage === 'about' ? 'active' : ''}`} />
          <PortfolioPage id="portfolio" ref={pageRefs.portfolio} className={`page-section ${activePage === 'portfolio' ? 'active' : ''}`} />
          <ContactPage id="contact" ref={pageRefs.contact} className={`page-section ${activePage === 'contact' ? 'active' : ''}`} />
        </main>
        <Footer />
        <BackToTopButton />
      </>
  );
}

export default App;
