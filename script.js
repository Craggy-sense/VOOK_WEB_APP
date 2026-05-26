document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach(el => observer.observe(el));

    // Membership Form Submission
    const membershipForm = document.getElementById('membership-form');
    const formMessage = document.getElementById('form-message');

    if (membershipForm) {
        membershipForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const interest = document.getElementById('interest').value;

            // Clear previous messages
            formMessage.className = 'form-message';
            formMessage.style.display = 'none';

            if (!fullName || !email || !phone || !interest) {
                formMessage.textContent = 'Please fill out all required fields.';
                formMessage.classList.add('error');
                return;
            }

            // Simulate API submission
            const submitButton = membershipForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Submitting...';
            submitButton.disabled = true;

            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                
                // Show success state
                formMessage.textContent = `Thank you, ${fullName}! Your application has been submitted successfully. We will contact you soon.`;
                formMessage.classList.add('success');
                
                // Reset form
                membershipForm.reset();
            }, 1500);
        });
    }
});
