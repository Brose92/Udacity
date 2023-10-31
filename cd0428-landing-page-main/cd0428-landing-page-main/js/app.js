/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// Global variables to store the navbar__list and section elements

const navbarList = document.getElementById('navbar__list');
const sectionElements = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
  


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// Function to create the navigation menu
function createNavigationMenu() {
    // Create a document fragment to optimize appending items to the list
    const fragment = document.createDocumentFragment();
  
    sectionElements.forEach((section, index) => {
      // Retrieve the section's id attribute and data-nav attribute
      const sectionId = section.id;
      const sectionDataNav = section.getAttribute('data-nav');
  
      // Create a list item <li> element
      const listItem = document.createElement('li');
  
      // Create an anchor <a> element
      const anchor = document.createElement('a');
      anchor.textContent = sectionDataNav;
      anchor.setAttribute('href', `#${sectionId}`);
      anchor.classList.add('menu__link');

      // Add a click event listener to the anchor element
    anchor.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default behavior of link clicks

        // Scroll to the corresponding section with smooth behavior
      section.scrollIntoView({ behavior: 'smooth' });
    });
  
      // Append the anchor to the list item
      listItem.appendChild(anchor);
  
      // Append the list item to the document fragment
      fragment.appendChild(listItem);
    });
  
    // Append the document fragment to the navbar__list element
    navbarList.appendChild(fragment);
}
  // Call the function to create the navigation menu
  createNavigationMenu();


// Scroll to anchor ID using scrollTO event


  
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 


  
  
// Set sections as active

const sections = document.querySelectorAll('section');
const navbar = document.querySelector('.navbar__list');

// Function to check if a section is in the viewport
function isSectionInViewport(section) {
  const bounds = section.getBoundingClientRect();
  return bounds.top >= 0 && bounds.bottom <= window.innerHeight;
}

// Function to set a section and its corresponding nav item as active
function setActive(sectionIndex) {
  sectionElements.forEach((section, index) => {
    const navItem = navbarList.children[index];
    if (index === sectionIndex) {
      section.classList.add('active-section');
      navItem.classList.add('active-nav-item');
    } else {
      section.classList.remove('active-section');
      navItem.classList.remove('active-nav-item');
    }
  });
}

// Event listener for scrolling
window.addEventListener('scroll', () => {
  let activeSectionIndex = -1;

  sectionElements.forEach((section, index) => {
    if (isSectionInViewport(section)) {
      activeSectionIndex = index;
    }
  });

  setActive(activeSectionIndex);
});

// Initially set the first section as active
setActive(0);


