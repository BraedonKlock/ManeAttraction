export function servicesDisplay() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    let main = document.getElementById('main');

    let p = document.createElement('p');
    p.textContent = "All SERVICES will be displaye here";
    main.appendChild(p);
}