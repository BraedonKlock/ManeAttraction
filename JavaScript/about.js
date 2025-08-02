  import { checkFooterDisplay } from './helper.js';

  export function aboutDisplay() {
    checkFooterDisplay();
    window.scrollTo({ top: 0, behavior: "smooth" });

    let body = document.querySelector('body');
    body.className = "about-body";

    let main = document.getElementById('main');
    main.classList.add("about-main"); // Adds styling for the about page


    let image = document.createElement("img");
    image.id = "image";
    image.src = "./Photos/kendra2.jpeg";
    main.appendChild(image);

    let p = document.createElement('p');
    p.textContent = "ABOUT: this is the about page, this is where informationdisplayed about kendra will be";
    main.appendChild(p);

  }