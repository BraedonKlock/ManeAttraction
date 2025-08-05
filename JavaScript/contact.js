import { checkMainId, removeBridal, showPreloader, hidePreloader, waitForAllImages } from './helper.js';

export function contactDisplay() {
  showPreloader();
  removeBridal();
  checkMainId();

  const body = document.querySelector('body');
  body.className = "contact-body";

  const main = document.getElementById('main');
  main.classList.remove("grow","zoom-in","blur-in");
  main.classList.add("fade");
  main.innerHTML = "";

  /**Creating a div container to hold business hours */
  const businessContainer = document.createElement("div");
  businessContainer.id = "business-container";
  main.appendChild(businessContainer);

  const contacth2 = document.createElement("h2"); // header that holds the text "Business Hours"
  contacth2.id = "contact-h2";
  contacth2.textContent = "Business Hours";
  businessContainer.appendChild(contacth2);

  const hoursDiv = document.createElement("div"); // a container to hold the buisiness hours so that i can apply style
  hoursDiv.id = "hours-div";
  businessContainer.appendChild(hoursDiv);

  const days = document.createElement("p"); // element holds days
  days.id = "days";
  days.innerHTML = `Sunday<br>Monday<br>Tuesday<br>Wednesday<br>Thursday<br>Friday<br>Saturday`;
  hoursDiv.appendChild(days);

  const hours = document.createElement("p"); // element holds hours
  hours.id = "hours";
  hours.innerHTML = `CLOSED<br>CLOSED<br>10:00am - 3:00pm<br>10:00am - 8:00pm<br>10:00am - 8:30pm<br>10:00am - 3:00pm<br>&nbsp;&nbsp;8:00am - 5:00pm<br>`;
  hoursDiv.appendChild(hours);

  const contacthr = document.createElement("hr");
  contacthr.id="contact-hr";
  businessContainer.appendChild(contacthr);

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

  main.appendChild(contactInfo);

  document.querySelector('footer').style.display = 'none';
  waitForAllImages(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    hidePreloader();
  });
}