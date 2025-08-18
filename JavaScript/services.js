import { checkFooterDisplay, removeBridal, checkMainId, hidePreloader, showPreloader, waitForAllImages } from './helper.js?v=7.1.1';
import { hairCutStyling, hairColorOther, waxing, treatments } from './serviceObjects.js?v=7.1.1';

/**This file creates the elements and content for the services page
 * There are four service options which are buttons, when the button is clicked
 * the related function that displays a list of those services are called from "serviceObjects.js"
 */

/**This function displays the services to main */
export function servicesDisplay() {
  showPreloader();
  removeBridal(); // removing possible bridal css
  checkMainId(); // removing possible about css 
  checkFooterDisplay(); // making sure footer display is active after visiting contact page which removes it

  const main = document.getElementById('main'); // getting main where services and service options will be displayed
  main.classList.add("grow"); // adding css animation
  main.classList.remove("fade","zoom-in","blur-in"); // removing other animations from other pages
  main.innerHTML = ""; // clearing previous content loaded into main
  
  const body = document.querySelector('body'); // getting the body to add a class
  body.className = "services-body"; // setting the class for css styling to the body

  /**Service options container. This holds all types of services that the user will choose */
  const serviceOptions = document.createElement("div");
  serviceOptions.id = "service-options-container";
  main.appendChild(serviceOptions);

  /**serviceList display container. This is where the list of the services of a service option will be displayed*/
  const serviceListDisplay = document.createElement("div");
  serviceListDisplay.id = "service-list-display";
  main.appendChild(serviceListDisplay);

  /**creating button for the first service "Haircuts & Styling" */
  const hairCutBtn = document.createElement("button");
  hairCutBtn.className = "service-option-btn";
  hairCutBtn.textContent = "Haircuts & Styling";
  serviceOptions.appendChild(hairCutBtn);


  /**creating a button for the second service "Hair Color & Other" */
  const hairColorBtn = document.createElement("button");
  hairColorBtn.className = "service-option-btn";
  hairColorBtn.textContent = "Hair Color & Other";
  serviceOptions.appendChild(hairColorBtn);

    /**Creating a button for the third service "Waxing" */
  const waxingBtn = document.createElement("button");
  waxingBtn.className = "service-option-btn";
  waxingBtn.textContent = "Waxing";
  serviceOptions.appendChild(waxingBtn);

  /**Creating a button for the fourth service "Treatments" */
  const treatmentsBtn = document.createElement("button");
  treatmentsBtn.className = "service-option-btn";
  treatmentsBtn.textContent = "Treatments";
  serviceOptions.appendChild(treatmentsBtn);

 /**When a user clicks one of the buttons the related Function is called */
  hairCutBtn.onclick = hairCutStyling;
  hairColorBtn.onclick = hairColorOther;
  waxingBtn.onclick = waxing;
  treatmentsBtn.onclick = treatments;

  waitForAllImages(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    hidePreloader();
  });
}