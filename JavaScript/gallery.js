/**
 * MANE ATTRACTION - Modern Gallery Page
 * Beautiful gallery with lightbox functionality
 */

import { initLightbox } from './helper.js?v=2.0.0';

export function galleryDisplay() {
    const main = document.getElementById('main');
    main.innerHTML = '';

    // Scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // Ensure scroll happens after DOM update
    setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);

    main.innerHTML = `
        <!-- Gallery Hero -->
        <section class="hero" style="min-height: 50vh;">
            <div class="hero-background">
                <img src="./Photos/studio.jpeg" alt="Gallery Background">
                <div class="hero-overlay"></div>
            </div>

            <div class="hero-content" style="text-align: center; display: block;">
                <span class="hero-label">Our Work</span>
                <h1 class="hero-title" style="max-width: 100%;">
                    <span>Gallery</span>
                </h1>
                <p class="hero-description" style="max-width: 600px; margin: 0 auto;">
                    Browse through our portfolio of beautiful hair transformations
                </p>
            </div>
        </section>

        <!-- Main Gallery Section -->
        <section class="section" style="background: var(--color-white);">
            <div class="gallery-grid" id="mainGallery">
                <div class="gallery-item reveal-scale">
                    <img src="./Photos/Gallery/gallery1.png" alt="Gallery Image">
                    <div class="gallery-overlay"><span>View</span></div>
                </div>
                <div class="gallery-item reveal-scale">
                    <img src="./Photos/Gallery/gallery2.png" alt="Gallery Image">
                    <div class="gallery-overlay"><span>View</span></div>
                </div>
                <div class="gallery-item reveal-scale">
                    <img src="./Photos/Gallery/gallery3.png" alt="Gallery Image">
                    <div class="gallery-overlay"><span>View</span></div>
                </div>
                <div class="gallery-item reveal-scale">
                    <img src="./Photos/Gallery/gallery4.png" alt="Gallery Image">
                    <div class="gallery-overlay"><span>View</span></div>
                </div>
                <div class="gallery-item reveal-scale">
                    <img src="./Photos/Gallery/gallery5.png" alt="Gallery Image">
                    <div class="gallery-overlay"><span>View</span></div>
                </div>
                <div class="gallery-item reveal-scale">
                    <img src="./Photos/Gallery/gallery6.png" alt="Gallery Image">
                    <div class="gallery-overlay"><span>View</span></div>
                </div>
                <div class="gallery-item reveal-scale">
                    <img src="./Photos/Gallery/gallery7.png" alt="Gallery Image">
                    <div class="gallery-overlay"><span>View</span></div>
                </div>
                <div class="gallery-item reveal-scale">
                    <img src="./Photos/Gallery/gallery8.png" alt="Gallery Image">
                    <div class="gallery-overlay"><span>View</span></div>
                </div>
            </div>
        </section>

        <!-- Social Media Section -->
        <section class="section text-center">
            <div class="reveal">
                <span class="section-label">Follow Our Work</span>
                <h2 class="section-title" style="margin-bottom: var(--spacing-md);">See More on Social</h2>
                <p class="section-subtitle" style="margin-bottom: var(--spacing-lg);">
                    Follow us on social media for the latest styles, tips, and transformations
                </p>

                <div class="social-links" style="justify-content: center; gap: var(--spacing-md);">
                    <a href="https://www.facebook.com/share/1CKPXq4F6a/" class="social-link" target="_blank" style="width: 80px; height: 80px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/maneattractionhairdesign?igsh=dWJod2VucXlkZ211" class="social-link" target="_blank" style="width: 80px; height: 80px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="section text-center" style="background: linear-gradient(135deg, var(--color-rose-light), var(--color-cream));">
            <div class="reveal">
                <span class="section-label">Love What You See?</span>
                <h2 class="section-title" style="margin-bottom: var(--spacing-md);">Let's Create Your Look</h2>
                <div style="display: flex; gap: var(--spacing-sm); justify-content: center; flex-wrap: wrap;">
                    <a href="https://www.vagaro.com/maneattractionhairdesign1" class="btn-primary" target="_blank">
                        <span>Book Appointment</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                    <button class="btn-secondary" data-navigate="Contact">
                        <span>Contact Us</span>
                    </button>
                </div>
            </div>
        </section>
    `;

    // Initialize lightbox
    setTimeout(() => {
        initLightbox();
    }, 100);

    // Add navigation listeners
    addNavigationListeners();
}

function addNavigationListeners() {
    document.querySelectorAll('[data-navigate]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const page = e.currentTarget.dataset.navigate;
            import('./main.js?v=2.0.0').then(module => {
                module.navigateToPage(page);
            });
        });
    });
}
