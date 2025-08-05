import { homeDisplay } from './home.js';
import { aboutDisplay } from './about.js';
import { servicesDisplay } from './services.js';
import { contactDisplay } from './contact.js';
import { galleryDisplay } from './gallery.js'

/**
 * This file handles the menu and calls the functions corresponding to the menu options 
 */

/**Event listener for page refresh, it forces a scroll to the top */
window.addEventListener('load', () => {
  window.scrollTo({ top: 0, behavior: "auto" });

  const lastPage = localStorage.getItem('lastPage');

  if (lastPage === "About") aboutDisplay();
  else if (lastPage === "Services") servicesDisplay();
  else if (lastPage === "Gallery") galleryDisplay();
  else if (lastPage === "Contact") contactDisplay();
  else homeDisplay(); // Default to home if nothing is stored
});



  /**event listener for hamburger menu and its options*/
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('hamburger-nav');
  const navLinks = document.querySelectorAll('#hamburger-nav a');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
  }

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', handleNavClick);
  }
});

/**Event listener that collapses hamburger menu when the use clicks outside the menu */
document.addEventListener('click', function (event) {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('hamburger-nav');

  const clickedInsideHamburger = hamburger.contains(event.target);
  const clickedInsideMenu = navMenu.contains(event.target);

  // If clicked outside both hamburger and menu
  if (!clickedInsideHamburger && !clickedInsideMenu) {
    navMenu.classList.remove('active');
  }
});

/**Event listener that collapses hamburger menu if the user scrolls */
window.addEventListener('scroll', function () {
  const navMenu = document.getElementById('hamburger-nav');
  if (navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
  }
});

/**This function runs functions correlated with selected menu option selected */
function handleNavClick(e) {
  e.preventDefault();

  const page = this.textContent.trim();
  localStorage.setItem('lastPage', page); // Save the selected page

  const main = document.getElementById('main');
  main.innerHTML = '';

  if (page === "Home") homeDisplay();
  else if (page === "About") aboutDisplay();
  else if (page === "Services") servicesDisplay();
  else if (page === "Gallery") galleryDisplay();
  else if (page === "Contact") contactDisplay();
  else alert("ERROR");

  document.getElementById('hamburger-nav').classList.remove('active');
}



