/**
 * MANE ATTRACTION - Modern About Page
 * Beautiful about section with scroll animations
 */

export function aboutDisplay() {
    const main = document.getElementById('main');
    main.innerHTML = '';

    main.innerHTML = `
        <!-- About Hero -->
        <section class="hero" style="min-height: 60vh;">
            <div class="hero-background">
                <img src="./Photos/studio.jpeg" alt="Mane Attraction Studio">
                <div class="hero-overlay"></div>
            </div>

            <div class="hero-content" style="text-align: center; display: block;">
                <span class="hero-label">Get to Know</span>
                <h1 class="hero-title" style="max-width: 100%;">
                    About <span>Kendra</span>
                </h1>
            </div>
        </section>

        <!-- Main About Section -->
        <section class="section" style="background: var(--color-white);">
            <div class="about-section">
                <div class="about-image reveal-left">
                    <div class="about-image-wrapper">
                        <img src="./Photos/kendra2.jpeg" alt="Kendra Roney - Professional Hair Stylist">
                    </div>
                    <div class="about-image-frame"></div>
                </div>

                <div class="about-content reveal-right">
                    <span class="about-label">The Journey</span>
                    <h2 class="about-title">A Passion for Hair</h2>
                    <p class="about-text">
                        Kendra began her hairdressing journey in 2013, completing a three-year apprenticeship that combined hands-on salon experience with classroom training. She has been a licensed hairstylist since 2016.
                    </p>
                    <p class="about-text">
                        With a deep love for the craft and a commitment to making others feel their best, Kendra brings skill, creativity, and care to every appointment.
                    </p>
                </div>
            </div>
        </section>

        <!-- Continued Learning Section -->
        <section class="section">
            <div class="container">
                <div class="section-header reveal">
                    <span class="section-label">Professional Development</span>
                    <h2 class="section-title">Continued Learning</h2>
                </div>

                <div class="about-section" style="margin-top: var(--spacing-lg);">
                    <div class="about-content reveal-left">
                        <p class="about-text">
                            Passionate about continued growth, Kendra trained at the <strong>Redken Academy in Toronto</strong>, where she expanded her knowledge in:
                        </p>

                        <div class="about-features" style="margin-top: var(--spacing-md);">
                            <div class="about-feature">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>Color Theory</span>
                            </div>
                            <div class="about-feature">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>Advanced Cutting</span>
                            </div>
                            <div class="about-feature">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>Blonding Concepts</span>
                            </div>
                            <div class="about-feature">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>Freehand Balayage</span>
                            </div>
                            <div class="about-feature">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>Foliage Techniques</span>
                            </div>
                            <div class="about-feature">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>Color Formulations</span>
                            </div>
                        </div>

                        <p class="about-text" style="margin-top: var(--spacing-md);">
                            She is also <strong>certified in curly hair through DevaCurl</strong>, allowing her to specialize in textured and natural curls.
                        </p>

                        <p class="about-text">
                            In addition to hairstyling, Kendra is currently working toward her makeup certification, further expanding her ability to offer complete, personalized beauty services.
                        </p>
                    </div>

                    <div class="about-image reveal-right">
                        <div class="about-image-wrapper">
                            <img src="./Photos/kendra1.jpeg" alt="Kendra at Work">
                        </div>
                        <div class="about-image-frame"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Commitment Section -->
        <section class="section" style="background: linear-gradient(135deg, var(--color-rose-light), var(--color-cream));">
            <div class="container text-center">
                <div class="reveal">
                    <span class="section-label">My Promise</span>
                    <h2 class="section-title">Commitment to Excellence</h2>
                    <p style="max-width: 700px; margin: var(--spacing-md) auto; font-size: 1.2rem; line-height: 1.8; color: var(--color-gray);">
                        With a deep love for the craft and a commitment to making others feel their best, Kendra brings skill, creativity, and care to every appointment. Whether you're looking for a subtle change or a complete transformation, you're in expert hands.
                    </p>
                </div>

                <!-- Stats -->
                <div class="services-grid" style="margin-top: var(--spacing-lg); max-width: 800px;">
                    <div class="service-card reveal">
                        <div class="service-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        </div>
                        <h3 class="service-title" style="font-size: 2.5rem; color: var(--color-rose);">10+</h3>
                        <p class="service-description">Years of Experience</p>
                    </div>

                    <div class="service-card reveal">
                        <div class="service-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                        <h3 class="service-title" style="font-size: 2.5rem; color: var(--color-rose);">2016</h3>
                        <p class="service-description">Licensed Since</p>
                    </div>

                    <div class="service-card reveal">
                        <div class="service-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                        </div>
                        <h3 class="service-title" style="font-size: 2.5rem; color: var(--color-rose);">3+</h3>
                        <p class="service-description">Certifications</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="section text-center" style="background: var(--color-white);">
            <div class="reveal">
                <span class="section-label">Ready to Get Started?</span>
                <h2 class="section-title" style="margin-bottom: var(--spacing-md);">Let's Create Something Beautiful</h2>
                <div style="display: flex; gap: var(--spacing-sm); justify-content: center; flex-wrap: wrap;">
                    <a href="https://www.vagaro.com/maneattractionhairdesign1" class="btn-primary" target="_blank">
                        <span>Book Appointment</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                    <button class="btn-secondary" data-navigate="Services">
                        <span>View Services</span>
                    </button>
                </div>
            </div>
        </section>
    `;

    // Add navigation event listeners
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
