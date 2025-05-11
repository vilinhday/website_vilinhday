/**
 * Portfolio Website JavaScript
 * Based on yan-holtz.com design
 */

document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Service Card Expansion
    const expandButtons = document.querySelectorAll('.expand-btn');
    
    expandButtons.forEach(button => {
        button.addEventListener('click', () => {
            const serviceDetails = button.nextElementSibling;
            
            if (serviceDetails.style.display === 'block') {
                serviceDetails.style.display = 'none';
                button.textContent = '+';
            } else {
                serviceDetails.style.display = 'block';
                button.textContent = '−';
            }
        });
    });
    
    // Project Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.getAttribute('data-category').includes(filterValue)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Project Modal
    const modal = document.getElementById('project-modal');
    const closeModal = document.querySelector('.close-modal');
    
    // Project data (in a real scenario, this would come from a database or API)
    const projectData = [
        {
            title: 'Project 1',
            image: 'images/project1.jpg',
            description: 'Detailed description of Project 1. This is where you would provide a comprehensive explanation of the project, including its goals, challenges, and solutions.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            liveLink: '#',
            githubLink: '#'
        },
        {
            title: 'Project 2',
            image: 'images/project2.jpg',
            description: 'Detailed description of Project 2. This is where you would provide a comprehensive explanation of the project, including its goals, challenges, and solutions.',
            technologies: ['React', 'Node.js', 'MongoDB'],
            liveLink: '#',
            githubLink: '#'
        },
        {
            title: 'Project 3',
            image: 'images/project3.jpg',
            description: 'Detailed description of Project 3. This is where you would provide a comprehensive explanation of the project, including its goals, challenges, and solutions.',
            technologies: ['Vue.js', 'Express', 'PostgreSQL'],
            liveLink: '#',
            githubLink: '#'
        },
        {
            title: 'Project 4',
            image: 'images/project4.jpg',
            description: 'Detailed description of Project 4. This is where you would provide a comprehensive explanation of the project, including its goals, challenges, and solutions.',
            technologies: ['Angular', 'Firebase', 'SCSS'],
            liveLink: '#',
            githubLink: '#'
        },
        {
            title: 'Project 5',
            image: 'images/project5.jpg',
            description: 'Detailed description of Project 5. This is where you would provide a comprehensive explanation of the project, including its goals, challenges, and solutions.',
            technologies: ['WordPress', 'PHP', 'MySQL'],
            liveLink: '#',
            githubLink: '#'
        },
        {
            title: 'Project 6',
            image: 'images/project6.jpg',
            description: 'Detailed description of Project 6. This is where you would provide a comprehensive explanation of the project, including its goals, challenges, and solutions.',
            technologies: ['Three.js', 'WebGL', 'GSAP'],
            liveLink: '#',
            githubLink: '#'
        }
    ];
    
    projectCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            const project = projectData[index];
            
            // Populate modal with project data
            document.getElementById('modal-title').textContent = project.title;
            document.getElementById('modal-image').src = project.image;
            document.getElementById('modal-description').textContent = project.description;
            
            // Clear and populate technologies list
            const techList = document.getElementById('modal-technologies');
            techList.innerHTML = '';
            project.technologies.forEach(tech => {
                const li = document.createElement('li');
                li.textContent = tech;
                techList.appendChild(li);
            });
            
            // Set links
            document.getElementById('live-link').href = project.liveLink;
            document.getElementById('github-link').href = project.githubLink;
            
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
    });
    
    // Close modal when clicking the close button
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });
    
    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.querySelector('.prev-testimonial');
    const nextButton = document.querySelector('.next-testimonial');
    let currentSlide = 0;
    
    // Hide all slides except the first one
    testimonialSlides.forEach((slide, index) => {
        if (index !== 0) {
            slide.style.display = 'none';
        }
    });
    
    // Show the specified slide
    function showSlide(index) {
        testimonialSlides.forEach(slide => {
            slide.style.display = 'none';
        });
        testimonialSlides[index].style.display = 'block';
    }
    
    // Navigate to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialSlides.length;
        showSlide(currentSlide);
    }
    
    // Navigate to the previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
        showSlide(currentSlide);
    }
    
    // Event listeners for testimonial navigation
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
    
    // Auto-rotate testimonials every 5 seconds
    setInterval(nextSlide, 5000);
    
    // Form Validation and Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Email validation using regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // In a real application, you would send the form data to a server here
            // For this example, we'll just show a success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.section-header, .hero-content, .about-content, .service-card, .project-card, .testimonial-content, .contact-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight * 0.85) {
                element.classList.add('fade-in');
            }
        });
    };
    
    // Add fade-in class to elements on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Initial check for elements in viewport
    animateOnScroll();
    
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Hiệu ứng typing cho tiêu đề hero
    function setupTypingEffect() {
        const typingElement = document.querySelector('.typing-text');
        const text = "Your Name"; // Thay bằng tên của bạn
        if (typingElement) {
            typingElement.textContent = "";
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    typingElement.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 100);
        }
    }

    document.addEventListener('DOMContentLoaded', setupTypingEffect);

    // Hiệu ứng fade-in khi cuộn
    function handleScrollAnimations() {
        const elements = document.querySelectorAll('.fade-in');
        const observer = new window.IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        elements.forEach(element => {
            observer.observe(element);
        });
    }
    document.addEventListener('DOMContentLoaded', handleScrollAnimations);

    // Hiệu ứng timeline
    function animateTimeline() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 200);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        timelineItems.forEach(item => {
            observer.observe(item);
        });
    }
    document.addEventListener('DOMContentLoaded', animateTimeline);
}); 
