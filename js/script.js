// ===== Theme Toggle =====
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// ===== Mobile Navigation =====
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animate hamburger icon
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ===== Onboarding Modal =====
const modal = document.getElementById('onboarding-modal');
const startOnboardingBtn = document.getElementById('start-onboarding');
const closeModalBtn = document.querySelector('.close-modal');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev-slide');
const nextBtn = document.getElementById('next-slide');
const slideIndicatorsContainer = document.querySelector('.slide-indicators');

let currentSlide = 0;

// Create slide indicators
slides.forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.classList.add('slide-indicator');
    if (index === 0) indicator.classList.add('active');
    slideIndicatorsContainer.appendChild(indicator);
});

const indicators = document.querySelectorAll('.slide-indicator');

// Check if user has seen onboarding
const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');

// Show modal on first visit
if (!hasSeenOnboarding) {
    setTimeout(() => {
        showModal();
    }, 1000);
}

startOnboardingBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', closeModal);

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        changeSlide(currentSlide - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        changeSlide(currentSlide + 1);
    } else {
        closeModal();
        localStorage.setItem('hasSeenOnboarding', 'true');
    }
});

function showModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    currentSlide = 0;
    changeSlide(0);
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    localStorage.setItem('hasSeenOnboarding', 'true');
}

function changeSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    currentSlide = index;

    // Update button text for last slide
    if (index === slides.length - 1) {
        nextBtn.textContent = 'Los geht\'s!';
    } else {
        nextBtn.textContent = 'Weiter';
    }

    // Disable/enable prev button on first slide
    if (index === 0) {
        prevBtn.style.opacity = '0.5';
        prevBtn.style.cursor = 'not-allowed';
    } else {
        prevBtn.style.opacity = '1';
        prevBtn.style.cursor = 'pointer';
    }
}

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all cards and sections for fade-in effect
const animatedElements = document.querySelectorAll('.subject-card, .contact-card, .section-header');
animatedElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ===== Navbar Scroll Effect =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'var(--shadow)';
    } else {
        navbar.style.boxShadow = 'var(--shadow-lg)';
    }

    lastScroll = currentScroll;
});

// ===== Logo Error Handling =====
const logo = document.getElementById('school-logo');
logo.addEventListener('error', function() {
    // If logo fails to load, hide it gracefully
    this.style.display = 'none';
    console.log('Logo konnte nicht geladen werden. Bitte füge dein Schullogo unter assets/logo.png hinzu.');
});

// ===== Keyboard Navigation for Modal =====
document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            if (currentSlide > 0) changeSlide(currentSlide - 1);
        } else if (e.key === 'ArrowRight') {
            if (currentSlide < slides.length - 1) {
                changeSlide(currentSlide + 1);
            } else {
                closeModal();
            }
        }
    }
});

// ===== Exam Date Countdown (Optional Enhancement) =====
const examDates = document.querySelectorAll('.exam-date .date');
examDates.forEach(dateElement => {
    const dateText = dateElement.textContent;
    const [day, month, year] = dateText.split('.');
    const examDate = new Date(year, month - 1, day);
    const today = new Date();

    const diffTime = examDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 0 && diffDays <= 30) {
        const parent = dateElement.parentElement;
        const countdown = document.createElement('span');
        countdown.style.fontSize = '0.85rem';
        countdown.style.color = 'var(--accent-color)';
        countdown.style.fontWeight = '600';
        countdown.textContent = ` (in ${diffDays} Tagen)`;
        dateElement.appendChild(countdown);
    }
});

// ===== Performance: Lazy Loading for External Links =====
const externalLinks = document.querySelectorAll('a[target="_blank"]');
externalLinks.forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
});

// ===== Console Welcome Message =====
console.log('%c🎓 Willkommen zur ESG Lernplattform!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cEntwickelt für die Elisabeth-Selbert-Gesamtschule, Bonn', 'color: #64748b; font-size: 14px;');
console.log('%cBei technischen Fragen: alberto.cabrera@esg.nrw.schule', 'color: #10b981; font-size: 12px;');
