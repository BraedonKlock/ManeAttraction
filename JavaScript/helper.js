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

/**This function checks if "about-main" css styling is applied and removes it if so */
export function checkMainId() {
    const main = document.getElementById('main');

    if (main.classList.contains('about-main')) {
        main.classList.remove("about-main");
    }
}

/**This function checks if "bridal-main" css styling is applied to main and removes it if so */
export function removeBridal() {
    const main = document.getElementById('main');

    if (main.classList.contains('bridal-main')) {
        main.classList.remove("bridal-main");
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

/**This function hides the preloader when done */
export function hidePreloader() {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("site-content");

  if (preloader && content) {
    preloader.style.display = "none";
    content.style.display = "block";
  }
}

/** 
 * Loads all <img> and CSS background images on the page 
 * before calling the provided callback function. 
 */
export function waitForAllImages(callback) {
  const imgElements = document.body.querySelectorAll('img'); // Find all <img> elements on the page
  // Find all elements that use a CSS background-image
  const bgElements = Array.from(document.querySelectorAll('*')).filter(el => { 
    // Get the computed background-image style for each element
    const bg = window.getComputedStyle(el).getPropertyValue('background-image');
    return bg && bg !== 'none'; // Keep only those elements where background-image is set (not "none")
  });

  // Total number of images we need to wait for (both <img> and background images)
  let total = imgElements.length + bgElements.length;
  if (total === 0) { //   // If there are no images at all, run callback immediately
    callback();
    return;
  }

  // Counter for how many images have finished loading (success OR error)
  let loaded = 0;

  // Helper function to increment the counter and check if we're done
  const checkDone = () => {
    loaded++;
    if (loaded === total) callback(); // When the number of loaded images equals the total, trigger callback
  };

  // Handle regular <img> elements
  imgElements.forEach((img) => {
    if (img.complete) { // If the image is already cached and loaded
      checkDone();
    } else { // Otherwise, wait for it to either load or fail
      img.addEventListener('load', checkDone);
      img.addEventListener('error', checkDone);
    }
  });

  // Handle CSS background images
  bgElements.forEach((el) => {
    // Use regex to extract the actual URL from the CSS background-image property
    const urlMatch = window.getComputedStyle(el).getPropertyValue('background-image').match(/url\(["']?([^"')]+)["']?\)/);
    if (urlMatch && urlMatch[1]) {
      const bgImg = new Image();
      bgImg.src = urlMatch[1]; // Start loading the background image
      bgImg.onload = checkDone; // Count as loaded when it finishes
      bgImg.onerror = checkDone; // Also count if it fails to load
    } else {
      // If there's no valid URL (e.g. gradient backgrounds), count it as done
      checkDone(); // If it can't find a URL, count it as done
    }
  });
}
