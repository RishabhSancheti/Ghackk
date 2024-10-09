let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    slides[i].setAttribute("aria-hidden", "true");
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }    
  slides[slideIndex - 1].style.display = "block";  
  slides[slideIndex - 1].setAttribute("aria-hidden", "false");
  setTimeout(showSlides, 3000);
}

const carouselContainer = document.getElementById('carousel-container');
const prevButton = document.getElementById('carousel-prev');
const nextButton = document.getElementById('carousel-next');

const scrollAmount = 300;

nextButton.addEventListener('click', () => {
  carouselContainer.scrollLeft += scrollAmount;
  updateCarouselLiveRegion(`Scrolled to next item.`);
});

prevButton.addEventListener('click', () => {
  carouselContainer.scrollLeft -= scrollAmount;
  updateCarouselLiveRegion(`Scrolled to previous item.`);
});

function updateCarouselLiveRegion(message) {
  const liveRegion = document.createElement('div');
  liveRegion.setAttribute('role', 'alert');
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.style.position = 'absolute';
  liveRegion.style.left = '-9999px'; 
  liveRegion.textContent = message;
  document.body.appendChild(liveRegion);
  
  setTimeout(() => {
    document.body.removeChild(liveRegion);
  }, 3000);
}