document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const customCursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    });

    // Intersection Observer for animations
    const fadeElements = document.querySelectorAll('.fade-in-section, .fade-in-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navigation active state
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Particles
    const particlesContainer = document.querySelector('.particles-container');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 8 + 7}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particlesContainer.appendChild(particle);
    }

    // Set current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Sound effects (placeholder - actual implementation requires sound files)
    document.querySelectorAll('[data-sound-hover="true"]').forEach(el => {
        el.addEventListener('mouseenter', () => {
            // Sound would play here if files were available
        });
    });

    document.querySelectorAll('[data-sound-click="true"]').forEach(el => {
        el.addEventListener('click', () => {
            // Sound would play here if files were available
        });
    });
});

// Discord ID Copy Function
function copyDiscordId() {
    const discordId = 'xxzw0443';
    navigator.clipboard.writeText(discordId).then(() => {
        alert('تم نسخ معرف الديسكورد: ' + discordId);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}