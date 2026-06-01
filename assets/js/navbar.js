// navbar.js - LabSpy Navbar Functionality

document.addEventListener('DOMContentLoaded', function() {
    
    // Navbar scroll effect - adds 'scrolled' class when page is scrolled
    const navbar = document.querySelector('.navbar-labspy');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Run on load
    handleScroll();
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
    
});