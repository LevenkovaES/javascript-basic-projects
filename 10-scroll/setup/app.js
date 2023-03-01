"use strict";
// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels
// ********** set date ************
const date = document.querySelector(".date");
const currentYear = new Date().getFullYear();
if (date) {
    date.textContent = "" + currentYear;
}
// ********** close links ************
const menuBtn = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.addEventListener("click", () => {
    if (linksContainer) {
        if (linksContainer === null || linksContainer === void 0 ? void 0 : linksContainer.classList.contains("show-links")) {
            linksContainer === null || linksContainer === void 0 ? void 0 : linksContainer.classList.remove("show-links");
            linksContainer.style.height = "0";
        }
        else {
            linksContainer === null || linksContainer === void 0 ? void 0 : linksContainer.classList.add("show-links");
            if (links) {
                linksContainer.style.height =
                    links.getBoundingClientRect().height + "px";
            }
        }
    }
});
// ********** fixed navbar ************
const navbar = document.querySelector("#nav");
window.addEventListener("scroll", () => {
    const arrowButton = document.querySelector(".top-link");
    if (!navbar)
        return;
    if (window.scrollY > navbar.getBoundingClientRect().height) {
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.add("fixed-nav");
        arrowButton === null || arrowButton === void 0 ? void 0 : arrowButton.classList.add("show-link");
    }
    else {
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove("fixed-nav");
        arrowButton === null || arrowButton === void 0 ? void 0 : arrowButton.classList.remove("show-link");
    }
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = e.target;
        const targetedElement = document.querySelector(`${target.getAttribute("href")}`);
        if (!targetedElement)
            return;
        const navHeight = navbar === null || navbar === void 0 ? void 0 : navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer === null || linksContainer === void 0 ? void 0 : linksContainer.getBoundingClientRect().height;
        const isFixed = navbar === null || navbar === void 0 ? void 0 : navbar.classList.contains("fixed-nav");
        let scrollPosition = navHeight
            ? targetedElement.offsetTop - navHeight
            : targetedElement.offsetTop;
        if (!isFixed && navHeight) {
            scrollPosition = scrollPosition - navHeight;
        }
        if (containerHeight && navHeight && navHeight > 82) {
            scrollPosition = scrollPosition + containerHeight;
        }
        window.scrollTo({
            top: scrollPosition,
            left: 0,
            behavior: "smooth",
        });
        if (linksContainer) {
            linksContainer.style.height = "0";
        }
    });
});
