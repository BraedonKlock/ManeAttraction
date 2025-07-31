  export function homeDisplay() {
    let main = document.getElementById('main');

    let p = document.createElement('p');
    p.textContent = "This is the default home page. content will be placed in this element";
    main.appendChild(p);
  }