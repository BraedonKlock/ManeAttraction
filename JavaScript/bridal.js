import { checkFooterDisplay, checkMainId, showPreloader, hidePreloader, waitForAllImages } from './helper.js';

export function bridalDisplay() {
  showPreloader(); // preloader to load page content before displaying for smooth user experience
  checkMainId();
  checkFooterDisplay(); // displaying footer if not applied. footer was removed in contact.js

  /**Getting the body element and adding new styling to it */
  const body = document.querySelector('body');
  body.className = "bridal-body";

  /**Getting main to add about page content */
  const main = document.getElementById('main');
  main.classList.add("bridal-main"); // Adds styling for the about page
  main.classList.remove("grow","fade","zoom-in");

  /**Adding image of kendra to main*/
  const bridalImage = document.createElement("img");
  bridalImage.id = "bridal-image";
  bridalImage.classList.add("blur-in");
  bridalImage.src = "./Photos/Gallery/Bridal/bridal1.jpeg";
  main.appendChild(bridalImage);
  const bridalp = document.createElement("p");
  bridalp.id= "bridal-p";
  bridalp.innerHTML =`You've imagined this day a thousand times — and Kendra is here to make sure every detail feels just right.<br><br>Kendra understands how much care, emotion, and planning goes into a wedding, and she brings that same level of dedication to every bridal appointment. Her goal is simple: to make sure the bride’s hair is absolutely perfect — styled to last, flawless in photos, and true to her vision.<br><br>From elegant updos to soft, romantic waves, Kendra works closely with each bride to ensure the hairstyle enhances her features, complements the dress, and reflects her personality. She also offers styling for the entire bridal party, making sure everyone looks and feels their best.<br><br>Your wedding day is one of the most important days of your life — and Kendra is here to help you feel beautiful every step of the way.`;
  main.appendChild(bridalp);

    waitForAllImages(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
        hidePreloader();
    });
}