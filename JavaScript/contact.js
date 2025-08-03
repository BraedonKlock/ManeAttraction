import { checkMainId, showPreloader, hidePreloader, waitForAllImages } from './helper.js';

export function contactDisplay() {
  showPreloader();

  checkMainId();
  window.scrollTo({ top: 0, behavior: "smooth" });

  let body = document.querySelector('body');
  body.className = "contact-body";

  let main = document.getElementById('main');
  main.classList.remove("grow");
  main.classList.add("fade");
  main.innerHTML = "";

  let contactInfo = document.createElement('div');
  contactInfo.innerHTML = `
      <div id="contact-us" class="fade">
          <p>Kendra Roney</p>
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
    hidePreloader();
  });
}