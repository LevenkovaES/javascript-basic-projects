"use strict";
const slides = document.querySelectorAll(".slide");
slides.forEach((element, index) => {
    element.style.left = `${index * 100}%`;
});
const prevButton = document.querySelector(".prevBtn");
const nextButton = document.querySelector(".nextBtn");
let counter = 0;
prevButton === null || prevButton === void 0 ? void 0 : prevButton.addEventListener("click", () => {
    --counter;
    shiftSlides();
});
nextButton === null || nextButton === void 0 ? void 0 : nextButton.addEventListener("click", () => {
    ++counter;
    shiftSlides();
});
function shiftSlides() {
    if (counter === slides.length) {
        counter = 0;
    }
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slides.forEach((element) => {
        element.style.transform = `translateX(-${counter * 100}%)`;
    });
}
