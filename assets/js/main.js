// Main navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle (if you add one later)
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            const nav = document.querySelector('nav ul');
            nav.classList.toggle('active');
        });
    }

    // Add active class to current navigation item
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav ul li a').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop() || 'index.html';
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // Project page specific functionality
    if (window.location.pathname.includes('projects/')) {
        // Add any project-specific JavaScript here
        console.log('Project page loaded');
    }

    // Initialize parallax effect
    initParallaxEffect();

    // Initialize project card animations
    initProjectCardAnimations();

    // Initialize image lazy loading with fade-in
    initLazyLoadImages();

    // Initialize language switcher
    initLanguageSwitcher();
});

// === PARALLAX EFFECT FOR HEADER ===
function initParallaxEffect() {
    const headerBackground = document.querySelector('.header-background');
    if (!headerBackground) return;

    let ticking = false;

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrolled = window.pageYOffset;
                const parallaxSpeed = 0.5; // Adjust for more/less movement
                headerBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
                ticking = false;
            });
            ticking = true;
        }
    });
}

// === PROJECT CARD MICRO-INTERACTIONS ===
function initProjectCardAnimations() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        // Create shine effect element
        const shineOverlay = document.createElement('div');
        shineOverlay.classList.add('shine-overlay');
        card.appendChild(shineOverlay);

        // Shine effect on hover
        card.addEventListener('mouseenter', function() {
            shineOverlay.style.animation = 'shine 0.8s ease-in-out';
        });

        card.addEventListener('mouseleave', function() {
            shineOverlay.style.animation = 'none';
        });

        // Reset animation
        card.addEventListener('animationend', function() {
            shineOverlay.style.animation = 'none';
        });
    });
}

// === LAZY LOAD IMAGES WITH PROGRESSIVE FADE ===
function initLazyLoadImages() {
    const images = document.querySelectorAll('.project-card img');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('fade-in-image');
                observer.unobserve(img);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    images.forEach(img => {
        img.style.opacity = '0';
        imageObserver.observe(img);
    });
}

// === LANGUAGE SWITCHER ===
function initLanguageSwitcher() {
    // Check if translations are loaded
    if (typeof translations === 'undefined') {
        console.warn('Translations not loaded');
        return;
    }

    // Get saved language or default to 'en'
    let currentLang = localStorage.getItem('preferredLanguage') || 'en';

    // Set initial language
    setLanguage(currentLang);

    // Language buttons click handlers
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);

            // Save preference
            localStorage.setItem('preferredLanguage', lang);

            // Update active state
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function setLanguage(lang) {
    if (!translations[lang]) {
        console.warn(`Language ${lang} not found`);
        return;
    }

    const t = translations[lang];

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            element.textContent = t[key];
        }
    });

    // Update navigation links
    document.querySelectorAll('nav ul li a').forEach(link => {
        const key = lang === 'en' ? 'data-en' : 'data-fr';
        const text = link.getAttribute(key);
        if (text) {
            link.textContent = text;
        }
    });

    // Update page title
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        if (t[key]) {
            element.textContent = t[key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            element.setAttribute('placeholder', t[key]);
        }
    });

    // Set active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);
}

// Function to handle Power BI dashboard embedding
function embedPowerBIDashboard() {
    // This would be replaced with actual Power BI embedding code
    console.log('Power BI dashboard embedded');
}
