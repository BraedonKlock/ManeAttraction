import { checkFooterDisplay, checkMainId, hidePreloader, showPreloader, waitForAllImages } from './helper.js';

/**This is a service object */
function service(name, description, price) {
  return {
    name:name,
    description: description,
    price: price
  };
}

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


export function servicesDisplay() {
  showPreloader();

  checkMainId();
  checkFooterDisplay();
  window.scrollTo({ top: 0, behavior: "smooth" });
  let main = document.getElementById('main');
  main.classList.add("grow");
  main.classList.remove("fade");
  main.innerHTML = "";
  
  let body = document.querySelector('body');
  body.className = "services-body";

  const mensHairCut = service("Men's Cut", "Basic Men's hair cut", "$44.99");
  const service1 = createService(mensHairCut);

  const womensHairCut = service("Women's Hair Cut", "Basic Women's Hair cut", "$49.99");
  const service2 = createService(womensHairCut);

  const womensColor = service("Women's Color", "Women's Color", "$89.99");
  const service3 = createService(womensColor);

  main.appendChild(service1);
  main.appendChild(service2);
  main.appendChild(service3);
  
  waitForAllImages(() => {
    hidePreloader();
  });
}