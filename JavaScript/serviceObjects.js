/**This file is responsible for service  objects.
 * It has a service object which can be used to create different kinds of services.
 * These services are the passed into different service category arrays
 * These arrays are then printed by looping throuch them and calling createService function which creates elements and  prints the service details in said elements
 */

/**This is a service object */
class Service {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
  }
}

/**--------------------------------------------------------------------------------------------- */
/**printing Hair cut and styling objects */
export function hairCutStyling() {

    const getContainer = document.getElementById('service-list-display');
    getContainer.innerHTML = "";

    for (let i = 0; i < hairCutStylingList.length; i ++) {
    const service = createService(hairCutStylingList[i]);
    main.appendChild(service);
  }
}
/**creating array of haircut and styling objects */
const MAX_HAIR_CUT_SERVICES = 3;
const hairCutStylingList = new Array(MAX_HAIR_CUT_SERVICES);
/**services property values assigned */
hairCutStylingList[0] = new Service("Women's Haircut", "A customized haircut designed by your stylist to fit your individual style and preferences.", "$55.00");

hairCutStylingList[1] = new Service("Men's Haircut", "A customized haircut designed by your stylist to fit your individual style and preferences. This includes clipper cut, fade and finish.", "$36.00");

hairCutStylingList[2] = new Service("Women's Wash & Blow-Dry", "Professional styling and finishing service using a blow dryer and professional styling brush.", "$45.00");

hairCutStylingList[3] = new Service("Deva Curl Specialty Haircut", "Specifically designed for extreme curl hair types.", "$60.00");

hairCutStylingList[4] = new Service("Special Occasions / Up-Dos", "An elegant style where the hair is pulled up, customized to your needs using top of the line service.", "$100.00");

hairCutStylingList[5] = new Service("Hair/makeup special event", "", "$130.00");

hairCutStylingList[6] = new Service("Extension installation", "Including tape in, integrated, micro weft or sew in.", "$130.00");

hairCutStylingList[7] = new Service("Women's Styling with hot iron", "Professional styling and finishing service using a flat or curling iron.", "$40.00");
/**--------------------------------------------------------------------------------------------- */

/**printing Hair color and other objects */
export function hairColorOther() {

    const getContainer = document.getElementById('service-list-display');
    getContainer.innerHTML = "";

    for (let i = 0; i < hairColorOtherList.length; i ++) {
        const service = createService(hairColorOtherList[i]);
        main.appendChild(service);
    }

}

/**creating array of hair Color and other objects */
const MAX_HAIR_COLOR_SERVICES = 1;
const hairColorOtherList = new Array(MAX_HAIR_COLOR_SERVICES);
/**services property values assigned */
hairColorOtherList[0] = new Service("Full Color Re-touch / haircut included", "Is the process of using a dye or tint to change the colour of your hair to cover up the grey, or for cosmetic purposes. This service includes a haircut, and up to 4oz of colour. Please note that an additional $20 is applied to every 2oz needed.", "$146.00");

hairColorOtherList[1] = new Service("Full colour retouch with foils / haircut included", "All over permanent or semi permanent colour with foils to create a customized design specific to you. haircut, toner and up to 4 ounces of colour included.", "$190.00");

hairColorOtherList[2] = new Service("Full head foils / haircut included", "A full head of foils creates a bright blonde, platinum, or multiple colour style customized specific to you. This includes 30+ foils, haircut, toner, and up to 4 ounces of colour.", "$164.00");

hairColorOtherList[3] = new Service("Partial foils / haircut included", "Partial foils create dimension and make for a more natural grow out while adding brightness and freshness to your colour. Colour includes haircut toner and up to 4 ounces of colour.", "$155.00");

hairColorOtherList[4] = new Service("Colour Correction / haircut included", "Corrective service to fix hair colour tone. Colour corrections are priced separately and require a consultation for cost.", "$100.00");

hairColorOtherList[5] = new Service("Ombré/ Balayage technique / haircut included", "Ombre and Balayage is a specialized technique learned only from continued education sources. This look creates a soft grow out, longer lasting colour and beautiful natural style specific to you. This includes a haircut, toner, and up to 4oz of colour.", "$180.00");

hairColorOtherList[6] = new Service("Ombré, Balayage with shadow root / haircut included", "Ombre and Balayage is a specialized technique learned only from continued education sources. This look creates a soft grow out, longer lasting colour and beautiful natural style specific to you. This includes a haircut, toner, and up to 4oz of colour.", "$200.00");

hairColorOtherList[7] = new Service("Root touch up / Haircut included", "Touch up of the root with Demi or Permanent hair colour or lightener to match ends.", "$122.00");

hairColorOtherList[8] = new Service("Root colour touch up with foils / haircut included", "Demi or permanent root touchup with foils to create a customized design specific to your needs. Haircut, toner and up to 4 ounces of colour included.", "$175.00");

hairColorOtherList[9] = new Service("Perm", "", "$230.00");

hairColorOtherList[10] = new Service("Toner", "A toner gives a fresh enhanced look to the hair while adding shine and health. Recommended every 4-6 weeks. This is great to keep your hair at a beautiful platinum blonde or a bright copper red!", "$70.00");

/**--------------------------------------------------------------------------------------------- */

/**printing waxing objects */
export function waxing() {

    const getContainer = document.getElementById('service-list-display');
    getContainer.innerHTML = "";

    for (let i = 0; i < waxingList.length; i ++) {
        const service = createService(waxingList[i]);
        main.appendChild(service);
    }
}

/**creating array of waxing objects */
const MAX_WAXING_SERVICES = 1;
const waxingList = new Array(MAX_WAXING_SERVICES);
/**services property values assigned */
waxingList[0] = new Service("Waxing - Full Face", "Waxing different parts of the face.", "$40.00");

waxingList[1] = new Service("Waxing - Eye Brow Shaping", "Shaping of the brows", "$20.00");

waxingList[2] = new Service("Waxing - Lips", "", "$10.00");

waxingList[3] = new Service("Waxing - Chin", "", "$15.00");

waxingList[4] = new Service("Brow Tint", "Brow tint helps to fill the brow making it more pronounced and clean.", "$20.00");

/**---------------------------------------------------------------------------------------------*/

/**printing treatments objects */
export function treatments() {
    const getContainer = document.getElementById('service-list-display');
    getContainer.innerHTML = "";

    for (let i = 0; i < treatmentsList.length; i ++) {
        const service = createService(treatmentsList[i]);
        main.appendChild(service);
    }
}

/**creating array of treatments objects */
const MAX_treatments_SERVICES = 1;
const treatmentsList = new Array(MAX_treatments_SERVICES);
/**services property values assigned */
treatmentsList[0] = new Service("Olaplex stand alone treatment", "Olaplex is a treatment designed to reconnect hair bonds during a colouring process or used as a stand alone treatment to revive the hair of any breakage. It provides instant results leaving the hair feeling soft shiny and healthy.", "$40.00");

treatmentsList[1] = new Service("Conditioning Treatment", "A formula that is designed to restore moisture in the hair. Often the client will wear a cap and be placed under a dryer for 10-20 minutes to increase the speed of penetration.", "$25.00");

/**---------------------------------------------------------------------------------------------*/


/**This is a function to display a service */
function createService(service) {

  const getContainer = document.getElementById('service-list-display');

  const container = document.createElement("div");
  container.className = "service-container";
  container.classList.add("grow");
  getContainer.appendChild(container);

  const name = document.createElement("h3");
  name.textContent = service.name;
  container.appendChild(name);

  const description = document.createElement("p");
  description.id = "description";
  description.textContent = service.description;
  container.appendChild(description);

  const price = document.createElement("p");
  price.textContent = service.price;
  container.appendChild(price);

  const hr = document.createElement("hr");
  container.appendChild(hr);

  return getContainer;
}