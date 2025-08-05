import { checkFooterDisplay, showPreloader, hidePreloader, waitForAllImages } from './helper.js';

export function aboutDisplay() {
  showPreloader(); // preloader to load page content before displaying for smooth user experience
  checkFooterDisplay(); // displaying footer if not applied. footer was removed in contact.js

  /**Getting the body element and adding new styling to it */
  const body = document.querySelector('body');
  body.className = "about-body";

  /**Getting main to add about page content */
  const main = document.getElementById('main');
  main.classList.add("about-main"); // Adds styling for the about page
  main.classList.remove("grow","fade");

  /**Adding image of kendra to main*/
  const image = document.createElement("img");
  image.id = "image";
  image.classList.add("zoom-in");
  image.src = "./Photos/kendra2.jpeg";
  main.appendChild(image);

  /**Adding "About kendra" header" to main*/
  const abouth1 = document.createElement("h1");
  abouth1.id = "about-h1";
  abouth1.classList.add("zoom-in");
  abouth1.textContent = "About Kendra"
  main.appendChild(abouth1);

  /**Adding kendra about paragraph to main*/
  const p = document.createElement('p');
  p.classList.add("zoom-in")
  p.innerHTML = "Kendra began her hairdressing journey in 2013 at St. Lawrence College in Kingston, where she completed a two-year diploma in hairstyling. Following her formal education, she completed a three-year apprenticeship that combined hands-on salon experience with classroom training. She has been a licensed hairstylist since 2016.<br><br>Passionate about continued growth, Kendra trained at the Redken Academy in Toronto, where she expanded her knowledge in color theory, advanced cutting techniques, blonding concepts and formulations, freehand balayage painting, and foliage techniques. She is also certified in curly hair through DevaCurl, allowing her to specialize in textured and natural curls.<br><br>In addition to hairstyling, Kendra is currently working toward her makeup certification, further expanding her ability to offer complete, personalized beauty services.<br><br>With a deep love for the craft and a commitment to making others feel their best, Kendra brings skill, creativity, and care to every appointment.";
  main.appendChild(p);
  waitForAllImages(() => {
    window.scrollTo({ top: 0, behavior: "auto" }); // making page scroll to top upon load
    hidePreloader();
  });
}