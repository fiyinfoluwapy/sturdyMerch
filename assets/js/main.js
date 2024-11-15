document.addEventListener('DOMContentLoaded', () => {
    // Select elements with the "data-animate" attribute
    const animatedElements = document.querySelectorAll("[data-animate]");
  
    if (animatedElements.length) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add the "visible" class when the element is in view
            entry.target.classList.add('visible');
            // Stop observing the element
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 }); // Trigger when 20% of the element is visible
  
      // Observe each animated element
      animatedElements.forEach(el => observer.observe(el));
    }
  });
      // Mobile Navigation Toggle
      document.getElementById('menu-button').addEventListener('click', () => {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.add('open');
        mobileMenu.style.display = 'block'; // Ensure it's visible
    });

    document.getElementById('close-menu').addEventListener('click', () => {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.remove('open');
        setTimeout(() => {
            mobileMenu.style.display = 'none'; // Hide after transition
        }, 300); 
    });
  
