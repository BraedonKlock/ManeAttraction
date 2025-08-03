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
