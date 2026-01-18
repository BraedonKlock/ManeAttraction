/**
 * MANE ATTRACTION - Modern Home Page
 * Beautiful hero section with animations
 */

export function homeDisplay() {
    const main = document.getElementById('main');
    main.innerHTML = '';

    main.innerHTML = `
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-background">
                <img src="./Photos/Studio2.jpeg" alt="Mane Attraction Studio">
                <div class="hero-overlay"></div>
            </div>

            <div class="hero-content">
                <div class="hero-text">
                    <span class="hero-label">Welcome to</span>
                    <h1 class="hero-title">
                        Mane Attraction<br>
                        <span>Hair Design</span>
                    </h1>
                    <p class="hero-description">
                        Where beauty meets artistry. I'm Kendra, a passionate stylist specializing in color, cuts, and styles that bring out your natural beauty.
                    </p>
                    <div class="hero-buttons">
                        <a href="https://www.vagaro.com/maneattractionhairdesign1" class="btn-primary" target="_blank">
                            <span>Book Appointment</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                        <button class="btn-secondary" data-navigate="About">
                            <span>Meet Kendra</span>
                        </button>
                    </div>
                </div>

                <div class="hero-image">
                    <div class="hero-image-decoration"></div>
                    <div class="hero-image-wrapper">
                        <img src="./Photos/kendrahome.jpeg" alt="Kendra - Professional Hair Stylist">
                    </div>
                    <div class="hero-image-decoration"></div>
                </div>
            </div>

            <div class="hero-scroll-indicator">
                <span>Scroll</span>
                <div class="scroll-line"></div>
            </div>
        </section>

        <!-- Services Preview Section -->
        <section class="section" style="background: var(--color-white);">
            <div class="section-header reveal">
                <span class="section-label">What We Offer</span>
                <h2 class="section-title">Our Services</h2>
                <p class="section-subtitle">From everyday transformations to special occasions, we bring your hair goals to life</p>
            </div>

            <div class="services-grid stagger-children">
                <div class="service-card">
                    <div class="service-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="6" cy="6" r="3"></circle>
                            <path d="M8.12 8.12L12 12"></path>
                            <path d="M20 4L8.12 15.88"></path>
                            <circle cx="6" cy="18" r="3"></circle>
                            <path d="M14.8 14.8L20 20"></path>
                        </svg>
                    </div>
                    <h3 class="service-title">Cuts & Styling</h3>
                    <p class="service-description">Customized haircuts designed to fit your individual style and enhance your features</p>
                    <button class="btn-secondary" data-navigate="Services" style="margin-top: auto;">View Services</button>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                        </svg>
                    </div>
                    <h3 class="service-title">Color Services</h3>
                    <p class="service-description">Expert color treatments including balayage, highlights, and full color transformations</p>
                    <button class="btn-secondary" data-navigate="Services" style="margin-top: auto;">View Services</button>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </div>
                    <h3 class="service-title">Bridal Styling</h3>
                    <p class="service-description">Make your special day unforgettable with elegant bridal hair styling</p>
                    <button class="btn-secondary" data-navigate="Bridal" style="margin-top: auto;">Learn More</button>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"></path>
                        </svg>
                    </div>
                    <h3 class="service-title">Treatments</h3>
                    <p class="service-description">Restore and revitalize your hair with our professional treatment services</p>
                    <button class="btn-secondary" data-navigate="Services" style="margin-top: auto;">View Services</button>
                </div>
            </div>
        </section>

        <!-- About Preview Section -->
        <section class="section">
            <div class="about-section">
                <div class="about-image reveal-left">
                    <div class="about-image-wrapper">
                        <img src="./Photos/kendra2.jpeg" alt="Kendra Roney">
                    </div>
                    <div class="about-image-frame"></div>
                </div>

                <div class="about-content reveal-right">
                    <span class="about-label">Meet Your Stylist</span>
                    <h2 class="about-title">Hi, I'm Kendra</h2>
                    <p class="about-text">
                        With a deep passion for hairdressing that began in 2013, I've dedicated myself to the art of making people feel confident and beautiful. As a licensed hairstylist since 2016, I combine technical expertise with creative vision.
                    </p>
                    <p class="about-text">
                        I've trained at the Redken Academy in Toronto, expanding my knowledge in color theory, advanced cutting techniques, and freehand balayage. I'm also DevaCurl certified, specializing in textured and natural curls.
                    </p>

                    <div class="about-features">
                        <div class="about-feature">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>Redken Certified</span>
                        </div>
                        <div class="about-feature">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>DevaCurl Specialist</span>
                        </div>
                        <div class="about-feature">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>Balayage Expert</span>
                        </div>
                        <div class="about-feature">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>10+ Years Experience</span>
                        </div>
                    </div>

                    <button class="btn-primary" data-navigate="About" style="margin-top: var(--spacing-md);">
                        <span>More About Me</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </section>

        <!-- Bridal CTA Section -->
        <section class="bridal-hero">
            <div class="bridal-slider">
                <div class="bridal-slide active">
                    <img src="./Photos/Gallery/Bridal/bridal1.jpeg" alt="Bridal Styling">
                </div>
                <div class="bridal-slide">
                    <img src="./Photos/Gallery/Bridal/bridal2.jpeg" alt="Bridal Styling">
                </div>
                <div class="bridal-slide">
                    <img src="./Photos/Gallery/Bridal/bridal3.jpeg" alt="Bridal Styling">
                </div>
            </div>
            <div class="bridal-overlay"></div>

            <div class="bridal-content reveal">
                <h2 class="bridal-title">Bridal Services</h2>
                <p class="bridal-text">
                    Your wedding day is one of the most important days of your life. With over a decade of experience in bridal hairstyling, I'll ensure you feel confident, radiant, and unforgettable.
                </p>
                <button class="btn-primary" data-navigate="Bridal">
                    <span>Explore Bridal</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </button>
            </div>
        </section>

        <!-- Gallery Preview -->
        <section class="section" style="background: var(--color-white);">
            <div class="section-header reveal">
                <span class="section-label">Our Work</span>
                <h2 class="section-title">Gallery</h2>
                <p class="section-subtitle">Browse through our portfolio of beautiful transformations</p>
            </div>

            <div class="gallery-grid" style="max-width: 1000px;">
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
            </div>

            <div class="text-center reveal" style="margin-top: var(--spacing-lg);">
                <button class="btn-primary" data-navigate="Gallery">
                    <span>View Full Gallery</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </button>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="section text-center" style="background: linear-gradient(135deg, var(--color-rose-light), var(--color-cream));">
            <div class="reveal">
                <span class="section-label">Ready to Transform?</span>
                <h2 class="section-title" style="margin-bottom: var(--spacing-md);">Book Your Appointment Today</h2>
                <p class="section-subtitle" style="margin-bottom: var(--spacing-md);">
                    Let's create something beautiful together. Book your appointment online or get in touch.
                </p>
                <div style="display: flex; gap: var(--spacing-sm); justify-content: center; flex-wrap: wrap;">
                    <a href="https://www.vagaro.com/maneattractionhairdesign1" class="btn-primary" target="_blank">
                        <span>Book Now</span>
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

    // Add navigation event listeners
    addNavigationListeners();

    // Initialize bridal slider
    initBridalSlider();
}

function addNavigationListeners() {
    document.querySelectorAll('[data-navigate]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const page = e.currentTarget.dataset.navigate;
            // Import and call navigation function
            import('./main.js?v=2.0.0').then(module => {
                module.navigateToPage(page);
            });
        });
    });
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
