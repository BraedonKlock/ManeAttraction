/**
 * MANE ATTRACTION - Modern Bridal Page
 * Beautiful bridal section with image slider and gallery
 */

import { initLightbox } from './helper.js?v=2.0.0';

export function bridalDisplay() {
    const main = document.getElementById('main');
    main.innerHTML = '';

    main.innerHTML = `
        <!-- Bridal Hero with Slider -->
        <section class="bridal-hero" style="min-height: 80vh;">
            <div class="bridal-slider" id="bridalSlider">
                <div class="bridal-slide active">
                    <img src="./Photos/Gallery/Bridal/bridal1.jpeg" alt="Bridal Hair Styling">
                </div>
                <div class="bridal-slide">
                    <img src="./Photos/Gallery/Bridal/bridal2.jpeg" alt="Bridal Hair Styling">
                </div>
                <div class="bridal-slide">
                    <img src="./Photos/Gallery/Bridal/bridal3.jpeg" alt="Bridal Hair Styling">
                </div>
            </div>
            <div class="bridal-overlay"></div>

            <div class="bridal-content">
                <span class="hero-label" style="opacity: 0; animation: fadeInUp 0.8s ease forwards;">Your Perfect Day</span>
                <h1 class="bridal-title" style="opacity: 0; animation: fadeInUp 0.8s ease 0.2s forwards;">
                    Bridal Services
                </h1>
                <p class="bridal-text" style="opacity: 0; animation: fadeInUp 0.8s ease 0.4s forwards;">
                    Creating timeless beauty for your most memorable day
                </p>
            </div>
        </section>

        <!-- Bridal Info Section -->
        <section class="section" style="background: var(--color-white);">
            <div class="about-section">
                <div class="about-content reveal-left">
                    <span class="about-label">Bridal Excellence</span>
                    <h2 class="about-title">Your Vision, Perfectly Styled</h2>
                    <p class="about-text">
                        You've imagined this day a thousand times — and I am here to make sure every detail feels just right.
                    </p>
                    <p class="about-text">
                        I understand how much care, emotion, and planning goes into a wedding, and I bring that same level of dedication to every bridal appointment. My goal is simple: to make sure the bride's hair is absolutely perfect — styled to last, flawless in photos, and true to her vision.
                    </p>
                    <p class="about-text">
                        From elegant updos to soft, romantic waves, I work closely with each bride to ensure the hairstyle enhances her features, complements the dress, and reflects her personality.
                    </p>
                </div>

                <div class="about-image reveal-right">
                    <div class="about-image-wrapper">
                        <img src="./Photos/IMG_5791.jpeg" alt="Bridal Styling">
                    </div>
                    <div class="about-image-frame"></div>
                </div>
            </div>
        </section>

        <!-- What We Offer -->
        <section class="section">
            <div class="section-header reveal">
                <span class="section-label">Bridal Services</span>
                <h2 class="section-title">What We Offer</h2>
            </div>

            <div class="services-grid stagger-children" style="max-width: 1000px;">
                <div class="service-card">
                    <div class="service-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </div>
                    <h3 class="service-title">Bridal Styling</h3>
                    <p class="service-description">Complete bridal hair styling customized to your vision and dress style</p>
                    <span class="service-price">$100+</span>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                    <h3 class="service-title">Bridal Party</h3>
                    <p class="service-description">Styling for bridesmaids, mothers, and the entire wedding party</p>
                    <span class="service-price">Custom Quote</span>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                    </div>
                    <h3 class="service-title">Trial Session</h3>
                    <p class="service-description">Pre-wedding trial to perfect your look before the big day</p>
                    <span class="service-price">Recommended</span>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                    <h3 class="service-title">Hair & Makeup</h3>
                    <p class="service-description">Complete beauty package for hair and makeup on your special day</p>
                    <span class="service-price">$130+</span>
                </div>
            </div>
        </section>

        <!-- Bridal Gallery -->
        <section class="section" style="background: var(--color-white);">
            <div class="section-header reveal">
                <span class="section-label">Our Portfolio</span>
                <h2 class="section-title">Bridal Gallery</h2>
                <p class="section-subtitle">Browse through our beautiful bridal transformations</p>
            </div>

            <div class="gallery-grid" id="bridalGallery">
                <div class="gallery-item reveal-scale">
                    <img src="./Photos/Gallery/Bridal/Grid/bridal1.jpg" alt="Bridal Style">
                    <div class="gallery-overlay"><span>View</span></div>
                </div>
                <div class="gallery-item reveal-scale">
                    <img src="./Photos/Gallery/Bridal/Grid/bridal2.jpg" alt="Bridal Style">
                    <div class="gallery-overlay"><span>View</span></div>
                </div>
                <div class="gallery-item reveal-scale">
                    <img src="./Photos/Gallery/Bridal/Grid/bridal3.jpg" alt="Bridal Style">
                    <div class="gallery-overlay"><span>View</span></div>
                </div>
                <div class="gallery-item reveal-scale">
                    <img src="./Photos/Gallery/Bridal/Grid/bridal4.jpg" alt="Bridal Style">
                    <div class="gallery-overlay"><span>View</span></div>
                </div>
                <div class="gallery-item reveal-scale">
                    <img src="./Photos/Gallery/Bridal/Grid/bridal5.jpg" alt="Bridal Style">
                    <div class="gallery-overlay"><span>View</span></div>
                </div>
                <div class="gallery-item reveal-scale">
                    <img src="./Photos/Gallery/Bridal/Grid/bridal6.jpg" alt="Bridal Style">
                    <div class="gallery-overlay"><span>View</span></div>
                </div>
                <div class="gallery-item reveal-scale">
                    <img src="./Photos/Gallery/Bridal/Grid/bridal7.jpg" alt="Bridal Style">
                    <div class="gallery-overlay"><span>View</span></div>
                </div>
                <div class="gallery-item reveal-scale">
                    <img src="./Photos/Gallery/Bridal/Grid/bridal8.jpg" alt="Bridal Style">
                    <div class="gallery-overlay"><span>View</span></div>
                </div>
            </div>
        </section>

        <!-- Contact CTA -->
        <section class="section text-center" style="background: linear-gradient(135deg, var(--color-rose-light), var(--color-cream));">
            <div class="reveal">
                <span class="section-label">Ready to Book?</span>
                <h2 class="section-title" style="margin-bottom: var(--spacing-md);">Let's Plan Your Perfect Day</h2>
                <p class="section-subtitle" style="margin-bottom: var(--spacing-sm);">
                    For more information or to book your bridal consultation, please reach out:
                </p>
                <div style="font-family: var(--font-display); font-size: 1.5rem; margin-bottom: var(--spacing-md);">
                    <p style="margin-bottom: var(--spacing-xs);"><strong>613-326-1649</strong></p>
                    <p>ManeAttractionHairDesign@gmail.com</p>
                </div>
                <div style="display: flex; gap: var(--spacing-sm); justify-content: center; flex-wrap: wrap;">
                    <a href="https://www.vagaro.com/maneattractionhairdesign1" class="btn-primary" target="_blank">
                        <span>Book Consultation</span>
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

    // Initialize slider
    initBridalSlider();

    // Initialize lightbox
    setTimeout(() => {
        initLightbox();
    }, 100);

    // Add navigation listeners
    addNavigationListeners();
}

function initBridalSlider() {
    const slides = document.querySelectorAll('.bridal-slide');
    if (slides.length === 0) return;

    let current = 0;

    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 4000);
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
