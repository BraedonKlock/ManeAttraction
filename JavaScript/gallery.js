import { checkFooterDisplay, checkMainId, showPreloader, hidePreloader,waitForAllImages } from './helper.js';

/**Creating an array of images to loop through and and create elements to display the images. This reduces code*/
const totalImages = 7;

const galleryImages = [];

for (let i = 1; i <= totalImages; i ++) {
    galleryImages.push(`./Photos/Gallery/gallery${i}.png`);
} 

export function galleryDisplay() {
  showPreloader();

  checkMainId();
  checkFooterDisplay();
  window.scrollTo({top: 0, behavior:"smooth"});

  let main = document.getElementById('main');
  main.classList.remove("grow","fade");
  main.innerHTML = "";
  let body = document.querySelector('body');
  body.className = "gallery-body";

  let div = document.createElement("div");
  div.id = "gallery-container";
  div.classList.add("fade-in");

  let header = document.createElement("p");
  header.id = "gallery-header";

  header.textContent = "Gallery";
  div.appendChild(header);

  main.appendChild(div);
  for (let i = 0; i < galleryImages.length; i ++) {
      const img = document.createElement("img");
      img.className = "gallery-image";
      img.src = galleryImages[i];
      img.classList.add("gallery-image");

      div.appendChild(img);
  }

  /**This is the "See more below text" */
  let seeMore = document.createElement("p");
  seeMore.id = "gallery-see-more"
  seeMore.textContent = "See more photos at:";
  div.appendChild(seeMore);

  /**This is the container for the links to more photos */
  let linkDiv = document.createElement("div");
  linkDiv.id = "gallery-links";
  div.appendChild(linkDiv);
  
  /**This is the facebook image and link */
  let fbAnchor = document.createElement("a");
  fbAnchor.href = "https://www.facebook.com/share/1CKPXq4F6a/";
  linkDiv.appendChild(fbAnchor);
  let fbImage = document.createElement("img");
  fbImage.id = "gallery-fb";
  fbImage.src = "./Photos/fbLogo.jpg";
  fbAnchor.appendChild(fbImage);

  /**This is the instagram image and link */
  let instAnchor = document.createElement("a");
  instAnchor.href = "https://www.instagram.com/maneattractionhairdesign?igsh=dWJod2VucXlkZ211";
  linkDiv.appendChild(instAnchor);
  let instImage = document.createElement("img");
  instImage.id = "gallery-inst";
  instImage.src = "./Photos/InstagramLogo.png";
  instAnchor.appendChild(instImage);

  GalleryScrollEffect();
  waitForAllImages(() => {
    hidePreloader();
  });
}

/**This function sets a scroll effect to every image */
function GalleryScrollEffect() {
    function showImagesOnScroll() {
        let images = document.querySelectorAll('.gallery-image');

        for (let i = 0; i < images.length; i++) {
            let image = images[i];
            let imageTop = image.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;

            if (imageTop < windowHeight - 50) {
                image.classList.add('visible');
            }
        }
    }

    // Run on scroll and once on load
    window.addEventListener('scroll', showImagesOnScroll);
    window.addEventListener('load', showImagesOnScroll);
}
