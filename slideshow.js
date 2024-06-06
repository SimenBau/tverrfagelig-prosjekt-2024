const slideshow = document.querySelector('.slideshow');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

prevButton.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    updateSlide();
});

nextButton.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    updateSlide();
});

function updateSlide() {
    slides.forEach((slide, index) => {
        slide.style.opacity = index === currentSlide? 1 : 0;
    });
}

updateSlide();