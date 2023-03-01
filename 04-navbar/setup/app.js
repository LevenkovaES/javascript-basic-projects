"use strict";
// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const button = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".links");
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    navLinks === null || navLinks === void 0 ? void 0 : navLinks.classList.toggle("show-links");
});
