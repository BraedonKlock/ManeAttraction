import { checkFooterDisplay, removeBridal, checkMainId, hidePreloader, showPreloader, waitForAllImages } from './helper.js';
import { hairCutStyling, hairColorOther, waxing, treatments } from './serviceObjects.js';

/**This function displays the services to main */
export function servicesDisplay() {
  showPreloader();

  removeBridal();
  checkMainId();
  checkFooterDisplay();
  const main = document.getElementById('main');
  main.classList.add("grow");
  main.classList.remove("fade","zoom-in","blur-in");
  main.innerHTML = "";
  
  const body = document.querySelector('body');
  body.className = "services-body";

  /**Service options container */
  const serviceOptions = document.createElement("div");
  serviceOptions.id = "service-options-container";
  main.appendChild(serviceOptions);

  /**serviceList display container */
  const serviceListDisplay = document.createElement("div");
  serviceListDisplay.id = "service-list-display";
  main.appendChild(serviceListDisplay);

  const hairCutBtn = document.createElement("button");
  hairCutBtn.className = "service-option-btn";
  hairCutBtn.textContent = "Haircuts & Styling";
  serviceOptions.appendChild(hairCutBtn);


  /**hair color and other button */
  const hairColorBtn = document.createElement("button");
  hairColorBtn.className = "service-option-btn";
  hairColorBtn.textContent = "Hair Color & Other";
  serviceOptions.appendChild(hairColorBtn);

    /**waxing button */
  const waxingBtn = document.createElement("button");
  waxingBtn.className = "service-option-btn";
  waxingBtn.textContent = "Waxing";
  serviceOptions.appendChild(waxingBtn);

  /**Treatments button */
  const treatmentsBtn = document.createElement("button");
  treatmentsBtn.className = "service-option-btn";
  treatmentsBtn.textContent = "Treatments";
  serviceOptions.appendChild(treatmentsBtn);

 /**Functions are called */
  hairCutBtn.onclick = hairCutStyling;
  hairColorBtn.onclick = hairColorOther;
  waxingBtn.onclick = waxing;
  treatmentsBtn.onclick = treatments;

  waitForAllImages(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    hidePreloader();
  });
}