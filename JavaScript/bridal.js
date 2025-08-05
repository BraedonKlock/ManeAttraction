import { checkFooterDisplay, checkMainId, showPreloader, hidePreloader, waitForAllImages } from './helper.js';

export function bridalDisplay() {
  showPreloader();
  checkMainId();
  checkFooterDisplay();

  const body = document.querySelector('body');
  body.className = "bridal-body";

  const main = document.getElementById('main');
  main.classList.add("bridal-main");
  main.classList.remove("grow", "fade", "zoom-in");
  main.innerHTML = "";

  // Image array
  const images = [
    "./Photos/Gallery/Bridal/bridal1.jpeg",
    "./Photos/Gallery/Bridal/bridal2.jpeg",
    "./Photos/Gallery/Bridal/bridal3.jpeg"
  ];
  let current = 0;

  // Create image element
  const bridalImage = document.createElement("img");
  bridalImage.id = "bridal-image";
  bridalImage.src = images[current];
  bridalImage.classList.add("blur-in");
  main.appendChild(bridalImage);

  // Rotate images every 4s with blur-in animation
  setInterval(() => {
    current = (current + 1) % images.length;
    bridalImage.classList.remove("blur-in"); // remove class to re-trigger animation
    void bridalImage.offsetWidth; // force reflow (resets animation)
    bridalImage.src = images[current];
    bridalImage.classList.add("blur-in");
  }, 4000);

  // Add paragraph
  const bridalp = document.createElement("p");
  bridalp.id = "bridal-p";
  bridalp.classList.add("blur-in");
  bridalp.innerHTML = `
    You've imagined this day a thousand times — and Kendra is here to make sure every detail feels just right.<br><br>
    Kendra understands how much care, emotion, and planning goes into a wedding, and she brings that same level of dedication to every bridal appointment. Her goal is simple: to make sure the bride’s hair is absolutely perfect — styled to last, flawless in photos, and true to her vision.<br><br>
    From elegant updos to soft, romantic waves, Kendra works closely with each bride to ensure the hairstyle enhances her features, complements the dress, and reflects her personality. She also offers styling for the entire bridal party, making sure everyone looks and feels their best.<br><br>
    Your wedding day is one of the most important days of your life — and Kendra is here to help you feel beautiful every step of the way.
  `;
  main.appendChild(bridalp);

  waitForAllImages(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    hidePreloader();
  });
}
