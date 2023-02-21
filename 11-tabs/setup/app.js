"use strict";
const buttonContainer = document.querySelector(".btn-container");
buttonContainer === null || buttonContainer === void 0 ? void 0 : buttonContainer.addEventListener("click", changeTab);
function changeTab(e) {
    const target = e.target;
    const targetButton = target.closest(".tab-btn");
    if (!targetButton || targetButton.classList.contains("active")) {
        return;
    }
    changeActiveButton();
    changeContent();
    function changeActiveButton() {
        const allBtns = buttonContainer === null || buttonContainer === void 0 ? void 0 : buttonContainer.querySelectorAll(".tab-btn");
        allBtns === null || allBtns === void 0 ? void 0 : allBtns.forEach((btn) => {
            btn === null || btn === void 0 ? void 0 : btn.classList.remove("active");
        });
        targetButton === null || targetButton === void 0 ? void 0 : targetButton.classList.add("active");
    }
    function changeContent() {
        var _a;
        const targetContentId = targetButton === null || targetButton === void 0 ? void 0 : targetButton.dataset.id;
        const allContent = document.querySelectorAll(".content");
        allContent === null || allContent === void 0 ? void 0 : allContent.forEach((content) => {
            content === null || content === void 0 ? void 0 : content.classList.remove("active");
        });
        if (targetContentId) {
            (_a = document.getElementById(targetContentId)) === null || _a === void 0 ? void 0 : _a.classList.add("active");
        }
    }
}
