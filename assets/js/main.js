// Toggle Menu
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
});

// Smooth Scroll
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });

        // Remove 'show-menu' class after clicking on a link (for mobile)
        navMenu.classList.remove('show-menu');
    });
});

// Handle Contact Form Submission
const contactForm = document.querySelector('.contact__form');
const contactButton = document.querySelector('.contact__button');

contactButton.addEventListener('click', function(event) {
    event.preventDefault();
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="mail"]').value;
    const message = contactForm.querySelector('textarea').value;

    if (name && email && message) {
        alert('Thank you for contacting us, ' + name + '! We will get back to you shortly.');
        contactForm.reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
