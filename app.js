// Dropdown Hamburger Menu 

    // Namespacing for dropdown Menu
    const dropMenu = {};

    // User clicks on the hamburger menu icon
        // Select the hamburger menu icon
    dropMenu.hamburgerMenu = document.querySelector('.hamburgerMenu');
    dropMenu.navLinks = document.querySelector('.navLinks');
    
    // on click - Menu items dopdown on the page.
    dropMenu.swipeProjects = () => {
        dropMenu.hamburgerMenu.addEventListener('click', function() {
         if(dropMenu.navLinks.classList.contains('showNav')) {
             dropMenu.navLinks.classList.remove('showNav');
             dropMenu.navLinks.classList.add('closing');
         } else {
             dropMenu.navLinks.classList.remove('closing');
             dropMenu.navLinks.classList.add('showNav');
         }
     });
    }

    // On Page Load 
    dropMenu.init = () => {
        dropMenu.swipeProjects();
    }
    
    dropMenu.init();
    
    










