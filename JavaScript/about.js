  export function aboutDisplay() {
    let main = document.getElementById('main');

    let p = document.createElement('p');
    p.textContent = "ABOUT: this is the about page, this is where information about kendra will be displayed";
    main.appendChild(p);

  }