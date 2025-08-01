import { homeDisplay } from './home.js';
import { aboutDisplay } from './about.js';
import { servicesDisplay } from './services.js';
import { contactDisplay } from './contact.js';
import { galleryDisplay } from './gallery.js'
homeDisplay() // displaying home by default

  /**event listener for hamburger menu and its options*/
document.addEventListener('DOMContentLoaded', function () {
  let hamburger = document.getElementById('hamburger');
  let navMenu = document.getElementById('hamburger-nav');
  let navLinks = document.querySelectorAll('#hamburger-nav a');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
  }

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', handleNavClick);
  }
});


  /* This function handles the actions of the hamburger menu options */
  function handleNavClick(e) {
    e.preventDefault(); // preventing anchor tag from being executed

    let page = this.textContent.trim(); //assigning the clicked link to page and triming it

    let main = document.getElementById('main'); // getting main to apply content of menu option selected

    main.innerHTML = ''; // clearing main before applying content

    if (page == "Home") {
      homeDisplay(); // displaying home
    }
    else if (page == "About") {
      aboutDisplay();
    }
    else if (page == "Services") {
      servicesDisplay();
    }
    else if (page == "Gallery") {
      galleryDisplay();
    }
    else if (page == "Contact") { 
    contactDisplay();
    } else {
    alert("ERROR");
    }

    document.getElementById('hamburger-nav').classList.remove('active'); // toggling hamburger menu
  }


