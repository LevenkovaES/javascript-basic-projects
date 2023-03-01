"use strict";
// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
const controlButton = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
controlButton === null || controlButton === void 0 ? void 0 : controlButton.addEventListener("click", () => {
    if (!(controlButton === null || controlButton === void 0 ? void 0 : controlButton.classList.contains("slide"))) {
        controlButton === null || controlButton === void 0 ? void 0 : controlButton.classList.add("slide");
        video === null || video === void 0 ? void 0 : video.pause();
    }
    else {
        controlButton === null || controlButton === void 0 ? void 0 : controlButton.classList.remove("slide");
        video === null || video === void 0 ? void 0 : video.play();
    }
});
const preloader = document.querySelector(".preloader");
window.addEventListener("load", () => {
    preloader === null || preloader === void 0 ? void 0 : preloader.classList.add("hide-preloader");
});
