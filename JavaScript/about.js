import { checkFooterDisplay, showPreloader, hidePreloader, waitForAllImages } from './helper.js';

export function aboutDisplay() {
    showPreloader();

// Give the preloader a moment, then render
    checkFooterDisplay();
    window.scrollTo({ top: 0, behavior: "smooth" });

    let body = document.querySelector('body');
    body.className = "about-body";

    let main = document.getElementById('main');
    main.classList.add("about-main"); // Adds styling for the about page
    main.classList.remove("grow");

    let image = document.createElement("img");
    image.id = "image";
    image.classList.add("zoom-in");
    image.src = "./Photos/kendra2.jpeg";
    main.appendChild(image);

    let p = document.createElement('p');
    p.classList.add("zoom-in")
    p.textContent = "ABOUT: this is the about page, this is where information displayed about kendra will be";
    main.appendChild(p);
    waitForAllImages(() => {
      hidePreloader();
    });
}