// Simple and reliable JavaScript for portfolio functionality

console.log('Script file loaded!');

// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully!');
    
    // Initialize AOS if available
    if (typeof AOS !== 'undefined') {
        try {
            AOS.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: true
            });
            console.log('AOS initialized successfully!');
        } catch (error) {
            console.log('AOS not available or error:', error);
        }
    }
    
    // Simple View My Work button functionality
    const viewWorkBtn = document.querySelector('a[href="#projects"]');
    if (viewWorkBtn) {
        console.log('View My Work button found!');
        viewWorkBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('View My Work button clicked!');
            
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                console.log('Scrolling to projects section...');
                projectsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                console.error('Projects section not found!');
            }
        });
    } else {
        console.error('View My Work button not found!');
    }
    
    // Test social links
    const githubLink = document.querySelector('a[href*="github.com"]');
    const linkedinLink = document.querySelector('a[href*="linkedin.com"]');
    
    if (githubLink) {
        console.log('GitHub link found:', githubLink.href);
        githubLink.addEventListener('click', function() {
            console.log('GitHub link clicked!');
        });
    }
    
    if (linkedinLink) {
        console.log('LinkedIn link found:', linkedinLink.href);
        linkedinLink.addEventListener('click', function() {
            console.log('LinkedIn link clicked!');
        });
    }
    
    // Simple smooth scrolling for all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Enhanced form handling: send messages to email via Formsubmit.co (AJAX)
    const contactForm = document.getElementById('contact-form');
    const contactFeedback = document.getElementById('contact-feedback');
    const contactSubmit = document.getElementById('contact-submit');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Progressive enhancement: if form has no action, fallback to simple alert
            const action = contactForm.getAttribute('action');
            if (!action) {
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
                return;
            }

            // Prepare UI
            if (contactSubmit) {
                contactSubmit.disabled = true;
                contactSubmit.textContent = 'Sending...';
            }
            if (contactFeedback) {
                contactFeedback.textContent = '';
            }

            // Use Formsubmit's AJAX endpoint: replace base with /ajax/
            let ajaxEndpoint = action;
            try {
                ajaxEndpoint = action.replace(/^https:\/\/(www\.)?formsubmit\.co\//i, 'https://formsubmit.co/ajax/');
            } catch (err) {
                // fallback: append /ajax/
                ajaxEndpoint = action.replace(/\/$/, '') + '/ajax';
            }

            const formData = new FormData(contactForm);

            try {
                const res = await fetch(ajaxEndpoint, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (!res.ok) {
                    const errorText = await res.text();
                    throw new Error(errorText || 'Network response was not ok');
                }

                const json = await res.json();
                if (contactFeedback) {
                    contactFeedback.classList.remove('text-danger');
                    contactFeedback.classList.add('text-success');
                    contactFeedback.textContent = json.message || 'Thank you — your message has been sent!';
                } else {
                    alert('Thank you — your message has been sent!');
                }
                contactForm.reset();
            } catch (error) {
                console.error('Form submission error:', error);
                if (contactFeedback) {
                    contactFeedback.classList.remove('text-success');
                    contactFeedback.classList.add('text-danger');
                    contactFeedback.textContent = 'Oops — there was a problem sending your message. Please try again later.';
                } else {
                    alert('There was a problem sending your message. Please try again later.');
                }
            } finally {
                if (contactSubmit) {
                    contactSubmit.disabled = false;
                    contactSubmit.textContent = 'Send Message';
                }
            }
        });
    }
    
    console.log('All functionality initialized successfully!');
});

// Fallback in case DOMContentLoaded doesn't fire
window.addEventListener('load', function() {
    console.log('Window loaded!');
});