import { preloadImages } from './utils.js';


// Function to animate the sixth grid
const animateSixthGrid = () => {
  const grid = document.querySelector('[data-grid-sixth]');
  const gridImages = grid.querySelectorAll('.grid__img');
  
  gsap.timeline({
    defaults: {
      ease: 'none',
      duration: 2
    },
    // scrollTrigger: {
    //   trigger: grid,
    //   start: 'center center',
    //   end: '+=200%',
    //   pin: grid.parentNode,
    //   scrub: 0.5,
    // }
  })
  .from(gridImages, {
    stagger: {
      amount: 0.03,
      from: 'edges',
      grid: [3,3]
    },
    scale: 0.7,
    autoAlpha: 0
  })
  .from(grid, {
    scale: .7,
    skewY: 5,
  }, 0);
};

const moveFilmStrip = () => {
  gsap.to(".film-strip", {
    x: -1000, // Move to the left by 1500px
    // ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".film-strip", // Element that triggers the animation
      start: "bottom bottom", // Start animation when the top of the element hits the center of the viewport
      end: "bottom top", // End animation when the bottom of the element hits the top of the viewport
      scrub: true, // Smoothly animate during scroll
    }
  });  
}

const pinOpeningSection = () => {

  gsap.to(".pin-section", {
    scrollTrigger: {
        trigger: ".pin-section",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false, // Prevents additional space when pinned
    }
  });
}

// Main initialization function
const init = () => {

  // Call animations for each grid based on their data attributes
  animateSixthGrid();

  moveFilmStrip();

  pinOpeningSection(); 
  
};

// Preload images and initialize animations
preloadImages('.grid__img').then(() => {
  document.body.classList.remove('loading'); // Remove the loading class from the body
  init();
  window.scrollTo(0, 0);
});

// Handle mobile menu opening/closing
const mobileMenu = document.getElementById('mobile-menu');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close-icon');

// Function to open the mobile menu
function openMenu() {
  console.log('open');
  mobileMenu.classList.add('open');
}

// Function to close the mobile menu
function closeMenu() {
  console.log('close');
  mobileMenu.classList.remove('open');
}

// Add click event listeners
hamburger.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);

// Also handle touch events for mobile
// hamburger.addEventListener('touchstart', openMenu);
// closeIcon.addEventListener('touchstart', closeMenu);
