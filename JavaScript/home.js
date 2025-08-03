import { checkFooterDisplay, checkMainId, showPreloader, hidePreloader, waitForAllImages } from './helper.js';


export function homeDisplay() {
  showPreloader();


  checkMainId();
  checkFooterDisplay();
  window.scrollTo( 0, 0 );

  const main = document.getElementById('main');
  main.classList.remove("grow", "fade");
  const body = document.querySelector('body');
  body.className = "body";


  const header = document.createElement('p');
  header.id = "main-header"
  header.textContent = "Welcome";
  header.classList.add("fade-in");
  main.appendChild(header);


  const welcomeMess = document.createElement('p');
  welcomeMess.id = "welcome-message";
  welcomeMess.classList.add("fade-in")
  welcomeMess.innerHTML = `
    Welcome to Mane Attraction Hair Design! I’m Kendra, a passionate stylist specializing in color, cuts, and styles that bring out your natural beauty. 
    <br><br>
    <img id="home-image" src="./Photos/kendrahome.jpeg" alt="Kendra Headshot">
    
    Whether you're preparing for your big day, a special event, or just want a fresh new look, I’m here to make you feel confident and radiant. From bridal and formal styling to everyday transformations, I’m dedicated to bringing your hair goals to life with creativity and care.`;
  main.appendChild(welcomeMess);
  const homehr = document.createElement("hr");
  homehr.id = "home-hr";
  main.appendChild(homehr);

  const bridalSection = document.createElement("div");
  bridalSection.classList.add("fade-in")
  bridalSection.id = "bridal-section";
  main.appendChild(bridalSection);

  const bridalh1 = document.createElement("h1");
  bridalh1.id = "bridal-h1";
  bridalh1.textContent = "Bridal";
  bridalSection.appendChild(bridalh1);

  const bridalp = document.createElement("p");
  bridalp.id= "bridal-p";
  bridalp.textContent = "This is where bridal seervice will be talked about. This is where bridal seervice will be talked about. This is where bridal seervice will be talked about. This is where bridal seervice will be talked about. This is where bridal seervice will be talked about. This is where bridal seervice will be talked about. This is where bridal seervice will be talked about. This is where bridal seervice will be talked about. This is where bridal seervice will be talked about. This is where bridal seervice will be talked about. This is where bridal seervice will be talked about. This is where bridal seervice will be talked about. This is where bridal seervice will be talked about. This is where bridal seervice will be talked about. This is where bridal seervice will be talked about. This is where bridal seervice will be talked about. This is where bridal seervice will be talked about. This is where bridal seervice will be talked about. ";
  bridalSection.appendChild(bridalp);

  waitForAllImages(() => {
    hidePreloader();
  });
}