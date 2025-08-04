import { homeDisplay } from './home.js';
import { aboutDisplay } from './about.js';
import { servicesDisplay } from './services.js';
import { contactDisplay } from './contact.js';
import { galleryDisplay } from './gallery.js'

/**
 * This file handles the menu and calls the functions corresponding to the menu options 
 */

homeDisplay() // displaying home by default

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

  /* This function handles the actions of the hamburger menu options */
  function handleNavClick(e) {
    e.preventDefault(); // preventing anchor tag from being executed

    const page = this.textContent.trim(); //assigning the clicked link to page and triming it

    const main = document.getElementById('main'); // getting main to apply content of menu option selected

    main.innerHTML = ''; // clearing main before applying content

    if (page == "Home") {
      homeDisplay(); // displaying home
    }
    else if (page == "About") {
      aboutDisplay(); // Display about
    }
    else if (page == "Services") {
      servicesDisplay(); // Display services
    }
    else if (page == "Gallery") {
      galleryDisplay(); // Display gallery
    }
    else if (page == "Contact") { 
    contactDisplay(); // Display contact
    } else {
    alert("ERROR"); // Alert error if failure
    }

    document.getElementById('hamburger-nav').classList.remove('active'); // toggling hamburger menu
  }


