/**
 * This file stores helper functions to make code cleaner
 */

/**This function displays footer if contact page was visited and the footer display was set to none */
export function checkFooterDisplay() {
    const footer = document.querySelector('footer');

    if (footer.style.display === 'none') {
        footer.style.display = 'flex';
    }
}

/**This function displays footer if contact page was visited and the footer display was set to none */
export function checkMainId() {
    const main = document.getElementById('main');

    if (main.classList.contains('about-main')) {
        main.classList.remove("about-main");
    }
}

/**Pre-loader helper function to improve smoothness of website loading*/
export function showPreloader() {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("site-content");

  if (preloader && content) {
    preloader.style.display = "flex";
    content.style.display = "none";
  }
}

export function hidePreloader() {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("site-content");

  if (preloader && content) {
    preloader.style.display = "none";
    content.style.display = "block";
  }
}
/**Loads images before displaying */
export function waitForAllImages(callback) {
  const imgElements = document.body.querySelectorAll('img');
  const bgElements = Array.from(document.querySelectorAll('*')).filter(el => {
    const bg = window.getComputedStyle(el).getPropertyValue('background-image');
    return bg && bg !== 'none';
  });

  let total = imgElements.length + bgElements.length;
  if (total === 0) {
    callback();
    return;
  }

  let loaded = 0;

  const checkDone = () => {
    loaded++;
    if (loaded === total) callback();
  };

  // Handle regular <img> elements
  imgElements.forEach((img) => {
    if (img.complete) {
      checkDone();
    } else {
      img.addEventListener('load', checkDone);
      img.addEventListener('error', checkDone);
    }
  });

  // Handle CSS background images
  bgElements.forEach((el) => {
    const urlMatch = window.getComputedStyle(el).getPropertyValue('background-image').match(/url\(["']?([^"')]+)["']?\)/);
    if (urlMatch && urlMatch[1]) {
      const bgImg = new Image();
      bgImg.src = urlMatch[1];
      bgImg.onload = checkDone;
      bgImg.onerror = checkDone;
    } else {
      checkDone(); // If it can't find a URL, count it as done
    }
  });
}
