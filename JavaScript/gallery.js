import { checkFooterDisplay, removeBridal, checkMainId, showPreloader, hidePreloader,waitForAllImages } from './helper.js?v=7.1.1';

/**Creating an array of images to loop through and and create elements to display the images. This reduces code*/
const totalImages = 8;

const galleryImages = [];

for (let i = 1; i <= totalImages; i ++) {
    galleryImages.push(`./Photos/Gallery/gallery${i}.png`);
} 

export function galleryDisplay() {
  showPreloader();
  removeBridal();
  checkMainId();
  checkFooterDisplay();

  const main = document.getElementById('main');
  main.classList.remove("grow","fade","zoom-in","blur-in");
  main.innerHTML = "";
  const body = document.querySelector('body');
  body.className = "gallery-body";
  
  const header = document.createElement("p");
  header.id = "gallery-header";
  header.textContent = "Gallery";
  main.appendChild(header);
  
  const div = document.createElement("div");
  div.id = "gallery-container";
  div.classList.add("fade-in");
  main.appendChild(div);


  for (let i = 0; i < galleryImages.length; i ++) {
      const img = document.createElement("img");
      img.className = "gallery-image";
      img.src = galleryImages[i];
      img.classList.add("gallery-image");

      div.appendChild(img);
  }

  /**This is the "See more below text" */
  const seeMore = document.createElement("p");
  seeMore.id = "gallery-see-more"
  seeMore.textContent = "See more photos at:";
  main.appendChild(seeMore);

  /**This is the container for the links to more photos */
  const linkDiv = document.createElement("div");
  linkDiv.id = "gallery-links";
  main.appendChild(linkDiv);
  
  /**This is the facebook image and link */
  const fbAnchor = document.createElement("a");
  fbAnchor.href = "https://www.facebook.com/share/1CKPXq4F6a/";
  linkDiv.appendChild(fbAnchor);
  const fbImage = document.createElement("img");
  fbImage.id = "gallery-fb";
  fbImage.src = "./Photos/fbLogo1.png";
  fbAnchor.appendChild(fbImage);

  /**This is the instagram image and link */
  const instAnchor = document.createElement("a");
  instAnchor.href = "https://www.instagram.com/maneattractionhairdesign?igsh=dWJod2VucXlkZ211";
  linkDiv.appendChild(instAnchor);
  const instImage = document.createElement("img");
  instImage.id = "gallery-inst";
  instImage.src = "./Photos/InstagramLogo1.png";
  instAnchor.appendChild(instImage);

  GalleryScrollEffect();
  waitForAllImages(() => {
    window.scrollTo({top: 0, behavior:"auto"});
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
