document.addEventListener('DOMContentLoaded', function() {
    // Get all the sections
    const sections = document.querySelectorAll('section');

    // Get the navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Function to check if an element is in view
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to update the active state of the navigation items
    function updateActiveNavLink() {
        sections.forEach((section, index) => {
            if (isElementInViewport(section)) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLinks[index].classList.add('active');
                
            }
        });
    }

    // Add an event listener for scroll events
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Call the function once to set initial state
    updateActiveNavLink();
});
function updatePositionIndicator() {
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY + windowHeight;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    function handleScroll() {
        const scrollY = window.scrollY;

        if (scrollY > 0) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        navLinks.forEach(link => {
            if (scrollY < 0) {
                link.classList.add('scrolled');
            } else {
                link.classList.remove('scrolled');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
});
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('nav').offsetHeight,
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;

    function showSlide(index) {
        carouselContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    document.querySelector('.carousel-prev').addEventListener('click', showPrevSlide);
    document.querySelector('.carousel-next').addEventListener('click', showNextSlide);
});
// Open Modal
document.querySelectorAll('.open-modal').forEach(function(button) {
    button.addEventListener('click', function() {
        var targetModal = document.getElementById(this.getAttribute('data-target'));
        targetModal.style.display = 'block';
    });
});

// Close Modal
document.querySelectorAll('.close-modal').forEach(function(button) {
    button.addEventListener('click', function() {
        var targetModal = this.parentElement.parentElement;
        targetModal.style.display = 'none';
    });
});
function view()
{
    alert("Sorry Package is not available right now")
}

