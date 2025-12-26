// ===== THEME TOGGLE WITH LOCALSTORAGE =====

// Get theme toggle button and navbar
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');

// Check for saved theme preference or default to 'light-mode'
const currentTheme = localStorage.getItem('theme') || 'light-mode';

// Apply the saved theme on page load
body.classList.add(currentTheme);
navbar.classList.add(currentTheme);
navLinks.classList.add(currentTheme);

// Update button text based on current theme
updateThemeButtonText();

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    // Toggle between light and dark mode
    if (body.classList.contains('light-mode')) {
        // Switch to dark mode
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        navbar.classList.remove('light-mode');
        navbar.classList.add('dark-mode');
        navLinks.classList.remove('light-mode');
        navLinks.classList.add('dark-mode');
        
        // Save preference to localStorage
        localStorage.setItem('theme', 'dark-mode');
    } else {
        // Switch to light mode
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        navbar.classList.remove('dark-mode');
        navbar.classList.add('light-mode');
        navLinks.classList.remove('dark-mode');
        navLinks.classList.add('light-mode');
        
        // Save preference to localStorage
        localStorage.setItem('theme', 'light-mode');
    }
    
    // Update button text
    updateThemeButtonText();
});

// Function to update theme button text
function updateThemeButtonText() {
    if (body.classList.contains('light-mode')) {
        themeToggle.textContent = '🌙 Dark Mode';
    } else {
        themeToggle.textContent = '☀️ Light Mode';
    }
}


// ===== MOBILE MENU TOGGLE =====

const mobileMenuToggle = document.getElementById('mobileMenuToggle');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


// ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});




// ===== CONTACT FORM SUBMISSION =====

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && message) {
        // Show success message
        alert(`Thank you, ${name}! Your message has been sent successfully. I'll get back to you at ${email} soon!`);
        
        // Reset form
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
    
    // Note: In a real application, you would send this data to a server
    // For example, using fetch() API or a form submission service
});


// ===== NAVBAR SCROLL EFFECT =====

let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(124, 58, 237, 0.2)';
    } else {
        if (body.classList.contains('light-mode')) {
            navbar.style.boxShadow = '0 2px 10px rgba(124, 58, 237, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(124, 58, 237, 0.3)';
        }
    }
    
    lastScroll = currentScroll;
});


// ===== ACTIVE NAVIGATION LINK HIGHLIGHTING =====

// Get all sections
const sections = document.querySelectorAll('section');
const navLinksArray = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});


// ===== ANIMATE ELEMENTS ON SCROLL =====

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.about-card, .skill-category, .project-card, .contact-form-wrapper, .contact-info').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});


// ===== SKILL TAG ANIMATION =====

const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach((tag, index) => {
    tag.style.opacity = '0';
    tag.style.transform = 'scale(0.8)';
    tag.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    
    setTimeout(() => {
        tag.style.opacity = '1';
        tag.style.transform = 'scale(1)';
    }, index * 50);
});


// ===== TYPING EFFECT FOR TAGLINE (OPTIONAL) =====

const tagline = document.querySelector('.tagline');
const originalText = tagline.textContent;
let charIndex = 0;

function typeEffect() {
    if (charIndex < originalText.length) {
        tagline.textContent = originalText.slice(0, charIndex + 1);
        charIndex++;
        setTimeout(typeEffect, 100);
    }
}

// Uncomment below to enable typing effect
// tagline.textContent = '';
// typeEffect();


// ===== CONSOLE MESSAGE (EASTER EGG) =====

console.log('%cWelcome to My Portfolio! 💜', 'color: #7c3aed; font-size: 20px; font-weight: bold;');
console.log('%cLooking for something? Feel free to explore the code!', 'color: #9333ea; font-size: 14px;');
console.log('%cMade with ❤️ and lots of ☕', 'color: #a855f7; font-size: 12px;');


// ===== PREVENT RIGHT CLICK (OPTIONAL - REMOVE IF NOT NEEDED) =====

// Uncomment below to prevent right-click
// document.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
//     alert('Right-click is disabled on this portfolio.');
// });


// ===== BACK TO TOP BUTTON (OPTIONAL) =====

// Create back to top button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.id = 'backToTop';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary-purple);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 5px 15px rgba(124, 58, 237, 0.3);
`;

document.body.appendChild(backToTopButton);

// Show/hide back to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.opacity = '1';
        backToTopButton.style.transform = 'translateY(0)';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.transform = 'translateY(20px)';
    }
});

// Scroll to top when clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// ===== PROJECT LINKS FUNCTIONALITY =====

// Add event listeners to project links
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Project demo/GitHub link will be added here!');
        // In production, these would link to actual project pages
    });
});


// ===== FORM VALIDATION =====

// Real-time email validation
const emailInput = document.getElementById('email');

emailInput.addEventListener('blur', () => {
    const emailValue = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailValue && !emailPattern.test(emailValue)) {
        emailInput.style.borderColor = 'red';
        alert('Please enter a valid email address.');
    } else {
        emailInput.style.borderColor = 'var(--primary-purple)';
    }
});


// ===== PERFORMANCE OPTIMIZATION =====

// Lazy load images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src; // Trigger load
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});


// ===== WELCOME MESSAGE =====

window.addEventListener('load', () => {
    console.log('Portfolio loaded successfully! ✨');
    console.log('Theme:', localStorage.getItem('theme') || 'light-mode');
});