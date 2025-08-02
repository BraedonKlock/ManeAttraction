/**This function displays footer if contact page was visited and the footer display was set to none */
export function checkFooterDisplay() {
    const footer = document.querySelector('footer');

    if (footer.style.display === 'none') {
        footer.style.display = 'flex';
    }
}

/**This function displays footer if contact page was visited and the footer display was set to none */
export function checkMainId() {
    const main = document.getElementById('main');

    if (main.classList.contains('about-main')) {
        main.classList.remove("about-main");
    }
}