// Barebones Slideshow script

let currentSlide = 0;
showSlide(currentSlide);

function showSlide(x) {
    // Get the slides into an array
    const slides = document.getElementsByClassName("slide");

    // Ensure index is not out of bounds
    if (x >= slides.length) currentSlide = 0;
    if (x < 0) currentSlide = slides.length - 1;

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Then show the current slide
    slides[currentSlide].style.display = "block";
}

function navigateSlides(x) {
    showSlide(currentSlide += x);
}