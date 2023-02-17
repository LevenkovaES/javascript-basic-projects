"use strict";
// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modalOverlay = document.querySelector(".modal-overlay");
modalBtn === null || modalBtn === void 0 ? void 0 : modalBtn.addEventListener("click", () => {
    modalOverlay === null || modalOverlay === void 0 ? void 0 : modalOverlay.classList.add("open-modal");
});
closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener("click", () => {
    modalOverlay === null || modalOverlay === void 0 ? void 0 : modalOverlay.classList.remove("open-modal");
});
