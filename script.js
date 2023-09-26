


// Making toggle system
const carouselItems = document.querySelectorAll('.carousel-item');

carouselItems.forEach(item => {
  item.addEventListener('click', () => {
    // Toggle the 'active' class to expand/collapse
    carouselItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('collap');
      }
    });
    item.classList.toggle('collap');
  });
});
// Toggle syste end

// creating login system

// Function to make an item active
function makeActive(clickedItem) {
  // Remove the 'active' id from all <li> elements within userGuidenceRightContainer
  const allItems = document.querySelectorAll('.userGuidenceRightContainer li');
  allItems.forEach(item => {
    item.removeAttribute('id');
  });

  // Set the 'active' id to the clicked item
  clickedItem.id = 'active';

  // Hide all stepContainers
  const stepContainers = document.querySelectorAll('.stepContainer');
  stepContainers.forEach(container => {
    container.style.display = 'none';
  });

  // Show the stepContainer below the clicked item
  const stepContainer = clickedItem.nextElementSibling;
  if (stepContainer && stepContainer.classList.contains('stepContainer')) {
    stepContainer.style.display = 'block';
  }
}

// Set the first <li> element as active by default
const defaultActiveItem = document.getElementById('step1');
makeActive(defaultActiveItem);


// testimonial scroller

// Get the review container and scroll buttons
const reviewContainer = document.querySelector('.reviewContainer');
const scrollLeftButton = document.getElementById('scrollLeftButton');
const scrollRightButton = document.getElementById('scrollRightButton');

// Define the scroll amount
const scrollAmount = 380; // Adjust this value as needed

// Add event listener to the left scroll button
scrollLeftButton.addEventListener('click', () => {
  reviewContainer.scrollTo({
    left: reviewContainer.scrollLeft - scrollAmount,
    behavior: 'smooth' // Smooth scrolling
  });
});

// Add event listener to the right scroll button
scrollRightButton.addEventListener('click', () => {
  reviewContainer.scrollTo({
    left: reviewContainer.scrollLeft + scrollAmount,
    behavior: 'smooth' // Smooth scrolling
  });
});


// testimonial scroller


// Get the testimonial slider container
const testimonialSlider = document.querySelector('.testimonial-slider');



// Function to calculate scrollAmount based on screen width
function calculateScrollAmount() {
  const screenWidth = window.innerWidth;
  // Calculate scrollAmount based on screenWidth
  return screenWidth >= 600 ? Number(testimonialSlider.offsetWidth) + 116 : 400+16;
}

// Initial calculation and event listener
let scrollAmount1 = calculateScrollAmount();


// Add event listener to the left scroll button
document.getElementById('leftor').addEventListener('click', () => {
  testimonialSlider.style = 'overflow-x:scroll'

  testimonialSlider.scrollTo({
    left: testimonialSlider.scrollLeft - scrollAmount1,
    behavior: 'smooth' // Smooth scrolling
  });
  testimonialSlider.style = 'overflow:hidden'

});

// Add event listener to the right scroll button
document.getElementById('rightor').addEventListener('click', () => {
  testimonialSlider.style = 'overflow-x:scroll'

  testimonialSlider.scrollTo({
    left: testimonialSlider.scrollLeft + scrollAmount1,
    behavior: 'smooth' // Smooth scrolling
  });
  testimonialSlider.style = 'overflow:hidden'

});

