const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

const prevBtn = document.querySelector(".carousel-prev-btn");
const nextBtn = document.querySelector(".carousel-next-btn");

let counter = 0;
const slideWidth = carouselImages[0].clientWidth;

// Set the initial position of the carousel
carouselSlide.style.transform = `translateX(-${slideWidth * counter}px)`;

// Button listeners
nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) {
    counter = 0; // Reset to the first photo
  } else {
    counter++;
  }
  carouselSlide.style.transform = `translateX(-${slideWidth * counter}px)`;
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) {
    counter = carouselImages.length - 1; // Go to the last photo
  } else {
    counter--;
  }
  carouselSlide.style.transform = `translateX(-${slideWidth * counter}px)`;
});