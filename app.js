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
    
    // Projects Carousel Section

    // NameSpace for Carousel 

    const carousel = {};
    // User opens the page and the first layout they see is the first project display
    // User clicks right or left button to switch between project displays
        // Get the necessary elements 
            // Projects
            carousel.projectsAll = document.querySelector(".carouselPhotos");
            carousel.project = document.querySelector(".project")
            // Buttons
            carousel.prevBtn = document.querySelector(".left");
            carousel.nextBtn = document.querySelector(".right");

        // Event listener on the right and left buttons
        carousel.swipeRight = () => {
            nextBtn.addEventListener("click", (event) => {
                carousel.slideWidth = project.clientWidth;
                carousel.projectsAll.scrollRight += slideWidth;
            });
        };

        carousel.swipeLeft = () => {
            prevBtn.addEventListener("click", (event) => {
            carousel.slideWidth = project.clientWidth;
            projectsAll.scrollLeft -= slideWidth;
            });
        };

        // Each click the content for image, the project number display and the links related to it will renew. 
    // The user does not have to click oppesite direction button, the carousel will reset its order when the project amount is done. 
// Scroll Loading Effect 

// Skills Section Hover State - rest of icons turning black and white










