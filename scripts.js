document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        // Toggle visibility of the nav-links
        navLinks.classList.toggle('open');

        // Animate each link
        links.forEach(link => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards`;
            }
        });

        // Animate hamburger into a cross
        hamburger.classList.toggle('toggle');
    });
});
