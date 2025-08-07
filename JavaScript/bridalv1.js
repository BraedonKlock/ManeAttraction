import { checkFooterDisplay, checkMainId, showPreloader, hidePreloader, waitForAllImages } from './helper.js';

/**This file has a function that displays the bridal page
 * I also has an array of images that i loop through to create image tags and display images
 */
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
let isImgAActive = true;

// Create container for overlapping images
const slider = document.createElement("div");
slider.className = "image-fader";
slider.classList.add("blur-in");
main.appendChild(slider);

// Create two image elements
const imgA = document.createElement("img");
const imgB = document.createElement("img");

imgA.src = images[0];
imgB.src = images[1]; // preload second image

imgA.classList.add("fade-img", "visible");
imgB.classList.add("fade-img");

slider.appendChild(imgA);
slider.appendChild(imgB);

// Start crossfade interval
setInterval(() => {
  const nextIndex = (current + 1) % images.length;

  if (isImgAActive) {
    imgB.src = images[nextIndex];
    imgB.classList.add("visible");
    imgA.classList.remove("visible");
  } else {
    imgA.src = images[nextIndex];
    imgA.classList.add("visible");
    imgB.classList.remove("visible");
  }

  current = nextIndex;
  isImgAActive = !isImgAActive;
}, 4000);



  // Add paragraph
  const bridalp = document.createElement("p");
  bridalp.id = "bridal-p";
  bridalp.classList.add("blur-in");
  bridalp.innerHTML = `
    You've imagined this day a thousand times — and I am here to make sure every detail feels just right.<br><br>
    I understand how much care, emotion, and planning goes into a wedding, and I bring that same level of dedication to every bridal appointment. My goal is simple: to make sure the bride’s hair is absolutely perfect — styled to last, flawless in photos, and true to her vision.<br><br>
    From elegant updos to soft, romantic waves, I work closely with each bride to ensure the hairstyle enhances her features, complements the dress, and reflects her personality. I also offer styling for the entire bridal party, making sure everyone looks and feels their best.<br><br>
    Your wedding day is one of the most important days of your life — and I am here to help you feel beautiful every step of the way.<br><br>For more information or to book, please reach out to me at:<br><strong>613-326-1649</strong><br>or<br><strong>ManeAttractionHairDesign@gmail.com</strong>
  `;
  main.appendChild(bridalp);

  gridDisplay();

  waitForAllImages(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    hidePreloader();
  });
}

/**Creating an array of bridal photos and creating a function to create elements and place and display the photos */
const MAX_IMAGES = 8;
const bridalArray = [];

for (let i = 1; i <= MAX_IMAGES; i ++) {
  bridalArray.push(`./Photos/Gallery/Bridal/Grid/bridal${i}.jpg`);
}

function gridDisplay() {
  const photoGridContainer = document.createElement("div");
  photoGridContainer.id = "photo-grid-container";
  photoGridContainer.classList.add("blur-in");
  main.appendChild(photoGridContainer);

  for (let i = 0; i < bridalArray.length; i++) {
    const image = document.createElement("img");
    image.classList.add("grid-image");
    image.src = bridalArray[i];
    photoGridContainer.appendChild(image);
  }
}