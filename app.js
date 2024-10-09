let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }    
  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

const carouselContainer = document.getElementById('carousel-container');
const prevButton = document.getElementById('carousel-prev');
const nextButton = document.getElementById('carousel-next');

// Carousel scrolling step size (in pixels)
const scrollAmount = 300;

// Event listener for 'Next' button
nextButton.addEventListener('click', () => {
  carouselContainer.scrollLeft += scrollAmount;
});

// Event listener for 'Previous' button
prevButton.addEventListener('click', () => {
  carouselContainer.scrollLeft -= scrollAmount;
});