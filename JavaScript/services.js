/**
 * MANE ATTRACTION - Modern Services Page
 * Beautiful services with tabbed interface and animated cards
 */

// Service data
const services = {
    'haircuts': {
        title: 'Haircuts & Styling',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12L12 12"></path><path d="M20 4L8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8L20 20"></path></svg>',
        items: [
            { name: "Women's Haircut", description: "A customized haircut designed by your stylist to fit your individual style and preferences.", price: "$55.00" },
            { name: "Men's Haircut", description: "A customized haircut designed by your stylist to fit your individual style and preferences. This includes clipper cut, fade and finish.", price: "$36.00" },
            { name: "Women's Wash & Blow-Dry", description: "Professional styling and finishing service using a blow dryer and professional styling brush.", price: "$45.00" },
            { name: "Deva Curl Specialty Haircut", description: "Specifically designed for extreme curl hair types.", price: "$60.00" },
            { name: "Special Occasions / Up-Dos", description: "An elegant style where the hair is pulled up, customized to your needs using top of the line service.", price: "$100.00" },
            { name: "Hair/Makeup Special Event", description: "Complete hair and makeup styling for your special occasion.", price: "$130.00" },
            { name: "Extension Installation", description: "Including tape in, integrated, micro weft or sew in.", price: "$130.00" },
            { name: "Women's Styling with Hot Iron", description: "Professional styling and finishing service using a flat or curling iron.", price: "$40.00" }
        ]
    },
    'color': {
        title: 'Hair Color & Other',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>',
        items: [
            { name: "Full Color Re-touch / Haircut Included", description: "Using a dye or tint to change the colour of your hair. Includes haircut and up to 4oz of colour. Additional $20 for every 2oz needed.", price: "$146.00" },
            { name: "Full Colour Retouch with Foils / Haircut Included", description: "All over permanent or semi permanent colour with foils. Includes haircut, toner and up to 4oz of colour.", price: "$190.00" },
            { name: "Full Head Foils / Haircut Included", description: "Creates bright blonde, platinum, or multiple colour style. Includes 30+ foils, haircut, toner, and up to 4oz of colour.", price: "$164.00" },
            { name: "Partial Foils / Haircut Included", description: "Creates dimension and natural grow out while adding brightness. Includes haircut, toner and up to 4oz of colour.", price: "$155.00" },
            { name: "Colour Correction / Haircut Included", description: "Corrective service to fix hair colour tone. Requires consultation for cost.", price: "$100.00/h" },
            { name: "Ombré/Balayage Technique / Haircut Included", description: "Specialized technique creating soft grow out and natural style. Includes haircut, toner, and up to 4oz of colour.", price: "$180.00" },
            { name: "Ombré, Balayage with Shadow Root / Haircut Included", description: "Same as above with added shadow root for enhanced depth.", price: "$200.00" },
            { name: "Root Touch Up / Haircut Included", description: "Touch up of the root with Demi or Permanent hair colour or lightener to match ends.", price: "$122.00" },
            { name: "Root Colour Touch Up with Foils / Haircut Included", description: "Demi or permanent root touchup with foils. Includes haircut, toner and up to 4oz of colour.", price: "$175.00" },
            { name: "Perm", description: "Classic perm service for beautiful waves and curls.", price: "$230.00" },
            { name: "Toner", description: "Gives a fresh enhanced look while adding shine. Recommended every 4-6 weeks.", price: "$70.00" }
        ]
    },
    'waxing': {
        title: 'Waxing',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"></path></svg>',
        items: [
            { name: "Waxing - Full Face", description: "Waxing different parts of the face.", price: "$40.00" },
            { name: "Waxing - Eye Brow Shaping", description: "Shaping of the brows.", price: "$20.00" },
            { name: "Waxing - Lips", description: "Upper lip waxing service.", price: "$10.00" },
            { name: "Waxing - Chin", description: "Chin waxing service.", price: "$15.00" },
            { name: "Brow Tint", description: "Brow tint helps to fill the brow making it more pronounced and clean.", price: "$20.00" }
        ]
    },
    'treatments': {
        title: 'Treatments',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
        items: [
            { name: "Olaplex Stand Alone Treatment", description: "Designed to reconnect hair bonds. Provides instant results leaving hair soft, shiny and healthy.", price: "$40.00" },
            { name: "Conditioning Treatment", description: "Formula designed to restore moisture in the hair. Client wears a cap under dryer for 10-20 minutes.", price: "$25.00" }
        ]
    }
};

let activeCategory = 'haircuts';

export function servicesDisplay() {
    const main = document.getElementById('main');
    main.innerHTML = '';

    main.innerHTML = `
        <!-- Services Hero -->
        <section class="hero" style="min-height: 50vh;">
            <div class="hero-background">
                <img src="./Photos/services.jpeg" alt="Services Background">
                <div class="hero-overlay"></div>
            </div>

            <div class="hero-content" style="text-align: center; display: block;">
                <span class="hero-label">What We Offer</span>
                <h1 class="hero-title" style="max-width: 100%;">
                    Our <span>Services</span>
                </h1>
                <p class="hero-description" style="max-width: 600px; margin: 0 auto;">
                    From cuts and color to treatments and styling, discover our full range of professional hair services
                </p>
            </div>
        </section>

        <!-- Services Section -->
        <section class="section" style="background: var(--color-white);">
            <div class="container">
                <!-- Service Category Tabs -->
                <div class="service-tabs reveal" id="serviceTabs">
                    <button class="service-tab active" data-category="haircuts">Haircuts & Styling</button>
                    <button class="service-tab" data-category="color">Hair Color & Other</button>
                    <button class="service-tab" data-category="waxing">Waxing</button>
                    <button class="service-tab" data-category="treatments">Treatments</button>
                </div>

                <!-- Service List Container -->
                <div class="service-list-container" id="serviceList">
                    <!-- Services will be rendered here -->
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="section text-center" style="background: linear-gradient(135deg, var(--color-rose-light), var(--color-cream));">
            <div class="reveal">
                <span class="section-label">Ready to Book?</span>
                <h2 class="section-title" style="margin-bottom: var(--spacing-md);">Schedule Your Appointment</h2>
                <p class="section-subtitle" style="margin-bottom: var(--spacing-md);">
                    Transform your look today. Book online or contact us for a consultation.
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

    // Initialize tabs and render services
    initTabs();
    renderServices(activeCategory);
    addNavigationListeners();
}

function initTabs() {
    const tabs = document.querySelectorAll('.service-tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Render services for selected category
            activeCategory = tab.dataset.category;
            renderServices(activeCategory);
        });
    });
}

function renderServices(category) {
    const container = document.getElementById('serviceList');
    const categoryData = services[category];

    if (!categoryData) return;

    let html = `
        <div class="section-header" style="margin-bottom: var(--spacing-md);">
            <div class="service-icon" style="margin: 0 auto var(--spacing-sm);">
                ${categoryData.icon}
            </div>
            <h2 class="section-title" style="font-size: 2rem;">${categoryData.title}</h2>
        </div>
    `;

    categoryData.items.forEach((service, index) => {
        html += `
            <div class="service-list-item" style="animation-delay: ${index * 0.1}s;">
                <div class="service-list-content">
                    <h3 class="service-list-name">${service.name}</h3>
                    <p class="service-list-description">${service.description}</p>
                </div>
                <span class="service-list-price">${service.price}</span>
            </div>
        `;
    });

    container.innerHTML = html;
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
