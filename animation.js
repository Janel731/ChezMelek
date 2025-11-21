
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Hero animations
gsap.to('.hero-title',{
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out'
});

gsap.to('.hero-subtitle', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.6,
    ease: 'power3.out'
});

gsap.to('.btn-primary-custom', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.9,
    ease: 'power3.out'
});

// Parallax effect for hero
gsap.to('.hero', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    },
    backgroundPosition: '50% 100%',
    ease: 'none'
});

// Fade in animations
gsap.utils.toArray('.category-card').forEach(elem => {
    gsap.from(elem, {
        scrollTrigger:{
            trigger: elem,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });
});

// Fade in left animations
gsap.utils.toArray('.about-image').forEach(elem => {
    gsap.from(elem, {
        scrollTrigger: {
            trigger: elem,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power3.out'
    });
});

// Fade in right animations
gsap.utils.toArray('.about-text').forEach(elem => {
    gsap.from(elem, {
        scrollTrigger: {
            trigger: elem,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power3.out'
    });
});

// Scale in animations
// gsap.utils.toArray('.product-card').forEach(elem => {
//     gsap.from(elem, {
//         scrollTrigger: {
//             trigger: elem,
//             start: 'top 85%',
//             toggleActions: 'play none none reverse'
//         },
//         opacity: 0,
//         scale: 0.8,
//         duration: 0.8,
//        ease: 'power3.out'
//     });
// });

// Category cards hover effect
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        gsap.to(this.querySelector('img'), {
            scale: 1.15,
            duration: 0.6,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', function () {
        gsap.to(this.querySelector('img'), {
            scale: 1,
            duration: 0.6,
            ease: 'power2.out'
        });
    });
});

// Product cards animation on scroll
// gsap.utils.toArray('.product-card').forEach(card => {
//     gsap.from(card, {
//         scrollTrigger: {
//             trigger: card,
//             start: 'top 85%',
//             toggleActions: 'play none none reverse'
//         },
//         opacity: 0,
//         y: 60,
//         rotation: i % 2 === 0 ? -5 : 5,
//         duration: 0.8,
       
//         ease: 'power3.out'
//     });
// });

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 5px 30px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission animation
// document.querySelector('.contact-form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     gsap.to(this, {
//         scale: 0.95,
//         duration: 0.1,
//         yoyo: true,
//         repeat: 1,
//         onComplete: () => {
//             alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
//             this.reset();
//         }
//     });
// });   

// Feature items animation
gsap.utils.toArray('.feature-item').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        delay: i * 0.2,
        ease: 'power3.out'
    });
});

// Testimonial cards stagger animation
gsap.from('.testimonial-card', {
    scrollTrigger: {
        trigger: '.testimonials',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 80,
    stagger: 0.2,
    duration: 1,
    ease: 'power3.out'
});

// Contact items animation
gsap.utils.toArray('.contact-item').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: i * 0.15,
        ease: 'power3.out'
    });
});

// Footer animation
gsap.from('.footer-section',{
    scrollTrigger: {
        trigger: 'footer',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.8,
    ease: 'power3.out'
});
