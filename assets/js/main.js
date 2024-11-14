document.addEventListener("DOMContentLoaded", function () {

    // Ensure hoodie image loads and log if it’s loaded
    const hoodieImage = document.getElementById('hoodie-image');
    if (hoodieImage) {
        hoodieImage.addEventListener('load', function () {
            console.log('Hoodie image loaded successfully.');
        });
    } else {
        console.log("Hoodie image element not found!");
    }



    // Custom IntersectionObserver for animations
    const animatedElements = document.querySelectorAll("[data-animate]");
    if (animatedElements.length) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => observer.observe(el));
    } else {
        console.log("No elements found with data-animate attribute.");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    // Toggle the mobile menu visibility when the hamburger menu is clicked
    hamburgerMenu.addEventListener('click', function () {
        mobileMenu.classList.remove('translate-x-full');  // Slide in the menu
        menuOverlay.classList.remove('hidden');  // Show overlay
    });

    // Close the mobile menu when the close icon or overlay is clicked
    closeMenu.addEventListener('click', function () {
        mobileMenu.classList.add('translate-x-full');  // Slide out the menu
        menuOverlay.classList.add('hidden');  // Hide overlay
    });

    menuOverlay.addEventListener('click', function () {
        mobileMenu.classList.add('translate-x-full');  // Slide out the menu
        menuOverlay.classList.add('hidden');  // Hide overlay
    });
});
