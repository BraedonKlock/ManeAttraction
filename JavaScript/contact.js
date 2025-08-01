export function contactDisplay() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    let main = document.getElementById('main');

    let p = document.createElement('p');
    p.textContent = "CONTACT information will be displayed here";
    main.appendChild(p);
}