// JavaScript for MYKD Gaming Site
document.addEventListener('DOMContentLoaded', () => {
    // Lucide Icons initialization
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');

            // Toggle icon between menu and x
            const icon = mobileMenuBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            window.lucide.createIcons();
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.setAttribute('data-lucide', 'menu');
                window.lucide.createIcons();
            }
        });
    }


    // Scroll to top functionality
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth scroll for nav links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.hash !== '') {
                e.preventDefault();
                const hash = link.hash;
                const target = document.querySelector(hash);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 100,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        const icon = mobileMenuBtn.querySelector('i');
                        icon.setAttribute('data-lucide', 'menu');
                        window.lucide.createIcons();
                    }
                }
            }
        });
    });

    // Reveal/animate product CTAs when they scroll into view
    (function () {
        const ctas = document.querySelectorAll('.product-cta');
        if (!ctas || ctas.length === 0) return;

        if ('IntersectionObserver' in window) {
            const io = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12 });

            ctas.forEach(btn => {
                btn.classList.add('reveal');
                io.observe(btn);
            });
        } else {
            // Fallback: show immediately
            ctas.forEach(btn => btn.classList.add('active'));
        }
    })();

    // Collapsible Footer Locations
    const locationsHeader = document.querySelector('.locations-header');
    const locationsList = document.querySelector('.locations-list');
    const locationsArrow = document.querySelector('.locations-arrow');

    if (locationsHeader && locationsList) {
        locationsHeader.addEventListener('click', () => {
            locationsList.classList.toggle('open');
            if (locationsArrow) {
                locationsArrow.classList.toggle('open');
            }
        });
    }
});
// script.js
window.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});