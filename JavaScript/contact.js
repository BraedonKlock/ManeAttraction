/**
 * MANE ATTRACTION - Modern Contact Page
 * Beautiful contact section with Google Maps and business hours
 */

import { hideFooter } from './helper.js?v=2.0.0';

export function contactDisplay() {
    const main = document.getElementById('main');
    main.innerHTML = '';

    // Hide footer since contact info is displayed on page
    hideFooter();

    main.innerHTML = `
        <!-- Contact Hero -->
        <section class="hero" style="min-height: 50vh;">
            <div class="hero-background">
                <img src="./Photos/studio4.jpeg" alt="Contact Background">
                <div class="hero-overlay"></div>
            </div>

            <div class="hero-content" style="text-align: center; display: block;">
                <span class="hero-label">Get in Touch</span>
                <h1 class="hero-title" style="max-width: 100%;">
                    Contact <span>Us</span>
                </h1>
                <p class="hero-description" style="max-width: 600px; margin: 0 auto;">
                    We'd love to hear from you. Reach out to book an appointment or ask any questions.
                </p>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="contact-section">
            <div class="contact-grid">
                <!-- Contact Info Card -->
                <div class="contact-info-card reveal-left">
                    <!-- Business Hours -->
                    <div class="contact-info-item">
                        <div class="contact-info-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        </div>
                        <div class="contact-info-content">
                            <h4>Business Hours</h4>
                            <div class="hours-grid">
                                <div class="hours-row">
                                    <span class="hours-day">Sunday</span>
                                    <span class="hours-time hours-closed">CLOSED</span>
                                </div>
                                <div class="hours-row">
                                    <span class="hours-day">Monday</span>
                                    <span class="hours-time hours-closed">CLOSED</span>
                                </div>
                                <div class="hours-row">
                                    <span class="hours-day">Tuesday</span>
                                    <span class="hours-time">10:00am - 3:00pm</span>
                                </div>
                                <div class="hours-row">
                                    <span class="hours-day">Wednesday</span>
                                    <span class="hours-time">10:00am - 8:00pm</span>
                                </div>
                                <div class="hours-row">
                                    <span class="hours-day">Thursday</span>
                                    <span class="hours-time">10:00am - 8:30pm</span>
                                </div>
                                <div class="hours-row">
                                    <span class="hours-day">Friday</span>
                                    <span class="hours-time">10:00am - 3:00pm</span>
                                </div>
                                <div class="hours-row">
                                    <span class="hours-day">Saturday</span>
                                    <span class="hours-time">8:00am - 5:00pm</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Phone -->
                    <div class="contact-info-item">
                        <div class="contact-info-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </div>
                        <div class="contact-info-content">
                            <h4>Phone</h4>
                            <p><a href="tel:613-326-1649" style="color: var(--color-rose); font-weight: 600;">613-326-1649</a></p>
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="contact-info-item">
                        <div class="contact-info-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </div>
                        <div class="contact-info-content">
                            <h4>Email</h4>
                            <p><a href="mailto:ManeAttractionHairDesign@gmail.com" style="color: var(--color-rose);">ManeAttractionHairDesign@gmail.com</a></p>
                        </div>
                    </div>

                    <!-- Address -->
                    <div class="contact-info-item">
                        <div class="contact-info-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <div class="contact-info-content">
                            <h4>Location</h4>
                            <p>10 Maple Avenue, Unit 6<br>Smiths Falls, ON</p>
                        </div>
                    </div>

                    <!-- Social Media -->
                    <div class="contact-info-item" style="border-bottom: none;">
                        <div class="contact-info-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </div>
                        <div class="contact-info-content">
                            <h4>Follow Us</h4>
                            <div class="social-links" style="margin-top: var(--spacing-xs);">
                                <a href="https://www.facebook.com/share/1CKPXq4F6a/" class="social-link" target="_blank" aria-label="Facebook">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/maneattractionhairdesign?igsh=dWJod2VucXlkZ211" class="social-link" target="_blank" aria-label="Instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Map -->
                <div class="contact-map reveal-right">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2826.1382580326654!2d-76.02579102322066!3d44.90018317107037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccd88a55077edd1%3A0x7233914cdaae445d!2s10%20Maple%20Ave%2C%20Smiths%20Falls%2C%20ON%20K7A%201Z5!5e0!3m2!1sen!2sca!4v1754144278714!5m2!1sen!2sca"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>

        <!-- Book Now CTA -->
        <section class="section text-center" style="background: linear-gradient(135deg, var(--color-rose-light), var(--color-cream));">
            <div class="reveal">
                <span class="section-label">Ready to Visit?</span>
                <h2 class="section-title" style="margin-bottom: var(--spacing-md);">Book Your Appointment</h2>
                <p class="section-subtitle" style="margin-bottom: var(--spacing-md);">
                    Schedule your visit online or give us a call. We can't wait to see you!
                </p>
                <a href="https://www.vagaro.com/maneattractionhairdesign1" class="btn-primary" target="_blank">
                    <span>Book Online Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </div>
        </section>

        <!-- Footer replacement for contact page -->
        <div style="background: var(--color-cream-light); text-align: center; padding: var(--spacing-md); border-top: 1px solid var(--color-rose-light);">
            <p style="color: var(--color-gray); font-size: 0.9rem;">&copy; 2025 Mane Attraction Hair Design. All rights reserved.</p>
            <p style="color: var(--color-gray); font-size: 0.85rem; margin-top: var(--spacing-xs);">Crafted with <span style="color: var(--color-rose);">&hearts;</span> for Kendra</p>
        </div>
    `;
}
