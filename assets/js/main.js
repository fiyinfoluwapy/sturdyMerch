document.addEventListener("DOMContentLoaded", function () {

    // Ensure hoodie image loads by default and log if it’s loaded
    const hoodieImage = document.getElementById('hoodie-image');
    hoodieImage.addEventListener('load', function () {
        console.log('Hoodie image loaded successfully.');
    });

    // Toggle mobile menu visibility
    const hamburgerMenu = document.getElementById('hamburger-menu');
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', function () {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        });
    }

    // Toggle cart popup visibility
    const cartIcon = document.getElementById('cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', function () {
            document.getElementById('cart-popup').classList.toggle('hidden');
        });
    }

    // Initialize AOS (for animations)
    AOS.init();

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        let navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 10) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
});
