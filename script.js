// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('hide');
        // Start animations after preloader is hidden
        startAnimations();
    }, 2000);
});

// Start animations
function startAnimations() {
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.section-title, .destination-card, .package-card, .stat-item, .gallery-item');
    animatedElements.forEach(element => {
        element.style.opacity = '1';
    });
}

// Mobile Navigation
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const navLinks = document.getElementById('navLinks');
const navLinksItems = document.querySelectorAll('.nav-link');

// Open menu
openMenu.addEventListener('click', () => {
    navLinks.classList.add('active');
});

// Close menu
closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('active');
});

// Close menu when clicking on a nav link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Sticky Header
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Scroll Animation
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section-title, .destination-card, .package-card, .stat-item, .about-img, .about-content, .contact-info, .contact-form, .gallery-item');}