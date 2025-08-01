  export function homeDisplay() {
    let main = document.getElementById('main');

    let header = document.createElement('p');
    header.id = "main-header"
    header.textContent = "Welcome";
    header.classList.add("fade-in");
    main.appendChild(header);


    let welcomeMess = document.createElement('p');
    welcomeMess.id = "welcome-message";
    welcomeMess.classList.add("fade-in")
    welcomeMess.innerHTML = `
      Welcome to Mane Attraction Hair Design! I’m Kendra, a passionate stylist specializing in color, cuts, and styles that bring out your natural beauty. 
      <br><br>
      <img id="home-image" src="../Photos/kendrahome.jpeg" alt="Kendra Headshot">
      
      Whether you're preparing for your big day, a special event, or just want a fresh new look, I’m here to make you feel confident and radiant. From bridal and formal styling to everyday transformations, I’m dedicated to bringing your hair goals to life with creativity and care.`;
    main.appendChild(welcomeMess);
  }