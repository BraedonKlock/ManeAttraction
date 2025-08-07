import { checkMainId, removeBridal, showPreloader, hidePreloader, waitForAllImages } from './helper.js';

/**This file has the function that displays contact page
 * This function creates elements and displays buisiness hours contact information and address of kendra
 * also embeds google maps location
 */

/**This function creates and displays business hours, contact information and address of kendra and buisiness */
export function contactDisplay() {
  showPreloader(); // shows preloader while images load
  removeBridal(); // removing bridal css class
  checkMainId(); // removing css styling for about page from "main" so homes content isn't affected

  const body = document.querySelector('body'); // getting the body element to add css styling
  body.className = "contact-body"; // applying css styling to body

  const main = document.getElementById('main'); // getting main to add contact content
  main.classList.remove("grow","zoom-in","blur-in"); // removing css animation classes
  main.classList.add("fade"); // adding css animation class
  main.innerHTML = ""; // clearing previous content in main to add contact page content

  /**Creating a div container to hold business hours
   * structure is [businesscontainer holds -> h2 | (hours container holds-> days | hours) | hr]
   */
  const businessContainer = document.createElement("div"); // creating a div to hold the business hours section
  businessContainer.id = "business-container"; // assigning an id for css styling
  main.appendChild(businessContainer); // adding business container to main

  const contacth2 = document.createElement("h2"); // creating header that holds the text "Business Hours"
  contacth2.id = "contact-h2"; // assigning an id for css styling
  contacth2.textContent = "Business Hours"; // adding text content to the header element
  businessContainer.appendChild(contacth2); // adding the header element to the business container

  const hoursDiv = document.createElement("div"); // a container to hold the buisiness hours so that i can apply css style
  hoursDiv.id = "hours-div"; // assigning an id for css styling
  businessContainer.appendChild(hoursDiv); // adding the div for the hours to the business container

  const days = document.createElement("p"); // creating an element to hold days
  days.id = "days"; // assigning an id for css styling
  days.innerHTML = `Sunday<br>Monday<br>Tuesday<br>Wednesday<br>Thursday<br>Friday<br>Saturday`; // text in p element
  hoursDiv.appendChild(days); // adding p element to the div for hours

  const hours = document.createElement("p"); // creating a p element to hold hours
  hours.id = "hours"; // applying an id for css styling
  hours.innerHTML = `CLOSED<br>CLOSED<br>10:00am - 3:00pm<br>10:00am - 8:00pm<br>10:00am - 8:30pm<br>10:00am - 3:00pm<br>&nbsp;&nbsp;8:00am - 5:00pm<br>`; // text in p element 
  hoursDiv.appendChild(hours); // adding element that holds hours to hours div

  const contacthr = document.createElement("hr"); // creating a horizontal rule to seperate business hours from contactinfo
  contacthr.id="contact-hr"; // assigning an id for css styling
  businessContainer.appendChild(contacthr); // adding hr to business container

  /**Creating a div container to hold contact info */
  const contactInfo = document.createElement('div');
  contactInfo.innerHTML = `
      <div id="contact-us" class="fade">
          <p><strong>Kendra Roney</strong></p>
          <p>613-326-1649</p>
          <p>ManeAttractionHairDesign@gmail.com</p>
      <p style="font-weight: bold">Connect with us:</p>
          <div id="sm-links">
              <a href="https://www.facebook.com/share/1CKPXq4F6a/"><img src="./Photos/fbLogo.jpg" id="fb-logo"></a>
              <a href="https://www.instagram.com/maneattractionhairdesign?igsh=dWJod2VucXlkZ211"><img src="./Photos/InstagramLogo.png" id="inst-logo"></a>
          </div>
      </div>

    <section id="map-container">
      <h2>Find Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2826.1382580326654!2d-76.02579102322066!3d44.90018317107037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccd88a55077edd1%3A0x7233914cdaae445d!2s10%20Maple%20Ave%2C%20Smiths%20Falls%2C%20ON%20K7A%201Z5!5e0!3m2!1sen!2sca!4v1754144278714!5m2!1sen!2sca"
        width="100%" height="300"
        style="border:0; border-radius: 8px;" 
        allowfullscreen="" loading="lazy">
      </iframe>

      <p class="fade" style="text-align: center; font-weight:bold; margin-top: 2vh">10 Maple Avenue, Unit 6<br>
      Smiths Falls</p>
    </section>
  `;

  main.appendChild(contactInfo); // appending contact info to main

  document.querySelector('footer').style.display = 'none'; // hiding footer because it has the same info in contactInfo div
  
  waitForAllImages(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    hidePreloader();
  });
}