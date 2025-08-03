import { checkFooterDisplay, checkMainId, hidePreloader, showPreloader } from './helper.js';

export function servicesDisplay() {
  showPreloader();

// Give the preloader a moment, then render
  setTimeout(() => {
    checkMainId();
    checkFooterDisplay();
    window.scrollTo({ top: 0, behavior: "smooth" });
    let main = document.getElementById('main');
    main.classList.add("grow");
    main.innerHTML = "";
    
    let body = document.querySelector('body');
    body.className = "services-body";

    let p = document.createElement('p');
    p.textContent = "All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here All SERVICES will be displaye here";
    main.appendChild(p);
    hidePreloader();
  },500);
}