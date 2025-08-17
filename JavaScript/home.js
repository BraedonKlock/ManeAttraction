import { checkFooterDisplay, removeBridal, checkMainId, showPreloader, hidePreloader, waitForAllImages } from './helper.js?v=7.1.1';
import { bridalDisplay } from './bridal.js?v=7.1.1';
import { aboutDisplay } from './about.js?v=7.1.1';

/**Home displays the home screen content */

/**This function creates elements and displays everything */
export function homeDisplay() {
  showPreloader(); // running preloader function to load everything before displaying content for smooth experience
  removeBridal(); // removing css styling for bridal page from "main" so homes content isn't affected
  checkMainId(); // removing css styling for about page from "main" so homes content isn't affected
  checkFooterDisplay(); // restoring footer because it was removed in the contact page

  const main = document.getElementById('main'); // getting main to create elements and display home content
  main.classList.remove("grow", "fade","zoom-in", "blur-in"); // removing possibly attached css animations
  main.innerHTML = ""; // clearing any previous content added to main
  const body = document.querySelector('body'); // getting body so add css styling designed for the home page
  body.className = "body"; // css class name


  const header = document.createElement('p'); // creating a p element for the "Welcome header"
  header.id = "main-header" // giving it an id for styling
  header.textContent = "Welcome"; // text inside the p tag
  header.classList.add("fade-in"); // adding an css animation class
  main.appendChild(header); // adding the p element to main


  const welcomeMess = document.createElement('p'); // creating a p element to place the welcome message in
  welcomeMess.id = "welcome-message"; // assigning an id for css styling
  welcomeMess.classList.add("fade-in") // adding a css animation class
  welcomeMess.innerHTML = `
    Welcome to Mane Attraction Hair Design! I’m Kendra, a passionate stylist specializing in color, cuts, and styles that bring out your natural beauty. 
    <br><br>
    <img id="home-image" src="./Photos/kendrahome.jpeg" alt="Kendra Headshot">
    
    Whether you're preparing for your big day, a special event, or just want a fresh new look, I’m here to make you feel confident and radiant. From bridal and formal styling to everyday transformations, I’m dedicated to bringing your hair goals to life with creativity and care.`;
  main.appendChild(welcomeMess); // adding the welcome message to main
  
  /**This div is for the desktop version More About Kendra button to be apply to apply center for the button as the image float affected the button */
  const aboutDiv = document.createElement("div");
  aboutDiv.id="about-div";
  main.appendChild(aboutDiv);

  const aboutButton = document.createElement("button"); // creating a button that will link to the bridal page
  aboutButton.textContent = "More About Kendra"; // button says "Learn More"
  aboutButton.id = "about-kendra-btn"; // assigning id for css styling
  // adding an event listener to the button that will execute a funtion that displays the bridal page
  aboutButton.addEventListener("click", aboutDisplay);
  aboutDiv.appendChild(aboutButton); // adding the button to main

  const homehr = document.createElement("hr"); // creating a horizontal rule to seperate welcome message from bridal
  homehr.id = "home-hr"; // assigning id to apply css styling
  main.appendChild(homehr); // adding hr to main


  const bridalSection = document.createElement("div"); // creating a container for the bridal section of home
  bridalSection.classList.add("fade-in") // adding css animation class
  bridalSection.id = "bridal-section"; // assigning an id for css styling
  main.appendChild(bridalSection); // adding the bridal container to main

  const bridalh1 = document.createElement("h1"); // creating the header tag for the bridal section
  bridalh1.id = "bridal-h1"; // assigning id for css styling
  bridalh1.textContent = "Bridal"; // content inside the h1 tag 
  bridalSection.appendChild(bridalh1); // adding the h1 tag to main

  const bridalp = document.createElement("p"); // creating a p element to display bridal intro
  bridalp.id= "home-bridal-p"; // assigning id for css styling
  bridalp.innerHTML = `With over a decade of experience in bridal hairstyling, I know that a bride’s hair isn’t just part of the look — it’s a central piece of the day. From the moment she arrives to the last dance, the bride deserves to feel confident, radiant, and unforgettable.`;
  bridalSection.appendChild(bridalp); // adding bridal intro to main

  const button = document.createElement("button"); // creating a button that will link to the bridal page
  button.textContent = "Learn More"; // button says "Learn More"
  button.id = "learn-more-btn"; // assigning id for css styling
  // adding an event listener to the button that will execute a funtion that displays the bridal page
  button.addEventListener("click", bridalDisplay);
  bridalSection.appendChild(button); // adding the button to main

  /**Load all images before scrolling to the top of the page and hiding the preloader */
  waitForAllImages(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    hidePreloader();
  });
}