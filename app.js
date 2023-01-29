// Dropdown Hamburger Menu 

    // User clicks on the hamburger menu icon
        // Select the hamburger menu icon
    const hamburgerMenu = document.querySelector('.hamburgerMenu');
    const navLinks = document.querySelector('.navLinks');
    
    // on click - Menu items dopdown on the page.
   hamburgerMenu.addEventListener('click', function() {
    if(navLinks.classList.contains('showNav')) {
        navLinks.classList.remove('showNav');
        navLinks.classList.add('closing');
    } else {
        navLinks.classList.remove('closing');
        navLinks.classList.add('showNav');
    }
});

// Projects Carousel Section

// Scroll Loading Effect 

// Skills Section Hover State - rest of icons turning black and white