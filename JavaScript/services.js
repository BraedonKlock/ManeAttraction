import { checkFooterDisplay, checkMainId, hidePreloader, showPreloader, waitForAllImages } from './helper.js';

/**This is a service object */
class Service {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
  }
}

/**creating array of Service objects */
const MAX_SERVICES = 3;
const servicesList = new Array(MAX_SERVICES);


/**services property values assigned */
servicesList[0] = new Service("Men's Cut", "Basic Men's hair cut", "$44.99");
servicesList[1] = new Service("Women's Hair Cut", "Basic Women's Hair cut", "$49.99");
servicesList[2] = new Service("Women's Color", "Women's Color", "$89.99");

/**This is a function to display a service */
function createService(service) {
  const container = document.createElement("div");
  container.className = "service-container";

  const name = document.createElement("h3");
  name.textContent = service.name;
  container.appendChild(name);

  const description = document.createElement("p");
  description.textContent = service.description;
  container.appendChild(description);

  const price = document.createElement("p");
  price.textContent = service.price;
  container.appendChild(price);

  const hr = document.createElement("hr");
  container.appendChild(hr);

  return container;
}

/**This function displays the services to main */
export function servicesDisplay() {
  showPreloader();

  checkMainId();
  checkFooterDisplay();
  window.scrollTo({ top: 0, behavior: "smooth" });
  const main = document.getElementById('main');
  main.classList.add("grow");
  main.classList.remove("fade");
  main.innerHTML = "";
  
  const body = document.querySelector('body');
  body.className = "services-body";

  /**printing service objects */
  for (let i = 0; i < servicesList.length; i ++) {
    const service = createService(servicesList[i]);
    main.appendChild(service);
  }
  
  waitForAllImages(() => {
    hidePreloader();
  });
}