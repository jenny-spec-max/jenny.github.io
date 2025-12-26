const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');


const currentTheme = localStorage.getItem('theme') || 'light-mode';

body.classList.add(currentTheme);
navbar.classList.add(currentTheme);
navLinks.classList.add(currentTheme);


updateThemeButtonText();

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        navbar.classList.remove('light-mode');
        navbar.classList.add('dark-mode');
        navLinks.classList.remove('light-mode');
        navLinks.classList.add('dark-mode');
        
        localStorage.setItem('theme', 'dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        navbar.classList.remove('dark-mode');
        navbar.classList.add('light-mode');
        navLinks.classList.remove('dark-mode');
        navLinks.classList.add('light-mode');
        
   
        localStorage.setItem('theme', 'light-mode');
    }
    
    updateThemeButtonText();
});


function updateThemeButtonText() {
    if (body.classList.contains('light-mode')) {
        themeToggle.textContent = '🌙 Dark Mode';
    } else {
        themeToggle.textContent = '☀️ Light Mode';
    }
}



const mobileMenuToggle = document.getElementById('mobileMenuToggle');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


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


const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
  
    if (name && email && message) {
        
        alert(`Thank you, ${name}! Your message has been sent successfully. I'll get back to you at ${email} soon!`);
        
        // Reset form
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
    
});



let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
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

console.log('%cWelcome to My Portfolio! 💜', 'color: #7c3aed; font-size: 20px; font-weight: bold;');
console.log('%cLooking for something? Feel free to explore the code!', 'color: #9333ea; font-size: 14px;');
console.log('%cMade with ❤️ and lots of ☕', 'color: #a855f7; font-size: 12px;');


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

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.opacity = '1';
        backToTopButton.style.transform = 'translateY(0)';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.transform = 'translateY(20px)';
    }
});


backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Project demo/GitHub link will be added here!');
    });
});



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


document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src; 
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});




window.addEventListener('load', () => {
    console.log('Portfolio loaded successfully! ✨');
    console.log('Theme:', localStorage.getItem('theme') || 'light-mode');

});
