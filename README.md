# Mane Attraction Hair Design

Welcome to the official website project for **Mane Attraction Hair Design**, a professional hair styling business based in Smiths Falls, Ontario.

Designed and developed a custom single-page application (SPA) using raw HTML, CSS, and JavaScript. Managed all content dynamically through DOM manipulation with no frameworks, simulating multi-page navigation from a single HTML file.

This site is designed to deliver a seamless and elegant user experience for mobile users, with a focus on showcasing services, bridal styling, and a modern gallery. Desktop and tablet versions are currently under construction.

---

## 🌐 Live Site

- Primary Domain: [https://maneattractionhairdesign.com]

/
├── index.html # Main HTML file (mobile-focused layout)
├── JavaScript/
│ ├── main.js # Main script that controls routing and page display
│ ├── bridalv1.js # Bridal page dynamic content
│ ├── serviceObjectsv1.js # Services content rendered via objects
│ └── ... # Additional script modules
├── CSS/
│ ├── index.css # Global styles
│ ├── home.css # Home page styles
│ ├── about.css # About page styles
│ ├── services.css # Services page styles
│ ├── bridal.css # Bridal styling page
│ ├── gallery.css # Gallery styling
│ └── contact.css # Contact form styling
├── Photos/ # All image assets (logos, gallery, icons)
└── README.md # Project documentation (this file)

---

## 📱 Features

- 📱 **Mobile-first Design** — Tailored for mobile users with a clean hamburger menu
- 💇 **Bridal Styling Focus** — A dedicated bridal section showcasing experience and offerings
- 🖼️ **Dynamic Gallery** — Gallery loaded via DOM manipulation using JavaScript
- ⚡ **Preloader** — Loader shown until all content and images are fully ready
- 📌 **Navigation** — Simple and clear mobile navigation for user convenience
- 🧠 **Local Storage Memory** — Remembers the last visited section (with expiration)

---

## ⚙️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla ES6 Modules)**
- **File Manager on Bluehost (no FTP used)**
- **Mobile-first Responsive Layout**
- **localStorage for lightweight state**

---

## 🚧 Notes

- ❗Desktop and tablet layouts are **placeholders** and will display a message indicating construction.
- Cached JS files may require query string versioning (`main.js?v=2`) to force updates.

---

## 🧠 Developer Notes

- Preload behavior ensures a smooth transition into content after all media loads.
- Modular structure in JS keeps functionality separated by section (`bridal`, `services`, etc.)
- Hamburger menu behavior is managed with event listeners and class toggles.

---

## 👤 Developer

**Braedon Klock**  
Developer & Maintainer of Mane Attraction Hair Design website  
Ontario, Canada
