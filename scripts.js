// Set attribute for external link icons, target="_blank"

const externalLinks = document.getElementsByClassName("nav-icon");

for (let i = 0; i < externalLinks.length; i++) {
    externalLinks[i].setAttribute('target', '_blank');
}

// Placeholder javascript form validation script in lieu of POSTing

const submitButton = document.getElementById("submit-contact-form").addEventListener("click", validateFields);

function validateFields() {
    const nameInput = document.getElementById("fullname");
    const nameMessage = document.getElementById("required-fullname");

    if (!nameInput.checkValidity()) {
        nameMessage.innerHTML = nameInput.validationMessage;
    } else {
        nameMessage.innerHTML = "Okay";
    }

    const emailInput = document.getElementById("emailaddress");
    const emailMessage = document.getElementById("required-email");

    if (!emailInput.checkValidity()) {
        emailMessage.innerHTML = emailInput.validationMessage;
    } else {
        emailMessage.innerHTML = "Okay";
    }

    const messageInput = document.getElementById("messagebox");
    const messageBoxMessage = document.getElementById("required-message");

    if (!messageInput.checkValidity()) {
        messageBoxMessage.innerHTML = messageInput.validationMessage;
    } else {
        messageBoxMessage.innerHTML = "Okay";
    }
}

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