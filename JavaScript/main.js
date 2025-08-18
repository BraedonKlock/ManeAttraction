import { homeDisplay } from './home.js?v=7.1.1'; // function displays home page
import { aboutDisplay } from './about.js?v=7.1.1'; // function displays about page
import { servicesDisplay } from './services.js?v=7.1.1'; // function ddisplays the services page
import { bridalDisplay } from './bridal.js?v=7.1.1'; // function displays the bridal page
import { galleryDisplay } from './gallery.js?v=7.1.1';// function displays galllery page
import { contactDisplay } from './contact.js?v=7.1.1'; // function displays the contact page

/**
 * This file handles the menu and calls the functions corresponding to the menu options
 * upon initial load it looks for a saved page in local storage. if non exist it goes to home.
 * event listeners are attached to the hamburger menu, anchor tags page load, click and scroll
 * if the user opens the menu and clicks an option (page) that page is saved to localstorage as a string with an expiration date and then the function that manipulates the dom runs and inserts elements in the "main" tag.
 * if the user refreshes the page the event listener for load will perform a function that scrolls the page to the top get the saved page check the expiration and will display the same page the user is on if it hasnt expired. if expired it displays home.
 * event listener for scroll and click outside hamburger menu collapses hamburger menu
 */

homeDisplay(); // Default to home when page is firt loaded

/**Event listener for page refresh, and function that checks expiration time to determin what to display*/
window.addEventListener('load', () => {
  window.scrollTo({ top: 0, behavior: "auto" });

  /** Load and check saved page from localStorage */
  const saved = localStorage.getItem('lastPage');

  /**Converting string to an object because javascript understands objects and pulls out the values of the key */
  const { page, expiresAt } = JSON.parse(saved); 
  /**Only runs if a page was saved */
  if (saved) {
    const now = new Date().getTime(); // gets the current time 

    /**Compares current time to page expiration time . if page hasnt expired we display the saved page, if expired we go to home page*/
    if (now < expiresAt) {
      if (page === "About") aboutDisplay();
      else if (page === "Services") servicesDisplay();
      else if (page === "Bridal") bridalDisplay();
      else if (page === "Gallery") galleryDisplay();
      else if (page === "Contact") contactDisplay();
      else homeDisplay(); // fallback
      return;
    } else {
      localStorage.removeItem('lastPage'); // Remove expired entry
    }
  }

  homeDisplay(); // Default to home if nothing is stored or expired
});

/**event listener for hamburger menu and its options*/
/**adding event listener to hamburger menu to make sure everything is loaded before running code inside the function to prevent accessing elements before they exist */
document.addEventListener('DOMContentLoaded', function () { 
  const hamburger = document.getElementById('hamburger'); // the icon/button that the user clicks
  const navMenu = document.getElementById('hamburger-nav'); // the container holding the links
  const navLinks = document.querySelectorAll('#hamburger-nav a'); // the nodelist of all anchor tags within
  const desktopNavLinks = document.querySelectorAll('#nav a'); // the nodelist of all anchor tags within nav of desktop V.

  /**If hamburger icon and container for links exist then add event listener to the hamburger icon */
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () { // event listener for click
      navMenu.classList.toggle('active'); // displays menu
    });
  }

  /**Looping through navLink nodelist and applying event listener to anchor tags */
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', handleNavClick);
    desktopNavLinks[i].addEventListener('click', handleNavClick);
  }
});

/**Event listener that collapses hamburger menu when the user clicks outside the menu */
document.addEventListener('click', function (event) {
  const hamburger = document.getElementById('hamburger'); // get hamburger icon
  const navMenu = document.getElementById('hamburger-nav'); // get container for links

  const clickedInsideHamburger = hamburger.contains(event.target); // if hamburger is clicked returns true
  const clickedInsideMenu = navMenu.contains(event.target); // if link container is clicked return true

  // If clicked outside both hamburger and container for links the collapse menu
  if (!clickedInsideHamburger && !clickedInsideMenu) {
    navMenu.classList.remove('active'); // collapse hamburger menu
  }
});

/**Event listener that collapses hamburger menu if the user scrolls */
window.addEventListener('scroll', function () {
  const navMenu = document.getElementById('hamburger-nav');
  if (navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
  }
});

/**This function runs when the event listener is triggered by the user selecting a menu option. This function saves the page to local storage and displays the page selected | passing in event object*/
function handleNavClick(e) {
  e.preventDefault(); // prevents anchor tag from running

  const page = this.textContent.trim(); // trims the text content inside the element to prevent error

  /** Save selected page with an expiration time */
  const expirationMinutes = 3; // expiration in minutes
  /**This sets the expiration time of the saved page by adding current time (milliseconds) to the expiration time(converting to milliseconds) */
  const expiresAt = new Date().getTime() + expirationMinutes * 60 * 1000;

  /**sets the key "last page" in local storage with the values "page name" and "expiration time." this must be converted to a string because the browser doesnt understand objects */
  localStorage.setItem('lastPage', JSON.stringify({ page, expiresAt }));

  const main = document.getElementById('main'); // getting main to clear previous content because that's where we are placing page content
  main.innerHTML = ''; // clearing main 

  if (page === "Home") homeDisplay();
  else if (page === "About") aboutDisplay();
  else if (page === "Services") servicesDisplay();
  else if (page === "Bridal") bridalDisplay();
  else if (page === "Gallery") galleryDisplay();
  else if (page === "Contact") contactDisplay();
  else alert("ERROR");

  document.getElementById('hamburger-nav').classList.remove('active'); // collapsing hamburger menu
}
