import { checkFooterDisplay, checkMainId, showPreloader, hidePreloader, waitForAllImages } from './helper.js';


export function homeDisplay() {
  showPreloader();

  checkMainId();
  checkFooterDisplay();

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
  bridalp.innerHTML = `With over a decade of experience in bridal hairstyling, Kendra knows that a bride’s hair isn’t just part of the look — it’s a central piece of the day. From the moment she arrives to the last dance, the bride deserves to feel confident, radiant, and unforgettable.<br><br>Kendra understands how much care, emotion, and planning goes into a wedding, and she brings that same level of dedication to every bridal appointment. Her goal is simple: to make sure the bride’s hair is absolutely perfect — styled to last, flawless in photos, and true to her vision.<br><br>From elegant updos to soft, romantic waves, Kendra works closely with each bride to ensure the hairstyle enhances her features, complements the dress, and reflects her personality. She also offers styling for the entire bridal party, making sure everyone looks and feels their best.<br><br>Your wedding day is one of the most important days of your life — and Kendra is here to help you feel beautiful every step of the way. `;
  bridalSection.appendChild(bridalp);

  waitForAllImages(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    hidePreloader();
  });
}