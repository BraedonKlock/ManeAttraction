import { checkFooterDisplay, checkMainId, hidePreloader, showPreloader, waitForAllImages } from './helper.js';

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

  let p = document.createElement('p');
  p.textContent = "All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here";
  main.appendChild(p);
  waitForAllImages(() => {
    hidePreloader();
  });
}