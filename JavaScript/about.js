  export function aboutDisplay() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    let main = document.getElementById('main');

    let p = document.createElement('p');
    p.textContent = "ABOUT: this is the about page, this is where information about kendra will be displayed";
    main.appendChild(p);

  }