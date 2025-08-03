import { checkFooterDisplay, showPreloader, hidePreloader, waitForAllImages } from './helper.js';

export function aboutDisplay() {
  showPreloader();

  checkFooterDisplay();
  window.scrollTo({ top: 0, behavior: "smooth" });

  const body = document.querySelector('body');
  body.className = "about-body";

  const main = document.getElementById('main');
  main.classList.add("about-main"); // Adds styling for the about page
  main.classList.remove("grow","fade");

  const image = document.createElement("img");
  image.id = "image";
  image.classList.add("zoom-in");
  image.src = "./Photos/kendra2.jpeg";
  main.appendChild(image);

  const p = document.createElement('p');
  p.classList.add("zoom-in")
  p.textContent = "ABOUT: this is the about page, this is where information displayed about kendra will be";
  main.appendChild(p);
  waitForAllImages(() => {
    hidePreloader();
  });
}