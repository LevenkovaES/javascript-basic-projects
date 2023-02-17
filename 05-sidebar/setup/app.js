"use strict";
const closeButton = document.querySelector(".close-btn");
const openButton = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
openButton === null || openButton === void 0 ? void 0 : openButton.addEventListener("click", () => {
    sidebar === null || sidebar === void 0 ? void 0 : sidebar.classList.toggle("show-sidebar");
});
closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener("click", () => {
    sidebar === null || sidebar === void 0 ? void 0 : sidebar.classList.toggle("show-sidebar");
});
