    const totalImages = 7;

    const galleryImages = [];

    for (let i = 1; i <= totalImages; i ++) {
        galleryImages.push(`./Photos/Gallery/gallery${i}.png`);
    } 

export function galleryDisplay() {
    window.scrollTo({top: 0, behavior:"smooth"});

    let main = document.getElementById('main');
    main.innerHTML = "";
    let body = document.querySelector('body');
    body.classList.replace('body', 'gallery-body');

    let div = document.createElement("div");
    div.id = "gallery-container";
    div.classList.add("fade-in");

    let header = document.createElement("p");
    header.id = "gallery-header";

    header.textContent = "Gallery";
    div.appendChild(header);

    main.appendChild(div);
    for (let i = 0; i < galleryImages.length; i ++) {
        const img = document.createElement("img");
        img.className = "gallery-image";
        img.src = galleryImages[i];
        img.classList.add("gallery-image");

        div.appendChild(img);
    }
    GalleryScrollEffect();
}

function GalleryScrollEffect() {
    function showImagesOnScroll() {
        let images = document.querySelectorAll('.gallery-image');

        for (let i = 0; i < images.length; i++) {
            let image = images[i];
            let imageTop = image.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;

            if (imageTop < windowHeight - 50) {
                image.classList.add('visible');
            }
        }
    }

    // Run on scroll and once on load
    window.addEventListener('scroll', showImagesOnScroll);
    window.addEventListener('load', showImagesOnScroll);
}
