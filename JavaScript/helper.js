/**
 * MANE ATTRACTION - Helper Utilities
 * Animation helpers, scroll effects, and utility functions
 */

// ==========================================================================
// SCROLL ANIMATIONS (Intersection Observer)
// ==========================================================================

export function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Observe all reveal elements
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children');
    revealElements.forEach(el => observer.observe(el));

    // Observe gallery items for staggered animation
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
}

// ==========================================================================
// CURSOR FOLLOWER (Desktop only)
// ==========================================================================

export function initCursorFollower() {
    const cursor = document.querySelector('.cursor-follower');
    if (!cursor) return;

    // Only on devices with fine pointer (mouse)
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        cursor.style.display = 'none';
        return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth follow animation
    function animateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;

        cursorX += dx * 0.15;
        cursorY += dy * 0.15;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .service-card, .gallery-item, .card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('active'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });
}

// ==========================================================================
// HEADER SCROLL BEHAVIOR
// ==========================================================================

export function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    let lastScroll = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScroll = window.pageYOffset;

                // Add scrolled class for shadow
                if (currentScroll > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }

                // Hide/show header on scroll direction
                if (currentScroll > lastScroll && currentScroll > 200) {
                    header.classList.add('hidden');
                } else {
                    header.classList.remove('hidden');
                }

                lastScroll = currentScroll;
                ticking = false;
            });

            ticking = true;
        }
    });
}

// ==========================================================================
// IMAGE LAZY LOADING
// ==========================================================================

export function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ==========================================================================
// SMOOTH SCROLL TO ELEMENT
// ==========================================================================

export function smoothScrollTo(element, offset = 100) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// ==========================================================================
// WAIT FOR ALL IMAGES
// ==========================================================================

export function waitForAllImages(callback) {
    const images = document.querySelectorAll('img');
    let loadedCount = 0;
    const totalImages = images.length;

    if (totalImages === 0) {
        callback();
        return;
    }

    function imageLoaded() {
        loadedCount++;
        if (loadedCount === totalImages) {
            callback();
        }
    }

    images.forEach(img => {
        if (img.complete) {
            imageLoaded();
        } else {
            img.addEventListener('load', imageLoaded);
            img.addEventListener('error', imageLoaded);
        }
    });
}

// ==========================================================================
// FOOTER VISIBILITY
// ==========================================================================

export function showFooter() {
    const footer = document.getElementById('footer');
    if (footer) footer.style.display = 'block';
}

export function hideFooter() {
    const footer = document.getElementById('footer');
    if (footer) footer.style.display = 'none';
}

// Legacy compatibility functions
export function checkFooterDisplay() {
    showFooter();
}

export function checkMainId() {
    // No longer needed with modern approach
}

export function removeBridal() {
    // No longer needed with modern approach
}

export function showPreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) preloader.classList.remove('hidden');
}

export function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) preloader.classList.add('hidden');
}

// ==========================================================================
// PARALLAX EFFECT
// ==========================================================================

export function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-image');

    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.5;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// ==========================================================================
// LIGHTBOX
// ==========================================================================

export function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    let lightbox = document.querySelector('.lightbox');

    // Create lightbox if it doesn't exist
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <span class="lightbox-close">&times;</span>
            <div class="lightbox-content">
                <img src="" alt="Gallery Image">
            </div>
        `;
        document.body.appendChild(lightbox);

        // Close lightbox handlers
        lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeLightbox();
        });
    }

    const lightboxImg = lightbox.querySelector('.lightbox-content img');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (img) {
                lightboxImg.src = img.src;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ==========================================================================
// TEXT SPLIT ANIMATION
// ==========================================================================

export function splitText(element) {
    const text = element.textContent;
    element.innerHTML = '';

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.animationDelay = `${index * 0.03}s`;
        span.className = 'char';
        element.appendChild(span);
    });
}

// ==========================================================================
// COUNTER ANIMATION
// ==========================================================================

export function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeProgress * target);

        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }

    requestAnimationFrame(updateCounter);
}

// ==========================================================================
// DEBOUNCE & THROTTLE UTILITIES
// ==========================================================================

export function debounce(func, wait = 100) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

export function throttle(func, limit = 100) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
