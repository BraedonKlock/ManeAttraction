import { checkFooterDisplay, removeBridal, showPreloader, hidePreloader, waitForAllImages } from './helper.js';

/** This file creates elements and display info about kendra */

export function aboutDisplay() {
  showPreloader(); // preloader to load page content before displaying for smooth user experience
  removeBridal(); // removing bridal styling for main so it doesn't affect the styling for the about page
  checkFooterDisplay(); // displaying footer if not applied. footer was removed in contact.js

  /**Getting the body element and adding new styling to it */
  const body = document.querySelector('body'); // getting body to apply css styling
  body.className = "about-body";

  /**Getting main to add about page content */
  const main = document.getElementById('main'); // getting main to add about content
  main.classList.add("about-main"); // Adds styling for the about page
  main.classList.remove("grow","fade","blur-in"); // removing css animation classes
  main.innerHTML = ""; // clearing any previous content in main

  /**Adding image of kendra to main*/
  const image = document.createElement("img"); // creating image
  image.id = "image"; // assigning id for css styling
  image.classList.add("zoom-in"); // adding css animation class
  image.src = "./Photos/kendra2.jpeg"; // image location
  main.appendChild(image); // adding image to main

  /**Adding "About kendra" header" to main*/
  const abouth1 = document.createElement("h1"); // header h1
  abouth1.id = "about-h1"; // assigning an id for css styling
  abouth1.classList.add("zoom-in"); // adding css animation class
  abouth1.textContent = "About Kendra" // header h1 will say "about kendra"
  main.appendChild(abouth1); // adding header to main

  /**Adding kendra about paragraph to main*/
  const p = document.createElement('p'); // creating p element for kendras about info
  p.classList.add("zoom-in") // adding css animation styling
  p.innerHTML = `Kendra began her hairdressing journey in 2013 she completed a three-year apprenticeship that combined hands-on salon experience with classroom training. She has been a licensed hairstylist since 2016.<br><br><h2 class="about-h2">Continued Learning</h2>Passionate about continued growth, Kendra trained at the Redken Academy in Toronto, where she expanded her knowledge in color theory, advanced cutting techniques, blonding concepts and formulations, freehand balayage painting, and foliage techniques. She is also certified in curly hair through DevaCurl, allowing her to specialize in textured and natural curls.<br><br>In addition to hairstyling, Kendra is currently working toward her makeup certification, further expanding her ability to offer complete, personalized beauty services.<br><br><h2 class="about-h2">Commitment</h2>With a deep love for the craft and a commitment to making others feel their best, Kendra brings skill, creativity, and care to every appointment.`;
  main.appendChild(p); // adding p element to main

  waitForAllImages(() => {
    window.scrollTo({ top: 0, behavior: "auto" }); // making page scroll to top upon load
    hidePreloader();
  });
}
