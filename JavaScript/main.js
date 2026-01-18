/**
 * MANE ATTRACTION - Modern Main JavaScript
 * Handles routing, page transitions, and global interactions
 */

import { homeDisplay } from './home.js?v=2.0.0';
import { aboutDisplay } from './about.js?v=2.0.0';
import { servicesDisplay } from './services.js?v=2.0.0';
import { bridalDisplay } from './bridal.js?v=2.0.0';
import { galleryDisplay } from './gallery.js?v=2.0.0';
import { contactDisplay } from './contact.js?v=2.0.0';
import { initScrollAnimations, initCursorFollower, initHeaderScroll } from './helper.js?v=2.0.0';

// ==========================================================================
// INITIALIZATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initNavigation();
    initHeaderScroll();
    initCursorFollower();
    loadSavedPage();
});

// ==========================================================================
// PRELOADER
// ==========================================================================

function initPreloader() {
    const preloader = document.getElementById('preloader');

    // Wait for all images to load
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.getElementById('site-content').style.opacity = '1';
        }, 500);
    });

    // Fallback: hide preloader after 3 seconds regardless
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.getElementById('site-content').style.opacity = '1';
    }, 3000);
}

// ==========================================================================
// NAVIGATION
// ==========================================================================

function initNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const logo = document.querySelector('.logo');

    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Desktop navigation clicks
    desktopNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            navigateToPage(page);
            updateActiveLink(page);
        });
    });

    // Mobile navigation clicks
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;

            // Close mobile menu
            menuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';

            // Navigate after menu animation
            setTimeout(() => {
                navigateToPage(page);
                updateActiveLink(page);
            }, 300);
        });
    });

    // Logo click goes home
    if (logo) {
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            navigateToPage('Home');
            updateActiveLink('Home');
        });
    }

    // Close mobile menu on scroll
    window.addEventListener('scroll', () => {
        if (mobileNav.classList.contains('active')) {
            menuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileNav.classList.contains('active') &&
            !mobileNav.contains(e.target) &&
            !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

function updateActiveLink(page) {
    // Update desktop nav
    document.querySelectorAll('.desktop-nav .nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
    });

    // Update mobile nav
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
    });
}

// ==========================================================================
// PAGE TRANSITIONS & ROUTING
// ==========================================================================

function navigateToPage(page, skipTransition = false) {
    const pageTransition = document.querySelector('.page-transition');
    const main = document.getElementById('main');

    // Save to localStorage
    savePage(page);

    if (skipTransition) {
        // Direct display without transition
        displayPage(page);
        return;
    }

    // Trigger page transition
    pageTransition.classList.add('active');

    setTimeout(() => {
        // Clear main content
        main.innerHTML = '';
        main.scrollTop = 0;
        window.scrollTo({ top: 0, behavior: 'auto' });

        // Display new page
        displayPage(page);

        // Exit transition
        setTimeout(() => {
            pageTransition.classList.remove('active');
            pageTransition.classList.add('exit');

            setTimeout(() => {
                pageTransition.classList.remove('exit');
            }, 600);
        }, 100);
    }, 600);
}

function displayPage(page) {
    // Show footer by default
    const footer = document.getElementById('footer');
    if (footer) footer.style.display = 'block';

    switch (page) {
        case 'Home':
            homeDisplay();
            break;
        case 'About':
            aboutDisplay();
            break;
        case 'Services':
            servicesDisplay();
            break;
        case 'Bridal':
            bridalDisplay();
            break;
        case 'Gallery':
            galleryDisplay();
            break;
        case 'Contact':
            contactDisplay();
            break;
        default:
            homeDisplay();
    }

    // Initialize scroll animations for new content
    setTimeout(() => {
        initScrollAnimations();
    }, 100);
}

// ==========================================================================
// LOCAL STORAGE
// ==========================================================================

function savePage(page) {
    const expirationMinutes = 5;
    const expiresAt = new Date().getTime() + expirationMinutes * 60 * 1000;
    localStorage.setItem('lastPage', JSON.stringify({ page, expiresAt }));
}

function loadSavedPage() {
    try {
        const saved = localStorage.getItem('lastPage');

        if (saved) {
            const { page, expiresAt } = JSON.parse(saved);
            const now = new Date().getTime();

            if (now < expiresAt) {
                navigateToPage(page, true);
                updateActiveLink(page);
                return;
            } else {
                localStorage.removeItem('lastPage');
            }
        }
    } catch (e) {
        console.log('No saved page found');
    }

    // Default to home
    navigateToPage('Home', true);
    updateActiveLink('Home');
}

// ==========================================================================
// EXPORT FOR MODULES
// ==========================================================================

export { navigateToPage, initScrollAnimations };
