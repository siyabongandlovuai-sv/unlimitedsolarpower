// Mobile Navigation Toggle
const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        hamburger.classList.toggle('toggle');
    });
}

// Initialize Animation on Scroll (AOS)
document.addEventListener("DOMContentLoaded", () => {
    navSlide();
    AOS.init({
        duration: 800,
        offset: 100,
        once: true
    });
});
